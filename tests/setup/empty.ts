// Test-only stand-in for the `server-only` / `client-only` marker packages.
//
// Those packages intentionally throw when imported outside their intended
// bundling context (see their `exports` map — they resolve to a no-op only
// under the "react-server" condition that Next.js's own bundler sets). Our
// test runner is plain Node via tsx, not Next's bundler, so `tests/tsconfig.json`
// redirects both specifiers here for test runs only. This file is never
// consulted by `tsc --noEmit` at the project root or by `next build` — both
// resolve "server-only" to the real package, so the actual safety guard
// (never let server-only code end up in a client bundle) is unaffected.
export {};
