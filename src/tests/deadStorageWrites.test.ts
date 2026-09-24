/**
 * deadStorageWrites.test.ts — work recorded that nothing consumes (2026-09-23).
 *
 * THE CLASS. A key written on a real user action and read by nothing is silent
 * by construction: the write succeeds, the value persists, and no screen, test
 * or error ever says that the other half was never built.
 * `onboardingAsksOnlyWhatItUses.test.tsx` fixed three of these
 * (`nh_connection`, `nh_goal_set_date`, `nh_last_active`) — but it pins three
 * hardcoded NAMES, so a fourth lands silently. That is the hand-maintained-list
 * decay this repo keeps rediscovering, and it happened: that sweep was scoped to
 * `GoalSetterModal`, and two more were live when this file was written.
 *
 *   nh_daily_min       WelcomeScreen — a SECOND surface asking the same daily
 *                      commitment question the modal asks. The sweep edited this
 *                      very file (its comment records removing nh_goal_set_date)
 *                      and left this one three lines below. Not a broken promise:
 *                      the learner's answer reached `nh_daily_goal_xp`, which IS
 *                      read and synced — only the raw minutes were dead.
 *   nh_legendary_mode  useScreenLauncher.launchLegendary — set beside
 *                      `nh_checkpoint_level`, which mcGameComplete DOES branch
 *                      on. There is no legendary branch. Its only readers were
 *                      two assertions in path-launch-vocab.test.tsx, each a proxy
 *                      beside a stronger direct one, so removing them cost no
 *                      coverage. A test pinning a write nothing consumes is the
 *                      AlphabetScreenAward shape: the test defends the defect.
 *
 * WHY THIS MATCHER IS THE DUMBEST ONE THAT WORKS. I got it wrong three times
 * before settling here, and each wrong version was confidently wrong:
 *
 *   under-match   resolved constants and import graphs → 3 hits, missing keys
 *   over-match    excluded the writing file from the reader search → 34 false
 *                 positives, including keys CLAUDE.md documents as read
 *                 (nh_case_primer_seen, nh_recent_exercises)
 *   over-ALIVE    a "prefix consumer" clause picked up a bare `nh_` literal in
 *                 App.tsx's pruning loop and declared every key alive → 0 hits,
 *                 hiding the two real ones
 *
 * So the rule here does no resolution at all: count occurrences of the exact key
 * string across production source; if every one of them IS a write statement,
 * nothing else in the app mentions the key. **It can only MISS, never
 * MANUFACTURE** — a key written via a constant or a template literal is outside
 * it, and that is the safe direction for a guard that fails the build. Stated
 * rather than papered over, because the next person needs to know what it does
 * not cover before trusting a green run.
 *
 * Comments are stripped first: this file names both dead keys in its own prose,
 * and so do the two source files that used to write them. Unstripped, that prose
 * would read as a consumer and the guard would exonerate exactly the keys it
 * exists to catch.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const PROD = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
  (f) => !/[\\/](tests|__tests__)[\\/]/.test(f),
);
const SRC = new Map(PROD.map((f) => [f, strip(readFileSync(f, 'utf8'))]));

/**
 * A literal write of ANY key through any of the app's setter spellings.
 *
 * IT WAS SCOPED TO `nh_` UNTIL 2026-09-24, and a namespace decays exactly like
 * the list of files this guard replaced: every key written outside `nh_` — the
 * whole legacy set, `uS`, `dcDay3`, `lastSeen`, `onboarded`, `cookieConsent`,
 * `fbBackupConfirmed` — was uncovered, and nothing said so. Widening it costs
 * NOTHING here because `occurrences` below can only miss: measured over the
 * widened set, 124 written keys and ZERO newly dead, so this buys a ratchet
 * against future writes rather than a finding today. Said plainly.
 */
