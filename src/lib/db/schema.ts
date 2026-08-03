/**
 * AIJUR data model.
 *
 * Two halves, deliberately shaped differently:
 *
 *  1. **Content** — authored, versioned, reviewed, published. Stored as rows
 *     that carry a typed JSON `data` payload plus the columns we actually
 *     filter on (skill, path, status, version). This is what makes Content
 *     Studio's draft → review → publish → rollback cycle cheap, and what lets
 *     a new activity type ship without a migration.
 *
 *  2. **Learner evidence** — attempts, evaluations, mastery, review schedule.
 *     Fully relational, because every one of these is queried, aggregated and
 *     audited. The spine is:
 *         Skill → Practice → Evidence → Evaluation → Mastery → Review
 *
 * Dialect is SQLite/libSQL. Timestamps are epoch milliseconds (integer) so the
 * schema ports to Postgres by changing column helpers, not semantics.
 */

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  primaryKey,
  real,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

const now = sql`(unixepoch() * 1000)`;

const createdAt = () => integer("created_at").notNull().default(now);
const updatedAt = () => integer("updated_at").notNull().default(now);

// ---------------------------------------------------------------------------
// Tenancy, identity, access
// ---------------------------------------------------------------------------

export const organizations = sqliteTable("organizations", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  /** law_firm | university | bar_association | training_institute | in_house | individual */
  kind: text("kind").notNull().default("law_firm"),
  country: text("country"),
  /** Brand overrides: { logoUrl, accent } — never overrides accessibility tokens. */
  branding: text("branding", { mode: "json" }).$type<Record<string, string>>(),
  /** What managers may see of a learner's work. Surfaced to learners verbatim. */
  privacyPolicy: text("privacy_policy", { mode: "json" }).$type<{
    managersSeeScores: boolean;
    managersSeeTranscripts: boolean;
    retentionDays: number;
  }>(),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

export const users = sqliteTable(
  "users",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    /** scrypt: `scrypt$N$r$p$saltB64$hashB64`. Never a plain digest. */
    passwordHash: text("password_hash").notNull(),
    name: text("name").notNull(),
    locale: text("locale").notNull().default("ar").$type<"ar" | "en">(),
    /** Platform-level role. Org-level roles live on memberships. */
    systemRole: text("system_role").notNull().default("learner").$type<
      "learner" | "author" | "reviewer" | "admin"
    >(),
    emailVerifiedAt: integer("email_verified_at"),
    mfaEnabled: integer("mfa_enabled", { mode: "boolean" }).notNull().default(false),
    lastSeenAt: integer("last_seen_at"),
    deletedAt: integer("deleted_at"),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("users_email_idx").on(t.email)],
);

export const memberships = sqliteTable(
  "memberships",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    role: text("role").notNull().default("member").$type<
      "owner" | "admin" | "manager" | "author" | "member"
    >(),
    teamId: text("team_id"),
    /** Competency profile expected of this person's role, if the org set one. */
    competencyProfileId: text("competency_profile_id"),
    createdAt: createdAt(),
  },
  (t) => [
    uniqueIndex("memberships_user_org_idx").on(t.userId, t.organizationId),
    index("memberships_org_idx").on(t.organizationId),
  ],
);

export const teams = sqliteTable("teams", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  createdAt: createdAt(),
});

export const sessions = sqliteTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    /** Active tenant for this session. Null = personal context. */
    organizationId: text("organization_id").references(() => organizations.id, {
      onDelete: "cascade",
    }),
    expiresAt: integer("expires_at").notNull(),
    userAgent: text("user_agent"),
    revokedAt: integer("revoked_at"),
    createdAt: createdAt(),
  },
  (t) => [index("sessions_user_idx").on(t.userId)],
);

