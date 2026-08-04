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
});
