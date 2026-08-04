/**
 * Composition vocabulary for the AIJUR Adaptive Professional Journey Engine
 * (Phase 1: personalized hooks). Content-as-database, same as the rest of
 * `content/` -- these are authored, reviewed literals, not free-form AI
 * output. The generator (src/lib/adaptive/hooks.ts) composes a hook from a
 * skill plus one value from each dimension below; the combinatorial space
 * (hook types x roles x counterparties x channels x tones x goals) is what
 * produces variation at scale without hand-authoring every combination --
 * see docs/ADAPTIVE_ENGINE_ARCHITECTURE.md §6.
 *
 * Scope note: this vocabulary intentionally names the full taxonomy from the
 * build spec (so Phase 2 can extend the *generator* without touching this
 * file), but Phase 1's offline composer (hooks.ts) only implements templates
 * for a subset of hook types -- see HOOK_TYPES_IMPLEMENTED below. Calling
 * code should only select from that subset until the rest are built.
 */
import type { Localized } from "@content/types";

export interface DimensionOption {
  id: string;
  label: Localized;
}

export const HOOK_TYPES: DimensionOption[] = [
  { id: "quick_dilemma", label: { en: "Quick dilemma", ar: "معضلة سريعة" } },
  { id: "unexpected_mistake", label: { en: "Unexpected mistake", ar: "خطأ غير متوقع" } },
  { id: "myth_vs_reality", label: { en: "Myth vs. reality", ar: "شائعة أم حقيقة" } },
  { id: "what_would_you_do", label: { en: "What would you do?", ar: "ماذا كنت لتفعل؟" } },
  { id: "fast_prioritization", label: { en: "Fast prioritization", ar: "ترتيب أولويات سريع" } },
  { id: "spot_the_risk", label: { en: "Spot the risk", ar: "اكتشف الخطر" } },
  { id: "client_quote", label: { en: "Client quote", ar: "اقتباس من موكل" } },
  { id: "decision_under_pressure", label: { en: "Decision under pressure", ar: "قرار تحت ضغط" } },
  { id: "inbox_alert", label: { en: "Inbox alert", ar: "تنبيه بريد" } },
  { id: "one_sentence_rewrite", label: { en: "One-sentence rewrite", ar: "أعد صياغة الجملة" } },
];

/** Templates only exist for these in Phase 1's offline composer -- see the
 * scope note above. Keep in sync with the `switch` in hooks.ts. */
export const HOOK_TYPES_IMPLEMENTED = [
  "quick_dilemma",
  "unexpected_mistake",
  "myth_vs_reality",
  "what_would_you_do",
  "fast_prioritization",
  "spot_the_risk",
  "client_quote",
  "decision_under_pressure",
] as const;
export type ImplementedHookType = (typeof HOOK_TYPES_IMPLEMENTED)[number];

/**
 * Phase 2: Daily Challenge as a second content type (see
 * docs/ADAPTIVE_ENGINE_ARCHITECTURE.md §14) -- a distinct "shape" dimension,
 * same role `HOOK_TYPES` plays for hooks. A hook is a short reflective
 * prompt or question; a challenge is a concrete micro-action the learner is
 * asked to actually do today, in real work or in the app -- a different
 * communicative purpose, not a reworded hook. Only 4 of these have offline
 * composer templates in Phase 2 (see CHALLENGE_TYPES_IMPLEMENTED); the rest
 * are named here so a later phase can extend the generator without touching
 * this file, mirroring HOOK_TYPES' own "name the full taxonomy, implement a
 * subset" pattern.
 */
export const CHALLENGE_TYPES: DimensionOption[] = [
  { id: "apply_today", label: { en: "Apply it today", ar: "طبّقها اليوم" } },
  { id: "rewrite_one", label: { en: "Rewrite one thing", ar: "أعد صياغة شيء واحد" } },
  { id: "spot_and_log", label: { en: "Spot it and log it", ar: "لاحظها ودوّنها" } },
  { id: "teach_it_back", label: { en: "Teach it back", ar: "اشرحها لغيرك" } },
  { id: "ask_one_question", label: { en: "Ask one question", ar: "اطرح سؤالًا واحدًا" } },
  { id: "measure_it", label: { en: "Measure it", ar: "قِسها" } },
];