export const profiles = sqliteTable("profiles", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  country: text("country"),
  /** student | trainee | junior | experienced | manager */
  careerStage: text("career_stage").notNull().default("student"),
  yearsExperience: integer("years_experience").notNull().default(0),
  goals: text("goals", { mode: "json" }).$type<string[]>().notNull().default(sql`'[]'`),
  focusSkillIds: text("focus_skill_ids", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default(sql`'[]'`),
  englishSelfRating: integer("english_self_rating").notNull().default(2),
  weeklyMinutesGoal: integer("weekly_minutes_goal").notNull().default(60),
  practicePreference: text("practice_preference").notNull().default("text").$type<
    "text" | "voice" | "both"
  >(),
  /** { reducedMotion, largeText, noAudio, noDrag, captions } */
  accessibility: text("accessibility", { mode: "json" })
    .$type<Record<string, boolean>>()
    .notNull()
    .default(sql`'{}'`),
  onboardingCompletedAt: integer("onboarding_completed_at"),
  diagnosticCompletedAt: integer("diagnostic_completed_at"),
  /** Explicit, revocable consent for sending learner text to an AI provider. */
  aiProcessingConsentAt: integer("ai_processing_consent_at"),
  updatedAt: updatedAt(),
});

// ---------------------------------------------------------------------------
// Content graph (authored, versioned, reviewed)
// ---------------------------------------------------------------------------

/** Every content row shares this lifecycle. Nothing reaches a learner at `draft`. */
export type ContentStatus =
  | "draft"
  | "in_review"
  | "approved"
  | "published"
  | "archived";

export const sources = sqliteTable("sources", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  year: integer("year"),
  language: text("language").notNull(),
  publisher: text("publisher"),
  kind: text("kind").notNull(),
  usageRights: text("usage_rights").notNull(),
  analysisStatus: text("analysis_status").notNull(),
  reviewStatus: text("review_status").notNull(),
  domains: text("domains", { mode: "json" }).$type<string[]>().notNull(),
  sections: text("sections", { mode: "json" }).$type<string[]>(),
  notes: text("notes").notNull(),
  createdAt: createdAt(),
});

export const domains = sqliteTable("domains", {
  id: text("id").primaryKey(),
  order: integer("order").notNull(),
  icon: text("icon").notNull(),
  data: text("data", { mode: "json" }).notNull(),
});

