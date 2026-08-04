import Image from "next/image";

/**
 * The AIJUR icon mark (scales of justice + skills notebook), no wordmark --
 * used wherever space is tight (auth-flow headers) or the text brand name
 * already appears right next to it. Source: public/brand/aijur-logo-mark.png
 * (a square, transparent-background crop of the full lockup the user
 * supplied, trimmed to just the icon graphic -- the wordmark reads as noise
 * at the sizes this renders at).
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
 * The full lockup -- icon + "AIJUR SKILLS" wordmark + tagline -- not
 * currently rendered anywhere. Deliberately not used on the landing page:
 * the wordmark/tagline are baked into the raster image as English text,
 * which would show untranslated on the Arabic locale in a bilingual app
 * that otherwise fully localizes (dict.brand.name/slogan render real
 * Arabic there via BrandMark + text instead -- see landing page). Kept
 * available for a context where the English wordmark is actually
 * appropriate regardless of locale -- an About page, printable
 * certificate, or email template. Rendered at a fixed width with
 * `height="auto"` so it scales proportionally (source is 730x1084, a tall
 * portrait lockup).
 */
export function BrandLockup({ width = 200, className }: { width?: number; className?: string }) {
  return (
    <Image
      src="/brand/aijur-logo-full.png"
      alt="AIJUR Skills"
      width={730}
      height={1084}
      priority
      style={{ width, height: "auto" }}
      className={className}
    />
  );
}
