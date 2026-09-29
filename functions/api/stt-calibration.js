// functions/api/stt-calibration.js
//
// STT-STAGE CALIBRATION (owner directive, 2026-08-19 — assessment gap #7).
// golden-calibration.js proves the scoring RUBRIC is honest by feeding it
// known transcripts — deliberately skipping the speech-to-text stage in
// front of it. This endpoint calibrates THAT stage: each golden phrase is
// synthesized through the app's own production TTS voice (tts.js tryAzure —
// the same hr-HR-GabrijelaNeural learners hear) and run through the REAL
// production provider chain (_transcribe.js: Deepgram nova-3 → Whisper-1),
// then the transcript's word-error rate against the known text must land
// inside band. Drift means the speech pipeline broke for real learners too —
// caught here, before children get mis-heard and mis-scored.
//
// DISPATCH-ONLY, server-to-server: gated on CRON_SECRET or the
// self-provisioned CALIBRATION_SECRET (timing-safe), exactly like
// golden-calibration. The budget choke point is preserved the same way: the
// FULL run pre-charges its ceiling via checkAndChargeBudget before any
// provider call, and a 429 refusal runs nothing. Zero Claude calls.
//
// Synthesized audio is cached in KV (90 days) keyed by phrase id + text, so
// repeat runs pay only the STT stage.

import { checkAndChargeBudget } from './_aiBudget.js';
import { transcribeCroatian } from './_transcribe.js';
import { tryAzure } from './tts.js';
import { azureAssess } from './pronunciation-assess.js';
import {
  ASSESS_PROBES,
  assessFocusFlagged,
  STT_GOLDEN_PHRASES,
  STT_WER_BAND,
  STT_DRIFT_THRESHOLD,
  wordErrorRate,
} from './_sttGoldenSet.js';

const AUDIO_CACHE_TTL_S = 60 * 60 * 24 * 90;

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

function bufToB64(buf) {
  const u8 = new Uint8Array(buf);
  let bin = '';
  const CHUNK = 0x8000;
  for (let i = 0; i < u8.length; i += CHUNK) {
    bin += String.fromCharCode(...u8.subarray(i, i + CHUNK));
  }
  return btoa(bin);
}

function b64ToBuf(b64) {
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8.buffer;
}

/** Synthesize (or KV-recall) the golden phrase's production-voice audio. */
async function goldenAudio(env, kv, phrase) {
  const key = `sttcal:audio:${phrase.id}`;
  if (kv) {
    try {
      const cached = await kv.get(key);
      if (cached) return { buffer: b64ToBuf(cached), cached: true };
    } catch {
      /* cache miss path below */
    }
  }
  const buffer = await tryAzure(
    phrase.text,
    { slow: false },
    env.AZURE_TTS_KEY,
    env.AZURE_TTS_REGION,
  );
  if (!buffer) return { buffer: null, cached: false };
  if (kv) {
    try {
      await kv.put(key, bufToB64(buffer), { expirationTtl: AUDIO_CACHE_TTL_S });
    } catch {
      /* uncached — next run pays TTS again, harmless */
    }
  }
  return { buffer, cached: false };
}

/** Production-voice audio for a probe sentence, as the 16 kHz WAV the app now sends. */
async function probeAudio(env, kv, key, text) {
  if (kv) {
    try {
      const cached = await kv.get(key);
      if (cached) return b64ToBuf(cached);
    } catch {
      /* synthesize below */
    }
  }
  const buffer = await tryAzure(
    text,
    { slow: false, outputFormat: 'riff-16khz-16bit-mono-pcm' },
    env.AZURE_TTS_KEY,
    env.AZURE_TTS_REGION,
  );
  if (buffer && kv) {
    try {
      await kv.put(key, bufToB64(buffer), { expirationTtl: AUDIO_CACHE_TTL_S });
    } catch {
      /* uncached — harmless */
    }
  }
  return buffer;
}

