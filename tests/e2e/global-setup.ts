import { chromium, type FullConfig } from "@playwright/test";
import * as fs from "node:fs";
import * as path from "node:path";
import { signInAsDemo } from "./helpers";

/**
 * Signs in as the seeded demo account exactly ONCE per test run and saves
 * the resulting session cookie to a storage-state file that every
 * authenticated test in this suite reuses (`playwright.config.ts`'s
 * `projects[].use.storageState`, or an explicit `test.use({ storageState })`
 * per spec file).
 *
 * This matters beyond speed: sign-in is rate-limited per email
 * (`LOGIN_EMAIL_LIMIT` in `src/lib/actions/auth.ts`, 5 attempts / 15 min) as
 * a real anti-brute-force control, and this whole suite runs against a
 * real, persistent dev database rather than a mock. Signing in fresh in
 * every test that needs an authenticated session would exhaust that limit
 * partway through the suite and start failing tests for a reason that has
 * nothing to do with a real bug -- reusing one session avoids that entirely
 * while still exercising the real auth flow once, for real.
 */
const AUTH_DIR = path.join(process.cwd(), "tests/e2e/.auth");
export const DEMO_STORAGE_STATE = path.join(AUTH_DIR, "demo-user.json");

export default async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0]?.use?.baseURL as string | undefined;
  if (!baseURL) throw new Error("global-setup: no baseURL configured");

  fs.mkdirSync(AUTH_DIR, { recursive: true });

  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ?? "/opt/pw-browsers/chromium",
    args: ["--no-sandbox"],
  });
  try {
    const page = await browser.newPage({ baseURL });
    await signInAsDemo(page, "en");
    await page.context().storageState({ path: DEMO_STORAGE_STATE });
  } finally {
    await browser.close();
  }
}
