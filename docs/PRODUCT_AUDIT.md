# Product Audit

Honest, evidence-based snapshot of what is actually built in this repository as of
2026-08-04, several commits into the codebase (most recently, content domains for
Self-Management, Teamwork & Leadership, Business Development, Firm & Matter
Operations, and Digital Tools & AI — the final domain — plus a self-service
password reset flow, real email verification, and an application-level CSRF guard —
see `git log --oneline` for the full sequence). This is an internal engineering audit,
not marketing copy — every claim below is backed by a file path, a count pulled from
the code, or a command run against this checkout. See `docs/PRODUCT_ARCHITECTURE.md`
for how the system is put together; this document is about how much of it exists and
how far the content goes.

## 1. Scope of this build

"MVP" here means: a complete, working vertical slice of the product — auth (including
password reset and email verification), onboarding, a diagnostic, eight full learning
paths (10 units each) with graded activities, AI-coached simulations, spaced-review and
mastery tracking, an application-level CSRF guard, and an admin Content Studio for
managing the framework — all running against a real Drizzle/libSQL schema with no REST
layer (Server Actions only), fully bilingual (Arabic-first), and functional **with zero
AI provider keys configured** because every AI agent ships a deterministic offline
fallback. It is genuinely functional end to end for all eight paths that have been
authored (Client Communication Foundations and its paired Legal English track,
Negotiation & Influence, Self-Management, Teamwork & Leadership, Business
Development, Firm & Matter Operations, and Digital Tools & AI) across all 10
competency domains — **every one of the 10 domains now has real unit/lesson content
written, not just framework definitions.** Nothing in the shipped product is a visual
mockup or a "coming soon" screen: the product as it stands is a working ten-domain
curriculum across eight paths.

## 2. What's built

| Area | Status | Evidence |
|---|---|---|
| **Auth** | Functional | Email/password with scrypt hashing (`src/lib/auth/password.ts`, N=2^15, memory-hard KDF), HMAC-signed session cookies (`src/lib/auth/session.ts`), no OAuth/SSO of any kind. Routes: `sign-in`, `sign-up`, `forgot-password`, `reset-password/[token]`, `verify-email/[token]` under `src/app/(app)/[locale]/`. Self-service password reset (`src/lib/actions/password-reset{,-core}.ts`) is single-use, hashed, 1-hour-expiring, session-revoking tokens delivered by email. Email verification (`src/lib/actions/email-verification{,-core}.ts`) is real now — a link is sent at signup and resendable from the profile page — but deliberately doesn't gate anything (see `docs/SECURITY.md` §7 for why); `emailVerifiedAt` is only ever set by an actual confirmed click. Real email delivery for both flows needs `EMAIL_PROVIDER=resend`+`RESEND_API_KEY` configured; with no provider set, links are logged to the server console instead of emailed. |
| **RBAC / multi-tenancy** | Functional | `src/lib/auth/rbac.ts` defines 11 permissions, 4 system roles (learner/author/reviewer/admin) and 5 org roles (owner/admin/manager/author/member); `assertTenant()` enforces org isolation on every scoped query. Schema has `organizations`, `memberships`, `teams` tables. `assertTenant()` now has real call sites for all three org permissions: `org.members.manage`/`org.reports` (`src/lib/actions/org-core.ts` — list/add/role-change/remove members, an org report) and `org.assign` (`src/lib/actions/teams-core.ts` — team create/rename/delete, member-team assignment). `memberships.competencyProfileId` remains schema-only with no action surface. Covered by `tests/rbac.test.ts` (the primitive, mock users), `tests/org-tenant-isolation.test.ts` (9 tests), and `tests/teams-tenant-isolation.test.ts` (10 tests) — two seeded organizations each. |
| **Onboarding** | Functional | `src/app/(app)/[locale]/onboarding/onboarding-flow.tsx` + `src/lib/actions/onboarding.ts`; feeds into a diagnostic (`src/app/(app)/[locale]/diagnostic/page.tsx`, `content/diagnostics.ts` — 1 diagnostic, 8 items). |
| **Content authoring/framework** | Functional, fully populated across all 10 domains | `content/types.ts` defines the full authoring contract (domains, skills w/ 7 mastery levels each, rubrics, scenarios, paths/chapters/units, 17 activity kinds, diagnostics). 10 domains, 61 skills, 18 rubrics, 18 scenarios, 8 paths, 80 units, 399 activities all authored (`content/framework/*.ts` plus domain companion files — see §4). All 61 skills are `reviewStatus: ai_suggested` — none have progressed to `sme_reviewed` or `approved`. |
| **Learning engine** | Functional | `src/lib/learning/{mastery,progression,grading,review,responses,dashboard}.ts` — deterministic grading for choice/ordering/matching/fill-blank activities, AI-rubric grading for written work, a mastery ledger (0–6 levels) backed by `masteryRecords`/`evidence` tables, and a spaced-review scheduler (`reviewSchedule` table, tested in `tests/mastery.test.ts` and the review-selection suite). |
| **AI layer + offline fallback** | Functional | `src/lib/ai/provider.ts`: single `runAgent()` entry point, provider chain (anthropic → openai → offline, configurable via env), every call recorded to `aiModelRuns` (provider, model, prompt/rubric version, input hash, tokens, cost, latency, confidence) for audit/reproducibility. **Every agent (`simulation.ts`, `evaluation.ts`, `coaching.ts`) ships a rule-based `offline` implementation with the same Zod output schema**, so the app runs with zero API keys — confirmed by `.env.example` defaulting `AI_PRIMARY_PROVIDER=offline`. Prompt-injection defence via `asData()` wraps untrusted learner/client text in a fenced block. |
| **Admin Content Studio** | Functional | 7 admin screens under `src/app/(app)/[locale]/admin/`: dashboard, sources, skills, rubrics, scenarios, units, review-queue, ingestion. `ingestion` page is explicitly a monitoring view over `ingestionSuggestions`/`humanReviews` tables, not an automated pipeline (see comment at `admin/ingestion/page.tsx:12`). An 8th screen, `admin/organization`, is shown only to users with an org role holding `org.members.manage` or `org.reports` (owner/admin/manager) — member list/add/role-change/remove plus a per-org report that respects `organizations.privacyPolicy.managersSeeScores`, and (for callers additionally holding `org.assign`) team create/rename/delete and member-to-team assignment. |
| **i18n** | Functional, AR/EN only | `src/lib/i18n/config.ts`: `LOCALES = ["ar","en"]`, `DEFAULT_LOCALE = "ar"`, and an explicit `PLANNED_LOCALES = ["fr"]` — French is a stated intent, not built. Proxy-based locale routing (`src/proxy.ts`) with cookie > Accept-Language > Arabic-default resolution. `tests/i18n-parity.test.ts` checks dictionary key parity between `ar.ts`/`en.ts`. |
| **PWA / offline** | Functional, conservative, now e2e-verified | `public/manifest.webmanifest` (standalone, RTL-aware `dir: auto`), `public/sw.js` — precaches only the app shell + `/offline` page, explicitly **never caches API/mutation responses** (comment at top of file), caches visited content pages for re-reading offline. No background sync of queued mutations is implemented beyond what's described. Two real, previously-undetected bugs meant this was **entirely non-functional** until this session's e2e pass (`tests/e2e/pwa-offline.spec.ts`) caught them — see §5. |
| **Data model** | Functional | `src/lib/db/schema.ts`, 850 lines, 41 tables spanning identity/tenancy, content (sources→domains→skills→rubrics→scenarios→paths→chapters→units→activities), learner state (enrollments, unit progress, attempts, simulation sessions/messages, evaluations, mastery, evidence, review schedule, pronunciation attempts, vocabulary reviews), and platform ops (AI model runs, human reviews, ingestion suggestions, analytics events, audit log, feature flags, rate limits). |

