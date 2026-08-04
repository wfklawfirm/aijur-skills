/**
 * Application-level CSRF guard, wired into `src/proxy.ts` (Next's
 * middleware) rather than into every individual Server Action.
 *
 * This app has no REST API — every mutation is a Server Action
 * (`docs/PRODUCT_ARCHITECTURE.md` §4) — and Next.js already checks the
 * `Origin` header against the deployment's host for Server Action
 * invocations specifically. That built-in check is real protection, but
 * it's framework-internal: nothing in this repo tests it, documents its
 * exact behavior, or would catch a regression if a future Next upgrade
 * changed it. This module is a second, independent, explicitly-tested
 * layer: every state-changing request this app's middleware sees (Server
 * Action fetches *and* the no-JS progressive-enhancement form-POST
 * fallback, which Next's own check does not cover the same way) must carry
 * an `Origin` header that matches the request's own origin, or it's
 * rejected before it ever reaches a Server Action.
 *
 * Deliberately strict: a POST with a missing or mismatched `Origin` is
 * blocked outright rather than logged-and-allowed. Modern browsers send
 * `Origin` on every "unsafe" method request (POST/PUT/PATCH/DELETE),
 * same-origin or not, so a legitimate browser-originated form submission or
 * Server Action call always has one to check.
 */

export const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

export function isSameOriginRequest(originHeader: string | null, expectedOrigin: string): boolean {
  if (!originHeader) return false;
  try {
    return new URL(originHeader).origin === expectedOrigin;
  } catch {
    return false;
  }
}
