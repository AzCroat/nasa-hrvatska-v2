import { describe, it, expect } from 'vitest';
import { CONDITIONAL, PADEZI_FULL } from '../../functions/api/content/_data/grammar.js';
import { DATA as WORD_FAMILIES } from '../components/practice/WordFamilies';
import { ERROR_CORRECT } from '../components/practice/ProductionDrillScreen';
import { UNJUMBLE } from '../data/exercises.js';

/**
 * Structural guard for the answer-key bug class.
 *
 * Two invariants, both of which have been violated in shipped content:
 *   1. ANSWER MEMBERSHIP — the declared correct answer must appear among the
 *      options. These screens grade by strict value equality, so an answer that
 *      isn't in `opts` makes the question literally unwinnable: no option ever
 *      turns green and no XP is awarded. (CONDITIONAL.quiz[7] declared
 *      'bi (ona bi došla)' against opts ['bih','bismo','biste','bi']; two
 *      ERROR_CORRECT items declared answers absent from their own opts.)
 *   2. OPTION UNIQUENESS — options must be distinct. A duplicated correct answer
 *      renders two green buttons; a duplicated distractor silently reduces a
 *      4-choice question to 3. (PADEZI_FULL.quiz[14] listed 'jezerima' twice;
 *      WordFamilies DATA[6] listed 'kupac' twice.)
 *
 * Banks already covered elsewhere (listening EXERCISES, TRANSLATE_DRILLS,
 * PREPDRILL, ASPECT/PADEZI/NUMCOUNT, LESSONS quiz slides) are not repeated here.
 */

type OptQuestion = { opts: string[]; answer?: string; a?: string; correct?: string };

function answerOf(q: OptQuestion): string | undefined {
  return q.answer ?? q.a ?? q.correct;
}

function checkBank(name: string, bank: OptQuestion[]) {
  describe(name, () => {
    it('is a non-empty array (guards against a rename silently emptying this suite)', () => {
      expect(Array.isArray(bank)).toBe(true);
      expect(bank.length).toBeGreaterThan(0);
    });

    it('declares an answer that is present among the options', () => {
      const broken = bank
        .map((q, i) => ({ i, answer: answerOf(q), opts: q.opts }))
        .filter((q) => Array.isArray(q.opts) && !q.opts.includes(q.answer as string));
      expect(
        broken.map(
          (b) => `[${b.i}] answer ${JSON.stringify(b.answer)} not in ${JSON.stringify(b.opts)}`,
        ),
      ).toEqual([]);
    });

    it('has no duplicate options', () => {
      const dupes = bank
        .map((q, i) => ({ i, opts: q.opts }))
        .filter((q) => Array.isArray(q.opts) && new Set(q.opts).size !== q.opts.length);
      expect(dupes.map((d) => `[${d.i}] ${JSON.stringify(d.opts)}`)).toEqual([]);
    });
  });
}

describe('answer-key integrity', () => {
  checkBank('CONDITIONAL.quiz', CONDITIONAL.quiz as OptQuestion[]);
  checkBank('PADEZI_FULL.quiz', PADEZI_FULL.quiz as OptQuestion[]);
  checkBank('ProductionDrill ERROR_CORRECT', ERROR_CORRECT as unknown as OptQuestion[]);
  checkBank('WordFamilies DATA', WORD_FAMILIES as unknown as OptQuestion[]);
});

/**
 * Third invariant, for tile-assembly exercises: WINNABILITY.
 *
 * The learner can only produce a permutation of the supplied word tiles, so the
 * tiles joined by single spaces must normalize to the same string as the answer
 * key. UNJUMBLE is the only tile bank whose `words` are hand-authored separately
 * from `correct` — SentenceTileScreen derives its tiles FROM `item.hr` with the
 * same strip it grades with, so it cannot drift. A single stray comma, a
 * hyphenated token split across two tiles, or one missing word makes an UNJUMBLE
 * item permanently ungradeable, with no signal anywhere in the UI.
 *
 * Normalization here mirrors Unjumble.tsx's grader exactly. If the two ever
 * diverge, this suite stops describing the shipped behaviour.
 */
const normTiles = (s: string) =>
  s
    .replace(/[?.!,;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

describe('UNJUMBLE tile winnability', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(UNJUMBLE)).toBe(true);
    expect(UNJUMBLE.length).toBeGreaterThan(0);
  });

  it('every item can be assembled from its own tiles', () => {
    const unwinnable = (UNJUMBLE as Array<{ words: string[]; correct: string; en?: string }>)
      .map((q, i) => ({ i, q }))
      .filter(({ q }) => normTiles(q.words.join(' ')) !== normTiles(q.correct))
      .map(
        ({ i, q }) =>
          `[${i}] tiles ${JSON.stringify(q.words.join(' '))} cannot make ${JSON.stringify(q.correct)}`,
      );
    expect(unwinnable).toEqual([]);
  });

  it('declares tiles and a key for every item', () => {
    const malformed = (UNJUMBLE as Array<{ words?: unknown; correct?: unknown }>)
      .map((q, i) => ({ i, q }))
      .filter(
        ({ q }) =>
          !Array.isArray(q.words) ||
          q.words.length === 0 ||
          typeof q.correct !== 'string' ||
          !q.correct.trim(),
      )
      .map(({ i }) => `[${i}]`);
    expect(malformed).toEqual([]);
  });
});
