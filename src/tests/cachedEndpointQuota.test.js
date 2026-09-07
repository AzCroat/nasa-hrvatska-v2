/**
 * cachedEndpointQuota.test.js — cache hits never charge the learner's quota.
 *
 * Field report, 2026-09-06: a Level Check's listening section played nothing.
 * /api/tts charged the per-user daily AI quota (300 "turns") at its auth gate,
 * BEFORE its edge/KV cache lookup — so every tap on a speaker icon, every
 * flashcard, every dialogue line cost a turn even when the audio had been
 * generated months ago and cost nothing. A day of ordinary practice could
 * reach the ceiling, after which every audio request 429'd until midnight
 * UTC, exam included. /api/news (cost 4 per cached read) and
 * /api/daily-culture had the same shape.
 *
 * The contract now mirrors the budget's: the gate authenticates and
 * rate-limits with cost 0, and the quota is charged ONLY on the path that
 * generates. These tests drive the REAL handlers with the storage and
 * providers mocked, and assert the order of the two checks — quota before
 * budget — so a refused user is told "daily limit", not "budget paused".
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: vi.fn(async () => ({
    ok: true,
    uid: 'uid-1',
    origin: 'https://nasahrvatska.com',
    isDev: false,
  })),
}));
vi.mock('../../functions/api/_aiQuota.js', () => ({
  checkAIQuota: vi.fn(async () => ({ allowed: true, remaining: 299, resetAt: 'x' })),
}));
vi.mock('../../functions/api/_aiBudget.js', () => ({
  reconcileSafely: async () => {},
  checkAndChargeBudget: vi.fn(async () => ({ allowed: false, spentMicroUsd: 0, resetAt: 'y' })),
  // news.js / daily-culture.js import nothing else from here at module scope.
}));
vi.mock('../../functions/api/_promptCache.js', () => ({
  readCachedWithPromptTag: vi.fn(async () => ({ value: null, tag: null })),
  promptCacheMetadata: vi.fn(() => ({})),
}));

import { requireAuthedAI } from '../../functions/api/_requireAuth.js';
import { checkAIQuota } from '../../functions/api/_aiQuota.js';
import { checkAndChargeBudget } from '../../functions/api/_aiBudget.js';
import { readCachedWithPromptTag } from '../../functions/api/_promptCache.js';
import { onRequestPost as ttsPost } from '../../functions/api/tts.js';
import { onRequestGet as newsGet } from '../../functions/api/news.js';
import { onRequestGet as cultureGet } from '../../functions/api/daily-culture.js';

const ORIGIN = 'https://nasahrvatska.com';

function kvWith(hit) {
  return {
    get: vi.fn(async () => hit),
    put: vi.fn(async () => {}),
  };
}

function ttsRequest(text = 'Dobar dan, jednu kavu molim.') {
  return new Request(`${ORIGIN}/api/tts`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: ORIGIN },
    body: JSON.stringify({ text }),
  });
}

beforeEach(() => {
  vi.clearAllMocks();
  // No provider may ever be reached in these tests — a call means a check
  // that should have refused did not.
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => {
      throw new Error('provider fetch must not run in this test');
    }),
  );
});

describe('/api/tts — quota charged only on generation', () => {
  it('authenticates with cost 0 (the gate no longer charges the quota)', async () => {
    const env = { KV: kvWith(new ArrayBuffer(1000)) };
    await ttsPost({ request: ttsRequest(), env, waitUntil: () => {} });
    expect(requireAuthedAI).toHaveBeenCalledTimes(1);
    expect(requireAuthedAI.mock.calls[0][1]).toMatchObject({ cost: 0 });
  });

  it('a KV cache hit serves 200 audio and never touches the quota or the budget', async () => {
    const env = { KV: kvWith(new ArrayBuffer(1000)) };
    const res = await ttsPost({ request: ttsRequest(), env, waitUntil: () => {} });
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toBe('audio/mpeg');
    expect(checkAIQuota).not.toHaveBeenCalled();
    expect(checkAndChargeBudget).not.toHaveBeenCalled();
  });

  it('a cache miss charges the quota once (cost 1) BEFORE the budget, and a refusal is a 429 daily_quota_exceeded', async () => {
    checkAIQuota.mockResolvedValueOnce({
      allowed: false,
      remaining: 0,
      resetAt: '2026-09-07T00:00:00.000Z',
    });
    const env = { KV: kvWith(null) };
    const res = await ttsPost({ request: ttsRequest(), env, waitUntil: () => {} });
    expect(res.status).toBe(429);
    const body = await res.json();
    expect(body.error).toBe('daily_quota_exceeded');
    expect(body.resetAt).toBe('2026-09-07T00:00:00.000Z');
    expect(checkAIQuota).toHaveBeenCalledWith(expect.anything(), env, 'uid-1', 1);
    expect(checkAndChargeBudget).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('with quota allowed, the budget is checked next (a refusal is the existing 503)', async () => {
    const env = { KV: kvWith(null) };
    const res = await ttsPost({ request: ttsRequest(), env, waitUntil: () => {} });
    expect(res.status).toBe(503);
    expect(checkAIQuota).toHaveBeenCalledTimes(1);
    expect(checkAndChargeBudget).toHaveBeenCalledWith(env, '/api/tts:generate');
    const quotaOrder = checkAIQuota.mock.invocationCallOrder[0];
    const budgetOrder = checkAndChargeBudget.mock.invocationCallOrder[0];
    expect(quotaOrder).toBeLessThan(budgetOrder);
  });
});

describe('/api/news — quota charged only on the generating miss', () => {
  const req = () => new Request(`${ORIGIN}/api/news?level=B1`, { headers: { origin: ORIGIN } });
  const env = { ANTHROPIC_API_KEY: 'k', KV: kvWith(null) };

  it('gate cost is 0', async () => {
    readCachedWithPromptTag.mockResolvedValueOnce({
      value: JSON.stringify({ articles: [] }),
      tag: null,
    });
    await newsGet({ request: req(), env, waitUntil: () => {} });
    expect(requireAuthedAI.mock.calls[0][1]).toMatchObject({ cost: 0 });
  });

  it('a cached read is served without charging the quota', async () => {
    readCachedWithPromptTag.mockResolvedValueOnce({
      value: JSON.stringify({ articles: [{ t: 1 }] }),
      tag: null,
    });
    const res = await newsGet({ request: req(), env, waitUntil: () => {} });
    expect(res.status).toBe(200);
    expect(checkAIQuota).not.toHaveBeenCalled();
  });

  it('a miss charges cost 4 and a refusal degrades to the curated set (never dead)', async () => {
    checkAIQuota.mockResolvedValueOnce({ allowed: false, remaining: 0, resetAt: 'x' });
    const res = await newsGet({ request: req(), env, waitUntil: () => {} });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.source).toBe('curated');
    expect(checkAIQuota).toHaveBeenCalledWith(expect.anything(), env, 'uid-1', 4);
    expect(checkAndChargeBudget).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });
});

describe('/api/daily-culture — quota charged only on the generating miss', () => {
  const req = () => new Request(`${ORIGIN}/api/daily-culture`, { headers: { origin: ORIGIN } });
  const env = { ANTHROPIC_API_KEY: 'k', KV: kvWith(null) };

  it('gate cost is 0 and a cached card is served without charging the quota', async () => {
    readCachedWithPromptTag.mockResolvedValueOnce({
      value: JSON.stringify({ fact: 'x' }),
      tag: null,
    });
    const res = await cultureGet({ request: req(), env, waitUntil: () => {} });
    expect(res.status).toBe(200);
    expect(requireAuthedAI.mock.calls[0][1]).toMatchObject({ cost: 0 });
    expect(checkAIQuota).not.toHaveBeenCalled();
  });

  it('a miss charges cost 1 and a refusal is a 429 daily_quota_exceeded', async () => {
    checkAIQuota.mockResolvedValueOnce({ allowed: false, remaining: 0, resetAt: 'x' });
    const res = await cultureGet({ request: req(), env, waitUntil: () => {} });
    expect(res.status).toBe(429);
    expect((await res.json()).error).toBe('daily_quota_exceeded');
    expect(checkAIQuota).toHaveBeenCalledWith(expect.anything(), env, 'uid-1', 1);
    expect(checkAndChargeBudget).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });
});
