/**
 * pathGateThreshold.test.tsx — a LEARN_PATH node must be earned, not attended.
 *
 * THE DEFECT. Five screens wrote a `vs` key that a LEARN_PATH `ckRule` reads,
 * incremented lc/gc and paid XP on their Finish button, with no reference to
 * the score. A learner who got 0 of 8 listening questions right still marked
 * the `listening` node complete and still collected 10 XP.
 *
 * NONE of the five is in BLACK_HOLE_SCREENS, and that is what makes them a
 * defect rather than a design. The dwell-credited screens (`dialects`,
 * `readlist`, `writing`, `history`, …) credit on 20 seconds of presence ON
 * PURPOSE — they are informational. These five score the learner and then
 * ignored the score, which is exactly the state `AnimatedLesson` was in before
 * the mastery-check directive.
 *
 * THAT LIST NAMED THREE SCREENS THAT DID NOT BELONG IN IT, and the error was
 * the sweep's, not the data's: it subtracted the dwell-credited screens without
 * asking whether each was actually informational. `alphabet`, `techvoc` and
 * `falsefr` each have a built-in completion control that writes its own vs key
 * and its own lc — so the launcher's pre-write was suppressing that credit, not
 * standing in for it. All three left BLACK_HOLE_SCREENS on 2026-09-23; see
 * dwellPreWriteSuppression.test.tsx.
 *
 * HOW THE CLASS WAS FOUND, and how badly the first measurement lied: a sweep
 * for "writes completion state with no gate" returned 37 screens. That number
 * was a property of the sweep — for a practice drill, completing one you did
 * badly at is correct. Filtering to screens whose key gates the PATH, then
 * subtracting the dwell-credited ones, left these five. The first version of
 * that filter extracted ZERO `ckRule` keys (it matched a `ck(s)` function shape
 * the data does not use) and reported "not a path gate" for all nineteen
 * candidates — it would have read as a clean class.
 *
 * THE RULE IS `completeExercise`'s, NOT A NEW ONE. On a fail nothing is
 * recorded: no XP, no `vs`, no lc/gc, no quest, no coupling clear. These
 * screens credit `vs` themselves rather than routing through that function
 * (see PitchAccentScreen's own comment), so the gate is applied in place —
 * but `passedLesson` is imported from `lessonGate`, never re-implemented, so
 * there is exactly one definition of "passed" in the app.
 *
 * SHADOWING IS THE INTERESTING ONE. It had no session score at all — it paid
 * `items.length * 3 + 5`, a function of how many sentences EXISTED. Its only
 * competence signal is a per-item acoustic score that is `null` whenever the
 * scorer is unavailable. So its gate counts only items the scorer actually
 * scored, and `scoredItems === 0` PASSES: the app's standing rule is that a
 * learner is never failed for their microphone (the same reason the line above
 * its accumulator already treats `null` as a pass for the speaking ledger).
 * Gating it on a measurement that may never arrive would have been the
 * inversion of this defect, not its fix.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { LESSON_PASS_THRESHOLD, passedLesson } from '../lib/lessonGate';

/**
 * Strip comments AND collapse whitespace runs to a single space.
 *
 * THE COLLAPSE IS LOAD-BEARING, and CI taught me so. These assertions pin
 * source text, and Prettier runs on commit — so the tree the suite is run
 * against locally is NOT the tree that gets committed. Prettier reflowed
 *
 *   if (scoredItems.current > 0 && !passedLesson(scoredOk.current, …)) {
 *
 * across three lines, and two single-line regexes that had just passed went
 * red on the first CI run. A source pin that depends on where the formatter
 * chose to break a line tests the formatter, not the code. Matching against
 * whitespace-normalised source removes the dependency entirely.
 */
const strip = (s: string) =>
  s
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
    .replace(/\s+/g, ' ');

