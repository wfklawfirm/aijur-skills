# Mobile deep links

One central resolver (`src/lib/platform/deep-links.ts`) used by both entry
points — never two copies of the URL-parsing logic:

- **`appUrlOpen`** (Universal Links on iOS / App Links on Android, tapped
  from outside the app) — handled in `src/components/layout/native-init.tsx`.
- **Push notification tap** — handled in `src/lib/platform/push.ts`'s
  `pushNotificationActionPerformed` listener, reading the notification's
  `data.url`.

Both call `resolveDeepLinkUrl(rawUrl, locale)`, which strips any leading
`/{locale}` segment, matches against a fixed route table
(`matchDeepLinkPath`), and returns a real in-app href
(`deepLinkHref(target, locale)`). Anything unrecognized falls back to
`/{locale}/home` rather than leaving the app on a blank or errored route.

Covered targets: home, verify-email, reset-password, skill (`/learn/
[slug]`), unit, simulation, subscription-ended, practice, progress.
Deliberately does **not** include a "certificate" target — no such route
exists anywhere in this app (grep-verified against
`src/app/(app)/[locale]/`), and inventing one here would be exactly the
"remaining problems disclosed, not hidden" failure mode the brief warns
against everywhere else.

## Real domain verification required — no fake values shipped

Both platform config files use an explicit, grep-able placeholder instead
of a guessed Team ID / domain / SHA-256 fingerprint:

- **Android** (`android/app/src/main/AndroidManifest.xml`): an
  `android:autoVerify="true"` intent-filter with
  `android:host="REPLACE_WITH_PRODUCTION_DOMAIN"`, plus a matching entry
  required at `public/.well-known/assetlinks.json` on that real domain —
  currently `REPLACE_WITH_REAL_SHA256_RELEASE_SIGNING_CERT_FINGERPRINT`,
  which can only be filled in once a real release signing key exists (see
  `docs/MOBILE_STORE_CHECKLIST.md` §8).
- **iOS** (`ios/App/App/App.entitlements`, new): `applinks:
  REPLACE_WITH_PRODUCTION_DOMAIN`, plus a matching
  `public/.well-known/apple-app-site-association` entry with `appID:
  REPLACE_WITH_TEAM_ID.com.aijur.skills`. **This entitlements file exists
  on disk but is not yet wired into the Xcode project's build settings**
  (`CODE_SIGN_ENTITLEMENTS`) — that requires either a real Apple Developer
  Team in Xcode or careful manual `project.pbxproj` editing verified in
  Xcode itself, neither of which is possible without macOS. See
  `docs/MOBILE_STORE_CHECKLIST.md` §9 for the exact manual step.
- **Custom-scheme fallback** (`aijurskills://`) works on both platforms
  with zero server-side verification, as a fallback for anyone testing
  before the real domain/Team ID exist.

Next also serves `apple-app-site-association` with the correct
`Content-Type: application/json` (`next.config.ts`'s `headers()`) — Apple
rejects the file otherwise, since it deliberately has no `.json`
extension in its URL.
