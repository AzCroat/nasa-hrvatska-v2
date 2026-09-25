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

/**
 * THE CORPUS IS DERIVED, NOT LISTED (sweep 126).
 *
 * It was five hand-written modules. Measured: **211 modules carry an
 * option-bearing item and 10,144 items exist**, so the sweep that calls itself a
 * corpus sweep covered five of two hundred and eleven — and the block below it
 * says so in its own docstring ("the corpus sweep above covers five modules, none
 * of them these") without anyone widening the corpus. That is this repo's
 * most-repeated lesson, in the file that records it: **a hand-maintained list of
 * subjects decays exactly like one in production**, and coverage is a ratio, not a
 * list length.
 *
 * The largest uncovered body is the ~75 HAND-WRITTEN `*Drill.tsx` components —
 * the oldest graded content in the app, which CLAUDE.md describes as "DATA wearing
 * a `.tsx` extension" — plus the lesson bodies and the graded stories. Widening it
 * costs nothing: the same `sweep` over the whole derived corpus reports **zero**
 * failures, so there are no false positives to train anyone to ignore it.
 *
 * `import.meta.glob` with `eager` rather than a dynamic `import()`, matching the
 * drill-bank block below: a dynamic import that silently resolved to nothing would
 * make every assertion here vacuous, and the item floor plus the named pins are
 * what would catch that.
 */
const DERIVED_MODULES: Record<string, unknown> = {
  ...(import.meta.glob('../data/**/*.{ts,js}', { eager: true }) as Record<string, unknown>),
  ...(import.meta.glob('../../functions/api/content/_data/**/*.js', { eager: true }) as Record<
    string,
    unknown
  >),
  ...(import.meta.glob('../components/practice/**/*.tsx', { eager: true }) as Record<
    string,
    unknown
  >),
  ...(import.meta.glob('../components/learn/**/*.tsx', { eager: true }) as Record<string, unknown>),
  ...(import.meta.glob('../components/croatia/**/*.tsx', { eager: true }) as Record<
    string,
    unknown
  >),
};

