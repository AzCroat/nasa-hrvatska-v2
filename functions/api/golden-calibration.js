// functions/api/golden-calibration.js
//
// GOLDEN-SET CALIBRATION (analysis-trust directive, 2026-08-16): runs the
// pre-scored samples in _goldenSet.js through the SAME evaluator prompts
// production uses (_evalPrompts.js — the writing evaluator behind
// /api/correct and the speaking rubric behind /api/assess-speaking) and
// reports whether each score landed inside its expected band. Drift means
// the evaluator changed under us — caught here, before users get mis-scored.
//
// DISPATCH-ONLY, server-to-server: gated on CRON_SECRET (the scheduled-worker
// pattern — streak-push.js, push-send.js), NOT requireAuthedAI, because the
// caller is a GitHub Actions workflow_dispatch (calibration.yml), not a
// signed-in user. The budget choke point is preserved the same way the
// self-metered endpoints preserve it: the FULL run pre-charges its ceiling
// via checkAndChargeBudget before any Claude call, and a 429 refusal runs
// nothing. ~$0.19 worst-case per run, manual dispatch only.
//
// Output is a calibration report (sample ids, expected bands, actual scores,
// drift verdict) — no user data is involved anywhere in this path.

import { checkAndChargeBudget } from './_aiBudget.js';
import { GOLDEN_SET } from './_goldenSet.js';
import {
  writingEvalSystemPrompt,
  speakingRubricPrompt,
  WRITING_EVAL_PROMPT,
  SPEAKING_RUBRIC_PROMPT,
} from './_evalPrompts.js';
import { promptListHeaders } from './_promptRegistry.js';

const CLAUDE_MODEL = 'claude-haiku-4-5-20251001';
// Same output caps as the production endpoints the prompts are shared with.
const WRITING_MAX_TOKENS = 2600; // matches correct.js
const SPEAKING_MAX_TOKENS = 100; // matches assess-speaking.js
const BATCH_SIZE = 3; // parallel Claude calls per batch (subrequest-friendly)

/** A single out-of-band sample is grader variance (bands are wide but not
 *  guarantees); two or more is systematic drift. */
const DRIFT_THRESHOLD = 2;

// Constant-time string comparison (same as push-send.js) — prevents timing
// attacks on the secret comparison.
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

function json(status, body, extraHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...extraHeaders },
  });
}

/**
 * The prompts a run ACTUALLY used, in a stable order (2026-08-24).
 *
 * Derived from the rows rather than hardcoded to both, because the set is a
 * property of the golden set, not of this file: a writing-only golden set uses
 * one evaluator, and claiming the speaking rubric also ran would be a lie the
 * moment someone trims the samples. Errored rows still count — the prompt was
 * sent; what failed was the response or the parse.
 */
export function promptsUsedBy(rows) {
  const used = [];
  if (rows.some((r) => r.kind === 'writing')) used.push(WRITING_EVAL_PROMPT);
  if (rows.some((r) => r.kind !== 'writing')) used.push(SPEAKING_RUBRIC_PROMPT);
  return used;
}

/** Strip an optional ```json fence — same tolerance as the production parsers. */
function stripFence(text) {
  return String(text || '')
    .replace(/^\s*```(?:json)?\s*/i, '')
    .replace(/\s*```\s*$/i, '')
    .trim();
}

async function callClaude(env, { system, user, maxTokens }) {
  const body = {
    model: CLAUDE_MODEL,
    max_tokens: maxTokens,
    messages: [{ role: 'user', content: user }],
  };
  if (system) body.system = system;
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    signal: AbortSignal.timeout(28000),
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`anthropic_http_${r.status}`);
  const data = await r.json();
  const text = data?.content?.[0]?.text || '';
  return JSON.parse(stripFence(text));
}

