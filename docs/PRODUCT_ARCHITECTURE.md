# Product Architecture

AIJUR Professional Skills Lab is a mobile-first, Arabic-first bilingual (AR/EN)
SaaS platform that trains lawyers and law students in professional,
operational and Legal English skills. This document is the top-level map of
the system: request flow, route structure, the Server Actions pattern, the
content-as-database pattern, and how the pieces fit together. It links out to
nine sibling docs for anything deeper than "where does this live and why."

Stack, as declared in `package.json`: Next.js `16.2.12` (App Router,
Turbopack), React `19.2.8`, TypeScript (strict), Tailwind v4, Drizzle ORM
`0.44` over `@libsql/client` `0.15` (Turso-compatible libSQL/SQLite), Zod
`4.1`. No separate API framework, no ORM-agnostic REST layer, no state
management library — `src/app/api/` exists as an empty directory reserved for
future webhooks/integrations but is unused by the app itself today.

## 1. System overview

Everything a learner does goes through one path: the App Router renders
Server Components, and mutations run as Server Actions in the same process —
there is no separate backend service or REST API to keep in sync.

```
┌─────────────┐   HTTPS    ┌───────────────────────────────────────────────┐
│   Browser    │ ─────────▶│  proxy.ts (locale detect/redirect)            │
│ (RSC + SW)   │            └───────────────────────────────────────────────┘
│              │                          │
│  Client       │  Server Components (RSC): read-only page renders         │
│  Components   │◀─────────────────────────────────────────────────────────│
│  ("use       │            │
│   client")   │  Server Actions ("use server"): form submits, mutations   │
│              │ ─────────▶ │  src/lib/actions/*.ts                        │
└──────┬───────┘            │        │
       │                    │        ▼
       │ navigator.onLine   │  ┌──────────────────────┐   ┌───────────────┐
       │ + Service Worker   │  │ Drizzle ORM           │   │ AI provider    │
       │ (shell/page cache, │  │  → @libsql/client      │   │ layer          │
       │  never caches API) │  │  → data/aijur.db (dev) │   │ (side system)  │
       └────────────────────┘  │    or Turso (prod)     │   │ src/lib/ai/*   │
                                └──────────────────────┘   └───────┬────────┘
                                                                     │
                                                          offline / anthropic /
                                                          openai providers,
                                                          every call logged to
                                                          `ai_model_runs`
```

Request flow in words:

1. Every request hits `src/proxy.ts` first (Next.js 16's replacement for the
   deprecated `middleware.ts` convention), which resolves the locale and
   redirects unprefixed paths to `/{locale}/...`.
2. Pages under `src/app/(app)/[locale]/**` are React Server Components by
   default — they call `src/lib/content/service.ts` and Drizzle queries
   directly, no fetch/JSON round trip.
3. Interactive pieces are `"use client"` components. When a learner submits a
   form, completes an activity, or an admin publishes content, the client
   calls a function from `src/lib/actions/*.ts` (`"use server"`) directly —
   Next.js turns that into an RPC-style POST under the hood, but there is no
   hand-written route, request parsing, or response shape to maintain.
4. Actions that need judgment beyond deterministic grading (simulation
   turns, written-response evaluation, coaching feedback) call into
   `src/lib/ai/agents/*`, which sits behind the provider abstraction in
   `src/lib/ai/provider.ts`. This is the one place the app talks to an
   external system; see `AI_ARCHITECTURE.md`.
5. The service worker (`public/sw.js`) is a second, entirely client-side path
   that never touches this flow for data — it only caches navigations and the
   static shell so a previously opened page stays readable offline.

## 2. Why this stack

- **App Router (RSC + Server Actions) instead of a separate API layer.**
  Content pages, progress dashboards and the admin console are almost all
  read-heavy and benefit from server rendering; the write paths (activity
  submission, onboarding, publishing) are few enough and tied closely enough
  to specific pages that hand-authoring a REST/GraphQL layer would just be a
  second copy of the same validation and query logic. Server Actions
  (`"use server"` functions in `src/lib/actions/*.ts`) are called directly
  from client components, so there's one function signature, one place for
  auth/validation, and no client-side fetch wrapper to keep in sync.
