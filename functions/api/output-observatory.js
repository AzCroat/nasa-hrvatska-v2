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

// PROMPT ATTRIBUTION (2026-08-21): observations from instrumented endpoints
// carry { promptId, promptVersion }, so the sweep no longer reports only
// "something went wrong on /api/dialogue" — it reports which prompt, at which
// version, and how many of its samples came back clean. That turns "did last
// week's prompt edit cause this?" from a guess into a lookup. Records with no
// tag are attributed to '(uninstrumented)' — the honest label; nothing is
// inferred from the path.

import { findSerbism } from './_serbisms.js';
import { containsCyrillic } from './_croatianGuard.js';

const MAX_INCIDENTS = 50;
const MAX_SAMPLES = 200;
const UNINSTRUMENTED = '(uninstrumented)';

/**
 * `id@version` for a stored observation, or the honest "we don't know" label.
 *
 * A record from a MULTI-PROMPT response (2026-08-24 — golden-calibration runs
 * both evaluators in one dispatch) carries `prompts` instead of a single
 * promptId, and groups under all its tags joined by ` + `. Without this branch
 * it would fall through to UNINSTRUMENTED, which would be the opposite of the
 * truth: that endpoint is instrumented, it just cannot be described by one tag.
 */
function promptKeyOf(rec) {
  if (Array.isArray(rec?.prompts) && rec.prompts.length > 0) {
    return rec.prompts.map((p) => `${p.id}@${p.version}`).join(' + ');
  }
  return rec?.promptId && rec?.promptVersion
    ? `${rec.promptId}@${rec.promptVersion}`
    : UNINSTRUMENTED;
}

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
  // prompt tag → { samples, findings } across BOTH record kinds.
  const byPrompt = new Map();
  const tally = (tag, field) => {
    const entry = byPrompt.get(tag) || { prompt: tag, samples: 0, findings: 0 };
    entry[field]++;
    byPrompt.set(tag, entry);
  };

  for (const key of incidentKeys) {
    try {
      const raw = await kv.get(key);
      const rec = raw ? JSON.parse(raw) : null;
      if (rec) {
        const prompt = promptKeyOf(rec);
        incidents.push({
          key,
          path: rec.path,
          at: rec.at,
          prompt,
          snippet: String(rec.text || '').slice(0, 200),
        });
        tally(prompt, 'samples');
        tally(prompt, 'findings');
      }
    } catch {
      incidents.push({ key, path: 'unreadable', at: null, prompt: UNINSTRUMENTED, snippet: '' });
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
    const prompt = promptKeyOf(rec);
    tally(prompt, 'samples');
    if (containsCyrillic(rec.text)) {
      findings.push({ key, path: rec.path, at: rec.at, prompt, kind: 'cyrillic' });
      tally(prompt, 'findings');
      continue;
    }
    const serb = findSerbism(rec.text);
    if (serb) {
      findings.push({
        key,
        path: rec.path,
        at: rec.at,
        prompt,
        kind: 'serbism',
        match: serb.match,
        use: serb.use,
      });
      tally(prompt, 'findings');
    }
  }

  // Worst first — a sweep is read top-down, and the prompt with findings is
  // the one the reader is looking for.
  const prompts = [...byPrompt.values()].sort(
    (a, b) => b.findings - a.findings || b.samples - a.samples,
  );

  const clean = incidents.length === 0 && findings.length === 0;
  return json(200, {
    at: new Date().toISOString(),
    incidents,
    samples: { stored: sampleKeys.length, checked, findings },
    prompts,
    clean,
  });
}
