/**
 * src/lib/nextStep.ts
 *
 * THE CONSTANT NEXT-STEP ENGINE (owner directive, 2026-08-16): "the user
 * should never be able to navigate to content [without guidance] — something
 * should always be recommended to complete." Learners — the owner's children
 * first — quit the moment the app stops prompting. This module answers ONE
 * question, deterministically, from the same signals the journey engine
 * already trusts: "what is the single best thing to do next, right now?"
 *
 * Priority ladder (first hit wins; ALWAYS returns a step — the fallback can
 * never miss):
 *   1. verification — a provisional level is waiting to be made real (the
 *      mastery gate outranks everything, same as its Home card).
 *   2. session      — today's session has unfinished activities: finish the
 *      plan before anything new.
 *   3. srs          — servable reviews are due (spaced repetition decays by
 *      the hour; reviews-when-due beat new content).
 *   3.5 retention   — a passed lesson is due for its re-check, an item missed
 *      before is due again, or the weekly mix is up (lib/lessonRetention).
 *      Beside the word reviews and above discretionary practice for the same
 *      reason: what is decaying outranks what is merely next.
 *   4. production   — the mastery ledger says speaking or writing is the
 *      weakest evidenced skill: train fluency where it lags.
 *   5. discovery    — the least-recently-served adaptive exercise (breadth).
 *   6. browse       — terminal fallback: open the library (never null).
 *
 * Pure read-only compute over localStorage + the exported session/ledger
 * helpers — safe to call from any surface, any number of times. Consumers:
 * NextStepPrompt (the post-completion prompt bar) and anything that wants a
 * "next up" CTA.
 */

import type { CefrLevel } from './cefr.js';
import { getVerificationGate, isVerificationQuiet } from './cefrCertification.js';
import { getServableReviewCount } from './srs';
import { retentionStatus } from './lessonRetention';
import { weakestProductionKind, buildPlanReason } from './masteryLedger.js';
import {
  resolveAdaptiveActivity,
  selectProductionExercise,
  readMicState,
  getRecentProduction,
  type DailySession,
  type SessionActivity,
} from '../hooks/useDailySession.js';
import { localDateStr } from './dateUtils.js';
import { nextCourseStep, type CourseStep } from './courseStep';
import type { ProductionKind } from './unitProduction';

export type NextStepKind =
  | 'verification'
  | 'session'
  | 'srs'
  | 'retention'
  | 'course'
  | 'production'
  | 'discovery'
  | 'browse';

export interface NextStep {
  kind: NextStepKind;
  /** Screen key to open via launchSessionActivity ('' for kind 'browse',
   *  which routes to the Learn tab library instead). */
  screen: string;
  category?: string;
  /** Session activity id — present ONLY for kind 'session', where launching
   *  must also set the session markers so completion credits the plan. */
  activityId?: string;
  /** CTA text, e.g. "Continue today's session — Dialogue practice". */
  label: string;
  /** One human sentence on why THIS is the next step. */
  reason: string;
  /**
   * Kind 'course' only: the handoff the unit screens read. `getNextStep` stays
   * read-only — the LAUNCHER makes this request, at tap time, exactly as the
   * session's teaching slot does at build time.
   */
  course?: {
    unitId: string;
    request: 'lesson' | 'unit-test' | 'recheck' | 'production' | 'level-review';
    /** Kind 'level-review' only: the level whose review to open. */
    level?: string;
    owed?: ProductionKind;
  };
}

/** Read today's persisted daily session directly (pure; no hook instance). */
function readTodaySession(): DailySession | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem('nh_daily_session');
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DailySession;
    if (!parsed || parsed.date !== localDateStr()) return null;
    if (!Array.isArray(parsed.activities) || !Array.isArray(parsed.completedIds)) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** The next-step form of a course step. Pure — the launcher makes the handoff. */
export function courseNextStep(c: CourseStep): NextStep {
  const n = c.unit.index;
  if (c.kind === 'lesson')
    return {
      kind: 'course',
      screen: 'animlesson',
      label: `${c.lesson.title} — Unit ${n}`,
      reason: c.reason,
      course: { unitId: c.unit.id, request: 'lesson' },
    };
  if (c.kind === 'unit-test')
    return {
      kind: 'course',
      screen: 'unittest',
      label: `Take the Unit ${n} test`,
      reason: c.reason,
      course: { unitId: c.unit.id, request: 'unit-test' },
    };
  if (c.kind === 'level-review')
    return {
      kind: 'course',
      screen: 'levelreview',
      label: `${c.level} review — get ready for the Level Check`,
      reason: c.reason,
      course: { unitId: c.unit.id, request: 'level-review', level: c.level },
    };
  if (c.kind === 'recheck')
    return {
      kind: 'course',
      screen: 'unittest',
      label: `Unit ${n} check-up`,
      reason: c.reason,
      course: { unitId: c.unit.id, request: 'recheck' },
    };
  return {
    kind: 'course',
    screen: 'unitproduction',
    label: `Unit ${n}: ${c.owed === 'speak' ? 'speak' : 'write'} what you learned`,
    reason: c.reason,
    course: { unitId: c.unit.id, request: 'production', owed: c.owed },
  };
}

/**
 * The single recommendation. Never returns null — a user with nothing due,
 * nothing pending and no ledger still gets the library.
 */
