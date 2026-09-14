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
 *   listening    STILL AN ORPHAN, deliberately — see KNOWN_ORPHANS below.
 *
 * WHAT A QUEST KEY IS ACTUALLY WORTH, measured rather than assumed, because the
 * first version of this file got it wrong in the learner's favour and would have
 * shipped a change that quietly cost them. `QuestTracker` — the card board with
 * the colours and the "Start →" buttons — HAS NOT BEEN MOUNTED since the Phase 6
 * Grad redesign (595a0121). Nothing imports it. Exactly two surfaces read these
 * keys today:
 *
 *   GradTab            "N of 4 dnevnih zadataka", counting a hardcoded four:
 *                      speak, grammar, master, reading.
 *   HomeTab            `allQuestsDone` → the +50 Daily Mastery award, requiring
 *                      all fourteen non-streak quests in DAILY_QUESTS.
 *
 * So DAILY_QUESTS is read by ONE live consumer, and it is an XP gate rather than
 * a board. That is why `listening` is recorded here instead of being invented:
 * adding a quest renders no card anywhere, and its only live effect would be to
 * make an already-rare bonus require one more thing, with nothing on screen
 * saying so.
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
 * Ids that reach markQuest and name no quest, with the reason each is still
 * here. Checked in BOTH staleness directions, with the count pinned.
 *
 * `listening` is a PRODUCT DECISION, not an oversight to tidy away. On
 * 2026-08-14 the listening screens were correctly moved off markQuest('speak')
 * — listening is not speaking — onto `questKind: 'listening'`, and
 * AIListeningScreen's comment still calls it "the registry's 'listening' quest".
 * No such quest was ever added, so the change swapped a WRONG tick for NO tick
 * and the Listening Quiz, AI Listening, Dictation and Shadowing have credited
 * nothing since. Closing it means either adding a quest to DAILY_QUESTS — whose
 * only live reader is the Daily Mastery XP gate, so that silently raises a bar
 * nothing renders — or giving the quest board a home again. Both are the owner's
 * call.
 */
const KNOWN_ORPHANS: Record<string, string> = {
  listening:
    'no Listening quest exists; adding one only raises the invisible Daily Mastery bar while QuestTracker stays unmounted — owner decision (see the file header)',
};

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
    // `it.each` over an empty set registers nothing; a count keeps this honest.
    expect(Object.keys(KNOWN_ORPHANS)).toHaveLength(1);
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
    expect(readFileSync('src/components/home/HomeTab.tsx', 'utf8')).toMatch(
      /streak_alive'\s*\?\s*hasStreak/,
    );
  });
});

describe('the quest list and the completion map are one list', () => {
  it('HomeTab derives questsDone from DAILY_QUESTS', () => {
    // It was a hand-written object of sixteen keys that happened to match. Since
    // `allQuestsDone` iterates THIS object and gates the +50 award, a quest added
    // to DAILY_QUESTS and not here drops silently out of the gate — and one added
    // here and not there is counted for a quest that does not exist.
    const home = strip(readFileSync('src/components/home/HomeTab.tsx', 'utf8'));
    expect(home).toMatch(/for \(const quest of DAILY_QUESTS\)/);
    expect(home).not.toMatch(/speak2:\s*q\('speak2'\)/);
  });

  it('GradTab counts quests that exist', () => {
    // The other live reader, and a THIRD hardcoded list: the four-dot row. It is
    // deliberately four of the fourteen, so this checks the ids are real rather
    // than that the set is complete.
    const grad = strip(readFileSync('src/components/grad/GradTab.tsx', 'utf8'));
    const at = grad.indexOf("const done = [q('");
    expect(at, 'the four-dot row no longer looks like this — re-derive it').toBeGreaterThan(-1);
    const ids = [...grad.slice(at, at + 200).matchAll(/q\('([^']+)'\)/g)].map((m) => m[1]!);
    expect(ids.length).toBeGreaterThan(2);
    for (const id of ids) expect(DEFINED.has(id), `GradTab counts '${id}', not a quest`).toBe(true);
  });
});
