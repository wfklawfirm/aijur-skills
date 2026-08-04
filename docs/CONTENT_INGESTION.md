# Content Ingestion — from source library to published unit

This document explains how AIJUR turns a library of reference books into
original, learner-facing content, and the pipeline that content travels
through before anyone can see it. It is grounded in the actual code and
content files in this repository as of the current commit — file paths are
given throughout so claims can be checked directly.

## 1. The core rule: never verbatim, always original + linked

The rule is stated at the top of `content/AUTHORING_BRIEF.md` and repeated in
`content/sources/registry.ts`. Quoting the brief directly:

> **Nothing is copied from the source books.** The library informs *which*
> skills exist and *what good practice looks like*. Every sentence, example,
> scenario, option and rationale you write must be newly composed. Never
> reproduce a book's phrasing, exercise, table, checklist wording or figure.
> Attribute conceptual inspiration through `sourceIds` only.

And from the registry file header:

> Every record is `reference_only` unless AIJUR owns it. The library tells us
> *which* competencies exist and *what good practice looks like*. No phrasing,
> exercise, table or figure from any of these works is reproduced anywhere in
> the content set.

**"Linked conceptually" is a concrete mechanism, not a policy statement.**
Authored objects never embed source text. Instead they carry an array of
source-record ids:

- `SkillDef.sourceIds: string[]` (`content/types.ts:97`)
- `UnitDef.sourceIds: string[]` (`content/types.ts:383`)
- `ScenarioDef.sourceIds: string[]` (`content/types.ts:324`)

For example, in `content/framework/skills.ts` a skill closes with a line like:

```ts
sourceIds: ["src.maccarthy-cross-exam", "src.managing-professional-service-firm", "src.making-your-case"],
```

That is the entire connection to the source library for that skill — an id
reference resolvable against `SOURCES`, never a quoted passage, table or
exercise. `grep`-ing the repo for `sourceIds` turns up exactly this pattern
repeated across `content/framework/skills.ts`, `content/paths/*.ts` and
`content/scenarios/index.ts` — no file embeds source book text alongside it.

Each `SourceRecord.notes` field (see below) records *what AIJUR took
conceptually* from the book, written in AIJUR's own words — e.g. for Maister's
*Managing the Professional Service Firm*: "We took from it the case for
systematic client listening, expectation and perception management, and the
argument that under-delegation is a firm-level competency failure rather than
a personal habit." That is the model for the whole library: concept in,
original expression out.

## 2. Source registry

`content/sources/registry.ts` exports `SOURCES: SourceRecord[]`, a hard-coded
TypeScript array. Verified counts (33 entries total):

| `analysisStatus` | count | meaning |
|---|---|---|
| `extracted` | 33 (all) | The source has been read and mined for competency concepts; its `notes` field records what was drawn from it. The original 16 also have populated `sections` (chapter/TOC) arrays; the 17 sources extracted most recently (the business-development/marketing cluster and the argumentation/legal-reasoning cluster) were mined for their `notes` field only — each was read via a dedicated agent pass over the actual PDF, with concrete "what this book contributes" findings, but `sections` (a structural chapter map) was not separately populated for those 17. That's a real, honest gap, not an oversight to hide: the competency-relevant work (what to draw from the book, in original words) is done; the chapter-map metadata is not. |
| `pending`, `in_progress`, `normalised` | 0 | No source currently sits in any of these states — every registered source has been read and extracted. |

**Two data-integrity corrections surfaced during this extraction pass**, both
caught by the extraction agent actually reading the PDF rather than trusting
the pre-existing catalogue metadata, and both fixed in the registry rather
than silently ignored: `src.legal-project-management`'s title/author/year
originally described Steven B. Levy's 2009 practitioner book, but the PDF
actually held in the library is a 2021 peer-reviewed journal article by
Rogers, Dombkins and Bell — the registry entry's `title`/`author`/`year`/
`publisher` were corrected to match the real file. `src.purple-cow`'s PDF is
a ~23-page third-party condensed ("Joosr") summary of Seth Godin's book, not
the full original text — the registry `notes` now say so explicitly rather
than implying the full book was read.

