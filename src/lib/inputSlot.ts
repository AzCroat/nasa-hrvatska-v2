// src/lib/inputSlot.ts
//
// The daily session's guaranteed COMPREHENSION slot (P2.8) — content expansion
// item 2, 2026-09-04. Lives here rather than in useDailySession.ts for the same
// reason sessionPools, croatiaPool and categoryRoutes do: that file is at its
// 800-line cap, and the cap was not raised.

import { CEFR_EXERCISE_POOL } from './sessionPools';
import type { SkillCategory } from './adaptive';
import { isUnlocked, cefrRank, type CefrLevel } from './cefr';
import { rnd } from './random.js';
import { weakestReceptiveKind } from './masteryLedger';
import { inputSlotReason, withReason } from './activityReason';
import { readServedMap } from './sessionServed';

// ── P2.8: the comprehension (input) guarantee ──────────────────────────────────
// Which pool categories count as INPUT — comprehension of connected Croatian
// the learner hears or reads, as opposed to producing it or drilling a form.
//
// These are the two MODALITY categories, `listening` and `reading`, NOT the
// SKILL_GROUP families of the same names. The families answer a different
// question — "what does this drill vary against" — and for that purpose a
// literature-terminology bank or the legal-register drill ("Što je rješenje?")
// is rightly grouped as reading. As INPUT they are not: a 24-item
// multiple-choice bank about texts is a drill, and a guarantee of comprehension
// that could be discharged by one would be the P2.7 lesson-in-a-drill-slot
// mistake in the other direction. The first draft used the families and, at B2,
// the slot chose the literature drill over the graded reader every reading day.
export type InputKind = 'listening' | 'reading';
export function inputKindOf(category: string): InputKind | null {
  return category === 'listening' || category === 'reading' ? category : null;
}

/**
 * Pick one comprehension activity for the guaranteed input slot.
 *
 * WHY THIS SLOT EXISTS (content expansion item 2, 2026-09-04). Input had no
 * guaranteed slot: listening and reading entries competed in the P3 fill among
 * 50–300 eligible entries, and the `adaptive` flag only put them level with
 * every other difficulty-matched drill. Measured over 300 non-lesson sessions
 * per level before this change, the share of sessions containing ANY listening
 * or reading was A1 10%, A2 19%, B1 13%, B2 11%, C1 27%, C2 10% — listening
 * alone was 4–5% at B1, B2 and C2, i.e. a listening activity roughly once every
 * three weeks. Every other skill the session guarantees (grammar, production,
 * conversation at B1+) has a slot; comprehension is the one it tested at the
 * Level Check and never scheduled.
 *
 * KIND: the ledger's weaker receptive skill when it has measured one; otherwise
 * the kind served LESS RECENTLY (nh_session_served, the map the discovery slot
 * already keeps), so the slot alternates listening / reading day to day rather
 * than settling on whichever category is richer. Never-served ties break to
 * listening, the scarcer of the two in the census above.
 *
 * SCREEN: authored before generated (the P2.4 conversation anchor's posture —
 * zero AI cost by default, the AI variant one fill slot away), then nearest
 * CEFR with `adaptive` entries counting as an exact match, then a random
 * tiebreak. Reference entries are excluded outright: a guarantee of input must
 * be a graded finish, not a browse list (the same exclusion P2.7 makes for
 * lessons). If the preferred kind has no eligible screen the other kind is
 * tried, so the slot degrades to "some input" before it degrades to nothing.
 */
export interface InputActivity {
  id: string;
  label: string;
  screen: string;
  category: SkillCategory;
  kind: InputKind;
  reason?: string;
}

export function selectGuaranteedInput(
  userCefr: string,
  usedScreens: Set<string>,
  recentScreens: string[],
  ctx: { micBlocked: boolean },
): InputActivity | null {
  const eligible = CEFR_EXERCISE_POOL.filter(
    (ex) =>
      inputKindOf(ex.category) !== null &&
      !ex.reference &&
      isUnlocked(ex.cefr, userCefr) &&
      !(ex.micRequired && ctx.micBlocked) &&
      !usedScreens.has(ex.screen),
  );
  if (eligible.length === 0) return null;

  const weakest = weakestReceptiveKind(userCefr as CefrLevel);
  const served = readServedMap();
  const lastServed = (kind: InputKind): string =>
    eligible
      .filter((ex) => inputKindOf(ex.category) === kind)
      .reduce((max, ex) => {
        const d = served[ex.screen] ?? '';
        return d > max ? d : max;
      }, '');
  const listenLast = lastServed('listening');
  const readLast = lastServed('reading');
  const preferred: InputKind = weakest ?? (listenLast <= readLast ? 'listening' : 'reading');
  const order: InputKind[] =
    preferred === 'listening' ? ['listening', 'reading'] : ['reading', 'listening'];

  const userRank = cefrRank(userCefr);
  for (const kind of order) {
    const ofKind = eligible.filter((ex) => inputKindOf(ex.category) === kind);
    if (ofKind.length === 0) continue;
    let candidates = ofKind.filter((ex) => !recentScreens.includes(ex.screen));
    if (candidates.length === 0) candidates = ofKind; // recency fallback
    const pick = candidates
      .map((ex) => ({
        ex,
        gen: ex.generated ? 1 : 0,
        dist: ex.adaptive ? 0 : Math.abs(cefrRank(ex.cefr) - userRank),
        r: rnd(),
      }))
      .sort((a, b) => a.gen - b.gen || a.dist - b.dist || a.r - b.r)[0]!.ex;
    return {
      id: pick.id,
      label: pick.label,
      screen: pick.screen,
      category: pick.category,
      kind,
      ...withReason(inputSlotReason(kind, weakest)),
    };
  }
  return null;
}
