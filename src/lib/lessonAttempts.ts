// src/lib/lessonAttempts.ts
//
// DID THE TEACHING TAKE? (owner request, 2026-09-07)
//
// The gap: the depth contract (`scripts/lessonDepthRules.mjs`) enforces that a
// lesson is BUILT well — six check items, four options each, answer key spread
// over three positions, Croatian example word floors that scale with level. It
// enforces nothing about whether the lesson TEACHES well, because structure is
// not comprehension. A lesson can satisfy every rule in that file and still lose
// the learner, and until now nothing in the product would have said so.
//
// The one measurement that can say it is the FIRST-ATTEMPT outcome of the
// mastery check: the learner has read the lesson, once, and is answering
// questions written about what they just read. A first-attempt failure is the
// teaching not landing. Which ITEM they missed says where.
//
// ── WHAT THIS DELIBERATELY IS NOT ───────────────────────────────────────────
// It is not credit, and it must never become credit. The mastery gate's rule
// stands untouched: on a fail NOTHING is recorded — no XP, no `gc`, no `al_`
// key, no curriculum completion, no taught-queue entry. This store is a separate
// key that the stats reducer, the session builder, the curriculum spine and the
// retention ladder never read. It records that an attempt HAPPENED and how it
// went; it advances nothing.
//
// ── TEST-OUT ATTEMPTS ARE EXCLUDED, AND THAT IS THE SUBTLE PART ─────────────
// `AnimatedLesson` offers the check up front to a learner who thinks they
// already know the material (rec #4, same day). That attempt is taken BEFORE
// reading the lesson, by definition. Counting it as a first attempt would
// poison the entire metric in one direction: every lesson a confident learner
// tested out of and failed would read as "teaches badly", when the learner had
// not been taught at all yet. Test-out attempts are counted separately, so the
// signal stays answerable and the test-out rate remains visible in its own
// right.
//
// ── WHAT ONE LEARNER'S DATA CAN AND CANNOT SAY ─────────────────────────────
// Per learner this answers "which lessons did I have to take twice". Across
// learners it would answer "which lessons teach badly" — but that requires
// aggregation this file does NOT do and must not silently start doing. The
// store syncs to the learner's own Firestore document exactly as their progress
// and retention already do; turning that into a cross-learner content report is
// a separate, deliberate decision about reading other people's data.

import { localDateStr } from './dateUtils';

export const LESSON_ATTEMPTS_KEY = 'nh_lesson_attempts';

/** Attempts kept per lesson. Enough to see a pattern, bounded so the synced
 *  progress blob cannot grow without limit on a learner who retakes often. */
export const MAX_ATTEMPTS_PER_LESSON = 10;

export type AttemptKind = 'lesson' | 'testout';

export interface LessonAttempt {
  /** YYYY-MM-DD. */
  at: string;
  score: number;
  total: number;
  passed: boolean;
  /** 'testout' attempts are excluded from the first-attempt signal. */
  kind: AttemptKind;
  /** Source-order indices of the items missed on this attempt. */
  missed: number[];
}

export interface LessonAttemptRecord {
  /** Every attempt, oldest first, capped at MAX_ATTEMPTS_PER_LESSON. */
  attempts: LessonAttempt[];
}

export interface AttemptsStore {
  v: 1;
  lessons: Record<string, LessonAttemptRecord>;
}

export function emptyAttempts(): AttemptsStore {
  return { v: 1, lessons: {} };
}

// ── Storage ─────────────────────────────────────────────────────────────────

function sanitizeAttempt(a: unknown): LessonAttempt | null {
  if (!a || typeof a !== 'object') return null;
  const o = a as Partial<LessonAttempt>;
  if (typeof o.at !== 'string' || !o.at) return null;
  const total = Number(o.total);
  const score = Number(o.score);
  if (!Number.isFinite(total) || total <= 0) return null;
  if (!Number.isFinite(score) || score < 0 || score > total) return null;
  return {
    at: o.at,
    score,
    total,
    passed: !!o.passed,
    kind: o.kind === 'testout' ? 'testout' : 'lesson',
    missed: Array.isArray(o.missed)
      ? o.missed.filter((n): n is number => Number.isInteger(n) && n >= 0 && n < total)
      : [],
  };
}

export function sanitizeAttempts(v: Partial<AttemptsStore> | null | undefined): AttemptsStore {
  const out = emptyAttempts();
  if (!v || typeof v !== 'object') return out;
  const lessons = (v as AttemptsStore).lessons;
  if (!lessons || typeof lessons !== 'object') return out;
  for (const [id, rec] of Object.entries(lessons)) {
    if (!id || !rec || typeof rec !== 'object') continue;
    const raw = (rec as LessonAttemptRecord).attempts;
    if (!Array.isArray(raw)) continue;
    const attempts = raw
      .map(sanitizeAttempt)
      .filter((a): a is LessonAttempt => a !== null)
      .slice(0, MAX_ATTEMPTS_PER_LESSON);
    if (attempts.length) out.lessons[id] = { attempts };
  }
  return out;
}

export function readAttempts(): AttemptsStore {
  try {
    const raw = localStorage.getItem(LESSON_ATTEMPTS_KEY);
    if (!raw) return emptyAttempts();
    return sanitizeAttempts(JSON.parse(raw) as Partial<AttemptsStore>);
  } catch {
    return emptyAttempts();
  }
}

export function writeAttempts(store: AttemptsStore): void {
  try {
    localStorage.setItem(LESSON_ATTEMPTS_KEY, JSON.stringify(store));
  } catch {
    /* quota or private mode — a diagnostic must never break a lesson */
  }
}