export const skills = sqliteTable(
  "skills",
  {
    id: text("id").primaryKey(),
    domainId: text("domain_id").notNull().references(() => domains.id),
    languageTrack: integer("language_track", { mode: "boolean" }).notNull().default(false),
    confidence: real("confidence").notNull().default(0.7),
    status: text("status").notNull().default("published").$type<ContentStatus>(),
    version: text("version").notNull().default("1.0.0"),
    /** Full SkillDef, including all seven level definitions. */
    data: text("data", { mode: "json" }).notNull(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index("skills_domain_idx").on(t.domainId)],
);

export const rubrics = sqliteTable("rubrics", {
  id: text("id").primaryKey(),
  version: text("version").notNull(),
  status: text("status").notNull().default("published").$type<ContentStatus>(),
  data: text("data", { mode: "json" }).notNull(),
  createdAt: createdAt(),
});

export const scenarios = sqliteTable(
  "scenarios",
  {
    id: text("id").primaryKey(),
    rubricId: text("rubric_id").notNull().references(() => rubrics.id),
    stage: integer("stage").notNull(),
    languageMode: text("language_mode").notNull(),
    status: text("status").notNull().default("published").$type<ContentStatus>(),
    version: text("version").notNull().default("1.0.0"),
    data: text("data", { mode: "json" }).notNull(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [index("scenarios_stage_idx").on(t.stage)],
);

export const paths = sqliteTable("paths", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  track: text("track").notNull(),
  status: text("status").notNull().default("published").$type<ContentStatus>(),
  version: text("version").notNull().default("1.0.0"),
  pairedPathId: text("paired_path_id"),
  data: text("data", { mode: "json" }).notNull(),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

export const chapters = sqliteTable(
  "chapters",
  {
    id: text("id").primaryKey(),
    pathId: text("path_id").notNull().references(() => paths.id, { onDelete: "cascade" }),
    order: integer("order").notNull(),
    data: text("data", { mode: "json" }).notNull(),
  },
  (t) => [index("chapters_path_idx").on(t.pathId)],
);

export const units = sqliteTable(
  "units",
  {
    id: text("id").primaryKey(),
    pathId: text("path_id").notNull().references(() => paths.id, { onDelete: "cascade" }),
    chapterId: text("chapter_id").notNull().references(() => chapters.id, { onDelete: "cascade" }),
    order: integer("order").notNull(),
    primarySkillId: text("primary_skill_id").notNull(),
    stage: integer("stage").notNull(),
    targetLevel: integer("target_level").notNull(),
    estimatedMinutes: integer("estimated_minutes").notNull(),
    status: text("status").notNull().default("published").$type<ContentStatus>(),
    version: text("version").notNull().default("1.0.0"),
    /** UnitDef minus activities — steps, summary card, metadata. */
    data: text("data", { mode: "json" }).notNull(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
  },
  (t) => [
    index("units_path_order_idx").on(t.pathId, t.order),
    index("units_skill_idx").on(t.primarySkillId),
  ],
);

export const activities = sqliteTable(
  "activities",
  {
    id: text("id").primaryKey(),
    unitId: text("unit_id").references(() => units.id, { onDelete: "cascade" }),
    /** Set when the activity belongs to a diagnostic rather than a unit. */
    diagnosticId: text("diagnostic_id"),
    kind: text("kind").notNull(),
    skillId: text("skill_id").notNull(),
    stage: integer("stage").notNull(),
    rubricId: text("rubric_id"),
    status: text("status").notNull().default("published").$type<ContentStatus>(),
    data: text("data", { mode: "json" }).notNull(),
  },
  (t) => [
    index("activities_unit_idx").on(t.unitId),
    index("activities_skill_idx").on(t.skillId),
    index("activities_kind_idx").on(t.kind),
  ],
);

export const diagnostics = sqliteTable("diagnostics", {
  id: text("id").primaryKey(),
  status: text("status").notNull().default("published").$type<ContentStatus>(),
  data: text("data", { mode: "json" }).notNull(),
});

/** Immutable publish history. Rollback = re-publishing an earlier snapshot. */
export const contentVersions = sqliteTable(
  "content_versions",
  {
    id: text("id").primaryKey(),
    entityType: text("entity_type").notNull(),
    entityId: text("entity_id").notNull(),
    version: text("version").notNull(),
    snapshot: text("snapshot", { mode: "json" }).notNull(),
    publishedBy: text("published_by").references(() => users.id),
    publishedAt: integer("published_at"),
    createdAt: createdAt(),
  },
  (t) => [index("content_versions_entity_idx").on(t.entityType, t.entityId)],
);

/** The review gates content must clear. Publication is blocked until all pass. */
export const contentReviews = sqliteTable(
  "content_reviews",
  {
    id: text("id").primaryKey(),
    entityType: text("entity_type").notNull(),
    entityId: text("entity_id").notNull(),
    /** sme | learning_design | legal_english | language | accessibility | qa */
    gate: text("gate").notNull(),
    status: text("status").notNull().default("pending").$type<
      "pending" | "approved" | "changes_requested"
    >(),
    reviewerId: text("reviewer_id").references(() => users.id),
    notes: text("notes"),
    decidedAt: integer("decided_at"),
    createdAt: createdAt(),
  },
  (t) => [index("content_reviews_entity_idx").on(t.entityType, t.entityId)],
);

export const translations = sqliteTable(
  "translations",
  {
    id: text("id").primaryKey(),
    entityType: text("entity_type").notNull(),
    entityId: text("entity_id").notNull(),
    locale: text("locale").notNull(),
    status: text("status").notNull().default("draft"),
    data: text("data", { mode: "json" }).notNull(),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("translations_entity_locale_idx").on(t.entityType, t.entityId, t.locale)],
);

// ---------------------------------------------------------------------------
// Legal English content
// ---------------------------------------------------------------------------

export const legalEnglishTerms = sqliteTable(
  "legal_english_terms",
  {
    id: text("id").primaryKey(),
    term: text("term").notNull(),
    ipa: text("ipa"),
    /** formal | neutral | plain */
    register: text("register").notNull().default("neutral"),
    meaningAr: text("meaning_ar").notNull(),
    meaningEn: text("meaning_en").notNull(),
    exampleEn: text("example_en"),
    skillIds: text("skill_ids", { mode: "json" }).$type<string[]>().notNull(),
    unitId: text("unit_id").references(() => units.id, { onDelete: "cascade" }),
  },
  (t) => [uniqueIndex("le_terms_term_idx").on(t.term, t.unitId)],
);

// ---------------------------------------------------------------------------
// Learner evidence: practice → evidence → evaluation → mastery → review
// ---------------------------------------------------------------------------

export const pathEnrollments = sqliteTable(
  "path_enrollments",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    pathId: text("path_id").notNull().references(() => paths.id, { onDelete: "cascade" }),
    source: text("source").notNull().default("self").$type<"self" | "recommended" | "assigned">(),
    startedAt: createdAt(),
    completedAt: integer("completed_at"),
  },
  (t) => [uniqueIndex("enrollments_user_path_idx").on(t.userId, t.pathId)],
);

export const unitProgress = sqliteTable(
  "unit_progress",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    unitId: text("unit_id").notNull().references(() => units.id, { onDelete: "cascade" }),
    state: text("state").notNull().default("in_progress").$type<
      "in_progress" | "completed" | "needs_review"
    >(),
    /** Index into UnitDef.steps — this is what "resume where you left off" reads. */
    stepIndex: integer("step_index").notNull().default(0),
    score: real("score"),
    maxScore: real("max_score"),
    passed: integer("passed", { mode: "boolean" }),
    attemptNumber: integer("attempt_number").notNull().default(1),
    startedAt: createdAt(),
    lastActiveAt: updatedAt(),
    completedAt: integer("completed_at"),
  },
  (t) => [
    uniqueIndex("unit_progress_user_unit_idx").on(t.userId, t.unitId),
    index("unit_progress_user_idx").on(t.userId),
  ],
);

export const attempts = sqliteTable(
  "attempts",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    activityId: text("activity_id").notNull(),
    unitId: text("unit_id"),
    diagnosticId: text("diagnostic_id"),
    skillId: text("skill_id").notNull(),
    attemptNumber: integer("attempt_number").notNull().default(1),
    /** The learner's raw response, shape depends on activity kind. */
    response: text("response", { mode: "json" }).notNull(),
    score: real("score").notNull().default(0),
    maxScore: real("max_score").notNull().default(1),
    passed: integer("passed", { mode: "boolean" }).notNull().default(false),
    /** deterministic | ai_rubric | self_report */
    gradedBy: text("graded_by").notNull().default("deterministic"),
    durationMs: integer("duration_ms"),
    createdAt: createdAt(),
  },
  (t) => [
    index("attempts_user_skill_idx").on(t.userId, t.skillId),
    index("attempts_user_activity_idx").on(t.userId, t.activityId),
    index("attempts_unit_idx").on(t.unitId),
  ],
);

export const simulationSessions = sqliteTable(
  "simulation_sessions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    scenarioId: text("scenario_id").notNull().references(() => scenarios.id),
    unitId: text("unit_id"),
    locale: text("locale").notNull().default("ar"),
    modality: text("modality").notNull().default("text").$type<"text" | "voice">(),
    state: text("state").notNull().default("active").$type<
      "active" | "completed" | "abandoned" | "evaluating"
    >(),
    turnCount: integer("turn_count").notNull().default(0),
    /** Which authored decision points have fired. */
    reachedDecisionPoints: text("reached_decision_points", { mode: "json" })
      .$type<string[]>()
      .notNull()
      .default(sql`'[]'`),
    /** Hidden information the learner has actually surfaced. */
    revealedFacts: text("revealed_facts", { mode: "json" })
      .$type<string[]>()
      .notNull()
      .default(sql`'[]'`),
    attemptNumber: integer("attempt_number").notNull().default(1),
    startedAt: createdAt(),
    lastActiveAt: updatedAt(),
    completedAt: integer("completed_at"),
  },
  (t) => [index("sim_sessions_user_idx").on(t.userId, t.scenarioId)],
);

export const simulationMessages = sqliteTable(
  "simulation_messages",
  {
    id: text("id").primaryKey(),
    sessionId: text("session_id")
      .notNull()
      .references(() => simulationSessions.id, { onDelete: "cascade" }),
    turn: integer("turn").notNull(),
    role: text("role").notNull().$type<"learner" | "character" | "system">(),
    content: text("content").notNull(),
    /** Set on character turns: which AIModelRun produced this. */
    modelRunId: text("model_run_id"),
    createdAt: createdAt(),
  },
  (t) => [index("sim_messages_session_idx").on(t.sessionId, t.turn)],
);

/**
 * A rubric-scored judgement on a piece of learner work. Every criterion score
 * carries quoted evidence from the learner's own text — an evaluation without
 * evidence is rejected before it is written.
 */
export const evaluations = sqliteTable(
  "evaluations",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    /** attempt | simulation_session */
    subjectType: text("subject_type").notNull(),
    subjectId: text("subject_id").notNull(),
    rubricId: text("rubric_id").notNull(),
    rubricVersion: text("rubric_version").notNull(),
    overallScore: real("overall_score").notNull(),
    maxScore: real("max_score").notNull().default(3),
    passed: integer("passed", { mode: "boolean" }).notNull(),
    /** [{ criterionId, score, evidence, comment }] */
    criteria: text("criteria", { mode: "json" }).notNull(),
    strengths: text("strengths", { mode: "json" }).$type<string[]>().notNull(),
    missedOpportunities: text("missed_opportunities", { mode: "json" }).$type<string[]>().notNull(),
    criticalMistakes: text("critical_mistakes", { mode: "json" }).$type<string[]>().notNull(),
    priorityImprovement: text("priority_improvement").notNull(),
    betterAlternative: text("better_alternative"),
    recommendedPractice: text("recommended_practice", { mode: "json" }).$type<string[]>(),
    confidence: real("confidence").notNull().default(0.6),
    modelRunId: text("model_run_id"),
    /** Low-confidence or capped evaluations queue for a human. */
    humanReviewStatus: text("human_review_status").notNull().default("not_required").$type<
      "not_required" | "queued" | "in_review" | "upheld" | "overturned"
    >(),
    createdAt: createdAt(),
  },
  (t) => [
    index("evaluations_user_idx").on(t.userId),
    index("evaluations_subject_idx").on(t.subjectType, t.subjectId),
    index("evaluations_review_idx").on(t.humanReviewStatus),
  ],
);

