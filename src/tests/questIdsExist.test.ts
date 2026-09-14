/**
 * questIdsExist.test.ts — a completion must tick a quest that exists.
 *
 * `markQuest(id)` writes `nh_quest_<id>_<date>` for ANY string it is handed.
 * Nothing validates the id, nothing throws, the write succeeds — so an id that
 * names no quest produces a key no surface reads, and a learner who finished the
 * work is credited nothing. Four ids were in that state:
 *
 *   speaking     A NEAR MISS: the quest is `speak`. Two registry rows said
 *                `speaking`. It survived precisely because SpeakingScreen ALSO
 *                calls markQuest('speak') directly — the quest ticked, just never
 *                from the registry. Fixed to `speak`; `activityType` stays
 *                'speaking', which is award()'s vocabulary, a different namespace.
 *   flashcards   FlashcardRecallQuiz's ONLY quest call. Five vocabulary recall
 *                questions and no tick at all. Fixed to `vocab`.
 *   review       ReviewScreen marked it beside a valid `master` on the next line,
 *                so it was a dead write rather than a lost tick. Removed.
 *   listening    THE QUEST NOW EXISTS (owner decision, 2026-09-14). Seven paths
 *                marked it — five registry rows plus DictationScreen and
 *                ShadowingScreen — and two MORE screens were still on the old
 *                mislabel: ListeningScreen and DailyListeningCard both awarded
 *                activityType 'listening' and marked `speak`. All nine now
 *                credit the Listening Quest.
 *
 * WHAT A QUEST KEY IS WORTH — measure this before changing the quest list, because
 * an earlier draft of this file did not and would have shipped a change that cost
 * the learner. `QuestTracker` had NOT BEEN MOUNTED since the Phase 6 Grad redesign
 * (595a0121); nothing imported it, so adding a quest rendered no card anywhere and
 * its only live effect was to raise an invisible XP bar. Owner decision,
 * 2026-09-14: the board is mounted again, in GradTab under the progress row it
 * expands. Three things now read these keys, and each is pinned below:
 *
 *   GradTab    the progress row AND the board, both over `questsDoneToday`. The
 *              row used to count a hardcoded FOUR of the fourteen.
 *   HomeTab    `allQuestsDone` → the +50 Daily Mastery award.
 *   App        the per-quest XP payout — see `questPayout.test.ts`.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { DAILY_QUESTS } from '../data';

const strip = (s: string) =>
  s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');

const SRC = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
  (f) => !/[\\/](tests|__tests__)[\\/]/.test(f),
);

const DEFINED = new Set((DAILY_QUESTS as Array<{ id: string }>).map((q) => q.id));

/** Every id that can reach markQuest, with where it came from. */
function markedIds(): Map<string, Set<string>> {
  const out = new Map<string, Set<string>>();
  const add = (id: string, where: string) => {
    if (!out.has(id)) out.set(id, new Set());
    out.get(id)!.add(where);
  };
  for (const f of SRC) {
    const s = strip(readFileSync(f, 'utf8'));
    for (const m of s.matchAll(/markQuest\(\s*'([^']+)'/g)) add(m[1]!, f);
    for (const m of s.matchAll(/questKind:\s*'([^']+)'/g)) add(m[1]!, f);
  }
  // The registry's rows are helper CALLS, not object literals:
  //   key: g('gc', 'grammar', 'grammar')  →  (statKind, questKind, activityType)
  // Reading them as `questKind:` pairs would see none of the 250+ rows.
  const reg = strip(readFileSync('src/lib/completion/exerciseRegistry.ts', 'utf8'));
  for (const m of reg.matchAll(/[ge]\('[a-z]{2}',\s*'([^']+)'/g))
    add(m[1]!, 'src/lib/completion/exerciseRegistry.ts');
  return out;
}

/**
 * Ids that reach markQuest and name no quest. EMPTY, and it stays empty: the one
 * entry it ever held (`listening`) was closed by adding the quest and giving the
 * board a home, rather than by deleting the markers. Kept as a named set so a
 * future orphan has to be recorded deliberately instead of slipping in.
 */
const KNOWN_ORPHANS: Record<string, string> = {};

describe('the derivation is real', () => {
  const marked = markedIds();

  it('sees all three paths to markQuest', () => {
    expect(SRC.length).toBeGreaterThan(400);
    expect(marked.get('culture')).toBeTruthy(); // a literal call
    expect([...marked.get('grammar')!].some((f) => f.includes('exerciseRegistry'))).toBe(true);
    expect(marked.size).toBeGreaterThan(6);
  });

  it('reads the registry as helper calls, not object literals', () => {
    // The trap that made an earlier sweep of this same file report 1 row of 259.
    const fromRegistry = [...marked].filter(([, w]) =>
      [...w].some((f) => f.includes('exerciseRegistry')),
    );
    expect(fromRegistry.length).toBeGreaterThan(2);
  });

  it('non-vacuity: it can tell a real quest id from one that names nothing', () => {
    expect(DEFINED.has('speak')).toBe(true);
    expect(DEFINED.has('flashcards')).toBe(false);
  });
});

describe('every id that reaches markQuest names a real quest', () => {
  it('has no orphan outside the recorded one', () => {
    const orphans = [...markedIds()]
      .filter(([id]) => !DEFINED.has(id) && !(id in KNOWN_ORPHANS))
      .map(([id, where]) => `${id} — marked by ${[...where].join(', ')}`);
    expect(
      orphans,
      'markQuest writes nh_quest_<id>_<date> for any string, so these credit a ' +
        'quest that does not exist: the learner finishes the work and nothing ticks.\n' +
        orphans.map((o) => `  - ${o}`).join('\n'),
    ).toEqual([]);
  });

  it('the three that were fixed stay fixed', () => {
    const marked = markedIds();
    for (const id of ['speaking', 'flashcards', 'review']) expect(marked.has(id)).toBe(false);
    const reg = readFileSync('src/lib/completion/exerciseRegistry.ts', 'utf8');
    expect(reg).toMatch(/speaking: e\('sp', 'speak'/);
    expect(reg).toMatch(/shadowing: e\('lc', 'speak'/);
  });

  it('every recorded orphan is still marked and still nameless', () => {
    const marked = markedIds();
    for (const [id, reason] of Object.entries(KNOWN_ORPHANS)) {
      expect(reason.length).toBeGreaterThan(20);
      expect(marked.has(id), `nothing marks ${id} any more — take it off the list`).toBe(true);
      expect(DEFINED.has(id), `${id} is a quest now — take it off the list`).toBe(false);
    }
    // Asserted rather than iterated: a loop over an empty set registers nothing,
    // so the count is what says the list is empty ON PURPOSE.
    expect(Object.keys(KNOWN_ORPHANS)).toHaveLength(0);
  });

  it('every listening path credits the Listening Quest', () => {
    // The whole point of adding the quest. Nine paths: five registry rows, the
    // two screens that marked `listening` into the void, and the two that were
    // still on the old `speak` mislabel.
    const marked = markedIds();
    expect(DEFINED.has('listening')).toBe(true);
    const where = [...(marked.get('listening') ?? [])];
    expect(where.length).toBeGreaterThan(3);
    for (const f of [
      'src/components/practice/ListeningScreen.tsx',
      'src/components/home/DailyListeningCard.tsx',
      'src/components/practice/DictationScreen.tsx',
      'src/components/practice/ShadowingScreen.tsx',
    ]) {
      expect(where, `${f} no longer credits the Listening Quest`).toContain(f);
    }
  });
});

describe('every quest on the board can actually be completed', () => {
  const marked = markedIds();

  it('has no quest nothing can mark', () => {
    const TIER2 = new Set(['speak2', 'grammar2', 'master2', 'reading2', 'culture2', 'vocab2']);
    // `streak` / `streak_alive` are computed in HomeTab from the live streak
    // count rather than from a quest key — the one legitimate exception.
    const COMPUTED = new Set(['streak', 'streak_alive']);
    const unreachable = [...DEFINED].filter(
      (id) => !marked.has(id) && !TIER2.has(id) && !COMPUTED.has(id),
    );
    expect(
      unreachable,
      'nothing in the app can tick these, and allQuestsDone gates the +50 Daily ' +
        'Mastery bonus on every one of them',
    ).toEqual([]);
  });

  it('the tier-2 quests are promoted by quests that exist', () => {
    // markQuest auto-marks tier 2 on the second tier-1 completion of the day, so
    // a tier-2 whose tier-1 vanished goes unreachable the same silent way.
    // Derived from the map in quests.ts rather than restated.
    const quests = strip(readFileSync('src/lib/quests.ts', 'utf8'));
    const pairs = [...quests.matchAll(/^\s{2}(\w+):\s*'(\w+)',/gm)].map((m) => [m[1]!, m[2]!]);
    expect(pairs.length).toBeGreaterThan(4);
    for (const [tier1, tier2] of pairs) {
      expect(DEFINED.has(tier1!), `tier-1 ${tier1} is not a quest`).toBe(true);
      expect(DEFINED.has(tier2!), `tier-2 ${tier2} is not a quest`).toBe(true);
      expect(marked.has(tier1!), `nothing marks ${tier1}, so ${tier2} is unreachable`).toBe(true);
    }
  });

  it('the streak exemptions are still computed, not marked', () => {
    for (const id of ['streak', 'streak_alive']) {
      expect(DEFINED.has(id)).toBe(true);
      expect(marked.has(id), `${id} gained a marker — it is no longer computed`).toBe(false);
    }
    expect(readFileSync('src/lib/questState.ts', 'utf8')).toMatch(
      /STREAK_QUEST_IDS\.includes\(q\.id\)\s*\?\s*hasStreak/,
    );
  });
});

describe('one completion map, and a board that is actually mounted', () => {
  const home = strip(readFileSync('src/components/home/HomeTab.tsx', 'utf8'));
  const grad = strip(readFileSync('src/components/grad/GradTab.tsx', 'utf8'));

  it('every surface reads the shared derivation', () => {
    // HomeTab hand-wrote an object of sixteen keys and GradTab counted its own
    // hardcoded four, so "which quests are done" had three answers. One now.
    for (const [name, src] of [
      ['HomeTab', home],
      ['GradTab', grad],
      ['App', strip(readFileSync('src/App.tsx', 'utf8'))],
    ] as const) {
      expect(src, `${name} no longer uses questsDoneToday`).toMatch(/questsDoneToday\(/);
    }
    expect(home).not.toMatch(/speak2:\s*q\('speak2'\)/);
    expect(grad).not.toMatch(/q\('speak'\),\s*q\('grammar'\)/);
  });

  it('the board is mounted', () => {
    // The defect this closes: QuestTracker existed, was complete, and was
    // imported by nothing. A component test would have passed throughout.
    expect(grad).toMatch(/import QuestTracker from/);
    expect(grad).toMatch(/<QuestTracker/);
  });

  it('the progress row counts every quest the board shows', () => {
    // Both read questsDoneMap, so the row cannot say "3 of 4" over a board of
    // fifteen cards again.
    expect(grad).toMatch(/questsDoneMap\[id\]/);
    expect(grad).toMatch(/questsDone=\{questsDoneMap\}/);
  });
});

describe('every quest card is fully wired', () => {
  const tracker = strip(readFileSync('src/components/home/QuestTracker.tsx', 'utf8'));
  const router = strip(readFileSync('src/components/AppRouter.tsx', 'utf8'));
  const grad = strip(readFileSync('src/components/grad/GradTab.tsx', 'utf8'));

  /** Top-level keys and string values of an object literal, read with brace depth. */
  const mapOf = (name: string) => {
    const i = tracker.indexOf(`const ${name}`);
    expect(i, `${name} is gone — this guard is blind`).toBeGreaterThan(-1);
    const open = tracker.indexOf('{', i);
    let k = open;
    let d = 0;
    while (k < tracker.length) {
      const c = tracker[k];
      if (c === '{') d++;
      else if (c === '}' && --d === 0) break;
      k++;
    }
    const body = tracker.slice(open, k);
    return {
      keys: [...body.matchAll(/^\s{2}(\w+):/gm)].map((m) => m[1]!),
      values: [...body.matchAll(/^\s{2}\w+:\s*'([^']+)'/gm)].map((m) => m[1]!),
    };
  };

  it('the derivation reads both maps', () => {
    expect(mapOf('QUEST_COLORS').keys.length).toBeGreaterThan(10);
    expect(mapOf('QUEST_SCREEN_MAP').values.length).toBeGreaterThan(10);
  });

  it('every quest has its own colour and its own destination', () => {
    // Both lookups fall back (`|| QUEST_COLORS.master`, `?? 'learnpath'`), so a
    // missing entry does not crash — it silently gives the new quest another
    // quest's identity.
    expect([...DEFINED].filter((id) => !mapOf('QUEST_COLORS').keys.includes(id))).toEqual([]);
    expect([...DEFINED].filter((id) => !mapOf('QUEST_SCREEN_MAP').keys.includes(id))).toEqual([]);
  });

  it('no Start button lands on a screen that needs launch state', () => {
    // `perfect` routes to `flashcards`, whose route renders ScreenGuard unless a
    // launcher seeded fcInitPool — a plain setScr there is a dead end. GradTab
    // therefore sends those through the real launchers, so this checks each
    // ScreenGuard-fronted destination HAS one.
    const launched = grad.slice(
      grad.indexOf('onQuestStart={'),
      grad.indexOf('onQuestStart={') + 420,
    );
    const dead: string[] = [];
    for (const dest of new Set(mapOf('QUEST_SCREEN_MAP').values)) {
      const at = router.indexOf(`currentScreen === '${dest}'`);
      if (at === -1) {
        dead.push(`${dest} (no such route)`);
        continue;
      }
      if (!/<ScreenGuard/.test(router.slice(at, at + 500))) continue;
      if (!new RegExp(`'${dest}'`).test(launched)) dead.push(`${dest} (ScreenGuard, no launcher)`);
    }
    expect(dead, 'a quest Start button must land on a usable screen').toEqual([]);
  });

  it('non-vacuity: the ScreenGuard check can see one, and it is launcher-backed', () => {
    const at = router.indexOf("currentScreen === 'flashcards'");
    expect(at).toBeGreaterThan(-1);
    expect(/<ScreenGuard/.test(router.slice(at, at + 500))).toBe(true);
    expect(grad).toMatch(/screen === 'flashcards'\) startFlashcards\(\)/);
    expect(grad).toMatch(/screen === 'listening'\) startListening\(\)/);
  });
});
