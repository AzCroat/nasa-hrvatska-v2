// src/lib/teachPractice.ts
//
// TEACH → PRACTICE COUPLING (recommender audit, 2026-08-20).
//
// The audit's systemic finding: finishing a lesson changed nothing about what
// the learner was offered next. An A1 learner could complete
// `present-tense-verbs` and the daily session would carry on serving vocabulary
// and case drills, because the session builder had no idea a lesson had
// happened. That is also WHY the A1 verb hole stayed invisible for so long —
// nothing connected "taught this" to "never practised it".
//
// This module is the connective tissue:
//   1. A lesson finishes  → recordLessonTaught(id) queues the category it taught.
//   2. The next session   → buildSessionActivities claims a slot for that
//                           category's drill (Priority 1.5, ahead of the
//                           adaptive scheduler's guess — a concept the learner
//                           just met beats a statistical estimate).
//   3. That drill finishes → recordCategoryPractised() clears the queue entry.
//
// DESIGN NOTES
// * The map is deliberately CONSERVATIVE. A lesson only appears here when the
//   practice category is unambiguous. `adjective-agreement` and `basic-questions`
//   are omitted on purpose: no drill teaches exactly those, and a wrong pairing
//   would send the learner somewhere confusing right after a lesson — worse than
//   the current behaviour of doing nothing.
// * Entries EXPIRE (TAUGHT_TTL_DAYS). A lesson finished three weeks ago is not a
//   pending intention any more, and a stale queue would quietly outrank the
//   adaptive scheduler forever.
// * Storage is best-effort throughout: private mode / storage-disabled must
//   degrade to today's behaviour, never throw into a completion path.

import type { SkillCategory } from './adaptive';
import { CEFR_EXERCISE_POOL } from './sessionPools';

/**
 * Every category the pool actually uses. Derived rather than hand-listed so it
 * cannot drift: a retagged pool entry updates this automatically.
 */
const KNOWN_CATEGORIES: ReadonlySet<string> = new Set(CEFR_EXERCISE_POOL.map((e) => e.category));

const KEY = 'nh_taught_pending';
export const TAUGHT_TTL_DAYS = 14;
/** Queue cap — the coupling is a nudge, not a backlog to grind through. */
export const TAUGHT_MAX = 5;

/**
 * Lesson completion key → the category whose drill practises it.
 *
 * Two id spaces intentionally share one map:
 *   * server content lessons (functions/api/content/_data/lessons.js), whose ids
 *     reach us through AnimatedLesson;
 *   * the dedicated lesson SCREENS, which complete through completeExercise with
 *     their screenId as the key.
 * They never collide, and one map means one place to look.
 */
export const LESSON_TAUGHT_CATEGORY: Readonly<Record<string, SkillCategory>> = {
  // ── verbs: present ────────────────────────────────────────────────────────
  'present-tense-verbs': 'present-tense',
  present: 'present-tense',
  'modal-verbs-a2': 'present-tense',
  // Teaches biti + personal pronouns; presentdrill carries the biti items.
  'pronouns-biti': 'present-tense',
  // A1 modals and reflexives are both present-tense conjugation in practice,
  // and presentdrill is the A1-reachable drill for it — the same reasoning that
  // already pairs modal-verbs-a2 with this category.
  'modals-basic': 'present-tense',
  'reflexive-verbs': 'present-tense',
  // ── verbs: other tenses ───────────────────────────────────────────────────
  'past-tense': 'past-tense',
  // The A2 lesson on asking and denying in the past. `cloze` is A2, so unlike
  // the vocab route this resolves for exactly the learners it is written for.
  'past-questions-negation': 'past-tense',
  'aorist-imperfekt': 'past-tense',
  pluskvamperfekt: 'past-tense',
  tenses: 'past-tense', // TensesScreen
  'future-tense': 'future-tense',
  future_tense_lesson: 'future-tense',
  conditional: 'conditional',
  // ── aspect ────────────────────────────────────────────────────────────────
  aspect: 'aspect-imperfective',
  'aspect-imperfective': 'aspect-imperfective',
  'aspect-perfective': 'aspect-perfective',
  'aspect-negation': 'aspect-negation',
  'motion-verbs': 'aspect-perfective',
  // ── cases ─────────────────────────────────────────────────────────────────
  // The umbrella `cases` lesson introduces the system; nominative is where a
  // learner starts using it, and nomdrill is available from A1.
  cases: 'nominative',
  declension: 'genitive',
  'genitive-deep': 'genitive',
  'genitive-intro': 'genitive',
  'accusative-deep': 'accusative',
  'accusative-intro': 'accusative',
  'dative-locative': 'dative-locative',
  // The A1 locative lesson: locdrill is A1, so unlike the vocab route below
  // this one actually resolves for the learners the lesson is written for.
  'locative-intro': 'dative-locative',
  // The A2 dative lesson routes to the same category: dative and locative share
  // their singular endings, which is exactly why CATEGORY_SCREEN_MAP already
  // sends the combined category to the locative drill.
  'dative-intro': 'dative-locative',
  'vocative-intro': 'vocative',
  instrumental: 'instrumental',
  'instrumental-intro': 'instrumental',
  // ── syntax / structure ────────────────────────────────────────────────────
  'word-order-emphasis': 'word-order',
  clitics: 'clitics',
  'clitics-advanced': 'clitics',
  'complex-sentences': 'subordination',
  'passive-voice': 'passive',
  'verbal-nouns': 'nominalization',
  // ── vocabulary / other ────────────────────────────────────────────────────
  gender: 'vocab-a2',
  'numbers-time': 'numerals',
  'numbers-nouns': 'numerals',
  'collective-numbers': 'numerals',
  'shopping-prices': 'numerals',
  'ordinals-dates': 'numerals',
  'idioms-register': 'idioms',
  // DELIBERATELY UNMAPPED, and worth recording so nobody "completes" the map:
  // A1: plural-nouns, negation, adjectives-basic, possessives, demonstratives,
  // imperative-basic, likes-preferences, family-people, countries-languages,
  // food-drink, directions-town, weather-seasons.
  // A2: object-pronouns, plural-cases, quantity, svoj, adverbs, conjunctions,
  // relative-koji, indefinites, and all ten functional lessons.
  //
  // Each of them either has no drill at all, or only a topic-blind vocabulary
  // game — and pairing a lesson on family words with a generic vocab round
  // claims a connection the app cannot deliver. A wrong drill after a lesson is
  // worse than no drill.
  //
  // `object-pronouns` is the one worth explaining: clitics DO have a drill, but
  // it is B2-gated, so mapping it would queue a category an A2 learner cannot
  // open — the coupling would resolve to nothing, silently. Same trap as
  // `gender → vocab-a2`. Better to say nothing than to promise practice that
  // never arrives.
};

