/**
 * creditOnExit.ts — the derivation behind `creditFollowsWork.test.ts`.
 *
 * Finds every place `completeExercise` is called from a control whose handler also
 * NAVIGATES AWAY (`goBack()`), which is the shape that makes a drill's credit
 * conditional on which exit the learner chooses.
 */
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(__dirname, '../../..');

/** Line comments first, then blocks — sweep 72's order; prose must not satisfy a matcher. */
export const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

export function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(path.join(ROOT, dir))) {
    const rel = path.join(dir, e);
    if (fs.statSync(path.join(ROOT, rel)).isDirectory()) {
      if (e === 'tests' || e === '__mocks__') continue;
      walk(rel, out);
    } else if (e.endsWith('.tsx') || e.endsWith('.ts')) out.push(rel);
  }
  return out;
}

/**
 * True when this `completeExercise(` call sits inside an `onClick` (rather than an
 * effect or a named handler) AND the same handler leaves the screen.
 *
 * The two clauses are both needed and neither is sufficient:
 *  - `onClick` alone is not a defect: `BojeGame` and `ZnamGame` credit from the
 *    ADVANCE button of the final question, which is the act of finishing. They do not
 *    navigate; they move the learner onto the results view, where the credit is
 *    already recorded whichever way they then leave.
 *  - `goBack()` alone is not a defect either: an effect that credits and an exit
 *    button that navigates can legitimately live in one file.
 * It is the CONJUNCTION — pay only if you press the button that leaves — that makes
 * a second exit on the same view lose the learner's work.
 */
function creditsOnlyOnExit(src: string, at: number): boolean {
  const before = src.slice(Math.max(0, at - 1500), at);
  const oc = before.lastIndexOf('onClick');
  if (oc < 0) return false;
  if (before.lastIndexOf('useEffect') > oc) return false;
  if (before.lastIndexOf('function ') > oc) return false;
  // `goBack()` in the same handler, i.e. after the call and before the handler ends.
  // The window stops at the next onClick/useEffect so a sibling button's navigation
  // cannot be attributed to this handler.
  const after = src.slice(at, at + 1600);
  const gb = after.indexOf('goBack()');
  if (gb < 0) return false;
  const nextHandler = Math.min(
    ...['onClick', 'useEffect'].map((k) => {
      const i = after.indexOf(k, 1);
      return i < 0 ? after.length : i;
    }),
  );
  return gb < nextHandler;
}

/** Index just past the brace that closes the block opening at `open` (a `{`). */
function blockEnd(src: string, open: number): number {
  let depth = 0;
  let quote: string | null = null;
  for (let i = open; i < src.length; i++) {
    const c = src[i]!;
    if (quote) {
      if (c === quote && src[i - 1] !== '\\') quote = null;
    } else if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '{') depth++;
    else if (c === '}' && --depth === 0) return i + 1;
  }
  return src.length;
}

/**
 * THE SAME DEFECT BEHIND A NAMED HANDLER (2026-09-27). `creditsOnlyOnExit` reads an
 * inline `onClick={() => { … }}` and bails the moment a `function ` keyword sits
 * between the onClick and the credit — so `onClick={handleFinish}` with
 * `function handleFinish() { completeExercise(…); goBack(); }` was never judged.
 * GenderDrillScreen shipped exactly that (its whole completion behind "Finish & Save
 * Progress →", lost to the header's Back and the tab bar), found by a subagent census
 * rather than by this guard.
 *
 * Flagged when the call sits in a named function (declaration, or a `const` arrow /
 * useCallback) that ALSO calls `goBack()` after it, is wired to an `onClick`, and is
 * called from no `useEffect` — i.e. pressing that one button is the only way it runs.
 */
/**
 * THE LEAVING CAN SIT AT THE CALL SITE INSTEAD OF IN THE HANDLER (2026-09-27):
 * `onClick={() => { finish(); goBack(); }}` where `finish` holds the credit is the same
 * pay-and-leave button, and the rule above only looked for `goBack()` inside the handler.
 * Measured over the tree: zero members — False Friends was one mutation away from being
 * the first — so this is a ratchet, pinned by a synthetic control.
 */
