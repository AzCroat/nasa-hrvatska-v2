/**
 * idbTelemetry.test.ts — the environmental-IndexedDB classifier, and the
 * browser-wording gap that made it half a classifier (2026-08-31).
 *
 * `environmentalIdbKind` sorts non-actionable IDB failures into two families so
 * they stop paging while a frequency spike still surfaces. Family 2 is "the
 * connection was torn down mid-operation" — a page-hide, a tab suspend, a
 * bfcache eviction, seen from inside Firebase's persistence layer.
 *
 * IT ONLY KNEW HOW CHROMIUM AND WEBKIT SAY THAT. Both name the database:
 * "Database is closing", "The connection is closing". Firefox raises a bare
 * InvalidStateError reading "An attempt was made to use an object that is not,
 * or is no longer, usable" — the identical condition, sharing not one word with
 * the matcher. So on Firefox a non-actionable teardown error paged at full
 * priority AND filed a duplicate homegrown report, for as long as the family
 * has existed.
 *
 * It surfaced from CI rather than from Sentry: the Firefox smoke lane went red
 * on three unrelated specs at once, every one of them reporting that string,
 * while all their behavioural assertions passed and Chrome's full suite was
 * green. That shape — one browser, many specs, no behavioural failure — is what
 * a browser-specific message in a browser-agnostic matcher looks like.
 *
 * The widening is the dangerous direction for this helper, because its whole
 * design note is that matches stay narrow so ACTIONABLE IDB errors keep paging.
 * That is asserted here rather than reasoned about.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  environmentalIdbKind,
  isEnvironmentalIdbError,
  downgradeEnvironmentalIdbEvent,
} from '../lib/idbTelemetry';

/** Callers lowercase before matching; mirror that here. */
const k = (msg: string) => environmentalIdbKind(msg.toLowerCase());

describe('the two non-actionable families are recognised', () => {
  it('family 1 — the Chromium internal-server error', () => {
    expect(k('An internal error was encountered in the Indexed Database server')).toBe('server');
  });

  it.each([
    ['Chromium', 'Database is closing'],
    ['WebKit', 'The connection is closing'],
    // The gap this suite was written for.
    ['Firefox', 'An attempt was made to use an object that is not, or is no longer, usable'],
    ['Firefox (name only)', 'InvalidStateError'],
  ])('family 2 — %s wording', (_browser, msg) => {
    expect(k(msg)).toBe('closing');
  });

  it('a DOMException-shaped haystack matches on either half', () => {
    // main.tsx builds the haystack as (message + name), so a Firefox rejection
    // arrives with both. Neither half alone may be required.
    const message = 'An attempt was made to use an object that is not, or is no longer, usable';
    const name = 'InvalidStateError';
    expect(k(message + name)).toBe('closing');
    expect(k(message)).toBe('closing');
    expect(k(name)).toBe('closing');
  });
});

describe('the widening does NOT swallow actionable IDB errors', () => {
  // The reason this helper documents its narrowness. Each of these means our
  // code or the user's device is genuinely wrong and must keep paging: we are
  // out of space, our migration is wrong, our schema is wrong.
  it.each([
    ['QuotaExceededError', 'QuotaExceededError: The quota has been exceeded.'],
    ['VersionError', 'VersionError: The requested version is less than the existing version.'],
    [
      'ConstraintError',
      'ConstraintError: A mutation operation failed because a constraint was violated.',
    ],
    ['DataError', 'DataError: Data provided to an operation does not meet requirements.'],
    ['NotFoundError', 'NotFoundError: The object store was not found.'],
    ['a plain app error', 'Cannot read properties of undefined (reading "xp")'],
    // Near-misses: these mention IDB or state but are not either family.
    ['a transaction abort', 'AbortError: The transaction was aborted.'],
    ['an unrelated invalid state', 'The object is in an invalid state.'],
  ])('%s is NOT environmental', (_label, msg) => {
    expect(k(msg)).toBeNull();
    expect(isEnvironmentalIdbError(msg.toLowerCase())).toBe(false);
  });
});

