/**
 * The single, centralized source of subscription/access truth (spec §8:
 * "Do not duplicate subscription logic across multiple components"). Every
 * place that needs to know "can this user see paid content", "what badge do
 * I show", or "how many days are left" calls into this file — never re-derives
 * it from raw `subscriptions` columns inline.
 *
 * This is layered ON TOP OF, and never replaces, the existing account-level
 * gate in `src/lib/auth/session.ts` (`getSessionUser` already blocks sign-in
 * for a suspended account or a past `users.accessExpiresAt`). That gate stays
 * untouched — it is the coarse "can this account do anything at all" check.
 * This module is the finer-grained "does THIS subscription grant access to
 * paid content" check, queried fresh (never cached on the session) so a
 * mid-session suspension or expiry takes effect on the very next content
 * request, exactly like the account-level gate already does for sign-in.
 */
import { DEFAULT_TIMEZONE, endOfDayForInstant, zonedYmd } from "./timezone";

export type SubscriptionStatus = "trial" | "active" | "suspended" | "cancelled" | "lifetime" | "expired";

export interface SubscriptionAccessFields {
  status: SubscriptionStatus;
  /** Null = access has always been open (no scheduled start). */
  startAt: number | null;
  /** Null + status "lifetime" = never expires. Null + any other status is
   *  treated as "no access window configured" (blocks access) rather than
   *  silently granted forever — a subscription must be explicitly Lifetime. */
  currentPeriodEnd: number | null;
}

export type SubscriptionDisplayStatus =
  | "scheduled"
  | "trial"
  | "active"
  | "expiring_soon"
  | "expired"
  | "suspended"
  | "cancelled"
  | "lifetime";

export interface AccessOptions {
  now?: number;
  timeZone?: string;
  /** Days-until-end threshold for the "expiring soon" badge (spec §19,
   *  admin-configurable; defaults to 7 to match the tightest of the two
   *  notification windows in spec §14). */
  expiringSoonDays?: number;
}

function resolve(opts: AccessOptions | undefined) {
  return {
    now: opts?.now ?? Date.now(),
    timeZone: opts?.timeZone ?? DEFAULT_TIMEZONE,
    expiringSoonDays: opts?.expiringSoonDays ?? 7,
  };
}

/** True once `now` has passed the END of the local calendar day that
 *  `currentPeriodEnd` falls on — i.e. treats the stored instant as "some
 *  point on day D" and re-derives the true 23:59:59.999 boundary, so a
 *  subscription created with a period-end at, say, noon still grants access
 *  through the rest of that day. */
function isPastPeriodEnd(currentPeriodEnd: number, now: number, timeZone: string): boolean {
  return now > endOfDayForInstant(currentPeriodEnd, timeZone);
}

/**
 * The real access gate for paid content (spec §8's `canAccessContent`).
 * Deliberately does NOT special-case "trial" vs "active" vs "cancelled" —
 * all three grant access as long as the window is open; only the *display*
 * status (`getSubscriptionStatus`) distinguishes them for the UI.
 */
export function canAccessContent(sub: SubscriptionAccessFields, opts?: AccessOptions): boolean {
  const { now, timeZone } = resolve(opts);
  if (sub.status === "suspended") return false; // blocked immediately, regardless of dates
  if (sub.status === "lifetime") return true;
  if (sub.status === "expired") return false;
  if (sub.startAt !== null && now < sub.startAt) return false; // scheduled, not started yet
  if (sub.currentPeriodEnd === null) return false; // no window and not Lifetime -> no access
  if (isPastPeriodEnd(sub.currentPeriodEnd, now, timeZone)) return false;
  return true; // trial | active | cancelled-but-still-within-paid-period
}

/**
 * The display status shown as a badge (spec §4/§8). Computed fresh from
 * dates every time, NEVER trusted from a stale `status` column alone, because
 * "expired" and "expiring soon" are time-based facts that change without any
 * admin action.
 */
export function getSubscriptionStatus(sub: SubscriptionAccessFields, opts?: AccessOptions): SubscriptionDisplayStatus {
  const { now, timeZone, expiringSoonDays } = resolve(opts);
  if (sub.status === "suspended") return "suspended";
  if (sub.status === "lifetime") return "lifetime";
  if (sub.startAt !== null && now < sub.startAt) return "scheduled";
  if (sub.status === "expired") return "expired";
  if (sub.currentPeriodEnd !== null && isPastPeriodEnd(sub.currentPeriodEnd, now, timeZone)) return "expired";
  if (sub.status === "cancelled") return "cancelled";
  if (sub.currentPeriodEnd !== null) {
    const dayMs = 86_400_000;
    const remaining = endOfDayForInstant(sub.currentPeriodEnd, timeZone) - now;
    if (remaining <= expiringSoonDays * dayMs) return "expiring_soon";
  }
  if (sub.status === "trial") return "trial";
  return "active";
}

/** Whole days remaining until access ends, or `null` for Lifetime / no window
 *  configured. Never negative — an expired subscription reads 0, not -3. */
export function calculateRemainingDays(sub: SubscriptionAccessFields, opts?: AccessOptions): number | null {
  const { now, timeZone } = resolve(opts);
  if (sub.status === "lifetime" || sub.currentPeriodEnd === null) return null;
  const end = endOfDayForInstant(sub.currentPeriodEnd, timeZone);
  const diff = end - now;
  if (diff <= 0) return 0;
  return Math.ceil(diff / 86_400_000);
}

/**
 * Feature-level gate (spec §8/§9): access requires BOTH an open subscription
 * window (`canAccessContent`) AND the plan's entitlements including the
 * feature. `planFeatures` is the plan's `features` JSON blob — entitlements
 * are never hard-coded against a plan *name* in calling code.
 */
export function canAccessFeature(
  sub: SubscriptionAccessFields,
  planFeatures: Record<string, unknown> | null | undefined,
  featureKey: string,
  opts?: AccessOptions,
): boolean {
  if (!canAccessContent(sub, opts)) return false;
  if (!planFeatures) return false;
  const value = planFeatures[featureKey];
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value > 0;
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value);
}

export {
  DEFAULT_TIMEZONE,
  endOfDayInZone,
  startOfDayInZone,
  endOfDayForInstant,
  addCalendarMonths,
  calculateEndDate,
  zonedYmd,
  type DurationPreset,
} from "./timezone";
