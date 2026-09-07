// lessonRetention.test.ts — a passed lesson STAYS passed (owner directive,
// 2026-09-07).
//
// The gap: the mastery check was one-shot. Nothing re-tested a passed lesson,
// a missed item was discarded at the summary, and FSRS held vocabulary only.
// These pin the scheduler, the item cards, the cumulative trigger, the queue
// composition and the additive merge.
import { describe, it, expect, beforeEach, vi } from 'vitest';

const recordLessonTaught = vi.fn();
vi.mock('../lib/teachPractice', () => ({
  recordLessonTaught: (...a: unknown[]) => recordLessonTaught(...a),
}));

import {
  MAX_QUEUE,
  readRetention,
  writeRetention,
  emptyRetention,
  recordMasteryPass,
  recordRetentionResult,
  recordCumulativeServed,
  markLessonProduced,
  retentionStatus,
  buildRetentionQueue,
  mergeLessonRetention,
  sanitizeRetention,
  retentionOrUndef,
  itemKey,
  addDays,
  daysBetween,
  RETENTION_INTERVALS,
  CUMULATIVE_MIN_LESSONS,
  CUMULATIVE_EVERY_DAYS,
  MAX_RECHECKS_PER_QUEUE,
  type RetentionStore,
} from '../lib/lessonRetention';
import { MIN_CHECK_ITEMS, LESSON_PASS_THRESHOLD } from '../lib/lessonCheck';

const item = (n: number) => ({
  q: `Q${n}`,
  options: ['a', 'b', 'c', 'd'],
  correct: n % 4,
  explanation: 'because',
});
const lesson = (id: string, n = 8) => ({
  id,
  title: id.toUpperCase(),
  slides: [
    { type: 'rule' },
    { type: 'check', items: Array.from({ length: n }, (_, i) => item(i)) },
    { type: 'summary' },
  ],
});
const LESSONS = [
  lesson('plural'),
  lesson('gender'),
  lesson('cases'),
  lesson('verbs'),
  lesson('acc'),
];
const allRight = (n: number) => Array.from({ length: n }, (_, i) => ({ idx: i, correct: true }));

beforeEach(() => {
  localStorage.clear();
  recordLessonTaught.mockClear();
});

describe('the re-check ladder', () => {
  it('a mastery pass schedules the first re-check at the first interval', () => {
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    const rec = readRetention().lessons['plural']!;
    expect(rec.passedAt).toBe('2026-09-01');
    expect(rec.stage).toBe(0);
    expect(rec.due).toBe(addDays('2026-09-01', RETENTION_INTERVALS[0]));
    expect(RETENTION_INTERVALS[0]).toBe(3);
  });

  it('a passed re-check climbs the ladder: 3 → 10 → 30 → 90, then holds at 90', () => {
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    const dates: number[] = [];
    let day = '2026-09-04';
    for (let i = 0; i < 5; i++) {
      const before = readRetention().lessons['plural']!.due;
      recordRetentionResult('plural', { kind: 'retention', results: allRight(6), at: day });
      const rec = readRetention().lessons['plural']!;
      dates.push(daysBetween(day, rec.due));
      expect(rec.due > before).toBe(true);
      day = rec.due;
    }
    expect(dates).toEqual([10, 30, 90, 90, 90]);
  });

  it('a FAILED re-check resets the ladder, returns tomorrow, and re-queues the drill', () => {
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    recordRetentionResult('plural', { kind: 'retention', results: allRight(6), at: '2026-09-04' });
    expect(readRetention().lessons['plural']!.stage).toBe(1);

    const mixed = allRight(6).map((r, i) => ({ ...r, correct: i > 2 }));
    const out = recordRetentionResult('plural', {
      kind: 'retention',
      results: mixed,
      at: '2026-09-14',
    });
    expect(out.passed).toBe(false);
    const rec = readRetention().lessons['plural']!;
    expect(rec.stage).toBe(0);
    expect(rec.due).toBe('2026-09-15');
    // The coupling queue is how the app already routes "practise this concept".
    expect(recordLessonTaught).toHaveBeenCalledWith('plural');
    // The lesson is never un-passed — the learner did pass it once.
    expect(rec.passedAt).toBe('2026-09-01');
  });

  it('uses the SHARED 75% threshold, not a private one', () => {
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    const three = (correct: number) =>
      Array.from({ length: 4 }, (_, i) => ({ idx: i, correct: i < correct }));
    expect(
      recordRetentionResult('plural', { kind: 'retention', results: three(3), at: '2026-09-04' })
        .passed,
    ).toBe(true);
    expect(
      recordRetentionResult('plural', { kind: 'retention', results: three(2), at: '2026-09-05' })
        .passed,
    ).toBe(false);
    expect(LESSON_PASS_THRESHOLD).toBe(0.75);
  });
});

