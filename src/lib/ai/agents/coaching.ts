import "server-only";
import type { Locale } from "@content/types";
import { asData, runAgent, type AgentResult } from "../provider";
import { coachingSchema, type CoachingOutput } from "../schemas";
import type { VerifiedEvaluation } from "./evaluation";

export const COACHING_PROMPT_VERSION = "coach-2026.08.1";

/**
 * The Coaching Agent runs *after* verification, on the verified evaluation only.
 *
 * It never sees the rubric scores as something to justify and never re-scores.
 * Its single job is to turn one verified weakness into something the learner can
 * do differently tomorrow. Splitting it from the evaluator is what stops
 * feedback drifting into flattery to match a score, or into a lecture that
 * ignores what the learner actually wrote.
 */
export async function coach(args: {
  evaluation: VerifiedEvaluation;
  learnerText: string;
  skillName: string;
  locale: Locale;
  userId: string;
  organizationId: string | null;
  allowRemote: boolean;
}): Promise<AgentResult<CoachingOutput>> {
  const L = args.locale;
  const system = `You are a coach for practising lawyers. You have already been given a verified assessment; do not re-score it and do not contradict it.

Skill in focus: ${args.skillName}
The one priority identified: ${args.evaluation.priorityImprovement}
Evidence the assessor quoted from the learner:
${args.evaluation.criteria.map((c) => `- (${c.score}/3) "${c.evidence}" — ${c.comment}`).join("\n")}

Write in ${L === "en" ? "English" : "Arabic"}.

Rules:
- Explain the *cost* of the weakness in practice — what it does to the client relationship, the file, or the lawyer's credibility. Not the abstract principle.
- Give one concrete alternative the learner could have said, in their own register. Show the sentence, don't describe it.
- No praise sandwich. No "great effort". Adults doing professional training want the specific thing.
- Two short paragraphs at most.
- Never mention accent, dialect or personality.

Return ONLY JSON:
{"explanation": string, "nextTimeTry": string, "practiceSuggestionSkillIds": string[]}`;

  return runAgent({
    agent: "coaching",
    promptVersion: COACHING_PROMPT_VERSION,
    system,
    messages: [{ role: "user", content: asData("learner_work", args.learnerText) }],
    schema: coachingSchema,
    temperature: 0.4,
    maxOutputTokens: 700,
    userId: args.userId,
    organizationId: args.organizationId,
    allowRemote: args.allowRemote,
    offline: () => ({
      explanation: args.evaluation.priorityImprovement,
      nextTimeTry:
        args.evaluation.criteria.find((c) => c.score <= 1)?.comment ??
        args.evaluation.priorityImprovement,
      practiceSuggestionSkillIds: [],
    }),
  });
}
