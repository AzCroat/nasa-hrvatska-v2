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

/**
 * WHY A POOLED LAUNCH CANNOT PROCEED — or null when it can.
 *
 * THE DEFECT THIS CLOSES (2026-09-24). `LearningCenter.openScreen` already
 * answered this question, and its comment states the rule: **"NOT LOADED YET"
 * and "EMPTY" are different facts, and saying the wrong one is NEVER-DO 13.**
 * The vocabulary arrives from `/api/content/core` after first paint, so a
 * learner who opens a surface and taps straight away has a null `content` and
 * an empty pool for a reason that has nothing to do with their deck.
 *
 * That fix was made at ONE of the two callers. The Grad tab — the app's primary
 * route to these same five screens, through the place cards — was never
 * touched, and measured with the real build there, during the window before
 * content lands:
 *
 *   Govori (speaking)   nothing at all — `launchSpeaking` returns on an empty
 *   Kviz (mcgame)       nothing at all — `launchMcGame` does the same
 *   Kartice, Spoji      the ScreenGuard dead end, whose words are "this needs
 *                       to be started from the Practice tab" — said to a
 *                       learner who IS on the Practice tab, about a session
 *                       that never existed
 *   Slušanje            works; its bank is a static import, not content
 *
 * So the decision lives HERE, beside the payload builders both callers already
 * share, rather than as a second copy that can drift from the first. A third
 * surface reaching for `flashcardPool` gets the same three sentences.
 */
export type PoolLaunchBlock = 'loading' | 'unavailable' | 'empty';

export const POOL_LAUNCH_COPY: Record<PoolLaunchBlock, string> = {
  loading: 'Still loading your words — try that again in a moment.',
  unavailable: 'Your word list could not be loaded. Check your connection and try again.',
  empty: 'There are no words ready for that yet — try a lesson first.',
};

export function poolLaunchBlock(
  content: unknown | null,
  contentLoading: boolean,
  payload: readonly unknown[] | null | undefined,
): PoolLaunchBlock | null {
  // Content decides first: with none, the payload is empty for a reason that
  // says nothing about the learner's deck, and `empty`'s "try a lesson first"
  // would be false advice.
  if (!content) return contentLoading ? 'loading' : 'unavailable';
  return !payload || payload.length === 0 ? 'empty' : null;
}
