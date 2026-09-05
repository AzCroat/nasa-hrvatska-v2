// src/hooks/useDailySession.ts
import { useState, useCallback, useEffect } from 'react';
import { getDueReviews, getServableReviewCount } from '../lib/srs';
import { getDueCategoryQueue, CONJ_CATEGORIES, CATEGORY_MIN_CEFR } from '../lib/adaptive';
import type { SkillCategory } from '../lib/adaptive';
import { CONJ_LAB_ENABLED } from '../lib/conjugation/conjugationConfig';
import { isUnlocked, cefrRank } from '../lib/cefr';
import { localDateStr } from '../lib/dateUtils';
import { rnd } from '../lib/random.js';
import { trackSessionBuilt } from '../lib/analytics';
import { CEFR_EXERCISE_POOL, EXERCISE_DIFFICULTY } from '../lib/sessionPools';
import { makeSessionSkillBoost, weakestProductionKind } from '../lib/masteryLedger';
import type { CefrLevel } from '../lib/cefr';
import { CROATIA_POOL, CITY_OF_DAY_SLOT_MAX_CEFR } from '../lib/croatiaPool';
import { pendingTaughtCategories } from '../lib/teachPractice';
import { buildCurriculumSlots } from '../lib/curriculumSlot';
import { skillGroupOf, SKILL_GROUP, type SkillGroup } from '../lib/skillGroups';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from '../lib/categoryRoutes';
import {
  reviewReason,
  taughtReason,
  adaptiveReason,
  productionReason,
  conversationReason,
  grammarSlotReason,
  croatiaReason,
  withReason,
} from '../lib/activityReason';
import { lsGet } from '../lib/safeStorage';
import { selectGuaranteedInput, inputKindOf } from '../lib/inputSlot';
import { readServedMap, SERVED_KEY } from '../lib/sessionServed';
// Re-exported so tests keep one import path for the session's guaranteed slots.
export { selectGuaranteedInput } from '../lib/inputSlot';
export type { InputKind } from '../lib/inputSlot';
// Re-exported so the content-coverage CI gate and session tests keep their
// import path (the data moved to ../lib/sessionPools for max-lines; the
// Croatia rotation pool followed in Wave 6 for the same reason).
export { CEFR_EXERCISE_POOL } from '../lib/sessionPools';
export type { CefrPoolEntry } from '../lib/sessionPools';
export { CROATIA_POOL } from '../lib/croatiaPool';
export type { CroatiaPoolEntry } from '../lib/croatiaPool';
// Re-exported so existing consumers/tests can keep importing the production-rep
// metric from this module (Session-Rec #6 lives in ../lib/productionMetric).
// Counting now happens centrally in useAward (any production completion, session
// or Practice); markDone only handles session recency rotation.
export { recordProductionRep, getProductionReps } from '../lib/productionMetric';
export type { ProductionReps } from '../lib/productionMetric';

// ── Types ────────────────────────────────────────────────────────────────────

// Sessions can include Croatia activities whose categories aren't SkillCategory
type SessionCategory = SkillCategory | 'culture' | 'practical' | 'general';

export interface SessionActivity {
  id: string;
  label: string;
  screen: string;
  category: SessionCategory;
  /**
   * One line explaining why THIS activity was chosen, built at session-build
   * time from real signal (per-activity reasons, 2026-08-20). Optional and
   * frequently absent by design: a slot with no honest signal says nothing
   * rather than inventing one. Persisted with the session so the learner sees
   * the reason it was picked this morning, not a line that rewrites itself.
   */
  reason?: string;
}

export interface DailySession {
  date: string; // 'YYYY-MM-DD'
  cefrLevel?: string; // CEFR level when session was built — invalidate on level-up
  activities: SessionActivity[];
  completedIds: string[];
  estimatedMinutes: number;
}

export interface UseDailySessionReturn {
  session: DailySession;
  isComplete: boolean;
  progress: number; // 0.0–1.0
  markDone: (screenOrId: string) => void;
  nextActivity: SessionActivity | null;
  tomorrowLabel: string;
  /**
   * Extra activities to suggest AFTER the curated daily session is done.
   * Solves the "Session Complete → nothing else to do" dead-end: users who
   * want to keep learning get 3–5 hand-picked next steps drawn from the
   * unlocked CEFR pool (excluding activities already in the daily session
   * and any done in the last 24h). Empty array when session is incomplete.
   */
  bonusActivities: SessionActivity[];
  /**
   * Build a fresh curated session on demand. Called when the user explicitly
   * chooses to keep going from the complete state (the session no longer
   * auto-regenerates, which used to hide the completion moment).
   */
  startFreshSession: () => void;
}

// ── Constants ────────────────────────────────────────────────────────────────

const SESSION_KEY = 'nh_daily_session';
const HISTORY_KEY = 'nh_session_history';
const RECENT_KEY = 'nh_recent_exercises';
const MINUTES_PER_ACTIVITY = 5;
const FLUENCY_MODE_KEY = 'nh_fluency_mode';

/**
 * Opt-in "fluency mode" (Session-Rec #3) — longer, production-heavier daily
 * sessions for learners who want to push harder. Read from localStorage so
 * buildSessionActivities (a pure-ish builder that already reads mic/recency/
 * city state) can consult it without threading a prop through the hook + HomeTab.
 */
