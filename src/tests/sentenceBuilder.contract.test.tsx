/**
 * sentenceBuilder.contract.test.tsx — behavioural, replacing a source-regex spec.
 *
 * WHY THIS WAS REWRITTEN
 * ----------------------
 * The previous version read SentenceBuilderScreen.tsx as text and asserted the
 * hand-rolled completion shape (`gc: (prev.gc||0)+1`, `writeDelta({gc:1,
 * vs:['sentence-builder']})`, `markQuest('grammar')`), on the stated grounds that
 * the screen "uses drag-to-build sentence interaction (not .ob MC buttons)". It
 * does not — it is a plain multiple-choice list; only the buttons are inline-
 * styled. So the file pinned an implementation it had no need to, every clause
 * failed the moment the screen was routed through `completeExercise`, and none of
 * them could have caught the real defect: `sentence-builder` is registered
 * `gated`, but the screen credited gc as soon as every question was ANSWERED.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SENTBUILD } from '../data';
import { answerAll, makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

const OPT_BORDER = 'rgb(231, 229, 228)';
// rnd()=0.9999 → no Fisher-Yates swaps → shMemo('sb', SENTBUILD, 15) is
// SENTBUILD.slice(0,15) in order. Each option renders with a flag prefix.
const ANSWERS = (SENTBUILD as { hr: string }[]).slice(0, 15).map((s) => `🇭🇷 ${s.hr}`);

describe('SentenceBuilderScreen — completion gate', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('credits gc + vs:sentence-builder and marks the quest on a passing run', async () => {
    const { default: SentenceBuilderScreen } =
      await import('../components/practice/exercises/SentenceBuilderScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <SentenceBuilderScreen goBack={vi.fn()} award={award} />));

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
    expect(next.vs).toContain('sentence-builder');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['sentence-builder']) }),
    );
  });

  it('credits nothing on a failing run — the gate the registry declares', async () => {
    const { default: SentenceBuilderScreen } =
      await import('../components/practice/exercises/SentenceBuilderScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta } = ctx;

    render(withStats(ctx, <SentenceBuilderScreen goBack={vi.fn()} award={ctx.award} />));

    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    // Non-vacuity: every question WAS answered — the finish happened.
    expect(screen.getByText(`0/${ANSWERS.length} correct`)).toBeTruthy();
    expect(screen.getByTestId('drill-retry')).toBeTruthy();

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });

  it('signals daily-session completion even on a zero-correct run', async () => {
    // The screen used to send this explicitly for exactly this case; the
    // completion authority now signals unconditionally, before the pass check.
    sessionStorage.setItem('nh_session_started', 'sentbuild');
    sessionStorage.removeItem('nh_session_completed');

    const { default: SentenceBuilderScreen } =
      await import('../components/practice/exercises/SentenceBuilderScreen');
    const ctx = makeDrillCtx();

    render(withStats(ctx, <SentenceBuilderScreen goBack={vi.fn()} award={ctx.award} />));
    answerAll(OPT_BORDER, ANSWERS, 'wrong');

    expect(sessionStorage.getItem('nh_session_completed')).toBe('sentbuild');
    sessionStorage.removeItem('nh_session_started');
    sessionStorage.removeItem('nh_session_completed');
  });

  it('is idempotent — no second gc/vs write when vs already has sentence-builder', async () => {
    const { default: SentenceBuilderScreen } =
      await import('../components/practice/exercises/SentenceBuilderScreen');
    const ctx = makeDrillCtx(['sentence-builder']);
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <SentenceBuilderScreen goBack={vi.fn()} award={award} />));

    answerAll(OPT_BORDER, ANSWERS, 'correct');

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });
});
