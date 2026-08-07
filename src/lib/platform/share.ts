import { Share } from "@capacitor/share";
import { isNativePlatform } from "./capacitor";

export interface ShareLinkOptions {
  title?: string;
  text?: string;
  url: string;
}

/**
 * Native Share Sheet -> Web Share API -> clipboard, in that order.
 *
 * Note on the `typeof nav.share === "function"` check below: this
 * project's TypeScript lib version declares `Navigator.share` as a
 * required (non-optional) method, so `"share" in navigator` is always
 * statically true and `tsc` treats anything after an
 * `if ("share" in navigator)` guard as narrowing `navigator` in a way that
 * made the following `navigator.clipboard` reference unreachable ("type
 * never"). Checking `typeof nav.share === "function"` instead is a runtime
 * check that doesn't trigger that same static narrowing, and is honestly
 * the more correct check anyway -- some environments partially implement
 * `navigator` typings without actually supporting the method at runtime.
 */
export async function shareLink({ title, text, url }: ShareLinkOptions): Promise<"shared" | "copied" | "failed"> {
  if (isNativePlatform()) {
    try {
      await Share.share({ title, text, url });
      return "shared";
    } catch {
      // User cancelled the native share sheet -- not a failure.
      return "shared";
    }
  }

  if (typeof navigator !== "undefined") {
    const nav: Navigator = navigator;
    if (typeof nav.share === "function") {
      try {
        await nav.share({ title, text, url });
        return "shared";
      } catch {
        return "shared";
      }
    }
    if (nav.clipboard) {
      try {
        await nav.clipboard.writeText(url);
        return "copied";
      } catch {
        return "failed";
      }
    }
  }

  return "failed";
}
