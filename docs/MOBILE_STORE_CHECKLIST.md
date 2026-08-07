# Mobile store readiness checklist

## 1. Confirm the real production domain

`MOBILE_APP_SERVER_URL` must point at a domain **you have personally
verified is live and returns the real app**, not a guess. This project's
own `.scratch/status.md` records that this was still an open item as of
an earlier session (placeholder Vercel env vars). Verify with:

```
curl -I https://your-real-domain
```

Then set `MOBILE_APP_SERVER_URL=https://your-real-domain` before running
`npx cap sync`.

## 2. Replace every placeholder before submission

```
grep -rn "REPLACE_WITH_" --include="*.xml" --include="*.plist" --include="*.entitlements" --include="*.json" --include="*.ts" .
```

Currently: `android/app/src/main/AndroidManifest.xml` (production domain),
`public/.well-known/assetlinks.json` (SHA-256 fingerprint),
`ios/App/App/App.entitlements` + `public/.well-known/apple-app-site-association`
(Team ID / domain).

## 3. App identity — where each value lives

| What | Where |
|---|---|
| App ID (`com.aijur.skills`) | `capacitor.config.ts`'s `APP_ID` |
| App name | `capacitor.config.ts`'s `APP_NAME` |
| Android `applicationId`/`versionCode`/`versionName` | `android/app/build.gradle` |
| iOS Bundle ID / Display Name | Xcode's Signing & Capabilities / General panes (reads `PRODUCT_BUNDLE_IDENTIFIER` from `project.pbxproj`) |
| iOS version/build | Xcode's General pane (`MARKETING_VERSION`/`CURRENT_PROJECT_VERSION`, referenced by `Info.plist`) |

After changing any of these, run `npx cap sync` to propagate.

## 4. Required env vars (mobile-specific)

See `.env.example`'s "Mobile app (Capacitor)" and "Push notifications"
sections: `MOBILE_APP_SERVER_URL`, `MOBILE_APP_ALLOW_CLEARTEXT`,
`FIREBASE_PROJECT_ID`, `APNS_KEY_ID`, `APNS_TEAM_ID`. None have real
values committed anywhere.

## 5. Firebase / APNs setup (only if push sending is wanted)

Registration already works with zero real credentials — see
`docs/MOBILE_PUSH_NOTIFICATIONS.md` for exactly what's built and exactly
what real Firebase project / APNs key creation steps remain (a real
Firebase project + `google-services.json`, a real APNs Auth Key). Neither
was invented or faked in this codebase.

## 6. Android signing key

```
keytool -genkeypair -v -keystore aijur-release.jks -alias aijur -keyalg RSA -keysize 2048 -validity 10000
```

Store the resulting `.jks` and its passwords **outside git**
(`android/.gitignore` already excludes `*.jks`/`*.keystore`/
`key.properties`). **Play App Signing** (Google-managed key custody) is
recommended over self-managed keys for a first submission — upload key
generated locally, app signing key managed by Google.

## 7. Apple signing

Requires a real Apple Developer Program membership and macOS + Xcode —
not available in this environment. In Xcode: select the `App` target →
Signing & Capabilities → choose your real Team → let Xcode manage signing
(or configure manual provisioning profiles) → Product → Archive →
Distribute App. **No Team ID or certificate was fabricated anywhere in
this repository** — `ios/App/App.xcodeproj` has no team assigned.

## 8. Real test/build results (this session)

- `npx tsc --noEmit`: clean
- `npm run lint`: clean
- `npm run test`: 224/224 unit tests passing
- `npm run build`: clean production build
- `npx playwright test` (`CI=1`): **127/127 e2e tests passing**, including
  RTL/LTR, accessibility (axe-core), PWA offline behavior, and full
  simulation/content coverage
- **Real Android SDK installed in this session** (`platform-tools`,
  `platforms;android-36`, `build-tools;36.0.0`), and both
  `./gradlew assembleDebug` and `./gradlew assembleRelease` (unsigned)
  **genuinely succeeded** — real `.apk` files produced and verified with
  `aapt dump badging` (package `com.aijur.skills`, versionCode 1).
- **iOS was NOT built** — no macOS/Xcode available in this environment.
  The iOS project is fully generated and configured; opening it in Xcode
  and resolving Swift Package dependencies is the next real verification
  step, on a real Mac.
- `npm audit --omit=dev`: **0 vulnerabilities** — `drizzle-orm` and `next`
  were upgraded (`0.44.7`→`0.45.2`, `16.2.12`→`16.3.0`) to real fixed
  versions this session (not just documented as deferred), then the full
  verify loop above was re-run clean against the upgraded versions.

## 9. Remaining manual steps before publishing

1. Confirm the real production domain (§1) and set `MOBILE_APP_SERVER_URL`.
2. Replace every `REPLACE_WITH_*` placeholder (§2).
3. Generate real Android and Apple signing keys (§6-7).
4. Set up Firebase/APNs if push sending is wanted (§5) — optional, the app
   works fully without it (registration just has nothing to receive yet).
5. Have `src/lib/legal/content.ts`'s Privacy Policy and Terms of Use
   reviewed and finalized by a licensed lawyer — both currently render a
   visible banner marking them as drafts.
6. On a real Mac: open `ios/App/App.xcworkspace` (or `.xcodeproj` if no
   CocoaPods/SPM resolution step is needed) in Xcode, assign a real Team,
   resolve the Capacitor Package.swift dependencies, and do a real Debug
   build on the Simulator before attempting an Archive.
7. Wire `ios/App/App/App.entitlements` into the Xcode target's
   `CODE_SIGN_ENTITLEMENTS` build setting (Signing & Capabilities → Add
   Capability → Associated Domains) — cannot be done blind from this
   environment.
8. Capture real screenshots at the required sizes (`store-assets/README.md`).

## 10. Final checklists

**App Store**: real Team assigned in Xcode; Associated Domains capability
added (§9.7); Privacy Manifest completed (`store-assets/README.md`);
accurate privacy "nutrition label" answered from `docs/MOBILE_SECURITY.md`;
in-app account deletion path demonstrated (already built — Profile →
delete account); real screenshots at every required size; a working demo
account provided in review notes, never in git.

**Google Play**: real (or Play App Signing) release key; target/compile
SDK 36 (already set, `android/variables.gradle`); accurate Data Safety
form answered from `docs/MOBILE_SECURITY.md`; `assetlinks.json` deployed
with the real SHA-256 fingerprint once a real signing key exists; real
screenshots + feature graphic; content rating questionnaire completed.
