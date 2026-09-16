/**
 * practiceLaunch — how a vocabulary practice screen is loaded, in one place.
 *
 * THE DEFECT THIS EXISTS TO FIX (2026-09-16, phase 4). Six screens in the app
 * render a `ScreenGuard` — the "this exercise needs to be started properly"
 * dead end — unless a launcher has seeded their state first. The Learning
 * Center's phase-2 rows opened every screen with a bare `setScr`, so tapping
 * Flashcards, Quiz, Match, Listening or Speaking from the Center landed on that
 * guard instead of the exercise.
 *
 * The codebase had already met this exact problem and written the answer down:
 * `QuestTracker`'s "Start →" had the same dead end, and GradTab routes it
 * through the real launchers with a note that "a plain setScr there would have
 * put Start → on a dead end". What was missing was somewhere for the two
 * callers to SHARE the payload-building, so the Center could do the same
 * without a second copy of it drifting from the first.
 *
 * These are pure functions of (pool, shuffle). `sh` is injected rather than
 * imported so the builders are deterministic under test — pass the identity
 * function and the output is fixed.
 */
import { levelledBank } from './levelledBank';
import type { CefrLevel } from './cefr';

/** A vocabulary row: [croatian, english, phonetic?]. */
export type VocabRow = readonly unknown[];
export type Shuffle = <T>(arr: T[]) => T[];

/** Cards for one flashcard sitting. */
export function flashcardPool(pool: readonly VocabRow[], sh: Shuffle): unknown[] {
  return sh([...pool]).slice(0, 20);
}

/** Speaking prompts — a shorter sitting, because each item is spoken aloud. */
export function speakingItems(pool: readonly VocabRow[], sh: Shuffle): unknown[] {
  return sh([...pool]).slice(0, 6);
}

/** Multiple-choice questions, each with three distractors drawn from the pool. */
export function quizItems(pool: readonly VocabRow[], sh: Shuffle): unknown[] {
  return sh([...pool])
    .slice(0, 20)
    .map((w) => {
      const row = w as unknown[];
      const wrong = sh([...pool].filter((x) => (x as unknown[])[1] !== row[1]))
        .slice(0, 3)
        .map((x) => (x as unknown[])[1]);
      return {
        hr: row[0],
        en: row[1],
        ph: row[2],
        opts: sh([row[1]].concat(wrong)),
        correct: row[1],
      };
    });
}

/** Six pairs, split into Croatian and English tiles and shuffled together. */
export function matchPool(pool: readonly VocabRow[], sh: Shuffle): unknown[] {
  const sel = sh([...pool]).slice(0, 6);
  return sh(
    sel
      .map((w, i) => ({ id: 'h' + i, t: (w as unknown[])[0], p: i, tp: 'hr' }))
      .concat(sel.map((w, i) => ({ id: 'e' + i, t: (w as unknown[])[1], p: i, tp: 'en' }))),
  );
}

/**
 * Listening items at the learner's level.
 *
 * The filter goes BEFORE the slice on purpose: filtering after it would shorten
 * the round instead of aiming it — the rule the 2026-09-07 levelled-bank sweep
 * established after an A1 learner's Listening Quiz was 84% B1–C2 sentences.
 */
export function listeningItems(
  bank: readonly { level?: string }[],
  level: CefrLevel,
  sh: Shuffle,
): unknown[] {
  return sh([...levelledBank(bank, level)]).slice(0, 8);
}
