/**
 * nextStep.test.ts — the constant next-step engine (owner directive,
 * 2026-08-16: "something should always be recommended to complete").
 *
 * Pins the priority ladder (unfinished session > SRS due >
 * weakest production > discovery > browse) and the core guarantee: getNextStep
 * NEVER returns null — every state of the app maps to a recommendation.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { localDateStr } from '../lib/dateUtils';

vi.mock('../lib/srs', () => ({
  getServableReviewCount: vi.fn(() => 0),
}));
vi.mock('../lib/masteryLedger', () => ({
  weakestProductionKind: vi.fn(() => null),
  buildPlanReason: vi.fn(() => null),
}));
vi.mock('../hooks/useDailySession', () => ({
  resolveAdaptiveActivity: vi.fn(() => null),
  selectProductionExercise: vi.fn(() => null),
  readMicState: vi.fn(() => 'unknown'),
  getRecentProduction: vi.fn(() => []),
}));

import { getNextStep } from '../lib/nextStep';
import { getServableReviewCount } from '../lib/srs';
import { weakestProductionKind, buildPlanReason } from '../lib/masteryLedger';
import { resolveAdaptiveActivity, selectProductionExercise } from '../hooks/useDailySession';

const POOL = new Set(['kruh', 'mlijeko']);

function seedSession(completed: string[]) {
  localStorage.setItem(
    'nh_daily_session',
    JSON.stringify({
      date: localDateStr(),
      activities: [
        { id: 'a1', label: 'SRS Review', screen: 'review', category: 'vocab' },
        { id: 'a2', label: 'Dialogue practice', screen: 'dialogue', category: 'conversation' },
      ],
      completedIds: completed,
      estimatedMinutes: 12,
    }),
  );
}

beforeEach(() => {
  localStorage.clear();
  vi.mocked(getServableReviewCount).mockReturnValue(0);
  vi.mocked(weakestProductionKind).mockReturnValue(null);
  vi.mocked(buildPlanReason).mockReturnValue(null);
  vi.mocked(resolveAdaptiveActivity).mockReturnValue(null);
  vi.mocked(selectProductionExercise).mockReturnValue(null);
});

describe('getNextStep priority ladder', () => {
  it('1: there is NO verification rung — a fresh session leads, never the Level Check (owner, 2026-11-14)', () => {
    // The recurring verification prompt was removed: the course gates progress now, so nothing
    // about a provisional level may outrank the day's own work.
    seedSession([]);
    const step = getNextStep({ userCefr: 'B1', poolWords: POOL });
    expect(step.kind).toBe('session');
    expect(step.screen).not.toBe('equivalency');
  });

  it('2: an unfinished daily session recommends its next activity (with session credit id)', () => {
    seedSession(['a1']);
    vi.mocked(getServableReviewCount).mockReturnValue(9); // due reviews must NOT outrank the plan
    const step = getNextStep({ userCefr: 'A2', poolWords: POOL });
    expect(step.kind).toBe('session');
    expect(step.screen).toBe('dialogue');
    expect(step.activityId).toBe('a2');
    expect(step.label).toContain('Dialogue practice');
    expect(step.reason).toContain('1 of 2');
  });

  it("ignores yesterday's leftover session", () => {
    localStorage.setItem(
      'nh_daily_session',
      JSON.stringify({
        date: '2000-01-01',
        activities: [{ id: 'a1', label: 'Old', screen: 'review', category: 'vocab' }],
        completedIds: [],
        estimatedMinutes: 5,
      }),
    );
    const step = getNextStep({ userCefr: 'A2', poolWords: POOL });
    expect(step.kind).not.toBe('session');
  });

  it('3: with the session done, due reviews are next', () => {
    seedSession(['a1', 'a2']);
    vi.mocked(getServableReviewCount).mockReturnValue(7);
    const step = getNextStep({ userCefr: 'A2', poolWords: POOL });
    expect(step.kind).toBe('srs');
    expect(step.screen).toBe('review');
    expect(step.label).toContain('7');
  });

  it('4: weakest production skill drives the recommendation when nothing is due', () => {
    vi.mocked(weakestProductionKind).mockReturnValue('speak');
    vi.mocked(selectProductionExercise).mockReturnValue({
      id: 'p1',
      label: 'Shadowing',
      screen: 'shadowing',
      category: 'speaking',
    } as never);
    vi.mocked(buildPlanReason).mockReturnValue('Today leans into speaking.');
    const step = getNextStep({ userCefr: 'B1', poolWords: POOL });
    expect(step.kind).toBe('production');
    expect(step.screen).toBe('shadowing');
    expect(step.reason).toBe('Today leans into speaking.');
  });

  it('5: discovery serves the least-recently-practiced exercise', () => {
    vi.mocked(resolveAdaptiveActivity).mockReturnValue({
      id: 'd1',
      label: 'Case Constellation',
      screen: 'caseconstellation',
      category: 'grammar',
    } as never);
    const step = getNextStep({ userCefr: 'B1', poolWords: POOL });
    expect(step.kind).toBe('discovery');
    expect(step.screen).toBe('caseconstellation');
  });

  it('6: NEVER null — the empty state still recommends the library', () => {
    const step = getNextStep({ userCefr: 'A1' });
    expect(step).not.toBeNull();
    expect(step.kind).toBe('browse');
    expect(step.label.length).toBeGreaterThan(0);
  });

  it('a throwing dependency degrades to the next rung, never to a crash', () => {
    vi.mocked(getServableReviewCount).mockImplementation(() => {
      throw new Error('srs dead');
    });
    const step = getNextStep({ userCefr: 'A2', poolWords: POOL });
    expect(step.kind).toBe('browse');
  });
});

// ── KEEP LEARNING (sweep 216) ────────────────────────────────────────────────
describe('rung 2 names a Keep Learning item as one', () => {
  it('"Keep learning — <label>" with the item\'s own reason once the core is done', () => {
    localStorage.setItem(
      'nh_daily_session',
      JSON.stringify({
        date: localDateStr(),
        activities: [
          { id: 'a1', label: 'SRS Review', screen: 'review', category: 'vocab' },
          {
            id: 'keep_drill_x',
            label: 'Genitive',
            screen: 'genitivedrill',
            category: 'genitive',
            reason: 'Your Genitive check: 2 of 6.',
            keep: 1,
          },
        ],
        completedIds: ['a1'],
        estimatedMinutes: 10,
      }),
    );
    const step = getNextStep({ userCefr: 'B1', poolWords: POOL });
    expect(step.kind).toBe('session');
    expect(step.activityId).toBe('keep_drill_x');
    expect(step.label).toBe('Keep learning — Genitive');
    expect(step.reason).toBe('Your Genitive check: 2 of 6.');
  });

  it('a plan written by the Stretch build reads its tags as Keep Learning blocks', () => {
    localStorage.setItem(
      'nh_daily_session',
      JSON.stringify({
        date: localDateStr(),
        activities: [
          { id: 'a1', label: 'SRS Review', screen: 'review', category: 'vocab' },
          { id: 's1', label: 'Dictation', screen: 'dictation', category: 'writing', stretch: 1 },
        ],
        completedIds: ['a1'],
        estimatedMinutes: 10,
        stretchTarget: 2,
      }),
    );
    const step = getNextStep({ userCefr: 'B1', poolWords: POOL });
    expect(step.label).toBe('Keep learning — Dictation');
  });
});