const WRITE =
  /(?:lsSet|ssSet|_safeSet|setItem|LS_SET|_unionStrArr|_maxNum)\s*\(\s*['"]([^'"]+)['"]/g;

function literalWrites(): Map<string, string[]> {
  const out = new Map<string, string[]>();
  for (const [f, s] of SRC) {
    for (const m of s.matchAll(WRITE)) {
      const k = m[1]!;
      out.set(k, [...(out.get(k) ?? []), f]);
    }
  }
  return out;
}

/** Occurrences of the exact key across production, and how many are writes. */
function occurrences(key: string): { total: number; writes: number } {
  let total = 0;
  let writes = 0;
  for (const s of SRC.values()) {
    total += s.split(key).length - 1;
    for (const m of s.matchAll(new RegExp(WRITE.source, 'g'))) if (m[1] === key) writes++;
  }
  return { total, writes };
}

// NO EXEMPTIONS, AND THE FIRST DRAFT'S WAS WRONG. I exempted `nh_pruned_` on
// the plausible reason that a date-suffixed key is invisible to an exact-string
// count — and the staleness half of that very exemption failed, because
// App.tsx:213 reads it back through `/^nh_pruned_\d{4}-\d{2}-\d{2}$/`, whose
// literal CONTAINS the string. So the count already saw it and the exemption was
// guarding nothing. Recorded rather than quietly deleted: this is the rule about
// checking an exclusion's reason even when it is obviously true, and the
// mechanism that caught it was the staleness test, not the sweep.
//
// Prefix keys are therefore covered by construction whenever their consumer
// names the prefix. One that built its reader without ever spelling the prefix
// would need an entry here, with its reason and both staleness directions.

describe('every key the app writes is read by something', () => {
  const WRITES = literalWrites();

  it('the widening is real: it sees keys outside the nh_ namespace', () => {
    // Without this the regex could snap back to `nh_` and every assertion below
    // would still pass, over the population the old matcher already covered.
    expect([...WRITES.keys()].filter((k) => !k.startsWith('nh_')).length).toBeGreaterThan(15);
  });

  it('the sweep is real: it sees a substantial number of written keys', () => {
    // Without this the assertion below would pass against a broken matcher.
    expect(WRITES.size).toBeGreaterThan(100);
  });

  it('non-vacuity: a key that IS alive shows more occurrences than writes', () => {
    // nh_daily_goal_xp is written by WelcomeScreen and read by DailyGoalCard,
    // appUtils.getDailyGoal and the sync snapshot.
    const live = occurrences('nh_daily_goal_xp');
    expect(live.writes).toBeGreaterThan(0);
    expect(live.total).toBeGreaterThan(live.writes);
  });

  it('no key is written and then mentioned nowhere else', () => {
    const dead: string[] = [];
    for (const [key, files] of WRITES) {
      const { total, writes } = occurrences(key);
      if (total - writes === 0) dead.push(`${key} (written in ${files.join(', ')})`);
    }
    expect(
      dead,
      'these keys are written on a real code path and read by nothing — either wire ' +
        'the reader or delete the write; do not leave work recorded that nothing consumes',
    ).toEqual([]);
  });
});

describe('the two dead writes this file was written for stay gone', () => {
  // Named individually as well as caught by the derivation above: the
  // derivation covers only LITERAL writes, so a re-introduction spelled through
  // a constant would slip past it. These two assertions do not.
  const GONE = [
    ['nh_daily_min', 'the onboarding minutes value whose answer nh_daily_goal_xp already carries'],
    ['nh_legendary_mode', 'a launch flag no production reader ever branched on'],
  ] as const;

  it.each(GONE)('%s is written nowhere in production (%s)', (key) => {
    const writers = [...SRC].filter(([, s]) =>
      new RegExp(`(?:lsSet|ssSet|_safeSet|setItem)\\s*\\(\\s*['"]${key}['"]`).test(s),
    );
    expect(
      writers.map(([f]) => f),
      `${key} is written again and still read by nothing`,
    ).toEqual([]);
  });
});
