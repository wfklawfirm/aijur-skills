import "server-only";
import type { Locale } from "@content/types";
import { asData, runAgent, type AgentResult } from "../provider";
import { adaptiveHookSchema, type AdaptiveHookOutput } from "../schemas";
import { composeHookOffline, type HookComposeInput } from "@/lib/adaptive/hook-composer";

export const ADAPTIVE_HOOK_PROMPT_VERSION = "hook-2026.08.1";

export interface AdaptiveHookContext extends HookComposeInput {
  locale: Locale;
  userId: string;
  organizationId: string | null;
  allowRemote: boolean;
}

/**
 * Layer 3 of the hybrid content model: Runtime Personalization via a real
 * model call, when one is configured (`allowRemote` + a provider key) --
 * otherwise `runAgent()` falls straight through to the same deterministic
 * composer used everywhere else (see hook-composer.ts), so the two paths
 * never produce structurally different output, only differently-worded one.
 *
 * The model is given the *exact same* dimension combination the offline
 * composer would use (skill, hook type, career stage, counterparty, channel,
 * tone, goal) -- it is asked to write fresh wording for that combination,
 * not to invent a new situation. This keeps AI-generated hooks inside the
 * Controlled Generative Templates layer's guardrails rather than free-form.
 */
function systemPrompt(ctx: AdaptiveHookContext): string {
  const langLine = ctx.locale === "en" ? "Write in English." : "Write in Modern Standard Arabic.";
  return `You are writing a single short "hook" -- a one-glance engagement prompt shown to a lawyer or law student before they practice a specific professional skill. This is NOT a scenario, NOT a graded question, and NOT legal advice -- it is a short, realistic prompt that makes them think for a second before they start practicing.

# What to write
Hook type: ${ctx.hookTypeId} (write in this style -- do not switch to a different hook type)
Skill: ${ctx.skillName}
The other party in the situation: a "${ctx.counterpartyId}" who is "${ctx.toneId}", reaching the learner via "${ctx.channelId}"
Learner's implied goal in the moment: "${ctx.goalId}"
Learner's career stage: ${ctx.careerStageId}
${langLine}

# Hard rules
- Never have anyone guarantee a legal outcome, promise a result, or say "don't worry" about the outcome.
- Never use a real, identifiable person's name or a well-known company/case name.
- Never rely on a national, cultural, or gender stereotype for the counterparty's behavior.
- Title: max 80 characters. Body: max 280 characters. No markdown, no emoji.
- Do not repeat the exact combination back as a list -- write it as one natural short scene or question, in the voice of a professional training app.

# Output
Return ONLY a JSON object, no prose and no code fence:
{"title": string, "body": string, "attribution": string|null}`;
}

export async function generateHook(ctx: AdaptiveHookContext): Promise<AgentResult<AdaptiveHookOutput>> {
  return runAgent({
    agent: "adaptive_hook",
    promptVersion: ADAPTIVE_HOOK_PROMPT_VERSION,
    system: systemPrompt(ctx),
    messages: [{ role: "user", content: asData("context", `Compose the hook now for skill: ${ctx.skillName}`) }],
    schema: adaptiveHookSchema,
    temperature: 0.8,
    maxOutputTokens: 300,
    userId: ctx.userId,
    organizationId: ctx.organizationId,
    allowRemote: ctx.allowRemote,
    offline: () => composeHookOffline(ctx),
  });
}