describe('answer-key integrity — corpus sweep', () => {
  const MODULES: Record<string, unknown> = DERIVED_MODULES;

  it('the five modules the hand-written list named are still in the derived corpus', () => {
    // The old list is not deleted, it is CHECKED: if a glob stops reaching one of
    // them the corpus has silently shrunk back, and the item floor alone would not
    // notice (5 modules of 211 is 2% of the items).
    for (const [name, mod] of Object.entries({
      SERVER_EXERCISES,
      GRAMMAR,
      GRAMMAR_ADVANCED,
      CLIENT_EXERCISES,
      PITCH_ACCENT,
    })) {
      const hit = Object.values(MODULES).some((m) => m === mod);
      expect(hit, `${name} is no longer reached by the globs`).toBe(true);
    }
  });

  it('the derived corpus reaches the hand-written drill components', () => {
    // The largest previously-uncovered body. Named rather than counted, because a
    // glob typo that dropped `practice/**` would still leave ~9,000 items and clear
    // any floor.
    const keys = Object.keys(MODULES);
    for (const f of [
      'NominativeDrill.tsx',
      'MnozinaDrill.tsx',
      'InterpunkcijaDrill.tsx',
      'FrazeologijaDrill.tsx',
    ])
      expect(
        keys.some((k) => k.endsWith(`/${f}`)),
        `${f} is outside the corpus — the hand-written drills are the oldest graded content in the app`,
      ).toBe(true);
    expect(keys.length).toBeGreaterThan(400);
  });

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
    // 10,144 when the corpus was derived (sweep 126); it was >500 over five modules.
    expect(count).toBeGreaterThan(9000);
  });

  it('every option-bearing item has unique options and a reachable answer', () => {
    const failures: string[] = [];
    for (const [name, mod] of Object.entries(MODULES)) {
      for (const [exp, v] of Object.entries(mod as Record<string, unknown>)) {
        if (typeof v === 'function') continue;
        sweep(v, `${name}:${exp}`, failures);
      }
    }
    expect(
      failures,
      'an answer no option carries makes the question literally unwinnable: no ' +
        'option ever turns green, no XP is awarded, and nothing anywhere says so',
    ).toEqual([]);
  });

  it('POSITIVE CONTROL: the sweep reports both invariants on a synthetic item', () => {
    // The corpus is clean, so without this the two assertions above could both be
    // satisfied by a sweep that had stopped looking.
    const unwinnable: string[] = [];
    sweep([{ hr: 'x', answer: 'nije tu', opts: ['a', 'b', 'c'] }], 'ctl', unwinnable);
    expect(unwinnable.join(' ')).toMatch(/no field/);
    const dupes: string[] = [];
    sweep([{ answer: 'a', opts: ['a', 'a', 'b'] }], 'ctl', dupes);
    expect(dupes.join(' ')).toMatch(/duplicate options/);
    const outOfRange: string[] = [];
    sweep([{ q: 'x', correct: 5, opts: ['a', 'b'] }], 'ctl', outOfRange);
    expect(outOfRange.join(' ')).toMatch(/out of range/);
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

/**
 * THE PRACTICE PROGRAMME — 109 banks, ~2,600 items, previously unguarded.
 *
 * Found by injecting a defect into each body of assessed content and running
 * the whole suite to see which ones noticed. Lessons were caught by
 * `content-validation`, dialogues by `dialogueScenarios`, graded stories by
 * `gradedStories` — and the drill banks by nothing at all. They are the
 * LARGEST and most recently authored body of graded content in the app, and
 * the corpus sweep above covers five modules, none of them these.
 *
 * A guard for this class already existed and read as covering it. That is the
 * "coverage is a ratio, not a list" lesson applied to an answer key: the file
 * names real shipped violations — an unwinnable CONDITIONAL item, duplicate
 * options in PADEZI_FULL and WordFamilies — while 2,600 items sat outside it.
 *
 * NOTHING IS BROKEN TODAY; all 109 banks pass. This is the ratchet.
 *
 * Checked STRICTLY rather than through `sweep`: ModeDrillItem always names its
 * key `answer`, so unlike the name-independent sweep above this can assert the
 * answer field specifically, instead of the weaker "some string field appears
 * among the options".
 */
describe('drill banks — answer-key integrity', () => {
  const MODULES = import.meta.glob('../data/drills/*.ts', { eager: true }) as Record<
    string,
    Record<string, unknown>
  >;

  type DrillItem = { q?: unknown; opts: string[]; answer?: unknown };
  const items: Array<{ where: string; it: DrillItem }> = [];
  for (const [file, mod] of Object.entries(MODULES)) {
    for (const [exp, val] of Object.entries(mod)) {
      if (!Array.isArray(val)) continue;
      val.forEach((raw, i) => {
        const it = raw as DrillItem;
        if (it && typeof it === 'object' && Array.isArray(it.opts))
          items.push({ where: `${file.split('/').pop()}:${exp}[${i}]`, it });
      });
    }
  }

  it('finds the banks and their items', () => {
    // Without this the three assertions below pass over an empty array — the
    // decorative-guard failure this repo keeps meeting. The figures are
    // cross-checked against CLAUDE.md's own "109 ModeDrill-backed drills".
    const banks = new Set(Object.keys(MODULES));
    expect(banks.size, 'the drill glob matched nothing — check the path').toBeGreaterThanOrEqual(
      100,
    );
    expect(items.length).toBeGreaterThan(2000);
  });

  it('every item declares an answer present among its own options', () => {
    // Graded by strict value equality, so an answer absent from `opts` makes
    // the item literally unwinnable: no option ever turns green.
    const bad = items
      .filter(({ it }) => typeof it.answer === 'string' && !it.opts.includes(it.answer))
      .map(
        ({ where, it }) =>
          `${where}: answer ${JSON.stringify(it.answer)} not in ${JSON.stringify(it.opts)}`,
      );
    expect(bad).toEqual([]);
  });

  it('every item has distinct options', () => {
    // A duplicated correct answer renders two winning buttons; a duplicated
    // distractor silently makes a 4-choice question a 3-choice one.
    const bad = items
      .filter(({ it }) => new Set(it.opts).size !== it.opts.length)
      .map(({ where, it }) => `${where}: ${JSON.stringify(it.opts)}`);
    expect(bad).toEqual([]);
  });

  it('every item offers a real choice', () => {
    const bad = items.filter(({ it }) => it.opts.length < 2).map(({ where }) => where);
    expect(bad).toEqual([]);
  });
});

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
