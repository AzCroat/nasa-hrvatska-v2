// drillRun.test.ts — pins the per-run engagement cap (owner directive
// 2026-08-14: no exercise serves more than 12–15 questions). The 24-item
// C2/B2 drill banks now sample a balanced 12-question run.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { drawDrillRun, DRILL_RUN_PER_MODE } from '../lib/drillRun';

const BANK = Array.from({ length: 24 }, (_, i) => ({
  mode: ['a', 'b', 'c'][i % 3]!,
  q: `q${i}`,
}));

describe('drawDrillRun', () => {
  it('serves exactly perMode from each mode — 12 for a 3-mode bank — under the cap', () => {
    const run = drawDrillRun(BANK);
    expect(run).toHaveLength(12);
    expect(run.length).toBeLessThanOrEqual(15);
    for (const m of ['a', 'b', 'c']) {
      expect(run.filter((x) => x.mode === m)).toHaveLength(DRILL_RUN_PER_MODE);
    }
    expect(new Set(run.map((x) => x.q)).size).toBe(12); // no duplicates
  });

  it('does not mutate the bank and tolerates small modes', () => {
    const before = JSON.stringify(BANK);
    drawDrillRun(BANK);
    expect(JSON.stringify(BANK)).toBe(before);
    expect(drawDrillRun([{ mode: 'x', q: '1' }])).toHaveLength(1);
  });

  it.each([
    'C2StructureDrill',
    'GerundDrill',
    'PrecisionDrill',
    'FuturDrugiDrill',
    'ReportedSpeechDrill',
    'MotionVerbsDrill',
  ])('%s samples its run via drawDrillRun (never serves the whole 24-item bank)', (name) => {
    const src = readFileSync(`src/components/practice/${name}.tsx`, 'utf8');
    expect(src).toContain('drawDrillRun(DATA)');
    expect(src).not.toContain('shLocal(DATA)');
  });
});
