import { defineConfig, devices } from "@playwright/test";

/**
 * E2E / accessibility / RTL configuration.
 *
 * This project runs against a real `next dev` server on a dedicated port
 * (isolated from the port a human developer might already be using), driving
 * a real Chromium browser through real Server Actions and the real dev
 * database (`data/aijur.db`, created by `npm run setup`). Nothing here is
 * mocked — this is the same kind of end-to-end verification used earlier in
 * this project's history to prove the CSRF guard didn't break real sign-up
 * (see `docs/SECURITY.md` §7), now made repeatable via `npm run test:e2e`
 * instead of being a one-off manual script.
 *
 * The sandboxed build environment pre-installs a specific Chromium revision
 * outside the version @playwright/test itself expects, so the browser is
 * launched with an explicit `executablePath` rather than relying on
 * Playwright's own browser-management/auto-download (which has no network
 * path to fetch a browser in this environment, and shouldn't need one — the
 * pinned binary works fine, it's just not the exact revision `npx playwright
 * install` would have picked).
 */
const CHROMIUM_EXECUTABLE = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ?? "/opt/pw-browsers/chromium";
const PORT = 3200;
// "localhost", not "127.0.0.1": the app's CSRF Origin guard
// (src/lib/auth/csrf.ts) and Next's own built-in Server Action Origin check
// both compare the browser's `Origin` header against the request's resolved
// origin, and this project's earlier manual Playwright verification of that
// guard (docs/SECURITY.md §7) used `localhost` specifically — matching it
// here avoids a host-canonicalization mismatch between the two.
const BASE_URL = `http://localhost:${PORT}`;

// `next start` (production mode) refuses to boot without a real SESSION_SECRET
// (see src/lib/auth/session.ts's `secret()` guard). This is a throwaway
// value scoped to this test run's own server process only — never reused for
// a real deployment, and never read from/written to any persisted file.
const TEST_SESSION_SECRET = process.env.SESSION_SECRET ?? "e2e-test-only-session-secret-never-use-in-production-0000";

export default defineConfig({
  testDir: "./tests/e2e",
  globalSetup: "./tests/e2e/global-setup.ts",
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  timeout: 30_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: {
      executablePath: CHROMIUM_EXECUTABLE,
      args: ["--no-sandbox"],
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    // Deliberately a production build + `next start`, not `next dev`: dev
    // mode's Turbopack HMR races with the very first cold navigation under
    // headless automation and intermittently throws a client-side RSC
    // streaming error ("An unexpected response was received from the
    // server", caught by src/app/(app)/[locale]/error.tsx) before any route
    // has fully compiled. A production build has no such race and is the
    // same rigor already used earlier in this project's history to verify
    // the CSRF guard against real traffic (see docs/SECURITY.md §7).
    command: `npm run build && npx next start -p ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    stdout: "pipe",
    stderr: "pipe",
    env: { SESSION_SECRET: TEST_SESSION_SECRET },
  },
});
