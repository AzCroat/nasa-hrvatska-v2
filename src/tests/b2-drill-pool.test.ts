/**
 * b2-drill-pool.test.ts — data guards for the B2 drill-pool expansion
 * (A1–B2 content focus, 2026-08): FuturDrugiDrill, ReportedSpeechDrill,
 * MotionVerbsDrill — the three B2 grammar units that were taught
 * (grammarAdvanced animated lessons: futur-ii, reported-speech,
 * verbs-of-motion) but never drilled. Same contract as the C2 drills:
 * >=24 items, 3 modes with >=8 each, 4 unique opts + tip + gloss, pool
 * registration at B2 tier 4, gated completion-registry entry.
 */
import { describe, it, expect } from 'vitest';
import { FUTUR2_DRILL_DATA } from '../components/practice/FuturDrugiDrill';
import { NEIZRAVNI_DRILL_DATA } from '../components/practice/ReportedSpeechDrill';
import { KRETANJE_DRILL_DATA } from '../components/practice/MotionVerbsDrill';
import { CEFR_EXERCISE_POOL, EXERCISE_DIFFICULTY } from '../lib/sessionPools';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

const DRILLS = [
  {
    id: 'futur2',
    data: FUTUR2_DRILL_DATA,
    modes: ['izbor', 'tvorba', 'uporaba'],
    category: 'future-tense',
  },
  {
    id: 'neizravni',
    data: NEIZRAVNI_DRILL_DATA,
    modes: ['izjave', 'pitanja', 'zapovijedi'],
    category: 'subordination',
  },
  {
    id: 'kretanje',
    data: KRETANJE_DRILL_DATA,
    modes: ['parovi', 'prefiksi', 'rekcija'],
    category: 'aspect-perfective',
  },
] as const;

for (const drill of DRILLS) {
  describe(`B2 drill: ${drill.id}`, () => {
    it('has >=24 items covering all three modes with >=8 each', () => {
      expect(drill.data.length).toBeGreaterThanOrEqual(24);
      const modes = new Set(drill.data.map((d) => d.mode));
      expect([...modes].sort()).toEqual([...drill.modes]);
      for (const mode of modes) {
        expect(
          drill.data.filter((d) => d.mode === mode).length,
          `mode ${mode}`,
        ).toBeGreaterThanOrEqual(8);
      }
    });

    it('every item has 4 unique opts containing the answer, plus a tip and gloss', () => {
      for (const d of drill.data) {
        expect(d.opts.length, d.q).toBe(4);
        expect(new Set(d.opts).size, `dup opts: ${d.q}`).toBe(4);
        expect(d.opts, d.q).toContain(d.answer);
        expect(typeof d.tip, d.q).toBe('string');
        expect(d.tip.length, d.q).toBeGreaterThan(10);
        expect(typeof d.en, d.q).toBe('string');
      }
    });

    it('has no duplicate questions', () => {
      const qs = drill.data.map((d) => d.q);
      expect(new Set(qs).size).toBe(qs.length);
    });

    it('is registered in the session pool at B2 tier 4', () => {
      const entry = CEFR_EXERCISE_POOL.find((e) => e.id === drill.id);
      expect(entry).toBeTruthy();
      expect(entry!.cefr).toBe('B2');
      expect(entry!.screen).toBe(drill.id);
      expect(entry!.category).toBe(drill.category);
      expect(EXERCISE_DIFFICULTY[drill.id]).toBe(4);
    });

    it('has a gated completion-registry entry (grammar credit at 75%)', () => {
      const reg = EXERCISE_COMPLETION[drill.id];
      expect(reg).toBeTruthy();
      expect(reg.policy.kind).toBe('gated');
      expect(reg.policy.statKind).toBe('gc');
    });
  });
}

describe('B2 drill-pool breadth', () => {
  it('the pool now offers at least 12 non-adaptive B2 exercises', () => {
    const b2 = CEFR_EXERCISE_POOL.filter((e) => e.cefr === 'B2' && !e.adaptive);
    expect(b2.length).toBeGreaterThanOrEqual(12);
  });
});