export const masteryRecords = sqliteTable(
  "mastery_records",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    skillId: text("skill_id").notNull(),
    level: integer("level").notNull().default(0),
    /** 0..1 — how much we trust the level, given evidence count and recency. */
    confidence: real("confidence").notNull().default(0),
    evidenceCount: integer("evidence_count").notNull().default(0),
    /** Rolling mean of normalised scores, 0..1. */
    rollingScore: real("rolling_score").notNull().default(0),
    /** Consecutive passes at the current level. Two are required to advance. */
    consecutivePasses: integer("consecutive_passes").notNull().default(0),
    peakLevel: integer("peak_level").notNull().default(0),
    lastAssessedAt: integer("last_assessed_at"),
    updatedAt: updatedAt(),
  },
  (t) => [uniqueIndex("mastery_user_skill_idx").on(t.userId, t.skillId)],
);

/** Individual pieces of evidence behind a mastery level — the audit trail. */
export const evidence = sqliteTable(
  "evidence",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    skillId: text("skill_id").notNull(),
    /** attempt | evaluation | simulation | review */
    kind: text("kind").notNull(),
    refId: text("ref_id").notNull(),
    level: integer("level").notNull(),
    score: real("score").notNull(),
    /** A short quote or observation supporting the judgement. */
    note: text("note"),
    createdAt: createdAt(),
  },
  (t) => [index("evidence_user_skill_idx").on(t.userId, t.skillId)],
);

