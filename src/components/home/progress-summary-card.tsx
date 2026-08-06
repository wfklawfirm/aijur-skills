import * as React from "react";
import Link from "next/link";
import { Flame, Sparkles, ChevronRight } from "lucide-react";
import { ProgressRing } from "@/components/home/progress-ring";
import { ProgressBar } from "@/components/ui/progress";

/**
 * Home's "Your Progress" card (Home redesign v3, replacing the earlier
 * "premium dashboard" `DashboardCard`). Two real, reported problems with
 * the previous version, not a cosmetic pass:
 *
 * 1. A 132px ring dominated the screen on a phone -- "دائرة تقدم ضخمة
 *    تستهلك مساحة الهاتف". Shrunk to a 64px ring (see `ProgressRing`'s new
 *    default), leaving room for the card to actually be compact.
 * 2. The ring paired the skill-map-coverage percent with a mastery-*level*
 *    caption underneath it ("8%" next to "Not assessed") -- both numbers
 *    were individually correct (8% of the skill map has *some* evidence;
 *    the *average level* among that evidence rounds to 0, i.e. "not yet at
 *    level 1") but reading them stacked together looks like a
 *    contradiction. Fixed by dropping the level caption from this card
 *    entirely -- `ProgressRing`'s `levelLabel` is now optional and unused
 *    here -- and instead labelling the percent explicitly as skill-map
 *    coverage (`skillMapLabel`, e.g. "8% of your skill map"), which is the
 *    one thing it's actually measuring. The full per-level breakdown still
 *    lives on /progress, next to the actual skill list it describes.
 *
 * "View full progress" is a real link inside the card's own footer, not a
 * separate element placed elsewhere on the page -- a direct fix for
 * "لا تُوزَّع الروابط المرتبطة بالبطاقات بعيداً عنها".
 */
export function ProgressSummaryCard({
  percentAssessed,
  skillMapLabel,
  streakDays,
  streakLabel,
  dueLabel,
  weeklyMinutesDone,
  weeklyMinutesGoal,
  weeklyGoalLabel,
  weeklyGoalValueLabel,
  viewFullProgressLabel,
  viewFullProgressHref,
  recentAchievementLabel,
}: {
  percentAssessed: number;
  skillMapLabel: string;
  streakDays: number;
  streakLabel: string;
  dueLabel: string | null;
  weeklyMinutesDone: number;
  weeklyMinutesGoal: number;
  weeklyGoalLabel: string;
  weeklyGoalValueLabel: string;
  viewFullProgressLabel: string;
  viewFullProgressHref: string;
  recentAchievementLabel: string | null;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex items-center gap-4">
        <ProgressRing percent={percentAssessed} />
        <div className="min-w-0 flex-1 space-y-1.5">
          <p dir="auto" className="text-supporting">
            {skillMapLabel}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] font-medium text-[var(--foreground-secondary)]">
            <span className="num inline-flex items-center gap-1">
              <Flame size={14} strokeWidth={1.75} className="shrink-0 text-[var(--color-warning)]" aria-hidden="true" />
              {streakLabel}
            </span>
            {dueLabel && <span className="num">{dueLabel}</span>}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <ProgressBar value={weeklyMinutesDone} max={weeklyMinutesGoal} label={weeklyGoalLabel} showValue={weeklyGoalValueLabel} />
      </div>

      {recentAchievementLabel && (
        <div className="mt-3 flex items-center gap-2 rounded-[var(--radius-control)] bg-[var(--color-warning-tint)] px-3 py-2">
          <Sparkles size={16} strokeWidth={1.75} className="shrink-0 text-[var(--color-warning)]" aria-hidden="true" />
          <span dir="auto" className="min-w-0 truncate text-[0.8125rem] font-semibold text-[var(--foreground)]">
            {recentAchievementLabel}
          </span>
        </div>
      )}

      <Link
        href={viewFullProgressHref}
        className="mt-3 flex min-h-9 items-center justify-between gap-1 border-t border-[var(--border)] pt-3 text-[0.8125rem] font-semibold text-[var(--color-brand)]"
      >
        {viewFullProgressLabel}
        <ChevronRight size={16} strokeWidth={2} className="flip-rtl shrink-0" aria-hidden="true" />
      </Link>
    </div>
  );
}
