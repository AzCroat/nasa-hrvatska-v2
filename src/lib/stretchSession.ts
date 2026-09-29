// src/lib/stretchSession.ts
//
// THE STRETCH (Daily Session redesign, increment 6 — owner decision 6, 2026-09-28).
//
// The report: a finished daily session read as a finished day. Every meter on
// Home said 100% the moment the core session's last activity was done — the XP
// goal ring (DAILY_XP_GOAL is what the session itself pays), the "Session
// Complete! 🎉" card, the confetti — and the next-step engine's one pill after a
// five-slot session read as optional. A learner living in Croatia stopped there.
//
// THE BAR IS THE APP'S, NOT THE LEARNER'S (decision 6a). A preset picker
// (30/60/90 minutes) was proposed and REJECTED: "if they are unmotivated they may
// select what is easy — assume you are using the application to become fluent."
// So done-for-today is the core session PLUS every Stretch the evidence the app
// already holds can justify — never fewer than STRETCH_MIN, never more than
// STRETCH_MAX. Time is never the goal shown; the card counts sessions.
//
// A STRETCH IS A SECOND GUIDED SESSION (6b): STRETCH_LENGTH activities, offered
// as the Home hero with one Begin button, the shape the learner already follows,
// with the 2026-08-17 hero-only directive intact. It lives in the SAME
// `activities` array as the core, tagged `stretch: k`, so every mechanism that
// already works — the launch handshake, markDone by screen, the SRS auto-skip,
// the next-step engine's rung 2, the date/CEFR invalidation — works unchanged.
// The one consequence of that choice is load-bearing: `markDone` matches the
// FIRST activity with a given screen, so a screen may appear ONCE per day. Every
// stretch excludes every screen already in the plan.
//
// ONLY MEASURED EVIDENCE IS CALLED EVIDENCE (NEVER-DO 13). The sources, in
// order of urgency: word reviews due, lesson re-checks and missed items due
// (the retention scheduler), concepts the concept map calls shaky or due, the
// mastery ledger's weakest production and receptive skills when it HAS a verdict,
// and adaptive categories the scheduler has MEASURED below the pass mark among
// categories the course has reached. Each such activity carries the reason the
// slot machinery already writes for it. A learner with none owes one Stretch on
// the path ahead — production, comprehension, the current unit's own drills, a
// grammar backstop — whose reasons state the guarantee and never a measurement.
//
// TIES RESOLVE TOWARD SPEAKING AND LISTENING (6c), for everyone: fluency is
// production and comprehension. A measured weakness still outranks a tie.
//
// WHAT THIS NEVER DOES: serve a lesson from a locked unit (the gate is untouched
// — no `curriculum_<lesson>` activity is ever built here); credit a slot
// (`markDone` and the completion handshake are the only writers); keep a
// recommendation across completions (each Stretch is gathered when the previous
// one completes).
//
// `selectProduction` and `selectGrammar` are INJECTED because they live in
// `hooks/useDailySession`, which imports this module — importing them back would
// be a cycle. Everything else is a lib import.

import { fluencyAvailable } from './fluencyRound';
import type { DailySession, SessionActivity } from './dailySessionStore';
import { MINUTES_PER_ACTIVITY } from './dailySessionStore';
import { selectRetentionSlot } from './retentionSlot';
import { buildConceptMap, type ConceptEntry } from './conceptMap';
import { readRetention } from './lessonRetention';
import { readCurriculumSpine, readCompletedLessons } from './curriculumProgress';
import { readCourseState } from './courseStep';
import { weakestProductionKind, weakestReceptiveKind } from './masteryLedger';
import { getDueCategoryQueue, getCategoryStatus, type SkillCategory } from './adaptive';
import { readCourseAhead, isAheadOfCourse } from './courseGate';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from './categoryRoutes';
import { isUnlocked, type CefrLevel } from './cefr';
import { LESSON_PASS_THRESHOLD } from './lessonCheck';
import { selectGuaranteedInput } from './inputSlot';
import { curriculumPracticeActivity } from './curriculumSlot';
import { CEFR_EXERCISE_POOL } from './sessionPools';
import { readServedMap } from './sessionServed';
import {
  adaptiveReason,
  grammarSlotReason,
  practiceReason,
  productionReason,
  reviewReason,
  withReason,
  fluencyReason,
} from './activityReason';