describe('the families keep separate fingerprints', () => {
  it('does not lump Firefox teardown in with the server family', () => {
    // A jump in 'closing' means our unload/flush timing changed; a jump in
    // 'server' means devices are failing. Merging them would hide either.
    const ff = downgradeEnvironmentalIdbEvent({
      exception: {
        values: [
          { value: 'An attempt was made to use an object that is not, or is no longer, usable' },
        ],
      },
    });
    expect(ff.level).toBe('info');
    expect(ff.fingerprint).toEqual(['environmental-indexeddb-closing']);

    const server = downgradeEnvironmentalIdbEvent({
      exception: { values: [{ value: 'internal error ... Indexed Database server' }] },
    });
    expect(server.fingerprint).toEqual(['environmental-indexeddb-server-error']);
  });

  it('leaves an actionable event untouched', () => {
    const quota = downgradeEnvironmentalIdbEvent({
      exception: { values: [{ value: 'QuotaExceededError: The quota has been exceeded.' }] },
      level: 'error',
    });
    expect(quota.level).toBe('error');
    expect(quota.fingerprint).toBeUndefined();
  });
});

describe('the wiring in main.tsx, not just the helper', () => {
  // A helper's unit tests prove it works WHEN CALLED. They say nothing about
  // whether anything calls it — the split that let `award` sit dead behind a
  // `typeof` check for the life of a screen. Walk the real init instead.
  const mainSrc = readFileSync('src/main.tsx', 'utf8');

  it('beforeSend downgrades the event', () => {
    expect(mainSrc).toMatch(/downgradeEnvironmentalIdbEvent\(event\)/);
  });

  it('both window handlers skip the duplicate homegrown report', () => {
    // The SDK already captures these; reporting again through /api/report-error
    // opens a second Sentry issue for one browser event.
    const calls = mainSrc.match(/isEnvironmentalIdbError\(/g) ?? [];
    expect(calls.length, 'expected window.onerror AND onunhandledrejection').toBe(2);
  });

  it('every call site passes a LOWERCASED haystack', () => {
    // environmentalIdbKind matches lowercase substrings and documents that
    // callers lowercase first. Firefox's contribution to the haystack is the
    // DOMException NAME — `InvalidStateError`, mixed case — so a call site that
    // forgot .toLowerCase() would silently fail on exactly the browser this
    // family was widened for, and on nothing else.
    for (const call of mainSrc.match(/isEnvironmentalIdbError\([^)]*\)/g) ?? []) {
      expect(call, `${call} is not lowercased`).toMatch(/toLowerCase\(\)|\bmsg\b/);
    }
    // ...and `msg` in the rejection handler must itself be the lowercased form.
    expect(mainSrc).toMatch(/const msg = rawMsg\.toLowerCase\(\)/);
  });

  it('does NOT drop these events via ignoreErrors', () => {
    // The whole design is downgrade-and-retain: dropping them would also drop
    // the frequency signal that surfaces a real regression. Adding the strings
    // to ignoreErrors would look like a tidy-up and would silently undo it.
    const ignoreBlock = mainSrc.match(/ignoreErrors:\s*\[([\s\S]*?)\]/)![1]!;
    for (const phrase of ['indexed database', 'is closing', 'no longer, usable', 'InvalidState']) {
      expect(ignoreBlock, `ignoreErrors must not suppress "${phrase}"`).not.toContain(phrase);
    }
  });

  it('points at the module the helper actually lives in', () => {
    // This pointer has gone stale TWICE — once in report-error.js (recorded
    // there) and once here, both because the helper moved out of sentryHelpers
    // and the comments did not follow. A comment cannot enforce itself.
    expect(
      mainSrc,
      'main.tsx still attributes an idbTelemetry helper to sentryHelpers',
    ).not.toMatch(/sentryHelpers\.(downgradeEnvironmentalIdbEvent|isEnvironmentalIdbError)/);
  });
});

describe('the server-side ignore list stays in sync', () => {
  // idbTelemetry.ts and report-error.js both carry a KEEP IN SYNC comment, and
  // the pointer between them has gone stale once already (recorded in
  // report-error.js). A comment cannot enforce that; this can.
  const serverSrc = readFileSync('functions/api/report-error.js', 'utf8');

  it.each([
    'indexed database server',
    'database is closing',
    'connection is closing',
    'object that is not, or is no longer, usable',
    'invalidstateerror',
  ])('report-error.js also ignores %s', (pattern) => {
    expect(
      serverSrc.includes(`'${pattern}'`),
      `IGNORED_SENTRY_PATTERNS in functions/api/report-error.js is missing "${pattern}". ` +
        `The client skips its homegrown report for this class; the server list is the ` +
        `belt-and-suspenders half and must match environmentalIdbKind().`,
    ).toBe(true);
  });
});
