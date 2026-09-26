/**
 * Quest completion markers for daily quest tracking.
 * Writes localStorage keys of the form: nh_quest_<id>_YYYY-MM-DD
 * The DailyQuests component reads these keys to determine completion status.
 *
 * Tier-2 auto-promotion: when a tier-1 quest is marked a second time today,
 * the corresponding tier-2 quest is automatically marked as well.
 * e.g. markQuest('speak') called twice → 'speak2' also marked.
 */
import { localDateStr } from './dateUtils';

const SRS_REVIEWED_PREFIX = 'nh_srs_reviewed_';

/**
 * Remove quest keys older than yesterday to prevent unbounded localStorage growth.
 * Safe to call on every app session start.
 */
export function cleanupStaleQuestKeys(): void {
  try {
    const today = localDateStr();
    const _d = new Date();
    _d.setDate(_d.getDate() - 1);
    const yesterday =
      _d.getFullYear() +
      '-' +
      String(_d.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(_d.getDate()).padStart(2, '0');
    const toRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      // `nh_srs_reviewed_<date>` is swept here too: it is written once per day
      // by recordSrsReview and read only for today, so without this it would be
      // the one daily key in this module that grows forever.
      // `completeExercise` also writes `nh_quest_src_<quest>_<exercise>_<date>` to make a
      // daily quest markable once per EXERCISE per day; it starts with `nh_quest_`, so this
      // one predicate sweeps it too and no second prefix is needed here.
      if (!key || !(key.startsWith('nh_quest_') || key.startsWith(SRS_REVIEWED_PREFIX))) continue;
      // Key format: nh_quest_<id>_YYYY-MM-DD  or  nh_quest_<id>_count_YYYY-MM-DD
      const datePart = key.slice(-10); // last 10 chars = YYYY-MM-DD
      if (datePart !== today && datePart !== yesterday && /^\d{4}-\d{2}-\d{2}$/.test(datePart)) {
        toRemove.push(key);
      }
    }
    toRemove.forEach((k) => {
      try {
        localStorage.removeItem(k);
      } catch (_) {}
    });
  } catch (_) {}
}

/**
 * THE AUTO-PROMOTION MAP: marking a tier-1 quest a SECOND time in one day also
 * marks its tier-2 pair. Exported since 2026-09-23 because `QuestTracker` kept
 * its own copy under the same name, and the two have already DIVERGED — see
 * `QUEST_DISPLAY_PAIRS` there, which builds itself from this one so the five
 * shared rows can never drift again and the one deliberate difference has to be
 * written down.
 */
export const TIER2_MAP: Record<string, string> = {
  speak: 'speak2',
  grammar: 'grammar2',
  reading: 'reading2',
  culture: 'culture2',
  vocab: 'vocab2',
};

/**
 * SRS review quests — the only two whose text claims a COUNT (2026-09-23).
 *
 * THE DEFECT. Every other tier-1 quest says "Complete 1 …", which a single
 * `markQuest` call is an honest record of. These two say **"Review 5+ SRS
 * words"** and **"Review 15+ SRS words"** — and nothing counted words. The
 * three review screens fired `markQuest('master')` on FINISH regardless of deck
 * size, so one card cleared "Review 5+"; and `master` sat in `TIER2_MAP`, which
 * promotes on the second MARK, so two one-card sessions cleared "Review 15+".
 * They pay 30 and 55 XP, so this was not decorative.
 *
 * The count is accumulated ACROSS the day rather than per session, because the
 * quest text is a daily goal: 5 words now and 10 later is fifteen words
 * reviewed, and the learner would be right to expect the tier-2 card to tick.
 * `master` is out of `TIER2_MAP` for the same reason it had to be — with the
 * gate below in place, session-count promotion would clear "15+" at ten.
 */
export const MASTER_QUEST_WORDS = 5;
export const MASTER2_QUEST_WORDS = 15;

/** Words reviewed today, across every SRS surface. */
export function srsReviewedToday(): number {
  try {
    return parseInt(localStorage.getItem(SRS_REVIEWED_PREFIX + localDateStr()) || '0', 10) || 0;
  } catch {
    return 0;
  }
}

/**
 * Record an SRS review of `words` cards and mark whichever review quests the
 * day's running total has actually earned. Marking nothing is the correct
 * outcome for a short session — the quest says what it says.
 */
export function recordSrsReview(words: number): void {
  if (!Number.isFinite(words) || words <= 0) return;
  let total = srsReviewedToday() + Math.floor(words);
  try {
    localStorage.setItem(SRS_REVIEWED_PREFIX + localDateStr(), String(total));
  } catch {
    // Storage unavailable: the marks below still reflect THIS session, which is
    // the most the device can honestly say.
    total = Math.floor(words);
  }
  if (total >= MASTER_QUEST_WORDS) markQuest('master');
  if (total >= MASTER2_QUEST_WORDS) markQuest('master2');
}

export function markQuest(id: string): void {
  try {
    const d = localDateStr();
    localStorage.setItem('nh_quest_' + id + '_' + d, '1');

    // Track daily count for this quest type to enable tier-2 promotion
    const countKey = 'nh_quest_' + id + '_count_' + d;
    const count = parseInt(localStorage.getItem(countKey) || '0', 10);
    localStorage.setItem(countKey, String(count + 1));

    // Auto-mark tier-2 on the second completion of the same quest type today
    const tier2 = TIER2_MAP[id];
    if (tier2 && count >= 1) {
      localStorage.setItem('nh_quest_' + tier2 + '_' + d, '1');
    }

    // Notify the knight mascot to show a proud reaction
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('knight:quest-done'));
    }
  } catch (_) {}
}
