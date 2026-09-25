/**
 * XP velocity + daily cap storage — D1 primary, KV fallback.
 *
 * WHY THIS FILE EXISTS: `/api/award` was the app's ONLY unconditional
 * per-request KV WRITER, and that is what put the account against Cloudflare's
 * free Workers KV ceiling (owner report, 2026-09-25 — "KV operations are
 * nearing the daily cap", 50% used). It wrote TWO keys on every XP award
 * (`xpv2:<uid>` and `xpday:<uid>:<date>`), so the 1,000-writes/day free tier
 * allowed **~500 XP awards per day across every learner combined** — roughly
 * ten engaged sessions. D1's free tier is 100,000 writes/day, a hundred times
 * the headroom, and `AI_QUOTA_DB` is already bound for the AI quota and the
 * budget ledger.
 *
 * It was the only one left. `_rateLimit.js`, `_aiQuota.js` and `_aiBudget.js`
 * are all D1-primary with KV behind them; `award.js` was written before that
 * pattern existed (2026-04-24) and nothing carried it across — the same
 * one-copy-of-a-pattern-never-updated shape this repo keeps finding.
 *
 * TWO THINGS MADE IT WORSE THAN A BILL:
 *
 *  1. **Exceeding the cap silently removed the anti-cheat.** A `put` that
 *     429s throws, `award.js` caught it and fell through to "allowlist-only
 *     cap" — so on a KV-exhausted day the 600-XP/10-min velocity budget and
 *     the 2,500/day cap were not enforced AT ALL, and nothing anywhere
 *     recorded that they had stopped. `claimXp` now returns the store it used
 *     so the caller can say which cap it actually applied.
 *  2. **KV is eventually consistent**, so `award.js`'s comment — "write-back
 *     both keys synchronously — prevents concurrent requests from each reading
 *     the same pre-update state" — was not true of the store underneath it.
 *     Ordering the writes does not order the reads. D1 is read-your-writes on
 *     the primary, so the same JS logic is strictly less racy there. It is not
 *     claimed to be atomic: `computeAward` still reads, decides and writes.
 *
 * THE CLAMP LIVES HERE, ONCE, AS A PURE FUNCTION, because the previous test
 * file re-implemented it (`award-worker.test.js`'s own `computeAwarded`, which
 * never imported production and did not know the daily cap exists — the
 * "a test that restates production data cannot check production data" trap).
 * Both backends call the same `computeAward`, and the tests drive it and the
 * real handler rather than a copy.
 */

export const VELOCITY_BUDGET = 600; // XP per 10-min window
export const VELOCITY_WINDOW_MS = 10 * 60 * 1000;
export const VELOCITY_TTL_S = 700; // KV only: 10 min + 2 min buffer
export const DAILY_XP_CAP = 2500;
export const DAILY_TTL_S = 90000; // KV only: 25 h — covers UTC date drift
const D1_ROW_TTL_MS = 26 * 60 * 60 * 1000;

/**
 * The one clamp. Pure: no clock, no store.
 *
 * @param {object} a
 * @param {number} a.capped   claimedXp already clamped to the activity allowlist
 * @param {number} a.velTotal XP counted in the current velocity window
 * @param {number} a.velWindowStart ms timestamp the window opened
 * @param {number} a.dayTotal XP counted today (0 if the stored date is not today)
 * @param {number} a.now      ms
 * @returns {{awarded:number, velTotal:number, velWindowStart:number, dayTotal:number}}
 */
export function computeAward({ capped, velTotal, velWindowStart, dayTotal, now }) {
  // The window RESETS rather than slides — unchanged from the KV version.
  const expired = now - velWindowStart > VELOCITY_WINDOW_MS;
  const baseVel = expired ? 0 : velTotal;
  const start = expired ? now : velWindowStart;

  const velRemaining = Math.max(0, VELOCITY_BUDGET - baseVel);
  const dayRemaining = Math.max(0, DAILY_XP_CAP - dayTotal);
  const awarded = Math.max(0, Math.min(capped, velRemaining, dayRemaining));

  return {
    awarded,
    velTotal: baseVel + awarded,
    velWindowStart: start,
    dayTotal: dayTotal + awarded,
  };
}

// ── D1 tier ──────────────────────────────────────────────────────────────────

let _tableReady = false;