/** Activities per Stretch — a second session's worth, without the lesson. */
export const STRETCH_LENGTH = 4;
/** The floor: a day is never done on the core session alone. */
export const STRETCH_MIN = 1;
/** The cap: about 90 minutes of graded work with the core. */
export const STRETCH_MAX = 3;

export interface StretchDeps {
  /** Servable word reviews due right now (the hook already computes it). */
  dueReviews: number;
  micBlocked: boolean;
  recentScreens: string[];
  selectProduction: (opts: {
    cefr: string;
    excludeScreens: string[];
    kindBias?: 'speak' | 'write' | 'converse';
  }) => SessionActivity | null;
  selectGrammar: (
    cefr: string,
    usedScreens: Set<string>,
    recentScreens: string[],
  ) => SessionActivity | null;
}

export interface StretchCandidate {
  activity: SessionActivity;
  /** 'measured' — the app measured this; 'path' — the path ahead, no measurement. */
  evidence: 'measured' | 'path';
  /** Speaking or listening — the modality a tie resolves toward (6c). */
  spoken: boolean;
  /** 0 due now (reviews, re-checks, shaky concepts) · 1 measured weakness · 2 path. */
  rank: 0 | 1 | 2;
}

function titleCase(category: string): string {
  return category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** The drill for a category at this level: the mapped route, else the easier one. */
function routeCategory(
  category: SkillCategory,
  level: string,
  used: ReadonlySet<string>,
): string | null {
  for (const screen of [CATEGORY_SCREEN_MAP[category], CATEGORY_EASIER_SCREEN[category]]) {
    if (!screen || used.has(screen)) continue;
    const cefr = SCREEN_CEFR[screen];
    if (cefr && !isUnlocked(cefr, level)) continue;
    return screen;
  }
  return null;
}

/**
 * One honest sentence for a concept the map calls shaky or due, from the
 * retention record it was derived from — the last check's score, the items due
 * again, or the re-check date. Never a percentage the learner did not produce.
 */
function conceptReason(
  e: ConceptEntry,
  rec: { last: { score: number; total: number } } | undefined,
) {
  if (rec && rec.last.total > 0 && rec.last.score / rec.last.total < LESSON_PASS_THRESHOLD) {
    return `Your ${e.title} check: ${rec.last.score} of ${rec.last.total}.`;
  }
  if (e.openMisses > 0) {
    return `${e.openMisses} question${e.openMisses === 1 ? '' : 's'} from ${e.title} ${e.openMisses === 1 ? 'is' : 'are'} due again.`;
  }
  return `${e.title}: a re-check is due.`;
}

/**
 * Every activity a Stretch could hold today, measured evidence first, each
 * screen at most once and none already in the plan. Every source is wrapped so a
 * store that cannot be read costs its own candidates and nothing else — the
 * day's plan must never depend on any one of them.
 */
export function gatherStretchCandidates(
  level: string,
  used: ReadonlySet<string>,
  deps: StretchDeps,
): StretchCandidate[] {
  const out: StretchCandidate[] = [];
  const seen = new Set(used);
  const add = (
    a: SessionActivity | null | undefined,
    evidence: StretchCandidate['evidence'],
    spoken: boolean,
    rank: StretchCandidate['rank'],
  ) => {
    if (!a || !a.screen || seen.has(a.screen)) return;
    seen.add(a.screen);
    out.push({ activity: a, evidence, spoken, rank });
  };
  const guarded = (fn: () => void) => {
    try {
      fn();
    } catch {
      /* one source unreadable — the others still serve */
    }
  };
  const lvl = level as CefrLevel;

  // ── Measured, due now ──────────────────────────────────────────────────────
  guarded(() => {
    if (deps.dueReviews > 0) {
      add(
        {
          id: 'srsreview',
          label: 'Word Review',
          screen: 'review',
          category: 'vocab-a2',
          ...withReason(reviewReason(deps.dueReviews)),
        },
        'measured',
        false,
        0,
      );
    }
  });
  guarded(() => add(selectRetentionSlot(), 'measured', false, 0));
  guarded(() => {
    const store = readRetention();
    const map = buildConceptMap(readCurriculumSpine(), store);
    for (const e of map.needsWork) {
      if (!e.practiceCategory) continue;
      const category = e.practiceCategory as SkillCategory;
      const screen = routeCategory(category, level, seen);
      if (!screen) continue;
      add(
        {
          id: `concept_${e.lessonId}`,
          label: e.title,
          screen,
          category,
          ...withReason(conceptReason(e, store.lessons[e.lessonId])),
        },
        'measured',
        false,
        e.state === 'shaky' ? 0 : 1,
      );
    }
  });

  // ── Fluency (recommendation 4): fast re-use of what is already mastered ──────
  // Drawn only from PASSED lessons, so its reason states a measured count. Rank 1:
  // after anything due or slipping, before the path ahead.
  guarded(() => {
    const store = readRetention();
    if (!fluencyAvailable(store)) return;
    add(
      {
        id: 'fluency',
        label: 'Quick Recall',
        screen: 'fluency',
        category: 'general',
        ...withReason(fluencyReason(Object.keys(store.lessons).length)),
      },
      'measured',
      false,
      1,
    );
  });

  // ── Measured weaknesses ────────────────────────────────────────────────────
  let weakProduction: 'speak' | 'write' | null = null;
  guarded(() => {
    weakProduction = weakestProductionKind(lvl);
    if (!weakProduction) return;
    const a = deps.selectProduction({
      cefr: level,
      excludeScreens: [...seen],
      kindBias: weakProduction,
    });
    if (a)
      add(
        { ...a, ...withReason(productionReason(weakProduction, lvl)) },
        'measured',
        weakProduction === 'speak',
        1,
      );
  });
  guarded(() => {
    if (!weakestReceptiveKind(lvl)) return;
    const inp = selectGuaranteedInput(level, new Set(seen), deps.recentScreens, {
      micBlocked: deps.micBlocked,
    });
    if (!inp) return;
    const { kind, ...a } = inp;
    add(a, 'measured', kind === 'listening', 1);
  });
  guarded(() => {
    const ahead = readCourseAhead();
    for (const { category } of getDueCategoryQueue(6)) {
      if (ahead.categories.has(category)) continue; // not taught yet — the gate
      const status = getCategoryStatus(category);
      if (!status.seen || status.accuracy === null || status.accuracy >= LESSON_PASS_THRESHOLD)
        continue;
      const screen = routeCategory(category, level, seen);
      if (!screen) continue;
      add(
        {
          id: `cat_${category}`,
          label: titleCase(category),
          screen,
          category,
          ...withReason(adaptiveReason(category)),
        },
        'measured',
        false,
        1,
      );
    }
  });

  // ── The path ahead (no measurement — the reasons state the guarantee) ──────
  // 6c: with no verdict between speaking and writing, the tie goes to speaking.
  const productionKind: 'speak' | 'write' = weakProduction ?? 'speak';
  guarded(() => {
    const a = deps.selectProduction({
      cefr: level,
      excludeScreens: [...seen],
      kindBias: productionKind,
    });
    if (a)
      add(
        { ...a, ...withReason(productionReason(null, lvl)) },
        'path',
        productionKind === 'speak',
        2,
      );
  });
  guarded(() => {
    const inp = selectGuaranteedInput(level, new Set(seen), deps.recentScreens, {
      micBlocked: deps.micBlocked,
    });
    if (!inp) return;
    const { kind, ...a } = inp;
    add(a, 'path', kind === 'listening', 2);
  });
  guarded(() => {
    // The current unit's own drills, for the lessons the learner has READ — never
    // a lesson, and never anything from a unit the course has not opened.
    const state = readCourseState();
    const unit = state.units.find((u) => u.index === state.currentIndex);
    if (!unit) return;
    const completed = readCompletedLessons();
    for (const lesson of unit.lessons) {
      if (!completed.has(lesson.id)) continue;
      const a = curriculumPracticeActivity({
        lessonId: lesson.id,
        userCefr: level,
        used: seen,
        screenMap: CATEGORY_SCREEN_MAP,
        easierMap: CATEGORY_EASIER_SCREEN,
        screenCefr: SCREEN_CEFR,
        isUnlocked,
      });
      if (a) add({ ...a, ...withReason(practiceReason(a.category)) }, 'path', false, 2);
    }
  });
  guarded(() => {
    const a = deps.selectGrammar(level, new Set(seen), deps.recentScreens);
    if (a) add({ ...a, ...withReason(grammarSlotReason()) }, 'path', false, 2);
  });
  guarded(() => {
    // Least-recently-served graded entries at level — the floor that keeps the
    // first Stretch buildable for a learner with nothing measured and a thin
    // unit. Browse (reference) entries are never a Stretch: a session slot is a
    // graded finish.
    const ahead = readCourseAhead();
    const served = readServedMap();
    const pool = CEFR_EXERCISE_POOL.filter(
      (ex) =>
        !ex.reference &&
        isUnlocked(ex.cefr, level) &&
        !(ex.micRequired && deps.micBlocked) &&
        !isAheadOfCourse(ex, ahead) &&
        !seen.has(ex.screen),
    ).sort((a, b) => (served[a.screen] ?? '').localeCompare(served[b.screen] ?? ''));
    for (const ex of pool.slice(0, STRETCH_LENGTH)) {
      add(
        { id: ex.id, label: ex.label, screen: ex.screen, category: ex.category },
        'path',
        false,
        2,
      );
    }
  });

  // Rank, then the modality a tie resolves toward, then the order gathered.
  return out
    .map((c, i) => ({ c, i }))
    .sort((a, b) => a.c.rank - b.c.rank || Number(b.c.spoken) - Number(a.c.spoken) || a.i - b.i)
    .map(({ c }) => c);
}

/** How many Stretches the evidence justifies: the measured items, one Stretch
 *  per STRETCH_LENGTH of them, floored and capped. */
export function stretchTargetFor(measured: number): number {
  return Math.max(STRETCH_MIN, Math.min(STRETCH_MAX, Math.ceil(measured / STRETCH_LENGTH)));
}

/** The next Stretch's activities, tagged. */
export function buildStretch(index: number, candidates: StretchCandidate[]): SessionActivity[] {
  return candidates.slice(0, STRETCH_LENGTH).map((c) => ({ ...c.activity, stretch: index }));
}

export interface StretchState {
  /** Every core (untagged) activity is done. */
  coreComplete: boolean;
  /** The Stretch the plan currently holds (0 before the first is built). */
  index: number;
  /** How many the day owes; undefined until the core is done and the evidence read. */
  target: number | undefined;
  /** Every activity of the current Stretch is done. */
  stretchComplete: boolean;
  /** The bar is met: core done, every owed Stretch built and done. */
  complete: boolean;
}

export function stretchState(session: DailySession): StretchState {
  const done = new Set(session.completedIds);
  const core = session.activities.filter((a) => a.stretch === undefined);
  const coreComplete = core.length > 0 && core.every((a) => done.has(a.id));
  const index = session.activities.reduce((m, a) => Math.max(m, a.stretch ?? 0), 0);
  const current = session.activities.filter((a) => a.stretch === index);
  const stretchComplete = index === 0 ? coreComplete : current.every((a) => done.has(a.id));
  const target = session.stretchTarget;
  const complete = coreComplete && target !== undefined && index >= target && stretchComplete;
  return { coreComplete, index, target, stretchComplete, complete };
}

/**
 * The plan after the evidence has been read: unchanged while the core or the
 * current Stretch is unfinished; the next Stretch appended when one is owed; the
 * target recorded once, when the core completes, and lowered to what could be
 * built when nothing servable is left (a bar the app cannot serve is not a bar).
 * Returns the SAME object when nothing changed, so a caller can skip persisting.
 */
export function extendWithStretch(
  session: DailySession,
  level: string,
  deps: StretchDeps,
): DailySession {
  const st = stretchState(session);
  if (!st.coreComplete || !st.stretchComplete) return session;
  if (st.target !== undefined && st.index >= st.target) return session;
  const used = new Set(session.activities.map((a) => a.screen));
  const candidates = gatherStretchCandidates(level, used, deps);
  const target =
    st.target ?? stretchTargetFor(candidates.filter((c) => c.evidence === 'measured').length);
  if (st.index >= target) return { ...session, stretchTarget: target };
  const next = buildStretch(st.index + 1, candidates);
  if (next.length === 0) return { ...session, stretchTarget: st.index };
  const activities = [...session.activities, ...next];
  return {
    ...session,
    activities,
    stretchTarget: target,
    estimatedMinutes: activities.length * MINUTES_PER_ACTIVITY,
  };
}
