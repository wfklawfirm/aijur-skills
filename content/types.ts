/**
 * AIJUR Professional Skills Lab — authoring contracts.
 *
 * Everything a content author (human or the assisted-ingestion workflow) can
 * produce is described here. The runtime seeds these objects into the database
 * and the Unit Player renders them; nothing in the UI reads a hard-coded string.
 *
 * Rule: every learner-visible string is `Localized`. Arabic is authored first.
 */

export type Locale = "ar" | "en";

/** A learner-visible string, authored in both languages. Arabic is primary. */
export type Localized = { ar: string; en: string };

/** Rich text = an ordered list of short paragraphs. Keeps mobile screens short. */
export type LocalizedBlocks = { ar: string[]; en: string[] };

// ---------------------------------------------------------------------------
// Mastery
// ---------------------------------------------------------------------------

/** 0 Not Assessed · 1 Awareness · 2 Foundation · 3 Applied · 4 Proficient · 5 Advanced · 6 Leader/Coach */
export type MasteryLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const MASTERY_LEVELS = [0, 1, 2, 3, 4, 5, 6] as const;

/** Difficulty stage of a unit or activity, per the six-stage progression. */
export type Stage = 1 | 2 | 3 | 4 | 5 | 6;

// ---------------------------------------------------------------------------
// Source intelligence
// ---------------------------------------------------------------------------

export type ReviewStatus =
  | "draft"
  | "ai_suggested"
  | "sme_reviewed"
  | "approved"
  | "archived";

export interface SourceRecord {
  id: string;
  title: string;
  author: string;
  year?: number;
  language: "en" | "ar" | "fr";
  publisher?: string;
  /** Domain ids this source informs. */
  domains: string[];
  /** Structural map captured during ingestion — not the text itself. */
  sections?: string[];
  /**
   * How AIJUR may use it. `reference_only` means: read for concepts, never
   * reproduce phrasing, exercises, tables or figures.
   */
  usageRights: "reference_only" | "licensed" | "public_domain" | "owned";
  analysisStatus: "pending" | "in_progress" | "extracted" | "normalised";
  reviewStatus: ReviewStatus;
  /** Why it is in the library and what AIJUR took from it conceptually. */
  notes: string;
  /** Literature / narrative sources used for scenario texture, not competencies. */
  kind: "professional" | "operations" | "advocacy" | "narrative" | "framework";
}

// ---------------------------------------------------------------------------
// Competency framework
// ---------------------------------------------------------------------------

export interface DomainDef {
  id: string;
  name: Localized;
  description: Localized;
  order: number;
  /** Lucide-free inline icon key resolved by the UI icon registry. */
  icon: string;
}

export interface SkillLevelDef {
  level: MasteryLevel;
  definition: Localized;
  observableBehaviors: Localized[];
  commonMistakes: Localized[];
  successCriteria: Localized[];
  /** What the system must have on file before it will award this level. */
  evidenceRequired: Localized[];
}

export interface SkillDef {
  id: string;
  domainId: string;
  name: Localized;
  /** Alternate names found across sources — used for dedup at ingestion time. */
  synonyms: string[];
  definition: Localized;
  levels: SkillLevelDef[];
  sourceIds: string[];
  /** 0..1 — how strongly the sources converge on this being a distinct skill. */
  confidence: number;
  reviewStatus: ReviewStatus;
  /** Skills that should be at least Foundation before this one is introduced. */
  prerequisiteSkillIds?: string[];
  /** True when the skill is a Legal English competency rather than a behavioural one. */
  languageTrack?: boolean;
}

// ---------------------------------------------------------------------------
// Activities
// ---------------------------------------------------------------------------

export type ActivityKind =
  | "multiple_choice"
  | "multiple_select"
  | "true_false"
  | "best_response"
  | "find_mistake"
  | "ordering"
  | "categorization"
  | "matching"
  | "fill_blank"
  | "swipe_classify"
  | "priority_ranking"
  | "short_written"
  | "email_rewrite"
  | "branching_decision"
  | "listening"
  | "pronunciation"
  | "reflection";

/** How the answer is graded. */
export type Grading = "deterministic" | "ai_rubric" | "self_report";

export interface ChoiceOption {
  id: string;
  label: Localized;
  correct?: boolean;
  /** Shown after answering — always explain *why*, for right and wrong alike. */
  rationale: Localized;
}

export interface ActivityBase {
  id: string;
  kind: ActivityKind;
  /** Primary skill exercised. Drives mastery updates. */
  skillId: string;
  secondarySkillIds?: string[];
  stage: Stage;
  prompt: Localized;
  /** Optional short setup shown above the prompt (client message, email, etc.). */
  context?: LocalizedBlocks;
  /** Points contributed to the unit score. Default 1. */
  weight?: number;
  /** An equivalent way to complete the task without drag, swipe or audio. */
  accessibleAlternative?: Localized;
  hint?: Localized;
}

