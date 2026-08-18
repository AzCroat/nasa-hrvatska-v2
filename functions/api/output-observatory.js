// functions/api/output-observatory.js
//
// OUTPUT OBSERVATORY (owner directive, 2026-08-18): the sweep over what the
// AI endpoints ACTUALLY served users. The middleware chokepoint persists two
// kinds of records into KV (see functions/_middleware.js buildObserver):
//   obs:i:*  — contamination INCIDENTS (Cyrillic was transliterated on the
//              way out; the user saw clean text, but the model drifted)
//   obs:s:*  — a ~2% random sample of clean AI output (truncated, 14-day TTL)
// This endpoint lists incidents and re-screens the samples with the SAME
// checks the static content lint uses (containsCyrillic + the shared Serbism
// rules in _serbisms.js — never fork them), so a model drifting toward
// Serbian lexicon is machine-found within a week instead of family-found in
// the field ("At the Bakery", 2026-08-17).
//
// DISPATCH-ONLY, server-to-server: gated exactly like golden-calibration
// (CRON_SECRET or the self-provisioned CALIBRATION_SECRET, timing-safe).
// Makes ZERO Claude calls and spends nothing — pure KV reads + regex — so it
// needs no budget ceiling. Called weekly by output-observatory.yml, which
// fails red on any incident or Serbism hit.

import { findSerbism } from './_serbisms.js';
import { containsCyrillic } from './_croatianGuard.js';

const MAX_INCIDENTS = 50;
const MAX_SAMPLES = 200;

function timingSafeEqual(a, b) {
  const enc = new TextEncoder();
  const aBytes = enc.encode(String(a));
  const bBytes = enc.encode(String(b));
  const len = Math.max(aBytes.length, bBytes.length);
  let diff = aBytes.length === bBytes.length ? 0 : 1;
  for (let i = 0; i < len; i++) {
    diff |= (aBytes[i] || 0) ^ (bBytes[i] || 0);
  }
  return diff === 0;
}

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

async function listAll(kv, prefix, cap) {
  const out = [];
  let cursor;
  while (out.length < cap) {
    const page = await kv.list({ prefix, cursor, limit: Math.min(1000, cap - out.length) });
    out.push(...page.keys.map((k) => k.name));
    if (page.list_complete || !page.cursor) break;
    cursor = page.cursor;
  }
  return out.slice(0, cap);
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

  const kv = env.KV || env.PUSH_SUBSCRIPTIONS;
  if (!kv) return json(503, { error: 'kv_missing' });

  // ── Incidents: every one is a finding by definition ────────────────────────
  const incidentKeys = await listAll(kv, 'obs:i:', MAX_INCIDENTS);
  const incidents = [];
  for (const key of incidentKeys) {
    try {
      const raw = await kv.get(key);
      const rec = raw ? JSON.parse(raw) : null;
      if (rec)
        incidents.push({
          key,
          path: rec.path,
          at: rec.at,
          snippet: String(rec.text || '').slice(0, 200),
        });
    } catch {
      incidents.push({ key, path: 'unreadable', at: null, snippet: '' });
    }
  }

  // ── Samples: re-screen with the shared rules ───────────────────────────────
  const sampleKeys = await listAll(kv, 'obs:s:', MAX_SAMPLES);
  const findings = [];
  let checked = 0;
  for (const key of sampleKeys) {
    let rec = null;
    try {
      const raw = await kv.get(key);
      rec = raw ? JSON.parse(raw) : null;
    } catch {
      /* unreadable sample — skip */
    }
    if (!rec || typeof rec.text !== 'string') continue;
    checked++;
    if (containsCyrillic(rec.text)) {
      findings.push({ key, path: rec.path, at: rec.at, kind: 'cyrillic' });
      continue;
    }
    const serb = findSerbism(rec.text);
    if (serb) {
      findings.push({
        key,
        path: rec.path,
        at: rec.at,
        kind: 'serbism',
        match: serb.match,
        use: serb.use,
      });
    }
  }

  const clean = incidents.length === 0 && findings.length === 0;
  return json(200, {
    at: new Date().toISOString(),
    incidents,
    samples: { stored: sampleKeys.length, checked, findings },
    clean,
  });
}
