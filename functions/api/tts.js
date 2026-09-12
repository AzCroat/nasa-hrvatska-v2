// Cloudflare Pages Function — TTS Proxy
// Two voice paths:
//   gabrijela (default): Azure hr-HR-GabrijelaNeural → Edge hr-HR-GabrijelaNeural
//                        → Google Translate → Google Cloud hr-HR-Wavenet
//   charlotte (opt-in):  ElevenLabs Charlotte eleven_multilingual_v2 → Azure hr-HR-GabrijelaNeural
// Client falls back to Web Speech API when this endpoint returns 503.

import { requireAuthedAI } from './_requireAuth.js';
import { checkAndChargeBudget } from './_aiBudget.js';
import { checkAIQuota } from './_aiQuota.js';
import { corsHeaders } from './_helpers.js';

// ── Azure SSML builder ────────────────────────────────────────────────────────
// Exported for unit-testing. Accepts optional prosody object with whitelisted
// pitch, contour, and rate values to prevent SSML injection.
// Whitelist prosody values to safe SSML tokens (prevents SSML injection via prosody attrs).
const SAFE_PCT = /^[+-]?\d{1,3}%$/; // e.g. -8%, +15%
const SAFE_ST = /^[+-]?\d{1,2}(\.\d)?st$/; // semitones, e.g. +2st
// Validates an SSML prosody contour string like "(0%,+20%) (100%,-10%)".
// Each tuple: (offset%,delta%) where offset/delta are 1-3 digit integers with optional sign.
// Uses a per-tuple function instead of a complex quantified regex to avoid ReDoS flags.
function isSafeContour(s) {
  if (typeof s !== 'string' || s.length > 120) return false;
  const TUPLE = /^\(\d{1,3}%,[+-]?\d{1,3}%\)$/;
  const parts = s.split(' ');
  return parts.length >= 1 && parts.length <= 6 && parts.every((p) => TUPLE.test(p));
}

// Safe Azure neural voice name pattern: e.g. hr-HR-GabrijelaNeural, en-US-JennyNeural
const SAFE_VOICE = /^[A-Za-z]{2}-[A-Za-z]{2}-[A-Za-z0-9]+$/;
const DEFAULT_VOICE = 'hr-HR-GabrijelaNeural';

/**
 * The smallest response this endpoint will call audio (2026-09-09).
 *
 * The number is not new — the KV cache READ has distrusted a hit under 500
 * bytes since it was written. It was applied in exactly one of the three
 * places that needed it, and the serve path guarded only `if (!buffer)`.
 * An empty ArrayBuffer is TRUTHY, so a backend that answered 200 with nothing
 * in it (Google Translate TTS returns a token/consent body to datacenter IPs;
 * ElevenLabs was checked for `res.ok` and nothing else) produced a 200
 * `audio/mpeg` with no audio: no 5xx, no named cause, no toast, no Sentry
 * event, and silence on the device. That is the one failure shape the
 * 2026-09-06 audio directive did not close, because every path it covered
 * ANNOUNCED itself.
 *
 * A real hr-HR utterance is several KB; 500 bytes cannot hold a word. Below
 * it the chain keeps trying, and if nothing better arrives the endpoint 503s
 * with a named reason so the client falls back to Web Speech and RECORDS why.
 */
const MIN_AUDIO_BYTES = 500;

/** A backend result only counts as audio if there is audio in it. */
function isPlayableAudio(buffer) {
  return !!buffer && buffer.byteLength >= MIN_AUDIO_BYTES;
}

/**
 * The longest text this endpoint will speak (2026-09-10).
 *
 * IT WAS 500, AND THAT MADE THE AI LISTENING SCREEN STRUCTURALLY INCAPABLE OF
 * PRODUCING AUDIO. That screen generates a narrator passage or an interleaved
 * dialogue (the generator runs at max_tokens 1500–2600) and sends the WHOLE
 * thing in one request, so it was always over the cap and always answered 400.
 * Not a voice-chain failure at all — the request never reached a backend.
 * Owner, once the failure could finally name itself: "This recording couldn't
 * be generated." — which is exactly what `invalid_text` (a 400) says.
 *
 * 3000 covers the longest passage the generator produces with headroom, and is
 * still a bound: the endpoint is per-user quota-gated and budget-gated, and
 * the free Edge voice is charged per request rather than per character. Keep
 * it a fixed cap — an unbounded one turns a single request into an unbounded
 * synthesis bill the moment a metered backend is configured.
 */
const MAX_TTS_CHARS = 3000;

