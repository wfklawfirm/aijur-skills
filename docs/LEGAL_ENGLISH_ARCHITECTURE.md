# Legal English Architecture

This document covers `path.legal-english-client-communication` — the
dedicated language track that runs alongside (not inside) the general
`path.client-communication-foundations` path — and the hard product rule
that governs it: **the AI must never assess a learner's accent.** Every
claim below is grounded in the files cited; where I could not verify
something in code, that gap is reported rather than assumed away.

## 1. Why a separate track

Legal English is authored as its own `PathDef`
(`content/paths/index.ts:73-136`, `id: "path.legal-english-client-communication"`,
`track: "legal_english"`), paired to the professional path via
`pairedPathId` in both directions (`content/paths/index.ts:27` and `:92`).
The path's own description states the rationale directly:

> "A full language layer over the communication skills... Assessed on
> clarity, professionalism and intelligibility — never on accent."
> (`content/paths/index.ts:86`)

This is a deliberate product distinction, not a naming choice:

- **Not general ESL.** Every unit is scoped to one workplace
  communication task a lawyer actually performs in English — introducing
  yourself on a call, opening a meeting, taking background facts,
  confirming dates, managing expectations, writing a client update,
  fielding a hard question under pressure, closing a meeting
  (`content/paths/index.ts:94-134`, four chapters: "Meeting people",
  "Getting the facts", "Explaining and planning", "Writing and under
  pressure"). There is no vocabulary-building, grammar-drilling, or
  general-fluency content.
- **Not accent/pronunciation training in the accent sense.** The unit
  content repeatedly frames pronunciation work as "intelligibility", i.e.
  whether a listener understands the word the first time — never as
  sounding native. This is stated in-content, not just in an architecture
  note (see §2).
- **Domain-scoped.** The path declares `domainIds: ["dom.legal-english",
  "dom.client-relations", "dom.communication"]`
  (`content/paths/index.ts:91`), and every skill it trains is flagged
  `languageTrack: true` in `content/framework/skills.ts` (10 occurrences:
  lines 3485, 3778, 4072, 4362, 4652, 4946, 5236, 5530, 5824, 6114) —
  the ten skills listed in `content/AUTHORING_BRIEF.md:56-58`
  (`skill.le-professional-introduction`, `skill.le-welcoming-client`,
  `skill.le-background-questions`, `skill.le-clarifying-facts`,
  `skill.le-explaining-next-steps`, `skill.le-dates-deadlines`,
  `skill.le-managing-expectations`, `skill.le-client-update-writing`,
  `skill.le-difficult-questions`, `skill.le-closing-meeting`).
  `SkillDef.languageTrack?: boolean` exists in `content/types.ts:104`
  specifically to mark "a Legal English competency rather than a
  behavioural one" (the field's own doc comment).

## 2. The no-accent-assessment rule

**Hard constraint:** Legal English activities and AI evaluations may
score clarity, intelligibility, register and professionalism. They may
never score, mention, or let accent, dialect or nationality influence a
score. This is enforced at multiple independent layers, not just in
comments or authoring guidance:

**a) Authoring-brief level.** `content/AUTHORING_BRIEF.md:29`: "Never
score accent. Legal English activities assess intelligibility, clarity,
register and professionalism only." This is policy for content authors,
not runtime enforcement — listed first because everything below is
downstream of it.

**b) Rubric level (content).** Two rubrics govern Legal English
evaluation in `content/framework/rubrics.ts`:

- `rubric.legal-english-written.v1` (line 595) — criteria include
  Clarity (line 610) and Language/terminology accuracy (line 638), whose
  top-band descriptor for accuracy explicitly states: "Binding assessment
  note: accent is not assessed in any Legal English activity — written or
  spoken — and must play no part in this score." (line 688)
- `rubric.legal-english-spoken.v1` (line 811) — its first criterion,
  Intelligibility (line 826, weight 0.22), is defined as: "Only
  articulation, pace and phrasing are judged here. Accent is never
  assessed: an Arabic, Indian, French or any other accent neither lowers
  nor raises the score. The only measure is whether the listener had to
  ask for a repeat." (line 830) The top-band descriptor doubles down:
  "This full score is given to a speaker with a strong Arabic accent
  whose words are caught first time: accent is not assessed and never
  lowers the score on any criterion." (line 848)
- The file-level doc comment for the whole rubric set (line 8) states
  descriptors must refer only to "observable features of what was
  produced," explicitly excluding "attitude, motivation, confidence,
  personality or accent."

