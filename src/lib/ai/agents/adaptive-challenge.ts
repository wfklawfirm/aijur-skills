import "server-only";
import type { Locale } from "@content/types";
import { asData, runAgent, type AgentResult } from "../provider";
import { adaptiveHookSchema, type AdaptiveHookOutput } from "../schemas";
import { composeChallengeOffline, type ChallengeComposeInput } from "@/lib/adaptive/challenge-composer";

export const ADAPTIVE_CHALLENGE_PROMPT_VERSION = "challenge-2026.08.1";

export interface AdaptiveChallengeContext extends ChallengeComposeInput {
  locale: Locale;
  userId: string;
  organizationId: string | null;
  allowRemote: boolean;
}

/**
 * Layer 3 for Daily Challenge (see docs/ADAPTIVE_ENGINE_ARCHITECTURE.md §14)
 * -- the same runtime-personalization role adaptive-hook.ts plays for hooks,
 * over the same runAgent() abstraction, with the same offline fallback to
 * the deterministic composer. Reuses `adaptiveHookSchema` rather than
 * defining a parallel schema: the output shape ({title, body, attribution})
 * is identical for both content types, only the system prompt (what kind of
 * text to write) differs.
 */
function systemPrompt(ctx: AdaptiveChallengeContext): string {
  const langLine = ctx.locale === "en" ? "Write in English." : "Write in Modern Standard Arabic.";
  return `You are writing a single short "Daily Challenge" -- a concrete micro-action a lawyer or law student is asked to actually DO today, tied to a specific professional skill. This is NOT a scenario, NOT a graded question, and NOT legal advice. Unlike a "hook" (a reflective prompt or question), a challenge ends in an instruction: go do this one small thing today.

# What to write
Challenge type: ${ctx.challengeTypeId} (write in this style -- do not switch to a different challenge type)
Skill: ${ctx.skillName}
The other party the action involves, if relevant: a "${ctx.counterpartyId}" who is "${ctx.toneId}", via "${ctx.channelId}"
Implied goal: "${ctx.goalId}"
Learner's career stage: ${ctx.careerStageId}
${langLine}

# Hard rules
- End with a concrete instruction or ask for a short, specific piece of evidence back (e.g. "write two lines tonight"), not just a reflective question.
- Never have anyone guarantee a legal outcome, promise a result, or say "don't worry" about the outcome.
- Never use a real, identifiable person's name or a well-known company/case name.
- Never rely on a national, cultural, or gender stereotype for the counterparty's behavior.
- Title: max 60 characters. Body: 20-260 characters total. No markdown, no emoji.
- Do not repeat the exact combination back as a list -- write it as one natural short instruction, in the voice of a professional training app.

# Output
Return ONLY a JSON object, no prose and no code fence:
{"title": string, "body": string, "attribution": string|null}`;
}

export async function generateChallenge(ctx: AdaptiveChallengeContext): Promise<AgentResult<AdaptiveHookOutput>> {
  return runAgent({
    agent: "adaptive_challenge",
    promptVersion: ADAPTIVE_CHALLENGE_PROMPT_VERSION,
    system: systemPrompt(ctx),
    messages: [{ role: "user", content: asData("context", `Compose the daily challenge now for skill: ${ctx.skillName}`) }],
    schema: adaptiveHookSchema,
    temperature: 0.8,
    maxOutputTokens: 300,
    userId: ctx.userId,
    organizationId: ctx.organizationId,
    allowRemote: ctx.allowRemote,
    offline: () => composeChallengeOffline(ctx),
  });
}
