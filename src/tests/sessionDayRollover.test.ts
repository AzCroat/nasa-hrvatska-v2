/**
 * sessionDayRollover — the daily session notices midnight while the app is open
 * (sweep 37, 2026-09-23).
 *
 * THE DEFECT. `useDailySession`'s rebuild effect has always computed
 * `isNewDay` — and its dependency array was `[userCefr]`, so nothing re-ran it
 * when only the DATE changed. The date check therefore fired on mount and
 * never again. On a PWA that is the normal usage pattern rather than an edge
 * case: the app sits backgrounded on a phone, midnight passes, the learner
 * brings it back, and the Today's Session card shows YESTERDAY'S plan with
 * yesterday's completions — reporting a session finished last night as
 * finished today.
 *
 * It is the CLAIMS vs EVIDENCE seam reached from the interactions side: no
 * number is invented, the card simply answers "what have you done today?" with
 * data about a different day.
 *
 * The mechanism to notice midnight was already on the same SCREEN — HomeTab's
 * `checkDay` refreshes the word and phrase of the day on `visibilitychange`.
 * The session was not wired to it.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDailySession } from '../hooks/useDailySession';
import { localDateStr } from '../lib/dateUtils';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/adaptive', () => ({
  getDueCategoryQueue: vi.fn(() => []),
  getCategoryStatus: vi.fn(() => ({ seen: false, accuracy: null, lastSeen: 0 })),
  CONJ_CATEGORIES: new Set<string>(),
  CATEGORY_MIN_CEFR: {},
}));

const NIGHT = new Date('2026-09-23T22:00:00');
const MORNING = new Date('2026-09-24T08:00:00');

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(NIGHT);
});
afterEach(() => vi.useRealTimers());

/** Midnight passes with the app backgrounded, then the learner returns. */
function resumeNextMorning(event: 'visibilitychange' | 'focus' | 'pageshow') {
  act(() => {
    vi.setSystemTime(MORNING);
    if (event === 'visibilitychange') document.dispatchEvent(new Event(event));
    else window.dispatchEvent(new Event(event));
  });
}

describe('the plan rolls over when the app comes back after midnight', () => {
  it.each(['visibilitychange', 'focus', 'pageshow'] as const)(
    'rebuilds for the new day on %s',
    (event) => {
      const { result } = renderHook(() => useDailySession('B1'));
      expect(result.current.session.date).toBe('2026-09-23');
      resumeNextMorning(event);
      expect(localDateStr()).toBe('2026-09-24');
      expect(result.current.session.date, 'still serving yesterday').toBe('2026-09-24');
    },
  );

  it("yesterday's completions do not count as today's", () => {
    const { result } = renderHook(() => useDailySession('B1'));
    const first = result.current.session.activities[0]!;
    act(() => result.current.markDone(first.id));
    expect(result.current.session.completedIds).toContain(first.id);

    resumeNextMorning('visibilitychange');
    // A genuine new day starts fresh — this is the branch that was unreachable.
    expect(result.current.session.completedIds).toEqual([]);
  });

  it('the persisted blob is rewritten, so a later mount agrees', () => {
    renderHook(() => useDailySession('B1'));
    resumeNextMorning('visibilitychange');
    const raw = JSON.parse(localStorage.getItem('nh_daily_session') || '{}');
    expect(raw.date).toBe('2026-09-24');
  });

  it('a resume on the SAME day rebuilds nothing', () => {
    const { result } = renderHook(() => useDailySession('B1'));
    const before = result.current.session;
    act(() => {
      vi.setSystemTime(new Date('2026-09-23T23:30:00'));
      document.dispatchEvent(new Event('visibilitychange'));
    });
    expect(result.current.session).toBe(before);
  });

  it('...and does not even re-render — the listener holds its stamp', () => {
    // THE FIRST DRAFT OF THE TEST ABOVE CLAIMED THIS AND DID NOT TEST IT, and
    // mutation said so: replacing the listener's `prev === localDateStr()`
    // check with an unconditional stamp left all six green, because the EFFECT
    // returns early on its own when neither the day nor the level moved. So
    // the listener's guard buys a re-render, not a rebuild — and a re-render
    // of every consumer of this hook on every tab switch is worth not paying.
    // Assert the thing the guard actually does, or it is decorative.
    let renders = 0;
    renderHook(() => {
      renders++;
      return useDailySession('B1');
    });
    const afterMount = renders;
    act(() => {
      vi.setSystemTime(new Date('2026-09-23T23:30:00'));
      document.dispatchEvent(new Event('visibilitychange'));
      window.dispatchEvent(new Event('focus'));
      window.dispatchEvent(new Event('pageshow'));
    });
    expect(renders, 'a same-day resume re-rendered the hook').toBe(afterMount);
  });
});
