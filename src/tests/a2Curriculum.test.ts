// src/tests/a2Curriculum.test.ts
//
// A2 IS A COMPLETE LEVEL (Wave 2 content, 2026-08-28).
//
// A2 had eight lessons and every one of them was about verbs or adjectives.
// The level whose whole definition is "can describe a past event, make a plan
// and give an opinion" had no dative, no instrumental, no object pronouns, no
// plural beyond the subject form, no conjunctions past `i` — and nothing
// functional at all. A learner could conjugate a verb and not say who they gave
// the book to.
//
// Same contract as a1Curriculum.test.ts: these pin SHAPE, not prose. Rewrite any
// lesson you like; what must not happen is a structure quietly leaving the
// level, or the sequence being reordered so a lesson lands before what it needs.

import { describe, it, expect } from 'vitest';

const { CURRICULUM, spineForLevel } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
type Lesson = { id: string; level: string; slides: { type: string }[] };

const a2Spine = spineForLevel('A2') as Entry[];
const a2Lessons = (LESSONS as Lesson[]).filter((l) => l.level === 'A2');
const orderOf = new Map(a2Spine.map((e) => [e.id, e.order]));

describe('A2 covers the structures the level is defined by', () => {
  const REQUIRED = [
    'object-pronouns',
    'dative-intro',
    'instrumental-intro',
    'plural-cases',
    'svoj',
    'quantity',
    'ordinals-dates',
    'past-questions-negation',
    'adverbs',
    'conjunctions',
    'relative-koji',
    'indefinites',
  ];

  it.each(REQUIRED)('teaches %s', (id) => {
    expect(
      a2Lessons.some((l) => l.id === id),
      `A2 lost the lesson that teaches ${id}`,
    ).toBe(true);
    expect(orderOf.has(id), `${id} is not sequenced in the A2 spine`).toBe(true);
  });

  it('reaches the 30-lesson target', () => {
    expect(a2Lessons.length).toBeGreaterThanOrEqual(30);
    expect(a2Spine.length).toBe(a2Lessons.length);
  });
});

describe('A2 is not only grammar', () => {
  // The original eight were all structural. A level a learner can only survive
  // by conjugating is not the level CEFR describes, and it is also the reason
  // nobody could hold a conversation after finishing it.
  const FUNCTIONAL = [
    'house-home',
    'body-health',
    'clothes-appearance',
    'describing-people',
    'work-jobs',
    'school-studies',
    'hobbies-free-time',
    'travel-transport',
    'plans-invitations',
    'celebrations-holidays',
  ];

  it.each(FUNCTIONAL)('teaches %s', (id) => {
    expect(
      a2Lessons.some((l) => l.id === id),
      `A2 lost ${id}`,
    ).toBe(true);
  });

  it('keeps at least a third of the level functional', () => {
    const count = FUNCTIONAL.filter((id) => orderOf.has(id)).length;
    expect(count / a2Lessons.length).toBeGreaterThanOrEqual(0.3);
  });
});

describe('the sequence does not put a lesson before what it needs', () => {
  // Named orderings, each of which a plausible future edit could break.
  const AFTER: [string, string][] = [
    ['dative-intro', 'object-pronouns'],
    ['quantity', 'plural-cases'],
    ['relative-koji', 'conjunctions'],
    ['past-questions-negation', 'past-tense'],
    ['school-studies', 'work-jobs'],
    ['describing-people', 'clothes-appearance'],
  ];

  it.each(AFTER)('%s comes after %s', (later, earlier) => {
    expect(orderOf.get(later)!, `${later} sits above ${earlier}`).toBeGreaterThan(
      orderOf.get(earlier)!,
    );
  });

  it('every same-level prerequisite is earlier in the spine', () => {
    // The spine test asserts this globally; repeating it here means an A2
    // failure names A2 rather than sending the reader through 88 entries.
    const byId = new Map((CURRICULUM as Entry[]).map((e) => [e.id, e]));
    for (const e of a2Spine) {
      for (const p of e.prerequisites) {
        const pe = byId.get(p);
        if (!pe || pe.level !== 'A2') continue;
        expect(pe.order, `${e.id} requires later A2 lesson ${p}`).toBeLessThan(e.order);
      }
    }
  });
});

describe('every A2 lesson is a usable lesson', () => {
  it('has enough slides to teach something', () => {
    for (const l of a2Lessons) {
      expect(l.slides.length, `${l.id} has only ${l.slides.length} slides`).toBeGreaterThanOrEqual(
        7,
      );
    }
  });

  it('checks understanding before it claims to have taught', () => {
    for (const l of a2Lessons) {
      expect(
        l.slides.some((s) => s.type === 'quiz'),
        `${l.id} never checks whether the learner followed it`,
      ).toBe(true);
    }
  });

  it('ends on the summary slide that records the completion', () => {
    for (const l of a2Lessons) {
      expect(l.slides[l.slides.length - 1].type, `${l.id} does not end on a summary`).toBe(
        'summary',
      );
    }
  });
});

describe('teach → practice coupling stays HONEST at A2', () => {
  const EXPECTED: Record<string, string> = {
    'dative-intro': 'dative-locative',
    'instrumental-intro': 'instrumental',
    'ordinals-dates': 'numerals',
    'past-questions-negation': 'past-tense',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  it('object-pronouns is NOT mapped, because its drill is out of reach', () => {
    // Clitics do have a drill — `clitic`, gated at B2. Mapping this lesson would
    // queue a category an A2 learner cannot open, so the coupling would resolve
    // to nothing and the learner would be promised practice that never arrives.
    // That is the `gender → vocab-a2` trap; do not "fix" this by adding a row.
    // If a clitic drill ever ships at A2, move it into EXPECTED above.
    expect(LESSON_TAUGHT_CATEGORY['object-pronouns']).toBeUndefined();
  });

  const DELIBERATELY_UNMAPPED = [
    'plural-cases',
    'quantity',
    'svoj',
    'adverbs',
    'conjunctions',
    'relative-koji',
    'indefinites',
    'house-home',
    'body-health',
    'clothes-appearance',
    'describing-people',
    'work-jobs',
    'school-studies',
    'hobbies-free-time',
    'travel-transport',
    'plans-invitations',
    'celebrations-holidays',
  ];

  it.each(DELIBERATELY_UNMAPPED)('%s is left unmapped rather than mispaired', (id) => {
    expect(LESSON_TAUGHT_CATEGORY[id]).toBeUndefined();
  });

  // WHERE THE "does it actually resolve?" ASSERTION LIVES NOW:
  // src/tests/curriculumCouplingResolves.test.ts.
  //
  // A version of it used to sit here, and it was wrong. It checked the CEFR of
  // a screen looked up in a SCREEN_FOR map written inside this file — a second
  // source of truth that did not match the app's. It happily confirmed that
  // `ordinals-dates → numerals` resolved via `numtime`, when in fact
  // CATEGORY_SCREEN_MAP had no `numerals` row at all and the mapping resolved to
  // nothing. The replacement goes through the real session builder, so it reads
  // CATEGORY_SCREEN_MAP and CATEGORY_EASIER_SCREEN as they are; it immediately
  // found ten dead mappings across every level, this one included.
  //
  // The lesson is the one this repo keeps relearning: a test that restates the
  // production data cannot check the production data.
});
