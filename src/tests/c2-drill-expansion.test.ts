/**
 * c2-drill-expansion.test.ts — data guards for the C2 drill-pool expansion
 * (fluency initiative 2026-08-15; program target: 30+ drills per level).
 * FrazeologijaDrill (idioms: meaning, fixed-form completion, register),
 * TvorbaRijeciDrill (productive word formation), SinonimijaDrill
 * (paronyms, register-marked synonyms, semantic nuance). Same contract as
 * the other pool drills: >=24 items, 3 modes with >=8 each, 4 unique opts
 * + tip + gloss, pool registration at C2 tier 5, gated registry entry.
 */
import { describe, it, expect } from 'vitest';
import { FRAZEOLOGIJA_DRILL_DATA } from '../components/practice/FrazeologijaDrill';
import { TVORBA_DRILL_DATA } from '../components/practice/TvorbaRijeciDrill';
import { SINONIMIJA_DRILL_DATA } from '../components/practice/SinonimijaDrill';
import { POSUDJENICE_DRILL_DATA } from '../components/practice/PosudjeniceDrill';
import { GLASOVNE_DRILL_DATA } from '../components/practice/GlasovnePromjeneDrill';
import { ADMINISTRATIVNI_DRILL_DATA } from '../components/practice/AdministrativniDrill';
import { PRAVOPIS_DRILL_DATA } from '../components/practice/PravopisDrill';
import { KONEKTORI_DRILL_DATA } from '../components/practice/KonektoriDrill';
import { RAZGOVORNI_DRILL_DATA } from '../components/practice/RazgovorniDrill';
import { ENKLITIKE_DRILL_DATA } from '../components/practice/EnklitikeDrill';
import { AKADEMSKI_DRILL_DATA } from '../components/practice/AkademskiDrill';
import { INTERPUNKCIJA_DRILL_DATA } from '../components/practice/InterpunkcijaDrill';
import { CEFR_EXERCISE_POOL, EXERCISE_DIFFICULTY } from '../lib/sessionPools';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

const DRILLS = [
  {
    id: 'frazeologija',
    data: FRAZEOLOGIJA_DRILL_DATA,
    modes: ['dopuna', 'registar', 'znacenje'],
    category: 'idioms',
  },
  {
    id: 'tvorbarijeci',
    data: TVORBA_DRILL_DATA,
    modes: ['imenice', 'izrazajno', 'prefiksi'],
    category: 'nominalization',
  },
  {
    id: 'posudjenice',
    data: POSUDJENICE_DRILL_DATA,
    modes: ['domace', 'lazni', 'parovi'],
    category: 'register',
  },
  {
    id: 'glasovnepromjene',
    data: GLASOVNE_DRILL_DATA,
    modes: ['jednac', 'nepija', 'sibpal'],
    category: 'genitive',
  },
  {
    id: 'administrativni',
    data: ADMINISTRATIVNI_DRILL_DATA,
    modes: ['dekod', 'prevedi', 'sroci'],
    category: 'register',
  },
  {
    id: 'sinonimija',
    data: SINONIMIJA_DRILL_DATA,
    modes: ['nijanse', 'paronimi', 'registar'],
    category: 'register',
  },
  {
    id: 'pravopis',
    data: PRAVOPIS_DRILL_DATA,
    modes: ['ijeje', 'sastavljeno', 'zarez'],
    category: 'register',
  },
  {
    id: 'konektori',
    data: KONEKTORI_DRILL_DATA,
    modes: ['formalno', 'nijanse', 'znacenje'],
    category: 'discourse',
  },
  {
    id: 'razgovorni',
    data: RAZGOVORNI_DRILL_DATA,
    modes: ['dekod', 'obrnuto', 'situacija'],
    category: 'register',
  },
  {
    id: 'enklitike',
    data: ENKLITIKE_DRILL_DATA,
    modes: ['polozaj', 'poredak', 'slozeni'],
    category: 'clitics',
  },
  {
    id: 'akademski',
    data: AKADEMSKI_DRILL_DATA,
    modes: ['nominalizacija', 'ograda', 'pasiv'],
    category: 'nominalization',
  },
  {
    id: 'interpunkcija',
    data: INTERPUNKCIJA_DRILL_DATA,
    modes: ['crtica', 'dvotocje', 'navodnici'],
    category: 'register',
  },
] as const;

for (const drill of DRILLS) {
  describe(`C2 drill: ${drill.id}`, () => {
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

    it('is registered in the session pool at C2 tier 5', () => {
      const entry = CEFR_EXERCISE_POOL.find((e) => e.id === drill.id);
      expect(entry).toBeTruthy();
      expect(entry!.cefr).toBe('C2');
      expect(entry!.screen).toBe(drill.id);
      expect(entry!.category).toBe(drill.category);
      expect(EXERCISE_DIFFICULTY[drill.id]).toBe(5);
    });

    it('has a gated completion-registry entry (grammar credit at 75%)', () => {
      const reg = EXERCISE_COMPLETION[drill.id];
      expect(reg).toBeTruthy();
      expect(reg.policy.kind).toBe('gated');
      expect(reg.policy.statKind).toBe('gc');
    });
  });
}

describe('C2 drill-pool breadth (program tally: 15/30)', () => {
  it('the pool now offers at least 15 C2 exercises', () => {
    const c2 = CEFR_EXERCISE_POOL.filter((e) => e.cefr === 'C2');
    expect(c2.length).toBeGreaterThanOrEqual(15);
  });
});
