import "server-only";
import { desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { subscriptions } from "@/lib/db/schema";
import type { SessionUser } from "@/lib/auth/session";
import { canAccessContent } from "./access";

/**
 * Spec §8: "prevent a user from accessing paid content after their duration
 * ends" / "preserve the user's progress data even after their subscription
 * ends" — this is the read side of that rule, layered on top of (never
 * replacing) the account-level gate already enforced in
 * `getSessionUser()` (suspended account / past `users.accessExpiresAt`
 * still signs the user out entirely, unchanged).
 *
 * A user with NO subscription row at all (every account that predates this
 * feature, plus every Content Studio/author/reviewer/admin account that was
 * never meant to hold one) is never blocked here — this only applies once an
 * account actually has a subscription concept attached to it.
 *
 * Deliberately queried fresh on every call rather than cached on the
 * session, so a suspension or expiry takes effect on the very next request —
 * the same freshness guarantee `getSessionUser()` already provides for
 * account-level suspension.
 */
export async function subscriptionBlocksContent(user: SessionUser): Promise<boolean> {
  const sub = (
    await db.select().from(subscriptions).where(eq(subscriptions.userId, user.id)).orderBy(desc(subscriptions.createdAt)).limit(1)
  )[0];
  if (!sub) return false;
  return !canAccessContent(sub);
}
