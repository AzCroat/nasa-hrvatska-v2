/**
 * cefrBandsSingleSource — the CEFR thresholds are written down once
 * (sweep 49, 2026-09-23).
 *
 * Continuing the question sweep 48 opened: **where does the app keep the same
 * fact twice, with only one copy having a reason to change?** That asymmetry is
 * what makes the drift silent.
 *
 * THE FIND. The five band boundaries — 300 / 1200 / 3500 / 8000 / 18000 — lived
 * in FOUR places:
 *
 *   1. `getUserCefr`'s inline `if` ladder                       (lib/cefr)
 *   2. `CEFR_META[...].needed`, the "next level at N" target    (StatsTab)
 *   3. `CEFR_FLOOR`, a second inline map ~400 lines below it    (StatsTab)
 *   4. `CEFR_BANDS`, floors and thresholds                      (heroHelpers)
 *
 * **Measured, not assumed: all four agreed**, so this is a hazard closed rather
 * than a bug fixed — say which it is. But only the ladder had a reason to
 * change, and moving a band there would leave the LEVEL right everywhere while
 * every progress bar in the app measured against the old target. Badge and bar
 * both plausible, both on screen together, disagreeing.
 *
 * It is not hypothetical here. The 2026-09-06 field report — "it shows C1, I'm
 * not C1" — was three copies of the LEVEL formula "in sync with each other and
 * with nothing that mattered". That fix consolidated the level and left these
 * thresholds alone; `lib/cefr`'s own docstring still claimed it "mirrors the
 * getCEFR formula in StatsTab.tsx exactly", which was prose asserting agreement
 * — and stale besides, since StatsTab's `getCEFR` had long since delegated back
 * to this very function and contained no formula at all.
 *
 * THE GUARD IS BEHAVIOURAL WHERE IT CAN BE. A source pin saying "StatsTab does
 * not contain 3500" is weak: it passes the moment someone writes `3_500` or
 * computes it. So the bands are DERIVED FROM `getUserCefr` ITSELF by bisection —
 * the level function is the authority, and the table has to agree with what it
 * actually does, not with what it says.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CEFR_BANDS, CEFR_ORDER, cefrBand, cefrScore, getUserCefr } from '../lib/cefr';
import type { CefrLevel } from '../lib/cefr';

/** The boundaries `getUserCefr` ACTUALLY enforces, found by bisection. */
function observedBoundaries(): Record<string, number> {
  const out: Record<string, number> = {};
  for (let i = 0; i < CEFR_ORDER.length - 1; i++) {
    let lo = 0;
    let hi = 1_000_000;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (CEFR_ORDER.indexOf(getUserCefr(mid, 0, 0)) > i) hi = mid;
      else lo = mid + 1;
    }
    out[CEFR_ORDER[i]!] = lo;
  }
  return out;
}

describe('the band table matches what getUserCefr does', () => {
  it('every ceiling is the real upper boundary of its level', () => {
    const observed = observedBoundaries();
    for (const band of CEFR_BANDS) {
      if (band.ceiling === null) continue;
      expect(
        band.ceiling,
        `CEFR_BANDS says ${band.level} ends at ${band.ceiling}, but getUserCefr ` +
          `promotes at ${observed[band.level]}. Every progress bar reads the table ` +
          `and the level reads the function; they must be the same number.`,
      ).toBe(observed[band.level]);
    }
  });

  it('each floor is the previous ceiling — no gap, no overlap', () => {
    for (let i = 1; i < CEFR_BANDS.length; i++) {
      expect(CEFR_BANDS[i]!.floor).toBe(CEFR_BANDS[i - 1]!.ceiling);
    }
    expect(CEFR_BANDS[0]!.floor).toBe(0);
  });

  it('covers every level exactly once, in order, and C2 is terminal', () => {
    expect(CEFR_BANDS.map((b) => b.level)).toEqual([...CEFR_ORDER]);
    expect(CEFR_BANDS[CEFR_BANDS.length - 1]!.ceiling).toBeNull();
    expect(CEFR_BANDS.filter((b) => b.ceiling === null)).toHaveLength(1);
  });

  it('a score at a floor is exactly that level, and one below is the previous', () => {
    for (const band of CEFR_BANDS) {
      expect(getUserCefr(band.floor, 0, 0)).toBe(band.level);
      if (band.floor > 0) expect(getUserCefr(band.floor - 1, 0, 0)).not.toBe(band.level);
    }
  });

  it('cefrBand answers for every level and degrades rather than throwing', () => {
    for (const lvl of CEFR_ORDER)
      expect(cefrBand(lvl).floor).toBe(CEFR_BANDS.find((b) => b.level === lvl)!.floor);
    expect(cefrBand('ZZ' as CefrLevel)).toEqual({ floor: 0, ceiling: null });
  });

  it('cefrScore is the weighting the level is derived from', () => {
    expect(cefrScore(100, 2, 3)).toBe(100 + 2 * 15 + 3 * 25);
    // Driven through the real function rather than restated: a score one below a
    // ceiling is the lower band, at the ceiling the higher one.
    const b1 = CEFR_BANDS.find((b) => b.level === 'B1')!;
    expect(getUserCefr(0, 0, Math.floor((b1.ceiling! - 1) / 25))).toBe('B1');
  });
});

/**
 * The source half. Behaviour cannot see a FOURTH copy appearing in a component
 * that agrees with the table today, so this is the ratchet: the two consumers
 * that used to carry their own tables must read the shared one.
 */
const read = (p: string) => readFileSync(resolve(__dirname, p), 'utf8');

describe('the consumers derive rather than restate', () => {
  it('StatsTab reads the band table for both its targets and its floors', () => {
    const src = read('../components/profile/StatsTab.tsx');
    expect(src).toMatch(/CEFR_BANDS\.map\(/);
    expect(src).toMatch(/cefrBand\(/);
    expect(
      /const CEFR_FLOOR[\s\S]{0,200}A2:\s*300/.test(src),
      'The inline CEFR_FLOOR map is back. It was one of four copies of the same ' +
        'five numbers, and the only one with a reason to change lives in lib/cefr.',
    ).toBe(false);
  });

  it('heroHelpers builds its progress bands from the table', () => {
    const src = read('../components/home/heroHelpers.ts');
    expect(src).toMatch(/CEFR_BANDS\.filter\(/);
    expect(/threshold:\s*3500/.test(src), 'heroHelpers has gone back to literal thresholds.').toBe(
      false,
    );
  });

  it('neither consumer recomputes the score formula', () => {
    for (const p of ['../components/profile/StatsTab.tsx', '../components/home/heroHelpers.ts']) {
      expect(
        /\*\s*15\s*\+[^;]*\*\s*25/.test(read(p).replace(/\/\*[\s\S]*?\*\//g, '')),
        `${p} restates xp + lc*15 + gc*25. cefrScore() is the one definition.`,
      ).toBe(false);
    }
  });
});
