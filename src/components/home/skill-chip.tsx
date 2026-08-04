import * as React from "react";
import { Award } from "lucide-react";

/**
 * Replaces the plain green `Badge` pills the "your strongest skills" list
 * used to render with (design overhaul, Phase 1 — direct user request: "حوّل
 * شارات المهارات الخضراء إلى بطاقات مهارات صغيرة، كل واحدة بأيقونتها
 * الخاصة"). Each one is its own small card, not a caption fragment, so it
 * reads as a piece of the 8pt card grid rather than a run of inline text.
 *
 * A plain server component (no interactivity, no animation) — Framer Motion
 * is reserved for the pieces that actually move (the progress ring, the
 * continue button's press/arrow).
 */
export function SkillChip({ name }: { name: string }) {
  return (
    <div className="flex min-h-11 items-center gap-2 rounded-[var(--radius-control)] border border-[var(--border)] bg-[var(--color-positive-tint)] px-3 py-2">
      <Award size={16} strokeWidth={1.75} className="shrink-0 text-[var(--color-positive)]" aria-hidden="true" />
      <span dir="auto" className="min-w-0 truncate text-[0.8125rem] font-semibold text-[var(--foreground)]">
        {name}
      </span>
    </div>
  );
}
