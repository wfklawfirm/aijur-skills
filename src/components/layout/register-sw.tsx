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
    const onLoad = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // A failed registration must never break the app — it only costs offline support.
      });
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return null;
}
