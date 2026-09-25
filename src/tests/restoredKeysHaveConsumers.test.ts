/**
 * SWEEP 118 — EVERY KEY THE SYNC LAYER RESTORES MUST HAVE A CONSUMER THAT IS NOT
 * THE SYNC LAYER.
 *
 * Sweep 117 asked whether each setter the sync layer writes has a PRODUCER, and
 * said in its own closing paragraph what it could not see: "a setter with a live
 * producer whose RESULT nothing renders". This is that half, asked of the other
 * population — the 54 localStorage keys `applyRemoteProgress` writes back onto a
 * device. Every one of them is a claim that this fact matters enough to survive a
 * device change, so a key nothing reads is a round trip with no destination.
 *
 * IT FOUND A BUTTON THAT SAVED NOWHERE. `HeritageStoryScreen` wrote the learner's
 * AI-generated heritage story to `heritageStory`, answered "✅ Saved!", and
 * nothing anywhere read the key back — so the story was gone on navigation and
 * returning cost another Claude call to regenerate it. The sync layer carried it
 * to the learner's other devices, which could not read it either.
 *
 * A CONDUIT IS NOT A CONSUMER — the twin of sweep 111's "a conduit is not a
 * producer", and the sharper instance is `nh_heritage_saved`: an earlier sweep
 * fixed that field's snapshot predicate (the writer sets 'true', the snapshot
 * demanded '1') so the flag would finally sync. It has never had a reader in its
 * entire history. Verifying that data MOVES is not verifying that anything USES
 * it, and the two questions look identical from inside a sync test.
 *
 * WHAT THIS CANNOT SEE, stated: a key with a real READ whose value changes
 * nothing a learner meets — a read into a variable that is then discarded is a
 * consumer by this definition and dead in fact (`doneCount` → `void _dcOpen`,
 * sweep 116). It also sees only the keys restored with a string LITERAL; the ones
 * built from a constant or a template (`CUSTOM_WORDS_KEY`, `nh_ceremony_${k}`) are
 * outside the population.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

/** Reading a key HERE is the round trip itself, not a consumer of it. */
const SYNC_LAYER = new Set([
  'src/lib/applyRemoteProgress.ts',
  'src/lib/progressSnapshot.ts',
  'src/lib/firebase.ts',
  'src/lib/mergeStatsFromRemote.ts',
  'src/hooks/useSyncManager.ts',
]);

const APPLY = 'src/lib/applyRemoteProgress.ts';

// Line comments BEFORE block comments: a `//` line containing `/*` otherwise
// opens a runaway block that eats the corpus to the next `*/` (sweep 71/72).
const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Reads only. A `setItem` is another write, and two writes are not a use. */
const READ = String.raw`(?:getItem|lsGet|lsGetJSON)`;