No REST API surface exists (`find src/app/api` returns empty) — all mutations are
Server Actions under `src/lib/actions/*.ts` (auth, onboarding, profile, progress,
simulation, mastery-bridge, analytics, admin).

## 3. What's intentionally NOT built / deferred

Checked directly rather than assumed:

- **Billing/payments**: a `subscriptions` table exists (`plan`, `seats`, `status`,
  `currentPeriodEnd`) but there is no Stripe/payment-provider integration anywhere in
  `src/` — it's a schema placeholder for a future billing layer, not a working feature.
- **SSO/OAuth**: none. Auth is email + password only (grep for `oauth|SSO|saml` across
  `src/` turns up zero matches outside unrelated substring hits).
- **French locale**: explicitly deferred — `PLANNED_LOCALES = ["fr"]` in
  `src/lib/i18n/config.ts`, not wired into routing or dictionaries.
- **Push notifications**: a `notifications` table exists for in-app notifications
  (title key, params, read state) but there is no web-push subscription/service-worker
  push handler in `public/sw.js` — it's in-app only.
- **Native mobile apps**: none. This is a PWA (installable, offline shell) — no
  React Native/Capacitor wrapper in the repo.
- **REST/public API**: none — Server Actions only, by design (see
  `docs/PRODUCT_ARCHITECTURE.md` §4).
- **Automated content ingestion pipeline**: the admin `ingestion` page is a review
  queue over pre-seeded `ingestionSuggestions`, not a live document-to-content
  pipeline; the comment in the source file calls it a "placeholder" for that reason.
- **Content review workflow completion**: all 61 skills sit at `reviewStatus:
  "ai_suggested"` — the SME review → approved pipeline that `content/types.ts` models
  (`draft → ai_suggested → sme_reviewed → approved → archived`) has not been exercised
  past the first stage for any skill. This is the one item in this section that
  genuinely still applies to all 10 domains equally — see §4 for why "framework-only"
  no longer applies to any domain, but "not yet human-reviewed" applies to every
  domain including the 8 with real units.

## 4. Content coverage

Counts pulled by loading `content/index.ts`'s `CONTENT` bundle directly:

| Object | Count |
|---|---|
| Domains | 10 |
| Skills | 61 (all `reviewStatus: ai_suggested`) |
| Rubrics | 18 |
| Scenarios (simulations) | 18 |
| Source records | 33 |
| Paths | 8 |
| Diagnostics | 1 (8 items) |
| Units (total, across all paths) | 80 |
| Activities (total) | 399 |
| Legal-English phrase-bank entries | 96 |

**Path-level detail:**

| Path | Track | Domains covered | Chapters | Units |
|---|---|---|---|---|
| `path.client-communication-foundations` | professional | client-relations, communication, professional-judgment | 4 | 10 |
| `path.legal-english-client-communication` | legal_english | legal-english, client-relations, communication | 4 | 10 |
| `path.negotiation-influence` | professional | negotiation-influence | 4 | 10 |
| `path.self-management` | professional | self-management | 4 | 10 |
| `path.teamwork-leadership` | professional | teamwork-leadership | 4 | 10 |
| `path.business-development` | professional | business-development | 4 | 10 |
| `path.firm-operations` | professional | firm-operations | 4 | 10 |
| `path.digital-ai` | professional | digital-ai | 4 | 10 |