- **libSQL/Turso over local Postgres.** `@libsql/client` with a `file:` URL
  gives zero-setup local dev (`npm run setup` and the app runs against
  `data/aijur.db`) while remaining wire-compatible with a managed Turso (or
  self-hosted `sqld`) endpoint via `DATABASE_URL`/`DATABASE_AUTH_TOKEN` — see
  `src/lib/db/index.ts`. Moving to a managed host is an env-var change, not a
  rewrite. Full schema and the documented Postgres migration path live in
  `DATA_MODEL.md`.
- **Zod v4 at every trust boundary.** Server Actions parse `FormData` or
  plain objects with a `z.object(...)` schema before touching the database
  (see `signInSchema`/`signUpSchema` in `src/lib/actions/auth.ts`, or the
  `onboardingSchema` in `src/lib/actions/onboarding.ts`). The AI provider
  layer does the same on the *response* side — every agent call declares a
  `schema: z.ZodType<T>` that the model's output must satisfy before it's
  trusted (`src/lib/ai/provider.ts`).

## 3. Route structure

`src/app/` has two route groups, each its own root layout — a requirement in
Next.js 16, which allows exactly one `<html>`/`<body>` root per unshared part
of the tree:

- **`(app)/[locale]/`** — the real application. Its `layout.tsx` renders the
  `<html lang dir>` shell with locale-specific fonts (Inter for Latin, Noto
  Kufi Arabic for Arabic script), mounts `I18nProvider` and
  `ConnectivityProvider`, registers the service worker, and adds a skip link.
  Every real page lives under the `[locale]` dynamic segment so direction,
  fonts and dictionary are resolved once at the layout, never guessed
  per-component. `generateStaticParams` pre-renders both `ar` and `en`.
- **`(offline)/offline/`** — a second, independent root, deliberately minimal:
  a hardcoded `<html lang="ar" dir="rtl">` with no providers, no fonts, no JS
  dependency. It's the service worker's fallback navigation target
  (`public/sw.js` serves `/offline` when a navigation fetch fails), so it has
  to render with zero network calls and can't depend on anything the
  `(app)` root sets up.

Full page list under `(app)/[locale]/`:

| Route | Purpose |
|---|---|
| `/` (`page.tsx`) | Locale-aware landing/redirect |
| `/sign-in`, `/sign-up` | Auth forms (Server Actions in `actions/auth.ts`) |
| `/onboarding` | Profile setup + placement diagnostic |
| `/diagnostic` | Standalone diagnostic flow |
| `/home` | Learner dashboard / "continue" surface |
| `/learn`, `/learn/[slug]` | Path catalogue and path detail |
| `/unit/[unitId]` | Unit player (activities) |
| `/practice` | Practice hub |
| `/simulation/[scenarioId]` | AI-driven roleplay simulation |
| `/progress` | Mastery/progress dashboards |
| `/profile` | Account, accessibility, consent, data export |
| `/admin` and `/admin/{ingestion,review-queue,rubrics,scenarios,skills,sources,units}` | Content Studio: review gates, publishing, source ingestion review |

`src/app/(offline)/offline/page.tsx` is the only page outside `[locale]`; it
hardcodes Arabic copy with an English line beneath it rather than resolving a
dictionary, since it must not depend on the i18n provider tree.

## 4. Server Actions, not REST

Every mutation is a `"use server"` async function in `src/lib/actions/`,
called directly from a client component (form `action=` prop, or invoked
imperatively from an event handler). There is no `fetch('/api/...')`
anywhere in the mutation path. Representative examples:

- **`submitActivity` (`src/lib/actions/progress.ts`)** — the core learning
  loop. Deterministic activity kinds are graded, recorded and folded into
  mastery in one round trip; written kinds (`short_written`, `email_rewrite`)
  are sent to the Evaluation Agent, run through a verification layer that
  checks every quoted score against the learner's actual text, coached, and
  only the *verified* result updates mastery/evidence/review-schedule. One
  function owns the whole state transition instead of a client orchestrating
  several endpoint calls.
