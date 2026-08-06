import type { Tone } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n/config";

/**
 * Shared formatting for Content Studio's status/enum badges.
 *
 * A handful of internal enum values (source `analysisStatus`, `SkillDef` /
 * `UnitDef` `reviewStatus`, ingestion `suggestionType`) have no bilingual copy
 * in the dictionary — they are technical pipeline states, not authored
 * content, so they render as-is (underscores turned to spaces) rather than
 * guessing at a translation that would mislabel the pipeline stage.
 */
export function humanize(value: string): string {
  return value.replace(/_/g, " ");
}

export function formatPercent(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "ar" ? "ar" : "en", {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value);
}

/** `ContentStatus` — the lifecycle every piece of authored content shares. */
export function contentStatusTone(status: string): Tone {
  switch (status) {
    case "published":
      return "positive";
    case "approved":
      return "brand";
    case "in_review":
      return "info";
    case "archived":
      return "warning";
    default:
      return "neutral";
  }
}

/** `ReviewStatus` — the authoring/ingestion trail on `SkillDef` / `UnitDef` / sources. */
export function reviewStatusTone(status: string): Tone {
  switch (status) {
    case "approved":
      return "positive";
    case "sme_reviewed":
      return "brand";
    case "ai_suggested":
      return "info";
    case "archived":
      return "warning";
    default:
      return "neutral";
  }
}

/** `SourceRecord.analysisStatus` — where a source stands in ingestion. */
export function analysisStatusTone(status: string): Tone {
  switch (status) {
    case "normalised":
    case "extracted":
      return "positive";
    case "in_progress":
      return "info";
    default:
      return "neutral";
  }
}

/** A single review gate's decision. */
export function gateTone(status: string): Tone {
  switch (status) {
    case "approved":
      return "positive";
    case "changes_requested":
      return "negative";
    default:
      return "neutral";
  }
}

/**
 * Subscription display-status colour, per spec §15's explicit palette rule:
 * green = active, orange = near-expiration, red = expired/dangerous, gray =
 * inactive. Color is never the only signal — every badge that uses this also
 * carries the status word itself (`Badge` always renders its children).
 */
export function subscriptionStatusTone(status: string): Tone {
  switch (status) {
    case "active":
    case "lifetime":
      return "positive";
    case "trial":
    case "scheduled":
      return "info";
    case "expiring_soon":
      return "warning";
    case "expired":
    case "suspended":
    case "cancelled":
      return "negative";
    default:
      return "neutral";
  }
}

export function accountStatusTone(status: string): Tone {
  return status === "suspended" ? "negative" : "positive";
}
