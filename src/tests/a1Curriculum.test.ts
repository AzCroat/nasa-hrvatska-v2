// src/tests/a1Curriculum.test.ts
//
// A1 IS A COMPLETE LEVEL (Wave 1 content, 2026-08-28).
//
// The mechanism wave gave the app a spine and put a lesson first in every
// session. It could not fix what the spine was pointing AT: A1 had nine
// lessons, and they stopped one step short of every structure a beginner needs
// to say anything. The alphabet, gender, verbs and the IDEA of a case — then
// nothing. No plural, so a learner could name one thing and not two. No
// negation. No accusative, so nothing could be eaten, bought or read. No
// locative, so nobody could say where they were. No possessives, no adjectives
// — although the `gender` lesson explicitly promised agreement was coming.
//
// These assertions are about SHAPE, not word count. A future edit can rewrite
// any lesson it likes; what it must not do is quietly remove a structure the
// level depends on, or reorder the level so a case lesson lands before the only
// explanation of what a case is.

import { describe, it, expect } from 'vitest';

const { CURRICULUM, spineForLevel } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
type Lesson = { id: string; level: string; slides: { type: string }[] };

const a1Spine = spineForLevel('A1') as Entry[];
const a1Lessons = (LESSONS as Lesson[]).filter((l) => l.level === 'A1');
const orderOf = new Map(a1Spine.map((e) => [e.id, e.order]));

describe('A1 covers the structures a beginner cannot do without', () => {
  // Each of these was ABSENT before 2026-08-28. Named individually rather than
  // counted, because "30 lessons" says nothing about whether the right 30.
  const REQUIRED = [
    'negation',
    'adjectives-basic',
    'possessives',
    'accusative-intro',
    'locative-intro',
    'genitive-intro',
    'vocative-intro',
    'imperative-basic',
    'modals-basic',
    'reflexive-verbs',
  ];

  it.each(REQUIRED)('teaches %s', (id) => {
    expect(
      a1Lessons.some((l) => l.id === id),
      `A1 lost the lesson that teaches ${id}`,
    ).toBe(true);
    expect(orderOf.has(id), `${id} is not sequenced in the A1 spine`).toBe(true);
  });

  it('reaches the 30-lesson target the curriculum design set for every level', () => {
    expect(a1Lessons.length).toBeGreaterThanOrEqual(30);
    expect(a1Spine.length).toBe(a1Lessons.length);
  });
});

describe('the case lessons come AFTER the explanation of what a case is', () => {
  // The owner directive of 2026-08-18 moved the `cases` primer down to A1
  // because the app's only "what IS a case" explanation must never sit above
  // the drills that need it. The same logic applies inside the level: four
  // lessons now depend on that primer, and a reorder that floated one of them
  // above it would recreate the finding without touching a word of content.
  const DEPENDENTS = ['accusative-intro', 'locative-intro', 'genitive-intro', 'vocative-intro'];

  it.each(DEPENDENTS)('%s is sequenced after `cases`', (id) => {
    const cases = orderOf.get('cases');
    expect(cases, 'the `cases` primer left A1').toBeTypeOf('number');
    expect(orderOf.get(id)!, `${id} sits above the cases primer`).toBeGreaterThan(cases!);
  });

  it('every case lesson names a prerequisite that eventually reaches `cases`', () => {
    const byId = new Map((CURRICULUM as Entry[]).map((e) => [e.id, e]));
    const reaches = (id: string, seen = new Set<string>()): boolean => {
      if (id === 'cases') return true;
      if (seen.has(id)) return false;
      seen.add(id);
      return (byId.get(id)?.prerequisites ?? []).some((p) => reaches(p, seen));
    };
    for (const id of DEPENDENTS) {
      expect(reaches(id), `${id} does not depend on the cases primer, even indirectly`).toBe(true);
    }
  });
});

describe('every A1 lesson is a usable lesson', () => {
  it('has enough slides to teach something', () => {
    // Not a quality measure — a floor. A three-slide stub is a placeholder, and
    // a placeholder in the P0 teaching slot is worse than the rotation it
    // replaced, because it looks like teaching.
    for (const l of a1Lessons) {
      expect(l.slides.length, `${l.id} has only ${l.slides.length} slides`).toBeGreaterThanOrEqual(
        7,
      );
    }
  });

  it('checks understanding before it claims to have taught', () => {
    for (const l of a1Lessons) {
      expect(
        l.slides.some((s) => s.type === 'quiz'),
        `${l.id} never checks whether the learner followed it`,
      ).toBe(true);
    }
  });

  it('ends on the summary slide that records the completion', () => {
    // The summary is where markLessonComplete fires — the only point the lesson
    // was demonstrably read rather than merely opened.
    for (const l of a1Lessons) {
      expect(l.slides[l.slides.length - 1].type, `${l.id} does not end on a summary`).toBe(
        'summary',
      );
    }
  });
});

describe('teach → practice coupling stays HONEST at A1', () => {
  // The rule this pins is the restraint, not the coverage. A mapping is only
  // added when the drill genuinely practises what the lesson taught; a lesson
  // on family vocabulary paired with a topic-blind vocab game would claim a
  // connection the app cannot deliver, and a wrong drill right after a lesson
  // is worse than no drill.
  const EXPECTED: Record<string, string> = {
    'accusative-intro': 'accusative',
    'locative-intro': 'dative-locative',
    'genitive-intro': 'genitive',
    'vocative-intro': 'vocative',
    'modals-basic': 'present-tense',
    'reflexive-verbs': 'present-tense',
    'shopping-prices': 'numerals',
    // Mapped 2026-08-29 (practice programme wave 1): `pluraldrill` was authored
    // FOR this lesson. It was in DELIBERATELY_UNMAPPED until then for the
    // honest reason — no plural drill existed at any level.
    'plural-nouns': 'plural',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  const DELIBERATELY_UNMAPPED = [
    'negation',
    'adjectives-basic',
    'possessives',
    'demonstratives',
    'imperative-basic',
    'likes-preferences',
    'family-people',
    'countries-languages',
    'food-drink',
    'directions-town',
    'weather-seasons',
  ];

  it.each(DELIBERATELY_UNMAPPED)('%s is left unmapped rather than mispaired', (id) => {
    // If a real drill for one of these ever ships, move it into EXPECTED — that
    // is the intended way to remove an entry from this list, and the failure
    // here is the reminder to do it deliberately.
    expect(LESSON_TAUGHT_CATEGORY[id]).toBeUndefined();
  });
});
