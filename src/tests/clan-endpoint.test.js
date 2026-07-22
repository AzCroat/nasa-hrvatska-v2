// src/tests/clan-endpoint.test.js
// The clan GET is unauthenticated, so it must be READ-ONLY. It previously did a
// kv.put on week rollover, letting anyone with a clanId trigger a write. Verify
// it now computes the reset view without persisting.
import { describe, it, expect, vi } from 'vitest';
import { onRequestGet } from '../../functions/api/clan.js';

function makeKv(initial) {
  const store = new Map(Object.entries(initial || {}));
  return {
    store,
    get: vi.fn(async (k, opts) => {
      const v = store.get(k);
      if (v == null) return null;
      return opts?.type === 'json' ? JSON.parse(v) : v;
    }),
    put: vi.fn(async (k, v) => void store.set(k, v)),
    delete: vi.fn(async (k) => void store.delete(k)),
  };
}

function getReq(clanId) {
  return new Request(`https://nasahrvatska.com/api/clan?clanId=${clanId}`, {
    headers: { origin: 'https://nasahrvatska.com' },
  });
}

describe('/api/clan GET is read-only', () => {
  it('returns a week-reset view WITHOUT persisting (no kv.put)', async () => {
    // Clan stored under a stale week with non-zero weekXP.
    const kv = makeKv({
      'clan:abc123': JSON.stringify({
        id: 'abc123',
        name: 'Test',
        weekKey: '2020-W01',
        members: [{ uid: 'u1', name: 'Ivan', weekXP: 400 }],
      }),
    });
    const res = await onRequestGet({ request: getReq('abc123'), env: { NH_CLANS: kv } });
    expect(res.status).toBe(200);
    const body = await res.json();
    // Response shows the reset view for the current week…
    expect(body.members[0].weekXP).toBe(0);
    expect(body.totalXP).toBe(0);
    // …but the stale record was NOT written back.
    expect(kv.put).not.toHaveBeenCalled();
  });

  it('404s for an unknown clan without writing', async () => {
    const kv = makeKv({});
    const res = await onRequestGet({ request: getReq('nope'), env: { NH_CLANS: kv } });
    expect(res.status).toBe(404);
    expect(kv.put).not.toHaveBeenCalled();
  });
});
