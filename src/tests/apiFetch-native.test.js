import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// ── Why this file is separate from apiFetch.test.js ──────────────────────────
// API_BASE is a module-load-time constant in src/lib/platform.ts (it reads
// window.location once). Mocking it per-test inside the existing suite would
// need module-registry resets between cases; a dedicated file with the native
// value pinned for the whole run is simpler and states the intent plainly.
//
// What is under test: on Capacitor native the app is served from
// https://localhost, which has no Pages Functions. A relative '/api/...' resolved
// there and the Capacitor local server answered with the SPA's index.html — so
// callers got HTTP 200 with an HTML body and died at res.json(). apiFetch is the
// transport behind 27 endpoints / 42 call sites (Razgovor's /api/maja,
// /api/translate, /api/tts, /api/srs-sync, /api/push-subscribe …), so ALL of them
// were dead in the native build. _aiPost already had API_BASE for this exact
// reason; apiFetch was left behind.
vi.mock('../lib/platform', async (importOriginal) => ({
  ...(await importOriginal()),
  API_BASE: 'https://nasahrvatska.com',
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({ currentUser: null })),
  setPersistence: vi.fn(() => Promise.resolve()),
  browserLocalPersistence: {},
  onAuthStateChanged: vi.fn(() => () => {}),
  initializeAuth: vi.fn(() => ({})),
  indexedDBLocalPersistence: {},
  browserSessionPersistence: {},
  inMemoryPersistence: {},
}));

import { apiFetch } from '../lib/apiFetch.js';
import { getAuth } from 'firebase/auth';

const LIVE = 'https://nasahrvatska.com';

describe('apiFetch on Capacitor native — absolute API base', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    globalThis.fetch = vi.fn(() => Promise.resolve(new Response('{}', { status: 200 })));
    getAuth.mockReturnValue({ currentUser: null });
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.clearAllMocks();
  });

  it('resolves a relative /api path against the live origin (managed path)', async () => {
    await apiFetch('/api/maja', { method: 'POST', body: '{}' });
    expect(globalThis.fetch).toHaveBeenCalledWith(`${LIVE}/api/maja`, expect.any(Object));
  });

  it('resolves query-string paths too (/api/news?level=)', async () => {
    await apiFetch('/api/news?level=B1');
    expect(globalThis.fetch).toHaveBeenCalledWith(`${LIVE}/api/news?level=B1`, expect.any(Object));
  });

  it('resolves on the caller-signalled path (Razgovor passes its own signal)', async () => {
    const ctrl = new AbortController();
    await apiFetch('/api/maja', { method: 'POST', body: '{}', signal: ctrl.signal });
    expect(globalThis.fetch).toHaveBeenCalledWith(`${LIVE}/api/maja`, expect.any(Object));
  });

  it('keeps the absolute URL on the signalled 401 token-refresh retry', async () => {
    getAuth.mockReturnValue({
      currentUser: {
        getIdToken: vi.fn().mockResolvedValueOnce('stale').mockResolvedValueOnce('fresh'),
      },
    });
    globalThis.fetch = vi
      .fn()
      .mockResolvedValueOnce(new Response('', { status: 401 }))
      .mockResolvedValueOnce(new Response('{}', { status: 200 }));
    const ctrl = new AbortController();
    const res = await apiFetch('/api/maja', { method: 'POST', body: '{}', signal: ctrl.signal });
    expect(res.status).toBe(200);
    expect(globalThis.fetch).toHaveBeenCalledTimes(2);
    // Both attempts must hit the live origin — a retry that fell back to the
    // relative URL would 200-with-HTML and look like a successful reply.
    expect(globalThis.fetch.mock.calls[0][0]).toBe(`${LIVE}/api/maja`);
    expect(globalThis.fetch.mock.calls[1][0]).toBe(`${LIVE}/api/maja`);
  });

  it('keeps the absolute URL across the managed-path 401 retry', async () => {
    getAuth.mockReturnValue({
      currentUser: {
        getIdToken: vi.fn().mockResolvedValueOnce('stale').mockResolvedValueOnce('fresh'),
      },
    });
    globalThis.fetch = vi
      .fn()
      .mockResolvedValueOnce(new Response('', { status: 401 }))
      .mockResolvedValueOnce(new Response('{}', { status: 200 }));
    const res = await apiFetch('/api/translate', { method: 'POST', body: '{}' });
    expect(res.status).toBe(200);
    expect(globalThis.fetch).toHaveBeenCalledTimes(2);
    expect(globalThis.fetch.mock.calls[0][0]).toBe(`${LIVE}/api/translate`);
    expect(globalThis.fetch.mock.calls[1][0]).toBe(`${LIVE}/api/translate`);
  });

  it('passes an already-absolute URL through without double-prefixing', async () => {
    await apiFetch('https://example.com/api/thing');
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://example.com/api/thing',
      expect.any(Object),
    );
  });
});
