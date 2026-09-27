/**
 * levelReview — the end-of-level review (owner request, 2026-09-27): "a review unit at
 * the end of each level. It would mix practice across all six units right before the
 * Level Check, so the learner is prepared rather than just tested."
 *
 * What is pinned here and nowhere else:
 *   - the round really MIXES the level (no two neighbours from one unit, three per
 *     unit, breadth within a unit) — a blocked round would be six mini unit tests;
 *   - it is served ONCE, at the CROSSING into the next level, and never drags a
 *     learner back out of a level they have started;
 *   - the last level, which has no crossing, still gets its review;
 *   - a review the app could not build does not become a daily dead end;
 *   - the record syncs additively and can never lose a finished review.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { writeCurriculumSpine, markLessonComplete } from '../lib/curriculumProgress';
import {
  recordUnitTest,
  recordUnitProduction,
  recordLevelReview,
  markLevelReviewUnavailable,
  reviewedLevels,
  readCourseUnits,
  mergeCourseUnits,
  courseUnitsOrUndef,
  requestLevelReview,
  readLevelReviewRequest,
} from '../lib/courseUnitProgress';
import { nextCourseStep, pickCourseStep, levelReviewActivityId } from '../lib/courseStep';
import { buildCurriculumSlots, rearmCourseHandoff } from '../lib/curriculumSlot';
import { courseNextStep } from '../lib/nextStep';
import { buildCourseUnits, type UnitProgress } from '../lib/courseUnits';
import {
  buildLevelReview,
  reviewBreakdown,
  levelReviewDue,
  LEVEL_REVIEW_ITEMS,
  ITEMS_PER_UNIT,
  type ReviewUnitInput,
} from '../lib/levelReview';
import type { CurriculumEntry } from '../lib/curriculum';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

/** Six units × five lessons × six check items, every item distinguishable. */
function fakeLevel(units = 6, lessons = 5, items = 6): ReviewUnitInput[] {
  return Array.from({ length: units }, (_, u) => ({
    unitId: `U${u + 1}`,
    lessons: Array.from({ length: lessons }, (_, l) => ({
      id: `u${u + 1}-l${l + 1}`,
      slides: [
        {
          type: 'check',
          items: Array.from({ length: items }, (_, i) => ({
            q: `u${u + 1} l${l + 1} q${i + 1}`,
            options: ['a', 'b', 'c', 'd'],
            correct: i % 4,
            explanation: 'e',
          })),
        },
      ],
    })),
  }));
}