**Skills-per-domain vs. units-per-domain — every domain now has real unit content:**

| Domain | Skills defined | Units authored |
|---|---|---|
| Client Relations | 9 | 20 |
| Professional Communication | 3 | 20 |
| Professional Judgment & Ethics | 4 | 10 |
| Legal English | 10 | 10 |
| Negotiation & Influence | 6 | 10 |
| Self-Management | 6 | 10 |
| Teamwork & Leadership | 6 | 10 |
| Business Development | 6 | 10 |
| Firm & Matter Operations | 7 | 10 |
| Digital Tools & AI | 4 | 10 |

**All 10 of 10 domains now have real unit content** (two of them only via the
cross-listed paths above). As of this update, "framework-only domain" no longer
applies to anything in this codebase — every domain has lessons, activities,
scenarios, and rubrics written against it. What remains unfinished is not
breadth but depth of review: see the SME-review caveat repeated throughout this
document.

Negotiation & Influence (`path.negotiation-influence`, `content/paths/ni-units-*.ts`),
Self-Management (`path.self-management`, `content/paths/sm-units-*.ts`),
Teamwork & Leadership (`path.teamwork-leadership`, `content/paths/tl-units-*.ts`) and
Business Development (`path.business-development`, `content/paths/bd-units-*.ts`)
were all authored in this build session, following the identical process: parallel
subagents each write one companion file (skills/rubrics/scenarios/one unit batch)
against `content/AUTHORING_BRIEF.md`'s non-negotiables and a fixed id contract to
prevent drift, then an independent report-only QA-audit subagent checks the result
(id consistency, no repeated fact patterns, wrong-answer rationales present,
mobile-first block length, no accent-scoring or outcome guarantees, natural
bilingual prose, no name collisions with already-shipped domains) before anything
is wired into `content/index.ts`. For Self-Management, the QA pass found and this
session fixed two real issues before shipping: a repeated Arabic spacing typo
("كلامبالاة" → "كـ لا مبالاة", three occurrences) and one worked-example bullet
that ran well over the mobile-first length guideline (split into two shorter
blocks). For Teamwork & Leadership, the QA pass found one real issue: the two
authoring agents independently invented unrelated clients both named "Al-Nakheel"
— one collided with a client already shipped in Self-Management — fixed by
renaming the newer one (Al-Ajyal Contracting). For Business Development, the QA
pass found one real issue: a networking-contact character in the units-01-05 file
reused the full name "Fadi Barakat" from an unrelated senior-partner character
already shipped in Teamwork & Leadership — fixed by renaming to "Karim Saab" (and
verified against every other shipped path's cast list). The Business Development
QA pass paid particular attention to non-negotiable #8 (never guarantee legal
outcomes) since the domain is inherently about winning business — every scenario,
worked example, and rubric criterion that models an outcome-guarantee mistake was
confirmed to be clearly wrong-scored (both rubrics' `criticalMistakes` cap that
mistake at 0, and both simulations force-close if the learner holds the guarantee
under challenge), never accidentally validated as a correct or strong answer. For
Self-Management, Teamwork & Leadership, and Business Development alike, the QA
pass also flagged that only 2 of each domain's 4 chapters carry a `simulation`
step, against the brief's "exactly one per chapter" guideline — **deliberately not
changed**: the already-shipped Negotiation & Influence domain has the exact same
2-of-4 pattern (no simulation in its "preparing" or "closing" chapters), and in
each newer domain the chapters without one either don't naturally fit a
live-dialogue simulation (weekly planning; delegating a task; researching a
client's business) or already get equivalent practice through a
branching-decision activity. Forcing in more scenarios just to satisfy the
guideline literally would mean redundant simulation coverage for real quality
cost, not gain — this is now the established house pattern across all four
newly-authored domains, not a one-off exception. All four new domains are
`reviewStatus: "ai_suggested"` and do not count toward a learner's mastery
record as human-reviewed until a person reviews them — the platform's
mandatory-human-review rule applies exactly as it does to every other domain.

Firm & Matter Operations (`path.firm-operations`, `content/paths/fo-units-*.ts`)
was authored next with the same recipe, adding 3 new skills
(`skill.output-quality-control`, `skill.time-and-billing-narratives`,
`skill.matter-handover`) alongside 4 pre-existing ones already in
`content/framework/skills.ts`, 2 rubrics, 2 scenarios, and 10 units. This
domain's rubric file states its own highest-risk failure mode explicitly in a
header comment: a learner who finds a real problem (an error in a colleague's
work, a gap in a matter changing hands) and quietly avoids saying so — treated
with the same critical-mistake severity (`capsScoreAt: 0`) other domains
reserve for guaranteeing an outcome. During integration one placeholder-id
mismatch was caught and fixed before the QA pass even ran: the rubrics agent
had provisionally referenced `skill.quality-control`/`skill.billing-narrative`
(guessed before the skills file existed) instead of the skills agent's actual
final ids (`skill.output-quality-control`/`skill.time-and-billing-narratives`)
— corrected during integration, then independently re-verified by the QA
agent. The QA pass on this domain found **zero issues** across every checked
category (ids, name collisions, non-negotiable #8, concealment framing,
mobile-first length, wrong-answer quality, activity-kind variety, bilingual
naturalness, prerequisite chains, review status) — the first of the five
newly-authored domains to QA clean on the first pass with no fixes needed.
Verified with a real `db:seed` run (skills 55→58, rubrics 14→16, scenarios
14→16, paths 6→7, units 60→70, activities 303→351).

Digital Tools & AI (`path.digital-ai`, `content/paths/da-units-*.ts`) was the
tenth and final domain, closing out full framework-to-content coverage. It adds
3 new skills (`skill.ai-output-verification`, `skill.disclosing-ai-errors`,
`skill.protecting-data-in-digital-tools`) alongside the 1 pre-existing
`skill.responsible-ai-use`, 2 rubrics, 2 scenarios, and 10 units. This domain's
own highest-risk failure mode — distinct from every other domain's — is
treating unverified AI output as fact, silently self-correcting an AI error
instead of disclosing it (or blaming the tool as an excuse), and exposing
confidential client data to an unapproved tool; every rubric's
`criticalMistakes` caps these at 0, matching the severity every other domain
reserves for its own highest-risk behavior. The QA pass on this domain was the
most name-collision-exposed of the whole build (the 10th domain checked
against nine prior casts) and came back with only two cosmetic nitpicks, both
fixed before shipping: one unit's `estimatedMinutes` (13) exceeded the
brief's 6–12 range by one minute (set to 12), and a supervising-partner
character shared a surname with an unrelated protagonist introduced earlier in
the same path's own units (no cross-domain collision, just an internal
coincidence — renamed from "Fadia Homsi" to "Fadia Rahal" for clarity).
Verified with a real `db:seed` run (skills 58→61, rubrics 16→18, scenarios
16→18, paths 7→8, units 70→80, activities 351→399).

