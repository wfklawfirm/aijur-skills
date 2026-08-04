import { test, expect } from "@playwright/test";
import { DEMO_STORAGE_STATE } from "./global-setup";

/**
 * Verifies that a real, already-onboarded learner can see authored content
 * render end to end -- not just that the pages exist, but that a real unit
 * (from `content/paths/cc-units-01-04.ts`, seeded into the dev DB by
 * `scripts/seed.ts`) loads with a visible title and at least one activity,
 * and that the home/learn hub pages render without error for a signed-in
 * user.
 *
 * Authentication happens once for the whole run, in `global-setup.ts` (see
 * that file for why: sign-in is rate-limited per email, and signing in
 * fresh in every test here would exhaust that limit partway through this
 * spec file alone).
 */
test.use({ storageState: DEMO_STORAGE_STATE });

test.describe("Authenticated learner content", () => {
  test("reaches the home hub", async ({ page }) => {
    await page.goto("/en/home");
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("body")).not.toContainText("500");
  });

  test("the learn hub lists real authored paths", async ({ page }) => {
    await page.goto("/en/learn");
    await expect(page.locator("main")).toBeVisible();
    // At minimum the Client Communication Foundations path (the platform's
    // original, longest-shipped path) should be discoverable from here.
    await expect(page.locator("body")).toContainText(/Client Communication/i);
  });

  test("a real unit page renders its authored content", async ({ page }) => {
    await page.goto("/en/unit/unit.cc.01");
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("body")).not.toContainText("404");
    await expect(page.locator("body")).not.toContainText("500");
    // The unit player renders at least one interactive control (an activity
    // step, a "continue" action, or similar) -- confirm the page isn't an
    // empty shell by checking for at least one button.
    await expect(page.getByRole("button").first()).toBeVisible();
  });

  // The single unit.cc.01 check above only proves the Client Communication
  // domain's content pipeline works end to end. These cover the remaining
  // seven of the platform's eight authored paths -- Legal English,
  // Negotiation & Influence, Self-Management, Teamwork & Leadership,
  // Business Development, Firm & Matter Operations, and Digital Tools & AI
  // -- each authored in a separate batch with its own content files, to
  // catch anything domain-specific that a single fixed unit page wouldn't.
  // Every one of the 8 paths now has at least its first unit exercised.
  for (const unitId of ["unit.le.01", "unit.ni.01", "unit.sm.01", "unit.tl.01", "unit.bd.01", "unit.fo.01", "unit.da.01"]) {
    test(`a real unit page from another domain renders (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }

  // Every check above is unit 1 of its path -- the id-contract seam most
  // likely to be exercised by hand during authoring, and least likely to
  // catch a bug specific to a later chapter (e.g. an id typo in
  // `*-units-06-10.ts`, a chapter boundary miscount). Spot-check the last
  // unit of two paths from different authoring batches -- the platform's
  // original path (Client Communication, unit 10 of the first-ever content
  // committed) and the final path added this session (Digital Tools & AI,
  // unit 10 of the last-ever content committed) -- as a cheap proxy for
  // "the whole path holds together, not just its first step."
  for (const unitId of ["unit.cc.10", "unit.da.10"]) {
    test(`the last unit of a path renders too (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }
});
