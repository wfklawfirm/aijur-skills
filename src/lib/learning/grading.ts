import type { Activity } from "@content/types";
import { sameSet } from "@/lib/utils";
import type { ActivityResponse } from "./responses";

/**
 * Deterministic grading.
 *
 * Everything that *can* be graded without a model is graded without a model —
 * cheaper, instant, reproducible, and available offline. Only free text and
 * simulations go to the AI layer.
 *
 * `feedback` returns the ids whose rationale the player should reveal. Wrong
 * answers always surface their rationale: "incorrect" with no explanation
 * teaches nothing.
 */

export interface GradeResult {
  score: number;
  maxScore: number;
  passed: boolean;
  /** "correct" | "partial" | "incorrect" — drives the result banner. */
  verdict: "correct" | "partial" | "incorrect";
  /** Option / item ids to explain, in display order. */
  revealIds: string[];
  /** For ordering activities: which positions were wrong. */
  wrongPositions?: number[];
  gradedBy: "deterministic" | "ai_rubric" | "self_report";
}

const PASS_RATIO = 0.7;

export function requiresAiGrading(activity: Activity): boolean {
  return activity.kind === "short_written" || activity.kind === "email_rewrite";
}

export function isSelfReported(activity: Activity): boolean {
  return activity.kind === "reflection" || activity.kind === "pronunciation";
}

