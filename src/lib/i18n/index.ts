import { ar, type Dictionary } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { DEFAULT_LOCALE, type Locale } from "./config";

const DICTIONARIES: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}

/**
 * `t("Step {current} of {total}", { current: 2, total: 8 })`
 *
 * Deliberately not a full ICU implementation: the dictionary is typed and
 * reviewed, so the only interpolation we need is named replacement. Numbers are
 * localised here so Arabic screens can show Arabic-Indic digits if the locale
 * calls for it while the underlying value stays a number.
 */
export function fill(
  template: string,
  params?: Record<string, string | number>,
  locale: Locale = DEFAULT_LOCALE,
): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = params[key];
    if (value === undefined) return match;
    return typeof value === "number" ? formatNumber(value, locale) : value;
  });
}

export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "ar" ? "ar" : "en", {
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatDate(value: number | Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en-GB", {
    day: "numeric",
    month: "short",
  }).format(value);
}

/** Pick the authored side of a `Localized` value. */
export function pick<T extends { ar: string; en: string }>(value: T, locale: Locale): string {
  return locale === "en" ? value.en : value.ar;
}

export function pickBlocks(
  value: { ar: string[]; en: string[] },
  locale: Locale,
): string[] {
  return locale === "en" ? value.en : value.ar;
}

export { ar, en, DEFAULT_LOCALE };
export type { Dictionary, Locale };
