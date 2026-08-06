import * as React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

/**
 * Home's Daily Challenge card (Home redesign v3) -- previously a bare
 * `Callout` (title + body text, no icon, no action), which is exactly the
 * "orphaned/unfinished-looking section" complaint. Now a complete,
 * self-contained card: icon, title, a short description, and a real
 * "Start challenge" action.
 *
 * No fabricated duration or XP badge: the brief asks for "الوقت المتوقع أو
 * عدد نقاط XP", but this app has no XP/points concept anywhere in its data
 * model (grep-verified, same finding as the earlier Home redesign) and the
 * Adaptive Engine's `PersonalizedAdaptiveContent` type carries no time
 * estimate either -- inventing either number here would be exactly the
 * fabricated data the brief separately, explicitly prohibits
 * ("ممنوع إضافة ... بيانات وهمية غير موجودة في المشروع"). Real data wins
 * where the two instructions conflict.
 *
 * "Start challenge" links to Practice -- the challenge itself is a
 * self-directed micro-action ("go do this and report back"), not a
 * separate interactive flow with its own completion tracking (see
 * `docs/ADAPTIVE_ENGINE_ARCHITECTURE.md` §14), and there is no per-skill
 * deep link anywhere in the app to send the user to instead.
 */
export function DailyChallengeCard({
  title,
  body,
  startLabel,
  startHref,
}: {
  title: string;
  body: string;
  startLabel: string;
  startHref: string;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-tint)] text-[var(--color-brand)]">
          <Zap size={18} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p dir="auto" className="text-section-title line-clamp-1">
            {title}
          </p>
          <p dir="auto" className="text-supporting mt-1 line-clamp-2">
            {body}
          </p>
        </div>
      </div>
      <Link
        href={startHref}
        className="mt-3.5 flex min-h-11 w-full items-center justify-center rounded-[var(--radius-control)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-[0.9375rem] font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface-muted)]"
      >
        {startLabel}
      </Link>
    </div>
  );
}
