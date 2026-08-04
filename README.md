# AIJUR Professional Skills Lab

A mobile-first, Arabic-first (with full English support) platform that trains
lawyers and law students in professional, operational, and Legal English
communication skills — through original, scenario-based exercises and
AI-assisted (and fully offline-capable) simulation and feedback, not
recycled textbook chapters.

This is a working MVP: real auth (with password reset and email
verification), a real learning engine with an evidence-based mastery
algorithm, a real AI evaluation pipeline with a non-model-dependent
verification layer, an application-level CSRF guard, and a real admin
Content Studio — all documented in [`docs/`](./docs) and grounded in a
130-test unit suite.

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
                 and i18n dictionary parity.
scripts/seed.ts  Idempotent content + demo-account seeder.
```

## Documentation

Read [`docs/PRODUCT_AUDIT.md`](./docs/PRODUCT_AUDIT.md) first — it states
plainly what's built, what's deferred, and what the real content coverage is
(8 of the 10 domains have real unit content across six paths — Client
Relations, Communication, Professional Judgment & Ethics, Legal English,
Negotiation & Influence, Self-Management, Teamwork & Leadership, and Business
Development; the other 2 (Firm & Matter Operations, Digital Tools & AI) are
framework-only: skills and mastery levels are defined, but no units have been
written against them yet). Then:

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
