# Design System

Source of truth for AIJUR Professional Skills Lab's visual language. Every
value in this document is copied from the actual source files — primarily
`src/app/globals.css` and `src/components/ui/*.tsx` — not from the brand
brief. If a token or component changes, this doc is stale until it's updated
to match.

Primary sources:
- `src/app/globals.css` — CSS custom properties, typography scale, motion,
  RTL helpers, accessibility floors.
- `src/components/ui/button.tsx`, `card.tsx`, `badge.tsx`, `sheet.tsx`,
  `icons.tsx`, `feedback.tsx`, `form.tsx`, `progress.tsx` — the component
  library.
- `src/components/layout/app-shell.tsx` — `Page`, `AppHeader`, `BottomNav`,
  `SectionTitle`, `OfflineBanner`, the shell every screen is built inside.
- `package.json` — Tailwind `^4.3.3`, `@tailwindcss/postcss ^4.3.3`.

For the bilingual/RTL system this doc's tokens support, see
`MOBILE_UX_ARCHITECTURE.md` — this doc covers the primitives (`.num`,
`.flip-rtl`, RTL font/size overrides), not the localization architecture.

---

## 1. Visual identity principles

The file header of `globals.css` states the discipline directly (lines 3–19):

> White-executive discipline, applied to a learning product:
> 1. ONE accent — deep burgundy — reserved for identity and the single primary
>    action on a screen. Never decorative. A screen with burgundy in five
>    places is a screen you cannot scan.
> 2. Status colours mean exactly one thing each, everywhere: positive =
>    correct / mastered, negative = incorrect / critical mistake, warning =
>    needs review, info = neutral system information. Never repurposed to
>    mean "new" or "important".
> 3. Background and surface are two visibly different tones. A card must
>    read as raised before you notice its border.
>
> Dark mode ships from day one so no component ever hard-codes a hex value.

This is White / Deep Burgundy / Black / Soft Gray in practice: white
(`--surface: #ffffff`) and soft gray (`--background: #f7f8fa`,
`--surface-muted`, `--surface-soft`) as the dominant field, near-black text
(`--foreground: #111827`) for legibility, and burgundy (`--color-brand:
#7a1832`) held in reserve for identity and the one primary action.

**What the codebase deliberately avoids (verified, not asserted):**

- **No mascot, no character art.** `icons.tsx` contains 27 hand-rolled SVG
  icons (`HomeIcon`, `LearnIcon`, `PracticeIcon`, `ScaleIcon`,
  `HandshakeIcon`, etc.) — all line icons built from the same `Svg` wrapper
  (`strokeWidth={1.75}`, `viewBox 0 0 24 24`, rounded caps/joins). There is no
  avatar, owl, character, or any illustrated figure anywhere in the
  component library.
- **No flame/streak iconography.** `progress/page.tsx` computes and displays
  a numeric streak (`STREAK_WINDOW_DAYS = 35`, rendered as
  `<p className="num text-section-title">{t(dict.progress.streak, {n:
  streak})}</p>` followed by a plain supporting line, `dict.progress.
  streakGentle`) — text and a number, no flame glyph exists in `icons.tsx` to
  render it as one.
- **No confetti, no celebratory animation library.** The only defined
  keyframes in `globals.css` are `aijur-rise` (a 220ms opacity/translateY
  entrance) and `aijur-shimmer` (skeleton loading shimmer). Nothing else
  animates.
- **No decorative gamification chrome.** `MasteryMeter` (`badge.tsx`) renders
  mastery as six small filled/unfilled rectangular segments plus a number
  plus a text label — described in its own comment as "three redundant
  encodings, because a ring alone is unreadable to anyone who can't
  distinguish the fill colour" — not as a game-style XP bar or badge shelf.
- **One icon family, one stroke weight.** `icons.tsx`'s file comment: "One
  icon family, one stroke weight, one corner treatment. Mixed icon sets are
  the fastest way to make a careful layout look assembled from parts."

Combined, this is what keeps the product from reading as Duolingo (or any
named platform): no mascot, no flame streak icon, no confetti/celebration
animation, no XP-bar aesthetic, one restrained accent color instead of a
saturated multicolor game palette, and a serif-free but conservative,
document-like typographic scale (see §3) rather than a rounded, playful
display face.

