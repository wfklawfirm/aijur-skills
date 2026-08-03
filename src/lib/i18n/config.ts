export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ar";

/** Arabic is a first-class locale, not a translation layer, so it leads. */
export const LOCALE_META: Record<Locale, { label: string; dir: "rtl" | "ltr"; htmlLang: string }> = {
  ar: { label: "العربية", dir: "rtl", htmlLang: "ar" },
  en: { label: "English", dir: "ltr", htmlLang: "en" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function dirFor(locale: Locale): "rtl" | "ltr" {
  return LOCALE_META[locale].dir;
}

/**
 * French is planned. Adding it means adding a dictionary file and one entry
 * here — no component changes, because every string already routes through the
 * dictionary and every layout already reads `dir` rather than assuming LTR.
 */
export const PLANNED_LOCALES = ["fr"] as const;
