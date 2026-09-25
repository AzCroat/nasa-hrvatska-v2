// src/lib/nativePost.ts
// ═══════════════════════════════════════════════════════════
// Shared native-safe POST helper — R3
// ═══════════════════════════════════════════════════════════
// Generalized transport extracted from audio.ts `_ttsPost` (the only POST path
// that correctly handles Capacitor native). It is parameterized over `path` so
// any authenticated JSON endpoint (e.g. /api/tts, /api/assess-speaking) can use it.
//
// What it does (matching `_ttsPost`'s proven behavior):
//   (a) Native base-URL resolution: on Capacitor native, relative URLs resolve to
//       the bundled WebView origin (https://localhost), not the live domain, so we
//       try each absolute endpoint in `_NATIVE_ENDPOINTS` in order. Web uses ''.
//   (b) Firebase bearer: attaches `Authorization: Bearer <getFirebaseBearer()>`
//       when a signed-in user exists (so server-side auth gates pass).
//   (c) Native HTTP: uses CapacitorHttp.post() (dynamic import of @capacitor/core)
//       on native to bypass WebView fetch() failures (SSL/OEM network policy);
//       falls back to fetch() if CapacitorHttp is unavailable.
//   (d) Failover: on 5xx, try the next endpoint; on 4xx, return immediately.
//       When every endpoint has been tried, the LAST 5xx response is returned
//       (2026-09-06) so the caller can read its status and body — a 503
//       "budget-paused" from /api/tts used to come back as `null`, identical to
//       a dropped connection, and the client filed both as "network". `null`
//       now means exactly what it says: no endpoint answered at all.
//   (e) WHY it answered nothing (2026-09-25). `null` said WHAT happened and
//       never WHY, across 20+ callers — so a real field report
//       (`ai_feedback_failed:pronunciation-assess:server`, no status, no code)
//       could be traced to this function and no further. `getLastTransportFailure()`
//       records the reason as a CODE, cleared on any success so no surface can
//       report another's stale failure as its own (the `ttsFetch` rule).
//
//       THE FIELD REPORT IS EXPLAINED, AND IT WAS THE CALLER THAT HID IT.
//       `PronunciationScorer` did `if (!res) throw new Error('assess_transport_failed')`
//       inside a try whose catch calls `failureFromError` — and a plain `Error`
//       is not a TypeError, not an abort, and the browser was online, so it fell
//       to `build('server')` with NO status and NO code. That is the exact Sentry
//       signature. So the null path was laundered into "the evaluation service is
//       temporarily unavailable" and nothing recorded that nothing had answered.
//
//       ELIMINATED, so nobody re-chases it: `getFirebaseBearer()` cannot throw.
//       Its entire body — including the `await _bearerPromise` that could inherit
//       a rejected cached promise — sits inside one try/catch returning null. It
//       was a live candidate on the strength of being awaited OUTSIDE `send()`,
//       and reading the body settled it.
import { getFirebaseBearer, isNative, _dataUrlToArrayBuffer } from './nativeTransport.js';
import { dbgInfo, dbgWarn } from './debugLog';

export interface NativePostOpts {
  signal?: AbortSignal;
  /** 'json' (default) returns a JSON-wrapped Response; 'blob' preserves binary
   *  bodies (e.g. audio/mpeg from /api/tts) and passes through response headers. */
  responseType?: 'json' | 'blob';
  /** Response header names to preserve on the blob path (e.g. ['X-TTS-Backends']). */
  passthroughHeaders?: string[];
}

/**
 * Why `_nativePost` returned null. A CLOSED vocabulary, like the push-delivery
 * failure codes and `TtsFailure.cause` — never free text, so a consumer's switch
 * cannot start lying and nothing unbounded reaches a report.
 */
export type TransportFailureReason = 'fetch_threw' | 'capacitor_threw' | 'capacitor_unusable_body';

export interface TransportFailure {
  /** The endpoint path asked for, e.g. '/api/pronunciation-assess'. */
  path: string;
  reason: TransportFailureReason;
  /** How many endpoints were tried before giving up (1 on web, 2 on native). */
  attempts: number;
  /**
   * The last thrown error's `name` only — `TypeError`, `AbortError`, a DOMException
   * name. NOT the message: a fetch rejection embeds the URL it failed against, and
   * this value is meant to be safe to put in a report. A caller that wants more
   * detail has the error itself.
   */
  errorName?: string;
  at: number;
}

let _lastTransportFailure: TransportFailure | null = null;

