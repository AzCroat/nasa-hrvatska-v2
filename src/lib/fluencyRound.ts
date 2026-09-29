// src/lib/fluencyRound.ts
//
// FLUENCY: FAST RE-USE OF WHAT IS ALREADY KNOWN (academic recommendation 4, owner
// go-ahead 2026-09-29).
//
// Nation's four strands give a course four equal jobs: meaning-focused input,
// meaning-focused output, language-focused learning, and FLUENCY DEVELOPMENT — using
// material the learner already knows, under a little time pressure, so that knowing
// it becomes using it without stopping to think. Measured before: the session had a
// guaranteed slot for input, for production, for grammar and for review, and none for
// fluency — every activity either taught, tested or re-checked, all at the learner's
// own pace. Nothing asked them to be QUICK with what they had already mastered.
//
// A round is FLUENCY_SECONDS long and draws only from lessons the learner has PASSED
// (the retention store's lessons), held ones first. It is not a test: nothing about the
// course moves on its result. What it records is honest and small: the rate (correct
// answers per minute) and a personal best, shown back to the learner; and a miss on a
// passed lesson's item becomes a Lesson Review card, because slipping on something
// mastered is exactly what review is for.

import { findCheckSlide, shuffledOrder, type LessonCheckItem } from './lessonCheck';
import { readRetention, type RetentionStore } from './lessonRetention';

export const FLUENCY_SECONDS = 90;
/** Passed lessons needed before a round is worth offering — fewer is a repetition drill. */
export const FLUENCY_MIN_LESSONS = 3;
/** Items prepared for a round: more than anyone answers in 90 s, so it never runs dry. */
export const FLUENCY_ITEMS = 40;
export const FLUENCY_BEST_KEY = 'nh_fluency_best';

export interface FluencyItem {
  lessonId: string;
  /** Index in the lesson's check POOL (form A then B) — the retention card index. */
  idx: number;
  item: LessonCheckItem;
}

interface LessonLike {
  id: string;
  slides?: ReadonlyArray<{ type?: string; items?: unknown }>;
}

/** Lessons the learner has passed, those whose re-checks have held first. */
export function passedLessonIds(store: RetentionStore = readRetention()): string[] {
  return Object.entries(store.lessons)
    .sort((a, b) => b[1].stage - a[1].stage || (a[1].passedAt < b[1].passedAt ? -1 : 1))
    .map(([id]) => id);
}

export function fluencyAvailable(store: RetentionStore = readRetention()): boolean {
  return Object.keys(store.lessons).length >= FLUENCY_MIN_LESSONS;
}

/**
 * The round's items: round-robin across the passed lessons, a seeded shuffle within
 * each, so consecutive items come from different lessons (the interleaving argument
 * the unit test makes) and a new day draws a new order.
 */
export function buildFluencyRound(
  lessons: readonly LessonLike[],
  seed: number,
  store: RetentionStore = readRetention(),
): FluencyItem[] {
  const byId = new Map(lessons.map((l) => [l.id, l]));
  const buckets: FluencyItem[][] = [];
  for (const id of passedLessonIds(store)) {
    const lesson = byId.get(id);
    const pool = lesson ? (findCheckSlide(lesson.slides ?? [])?.pool ?? []) : [];
    if (!pool.length) continue;
    buckets.push(
      shuffledOrder(pool.length, seed, buckets.length).map((i) => ({
        lessonId: id,
        idx: i,
        item: pool[i]!,
      })),
    );
  }
  const out: FluencyItem[] = [];
  for (let round = 0; out.length < FLUENCY_ITEMS; round++) {
    let any = false;
    for (const b of buckets) {
      if (round < b.length) {
        out.push(b[round]!);
        any = true;
        if (out.length >= FLUENCY_ITEMS) break;
      }
    }
    if (!any) break;
  }
  return out;
}

/** Correct answers per minute over the time actually used. */
export function fluencyRate(correct: number, seconds: number): number {
  if (!Number.isFinite(correct) || !Number.isFinite(seconds) || seconds <= 0) return 0;
  return Math.round((correct * 60) / seconds);
}

export function readFluencyBest(): number {
  try {
    const n = Number(localStorage.getItem(FLUENCY_BEST_KEY));
    return Number.isFinite(n) && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}

/** Records a new personal best; returns whether this round set one. */
export function recordFluencyRate(rate: number): boolean {
  if (!Number.isFinite(rate) || rate <= 0) return false;
  if (rate <= readFluencyBest()) return false;
  try {
    localStorage.setItem(FLUENCY_BEST_KEY, String(rate));
  } catch {
    return false;
  }
  return true;
}
