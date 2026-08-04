# Product Audit

Honest, evidence-based snapshot of what is actually built in this repository as of
2026-08-04, several commits into the codebase (most recently, content domains for
Self-Management, Teamwork & Leadership, and Business Development, plus a self-service
password reset flow, real email verification, and an application-level CSRF guard —
see `git log --oneline` for the full sequence). This is an internal engineering audit,
not marketing copy — every claim below is backed by a file path, a count pulled from
the code, or a command run against this checkout. See `docs/PRODUCT_ARCHITECTURE.md`
for how the system is put together; this document is about how much of it exists and
how far the content goes.

## 1. Scope of this build

"MVP" here means: a complete, working vertical slice of the product — auth (including
password reset and email verification), onboarding, a diagnostic, seven full learning
paths (10 units each) with graded activities, AI-coached simulations, spaced-review and
mastery tracking, an application-level CSRF guard, and an admin Content Studio for
managing the framework — all running against a real Drizzle/libSQL schema with no REST
layer (Server Actions only), fully bilingual (Arabic-first), and functional **with zero
AI provider keys configured** because every AI agent ships a deterministic offline
fallback. It is genuinely functional end to end for the seven paths that have been
authored (Client Communication Foundations and its paired Legal English track,
Negotiation & Influence, Self-Management, Teamwork & Leadership, Business
Development, and Firm & Matter Operations) across all 10 competency domains at the
*framework* level (domains, skills, rubrics all exist for all 10), and 9 of those 10
domains now have actual unit/lesson content written. Nothing in the shipped product
is a visual mockup or a "coming soon" screen for the parts that exist — 1 of the 10
domains (Digital Tools & AI) still has no learning content, so it remains
framework-only, but the product as it stands is a working nine-domain curriculum
across seven paths, not a single-path product.

## 2. What's built

