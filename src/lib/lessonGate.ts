// src/lib/lessonGate.ts
// Single source of the lesson "comprehension gate" pass rule. Pure; no React/storage.
export const LESSON_PASS_THRESHOLD = 0.75;

export function lessonScorePct(score: number, total: number): number {
  return total > 0 ? score / total : 0;
}

export function passedLesson(score: number, total: number): boolean {
  return total > 0 && score / total >= LESSON_PASS_THRESHOLD;
}

/**
 * How many items a learner must get right — the number, not the percentage.
 *
 * OWNER REPORT, 2026-09-25: _"8 out of 12 is 75%, you stated it wasn't"_. The
 * app's arithmetic was right (8/12 is 66.7%; 9 of 12 is the 75% mark, and
 * `passedLesson` uses `>=` so exactly 75% passes) and the SCREEN was the defect:
 * it showed a fraction — "8 / 12" — beside a button reading "need 75%", and left
 * the learner to convert between the two. 117 hand-written drills plus this
 * engine did that, and not one of them ever printed the number needed.
 *
 * A percentage is the rule; a count is what a learner can check against the
 * score in front of them. `MicroLessonScreen` already learned this ("3 of 3
 * needed to log this lesson") and the lesson was not carried across.
 */
export function itemsNeededToPass(total: number): number {
  if (!Number.isFinite(total) || total <= 0) return 0;
  return Math.ceil(total * LESSON_PASS_THRESHOLD);
}

/** The retry button's label, so the number and the gate cannot drift apart. */
export function retryNeedLabel(total: number): string {
  return `🔁 Try again (need ${itemsNeededToPass(total)} of ${total})`;
}
