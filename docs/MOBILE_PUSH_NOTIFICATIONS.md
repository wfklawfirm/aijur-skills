# Mobile push notifications

## What's real and working right now

The full **registration** half of the pipeline is real, tested, and
working:

- `pushTokens` table (`src/lib/db/schema.ts`) — one row per (user, device),
  supporting real multi-device delivery (a learner on both a phone and a
  tablet gets both registered).
- `src/lib/actions/push-core.ts` / `push.ts` — upsert-by-token
  registration, unregistration (no auth check, deliberately — see the
  file's own comment), listing a user's tokens. Same core/wrapper pattern
  as every other action module in this project.
- `src/lib/platform/push.ts` — `setupPushListeners()` (registration,
  registration error, foreground receipt, tap-to-navigate via
  `resolveDeepLinkUrl`), `requestPushPermissionAndRegister()`,
  `teardownPushOnSignOut()`.
- **Permission is requested only from an explicit user action** — Profile
  → Notifications → Enable (`src/app/(app)/[locale]/profile/
  notification-settings.tsx`), never automatically on launch, per brief
  §9. That screen renders nothing at all on the web build.
- Sign-out (both the header menu and the Profile screen's own sign-out
  button) tears down the device's push registration first
  (`teardownPushOnSignOut()`), so a signed-out device stops being a valid
  push target for the account that just left it.

## What's deliberately NOT built: actually sending a push

**No real Firebase or APNs credentials exist in this project**, and none
were invented. Nothing in this codebase sends a push notification to a
device — that requires:

1. **Android (FCM)**: a real Firebase project, `google-services.json`
   placed at `android/app/google-services.json` (gitignored — never
   commit it), and the Firebase Admin SDK (or a queue that calls it)
   wired into wherever this app would decide to send one.
2. **iOS (APNs)**: a real Apple Developer account, an APNs Auth Key
   (`.p8` file, gitignored), `APNS_KEY_ID` + `APNS_TEAM_ID` set to real
   values in the server environment (never in the app bundle), and the
   Push Notifications capability + entitlement actually enabled in Xcode
   (not possible without macOS — see `docs/MOBILE_STORE_CHECKLIST.md` §9).
3. A real sending path: cron/webhook → look up `pushTokens` rows for the
   target user(s) → call FCM/APNs. Nothing like this exists yet.

## Content rules for whenever sending is built

- No sensitive content in the notification body (brief §9) — a generic
  "You have a new update" plus `data.url` for tap-to-navigate is the
  pattern to follow, not "Your evaluation score was 62%."
- Respect the device's registered `locale`/`timezone` columns.
- A "Notification Preferences" section belongs in Profile once there's
  more than one notification type to toggle — today there's exactly one
  toggle (enabled/disabled), which is what `notification-settings.tsx`
  already provides.
