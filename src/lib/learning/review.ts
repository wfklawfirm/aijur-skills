import { clamp, DAY_MS } from "@/lib/utils";

/**
 * Spaced, error-driven, interleaved review.
 *
 * Three departures from a plain SM-2 flashcard scheduler, because the thing
 * being reviewed here is a professional behaviour, not a word:
 *
 *  1. **Errors jump the queue.** A skill you got wrong comes back in a day or
 *     two, not on the standard curve.
 *  2. **Review re-presents the skill in a *different* item.** Repeating the same
 *     activity measures recall of that activity. The scheduler therefore stores
 *     the skill as the unit of review and picks a fresh item at delivery time.
 *  3. **Every due item carries a reason** the learner is shown ("you missed this
 *     before", "you haven't practised it in a while"). Review that looks
 *     arbitrary gets skipped.
 */

export type ReviewReason = "spaced" | "error" | "interleave" | "decay" | "new_context";

export interface ScheduleState {
  intervalDays: number;
  ease: number;
  lapses: number;
  reason: ReviewReason;
  dueAt: number;
}

const MIN_EASE = 1.3;
const MAX_EASE = 2.8;
const MAX_INTERVAL_DAYS = 180;

export function firstSchedule(now: number, passed: boolean): ScheduleState {
  return passed
    ? { intervalDays: 2, ease: 2.3, lapses: 0, reason: "spaced", dueAt: now + 2 * DAY_MS }
    : { intervalDays: 1, ease: 2.1, lapses: 1, reason: "error", dueAt: now + 1 * DAY_MS };
}

/**
 * @param quality 0..1 — the normalised score of the review attempt.
 */
export function nextSchedule(state: ScheduleState, quality: number, now: number): ScheduleState {
  const passed = quality >= 0.7;

  if (!passed) {
    const lapses = state.lapses + 1;
    const ease = clamp(state.ease - 0.2, MIN_EASE, MAX_EASE);
    // A lapse resets the interval but not to zero — re-showing something the
    // learner just saw tests short-term memory, which is not the point.
    const intervalDays = lapses >= 3 ? 1 : 2;
    return { intervalDays, ease, lapses, reason: "error", dueAt: now + intervalDays * DAY_MS };
  }

  const ease = clamp(state.ease + (quality - 0.8) * 0.35, MIN_EASE, MAX_EASE);
  const intervalDays = clamp(Math.round(state.intervalDays * ease * 10) / 10, 1, MAX_INTERVAL_DAYS);
  return {
    intervalDays,
    ease,
    lapses: state.lapses,
    // Once an interval passes a fortnight, the useful review is the skill in a
    // situation the learner hasn't seen, not the same situation again.
    reason: intervalDays >= 14 ? "new_context" : "spaced",
    dueAt: now + intervalDays * DAY_MS,
  };
}

/** Confidence has decayed below the floor — put it back in front of them. */
export function decayReview(now: number): ScheduleState {
  return { intervalDays: 1, ease: 2.0, lapses: 0, reason: "decay", dueAt: now };
}

export interface DueItem {
  skillId: string;
  dueAt: number;
  reason: ReviewReason;
  lapses: number;
}

/**
 * Picks today's review set.
 *
 * Errors first, then the most overdue. Then **interleaving**: the list is
 * re-ordered so two consecutive items rarely come from the same skill, because
 * blocked practice inflates in-session performance and depresses retention.
 */
export function selectDueReviews(items: DueItem[], now: number, limit = 6): DueItem[] {
  const due = items
    .filter((i) => i.dueAt <= now)
    .sort((a, b) => {
      if (a.reason === "error" && b.reason !== "error") return -1;
      if (b.reason === "error" && a.reason !== "error") return 1;
      return a.dueAt - b.dueAt;
    })
    .slice(0, limit * 2);

  const interleaved: DueItem[] = [];
  const remaining = [...due];
  let lastSkill: string | null = null;
  while (remaining.length > 0 && interleaved.length < limit) {
    const idx = remaining.findIndex((i) => i.skillId !== lastSkill);
    const pickIndex = idx === -1 ? 0 : idx;
    const [picked] = remaining.splice(pickIndex, 1);
    if (!picked) break;
    interleaved.push(picked);
    lastSkill = picked.skillId;
  }
  return interleaved;
}