/**
 * Spaced, error-driven review. `reason` is why this item is due, which the UI
 * shows the learner — review should never feel arbitrary.
 */
export const reviewSchedule = sqliteTable(
  "review_schedule",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    skillId: text("skill_id").notNull(),
    /** Optional concrete item to re-present. */
    unitId: text("unit_id"),
    activityId: text("activity_id"),
    termId: text("term_id"),
    dueAt: integer("due_at").notNull(),
    intervalDays: real("interval_days").notNull().default(1),
    ease: real("ease").notNull().default(2.3),
    lapses: integer("lapses").notNull().default(0),
    reason: text("reason").notNull().default("spaced").$type<
      "spaced" | "error" | "interleave" | "decay" | "new_context"
    >(),
    lastReviewedAt: integer("last_reviewed_at"),
    createdAt: createdAt(),
  },
  (t) => [
    index("review_due_idx").on(t.userId, t.dueAt),
    index("review_user_skill_idx").on(t.userId, t.skillId),
  ],
);

export const pronunciationAttempts = sqliteTable("pronunciation_attempts", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  termId: text("term_id"),
  target: text("target").notNull(),
  /** Intelligibility only, 0..1. Accent is never a factor and is never stored. */
  intelligibility: real("intelligibility"),
  selfReported: integer("self_reported", { mode: "boolean" }).notNull().default(true),
  createdAt: createdAt(),
});

