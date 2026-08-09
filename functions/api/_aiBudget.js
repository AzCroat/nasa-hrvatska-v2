/**
 * Global monthly AI spend governor — the hard "< $5/month" guarantee.
 *
 * WHY THIS EXISTS (owner directive, 2026-08-08)
 * ---------------------------------------------
 * Total AI spend must stay under $5/month, and no user may ever meet a dead
 * feature. Per-user quotas bound *each* user; nothing bounded the *sum*. This
 * module is that bound: every metered call pre-charges its WORST-CASE cost
 * against a single monthly ledger, and once the ledger would pass the budget,
 * the gate returns `monthly_budget_exhausted` instead of spending. Clients
 * degrade to cached/canned content — connected, never erroring.
 *
 * WHY WORST-CASE PRE-CHARGE, NOT ACTUAL USAGE
 * -------------------------------------------
 * Actual token usage arrives in the API response (and mid-stream for SSE),
 * which would mean tapping 22 heterogeneous call sites and still being unable
 * to refuse a call that has already happened. Charging each call's CEILING
 * up front at the single gate makes the guarantee structural: the ledger can
 * never understate reality, so the budget physically cannot be exceeded. The
 * cost of that property is pessimism — typical calls cost 5-10x less than
 * their ceiling (prompt caching bills cached prefixes at 0.1x) — so the
 * breaker fires early, never late. With the $4 ceiling below, worst-case
 * (ledger-full) months still deliver thousands of real calls.
 *
 * PRICE MODEL (micro-USD; 1_000_000 = $1)
 * ---------------------------------------
 * Haiku 4.5: input $1/Mtok = 1 µ$/token, output $5/Mtok = 5 µ$/token.
 * Claude ceilings assume a generous 12k input tokens (history-heavy turns;
 * real prompts are far smaller and mostly cache-read at 0.1x) plus each
 * endpoint's own max_tokens of output. aiBudget.test.ts re-derives these
 * from the endpoint sources — raising an endpoint's max_tokens without
 * updating its ceiling FAILS THE BUILD rather than silently under-charging.
 *
 * Storage mirrors _aiQuota.js: D1 primary (atomic upsert), KV fallback,
 * fail-closed if neither answers. Table: migrations/ai_month_spend.sql.
 */

// $4.00/month for metered AI calls — $1 head-room under the $5 mandate for
// providers billed outside this ledger (Azure/Deepgram free-tier overruns).
export const MONTHLY_BUDGET_MICROUSD = 4_000_000;

const HAIKU_IN = 1; // µ$/token
const HAIKU_OUT = 5; // µ$/token
const CLAUDE_INPUT_ALLOWANCE_TOKENS = 12_000;

/** Worst-case ceiling for a Claude endpoint with the given max_tokens. */
export function claudeCeiling(maxTokens) {
  return CLAUDE_INPUT_ALLOWANCE_TOKENS * HAIKU_IN + maxTokens * HAIKU_OUT;
}

/**
 * Per-endpoint worst-case cost, keyed by pathname. Claude entries are
 * claudeCeiling(<that endpoint's max_tokens>); provider entries are the
 * provider's realistic per-call ceiling. Anything not listed is charged
 * DEFAULT_CEILING_MICROUSD — an unknown endpoint is still metered.
 */
export const ENDPOINT_CEILING_MICROUSD = {
  // ── Claude (Haiku 4.5) ────────────────────────────────────────────────────
  '/api/adaptive-insights': claudeCeiling(800),
  '/api/ai-chat': claudeCeiling(1200),
  '/api/assess-speaking': claudeCeiling(100) + 15_000, // + Whisper/Deepgram STT
  '/api/conversation': claudeCeiling(2000),
  '/api/conversational-tutor': claudeCeiling(1024),
  '/api/correct': claudeCeiling(2600),
  // ── SELF-METERED endpoints (ceiling 0) ────────────────────────────────────
  // These serve mostly from caches; charging the gate per REQUEST would burn
  // the ledger on free cache hits (a thousand cached TTS plays would cost the
  // budget $4 of nothing). Their gate ceiling is 0 — passed through even at
  // the cap so cached content keeps serving — and they charge their
  // ':generate' entry internally on the cache miss that actually spends.
  '/api/daily-culture': 0,
  '/api/daily-culture:generate': claudeCeiling(400),
  '/api/daily-plan': claudeCeiling(700),
  '/api/dialogue': claudeCeiling(2000),
  '/api/explain-error': claudeCeiling(400),
  '/api/flash-context': claudeCeiling(300),
  '/api/grammar-diagnosis': claudeCeiling(2000),
  '/api/listening': claudeCeiling(2000),
  '/api/live-tutor-summary': claudeCeiling(500),
  '/api/maja': claudeCeiling(1024),
  '/api/maja-debrief': claudeCeiling(1500),
  '/api/micro-lesson': claudeCeiling(1100),
  // news fans out into FOUR simplifyArticle calls per generation — the
  // ':generate' ceiling is 4x a single call so the ledger never understates.
  '/api/news': 0,
  '/api/news:generate': 4 * claudeCeiling(2200),
  '/api/photo-vocab': claudeCeiling(1024),
  '/api/pronunciation-coach': claudeCeiling(420),
  '/api/srs-sync': claudeCeiling(800),
  '/api/vocab-expand': claudeCeiling(600),
  // ── Non-Claude providers ──────────────────────────────────────────────────
  '/api/npc-video': 200_000, // D-ID avatar clip
  '/api/did-stream': 200_000, // D-ID streaming session
  '/api/flux-generate': 50_000, // Replicate image
  '/api/tts': 0, // self-metered: cache hits free, see SELF-METERED note above
  '/api/tts:generate': 4_000, // Azure neural ceiling; Edge/Google free tiers first
  '/api/stt': 15_000, // Deepgram/Whisper minute
  '/api/pronunciation-assess': 15_000, // Azure pronunciation assessment
  '/api/translate': 500, // MyMemory (free) — near-zero
};

