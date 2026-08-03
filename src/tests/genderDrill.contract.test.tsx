/**
 * genderDrill.contract.test.tsx — behavioural, replacing a source-regex spec.
 *
 * WHY THIS WAS REWRITTEN
 * ----------------------
 * The previous version read GenderDrillScreen.tsx as text and asserted the
 * hand-rolled completion shape:
 *
 *     expect(source).toMatch(/gc:\s*\(prev\.gc\s*\|\|\s*0\)\s*\+\s*1/);
 *     expect(source).toMatch(/writeDelta\(\s*\{\s*gc:\s*1,\s*vs:\s*\[\s*'gender'\s*\]/);
 *     expect(source).toMatch(/markQuest\('grammar'\)/);
 *
 * Every one of those clauses failed the moment the screen was routed through
 * `completeExercise` — i.e. the test argued for keeping the bug it was meant to
 * guard. Worse, none of them could ever have caught the actual defect: `gender`
 * is registered `gated`, but handleFinish fired on `allDone` (every item
 * ANSWERED) and never compared one answer to its correct value, so a run with
 * zero correct answers earned the same gc + 15 XP as a perfect one. A source
 * regex for `gc + 1` is green either way.
 *
 * The screen is fully drivable — three sections of plain option buttons — so
 * this drives it, twice, and asserts the outcomes that actually matter.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { GENDERDRILL } from '../data';
import { makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

// rnd()=0.9999 → Fisher-Yates makes no swaps, so the three banks keep their order
// and every option list keeps its order.
type SortItem = { word: string; g: string };
type PluralItem = { s: string; p: string; opts: string[] };
type AdjItem = { noun: string; adj: string; opts: string[] };
const WORDS = (GENDERDRILL.sort as SortItem[]).slice(0, 12);
const PLURALS = (GENDERDRILL.plurals as PluralItem[]).slice(0, 10);
const ADJS = GENDERDRILL.adjectives as AdjItem[];

const G_LABEL: Record<string, string> = { m: '♂ M', f: '♀ F', n: '⚧ N' };

function clickByText(text: string, root: ParentNode = document): void {
  const btn = (Array.from(root.querySelectorAll('button')) as HTMLButtonElement[]).find(
    (b) => (b.textContent ?? '').trim() === text,
  );
  if (!btn) throw new Error(`genderDrill: no button with text "${text}"`);
  fireEvent.click(btn);
}

/**
 * Find the question row (a `.c` card) whose prompt contains `promptFragment`.
 *
 * Clicking by document-wide button text is NOT safe here: option strings repeat
 * across rows (pas/"mali,mala,malo" and dijete/"malo,mali,mala" share all three),
 * so a global lookup lands on an already-answered row whose handler early-returns
 * and the later question is silently never answered.
 */
function row(promptFragment: string): HTMLElement {
  const hit = (Array.from(document.querySelectorAll('div.c')) as HTMLElement[]).find((el) =>
    (el.textContent ?? '').includes(promptFragment),
  );
  if (!hit) throw new Error(`genderDrill: no question row containing "${promptFragment}"`);
  return hit;
}

/** Drive all three sections. `mode` decides whether each answer is right. */
function playThrough(mode: 'correct' | 'wrong'): void {
  // Section 1 — tap the word, then pick a gender from the M/F/N selector.
  WORDS.forEach((w) => {
    clickByText(w.word);
    const genders = ['m', 'f', 'n'];
    const pick = mode === 'correct' ? w.g : genders.find((g) => g !== w.g)!;
    clickByText(G_LABEL[pick]!);
  });
  // Section 2 — plural MC.
  PLURALS.forEach((p) => {
    const opt = mode === 'correct' ? p.p : p.opts.find((o) => o !== p.p)!;
    clickByText(opt, row(`${p.s} → ?`));
  });
  // Section 3 — adjective MC.
  ADJS.forEach((a) => {
    const opt = mode === 'correct' ? a.adj : a.opts.find((o) => o !== a.adj)!;
    clickByText(opt, row(a.en));
  });
}

describe('GenderDrillScreen — completion gate', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('credits gc + vs:gender, marks the quest and awards on a perfect run', async () => {
    const { default: GenderDrillScreen } =
      await import('../components/practice/exercises/GenderDrillScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;
    const goBack = vi.fn();

    render(withStats(ctx, <GenderDrillScreen goBack={goBack} award={award} />));
    playThrough('correct');

    // Non-vacuity: all three sections really completed.
    expect(screen.getByText('Finish & Save Progress →')).toBeTruthy();
    expect(screen.queryByTestId('drill-retry')).toBeNull();

    fireEvent.click(screen.getByText('Finish & Save Progress →'));

    expect(markQuestMock).toHaveBeenCalledWith('grammar');
    const calls = award.mock.calls as [number, boolean, string][];
    expect(calls.find((c) => c[0] === 15 && c[2] === 'grammar')).toBeDefined();

    expect(setStats).toHaveBeenCalled();
    const updater = setStats.mock.calls.at(-1)![0] as (prev: Stats) => Stats;
    const next = updater({ ...ctx.stats });
    expect(next.gc).toBe(1);
    expect(next.vs).toContain('gender');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['gender']) }),
    );
    expect(goBack).toHaveBeenCalled();
  });

  it('credits nothing on an all-wrong run — the gate the registry declares', async () => {
    const { default: GenderDrillScreen } =
      await import('../components/practice/exercises/GenderDrillScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;
    const goBack = vi.fn();

    render(withStats(ctx, <GenderDrillScreen goBack={goBack} award={award} />));
    playThrough('wrong');

    // Non-vacuity: every item WAS answered, so the finish button is live and the
    // screen offers a retry. This is exactly the run that used to earn full credit.
    expect(screen.getByTestId('drill-retry')).toBeTruthy();

    fireEvent.click(screen.getByText('Finish & Save Progress →'));

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    // Per-answer awards only fire on a correct answer, so nothing was paid at all.
    expect(award).not.toHaveBeenCalled();
    // The user is still returned to where they came from — a failed gate is not
    // a trap.
    expect(goBack).toHaveBeenCalled();
  });
});
