# Adaptive Engine Architecture

This document covers `src/lib/adaptive/**`, `content/adaptive/**`,
`src/lib/ai/agents/adaptive-hook.ts`, `src/lib/actions/adaptive-admin*.ts`,
and `scripts/generate-adaptive-content.ts` — the AIJUR Adaptive Professional
Journey Engine: a hybrid content-and-personalization layer that generates
varied, non-repetitive, personalized "hooks" (short engagement prompts) for
learners, instead of showing every learner the same fixed set.

It is written against a 46-section build specification the product team
issued for a much larger system (personalized hooks, icebreakers, daily
challenges, scenario variations, roleplays, questions, voice/visual
exercises, Legal English activities, missions, feedback, recommendations,
and more, across a full generation pipeline, novelty-control system,
quality-gate system, and admin tooling). **This document states plainly, in
every section, what of that specification is actually built (Phase 1) and
what is deliberately deferred.** Per the spec's own explicit requirement, it
does not claim the system produces unlimited or never-repeating content, and
every diversity/quality claim below is backed by a real, computed metric,
not an assertion.

## 0. Phase 1 scope decision

The full spec is a multi-week/multi-month engineering program spanning
content types (hooks, roleplays, missions, voice/visual exercises, Legal
English activities), a full 18-step generation pipeline, background-worker
infrastructure, true semantic embeddings, a 4-panel admin suite, and ~30
named database entities.

Phase 1 delivers one complete, working, end-to-end vertical slice through
that architecture — **personalized Hooks only** — built to the same
standard the full spec describes (hybrid 3-layer content, real novelty
detection, real quality gates, human review queue, exposure tracking,
admin visibility), rather than a shallow pass across every content type.
This mirrors the spec's own permission (§34–35) that an MVP's "services"
don't need to be literal microservices, and its explicit MVP scope note
(§42) to prove the system on one path before expanding it.

Deferred to a later phase, named explicitly rather than silently dropped:

- Content types beyond hooks: icebreakers, daily challenges as a distinct
  type, scenario variations, roleplays, voice/visual exercises, Legal
  English activities, missions, feedback messages, stage intros/summaries,
  weekly reviews, return-after-absence recaps, next-mission previews.
- The full 18-step generation pipeline (Phase 1 implements reservoir-check →
  generate → quality-gate → persist → expose, which is steps 1, 4–5, 9–12,
  16 of the spec's list; branching, retry-variation state machines, and
  background pre-warming queues are not built).
- True semantic-embedding similarity (see §5 below for what's built instead
  and why).
