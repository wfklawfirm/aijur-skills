# Data Model

This document is the reference for `src/lib/db/schema.ts` — every table AIJUR
persists, grouped by purpose, plus the two data-layer stories worth knowing
before you touch it: how multi-tenancy is (and isn't) modeled at the schema
level, and the composite-key bug in `mastery_records` that shaped how mastery
writes are done today. Enforcement of tenant isolation is covered in
`SECURITY.md`; the content authoring/review workflow is covered in
`CONTENT_INGESTION.md`; the request/action flow around this schema is covered
in `PRODUCT_ARCHITECTURE.md`. This doc stays at the level of tables and
columns.

Schema file: `src/lib/db/schema.ts` (single file, 44 tables, ~850 lines).

## 1. Database and ORM

- **Local dev**: libSQL/SQLite via `@libsql/client`, file-backed at
  `file:./data/aijur.db` by default.
- **Production**: the same libSQL client pointed at a `libsql://<host>` URL —
  Turso, or self-hosted `sqld` — with an auth token. No code changes; see
  §7.
- **ORM**: Drizzle ORM (`drizzle-orm/libsql`), schema-first, defined entirely
  in `src/lib/db/schema.ts`.
- **Timestamps** are epoch milliseconds stored as `integer`, not SQLite
  `TEXT` datetimes. The schema's own top-of-file comment explains why:

  > "Dialect is SQLite/libSQL. Timestamps are epoch milliseconds (integer) so
  > the schema ports to Postgres by changing column helpers, not semantics."

- **Postgres migration path**: `src/lib/db/index.ts` states the same intent —
  "The Postgres migration path is documented in `docs/DATA_MODEL.md`; it is a
  dialect swap in `schema.ts`, not a rewrite" — but neither file, nor
  `drizzle.config.ts`, documents concrete migration steps, a target Postgres
  column-helper mapping, or a cutover plan. Beyond the "epoch-ms timestamps
  + dialect swap" intent quoted above, **the Postgres migration path is not
  yet documented**; do not treat this note as a completed plan.
- **`drizzle.config.ts`** sets `dialect: "turso"`, with `schema:
  "./src/lib/db/schema.ts"` and migrations output to `./drizzle`. Connection
  info (`url`, `authToken`) is read from `DATABASE_URL` /
  `DATABASE_AUTH_TOKEN`, falling back to the same local file default used by
  `src/lib/db/index.ts`.

### Client singleton (`src/lib/db/index.ts`)

```ts
const url = process.env.DATABASE_URL ?? "file:./data/aijur.db";
const authToken = process.env.DATABASE_AUTH_TOKEN || undefined;

function buildDb() {
  const client = createClient({ url, authToken });
  return drizzle(client, { schema });
}

export const db = globalThis.__aijurDb ?? buildDb();
if (process.env.NODE_ENV !== "production") globalThis.__aijurDb = db;
```

- One libSQL client per process, built by `buildDb()` and exported as `db`.
- **Dev-mode global singleton (`globalThis.__aijurDb`)**: outside production,
  the built client is stashed on `globalThis` and reused on next import. This
  exists because Next.js dev-mode hot module reload re-executes module bodies
  on every file save; without the `globalThis` cache, each HMR pass would
  call `createClient()` again and leak a new libSQL connection instead of
  reusing the existing one. In production the module is only evaluated once
  per process, so the guard is skipped and `buildDb()` runs normally.
- `db` is exported together with `schema` and the `Db` type
  (`typeof db`) for use in Server Actions and Server Components.

## 2. Schema overview by category

All 44 tables, grouped as they actually appear in `schema.ts` (the file's own
section comments track closely to this grouping).

### 2.1 Tenancy, identity, access

| Table | Purpose |
|---|---|
| `organizations` | A tenant: law firm, university, bar association, training institute, in-house team, or individual (`kind`); carries `branding` and a learner-facing `privacyPolicy` (manager visibility, retention). |
| `users` | Platform account: email/password (scrypt hash), locale, platform-wide `systemRole` (`learner`\|`author`\|`reviewer`\|`admin`), MFA flag, soft-delete (`deletedAt`). |
| `memberships` | Join table: a user's role (`owner`\|`admin`\|`manager`\|`author`\|`member`) inside one organization; unique on `(userId, organizationId)`. |
| `teams` | A named group within an organization (for team-level assignment). |
| `sessions` | An active login: `userId`, optional `organizationId` as "active tenant for this session" (null = personal context), expiry, revocation. |
| `profiles` | One-to-one with `users`: career stage, experience, goals, focus skills, self-rated English, weekly-minutes goal, practice-mode preference, accessibility prefs, onboarding/diagnostic/AI-consent timestamps. |

### 2.2 Content graph (authored, versioned, reviewed)

Every row here carries a `ContentStatus` lifecycle
(`draft → in_review → approved → published → archived`) and most carry a
typed JSON `data` column holding the full authored payload (see §5).

| Table | Purpose |
|---|---|
| `sources` | A reference work (statute, textbook, guideline) used to author content; tracks usage rights, analysis/review status, and which `domains` it covers. |
| `domains` | Top-level competency domain (e.g. "client communication"); ordered, iconed, JSON `data`. |
| `skills` | A trainable skill under a domain; `confidence`, `status`, `version`, and a JSON `data` payload holding the full `SkillDef` including all seven level definitions. |
| `rubrics` | A scoring rubric (`RubricDef`) referenced by scenarios/activities; versioned. |
| `scenarios` | A branching simulation scenario (`ScenarioDef`): stage, language mode, linked `rubricId`. |
| `paths` | A learning path (`PathDef`): slug, track, optional `pairedPathId` (e.g. an AR/EN pair). |
| `chapters` | An ordered grouping of units within a path. |
| `units` | A learning unit (`UnitDef` minus its activities): path/chapter placement, order, `primarySkillId`, stage, `targetLevel`, estimated minutes. |
| `activities` | A single practice item (`Activity`): belongs to either a `unitId` or a `diagnosticId`, tagged with `kind`, `skillId`, `stage`, optional `rubricId`. |
| `diagnostics` | A diagnostic assessment definition (`DiagnosticDef`) — its constituent activities live in `activities` with `diagnosticId` set. |
| `contentVersions` | Immutable snapshot of a published entity — "rollback = re-publishing an earlier snapshot." Keyed by `(entityType, entityId)`. |
| `contentReviews` | One row per review gate (`sme`\|`learning_design`\|`legal_english`\|`language`\|`accessibility`\|`qa`) an entity must clear before publication. |
| `translations` | Locale-specific override payload for a content entity; unique on `(entityType, entityId, locale)`. |

### 2.3 Legal English content

| Table | Purpose |
|---|---|
| `legalEnglishTerms` | A term/phrase with IPA, register, AR/EN meanings, example usage, linked `skillIds` and optional `unitId`; unique on `(term, unitId)`. |

### 2.4 Learner evidence (practice → evidence → evaluation → mastery → review)

This is the schema's own stated spine: *Skill → Practice → Evidence →
Evaluation → Mastery → Review.*

| Table | Purpose |
|---|---|
| `pathEnrollments` | A learner's enrollment in a path (`self`\|`recommended`\|`assigned`); unique on `(userId, pathId)`. |
| `unitProgress` | Per-user, per-unit progress: state, resume `stepIndex`, score/maxScore, pass flag, attempt number; unique on `(userId, unitId)`. |
| `attempts` | One learner response to one activity: raw `response` JSON, score, pass flag, `gradedBy` (`deterministic`\|`ai_rubric`\|`self_report`), duration. |
| `simulationSessions` | A run through a branching scenario: modality (text/voice), state, turn count, reached decision points, revealed facts. |
| `simulationMessages` | One turn of a simulation transcript (`learner`\|`character`\|`system`); links to the `aiModelRuns` row that produced a character turn via `modelRunId`. |
| `evaluations` | A rubric-scored judgement on an attempt or simulation session: per-criterion `criteria` JSON (each with quoted evidence), strengths/mistakes, `humanReviewStatus`. |
| `masteryRecords` | Current mastery state per `(userId, skillId)` — level, confidence, evidence count, rolling score, consecutive passes, peak level. **See §4 for the composite-unique-index detail.** |
| `evidence` | The audit trail behind a mastery level: one row per contributing attempt/evaluation/simulation/review, with a quoted `note`. |
| `reviewSchedule` | Spaced-repetition due date per `(userId, skillId)`: interval, ease, lapses, and a learner-facing `reason` (`spaced`\|`error`\|`interleave`\|`decay`\|`new_context`). |
| `pronunciationAttempts` | A pronunciation practice attempt: target phrase, `intelligibility` score only (never accent). |
| `vocabularyReviews` | Spaced-repetition state for a vocabulary term, separate from skill-level review; unique on `(userId, termId)`. |
| `savedSummaries` | A learner's bookmarked unit summary card; unique on `(userId, summaryCardId)`. |

### 2.5 Organization programmes

| Table | Purpose |
|---|---|
| `assignments` | An org admin/manager assigning a `path`\|`unit`\|`scenario` to a team or user, with a due date. |
| `certificates` | An issued completion certificate; carries an immutable `evidenceSnapshot` JSON ("a certificate must not drift") and a unique `serial`. |
| `achievements` | An earned milestone/badge for a user. |
| `notifications` | An in-app notification: `kind`, i18n `titleKey`, `params`, read state. |
| `subscriptions` | Billing state for a user or an organization: plan, seat count, status, period end. |

### 2.6 AI operations, safety, audit

| Table | Purpose |
|---|---|
| `aiModelRuns` | One row per model call — the evaluation audit trail. Agent type, provider, model, `promptVersion`, `rubricVersion`, `inputHash` (SHA-256, for caching/replay detection), token counts, cost, latency, `safetyResult`, retries, error. |
| `humanReviews` | A human's decision on a queued evaluation/content/ingestion item: reason, decision (`upheld`\|`overturned`\|`edited`\|`rejected`), notes. |
| `ingestionSuggestions` | An AI-generated suggestion for new content (domain/skill/behavior/objective/rubric/activity/scenario/term) derived from a `sources` row, awaiting human accept/edit/merge/reject. |
| `analyticsEvents` | Generic product analytics event: `name`, `props` JSON, optional user/org. |
| `auditLog` | Security/compliance audit trail: actor, action, `entityType`/`entityId`, `meta`, IP. |
| `featureFlags` | A boolean flag with an optional per-org `overrides` map. |
| `rateLimits` | A sliding-window rate-limit counter, keyed by `(key, windowStart)` composite primary key. |

That is all 44 tables defined in `schema.ts`.

## 3. Multi-tenancy at the data layer

AIJUR is multi-tenant (individuals, law firms, universities, bar
associations, training institutes), but the schema does **not** stamp every
table with `organizationId`. Only two families of tables carry it:

**Identity/access tables** — an explicit tenant relationship:
- `memberships.organizationId` (required, FK → `organizations.id`,
  `onDelete: "cascade"`) — the actual tenant-membership edge.
- `teams.organizationId` (required, FK, cascade) — a team belongs to exactly
  one org.
- `sessions.organizationId` (nullable, FK, cascade) — "active tenant for
  this session. Null = personal context," per the schema's own comment.

**Org-programme tables** — org-scoped business objects:
- `assignments.organizationId` (required, FK, cascade)
- `certificates.organizationId` (nullable, FK, no cascade)
- `subscriptions.organizationId` (nullable, FK, cascade)

**Denormalized, unenforced-by-FK** — carried for query/audit convenience
without a `references()` constraint:
- `aiModelRuns.organizationId`
- `analyticsEvents.organizationId`
- `auditLog.organizationId`

Everything else has **no** `organizationId` column at all:

- **Content-graph tables** (`domains`, `skills`, `rubrics`, `scenarios`,
  `paths`, `chapters`, `units`, `activities`, `diagnostics`,
  `legalEnglishTerms`, `sources`, `contentVersions`, `contentReviews`,
  `translations`) are global — content is authored once and shared across
  every tenant. There is no per-org content fork at the schema level.
- **Learner-evidence tables** (`pathEnrollments`, `unitProgress`, `attempts`,
  `simulationSessions`, `simulationMessages`, `evaluations`,
  `masteryRecords`, `evidence`, `reviewSchedule`,
  `pronunciationAttempts`, `vocabularyReviews`, `savedSummaries`,
  `achievements`, `notifications`) carry `userId` but not
  `organizationId`. A user's tenant is derived by joining through
  `memberships` (or the active-tenant `sessions.organizationId`), not
  stored redundantly on every evidence row.

**Practical implication**: because most tables are tenant-*implicit* rather
than tenant-*stamped*, tenant isolation for org-facing views (e.g. a manager
viewing their team's progress) is not something a `WHERE organizationId = ?`
clause alone can guarantee on learner-evidence tables — it has to be enforced
in the application layer, joining through `memberships`. That enforcement —
`assertTenant(user, organizationId)` in `src/lib/auth/rbac.ts` — is covered
in depth in `SECURITY.md`; this section documents only the shape the schema
gives it to work with.

## 4. The mastery composite-key detail

`masteryRecords` (`mastery_records`) has one row per skill per learner, and
its uniqueness constraint is a **composite** index, not a single-column one:

```ts
export const masteryRecords = sqliteTable(
  "mastery_records",
  { /* ...userId, skillId, level, confidence, evidenceCount, rollingScore, ... */ },
  (t) => [uniqueIndex("mastery_user_skill_idx").on(t.userId, t.skillId)],
);
```

**Learned the hard way**: an early implementation upserted into
`masteryRecords` using a single-column conflict target (e.g. just the row
`id`, or just `userId`), which does not match `mastery_user_skill_idx` and
silently produced duplicate or misapplied mastery rows instead of updating
the existing `(userId, skillId)` record. Any `insert(...).onConflictDoUpdate()`
against this table must target the exact composite key:

```ts
await db
  .insert(masteryRecords)
  .values({ /* ... */ })
  .onConflictDoUpdate({
    target: [masteryRecords.userId, masteryRecords.skillId],
    set: { /* ... */ },
  });
```

This is now centralized in a single shared implementation —
`recordEvidenceAndUpdateMastery()` in `src/lib/actions/mastery-bridge.ts` —
used by both the unit-activity submission path (`progress.ts`) and the
simulation-completion path (`simulation.ts`). The same function also writes
the corresponding `evidence` audit row and reschedules `reviewSchedule` in
the same call, so mastery, evidence, and review scheduling can never drift
between the two call sites. Do not write a second, ad hoc upsert against
`masteryRecords` elsewhere — route mastery writes through this function.

## 5. Content-as-database mapping

Content is authored as typed TypeScript in `content/` (see
`content/types.ts` for the full `ContentBundle` shape) and mirrored into the
DB by the seed script (`scripts/seed.ts`) as rows carrying a JSON `data`
payload plus the columns actually queried/filtered on. This table maps the
TypeScript authoring types to their DB counterparts; the authoring/review
workflow itself is detailed in `CONTENT_INGESTION.md`, and the overall
pattern's rationale in `PRODUCT_ARCHITECTURE.md`.

| `content/` TypeScript type | DB table | Notes |
|---|---|---|
| `SourceRecord` | `sources` | Reference material feeding content authoring / AI-assisted ingestion. |
| `DomainDef` | `domains` | Full def stored as JSON `data`; `order`/`icon` broken out as columns. |
| `SkillDef` (incl. `SkillLevelDef[]`) | `skills` | Full def (all seven levels) in JSON `data`; `domainId`, `languageTrack`, `confidence` broken out. |
| `RubricDef` (incl. `RubricCriterion[]`) | `rubrics` | Full def in JSON `data`; `version` broken out. |
| `ScenarioDef` (incl. `ScenarioCharacter`) | `scenarios` | Full def in JSON `data`; `rubricId`, `stage`, `languageMode` broken out. |
| `PathDef` | `paths` | Def minus `chapters`/`units` (those become their own rows) in JSON `data`. |
| `ChapterDef` | `chapters` | Full def in JSON `data`; `pathId`, `order` broken out. |
| `UnitDef` (incl. `UnitStep[]`, `SummaryCardDef`) | `units` | Def minus `activities` in JSON `data`; `pathId`, `chapterId`, `order`, `primarySkillId`, `stage`, `targetLevel`, `estimatedMinutes` broken out. |
| `Activity` (union: `ChoiceActivity`, `OrderingActivity`, `CategorizationActivity`, `MatchingActivity`, `FillBlankActivity`, `WrittenActivity`, `BranchingActivity`, `ListeningActivity`, `PronunciationActivity`, `ReflectionActivity`) | `activities` | Full activity in JSON `data`; `unitId` or `diagnosticId`, `kind`, `skillId`, `stage`, `rubricId` broken out. |
| `DiagnosticDef` (incl. `DiagnosticItem[]`) | `diagnostics` + `activities` | The diagnostic shell is `diagnostics`; each `DiagnosticItem.activity` becomes its own `activities` row with `diagnosticId` set and `unitId` null. |
| `SummaryCardDef.phrases[]` | `legalEnglishTerms` | Each phrase on a unit's summary card is fanned out into its own vocabulary-review-able term row. |
| — (no direct content type) | `contentVersions`, `contentReviews`, `translations` | Lifecycle/audit tables around the content graph, not mirrors of an authoring type — populated as content moves through draft → review → publish. |

## 6. Seeding and idempotency

`npm run db:seed` runs `scripts/seed.ts`, which the file's own header
describes as:

> "Seeds the content graph and a set of realistic demo accounts. Idempotent:
> every insert is an upsert keyed on the content id, so re-running after
> editing a unit republishes that unit without wiping learner evidence."

In practice this means every insert uses either `.onConflictDoUpdate({
target: s.<table>.id, ... })` (content tables — `skills`, `rubrics`,
`scenarios`, `paths`, `chapters`, `units`, `activities`, `diagnostics`) or
`.onConflictDoNothing()` (append-only/demo tables — `sources`, `domains`,
`legalEnglishTerms`, `contentReviews`, `featureFlags`, `organizations`,
`users`, `profiles`, `memberships`, `pathEnrollments`, `unitProgress`,
`masteryRecords`, `evidence`, `reviewSchedule`, `achievements`,
`assignments`). Content re-seeds cleanly on every run; demo/account rows are
written once and skipped thereafter.

What it seeds, in order:
1. **Content graph** from `content/index.ts`'s `CONTENT` bundle — sources,
   domains, skills, rubrics, scenarios, paths → chapters → units →
   activities (plus Legal English terms fanned out from unit summary-card
   phrases), diagnostics → their activities.
2. **Content review history** — one `contentReviews` row per applicable gate
   (`sme`, `learning_design`, `legal_english` for the Legal English track
   only, `language`, `accessibility`, `qa`) per unit, pre-approved, so the
   Content Studio review queue reflects a realistic already-published state
   rather than starting empty.
3. **Feature flags** — `voice_simulation`, `vision_activities`,
   `org_dashboard`, `certificates` (mixed on/off).
4. **Two demo organizations** — a law firm (`org.demo-firm`) and a
   university (`org.demo-university`).
5. **Six demo users** across roles (`learner` ×4, `reviewer`, `admin`) with
   profiles, memberships, and — for users with `unitsDone > 0` — a path
   enrollment plus completed `unitProgress`, `masteryRecords`, `evidence`,
   and `reviewSchedule` rows for their first N units, with a deliberately
   declining score curve across units and one unit left `in_progress` so
   "resume where you left off" has real data to resume.
6. **One demo assignment** so organization reporting surfaces have data to
   show.

## 7. Local dev vs. production

Switching between local dev and production is purely an environment-variable
change — no code or schema change:

| | Local dev | Production |
|---|---|---|
| `DATABASE_URL` | unset → defaults to `file:./data/aijur.db` | `libsql://<turso-host>` (or self-hosted `sqld`) |
| `DATABASE_AUTH_TOKEN` | unset | Turso/`sqld` auth token |
| Client | same `@libsql/client` `createClient()` call in `src/lib/db/index.ts` | same call, different URL/token |
| Migrations | `drizzle.config.ts` (`dialect: "turso"`) targets the same file or remote URL depending on the same env vars | identical |

Both `src/lib/db/index.ts` and `drizzle.config.ts` resolve the connection the
same way (`process.env.DATABASE_URL ?? "file:./data/aijur.db"`), so there is
exactly one code path for both environments — only the environment differs.
