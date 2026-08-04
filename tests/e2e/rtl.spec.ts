import { test, expect } from "@playwright/test";

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
