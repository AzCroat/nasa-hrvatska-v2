/**
 * award-worker.test.js — the REAL /api/award handler and the REAL clamp.
 *
 * THIS FILE USED TO TEST A COPY (rewritten 2026-09-25). It declared its own
 * `computeAwarded` and its own 16-entry `ACTIVITY_XP_MAP` literal and imported
 * nothing from `functions/` at all — sixteen tests, none of which could see
 * the endpoint. Verbatim the trap CLAUDE.md names: *a test that restates
 * production data cannot check production data*, the same shape as
 * `a2Curriculum.test.ts`'s in-test `SCREEN_FOR` map.
 *
 * What that cost, concretely: the copy took `velocityTotal` and nothing else,
 * so the **2,500 XP daily cap — added to the endpoint later — was outside
 * every assertion in the file.** The clamp now lives once, in
 * `_xpVelocityStore.js`, and is imported here.
 *
 * WHAT THE D1 STUB CAN AND CANNOT PROVE, stated rather than implied. It stores
 * one row per uid and answers the two statements the store issues; it does NOT
 * execute SQL, so it cannot prove the upsert is correct against real D1. That
 * is why the clamp is a pure function tested directly and the SQL is kept to
 * a plain SELECT and a plain upsert with no computed columns — a store whose
 * correctness depended on SQL semantics could not be verified from here, and
 * an unverifiable store guarding the XP economy is worse than a simpler one.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../functions/api/_rateLimit.js', () => ({
  checkRateLimit: vi.fn(async () => true),
}));
vi.mock('../../functions/api/_verifyToken.js', () => ({
  getFirebaseUid: vi.fn(async () => 'uid-1'),
}));

const { onRequestPost } = await import('../../functions/api/award.js');
const { computeAward, claimXp, _resetXpStore, VELOCITY_BUDGET, VELOCITY_WINDOW_MS, DAILY_XP_CAP } =
  await import('../../functions/api/_xpVelocityStore.js');
const { ACTIVITY_XP_MAP } = await import('../../functions/api/_activityXp.js');

// ── Stubs ───────────────────────────────────────────────────────────────────

/** Minimal D1: one table of rows keyed by uid. Counts writes, which is the
 *  quantity this whole change is about. */
function makeD1() {
  const rows = new Map();
  const stats = { selects: 0, writes: 0, creates: 0, deletes: 0 };
  return {
    rows,
    stats,
    prepare(sql) {
      const q = sql.replace(/\s+/g, ' ').trim();
      let args = [];
      const self = {
        bind(...a) {
          args = a;
          return self;
        },
        async first() {
          if (q.startsWith('SELECT')) {
            stats.selects += 1;
            return rows.get(args[0]) ?? null;
          }
          return null;
        },
        async run() {
          if (q.startsWith('CREATE TABLE')) {
            stats.creates += 1;
            return {};
          }
          if (q.startsWith('DELETE')) {
            stats.deletes += 1;
            for (const [k, v] of rows) if (v.updated_at < args[0]) rows.delete(k);
            return {};
          }
          if (q.startsWith('INSERT')) {
            stats.writes += 1;
            const [uid, vel_total, vel_window_start, day_total, day_date, updated_at] = args;
            rows.set(uid, { vel_total, vel_window_start, day_total, day_date, updated_at });
            return {};
          }
          return {};
        },
      };
      return self;
    },
  };
}

function makeKV() {
  const store = new Map();
  const stats = { gets: 0, puts: 0 };
  return {
    store,
    stats,
    async get(k) {
      stats.gets += 1;
      return store.get(k) ?? null;
    },
    async put(k, v) {
      stats.puts += 1;
      store.set(k, v);
    },
  };
}

