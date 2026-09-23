import { describe, it, expect, vi } from 'vitest';

vi.mock('../../_verifyToken.js', () => ({
  getFirebaseUid: vi.fn(),
}));

import { onRequestGet } from '../core.js';
import { CORE_PAYLOAD_KEYS } from '../_data/core.js';
import { getFirebaseUid } from '../../_verifyToken.js';

function makeContext({ auth = null } = {}) {
  const headers = new Headers();
  if (auth) headers.set('authorization', auth);
  headers.set('origin', 'https://nasahrvatska.com');
  return {
    request: new Request('https://nasahrvatska.com/api/content/core', { headers }),
    env: {
      FIREBASE_PROJECT_ID: 'nh-test',
      CONTENT_DAILY_CAP: '500',
      AI_QUOTA_DB: { get: async () => null, put: async () => {} },
    },
  };
}

// DERIVED, NOT RESTATED (2026-09-23). This was a hand-written copy of the
// endpoint's KEYS and had gone stale by one: it lacked CULTURE_DEEP_DIVES, so
// the "every export is present" assertion below covered 31 of the 32 keys the
// endpoint actually serves. A test that restates production data cannot check
// production data.
const ALL_KEYS = CORE_PAYLOAD_KEYS;

describe('GET /api/content/core', () => {
  it('returns 401 with no Bearer', async () => {
    getFirebaseUid.mockResolvedValueOnce(null);
    const res = await onRequestGet(makeContext());
    expect(res.status).toBe(401);
  });

  it('returns 200 with every key of CORE_PAYLOAD_KEYS when authed', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const res = await onRequestGet(makeContext({ auth: 'Bearer fake' }));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.etag).toMatch(/^[0-9a-f]{40}$/);
    for (const k of ALL_KEYS) {
      expect(json.data, `missing export "${k}"`).toHaveProperty(k);
    }
  });

  it('SP11e: response includes LEARN_PATH with ckRule shape (no ck functions)', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const res = await onRequestGet(makeContext({ auth: 'Bearer fake' }));
    const json = await res.json();
    const lp = json.data.LEARN_PATH;
    expect(Array.isArray(lp)).toBe(true);
    expect(lp.length).toBe(7);
    const firstItem = lp[0].items[0];
    expect(firstItem.ckRule).toBeDefined();
    expect(Array.isArray(firstItem.ckRule.anyOf)).toBe(true);
    expect(typeof firstItem.ck).toBe('undefined');
  });

  it('SP11e: response includes SEASONAL_CAMPAIGNS with windowKind discriminator', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const res = await onRequestGet(makeContext({ auth: 'Bearer fake' }));
    const json = await res.json();
    const sc = json.data.SEASONAL_CAMPAIGNS;
    expect(Array.isArray(sc)).toBe(true);
    expect(sc.length).toBe(4);
    const easter = sc.find((c) => c.id === 'easter');
    expect(easter.windowKind).toBe('easterRelative');
    expect(easter.windowOffsets).toEqual([-7, 1]);
    expect(typeof easter.dynamicWindow).toBe('undefined');
    expect(sc.filter((c) => c.windowKind === 'fixed').length).toBe(3);
  });

  it('SP11e: V composition applied — topic aliases populated', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const res = await onRequestGet(makeContext({ auth: 'Bearer fake' }));
    const json = await res.json();
    expect(Array.isArray(json.data.V['Order Food'])).toBe(true);
    expect(json.data.V['Order Food'].length).toBeGreaterThan(0);
    expect(Array.isArray(json.data.V['Alphabet'])).toBe(true);
    expect(json.data.V['Alphabet'].length).toBe(30);
    expect(Array.isArray(json.data.V['Emergency'])).toBe(true);
  });

  it('SP11e: V B2 aliases resolved server-side', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const res = await onRequestGet(makeContext({ auth: 'Bearer fake' }));
    const json = await res.json();
    expect(Array.isArray(json.data.V['journalism'])).toBe(true);
    expect(Array.isArray(json.data.V['philosophy'])).toBe(true);
    expect(Array.isArray(json.data.V['literature'])).toBe(true);
    expect(Array.isArray(json.data.V['politics'])).toBe(true);
  });

  it('V_LEVELS tags every pool-eligible V category with a valid level', async () => {
    // The client deck is derived from this map (src/lib/vocabPool.ts): a V key
    // that is neither levelled nor in V_POOL_EXCLUDED is a category no learner
    // at any level can ever be served — the 1,030-word hole, one alias at a time.
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const { V_POOL_EXCLUDED } = await import('../_data/core.js');
    const res = await onRequestGet(makeContext({ auth: 'Bearer fake' }));
    const { V, V_LEVELS } = (await res.json()).data;
    const CEFR = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
    const unlevelled = Object.keys(V).filter((k) => !V_LEVELS[k] && !V_POOL_EXCLUDED.includes(k));
    expect(unlevelled, `unlevelled V categories: ${unlevelled.join(', ')}`).toEqual([]);
    const stale = Object.keys(V_LEVELS).filter((k) => !(k in V));
    expect(stale, `V_LEVELS entries with no category: ${stale.join(', ')}`).toEqual([]);
    for (const [k, lvl] of Object.entries(V_LEVELS)) {
      expect(CEFR.has(lvl), `${k} → ${lvl}`).toBe(true);
    }
    // The exclusion must still be earning its place: an excluded key that is
    // levelled, or absent, is an exemption guarding nothing.
    for (const k of V_POOL_EXCLUDED) {
      expect(V, `excluded key ${k} no longer exists`).toHaveProperty(k);
      expect(V_LEVELS[k], `excluded key ${k} is levelled — drop the exclusion`).toBeUndefined();
    }
  });

  it('ETag header matches _etags.js entry', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const { ETAGS } = await import('../_data/_etags.js');
    const res = await onRequestGet(makeContext({ auth: 'Bearer fake' }));
    expect(res.headers.get('etag')).toBe(`"${ETAGS.core}"`);
  });

  it('returns 304 when If-None-Match matches', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const { ETAGS } = await import('../_data/_etags.js');
    const ctx = makeContext({ auth: 'Bearer fake' });
    ctx.request.headers.set('if-none-match', `"${ETAGS.core}"`);
    const res = await onRequestGet(ctx);
    expect(res.status).toBe(304);
  });
});
