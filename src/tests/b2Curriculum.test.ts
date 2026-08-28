// src/tests/b2Curriculum.test.ts
//
// B2 IS A COMPLETE LEVEL (Wave 4 content, 2026-08-28).
//
// B2 had SIX lessons — the thinnest level in the app after C2, and the one a
// learner spends longest inside. Absent from it:
//
//   * unreal conditions, so the level had the conditional MOOD but no way to
//     say "if I had known", which is most of what the mood exists for;
//   * verbal adverbs and participial adjectives — two of the three
//     constructions that make written Croatian look written;
//   * secondary imperfectives, so aspect was taught in one direction only;
//   * the entire i-DECLENSION. stvar, noć, ljubav, riječ and misao are among
//     the most common nouns in the language and no level had ever taught how
//     they decline;
//   * and anything for ARGUMENT, though "giving the advantages and
//     disadvantages of various options" is the level descriptor itself.
//
// Same contract as A1, A2 and B1: pin SHAPE, not prose.

import { describe, it, expect } from 'vitest';

const { CURRICULUM, spineForLevel } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
type Lesson = { id: string; level: string; slides: { type: string }[] };

const b2Spine = spineForLevel('B2') as Entry[];
const b2Lessons = (LESSONS as Lesson[]).filter((l) => l.level === 'B2');
const orderOf = new Map(b2Spine.map((e) => [e.id, e.order]));

describe('B2 covers the structures the level was missing', () => {
  const REQUIRED = [
    'i-declension',
    'aspect-suffixes',
    'aspect-with-verbs',
    'participial-adjectives',
    'verbal-adverbs',
    'unreal-conditions',
    'wishes-regrets',
    'modal-nuance',
    'prepositions-advanced',
    'concession-contrast',
    'degrees-intensity',
    'negation-advanced',
  ];

  it.each(REQUIRED)('teaches %s', (id) => {
    expect(
      b2Lessons.some((l) => l.id === id),
      `B2 lost the lesson that teaches ${id}`,
    ).toBe(true);
    expect(orderOf.has(id), `${id} is not sequenced in the B2 spine`).toBe(true);
  });

  it('keeps argument-structure, which IS the level descriptor', () => {
    // "Can explain a viewpoint on a topical issue giving the advantages and
    // disadvantages of various options" is the CEFR wording for B2. The level
    // had nothing for it before 2026-08-28.
    expect(orderOf.has('argument-structure')).toBe(true);
  });

  it('teaches the i-declension, which NO level had ever taught', () => {
    // A1 taught that a consonant ending means masculine. That rule is wrong
    // about stvar, noć, ljubav, riječ and every -ost noun, and until this wave
    // nothing anywhere corrected it.
    expect(orderOf.has('i-declension')).toBe(true);
  });

  it('reaches the 30-lesson target', () => {
    expect(b2Lessons.length).toBeGreaterThanOrEqual(30);
    expect(b2Spine.length).toBe(b2Lessons.length);
  });
});

describe('B2 teaches discourse, not only grammar', () => {
  const DISCOURSE = [
    'argument-structure',
    'hedging-precision',
    'formal-email',
    'presentations',
    'meetings-negotiation',
    'small-talk-fluency',
    'humour-irony',
  ];

  it.each(DISCOURSE)('teaches %s', (id) => {
    expect(
      b2Lessons.some((l) => l.id === id),
      `B2 lost ${id}`,
    ).toBe(true);
  });

  const TOPICAL = [
    'abstract-topics',
    'business-economy',
    'politics-society',
    'language-history',
    'literature-canon',
  ];

  it.each(TOPICAL)('teaches %s', (id) => {
    expect(
      b2Lessons.some((l) => l.id === id),
      `B2 lost ${id}`,
    ).toBe(true);
  });
});

describe('the sequence does not put a lesson before what it needs', () => {
  const AFTER: [string, string][] = [
    // The conditional chain.
    ['unreal-conditions', 'conditional'],
    ['wishes-regrets', 'unreal-conditions'],
    // Participles are the ingredient the verbal adverbs and passive build on.
    ['verbal-adverbs', 'participial-adjectives'],
    // Aspect: suffixes before the frames that choose between aspects.
    ['aspect-with-verbs', 'aspect-suffixes'],
    // Argument machinery before the things that use it.
    ['concession-contrast', 'complex-sentences'],
    ['argument-structure', 'concession-contrast'],
    ['hedging-precision', 'argument-structure'],
    ['presentations', 'argument-structure'],
    ['meetings-negotiation', 'presentations'],
    ['formal-email', 'writing-registers'],
    // The abstract-noun lesson leans on the i-declension, since every -ost
    // noun belongs to that class — which is why i-declension is second.
    ['abstract-topics', 'i-declension'],
    ['prepositions-advanced', 'i-declension'],
  ];

  it.each(AFTER)('%s comes after %s', (later, earlier) => {
    expect(orderOf.get(later)!, `${later} sits above ${earlier}`).toBeGreaterThan(
      orderOf.get(earlier)!,
    );
  });

  it('every same-level prerequisite is earlier in the spine', () => {
    const byId = new Map((CURRICULUM as Entry[]).map((e) => [e.id, e]));
    for (const e of b2Spine) {
      for (const p of e.prerequisites) {
        const pe = byId.get(p);
        if (!pe || pe.level !== 'B2') continue;
        expect(pe.order, `${e.id} requires later B2 lesson ${p}`).toBeLessThan(e.order);
      }
    }
  });
});

describe('every B2 lesson is a usable lesson', () => {
  it('has enough slides to teach something', () => {
    for (const l of b2Lessons) {
      expect(l.slides.length, `${l.id} has only ${l.slides.length} slides`).toBeGreaterThanOrEqual(
        7,
      );
    }
  });

  it('checks understanding before it claims to have taught', () => {
    for (const l of b2Lessons) {
      expect(
        l.slides.some((s) => s.type === 'quiz'),
        `${l.id} never checks whether the learner followed it`,
      ).toBe(true);
    }
  });

  it('ends on the summary slide that records the completion', () => {
    for (const l of b2Lessons) {
      expect(l.slides[l.slides.length - 1].type, `${l.id} does not end on a summary`).toBe(
        'summary',
      );
    }
  });
});

describe('teach → practice coupling stays HONEST at B2', () => {
  // Resolution is asserted centrally by curriculumCouplingResolves.test.ts,
  // which goes through the real session builder. This file pins only WHICH
  // category each lesson claims — the editorial decision, not the plumbing.
  const EXPECTED: Record<string, string> = {
    'aspect-suffixes': 'aspect-imperfective',
    'participial-adjectives': 'passive',
    'concession-contrast': 'subordination',
    'unreal-conditions': 'conditional',
    'formal-email': 'writing',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  const DELIBERATELY_UNMAPPED = [
    'i-declension',
    'aspect-with-verbs',
    'verbal-adverbs',
    'wishes-regrets',
    'modal-nuance',
    'prepositions-advanced',
    'degrees-intensity',
    'negation-advanced',
    'argument-structure',
    'hedging-precision',
    'presentations',
    'meetings-negotiation',
    'small-talk-fluency',
    'humour-irony',
    'abstract-topics',
    'business-economy',
    'politics-society',
    'language-history',
    'literature-canon',
  ];

  it.each(DELIBERATELY_UNMAPPED)('%s is left unmapped rather than mispaired', (id) => {
    expect(LESSON_TAUGHT_CATEGORY[id]).toBeUndefined();
  });
});
