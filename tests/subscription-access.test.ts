import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  canAccessContent,
  calculateRemainingDays,
  getSubscriptionStatus,
  type SubscriptionAccessFields,
} from "@/lib/subscriptions/access";
import { addCalendarMonths, calculateEndDate, endOfDayInZone, startOfDayInZone } from "@/lib/subscriptions/timezone";

/**
 * Pure-logic coverage for the central subscription/access service — no DB
 * required, since `getSubscriptionStatus`/`canAccessContent`/
 * `calculateRemainingDays` are deliberately pure functions of
 * (subscription fields, now). This is what directly exercises acceptance
 * scenarios 5, 6, 7 (partially), 9, 11 from the spec's §20 list, plus the
 * date-math correctness the rest of the system depends on.
 */

const DAY = 86_400_000;

describe("canAccessContent", () => {
  test("scenario 5: a future-start subscription blocks access before the start date", () => {
    const now = Date.UTC(2026, 0, 1);
    const sub: SubscriptionAccessFields = { status: "active", startAt: now + DAY, currentPeriodEnd: now + 30 * DAY };
    assert.equal(canAccessContent(sub, { now }), false);
  });

  test("scenario 6: an active subscription within its window grants access", () => {
    const now = Date.UTC(2026, 0, 15);
    const sub: SubscriptionAccessFields = { status: "active", startAt: Date.UTC(2026, 0, 1), currentPeriodEnd: Date.UTC(2026, 0, 31) };
    assert.equal(canAccessContent(sub, { now }), true);
  });

  test("scenario 7 (part 1): a subscription past its end date blocks access", () => {
    const now = Date.UTC(2026, 1, 5);
    const sub: SubscriptionAccessFields = { status: "active", startAt: Date.UTC(2026, 0, 1), currentPeriodEnd: Date.UTC(2026, 0, 31) };
    assert.equal(canAccessContent(sub, { now }), false);
  });

  test("scenario 9: suspended blocks access immediately even if the period is still valid", () => {
    const now = Date.UTC(2026, 0, 15);
    const sub: SubscriptionAccessFields = { status: "suspended", startAt: Date.UTC(2026, 0, 1), currentPeriodEnd: Date.UTC(2026, 5, 1) };
    assert.equal(canAccessContent(sub, { now }), false);
  });

  test("scenario 11: lifetime works with no end date", () => {
    const sub: SubscriptionAccessFields = { status: "lifetime", startAt: null, currentPeriodEnd: null };
    assert.equal(canAccessContent(sub, { now: Date.UTC(2099, 0, 1) }), true);
  });

  test("cancelled still grants access until the paid-through end date", () => {
    const now = Date.UTC(2026, 0, 15);
    const sub: SubscriptionAccessFields = { status: "cancelled", startAt: Date.UTC(2026, 0, 1), currentPeriodEnd: Date.UTC(2026, 0, 31) };
    assert.equal(canAccessContent(sub, { now }), true);
  });

  test("cancelled with a past end date blocks access", () => {
    const now = Date.UTC(2026, 1, 5);
    const sub: SubscriptionAccessFields = { status: "cancelled", startAt: Date.UTC(2026, 0, 1), currentPeriodEnd: Date.UTC(2026, 0, 31) };
    assert.equal(canAccessContent(sub, { now }), false);
  });

  test("a non-lifetime subscription with no end date configured does not grant unlimited access", () => {
    const sub: SubscriptionAccessFields = { status: "active", startAt: null, currentPeriodEnd: null };
    assert.equal(canAccessContent(sub, { now: Date.now() }), false);
  });

  test("access lasts through the full end-date calendar day, not just past midnight", () => {
    // currentPeriodEnd stored at some arbitrary instant on 2026-01-31; "now"
    // is later that same local day -- access must still hold.
    const timeZone = "Asia/Beirut";
    const periodEnd = startOfDayInZone("2026-01-31", timeZone)! + 3 * 3_600_000; // 03:00 local
    const laterSameDay = startOfDayInZone("2026-01-31", timeZone)! + 20 * 3_600_000; // 20:00 local
    const sub: SubscriptionAccessFields = { status: "active", startAt: null, currentPeriodEnd: periodEnd };
    assert.equal(canAccessContent(sub, { now: laterSameDay, timeZone }), true);
    const nextDay = endOfDayInZone("2026-01-31", timeZone)! + 1;
    assert.equal(canAccessContent(sub, { now: nextDay, timeZone }), false);
  });
});