Other breakdowns found by inspection:
- `usageRights`: 32 × `reference_only`, 1 × `owned` (`src.governance-raci`, AIJUR's
  own Arabic-language RACI governance document).
- `kind`: 17 × `professional`, 9 × `operations`, 6 × `advocacy`, 1 × `framework`.
- `reviewStatus`: all 33 are currently `ai_suggested` (see the review-status
  lifecycle in §4 — no source record has been promoted past that state yet).

### `SourceRecord` shape (`content/types.ts:42-64`)

```ts
export interface SourceRecord {
  id: string;
  title: string;
  author: string;
  year?: number;
  language: "en" | "ar" | "fr";
  publisher?: string;
  domains: string[];                 // competency domain ids this source informs
  sections?: string[];                // structural map captured during ingestion — not the text itself
  usageRights: "reference_only" | "licensed" | "public_domain" | "owned";
  analysisStatus: "pending" | "in_progress" | "extracted" | "normalised";
  reviewStatus: ReviewStatus;
  notes: string;                      // why it's in the library, what AIJUR took conceptually
  kind: "professional" | "operations" | "advocacy" | "narrative" | "framework";
}
```

Note that `sections` is explicitly documented as "a structural map captured
during ingestion — not the text itself" — a table of contents / chapter list,
never body text. That distinction is load-bearing for the never-verbatim rule:
even the one field that looks like it could carry source content is
constrained to chapter/section titles.

The 33-source, one-Arabic-owned-document library spans business development,
firm operations, self-management, teamwork/leadership, negotiation/advocacy
and one framework document — matching the ten domains declared in
`content/AUTHORING_BRIEF.md` (`dom.client-relations` through
`dom.legal-english`).

## 3. Authoring contract

Two documents together constitute the authoring contract, and they are meant
to be used together, not separately:

- **`content/types.ts`** — the machine-checked contract. Every content file
  (`content/framework/*.ts`, `content/paths/*.ts`, `content/scenarios/*.ts`,
  `content/sources/registry.ts`) must produce objects that satisfy these
  types under `strict` + `noUncheckedIndexedAccess`. It defines, among other
  things:
  - `ActivityKind` — a 16-member union (`multiple_choice`, `multiple_select`,
    `true_false`, `best_response`, `find_mistake`, `ordering`,
    `categorization`, `matching`, `fill_blank`, `swipe_classify`,
    `priority_ranking`, `short_written`, `email_rewrite`,
    `branching_decision`, `listening`, `pronunciation`, `reflection`), each
    backed by its own discriminated activity interface
    (`ChoiceActivity`, `OrderingActivity`, `CategorizationActivity`,
    `MatchingActivity`, `FillBlankActivity`, `WrittenActivity`,
    `BranchingActivity`, `ListeningActivity`, `PronunciationActivity`,
    `ReflectionActivity`).
  - `UnitStep` — a discriminated union of the ten step kinds a unit can
    contain (`hook`, `why_it_matters`, `learning_goal`, `micro_lesson`,
    `visual`, `worked_example`, `activity`, `simulation`, `summary`,
    `apply_tomorrow`, `next_mission` — eleven listed, ten distinct kinds plus
    `next_mission`). This is literally the shape every authored unit's
    `steps` array must conform to.
  - `SourceRecord`, `SkillDef`, `RubricDef`, `ScenarioDef`, `UnitDef`,
    `PathDef`, `DiagnosticDef`, and the top-level `ContentBundle` that
    `scripts/seed.ts` consumes.
  - `Localized` (`{ ar: string; en: string }`) and `LocalizedBlocks`
    (`{ ar: string[]; en: string[] }`) — every learner-visible string must be
    authored in both languages, no exceptions baked into the type system
    itself.

