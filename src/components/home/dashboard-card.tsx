import * as React from "react";
import { Flame, Sparkles } from "lucide-react";
import { ProgressRing } from "@/components/home/progress-ring";
import { ProgressBar } from "@/components/ui/progress";

/**
 * The Home page's "premium dashboard" card (design overhaul, Phase 1) —
 * replaces three previously-separate sections (Your stage / Weekly goal /
 * Recent achievement) with one consolidated glance, per the direct request
 * to surface "only what matters within 3 seconds" up top and push detail to
 * the Progress page, which still has its own full breakdown.
 *
 * Every number here is real, not invented for the redesign:
 * - `percentAssessed`/`levelLabel` — the same mastery-level average and
 *   evidence count Home always computed (`assessedCount`/`averageLevel` in
 *   `home/page.tsx`), now shown as a share of the full skill map instead of
 *   a raw count.
 * - `streakDays` — `computeStreak()` (`lib/learning/dashboard.ts`), the
 *   exact calculation the Progress page already used, extracted so the two
 *   screens can't disagree.
 * - `weeklyMinutesDone`/`weeklyMinutesGoal` — unchanged from the old
 *   "Weekly goal" section.
 * - `recentAchievement` — unchanged from the old "Recent achievement"
 *   section; omitted entirely (not a placeholder) when there isn't one yet.
 *
 * No XP, level-up animation, or "next badge" prediction: this app has no
 * points/XP system in its data model, and achievements have no fixed
 * catalog with thresholds to predict a "next" one from (both grep-verified
 * against schema.ts) — those pieces of the design brief would need real new
 * backend concepts, not a UI change, so they're left out rather than faked.
 */
export function DashboardCard({
  percentAssessed,
  levelLabel,
  streakDays,
  streakLabel,
  weeklyMinutesDone,
  weeklyMinutesGoal,
  weeklyGoalLabel,
  weeklyGoalValueLabel,
  skillsTrackedLabel,
  recentAchievementLabel,
}: {
  percentAssessed: number;
  levelLabel: string;
  streakDays: number;
  streakLabel: string;
  weeklyMinutesDone: number;
  weeklyMinutesGoal: number;
  weeklyGoalLabel: string;
  weeklyGoalValueLabel: string;
  skillsTrackedLabel: string;
  recentAchievementLabel: string | null;
}) {
  return (
    <div className="rounded-[var(--radius-card-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-md)]">
      <div className="flex items-center gap-5">
        <ProgressRing percent={percentAssessed} levelLabel={levelLabel} />
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <Flame size={18} strokeWidth={1.75} className="shrink-0 text-[var(--color-warning)]" aria-hidden="true" />
            <span className="num text-[0.9375rem] font-semibold">{streakLabel}</span>
          </div>
          <p dir="auto" className="text-supporting">
            {skillsTrackedLabel}
          </p>
          <ProgressBar value={weeklyMinutesDone} max={weeklyMinutesGoal} label={weeklyGoalLabel} showValue={weeklyGoalValueLabel} />
        </div>
      </div>

      {recentAchievementLabel && (
        <div className="mt-5 flex items-center gap-2 rounded-[var(--radius-control)] bg-[var(--color-warning-tint)] px-3.5 py-2.5">
          <Sparkles size={17} strokeWidth={1.75} className="shrink-0 text-[var(--color-warning)]" aria-hidden="true" />
          <span dir="auto" className="min-w-0 truncate text-[0.8125rem] font-semibold text-[var(--foreground)]">
            {recentAchievementLabel}
          </span>
        </div>
      )}
    </div>
  );
}
