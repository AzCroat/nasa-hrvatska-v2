/**
 * mergeSignInStats.test.ts — the sign-in merge must defend the same fields the
 * canonical remote merge does.
 *
 * This merge spreads the REMOTE blob as its base, so a field it does not name
 * explicitly silently takes the remote value. rs and levelQuizPasses were both
 * unnamed. That did not lose data in practice, because the result is re-merged
 * through mergeStatsFromRemote by onSignedIn(isHydrate) against a React state
 * that already holds the local blob — but two writes bypass that repair (the
 * local blob write, and fbSaveProgress when local XP is ahead), and nothing
 * stated the dependency or tested it. It went unnoticed because the merge lived
 * inline in useAuth's auth-state effect, unreachable without mounting the hook
 * and stubbing Firebase.
 *
 * The drift guard at the foot of this file is the point of the exercise: it
 * asserts agreement with mergeStatsFromRemote field by field, so the next field
 * added to one and forgotten in the other fails here rather than in production.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { mergeSignInStats } from '../lib/mergeSignInStats';
import { mergeStatsFromRemote } from '../lib/mergeStatsFromRemote';
import type { Stats } from '../types/index.js';

const DS: Stats = {
  xp: 0,
  spent: 0,
  str: 1,
  diff: 'beginner',
  lc: 0,
  pf: 0,
  gc: 0,
  sp: 0,
  pr: 0,
  de: 0,
  rc: 0,
  mv: 0,
  hi: 0,
  authLoading: 0,
  rs: [],
  ct: [],
  vs: [],
  badges: [],
};

describe('mergeSignInStats — rs (ordered lesson scores)', () => {
  it('keeps the LONGER local history rather than taking the remote one', () => {
    const out = mergeSignInStats({ rs: ['100', '75', '80', '90'] }, { rs: ['100', '75'] });
    expect(out.rs).toEqual(['100', '75', '80', '90']);
  });

  it('takes the remote history when it is the longer one', () => {
    const out = mergeSignInStats({ rs: ['100'] }, { rs: ['100', '75', '80'] });
    expect(out.rs).toEqual(['100', '75', '80']);
  });

  it('does NOT union — duplicate scores are real history, not noise', () => {
    // A Set-union would collapse the three 100s into one and misreport the run.
    const out = mergeSignInStats({ rs: ['100', '100', '100'] }, { rs: ['100'] });
    expect(out.rs).toEqual(['100', '100', '100']);
  });

  it('survives a missing or non-array value on either side', () => {
    expect(mergeSignInStats({}, {}).rs).toEqual([]);
    expect(mergeSignInStats({ rs: ['90'] }, {}).rs).toEqual(['90']);
    expect(mergeSignInStats({ rs: 0 as unknown as string[] }, { rs: ['90'] }).rs).toEqual(['90']);
  });
});

describe('mergeSignInStats — levelQuizPasses', () => {
  it('unions keys from both sides', () => {
    const out = mergeSignInStats(
      { levelQuizPasses: { 1: { score: 8, passedAt: 100 } } },
      { levelQuizPasses: { 2: { score: 9, passedAt: 200 } } },
    );
    expect(Object.keys(out.levelQuizPasses as object).sort()).toEqual(['1', '2']);
  });

  it('keeps the more recent pass for a level both sides hold', () => {
    const out = mergeSignInStats(
      { levelQuizPasses: { 1: { score: 7, passedAt: 500 } } },
      { levelQuizPasses: { 1: { score: 10, passedAt: 100 } } },
    );
    expect((out.levelQuizPasses as Record<number, { score: number }>)[1].score).toBe(7);
  });

  it('adopts a newer remote pass over an older local one', () => {
    const out = mergeSignInStats(
      { levelQuizPasses: { 1: { score: 7, passedAt: 100 } } },
      { levelQuizPasses: { 1: { score: 10, passedAt: 500 } } },
    );
    expect((out.levelQuizPasses as Record<number, { score: number }>)[1].score).toBe(10);
  });

  it('does not drop a local-only pass — the regression this fix targets', () => {
    // Pass level 3 on the laptop, sign in where remote has never seen it.
    const out = mergeSignInStats(
      { levelQuizPasses: { 3: { score: 9, passedAt: 900 } } },
      { levelQuizPasses: {} },
    );
    expect((out.levelQuizPasses as Record<number, unknown>)[3]).toBeDefined();
  });
});

describe('mergeSignInStats — counters and sets', () => {
  it('never lets a behind remote pull a counter down', () => {
    const out = mergeSignInStats(
      { xp: 900, lc: 20, gc: 8, pr: 12, srsTotal: 60, spent: 300 },
      { xp: 100, lc: 2, gc: 1, pr: 0, srsTotal: 5, spent: 0 },
    );
    expect(out.xp).toBe(900);
    expect(out.lc).toBe(20);
    expect(out.gc).toBe(8);
    expect(out.pr).toBe(12);
    expect(out.srsTotal).toBe(60);
    expect(out.spent).toBe(300);
  });

  it('takes the remote counter when it is ahead', () => {
    expect(mergeSignInStats({ xp: 10 }, { xp: 999 }).xp).toBe(999);
  });

  it('unions completed topics, screens and badges', () => {
    const out = mergeSignInStats(
      { ct: ['greetings'], vs: ['phonology'], badges: ['first'] },
      { ct: ['numbers'], vs: ['aspect'], badges: ['x100'] },
    );
    expect(new Set(out.ct as string[])).toEqual(new Set(['greetings', 'numbers']));
    expect(new Set(out.vs as string[])).toEqual(new Set(['phonology', 'aspect']));
    expect(new Set(out.badges as string[])).toEqual(new Set(['first', 'x100']));
  });

  it('never regresses diff', () => {
    expect(mergeSignInStats({ diff: 'advanced' }, { diff: 'beginner' }).diff).toBe('advanced');
    expect(mergeSignInStats({ diff: 'beginner' }, { diff: 'advanced' }).diff).toBe('advanced');
  });

  it('passes remote-only fields through the base spread', () => {
    expect(mergeSignInStats({}, { heritage: true }).heritage).toBe(true);
  });

  it('handles a null local blob — a device with no prior progress', () => {
    const out = mergeSignInStats(null, { xp: 50, rs: ['100'] });
    expect(out.xp).toBe(50);
    expect(out.rs).toEqual(['100']);
  });
});

/**
 * Drift guard. These two functions encode the same policy for two different call
 * shapes, and the sign-in one already fell behind once. Any field the canonical
 * merge defends must get the same answer here.
 */
