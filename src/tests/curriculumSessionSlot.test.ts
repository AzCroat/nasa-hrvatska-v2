// src/tests/curriculumSessionSlot.test.ts
//
// PRIORITY 0 — TODAY'S LESSON (Wave 1, 2026-08-28).
//
// Before this slot, every guaranteed slot in buildSessionActivities was practice
// or assessment: the app tested competence it had never taught. A lesson could
// only reach a learner by winning a fill slot, as one A1-tagged pool entry among
// roughly a hundred.
//
// Three properties are pinned, and the second is the one a future change is most
// likely to break by accident:
//
//   1. the lesson comes FIRST — a lesson each day, before anything tests you
//   2. what it costs in session length, MEASURED per level
//   3. no spine means no slot, and the session composes exactly as it did before
//
// Point 2 said "it costs a FILL slot, not an extra one, so the session-length
// contract (A1 → 3, A2+ → 4, +2 in fluency mode) does not move" until
// 2026-08-30. That is what the code intends and only half of what it does: the
// fill loop absorbs P0's FIRST slot exactly as described, but the coupled drill
// P0 adds beside it lands on top wherever the guaranteed P2/P2.5/P2.4 slots
// have already spent the target. The assertion here passed only because its
// fixture opened on `alphabet`, the single uncoupled lesson in the curriculum,
// so P0 pushed one slot instead of two. Coupling that lesson made it visible;
// master shows the same growth for any already-coupled lesson. The block below
// now pins the real numbers and records what would have to change to restore
// the original contract.

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => 'A1'),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));

import { buildSessionActivities, GRAMMAR_STRUCTURE_CATEGORIES } from '../hooks/useDailySession';
import { writeCurriculumSpine, markLessonComplete } from '../lib/curriculumProgress';
import type { CurriculumEntry } from '../lib/curriculum';

// Real lesson ids, so the LESSON_TAUGHT_CATEGORY lookup exercises the real map
// rather than a fixture that cannot drift with it.
const SPINE: CurriculumEntry[] = [
  {
    id: 'alphabet',
    level: 'A1',
    order: 1,
    prerequisites: [],
    objectives: ['Read any Croatian word aloud'],
    title: 'Croatian Alphabet & Pronunciation',
  },
  {
    id: 'present-tense-verbs',
    level: 'A1',
    order: 2,
    prerequisites: ['alphabet'],
    objectives: ['Conjugate regular verbs'],
    title: 'Present Tense Verbs',
  },
];

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
});

describe('the lesson comes first', () => {
  it('is the very first activity in the session', () => {
    writeCurriculumSpine(SPINE);
    const acts = buildSessionActivities('A1');
    expect(acts[0]?.screen).toBe('animlesson');
    expect(acts[0]?.id).toBe('curriculum_alphabet');
  });

  it('carries the lesson title and a checkable reason', () => {
    writeCurriculumSpine(SPINE);
    const first = buildSessionActivities('A1')[0];
    expect(first?.label).toBe('Croatian Alphabet & Pronunciation');
    expect(first?.reason).toBe('Lesson 1 of 2 in A1');
  });

  it('advances once the learner completes it', () => {
    writeCurriculumSpine(SPINE);
    markLessonComplete('alphabet', '2026-08-28');
    expect(buildSessionActivities('A1')[0]?.id).toBe('curriculum_present-tense-verbs');
  });

  it('appears exactly once — never two lessons in a session', () => {
    writeCurriculumSpine(SPINE);
    const lessons = buildSessionActivities('A1').filter((a) => a.screen === 'animlesson');
    expect(lessons.length).toBe(1);
  });
});