export function readFluencyMode(): boolean {
  try {
    return localStorage.getItem(FLUENCY_MODE_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * Non-Croatia activity target for a session (Session-Rec #3). Scales with level
 * so beginners get a lighter session and stronger learners a fuller one, and the
 * opt-in fluency mode lengthens it further. This caps mandatory + fill slots; the
 * always-on Croatia slot is added on top, so total activities = this + 1.
 *   A1  → 3 (lighter — recognition + one production slot)
 *   A2+ → 4 (standard)
 *   fluency mode → +2 at every level (more fill on top of the production/
 *   conversation slots the B1+ shape already guarantees)
 * Default (mode off) keeps the long-standing 4–6 total-activity envelope.
 */
export function getSessionFillTarget(userCefr: string, fluencyMode: boolean): number {
  const base = cefrRank(userCefr) >= cefrRank('A2') ? 4 : 3;
  return fluencyMode ? base + 2 : base;
}

// Reference/immersion screens with no self-grading completion (read/scenario
// screens). The Priority-4 Croatia slot ALWAYS adds one of these, and they only
// fire the completion handshake on their error/empty path — never on normal
// viewing (the dwell-credit that used to cover that was removed 2026-06-12). So
// the always-present Croatia slot stranded the session at N-1/N: it could never
// complete, which also blocked the on-completion auto-regenerate. Treat
// "launched from the session and returned" as completion for these. Derived
// from CROATIA_POOL plus the Wave-4 reference-tagged pool entries (bounded
// bilingual browse screens) so it can never drift out of sync. Graded pool
// entries are never in this set — their completion stays quiz/award-gated.
export const SESSION_AUTOCOMPLETE_SCREENS: ReadonlySet<string> = new Set([
  ...CROATIA_POOL.map((c) => c.screen),
  ...CEFR_EXERCISE_POOL.filter((e) => e.reference).map((e) => e.screen),
]);

/**
 * Whether a launched session activity should be marked done on return to Home:
 * either the screen fired the real completion signal (`completed === pending`),
 * or it is a reference screen with no self-grading (auto-complete on view).
 */
export function shouldAutoCompleteOnReturn(
  pending: string | null,
  completed: string | null,
): boolean {
  if (!pending) return false;
  return completed === pending || SESSION_AUTOCOMPLETE_SCREENS.has(pending);
}

// ── Pure helpers (exported for unit tests) ───────────────────────────────────

// Choose the adaptive grammar activity for this session. CEFR-gates and re-points
// conjugation categories to the conjugation drill when CONJ_LAB_ENABLED. Returns
// null when no eligible category maps to an unused screen.
export function resolveAdaptiveActivity(
  userCefr: string,
  usedScreens: Set<string>,
): SessionActivity | null {
  const queue = getDueCategoryQueue(6);
  for (const { category } of queue) {
    const isConj = CONJ_LAB_ENABLED && CONJ_CATEGORIES.has(category);
    if (isConj) {
      const min = CATEGORY_MIN_CEFR[category];
      if (min && cefrRank(userCefr) < cefrRank(min)) continue; // not yet unlocked
    }
    const screen = isConj ? 'conjpractice' : CATEGORY_SCREEN_MAP[category];
    if (!screen || usedScreens.has(screen)) continue;
    // CEFR-gate non-conjugation picks by the mapped drill's level (conjugation is
    // gated above via CATEGORY_MIN_CEFR). Without this the coverage floor would
    // surface a locked drill — e.g. B1 accusative or B2 clitics — to an A1/A2
    // user. When every eligible category is locked this returns null and the
    // guaranteed-grammar slot (G2) backfills a level-appropriate drill.
    let resolved = screen;
    if (!isConj) {
      const screenCefr = SCREEN_CEFR[screen];
      if (screenCefr && !isUnlocked(screenCefr, userCefr)) {
        // Locked — but a category can have an easier drill teaching the SAME
        // thing. present-tense maps to `cloze` (A2), so before this an A1 user's
        // verb picks were silently dropped every single time and A1 could never
        // be served verb practice at all (recommender audit, 2026-08-20). Try
        // the lower-level equivalent before giving up on the category.
        const easier = CATEGORY_EASIER_SCREEN[category];
        const easierCefr = easier ? SCREEN_CEFR[easier] : undefined;
        if (!easier || usedScreens.has(easier) || !easierCefr || !isUnlocked(easierCefr, userCefr))
          continue;
        resolved = easier;
      }
    }
    const label = category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { id: `cat_${category}`, label, screen: resolved, category };
  }
  return null;
}

/**
 * Teach → practice coupling: the drill for the oldest taught-but-unpractised
 * category, or null when there is nothing pending (the common case).
 *
 * Reuses the SAME resolution as the adaptive pick — CATEGORY_SCREEN_MAP, then
 * CATEGORY_EASIER_SCREEN when the mapped drill sits above the learner's level,
 * with a CEFR gate on whichever it lands on. That reuse is load-bearing:
 * `present-tense` maps to `cloze` (A2), so without the easier-screen fallback an
 * A1 learner finishing the A1 verb lesson would queue a category whose only
 * drill they cannot open — the coupling would promise practice and silently
 * deliver nothing, which is the exact failure it exists to prevent.
 *
 * Exported for tests.
 */
export function resolveTaughtPracticeActivity(
  userCefr: string,
  usedScreens: Set<string>,
): SessionActivity | null {
  for (const category of pendingTaughtCategories()) {
    const candidates = [CATEGORY_SCREEN_MAP[category], CATEGORY_EASIER_SCREEN[category]].filter(
      Boolean,
    ) as string[];
    for (const screen of candidates) {
      if (usedScreens.has(screen)) continue;
      const screenCefr = SCREEN_CEFR[screen];
      if (screenCefr && !isUnlocked(screenCefr, userCefr)) continue;
      const label = category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      return { id: `taught_${category}`, label, screen, category };
    }
  }
  return null;
}

// Maps the user's CEFR level to a target difficulty tier (1–5). A stronger user
// is biased toward harder exercise types.
const CEFR_TIER: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 5 };

/**
 * A category whose drill teaches STRUCTURE rather than lexis. Used to (a) tell
 * whether a session already contains grammar and (b) pick the guaranteed
 * grammar slot (P2.7).
 *
 * DERIVED FROM SKILL_GROUP (2026-08-31), not hand-listed.
 *
 * It used to be a literal set of 21, written when the pool held roughly that
 * many structural categories. The practice programme then added ~130 pool-only
 * categories and nobody went back — so drills that plainly ARE structural
 * (`adjective-agreement`, `relative-koji`, `two-case-prepositions`,
 * `case-subtleties`) were invisible to both consumers. 127 of the 180 curriculum
 * lessons coupled to a drill outside the set, which is what left the session
 * length contract at +1 on those days even after the adaptive pick learned to
 * yield.
 *
 * `SKILL_GROUP` already answers this question, for every category, exhaustively
 * — `content-coverage.test.ts` fails if a pool category is missing from it. The
 * three structural families are case | verb | syntax; the other four (vocab,
 * speaking, listening, reading) are lexis or a modality. The derivation LOSES
 * NOTHING: all 21 hand-listed entries were already grouped case/verb/syntax, and
 * a test asserts that rather than trusting this comment. It gains 63.
 *
 * A NEW CATEGORY IS NOW CLASSIFIED ONCE, in SKILL_GROUP, and both the variety
 * pass and the grammar guarantee follow. That is the point — the hand-list went
 * stale precisely because it was a second place to remember.
 *
 * The one exclusion is `grammar-lesson`, and it is about the SLOT rather than
 * the subject matter: that tag covers `animlesson` and `grammarexplainer`, which
 * are lessons, not drills. P2.7 exists to guarantee a structure DRILL, and P0
 * already puts a lesson first in every session; letting the backstop serve a
 * second lesson would defeat both. (`grammarexplainer` is also AI-dependent,
 * which a guarantee should not be.) Excluding it keeps that slot behaving
 * exactly as it does today.
 */
const NON_DRILL_CATEGORIES: ReadonlySet<SessionCategory> = new Set<SessionCategory>([
  'grammar-lesson',
]);

export const GRAMMAR_STRUCTURE_CATEGORIES: ReadonlySet<SessionCategory> = new Set<SessionCategory>(
  (Object.keys(SKILL_GROUP) as SkillCategory[]).filter((category) => {
    const group = SKILL_GROUP[category];
    return (
      (group === 'case' || group === 'verb' || group === 'syntax') &&
      !NON_DRILL_CATEGORIES.has(category)
    );
  }),
);

function isGrammarStructure(category: SessionCategory): boolean {
  return GRAMMAR_STRUCTURE_CATEGORIES.has(category);
}

// Wave 9: mic-required entries (pronunciation_assess) are skipped when
// readMicState() is 'denied'/'unsupported', mirroring PRODUCTION_POOL's
// micRequired contract. Compute the context once per draw site — a cheap
// synchronous localStorage lookup. (The Wave 8 premium gate was removed
// 2026-08 with the subscription system: every entry serves every user.)
interface DrawCtx {
  micBlocked: boolean;
}
function drawCtx(): DrawCtx {
  const mic = readMicState();
  return {
    micBlocked: mic === 'denied' || mic === 'unsupported',
  };
}
function entryServable(ex: { micRequired?: boolean }, ctx: DrawCtx): boolean {
  if (ex.micRequired && ctx.micBlocked) return false;
  return true;
}

// G2: pick one guaranteed grammar/structure drill from the unlocked pool. It is
// level-appropriate (nearest CEFR to the user) and EXEMPT from the Priority-3
// difficulty-tier sort (G4) — that sort otherwise buries case/structure drills
// (tier 3–4) for A1/A2 users, starving exactly the learners who most need
// foundational grammar. Skips recent + already-used screens, falling back to
// ignoring recency rather than returning nothing.
export function selectGuaranteedGrammar(
  userCefr: string,
  usedScreens: Set<string>,
  recentScreens: string[],
): SessionActivity | null {
  const ctx = drawCtx();
  const grammar = CEFR_EXERCISE_POOL.filter(
    (ex) =>
      isGrammarStructure(ex.category) &&
      isUnlocked(ex.cefr, userCefr) &&
      entryServable(ex, ctx) &&
      !usedScreens.has(ex.screen),
  );
  let candidates = grammar.filter((ex) => !recentScreens.includes(ex.screen));
  if (candidates.length === 0) candidates = grammar; // recency fallback
  if (candidates.length === 0) return null;
  // Nearest CEFR to the user first (level-appropriate); random tiebreak rotates
  // same-level drills day to day.
  const userRank = cefrRank(userCefr);
  const pick = candidates
    .map((ex) => ({ ex, dist: Math.abs(cefrRank(ex.cefr) - userRank), r: rnd() }))
    .sort((a, b) => a.dist - b.dist || a.r - b.r)[0]!.ex;
  return { id: pick.id, label: pick.label, screen: pick.screen, category: pick.category };
}

export function buildSessionActivities(
  userCefr: string,
  poolWords?: Set<string>,
): SessionActivity[] {
  const activities: SessionActivity[] = [];

  // ── Priority 0: TODAY'S LESSON (Wave 1, 2026-08-28) ─────────────────────────
  // Placed FIRST — a lesson each day, before anything tests you — and followed
  // immediately by the drill for what it taught. Consumes fill slots rather than
  // extra ones (the fill loop caps on activities.length), so the session-length
  // contract does not move. Empty when there is no curriculum data. Resolution,
  // and the reasons it works this way, live in lib/curriculumSlot.
  const curriculumSlots = buildCurriculumSlots({
    userCefr,
    screenMap: CATEGORY_SCREEN_MAP,
    easierMap: CATEGORY_EASIER_SCREEN,
    screenCefr: SCREEN_CEFR,
    isUnlocked,
  });
  activities.push(...curriculumSlots);
  // Whether TODAY IS A LESSON DAY, which is what scopes the budget rule at P2.7
  // below. See the comment there for why the rule must not apply without one.
  const isLessonDay = curriculumSlots.length > 0;

  // Priority 1: FSRS word reviews — gated on what ReviewScreen can actually
  // serve, not the raw FSRS count. When poolWords is provided (HomeTab call
  // path), drop orphan cards (words removed from vocabulary) so the slot is
  // only added if /review will render content. Fallback to the unfiltered
  // count when no pool is provided (e.g., unit tests).
  // Use the servable (orphan-filtered) count ONLY when poolWords is actually
  // populated. On a cold app-open the pool is empty on the first render (content
  // loads async) — treating that as "0 due" silently dropped the Word Review slot
  // from the whole day's session (it's built once, keyed on userCefr). Fall back to
  // the raw FSRS due count when the pool isn't ready, so due reviews still get a slot.
  const dueCount =
    poolWords && poolWords.size > 0 ? getServableReviewCount(poolWords) : getDueReviews().length;
  if (dueCount > 0) {
    activities.push({
      id: 'srsreview',
      label: 'Word Review',
      screen: 'review',
      category: 'vocab-a2',
      ...withReason(reviewReason(dueCount)),
    });
  }

  // Priority 1.5: Teach → practice coupling (2026-08-20). If the learner finished
  // a lesson and has not yet practised what it taught, that drill takes a slot
  // BEFORE the adaptive scheduler's pick — a concept the learner just met beats a
  // statistical estimate of where they are weakest. Before this, finishing a
  // lesson changed nothing about the next session, which is also how the A1 verb
  // hole stayed invisible: taught at A1, drillable only from A2.
  const taughtActivity = resolveTaughtPracticeActivity(
    userCefr,
    new Set(activities.map((a) => a.screen)),
  );
  if (taughtActivity) {
    activities.push({
      ...taughtActivity,
      ...withReason(taughtReason(taughtActivity.category as SkillCategory)),
    });
  }

  // Priority 2: Adaptive grammar topic (CEFR-gated; conjugation categories route
  // to the conjugation drill when CONJ_LAB_ENABLED).
  //
  // THE ADAPTIVE PICK YIELDS WHEN THE BUDGET IS SPENT (owner decision,
  // 2026-08-30). It is the only pre-fill slot that both is optional and can be
  // supplied by something else in the same session, so it is what gives way
  // when the session would otherwise run over `fillTarget`.
  //
  // Why this one. P0 pushes TWO slots on a lesson day — the lesson and the drill
  // for what it taught — and the fill loop can only absorb the first, because
  // the guaranteed slots (P2.4 conversation at B1+, P2.5 production) have
  // already spent the rest of the target. A1 and B1+ each have exactly one fill
  // slot to give, so both ran one activity long on every lesson day; A2 has two
  // and was already correct. Measured before this change: A1 4→5, A2 5→5,
  // B1–C2 5→6.
  //
  // The priority is not new. P1.5's own rationale already states it: the drill
  // for a concept the learner just met takes a slot BEFORE the adaptive
  // scheduler's pick, because it beats a statistical estimate of where they are
  // weakest. This applies the same ordering to the budget.
  //
  // The reservation is what keeps it from over-correcting: the pick still runs
  // whenever there is genuinely room, which is why A2 is untouched and why a
  // session with no curriculum spine composes exactly as it did before. What is
  // reserved is only the slots that MUST still come after this point —
  // production always, plus the conversation anchor at B1+.
  //
  // The adaptive MODEL is unaffected: every coupled drill still records its
  // outcome through completeExercise, so the scheduler keeps learning even on
  // days it does not get a slot. It serves again as soon as there is room —
  // once the learner finishes their level's lessons, or on any day without one.
  //
  // YIELDING HERE ONLY SAVES A SLOT IF P2.7 DOES NOT TAKE IT (owner decision,
  // 2026-08-31 — the second half of this fix). P2.7 forces in a grammar drill
  // when nothing in the session is grammar yet, and the adaptive pick is
  // USUALLY grammar, so the two are alternatives rather than additions. The
  // first attempt at the length fix dropped the pick unconditionally and P2.7
  // silently replaced it: same length, but an any-level-appropriate drill in
  // place of one aimed at a measured weakness. The interim fix kept the pick
  // whenever the session had no grammar, which held the downgrade off at the
  // cost of leaving those days +1.
  //
  // Both now yield to the SAME budget rule, stated once below and applied at
  // both slots: no pre-fill guarantee may push the session past `fillTarget`.
  // That is what actually closes the +1 — and it is worth being exact about
  // WHICH slot was over, because the composition dump contradicts the obvious
  // reading: on a vocab-coupled lesson day P2.7 never fired at all. The extra
  // activity was this pick. Making only the grammar guarantee yield would have
  // changed nothing.
  const fillTarget = getSessionFillTarget(userCefr, readFluencyMode());
  const reservedAfterAdaptive = 1 + (cefrRank(userCefr) >= cefrRank('B1') ? 1 : 0);
  const roomForAdaptive = activities.length + reservedAfterAdaptive < fillTarget;
  const adaptiveActivity = roomForAdaptive
    ? resolveAdaptiveActivity(userCefr, new Set(activities.map((a) => a.screen)))
    : null;
  if (adaptiveActivity) {
    activities.push({
      ...adaptiveActivity,
      ...withReason(adaptiveReason(adaptiveActivity.category as SkillCategory)),
    });
  }

  // Build usedScreens once, here, so the production slots and P3 all dedup.
  const usedScreens = new Set(activities.map((a) => a.screen));

  // Priority 2.4: Conversation anchor at B1+ (Session-Rec #4). Spontaneous
  // interactive output is the fluency lever recognition can't replace, so every
  // B1+ session guarantees one conversation turn (guided Dialogue by default —
  // zero AI cost — with the unbounded AI mode one tap away). Added BEFORE the
  // general production slot, and recency is intentionally ignored here (we WANT
  // conversation daily; DialogueSim rotates its own scenarios), so it never
  // degrades into a non-conversation. A1/A2 skip this — they get a single
  // combined output slot via P2.5 — keeping early sessions light (Rec #3 will
  // formalise the per-level shape).
  if (cefrRank(userCefr) >= cefrRank('B1')) {
    const conversation = selectProductionExercise({
      cefr: userCefr,
      micState: readMicState(),
      recentScreens: [],
      excludeScreens: [...usedScreens],
      kindBias: 'converse',
    });
    if (conversation && !usedScreens.has(conversation.screen)) {
      activities.push({ ...conversation, ...withReason(conversationReason()) });
      usedScreens.add(conversation.screen);
    }
  }

  // Priority 2.5: Production — a guaranteed active-output slot every session
  // (Session-Rec #2). The expanded pool (Rec #1) includes keyboard modes down to
  // A1 (`dialogue`) / A2 (`writing`), so the helper returns a slot for every A1+
  // user in every mic state — production is no longer a sometimes-thing. Excludes
  // screens already queued so it never double-books an earlier slot.
  // Phase 3 journey engine: bias the production slot toward the less-
  // demonstrated of speaking vs writing (mastery ledger). kindBias is a
  // bias-not-filter — the selector still falls back per mic state.
  const productionActivity = selectProductionExercise({
    cefr: userCefr,
    micState: readMicState(),
    recentScreens: getRecentProduction(),
    excludeScreens: [...usedScreens],
    kindBias: weakestProductionKind(userCefr as CefrLevel) ?? undefined,
  });
  if (productionActivity && !usedScreens.has(productionActivity.screen)) {
    activities.push({
      ...productionActivity,
      ...withReason(productionReason(weakestProductionKind(userCefr as CefrLevel))),
    });
    usedScreens.add(productionActivity.screen);
  }

  // Recency list — shared by the guaranteed-grammar slot (P2.7) and the P3 fill.
  const recentScreens: string[] = (() => {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]') as string[];
    } catch {
      return [];
    }
  })();

  // Priority 2.7: Guaranteed grammar/structure (G2). P2's adaptive pick can be a
  // vocab category or null, and the P3 tier sort buries grammar for A1/A2 — so a
  // session could contain zero grammar. If nothing queued so far is
  // grammar/structure, force in one level-appropriate drill (tier-sort-exempt,
  // G4).
  //
  // THE GUARANTEE YIELDS ON A LESSON DAY WHEN THE BUDGET IS ALREADY SPENT
  // (owner decision, 2026-08-31). The comment here used to say the slot "counts
  // toward fillTarget, so it DISPLACES a vocab fill rather than lengthening the
  // session". That is true only while a fill slot remains to displace: the P3
  // loop caps on `activities.length`, so once the earlier guarantees have
  // reached the target there is no fill left and this slot is pure addition.
  // On a lesson day whose coupled drill is lexis, spoken performance or
  // reading, that is exactly the state we arrive in — and it is why closing the
  // +1 needs BOTH this and the adaptive pick to stand down. Dropping either one
  // alone frees a slot the other immediately takes.
  //
  // WHY `isLessonDay` SCOPES IT, and why the unscoped version was wrong.
  // Written first as a plain budget rule, this stood P2.7 down on a NON-lesson
  // session too: an SRS review plus a vocab adaptive pick plus conversation
  // plus production also reaches the target, and that session then contained no
  // grammar at all. Caught by `useDailySession.test.ts`'s "forces in a
  // grammar/structure drill even when the adaptive pick is VOCAB" — a case the
  // measurement run before shipping had missed, because it used the REAL
  // adaptive queue, which returns a grammar category, so the grammar always
  // came from the pick and P2.7's branch was never exercised.
  //
  // That day is over the target too, and pre-dates all of this — but it is a
  // different decision with a different justification. The trade taken here is
  // "a day whose LESSON is lexical may skip the grammar backstop"; it says
  // nothing about a day with no lesson at all, where the backstop is the only
  // thing standing between the learner and an all-vocabulary session. Removing
  // it there would be scope this change has not earned.
  //
  // The check reads `activities.length` at THIS point, after production and the
  // B1+ conversation anchor, so it measures the real remaining budget rather
  // than predicting it.
  //
  // WHAT THIS COSTS, stated rather than buried: on 55 of the 180 lesson days
  // the session contains no grammar drill at all (A1 9, A2 0, B1 4, B2 10,
  // C1 16, C2 16). On the other 125 the lesson's own coupled drill is
  // structural and supplies it — a better source than the backstop anyway. The
  // A1 figure is the one to weigh if this is ever revisited: A1 is the level
  // P2.7 was built for.
  const roomForGuaranteedGrammar = !isLessonDay || activities.length < fillTarget;
  if (roomForGuaranteedGrammar && !activities.some((a) => isGrammarStructure(a.category))) {
    const grammar = selectGuaranteedGrammar(userCefr, usedScreens, recentScreens);
    if (grammar) {
      activities.push({ ...grammar, ...withReason(grammarSlotReason()) });
      usedScreens.add(grammar.screen);
    }
  }

  // Priority 2.8: Guaranteed comprehension — one listening OR reading activity
  // per session (content expansion item 2, 2026-09-04). See selectGuaranteedInput
  // for the census that motivated it. Rules, all inherited from the slots above:
  //   * it takes a FILL slot, never adds one — the check reads activities.length
  //     against fillTarget at this point, the same budget rule P2 and P2.7 obey,
  //     so the 180/180 lesson-day length contract and every non-lesson length
  //     are unchanged by construction;
  //   * it stands down when the session already contains input (a curriculum
  //     coupling to a reading drill, an SRS-free day whose adaptive pick was
  //     listening) — a guarantee, not an addition;
  //   * it sits AFTER the grammar guarantee, so on the one day-shape where only
  //     one slot remains and the adaptive pick was not grammar, grammar wins.
  //     That is the owner's earlier G2 directive; measured, it costs input on
  //     no non-lesson day at any level (see sessionInputSlot.test.ts).
  if (activities.length < fillTarget && !activities.some((a) => inputKindOf(a.category))) {
    const input = selectGuaranteedInput(userCefr, usedScreens, recentScreens, drawCtx());
    if (input) {
      const { kind: _kind, ...activity } = input;
      activities.push(activity);
      usedScreens.add(input.screen);
    }
  }

  // Priority 3: CEFR-appropriate fill (skip recent, exclude already queued screens)
  const ctx = drawCtx();
  let pool = CEFR_EXERCISE_POOL.filter(
    (ex) =>
      isUnlocked(ex.cefr, userCefr) &&
      entryServable(ex, ctx) &&
      !recentScreens.includes(ex.screen) &&
      !usedScreens.has(ex.screen),
  );

  // Fallback: if recency filter leaves nothing, use full unlocked pool
  if (pool.length === 0) {
    pool = CEFR_EXERCISE_POOL.filter(
      (ex) =>
        isUnlocked(ex.cefr, userCefr) && entryServable(ex, ctx) && !usedScreens.has(ex.screen),
    );
  }

  // Bias the fill toward the user's ability tier: nearest difficulty first, with
  // a random tiebreak so same-tier types still rotate for variety (recency
  // already rotates day to day). Replaces the prior pure shuffle so difficulty
  // actually scales with the user (defect #1: difficulty was inert).
  const targetTier = CEFR_TIER[userCefr] ?? 3;
  // Phase 3 journey engine: within the same difficulty distance, activities
  // whose skill the mastery ledger marks untested/developing serve first.
  // Deliberately a TIE-BREAK behind `dist` so the difficulty contract (a B2
  // session contains no tier-1 games) is untouched; with an empty ledger every
  // boost is equal and ordering degrades to the pre-Phase-3 random tiebreak.
  const skillBoost = makeSessionSkillBoost(userCefr as CefrLevel);
  const orderFill = (list: typeof pool) =>
    [...list]
      .map((ex) => ({
        ex,
        // Phase 1 (fluency initiative): `adaptive` entries level their own
        // content to the user, so they are ALWAYS difficulty-matched — a fixed
        // score ranked the app's richest input content (leveled stories,
        // readers, generated listening) away from exactly the advanced users
        // it serves best.
        dist: ex.adaptive ? 0 : Math.abs((EXERCISE_DIFFICULTY[ex.id] ?? 3) - targetTier),
        boost: skillBoost(ex.category),
        r: rnd(),
      }))
      .sort((a, b) => a.dist - b.dist || b.boost - a.boost || a.r - b.r)
      .map((o) => o.ex);
  const ordered = orderFill(pool);
  // Session-Rec #3: target scales with level + opt-in fluency mode (was a hard
  // 4). Computed once at the adaptive slot above, which now needs it too.
  //   ^ see `fillTarget` at Priority 2.
  // Wave 1 (session catchment): the LAST fill slot is a discovery slot — picked
  // by least-recently-served instead of difficulty-nearest, so the widened pool
  // actually cycles through sessions over time instead of staying buried behind
  // the difficulty sort. Session length is unchanged: discovery DISPLACES the
  // final difficulty pick, it never adds a slot.
  const discoveryTarget = fillTarget > activities.length + 1 ? fillTarget - 1 : fillTarget;
  // Wave 4: at most ONE reference (browse) entry per session, across the
  // difficulty fill AND the discovery slot — browse content must never crowd
  // out graded drills.
  let referenceServed = false;
  // Vary by SKILL, not by screen (2026-08-20). The recency filter above excludes
  // recently-seen SCREENS, which reads as variety but is not: A1's pool is
  // case-heavy (9 of 33 entries), so three different screens could hand a
  // learner three case drills in a row and every one would pass recency.
  //
  // Two passes over the SAME difficulty-ordered list. Pass 1 takes only
  // candidates from a skill family the session does not already contain; pass 2
  // fills any remaining slots with no family constraint. Ordering, the reference
  // cap and session length are all unchanged — this only decides WHICH of the
  // equally-eligible candidates gets each slot, so the difficulty contract (a B2
  // session contains no tier-1 games) still holds. The seed set counts EVERY
  // activity already queued, not just fill picks: the adaptive slot and the
  // guaranteed-grammar slot are usually the first two case drills.
  const usedGroups = new Set(
    activities.map((a) => skillGroupOf(a.category)).filter(Boolean) as SkillGroup[],
  );
  const takeFill = (ex: (typeof ordered)[number]): void => {
    activities.push({ id: ex.id, label: ex.label, screen: ex.screen, category: ex.category });
    usedScreens.add(ex.screen);
    const g = skillGroupOf(ex.category);
    if (g) usedGroups.add(g);
    if (ex.reference) referenceServed = true;
  };
  // Ordered by the same difficulty rule but WITHOUT the recency filter — the
  // widened list pass 2 draws from.
  const orderedAll = orderFill(
    CEFR_EXERCISE_POOL.filter(
      (ex) =>
        isUnlocked(ex.cefr, userCefr) && entryServable(ex, ctx) && !usedScreens.has(ex.screen),
    ),
  );
  const fillPass = (list: typeof ordered, newFamilyOnly: boolean): void => {
    for (const ex of list) {
      if (activities.length >= discoveryTarget) break;
      if (ex.reference && referenceServed) continue;
      if (usedScreens.has(ex.screen)) continue;
      if (newFamilyOnly) {
        const g = skillGroupOf(ex.category);
        if (g && usedGroups.has(g)) continue;
      }
      takeFill(ex);
    }
  };
  // 1 — a family the session lacks, not seen recently. The ideal pick.
  fillPass(ordered, true);
  // 2 — a family the session lacks, even if seen recently. This ordering is the
  // whole fix: when the only un-recent content left is a fourth case drill,
  // repeating yesterday's vocab game is the better session. Measured on a
  // history-thinned A1 pool, the old order produced four case activities out of
  // five graded slots; recency is the cheaper thing to give up.
  fillPass(orderedAll, true);
  // 3/4 — variety exhausted; fall back to keeping the session full length.
  fillPass(ordered, false);
  fillPass(orderedAll, false);
  if (activities.length < fillTarget) {
    const served = readServedMap();
    const discovery = pool
      .filter((ex) => !usedScreens.has(ex.screen) && !(ex.reference && referenceServed))
      .map((ex) => ({ ex, last: served[ex.screen] ?? '', r: rnd() }))
      .sort((a, b) => (a.last < b.last ? -1 : a.last > b.last ? 1 : a.r - b.r))[0];
    if (discovery) {
      const { ex } = discovery;
      activities.push({ id: ex.id, label: ex.label, screen: ex.screen, category: ex.category });
      usedScreens.add(ex.screen);
    }
  }

  // Priority 4: Croatia immersion — always 1 slot. Wave 2: the pool is CEFR-
  // filtered (register-heavy entries carry a `cefr` gate) and City of the Day
  // keeps first claim on the slot until visited; afterwards the day-of-month
  // rotation walks the rest of the UNLOCKED pool, so the widened culture
  // catchment surfaces without changing session length or the cityofday ritual.
  const today = localDateStr();
  // OWNER DECISION (2026-09-05): the first-claim rule below is A1–A2 only. The
  // plan is built once a day before anyone has opened City of the Day, so at
  // every level the slot WAS cityofday on every daily build and the rotation
  // ran only on same-day rebuilds. From B1 up the slot is the level-aware
  // rotation on every build and cityofday is not in it (it stays on Home).
  const cityInSlot = cefrRank(userCefr) <= cefrRank(CITY_OF_DAY_SLOT_MAX_CEFR);
  const cityVisited = !cityInSlot || lsGet('nh_cityofday_date') === today;
  const croatiaEligible = CROATIA_POOL.filter(
    (c) => isUnlocked(c.cefr ?? 'A1', userCefr) && (cityInSlot || c.screen !== 'cityofday'),
  );
  const croatiaRotation = croatiaEligible.filter((c) => c.screen !== 'cityofday');
  // Rotation fix (2026-08-14, owner report: the same culture card appeared
  // every day): day-of-month modulo repeated a pick whenever the session
  // rebuilt mid-day (level change / fresh session), because the modulo is a
  // pure function of the DATE, not of what was actually served. Now: least-
  // recently-served over the unlocked pool (same nh_session_served map the
  // discovery slot uses, written by recordServedScreens below) — an entry
  // cannot repeat until every other unlocked culture entry has been served,
  // no matter how often the session rebuilds. Never-served entries go first,
  // in pool order.
  const servedMap = readServedMap();
  const lrs = (list: typeof croatiaRotation) =>
    [...list].sort((a, b) => (servedMap[a.screen] ?? '').localeCompare(servedMap[b.screen] ?? ''));
  // LEVEL-AWARE ROTATION (content expansion item 3, 2026-09-05). Plain LRS over
  // everything unlocked treated an A1 survival card and a C1 essay identically,
  // and above B1 the pool had one card per tier — measured over 40 culture days
  // a C1 learner saw own-level content on 1 (C2: 1). The rotation now ALTERNATES
  // between two LRS cycles: the learner's OWN TIER (entries gated exactly at
  // their level, plus `adaptive` entries that level themselves) and everything
  // below it. Whichever cycle was served less recently goes next; never-served
  // ties break to the own tier, so an advanced learner's first culture day is
  // at level. Within each cycle nothing repeats until the cycle is exhausted —
  // the 2026-08-14 "same card every day" fix holds per cycle. A1 has no lower
  // cycle and A2–B1 already had most of their content at level, so the change
  // is largest exactly where the gap was: B2–C2 go from ≤1/40 to ~20/40.
  const ownTier = croatiaRotation.filter(
    (c) => (c.cefr ?? 'A1') === userCefr || (c.adaptive && isUnlocked(c.cefr ?? 'A1', userCefr)),
  );
  const lowerTier = croatiaRotation.filter((c) => !ownTier.includes(c));
  const newest = (list: typeof croatiaRotation) =>
    list.reduce((m, c) => ((servedMap[c.screen] ?? '') > m ? servedMap[c.screen]! : m), '');
  // Same-day tie (a level change or a fresh session rebuilds the plan): the
  // dates cannot say which cycle went last, so prefer the cycle with the larger
  // share of entries NOT yet served today. That walks both cycles to exhaustion
  // before anything repeats within a day — the 2026-08-14 contract — and on
  // real consecutive days the date comparison alone strictly alternates.
  const unservedShare = (list: typeof croatiaRotation, day: string) =>
    list.filter((c) => (servedMap[c.screen] ?? '') !== day).length / list.length;
  const pickCycle = (): typeof croatiaRotation => {
    if (ownTier.length === 0) return lowerTier;
    if (lowerTier.length === 0) return ownTier;
    const own = newest(ownTier);
    const low = newest(lowerTier);
    if (own !== low) return own < low ? ownTier : lowerTier;
    return unservedShare(ownTier, own) >= unservedShare(lowerTier, own) ? ownTier : lowerTier;
  };
  const cycle = pickCycle();
  const croatiaLRS = lrs(cycle.length ? cycle : croatiaRotation);
  const croatiaActivity =
    !cityVisited || croatiaLRS.length === 0 ? croatiaEligible[0]! : croatiaLRS[0]!;
  const atLevel = ownTier.includes(croatiaActivity);
  activities.push({
    id: croatiaActivity.id,
    label: croatiaActivity.label,
    screen: croatiaActivity.screen,
    category: croatiaActivity.category,
    ...withReason(croatiaReason(atLevel)),
  });

  // Wave 1: record what this session serves (feeds the discovery slot's
  // least-recently-served ordering) and emit the served-mix analytics event so
  // coverage broadening is observable in production, not assumed.
  recordServedScreens(activities.map((a) => a.screen));
  trackSessionBuilt({ cefr: userCefr, screens: activities.map((a) => a.screen) });

  return activities;
}

export function markDoneInSession(session: DailySession, id: string): DailySession {
  if (session.completedIds.includes(id)) return session; // idempotent
  return { ...session, completedIds: [...session.completedIds, id] };
}

export function recordSessionComplete(date: string): void {
  try {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}') as Record<
      string,
      boolean
    >;
    history[date] = true;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {}
}

function loadPersistedSession(): DailySession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DailySession;
    return parsed.date === localDateStr() ? parsed : null;
  } catch {
    return null;
  }
}