- Source/book-grounded generation via a knowledge graph (Phase 1's composer
  only draws on skill names and the authored dimension vocabulary — it
  never touches `sources`/ingested book content, so the spec's copyright
  rules around source grounding don't yet have a code path to violate).
- The 4-panel admin dashboard (Phase 1 ships one consolidated monitor page
  — see §9).
- 4 of the spec's 12 named quality gates (see §7).
- 2 of the spec's 10 named hook types (see §6).
- Cohort-level and cross-organization diversity balancing (Phase 1 tracks
  per-user exposure only).

## 1. The three-layer hybrid content model

The spec's core strategic requirement — genuine variation in situation,
decision, difficulty, and professional benefit, not just reworded surface
text ("لا تعرض للمستخدم محتوى جديدًا شكليًا فقط") — is implemented as three
layers, matching the spec's naming:

**Layer 1 — Expert-Approved Core.** Unchanged. This is the existing
`content/**` library (skills, units, evaluation rubrics) that the rest of
the product already runs on. The adaptive engine reads from it
(`getSkillMap()`) but never writes to it.

**Layer 2 — Controlled Generative Templates.**
`src/lib/adaptive/hook-composer.ts`. Eight bilingual templates (one per
implemented hook type), each a deterministic TypeScript function of
`(skillName, hookType, careerStage, counterparty, channel, tone, goal,
locale) → {title, body, attribution}`. Authored and reviewable like any
other code — not AI output — and this is the layer that makes the product's
existing "must work with zero AI provider keys" rule (see
`docs/AI_ARCHITECTURE.md` §1, rule 2) hold for adaptive content too:
`composeHookOffline()` (`hook-composer.ts:176`) is a complete, safe,
professional-quality generator on its own.

**Layer 3 — Runtime Personalization.**
`src/lib/ai/agents/adaptive-hook.ts`. When a provider key is configured and
the learner has consented to AI processing (`allowRemote`), `generateHook()`
calls the same `runAgent()` abstraction every other agent in the product
uses (`provider.ts`), asking a model to write a hook against the exact same
Zod schema (`adaptiveHookSchema`, `src/lib/ai/schemas.ts`) the offline
composer produces. If the call fails, times out, or no key is configured,
`runAgent`'s existing fallback chain calls `composeHookOffline()` as the
`offline()` implementation — so Layer 3 never removes Layer 2, it only
optionally sits in front of it. Every call, remote or offline, is logged to
`aiModelRuns` (`agent: "adaptive_hook"`) like every other agent call.

Personalization (career stage, skill, counterparty, channel, tone, goal) is
applied identically whether Layer 2 or Layer 3 produces the text — the
*inputs* are the personal layer described in §3; which layer turns those
inputs into prose is an availability/consent decision, not a personalization
decision.

## 2. Consolidated entity model

The spec names roughly 30 database entities across content, personalization,
generation, novelty-tracking, and review-workflow concerns. Phase 1
consolidates these into **two new tables**, plus reuse of tables the product
already has:

```
adaptiveContent        -- one row per generated/composed hook instance:
                        -- dimensions, structural key, text fingerprint,
                        -- novelty/quality scores, gate report, status,
                        -- review metadata. (src/lib/db/schema.ts)
userContentExposure    -- one row per (user, content) exposure event, for
                        -- repetition avoidance and analytics.
```

Reused rather than duplicated: `profiles` (career stage, AI-consent
timestamp), `skills`/`units` (Layer 1 content and the skill graph),
`aiModelRuns` (generation call log — see `docs/AI_ARCHITECTURE.md` §2),
`masteryRecords`/`evidence`/`analyticsEvents` (any future performance-driven
personalization reads these directly rather than a parallel copy).

This is a deliberate simplification, not an oversight: the spec's own
scoping language (§34–35) allows an MVP to collapse its named services and
entities as long as the logical responsibilities are still separated in
code, which §9 below maps out.

## 3. Personalization dimensions and the Dynamic Learner Profile

Every generated hook is a function of a skill plus one value from each of
five authored dimension sets in `content/adaptive/dimensions.ts`:
`HOOK_TYPES` (situation shape), `CAREER_STAGES` (reuses the existing
onboarding `profiles.careerStage` vocabulary rather than inventing a
parallel one), `COUNTERPARTIES` (who the learner is dealing with),
`CHANNELS` (communication medium), `TONES` (counterparty's emotional
register), `GOALS` (what success looks like). This is the spec's Scenario
Composition System.

The personal inputs that select among these values, per request
(`PersonalizedHookRequest`, `hooks.ts:44`): `userId`, `skillId`,
`careerStageId` (from the learner's stored profile), `locale`, and
`allowRemote` (the AI-processing consent flag). **No psychological,
sensitive, or inferred trait is read or written anywhere in this path** —
matching the spec's explicit prohibition ("لا تستنتج سمات نفسية أو حساسة من
أداء المستخدم"). Phase 1 does not yet compute a performance-/confidence-based
personalization signal (e.g., "struggling with this skill → simpler hook");
`difficulty` exists as a column on `adaptiveContent` (currently always `1`)
specifically so that a later phase can populate it from `masteryRecords`
without a schema change.

## 4. Generation and selection flow

`getPersonalizedHook()` (`src/lib/adaptive/hooks.ts:96`) is the single
entry point, called from the Home page. Selection order, cheapest and
safest first — the spec's Content Reservoir principle ("لا نكرر التجربة"):

1. **Reservoir lookup.** Query `adaptiveContent` for an `approved`/
   `published` row for this skill the user hasn't been exposed to
   (`notInArray(id, recentExposureIds)`), preferring one whose `hookType`
   differs from the learner's immediately-previous exposure (the diversity
   scheduler). If found, record the exposure and return it — **no
   generation call happens at all** when the reservoir already has an
   unseen, good item. This is why the pregeneration script (§8) matters:
   it fills the reservoir before learners ever hit it.
2. **Fresh generation**, up to `MAX_GENERATION_ATTEMPTS = 2` randomized
   attempts. Each attempt (`attempt()`, `hooks.ts:160`) picks a random
   combination of the five dimensions (biased against the learner's last
   hook type, and re-rolled up to 3 times if it lands on a structural key
   the learner has seen in their last 20 exposures), calls `generateHook()`
   (Layer 3 or Layer 2 per §1), fingerprints and quality-gates the result
   (§5–7), **persists it regardless of outcome** (approved, rejected, or
   needing review — nothing is silently discarded, so the review queue and
   metrics in §9 are complete), and returns it only if the gates approved
   it.
3. **Fixed safe-default.** If both attempts fail to produce an
   approved result, one final attempt uses a fixed, known-good dimension
   combination (`quick_dilemma` / new client / email / cooperative /
   clarify) that passes every mechanical gate by construction. This
   guarantees a learner is never blocked waiting on generation — a
   deliberate, documented exception to strict "never publish before
   verifying" purity, justified because the alternative is showing the
   learner nothing at all. It is still a real, persisted,
   exposure-tracked row, not a hardcoded UI fallback string.

Every path — reservoir, generated, safe-default — records a
`userContentExposure` row before returning, so repetition avoidance and the
admin metrics in §9 see every exposure regardless of source.

## 5. Novelty and repetition control (what's built vs. true embeddings)

The spec calls for exact-duplicate, near-duplicate, semantic-similarity
(embeddings), structural-repetition, and exposure-based repetition control.
Phase 1 implements four of these with **offline-computable, testable
techniques** and explicitly does not implement true semantic embeddings.

**Why not embeddings:** the product's standing architectural rule (see
`docs/AI_ARCHITECTURE.md` §1, rule 2) is that every AI-touched feature must
keep working with zero provider keys configured — evaluation, simulation,
coaching, and now adaptive content all ship a deterministic offline path.
Real semantic embeddings require an external API call on every piece of
content, which would make novelty detection — a safety mechanism — hard-
dependent on a remote service being available and paid for. That would
break the existing guarantee. Phase 1 instead uses two offline, real,
testable proxies (`src/lib/adaptive/fingerprint.ts`):