/** Run one golden sample through its production rubric. Returns the report row. */
async function evaluateSample(env, sample) {
  const clamp01 = (n) => Math.max(0, Math.min(1, Number(n) || 0));
  try {
    let got;
    if (sample.kind === 'writing') {
      const parsed = await callClaude(env, {
        system: writingEvalSystemPrompt(sample.prompt),
        user: sample.text,
        maxTokens: WRITING_MAX_TOKENS,
      });
      if (typeof parsed.score !== 'number' || !Number.isFinite(parsed.score)) {
        throw new Error('eval_unparseable');
      }
      got = Math.max(0, Math.min(100, parsed.score));
    } else {
      const parsed = await callClaude(env, {
        user: speakingRubricPrompt(sample.level, sample.prompt, sample.text),
        maxTokens: SPEAKING_MAX_TOKENS,
      });
      // Equal-weight mean of the 4 criteria — same as computeSpeakingOverall.
      got =
        (clamp01(parsed.range) +
          clamp01(parsed.accuracy) +
          clamp01(parsed.fluency) +
          clamp01(parsed.task)) /
        4;
      got = Math.round(got * 100) / 100;
    }
    const [min, max] = sample.expected;
    return {
      id: sample.id,
      kind: sample.kind,
      level: sample.level,
      expected: sample.expected,
      got,
      ok: got >= min && got <= max,
      evaluated: true,
    };
  } catch (e) {
    return {
      id: sample.id,
      kind: sample.kind,
      level: sample.level,
      expected: sample.expected,
      evaluated: false,
      error: String((e && e.message) || e),
    };
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // Config guards first — grep-able failures beat confusing downstream errors.
  // Two accepted credentials, either sufficient:
  //   - CRON_SECRET          — the long-standing scheduled-worker secret
  //   - CALIBRATION_SECRET   — provisioned AUTOMATICALLY by calibration.yml
  //     (derived in CI and installed via wrangler, the vapid-provision.yml
  //     pattern) so the owner never has to shuttle secret values by hand.
  if (!env.CRON_SECRET && !env.CALIBRATION_SECRET) {
    return json(503, { error: 'calibration_secret_missing' });
  }
  if (!env.ANTHROPIC_API_KEY) return json(503, { error: 'AI_KEY_MISSING' });

  const secret = request.headers.get('x-cron-secret') || '';
  const authorized =
    (env.CRON_SECRET && timingSafeEqual(secret, env.CRON_SECRET)) ||
    (env.CALIBRATION_SECRET && timingSafeEqual(secret, env.CALIBRATION_SECRET));
  if (!authorized) return json(401, { error: 'unauthorized' });

  // Budget: pre-charge the WHOLE run's ceiling before the first Claude call.
  // A refusal here runs nothing — calibration is a diagnostic, never worth
  // taking spend away from learners.
  const budget = await checkAndChargeBudget(env, '/api/golden-calibration');
  if (!budget.allowed) {
    return json(429, { error: 'monthly_budget_exhausted', resetAt: budget.resetAt });
  }

  // Evaluate in small parallel batches: wall-time friendly, subrequest polite.
  const rows = [];
  for (let i = 0; i < GOLDEN_SET.length; i += BATCH_SIZE) {
    const batch = GOLDEN_SET.slice(i, i + BATCH_SIZE);
    rows.push(...(await Promise.all(batch.map((s) => evaluateSample(env, s)))));
  }

  const evaluated = rows.filter((r) => r.evaluated);
  const misses = evaluated.filter((r) => !r.ok);
  const report = {
    at: new Date().toISOString(),
    model: CLAUDE_MODEL,
    total: rows.length,
    evaluated: evaluated.length,
    withinBand: evaluated.length - misses.length,
    outOfBand: misses.length,
    // Drift = systematic mis-scoring; a lone out-of-band sample is variance
    // (still visible in the rows for the human reading the report).
    drift: misses.length >= DRIFT_THRESHOLD,
    samples: rows,
  };
  // BOTH evaluator prompts, not one. This report's rows come from two different
  // prompts, so a single tag would attribute all of them to whichever was
  // picked — the reason this endpoint sat on the debt list until the header
  // learned to carry a list. See promptListHeaders in _promptRegistry.js.
  return json(200, report, promptListHeaders(promptsUsedBy(rows)));
}

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}
