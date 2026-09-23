/**
 * questTrackerPairs — the quest tracker's tier-2 pairing is derived from the
 * award map, with one stated exception (sweep 48, 2026-09-23).
 *
 * THE FIND. `QuestTracker` carried a hand-written copy of `lib/quests`'
 * `TIER2_MAP`, under the near-identical name `TIER2_MAP_LOCAL` — and by the
 * time anyone looked the two had **already diverged**. Sweep 40 removed
 * `master` from the award map (auto-promoting on the second MARK cleared
 * "Review 15+ SRS words" after ten) and nothing told the component. Five rows
 * agreed, one did not, and no mechanism could say whether that was a decision
 * or a miss.
 *
 * THE DIVERGENCE IS CORRECT, WHICH IS EXACTLY WHY IT HAD TO BE WRITTEN DOWN.
 * The two maps answer different questions — has the learner EARNED the tier-2
 * quest (a word count, not a session count) versus which card to SHOW next
 * (once "Review 5+" is done, "Review 15+" is plainly the next goal). Showing a
 * card claims nothing: `done` is read independently from `questsDone[q.id]`, so
 * the tier-2 card sits un-ticked until the learner genuinely reaches fifteen.
 *
 * This is the CEFR-badge field report's shape, caught one stage earlier: three
 * copies of a formula, in sync with each other and with nothing that mattered.
 * There the fix was one resolver; here the display map SPREADS the award map, so
 * the shared rows cannot drift again and the single exception must be declared.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { TIER2_MAP } from '../lib/quests';
import { DAILY_QUESTS } from '../data';

const SRC = readFileSync(resolve(__dirname, '../components/home/QuestTracker.tsx'), 'utf8');

describe('the display map is derived, not copied', () => {
  it('spreads the award map rather than restating its rows', () => {
    expect(
      /const QUEST_DISPLAY_PAIRS[^=]*=\s*\{\s*\.\.\.TIER2_MAP/.test(SRC),
      'QuestTracker has gone back to a hand-written pair map. Five of its six ' +
        'rows restate lib/quests TIER2_MAP, and last time that happened the two ' +
        'silently disagreed about `master` for as long as nobody looked.',
    ).toBe(true);
  });

  it('declares no row the award map already carries', () => {
    // A literal `speak: 'speak2'` beside the spread would be the copy coming
    // back one row at a time.
    const block = /const QUEST_DISPLAY_PAIRS[^=]*=\s*\{([\s\S]*?)\n\};/.exec(SRC)?.[1] ?? '';
    expect(block).not.toBe('');
    for (const id of Object.keys(TIER2_MAP)) {
      expect(
        new RegExp(`(^|\\n)\\s*${id}\\s*:`).test(block),
        `${id} is declared in QUEST_DISPLAY_PAIRS and is already in TIER2_MAP — ` +
          `the spread covers it, and a literal row is how the two copies drift.`,
      ).toBe(false);
    }
  });

  it('`master` is the ONE exception, and it is display-only', () => {
    // Both directions. If `master` returns to the award map, the exception here
    // is redundant and the comment beside it is wrong; if it disappears from
    // the display map, the learner loses the "Review 15+" card entirely.
    expect(
      TIER2_MAP.master,
      'master is back in the AWARD map. Sweep 40 removed it because promotion ' +
        'on the second mark clears "Review 15+ SRS words" after ten.',
    ).toBeUndefined();
    expect(/\n\s*master:\s*'master2'/.test(SRC)).toBe(true);
  });
});

describe('every pair on either map is a real quest', () => {
  const ids = new Set(DAILY_QUESTS.map((q: { id: string }) => q.id));

  it('the subject is not empty', () => {
    expect(Object.keys(TIER2_MAP).length).toBeGreaterThanOrEqual(5);
    expect(ids.size).toBeGreaterThanOrEqual(11);
  });

  it.each(Object.entries(TIER2_MAP))('%s → %s both exist', (tier1, tier2) => {
    expect(ids.has(tier1)).toBe(true);
    expect(ids.has(tier2)).toBe(true);
  });

  it('the display exception points at a real tier-2 quest', () => {
    // `master2` is what the card shows once "Review 5+" is done. A rename would
    // leave the tier-1 card hidden and nothing in its place.
    expect(ids.has('master')).toBe(true);
    expect(ids.has('master2')).toBe(true);
  });
});
