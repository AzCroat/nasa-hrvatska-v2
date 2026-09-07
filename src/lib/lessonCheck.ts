// src/lib/lessonCheck.ts
//
// THE MASTERY CHECK — how an animated lesson decides it was LEARNED, not merely
// read (owner directive, 2026-09-07: "Users should be taught in-depth and then
// tested").
//
// Before this file, AnimatedLesson recorded a lesson complete — 25 XP, gc + 1,
// the `al_<id>` path key, the curriculum spine advanced — on ARRIVAL at the
// summary slide. Its two quiz slides had to be answered but not answered
// correctly: a learner who got both wrong advanced identically to one who got
// both right, and `score` was display-only. The 75% comprehension gate that
// every hand-built lesson screen already used (`lessonGate.ts`, `LessonQuiz`)
// was never wired to the 180 curriculum lessons — the one lesson family the
// daily session's teaching slot serves.
//
// The gate is now data-driven and pure. A lesson carries a `check` slide —
// ≥ 6 multiple-choice items placed immediately before the summary — and the
// learner must score ≥ LESSON_PASS_THRESHOLD on it. A lesson from an OLDER
// cached payload that has no `check` slide is gated on its formative `quiz`
// slides instead: absence degrades to the strictest thing the data still
// supports, never to "read it and you're done". A lesson with neither (none
// exist; pinned) has nothing to test and completes as before.
//
// Nothing here touches storage, React or the network. AnimatedLesson reads the
// verdict and does the recording; tests drive this module directly.

import { LESSON_PASS_THRESHOLD, passedLesson } from './lessonGate';

export { LESSON_PASS_THRESHOLD };

/** One mastery-check item. `correct` indexes `options` in SOURCE order; the
 *  renderer shuffles presentation per attempt and maps back. */
export interface LessonCheckItem {
  q: string;
  options: string[];
  correct: number;
  explanation?: string;
}

/** Minimum items a mastery check must carry. At the 75% threshold six items
 *  means 5/6 to pass — one slip allowed, two not. Pinned by lessonDepth.test. */
export const MIN_CHECK_ITEMS = 6;

interface SlideLike {
  type?: string;
  items?: unknown;
  [key: string]: unknown;
}

/** The lesson's check slide and its VALID items (malformed items are dropped
 *  rather than trusted — an item with no options cannot be answered). */
export function findCheckSlide(
  slides: readonly SlideLike[],
): { index: number; items: LessonCheckItem[] } | null {
  const index = slides.findIndex((s) => s && s.type === 'check');
  if (index < 0) return null;
  const raw = slides[index]?.items;
  const items = (Array.isArray(raw) ? raw : []).filter(isCheckItem);
  return { index, items };
}

function isCheckItem(x: unknown): x is LessonCheckItem {
  if (!x || typeof x !== 'object') return false;
  const it = x as Partial<LessonCheckItem>;
  return (
    typeof it.q === 'string' &&
    Array.isArray(it.options) &&
    it.options.length >= 2 &&
    it.options.every((o) => typeof o === 'string') &&
    Number.isInteger(it.correct) &&
    (it.correct as number) >= 0 &&
    (it.correct as number) < it.options.length
  );
}

export type LessonGate =
  | { kind: 'check'; slideIndex: number; items: LessonCheckItem[]; total: number }
  | { kind: 'quiz'; slideIndexes: number[]; total: number }
  | { kind: 'none'; total: 0 };

/**
 * What this lesson is gated on. `check` when it carries a check slide with at
 * least one valid item; otherwise its formative quiz slides; otherwise nothing.
 */
export function lessonGate(slides: readonly SlideLike[]): LessonGate {
  const check = findCheckSlide(slides);
  if (check && check.items.length > 0) {
    return {
      kind: 'check',
      slideIndex: check.index,
      items: check.items,
      total: check.items.length,
    };
  }
  const slideIndexes: number[] = [];
  slides.forEach((s, i) => {
    if (s && s.type === 'quiz') slideIndexes.push(i);
  });
  if (slideIndexes.length > 0) return { kind: 'quiz', slideIndexes, total: slideIndexes.length };
  return { kind: 'none', total: 0 };
}

/** The slide the learner is sent back to on "retake": the check itself, or the
 *  first formative quiz. Null when there is nothing to retake. */
export function gateStartSlide(gate: LessonGate): number | null {
  if (gate.kind === 'check') return gate.slideIndex;
  if (gate.kind === 'quiz') return gate.slideIndexes[0] ?? null;
  return null;
}

/** Correct answers among the check items, given chosen SOURCE-order indices. */
export function countCorrect(
  items: readonly LessonCheckItem[],
  answers: Readonly<Record<number, number>>,
): number {
  let n = 0;
  items.forEach((it, i) => {
    if (answers[i] === it.correct) n++;
  });
  return n;
}

/** Whether the lesson is passed. A lesson with nothing to test passes (that is
 *  the pre-gate behaviour and it applies to no shipped lesson). */
export function lessonPassed(gate: LessonGate, correct: number): boolean {
  if (gate.kind === 'none') return true;
  return passedLesson(correct, gate.total);
}

// ── Deterministic option shuffle ────────────────────────────────────────────
// Options are presented in a different order on every attempt so a retake is a
// retake and not a memory test of positions; seeded so a re-render within one
// attempt is stable and tests can predict it. mulberry32 — small and adequate.
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A permutation of 0..n-1 for (attempt, item). Returns SOURCE indices in
 *  presentation order: `order[k]` is the source index shown at slot k. */
export function shuffledOrder(n: number, attempt: number, item: number): number[] {
  const order = Array.from({ length: n }, (_, i) => i);
  const rnd = mulberry32(((attempt + 1) * 7919 + (item + 1) * 104729) >>> 0);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = order[i]!;
    order[i] = order[j]!;
    order[j] = tmp;
  }
  return order;
}
