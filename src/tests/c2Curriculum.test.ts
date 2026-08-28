// src/tests/c2Curriculum.test.ts
//
// C2 IS A COMPLETE LEVEL (Wave 6 content, 2026-08-28) — and with it, so is the
// whole curriculum: 180 lessons, 30 per level.
//
// C2 had FOUR lessons: the pluperfect, the comma, rhetorical figures and the
// administrative register. Four good lessons, for the level a learner is meant
// to spend years inside.
//
// The gap was not "more grammar". The CEFR C2 descriptor says a learner can
// SUMMARISE INFORMATION FROM DIFFERENT SOURCES, RECONSTRUCT ARGUMENTS, and
// DIFFERENTIATE FINER SHADES OF MEANING — and none of those three had a lesson
// anywhere in the app. Nor did:
//
//   * the norm/usage distinction, which is what makes a C2 choice a choice;
//   * agreement with quantity subjects, the commonest advanced error there is;
//   * the negated imperative, which overrides the aspect rule learners are
//     taught and is one of the most audible foreign-speaker mistakes;
//   * the second conditional, so a learner could say "I would come" and not
//     "I would have come";
//   * four of the five functional styles Croatian linguistics itself names;
//   * and any way to read a Croatian text written before Gaj.
//
// Same contract as every level before it: pin SHAPE, not prose.

import { describe, it, expect } from 'vitest';

const { CURRICULUM, spineForLevel, CURRICULUM_LEVELS } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
type Lesson = { id: string; level: string; slides: { type: string }[] };

const c2Spine = spineForLevel('C2') as Entry[];
const c2Lessons = (LESSONS as Lesson[]).filter((l) => l.level === 'C2');
const orderOf = new Map(c2Spine.map((e) => [e.id, e.order]));

describe('C2 teaches the CEFR descriptors themselves', () => {
  // These four are the level definition, almost word for word, and not one of
  // them had a lesson before this wave.
  const DESCRIPTOR = [
    'sinteza-izvora', // summarise information from different sources
    'rekonstrukcija-argumenta', // reconstructing arguments and accounts
    'precizno-nijansiranje', // differentiating finer shades of meaning
    'spontani-govor', // expresses him/herself spontaneously
  ];

  it.each(DESCRIPTOR)('teaches %s', (id) => {
    expect(
      c2Lessons.some((l) => l.id === id),
      `C2 lost the descriptor lesson ${id}`,
    ).toBe(true);
    expect(orderOf.has(id), `${id} is not sequenced in the C2 spine`).toBe(true);
  });
});

describe('C2 covers the precision the level was missing', () => {
  const REQUIRED = [
    'norma-i-uzus',
    'pravopis-dvojbe',
    'sklonidba-iznimke',
    'brojevi-norma',
    'slaganje-suptilnosti',
    'padezne-suptilnosti',
    'glagolski-vid-granice',
    'kondicional-drugi',
    'glagolski-nacini',
  ];

  it.each(REQUIRED)('teaches %s', (id) => {
    expect(
      c2Lessons.some((l) => l.id === id),
      `C2 lost ${id}`,
    ).toBe(true);
  });

  it('opens on norm-vs-usage, which frames every later block', () => {
    // The hinge. Everything after it assumes the learner has stopped asking
    // "is this correct" and started asking "which correct form". Putting a
    // register or style lesson above it would teach choosing before
    // establishing that there is anything to choose between.
    expect(orderOf.get('norma-i-uzus')).toBe(1);
  });

  it('teaches quantity agreement, the commonest advanced error', () => {
    // "Mnogo ljudi su došli" — a neuter singular verb is required and English
    // agreement pulls the other way. No level had ever addressed it.
    expect(orderOf.has('slaganje-suptilnosti')).toBe(true);
  });

  it('teaches the negated imperative, which OVERRIDES the aspect rule', () => {
    // Ne zatvaraj, not ne zatvori — obligatory imperfective even when
    // forbidding a single completed act. Nothing had said so.
    expect(orderOf.has('glagolski-vid-granice')).toBe(true);
  });
});

