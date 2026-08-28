// src/tests/c1Curriculum.test.ts
//
// C1 IS A COMPLETE LEVEL (Wave 5 content, 2026-08-28).
//
// C1 had EIGHT lessons. The level descriptor is "can use the language flexibly
// and effectively for social, academic and professional purposes" and the level
// contained nothing academic and nothing professional at all. Absent from it:
//
//   * VERB GOVERNMENT — which case each verb demands. This is the single most
//     common source of error at this level and no lesson anywhere named it;
//   * aspect NUANCE, so aspect was taught as a rule (perfective = completed)
//     and never as the choice it actually is when both forms are grammatical;
//   * condensation and the passive CHOICES — the two things that separate
//     written Croatian from transcribed speech;
//   * collocation, which is what "fluent" mostly means in practice;
//   * discourse particles: pa, ma, baš, valjda, zar. A learner could reach C1
//     without ever being told what any of them do;
//   * accent and prosody, so nothing had ever explained why a learner's
//     grammatically perfect sentence still sounds foreign;
//   * and every professional register — academic, legal, technical, ceremonial.
//
// Same contract as A1 through B2: pin SHAPE, not prose.

import { describe, it, expect } from 'vitest';

const { CURRICULUM, spineForLevel } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
type Lesson = { id: string; level: string; slides: { type: string }[] };

const c1Spine = spineForLevel('C1') as Entry[];
const c1Lessons = (LESSONS as Lesson[]).filter((l) => l.level === 'C1');
const orderOf = new Map(c1Spine.map((e) => [e.id, e.order]));

describe('C1 covers the structures the level was missing', () => {
  const REQUIRED = [
    'verb-government',
    'aspect-nuance',
    'condensation',
    'clause-types',
    'comparison-advanced',
    'passive-choices',
    'diminutives-augmentatives',
    'collocations',
    'discourse-particles',
    'accent-prosody',
  ];

  it.each(REQUIRED)('teaches %s', (id) => {
    expect(
      c1Lessons.some((l) => l.id === id),
      `C1 lost the lesson that teaches ${id}`,
    ).toBe(true);
    expect(orderOf.has(id), `${id} is not sequenced in the C1 spine`).toBe(true);
  });

  it('teaches verb government, which NO level had ever taught', () => {
    // Every level taught cases from the NOUN side — this ending means that
    // case. Nothing anywhere said that `sjećati se` takes the genitive and
    // `radovati se` the dative, which is where C1 learners actually go wrong.
    expect(orderOf.has('verb-government')).toBe(true);
  });

  it('keeps the academic and professional registers, which ARE the descriptor', () => {
    // "Can use the language flexibly and effectively for social, ACADEMIC and
    // PROFESSIONAL purposes" is the CEFR wording for C1. The level had nothing
    // for either before 2026-08-28.
    for (const id of ['academic-writing', 'formal-speech', 'law-administration']) {
      expect(orderOf.has(id), `C1 lost ${id}`).toBe(true);
    }
  });

  it('reaches the 30-lesson target', () => {
    expect(c1Lessons.length).toBeGreaterThanOrEqual(30);
    expect(c1Spine.length).toBe(c1Lessons.length);
  });
});

describe('C1 teaches use, not only structure', () => {
  const PROFESSIONAL = [
    'summarising-paraphrase',
    'academic-writing',
    'debate-persuasion',
    'formal-speech',
    'translation-pitfalls',
    'proofreading-editing',
  ];

  it.each(PROFESSIONAL)('teaches %s', (id) => {
    expect(
      c1Lessons.some((l) => l.id === id),
      `C1 lost ${id}`,
    ).toBe(true);
  });

  const DOMAIN = [
    'media-analysis',
    'law-administration',
    'science-technology',
    'arts-culture',
    'regional-varieties',
    'diaspora-identity',
  ];

  it.each(DOMAIN)('teaches %s', (id) => {
    expect(
      c1Lessons.some((l) => l.id === id),
      `C1 lost ${id}`,
    ).toBe(true);
  });

  it('keeps a functional share — C1 is not a grammar level', () => {
    // Half the level is use rather than form. A C1 learner who only ever met
    // more grammar would have no reason to believe the level had moved on.
    const functional = [...PROFESSIONAL, ...DOMAIN];
    expect(functional.length / c1Lessons.length).toBeGreaterThanOrEqual(0.35);
  });
});