- **`content/AUTHORING_BRIEF.md`** — the human-readable style guide. It opens
  with "read `/home/claude/aijur/content/types.ts` first" and then lays out
  eight non-negotiables (Arabic authored first as an original, not a
  translation; nothing copied from source books; no Lorem Ipsum or
  placeholder names — plausible Arab-market clients/matters only; mobile-first
  writing, no paragraph over ~40 words; every wrong answer's rationale must
  teach, never just say "incorrect"; accent is never scored in Legal English
  activities; the app must never promise a legal outcome). It then fixes the
  exact id vocabulary an author must reuse rather than invent: the ten domain
  ids, the client-communication and legal-English skill ids, rubric ids,
  scenario ids, path/chapter ids, and the `unit.<track>.NN` /
  `act.<unitid-suffix>.<n>` / `card.<unitid-suffix>` id schemes. It also spells
  out the unit's fixed step sequence (see §4) and the exact list of
  `sourceIds` values available for citation — the 33 ids in the registry.

**Why both together matter:** `types.ts` is what the compiler enforces —
any content file that doesn't typecheck fails the build, full stop, so
structural drift (a missing field, a wrong discriminant) is caught
automatically regardless of who or what wrote the file. `AUTHORING_BRIEF.md`
is what keeps *multiple independent authors* (a human editor, another human
editor, or an AI-assisted drafting pass) from silently diverging on style,
identifiers, or the never-verbatim rule — things the type system cannot
check. A new skill id invented ad hoc, a paragraph over 40 words, a
rationale that just says "wrong" — none of these break compilation, so the
brief exists precisely to constrain what the type system can't. Together they
let content be authored in parallel, by different people or by an AI drafting
assistant under supervision, and still converge on one consistent library.

## 4. The authoring → seed → review → publish pipeline

The full lifecycle from a TypeScript file to something a learner sees:

1. **Author** writes a `.ts` file under `content/framework/`, `content/paths/`,
   or `content/scenarios/`, following the brief and typechecking against
   `content/types.ts`. New objects are typically stamped
   `reviewStatus: "ai_suggested"` and `contentVersion: "1.0.0"` per the
   brief's guidance — the brief states plainly: *"human review is mandatory
   before publication — the app enforces this."*
2. **Aggregate.** `content/index.ts` imports every framework/path/scenario/
   source module and assembles one `ContentBundle` (`sources`, `domains`,
   `skills`, `rubrics`, `scenarios`, `paths`, `diagnostics`) — this is the
   single object the seed script consumes.
3. **Seed.** `scripts/seed.ts` upserts the entire `ContentBundle` into the
   database via `onConflictDoUpdate`/`onConflictDoNothing` on the content id —
   confirmed idempotent by its own doc comment: *"Idempotent: every insert is
   an upsert keyed on the content id, so re-running after editing a unit
   republishes that unit without wiping learner evidence."* This is the
   literal mechanism that moves `content/` TypeScript into the database; there
   is no other ingestion path in the codebase.
4. **Review gates.** Publishable entities (`unit`, `scenario`, `skill`) each
   pass through six named review gates defined in both
   `src/lib/actions/admin.ts` and `admin/_components/gate-panel.tsx`:
   `sme`, `learning_design`, `legal_english` (skipped unless the entity is on
   the Legal English track), `language`, `accessibility`, `qa`. Each gate is
   recorded as a row in the `contentReviews` table with a status of
   `pending`, `approved`, or `changes_requested`, decided by `decideGate()`
   (requires the `content.review` permission).
5. **Publish — the mandatory human gate.** `publishEntity()` in
   `src/lib/actions/admin.ts` is the only path that flips an entity's status
   to `"published"`, and it is hard-blocked, not just UI-discouraged:

   ```ts
   /** Publication is blocked — not just discouraged — until every applicable gate is approved. */
   export async function publishEntity(entityType, entityId, requiresLegalEnglish) {
     ...
     const missing = gates
       .filter((g) => (requiresLegalEnglish || g.gate !== "legal_english"))
       .filter((g) => g.status !== "approved")
       .map((g) => g.gate);
     if (missing.length > 0) return { ok: false, missing };
     ...
   }
   ```

   Calling it requires the `content.publish` permission (held by `reviewer`
   and `admin` system roles, not `author` or `learner`). There is no
   auto-publish code path anywhere in the ingestion or review actions — the
   comment on `decideIngestionSuggestion()` states this explicitly:
   *"Deliberately no auto-publish path here, even on 'accepted' — accepting a
   suggestion creates a draft for an author to develop, per the no-auto-publish
   rule."*
