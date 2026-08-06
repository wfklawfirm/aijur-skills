import * as React from "react";
import { BrandMark } from "@/components/layout/brand-mark";

/**
 * The app's icon + "AIJUR SKILLS" text lockup, sized for a compact header
 * band. Originally built as `HeroMark`, a standalone element centered under
 * the Home page's header (design overhaul Phase 1, then a v2 fix after real
 * user feedback that the first abstract-SVG version wasn't the logo at all —
 * see git history on `src/components/home/hero-mark.tsx` for that story).
 *
 * Moved here and folded into `AppHeader` itself (Home redesign v3) after a
 * second round of real feedback: the logo appeared *twice* on Home — once
 * as this small mark inside the header, once again as the standalone
 * `HeroMark` centered below it — which is exactly the "no duplicate logo"
 * violation the user flagged. There is now exactly one on-page logo
 * placement on Home, inside the header itself (`AppHeader`'s `variant="brand"`).
 *
 * Not the tall portrait `BrandLockup` image here either, for the same
 * reason `HeroMark` never used it: `BrandLockup`'s source asset is a
 * 778x1130 portrait (icon stacked above a two-line wordmark). Rendered at a
 * header-appropriate ~32px *height*, its *width* would collapse to roughly
 * 22px — an illegible sliver, not a readable wordmark. This component
 * instead lays the real `BrandMark` icon and the real product name out
 * horizontally, which is what actually fits a header band.
 */
export function BrandWordmark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <div dir="ltr" className={`flex shrink-0 items-center gap-2 ${className ?? ""}`}>
      <BrandMark size={size} className="shrink-0 rounded-lg" />
      {/* Plain inline styles, not the shared .text-label class -- that class
          carries RTL-specific size/casing overrides (globals.css) meant for
          section headers, not a brand wordmark that should look identical
          regardless of page direction. */}
      <div className="text-start leading-tight">
        <p style={{ fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "-0.01em" }} className="text-[var(--foreground)]">
          AIJUR
        </p>
        <p
          style={{ fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.08em" }}
          className="text-[var(--foreground-muted)]"
        >
          SKILLS
        </p>
      </div>
    </div>
  );
}