describe('the round mixes the whole level', () => {
  it('is 18 items, three from each of the six units', () => {
    const r = buildLevelReview(fakeLevel());
    expect(r).toHaveLength(LEVEL_REVIEW_ITEMS);
    const per = new Map<string, number>();
    for (const it of r) per.set(it.unitId, (per.get(it.unitId) || 0) + 1);
    expect([...per.values()]).toEqual(Array(6).fill(ITEMS_PER_UNIT));
  });

  it('never puts two items from one unit side by side (interleaved, not blocked)', () => {
    const r = buildLevelReview(fakeLevel());
    for (let i = 1; i < r.length; i++) expect(r[i]!.unitId).not.toBe(r[i - 1]!.unitId);
  });

  it("draws a unit's three items from three different lessons", () => {
    const r = buildLevelReview(fakeLevel());
    for (const u of ['U1', 'U2', 'U3', 'U4', 'U5', 'U6']) {
      const lessons = r.filter((x) => x.unitId === u).map((x) => x.lessonId);
      expect(new Set(lessons).size, u).toBe(3);
    }
  });

  it('a second review is a different paper, and a reload of one is the same', () => {
    const key = (xs: { lessonId: string; q: string }[]) => xs.map((x) => x.q).join('|');
    expect(key(buildLevelReview(fakeLevel(), 0))).toBe(key(buildLevelReview(fakeLevel(), 0)));
    expect(key(buildLevelReview(fakeLevel(), 1))).not.toBe(key(buildLevelReview(fakeLevel(), 0)));
  });

  it('skips a malformed item rather than serving an unanswerable one', () => {
    const lvl = fakeLevel(1, 1, 1);
    (lvl[0]!.lessons[0]!.slides![0]!.items as unknown[]).push({
      q: 'broken',
      options: ['a'],
      correct: 3,
    });
    expect(buildLevelReview(lvl).map((x) => x.q)).not.toContain('broken');
  });

  it('builds from the REAL A1 lesson bodies', async () => {
    const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
    const byId = new Map((LESSONS as { id: string }[]).map((l) => [l.id, l]));
    const a1 = UNITS.filter((u) => u.level === 'A1');
    const r = buildLevelReview(
      a1.map((u) => ({
        unitId: u.id,
        lessons: u.lessons.map((l) => byId.get(l.id)).filter(Boolean) as never[],
      })),
    );
    expect(r).toHaveLength(LEVEL_REVIEW_ITEMS);
    for (let i = 1; i < r.length; i++) expect(r[i]!.unitId).not.toBe(r[i - 1]!.unitId);
  });

  it('reports first-try accuracy per unit, in unit order', () => {
    const r = buildLevelReview(fakeLevel());
    const first: Record<number, boolean> = {};
    r.forEach((it, i) => (first[i] = it.unitId !== 'U2'));
    const b = reviewBreakdown(r, first);
    expect(b.map((x) => x.unitId)).toEqual(['U1', 'U2', 'U3', 'U4', 'U5', 'U6']);
    expect(b.find((x) => x.unitId === 'U2')).toEqual({ unitId: 'U2', correct: 0, total: 3 });
    expect(b.find((x) => x.unitId === 'U1')).toEqual({ unitId: 'U1', correct: 3, total: 3 });
  });
});

describe('when the review is due', () => {
  const base = {
    current: { level: 'A2', indexInLevel: 1, lessonIds: ['x', 'y'] },
    previousLevel: 'A1',
    previousLevelAdvanced: true,
    reviewed: new Set<string>(),
    completed: new Set<string>(),
  };
  it('is due at the crossing into the next level', () => {
    expect(levelReviewDue(base)).toBe('A1');
  });
  it('is not due once done', () => {
    expect(levelReviewDue({ ...base, reviewed: new Set(['A1']) })).toBeNull();
  });
  it('is not due once the learner has started the next level', () => {
    expect(levelReviewDue({ ...base, completed: new Set(['x']) })).toBeNull();
  });
  it('is not due in the middle of a level, or before the level is finished', () => {
    expect(levelReviewDue({ ...base, current: { ...base.current, indexInLevel: 2 } })).toBeNull();
    expect(levelReviewDue({ ...base, previousLevelAdvanced: false })).toBeNull();
  });
  it('is not due for a learner still in the first level', () => {
    expect(levelReviewDue({ ...base, previousLevel: null })).toBeNull();
  });
});

