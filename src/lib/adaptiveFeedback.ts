// src/lib/adaptiveFeedback.ts
//
// Feedback loop (Phase 3a): turn the equivalency test's per-skill result into
// targeted practice. A skill scored below the pass bar is "weak" → its
// representative adaptive categories are rescheduled by performance (weaker
// score → sooner due via rateCategorySession's grade→interval), so the daily
// session surfaces what the user just tested poorly on. Previously the test
// result fed only certification, never the practice engine.
//
// Scope: only WEAK skills act, and only skills with a drillable adaptive
// category. Reading and listening have no daily-session category, so they're
// intentionally omitted (no-op) rather than silently mapped to the wrong thing.
// (Phase 3b will add per-error categories from Writing/Razgovor corrections.)

import { rateCategorySession, ALL_CATEGORIES } from './adaptive';
import type { SkillCategory } from './adaptive';
import type { SkillScores, SkillKey } from './cefrCertification';

/** Equivalency pass bar; a per-skill score below this is treated as weak. */
const WEAK_THRESHOLD = 0.8;

// Representative categories per tested skill. Kept small and high-frequency so a
// weak result nudges core practice without flooding the queue. All entries are
// real ALL_CATEGORIES members that route to a session activity.
const SKILL_TO_CATEGORIES: Partial<Record<SkillKey, SkillCategory[]>> = {
  grammar: ['genitive', 'accusative', 'aspect-imperfective'],
  vocab: ['vocab-a2', 'vocab-b1'],
  speaking: ['speaking'],
  // Phase 3: 'listening' routes to a real session screen now
  // (CATEGORY_SCREEN_MAP.listening → listening_comprehension), so a weak
  // listening result honestly reschedules listening practice.
  listening: ['listening'],
};

/**
 * Push a completed equivalency test's weaknesses into the adaptive scheduler.
 * Safe to call once on test completion; only weak (< pass bar), drillable skills
 * reschedule. Non-numeric/absent scores and strong skills are ignored.
 */
export function applyExamScoresToAdaptive(scores: SkillScores): void {
  for (const skill of Object.keys(SKILL_TO_CATEGORIES) as SkillKey[]) {
    const score = scores[skill];
    if (typeof score !== 'number' || score >= WEAK_THRESHOLD) continue;
    for (const cat of SKILL_TO_CATEGORIES[skill]!) {
      rateCategorySession(cat, score);
    }
  }
}

// Phase 3b (writing): /api/correct already tags each correction with a coarse
// `errorType`. Map those to a representative adaptive category so a written
// mistake resurfaces that practice. `agreement`/`spelling`/`other` have no clean
// category and are intentionally skipped. NOTE: `case` is handled separately (it
// does not say WHICH case) — see CASE_CATEGORIES / nextCaseCategory below.
const ERRORTYPE_TO_CATEGORY: Record<string, SkillCategory> = {
  aspect: 'aspect-imperfective',
  tense: 'past-tense',
  word_order: 'word-order',
  vocab: 'vocab-a2',
};

// The coarse `case` errorType doesn't say which of the seven cases was wrong, so
// it can't be pinned to one category honestly. Pinning it to `genitive` (the old
// behaviour) made the daily session serve genitive endlessly — every dative /
// locative / instrumental / vocative / accusative slip re-flagged GENITIVE as
// weak-and-due, so genitive won the grammar slot forever while the other cases
// starved. Instead we rotate the attribution across the whole case system with a
// persisted round-robin pointer, so a learner who keeps making case errors gets
// even coverage of all cases over successive submissions. The rotation is stable
// WITHIN one submission (all its `case` errors resolve to the same category, so
// the per-submission de-dupe below still holds) and advances only BETWEEN them.
const CASE_CATEGORIES: SkillCategory[] = [
  'genitive',
  'accusative',
  'dative-locative',
  'instrumental',
  'vocative',
];
const CASE_ROTATION_KEY = 'nh_case_rotation';

function nextCaseCategory(): SkillCategory {
  let idx = 0;
  try {
    idx = parseInt(localStorage.getItem(CASE_ROTATION_KEY) || '0', 10) || 0;
  } catch {
    /* storage unavailable — fall back to genitive */
  }
  const cat =
    CASE_CATEGORIES[
      ((idx % CASE_CATEGORIES.length) + CASE_CATEGORIES.length) % CASE_CATEGORIES.length
    ]!;
  try {
    localStorage.setItem(CASE_ROTATION_KEY, String((idx + 1) % CASE_CATEGORIES.length));
  } catch {
    /* storage unavailable — pointer stays; next call repeats this case */
  }
  return cat;
}

// Score fed for a category that produced an error → grade 1 → due ~1 day, so it
// resurfaces in the next daily session.
const ERROR_SCORE = 0.45;

/**
 * Feed a writing submission's correction error-types into the adaptive scheduler.
 * De-duped per submission (each affected category reschedules once), so a writing
 * full of case errors nudges practice once without flooding the queue. A `case`
 * error is attributed to the next case in the round-robin (see nextCaseCategory);
 * the pointer advances at most once per submission. Unknown/unmapped types ignored.
 */
export function applyWritingErrorsToAdaptive(errorTypes: Array<string | undefined | null>): void {
  const cats = new Set<SkillCategory>();
  let hasCaseError = false;
  for (const t of errorTypes) {
    if (!t) continue;
    if (t === 'case') {
      hasCaseError = true;
      continue;
    }
    const mapped = ERRORTYPE_TO_CATEGORY[t];
    if (mapped) cats.add(mapped);
  }
  // Resolve `case` once per submission so repeated case errors don't spin the
  // pointer mid-submission (keeps the de-dupe: one case nudge per submission).
  if (hasCaseError) cats.add(nextCaseCategory());
  for (const cat of cats) rateCategorySession(cat, ERROR_SCORE);
}

// Phase 3b (conversation): the maja-debrief endpoint returns practiceCategories
// the model derived from the student's actual errors. The server sanitizes
// shape; here we validate each token against the REAL category taxonomy
// (ALL_CATEGORIES) so a stray/hallucinated token can never reach the scheduler,
// then reschedule the valid ones to resurface in the daily session.
const VALID_CATEGORIES = new Set<string>(ALL_CATEGORIES);

export function applyConversationCategoriesToAdaptive(categories: unknown): void {
  if (!Array.isArray(categories)) return;
  const seen = new Set<SkillCategory>();
  for (const c of categories) {
    if (typeof c === 'string' && VALID_CATEGORIES.has(c)) seen.add(c as SkillCategory);
  }
  for (const cat of seen) rateCategorySession(cat, ERROR_SCORE);
}
