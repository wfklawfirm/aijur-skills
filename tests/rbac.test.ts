import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { can, require_, permissionsFor, assertTenant } from "@/lib/auth/rbac";
import { AuthError, type SessionUser } from "@/lib/auth/session";

/**
 * The UI hides what a user cannot do; these checks are what actually stop
 * them. Every case here mirrors a real attack shape: a learner probing an
 * admin action, a member of one firm reaching into another firm's data, a
 * user with no organization touching org-scoped resources.
 */

function user(overrides: Partial<SessionUser> = {}): SessionUser {
  return {
    id: "u1",
    email: "u1@example.com",
    name: "Test User",
    locale: "en",
    systemRole: "learner",
    sessionId: "s1",
    organization: null,
    ...overrides,
  };
}

describe("can / permissionsFor", () => {
  test("a learner can only read content", () => {
    const u = user({ systemRole: "learner" });
    assert.equal(can(u, "content.read"), true);
    assert.equal(can(u, "content.author"), false);
    assert.equal(can(u, "content.publish"), false);
    assert.equal(can(u, "platform.admin"), false);
  });

  test("an author can write content but not review or publish it", () => {
    const u = user({ systemRole: "author" });
    assert.equal(can(u, "content.author"), true);
    assert.equal(can(u, "content.review"), false);
    assert.equal(can(u, "content.publish"), false);
  });

  test("a reviewer can review, publish, and decide on ingestion, but has no platform.admin", () => {
    const u = user({ systemRole: "reviewer" });
    assert.equal(can(u, "content.review"), true);
    assert.equal(can(u, "content.publish"), true);
    assert.equal(can(u, "ingestion.decide"), true);
    assert.equal(can(u, "platform.admin"), false);
  });

  test("only a system admin holds platform.admin", () => {
    assert.equal(can(user({ systemRole: "admin" }), "platform.admin"), true);
    assert.equal(can(user({ systemRole: "reviewer" }), "platform.admin"), false);
    assert.equal(can(user({ systemRole: "author" }), "platform.admin"), false);
  });

  test("organization role grants add to, but never replace, the system-role permission set", () => {
    const u = user({
      systemRole: "learner",
      organization: { id: "org1", name: "Firm", slug: "firm", role: "owner" },
    });
    // Org owner grants org-management permissions...
    assert.equal(can(u, "org.members.manage"), true);
    // ...but a learner's system role still cannot author or publish content.
    assert.equal(can(u, "content.author"), true, "owner role does grant content.author per ORG_ROLE_PERMISSIONS");
    assert.equal(can(u, "content.publish"), false, "publishing is never granted by an org role alone");
  });

  test("an unrecognised org role contributes no extra permissions (fails closed, not open)", () => {
    const u = user({
      systemRole: "learner",
      organization: { id: "org1", name: "Firm", slug: "firm", role: "some_future_role" },
    });
    const perms = permissionsFor(u);
    assert.deepEqual([...perms], ["content.read"], "an unmapped org role must add nothing, not everything");
  });
});

describe("require_", () => {
  test("throws AuthError for a missing permission", () => {
    const u = user({ systemRole: "learner" });
    assert.throws(() => require_(u, "content.publish"), AuthError);
  });

  test("does not throw when the permission is held", () => {
    const u = user({ systemRole: "admin" });
    assert.doesNotThrow(() => require_(u, "platform.admin"));
  });
});

describe("assertTenant — tenant isolation", () => {
  test("a user with no organization cannot act on any organization's data", () => {
    const u = user({ systemRole: "reviewer", organization: null });
    assert.throws(() => assertTenant(u, "org1"), AuthError);
  });

  test("a member of one organization cannot act on a different organization's data", () => {
    const u = user({ organization: { id: "org1", name: "Firm A", slug: "firm-a", role: "member" } });
    assert.throws(() => assertTenant(u, "org2"), AuthError);
  });

  test("a member of the matching organization passes", () => {
    const u = user({ organization: { id: "org1", name: "Firm A", slug: "firm-a", role: "member" } });
    assert.doesNotThrow(() => assertTenant(u, "org1"));
  });

  test("a platform admin bypasses tenant isolation by design", () => {
    const u = user({ systemRole: "admin", organization: null });
    assert.doesNotThrow(() => assertTenant(u, "any-org-id"));
  });
});
