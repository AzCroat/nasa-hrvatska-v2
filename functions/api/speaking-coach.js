// Cloudflare Pages Function — Speaking Coach (production-teaching directive, 2026-08-18)
//
// The teaching counterpart of /api/assess-speaking. The exam rubric returns
// four bare floats; daily practice needs to TEACH — so this endpoint takes a
// transcript the client already has (no STT cost; browser SpeechRecognition or
// the on-device recorder produced it) and returns the same four criteria PLUS
// an error list in the writing evaluator's errorType taxonomy and one concrete
// piece of advice. The client feeds errors into the same adaptive loop
// writing uses (applyWritingErrorsToAdaptive) and records speaking mastery —
// closing the loop the 2026-08-18 audit found broken: daily speaking screens
// measured but never taught, and never fed the ledger.
//
// Cost: one Haiku call, max_tokens 700 — ceiling in _aiBudget.js
// ('/api/speaking-coach'), reconciled after the response like the other
// conversational endpoints. The system block is static and cached
// (cache_control) so repeat calls bill the prefix at 0.1x.

import { requireAuthedAI } from './_requireAuth.js';
import { corsHeaders, sanitizeParam } from './_helpers.js';
import { reconcileBudget } from './_aiBudget.js';
import { speakingCoachSystemPrompt } from './_evalPrompts.js';
import { CROATIAN_SCRIPT_RULE } from './_croatianGuard.js';

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-haiku-4-5-20251001';
const VALID_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const VALID_ERROR_TYPES = new Set([
  'case',
  'aspect',
  'agreement',
  'tense',
  'word_order',
  'vocab',
  'spelling',
  'other',
]);

function ok(body, origin) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}
function err(status, msg, origin) {
  return new Response(JSON.stringify({ error: msg }), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

const clamp01 = (v) => (Number.isFinite(v) ? Math.max(0, Math.min(1, v)) : 0);

export async function onRequestOptions({ request }) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get('origin') || ''),
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const ANTHROPIC_KEY = env.ANTHROPIC_API_KEY;

  const gate = await requireAuthedAI(context, { cost: 1, rateLimit: 20 });
  if (!gate.ok) return gate.response;
  const { origin, isDev } = gate;

  if (!ANTHROPIC_KEY) return err(503, 'AI_KEY_MISSING', origin);

  const ct = request.headers.get('content-type') || '';
  if (!ct.includes('application/json')) return err(400, 'Invalid content type', origin);

  let reqBody;
  try {
    reqBody = await request.json();
  } catch {
    return err(400, 'Invalid JSON in request body', origin);
  }

  const { prompt, transcript, level } = reqBody;
  if (typeof transcript !== 'string' || transcript.trim().length < 3)
    return err(400, 'Missing transcript', origin);
  const safeTranscript = sanitizeParam(transcript, 800);
  const safePrompt = sanitizeParam(prompt || 'Speak freely in Croatian', 300);
  const safeLevel = VALID_LEVELS.includes(level) ? level : 'B1';

  const userMsg =
    `Learner level: ${safeLevel}\n` +
    `Speaking prompt: "${safePrompt}"\n` +
    `Transcript of their spoken answer: "${safeTranscript}"`;

  let res;
  try {
    res = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 700,
        // Static system block, cached — repeats bill the prefix at 0.1x.
        system: [
          {
            type: 'text',
            text: speakingCoachSystemPrompt() + '\n\n' + CROATIAN_SCRIPT_RULE,
            cache_control: { type: 'ephemeral' },
          },
        ],
        messages: [{ role: 'user', content: userMsg }],
      }),
    });
  } catch (fetchErr) {
    console.error('speaking-coach.js: network error:', fetchErr.message);
    return err(502, 'Service temporarily unavailable', origin);
  }

  let rawBody;
  try {
    rawBody = await res.text();
  } catch (bodyErr) {
    console.error('speaking-coach.js: failed to read response body:', bodyErr.message);
    return err(502, 'Service temporarily unavailable', origin);
  }

  if (!res.ok) {
    let errMsg;
    try {
      errMsg = JSON.parse(rawBody)?.error?.message;
    } catch {
      /* not JSON */
    }
    console.error('speaking-coach.js: API error', res.status, errMsg);
    return err(
      res.status >= 500 ? 502 : res.status,
      isDev ? errMsg || 'API error: HTTP ' + res.status : 'AI service error',
      origin,
    );
  }

  let data;
  try {
    data = JSON.parse(rawBody);
  } catch {
    console.error('speaking-coach.js: JSON parse failed:', rawBody.slice(0, 200));
    return err(502, 'Invalid response from AI', origin);
  }

  // Reconcile the pre-charged ceiling down to actual usage (never charges more).
  try {
    await reconcileBudget(env, '/api/speaking-coach', data?.usage);
  } catch {
    /* ceiling stays charged — safe */
  }

  const raw = data?.content?.[0]?.text?.trim() || '';
  if (!raw) return err(502, 'Empty response from AI', origin);

  let parsed;
  try {
    const cleaned = raw
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/, '')
      .trim();
    parsed = JSON.parse(cleaned);
  } catch {
    console.error('speaking-coach.js: JSON parse failed. Raw:', raw.slice(0, 200));
    return err(502, 'parse_failed', origin);
  }

  const scores = {
    range: clamp01(parsed.range),
    accuracy: clamp01(parsed.accuracy),
    fluency: clamp01(parsed.fluency),
    task: clamp01(parsed.task),
  };
  // Equal-weight mean — same shape computeSpeakingOverall uses on the client.
  const overall = (scores.range + scores.accuracy + scores.fluency + scores.task) / 4;

  const errors = Array.isArray(parsed.errors)
    ? parsed.errors
        .slice(0, 6)
        .filter((e) => e && typeof e === 'object')
        .map((e) => ({
          original: String(e.original || '').slice(0, 160),
          corrected: String(e.corrected || '').slice(0, 160),
          note: String(e.note || '').slice(0, 200),
          errorType: VALID_ERROR_TYPES.has(e.errorType) ? e.errorType : 'other',
        }))
        .filter((e) => e.corrected)
    : [];

  return ok(
    {
      scores,
      overall: Math.round(overall * 100) / 100,
      errors,
      advice: String(parsed.advice || '').slice(0, 300),
      encouragement: String(parsed.encouragement || '').slice(0, 200),
    },
    origin,
  );
}
