import * as React from "react";
import { clamp, cn } from "@/lib/utils";

export function ProgressBar({
  value,
  max = 100,
  label,
  tone = "brand",
  showValue,
}: {
  value: number;
  max?: number;
  label: string;
  tone?: "brand" | "positive" | "info";
  showValue?: string;
}) {
  const percent = max === 0 ? 0 : clamp((value / max) * 100, 0, 100);
  const fill =
    tone === "positive"
      ? "bg-[var(--color-positive)]"
      : tone === "info"
        ? "bg-[var(--color-info)]"
        : "bg-[var(--color-brand)]";
  return (
    <div className="w-full">
      <div
        role="progressbar"
        aria-valuenow={Math.round(percent)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-2 w-full overflow-hidden rounded-full bg-[var(--border)]"
      >
        <div
          className={cn("h-full rounded-full transition-[width] duration-300", fill)}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showValue && <p className="text-supporting num mt-1.5">{showValue}</p>}
    </div>
  );
}

/** The unit player's position indicator — dots, not a bar, so steps stay countable. */
export function StepDots({
  total,
  current,
  label,
}: {
  total: number;
  current: number;
  label: string;
}) {
  return (
    <div
      className="flex items-center gap-1"
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={label}
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 flex-1 rounded-full transition-colors",
            i < current
              ? "bg-[var(--color-brand)]"
              : i === current
                ? "bg-[var(--color-brand-light)]"
                : "bg-[var(--border)]",
          )}
        />
      ))}
    </div>
  );
}

/**
 * The score ring used on unit-complete and feedback screens. Score is always
 * printed inside the ring, never conveyed by arc length alone.
 */
export function ScoreRing({
  value,
  max,
  label,
  caption,
  size = 108,
}: {
  value: number;
  max: number;
  label: string;
  caption?: string;
  size?: number;
}) {
  const ratio = max === 0 ? 0 : clamp(value / max, 0, 1);
  const stroke = 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const tone =
    ratio >= 0.8 ? "var(--color-positive)" : ratio >= 0.55 ? "var(--color-brand)" : "var(--color-warning)";
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} role="img" aria-label={label} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={tone}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - ratio)}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="num text-kpi-value leading-none">{value}</span>
          <span className="num text-supporting absolute bottom-6">/ {max}</span>
        </div>
      </div>
      {caption && <p className="text-supporting text-center">{caption}</p>}
    </div>
  );
}
