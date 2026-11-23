// The A1 lessons that were practised on an old hand-written bank now have a drill built from
// Hrvatski za početnike 1, in the same shape as the other A1 lesson drills. This holds the shape
// (so a bank cannot ship with a wrong answer, a repeat or a missing explanation) and the wiring
// (lesson -> its own category -> its own screen, at A1).
import { describe, expect, it } from 'vitest';
import { LESSON_TAUGHT_CATEGORY, recordScreenPractised } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from '../lib/categoryRoutes';
import { A1_LESSON_DRILL_ENTRIES } from '../lib/practiceDrillEntriesA1';
import { ALL_CATEGORIES } from '../lib/adaptive';

const LESSONS = [
  'pronouns-biti',
  'present-tense-verbs',
  'cases',
  'accusative-intro',
  'genitive-intro',
  'modals-basic',
  'reflexive-verbs',
  'dative-intro',
  'directions-town',
  'food-drink',
  'clothes-appearance',
  'imperative-basic',
  'family-people',
  'body-health',
  'plural-nouns',
  'adjectives-basic',
  'weather-seasons',
] as const;
const camel = (id: string) => id.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());
const upper = (id: string) => id.toUpperCase().replace(/-/g, '_');

describe('A1 locative-intro', () => {
  it('keeps the dative-locative category: A2 drill as the route, A1 book drill as the easier route', () => {
    expect(LESSON_TAUGHT_CATEGORY['locative-intro']).toBe('dative-locative');
    expect(CATEGORY_SCREEN_MAP['dative-locative']).toBe('a2dativelocative');
    expect(CATEGORY_EASIER_SCREEN['dative-locative']).toBe('a1locativeintro');
    expect(SCREEN_CEFR['a1locativeintro']).toBe('A1');
    expect(
      A1_LESSON_DRILL_ENTRIES.some(
        (e) => e.screen === 'a1locativeintro' && e.category === 'dative-locative',
      ),
    ).toBe(true);
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import('../data/drills/a1/locativeIntroDrill');
    const data = m.LOCATIVE_INTRO_DRILL_DATA as {
      mode: string;
      q: string;
      opts: string[];
      answer: string;
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
      expect(seen.has(d.q), d.q).toBe(false);
      seen.add(d.q);
    }
  });
});

describe('A1 instrumental-intro', () => {
  // Like A2 dative-locative: the lesson keeps its category (the adaptive picker and the written-mistake
  // rotation use it), and that category's route is the A1 book drill.
  it('keeps its category, routed to the A1 book drill, still in the picker and rotation', () => {
    expect(LESSON_TAUGHT_CATEGORY['instrumental-intro']).toBe('instrumental');
    expect(CATEGORY_SCREEN_MAP['instrumental']).toBe('a1instrumentalintro');
    expect(SCREEN_CEFR['a1instrumentalintro']).toBe('A1');
    expect((ALL_CATEGORIES as readonly string[]).includes('instrumental')).toBe(true);
    expect(
      A1_LESSON_DRILL_ENTRIES.some(
        (e) => e.screen === 'a1instrumentalintro' && e.category === 'instrumental',
      ),
    ).toBe(true);
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import('../data/drills/a1/instrumentalIntroDrill');
    const data = m.INSTRUMENTAL_INTRO_DRILL_DATA as {
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

describe.each(LESSONS)('A1 book drill for %s', (id) => {
  it('is wired: the lesson practises its own category, routed to its own A1 screen', () => {
    const cat = `a1-${id}`;
    const screen = `a1${id.replace(/-/g, '')}`;
    expect(LESSON_TAUGHT_CATEGORY[id]).toBe(cat);
    expect(CATEGORY_SCREEN_MAP[cat as keyof typeof CATEGORY_SCREEN_MAP]).toBe(screen);
    expect(SCREEN_CEFR[screen]).toBe('A1');
    expect(A1_LESSON_DRILL_ENTRIES.some((e) => e.screen === screen && e.category === cat)).toBe(
      true,
    );
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import(`../data/drills/a1/${camel(id)}Drill`);
    const data = m[`${upper(id)}_DRILL_DATA`] as {
      mode: string;
      q: string;
      opts: string[];
      answer: string;
      tip: string;
    }[];
    const labels = m[`${upper(id)}_MODE_LABELS`] as Record<string, string>;
    expect(data.length).toBeGreaterThanOrEqual(24);
    expect(data.length).toBeLessThanOrEqual(28);
    const modes = new Map<string, number>();
    for (const d of data) modes.set(d.mode, (modes.get(d.mode) ?? 0) + 1);
    expect(modes.size).toBe(3);
    for (const [k, n] of modes) {
      expect(n, `mode ${k}`).toBeGreaterThanOrEqual(6);
      expect(labels[k], `label for ${k}`).toBeTruthy();
    }
    const seen = new Set<string>();
    for (const d of data) {
      expect(d.opts, d.q).toHaveLength(4);
      expect(new Set(d.opts).size, d.q).toBe(4);
      expect(d.opts, d.q).toContain(d.answer);
      expect(seen.has(d.q), `duplicate question: ${d.q}`).toBe(false);
      seen.add(d.q);
      expect(d.tip.length, `tip: ${d.q}`).toBeGreaterThanOrEqual(20);
    }
  });
});

// Ten A1 lessons keep an interactive screen as their practice and ALSO have a book quiz. The quiz
// is reachable (route, completion, difficulty) and offered by Keep Learning, but it is neither the
// lesson's coupled practice nor a pool entry: the daily session picks pool entries without knowing
// their lesson and could serve the quiz before the lesson is taught.
import { BOOK_QUIZ_LESSONS, bookQuizFor } from '../lib/bookQuizzes';
import { drilledOn } from '../lib/drillStamps';
import { lessonsTeachingScreen } from '../lib/lessonLookup';

describe.each(BOOK_QUIZ_LESSONS)('A1 book quiz (alongside the interactive screen) for %s', (id) => {
  it('is routed and registered, but not coupled and not in the pool', () => {
    const quiz = bookQuizFor(id)!;
    expect(quiz).toEqual({ category: `a1-${id}`, screen: `a1${id.replace(/-/g, '')}` });
    expect(CATEGORY_SCREEN_MAP[quiz.category as keyof typeof CATEGORY_SCREEN_MAP]).toBe(
      quiz.screen,
    );
    expect(LESSON_TAUGHT_CATEGORY[id]).not.toBe(quiz.category);
    expect(A1_LESSON_DRILL_ENTRIES.some((e) => e.screen === quiz.screen)).toBe(false);
  });

  it('finishing the quiz is logged: its own category is stamped passed, and it names its lesson', () => {
    const quiz = bookQuizFor(id)!;
    expect(drilledOn(quiz.category)).toBeNull();
    recordScreenPractised(quiz.screen);
    expect(drilledOn(quiz.category)).not.toBeNull();
    expect(lessonsTeachingScreen(quiz.screen)).toContain(id);
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import(`../data/drills/a1/${camel(id)}Drill`);
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
