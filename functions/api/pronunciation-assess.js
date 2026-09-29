// Cloudflare Pages Function — Azure Pronunciation Assessment
// Accepts a base64-encoded WAV recording + reference text, submits to Azure
// Cognitive Services Pronunciation Assessment REST API, and returns phoneme-level
// scores. Requires Firebase auth token (Authorization: Bearer <token>).

import { requireAuthedAI } from './_requireAuth.js';
import { corsHeaders } from './_helpers.js';
import { refundPrecharge, reconcileAudioSeconds } from './_aiBudget.js';

const PATH = '/api/pronunciation-assess';

function ok(body, origin) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      ...corsHeaders(origin),
    },
  });
}
function err(status, msg, origin) {
  return new Response(JSON.stringify({ ok: false, error: msg }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      ...corsHeaders(origin),
    },
  });
}

// ── Input sanitisation ────────────────────────────────────────────────────────
function sanitizeText(value, maxLen = 500) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/[\r\n]/g, ' ')
    .replace(/[`\\]/g, '')
    .replace(/\bignore\b.*\binstruction/gi, '')
    .trim()
    .slice(0, maxLen);
}

// ── Base64 → ArrayBuffer ──────────────────────────────────────────────────────
// Cloudflare Workers runtime provides atob() and Uint8Array.
function base64ToUint8Array(b64) {
  const binary = atob(b64.replace(/\s/g, ''));
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

// ── Parse Azure NBest Pronunciation Assessment response ───────────────────────
// THE REST ANSWER IS FLAT, AND THIS PARSER READ THE SDK's NESTED SHAPE (2026-09-29).
// The Speech SDK nests every score under `PronunciationAssessment`; the REST short-audio
// endpoint this file calls puts them directly on the NBest entry, the word and the
// phoneme (`NBest[0].AccuracyScore`, `Words[i].AccuracyScore`, `Words[i].ErrorType`).
// Reading only the nested form made every score 0 and every ErrorType the 'None'
// default — the first calibration run heard "Imam sestru." perfectly and scored each
// word 0, so Guided Speaking's check called every correctly-said word unclear and could
// never see a real miscue. Both shapes are read now, flat first.
//
// A score that is ABSENT is null, never 0: "Azure did not score this" and "Azure
// scored it badly" are different facts, and the client must not call a word unclear
// on no measurement (NEVER-DO 13).
function num(...candidates) {
  for (const c of candidates) if (typeof c === 'number' && Number.isFinite(c)) return Math.round(c);
  return null;
}
function str(...candidates) {
  for (const c of candidates) if (typeof c === 'string' && c) return c;
  return null;
}
/** Base64 of a string's UTF-8 bytes (btoa alone is Latin-1 only). */
export function utf8Base64(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

export function parseAzureResponse(azureData) {
  const nbest = azureData?.NBest?.[0];
  if (!nbest) return null;

  const pa = nbest.PronunciationAssessment || {};
  const overall = num(nbest.PronScore, pa.PronScore) ?? 0;
  const accuracy = num(nbest.AccuracyScore, pa.AccuracyScore) ?? 0;
  const fluency = num(nbest.FluencyScore, pa.FluencyScore) ?? 0;
  const completeness = num(nbest.CompletenessScore, pa.CompletenessScore) ?? 0;

  const word_scores = (nbest.Words || []).map((w) => ({
    word: w.Word || '',
    score: num(w.AccuracyScore, w.PronunciationAssessment?.AccuracyScore),
    // Miscue detection (EnableMiscue) marks each word None / Omission / Insertion /
    // Mispronunciation. Guided Speaking reads it to tell the learner what was really
    // said (lib/spokenCheck).
    error: str(w.ErrorType, w.PronunciationAssessment?.ErrorType) ?? 'None',
    phonemes: (w.Phonemes || []).map((p) => ({
      phoneme: p.Phoneme || '',
      score: num(p.AccuracyScore, p.PronunciationAssessment?.AccuracyScore),
    })),
  }));
  // Whether Azure scored anything at all — the calibration reports it, because a locale
  // Azure recognises but does not score reads exactly like perfect silence otherwise.
  const scored = word_scores.some((w) => w.score !== null);

  // THE RECOGNISED TEXT WAS DROPPED HERE, AND THE COACH PAID FOR IT (2026-09-25).
  // Azure returns what it actually heard; nothing forwarded it, so the client had
  // no transcript on this path and passed the TARGET to /api/pronunciation-coach
  // as "what the learner said". The coach's phoneme analysis then compared the
  // target with itself, found nothing, and every attempt at a phrase produced the
  // same paragraph — owner report: "AI coaching provided feedback once and never
  // changed after that."
  const recognized = nbest.Display || nbest.Lexical || '';

  return { overall, accuracy, fluency, completeness, word_scores, recognized, scored };
}

/**
 * One Azure pronunciation assessment: scripted, miscue detection on, phoneme granularity.
 * Exported so the STT calibration (stt-calibration.js) probes the EXACT production call
 * rather than a copy of it. Returns the parsed result and the processed audio seconds,
 * or a named error; it never throws.
 */
export async function azureAssess(
  key,
  region,
  audioBytes,
  contentType,
  referenceText,
  locale = 'hr-HR',
) {
  // Build the Pronunciation-Assessment header value.
  // Azure requires this as a base64-encoded JSON object.
  const assessmentConfig = {
    ReferenceText: referenceText,
    GradingSystem: 'HundredMark',
    Granularity: 'Phoneme',
    EnableMiscue: true,
  };
  // The reference sentence is Croatian, and btoa() accepts Latin-1 only: any č ć đ š ž
  // threw "btoa() can only operate on characters in the Latin1 range", an uncaught 500
  // (Sentry ai_feedback_failed:guided-speaking-assess:server, found by the calibration's
  // `Živim u Zagrebu` probe). Base64 of the UTF-8 bytes is what Azure expects.
  const assessmentHeader = utf8Base64(JSON.stringify(assessmentConfig));

  // Call Azure Cognitive Services Pronunciation Assessment REST API.
  const azureUrl = `https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${locale}&format=detailed`;

  // Block 1: fetch — catches network errors only
  let azureRes;
  try {
    azureRes = await fetch(azureUrl, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Content-Type': contentType,
        Accept: 'application/json',
        'Pronunciation-Assessment': assessmentHeader,
      },
      body: audioBytes,
      signal: AbortSignal.timeout(20000),
    });
  } catch (fetchErr) {
    console.error('pronunciation-assess.js: Azure fetch error:', fetchErr?.message);
    return { ok: false, error: 'azure_unavailable' };
  }

  // Block 2: read body — catches body-read failures
  let rawBody;
  try {
    rawBody = await azureRes.text();
  } catch (bodyErr) {
    console.error('pronunciation-assess.js: failed to read response body:', bodyErr?.message);
    return { ok: false, error: 'azure_body_unreadable' };
  }

  // Block 3: check res.ok
  if (!azureRes.ok) {
    let errMsg;
    try {
      errMsg = JSON.parse(rawBody)?.error?.message;
    } catch {
      /* not JSON */
    }
    console.error(
      'pronunciation-assess.js: Azure HTTP error:',
      azureRes.status,
      errMsg || rawBody.slice(0, 300),
    );
    return { ok: false, error: 'azure_error' };
  }

  // Block 4: parse JSON
  let azureData;
  try {
    azureData = JSON.parse(rawBody);
  } catch {
    console.error('pronunciation-assess.js: JSON parse failed:', rawBody.slice(0, 200));
    return { ok: false, error: 'parse_failed' };
  }

  // AZURE HEARD NO SPEECH, AND THAT IS NOT A SERVER FAULT (Sentry
  // ai_feedback_failed:guided-speaking-assess:server, 2026-09-29). A recording
  // with no recognisable speech comes back 200 with RecognitionStatus NoMatch /
  // InitialSilenceTimeout / BabbleTimeout and no NBest, which fell through to
  // `unexpected_shape` and a 502 — so the learner read "the evaluation service is
  // temporarily unavailable" about a recording that simply held no speech, and
  // the report said the server was down. It is named now, and the client files it
  // under `stt` ("we couldn't transcribe the recording"), still reported, because
  // a silent capture can also be our own recording defect.
  const status =
    typeof azureData?.RecognitionStatus === 'string' ? azureData.RecognitionStatus : '';
  if (status && status !== 'Success') {
    console.warn('pronunciation-assess.js: no speech recognised:', status);
    return {
      ok: false,
      error: 'no_speech',
      recognitionStatus: status,
      durationS: Number(azureData?.Duration) / 1e7,
    };
  }

  const parsed = parseAzureResponse(azureData);
  if (!parsed) {
    console.error(
      'pronunciation-assess.js: unexpected Azure response shape:',
      JSON.stringify(azureData).slice(0, 300),
    );
    return { ok: false, error: 'unexpected_shape' };
  }

  return { ok: true, parsed, durationS: Number(azureData?.Duration) / 1e7 };
}

// ── Preflight ─────────────────────────────────────────────────────────────────
export async function onRequestOptions({ request }) {
  const origin = request.headers.get('origin') || '';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

// ── Main handler ──────────────────────────────────────────────────────────────
export async function onRequestPost(context) {
  const { request, env } = context;

  const gate = await requireAuthedAI(context, { cost: 1, rateLimit: 10 });
  if (!gate.ok) return gate.response;
  const { origin } = gate;

  // Check env vars early — return a clear signal so the client can fall back.
  //
  // AZURE_TTS_KEY is accepted as a fallback ON PURPOSE: an Azure "Speech
  // Services" resource issues ONE key that covers neural TTS, STT and
  // pronunciation assessment alike, and this project's dashboard was
  // provisioned under the TTS_* names (every doc said AZURE_TTS_*; only this
  // file asked for AZURE_SPEECH_*). Accepting both names means pronunciation
  // scoring works regardless of which name the dashboard carries — no owner
  // dashboard-archaeology required. If a dedicated assessment key is ever
  // added under AZURE_SPEECH_*, it still wins.
  const AZURE_KEY = env.AZURE_SPEECH_KEY || env.AZURE_TTS_KEY;
  const AZURE_REGION = env.AZURE_SPEECH_REGION || env.AZURE_TTS_REGION;
  if (!AZURE_KEY || !AZURE_REGION) {
    // Nothing is sent to Azure, so nothing is kept (the 4xx-refund rule, 2026-09-25).
    await refundPrecharge(env, PATH);
    return ok({ ok: false, error: 'not_configured' }, origin);
  }
  // A body rejected below never reaches Azure either: every 400 gives the pre-charge back.
  const reject = async (msg) => {
    await refundPrecharge(env, PATH);
    return err(400, msg, origin);
  };

  // Parse body
  const ct = request.headers.get('content-type') || '';
  if (!ct.includes('application/json')) return reject('Expected application/json');

  let body;
  try {
    body = await request.json();
  } catch {
    return reject('Invalid JSON');
  }

  const { audioBase64, referenceText, locale = 'hr-HR', audioMimeType = 'audio/wav' } = body;

  if (typeof audioBase64 !== 'string' || !audioBase64) {
    return reject('Missing audioBase64');
  }
  if (typeof referenceText !== 'string' || !referenceText.trim()) {
    return reject('Missing referenceText');
  }

  // Validate locale to an allowlist (Croatian + common fallbacks)
  const ALLOWED_LOCALES = ['hr-HR', 'hr', 'en-US', 'en-GB'];
  const safeLocale = ALLOWED_LOCALES.includes(locale) ? locale : 'hr-HR';
  const safeReferenceText = sanitizeText(referenceText, 500);

  // Decode audio
  let audioBytes;
  try {
    audioBytes = base64ToUint8Array(audioBase64);
  } catch {
    return reject('Invalid base64 audio');
  }

  // Validate size: Azure REST accepts up to ~60 s of audio; WAV is typically
  // ~88 kB/s at 44 kHz mono 16-bit. Cap at 8 MB to be safe.
  if (audioBytes.byteLength > 8 * 1024 * 1024) {
    return reject('Audio too large (max 8 MB)');
  }

  // Map the client's recorded MIME type to the Content-Type Azure accepts.
  // Azure explicitly supports: audio/wav, audio/ogg;codecs=opus, audio/mpeg.
  // Chrome MediaRecorder always produces audio/webm;codecs=opus (WAV is unsupported in Chrome).
  // Sending 'audio/wav' when the audio is actually WebM caused Azure to misparse the binary
  // and return a garbage-but-consistent score (~84%). We now use the real format.
  const ALLOWED_MIME_TYPES = new Set([
    'audio/wav',
    'audio/pcm',
    'audio/ogg',
    'audio/ogg;codecs=opus',
    'audio/ogg; codecs=opus',
    'audio/webm',
    'audio/webm;codecs=opus',
    'audio/webm; codecs=opus',
    'audio/mpeg',
    'audio/mp4',
  ]);
  // Normalise: lowercase, strip extra whitespace
  const normMime = String(audioMimeType).toLowerCase().replace(/\s+/g, ' ').trim();
  const azureContentType = ALLOWED_MIME_TYPES.has(normMime) ? normMime : 'audio/wav';

  const out = await azureAssess(
    AZURE_KEY,
    AZURE_REGION,
    audioBytes,
    azureContentType,
    safeReferenceText,
    safeLocale,
  );
  if (!out.ok && out.error === 'no_speech') {
    // Azure still processed (and billed) the audio; book what it measured.
    await reconcileAudioSeconds(env, PATH, out.durationS);
    return err(422, 'no_speech', origin);
  }
  if (!out.ok) return err(502, out.error, origin);
  const { parsed, durationS } = out;

  // Book the audio Azure actually processed, not the one-minute ceiling.
  await reconcileAudioSeconds(env, PATH, durationS);
  return ok({ ok: true, ...parsed }, origin);
}
