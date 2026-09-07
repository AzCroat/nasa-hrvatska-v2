// src/lib/aiPost.ts
// SP5: shared wrapper for AI endpoint POST requests.
// Attaches a Firebase Bearer token (when available) and the userContext payload.

import { getFirebaseBearer } from './audio';
import { buildUserContext } from './userContext';
import { API_BASE } from './platform';

export interface AiPostOptions {
  skipUserContext?: boolean;
  /** Optional AbortSignal — required for cancelable streaming endpoints (e.g. /api/conversation). */
  signal?: AbortSignal;
}

/**
 * Default request timeout when the caller supplies no signal (2026-09-07).
 * Every writing-feedback surface (WritingScreen, GuidedWriting, the Level
 * Check's writing task) and the speaking coach call this WITHOUT a signal, so
 * a hung connection left "Grading your writing…" spinning forever — the
 * learner's only way out was to leave the screen. The server's own Anthropic
 * timeout is 25 s; 35 s here lets a slow-but-alive evaluation land and turns
 * a dead one into a named 'timeout' failure with a Try again. Streaming
 * callers pass their own signal and are untouched.
 */
export const AI_POST_TIMEOUT_MS = 35_000;

export async function _aiPost(
  path: string,
  body: Record<string, unknown>,
  opts?: AiPostOptions,
): Promise<Response> {
  const enrichedBody = opts?.skipUserContext ? body : { ...body, userContext: buildUserContext() };
  const payload = JSON.stringify(enrichedBody);

  async function attempt(forceRefresh: boolean): Promise<Response> {
    const bearer = await getFirebaseBearer(forceRefresh);
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (bearer) headers.Authorization = 'Bearer ' + bearer;
    let signal = opts?.signal;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!signal) {
      const controller = new AbortController();
      timer = setTimeout(() => controller.abort(), AI_POST_TIMEOUT_MS);
      signal = controller.signal;
    }
    // On Capacitor native the app runs from https://localhost, which has no Pages
    // Functions — a relative '/api/...' resolves there and 404s to the SPA-fallback
    // HTML, so EVERY _aiPost feature (Razgovor streaming conversation, writing
    // correction, DialogueSim, live tutor) failed with "empty response" on the
    // native app. API_BASE is '' on web (relative, unchanged) and the live origin
    // on native. fetch() is kept so SSE streaming still works with an absolute URL.
    try {
      return await fetch(API_BASE + path, { method: 'POST', headers, body: payload, signal });
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  const res = await attempt(false);
  // A Firebase ID token expires ~hourly, and getFirebaseBearer memoizes it for the
  // session. On a long session an AI call (writing correction, grammar diagnosis,
  // the MC/cloze explain-error coaches, etc.) can 401 on the now-stale token. Mirror
  // apiFetch: force-refresh the token once and retry, so a mid-session AI request
  // doesn't fail with "session expired".
  if (res.status === 401) {
    return attempt(true);
  }
  return res;
}
