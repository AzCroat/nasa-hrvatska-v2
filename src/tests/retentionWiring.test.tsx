// retentionWiring.test.tsx — the retention project is WIRED, not just written
// (owner directive, 2026-09-07).
//
// The store has its own tests; these drive the REAL surfaces, because a
// component test that supplies its own props cannot see whether the app is
// connected to it (the `award` finding, CLAUDE.md). Four seams:
//   1. AnimatedLesson records the pass into the store (schedule + cards).
//   2. The session builder claims a slot when something is due, and none when
//      nothing is.
//   3. getNextStep offers the review above discretionary practice.
//   4. The screen serves the queue and reports results per lesson AND part.
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import React from 'react';

// ── Shared mocks ────────────────────────────────────────────────────────────
const setStats = vi.fn();
const writeDelta = vi.fn();
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ setStats, writeDelta, stats: { vs: [], lc: 0, gc: 0 } }),
}));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../lib/teachPractice', () => ({
  recordLessonTaught: vi.fn(),
  recordScreenPractised: vi.fn(),
  pendingTaughtCategories: vi.fn(() => []),
  LESSON_TAUGHT_CATEGORY: {},
}));
vi.mock('../lib/curriculumProgress', async (orig) => {
  const actual = (await orig()) as Record<string, unknown>;
  return { ...actual, markLessonComplete: vi.fn() };
});
vi.mock('../lib/sessionSignal', () => ({
  signalSessionCompleteIfActive: vi.fn(),
  EXERCISE_COMPLETE_EVENT: 'nh:exercise-complete',
  REQUEST_NEXT_STEP_EVENT: 'nh:request-next-step',
  clearActiveSessionActivity: vi.fn(),
}));

import AnimatedLesson from '../components/learn/AnimatedLesson';
import RetentionCheckScreen from '../components/learn/RetentionCheckScreen';
import {
  readRetention,
  recordMasteryPass,
  itemKey,
  addDays,
  RETENTION_INTERVALS,
} from '../lib/lessonRetention';
import { localDateStr } from '../lib/dateUtils';

const item = (n: number, correct: number) => ({
  q: `Question ${n}`,
  options: [`${n}-a`, `${n}-b`, `${n}-c`, `${n}-d`],
  correct,
  explanation: `Rule ${n}`,
});
const CHECK_ITEMS = [item(1, 0), item(2, 1), item(3, 2), item(4, 3), item(5, 0), item(6, 1)];
const LESSON = {
  id: 'plural-nouns',
  title: 'Plural of Nouns',
  level: 'A1',
  duration: '~6 min',
  bg: '#f0fdf4',
  color: '#16a34a',
  icon: '📚',
  slides: [
    { type: 'intro', title: 'Intro', body: 'b', icon: '📚' },
    { type: 'quiz', q: 'Formative?', options: ['yes', 'no'], correct: 0, explanation: 'e' },
    { type: 'check', title: 'Mastery Check', items: CHECK_ITEMS },
    { type: 'summary', title: 'Summary', points: ['p1'] },
  ],
};

const next = () => fireEvent.click(screen.getByTestId('lesson-nav-next'));

function answerFormative() {
  const opts = screen.getAllByRole('button', { name: /^Option/ });
  fireEvent.click(opts[0]!);
  fireEvent.click(screen.getByText('Check Answer'));
}

/** Answer the mastery check; `wrong` names item numbers to miss. */
function answerCheck(wrong: number[] = []) {
  for (let i = 0; i < CHECK_ITEMS.length; i++) {
    const check = screen.getByTestId('lesson-check');
    const options = within(check).getAllByTestId('lesson-check-option');
    const n = Number(within(check).getByTestId('lesson-check-question').textContent!.slice(9));
    const correctSource = CHECK_ITEMS[n - 1]!.correct;
    const pick = wrong.includes(n)
      ? options.find((o) => Number(o.getAttribute('data-source')) !== correctSource)!
      : options.find((o) => Number(o.getAttribute('data-source')) === correctSource)!;
    fireEvent.click(pick);
    const nextQ = within(check).queryByTestId('lesson-check-next');
    if (nextQ) fireEvent.click(nextQ);
  }
}

