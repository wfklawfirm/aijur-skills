"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { App as CapacitorApp, type URLOpenListenerEvent } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
import { useI18n } from "@/components/providers";
import { isNativePlatform } from "@/lib/platform/capacitor";
import { resolveDeepLinkUrl } from "@/lib/platform/deep-links";
import { setupPushListeners } from "@/lib/platform/push";

/**
 * Mounted once (`[locale]/layout.tsx`). No-ops entirely on web. Owns every
 * native-shell-level concern that isn't naturally scoped to one screen:
 *
 *  - Status bar style/color, hiding the splash screen once React has
 *    actually painted (not on a fixed timer -- `launchShowDuration: 0` in
 *    capacitor.config.ts hands control here).
 *  - Android hardware back button: navigates the WebView's own history when
 *    possible (`canGoBack`), otherwise -- only on the Home screen -- a
 *    double-press-within-2s pattern before actually exiting the app, with
 *    a brief on-screen hint so the first press doesn't feel broken.
 *  - `appUrlOpen` (Universal Links / App Links tapped from outside the
 *    app) -> resolved through the same `resolveDeepLinkUrl()` push
 *    notifications use.
 *  - Push notification listeners (registration, tap-to-navigate).
 */
export function NativeInit() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, dict } = useI18n();
  const [showExitHint, setShowExitHint] = React.useState(false);
  const lastBackPressRef = React.useRef(0);

  React.useEffect(() => {
    if (!isNativePlatform()) return;

    void StatusBar.setStyle({ style: Style.Dark });
    void StatusBar.setBackgroundColor({ color: "#ffffff" });
    void SplashScreen.hide();

    setupPushListeners((href) => router.push(href), locale);

    let backListenerCleanup: (() => void) | undefined;
    void CapacitorApp.addListener("backButton", (ev) => {
      if (ev.canGoBack) {
        window.history.back();
        return;
      }
      const isHome = /^\/(ar|en)\/home\/?$/.test(pathname);
      if (!isHome) {
        router.push(`/${locale}/home`);
        return;
      }
      const now = Date.now();
      if (now - lastBackPressRef.current < 2000) {
        void CapacitorApp.exitApp();
        return;
      }
      lastBackPressRef.current = now;
      setShowExitHint(true);
      setTimeout(() => setShowExitHint(false), 2000);
    }).then((handle) => {
      backListenerCleanup = () => void handle.remove();
    });

    let urlOpenCleanup: (() => void) | undefined;
    void CapacitorApp.addListener("appUrlOpen", (event: URLOpenListenerEvent) => {
      router.push(resolveDeepLinkUrl(event.url, locale));
    }).then((handle) => {
      urlOpenCleanup = () => void handle.remove();
    });

    return () => {
      backListenerCleanup?.();
      urlOpenCleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- router/pathname change every navigation; listeners are set up once per mount and read the latest via refs where it matters (lastBackPressRef).
  }, []);

  if (!showExitHint) return null;
  return (
    <div
      role="status"
      className="fixed inset-x-0 bottom-24 z-50 mx-auto w-fit rounded-full bg-[var(--foreground)] px-4 py-2 text-sm text-[var(--background)] shadow-lg safe-bottom"
    >
      {dict.mobile.pressBackAgainToExit}
    </div>
  );
}