/**
 * The reason the most recent `_nativePost` answered nothing, or null.
 *
 * Cleared by ANY response — including a 4xx or a 5xx — because from that moment
 * the transport demonstrably works and a stale reason would misattribute a
 * handler refusal to a dead connection.
 */
export function getLastTransportFailure(): TransportFailure | null {
  return _lastTransportFailure;
}

/** Test hook. */
export function _resetTransportFailure(): void {
  _lastTransportFailure = null;
}

function _noteTransportFailure(
  path: string,
  reason: TransportFailureReason,
  attempts: number,
  errorName?: string,
): void {
  _lastTransportFailure = {
    path,
    reason,
    attempts,
    at: Date.now(),
    ...(errorName ? { errorName } : {}),
  };
}

// In Capacitor native builds, relative URLs resolve to the bundled WebView server
// (https://localhost), not to the live domain. We try each endpoint in order and
// use the first one that returns a successful (or 4xx) response.
//   1. nasahrvatska.com           — production custom domain (primary)
//   2. nasa-hrvatska-v2.pages.dev — Cloudflare Pages default (always works)
const _NATIVE_ENDPOINTS = ['https://nasahrvatska.com', 'https://nasa-hrvatska-v2.pages.dev'];

type _CapHttp = {
  post: (
    o: Record<string, unknown>,
  ) => Promise<{ status: number; data: unknown; headers: Record<string, string> }>;
};

