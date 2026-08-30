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
const { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } = await import('../lib/categoryRoutes');

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
    // Practice programme, B1 tranche 1 (2026-08-29). All five were in
    // DELIBERATELY_UNMAPPED below, and for a sharper reason than "no drill
    // exists": each HAD a drill at B2/C1 carrying a category that was already
    // routed somewhere else. Three of them shared `subordination`, so mapping
    // them as they stood would have sent three different lessons to one screen.
    // Each now has its own pool-only category and its own B1 drill.
    'infinitive-vs-da': 'infinitive-da',
    'reported-speech': 'reported-speech',
    impersonal: 'impersonal',
    'time-clauses': 'time-clauses',
    'cause-purpose': 'cause-purpose',
    // The debt block (2026-08-30) — the last three B1 lessons. Same collision
    // shape as the tranche above: every conditional drill in the pool carries
    // `conditional`, which routes to `cloze` and belongs to a C2 lesson, so
    // `real-conditions` could not reuse one. New pool-only categories
    // throughout.
    'time-duration': 'duration',
    'position-placement': 'position',
    'real-conditions': 'real-conditions',
    // The TOPICAL block (2026-08-30), the ten B1 lessons whose subject reads as
    // a topic. Each is a topic PLUS a structure, and the structure is what the
    // drill tests:
    //   opinions-agreeing    the obligatory `da` after every opinion frame —
    //                        English drops "that", Croatian never drops da
    //   feelings-inner-life  the case each reflexive emotion verb governs
    //                        (bojati se + gen, nadati se + dat, brinuti se za)
    //   complaints-problems  Croatian reports the FAULT, not the culprit
    //   bureaucracy          the impersonal register every official form uses
    //   renting-flat         rooms counted without kitchen or bathroom, and
    //                        najamnina against režije
    //   job-interview        the participle agreeing with the applicant, on
    //                        every line of a životopis
    //   media-news           the verbless headline, and reported speech with
    //                        NO backshift
    //   technology-internet  the native/international register split
    //   environment-nature   the named winds, which carry consequences
    //   food-cooking         a recipe is polite imperatives plus the genitive
    //
    // `feelings-inner-life` was never in the list below, which is worth noting:
    // it was uncoupled all along without being recorded as a deliberate
    // omission. The list is a record of judgements, not a census, so absence
    // from it never meant a lesson was served.
    'opinions-agreeing': 'opinions',
    'feelings-inner-life': 'feelings',
    'complaints-problems': 'complaints',
    bureaucracy: 'bureaucracy',
    'renting-flat': 'renting',
    'job-interview': 'job-search',
    'media-news': 'news',
    'technology-internet': 'technology',
    'environment-nature': 'nature',
    'food-cooking': 'cooking',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  it('reported-speech got its own category rather than borrowing subordination', () => {
    // The trap this replaces, and why the fix is not simply "map it": `neizravni`
    // is the right drill and it is B2, while the easier route for
    // `subordination` was already spent on `relpron` — so mapping the lesson to
    // that category would have sent a B1 learner to a relative-pronoun drill
    // straight after a lesson on reporting what people said. Two other B1
    // lessons (`time-clauses`, `cause-purpose`) sat behind the same category, so
    // the collision was threefold. Each got its own pool-only category instead,
    // which is what makes all three resolvable at once.
    expect(LESSON_TAUGHT_CATEGORY['reported-speech']).toBe('reported-speech');
    expect(CATEGORY_SCREEN_MAP['reported-speech']).toBe('prepricavanje');
    // The B2 drill and the B1 route must stay distinct; collapsing them would
    // reintroduce the collision from the other direction.
    expect(CATEGORY_EASIER_SCREEN['subordination']).toBe('relpron');
    for (const c of ['reported-speech', 'time-clauses', 'cause-purpose'] as const) {
      expect(LESSON_TAUGHT_CATEGORY[c]).not.toBe('subordination');
    }
  });

  // The DELIBERATELY_UNMAPPED list this file carried is EMPTY as of 2026-08-30
  // and the assertion is inverted. It held three lessons, each recorded as
  // teaching "something no drill in the app covers at any level" — which is a
  // statement about the app rather than about the lesson, and so was always
  // going to be answered by authoring the drill.
  it('every B1 lesson in this level file is coupled to a drill', () => {
    const uncoupled = b1Lessons.filter((l) => !LESSON_TAUGHT_CATEGORY[l.id]).map((l) => l.id);
    expect(
      uncoupled,
      'a B1 lesson leads nowhere — author its drill, or record here why no honest pairing exists',
    ).toEqual([]);
  });

  it('the technology drill was authored rather than borrowing techvoc', () => {
    // The survey's one near-miss, and the reason it is not a retag. `techvoc`
    // (B2, Tech Vocabulary) is the drill this lesson wants and sits a level
    // above it. The A2 rescue — CATEGORY_EASIER_SCREEN — only routes DOWNWARD,
    // and there was nothing below. Retagging `techvoc` was the other option and
    // is worse: its tag `vocab-b2` is an ALL_CATEGORIES member routed to `znam`,
    // so moving it would change what the adaptive picker serves for a category
    // that has nothing to do with this lesson.
    expect(CATEGORY_SCREEN_MAP['technology']).toBe('tehnologija');
    expect(CATEGORY_SCREEN_MAP['vocab-b2']).toBe('znam');
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
