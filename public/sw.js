/**
 * AIJUR service worker.
 *
 * Deliberately conservative. Two rules:
 *
 *  1. **Never cache an API response.** Progress, mastery and evaluations are
 *     the record of a learner's performance; serving a stale one is worse than
 *     showing an error. A mutation attempted offline simply fails visibly
 *     (the existing `OfflineBanner` — `useOnline()`, `app-shell.tsx` — warns
 *     before that happens) rather than silently disappearing.
 *  2. **Do cache the shell and content pages** so a unit already opened stays
 *     readable in a lift, on a train, or on a bad connection — which is where
 *     a lot of this training will actually happen.
 *
 * Deliberately NOT implemented: queueing a failed mutation (in IndexedDB or
 * otherwise) for automatic replay once back online. Every mutation in this
 * app is a Next.js Server Action — a POST straight to the current page route,
 * not a REST endpoint — and most of them (`submitActivity`'s AI-grading
 * branch, `startSimulation`, `sendSimulationMessage`) need a live AI provider
 * round trip; there is nothing meaningful to queue and replay for those.
 * Blindly queueing and replaying arbitrary POSTs later would also fight this
 * app's own safety rails: rate limiting is keyed to a real-time window
 * (`checkRateLimit()`), the CSRF Origin guard expects a live same-origin
 * request, and a stale session cookie could silently fail hours later with
 * no learner watching. If offline-write support is ever built, it needs a
 * deliberate design pass over which specific mutations are safe to queue at
 * all -- not a generic bolt-on to every Server Action.
 */
const VERSION = "aijur-v1";
const SHELL = `${VERSION}-shell`;
const PAGES = `${VERSION}-pages`;

const PRECACHE = ["/offline", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(PAGES).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) ?? (await caches.match("/offline"))),
    );
    return;
  }

  if (url.pathname.startsWith("/_next/static") || url.pathname.startsWith("/icons/")) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ??
          fetch(request).then((response) => {
            const copy = response.clone();
            caches.open(SHELL).then((cache) => cache.put(request, copy));
            return response;
          }),
      ),
    );
  }
});
