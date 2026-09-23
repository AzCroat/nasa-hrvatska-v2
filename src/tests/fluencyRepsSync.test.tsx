/**
 * fluencyRepsSync — the three fluency counters agree about what they count
 * (sweep 38, 2026-09-23).
 *
 * `FluencySnapshot` prints three lifetime totals in one column and invites the
 * learner to compare them. Only ONE of them was synced. `stats.pr` has ridden
 * the progress blob since production reps shipped; `listeningMetric` and
 * `readingMetric` were written device-local, each with a comment calling
 * cross-device sync "a scoped follow-up identical to the production-rep one"
 * and deferring it — so a learner who reads on a laptop and listens on a phone
 * saw two of the three totals start again from zero on each device, beside one
 * that did not.
 *
 * The week column was always consistent (all three device-local); it was the
 * TOTALS that disagreed about what they were counting, in the row whose whole
 * purpose is the comparison.
 *
 * WHERE THE RECONCILIATION LIVES IS THE LOAD-BEARING CHOICE.
 * `recordProductionRep`'s caller also does `setStats({ pr: pr + 1 })` at the
 * counting site — which works because there is exactly one such site. Listening
 * and reading have several: `useAward`'s activityType path, plus the direct
 * recorders on the three screens whose award type is not their modality (sweep
 * 35). Reconciling at each site would mean remembering all of them, and the
 * next one added. `buildProgressSnapshot` sees every site by construction
 * because it reads the buckets those sites write — and it is already the
 * documented single source of truth for what gets persisted. It does the same
 * `Math.max` reconciliation it has always done for `str`.
 */
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { recordListeningRep } from '../lib/listeningMetric';
import { recordReadingRep } from '../lib/readingMetric';
import { buildProgressSnapshot } from '../lib/progressSnapshot';
import { mergeStatsFromRemote } from '../lib/mergeStatsFromRemote';
import { sanitizeStats } from '../lib/sanitizeStats';
import FluencySnapshot from '../components/profile/FluencySnapshot';
import type { Stats } from '../types/index';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

vi.mock('../lib/firebase.js', () => ({ gP: () => null }));

const BASE = { xp: 0, lc: 0, gc: 0, sp: 0, pr: 0, de: 0, rc: 0, pf: 0, mv: 0, hi: 0, str: 0 };
const asStats = (o: Record<string, unknown>) => ({ ...BASE, ...o }) as unknown as Stats;

function snapshot(stats: Record<string, unknown>) {
  return buildProgressSnapshot({
    uid: 'u1',
    name: 'Test',
    stats: asStats(stats),
    dchlA: [false, false, false],
    dchlSl: ['', '', ''],
    favs: [],
    jWords: [],
  } as never) as { stats: Stats };
}

describe('the snapshot carries the listening and reading reps', () => {
  beforeEach(() => localStorage.clear());

  it('lifts both counts out of their device-local buckets', () => {
    recordListeningRep();
    recordListeningRep();
    recordReadingRep();
    const out = snapshot({});
    expect(out.stats.lr).toBe(2);
    expect(out.stats.rr).toBe(1);
  });

  it('never writes a LOWER number than the stats already hold', () => {
    // The cross-device case that matters: this device has barely listened, the
    // blob it is about to overwrite was written by a device that had. Lowering
    // it here would be a merge that reduces — the one thing sync may never do.
    recordListeningRep();
    const out = snapshot({ lr: 40, rr: 25 });
    expect(out.stats.lr).toBe(40);
    expect(out.stats.rr).toBe(25);
  });

  it('a device with nothing counted leaves the fields ABSENT, which reads as 0', () => {
    // Deliberate, and the same shape `str` has always had: the object is only
    // re-spread when a value actually moves, so a learner who has never
    // listened writes no key rather than a zero. Every reader takes `|| 0`,
    // and the merge below proves an absent field cannot zero the other side —
    // which is the property that makes omitting it safe.
    const out = snapshot({});
    expect(out.stats.lr).toBeUndefined();
    expect((out.stats.lr || 0) + (out.stats.rr || 0)).toBe(0);
  });

  it('leaves everything else alone', () => {
    recordReadingRep();
    const out = snapshot({ xp: 500, str: 3 });
    expect(out.stats.xp).toBe(500);
  });
});

