// src/lib/courseUnitProgress.ts
//
// WHAT THE LEARNER HAS MASTERED, UNIT BY UNIT (Step 3, increment 2, 2026-09-26).
//
// `nh_curriculum_progress` records that a lesson was READ to its summary. This
// records something stronger and separate: that the learner passed the unit's
// CUMULATIVE test, interleaved across its five lessons, at UNIT_PASS_THRESHOLD.
// The two are deliberately different keys, because they are different claims and
// the whole owner report was that the app never distinguished them: _"never really
// capturing if the user is grasping subjects"_.
//
// EVERY ATTEMPT IS RECORDED, PASS AND FAIL, and the fail is the interesting one —
// `lessonAttempts.ts` makes the same argument and made it first: the event that
// proves a unit did not land is the one the gate's "on a fail nothing is recorded"
// rule would otherwise throw away. It is a DIAGNOSTIC and must never become
// credit: nothing here writes XP, `gc`, `vs`, the curriculum map or the retention
// ladder, and no scheduler reads it.
//
// `passedAt` IS WRITTEN ONCE. A later failed attempt records the attempt and
// leaves the pass alone — a unit is not un-mastered by a bad day, exactly as
// `lessonRetention` never un-passes a lesson on a failed re-check. What a later
// failure will do, once retention lands, is re-open practice.
//
// THE `insufficient` MARKER IS MEASURED, NOT INVENTED. A unit whose cached lesson
// bodies carry too few check items cannot be tested (`unitTestAvailability`), and
// a learner must not be walled out of their own course by an old payload. The
// screen records that it TRIED and could not assemble a test; the gate treats that
// unit as passable-through. Nothing infers it.

import { localDateStr } from './dateUtils';

export const COURSE_UNITS_KEY = 'nh_course_units';

export interface UnitAttempt {
  /** ISO date (local) of the attempt. */
  at: string;
  correct: number;
  total: number;
  passed: boolean;
}

export interface UnitRecord {
  /** First pass — written once, never rewritten, never removed. */
  passedAt?: string;
  /** Best score seen, for display. */
  bestCorrect?: number;
  bestTotal?: number;
  /** Attempts, oldest first, capped. */
  attempts?: UnitAttempt[];
  /** The unit's lesson bodies could not assemble a real test. Measured. */
  insufficient?: boolean;
}

export interface CourseUnitsStore {
  units: Record<string, UnitRecord>;
}

/**
 * Attempts kept per unit. Like `lessonAttempts`, the EARLIEST are the signal (did
 * this unit land the first time it was tested), so the cap drops the newest.
 */
export const MAX_UNIT_ATTEMPTS = 10;

const EMPTY: CourseUnitsStore = { units: {} };

function readRaw(): CourseUnitsStore {
  try {
    const raw = localStorage.getItem(COURSE_UNITS_KEY);
    if (!raw) return { units: {} };
    const v = JSON.parse(raw) as CourseUnitsStore;
    if (!v || typeof v !== 'object' || !v.units || typeof v.units !== 'object')
      return { units: {} };
    return { units: v.units };
  } catch {
    return { units: {} };
  }
}

export function readCourseUnits(): CourseUnitsStore {
  return readRaw();
}

export function writeCourseUnits(store: CourseUnitsStore): void {
  try {
    localStorage.setItem(COURSE_UNITS_KEY, JSON.stringify({ units: store.units || {} }));
  } catch {
    /* a full quota must never break a finished test */
  }
}

/** Unit ids the learner has PASSED. */
export function passedUnits(store: CourseUnitsStore = readRaw()): Set<string> {
  return new Set(
    Object.entries(store.units)
      .filter(([, r]) => !!r && typeof r.passedAt === 'string' && r.passedAt.length > 0)
      .map(([id]) => id),
  );
}

/** Unit ids whose test could not be assembled from the lesson bodies. */
export function insufficientUnits(store: CourseUnitsStore = readRaw()): Set<string> {
  return new Set(
    Object.entries(store.units)
      .filter(([, r]) => !!r && r.insufficient === true)
      .map(([id]) => id),
  );
}

export function unitRecord(unitId: string, store: CourseUnitsStore = readRaw()): UnitRecord | null {
  return store.units[unitId] ?? null;
}

/**
 * Record a finished unit test.
 *
 * Returns the updated record. `passedAt` is set only on the first pass; a later
 * attempt adds to `attempts` and can improve `best*` but cannot take a pass away.
 */
export function recordUnitTest(
  unitId: string,
  correct: number,
  total: number,
  passed: boolean,
  isoDate: string = localDateStr(),
): UnitRecord | null {
  if (!unitId || !Number.isFinite(correct) || !Number.isFinite(total) || total <= 0) return null;
  const store = readRaw();
  const prev = store.units[unitId] ?? {};
  const attempts = [...(prev.attempts ?? []), { at: isoDate, correct, total, passed }];
  const next: UnitRecord = {
    ...prev,
    // THE CAP DROPS THE NEWEST, keeping the first attempts — the same reason
    // lessonAttempts does: a learner grinding a unit for the eleventh time says
    // nothing new, and the first attempt is the whole acquisition signal.
    attempts: attempts.slice(0, MAX_UNIT_ATTEMPTS),
  };
  if (passed && !prev.passedAt) next.passedAt = isoDate;
  const prevRatio = prev.bestTotal ? (prev.bestCorrect ?? 0) / prev.bestTotal : -1;
  if (total > 0 && correct / total > prevRatio) {
    next.bestCorrect = correct;
    next.bestTotal = total;
  }
  store.units[unitId] = next;
  writeCourseUnits(store);
  return next;
}

