import { test, expect } from "@playwright/test";
import { freshEmail } from "./helpers";

/**
 * Coverage for the three skills that had *zero* activity coverage anywhere
 * in the app until commit a0ec909 (9 new skills + 19 new activities from a
 * source-extraction backlog) gave each one its first-ever activity:
 *
 *   - skill.fee-conversations    -> act.cc.06.6 (best_response, unit.cc.06, step 12/16)
 *   - skill.professional-ethics  -> act.cc.07.6 (best_response, unit.cc.07, step 12/16)
 *   - skill.decision-making      -> act.cc.10.6 (best_response, unit.cc.10, step 12/16)
 *
 * `learner-content.spec.ts` already visits all 80 units end to end, but only
 * checks that each unit page loads (`main` visible, no 404/500, one button
 * exists) -- it never actually answers an activity, so these three brand-new
 * activities have never been proven real, reachable, or correctly gradable
 * by an automated test. `unitProgress.stepIndex` is server-persisted per
 * user+unit (see `src/app/(app)/[locale]/unit/[unitId]/page.tsx`), so there
 * is no query-param way to jump straight to step 12 -- each test below
 * clicks through every real step from 0, in order, including the unit's own
 * embedded simulation (driven to completion via the real "End now" early-exit
 * path, exactly as `simulation.spec.ts`/`runSimulationToCompletion` do),
 * until it lands on the real target activity.
 *
 * Deliberately does *not* use `DEMO_STORAGE_STATE`: each test submits real
 * answers and advances real per-unit `unitProgress.stepIndex` (see the same
 * reasoning in `learner-content.spec.ts`'s "Activity step transitions"
 * describe block) -- a fresh throwaway account per test sidesteps a second
 * run resuming mid-unit instead of at step 0.
 *
 * Intervening (non-target) activities are answered just plausibly enough to
 * advance -- their own grading logic is already covered elsewhere where
 * applicable; the point here is reaching the target step for real. Only the
 * target `best_response` activity is answered with its actual `correct: true`
 * option (verified by reading the content file) and checked for a real
 * "Correct" verdict.
 */

