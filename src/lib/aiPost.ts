// src/lib/aiPost.ts
// SP5: shared wrapper for AI endpoint POST requests.
// Attaches a Firebase Bearer token (when available) and the userContext payload.

import { getFirebaseBearer } from './audio';
import { buildUserContext } from './userContext';

export interface AiPostOptions {
  skipUserContext?: boolean;
  /** Optional AbortSignal — required for cancelable streaming endpoints (e.g. /api/conversation). */
  signal?: AbortSignal;
}

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
    return fetch(path, {
      method: 'POST',
      headers,
      body: payload,
      ...(opts?.signal ? { signal: opts.signal } : {}),
    });
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
