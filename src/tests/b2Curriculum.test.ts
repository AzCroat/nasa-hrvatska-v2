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

import { describe, it, expect, vi } from 'vitest';

// The lesson-day block at the bottom drives the REAL session builder.
vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'B2'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));

const { CURRICULUM, spineForLevel } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');

const { buildSessionActivities, GRAMMAR_STRUCTURE_CATEGORIES } =
  await import('../hooks/useDailySession');
const { writeCurriculumSpine } = await import('../lib/curriculumProgress');

type Entry = { id: string; level: string; order: number; prerequisites: string[] };
type CurriculumEntry = Entry & { objectives: string[]; title: string };
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
    // Practice programme, B2 tranche 1 (2026-08-29). All five were in
    // DELIBERATELY_UNMAPPED below for the honest reason, and B2 is where that
    // reason bit hardest: the drill that matched each lesson sat at C1 or C2 —
    // `isklonidba`, `gerunddrill`, `zelje`, `modalnost`, `prijedlozni` — and
    // CATEGORY_EASIER_SCREEN only routes DOWNWARD, so unlike A2 and B1 there
    // was nothing lower to fall back to. Authoring the B2 drill is the only way
    // a lesson leaves that list here.
    'i-declension': 'i-declension',
    'verbal-adverbs': 'verbal-adverbs',
    'negation-advanced': 'negation-advanced',
    'aspect-with-verbs': 'aspect-verbs',
    // The debt block (2026-08-30) — the last three B2 lessons, and the same
    // downward-only problem as the tranche above. `zelje` (C1) and
    // `naciniobveze` (C2) both carry categories claimed by their own lessons,
    // and `naciniobveze` was authored in the C2 block one commit earlier —
    // closing a level can create the collision that blocks a lower one.
    'wishes-regrets': 'wishes',
    'modal-nuance': 'modal-nuance',
    'prepositions-advanced': 'two-case-prepositions',
    // NOT mapped to `stupnjevanje` despite the close names: that drill builds
    // comparatives, which the A2 `comparatives-a2` lesson already owns via
    // `komparacija`. This lesson grades what is already said — sve + comparative,
    // the intensifier register, pre- meaning "too". Pairing the two would be the
    // wrong-drill mistake this list exists to prevent.
    'degrees-intensity': 'intensity',
    // The FUNCTIONAL block (2026-08-30): B2's whole second half. Each lesson is
    // a function PLUS a structure, and the structure is what the drill tests:
    //   argument-structure     the fixed `u tome što` frame, and Što se tiče
    //                          + genitive
    //   hedging-precision      two independent axes — how sure, and how much —
    //                          plus the conditional hedging with no hedge word
    //   abstract-topics        -ost nouns are i-declension, and ovisiti O
    //                          against odnositi se NA
    //   writing-registers      the passive/nominalization pair that makes
    //                          official Croatian look the way it does
    //   presentations          signposting every turn, and the conditional opener
    //   meetings-negotiation   Predlažem da + PRESENT, because the subject changes
    //   business-economy       dobit/gubitak, and gospodarstvo against ekonomija
    //   politics-society       Sabor, and `izbori` which has no singular
    //   small-talk-fluency     hesitating aloud instead of falling silent
    //   humour-irony           the `ma` particle, and understatement as praise
    //   language-history       the jat reflex, which turns a list into a rule
    //   literature-canon       what to read first, and how to read it
    //
    // No drill was reusable this time, and the reason is uniform rather than
    // varied: every plausible partner is BOTH gated above B2 and already
    // claimed by a C1/C2 lesson — `preciznost` by `precizno-nijansiranje`,
    // `register` by `razgovorni-stil`, `nominalization` by two lessons,
    // `idiomdrill` by `idioms-register`. Retagging any of them would take a
    // drill away from the lesson it was written for.
    'argument-structure': 'argument',
    'hedging-precision': 'hedging',
    'abstract-topics': 'abstract',
    'writing-registers': 'registers',
    presentations: 'presenting',
    'meetings-negotiation': 'meetings',
    'business-economy': 'business',
    'politics-society': 'politics',
    'small-talk-fluency': 'smalltalk',
    'humour-irony': 'humour',
    'language-history': 'language-history',
    'literature-canon': 'literature',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  // The DELIBERATELY_UNMAPPED list this file carried is EMPTY as of 2026-08-30
  // and the assertion is inverted, so a new B2 lesson has to arrive with its
  // drill. It held three lessons, each recorded as teaching "something with no
  // drill at any level" — a statement about the app rather than about the
  // lesson, and so always answerable by authoring the drill.
  //
  // Worth keeping from the note that stood here: `writing-registers` was never
  // ON that list, the second time that turned up (after `feelings-inner-life`
  // at B1). It was uncoupled all along without being recorded as a deliberate
  // omission. A list of judgements is not a census, absence from it never meant
  // a lesson was served, and the derived assertion below is what makes that
  // class of miss impossible.
  it('every B2 lesson in this level file is coupled to a drill', () => {
    const uncoupled = b2Lessons.filter((l) => !LESSON_TAUGHT_CATEGORY[l.id]).map((l) => l.id);
    expect(
      uncoupled,
      'a B2 lesson leads nowhere — author its drill, or record here why no honest pairing exists',
    ).toEqual([]);
  });

  it('the functional block did not take a drill from a C1 or C2 lesson', () => {
    // The alternative to authoring twelve banks was to retag existing ones, and
    // this pins why that was refused. Each of these categories is the ONLY
    // route its own lesson has; repointing one at a B2 lesson would have left
    // the higher lesson with nothing.
    const STILL_OWNED: Record<string, string> = {
      precision: 'precizno-nijansiranje',
      register: 'razgovorni-stil',
      idioms: 'idioms-register',
    };
    for (const [category, owner] of Object.entries(STILL_OWNED)) {
      expect(LESSON_TAUGHT_CATEGORY[owner], `${owner} lost ${category}`).toBe(category);
    }
  });
});

