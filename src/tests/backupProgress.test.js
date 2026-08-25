/**
 * backupProgress.test.js — the weekly Firestore backup (/api/backup-progress).
 *
 * The guarantee under test: once a week, every document in the client-written
 * collections lands in KV as restorable JSON, with zero owner operations —
 * and the endpoint can never be triggered by anyone without the cron secret.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { onRequestPost } from '../../functions/api/backup-progress.js';
import { weekKeyUTC } from '../../functions/api/_weekKey.js';

const SECRET = 'test-cron-secret';

// Service-account JSON is only parsed for email + key by the token minting,
// which we stub at the fetch layer — a syntactically valid shape suffices.
const SA = JSON.stringify({ client_email: 'sa@test', private_key: 'unused' });

function fakeKV(seed = {}) {
  const store = new Map(Object.entries(seed));
  return {
    store,
    async get(k) {
      return store.get(k) ?? null;
    },
    async put(k, v, _opts) {
      store.set(k, v);
    },
  };
}

function fsDoc(name, xp) {
  return {
    name: `projects/p/databases/(default)/documents/${name}`,
    fields: { xp: { integerValue: String(xp) } },
  };
}

/** Stub global fetch: token endpoint + per-collection document pages. */
function stubFetch(pagesByCollection) {
  return vi.fn(async (url) => {
    const u = String(url);
    if (u.includes('oauth2.googleapis.com/token')) {
      return new Response(JSON.stringify({ access_token: 'tok' }), { status: 200 });
    }
    for (const [collection, pages] of Object.entries(pagesByCollection)) {
      if (u.includes(`/documents/${collection}?`)) {
        const m = u.match(/pageToken=([^&]+)/);
        const idx = m ? parseInt(decodeURIComponent(m[1]).replace('page', ''), 10) : 0;
        const page = pages[idx] || { documents: [] };
        return new Response(JSON.stringify(page), { status: 200 });
      }
    }
    return new Response('not found', { status: 404 });
  });
}

function ctx(kv, { secret = SECRET, body = null } = {}) {
  return {
    request: new Request('https://x/api/backup-progress', {
      method: 'POST',
      headers: secret === null ? {} : { 'x-cron-secret': secret },
      body: body ? JSON.stringify(body) : null,
    }),
    env: {
      CRON_SECRET: SECRET,
      FIREBASE_PROJECT_ID: 'p',
      FIREBASE_SERVICE_ACCOUNT_JSON: SA,
      PUSH_SUBSCRIPTIONS: kv,
    },
  };
}

// crypto.subtle sign is exercised inside getAdminAccessToken before fetch —
// stub the whole module boundary at fetch level requires the JWT signing to
// succeed. Simpler: stub getAdminAccessToken by stubbing crypto? No — the
// token endpoint is fetched AFTER local signing, and signing a fake key would
// throw. Instead the tests stub the sign path via vi.mock on _firestoreAdmin.
vi.mock('../../functions/api/_firestoreAdmin.js', () => ({
  getAdminAccessToken: vi.fn(async () => 'tok'),
}));

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    stubFetch({
      users: [
        { documents: [fsDoc('users/a', 1), fsDoc('users/b', 2)], nextPageToken: 'page1' },
        { documents: [fsDoc('users/c', 3)] },
      ],
      srs: [{ documents: [fsDoc('srs/a', 0)] }],
      profiles: [{ documents: [] }],
    }),
  );
});
afterEach(() => {
  vi.unstubAllGlobals();
});

describe('/api/backup-progress', () => {
  it('refuses without the cron secret — 401, nothing written', async () => {
    const kv = fakeKV();
    const res = await onRequestPost(ctx(kv, { secret: 'wrong' }));
    expect(res.status).toBe(401);
    expect(kv.store.size).toBe(0);
    const res2 = await onRequestPost(ctx(kv, { secret: null }));
    expect(res2.status).toBe(401);
  });

  it('fails closed when env is incomplete', async () => {
    const kv = fakeKV();
    const c = ctx(kv);
    delete c.env.FIREBASE_SERVICE_ACCOUNT_JSON;
    const res = await onRequestPost(c);
    expect(res.status).toBe(500);
    expect((await res.json()).error).toBe('server_misconfigured');
  });

  it('backs up every collection across pages, writes chunks + index + latest', async () => {
    const kv = fakeKV();
    const res = await onRequestPost(ctx(kv));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body.results.users.docCount).toBe(3); // both pages
    expect(body.results.srs.docCount).toBe(1);
    expect(body.results.profiles.docCount).toBe(0);

    const wk = weekKeyUTC();
    const chunk = JSON.parse(kv.store.get(`backup:${wk}:users:chunk0`));
    expect(chunk).toHaveLength(3);
    // Restorability: every stored document carries its full Firestore resource
    // name — a restore PATCHes doc.name with doc.fields, no id reconstruction.
    expect(chunk[0].name).toContain('/documents/users/a');
    expect(chunk[0].fields.xp.integerValue).toBe('1');

    expect(kv.store.get(`backup:${wk}:index`)).toBeTruthy();
    expect(kv.store.get('backup:latest')).toBe(wk);
  });

  it('is once-per-week: a second run is a skip, force overrides', async () => {
    const kv = fakeKV();
    await onRequestPost(ctx(kv));
    const res2 = await onRequestPost(ctx(kv));
    expect((await res2.json()).skipped).toBe(true);
    const res3 = await onRequestPost(ctx(kv, { body: { force: true } }));
    const body3 = await res3.json();
    expect(body3.skipped).toBeUndefined();
    expect(body3.ok).toBe(true);
  });

  it('writes NO index on failure, so the worker retry window can try again', async () => {
    const kv = fakeKV();
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('boom', { status: 500 })),
    );
    const res = await onRequestPost(ctx(kv));
    expect(res.status).toBe(502);
    const wk = weekKeyUTC();
    expect(kv.store.get(`backup:${wk}:index`)).toBeUndefined();
    expect(kv.store.get('backup:latest')).toBeUndefined();
  });
});

describe('the weekly trigger in the scheduled worker', () => {
  const src = readFileSync('functions/scheduled.js', 'utf8');

  it('calls the backup endpoint with the cron secret inside a retry window', () => {
    expect(src).toContain('/api/backup-progress');
    // The RESOLVED credential (functions/_cronAuth.js), not env.CRON_SECRET.
    // This call shares the reminder's header, so when the hand-set secret
    // drifted on 2026-08-23 the weekly backup went down with it — silently,
    // since nothing sweeps backups the way push-health sweeps reminders.
    expect(src).toContain("'x-cron-secret': cronSecret");
    // A multi-hour window (not one exact hour) is what turns a transient
    // failure into an automatic retry instead of a week-long gap.
    expect(src).toMatch(/getUTCDay\(\) === 1 && utcHour >= 3 && utcHour <= 5/);
  });

  it('bootstraps: fires hourly until the FIRST snapshot ever succeeds', () => {
    // Without this, the first snapshot waits up to a week after deploy — and a
    // backup system is unverified until its first run exists.
    expect(src).toContain("get('backup:bootstrap_done')");
    // The marker is only written on an ok answer, inside the success branch.
    expect(src).toContain("put('backup:bootstrap_done', '1')");
  });
});
