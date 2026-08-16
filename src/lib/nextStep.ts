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
import { getVerificationGate } from './cefrCertification.js';
import { getServableReviewCount } from './srs';
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

export type NextStepKind =
  | 'verification'
  | 'session'
  | 'srs'
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

/**
 * The single recommendation. Never returns null — a user with nothing due,
 * nothing pending and no ledger still gets the library.
 */
export function getNextStep(opts: { userCefr: string; poolWords?: Set<string> }): NextStep {
  const { userCefr, poolWords } = opts;

  // 1 — verification gate: a provisional level outranks everything.
  try {
    const gate = getVerificationGate();
    if (gate.required && gate.target) {
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
            buildPlanReason(userCefr as CefrLevel) ??
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