interface TaughtEntry {
  /** category */
  c: SkillCategory;
  /** epoch ms when the lesson was completed */
  at: number;
}

function read(): TaughtEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is TaughtEntry =>
        !!e &&
        typeof (e as TaughtEntry).c === 'string' &&
        typeof (e as TaughtEntry).at === 'number',
    );
  } catch {
    return [];
  }
}

function write(entries: TaughtEntry[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(entries.slice(-TAUGHT_MAX)));
  } catch {
    /* storage unavailable — coupling degrades to today's behaviour */
  }
}

function fresh(entries: TaughtEntry[], now: number): TaughtEntry[] {
  const cutoff = now - TAUGHT_TTL_DAYS * 86400000;
  return entries.filter((e) => e.at >= cutoff);
}

/**
 * A lesson was completed. Queues the category it taught, if we know one.
 * Idempotent per category: re-reading a lesson refreshes its timestamp rather
 * than stacking duplicates.
 */
export function recordLessonTaught(lessonKey: string, now = Date.now()): void {
  const category = LESSON_TAUGHT_CATEGORY[lessonKey];
  if (!category) return; // unmapped lesson — no coupling, no harm
  const entries = fresh(read(), now).filter((e) => e.c !== category);
  entries.push({ c: category, at: now });
  write(entries);
}

/** A drill in this category was completed — the coupling is satisfied. */
export function recordCategoryPractised(category: SkillCategory, now = Date.now()): void {
  const entries = fresh(read(), now);
  const next = entries.filter((e) => e.c !== category);
  if (next.length !== entries.length) write(next);
}

/**
 * Categories taught but not yet practised, oldest first — the order the session
 * builder should honour so nothing waits behind a newer lesson.
 */
export function pendingTaughtCategories(now = Date.now()): SkillCategory[] {
  return fresh(read(), now)
    .sort((a, b) => a.at - b.at)
    .map((e) => e.c);
}

/**
 * The category a finished exercise practised, from its completion key.
 *
 * Two shapes reach us, because completion keys were never standardised:
 *   * some drills key on the category itself (NominativeDrill → 'nominative',
 *     PresentTenseDrill → 'present-tense');
 *   * others key on their screen id (e.g. 'locdrill'), which the pool maps.
 * Checking the pool first and falling back to "the key IS a category" covers
 * both without forcing a rename of every drill's completion key.
 */
export function categoryForScreen(key: string): SkillCategory | undefined {
  const entry = CEFR_EXERCISE_POOL.find((e) => e.screen === key || e.id === key);
  if (entry) return entry.category;
  return KNOWN_CATEGORIES.has(key) ? (key as SkillCategory) : undefined;
}

/** Test/diagnostic helper — clears the queue. */
export function clearTaughtQueue(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* no-op */
  }
}
