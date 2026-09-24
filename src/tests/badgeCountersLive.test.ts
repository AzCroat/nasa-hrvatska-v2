/**
 * badgeCountersLive — a counter nothing writes must never be a number a learner
 * is shown (2026-09-23)
 *
 * THE DEFECT THIS RATCHETS. `BadgeStats` declares fifteen numeric counters. Five
 * of them have NO producer anywhere in the app — not one increment, ever, in the
 * whole git history. That is fine INSIDE `appUtils`, where each sits in a
 * `||` or a `Math.max` beside a signal that IS live, so a value already synced
 * onto a device still counts as a floor. #678 put those fallbacks there
 * deliberately when it found three unearnable badges.
 *
 * What #678 did not do is look at the surfaces that DISPLAY the same numbers.
 * Two of them still read the dead field on its own:
 *   - `AnalyticsScreen`'s "Reading" bar — `s.readingDone || 0`, so **0 for every
 *     learner, always**, while its five neighbours filled. This is the identical
 *     defect to `s.vc`, whose fix sits TWO LINES ABOVE IT IN THE SAME ARRAY with
 *     a comment describing exactly this failure.
 *   - `BadgesScreen`'s `read3` progress row — frozen at `0 / 3` for a learner
 *     who had genuinely finished one or two passages.
 * Fixing a badge PREDICATE is not fixing the number shown beside it. The same
 * split as reachability vs clearing, and launching vs completing: a guard
 * scoped to one consumer says nothing about the next one.
 *
 * WHY THE PASSTHROUGH EXCLUSION IS LOAD-BEARING. `useSyncManager`,
 * `mergeStatsFromRemote`, `mergeSignInStats`, `sanitizeStats` and
 * `statsReducer` all carry these fields forward — `Math.max(a.f, b.f)`,
 * a clamp, an allowlist entry. Count any of them as a producer and every dead
 * field proves its own liveness, which is exactly how this survived: a first
 * cut of this derivation reported all 24 `Stats` fields as produced. Same shape
 * as `applyRemoteProgress` in `snapshotPredicatesReachable`.
 *
 * WHAT THIS MATCHER SEES: `f: <expr> + 1`, `.f = `, `.f += `, `.f++`. It does
 * NOT see a producer written some other way — such a field arrives here as
 * LEGACY, and the failure message says to check that first. It may MISS a
 * producer; it must never MANUFACTURE one.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { readingPassagesDone } from '../lib/appUtils';

const ROOT = path.resolve(__dirname, '../..');
const rel = (p: string) => path.relative(ROOT, p);

/** Modules that COPY these fields forward. None of them can produce a value. */
const PASSTHROUGH = [
  'src/hooks/useSyncManager.ts',
  'src/lib/mergeStatsFromRemote.ts',
  'src/lib/mergeSignInStats.ts',
  'src/lib/sanitizeStats.ts',
  'src/lib/statsReducer.ts',
  'src/types/index.ts',
];
/** Where a legacy floor legitimately lives, beside a live signal. Asserted below. */
const FLOOR_HOME = 'src/lib/appUtils.ts';

/**
 * Counters with no producer, each with the LIVE signal that replaced it. A
 * field may only be here if nothing writes it; it may only leave here when
 * something does. Both directions are checked.
 */
const LEGACY_WITH_LIVE_SIGNAL: Record<string, string> = {
  readingDone: 'reading_* markers in stats.vs (ReadingScreen), via readingPassagesDone',
  mediaVisits: 'getCultureStats().mediaCnt (MediaTab)',
  footballDone: "_slangSectionVisited('football')",
  dialectDone: "stats.vs includes 'dialects'",
  textingDone: "_slangSectionVisited('zagreb')",
};

function strip(src: string): string {
  return src.replace(/(^|[^:'"`\\])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');
}
function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', 'tests', '__tests__'].includes(e.name)) continue;
      walk(p, out);
    } else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) out.push(p);
  }
  return out;
}

const FILES = walk(path.join(ROOT, 'src'));
const SOURCES = new Map(FILES.map((f) => [rel(f), strip(fs.readFileSync(f, 'utf8'))]));

/** Numeric counters the badge layer reads. Derived from the interface itself. */
function badgeCounters(): string[] {
  const au = SOURCES.get(FLOOR_HOME)!;
  const start = au.indexOf('interface BadgeStats {');
  const body = au.slice(start, au.indexOf('\n}', start));
  return [...body.matchAll(/^\s*([A-Za-z_$][\w$]*)\??\s*:\s*number/gm)].map((m) => m[1]!);
}

function producersOf(field: string): string[] {
  const re = new RegExp(
    `${field}\\s*:\\s*\\(?[^,;\\n]*\\)?\\s*\\+\\s*1|\\.${field}\\s*(?:\\+\\+|\\+=|=[^=])|\\b${field}\\s*\\+\\+`,
  );
  const out: string[] = [];
  for (const [file, src] of SOURCES) {
    if (PASSTHROUGH.includes(file) || file === FLOOR_HOME) continue;
    if (re.test(src)) out.push(file);
  }
  return out;
}

const COUNTERS = badgeCounters();
const LEGACY = COUNTERS.filter((f) => producersOf(f).length === 0);
const LIVE = COUNTERS.filter((f) => producersOf(f).length > 0);

