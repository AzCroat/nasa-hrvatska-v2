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
import { UNPOOLED_SCREENS } from '../lib/unpooledScreens';
import { vocabCategories, vocabLevel } from '../lib/vocabPool';
import { useContent } from './useContent';
import { useStats } from '../context/StatsContext';
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
  return [
    ...CEFR_EXERCISE_POOL,
    ...CROATIA_POOL,
    ...PRODUCTION_POOL,
    // Routed, reachable, and in no pool — browsable rather than schedulable.
    // Their only door used to be BrowseContentModal; see lib/unpooledScreens.
    ...UNPOOLED_SCREENS.map((u) => ({ id: u.screen, label: u.label, screen: u.screen })),
  ].filter((e) => !NOT_A_DESTINATION.has(e.screen));
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

  const { content } = useContent();
  const { stats } = useStats();
  const vocabTopics = useMemo(() => {
    const V = (content?.V ?? null) as never;
    if (!content) return [];
    const cats = vocabCategories(content as never, vocabLevel(stats ?? undefined));
    return cats.map((topic) => ({
      topic,
      count: Array.isArray((V as Record<string, unknown[]>)?.[topic])
        ? (V as Record<string, unknown[]>)[topic]!.length
        : undefined,
    }));
  }, [content, stats]);

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
        // The learner's own vocabulary categories, level-gated exactly as every
        // other deck is (`vocabCategories` + `vocabLevel`) — NOT a hardcoded
        // key list, which is the defect that made the browse modal decay and is
        // forbidden outright by the vocabulary-deck directive.
        vocab: vocabTopics,
      }),
    [spine, vocabTopics],
  );

  return { index, spineReady: spine.length > 0 };
}
