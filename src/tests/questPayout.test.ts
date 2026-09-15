/**
 * questPayout.test.ts — the XP on a quest card has to actually be paid.
 *
 * THE DEFECT. Every quest in `DAILY_QUESTS` carries an `xp` value — 20 to 55 —
 * and not one has ever reached a learner. HomeTab summed the completed ones into
 * `_questXP` and then discarded it:
 *
 *     const _questXP = DAILY_QUESTS.filter(...).reduce((s, q) => s + q.xp, 0);
 *     void _questXP;
 *
 * So the numbers printed on the cards were decorative, and the only quest XP that
 * ever landed was the +50 Daily Mastery bonus for completing ALL of them — which
 * requires fourteen quests including six doubles in one day. Owner decision,
 * 2026-09-14: pay each quest's XP, once per quest per day.
 *
 * WHAT IS PINNED HERE IS THE STORE, and the wiring is pinned by source in
 * `questIdsExist.test.ts`. The payout effect lives in App.tsx rather than on the
 * surface that renders the board, because a quest is marked wherever the learner
 * happens to be — paying from a tab would hold the XP until they visited it.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { DAILY_QUESTS } from '../data';
import { markQuest } from '../lib/quests';
import { questsDoneToday, unpaidQuests, markQuestPaid, STREAK_QUEST_IDS } from '../lib/questState';
import { localDateStr } from '../lib/dateUtils';

const QUESTS = DAILY_QUESTS as Array<{ id: string; xp: number }>;

const xpOf = (id: string) =>
  (DAILY_QUESTS as Array<{ id: string; xp: number }>).find((q) => q.id === id)!.xp;

beforeEach(() => {
  localStorage.clear();
});

describe('questsDoneToday', () => {
  it('is false for everything on a fresh device', () => {
    const done = questsDoneToday(QUESTS, false);
    expect(Object.values(done).every((v) => v === false)).toBe(true);
    expect(Object.keys(done)).toHaveLength(DAILY_QUESTS.length);
  });

  it('follows a real markQuest call', () => {
    markQuest('speak');
    expect(questsDoneToday(QUESTS, false).speak).toBe(true);
    expect(questsDoneToday(QUESTS, false).grammar).toBe(false);
  });

  it('derives the streak quests from the streak, not from a key', () => {
    // Nothing calls markQuest('streak') anywhere, so reading a key for these
    // would leave two cards permanently unfinished — and they gate the +50.
    expect(questsDoneToday(QUESTS, false).streak).toBe(false);
    for (const id of STREAK_QUEST_IDS) expect(questsDoneToday(QUESTS, true)[id]).toBe(true);
  });

  it('is scoped to today', () => {
    localStorage.setItem('nh_quest_speak_2020-01-01', '1');
    expect(questsDoneToday(QUESTS, false).speak).toBe(false);
  });
});

describe('a quest is paid once, and only once', () => {
  it('offers the completed quest at its own xp value', () => {
    markQuest('vocab');
    const owed = unpaidQuests(QUESTS, questsDoneToday(QUESTS, false));
    expect(owed).toEqual([{ id: 'vocab', xp: xpOf('vocab') }]);
  });

  it('stops offering it once paid', () => {
    markQuest('vocab');
    markQuestPaid('vocab');
    expect(unpaidQuests(QUESTS, questsDoneToday(QUESTS, false))).toEqual([]);
  });

  it('offers nothing for a quest that is not done', () => {
    expect(unpaidQuests(QUESTS, questsDoneToday(QUESTS, false))).toEqual([]);
  });

  it('pays each of several completions exactly once', () => {
    markQuest('speak');
    markQuest('grammar');
    const first = unpaidQuests(QUESTS, questsDoneToday(QUESTS, false));
    expect(first.map((q) => q.id).sort()).toEqual(['grammar', 'speak']);
    for (const q of first) markQuestPaid(q.id);
    expect(unpaidQuests(QUESTS, questsDoneToday(QUESTS, false))).toEqual([]);

    // A third quest finished later in the same day is still owed.
    markQuest('culture');
    expect(unpaidQuests(QUESTS, questsDoneToday(QUESTS, false)).map((q) => q.id)).toEqual([
      'culture',
    ]);
  });

  it('never pays the streak pair, which is status and not a completion', () => {
    // THE DEFECT E2E CAUGHT, pinned. `streak` and `streak_alive` are both
    // `streak.count > 0` — true from YESTERDAY's practice — so paying them gave
    // every returning learner 20 XP on app open for doing nothing today, and
    // `streak_alive` ("Practice anything today") paid before they had.
    // progress-integrity.spec.js reported it as "expected 250, received 270".
    //
    // The unit tests missed it because they almost all ran with hasStreak false,
    // which is exactly why this one does not.
    const done = questsDoneToday(QUESTS, true);
    for (const id of STREAK_QUEST_IDS) expect(done[id]).toBe(true);
    expect(unpaidQuests(QUESTS, done)).toEqual([]);
  });

  it('pays earned quests on a device that also holds a streak', () => {
    // The other direction: excluding the pair must not suppress everything else.
    markQuest('vocab');
    const owed = unpaidQuests(QUESTS, questsDoneToday(QUESTS, true)).map((q) => q.id);
    expect(owed).toEqual(['vocab']);
  });

  it('pays the tier-2 quest markQuest promotes on the second completion', () => {
    // markQuest auto-marks tier 2 on the second tier-1 mark of the day. That
    // promotion is a completion like any other and must be paid.
    markQuest('speak');
    markQuest('speak');
    const owed = unpaidQuests(QUESTS, questsDoneToday(QUESTS, false)).map((q) => q.id);
    expect(owed).toContain('speak');
    expect(owed).toContain('speak2');
  });

  it('pays again the next day', () => {
    markQuest('vocab');
    markQuestPaid('vocab');
    expect(unpaidQuests(QUESTS, questsDoneToday(QUESTS, false))).toEqual([]);
    // Tomorrow: the completion key is per-day, so both sides move together.
    localStorage.clear();
    markQuest('vocab');
    expect(unpaidQuests(QUESTS, questsDoneToday(QUESTS, false)).map((q) => q.id)).toEqual([
      'vocab',
    ]);
  });

  it('the paid marker is swept by the existing prune rule', () => {
    // It shares the nh_quest_ prefix ON PURPOSE so App's
    // /^nh_quest_.+_\d{4}-\d{2}-\d{2}$/ clears it with the day's other quest
    // keys — one rule, not two. Derived from App.tsx rather than restated.
    markQuestPaid('vocab');
    const key = Object.keys(localStorage).find((k) => k.includes('paid'))!;
    expect(key).toBe('nh_quest_paid_vocab_' + localDateStr());
    const app = readFileSync('src/App.tsx', 'utf8');
    const rule = app.match(/\/\^nh_quest_[^/]+\//)?.[0];
    expect(rule, 'the prune rule for quest keys has changed shape').toBeTruthy();
    expect(new RegExp(rule!.slice(1, -1)).test(key)).toBe(true);
  });
});

describe('the payout is wired to something that is always mounted', () => {
  const app = readFileSync('src/App.tsx', 'utf8');

  it('App pays on the event markQuest already dispatches', () => {
    expect(app).toMatch(/addEventListener\('knight:quest-done', payQuestXp\)/);
    expect(readFileSync('src/lib/quests.ts', 'utf8')).toMatch(/CustomEvent\('knight:quest-done'\)/);
  });

  it('it also pays on mount, for quests finished before it loaded', () => {
    expect(app).toMatch(/payQuestXp\(\);\s*\n\s*window\.addEventListener/);
  });

  it('reaches the quest list without putting content on the first-paint path', () => {
    // MY OWN REGRESSION, pinned. The first draft imported DAILY_QUESTS into
    // lib/questState; App imports that module statically, so
    // main -> App -> questState -> data.tsx put the whole content library on the
    // blocking path and firstPaintGraph.test.ts failed exactly as written. The
    // list comes from the caller now, and App reaches it with `await import`
    // inside the handler.
    expect(readFileSync('src/lib/questState.ts', 'utf8')).not.toMatch(/from '\.\.\/data'/);
    expect(app).toMatch(/import\('\.\/data'\)[\s\S]{0,120}DAILY_QUESTS/);
  });

  it('writes the marker before awarding', () => {
    // A repeated award is worse than a missed one, and the Daily Mastery guard
    // beside it uses the same order.
    const at = app.indexOf('markQuestPaid(q.id)');
    expect(at).toBeGreaterThan(-1);
    expect(app.slice(at, at + 120)).toMatch(/award\(q\.xp/);
  });
});
