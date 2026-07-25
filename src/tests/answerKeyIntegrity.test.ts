import { describe, it, expect } from 'vitest';
import { CONDITIONAL, PADEZI_FULL } from '../../functions/api/content/_data/grammar.js';
import { DATA as WORD_FAMILIES } from '../components/practice/WordFamilies';
import { ERROR_CORRECT } from '../components/practice/ProductionDrillScreen';
import { UNJUMBLE } from '../data/exercises.js';
import { PITCH_ACCENT_LESSONS } from '../data/pitchAccentContent.js';
import * as SERVER_EXERCISES from '../../functions/api/content/_data/exercises.js';
import * as GRAMMAR from '../../functions/api/content/_data/grammar.js';
import * as GRAMMAR_ADVANCED from '../../functions/api/content/_data/grammarAdvanced.js';
import * as CLIENT_EXERCISES from '../data/exercises.js';
import * as PITCH_ACCENT from '../data/pitchAccentContent.js';

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
  PITCH_ACCENT_LESSONS.forEach((lesson: { id: string; drill?: OptQuestion[] }) => {
    if (lesson.drill?.length) checkBank(`PITCH_ACCENT ${lesson.id}.drill`, lesson.drill);
  });
});

/**
 * Corpus-wide sweep of the same two invariants.
 *
 * The named banks above are the ones with a known history. This walks EVERY
 * option-bearing item in the content modules so a new bank is covered the day
 * it is authored rather than the day someone remembers to add it here. It found
 * the pitch-accent 'grád' duplicate, which no named bank covered.
 *
 * Three traps, all of which produced false positives on the first pass and are
 * deliberately avoided here:
 *
 *   - DO NOT case-fold. The business-register drills ship
 *     opts ['vi','Vi','VI','tebe'] where capitalisation IS the thing being
 *     tested (polite Vi vs plural vi). Lowercasing reports them as duplicates.
 *   - DO NOT strip punctuation. LESSONS[42] teaches comma placement with
 *     options that differ only in commas. Stripping reports them as duplicates.
 *     (Both banks are graded by index, not by string, so the distinctions
 *     survive at runtime — the content is correct and the normaliser was wrong.)
 *   - SKIP empty option arrays. Branching-story scenes end with `choices: []`
 *     and have no answer key by design; `[].every()` is true, so a naive walker
 *     treats every terminal scene as a broken question.
 */
const OPTION_KEYS = ['opts', 'options'] as const;
const INDEX_ANSWER_KEYS = ['correct', 'c', 'answer', 'a'] as const;

function sweep(root: unknown, path: string, out: string[], depth = 0): void {
  if (!root || typeof root !== 'object' || depth > 8) return;
  if (Array.isArray(root)) {
    root.forEach((v, i) => sweep(v, `${path}[${i}]`, out, depth + 1));
    return;
  }
  const node = root as Record<string, unknown>;
  const optKey = OPTION_KEYS.find(
    (k) => Array.isArray(node[k]) && (node[k] as unknown[]).every((x) => typeof x === 'string'),
  );
  if (optKey) {
    const opts = node[optKey] as string[];
    if (opts.length > 0) {
      if (new Set(opts).size !== opts.length) {
        out.push(`${path}: duplicate options ${JSON.stringify(opts)}`);
      }
      const idxKey = INDEX_ANSWER_KEYS.find((k) => Number.isInteger(node[k]));
      if (idxKey) {
        const idx = node[idxKey] as number;
        if (idx < 0 || idx >= opts.length) {
          out.push(`${path}: ${idxKey}=${idx} out of range for ${opts.length} options`);
        }
      } else {
        // Membership is asserted WITHOUT a fixed list of answer-key names. Banks
        // name their key after the domain — GENDERDRILL uses `adj`, COLORAGREE
        // uses `color`, LISTEN uses `en`, SENTBUILD uses `hr` — and a hard-coded
        // list silently mis-reports every bank it does not know about (70 false
        // positives on the first run). The real invariant is weaker but
        // name-independent: SOME string field of the item must appear among its
        // options, or there is no reachable answer at all.
        const fields = Object.entries(node)
          .filter(([, v]) => typeof v === 'string')
          .map(([k]) => k);
        if (fields.length && !fields.some((k) => opts.includes(node[k] as string))) {
          out.push(
            `${path}: no field of the item (${fields.join('/')}) is present in ${JSON.stringify(opts)}`,
          );
        }
      }
    }
  }
  for (const [k, v] of Object.entries(node)) {
    if (!(OPTION_KEYS as readonly string[]).includes(k)) sweep(v, `${path}.${k}`, out, depth + 1);
  }
}

describe('answer-key integrity — corpus sweep', () => {
  const MODULES: Record<string, unknown> = {
    'content/exercises': SERVER_EXERCISES,
    'content/grammar': GRAMMAR,
    'content/grammarAdvanced': GRAMMAR_ADVANCED,
    'src/data/exercises': CLIENT_EXERCISES,
    'src/data/pitchAccentContent': PITCH_ACCENT,
  };

  it('finds option-bearing items to check (guards against an empty sweep)', () => {
    // sweep() only records failures, so a broken import or a rename would leave
    // it silently passing over nothing. Count the items independently.
    let count = 0;
    const countOpts = (n: unknown, d = 0): void => {
      if (!n || typeof n !== 'object' || d > 8) return;
      if (Array.isArray(n)) return n.forEach((x) => countOpts(x, d + 1));
      const o = n as Record<string, unknown>;
      const k = OPTION_KEYS.find(
        (key) => Array.isArray(o[key]) && (o[key] as unknown[]).every((x) => typeof x === 'string'),
      );
      if (k && (o[k] as string[]).length > 0) count++;
      Object.values(o).forEach((x) => countOpts(x, d + 1));
    };
    Object.values(MODULES).forEach((m) => countOpts(m));
    expect(count).toBeGreaterThan(500);
  });

  it('every option-bearing item has unique options and a reachable answer', () => {
    const failures: string[] = [];
    for (const [name, mod] of Object.entries(MODULES)) {
      for (const [exp, v] of Object.entries(mod as Record<string, unknown>)) {
        sweep(v, `${name}:${exp}`, failures);
      }
    }
    expect(failures).toEqual([]);
  });
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