beforeEach(() => {
  localStorage.clear();
  setStats.mockClear();
  writeDelta.mockClear();
});

describe('1. the lesson records its pass into the retention schedule', () => {
  it('a PASS schedules the first re-check and files every missed item as a card', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    next();
    answerFormative();
    next();
    answerCheck([3]); // 5/6 — a pass with one miss
    next();
    expect(screen.getByTestId('lesson-complete')).toBeTruthy();

    const store = readRetention();
    const rec = store.lessons['plural-nouns'];
    expect(rec, 'the pass must create a retention record').toBeTruthy();
    expect(rec!.due).toBe(addDays(localDateStr(), RETENTION_INTERVALS[0]));
    // Only the missed item becomes a card.
    expect(Object.keys(store.items)).toEqual([itemKey('plural-nouns', 2)]);
  });

  it('a FAIL records nothing — there is no schedule to keep for a lesson not passed', () => {
    render(<AnimatedLesson lesson={LESSON} goBack={vi.fn()} award={vi.fn()} />);
    next();
    answerFormative();
    next();
    answerCheck([1, 2, 3]); // 3/6
    next();
    expect(screen.getByTestId('lesson-check-failed')).toBeTruthy();
    expect(readRetention().lessons['plural-nouns']).toBeUndefined();
    expect(readRetention().items).toEqual({});
  });
});

describe('2. the daily session claims a slot for what is due', () => {
  it('adds the Lesson Review slot with an honest reason, and none when nothing is due', async () => {
    vi.resetModules();
    vi.doMock('../lib/srs', () => ({
      getDueReviews: () => [],
      getServableReviewCount: () => 0,
    }));
    const { buildSessionActivities } = await import('../hooks/useDailySession');

    // Nothing passed yet → no slot at all.
    expect(buildSessionActivities('A1').some((a) => a.screen === 'lessonreview')).toBe(false);

    // A lesson passed 3 days ago is due today.
    recordMasteryPass('plural-nouns', {
      score: 6,
      total: 6,
      results: [],
      at: addDays(localDateStr(), -RETENTION_INTERVALS[0]),
    });
    const acts = buildSessionActivities('A1');
    const slot = acts.find((a) => a.screen === 'lessonreview');
    expect(slot, 'a due re-check must claim a session slot').toBeTruthy();
    expect(slot!.reason).toMatch(/retention check/i);
  });

  it('the slot is routable — it is in the session screen allowlist', async () => {
    const { SESSION_SCREEN_IDS } = await import('../hooks/useDailySession');
    expect(SESSION_SCREEN_IDS.has('lessonreview')).toBe(true);
  });
});

describe('3. the next-step engine offers the review above discretionary practice', () => {
  it('recommends it when something is due, and not when nothing is', async () => {
    vi.resetModules();
    vi.doMock('../lib/cefrCertification', () => ({
      getVerificationGate: () => ({ required: false }),
      isVerificationQuiet: () => false,
    }));
    vi.doMock('../lib/srs', () => ({ getServableReviewCount: () => 0 }));
    vi.doMock('../lib/masteryLedger', () => ({
      weakestProductionKind: () => 'write',
      buildPlanReason: () => null,
    }));
    vi.doMock('../hooks/useDailySession', () => ({
      resolveAdaptiveActivity: () => null,
      selectProductionExercise: () => ({
        screen: 'writing_guided',
        category: 'writing',
        label: 'Guided Writing',
      }),
      readMicState: () => 'granted',
      getRecentProduction: () => [],
    }));
    const { getNextStep } = await import('../lib/nextStep');

    // Nothing due → the ladder falls through to production, as before.
    expect(getNextStep({ userCefr: 'A1' }).kind).toBe('production');

    recordMasteryPass('plural-nouns', {
      score: 6,
      total: 6,
      results: [],
      at: addDays(localDateStr(), -RETENTION_INTERVALS[0]),
    });
    const step = getNextStep({ userCefr: 'A1' });
    expect(step.kind).toBe('retention');
    expect(step.screen).toBe('lessonreview');
  });
});

