import { test, describe, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { eq, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  adminNotes,
  auditLog,
  masteryRecords,
  passwordResetTokens,
  profiles,
  sessions,
  subscriptionEvents,
  subscriptionPlans,
  subscriptions,
  users,
} from "@/lib/db/schema";
import { AuthError, type SessionUser } from "@/lib/auth/session";
import {
  addAdminNoteCore,
  bulkActionCore,
  changePlanCore,
  createPlanCore,
  createSubscriberCore,
  getSubscriberDetailCore,
  listAuditLogCore,
  listSubscribersCore,
  reactivateSubscriptionCore,
  setPlatformRoleCore,
  suspendAccountCore,
  suspendSubscriptionCore,
  updateSubscriptionPeriodCore,
} from "@/lib/actions/subscribers-core";
import { canAccessFeature } from "@/lib/subscriptions/access";
import { uid } from "@/lib/utils";

/**
 * Integration coverage for the Admin Dashboard's real security boundary
 * (`subscribers-core.ts`), against the real dev DB — same style as
 * `tests/platform-accounts.test.ts`. Directly exercises several of the
 * spec's §20 acceptance scenarios (numbered in comments below) at the layer
 * that actually enforces them, plus the Admin/Super-Admin protection rules
 * from §1/§11/§16 that have no equivalent in the pre-existing test suite.
 */

const RUN_ID = uid("t");
const SUPER_ID = `${RUN_ID}_super`;
const ADMIN_ID = `${RUN_ID}_admin`;
const LEARNER_ID = `${RUN_ID}_learner`;
const OTHER_SUPER_ID = `${RUN_ID}_super2`;

function sessionFor(id: string, platformRole: "super_admin" | "admin" | "support" | null): SessionUser {
  return {
    id,
    email: `${id}@test.invalid`,
    name: "Test User",
    locale: "en",
    systemRole: "learner",
    platformRole,
    sessionId: "test-session",
    organization: null,
  };
}

const superAdmin = () => sessionFor(SUPER_ID, "super_admin");
const admin = () => sessionFor(ADMIN_ID, "admin");
const learner = () => sessionFor(LEARNER_ID, null);

/** "YYYY-MM-DD" for the current UTC date — subscriptions in these tests must
 *  start "now", not at a hardcoded date that drifts into the past relative
 *  to whenever the suite actually runs. */
function today(): string {
  return new Date().toISOString().slice(0, 10);
}

let createdUserIds: string[] = [];
let createdPlanIds: string[] = [];

async function cleanup() {
  const ids = [SUPER_ID, ADMIN_ID, LEARNER_ID, OTHER_SUPER_ID, ...createdUserIds];
  for (const id of ids) {
    await db.delete(passwordResetTokens).where(eq(passwordResetTokens.userId, id));
    await db.delete(sessions).where(eq(sessions.userId, id));
    await db.delete(adminNotes).where(eq(adminNotes.userId, id));
    await db.delete(adminNotes).where(eq(adminNotes.authorUserId, id));
    const subs = await db.select({ id: subscriptions.id }).from(subscriptions).where(eq(subscriptions.userId, id));
    for (const s of subs) await db.delete(subscriptionEvents).where(eq(subscriptionEvents.subscriptionId, s.id));
    await db.delete(subscriptions).where(eq(subscriptions.userId, id));
    await db.delete(masteryRecords).where(eq(masteryRecords.userId, id));
    await db.delete(profiles).where(eq(profiles.userId, id));
    await db.delete(auditLog).where(eq(auditLog.actorId, id));
    await db.delete(users).where(eq(users.id, id));
  }
  if (createdPlanIds.length) await db.delete(subscriptionPlans).where(inArray(subscriptionPlans.id, createdPlanIds));
  createdUserIds = [];
  createdPlanIds = [];
}

beforeEach(async () => {
  await cleanup();
  const now = Date.now();
  await db.insert(users).values([
    { id: SUPER_ID, email: `${SUPER_ID}@test.invalid`, passwordHash: "x", name: "Super Admin", platformRole: "super_admin" },
    { id: ADMIN_ID, email: `${ADMIN_ID}@test.invalid`, passwordHash: "x", name: "Regular Admin", platformRole: "admin" },
    { id: LEARNER_ID, email: `${LEARNER_ID}@test.invalid`, passwordHash: "x", name: "Learner" },
  ]);
  void now;
});

after(cleanup);

describe("permission boundary", () => {
  test("scenario 1/2: a plain learner cannot list subscribers; an admin can", async () => {
    await assert.rejects(() => listSubscribersCore(learner(), {}), AuthError);
    const result = await listSubscribersCore(admin(), {});
    assert.ok(Array.isArray(result.items));
  });
});

describe("createSubscriberCore", () => {
  test("scenario 3: creates a real account + subscription, no plaintext password anywhere in the result", async () => {
    const email = `${uid("new")}@test.invalid`;
    const result = await createSubscriberCore(admin(), {
      email,
      name: "New Subscriber",
      duration: { mode: "preset", preset: "30d" },
      startDateStr: today(),
    });
    createdUserIds.push(result.userId);

    assert.ok(result.userId);
    assert.ok(result.resetToken);
    assert.ok(!("password" in result) && !("passwordHash" in result));

    const row = (await db.select().from(users).where(eq(users.id, result.userId)))[0];
    assert.equal(row?.email, email);
    assert.equal(row?.accountStatus, "active");

    const sub = (await db.select().from(subscriptions).where(eq(subscriptions.userId, result.userId)))[0];
    assert.equal(sub?.status, "active");
    assert.ok(sub?.currentPeriodEnd !== null);
  });

  test("scenario 4: a duplicate email does not create a second account", async () => {
    const email = `${uid("dup")}@test.invalid`;
    const first = await createSubscriberCore(admin(), {
      email,
      name: "First",
      duration: { mode: "preset", preset: "30d" },
      startDateStr: today(),
    });
    createdUserIds.push(first.userId);

    await assert.rejects(
      () =>
        createSubscriberCore(admin(), {
          email,
          name: "Second",
          duration: { mode: "preset", preset: "30d" },
          startDateStr: today(),
        }),
      /email_taken/,
    );

    const rows = await db.select({ id: users.id }).from(users).where(eq(users.email, email));
    assert.equal(rows.length, 1);
  });

  test("lifetime preset creates a subscription with no end date and immediate access", async () => {
    const result = await createSubscriberCore(admin(), {
      email: `${uid("life")}@test.invalid`,
      name: "Lifetime User",
      duration: { mode: "preset", preset: "lifetime" },
      startDateStr: today(),
    });
    createdUserIds.push(result.userId);
    const detail = await getSubscriberDetailCore(admin(), result.userId);
    assert.equal(detail.subscription?.status, "lifetime");
    assert.equal(detail.subscription?.endAt, null);
    assert.equal(detail.subscription?.canAccessContent, true);
  });
});

describe("subscription lifecycle", () => {
  async function makeSubscriber(preset: "30d" | "7d" = "30d") {
    const result = await createSubscriberCore(admin(), {
      email: `${uid("sub")}@test.invalid`,
      name: "Subject",
      duration: { mode: "preset", preset },
      startDateStr: today(),
    });
    createdUserIds.push(result.userId);
    return result;
  }

  test("scenario 9/10: suspending blocks access immediately; reactivating restores it", async () => {
    const { userId, subscriptionId } = await makeSubscriber();
    let detail = await getSubscriberDetailCore(admin(), userId);
    assert.equal(detail.subscription?.canAccessContent, true);

    await suspendSubscriptionCore(admin(), subscriptionId, "non-payment");
    detail = await getSubscriberDetailCore(admin(), userId);
    assert.equal(detail.subscription?.canAccessContent, false);
    assert.equal(detail.subscription?.displayStatus, "suspended");

    await reactivateSubscriptionCore(admin(), subscriptionId, "payment received");
    detail = await getSubscriberDetailCore(admin(), userId);
    assert.equal(detail.subscription?.canAccessContent, true);
  });

  test("suspending requires a reason", async () => {
    const { subscriptionId } = await makeSubscriber();
    await assert.rejects(() => suspendSubscriptionCore(admin(), subscriptionId, ""), /reason_required/);
  });

  test("scenario 8: extending an expired subscription restores access and preserves prior progress", async () => {
    const { userId, subscriptionId } = await makeSubscriber("7d");
    // Force it into the past so it reads as expired.
    await db.update(subscriptions).set({ currentPeriodEnd: Date.UTC(2020, 0, 1), status: "expired" }).where(eq(subscriptions.id, subscriptionId));
    await db.insert(masteryRecords).values({ id: uid("mastery"), userId, skillId: "skill.test", level: 3 });

    let detail = await getSubscriberDetailCore(admin(), userId);
    assert.equal(detail.subscription?.canAccessContent, false);

    await updateSubscriptionPeriodCore(admin(), subscriptionId, { mode: "add", amount: 30, unit: "days", from: "today", reason: "renewal payment" });

    detail = await getSubscriberDetailCore(admin(), userId);
    assert.equal(detail.subscription?.canAccessContent, true);

    const progress = await db.select().from(masteryRecords).where(eq(masteryRecords.userId, userId));
    assert.equal(progress.length, 1);
    assert.equal(progress[0]?.level, 3);
  });

  test("extending never allows an end date before the start date", async () => {
    const { subscriptionId } = await makeSubscriber();
    await assert.rejects(
      () => updateSubscriptionPeriodCore(admin(), subscriptionId, { mode: "set", newEndDateStr: "2025-01-01", reason: "test" }),
      /end_before_start/,
    );
  });

  test("scenario 12: changing the plan changes feature entitlements", async () => {
    const { userId, subscriptionId } = await makeSubscriber();
    const planId = await createPlanCore(superAdmin(), {
      name: `Premium ${uid("plan")}`,
      features: { legalEnglish: true, certificates: true },
    });
    createdPlanIds.push(planId);

    let detail = await getSubscriberDetailCore(admin(), userId);
    assert.equal(detail.subscription?.planId, null);

    await changePlanCore(admin(), subscriptionId, planId, "upgraded");
    detail = await getSubscriberDetailCore(admin(), userId);
    assert.equal(detail.subscription?.planId, planId);

    const sub = (await db.select().from(subscriptions).where(eq(subscriptions.id, subscriptionId)))[0]!;
    const plan = (await db.select().from(subscriptionPlans).where(eq(subscriptionPlans.id, planId)))[0]!;
    assert.equal(canAccessFeature(sub, plan.features, "legalEnglish"), true);
    assert.equal(canAccessFeature(sub, plan.features, "aiFeatures"), false);
  });

  test("scenario 13: subscription mutations are recorded in the audit log", async () => {
    const { subscriptionId } = await makeSubscriber();
    await suspendSubscriptionCore(admin(), subscriptionId, "test reason");
    await new Promise((r) => setTimeout(r, 60)); // logAdminAction is fire-and-forget, same pattern as tests/audit-log.test.ts
    const { items } = await listAuditLogCore(superAdmin(), { entityType: "subscription" });
    assert.ok(items.some((i) => i.action === "subscriptions.suspended" && i.entityId === subscriptionId));
  });
});

describe("admin-note history", () => {
  test("a note is attributed to its author and shown on the subscriber detail page", async () => {
    const result = await createSubscriberCore(admin(), {
      email: `${uid("note")}@test.invalid`,
      name: "Noted User",
      duration: { mode: "preset", preset: "30d" },
      startDateStr: today(),
    });
    createdUserIds.push(result.userId);
    await addAdminNoteCore(admin(), result.userId, "Called about renewal.");
    const detail = await getSubscriberDetailCore(admin(), result.userId);
    assert.equal(detail.notes.length, 1);
    assert.equal(detail.notes[0]?.body, "Called about renewal.");
    assert.equal(detail.notes[0]?.authorName, "Regular Admin");
  });
});

describe("Admin cannot touch a Super Admin (spec §1)", () => {
  test("a regular Admin cannot suspend a Super Admin's account", async () => {
    await assert.rejects(() => suspendAccountCore(admin(), SUPER_ID, "trying to lock out the owner"), AuthError);
  });

  test("a regular Admin cannot change platform roles at all (requires admins.manage)", async () => {
    await assert.rejects(() => setPlatformRoleCore(admin(), LEARNER_ID, "admin"), AuthError);
  });
});

describe("last-Super-Admin protection (spec §16)", () => {
  test("demoting the only Super Admin is blocked", async () => {
    await assert.rejects(() => setPlatformRoleCore(superAdmin(), SUPER_ID, "admin"), /last_super_admin/);
  });

  test("demoting a Super Admin is allowed when another active Super Admin exists", async () => {
    await db.insert(users).values({ id: OTHER_SUPER_ID, email: `${OTHER_SUPER_ID}@test.invalid`, passwordHash: "x", name: "Other Super", platformRole: "super_admin" });
    await setPlatformRoleCore(superAdmin(), SUPER_ID, "admin");
    const row = (await db.select({ platformRole: users.platformRole }).from(users).where(eq(users.id, SUPER_ID)))[0];
    assert.equal(row?.platformRole, "admin");
    // restore for cleanup symmetry
    await db.update(users).set({ platformRole: "super_admin" }).where(eq(users.id, SUPER_ID));
  });
});

describe("bulk actions (spec §11)", () => {
  test("a Super Admin target is always skipped, even when the actor is a Super Admin", async () => {
    const a = await createSubscriberCore(admin(), { email: `${uid("bulk")}@test.invalid`, name: "Bulk A", duration: { mode: "preset", preset: "30d" }, startDateStr: today() });
    createdUserIds.push(a.userId);
    const result = await bulkActionCore(superAdmin(), [a.userId, SUPER_ID], "extend", { amount: 30, unit: "days" });
    assert.equal(result.affected, 1);
    assert.ok(result.skipped.some((s) => s.userId === SUPER_ID && s.reason === "protected_super_admin"));
  });
});
