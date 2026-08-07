import { and, avg, count, desc, eq, gte, inArray, like, lte, or, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  adminNotes,
  adminSettings,
  auditLog,
  certificates,
  masteryRecords,
  notifications,
  profiles,
  subscriptionEvents,
  subscriptionPlans,
  subscriptions,
  users,
} from "@/lib/db/schema";
import { can, PLATFORM_OWNER_EMAILS, require_, isPlatformOwner } from "@/lib/auth/rbac";
import { revokeAllSessions, type SessionUser } from "@/lib/auth/session";
import { AuthError } from "@/lib/auth/session";
import { hashPassword } from "@/lib/auth/password";
import { logAdminAction } from "@/lib/auth/audit";
import { createResetTokenCore } from "@/lib/actions/password-reset-core";
import { uid } from "@/lib/utils";
import {
  canAccessContent,
  calculateEndDate,
  calculateRemainingDays,
  endOfDayInZone,
  getSubscriptionStatus,
  startOfDayInZone,
  DEFAULT_TIMEZONE,
  type DurationPreset,
  type SubscriptionDisplayStatus,
  type SubscriptionStatus,
} from "@/lib/subscriptions/access";

/**
 * Core Admin Dashboard actions (spec §§4-13). Same split-from-"use server"
 * pattern as `platform-accounts-core.ts` / `org-core.ts`: every exported
 * function here takes the resolved `SessionUser` and enforces the real
 * permission check itself (`require_`/`isPlatformOwner`), so this is the
 * actual security boundary and is directly unit-testable.
 *
 * This module DELIBERATELY reuses (does not duplicate):
 *  - `src/lib/subscriptions/access.ts` for every date/status computation.
 *  - `src/lib/actions/password-reset-core.ts` for the invite/reset-token flow.
 *  - `src/lib/auth/session.ts#revokeAllSessions` for session teardown.
 *  - `src/lib/auth/audit.ts#logAdminAction` for every mutation's audit row.
 */

export type PlatformRole = "super_admin" | "admin" | "support";

// ---------------------------------------------------------------------------
// Shared guards
// ---------------------------------------------------------------------------

function forbid(): never {
  throw new AuthError("forbidden");
}

/** Admin (non-super) may manage ordinary subscribers but not another admin's
 *  account, and never a Super Admin's — spec §1: "[Admin] cannot delete a
 *  Super Admin or change their permissions." Applied to every mutation that
 *  targets a specific user, not just role changes, since the same concern
 *  (a lower-privileged admin locking out a higher one) applies to suspending
 *  or editing their account too. */
function assertCanTargetUser(actor: SessionUser, targetPlatformRole: PlatformRole | null): void {
  if (targetPlatformRole !== "super_admin") return;
  if (actor.platformRole === "super_admin" || isPlatformOwner(actor)) return;
  void logAdminAction(actor, {
    action: "subscribers.denied_target_super_admin",
    entityType: "user",
    entityId: "unknown",
  });
  forbid();
}

async function countActiveSuperAdmins(excludingUserId?: string): Promise<number> {
  const rows = await db
    .select({ id: users.id, email: users.email, platformRole: users.platformRole })
    .from(users)
    .where(and(eq(users.accountStatus, "active"), sql`${users.deletedAt} is null`));
  return rows.filter((r) => {
    if (excludingUserId && r.id === excludingUserId) return false;
    return r.platformRole === "super_admin" || PLATFORM_OWNER_EMAILS.includes(r.email.toLowerCase());
  }).length;
}

/** Spec §16: "ensure at least one Super Admin always exists" / "prevent an
 *  admin from cutting off admin access entirely". Called before any action
 *  that would remove a user's super-admin standing (demote, suspend, delete).
 *  Exported for reuse by the self-service account-deletion flow
 *  (`src/lib/actions/profile.ts`) -- the same invariant applies whether the
 *  removal is admin-initiated or the user's own request. */
export async function assertSuperAdminSurvives(targetUserId: string): Promise<void> {
  const remaining = await countActiveSuperAdmins(targetUserId);
  if (remaining < 1) throw new Error("last_super_admin");
}

// ---------------------------------------------------------------------------
// Subscriber list + detail
// ---------------------------------------------------------------------------

export interface SubscriberListItem {
  id: string;
  email: string;
  name: string;
  phone: string | null;
  firmOrOffice: string | null;
  country: string | null;
  planName: string | null;
  accountStatus: "active" | "suspended";
  displayStatus: SubscriptionDisplayStatus | "no_subscription";
  startAt: number | null;
  endAt: number | null;
  daysRemaining: number | null;
  lastSeenAt: number | null;
  progressPercent: number;
  createdAt: number;
  platformRole: PlatformRole | null;
}

export interface SubscriberListParams {
  search?: string;
  status?: SubscriptionDisplayStatus | "no_subscription" | "all";
  planId?: string;
  country?: string;
  sort?: "newest" | "oldest" | "expiring_soon" | "name_asc" | "most_active";
  page?: number;
  pageSize?: number;
}

