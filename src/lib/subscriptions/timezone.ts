/**
 * Timezone-aware date math with no external dependency (no `date-fns-tz` /
 * `luxon` in this project's `package.json`, and the spec explicitly says not
 * to add a library unless necessary — `Intl.DateTimeFormat` is enough for
 * "what UTC instant is 23:59:59.999 local on date D in zone Z").
 *
 * Everything in the database is UTC epoch milliseconds (see schema.ts). This
 * module is the ONLY place that converts between a human "YYYY-MM-DD in some
 * timezone" and that stored UTC instant — spec §18: "avoid errors from
 * daylight-saving differences" and "the same central source used for access
 * verification" for both storing dates and computing remaining days.
 */

export const DEFAULT_TIMEZONE = "Asia/Beirut";

/** Offset (ms) to ADD to a UTC instant to get local wall-clock time in `timeZone`. */
function offsetMs(timeZone: string, utcInstantMs: number): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = dtf.formatToParts(new Date(utcInstantMs)).reduce<Record<string, string>>((acc, p) => {
    if (p.type !== "literal") acc[p.type] = p.value;
    return acc;
  }, {});
  const hour = parts.hour === "24" ? 0 : Number(parts.hour);
  // `Intl.DateTimeFormat` only gives whole seconds -- milliseconds are
  // timezone-invariant (a fractional second is the same fraction in every
  // zone), so they're carried over from the input rather than reconstructed,
  // or a sub-second input systematically loses up to 999ms of offset.
  const ms = ((utcInstantMs % 1000) + 1000) % 1000;
  const asIfUtc = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), hour, Number(parts.minute), Number(parts.second), ms);
  return asIfUtc - utcInstantMs;
}

/** The `{year, month, day}` (1-indexed month) local calendar date in `timeZone`
 *  for a given UTC instant — e.g. "which day is it right now in Beirut". */
export function zonedYmd(utcInstantMs: number, timeZone: string = DEFAULT_TIMEZONE): { year: number; month: number; day: number } {
  const dtf = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" });
  const parts = dtf.formatToParts(new Date(utcInstantMs)).reduce<Record<string, string>>((acc, p) => {
    if (p.type !== "literal") acc[p.type] = p.value;
    return acc;
  }, {});
  return { year: Number(parts.year), month: Number(parts.month), day: Number(parts.day) };
}

/** UTC instant (ms) for local wall-clock `HH:mm:ss.mmm` on `{year,month,day}`
 *  in `timeZone`. Two passes handle the (rare) DST-transition edge case where
 *  the offset at the guessed instant differs from the offset that actually
 *  applies at the resolved instant. */
function zonedInstant(
  y: number,
  m: number,
  d: number,
  h: number,
  min: number,
  s: number,
  ms: number,
  timeZone: string,
): number {
  const guess = Date.UTC(y, m - 1, d, h, min, s, ms);
  const off1 = offsetMs(timeZone, guess);
  const pass1 = guess - off1;
  const off2 = offsetMs(timeZone, pass1);
  return guess - off2;
}

/** UTC instant of 23:59:59.999 local time on `dateStr` ("YYYY-MM-DD") in
 *  `timeZone` — the project's adopted rule for "access ends at the end of
 *  the end date" (spec §18). */
export function endOfDayInZone(dateStr: string, timeZone: string = DEFAULT_TIMEZONE): number | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!match) return null;
  const [, y, mo, d] = match;
  return zonedInstant(Number(y), Number(mo), Number(d), 23, 59, 59, 999, timeZone);
}

/** UTC instant of 00:00:00.000 local time on `dateStr` in `timeZone` — used
 *  for "access has not started yet" (start-date) comparisons. */
export function startOfDayInZone(dateStr: string, timeZone: string = DEFAULT_TIMEZONE): number | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!match) return null;
  const [, y, mo, d] = match;
  return zonedInstant(Number(y), Number(mo), Number(d), 0, 0, 0, 0, timeZone);
}

/** Same UTC instant, re-expressed as an end-of-day instant on the SAME local
 *  calendar day (used when extending "from an existing end-date instant"
 *  rather than from a fresh "YYYY-MM-DD" string). */
export function endOfDayForInstant(utcInstantMs: number, timeZone: string = DEFAULT_TIMEZONE): number {
  const { year, month, day } = zonedYmd(utcInstantMs, timeZone);
  return zonedInstant(year, month, day, 23, 59, 59, 999, timeZone);
}

/**
 * Calendar-correct "add N months" (spec §5: "do not treat every month as 30
 * days"). Clamps to the last day of the target month (Jan 31 + 1 month = Feb
 * 28 or 29, never "Mar 3"). Operates on local calendar dates, not raw ms.
 */
export function addCalendarMonths(y: number, m: number, d: number, months: number): { year: number; month: number; day: number } {
  const totalMonths = (m - 1) + months;
  const year = y + Math.floor(totalMonths / 12);
  const month = ((totalMonths % 12) + 12) % 12; // 0-indexed
  const daysInTargetMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  return { year, month: month + 1, day: Math.min(d, daysInTargetMonth) };
}

export type DurationPreset = "7d" | "14d" | "30d" | "3m" | "6m" | "1y" | "lifetime";

export const DURATION_PRESET_LABELS: Record<DurationPreset, { days?: number; months?: number }> = {
  "7d": { days: 7 },
  "14d": { days: 14 },
  "30d": { days: 30 },
  "3m": { months: 3 },
  "6m": { months: 6 },
  "1y": { months: 12 },
  lifetime: {},
};

/**
 * Computes the end date (as a "YYYY-MM-DD" string, so callers can pass it
 * straight back through `endOfDayInZone`) for a duration preset applied from
 * `startDateStr`. Day-based presets add calendar days; month/year presets use
 * `addCalendarMonths` so "start Jan 31 + 1 year" lands on Jan 31 next year,
 * not 365 days later.
 */
export function calculateEndDate(startDateStr: string, preset: DurationPreset): string | null {
  if (preset === "lifetime") return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(startDateStr);
  if (!match) return null;
  const [, ys, ms, ds] = match;
  const y = Number(ys), m = Number(ms), d = Number(ds);
  const spec = DURATION_PRESET_LABELS[preset];
  if (spec.months) {
    const { year, month, day } = addCalendarMonths(y, m, d, spec.months);
    return `${year.toString().padStart(4, "0")}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  }
  const days = spec.days ?? 0;
  const asUtcNoon = Date.UTC(y, m - 1, d, 12, 0, 0); // noon avoids any DST-edge date-shift from pure day arithmetic
  const shifted = new Date(asUtcNoon + days * 86_400_000);
  return `${shifted.getUTCFullYear().toString().padStart(4, "0")}-${(shifted.getUTCMonth() + 1).toString().padStart(2, "0")}-${shifted.getUTCDate().toString().padStart(2, "0")}`;
}