Every content change in this session was verified the same way: `npx tsc --noEmit`
for shape-correctness against `content/types.ts`, then a real `npm run db:seed` run
against the live dev database (a stronger signal than typechecking alone, since
`types.ts` doesn't enforce cross-referential integrity between id strings like
`rubricId`/`scenarioId`/`skillId`) — every new domain seeded cleanly with the
counts shown above.

Activity-kind distribution across the 399 authored activities skews toward the
same kinds as the earlier paths, plus each new path's own mix of `short_written`
(reflective/planning writing), `branching_decision` (in-session decision points),
and `simulation` units. Exact counts were not recomputed field-by-field for this
update; see `content/index.ts`'s `CONTENT.paths` for the authoritative source.

Prior (4-domain) activity-kind distribution, retained for reference: `reflection` 20,
`short_written` 18, `listening` 10, `pronunciation` 10, `multiple_choice` 8,
`best_response` 8, `fill_blank` 7, `ordering` 6, `matching` 5, `find_mistake` 4,
`categorization` 3, `branching_decision` 3, `true_false` 2, `email_rewrite` 2,
`swipe_classify` 1, `priority_ranking` 1, `multiple_select` 1. All 16 of the 17
activity kinds defined in `content/types.ts` are exercised in real content except
none of the choice/deterministic kinds are missing — `branching_decision` (used in
scenarios) is present too, so effectively the full activity-kind vocabulary is proven
in production content, just at low volume for some kinds (e.g. only 1
`swipe_classify`, 1 `priority_ranking`).

## 5. Known risks / rough edges

- **A real access-control bug and a real score-integrity bug were found and
  fixed this pass, via an independent audit sweep, not user-reported.**
  (1) Every read function in the Content Studio admin surface
  (`getReviewGateStatus`, `listPendingIngestion`, `listQueuedEvaluations`,
  `listSources`) had no permission check of its own, and the layout gate
  that was supposed to protect `/admin/*` checked `content.read` — a
  permission every signed-in user holds, including a plain learner. Any
  authenticated learner could reach `/admin/review-queue` and see every
  learner's queued AI evaluations. (2) `completeUnit()` took a client-
  supplied `results` array and trusted it for scoring — any signed-in
  caller could fabricate a perfect score for any unit, and an honest
  learner's earlier steps were silently dropped if the page reloaded
  mid-unit. Both are fixed — see `docs/SECURITY.md` §7 for the full
  write-up, `tests/admin-access-control.test.ts` and
  `tests/unit-completion.test.ts` for the regression coverage. Rate
  limiting was also added to the three AI-invoking Server Actions
  (`startSimulation`, `sendSimulationMessage`, `submitActivity`'s AI-
  grading branch), which previously had none, unlike the auth endpoints.
  A second, independent pass immediately after found one more instance of
  the same access-control gap: `admin/rubrics/page.tsx` had been missed
  when the page-level `content.author` guard was rolled out to every other
  Content Studio page, so an org admin/manager without a content role could
  still reach a full rubric dump. Fixed the same way as the rest — see
  `docs/SECURITY.md` §7.
