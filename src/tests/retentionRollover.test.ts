/**
 * retentionRollover — a re-check that comes due overnight reaches the plan
 * (sweep 47, 2026-09-23).
 *
 * The second and last item from the INTERACTIONS list: "the retention ladder vs
 * a date rollover with the app left open."
 *
 * THE RISK. `lessonRetention`'s whole scheduler is date arithmetic — a lesson's
 * `due` is a `YYYY-MM-DD`, and `retentionStatus(store, today)` compares it
 * against today. The daily plan claims a slot for it (`selectRetentionSlot`,
 * P1.2) at SESSION-BUILD time. Sweep 37 established that the plan itself was
 * built once and never noticed midnight; if anything in this chain had captured
 * `today` earlier than the rebuild, a re-check due "tomorrow" would stay
 * invisible on the day it actually fell due — a lesson quietly slipping while
 * the scheduler believed it had scheduled it. That is the failure the ladder
 * exists to prevent, reached through the calendar instead of through the
 * learner.
 *
 * THE RESULT IS NEGATIVE and is recorded with a driven guard rather than a
 * paragraph. Every date in the store is read at CALL time (`today` defaults to
 * `localDateStr()` in every exported function), and the slot is recomputed by
 * `buildSessionActivities` — so the fix that made the plan notice midnight is
 * what carries the ladder across it too. **The two are only correct TOGETHER**,
 * which is precisely why neither file's own tests can see it: the store's tests
 * pass `today` explicitly, and the session's tests do not seed a retention
 * store.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDailySession } from '../hooks/useDailySession';
import { LESSON_RETENTION_KEY, retentionStatus, readRetention } from '../lib/lessonRetention';
import { selectRetentionSlot } from '../lib/retentionSlot';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/adaptive', () => ({
  getDueCategoryQueue: vi.fn(() => []),
  getCategoryStatus: vi.fn(() => ({ seen: false, accuracy: null, lastSeen: 0 })),
  CONJ_CATEGORIES: new Set<string>(),
  CATEGORY_MIN_CEFR: {},
}));

const TONIGHT = new Date('2026-09-23T22:00:00');
const TOMORROW_MORNING = new Date('2026-09-24T08:00:00');

/** A lesson passed a few days ago whose re-check falls due on the 24th. */
function seedRecheckDueTomorrow() {
  localStorage.setItem(
    LESSON_RETENTION_KEY,
    JSON.stringify({
      v: 1,
      lessons: {
        'a1-cases': {
          passedAt: '2026-09-21',
          stage: 0,
          due: '2026-09-24',
          checks: 1,
          last: { at: '2026-09-21', score: 6, total: 6, kind: 'mastery' },
        },
      },
      items: {},
    }),
  );
}

function resumeTomorrow() {
  act(() => {
    vi.setSystemTime(TOMORROW_MORNING);
    document.dispatchEvent(new Event('visibilitychange'));
  });
}

const hasLessonReview = (activities: Array<{ screen: string }>) =>
  activities.some((a) => a.screen === 'lessonreview');

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(TONIGHT);
});
afterEach(() => vi.useRealTimers());

describe('the store reads the date at call time', () => {
  it('is not due tonight and is due tomorrow — the premise, asserted', () => {
    seedRecheckDueTomorrow();
    expect(retentionStatus(readRetention()).any).toBe(false);
    vi.setSystemTime(TOMORROW_MORNING);
    const after = retentionStatus(readRetention());
    expect(after.any).toBe(true);
    expect(after.rechecks.map((r) => r.lessonId)).toContain('a1-cases');
  });

  it('the slot follows it without being told the date', () => {
    seedRecheckDueTomorrow();
    expect(selectRetentionSlot()).toBeNull();
    vi.setSystemTime(TOMORROW_MORNING);
    expect(selectRetentionSlot()?.screen).toBe('lessonreview');
  });
});

describe('a re-check that falls due overnight reaches the plan', () => {
  it('appears after the app comes back, with no remount', () => {
    seedRecheckDueTomorrow();
    const { result } = renderHook(() => useDailySession('B1'));
    expect(
      hasLessonReview(result.current.session.activities),
      'the re-check is due on the 24th and tonight is the 23rd',
    ).toBe(false);

    resumeTomorrow();

    expect(
      hasLessonReview(result.current.session.activities),
      'The re-check came due overnight and the rebuilt plan does not carry it. ' +
        'The ladder schedules by calendar date; if the plan that claims its slot ' +
        'cannot see the new day, a lesson slips on exactly the day it was due.',
    ).toBe(true);
  });

  it('the rebuilt plan is persisted with the slot, so a later mount agrees', () => {
    seedRecheckDueTomorrow();
    renderHook(() => useDailySession('B1'));
    resumeTomorrow();
    const raw = JSON.parse(localStorage.getItem('nh_daily_session') || '{}');
    expect(raw.date).toBe('2026-09-24');
    expect(hasLessonReview(raw.activities || [])).toBe(true);
  });

  it('nothing due means no slot, before or after the rollover', () => {
    // The other direction: the slot must not appear merely because the day
    // changed. A re-check due in a week is not due tomorrow.
    localStorage.setItem(
      LESSON_RETENTION_KEY,
      JSON.stringify({
        v: 1,
        lessons: {
          'a1-cases': {
            passedAt: '2026-09-23',
            stage: 0,
            due: '2026-10-01',
            checks: 1,
            last: { at: '2026-09-23', score: 6, total: 6, kind: 'mastery' },
          },
        },
        items: {},
      }),
    );
    const { result } = renderHook(() => useDailySession('B1'));
    expect(hasLessonReview(result.current.session.activities)).toBe(false);
    resumeTomorrow();
    expect(hasLessonReview(result.current.session.activities)).toBe(false);
  });
});
