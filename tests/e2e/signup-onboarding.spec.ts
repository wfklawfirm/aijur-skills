import { test, expect } from "@playwright/test";
import { freshEmail } from "./helpers";

/**
 * Real, end-to-end coverage of the account-creation path: sign-up Server
 * Action -> session cookie -> onboarding's 9-step wizard -> saveOnboarding
 * Server Action -> redirect into the diagnostic. Every step here exercises
 * real Server Actions against the real dev database (no mocking), the same
 * way the one-off CSRF verification script did earlier in this project's
 * history -- the difference is this one is committed and repeatable via
 * `npm run test:e2e` instead of being a manual one-time run.
 */
test.describe("Sign-up and onboarding", () => {
  test("a new user can sign up, complete onboarding, and reach the diagnostic", async ({ page }) => {
    const email = freshEmail("e2e-signup");

    await page.goto("/en/sign-up");
    await expect(page).toHaveTitle(/.+/);

    await page.locator('input[name="name"]').fill("E2E Test User");
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill("CorrectHorseBattery9!");
    await page.getByRole("button", { name: "Create my account" }).click();

    // signUp() redirects straight to onboarding for a brand-new, un-onboarded user.
    await page.waitForURL(/\/en\/onboarding$/, { timeout: 10_000 });

    // Step 0 - language: defaults to a valid selection already, no interaction needed.
    await clickNext(page);

    // Step 1 - country: a free-text field, must be >= 2 characters.
    await page.locator("input[dir='auto']").fill("AE");
    await clickNext(page);

    // Step 2 - career stage: a single-select radio group, nothing selected by default.
    await page.locator('input[name="careerStage"]').first().check();
    await clickNext(page);

    // Step 3 - years of experience: defaults to "0", already valid.
    await clickNext(page);

    // Step 4 - goals: a multi-select checkbox group, at least one required.
    await page.locator('input[name="goals"]').first().check();
    await clickNext(page);

    // Step 5 - English self-rating: a single-select radio group.
    await page.locator('input[name="englishSelfRating"]').first().check();
    await clickNext(page);

    // Step 6 - weekly minutes goal: defaults to 60, already valid.
    await clickNext(page);

    // Step 7 - practice preference: defaults to "both", already valid.
    await clickNext(page);

    // Step 8 - accessibility preferences: always valid; the button here reads
    // "Save and start the assessment" and triggers saveOnboarding() + redirect.
    await page.getByRole("button", { name: "Save and start the assessment" }).click();

    await page.waitForURL(/\/en\/diagnostic$/, { timeout: 10_000 });

    // The diagnostic page renders real seeded diagnostic content (8 items,
    // content/diagnostics.ts) -- confirm it's not an empty/error shell.
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("body")).not.toContainText("500");

    // Previously this test stopped here. It now drives the diagnostic to
    // completion through real Server Actions (submitActivity per item, then
    // submitDiagnostic()) and confirms the redirect into the freshly
    // onboarded learner's home hub -- the actual end of the account-creation
    // funnel, not just the page it happens to land on.
    await page.getByRole("button", { name: "Start" }).click();

    // 8 items, mixed activity kinds (best_response, priority_ranking,
    // multiple_choice, multiple_select, short_written, find_mistake) -- see
    // content/diagnostics.ts. answerDiagnosticItem() below handles whichever
    // kind is on screen without needing to know which item index it is.
    for (let i = 0; i < 8; i++) {
      await answerDiagnosticItem(page);
    }

    // submitDiagnostic() runs, then the result screen renders with a
    // recommended path and a "start the first mission" CTA into /home.
    await expect(page.getByRole("heading", { name: "Here's your map" })).toBeVisible({ timeout: 10_000 });
    await page.getByRole("button", { name: "Start the first mission" }).click();

    await page.waitForURL(/\/en\/home$/, { timeout: 10_000 });
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("body")).not.toContainText("500");
  });
});

async function clickNext(page: import("@playwright/test").Page) {
  await page.getByRole("button", { name: "Next" }).click();
}

/**
 * Answers whatever diagnostic item is currently on screen and advances past
 * it. Every deterministic activity kind in the diagnostic (see
 * content/diagnostics.ts) resolves to one of three interaction shapes:
 *   - a written response (short_written) -> a <textarea> is present.
 *   - a choice list (best_response / multiple_choice / multiple_select /
 *     find_mistake) -> option buttons rendered as `<ul><li><button>`.
 *   - a ranking item (priority_ranking) -> no interaction is required at
 *     all: ActivityPlayer's buildResponse() falls back to a seeded shuffle
 *     of the un-reordered list, so "Check" is already enabled.
 * Whichever shape is present, this clicks "Check" to submit (grading it
 * against the real grading engine) and then "Continue" to advance, exactly
 * as a learner would.
 */
async function answerDiagnosticItem(page: import("@playwright/test").Page) {
  const textarea = page.locator("textarea");
  if (await textarea.isVisible().catch(() => false)) {
    await textarea.fill(
      "I would slow down, confirm the facts directly with the client, and only commit to next steps once I understand what actually happened.",
    );
  } else {
    const firstOption = page.locator("ul li button").first();
    if (await firstOption.isVisible().catch(() => false)) {
      await firstOption.click();
    }
    // else: a ranking item -- no interaction needed, see the doc comment above.
  }

  await page.getByRole("button", { name: "Check" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
}