function callerArrowLeaves(src: string, name: string): boolean {
  for (const m of src.matchAll(/onClick=\{\s*\(\)\s*=>\s*\{/g)) {
    const open = src.indexOf('{', m.index! + m[0].length - 1);
    const body = src.slice(open, blockEnd(src, open));
    if (body.includes('goBack()') && new RegExp(`\\b${name}\\(`).test(body)) return true;
  }
  return false;
}

function namedHandlerCreditsOnExit(src: string, at: number): boolean {
  const heads = [
    ...src.matchAll(
      /(?:function\s+(\w+)\s*\(|const\s+(\w+)\s*=\s*(?:useCallback\(\s*)?(?:async\s*)?\([^)]*\)\s*(?::\s*[\w<>[\]| ]+)?\s*=>\s*)/g,
    ),
  ].filter((h) => h.index! < at);
  for (let k = heads.length - 1; k >= 0; k--) {
    const h = heads[k]!;
    const name = h[1] ?? h[2]!;
    const open = src.indexOf('{', h.index! + h[0].length - 1);
    if (open < 0 || open > at) continue;
    const end = blockEnd(src, open);
    if (end <= at) continue; // this function closed before the call — not ours
    const leavesItself = src.slice(at, end).includes('goBack()');
    const wired = leavesItself
      ? new RegExp(`onClick=\\{\\s*(?:\\(\\)\\s*=>\\s*)?${name}\\b`).test(src)
      : callerArrowLeaves(src, name);
    if (!wired) return false;
    for (const e of src.matchAll(/useEffect\(/g)) {
      const b = src.indexOf('{', e.index!);
      if (b >= 0 && new RegExp(`\\b${name}\\(`).test(src.slice(b, blockEnd(src, b)))) return false;
    }
    return true;
  }
  return false;
}

/**
 * Every call that records credit for finished work. `completeExercise` is the single
 * authority, but nine screens grade and award themselves and never reach it — and they
 * had the identical defect, so a rule that watched only the authority would have found
 * twelve of twenty-one. Each of these is a WRITE a learner loses if it does not run.
 *
 * `completeLesson(` WAS MISSING FROM THIS LIST AND THAT COST THREE MORE SCREENS
 * (2026-09-26). It is a thin wrapper over `completeExercise` living in another module,
 * so a caller of it contains neither the authority's name nor any of the hand-rolled
 * writes — invisible to every entry above while being exactly the same act. Three
 * lesson screens (`TensesScreen`, `DeclensionScreen`, `FutureTenseLessonScreen`) shipped
 * the defect through it, and `sessionSlotsCanFinish.test.ts` had known the name existed
 * since the day before. **A wrapper is not covered by a rule that names what it wraps**:
 * when a new module fronts a writer here, add the front door too.
 */
const CREDIT_WRITERS = [
  'completeExercise(',
  'completeLesson(',
  'award(',
  'markQuest(',
  'recordExerciseOutcome(',
  'recordSrsReview(',
  'recordMasteryEvent(',
];

/** Repo-relative paths that credit an exercise only when the learner takes one exit. */
export function creditGatedOnExit(files: string[] = walk('src')): string[] {
  const out: string[] = [];
  for (const f of files) {
    const src = strip(fs.readFileSync(path.join(ROOT, f), 'utf8'));
    let hit = false;
    for (const w of CREDIT_WRITERS) {
      if (hit) break;
      if (!src.includes(w)) continue;
      const re = new RegExp(w.replace('(', '\\('), 'g');
      for (const m of src.matchAll(re)) {
        if (creditsOnlyOnExit(src, m.index!) || namedHandlerCreditsOnExit(src, m.index!)) {
          out.push(f);
          hit = true;
          break;
        }
      }
    }
  }
  return out.sort();
}

/** Files that call `completeExercise` at all — the population this rule judges. */
export function completionCallers(files: string[] = walk('src')): string[] {
  return files
    .filter((f) => strip(fs.readFileSync(path.join(ROOT, f), 'utf8')).includes('completeExercise('))
    .sort();
}