6. **Serve.** The running app never imports `content/` directly for runtime
   reads. `src/lib/content/service.ts` reads exclusively from the database,
   filtered to `status = "published"` (`getSkills`, `getPaths`, `getUnit`,
   `getScenario`, etc.), with its own comment making the reason explicit:
   *"That is the whole point of Content Studio: unpublishing a unit has to
   remove it from the app without a deploy. The files under `/content` are
   the seed and the authoring source of truth; the database is what the
   runtime serves."*

**Review-status lifecycle.** `content/types.ts` defines the source/skill/unit
lifecycle enum directly:

```ts
export type ReviewStatus =
  | "draft"
  | "ai_suggested"
  | "sme_reviewed"
  | "approved"
  | "archived";
```

Separately, `gate-panel.tsx` defines the *entity publication* status values
used by the units/scenarios/skills admin pages: `"draft" | "in_review" |
"approved" | "published" | "archived"`. These are two related but distinct
state machines — `ReviewStatus` lives inside the authored content object
itself (and is what every source and every skill/unit carries today, all
still `ai_suggested`), while the gate-driven `draft → in_review → approved →
published → archived` status lives on the database row and is what
`publishEntity`/`unpublishEntity` actually mutate.

### Current limitations

- **Seed data is pre-published, not gate-reviewed.** `scripts/seed.ts` inserts
  every unit, activity, scenario, skill and path with `status: "published"`
  directly — it does not call `publishEntity()` and does not run anything
  through the six-gate flow at insert time. It compensates by also
  bulk-inserting `contentReviews` rows stamped `"approved"` for every gate on
  every seeded unit, with the note baked into the seed script itself: *"Seeded
  as approved for the demo build. Re-review before any production launch."*
  In other words: today's demo/dev environment ships with the human-review
  gate already satisfied by fiat, not by an actual human decision — that
  satisfies the demo but is explicitly flagged in the code as not a
  substitute for real review before production launch. Critically, this
  behavior is unconditional in the script (it loops over every unit in
  `CONTENT.paths` on every run, not just the first), so re-running
  `scripts/seed.ts` after adding a brand-new unit to `content/paths/` would
  publish and auto-approve that new unit too. The mandatory-human-review
  guarantee is real and enforced for anything moved through the admin UI
  (`decideGate()` / `publishEntity()`), but the seed script itself is
  currently a bypass of that guarantee, not an instance of it.
- **The AI-assisted ingestion pipeline is a documented placeholder, not a
  working feature.** `admin/ingestion/page.tsx` says so directly in its own
  comment: *"There is no book-upload/parsing pipeline built yet. This page is
  an honest placeholder: it shows which registered sources are waiting to be
  analysed and explains the intended workflow, but the 'Start analysis'
  action is inert — it must never look like it did something it didn't."* The
  "Start analysis" button is rendered `disabled`. As of this checkout all 33
  registered sources now sit at `analysisStatus: "extracted"` (0 `"pending"`),
  so the `admin/ingestion` page currently renders an empty list — but that
  status transition has so far only happened by a human/author (or an
  AI extraction agent working from the actual PDF, under human direction)
  manually editing `registry.ts`, never through an automated pipeline; there
  is still no code path that moves a *newly added* source from `"pending"` to
  `"extracted"` on its own.
  `ingestion.decide` is a real, enforced permission
  (`src/lib/auth/rbac.ts`) and `decideIngestionSuggestion()` is a real,
  working server action — but they operate on rows in an
  `ingestionSuggestions` table that nothing in this codebase currently
  populates from an actual source PDF; the review-queue UI works, but the
  step upstream of it (parse a PDF, propose a skill/skill-edit) does not
  exist yet.
