"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Home's single primary call to action (Home redesign v3) -- direct
 * response to "أضف CTA واحداً واضحاً يمثل الخطوة التالية ... أهم إجراء في
 * الصفحة، بعرض كامل تقريباً". Replaces the earlier content-sized
 * `ContinueCard` button, which was deliberately narrow (a prior round of
 * feedback asked for a button that "isn't stretched full width"); this
 * round asked for the opposite -- full width, unmistakably the page's one
 * primary action. Both are real, direct, sequential pieces of feedback,
 * not a contradiction to resolve by picking a middle ground; the more
 * recent instruction wins.
 *
 * `context` is an optional single line above the button -- what the action
 * actually continues (a real unit/path title, or a due-review count),
 * so the button isn't the only information on screen. Never fabricated:
 * the caller only passes real data already computed for the page.
 */
export function PrimaryAction({
  href,
  label,
  context,
}: {
  href: string;
  label: string;
  context?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      {context && (
        <p dir="auto" className="text-supporting mb-2 truncate">
          {context}
        </p>
      )}
      <motion.div whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
        <Link
          href={href}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-[var(--radius-control)]",
            "min-h-[3.25rem] bg-[var(--color-brand)] px-5 text-base font-semibold text-[var(--color-brand-contrast)]",
            "shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--color-brand-dark)] active:bg-[var(--color-brand-active)]",
          )}
        >
          {label}
          <ArrowRight size={18} strokeWidth={2} className="flip-rtl" aria-hidden="true" />
        </Link>
      </motion.div>
    </div>
  );
}