export function gradeActivity(activity: Activity, response: ActivityResponse): GradeResult {
  const weight = activity.weight ?? 1;

  switch (activity.kind) {
    case "multiple_choice":
    case "true_false":
    case "best_response":
    case "find_mistake":
    case "listening": {
      const selected = "selected" in response ? response.selected : [];
      const correctIds = activity.options.filter((o) => o.correct).map((o) => o.id);
      const hit = selected.length === 1 && correctIds.includes(selected[0]!);
      return {
        score: hit ? weight : 0,
        maxScore: weight,
        passed: hit,
        verdict: hit ? "correct" : "incorrect",
        // Show the chosen option's rationale *and* the correct one's, so the
        // learner sees both the cost of their answer and the shape of a good one.
        revealIds: Array.from(new Set([...selected, ...correctIds])),
        gradedBy: "deterministic",
      };
    }

    case "multiple_select": {
      const selected = "selected" in response ? response.selected : [];
      const correctIds = activity.options.filter((o) => o.correct).map((o) => o.id);
      const exact = sameSet(selected, correctIds);
      // Partial credit, with false positives penalised: over-selecting is its
      // own error, not a cheap route to most of the marks.
      const hits = selected.filter((id) => correctIds.includes(id)).length;
      const misses = selected.filter((id) => !correctIds.includes(id)).length;
      const raw = correctIds.length === 0 ? 0 : Math.max(0, hits - misses) / correctIds.length;
      const score = exact ? weight : Math.round(raw * weight * 100) / 100;
      return {
        score,
        maxScore: weight,
        passed: exact,
        verdict: exact ? "correct" : score > 0 ? "partial" : "incorrect",
        revealIds: Array.from(new Set([...selected, ...correctIds])),
        gradedBy: "deterministic",
      };
    }

    case "ordering":
    case "priority_ranking": {
      const order = "order" in response ? response.order : [];
      const expected = activity.items.map((i) => i.id);
      const wrongPositions: number[] = [];
      let correctPositions = 0;
      expected.forEach((id, index) => {
        if (order[index] === id) correctPositions++;
        else wrongPositions.push(index);
      });
      const ratio = expected.length === 0 ? 0 : correctPositions / expected.length;
      const perfect = wrongPositions.length === 0;
      return {
        score: Math.round(ratio * weight * 100) / 100,
        maxScore: weight,
        passed: perfect,
        verdict: perfect ? "correct" : ratio >= 0.5 ? "partial" : "incorrect",
        revealIds: expected,
        wrongPositions,
        gradedBy: "deterministic",
      };
    }

    case "categorization":
    case "swipe_classify": {
      const assignments = "assignments" in response ? response.assignments : {};
      let hits = 0;
      const wrong: string[] = [];
      for (const item of activity.items) {
        if (assignments[item.id] === item.bucketId) hits++;
        else wrong.push(item.id);
      }
      const ratio = activity.items.length === 0 ? 0 : hits / activity.items.length;
      return {
        score: Math.round(ratio * weight * 100) / 100,
        maxScore: weight,
        passed: ratio >= PASS_RATIO,
        verdict: ratio === 1 ? "correct" : ratio >= 0.5 ? "partial" : "incorrect",
        // Explain the ones they got wrong first — that's where the learning is.
        revealIds: [...wrong, ...activity.items.map((i) => i.id).filter((id) => !wrong.includes(id))],
        gradedBy: "deterministic",
      };
    }

    case "matching": {
      const pairs = "pairs" in response ? response.pairs : {};
      let hits = 0;
      const wrong: string[] = [];
      for (const pair of activity.pairs) {
        if (pairs[pair.id] === pair.id) hits++;
        else wrong.push(pair.id);
      }
      const ratio = activity.pairs.length === 0 ? 0 : hits / activity.pairs.length;
      return {
        score: Math.round(ratio * weight * 100) / 100,
        maxScore: weight,
        passed: ratio >= PASS_RATIO,
        verdict: ratio === 1 ? "correct" : ratio >= 0.5 ? "partial" : "incorrect",
        revealIds: wrong.length ? wrong : activity.pairs.map((p) => p.id),
        gradedBy: "deterministic",
      };
    }

    case "fill_blank": {
      const answers = "answers" in response ? response.answers : {};
      let hits = 0;
      const wrong: string[] = [];
      for (const blank of activity.blanks) {
        if (answers[blank.id] === blank.answerIndex) hits++;
        else wrong.push(blank.id);
      }
      const ratio = activity.blanks.length === 0 ? 0 : hits / activity.blanks.length;
      return {
        score: Math.round(ratio * weight * 100) / 100,
        maxScore: weight,
        passed: ratio >= PASS_RATIO,
        verdict: ratio === 1 ? "correct" : ratio >= 0.5 ? "partial" : "incorrect",
        revealIds: activity.blanks.map((b) => b.id),
        wrongPositions: wrong.map((id) => activity.blanks.findIndex((b) => b.id === id)),
        gradedBy: "deterministic",
      };
    }

    case "branching_decision": {
      const path = "path" in response ? response.path : [];
      const chosen = path
        .map((choiceId) =>
          activity.nodes.flatMap((n) => n.choices).find((c) => c.id === choiceId),
        )
        .filter((c): c is NonNullable<typeof c> => Boolean(c));

      // A single critical mistake caps the activity, whatever else went right —
      // the same rule the simulation rubrics apply.
      const critical = chosen.some((c) => c.quality === "critical_mistake");
      const points = chosen.reduce((sum, c) => {
        if (c.quality === "strong") return sum + 1;
        if (c.quality === "acceptable") return sum + 0.6;
        if (c.quality === "weak") return sum + 0.2;
        return sum;
      }, 0);
      const ratio = chosen.length === 0 ? 0 : points / chosen.length;
      const capped = critical ? Math.min(ratio, 0.34) : ratio;
      return {
        score: Math.round(capped * weight * 100) / 100,
        maxScore: weight,
        passed: !critical && ratio >= PASS_RATIO,
        verdict: critical ? "incorrect" : ratio >= 0.9 ? "correct" : ratio >= 0.5 ? "partial" : "incorrect",
        revealIds: path,
        gradedBy: "deterministic",
      };
    }

    case "pronunciation": {
      // Self-reported intelligibility. This never blocks progress and never
      // records anything about accent — it exists to schedule practice.
      const rating = "selfRating" in response ? response.selfRating : 2;
      return {
        score: (rating / 3) * weight,
        maxScore: weight,
        passed: true,
        verdict: rating >= 3 ? "correct" : "partial",
        revealIds: [],
        gradedBy: "self_report",
      };
    }

    case "reflection": {
      const text = "text" in response ? response.text : "";
      return {
        score: text.trim().length > 0 ? weight : 0,
        maxScore: weight,
        passed: text.trim().length > 0,
        verdict: "correct",
        revealIds: [],
        gradedBy: "self_report",
      };
    }

    case "short_written":
    case "email_rewrite":
      // Handled by the evaluation agent; this branch only ever runs if a caller
      // forgets to route it there, so it fails loudly rather than scoring zero.
      throw new Error(`Activity ${activity.id} requires rubric evaluation, not deterministic grading.`);
  }
}

/**
 * A unit passes on the aggregate of its scorable activities. Reflections are
 * excluded from the denominator — a reflection has no right answer, so letting
 * it carry marks would make the score mean less, not more.
 */
export function summariseUnit(results: { score: number; maxScore: number; kind: string }[]): {
  score: number;
  maxScore: number;
  passed: boolean;
} {
  const scorable = results.filter((r) => r.kind !== "reflection");
  const score = Math.round(scorable.reduce((s, r) => s + r.score, 0) * 100) / 100;
  const maxScore = scorable.reduce((s, r) => s + r.maxScore, 0);
  return { score, maxScore, passed: maxScore > 0 && score / maxScore >= PASS_RATIO };
}

export { PASS_RATIO };
