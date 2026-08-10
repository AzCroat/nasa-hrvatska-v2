// Cloudflare Pages Function — API key health check
//
// Returns a JSON object showing which AI/TTS/STT services are configured.
// Checks presence and basic validity of env vars — does NOT make live API calls
// (avoids costs, latency, and side effects in health checks).
//
// GET /api/health
// Response: {
//   ok: boolean,
//   services: {
//     tts:  { azure: bool, google: bool, edge: bool, anyTts: bool },
//     stt:  { deepgram: bool, openai: bool, anyStt: bool },
//     ai:   { anthropic: bool, openai: bool, anyAI: bool },
//     push: { vapid: bool }
//   },
//   env: string,
//   ts:  number
// }
//
// Only accessible from allowed origins — no auth token required.
// Key values are NEVER included in the response.

import { isAllowedOrigin } from './_helpers.js';

function healthCorsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || 'https://nasahrvatska.com',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };
}

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('origin') || '';
  return new Response(null, { status: 204, headers: healthCorsHeaders(origin) });
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const origin = request.headers.get('origin') || request.headers.get('referer') || '';
  const isDev = env.ENVIRONMENT !== 'production';

  // Allow Cloudflare monitoring (no origin) and app origins
  if (origin && !isAllowedOrigin(origin, isDev)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: healthCorsHeaders(origin),
    });
  }

  // ── Check TTS services ────────────────────────────────────────────────────
  const azureTts = !!(env.AZURE_TTS_KEY && env.AZURE_TTS_KEY.length > 10);
  const googleTts = !!(
    (env.FIREBASE_SERVICE_ACCOUNT_JSON || env.GOOGLE_TTS_KEY) &&
    (env.FIREBASE_SERVICE_ACCOUNT_JSON || env.GOOGLE_TTS_KEY || '').length > 10
  );
  const edgeTts = !!(env.EDGE_TTS_TOKEN && env.EDGE_TTS_TOKEN.length > 4);

  // ── Check STT services ────────────────────────────────────────────────────
  const deepgramStt = !!(env.DEEPGRAM_API_KEY && env.DEEPGRAM_API_KEY.length > 10);
  const openaiStt = !!(env.OPENAI_API_KEY && env.OPENAI_API_KEY.length > 10);

  // ── Check AI services ─────────────────────────────────────────────────────
  const anthropicAI = !!(env.ANTHROPIC_API_KEY && env.ANTHROPIC_API_KEY.length > 10);
  const openaiAI = !!(env.OPENAI_API_KEY && env.OPENAI_API_KEY.length > 10);

  // ── Check push notifications ──────────────────────────────────────────────
  const vapid = !!(env.VAPID_PRIVATE_KEY && env.VAPID_PRIVATE_KEY.length > 10);

  // ── Weekly backup recency (backup-progress.js) ────────────────────────────
  // Week key + completion timestamp only — never document counts (user-count
  // disclosure) and never contents. `null` means no snapshot exists yet.
  let backup = { lastWeek: null, completedAt: null, clientLastAt: null };
  try {
    const kv = env.BACKUP_KV || env.KV || env.PUSH_SUBSCRIPTIONS || null;
    if (kv) {
      const lastWeek = await kv.get('backup:latest');
      if (lastWeek) {
        const idx = JSON.parse((await kv.get(`backup:${lastWeek}:index`)) || 'null');
        backup.lastWeek = lastWeek;
        backup.completedAt = idx?.completedAt || null;
      }
      // Per-user client tee (backup-mine.js) — timestamp of the newest tee.
      backup.clientLastAt = (await kv.get('backup:client:lastAt')) || null;
    }
  } catch {
    /* health must never fail because a status read did */
  }

  const services = {
    tts: {
      azure: azureTts,
      google: googleTts,
      edge: edgeTts,
      anyTts: azureTts || googleTts || edgeTts,
    },
    stt: {
      deepgram: deepgramStt,
      openai: openaiStt,
      anyStt: deepgramStt || openaiStt,
    },
    ai: {
      anthropic: anthropicAI,
      openai: openaiAI,
      anyAI: anthropicAI || openaiAI,
    },
    push: {
      vapid,
    },
  };

  const ok = services.tts.anyTts && services.stt.anyStt && services.ai.anyAI;

  return new Response(
    JSON.stringify({
      ok,
      services,
      backup,
      env: isDev ? 'development' : 'production',
      ts: Date.now(),
    }),
    {
      status: 200,
      headers: {
        ...healthCorsHeaders(origin),
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    },
  );
}
