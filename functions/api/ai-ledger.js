// functions/api/ai-ledger.js
//
// POST /api/ai-ledger — the monthly AI budget ledger, for the owner's report
// (.github/workflows/ai-ledger.yml). Read-only.
//
// WHY A ROUTE AND NOT A D1 QUERY (2026-09-29). The report first queried D1
// through the Cloudflare API, and CI's token has no D1 scope ("Authentication
// error", code 10000, on the database listing). The ledger was otherwise
// readable only through /api/ai-quota-status, which needs a signed-in
// learner's token. This route reads the same rows through the Pages binding
// the budget already uses, behind the credential the calibration and
// observatory sweeps use (CRON_SECRET or the self-provisioned
// CALIBRATION_SECRET, timing-safe) — so the report needs no new secret and no
// owner action.
//
// It returns the current month and the previous one, so a change in the daily
// rate can be read against a baseline. No AI call, no budget charge, and
// nothing is written.

import { getBudgetStatus } from './_aiBudget.js';

function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

/** 'YYYY-MM' of the month before `month`. */
export function previousMonth(month) {
  const [y, m] = month.split('-').map(Number);
  return m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, '0')}`;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.CRON_SECRET && !env.CALIBRATION_SECRET) {
    return json(503, { error: 'calibration_secret_missing' });
  }
  const secret = request.headers.get('x-cron-secret') || '';
  const authorized =
    (env.CRON_SECRET && timingSafeEqual(secret, env.CRON_SECRET)) ||
    (env.CALIBRATION_SECRET && timingSafeEqual(secret, env.CALIBRATION_SECRET));
  if (!authorized) return json(401, { error: 'unauthorized' });

  if (!env.AI_QUOTA_DB && !env.PUSH_SUBSCRIPTIONS) return json(503, { error: 'ledger_unbound' });

  const now = new Date();
  const current = await getBudgetStatus(env);
  const previous = await getBudgetStatus(env, previousMonth(current.month));
  const day = now.getUTCDate();
  return json(200, {
    store: env.AI_QUOTA_DB ? 'd1' : 'kv',
    asOf: now.toISOString(),
    current: {
      ...current,
      daysElapsed: day,
      perDayMicroUsd: Math.round(current.spentMicroUsd / day),
    },
    previous,
  });
}
