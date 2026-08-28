// src/lib/curriculum.ts
//
// THE SEQUENCING ENGINE (Wave 1, 2026-08-28).
//
// Picks the one lesson a learner should be taught next. Pure, read-only compute
// over the spine the client already holds — the same posture as nextStep.ts, and
// for the same reason: a recommendation engine that reads or writes state is a
// recommendation engine that can corrupt it.
//
// THE PROBLEM THIS FILE EXISTS TO SOLVE
// ------------------------------------
// Lesson selection used to be "least-recently-served, unlocked at this CEFR".
// That is rotation, not pedagogy: it could serve the genitive deep-dive to
// someone who had never met the concept of a case.
//
// THE MIGRATION TRAP, AND HOW IT IS ANSWERED
// ------------------------------------------
// On the day this ships, EVERY existing learner has zero completed lessons —
// the record simply did not exist before. A naive "first incomplete lesson in
// spine order" would greet a certified C1 learner with A1 lesson 1, which is
// insulting and would read as a bug.
//
// Two ways to fix that, and only one is honest:
//
//   * Backfill completion records for everything below their level. This writes
//     a claim into synced storage that the learner completed lessons they never
//     opened. It is a lie in the data, it propagates to every device, and it can
//     never be distinguished later from a real completion.
//
//   * INFER from certification. A prerequisite counts as satisfied when it is
//     completed OR when its level sits strictly below the learner's certified
//     level. Nothing is written; the inference is recomputed every time and
//     disappears the moment the evidence does.
//
// The second is implemented here. It also respects the existing arbiter: the
// certification gate decides what a learner knows, and this engine reads that
// decision rather than forming its own.
//
// THE NULL CONTRACT — a deliberate refinement of docs/curriculum-design.md
// -----------------------------------------------------------------------
// The design document said "never null", by analogy with getNextStep. That is
// right in spirit and wrong in one case: when the spine has not loaded there is
// no lesson to name, and inventing an id would be worse than admitting it.
//
// So the contract is: **never null whenever the spine is non-empty.** A null
// return means only "there is no curriculum data", and the caller's answer is to
// omit the teaching slot and compose the session exactly as it did before this
// existed — a path that has never stranded anyone. Absence of data is reported,
// never papered over.

import type { CEFRLevel as CefrLevel } from '../types';

export interface CurriculumEntry {
  id: string;
  level: CefrLevel;
  order: number;
  prerequisites: string[];
  objectives: string[];
  /** Display metadata carried on the spine payload. */
  title?: string;
  subtitle?: string;
  icon?: string;
  duration?: string;
}

export interface CurriculumStep {
  entry: CurriculumEntry;
  /** True when re-serving an already-completed lesson because the spine ran out. */
  isReview: boolean;
  /**
   * Why this lesson, in words a learner can check against reality. Authored from
   * facts the engine actually has — never a measured-sounding claim it invented.
   */
  reason: string;
}

const RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };
const LEVELS: readonly CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export interface NextLessonInput {
  /** The whole spine, any order. */
  spine: readonly CurriculumEntry[];
  /** Lesson ids the learner has actually completed. */
  completed: ReadonlySet<string> | readonly string[];
  /** The learner's certified level — the arbiter of what they already know. */
  certifiedLevel: CefrLevel;
  /**
   * Highest level whose content is unlocked. Usually equal to or one above the
   * certified level; the verification gate can hold it lower.
   */
  unlockedLevel?: CefrLevel;
}

function asSet(v: ReadonlySet<string> | readonly string[]): ReadonlySet<string> {
  return v instanceof Set ? v : new Set(v as readonly string[]);
}

function byOrder(a: CurriculumEntry, b: CurriculumEntry): number {
  return a.order - b.order;
}

/**
 * Is this prerequisite satisfied?
 *
 * Completed outright, or its level sits strictly below what the learner is
 * certified at — see the migration note at the top of this file. Prerequisites
 * naming a lesson that is not in the spine are treated as satisfied rather than
 * as a permanent block: a typo in the data must not be able to wall a learner
 * out of their own curriculum. The structural test catches the typo instead.
 */
function prereqMet(
  id: string,
  completed: ReadonlySet<string>,
  byId: Map<string, CurriculumEntry>,
  certifiedLevel: CefrLevel,
): boolean {
  if (completed.has(id)) return true;
  const e = byId.get(id);
  if (!e) return true;
  return (RANK[e.level] ?? 0) < (RANK[certifiedLevel] ?? 0);
}