describe('C2 covers the functional styles and the older library', () => {
  // Croatian linguistics names five functional styles. The level had one.
  const STYLES = [
    'administrativni-stil',
    'publicisticki-stil',
    'znanstveni-stil',
    'knjizevni-stil',
    'razgovorni-stil',
  ];

  it.each(STYLES)('teaches %s', (id) => {
    expect(
      c2Lessons.some((l) => l.id === id),
      `C2 lost the ${id} functional style`,
    ).toBe(true);
  });

  it('has all five functional styles, not one', () => {
    expect(STYLES.every((id) => orderOf.has(id))).toBe(true);
  });

  it('opens the pre-Gaj library', () => {
    // B2 gave the HISTORY of the standard. Nothing gave access to what was
    // written before it settled.
    expect(orderOf.has('stari-tekstovi')).toBe(true);
  });

  const DEPTH = ['frazeologija-dubinska', 'dijalekti-dubinski', 'jezik-i-drustvo'];

  it.each(DEPTH)('teaches %s', (id) => {
    expect(
      c2Lessons.some((l) => l.id === id),
      `C2 lost ${id}`,
    ).toBe(true);
  });
});

describe('the sequence does not put a lesson before what it needs', () => {
  const AFTER: [string, string][] = [
    // The precision block builds on the frame.
    ['pravopis-dvojbe', 'norma-i-uzus'],
    ['sklonidba-iznimke', 'norma-i-uzus'],
    ['slaganje-suptilnosti', 'sklonidba-iznimke'],
    // Mood: the second conditional before the survey of modality that uses it.
    ['glagolski-nacini', 'kondicional-drugi'],
    // Style: rhythm after the figures, wordplay after irony.
    ['ritam-recenice', 'stilske-figure'],
    ['humor-jezicni', 'ironija-podtekst'],
    // Synthesis chain — this is the CEFR descriptor in order.
    ['rekonstrukcija-argumenta', 'sinteza-izvora'],
    // Depth: the dialects before what a dialect choice signals.
    ['jezik-i-drustvo', 'dijalekti-dubinski'],
  ];

  it.each(AFTER)('%s comes after %s', (later, earlier) => {
    expect(orderOf.get(later)!, `${later} sits above ${earlier}`).toBeGreaterThan(
      orderOf.get(earlier)!,
    );
  });

  it('every same-level prerequisite is earlier in the spine', () => {
    const byId = new Map((CURRICULUM as Entry[]).map((e) => [e.id, e]));
    for (const e of c2Spine) {
      for (const p of e.prerequisites) {
        const pe = byId.get(p);
        if (!pe || pe.level !== 'C2') continue;
        expect(pe.order, `${e.id} requires later C2 lesson ${p}`).toBeLessThan(e.order);
      }
    }
  });
});

describe('every C2 lesson is a usable lesson', () => {
  it('reaches the 30-lesson target', () => {
    expect(c2Lessons.length).toBeGreaterThanOrEqual(30);
    expect(c2Spine.length).toBe(c2Lessons.length);
  });

  it('has enough slides to teach something', () => {
    for (const l of c2Lessons) {
      expect(l.slides.length, `${l.id} has only ${l.slides.length} slides`).toBeGreaterThanOrEqual(
        7,
      );
    }
  });

  it('checks understanding before it claims to have taught', () => {
    for (const l of c2Lessons) {
      expect(
        l.slides.some((s) => s.type === 'quiz'),
        `${l.id} never checks whether the learner followed it`,
      ).toBe(true);
    }
  });

  it('ends on the summary slide that records the completion', () => {
    for (const l of c2Lessons) {
      expect(l.slides[l.slides.length - 1].type, `${l.id} does not end on a summary`).toBe(
        'summary',
      );
    }
  });
});