/** Hex SHA-256 — the identity of a TTS request, used by BOTH cache layers. */
async function sha256Hex(s) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Whitelisted characters for an <phoneme> IPA string: Unicode letters (covers IPA
// symbols ʃ ʒ ɲ ʎ ɡ and the modifier-letter stress/length marks ˈ ˌ ː ˑ, all in the
// Letter category), combining marks (\p{M} covers IPA diacritics and the tie bars
// U+035C/U+0361), the syllable-break dot, and spaces. Anything else (esp. < > & " ')
// is rejected so a caller can never inject markup into the ph attribute. Cap 80 chars.
const SAFE_IPA = /^[\p{L}\p{M}. ]{1,80}$/u;

export function buildAzureSsml(
  text,
  { slow = false, prosody = null, voice = DEFAULT_VOICE, phoneme = null } = {},
) {
  const safeVoice = SAFE_VOICE.test(voice) ? voice : DEFAULT_VOICE;
  const esc = (s) =>
    String(s).replace(
      /[<>&"']/g,
      (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c],
    );
  const safeText = esc(text);
  // Wrap the text in an IPA <phoneme> when a valid pronunciation override is given.
  // Azure's hr-HR voice mis-segments some low-frequency/slang words (e.g. it reads
  // "odjebi" as "od jeb i"); an explicit IPA fixes those. Validated + escaped.
  const inner =
    typeof phoneme === 'string' && SAFE_IPA.test(phoneme)
      ? `<phoneme alphabet="ipa" ph="${esc(phoneme)}">${safeText}</phoneme>`
      : safeText;
  const attrs = [];
  if (prosody && typeof prosody === 'object') {
    if (
      typeof prosody.pitch === 'string' &&
      (SAFE_PCT.test(prosody.pitch) || SAFE_ST.test(prosody.pitch))
    )
      attrs.push(`pitch="${prosody.pitch}"`);
    if (isSafeContour(prosody.contour)) attrs.push(`contour="${prosody.contour}"`);
    const r =
      typeof prosody.rate === 'string' && SAFE_PCT.test(prosody.rate)
        ? prosody.rate
        : slow
          ? '-25%'
          : '-8%';
    attrs.push(`rate="${r}"`);
  } else {
    attrs.push(`rate="${slow ? '-25%' : '-8%'}"`);
  }
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="hr-HR"><voice name="${safeVoice}"><prosody ${attrs.join(' ')}>${inner}</prosody></voice></speak>`;
}

// ── Azure TTS ─────────────────────────────────────────────────────────────────
// hr-HR-GabrijelaNeural: native Croatian Neural voice (default).
// hr-HR-SreckoNeural: the male native Neural voice — requested via voiceName
// by the listening-channel narrator alternation (2026-08-14).
// Phonemically accurate for all Croatian diacritics (č, ć, š, ž, đ) and pitch accent.
// Prosody rate: -8% normal, -25% slow mode (study pace).
// Regional failover: tries each region in order until one succeeds.
// Exported for /api/stt-calibration (2026-08-19): the STT golden run
// synthesizes its known phrases through THIS production voice path, so the
// calibration audio is exactly what learners hear.
export async function tryAzure(
  text,
  { slow, prosody, phoneme, voiceName },
  azureKey,
  primaryRegion,
) {
  const ssml = buildAzureSsml(text, { slow, prosody, phoneme, voice: voiceName || undefined });

  const regions = [
    primaryRegion,
    'eastus',
    'eastus2',
    'westeurope',
    'northeurope',
    'westus2',
  ].filter((r, i, a) => r && a.indexOf(r) === i);

  for (const region of regions) {
    try {
      // Use separate per-fetch timeouts so a slow token fetch does not eat into
      // the time budget for the TTS synthesis fetch (shared controller bug).
      const tokenRes = await fetch(
        `https://${region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
        {
          method: 'POST',
          headers: { 'Ocp-Apim-Subscription-Key': azureKey, 'Content-Length': '0' },
          signal: AbortSignal.timeout(5000),
        },
      );
      if (!tokenRes.ok) continue;
      const token = await tokenRes.text();

      const response = await fetch(
        `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-24khz-160kbitrate-mono-mp3',
            'User-Agent': 'NasaHrvatska/1.0',
          },
          body: ssml,
          signal: AbortSignal.timeout(8000),
        },
      );

      if (response.ok) return response.arrayBuffer();
      if (response.status !== 400) break; // 400 = bad SSML, no point retrying other regions
    } catch {
      // Timeout or network error — try next region
    }
  }
  return null;
}

// ── ElevenLabs TTS ───────────────────────────────────────────────────────────
// Charlotte voice (XB0fDUnXU5powFXDhCwa) via eleven_multilingual_v2 model.
// Supports Croatian (hr) natively. More emotive prosody than Azure; slight
// non-native accent on Croatian diacritics — offered as an explicit opt-in.
// Slow mode: speed=0.75 (ElevenLabs native speed control, range 0.7–1.2).
async function tryElevenLabs(text, slow, apiKey) {
  if (!apiKey) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch('https://api.elevenlabs.io/v1/text-to-speech/XB0fDUnXU5powFXDhCwa', {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        language_code: 'hr',
        voice_settings: {
          stability: slow ? 0.65 : 0.5,
          similarity_boost: 0.75,
          style: 0.0,
          use_speaker_boost: true,
          speed: slow ? 0.75 : 1.0,
        },
      }),
      signal: controller.signal,
    });
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

// ── Google Translate TTS ──────────────────────────────────────────────────────
// Unofficial Google Translate speech endpoint — Croatian (hr), no API key.
// Simple HTTP GET; returns audio/mpeg. Works reliably from Cloudflare Workers.
// Capped at 200 chars — sufficient for all vocabulary words and short phrases.
async function tryGoogleTranslateTTS(text, slow) {
  const trimmed = text.slice(0, 200);
  const url =
    `https://translate.google.com/translate_tts` +
    `?ie=UTF-8&q=${encodeURIComponent(trimmed)}&tl=hr&client=gtx` +
    `&ttsspeed=${slow ? '0.3' : '1'}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 11; Tablet Build/RQ3A.210805.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
        Referer: 'https://translate.google.com/',
        Accept: 'audio/mpeg, audio/mp3, audio/*, */*',
      },
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const ct = res.headers.get('content-type') || '';
    // Accept audio/mpeg, audio/mp3, or any binary response
    if (!ct.includes('audio') && !ct.includes('mpeg') && !ct.includes('octet-stream')) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

// ── Microsoft Edge TTS ────────────────────────────────────────────────────────
// hr-HR-GabrijelaNeural via Edge browser's read-aloud endpoint — the SAME
// Croatian neural voice Azure serves, free and with no account.
//
// 2026-09-10: THIS BACKEND HAS NEVER RUN. It began `if (!edgeTtsToken) return
// null` against `env.EDGE_TTS_TOKEN`, which was never set — so the chain's only
// keyless source of a real Croatian voice skipped itself on every request.
// Owner: "Audio did not play. Has not once yet."
//
// CORRECTED 2026-09-12. This note used to continue "and with AZURE_TTS_KEY also
// unset (confirmed from the deploy log that day) the whole endpoint was left
// with Google Translate's robotic voice". THAT WAS NOT ESTABLISHED AND IS NOT
// TRUE TODAY. The deploy log shows only whether AZURE_TTS_KEY is a GITHUB
// SECRET; it cannot see the Cloudflare dashboard, which is where CLAUDE.md's
// env table says the TTS_* names live and where the key actually is.
// `setup-cf-resources.mjs` now reads the Pages project's real env vars on every
// deploy and reports AZURE_TTS_KEY present in BOTH production and preview
// (2026-09-12). Whether it was set on 2026-09-10 is not established either way
// — no evidence was ever gathered that could answer it, which is the point.
//
// So Azure was most likely serving all along, and the Edge finding above stands
// on its own: it is read straight from this function's own source, not inferred
// from a log. The other documented causes of that day's silence — the 500-char
// cap that made AIListeningScreen structurally incapable of producing audio,
// the prefix cache key, the uninstrumented `ttsFetch` path — do not need a
// missing Azure key to explain anything.
//
// The lesson is the one this file keeps relearning: a log that answers a
// NARROWER question than the one you are asking is not evidence for the wider
// one. Read the source that can answer it, or build the check that can.
//
// `trustedclienttoken` IS NOT A SECRET. It is the fixed public client id
// compiled into the Edge browser and published in every open-source edge-tts
// implementation; it identifies no account, carries no billing and grants no
// private access. Gating a free voice behind it as though it were a credential
// is what kept this dark. An env override remains for the day Microsoft rotates
// it, so the constant can be replaced without a deploy.
const EDGE_TRUSTED_CLIENT_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const EDGE_GEC_VERSION = '1-130.0.2849.68';

/**
 * The `Sec-MS-GEC` value the read-aloud endpoint has required since 2024:
 * SHA-256 of (Windows file-time ticks rounded down to 5 minutes) + the trusted
 * client token, uppercase hex. Without it the socket is refused, which would
 * look exactly like "the backup is still not working".
 *
 * BigInt because ticks — 100-nanosecond intervals since 1601 — are ~1.34e17,
 * well past Number.MAX_SAFE_INTEGER (9.0e15), so the arithmetic is outside the
 * range where a Number is guaranteed exact.
 *
 * STATED HONESTLY, because the first draft of this comment claimed the Number
 * path produced a wrong token and a test disproved it: measured over 30,000
 * instants spanning ~95 years, the two paths agree on every one. They agree
 * because each tick is a multiple of 3e9 (hence of 2^9) while the ulp at this
 * magnitude is only 16–32 — a correctness argument that is true, non-obvious,
 * and would have to be re-derived by anyone touching the line. BigInt removes
 * the need for it. It is insurance, not a fix.
 */
export async function edgeSecMsGec(token, nowMs = Date.now()) {
  const SECONDS_1601_TO_1970 = 11644473600n;
  let ticks = BigInt(Math.floor(nowMs / 1000)) + SECONDS_1601_TO_1970;
  ticks -= ticks % 300n; // round down to the 5-minute window
  ticks *= 10000000n; // seconds -> 100-ns intervals
  const bytes = new TextEncoder().encode(`${ticks}${token}`);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

/**
 * The X-Timestamp the read-aloud service expects is JavaScript's own
 * `Date.prototype.toString()` shape ("Wed Sep 10 2026 14:03:02 GMT+0000
 * (Coordinated Universal Time)"), NOT ISO-8601 — which is what this function
 * used to send, untested, for as long as it never ran. Every open-source
 * client sends the JS shape because that is what the Edge browser sends.
 */
function edgeTimestamp(nowMs = Date.now()) {
  const d = new Date(nowMs);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const p2 = (n) => String(n).padStart(2, '0');
  return (
    `${days[d.getUTCDay()]} ${mons[d.getUTCMonth()]} ${p2(d.getUTCDate())} ${d.getUTCFullYear()} ` +
    `${p2(d.getUTCHours())}:${p2(d.getUTCMinutes())}:${p2(d.getUTCSeconds())} ` +
    `GMT+0000 (Coordinated Universal Time)`
  );
}

async function tryEdgeTTS(text, slow, edgeTtsToken) {
  const token = edgeTtsToken || EDGE_TRUSTED_CLIENT_TOKEN;
  const voice = 'hr-HR-GabrijelaNeural';
  const rate = slow ? '-25%' : '-8%';
  const safeText = text.replace(
    /[<>&"']/g,
    (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c],
  );
  const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='hr-HR'><voice name='${voice}'><prosody rate='${rate}'>${safeText}</prosody></voice></speak>`;
  const connId = crypto.randomUUID().replace(/-/g, '').toUpperCase();
  const gec = await edgeSecMsGec(token);
  // https, not wss: a Worker opens an OUTBOUND socket by asking fetch() for the
  // 101 and reading `response.webSocket`. See the transport note below.
  const url =
    `https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1` +
    `?TrustedClientToken=${token}` +
    `&Sec-MS-GEC=${gec}` +
    `&Sec-MS-GEC-Version=${EDGE_GEC_VERSION}` +
    `&ConnectionId=${connId}`;

  // THE TRANSPORT WAS THE SECOND HALF OF THIS BACKEND NEVER WORKING. It used
  // `new WebSocket(url)` — the browser constructor. A Cloudflare Worker opens
  // an outbound socket by requesting the upgrade through fetch() and taking
  // `response.webSocket`; the constructor is a browser API and cannot carry the
  // Origin/User-Agent headers this service checks either. Untestable from here
  // (the dev sandbox's egress proxy blocks speech.platform.bing.com), so it is
  // written to the documented Workers mechanism and every failure is NAMED in
  // the 503 rather than swallowed.
  const res = await fetch(url, {
    headers: {
      Upgrade: 'websocket',
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
      Origin: 'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold',
      'Accept-Language': 'en-US,en;q=0.9',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
    },
  });
  const ws = res.webSocket;
  if (!ws) throw new Error(`edge-tts no upgrade (${res.status})`);
  ws.accept();

  return new Promise((resolve, reject) => {
    const chunks = [];
    let settled = false;
    const finish = (fn, arg) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      try {
        ws.close();
      } catch (closeErr) {
        void closeErr;
      }
      fn(arg);
    };
    const timeout = setTimeout(() => finish(reject, new Error('edge-tts timeout')), 12000);

    ws.addEventListener('message', (event) => {
      if (typeof event.data === 'string') {
        if (event.data.includes('Path:turn.end')) {
          if (chunks.length === 0) return finish(reject, new Error('edge-tts no audio'));
          const total = chunks.reduce((s, c) => s + c.byteLength, 0);
          const merged = new Uint8Array(total);
          let offset = 0;
          for (const chunk of chunks) {
            merged.set(new Uint8Array(chunk), offset);
            offset += chunk.byteLength;
          }
          finish(resolve, merged.buffer);
        }
        return;
      }
      // Binary frame: a 2-byte big-endian header length, then that many bytes
      // of headers, then the mp3 slice.
      const ab = event.data instanceof ArrayBuffer ? event.data : null;
      if (!ab || ab.byteLength < 2) return;
      const audioStart = 2 + new DataView(ab).getUint16(0);
      if (ab.byteLength > audioStart) chunks.push(ab.slice(audioStart));
    });

    ws.addEventListener('error', (e) =>
      finish(reject, e instanceof Error ? e : new Error('edge-tts socket error')),
    );
    ws.addEventListener('close', () =>
      finish(reject, new Error(`edge-tts closed early (${chunks.length} chunks)`)),
    );

    const ts = edgeTimestamp();
    const reqId = crypto.randomUUID().replace(/-/g, '').toUpperCase();
    try {
      ws.send(
        `X-Timestamp:${ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
          `{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`,
      );
      // The trailing Z after a non-ISO timestamp is not a typo — it is what the
      // Edge browser sends, and every working client reproduces it.
      ws.send(
        `X-RequestId:${reqId}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${ts}Z\r\nPath:ssml\r\n\r\n${ssml}`,
      );
    } catch (e) {
      finish(reject, e);
    }
  });
}

// ── Google Cloud TTS ──────────────────────────────────────────────────────────
// hr-HR-Wavenet-B: native Croatian Neural voice (same phoneme quality tier as Azure).
// Uses the Firebase service account already stored in FIREBASE_SERVICE_ACCOUNT_JSON.
// One-time setup: enable the Cloud Text-to-Speech API at:
//   https://console.cloud.google.com/apis/library/texttospeech.googleapis.com
async function _getGoogleAccessToken(serviceAccountJson) {
  const sa = JSON.parse(serviceAccountJson);
  const pemBody = sa.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/\s/g, '');
  const keyBuffer = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));
  const privateKey = await crypto.subtle.importKey(
    'pkcs8',
    keyBuffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const now = Math.floor(Date.now() / 1000);
  const b64url = (s) => btoa(s).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    }),
  );
  const sigInput = new TextEncoder().encode(`${header}.${payload}`);
  const sigBuffer = await crypto.subtle.sign({ name: 'RSASSA-PKCS1-v1_5' }, privateKey, sigInput);
  const sig = b64url(String.fromCharCode(...new Uint8Array(sigBuffer)));
  const jwt = `${header}.${payload}.${sig}`;
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  if (!tokenRes.ok) return null;
  const { access_token } = await tokenRes.json();
  return access_token || null;
}

