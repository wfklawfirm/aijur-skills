import type { PathDef, UnitDef } from "@content/types";

/**
 * What is open, what is next, and — the part learners actually ask about — why
 * something is closed.
 *
 * A locked node never says just "locked". It names the unit that opens it or
 * the level it needs, because an unexplained lock reads as a paywall.
 */

export type UnitState = "locked" | "available" | "in_progress" | "completed" | "needs_review";

export interface UnitStatus {
  unitId: string;
  state: UnitState;
  lock?:
    | { kind: "previous_unit"; unitId: string; unitTitleKey: string }
    | { kind: "skill_level"; skillId: string; level: number };
  /** The unit this one opens, shown as the reward for finishing. */
  unlocks?: string;
  score?: number;
  maxScore?: number;
}

export interface ProgressInput {
  /** unitId → progress row */
  progress: Map<string, { state: "in_progress" | "completed" | "needs_review"; score: number | null; maxScore: number | null }>;
  /** skillId → mastery level */
  mastery: Map<string, number>;
  /** skillId → prerequisite skill ids, from the framework. */
  prerequisites: Map<string, string[]>;
}

const PREREQ_MIN_LEVEL = 2;

export function computePathStatuses(path: PathDef, input: ProgressInput): UnitStatus[] {
  const ordered = [...path.units].sort((a, b) => a.order - b.order);

  return ordered.map((unit, index) => {
    const own = input.progress.get(unit.id);
    const next = ordered[index + 1];

    if (own?.state === "completed") {
      return {
        unitId: unit.id,
        state: "completed",
        score: own.score ?? undefined,
        maxScore: own.maxScore ?? undefined,
        unlocks: next?.id,
      };
    }
    if (own?.state === "needs_review") {
      return { unitId: unit.id, state: "needs_review", unlocks: next?.id };
    }

    const previous = ordered[index - 1];
    if (previous && input.progress.get(previous.id)?.state !== "completed") {
      return {
        unitId: unit.id,
        state: "locked",
        lock: { kind: "previous_unit", unitId: previous.id, unitTitleKey: previous.id },
        unlocks: next?.id,
      };
    }

    // A unit aiming at Applied or above also needs its prerequisite skills at
    // Foundation, so a learner can't jump the ladder by finishing a fast path.
    if (unit.targetLevel >= 3) {
      const prereqs = input.prerequisites.get(unit.primarySkillId) ?? [];
      for (const skillId of prereqs) {
        if ((input.mastery.get(skillId) ?? 0) < PREREQ_MIN_LEVEL) {
          return {
            unitId: unit.id,
            state: "locked",
            lock: { kind: "skill_level", skillId, level: PREREQ_MIN_LEVEL },
            unlocks: next?.id,
          };
        }
      }
    }

    return {
      unitId: unit.id,
      state: own?.state === "in_progress" ? "in_progress" : "available",
      unlocks: next?.id,
    };
  });
}

/** The single "do this now" node the home screen points at. */
export function nextUnit(path: PathDef, statuses: UnitStatus[]): UnitDef | null {
  const byId = new Map(path.units.map((u) => [u.id, u]));
  const inProgress = statuses.find((s) => s.state === "in_progress");
  if (inProgress) return byId.get(inProgress.unitId) ?? null;
  const available = statuses.find((s) => s.state === "available");
  if (available) return byId.get(available.unitId) ?? null;
  const review = statuses.find((s) => s.state === "needs_review");
  if (review) return byId.get(review.unitId) ?? null;
  return null;
}

export function pathCompletion(statuses: UnitStatus[]): { done: number; total: number } {
  return {
    done: statuses.filter((s) => s.state === "completed").length,
    total: statuses.length,
  };
}
