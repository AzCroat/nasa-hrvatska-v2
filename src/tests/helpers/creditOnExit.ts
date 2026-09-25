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

/**
 * Every call that records credit for finished work. `completeExercise` is the single
 * authority, but nine screens grade and award themselves and never reach it — and they
 * had the identical defect, so a rule that watched only the authority would have found
 * twelve of twenty-one. Each of these is a WRITE a learner loses if it does not run.
 */
const CREDIT_WRITERS = [
  'completeExercise(',
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
        if (creditsOnlyOnExit(src, m.index!)) {
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