/** Templates only exist for these in Phase 2's offline composer -- see the
 * scope note above. Keep in sync with the `switch` in challenge-composer.ts. */
export const CHALLENGE_TYPES_IMPLEMENTED = ["apply_today", "rewrite_one", "spot_and_log", "teach_it_back"] as const;
export type ImplementedChallengeType = (typeof CHALLENGE_TYPES_IMPLEMENTED)[number];

/** Reuses the exact career-stage vocabulary already collected at onboarding
 * (`profiles.careerStage`) rather than inventing a parallel "user role" set. */
export const CAREER_STAGES: DimensionOption[] = [
  { id: "student", label: { en: "Law student", ar: "طالب حقوق" } },
  { id: "trainee", label: { en: "Trainee lawyer", ar: "محامٍ متدرّج" } },
  { id: "junior", label: { en: "Junior lawyer", ar: "محامٍ شاب" } },
  { id: "experienced", label: { en: "Experienced lawyer", ar: "محامٍ ذو خبرة" } },
  { id: "manager", label: { en: "Partner or firm manager", ar: "شريك أو مدير مكتب" } },
];

export const COUNTERPARTIES: DimensionOption[] = [
  { id: "new_client", label: { en: "a new client", ar: "موكل جديد" } },
  { id: "difficult_client", label: { en: "a difficult client", ar: "موكل صعب المراس" } },
  { id: "corporate_client", label: { en: "a corporate client", ar: "موكل شركة" } },
  { id: "international_client", label: { en: "an international client", ar: "موكل دولي" } },
  { id: "senior_partner", label: { en: "a senior partner", ar: "شريك أقدم" } },
  { id: "junior_colleague", label: { en: "a junior colleague", ar: "زميل مبتدئ" } },
  { id: "opposing_counsel", label: { en: "opposing counsel", ar: "محامي الطرف الآخر" } },
  { id: "general_counsel", label: { en: "an in-house general counsel", ar: "مستشار قانوني داخلي" } },
];

export const CHANNELS: DimensionOption[] = [
  { id: "face_to_face", label: { en: "in person", ar: "وجهًا لوجه" } },
  { id: "phone_call", label: { en: "on the phone", ar: "عبر الهاتف" } },
  { id: "video_call", label: { en: "on a video call", ar: "عبر مكالمة فيديو" } },
  { id: "email", label: { en: "by email", ar: "عبر البريد الإلكتروني" } },
  { id: "professional_message", label: { en: "in a professional chat message", ar: "عبر رسالة عمل" } },
];

export const TONES: DimensionOption[] = [
  { id: "calm", label: { en: "calm", ar: "هادئ" } },
  { id: "impatient", label: { en: "impatient", ar: "غير صبور" } },
  { id: "skeptical", label: { en: "skeptical", ar: "متشكك" } },
  { id: "demanding", label: { en: "demanding", ar: "متطلّب" } },
  { id: "time_pressed", label: { en: "in a hurry", ar: "مستعجل" } },
  { id: "cooperative", label: { en: "cooperative", ar: "متعاون" } },
];

export const GOALS: DimensionOption[] = [
  { id: "clarify", label: { en: "clarify", ar: "توضيح الأمر" } },
  { id: "set_expectations", label: { en: "set realistic expectations", ar: "ضبط التوقعات بواقعية" } },
  { id: "prioritize", label: { en: "decide what comes first", ar: "تحديد الأولوية" } },
  { id: "de_escalate", label: { en: "de-escalate", ar: "تهدئة الموقف" } },
  { id: "persuade", label: { en: "persuade", ar: "الإقناع" } },
  { id: "obtain_information", label: { en: "get the information you actually need", ar: "الحصول على المعلومة التي تحتاجها فعلًا" } },
];

function byId(options: DimensionOption[], id: string): DimensionOption {
  return options.find((o) => o.id === id) ?? options[0]!;
}

export function pickCareerStage(id: string): DimensionOption {
  return byId(CAREER_STAGES, id);
}
export function pickCounterparty(id: string): DimensionOption {
  return byId(COUNTERPARTIES, id);
}
export function pickChannel(id: string): DimensionOption {
  return byId(CHANNELS, id);
}
export function pickTone(id: string): DimensionOption {
  return byId(TONES, id);
}
export function pickGoal(id: string): DimensionOption {
  return byId(GOALS, id);
}
