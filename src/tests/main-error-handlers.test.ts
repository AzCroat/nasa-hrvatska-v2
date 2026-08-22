import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { isChunkLoadError, reloadWithCachePurge } from '../lib/chunkErrors';
import {
  isEnvironmentalIdbError,
  sentryEventMessage,
  downgradeEnvironmentalIdbEvent,
} from '../lib/idbTelemetry';

// _isStaleBindingError and _reloadWithCachePurge remain inlined —
// they are private to main.tsx and _reloadWithCachePurge uses an
// injected storage map for testability.
function _isStaleBindingError(msg: unknown) {
  return typeof msg === 'string' && msg.includes('Importing binding name');
}
function _reloadWithCachePurge(storageKey: string, storage: Record<string, string>): boolean {
  const n = parseInt(storage[storageKey] ?? '0', 10);
  if (n >= 2) return false;
  storage[storageKey] = String(n + 1);
  return true;
}

describe('isChunkLoadError', () => {
  it('detects Chrome "failed to fetch" pattern', () => {
    expect(isChunkLoadError('failed to fetch dynamically imported module')).toBe(true);
  });
  it('detects Safari "importing a module script failed" pattern', () => {
    expect(isChunkLoadError('importing a module script failed')).toBe(true);
  });
  it('detects Firefox "dynamically imported module" pattern', () => {
    expect(isChunkLoadError('error loading dynamically imported module')).toBe(true);
  });
  it('detects MIME type mismatch pattern', () => {
    expect(
      isChunkLoadError(
        'expected a javascript module script but server responded with mime type text/html',
      ),
    ).toBe(true);
  });
  it('detects Webpack/Vite "loading chunk" pattern', () => {
    expect(isChunkLoadError('loading chunk 42 failed')).toBe(true);
  });
  it('detects WebKit stale binding in lowercase msg', () => {
    expect(isChunkLoadError("importing binding name 'g' is not found")).toBe(true);
  });
  it('does not match unrelated runtime errors', () => {
    expect(isChunkLoadError('cannot read properties of undefined')).toBe(false);
    expect(isChunkLoadError('network error')).toBe(false);
    expect(isChunkLoadError('')).toBe(false);
    expect(isChunkLoadError('TypeError: null is not an object')).toBe(false);
  });
});

describe('isEnvironmentalIdbError', () => {
  it('detects the Chromium IndexedDB internal-server error (message only)', () => {
    expect(
      isEnvironmentalIdbError('an internal error was encountered in the indexed database server'),
    ).toBe(true);
  });
  it('detects it with the UnknownError DOMException name prefix', () => {
    expect(
      isEnvironmentalIdbError(
        'unknownerror: an internal error was encountered in the indexed database server',
      ),
    ).toBe(true);
  });
  it('does NOT match actionable IndexedDB errors (quota, version, constraint)', () => {
    // These are real, fixable problems and must keep reporting at full priority.
    expect(isEnvironmentalIdbError('quotaexceedederror: the quota has been exceeded')).toBe(false);
    expect(isEnvironmentalIdbError('versionerror: the requested version is less than')).toBe(false);
    expect(isEnvironmentalIdbError('constrainterror: key already exists')).toBe(false);
  });
  it('does not match unrelated errors or empty input', () => {
    expect(isEnvironmentalIdbError('cannot read properties of undefined')).toBe(false);
    expect(isEnvironmentalIdbError('failed to fetch')).toBe(false);
    expect(isEnvironmentalIdbError('')).toBe(false);
  });
  it('expects lowercased input — caller must lowercase before calling', () => {
    // Mirrors the isChunkLoadError contract: callers pass an already-lowercased msg.
    expect(
      isEnvironmentalIdbError('An internal error was encountered in the Indexed Database server'),
    ).toBe(false);
  });
});

describe('sentryEventMessage', () => {
  it('prefers the first exception value, lowercased', () => {
    expect(
      sentryEventMessage({
        exception: { values: [{ value: 'UnknownError: Indexed Database SERVER' }] },
        message: 'ignored',
      }),
    ).toBe('unknownerror: indexed database server');
  });
  it('falls back to a string message when there is no exception value', () => {
    expect(sentryEventMessage({ message: 'Boom Happened' })).toBe('boom happened');
  });
  it('returns empty string when neither is present or message is not a string', () => {
    expect(sentryEventMessage({})).toBe('');
    expect(sentryEventMessage({ exception: { values: [] } })).toBe('');
    expect(sentryEventMessage({ message: 42 })).toBe('');
  });
});