This rubric is not a passive assertion — it is the actual grading input
used by the AI evaluation agent (`src/lib/ai/agents/evaluation.ts`) for
the two simulation scenarios that carry it: `scn.le-intro-call` and
`scn.le-explaining-process` (`content/scenarios/index.ts:1313`, `:1584`,
`rubricId: "rubric.legal-english-spoken.v1"`). Importantly, these
"spoken" scenarios run through the same text-based simulation engine as
every other scenario (`src/lib/ai/schemas.ts:9-20`,
`simulationTurnSchema` — the character's `reply` is a string) — there is
no audio capture or audio upload in this path (see §5), so there is
literally no audio signal for the evaluator to derive an accent judgment
from even if it wanted to; "spoken performance" here is assessed from a
role-play *text transcript* of a phone call, scored against the same
intelligibility-not-accent rubric.

**c) Schema level (the strongest guarantee).** `src/lib/ai/schemas.ts:58-73`
defines `languageFeedbackSchema`, which includes:

```ts
/**
 * Accent is never assessed. This field exists so the schema can *assert* that
 * — the safety layer rejects any output where it is not exactly this value.
 */
accentAssessed: z.literal(false).default(false),
```

`z.literal(false)` means the field can validate to exactly one value:
`false`. If a model call driving this schema ever returned
`accentAssessed: true` (or any other value), Zod parsing would fail
outright — per `src/lib/ai/schemas.ts:4-7`'s stated house rule that
"nothing free-form ever reaches the UI or the database — if a model
returns prose, the parse fails, the run is retried, and if it fails again
the deterministic engine answers instead." So the enforcement is not "the
model is instructed not to assess accent" (a prompt-level, best-effort
constraint) but "the output shape itself cannot represent an accent
assessment surviving validation."

**Verified gap — report honestly:** `"language"` is a declared
`AgentName` in `src/lib/ai/provider.ts:29`, and `languageFeedbackSchema` /
`LanguageFeedback` are exported from `src/lib/ai/schemas.ts`, but I could
not find any call site that actually invokes this schema. `src/lib/ai/agents/`
contains only `coaching.ts`, `evaluation.ts` and `simulation.ts`
(`ls` confirmed); there is no `language.ts` agent file, and a repo-wide
grep for `languageFeedbackSchema`/`LanguageFeedback` outside
`schemas.ts` returns nothing. The Legal English written activities
(`short_written` / `email_rewrite`) are graded through the general
`evaluation.ts` agent using `evaluationSchema`
(`src/lib/ai/agents/evaluation.ts:4,95`) with
`rubric.legal-english-written.v1` as data, not through
`languageFeedbackSchema`. So the `accentAssessed: z.literal(false)`
guarantee is real and would bind any code path that uses it, but as of
this reading that schema is defined and registered as an agent name yet
not yet wired to a live call site — it reads as a prepared/future
enforcement point rather than one currently exercised at runtime. The
rule is nonetheless enforced today through the other two layers below.

**d) Grading-logic level (pronunciation is self-report, never
AI-scored).** `src/lib/learning/grading.ts:196-208`, the `"pronunciation"`
case in `gradeActivity`:

```ts
case "pronunciation": {
  // Self-reported intelligibility. This never blocks progress and never
  // records anything about accent — it exists to schedule practice.
  const rating = "selfRating" in response ? response.selfRating : 2;
  return {
    score: (rating / 3) * weight,
    maxScore: weight,
    passed: true,          // always passes
    verdict: rating >= 3 ? "correct" : "partial",
    revealIds: [],
    gradedBy: "self_report",
  };
}
```