export interface SubscriberListResult {
  items: SubscriberListItem[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * NOTE on scale: filters/search/country run at the SQL level; the
 * status/sort/pagination pass runs in memory because subscription "expiring
 * soon"/"expired" are time-derived (never stored) — see `access.ts`. At this
 * project's current subscriber volume that's negligible; if the subscriber
 * count grows into the tens of thousands this should move to a materialized
 * `computed_status` column refreshed by a scheduled job, documented here so
 * it isn't silently forgotten.
 */
export async function listSubscribersCore(actor: SessionUser, params: SubscriberListParams): Promise<SubscriberListResult> {
  require_(actor, "subscribers.read");

  const trimmed = params.search?.trim();
  const conditions = [] as ReturnType<typeof eq>[];
  if (trimmed) {
    conditions.push(
      or(like(users.email, `%${trimmed}%`), like(users.name, `%${trimmed}%`), like(profiles.phone, `%${trimmed}%`)) as never,
    );
  }
  if (params.country) conditions.push(eq(profiles.country, params.country) as never);

  const rows = await db
    .select({
      id: users.id,
      email: users.email,
      name: users.name,
      accountStatus: users.accountStatus,
      lastSeenAt: users.lastSeenAt,
      createdAt: users.createdAt,
      platformRole: users.platformRole,
      phone: profiles.phone,
      firmOrOffice: profiles.firmOrOffice,
      country: profiles.country,
    })
    .from(users)
    .leftJoin(profiles, eq(profiles.userId, users.id))
    .where(and(sql`${users.deletedAt} is null`, ...conditions))
    .orderBy(desc(users.createdAt));

  const userIds = rows.map((r) => r.id);
  const [subRows, planRows, masteryAgg] = await Promise.all([
    userIds.length
      ? db.select().from(subscriptions).where(inArray(subscriptions.userId, userIds)).orderBy(desc(subscriptions.createdAt))
      : Promise.resolve([]),
    db.select().from(subscriptionPlans),
    userIds.length
      ? db
          .select({ userId: masteryRecords.userId, avgLevel: avg(masteryRecords.level) })
          .from(masteryRecords)
          .where(inArray(masteryRecords.userId, userIds))
          .groupBy(masteryRecords.userId)
      : Promise.resolve([]),
  ]);

  const latestSubByUser = new Map<string, (typeof subRows)[number]>();
  for (const s of subRows) {
    if (!s.userId) continue;
    if (!latestSubByUser.has(s.userId)) latestSubByUser.set(s.userId, s);
  }
  const planNameById = new Map(planRows.map((p) => [p.id, p.name]));
  const progressByUser = new Map(masteryAgg.map((m) => [m.userId, Math.round((Number(m.avgLevel) / 6) * 100)]));

  let items: SubscriberListItem[] = rows.map((r) => {
    const sub = latestSubByUser.get(r.id) ?? null;
    const displayStatus: SubscriptionDisplayStatus | "no_subscription" = sub
      ? getSubscriptionStatus(sub)
      : "no_subscription";
    return {
      id: r.id,
      email: r.email,
      name: r.name,
      phone: r.phone,
      firmOrOffice: r.firmOrOffice,
      country: r.country,
      planName: sub?.planId ? planNameById.get(sub.planId) ?? sub.plan : sub?.plan ?? null,
      accountStatus: r.accountStatus,
      displayStatus,
      startAt: sub?.startAt ?? null,
      endAt: sub?.currentPeriodEnd ?? null,
      daysRemaining: sub ? calculateRemainingDays(sub) : null,
      lastSeenAt: r.lastSeenAt,
      progressPercent: progressByUser.get(r.id) ?? 0,
      createdAt: r.createdAt,
      platformRole: r.platformRole ?? null,
    };
  });

  if (params.status && params.status !== "all") {
    items = items.filter((i) => i.displayStatus === params.status);
  }
  if (params.planId) {
    items = items.filter((i) => latestSubByUser.get(i.id)?.planId === params.planId);
  }

  switch (params.sort) {
    case "oldest":
      items.sort((a, b) => a.createdAt - b.createdAt);
      break;
    case "name_asc":
      items.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "expiring_soon":
      items.sort((a, b) => (a.daysRemaining ?? Infinity) - (b.daysRemaining ?? Infinity));
      break;
    case "most_active":
      items.sort((a, b) => (b.lastSeenAt ?? 0) - (a.lastSeenAt ?? 0));
      break;
    case "newest":
    default:
      items.sort((a, b) => b.createdAt - a.createdAt);
  }

  const total = items.length;
  const pageSize = Math.min(Math.max(params.pageSize ?? 20, 1), 200);
  const page = Math.max(params.page ?? 1, 1);
  const start = (page - 1) * pageSize;
  items = items.slice(start, start + pageSize);

  return { items, total, page, pageSize };
}

export interface SubscriberDetail {
  account: {
    id: string;
    email: string;
    name: string;
    accountStatus: "active" | "suspended";
    createdAt: number;
    lastSeenAt: number | null;
    locale: "ar" | "en";
    platformRole: PlatformRole | null;
    phone: string | null;
    country: string | null;
    firmOrOffice: string | null;
    jobTitle: string | null;
  };
  subscription: {
    id: string;
    planId: string | null;
    planName: string | null;
    status: SubscriptionStatus;
    displayStatus: SubscriptionDisplayStatus;
    startAt: number | null;
    endAt: number | null;
    daysRemaining: number | null;
    autoRenew: boolean;
    grantMethod: string;
    lastExtendedAt: number | null;
    lastEditedByName: string | null;
    canAccessContent: boolean;
  } | null;
  history: Array<{
    id: string;
    type: string;
    previousValue: unknown;
    newValue: unknown;
    reason: string | null;
    actorName: string | null;
    createdAt: number;
  }>;
  notes: Array<{ id: string; body: string; authorName: string; createdAt: number }>;
}

export async function getSubscriberDetailCore(actor: SessionUser, targetUserId: string): Promise<SubscriberDetail> {
  require_(actor, "subscribers.read");

  const userRows = await db
    .select({ user: users, profile: profiles })
    .from(users)
    .leftJoin(profiles, eq(profiles.userId, users.id))
    .where(eq(users.id, targetUserId))
    .limit(1);
  const row = userRows[0];
  if (!row || row.user.deletedAt) throw new Error("subscriber_not_found");

  const subRows = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, targetUserId))
    .orderBy(desc(subscriptions.createdAt))
    .limit(1);
  const sub = subRows[0] ?? null;

  let planName: string | null = null;
  if (sub?.planId) {
    const plan = (await db.select().from(subscriptionPlans).where(eq(subscriptionPlans.id, sub.planId)).limit(1))[0];
    planName = plan?.name ?? null;
  } else if (sub?.plan) {
    planName = sub.plan;
  }

  let lastEditedByName: string | null = null;
  if (sub?.lastEditedByUserId) {
    const editor = (await db.select({ name: users.name }).from(users).where(eq(users.id, sub.lastEditedByUserId)).limit(1))[0];
    lastEditedByName = editor?.name ?? null;
  }

