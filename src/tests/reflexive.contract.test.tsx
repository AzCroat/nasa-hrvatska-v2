/**
 * reflexive.contract.test.tsx — Pattern X
 *
 * ReflexiveScreen has a tabbed interface; the contract fires on the Quiz tab.
 * Quiz options use #e7e5e4 = rgb(231,229,228) as the unanswered border colour.
 *
 * `reflexive` is registered `gated`, but the screen used to credit gc AND pay the
 * whole correctCount*5 award on every question ANSWERED, at any score. The old
 * helper here clicked option 0 of every question, so it could not tell a pass
 * from a fail and went green either way. Both branches are asserted now; see
 * src/tests/helpers/mcDrill.tsx.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { REFLEXIVE } from '../data';
import { answerAll, makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

const OPT_BORDER = 'rgb(231, 229, 228)';
// rnd()=0.9999 → no Fisher-Yates swaps → every quiz item keeps its option order.
const ANSWERS = (REFLEXIVE.quiz as { a: string }[]).map((q) => q.a);

function openQuizTab(): void {
  const quizTab = screen
    .queryAllByRole('button')
    .find((b) => /^Quiz$/i.test((b as HTMLElement).textContent?.trim() ?? ''));
  if (!quizTab) throw new Error('reflexive: Quiz tab not found');
  fireEvent.click(quizTab);
}

describe('ReflexiveScreen contract (Pattern X)', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('credits gc + vs:reflexive and pays the score-scaled award on a passing run', async () => {
    const { default: ReflexiveScreen } =
      await import('../components/practice/exercises/ReflexiveScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ReflexiveScreen goBack={vi.fn()} award={award} />));
    openQuizTab();
    answerAll(OPT_BORDER, ANSWERS, 'correct');

    // Non-vacuity: the results panel rendered its >=80% badge, so the run really
    // finished with a perfect score. (The score line itself is split across text
    // nodes, so match the badge rather than the string.)
    expect(screen.getByText('🏆')).toBeTruthy();
    expect(screen.queryByTestId('drill-retry')).toBeNull();

    expect(award).toHaveBeenCalled();
    const calls = award.mock.calls as [number, boolean, string][];
    const grammarCall = calls.find((c) => c[2] === 'grammar');
    expect(grammarCall).toBeDefined();
    expect(grammarCall![0]).toBe(ANSWERS.length * 5);

    expect(markQuestMock).toHaveBeenCalledWith('grammar');

    expect(setStats).toHaveBeenCalled();
    const updater = setStats.mock.calls[0]![0] as (prev: Stats) => Stats;
    const next = updater({ ...ctx.stats });
    expect(next.gc).toBe(1);
    expect(next.vs).toContain('reflexive');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['reflexive']) }),
    );
  });

  it('credits nothing and pays no XP on a failing run', async () => {
    const { default: ReflexiveScreen } =
      await import('../components/practice/exercises/ReflexiveScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ReflexiveScreen goBack={vi.fn()} award={award} />));
    openQuizTab();
    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    // Non-vacuity: the run finished — only the credit is withheld.
    expect(screen.getByTestId('drill-retry')).toBeTruthy();

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    expect(award).not.toHaveBeenCalled();
  });

  it('re-pays the finish XP on a replay but never credits gc twice', async () => {
    // This drill has always paid correctCount*5 on every completed run — the
    // per-day xpCooldown in useAward is what limits farming, not the vs flag. The
    // `awardOnReplay` opt-in on completeExercise is what keeps that true after the
    // migration; without it, routing through the authority would have silently
    // demoted a per-run bonus into a once-ever one.
    const { default: ReflexiveScreen } =
      await import('../components/practice/exercises/ReflexiveScreen');
    const ctx = makeDrillCtx(['reflexive']);
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ReflexiveScreen goBack={vi.fn()} award={award} />));
    openQuizTab();
    answerAll(OPT_BORDER, ANSWERS, 'correct');

    const calls = award.mock.calls as [number, boolean, string][];
    expect(calls.find((c) => c[0] === ANSWERS.length * 5)).toBeDefined();
    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });
});
