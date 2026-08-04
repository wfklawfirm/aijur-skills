import { test, expect } from "@playwright/test";
import { DEMO_STORAGE_STATE } from "./global-setup";

/**
 * End-to-end coverage of the PWA offline behaviour described in
 * `public/sw.js` and referenced throughout `docs/MOBILE_UX_ARCHITECTURE.md`
 * -- previously untested by this suite despite "PWA offline tolerance"
 * being one of the platform's standing requirements. Everything else that
 * matches "offline" elsewhere in this suite is the *AI* offline fallback
 * (the rule-based agent used with no API key configured) -- an unrelated
 * feature that happens to share the word. This file is the first to
 * exercise the actual service worker.
 *
 * The service worker only registers when `NODE_ENV === "production"`
 * (`src/components/layout/register-sw.tsx`, deliberately disabled in dev to
 * avoid stale-chunk caching during development) -- which matches this
 * suite's target exactly, since `playwright.config.ts` runs a real
 * `next build && next start`, never `next dev`.
 */
test.describe("PWA offline behaviour", () => {
  test("the service worker registers and takes control of the page", async ({ browser }) => {
    const context = await browser.newContext({ storageState: DEMO_STORAGE_STATE });
    const page = await context.newPage();
    await page.goto("/en/home");

    // sw.js calls self.clients.claim() in its activate handler, so the very
    // page that triggered registration becomes controlled without needing a
    // reload -- confirm that actually happens rather than just that
    // register() resolved.
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null, undefined, {
      timeout: 15_000,
    });

    await context.close();
  });

  test("the manifest is linked and served", async ({ page }) => {
    await page.goto("/en/home");
    const manifestHref = await page.locator('link[rel="manifest"]').getAttribute("href");
    expect(manifestHref).toBe("/manifest.webmanifest");

    const res = await page.request.get("/manifest.webmanifest");
    expect(res.ok()).toBe(true);
    const manifest = await res.json();
    expect(manifest.display).toBe("standalone");
  });

  test("a previously visited page stays readable after going offline", async ({ browser }) => {
    const context = await browser.newContext({ storageState: DEMO_STORAGE_STATE });
    const page = await context.newPage();

    // The very first navigation to a page happens *before* the SW has
    // registered (registration itself only kicks off from a client effect
    // after hydration), so that first request is never intercepted by
    // sw.js's fetch handler and never lands in the PAGES cache. Reload once
    // more, still online, after confirming the SW is actually controlling
    // the page -- that second navigation is the one the fetch handler
    // intercepts and caches for offline re-reading.
    await page.goto("/en/home");
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null, undefined, {
      timeout: 15_000,
    });
    await page.reload();
    // cache.put() inside the fetch handler isn't awaited by the navigation
    // itself, so give it a moment to actually land before cutting the
    // network.
    await page.waitForTimeout(500);

    await context.setOffline(true);
    await page.reload();

    // Rendered from the sw.js PAGES cache, not the /offline fallback.
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("body")).not.toContainText("You’re offline");
    expect(page.url()).toContain("/en/home");

    await context.close();
  });

  test("a page never visited before falls back to the offline screen", async ({ browser }) => {
    const context = await browser.newContext({ storageState: DEMO_STORAGE_STATE });
    const page = await context.newPage();

    // Register the SW via one page (precaches /offline per sw.js's own
    // PRECACHE list -- see the file's `install` handler), but deliberately
    // never visit /en/progress while online, so it can't be in the PAGES
    // cache either.
    await page.goto("/en/home");
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null, undefined, {
      timeout: 15_000,
    });
    await page.waitForTimeout(500);

    await context.setOffline(true);
    await page.goto("/en/progress").catch(() => {
      // A hard navigation to an uncached URL while offline can itself reject
      // in some Chromium/Playwright combinations even though the SW's fetch
      // handler resolves the request -- the assertions below are the real
      // check, not this promise settling.
    });

    await expect(page.locator("body")).toContainText("You’re offline");
    await expect(page.locator("body")).toContainText(
      "Pages and units you’ve already opened are still available.",
    );

    await context.close();
  });
});
