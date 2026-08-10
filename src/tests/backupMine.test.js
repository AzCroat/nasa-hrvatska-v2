/**
 * backupMine.test.js — the per-user backup tee (/api/backup-mine) and its
 * client half (src/lib/backupTee.ts).
 *
 * The guarantee: every ACTIVE user's complete progress lands in KV daily,
 * authenticated by the user's OWN token (public-cert verification — no admin
 * credential involved), because the admin credential path is broken in the
 * dashboard and cannot be self-healed by automation.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { onRequestPost } from '../../functions/api/backup-mine.js';
import { weekKeyUTC } from '../../functions/api/_weekKey.js';

let mockUid = 'user-1';
vi.mock('../../functions/api/_verifyToken.js', () => ({
  getFirebaseUid: vi.fn(async () => {
    if (mockUid === null) throw new Error('bad token');
    return mockUid;
  }),
}));

function fakeKV(seed = {}) {
  const store = new Map(Object.entries(seed));
  return {
    store,
    async get(k) {
      return store.get(k) ?? null;
    },
    async put(k, v, _o) {
      store.set(k, v);
    },
  };
}

function ctx(kv, body = { progress: { xp: 100, lc: 5 }, srs: { rijec: { r: 1 } } }) {
  return {
    request: new Request('https://x/api/backup-mine', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    }),
    env: { FIREBASE_PROJECT_ID: 'p', PUSH_SUBSCRIPTIONS: kv },
  };
}

beforeEach(() => {
  mockUid = 'user-1';
});

describe('/api/backup-mine', () => {
  it('401 without a valid token — nothing written', async () => {
    mockUid = null;
    const kv = fakeKV();
    const res = await onRequestPost(ctx(kv));
    expect(res.status).toBe(401);
    expect(kv.store.size).toBe(0);
  });

  it('writes permanent latest + weekly generation + health marker, keyed by the VERIFIED uid', async () => {
    const kv = fakeKV();
    const res = await onRequestPost(ctx(kv));
    expect(res.status).toBe(200);
    const latest = JSON.parse(kv.store.get('backup:user:user-1:latest'));
    expect(latest.progress.xp).toBe(100);
    expect(latest.srs.rijec.r).toBe(1);
    expect(latest.uid).toBe('user-1'); // server-verified, never client-supplied
    expect(kv.store.get(`backup:${weekKeyUTC()}:user:user-1`)).toBeTruthy();
    expect(kv.store.get('backup:client:lastAt')).toBeTruthy();
  });

  it('is once per UTC day per user: second call skips without reading the body', async () => {
    const kv = fakeKV();
    await onRequestPost(ctx(kv));
    const before = JSON.parse(kv.store.get('backup:user:user-1:latest'));
    const res2 = await onRequestPost(ctx(kv, { progress: { xp: 999 } }));
    expect((await res2.json()).skipped).toBe(true);
    expect(JSON.parse(kv.store.get('backup:user:user-1:latest')).progress.xp).toBe(
      before.progress.xp,
    );
  });

  it('rejects oversized and malformed bodies', async () => {
    const kv = fakeKV();
    const big = await onRequestPost(ctx(kv, `{"progress":{"x":"${'a'.repeat(1_600_000)}"}}`));
    expect(big.status).toBe(413);
    mockUid = 'user-2';
    const bad = await onRequestPost(ctx(kv, 'not json'));
    expect(bad.status).toBe(400);
    mockUid = 'user-3';
    const missing = await onRequestPost(ctx(kv, { srs: {} }));
    expect(missing.status).toBe(400);
  });
});

describe('the client tee wiring', () => {
  it('useSyncManager tees ONLY after a confirmed successful save', () => {
    const src = readFileSync('src/hooks/useSyncManager.ts', 'utf8');
    const successBlock = src.slice(src.indexOf('if (success) {'), src.indexOf('return success;'));
    expect(successBlock).toContain('teeBackupIfDue(snap)');
  });

  it('backupTee marks the day ONLY on a confirmed 2xx, so failures retry next sync', () => {
    const src = readFileSync('src/lib/backupTee.ts', 'utf8');
    expect(src).toContain('if (r.ok) lsSet(TEE_MARKER, today)');
    // Fire-and-forget: the tee must never await inside the sync path.
    expect(src).toContain('void apiFetch');
  });
});