- **No `narrative` or `licensed`/`public_domain` sources yet.** Both are valid
  enum values (`SourceRecord.kind`, `SourceRecord.usageRights`) but no
  current registry entry uses them — the library is presently all
  `reference_only` professional/operations/advocacy/framework works plus one
  `owned` internal document.

## 5. Admin tooling

Four admin surfaces under `src/app/(app)/[locale]/admin/` cover source and
review management; a fifth (`admin/units`, and equivalently
`admin/skills`/`admin/scenarios`) is where the actual publish gate is
exercised. All server-side mutations live in `src/lib/actions/admin.ts`.

- **`admin/sources`** (`page.tsx`) — read-only listing of all 33
  `SourceRecord`s via `listSources()`, each rendered with its `kind`,
  `analysisStatus` and `reviewStatus` as badges. Purely informational; no
  mutation actions on this page.
- **`admin/ingestion`** (`page.tsx`) — lists the sources with
  `analysisStatus === "pending"` (currently none — see §4) and shows a
  disabled "Start analysis" button per source, with a warning callout
  (`dict.admin.ingestionNotWired`) explaining the pipeline isn't wired up
  yet. As described in §4, this is an intentionally honest placeholder.
- **`admin/review-queue`** (`page.tsx`) — the working half of the
  ingestion story. Two independent queues, each gated by its own permission:
  - **Ingestion suggestions** (`listPendingIngestion()` /
    `decideIngestionSuggestion()`, needs `ingestion.decide`): each suggestion
    shows its `suggestionType`, a confidence badge, an optional
    "similar to <existing entity>" badge with a similarity score, a JSON
    payload snippet, and a rationale string. The reviewer picks one of four
    decisions via `IngestionActions` — **Accept / Edit / Merge / Reject**
    — which calls `decideIngestionSuggestion(id, decision)`. As the code
    comment on that action states, *even an "accepted" decision does not
    publish anything*; it only marks the suggestion decided so an author can
    turn it into a draft content file by hand.
  - **AI evaluations pending human review** (`listQueuedEvaluations()` /
    `decideEvaluationReview()`, needs `evaluation.review`): each row shows
    the rubric id, the AI-assigned score, and a confidence badge. The
    reviewer picks **Accept (uphold)** or **Reject (overturn)** via
    `EvaluationActions`, calling `decideEvaluationReview(evaluationId,
    "upheld" | "overturned" | ...)`, which also writes an audit row into
    `humanReviews`.
- **`admin/units`** (and `admin/skills`, `admin/scenarios`) — per-entity
  publish workflow via the reusable `GatePanel` component. For every unit it
  shows the six review gates (`sme`, `learning_design`, `legal_english`,
  `language`, `accessibility`, `qa` — `legal_english` skipped unless the unit
  belongs to `path.legal-english-client-communication`), lets a
  `content.review`-permitted user approve or request changes on each gate via
  `decideGate()`, and lets a `content.publish`-permitted user call
  `publishEntity()`/`unpublishEntity()` once all applicable gates read
  `approved`. If any gate is missing, `publishEntity()` returns
  `{ ok: false, missing: [...] }` and nothing changes — the UI surfaces
  exactly which gates are still open.

Permissions backing all of this (`src/lib/auth/rbac.ts`,
`SYSTEM_ROLE_PERMISSIONS`): `content.review`, `content.publish`,
`ingestion.decide`, `evaluation.review` and `source.manage` are all held by
the `reviewer` and `admin` system roles; `author` holds `content.author` and
`source.manage` but not the review/publish/decide permissions; `learner`
holds only `content.read`. So an author can write and register content, but
cannot review, decide an ingestion suggestion, or publish it themselves.

## 6. Extending the content library

Practical steps for a future content author, referencing real file
locations:

