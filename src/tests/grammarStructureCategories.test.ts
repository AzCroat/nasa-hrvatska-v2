// src/tests/grammarStructureCategories.test.ts
//
// GRAMMAR_STRUCTURE_CATEGORIES IS DERIVED, AND THIS IS WHAT MAKES THAT SAFE
// (2026-08-31).
//
// The set answers one question — "does this category's drill teach structure
// rather than lexis?" — for two consumers: `sessionHasGrammar` (which decides
// whether the adaptive pick may stand down) and `selectGuaranteedGrammar`
// (P2.7's backstop). It used to be a literal list of 21, and it went stale in
// the most ordinary way possible: the practice programme added ~130 pool-only
// categories over four days and nobody thought to revisit a constant three
// hundred lines away. `adjective-agreement`, `relative-koji`,
// `two-case-prepositions` and `case-subtleties` are structure by any reading and
// were invisible to both consumers.
//
// SKILL_GROUP already classifies every category, exhaustively — content-coverage
// fails the build if a pool category is missing from it — so the set is now the
// case | verb | syntax families of that map. The point is not the 63 categories
// it gains; it is that a new drill is classified ONCE, and both the variety pass
// and the grammar guarantee follow from the same statement.
//
// A derivation needs different guards than a list. A list can be read and
// checked by eye; a derivation is only as good as the map it reads and the
// filter over it, and both can go wrong silently — an over-broad filter makes
// P2.7 serve a vocabulary game as "grammar", an over-narrow one puts the set
// back where it started.

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SKILL_GROUP, SKILL_GROUPS } from '../lib/skillGroups';
import type { SkillCategory } from '../lib/adaptive';
import {
  GRAMMAR_STRUCTURE_CATEGORIES,
  selectGuaranteedGrammar,
  CEFR_EXERCISE_POOL,
} from '../hooks/useDailySession';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

/** The families whose drills build a FORM or a CLAUSE rather than teach a word. */
const STRUCTURAL_GROUPS = ['case', 'verb', 'syntax'] as const;

/**
 * The literal set as it stood before the derivation, recorded here as history.
 *
 * This is the one place a hard-coded list belongs. It is NOT a restatement of
 * production data — that is the mistake `a2Curriculum.test.ts` made — it is the
 * previous behaviour, frozen, so the claim "deriving loses nothing" is an
 * assertion a reader can re-run rather than a sentence in a commit message.
 * Never regenerate it from the production set; that would make it vacuous.
 */
const HAND_LISTED_21: readonly SkillCategory[] = [
  'nominative',
  'genitive',
  'accusative',
  'dative-locative',
  'instrumental',
  'vocative',
  'present-tense',
  'past-tense',
  'future-tense',
  'aspect-imperfective',
  'aspect-perfective',
  'aspect-negation',
  'conditional',
  'clitics',
  'word-order',
  'passive',
  'numerals',
  'participle',
  'subordination',
  'discourse',
  'nominalization',
];

describe('the derivation loses nothing', () => {
  it('every one of the 21 hand-listed categories survives', () => {
    const dropped = HAND_LISTED_21.filter((c) => !GRAMMAR_STRUCTURE_CATEGORIES.has(c));
    expect(
      dropped,
      `deriving from SKILL_GROUP dropped ${dropped.join(', ')}. The derivation was adopted on ` +
        `the explicit finding that all 21 were already grouped case/verb/syntax — if one is no ` +
        `longer, either the regrouping is wrong or this set needs the category back explicitly.`,
    ).toEqual([]);
  });

  it('and each of them is genuinely case, verb or syntax in SKILL_GROUP', () => {
    // The assertion above would also pass if the filter had quietly widened to
    // include everything. This one says WHY each survives.
    for (const c of HAND_LISTED_21) {
      expect(STRUCTURAL_GROUPS, `${c} is grouped '${SKILL_GROUP[c]}'`).toContain(SKILL_GROUP[c]);
    }
  });
});

