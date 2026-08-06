# Admin Dashboard — architecture reference

This document describes the subscriber/admin dashboard added on top of the
existing Content Studio app: what it is, how it's secured, how the
subscription/expiration logic works, and — explicitly — what is not yet
built. It complements `docs/SECURITY.md` §3.2 (permission model) rather than
repeating it; read that section first for the `platformRole` axis and its
two extra protections.

## 1. Why a second permission axis

The app already had two independent things named "role": `systemRole`
(Content Studio's learner/author/reviewer/admin) and `isPlatformOwner()` (a
single hardcoded email with account-lifecycle powers over every org). Neither
was the right fit for "runs the subscriber/billing side of the business":
folding it into `systemRole: "admin"` would have handed subscriber
management to every Content Studio admin, and folding it into
`isPlatformOwner()` would have kept it a single-person allowlist forever.

`users.platformRole: "super_admin" | "admin" | "support" | null` is the new,
third axis, additive with the other two (see `SECURITY.md` §3.2 for the
full permission matrix). The pre-existing `/admin/accounts` page (account
create/suspend/extend, gated on `isPlatformOwner()`) is untouched — it now
lives at the same URLs it always did, and `/admin/accounts` itself
redirects to `/admin/subscribers`, the new dashboard's home.

## 2. Routes

| Route | Purpose | Permission |
|---|---|---|
| `/admin` | Dashboard home — existing content KPIs plus new subscriber KPI cards | existing gate (unchanged) |
| `/admin/subscribers` | List, search, filter, paginate subscribers; CSV export | `subscribers.read` |
| `/admin/subscribers/new` | Create a subscriber (account + subscription in one transaction) | `subscribers.write` |
| `/admin/subscribers/[id]` | Detail: account, subscription, learning-progress summary, history, notes, all mutating actions | `subscribers.read` (write actions individually gated) |
| `/admin/plans` | Create/edit subscription plans | `plans.manage` |
| `/admin/admins` | List admins, change `platformRole` | `admins.manage` |
| `/admin/activity` | Audit log viewer | `audit.read` |
| `/admin/settings` | Platform-wide admin settings (e.g. renewal contact info shown on the "subscription ended" screen) | `settings.manage` |
| `/subscription-ended` | Learner-facing screen when a subscription blocks content | any signed-in user whose subscription currently blocks them (self-service, not admin-gated) |

Every admin page uses a `require*OrRedirect()` helper from
`admin/_lib/guard.ts` for the UX redirect, and every underlying mutation
independently re-checks permissions inside `subscribers-core.ts` — see
`SECURITY.md` §3.2 for why the core file, not the page guard, is the real
boundary.

## 3. Data model (new/changed tables — `src/lib/db/schema.ts`)

- **`users.platformRole`** — the new axis (§1).
- **`profiles`**: `phone`, `firmOrOffice`, `jobTitle`, `tags` (json array) —
  subscriber-facing metadata that didn't previously exist.
- **`organizations`**: `seats`, `seatsUsed`, `groupSubscriptionStartAt/EndAt`,
  `internalNotes` — schema for group/org subscriptions (§7 — UI not built).
- **`subscriptions`** (heavily extended): `planId` (FK → `subscriptionPlans`),
  `status` (`trial|active|suspended|cancelled|lifetime|expired`), `startAt`,
  `currentPeriodEnd`, `autoRenew`, `grantMethod` (`manual|trial|paid|invite`),
  `lastExtendedAt`, `cancelReason`, `createdByUserId`, `lastEditedByUserId`,
  `updatedAt`. Indexed on `userId`, `status`, `currentPeriodEnd`, `planId`,
  `organizationId`.
- **`subscriptionPlans`** — name, description, status, `defaultDurationDays`,
  `features` (json), price, `displayOrder`, `visibility`.
- **`subscriptionEvents`** — append-only history per subscription: `type`
  (created/extended/shortened/plan_changed/suspended/reactivated/cancelled/
  lifetime_granted/renewed), `previousValue`/`newValue` (json), `reason`,
  `actorUserId`. This is what powers the "history" list on the subscriber
  detail page — never overwritten, only appended.
- **`adminNotes`** — free-text internal notes per user, author + timestamp.
- **`adminSettings`** — single-row-per-key json settings store (`key` is the
  primary key; currently one key, `admin_settings`, holds
  `AdminSettingsShape`).
- **`notifications`** (extended): `deliveryStatus`
  (`pending|sent|failed|not_configured`), `channel` (`in_app|email`),
  `idempotencyKey` (unique) — schema ready for a notification sweep (§7).

Migrations were applied with `npx drizzle-kit push --force` (this project's
established mechanism — see `.scratch/status.md`); no rows were dropped or
rewritten, verified directly against the dev database (all 20 pre-existing
users still present, byte-identical email/password/role data) both
immediately after the push and again at the end of this session.

## 4. First Super Admin — how it actually happens

No manual database write or seed script is required. `isPlatformOwner()`
(`rbac.ts`, checked against `PLATFORM_OWNER_EMAILS`) is folded into
`permissionsFor()` unconditionally, so **the existing hardcoded platform
owner already holds every `super_admin` permission on first login**,
regardless of what `platformRole` says in the database (it can stay
`null`). To hand a second person `super_admin` (so the dashboard doesn't
depend on one hardcoded email forever): sign in as the platform owner, open
`/admin/admins`, and set their `platformRole` to `super_admin` — this goes
through `setPlatformRoleCore`, which is itself gated on
`subscribers.manage_role` (i.e., only someone who already has it, starting
with the bootstrap owner, can grant it to anyone else).