describe('what the course serves, through storage', () => {
  function master(unitId: string): void {
    recordUnitTest(unitId, 15, 15, true);
    recordUnitProduction(unitId, 'write', 78);
    recordUnitProduction(unitId, 'speak', 0.8);
  }
  function finishA1(): void {
    for (const u of UNITS.filter((x) => x.level === 'A1')) {
      for (const l of u.lessons) markLessonComplete(l.id, '2026-09-01');
      master(u.id);
    }
  }

  it('serves the A1 review at the crossing, before A2 Unit 1', () => {
    writeCurriculumSpine(SPINE);
    finishA1();
    const step = nextCourseStep();
    expect(step).toMatchObject({ kind: 'level-review', level: 'A1' });
    expect(step?.unit.id).toBe('A1-6');
  });

  it("Today's Session serves it in the teaching slot, and a re-launch re-arms the handoff", () => {
    writeCurriculumSpine(SPINE);
    finishA1();
    const slots = buildCurriculumSlots({
      userCefr: 'A1',
      screenMap: {},
      easierMap: {},
      screenCefr: {},
      isUnlocked: () => true,
    });
    expect(slots).toHaveLength(1);
    expect(slots[0]).toMatchObject({ id: 'course_level_review_A1', screen: 'levelreview' });
    expect(readLevelReviewRequest()).toBe('A1');
    sessionStorage.clear();
    rearmCourseHandoff('course_level_review_A1');
    expect(readLevelReviewRequest()).toBe('A1');
  });

  it('the next-step prompt points at the review with the level in its request', () => {
    writeCurriculumSpine(SPINE);
    finishA1();
    const n = courseNextStep(nextCourseStep()!);
    expect(n).toMatchObject({
      screen: 'levelreview',
      course: { request: 'level-review', level: 'A1' },
    });
  });

  it('serves A2 Unit 1 once the review is done — it happens once', () => {
    writeCurriculumSpine(SPINE);
    finishA1();
    recordLevelReview('A1', 14, 18);
    const step = nextCourseStep();
    expect(step?.kind).toBe('lesson');
    expect(step?.unit.id).toBe('A2-1');
  });

  it('never drags a learner who has already started A2 back to review A1', () => {
    writeCurriculumSpine(SPINE);
    finishA1();
    markLessonComplete(UNITS.find((u) => u.id === 'A2-1')!.lessons[0]!.id, '2026-09-02');
    expect(nextCourseStep()?.kind).toBe('lesson');
  });

  it('moves on when the review could not be built, instead of serving it daily', () => {
    writeCurriculumSpine(SPINE);
    finishA1();
    markLevelReviewUnavailable('A1');
    expect(nextCourseStep()?.unit.id).toBe('A2-1');
  });

  it('is not offered to a learner partway through A1', () => {
    writeCurriculumSpine(SPINE);
    for (const l of UNITS[0]!.lessons) markLessonComplete(l.id, '2026-09-01');
    master('A1-1');
    expect(nextCourseStep()?.kind).not.toBe('level-review');
  });
});

describe('pickCourseStep with fabricated rows', () => {
  function row(index: number, over: Partial<UnitProgress> = {}): UnitProgress {
    const unit = UNITS[index - 1]!;
    return {
      unit,
      done: 5,
      total: 5,
      tested: true,
      short: false,
      state: 'mastered',
      ...over,
    } as UnitProgress;
  }

  it('THE LAST LEVEL has no crossing, and still gets its review after its final unit', () => {
    const rows = UNITS.map((_, i) => row(i + 1));
    const all = new Set(UNITS.map((u) => u.id));
    const reviewed = new Set(['A1', 'A2', 'B1', 'B2', 'C1']);
    const step = pickCourseStep({
      rows,
      completed: new Set(UNITS.flatMap((u) => u.lessons.map((l) => l.id))),
      unitCount: UNITS.length,
      reviewed,
      advanced: all,
    });
    expect(step).toMatchObject({ kind: 'level-review', level: 'C2' });
    expect(step?.unit.id).toBe('C2-6');
    reviewed.add('C2');
    expect(
      pickCourseStep({
        rows,
        completed: new Set(),
        unitCount: UNITS.length,
        reviewed,
        advanced: all,
      }),
    ).toBeNull();
  });

  it("reads the gate's own `advanced` set, so a unit let through on an escape hatch counts", () => {
    // A1-3's test could not be assembled: not `tested`, but the gate advanced it.
    const rows = UNITS.slice(0, 7).map((_, i) =>
      i < 6
        ? row(i + 1, i === 2 ? { tested: false, short: true } : {})
        : row(7, { tested: false, done: 0, state: 'current' }),
    );
    const step = pickCourseStep({
      rows,
      completed: new Set(UNITS.slice(0, 6).flatMap((u) => u.lessons.map((l) => l.id))),
      unitCount: UNITS.length,
      reviewed: new Set(),
      advanced: new Set(UNITS.slice(0, 6).map((u) => u.id)),
    });
    expect(step).toMatchObject({ kind: 'level-review', level: 'A1' });
  });

  it('offers no review at all to a caller that does not pass `reviewed`', () => {
    const rows = UNITS.slice(0, 7).map((_, i) =>
      i < 6 ? row(i + 1) : row(7, { tested: false, done: 0, state: 'current' }),
    );
    const step = pickCourseStep({ rows, completed: new Set(), unitCount: UNITS.length });
    expect(step?.kind).toBe('lesson');
  });
});