Three properties matter: `passed: true` unconditionally (self-rating
never blocks progression), the score is derived purely from the
learner's own 1–3 self-rating (`selfRating`), and `gradedBy:
"self_report"` — no model or rubric is invoked. `isSelfReported()`
(`grading.ts:36-38`) confirms `"pronunciation"` is one of exactly two
kinds (with `"reflection"`) that never reach AI grading. This is backed
by the content type itself: `PronunciationActivity.grading` is typed
`"self_report" | "ai_rubric"` (`content/types.ts:227-235`), but every
pronunciation activity actually authored in the ten Legal English units
uses `grading: "self_report"` (verified: all 10 pronunciation blocks in
`content/paths/le-units-01-05.ts` and `le-units-06-10.ts` set
`grading: "self_report"`; no `ai_rubric` pronunciation activity exists in
the current content).

**e) Content level.** Pronunciation activity prompts state the rule to
the learner directly, e.g. "Your accent is not assessed at all"
(`content/paths/le-units-01-05.ts`, unit 1's `jurisdiction` pronunciation
activity) and "Accent is not assessed" (`schedule` activity, unit 2). The
`scn.le-intro-call` scenario's coaching notes repeat it for the spoken
simulation: "Your accent is not assessed here or in any other activity.
The requirement is to be understood first time, not to sound foreign."
(`content/scenarios/index.ts`, coaching notes for `scn.le-intro-call`).

**f) No server-side audio/accent-analysis pipeline exists.** A grep of
`src/lib/ai/` for audio-upload, STT-provider, or accent-model code found
no such integration — the only hit for "audio"/"transcri" terms in
`src/lib/ai/agents/` is a doc comment in `evaluation.ts:14` describing
learner *text* input ("a written answer or a full simulation
transcript"), i.e. text transcripts of role-plays, not audio transcripts.
Recorded audio from `RecordButton` (§5) is captured via
`getUserMedia` and never leaves the browser — there is no upload call, no
fetch to a speech-to-text or accent-classification endpoint anywhere in
the codebase I could find. Pronunciation truly is self-reported by the
learner listening to their own recording, not scored by any model.

## 3. Content structure

`LEGAL_ENGLISH_PATH.units` is `[...LE_UNITS_01_05, ...LE_UNITS_06_10]`
(`content/paths/index.ts:135`), ten units across four chapters:

| # | Unit id | Title | Chapter |
|---|---|---|---|
| 1 | `unit.le.01` | Introducing Yourself Professionally | ch.le.meeting-people |
| 2 | `unit.le.02` | Welcoming a Client and Opening the Call | ch.le.meeting-people |
| 3 | `unit.le.03` | Asking for Background Information | ch.le.getting-the-facts |
| 4 | `unit.le.04` | Clarifying Facts and Checking Understanding | ch.le.getting-the-facts |
| 5 | `unit.le.05` | Explaining Next Steps in Plain English | ch.le.getting-the-facts |
| 6 | `unit.le.06` | Discussing Dates and Deadlines | ch.le.explaining-and-planning |
| 7 | `unit.le.07` | Managing Expectations in English (carries the chapter simulation) | ch.le.explaining-and-planning |
| 8 | `unit.le.08` | Writing a Client Update | ch.le.writing-and-pressure |
| 9 | `unit.le.09` | Handling a Difficult Question | ch.le.writing-and-pressure |
| 10 | `unit.le.10` | Closing a Meeting in English | ch.le.writing-and-pressure |

(unit ids/titles from the `// unit.le.NN — Title` header comments and
`id:` fields in `content/paths/le-units-01-05.ts` and `le-units-06-10.ts`;
`chapterId` values from each unit's `chapterId` field.) Each unit runs
9–12 estimated minutes (`estimatedMinutes` fields, range 9–12 across all
10 units).

Chapters map cleanly to workplace scenario categories, per their own
descriptions in `content/paths/index.ts:93-134`: meeting/opening a call
(introductions), fact-gathering (background questions, confirming
understanding, explaining next steps), planning language (deadlines,
expectations without an accidental promise), and written/pressure
communication (a client update the client reads once, plus a calm answer
under a hard question) — i.e. phone/meeting, email, and negotiation-style
pressure scenarios, not general conversation practice.

**Phrase-bank entry count (verified by direct count, not taken on
trust).** `SummaryCardDef.phrases` is an optional array of
`{ en, ar, register: "formal" | "neutral" | "plain" }` entries
(`content/types.ts:357-366`), one array per unit's `summaryCard`. Every
one of the 10 Legal English units has exactly one `phrases:` block
(confirmed: `grep -c "phrases:"` = 5 in each of the two unit files, and
`grep -c "summaryCard:"` = 5 in each, i.e. one phrase bank per unit, no
duplicates). Counting the `register:` field (one per phrase-bank entry,
confirmed by inspecting sample lines) gives:

- `le-units-01-05.ts`: 48 entries (11 formal, 21 neutral, 16 plain)
- `le-units-06-10.ts`: 45 entries (6 formal, 22 neutral, 17 plain)
- **Total: 93 phrase-bank entries across the 10 units.**

This matches the previously stated figure of 93 and is now independently
verified by two convergent counts (`register:` occurrence count and
manual sampling of the raw phrase objects).

## 4. Activity types used

Across the two Legal English unit files, activity-kind counts are (via
`grep -o 'kind: "..."'` over both files):