/** Record that this unit's lesson bodies cannot assemble a test. */
export function markUnitTestInsufficient(unitId: string): void {
  if (!unitId) return;
  const store = readRaw();
  const prev = store.units[unitId] ?? {};
  if (prev.insufficient === true) return;
  store.units[unitId] = { ...prev, insufficient: true };
  writeCourseUnits(store);
}

/**
 * Merge a remote store into local. ADDITIVE, like every other merge here:
 *
 *  - a unit passed on either device stays passed, and the EARLIER `passedAt`
 *    wins (a second device cannot postpone when you mastered something);
 *  - the better score wins;
 *  - attempts are HISTORY, unioned by (at, correct, total, passed) and kept
 *    oldest-first, so a device that saw the FIRST attempt contributes it even
 *    when the other has later ones;
 *  - `insufficient` is sticky only while neither side has a pass — a device that
 *    managed to assemble and pass the test is better evidence than one that
 *    could not, so a real pass clears the marker everywhere.
 */
export function mergeCourseUnits(local: CourseUnitsStore, remote: unknown): CourseUnitsStore {
  const out: Record<string, UnitRecord> = {};
  const l = local?.units && typeof local.units === 'object' ? local.units : {};
  const rStore = remote as CourseUnitsStore | null | undefined;
  const r = rStore?.units && typeof rStore.units === 'object' ? rStore.units : {};
  for (const id of new Set([...Object.keys(l), ...Object.keys(r)])) {
    const a = l[id];
    const b = r[id];
    if (!a) {
      if (b) out[id] = b;
      continue;
    }
    if (!b) {
      out[id] = a;
      continue;
    }
    const passedAt =
      a.passedAt && b.passedAt
        ? a.passedAt < b.passedAt
          ? a.passedAt
          : b.passedAt
        : a.passedAt || b.passedAt;
    const aRatio = a.bestTotal ? (a.bestCorrect ?? 0) / a.bestTotal : -1;
    const bRatio = b.bestTotal ? (b.bestCorrect ?? 0) / b.bestTotal : -1;
    const best = bRatio > aRatio ? b : a;
    const seen = new Set<string>();
    const attempts: UnitAttempt[] = [];
    for (const at of [...(a.attempts ?? []), ...(b.attempts ?? [])]) {
      if (!at || typeof at.at !== 'string') continue;
      const key = `${at.at}|${at.correct}|${at.total}|${at.passed ? 1 : 0}`;
      if (seen.has(key)) continue;
      seen.add(key);
      attempts.push(at);
    }
    attempts.sort((x, y) => (x.at < y.at ? -1 : x.at > y.at ? 1 : 0));
    const merged: UnitRecord = { attempts: attempts.slice(0, MAX_UNIT_ATTEMPTS) };
    if (passedAt) merged.passedAt = passedAt;
    if (best.bestTotal) {
      merged.bestCorrect = best.bestCorrect;
      merged.bestTotal = best.bestTotal;
    }
    // A pass anywhere outranks an "I could not build a test" anywhere.
    if (!passedAt && (a.insufficient || b.insufficient)) merged.insufficient = true;
    out[id] = merged;
  }
  return { units: out };
}

/** For the snapshot: the store, or undefined when empty so a fresh device cannot
 *  clobber server history (the nh_journey pattern). */
export function courseUnitsOrUndef(): CourseUnitsStore | undefined {
  const s = readRaw();
  return Object.keys(s.units).length > 0 ? s : undefined;
}

// ── Which unit the test screen is about ─────────────────────────────────────
//
// EPHEMERAL NAVIGATION STATE, never progress — sessionStorage, and separate from
// the store above on purpose. Read NON-DESTRUCTIVELY, unlike `lessonLookup`'s
// one-shot: a unit test survives a remount (an error boundary, a re-render, a
// tab away and back), and a consumed-on-read handoff would drop the learner out
// of a test they were halfway through. It is cleared when they leave.

export const UNIT_TEST_REQUEST_KEY = 'nh_unit_test';

export function requestUnitTest(unitId: string): void {
  if (!unitId) return;
  try {
    sessionStorage.setItem(UNIT_TEST_REQUEST_KEY, unitId);
  } catch {
    /* the screen will report that it has no unit, rather than crash */
  }
}

export function readUnitTestRequest(): string | null {
  try {
    return sessionStorage.getItem(UNIT_TEST_REQUEST_KEY) || null;
  } catch {
    return null;
  }
}

export function clearUnitTestRequest(): void {
  try {
    sessionStorage.removeItem(UNIT_TEST_REQUEST_KEY);
  } catch {
    /* nothing more to do */
  }
}

export { EMPTY as EMPTY_COURSE_UNITS };