function persistSession(session: DailySession): void {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {}
}

// Wave 1: the served map (screen key → last date it appeared in a built
// session) lives in lib/sessionServed — the discovery slot and the P2.8
// comprehension slot both read it, and the slot moved out of this file for
// max-lines.
function recordServedScreens(screens: string[]): void {
  try {
    const map = readServedMap();
    const today = localDateStr();
    for (const s of screens) map[s] = today;
    localStorage.setItem(SERVED_KEY, JSON.stringify(map));
  } catch {}
}

// Record a completed activity's screen in the recent-exercises list so the
// Priority-3 "skip recent" filter actually rotates day to day. Previously this
// list was only written by the Practice tab, so a Today's-Session-only user kept
// getting the same fill exercises. Mirrors GradTab's writer (cap 6, de-duped).
function recordRecentExercise(screen: string): void {
  try {
    const prev = (JSON.parse(localStorage.getItem(RECENT_KEY) || '[]') as string[]).filter(
      (s) => s !== screen,
    );
    localStorage.setItem(RECENT_KEY, JSON.stringify([screen, ...prev].slice(0, 6)));
  } catch {}
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useDailySession(userCefr: string, poolWords?: Set<string>): UseDailySessionReturn {
  const [session, setSession] = useState<DailySession>(() => {
    const persisted = loadPersistedSession();
    // Invalidate if date changed OR CEFR level changed (new exercises unlocked)
    if (persisted && persisted.date === localDateStr() && persisted.cefrLevel === userCefr) {
      return persisted;
    }
    const activities = buildSessionActivities(userCefr, poolWords);
    const fresh: DailySession = {
      date: localDateStr(),
      cefrLevel: userCefr,
      activities,
      completedIds: [],
      estimatedMinutes: activities.length * MINUTES_PER_ACTIVITY,
    };
    persistSession(fresh);
    return fresh;
  });

  // Handle date rollover or CEFR level-up after mount.
  //
  // 2026-05-21 BUG FIX: the previous implementation set `completedIds: []` on
  // every CEFR change, which wiped the user's session progress whenever stats
  // hydrated async after the initial render. Repro:
  //   1. App opens, stats not yet loaded → userCefr derives as 'A1'.
  //   2. Session is built with A1 activities and marked complete by user actions.
  //   3. Firebase hydration lands a moment later, stats.xp jumps to real value,
  //      userCefr re-derives as e.g. 'B1'.
  //   4. This effect fired → built FRESH B1 session with completedIds: [] →
  //      every activity the user just finished now showed as not done.
  // Multiple users reported "I did my activities but the card forgot."
  //
  // Fix: when CEFR changes mid-day, preserve completedIds by mapping old
  // session screens to new ones — any new activity whose screen matches an old
  // completed activity stays completed. Date rollover (true new day) still
  // wipes — that's the intended fresh-day behavior.
  useEffect(() => {
    const isNewDay = session.date !== localDateStr();
    const isCefrChange = session.cefrLevel !== userCefr;
    if (!isNewDay && !isCefrChange) return;
    // (poolWords change does NOT trigger this effect — only date/CEFR — so
    // the activity list stays stable as content lazy-loads.)

    const activities = buildSessionActivities(userCefr, poolWords);

    let completedIds: string[];
    if (isNewDay) {
      completedIds = []; // genuine new day — start fresh
    } else {
      // CEFR change mid-day: preserve progress by screen-match. An activity in
      // the OLD session whose screen also appears in the NEW session was
      // already accomplished — don't ask the user to redo it.
      const completedScreens = new Set(
        session.activities.filter((a) => session.completedIds.includes(a.id)).map((a) => a.screen),
      );
      completedIds = activities.filter((a) => completedScreens.has(a.screen)).map((a) => a.id);
    }

    const fresh: DailySession = {
      date: localDateStr(),
      cefrLevel: userCefr,
      activities,
      completedIds,
      estimatedMinutes: activities.length * MINUTES_PER_ACTIVITY,
    };
    persistSession(fresh);
    setSession(fresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCefr]);

  const markDone = useCallback((screenOrId: string) => {
    setSession((prev) => {
      // Match by id or by screen name
      const match = prev.activities.find((a) => a.id === screenOrId || a.screen === screenOrId);
      if (!match) return prev;
      if (prev.completedIds.includes(match.id)) return prev;
      const updated = markDoneInSession(prev, match.id);
      persistSession(updated);
      // Record the screen so the daily session's skip-recent filter rotates it
      // out next time (the write path that was missing for non-Practice users).
      recordRecentExercise(match.screen);
      // SP4b: track production exercises for recent-exclusion rotation. (The
      // Rec-#6 production-rep COUNT lives in useAward now — the central completion
      // point — so it captures Practice-tab production too, not just sessions.)
      if (PRODUCTION_SCREEN_IDS.has(match.screen)) {
        recordProductionExercise(match.screen);
      }
      // Check for session completion
      if (updated.completedIds.length === updated.activities.length) {
        recordSessionComplete(updated.date);
      }
      return updated;
    });
  }, []);

  // 2026-05-20 BUG FIX: auto-skip SRS review activity when nothing is due.
  //
  // Symptom users hit (screenshot, 2026-05-20):
  //   1. Morning session built with srsreview activity (reviews WERE due then).
  //   2. User burns through their queue, every card scheduled days out.
  //   3. Later they tap "Today's Session" → routes to /review → screen renders
  //      "All caught up!" dead-end with only a Go Back button — no path back
  //      into the session, no markDone signal fired.
  //   4. Tomorrow's session never unlocks because today is permanently stuck
  //      at N-1/N with a stale review slot.
  // Multiple users reported the same dead-end ("Today's Session is broken").
  //
  // Fix: when the activity list contains srsreview AND the FSRS queue is
  // empty right now, auto-mark it complete. The session card naturally
  // advances to the next pending activity, no dead-end screen possible.
  // Re-checks on every session change so a user who's clearing reviews
  // *during* the session is caught the moment the queue empties.
  useEffect(() => {
    const srsActivity = session.activities.find((a) => a.screen === 'review');
    if (!srsActivity) return;
    if (session.completedIds.includes(srsActivity.id)) return;
    // Use the same pool-aware count buildSessionActivities now uses, so the
    // skip decision agrees with what ReviewScreen will actually serve.
    // Use the servable (orphan-filtered) count ONLY when poolWords is actually
    // populated. On a cold app-open the pool is empty on the first render (content
    // loads async) — treating that as "0 due" silently dropped the Word Review slot
    // from the whole day's session (it's built once, keyed on userCefr). Fall back to
    // the raw FSRS due count when the pool isn't ready, so due reviews still get a slot.
    const dueCount =
      poolWords && poolWords.size > 0 ? getServableReviewCount(poolWords) : getDueReviews().length;
    if (dueCount > 0) return;
    // Use the same setter path markDone uses (persist + history side-effects).
    setSession((prev) => {
      if (prev.completedIds.includes(srsActivity.id)) return prev;
      const updated = markDoneInSession(prev, srsActivity.id);
      persistSession(updated);
      if (updated.completedIds.length === updated.activities.length) {
        recordSessionComplete(updated.date);
      }
      return updated;
    });
  }, [session, poolWords]);

  const isComplete = session.completedIds.length >= session.activities.length;
  const progress =
    session.activities.length === 0 ? 0 : session.completedIds.length / session.activities.length;
  const nextActivity = session.activities.find((a) => !session.completedIds.includes(a.id)) ?? null;
  const tomorrowLabel = readFluencyMode() ? '6–8 activities tomorrow' : '4–6 activities tomorrow';

  // Build a brand-new session ON DEMAND — the user taps "Start a fresh session"
  // from the complete state. This used to run automatically in a useEffect the
  // instant isComplete flipped true, which silently erased the "Session
  // Complete!" moment and made the bonus-activities next-steps unreachable (the
  // session felt endless — it just refilled). Completion is now a real, visible
  // state; regenerating is the user's explicit choice. buildSessionActivities
  // always returns >= 1 activity, and the just-completed screens are recorded
  // (skip-recent) so the fresh set rotates to different exercises.
  const startFreshSession = useCallback(() => {
    const activities = buildSessionActivities(userCefr, poolWords);
    const fresh: DailySession = {
      date: localDateStr(),
      cefrLevel: userCefr,
      activities,
      completedIds: [],
      estimatedMinutes: activities.length * MINUTES_PER_ACTIVITY,
    };
    persistSession(fresh);
    setSession(fresh);
  }, [userCefr, poolWords]);

  // Bonus activities — show only when the curated daily session is complete,
  // so users who want to keep learning have specific next steps instead of a
  // generic "come back tomorrow" message. Draws from CEFR_EXERCISE_POOL,
  // excluding screens already in today's session and any used in the last
  // 24h (recentScreens). Capped at 5.
  const bonusActivities: SessionActivity[] = isComplete
    ? (() => {
        const sessionScreens = new Set(session.activities.map((a) => a.screen));
        const recentScreens: string[] = (() => {
          try {
            return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]') as string[];
          } catch {
            return [];
          }
        })();
        const recentSet = new Set(recentScreens);
        const ctx = drawCtx();
        let pool = CEFR_EXERCISE_POOL.filter(
          (ex) =>
            isUnlocked(ex.cefr, userCefr) &&
            entryServable(ex, ctx) &&
            !sessionScreens.has(ex.screen) &&
            !recentSet.has(ex.screen),
        );
        if (pool.length === 0) {
          pool = CEFR_EXERCISE_POOL.filter(
            (ex) =>
              isUnlocked(ex.cefr, userCefr) &&
              entryServable(ex, ctx) &&
              !sessionScreens.has(ex.screen),
          );
        }
        // Wave 1: least-recently-served ordering (was a pure shuffle). For B1+
        // users the four guaranteed slots consume the whole fill target, so the
        // bonus round is their main window onto the widened pool — LRS makes it
        // actually rotate through everything instead of resampling favourites.
        const served = readServedMap();
        const shuffled = [...pool]
          .map((ex) => ({ ex, last: served[ex.screen] ?? '', r: rnd() }))
          .sort((a, b) => (a.last < b.last ? -1 : a.last > b.last ? 1 : a.r - b.r))
          .map((o) => o.ex);
        return shuffled.slice(0, 5).map((ex) => ({
          id: 'bonus_' + ex.id,
          label: ex.label,
          screen: ex.screen,
          category: ex.category,
        }));
      })()
    : [];

  return {
    session,
    isComplete,
    progress,
    markDone,
    nextActivity,
    tomorrowLabel,
    bonusActivities,
    startFreshSession,
  };
}

// ── Mic-state persistence (SP4b) ─────────────────────────────────────────────
// useRecorder writes 'available' | 'denied' | 'unsupported' on terminal state
// transitions. selectProductionExercise reads this to decide whether
// mic-required exercises are eligible. Unknown values fail-open to 'unknown'.
const MIC_STATE_KEY = 'nh_mic_state';
const VALID_MIC_STATES = new Set(['available', 'denied', 'unsupported']);
export type MicState = 'available' | 'denied' | 'unsupported' | 'unknown';

export function readMicState(): MicState {
  try {
    const v = localStorage.getItem(MIC_STATE_KEY);
    if (v && VALID_MIC_STATES.has(v)) return v as MicState;
  } catch (_) {
    // localStorage unavailable (iOS private browsing) — fall through
  }
  return 'unknown';
}

// ── Recent-production tracking (SP4b) ────────────────────────────────────────
// Tracks which production exercises the user has done in the last 3 days to
// avoid back-to-back repeats. Device-local by design — cross-device sync is
// out of scope per SP4b spec.
const PRODUCTION_RECENT_KEY = 'nh_recent_production';
const PRODUCTION_RECENT_WINDOW_DAYS = 3;

interface RecentProductionEntry {
  screen: string;
  date: string; // YYYY-MM-DD
}

function _todayStr(): string {
  // Delegates to the canonical local-date helper. This file already used
  // localDateStr() in nine places for the session's own day-keying; this helper
  // was the one UTC holdout, so the recent-production window boundary sat up to
  // a day away from the learner's own day.
  return localDateStr();
}

function _daysBetween(a: string, b: string): number {
  // Returns absolute day difference between two YYYY-MM-DD strings.
  // ISO-string parse is timezone-stable for date-only values.
  const aMs = new Date(a + 'T00:00:00Z').getTime();
  const bMs = new Date(b + 'T00:00:00Z').getTime();
  return Math.round(Math.abs(aMs - bMs) / 86400000);
}

export function getRecentProduction(): string[] {
  try {
    const raw = localStorage.getItem(PRODUCTION_RECENT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const today = _todayStr();
    return parsed
      .filter(
        (e): e is RecentProductionEntry =>
          e &&
          typeof e === 'object' &&
          typeof e.screen === 'string' &&
          typeof e.date === 'string' &&
          _daysBetween(today, e.date) < PRODUCTION_RECENT_WINDOW_DAYS,
      )
      .map((e) => e.screen);
  } catch (_) {
    return [];
  }
}

// ── Production pool (SP4b; expanded — Session-Rec #1/#2) ──────────────────────
// Exercises that require ACTIVE learner output, the fluency driver the daily
// loop was missing. `micRequired === false` members are eligible as the
// keyboard fallback for mic-blocked users — and, post Session-Rec #2, they
// guarantee the slot is never empty at any level (see selectProductionExercise).
//
// `kind` classifies the output mode so Session-Rec #4 can anchor an interactive
// CONVERSATION at B1+:
//   • 'speak'    — spoken output, scored acoustically (mic).
//   • 'write'    — typed free/guided output (keyboard).
//   • 'converse' — interactive turn-taking dialogue (keyboard).
//
// Session-Rec #1 routes the two unbounded AI modes into the loop (reversing the
// earlier "AI-consolidation" that confined them to the AI Tutor tab): `writing`
// (→ /api/correct, AI-graded free production) and `dialogue` (guided scenarios
// by default with an unbounded AI-conversation mode one tap away → /api/dialogue).
// Both are keyboard-only and BOTH endpoints are quota-gated (requireAuthedAI +
// _aiQuota: ≤1 unit/use, 300/user/day ceiling), so the daily-loop cost is bounded
// — the "Balanced" posture. `dialogue` at A1 + keyboard finally gives A1 and every
// mic-blocked user a real production slot (the old pool floored at A2/mic).
const PRODUCTION_POOL: Array<{
  id: string;
  label: string;
  screen: string;
  cefr: string;
  category: SkillCategory;
  micRequired: boolean;
  kind: 'speak' | 'write' | 'converse';
}> = [
  {
    id: 'dialogue',
    label: 'Conversation',
    // Guided scenarios (A1+) by default — zero AI cost — with an unbounded
    // AI-conversation mode available in-screen. Keyboard-capable (free-text or
    // multiple-choice turns), so it is eligible for mic-blocked users and is the
    // lowest-CEFR production option, which is what guarantees the slot at A1.
    screen: 'dialogue',
    cefr: 'A1',
    category: 'speaking',
    micRequired: false,
    kind: 'converse',
  },
  {
    id: 'writing_guided',
    label: 'Guided Writing',
    // Teaching-first written production (2026-08-18): model text → guided
    // frames (zero AI cost) → free production graded via /api/correct on the
    // learner's explicit submit. A1+ — the first writing content A1 gets.
    screen: 'writing_guided',
    cefr: 'A1',
    category: 'writing',
    micRequired: false,
    kind: 'write',
  },
  {
    id: 'writing',
    label: 'Writing',
    // Free typed production, AI-corrected via /api/correct (one quota unit on
    // submit). Keyboard-only → the universal fallback for mic-blocked users.
    screen: 'writing',
    cefr: 'A2',
    category: 'writing',
    micRequired: false,
    kind: 'write',
  },
  {
    id: 'shadowing',
    label: 'Shadowing',
    screen: 'shadowing',
    cefr: 'A2',
    category: 'speaking',
    micRequired: true,
    kind: 'speak',
  },
  {
    id: 'speaking',
    // Open spoken production. SpeakingScreen depends on parent-held state, so the
    // launcher (useScreenLauncher.launchSessionActivity) initialises its vocab
    // pool before navigating — without that init a cold session launch renders
    // blank, which is why this was deferred from the initial fluency series.
    label: 'Speaking',
    screen: 'speaking',
    cefr: 'A2',
    category: 'speaking',
    micRequired: true,
    kind: 'speak',
  },
  {
    id: 'production_drill',
    // screen MUST match the AppRouter route id ('production_drill', with
    // underscore) — a prior 'productiondrill' typo routed Today's Session →
    // Production to an empty page at B1+ (no such route). Audited 2026-05-30.
    label: 'Production',
    screen: 'production_drill',
    cefr: 'B1',
    category: 'speaking',
    micRequired: true,
    kind: 'speak',
  },
  {
    id: 'dictation',
    label: 'Dictation',
    // Retagged 'speaking' → 'writing' (2026-08-18): dictation is typed
    // orthography — its accuracy signal belongs to the writing skill.
    screen: 'dictation',
    cefr: 'B1',
    category: 'writing',
    micRequired: false,
    kind: 'write',
  },
  {
    id: 'speaking_sprint',
    // Wave 3: rapid timed speaking rounds, ends with an explicit Done award.
    // Browser SpeechRecognition + TTS only — no AI-quota endpoints — with a
    // typed-answer fallback, so it is keyboard-safe (micRequired false).
    label: 'Speaking Sprint',
    screen: 'speaking_sprint',
    cefr: 'A2',
    category: 'speaking',
    micRequired: false,
    kind: 'speak',
  },
];

/** Set of screen IDs in the production pool, for fast lookup in markDone wiring. */
export const PRODUCTION_SCREEN_IDS: ReadonlySet<string> = new Set(
  PRODUCTION_POOL.map((p) => p.screen),
);

/**
 * Every screen id "Today's Session" can route to, across all CEFR levels and all
 * priority slots. Derived from the pools so it can never drift. The
 * session-routes test asserts each of these resolves to a real AppRouter route —
 * a guard against the dead-lesson class of bug (e.g. the 'productiondrill' typo
 * that routed B1 Production to an empty page, fixed 2026-05-30).
 */
export const SESSION_SCREEN_IDS: ReadonlySet<string> = new Set<string>([
  'review', // Priority 1 SRS slot (hardcoded in buildSessionActivities)
  ...(Object.values(CATEGORY_SCREEN_MAP).filter(Boolean) as string[]),
  ...CEFR_EXERCISE_POOL.map((e) => e.screen),
  ...CROATIA_POOL.map((c) => c.screen),
  ...PRODUCTION_POOL.map((p) => p.screen),
]);

// ── Production exercise selector (SP4b; expanded — Session-Rec #2) ────────────
// Pure function — returns one SessionActivity from PRODUCTION_POOL, applying
// CEFR / mic / explicit-exclude / recent filters.
//
// GUARANTEE (Session-Rec #2): with `dialogue` (A1, keyboard) and `writing` (A2,
// keyboard) now in the pool, at least one member is unlocked and keyboard-safe
// for every level A1–C2 in every mic state — so this returns non-null for any
// A1+ user. It can still return null only when `excludeScreens` removes every
// remaining candidate (e.g. the Rec-#4 conversation anchor already took the sole
// option); callers treat null as "nothing left to add", never as a hard failure.
//
// `kindBias` (Session-Rec #4): when set, candidates whose `kind` matches are
// preferred — the conversation anchor passes 'converse' so B1+ reliably gets an
// interactive turn without forbidding the other modes when none is available.
export function selectProductionExercise(opts: {
  cefr: string;
  micState: MicState;
  recentScreens: string[];
  excludeScreens?: string[];
  kindBias?: 'speak' | 'write' | 'converse';
}): SessionActivity | null {
  const { cefr, micState, recentScreens, excludeScreens = [], kindBias } = opts;
  // Step 1 — CEFR gate
  let pool = PRODUCTION_POOL.filter((p) => isUnlocked(p.cefr, cefr));
  // Step 2 — mic-required filter (keyboard-only when denied/unsupported)
  if (micState === 'denied' || micState === 'unsupported') {
    pool = pool.filter((p) => !p.micRequired);
  }
  // Step 2b — hard exclude screens already queued this session (no fallback: a
  // dup would double-book the same screen). Unlike recency this is never relaxed.
  if (excludeScreens.length > 0) {
    pool = pool.filter((p) => !excludeScreens.includes(p.screen));
  }
  if (pool.length === 0) return null;
  // Step 3 — recent-exclusion (fall back to pre-filter if it empties)
  let candidates = pool.filter((p) => !recentScreens.includes(p.screen));
  if (candidates.length === 0) candidates = pool;
  // Step 3b — kind bias (Rec #4): prefer the requested output mode when present,
  // but never strand the slot if no member of that kind survived the filters.
  if (kindBias) {
    const biased = candidates.filter((p) => p.kind === kindBias);
    if (biased.length > 0) candidates = biased;
  }
  // Step 4 — random uniform pick
  const idx = Math.min(Math.floor(rnd() * candidates.length), candidates.length - 1);
  const picked = candidates[idx]!;
  return {
    id: picked.id,
    label: picked.label,
    screen: picked.screen,
    category: picked.category,
  };
}

export function recordProductionExercise(screen: string): void {
  if (!screen || typeof screen !== 'string') return;
  try {
    const raw = localStorage.getItem(PRODUCTION_RECENT_KEY);
    const arr: RecentProductionEntry[] = (() => {
      try {
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    })();
    const today = _todayStr();
    // Same-day re-record doesn't duplicate
    const existsToday = arr.some((e) => e.screen === screen && e.date === today);
    if (!existsToday) arr.push({ screen, date: today });
    // Prune entries older than the window before saving
    const pruned = arr.filter(
      (e) =>
        e &&
        typeof e.date === 'string' &&
        _daysBetween(today, e.date) < PRODUCTION_RECENT_WINDOW_DAYS,
    );
    localStorage.setItem(PRODUCTION_RECENT_KEY, JSON.stringify(pruned));
  } catch (_) {
    // QuotaExceededError or localStorage unavailable — non-fatal
  }
}
