# Store submission assets

Templates and checklists for App Store Connect / Google Play Console
listings. Every `[FILL IN]` marker below needs a real, verified value
before submission — none are invented marketing claims.

## Listing copy templates

### Short description (Play Store, 80 chars max)

> AIJUR Skills — professional, operational, and legal skills training with real-world simulations.

### Full description (both stores)

> AIJUR Skills is a training platform for the professional, operational, and
> legal skills law school doesn't teach — through interactive exercises and
> realistic client/colleague simulations, with AI-assisted feedback on your
> answers.
>
> [FILL IN — 2-3 more paragraphs once the real subscription/access model for
> this store listing is finalized (see docs/MOBILE_APP_ARCHITECTURE.md and
> the app's own admin-managed subscription system). Do not describe AI
> evaluations as legal advice or as a substitute for a licensed lawyer.]

### Keywords (Play Store, 30 chars per line)

`[FILL IN]` — pick from the app's actual competency domains once finalized
(see `content/framework/` domains) rather than generic legal-app keywords.

## Screenshot size checklist

**iOS (App Store Connect)** — at minimum, one set at each required size:
- 6.9" (iPhone 16 Pro Max class): 1320 × 2868 or 2868 × 1320
- 6.5" (iPhone 11 Pro Max / XS Max class): 1284 × 2778 or 1242 × 2688
- iPad Pro 13" (if the app supports iPad): 2064 × 2752

**Android (Play Console)**:
- Phone: at least 2 screenshots, 16:9 or 9:16, min 320px, max 3840px per side
- 7" tablet and 10" tablet, if the app supports tablets
- Feature graphic: 1024 × 500

Capture real screens (Home, a unit in progress, a simulation, Progress) —
never mockups presented as real screenshots. `store-assets/ios/screenshots/`
and `store-assets/android/screenshots/` are empty on purpose; populate them
once real builds can be run on the respective platform.

## Privacy questionnaire / Data Safety notes

Both stores ask "what data does this app collect and why." Answer from
`src/lib/legal/content.ts` (`privacyPolicy`) and `docs/MOBILE_SECURITY.md`,
not from memory — they're both grounded in the actual schema:

- **Collected**: name, email, hashed password, learning progress/answers,
  push token (mobile, opt-in only).
- **Shared with**: an AI provider (Anthropic and/or OpenAI, consent-gated),
  an email provider (Resend). Never sold, never used for ads.
- **Deletable by the user**: yes — real, in-app, immediate (see
  `deleteOwnAccount()` in `src/lib/actions/profile.ts`).
- **Encrypted in transit**: yes, HTTPS-only in production (see
  `docs/MOBILE_SECURITY.md`).

Apple's **Privacy Manifest** (`PrivacyInfo.xcprivacy`) is not yet added to
the iOS project — it must be created and verified inside Xcode against the
final set of native APIs actually used (Capacitor plugins each ship their
own manifest; the app target needs its own listing required-reason APIs
used, if any). `[FILL IN — complete in Xcode once available]`.

## Content rating

`[FILL IN]` — answer both stores' content-rating questionnaires honestly;
this is a professional skills-training app with no user-generated public
content, no violence, no gambling.

## Review instructions / demo account

Provide reviewers a real demo account they can actually sign in with.
**Never commit a real password to git.** Create the demo account through
the app's own sign-up flow or the Admin Dashboard's subscriber-creation
tool, and paste the credentials directly into App Store Connect's /
Play Console's review-notes field (not into any file in this repo).

## Before you submit

- [ ] Confirm the real production domain (see `docs/MOBILE_APP_ARCHITECTURE.md` §1)
- [ ] Replace every `REPLACE_WITH_*` placeholder (grep the repo)
- [ ] Real signing keys generated for both platforms (`docs/MOBILE_STORE_CHECKLIST.md` §8-9)
- [ ] Privacy Policy / Terms pages reviewed by a licensed lawyer (`src/lib/legal/content.ts`)
- [ ] Real screenshots captured on real devices/simulators
- [ ] `npm run verify` clean, real Android release build produced
