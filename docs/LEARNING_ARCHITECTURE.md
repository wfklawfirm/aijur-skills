# Learning Architecture

This document describes the pedagogical engine of AIJUR Professional Skills
Lab: how the system decides what a learner has actually mastered, how it
schedules review, how activities are scored, and how units and paths gate on
that evidence. It is grounded entirely in:

- `src/lib/learning/mastery.ts`
- `src/lib/learning/review.ts`
- `src/lib/learning/grading.ts`
- `src/lib/learning/progression.ts`
- `src/lib/learning/dashboard.ts`
- `content/types.ts`
- `content/framework/skills.ts`
- `tests/mastery.test.ts`, `tests/review.test.ts`, `tests/grading.test.ts`

At the time of writing, the learning-engine test suite (`npm run test`)
reports **73 passing tests across 25 suites, 0 failing**, covering `mastery`,
`review` and `grading` together with the rest of the unit suite.

For how free-text answers (`short_written`, `email_rewrite`) and simulations
are actually evaluated by a model — including any evidence-verification or
anti-hallucination checks on the AI side — see `AI_ARCHITECTURE.md`. This
document only covers the boundary (which activity kinds route there) and the
deterministic engine everything else runs through.

---

## 1. The core claim: finishing ≠ mastering

The product rule, stated directly in `mastery.ts`'s module comment:

> "The product rule is that finishing content proves nothing. A level is a
> claim about behaviour, so it is only granted when the evidence supports
> it."

Concretely, `applyEvidence()` in `mastery.ts` will not raise a learner's
`level` for a unit of evidence unless **all** of four gates pass simultaneously.
Given a candidate `wantsLevel = min(targetLevel, state.level + 1)` (the
engine only ever considers moving up one level at a time, capped by what the
current evidence targets), the level-up condition is:

```ts
passed &&
wantsLevel > state.level &&
consecutivePasses >= 2 &&
distinctItems >= 2 &&
rollingScore >= PASS &&
(!needsProduction || hasDepth)
```

The four gates, with their exact thresholds from the code:

1. **Correctness** — a single piece of evidence passes only if
   `input.score >= PASS`, where `PASS = 0.7` (`mastery.ts:45`). This is the
   same 0.7 threshold used independently in grading (`PASS_RATIO = 0.7` in
   `grading.ts`) and in review quality (`nextSchedule`'s `quality >= 0.7`
   check) — 70% is the passing bar everywhere in the system.