export const vocabularyReviews = sqliteTable(
  "vocabulary_reviews",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    termId: text("term_id").notNull(),
    strength: real("strength").notNull().default(0),
    dueAt: integer("due_at").notNull(),
    lastReviewedAt: integer("last_reviewed_at"),
  },
  (t) => [uniqueIndex("vocab_user_term_idx").on(t.userId, t.termId)],
);

export const savedSummaries = sqliteTable(
  "saved_summaries",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    summaryCardId: text("summary_card_id").notNull(),
    unitId: text("unit_id").notNull(),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("saved_summaries_idx").on(t.userId, t.summaryCardId)],
);

// ---------------------------------------------------------------------------
// Organisation programmes
// ---------------------------------------------------------------------------

export const assignments = sqliteTable(
  "assignments",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    assignedById: text("assigned_by_id").notNull().references(() => users.id),
    /** path | unit | scenario */
    targetType: text("target_type").notNull(),
    targetId: text("target_id").notNull(),
    teamId: text("team_id"),
    userId: text("user_id"),
    dueAt: integer("due_at"),
    createdAt: createdAt(),
  },
  (t) => [index("assignments_org_idx").on(t.organizationId)],
);

export const certificates = sqliteTable("certificates", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  organizationId: text("organization_id").references(() => organizations.id),
  pathId: text("path_id").notNull(),
  /** Snapshot of the mastery evidence at issue time — a certificate must not drift. */
  evidenceSnapshot: text("evidence_snapshot", { mode: "json" }).notNull(),
  serial: text("serial").notNull().unique(),
  issuedAt: createdAt(),
});

export const achievements = sqliteTable(
  "achievements",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    kind: text("kind").notNull(),
    label: text("label").notNull(),
    meta: text("meta", { mode: "json" }),
    earnedAt: createdAt(),
  },
  (t) => [index("achievements_user_idx").on(t.userId)],
);

export const notifications = sqliteTable(
  "notifications",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    kind: text("kind").notNull(),
    titleKey: text("title_key").notNull(),
    params: text("params", { mode: "json" }),
    readAt: integer("read_at"),
    createdAt: createdAt(),
  },
  (t) => [index("notifications_user_idx").on(t.userId, t.readAt)],
);

export const subscriptions = sqliteTable("subscriptions", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  organizationId: text("organization_id").references(() => organizations.id, {
    onDelete: "cascade",
  }),
  plan: text("plan").notNull().default("free"),
  seats: integer("seats").notNull().default(1),
  status: text("status").notNull().default("active"),
  currentPeriodEnd: integer("current_period_end"),
  createdAt: createdAt(),
});

// ---------------------------------------------------------------------------
// AI operations, safety, audit
// ---------------------------------------------------------------------------

/**
 * One row per model call. This is the evaluation audit trail: without the
 * prompt version, rubric version and model recorded here, a disputed score
 * cannot be reproduced or defended.
 */
