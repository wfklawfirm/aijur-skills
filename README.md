# AIJUR Professional Skills Lab

A mobile-first, Arabic-first (with full English support) platform that trains
lawyers and law students in professional, operational, and Legal English
communication skills — through original, scenario-based exercises and
AI-assisted (and fully offline-capable) simulation and feedback, not
recycled textbook chapters. All 10 competency domains now have real,
authored unit content across 8 learning paths.

This is a working MVP: real auth (with password reset and email
verification), a real learning engine with an evidence-based mastery
algorithm, a real AI evaluation pipeline with a non-model-dependent
verification layer, an application-level CSRF guard, and a real admin
Content Studio — all documented in [`docs/`](./docs) and grounded in a
141-test unit suite plus a real-browser e2e/RTL/accessibility suite
(`npm run test:e2e`).

## Quick start

Requirements: Node.js ≥ 20.11.

```bash
npm install
npm run setup      # creates the local SQLite DB and seeds content + demo accounts
npm run dev         # http://localhost:3000
```

Sign in with the seeded demo account:

- **Email:** `nour@demo.aijur.ai`
- **Password:** `AijurDemo2026!`

(`npm run db:seed` re-seeds without touching the DB file; `npm run db:reset`
wipes and rebuilds it from scratch. Both are idempotent — safe to re-run.)

## Validate before you trust it

```bash
npm run verify      # typecheck + lint + test + build, in that order
```

Individually: `npm run typecheck`, `npm run lint`, `npm run test`,
`npm run build`.

```bash
npm run test:e2e    # real Chromium against a real production build (Playwright)
```

Runs a real headless Chromium (see `playwright.config.ts` for the pinned
executable path this sandboxed environment expects) against a real
`next build && next start`, not `next dev` — dev mode's HMR was found to
race with the very first cold navigation under headless automation. Covers:
a full sign-up → onboarding → all 8 diagnostic items → `/home`, an
authenticated learner reaching real content across all 8 authored paths
with **every one of each path's 10 units exercised end to end — 80 of 80
authored units, full depth-first coverage, not a sample**, full
simulation runs for **all 18 of 18 authored scenarios**
(start → message → early-end → evaluation), plus three scenarios (from
three different domains) also driven to their own natural end
(`scenario.maxTurns`) rather than the "End now" early-exit path every
other simulation test uses, the admin human review
queue (a real queued evaluation's full AI payload and queue reason render,
not just a score badge), RTL/LTR layout direction for both locales,
axe-core accessibility scans (critical/serious severity gate, plus two
structural rules — `page-has-heading-one` and `region`/`skip-link` —
pinned to always-blocking after the real bugs they found were fixed), a
real keyboard-only navigation test (sign-in driven entirely via `Tab` and
keyboard input, no mouse events, catching a class of bug static a11y
analysis can't — a scrambled tab order or a mouse-only submit handler),
and the PWA service worker's actual offline behavior (registration, the
manifest, a previously-visited page staying readable offline, a
never-visited page falling back to `/offline`) — this last one found and
fixed two real bugs that meant the service worker had never actually
worked in this build at all (see `docs/PRODUCT_AUDIT.md` §5). 119/119 tests
passing. See `docs/PRODUCT_AUDIT.md` §5 for what it does and doesn't cover
yet.

## Project layout

```
content/        Authored curriculum — the source of truth for skills, units,
                 activities, scenarios, rubrics, and the 33-source reference
                 library. See content/AUTHORING_BRIEF.md before adding content.
src/app/        Next.js App Router routes. (app)/[locale]/ is the real app;
                 (offline)/ is the minimal PWA offline-fallback shell.
src/lib/        Server actions, the learning engine (mastery/review/grading),
                 the AI provider + agents + safety layer, auth/RBAC, i18n, DB.
src/components/ The UI component library and activity player.
docs/           Ten architecture docs — start with PRODUCT_AUDIT.md for an
                 honest "what's actually built" summary, then
                 PRODUCT_ARCHITECTURE.md for the system map.
tests/          Unit tests for the mastery algorithm, review scheduler,
                 grading, the AI evidence-verification safety layer, RBAC,
                 and i18n dictionary parity. tests/e2e/ has the real-browser
                 Playwright suite (npm run test:e2e) — separate from the
                 unit suite (npm run test), which never touches a browser.
scripts/seed.ts  Idempotent content + demo-account seeder.
```

## Documentation

Read [`docs/PRODUCT_AUDIT.md`](./docs/PRODUCT_AUDIT.md) first — it states
plainly what's built and what's deferred. All 10 of 10 domains now have real
unit content across 8 paths — Client Relations, Communication, Professional
Judgment & Ethics, Legal English, Negotiation & Influence, Self-Management,
Teamwork & Leadership, Business Development, Firm & Matter Operations, and
Digital Tools & AI. What's still deferred is depth (one path per domain, not
several) and human SME review (every skill is still `reviewStatus:
ai_suggested` — see the audit for what that means). Then:

| Doc | Covers |
|---|---|
| [`PRODUCT_ARCHITECTURE.md`](./docs/PRODUCT_ARCHITECTURE.md) | System map, route structure, Server Actions, content-as-database pattern |
| [`MOBILE_UX_ARCHITECTURE.md`](./docs/MOBILE_UX_ARCHITECTURE.md) | Navigation, accessibility, RTL/LTR, offline UX |
| [`LEARNING_ARCHITECTURE.md`](./docs/LEARNING_ARCHITECTURE.md) | The mastery algorithm, spaced/interleaved review, activity grading |
| [`LEGAL_ENGLISH_ARCHITECTURE.md`](./docs/LEGAL_ENGLISH_ARCHITECTURE.md) | The Legal English track and the no-accent-assessment guarantee |
| [`AI_ARCHITECTURE.md`](./docs/AI_ARCHITECTURE.md) | The AI provider layer, offline fallbacks, the evidence-verification safety layer |
| [`DATA_MODEL.md`](./docs/DATA_MODEL.md) | The full Drizzle schema, table-by-table |
| [`DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) | Design tokens, component library |
| [`CONTENT_INGESTION.md`](./docs/CONTENT_INGESTION.md) | Source library, authoring pipeline, human-review gates |
| [`SECURITY.md`](./docs/SECURITY.md) | Threat model, auth, RBAC, tenant isolation, known gaps |

## Notes on the AI layer

Every AI-backed feature (simulation, evaluation, coaching) has a
deterministic offline implementation with an identical output shape, so the
app is fully functional with **zero API keys configured**. To use a real
model, set provider credentials via environment variables (see
`src/lib/ai/provider.ts`); nothing else changes.

## Notes on the database

Local dev uses a file-based SQLite DB at `data/aijur.db` (created by
`npm run setup`, gitignored). Production points `DATABASE_URL` at a
Turso/libSQL host instead — that's an environment-variable change, not a
code change.
