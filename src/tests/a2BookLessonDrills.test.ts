// A2 lessons that practised on an old hand-written bank now practise on a drill built from
// Razgovarajte s nama A2-B1. This holds the format of each bank, the wiring, and the one
// special case: dative-locative keeps its category (the adaptive picker and the written-mistake
// rotation use it), whose route is now the A2 book drill, with the A1 book drill as the easier route.
import { describe, expect, it } from 'vitest';
import { LESSON_TAUGHT_CATEGORY, recordScreenPractised } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from '../lib/categoryRoutes';
import { UPPER_LESSON_DRILL_ENTRIES } from '../lib/practiceDrillEntriesUpper';
import { drilledOn } from '../lib/drillStamps';
import { ALL_CATEGORIES } from '../lib/adaptive';

const OWN_CATEGORY = [
  'work-jobs',
  'travel-transport',
  'describing-people',
  'prepositions-action',
  'house-home',
  'plans-invitations',
  'hobbies-free-time',
  'adjective-agreement',
  'adverbs',
  'celebrations-holidays',
  'vi-vs-ti',
  'svoj',
  'plural-cases',
  'school-studies',
  'impersonal',
  'modal-verbs-a2',
  'aspect',
] as const;
const ALL = [...OWN_CATEGORY, 'dative-locative'] as const;
const camel = (id: string) => id.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());
const upper = (id: string) => id.toUpperCase().replace(/-/g, '_');
const screenOf = (id: string) => `a2${id.replace(/-/g, '')}`;

describe.each(OWN_CATEGORY)('A2 book drill for %s', (id) => {
  it('is wired: the lesson practises its own category, routed to its own A2 screen', () => {
    const cat = `a2-${id}`;
    expect(LESSON_TAUGHT_CATEGORY[id]).toBe(cat);
    expect(CATEGORY_SCREEN_MAP[cat as keyof typeof CATEGORY_SCREEN_MAP]).toBe(screenOf(id));
    expect(SCREEN_CEFR[screenOf(id)]).toBe('A2');
    expect(
      UPPER_LESSON_DRILL_ENTRIES.some((e) => e.screen === screenOf(id) && e.category === cat),
    ).toBe(true);
  });
});

describe('A2 present', () => {
  // The lesson keeps the shared present-tense category (the adaptive picker uses it). The screen
  // keeps its id; its content is the A2 book drill. The A1 book drill is the easier route.
  it('keeps present-tense: A2 book drill as the route, A1 book drill as the easier route', () => {
    expect(LESSON_TAUGHT_CATEGORY['present']).toBe('present-tense');
    expect(CATEGORY_SCREEN_MAP['present-tense']).toBe('presentdrill');
    expect(CATEGORY_EASIER_SCREEN['present-tense']).toBe('a1presenttenseverbs');
    expect(SCREEN_CEFR['presentdrill']).toBe('A2');
    expect(SCREEN_CEFR['a1presenttenseverbs']).toBe('A1');
    expect((ALL_CATEGORIES as readonly string[]).includes('present-tense')).toBe(true);
  });
});

describe.each([['present', 'presentDrill', 'PRESENT']] as const)(
  'A2 book drill content for %s',
  (id, file, upperName) => {
    it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
      const m = await import(`../data/drills/a2/${file}.ts`);
      const data = m[`${upperName}_DRILL_DATA`] as {
        mode: string;
        q: string;
        opts: string[];
        answer: string;
        tip: string;
      }[];
      expect(data.length, id).toBeGreaterThanOrEqual(24);
      expect(data.length).toBeLessThanOrEqual(28);
      const modes = new Map<string, number>();
      for (const d of data) modes.set(d.mode, (modes.get(d.mode) ?? 0) + 1);
      expect(modes.size).toBe(3);
      for (const n of modes.values()) expect(n).toBeGreaterThanOrEqual(6);
      const seen = new Set<string>();
      for (const d of data) {
        expect(new Set(d.opts).size, d.q).toBe(4);
        expect(d.opts, d.q).toContain(d.answer);
        expect(seen.has(d.q), `duplicate question: ${d.q}`).toBe(false);
        seen.add(d.q);
        expect(d.tip.length, `tip: ${d.q}`).toBeGreaterThanOrEqual(20);
      }
    });
  },
);