describe('the merge is additive, like every other counter', () => {
  it('takes the higher side in both directions', () => {
    expect(mergeStatsFromRemote(asStats({ lr: 9, rr: 2 }), { lr: 3, rr: 30 }, asStats({})).lr).toBe(
      9,
    );
    expect(mergeStatsFromRemote(asStats({ lr: 9, rr: 2 }), { lr: 3, rr: 30 }, asStats({})).rr).toBe(
      30,
    );
  });

  it('an older blob with neither field cannot zero them', () => {
    // Both are optional because they arrived after the type. A blob written
    // before them carries neither, and that must read as "nothing counted on
    // that device", never as "reset what this one holds".
    const merged = mergeStatsFromRemote(asStats({ lr: 12, rr: 7 }), { xp: 1 }, asStats({}));
    expect(merged.lr).toBe(12);
    expect(merged.rr).toBe(7);
  });
});

describe('sanitize treats them like the other counters', () => {
  it('keeps non-negative integers and rejects the rest', () => {
    expect(sanitizeStats({ lr: 5, rr: 6 } as never).lr).toBe(5);
    expect(sanitizeStats({ lr: -1 } as never).lr).toBeUndefined();
    expect(sanitizeStats({ rr: NaN } as never).rr).toBeUndefined();
    expect(sanitizeStats({ lr: 4.7 } as never).lr).toBe(4);
  });
});

describe('the card shows the synced total, not just this device', () => {
  beforeEach(() => localStorage.clear());

  it('a fresh device still reports what the learner has done elsewhere', () => {
    recordListeningRep(); // 1 here…
    render(
      <FluencySnapshot
        cefr="B1"
        setScr={vi.fn()}
        syncedProductionTotal={0}
        syncedListeningTotal={88}
        syncedReadingTotal={41}
      />,
    );
    expect(screen.getByText(/1 this week · 88 total/)).toBeTruthy();
    expect(screen.getByText(/0 this week · 41 total/)).toBeTruthy();
  });

  it('a device ahead of its synced stat keeps its own higher count', () => {
    recordReadingRep();
    recordReadingRep();
    recordReadingRep();
    render(
      <FluencySnapshot
        cefr="B1"
        setScr={vi.fn()}
        syncedProductionTotal={0}
        syncedListeningTotal={0}
        syncedReadingTotal={1}
      />,
    );
    expect(screen.getByText(/3 this week · 3 total/)).toBeTruthy();
  });
});

describe('every merge point a monotonic counter has to survive', () => {
  // THE FINDING INSIDE THE FINDING. `pr` — the counter these two are modelled
  // on — is Math.max-merged in FOUR places, not one:
  //
  //   mergeStatsFromRemote   the React-state merge
  //   useSyncManager         the local-cache write-back (`...safePSt` spread)
  //   firebase fbLoadProgress        the load-side backstop
  //   firebase (delta apply)         the same, on the delta path
  //
  // Three of them are spread-plus-override, so a field that is not LISTED is
  // carried by the spread and silently NOT protected: a lower remote value
  // wins. `pr` itself learned this the hard way — its comment in firebase.ts
  // records it as "the one _DELTA_NUMERIC field that was missing its load-side
  // backstop, causing the real fluency signal to regress on a cache-cold read".
  //
  // So the first draft of this sweep, which added `lr`/`rr` to
  // mergeStatsFromRemote alone, was the same defect one counter later. This
  // test is derived rather than a list of four: it asks, for each file that
  // guards `pr`, whether it guards these two as well — so a fifth merge point
  // added next month is covered the moment someone protects `pr` in it, and a
  // sixth counter cannot be added to one file and forgotten in three.
  const FILES = [
    'src/lib/mergeStatsFromRemote.ts',
    'src/hooks/useSyncManager.ts',
    'src/lib/firebase.ts',
  ];

  it.each(FILES)('%s guards lr and rr wherever it guards pr', (rel) => {
    const src = readFileSync(resolve(__dirname, '../..', rel), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    const count = (field: string) =>
      (src.match(new RegExp(`\\b${field}:\\s*Math\\.max\\(`, 'g')) || []).length;
    const pr = count('pr');
    expect(pr, `${rel} no longer guards pr — re-derive this test's subject`).toBeGreaterThan(0);
    expect(count('lr'), `${rel} guards pr in ${pr} place(s) and lr in fewer`).toBe(pr);
    expect(count('rr'), `${rel} guards pr in ${pr} place(s) and rr in fewer`).toBe(pr);
  });

  it('finds at least four guarded sites in total — an empty subject proves nothing', () => {
    const total = FILES.reduce((n, rel) => {
      const src = readFileSync(resolve(__dirname, '../..', rel), 'utf8');
      return n + (src.match(/\bpr:\s*Math\.max\(/g) || []).length;
    }, 0);
    expect(total).toBeGreaterThanOrEqual(4);
  });
});
