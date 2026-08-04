import * as React from "react";

/**
 * A small, understated identity mark at the top of Home (design overhaul,
 * Phase 1 — "أضف صورة توضيحية احترافية أعلى الصفحة للهوية"). Deliberately
 * abstract rather than a literal illustration: this is a legal-skills tool
 * for practising professionals, not a consumer app, and the existing design
 * system already treats decoration with restraint (see `globals.css`'s "one
 * accent, never decorative" rule) — an ascending-bars motif in the brand
 * palette reads as "progress" without competing with the real content below
 * it or requiring an image asset pipeline that doesn't exist in this repo.
 */
export function HeroMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 64"
      className={className}
      role="img"
      aria-hidden="true"
      style={{ width: "100%", height: "auto", maxWidth: 220 }}
    >
      <rect x="6" y="34" width="16" height="24" rx="5" fill="var(--color-brand-tint)" />
      <rect x="30" y="20" width="16" height="38" rx="5" fill="var(--color-brand-light)" opacity="0.55" />
      <rect x="54" y="8" width="16" height="50" rx="5" fill="var(--color-brand)" />
      <circle cx="98" cy="16" r="10" fill="none" stroke="var(--color-warning)" strokeWidth="2.5" opacity="0.7" />
      <path
        d="M92 16.5l4 4 8-8.5"
        fill="none"
        stroke="var(--color-warning)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}
