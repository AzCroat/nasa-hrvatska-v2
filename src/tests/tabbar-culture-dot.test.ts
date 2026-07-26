/**
 * tabbar-culture-dot.test.ts — the Culture "new content" dot must follow the
 * user's own day, not UTC.
 *
 * TabBar derived both sides of its comparison from `new Date().toISOString()`.
 * That is self-consistent, so it was never a correctness bug — but UTC midnight
 * is late afternoon or evening across North America, where most of this app's
 * diaspora audience is. The dot therefore flipped mid-study-session rather than
 * overnight, and a learner who opened Culture in the evening saw it reappear
 * within hours.
 *
 * CLAUDE.md states the rule this violated: always use localDateStr() / weekKey()
 * from lib/dateUtils, never toISOString() for date comparisons.
 *
 * The comparison also moved from `<` to `!==`. Values already stored by the UTC
 * code can read as TOMORROW's date for a user behind UTC, and `lastVisit < today`
 * is then false for the whole day — so a straight swap to local dates would have
 * suppressed the dot until the user next opened Culture. Any date that is not
 * today means Culture has not been opened today.
 *
 * These tests exercise the predicate against the real localDateStr rather than
 * rendering TabBar: the logic is a pure date comparison, and a render test would
 * add a nav-bar harness without testing anything more.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { localDateStr } from '../lib/dateUtils';

afterEach(() => {
  vi.useRealTimers();
});

/** The predicate as TabBar computes it. */
function croatiaHasNew(lastVisit: string | null): boolean {
  if (!lastVisit) return true;
  return lastVisit !== localDateStr();
}

describe('Culture dot follows the local day', () => {
  it('no dot when Culture was opened today', () => {
    expect(croatiaHasNew(localDateStr())).toBe(false);
  });

  it('dot when Culture was opened on an earlier day', () => {
    expect(croatiaHasNew('2020-01-01')).toBe(true);
  });

  it('dot when Culture has never been opened', () => {
    expect(croatiaHasNew(null)).toBe(true);
  });

  it('a legacy UTC value dated TOMORROW still shows the dot', () => {
    // The migration case. A user at UTC-7 who opened Culture at 18:00 local had
    // "tomorrow" written by the old UTC code. Under `lastVisit < today` that
    // suppressed the dot for the whole of the following day; `!==` does not.
    const tomorrow = localDateStr(new Date(Date.now() + 86400000));
    expect(croatiaHasNew(tomorrow)).toBe(true);
  });

  it('a same-day visit is never treated as stale, whatever the hour', () => {
    // 2026-07-25 20:00 America/Los_Angeles === 2026-07-26 03:00 UTC — the hours
    // people actually study, and exactly where the two derivations disagree.
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-26T03:00:00Z'));
    expect(new Date().toISOString().slice(0, 10)).toBe('2026-07-26');
    expect(croatiaHasNew(localDateStr())).toBe(false);
  });

  it('localDateStr is built from local calendar getters, not UTC', () => {
    const src = readFileSync(resolve(__dirname, '../lib/dateUtils.ts'), 'utf8');
    const fn = /export function localDateStr[\s\S]*?\n}/.exec(src)?.[0] ?? '';
    expect(fn).toMatch(/getFullYear|getMonth|getDate/);
    expect(fn).not.toMatch(/getUTC|toISOString/);
  });

  it('TabBar no longer derives a date key from toISOString', () => {
    // Structural guard: this is the codified convention, and the file drifted
    // from it once.
    const src = readFileSync(resolve(__dirname, '../components/shared/TabBar.tsx'), 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/.*$/gm, '');
    expect(src).not.toMatch(/toISOString/);
    expect(src).toMatch(/localDateStr\(\)/);
  });
});