---

## 2. Design tokens

All tokens are CSS custom properties defined in `:root` (light) and
`[data-theme="dark"]` in `src/app/globals.css`, then re-exposed to Tailwind
utility classes via the `@theme inline` block (Tailwind v4's CSS-first theme
config). Components consume them almost exclusively as raw CSS vars
(`bg-[var(--color-brand)]`) rather than generated Tailwind color names.

### 2.1 Color — backgrounds, text, borders (light / `:root`)

| Token | Value | Use |
|---|---|---|
| `--background` | `#f7f8fa` | Page background (soft gray) |
| `--surface` | `#ffffff` | Card / control surface (white) |
| `--surface-muted` | `#f8fafc` | Hover/subtle-fill surface |
| `--surface-soft` | `#f9fafb` | Empty-state / dashed-border surface |
| `--foreground` | `#111827` | Primary text (near-black) |
| `--foreground-secondary` | `#475569` | Secondary text |
| `--foreground-muted` | `#64748b` | Muted/meta text |
| `--border` | `#e5e7eb` | Default hairline border |
| `--border-strong` | `#d1d5db` | Emphasized border (inputs, dividers) |

### 2.2 Color — brand (identity + primary action only)

| Token | Value |
|---|---|
| `--color-brand` | `#7a1832` (deep burgundy) |
| `--color-brand-dark` | `#641329` (hover) |
| `--color-brand-active` | `#521020` (active/pressed) |
| `--color-brand-light` | `#a6415a` |
| `--color-brand-tint` | `#f9eff2` (tinted background for badges/callouts) |
| `--color-brand-contrast` | `#ffffff` (text on brand fill) |

### 2.3 Color — status (each meaning exactly one thing everywhere)

| Token | Value | Meaning |
|---|---|---|
| `--color-positive` | `#16794b` | correct / mastered |
| `--color-positive-tint` | `#ecfdf3` | |
| `--color-negative` | `#b42318` | incorrect / critical mistake |
| `--color-negative-tint` | `#fff1f0` | |
| `--color-warning` | `#a15c00` | needs review |
| `--color-warning-tint` | `#fff7e6` | |
| `--color-info` | `#175cd3` | neutral system information |
| `--color-info-tint` | `#eff6ff` | |

### 2.4 Elevation (shadow)

