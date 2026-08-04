"use client";

import { useEffect } from "react";

/**
 * Registers the service worker in production only. In development an active SW
 * caches stale chunks and produces confusing "why didn't my change appear"
 * sessions, so it stays off there.
 */
export function RegisterServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // A failed registration must never break the app — it only costs offline support.
      });
    };
    // This effect runs after hydration, which in a server-rendered Next.js
    // app is routinely *after* the browser's own `load` event has already
    // fired — so a plain `window.addEventListener("load", register)` here
    // silently never registers anything: the listener attaches too late for
    // an event that already happened. Register immediately when the
    // document is already fully loaded by the time this effect runs (the
    // common case), and only fall back to waiting for `load` on the rarer
    // path where hydration genuinely beats it.
    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);
  return null;
}
