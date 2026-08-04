import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { AuthError, type SessionUser } from "@/lib/auth/session";
import { uid } from "@/lib/utils";
import {
  getReviewGateStatusCore,
  listPendingIngestionCore,
  listQueuedEvaluationsCore,
  listSourcesCore,
} from "@/lib/actions/admin-core";

/**
 * Regression test for a real access-control gap: every read function in
 * `admin.ts` used to have NO permission check of its own, and the layout
 * gate that was supposed to protect `/admin/*` checked `content.read` —
 * a permission every signed-in user holds, including a plain learner (see
 * `src/lib/auth/rbac.ts`'s `SYSTEM_ROLE_PERMISSIONS.learner`). That meant
 * any authenticated learner could reach `/admin/review-queue` (or call
 * `listQueuedEvaluations()` directly, since a `"use server"` export is an
 * independently callable RPC endpoint, not just page-rendered data) and see
 * every learner's queued AI evaluations, the raw ingestion queue, and the
 * source library.
 *
 * `admin-core.ts` was split out of `admin.ts` (mirroring `org-core.ts`/
 * `teams-core.ts`) specifically so this is testable outside a live Next.js
 * request: these functions take the resolved `SessionUser` as a parameter,
 * the same object `requireUser()` would have resolved from a real session,
 * and run the exact `require_()` check `admin.ts`'s "use server" wrappers
 * rely on.
 */

function learner(): SessionUser {
  return {
    id: uid("testuser"),
    email: "learner@test.invalid",
    name: "Test Learner",
    locale: "en",
    systemRole: "learner",
    sessionId: "test-session",
    organization: null,
  };
}

function author(): SessionUser {
  return {
    id: uid("testuser"),
    email: "author@test.invalid",
    name: "Test Author",
    locale: "en",
    systemRole: "author",
    sessionId: "test-session",
    organization: null,
  };
}

function reviewer(): SessionUser {
  return {
    id: uid("testuser"),
    email: "reviewer@test.invalid",
    name: "Test Reviewer",
    locale: "en",
    systemRole: "reviewer",
    sessionId: "test-session",
    organization: null,
  };
}

describe("Content Studio read functions reject callers without content.author", () => {
  test("a plain learner cannot list the review-gate status of any entity", async () => {
    await assert.rejects(() => getReviewGateStatusCore(learner(), "skill", "skill.does-not-matter"), AuthError);
  });

  test("a plain learner cannot list the pending ingestion queue", async () => {
    await assert.rejects(() => listPendingIngestionCore(learner()), AuthError);
  });

  test("a plain learner cannot list the source library", async () => {
    await assert.rejects(() => listSourcesCore(learner()), AuthError);
  });

  test("a plain learner cannot list queued evaluations (other learners' scored work)", async () => {
    await assert.rejects(() => listQueuedEvaluationsCore(learner()), AuthError);
  });

  test("a content author CAN list the review-gate status, ingestion queue, and source library", async () => {
    const u = author();
    await assert.doesNotReject(() => getReviewGateStatusCore(u, "skill", "skill.does-not-matter"));
    await assert.doesNotReject(() => listPendingIngestionCore(u));
    await assert.doesNotReject(() => listSourcesCore(u));
  });
});

describe("Queued evaluations require evaluation.review specifically, not just content.author", () => {
  test("a content author with no reviewer role still cannot list queued evaluations", async () => {
    // Scored learner work is more sensitive than draft content -- see the
    // file comment on listQueuedEvaluationsCore in admin-core.ts. An author
    // can write and see unpublished content, but that alone must not also
    // expose other learners' rubric scores.
    await assert.rejects(() => listQueuedEvaluationsCore(author()), AuthError);
  });

  test("a reviewer CAN list queued evaluations", async () => {
    await assert.doesNotReject(() => listQueuedEvaluationsCore(reviewer()));
  });
});