describe('item cards', () => {
  it('a MISS creates a card; a correct answer on a never-missed item creates nothing', () => {
    recordMasteryPass('plural', {
      score: 5,
      total: 6,
      results: [
        { idx: 0, correct: true },
        { idx: 1, correct: false },
      ],
      at: '2026-09-01',
    });
    const store = readRetention();
    expect(Object.keys(store.items)).toEqual([itemKey('plural', 1)]);
  });

  it('a card answered ON TIME schedules further out; missing it again pulls it in', () => {
    // Real elapsed time, not a passed-in `now`: sm2 reads the clock itself, and
    // FSRS deliberately gives NO stability for a card reviewed the instant it
    // was made — reviewing early is worth nothing. Fake timers make the first
    // draft of this test (same-instant review) the honest one it looks like.
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-09-01T09:00:00Z'));
    recordMasteryPass('plural', {
      score: 5,
      total: 6,
      results: [{ idx: 1, correct: false }],
      at: '2026-09-01',
    });
    const first = readRetention().items[itemKey('plural', 1)]!;

    vi.setSystemTime(new Date(first.due + 3600_000)); // an hour after it fell due
    recordRetentionResult('plural', {
      kind: 'card',
      results: [{ idx: 1, correct: true }],
      at: '2026-09-04',
    });
    const afterHit = readRetention().items[itemKey('plural', 1)]!;
    expect(afterHit.due - Date.now()).toBeGreaterThan(
      first.due - new Date('2026-09-01T09:00:00Z').getTime(),
    );

    vi.setSystemTime(new Date(afterHit.due + 3600_000));
    recordRetentionResult('plural', {
      kind: 'card',
      results: [{ idx: 1, correct: false }],
      at: '2026-09-20',
    });
    const afterMiss = readRetention().items[itemKey('plural', 1)]!;
    expect(afterMiss.due - Date.now()).toBeLessThan(afterHit.due - (first.due + 3600_000));
    vi.useRealTimers();
  });

  it('a CARD result never advances a ladder or counts as a check', () => {
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    const before = readRetention().lessons['plural']!;
    recordRetentionResult('plural', {
      kind: 'card',
      results: [{ idx: 1, correct: true }],
      at: '2026-09-04',
    });
    const after = readRetention().lessons['plural']!;
    expect(after.stage).toBe(before.stage);
    expect(after.due).toBe(before.due);
    expect(after.checks).toBe(before.checks);
  });
});

