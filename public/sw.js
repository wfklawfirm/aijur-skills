/**
 * AIJUR service worker.
 *
 * Deliberately conservative. Two rules:
 *
 *  1. **Never cache an API response.** Progress, mastery and evaluations are
 *     the record of a learner's performance; serving a stale one is worse than
 *     showing an error. Mutations queue in IndexedDB on the client instead.
 *  2. **Do cache the shell and content pages** so a unit already opened stays
 *     readable in a lift, on a train, or on a bad connection — which is where
 *     a lot of this training will actually happen.
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