describe('badge counters — which ones anything actually writes', () => {
  it('finds the counters at all (the derivation has a subject)', () => {
    expect(COUNTERS.length).toBeGreaterThanOrEqual(12);
    expect(COUNTERS).toContain('readingDone');
    expect(COUNTERS).toContain('xp');
  });

  it('the LEGACY set is exactly the documented one', () => {
    expect([...LEGACY].sort()).toEqual(Object.keys(LEGACY_WITH_LIVE_SIGNAL).sort());
  });

  it('every counter outside that set has a real producer', () => {
    // Non-vacuity in the other direction: if the matcher ever stops seeing
    // increments, LIVE empties and this fails rather than passing silently.
    expect(LIVE.length).toBeGreaterThanOrEqual(8);
    for (const f of LIVE) expect(producersOf(f).length, f).toBeGreaterThan(0);
  });

  it('NO SURFACE reads a legacy counter directly — only appUtils may, as a floor', () => {
    const offenders: string[] = [];
    for (const field of LEGACY) {
      for (const [file, src] of SOURCES) {
        if (PASSTHROUGH.includes(file) || file === FLOOR_HOME) continue;
        if (new RegExp(`\\.${field}\\b`).test(src)) offenders.push(`${file} reads .${field}`);
      }
    }
    expect(
      offenders,
      offenders.length
        ? `These read a counter NOTHING writes, so they render a number the app ` +
            `did not measure (NEVER DO 13). Route them through the same helper the ` +
            `badge predicate uses — the displayed number and the badge must come ` +
            `from one expression. The live signals are:\n` +
            Object.entries(LEGACY_WITH_LIVE_SIGNAL)
              .map(([f, sig]) => `    ${f} → ${sig}`)
              .join('\n') +
            `\n  ${offenders.join('\n  ')}`
        : undefined,
    ).toEqual([]);
  });

  /**
   * A NULLISH DEFAULT IS NOT A SECOND SIGNAL, and the first version of this
   * check could not tell them apart. It asked only whether the line contained
   * `||` or `Math.max` — which `(s.readingDone || 0) >= 3` satisfies, so
   * reverting the read3 predicate to the exact unearnable form #678 fixed
   * passed all 37 tests. `|| 0` and `?? 0` are stripped first, so what is left
   * is a genuine alternative or nothing.
   */
  function livePartnerOf(line: string): string {
    return line.replace(/(?:\|\||\?\?)\s*0\b/g, '');
  }

  it('inside appUtils a legacy counter never stands alone', () => {
    // A floor is only honest beside a live signal.
    const au = SOURCES.get(FLOOR_HOME)!;
    for (const field of LEGACY) {
      for (const line of au.split('\n')) {
        if (!new RegExp(`\\.${field}\\b`).test(line)) continue;
        expect(
          /\|\||Math\.max/.test(livePartnerOf(line)),
          `${field} has no live signal beside it: "${line.trim()}"`,
        ).toBe(true);
      }
    }
  });

  it('POSITIVE CONTROL — `|| 0` alone does not count as a live signal', () => {
    // The mutation that survived the first draft, verbatim.
    const unearnable = '    r: (s) => (s.readingDone || 0) >= 3,';
    expect(/\|\||Math\.max/.test(unearnable)).toBe(true); // the naive check passed it
    expect(/\|\||Math\.max/.test(livePartnerOf(unearnable))).toBe(false); // this one does not
    // ...and a real fallback still reads as one.
    const honest =
      '    r: (s) => (s.mediaVisits || 0) >= 1 || (getCultureStats().mediaCnt || 0) >= 1,';
    expect(/\|\||Math\.max/.test(livePartnerOf(honest))).toBe(true);
    expect(
      /\|\||Math\.max/.test(livePartnerOf('  return Math.max(s.readingDone || 0, markers);')),
    ).toBe(true);
  });

  it('POSITIVE CONTROL — the scan sees the expression that was actually there', () => {
    const probe = "    { label: 'Reading', icon: '\u{1F4F0}', value: s.readingDone || 0 },";
    expect(/\.readingDone\b/.test(probe)).toBe(true);
    // ...and not an unrelated identifier that merely contains the name.
    expect(/\.readingDone\b/.test('const myReadingDoneFlag = 1;')).toBe(false);
  });
});

describe('readingPassagesDone — the one definition', () => {
  it('counts distinct reading_* markers', () => {
    expect(readingPassagesDone({ vs: ['reading_A', 'reading_B'] })).toBe(2);
  });
  it('ignores repeats of the same passage', () => {
    expect(readingPassagesDone({ vs: ['reading_A', 'reading_A'] })).toBe(1);
  });
  it('ignores non-reading completion keys', () => {
    expect(readingPassagesDone({ vs: ['alphabet', 'grammarmap', 'reading_A'] })).toBe(1);
  });
  it('treats a legacy synced value as a floor', () => {
    expect(readingPassagesDone({ readingDone: 5, vs: [] })).toBe(5);
    expect(readingPassagesDone({ readingDone: 1, vs: ['reading_A', 'reading_B'] })).toBe(2);
  });
  it('is 0, not NaN, on an absent or malformed vs', () => {
    expect(readingPassagesDone({})).toBe(0);
    expect(readingPassagesDone({ vs: undefined })).toBe(0);
  });
});
