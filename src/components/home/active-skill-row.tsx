import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DomainIcon } from "@/components/ui/icons";
import { MasteryMeter } from "@/components/ui/badge";

/**
 * One row in Home's "Active skills" list (Home redesign v3) -- replaces
 * the old `SkillChip` flex-wrap pills, whose width tracked each skill
 * name's length so the row read as ragged, uneven buttons ("ممنوع استخدام
 * أزرار مختلفة العرض بسبب طول النص"). Every row here is the same shared
 * full-width link-card class the /progress skill list already uses
 * (`LINK_CARD` in `progress/page.tsx`) -- reusing an existing, already-
 * accessible pattern rather than inventing a new one.
 *
 * There is no per-skill detail route in this app (`/progress` is the only
 * screen with skill-level detail, confirmed by grep across `src/app`), so
 * every row links there -- a real destination, not a dead end.
 */
export function ActiveSkillRow({
  href,
  name,
  domainIcon,
  level,
  levelLabel,
  a11yLabel,
}: {
  href: string;
  name: string;
  domainIcon: string;
  level: number;
  levelLabel: string;
  a11yLabel: string;
}) {
  return (
    <Link
      href={href}
      className="flex min-h-11 w-full items-center gap-3 rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-start shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--surface-muted)]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-tint)] text-[var(--color-brand)]">
        <DomainIcon name={domainIcon} size={18} />
      </span>
      <span className="min-w-0 flex-1">
        <span dir="auto" className="line-clamp-1 block text-[0.9375rem] font-medium text-[var(--foreground)]">
          {name}
        </span>
        <span className="mt-1 block">
          <MasteryMeter level={level} label={levelLabel} a11yLabel={a11yLabel} compact />
        </span>
      </span>
      <ChevronRight size={18} strokeWidth={2} className="flip-rtl shrink-0 text-[var(--foreground-muted)]" aria-hidden="true" />
    </Link>
  );
}