export const aiModelRuns = sqliteTable(
  "ai_model_runs",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").references(() => users.id, { onDelete: "set null" }),
    organizationId: text("organization_id"),
    /** simulation | evaluation | coaching | language | recommendation | safety */
    agent: text("agent").notNull(),
    provider: text("provider").notNull(),
    model: text("model").notNull(),
    promptVersion: text("prompt_version").notNull(),
    rubricVersion: text("rubric_version"),
    /** SHA-256 of the input. Lets us cache and detect replay without storing the prompt twice. */
    inputHash: text("input_hash").notNull(),
    outputJson: text("output_json", { mode: "json" }),
    inputTokens: integer("input_tokens"),
    outputTokens: integer("output_tokens"),
    costUsd: real("cost_usd"),
    latencyMs: integer("latency_ms"),
    confidence: real("confidence"),
    safetyResult: text("safety_result").notNull().default("pass"),
    retryCount: integer("retry_count").notNull().default(0),
    error: text("error"),
    createdAt: createdAt(),
  },
  (t) => [
    index("ai_runs_user_idx").on(t.userId),
    index("ai_runs_agent_idx").on(t.agent),
    index("ai_runs_hash_idx").on(t.inputHash),
  ],
);

export const humanReviews = sqliteTable(
  "human_reviews",
  {
    id: text("id").primaryKey(),
    /** evaluation | content | ingestion_suggestion */
    subjectType: text("subject_type").notNull(),
    subjectId: text("subject_id").notNull(),
    reviewerId: text("reviewer_id").references(() => users.id),
    reason: text("reason").notNull(),
    decision: text("decision").$type<"upheld" | "overturned" | "edited" | "rejected">(),
    notes: text("notes"),
    decidedAt: integer("decided_at"),
    createdAt: createdAt(),
  },
  (t) => [index("human_reviews_open_idx").on(t.subjectType, t.decidedAt)],
);

/** Assisted knowledge ingestion: every AI suggestion waits here for a human. */
export const ingestionSuggestions = sqliteTable(
  "ingestion_suggestions",
  {
    id: text("id").primaryKey(),
    sourceId: text("source_id").notNull().references(() => sources.id, { onDelete: "cascade" }),
    sourceSection: text("source_section"),
    /** domain | skill | behavior | objective | rubric | activity | scenario | term */
    suggestionType: text("suggestion_type").notNull(),
    payload: text("payload", { mode: "json" }).notNull(),
    rationale: text("rationale").notNull(),
    /** Closest existing entity, so the reviewer can merge instead of duplicating. */
    similarEntityId: text("similar_entity_id"),
    similarity: real("similarity"),
    confidence: real("confidence").notNull(),
    status: text("status").notNull().default("pending").$type<
      "pending" | "accepted" | "edited" | "merged" | "rejected"
    >(),
    decidedById: text("decided_by_id").references(() => users.id),
    decidedAt: integer("decided_at"),
    createdAt: createdAt(),
  },
  (t) => [index("ingestion_status_idx").on(t.status)],
);

export const analyticsEvents = sqliteTable(
  "analytics_events",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
    organizationId: text("organization_id"),
    name: text("name").notNull(),
    props: text("props", { mode: "json" }),
    createdAt: createdAt(),
  },
  (t) => [index("events_name_idx").on(t.name), index("events_user_idx").on(t.userId)],
);

export const auditLog = sqliteTable(
  "audit_log",
  {
    id: text("id").primaryKey(),
    actorId: text("actor_id").references(() => users.id),
    organizationId: text("organization_id"),
    action: text("action").notNull(),
    entityType: text("entity_type").notNull(),
    entityId: text("entity_id").notNull(),
    meta: text("meta", { mode: "json" }),
    ip: text("ip"),
    createdAt: createdAt(),
  },
  (t) => [index("audit_entity_idx").on(t.entityType, t.entityId)],
);

export const featureFlags = sqliteTable("feature_flags", {
  key: text("key").primaryKey(),
  enabled: integer("enabled", { mode: "boolean" }).notNull().default(false),
  /** Optional per-org override map. */
  overrides: text("overrides", { mode: "json" }).$type<Record<string, boolean>>(),
  description: text("description").notNull().default(""),
  updatedAt: updatedAt(),
});

export const rateLimits = sqliteTable(
  "rate_limits",
  {
    key: text("key").notNull(),
    windowStart: integer("window_start").notNull(),
    count: integer("count").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.key, t.windowStart] })],
);
