# Mobile app security — what's enforced and how it was verified

Checklist items from the native app conversion brief §19, each mapped to
where it's actually enforced (not just asserted):

- **HTTPS only in production** — `capacitor.config.ts`'s `server.cleartext`
  defaults to `false` and is only ever `true` when
  `MOBILE_APP_ALLOW_CLEARTEXT=true` is explicitly set (documented in
  `.env.example` as dev-only, LAN-testing use). `androidScheme`/`iosScheme`
  are both pinned to `"https"`.
- **No cleartext traffic in Android production** — Android's own default
  (`usesCleartextTraffic` defaults to `false` once `targetSdkVersion >= 28`,
  and this project targets 36 — verified in `android/variables.gradle`) —
  no explicit override exists anywhere in `AndroidManifest.xml` that would
  re-enable it.
- **No secrets in the client bundle** — every env var read by
  `capacitor.config.ts` (`MOBILE_APP_SERVER_URL`, `MOBILE_APP_ALLOW_CLEARTEXT`)
  is a plain origin URL / boolean, read at **build/sync time only**, baked
  into native config files, never into JS shipped to the WebView. Verified
  by grep: no `NEXT_PUBLIC_*` variable was added by this work, and no
  `FIREBASE_*`/`APNS_*` value (server-side-only, per `.env.example`) is
  referenced anywhere under `src/lib/platform/` or any client component.
- **Admin APIs protected server-side** — unchanged from `docs/SECURITY.md`
  §3/§3.2: every admin mutation re-checks its own permission inside
  `*-core.ts`, regardless of which client (web browser or the native
  WebView) the request came from — the native app has no special access
  path.
- **Subscription/content access checked server-side** — unchanged from
  `docs/ADMIN_DASHBOARD.md` §6: `subscriptionBlocksContent()` runs on the
  server on every `/home` request; nothing about running inside a native
  shell changes that.
- **Never trust the device** — no `platformRole`/subscription status is
  ever cached in `Preferences`/local storage and trusted as an access
  decision; `src/lib/platform/storage.ts` is explicitly scoped to
  non-sensitive device state only (push token, sync flags) — see that
  file's own header comment.
- **Session storage** — the httpOnly session cookie is never touched by
  any code added in this work; it lives in the WebView's own cookie jar,
  unreadable by JavaScript on web or native alike (see
  `docs/MOBILE_APP_ARCHITECTURE.md` §4 for the full reasoning on why this
  is stronger than moving it into JS-accessible secure storage).
- **Real, self-service account deletion** — `src/lib/actions/profile.ts`'s
  `deleteOwnAccount()`: requires the user's current password
  (`verifyPassword`), guards against removing the last Super Admin
  (`assertSuperAdminSurvives`, shared with the Admin Dashboard) or
  orphaning an organization (sole `owner` membership with other real
  members), audit-logs the action, then does a real `DELETE FROM users`.
  Verified this session that libSQL enforces `PRAGMA foreign_keys = ON`
  by default, so every dependent table's declared `onDelete: "cascade"`/
  `"set null"` (schema.ts) performs the actual cascade — no per-table
  cleanup code to keep in sync by hand. This replaces what was previously
  a disabled button showing a generic error (a real "non-functional
  button" gap, now closed).
- **WebView debugging disabled in production** — verified by reading
  Capacitor's own `Bridge.java`/`CapConfig.java` source in this session:
  `WebView.setWebContentsDebuggingEnabled(...)` defaults to
  `ApplicationInfo.FLAG_DEBUGGABLE`, which Android's own release build
  type sets to `false` automatically (no `debuggable true` override exists
  anywhere in `android/app/build.gradle`). Nothing to add — the default is
  already correct, and this session didn't just assume that, it read the
  library source to confirm it.
- **Navigation restricted to the app's own origin** —
  `capacitor.config.ts`'s `server.allowNavigation` is set to only the
  configured server's hostname; every other link is intercepted and routed
  through `src/lib/platform/links.ts`'s classifier (system browser / in-app
  browser tab / mailto / tel), never left to navigate the main WebView
  itself to an arbitrary domain.
- **Root/jailbreak detection** — deliberately NOT added. The brief itself
  says to do this only "if there's a genuine need," and this app has no
  DRM-protected content, no payment flow, and no anti-cheat requirement
  that would justify it — adding a jailbreak-detection plugin here would
  be exactly the "unused plugin, unnecessary permission" the brief
  separately warns against (§29).
- **Certificate pinning** — deliberately NOT added, per the brief's own
  explicit condition ("only if the architecture requires it and it's
  managed correctly") — this app's server URL and TLS setup already goes
  through whatever host/CDN terminates HTTPS for the real deployment
  (unconfirmed as healthy right now — see `docs/MOBILE_APP_ARCHITECTURE.md`
  §1); pinning against an address that may still change would create an
  outage risk with no corresponding security benefit for this app's threat
  model.
- **Dependency vulnerabilities** — see `docs/MOBILE_STORE_CHECKLIST.md`
  §7 for the current `npm audit --omit=dev` state and what was and wasn't
  fixable without a major-version bump.
