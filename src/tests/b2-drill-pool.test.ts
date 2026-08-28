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
import { BEZLICNE_DRILL_DATA } from '../components/practice/BezlicneDrill';
import { NEODREDJENE_DRILL_DATA } from '../components/practice/NeodredjeneDrill';
import { SLAGANJEBROJEVA_DRILL_DATA } from '../components/practice/SlaganjeBrojevaDrill';
import { GLAGOLSKI_PRILOZI_DRILL_DATA } from '../components/practice/GlagolskiPriloziDrill';
import { AORIST_IMPERFEKT_DRILL_DATA } from '../components/practice/AoristImperfektDrill';
import { REKCIJA_DRILL_DATA } from '../components/practice/RekcijaDrill';
import { VID_IMPERATIV_DRILL_DATA } from '../components/practice/VidImperativDrill';
import { POSVOJNI_DRILL_DATA } from '../components/practice/PosvojniDrill';
import { VREMENSKE_DRILL_DATA } from '../components/practice/VremenskeDrill';
import { MNOZINA_DRILL_DATA } from '../components/practice/MnozinaDrill';
import { PROSTORNI_DRILL_DATA } from '../components/practice/ProstorniDrill';
import { STUPNJEVANJE_DRILL_DATA } from '../components/practice/StupnjevanjeDrill';
import { ZAMJENICE_DRILL_DATA } from '../components/practice/ZamjeniceDrill';
import { UZROCNE_DRILL_DATA } from '../components/practice/UzrocneDrill';
import { KOLICINA_DRILL_DATA } from '../components/practice/KolicinaDrill';
import { PRIJEDLOZI_GEN_DRILL_DATA } from '../components/practice/PrijedloziGenDrill';
import { IMENICE_ME_DRILL_DATA } from '../components/practice/ImeniceMeDrill';
import { PITANJA_DRILL_DATA } from '../components/practice/PitanjaDrill';
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
    id: 'bezlicne',
    data: BEZLICNE_DRILL_DATA,
    modes: ['dozivljaj', 'izrazi', 'slaganje'],
    category: 'passive',
  },
  {
    id: 'neodredjene',
    data: NEODREDJENE_DRILL_DATA,
    modes: ['god', 'oblici', 'razdvajanje'],
    category: 'word-order',
  },
  {
    id: 'slaganjebrojeva',
    data: SLAGANJEBROJEVA_DRILL_DATA,
    modes: ['mali', 'veliki', 'zbirni'],
    category: 'numerals',
  },
  {
    id: 'kretanje',
    data: KRETANJE_DRILL_DATA,
    modes: ['parovi', 'prefiksi', 'rekcija'],
    category: 'aspect-perfective',
  },
  {
    id: 'glagolskiprilozi',
    data: GLAGOLSKI_PRILOZI_DRILL_DATA,
    modes: ['tvorba', 'uporaba', 'zamjena'],
    category: 'participle',
  },
  {
    id: 'aoristimperfekt',
    data: AORIST_IMPERFEKT_DRILL_DATA,
    modes: ['aorist', 'imperfekt', 'uporaba'],
    category: 'past-tense',
  },
  {
    id: 'rekcija',
    data: REKCIJA_DRILL_DATA,
    modes: ['dativ', 'genitiv', 'prijedlozna'],
    // Retagged 2026-08-28 (owner decision). The modes are the argument: dativ,
    // genitiv and prijedlozna are three different cases, so 'dative-locative'
    // only ever described one third of the drill.
    category: 'verb-government',
  },
  {
    id: 'vidimperativ',
    data: VID_IMPERATIV_DRILL_DATA,
    modes: ['infinitiv', 'zabrana', 'zapovijed'],
    category: 'aspect-perfective',
  },
  {
    id: 'posvojni',
    data: POSVOJNI_DRILL_DATA,
    modes: ['sklonidba', 'tvorba', 'uporaba'],
    category: 'genitive',
  },
  {
    id: 'vremenske',
    data: VREMENSKE_DRILL_DATA,
    modes: ['prijenos', 'veznici', 'vid'],
    category: 'subordination',
  },
  {
    id: 'mnozina',
    data: MNOZINA_DRILL_DATA,
    modes: ['dugamn', 'genmn', 'oblici'],
    category: 'nominative',
  },
  {
    id: 'prostorni',
    data: PROSTORNI_DRILL_DATA,
    modes: ['gdje', 'kamo', 'parovi'],
    category: 'accusative',
  },
  {
    id: 'stupnjevanje',
    data: STUPNJEVANJE_DRILL_DATA,
    modes: ['nepravilni', 'tvorba', 'usporedba'],
    category: 'nominative',
  },
  {
    id: 'zamjenice',
    data: ZAMJENICE_DRILL_DATA,
    modes: ['naglaseni', 'oblici', 'recenica'],
    category: 'clitics',
  },
  {
    id: 'uzrocne',
    data: UZROCNE_DRILL_DATA,
    modes: ['posljedica', 'razlika', 'uzrok'],
    category: 'subordination',
  },
  {
    id: 'kolicina',
    data: KOLICINA_DRILL_DATA,
    modes: ['brojivo', 'mjere', 'partitiv'],
    category: 'genitive',
  },
  {
    id: 'prijedlozigen',
    data: PRIJEDLOZI_GEN_DRILL_DATA,
    modes: ['kontrast', 'mjesto', 'padez'],
    category: 'genitive',
  },
  {
    id: 'imenicame',
    data: IMENICE_ME_DRILL_DATA,
    modes: ['mnozina', 'recenica', 'sklonidba'],
    category: 'nominative',
  },
  {
    id: 'pitanja',
    data: PITANJA_DRILL_DATA,
    modes: ['cestice', 'neizravna', 'rijeci'],
    category: 'word-order',
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
  it('the pool now offers at least 30 non-adaptive B2 exercises (program tally: 30/30 COMPLETE)', () => {
    const b2 = CEFR_EXERCISE_POOL.filter((e) => e.cefr === 'B2' && !e.adaptive);
    expect(b2.length).toBeGreaterThanOrEqual(30);
  });
});