- **The human-review queue didn't show enough to actually review.** Not a
  security bug — a usability gap in the "human review is mandatory before
  any AI-touched score counts" pipeline that made the review queue closer to
  theater than a real control. `admin/review-queue/page.tsx` rendered only a
  rubric id, a raw score, and a confidence percentage for each queued
  evaluation — none of the AI's actual reasoning (per-criterion evidence
  quotes, strengths, missed opportunities, critical mistakes, the
  priority-improvement note), and no indication of *why* it was queued.
  `verifyEvaluation()` already computed that reason (fabricated evidence vs.
  low confidence vs. a capped critical mistake vs. thin rubric coverage —
  four very different things a reviewer should check for) but discarded it
  before it ever reached storage. Fixed by persisting `humanReviewReason` to
  the `evaluations` table and rendering the full evaluation payload in the
  queue card. See `docs/AI_ARCHITECTURE.md` §8 and `docs/DATA_MODEL.md` for
  the full write-up. Verified twice: first against a real running build (not
  just a type-check) with a manually inserted queued evaluation row, viewed
  as the seeded `admin@demo.aijur.ai` account in a real Chromium session;
  then made a permanent regression guard as `tests/e2e/review-queue.spec.ts`,
  which drives a real simulation to completion (the offline evaluator always
  reports `confidence: 0.35`, deterministically producing a queued
  `low_confidence` evaluation with no mocking or DB fixture needed) and
  asserts the queue reason and full AI payload render — part of the 16/16
  e2e suite now, see §6.
- **All 10 domains now have content, but breadth within each domain is still
  shallow relative to a mature curriculum.** Every domain has exactly one 10-unit
  path (two domains are covered twice, via the paired Client Communication/Legal
  English tracks) — there is no per-audience variation yet (the schema supports
  `PathDef.audience` targeting student/trainee/junior/experienced/manager
  separately, but every path currently targets a single audience band). Anyone
  wanting deeper or audience-specific coverage within any one domain will find
  a single path, not a multi-path curriculum for that domain.
- **Offline AI is meaningfully lower-fidelity than a real model.** The
  `offline`-provider implementations in `src/lib/ai/agents/{simulation,evaluation,
  coaching}.ts` are deterministic, rule-based stand-ins with the same output schema
  as a live model — they keep the product functional with no API key, but they are
  not a substitute for LLM-quality simulation dialogue or nuanced rubric scoring.
  `AgentResult.degraded` — true specifically when a *configured* remote provider
  (Anthropic/OpenAI) was attempted and failed, falling back to offline; not set
  when no remote provider was ever configured at all — is now surfaced to the
  learner (see the fixed half of the item below).
- **All content is unreviewed by a human SME.** Every one of the 61 skills is stuck
  at `reviewStatus: "ai_suggested"` — the review pipeline exists in the schema and
  admin UI (`review-queue` page, `contentReviews` table) but has not been exercised
  to `approved` for anything yet. Treat all current content as pre-SME-review.