  const events = sub
    ? await db.select().from(subscriptionEvents).where(eq(subscriptionEvents.subscriptionId, sub.id)).orderBy(desc(subscriptionEvents.createdAt)).limit(100)
    : [];
  const actorIds = [...new Set(events.map((e) => e.actorUserId).filter((x): x is string => !!x))];
  const actorNames = actorIds.length
    ? await db.select({ id: users.id, name: users.name }).from(users).where(inArray(users.id, actorIds))
    : [];
  const actorNameById = new Map(actorNames.map((a) => [a.id, a.name]));

  const noteRows = await db
    .select({ note: adminNotes, authorName: users.name })
    .from(adminNotes)
    .leftJoin(users, eq(users.id, adminNotes.authorUserId))
    .where(eq(adminNotes.userId, targetUserId))
    .orderBy(desc(adminNotes.createdAt));

  return {
    account: {
      id: row.user.id,
      email: row.user.email,
      name: row.user.name,
      accountStatus: row.user.accountStatus,
      createdAt: row.user.createdAt,
      lastSeenAt: row.user.lastSeenAt,
      locale: row.user.locale,
      platformRole: row.user.platformRole ?? null,
      phone: row.profile?.phone ?? null,
      country: row.profile?.country ?? null,
      firmOrOffice: row.profile?.firmOrOffice ?? null,
      jobTitle: row.profile?.jobTitle ?? null,
    },
    subscription: sub
      ? {
          id: sub.id,
          planId: sub.planId,
          planName,
          status: sub.status,
          displayStatus: getSubscriptionStatus(sub),
          startAt: sub.startAt,
          endAt: sub.currentPeriodEnd,
          daysRemaining: calculateRemainingDays(sub),
          autoRenew: sub.autoRenew,
          grantMethod: sub.grantMethod,
          lastExtendedAt: sub.lastExtendedAt,
          lastEditedByName,
          canAccessContent: canAccessContent(sub),
        }
      : null,
    history: events.map((e) => ({
      id: e.id,
      type: e.type,
      previousValue: e.previousValue,
      newValue: e.newValue,
      reason: e.reason,
      actorName: e.actorUserId ? actorNameById.get(e.actorUserId) ?? null : null,
      createdAt: e.createdAt,
    })),
    notes: noteRows.map((n) => ({ id: n.note.id, body: n.note.body, authorName: n.authorName ?? "—", createdAt: n.note.createdAt })),
  };
}

// ---------------------------------------------------------------------------
// Create / edit subscriber
// ---------------------------------------------------------------------------

export interface CreateSubscriberInput {
  email: string;
  name: string;
  phone?: string;
  country?: string;
  locale?: "ar" | "en";
  firmOrOffice?: string;
  jobTitle?: string;
  planId?: string | null;
  duration: { mode: "preset"; preset: DurationPreset } | { mode: "custom"; startDateStr: string; endDateStr: string | null };
  startDateStr: string;
  notes?: string;
  timeZone?: string;
}

export async function createSubscriberCore(
  actor: SessionUser,
  input: CreateSubscriberInput,
): Promise<{ userId: string; subscriptionId: string; resetToken: string; existing?: boolean }> {
  require_(actor, "subscribers.write");

  const email = input.email.trim().toLowerCase();
  const name = input.name.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("invalid_email");
  if (!name) throw new Error("invalid_name");

  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  if (existing.length > 0) throw new Error("email_taken");

  const timeZone = input.timeZone ?? DEFAULT_TIMEZONE;
  const startAt = startOfDayInZone(input.startDateStr, timeZone) ?? Date.now();
  let endAtDateStr: string | null;
  let status: SubscriptionStatus;
  if (input.duration.mode === "preset") {
    endAtDateStr = calculateEndDate(input.startDateStr, input.duration.preset);
    status = input.duration.preset === "lifetime" ? "lifetime" : "active";
  } else {
    endAtDateStr = input.duration.endDateStr;
    status = "active";
    if (endAtDateStr && endAtDateStr < input.duration.startDateStr) throw new Error("end_before_start");
  }
  const endAt = endAtDateStr ? endOfDayInZone(endAtDateStr, timeZone) : null;

  const unusablePassword = uid("unset");
  const passwordHash = await hashPassword(unusablePassword);
  const userId = uid("user");
  const subscriptionId = uid("sub");
  const now = Date.now();

  await db.transaction(async (tx) => {
    await tx.insert(users).values({
      id: userId,
      email,
      passwordHash,
      name,
      locale: input.locale ?? "ar",
      systemRole: "learner",
      emailVerifiedAt: now,
      accountStatus: "active",
      accessExpiresAt: null, // paid-content gating lives on `subscriptions`, not this coarse field
    });
    await tx.insert(profiles).values({
      userId,
      phone: input.phone?.trim() || null,
      country: input.country?.trim() || null,
      firmOrOffice: input.firmOrOffice?.trim() || null,
      jobTitle: input.jobTitle?.trim() || null,
    });
    await tx.insert(subscriptions).values({
      id: subscriptionId,
      userId,
      planId: input.planId ?? null,
      status,
      startAt,
      currentPeriodEnd: endAt,
      grantMethod: "manual",
      createdByUserId: actor.id,
      lastEditedByUserId: actor.id,
    });
    await tx.insert(subscriptionEvents).values({
      id: uid("subev"),
      subscriptionId,
      userId,
      type: "created",
      newValue: { status, startAt, endAt, planId: input.planId ?? null },
      actorUserId: actor.id,
    });
    if (input.notes?.trim()) {
      await tx.insert(adminNotes).values({ id: uid("note"), userId, authorUserId: actor.id, body: input.notes.trim() });
    }
  });

  const resetToken = await createResetTokenCore(userId);
  void logAdminAction(actor, {
    action: "subscribers.created",
    entityType: "user",
    entityId: userId,
    newValue: { email, name, status, planId: input.planId ?? null },
  });

  return { userId, subscriptionId, resetToken };
}

export interface UpdateSubscriberInput {
  name?: string;
  phone?: string | null;
  country?: string | null;
  firmOrOffice?: string | null;
  jobTitle?: string | null;
  locale?: "ar" | "en";
}

