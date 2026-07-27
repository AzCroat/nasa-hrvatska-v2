// Set TZ before anything touches Date. Node re-reads process.env.TZ on Linux, so
// this genuinely shifts local-time arithmetic — which is what makes this class
// testable at all. CI runs in UTC, where localDateStr() and
// toISOString().slice(0,10) are indistinguishable, so a test that did not pin a
// timezone would pass against the bug.
const _ORIGINAL_TZ = process.env.TZ;
process.env.TZ = 'America/Los_Angeles';

import { describe, it, expect, afterAll } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { localDateStr } from '../lib/dateUtils';

/**
 * The UTC-day-boundary class.
 *
 * This app's audience is the Croatian diaspora — largely the Americas — so a UTC
 * day boundary lands in the middle of their afternoon or evening. Anything keyed
 * or gated on "today" must use localDateStr(), per the project convention
 * (CLAUDE.md: never new Date().toISOString() for date comparisons).
 *
 * The class already produced: the server non-ISO weekKey (Study Clan XP resetting
 * a day early), the SpeedChallenge / DailyPlan / DailyListening reset lockouts,
 * the Culture "new content" dot, and the StatsTab day bucket.
 */

// process.env.TZ is per-WORKER, and vitest runs files sequentially within a
// worker — so leaving it set would silently shift every date-sensitive test that
// happens to run after this file in the same process (tabbar-culture-dot.test.ts
// in particular depends on CI being UTC). Restore it.
afterAll(() => {
  if (_ORIGINAL_TZ === undefined) delete process.env.TZ;
  else process.env.TZ = _ORIGINAL_TZ;
});

// Sunday 2026-07-26, 20:00 in Los Angeles === Monday 2026-07-27, 03:00 UTC.
const SUNDAY_EVENING_LOCAL = new Date('2026-07-27T03:00:00Z');
// Sunday 2026-07-26, 10:00 in Los Angeles === Sunday 2026-07-26, 17:00 UTC.
const SUNDAY_MORNING_LOCAL = new Date('2026-07-26T17:00:00Z');

describe('local vs UTC day boundary', () => {
  it('the pinned timezone actually applies (guard against a vacuous suite)', () => {
    // If TZ did not take effect, both sides below would agree and every
    // assertion in this file would pass against the bug.
    expect(SUNDAY_EVENING_LOCAL.getTimezoneOffset()).not.toBe(0);
    expect(localDateStr(SUNDAY_EVENING_LOCAL)).not.toBe(
      SUNDAY_EVENING_LOCAL.toISOString().slice(0, 10),
    );
  });

  it('localDateStr returns the learner’s day, not the UTC day', () => {
    expect(localDateStr(SUNDAY_EVENING_LOCAL)).toBe('2026-07-26'); // still Sunday locally
    expect(SUNDAY_EVENING_LOCAL.toISOString().slice(0, 10)).toBe('2026-07-27'); // already Monday in UTC
  });

  it('both ends of one local Sunday map to ONE local key but TWO UTC keys', () => {
    // This is the weekly-digest defect in App.tsx concretely. The send is gated
    // on `today.getDay() !== 0`, which is LOCAL, so both instants below are
    // inside the same Sunday and must share one dedup key. With a UTC key they
    // do not, so the digest could send twice on a single Sunday for every user
    // west of UTC.
    expect(SUNDAY_MORNING_LOCAL.getDay()).toBe(0);
    expect(SUNDAY_EVENING_LOCAL.getDay()).toBe(0);

    const localKeys = new Set([
      localDateStr(SUNDAY_MORNING_LOCAL),
      localDateStr(SUNDAY_EVENING_LOCAL),
    ]);
    const utcKeys = new Set([
      SUNDAY_MORNING_LOCAL.toISOString().slice(0, 10),
      SUNDAY_EVENING_LOCAL.toISOString().slice(0, 10),
    ]);

    expect(localKeys.size).toBe(1); // one Sunday, one key — correct
    expect(utcKeys.size).toBe(2); // one Sunday, two keys — the bug
  });
});

describe('no UTC date derivation survives in src/', () => {
  // Only place a UTC date string is acceptable: the data-export FILENAME, where
  // the value is never compared against anything and a UTC stamp is arguably
  // preferable for a downloaded artefact.
  const ALLOWED = new Set(['src/components/profile/sections/DataAccountSection.tsx']);

  const PATTERN =
    /toISOString\(\)\s*\.\s*(?:slice\(0,\s*10\)|substring\(0,\s*10\)|split\('T'\)\[0\])/g;

  function walk(dir: string, out: string[] = []): string[] {
    for (const e of readdirSync(dir)) {
      const full = join(dir, e);
      if (statSync(full).isDirectory()) {
        if (e === 'tests' || e === '__tests__') continue;
        walk(full, out);
      } else if (/\.(tsx|jsx|ts|js)$/.test(e)) out.push(full);
    }
    return out;
  }

  it('derives every calendar day from localDateStr, not toISOString', () => {
    const files = walk('src');
    expect(files.length, 'walker returned nothing — a vacuous pass').toBeGreaterThan(200);
    const offenders: string[] = [];
    for (const f of files) {
      if (ALLOWED.has(f)) continue;
      const code = readFileSync(f, 'utf8');
      for (const m of code.matchAll(PATTERN)) {
        const line = code.slice(0, m.index).split('\n').length;
        offenders.push(`${f}:${line}`);
      }
    }
    expect(offenders).toEqual([]);
  });
});