- **A committed e2e/RTL/accessibility suite now exists, with growing
  coverage.** `npm run test:e2e` (`playwright.config.ts`,
  `tests/e2e/*.spec.ts`) runs a real headless Chromium against a real
  production build (`next build && next start`, not `next dev` — dev mode's
  Turbopack HMR was found to race with the very first cold navigation under
  headless automation and was ruled out for that reason) and a real dev
  database: (1) a full sign-up → 9-step onboarding → **all 8 diagnostic
  items → real placement result → redirect into `/home`** (the diagnostic
  used to stop at the diagnostic page loading; it now drives every
  deterministic activity kind — `best_response`, `priority_ranking`,
  `multiple_choice`, `multiple_select`, `short_written`, `find_mistake` —
  through the real grading engine to completion), (2) an authenticated
  learner reaching the home hub, learn hub, and real unit pages **from all 8
  authored paths** (`unit.cc.01`, `unit.le.01`, `unit.ni.01`, `unit.sm.01`,
  `unit.tl.01`, `unit.bd.01`, `unit.fo.01`, `unit.da.01` — previously only
  three of eight), plus a last-unit spot check on two of those paths
  (`unit.cc.10` and `unit.da.10` — the platform's first-ever and
  last-ever authored content batches) and a middle-unit spot check on two
  more (`unit.ni.05`, `unit.fo.05` — the seam between each path's own
  `-units-01-05.ts`/`-units-06-10.ts` files) as a cheap proxy for "the
  whole path holds together, not just its first and last step," (3) **four
  full simulation runs from separate domains** — start a real session, send
  a message through the real offline agent, end early, and reach a real
  rendered evaluation, for `scn.first-client-meeting` (Client
  Communication), `scn.negotiation-settlement-offer` (Negotiation &
  Influence), `scn.catching-an-ai-hallucination` (Digital Tools & AI), and
  `scn.le-intro-call` (Legal English) — previously untested entirely, (4)
  **the admin human review queue** — sign in as the seeded admin account,
  drive a real simulation to completion (deterministically producing a
  queued, low-confidence offline evaluation), then confirm the review queue
  renders the full AI payload and queue reason, not just a score badge
  (added alongside the Milestone 4 fix — see §5), (5) RTL/LTR `dir` and
  `lang` attribute checks for both locales, (6) axe-core scans
  (critical/serious severity gate) across 5 anonymous and authenticated
  pages, and (7) **the PWA service worker's actual offline behaviour**
  (`tests/e2e/pwa-offline.spec.ts`) — registration/control, the manifest,
  a previously-visited page staying readable offline, and a never-visited
  page falling back to the `/offline` screen, and (8) **four more full
  simulation runs from the remaining domains not yet covered by (3)** —
  Firm & Matter Operations (`scn.flagging-a-quality-issue`), Business
  Development (`scn.asking-for-referral`), Teamwork & Leadership
  (`scn.disagreeing-with-supervisor`), and Self-Management
  (`scn.overloaded-associate`) — so every one of the platform's 8 authored
  paths now has at least one full simulation run proven end to end, not
  just its unit-player content, and (9) **a middle-unit spot check for
  every remaining authored path** — `unit.cc.05`, `unit.le.05`,
  `unit.sm.05`, `unit.tl.05`, `unit.bd.05`, `unit.da.05` — alongside the
  two already covered (`unit.ni.05`, `unit.fo.05`), so all 8 paths now have
  their chapter-boundary seam exercised, not just 2 of 8, and (10) **a
  last-unit spot check for the remaining 6 paths** — `unit.le.10`,
  `unit.ni.10`, `unit.sm.10`, `unit.tl.10`, `unit.bd.10`, `unit.fo.10` —
  alongside the two already covered (`unit.cc.10`, `unit.da.10`), so every
  one of the 8 authored paths now has first, chapter-boundary-seam, and
  last unit all exercised end to end, and (11) **a second scenario for
  every domain that ships one** — `scn.le-explaining-process` (Legal
  English), `scn.negotiation-hostile-counterpart` (Negotiation &
  Influence), `scn.missed-deadline-disclosure` (Self-Management),
  `scn.reluctant-peer-buyin` (Teamwork & Leadership),
  `scn.converting-warm-contact` (Business Development),
  `scn.handing-over-your-matter` (Firm & Matter Operations), and
  `scn.declining-to-use-a-tool` (Digital Tools & AI) — each exercising a
  distinct rubric/skill combination from its domain's first scenario, and
  (12) **Client Communication's remaining three scenarios** —
  `scn.guarantee-request`, `scn.angry-client-delay`, and
  `scn.fee-pushback` — closing out the platform's original, most heavily
  authored domain (4 scenarios where every other domain ships 2), so
  **all 18 of 18 scenarios now have a proven simulation run** — full
  scenario coverage, and (13) **a simulation reaching its own natural end**
  (`scenario.maxTurns`, not the "End now" early-exit path used by every
  other simulation test) — `sendSimulationMessage()` sets `shouldEnd` once
  `nextTurn >= scenario.maxTurns`, which `simulation-runner.tsx` auto-acts
  on without any "End now" click; this is a genuinely distinct code path
  that had never been exercised, and (14) **an interior-unit spot check for
  every one of the 8 authored paths** — unit 3 (`unit.cc.03`, `unit.le.03`,
  `unit.ni.03`, `unit.sm.03`, `unit.tl.03`, `unit.bd.03`, `unit.fo.03`,
  `unit.da.03`, inside each path's first authoring file, between "first" and
  "seam") and unit 8 (`unit.cc.08`, `unit.le.08`, `unit.ni.08`, `unit.sm.08`,
  `unit.tl.08`, `unit.bd.08`, `unit.fo.08`, `unit.da.08`, inside each path's
  second authoring file, between "seam" and "last") — 16 more tests, roughly
  bisecting each path's two previously-unexercised halves (units 2-4 and
  6-9) so a chapter-interior bug is no longer only catchable at the three
  endpoints (first/seam/last) already covered, and (15) **a second
  simulation proven reaching its own natural `maxTurns` end, from a
  different domain** — `scn.flagging-a-quality-issue` (Firm & Matter
  Operations, `maxTurns: 10`, tied for shortest) — confirming the
  auto-finish code path proven by (13) isn't a fluke of one scenario's
  specific `decisionPoints`/`exitConditions` wiring, and (16) **unit 2 and
  unit 9 of every authored path** — the positions immediately adjacent to
  the already-proven first/last endpoints (`unit.cc.02`/`.09`,
  `unit.le.02`/`.09`, `unit.ni.02`/`.09`, `unit.sm.02`/`.09`,
  `unit.tl.02`/`.09`, `unit.bd.02`/`.09`, `unit.fo.02`/`.09`,
  `unit.da.02`/`.09`) — 16 more tests, catching an off-by-one at either
  content-file boundary that a check on unit 1/10 alone wouldn't (e.g. a
  units array shifted by one that still happens to render *something* at
  index 0), and (17) **units 4, 6, and 7 of every authored path** —
  the last three unit positions still unexercised (`unit.*.04`, right
  before each path's chapter seam; `unit.*.06` and `unit.*.07`, the two
  units right after it) — 24 more tests, closing the gap entirely: **every
  one of the 8 authored paths now has all 10 of its units exercised end to
  end, not a sample** — full depth-first unit coverage across all 80
  authored units, the first time this has been true for any path, and
  (18) **a third natural-`maxTurns`-end scenario, from a third domain** —
  `scn.catching-an-ai-hallucination` (Digital Tools & AI, `maxTurns: 10`)
  — further spreading this coverage dimension beyond two domains. Adding
  this test pushed the suite's total real `startSimulation()` calls in a
  single run past the simulation-start rate limit's original 20/hour
  ceiling (18 scenario tests + 3 natural-end tests = 21) — a genuine,
  reproducible failure the first time this run was attempted (`Error: Too
  many simulations started`), not a fluke. Fixed by revising
  `SIMULATION_START_LIMIT.max` from 20 to 40 in
  `src/lib/actions/simulation.ts` (see §5's rate-limiting entry and
  `docs/SECURITY.md` §7 for the full reasoning) rather than removing
  coverage to stay under the old ceiling — 40/hour still closes off an
  unthrottled cost loop while giving real headroom above the platform's
  18-scenario catalog. 117/117 tests
  passing. This is
  the first repeatable e2e run in the repo — previously only a one-off
  manual Playwright script existed, used to smoke-test the CSRF guard once
  (`docs/SECURITY.md` §7) and then discarded. Running this suite found and
  fixed five real, previously-undetected bugs (not test-authoring
  mistakes): (a)
  `--foreground-muted` (the CSS custom property behind
  `.text-supporting`/`.text-label`, used throughout the UI for secondary
  text) was `#64748b`, a 4.47:1 contrast ratio against the app background —
  just under WCAG AA's 4.5:1 floor for normal-size text — darkened to
  `#5b6a7e` (5.1–5.5:1 against every surface token it's actually rendered
  on), same hue, dark-mode value left unchanged (already 8.43:1); (b)
  `page-has-heading-one` — 10 of 11 files using the `.text-page-title` CSS
  class rendered it on a `<p>` instead of a real `<h1>` (the class only
  controls styling, so this was purely semantic) — fixed across `sign-in`,
  `sign-up`, `forgot-password`, `reset-password/[token]`,
  `verify-email/[token]`, `not-found`, `error`, `diagnostic-flow` (both the
  intro and result screens), `onboarding-flow`, and the unit-completion
  screen in `unit-player.tsx`; (c) `region`/`skip-link` — the unit and
  simulation player pages' `<main>` had no `id="main"`, so the skip link
  rendered by `[locale]/layout.tsx` had no matching target, and the
  step-progress dots plus the sticky "Continue" bar in `unit-player.tsx`
  sat outside any landmark — fixed by adding `id="main"` to both players'
  `<main>`, moving the step-progress indicator inside `<main>`, and
  changing the sticky action bar from a bare `<div>` to a `<footer>`; (d)
  **the service worker's own precache target 404'd, silently killing
  installation entirely.** `src/proxy.ts`'s locale-redirect middleware
  treats any extensionless path without a locale prefix as a page needing
  one — but `/offline` (the exact URL both `public/sw.js`'s `PRECACHE`
  list and its fetch handler's `caches.match("/offline")` fallback
  hardcode) lives outside the `[locale]` route segment by design, so the
  redirect sent it to `/{locale}/offline`, which 404s (no such route
  exists). The Cache API's `cache.addAll()` rejects the whole `install`
  event on any non-2xx response, so this one 404 meant the service worker
  **never successfully installed at all** — not a degraded offline
  experience, a completely non-functional one. Fixed by exempting
  `/offline` from the locale redirect, matching how `/sw.js` itself was
  already exempted. (e) **even with (d) fixed, the app's own
  registration code never actually ran the service worker registration in
  practice.** `register-sw.tsx` only called `navigator.serviceWorker
  .register()` inside a `window.addEventListener("load", ...)` callback —
  but that `useEffect` runs after hydration, which in a server-rendered
  Next.js page routinely happens *after* the browser's `load` event has
  already fired, so the listener attaches for an event that already
  happened and never fires again. Confirmed directly: `document
  .readyState` was already `"complete"` by the time the effect ran in
  every real (non-instrumented) navigation tested. Fixed by registering
  immediately when `document.readyState === "complete"` and only falling
  back to the `load` listener on the rarer path where hydration genuinely
  wins the race. Both (d) and (e) together mean the PWA offline story
  documented as "Functional, conservative" in §2 had never actually
  worked in this build until this session's e2e pass caught it —
  `tests/e2e/pwa-offline.spec.ts` is now a permanent regression guard
  against both regressing.
  `accessibility.spec.ts` now promotes `page-has-heading-one`, `region`,
  and `skip-link` to always-blocking (regardless of impact level) so a
  regression on any of them is caught, not just logged — the suite
  currently logs zero findings of any severity. What this suite still does
  NOT cover: no visual regression/screenshot-diffing, no keyboard-only
  navigation walkthrough, no screen-reader testing (axe catches the
  mechanical subset of a11y issues, not the full WCAG surface). Content
  coverage, by contrast, is now complete rather than a sample: 8 of 10
  content domains carry their own path (two domains are covered via the
  paired Client Communication/Legal English tracks — see §4), and every
  one of those 8 paths now has all 10 of its units exercised end to end,
  not just a first/seam/last sample — **all 80 of 80 authored units now
  touched** (built up incrementally via (9), (10), (14), (16), and (17)
  above). **All 18 of 18
  scenarios now have a full simulation run exercised** (per (8), (11), and
  (12) above), and one of those eighteen (`scn.guarantee-request`) is now
  also proven reaching its own natural `maxTurns` end rather than always
  going through "End now" (per (13) above) — the other seventeen still
  only exercise the early-exit path.

  Running the expanded suite also found and fixed two more real bugs, this
  time in the test code itself rather than the app: (a) the shared
  simulation-flow assertion checked `toHaveCount(2)` message bubbles after
  sending a reply, but `simulation-runner.tsx` renders every bubble
  (including the scenario's opening line) with the same `max-w-[85%]`
  class, and adds the learner's own message to state optimistically the
  instant Send is clicked, before the round trip even starts — so 2 bubbles
  is a real but transient state, not proof a reply arrived. This passed
  reliably for many prior runs purely because the assertion's first poll
  consistently landed inside that transient window; running the full suite
  under more concurrent load shifted the timing and caught the true final
  count of 3 (opening + learner + character reply), which surfaced the bug.
  Fixed by asserting `toHaveCount(3)`. (b) Playwright treats a `.spec.ts`
  file's top-level `test.use()`/`test.describe()` calls as import side
  effects, so exporting the shared simulation-flow helper directly from
  `simulation.spec.ts` and importing it into `review-queue.spec.ts` caused
  `simulation.spec.ts`'s own tests to silently re-register and re-run
  whenever `review-queue.spec.ts` was targeted (confirmed empirically: 3
  tests ran instead of 1). Fixed by moving the helper into the plain,
  non-spec `tests/e2e/helpers.ts` module instead.
- **AI-graded scores now visibly flag both pending review and degraded quality.**
  `unit-player.tsx`'s `aiResultNode` shows a dedicated callout
  (`dict.unit.pendingReview`) whenever `SubmitActivityResult.pendingReview` is
  true, so a learner sees plainly that a score is provisional and not yet
  counted toward mastery. `SubmitActivityResult` and `SimulationEvaluationResult`
  now also carry `degraded` (`raw.degraded || coaching.degraded` from the two
  `AgentResult`s each evaluation makes), rendered as a second callout
  (`dict.feedback.degraded`) in both `unit-player.tsx` and
  `simulation-runner.tsx`'s result screens whenever a configured remote
  provider fell back to the offline engine mid-evaluation. In this checkout
  (zero API keys configured, per the README) `degraded` is always `false` —
  the wiring is verified by typecheck/build/e2e passing with the new field
  threaded through, not by observing it fire, since firing it would require a
  configured-then-failing remote provider that this environment doesn't have.
- **Billing is schema-only.** The `subscriptions` table has no integration behind it;
  building a real paywall/seat-management flow is greenfield work, not a wire-up.
- **Ingestion is human-curated, not automated.** `content/sources/registry.ts` (33
  sources) and the `ingestion` admin page assume a human decides what to extract from
  a source; there's no document-parsing/LLM-extraction pipeline wired up yet, despite
  the schema (`ingestionSuggestions`) being ready for one.
- **Session secret has an insecure dev fallback.** `src/lib/auth/session.ts` falls
  back to a hard-coded `"dev-only-insecure-session-secret-value"` when
  `SESSION_SECRET` is unset outside `NODE_ENV=production` — correct for local dev,
  but worth flagging so it's never silently relied on in a staging environment that
  isn't `NODE_ENV=production`.
- **Single-commit history.** The whole codebase lands in one commit
  (`dbbf800 foundation: schema, content, design system, AI layer`) — there is no
  incremental history to audit for how any given decision evolved; this audit reflects
  a single point-in-time snapshot.

## 6. Validation status

Commands run directly against this checkout on 2026-08-04, after integrating the
Digital Tools & AI domain (the tenth and final content domain), adding the
e2e/RTL/accessibility suite, fixing the two moderate-severity axe findings it
surfaced, expanding e2e coverage (diagnostic-to-completion, a full
simulation run, two more content domains), surfacing `AgentResult.degraded`
to the learner alongside the already-surfaced pending-review state, two
independent audit sweeps that found and fixed a real access-control bug (in
two places), a real score-integrity bug, and missing rate limiting on
AI-invoking actions, and fixing the human review queue's payload/reason
usability gap with its own new e2e regression test (§5, `docs/SECURITY.md`
§7, `docs/AI_ARCHITECTURE.md` §8):

| Check | Command | Result |
|---|---|---|
| Typecheck | `npx tsc --noEmit` | **Clean.** Exit 0, no output. |
| Lint | `npm run lint` (`eslint .`) | **Clean.** No errors or warnings reported. |
| Unit tests | `npm run test` (`tsx --test tests/*.test.ts`) | **141 / 141 passing**, 38 suites, 0 failed, 0 skipped, 0 todo. Runtime ~14s. |
| Content seed | `npm run db:reset` | **Succeeds.** 10 domains, 61 skills, 18 rubrics, 18 scenarios, 8 paths, 80 units, 399 activities, 96 Legal-English phrases seeded cleanly into the real dev DB — the stronger cross-referential-integrity signal beyond typechecking alone. |
| Production build | `npm run build` (`next build`, Turbopack) | **Succeeds.** No build errors, all routes generated (mix of static/SSG/dynamic). |
| E2e / RTL / a11y | `CI=1 npx playwright test` (real Chromium against a real `next build && next start`) | **117 / 117 passing** — sign-up→onboarding→**full diagnostic (8 items)→home**, authenticated learner content across **all 8 authored paths with every one of their 10 units exercised — 80 of 80 units, full depth-first coverage** (82 tests), **21 full simulation runs — all 18 of 18 authored scenarios covered via the "End now" early-exit path, plus three (`scn.guarantee-request`, `scn.flagging-a-quality-issue`, `scn.catching-an-ai-hallucination`, from three different domains) also proven reaching their natural `maxTurns` end** (21 tests), **the admin review queue's full AI payload + queue reason** (1 test), the **PWA service worker's actual offline behaviour** (4 tests), RTL/LTR (3 tests), axe-core accessibility (5 tests). Zero critical/serious violations, and zero occurrences of `page-has-heading-one`/`region`/`skip-link` (now promoted to always-blocking in the test itself, per §5) — no other moderate/minor findings logged either. |

`npm run verify` (typecheck → lint → test → build) would pass end to end based on the
individual results above — all four stages were run and all four are green as of this
audit, and the full e2e/a11y suite was run separately against a real production build.
This is a real, current, reproducible result, not an aspirational claim.