- **Structural key** (`structuralKey()`, `fingerprint.ts:36`): a
  deterministic hash of the sorted `dimension=value` pairs (skillId,
  **language**, hookType, careerStage, counterparty, channel, tone, goal).
  Catches "same situation, different wording" repetition. Language is
  included deliberately — see the bug note in §11; omitting it collapses
  Arabic and English variants of the same combo into one key.
- **Lexical fingerprint** (`textFingerprint()`, `fingerprint.ts:74`): a
  MinHash-lite signature over normalized word-bigram shingles, using 16
  seeded FNV-1a hash functions and taking the minimum hash per function.
  `estimatedSimilarity()` (`fingerprint.ts:90`) compares two signatures by
  the fraction of matching positions — a real estimator of Jaccard
  similarity between the two texts' bigram sets, not a placeholder. This is
  the closest offline equivalent to near-duplicate/semantic detection this
  phase has; it catches paraphrase-level repetition (same words rearranged)
  but will miss two texts that are conceptually identical while using
  completely different vocabulary — the gap true embeddings would close.
- **Exact/near-duplicate and exposure-based control**: `noveltyScore()`
  (`fingerprint.ts:112`) combines the two signals against the learner's
  recent exposure window (last 20), flooring the similarity estimate at 0.6
  whenever the structural key exactly matches a recent exposure (so an
  exact structural repeat can never score as "novel" purely by having
  different wording). `NOVELTY_THRESHOLD = 0.45` is the cutoff the
  Non-Repetition quality gate checks against.
- **Cross-user/cohort diversity**: not built in Phase 1 — exposure tracking
  is per-user only (`userContentExposure.userId`). A cohort-level reservoir
  balancer is future work.

Real measured numbers from the current reservoir (§8): novelty scores
observed range **0.6875–1.0**, average **0.92**, across 108 generated
items — not a uniform 1.0, meaning the metric is discriminating between
genuinely different combinations and closer ones, not just returning a
constant.

## 6. Hook types (8 of 10 implemented)