describe("getSubscriptionStatus (display badge)", () => {
  test("scheduled before the start date", () => {
    const now = Date.UTC(2026, 0, 1);
    const sub: SubscriptionAccessFields = { status: "active", startAt: now + DAY, currentPeriodEnd: now + 30 * DAY };
    assert.equal(getSubscriptionStatus(sub, { now }), "scheduled");
  });

  test("expiring_soon within the configured threshold", () => {
    const now = Date.UTC(2026, 0, 25);
    const sub: SubscriptionAccessFields = { status: "active", startAt: Date.UTC(2026, 0, 1), currentPeriodEnd: Date.UTC(2026, 0, 31) };
    assert.equal(getSubscriptionStatus(sub, { now, expiringSoonDays: 7 }), "expiring_soon");
  });

  test("expired takes priority over a stale 'active' status column", () => {
    const now = Date.UTC(2026, 1, 5);
    const sub: SubscriptionAccessFields = { status: "active", startAt: Date.UTC(2026, 0, 1), currentPeriodEnd: Date.UTC(2026, 0, 31) };
    assert.equal(getSubscriptionStatus(sub, { now }), "expired");
  });

  test("suspended always wins regardless of dates", () => {
    const now = Date.UTC(2026, 0, 1);
    const sub: SubscriptionAccessFields = { status: "suspended", startAt: null, currentPeriodEnd: now + 365 * DAY };
    assert.equal(getSubscriptionStatus(sub, { now }), "suspended");
  });
});

describe("calculateRemainingDays", () => {
  test("lifetime has no remaining-days figure", () => {
    assert.equal(calculateRemainingDays({ status: "lifetime", startAt: null, currentPeriodEnd: null }), null);
  });

  test("never goes negative for an already-expired subscription", () => {
    const now = Date.UTC(2026, 2, 1);
    const sub: SubscriptionAccessFields = { status: "expired", startAt: null, currentPeriodEnd: Date.UTC(2026, 0, 31) };
    assert.equal(calculateRemainingDays(sub, { now }), 0);
  });

  test("counts whole days to the end-of-day boundary", () => {
    const timeZone = "Asia/Beirut";
    const now = startOfDayInZone("2026-01-01", timeZone)!;
    const sub: SubscriptionAccessFields = { status: "active", startAt: null, currentPeriodEnd: startOfDayInZone("2026-01-08", timeZone)! };
    assert.equal(calculateRemainingDays(sub, { now, timeZone }), 8);
  });
});

describe("calendar-correct duration math (spec §5: not '30 days per month')", () => {
  test("adding 1 month to Jan 31 lands on Feb 28 in a non-leap year", () => {
    const r = addCalendarMonths(2026, 1, 31, 1);
    assert.deepEqual(r, { year: 2026, month: 2, day: 28 });
  });

  test("adding 1 month to Jan 31 lands on Feb 29 in a leap year", () => {
    const r = addCalendarMonths(2028, 1, 31, 1);
    assert.deepEqual(r, { year: 2028, month: 2, day: 29 });
  });

  test("adding 12 months to Jan 31 lands exactly one year later on the same day", () => {
    const r = addCalendarMonths(2026, 1, 31, 12);
    assert.deepEqual(r, { year: 2027, month: 1, day: 31 });
  });

  test("3-month preset from a given start date uses calendar months, not 90 raw days", () => {
    const end = calculateEndDate("2026-01-31", "3m");
    assert.equal(end, "2026-04-30"); // April has 30 days; a naive 90-day add would land May 1
  });

  test("7-day preset adds exactly 7 calendar days", () => {
    assert.equal(calculateEndDate("2026-01-25", "7d"), "2026-02-01");
  });

  test("lifetime preset has no end date", () => {
    assert.equal(calculateEndDate("2026-01-01", "lifetime"), null);
  });
});

describe("timezone-correct end-of-day", () => {
  test("23:59:59.999 Beirut time is a distinct UTC instant from UTC midnight", () => {
    const beirutEnd = endOfDayInZone("2026-06-15", "Asia/Beirut")!;
    const utcEnd = endOfDayInZone("2026-06-15", "UTC")!;
    assert.notEqual(beirutEnd, utcEnd);
    // Beirut is ahead of UTC, so its 23:59:59.999 happens earlier in UTC terms.
    assert.ok(beirutEnd < utcEnd);
  });

  test("start-of-day precedes end-of-day for the same date and zone, less than a full day apart", () => {
    const start = startOfDayInZone("2026-06-15", "Asia/Beirut")!;
    const end = endOfDayInZone("2026-06-15", "Asia/Beirut")!;
    assert.ok(start < end);
    assert.ok(end - start < DAY);
  });
});
