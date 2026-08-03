/**
 * pronouns.contract.test.tsx — Pattern X
 *
 * `pronouns` is registered `gated`, but the screen used to credit gc as soon as
 * every question was ANSWERED — correctCountRef only ever reached the results
 * panel. The old helper here clicked option 0 of every question, so it could not
 * tell a pass from a fail and went green either way. Both branches are asserted
 * now; see src/tests/helpers/mcDrill.tsx.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PRONOUNCASE } from '../data';
import { answerAll, makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

const OPT_BORDER = 'rgb(214, 211, 209)';
// rnd()=0.9999 → no Fisher-Yates swaps → shMemo('pc', PRONOUNCASE.quiz, 10) is
// PRONOUNCASE.quiz.slice(0,10) in order, options likewise.
const ANSWERS = (PRONOUNCASE.quiz as { a: string }[]).slice(0, 10).map((q) => q.a);

describe('PronounsScreen contract (Pattern X)', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('credits gc + vs:pronouns and marks the quest on a passing run', async () => {
    const { default: PronounsScreen } =
      await import('../components/practice/exercises/PronounsScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <PronounsScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'correct');

    expect(screen.getByText(`${ANSWERS.length}/${ANSWERS.length} correct`)).toBeTruthy();

    expect(award).toHaveBeenCalled();
    const calls = award.mock.calls as [number, boolean, string][];
    expect(calls.find((c) => c[2] === 'grammar')).toBeDefined();

    expect(markQuestMock).toHaveBeenCalledWith('grammar');

    expect(setStats).toHaveBeenCalled();
    const updater = setStats.mock.calls[0]![0] as (prev: Stats) => Stats;
    const next = updater({ ...ctx.stats });
    expect(next.gc).toBe(1);
    expect(next.vs).toContain('pronouns');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['pronouns']) }),
    );
  });

  it('credits nothing on a failing run — the gate the registry declares', async () => {
    const { default: PronounsScreen } =
      await import('../components/practice/exercises/PronounsScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <PronounsScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    // Non-vacuity: the run finished — only the credit is withheld.
    expect(screen.getByText(`0/${ANSWERS.length} correct`)).toBeTruthy();
    expect(screen.getByTestId('drill-retry')).toBeTruthy();

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    expect(award).not.toHaveBeenCalled();
  });

  it('is idempotent — skips setStats/writeDelta when vs already has pronouns', async () => {
    const { default: PronounsScreen } =
      await import('../components/practice/exercises/PronounsScreen');
    const ctx = makeDrillCtx(['pronouns']);
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <PronounsScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'correct');

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });
});