/** The keys `applyRemoteProgress` writes onto the device, from its own source. */
function restoredKeys(): string[] {
  const src = readFileSync(APPLY, 'utf8');
  return [...new Set([...src.matchAll(/_safeSet\(\s*'([^']+)'/g)].map((m) => m[1]!))].sort();
}

function productionFiles(): [string, string][] {
  const out: [string, string][] = [];
  for (const f of globSync('src/**/*.{ts,tsx,js,jsx}')) {
    if (/(^|\/)(tests|__tests__|__mocks__)\//.test(f) || /\.(test|spec)\./.test(f)) continue;
    if (SYNC_LAYER.has(f)) continue;
    out.push([f, strip(readFileSync(f, 'utf8'))]);
  }
  return out;
}

const FILES = productionFiles();

/**
 * Files outside the sync layer that READ the key.
 *
 * THE CONSTANT HOP IS THE WHOLE DIFFERENCE between a signal and a flood. Most of
 * this codebase reads a key through a named constant — `const SOUND_KEY =
 * 'nh_sound_enabled'` … `lsGet(SOUND_KEY)` — so a literal-only matcher reports
 * fourteen live keys as dead, which is a list nobody would read twice. Pinned
 * below on `nh_sound_enabled`.
 */
function consumers(key: string, files: [string, string][] = FILES): string[] {
  const q = esc(key);
  const direct = new RegExp(`${READ}\\(\\s*['"\`]${q}`);
  const out: string[] = [];
  for (const [f, s] of files) {
    if (direct.test(s)) {
      out.push(f);
      continue;
    }
    const bound = [
      ...s.matchAll(
        new RegExp(`(?:const|let|var)\\s+([A-Za-z_$][\\w$]*)[^=\\n]*=\\s*['"\`]${q}['"\`]`, 'g'),
      ),
    ].map((m) => m[1]!);
    if (bound.some((n) => new RegExp(`${READ}\\(\\s*${esc(n)}\\b`).test(s))) out.push(f);
  }
  return out;
}

/**
 * Keys restored onto every device that nothing outside the sync layer reads.
 * Each reason is measured, not reasoned; both staleness directions are checked.
 */
const NO_CONSUMER: Record<string, string> = {
  nh_last_ex:
    'its consumer was HomeTab\u2019s "continue last activity" card, deleted on 2026-04-25 in the HomeTab rewrite (c1aea80d, which removed the getLastActivity() reader). The WRITE in App.tsx survived, together with the ~40-row label map that exists only to fill nh_last_ex_label. Superseded by the next-step engine (getNextStep), which computes the recommendation rather than remembering the last screen',
  nh_last_ex_label: 'as nh_last_ex — the same deleted HomeTab reader, the same surviving write',
  nh_heritage_saved:
    'never had a reader in its entire git history: WelcomeScreen writes it, applyRemoteProgress writes it, nothing has ever read it. heritageLearner.ts answers the question it would have answered from nh_heritage_region directly. Kept rather than deleted because the snapshot predicate for it is itself pinned (snapshotPredicatesReachable)',
  nh_level_quiz_passes:
    'a localStorage MIRROR whose comment claims it "ensures the value survives across cold starts" — it cannot, because nothing reads it. The real value lives in stats.levelQuizPasses: merged by mergeStatsFromRemote, validated by sanitizeStats, persisted in the uP_ blob and rendered by LearnPath, which gates the next level on it. The mirror is redundant, not load-bearing',
  nh_prestige:
    'dead in BOTH directions and already known in one: sweep 111 recorded it in deadKeyReaders NO_PRODUCER (nothing outside the sync layer writes it) and nothing reads it either, so the field exists only to be snapshotted and restored',
};

describe('the sync layer is a conduit: every key it restores has a real consumer', () => {
  const keys = restoredKeys();

  it('the population is derived from applyRemoteProgress and non-empty', () => {
    expect(keys.length).toBeGreaterThanOrEqual(40);
    expect(keys).toContain('heritageStory');
    expect(keys).toContain('nh_streak_days');
    expect(FILES.length).toBeGreaterThan(400);
  });

  it('non-vacuity: the matcher finds real consumers, including through a constant', () => {
    // Direct literal read.
    expect(consumers('nh_heritage_region')).not.toEqual([]);
    // THE CONSTANT HOP, PINNED ON REAL DATA. soundSettings.ts binds the key to
    // SOUND_KEY and never mentions the literal in a read call; without the second
    // clause this key joins NO_CONSUMER and so do thirteen others.
    expect(readFileSync('src/lib/soundSettings.ts', 'utf8')).toMatch(
      /const SOUND_KEY = 'nh_sound_enabled'/,
    );
    expect(consumers('nh_sound_enabled')).toContain('src/lib/soundSettings.ts');
    // A key nothing anywhere mentions has no consumer.
    expect(consumers('nh_no_such_key_anywhere')).toEqual([]);
  });

  it('every restored key is read by something that is not the sync layer', () => {
    const orphans = keys
      .filter((k) => !(k in NO_CONSUMER) && consumers(k).length === 0)
      .map((k) => `${k} — restored onto every device, read by nothing`);
    expect(
      orphans,
      'A key the sync layer restores and nothing reads is a round trip with no ' +
        'destination. That is how "💾 Save Story" came to answer "✅ Saved!" while ' +
        'the heritage story was discarded on navigation (sweep 118), and how the ' +
        'daily challenge died while still being uploaded on every save (116).\n' +
        orphans.map((o) => `  - ${o}`).join('\n'),
    ).toEqual([]);
  });

  it('POSITIVE CONTROL — the real heritageStory defect is re-found when its reader goes', () => {
    // The fix is one file reading the key. Drop that file from the corpus and the
    // guard must report the key again — this is the assertion that proves the
    // check is about the READER and not about the key merely existing.
    const withoutScreen = FILES.filter(
      ([f]) => f !== 'src/components/croatia/HeritageStoryScreen.tsx',
    );
    expect(consumers('heritageStory', withoutScreen)).toEqual([]);
    expect(consumers('heritageStory')).toContain('src/components/croatia/HeritageStoryScreen.tsx');
  });

  it('every NO_CONSUMER entry is still restored and still unread', () => {
    for (const [k, reason] of Object.entries(NO_CONSUMER)) {
      expect(reason.length, `${k} needs a measured reason`).toBeGreaterThan(60);
      expect(keys, `${k} is no longer restored — drop the entry`).toContain(k);
      expect(
        consumers(k),
        `${k} gained a consumer — take it off NO_CONSUMER, the round trip lands now`,
      ).toEqual([]);
    }
    expect(Object.keys(NO_CONSUMER)).toHaveLength(5);
  });
});
