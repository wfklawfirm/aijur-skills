import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Single source of truth for the native shell's identity and behavior --
 * propagated to both `android/` and `ios/` via `npx cap sync`. See
 * `docs/MOBILE_APP_ARCHITECTURE.md` for the full "why Capacitor, why a live
 * server instead of a static export" reasoning.
 *
 * App ID is fixed and centralized here -- verified against this project's
 * actual (empty, pre-mobile) state: no existing package/bundle identifier
 * to preserve, so `com.aijur.skills` is a fresh, deliberate choice, not a
 * guess at something pre-existing.
 */
const APP_ID = "com.aijur.skills";
const APP_NAME = "AIJUR Skills";

/**
 * The real, live production origin the WebView loads. Required, never
 * hardcoded or guessed -- an unset value fails loud instead of silently
 * pointing the app at nothing (or, worse, a placeholder that looks real).
 */
const SERVER_URL = process.env.MOBILE_APP_SERVER_URL || "";
if (!SERVER_URL) {
  console.warn(
    "[capacitor.config] MOBILE_APP_SERVER_URL is not set -- `npx cap sync` " +
      "will produce a native shell with no server to load. Set it to your " +
      "real, confirmed-healthy production origin before building for a " +
      "device or store submission.",
  );
}

const ALLOW_CLEARTEXT = process.env.MOBILE_APP_ALLOW_CLEARTEXT === "true";

const config: CapacitorConfig = {
  appId: APP_ID,
  appName: APP_NAME,
  webDir: "public",
  server: {
    url: SERVER_URL || undefined,
    cleartext: ALLOW_CLEARTEXT,
    androidScheme: "https",
    iosScheme: "https",
    // Only the configured server's own hostname -- every other link is
    // intercepted and routed through `src/lib/platform/links.ts`'s
    // classifier (system browser / in-app browser tab / mailto / tel),
    // never left to navigate the main WebView to an arbitrary domain.
    allowNavigation: SERVER_URL ? [new URL(SERVER_URL).hostname] : [],
  },
  ios: {
    contentInset: "always",
    scrollEnabled: true,
  },
  android: {
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: "#7a1832",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    },
    StatusBar: {
      overlaysWebView: false,
      style: "DARK",
      backgroundColor: "#ffffff",
    },
    Keyboard: {
      resize: "body",
      resizeOnFullScreen: true,
    },
  },
};

export default config;
