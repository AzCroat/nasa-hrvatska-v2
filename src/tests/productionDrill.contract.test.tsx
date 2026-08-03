/**
 * productionDrill.contract.test.tsx — behavioural, replacing a source-regex spec.
 *
 * WHY THIS WAS REWRITTEN
 * ----------------------
 * The previous version read ProductionDrillScreen.tsx as text and asserted the
 * hand-rolled completion shape (`gc: (prev.gc||0)+1`, `writeDelta({gc:1,
 * vs:['production']})`, `markQuest('grammar')`). Those clauses all failed the
 * moment the screen was routed through `completeExercise` — the test argued for
 * the code it was meant to guard — and none of them could have caught the real
 * defect: `production` is registered `gated`, but handleDone took no arguments
 * and had no score to gate on, so every finish earned full credit. Each mode kept
 * its own score/total in local state and only ever rendered them.
 *
 * The Transform mode is a plain reveal → self-grade loop, so this drives it end to
 * end and asserts the outcomes rather than the spelling.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { makeDrillCtx, withStats } from './helpers/mcDrill';
import type { Stats } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));

const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({
  markQuest: (...args: unknown[]) => markQuestMock(...args),
}));

/** ROUND_SIZE in ProductionDrillScreen. */
const ROUND = 10;

function clickText(text: string): void {
  const btn = (Array.from(document.querySelectorAll('button')) as HTMLButtonElement[]).find(
    (b) => (b.textContent ?? '').trim() === text,
  );
  if (!btn) throw new Error(`productionDrill: no button "${text}"`);
  fireEvent.click(btn);
}

/** Reveal + self-grade every item of the Transform round, then leave the mode. */
function playTransform(verdict: '✓ Točno' | '✗ Pogrešno'): void {
  // MODES[0] is 'transform' and carries the production-drill-submit testid.
  fireEvent.click(screen.getByTestId('production-drill-submit'));
  for (let i = 0; i < ROUND; i++) {
    clickText('Otkrij odgovor');
    clickText(verdict);
  }
  // Non-vacuity: the round really ended and rendered its results panel.
  expect(screen.getByText('Nazad na izbor')).toBeTruthy();
  clickText('Nazad na izbor');
}

describe('ProductionDrillScreen — completion gate', () => {
  beforeEach(() => {
    markQuestMock.mockClear();
  });

  it('credits gc + vs:production and marks the quest on an all-correct round', async () => {
    const { default: ProductionDrillScreen } =
      await import('../components/practice/ProductionDrillScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ProductionDrillScreen goBack={vi.fn()} award={award} />));
    playTransform('✓ Točno');

    expect(markQuestMock).toHaveBeenCalledWith('grammar');

    expect(setStats).toHaveBeenCalled();
    const updater = setStats.mock.calls.at(-1)![0] as (prev: Stats) => Stats;
    const next = updater({ ...ctx.stats });
    expect(next.gc).toBe(1);
    expect(next.vs).toContain('production');

    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['production']) }),
    );
  });

  it('credits nothing on an all-wrong round — the gate the registry declares', async () => {
    const { default: ProductionDrillScreen } =
      await import('../components/practice/ProductionDrillScreen');
    const ctx = makeDrillCtx();
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ProductionDrillScreen goBack={vi.fn()} award={award} />));
    playTransform('✗ Pogrešno');

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    // Per-item award(2) fires only on a correct item, so the round paid nothing.
    expect(award).not.toHaveBeenCalled();

    // And the user is back at the mode picker, free to re-run — the old
    // mount-lifetime finish guard would have made a second attempt uncreditable.
    expect(screen.getByTestId('production-drill-input')).toBeTruthy();
  });

  it('a passing re-run after a failed one is still credited', async () => {
    const { default: ProductionDrillScreen } =
      await import('../components/practice/ProductionDrillScreen');
    const ctx = makeDrillCtx();
    const { writeDelta, award } = ctx;

    render(withStats(ctx, <ProductionDrillScreen goBack={vi.fn()} award={award} />));
    playTransform('✗ Pogrešno');
    expect(writeDelta).not.toHaveBeenCalled();

    playTransform('✓ Točno');

    expect(markQuestMock).toHaveBeenCalledWith('grammar');
    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ gc: 1, vs: expect.arrayContaining(['production']) }),
    );
  });

  it('is idempotent — no second gc/vs write when vs already has production', async () => {
    const { default: ProductionDrillScreen } =
      await import('../components/practice/ProductionDrillScreen');
    const ctx = makeDrillCtx(['production']);
    const { setStats, writeDelta, award } = ctx;

    render(withStats(ctx, <ProductionDrillScreen goBack={vi.fn()} award={award} />));
    playTransform('✓ Točno');

    expect(markQuestMock).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
  });
});