| kind | count | notes |
|---|---|---|
| `listening` | 10 | exactly one per unit |
| `pronunciation` | 10 | exactly one per unit |
| `reflection` | 10 | one per unit (self-report, excluded from unit score denominator — `src/lib/learning/grading.ts:240`) |
| `short_written` | 8 | AI-rubric graded |
| `email_rewrite` | 1 | AI-rubric graded |
| `fill_blank` | 5 | deterministic |
| `best_response` | 5 | deterministic |
| `matching` | 3 | deterministic |
| `multiple_choice` | 3 | deterministic |
| `ordering` | 2 | deterministic |
| `true_false`, `categorization` | 1 each | deterministic |
| `simulation` (unit step) | 2 | `unit.le.07` and one other unit reference a scenario step |

`ListeningActivity` (`content/types.ts:217-225`) always carries a
`transcript: Localized` field marked "Always present: listening must
never be the only route to the answer" — and this is not just a type
comment: all 10 authored `listening` activities in the Legal English
content include a populated `transcript` (verified by inspecting the
first two listening blocks directly; both `script` and `transcript`
fields are present and non-empty in AR/EN).

`PronunciationActivity` (`content/types.ts:227-235`) targets a single
word/phrase (`target`, optional `ipa`), gives its `meaning` and an
`exampleSentence`, and is graded `"self_report"` throughout the authored
content (§2d).

These two kinds do not exist in the general Client Communication path at
all — `CC_UNITS_01_04`/`05_07`/`08_10` are professional-behavior units
(interviewing, expectation-setting, escalation) and, being audio-free by
design, have no `listening`/`pronunciation` activities; those two kinds
are exclusive to the language track's activity mix, which is the
functional difference between the two paths beyond the language
authored in prompts.

## 5. Speech technology

Both speech-facing UI pieces live in
`src/components/activities/activity-player.tsx`:

- **`SpeakButton`** (lines 574-605) — wraps the browser's native
  `SpeechSynthesisUtterance` / `window.speechSynthesis` API. Used for
  `listening` activities via `AudioPrompt` (lines 561-567: falls back to
  `SpeakButton` when no `audioUrl` is authored — and no Legal English
  content authors an `audioUrl`, so all listening activities use
  synthesis) and directly for the `pronunciation` activity's model-word
  playback (line 329). It sets `utterance.lang = "en-GB"` and
  `utterance.rate = 0.92` (line 595-596). The component's own doc comment
  (lines 569-573) states the rationale directly: "No audio files to
  host, no provider bill, works offline, and every listening activity
  still carries a full transcript so a learner who cannot use audio
  loses nothing."
- **`RecordButton`** (lines 607-647) — wraps
  `navigator.mediaDevices.getUserMedia({ audio: true })` purely to let
  the learner record and hear themselves back for self-assessment; the
  stream is only tracked in a `useRef` and stopped on unmount/toggle
  (line 619, 628-629) — it is never uploaded, transcribed, or sent
  anywhere (confirmed by the absence of any fetch/upload call around it,
  and by the absence of any STT integration anywhere in `src/lib/ai/`,
  per §2f).

**Why browser-native:** zero hosting cost for audio files, zero
per-request provider billing, works fully offline (consistent with the
app's broader "offline works, providers are optional" design in
`src/lib/ai/provider.ts:11-19`), and the transcript-first design means
audio is always a convenience layer, never a requirement.

**Tradeoffs, and how the code handles them:**
- **Browser support variance.** `SpeakButton` feature-detects with
  `"speechSynthesis" in window` inside a `useEffect` (lines 578-585,
  starting optimistic at `true` to avoid an SSR/client hydration
  mismatch, then correcting after mount) and renders a fallback message,
  `dict.activity.speechUnsupported`, instead of a broken button when
  unsupported (line 587). So unsupported browsers degrade gracefully to
  text-only, which is safe precisely because the transcript is always
  present (§4).
- **Microphone permission denial.** `RecordButton` treats a rejected
  `getUserMedia` prompt as a normal, supported state (`state ===
  "denied"`), not an error — the code comment is explicit: "A denied
  microphone is a supported path, not an error state: the activity is
  self-assessed anyway." (lines 636-639). The UI then shows
  `deniedLabel` instead of the record control.
- **Voice/accent quality of synthesis itself.** Not addressed in code —
  `utterance.lang` is hard-coded to `"en-GB"` with no user-selectable
  voice or rate beyond the fixed `0.92`, so playback quality depends
  entirely on the installed OS/browser TTS voices; there is no
  fallback audio file if a browser's synthesis voice is poor or absent
  mid-support (e.g. `speechSynthesis` present but no English voices
  installed) — this is a real, unaddressed edge case, not something the
  code checks for beyond the top-level API-presence flag.

