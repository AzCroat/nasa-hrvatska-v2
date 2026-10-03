// src/tests/requireAuth.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
vi.mock('../../functions/api/_verifyToken.js', () => ({
  getFirebaseUid: vi.fn(async (req) =>
    req.headers.get('authorization') === 'Bearer good' ? 'uid-1' : null,
  ),
}));
vi.mock('../../functions/api/_rateLimit.js', () => ({ checkRateLimit: vi.fn(async () => true) }));
vi.mock('../../functions/api/_aiQuota.js', () => ({
  checkAIQuota: vi.fn(async () => ({ allowed: true, remaining: 299, resetAt: 'x' })),
}));
import { requireAuthedAI } from '../../functions/api/_requireAuth.js';
import { checkAIQuota } from '../../functions/api/_aiQuota.js';
import { MONTHLY_BUDGET_MICROUSD } from '../../functions/api/_aiBudget.js';

/**
 * In-memory KV stub. The gate now ends with the global monthly budget check
 * (_aiBudget.js), which is FAIL-CLOSED — a bare env would 429 every request,
 * which is correct in production (the <$5 guarantee outranks availability)
 * but means every test env must carry a storage backend, exactly like prod.
 */
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

function ctx(
  auth,
  env = { FIREBASE_PROJECT_ID: 'proj', ENVIRONMENT: 'production', PUSH_SUBSCRIPTIONS: fakeKV() },
) {
  const headers = { 'content-type': 'application/json', origin: 'https://nasahrvatska.com' };
  if (auth) headers.authorization = auth;
  return {
    request: new Request('https://nasahrvatska.com/api/x', { method: 'POST', headers }),
    env,
  };
}

describe('requireAuthedAI', () => {
  beforeEach(() => vi.clearAllMocks());

  it('500 fail-closed when FIREBASE_PROJECT_ID is missing (never silently open)', async () => {
    const g = await requireAuthedAI(ctx('Bearer good', { ENVIRONMENT: 'production' }), {
      cost: 1,
      rateLimit: 20,
    });
    expect(g.ok).toBe(false);
    expect(g.response.status).toBe(500);
  });

  it('401 when unauthenticated (no anonymous lane)', async () => {
    const g = await requireAuthedAI(ctx(null), { cost: 1, rateLimit: 20 });
    expect(g.ok).toBe(false);
    expect(g.response.status).toBe(401);
    expect(g.response.headers.get('content-type')).toContain('application/json');
  });

  it('passes for a signed-in user and charges quota with the given cost', async () => {
    const g = await requireAuthedAI(ctx('Bearer good'), { cost: 2, rateLimit: 20 });
    expect(g.ok).toBe(true);
    expect(g.uid).toBe('uid-1');
    expect(checkAIQuota).toHaveBeenCalledWith(expect.anything(), expect.anything(), 'uid-1', 2);
  });

  it('cost 0 skips the per-user quota entirely — for cache-served endpoints that charge on generation (2026-09-06)', async () => {
    // The quota is not consulted at all: /api/tts and /api/news call
    // checkAIQuota themselves after their cache misses.
    // (No mockResolvedValueOnce here on purpose — a queued value that the code
    // correctly never consumes would leak into the next test.)
    const g = await requireAuthedAI(ctx('Bearer good'), { cost: 0, rateLimit: 60 });
    expect(g.ok).toBe(true);
    expect(g.uid).toBe('uid-1');
    expect(checkAIQuota).not.toHaveBeenCalled();
  });

  it('429 when over quota', async () => {
    checkAIQuota.mockResolvedValueOnce({ allowed: false, remaining: 0, resetAt: 'x' });
    const g = await requireAuthedAI(ctx('Bearer good'), { cost: 1, rateLimit: 20 });
    expect(g.ok).toBe(false);
    expect(g.response.status).toBe(429);
  });

  it('429 monthly_budget_exhausted when the global ledger is at the cap', async () => {
    const month = new Date().toISOString().slice(0, 7);
    const env = {
      FIREBASE_PROJECT_ID: 'proj',
      ENVIRONMENT: 'production',
      PUSH_SUBSCRIPTIONS: fakeKV({ [`budget:${month}`]: String(MONTHLY_BUDGET_MICROUSD) }),
    };
    const g = await requireAuthedAI(ctx('Bearer good', env), { cost: 1, rateLimit: 20 });
    expect(g.ok).toBe(false);
    expect(g.response.status).toBe(429);
    const body = await g.response.json();
    // Distinct machine-readable code: clients branch to cached fallbacks on
    // this, never a dead feature. resetAt names the first of next month.
    expect(body.error).toBe('monthly_budget_exhausted');
    expect(body.resetAt).toMatch(/-01T00:00:00/);
  });

  it('fails CLOSED on budget when the env has no storage backend at all', async () => {
    const g = await requireAuthedAI(
      ctx('Bearer good', { FIREBASE_PROJECT_ID: 'proj', ENVIRONMENT: 'production' }),
      { cost: 1, rateLimit: 20 },
    );
    // The spend guarantee outranks serving the AI garnish: no ledger, no spend.
    // But it is NOT reported as a spent budget (Sentry 14c076e5, 2026-10-03:
    // a learner was told the month's allowance was used up at 6% of it).
    expect(g.ok).toBe(false);
    expect(g.response.status).toBe(503);
    expect((await g.response.json()).error).toBe('budget_unavailable');
  });

  it('a ledger that throws is budget_unavailable (503), never monthly_budget_exhausted', async () => {
    const env = {
      FIREBASE_PROJECT_ID: 'proj',
      ENVIRONMENT: 'production',
      PUSH_SUBSCRIPTIONS: {
        async get() {
          throw new Error('KV down');
        },
        async put() {
          throw new Error('KV down');
        },
      },
    };
    const g = await requireAuthedAI(ctx('Bearer good', env), { cost: 1, rateLimit: 20 });
    expect(g.ok).toBe(false);
    expect(g.response.status).toBe(503);
    expect((await g.response.json()).error).toBe('budget_unavailable');
  });

  it('a quota store that did not answer is quota_unavailable (503), not a used-up day', async () => {
    checkAIQuota.mockResolvedValueOnce({
      allowed: false,
      unavailable: true,
      remaining: 0,
      resetAt: 'x',
    });
    const g = await requireAuthedAI(ctx('Bearer good'), { cost: 1, rateLimit: 20 });
    expect(g.response.status).toBe(503);
    expect((await g.response.json()).error).toBe('quota_unavailable');
  });

  it('a burst refusal is rate_limited (429), not daily_quota_exceeded', async () => {
    checkAIQuota.mockResolvedValueOnce({ allowed: false, burst: true, remaining: 0, resetAt: 'x' });
    const g = await requireAuthedAI(ctx('Bearer good'), { cost: 1, rateLimit: 20 });
    expect(g.response.status).toBe(429);
    expect((await g.response.json()).error).toBe('rate_limited');
  });
});
