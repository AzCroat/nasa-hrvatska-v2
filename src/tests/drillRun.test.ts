// drillRun.test.ts — pins the per-run engagement cap (owner directive
// 2026-08-14: no exercise serves more than 12–15 questions). The 24-item
// C2/B2 drill banks now sample a balanced 12-question run.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { drawDrillRun, DRILL_RUN_PER_MODE, DRILL_RUN_LENGTH } from '../lib/drillRun';

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

  // Owner decision 2026-09-27: 12 questions for every drill. The older hand-written
  // banks carry no modes, so the engine sees ONE mode — and at 4 per mode that would
  // have been a 4-question drill. The share is derived from the run length now.
  it('serves 12 from a single-mode bank, not 4', () => {
    const one = Array.from({ length: 50 }, (_, i) => ({ mode: 'x', q: `q${i}` }));
    const run = drawDrillRun(one);
    expect(run).toHaveLength(DRILL_RUN_LENGTH);
    expect(DRILL_RUN_LENGTH).toBe(12);
    expect(new Set(run.map((x) => x.q)).size).toBe(12);
  });

  it('serves the whole bank when it is shorter than a run', () => {
    const ten = Array.from({ length: 10 }, (_, i) => ({ mode: 'x', q: `q${i}` }));
    expect(drawDrillRun(ten)).toHaveLength(10);
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
    expect(src).not.toContain('shLocal(DATA)');
    // Either the drill draws its own run, or it is a thin ModeDrill wrapper handing
    // the bank to the engine — which draws (pinned below), so it never serves all 24.
    if (src.includes('<ModeDrill')) expect(src).toMatch(/data=\{DATA\}/);
    else expect(src).toContain('drawDrillRun(DATA)');
  });

  it('the ModeDrill engine samples the bank it is handed via drawDrillRun', () => {
    const src = readFileSync('src/components/practice/ModeDrill.tsx', 'utf8');
    expect(src).toMatch(/drawDrillRun\(data as ModeDrillItem\[\]\)/);
  });
});