## 5. Adding a subscriber

`/admin/subscribers/new` → `createSubscriberCore`: one DB transaction
inserts `users` (a random, discarded password placeholder — the account
exists but cannot be signed into directly, exactly like the existing
`platform-accounts-core.ts` pattern) + `profiles` + a `subscriptions` row +
a `subscriptionEvents("created")` row + an optional initial `adminNotes`
row. The wrapper (`subscribers.ts`) then reuses the existing password-reset
token flow (`createResetTokenCore` / `/reset-password/[token]`) to email an
invite link via `sendEmail()` — the same real-or-console email abstraction
already used for password resets, not a new integration. Duplicate emails
are rejected before any insert happens.

## 6. Subscription status / expiration logic

All of it lives in exactly two files, and nowhere else — this was a
deliberate design constraint, not just where the code happened to land:

- **`src/lib/subscriptions/timezone.ts`** — pure date/timezone math, no new
  dependency. `Asia/Beirut` is the default zone (`DEFAULT_TIMEZONE`).
  `addCalendarMonths` is calendar-correct (Jan 31 + 1 month → Feb 28/29, not
  a rollover to March), and `endOfDayForInstant`/`zonedYmd` correctly
  resolve a period end to the last instant of that calendar day *in the
  configured zone*, not UTC midnight — the difference matters at exactly
  the day boundary, and is covered by dedicated tests
  (`tests/subscription-access.test.ts`).
- **`src/lib/subscriptions/access.ts`** — `getSubscriptionStatus()` computes
  `active | expiring_soon | expired | suspended | cancelled | lifetime |
  trial` **live from the stored dates on every call**, never trusting a
  stale `status` column value for the "is it actually still valid right
  now" question; `canAccessContent()` and `canAccessFeature()` are the only
  functions anything else in the app calls to answer "can this user in".

Nothing else in the codebase computes a date/expiry decision inline — every
call site (the gate, the detail page, the KPI cards, the CSV export) goes
through these two files, so a future date-logic bug fix has exactly one
place to happen.

**Content-access gating vs. account-level gating** — two deliberately
separate layers (`SECURITY.md` §3.2 has the full reasoning):

- `users.accountStatus` / `accessExpiresAt` — the pre-existing, unchanged,
  full account gate. Suspending an account here signs the user out
  immediately and blocks sign-in.
- `subscriptions` + `subscriptionBlocksContent()` — new, additional, softer.
  A blocked subscription does **not** sign the user out; they stay signed
  in and are redirected to `/subscription-ended` (spec's explicit "allow
  sign-in ... show a clear screen" requirement). An account with no
  subscription row at all is never affected by this layer, so every
  pre-existing Content Studio account keeps working exactly as before.

This gate is currently wired at one integration point: `/home`, the
universal post-sign-in landing page every session passes through. It is
**not** wired into every individual content route (`/learn`, `/practice`,
`/unit/[unitId]`, `/simulation/[scenarioId]`) — see §7.

## 7. Known gaps — disclosed, not hidden

Built and tested, but with a smaller footprint than the full spec describes:

- **No literal desktop sidebar.** The app's `Page` layout is capped at
  `max-w-lg` everywhere, including every pre-existing admin page — a
  one-off wide sidebar would have been visually inconsistent with the rest
  of the app. The existing horizontal pill sub-nav (`AdminSubNav`) was
  extended instead of introducing a new layout pattern.
- **No bulk-action UI.** `bulkActionCore`/`bulkSubscriberAction` (suspend/
  extend/tag in bulk, always skipping `super_admin` targets even when the
  actor is one) is fully built and unit-tested, but the subscribers list
  page has no multi-select/checkbox UI wired to it yet.
- **No notification sweep or in-app bell.** The `notifications` table's
  `deliveryStatus`/`channel`/`idempotencyKey` columns are in place and
  `sendEmail()` is reused for the invite flow, but there is no scheduled
  job that sweeps expiring subscriptions and sends reminders, and no
  in-app notification bell/UI.
- **Content-gating covers `/home` only** (§6) — not every learner route
  directly by URL. A user already mid-session on a direct content URL when
  their subscription lapses is not redirected until their next visit to
  `/home`.
- **Dashboard KPIs are partial.** Four cards (total / active / expiring in
  7 days / expired) were added to `/admin`; the spec describes a larger set
  of reporting metrics.
- **Country/plan filters** are supported server-side in
  `listSubscribersCore`/`SubscriberListParams` but not exposed as dropdowns
  in the list page UI (search and status filter are).
- **No dedicated per-report pages** beyond the CSV export on the
  subscribers list.
- **Group/org subscriptions are schema-only** (`organizations.seats` etc.) —
  no UI was built, matching the spec's own guidance not to build UI for a
  system that would otherwise sit unused.

None of these are silent — each is a scoped, disclosed decision, and the
underlying data model and core server functions were built to support
finishing any of them without another migration.

## 8. Verification

`npm run typecheck`, `npm run lint`, `npm test` (224/224, including 45 new
tests across `tests/subscription-access.test.ts`,
`tests/subscribers-core.test.ts`, `tests/subscription-gate.test.ts`),
`npm run build`, and `npx playwright test` (127/127) all pass with zero
regressions in the pre-existing suite.