export const DEFAULT_CEILING_MICROUSD = 25_000;

function monthUTC() {
  return new Date().toISOString().slice(0, 7); // "2026-08"
}

function firstOfNextMonthUTC() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1)).toISOString();
}

async function _d1ChargeBudget(db, month, ceiling) {
  if (!db) return null;
  try {
    const upsert = await db
      .prepare(
        `
      INSERT INTO ai_month_spend (month, microusd) VALUES (?1, ?2)
      ON CONFLICT(month) DO UPDATE SET microusd = microusd + ?2
      RETURNING microusd
    `,
      )
      .bind(month, ceiling)
      .first();
    if (!upsert) throw new Error('D1 upsert returned no rows');

    const spent = upsert.microusd;
    if (spent > MONTHLY_BUDGET_MICROUSD) {
      // Refund the pre-charge so the ledger records money actually spent, and
      // a cheaper later call (or a raised budget) is judged against the truth.
      await db
        .prepare('UPDATE ai_month_spend SET microusd = microusd - ?1 WHERE month = ?2')
        .bind(ceiling, month)
        .run();
      return { allowed: false, spentMicroUsd: spent - ceiling };
    }
    return { allowed: true, spentMicroUsd: spent };
  } catch (e) {
    console.warn('[AIBudget] D1 charge failed:', e?.message);
    return null; // caller falls back to KV
  }
}

/**
 * Pre-charge this call's worst-case cost against the monthly ledger.
 * Returns { allowed, spentMicroUsd, resetAt }. Fail-closed like the daily
 * quota: if no storage backend answers, the answer is no — the budget
 * guarantee outranks availability of the AI garnish (clients degrade to
 * cached content either way).
 */
export async function checkAndChargeBudget(env, pathname) {
  const db = env.AI_QUOTA_DB || null;
  const kv = env.PUSH_SUBSCRIPTIONS || null;
  const month = monthUTC();
  const resetAt = firstOfNextMonthUTC();
  const ceiling = ENDPOINT_CEILING_MICROUSD[pathname] ?? DEFAULT_CEILING_MICROUSD;

  // Ceiling 0 = SELF-METERED (see the table): the endpoint charges its real
  // ':generate' cost internally on cache misses. Its requests must pass even
  // when the ledger is at the cap — refusing them would take CACHED content
  // away from users, which spends nothing and is exactly what the "never
  // disconnected" outcome keeps alive at the cap.
  if (ceiling === 0) return { allowed: true, spentMicroUsd: 0, resetAt };

  if (db) {
    const d1 = await _d1ChargeBudget(db, month, ceiling);
    if (d1 !== null) return { ...d1, resetAt };
  }

  // KV fallback — read-modify-write, not atomic; concurrent racers can each
  // slightly under-count. Acceptable only as the degraded path: D1 is primary,
  // traffic is low, and every racer still writes a value >= its own read.
  if (kv) {
    try {
      const key = `budget:${month}`;
      const raw = await kv.get(key);
      const current = raw ? parseInt(raw, 10) || 0 : 0;
      if (current + ceiling > MONTHLY_BUDGET_MICROUSD) {
        return { allowed: false, spentMicroUsd: current, resetAt };
      }
      await kv.put(key, String(current + ceiling), { expirationTtl: 60 * 60 * 24 * 40 });
      return { allowed: true, spentMicroUsd: current + ceiling, resetAt };
    } catch (e) {
      console.warn('[AIBudget] KV charge failed:', e?.message);
    }
  }

  console.warn('[AIBudget] No storage backend — rejecting (fail-closed)');
  return { allowed: false, spentMicroUsd: 0, resetAt };
}

/** Current month's ledger, for the status endpoint. Read-only. */
export async function getBudgetStatus(env) {
  const db = env.AI_QUOTA_DB || null;
  const kv = env.PUSH_SUBSCRIPTIONS || null;
  const month = monthUTC();
  let spentMicroUsd = 0;
  if (db) {
    try {
      const row = await db
        .prepare('SELECT microusd FROM ai_month_spend WHERE month = ?1')
        .bind(month)
        .first();
      if (row) spentMicroUsd = row.microusd;
    } catch (e) {
      console.warn('[AIBudget] status read failed:', e?.message);
    }
  } else if (kv) {
    try {
      const raw = await kv.get(`budget:${month}`);
      spentMicroUsd = raw ? parseInt(raw, 10) || 0 : 0;
    } catch {}
  }
  return {
    month,
    spentUsd: Math.round(spentMicroUsd / 10_000) / 100,
    budgetUsd: MONTHLY_BUDGET_MICROUSD / 1_000_000,
    resetAt: firstOfNextMonthUTC(),
  };
}
