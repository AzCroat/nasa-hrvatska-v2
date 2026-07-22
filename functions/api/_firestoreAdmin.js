/**
 * Firebase Admin access via service-account JWT → Google OAuth token, for
 * Cloudflare Workers (no Node Admin SDK). Mirrors the proven token-minting in
 * backfill.js, extracted so account deletion can reuse it. Pure functions;
 * every caller passes env-sourced credentials — nothing is read or logged here.
 */

function b64url(input) {
  const str = typeof input === 'string' ? input : String.fromCharCode(...new Uint8Array(input));
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function b64urlJson(obj) {
  return b64url(JSON.stringify(obj));
}

/**
 * Mint a short-lived Google OAuth access token from a service-account JSON.
 * `scope` defaults to Firestore only; pass a space-separated list to widen it
 * (e.g. add identitytoolkit to delete Auth accounts). Least-privilege by design.
 */
export async function getAdminAccessToken(
  serviceAccountJson,
  scope = 'https://www.googleapis.com/auth/datastore',
) {
  const sa = JSON.parse(serviceAccountJson);
  const now = Math.floor(Date.now() / 1000);

  const header = b64urlJson({ alg: 'RS256', typ: 'JWT' });
  const payload = b64urlJson({
    iss: sa.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  });
  const toSign = `${header}.${payload}`;

  // Strip PEM armour → DER bytes
  const pem = sa.private_key.replace(/-----[^-]+-----/g, '').replace(/\s+/g, '');
  const der = Uint8Array.from(atob(pem), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    der.buffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const sigBuf = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(toSign),
  );

  const jwt = `${toSign}.${b64url(sigBuf)}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
    signal: AbortSignal.timeout(12000),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text().catch(() => '');
    throw new Error(`Token exchange failed ${tokenRes.status}: ${errText.slice(0, 200)}`);
  }
  const { access_token } = await tokenRes.json();
  if (!access_token) throw new Error('No access_token in token response');
  return access_token;
}

/**
 * The Firestore document ID transform used app-wide by the CLIENT
 * (src/lib/userKey.ts). Must match exactly so the server targets the same
 * documents the client wrote — the client keys docs on the EMAIL.
 */
export function emailToDocId(email) {
  return String(email).replace(/[.#$/[\]]/g, '_');
}
