/**
 * e2eFixtureCefrBands.test.ts — the E2E fixtures restate the CEFR band
 * boundaries by hand, three times, and nothing compared them to production.
 *
 * WHY THIS FORMULA IN PARTICULAR
 * ------------------------------
 * The XP->level formula is the one this repo has already watched drift. On
 * 2026-09-06 `DesktopPanel` and the hero card each carried their own copy under
 * a comment saying "same formula as StatsTab — all three must stay in sync";
 * they were in sync with each other and with nothing that mattered, because
 * StatsTab had moved on. All three now resolve through one function.
 *
 * The E2E fixtures are the copies that fix did not reach, and they are INERT —
 * read by nothing that breaks when they are wrong:
 *
 *   seed-auth.js   a ternary chain over `xp + lc*15 + gc*25` deciding how many
 *                  CEFR passes to seed. It runs for EVERY spec, and its own
 *                  comment says the point is that "the verification gate stays
 *                  off and specs keep their pre-gate meaning" — so the whole
 *                  suite's starting assumption rests on this copy agreeing.
 *   forceCefr.js   the same ternary again. (Its CEFR_XP_TABLE is NOT part of
 *                  this finding: `e2eFixtures.test.js` has checked every entry
 *                  by value through `getUserCefr` since SP10. I wrote that
 *                  assertion a second time before finding the first — the
 *                  duplicate is removed and this note is the correction.)
 *
 * MEASURED CLEAN in every direction the day this was written — no drift today.
 * This is a ratchet, said plainly, on a formula whose drift is already on the
 * record.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { CEFR_BANDS, cefrScore } from '../lib/cefr';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');
const SEED = strip(readFileSync('e2e/fixtures/seed-auth.js', 'utf8'));
const FORCE = strip(readFileSync('e2e/fixtures/forceCefr.js', 'utf8'));

/** The finite ceilings, in order — what a `total < N` chain has to spell. */
const CEILINGS = CEFR_BANDS.map((b) => b.ceiling).filter((c): c is number => c !== null);
const LEVELS = CEFR_BANDS.map((b) => b.level);

/** `<var> < 300 ? 'A1' : <var> < 1200 ? 'A2' : …` -> thresholds and levels. */
function ternaryChain(src: string, variable: string) {
  const re = new RegExp(`${variable}\\s*<\\s*(\\d+)\\s*\\?\\s*'([A-C][12])'`, 'g');
  const found = [...src.matchAll(re)];
  return { thresholds: found.map((m) => Number(m[1])), levels: found.map((m) => m[2]!) };
}

describe('the E2E fixtures agree with CEFR_BANDS', () => {
  it('the production side is real', () => {
    expect(CEFR_BANDS.length).toBe(6);
    expect(CEILINGS.length).toBe(5);
  });

  it('seed-auth spells the production thresholds and levels', () => {
    const { thresholds, levels } = ternaryChain(SEED, 'total');
    // Non-vacuity: a regex that matched nothing would satisfy every toEqual
    // below against an empty array on both sides only if production were empty
    // too — assert the parse found the chain.
    expect(thresholds.length).toBe(CEILINGS.length);
    expect(thresholds).toEqual(CEILINGS);
    // The chain names the level BELOW each ceiling, so it omits the last band.
    expect(levels).toEqual(LEVELS.slice(0, -1));
  });

  it('seed-auth weights completions the way cefrScore does', () => {
    // Derived by value rather than restated: one completion of each kind IS the
    // coefficient, so this tracks cefrScore if the weights ever move.
    const lcWeight = cefrScore(0, 1, 0);
    const gcWeight = cefrScore(0, 0, 1);
    expect(SEED).toContain(`* ${lcWeight}`);
    expect(SEED).toContain(`* ${gcWeight}`);
  });

  it('forceCefr spells the production thresholds and levels', () => {
    const { thresholds, levels } = ternaryChain(FORCE, 'xp');
    expect(thresholds.length).toBe(CEILINGS.length);
    expect(thresholds).toEqual(CEILINGS);
    expect(levels).toEqual(LEVELS.slice(0, -1));
  });

  it('forceCefr reads XP alone because it writes lc and gc as zero', () => {
    // The shorter formula in that fixture is only honest because of these two
    // literals two lines above it. `CEFR_XP_TABLE` itself is checked BY VALUE
    // through `getUserCefr` in `e2eFixtures.test.js` — that assertion predates
    // this file and is deliberately NOT repeated here.
    expect(FORCE).toMatch(/lc:\s*0,\s*gc:\s*0/);
  });
});