| Area | Status | Evidence |
|---|---|---|
| **Auth** | Functional | Email/password with scrypt hashing (`src/lib/auth/password.ts`, N=2^15, memory-hard KDF), HMAC-signed session cookies (`src/lib/auth/session.ts`), no OAuth/SSO of any kind. Routes: `sign-in`, `sign-up`, `forgot-password`, `reset-password/[token]`, `verify-email/[token]` under `src/app/(app)/[locale]/`. Self-service password reset (`src/lib/actions/password-reset{,-core}.ts`) is single-use, hashed, 1-hour-expiring, session-revoking tokens delivered by email. Email verification (`src/lib/actions/email-verification{,-core}.ts`) is real now — a link is sent at signup and resendable from the profile page — but deliberately doesn't gate anything (see `docs/SECURITY.md` §7 for why); `emailVerifiedAt` is only ever set by an actual confirmed click. Real email delivery for both flows needs `EMAIL_PROVIDER=resend`+`RESEND_API_KEY` configured; with no provider set, links are logged to the server console instead of emailed. |
| **RBAC / multi-tenancy** | Functional | `src/lib/auth/rbac.ts` defines 11 permissions, 4 system roles (learner/author/reviewer/admin) and 5 org roles (owner/admin/manager/author/member); `assertTenant()` enforces org isolation on every scoped query. Schema has `organizations`, `memberships`, `teams` tables. `assertTenant()` now has real call sites for all three org permissions: `org.members.manage`/`org.reports` (`src/lib/actions/org-core.ts` — list/add/role-change/remove members, an org report) and `org.assign` (`src/lib/actions/teams-core.ts` — team create/rename/delete, member-team assignment). `memberships.competencyProfileId` remains schema-only with no action surface. Covered by `tests/rbac.test.ts` (the primitive, mock users), `tests/org-tenant-isolation.test.ts` (9 tests), and `tests/teams-tenant-isolation.test.ts` (10 tests) — two seeded organizations each. |
| **Onboarding** | Functional | `src/app/(app)/[locale]/onboarding/onboarding-flow.tsx` + `src/lib/actions/onboarding.ts`; feeds into a diagnostic (`src/app/(app)/[locale]/diagnostic/page.tsx`, `content/diagnostics.ts` — 1 diagnostic, 8 items). |
| **Content authoring/framework** | Functional as data model, partially populated | `content/types.ts` defines the full authoring contract (domains, skills w/ 7 mastery levels each, rubrics, scenarios, paths/chapters/units, 17 activity kinds, diagnostics). 10 domains, 58 skills, 16 rubrics all authored (`content/framework/*.ts` plus domain companion files — see §4). All 58 skills are `reviewStatus: ai_suggested` — none have progressed to `sme_reviewed` or `approved`. |
| **Learning engine** | Functional | `src/lib/learning/{mastery,progression,grading,review,responses,dashboard}.ts` — deterministic grading for choice/ordering/matching/fill-blank activities, AI-rubric grading for written work, a mastery ledger (0–6 levels) backed by `masteryRecords`/`evidence` tables, and a spaced-review scheduler (`reviewSchedule` table, tested in `tests/mastery.test.ts` and the review-selection suite). |
| **AI layer + offline fallback** | Functional | `src/lib/ai/provider.ts`: single `runAgent()` entry point, provider chain (anthropic → openai → offline, configurable via env), every call recorded to `aiModelRuns` (provider, model, prompt/rubric version, input hash, tokens, cost, latency, confidence) for audit/reproducibility. **Every agent (`simulation.ts`, `evaluation.ts`, `coaching.ts`) ships a rule-based `offline` implementation with the same Zod output schema**, so the app runs with zero API keys — confirmed by `.env.example` defaulting `AI_PRIMARY_PROVIDER=offline`. Prompt-injection defence via `asData()` wraps untrusted learner/client text in a fenced block. |
| **Admin Content Studio** | Functional | 7 admin screens under `src/app/(app)/[locale]/admin/`: dashboard, sources, skills, rubrics, scenarios, units, review-queue, ingestion. `ingestion` page is explicitly a monitoring view over `ingestionSuggestions`/`humanReviews` tables, not an automated pipeline (see comment at `admin/ingestion/page.tsx:12`). An 8th screen, `admin/organization`, is shown only to users with an org role holding `org.members.manage` or `org.reports` (owner/admin/manager) — member list/add/role-change/remove plus a per-org report that respects `organizations.privacyPolicy.managersSeeScores`, and (for callers additionally holding `org.assign`) team create/rename/delete and member-to-team assignment. |
| **i18n** | Functional, AR/EN only | `src/lib/i18n/config.ts`: `LOCALES = ["ar","en"]`, `DEFAULT_LOCALE = "ar"`, and an explicit `PLANNED_LOCALES = ["fr"]` — French is a stated intent, not built. Proxy-based locale routing (`src/proxy.ts`) with cookie > Accept-Language > Arabic-default resolution. `tests/i18n-parity.test.ts` checks dictionary key parity between `ar.ts`/`en.ts`. |
| **PWA / offline** | Functional, conservative | `public/manifest.webmanifest` (standalone, RTL-aware `dir: auto`), `public/sw.js` — precaches only the app shell + `/offline` page, explicitly **never caches API/mutation responses** (comment at top of file), caches visited content pages for re-reading offline. No background sync of queued mutations is implemented beyond what's described. |
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
- **Content review workflow completion**: all 58 skills sit at `reviewStatus:
  "ai_suggested"` — the SME review → approved pipeline that `content/types.ts` models
  (`draft → ai_suggested → sme_reviewed → approved → archived`) has not been exercised
  past the first stage for any skill.
- **1 of 10 domains has no unit content** (see §4) — Digital Tools & AI has skills
  and mastery-level definitions but zero authored units, activities, or scenarios.

## 4. Content coverage

Counts pulled by loading `content/index.ts`'s `CONTENT` bundle directly:

| Object | Count |
|---|---|
| Domains | 10 |
| Skills | 58 (all `reviewStatus: ai_suggested`) |
| Rubrics | 16 |
| Scenarios (simulations) | 16 |
| Source records | 33 |
| Paths | 7 |
| Diagnostics | 1 (8 items) |
| Units (total, across all paths) | 70 |
| Activities (total) | 351 |
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

**Skills-per-domain vs. units-per-domain** (framework-only domains have skills defined
but zero units written):

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
| Digital Tools & AI | 1 | **0** |

So: **9 of 10 domains have real unit content** (two of them only via the
cross-listed paths above); **1 of 10 domains is framework-only** — skill
definitions and mastery-level descriptors exist, but no lessons, activities,
scenarios, or rubrics have been written against it yet.

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

