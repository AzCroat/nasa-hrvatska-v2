/**
 * useLearningIndex — assembles the Learning Center's index from the app's own
 * catalogues.
 *
 * THIS FILE IS THE SOURCE ASSEMBLY, and it is the half `learningIndex.ts`
 * deliberately does not own. The builder is pure and takes whatever it is
 * handed; the question "which catalogues feed it" is answered exactly once,
 * here. Phase 1 left this out on purpose, because its only caller was a test,
 * and a test cannot meaningfully guard its own fixture.
 *
 * WHAT MUST STAY TRUE: every catalogue of learnable content the app keeps is
 * named below. Forgetting one is invisible from the UI — the Center simply
 * renders fewer rows and nothing says so, which is the exact failure mode of
 * the three hand-listed doors this feature replaces. `learningCenter.test.ts`
 * therefore DERIVES the set of catalogues from source and fails when one is
 * missing from this file, rather than restating a list that could go stale
 * beside the one it is checking.
 *
 * WHY IMPORTING `useDailySession` IS NOT A BUNDLE REGRESSION: `PRODUCTION_POOL`
 * lives in that hook, which `HomeTab` already imports, so it is on the main tab
 * graph regardless. This module is reached only from the lazily-routed Center
 * screen, so it adds nothing to first paint either way.
 */
import { useEffect, useMemo, useState } from 'react';
import { buildLearningIndex, type LearningEntry } from '../lib/learningIndex';
import { readCurriculumSpine } from '../lib/curriculumProgress';
import { getCurriculumSpine } from '../lib/contentClient';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { PRODUCTION_POOL } from './useDailySession';
import { referenceSources } from '../lib/referenceDesk';
import type { CurriculumEntry } from '../lib/curriculum';

/**
 * Every catalogue of learnable content, in one place.
 *
 * `C_LEVEL_DRILL_ENTRIES` and `PRACTICE_PROGRAMME_ENTRIES` are deliberately
 * absent: both are spread INTO `CEFR_EXERCISE_POOL`, so naming them here would
 * double every one of their rows. The derivation test knows that and checks it.
 */
/**
 * `animlesson` is a pool entry pointing at the animated-lesson RENDERER, not at
 * a destination. Its route shows a ScreenGuard unless the parent holds a full
 * Lesson object, and there is no payload the Center could hand it that the 180
 * lesson rows do not already express better — each of those opens a NAMED
 * lesson through `launchAnimLesson`. Listing it as a screen row would offer
 * "Animated Lesson" as a thing to open and dead-end on it.
 */
const NOT_A_DESTINATION = new Set(['animlesson']);

function screenCatalogues(): Array<{ id: string; label: string; screen: string }> {
  return [...CEFR_EXERCISE_POOL, ...CROATIA_POOL, ...PRODUCTION_POOL].filter(
    (e) => !NOT_A_DESTINATION.has(e.screen),
  );
}

/**
 * The index, plus whether the lesson half of it has arrived yet.
 *
 * The spine is a cached fetch. `readCurriculumSpine()` returns it synchronously
 * when it is already on the device — the normal case, since App fetches it on
 * mount — and an empty array otherwise. An empty spine degrades the Center to
 * its 375 drill rows rather than to an error, and `spineReady` lets the screen
 * say so honestly instead of rendering "no lessons" as though there were none.
 */
export interface LearningIndexState {
  index: LearningEntry[];
  spineReady: boolean;
}

export function useLearningIndex(): LearningIndexState {
  const [spine, setSpine] = useState<CurriculumEntry[]>(() => readCurriculumSpine());

  useEffect(() => {
    if (spine.length > 0) return;
    let alive = true;
    // Resolves from cache when present and only reaches the network on a cold
    // device. A failure leaves the Center on its drill rows — never an error.
    getCurriculumSpine()
      .then((s) => {
        if (alive && s && s.length > 0) setSpine(s);
      })
      .catch(() => {
        /* offline or unauthenticated — degrade, never throw */
      });
    return () => {
      alive = false;
    };
  }, [spine.length]);

  const index = useMemo(
    () =>
      buildLearningIndex({
        lessons: spine,
        screens: screenCatalogues(),
        // The reference desk's panels. Derived from CASE_CONCEPTS plus the two
        // instruments, so a new concept card reaches search with no second
        // registration — and every one of them has a panel to open, which is
        // what let them into the index at all.
        references: referenceSources(),
      }),
    [spine],
  );

  return { index, spineReady: spine.length > 0 };
}
