"use client";

import * as React from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries/ar";
import type { Locale } from "@/lib/i18n/config";
import { fill } from "@/lib/i18n";

interface I18nValue {
  locale: Locale;
  dir: "rtl" | "ltr";
  dict: Dictionary;
  t: (template: string, params?: Record<string, string | number>) => string;
}

const I18nContext = React.createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const value = React.useMemo<I18nValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      dict,
      t: (template, params) => fill(template, params, locale),
    }),
    [locale, dict],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

/** Pick the authored side of a `Localized` value in a client component. */
export function useLocalized() {
  const { locale } = useI18n();
  return React.useCallback(
    <T extends { ar: string; en: string }>(value: T) => (locale === "en" ? value.en : value.ar),
    [locale],
  );
}

// ---------------------------------------------------------------------------
// Online / offline
// ---------------------------------------------------------------------------

const OnlineContext = React.createContext(true);

export function ConnectivityProvider({ children }: { children: React.ReactNode }) {
  const [online, setOnline] = React.useState(true);

  React.useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  return <OnlineContext.Provider value={online}>{children}</OnlineContext.Provider>;
}

export function useOnline(): boolean {
  return React.useContext(OnlineContext);
}

/**
 * Applies the learner's stored accessibility preferences to the document.
 * Preferences live server-side on the profile; this mirrors them onto data
 * attributes the stylesheet already reacts to.
 */
export function PreferencesEffect({
  reducedMotion,
  largeText,
}: {
  reducedMotion: boolean;
  largeText: boolean;
}) {
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.reducedMotion = reducedMotion ? "true" : "false";
    root.dataset.textSize = largeText ? "large" : "default";
  }, [reducedMotion, largeText]);
  return null;
}