export interface ChoiceActivity extends ActivityBase {
  kind: "multiple_choice" | "multiple_select" | "true_false" | "best_response" | "find_mistake";
  options: ChoiceOption[];
}

export interface OrderingActivity extends ActivityBase {
  kind: "ordering" | "priority_ranking";
  /** Authored in the correct order; the player shuffles deterministically. */
  items: { id: string; label: Localized; rationale?: Localized }[];
}

export interface CategorizationActivity extends ActivityBase {
  kind: "categorization" | "swipe_classify";
  buckets: { id: string; label: Localized }[];
  items: { id: string; label: Localized; bucketId: string; rationale: Localized }[];
}

export interface MatchingActivity extends ActivityBase {
  kind: "matching";
  pairs: { id: string; left: Localized; right: Localized; rationale?: Localized }[];
}

export interface FillBlankActivity extends ActivityBase {
  kind: "fill_blank";
  /** Sentence with `{{n}}` placeholders, n starting at 0. */
  template: Localized;
  blanks: { id: string; options: Localized[]; answerIndex: number; rationale: Localized }[];
}

export interface WrittenActivity extends ActivityBase {
  kind: "short_written" | "email_rewrite";
  grading: "ai_rubric";
  rubricId: string;
  /** Shown to the learner *after* they submit, never before. */
  modelAnswer: LocalizedBlocks;
  /** A weak answer with the specific failure named — the contrast is the lesson. */
  weakAnswer?: { text: LocalizedBlocks; whatIsWrong: Localized };
  minChars?: number;
  /** For email_rewrite: the flawed draft the learner improves. */
  draft?: LocalizedBlocks;
}

export interface BranchingActivity extends ActivityBase {
  kind: "branching_decision";
  nodes: {
    id: string;
    text: Localized;
    choices: {
      id: string;
      label: Localized;
      /** null ends the branch. */
      nextNodeId: string | null;
      quality: "strong" | "acceptable" | "weak" | "critical_mistake";
      rationale: Localized;
    }[];
  }[];
  startNodeId: string;
}

export interface ListeningActivity extends ActivityBase {
  kind: "listening";
  /** Spoken with the Web Speech API when no audio file is provided. */
  script: Localized;
  audioUrl?: string;
  /** Always present: listening must never be the only route to the answer. */
  transcript: Localized;
  options: ChoiceOption[];
}

export interface PronunciationActivity extends ActivityBase {
  kind: "pronunciation";
  target: string;
  ipa?: string;
  meaning: Localized;
  exampleSentence: Localized;
  /** Intelligibility only. Accent is never scored. */
  grading: "self_report" | "ai_rubric";
}

export interface ReflectionActivity extends ActivityBase {
  kind: "reflection";
  grading: "self_report";
  followUp?: Localized;
}

export type Activity =
  | ChoiceActivity
  | OrderingActivity
  | CategorizationActivity
  | MatchingActivity
  | FillBlankActivity
  | WrittenActivity
  | BranchingActivity
  | ListeningActivity
  | PronunciationActivity
  | ReflectionActivity;

// ---------------------------------------------------------------------------
// Rubrics
// ---------------------------------------------------------------------------

export interface RubricCriterion {
  id: string;
  name: Localized;
  description: Localized;
  weight: number;
  /** What a 0, 1, 2, 3 looks like. Index = score. */
  descriptors: [Localized, Localized, Localized, Localized];
  /** The evaluator must quote learner text supporting the score. */
  evidenceRequired: true;
}

export interface RubricDef {
  id: string;
  name: Localized;
  version: string;
  skillIds: string[];
  criteria: RubricCriterion[];
  /** Behaviours that cap the overall score regardless of other criteria. */
  criticalMistakes: { id: string; label: Localized; capsScoreAt: number }[];
  passThreshold: number;
}

// ---------------------------------------------------------------------------
// Scenarios (simulation engine)
// ---------------------------------------------------------------------------

export interface ScenarioCharacter {
  id: string;
  name: Localized;
  role: Localized;
  personality: Localized;
  emotionalState: Localized;
  /** What the character knows and will volunteer. */
  knownInformation: LocalizedBlocks;
  /** What they will only reveal if the learner asks well. */
  hiddenInformation: LocalizedBlocks;
  goal: Localized;
}