function unblocked(
  e: CurriculumEntry,
  completed: ReadonlySet<string>,
  byId: Map<string, CurriculumEntry>,
  certifiedLevel: CefrLevel,
): boolean {
  return e.prerequisites.every((p) => prereqMet(p, completed, byId, certifiedLevel));
}

/**
 * The one lesson to teach next.
 *
 * Rungs, each degrading to the next:
 *   1. the learner's own level — first incomplete, unblocked lesson in spine order
 *   2. the next level up, when their own spine is finished and content is unlocked
 *   3. review — re-serve a completed lesson, clearly flagged, never dressed as new
 *
 * THERE IS DELIBERATELY NO "GO BACK AND FILL A GAP" RUNG. The design document
 * proposed one, for a learner blocked by a foundation they skipped. It cannot
 * exist alongside the certification inference: everything below the learner's
 * certified level is already treated as known, so such a rung could only ever
 * serve lessons they are certified past. Written and then caught by test, it sent
 * a C2 learner to A1 lesson 1 — precisely the bug rung 1 exists to prevent.
 *
 * @returns the step, or null ONLY when the spine is empty (see the null contract).
 */
export function getNextLesson(input: NextLessonInput): CurriculumStep | null {
  const spine = Array.isArray(input.spine) ? input.spine : [...input.spine];
  if (spine.length === 0) return null;

  const completed = asSet(input.completed);
  const byId = new Map(spine.map((e) => [e.id, e]));
  const certified = RANK[input.certifiedLevel] === undefined ? 'A1' : input.certifiedLevel;
  const unlocked =
    input.unlockedLevel && RANK[input.unlockedLevel] !== undefined
      ? input.unlockedLevel
      : certified;

  const atLevel = (lv: CefrLevel) => spine.filter((e) => e.level === lv).sort(byOrder);

  // ── Rung 1: the learner's own level ──────────────────────────────────────
  const own = atLevel(certified);
  const nextOwn = own.find((e) => !completed.has(e.id) && unblocked(e, completed, byId, certified));
  if (nextOwn) {
    return {
      entry: nextOwn,
      isReview: false,
      // Positional, and true by construction: this is lesson N of M in the level.
      reason: `Lesson ${nextOwn.order} of ${own.length} in ${certified}`,
    };
  }

  // ── Rung 2: the next level up, if its content is unlocked ─────────────────
  const nextLevel: CefrLevel | undefined = LEVELS[(RANK[certified] ?? 0) + 1];
  if (nextLevel && (RANK[nextLevel] ?? 99) <= (RANK[unlocked] ?? 0)) {
    const up = atLevel(nextLevel);
    const nextUp = up.find((e) => !completed.has(e.id) && unblocked(e, completed, byId, certified));
    if (nextUp) {
      return {
        entry: nextUp,
        isReview: false,
        reason: `Starting ${nextLevel}: lesson ${nextUp.order} of ${up.length}`,
      };
    }
  }

  // ── Rung 3: review ────────────────────────────────────────────────────────
  // The spine is exhausted for this learner. Re-serve, but say so — a completed
  // lesson presented as new is the kind of small dishonesty that makes a learner
  // stop trusting the whole app. Prefer their own level, else anything completed,
  // else the very first lesson (a learner with an empty spine at their level and
  // nothing completed anywhere).
  const reviewPool = own.length > 0 ? own : spine.slice().sort(byOrder);
  const completedFirst = reviewPool.filter((e) => completed.has(e.id));
  const pick = (completedFirst.length > 0 ? completedFirst : reviewPool)[0];
  if (!pick) return null;
  return {
    entry: pick,
    isReview: true,
    reason: `Review: ${certified} complete for now`,
  };
}

/**
 * Progress through one level, for display. Counts only REAL completions —
 * the certification inference unblocks lessons, it does not claim they were done.
 */
export function levelProgress(
  spine: readonly CurriculumEntry[],
  completed: ReadonlySet<string> | readonly string[],
  level: CefrLevel,
): { done: number; total: number } {
  const set = asSet(completed);
  const at = spine.filter((e) => e.level === level);
  return { done: at.filter((e) => set.has(e.id)).length, total: at.length };
}