describe('the derivation is exactly the structural families', () => {
  it('admits nothing outside case | verb | syntax', () => {
    // An over-broad filter is the dangerous direction: P2.7 would "guarantee
    // grammar" by serving a vocabulary game, and sessionHasGrammar would let the
    // adaptive pick stand down on a day with no structure in it at all.
    const wrong = [...GRAMMAR_STRUCTURE_CATEGORIES]
      .map((c) => [c, SKILL_GROUP[c as SkillCategory]] as const)
      .filter(([, g]) => !STRUCTURAL_GROUPS.includes(g as (typeof STRUCTURAL_GROUPS)[number]));
    expect(wrong, `non-structural categories leaked in: ${JSON.stringify(wrong)}`).toEqual([]);
  });

  it('omits nothing inside them but the documented exclusion', () => {
    // The over-narrow direction — the failure the hand-list actually had. This
    // is the assertion that makes the set self-maintaining: add a structural
    // drill to SKILL_GROUP and it is covered, or this goes red.
    const missing = (Object.keys(SKILL_GROUP) as SkillCategory[]).filter(
      (c) =>
        STRUCTURAL_GROUPS.includes(SKILL_GROUP[c] as (typeof STRUCTURAL_GROUPS)[number]) &&
        !GRAMMAR_STRUCTURE_CATEGORIES.has(c) &&
        c !== 'grammar-lesson',
    );
    expect(
      missing,
      `structural categories missing from the set: ${missing.join(', ')}. Either they belong ` +
        `in it, or they belong in a different SKILL_GROUP family.`,
    ).toEqual([]);
  });

  it('covers the four families it must NOT touch', () => {
    // Guards the filter from the other side: if SKILL_GROUPS ever gains a family
    // the filter does not consider, this names it rather than letting it fall
    // silently into "not structural".
    const unhandled = SKILL_GROUPS.filter(
      (g) =>
        !STRUCTURAL_GROUPS.includes(g as (typeof STRUCTURAL_GROUPS)[number]) &&
        !['vocab', 'speaking', 'listening', 'reading'].includes(g),
    );
    expect(
      unhandled,
      `SKILL_GROUPS gained ${unhandled.join(', ')} — decide deliberately whether it is structure.`,
    ).toEqual([]);
  });

  it('is neither empty nor everything', () => {
    // Mutation insurance. A filter that returned nothing would make every
    // assertion above vacuous and would silently turn P2.7 off; one that
    // returned everything would make the whole distinction meaningless.
    const total = Object.keys(SKILL_GROUP).length;
    expect(GRAMMAR_STRUCTURE_CATEGORIES.size).toBeGreaterThan(HAND_LISTED_21.length);
    expect(GRAMMAR_STRUCTURE_CATEGORIES.size).toBeLessThan(total);
  });
});

describe('the grammar-lesson exclusion', () => {
  it('is scoped to a category that still exists', () => {
    // An exclusion whose subject has gone is an exclusion guarding nothing while
    // still reading as a live decision — the way `idioms` sat in
    // couplingClearingPath's exemption set after its category was repointed.
    expect(
      Object.keys(SKILL_GROUP),
      `'grammar-lesson' is excluded from GRAMMAR_STRUCTURE_CATEGORIES but is no longer a ` +
        `SKILL_GROUP key — delete the exclusion.`,
    ).toContain('grammar-lesson');
    expect(GRAMMAR_STRUCTURE_CATEGORIES.has('grammar-lesson')).toBe(false);
  });

  it('keeps LESSONS out of the guaranteed-DRILL slot', () => {
    // The reason for the exclusion, stated as behaviour rather than intent.
    // P2.7's job is to guarantee a structure drill; P0 already opens every
    // session with a lesson. `grammarexplainer` is AI-dependent besides, and a
    // guarantee that can fail to generate is not a guarantee.
    const lessonScreens = CEFR_EXERCISE_POOL.filter((e) => e.category === 'grammar-lesson').map(
      (e) => e.screen,
    );
    expect(lessonScreens.length, 'no grammar-lesson pool entries left to exclude').toBeGreaterThan(
      0,
    );
    for (const level of LEVELS) {
      for (let i = 0; i < 40; i++) {
        const pick = selectGuaranteedGrammar(level, new Set(), []);
        expect(
          lessonScreens,
          `${level}: P2.7 served the lesson screen ${pick?.screen}`,
        ).not.toContain(pick?.screen ?? '');
      }
    }
  });
});

describe('what the widened set may now serve', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('never a reference screen — those have no graded finish', () => {
    // Newly load-bearing. The set grew from 21 categories to 83, so "does any
    // browse-list entry carry a structural tag?" stopped being obvious by
    // inspection. A reference entry completes on RETURN rather than on a graded
    // result, so serving one as the guaranteed grammar drill would credit the
    // slot for reading a table — the same shape as the `idioms` coupling that
    // resolved to a browse list and never cleared.
    const eligible = CEFR_EXERCISE_POOL.filter((e) => GRAMMAR_STRUCTURE_CATEGORIES.has(e.category));
    const refs = eligible.filter((e) => (e as { reference?: boolean }).reference);
    expect(
      refs.map((e) => `${e.screen}(${e.category})`),
      'a reference entry became grammar-eligible — it has no graded finish, so P2.7 would ' +
        'credit the slot for a browse list.',
    ).toEqual([]);
  });

  it('gives every level a real drill to guarantee', () => {
    // The set is only useful if P2.7 can actually satisfy it. A1 is the level
    // that cannot inherit downward, so it is the one that would starve first.
    for (const level of LEVELS) {
      const pick = selectGuaranteedGrammar(level, new Set(), []);
      expect(pick, `${level} has no guaranteed-grammar candidate at all`).toBeTruthy();
      expect(GRAMMAR_STRUCTURE_CATEGORIES.has(pick!.category as SkillCategory)).toBe(true);
    }
  });

  it('widens A1 specifically, which is what the stale list cost beginners', () => {
    // A1's structural pool was 10 entries — mostly case and tense drills sitting
    // above A1 and reached only by the nearest-CEFR tiebreak — while the A1
    // drills authored for A1 lessons (plural, negation, imperative, questions,
    // possessives, …) were tagged with pool-only categories the list never knew
    // about. Stated as a floor rather than an exact count so authoring one more
    // A1 drill does not fail the suite.
    const a1 = CEFR_EXERCISE_POOL.filter(
      (e) => e.cefr === 'A1' && GRAMMAR_STRUCTURE_CATEGORIES.has(e.category),
    );
    expect(a1.length, 'A1 structural pool shrank back toward the hand-listed 10').toBeGreaterThan(
      15,
    );
  });
});