describe('A2 accusative-deep', () => {
  // Like dative-locative: the lesson keeps its category (the adaptive picker and the written-mistake
  // rotation use it). The screen keeps its id (the Learn path, Practice tab and explainer use it);
  // only its content is the A2 book drill. The A1 book drill is the easier route.
  it('keeps the accusative category: A2 book drill as the route, A1 book drill as the easier route', () => {
    expect(LESSON_TAUGHT_CATEGORY['accusative-deep']).toBe('accusative');
    expect(CATEGORY_SCREEN_MAP['accusative']).toBe('accusativedrill');
    expect(CATEGORY_EASIER_SCREEN['accusative']).toBe('a1accusativeintro');
    expect(SCREEN_CEFR['accusativedrill']).toBe('A2');
    expect(SCREEN_CEFR['a1accusativeintro']).toBe('A1');
    expect((ALL_CATEGORIES as readonly string[]).includes('accusative')).toBe(true);
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import('../data/drills/a2/accusativeDeepDrill');
    const data = m.ACCUSATIVE_DEEP_DRILL_DATA as {
      mode: string;
      q: string;
      opts: string[];
      answer: string;
      tip: string;
    }[];
    expect(data.length).toBeGreaterThanOrEqual(24);
    expect(data.length).toBeLessThanOrEqual(28);
    const modes = new Map<string, number>();
    for (const d of data) modes.set(d.mode, (modes.get(d.mode) ?? 0) + 1);
    expect(modes.size).toBe(3);
    for (const n of modes.values()) expect(n).toBeGreaterThanOrEqual(6);
    const seen = new Set<string>();
    for (const d of data) {
      expect(new Set(d.opts).size, d.q).toBe(4);
      expect(d.opts, d.q).toContain(d.answer);
      expect(seen.has(d.q), `duplicate question: ${d.q}`).toBe(false);
      seen.add(d.q);
      expect(d.tip.length, `tip: ${d.q}`).toBeGreaterThanOrEqual(20);
    }
  });
});

describe('A2 dative-locative', () => {
  it('keeps its category: A2 drill as the route, A1 book drill as the easier route, still in the picker and rotation', () => {
    expect(LESSON_TAUGHT_CATEGORY['dative-locative']).toBe('dative-locative');
    expect(CATEGORY_SCREEN_MAP['dative-locative']).toBe('a2dativelocative');
    expect(CATEGORY_EASIER_SCREEN['dative-locative']).toBe('a1locativeintro');
    expect(SCREEN_CEFR['a2dativelocative']).toBe('A2');
    expect(SCREEN_CEFR['a1locativeintro']).toBe('A1');
    expect((ALL_CATEGORIES as readonly string[]).includes('dative-locative')).toBe(true);
    expect(
      UPPER_LESSON_DRILL_ENTRIES.some(
        (e) => e.screen === 'a2dativelocative' && e.category === 'dative-locative',
      ),
    ).toBe(true);
  });
});

describe.each(ALL)('A2 book drill content for %s', (id) => {
  it('finishing it is logged under its category', () => {
    const cat = id === 'dative-locative' ? 'dative-locative' : `a2-${id}`;
    expect(drilledOn(cat)).toBeNull();
    recordScreenPractised(screenOf(id));
    expect(drilledOn(cat)).not.toBeNull();
  });

  it('is well formed: 27-28 items, 3 modes of 8+, one right answer among 4 distinct options', async () => {
    const m = await import(`../data/drills/a2/${camel(id)}Drill`);
    const data = m[`${upper(id)}_DRILL_DATA`] as {
      mode: string;
      q: string;
      opts: string[];
      answer: string;
      tip: string;
    }[];
    const labels = m[`${upper(id)}_MODE_LABELS`] as Record<string, string>;
    expect(data.length).toBeGreaterThanOrEqual(27);
    expect(data.length).toBeLessThanOrEqual(28);
    const modes = new Map<string, number>();
    for (const d of data) modes.set(d.mode, (modes.get(d.mode) ?? 0) + 1);
    expect(modes.size).toBe(3);
    for (const [k, n] of modes) {
      expect(n, `mode ${k}`).toBeGreaterThanOrEqual(8);
      expect(labels[k], `label for ${k}`).toBeTruthy();
    }
    const seen = new Set<string>();
    for (const d of data) {
      expect(new Set(d.opts).size, d.q).toBe(4);
      expect(d.opts, d.q).toContain(d.answer);
      expect(seen.has(d.q), `duplicate question: ${d.q}`).toBe(false);
      seen.add(d.q);
      expect(d.tip.length, `tip: ${d.q}`).toBeGreaterThanOrEqual(20);
    }
  });
});