describe('THE CURRICULUM IS COMPLETE', () => {
  // The programme target from the 2026-08-28 design: ~30 lessons per level,
  // ~180 total. This is the assertion that says it landed — and the one that
  // fails if a later change quietly drops a level below the line.
  it('every CEFR level has at least 30 lessons', () => {
    for (const level of CURRICULUM_LEVELS as string[]) {
      const n = (LESSONS as Lesson[]).filter((l) => l.level === level).length;
      expect(n, `${level} has only ${n} lessons`).toBeGreaterThanOrEqual(30);
    }
  });

  it('the spine and the lesson bodies agree exactly, at every level', () => {
    const lessonIds = new Set((LESSONS as Lesson[]).map((l) => l.id));
    const spineIds = new Set((CURRICULUM as Entry[]).map((e) => e.id));
    expect(
      [...spineIds].filter((id) => !lessonIds.has(id)),
      'spine entries with no lesson',
    ).toEqual([]);
    expect(
      [...lessonIds].filter((id) => !spineIds.has(id)),
      'lessons missing from the spine',
    ).toEqual([]);
  });

  it('no lesson is sequenced at a level other than its own', () => {
    const levelOf = new Map((LESSONS as Lesson[]).map((l) => [l.id, l.level]));
    for (const e of CURRICULUM as Entry[]) {
      expect(levelOf.get(e.id), `${e.id} is spined at ${e.level}`).toBe(e.level);
    }
  });

  it('orders within a level are unique and contiguous from 1', () => {
    for (const level of CURRICULUM_LEVELS as string[]) {
      const orders = (spineForLevel(level) as Entry[]).map((e) => e.order).sort((a, b) => a - b);
      expect(new Set(orders).size, `${level} has duplicate orders`).toBe(orders.length);
      expect(orders[0], `${level} does not start at 1`).toBe(1);
      expect(orders[orders.length - 1], `${level} has a gap in its ordering`).toBe(orders.length);
    }
  });
});

describe('teach → practice coupling stays HONEST at C2', () => {
  // Resolution is asserted centrally by curriculumCouplingResolves.test.ts,
  // which goes through the real session builder. This file pins only WHICH
  // category each lesson claims — the editorial decision, not the plumbing.
  const EXPECTED: Record<string, string> = {
    'kondicional-drugi': 'conditional',
    'glagolski-vid-granice': 'aspect-negation',
    'razgovorni-stil': 'register',
    'sinteza-izvora': 'writing',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  const DELIBERATELY_UNMAPPED = [
    'norma-i-uzus',
    'pravopis-dvojbe',
    'sklonidba-iznimke',
    'brojevi-norma',
    'slaganje-suptilnosti',
    // The C2 twin of C1's verb-government: it ranges over every case, so no
    // single case drill practises it, and pairing it with one would
    // misrepresent both the lesson and the drill.
    'padezne-suptilnosti',
    'glagolski-nacini',
    'ritam-recenice',
    'ironija-podtekst',
    'humor-jezicni',
    'publicisticki-stil',
    'znanstveni-stil',
    'knjizevni-stil',
    'stari-tekstovi',
    'rekonstrukcija-argumenta',
    // The near miss worth recording so nobody re-derives it: the `preciznost`
    // drill IS precision of expression and is exactly this lesson's subject,
    // but its POOL ENTRY is tagged category 'idioms', which routes to the idiom
    // drill. Mapping it would resolve — to the wrong exercise. Retagging the
    // pool entry changes what 'idioms' means for every level, so it is its own
    // decision rather than a tidy-up.
    'precizno-nijansiranje',
    'spontani-govor',
    'prevodjenje-strucno',
    'uredjivanje-teksta',
    'frazeologija-dubinska',
    'dijalekti-dubinski',
    'jezik-i-drustvo',
  ];

  it.each(DELIBERATELY_UNMAPPED)('%s is left unmapped rather than mispaired', (id) => {
    expect(LESSON_TAUGHT_CATEGORY[id]).toBeUndefined();
  });
});
