# Mobile UX Architecture

AIJUR Professional Skills Lab is a mobile-first, Arabic-first bilingual (AR/EN)
training product for lawyers and law students, built on Next.js 16 / React 19 /
Tailwind v4. This document grounds the product's UX constraints in the actual
UI code under `src/components/` and `src/app/(app)/[locale]/`.

## 1. Design constraints and why

These are treated as product requirements, not style preferences:

- **Mobile-first, ≤5-item bottom navigation, one clear primary action per
  screen.** A phone screen has no room for ambiguity: a sixth tab means every
  tab is a guess, and more than one "primary" button per screen means the user
  has to decide which one you meant. Confirmed in code — `BottomNav` in
  `src/components/layout/app-shell.tsx` renders exactly five `<li>` items, and
  the `Button` primary variant is documented in `button.tsx` as "the only
  variant that spends the brand colour. One per screen."
- **WCAG 2.2 AA floors, 44px minimum tap targets everywhere.** Legal
  professionals use this between meetings, often one-handed, often on transit.
  Missing a tap target is a productivity tax on every session.
- **PWA with offline tolerance.** Training happens "in a lift, on a train, or
  on a bad connection" (verbatim comment in `public/sw.js`) — content already
  opened must stay usable without a live connection.
- **Visual identity: White / Deep Burgundy / Black / Soft Gray — premium,
  minimal, professional.** The audience is lawyers evaluating a professional
  tool, not consumers of a game. The codebase explicitly rejects gamified
  visual language (see §5).
- **RTL-first (Arabic primary) with full LTR support.** Arabic is the
  product's primary market language (`lang: "ar"` in the manifest, default
  locale in metadata), so RTL cannot be a retrofit — it has to be the layout
  system's default direction, with English as an equally first-class second
  direction.

## 2. Navigation model

`BottomNav` (`src/components/layout/app-shell.tsx`) renders a fixed, five-slot
tab bar: Home, Learn, Practice, Progress, and a **role-conditional fifth
slot** — `StudioIcon`/"admin" for any `systemRole !== "learner"`, otherwise
`ProfileIcon`/"profile":

```tsx
showStudio
  ? { href: `/${locale}/admin`, label: dict.nav.admin, Icon: StudioIcon }
  : { href: `/${locale}/profile`, label: dict.nav.profile, Icon: ProfileIcon },
```

`showStudio` is computed per-page from the session (e.g. in
`home/page.tsx`: `const showStudio = user.systemRole !== "learner";`), so a
learner never sees an admin-only "Studio" tab they can't use — the nav itself
adapts to role rather than showing a disabled/greyed item. Each item is a
`min-h-[3.25rem]` (52px) `<li>` filling `flex-1` of a `max-w-lg` bar,
`aria-current="page"` marks the active tab, and the bar sits in `safe-bottom`
padding (see §3) so it clears the iOS home indicator.

`AppHeader` (same file) is the shared page header. Its `back` prop is
deliberately a union type:

```tsx
back?: { href: string; label: string } | { onClick: () => void; label: string };
```

A plain `href` is a real `<Link>` for simple "go up one level" navigation. An
`onClick` handler is used where leaving needs a confirmation step — e.g. the
unit player (`unit-player.tsx`) wires `back={{ onClick: () =>
setExitSheetOpen(true), label: dict.common.back }}` so exiting mid-activity
opens a confirmation `Sheet` instead of silently discarding progress. The
header title carries `dir="auto"` since titles are often built from
user/content strings whose direction isn't known statically.

`OfflineBanner` and `Page`/`SectionTitle` are also defined here — `Page` is
the single scroll container (`app-scroll`, which reserves space for the fixed
bottom nav), and `SectionTitle` renders an `<h2>` so section structure stays
in the semantic outline.

**Spot-check — one primary action per screen holds in practice:**
- `home/page.tsx` — of ~9 optional card sections rendered, only the top
  "continue your journey" card uses `variant="primary"`; every other CTA on
  the page (today's mission, recommended review, legal-English quick
  practice) uses `variant="secondary"` or `variant="ghost"`.
- `unit-player.tsx` — a `grep` for `variant="primary"` finds it used on
  exactly one visible control at a time (continue-to-next-step / submit /
  next-unit), each gated by step state so only one is ever rendered.
- `activity-player.tsx` — same pattern: `Button variant="primary"` appears
  twice in the file, once for "continue" and once for "submit", mutually
  exclusive based on whether the current step is answered.

## 3. Accessibility implementation

