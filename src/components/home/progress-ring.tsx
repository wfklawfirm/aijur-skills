"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { clamp, cn } from "@/lib/utils";

/**
 * The Home dashboard's circular progress indicator (design overhaul, Phase
 * 1) — same ring math as `ScoreRing` (`components/ui/progress.tsx`), but
 * percent-based rather than value/max, and the fill animates in on mount
 * with Framer Motion instead of rendering at its final offset immediately.
 * A second, animated component rather than a `ScoreRing` prop change: the
 * two rings communicate genuinely different things (a score out of a
 * maximum vs. a share of your skill map assessed so far) and independently
 * evolving them is simpler than one component branching on `mode`.
 */
export function ProgressRing({
  percent,
  levelLabel,
  size = 64,
  stroke = 6,
}: {
  /** 0-100, already rounded by the caller. */
  percent: number;
  /**
   * Optional -- Home's compact progress card (redesign v3) shows the
   * percent alone; a mastery-level caption paired with it read as
   * contradictory when the two didn't agree at low evidence counts (e.g.
   * "8%" next to "Not assessed" -- a real issue flagged in review, not a
   * hypothetical). The full per-skill mastery breakdown still lives on
   * /progress, where it belongs next to the actual skill list it describes.
   */
  levelLabel?: string;
  size?: number;
  stroke?: number;
}) {
  const ratio = clamp(percent, 0, 100) / 100;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - ratio) }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <span
            className={cn(
              "num block leading-none font-bold",
              size >= 100 ? "text-kpi-value" : "text-[1rem]",
            )}
          >
            {Math.round(percent)}%
          </span>
          {levelLabel && (
            <span dir="auto" className="text-supporting mt-1 block leading-tight">
              {levelLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