describe('4. the review screen serves the queue and reports per lesson and part', () => {
  const LESSONS = [LESSON];

  it('shows the caught-up state when nothing is due', () => {
    render(<RetentionCheckScreen lessons={LESSONS} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('retention-empty')).toBeTruthy();
  });

  it('serves a due re-check and PASSING it advances that lesson’s ladder', async () => {
    const passedAt = addDays(localDateStr(), -RETENTION_INTERVALS[0]);
    recordMasteryPass('plural-nouns', { score: 6, total: 6, results: [], at: passedAt });
    const before = readRetention().lessons['plural-nouns']!;

    render(<RetentionCheckScreen lessons={LESSONS} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('retention-check').getAttribute('data-part')).toBe('recheck');

    for (let i = 0; i < CHECK_ITEMS.length; i++) {
      const qText = screen.getByTestId('retention-check').textContent!;
      const n = Number(/Question (\d)/.exec(qText)![1]);
      const opts = screen.getAllByTestId('retention-option');
      const right = opts.find(
        (o) => Number(o.getAttribute('data-source')) === CHECK_ITEMS[n - 1]!.correct,
      )!;
      fireEvent.click(right);
      fireEvent.click(screen.getByTestId('retention-next'));
    }

    await waitFor(() => expect(screen.getByTestId('retention-done')).toBeTruthy());
    expect(screen.getByTestId('retention-score').textContent).toContain('6/6');
    const after = readRetention().lessons['plural-nouns']!;
    expect(after.stage).toBe(before.stage + 1);
    expect(after.due > before.due).toBe(true);
  });

  it('FAILING a re-check resets the ladder and brings the lesson back tomorrow', async () => {
    recordMasteryPass('plural-nouns', {
      score: 6,
      total: 6,
      results: [],
      at: addDays(localDateStr(), -RETENTION_INTERVALS[0]),
    });
    render(<RetentionCheckScreen lessons={LESSONS} goBack={vi.fn()} award={vi.fn()} />);

    for (let i = 0; i < CHECK_ITEMS.length; i++) {
      const qText = screen.getByTestId('retention-check').textContent!;
      const n = Number(/Question (\d)/.exec(qText)![1]);
      const opts = screen.getAllByTestId('retention-option');
      const wrong = opts.find(
        (o) => Number(o.getAttribute('data-source')) !== CHECK_ITEMS[n - 1]!.correct,
      )!;
      fireEvent.click(wrong);
      fireEvent.click(screen.getByTestId('retention-next'));
    }

    await waitFor(() => expect(screen.getByTestId('retention-done')).toBeTruthy());
    const after = readRetention().lessons['plural-nouns']!;
    expect(after.stage).toBe(0);
    expect(after.due).toBe(addDays(localDateStr(), 1));
    // Every wrong answer is now a card.
    expect(Object.keys(readRetention().items).length).toBe(CHECK_ITEMS.length);
  });

  it('reveals the explanation before letting the learner move on', () => {
    recordMasteryPass('plural-nouns', {
      score: 6,
      total: 6,
      results: [],
      at: addDays(localDateStr(), -RETENTION_INTERVALS[0]),
    });
    render(<RetentionCheckScreen lessons={LESSONS} goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.queryByTestId('retention-next')).toBeNull();
    fireEvent.click(screen.getAllByTestId('retention-option')[0]!);
    expect(screen.getByTestId('retention-feedback')).toBeTruthy();
    expect(screen.getByTestId('retention-next')).toBeTruthy();
  });
});
