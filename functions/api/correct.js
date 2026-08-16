// Cloudflare Pages Function — AI Croatian Writing Correction
// Uses Anthropic Claude to correct Croatian writing and provide feedback

import { requireAuthedAI } from './_requireAuth.js';
import { corsHeaders } from './_helpers.js';
import { parseUserContext, renderContextPrompt } from './_userContext.js';
import { sanitizeParam } from './_helpers.js';
import { writingEvalSystemPrompt } from './_evalPrompts.js';

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
  const headers = { 'Content-Type': 'application/json', ...corsHeaders(origin) };

  if (!ANTHROPIC_KEY) {
    return new Response(JSON.stringify({ error: 'AI_KEY_MISSING' }), { status: 503, headers });
  }

  const ct = request.headers.get('content-type') || '';
  if (!ct.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'Invalid content type' }), {
      status: 400,
      headers,
    });
  }

  let reqBody;
  try {
    reqBody = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers });
  }

  const { prompt, text } = reqBody;
  if (typeof text !== 'string' || !text.trim()) {
    return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400, headers });
  }
  if (text.length > 3000) {
    return new Response(JSON.stringify({ error: 'Text too long (max 3000 chars)' }), {
      status: 400,
      headers,
    });
  }

  const safePrompt = sanitizeParam(prompt, 300);
  const userCtx = parseUserContext(reqBody);
  const contextProse = renderContextPrompt(userCtx, 'correct');

  // The evaluator prompt lives in _evalPrompts.js, SHARED with
  // golden-calibration.js so calibration runs provably score with the same
  // rubric as production.
  const basePrompt = writingEvalSystemPrompt(safePrompt);

  const systemPrompt = contextProse ? basePrompt + '\n\n' + contextProse : basePrompt;

  // Block 1: network errors only
  let response;
  try {
    response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      signal: AbortSignal.timeout(25000),
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        // Input is capped at 3000 chars; the response must reproduce the full
        // corrected_text PLUS the changes array + feedback, so 1000 truncated long
        // essays into unparseable JSON (fake "couldn't connect"). Sized to match.
        max_tokens: 2600,
        system: systemPrompt,
        messages: [{ role: 'user', content: text }],
      }),
    });
  } catch (fetchErr) {
    console.error('[correct] network error calling Anthropic:', fetchErr.message);
    return new Response(JSON.stringify({ error: 'Service temporarily unavailable' }), {
      status: 502,
      headers,
    });
  }

  // Block 2: read body as text first — non-2xx responses may not be JSON
  let rawBody;
  try {
    rawBody = await response.text();
  } catch (bodyErr) {
    console.error('[correct] failed to read Anthropic response body:', bodyErr.message);
    return new Response(JSON.stringify({ error: 'Service temporarily unavailable' }), {
      status: 502,
      headers,
    });
  }

  // Block 3: check ok status
  if (!response.ok) {
    let errMsg;
    try {
      errMsg = JSON.parse(rawBody)?.error?.message;
    } catch {
      /* body not JSON */
    }
    console.error('[correct] Anthropic API error', response.status, errMsg);
    return new Response(
      JSON.stringify({
        error: isDev
          ? errMsg || 'Anthropic API error: HTTP ' + response.status
          : 'AI service error',
      }),
      { status: response.status >= 500 ? 502 : response.status, headers },
    );
  }

  // Block 4: parse Anthropic JSON envelope
  let data;
  try {
    data = JSON.parse(rawBody);
  } catch {
    console.error('[correct] JSON parse failed on Anthropic response:', rawBody.slice(0, 200));
    return new Response(JSON.stringify({ error: 'Invalid response from AI' }), {
      status: 502,
      headers,
    });
  }

  const rawText = data.content?.[0]?.text || '{}';

  // Parse Claude's JSON payload. If it is malformed we must NOT invent a score —
  // a fabricated number (e.g. a hardcoded 60) shown as the user's real result is
  // worse than an honest failure. Return a non-200 so the client surfaces a
  // "couldn't connect" error instead of a fake evaluation.
  let result;
  try {
    result = JSON.parse(rawText);
  } catch {
    console.error('[correct] JSON parse failed on Claude payload:', rawText.slice(0, 200));
    return new Response(JSON.stringify({ error: 'eval_unparseable' }), { status: 502, headers });
  }

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { ...headers, 'Cache-Control': 'no-store' },
  });
}
