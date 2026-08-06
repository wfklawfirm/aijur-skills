import "server-only";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { and, eq, isNull } from "drizzle-orm";
import { db } from "@/lib/db";
import { memberships, organizations, sessions, users } from "@/lib/db/schema";

const COOKIE = "aijur_session";
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30;

function secret(): string {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 24) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("SESSION_SECRET must be set to a long random value in production.");
    }
    return "dev-only-insecure-session-secret-value";
  }
  return s;
}

/** `<sessionId>.<hmac>` — the id alone is useless without the signature. */
function sign(sessionId: string): string {
  const mac = createHmac("sha256", secret()).update(sessionId).digest("base64url");
  return `${sessionId}.${mac}`;
}

function unsign(token: string): string | null {
  const idx = token.lastIndexOf(".");
  if (idx <= 0) return null;
  const id = token.slice(0, idx);
  const mac = token.slice(idx + 1);
  const expected = createHmac("sha256", secret()).update(id).digest("base64url");
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  return id;
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  locale: "ar" | "en";
  systemRole: "learner" | "author" | "reviewer" | "admin";
  /** Admin Dashboard role (spec §1) -- see `PLATFORM_ROLE_PERMISSIONS` in rbac.ts. */
  platformRole: "super_admin" | "admin" | "support" | null;
  sessionId: string;
  organization: { id: string; name: string; slug: string; role: string } | null;
}

export async function createSession(
  userId: string,
  organizationId: string | null,
  userAgent?: string,
): Promise<void> {
  const id = randomBytes(32).toString("base64url");
  const expiresAt = Date.now() + MAX_AGE_MS;
  await db.insert(sessions).values({ id, userId, organizationId, expiresAt, userAgent });
  const store = await cookies();
  store.set(COOKIE, sign(id), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: Math.floor(MAX_AGE_MS / 1000),
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (token) {
    const id = unsign(token);
    if (id) await db.update(sessions).set({ revokedAt: Date.now() }).where(eq(sessions.id, id));
  }
  store.delete(COOKIE);
}

/** Revoke every session for a user — used by "sign out everywhere". */
export async function revokeAllSessions(userId: string): Promise<void> {
  await db
    .update(sessions)
    .set({ revokedAt: Date.now() })
    .where(and(eq(sessions.userId, userId), isNull(sessions.revokedAt)));
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
  const id = unsign(token);
  if (!id) return null;

  const rows = await db
    .select({
      session: sessions,
      user: users,
      membership: memberships,
      org: organizations,
    })
    .from(sessions)
    .innerJoin(users, eq(users.id, sessions.userId))
    .leftJoin(organizations, eq(organizations.id, sessions.organizationId))
    .leftJoin(
      memberships,
      and(eq(memberships.userId, sessions.userId), eq(memberships.organizationId, sessions.organizationId)),
    )
    .where(eq(sessions.id, id))
    .limit(1);

  const row = rows[0];
  if (!row) return null;
  if (row.session.revokedAt) return null;
  if (row.session.expiresAt < Date.now()) return null;
  if (row.user.deletedAt) return null;

  // A platform-owner suspension or an expired access window must take effect
  // immediately, not just block the next sign-in -- someone already signed
  // in when the owner suspends them should be kicked out on their very next
  // request. Revoking here (rather than only in the mutating action) also
  // catches the pure-time-passing case: a session that was fine yesterday
  // but whose `accessExpiresAt` has since passed with no admin action at all.
  if (row.user.accountStatus === "suspended" || (row.user.accessExpiresAt && row.user.accessExpiresAt < Date.now())) {
    await db.update(sessions).set({ revokedAt: Date.now() }).where(eq(sessions.id, row.session.id));
    return null;
  }

  return {
    id: row.user.id,
    email: row.user.email,
    name: row.user.name,
    locale: row.user.locale,
    systemRole: row.user.systemRole,
    platformRole: row.user.platformRole ?? null,
    sessionId: row.session.id,
    organization:
      row.org && row.membership
        ? { id: row.org.id, name: row.org.name, slug: row.org.slug, role: row.membership.role }
        : null,
  };
}

/** Throws if unauthenticated. Use in route handlers and server actions. */
export async function requireUser(): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user) {
    const { logAccessDenial } = await import("./audit");
    await logAccessDenial(null, "unauthenticated");
    throw new AuthError("unauthenticated");
  }
  return user;
}

export class AuthError extends Error {
  constructor(public code: "unauthenticated" | "forbidden") {
    super(code);
    this.name = "AuthError";
  }
}
