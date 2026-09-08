/**
 * productionDrillLevels.test.ts — the two ProductionDrillScreen banks that the
 * 2026-09-07 levelled-bank sweep could not fix.
 *
 * That sweep derived every levelled bank from source and routed each one's
 * consumer through `levelledBank`. BUILD_SENTENCES and ERROR_CORRECT were
 * outside it for a reason no derivation can reach: they carried NO `level` on
 * any item, so there was nothing to filter and nothing to derive. The sweep
 * recorded it as a content gap rather than papering over it; this file is that
 * gap closed.
 *
 * The wiring itself is guarded by `levelledBankReads.test.ts`, which now sees
 * both banks automatically (≥ 8 levelled items each) and fails if either
 * consumer stops reaching `levelledBank` — verified by mutation. What THIS file
 * pins is the half a derivation cannot see: that the levels exist, and that
 * they leave a full round servable at the lowest level a learner meets the
 * screen at.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { levelledBank } from '../lib/levelledBank';
import { BUILD_SENTENCES, ERROR_CORRECT } from '../components/practice/ProductionDrillScreen';
import { CEFR_ORDER, type CefrLevel } from '../lib/cefr';

const SRC = readFileSync('src/components/practice/ProductionDrillScreen.tsx', 'utf8');

/** Derived, never restated — the stale pin `const ROUND = 10` was a finding. */
const ROUND_SIZE = Number(SRC.match(/^const ROUND_SIZE = (\d+);/m)![1]);

/**
 * The lowest level a learner can actually open this screen at. The Practice
 * catalog labels it `A2+` and PRODUCTION_POOL gates the session slot at B1, so
 * A2 is the floor that has to hold — not A1, which no route offers.
 */
const FLOOR: CefrLevel = 'A2';

const BANKS = [
  ['BUILD_SENTENCES', BUILD_SENTENCES as ReadonlyArray<{ level?: string }>],
  ['ERROR_CORRECT', ERROR_CORRECT as ReadonlyArray<{ level?: string }>],
] as const;

describe.each(BANKS)('%s carries levels', (name, bank) => {
  it('every item is levelled', () => {
    // An unlevelled item is served at EVERY level, because `cefrRank` reads an
    // unknown level as A1. One slipping in is how a bank half-levels itself.
    bank.forEach((item, i) => {
      expect(item.level, `${name}[${i}] has no level`).toBeTruthy();
      expect(CEFR_ORDER as readonly string[], `${name}[${i}]`).toContain(item.level);
    });
  });

  it('levelling never SHORTENS a round at the floor level', () => {
    // The dictation precedent: a filter that leaves five questions where there
    // were ten has not levelled the round, it has halved it. `levelledBank`'s
    // whole-bank fallback would hide that — it fires below four survivors and
    // serves everything, which reads as "fixed" while serving B2 items to an
    // A2 learner. So assert the real count, above the fallback, not its output.
    const servable = bank.filter((q) => {
      const r = CEFR_ORDER.indexOf(q.level as CefrLevel);
      return r >= 0 && r <= CEFR_ORDER.indexOf(FLOOR);
    });
    expect(
      servable.length,
      `${name}: only ${servable.length} items at or below ${FLOOR}, ` +
        `so a ${ROUND_SIZE}-item round would be short. Author more ${FLOOR} items.`,
    ).toBeGreaterThanOrEqual(ROUND_SIZE);
  });

  it('serves only at-or-below items once past the fallback', () => {
    const out = levelledBank(bank, FLOOR);
    expect(out.length).toBeGreaterThanOrEqual(ROUND_SIZE);
    for (const q of out) {
      expect(
        CEFR_ORDER.indexOf(q.level as CefrLevel),
        `${name}: ${q.level} served to an ${FLOOR} learner`,
      ).toBeLessThanOrEqual(CEFR_ORDER.indexOf(FLOOR));
    }
  });

  it('still reaches every item at C2', () => {
    expect(levelledBank(bank, 'C2')).toHaveLength(bank.length);
  });
});

describe('the build bank does not ask for a form the app teaches as wrong', () => {
  it('uses hvala NA + locative, not hvala za', () => {
    // `Hvala ti puno za pomoć` was a build target — the learner assembled it and
    // was marked correct. Meanwhile PrecisionDrill's tip says „Hvala za" je
    // otklon od standarda, the A1 dialogue bank offers `hvala za` as a WRONG
    // answer, and CLAUDE.md's authoring directive lists `hvala na` + locative
    // among the case-government rules. 97 other uses in the codebase are `na`.
    const targets = BUILD_SENTENCES.map((b) => b.target);
    expect(targets).toContain('Hvala ti puno na pomoći.');
    for (const t of targets) expect(t).not.toMatch(/hvala\s+\S*\s*za\b/i);
  });
});