Comment in source: "restrained. Heavy shadows read as decoration, not
hierarchy."

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px 0 rgb(16 24 40 / 0.05)` |
| `--shadow-md` | `0 2px 6px -1px rgb(16 24 40 / 0.07), 0 1px 3px -1px rgb(16 24 40 / 0.05)` |
| `--shadow-lg` | `0 12px 24px -8px rgb(16 24 40 / 0.12), 0 2px 6px -2px rgb(16 24 40 / 0.06)` |

### 2.5 Radius

| Token | Value | Use |
|---|---|---|
| `--radius-card` | `1rem` | Card, Sheet, EmptyState/ErrorState containers |
| `--radius-control` | `0.75rem` | Button, Input, Select, Callout |
| `--radius-pill` | `999px` | Badge, ProgressBar track/fill, SegmentedControl, Toggle track |

### 2.6 Mobile chrome / layout

| Token | Value |
|---|---|
| `--bottom-nav-height` | `4.25rem` |
| `--header-height` | `3.5rem` |

### 2.7 Fonts

```css
--font-latin: system-ui, sans-serif;
--font-arabic: system-ui, sans-serif;
```

Comment: "Fonts are injected by next/font in layout.tsx and land on these
vars." The `@theme inline` block composes them: `--font-sans: var(--font-
latin), var(--font-arabic), system-ui, sans-serif;` with the comment "The
browser picks whichever family actually has glyphs for the run."

### 2.8 Safe-area / spacing helpers

| Class | Rule |
|---|---|
| `.safe-top` | `padding-block-start: max(env(safe-area-inset-top), 0px)` |
| `.safe-bottom` | `padding-block-end: max(env(safe-area-inset-bottom), 0px)` |
| `.app-scroll` | `padding-block-end: calc(var(--bottom-nav-height) + env(safe-area-inset-bottom) + 1.5rem)` — "content never sits under the bottom bar or the notch" |
| `html { scroll-padding-block-end }` | `calc(var(--bottom-nav-height) + 1rem)` — "Keeps the bottom nav clear of the iOS home indicator" |

### 2.9 Motion

| Item | Value |
|---|---|
| `@keyframes aijur-rise` | opacity 0→1, `translateY(6px)`→none |
| `.animate-rise` | `aijur-rise 220ms cubic-bezier(0.22, 1, 0.36, 1) both` |
| `@keyframes aijur-shimmer` | background-position `200% 0` → `-200% 0` |
| `.skeleton` | gradient shimmer, `1.4s ease infinite` |
| `prefers-reduced-motion: reduce` | forces all animation/transition durations to `0.001ms`, iteration count `1`, `scroll-behavior: auto` |
| `[data-reduced-motion="true"]` | same forced-off behavior via an app-level data attribute (user preference toggle, not just OS setting) |

### 2.10 Tailwind v4 wiring (`@theme inline`)

`globals.css` opens with `@import "tailwindcss";` (Tailwind v4's CSS-first
setup — no `tailwind.config.js` theme block is required). The `@theme
inline` block re-maps every CSS variable above into Tailwind's generated
utility namespace, e.g.:

```css
@theme inline {
  --color-background: var(--background);
  --color-brand: var(--color-brand);
  --color-positive: var(--color-positive);
  --radius-card: var(--radius-card);
  --shadow-sm: var(--shadow-sm);
  --font-sans: var(--font-latin), var(--font-arabic), system-ui, sans-serif;
  /* ...and so on for every color/radius/shadow token */
}
```

In practice, however, components in `src/components/ui/*` mostly bypass the
generated Tailwind color utilities and reference the raw CSS variables
directly inside Tailwind's arbitrary-value syntax — e.g. `bg-[var(--color-
brand)]`, `rounded-[var(--radius-control)]`, `shadow-[var(--shadow-sm)]` —
rather than a hypothetical `bg-brand` class. This is the dominant pattern
throughout the app pages inspected (e.g. `home/page.tsx`,
`app-shell.tsx`).

---

## 3. Typography scale

Comment in source: "five sizes cover the whole app." Base body text is set
directly on `body`, not as a utility class.

| Class / selector | font-size | line-height | weight | notes |
|---|---|---|---|---|
| `body` (base) | `16px` | `1.65` | — | `-webkit-font-smoothing: antialiased` |
| `.text-page-title` | `1.5rem` → `1.875rem` at `≥768px` | `1.3` | `700` | `letter-spacing: -0.01em`; page-level `<h1>` (used in `AppHeader`) |
| `.text-section-title` | `1.1875rem` | `1.4` | `600` | Card/section headings (`CardTitle` default) |
| `.text-kpi-value` | `1.875rem` → `2.125rem` at `≥768px` | `1.15` | `700` | `font-variant-numeric: tabular-nums`; used by `ScoreRing`'s center value |
| `.text-supporting` | `0.8125rem` (`0.875rem` in `[dir="rtl"]`) | `1.55` | — | `color: var(--foreground-muted)`; secondary/meta copy |
| `.text-label` | `0.75rem` | — | `600` | `letter-spacing: 0.04em`, `text-transform: uppercase`, `color: var(--foreground-muted)`; used by `SectionTitle`'s `<h2>` |

RTL-specific overrides:
- `[dir="rtl"] .text-supporting` bumps to `0.875rem` (Arabic reads smaller at
  matched point size).
- `[dir="rtl"] .text-label` disables uppercasing and tracking entirely —
  comment: "Arabic has no case, so uppercasing does nothing but widen
  tracking oddly" — and bumps to `0.8125rem`.
- `[dir="rtl"] body, [lang="ar"]` sets `font-family` to Arabic-first,
  `font-size: 16.5px`, `line-height: 1.85` — comment: "Arabic runs slightly
  larger: the same point size reads smaller than Latin."
- `[data-text-size="large"] body` is a user-controlled accessibility setting:
  `18px` (`18.5px` combined with RTL).

There is no `h3`/`h4`-specific scale class — `CardTitle` accepts a `level`
prop (`2 | 3 | 4`, default `2`) but always renders with the
`.text-section-title` visual style regardless of heading level, keeping the
document outline correct without adding a visual size per level.

---

## 4. Component library

| Component | File | Purpose | Key props / variants |
|---|---|---|---|
| `Button` | `src/components/ui/button.tsx` | Primary interactive control | `variant: primary\|secondary\|outline\|ghost\|destructive`, `size: sm\|md\|lg`, `loading`, `block`; `min-h-11` floor on every size |
| `LinkButton` | `button.tsx` | Same visual face as `Button` but a real `<a>`/`next/link` — "Navigation should never be a `<button onClick={() => router.push(...)}>`" | Same `variant`/`size`/`block` props |
| `Spinner` | `button.tsx` | Inline loading indicator, used inside `Button` while `loading` | — |
| `IconButton` | `button.tsx` | Icon-only control | `label` (required — "an icon-only control with no accessible name is unusable"), `tone: default\|brand\|danger`; `-m-2.5` negative margin over `h-11 w-11` to give a 44×44 hit target without growing visual footprint |
| `Card` / `CardHeader` / `CardTitle` / `CardBody` / `CardFooter` | `src/components/ui/card.tsx` | Base surface container | `Card` takes `as: section\|article\|div\|li`; `CardTitle` takes `level: 2\|3\|4` (renders `h2`–`h4`, always styled as `.text-section-title`) |
| `CardAction` / `CardLinkAction` | `card.tsx` | Whole-card tap targets | Real `<button>`/`<Link>` inside for keyboard/SR support; `min-h-11` |
| `Badge` | `src/components/ui/badge.tsx` | Status/tag pill | `tone: neutral\|brand\|positive\|negative\|warning\|info` (6 tones); "the one place status colours are spent as backgrounds" |
| `MasteryMeter` | `badge.tsx` | Skill mastery indicator | `level` (0–6, mapped to tone via `MASTERY_TONE`), `label`, `a11yLabel`, `compact`; renders 6 segment blocks + number + label — 3 redundant encodings |
| `Sheet` | `src/components/ui/sheet.tsx` | Modal — bottom sheet on phone, centered dialog `sm:` and up | `open`, `onClose`, `title`, `closeLabel`, `footer`; `role="dialog"`, `aria-modal`, full keyboard focus trap (Tab/Shift+Tab cycling), Escape-to-close, body scroll lock, focus restore to the previously focused element on close |
| Icon set (27 icons) | `src/components/ui/icons.tsx` | Iconography | `HomeIcon`, `LearnIcon`, `PracticeIcon`, `ProgressIcon`, `ProfileIcon`, `StudioIcon`, `XIcon`, `CheckIcon`, `ChevronIcon` (auto-mirrors via `.flip-rtl`), `LockIcon`, `PlayIcon`, `MicIcon`, `ArrowUpIcon`/`ArrowDownIcon`, `SparkIcon`, `AlertIcon`, `InfoIcon`, `BookmarkIcon`, `GlobeIcon`, `ClockIcon`, `ShieldIcon`, `UsersIcon`, `FolderIcon`, `ChipIcon`, `ScaleIcon`, `HandshakeIcon`, `MessageIcon`, `GrowthIcon`, `RefreshIcon`, `PlusIcon`, `BookIcon`; all `aria-hidden`/decorative by default, one shared `Svg` wrapper (`strokeWidth 1.75`, 24×24 viewBox) |
| `DomainIcon` | `icons.tsx` | Looks up a legal-domain icon by string key (`handshake`, `message`, `scale`, `clock`, `users`, `growth`, `folder`, `shield`, `chip`, `globe`, `book`) | Falls back to `ScaleIcon` for unknown keys |
| `Skeleton` / `SkeletonCard` / `LoadingRegion` | `src/components/ui/feedback.tsx` | Loading states | Comment: "Skeletons, not spinners — an empty page that reflows is worse than a slow one"; `LoadingRegion` wraps in `role="status" aria-live="polite"` |
| `EmptyState` | `feedback.tsx` | Zero-data state | `title`, `body?`, `action?`, `icon?`; dashed-border card |
| `ErrorState` | `feedback.tsx` | Error state | `role="alert"`; negative-tint card with `AlertIcon` |
| `Callout` | `feedback.tsx` | Inline banner/note | `tone: info\|positive\|warning\|negative\|brand`, `title?`, `icon?` |
| `Field` | `src/components/ui/form.tsx` | Form-field wrapper owning id/label/hint/error wiring | Render-prop `children({id, aria-describedby, aria-invalid, aria-required})`; comment on why this exists: unlinked visual labels are "the single most common real accessibility miss in hand-built forms" |
| `Input` / `Textarea` / `Select` | `form.tsx` | Base form controls | Share the `CONTROL` class string (`min-h-11`, `rounded-[var(--radius-control)]`, focus border in brand color); `Textarea` sets `dir="auto"` |
| `ChoiceGroup` | `form.tsx` | Radio/checkbox group as large tappable rows | `multiple`, `options`, real `<input>` elements for native semantics |
| `SegmentedControl` | `form.tsx` | Small option switcher | `role="radiogroup"`, pill-shaped, active option gets `--surface` + `--shadow-sm` |
| `Toggle` | `form.tsx` | Boolean switch | `role="switch"`; 44px hit area supplied via `before:absolute before:-inset-2.5`, not by the visible track size |
| `ProgressBar` | `src/components/ui/progress.tsx` | Linear progress | `value`, `max`, `tone: brand\|positive\|info`, `showValue?`; `role="progressbar"` |
| `StepDots` | `progress.tsx` | Unit-player step indicator | Comment: "dots, not a bar, so steps stay countable" |
| `ScoreRing` | `progress.tsx` | Circular score display | `value`/`max` always printed as text inside the ring — "Score is always printed inside the ring, never conveyed by arc length alone"; ring color thresholds: `≥0.8` positive, `≥0.55` brand, else warning |
| `Page` | `src/components/layout/app-shell.tsx` | Page content wrapper | `max-w-lg`, `.app-scroll` |
| `AppHeader` | `app-shell.tsx` | Sticky page header | `title`, optional `back` (href or onClick), `right` slot; sticky, blurred background, `.safe-top` |
| `BottomNav` | `app-shell.tsx` | Primary 5-tab navigation | `showStudio` toggles the 5th tab between Studio (admin/content roles) and Profile (learners) — comment: "Five destinations, no more" |
| `SectionTitle` | `app-shell.tsx` | Section heading within a `Page` | Renders `.text-label` as an `<h2>` |
| `OfflineBanner` | `app-shell.tsx` | Connectivity banner | `role="status"`, warning tint |

---

## 5. The "one brand-colour action per screen" rule

`button.tsx` states this directly as a code comment on the `primary` variant
(line 9–11):

```ts
const VARIANTS: Record<Variant, string> = {
  // The only variant that spends the brand colour. One per screen.
  primary:
    "bg-[var(--color-brand)] text-[var(--color-brand-contrast)] hover:bg-[var(--color-brand-dark)] active:bg-[var(--color-brand-active)] shadow-[var(--shadow-sm)]",
  ...
```

The five `Button`/`LinkButton` variants, and how each spends color:

| Variant | Background | Text | Border | Spends brand colour? |
|---|---|---|---|---|
| `primary` | `var(--color-brand)` | `var(--color-brand-contrast)` (white) | none | **Yes** — the one reserved slot |
| `secondary` | `var(--surface)` | `var(--foreground)` | `var(--border-strong)` | No |
| `outline` | transparent | `var(--foreground)` | `var(--border-strong)` | No |
| `ghost` | transparent | `var(--foreground-secondary)` | none | No |
| `destructive` | `var(--color-negative)` | white | none | No (spends the negative status colour, not brand) |

`home/page.tsx` demonstrates the rule in practice on the home dashboard: the
"Continue your journey" card's CTA is `variant="primary"` (the one action
that advances the learner's core task), while every other actionable
control on the same screen — "Today's mission" start, weekly-goal card,
"Legal English quick practice" start — uses `variant="secondary"` or
`variant="ghost"`. Only one primary-variant button appears per rendered
screen state.

`Badge`'s `brand` tone (`bg-[var(--color-brand-tint)] text-[var(--color-
brand)]`) and `MasteryMeter`'s brand-tone segments are the exception the
codebase explicitly calls out: `badge.tsx`'s comment notes tints/badges are
"the one place status colours are spent as backgrounds" outside of the
primary button, but these are tinted (`--color-brand-tint`, a near-white
wash) rather than the full-saturation `--color-brand` fill, so they don't
compete visually with a primary button's solid fill.

---

## 6. RTL-aware primitives

Two CSS-level primitives in `globals.css` carry the bidirectional-text
correctness that the rest of the app builds on (full localization
architecture is documented in `MOBILE_UX_ARCHITECTURE.md`; this section
covers only the tokens themselves):

### `.num`

```css
/**
 * Every number, score, date and count. Forces tabular figures so columns line
 * up, and isolates direction so a Latin numeral inside an Arabic sentence is
 * not reordered by the bidi algorithm.
 */