export interface ScenarioDef {
  id: string;
  title: Localized;
  description: Localized;
  skillIds: string[];
  stage: Stage;
  difficulty: 1 | 2 | 3 | 4 | 5;
  userRole: Localized;
  character: ScenarioCharacter;
  culturalContext: Localized;
  /** "ar" | "en" | "bilingual" — bilingual scenarios let the learner switch mid-call. */
  languageMode: "ar" | "en" | "bilingual";
  background: LocalizedBlocks;
  userGoal: Localized;
  opening: Localized;
  decisionPoints: { id: string; label: Localized; triggerAfterTurn: number }[];
  expectedBehaviors: Localized[];
  criticalMistakes: Localized[];
  successConditions: Localized[];
  exitConditions: Localized[];
  rubricId: string;
  coachingNotes: LocalizedBlocks;
  maxTurns: number;
  estimatedMinutes: number;
  /** Text transcript path for learners who cannot or prefer not to use voice. */
  accessibilityAlternative: Localized;
  sourceIds: string[];
  contentVersion: string;
}

// ---------------------------------------------------------------------------
// Units — the 15-part template expressed as an ordered step list
// ---------------------------------------------------------------------------

export type UnitStep =
  | { kind: "hook"; id: string; text: Localized; attribution?: Localized }
  | { kind: "why_it_matters"; id: string; text: Localized }
  | { kind: "learning_goal"; id: string; goals: LocalizedBlocks }
  | { kind: "micro_lesson"; id: string; title: Localized; body: LocalizedBlocks }
  | {
      kind: "visual";
      id: string;
      title: Localized;
      /** Rendered as a native component — no images, so it scales and translates. */
      variant: "steps" | "comparison" | "timeline" | "scale";
      items: { label: Localized; detail?: Localized; tone?: "positive" | "negative" | "neutral" }[];
    }
  | {
      kind: "worked_example";
      id: string;
      strong: { label: Localized; text: LocalizedBlocks; why: Localized };
      weak: { label: Localized; text: LocalizedBlocks; why: Localized };
    }
  | { kind: "activity"; id: string; activityId: string; mode: "quick" | "guided" | "independent" }
  | { kind: "simulation"; id: string; scenarioId: string }
  | { kind: "summary"; id: string; summaryCardId: string }
  | { kind: "apply_tomorrow"; id: string; task: Localized; detail?: Localized }
  | { kind: "next_mission"; id: string; teaser: Localized };

export interface SummaryCardDef {
  id: string;
  title: Localized;
  whatYouLearned: LocalizedBlocks;
  framework: { name: Localized; steps: Localized[] };
  rememberThis: Localized;
  useItTomorrow: Localized;
  /** Legal English phrase bank attached to the card, when relevant. */
  phrases?: { en: string; ar: string; register: "formal" | "neutral" | "plain" }[];
}

export interface UnitDef {
  id: string;
  chapterId: string;
  order: number;
  title: Localized;
  subtitle: Localized;
  primarySkillId: string;
  skillIds: string[];
  stage: Stage;
  estimatedMinutes: number;
  steps: UnitStep[];
  activities: Activity[];
  summaryCard: SummaryCardDef;
  /** Mastery level this unit can evidence when passed. */
  targetLevel: MasteryLevel;
  sourceIds: string[];
  contentVersion: string;
  reviewStatus: ReviewStatus;
}

export interface ChapterDef {
  id: string;
  pathId: string;
  order: number;
  title: Localized;
  description: Localized;
}

export interface PathDef {
  id: string;
  slug: string;
  title: Localized;
  tagline: Localized;
  description: Localized;
  /** Professional behaviour path, or the language layer. */
  track: "professional" | "legal_english";
  audience: ("student" | "trainee" | "junior" | "experienced" | "manager")[];
  estimatedWeeks: number;
  domainIds: string[];
  chapters: ChapterDef[];
  units: UnitDef[];
  /** A professional path can declare a paired language path for bilingual practice. */
  pairedPathId?: string;
}

// ---------------------------------------------------------------------------
// Diagnostic
// ---------------------------------------------------------------------------

export interface DiagnosticItem {
  id: string;
  activity: Activity;
  /** Which skills this item gives signal on, and how strongly. */
  signals: { skillId: string; weight: number }[];
}

export interface DiagnosticDef {
  id: string;
  title: Localized;
  intro: Localized;
  items: DiagnosticItem[];
}

// ---------------------------------------------------------------------------
// Content bundle — what `scripts/seed.ts` consumes
// ---------------------------------------------------------------------------

export interface ContentBundle {
  sources: SourceRecord[];
  domains: DomainDef[];
  skills: SkillDef[];
  rubrics: RubricDef[];
  scenarios: ScenarioDef[];
  paths: PathDef[];
  diagnostics: DiagnosticDef[];
}