- **`startSimulation` / `sendSimulationMessage` / `finishSimulation`
  (`src/lib/actions/simulation.ts`)** — a stateful AI roleplay conversation
  modeled as a sequence of direct action calls against a
  `simulationSessions`/`simulationMessages` pair of tables, rather than a
  session managed by an external chat API.
- **`publishEntity` / `unpublishEntity` / `decideGate`
  (`src/lib/actions/admin.ts`)** — Content Studio's publish pipeline. Gating
  is enforced server-side (`GATES = ["sme", "learning_design",
  "legal_english", "language", "accessibility", "qa"]`); an entity can't be
  published until every required gate is approved, and unpublishing is a
  direct status flip that the content service layer immediately respects
  (see §5) — no cache to bust, no deploy to trigger.

Auth and authorization are enforced inside the action, not the UI:
`requireUser()` (`src/lib/auth/session.ts`) resolves the caller from the
session cookie, and `src/lib/auth/rbac.ts` defines a closed `Permission` union
checked via `require_(...)`. Full model in `SECURITY.md`.

## 5. Content-as-database pattern

This is the platform's most distinctive architectural choice. Authored
content — domains, skills, paths, chapters, units, activities, scenarios,
rubrics, diagnostics — is written as typed TypeScript under `/content`
(`content/paths/`, `content/scenarios/`, `content/framework/`,
`content/diagnostics.ts`, validated against `content/types.ts`). That is the
**authoring source of truth** and the seed input (`npm run db:seed`).

The running app never imports from `/content`. Every page and action reads
content exclusively through `src/lib/content/service.ts`, which queries the
corresponding Drizzle tables (`domains`, `skills`, `paths`, `chapters`,
`units`, `activities`, `scenarios`, `rubrics`, `diagnostics` in
`src/lib/db/schema.ts`) and returns the same typed shapes
(`DomainDef`, `SkillDef`, `PathDef`, `UnitDef`, `Activity`, `ScenarioDef`,
`RubricDef`, `DiagnosticDef`). Each row stores its payload as a `data` JSON
column plus a `status` (`"published"` or otherwise); reads generally filter
`eq(status, "published")`.

Why this matters: **Content Studio (the `/admin` pages) publishes and
unpublishes by flipping that `status` column** — no redeploy, no rebuild,
because the app was never reading the TypeScript files at runtime. A reviewer
approving the last gate on a unit and clicking publish makes it live for
learners on the next request. Functions are wrapped in React's `cache()` so
repeated calls within one request/render dedupe automatically; there's no
cross-request cache to invalidate on publish because content changes
infrequently and each query is already cheap.

This pattern is documented further, including the ingestion pipeline that
proposes new content into this same table structure, in
`CONTENT_INGESTION.md`.

## 6. Multi-tenancy