**44px tap-target floor**, applied at the primitive level so individual
screens can't opt out by accident:
- `Button` (`button.tsx`): every size variant carries `min-h-11` (44px)
  unconditionally, plus a comment: "44px floor on every control, not just
  icon buttons."
- `IconButton` (`button.tsx`): `h-11 w-11` (44×44) tap target with a
  **negative margin technique** — `-m-2.5` pulls the *visual* box back in so
  a small icon doesn't visually bloat surrounding layout while the
  *clickable* box stays full size. The header back button reuses the same
  idea explicitly: `-ms-2.5 flex h-11 w-11 items-center justify-center
  rounded-full`.
- `IconButton` also requires a `label` prop at the type level (`/** Required
  — an icon-only control with no accessible name is unusable. */`), so an
  icon-only button cannot compile without an accessible name.
- Form controls (`form.tsx`) share one `CONTROL` class constant that includes
  `min-h-11`; `ChoiceGroup` rows are `min-h-11`; `Toggle`'s visual track is
  only 28px tall but the actual hit area is grown to 44px via
  `before:absolute before:-inset-2.5 before:content-['']`.
- `BottomNav` items are `min-h-[3.25rem]` (52px, above the floor).
- `CardAction` / `CardLinkAction` (`card.tsx`) — whole-card tap targets are
  also `min-h-11`.
- A generic `.tap-target` utility (`min-block-size: 2.75rem;
  min-inline-size: 2.75rem;`) exists in `globals.css` for one-off cases.

**Focus handling.** `Sheet` (`ui/sheet.tsx`) implements a real focus trap:
on open it focuses the panel, listens for `Escape` to close, and intercepts
`Tab`/`Shift+Tab` to cycle within the panel's focusable elements (computed
live via `querySelectorAll`), restoring focus to `document.activeElement` on
close and locking `document.body.style.overflow`. `role="dialog"
aria-modal="true" aria-labelledby={titleId}` is set on the panel.
`globals.css` also defines a global `:focus-visible` outline
(`outline: 2px solid var(--color-brand)`, with a lighter outline color in dark
mode) applied to `a, button, [role="button"], input, select, textarea` — so
focus is visible without every component styling it individually.

**aria-label usage** appears in 10 files across the UI layer (`IconButton`,
`Sheet`'s close button, `BottomNav`'s `<nav aria-label>`, `ProgressBar`/
`StepDots`/`ScoreRing`'s `role="progressbar"`/`role="img"` labels,
`SegmentedControl`'s `role="radiogroup" aria-label`, `Toggle`'s
`aria-describedby`, etc.). `Field` (`form.tsx`) centralizes
`htmlFor`/`aria-describedby`/`aria-invalid`/`aria-required` wiring for every
form field via a render-prop, specifically to prevent the "visually
associated but not programmatically associated" label bug.

**`dir="auto"` on free-text.** 108 occurrences across the component tree.
Used on: the `AppHeader` title, `Sheet` title, activity prompts/context/
rationale text in `activities/parts.tsx`, `ChoiceGroup` option labels,
`OptionList`/`OrderableList`/`BucketSorter` item labels, and the `Textarea`
primitive itself (`dir="auto"` is hardcoded on the textarea element, with the
comment: "so a learner answering in English inside an Arabic UI (or the
reverse) gets their own text laid out correctly"). This is applied
specifically to *content/user-authored* strings, not to structural chrome
where direction is already known from the page `dir`.

**Zoom is not disabled.** `viewport` in the locale layout sets
`maximumScale: 5` with an explicit comment calling out that locking zoom is
"the most common accessibility failure in 'app-like' web builds and it is
never worth the visual tidiness" — a real WCAG 2.2 AA requirement (1.4.4/1.4.10)
that's easy to violate by copying typical "app-like" viewport meta tags.

**Reduced motion** is respected both by OS preference
(`@media (prefers-reduced-motion: reduce)` zeroes out animation/transition
durations globally) and by an explicit user preference mirrored onto
`document.documentElement.dataset.reducedMotion` by `PreferencesEffect`
(`providers.tsx`), driven from a stored profile setting, not just the OS
media query.

## 4. RTL/LTR

The app sets `dir` and `lang` at the root: `LocaleLayout`
(`src/app/(app)/[locale]/layout.tsx`) renders `<html lang={meta.htmlLang}
dir={meta.dir} ...>` per locale, so direction is a document-level property,
not a per-component override.