async function ensureTable(db) {
  if (_tableReady) return;
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS xp_velocity (
         uid              TEXT    PRIMARY KEY,
         vel_total        INTEGER NOT NULL DEFAULT 0,
         vel_window_start INTEGER NOT NULL DEFAULT 0,
         day_total        INTEGER NOT NULL DEFAULT 0,
         day_date         TEXT    NOT NULL DEFAULT '',
         updated_at       INTEGER NOT NULL DEFAULT 0
       )`,
    )
    .run();
  _tableReady = true;
}

async function d1Claim(db, uid, { capped, now, todayUTC }) {
  await ensureTable(db);

  // Probabilistic cleanup, the `_rateLimit.js` shape: D1 has no TTL, and a row
  // untouched for 26 h can say nothing about either cap.
  if (Math.random() < 0.01) {
    db.prepare('DELETE FROM xp_velocity WHERE updated_at < ?1')
      .bind(now - D1_ROW_TTL_MS)
      .run()
      .catch(() => {});
  }

  const row = await db
    .prepare(
      'SELECT vel_total, vel_window_start, day_total, day_date FROM xp_velocity WHERE uid = ?1',
    )
    .bind(uid)
    .first();

  const next = computeAward({
    capped,
    velTotal: Number(row?.vel_total) || 0,
    velWindowStart: Number(row?.vel_window_start) || 0,
    // A stored date that is not today counts as zero — never carried forward.
    dayTotal: row?.day_date === todayUTC ? Number(row.day_total) || 0 : 0,
    now,
  });

  // Nothing to record when nothing was awarded — the same wasted-write guard
  // the KV version had, and it matters more here because this is the write.
  if (next.awarded > 0) {
    await db
      .prepare(
        `INSERT INTO xp_velocity (uid, vel_total, vel_window_start, day_total, day_date, updated_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6)
         ON CONFLICT(uid) DO UPDATE
         SET vel_total = ?2, vel_window_start = ?3, day_total = ?4, day_date = ?5, updated_at = ?6`,
      )
      .bind(uid, next.velTotal, next.velWindowStart, next.dayTotal, todayUTC, now)
      .run();
  }

  return next.awarded;
}

// ── KV tier (unchanged keys, so an in-flight window survives the switch) ─────

async function kvClaim(kv, uid, { capped, now, todayUTC }) {
  const velKey = `xpv2:${uid}`;
  const dayKey = `xpday:${uid}:${todayUTC}`;
  const [rawVel, rawDay] = await Promise.all([kv.get(velKey), kv.get(dayKey)]);

  let velTotal = 0;
  let velWindowStart = now;
  if (rawVel) {
    try {
      const e = JSON.parse(rawVel);
      velTotal = Number(e?.total) || 0;
      velWindowStart = Number(e?.windowStart) || now;
    } catch {
      /* a corrupt entry reads as a fresh window — never as unlimited XP */
    }
  }
  let dayTotal = 0;
  if (rawDay) {
    try {
      dayTotal = Number(JSON.parse(rawDay)?.total) || 0;
    } catch {
      /* same */
    }
  }

  const next = computeAward({ capped, velTotal, velWindowStart, dayTotal, now });
  if (next.awarded > 0) {
    await Promise.all([
      kv.put(velKey, JSON.stringify({ total: next.velTotal, windowStart: next.velWindowStart }), {
        expirationTtl: VELOCITY_TTL_S,
      }),
      kv.put(dayKey, JSON.stringify({ total: next.dayTotal }), { expirationTtl: DAILY_TTL_S }),
    ]);
  }
  return next.awarded;
}

/**
 * Apply both caps and record the result.
 *
 * @returns {Promise<{awarded:number, store:'d1'|'kv'}|null>} null when NEITHER
 *   store answered — the caller must then decide, out loud, what to do without
 *   a velocity cap. It is never reported as a successful claim.
 */
export async function claimXp(env, uid, { capped, now, todayUTC }) {
  const db = env?.AI_QUOTA_DB || null;
  if (db) {
    try {
      return { awarded: await d1Claim(db, uid, { capped, now, todayUTC }), store: 'd1' };
    } catch (e) {
      console.warn('[award] xp_velocity D1 unavailable:', e?.message);
    }
  }
  const kv = env?.XP_VELOCITY || null;
  if (kv) {
    try {
      return { awarded: await kvClaim(kv, uid, { capped, now, todayUTC }), store: 'kv' };
    } catch (e) {
      console.warn('[award] xp_velocity KV unavailable:', e?.message);
    }
  }
  return null;
}

/** Test hook — the table-created flag is module state. */
export function _resetXpStore() {
  _tableReady = false;
}
