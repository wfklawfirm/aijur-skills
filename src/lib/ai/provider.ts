import "server-only";
import { createHash } from "node:crypto";
import type { z } from "zod";
import { db } from "@/lib/db";
import { aiModelRuns } from "@/lib/db/schema";
import { uid } from "@/lib/utils";

/**
 * Provider abstraction.
 *
 * Three rules shaped this file:
 *
 *  1. **No provider lock-in.** Agents describe what they want; this layer picks
 *     a provider. Swapping Anthropic for an OpenAI-compatible endpoint (or a
 *     regional/self-hosted one) is an env change.
 *  2. **It must work with no key at all.** Every agent ships a deterministic
 *     `offline` implementation with the same output schema, so simulation and
 *     assessment screens are fully functional before anyone buys credits — and
 *     stay functional when a provider is down or a learner withholds consent.
 *  3. **Every call is on the record.** Provider, model, prompt version, rubric
 *     version, input hash, tokens, cost, latency, confidence, retries. A score a
 *     learner disputes has to be reproducible.
 */

export type AgentName =
  | "simulation"
  | "evaluation"
  | "coaching"
  | "language"
  | "recommendation"
  | "safety";

export type ProviderName = "offline" | "anthropic" | "openai";

export interface AiMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AgentRequest<T> {
  agent: AgentName;
  promptVersion: string;
  rubricVersion?: string;
  system: string;
  messages: AiMessage[];
  schema: z.ZodType<T>;
  /** Deterministic implementation with identical output shape. */
  offline: () => T;
  userId?: string | null;
  organizationId?: string | null;
  maxOutputTokens?: number;
  temperature?: number;
  /** Set false when the learner has not consented to AI processing. */
  allowRemote?: boolean;
}

export interface AgentResult<T> {
  data: T;
  runId: string;
  provider: ProviderName;
  model: string;
  degraded: boolean;
}

const TIMEOUT_MS = 30_000;
const MAX_RETRIES = 1;

function providerConfig(name: ProviderName) {
  switch (name) {
    case "anthropic":
      return {
        key: process.env.ANTHROPIC_API_KEY,
        model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6",
      };
    case "openai":
      return {
        key: process.env.OPENAI_API_KEY,
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      };
    default:
      return { key: "offline", model: "offline-rules-v1" };
  }
}

function resolveChain(allowRemote: boolean): ProviderName[] {
  if (!allowRemote) return ["offline"];
  const primary = (process.env.AI_PRIMARY_PROVIDER as ProviderName) || "offline";
  const fallback = (process.env.AI_FALLBACK_PROVIDER as ProviderName) || "offline";
  const chain: ProviderName[] = [];
  for (const p of [primary, fallback]) {
    if (p && p !== "offline" && providerConfig(p).key && !chain.includes(p)) chain.push(p);
  }
  chain.push("offline");
  return chain;
}

function hashInput(system: string, messages: AiMessage[]): string {
  return createHash("sha256")
    .update(system)
    .update(messages.map((m) => `${m.role}:${m.content}`).join("\n"))
    .digest("hex");
}

/**
 * Models drift into prose or code fences even when told not to. Rather than
 * failing the learner's screen over formatting, pull the first balanced JSON
 * object out of the response and validate that.
 */
function extractJson(raw: string): unknown {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = (fenced?.[1] ?? raw).trim();
  const start = candidate.indexOf("{");
  if (start === -1) throw new Error("No JSON object in model output");
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < candidate.length; i++) {
    const ch = candidate[i]!;
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') inString = true;
    else if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return JSON.parse(candidate.slice(start, i + 1));
    }
  }
  throw new Error("Unbalanced JSON in model output");
}

interface RawCall {
  text: string;
  inputTokens?: number;
  outputTokens?: number;
}

async function callAnthropic(req: AgentRequest<unknown>, model: string, key: string): Promise<RawCall> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: req.maxOutputTokens ?? 1400,
      temperature: req.temperature ?? 0.4,
      system: req.system,
      messages: req.messages,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const json = (await res.json()) as {
    content?: { type: string; text?: string }[];
    usage?: { input_tokens?: number; output_tokens?: number };
  };
  const text = (json.content ?? []).map((c) => c.text ?? "").join("");
  return { text, inputTokens: json.usage?.input_tokens, outputTokens: json.usage?.output_tokens };
}