- **Numerals stay LTR inside RTL text** via the `.num` utility in
  `globals.css`: `font-variant-numeric: tabular-nums; direction: ltr;
  unicode-bidi: isolate;`. It's applied everywhere a number appears —
  `ScoreRing`'s score, `ProgressBar`'s `showValue`, `OrderableList`'s index
  badges — so a Latin numeral inside an Arabic sentence isn't reordered by
  the bidi algorithm, and figures stay tabular for column alignment.
- **Icon mirroring** uses a single `flip-rtl` class:
  `[dir="rtl"] .flip-rtl { transform: scaleX(-1); }`. It's applied to
  directional glyphs only — the header back-arrow SVG and `ChevronIcon` — not
  to icons that don't imply direction (e.g. `HomeIcon`, `CheckIcon` never get
  it).
- **Logical properties over physical left/right.** Components consistently
  use Tailwind's logical-property utilities: `ms-`/`me-`/`ps-`/`pe-`,
  `text-start`, `border-s-4`/`border-e-`, and CSS `inset-inline-start` in
  `globals.css` (the skip-link). A repo-wide search found **zero** uses of
  hardcoded `left-`, `right-`, `pl-`, `pr-`, `ml-`, `mr-`, `text-left`, or
  `text-right` utility classes in `.tsx` files. `Toggle`'s thumb translation
  is the one place a physical transform (`translate-x-6`) appears, and it is
  correctly paired with an explicit RTL counterpart:
  `checked ? "translate-x-6 rtl:-translate-x-6" : "translate-x-1
  rtl:-translate-x-1"`.
- **Typography adapts per direction, not just mirrors.** `globals.css` bumps
  Arabic body text to a larger size and looser line-height
  (`font-size: 16.5px; line-height: 1.85;` under `[dir="rtl"] body,
  [lang="ar"]`, vs. 16px/1.65 for Latin) because "Arabic runs slightly larger:
  the same point size reads smaller than Latin" — and `.text-label` disables
  `text-transform: uppercase`/letter-spacing under `[dir="rtl"]` since
  "Arabic has no case, so uppercasing does nothing but widen tracking oddly."
  This is direction-aware design, not just a mirrored layout.

**Known gap:** logical-property usage is concentrated in 10 files (the shared
UI primitives plus a handful of page-level components: home, practice,
progress, simulation-runner, unit-player, activity-player). Simpler
leaf/page files were not individually audited beyond the repo-wide grep for
hardcoded `left-`/`right-` utilities (which came back clean), so the coverage
claim rests on that grep rather than a file-by-file read of every page.

## 5. Visual identity implementation

Real token values, quoted from `src/app/globals.css`:

| Token | Light | Dark |
|---|---|---|
| `--background` | `#f7f8fa` | `#15130f` |
| `--surface` | `#ffffff` | `#1f1b16` |
| `--foreground` | `#111827` | `#f2ede7` |
| `--border` | `#e5e7eb` | `#382f27` |
| `--color-brand` (Deep Burgundy) | `#7a1832` | `#b2455f` |
| `--color-brand-dark` / `-active` | `#641329` / `#521020` | `#cc6a80` / `#d98599` |
| `--color-positive` | `#16794b` | `#4cb684` |
| `--color-negative` | `#b42318` | `#e0655c` |
| `--color-warning` | `#a15c00` | `#d99a35` |
| `--color-info` | `#175cd3` | `#5b9bf0` |
| `--radius-card` / `--radius-control` / `--radius-pill` | `1rem` / `0.75rem` / `999px` | same |
| `--shadow-sm` | `0 1px 2px 0 rgb(16 24 40 / 0.05)` | same |

This matches the White / Deep Burgundy / Black-ish-near-black text / Soft Gray
brief closely: white/near-white surfaces, a single reserved burgundy accent,
near-black (`#111827`) foreground rather than pure black, and gray borders
and muted surfaces. The file's own header comment states the governing rule
explicitly: *"ONE accent — deep burgundy — reserved for identity and the
single primary action on a screen. Never decorative. A screen with burgundy
in five places is a screen you cannot scan."* Status colors (positive/
negative/warning/info) are documented as meaning exactly one thing each and
"never repurposed to mean 'new' or 'important'" — `Badge`'s `TONES` map is
the only place status colors are spent as *backgrounds*; everywhere else
they're text/icon-only, per the comment in `badge.tsx`: *"the one place
status colours are spent as backgrounds. Everywhere else they appear as text
or icon colour only, which is what keeps the palette quiet."*

