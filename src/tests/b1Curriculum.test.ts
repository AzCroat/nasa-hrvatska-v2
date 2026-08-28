// src/tests/b1Curriculum.test.ts
//
// B1 IS A COMPLETE LEVEL (Wave 3 content, 2026-08-28).
//
// B1's ten lessons were the remaining cases and the aspect system — the two
// hardest things in Croatian, taught well. What they were not was B1. The level
// CEFR defines as "can describe experiences and events, give reasons and
// explanations for opinions and plans, and produce connected text on familiar
// topics" had no reported speech, no time clauses, no conditions, no cause and
// no purpose — the last of which is the literal wording of the descriptor — and
// one topical lesson out of ten.
//
// Same contract as the A1 and A2 suites: pin SHAPE, not prose.

import { describe, it, expect } from 'vitest';

const { CURRICULUM, spineForLevel } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
type Lesson = { id: string; level: string; slides: { type: string }[] };

const b1Spine = spineForLevel('B1') as Entry[];
const b1Lessons = (LESSONS as Lesson[]).filter((l) => l.level === 'B1');
const orderOf = new Map(b1Spine.map((e) => [e.id, e.order]));

describe('B1 covers what the level descriptor actually asks for', () => {
  const REQUIRED = [
    'reported-speech',
    'time-clauses',
    'real-conditions',
    'cause-purpose',
    'relative-deep',
    'verb-prefixes',
    'infinitive-vs-da',
    'impersonal',
    'time-duration',
    'position-placement',
  ];

  it.each(REQUIRED)('teaches %s', (id) => {
    expect(
      b1Lessons.some((l) => l.id === id),
      `B1 lost the lesson that teaches ${id}`,
    ).toBe(true);
    expect(orderOf.has(id), `${id} is not sequenced in the B1 spine`).toBe(true);
  });

  it('keeps cause-purpose, which IS the level descriptor', () => {
    // "Can briefly give reasons and explanations for opinions and plans" is the
    // CEFR wording for B1. Before 2026-08-28 the level had nothing for it at
    // all. If this lesson ever leaves, the level stops being B1 by definition.
    expect(orderOf.has('cause-purpose')).toBe(true);
  });

  it('reaches the 30-lesson target', () => {
    expect(b1Lessons.length).toBeGreaterThanOrEqual(30);
    expect(b1Spine.length).toBe(b1Lessons.length);
  });
});

describe('B1 is not only grammar', () => {
  const FUNCTIONAL = [
    'telling-a-story',
    'opinions-agreeing',
    'complaints-problems',
    'bureaucracy',
    'renting-flat',
    'job-interview',
    'media-news',
    'technology-internet',
    'environment-nature',
    'food-cooking',
  ];

  it.each(FUNCTIONAL)('teaches %s', (id) => {
    expect(
      b1Lessons.some((l) => l.id === id),
      `B1 lost ${id}`,
    ).toBe(true);
  });

  it('keeps at least a third of the level functional', () => {
    const count = FUNCTIONAL.filter((id) => orderOf.has(id)).length;
    expect(count / b1Lessons.length).toBeGreaterThanOrEqual(0.3);
  });
});

describe('the sequence does not put a lesson before what it needs', () => {
  const AFTER: [string, string][] = [
    // The machinery lessons build on each other in a chain.
    ['real-conditions', 'time-clauses'],
    ['cause-purpose', 'real-conditions'],
    ['impersonal', 'infinitive-vs-da'],
    ['reported-speech', 'infinitive-vs-da'],
    ['relative-deep', 'reported-speech'],
    // Narration needs both the reporting and the perfective.
    ['telling-a-story', 'reported-speech'],
    ['telling-a-story', 'aspect-perfective'],
    // Prefixes are perfectivising, so they follow the aspect lessons.
    ['verb-prefixes', 'aspect-perfective'],
    // The functional lessons lean on the machinery.
    ['bureaucracy', 'impersonal'],
    ['renting-flat', 'bureaucracy'],
    ['media-news', 'reported-speech'],
  ];

  it.each(AFTER)('%s comes after %s', (later, earlier) => {
    expect(orderOf.get(later)!, `${later} sits above ${earlier}`).toBeGreaterThan(
      orderOf.get(earlier)!,
    );
  });

  it('every same-level prerequisite is earlier in the spine', () => {
    const byId = new Map((CURRICULUM as Entry[]).map((e) => [e.id, e]));
    for (const e of b1Spine) {
      for (const p of e.prerequisites) {
        const pe = byId.get(p);
        if (!pe || pe.level !== 'B1') continue;
        expect(pe.order, `${e.id} requires later B1 lesson ${p}`).toBeLessThan(e.order);
      }
    }
  });
});

