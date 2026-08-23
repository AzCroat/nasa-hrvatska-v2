/**
 * promptCache.test.js — prompt versions for cache-served content (2026-08-23).
 *
 * /api/daily-culture and /api/news serve nearly every request from KV, replaying
 * text generated hours earlier. They were the last entries on the prompt-
 * instrumentation debt list for a specific reason: tagging a replay with the
 * CURRENT version would assert, in a header the middleware records, that a body
 * came from a prompt that never produced it. Editing a template would then look
 * like it changed output written before the edit.
 *
 * These run the REAL endpoint handlers against stub KV. The contract:
 *   - a generated 200 carries the tag of the prompt that just ran;
 *   - the cache write stores that tag beside the body, leaving the stored VALUE
 *     byte-identical to what shipped before;
 *   - a cache hit replays the STORED tag, even when the live prompt has moved;
 *   - an entry written before tagging existed is served untagged, never guessed.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { PROMPT_HEADER, getPrompt, promptTagHeaders } from '../../functions/api/_promptRegistry.js';
import { promptCacheMetadata, readCachedWithPromptTag } from '../../functions/api/_promptCache.js';

vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: async () => ({ ok: true, origin: 'https://nasahrvatska.com' }),
}));
vi.mock('../../functions/api/_aiBudget.js', () => ({
  checkAndChargeBudget: async () => ({ allowed: true }),
  ENDPOINT_CEILING_MICROUSD: {},
}));

const { onRequestGet: dailyCulture } = await import('../../functions/api/daily-culture.js');
const { onRequestGet: news } = await import('../../functions/api/news.js');

/** KV double WITH metadata support, recording what each put was given. */
function kvWithMetadata(seed = {}) {
  const store = new Map(Object.entries(seed));
  const puts = [];
  return {
    store,
    puts,
    async get(key) {
      return store.get(key)?.value ?? null;
    },
    async getWithMetadata(key) {
      const hit = store.get(key);
      return { value: hit?.value ?? null, metadata: hit?.metadata ?? null };
    },
    async put(key, value, options) {
      store.set(key, { value, metadata: options?.metadata ?? null });
      puts.push({ key, value, options });
    },
  };
}

/** KV double WITHOUT getWithMetadata — an older/simpler binding. */
function kvPlain(seed = {}) {
  const store = new Map(Object.entries(seed));
  return {
    store,
    async get(key) {
      return store.get(key) ?? null;
    },
    async put(key, value) {
      store.set(key, value);
    },
  };
}

const ANTHROPIC_CARD = JSON.stringify({
  content: [
    {
      text: JSON.stringify({
        phrase: 'Dobar dan',
        translation: 'Good day',
        pronunciation: 'DOH-bar dahn',
        culturalFact: 'Fact.',
        tip: 'Tip.',
        category: 'Greetings',
      }),
    },
  ],
});

function req(url = 'https://nasahrvatska.com/api/daily-culture') {
  return new Request(url, { headers: { origin: 'https://nasahrvatska.com' } });
}