export function getNextStep(opts: {
  userCefr: string;
  poolWords?: Set<string>;
  /** Live `stats.xp` — the verification quiet period is measured in XP earned
   *  since the last attempt. Omitted/0 reads as "not yet known", which keeps
   *  the rung quiet rather than recommending a retake on an unhydrated total. */
  xp?: number;
}): NextStep {
  const { userCefr, poolWords, xp } = opts;

  // 1 — verification gate: a provisional level outranks everything — UNLESS
  // the learner attempted a check and has not yet earned VERIFICATION_RETURN_XP
  // since (owner directives, 2026-08-18 + 2026-09-07). Right after an attempt,
  // "retake the test" is the wrong recommendation; falling through lands on
  // the mastery ledger's weakest skill (rung 4) — the practice that will
  // actually let them pass, and the practice that brings the rung back.
  try {
    const gate = getVerificationGate();
    if (gate.required && gate.target && !isVerificationQuiet(xp ?? 0)) {
      return {
        kind: 'verification',
        screen: 'equivalency',
        label: `Verify ${gate.target} — make it real`,
        reason: 'Your level is provisional until one honest check confirms it.',
      };
    }
  } catch {
    /* gate unreadable — fall through */
  }

  // 2 — unfinished daily session: finish the plan first.
  const session = readTodaySession();
  if (session && session.activities.length > 0) {
    const next: SessionActivity | undefined = session.activities.find(
      (a) => !session.completedIds.includes(a.id),
    );
    if (next) {
      const done = session.completedIds.length;
      return {
        kind: 'session',
        screen: next.screen,
        category: next.category,
        activityId: next.id,
        label: `Continue today's session — ${next.label}`,
        reason: `${done} of ${session.activities.length} done. Finish the plan, then explore.`,
      };
    }
  }

  // 3 — servable SRS reviews due.
  if (poolWords && poolWords.size > 0) {
    try {
      const due = getServableReviewCount(poolWords);
      if (due > 0) {
        return {
          kind: 'srs',
          screen: 'review',
          label: `Review ${due} phrase${due === 1 ? '' : 's'} with prof. Kovač`,
          reason: 'Reviews are due now — spaced repetition works when it is on time.',
        };
      }
    } catch {
      /* srs unreadable — fall through */
    }
  }

  // 3.5 — lesson retention: re-checks, missed items, the weekly mix.
  try {
    const ret = retentionStatus();
    if (ret.any) {
      const label = ret.cumulativeDue
        ? 'Take this week’s mixed review'
        : ret.rechecks.length > 0
          ? 'Re-check a lesson you passed'
          : `Retry ${ret.cardsDue} question${ret.cardsDue === 1 ? '' : 's'} you missed`;
      return {
        kind: 'retention',
        screen: 'lessonreview',
        label,
        reason: ret.cumulativeDue
          ? 'A mix from every lesson you have passed — this is what catches what is slipping.'
          : 'Passing once is not remembering — this is the check that makes it stick.',
      };
    }
  } catch {
    /* retention store unreadable — fall through */
  }

  // 3.7 — THE COURSE (2026-09-27). Once today's plan is done, a learner who wants
  // to keep going is sent to their next lesson, unit test, owed production task or
  // check-up — not to a least-recently-served drill. Found walking a learner's day in
  // a browser: a Unit 1 learner who finished the session was told "Next up:
  // Accusative", an unrelated drill, while their unit's next lesson sat unoffered —
  // the "bounces around" the owner reported. It reads `nextCourseStep`, the same
  // sequencer Home's teaching slot and the course map read, so the three cannot
  // disagree. Below SRS and the lesson re-checks, which are time-sensitive decay.
  try {
    const c = nextCourseStep();
    if (c) return courseNextStep(c);
  } catch {
    /* course data unreadable — fall through */
  }

  // 4 — weakest evidenced production skill (the fluency lever).
  try {
    const weak = weakestProductionKind(userCefr as CefrLevel);
    if (weak) {
      const ex = selectProductionExercise({
        cefr: userCefr,
        micState: readMicState(),
        recentScreens: getRecentProduction(),
        kindBias: weak,
      });
      if (ex) {
        return {
          kind: 'production',
          screen: ex.screen,
          category: ex.category,
          label: ex.label,
          reason:
            buildPlanReason(userCefr as CefrLevel, [weak === 'speak' ? 'speaking' : 'writing']) ??
            `Fluency grows by ${weak === 'speak' ? 'speaking' : 'writing'} — this trains it.`,
        };
      }
    }
  } catch {
    /* ledger unreadable — fall through */
  }

  // 5 — least-recently-served adaptive exercise (breadth).
  try {
    const ex = resolveAdaptiveActivity(userCefr, new Set());
    if (ex) {
      return {
        kind: 'discovery',
        screen: ex.screen,
        category: ex.category,
        label: ex.label,
        reason: 'Least-recently practiced at your level — keep your coverage broad.',
      };
    }
  } catch {
    /* pool unreadable — fall through */
  }

  // 6 — terminal fallback: the library. NEVER nothing.
  return {
    kind: 'browse',
    screen: '',
    label: 'Explore the library',
    reason: 'Pick anything — every screen counts toward your level.',
  };
}
