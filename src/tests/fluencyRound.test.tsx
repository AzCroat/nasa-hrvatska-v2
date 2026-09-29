// src/tests/fluencyRound.test.tsx
//
// THE FLUENCY ROUND (academic recommendation 4, owner go-ahead 2026-09-29): 90 seconds
// of questions drawn only from PASSED lessons, answered fast; a rate and a personal
// best; a miss goes back into Lesson Review; offered through Keep Learning once three
// lessons are passed.

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';

const signal = vi.fn();
vi.mock('../lib/sessionSignal', () => ({
  signalSessionCompleteIfActive: (...a: unknown[]) => signal(...a),
}));
const LESSONS_FIXTURE: unknown[] = [];
vi.mock('../lib/contentClient', () => ({ getLessons: async () => LESSONS_FIXTURE }));

import {
  buildFluencyRound,
  fluencyAvailable,
  fluencyRate,
  readFluencyBest,
  recordFluencyRate,
  FLUENCY_SECONDS,
} from '../lib/fluencyRound';
import { recordMasteryPass, readRetention } from '../lib/lessonRetention';
import FluencyRoundScreen from '../components/practice/FluencyRoundScreen';

const lesson = (id: string) => ({
  id,
  slides: [
    {
      type: 'check',
      items: [0, 1, 2, 3, 0, 1].map((c, i) => ({
        q: `${id}-Q${i}`,
        options: ['a', 'b', 'c', 'd'],
        correct: c,
        explanation: 'e',
      })),
    },
  ],
});
const pass = (id: string) => recordMasteryPass(id, { score: 6, total: 6, results: [] });

beforeEach(() => {
  localStorage.clear();
  signal.mockClear();
  LESSONS_FIXTURE.length = 0;
});

describe('the round', () => {
  it('draws only from PASSED lessons, interleaved so neighbours differ', () => {
    ['a', 'b', 'c'].forEach(pass);
    const items = buildFluencyRound([lesson('a'), lesson('b'), lesson('c'), lesson('z')], 1);
    expect(new Set(items.map((i) => i.lessonId))).toEqual(new Set(['a', 'b', 'c']));
    for (let k = 1; k < items.length; k++)
      expect(items[k]!.lessonId).not.toBe(items[k - 1]!.lessonId);
  });

  it('is offered from three passed lessons, not before', () => {
    ['a', 'b'].forEach(pass);
    expect(fluencyAvailable()).toBe(false);
    pass('c');
    expect(fluencyAvailable()).toBe(true);
  });

  it('rate is correct answers per minute of time used; a best is only ever raised', () => {
    expect(fluencyRate(15, 90)).toBe(10);
    expect(fluencyRate(0, 0)).toBe(0);
    expect(recordFluencyRate(10)).toBe(true);
    expect(recordFluencyRate(8)).toBe(false);
    expect(readFluencyBest()).toBe(10);
  });
});

describe('the screen', () => {
  it('says why when fewer than three lessons are passed', () => {
    render(<FluencyRoundScreen goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByTestId('fluency-unavailable').textContent).toMatch(/passed 3 lessons/);
  });

  it('runs a timed round, files a miss for review, and pays once on the result', async () => {
    ['a', 'b', 'c'].forEach(pass);
    LESSONS_FIXTURE.push(lesson('a'), lesson('b'), lesson('c'));
    vi.useFakeTimers();
    const award = vi.fn();
    render(<FluencyRoundScreen goBack={vi.fn()} award={award} tickMs={10} />);
    await act(async () => {
      await vi.runOnlyPendingTimersAsync();
    });
    fireEvent.click(screen.getByTestId('fluency-start'));
    // Answer two: the first right, the second wrong.
    for (const right of [true, false]) {
      const q = screen.getByTestId('fluency-question').textContent!;
      const idx = Number(q.split('-Q')[1]);
      const correct = [0, 1, 2, 3, 0, 1][idx]!;
      const opts = screen.getAllByTestId('fluency-option');
      const pick = opts.find((o) => (Number(o.getAttribute('data-source')) === correct) === right)!;
      fireEvent.click(pick);
      await act(async () => {
        vi.advanceTimersByTime(400);
      });
    }
    // Let the clock run out.
    for (let t = 0; t <= FLUENCY_SECONDS + 2; t++) {
      await act(async () => {
        vi.advanceTimersByTime(10);
      });
    }
    vi.useRealTimers();
    expect(screen.getByTestId('fluency-result')).toBeTruthy();
    expect(screen.getByTestId('fluency-score').textContent).toMatch(/1 of 2 right/);
    expect(award).toHaveBeenCalledTimes(1);
    expect(award).toHaveBeenCalledWith(1, false, 'default');
    expect(signal).toHaveBeenCalledWith('fluency');
    // The miss is a Lesson Review card; no ladder moved.
    expect(Object.keys(readRetention().items)).toHaveLength(1);
    expect(Object.values(readRetention().lessons).every((r) => r.stage === 0)).toBe(true);
  });

  it('a round in which nothing was answered pays nothing', async () => {
    ['a', 'b', 'c'].forEach(pass);
    LESSONS_FIXTURE.push(lesson('a'), lesson('b'), lesson('c'));
    vi.useFakeTimers();
    const award = vi.fn();
    render(<FluencyRoundScreen goBack={vi.fn()} award={award} tickMs={10} />);
    await act(async () => {
      await vi.runOnlyPendingTimersAsync();
    });
    fireEvent.click(screen.getByTestId('fluency-start'));
    for (let t = 0; t <= FLUENCY_SECONDS + 2; t++) {
      await act(async () => {
        vi.advanceTimersByTime(10);
      });
    }
    vi.useRealTimers();
    expect(screen.getByTestId('fluency-result')).toBeTruthy();
    expect(award).not.toHaveBeenCalled();
    expect(signal).not.toHaveBeenCalled();
  });
});

describe('Keep Learning offers it (sweep 216)', () => {
  it('is a tier-7 item from three passed lessons, once nothing unproven remains, with a reason that states the count', async () => {
    const { gatherKeepCandidates } = await import('../lib/keepLearning');
    const deps = {
      dueReviews: 0,
      micBlocked: false,
      recentScreens: [],
      selectProduction: () => null,
    };
    const plan = { activities: [] };
    expect(
      gatherKeepCandidates('A1', plan, 1, deps).some((c) => c.activity.screen === 'fluency'),
    ).toBe(false);
    ['a', 'b', 'c'].forEach(pass);
    const c = gatherKeepCandidates('A1', plan, 1, deps).find(
      (x) => x.activity.screen === 'fluency',
    );
    expect(c).toBeTruthy();
    expect(c!.activity.reason).toMatch(/3 lessons you have passed/);
    expect(c!.tier).toBe(7);
  });
});
