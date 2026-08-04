import { test, expect } from "@playwright/test";
import { DEMO_STORAGE_STATE } from "./global-setup";

/**
 * This platform is Arabic-first: the Arabic locale is the default and must
 * render right-to-left throughout, while English renders left-to-right.
 * This is a layout-direction sanity check, not a full visual-regression
 * suite (no committed screenshot baselines exist yet -- see
 * docs/PRODUCT_AUDIT.md's known-risks section) -- it verifies the mechanism
 * `src/app/(app)/[locale]/layout.tsx` relies on (`dir={meta.dir}` on
 * `<html>`, driven by `LOCALE_META`) actually reaches the rendered DOM for
 * both locales, on both an unauthenticated page and a real content page.
 */
test.describe("RTL / LTR layout direction", () => {
  test("the Arabic locale renders right-to-left", async ({ page }) => {
    await page.goto("/ar/sign-in");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  });

  test("the English locale renders left-to-right", async ({ page }) => {
    await page.goto("/en/sign-in");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("root path with no locale resolves to a locale with a matching dir", async ({ page }) => {
    await page.goto("/");
    const dir = await page.locator("html").getAttribute("dir");
    expect(["rtl", "ltr"]).toContain(dir);
    const url = page.url();
    if (dir === "rtl") {
      expect(url).toMatch(/\/ar(\/|$)/);
    } else {
      expect(url).toMatch(/\/en(\/|$)/);
    }
  });
});

/**
 * The global language switcher (`components/layout/language-switcher.tsx`)
 * -- appears on every `AppHeader`-based page (via `AppHeader` itself) and
 * every standalone pre-auth page (landing, sign-in/up, forgot/reset
 * password, verify-email, onboarding, the diagnostic intro). Two things
 * matter beyond "the button exists": clicking it does a real navigation to
 * the equivalent URL in the other locale (not a client-only string swap, so
 * `<html dir/lang>` stays server-derived and correct), and it persists the
 * choice to `aijur_locale` so `src/proxy.ts`'s cookie-preference branch --
 * previously unreachable dead code, since nothing ever wrote that cookie --
 * actually takes effect on a later locale-less visit.
 */
test.describe("Global language switcher", () => {
  test("clicking it on the landing page navigates to the equivalent English URL and flips dir", async ({
    page,
  }) => {
    await page.goto("/ar");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");

    await page.getByRole("button", { name: /Switch to|التبديل إلى/ }).click();

    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  });

  test("the choice persists via a cookie honoured on a later locale-less visit", async ({ page }) => {
    await page.goto("/en/sign-in");
    await page.getByRole("button", { name: /Switch to|التبديل إلى/ }).click();
    await expect(page).toHaveURL(/\/ar\/sign-in$/);

    const cookies = await page.context().cookies();
    const localeCookie = cookies.find((c) => c.name === "aijur_locale");
    expect(localeCookie?.value).toBe("ar");

    // A fresh locale-less visit (a new tab, a bookmarked root) should now
    // honour the cookie instead of falling back to Accept-Language/Arabic.
    await page.goto("/");
    await expect(page).toHaveURL(/\/ar(\/|$)/);
  });

  test.describe("on an authenticated page", () => {
    test.use({ storageState: DEMO_STORAGE_STATE });

    test("appears on an authenticated AppHeader page too (Home), not just pre-auth screens", async ({
      page,
    }) => {
      await page.goto("/en/home");
      await expect(page.getByRole("button", { name: /Switch to/i })).toBeVisible();
    });
  });
});