`content/adaptive/dimensions.ts` names all 10 spec hook types in
`HOOK_TYPES` (including `inbox_alert` and `one_sentence_rewrite`, for a
future phase to extend without touching this file's structure). Phase 1's
offline composer implements templates for 8, exported separately as
`HOOK_TYPES_IMPLEMENTED`: `quick_dilemma`, `unexpected_mistake`,
`myth_vs_reality`, `what_would_you_do`, `fast_prioritization`,
`spot_the_risk`, `client_quote`, `decision_under_pressure`. Only this
subset is ever selected by `hooks.ts`. `client_quote` additionally draws
from `CLIENT_QUOTES`, six goal-keyed bilingual quote snippets, so its
output isn't purely templated from the five dimensions alone.

## 7. Quality gates (6 of 12 implemented)

`src/lib/adaptive/quality-gates.ts`. The spec names 12 gates; several
(Evaluation Integrity, full Cultural Fit review) presume scored, graded
activities — a hook is a short, ungraded engagement moment, so they don't
apply the same way yet. `evaluateQuality()` (`quality-gates.ts:85`)
implements the mechanically-checkable subset:

| Gate | Check | Failure routes to |
|---|---|---|
| `skillAlignment` | skillId exists in the current skill graph | hard reject |
| `safety` | no guaranteed-outcome language (AR+EN regex, mirrors the existing detector in `evaluation.ts`) | hard reject |
| `copyrightSafety` | always `true` in Phase 1 — the offline composer never touches source text (see §0); the field exists for a future source-grounded generator to report a real n-gram-overlap check | hard reject |
| `nonRepetition` | `noveltyScore >= NOVELTY_THRESHOLD (0.45)` | human review |
| `languageQuality` | non-empty, no leftover template placeholders (`{{`, `undefined`, `NaN`), Arabic content contains Arabic script / English content doesn't | human review |
| `mobileFit` | title ≤ 60 chars, body 20–260 chars | human review |

`qualityScore` is the fraction of the 6 gates passed — a real computed
number, always in `{0, 1/6, 2/6, ... 1}`, never asserted. Status:
`rejected` if any hard-fail gate fails; `human_review_required` if any
soft-fail gate fails or `qualityScore < 0.8`; otherwise `approved`.
Deferred: an actual AI-judge pass for tone/cultural nuance (needs a
configured provider key and a separate generator-vs-reviewer model split,
per the spec's AI Judge Separation principle — not yet built since Phase 1
has no reviewer agent at all, only mechanical gates).

## 8. Pregeneration and the Content Reservoir

`scripts/generate-adaptive-content.ts` is an idempotent script (same
pattern as `scripts/seed.ts`) that fills the reservoir ahead of learner
traffic for the MVP path (`dom.client-relations`, 9 skills), so real
learners mostly hit step 1 of §4, not live generation. It iterates every
skill × locale × 6 random dimension combos, skipping any combo whose
structural key already exists (dedup), evaluates each through the same
`evaluateQuality()` gates, and inserts only what the gates don't hard-reject.
Run via `npm run generate:adaptive`.

**Current reservoir state** (queried directly from `data/aijur.db`, not
estimated):

- **108 published hooks** — 9 skills × 2 locales × 6 combos, 0 rejected,
  0 pending review in this batch.
- All 8 implemented hook types represented (12–14 each — a near-even
  spread from random sampling, not a manual quota).
- Quality score: **1.0 average, 1.0 min** (this batch's random combos
  happened to pass every gate; the gates *can* fail — see the unit tests
  in §10 for confirmed rejection/review-routing cases).
- Novelty score: **0.92 average, 0.6875–1.0 range**.
- Re-running the script against the same DB state produces
  `published: 0, skipped: 108` — idempotency confirmed by actual execution.

This is **not** unlimited content. It is 108 concrete, inspectable rows.
Scaling to more skills, more combos per skill, or continuous background
generation is a configuration change to this script, not an architecture
change — but each increment still has to be actually run and gate-checked,
per the spec's own explicit prohibition on claiming unbounded generation.

## 9. Admin surface — Adaptive Content Intelligence

The spec asks for a 5-panel dashboard. Phase 1 ships one consolidated page,
`/[locale]/admin/adaptive-content`, covering four of the named panels in one
view: generation-volume stat cards (total, average quality, average
novelty, review-queue size), a status breakdown, a hook-type usage
breakdown (the repetition monitor), a per-skill coverage breakdown, and the
human-review queue itself with approve/reject actions. Guarded by
`content.author` to view, `ingestion.decide` to act on a queue item —
reusing the exact same permission split the existing ingestion-suggestions
review flow uses (`src/lib/actions/admin.ts`), since this is the same
"AI-suggested content, human decides" shape applied to a new content type.

Logic lives in `src/lib/actions/adaptive-admin-core.ts` (testable, takes a
resolved `SessionUser`), with a thin `"use server"` wrapper in
`adaptive-admin.ts` — the established `*Core` pattern used throughout
`src/lib/actions/`. `adaptive-admin.ts` deliberately does not re-export the
`AdaptiveContentStats` type (documented precedent in `org.ts`: Next.js
rewrites every export of a `"use server"` file into an RPC-proxy reference
at build time, which breaks for type-only exports).

Deferred: the spec's separate Novelty/Diversity Analytics panel and
Performance-Driven Content Retirement panel — `adaptiveContent.expiresAt`
(90-day horizon, set on every insert) exists so a retirement job has
somewhere to read from, but no job reads it yet.

## 10. What's tested

`tests/adaptive-content.test.ts` — pure, offline, DB-free unit tests (the
same properties needed for these functions to be safe to call on every
request): `structuralKey` order-independence and per-dimension sensitivity,
**including a regression test for the language-collision bug in §11**;
`normalizeText`/`textFingerprint`/`estimatedSimilarity` on identical,
near-paraphrased, and unrelated text; `noveltyScore` across zero-exposure,
exact-structural-repeat, near-identical-text, and genuinely-different cases;
`evaluateQuality` covering a clean approval, hard rejection on unknown skill
and on guaranteed-outcome language in **both** Arabic and English, soft-fail
routing to human review for over-length body, wrong-script content, leftover
template placeholders, and a repeated structural key; and
`composeHookOffline` asserting all 8 implemented hook types × both locales
produce non-empty, gate-passing output, plus a check that two different hook
types for the identical dimension combo read as texturally distinct
(similarity < 0.5) — i.e., that variety is structural, not just reworded.

This is the mechanical subset of the spec's 18 named test categories. DB-
backed categories the spec also names — User/Cohort Exposure integration,
Retry Variation under real generation failures, Tenant Isolation for
adaptive content — are integration-level and not yet covered by a dedicated
e2e spec; the existing e2e suite exercises the Home page surface generally
but does not yet assert reservoir/exposure behavior specifically. Noted as
follow-up, not claimed as done.

## 11. Errors found and fixed during this build

**Structural-key language collision.** `structuralKey()` calls initially
omitted `language` from the dimensions object, so an Arabic and an English
hook for the same skill+dimensions combo hashed identically — the reservoir
treated them as the same item, meaning the second locale's pregeneration
pass saw its own keys as "already exists" and skipped them. Caught by
running the pregeneration script and noticing `published: 54, skipped: 54`
instead of the expected 108 (exactly half — a sign of an AR/EN collision,
not random gate failures). Fixed in both `hooks.ts` call sites and the
pregeneration script by adding `language` to the dimensions record; this
also matches the spec's own §8 fingerprint field list, which names
"Language" explicitly. Verified by wiping the tables and re-running:
`published: 108, skipped: 0` on a clean run, `published: 0, skipped: 108`
on a repeat (idempotency confirmed).

## 12. Privacy

No new external-training exposure: generation calls go through the same
`runAgent()`/provider-consent path every other agent uses — `allowRemote`
is `false` whenever the learner hasn't set `aiProcessingConsentAt`, which
forces the offline composer regardless of configured keys. Personalization
context sent to a remote provider (when consented) is limited to what
`AdaptiveHookContext` carries: skill name, career stage, and the selected
dimension values — no name, no raw performance history, no free-text
learner input. Content and exposure rows carry no cross-organization
reference beyond `organizationId` passed at request time for logging; the
reservoir query itself is not yet org-scoped (it's skill-scoped, and skills
are shared product content, not tenant-private) — the same reservoir serves
all organizations, which is correct for the current single-shared-catalog
model but should be revisited if org-specific institutional customization
is built later.

## 13. Honest summary

Built: a real 3-layer content pipeline, real offline-computable novelty
detection with measured (not asserted) diversity, real mechanical quality
gates with confirmed reject/review/approve branching, a working content
reservoir with confirmed idempotent pregeneration, per-user exposure
tracking, a live admin monitor, and a passing test suite.

Not built, and not claimed: unlimited or never-repeating generation, true
semantic embeddings, cross-user/cohort diversity balancing, source-grounded
generation, an AI-judge review pass, background/async generation
infrastructure, and 9 of the spec's content types beyond hooks. The natural
next build step is either (a) extending this same pipeline to a second
content type (Daily Challenge as distinct from Hook is the closest
architectural neighbor), or (b) adding a real AI-judge quality-gate pass
now that the mechanical gates and the reservoir are proven — see the
delivery report for this build's specific recommendation.