function req(body) {
  return new Request('https://nasahrvatska.com/api/award', {
    method: 'POST',
    headers: { origin: 'https://nasahrvatska.com', 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

const baseEnv = { VITE_FIREBASE_PROJECT_ID: 'proj', ENVIRONMENT: 'production' };

async function award(env, body) {
  const res = await onRequestPost({ request: req(body), env });
  return { status: res.status, body: await res.json() };
}

beforeEach(() => {
  _resetXpStore();
  vi.restoreAllMocks();
});

// ── The clamp, driven directly ──────────────────────────────────────────────

describe('computeAward — the one clamp', () => {
  const now = 1_700_000_000_000;
  const at = (o) => ({ velTotal: 0, velWindowStart: now, dayTotal: 0, now, ...o });

  it('awards the claim when it is under every cap', () => {
    expect(computeAward(at({ capped: 25 })).awarded).toBe(25);
  });

  it('clamps to the velocity remaining', () => {
    expect(computeAward(at({ capped: 100, velTotal: VELOCITY_BUDGET - 50 })).awarded).toBe(50);
  });

  it('awards 0 once the velocity budget is spent', () => {
    expect(computeAward(at({ capped: 100, velTotal: VELOCITY_BUDGET })).awarded).toBe(0);
  });

  // THE CAP THE OLD COPY COULD NOT SEE. Its `computeAwarded` took no daily
  // total at all, so every assertion about it is new.
  it('clamps to the daily remaining', () => {
    expect(computeAward(at({ capped: 100, dayTotal: DAILY_XP_CAP - 30 })).awarded).toBe(30);
    expect(computeAward(at({ capped: 100, dayTotal: DAILY_XP_CAP })).awarded).toBe(0);
  });

  it('the daily cap binds even with a fresh velocity window', () => {
    const r = computeAward(at({ capped: 200, velTotal: 0, dayTotal: DAILY_XP_CAP - 10 }));
    expect(r.awarded).toBe(10);
    expect(r.velTotal).toBe(10);
  });

  it('an expired window resets rather than slides', () => {
    const r = computeAward(
      at({ capped: 50, velTotal: VELOCITY_BUDGET, velWindowStart: now - VELOCITY_WINDOW_MS - 1 }),
    );
    expect(r.awarded).toBe(50);
    expect(r.velTotal).toBe(50);
    expect(r.velWindowStart).toBe(now);
  });

  it('a window one millisecond inside the boundary does NOT reset', () => {
    const r = computeAward(
      at({ capped: 50, velTotal: VELOCITY_BUDGET, velWindowStart: now - VELOCITY_WINDOW_MS }),
    );
    expect(r.awarded).toBe(0);
  });

  it('never returns a negative award', () => {
    expect(computeAward(at({ capped: 10, velTotal: VELOCITY_BUDGET + 500 })).awarded).toBe(0);
  });
});

// ── The store tiers ─────────────────────────────────────────────────────────

describe('claimXp storage tiers', () => {
  const args = { capped: 50, now: 1_700_000_000_000, todayUTC: '2026-09-25' };

  it('prefers D1 and does not touch KV at all', async () => {
    const db = makeD1();
    const kv = makeKV();
    const r = await claimXp({ AI_QUOTA_DB: db, XP_VELOCITY: kv }, 'u', args);
    expect(r).toEqual({ awarded: 50, store: 'd1' });
    // THE POINT OF THE WHOLE CHANGE: zero KV operations on the hot path.
    expect(kv.stats).toEqual({ gets: 0, puts: 0 });
    expect(db.stats.writes).toBe(1);
  });

  it('falls back to KV, with the SAME keys so an in-flight window survives', async () => {
    const kv = makeKV();
    const r = await claimXp({ XP_VELOCITY: kv }, 'u', args);
    expect(r).toEqual({ awarded: 50, store: 'kv' });
    expect([...kv.store.keys()].sort()).toEqual(['xpday:u:2026-09-25', 'xpv2:u']);
  });

  it('falls back to KV when D1 throws', async () => {
    const kv = makeKV();
    const db = {
      prepare: () => ({
        bind: () => ({
          first: async () => {
            throw new Error('d1 down');
          },
          run: async () => {},
        }),
        run: async () => {},
      }),
    };
    const r = await claimXp({ AI_QUOTA_DB: db, XP_VELOCITY: kv }, 'u', args);
    expect(r?.store).toBe('kv');
  });

  it('returns null when neither store is bound', async () => {
    expect(await claimXp({}, 'u', args)).toBeNull();
  });

  it('writes nothing when the award is 0 — in either tier', async () => {
    const db = makeD1();
    db.rows.set('u', {
      vel_total: VELOCITY_BUDGET,
      vel_window_start: args.now,
      day_total: 0,
      day_date: args.todayUTC,
      updated_at: args.now,
    });
    expect((await claimXp({ AI_QUOTA_DB: db }, 'u', args)).awarded).toBe(0);
    expect(db.stats.writes).toBe(0);

    const kv = makeKV();
    kv.store.set('xpv2:u', JSON.stringify({ total: VELOCITY_BUDGET, windowStart: args.now }));
    expect((await claimXp({ XP_VELOCITY: kv }, 'u', args)).awarded).toBe(0);
    expect(kv.stats.puts).toBe(0);
  });

  it('a corrupt KV entry reads as a fresh window, never as unlimited XP', async () => {
    const kv = makeKV();
    kv.store.set('xpv2:u', 'not json');
    kv.store.set('xpday:u:2026-09-25', '{{{');
    const r = await claimXp({ XP_VELOCITY: kv }, 'u', { ...args, capped: 10_000 });
    // Clamped by the budget, not waved through.
    expect(r.awarded).toBe(VELOCITY_BUDGET);
  });

  it('a stored day total from another date does not carry forward', async () => {
    const db = makeD1();
    db.rows.set('u', {
      vel_total: 0,
      vel_window_start: 0,
      day_total: DAILY_XP_CAP,
      day_date: '2026-09-24',
      updated_at: args.now,
    });
    expect((await claimXp({ AI_QUOTA_DB: db }, 'u', args)).awarded).toBe(50);
  });
});

// ── The real handler ────────────────────────────────────────────────────────

describe('/api/award — the real handler', () => {
  it('caps to the activity allowlist and accumulates across calls', async () => {
    const db = makeD1();
    const env = { ...baseEnv, AI_QUOTA_DB: db };
    // `grammar` is capped at 80 by the allowlist, whatever is claimed.
    expect((await award(env, { activityType: 'grammar', claimedXp: 500 })).body).toEqual({
      awarded: ACTIVITY_XP_MAP.grammar,
      activityType: 'grammar',
    });
    const row = db.rows.get('uid-1');
    expect(row.vel_total).toBe(ACTIVITY_XP_MAP.grammar);
    // Second award in the same window adds to it.
    await award(env, { activityType: 'grammar', claimedXp: 500 });
    expect(db.rows.get('uid-1').vel_total).toBe(ACTIVITY_XP_MAP.grammar * 2);
  });

  it('runs the velocity budget down to zero over repeated awards', async () => {
    const db = makeD1();
    const env = { ...baseEnv, AI_QUOTA_DB: db };
    let total = 0;
    for (let i = 0; i < 12; i++) {
      total += (await award(env, { activityType: 'lesson', claimedXp: 210 })).body.awarded;
    }
    expect(total).toBe(VELOCITY_BUDGET);
    expect((await award(env, { activityType: 'lesson', claimedXp: 210 })).body.awarded).toBe(0);
  });

  it('rejects an unknown activity type before touching any store', async () => {
    const db = makeD1();
    const r = await award(
      { ...baseEnv, AI_QUOTA_DB: db },
      { activityType: 'made_up', claimedXp: 1 },
    );
    expect(r.status).toBe(400);
    expect(r.body.error).toBe('invalid_activity_type');
    expect(db.stats.writes).toBe(0);
  });

  it('rejects a non-integer or out-of-range claim', async () => {
    const env = { ...baseEnv, AI_QUOTA_DB: makeD1() };
    for (const claimedXp of [0, -5, 1.5, 10_001, '80']) {
      expect((await award(env, { activityType: 'grammar', claimedXp })).body.error).toBe(
        'invalid_xp',
      );
    }
  });

  // THE ANTI-SILENCE ASSERTION. With no store the caps cannot be applied, and
  // the previous version fell through logging nothing distinguishable — a day
  // with the XP economy uncapped looked exactly like a healthy one.
  it('with no store: awards the allowlist cap AND says the caps are off', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const r = await award({ ...baseEnv }, { activityType: 'grammar', claimedXp: 500 });
    expect(r.body).toEqual({ awarded: ACTIVITY_XP_MAP.grammar, activityType: 'grammar' });
    expect(warn.mock.calls.flat().join(' ')).toContain('xp_caps_unavailable');
  });

  it('a signed-out request is 401 and never reaches a store', async () => {
    const { getFirebaseUid } = await import('../../functions/api/_verifyToken.js');
    getFirebaseUid.mockResolvedValueOnce(null);
    const db = makeD1();
    const r = await award(
      { ...baseEnv, AI_QUOTA_DB: db },
      { activityType: 'grammar', claimedXp: 5 },
    );
    expect(r.status).toBe(401);
    expect(db.stats.writes).toBe(0);
  });
});
