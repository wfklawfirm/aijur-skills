import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { DEMO_STORAGE_STATE } from "./global-setup";

/**
 * Automated accessibility coverage via axe-core, targeting the platform's
 * WCAG 2.2 AA commitment (see the original build brief's non-negotiables
 * and docs/MOBILE_UX_ARCHITECTURE.md). This is not a substitute for manual
 * screen-reader/keyboard testing, but it catches the mechanical class of
 * issues axe is good at (missing labels, contrast, landmark structure,
 * aria misuse) across both locales and both anonymous and authenticated
 * pages -- nothing here existed as a committed, repeatable check before
 * this test file.
 *
 * Scoped to "critical" and "serious" impact violations as the pass/fail
 * bar: those are the classes of issue that actually block a user from
 * completing a task with a screen reader or other assistive technology.
 * "moderate"/"minor" findings are logged for visibility but don't fail the
 * suite, since a handful of them are inherent to the shared component
 * library rather than something a single page fix would resolve, and
 * treating every axe nitpick as a hard blocker would make this suite too
 * brittle to keep green as content grows.
 *
 * Two moderate-impact findings this suite originally caught -- missing
 * top-level `<h1>`s on several standalone auth/onboarding/diagnostic pages
 * (`page-has-heading-one`), and content living outside a landmark plus a
 * skip-link with no matching `#main` target on the unit/simulation player
 * pages (`region`, `skip-link`) -- have since been fixed at the source (see
 * docs/PRODUCT_AUDIT.md §5). They're promoted to always-blocking here,
 * regardless of impact level, so a regression is caught even though their
 * impact level alone wouldn't otherwise fail the suite.
 */
const BLOCKING_IMPACTS = ["critical", "serious"];
const ALWAYS_BLOCKING_RULE_IDS = ["page-has-heading-one", "region", "skip-link"];

async function assertNoBlockingViolations(page: import("@playwright/test").Page, label: string) {
  const results = await new AxeBuilder({ page }).analyze();
  const isBlocking = (v: (typeof results.violations)[number]) =>
    BLOCKING_IMPACTS.includes(v.impact ?? "") || ALWAYS_BLOCKING_RULE_IDS.includes(v.id);
  const blocking = results.violations.filter(isBlocking);
  const nonBlocking = results.violations.filter((v) => !isBlocking(v));

  if (nonBlocking.length > 0) {
    // Not an error (see the file-level comment above) -- surfaced via
    // console so `npm run test:e2e`'s output shows what to look at without
    // failing the run.
    console.log(
      `[a11y:${label}] ${nonBlocking.length} non-blocking (moderate/minor) finding(s): ` +
        nonBlocking.map((v) => `${v.id} (${v.impact})`).join(", "),
    );
  }

  if (blocking.length > 0) {
    const details = blocking
      .map(
        (v) =>
          `- ${v.id} (${v.impact}): ${v.help}\n` +
          v.nodes.map((n) => `    ${n.target.join(" ")} :: ${n.failureSummary}`).join("\n"),
      )
      .join("\n");
    throw new Error(`[a11y:${label}] ${blocking.length} blocking violation(s):\n${details}`);
  }

  expect(blocking).toEqual([]);
}

test.describe("Accessibility (axe-core, WCAG 2.2 AA target) — anonymous pages", () => {
  test("sign-in page (Arabic)", async ({ page }) => {
    await page.goto("/ar/sign-in");
    await assertNoBlockingViolations(page, "sign-in-ar");
  });

  test("sign-up page (Arabic)", async ({ page }) => {
    await page.goto("/ar/sign-up");
    await assertNoBlockingViolations(page, "sign-up-ar");
  });

  test("sign-in page (English)", async ({ page }) => {
    await page.goto("/en/sign-in");
    await assertNoBlockingViolations(page, "sign-in-en");
  });
});

test.describe("Accessibility (axe-core, WCAG 2.2 AA target) — authenticated pages", () => {
  test.use({ storageState: DEMO_STORAGE_STATE });

  test("authenticated home hub (English)", async ({ page }) => {
    await page.goto("/en/home");
    await assertNoBlockingViolations(page, "home-en");
  });

  test("a real unit page (English)", async ({ page }) => {
    await page.goto("/en/unit/unit.cc.01");
    await assertNoBlockingViolations(page, "unit-cc01-en");
  });
});