describe('the record', () => {
  it('keeps the first date and the better first-try score', () => {
    recordLevelReview('A1', 10, 18, '2026-09-01');
    recordLevelReview('A1', 16, 18, '2026-09-05');
    recordLevelReview('A1', 12, 18, '2026-09-06');
    expect(readCourseUnits().reviews?.A1).toEqual({
      doneAt: '2026-09-01',
      firstTryCorrect: 16,
      total: 18,
    });
    expect(reviewedLevels().has('A1')).toBe(true);
  });

  it('an empty round records nothing', () => {
    recordLevelReview('A1', 0, 0);
    expect(readCourseUnits().reviews).toBeUndefined();
  });

  it('a real review replaces an "unavailable" marker, and a marker never overwrites a review', () => {
    markLevelReviewUnavailable('A1', '2026-09-01');
    expect(readCourseUnits().reviews?.A1?.unavailable).toBe(true);
    recordLevelReview('A1', 9, 18, '2026-09-03');
    expect(readCourseUnits().reviews?.A1).toEqual({
      doneAt: '2026-09-03',
      firstTryCorrect: 9,
      total: 18,
    });
    markLevelReviewUnavailable('A1');
    expect(readCourseUnits().reviews?.A1?.unavailable).toBeUndefined();
  });

  it('syncs: a review on either device survives, earlier date and better score win', () => {
    const local = {
      units: {},
      reviews: { A1: { doneAt: '2026-09-05', firstTryCorrect: 17, total: 18 } },
    };
    const remote = {
      units: {},
      reviews: {
        A1: { doneAt: '2026-09-01', firstTryCorrect: 10, total: 18 },
        A2: { doneAt: '2026-09-09', firstTryCorrect: 12, total: 18 },
      },
    };
    const m = mergeCourseUnits(local, remote);
    expect(m.reviews?.A1).toEqual({ doneAt: '2026-09-01', firstTryCorrect: 17, total: 18 });
    expect(m.reviews?.A2).toEqual(remote.reviews.A2);
    // And the other way round: an older remote without reviews cannot erase one.
    expect(mergeCourseUnits(local, { units: {} }).reviews?.A1).toEqual(local.reviews.A1);
  });

  it('in the merge, a real review anywhere clears a marker everywhere', () => {
    const m = mergeCourseUnits(
      {
        units: {},
        reviews: { A1: { doneAt: '2026-09-01', firstTryCorrect: 0, total: 0, unavailable: true } },
      },
      { units: {}, reviews: { A1: { doneAt: '2026-09-04', firstTryCorrect: 11, total: 18 } } },
    );
    expect(m.reviews?.A1).toEqual({ doneAt: '2026-09-04', firstTryCorrect: 11, total: 18 });
  });

  it('a device with only a review still uploads it (it is not "empty")', () => {
    recordLevelReview('A1', 12, 18);
    expect(courseUnitsOrUndef()?.reviews?.A1).toBeTruthy();
  });

  it('the handoff accepts only a real level', () => {
    requestLevelReview('B2');
    expect(readLevelReviewRequest()).toBe('B2');
    requestLevelReview('<script>');
    expect(readLevelReviewRequest()).toBe('B2');
    expect(levelReviewActivityId('B1')).toBe('course_level_review_B1');
  });
});
