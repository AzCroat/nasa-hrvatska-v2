/**
 * passThresholdStatedAsCount.test.ts — tell the learner the NUMBER (2026-09-25).
 *
 * Owner report: _"8 out of 12 is 75%, you stated it wasn't, what the fuck?"_ —
 * 8/12 is 66.7%, 9 of 12 is the mark, and `passedLesson` uses `>=` so exactly 75%
 * passes. **The arithmetic was the app's and the app was right.** What it never did
 * was put the two numbers on screen in the same unit: it printed `8 / 12` and a
 * button reading "need 75%", and left the learner to convert. 117 hand-written
 * drills plus the engine did that, and **not one of them ever printed the count.**
 *
 * A percentage is the RULE; a count is what a learner can check against the score
 * in front of them. `MicroLessonScreen` had already learned this six days earlier
 * ("3 of 3 needed to log this lesson") and nothing carried it across — which is
 * this repo's most-repeated failure, a lesson living in one file.
 *
 * TWO SEPARATE DEFECTS WERE ON THAT SCREEN, and the second is why a learner who
 * PASSED could still be told off: the praise tier read `score >= total * 0.8`
 * against a 0.75 gate, so at exactly 9 of 12 — a pass — the line said "keep
 * practising". 108 files carried that. Two thresholds in one component, one of
 * them attached to nothing the learner's outcome depends on.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { LESSON_PASS_THRESHOLD } from '../lib/lessonGate';
import { join } from 'node:path';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx|jsx)$/.test(e)) out.push(p);
  }
  return out;
}
const FILES = walk('src/components').map((f) => [f, strip(readFileSync(f, 'utf8'))] as const);

describe('a pass threshold is stated as a count, not only a percentage', () => {
  it('the sweep reads a substantial number of components', () => {
    expect(FILES.length).toBeGreaterThan(400);
  });

  it('no learner-facing copy states the threshold as a bare percentage', () => {
    // The exact strings this shipped with, in 117 files: a retry button reading
    // "need 75%" and prose reading "you need 75% to complete".
    const bad: string[] = [];
    for (const [f, src] of FILES) {
      if (/need 75%/.test(src)) bad.push(`${f} — "need 75%"`);
      if (/75% to complete/.test(src)) bad.push(`${f} — "75% to complete"`);
    }
    expect(
      bad,
      'state the count the learner must reach — `retryNeedLabel(total)` or ' +
        '`itemsNeededToPass(total)` from lib/lessonGate — beside the score they can see. ' +
        'A percentage next to a fraction asks them to do arithmetic to find out whether ' +
        'they passed, and that is the report this guard exists for.',
    ).toEqual([]);
  });

  it('no score threshold sits ABOVE the pass gate', () => {
    // THE RULE IS DIRECTIONAL, and that is what makes it precise rather than a
    // blanket ban on second thresholds. The shipped defect was
    // `score >= total * 0.8` beside a 0.75 gate: a learner at exactly 9 of 12
    // PASSES and is told "keep practising", because 0.8 > 0.75. A threshold BELOW
    // the gate cannot do that — it can only give an encouraging line to someone
    // who did not pass, which is a different and much milder thing.
    //
    // So this admits the cases measured and read on 2026-09-25 and rejects the one
    // that shipped: `LevelQuiz`'s `passed = score >= Math.ceil(total * 0.7)` is its
    // own deliberate GATE (level quizzes pass at 70% and gate level progression via
    // stats.levelQuizPasses — a product decision, not praise), and the listening
    // screens' 0.6/0.7 bands sub-tier BENEATH their own `passed` branch.
    const bad: string[] = [];
    for (const [f, src] of FILES)
      for (const m of src.matchAll(/score\s*>=\s*(?:Math\.ceil\()?\s*[\w.()]+?\s*\*\s*(0\.\d+)/g)) {
        const factor = Number(m[1]);
        if (factor > LESSON_PASS_THRESHOLD)
          bad.push(`${f} — ${m[0].trim()} (${factor} > ${LESSON_PASS_THRESHOLD})`);
      }
    expect(
      bad,
      'a threshold above the pass gate can only ever contradict the verdict beside it: ' +
        'a learner who PASSED reads that they need more practice. Tier praise on ' +
        '`passed` / `passedLesson(score, total)`.',
    ).toEqual([]);
  });

  it('the helpers agree with the gate, and derive rather than restate it', () => {
    // If someone hardcodes 9 or 0.75 somewhere, this is the definition that moves.
    const gate = readFileSync('src/lib/lessonGate.ts', 'utf8');
    expect(gate).toMatch(/Math\.ceil\(total \* LESSON_PASS_THRESHOLD\)/);
    expect(gate).toMatch(/itemsNeededToPass\(total\)/);
  });
});
