/**
 * nextStep.test.ts — the constant next-step engine (owner directive,
 * 2026-08-16: "something should always be recommended to complete").
 *
 * Pins the priority ladder (verification > unfinished session > SRS due >
 * weakest production > discovery > browse) and the core guarantee: getNextStep
 * NEVER returns null — every state of the app maps to a recommendation.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { localDateStr } from '../lib/dateUtils';

vi.mock('../lib/cefrCertification', () => ({
  getVerificationGate: vi.fn(() => ({ required: false, target: null, options: [] })),
  // Quiet period (2026-08-18): default NOT quiet so the verification-rung
  // tests keep their original meaning; the quiet behavior has its own test.
  isVerificationQuiet: vi.fn(() => false),
}));
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
import { getVerificationGate } from '../lib/cefrCertification';
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
  vi.mocked(getVerificationGate).mockReturnValue({
    required: false,
    target: null,
    options: [],
  } as never);
  vi.mocked(getServableReviewCount).mockReturnValue(0);
  vi.mocked(weakestProductionKind).mockReturnValue(null);
  vi.mocked(buildPlanReason).mockReturnValue(null);
  vi.mocked(resolveAdaptiveActivity).mockReturnValue(null);
  vi.mocked(selectProductionExercise).mockReturnValue(null);
});

describe('getNextStep priority ladder', () => {
  it('1: a pending verification gate outranks everything', () => {
    vi.mocked(getVerificationGate).mockReturnValue({
      required: true,
      target: 'B1',
      options: ['B1', 'A2'],
    } as never);
    seedSession([]); // even with a fresh session waiting
    const step = getNextStep({ userCefr: 'B1', poolWords: POOL });
    expect(step.kind).toBe('verification');
    expect(step.screen).toBe('equivalency');
    expect(step.label).toContain('B1');
  });

  it('1b: the QUIET PERIOD stands the verification rung down — practice resumes (owner, 2026-08-18)', async () => {
    // Right after an attempt (pass or fail), "retake the test" is the wrong
    // recommendation: the ladder must fall through to real practice.
    const { isVerificationQuiet } = await import('../lib/cefrCertification');
    vi.mocked(getVerificationGate).mockReturnValue({
      required: true,
      target: 'B1',
      options: ['B1'],
    } as never);
    vi.mocked(isVerificationQuiet).mockReturnValue(true);
    vi.mocked(weakestProductionKind).mockReturnValue('write');
    vi.mocked(selectProductionExercise).mockReturnValue({
      id: 'writing_guided',
      label: 'Guided Writing',
      screen: 'writing_guided',
      category: 'writing',
    } as never);
    const step = getNextStep({ userCefr: 'B1', poolWords: POOL });
    expect(step.kind).not.toBe('verification');
    expect(step.kind).toBe('production'); // the ledger's weakest skill wins instead
    vi.mocked(isVerificationQuiet).mockReturnValue(false);
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
    vi.mocked(getVerificationGate).mockImplementation(() => {
      throw new Error('storage dead');
    });
    vi.mocked(getServableReviewCount).mockImplementation(() => {
      throw new Error('srs dead');
    });
    const step = getNextStep({ userCefr: 'A2', poolWords: POOL });
    expect(step.kind).toBe('browse');
  });
});
