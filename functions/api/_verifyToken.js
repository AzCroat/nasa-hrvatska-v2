/**
 * Firebase ID token verification for Cloudflare Workers.
 * Verifies the JWT signature using RS256 (RSASSA-PKCS1-v1_5 + SHA-256) against
 * Firebase's public JWKS endpoint, with 1-hour edge cache to avoid per-request fetches.
 */

const JWKS_URL =
  'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';

/** Fetch Firebase's public JWK set, cached for 1 hour via Cloudflare Cache API. */
async function getJWKS() {
  let cache = null;
  try {
    cache = caches.default;
  } catch {
    /* cache unavailable — continue without caching */
  }

  const cacheReq = new Request(JWKS_URL, { method: 'GET' });
  if (cache) {
    try {
      const hit = await cache.match(cacheReq);
      if (hit) return await hit.json();
    } catch {
      /* cache miss or stale — fall through to network */
    }
  }

  const res = await fetch(JWKS_URL, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`JWKS fetch failed: ${res.status}`);
  const jwks = await res.json();

  if (cache) {
    cache
      .put(
        cacheReq,
        new Response(JSON.stringify(jwks), {
          headers: { 'Cache-Control': 'public, max-age=3600' },
        }),
      )
      .catch(() => {});
  }

  return jwks;
}

/** Verify an RS256 JWT signature against a JWKS. Returns true only if cryptographically valid. */
async function verifyRS256Signature(headerB64u, payloadB64u, signatureB64u, jwks) {
  let header;
  try {
    header = JSON.parse(atob(headerB64u.replace(/-/g, '+').replace(/_/g, '/')));
  } catch {
    return false;
  }

  if (header.alg !== 'RS256') return false;

  const key = (jwks.keys || []).find((k) => k.kid === header.kid && k.use === 'sig');
  if (!key) return false;

  let publicKey;
  try {
    publicKey = await crypto.subtle.importKey(
      'jwk',
      key,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['verify'],
    );
  } catch {
    return false;
  }

  const signedInput = new TextEncoder().encode(`${headerB64u}.${payloadB64u}`);
  const sigBytes = Uint8Array.from(atob(signatureB64u.replace(/-/g, '+').replace(/_/g, '/')), (c) =>
    c.charCodeAt(0),
  );

  try {
    return await crypto.subtle.verify(
      { name: 'RSASSA-PKCS1-v1_5' },
      publicKey,
      sigBytes,
      signedInput,
    );
  } catch {
    return false;
  }
}

/**
 * Fully verify a Firebase ID token and return its validated payload, or null.
 * Single source of truth for token verification — getFirebaseUid and
 * getFirebaseClaims both build on it so there is exactly one crypto path.
 */
export async function verifyFirebaseToken(request, projectId) {
  try {
    const auth = request.headers.get('authorization') || '';
    if (!auth.startsWith('Bearer ')) return null;
    const token = auth.slice(7).trim();
    if (!token) return null;

    const parts = token.split('.');
    if (parts.length !== 3) return null;

    let payload;
    try {
      payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    } catch {
      return null;
    }

    // Validate Firebase-specific claims (fast path before crypto)
    const now = Math.floor(Date.now() / 1000);
    if (payload.iss !== `https://securetoken.google.com/${projectId}`) return null;
    if (payload.aud !== projectId) return null;
    if (!payload.sub || !payload.user_id) return null;
    if (payload.exp < now) return null;
    // iat must not be in the future (allow 60s clock skew); guards against pre-issued tokens
    if (!payload.iat || payload.iat > now + 60) return null;

    // Cryptographic RS256 signature verification — reject if JWKS unavailable
    const jwks = await getJWKS();
    const valid = await verifyRS256Signature(parts[0], parts[1], parts[2], jwks);
    if (!valid) return null;

    return payload;
  } catch (e) {
    // JWKS fetch failed (network error) — reject to avoid auth bypass
    console.error('[verifyToken] token verification failed:', e.message);
    return null;
  }
}

export async function getFirebaseUid(request, projectId) {
  const payload = await verifyFirebaseToken(request, projectId);
  return payload ? payload.user_id : null;
}

/**
 * Verify the token and return the identity claims the app keys data on:
 *   uid   — the opaque Firebase user_id (push/clan KV keys)
 *   email — the email claim (Firestore doc IDs are email-derived app-wide)
 * Returns null if the token is invalid.
 */
export async function getFirebaseClaims(request, projectId) {
  const payload = await verifyFirebaseToken(request, projectId);
  if (!payload) return null;
  return {
    uid: payload.user_id,
    email: typeof payload.email === 'string' ? payload.email : null,
  };
}