describe('every B1 lesson is a usable lesson', () => {
  it('has enough slides to teach something', () => {
    for (const l of b1Lessons) {
      expect(l.slides.length, `${l.id} has only ${l.slides.length} slides`).toBeGreaterThanOrEqual(
        7,
      );
    }
  });

  it('checks understanding before it claims to have taught', () => {
    for (const l of b1Lessons) {
      expect(
        l.slides.some((s) => s.type === 'quiz'),
        `${l.id} never checks whether the learner followed it`,
      ).toBe(true);
    }
  });

  it('ends on the summary slide that records the completion', () => {
    for (const l of b1Lessons) {
      expect(l.slides[l.slides.length - 1].type, `${l.id} does not end on a summary`).toBe(
        'summary',
      );
    }
  });
});

describe('teach → practice coupling stays HONEST at B1', () => {
  const EXPECTED: Record<string, string> = {
    'verb-prefixes': 'aspect-perfective',
    'telling-a-story': 'past-tense',
    'relative-deep': 'subordination',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  it('reported-speech is NOT mapped, though a drill for it exists', () => {
    // `neizravni` (Neizravni govor) is exactly the right drill and it is B2. The
    // easier route for the subordination category is already spent on `relpron`,
    // which teaches relative pronouns — so mapping this lesson would send a B1
    // learner to a relative-pronoun drill straight after a lesson on reporting
    // what people said. Wrong drill, so no drill. If a B1 reported-speech drill
    // ever ships, move it into EXPECTED.
    expect(LESSON_TAUGHT_CATEGORY['reported-speech']).toBeUndefined();
  });

  const DELIBERATELY_UNMAPPED = [
    'time-duration',
    'position-placement',
    'infinitive-vs-da',
    'impersonal',
    'time-clauses',
    'real-conditions',
    'cause-purpose',
    'opinions-agreeing',
    'complaints-problems',
    'bureaucracy',
    'renting-flat',
    'job-interview',
    'media-news',
    'technology-internet',
    'environment-nature',
    'food-cooking',
  ];

  it.each(DELIBERATELY_UNMAPPED)('%s is left unmapped rather than mispaired', (id) => {
    expect(LESSON_TAUGHT_CATEGORY[id]).toBeUndefined();
  });
});

describe('the subordination category now has a route', () => {
  // This repairs a mapping that had never resolved. `complex-sentences` (B2)
  // has pointed at the subordination category since the coupling shipped, and
  // CATEGORY_SCREEN_MAP had no row for it — so the lesson queued a category
  // that could never become a drill, while eight subordination drills sat in
  // the pool unreachable. Same shape as CATEGORY_SCREEN_MAP.nominative, which
  // exists for exactly this reason and is documented as such.
  it('routes to a real screen, and to a B1-reachable one below it', async () => {
    const { CEFR_EXERCISE_POOL } = await import('../lib/sessionPools');
    const pool = CEFR_EXERCISE_POOL as { screen: string; cefr: string; category: string }[];
    const main = pool.find((e) => e.screen === 'subordination');
    const easier = pool.find((e) => e.screen === 'relpron');
    expect(main, 'the subordination screen left the pool').toBeTruthy();
    expect(easier, 'the relpron screen left the pool').toBeTruthy();
    expect(easier!.category).toBe('subordination');
    expect(easier!.cefr).toBe('B1');
  });

  it('is still absent from ALL_CATEGORIES, so adaptive picks are unchanged', async () => {
    // The blast radius of the route is deliberately limited to the coupling. If
    // subordination were ever added to ALL_CATEGORIES, the adaptive scheduler
    // would start serving it too — a real change that should be made on purpose
    // rather than inherited from this one.
    const { ALL_CATEGORIES } = await import('../lib/adaptive');
    expect((ALL_CATEGORIES as string[]).includes('subordination')).toBe(false);
  });
});
