import Image from "next/image";

/**
 * The AIJUR icon mark alone (scales of justice + skills notebook), no
 * wordmark -- source: public/brand/aijur-logo-mark.png, a square
 * transparent-background crop of the full lockup. Used ONLY where a full
 * lockup is technically impossible, not as a general-purpose small logo:
 * the PWA install icons (public/icons/*) and the favicon/apple-touch-icon
 * (src/app/icon.png, src/app/apple-icon.png) are generated from this same
 * crop, because an OS home-screen icon rendered at 48-192px cannot show a
 * tall multi-line wordmark legibly -- that's a hard technical constraint,
 * not a style choice. Not currently used inside any page's JSX -- every
 * on-page placement uses the full, unmodified logo via <BrandLockup>
 * instead (the user asked for the logo itself, unaltered).
 */
export function BrandMark({ size = 56, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/brand/aijur-logo-mark.png"
      alt=""
      width={size}
      height={size}
      priority
      className={className}
    />
  );
}

/**
 * The full lockup exactly as the user supplied it -- icon + "AIJUR SKILLS"
 * wordmark + tagline -- with only the surrounding blank canvas trimmed and
 * the background made transparent (no artwork pixel altered, no cropping
 * of content). Used on every on-page brand placement (all 5 pre-auth
 * headers + the landing page) per explicit instruction: show the logo
 * itself, unchanged, blended into the app's background rather than sitting
 * in a mismatched white box.
 *
 * The background-removal pass is verified, not assumed: every border pixel
 * of public/brand/aijur-logo-full.png was sampled (a Python/Pillow script,
 * not eyeballing) and confirmed alpha=0 around the full perimeter -- an
 * earlier pass left an opaque gray patch in one corner (a flood-fill that
 * hadn't reached everywhere), which is exactly the "doesn't blend with the
 * white background" artifact reported. Fixed by bordering the trimmed
 * image with a few pixels of guaranteed-connected white before flood-
 * filling from a single seed (so the whole perimeter is provably one
 * connected region), then trimming the transparent border back off and
 * adding a small transparent margin so the tagline text isn't flush
 * against the image edge.
 *
 * Rendered at a fixed width with `height="auto"` so it scales
 * proportionally (source is 778x1130, a tall portrait lockup).
 */
export function BrandLockup({ width = 200, className }: { width?: number; className?: string }) {
  return (
    <Image
      src="/brand/aijur-logo-full.png"
      alt="AIJUR Skills — Smarter Law Practice"
      width={778}
      height={1130}
      priority
      style={{ width, height: "auto" }}
      className={className}
    />
  );
}