/** One probe: the correct sentence and the wrong one, both scored against the correct one. */
async function assessProbe(env, kv, probe) {
  const key = env.AZURE_SPEECH_KEY || env.AZURE_TTS_KEY;
  const region = env.AZURE_SPEECH_REGION || env.AZURE_TTS_REGION;
  const half = async (variant, text) => {
    const audio = await probeAudio(env, kv, `sttcal:assess:${probe.id}:${variant}`, text);
    if (!audio) return { evaluated: false, error: 'tts_unavailable' };
    const out = await azureAssess(key, region, new Uint8Array(audio), 'audio/wav', probe.reference);
    if (!out.ok) return { evaluated: false, error: out.error };
    const focusWord = out.parsed.word_scores.find(
      (w) => w.word.toLowerCase() === probe.focus.toLowerCase(),
    );
    return {
      evaluated: true,
      recognized: out.parsed.recognized,
      // Whether Azure scored this take at all; false means the verdict rests on the
      // miscue flag alone (see parseAzureResponse).
      scored: out.parsed.scored,
      focus: focusWord || null,
      flagged: assessFocusFlagged(out.parsed.word_scores, probe.focus),
    };
  };
  try {
    const control = await half('control', probe.reference);
    const miscue = await half('miscue', probe.wrong);
    return {
      id: probe.id,
      reference: probe.reference,
      wrong: probe.wrong,
      focus: probe.focus,
      control: { ...control, ok: control.evaluated ? !control.flagged : undefined },
      miscue: { ...miscue, ok: miscue.evaluated ? miscue.flagged : undefined },
    };
  } catch (e) {
    return { id: probe.id, error: String(e?.message || e).slice(0, 200) };
  }
}

async function calibrateSample(env, kv, phrase) {
  const base = { id: phrase.id, expected: phrase.text, band: STT_WER_BAND };
  try {
    const { buffer, cached } = await goldenAudio(env, kv, phrase);
    if (!buffer) return { ...base, evaluated: false, error: 'tts_unavailable' };
    const { text, provider } = await transcribeCroatian(buffer, 'audio/mpeg', env);
    const wer = wordErrorRate(phrase.text, text);
    return {
      ...base,
      evaluated: true,
      transcript: text,
      provider,
      audioCached: cached,
      wer: Math.round(wer * 100) / 100,
      ok: text.length > 0 && wer <= STT_WER_BAND,
    };
  } catch (e) {
    return { ...base, evaluated: false, error: String(e?.message || e).slice(0, 200) };
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.CRON_SECRET && !env.CALIBRATION_SECRET) {
    return json(503, { error: 'calibration_secret_missing' });
  }
  if (!env.AZURE_TTS_KEY) return json(503, { error: 'tts_key_missing' });
  if (!env.DEEPGRAM_API_KEY && !env.OPENAI_API_KEY) {
    return json(503, { error: 'stt_key_missing' });
  }

  const secret = request.headers.get('x-cron-secret') || '';
  const authorized =
    (env.CRON_SECRET && timingSafeEqual(secret, env.CRON_SECRET)) ||
    (env.CALIBRATION_SECRET && timingSafeEqual(secret, env.CALIBRATION_SECRET));
  if (!authorized) return json(401, { error: 'unauthorized' });

  // Pre-charge the WHOLE run before any provider call (golden-calibration
  // pattern) — a refusal runs nothing.
  const budget = await checkAndChargeBudget(env, '/api/stt-calibration');
  if (!budget.allowed) {
    return json(429, { error: 'monthly_budget_exhausted', resetAt: budget.resetAt });
  }

  const kv = env.KV || env.PUSH_SUBSCRIPTIONS || null;

  // Sequential on purpose: 6 samples × (cached TTS + one STT call) is well
  // inside the request budget, and sequencing keeps provider rate limits calm.
  const samples = [];
  for (const phrase of STT_GOLDEN_PHRASES) {
    samples.push(await calibrateSample(env, kv, phrase));
  }

  // Pronunciation-assessment probes: can Azure tell a wrong ending from a right one?
  const probes = [];
  for (const probe of ASSESS_PROBES) probes.push(await assessProbe(env, kv, probe));
  const halves = probes.flatMap((p) => [p.control, p.miscue]).filter((h) => h?.evaluated);
  const probeFailures = halves.filter((h) => !h.ok).length;

  const evaluated = samples.filter((s) => s.evaluated);
  const outOfBand = evaluated.filter((s) => !s.ok);
  const drift = outOfBand.length >= STT_DRIFT_THRESHOLD;

  return json(200, {
    at: new Date().toISOString(),
    stage: 'stt',
    band: STT_WER_BAND,
    total: samples.length,
    evaluated: evaluated.length,
    withinBand: evaluated.length - outOfBand.length,
    outOfBand: outOfBand.length,
    drift,
    samples,
    assessment: {
      total: halves.length,
      failed: probeFailures,
      // Same rule as the transcript samples: two or more failed halves is drift.
      drift: probeFailures >= STT_DRIFT_THRESHOLD,
      probes,
    },
  });
}