**No gamification, verified against `icons.tsx`.** The full icon set (28
icons) was read in full: navigation icons (home, book/learn, target/practice,
bar-chart/progress, person/profile, monitor/studio), utility icons (X, check,
chevron, lock, play, mic, arrow-up/down, spark, alert, info, bookmark, globe,
clock, shield, users, folder, chip, scale, handshake, message, growth,
refresh, plus, book), all rendered through one shared `Svg` wrapper — single
stroke weight (`1.75`), single corner style (`round`/`round`), single line
family. There is **no flame/streak icon, no mascot, no confetti, no badge/
trophy iconography** anywhere in the set. Progress is instead communicated
via `MasteryMeter` (six discrete filled segments + a number + a text label —
"three redundant encodings, because a ring alone is unreadable to anyone who
can't distinguish the fill colour," per its own comment), `ScoreRing` (an SVG
ring with the number printed inside, never conveyed by arc length alone), and
`StepDots`. Motion is a single 220ms rise-in keyframe (`aijur-rise`) used for
sheets, and a shimmer skeleton loader — no bounce, no celebratory animation on
correct answers. `Skeleton`/`SkeletonCard`/`LoadingRegion` are used instead of
spinners for loading states, with the comment: "Skeletons, not spinners — an
empty page that reflows is worse than a slow one."

There are also **no `<img>`/`next/image` usages anywhere in `src/`** found by
a repo-wide search — the UI is entirely typographic and icon-driven, which by
construction rules out mascot artwork or decorative photography.

## 6. Offline UX

`ConnectivityProvider`/`useOnline` (`src/components/providers.tsx`) tracks
`navigator.onLine` plus the `online`/`offline` window events, exposed via
React context. `OfflineBanner` (`app-shell.tsx`) reads `useOnline()` and
renders a `role="status"` warning-toned bar (using the same
`--color-warning`/`--color-warning-tint` tokens as everywhere else warning
appears) when offline; it renders `null` (nothing, no layout shift) when
online.

**Service worker** (`public/sw.js`) follows two deliberately narrow rules,
per its own header comment:
1. **Never cache an API response.** The fetch handler bails on any non-`GET`
   request before doing anything else (`if (request.method !== "GET")
   return;`) — every mutation in this app is a Next.js Server Action (a
   `POST` straight to the current page route, not a REST endpoint; see
   `docs/PRODUCT_AUDIT.md` §1, "No REST API surface exists"), so this one
   check is what actually keeps every mutation un-intercepted and
   un-cached, not the separate `url.pathname.startsWith("/api/")` guard a
   few lines below it (which is effectively dead code in this app — nothing
   is ever requested at `/api/`). Progress, mastery, and evaluation data are
   "the record of a learner's performance; serving a stale one is worse
   than showing an error," so a mutation attempted offline simply fails
   visibly rather than being silently queued. **Deliberately not
   implemented: automatic replay of a failed mutation once back online.**
   Considered and closed as out of scope, not merely unbuilt: most
   mutations (`submitActivity`'s AI-grading branch, `startSimulation`,
   `sendSimulationMessage`) need a live AI provider round trip, so there's
   nothing meaningful to queue and replay for them; and blindly queueing
   arbitrary POSTs for later replay would fight this app's own safety
   rails — rate limiting is keyed to a real-time window
   (`checkRateLimit()`), the CSRF Origin guard expects a live same-origin
   request, and a session cookie could have quietly expired by replay time
   with no learner watching to notice. A real design for this would need to
   pick specific, safe-to-queue mutations deliberately, not bolt queueing
   onto every Server Action generically. See `public/sw.js`'s own header
   comment for the same reasoning in the source.
2. **Cache the shell and content pages.** On `install`, `/offline` and
   `/manifest.webmanifest` are precached. On every same-origin `navigate`
   request, the SW does network-first-then-cache: fetch, clone the response
   into a `PAGES` cache, and on failure fall back to the cached page or
   `/offline`. Static assets under `/_next/static` and `/icons/` are
   cache-first (serve cached, otherwise fetch-and-cache). Old cache versions
   are purged on `activate` by checking against the `VERSION` prefix.

