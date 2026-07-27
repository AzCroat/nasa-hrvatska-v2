import { getAuth } from 'firebase/auth';
import { API_BASE } from './platform';

/**
 * Wrapper around fetch that automatically includes the Firebase ID token
 * for authenticated API calls to /api/* endpoints.
 *
 * Applies a 30-second default timeout to prevent permanent loading spinners.
 * Automatically retries up to 2 times on network errors (not HTTP errors,
 * not aborts) with exponential backoff — but only when the caller has NOT
 * provided their own AbortSignal (to respect caller-controlled timeouts).
 */

/**
 * Resolve a relative '/api/...' path against the live origin on Capacitor native.
 *
 * On native the app is served from https://localhost, which has no Pages
 * Functions: a relative '/api/...' resolves *there*, and the Capacitor local
 * server answers with the SPA index.html — so every caller got HTTP 200 with an
 * HTML body and failed at `res.json()`. `_aiPost` was given API_BASE for exactly
 * this reason (see aiPost.ts), but apiFetch — the transport behind 27 endpoints
 * and 42 call sites, including Razgovor's /api/maja, /api/translate, /api/tts,
 * /api/srs-sync and /api/push-subscribe — was left relative, so all of them were
 * dead in the native build.
 *
 * API_BASE is '' on web, so this is a no-op there: the URL string is unchanged
 * and every existing timeout, retry and 401 path behaves identically. Absolute
 * URLs are passed through untouched (no caller uses one today, but a future one
 * must not be double-prefixed).
 */
function _resolveUrl(url: string): string {
  return url.startsWith('/') ? API_BASE + url : url;
}
async function _attachToken(options: RequestInit, forceRefresh = false): Promise<void> {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken(forceRefresh);
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  } catch (tokenErr: unknown) {
    const err = tokenErr as Error | undefined;
    console.error('[apiFetch] Failed to get auth token:', err?.message);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('nh:auth-token-error', { detail: { url: '', error: err?.message } }),
      );
    }
  }
}

export async function apiFetch(url: string, options: RequestInit = {}): Promise<Response> {
  await _attachToken(options);
  const target = _resolveUrl(url);

  // If caller supplies their own signal, respect it exactly — no network-retry
  // wrapping (that would fight caller-controlled timeouts). BUT still do a single
  // 401 token-refresh-and-retry: long-running callers like Razgovor pass their
  // own signal, and a Firebase ID token expires ~hourly, so without this a
  // mid-conversation turn 401s ("Sesija je istekla") and the whole session dies.
  // The retry reuses the caller's signal, so their timeout still governs.
  if (options.signal) {
    const res = await fetch(target, options);
    if (res.status === 401) {
      await _attachToken(options, true);
      return fetch(target, options);
    }
    return res;
  }

  // Managed path: internal timeout + retry on transient network errors
  const MAX_RETRIES = 2;
  let _tokenRefreshed = false;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(target, { ...options, signal: controller.signal });
      clearTimeout(timeoutId);
      // On 401 with a stale token, force-refresh once and retry immediately.
      if (response.status === 401 && !_tokenRefreshed) {
        _tokenRefreshed = true;
        await _attachToken(options, true);
        continue;
      }
      return response;
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      const isNetworkError = err instanceof TypeError;
      const isAbort = (err as Error)?.name === 'AbortError';
      if (isAbort || !isNetworkError || attempt === MAX_RETRIES) throw err;
      await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 500));
    }
  }
  // Should never reach here — loop either returns or throws
  throw new Error('apiFetch: max retries exceeded');
}