describe('downgradeEnvironmentalIdbEvent', () => {
  it('downgrades an environmental IndexedDB event to info + stable fingerprint', () => {
    const event = {
      level: 'error',
      exception: {
        values: [{ value: 'An internal error was encountered in the Indexed Database server' }],
      },
    };
    const out = downgradeEnvironmentalIdbEvent(event);
    expect(out.level).toBe('info');
    expect(out.fingerprint).toEqual(['environmental-indexeddb-server-error']);
  });
  it('leaves unrelated events untouched (still high severity, no fingerprint)', () => {
    const event = {
      level: 'error',
      exception: { values: [{ value: 'TypeError: cannot read properties of undefined' }] },
    };
    const out = downgradeEnvironmentalIdbEvent(event);
    expect(out.level).toBe('error');
    expect(out.fingerprint).toBeUndefined();
  });
  it('also matches via the message field', () => {
    const event = { level: 'error' as string, message: 'Indexed Database server failure' };
    downgradeEnvironmentalIdbEvent(event);
    expect(event.level).toBe('info');
  });

  // ── "Database is closing" family (production alert, 2026-08-22) ────────────
  // Two high-priority events landed in the same second — one user, one
  // page-hide. The IDB connection is torn down while a Firebase write is still
  // in flight, which is what backgrounding the app looks like from inside
  // _openDb. Firebase falls back to network/localStorage and localStorage is
  // authoritative for progress here, so the user loses nothing and sees
  // nothing. Non-actionable, but it was paging at full severity.
  it('downgrades the page-hide "Database is closing" error', () => {
    const event = {
      level: 'error',
      exception: { values: [{ value: 'InvalidStateError: Database is closing' }] },
    };
    const out = downgradeEnvironmentalIdbEvent(event);
    expect(out.level).toBe('info');
    expect(out.fingerprint).toEqual(['environmental-indexeddb-closing']);
  });

  it('downgrades the "connection is closing" wording too', () => {
    const event = {
      level: 'error',
      exception: { values: [{ value: 'The connection is closing.' }] },
    };
    expect(downgradeEnvironmentalIdbEvent(event).level).toBe('info');
  });

  it('fingerprints the two families SEPARATELY', () => {
    // One shared group would hide a spike in either. A jump in 'closing' means
    // our unload/flush timing changed; a jump in 'server' means devices are
    // failing. Different causes, different responses.
    const server = {
      level: 'error',
      exception: { values: [{ value: 'Indexed Database server' }] },
    };
    const closing = { level: 'error', exception: { values: [{ value: 'Database is closing' }] } };
    const a = downgradeEnvironmentalIdbEvent(server).fingerprint;
    const b = downgradeEnvironmentalIdbEvent(closing).fingerprint;
    expect(a).not.toEqual(b);
    // The pre-existing group keeps its name so its history/baseline survives.
    expect(a).toEqual(['environmental-indexeddb-server-error']);
  });

  it('still pages at full severity for ACTIONABLE IndexedDB errors', () => {
    // The whole value of a narrow match: these mean OUR code or quota is wrong,
    // and must never be swept into the environmental bucket.
    for (const value of [
      'QuotaExceededError: The quota has been exceeded.',
      'VersionError: The requested version is less than the existing version.',
      'ConstraintError: Key already exists in the object store.',
      'NotFoundError: object store not found',
    ]) {
      const event = { level: 'error', exception: { values: [{ value }] } };
      const out = downgradeEnvironmentalIdbEvent(event);
      expect(out.level, value).toBe('error');
      expect(out.fingerprint, value).toBeUndefined();
    }
  });

  it('does not match a mere mention of closing something unrelated', () => {
    const event = {
      level: 'error',
      exception: { values: [{ value: 'TypeError: closing tag expected' }] },
    };
    expect(downgradeEnvironmentalIdbEvent(event).level).toBe('error');
  });
});

// ── The client matcher and the server ignore-list must not drift ────────────
describe('report-error.js stays in sync with idbTelemetry', () => {
  it('the server ignore-list carries every client-side environmental pattern', async () => {
    const { readFileSync } = await import('node:fs');
    const src = readFileSync('functions/api/report-error.js', 'utf8');
    for (const pattern of [
      'indexed database server',
      'database is closing',
      'connection is closing',
    ]) {
      expect(src, `report-error.js must ignore "${pattern}"`).toContain(`'${pattern}'`);
    }
  });
});

describe('_isStaleBindingError', () => {
  it('detects WebKit stale binding error (case-sensitive original string)', () => {
    expect(_isStaleBindingError("Importing binding name 'g' is not found")).toBe(true);
  });
  it('returns false for non-string input', () => {
    expect(_isStaleBindingError(null)).toBe(false);
    expect(_isStaleBindingError(42)).toBe(false);
    expect(_isStaleBindingError(undefined)).toBe(false);
  });
  it('returns false for unrelated strings', () => {
    expect(_isStaleBindingError('Failed to fetch')).toBe(false);
  });
  it('returns false for lowercased input — caller must not lowercase before calling', () => {
    expect(_isStaleBindingError("importing binding name 'g' is not found")).toBe(false);
  });
});

