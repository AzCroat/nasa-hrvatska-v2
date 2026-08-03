/**
 * mcDrill — shared harness for the all-questions-on-one-page MC drills.
 *
 * WHY THIS EXISTS
 * ---------------
 * Four screens (Comparatives, Possessives, Pronouns, Reflexive) render every
 * question at once with inline-styled option buttons and credit completion when
 * the last one is answered. Their contract tests each carried a private
 * `clickAllGrayOptionButtons()` that clicked the FIRST option of every question.
 *
 * That was fine while completion was unconditional. It is not fine now that these
 * screens route through `completeExercise` under the registry's `gated` policy:
 * clicking option 0 everywhere scores roughly 1/n, so "answer every question"
 * and "answer every question CORRECTLY" are now different outcomes, and a test
 * that cannot tell them apart cannot see the gate at all.
 *
 * `answerAll` therefore takes the answer key and drives a real pass or a real
 * fail. Options are grouped by their containing element — one group per question
 * — so it works across all four DOM shapes without knowing any of them.
 */
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';
import { StatsProvider } from '../../context/StatsContext';
import type { Stats, StatsContextValue } from '../../types';

/** Option buttons for one question, in render order. */
function optionGroups(borderRgb: string): HTMLButtonElement[][] {
  const opts = (Array.from(document.querySelectorAll('button')) as HTMLButtonElement[]).filter(
    (b) => (b.getAttribute('style') ?? '').includes(borderRgb),
  );
  const byParent = new Map<Element, HTMLButtonElement[]>();
  const groups: HTMLButtonElement[][] = [];
  for (const b of opts) {
    const parent = b.parentElement;
    if (!parent) continue;
    let g = byParent.get(parent);
    if (!g) {
      g = [];
      byParent.set(parent, g);
      groups.push(g);
    }
    g.push(b);
  }
  return groups;
}

/**
 * Answer every rendered question.
 *
 * @param borderRgb  the unanswered-option border colour, e.g. 'rgb(214, 211, 209)'
 * @param answers    the correct answer per question, in render order
 * @param mode       'correct' picks each answer; 'wrong' picks any other option
 */
export function answerAll(
  borderRgb: string,
  answers: string[],
  mode: 'correct' | 'wrong' = 'correct',
): void {
  optionGroups(borderRgb).forEach((group, i) => {
    const want = answers[i];
    const target =
      mode === 'correct'
        ? group.find((b) => (b.textContent ?? '').trim() === want)
        : group.find((b) => (b.textContent ?? '').trim() !== want);
    // Falling back to group[0] would silently answer correctly on a 'wrong' run
    // whenever the key is missing, which is exactly the vacuity this file exists
    // to prevent — so a missing target is a hard failure instead.
    if (!target) throw new Error(`mcDrill: no ${mode} option for question ${i} (answer "${want}")`);
    fireEvent.click(target);
  });
}

export interface DrillCtx {
  value: StatsContextValue;
  stats: Stats;
  setStats: ReturnType<typeof vi.fn>;
  writeDelta: ReturnType<typeof vi.fn>;
  award: ReturnType<typeof vi.fn>;
}

export function makeDrillCtx(vsOverride?: string[]): DrillCtx {
  const setStats = vi.fn();
  const writeDelta = vi.fn();
  const award = vi.fn();
  const stats: Stats = {
    xp: 0,
    lc: 0,
    gc: 0,
    sp: 0,
    de: 0,
    rc: 0,
    pf: 0,
    mv: 0,
    hi: 0,
    str: 0,
    authLoading: 0,
    diff: 'beginner',
    ct: [],
    vs: vsOverride ?? [],
    rs: [],
    badges: [],
  };
  const value: StatsContextValue = {
    stats,
    setStats,
    writeDelta,
    dispatch: vi.fn(),
    award,
    level: 1,
  };
  return { value, stats, setStats, writeDelta, award };
}

export function withStats(ctx: DrillCtx, node: React.ReactElement): React.ReactElement {
  return <StatsProvider value={ctx.value}>{node}</StatsProvider>;
}
