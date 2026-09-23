/**
 * heritageLearner — is this learner a heritage/diaspora speaker? (2026-09-23)
 *
 * WHY THIS EXISTS. `/api/conversation`'s system prompt carries a substantial
 * authored section gated on `isHeritage`:
 *
 *   HERITAGE SPEAKER CONTEXT: This learner grew up hearing Croatian at home
 *   (diaspora community …). They likely speak naturally but have systematic
 *   gaps: frozen vocabulary from parents' emigration era, simplified case
 *   system (especially genitive plural), possible dialect mixing,
 *   anglicisms/germanisms. Do NOT treat them as a complete beginner …
 *
 * Its only producer was `isHeritage: !!stats?.heritage`, and **`stats.heritage`
 * has never had a writer** — verified across progressSnapshot,
 * applyRemoteProgress, mergeStatsFromRemote, statsReducer, mergeSignInStats,
 * useSyncManager and App.tsx, and by `git log -S` over the whole history (the
 * only `heritage: true` there is mergeSignInStats' test using it as an
 * arbitrary remote-only field). The prompt landed 2026-03-28 and its reader a
 * week later, so for ~6 months the most audience-specific teaching content in
 * the app — for a product whose first line is "for the diaspora and heritage
 * learners" — could not reach a single learner. A consumer with no producer:
 * the mirror of the dead-write class, and just as silent.
 *
 * THIS INVENTS NO CLASSIFICATION. The app already makes exactly this inference
 * and already acts on it: `OnboardingTour` served DIASPORA_STEPS on
 * `userGoal === 'heritage' || userGoal === 'family'`. This module is that same
 * predicate, lifted so the two surfaces cannot drift — the failure mode of the
 * three copies of the CEFR band formula, which agreed with each other and with
 * nothing that mattered.
 *
 * The region clause is the stronger signal and is why it comes first: a learner
 * who named their family's Croatian region in onboarding has stated the
 * connection outright, rather than picking a goal that merely implies it.
 *
 * DELIBERATELY NOT a synced stats field. Both inputs already sync
 * (`nh_goal` and `nh_heritage_region` are in buildProgressSnapshot), so adding
 * one would be a fourth place to keep in step for a value that is derivable
 * from two that are already there.
 */
import { lsGet } from './safeStorage';

/** Goals that the app treats as diaspora — the OnboardingTour predicate. */
export const DIASPORA_GOALS = ['heritage', 'family'] as const;

export function isHeritageLearner(): boolean {
  try {
    if ((lsGet('nh_heritage_region') || '').trim()) return true;
    const goal = lsGet('nh_goal') || '';
    return (DIASPORA_GOALS as readonly string[]).includes(goal);
  } catch {
    // Storage can throw in private mode / cross-origin frames. A learner we
    // cannot classify is treated as non-heritage, which is the pre-existing
    // behaviour and never worse than it.
    return false;
  }
}