.num {
  font-variant-numeric: tabular-nums;
  direction: ltr;
  unicode-bidi: isolate;
}
```

Why both properties are necessary together: `direction: ltr` alone would fix
digit ordering but could still let the number's bidi context bleed into or
be affected by surrounding Arabic runs at the boundary; `unicode-bidi:
isolate` creates an independent bidi embedding for the number so it neither
absorbs nor leaks direction from its container. `font-variant-numeric:
tabular-nums` is a third, unrelated concern bundled in for convenience —
fixed-width digits so numbers in columns (scores, counts) align. Applied
directly in components handling numeric output, e.g. `ScoreRing`'s value
span (`className="num text-kpi-value leading-none"`), `ProgressBar`'s
`showValue` caption, and `progress/page.tsx`'s streak count.

### `.flip-rtl`

```css
/** Mirrors a directional glyph (chevrons, arrows) without a second icon set. */
[dir="rtl"] .flip-rtl {
  transform: scaleX(-1);
}
```

Used directly inside `ChevronIcon` (`icons.tsx`): the icon component applies
`className="flip-rtl"` to itself unconditionally, so a single SVG path
mirrors automatically under `dir="rtl"` rather than requiring a second,
Arabic-specific icon asset. `AppHeader`'s back arrow (`app-shell.tsx`) uses
the same class on its inline `<svg>`.

Other RTL/LTR-safe helpers in the same block of `globals.css`:

| Class | Rule | Purpose |
|---|---|---|
| `.wrap-anywhere` | `overflow-wrap: anywhere; word-break: normal;` | "Long unbroken Arabic strings should wrap, not overflow their card." |
| `.thin-scroll` | `scrollbar-width: thin; scrollbar-color: var(--border-strong) transparent;` | Visible-but-quiet scrollbar on pointer devices |
| `.no-scrollbar` | hides scrollbar cross-browser | Touch-driven horizontal scroll regions |

---

## 7. Dark mode

`globals.css` defines a complete dark token set under `[data-theme="dark"]`
(not a `prefers-color-scheme` media query — it's an explicit data-attribute
switch, meaning the app controls activation rather than following the OS
automatically by default). Every token from §2.1–2.3 is redefined:

| Token | Light | Dark |
|---|---|---|
| `--background` | `#f7f8fa` | `#15130f` |
| `--surface` | `#ffffff` | `#1f1b16` |
| `--surface-muted` | `#f8fafc` | `#262019` |
| `--surface-soft` | `#f9fafb` | `#201c17` |
| `--foreground` | `#111827` | `#f2ede7` |
| `--foreground-secondary` | `#475569` | `#cbc2b8` |
| `--foreground-muted` | `#64748b` | `#b8ada2` |
| `--border` | `#e5e7eb` | `#382f27` |
| `--border-strong` | `#d1d5db` | `#4a4038` |
| `--color-brand` | `#7a1832` | `#b2455f` |
| `--color-brand-dark` | `#641329` | `#cc6a80` |
| `--color-brand-active` | `#521020` | `#d98599` |
| `--color-brand-light` | `#a6415a` | `#cc6a80` |
| `--color-brand-tint` | `#f9eff2` | `#34222a` |
| `--color-brand-contrast` | `#ffffff` | `#1a1013` |
| `--color-positive` | `#16794b` | `#4cb684` |
| `--color-positive-tint` | `#ecfdf3` | `#16281f` |
| `--color-negative` | `#b42318` | `#e0655c` |
| `--color-negative-tint` | `#fff1f0` | `#2e1917` |
| `--color-warning` | `#a15c00` | `#d99a35` |
| `--color-warning-tint` | `#fff7e6` | `#2e2415` |
| `--color-info` | `#175cd3` | `#5b9bf0` |
| `--color-info-tint` | `#eff6ff` | `#1a2a3d` |