async function tryGoogle(text, slow, serviceAccountJson) {
  let accessToken;
  try {
    accessToken = await _getGoogleAccessToken(serviceAccountJson);
    if (!accessToken) return null;
  } catch {
    return null;
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode: 'hr-HR', name: 'hr-HR-Wavenet-B', ssmlGender: 'FEMALE' },
        audioConfig: {
          audioEncoding: 'MP3',
          speakingRate: slow ? 0.7 : 0.9,
          pitch: 0,
        },
      }),
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.audioContent) return null;
    // audioContent is base64-encoded MP3 — decode to ArrayBuffer
    const binary = atob(data.audioContent);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

// ── TTS-specific CORS extras ──────────────────────────────────────────────────
// Audio responses expose X-TTS-Backends diagnostic header and vary on Origin.
function ttsCorsHeaders(origin) {
  return {
    ...corsHeaders(origin),
    'Access-Control-Expose-Headers': 'X-TTS-Backends',
    Vary: 'Origin',
  };
}

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('origin') || '';
  return new Response(null, { status: 204, headers: ttsCorsHeaders(origin) });
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function onRequestPost(context) {
  const { request, env } = context;

  // cost: 0 — auth + per-IP rate limit here; the learner's daily quota is
  // charged BELOW, only on the generating miss. A cache hit (edge or KV) is
  // free for the budget and must be free for the quota too: charging it here
  // is what let a day of ordinary practice exhaust the 300/day ceiling and
  // silence every audio request afterwards (found 2026-09-06 when a Level
  // Check's listening section played nothing).
  const gate = await requireAuthedAI(context, { cost: 0, rateLimit: 60 });
  if (!gate.ok) return gate.response;
  const { origin } = gate;

  const AZURE_KEY = env.AZURE_TTS_KEY;
  const PRIMARY_REGION = env.AZURE_TTS_REGION || 'westeurope';
  const ELEVENLABS_KEY = env.ELEVENLABS_API_KEY || null;
  // Google TTS uses the Firebase service account already in Cloudflare — no separate key required.
  const GOOGLE_SA_JSON = env.FIREBASE_SERVICE_ACCOUNT_JSON || env.GOOGLE_TTS_KEY || null;

  // Diagnostic header — tells the client exactly which backends are available.
  // Visible in the debug overlay via the [TTS] log entries.
  const diagBackends =
    [
      AZURE_KEY ? 'azure' : null,
      ELEVENLABS_KEY ? 'elevenlabs' : null,
      'edge',
      'gtranslate',
      GOOGLE_SA_JSON ? 'google' : null,
    ]
      .filter(Boolean)
      .join(',') || 'none';

  try {
    const ct = request.headers.get('content-type') || '';
    if (!ct.includes('application/json')) {
      return new Response('Invalid content type', { status: 400, headers: ttsCorsHeaders(origin) });
    }
    // Malformed JSON must be a 400, not the outer catch's plain-text 500.
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400, headers: ttsCorsHeaders(origin) });
    }
    body = body || {};
    const text = body.text;
    const slow = body.slow === true;
    // 'charlotte' = ElevenLabs Charlotte voice; 'srecko' = Azure hr-HR-SreckoNeural
    // (male native narrator — listening sets alternate voices, 2026-08-14);
    // anything else = Azure Gabriela (default)
    const voice =
      body.voice === 'charlotte' ? 'charlotte' : body.voice === 'srecko' ? 'srecko' : 'gabrijela';
    // Optional prosody object for minimal-pair pitch-accent contrasts (Azure path only).
    // Validated inside buildAzureSsml — only whitelisted values are emitted into SSML.
    const prosody = body.prosody && typeof body.prosody === 'object' ? body.prosody : null;
    // Optional IPA pronunciation override (Azure path only). Validated + escaped
    // inside buildAzureSsml. Used for slang/low-frequency words the neural voice
    // mis-segments (e.g. "odjebi" → "od jeb i").
    const phoneme = typeof body.phoneme === 'string' ? body.phoneme : null;

    if (typeof text !== 'string' || !text.trim() || text.length > MAX_TTS_CHARS) {
      return new Response('Invalid text', { status: 400, headers: ttsCorsHeaders(origin) });
    }

    // ── Edge cache (POST responses aren't auto-cached by Cloudflare) ──────────
    // Voice is included in the key so Gabriela and Charlotte audio never collide.
    // Prosody fingerprint ensures different contours don't serve each other's cached audio.
    const prosodyKey = prosody ? encodeURIComponent(JSON.stringify(prosody)) : '';
    // phoneme is part of the key so an IPA-corrected request never collides with the
    // plain cached audio for the same word (and vice-versa).
    const phonemeKey = phoneme ? encodeURIComponent(phoneme) : '';
    // ONE identity string for BOTH cache layers, hashed once.
    //
    // The edge key used to be the first 400 CHARACTERS of the text. That was
    // survivable while the cap was 500; raising it to MAX_TTS_CHARS would make
    // it a live collision — two different listening passages that open with the
    // same 400 characters (a shared dialogue opening, a repeated scene-setting
    // line) would serve each other's audio, which is a learner hearing the
    // wrong recording with no error anywhere. Raising the cap and fixing this
    // key are one change; doing only the first would trade a 400 for silence.
    //
    // The KV half already hashed the FULL text and its key format is unchanged,
    // so the durable 90-day cache survives this deploy intact. Only the edge
    // key moves (v3 → v4), and that layer is transient by design.
    const identity = `${voice}|${slow}|${prosodyKey}|${phonemeKey}|${text}`;
    let identityHash = null;
    try {
      identityHash = await sha256Hex(identity);
    } catch {
      identityHash = null; // digest unavailable → behave as if uncached
    }
    const cacheKey = identityHash
      ? new Request(`https://tts-cache.internal/v4/${identityHash}`, { method: 'GET' })
      : null;
    let edgeCache;
    try {
      // No hash → no key → no edge caching, rather than caching under a key
      // that cannot distinguish two different texts.
      edgeCache = cacheKey ? caches.default : null;
      if (edgeCache) {
        const cached = await edgeCache.match(cacheKey);
        if (cached) return cached;
      }
    } catch {
      edgeCache = null;
    }

    // ── Global KV audio cache — a phrase is generated ONCE, ever ─────────────
    // The edge cache above is per-colo and evicts freely; this layer makes the
    // audio for a given (text, voice, prosody, phoneme, slow) global and
    // durable for 90 days. In a language app the same phrases repeat endlessly
    // (lesson content is finite), so this converges provider spend toward zero
    // and repeat latency toward a single KV read.
    const kv = env.KV || env.PUSH_SUBSCRIPTIONS || null;
    let kvKey = null;
    if (kv && identityHash) {
      try {
        // The SAME identity string the edge key now hashes, so the two layers
        // cannot disagree about what counts as the same request. The key
        // FORMAT is unchanged from when this digest was computed inline here,
        // which is what keeps the durable 90-day cache valid across this
        // deploy — only the edge key moved.
        kvKey = 'tts:v3:' + identityHash;
        const hit = await kv.get(kvKey, { type: 'arrayBuffer' });
        if (isPlayableAudio(hit)) {
          const kvResponse = new Response(hit, {
            status: 200,
            headers: {
              'Content-Type': 'audio/mpeg',
              'Cache-Control': 'public, max-age=86400',
              // Says CACHE, not a backend name. This audio was generated at
              // some point in the last 90 days and the store does not record
              // by what, so naming a provider here would be a guess presented
              // as a fact — the same class as reporting the configured list.
              'X-TTS-Backends': 'kv-cache',
              ...ttsCorsHeaders(origin),
            },
          });
          if (edgeCache) {
            try {
              edgeCache.put(cacheKey, kvResponse.clone());
            } catch {
              /* ignore */
            }
          }
          return kvResponse;
        }
      } catch {
        kvKey = null; // KV unusable → behave exactly as before this layer existed
      }
    }

    // ── Per-user quota: charged ONLY when we actually generate ──────────────
    // Same shape as the budget below. A learner who has spent their daily
    // turns still hears every phrase anyone has ever generated; only a NEW
    // phrase is refused. The 429 body carries the same code the other AI
    // endpoints use so the client can name the reason instead of "unavailable".
    const quota = await checkAIQuota(request, env, gate.uid, 1);
    if (!quota.allowed) {
      return new Response(
        JSON.stringify({
          error: 'daily_quota_exceeded',
          message: 'Daily AI limit reached. Resets at midnight UTC.',
          resetAt: quota.resetAt,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            ...ttsCorsHeaders(origin),
            'X-TTS-Backends': diagBackends,
          },
        },
      );
    }

    // ── Budget: charged ONLY when we actually generate ───────────────────────
    // /api/tts's gate ceiling is 0 (SELF_METERED in _aiBudget.js) precisely so
    // the cache hits above stay free and keep serving even at the monthly cap.
    // A refusal here is a 503, which the client already treats as "fall back
    // to the browser's built-in speech synthesis" — on-device, free, instant.
    const budget = await checkAndChargeBudget(env, '/api/tts:generate');
    if (!budget.allowed) {
      return new Response('TTS unavailable — budget-paused', {
        status: 503,
        headers: { ...ttsCorsHeaders(origin), 'X-TTS-Backends': diagBackends },
      });
    }

    let buffer = null;
    // WHICH backend actually spoke. Until now nothing recorded it: the fresh
    // 200 set no X-TTS-Backends at all and the KV hit set the CONFIGURED list,
    // so "the voice is working" and "which voice is working" were different
    // questions and only the first was answerable. That gap is why the 2026-09-10
    // evidence that Edge synthesizes a full passage had to be INFERRED by
    // elimination from a CI test failure rather than read off a response.
    let servedBy = null;
    /** Run one backend; on playable audio, record its name. */
    const attempt = async (name, fn) => {
      if (isPlayableAudio(buffer)) return;
      try {
        buffer = await fn();
      } catch {
        return; // fall through to the next backend
      }
      if (isPlayableAudio(buffer)) servedBy = name;
    };

    if (voice === 'charlotte') {
      // ── Charlotte path: ElevenLabs first, Azure Gabriela as fallback ────────
      if (ELEVENLABS_KEY) {
        await attempt('elevenlabs', () => tryElevenLabs(text, slow, ELEVENLABS_KEY));
      }
      if (AZURE_KEY) {
        await attempt('azure', () =>
          tryAzure(text, { slow, prosody, phoneme }, AZURE_KEY, PRIMARY_REGION),
        );
      }
    } else {
      // ── Gabriela path (default): Azure → Google Translate → Edge → Google ───
      // ── 1. Azure neural voice (primary): Gabrijela, or Srećko if requested ──
      // NOTE: fallbacks 2–4 below only speak the default female voice; on an
      // Azure outage a 'srecko' request degrades through the same fallback
      // chain the default voice already accepts (audio always plays —
      // narrator variety is pedagogy, not a correctness contract).
      if (AZURE_KEY) {
        await attempt('azure', () =>
          tryAzure(
            text,
            { slow, prosody, phoneme, voiceName: voice === 'srecko' ? 'hr-HR-SreckoNeural' : null },
            AZURE_KEY,
            PRIMARY_REGION,
          ),
        );
      }

      // ── 2. Microsoft Edge hr-HR-GabrijelaNeural (free, no account) ─────────
      // AHEAD of Google Translate since 2026-09-10: it is the same Croatian
      // NEURAL voice Azure serves, where Google Translate's is robotic — and
      // Google Translate is the backend that answers a datacenter IP with a
      // consent body rather than audio. Ordering the good free voice behind
      // the bad one only mattered once the good one could run at all.
      await attempt('edge', () => tryEdgeTTS(text, slow, env.EDGE_TTS_TOKEN || null));

      // ── 3. Google Translate TTS hr (free, HTTP, no key required) ───────────
      await attempt('gtranslate', () => tryGoogleTranslateTTS(text, slow));

      // ── 4. Google hr-HR-Wavenet-B (backup if service account configured) ────
      if (GOOGLE_SA_JSON) {
        await attempt('google', () => tryGoogle(text, slow, GOOGLE_SA_JSON));
      }
    }

    // ── 503 → client falls back to Web Speech API ────────────────────────────
    if (!isPlayableAudio(buffer)) {
      // `buffer` may be a non-empty object here and still be unusable: an empty
      // ArrayBuffer is truthy, which is exactly how a 200 with no audio in it
      // used to reach the learner as silence. Name the byte count in the
      // reason so the next occurrence is diagnosable from the response alone.
      const emptyNote = buffer ? `,empty(${buffer.byteLength}b)` : '';
      const whyFailed =
        voice === 'charlotte'
          ? [
              ELEVENLABS_KEY ? 'elevenlabs-failed' : 'elevenlabs-not-configured',
              AZURE_KEY ? 'azure-failed' : 'azure-not-configured',
            ].join(',')
          : [
              AZURE_KEY ? 'azure-failed' : 'azure-not-configured',
              'edge-failed',
              'gtranslate-failed',
              GOOGLE_SA_JSON ? 'google-failed' : 'google-not-configured',
            ].join(',');
      return new Response(`TTS unavailable — ${whyFailed}${emptyNote}`, {
        status: 503,
        // The FAILED list, not the configured one. `_classifyHttpFailure` reads
        // this header into the Sentry breadcrumb and drops the body except for
        // the budget check, so on the configured list a silent afternoon
        // reported `backends=azure,edge,gtranslate` — the same string a healthy
        // deploy sends. Sending what actually failed makes the next occurrence
        // name its own cause instead of needing the owner to reproduce it.
        headers: { ...ttsCorsHeaders(origin), 'X-TTS-Backends': `${whyFailed}${emptyNote}` },
      });
    }

    const ttsResponse = new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400',
        // The backend that ACTUALLY spoke, not the configured list. A success
        // is as worth naming as a failure: it is what tells us which voice the
        // learner is hearing, and therefore what breaks if it goes away.
        'X-TTS-Backends': servedBy || 'unknown',
        ...ttsCorsHeaders(origin),
      },
    });

    // Store in Cloudflare edge cache asynchronously (non-blocking)
    if (edgeCache) {
      try {
        edgeCache.put(cacheKey, ttsResponse.clone());
      } catch {
        /* ignore */
      }
    }
    // And globally in KV — 90 days; the versioned key retires cleanly if the
    // key scheme ever changes.
    if (kv && kvKey) {
      // Guarded by the same threshold: an unplayable blob written here would
      // sit in KV for 90 days, and the read guard would skip it on every hit —
      // paying the generation cost forever while never serving a sound.
      const put = kv.put(kvKey, buffer, { expirationTtl: 60 * 60 * 24 * 90 }).catch(() => {});
      if (context.waitUntil) context.waitUntil(put);
    }

    return ttsResponse;
  } catch {
    return new Response('TTS proxy error', { status: 500, headers: ttsCorsHeaders(origin) });
  }
}
