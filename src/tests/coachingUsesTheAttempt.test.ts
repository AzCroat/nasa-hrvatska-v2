/**
 * coachingUsesTheAttempt.test.ts — coach the attempt, not the target (2026-09-25).
 *
 * Owner report: _"AI coaching provided feedback once and never changed after
 * that."_ It was not caching and not stale state (`setCoaching(null)` runs on every
 * new attempt). The coach simply had nothing to go on:
 *
 *   1. `parseAzureResponse` DROPPED Azure's recognised text, so the client had no
 *      transcript on the acoustic path.
 *   2. So `PronunciationScorer` passed `targetText` as `spoken` — telling the coach
 *      the learner had said the phrase exactly.
 *   3. `/api/pronunciation-coach` then ran `analyzeCroatianPhonemes(word, spoken)`,
 *      which compares the two strings. Identical strings → no issues found →
 *      `phonemeContext` empty.
 *   4. The prompt's only remaining variable was the score, which selects one of
 *      three fixed `performanceContext` sentences.
 *
 * So for one phrase, every attempt in the same score band produced the same
 * paragraph — while Azure's per-phoneme measurements sat in the response, already
 * parsed, already rendered as a "worst phoneme" tip two components away.
 *
 * The prompt was also misdescribing its input: it stated unconditionally that the
 * score is "Levenshtein string distance, not a phonetic score", which is true of
 * the Web Speech path and false of the acoustic one.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const ASSESS = strip(readFileSync('functions/api/pronunciation-assess.js', 'utf8'));
const COACH = strip(readFileSync('functions/api/pronunciation-coach.js', 'utf8'));
const CLIENT = strip(readFileSync('src/components/shared/PronunciationScorer.tsx', 'utf8'));

describe('the pronunciation coach is given the learner attempt', () => {
  it('the assess endpoint forwards what Azure actually heard', () => {
    expect(ASSESS, 'the recognised text must be parsed out of the NBest entry').toMatch(
      /const recognized = nbest\.Display \|\| nbest\.Lexical/,
    );
    expect(ASSESS, 'and returned to the client').toMatch(/word_scores,\s*recognized/);
  });

  it('the client sends the recognised text, NOT the target, as `spoken`', () => {
    // The exact defect: `fetchCoaching(targetText, overallScore)`.
    expect(
      /fetchCoaching\(\s*targetText\s*,/.test(CLIENT),
      'passing targetText as the spoken text tells the coach the learner was perfect',
    ).toBe(false);
    expect(CLIENT).toMatch(/fetchCoaching\(\s*recognizedTextOf\(data\)\s*\|\|\s*targetText/);
  });

  it('the client sends the MEASURED weak phonemes and says the score is acoustic', () => {
    expect(CLIENT).toMatch(/phonemes:\s*weakPhonemesOf\(data\)/);
    expect(CLIENT).toMatch(/scoreKind:\s*'acoustic'/);
    // The Web Speech path must NOT claim an acoustic score — it has a string
    // similarity, and the prompt describes the two differently on purpose.
    expect(CLIENT).toMatch(/scoreKind:\s*detail\?\.scoreKind \?\? 'text-similarity'/);
  });

  it('the coach endpoint reads them and leads with the measurement', () => {
    expect(COACH).toMatch(/const \{ word, spoken, score, level, phonemes, scoreKind \} = body;/);
    expect(COACH, 'measured scores must reach the prompt').toMatch(/measuredContext/);
    expect(COACH).toMatch(/ACOUSTICALLY MEASURED per-phoneme accuracy/);
  });

  it('the coach describes the score honestly for each path', () => {
    // One branch per kind. The unconditional "Levenshtein" sentence was a false
    // statement to the model on every acoustic attempt.
    expect(COACH).toMatch(/scoreKind === 'acoustic'/);
    const m = /const scoreLine =([\s\S]*?);\n/.exec(COACH);
    expect(m, 'scoreLine must exist').toBeTruthy();
    expect(m![1], 'the acoustic arm must not call it a text comparison').toMatch(
      /real measurement/,
    );
    expect(m![1], 'the text arm keeps the honest Levenshtein wording').toMatch(/Levenshtein/);
  });

  it('a phoneme list from the client is bounded and sanitised', () => {
    // It reaches a prompt, so it is learner-influenced input: clamp the score,
    // cap the length, sanitise the symbol.
    expect(COACH).toMatch(/\.slice\(0, 6\)/);
    expect(COACH).toMatch(/sanitizeParam\(String\(p\.phoneme\), 12\)/);
    expect(COACH).toMatch(/Math\.min\(Math\.max\(Math\.round\(Number\(p\.score\)\), 0\), 100\)/);
  });
});
