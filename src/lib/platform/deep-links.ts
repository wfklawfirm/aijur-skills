import type { Locale } from "@/lib/i18n/config";

/**
 * Central deep-link resolution (brief §20: "central mapping"). Both the
 * `appUrlOpen` listener (Universal Links / App Links tapped from outside
 * the app) and push-notification tap handling call `resolveDeepLinkUrl()`
 * -- neither duplicates its own URL-parsing logic.
 *
 * Deliberately does NOT include a "certificate" target -- no such route
 * exists in this app (grep-verified against `src/app/(app)/[locale]/`).
 */
export type DeepLinkTarget =
  | { kind: "home" }
  | { kind: "verify-email"; token: string }
  | { kind: "reset-password"; token: string }
  | { kind: "skill"; slug: string }
  | { kind: "unit"; unitId: string }
  | { kind: "simulation"; scenarioId: string }
  | { kind: "subscription" }
  | { kind: "practice" }
  | { kind: "progress" };

const UUID_ISH = "[A-Za-z0-9_.-]+";

const ROUTES: { pattern: RegExp; build: (m: RegExpMatchArray) => DeepLinkTarget }[] = [
  { pattern: /^\/home\/?$/, build: () => ({ kind: "home" }) },
  { pattern: new RegExp(`^/verify-email/(${UUID_ISH})/?$`), build: (m) => ({ kind: "verify-email", token: m[1]! }) },
  { pattern: new RegExp(`^/reset-password/(${UUID_ISH})/?$`), build: (m) => ({ kind: "reset-password", token: m[1]! }) },
  { pattern: new RegExp(`^/learn/(${UUID_ISH})/?$`), build: (m) => ({ kind: "skill", slug: m[1]! }) },
  { pattern: new RegExp(`^/unit/(${UUID_ISH})/?$`), build: (m) => ({ kind: "unit", unitId: m[1]! }) },
  { pattern: new RegExp(`^/simulation/(${UUID_ISH})/?$`), build: (m) => ({ kind: "simulation", scenarioId: m[1]! }) },
  { pattern: /^\/subscription-ended\/?$/, build: () => ({ kind: "subscription" }) },
  { pattern: /^\/practice\/?$/, build: () => ({ kind: "practice" }) },
  { pattern: /^\/progress\/?$/, build: () => ({ kind: "progress" }) },
];

/** Strips a leading `/{locale}` segment, if present, before matching. */
function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(ar|en)(\/.*)?$/);
  return match ? match[2] || "/" : pathname;
}

export function matchDeepLinkPath(pathname: string): DeepLinkTarget | null {
  const path = stripLocale(pathname);
  for (const route of ROUTES) {
    const m = path.match(route.pattern);
    if (m) return route.build(m);
  }
  return null;
}

export function deepLinkHref(target: DeepLinkTarget, locale: Locale): string {
  switch (target.kind) {
    case "home":
      return `/${locale}/home`;
    case "verify-email":
      return `/${locale}/verify-email/${target.token}`;
    case "reset-password":
      return `/${locale}/reset-password/${target.token}`;
    case "skill":
      return `/${locale}/learn/${target.slug}`;
    case "unit":
      return `/${locale}/unit/${target.unitId}`;
    case "simulation":
      return `/${locale}/simulation/${target.scenarioId}`;
    case "subscription":
      return `/${locale}/subscription-ended`;
    case "practice":
      return `/${locale}/practice`;
    case "progress":
      return `/${locale}/progress`;
  }
}

/**
 * Takes a raw URL (from a Universal Link / App Link, a custom-scheme URL,
 * or a push notification's `data.url`) and resolves it to an in-app path
 * for the given locale. Falls back to `/{locale}/home` for anything
 * unrecognized, rather than leaving the app on a blank/errored route.
 */
export function resolveDeepLinkUrl(rawUrl: string, locale: Locale): string {
  let pathname: string;
  try {
    // Handles both https://domain/path and aijurskills://path forms.
    const url = new URL(rawUrl);
    pathname = url.pathname || "/";
  } catch {
    pathname = rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`;
  }

  const target = matchDeepLinkPath(pathname);
  return target ? deepLinkHref(target, locale) : `/${locale}/home`;
}
