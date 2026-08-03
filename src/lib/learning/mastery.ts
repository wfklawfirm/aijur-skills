import type { MasteryLevel } from "@content/types";
import { clamp, DAY_MS } from "@/lib/utils";

/**
 * Mastery.
 *
 * The product rule is that finishing content proves nothing. A level is a claim
 * about behaviour, so it is only granted when the evidence supports it:
 *
 *  - **Correctness** — the normalised score of each piece of evidence.
 *  - **Consistency** — two passes at the level, not one lucky attempt.
 *  - **Breadth** — evidence from more than one item, so it isn't one memorised answer.
 *  - **Depth** — at least one piece of *higher-order* evidence (a written
 *    response or a simulation) before Applied (3) and above. Recognising the
 *    right answer in a multiple choice is not the same as producing it.
 *  - **Recency** — confidence decays with time, which is what puts a skill back
 *    on the review list rather than silently overstating the learner.
 *
 * Levels never drop on decay. A skill you demonstrated a year ago is rusty, not
 * un-learned; we lower confidence and schedule review instead of taking it away.
 */

export interface MasteryState {
  level: MasteryLevel;
  confidence: number;
  evidenceCount: number;
  rollingScore: number;
  consecutivePasses: number;
  peakLevel: MasteryLevel;
  lastAssessedAt: number | null;
}

export interface EvidenceInput {
  /** Level the item was targeting. */
  level: MasteryLevel;
  /** 0..1 normalised. */
  score: number;
  /** Higher-order evidence: produced language or behaviour, not recognition. */
  depth: "recognition" | "production" | "simulation";
  /** Distinct item id — used to check the learner isn't repeating one activity. */
  itemId: string;
  at: number;
}

export const PASS = 0.7;
const EWMA_ALPHA = 0.45;
/** Confidence halves roughly every 60 days without practice. */
const HALF_LIFE_DAYS = 60;

export function emptyMastery(): MasteryState {
  return {
    level: 0,
    confidence: 0,
    evidenceCount: 0,
    rollingScore: 0,
    consecutivePasses: 0,
    peakLevel: 0,
    lastAssessedAt: null,
  };
}

/**
 * Fold one new piece of evidence into a mastery state.
 *
 * `recentItemIds` is the set of item ids already used as evidence at the
 * current level — passed in by the caller so breadth can be checked without
 * this function needing database access (which also makes it directly testable).
 */
export function applyEvidence(
  state: MasteryState,
  input: EvidenceInput,
  recentItemIds: readonly string[],
): { next: MasteryState; levelChanged: boolean; reason: string } {
  const passed = input.score >= PASS;
  const rollingScore =
    state.evidenceCount === 0
      ? input.score
      : state.rollingScore * (1 - EWMA_ALPHA) + input.score * EWMA_ALPHA;

  const targetLevel = input.level;
  const atOrAboveCurrent = targetLevel >= state.level;

  let consecutivePasses = state.consecutivePasses;
  if (passed && atOrAboveCurrent) consecutivePasses += 1;
  else if (!passed) consecutivePasses = 0;

  const distinctItems = new Set([...recentItemIds, input.itemId]).size;
  const evidenceCount = state.evidenceCount + 1;

  let level = state.level;
  let reason = "evidence_recorded";

  const wantsLevel = Math.min(targetLevel, state.level + 1) as MasteryLevel;
  const needsProduction = wantsLevel >= 3;
  const hasDepth = input.depth !== "recognition";

  if (
    passed &&
    wantsLevel > state.level &&
    consecutivePasses >= 2 &&
    distinctItems >= 2 &&
    rollingScore >= PASS &&
    (!needsProduction || hasDepth)
  ) {
    level = wantsLevel;
    consecutivePasses = 0;
    reason = "level_up";
  } else if (passed && wantsLevel > state.level) {
    reason =
      consecutivePasses < 2
        ? "needs_second_pass"
        : distinctItems < 2
          ? "needs_different_item"
          : needsProduction && !hasDepth
            ? "needs_production_evidence"
            : "needs_higher_rolling_score";
  } else if (!passed) {
    reason = "below_threshold";
  }

  // Confidence rises with the amount and quality of evidence, and is bounded by
  // how well the learner is actually performing.
  const volume = 1 - Math.exp(-evidenceCount / 4);
  const confidence = clamp(volume * rollingScore, 0, 0.98);

  return {
    next: {
      level,
      confidence,
      evidenceCount,
      rollingScore: Math.round(rollingScore * 1000) / 1000,
      consecutivePasses,
      peakLevel: Math.max(state.peakLevel, level) as MasteryLevel,
      lastAssessedAt: input.at,
    },
    levelChanged: level !== state.level,
    reason,
  };
}

/** Confidence as it stands *now*, after time decay. Level is unaffected. */
export function decayedConfidence(state: MasteryState, now: number): number {
  if (!state.lastAssessedAt) return state.confidence;
  const days = (now - state.lastAssessedAt) / DAY_MS;
  if (days <= 0) return state.confidence;
  return clamp(state.confidence * Math.pow(0.5, days / HALF_LIFE_DAYS), 0, 1);
}

/** Below this, the skill belongs on the review list regardless of level. */
export const REVIEW_CONFIDENCE_FLOOR = 0.45;

export function needsReview(state: MasteryState, now: number): boolean {
  if (state.level === 0) return false;
  return decayedConfidence(state, now) < REVIEW_CONFIDENCE_FLOOR;
}

export function levelKey(level: number): "l0" | "l1" | "l2" | "l3" | "l4" | "l5" | "l6" {
  const l = clamp(Math.round(level), 0, 6);
  return `l${l}` as "l0" | "l1" | "l2" | "l3" | "l4" | "l5" | "l6";
}

export function depthOf(activityKind: string): EvidenceInput["depth"] {
  if (activityKind === "simulation") return "simulation";
  if (
    activityKind === "short_written" ||
    activityKind === "email_rewrite" ||
    activityKind === "branching_decision" ||
    activityKind === "pronunciation"
  ) {
    return "production";
  }
  return "recognition";
}