export async function updateSubscriberCore(actor: SessionUser, targetUserId: string, input: UpdateSubscriberInput): Promise<void> {
  require_(actor, "subscribers.write");
  const target = (await db.select({ id: users.id, platformRole: users.platformRole }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("subscriber_not_found");
  assertCanTargetUser(actor, target.platformRole ?? null);

  const userPatch: Partial<typeof users.$inferInsert> = {};
  if (input.name?.trim()) userPatch.name = input.name.trim();
  if (input.locale) userPatch.locale = input.locale;
  if (Object.keys(userPatch).length) await db.update(users).set(userPatch).where(eq(users.id, targetUserId));

  const profilePatch: Partial<typeof profiles.$inferInsert> = {};
  if (input.phone !== undefined) profilePatch.phone = input.phone;
  if (input.country !== undefined) profilePatch.country = input.country;
  if (input.firmOrOffice !== undefined) profilePatch.firmOrOffice = input.firmOrOffice;
  if (input.jobTitle !== undefined) profilePatch.jobTitle = input.jobTitle;
  if (Object.keys(profilePatch).length) {
    const existingProfile = (await db.select({ userId: profiles.userId }).from(profiles).where(eq(profiles.userId, targetUserId)).limit(1))[0];
    if (existingProfile) await db.update(profiles).set(profilePatch).where(eq(profiles.userId, targetUserId));
    else await db.insert(profiles).values({ userId: targetUserId, ...profilePatch });
  }

  void logAdminAction(actor, { action: "subscribers.updated", entityType: "user", entityId: targetUserId, newValue: input });
}

export async function resendInviteCore(actor: SessionUser, targetUserId: string): Promise<{ resetToken: string }> {
  require_(actor, "subscribers.write");
  const target = (await db.select({ id: users.id, platformRole: users.platformRole }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("subscriber_not_found");
  assertCanTargetUser(actor, target.platformRole ?? null);

  const resetToken = await createResetTokenCore(targetUserId);
  void logAdminAction(actor, { action: "subscribers.invite_resent", entityType: "user", entityId: targetUserId });
  return { resetToken };
}

export async function signOutAllSessionsCore(actor: SessionUser, targetUserId: string): Promise<void> {
  require_(actor, "subscribers.write");
  const target = (await db.select({ id: users.id, platformRole: users.platformRole }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("subscriber_not_found");
  assertCanTargetUser(actor, target.platformRole ?? null);

  await revokeAllSessions(targetUserId);
  void logAdminAction(actor, { action: "subscribers.signed_out_everywhere", entityType: "user", entityId: targetUserId });
}

/** Soft-delete only (spec: "no deleting user progress"; `deletedAt` already
 *  excludes the row from every subscriber query and blocks sign-in via
 *  `getSessionUser`, without touching any learning/progress table). */
export async function hideSubscriberCore(actor: SessionUser, targetUserId: string, reason: string): Promise<void> {
  require_(actor, "subscribers.write");
  if (!reason.trim()) throw new Error("reason_required");
  const target = (await db.select({ id: users.id, platformRole: users.platformRole }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("subscriber_not_found");
  assertCanTargetUser(actor, target.platformRole ?? null);
  if (target.platformRole === "super_admin") await assertSuperAdminSurvives(targetUserId);
  if (targetUserId === actor.id && target.platformRole === "super_admin") await assertSuperAdminSurvives(targetUserId);

  await db.update(users).set({ deletedAt: Date.now() }).where(eq(users.id, targetUserId));
  await revokeAllSessions(targetUserId);
  void logAdminAction(actor, { action: "subscribers.hidden", entityType: "user", entityId: targetUserId, reason });
}

// ---------------------------------------------------------------------------
// Subscription lifecycle
// ---------------------------------------------------------------------------

export interface UpdatePeriodInput {
  /** "add" appends a duration to the anchor date; "set" moves the end date
   *  to an explicit "YYYY-MM-DD". */
  mode: "add" | "set";
  amount?: number;
  unit?: "days" | "months" | "years";
  newEndDateStr?: string;
  /** Only meaningful for mode "add": whether the extra period starts from
   *  today or from the subscription's current end date (spec §7 default:
   *  active -> from current end; expired -> from today unless overridden). */
  from?: "today" | "current_end";
  reason?: string;
  timeZone?: string;
}

export async function updateSubscriptionPeriodCore(
  actor: SessionUser,
  subscriptionId: string,
  input: UpdatePeriodInput,
): Promise<{ previousEndAt: number | null; newEndAt: number | null }> {
  require_(actor, "subscribers.write");
  const sub = (await db.select().from(subscriptions).where(eq(subscriptions.id, subscriptionId)).limit(1))[0];
  if (!sub) throw new Error("subscription_not_found");
  if (sub.userId) {
    const target = (await db.select({ platformRole: users.platformRole }).from(users).where(eq(users.id, sub.userId)).limit(1))[0];
    assertCanTargetUser(actor, target?.platformRole ?? null);
  }

  const timeZone = input.timeZone ?? DEFAULT_TIMEZONE;
  const now = Date.now();
  const previousEndAt = sub.currentPeriodEnd;

  let newEndAt: number | null;
  if (input.mode === "set") {
    if (!input.newEndDateStr) throw new Error("end_date_required");
    newEndAt = endOfDayInZone(input.newEndDateStr, timeZone);
    if (newEndAt === null) throw new Error("invalid_date");
    const startBoundary = sub.startAt ?? sub.createdAt;
    if (newEndAt < startBoundary) throw new Error("end_before_start");
  } else {
    const amount = input.amount ?? 0;
    if (amount === 0) throw new Error("amount_required");
    const anchorInstant =
      input.from === "today"
        ? now
        : sub.currentPeriodEnd && sub.currentPeriodEnd > now
          ? sub.currentPeriodEnd
          : now; // expired -> defaults to "from today" per spec §7
    const anchorYmd = new Date(anchorInstant);
    const y = anchorYmd.getUTCFullYear();
    const m = anchorYmd.getUTCMonth() + 1;
    const d = anchorYmd.getUTCDate();
    const anchorStr = `${y.toString().padStart(4, "0")}-${m.toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
    const preset: DurationPreset | null =
      input.unit === "days" && amount === 7 ? "7d" : input.unit === "days" && amount === 14 ? "14d" : input.unit === "days" && amount === 30 ? "30d" : null;
    let endDateStr: string | null;
    if (preset) {
      endDateStr = calculateEndDate(anchorStr, preset);
    } else if (input.unit === "months" || input.unit === "years") {
      const months = input.unit === "years" ? amount * 12 : amount;
      const { addCalendarMonths } = await import("@/lib/subscriptions/timezone");
      const [yy, mm, dd] = anchorStr.split("-").map(Number);
      const shifted = addCalendarMonths(yy!, mm!, dd!, months);
      endDateStr = `${shifted.year.toString().padStart(4, "0")}-${shifted.month.toString().padStart(2, "0")}-${shifted.day.toString().padStart(2, "0")}`;
    } else {
      const shifted = new Date(Date.UTC(y, m - 1, d, 12, 0, 0) + amount * 86_400_000);
      endDateStr = `${shifted.getUTCFullYear()}-${(shifted.getUTCMonth() + 1).toString().padStart(2, "0")}-${shifted.getUTCDate().toString().padStart(2, "0")}`;
    }
    newEndAt = endDateStr ? endOfDayInZone(endDateStr, timeZone) : null;
  }

  const eventType = previousEndAt === null || (newEndAt ?? 0) >= previousEndAt ? "extended" : "shortened";

  await db
    .update(subscriptions)
    .set({
      currentPeriodEnd: newEndAt,
      status: sub.status === "expired" ? "active" : sub.status,
      lastExtendedAt: now,
      lastEditedByUserId: actor.id,
    })
    .where(eq(subscriptions.id, subscriptionId));

  if (sub.userId) {
    await db.insert(subscriptionEvents).values({
      id: uid("subev"),
      subscriptionId,
      userId: sub.userId,
      type: eventType,
      previousValue: { endAt: previousEndAt },
      newValue: { endAt: newEndAt },
      reason: input.reason ?? null,
      actorUserId: actor.id,
    });
  }

  void logAdminAction(actor, {
    action: `subscriptions.${eventType}`,
    entityType: "subscription",
    entityId: subscriptionId,
    previousValue: { endAt: previousEndAt },
    newValue: { endAt: newEndAt },
    reason: input.reason,
  });

  return { previousEndAt, newEndAt };
}

export async function changePlanCore(actor: SessionUser, subscriptionId: string, planId: string | null, reason?: string): Promise<void> {
  require_(actor, "subscribers.write");
  const sub = (await db.select().from(subscriptions).where(eq(subscriptions.id, subscriptionId)).limit(1))[0];
  if (!sub) throw new Error("subscription_not_found");
  if (sub.userId) {
    const target = (await db.select({ platformRole: users.platformRole }).from(users).where(eq(users.id, sub.userId)).limit(1))[0];
    assertCanTargetUser(actor, target?.platformRole ?? null);
  }
  if (planId) {
    const plan = (await db.select({ id: subscriptionPlans.id }).from(subscriptionPlans).where(eq(subscriptionPlans.id, planId)).limit(1))[0];
    if (!plan) throw new Error("plan_not_found");
  }

  const previousPlanId = sub.planId;
  await db.update(subscriptions).set({ planId, lastEditedByUserId: actor.id }).where(eq(subscriptions.id, subscriptionId));

  if (sub.userId) {
    await db.insert(subscriptionEvents).values({
      id: uid("subev"),
      subscriptionId,
      userId: sub.userId,
      type: "plan_changed",
      previousValue: { planId: previousPlanId },
      newValue: { planId },
      reason: reason ?? null,
      actorUserId: actor.id,
    });
  }
  void logAdminAction(actor, {
    action: "subscriptions.plan_changed",
    entityType: "subscription",
    entityId: subscriptionId,
    previousValue: { planId: previousPlanId },
    newValue: { planId },
    reason,
  });
}

async function setSubscriptionLifecycle(
  actor: SessionUser,
  subscriptionId: string,
  next: SubscriptionStatus,
  eventType: "suspended" | "reactivated" | "cancelled" | "lifetime_granted",
  reason?: string,
): Promise<void> {
  require_(actor, "subscribers.write");
  const sub = (await db.select().from(subscriptions).where(eq(subscriptions.id, subscriptionId)).limit(1))[0];
  if (!sub) throw new Error("subscription_not_found");
  if ((eventType === "suspended" || eventType === "cancelled") && !reason?.trim()) throw new Error("reason_required");

  let targetPlatformRole: PlatformRole | null = null;
  if (sub.userId) {
    const target = (await db.select({ platformRole: users.platformRole }).from(users).where(eq(users.id, sub.userId)).limit(1))[0];
    targetPlatformRole = target?.platformRole ?? null;
    assertCanTargetUser(actor, targetPlatformRole);
  }
  if (eventType === "suspended" && targetPlatformRole === "super_admin" && sub.userId) {
    await assertSuperAdminSurvives(sub.userId);
  }

  const previousStatus = sub.status;
  await db.update(subscriptions).set({ status: next, lastEditedByUserId: actor.id }).where(eq(subscriptions.id, subscriptionId));

  if (sub.userId) {
    await db.insert(subscriptionEvents).values({
      id: uid("subev"),
      subscriptionId,
      userId: sub.userId,
      type: eventType,
      previousValue: { status: previousStatus },
      newValue: { status: next },
      reason: reason ?? null,
      actorUserId: actor.id,
    });
  }
  void logAdminAction(actor, {
    action: `subscriptions.${eventType}`,
    entityType: "subscription",
    entityId: subscriptionId,
    previousValue: { status: previousStatus },
    newValue: { status: next },
    reason,
  });
}

export const suspendSubscriptionCore = (actor: SessionUser, subscriptionId: string, reason: string) =>
  setSubscriptionLifecycle(actor, subscriptionId, "suspended", "suspended", reason);

export const reactivateSubscriptionCore = (actor: SessionUser, subscriptionId: string, reason?: string) =>
  setSubscriptionLifecycle(actor, subscriptionId, "active", "reactivated", reason);

export const cancelSubscriptionCore = (actor: SessionUser, subscriptionId: string, reason: string) =>
  setSubscriptionLifecycle(actor, subscriptionId, "cancelled", "cancelled", reason);

export const grantLifetimeCore = (actor: SessionUser, subscriptionId: string, reason?: string) =>
  setSubscriptionLifecycle(actor, subscriptionId, "lifetime", "lifetime_granted", reason);

/** Full account-level suspend (blocks sign-in entirely, revokes sessions) —
 *  distinct from `suspendSubscriptionCore`, which only blocks paid content
 *  while still allowing sign-in to see the "subscription ended" screen. Both
 *  are exposed on the subscriber detail page as separate, clearly-labelled
 *  actions (spec §6). */
export async function suspendAccountCore(actor: SessionUser, targetUserId: string, reason: string): Promise<void> {
  require_(actor, "subscribers.write");
  if (!reason.trim()) throw new Error("reason_required");
  const target = (await db.select({ id: users.id, platformRole: users.platformRole }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("subscriber_not_found");
  assertCanTargetUser(actor, target.platformRole ?? null);
  if (target.platformRole === "super_admin") await assertSuperAdminSurvives(targetUserId);

  await db.update(users).set({ accountStatus: "suspended" }).where(eq(users.id, targetUserId));
  await revokeAllSessions(targetUserId);
  void logAdminAction(actor, { action: "accounts.suspended", entityType: "user", entityId: targetUserId, reason });
}

export async function reactivateAccountCore(actor: SessionUser, targetUserId: string): Promise<void> {
  require_(actor, "subscribers.write");
  const target = (await db.select({ id: users.id, platformRole: users.platformRole }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("subscriber_not_found");
  assertCanTargetUser(actor, target.platformRole ?? null);

  await db.update(users).set({ accountStatus: "active" }).where(eq(users.id, targetUserId));
  void logAdminAction(actor, { action: "accounts.reactivated", entityType: "user", entityId: targetUserId });
}

// ---------------------------------------------------------------------------
// Admin notes
// ---------------------------------------------------------------------------

export async function addAdminNoteCore(actor: SessionUser, targetUserId: string, body: string): Promise<void> {
  require_(actor, "subscribers.write");
  const trimmed = body.trim();
  if (!trimmed) throw new Error("note_required");
  const target = (await db.select({ id: users.id, platformRole: users.platformRole }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("subscriber_not_found");
  assertCanTargetUser(actor, target.platformRole ?? null);

  await db.insert(adminNotes).values({ id: uid("note"), userId: targetUserId, authorUserId: actor.id, body: trimmed });
  void logAdminAction(actor, { action: "subscribers.note_added", entityType: "user", entityId: targetUserId });
}

// ---------------------------------------------------------------------------
// Bulk actions (spec §11)
// ---------------------------------------------------------------------------

export interface BulkActionResult {
  affected: number;
  skipped: Array<{ userId: string; reason: string }>;
}

export async function bulkActionCore(
  actor: SessionUser,
  userIds: string[],
  action: "extend" | "suspend" | "reactivate" | "changePlan" | "tag",
  params: { amount?: number; unit?: "days" | "months" | "years"; planId?: string | null; reason?: string; tag?: string },
): Promise<BulkActionResult> {
  require_(actor, "subscribers.write");
  if (userIds.length === 0) throw new Error("no_targets");
  if ((action === "suspend") && !params.reason?.trim()) throw new Error("reason_required");

  const targets = await db.select({ id: users.id, platformRole: users.platformRole }).from(users).where(inArray(users.id, userIds));
  const skipped: BulkActionResult["skipped"] = [];
  let affected = 0;

  for (const t of targets) {
    if (t.platformRole === "super_admin" && !(actor.platformRole === "super_admin" || isPlatformOwner(actor))) {
      skipped.push({ userId: t.id, reason: "protected_super_admin" });
      continue;
    }
    // Spec §11: "prevent bulk actions from targeting a Super Admin" — applied
    // unconditionally, even for a Super Admin actor, since a bulk op is the
    // one place a slip of the mouse could hit an admin account by accident.
    if (t.platformRole === "super_admin") {
      skipped.push({ userId: t.id, reason: "protected_super_admin" });
      continue;
    }

    try {
      if (action === "tag" && params.tag?.trim()) {
        const existing = (await db.select({ tags: profiles.tags }).from(profiles).where(eq(profiles.userId, t.id)).limit(1))[0];
        const nextTags = Array.from(new Set([...(existing?.tags ?? []), params.tag.trim()]));
        if (existing) await db.update(profiles).set({ tags: nextTags }).where(eq(profiles.userId, t.id));
        else await db.insert(profiles).values({ userId: t.id, tags: nextTags });
        affected++;
        continue;
      }

      const sub = (await db.select().from(subscriptions).where(eq(subscriptions.userId, t.id)).orderBy(desc(subscriptions.createdAt)).limit(1))[0];
      if (!sub) {
        skipped.push({ userId: t.id, reason: "no_subscription" });
        continue;
      }
      if (action === "extend") {
        await updateSubscriptionPeriodCore(actor, sub.id, {
          mode: "add",
          amount: params.amount ?? 30,
          unit: params.unit ?? "days",
          from: "current_end",
          reason: params.reason ?? "bulk extend",
        });
      } else if (action === "suspend") {
        await suspendSubscriptionCore(actor, sub.id, params.reason!);
      } else if (action === "reactivate") {
        await reactivateSubscriptionCore(actor, sub.id, params.reason);
      } else if (action === "changePlan") {
        await changePlanCore(actor, sub.id, params.planId ?? null, params.reason);
      }
      affected++;
    } catch (err) {
      skipped.push({ userId: t.id, reason: err instanceof Error ? err.message : "error" });
    }
  }

  void logAdminAction(actor, {
    action: `subscribers.bulk_${action}`,
    entityType: "user",
    entityId: userIds.join(","),
    newValue: { count: userIds.length, affected, skipped: skipped.length },
    reason: params.reason,
  });

  return { affected, skipped };
}

// ---------------------------------------------------------------------------
// Admins management (Super Admin only)
// ---------------------------------------------------------------------------

export interface AdminListItem {
  id: string;
  email: string;
  name: string;
  platformRole: PlatformRole;
  accountStatus: "active" | "suspended";
  lastSeenAt: number | null;
  isBootstrapOwner: boolean;
}

export async function listAdminsCore(actor: SessionUser): Promise<AdminListItem[]> {
  require_(actor, "admins.manage");
  const rows = await db
    .select({ id: users.id, email: users.email, name: users.name, platformRole: users.platformRole, accountStatus: users.accountStatus, lastSeenAt: users.lastSeenAt })
    .from(users)
    .where(sql`${users.platformRole} is not null`)
    .orderBy(users.name);
  return rows
    .filter((r): r is typeof r & { platformRole: PlatformRole } => r.platformRole !== null)
    .map((r) => ({ ...r, isBootstrapOwner: PLATFORM_OWNER_EMAILS.includes(r.email.toLowerCase()) }));
}

export async function setPlatformRoleCore(actor: SessionUser, targetUserId: string, role: PlatformRole | null): Promise<void> {
  require_(actor, "admins.manage");
  const target = (await db.select({ id: users.id, email: users.email, platformRole: users.platformRole }).from(users).where(eq(users.id, targetUserId)).limit(1))[0];
  if (!target) throw new Error("subscriber_not_found");

  const wasSuperAdmin = target.platformRole === "super_admin" || PLATFORM_OWNER_EMAILS.includes(target.email.toLowerCase());
  if (wasSuperAdmin && role !== "super_admin") {
    await assertSuperAdminSurvives(targetUserId);
    if (PLATFORM_OWNER_EMAILS.includes(target.email.toLowerCase())) {
      // The hardcoded bootstrap owner's super-admin standing cannot be
      // revoked through the UI at all -- it is a code-level, not a
      // database-level, grant. Demoting the `platformRole` row is a no-op
      // for them; say so rather than silently pretending it worked.
      throw new Error("cannot_demote_bootstrap_owner");
    }
  }

  await db.update(users).set({ platformRole: role }).where(eq(users.id, targetUserId));
  void logAdminAction(actor, {
    action: "admins.role_changed",
    entityType: "user",
    entityId: targetUserId,
    previousValue: { platformRole: target.platformRole },
    newValue: { platformRole: role },
  });
}

// ---------------------------------------------------------------------------
// Plans (spec §9)
// ---------------------------------------------------------------------------

export interface PlanInput {
  name: string;
  description?: string;
  defaultDurationDays?: number | null;
  features?: Record<string, unknown>;
  priceAmount?: number | null;
  priceCurrency?: string | null;
  displayOrder?: number;
  visibility?: "public" | "internal";
}

export async function listPlansCore(actor: SessionUser) {
  require_(actor, "subscribers.read");
  return db.select().from(subscriptionPlans).orderBy(subscriptionPlans.displayOrder, subscriptionPlans.name);
}

export async function createPlanCore(actor: SessionUser, input: PlanInput): Promise<string> {
  require_(actor, "plans.manage");
  if (!input.name.trim()) throw new Error("invalid_name");
  const id = uid("plan");
  await db.insert(subscriptionPlans).values({
    id,
    name: input.name.trim(),
    description: input.description ?? null,
    defaultDurationDays: input.defaultDurationDays ?? null,
    features: input.features ?? {},
    priceAmount: input.priceAmount ?? null,
    priceCurrency: input.priceCurrency ?? null,
    displayOrder: input.displayOrder ?? 0,
    visibility: input.visibility ?? "public",
  });
  void logAdminAction(actor, { action: "plans.created", entityType: "plan", entityId: id, newValue: input });
  return id;
}

export async function updatePlanCore(actor: SessionUser, planId: string, input: Partial<PlanInput> & { status?: "active" | "archived" }): Promise<void> {
  require_(actor, "plans.manage");
  const existing = (await db.select().from(subscriptionPlans).where(eq(subscriptionPlans.id, planId)).limit(1))[0];
  if (!existing) throw new Error("plan_not_found");
  await db.update(subscriptionPlans).set({ ...input, updatedAt: Date.now() }).where(eq(subscriptionPlans.id, planId));
  void logAdminAction(actor, { action: "plans.updated", entityType: "plan", entityId: planId, previousValue: existing, newValue: input });
}

// ---------------------------------------------------------------------------
// Reports, KPIs, CSV export (spec §3/§13)
// ---------------------------------------------------------------------------

export interface DashboardKpis {
  totalSubscribers: number;
  activeSubscribers: number;
  trialSubscribers: number;
  expiredSubscribers: number;
  suspendedAccounts: number;
  expiringWithin7Days: number;
  expiringWithin30Days: number;
  newThisMonth: number;
  activeUserRatePercent: number;
  startedLearningCount: number;
  certificateHolders: number;
}

export async function getDashboardKpisCore(actor: SessionUser): Promise<DashboardKpis> {
  require_(actor, "subscribers.read");
  const now = Date.now();
  const monthAgo = now - 30 * 86_400_000;

  const [allUsers, allSubs, certRows] = await Promise.all([
    db.select({ id: users.id, accountStatus: users.accountStatus, createdAt: users.createdAt, lastSeenAt: users.lastSeenAt }).from(users).where(sql`${users.deletedAt} is null`),
    db.select().from(subscriptions),
    db.select({ userId: certificates.userId }).from(certificates),
  ]);

  const latestByUser = new Map<string, (typeof allSubs)[number]>();
  for (const s of allSubs) {
    if (!s.userId) continue;
    const prior = latestByUser.get(s.userId);
    if (!prior || s.createdAt > prior.createdAt) latestByUser.set(s.userId, s);
  }
  const statuses = [...latestByUser.values()].map((s) => getSubscriptionStatus(s));

  const totalSubscribers = allUsers.length;
  const suspendedAccounts = allUsers.filter((u) => u.accountStatus === "suspended").length;
  const activeSubscribers = statuses.filter((s) => s === "active" || s === "lifetime").length;
  const trialSubscribers = statuses.filter((s) => s === "trial").length;
  const expiredSubscribers = statuses.filter((s) => s === "expired").length;
  const expiringWithin7Days = [...latestByUser.values()].filter((s) => getSubscriptionStatus(s, { expiringSoonDays: 7 }) === "expiring_soon").length;
  const expiringWithin30Days = [...latestByUser.values()].filter((s) => getSubscriptionStatus(s, { expiringSoonDays: 30 }) === "expiring_soon" || getSubscriptionStatus(s) === "expiring_soon").length;
  const newThisMonth = allUsers.filter((u) => u.createdAt >= monthAgo).length;
  const activeThisMonth = allUsers.filter((u) => (u.lastSeenAt ?? 0) >= monthAgo).length;

  return {
    totalSubscribers,
    activeSubscribers,
    trialSubscribers,
    expiredSubscribers,
    suspendedAccounts,
    expiringWithin7Days,
    expiringWithin30Days,
    newThisMonth,
    activeUserRatePercent: totalSubscribers ? Math.round((activeThisMonth / totalSubscribers) * 100) : 0,
    startedLearningCount: 0, // filled by callers that already have access to progress tables where needed
    certificateHolders: new Set(certRows.map((c) => c.userId)).size,
  };
}

function csvEscape(value: unknown): string {
  const str = value === null || value === undefined ? "" : String(value);
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

/** UTF-8 BOM prefix so Excel opens Arabic text correctly (spec §13). Never
 *  includes password hashes, tokens, or other secrets. */
export async function exportSubscribersCsvCore(actor: SessionUser, params: SubscriberListParams): Promise<string> {
  require_(actor, "reports.export");
  const { items } = await listSubscribersCore(actor, { ...params, page: 1, pageSize: 10_000 });
  const header = ["Name", "Email", "Phone", "Country", "Firm/Office", "Plan", "Status", "Start", "End", "DaysRemaining", "LastSeen", "Progress%", "Created"];
  const lines = [header.join(",")];
  for (const i of items) {
    lines.push(
      [
        i.name,
        i.email,
        i.phone ?? "",
        i.country ?? "",
        i.firmOrOffice ?? "",
        i.planName ?? "",
        i.displayStatus,
        i.startAt ? new Date(i.startAt).toISOString() : "",
        i.endAt ? new Date(i.endAt).toISOString() : "",
        i.daysRemaining ?? "",
        i.lastSeenAt ? new Date(i.lastSeenAt).toISOString() : "",
        i.progressPercent,
        new Date(i.createdAt).toISOString(),
      ]
        .map(csvEscape)
        .join(","),
    );
  }
  void logAdminAction(actor, { action: "reports.exported_csv", entityType: "report", entityId: "subscribers", newValue: { count: items.length, filters: params } });
  return "﻿" + lines.join("\n");
}

// ---------------------------------------------------------------------------
// Audit log read (spec §12)
// ---------------------------------------------------------------------------

export interface AuditLogEntry {
  id: string;
  actorName: string | null;
  action: string;
  entityType: string;
  entityId: string;
  meta: unknown;
  createdAt: number;
}

export async function listAuditLogCore(actor: SessionUser, params: { entityType?: string; page?: number; pageSize?: number }): Promise<{ items: AuditLogEntry[]; total: number }> {
  require_(actor, "audit.read");
  const pageSize = Math.min(Math.max(params.pageSize ?? 50, 1), 200);
  const page = Math.max(params.page ?? 1, 1);
  const conditions = params.entityType ? [eq(auditLog.entityType, params.entityType)] : [];

  const [rows, totalRows] = await Promise.all([
    db
      .select({ log: auditLog, actorName: users.name })
      .from(auditLog)
      .leftJoin(users, eq(users.id, auditLog.actorId))
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(desc(auditLog.createdAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize),
    db.select({ n: count() }).from(auditLog).where(conditions.length ? and(...conditions) : undefined),
  ]);

  return {
    items: rows.map((r) => ({ id: r.log.id, actorName: r.actorName, action: r.log.action, entityType: r.log.entityType, entityId: r.log.entityId, meta: r.log.meta, createdAt: r.log.createdAt })),
    total: totalRows[0]?.n ?? 0,
  };
}

// ---------------------------------------------------------------------------
// Settings (spec §19)
// ---------------------------------------------------------------------------

export interface AdminSettingsShape {
  timeZone: string;
  defaultDurationPreset: DurationPreset;
  expiringSoonDays: number;
  gracePeriodDays: number | null;
  notificationLanguage: "ar" | "en";
  contactInfoForRenewal: string;
  expirationNotificationsEnabled: boolean;
}

const DEFAULT_SETTINGS: AdminSettingsShape = {
  timeZone: DEFAULT_TIMEZONE,
  defaultDurationPreset: "30d",
  expiringSoonDays: 7,
  gracePeriodDays: null,
  notificationLanguage: "ar",
  contactInfoForRenewal: "",
  expirationNotificationsEnabled: true,
};

export async function getAdminSettingsCore(actor: SessionUser): Promise<AdminSettingsShape> {
  require_(actor, "subscribers.read");
  const rows = await db.select().from(adminSettings);
  const map = new Map(rows.map((r) => [r.key, r.value]));
  return { ...DEFAULT_SETTINGS, ...(map.get("admin_settings") as Partial<AdminSettingsShape> | undefined) };
}

export async function updateAdminSettingsCore(actor: SessionUser, patch: Partial<AdminSettingsShape>): Promise<AdminSettingsShape> {
  require_(actor, "settings.manage");
  const current = await getAdminSettingsCore(actor);
  const next = { ...current, ...patch };
  await db
    .insert(adminSettings)
    .values({ key: "admin_settings", value: next, updatedByUserId: actor.id })
    .onConflictDoUpdate({ target: adminSettings.key, set: { value: next, updatedAt: Date.now(), updatedByUserId: actor.id } });
  void logAdminAction(actor, { action: "settings.updated", entityType: "settings", entityId: "admin_settings", previousValue: current, newValue: next });
  return next;
}

// Re-exported so callers of subscribers-core don't also need to import from
// two files for the common "is this permission held" question.
export { can };
export { notifications as notificationsTable };