/** Absent when empty, so a fresh device cannot clobber server history. */
export function attemptsOrUndef(): AttemptsStore | undefined {
  const s = readAttempts();
  return Object.keys(s.lessons).length ? s : undefined;
}

// ── Recording ───────────────────────────────────────────────────────────────

/**
 * One finished mastery check, pass or fail. Called from `AnimatedLesson` on the
 * summary slide, once per attempt.
 *
 * This is the ONLY writer. It cannot award, complete, schedule or queue
 * anything — that separation is the whole reason the fail path is safe to write
 * from at all.
 */
export function recordCheckAttempt(
  lessonId: string,
  args: {
    score: number;
    total: number;
    passed: boolean;
    kind: AttemptKind;
    missed: number[];
    at?: string;
  },
): void {
  if (!lessonId || !Number.isFinite(args.total) || args.total <= 0) return;
  const store = readAttempts();
  const rec = store.lessons[lessonId] ?? { attempts: [] };
  // Keep the EARLIEST attempts: the first one is the whole signal, and a
  // learner grinding a lesson for the eleventh time tells us nothing new.
  // Dropping the write entirely rather than rewriting an unchanged store.
  if (rec.attempts.length >= MAX_ATTEMPTS_PER_LESSON) return;
  rec.attempts.push({
    at: args.at ?? localDateStr(),
    score: Math.max(0, Math.min(args.total, Math.round(args.score))),
    total: Math.round(args.total),
    passed: !!args.passed,
    kind: args.kind,
    missed: [...new Set(args.missed)]
      .filter((n) => Number.isInteger(n) && n >= 0)
      .sort((a, b) => a - b),
  });
  store.lessons[lessonId] = rec;
  writeAttempts(store);
}

// ── Reading the signal ──────────────────────────────────────────────────────

export interface LessonQuality {
  lessonId: string;
  /** Attempts made after actually reading the lesson. */
  taught: LessonAttempt[];
  /** Outcome of the FIRST such attempt; null when only test-outs exist. */
  firstAttemptPassed: boolean | null;
  /** 1-based index of the attempt that first passed; null if never passed. */
  passedOnAttempt: number | null;
  /** Item indices missed on the first taught attempt, worst evidence first. */
  firstAttemptMissed: number[];
  /** Test-out attempts, kept apart so they cannot skew the signal. */
  testOuts: LessonAttempt[];
}

export function lessonQuality(
  lessonId: string,
  store: AttemptsStore = readAttempts(),
): LessonQuality | null {
  const rec = store.lessons[lessonId];
  if (!rec || !rec.attempts.length) return null;
  const taught = rec.attempts.filter((a) => a.kind === 'lesson');
  const testOuts = rec.attempts.filter((a) => a.kind === 'testout');
  const first = taught[0];
  const passedIdx = taught.findIndex((a) => a.passed);
  return {
    lessonId,
    taught,
    firstAttemptPassed: first ? first.passed : null,
    passedOnAttempt: passedIdx === -1 ? null : passedIdx + 1,
    firstAttemptMissed: first ? [...first.missed] : [],
    testOuts,
  };
}

export interface QualityReport {
  /** Lessons with at least one taught attempt. */
  measured: number;
  /** Of those, how many passed on the first reading. */
  firstAttemptPasses: number;
  /** Lessons that took more than one attempt, worst first. */
  neededMore: LessonQuality[];
}

/**
 * Per-lesson acquisition signal across everything measured on this device.
 * Reports only what was measured — a lesson never attempted is absent, not a
 * zero, because "not taught yet" and "taught badly" are different facts.
 */
export function qualityReport(store: AttemptsStore = readAttempts()): QualityReport {
  const all = Object.keys(store.lessons)
    .map((id) => lessonQuality(id, store))
    .filter((q): q is LessonQuality => q !== null && q.taught.length > 0);
  const struggled = all
    .filter((q) => q.firstAttemptPassed === false)
    .sort((a, b) => {
      const an = a.passedOnAttempt ?? Infinity;
      const bn = b.passedOnAttempt ?? Infinity;
      return bn - an || b.firstAttemptMissed.length - a.firstAttemptMissed.length;
    });
  return {
    measured: all.length,
    firstAttemptPasses: all.filter((q) => q.firstAttemptPassed === true).length,
    neededMore: struggled,
  };
}

// ── Sync ────────────────────────────────────────────────────────────────────

/**
 * Additive merge. Attempts are HISTORY, so the union is taken by (at, kind,
 * score, total) and ordered oldest-first — a device that saw the first attempt
 * contributes it even if the other device has later ones. Nothing is ever
 * dropped for being remote, and the cap is applied after merging so the
 * EARLIEST attempts survive, which is where the signal lives.
 */
export function mergeLessonAttempts(
  local: Partial<AttemptsStore> | null | undefined,
  remote: Partial<AttemptsStore> | null | undefined,
): AttemptsStore {
  const l = sanitizeAttempts(local);
  const r = sanitizeAttempts(remote);
  const out = emptyAttempts();
  for (const id of new Set([...Object.keys(l.lessons), ...Object.keys(r.lessons)])) {
    const seen = new Map<string, LessonAttempt>();
    for (const a of [...(l.lessons[id]?.attempts ?? []), ...(r.lessons[id]?.attempts ?? [])]) {
      const key = `${a.at}|${a.kind}|${a.score}|${a.total}`;
      if (!seen.has(key)) seen.set(key, a);
    }
    const attempts = [...seen.values()]
      .sort((a, b) => (a.at < b.at ? -1 : a.at > b.at ? 1 : 0))
      .slice(0, MAX_ATTEMPTS_PER_LESSON);
    if (attempts.length) out.lessons[id] = { attempts };
  }
  return out;
}
