"use client";

import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/components/providers";
import { LOCALE_META, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/** One year -- long enough that a learner's choice sticks across normal use,
 * short enough that it isn't effectively permanent if a device is shared or
 * resold. Not httpOnly/secure-only on purpose: it carries a UI preference,
 * never anything sensitive, and needs to be readable/writable from the
 * client for an instant toggle with no round trip. */
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;
const LOCALE_COOKIE = "aijur_locale";

/**
 * Persists the learner's language choice so `src/proxy.ts`'s existing
 * cookie-preference branch (cookie > Accept-Language > Arabic default) --
 * previously dead code, since nothing ever wrote this cookie -- actually
 * does something: a returning visit to a locale-less URL (a fresh tab, a
 * PWA re-launch, a bookmarked root) now honours the last language chosen
 * here or in onboarding, instead of always guessing again.
 */
export function setLocaleCookie(locale: Locale) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
  } catch {
    // best-effort -- a blocked cookie just means the next locale-less visit
    // falls back to Accept-Language/default, same as today.
  }
}

/** Swaps the leading `/ar`/`/en` segment of a path, preserving everything
 * after it (query string included, since `usePathname()` excludes it and
 * Next re-appends the current search params on a relative push). */
export function otherLocalePath(pathname: string, from: Locale, to: Locale): string {
  if (pathname === `/${from}`) return `/${to}`;
  if (pathname.startsWith(`/${from}/`)) return `/${to}${pathname.slice(from.length + 1)}`;
  return `/${to}`;
}

/**
 * A single-tap language toggle -- real navigation to the equivalent URL in
 * the other locale (not a client-only dictionary swap), for the same
 * reason `onboarding-flow.tsx`'s own switcher does: it keeps
 * `<html dir/lang>`, set server-side from the URL segment in
 * `[locale]/layout.tsx`, correct rather than maintaining a second,
 * easily-divergent source of truth. Shows the *other* language, not the
 * current one, since a switcher's job is to say what tapping it does.
 *
 * `compact` shows the two-letter code ("EN"/"AR") instead of the full
 * language name -- for `AppHeader`, which on task screens (unit player,
 * simulation) already has a title plus other right-side content (a step
 * counter, an "End early" button) sharing the same row on a phone-width
 * screen. The full name is used on the roomier pre-auth/onboarding screens.
 */
export function LanguageSwitcher({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { locale, dict, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const other: Locale = locale === "ar" ? "en" : "ar";

  function switchTo(next: Locale) {
    if (next === locale) return;
    setLocaleCookie(next);
    router.push(otherLocalePath(pathname ?? `/${locale}`, locale, next));
  }

  return (
    <button
      type="button"
      onClick={() => switchTo(other)}
      aria-label={t(dict.common.switchLanguageTo, { language: LOCALE_META[other].label })}
      className={cn(
        "min-h-9 shrink-0 rounded-full border border-[var(--border)] px-3 text-sm font-semibold text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]",
        className,
      )}
    >
      {compact ? other.toUpperCase() : LOCALE_META[other].label}
    </button>
  );
}
