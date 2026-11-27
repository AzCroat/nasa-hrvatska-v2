// B2 lessons whose practice is a drill built from Razgovarajte s nama B2 and the B2-C1 grammar
// book (Gramatika i pravopis). This holds the wiring and the format of each bank.
//
// clitics: the lesson keeps the shared `clitics` category (the adaptive picker uses it, and the A1
// object-pronouns and C1 clitics-advanced lessons share it). The screen keeps its id `clitic` (the
// Learn path, Practice tab and explainer use it); only its question bank is the B2 book drill. The A1
// book drill is the easier route.
import { describe, expect, it } from 'vitest';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from '../lib/categoryRoutes';
import { ALL_CATEGORIES } from '../lib/adaptive';

describe('B2 clitics', () => {
  it('keeps the clitics category: B2 book drill as the route, A1 book drill as the easier route', () => {
    expect(LESSON_TAUGHT_CATEGORY['clitics']).toBe('clitics');
    expect(CATEGORY_SCREEN_MAP['clitics']).toBe('clitic');
    expect(CATEGORY_EASIER_SCREEN['clitics']).toBe('a1objectpronouns');
    expect(SCREEN_CEFR['clitic']).toBe('B2');
    expect(SCREEN_CEFR['a1objectpronouns']).toBe('A1');
    expect((ALL_CATEGORIES as readonly string[]).includes('clitics')).toBe(true);
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import('../data/drills/b2/cliticsDrill');
    const data = m.CLITICS_DRILL_DATA as {
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

// Batch 1: eleven B2 lessons with their own category and screen.
const OWN = [
  'verbal-adverbs',
  'aspect-with-verbs',
  'meetings-negotiation',
  'business-economy',
  'wishes-regrets',
  'politics-society',
  'degrees-intensity',
  'argument-structure',
  'small-talk-fluency',
  'negation-advanced',
  'literature-canon',
  // Batch 2: lessons that had no category of their own, or shared one that stays.
  'complex-sentences',
  'participial-adjectives',
  'passive-voice',
  'aspect-suffixes',
] as const;
const camel = (id: string) => id.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());
const upper = (id: string) => id.toUpperCase().replace(/-/g, '_');

describe.each(OWN)('B2 book drill for %s', (id) => {
  it('is wired: the lesson practises its own category, routed to its own B2 screen', () => {
    const cat = `b2-${id}`;
    const screen = `b2${id.replace(/-/g, '')}`;
    expect(LESSON_TAUGHT_CATEGORY[id]).toBe(cat);
    expect(CATEGORY_SCREEN_MAP[cat as keyof typeof CATEGORY_SCREEN_MAP]).toBe(screen);
    expect(SCREEN_CEFR[screen]).toBe('B2');
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import(`../data/drills/b2/${camel(id)}Drill.ts`);
    const data = m[`${upper(id)}_DRILL_DATA`] as {
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

// Batch 2, the lessons that keep their category or their screen id.
describe('B2 batch 2: aspect-negation and i-declension', () => {
  it('aspect-negation keeps its category: B2 book drill as the route, A2 aspect screen as the easier route', () => {
    expect(LESSON_TAUGHT_CATEGORY['aspect-negation']).toBe('aspect-negation');
    expect(CATEGORY_SCREEN_MAP['aspect-negation']).toBe('b2aspectnegation');
    expect(CATEGORY_EASIER_SCREEN['aspect-negation']).toBe('aspectdrill');
    expect(SCREEN_CEFR['b2aspectnegation']).toBe('B2');
    expect((ALL_CATEGORIES as readonly string[]).includes('aspect-negation')).toBe(true);
  });

  it('the shared categories stay with the lessons that still use them', () => {
    expect(LESSON_TAUGHT_CATEGORY['passive-choices']).toBe('passive');
    expect(LESSON_TAUGHT_CATEGORY['clause-types']).toBe('subordination');
    expect(LESSON_TAUGHT_CATEGORY['aspect-imperfective']).toBe('aspect-imperfective');
    expect(LESSON_TAUGHT_CATEGORY['i-declension']).toBe('i-declension');
  });

  it.each([
    ['aspectNegationDrill', 'ASPECT_NEGATION_DRILL_DATA'],
    ['iDeclensionDrill', 'I_DECLENSION_B2_DRILL_DATA'],
  ])('%s is well formed', async (file, name) => {
    const m = await import(`../data/drills/b2/${file}.ts`);
    const data = m[name] as {
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
