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
import {
  afterRecheck,
  mergeRecheck,
  recheckDue,
  retentionHeld,
  startRecheckLadder,
  type UnitRecheck,
} from './unitRetention';

export const COURSE_UNITS_KEY = 'nh_course_units';

export interface UnitAttempt {
  /** ISO date (local) of the attempt. */
  at: string;
  correct: number;
  total: number;
  passed: boolean;
}

export interface UnitProduction {
  /** Written task graded — ISO date and the 0–100 rubric score. */
  wroteAt?: string;
  writeScore?: number;
  /** Spoken task graded — ISO date and the 0–1 rubric overall. */
  spokeAt?: string;
  speakScore?: number;
  /**
   * The evaluator could not answer. MEASURED, not inferred: the learner produced
   * and the grader refused (budget paused, daily quota, offline, a 502). The gate
   * lets such a unit through for the same reason `insufficient` does — a learner
   * must not be walled out of their own course by a service they do not control —
   * and a later successful grade clears it.
   */
  unavailable?: boolean;
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
  /** The two production tasks — see `UnitProduction`. */
  production?: UnitProduction;
  /** The retention ladder, started the day the unit met the bar. */
  recheck?: UnitRecheck;
}

/**
 * The end-of-level review (2026-09-27): mixed practice across a level's six units,
 * served once as the learner crosses into the next level — "so the learner is
 * prepared rather than just tested" before the Level Check. PRACTICE, not a gate:
 * it records that it was done and how the first tries went, and blocks nothing.
 */
export interface LevelReviewRecord {
  /** ISO date (local) the review was first finished. Written once. */
  doneAt: string;
  /** Items right on the FIRST try, and how many there were — the readiness signal. */
  firstTryCorrect: number;
  total: number;
  /**
   * The app TRIED to build this review and the cached lesson bodies could not make
   * one (the unit test's `insufficient`, one level up). Recorded so the course moves
   * on rather than serving an unservable review every day; a real review later
   * replaces it everywhere.
   */
  unavailable?: true;
}

export interface CourseUnitsStore {
  units: Record<string, UnitRecord>;
  /** Level (A1…C2) → its review. Absent until a review is finished. */
  reviews?: Record<string, LevelReviewRecord>;
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
    const reviews = v.reviews && typeof v.reviews === 'object' ? v.reviews : undefined;
    return reviews ? { units: v.units, reviews } : { units: v.units };
  } catch {
    return { units: {} };
  }
}

export function readCourseUnits(): CourseUnitsStore {
  return readRaw();
}

