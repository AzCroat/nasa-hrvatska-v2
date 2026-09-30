// src/lib/unitRetention.ts
//
// MASTERY IS RETENTION, NOT ONE SITTING (Step 3, increment 5, 2026-09-26).
//
// The owner's design closes with this: _"mastery confirmed LATER by retention at 7
// and 30 days, where a failed re-check re-opens practice but does NOT
// un-advance."_ Increments 2–4 built the bar; passing it on one afternoon is
// evidence of learning, and it is not yet evidence that the learning STAYED. Those
// are different claims and the app has spent this whole overhaul learning not to
// conflate them.
//
// WHY 7 AND 30. Spaced retrieval (Roediger & Karpicke) and the expanding-interval
// schedule `lessonRetention` already uses (3, 10, 30, then 90) — this is the same
// mechanism one level up, at unit scale, with the first interval later because a
// unit is five lessons' worth of material and its test is fifteen items. Two
// intervals, not four, because the unit test is the instrument and a fifth
// fifteen-item sitting per unit would cost more attention than it buys.
//
// A FAILED RE-CHECK NEVER UN-ADVANCES, and that is the load-bearing rule.
// `lessonRetention` states it for a lesson ("a lesson is NEVER un-passed; the
// ladder is the only thing that moves") and the same applies here: the learner did
// pass the bar, on evidence, and taking that away would be the app changing its
// mind about something it measured. What a failure moves is the LADDER — back to
// stage 0, due again tomorrow — and the unit stops being called `mastered` until
// the ladder is climbed again.
//
// NOTHING HERE IS A GATE. A due re-check preempts the next lesson in the session
// (retention is time-sensitive, the argument `retentionSlot` makes for sitting
// beside the SRS slot) but it never locks a unit, because the course has already
// opened what the learner earned.

/** Days after the bar was met, then after each held re-check. */
export const UNIT_RECHECK_INTERVALS: readonly number[] = [7, 30];

/** A failed re-check returns the unit tomorrow, from stage 0. */
export const RECHECK_RETRY_DAYS = 1;

export interface UnitRecheck {
  /** How many intervals have been held. `UNIT_RECHECK_INTERVALS.length` = done. */
  stage: number;
  /** ISO date the next re-check is due. */
  dueAt: string;
  /** ISO date the last re-check was answered, pass or fail. */
  lastAt?: string;
  /** ISO date the whole ladder was completed. */
  heldAt?: string;
  /** How many check-ups have been sat, pass or fail. It seeds the paper: a failed
   *  check-up returns the next day at the SAME stage, so a seed built from the stage
   *  alone served the paper that had just slipped (walked in a browser, sweep 225). */
  sat?: number;
}

/**
 * Calendar arithmetic on a `YYYY-MM-DD` string.
 *
 * NO `toISOString`, and no `new Date()` — `localDayBoundary.test.ts` forbids the
 * former in `src/` and it was right to flag the first version of this function. That
 * version was calendar-safe by accident (it anchored the string at UTC midnight, so
 * adding 7 days to '2026-09-01' gave '2026-09-08' in every timezone), but a guard
 * against a class this app has shipped five times should not need a reader to work
 * that out. Formatting the UTC parts by hand is shorter, obviously
 * timezone-independent, and needs no exemption.
 *
 * The DATES themselves come from `localDateStr`, which is the project convention:
 * what day it is, is a local question; how many days after that, is not.
 */
function addDays(iso: string, days: number): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const t = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]) + days);
  if (Number.isNaN(t)) return iso;
  const d = new Date(t);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

/** The ladder a unit starts on the day it meets the bar. */
export function startRecheckLadder(metAt: string): UnitRecheck {
  return { stage: 0, dueAt: addDays(metAt, UNIT_RECHECK_INTERVALS[0]!) };
}

/** Is a re-check due today? */
export function recheckDue(r: UnitRecheck | undefined, today: string): boolean {
  if (!r) return false;
  if (r.stage >= UNIT_RECHECK_INTERVALS.length) return false;
  return r.dueAt <= today;
}

/** Has the whole ladder been held? */
export function retentionHeld(r: UnitRecheck | undefined): boolean {
  return !!r && r.stage >= UNIT_RECHECK_INTERVALS.length;
}

/**
 * The ladder after a re-check.
 *
 * Passed: climb one rung and schedule the next interval; at the top, record
 * `heldAt` and stop. Failed: back to stage 0, due tomorrow — and the unit's
 * advancement is untouched, which is this module's whole contract.
 */
export function afterRecheck(
  r: UnitRecheck | undefined,
  passed: boolean,
  today: string,
): UnitRecheck {
  const current = r ?? startRecheckLadder(today);
  const sat = (current.sat ?? 0) + 1;
  if (!passed) {
    return { stage: 0, dueAt: addDays(today, RECHECK_RETRY_DAYS), lastAt: today, sat };
  }
  const stage = Math.min(current.stage + 1, UNIT_RECHECK_INTERVALS.length);
  if (stage >= UNIT_RECHECK_INTERVALS.length) {
    return { stage, dueAt: today, lastAt: today, heldAt: today, sat };
  }
  return { stage, dueAt: addDays(today, UNIT_RECHECK_INTERVALS[stage]!), lastAt: today, sat };
}

/**
 * Merge two devices' ladders.
 *
 * THE LATER CHECK WINS THE LADDER and the EARLIER `heldAt` is kept — the rule
 * `mergeLessonRetention` states: new evidence outranks old about the schedule,
 * while when something was achieved is not postponable by a second device. A ladder
 * from a device that has not checked recently can never roll a held unit back.
 */
export function mergeRecheck(
  a: UnitRecheck | undefined,
  b: UnitRecheck | undefined,
): UnitRecheck | undefined {
  if (!a) return b;
  if (!b) return a;
  const later = (a.lastAt ?? '') >= (b.lastAt ?? '') ? a : b;
  const out: UnitRecheck = { stage: later.stage, dueAt: later.dueAt };
  if (later.lastAt) out.lastAt = later.lastAt;
  const held =
    a.heldAt && b.heldAt ? (a.heldAt < b.heldAt ? a.heldAt : b.heldAt) : a.heldAt || b.heldAt;
  if (held) out.heldAt = held;
  // Sittings are a count, so the larger one is the truth (a finite number only).
  const sat = Math.max(
    Number.isFinite(a.sat) ? (a.sat as number) : 0,
    Number.isFinite(b.sat) ? (b.sat as number) : 0,
  );
  if (sat > 0) out.sat = sat;
  // A ladder that has been held cannot present as unheld because the other device
  // is behind: `retentionHeld` reads the stage, so it has to agree with `heldAt`.
  if (out.heldAt) out.stage = Math.max(out.stage, UNIT_RECHECK_INTERVALS.length);
  return out;
}
