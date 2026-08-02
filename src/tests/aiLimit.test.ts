// src/tests/aiLimit.test.ts
//
// The AI endpoints answer with 429 for two unrelated reasons, and the
// difference is what the user is told to do about it:
//   rate_limited         → wait a minute
//   daily_quota_exceeded → come back tomorrow
//
// Four call sites had drifted from that contract (three matched a code the
// server never emits, `rate_limit`, and then fell back to `status === 429`
// meaning "daily"). These tests pin the classification down.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { classifyAiLimit, formatAiResetTime } from '../lib/aiLimit';

describe('classifyAiLimit', () => {
  it('reads daily_quota_exceeded as the daily ceiling', () => {
    expect(classifyAiLimit({ status: 429, code: 'daily_quota_exceeded' })).toBe('daily');
  });

  it('reads rate_limited as the per-minute burst limiter', () => {
    expect(classifyAiLimit({ status: 429, code: 'rate_limited' })).toBe('burst');
  });

  it('defaults an uncoded 429 to burst, never to daily', () => {
    // Guessing "daily" is the worse error: it sends the user away for the rest
    // of the day when they only needed to wait a minute.
    expect(classifyAiLimit({ status: 429 })).toBe('burst');
    expect(classifyAiLimit({ status: 429, code: '' })).toBe('burst');
    expect(classifyAiLimit({ status: 429, code: 'Server error 429' })).toBe('burst');
  });

  it('classifies from the code alone when no status is available', () => {
    // LiveTutorScreen only has the thrown Error message to work from.
    expect(classifyAiLimit({ code: 'rate_limited' })).toBe('burst');
    expect(classifyAiLimit({ code: 'daily_quota_exceeded' })).toBe('daily');
    expect(classifyAiLimit({ code: 'HTTP 429' })).toBe('burst');
  });

  it('does not claim a limit for unrelated failures', () => {
    expect(classifyAiLimit({ status: 500, code: 'server_error' })).toBeNull();
    expect(classifyAiLimit({ status: 401, code: 'unauthenticated' })).toBeNull();
    expect(classifyAiLimit({ status: 400, code: 'invalid_json' })).toBeNull();
    expect(classifyAiLimit({})).toBeNull();
    // `rate_limit` is the code that was matched by mistake — it is not a real
    // server code, so on its own it must not be read as a limit.
    expect(classifyAiLimit({ code: 'rate_limit' })).toBeNull();
  });
});

describe('formatAiResetTime', () => {
  it('formats a valid ISO timestamp as local wall-clock time', () => {
    const out = formatAiResetTime('2026-07-26T00:00:00.000Z');
    expect(out).toBeTruthy();
    expect(out).toMatch(/\d/);
    expect(out).not.toMatch(/Invalid/i);
  });

  it('accepts an epoch-millisecond number', () => {
    expect(formatAiResetTime(Date.parse('2026-07-26T00:00:00.000Z'))).toMatch(/\d/);
  });

  it('returns null rather than "Invalid Date" for junk or absent values', () => {
    expect(formatAiResetTime(undefined)).toBeNull();
    expect(formatAiResetTime(null)).toBeNull();
    expect(formatAiResetTime('')).toBeNull();
    expect(formatAiResetTime('not a date')).toBeNull();
  });
});

/**
 * Call-site guard.
 *
 * The classification above is only worth having if the clients actually route
 * through it. AIConversation was a fifth drifted site, missed by the earlier
 * sweep because it matched a different phantom code: `rate_limit_exceeded`.
 * requireAuthedAI never emits that — it sends `rate_limited` — so the burst
 * branch was dead and every burst-limited learner fell through to "You've
 * reached today's AI conversation limit... resets at midnight", when they only
 * had to wait a few seconds. `rate_limit_exceeded` IS a real code, but it
 * belongs to save-progress.js, which is a different endpoint with its own
 * limiter; no client of a requireAuthedAI endpoint should be matching it.
 */
describe('AI clients classify 429s through the helper, not by hand', () => {
  const SRC = resolve(process.cwd(), 'src');

  function walk(dir: string, out: string[] = []): string[] {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full, out);
      else if (/\.(ts|tsx)$/.test(entry.name) && !/\.test\.(ts|tsx)$/.test(entry.name)) {
        out.push(full);
      }
    }
    return out;
  }

  it('no client compares against the phantom `rate_limit_exceeded` code', () => {
    const offenders = walk(SRC)
      .map((f) => [f, readFileSync(f, 'utf8')] as const)
      // Only flag real comparisons — the explanatory comment left at the fix
      // site names the code deliberately.
      .filter(([, src]) =>
        /===\s*['"]rate_limit_exceeded['"]|['"]rate_limit_exceeded['"]\s*===/.test(src),
      )
      .map(([f]) => f.replace(SRC, 'src'));
    expect(offenders).toEqual([]);
  });

  it('AIConversation routes its 429 through classifyAiLimit', () => {
    const src = readFileSync(
      resolve(process.cwd(), 'src/components/croatia/AIConversation.tsx'),
      'utf8',
    );
    expect(src).toContain('classifyAiLimit');
  });
});