Notably, dark-mode backgrounds are a warm near-black (`#15130f`, `#1f1b16`)
rather than a neutral/cool gray, keeping continuity with the burgundy brand
tone rather than reading as a generic dark theme. Source comment: "Hover
direction inverts on dark: lighter reads as 'raised', where darker did on
light" — explaining why `--color-brand-dark`/`--color-brand-active` are
*lighter* than `--color-brand` in dark mode, the inverse of light mode's
progression.

Focus outlines also swap: `:focus-visible` uses `var(--color-brand)` in
light mode and `var(--color-brand-light)` under `[data-theme="dark"]` for
sufficient contrast against the dark surface.

Shadow tokens (`--shadow-sm/md/lg`), radius tokens, and the mobile-chrome
tokens are not redefined per-theme — they carry the same values in both
modes.

---

## 8. Accessibility tokens

### 44px tap-target floor

`globals.css` defines it as a utility with an explicit comment (line 268):

```css
/** Minimum comfortable target. Applied by the Button/IconButton primitives. */
.tap-target {
  min-block-size: 2.75rem;
  min-inline-size: 2.75rem;
}
```

`2.75rem` = `44px` at the default `16px` root font size. In practice most
components don't reference the `.tap-target` class name directly — they bake
the same `2.75rem`/`44px` floor in via Tailwind's `min-h-11`/`h-11`/`w-11`
utilities (Tailwind's `11` spacing step = `2.75rem`), which resolve to the
identical pixel value:

| Component | Technique |
|---|---|
| `Button` | `min-h-11` applied unconditionally in the base class string, comment: "44px floor on every control, not just icon buttons." |
| `LinkButton` | Same `min-h-11` on the `<Link>` element |
| `IconButton` | `h-11 w-11` visible box, but wrapped with `-m-2.5` negative margin — comment: "The icon stays visually small; the tap target is a full 44×44. The negative margin pulls the *visual* footprint back so surrounding layout doesn't grow." |
| `CardAction` / `CardLinkAction` | `min-h-11` |
| `Field` inputs (`Input`/`Textarea`/`Select`) | shared `CONTROL` class includes `min-h-11` |
| `ChoiceGroup` option rows | `min-h-11` on each `<label>` row |
| `Toggle` | Visible track is smaller (`h-7 w-12`), but the 44px hit area is supplied separately via `before:absolute before:-inset-2.5 before:content-['']` — an invisible pseudo-element expanding the clickable region without enlarging the switch visually |
| `AppHeader` back button | `h-11 w-11` with `-ms-2.5` negative margin (same technique as `IconButton`) |
| `BottomNav` items | `min-h-[3.25rem]` (52px) per tab — comment: "44px floor comes from min-h-[3.25rem] plus the label row" (the tap target includes the icon+label stack, not just the icon) |

### Other accessibility floors baked into tokens/CSS

- **Focus ring**: `:where(a, button, [role="button"], input, select,
  textarea):focus-visible` gets a `2px solid var(--color-brand)` outline
  with `2px` offset globally — not opt-in per component.
- **Reduced motion**: honored both via the OS-level `@media
  (prefers-reduced-motion: reduce)` query and an app-level
  `[data-reduced-motion="true"]` selector (a user-facing in-app toggle,
  independent of OS setting), both forcing near-zero animation/transition
  durations.
- **Color is never the sole carrier of meaning**: `Badge`'s doc comment —
  "Colour is never the only carrier: tone always ships with an icon or
  word" — and `MasteryMeter`'s three redundant encodings (segments + number
  + label) are structural instances of this rule, not just a note.
- **Skip link**: `.skip-link` is a real, if visually hidden until focus,
  in-page skip-to-content control (`position: absolute`, `inset-block-start:
  -4rem` off-screen, `:focus` brings it to `0.5rem`).
