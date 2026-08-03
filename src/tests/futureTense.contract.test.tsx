/**
 * futureTense.contract.test.tsx — Pattern X
 *
 * `future-tense` is registered `gated`, but the screen used to credit gc — and
 * pay the whole correctCount*5 award — as soon as every question was ANSWERED,
 * at any score. The old helper here clicked the first option of every question,
 * which is NOT the answer in this bank, so it could not tell a pass from a fail
 * and went green either way. Both branches are asserted now; see
 * src/tests/helpers/mcDrill.tsx.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FUTURE } from '../data';
import { answerAll, makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

// Controllable rnd so the freshness regression test can vary the shuffle.
// Defaults to 0.9999 (identity shuffle) so the contract tests below get the
// source order of FUTURE.quiz and a positional answer key is exact.
const rndCtl = vi.hoisted(() => ({ v: 0.9999 }));
vi.mock('../lib/random.js', () => ({ rnd: () => rndCtl.v }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

const OPT_BORDER = 'rgb(214, 211, 209)';
const ANSWERS = (FUTURE.quiz as { a: string }[]).map((q) => q.a);

describe('FutureTenseScreen contract (Pattern X)', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
    rndCtl.v = 0.9999; // identity shuffle by default
  });

  it('credits gc + vs:future-tense and marks the quest on a passing run', async () => {
    const { default: FutureTenseScreen } =
      await import('../components/practice/exercises/FutureTenseScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <FutureTenseScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'correct');

    // Non-vacuity: the run really reached the results panel with a full score.
    expect(screen.getByText(`${ANSWERS.length}/${ANSWERS.length} correct`)).toBeTruthy();
    expect(screen.queryByTestId('drill-retry')).toBeNull();

    expect(award).toHaveBeenCalled();
    const calls = award.mock.calls as [number, boolean, string][];
    expect(calls.find((c) => c[2] === 'grammar')).toBeDefined();

    expect(markQuestMock).toHaveBeenCalledWith('grammar');

    expect(setStats).toHaveBeenCalled();
    const updater = setStats.mock.calls.at(-1)![0] as (prev: Stats) => Stats;
    const next = updater({ ...ctx.stats });
    expect(next.gc).toBe(1);
    expect(next.vs).toContain('future-tense');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['future-tense']) }),
    );
  });

  it('credits nothing on a failing run — the gate the registry declares', async () => {
    const { default: FutureTenseScreen } =
      await import('../components/practice/exercises/FutureTenseScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta } = ctx;

    render(withStats(ctx, <FutureTenseScreen goBack={vi.fn()} award={ctx.award} />));

    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    // Non-vacuity: every question WAS answered — the finish happened.
    expect(screen.getByText(`0/${ANSWERS.length} correct`)).toBeTruthy();
    expect(screen.getByTestId('drill-retry')).toBeTruthy();

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });

  it('is idempotent — no second gc/vs write when vs already has future-tense', async () => {
    const { default: FutureTenseScreen } =
      await import('../components/practice/exercises/FutureTenseScreen');
    const ctx = makeDrillCtx(['future-tense']);
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <FutureTenseScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'correct');

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });

  it('REGRESSION: shuffles question order fresh per mount (was frozen by shMemo cache)', async () => {
    const { default: FutureTenseScreen } =
      await import('../components/practice/exercises/FutureTenseScreen');
    const ctx = makeDrillCtx();
    const orderNow = () =>
      Array.from(document.querySelectorAll('[data-testid="ftq-prompt"]')).map((e) => e.textContent);

    rndCtl.v = 0.12;
    const first = render(withStats(ctx, <FutureTenseScreen goBack={vi.fn()} award={vi.fn()} />));
    const order1 = orderNow();
    first.unmount();

    rndCtl.v = 0.87;
    render(withStats(ctx, <FutureTenseScreen goBack={vi.fn()} award={vi.fn()} />));
    const order2 = orderNow();

    expect(order1.length).toBeGreaterThan(2);
    expect(order2.length).toBe(order1.length);
    // Different rnd regimes must yield different orders. The old shMemo('fq')
    // module cache froze the order identically regardless of rnd — that bug
    // would make these arrays equal.
    expect(order2).not.toEqual(order1);
  });
});
