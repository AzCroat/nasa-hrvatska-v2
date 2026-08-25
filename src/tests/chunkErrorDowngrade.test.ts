/**
 * chunkErrorDowngrade.test.ts — a self-healed stale chunk is not an incident
 * (Sentry triage, 2026-08-25).
 *
 * "Importing a module script failed" showed as an ONGOING error cluster on an
 * app whose healer works: isChunkLoadError already matches that exact Safari
 * string, purges caches and reloads within a bounded attempt window. What was
 * missing is that these still reported at full error priority, so an
 * environmental event the user recovers from automatically read like a live
 * defect.
 *
 * Downgraded rather than dropped, because FREQUENCY is the signal: a steady
 * trickle is ordinary deploy churn, a spike means the healer broke or the CDN
 * is serving HTML for asset URLs again (the 2026-08-04 incident behind the
 * middleware's missing-asset guard).
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { downgradeChunkLoadEvent, chunkEventMessage, isChunkLoadError } from '../lib/chunkErrors';

/** The real browser strings, per the table in chunkErrors.ts. */
const REAL_MESSAGES = [
  'Importing a module script failed.', // Safari/WebKit — the reported one
  'Failed to fetch dynamically imported module: https://x/assets/a.js',
  'error loading dynamically imported module', // Firefox
  'Loading chunk 42 failed',
  "Importing binding name 'x' is not found",
];

describe('chunkEventMessage', () => {
  it('reads the exception value, lowercased', () => {
    expect(chunkEventMessage({ exception: { values: [{ value: 'ABC' }] } })).toBe('abc');
  });

  it('falls back to a string message, then to empty', () => {
    expect(chunkEventMessage({ message: 'Xyz' })).toBe('xyz');
    expect(chunkEventMessage({})).toBe('');
    expect(chunkEventMessage({ message: { not: 'a string' } })).toBe('');
  });
});

describe('downgradeChunkLoadEvent', () => {
  it('downgrades every real stale-chunk message to warning, one fingerprint', () => {
    for (const value of REAL_MESSAGES) {
      const event = downgradeChunkLoadEvent({
        exception: { values: [{ value }] },
        level: 'error',
      });
      expect(event.level, value).toBe('warning');
      expect(event.fingerprint, value).toEqual(['stale-chunk-load-selfhealed']);
    }
  });

  it('groups them all under ONE fingerprint, so a spike is legible', () => {
    const fps = REAL_MESSAGES.map(
      (value) => downgradeChunkLoadEvent({ exception: { values: [{ value }] } }).fingerprint?.[0],
    );
    expect(new Set(fps).size).toBe(1);
  });

  it('is warning, NOT info — the user lost their screen and got a reload', () => {
    // The IndexedDB family is downgraded to 'info' because it is invisible to
    // the user. This one is disruptive but recovers; it should not page, and it
    // should not be filed with the inconsequential either.
    const event = downgradeChunkLoadEvent({
      exception: { values: [{ value: 'Importing a module script failed.' }] },
    });
    expect(event.level).toBe('warning');
    expect(event.level).not.toBe('info');
  });

  it('leaves an unrelated error completely alone', () => {
    // The predicate is module-specific by design — a bare "failed to fetch"
    // once matched here and force-reloaded the app mid-session on a flaky API
    // call. Nothing about that class may be touched.
    for (const value of [
      'Failed to fetch',
      'NetworkError when attempting to fetch resource',
      'Objects are not valid as a React child',
      'Cannot read properties of undefined',
    ]) {
      const event = downgradeChunkLoadEvent({
        exception: { values: [{ value }] },
        level: 'error',
      });
      expect(event.level, value).toBe('error');
      expect(event.fingerprint, value).toBeUndefined();
    }
  });

  it('agrees with the predicate that drives the actual self-heal', () => {
    // If these ever disagree, we would downgrade something we do not heal (or
    // page for something we silently fixed).
    for (const value of REAL_MESSAGES) {
      expect(isChunkLoadError(value.toLowerCase())).toBe(true);
    }
  });
});

describe('the Sentry hook actually calls it', () => {
  it('beforeSend downgrades chunk events alongside the IndexedDB family', () => {
    // A helper nothing calls protects nothing.
    const main = readFileSync('src/main.tsx', 'utf8');
    expect(main).toContain('downgradeChunkLoadEvent(event)');
    expect(main).toContain('downgradeEnvironmentalIdbEvent(event)');
  });
});