2. **Consistency** — `consecutivePasses >= 2`. One strong pass is not enough;
   the learner needs two passes in a row at or above the current level. A
   failure anywhere in between resets the streak to 0
   (`else if (!passed) consecutivePasses = 0`). Proven by
   `tests/mastery.test.ts` ("a single pass, however strong, does not level
   up" and "a failure between two passes resets the consecutive-pass
   counter").

3. **Breadth** — `distinctItems >= 2`. The caller passes in
   `recentItemIds`, the set of item ids already used as evidence at the
   current level, and the function unions it with the current `itemId` to
   count distinct items. Passing the *same* item twice does not satisfy
   breadth — proven by the "two passes on the SAME item do not count as
   breadth" test, which yields `reason: "needs_different_item"`.

4. **Depth** — required only for `wantsLevel >= 3` (`needsProduction =
   wantsLevel >= 3`). Below level 3, `recognition`-depth evidence (e.g. a
   multiple-choice pick) is sufficient. At level 3 and above, at least one
   piece of evidence must be `"production"` or `"simulation"` depth — i.e.
   the learner produced language or behaviour, not merely recognised a
   correct option. `depthOf()` classifies activity kinds: `simulation` →
   `"simulation"`; `short_written`, `email_rewrite`, `branching_decision`,
   `pronunciation` → `"production"`; everything else → `"recognition"`.
   `tests/mastery.test.ts` shows this gate holding even once consistency and
   breadth are satisfied (`reason: "needs_production_evidence"`), and being
   satisfied immediately by a single production-depth pass once the other
   gates are already met.

If evidence fails any gate, `applyEvidence` still records the evidence
(rolling score, evidence count, confidence all update) but returns a
`reason` explaining exactly which gate blocked the level-up:
`needs_second_pass`, `needs_different_item`, `needs_production_evidence`, or
`needs_higher_rolling_score` (the rolling EWMA score itself falling below
`PASS`, distinct from the single evidence event passing). A below-threshold
single score short-circuits everything with `reason: "below_threshold"`.

A fifth dimension — **recency** — is not a gate on granting a level; it is
the mechanism that keeps a granted level honest over time (see §3).

---

## 2. Mastery levels 0–6

`content/types.ts` defines the level scale:

```ts
/** 0 Not Assessed · 1 Awareness · 2 Foundation · 3 Applied · 4 Proficient · 5 Advanced · 6 Leader/Coach */
export type MasteryLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;
```

The same naming convention is repeated verbatim in
`content/framework/skills.ts`'s module comment, which also states the scope
of the framework: **42 skills across ten domains** (`dom.client-relations`,
`dom.communication`, `dom.negotiation-influence`, `dom.self-management`,
`dom.teamwork-leadership`, `dom.business-development`,
`dom.firm-operations`, `dom.professional-judgment`, `dom.digital-ai`,
`dom.legal-english`).

Each skill's `levels: SkillLevelDef[]` (in `content/types.ts`) authors, per
level, a `definition`, `observableBehaviors`, `commonMistakes`,
`successCriteria`, and `evidenceRequired` — all bilingual. These are
**descriptive content**, written by curriculum authors to make each level
concrete and observable (e.g. for `skill.meeting-preparation`, level 3's
`evidenceRequired` asks for "two preparation sheets for two different
matters, each showing one stated goal" — i.e., the human-readable analogue
of the breadth gate). They are not read by the mastery algorithm itself:
`applyEvidence()` enforces the four evidentiary gates generically for every
skill and level, independent of what a given `SkillLevelDef.evidenceRequired`
string says. The authored text and the runtime gates are two expressions of
the same design intent, kept separately (one for humans reading the
curriculum, one for the engine).

Levels only move forward. `applyEvidence` never assigns a `level` lower than
`state.level` — even a badly failed evidence event (`score: 0.1`) leaves
`level` unchanged, proven by "levels never drop — repeated failures leave
level unchanged, not regressed" in `tests/mastery.test.ts`. A separate
`peakLevel` field tracks the highest level ever reached (`Math.max`), so it
can never decrease either — it exists so that decay logic elsewhere can
distinguish "achieved once, now rusty" from "never achieved."

**How `applyEvidence` moves a learner up:** each call folds one new
`EvidenceInput` (`level`, `score`, `depth`, `itemId`, `at`) into the current
`MasteryState`. It updates a rolling EWMA score
(`rollingScore = rollingScore * 0.55 + score * 0.45`, i.e. `EWMA_ALPHA =
0.45`, or set directly to `score` on the very first evidence event),
increments or resets `consecutivePasses`, computes distinct item count, and
then evaluates the four-gate condition from §1. On success, `level` is set
to `wantsLevel`, `consecutivePasses` resets to 0 (a fresh streak is needed to
climb the *next* level), and `reason: "level_up"` is returned.

`confidence` is a separate quantity from `level`, updated on every evidence
event regardless of whether the level moved: `confidence = clamp(volume *
rollingScore, 0, 0.98)`, where `volume = 1 - exp(-evidenceCount / 4)` — an
asymptotic curve so confidence keeps rising with evidence quantity but tops
out at 0.98 and is bounded by how well the learner is actually performing
(`rollingScore`).

---

## 3. Confidence decay and review

Once granted, a level cannot be revoked by time or a bad attempt — but
**confidence** in that level is separate from the level itself and decays.
`decayedConfidence()`:

```ts
const days = (now - state.lastAssessedAt) / DAY_MS;
return clamp(state.confidence * Math.pow(0.5, days / HALF_LIFE_DAYS), 0, 1);
```

`HALF_LIFE_DAYS = 60` — confidence roughly halves every 60 days without new
evidence at that skill. `tests/mastery.test.ts` verifies this directly:
starting confidence 0.8, after exactly 60 days, decayed confidence is
`~0.4` (`Math.abs(decayed - 0.4) < 0.01`). With no `lastAssessedAt` at all
(never assessed), the function returns the raw `confidence` unchanged rather
than attempting to decay from nothing.

`REVIEW_CONFIDENCE_FLOOR = 0.45`. `needsReview(state, now)` returns `true`
when `decayedConfidence(state, now) < REVIEW_CONFIDENCE_FLOOR` — **except**
for `level === 0`, which is never eligible for review (there is nothing to
be rusty at; level 0 means "not assessed," not "forgotten"). This is
verified directly in `tests/mastery.test.ts`: a level-0 state with very low
confidence still returns `needsReview === false`, while a level-2 state that
has decayed past 200 days (well over three half-lives) returns `true`.

**Why levels never drop on decay:** the module comment states it plainly —
"A skill you demonstrated a year ago is rusty, not un-learned; we lower
confidence and schedule review instead of taking it away." Decay is the
mechanism that puts a skill back in front of the learner (via
`decayReview()` in `review.ts` and the `needsReview` check woven into
`buildHomeData()` in `dashboard.ts`), not a mechanism that erases the
learner's record. `levelKey()` maps a numeric level (clamped 0–6, rounded)
to a DB/UI key (`"l0"`..`"l6"`) used to look up per-level content.

---

## 4. Spaced, error-priority, interleaved review

`review.ts` states three explicit departures from a plain SM-2 flashcard
scheduler, because "the thing being reviewed here is a professional
behaviour, not a word":

1. **Errors jump the queue.** A skill gotten wrong comes back in a day or
   two, not on the normal spacing curve.
2. **Review re-presents the skill in a different item.** The scheduler
   stores the *skill* as the unit of review (`ScheduleState` is per-skill,
   not per-activity) and a fresh item is picked at delivery time — repeating
   the same activity would measure recall of that activity, not of the
   skill.
3. **Every due item carries a reason** shown to the learner (`ReviewReason`
   is one of `"spaced" | "error" | "interleave" | "decay" | "new_context"`),
   because unexplained review reads as busywork and gets skipped.

**Ease and interval bounds:**

- `MIN_EASE = 1.3`, `MAX_EASE = 2.8`.
- `MAX_INTERVAL_DAYS = 180` — no review is ever scheduled further than 180
  days out (verified by the "interval is bounded at 180 days" test, which
  drives 40 consecutive perfect passes and confirms the interval never
  exceeds 180).

**`firstSchedule(now, passed)`** sets the very first schedule for a skill:
a pass → `intervalDays: 2, ease: 2.3, reason: "spaced"`; a fail →
`intervalDays: 1, ease: 2.1, lapses: 1, reason: "error"`.

**`nextSchedule(state, quality, now)`** (`quality` is the 0–1 normalised
score of the review attempt, passing at `quality >= 0.7`):

- On failure: `lapses += 1`; `ease = clamp(ease - 0.2, MIN_EASE, MAX_EASE)`;
  the interval is **not** reset to zero — `intervalDays = lapses >= 3 ? 1 :
  2` — because re-showing something the learner just saw tests short-term
  memory, not the point of review. `reason: "error"`.
- On success: `ease = clamp(ease + (quality - 0.8) * 0.35, MIN_EASE,
  MAX_EASE)` (so a quality above 0.8 nudges ease up, below 0.8 nudges it
  down); `intervalDays = clamp(round(intervalDays * ease * 10) / 10, 1,
  MAX_INTERVAL_DAYS)`. Once the resulting interval reaches **14 days or
  more**, the reason is reclassified from `"spaced"` to `"new_context"` — the
  comment explains: past a fortnight, the useful review is the skill in a
  situation the learner hasn't seen, not the same situation again.

**`decayReview(now)`** produces an immediately-due schedule
(`{ intervalDays: 1, ease: 2.0, lapses: 0, reason: "decay", dueAt: now }`)
for skills whose confidence has decayed below `REVIEW_CONFIDENCE_FLOOR` — the
bridge between the mastery-decay logic in §3 and the review queue.

**`selectDueReviews(items, now, limit = 6)`** picks today's review set:

1. Filter to `dueAt <= now`.
2. Sort errors first (any `reason === "error"` item sorts ahead of any
   non-error item), then by soonest-due within each group.
3. Take up to `limit * 2` candidates, then **interleave**: repeatedly pick
   the next item whose `skillId` differs from the last picked item's
   `skillId` (falling back to the front of the remaining list if no such
   item exists), until `limit` items are picked. This avoids two consecutive
   items from the same skill whenever an alternating order is achievable —
   proven by `tests/review.test.ts`, including a case where one skill
   dominates 3-to-1 and the scheduler still front-loads the one alternation
   it can achieve (`x, y, x, x`, not `x, x, x, y`).

`dashboard.ts`'s `buildHomeData()` calls `selectDueReviews` with a limit of
4 for the due-reviews widget shown on Home, then separately walks all of the
learner's mastery rows and appends any skill for which `needsReview()` is
true but that isn't already in the list (up to the same limit of 4) — this
is where purely confidence-decayed skills (no explicit schedule row yet)
enter the review surface via `reason: "decay"`.

---

## 5. Activity grading model

`grading.ts`'s module comment states the design principle: "Everything that
*can* be graded without a model is graded without a model — cheaper,
instant, reproducible, and available offline. Only free text and simulations
go to the AI layer."

`content/types.ts` defines **17** `ActivityKind` values. Of these:

- **13 kinds are graded deterministically** by `gradeActivity()`, grouped
  into 7 scoring blocks by shared shape:
  - `multiple_choice`, `true_false`, `best_response`, `find_mistake`,
    `listening` — single correct option; `hit` iff exactly one option is
    selected and it's correct. Full weight or zero; `revealIds` always
    includes both the chosen option's rationale and the correct option's,
    "so the learner sees both the cost of their answer and the shape of a
    good one."
  - `multiple_select` — partial credit with **penalised over-selection**:
    `raw = max(0, hits - misses) / correctIds.length`; an exact match scores
    full weight, otherwise `score = round(raw * weight * 100) / 100`. Proven
    by `tests/grading.test.ts`: selecting one correct option plus one wrong
    option (`hits=1, misses=1`) scores **0**, not partial credit — "an
    over-selection is its own error, not a cheap route to most of the
    marks."
  - `ordering`, `priority_ranking` — position-by-position match against the
    authored order; `ratio = correctPositions / expected.length`; `passed`
    requires a perfect match (`wrongPositions.length === 0`); verdict is
    `"partial"` at `ratio >= 0.5`.
  - `categorization`, `swipe_classify` — item-to-bucket match ratio; passes
    at `ratio >= PASS_RATIO` (0.7); wrongly-bucketed items are listed first
    in `revealIds` ("that's where the learning is").
  - `matching` — exact pair match ratio; same 0.7 pass bar.
  - `fill_blank` — each blank's selected `answerIndex` must exactly match;
    ratio-based scoring, same 0.7 pass bar.
  - `branching_decision` — each choice made along the learner's `path` has a
    `quality` (`strong` = 1.0, `acceptable` = 0.6, `weak` = 0.2,
    `critical_mistake` = 0); `ratio = points / chosen.length`. **A single
    critical mistake caps the whole activity's score at 0.34× weight**,
    regardless of how well every other choice went, and the activity fails
    outright (`passed: !critical && ratio >= PASS_RATIO`) — the same
    critical-mistake-caps rule the simulation rubrics apply. Verified by
    `tests/grading.test.ts` ("a single critical mistake caps the score at
    0.34x weight and fails the activity").

- **2 kinds are self-reported** (`gradedBy: "self_report"`), never blocking
  progress:
  - `pronunciation` — a 0–3 self-rating of intelligibility only; `passed` is
    always `true`. The comment is explicit: "This never blocks progress and
    never records anything about accent — it exists to schedule practice."
  - `reflection` — passes on any non-empty trimmed text; there is no
    correctness dimension, `verdict` is always `"correct"`.

- **2 kinds require AI rubric evaluation** and are explicitly *not* handled
  by `gradeActivity()`: `short_written` and `email_rewrite`
  (`requiresAiGrading()` returns `true` only for these two). Calling
  `gradeActivity()` directly on either throws — "Handled by the evaluation
  agent; this branch only ever runs if a caller forgets to route it there,
  so it fails loudly rather than scoring zero." How that AI evaluation is
  actually performed (rubric structure, evidence-quoting requirements,
  critical-mistake capping on the AI side) is covered in
  `AI_ARCHITECTURE.md`, not here.

**`summariseUnit(results)`** aggregates a unit's scorable activities into a
pass/fail: `reflection`-kind results are excluded from both the score and
`maxScore` denominator ("a reflection has no right answer, so letting it
carry marks would make the score mean less, not more"), and the unit passes
at `score / maxScore >= PASS_RATIO` (0.7), same threshold as everywhere
else. `tests/grading.test.ts` confirms a unit with only one scorable
multiple-choice activity (full marks) and one reflection (deliberately
scored 0) still reports `maxScore: 1` and `passed: true` — the reflection
doesn't drag it down.

---

## 6. Unit and path progression

`progression.ts` computes, for every unit in a `PathDef`, one of five
`UnitState` values: `locked | available | in_progress | completed |
needs_review`. The stated design goal: "A locked node never says just
'locked'. It names the unit that opens it or the level it needs, because an
unexplained lock reads as a paywall" — hence every locked `UnitStatus`
carries a `lock` reason (`{ kind: "previous_unit", ... }` or `{ kind:
"skill_level", ... }`).

`computePathStatuses(path, input)` walks the path's units in `order`:

- A unit already `completed` (from `unitProgress` in the DB) stays
  `completed`, carrying its `score`/`maxScore` and pointing `unlocks` at the
  next unit.
- A unit at `needs_review` state stays `needs_review`.
- Otherwise, the unit is `locked` if its immediately preceding unit is not
  `completed` — simple linear sequencing within a path.
- If the unit's `targetLevel >= 3` (Applied or above), it also checks the
  path's declared skill prerequisites (`prerequisites: Map<skillId,
  prerequisiteSkillIds[]>`): every prerequisite skill must be at mastery
  level **≥ `PREREQ_MIN_LEVEL` (2, i.e. Foundation)** or the unit stays
  locked with a `skill_level` reason — "so a learner can't jump the ladder
  by finishing a fast path" even if the linear unit sequence would otherwise
  allow it.
- Otherwise the unit is `in_progress` or `available`.

**`nextUnit(path, statuses)`** is the single "do this now" pointer used by
the Home screen: it prefers an `in_progress` unit, then the first
`available` unit, then falls back to a `needs_review` unit, in that priority
order.

**`pathCompletion(statuses)`** is a simple count: `{ done: count of
"completed", total: statuses.length }`.

`dashboard.ts`'s `buildHomeData()` is the aggregation point that ties
mastery, review and progression together for the UI: it loads mastery rows,
progress rows and the prerequisite map once, calls `computePathStatuses` per
enrolled path, and combines that with `selectDueReviews` output and
confidence-decay-triggered review entries (§4) — explicitly built as "the
single place that answers 'what should this learner see right now'... so
the three screens [Home, Practice, Progress] can never disagree about what's
due."

---

## 7. Content model these algorithms operate on

To read sections 1–6 correctly, the underlying content shapes from
`content/types.ts`:

- **`DomainDef`** — one of ten top-level competency areas (see §2).
- **`SkillDef`** — one of 42 skills, belonging to a domain, with
  `prerequisiteSkillIds` (used by `progression.ts`'s prerequisite gate) and
  a `levels: SkillLevelDef[]` array of exactly the shape needed to describe
  each `MasteryLevel` 0–6 in human terms (definition, observable behaviors,
  common mistakes, success criteria, evidence required — descriptive only,
  per §2).
- **`Activity`** — a discriminated union over `ActivityKind` (17 kinds,
  §5), each carrying a `skillId` (the primary skill exercised, which drives
  mastery updates), an optional `secondarySkillIds`, a `stage: Stage`
  (1–6), and a `weight` (default 1, contributing to unit scoring).
- **`Stage` vs `MasteryLevel`** — these are two distinct scales that must
  not be conflated. `Stage` (1–6) is a **difficulty/sequencing** label on a
  unit or activity — where it sits in the six-stage curriculum progression.
  `MasteryLevel` (0–6) is an **evidentiary** label on a skill — what a
  learner has actually demonstrated, per §1–§2. A `UnitDef` carries both: its
  own `stage` (where it sits in the curriculum) and a `targetLevel:
  MasteryLevel` (the mastery level it can evidence when passed, consumed by
  both `mastery.ts`'s `applyEvidence` — as the evidence's `level` — and
  `progression.ts`'s prerequisite gate).
- **`RubricDef`** — used by AI-rubric-graded activities (`short_written`,
  `email_rewrite`) and simulations; has `criteria` with weighted 0–3
  descriptors, `criticalMistakes` that cap the overall score, and a
  `passThreshold`. Full evaluation mechanics are in `AI_ARCHITECTURE.md`.
- **`ScenarioDef`** — the simulation engine's content unit: a character, a
  goal, `decisionPoints`, `expectedBehaviors`/`criticalMistakes`, and a
  `rubricId`. Simulation evidence is the `depth: "simulation"` case in
  `depthOf()` (§1) — the highest-weight evidence kind, since it demands the
  learner produce professional behaviour under realistic conditions.
- **`UnitDef.steps: UnitStep[]`** — the "15-part template expressed as an
  ordered step list," a discriminated union of pedagogical beats a unit can
  contain in sequence: `hook`, `why_it_matters`, `learning_goal`,
  `micro_lesson`, `visual` (native-rendered `steps | comparison | timeline |
  scale`), `worked_example` (a `strong`/`weak` contrast pair), `activity`
  (references an `Activity` by id, with a `mode: "quick" | "guided" |
  "independent"`), `simulation` (references a `ScenarioDef` by id),
  `summary` (references a `SummaryCardDef`), `apply_tomorrow`, and
  `next_mission`. Only the `activity` and `simulation` steps produce
  gradeable evidence that feeds `applyEvidence()`; the rest are instructional
  scaffolding around them.
- **`PathDef` → `ChapterDef` → `UnitDef`** is the enrollment/navigation
  hierarchy that `progression.ts` operates over: a path groups chapters,
  each chapter groups ordered units, and `computePathStatuses` walks the
  flattened, order-sorted unit list per path.

---

*Sources cited throughout this document are file paths and line-level
behavior in the repository as of the versions read; thresholds and bounds
(`PASS = 0.7`, consecutive passes ≥ 2, distinct items ≥ 2, production
evidence required at level ≥ 3, `HALF_LIFE_DAYS = 60`,
`REVIEW_CONFIDENCE_FLOOR = 0.45`, `MIN_EASE = 1.3`/`MAX_EASE = 2.8`,
`MAX_INTERVAL_DAYS = 180`, `PREREQ_MIN_LEVEL = 2`) are quoted directly from
source, not restated from memory.*
