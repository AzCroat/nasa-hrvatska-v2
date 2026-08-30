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
const { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } = await import('../lib/categoryRoutes');
const { CEFR_EXERCISE_POOL } = await import('../lib/sessionPools');

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
    // Practice programme, A2 tranche 1 (2026-08-29). Every one of these was in
    // DELIBERATELY_UNMAPPED below for the honest reason — the drill the lesson
    // needed sat one or two levels above it and could never resolve. Authoring
    // the A2 drill is the only way a lesson leaves that list.
    svoj: 'reflexive-possessive',
    'plural-cases': 'plural-cases',
    quantity: 'quantity',
    'comparatives-a2': 'comparison',
    // The one this file predicted: "If a clitic drill ever ships at A2, move it
    // into EXPECTED above." `objekt` is that drill, wired as the EASIER route
    // for clitics so the B2 `clitic` stays the primary. See
    // practiceProgrammeDrills.test.ts, which holds both halves.
    'object-pronouns': 'clitics',
    // The TOPICAL block (2026-08-29), the ten A2 lessons whose subject reads as
    // a topic. They come off the unmapped list for the same reason the A1
    // topical block did — the lesson is a topic PLUS a structure, and the
    // structure is what a drill can honestly test:
    //   house-home           u/na + locative against the genitive position
    //                        words; the floor as an ordinal in the locative
    //   body-health          boljeti, where the body part is the SUBJECT and
    //                        the verb counts it (boli glava, bole leđa)
    //   clothes-appearance   nositi + accusative, and the garments that have
    //                        no singular
    //   describing-people    Kakav? for character against Koji? for which one
    //   work-jobs            the female job form as the standard form
    //   school-studies       učiti / studirati / predavati, and učenik against
    //                        student
    //   hobbies-free-time    igrati / svirati / igrati se, and the instrumental
    //                        of habitual time
    //   travel-transport     the bare instrumental of means against s + company
    //   plans-invitations    the present tense doing an arranged future
    //   celebrations-holidays sretan agreeing with the occasion named
    //
    // NONE of these routes to the same-named REFERENCE screen already in the
    // pool. `clothes`, `bodydesc`, `professions`, `countries` and `lifeevents`
    // exist and look like ready-made partners; all five are browse lists that
    // auto-complete on view and never reach recordScreenPractised, so a mapping
    // to one would resolve and then never clear — the `idioms` dead end.
    'house-home': 'home',
    'body-health': 'health',
    'clothes-appearance': 'clothing',
    'describing-people': 'appearance',
    'work-jobs': 'jobs',
    'school-studies': 'education',
    'hobbies-free-time': 'hobbies',
    'travel-transport': 'travel',
    'plans-invitations': 'invitations',
    'celebrations-holidays': 'celebrations',
    // The debt block (2026-08-30). These four were the last of the A2 list, and
    // they came off it exactly the way the note below the list said they would:
    // a drill authored for each lesson's actual subject. Nothing here is a
    // retag — each carries a new pool-only category, because the nearest
    // existing drill was in every case both gated above A2 and already spoken
    // for. `relative-koji` is the sharpest instance: `relpron` IS a relative
    // pronoun drill, but it is B1 and it carries `subordination`, whose easier
    // route is pinned TO `relpron` by b1Curriculum for three B2 lessons.
    adverbs: 'adverbs',
    conjunctions: 'conjunctions',
    'relative-koji': 'relative-koji',
    indefinites: 'indefinites',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  it('object-pronouns resolves at the level it is taught, not at B2', () => {
    // The trap this replaces: `clitic` is B2, so mapping the A2 lesson to the
    // clitics category alone would queue something an A2 learner cannot open —
    // the `gender → vocab-a2` failure. The fix is NOT to point the category at
    // an A2 screen (that would take the B2 drill away from B2 learners) but to
    // give it an easier route, which is what CATEGORY_EASIER_SCREEN is for.
    expect(CATEGORY_SCREEN_MAP['clitics']).toBe('clitic');
    expect(CATEGORY_EASIER_SCREEN['clitics']).toBe('objekt');
  });

  // The DELIBERATELY_UNMAPPED list this file carried is EMPTY as of 2026-08-30
  // and the assertion is inverted. It held four lessons — adverbs,
  // conjunctions, relative-koji, indefinites — each recorded as "a structure
  // with no drill anywhere in the app, at any level ... not a judgement that
  // pairing them would be dishonest". That distinction was the correct one, and
  // it is why they left the list by having drills authored rather than by
  // anyone relaxing the assertion.
  it('every A2 lesson in this level file is coupled to a drill', () => {
    const uncoupled = a2Lessons.filter((l) => !LESSON_TAUGHT_CATEGORY[l.id]).map((l) => l.id);
    expect(
      uncoupled,
      'an A2 lesson leads nowhere — author its drill, or record here why no honest pairing exists',
    ).toEqual([]);
  });

  it('does not couple a lesson to a reference screen', () => {
    // The A2-specific trap, and the reason all ten topical drills are authored
    // rather than five of them reusing a screen that was already there.
    // `clothes`, `bodydesc`, `professions`, `countries` and `lifeevents` are
    // pool entries with `reference: true` — browse lists that auto-complete on
    // view, with no graded finish and so no path to recordScreenPractised. A
    // coupling routed at one resolves, serves, and then squats its slot for the
    // full 14-day TTL. That is the live `idioms` defect, and this asserts the
    // shape of it cannot be reintroduced here.
    //
    // On its first run this found ONE live case, and it is the one already on
    // record: `idioms`. That is worth noting rather than tidying away — the
    // idioms dead end was found in August by walking the import graph
    // (couplingClearingPath), and this check reaches the identical conclusion
    // from the POOL FLAG alone, without reading a line of component source. Two
    // independent detectors agreeing is the reason it is exempted here by name
    // and with a cross-reference, not silenced.
    const KNOWN_REFERENCE_ROUTE: Record<string, string> = {
      idioms:
        'IdiomsScreen is a reference list with no quiz — see KNOWN_NO_CLEARING_PATH ' +
        'in couplingClearingPath.test.ts. Needs a C1 idiom drill; frazeologija is C2.',
    };
    const referenceScreens = new Set(
      CEFR_EXERCISE_POOL.filter((e) => e.reference).map((e) => e.screen),
    );
    expect(referenceScreens.has('clothes'), 'the fixture stopped being true').toBe(true);
    for (const category of Object.values(LESSON_TAUGHT_CATEGORY)) {
      const screen = CATEGORY_SCREEN_MAP[category] ?? CATEGORY_EASIER_SCREEN[category];
      if (!screen || screen in KNOWN_REFERENCE_ROUTE) continue;
      expect(
        referenceScreens.has(screen),
        `${category} routes to ${screen}, which is a reference screen and cannot clear the queue`,
      ).toBe(false);
    }
    // The exemption cannot go stale: if idioms ever stops being a reference
    // entry, this fails and the entry has to be removed deliberately.
    for (const screen of Object.keys(KNOWN_REFERENCE_ROUTE)) {
      expect(
        referenceScreens.has(screen),
        `${screen} is exempted but is no longer a reference screen — drop the exemption`,
      ).toBe(true);
    }
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
