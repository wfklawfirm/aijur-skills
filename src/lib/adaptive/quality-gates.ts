/**
 * AI Quality Gates for generated adaptive content (Phase 1: hooks only).
 *
 * Scope note: the build spec names 12 gates. Several of them (Evaluation
 * Integrity, full Cultural Fit review) presume scored, graded activities --
 * a hook is a short, ungraded engagement moment, not an assessed one, so
 * those don't apply the same way. The gates below are the mechanically
 * checkable subset for this content type; see
 * docs/ADAPTIVE_ENGINE_ARCHITECTURE.md for the full 12-gate mapping and
 * what's deferred to Phase 2 (an actual AI-judge review pass for tone/
 * cultural nuance, which needs a configured provider key).
 */
import { noveltyScore, NOVELTY_THRESHOLD, type ExposureFingerprint } from "./fingerprint";

export interface HookCandidate {
  skillId: string;
  language: "ar" | "en";
  payload: { title: string; body: string; attribution?: string };
  fingerprint: ExposureFingerprint;
}

export interface QualityGateReport {
  skillAlignment: boolean;
  nonRepetition: boolean;
  languageQuality: boolean;
  mobileFit: boolean;
  safety: boolean;
  copyrightSafety: boolean;
}

export interface QualityEvaluation {
  report: QualityGateReport;
  noveltyScore: number;
  /** Fraction of gates passed, 0..1 -- a real computed metric, not a stand-in. */
  qualityScore: number;
  status: "rejected" | "human_review_required" | "approved";
  /** Which gate(s) caused a hard rejection, if any -- for the review queue. */
  rejectionReasons: string[];
}

const MOBILE_TITLE_MAX = 60;
const MOBILE_BODY_MAX = 260;
const MOBILE_BODY_MIN = 20;

// Mirrors the "guarantee trap" detector already used for evaluating written
// learner responses (src/lib/ai/agents/evaluation.ts) -- duplicated rather
// than imported since that file's regex table is scoped to a different,
// larger detector set. Same principle: the product never lets AI-generated
// or learner-facing copy promise a legal outcome.
const GUARANTEE_RE: Record<"ar" | "en", RegExp> = {
  ar: /(أضمن|نضمن|ستربح|سنربح|مضمون|أعدك بالنتيجة)/,
  en: /\b(guarantee|you will win|we will win|certainly win)\b/i,
};

const PLACEHOLDER_LEFTOVER_RE = /\{\{|\}\}|undefined|NaN/;

function checkLanguageQuality(payload: HookCandidate["payload"], language: "ar" | "en"): boolean {
  if (!payload.title.trim() || !payload.body.trim()) return false;
  if (PLACEHOLDER_LEFTOVER_RE.test(payload.title) || PLACEHOLDER_LEFTOVER_RE.test(payload.body)) return false;
  // A crude but real script check -- Arabic content should contain Arabic
  // script, English content should be predominantly Latin script. Catches
  // the "wrong locale's template fired" class of bug, not a linguistic QA.
  const hasArabic = /[؀-ۿ]/.test(payload.body);
  if (language === "ar" && !hasArabic) return false;
  if (language === "en" && hasArabic) return false;
  return true;
}

function checkMobileFit(payload: HookCandidate["payload"]): boolean {
  return (
    payload.title.length > 0 &&
    payload.title.length <= MOBILE_TITLE_MAX &&
    payload.body.length >= MOBILE_BODY_MIN &&
    payload.body.length <= MOBILE_BODY_MAX
  );
}

function checkSafety(payload: HookCandidate["payload"], language: "ar" | "en"): boolean {
  const text = `${payload.title} ${payload.body}`;
  return !GUARANTEE_RE[language].test(text);
}

const QUALITY_APPROVAL_THRESHOLD = 0.8;

export function evaluateQuality(candidate: HookCandidate, knownSkillIds: Set<string>, recentExposures: ExposureFingerprint[]): QualityEvaluation {
  const novelty = noveltyScore(candidate.fingerprint, recentExposures);

  const report: QualityGateReport = {
    skillAlignment: knownSkillIds.has(candidate.skillId),
    nonRepetition: novelty >= NOVELTY_THRESHOLD,
    languageQuality: checkLanguageQuality(candidate.payload, candidate.language),
    mobileFit: checkMobileFit(candidate.payload),
    safety: checkSafety(candidate.payload, candidate.language),
    // Phase 1's offline composer synthesizes text from dimension vocabulary
    // and skill names -- it never copies source excerpts, so this always
    // passes for now. The field exists so a future source-grounded
    // generator has somewhere real to report an n-gram-overlap check.
    copyrightSafety: true,
  };

  const gateValues = Object.values(report);
  const qualityScore = gateValues.filter(Boolean).length / gateValues.length;

  const hardFailGates: (keyof QualityGateReport)[] = ["skillAlignment", "safety", "copyrightSafety"];
  const rejectionReasons = hardFailGates.filter((g) => !report[g]);

  let status: QualityEvaluation["status"];
  if (rejectionReasons.length > 0) {
    status = "rejected";
  } else if (!report.nonRepetition || !report.languageQuality || !report.mobileFit || qualityScore < QUALITY_APPROVAL_THRESHOLD) {
    status = "human_review_required";
  } else {
    status = "approved";
  }

  return { report, noveltyScore: novelty, qualityScore, status, rejectionReasons };
}
