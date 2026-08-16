// radioFailover.test.js — the /radio proxy must fail over across stream
// candidates instead of 302-ing listeners at a dead upstream (2026-08-15
// media audit: the old single-URL redirect sent users to retired HRT
// StreamTheWorld mounts and the player just showed "tap to retry" forever).
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { onRequest } from '../../functions/radio.js';

function fakeKV(initial = {}) {
  const store = new Map(Object.entries(initial));
  return {
    store,
    async get(k) {
      return store.get(k) ?? null;
    },
    async put(k, v) {
      store.set(k, v);
    },
  };
}

function ctx(query, env = {}) {
  return {
    request: new Request(`https://nasahrvatska.com/radio${query}`),
    env,
  };
}

const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
  vi.restoreAllMocks();
});
beforeEach(() => {
  globalThis.fetch = vi.fn();
});

/** Mock upstream health: urls in `alive` answer 200, everything else throws. */
function upstream(alive) {
  globalThis.fetch.mockImplementation(async (url) => {
    if (alive.includes(url)) {
      return { status: 200, body: { cancel: async () => {} } };
    }
    throw new Error('connect refused');
  });
}

describe('/radio failover proxy', () => {
  it('400 on unknown station', async () => {
    const res = await onRequest(ctx('?s=nope'));
    expect(res.status).toBe(400);
  });

  it('redirects to the first candidate when it is alive', async () => {
    upstream(['https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1.mp3']);
    const res = await onRequest(ctx('?s=hrt1', { KV: fakeKV() }));
    expect(res.status).toBe(302);
    expect(res.headers.get('location')).toContain('PROGRAM1.mp3');
  });

  it('falls over to the next candidate when the first is dead', async () => {
    upstream(['https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1AAC.aac']);
    const res = await onRequest(ctx('?s=hrt1', { KV: fakeKV() }));
    expect(res.status).toBe(302);
    expect(res.headers.get('location')).toContain('PROGRAM1AAC.aac');
  });

  it('502 stream_unavailable when every candidate is dead (client falls back to the website)', async () => {
    upstream([]);
    const res = await onRequest(ctx('?s=cmc', { KV: fakeKV() }));
    expect(res.status).toBe(502);
    const body = await res.json();
    expect(body.error).toBe('stream_unavailable');
  });

  it('caches the winner in KV and serves it without re-probing', async () => {
    upstream(['https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM2AAC.aac']);
    const kv = fakeKV();
    await onRequest(ctx('?s=hrt2', { KV: kv }));
    expect(kv.store.get('radio:good:hrt2')).toContain('PROGRAM2AAC.aac');

    globalThis.fetch.mockClear();
    const res2 = await onRequest(ctx('?s=hrt2', { KV: kv }));
    expect(res2.status).toBe(302);
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });

  it('fresh=1 skips the cached winner and re-probes (the player retry path)', async () => {
    const kv = fakeKV({
      'radio:good:hrt1':
        'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1.mp3',
    });
    // The cached mount is now dead; only the AAC mount answers.
    upstream(['https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1AAC.aac']);
    const res = await onRequest(ctx('?s=hrt1&fresh=1', { KV: kv }));
    expect(res.status).toBe(302);
    expect(res.headers.get('location')).toContain('PROGRAM1AAC.aac');
    // And the cache now points at the live mount for everyone else.
    expect(kv.store.get('radio:good:hrt1')).toContain('PROGRAM1AAC.aac');
  });

  it('ignores a cached value that is no longer in the candidate list', async () => {
    const kv = fakeKV({ 'radio:good:hrt1': 'https://evil.example.com/stream' });
    upstream(['https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1.mp3']);
    const res = await onRequest(ctx('?s=hrt1', { KV: kv }));
    expect(res.headers.get('location')).toContain('playerservices.streamtheworld.com');
  });

  it('works with PUSH_SUBSCRIPTIONS as the KV fallback binding', async () => {
    upstream(['https://radio.cmc.com.hr:8443/cmc_radio']);
    const kv = fakeKV();
    const res = await onRequest(ctx('?s=cmc', { PUSH_SUBSCRIPTIONS: kv }));
    expect(res.status).toBe(302);
    expect(kv.store.get('radio:good:cmc')).toContain('cmc_radio');
  });

  it('cmc redirects to the live CMC Radio mount discovered 2026-08-16', async () => {
    upstream(['https://radio-stream.cmc.com.hr:9011/live']);
    const res = await onRequest(ctx('?s=cmc', { KV: fakeKV() }));
    expect(res.status).toBe(302);
    expect(res.headers.get('location')).toBe('https://radio-stream.cmc.com.hr:9011/live');
  });
});
