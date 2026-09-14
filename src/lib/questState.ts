/**
 * questState — which daily quests are done, and which have been paid for.
 *
 * WHY THIS IS ONE MODULE AND NOT THREE COPIES. `DAILY_QUESTS` is the quest list;
 * the completion map is what every surface actually reads, and until now each
 * surface built its own: HomeTab hand-wrote an object of sixteen keys that
 * happened to match the list, and GradTab's progress row counted a hardcoded four
 * of them. Two lists that must agree with nothing making them — the shape this
 * codebase keeps rediscovering. `questsDoneToday` is now the only definition.
 *
 * THE QUEST LIST IS PASSED IN, NOT IMPORTED, and that is load-bearing. My first
 * draft imported DAILY_QUESTS here; App.tsx imports this module statically, so
 * `main -> App -> questState -> data.tsx` put the whole content library on the
 * first-paint path and `firstPaintGraph.test.ts` failed exactly as it is written
 * to. Taking the list from the caller is the same shape `conceptMap` uses for the
 * curriculum spine. App reaches DAILY_QUESTS with `await import` from inside the
 * payout handler, which runs on an event and never at first paint.
 *
 * `streak` / `streak_alive` are the one exception and are handled by name: no
 * `markQuest('streak')` exists anywhere, because they are derived from the live
 * streak count rather than from a quest key.
 */
import { localDateStr } from './dateUtils';
import { lsGet, lsSet } from './safeStorage';

const QUEST_PREFIX = 'nh_quest_';
const PAID_PREFIX = 'nh_quest_paid_';

export interface Quest {
  id: string;
  xp: number;
}

/** Ids derived from the streak rather than marked by a completion. */
export const STREAK_QUEST_IDS: readonly string[] = ['streak', 'streak_alive'];

/** Every quest id → whether it is complete today. */
export function questsDoneToday(
  quests: readonly Quest[],
  hasStreak: boolean,
): Record<string, boolean> {
  const d = localDateStr();
  const out: Record<string, boolean> = {};
  for (const q of quests) {
    out[q.id] = STREAK_QUEST_IDS.includes(q.id)
      ? hasStreak
      : lsGet(QUEST_PREFIX + q.id + '_' + d) === '1';
  }
  return out;
}

/**
 * Quests complete today whose XP has not been paid yet.
 *
 * Every quest carries an `xp` value — 20 to 55 — and NOT ONE HAS EVER BEEN PAID:
 * HomeTab computed the total into `_questXP` and then discarded it with `void`,
 * so the numbers on the cards were decorative and only the +50 Daily Mastery
 * bonus ever reached a learner. Owner decision, 2026-09-14: pay them, once per
 * quest per day.
 *
 * The paid marker shares the `nh_quest_` prefix on purpose, so App's existing
 * prune rule (`^nh_quest_.+_\d{4}-\d{2}-\d{2}$`) clears it with the rest of the
 * day's quest keys and no second rule has to remember it.
 */
export function unpaidQuests(
  quests: readonly Quest[],
  questsDone: Record<string, boolean>,
): Array<{ id: string; xp: number }> {
  const d = localDateStr();
  const out: Array<{ id: string; xp: number }> = [];
  for (const q of quests) {
    if (!questsDone[q.id]) continue;
    if (lsGet(PAID_PREFIX + q.id + '_' + d) === '1') continue;
    if (typeof q.xp === 'number' && q.xp > 0) out.push({ id: q.id, xp: q.xp });
  }
  return out;
}

/** Record that a quest's XP has been paid today. Write BEFORE awarding. */
export function markQuestPaid(id: string): void {
  lsSet(PAID_PREFIX + id + '_' + localDateStr(), '1');
}
