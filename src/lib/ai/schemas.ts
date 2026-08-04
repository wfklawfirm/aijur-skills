import { z } from "zod";

/**
 * Every agent returns validated JSON. Nothing free-form ever reaches the UI or
 * the database — if a model returns prose, the parse fails, the run is retried,
 * and if it fails again the deterministic engine answers instead.
 */

export const simulationTurnSchema = z.object({
  /** What the character says next, in the scenario's language. */
  reply: z.string().min(1).max(1200),
  /** Ids of authored hidden facts the learner's question earned this turn. */
  revealedFactIds: z.array(z.string()).max(6).default([]),
  /** Authored decision point reached, if any. */
  decisionPointId: z.string().nullable().default(null),
  /** The character's emotional state after this turn — drives tone next turn. */
  emotionalState: z.enum(["calm", "guarded", "frustrated", "angry", "reassured", "impatient"]),
  /** True when the scenario's exit conditions are met. */
  shouldEnd: z.boolean().default(false),
});

export type SimulationTurn = z.infer<typeof simulationTurnSchema>;

export const criterionScoreSchema = z.object({
  criterionId: z.string(),
  score: z.number().min(0).max(3),
  /**
   * A verbatim quote from the learner. The evaluation is rejected if this is
   * empty or is not found in the learner's text — a score without evidence is
   * the failure mode this whole system exists to prevent.
   */
  evidence: z.string().min(1).max(600),
  comment: z.string().min(1).max(400),
});

export const evaluationSchema = z.object({
  criteria: z.array(criterionScoreSchema).min(1).max(8),
  strengths: z.array(z.string().max(300)).max(4).default([]),
  missedOpportunities: z.array(z.string().max(300)).max(4).default([]),
  /** Ids of the rubric's declared critical mistakes that actually occurred. */
  criticalMistakeIds: z.array(z.string()).max(6).default([]),
  priorityImprovement: z.string().min(1).max(400),
  betterAlternative: z.string().max(900).nullable().default(null),
  /** The model's own confidence. Low values route to human review. */
  confidence: z.number().min(0).max(1),
});

export type EvaluationOutput = z.infer<typeof evaluationSchema>;

export const coachingSchema = z.object({
  explanation: z.string().min(1).max(900),
  nextTimeTry: z.string().min(1).max(500),
  practiceSuggestionSkillIds: z.array(z.string()).max(3).default([]),
});

export type CoachingOutput = z.infer<typeof coachingSchema>;

export const languageFeedbackSchema = z.object({
  clarity: z.number().min(0).max(3),
  register: z.enum(["too_formal", "appropriate", "too_casual"]),
  /** [{ was, better, why }] — concrete rewrites, not general advice. */
  rewrites: z
    .array(z.object({ was: z.string().max(300), better: z.string().max(300), why: z.string().max(300) }))
    .max(5)
    .default([]),
  /** Phrases worth adding to the learner's phrase bank. */
  phrasesToLearn: z.array(z.string().max(140)).max(5).default([]),
  /**
   * Accent is never assessed. This field exists so the schema can *assert* that
   * — the safety layer rejects any output where it is not exactly this value.
   */
  accentAssessed: z.literal(false).default(false),
});

export type LanguageFeedback = z.infer<typeof languageFeedbackSchema>;

export const recommendationSchema = z.object({
  nextUnitId: z.string().nullable().default(null),
  reviewSkillIds: z.array(z.string()).max(5).default([]),
  rationale: z.string().max(400),
});

/** A single personalized "hook" -- short engagement micro-content composed
 * from a skill + dimension combination (career stage, counterparty, channel,
 * tone, goal). See src/lib/adaptive/hooks.ts and content/adaptive/dimensions.ts. */
export const adaptiveHookSchema = z.object({
  title: z.string().min(1).max(80),
  body: z.string().min(1).max(280),
  attribution: z.string().max(80).nullable().default(null),
});

export type AdaptiveHookOutput = z.infer<typeof adaptiveHookSchema>;

export type RecommendationOutput = z.infer<typeof recommendationSchema>;
