// src/lib/dailySessionStore.ts
//
// The daily plan's SHAPE and its persistence, split out of useDailySession
// (2026-09-22) for the reason retentionSlot, inputSlot, croatiaPool and
// categoryRoutes were before it: that file sits at its 800-line ceiling and the
// ceiling was not raised. Storing a plan is not composing one.

import type { SkillCategory } from './adaptive';
import { localDateStr } from './dateUtils';
import { hasCurriculumSpine } from './curriculumProgress';
import { buildPlanReason, skillForCategory } from './masteryLedger';
import type { CefrLevel } from './cefr.js';

export type SessionCategory = SkillCategory | 'culture' | 'practical' | 'general';

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
  /**
   * Whether a curriculum spine existed when this plan was built.
   *
   * Absent on plans written before 2026-09-22, which reads as false and lets
   * those be repaired once. This is RECORDED rather than inferred from "the plan
   * has no lesson", because inferring it would couple the retry to the sequencer
   * (`courseStep.nextCourseStep`) staying total — and a future change there would
   * turn a silent no-op into a rebuild on every render. See
   * shouldRetryTeachingSlot.
   */
  spineSeen?: boolean;
  /**
   * The plan's one-line explanation, FROZEN when the plan is built and naming only
   * a skill the plan contains. It used to be computed on every render of Home from
   * the live ledger, so the first graded activity of the day rewrote it — a card that
   * said nothing at breakfast read "Today leans into vocabulary" after a case drill,
   * over a plan with no vocabulary in it. Absent on older plans, which then say
   * nothing: honest, and what a missing reason has always meant here.
   */
  planReason?: string;
  activities: SessionActivity[];
  completedIds: string[];
  estimatedMinutes: number;
}

export const SESSION_KEY = 'nh_daily_session';
export const MINUTES_PER_ACTIVITY = 5;

/**
 * A freshly built plan for today. ONE constructor for all three build sites —
 * the initial build, the date/CEFR rebuild, and the teaching-slot retry — so a
 * field recorded at two of them cannot be forgotten at the third.
 */
export function newSession(
  userCefr: string,
  activities: SessionActivity[],
  completedIds: string[],
): DailySession {
  return {
    date: localDateStr(),
    cefrLevel: userCefr,
    activities,
    completedIds,
    estimatedMinutes: activities.length * MINUTES_PER_ACTIVITY,
    spineSeen: hasCurriculumSpine(),
    ...planReasonFor(userCefr, activities),
  };
}

function planReasonFor(userCefr: string, activities: SessionActivity[]): { planReason?: string } {
  try {
    const r = buildPlanReason(
      userCefr as CefrLevel,
      activities.map((a) => skillForCategory(a.category)),
    );
    return r ? { planReason: r } : {};
  } catch {
    return {};
  }
}

/** Today's persisted plan, or null when there is none for today. */
export function loadPersistedSession(): DailySession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DailySession;
    return parsed.date === localDateStr() ? parsed : null;
  } catch {
    return null;
  }
}

export function persistSession(session: DailySession): void {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {}
}

/** Where completed session dates are kept (`{ [localDate]: true }`). */
const HISTORY_KEY = 'nh_session_history';

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
  } catch {
    /* history is best-effort */
  }
}
