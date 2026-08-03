import * as React from "react";
import { cn } from "@/lib/utils";

export type Tone = "neutral" | "brand" | "positive" | "negative" | "warning" | "info";

/**
 * The one place status colours are spent as *backgrounds*. Everywhere else they
 * appear as text or icon colour only, which is what keeps the palette quiet.
 */
const TONES: Record<Tone, string> = {
  neutral: "bg-[var(--surface-muted)] text-[var(--foreground-secondary)] border-[var(--border)]",
  brand: "bg-[var(--color-brand-tint)] text-[var(--color-brand)] border-[var(--color-brand-tint)]",
  positive:
    "bg-[var(--color-positive-tint)] text-[var(--color-positive)] border-[var(--color-positive-tint)]",
  negative:
    "bg-[var(--color-negative-tint)] text-[var(--color-negative)] border-[var(--color-negative-tint)]",
  warning:
    "bg-[var(--color-warning-tint)] text-[var(--color-warning)] border-[var(--color-warning-tint)]",
  info: "bg-[var(--color-info-tint)] text-[var(--color-info)] border-[var(--color-info-tint)]",
};

export function Badge({
  tone = "neutral",
  icon,
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone; icon?: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border px-2.5 py-1",
        "text-xs font-semibold leading-none",
        TONES[tone],
        className,
      )}
      {...rest}
    >
      {/* Colour is never the only carrier: tone always ships with an icon or word. */}
      {icon}
      {children}
    </span>
  );
}

const MASTERY_TONE: Record<number, Tone> = {
  0: "neutral",
  1: "info",
  2: "info",
  3: "brand",
  4: "positive",
  5: "positive",
  6: "positive",
};

/**
 * Mastery is shown as filled segments *and* a number *and* a label — three
 * redundant encodings, because a ring alone is unreadable to anyone who can't
 * distinguish the fill colour.
 */
export function MasteryMeter({
  level,
  label,
  a11yLabel,
  compact,
}: {
  level: number;
  label: string;
  a11yLabel: string;
  compact?: boolean;
}) {
  const tone = MASTERY_TONE[level] ?? "neutral";
  return (
    <span className="inline-flex items-center gap-2" role="img" aria-label={a11yLabel}>
      <span className="flex items-center gap-[3px]" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-2.5 rounded-[2px] transition-colors",
              i <= level ? FILLED[tone] : "bg-[var(--border)]",
            )}
          />
        ))}
      </span>
      {!compact && (
        <span className="text-supporting font-semibold text-[var(--foreground-secondary)]">
          {label}
        </span>
      )}
    </span>
  );
}

const FILLED: Record<Tone, string> = {
  neutral: "bg-[var(--border-strong)]",
  brand: "bg-[var(--color-brand)]",
  positive: "bg-[var(--color-positive)]",
  negative: "bg-[var(--color-negative)]",
  warning: "bg-[var(--color-warning)]",
  info: "bg-[var(--color-info)]",
};