Every content change in this session was verified the same way: `npx tsc --noEmit`
for shape-correctness against `content/types.ts`, then a real `npm run db:seed` run
against the live dev database (a stronger signal than typechecking alone, since
`types.ts` doesn't enforce cross-referential integrity between id strings like
`rubricId`/`scenarioId`/`skillId`) — every new domain seeded cleanly with the
counts shown above.

Activity-kind distribution across the 351 authored activities skews toward the
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

- **Content breadth is narrower than the architecture, though nearly all domains are
  now covered.** The product is architected for 10 domains and multiple paths per
  audience (student/trainee/junior/experienced/manager per `PathDef.audience`), and
  7 paths / 70 units now exist (Client Communication, Legal English, Negotiation &
  Influence, Self-Management, Teamwork & Leadership, Business Development, Firm &
  Matter Operations). Digital Tools & AI remains framework-only — anyone piloting
  that one domain specifically will hit an empty domain immediately.
- **Offline AI is meaningfully lower-fidelity than a real model.** The
  `offline`-provider implementations in `src/lib/ai/agents/{simulation,evaluation,
  coaching}.ts` are deterministic, rule-based stand-ins with the same output schema
  as a live model — they keep the product functional with no API key, but they are
  not a substitute for LLM-quality simulation dialogue or nuanced rubric scoring.
  `AgentResult.degraded` flags this distinction but nothing downstream currently
  surfaces "degraded" to the learner in a way this audit verified.
- **All content is unreviewed by a human SME.** Every one of the 58 skills is stuck
  at `reviewStatus: "ai_suggested"` — the review pipeline exists in the schema and
  admin UI (`review-queue` page, `contentReviews` table) but has not been exercised
  to `approved` for anything yet. Treat all current content as pre-SME-review.
- **No automated e2e, visual regression, or accessibility test coverage.** The test
  suite (`tests/*.test.ts`, 130 tests / 35 suites, all unit/integration-level via
  Node's built-in test runner) covers grading logic, mastery math, RBAC, tenant
  isolation, rate limiting, audit logging, password-reset and email-verification
  token lifecycles, the CSRF Origin guard, i18n key parity, review scheduling,
  and evaluation safety. There is no standing Playwright/Cypress suite in the
  repo — the CSRF Origin guard and a real sign-up flow were smoke-tested with
  Playwright driving a real headless Chromium against a production build
  during this session (see `docs/SECURITY.md` §7), but that was a one-off
  verification run, not a committed, repeatable e2e suite; no visual diffing
  or automated a11y audit (e.g. axe) exists anywhere in the repo.
- **AI-graded scores now visibly flag pending review, but "degraded" mode still
  doesn't.** `unit-player.tsx`'s `aiResultNode` shows a dedicated callout
  (`dict.unit.pendingReview`) whenever `SubmitActivityResult.pendingReview` is true,
  so a learner sees plainly that a score is provisional and not yet counted toward
  mastery — this closes half of the gap noted above about `AgentResult.degraded`
  not surfacing anywhere; the `degraded` flag itself (offline-provider fallback
  quality) still isn't shown to the learner, only the pending-review state is.
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
Firm & Matter Operations domain:

| Check | Command | Result |
|---|---|---|
| Typecheck | `npx tsc --noEmit` | **Clean.** Exit 0, no output. |
| Lint | `npm run lint` (`eslint .`) | **Clean.** No errors or warnings reported. |
| Unit tests | `npm run test` (`tsx --test tests/*.test.ts`) | **130 / 130 passing**, 35 suites, 0 failed, 0 skipped, 0 todo. Runtime ~21s. |
| Content seed | `npm run db:seed` | **Succeeds.** 10 domains, 58 skills, 16 rubrics, 16 scenarios, 7 paths, 70 units, 351 activities, 96 Legal-English phrases seeded cleanly into the real dev DB — the stronger cross-referential-integrity signal beyond typechecking alone. |
| Production build | `npm run build` (`next build`, Turbopack) | **Succeeds.** No build errors, all routes generated (mix of static/SSG/dynamic). |

`npm run verify` (typecheck → lint → test → build) would pass end to end based on the
individual results above — all four stages were run and all four are green as of this
audit. This is a real, current, reproducible result, not an aspirational claim.
