import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import 'fake-indexeddb/auto';
import { openDB } from 'idb';

// ── Why this file is separate from contentClient.test.ts ─────────────────────
// API_BASE is a module-load-time constant in src/lib/platform.ts. Pinning it to
// the live origin for a whole file is simpler than resetting the module registry
// per case, and states the intent plainly.
//
// What is under test: on Capacitor native the app is served from
// https://localhost, which has no Pages Functions. Capacitor's
// WebViewLocalServer routes any path whose last segment contains no dot back to
// the bundled index.html as text/html with status 200 — html5mode, which
// defaults to true and is not overridden in capacitor.config.ts. So a relative
// '/api/content/...' did NOT 404: it returned a web page that looked like a
// success, and res.json() threw a raw SyntaxError past every typed
// ContentError branch.
//
// That took out the entire content layer in the native build — core (the
// vocabulary map V behind every vocab launch), lessons, grammar, both
// catalogues, and each individual story and grammar unit.
vi.mock('../platform', async (importOriginal) => ({
  ...(await importOriginal()),
  API_BASE: 'https://nasahrvatska.com',
}));

vi.mock('../audio', () => ({
  getFirebaseBearer: vi.fn(async () => 'fake-bearer'),
}));

vi.mock('../firebaseUid', () => ({
  getCurrentUid: vi.fn(async () => 'uid_native'),
}));

import {
  getStory,
  getStoryCatalog,
  getGrammarUnit,
  getGrammar,
  getLessons,
  getContent,
} from '../contentClient';

const LIVE = 'https://nasahrvatska.com';

function okJson(data: unknown): Response {
  return new Response(JSON.stringify({ data, etag: 'e1' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function clearCache(): Promise<void> {
  const db = await openDB('nh-content-cache', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('resources')) {
        db.createObjectStore('resources');
      }
    },
  });
  await db.clear('resources');
  db.close();
}

describe('contentClient on Capacitor native — absolute content base', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(async () => {
    await clearCache();
    globalThis.fetch = vi.fn(async () => okJson({ ok: true })) as unknown as typeof fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.clearAllMocks();
  });

  const requestedUrl = () =>
    (globalThis.fetch as unknown as { mock: { calls: unknown[][] } }).mock.calls[0]![0];

  it('resolves /api/content/core against the live origin', async () => {
    await getContent();
    expect(requestedUrl()).toBe(`${LIVE}/api/content/core`);
  });

  it('resolves /api/content/lessons', async () => {
    globalThis.fetch = vi.fn(async () => okJson([])) as unknown as typeof fetch;
    await getLessons();
    expect(requestedUrl()).toBe(`${LIVE}/api/content/lessons`);
  });

  it('resolves /api/content/grammar', async () => {
    await getGrammar();
    expect(requestedUrl()).toBe(`${LIVE}/api/content/grammar`);
  });

  it('resolves /api/content/catalog', async () => {
    globalThis.fetch = vi.fn(async () =>
      okJson({ stories: [], grammarUnits: [] }),
    ) as unknown as typeof fetch;
    await getStoryCatalog();
    expect(requestedUrl()).toBe(`${LIVE}/api/content/catalog`);
  });

  it('resolves a per-story path, keeping the encoded id', async () => {
    await getStory('gs_a1_1');
    expect(requestedUrl()).toBe(`${LIVE}/api/content/stories/gs_a1_1`);
  });

  it('resolves a per-unit grammar path', async () => {
    await getGrammarUnit('gu_cases_1');
    expect(requestedUrl()).toBe(`${LIVE}/api/content/grammar-units/gu_cases_1`);
  });

  it('keeps the absolute URL on the 401 token-refresh retry', async () => {
    const audio = await import('../audio');
    const bearer = audio.getFirebaseBearer as unknown as ReturnType<typeof vi.fn>;
    bearer.mockReset();
    bearer.mockResolvedValueOnce('stale').mockResolvedValueOnce('fresh');
    const calls: unknown[] = [];
    let n = 0;
    globalThis.fetch = vi.fn(async (u: unknown) => {
      calls.push(u);
      return n++ === 0 ? new Response('', { status: 401 }) : okJson({ ok: true });
    }) as unknown as typeof fetch;

    await getContent();

    // Both attempts must hit the live origin — a retry that fell back to the
    // relative URL would come back as 200-with-HTML and look like a success.
    expect(calls).toEqual([`${LIVE}/api/content/core`, `${LIVE}/api/content/core`]);
  });
});