describe('_reloadWithCachePurge', () => {
  it('increments counter and returns true on first call', () => {
    const store: Record<string, string> = {};
    expect(_reloadWithCachePurge('nh_key', store)).toBe(true);
    expect(store['nh_key']).toBe('1');
  });
  it('increments counter and returns true on second call', () => {
    const store: Record<string, string> = { nh_key: '1' };
    expect(_reloadWithCachePurge('nh_key', store)).toBe(true);
    expect(store['nh_key']).toBe('2');
  });
  it('returns false on third call without modifying counter (loop guard)', () => {
    const store: Record<string, string> = { nh_key: '2' };
    expect(_reloadWithCachePurge('nh_key', store)).toBe(false);
    expect(store['nh_key']).toBe('2');
  });
  it('treats separate keys independently', () => {
    const store: Record<string, string> = { nh_binding_reload: '2' };
    expect(_reloadWithCachePurge('nh_reload_attempt', store)).toBe(true);
    expect(store['nh_reload_attempt']).toBe('1');
  });
  it('handles missing key (defaults to 0)', () => {
    const store: Record<string, string> = {};
    _reloadWithCachePurge('fresh_key', store);
    expect(store['fresh_key']).toBe('1');
  });
});

// Tests for the real reloadWithCachePurge exported from chunkErrors.ts.
// The function uses sessionStorage + location.reload (browser APIs). We mock
// globalThis.caches so location.reload is deferred via .finally() (async),
// keeping the synchronous return value reachable without jsdom "not implemented" noise.
describe('reloadWithCachePurge (real export — branch coverage)', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  afterEach(() => {
    // Restore stubs BEFORE touching sessionStorage so proxy stubs don't throw on clear().
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    sessionStorage.clear();
  });

  // The budget record is {n, ts}, not a bare count — the timestamp is what stops
  // a spent budget locking a long-lived tab out of the heal forever. Full
  // coverage of the window lives in chunk-reload-budget.test.ts.
  it('returns false without calling reload when the budget is spent inside the window', () => {
    sessionStorage.setItem('nh_ck_test', JSON.stringify({ n: 2, ts: Date.now() }));
    expect(reloadWithCachePurge('nh_ck_test')).toBe(false);
  });

  it('does NOT honour a legacy bare-integer cap (those tabs were stuck at it)', () => {
    sessionStorage.setItem('nh_ck_test', '2');
    expect(reloadWithCachePurge('nh_ck_test')).toBe(true);
  });

  it('returns true and records the first attempt', () => {
    // Mock caches so location.reload fires async (via .finally), not synchronously —
    // this lets return true execute cleanly in the jsdom test environment.
    vi.stubGlobal('caches', {
      keys: vi.fn().mockResolvedValue([]),
      delete: vi.fn().mockResolvedValue(true),
    });
    expect(reloadWithCachePurge('nh_ck_test')).toBe(true);
    const rec = JSON.parse(sessionStorage.getItem('nh_ck_test')!) as { n: number; ts: number };
    expect(rec.n).toBe(1);
    expect(typeof rec.ts).toBe('number');
  });

  it('still heals once when sessionStorage is unavailable', () => {
    // This assertion used to require `false` — i.e. it pinned the behaviour where
    // a storage-blocked profile got NO heal at all. false is main.tsx's "heal did
    // not happen" signal, so the purge+reload was skipped and the user was left on
    // a stale bundle while Sentry collected the error. The test was describing the
    // bug, not guarding against it.
    //
    // Correct behaviour: heal once per window, bounded by a window.name marker
    // (window.name survives a same-tab reload and is not behind the storage
    // permission gate). Full coverage of the one-shot, the window expiry and the
    // read-only-storage case lives in chunk-heal-storage-blocked.test.ts.
    const origName = globalThis.name;
    globalThis.name = '';
    vi.stubGlobal(
      'sessionStorage',
      new Proxy(
        {},
        {
          get() {
            throw new Error('SecurityError: storage not available');
          },
        },
      ),
    );
    try {
      expect(reloadWithCachePurge('nh_ck_test')).toBe(true);
      // ...and exactly once, so a chunk that fails every time cannot loop.
      expect(reloadWithCachePurge('nh_ck_test')).toBe(false);
    } finally {
      globalThis.name = origName;
    }
  });
});
