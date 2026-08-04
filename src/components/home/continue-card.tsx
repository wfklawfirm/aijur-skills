"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The redesigned "Continue Learning" CTA (design overhaul, Phase 1 — direct
 * user request: "اجعل زر Resume بعرض مناسب (غير ممتد بالكامل بالكامل) مع
 * سهم + أيقونة تشغيل"). Two changes from the old full-width `LinkButton`:
 *
 * - The button sizes to its content instead of stretching edge-to-edge —
 *   an intentional CTA reads as an action, not a filled-in placeholder.
 * - A Play icon + an arrow that nudges on press/hover (Framer Motion,
 *   `useReducedMotion`-aware) instead of a bare text label.
 *
 * No XP or streak badge on this card: the design brief describes one, but
 * this app has no XP/points system anywhere in its data model (grep-
 * verified against schema.ts) — inventing a number here would be a fabricated
 * stat, not a redesign. Duration is real (`unit.estimatedMinutes`).
 */
export function ContinueCard({
  pathTitle,
  unitTitle,
  href,
  ctaLabel,
  minutesLabel,
}: {
  pathTitle: string;
  unitTitle: string;
  href: string;
  ctaLabel: string;
  /** Pre-filled, e.g. "8 min" — kept locale-aware by the caller. */
  minutesLabel: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-[var(--radius-card-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-md)]">
      <div className="min-w-0">
        <p dir="auto" className="text-supporting truncate">
          {pathTitle}
        </p>
        <p dir="auto" className="text-section-title mt-0.5 line-clamp-2">
          {unitTitle}
        </p>
        <p className="text-supporting num mt-2 flex items-center gap-1.5">
          <Clock size={14} strokeWidth={1.75} aria-hidden="true" />
          {minutesLabel}
        </p>
      </div>

      <motion.div whileTap={reduceMotion ? undefined : { scale: 0.97 }} className="mt-5 inline-block">
        <Link
          href={href}
          className={cn(
            "group inline-flex min-h-11 items-center gap-2.5 rounded-[var(--radius-control)] px-5",
            "bg-[var(--color-brand)] text-[var(--color-brand-contrast)] font-semibold",
            "shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--color-brand-dark)] active:bg-[var(--color-brand-active)]",
          )}
        >
          <Play size={16} strokeWidth={2} fill="currentColor" aria-hidden="true" />
          {ctaLabel}
          <motion.span
            className="flip-rtl inline-flex"
            animate={reduceMotion ? undefined : { x: [0, 3, 0] }}
            transition={reduceMotion ? undefined : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
