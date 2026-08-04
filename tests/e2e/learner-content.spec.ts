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

  // First and last units only prove the two ends of a path hold together --
  // a chapter-boundary bug (e.g. an id mismatch between a path's own
  // `-units-01-05.ts` and `-units-06-10.ts` files, or a mid-path chapter
  // that references the wrong skill/rubric) could still sit in the middle
  // and go uncaught. Spot-check unit 5 -- the seam between those two
  // authoring files -- for two more paths not already covered above:
  // Negotiation & Influence (also exercised by a simulation test, so this
  // catches unit-player-specific issues that scenario coverage wouldn't)
  // and Firm & Matter Operations (the one domain whose own independent QA
  // pass came back completely clean, worth double-checking here too).
  for (const unitId of ["unit.ni.05", "unit.fo.05"]) {
    test(`a middle unit of a path renders too (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }

  // Two of 8 paths spot-checked at their middle unit still leaves six
  // completely unchecked between their first and last step. These six
  // close that gap for every remaining authored path: Client Communication
  // (whose own file split is actually 01-04/05-07/08-10, not the
  // 01-05/06-10 pattern the others use -- unit 5 here is a different, still
  // real seam, between the first and second authoring files), Legal
  // English, Self-Management, Teamwork & Leadership, Business Development,
  // and Digital Tools & AI. With these, every one of the 8 authored paths
  // now has first, middle, and (for two of them) last unit exercised.
  for (const unitId of ["unit.cc.05", "unit.le.05", "unit.sm.05", "unit.tl.05", "unit.bd.05", "unit.da.05"]) {
    test(`a middle unit of every remaining path renders too (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }

  // Only 2 of 8 paths (cc, da) have their last unit spot-checked above --
  // the remaining 6 have first and middle covered but not the tenth and
  // final unit, which is exactly where a chapter-count-off-by-one or a
  // dangling "next unit" link bug would surface. Closes that gap for every
  // remaining authored path, completing first+middle+last coverage across
  // all 8 of the platform's authored paths.
  for (const unitId of ["unit.le.10", "unit.ni.10", "unit.sm.10", "unit.tl.10", "unit.bd.10", "unit.fo.10"]) {
    test(`the last unit of every remaining path renders too (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }

  // First/seam/last coverage (units 1, 5, 10) still leaves every path's
  // units 2-4 and 6-9 completely unexercised -- 6 of every path's 10
  // units. These add unit 3 (inside the first authoring file, between
  // "first" and "seam") and unit 8 (inside the second authoring file,
  // between "seam" and "last") for all 8 paths, roughly bisecting each
  // previously-unexercised half so a bug isolated to one interior unit is
  // more likely to be caught than by endpoint sampling alone.
  for (const unitId of [
    "unit.cc.03", "unit.le.03", "unit.ni.03", "unit.sm.03", "unit.tl.03", "unit.bd.03", "unit.fo.03", "unit.da.03",
  ]) {
    test(`an early-interior unit of every path renders too (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }

  for (const unitId of [
    "unit.cc.08", "unit.le.08", "unit.ni.08", "unit.sm.08", "unit.tl.08", "unit.bd.08", "unit.fo.08", "unit.da.08",
  ]) {
    test(`a late-interior unit of every path renders too (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }

  // Units 3 and 8 above still leave units 2, 4, 6, 7, and 9 of every path
  // unexercised. These close the two positions immediately adjacent to the
  // already-proven endpoints -- unit 2 (right after "first") and unit 9
  // (right before "last") -- for all 8 paths, catching an off-by-one in
  // the very first or very last content-file boundary that a check on unit
  // 1/10 themselves wouldn't (e.g. a unit array that's shifted by one but
  // still happens to render *something* at index 0).
  for (const unitId of [
    "unit.cc.02", "unit.le.02", "unit.ni.02", "unit.sm.02", "unit.tl.02", "unit.bd.02", "unit.fo.02", "unit.da.02",
  ]) {
    test(`the unit right after the first unit of every path renders too (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }

  for (const unitId of [
    "unit.cc.09", "unit.le.09", "unit.ni.09", "unit.sm.09", "unit.tl.09", "unit.bd.09", "unit.fo.09", "unit.da.09",
  ]) {
    test(`the unit right before the last unit of every path renders too (${unitId})`, async ({ page }) => {
      await page.goto(`/en/unit/${unitId}`);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("body")).not.toContainText("404");
      await expect(page.locator("body")).not.toContainText("500");
      await expect(page.getByRole("button").first()).toBeVisible();
    });
  }
});