describe('the sequence does not put a lesson before what it needs', () => {
  const AFTER: [string, string][] = [
    // The hinge: condensation is what the professional block is built out of.
    ['condensation', 'verbal-nouns'],
    ['summarising-paraphrase', 'condensation'],
    ['academic-writing', 'summarising-paraphrase'],
    ['proofreading-editing', 'academic-writing'],
    // Word formation before the things that are word formation applied.
    ['diminutives-augmentatives', 'tvorba-rijeci'],
    ['science-technology', 'tvorba-rijeci'],
    ['collocations', 'tvorba-rijeci'],
    ['translation-pitfalls', 'collocations'],
    // Argument machinery.
    ['debate-persuasion', 'discourse-particles'],
    ['formal-speech', 'debate-persuasion'],
    // Passive choices need the participle the verbal-noun lesson builds.
    ['passive-choices', 'verbal-nouns'],
    ['law-administration', 'passive-choices'],
    // Clause inventory before reading long sentences for what they hide.
    ['media-analysis', 'clause-types'],
    // Prosody before the varieties that differ mostly in prosody.
    ['regional-varieties', 'accent-prosody'],
    ['language-identity', 'regional-varieties'],
    ['diaspora-identity', 'language-identity'],
    // Register before the lesson that judges register.
    ['arts-culture', 'idioms-register'],
  ];

  it.each(AFTER)('%s comes after %s', (later, earlier) => {
    expect(orderOf.get(later)!, `${later} sits above ${earlier}`).toBeGreaterThan(
      orderOf.get(earlier)!,
    );
  });

  it('every same-level prerequisite is earlier in the spine', () => {
    const byId = new Map((CURRICULUM as Entry[]).map((e) => [e.id, e]));
    for (const e of c1Spine) {
      for (const p of e.prerequisites) {
        const pe = byId.get(p);
        if (!pe || pe.level !== 'C1') continue;
        expect(pe.order, `${e.id} requires later C1 lesson ${p}`).toBeLessThan(e.order);
      }
    }
  });
});

describe('every C1 lesson is a usable lesson', () => {
  it('has enough slides to teach something', () => {
    for (const l of c1Lessons) {
      expect(l.slides.length, `${l.id} has only ${l.slides.length} slides`).toBeGreaterThanOrEqual(
        7,
      );
    }
  });

  it('checks understanding before it claims to have taught', () => {
    for (const l of c1Lessons) {
      expect(
        l.slides.some((s) => s.type === 'quiz'),
        `${l.id} never checks whether the learner followed it`,
      ).toBe(true);
    }
  });

  it('ends on the summary slide that records the completion', () => {
    for (const l of c1Lessons) {
      expect(l.slides[l.slides.length - 1].type, `${l.id} does not end on a summary`).toBe(
        'summary',
      );
    }
  });
});

describe('teach → practice coupling stays HONEST at C1', () => {
  // Resolution is asserted centrally by curriculumCouplingResolves.test.ts,
  // which goes through the real session builder. This file pins only WHICH
  // category each lesson claims — the editorial decision, not the plumbing.
  const EXPECTED: Record<string, string> = {
    'aspect-nuance': 'aspect-perfective',
    condensation: 'nominalization',
    'clause-types': 'subordination',
    'passive-choices': 'passive',
    'academic-writing': 'writing',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  const DELIBERATELY_UNMAPPED = [
    // The one worth explaining, because the obvious mapping LOOKS available and
    // is not. `RekcijaDrill` exists in the pool and is exactly this lesson's
    // subject — but its pool entry is tagged `category: 'dative-locative'`,
    // which routes to `locdrill`. Mapping verb-government to that category
    // would hand a learner the locative drill after a lesson covering six
    // cases. Retagging the pool entry would change what 'dative-locative'
    // means for the adaptive scheduler at every level, which is its own
    // decision and not a tidy-up. Unmapped until then.
    'verb-government',
    // `discourse-particles` looks mappable too: a C1 `discourse` drill sits in
    // the pool. It drills CONNECTORS (stoga, međutim, unatoč tome) — clause
    // joiners — while the lesson teaches attitude particles (pa, ma, baš,
    // valjda, zar). Adjacent, not the same, so no mapping. Both drills stay
    // reachable through the P3 CEFR fill, which walks the pool directly.
    'diminutives-augmentatives',
    'comparison-advanced',
    'collocations',
    'discourse-particles',
    'accent-prosody',
    'summarising-paraphrase',
    'debate-persuasion',
    'formal-speech',
    'translation-pitfalls',
    'proofreading-editing',
    'media-analysis',
    'law-administration',
    'science-technology',
    'arts-culture',
    'regional-varieties',
    'diaspora-identity',
  ];

  it.each(DELIBERATELY_UNMAPPED)('%s is left unmapped rather than mispaired', (id) => {
    expect(LESSON_TAUGHT_CATEGORY[id]).toBeUndefined();
  });
});