describe('mergeSignInStats agrees with the canonical mergeStatsFromRemote', () => {
  const LOCAL: Partial<Stats> = {
    xp: 900,
    spent: 120,
    lc: 20,
    gc: 8,
    sp: 4,
    pr: 12,
    de: 3,
    rc: 6,
    str: 9,
    pf: 2,
    mv: 5,
    hi: 1,
    srsTotal: 60,
    mistakesMastered: 11,
    readingDone: 7,
    mediaVisits: 3,
    diff: 'advanced',
    ct: ['greetings'],
    vs: ['phonology'],
    badges: ['first'],
    rs: ['100', '75', '80', '90'],
    levelQuizPasses: { 1: { score: 8, passedAt: 500 }, 3: { score: 9, passedAt: 900 } },
  };
  const REMOTE: Partial<Stats> = {
    xp: 100,
    spent: 0,
    lc: 2,
    gc: 1,
    sp: 0,
    pr: 0,
    de: 0,
    rc: 0,
    str: 1,
    pf: 0,
    mv: 0,
    hi: 0,
    srsTotal: 5,
    mistakesMastered: 0,
    readingDone: 0,
    mediaVisits: 0,
    diff: 'beginner',
    ct: ['numbers'],
    vs: ['aspect'],
    badges: ['x100'],
    rs: ['100', '75'],
    levelQuizPasses: { 1: { score: 10, passedAt: 100 }, 2: { score: 7, passedAt: 200 } },
  };

  const signIn = mergeSignInStats(
    LOCAL as Record<string, unknown>,
    REMOTE as Record<string, unknown>,
  );
  const canonical = mergeStatsFromRemote({ ...DS, ...LOCAL } as Stats, REMOTE, DS);

  const SCALARS = [
    'xp',
    'spent',
    'lc',
    'gc',
    'sp',
    'pr',
    'de',
    'rc',
    'str',
    'pf',
    'mv',
    'hi',
    'srsTotal',
    'mistakesMastered',
    'readingDone',
    'mediaVisits',
    'diff',
  ] as const;

  it.each(SCALARS)('agrees on %s', (field) => {
    expect((signIn as Record<string, unknown>)[field]).toEqual(
      (canonical as unknown as Record<string, unknown>)[field],
    );
  });

  it.each(['ct', 'vs', 'badges'] as const)('agrees on the %s union', (field) => {
    expect(new Set(signIn[field] as string[])).toEqual(
      new Set(canonical[field] as unknown as string[]),
    );
  });

  it('agrees on rs — the field that was missing', () => {
    expect(signIn.rs).toEqual(canonical.rs);
  });

  it('agrees on levelQuizPasses — the other field that was missing', () => {
    expect(signIn.levelQuizPasses).toEqual(canonical.levelQuizPasses);
  });
});

/**
 * Single-implementation guard.
 *
 * The rules were extracted from useAuth so they could be tested — but useAuth
 * had TWO hand-written copies of the same 20-field merge, and only one was
 * replaced. The survivor (`_safeMerged`, on the navigation path) therefore kept
 * the original omission of rs and levelQuizPasses and sat outside the drift
 * guard above, which only ever sees mergeSignInStats. A second copy is the
 * failure mode this whole file exists to prevent, so assert there is only one.
 */
describe('useAuth holds no hand-rolled copy of the merge', () => {
  const CODE = readFileSync(resolve(process.cwd(), 'src/hooks/useAuth.ts'), 'utf8');

  it('routes every stats merge through mergeSignInStats', () => {
    expect(CODE).toContain('mergeSignInStats(');
  });

  it('contains no inline Math.max merge over a local/remote stats pair', () => {
    // The shape both copies had: Math.max((<something>St.<field> as number) || 0, ...).
    // Matching the ...St. accessor keeps this from flagging ordinary Math.max use.
    const inline = CODE.match(/Math\.max\(\(\w*[Ss]t\.\w+ as number\)/g) || [];
    expect(inline).toEqual([]);
  });
});
