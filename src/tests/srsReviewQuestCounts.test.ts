/**
 * srsReviewQuestCounts — the two quests whose text claims a NUMBER now count
 * (sweep 40, 2026-09-23).
 *
 * THE DEFECT. Every other tier-1 daily quest reads "Complete 1 …", which a
 * single `markQuest` call is an honest record of. Two do not:
 *
 *     master   "Review 5+ SRS words"    30 XP
 *     master2  "Review 15+ SRS words"   55 XP
 *
 * and **nothing counted words**. All three review surfaces — `ReviewScreen`,
 * `MistakesScreen`, `AdaptiveReviewScreen` — fired a bare `markQuest('master')`
 * on finish, whatever the deck size, so ONE card cleared "Review 5+". And
 * `master` sat in `TIER2_MAP`, which promotes on the second MARK, so two
 * one-card sessions cleared "Review 15+". Since 2026-09-14 these quests pay
 * their XP, so it was not a decorative claim.
 *
 * It is the claims-vs-evidence seam pointed at the quest ledger: the sentence
 * on the card states a measurement the app never took.
 *
 * WHY THE COUNT ACCUMULATES ACROSS THE DAY. The text is a daily goal. Five
 * words now and ten later IS fifteen words reviewed, and a learner would be
 * right to expect the tier-2 card to tick. Per-session counting would make
 * "Review 15+" unreachable on any surface whose deck is smaller than that.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  recordSrsReview,
  srsReviewedToday,
  markQuest,
  cleanupStaleQuestKeys,
  MASTER_QUEST_WORDS,
  MASTER2_QUEST_WORDS,
} from '../lib/quests';
import { localDateStr } from '../lib/dateUtils';

const done = (id: string) => localStorage.getItem(`nh_quest_${id}_${localDateStr()}`) === '1';

beforeEach(() => localStorage.clear());

describe('the review quests are earned by words, not by finishing', () => {
  it('a short session marks NOTHING — the quest says five', () => {
    recordSrsReview(1);
    expect(srsReviewedToday()).toBe(1);
    expect(done('master')).toBe(false);
    expect(done('master2')).toBe(false);
  });

  it('reaching the stated number marks it', () => {
    recordSrsReview(MASTER_QUEST_WORDS);
    expect(done('master')).toBe(true);
    expect(done('master2')).toBe(false);
  });

  it('the count accumulates across sessions in the same day', () => {
    recordSrsReview(3);
    expect(done('master')).toBe(false);
    recordSrsReview(2);
    expect(done('master')).toBe(true);
    expect(srsReviewedToday()).toBe(5);
  });

  it('tier 2 needs its OWN number, not a second session', () => {
    // The exact shape TIER2_MAP produced: two qualifying sessions that together
    // fall short of fifteen must not clear "Review 15+".
    recordSrsReview(MASTER_QUEST_WORDS);
    recordSrsReview(MASTER_QUEST_WORDS);
    expect(done('master')).toBe(true);
    expect(done('master2'), 'ten words cleared "Review 15+"').toBe(false);
    recordSrsReview(MASTER2_QUEST_WORDS - 2 * MASTER_QUEST_WORDS);
    expect(done('master2')).toBe(true);
  });

  it('`master` is out of the second-mark promotion, and must stay out', () => {
    // With the gate above in place, leaving it in TIER2_MAP would clear "15+"
    // at ten — the defect in a new disguise. Driving the real markQuest is the
    // check; reading TIER2_MAP would only restate it.
    markQuest('master');
    markQuest('master');
    expect(done('master2')).toBe(false);
    // ...while a quest that genuinely means "twice today" still promotes.
    markQuest('reading');
    markQuest('reading');
    expect(done('reading2')).toBe(true);
  });

  it('ignores nonsense rather than marking on it', () => {
    recordSrsReview(0);
    recordSrsReview(-4);
    recordSrsReview(NaN);
    expect(srsReviewedToday()).toBe(0);
    expect(done('master')).toBe(false);
  });

  it('a new day starts from zero', () => {
    vi.useFakeTimers();
    try {
      vi.setSystemTime(new Date('2026-09-23T10:00:00'));
      recordSrsReview(9);
      expect(done('master')).toBe(true);
      vi.setSystemTime(new Date('2026-09-24T10:00:00'));
      expect(srsReviewedToday()).toBe(0);
      expect(done('master')).toBe(false);
    } finally {
      vi.useRealTimers();
    }
  });
});

describe('every review surface counts, and none marks the quest bare', () => {
  // A source pin, deliberately: the three screens fire inside React handlers
  // whose decks come from the SRS store, and the property that matters is that
  // NONE of them still takes the shortcut. `srsReviewedToday` above proves the
  // helper counts; this proves nothing bypasses it.
  const SURFACES = [
    'src/components/practice/ReviewScreen.tsx',
    'src/components/practice/MistakesScreen.tsx',
    'src/components/practice/AdaptiveReviewScreen.tsx',
  ];

  it.each(SURFACES)('%s calls recordSrsReview and not markQuest(master)', (rel) => {
    const src = readFileSync(resolve(__dirname, '../..', rel), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    expect(/\brecordSrsReview\s*\(/.test(src), `${rel} no longer records a count`).toBe(true);
    expect(
      /markQuest\(\s*['"]master['"]\s*\)/.test(src),
      `${rel} marks "Review 5+ SRS words" without counting words`,
    ).toBe(false);
  });

  it('and the argument is a deck length, not a literal', () => {
    // A `recordSrsReview(1)` would satisfy the matcher above while restoring
    // the defect exactly.
    for (const rel of SURFACES) {
      const src = readFileSync(resolve(__dirname, '../..', rel), 'utf8');
      for (const m of src.matchAll(/recordSrsReview\(\s*([^)]*)\)/g)) {
        expect(m[1], `${rel} passes a constant`).toMatch(/\.length\b/);
      }
    }
  });
});

describe('the daily counter does not grow forever', () => {
  it('cleanupStaleQuestKeys sweeps it like every other daily key', () => {
    // It is written once per day and read only for today. Without the prefix in
    // the cleanup it would be the ONE daily key in this module that accumulates
    // — a leak that is invisible until a learner's storage is full.
    localStorage.setItem('nh_srs_reviewed_2026-01-05', '40');
    localStorage.setItem(`nh_srs_reviewed_${localDateStr()}`, '7');
    cleanupStaleQuestKeys();
    expect(localStorage.getItem('nh_srs_reviewed_2026-01-05')).toBeNull();
    expect(srsReviewedToday()).toBe(7);
  });
});