describe('the weekly cumulative', () => {
  function passFive(at = '2026-09-01') {
    for (const l of LESSONS) {
      recordMasteryPass(l.id, { score: 6, total: 6, results: allRight(6), at });
    }
  }

  it('does not start below the minimum number of passed lessons', () => {
    for (const l of LESSONS.slice(0, CUMULATIVE_MIN_LESSONS - 1)) {
      recordMasteryPass(l.id, { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    }
    expect(retentionStatus(readRetention(), '2026-09-30').cumulativeDue).toBe(false);
    recordMasteryPass('acc2', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    expect(retentionStatus(readRetention(), '2026-09-30').cumulativeDue).toBe(true);
  });

  it('is due again a week after the last one, not before', () => {
    passFive();
    recordCumulativeServed('2026-09-10');
    const day = (d: string) => retentionStatus(readRetention(), d).cumulativeDue;
    expect(day(addDays('2026-09-10', CUMULATIVE_EVERY_DAYS - 1))).toBe(false);
    expect(day(addDays('2026-09-10', CUMULATIVE_EVERY_DAYS))).toBe(true);
  });

  it('two misses from one lesson pull that lesson’s re-check forward to tomorrow', () => {
    passFive();
    const far = readRetention().lessons['plural']!.due;
    expect(far).toBe('2026-09-04');
    recordRetentionResult('plural', {
      kind: 'cumulative',
      results: [
        { idx: 0, correct: false },
        { idx: 1, correct: false },
      ],
      at: '2026-09-02',
    });
    expect(readRetention().lessons['plural']!.due).toBe('2026-09-03');
    // ONE miss is not enough — a single slip in a mixed quiz is not a signal.
    recordRetentionResult('gender', {
      kind: 'cumulative',
      results: [{ idx: 0, correct: false }],
      at: '2026-09-02',
    });
    expect(readRetention().lessons['gender']!.due).toBe(far);
  });

  it('a cumulative result never advances or resets the ladder', () => {
    passFive();
    const before = readRetention().lessons['plural']!;
    recordRetentionResult('plural', {
      kind: 'cumulative',
      results: allRight(4),
      at: '2026-09-02',
    });
    const after = readRetention().lessons['plural']!;
    expect(after.stage).toBe(before.stage);
    expect(after.due).toBe(before.due);
  });
});

describe('the queue', () => {
  it('is empty with nothing due, and status says so', () => {
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    const s = retentionStatus(readRetention(), '2026-09-02');
    expect(s.any).toBe(false);
    expect(buildRetentionQueue(LESSONS, readRetention(), '2026-09-02')).toEqual([]);
  });

  it('serves a due re-check as MIN_CHECK_ITEMS items from that lesson', () => {
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    const q = buildRetentionQueue(LESSONS, readRetention(), '2026-09-04');
    expect(q).toHaveLength(MIN_CHECK_ITEMS);
    expect(new Set(q.map((i) => i.lessonId))).toEqual(new Set(['plural']));
    expect(q.every((i) => i.part === 'recheck')).toBe(true);
    expect(q[0]!.lessonTitle).toBe('PLURAL');
  });

  it('a re-check asks a DIFFERENT sample than the last one', () => {
    recordMasteryPass('plural', { score: 8, total: 8, results: allRight(8), at: '2026-09-01' });
    const first = buildRetentionQueue(LESSONS, readRetention(), '2026-09-04').map((i) => i.idx);
    recordRetentionResult('plural', { kind: 'retention', results: allRight(6), at: '2026-09-04' });
    const second = buildRetentionQueue(LESSONS, readRetention(), '2026-09-14').map((i) => i.idx);
    expect(second).not.toEqual(first);
  });

  it('puts previously MISSED items of a lesson first in its re-check', () => {
    recordMasteryPass('plural', {
      score: 7,
      total: 8,
      results: [
        { idx: 5, correct: false },
        { idx: 0, correct: true },
      ],
      at: '2026-09-01',
    });
    const q = buildRetentionQueue(LESSONS, readRetention(), '2026-09-04');
    expect(q[0]!.idx).toBe(5);
  });

  it('caps how many re-checks one sitting serves', () => {
    for (const l of LESSONS) {
      recordMasteryPass(l.id, { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    }
    recordCumulativeServed('2026-09-03'); // isolate re-checks from the weekly mix
    const q = buildRetentionQueue(LESSONS, readRetention(), '2026-09-04');
    const lessons = new Set(q.filter((i) => i.part === 'recheck').map((i) => i.lessonId));
    expect(lessons.size).toBe(MAX_RECHECKS_PER_QUEUE);
  });

  it('THE CUMULATIVE IS NEVER CROWDED OUT by due re-checks (found by this test)', () => {
    // The first draft built re-checks first: two due re-checks are 12 items,
    // which is the whole sitting, so on any day both were due the weekly
    // cumulative silently did not happen. A weekly signal a busy week can
    // cancel is not one. Cumulative → cards → whole re-checks.
    for (const l of LESSONS) {
      recordMasteryPass(l.id, { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    }
    const q = buildRetentionQueue(LESSONS, readRetention(), '2026-09-30');
    expect(q.some((i) => i.part === 'cumulative')).toBe(true);
  });

  it('serves a re-check WHOLE or not at all — never a partial verdict', () => {
    for (const l of LESSONS) {
      recordMasteryPass(l.id, { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    }
    recordCumulativeServed('2026-09-03');
    const q = buildRetentionQueue(LESSONS, readRetention(), '2026-09-04');
    const perLesson = new Map<string, number>();
    for (const i of q.filter((x) => x.part === 'recheck')) {
      perLesson.set(i.lessonId, (perLesson.get(i.lessonId) ?? 0) + 1);
    }
    for (const [, n] of perLesson) expect(n).toBe(MIN_CHECK_ITEMS);
    expect(q.length).toBeLessThanOrEqual(MAX_QUEUE);
  });

  it('serves due cards when the weekly mix is not due', () => {
    for (const l of LESSONS) {
      recordMasteryPass(l.id, {
        score: 7,
        total: 8,
        results: [{ idx: 3, correct: false }],
        at: '2026-08-01',
      });
    }
    recordCumulativeServed('2026-09-18');
    const q = buildRetentionQueue(
      LESSONS,
      readRetention(),
      '2026-09-20',
      Date.now() + 86400000 * 400,
    );
    expect(q.some((i) => i.part === 'card')).toBe(true);
    for (const entry of q) expect(entry.item.q).toBe(`Q${entry.idx}`);
  });

  it('never asks the same item twice in one sitting, whatever claimed it', () => {
    // The cumulative claims first and dedups against the cards. A card the mix
    // already covered is NOT lost: every result updates its card regardless of
    // which part served it (see the card-update test below), so the item is
    // answered once and scheduled once.
    for (const l of LESSONS) {
      recordMasteryPass(l.id, {
        score: 7,
        total: 8,
        results: [{ idx: 3, correct: false }],
        at: '2026-08-01',
      });
    }
    const q = buildRetentionQueue(
      LESSONS,
      readRetention(),
      '2026-09-20',
      Date.now() + 86400000 * 400,
    );
    const keys = q.map((i) => itemKey(i.lessonId, i.idx));
    expect(new Set(keys).size).toBe(keys.length);
    expect(q.length).toBeLessThanOrEqual(MAX_QUEUE);
  });

  it('a CUMULATIVE result updates the item card, so nothing is lost to dedup', () => {
    recordMasteryPass('plural', {
      score: 7,
      total: 8,
      results: [{ idx: 3, correct: false }],
      at: '2026-08-01',
    });
    const before = readRetention().items[itemKey('plural', 3)]!.last;
    recordRetentionResult('plural', {
      kind: 'cumulative',
      results: [{ idx: 3, correct: true }],
      at: '2026-09-20',
      now: before + 999,
    });
    expect(readRetention().items[itemKey('plural', 3)]!.last).toBe(before + 999);
  });

  it('a lesson missing from the payload is skipped, never served empty', () => {
    recordMasteryPass('ghost', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    expect(buildRetentionQueue(LESSONS, readRetention(), '2026-09-04')).toEqual([]);
  });
});

describe('the sync merge', () => {
  const rec = (over: Partial<RetentionStore['lessons'][string]> = {}) => ({
    passedAt: '2026-09-01',
    stage: 1,
    due: '2026-09-14',
    checks: 2,
    last: { at: '2026-09-04', score: 6, total: 6, kind: 'retention' as const },
    ...over,
  });

  it('adds lessons the other device knows and never un-passes one', () => {
    const local = { ...emptyRetention(), lessons: { plural: rec() } };
    const merged = mergeLessonRetention(local, {
      v: 1,
      lessons: { gender: rec() },
      items: {},
      cumulative: { lastAt: null, count: 0 },
    });
    expect(Object.keys(merged.lessons).sort()).toEqual(['gender', 'plural']);
  });

  it('the LATER check wins the ladder; the EARLIER pass date is kept', () => {
    const local = { ...emptyRetention(), lessons: { plural: rec({ stage: 1 }) } };
    const merged = mergeLessonRetention(local, {
      v: 1,
      lessons: {
        plural: rec({
          passedAt: '2026-08-20',
          stage: 3,
          due: '2026-12-01',
          checks: 4,
          last: { at: '2026-09-09', score: 6, total: 6, kind: 'retention' },
        }),
      },
      items: {},
      cumulative: { lastAt: null, count: 0 },
    });
    expect(merged.lessons['plural']!.stage).toBe(3);
    expect(merged.lessons['plural']!.passedAt).toBe('2026-08-20');
    expect(merged.lessons['plural']!.checks).toBe(4);
  });

  it('an OLDER remote record cannot roll back a newer local ladder', () => {
    const local = {
      ...emptyRetention(),
      lessons: {
        plural: rec({
          stage: 3,
          last: { at: '2026-09-20', score: 6, total: 6, kind: 'retention' as const },
        }),
      },
    };
    const merged = mergeLessonRetention(local, {
      v: 1,
      lessons: { plural: rec({ stage: 0 }) },
      items: {},
      cumulative: { lastAt: null, count: 0 },
    });
    expect(merged.lessons['plural']!.stage).toBe(3);
  });

  it('keeps the more recently answered card and the later cumulative date', () => {
    const card = (due: number, last: number) => ({
      s: 1,
      d: 5,
      r: 1,
      w: 0,
      l: 0,
      b: 1,
      due,
      nextDue: due,
      last,
    });
    const local = {
      ...emptyRetention(),
      items: { 'plural#1': card(100, 100) },
      cumulative: { lastAt: '2026-09-01', count: 1 },
    };
    const merged = mergeLessonRetention(local, {
      v: 1,
      lessons: {},
      items: { 'plural#1': card(900, 900), 'gender#2': card(50, 50) },
      cumulative: { lastAt: '2026-09-08', count: 2 },
    });
    expect(merged.items['plural#1']!.due).toBe(900);
    expect(merged.items['gender#2']).toBeDefined();
    expect(merged.cumulative).toEqual({ lastAt: '2026-09-08', count: 2 });
  });

  it('malformed remote data is dropped, never trusted', () => {
    expect(sanitizeRetention(null).lessons).toEqual({});
    expect(sanitizeRetention({ lessons: { x: { stage: 1 } } }).lessons).toEqual({});
    expect(sanitizeRetention({ items: { nokey: { due: 1 } } }).items).toEqual({});
  });

  it('retentionOrUndef omits an empty store so a fresh device cannot clobber history', () => {
    expect(retentionOrUndef()).toBeUndefined();
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    expect(retentionOrUndef()).toBeDefined();
  });
});

describe('the production step', () => {
  it('records when the learner used the concept, without touching the ladder', () => {
    recordMasteryPass('plural', { score: 6, total: 6, results: allRight(6), at: '2026-09-01' });
    const before = readRetention().lessons['plural']!.due;
    markLessonProduced('plural', 82, '2026-09-01');
    const rec2 = readRetention().lessons['plural']!;
    expect(rec2.produced).toEqual({ at: '2026-09-01', score: 82 });
    expect(rec2.due).toBe(before);
  });

  it('is a no-op for a lesson that was never passed', () => {
    markLessonProduced('ghost', 90);
    expect(readRetention().lessons['ghost']).toBeUndefined();
  });
});

describe('storage safety', () => {
  it('a corrupt blob reads as empty rather than throwing', () => {
    localStorage.setItem('nh_lesson_retention', '{not json');
    expect(readRetention()).toEqual(emptyRetention());
  });

  it('a write failure never throws into a completion path', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('quota');
    });
    expect(() => writeRetention(emptyRetention())).not.toThrow();
    spy.mockRestore();
  });
});
