import { expect, type Page } from "@playwright/test";

/** The seeded demo account created by `scripts/seed.ts` — already onboarded. */
export const DEMO_EMAIL = "nour@demo.aijur.ai";
export const DEMO_PASSWORD = "AijurDemo2026!";

/** The seeded demo `admin` account — holds `content.author` + `evaluation.review`. */
export const DEMO_ADMIN_EMAIL = "admin@demo.aijur.ai";
export const DEMO_ADMIN_PASSWORD = DEMO_PASSWORD;

/** Signs in as the seeded demo account via the real sign-in form and Server Action. */
export async function signInAsDemo(page: Page, locale: "ar" | "en" = "en") {
  await signInAs(page, DEMO_EMAIL, DEMO_PASSWORD, locale);
}

/** Signs in as the seeded demo admin account (Content Studio access). */
export async function signInAsAdmin(page: Page, locale: "ar" | "en" = "en") {
  await signInAs(page, DEMO_ADMIN_EMAIL, DEMO_ADMIN_PASSWORD, locale);
}

async function signInAs(page: Page, email: string, password: string, locale: "ar" | "en") {
  await page.goto(`/${locale}/sign-in`);
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole("button", { name: "Sign in" }).click();
  // Successful sign-in redirects away from /sign-in.
  await page.waitForURL((url) => !url.pathname.endsWith("/sign-in"), { timeout: 10_000 });
}

/** Generates a unique, obviously-fake email for a throwaway e2e test account. */
export function freshEmail(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 100_000)}@e2e.test.invalid`;
}

/**
 * Drives a real simulation session to completion: brief screen -> start ->
 * send one message -> end early via "End now" -> a real rendered
 * evaluation. Shared by `simulation.spec.ts` (which tests this flow
 * directly) and `review-queue.spec.ts` (which needs a real queued
 * evaluation as a fixture and gets one as a side effect of this flow).
 *
 * Deliberately kept in this plain helpers module rather than exported from
 * a `.spec.ts` file: Playwright treats a spec file's top-level `test.use()`/
 * `test.describe()` calls as side effects of importing the module, so a
 * second spec file importing from `simulation.spec.ts` would silently
 * re-register (and re-run) `simulation.spec.ts`'s own tests every time the
 * importing file's tests run — confirmed by running `review-queue.spec.ts`
 * alone and seeing 3 tests execute instead of 1.
 */
export async function runSimulationToCompletion(page: Page, scenarioId: string, headingName: string, reply: string) {
  await page.goto(`/en/simulation/${scenarioId}`);

  // Brief screen: real scenario content (role/goal/background/character),
  // rendered under the scenario's own AppHeader <h1>.
  await expect(page.getByRole("heading", { name: headingName })).toBeVisible();
  await page.getByRole("button", { name: "Start the simulation" }).click();

  // startSimulation() returns a real opening line from the offline agent.
  await expect(page.locator("main")).toContainText(/.+/, { timeout: 10_000 });
  await expect(page.getByPlaceholder("Type your reply…")).toBeVisible();

  await page.getByPlaceholder("Type your reply…").fill(reply);
  await page.getByRole("button", { name: "Send" }).click();

  // sendSimulationMessage() round-trips through the real (offline) agent and
  // appends a character reply. Every message bubble shares the same
  // `max-w-[85%]` class regardless of role (`simulation-runner.tsx`), and
  // the learner's own message is added to state optimistically the instant
  // Send is clicked -- so right after the click there are already 2 bubbles
  // (the scenario's opening line + the learner's own message) *before* the
  // real round trip even starts. Asserting `toHaveCount(2)` here would pass
  // on that transient state without ever proving a reply arrived -- exactly
  // as brittle as it sounds: it happened to hold up as long as this
  // assertion's first poll consistently landed inside that (real,
  // network-latency-bound) transient window, until running the full suite
  // under more concurrent load shifted that timing and caught 3 instead.
  // The actual proof of a completed round trip is 3 bubbles: opening +
  // learner + character reply.
  await expect(page.locator("main .max-w-\\[85\\%\\]")).toHaveCount(3, { timeout: 10_000 });

  // End early rather than driving to the scenario's natural maxTurns.
  await page.getByRole("button", { name: "End now" }).click();
  const endSheet = page.getByRole("dialog");
  await expect(endSheet).toBeVisible();
  await endSheet.getByRole("button", { name: "End now" }).click();

  // finishSimulation() runs a real evaluation and the result screen
  // renders it -- score ring, a real heading, and at least one of the
  // feedback sections (strengths/missed/critical/priority) with content.
  await expect(page.getByText("Simulation ended")).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("body")).not.toContainText("500");
}
