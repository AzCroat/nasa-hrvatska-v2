/**
 * negation.contract.test.tsx — behavioural.
 *
 * HISTORY
 * -------
 * This file was first a source-regex spec that pinned the hand-rolled completion
 * expression (`gc: (prev.gc||0)+1`), which comprehensionGateBypass.contract.test.ts
 * asserts the exact opposite of for the screens it covers. It was then loosened to
 * accept both the legacy and the migrated shape, with a header noting the gap it
 * deliberately did not assert:
 *
 *   "`negation` is registered `gated`, but the screen credits on
 *    `answeredCount + 1 >= shuffledQuiz.length` — every question ANSWERED, not 75%
 *    correct. It computes `correctCount` and never reads it in the completion
 *    branch, so answering everything wrong still earns gc + XP + quest."
 *
 * That gap is now closed — the screen routes through `completeExercise` — so the
 * test asserts it directly instead of describing it in a comment. Source regexes
 * are gone: what matters is that a passing run is credited once and a failing run
 * is not, however that is spelled.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';
import { NEGATION_QUIZ } from '../components/practice/exercises/NegationScreen';
import { answerAll, makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

const OPT_BORDER = 'rgb(231, 229, 228)';
// rnd()=0.9999 → no Fisher-Yates swaps → sh([...NEGATION_QUIZ]).slice(0,14) is the
// first 14 items in order, options likewise.
const ANSWERS = (NEGATION_QUIZ as { a: string }[]).slice(0, 14).map((q) => q.a);

function openQuizTab(): void {
  fireEvent.click(screen.getByText('🎯 Quiz'));
}

describe('NegationScreen — completion gate', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('is registered in the completion registry as a gated exercise', () => {
    expect(EXERCISE_COMPLETION['negation']?.policy.kind).toBe('gated');
  });

  it('credits gc + vs:negation and marks the quest on a passing run', async () => {
    const { default: NegationScreen } =
      await import('../components/practice/exercises/NegationScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <NegationScreen goBack={vi.fn()} award={award} />));
    openQuizTab();
    answerAll(OPT_BORDER, ANSWERS, 'correct');

    // Non-vacuity: the results panel rendered its >=80% badge.
    expect(screen.getByText('🏆')).toBeTruthy();
    expect(screen.queryByTestId('drill-retry')).toBeNull();

    expect(markQuestMock).toHaveBeenCalledWith('grammar');

    expect(setStats).toHaveBeenCalled();
    const updater = setStats.mock.calls.at(-1)![0] as (prev: Stats) => Stats;
    const next = updater({ ...ctx.stats });
    expect(next.gc).toBe(1);
    expect(next.vs).toContain('negation');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['negation']) }),
    );
  });

  it('credits nothing on a zero-correct run — the gap this file used to only describe', async () => {
    const { default: NegationScreen } =
      await import('../components/practice/exercises/NegationScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <NegationScreen goBack={vi.fn()} award={award} />));
    openQuizTab();
    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    // Non-vacuity: every question WAS answered — the finish happened.
    expect(screen.getByTestId('drill-retry')).toBeTruthy();

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    expect(award).not.toHaveBeenCalled();
  });

  it('signals daily-session completion even on a zero-correct run', async () => {
    // Independent of the gate: a finished activity must never strand the daily
    // session. completeExercise signals unconditionally, before the pass check.
    sessionStorage.setItem('nh_session_started', 'negation');
    sessionStorage.removeItem('nh_session_completed');

    const { default: NegationScreen } =
      await import('../components/practice/exercises/NegationScreen');
    const ctx = makeDrillCtx();

    render(withStats(ctx, <NegationScreen goBack={vi.fn()} award={ctx.award} />));
    openQuizTab();
    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    expect(sessionStorage.getItem('nh_session_completed')).toBe('negation');
    sessionStorage.removeItem('nh_session_started');
    sessionStorage.removeItem('nh_session_completed');
  });

  it('is idempotent — skips setStats/writeDelta when vs already has negation', async () => {
    const { default: NegationScreen } =
      await import('../components/practice/exercises/NegationScreen');
    const ctx = makeDrillCtx(['negation']);
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <NegationScreen goBack={vi.fn()} award={award} />));
    openQuizTab();
    answerAll(OPT_BORDER, ANSWERS, 'correct');

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });
});
