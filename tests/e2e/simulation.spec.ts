import { test, expect } from "@playwright/test";
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

  // Eight scenarios proved every one of the 8 authored paths has at least
  // one working simulation pipeline, but most domains actually ship two
  // scenarios each and only their first has ever been run through this
  // suite. These seven add the second scenario for every domain that had
  // one (Legal English, Negotiation & Influence, Self-Management, Teamwork
  // & Leadership, Business Development, Firm & Matter Operations, Digital
  // Tools & AI), each exercising a distinct rubric/skill combination from
  // its domain's first scenario -- catching bugs specific to that second
  // rubric or character set that the first scenario's content couldn't.
  test("a ninth scenario completes (Legal English, second)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.le-explaining-process",
      "Explaining company formation in plain English",
      "Sure -- let me walk you through it step by step in plain terms. First, we'll need to reserve your company name, which usually takes about three to five business days once we submit the application.",
    );
  });

  test("a tenth scenario completes (Negotiation & Influence, second)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.negotiation-hostile-counterpart",
      "Renewing a lease against a hardball landlord's representative",
      "I hear you on the timeline, but I want to name what's happening here -- a same-day deadline on a multi-year lease renewal isn't something I can responsibly agree to without a proper review, and I don't think you'd want your client bound to terms rushed through either.",
    );
  });

  test("an eleventh scenario completes (Self-Management, second)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.missed-deadline-disclosure",
      "Proactively disclosing an at-risk deadline",
      "Salma, I need to flag something now rather than wait -- with two days left on the trademark opposition, I've realized my own triage this week means we won't hit the filing deadline as planned. Here's what happened and here's the recovery plan I'd propose.",
    );
  });

  test("a twelfth scenario completes (Teamwork & Leadership, second)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.reluctant-peer-buyin",
      "Securing a reluctant peer's buy-in with no formal authority",
      "I know your team is slammed right now, so I don't want to just dump this on you -- but I do need your specialist eyes on this section before Thursday, and I think there's a way to scope it down so it's manageable on your end. Can I walk you through what I have in mind?",
    );
  });

  test("a thirteenth scenario completes (Business Development, second)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.converting-warm-contact",
      "Converting a warm contact's passing remark into a real consultation",
      "Rami, it's great seeing you again -- that sounds like a genuinely stressful situation with your co-founder. I've actually worked on a few disputes like that; would it be useful if we grabbed fifteen minutes sometime next week so I can hear more about what's going on?",
    );
  });

  test("a fourteenth scenario completes (Firm & Matter Operations, second)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.handing-over-your-matter",
      "Handing over your matter before leave",
      "I get that you're slammed, Farah, but I don't think a full document dump is going to set you up well here -- let me give you the ten-minute version now: where things stand, what's due next, and the two things most likely to blow up while I'm out.",
    );
  });

  test("a fifteenth scenario completes (Digital Tools & AI, second)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.declining-to-use-a-tool",
      "Declining to use a tool under time pressure",
      "Firas, I get the time crunch, but I can't put the client's financial data into a tool the firm hasn't approved -- let's find a faster way through the approved channel instead, and I can help you triage what actually needs full verification before six.",
    );
  });

  // Client Communication is the platform's original, most heavily authored
  // path -- it ships four scenarios where every other domain ships two,
  // and until now only its very first (scn.first-client-meeting) had ever
  // been exercised. These three close out the remaining three, bringing
  // every one of the platform's 18 scenarios to at least one proven
  // simulation run.
  test("a sixteenth scenario completes (Client Communication: guarantee request)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.guarantee-request",
      '"Do you guarantee I\'ll win?"',
      "I understand why you're asking, and I want to be straight with you -- I can't guarantee a result, no honest lawyer can. What I can do is walk you through exactly how we'd assess your case's real prospects.",
    );
  });

  test("a seventeenth scenario completes (Client Communication: angry client)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.angry-client-delay",
      "Three weeks with no word: an angry client",
      "You're right to be upset -- three weeks of silence from us isn't acceptable, and I'm sorry. Let me tell you exactly what happened on the file and what I'm going to do about it starting today.",
    );
  });

  test("an eighteenth scenario completes (Client Communication: fee pushback)", async ({ page }) => {
    await runSimulationToCompletion(
      page,
      "scn.fee-pushback",
      '"Another lawyer quoted me a third of this"',
      "That's a fair question to raise, and I'd rather we talk it through than have you wonder about it. Can you tell me a bit about what the other quote covers, so we're actually comparing the same scope of work?",
    );
  });

  // Every test above ends the conversation early via the "End now" control
  // -- a real, distinct code path from the scenario reaching its own
  // natural end. `sendSimulationMessage()` sets `shouldEnd` once
  // `nextTurn >= scenario.maxTurns` (`src/lib/actions/simulation.ts`), and
  // `simulation-runner.tsx`'s `handleSend()` auto-calls `handleFinish()`
  // when that happens -- the "End now" button is never involved. That
  // auto-finish branch had never been exercised by this suite until now.
  // scn.guarantee-request has the shortest `maxTurns` (10) of any tested
  // scenario, keeping this test's turn count low while still proving the
  // real thing: open-ended replies sent turn after turn (the offline
  // agent's deterministic logic rewards an open question with a revealed
  // fact -- see `offlineTurn()` in `src/lib/ai/agents/simulation.ts` --
  // so exact wording doesn't matter, only that each message reads as an
  // open question) until the agent itself decides to end, with no "End
  // now" click anywhere in this test.
  test("a simulation reaches its natural end (maxTurns) without the 'End now' control", async ({ page }) => {
    await page.goto("/en/simulation/scn.guarantee-request");
    await expect(page.getByRole("heading", { name: '"Do you guarantee I\'ll win?"' })).toBeVisible();
    await page.getByRole("button", { name: "Start the simulation" }).click();
    await expect(page.locator("main")).toContainText(/.+/, { timeout: 10_000 });
    await expect(page.getByPlaceholder("Type your reply…")).toBeVisible();

    // scn.guarantee-request's maxTurns is 10 -- send open-ended replies
    // until the player itself transitions away from the chat phase (the
    // "Simulation ended" result heading appears), never clicking "End now".
    // The transition from chat -> evaluating -> result happens inside a
    // single React re-render once `shouldEnd` comes back true, so a plain
    // "check visible, then act" loop races the DOM: interacting with the
    // input/button is wrapped in try/catch and simply breaks the loop if
    // the page has already moved on, rather than trying to out-guess the
    // exact re-render timing.
    for (let i = 0; i < 12; i++) {
      try {
        const input = page.getByPlaceholder("Type your reply…");
        await input.waitFor({ state: "visible", timeout: 3_000 });
        await input.fill(`Can you tell me more about what happened, specifically around turn ${i + 1}?`, { timeout: 5_000 });
        await page.getByRole("button", { name: "Send" }).click({ timeout: 5_000 });
      } catch {
        break;
      }
      await Promise.race([
        expect(page.getByPlaceholder("Type your reply…")).toBeEnabled({ timeout: 15_000 }),
        expect(page.getByText("Simulation ended")).toBeVisible({ timeout: 15_000 }),
      ]).catch(() => {});
      if (await page.getByText("Simulation ended").isVisible().catch(() => false)) break;
    }

    await expect(page.getByText("Simulation ended")).toBeVisible({ timeout: 20_000 });
    await expect(page.locator("body")).not.toContainText("500");
    // The "End now" control should never have been clicked in this test --
    // confirm no leftover confirmation dialog is stuck open.
    await expect(page.getByRole("dialog")).not.toBeVisible();
  });
});
