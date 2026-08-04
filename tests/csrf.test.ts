import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isSameOriginRequest, MUTATING_METHODS } from "@/lib/auth/csrf";

/**
 * Unit tests for the application-level CSRF guard wired into
 * `src/proxy.ts`. `isSameOriginRequest()` is a pure function specifically
 * so it's testable without spinning up Next's middleware runtime — see the
 * doc comment on `src/lib/auth/csrf.ts` for why this exists alongside
 * Next's own built-in Server Action Origin check.
 */

describe("isSameOriginRequest", () => {
  const APP_ORIGIN = "https://app.aijur.ai";

  test("a matching Origin header is accepted", () => {
    assert.equal(isSameOriginRequest("https://app.aijur.ai", APP_ORIGIN), true);
  });

  test("a null Origin header (missing) is rejected", () => {
    assert.equal(isSameOriginRequest(null, APP_ORIGIN), false);
  });

  test("a cross-origin Origin header is rejected", () => {
    assert.equal(isSameOriginRequest("https://evil.example", APP_ORIGIN), false);
  });

  test("a different scheme on the same host is rejected", () => {
    assert.equal(isSameOriginRequest("http://app.aijur.ai", APP_ORIGIN), false);
  });

  test("a different port on the same host is rejected", () => {
    assert.equal(isSameOriginRequest("https://app.aijur.ai:8443", APP_ORIGIN), false);
  });

  test("a subdomain of the same site is still a different origin, and is rejected", () => {
    assert.equal(isSameOriginRequest("https://evil.app.aijur.ai", APP_ORIGIN), false);
  });

  test("a malformed Origin header doesn't throw and is rejected", () => {
    assert.equal(isSameOriginRequest("not-a-url", APP_ORIGIN), false);
  });

  test("localhost dev origin matches localhost dev origin", () => {
    assert.equal(isSameOriginRequest("http://localhost:3000", "http://localhost:3000"), true);
  });
});

describe("MUTATING_METHODS", () => {
  test("covers the standard state-changing HTTP methods", () => {
    assert.equal(MUTATING_METHODS.has("POST"), true);
    assert.equal(MUTATING_METHODS.has("PUT"), true);
    assert.equal(MUTATING_METHODS.has("PATCH"), true);
    assert.equal(MUTATING_METHODS.has("DELETE"), true);
  });

  test("does not treat safe methods as mutating", () => {
    assert.equal(MUTATING_METHODS.has("GET"), false);
    assert.equal(MUTATING_METHODS.has("HEAD"), false);
    assert.equal(MUTATING_METHODS.has("OPTIONS"), false);
  });
});
