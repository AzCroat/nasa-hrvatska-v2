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
    'accusative-intro',
    'locative-intro',
    'genitive-intro',
    'vocative-intro',
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
    // A1 tranche 2, same story: each of these was unmapped because no drill
    // taught it, and each now has one authored for it. The conservative
    // non-mapping was correct while the drill did not exist; building the drill
    // is the only honest way a lesson leaves that list. (`adjectives-basic` and
    // `basic-questions` are the two CLAUDE.md named explicitly — the first is
    // now mapped, the second is still waiting for its drill.)
    negation: 'negation',
    'adjectives-basic': 'adjectives',
    demonstratives: 'demonstratives',
    'imati-nemati': 'having',
    'imperative-basic': 'imperative',
    // Not a new drill: `possess` already existed at A1 and already drilled
    // moj/moja/moje agreement. It was tagged 'nominative', so the lesson could
    // not be coupled to the drill written for it. Retagged 2026-08-29.
    possessives: 'possessives',
    // A1 tranche 3 (2026-08-29): the last four A1 lessons whose subject is a
    // RULE rather than a topic. `basic-questions` is the second of the two
    // lessons CLAUDE.md named explicitly as unmapped for want of a drill, so
    // both are now served. `time-calendar` did not get the existing `datumi`
    // drill — that one is C1 and is about declining ordinals, which is a
    // different skill from reading a clock.
    'basic-questions': 'questions',
    'prepositions-place': 'place-prepositions',
    'time-calendar': 'time',
    'greetings-farewells': 'greetings',
    // The TOPICAL block (2026-08-29). These six were the longest-standing
    // entries in DELIBERATELY_UNMAPPED below, and the reason recorded there was
    // sound at the time: the only partner on offer was a topic-blind vocabulary
    // game, and pairing `food-drink` with a round of random nouns would have
    // been exactly the wrong pairing this list exists to prevent.
    //
    // What changed is the observation that the LESSONS are not topic-blind
    // either. Each is a topic PLUS a structure, and the structure is what a
    // drill can honestly test:
    //   family-people       irregular plurals taking plural verbs; possessive
    //                       agreement with the RELATIVE, not the speaker
    //   countries-languages the country/nationality/language triple, and
    //                       iz + genitive against u + locative
    //   food-drink          accusative for what you order, genitive after a
    //                       measure word — same noun, two endings
    //   directions-town     polite imperatives coming back at you; genitive
    //                       position words; instrumental means of travel
    //   weather-seasons     the subjectless sentence, which reaches far past
    //                       the weather (kasno je, teško je)
    //   likes-preferences   the sviđati se flip: the thing is the subject and
    //                       the verb counts IT, not you
    'family-people': 'family',
    'countries-languages': 'countries',
    'food-drink': 'food',
    'directions-town': 'directions',
    'weather-seasons': 'weather',
    'likes-preferences': 'preferences',
  };

  it.each(Object.entries(EXPECTED))('%s practises %s', (lesson, category) => {
    expect(LESSON_TAUGHT_CATEGORY[lesson]).toBe(category);
  });

  // Down to one. The topical block left this list on 2026-08-29 the only honest
  // way — a drill authored for each lesson's actual subject — and what remains
  // is not a content gap at all.
  const DELIBERATELY_UNMAPPED = [
    // `alphabet` is NOT topical — AlphabetScreen exists, is A1, and its quiz is
    // exactly what the lesson teaches. It stays unmapped for a different and
    // more interesting reason: that screen awards directly and never calls
    // `completeExercise`, which is the only thing that reaches
    // `recordScreenPractised`. A coupling to it would resolve, send the learner
    // there, and then never clear — squatting a session slot for the queue
    // entry's full 14-day TTL. Mapping it requires routing its completion
    // through completeExercise first, which is a change to a live screen's
    // award path and belongs to its own decision. See
    // `couplingClearingPath.test.ts`, which is what found this.
    'alphabet',
  ];

  it.each(DELIBERATELY_UNMAPPED)('%s is left unmapped rather than mispaired', (id) => {
    // If a real drill for one of these ever ships, move it into EXPECTED — that
    // is the intended way to remove an entry from this list, and the failure
    // here is the reminder to do it deliberately.
    expect(LESSON_TAUGHT_CATEGORY[id]).toBeUndefined();
  });
});