describe('THE LENGTH CONTRACT: the lesson costs a fill slot, not an extra one', () => {
  // THE CONTRACT IS HELD when the drill coupled to today's lesson is itself
  // grammar/structure, and that is what the first block below pins. It was not
  // held at all before 2026-08-30, and the story of how it looked held is worth
  // keeping, because the same shape has now appeared three times in this suite.
  //
  // The old assertion was "session length is IDENTICAL with and without a
  // spine, at every level". It passed for two years and was never true in
  // general — it was true of its FIXTURE. SPINE's first entry is `alphabet`,
  // which until 2026-08-30 was the single UNCOUPLED lesson in the curriculum,
  // so P0 pushed one slot and the fill loop absorbed it exactly as documented.
  // Coupling `alphabet` made P0 push two and the assertion went red; master
  // reproduced the same growth for any already-coupled lesson.
  //
  // THE FIX, IN TWO HALVES, and the second half is only intelligible once you
  // know which slot was actually over.
  //
  //   2026-08-30 — the adaptive pick yields. It is the only pre-fill slot that
  //   is both optional and substitutable, so it gives way first.
  //
  //   2026-08-31 — the GRAMMAR GUARANTEE (P2.7) yields to the same budget rule,
  //   which is what actually closes the gap.
  //
  // The interim state was "the adaptive pick yields only when the session
  // already has grammar", and it left vocab-coupled days at +1. The obvious
  // reading of that was "the grammar guarantee is the extra slot, so make it
  // yield" — and the obvious reading was WRONG. Dumping the real composition of
  // a vocab-coupled day showed P2.7 never fired on it at all:
  //
  //   B1 vocab-coupled: curriculum_alphabet | curriculum_practice_alphabet |
  //                     cat_genitive* | dialogue | shadowing | cityofday
  //
  // The starred activity is the ADAPTIVE pick, kept precisely by the interim
  // condition. P2.7 skipped because the session already had grammar — from the
  // pick. So making only the guarantee yield would have changed nothing, and
  // making only the pick yield hands the slot straight to the guarantee. They
  // are alternatives, and closing the +1 requires BOTH to stand down.
  //
  // That is now one rule rather than two special cases: no pre-fill guarantee
  // may push the session past `fillTarget`. Measured across all 180 lessons at
  // every level: zero length mismatches.
  const GRAMMAR_COUPLED: CurriculumEntry[] = [
    // `present-tense-verbs` couples to `present-tense`, which IS in
    // GRAMMAR_STRUCTURE_CATEGORIES — so the lesson's own drill supplies the
    // session's grammar and P2.7 skips on its own merits, not on the budget.
    { ...SPINE[1]!, order: 1, prerequisites: [] },
  ];
  // `alphabet` couples to a VOCABULARY drill, so nothing before P2.7 is
  // structural. This is the fixture that exercises the budget rule.
  const VOCAB_COUPLED: CurriculumEntry[] = [SPINE[0]!];

  it.each(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])(
    '%s: a lesson day is exactly as long as any other day, whatever it couples to',
    (level) => {
      for (const [kind, spine] of [
        ['grammar-coupled', GRAMMAR_COUPLED],
        ['vocab-coupled', VOCAB_COUPLED],
      ] as const) {
        localStorage.clear();
        const without = buildSessionActivities(level).length;
        localStorage.clear();
        writeCurriculumSpine(spine);
        const withSpine = buildSessionActivities(level).length;
        expect(
          withSpine,
          `${level} ${kind}: session went ${without} → ${withSpine}. The lesson and its ` +
            `coupled drill must displace the adaptive pick and a fill slot, not add to them.`,
        ).toBe(without);
      }
    },
  );

  it('A2 keeps its adaptive pick with a spine — what conjugation.spec.js relies on', () => {
    // e2e/conjugation.spec.js seeds an A2 user, calls mockContent (which serves
    // the REAL curriculum spine) and seeds `present-tense` as the sole starved
    // category so the ADAPTIVE pick resolves to the conjugation drill. If this
    // change had made the adaptive slot yield at A2, that spec would have gone
    // red in CI rather than here.
    //
    // A2 is safe by construction — a 4-slot target and no conversation anchor
    // leave room — but "safe by construction" is exactly the kind of claim that
    // should be an assertion rather than a paragraph.
    for (const spine of [VOCAB_COUPLED, GRAMMAR_COUPLED]) {
      localStorage.clear();
      writeCurriculumSpine(spine);
      expect(
        buildSessionActivities('A2').some((a) => a.id.startsWith('cat_')),
        'A2 lost its adaptive pick — conjugation.spec.js depends on it',
      ).toBe(true);
    }
  });

  it('the freed slot is SAVED, not handed from one guarantee to the other', () => {
    // The assertion that makes the two halves inseparable. Either yield alone
    // leaves the length unchanged — the first attempt at this fix proved that
    // in the one direction, and the composition dump proved it in the other —
    // so a regression that restores just one of them would still pass a naive
    // "is there grammar?" check. This pins the actual saving: on a level with no
    // spare slot, a vocab-coupled day ends with NEITHER the adaptive pick nor a
    // forced grammar drill.
    for (const level of ['B1', 'B2', 'C1', 'C2']) {
      localStorage.clear();
      writeCurriculumSpine(VOCAB_COUPLED);
      const acts = buildSessionActivities(level);
      expect(
        acts.some((a) => a.id.startsWith('cat_')),
        `${level}: the adaptive pick is still taking a slot the lesson needs`,
      ).toBe(false);
      expect(
        acts.some((a) => GRAMMAR_STRUCTURE_CATEGORIES.has(a.category)),
        `${level}: P2.7 backfilled the slot the adaptive pick gave up — same length, ` +
          `less targeted drill. Both must yield or neither is worth doing.`,
      ).toBe(false);
    }
  });

  it('WHAT THIS COSTS: a grammar-coupled day still teaches grammar', () => {
    // The other side of the trade, asserted so the cost stays bounded to the
    // days that genuinely have no structural content of their own. On a lesson
    // day whose drill IS structural, the session still contains grammar — it
    // comes from the coupling rather than the backstop, which is the better
    // source anyway.
    for (const level of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
      localStorage.clear();
      writeCurriculumSpine(GRAMMAR_COUPLED);
      expect(
        buildSessionActivities(level).some((a) => GRAMMAR_STRUCTURE_CATEGORIES.has(a.category)),
        `${level}: a grammar-coupled lesson day lost its grammar entirely`,
      ).toBe(true);
    }
  });

  it('a session with NO spine is untouched — the budget rule only bites on lesson days', () => {
    // Measured before shipping, both with and without a servable SRS queue:
    // non-lesson session length and grammar presence are identical with and
    // without this change at every level. The risk was real — P2.7's new budget
    // check reads `activities.length`, which SRS also contributes to — so it is
    // an assertion rather than a note.
    for (const level of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
      for (let i = 0; i < 5; i++) {
        localStorage.clear();
        const acts = buildSessionActivities(level);
        expect(
          acts.some((a) => GRAMMAR_STRUCTURE_CATEGORIES.has(a.category)),
          `${level}: a no-spine session lost its grammar — the budget rule has leaked ` +
            `outside lesson days`,
        ).toBe(true);
      }
    }
  });
});