test.describe("New content coverage: first-ever activities for the newest skills (a0ec909)", () => {
  test.setTimeout(60_000);

  test("unit.cc.06 reaches act.cc.06.6 (skill.fee-conversations, best_response)", async ({ page }) => {
    const email = freshEmail("e2e-new-content-cc06");
    await page.goto("/en/sign-up");
    await page.locator('input[name="name"]').fill("E2E New Content CC06");
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill("CorrectHorseBattery9!");
    await page.getByRole("button", { name: "Create my account" }).click();
    await page.waitForURL(/\/en\/onboarding$/, { timeout: 10_000 });

    await page.goto("/en/unit/unit.cc.06");
    await expect(page.locator("main")).toBeVisible();

    // Steps 0-5: hook, why_it_matters, learning_goal, micro_lesson, visual,
    // worked_example -- no activity, just "Continue".
    for (let i = 0; i < 6; i++) {
      await page.getByRole("button", { name: "Continue", exact: true }).click();
    }

    // Step 6: act.cc.06.1 (multiple_choice, skill.expectation-management).
    // The `correct: true` option (o1) is the range-plus-conditions answer.
    await page
      .getByRole("button", { name: /Eight to fourteen months to a first-instance judgment/ })
      .click();
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 7: act.cc.06.2 (priority_ranking). `buildResponse()`
    // (activity-player.tsx) always has a seeded fallback order for
    // ordering/priority_ranking activities, so "Check" is enabled without any
    // reordering -- a real, if rushed, way a learner could submit this.
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 8: act.cc.06.3 (fill_blank, 3 blanks). Pick the first offered
    // option in each blank's button group (that happens to be each blank's
    // own `answerIndex: 0`, i.e. genuinely correct, per the content file).
    const blanks = page.locator("fieldset");
    await expect(blanks).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      await blanks.nth(i).getByRole("button").first().click();
    }
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 9: act.cc.06.4 (short_written, ai_rubric, minChars: 280). A real,
    // long-form reply (the activity's own authored model answer) so the
    // character-count gate on `canSubmit` genuinely passes.
    await page.locator("textarea").fill(
      "Good morning, Mr Ziad. Something you need to know today: the expert has told the court he needs " +
        "five more weeks to file his report. The effect on you: the estimate I gave you, eight to fourteen " +
        "months, becomes ten to sixteen. Nothing else in the matter changes, and the attachment already in " +
        "place is unaffected. The effect on fees: this period adds follow-up work that was not in the " +
        "proposal. I put it between eight hundred and one thousand two hundred, and I will not start it " +
        "without your written approval. What is in my hands: within a week I will file an application to " +
        "set an outside deadline for the expert, and I will send you a copy the day it goes in. I will call " +
        "you on the third of next month with an update, even if nothing has changed.",
    );
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 10: simulation (scn.fee-pushback). The unit's own Card links out
    // to /simulation/scn.fee-pushback?unit=unit.cc.06&return=11 -- click it
    // for real, run the simulation to completion via "End now" (the fast,
    // real early-exit path also used by simulation.spec.ts), and land back in
    // this unit at the step the simulation-runner persisted via
    // saveUnitStep(unitId, returnStepIndex) in its onFinish handler.
    await page.getByRole("link", { name: "Start the simulation" }).click();
    await expect(
      page.getByRole("heading", { name: /Another lawyer quoted me a third of this/ }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Start the simulation" }).click();
    await expect(page.locator("main")).toContainText(/.+/, { timeout: 10_000 });
    await expect(page.getByPlaceholder("Type your reply…")).toBeVisible();
    await page
      .getByPlaceholder("Type your reply…")
      .fill("That's a fair question -- can you tell me a bit more about what the other quote covers?");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.locator("main .max-w-\\[85\\%\\]")).toHaveCount(3, { timeout: 10_000 });
    await page.getByRole("button", { name: "End now" }).click();
    const endSheet = page.getByRole("dialog");
    await expect(endSheet).toBeVisible();
    await endSheet.getByRole("button", { name: "End now" }).click();
    await expect(page.getByText("Simulation ended")).toBeVisible({ timeout: 15_000 });
    await expect(page.locator("body")).not.toContainText("500");
    await page.getByRole("link", { name: "Continue", exact: true }).click();
    await page.waitForURL(/\/en\/unit\/unit\.cc\.06$/, { timeout: 10_000 });
    await expect(page.locator("main")).toBeVisible();

    // Step 11: act.cc.06.5 (reflection, self_report). Self-reported kinds'
    // footer button reads "Continue" both before submission (that click is
    // the submit itself -- see `isSelfReported()` in activity-player.tsx) and
    // after (that click advances) -- two consecutive "Continue" clicks here
    // is correct, not a mistake.
    await page.locator("textarea").fill("The client who stayed angriest was the one whose estimate I never revisited.");
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 12: act.cc.06.6 (best_response, skill.fee-conversations) -- THE
    // TARGET. Prove the new content is genuinely reachable by asserting its
    // real authored prompt is visible, then answer with the option marked
    // `correct: true` in content/paths/cc-units-05-07.ts (o1) and confirm a
    // real "Correct" verdict renders.
    await expect(page.getByText("What is the best way to handle this time pressure?")).toBeVisible();
    await page.getByRole("button", { name: /You have two options, and I.ll set them out clearly/ }).click();
    await page.getByRole("button", { name: "Check", exact: true }).click();

    // Scoped to the verdict Callout's own title paragraph (`feedback.tsx`'s
    // `Callout`, `p.font-semibold.leading-tight`), the same pattern used by
    // learner-content.spec.ts's "Activity step transitions" test -- "Correct"
    // also appears as a screen-reader-only per-option label and inside the
    // revealed rationale, so a bare text match would hit several elements.
    const verdictTitle = page.locator("p.font-semibold.leading-tight");
    await expect(verdictTitle.filter({ hasText: "Correct" })).toBeVisible();
  });

  test("unit.cc.07 reaches act.cc.07.6 (skill.professional-ethics, best_response)", async ({ page }) => {
    const email = freshEmail("e2e-new-content-cc07");
    await page.goto("/en/sign-up");
    await page.locator('input[name="name"]').fill("E2E New Content CC07");
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill("CorrectHorseBattery9!");
    await page.getByRole("button", { name: "Create my account" }).click();
    await page.waitForURL(/\/en\/onboarding$/, { timeout: 10_000 });

    await page.goto("/en/unit/unit.cc.07");
    await expect(page.locator("main")).toBeVisible();

    // Steps 0-5: hook, why_it_matters, learning_goal, micro_lesson, visual,
    // worked_example.
    for (let i = 0; i < 6; i++) {
      await page.getByRole("button", { name: "Continue", exact: true }).click();
    }

    // Step 6: act.cc.07.1 (multiple_choice, skill.avoiding-guarantees).
    // `correct: true` option (o1) refuses the guarantee and offers a map.
    await page.getByRole("button", { name: /I guarantee no outcome, and I will not/ }).click();
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 7: act.cc.07.2 (matching, 5 pairs). Pick some option in every
    // pair's <select> -- correctness of this intervening activity isn't the
    // point, only that all 5 pairs are answered so canSubmit is satisfied.
    const matchSelects = page.locator("select");
    await expect(matchSelects).toHaveCount(5);
    for (let i = 0; i < 5; i++) {
      await matchSelects.nth(i).selectOption({ index: 1 });
    }
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 8: act.cc.07.3 (branching_decision, 3 sequential nodes). Follow
    // the "strong"-quality choice at each node through to the end.
    await page
      .getByRole("button", { name: /I do not guarantee the outcome and I will not/ })
      .click();
    await page
      .getByRole("button", { name: /The earlier registration is a genuine strength/ })
      .click();
    await page.getByRole("button", { name: /Three things this week/ }).click();
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 9: act.cc.07.4 (short_written, ai_rubric, minChars: 300). The
    // activity's own authored model answer, long enough to clear the gate.
    await page.locator("textarea").fill(
      "Good morning, Mr Adel. It is a fair question and I will answer it as honestly as I can: nobody can " +
        "tell you whether we will win, and any answer of yes would be a sale, not advice. What is strong: " +
        "your registration is three years earlier, and the invoices you brought prove actual use since 2017. " +
        "What is weak: we do not yet have a single customer who will say he was confused, and that is what " +
        "the other side usually leans on. What is unknown: how long they have really used the name. It " +
        "turns on two things: priority of use rather than registration alone, and how they behave after the " +
        "demand. What I need from you this week: ask three of your regulars whether they have ever mixed " +
        "the two places up, and write down what they say with the date.",
    );
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 10: simulation (scn.guarantee-request). Same real flow as
    // unit.cc.06 above: click through from the unit, drive to completion via
    // "End now", land back in this unit at the next step.
    await page.getByRole("link", { name: "Start the simulation" }).click();
    await expect(page.getByRole("heading", { name: /Do you guarantee I.ll win/ })).toBeVisible();
    await page.getByRole("button", { name: "Start the simulation" }).click();
    await expect(page.locator("main")).toContainText(/.+/, { timeout: 10_000 });
    await expect(page.getByPlaceholder("Type your reply…")).toBeVisible();
    await page
      .getByPlaceholder("Type your reply…")
      .fill("I understand why you're asking, but I can't guarantee a result -- let me walk you through the real prospects instead.");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.locator("main .max-w-\\[85\\%\\]")).toHaveCount(3, { timeout: 10_000 });
    await page.getByRole("button", { name: "End now" }).click();
    const endSheet = page.getByRole("dialog");
    await expect(endSheet).toBeVisible();
    await endSheet.getByRole("button", { name: "End now" }).click();
    await expect(page.getByText("Simulation ended")).toBeVisible({ timeout: 15_000 });
    await expect(page.locator("body")).not.toContainText("500");
    await page.getByRole("link", { name: "Continue", exact: true }).click();
    await page.waitForURL(/\/en\/unit\/unit\.cc\.07$/, { timeout: 10_000 });
    await expect(page.locator("main")).toBeVisible();

    // Step 11: act.cc.07.5 (reflection, self_report) -- two "Continue"
    // clicks, as in unit.cc.06 above.
    await page.locator("textarea").fill("The word I was afraid of hearing was silence, not disagreement.");
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 12: act.cc.07.6 (best_response, skill.professional-ethics) -- THE
    // TARGET. Real prompt, real `correct: true` option (o1, content/paths/
    // cc-units-05-07.ts), real "Correct" verdict. The English prompt was
    // reworded from the generic, templated-sounding "What is the best
    // response?" to "Which reply is most appropriate here?" -- a clearer,
    // more natural client-facing question, and one this test can assert
    // against unambiguously (the original phrase was identical, word for
    // word, to another unit's best_response prompt in a different domain,
    // content/paths/sm-units-01-05.ts -- not a same-page collision risk,
    // but confusingly duplicated wording across the authored library
    // regardless). The Arabic prompt (unchanged) already reads naturally.
    await expect(page.getByText("Which reply is most appropriate here?")).toBeVisible();
    await page.getByRole("button", { name: /I can.t draft the contract that way/ }).click();
    await page.getByRole("button", { name: "Check", exact: true }).click();

    const verdictTitle = page.locator("p.font-semibold.leading-tight");
    await expect(verdictTitle.filter({ hasText: "Correct" })).toBeVisible();
  });

  test("unit.cc.10 reaches act.cc.10.6 (skill.decision-making, best_response)", async ({ page }) => {
    const email = freshEmail("e2e-new-content-cc10");
    await page.goto("/en/sign-up");
    await page.locator('input[name="name"]').fill("E2E New Content CC10");
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill("CorrectHorseBattery9!");
    await page.getByRole("button", { name: "Create my account" }).click();
    await page.waitForURL(/\/en\/onboarding$/, { timeout: 10_000 });

    await page.goto("/en/unit/unit.cc.10");
    await expect(page.locator("main")).toBeVisible();

    // Steps 0-5: hook, why_it_matters, learning_goal, micro_lesson, visual,
    // worked_example.
    for (let i = 0; i < 6; i++) {
      await page.getByRole("button", { name: "Continue", exact: true }).click();
    }

    // Step 6: act.cc.10.1 (find_mistake, skill.difficult-client-basics).
    // `correct: true` option (o2) names the ordering mistake (reason before
    // acknowledgement).
    await page
      .getByRole("button", { name: /The order: he began with the reason before the acknowledgement/ })
      .click();
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 7: act.cc.10.2 (ordering). Same fallback-order reasoning as
    // act.cc.06.2 above: buildResponse() always has a seeded order for this
    // kind, so "Check" is enabled with no reordering needed.
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 8: act.cc.10.3 (branching_decision, 2 nodes reached). Follow the
    // "strong"-quality choice at each node.
    await page
      .getByRole("button", { name: /Before you decide, let me ask you one thing/ })
      .click();
    await page.getByRole("button", { name: /Thank you for telling me/ }).click();
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 9: act.cc.10.4 (short_written, ai_rubric, minChars: 300). The
    // activity's own authored model answer.
    await page.locator("textarea").fill(
      "Mr Khaled, to confirm our call. Three weeks with no contact from us and four calls unanswered: that " +
        "is the firm's failure and I am answerable for it. The position precisely: the notice is prepared " +
        "and has not gone out. The file moved to me inside the firm and we did not tell you -- that is why " +
        "contact stopped. What I commit to: I send the notice on Wednesday 16 September and a copy reaches " +
        "you the same day; I call you on Thursday 17 at 10 a.m.; and on Monday 21 September you receive a " +
        "one-page note on what the sixty-per-cent offer would mean in practice. I cannot promise you an " +
        "amount or a payment date; neither is mine to give.",
    );
    await page.getByRole("button", { name: "Check", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 10: simulation (scn.angry-client-delay). Same real flow as the
    // other two units above.
    await page.getByRole("link", { name: "Start the simulation" }).click();
    await expect(
      page.getByRole("heading", { name: "Three weeks with no word: an angry client" }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Start the simulation" }).click();
    await expect(page.locator("main")).toContainText(/.+/, { timeout: 10_000 });
    await expect(page.getByPlaceholder("Type your reply…")).toBeVisible();
    await page
      .getByPlaceholder("Type your reply…")
      .fill("You're right to be upset -- three weeks of silence isn't acceptable, and I'm sorry. Let me tell you exactly what happened.");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.locator("main .max-w-\\[85\\%\\]")).toHaveCount(3, { timeout: 10_000 });
    await page.getByRole("button", { name: "End now" }).click();
    const endSheet = page.getByRole("dialog");
    await expect(endSheet).toBeVisible();
    await endSheet.getByRole("button", { name: "End now" }).click();
    await expect(page.getByText("Simulation ended")).toBeVisible({ timeout: 15_000 });
    await expect(page.locator("body")).not.toContainText("500");
    await page.getByRole("link", { name: "Continue", exact: true }).click();
    await page.waitForURL(/\/en\/unit\/unit\.cc\.10$/, { timeout: 10_000 });
    await expect(page.locator("main")).toBeVisible();

    // Step 11: act.cc.10.5 (reflection, self_report) -- two "Continue"
    // clicks, as above.
    await page.locator("textarea").fill("It was an explanation, not an acknowledgement -- I led with the reason, not the ownership.");
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Step 12: act.cc.10.6 (best_response, skill.decision-making) -- THE
    // TARGET. Real prompt, real `correct: true` option (o1, content/paths/
    // cc-units-08-10.ts), real "Correct" verdict.
    await expect(
      page.getByText("As the person who owns the final call on this reply, what do you do now?"),
    ).toBeVisible();
    await page
      .getByRole("button", { name: /finish your point\. What exactly worries you about paragraph three/ })
      .click();
    await page.getByRole("button", { name: "Check", exact: true }).click();

    const verdictTitle = page.locator("p.font-semibold.leading-tight");
    await expect(verdictTitle.filter({ hasText: "Correct" })).toBeVisible();
  });
});