// Convert a CapacitorHttp JSON response into a standard `Response`, so callers see
// the same shape whether they ran on web fetch() or the native bridge.
function _capDataToResponse(status: number, data: unknown): Response {
  let bodyText: string;
  if (typeof data === 'string') {
    bodyText = data;
  } else if (data == null) {
    bodyText = '';
  } else {
    // CapacitorHttp auto-parses JSON responses into an object; re-serialize so the
    // returned Response's .json()/.text() behave like a normal fetch() Response.
    bodyText = JSON.stringify(data);
  }
  return new Response(bodyText, {
    status,
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

export async function _nativePost(
  path: string,
  body: Record<string, unknown>,
  opts?: NativePostOpts,
): Promise<Response | null> {
  const endpoints = isNative() ? _NATIVE_ENDPOINTS : [''];

  // Run the full transport (native CapacitorHttp + fetch fallback / web fetch)
  // with the given bearer. Extracted into an inner function so we can retry once
  // with a force-refreshed token on 401 — see the call site below.
  async function send(bearer: string | null): Promise<Response | null> {
    // Attach Firebase Bearer token so the server-side auth gate passes. Without it,
    // authenticated endpoints return 401.
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (bearer) {
      headers.Authorization = `Bearer ${bearer}`;
    } else {
      dbgWarn(
        `[nativePost] no Firebase user signed in — request to "${path}" will be unauthenticated`,
      );
    }

    if (isNative()) {
      // Try CapacitorHttp (native Android/iOS HTTP — bypasses WebView fetch() failures).
      let capHttp: _CapHttp | null = null;
      try {
        // Dynamic import keeps @capacitor/core out of the web bundle's main chunk.
        const capacitorModule = (await import('@capacitor/core')) as unknown as {
          CapacitorHttp?: _CapHttp;
        };
        capHttp = capacitorModule.CapacitorHttp ?? null;
        if (capHttp) dbgInfo('[nativePost] CapacitorHttp available — using native HTTP');
      } catch {
        dbgWarn('[nativePost] CapacitorHttp import failed — falling back to fetch()');
      }

      if (capHttp) {
        let lastServerError: Response | null = null;
        let lastErrName: string | undefined;
        let unusableBody = false;
        for (const base of endpoints) {
          const url = `${base}${path}`;
          try {
            dbgInfo(`[nativePost] CapacitorHttp POST → "${url}"`);
            const capOpts: Record<string, unknown> = { url, headers, data: body };
            if (opts?.responseType === 'blob') capOpts.responseType = 'blob';
            const resp = await capHttp.post(capOpts);
            dbgInfo(
              `[nativePost] CapacitorHttp status=${resp.status}${opts?.responseType === 'blob' ? ` data-type=${typeof resp.data}` : ''}`,
            );
            if (resp.status >= 200 && resp.status < 300) {
              if (opts?.responseType === 'blob') {
                // Mirror _ttsPost in audio.ts exactly: native bridge returns binary as
                // a base64 string; convert to Blob and build a proper Response.
                let blob: Blob;
                if (resp.data instanceof Blob) {
                  blob = resp.data;
                } else if (typeof resp.data === 'string' && resp.data.length > 0) {
                  const ab = _dataUrlToArrayBuffer(`data:audio/mpeg;base64,${resp.data}`);
                  blob = new Blob([ab], { type: 'audio/mpeg' });
                } else {
                  dbgWarn(
                    `[nativePost] CapacitorHttp blob: unexpected data type "${typeof resp.data}" len=${String(resp.data).length} — trying next`,
                  );
                  // A 200 whose body cannot be decoded is NOT "nothing answered",
                  // and the two used to be the same null. Remembered so the
                  // reason names the decode rather than the connection.
                  unusableBody = true;
                  continue;
                }
                // Build passthrough headers from the CapacitorHttp response
                const outHeaders: Record<string, string> = { 'Content-Type': 'audio/mpeg' };
                for (const name of opts?.passthroughHeaders ?? []) {
                  const val = resp.headers[name.toLowerCase()] ?? resp.headers[name] ?? '';
                  outHeaders[name] = val;
                }
                return new Response(blob, { status: 200, headers: new Headers(outHeaders) });
              }
              return _capDataToResponse(resp.status, resp.data);
            }
            if (resp.status >= 400 && resp.status < 500) {
              // 4xx — bad request, don't retry other endpoints
              if (opts?.responseType === 'blob') {
                // Mirror _ttsPost ~183–188: return a minimal Response preserving status
                const h: Record<string, string> = {};
                for (const name of opts?.passthroughHeaders ?? []) {
                  h[name] = resp.headers[name.toLowerCase()] ?? resp.headers[name] ?? '';
                }
                return new Response('', { status: resp.status, headers: new Headers(h) });
              }
              return _capDataToResponse(resp.status, resp.data);
            }
            // 5xx: remember it, try next endpoint
            lastServerError = _capDataToResponse(resp.status, resp.data);
          } catch (e: unknown) {
            const err = e as Error;
            lastErrName = err?.name || 'Error';
            dbgWarn(
              `[nativePost] CapacitorHttp → "${url}" error: ${err?.name} — ${err?.message?.slice(0, 100)} — trying next`,
            );
          }
        }
        dbgWarn('[nativePost] CapacitorHttp: all endpoints failed');
        if (!lastServerError) {
          _noteTransportFailure(
            path,
            unusableBody ? 'capacitor_unusable_body' : 'capacitor_threw',
            endpoints.length,
            lastErrName,
          );
        }
        return lastServerError;
      }
      // CapacitorHttp unavailable — fall through to fetch()
    }

    // Web (and native fallback): standard fetch()
    let lastServerError: Response | null = null;
    let lastErrName: string | undefined;
    for (const base of endpoints) {
      const url = `${base}${path}`;
      try {
        const r = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(body),
          ...(opts?.signal ? { signal: opts.signal } : {}),
        });
        dbgInfo(`[nativePost] fetch POST → "${url}" status=${r.status}`);
        if (r.ok) return r;
        // 4xx from server: bad request — don't retry other endpoints
        if (r.status >= 400 && r.status < 500) return r;
        // 5xx or other: remember it, try next endpoint
        lastServerError = r;
      } catch (e: unknown) {
        const err = e as Error;
        if (err?.name === 'AbortError') throw e; // propagate abort immediately
        lastErrName = err?.name || 'Error';
        dbgWarn(
          `[nativePost] fetch → "${url}" error: ${err?.name} — ${err?.message?.slice(0, 80)} — trying next`,
        );
      }
    }
    if (!lastServerError) _noteTransportFailure(path, 'fetch_threw', endpoints.length, lastErrName);
    return lastServerError; // null only when no endpoint answered at all
  }

  let res = await send(await getFirebaseBearer());
  // A 401 means the memoized Firebase ID token expired (~hourly). Force-refresh
  // once and retry — mirrors _aiPost/apiFetch. Without this, native voice STT
  // (/api/stt), TTS (/api/tts — Maja's voice), and speaking assessment silently
  // 401 after ~1h and the spoken turn is lost (the "flaky voice" reputation).
  if (res && res.status === 401) {
    res = await send(await getFirebaseBearer(true));
  }
  // ANY response clears the record — a 4xx and a 5xx both prove the transport
  // works, so keeping a reason from an earlier call would let one surface report
  // another's dead connection as the cause of a handler's refusal.
  if (res) _lastTransportFailure = null;
  return res;
}