/** The five screens and the LEARN_PATH key each one writes. */
const GATED = [
  ['src/components/practice/ListeningScreen.tsx', 'listening'],
  ['src/components/practice/ShadowingScreen.tsx', 'shadowing'],
  ['src/components/practice/PitchAccentScreen.tsx', 'pitchaccent'],
  ['src/components/learn/PitchAccentMastery.tsx', 'pitch_accent'],
  ['src/components/learn/GrammarConstellation.tsx', 'grammarmap'],
] as const;

const src = (f: string) => strip(readFileSync(f, 'utf8'));

describe('the derivation is real', () => {
  it('every key these screens write is actually read by a LEARN_PATH ckRule', () => {
    // If this ever comes back empty, every assertion below is vacuous — which
    // is exactly what the first version of the sweep did.
    const lp = readFileSync('functions/api/content/_data/learnPath.js', 'utf8');
    const vsKeys = new Set([...lp.matchAll(/vsIncludes:\s*'([^']+)'/g)].map((m) => m[1]!));
    expect(vsKeys.size).toBeGreaterThan(20);
    for (const [, key] of GATED) {
      expect(vsKeys.has(key), `${key} is no longer a LEARN_PATH gate — re-check this file`).toBe(
        true,
      );
    }
  });

  it('none of the five is dwell-credited, which is why they must gate', () => {
    // A BLACK_HOLE screen credits on 20s of presence by design; gating one
    // would contradict the dwell mechanism rather than fix anything.
    const bh = readFileSync('src/lib/blackHoleScreens.ts', 'utf8');
    const black = new Set(
      [...bh.matchAll(/^ {2}([a-zA-Z0-9_]+):\s*'(?:lc|gc)'/gm)].map((m) => m[1]!),
    );
    expect(black.size).toBeGreaterThan(5);
    for (const [, key] of GATED) {
      expect(black.has(key), `${key} IS dwell-credited — gating it is wrong`).toBe(false);
    }
  });
});

describe('every one of the five gates on the shared threshold', () => {
  it.each(GATED)('%s imports the shared gate rather than restating it', (file) => {
    const s = src(file);
    expect(s).toMatch(/import\s*\{\s*passedLesson\s*\}\s*from\s*'[^']*lessonGate'/);
    // A hardcoded ratio here would be a second definition of "passed" — the
    // drift this codebase keeps rediscovering.
    expect(s).not.toMatch(/>=\s*0\.75/);
  });

  it.each(GATED)('%s calls passedLesson and still writes its path key', (file, key) => {
    const s = src(file);
    expect(s).toMatch(/passedLesson\(/);
    expect(s).toContain(`'${key}'`);
    // NOTE: ordering is deliberately NOT asserted textually. A first draft
    // "proved" the gate precedes the write with an index comparison that was
    // meaningless (`lastIndexOf(...) + 1 || Infinity` is Infinity only when the
    // string is absent) — it passed whatever the code did. What the gate
    // actually does is established by mutation instead: removing it from any
    // of the five fails tests in this file.
  });

  it.each(GATED)('%s renders the shared fail notice', (file) => {
    expect(src(file)).toMatch(/<PassGateNotice/);
  });

  /**
   * THE CREDIT PATH, NAMED PER SCREEN — and this block exists because the
   * file-level assertions above were DECORATIVE for one of the five.
   *
   * Deleting GrammarConstellation's credit-path gate entirely failed ZERO
   * tests: the file still contained `passedLesson(` and `<PassGateNotice`,
   * because its RENDER branch calls the gate too. "The file mentions the gate"
   * and "the write is behind the gate" are different claims, and only the
   * second one matters. Each entry below is the exact expression standing
   * between the score and the `vs`/XP write on that screen.
   */
  const CREDIT_GUARD: Array<[string, RegExp]> = [
    [
      'src/components/learn/GrammarConstellation.tsx',
      /if \(!passedLesson\(fs, shuffledQuiz\.length\)\) return;/,
    ],
    ['src/components/practice/ListeningScreen.tsx', /const passed = passedLesson\(/],
    ['src/components/practice/PitchAccentScreen.tsx', /const passedGate = passedLesson\(/],
    [
      'src/components/learn/PitchAccentMastery.tsx',
      /if \(!passedLesson\(courseCorrect\.current, courseTotal\.current\)\) \{/,
    ],
    [
      'src/components/practice/ShadowingScreen.tsx',
      /if \( ?scoredItems\.current > 0 && !passedLesson\(/,
    ],
  ];

  it.each(CREDIT_GUARD)('%s guards the WRITE, not just the render', (file, re) => {
    expect(src(file), `${file} lost the gate on its credit path`).toMatch(re);
  });
});

describe('the threshold itself', () => {
  it('is the one the lessons use', () => {
    expect(LESSON_PASS_THRESHOLD).toBe(0.75);
  });

  it('5 of 6 passes and 4 of 6 does not — the lesson-check numbers', () => {
    expect(passedLesson(5, 6)).toBe(true);
    expect(passedLesson(4, 6)).toBe(false);
  });

  it('0 of 8 does not pass, which is the case that started this', () => {
    expect(passedLesson(0, 8)).toBe(false);
    expect(passedLesson(6, 8)).toBe(true);
  });

  it('an empty denominator is not a pass', () => {
    expect(passedLesson(0, 0)).toBe(false);
  });
});

describe('Shadowing never fails a learner for their microphone', () => {
  const s = src('src/components/practice/ShadowingScreen.tsx');

  it('counts only items the acoustic scorer actually scored', () => {
    expect(s).toMatch(/if \(acousticScore !== null\) \{/);
    expect(s).toMatch(/scoredItems\.current \+= 1/);
    expect(s).toMatch(/if \(acousticScore >= 70\) scoredOk\.current \+= 1/);
  });

  it('passes outright when nothing could be scored', () => {
    // `scoredItems.current > 0 &&` is the whole guarantee: no mic, no scorer,
    // no Web Speech -> no denominator -> no gate. Removing that clause would
    // lock every keyboard-only learner out of the `shadowing` path node.
    expect(s).toMatch(/scoredItems\.current > 0 && !passedLesson\(/);
  });

  it('reuses the 70 bar the speaking ledger already uses, not a new one', () => {
    expect(s).toMatch(/acousticScore === null \|\| acousticScore >= 70/);
  });
});

describe('PitchAccentMastery gates on the WHOLE course', () => {
  const s = src('src/components/learn/PitchAccentMastery.tsx');

  it('accumulates across accents, because quizScore resets per accent', () => {
    // setQuizScore(0) runs inside nextAccent, so the last accent's score alone
    // would judge a four-part course on its final section.
    expect(s).toMatch(/courseCorrect\.current \+= quizScore/);
    expect(s).toMatch(/courseTotal\.current \+= accent\.quiz\.length/);
    expect(s).toMatch(/setQuizScore\(0\)/);
  });

  it('gates finishCourse on the cumulative totals', () => {
    expect(s).toMatch(/passedLesson\(courseCorrect\.current, courseTotal\.current\)/);
  });

  it('a retry resets the cumulative totals too', () => {
    // Otherwise a second attempt is judged on both attempts' answers.
    expect(s).toMatch(/courseCorrect\.current = 0/);
    expect(s).toMatch(/courseTotal\.current = 0/);
  });
});

describe('the fail state tells the learner where they stand', () => {
  it('names the score, the bar, and that nothing was recorded', () => {
    const s = readFileSync('src/components/shared/PassGateNotice.tsx', 'utf8');
    expect(s).toMatch(/Nothing was recorded/);
    expect(s).toMatch(/LESSON_PASS_THRESHOLD/);
    expect(s).toMatch(/data-testid="pass-gate-retry"/);
    // And always a way out — a learner who cannot reach 75% today must still
    // be able to leave the screen.
    expect(s).toMatch(/data-testid="pass-gate-leave"/);
  });
});