**What happens if a learner loses connectivity mid-activity:** the currently
open unit/activity page was already served (and cached) on navigation, so it
stays visually usable — the learner can keep reading and answering. The
`OfflineBanner` appears immediately via the `online`/`offline` browser events
to make the state visible. Any progress-affecting call is a Server Action
`POST`, which the SW's method check above ensures is never intercepted or
faked — it simply fails over the network, and the client-side action code
(outside this doc's scope) is responsible for surfacing that failure to the
learner. Navigating to a *new*, never-before-fetched page while offline falls
back to the generic `/offline` page rather than a broken network error
screen.

`manifest.webmanifest` declares `display: "standalone"`, `orientation:
"portrait"`, `theme_color: "#7a1832"` (the brand burgundy), `dir: "auto"`,
`lang: "ar"`, and two `shortcuts` (`/ar/home`, `/ar/practice`) for
installed-app quick actions — consistent with a PWA meant to be added to the
home screen and opened directly into ongoing work.

## 7. Component inventory

| Component | File | Purpose |
|---|---|---|
| `BottomNav` | `layout/app-shell.tsx` | Fixed 5-item bottom tab bar, role-conditional 5th slot |
| `AppHeader` | `layout/app-shell.tsx` | Sticky page header, back-as-link or back-as-confirm-handler |
| `OfflineBanner` | `layout/app-shell.tsx` | Connectivity-driven status banner |
| `Page` / `SectionTitle` | `layout/app-shell.tsx` | Scroll container reserving bottom-nav space; semantic `<h2>` section headers |
| `Button` / `LinkButton` / `IconButton` / `Spinner` | `ui/button.tsx` | Primary/secondary/outline/ghost/destructive actions; link-backed nav actions; 44×44 icon-only controls |
| `Card` / `CardHeader` / `CardTitle` / `CardBody` / `CardFooter` / `CardAction` / `CardLinkAction` | `ui/card.tsx` | Content grouping; tappable card variants with real `<button>`/`<Link>` semantics |
| `Badge` / `MasteryMeter` | `ui/badge.tsx` | Status/tone pill; 6-segment mastery indicator (segments + number + label) |
| `Sheet` | `ui/sheet.tsx` | Bottom-sheet-on-mobile / centered-dialog-on-desktop with focus trap |
| Icon set (`HomeIcon`, `LearnIcon`, ... `DomainIcon`) | `ui/icons.tsx` | Single stroke-weight, single corner-radius line icon family, all decorative/`aria-hidden` |
| `Skeleton` / `SkeletonCard` / `LoadingRegion` | `ui/feedback.tsx` | Reflow-free loading states |
| `EmptyState` / `ErrorState` / `Callout` | `ui/feedback.tsx` | Empty/error messaging; tonal inline notices |
| `Field` / `Input` / `Textarea` / `Select` / `ChoiceGroup` / `SegmentedControl` / `Toggle` | `ui/form.tsx` | Accessible form primitives with wired label/hint/error association |
| `ProgressBar` / `StepDots` / `ScoreRing` | `ui/progress.tsx` | Linear progress, step position (dots, not a bar, "so steps stay countable"), circular score display |
| `ActivityFrame` / `Rationale` / `OptionList` / `OrderableList` / `BucketSorter` | `activities/parts.tsx` | Shared prompt/context/hint shell and the three core answer-input patterns reused across ~20 activity kinds |

### Known gaps

- **RTL coverage claim is grep-based, not exhaustive.** The "zero hardcoded
  left/right" finding covers all `.tsx` files repo-wide, but detailed manual
  reading was limited to the shared UI primitives plus a handful of
  page-level files (home, unit, practice/progress/simulation by grep only,
  not full read). It's possible a page not touched by this review uses
  physical properties in inline styles or non-Tailwind CSS.
- ~~IndexedDB mutation queueing for offline writes~~ — resolved, not a gap:
  no such implementation exists anywhere in the codebase (confirmed by
  repo-wide search), and `public/sw.js`'s comment claiming it did was
  inaccurate. The comment has been corrected and the decision to not build
  it made explicit with reasoning (see "Offline UX" §6 above) rather than
  left as an ambiguous claim to verify later.
- **No `<img>`/`Image` usage found** means there was nothing to check for
  missing `alt` text — a genuine finding, not a gap, but worth flagging since
  it means image accessibility is untested territory: if photography or
  illustrations are added later, `alt` discipline will need to be introduced
  from scratch rather than extended from an existing pattern.
- **Fonts fall back to `system-ui, sans-serif`** for both `--font-latin` and
  `--font-arabic` in the `:root` defaults in `globals.css`, with the actual
  `next/font` families (Inter, Noto Kufi Arabic) injected only via the locale
  layout's inline `<style>` tag remapping. Any render path that includes
  `globals.css` without going through `LocaleLayout` would silently fall back
  to system fonts rather than the branded typefaces.
