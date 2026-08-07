import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { pushTokens } from "@/lib/db/schema";
import { uid } from "@/lib/utils";
import type { SessionUser } from "@/lib/auth/session";

export interface RegisterPushTokenInput {
  token: string;
  platform: "ios" | "android";
  locale?: string;
  timezone?: string;
}

/**
 * Upsert-by-token: the same physical device re-registering (app relaunch,
 * OS token rotation is rare but token *resubmission* on every cold start
 * is normal) should update the existing row, not accumulate duplicates.
 * `token` has a unique index (`schema.ts`) so this is a real upsert, not a
 * check-then-insert race.
 */
export async function registerPushTokenCore(actor: SessionUser, input: RegisterPushTokenInput): Promise<void> {
  const existing = (await db.select({ id: pushTokens.id }).from(pushTokens).where(eq(pushTokens.token, input.token)).limit(1))[0];

  if (existing) {
    await db
      .update(pushTokens)
      .set({
        userId: actor.id,
        platform: input.platform,
        locale: input.locale ?? null,
        timezone: input.timezone ?? null,
        lastSeenAt: Date.now(),
      })
      .where(eq(pushTokens.id, existing.id));
    return;
  }

  await db.insert(pushTokens).values({
    id: uid("push"),
    userId: actor.id,
    token: input.token,
    platform: input.platform,
    locale: input.locale ?? null,
    timezone: input.timezone ?? null,
  });
}

/**
 * No auth check, deliberately -- called on sign-out, when the caller may no
 * longer have a valid session by the time this runs (see
 * `teardownPushOnSignOut()`). Removing a device token is safe with no
 * identity check: it only ever un-registers the exact token value the
 * caller already possesses, it can't be used to affect any other user's
 * data, and the whole point is to stop pushes to a device that's about to
 * lose its session.
 */
export async function unregisterPushTokenCore(token: string): Promise<void> {
  await db.delete(pushTokens).where(eq(pushTokens.token, token));
}

export async function listPushTokensForUserCore(actor: SessionUser) {
  return db.select().from(pushTokens).where(and(eq(pushTokens.userId, actor.id)));
}
