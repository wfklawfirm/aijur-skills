# AIJUR content authoring brief (read before writing any content file)

You are authoring content for **AIJUR Professional Skills Lab** — a mobile-first
platform that trains lawyers and law students in the professional, operational
and language skills law school never taught them.

## Non-negotiables

1. **Read `/home/claude/aijur/content/types.ts` first.** Every object you write
   must typecheck against it exactly. `strict` + `noUncheckedIndexedAccess` are on.
2. **Arabic is the primary language, not a translation.** Write the Arabic as a
   lawyer in Beirut, Riyadh or Cairo would actually say it — Modern Standard
   Arabic, professional register, no stiff literal renderings of English idiom.
   Then write English that stands on its own. Both must read as originals.
3. **Nothing is copied from the source books.** The library informs *which*
   skills exist and *what good practice looks like*. Every sentence, example,
   scenario, option and rationale you write must be newly composed. Never
   reproduce a book's phrasing, exercise, table, checklist wording or figure.
   Attribute conceptual inspiration through `sourceIds` only.
4. **No Lorem Ipsum, no placeholder names.** Clients, matters and firms must be
   plausible for the Arab legal market: real-sounding names, realistic disputes
   (commercial lease, employment termination, contractor payment, family
   inheritance, company formation, cheque dishonour, trademark conflict).
   Avoid naming real people, real firms, or real pending cases.
5. **Mobile-first writing.** No paragraph longer than ~40 words. `LocalizedBlocks`
   arrays exist so long text is broken into short blocks — use them.
6. **Every wrong answer gets a `rationale` that teaches.** Never "That's
   incorrect." Say what the answer would cost the lawyer in real life.
7. **Never score accent.** Legal English activities assess intelligibility,
   clarity, register and professionalism only.
8. **Never make the app promise legal outcomes.** Content should actively train
   the learner *away* from guarantees.

## Fixed identifiers — use these exactly, do not invent variants

### Domains
`dom.client-relations`, `dom.communication`, `dom.negotiation-influence`,
`dom.self-management`, `dom.teamwork-leadership`, `dom.business-development`,
`dom.firm-operations`, `dom.professional-judgment`, `dom.digital-ai`,
`dom.legal-english`

### Skills — Client Communication Foundations (domain `dom.client-relations`, except where noted)
| id | focus |
|---|---|
| `skill.meeting-preparation` | Preparing for the first meeting |
| `skill.trust-building` | Building trust in the first minutes |
| `skill.active-listening` | Listening without interrupting or pre-diagnosing |
| `skill.questioning` | Asking better questions (open → funnel → confirm) |
| `skill.plain-explanation` | Explaining complex matters clearly (`dom.communication`) |
| `skill.expectation-management` | Managing expectations about time, cost, outcome |
| `skill.avoiding-guarantees` | Handling "do you guarantee I'll win?" (`dom.professional-judgment`) |
| `skill.next-steps-closure` | Closing a meeting with owned, dated next steps |
| `skill.client-follow-up` | Proactive written follow-up and updates |
| `skill.difficult-client-basics` | First-line handling of an upset client |

### Skills — Legal English for Client Communication (all `dom.legal-english`, `languageTrack: true`)
`skill.le-professional-introduction`, `skill.le-welcoming-client`,
`skill.le-background-questions`, `skill.le-clarifying-facts`,
`skill.le-explaining-next-steps`, `skill.le-dates-deadlines`,
`skill.le-managing-expectations`, `skill.le-client-update-writing`,
`skill.le-difficult-questions`, `skill.le-closing-meeting`

### Rubrics
`rubric.client-response.v1` · `rubric.email-quality.v1` ·
`rubric.client-interview-sim.v1` · `rubric.legal-english-written.v1` ·
`rubric.legal-english-spoken.v1` · `rubric.difficult-conversation.v1`

### Scenarios
`scn.first-client-meeting` · `scn.guarantee-request` · `scn.angry-client-delay` ·
`scn.fee-pushback` · `scn.le-intro-call` · `scn.le-explaining-process`

### Paths & chapters
- Path `path.client-communication-foundations`, slug `client-communication-foundations`,
  track `professional`, paired with `path.legal-english-client-communication`.
  Chapters: `ch.cc.first-contact` (units 1–3), `ch.cc.understanding`
  (units 4–5), `ch.cc.setting-expectations` (units 6–8), `ch.cc.keeping-trust`
  (units 9–10).
- Path `path.legal-english-client-communication`, slug
  `legal-english-client-communication`, track `legal_english`.
  Chapters: `ch.le.meeting-people` (units 1–3), `ch.le.getting-the-facts`
  (units 4–5), `ch.le.explaining-and-planning` (units 6–7),
  `ch.le.writing-and-pressure` (units 8–10).

### Unit ids
Client Communication: `unit.cc.01` … `unit.cc.10`
Legal English: `unit.le.01` … `unit.le.10`

### Activity ids
`act.<unitid-suffix>.<n>` — e.g. `act.cc.03.1`, `act.le.07.4`.

### Summary card ids
`card.cc.03`, `card.le.07`, …

## Source ids available for `sourceIds`
`src.managing-professional-service-firm`, `src.client-centered-law-firm`,
`src.game-changing-attorney`, `src.selling-the-invisible`,
`src.smarter-collaboration`, `src.lawyers-ceo`, `src.be-the-ceo`,
`src.small-firm-roadmap`, `src.modernize-your-law-firm`, `src.legal-ops-kpis`,
`src.fire-proof`, `src.68-power-moves`, `src.four-thousand-weeks`,
`src.meditations-for-mortals`, `src.your-brain-at-work`, `src.the-antidote`,
`src.introverted-leader`, `src.rainmaker`, `src.they-ask-you-answer`,
`src.built-to-sell`, `src.purple-cow`, `src.jab-jab-right-hook`,
`src.legal-project-management`, `src.governance-raci`,
`src.how-to-argue-and-win`, `src.making-your-case`, `src.tools-of-argument`,
`src.thinking-like-a-lawyer`, `src.legal-analyst`, `src.maccarthy-cross-exam`,
`src.rule-of-law`, `src.ultimate-associate-marketing`, `src.ali-rise`,
`src.to-kill-a-mockingbird`, `src.a-civil-action`, `src.anatomy-of-a-murder`,
`src.bleak-house`, `src.the-innocent-man`, `src.ultimate-punishment` (these
six are `kind: "narrative"` — illustrative texture/themes, not frameworks;
never mine them for extractable checklists the way the professional sources
above are used)

## Unit shape

Each unit follows the 15-part template as an ordered `steps` array:

```
hook → why_it_matters → learning_goal → micro_lesson → visual →
worked_example → activity(quick) → activity(guided) → activity(independent) →
[simulation] → activity(reflection) → summary → apply_tomorrow → next_mission
```

- 4–6 activities per unit, and **at least three different `kind` values**.
- Exactly one unit in each chapter should carry a `simulation` step.
- `stage` rises across the path: units 1–3 stage 1–2, units 4–7 stage 2–3,
  units 8–10 stage 3–4.
- `targetLevel`: units 1–3 → 2, units 4–8 → 3, units 9–10 → 4.
- `estimatedMinutes`: 6–12.
- `contentVersion: "1.0.0"`, `reviewStatus: "ai_suggested"` (human review is
  mandatory before publication — the app enforces this).

## Output rules

- Write **one TypeScript file** at the path you are given. No other files.
- Import types with `import type { ... } from "../types";` (adjust depth).
- Export exactly the named const you are told to export.
- No `any`. No `as` casts except `as const` where needed.
- Do not write prose commentary in your final message — just report what you
  produced and any assumptions.