**Add a new source.** Append a new `SourceRecord` literal to the `SOURCES`
array in `content/sources/registry.ts`, following the existing entries'
shape. Set `analysisStatus: "pending"` and `usageRights: "reference_only"`
(unless AIJUR owns the work), write `notes` describing *why* it's in the
library and what it will inform conceptually — never a summary that lifts
book phrasing. Then add its id to the "Source ids available for `sourceIds`"
list at the bottom of `content/AUTHORING_BRIEF.md` so other authors can cite
it. Because ingestion analysis (moving `pending → extracted`) currently has no
tooling (§4 limitations), this step today means a human (or an AI extraction
agent working directly from the source PDF, under human direction) reading
the source and hand-editing `notes`/`analysisStatus` (and, ideally,
`sections`) in the registry — the same way all 33 `extracted` entries were
produced.

**Add a new skill.** Add a `SkillDef` to `content/framework/skills.ts`,
picking one of the fixed skill ids listed in `AUTHORING_BRIEF.md` (or
proposing a new one to be added to that list first, to avoid id drift across
authors). It must reference one or more real `domains.ts` domain id, cite
1–4 real `sourceIds`, and include the full `SkillLevelDef[]` ladder
(0 Not Assessed through 6 Leader/Coach) with `observableBehaviors`,
`commonMistakes`, `successCriteria` and `evidenceRequired` per level, all in
both `ar` and `en`.

**Add a new unit.** Add a `UnitDef` to the relevant file under
`content/paths/` (e.g. `content/paths/cc-units-01-04.ts` for Client
Communication units 1–4, `content/paths/le-units-01-05.ts` for Legal
English), using the fixed `unit.cc.NN` / `unit.le.NN` id scheme and the fixed
15-part `steps` sequence documented in `AUTHORING_BRIEF.md`:

```
hook → why_it_matters → learning_goal → micro_lesson → visual →
worked_example → activity(quick) → activity(guided) → activity(independent) →
[simulation] → activity(reflection) → summary → apply_tomorrow → next_mission
```

4–6 activities per unit spanning at least three different `ActivityKind`
values, ids following `act.<unitid-suffix>.<n>` (e.g. `act.cc.03.1`), a
`summaryCard` with id `card.<unitid-suffix>`, `contentVersion: "1.0.0"` and
`reviewStatus: "ai_suggested"`. `sourceIds` must be drawn only from the ids
listed in the brief.

**Get it through review and into the database.**
1. Run the seed script (`bunx tsx scripts/seed.ts` or the project's
   equivalent npm/bun script — the file resolves `DATABASE_URL` from
   `.env.local`/`.env` and falls back to `file:./data/aijur.db`) to upsert
   the new content into the database. It is safe to re-run.
2. As a `reviewer` or `admin` user, open `admin/units` (or `admin/skills`,
   `admin/scenarios` for those entity types), and work each of the six gates
   — `sme`, `learning_design`, `legal_english` (Legal English track units
   only), `language`, `accessibility`, `qa` — to `approved` via
   `decideGate()`.
3. Once every applicable gate is `approved`, click Publish (calls
   `publishEntity()`), which flips the entity's status to `"published"` in
   the database — no redeploy required, per the Content Studio design
   documented in `src/lib/content/service.ts`.
4. The app's read paths (`src/lib/content/service.ts`) will now serve the
   unit to learners, since they filter strictly on `status = "published"`.

**Important caveat on the current seed script:** as written today,
`scripts/seed.ts` does not distinguish a brand-new unit from the original
demo content — every unit under `CONTENT.paths` is inserted with
`status: "published"` *and* has all six gates inserted into `contentReviews`
as `"approved"` (with the note "Seeded as approved for the demo build.
Re-review before any production launch.") on every run, not only the first
one. So mechanically, re-running the seed script after adding a new unit to
`content/paths/` will make it live immediately, bypassing the gate panel
described in step 2–3 above. Steps 2–3 describe the *intended* human-review
workflow that the admin UI and `publishEntity()` actually enforce for any
status change made through the UI; they are not currently enforced by the
seed path itself. Treat auto-approval-on-seed as a demo-environment
convenience that a production deployment would need to remove (e.g. seed new
content as `"draft"` and require the gate panel/`publishEntity()` for every
promotion) before the no-auto-publish rule can be considered fully closed
end-to-end.