Organizations are a first-class entity (`organizations` table in
`src/lib/db/schema.ts`), with `memberships` joining users to organizations
under an org-scoped role (`owner`, `admin`, `manager`, `author`, `member` —
see `src/lib/auth/rbac.ts`'s `ORG_ROLE_PERMISSIONS`), separate from a user's
platform-wide `systemRole` (`learner`, `author`, `reviewer`, `admin`).
Org-scoped tables (`assignments`, `certificates`, `subscriptions`,
`analytics_events`, `audit_log`, `ai_model_runs`) carry an `organization_id`
column so law-firm/institution deployments can assign paths, run cohort
reporting, and bill per-organization independently of the individual-learner
flows. The full table design and the row-level access rules that enforce
tenant isolation are in `DATA_MODEL.md` and `SECURITY.md` — this section is
only the "how the concept fits into the app" summary.

## 7. PWA / offline

`public/manifest.webmanifest` declares a standalone, portrait, RTL-capable
PWA (`dir: "auto"`, `lang: "ar"`) with shortcuts into `/ar/home` and
`/ar/practice`. `public/sw.js` follows two deliberately conservative rules:
it **never caches an API response** (progress, mastery and evaluations are
the record of a learner's performance — serving a stale one is worse than an
error; mutations queue in IndexedDB client-side instead), and it **does**
cache the app shell (`/_next/static`, `/icons/`) and previously visited
navigations, falling back to `(offline)/offline` when a navigation fetch
fails offline. `next.config.ts` explicitly sets `Cache-Control: no-cache` on
`/sw.js` so updates propagate promptly. `ConnectivityProvider`
(`src/components/providers.tsx`) exposes `navigator.onLine` as `useOnline()`
for UI to react to connectivity without polling. The learner-facing UX
consequences (what stays usable offline, resume behavior, install prompts)
are covered in `MOBILE_UX_ARCHITECTURE.md`.

## 8. Directory layout

```
src/
  proxy.ts                 Locale detection/redirect (Next 16 middleware replacement)
  app/
    (app)/[locale]/        Main application root — real <html>, providers, all real pages
      admin/                Content Studio (review gates, publish, ingestion review)
      learn/, unit/, simulation/, practice/, progress/, profile/, onboarding/, diagnostic/
      sign-in/, sign-up/
    (offline)/offline/     Minimal PWA offline-fallback root — separate <html>, no JS deps
    api/                    Reserved, currently empty (no REST layer in use)
    globals.css             Tailwind v4 entry + design tokens
  components/
    providers.tsx           I18nProvider, ConnectivityProvider, PreferencesEffect
    layout/, ui/, activities/, learning/
  lib/
    actions/                 Server Actions — the only mutation entry point (see §4)
    ai/
      provider.ts             Provider abstraction (offline/anthropic/openai), call logging
      agents/                  simulation.ts, evaluation.ts, coaching.ts
      schemas.ts               Zod schemas for agent I/O
    auth/                     session.ts, rbac.ts (Permission model), password.ts
    content/
      service.ts               DB-backed content reads — the content-as-database layer (§5)
    db/
      index.ts                 libSQL/Drizzle client (see §2, DATA_MODEL.md)
      schema.ts                 Full Drizzle schema
    i18n/                     Locale config, dictionaries (ar/en)
    learning/                 Mastery model, grading, spaced-review scheduling
    analytics/                 Event tracking helpers
    utils.ts

content/                   Authoring source of truth (seeds the DB — see §5)
  types.ts                  Zod/TS types every content file is validated against
  framework/                Domains, skills, rubrics
  paths/                    Paths, chapters, units, activities
  scenarios/                 Simulation scenarios
  sources/                   Ingestion source material
  diagnostics.ts             Placement diagnostic
  index.ts                   Aggregation entry point used by `npm run db:seed`

docs/                      This doc and its siblings (DATA_MODEL.md, AI_ARCHITECTURE.md,
                            DESIGN_SYSTEM.md, SECURITY.md, LEARNING_ARCHITECTURE.md,
                            MOBILE_UX_ARCHITECTURE.md, LEGAL_ENGLISH_ARCHITECTURE.md,
                            CONTENT_INGESTION.md)
```

## See also

- `DATA_MODEL.md` — full Drizzle schema, libSQL↔Postgres migration path, tenant/row design
- `AI_ARCHITECTURE.md` — provider abstraction, agents, offline-first grading, prompt/eval logging
- `SECURITY.md` — RBAC/permission model, session handling, tenant isolation, AI consent
- `LEARNING_ARCHITECTURE.md` — mastery model, grading, spaced review
- `MOBILE_UX_ARCHITECTURE.md` — offline UX, install/PWA behavior, mobile-first layout
- `DESIGN_SYSTEM.md` — Tailwind v4 tokens, RTL/LTR handling, typography
- `LEGAL_ENGLISH_ARCHITECTURE.md` — legal English skill track specifics
- `CONTENT_INGESTION.md` — source ingestion pipeline feeding Content Studio
