# Mobile app architecture — converting AIJUR Skills to a real native app

This documents the audit (native app conversion brief §§1-2) and the
architectural decision that followed, plus what's shared between web and
native and what's native-only.

## 1. Audit — what this project actually was before this work

- **Framework**: Next.js 16 (App Router), React 19. Every content page is a
  Server Component; every mutation is a Server Action against the database
  directly (Drizzle ORM over libSQL/Turso) — **there is no separate REST/
  JSON API** the app calls. This is the single fact that drove the
  architecture decision below.
- **Auth**: a signed, httpOnly session cookie (`src/lib/auth/session.ts`),
  scrypt-hashed passwords, no OAuth/social login yet.
- **Routing**: locale-prefixed (`/{ar|en}/...`), resolved by
  `src/proxy.ts` (Next middleware).
- **Existing PWA**: a manifest + service worker already existed
  (`public/manifest.webmanifest`, `public/sw.js`) with real offline
  fallback behavior (`tests/e2e/pwa-offline.spec.ts`).
- **Env vars**: `DATABASE_URL`/`DATABASE_AUTH_TOKEN`, `ANTHROPIC_API_KEY`/
  `OPENAI_API_KEY` (AI grading), `RESEND_API_KEY` (email), `APP_URL`. None
  of these are safe to ship inside a client bundle, and none were.
- **Assets**: a real AIJUR logo existed (`public/brand/*.png`) but no
  dedicated native app icon/splash source set.
- **RTL**: the app is Arabic-first with a real, tested RTL layout
  (`tests/e2e/rtl.spec.ts`) — nothing to retrofit here.
- **Screen compatibility**: mobile-first design system already in place
  (5-item bottom nav, safe-area CSS helpers already existed before this
  work in `globals.css`'s `.safe-top`/`.safe-bottom`).
- **Unsupported Browser APIs / file handling / external links**: no native
  file pickers, no deep-link handling, no push notifications existed prior
  to this work — all genuinely new, not a retrofit.
- **Build/hosting**: Vercel (web), Turso (DB). See the open item below.

### Open item this audit could not close

**The real, currently-healthy production domain is not confirmed.** This
project's own `.scratch/status.md` records that Vercel's environment
variables were, as of an earlier session, still placeholder values, and
that whether the live deployment is actually healthy right now is an open
question independent of this task. `MOBILE_APP_SERVER_URL` (below) is
therefore deliberately left unset in every committed file — it must be set
to a domain you have personally confirmed is live and healthy, not
guessed. See `docs/MOBILE_STORE_CHECKLIST.md` for the exact verification
steps.

## 2. Architectural decision: Capacitor, "live server" pattern

**Capacitor**, not React Native, not Flutter, not a full rebuild — per the
brief's own stated preference and because this app's UI is 100% preserved
this way.

**The WebView loads the real, live Next.js deployment over HTTPS**
(`capacitor.config.ts`'s `server.url`), rather than a static-exported
bundle. This is not "just a WebView that opens the site": there is no
browser chrome, no address bar, and every non-content interaction — icon,
splash screen, status bar, safe areas, the Android back button, deep
links, push notifications, native share, secure device state, network
detection — is real native Capacitor code, documented file-by-file below.

**Why not a static export bundled into the app**: this app has no REST
API. Every page is a Server Component and every mutation a Server Action
against the database directly. A static export would mean either (a)
rebuilding every page as a client component calling a REST API that
doesn't exist yet, or (b) duplicating business logic across a web
codebase and a mobile codebase — both explicitly prohibited by the brief.
The live-server pattern preserves 100% of the existing code and ships
zero duplicated logic.

**Why this still counts as a real native app**: the prohibited pattern is
"a WebView with visible browser UI that just opens the marketing site."
This app has `androidScheme`/`iosScheme` set to `https` (no visible
`file://` or raw WebView chrome), `server.allowNavigation` locked to only
the app's own hostname (the WebView itself can never browse to an
arbitrary domain), and a real native shell around it — see §3.

## 3. What's shared vs. what's native-only

**Shared (100% of it)**: every page, every Server Action, the database,
the design system, i18n, RTL/LTR, accessibility. Zero duplication.

**Native-only** (`src/lib/platform/*`, one file per concern — never
scattered `if (iOS)/if (Android)` conditionals in components):

| File | Concern |
|---|---|
| `capacitor.ts` | `isNativePlatform()`/platform detection |
| `storage.ts` | Non-sensitive device state (Preferences) |
| `links.ts` | External-link classification + routing |
| `share.ts` | Native Share Sheet → Web Share → clipboard |
| `haptics.ts` | Haptic feedback, best-effort |
| `network.ts` | Real device connectivity |
| `deep-links.ts` | Central deep-link URL resolution |
| `push.ts` | Push notification registration + tap handling |

Plus `src/components/layout/native-init.tsx` (status bar, splash hide,
Android back button, `appUrlOpen`, push listener setup — mounted once in
`[locale]/layout.tsx`).

## 4. Session storage: deliberately untouched

The existing httpOnly session cookie is not moved into JS-accessible
"secure storage." The WebView's own cookie jar (Android `CookieManager` /
iOS `WKWebsiteDataStore`) persists it across app restarts and sends it
automatically on every request to the same first-party HTTPS origin —
identical behavior to a browser, and unreadable by JavaScript either way,
which is a stronger guarantee than moving it into `Preferences` would be.
`src/lib/platform/storage.ts` is explicitly scoped to non-sensitive state
only (push token, sync flags) — see that file's own header comment.
