/**
 * SWEEP 113 — THE APP HAS TWO SCORE SCALES, AND THE LEDGER ACCEPTS ONLY ONE.
 *
 * `MasteryEvent.score` is documented `0..1`. Its value feeds the EWMA that
 * `weakestProductionKind` / `weakestReceptiveKind` read, which is what the
 * recommender and the P2.8 input slot point a learner at — so a score written on
 * the wrong scale does not look broken, it looks like MASTERY: one raw 0–100
 * write drags the EWMA toward 1.0 and that skill stops being offered.
 *
 * The two scales, both real, established by reading the PROMPTS rather than
 * assuming the convention:
 *
 * | producer                                   | scale     |
 * | ------------------------------------------ | --------- |
 * | `/api/correct` mode `writeeval`            | **0–100** |
 * | `speaking-rubric` / `speaking-coach`       | **0.0–1.0** |
 *
 * So `/100` is REQUIRED on the writing path and WRONG on the speaking path, and
 * a guard cannot demand either one — it can only demand that the value reaching
 * the ledger is bounded to 0..1 by something.
 *
 * Measured when written: five non-test call sites, all compliant — three writing
 * sites `Math.max(0, Math.min(1, data.score / 100))`, `speakingCoach` clamping an
 * already-0..1 rubric value, and `whisperClaudeScorer` passing
 * `computeSpeakingOverall(...)`, which ends in `clamp01`. That last one is why
 * this guard follows ONE hop into a helper instead of exempting it: an exemption
 * would assert a bound nothing checks.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const stripComments = (s: string) =>
  s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

/** Every non-test source file, comment-stripped: prose naming a clamp must not satisfy this. */
const SRC = new Map<string, string>();
for (const f of globSync('src/**/*.{ts,tsx}')) {
  if (/(^|\/)(tests|__tests__)\//.test(f) || /\.test\./.test(f)) continue;
  SRC.set(f, stripComments(readFileSync(f, 'utf8')));
}

const LEDGER = 'src/lib/masteryLedger.ts';

/** An expression is bounded when it clamps inline. */
const BOUNDS_INLINE =
  /Math\.min\s*\(\s*1\s*,|Math\.min\s*\(\s*[^,)]+,\s*1\s*\)|\bclamp01\s*\(|\/\s*100\b/;

/** `score:` argument of every recordMasteryEvent call, with its file. */
function scoreExpressions(): { file: string; expr: string }[] {
  const out: { file: string; expr: string }[] = [];
  for (const [f, s] of SRC) {
    // THE MODULE THAT DEFINES THE CONTRACT IS NOT A CONSUMER OF IT. The ledger's
    // own three wrappers bound their scores SEMANTICALLY (`score / total` behind a
    // `total > 0` guard; `correct ? 1 : 0`; and `recordExamSkillScores`, which
    // forwards a caller's SkillScores — verified 0..1 at its one caller). A
    // syntactic guard cannot check a semantic bound, so it would have to take
    // those on trust — an exemption resting on my word, which is the shape this
    // repo keeps finding rotten. Excluded by SCOPE, and the scope is pinned below
    // so a NEW internal caller fails rather than inheriting the carve-out.
    if (f === LEDGER) continue;
    for (const m of s.matchAll(/recordMasteryEvent\s*\(\s*\{/g)) {
      // the object literal, brace-matched
      let depth = 0;
      let end = -1;
      for (let i = m.index! + m[0].length - 1; i < s.length; i++) {
        const c = s[i]!;
        if (c === '{') depth++;
        else if (c === '}') {
          depth--;
          if (depth === 0) {
            end = i;
            break;
          }
        }
      }
      if (end < 0) continue;
      const body = s.slice(m.index! + m[0].length, end);
      const sm =
        body.match(/\bscore\s*:\s*([^\n]+?),?\s*$/m) ?? body.match(/\bscore\s*:\s*([^,\n]+)/);
      if (sm) out.push({ file: f, expr: sm[1]!.trim() });
    }
  }
  return out;
}

/**
 * Bounded either inline, or by ONE hop: the expression is a call to a function
 * whose own body clamps. Deliberately one hop — deeper would let any transitive
 * `Math.min` in a large module satisfy it, which is the `lib/` walk hole.
 */
function boundedVia(expr: string): 'inline' | 'helper' | null {
  if (BOUNDS_INLINE.test(expr)) return 'inline';
  const call = expr.match(/^([A-Za-z_$][\w$]*)\s*\(/);
  const name = call ? call[1]! : expr.match(/^([A-Za-z_$][\w$]*)$/)?.[1];
  if (!name) return null;
  for (const [, s] of SRC) {
    const decl = new RegExp(
      `(?:export\\s+)?function\\s+${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\(`,
    );
    const m = s.match(decl);
    if (!m) continue;
    let depth = 0;
    const open = s.indexOf('{', m.index! + m[0].length - 1);
    if (open < 0) continue;
    let end = -1;
    for (let i = open; i < s.length; i++) {
      const c = s[i]!;
      if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }
    if (end > 0 && BOUNDS_INLINE.test(s.slice(open, end))) return 'helper';
  }
  return null;
}

/**
 * `score: overall` where `const overall = computeSpeakingOverall(scores)` is what
 * the compliant speaking path actually looks like, so ONE local-const hop is
 * required for the guard to describe the corpus rather than an idealised version
 * of it. Bounded to one hop and to the SAME file: following further would let any
 * clamp anywhere in a large module satisfy it, which is the `lib/`-walk hole.
 */
function boundedForSite(file: string, expr: string): 'inline' | 'helper' | 'local' | null {
  const direct = boundedVia(expr);
  if (direct) return direct;
  const name = expr.match(/^([A-Za-z_$][\w$]*)$/)?.[1];
  if (!name) return null;
  const src = SRC.get(file);
  if (!src) return null;
  const m = src.match(
    new RegExp(
      `\\b(?:const|let)\\s+${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*=\\s*([^;\\n]+)`,
    ),
  );
  return m && boundedVia(m[1]!.trim()) ? 'local' : null;
}

describe('every mastery-ledger score is bounded to the 0..1 the ledger documents', () => {
  const sites = scoreExpressions();

  it('the derivation finds the real call sites', () => {
    // Five when written. A floor, so a matcher that stops matching the call
    // cannot pass by finding nothing — the vacuity this repo keeps re-learning.
    expect(sites.length).toBeGreaterThanOrEqual(5);
    for (const s of sites) expect(s.expr.length).toBeGreaterThan(0);
    // Both the writing and the speaking family are represented, so the guard is
    // not measuring one scale only.
    expect(sites.some((s) => /WritingScreen|GuidedWriting|LessonProduce/.test(s.file))).toBe(true);
    expect(sites.some((s) => /speakingCoach|whisperClaudeScorer/.test(s.file))).toBe(true);
  });

  it('non-vacuity: the predicate rejects a raw 0–100 expression and accepts a clamped one', () => {
    expect(boundedVia('data.score')).toBe(null);
    expect(boundedVia('Math.max(0, Math.min(1, data.score / 100))')).toBe('inline');
    expect(boundedVia('computeSpeakingOverall(scores)')).toBe('helper');
    // the local-const hop, on the real file that needs it
    expect(boundedForSite('src/lib/speaking/whisperClaudeScorer.ts', 'overall')).toBe('local');
    expect(boundedForSite('src/lib/speaking/whisperClaudeScorer.ts', 'data.score')).toBe(null);
  });

  it('no call site hands the ledger an unbounded score', () => {
    const bad = sites
      .filter((s) => boundedForSite(s.file, s.expr) === null)
      .map((s) => `${s.file}: score: ${s.expr}`);
    expect(
      bad,
      'The ledger documents score as 0..1 and its EWMA is what the recommender ' +
        'reads. `/api/correct` returns 0–100 while the speaking rubrics return ' +
        '0.0–1.0, so a raw score from the wrong family does not look broken — it ' +
        'looks like mastery, and that skill stops being offered.\n' +
        bad.map((b) => `  - ${b}`).join('\n'),
    ).toEqual([]);
  });

  it('THE LEDGER CLAMPS, WHICH IS WHY THE CALL SITE IS THE ONLY PLACE THIS SHOWS', () => {
    // I first asserted the ledger does NOT clamp, reasoning that a clamp there
    // would hide a mis-scale. It DOES clamp — and reading that inverted the
    // rationale for the better: a raw 0–100 score is silently folded in as a
    // PERFECT 1.0, so nothing downstream looks broken and the EWMA simply reports
    // mastery. The backstop is right to exist; it is also why a guard at the
    // ledger could never catch this and one at the call sites can.
    const led = SRC.get(LEDGER)!;
    expect(led).toMatch(/Math\.max\(0,\s*Math\.min\(1,\s*ev\.score\)\)/);
  });

  it('the ledger module has exactly the three internal wrappers this scope excludes', () => {
    // The excluded scope cannot silently grow: a fourth internal caller fails
    // here and gets read, rather than inheriting an exemption nobody wrote.
    const led = SRC.get(LEDGER)!;
    expect([...led.matchAll(/recordMasteryEvent\s*\(\s*\{/g)]).toHaveLength(3);
    for (const w of ['recordExerciseOutcome', 'recordSrsOutcome', 'recordExamSkillScores'])
      expect(led).toContain(`export function ${w}`);
  });
});