describe('a B2 lesson day still teaches STRUCTURE', () => {
  // The B2 leg of the audit that corrected A1 and B1 (2026-08-31). Since the
  // length contract closed, the grammar backstop yields on a lesson day, so the
  // coupled drill is the only structure that day contains.
  //
  // B2 had ten bare days — the largest block, and the one where most of them are
  // HONEST. Three were mis-grouped and moved (`intensity` and `politics` to
  // 'case', `meetings` to 'syntax'); the other seven are production, reading or
  // lexis, which is what a level whose descriptor is about register and fluency
  // should look like. Recorded individually rather than as a count, so a future
  // drill rewrite that adds structure to one of them shows up here.
  //
  // Method note: the item-share criterion from the B1 pass put four banks over
  // the bar, and reading them item by item rejected one. `presenting` is 11/24
  // form items — over the line by count — but its header calls the structure
  // "signposting" while the blanks are a grab-bag (bih, izlaganja, u tri
  // dijela, ste došli) rather than one structure being drilled. Counting finds
  // candidates; only reading decides.
  const LEXICAL_B2_LESSONS: Record<string, string> = {
    // Couples to `writing_guided`, the production screen. Written production by
    // definition — there is no drill here to reclassify.
    'formal-email': 'the coupled activity IS production (writing_guided)',
    // 11/24 form items but no single structure behind them; the lesson is
    // signposting a talk. Stays 'speaking'.
    presentations: 'signposting a talk; the form items share no structure',
    // 7/24, and the lesson is the phatic script of small talk.
    'small-talk-fluency': 'phatic script, spoken performance',
    // 6/24, 11 glosses — business vocabulary.
    'business-economy': 'business and economic vocabulary',
    // 2/24 — the lesson is what Croatians find funny and why it does not
    // translate. Culture, not structure.
    'humour-irony': 'humour is cultural, not structural',
    // 2/24 — the history of the standard language.
    'language-history': 'the history of the standard, a reading topic',
    // 6/24 and grouped 'reading' — the canon and how to talk about it.
    'literature-canon': 'a reading drill on the literary canon',
  };

  const bareLessonDays = (): string[] =>
    b2Lessons
      .filter((l) => {
        localStorage.clear();
        writeCurriculumSpine([
          {
            id: l.id,
            level: 'B2',
            order: 1,
            prerequisites: [],
            objectives: ['x'],
            title: l.id,
          } as CurriculumEntry,
        ]);
        return !buildSessionActivities('B2').some((a) =>
          GRAMMAR_STRUCTURE_CATEGORIES.has(a.category),
        );
      })
      .map((l) => l.id);

  it('every B2 lesson day contains structure, but for the recorded few', () => {
    const unexpected = bareLessonDays().filter((id) => !(id in LEXICAL_B2_LESSONS));
    expect(
      unexpected,
      `these B2 lesson days now contain NO grammar drill at all: ${unexpected.join(', ')}. ` +
        `Check the drill's SKILL_GROUP row against what its ITEMS test.`,
    ).toEqual([]);
  });

  it('and the recorded few still genuinely lack structure', () => {
    const bare = new Set(bareLessonDays());
    const ids = new Set(b2Lessons.map((l) => l.id));
    for (const [id, reason] of Object.entries(LEXICAL_B2_LESSONS)) {
      expect(ids, `${id} is exempted here but is not a B2 lesson any more`).toContain(id);
      expect(
        bare.has(id),
        `${id} is exempted ("${reason}") but its day now DOES contain grammar. Delete the entry.`,
      ).toBe(true);
    }
  });

  it('the exemption list stays at seven of thirty', () => {
    expect(Object.keys(LEXICAL_B2_LESSONS).length).toBe(7);
  });
});
