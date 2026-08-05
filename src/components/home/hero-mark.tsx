import * as React from "react";
import { BrandMark } from "@/components/layout/brand-mark";

/**
 * The Home page's identity mark, v2 — replaces an earlier abstract
 * multi-color SVG illustration (ascending bars + a checkmark) after real
 * user feedback that it read as too small and the colors didn't feel
 * cohesive. Two real problems with that first version, not just taste:
 * (1) it wasn't the actual AIJUR logo at all, just an unrelated abstract
 * shape, so "the logo is too small" was literally true — there was no
 * logo there to begin with, only a tiny 20px icon in the header; (2) it
 * used four different tones at once (two pinks, solid burgundy, gold) in a
 * 64px-tall illustration, which is exactly the kind of "no design system"
 * clutter the original design brief complained about.
 *
 * This version uses the real, already-verified `BrandMark` icon (the same
 * asset the header and PWA icons use, pixel-verified transparent
 * background — see brand-mark.tsx's own comment) at a size that actually
 * reads as a logo, paired with the real product name as plain text rather
 * than the tall portrait `BrandLockup` image, which at any width small
 * enough not to dominate a mobile Home screen becomes too tall (778x1130
 * source aspect ratio) and pushes real content below the fold.
 */
export function HeroMark({ className }: { className?: string }) {
  return (
    <div dir="ltr" className={`flex items-center justify-center gap-2.5 ${className ?? ""}`}>
      <BrandMark size={44} className="shrink-0 rounded-xl" />
      {/* Plain inline styles, not the shared .text-label class -- that
          class carries RTL-specific size/casing overrides (globals.css)
          meant for section headers, not a brand wordmark that should look
          identical regardless of page direction. */}
      <div className="text-start leading-tight">
        <p style={{ fontSize: "1.0625rem", fontWeight: 700, letterSpacing: "-0.01em" }} className="text-[var(--foreground)]">
          AIJUR
        </p>
        <p
          style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.09em" }}
          className="text-[var(--foreground-muted)]"
        >
          SKILLS
        </p>
      </div>
    </div>
  );
}