async function callOpenAi(req: AgentRequest<unknown>, model: string, key: string): Promise<RawCall> {
  const base = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  const res = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      max_tokens: req.maxOutputTokens ?? 1400,
      temperature: req.temperature ?? 0.4,
      response_format: { type: "json_object" },
      messages: [{ role: "system", content: req.system }, ...req.messages],
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`openai ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const json = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
    usage?: { prompt_tokens?: number; completion_tokens?: number };
  };
  return {
    text: json.choices?.[0]?.message?.content ?? "",
    inputTokens: json.usage?.prompt_tokens,
    outputTokens: json.usage?.completion_tokens,
  };
}

/** Rough public list prices, per million tokens. Used for cost control only. */
const PRICING: Record<string, { in: number; out: number }> = {
  "claude-sonnet-4-6": { in: 3, out: 15 },
  "gpt-4.1-mini": { in: 0.4, out: 1.6 },
};

export async function runAgent<T>(req: AgentRequest<T>): Promise<AgentResult<T>> {
  const chain = resolveChain(req.allowRemote !== false);
  const inputHash = hashInput(req.system, req.messages);
  let retryCount = 0;
  let lastError: string | null = null;

  for (const provider of chain) {
    const { key, model } = providerConfig(provider);

    if (provider === "offline") {
      const started = Date.now();
      const data = req.offline();
      const runId = await record({
        req,
        provider,
        model,
        inputHash,
        output: data,
        latencyMs: Date.now() - started,
        retryCount,
        error: lastError,
        confidence: confidenceOf(data),
      });
      return { data, runId, provider, model, degraded: chain.length > 1 };
    }

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      const started = Date.now();
      try {
        const raw =
          provider === "anthropic"
            ? await callAnthropic(req as AgentRequest<unknown>, model, key!)
            : await callOpenAi(req as AgentRequest<unknown>, model, key!);

        const parsed = req.schema.parse(extractJson(raw.text));
        const price = PRICING[model];
        const runId = await record({
          req,
          provider,
          model,
          inputHash,
          output: parsed,
          latencyMs: Date.now() - started,
          inputTokens: raw.inputTokens,
          outputTokens: raw.outputTokens,
          costUsd: price
            ? ((raw.inputTokens ?? 0) * price.in + (raw.outputTokens ?? 0) * price.out) / 1_000_000
            : undefined,
          retryCount,
          error: null,
          confidence: confidenceOf(parsed),
        });
        return { data: parsed, runId, provider, model, degraded: false };
      } catch (err) {
        lastError = err instanceof Error ? err.message : String(err);
        retryCount++;
      }
    }
  }

  // resolveChain always ends with "offline", so this is unreachable in practice.
  throw new Error(`All AI providers failed: ${lastError}`);
}

function confidenceOf(data: unknown): number | undefined {
  if (data && typeof data === "object" && "confidence" in data) {
    const c = (data as { confidence: unknown }).confidence;
    if (typeof c === "number") return c;
  }
  return undefined;
}

async function record(args: {
  req: AgentRequest<unknown>;
  provider: ProviderName;
  model: string;
  inputHash: string;
  output: unknown;
  latencyMs: number;
  inputTokens?: number;
  outputTokens?: number;
  costUsd?: number;
  retryCount: number;
  error: string | null;
  confidence?: number;
}): Promise<string> {
  const id = uid("run");
  try {
    await db.insert(aiModelRuns).values({
      id,
      userId: args.req.userId ?? null,
      organizationId: args.req.organizationId ?? null,
      agent: args.req.agent,
      provider: args.provider,
      model: args.model,
      promptVersion: args.req.promptVersion,
      rubricVersion: args.req.rubricVersion ?? null,
      inputHash: args.inputHash,
      outputJson: args.output as never,
      inputTokens: args.inputTokens ?? null,
      outputTokens: args.outputTokens ?? null,
      costUsd: args.costUsd ?? null,
      latencyMs: args.latencyMs,
      confidence: args.confidence ?? null,
      retryCount: args.retryCount,
      error: args.error,
    });
  } catch {
    // Telemetry must never take down a learner's screen.
  }
  return id;
}

/**
 * Prompt-injection defence. Learner text, client messages and book excerpts are
 * all untrusted; they go inside a fenced block that the system prompt tells the
 * model to treat strictly as data.
 */
export function asData(label: string, content: string): string {
  const safe = content.replace(/<\/?untrusted[^>]*>/gi, "");
  return `<untrusted source="${label}">\n${safe}\n</untrusted>`;
}
