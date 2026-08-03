/**
 * comparatives.contract.test.tsx — Pattern X
 *
 * ComparativesScreen fires the contract when all comparative quiz questions are
 * answered. The reference table buttons use border:none+borderBottom; quiz
 * options use #d6d3d1 = rgb(214,211,209) for the unanswered border, which is how
 * `answerAll` tells them apart.
 *
 * `comparatives` is registered `gated`, so the contract is no longer "every
 * question was answered" but "every question was answered AND the run passed
 * 75%". The old helper clicked option 0 of every question — roughly 1/15 correct
 * — so it could not distinguish those, and the screen credited gc either way.
 * Both branches are asserted below.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { COMPQUIZ } from '../data';
import { answerAll, makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

const OPT_BORDER = 'rgb(214, 211, 209)';
// rnd()=0.9999 → Fisher-Yates makes no swaps → shMemo('cq', COMPQUIZ, 15) is
// COMPQUIZ.slice(0,15) in order, and each question's options keep their order.
const ANSWERS = (COMPQUIZ as { a: string }[]).slice(0, 15).map((q) => q.a);

describe('ComparativesScreen contract (Pattern X)', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('credits gc + vs:comparatives and marks the quest on a passing run', async () => {
    const { default: ComparativesScreen } =
      await import('../components/practice/exercises/ComparativesScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ComparativesScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'correct');

    // Non-vacuity: the run really reached the results panel.
    expect(screen.getByText(`${ANSWERS.length}/${ANSWERS.length} correct`)).toBeTruthy();

    expect(award).toHaveBeenCalled();
    const calls = award.mock.calls as [number, boolean, string][];
    expect(calls.find((c) => c[2] === 'grammar')).toBeDefined();

    expect(markQuestMock).toHaveBeenCalledWith('grammar');

    expect(setStats).toHaveBeenCalled();
    const updater = setStats.mock.calls[0]![0] as (prev: Stats) => Stats;
    const next = updater({ ...ctx.stats });
    expect(next.gc).toBe(1);
    expect(next.vs).toContain('comparatives');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['comparatives']) }),
    );
  });

  it('credits nothing on a failing run — the gate the registry declares', async () => {
    const { default: ComparativesScreen } =
      await import('../components/practice/exercises/ComparativesScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ComparativesScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    // Non-vacuity: every question WAS answered — the finish happened, only the
    // credit is withheld. Before the migration this run earned gc + the quest.
    expect(screen.getByText(`0/${ANSWERS.length} correct`)).toBeTruthy();
    expect(screen.getByTestId('drill-retry')).toBeTruthy();

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    // Per-answer award(3) only fires on a correct answer, so a zero-correct run
    // pays nothing at all.
    expect(award).not.toHaveBeenCalled();
  });

  it('is idempotent — skips setStats/writeDelta when vs already has comparatives', async () => {
    const { default: ComparativesScreen } =
      await import('../components/practice/exercises/ComparativesScreen');
    const ctx = makeDrillCtx(['comparatives']);
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ComparativesScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'correct');

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });
});
