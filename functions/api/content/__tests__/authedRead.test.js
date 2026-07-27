import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../_verifyToken.js', () => ({
  getFirebaseUid: vi.fn(),
}));

import { authedRead } from '../_authedRead.js';
import { getFirebaseUid } from '../../_verifyToken.js';

function makeRequest({
  auth = null,
  ifNoneMatch = null,
  origin = 'https://nasahrvatska.com',
} = {}) {
  const headers = new Headers();
  if (auth) headers.set('authorization', auth);
  if (ifNoneMatch) headers.set('if-none-match', ifNoneMatch);
  if (origin) headers.set('origin', origin);
  return new Request('https://nasahrvatska.com/api/content/x', { headers });
}

// AI_QUOTA_DB is a D1 database (subject PK on the ai_quota table). This stub
// mirrors the columns/upsert the endpoint uses: prepare().bind().first()/run().
function makeEnv() {
  const rows = new Map(); // subject -> { turns, window_date }
  const db = {
    prepare() {
      return {
        _args: [],
        bind(...args) {
          this._args = args;
          return this;
        },
        async first() {
          // SELECT turns, window_date FROM ai_quota WHERE subject = ?1
          return rows.get(this._args[0]) || null;
        },
        async run() {
          // upsert: subject=?1, window_date=?2 — +1 same day, reset to 1 on new day
          const [subject, wday] = this._args;
          const cur = rows.get(subject);
          rows.set(subject, {
            turns: cur && cur.window_date === wday ? cur.turns + 1 : 1,
            window_date: wday,
          });
          return { success: true };
        },
      };
    },
  };
  return {
    FIREBASE_PROJECT_ID: 'nh-test',
    CONTENT_DAILY_CAP: '500',
    AI_QUOTA_DB: db,
    _rows: rows,
  };
}

describe('authedRead', () => {
  beforeEach(() => vi.clearAllMocks());

  it('returns 401 when no Bearer token', async () => {
    getFirebaseUid.mockResolvedValueOnce(null);
    const res = await authedRead({
      request: makeRequest(),
      env: makeEnv(),
      etag: 'abc',
      buildBody: () => ({ data: { hello: 'world' } }),
    });
    expect(res.status).toBe(401);
  });

  it('returns 200 with body + ETag header when authed and no If-None-Match', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const res = await authedRead({
      request: makeRequest({ auth: 'Bearer fake' }),
      env: makeEnv(),
      etag: 'abc',
      buildBody: () => ({ data: { hello: 'world' } }),
    });
    expect(res.status).toBe(200);
    expect(res.headers.get('etag')).toBe('"abc"');
    const json = await res.json();
    expect(json.etag).toBe('abc');
    expect(json.data).toEqual({ hello: 'world' });
  });

  it('returns 304 when If-None-Match matches etag', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const res = await authedRead({
      request: makeRequest({ auth: 'Bearer fake', ifNoneMatch: '"abc"' }),
      env: makeEnv(),
      etag: 'abc',
      buildBody: () => ({ data: { hello: 'world' } }),
    });
    expect(res.status).toBe(304);
    expect(res.headers.get('etag')).toBe('"abc"');
  });

  it('returns 429 when daily cap reached', async () => {
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    const env = makeEnv();
    const today = new Date().toISOString().slice(0, 10);
    // Seed the D1 row at the cap for today's window.
    env._rows.set('content:uid_test', { turns: 500, window_date: today });
    const res = await authedRead({
      request: makeRequest({ auth: 'Bearer fake' }),
      env,
      etag: 'abc',
      buildBody: () => ({ data: { hello: 'world' } }),
    });
    expect(res.status).toBe(429);
  });

  it('increments the D1 counter on 200 only (not on 304 or 401)', async () => {
    const env = makeEnv();
    const today = new Date().toISOString().slice(0, 10);

    // 401 - no increment
    getFirebaseUid.mockResolvedValueOnce(null);
    await authedRead({ request: makeRequest(), env, etag: 'abc', buildBody: () => ({}) });
    expect(env._rows.get('content:uid_test')).toBeUndefined();

    // 304 - no increment
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    await authedRead({
      request: makeRequest({ auth: 'Bearer fake', ifNoneMatch: '"abc"' }),
      env,
      etag: 'abc',
      buildBody: () => ({}),
    });
    expect(env._rows.get('content:uid_test')).toBeUndefined();

    // 200 - increment to turns=1 for today's window
    getFirebaseUid.mockResolvedValueOnce('uid_test');
    await authedRead({
      request: makeRequest({ auth: 'Bearer fake' }),
      env,
      etag: 'abc',
      buildBody: () => ({ data: 'ok' }),
    });
    expect(env._rows.get('content:uid_test')).toEqual({ turns: 1, window_date: today });
  });
});