let realFetch;
beforeEach(() => {
  realFetch = globalThis.fetch;
  vi.spyOn(console, 'error').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(() => {
  globalThis.fetch = realFetch;
  vi.restoreAllMocks();
});

describe('promptCacheMetadata', () => {
  it('names the prompt that produced the body', () => {
    const p = getPrompt('daily-culture-card');
    expect(promptCacheMetadata(p)).toEqual({ metadata: { promptTag: p.tag } });
  });

  it('writes nothing for content no prompt produced', () => {
    // The curated fallbacks in news.js take this path. Untagged is correct:
    // no prompt made them.
    expect(promptCacheMetadata(undefined)).toEqual({});
    expect(promptCacheMetadata(null)).toEqual({});
  });
});

describe('readCachedWithPromptTag', () => {
  it('returns the body and the tag stored with it', async () => {
    const kv = kvWithMetadata({ k: { value: 'body', metadata: { promptTag: 'x@0011aabb' } } });
    expect(await readCachedWithPromptTag(kv, 'k')).toEqual({ value: 'body', tag: 'x@0011aabb' });
  });

  it('still returns the BODY when the binding has no metadata support', async () => {
    // Losing the tag costs an untagged response. Losing the body would cost a
    // Claude call on every single request — so the fallback is not optional.
    const kv = kvPlain({ k: 'body' });
    expect(await readCachedWithPromptTag(kv, 'k')).toEqual({ value: 'body', tag: null });
  });

  it('treats a KV throw as a miss rather than propagating it', async () => {
    const kv = {
      getWithMetadata: async () => {
        throw new Error('kv down');
      },
    };
    expect(await readCachedWithPromptTag(kv, 'k')).toEqual({ value: null, tag: null });
  });

  it('ignores a non-string tag', async () => {
    const kv = kvWithMetadata({ k: { value: 'body', metadata: { promptTag: { evil: true } } } });
    expect((await readCachedWithPromptTag(kv, 'k')).tag).toBe(null);
  });
});

describe('promptTagHeaders — a replayed tag is validated, not trusted', () => {
  it('emits a well-formed stored tag', () => {
    expect(promptTagHeaders('news-simplify@3543ee28')).toEqual({
      [PROMPT_HEADER]: 'news-simplify@3543ee28',
    });
  });

  it('emits nothing for a missing tag — the pre-tagging cache entry case', () => {
    expect(promptTagHeaders(null)).toEqual({});
    expect(promptTagHeaders(undefined)).toEqual({});
  });

  it('emits nothing for anything malformed', () => {
    for (const bad of ['', 'no-at-sign', '@abc12345', 'id@', 'id@xyz', 'id@ABC12345', 42, {}]) {
      expect(promptTagHeaders(bad), String(bad)).toEqual({});
    }
  });
});

describe('/api/daily-culture tags the body it actually served', () => {
  it('a generated 200 carries the current prompt tag and stores it beside the body', async () => {
    const kv = kvWithMetadata();
    globalThis.fetch = vi.fn(async () => new Response(ANTHROPIC_CARD, { status: 200 }));

    const res = await dailyCulture({
      request: req(),
      env: { ANTHROPIC_API_KEY: 'k', KV: kv },
      waitUntil: (p) => p,
    });

    const tag = getPrompt('daily-culture-card').tag;
    expect(res.status).toBe(200);
    expect(res.headers.get(PROMPT_HEADER)).toBe(tag);

    const put = kv.puts.at(-1);
    expect(put.options.metadata).toEqual({ promptTag: tag });
    // The stored VALUE is unchanged from what shipped before tagging — the tag
    // rides in metadata precisely so existing entries stay readable.
    expect(JSON.parse(put.value).phrase).toBe('Dobar dan');
    expect(put.value).not.toContain('promptTag');
  });

  it('a cache hit replays the STORED tag, not the current one', async () => {
    // The whole point. A body generated under an older template keeps naming
    // that template, so an edit today cannot claim credit for yesterday's text.
    const stale = 'daily-culture-card@00000000';
    const date = new Date().toISOString().slice(0, 10);
    const kv = kvWithMetadata({
      [`daily:culture:${date}`]: {
        value: JSON.stringify({ phrase: 'cached' }),
        metadata: { promptTag: stale },
      },
    });
    globalThis.fetch = vi.fn(); // must not be called

    const res = await dailyCulture({ request: req(), env: { ANTHROPIC_API_KEY: 'k', KV: kv } });

    expect(globalThis.fetch).not.toHaveBeenCalled();
    expect(res.headers.get(PROMPT_HEADER)).toBe(stale);
    expect(res.headers.get(PROMPT_HEADER)).not.toBe(getPrompt('daily-culture-card').tag);
    expect((await res.json()).phrase).toBe('cached');
  });

  it('an entry written before tagging existed is served UNTAGGED', async () => {
    const date = new Date().toISOString().slice(0, 10);
    const kv = kvWithMetadata({
      [`daily:culture:${date}`]: { value: JSON.stringify({ phrase: 'old' }), metadata: null },
    });
    globalThis.fetch = vi.fn();

    const res = await dailyCulture({ request: req(), env: { ANTHROPIC_API_KEY: 'k', KV: kv } });

    expect(res.status).toBe(200);
    expect(res.headers.has(PROMPT_HEADER)).toBe(false);
    expect((await res.json()).phrase).toBe('old');
  });
});

describe('/api/news tags per level', () => {
  const newsUrl = (level) => `https://nasahrvatska.com/api/news?level=${level}`;

  function cachedNewsKv(level, tag) {
    const now = Date.now();
    const bucket = `${new Date(now).toISOString().slice(0, 10)}:h${Math.floor(new Date(now).getUTCHours() / 6)}`;
    return kvWithMetadata({
      [`news:v1:${level}:${bucket}`]: {
        value: JSON.stringify({ articles: [{ title: 'cached' }], source: 'live' }),
        metadata: tag ? { promptTag: tag } : null,
      },
    });
  }

  it('replays a C2 entry with the C2 prompt tag', async () => {
    const tag = getPrompt('news-simplify-c2').tag;
    const kv = cachedNewsKv('C2', tag);
    globalThis.fetch = vi.fn();

    const res = await news({
      request: new Request(newsUrl('C2'), { headers: { origin: 'https://nasahrvatska.com' } }),
      env: { ANTHROPIC_API_KEY: 'k', KV: kv },
    });

    expect(globalThis.fetch).not.toHaveBeenCalled();
    expect(res.headers.get(PROMPT_HEADER)).toBe(tag);
  });

  it('replays a B1 entry with the simplify prompt tag — a different prompt', async () => {
    const tag = getPrompt('news-simplify').tag;
    const kv = cachedNewsKv('B1', tag);
    globalThis.fetch = vi.fn();

    const res = await news({
      request: new Request(newsUrl('B1'), { headers: { origin: 'https://nasahrvatska.com' } }),
      env: { ANTHROPIC_API_KEY: 'k', KV: kv },
    });

    expect(res.headers.get(PROMPT_HEADER)).toBe(tag);
    expect(tag).not.toBe(getPrompt('news-simplify-c2').tag);
  });

  it('serves an untagged pre-existing entry without a header', async () => {
    const kv = cachedNewsKv('B1', null);
    globalThis.fetch = vi.fn();

    const res = await news({
      request: new Request(newsUrl('B1'), { headers: { origin: 'https://nasahrvatska.com' } }),
      env: { ANTHROPIC_API_KEY: 'k', KV: kv },
    });

    expect(res.status).toBe(200);
    expect(res.headers.has(PROMPT_HEADER)).toBe(false);
  });
});

describe('the two news prompts version independently', () => {
  it('are distinct registered prompts, not one template with a branch', () => {
    // C2 inverts the instruction — write authentic press Croatian rather than
    // simplify — so tightening an A1 word cap must not move the C2 version.
    const c2 = getPrompt('news-simplify-c2');
    const simplify = getPrompt('news-simplify');
    expect(c2).toBeTruthy();
    expect(simplify).toBeTruthy();
    expect(c2.version).not.toBe(simplify.version);
    expect(c2.text).not.toContain('{{level}}');
    expect(simplify.text).toContain('{{level}}');
  });
});
