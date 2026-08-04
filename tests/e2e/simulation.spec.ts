import { test } from "@playwright/test";
import { DEMO_STORAGE_STATE } from "./global-setup";
import { runSimulationToCompletion } from "./helpers";

/**
 * End-to-end coverage of the simulation player -- previously untested by
 * this suite. Exercises the real flow: startSimulation() -> a live chat
 * turn through sendSimulationMessage() (the same offline deterministic AI
 * agent used everywhere else with no API key configured) ->
 * finishSimulation() -> a real evaluation rendered on the result screen.
 * The flow itself lives in `runSimulationToCompletion()` (`helpers.ts`),
 * shared with `review-queue.spec.ts`.
 *
 * Ends the conversation via the "End now" early-exit path rather than
 * driving it to the scenario's natural `maxTurns` (10-12 turns for the
 * scenarios in this content set) -- that path is itself a real,
 * user-facing feature (abandon/finish mid-conversation), and keeps this
 * test fast without weakening what it actually proves: a real session is
 * created, a real message round-trips through the offline agent, and a
 * real evaluation is produced and rendered.
 */
test.use({ storageState: DEMO_STORAGE_STATE });

test.describe("Simulation player", () => {
  test("a learner can start a simulation, send a message, and reach a real evaluation", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.first-client-meeting",
      "The first meeting",
      "Thank you for coming in. Before we talk about the notice, can you walk me through what happened from the beginning?",
    );
  });

  // The check above only proves the Client Communication domain's
  // simulation pipeline works end to end (its scenario, rubric, and the
  // offline evaluation/coaching agents together). This exercises a second
  // scenario from a separate domain -- Negotiation & Influence -- authored
  // in a later batch with its own rubric and content files, to catch
  // anything domain-specific a single fixed scenario wouldn't.
  test("a second scenario from another domain also completes (negotiation)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.negotiation-settlement-offer",
      "Settling a contractor payment dispute",
      "Before we discuss numbers, can you walk me through exactly which parts of the work your client believes fell short of spec?",
    );
  });

  // Two of 18 scenarios still isn't much coverage against 10 domains' worth
  // of separately-authored rubrics and character content. These two add the
  // Digital Tools & AI domain (the platform's newest, least-proven content
  // batch) and Legal English (a structurally different rubric -- graded on
  // English proficiency markers, not just professional judgment).
  test("a third scenario completes (Digital Tools & AI)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.catching-an-ai-hallucination",
      "Catching an AI hallucination",
      "Hossam, I need to flag something serious before this goes out -- I just found that the key case our limitation-period argument leans on doesn't actually exist. I want to walk you through exactly what I found and how we fix the memo before tomorrow morning.",
    );
  });

  test("a fourth scenario completes (Legal English)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.le-intro-call",
      "First call with a foreign client",
      "Good afternoon, thank you for taking the call. My name is Youssef, I'm calling from the firm regarding your distributor's outstanding payments -- could you walk me through what's happened from your side so far?",
    );
  });

  // Four scenarios still only proves 4 of the platform's 8 authored paths'
  // simulation pipelines end to end. These four add the remaining domains
  // untouched by any simulation test so far -- Firm & Matter Operations,
  // Business Development, Teamwork & Leadership, and Self-Management --
  // each with its own rubric and character content, so every one of the 8
  // paths now has at least one full simulation run proven, not just its
  // unit-player content (already covered by learner-content.spec.ts).
  test("a fifth scenario completes (Firm & Matter Operations)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.flagging-a-quality-issue",
      "Flagging a quality issue before it goes out",
      "Elie, before this goes to the courier I need a minute -- I was doing the final check on the appeal package and the deadline calculation in the memo doesn't match the judgment date. Can I walk you through what I found?",
    );
  });

  test("a sixth scenario completes (Business Development)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.asking-for-referral",
      "Asking a satisfied client for a referral",
      "I'm really glad we got that resolved for you, Hind. Before we wrap up -- if you happen to know any other business owners dealing with something similar, I'd genuinely appreciate an introduction.",
    );
  });

  test("a seventh scenario completes (Teamwork & Leadership)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.disagreeing-with-supervisor",
      "Disagreeing with the supervising partner on matter strategy",
      "Karim, before I start drafting the response along those lines, I wanted to flag a concern -- I think the aggressive position is actually weaker here than the alternative reading of the contract clause. Can I show you what I found?",
    );
  });

  test("an eighth scenario completes (Self-Management)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.overloaded-associate",
      "Competing priorities: an urgent ask from another partner",
      "Ziad, thanks for thinking of me for this -- I want to be upfront though, I'm fully committed to trial prep this week and taking on a Thursday deadline as well isn't realistic without something giving. Can we figure out a workable plan together?",
    );
  });
});