export function writeCourseUnits(store: CourseUnitsStore): void {
  try {
    const out: CourseUnitsStore = { units: store.units || {} };
    if (store.reviews && Object.keys(store.reviews).length > 0) out.reviews = store.reviews;
    localStorage.setItem(COURSE_UNITS_KEY, JSON.stringify(out));
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

/**
 * Record a graded production task.
 *
 * A successful grade CLEARS the `unavailable` marker: the learner reached the
 * evaluator, so whatever refused them before is no longer refusing.
 */
export function recordUnitProduction(
  unitId: string,
  kind: 'write' | 'speak',
  score: number,
  isoDate: string = localDateStr(),
): UnitRecord | null {
  if (!unitId || !Number.isFinite(score)) return null;
  const store = readRaw();
  const prev = store.units[unitId] ?? {};
  const prod: UnitProduction = { ...(prev.production ?? {}) };
  if (kind === 'write') {
    prod.wroteAt = prod.wroteAt || isoDate;
    if (!(typeof prod.writeScore === 'number' && prod.writeScore > score)) prod.writeScore = score;
  } else {
    prod.spokeAt = prod.spokeAt || isoDate;
    if (!(typeof prod.speakScore === 'number' && prod.speakScore > score)) prod.speakScore = score;
  }
  delete prod.unavailable;
  const next: UnitRecord = { ...prev, production: prod };
  store.units[unitId] = next;
  writeCourseUnits(store);
  return next;
}

/** Record that the learner produced and the evaluator could not answer. */
export function markProductionUnavailable(unitId: string): void {
  if (!unitId) return;
  const store = readRaw();
  const prev = store.units[unitId] ?? {};
  const prod: UnitProduction = { ...(prev.production ?? {}) };
  if (prod.wroteAt && prod.spokeAt) return; // both graded — nothing is blocked
  if (prod.unavailable) return;
  prod.unavailable = true;
  store.units[unitId] = { ...prev, production: prod };
  writeCourseUnits(store);
}

/** Unit ids whose BOTH production tasks are graded. */
export function producedUnits(store: CourseUnitsStore = readRaw()): Set<string> {
  return new Set(
    Object.entries(store.units)
      .filter(([, r]) => !!r?.production?.wroteAt && !!r?.production?.spokeAt)
      .map(([id]) => id),
  );
}

/** Unit ids where the learner produced and the evaluator refused. */
export function productionBlockedUnits(store: CourseUnitsStore = readRaw()): Set<string> {
  return new Set(
    Object.entries(store.units)
      .filter(([, r]) => r?.production?.unavailable === true)
      .map(([id]) => id),
  );
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
 * Start the retention ladder for a unit that has just met the bar.
 *
 * Idempotent and never restarted: a ladder already running is left alone, so
 * re-taking a test or re-submitting production cannot push the next re-check away.
 */
export function startUnitRetention(unitId: string, isoDate: string = localDateStr()): void {
  if (!unitId) return;
  const store = readRaw();
  const prev = store.units[unitId];
  if (!prev || prev.recheck) return;
  store.units[unitId] = { ...prev, recheck: startRecheckLadder(isoDate) };
  writeCourseUnits(store);
}

/** Record a finished re-check. A failure moves the LADDER and nothing else. */
export function recordUnitRecheck(
  unitId: string,
  passed: boolean,
  isoDate: string = localDateStr(),
): UnitRecord | null {
  if (!unitId) return null;
  const store = readRaw();
  const prev = store.units[unitId];
  if (!prev) return null;
  const next: UnitRecord = { ...prev, recheck: afterRecheck(prev.recheck, passed, isoDate) };
  store.units[unitId] = next;
  writeCourseUnits(store);
  return next;
}

/** Unit ids whose retention ladder is fully held. */
export function retainedUnits(store: CourseUnitsStore = readRaw()): Set<string> {
  return new Set(
    Object.entries(store.units)
      .filter(([, r]) => retentionHeld(r?.recheck))
      .map(([id]) => id),
  );
}

/** Unit ids with a re-check due today or earlier, oldest due first. */
export function dueRecheckUnits(
  today: string = localDateStr(),
  store: CourseUnitsStore = readRaw(),
): string[] {
  return Object.entries(store.units)
    .filter(([, r]) => recheckDue(r?.recheck, today))
    .sort((a, b) => (a[1].recheck!.dueAt < b[1].recheck!.dueAt ? -1 : 1))
    .map(([id]) => id);
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
    const prod = mergeProduction(a.production, b.production);
    if (prod) merged.production = prod;
    const rc = mergeRecheck(a.recheck, b.recheck);
    if (rc) merged.recheck = rc;
    if (best.bestTotal) {
      merged.bestCorrect = best.bestCorrect;
      merged.bestTotal = best.bestTotal;
    }
    // A pass anywhere outranks an "I could not build a test" anywhere.
    if (!passedAt && (a.insufficient || b.insufficient)) merged.insufficient = true;
    out[id] = merged;
  }
  const reviews = mergeReviews(local?.reviews, rStore?.reviews);
  return reviews ? { units: out, reviews } : { units: out };
}

/** Reviews merge like passes: done on either device stays done, EARLIER date wins, better first-try score wins. */
function mergeReviews(
  a: Record<string, LevelReviewRecord> | undefined,
  b: Record<string, LevelReviewRecord> | undefined,
): Record<string, LevelReviewRecord> | undefined {
  const l = a && typeof a === 'object' ? a : {};
  const r = b && typeof b === 'object' ? b : {};
  const out: Record<string, LevelReviewRecord> = {};
  for (const lv of new Set([...Object.keys(l), ...Object.keys(r)])) {
    const x = l[lv];
    const y = r[lv];
    const real = (v: LevelReviewRecord | undefined) =>
      !!v && typeof v.doneAt === 'string' && Number.isFinite(v.total) && v.total > 0;
    const marker = (v: LevelReviewRecord | undefined) =>
      !!v && typeof v.doneAt === 'string' && v.unavailable === true;
    if (!real(x) && !real(y)) {
      // Neither device has a real review. An "unavailable" marker on either side is kept.
      const m = marker(x) ? x! : marker(y) ? y! : null;
      if (m) out[lv] = { doneAt: m.doneAt, firstTryCorrect: 0, total: 0, unavailable: true };
      continue;
    }
    // A real review anywhere replaces a marker everywhere.
    if (!real(x)) {
      out[lv] = y!;
      continue;
    }
    if (!real(y)) {
      out[lv] = x!;
      continue;
    }
    const better = y!.firstTryCorrect / y!.total > x!.firstTryCorrect / x!.total ? y! : x!;
    out[lv] = {
      doneAt: x!.doneAt < y!.doneAt ? x!.doneAt : y!.doneAt,
      firstTryCorrect: better.firstTryCorrect,
      total: better.total,
    };
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

/** Record a finished level review. The first date is kept; a better first-try score replaces a worse one. */
export function recordLevelReview(
  level: string,
  firstTryCorrect: number,
  total: number,
  isoDate: string = localDateStr(),
): void {
  if (!level || !Number.isFinite(total) || total <= 0) return;
  const store = readRaw();
  const prior = store.reviews?.[level];
  // An "unavailable" marker is not a review: the first real one replaces it whole.
  const prev = prior && !prior.unavailable && prior.total > 0 ? prior : undefined;
  const next: LevelReviewRecord = prev
    ? {
        doneAt: prev.doneAt,
        ...(firstTryCorrect / total > prev.firstTryCorrect / prev.total
          ? { firstTryCorrect, total }
          : { firstTryCorrect: prev.firstTryCorrect, total: prev.total }),
      }
    : { doneAt: isoDate, firstTryCorrect, total };
  writeCourseUnits({ ...store, reviews: { ...(store.reviews || {}), [level]: next } });
}

/** Record that a level's review could not be assembled. Never overwrites a real review. */
export function markLevelReviewUnavailable(level: string, isoDate: string = localDateStr()): void {
  if (!level) return;
  const store = readRaw();
  if (store.reviews?.[level]) return;
  writeCourseUnits({
    ...store,
    reviews: {
      ...(store.reviews || {}),
      [level]: { doneAt: isoDate, firstTryCorrect: 0, total: 0, unavailable: true },
    },
  });
}

/** Levels whose review has been finished — or could not be built, which the course treats the same. */
export function reviewedLevels(store: CourseUnitsStore = readRaw()): Set<string> {
  return new Set(Object.keys(store.reviews || {}));
}

/**
 * Merge one unit's production. Additive like everything else: a task graded on
 * either device stays graded, the EARLIER date wins (a second device cannot
 * postpone when you produced), the better score wins, and `unavailable` survives
 * only while the halves it blocks are still ungraded — a device that reached the
 * evaluator is better evidence than one that could not.
 */
function mergeProduction(
  a: UnitProduction | undefined,
  b: UnitProduction | undefined,
): UnitProduction | undefined {
  if (!a && !b) return undefined;
  if (!a) return b;
  if (!b) return a;
  const out: UnitProduction = {};
  const earlier = (x?: string, y?: string) => (x && y ? (x < y ? x : y) : x || y);
  const better = (x?: number, y?: number) =>
    typeof x === 'number' && typeof y === 'number' ? Math.max(x, y) : (x ?? y);
  const wroteAt = earlier(a.wroteAt, b.wroteAt);
  const spokeAt = earlier(a.spokeAt, b.spokeAt);
  if (wroteAt) out.wroteAt = wroteAt;
  if (spokeAt) out.spokeAt = spokeAt;
  const w = better(a.writeScore, b.writeScore);
  const s = better(a.speakScore, b.speakScore);
  if (typeof w === 'number') out.writeScore = w;
  if (typeof s === 'number') out.speakScore = s;
  if ((a.unavailable || b.unavailable) && !(wroteAt && spokeAt)) out.unavailable = true;
  return out;
}

/** For the snapshot: the store, or undefined when empty so a fresh device cannot
 *  clobber server history (the nh_journey pattern). */
export function courseUnitsOrUndef(): CourseUnitsStore | undefined {
  const s = readRaw();
  return Object.keys(s.units).length > 0 || Object.keys(s.reviews || {}).length > 0 ? s : undefined;
}

// ── Which unit the test screen is about ─────────────────────────────────────
//
// EPHEMERAL NAVIGATION STATE, never progress — sessionStorage, and separate from
// the store above on purpose. Read NON-DESTRUCTIVELY, unlike `lessonLookup`'s
// one-shot: a unit test survives a remount (an error boundary, a re-render, a
// tab away and back), and a consumed-on-read handoff would drop the learner out
// of a test they were halfway through. It is cleared when they leave.

export const UNIT_TEST_REQUEST_KEY = 'nh_unit_test';

export type UnitTestMode = 'first' | 'recheck';

export function requestUnitTest(unitId: string, mode: UnitTestMode = 'first'): void {
  if (!unitId) return;
  try {
    sessionStorage.setItem(
      UNIT_TEST_REQUEST_KEY,
      mode === 'recheck' ? `${unitId}|recheck` : unitId,
    );
  } catch {
    /* the screen will report that it has no unit, rather than crash */
  }
}

/**
 * The unit the test screen is about.
 *
 * A BARE ID STILL READS AS `first`, so a handoff written by an older build — or by
 * any caller that does not care — behaves exactly as it did. The marker is appended
 * rather than stored as JSON for the same reason: nothing has to migrate.
 */
export function readUnitTestRequest(): string | null {
  try {
    const raw = sessionStorage.getItem(UNIT_TEST_REQUEST_KEY);
    return raw ? raw.split('|')[0]! : null;
  } catch {
    return null;
  }
}

export function readUnitTestMode(): UnitTestMode {
  try {
    return sessionStorage.getItem(UNIT_TEST_REQUEST_KEY)?.endsWith('|recheck')
      ? 'recheck'
      : 'first';
  } catch {
    return 'first';
  }
}

export function clearUnitTestRequest(): void {
  try {
    sessionStorage.removeItem(UNIT_TEST_REQUEST_KEY);
  } catch {
    /* nothing more to do */
  }
}

// ── Which level the review screen is about ──────────────────────────────────
// Same contract as the unit-test handoff above: ephemeral, read non-destructively,
// cleared on leaving. The stored value is a member of the constant level list,
// chosen by equality — never a string derived from the plan.

export const LEVEL_REVIEW_REQUEST_KEY = 'nh_level_review';
const REVIEW_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

export function requestLevelReview(level: string): void {
  const lv = REVIEW_LEVELS.find((l) => l === level);
  if (!lv) return;
  try {
    sessionStorage.setItem(LEVEL_REVIEW_REQUEST_KEY, lv);
  } catch {
    /* the screen will report that it has no level, rather than crash */
  }
}

export function readLevelReviewRequest(): string | null {
  try {
    const raw = sessionStorage.getItem(LEVEL_REVIEW_REQUEST_KEY);
    return REVIEW_LEVELS.find((l) => l === raw) ?? null;
  } catch {
    return null;
  }
}

export function clearLevelReviewRequest(): void {
  try {
    sessionStorage.removeItem(LEVEL_REVIEW_REQUEST_KEY);
  } catch {
    /* nothing more to do */
  }
}

export { EMPTY as EMPTY_COURSE_UNITS };
