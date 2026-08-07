import { Browser } from "@capacitor/browser";
import { isNativePlatform } from "./capacitor";

/**
 * Central external-link classification (brief §22): every outbound link in
 * the app should be routed through `openLink()` rather than a raw `<a>`
 * navigation or `window.open`, so the WebView itself never navigates away
 * from the app's own origin (enforced separately by
 * `capacitor.config.ts`'s `server.allowNavigation`).
 */
export type LinkKind = "internal" | "aijur-external" | "external" | "mailto" | "tel" | "whatsapp" | "pdf";

/** Domains AIJUR controls but that aren't the main app origin (docs, blog,
 *  marketing) -- opened in the native in-app browser tab rather than
 *  handed off to the system browser, so the learner never fully leaves the
 *  app. Update alongside any new AIJUR-owned subdomain. */
export const AIJUR_SUPPORTED_DOMAINS = ["aijur.ai", "aijur.app"];

function isAijurDomain(hostname: string): boolean {
  return AIJUR_SUPPORTED_DOMAINS.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
}

export function classifyLink(href: string): LinkKind {
  if (href.startsWith("mailto:")) return "mailto";
  if (href.startsWith("tel:")) return "tel";
  if (href.startsWith("https://wa.me/") || href.startsWith("https://api.whatsapp.com/")) return "whatsapp";
  if (href.startsWith("/") || href.startsWith("#")) return "internal";

  try {
    const url = new URL(href, typeof window !== "undefined" ? window.location.origin : undefined);
    if (typeof window !== "undefined" && url.origin === window.location.origin) return "internal";
    if (url.pathname.toLowerCase().endsWith(".pdf")) return "pdf";
    if (isAijurDomain(url.hostname)) return "aijur-external";
    return "external";
  } catch {
    return "external";
  }
}

/**
 * Opens a link per its classification. Internal links should just use
 * `next/link`/`router.push` instead of this function; this exists for the
 * remaining cases -- AIJUR-owned-but-different-origin content opens in the
 * native in-app browser (no full context switch), anything else system
 * browser / native mail-tel-WhatsApp handoff.
 */
export async function openLink(href: string): Promise<void> {
  const kind = classifyLink(href);

  if (kind === "mailto" || kind === "tel" || kind === "whatsapp") {
    if (isNativePlatform()) {
      await Browser.open({ url: href });
    } else if (typeof window !== "undefined") {
      window.location.href = href;
    }
    return;
  }

  if (!isNativePlatform()) {
    if (typeof window !== "undefined") window.open(href, "_blank", "noopener,noreferrer");
    return;
  }

  if (kind === "aijur-external" || kind === "pdf") {
    await Browser.open({ url: href, presentationStyle: "popover" });
    return;
  }

  // "external" -- hand off to the real system browser, not an in-app tab.
  await Browser.open({ url: href });
}