describe('teaching leads straight into doing', () => {
  it('the drill for what the lesson taught follows it in the SAME session', () => {
    // The existing coupling only fires on the NEXT session, because it reads a
    // queue the lesson writes on completion. Without this the learner is taught a
    // concept and then tested on something else for the rest of the day.
    writeCurriculumSpine(SPINE);
    markLessonComplete('alphabet', '2026-08-28'); // advance to the verb lesson
    const acts = buildSessionActivities('A1');
    expect(acts[0]?.id).toBe('curriculum_present-tense-verbs');
    expect(acts[1]?.id).toBe('curriculum_practice_present-tense');
    expect(acts[1]?.reason).toContain('lesson taught');
  });

  it('a lesson with no honest category gets NO drill rather than a wrong one', () => {
    // A wrong drill after a lesson is worse than no drill, so an unmapped
    // lesson must get the teaching slot and nothing after it.
    //
    // This used `alphabet` as its unmapped fixture until 2026-08-30, when that
    // lesson was coupled and the curriculum map went TOTAL — there is no real
    // unmapped lesson left to point at. The behaviour still matters for the
    // next lesson someone adds without a coupling, so it is exercised with a
    // synthetic id instead: chosen BECAUSE no lesson can be called that, which
    // is what stops it going stale the way the real name did.
    writeCurriculumSpine([
      { ...SPINE[0]!, id: '__unmapped-lesson__', title: 'Unmapped', prerequisites: [] },
    ]);
    const acts = buildSessionActivities('A1');
    expect(acts[0]?.id).toBe('curriculum___unmapped-lesson__');
    expect(acts[1]?.id ?? '').not.toMatch(/^curriculum_practice_/);
  });
});

describe('no spine, no slot — the session composes as it always did', () => {
  it('adds no lesson when the curriculum has never been fetched', () => {
    const acts = buildSessionActivities('A1');
    expect(acts.some((a) => a.id.startsWith('curriculum_'))).toBe(false);
  });

  it('adds no lesson when the cached spine is corrupt', () => {
    localStorage.setItem('nh_curriculum_spine', 'not json');
    const acts = buildSessionActivities('A1');
    expect(acts.some((a) => a.id.startsWith('curriculum_'))).toBe(false);
    expect(acts.length).toBeGreaterThan(0);
  });

  it('still builds a full session when the spine is empty', () => {
    writeCurriculumSpine([]);
    expect(buildSessionActivities('A1').length).toBeGreaterThan(0);
  });
});
