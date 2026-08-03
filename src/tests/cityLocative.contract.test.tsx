/**
 * cityLocative.contract.test.tsx — Pattern X
 *
 * `city-locative` is registered `gated`, but the screen used to credit gc — and pay the
 * whole score-scaled award — as soon as every question was ANSWERED, at any
 * score. The old helper here clicked option 0 of every question, so it could not
 * tell a pass from a fail and went green either way. Both branches are asserted
 * now; see src/tests/helpers/mcDrill.tsx.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CITYLOC } from '../data';
import { answerAll, makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

const OPT_BORDER = 'rgb(214, 211, 209)';
// rnd()=0.9999 → Fisher-Yates makes no swaps, so questions and their options keep
// their source order and a positional answer key is exact.
const ANSWERS = (CITYLOC.cities as { nom: string; lok: string }[]).slice(0, 8).map((c) => c.lok);

describe('CityLocativeScreen contract (Pattern X)', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('credits gc + vs:city-locative and marks the quest on a passing run', async () => {
    const { default: CityLocativeScreen } =
      await import('../components/practice/exercises/CityLocativeScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <CityLocativeScreen goBack={vi.fn()} award={award} />));

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
    expect(next.vs).toContain('city-locative');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['city-locative']) }),
    );
  });

  it('credits nothing on a failing run — the gate the registry declares', async () => {
    const { default: CityLocativeScreen } =
      await import('../components/practice/exercises/CityLocativeScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta } = ctx;

    render(withStats(ctx, <CityLocativeScreen goBack={vi.fn()} award={ctx.award} />));

    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    // Non-vacuity: every question WAS answered — the finish happened, only the
    // credit is withheld. This is the run that used to earn full credit.
    expect(screen.getByText(`0/${ANSWERS.length} correct`)).toBeTruthy();
    expect(screen.getByTestId('drill-retry')).toBeTruthy();

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });

  it('is idempotent — no second gc/vs write when vs already has city-locative', async () => {
    const { default: CityLocativeScreen } =
      await import('../components/practice/exercises/CityLocativeScreen');
    const ctx = makeDrillCtx(['city-locative']);
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <CityLocativeScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'correct');

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });
});
