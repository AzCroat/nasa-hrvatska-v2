/**
 * offlineResourceKey.test.ts — an `offline_no_cache` report must name WHICH
 * content could not be reached.
 *
 * Sentry event e9fe27bb (2026-09-08) carried `Error: offline_no_cache` and the
 * tag `context = session-launch`, and that was the whole event. It could not
 * distinguish a learner with no network — where every resource fails and the
 * app is behaving correctly — from ONE broken or missing resource, which is a
 * bug. The error is thrown inside `fetchAndCache(uid, resourceKey, path)`, so
 * the key was one argument away the entire time.
 *
 * The MESSAGE deliberately stays the bare code: it is the Sentry grouping key,
 * and a per-resource message would shatter one issue into hundreds. The key
 * travels as a tag instead.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ContentOfflineError, ContentNotFoundError } from '../types/content';
import { resourceOf } from '../lib/errorReporter';
import { notifyLaunchFailure } from '../lib/launchFailure';
import type * as ErrorReporter from '../lib/errorReporter';

vi.mock('../lib/errorReporter', async () => {
  const actual = await vi.importActual<typeof ErrorReporter>('../lib/errorReporter');
  return { ...actual, reportError: vi.fn() };
});
const { reportError } = await import('../lib/errorReporter');

beforeEach(() => vi.clearAllMocks());
afterEach(() => vi.restoreAllMocks());

describe('ContentOfflineError carries the resource key', () => {
  it('names the resource without putting it in the message', () => {
    const err = new ContentOfflineError('story:gs_a1_1');
    expect(err.resourceKey).toBe('story:gs_a1_1');
    // Grouping key stays stable — this is the half that is easy to get wrong.
    expect(err.message).toBe('offline_no_cache');
  });

  it('still constructs with no key (older call sites keep working)', () => {
    expect(new ContentOfflineError().resourceKey).toBe('');
  });
});

describe('resourceOf', () => {
  it('reads resourceKey, and falls back to id for the not-found error', () => {
    expect(resourceOf(new ContentOfflineError('lessons:all'))).toBe('lessons:all');
    expect(resourceOf(new ContentNotFoundError('story:gs_b2_long_3'))).toBe('story:gs_b2_long_3');
  });

  it('returns empty for errors that name nothing, and for non-errors', () => {
    expect(resourceOf(new Error('boom'))).toBe('');
    expect(resourceOf(null)).toBe('');
    expect(resourceOf('story:x')).toBe('');
  });

  it('strips anything that is not a content id — this value becomes a TAG', () => {
    expect(resourceOf(new ContentOfflineError('story:<script> a"b'))).toBe('story:scriptab');
    expect(resourceOf(new ContentOfflineError('x'.repeat(300))).length).toBe(100);
  });
});

describe('the launch failure report reaches Sentry with the key', () => {
  it('reports the error itself — reportError derives the resource from it', () => {
    notifyLaunchFailure('load-error', new ContentOfflineError('core:all'));
    const [err, ctx] = vi.mocked(reportError).mock.calls[0]!;
    expect(ctx).toBe('session-launch');
    expect(resourceOf(err)).toBe('core:all');
  });

  it('an error naming nothing still reports', () => {
    notifyLaunchFailure('load-error', new Error('chunk load failed'));
    expect(reportError).toHaveBeenCalledWith(expect.any(Error), 'session-launch');
  });

  it('empty-pool has no error to read a resource from and still reports', () => {
    notifyLaunchFailure('empty-pool');
    expect(reportError).toHaveBeenCalledWith(expect.any(Error), 'session-launch');
  });

  it('does NOT import resourceOf — ten suites mock this module by name', () => {
    // Importing a second symbol from errorReporter made it undefined under
    // every mock factory that lists only reportError, and the resulting throw
    // landed inside notifyLaunchFailure's own try — killing the report the try
    // exists to guarantee. Found by session-launch-failure.test.tsx.
    // Comments stripped first: this file EXPLAINS the trap in prose, and prose
    // naming the symbol would satisfy a raw text match either way round.
    const src = readFileSync('src/lib/launchFailure.ts', 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    expect(src).toMatch(/import \{ reportError \} from '\.\/errorReporter'/);
    expect(src).not.toMatch(/resourceOf/);
  });
});

describe('reportError puts the resource in the payload it sends', () => {
  it('derives it from the error and sends it to /api/report-error', () => {
    vi.stubEnv('DEV', false);
    const beacon = vi.fn(() => true);
    vi.stubGlobal('navigator', { sendBeacon: beacon });
    const actual = vi.importActual<typeof ErrorReporter>('../lib/errorReporter');
    return actual.then(async (mod) => {
      const blobs: string[] = [];
      beacon.mockImplementation(((_u: string, b: Blob) => {
        blobs.push((b as unknown as { _t?: string })._t ?? '');
        return true;
      }) as never);
      // Blob text() is async in jsdom; capture the JSON we passed instead.
      const OrigBlob = globalThis.Blob;
      vi.stubGlobal(
        'Blob',
        class extends OrigBlob {
          _t: string;
          constructor(parts: string[], opts?: BlobPropertyBag) {
            super(parts, opts);
            this._t = parts.join('');
          }
        },
      );
      mod.reportError(new ContentOfflineError('story:gs_a1_1'), 'session-launch');
      const sent = JSON.parse(blobs[0] || '{}');
      expect(sent.message).toBe('offline_no_cache');
      expect(sent.context).toBe('session-launch');
      expect(sent.resource).toBe('story:gs_a1_1');
      vi.unstubAllGlobals();
      vi.unstubAllEnvs();
    });
  });
});

describe('the throw site passes it — pinned by source', () => {
  it('fetchAndCache throws with its own resourceKey argument', () => {
    const src = readFileSync('src/lib/contentClient.ts', 'utf8');
    // A component/unit test cannot reach this line without a network stub per
    // resource; the pin is cheaper and catches the only way it regresses.
    expect(src).toMatch(/throw new ContentOfflineError\(resourceKey\)/);
    expect(src).not.toMatch(/throw new ContentOfflineError\(\)/);
  });
});

describe('the endpoint sanitizes and tags it — pinned by source', () => {
  const SRC = readFileSync('functions/api/report-error.js', 'utf8');

  it('re-sanitizes the client value rather than trusting it', () => {
    // Public, unauthenticated endpoint; the value becomes a Sentry tag.
    expect(SRC).toMatch(/body\.resource/);
    expect(SRC).toMatch(/replace\(\/\[\^A-Za-z0-9\\?\/_\.:@-\]\/g, ''\)/);
    expect(SRC).toMatch(/\.slice\(0, 100\)/);
  });

  it('sets the tag only when present — an empty tag is worse than none', () => {
    expect(SRC).toMatch(/payload\.resource \? \{ resource:/);
  });

  it('dedups on message AND resource, so two broken resources are two reports', () => {
    expect(SRC).toMatch(/function isDuplicate\(message, resource = ''\)/);
    expect(SRC).toMatch(/isDuplicate\(message, resource\)/);
  });
});
