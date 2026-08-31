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

import { describe, it, expect, vi } from 'vitest';

// The lesson-day block at the bottom drives the REAL session builder, which
// reads the SRS queue and the certification gate. Both are mocked to their
// empty/A1 state so the composition under test is the ordinary one.
vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
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

  // The DELIBERATELY_UNMAPPED list this file carried is EMPTY as of 2026-08-30,
  // and with it the last uncoupled lesson in the curriculum. It held `alphabet`,
  // for a reason that was half right: AlphabetScreen never reached
  // `recordScreenPractised`, so a coupling would have resolved and then never
  // cleared. The note said mapping it "requires routing its completion through
  // completeExercise first" — and that was the wrong half. The sanctioned fix,
  // already used for `writing_guided` and `relpron`, is ONE
  // `recordScreenPractised` call at the screen's genuine completion point,
  // which changes no award semantics at all. Its quiz was always exactly what
  // the lesson teaches.
  it('every A1 lesson is coupled to a drill', () => {
    const uncoupled = a1Lessons.filter((l) => !LESSON_TAUGHT_CATEGORY[l.id]).map((l) => l.id);
    expect(
      uncoupled,
      'an A1 lesson leads nowhere — author its drill, or record here why no honest pairing exists',
    ).toEqual([]);
  });
});

describe('an A1 lesson day still teaches STRUCTURE', () => {
  // WHY THIS EXISTS (2026-08-31). Since the session-length contract closed, the
  // grammar backstop (P2.7) stands down on a lesson day whose budget is spent —
  // so on those days the ONLY structure a learner meets is whatever the lesson's
  // own coupled drill carries. That makes each A1 category's SKILL_GROUP row
  // load-bearing in a way it never was before, and nothing was checking them.
  //
  // Six A1 rows were wrong when this was written: `family`, `countries`, `food`,
  // `directions`, `weather` and `gender` were classified 'vocab' by their TOPIC
  // LABEL, while every one of those drills teaches a structure its own bank
  // header names — accusative-vs-genitive for the café order, the subjectless
  // *Hladno je*, irregular plurals with plural agreement. The A2 block had been
  // grouped by structure from the start; the A1 block had not, and the mistake
  // was invisible while SKILL_GROUP's only consumer was the variety pass. It
  // cost nine of thirty A1 lesson days their grammar. Regrouping took that to
  // three, with no change to session length and none to the variety pass
  // (measured: A1 never exceeds one activity per skill family in 200 runs,
  // before or after).
  //
  // This goes through the REAL session builder rather than reading SKILL_GROUP,
  // because the property that matters to a learner is "does the day contain
  // structure", not "is this row spelled a particular way".
  const LEXICAL_A1_LESSONS: Record<string, string> = {
    // The letters and their sounds. Phonology and orthography — there is no
    // structure here to drill, and this is lesson 1.
    alphabet: 'the alphabet is sounds, not grammar',
    // Rule-governed, but the rules are which greeting for which hour and ti vs
    // Vi. That is register, which `politeness` and `register` also group as
    // vocab. Grouping it structurally to win a slot would be the topic-label
    // mistake in reverse.
    'greetings-farewells': 'register and time-of-day choice, not structure',
    // The clock, the days and the months, plus the 1 / 2–4 / 5+ counting rule.
    // The counting rule IS numeral agreement, so 'case' is arguable — but the
    // bank explicitly asks for no case knowledge (the lesson sits one BELOW the
    // `cases` primer), and skillGroups.ts records the deliberate decision to
    // keep it lexical so it cannot sit beside three case drills. Left alone.
    'time-calendar': 'clock and calendar vocabulary; its counting rule predates the cases primer',
  };

  const lessonDaysWithoutGrammar = (): string[] =>
    a1Lessons
      .filter((l) => {
        localStorage.clear();
        writeCurriculumSpine([
          {
            id: l.id,
            level: 'A1',
            order: 1,
            prerequisites: [],
            objectives: ['x'],
            title: l.id,
          } as CurriculumEntry,
        ]);
        return !buildSessionActivities('A1').some((a) =>
          GRAMMAR_STRUCTURE_CATEGORIES.has(a.category),
        );
      })
      .map((l) => l.id);

  it('every A1 lesson day contains structure, but for the recorded lexical few', () => {
    const bare = lessonDaysWithoutGrammar();
    const unexpected = bare.filter((id) => !(id in LEXICAL_A1_LESSONS));
    expect(
      unexpected,
      `these A1 lesson days now contain NO grammar drill at all: ${unexpected.join(', ')}. ` +
        `Since the backstop yields on a lesson day, the coupled drill is the only structure ` +
        `the learner meets — so check the drill's SKILL_GROUP row actually reflects what the ` +
        `drill teaches, rather than what its topic is called.`,
    ).toEqual([]);
  });

  it('and the lexical few are still genuinely lexical', () => {
    // The staleness half. A list of exemptions that is never re-checked is how
    // `couplingClearingPath`'s exemption set came to guard nothing — so assert
    // both directions: every entry must still name a real A1 lesson, and must
    // still actually lack grammar. An entry that has gained a structural drill
    // should be deleted, not left sitting here.
    const bare = new Set(lessonDaysWithoutGrammar());
    const ids = new Set(a1Lessons.map((l) => l.id));
    for (const [id, reason] of Object.entries(LEXICAL_A1_LESSONS)) {
      expect(ids, `${id} is exempted here but is not an A1 lesson any more`).toContain(id);
      expect(
        bare.has(id),
        `${id} is exempted ("${reason}") but its day now DOES contain grammar. Delete the ` +
          `entry — a stale exemption hides the next regression.`,
      ).toBe(true);
    }
  });

  it('the exemption list stays small — three of thirty', () => {
    // A count, so the list cannot quietly absorb regressions one at a time.
    // Raising this number is a decision about what A1 learners are taught, and
    // should read like one in the diff.
    expect(Object.keys(LEXICAL_A1_LESSONS).length).toBe(3);
  });
});