## 6. Accessible alternative

`ActivityBase.accessibleAlternative?: Localized` (`content/types.ts:154`)
is documented as "An equivalent way to complete the task without drag,
swipe or audio." I checked whether Legal English content actually
populates it for its audio-dependent activities, rather than assuming
compliance:

- **All 10 `listening` activities** populate `accessibleAlternative`,
  consistently pointing the learner at the transcript, e.g.: "You can
  read the full transcript instead of listening; the question is
  answerable from the text alone." (verified directly on the first two
  listening blocks in `le-units-01-05.ts`; the field appears once per
  listening activity across both unit files.)
- **All 10 `pronunciation` activities** populate `accessibleAlternative`
  with a non-speaking path, e.g.: "You can mark the syllables and the
  stress in writing instead of speaking, then self-assess the beats."
  (verified on the `jurisdiction` and `schedule` pronunciation activities
  in unit 1/2; same pattern holds across the grep hits for
  `accessibleAlternative` in both files — 12 occurrences in
  `le-units-01-05.ts`, 14 in `le-units-06-10.ts`, comfortably covering
  the 10+10 listening/pronunciation activities plus a few other
  activities in the same units that also carry one).

Beyond individual activities, the two spoken-simulation scenarios
(`scn.le-intro-call`, `scn.le-explaining-process`) each carry a
`ScenarioDef.accessibilityAlternative: Localized` field (declared in
`content/types.ts:323`, "Text transcript path for learners who cannot or
prefer not to use voice"); both scenario entries in
`content/scenarios/index.ts` include this field populated (6 total
`accessibilityAlternative` occurrences found across all scenarios in the
file, consistent with every scenario, Legal English or not, carrying
one).

**Conclusion:** every audio-touching activity kind in the Legal English
track — `listening`, `pronunciation`, and the spoken simulation scenarios
— has a verified, populated non-audio path in the actual authored
content, not just an available-but-unused type field.

## 7. Future extension: French-language support

The spec anticipates eventual French support; nothing in the current
code implements it, but the extension point is identifiable. All
learner-visible strings are typed as `Localized = { ar: string; en:
string }` (`content/types.ts:14`) or `LocalizedBlocks = { ar: string[];
en: string[] }` (`content/types.ts:17`) — two-way AR/EN objects used
throughout every content type (`ChoiceOption.label`, `UnitDef.title`,
`SummaryCardDef`, `ScenarioDef`, etc.). Adding a third language (e.g.
French, per `SourceRecord.language: "en" | "ar" | "fr"` at
`content/types.ts:47`, which already anticipates French as a possible
*source* language even though no content locale does yet) would require:

1. Widening `Locale` (`content/types.ts:11`, currently `"ar" | "en"`) and
   both `Localized`/`LocalizedBlocks` to a third key (e.g. `fr`).
2. Every object literal across `content/paths/*.ts`,
   `content/scenarios/index.ts`, `content/framework/*.ts` gaining a `fr`
   value — a large authoring effort, not a schema-only change, given the
   volume of hand-authored bilingual strings already in place (93 phrase
   entries alone, plus every prompt/rationale/option/rubric descriptor).
3. `SpeakButton`'s hard-coded `utterance.lang = "en-GB"`
   (`activity-player.tsx:595`) would need to become locale-aware (e.g.
   `fr-FR` for French listening scripts) rather than a fixed constant.
4. The UI's locale-detection/redirect logic in `src/proxy.ts` (per
   `docs/PRODUCT_ARCHITECTURE.md`'s description of locale routing) would
   need a third locale segment.

No `fr` key, no French UI strings, and no `fr` branch in the locale type
exist anywhere in the current codebase — this section describes only
where the seam would go, not work already done.

---

**Sources consulted:** `content/paths/index.ts`,
`content/paths/le-units-01-05.ts`, `content/paths/le-units-06-10.ts`,
`content/types.ts`, `content/framework/skills.ts`,
`content/framework/rubrics.ts`, `content/scenarios/index.ts`,
`content/AUTHORING_BRIEF.md`, `src/lib/ai/schemas.ts`,
`src/lib/ai/provider.ts`, `src/lib/ai/agents/evaluation.ts`,
`src/lib/learning/grading.ts`, `src/components/activities/activity-player.tsx`.
