// src/tests/delete-account.test.js
// Behavioral test for the server-side account-deletion endpoint. Verifies the
// compliance-critical contract: identity comes from the verified token (never
// the body), all PII documents + subcollections are deleted, the Auth account
// is removed, and the endpoint fails CLOSED (never reports success) when it
// cannot actually erase the data.
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the token verifier so we control the authenticated identity.
vi.mock('../../functions/api/_verifyToken.js', () => ({
  getFirebaseClaims: vi.fn(),
}));
// Mock only the admin-token minter; keep the real emailToDocId transform.
vi.mock('../../functions/api/_firestoreAdmin.js', async (orig) => {
  const actual = await orig();
  return { ...actual, getAdminAccessToken: vi.fn(async () => 'admin-token') };
});
// Rate limit + origin always pass in these tests.
vi.mock('../../functions/api/_rateLimit.js', () => ({ checkRateLimit: vi.fn(async () => true) }));
vi.mock('../../functions/api/_helpers.js', () => ({
  isAllowedOrigin: () => true,
  corsHeaders: () => ({}),
}));

import { onRequestPost } from '../../functions/api/delete-account.js';
import { getFirebaseClaims } from '../../functions/api/_verifyToken.js';

function makeKvStub() {
  const store = new Map();
  return {
    store,
    get: vi.fn(async (k, opts) => {
      const v = store.get(k);
      if (v == null) return null;
      return opts?.type === 'json' ? JSON.parse(v) : v;
    }),
    put: vi.fn(async (k, v) => void store.set(k, v)),
    delete: vi.fn(async (k) => void store.delete(k)),
  };
}

const ENV = {
  ENVIRONMENT: 'production',
  VITE_FIREBASE_PROJECT_ID: 'proj',
  FIREBASE_SERVICE_ACCOUNT_JSON: '{"client_email":"x","private_key":"y"}',
};

function req() {
  return new Request('https://nasahrvatska.com/api/delete-account', {
    method: 'POST',
    headers: { origin: 'https://nasahrvatska.com', authorization: 'Bearer good' },
    body: JSON.stringify({}),
  });
}

describe('/api/delete-account', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getFirebaseClaims.mockResolvedValue({ uid: 'uid-1', email: 'ivan@mail.com' });
  });

  it('rejects an unauthenticated caller (401) without touching data', async () => {
    getFirebaseClaims.mockResolvedValueOnce(null);
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const res = await onRequestPost({ request: req(), env: { ...ENV } });
    expect(res.status).toBe(401);
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('fails CLOSED (500) when admin credentials are missing — never reports success', async () => {
    const res = await onRequestPost({
      request: req(),
      env: { ...ENV, FIREBASE_SERVICE_ACCOUNT_JSON: '' },
    });
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.ok).toBeFalsy();
  });

  it('deletes all PII docs + subcollections + Auth account, keyed on the EMAIL claim', async () => {
    const calls = [];
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(async (url, opts) => {
      calls.push({ url: String(url), method: opts?.method || 'GET' });
      // Subcollection listings return empty (no docs to iterate).
      if (String(url).includes('/xpAudit') || String(url).includes('/conversationMemory')) {
        return new Response(JSON.stringify({ documents: [] }), { status: 200 });
      }
      // batchDelete returns success (no per-id errors).
      if (String(url).includes('accounts:batchDelete')) {
        return new Response(JSON.stringify({}), { status: 200 });
      }
      // Document DELETEs succeed.
      return new Response(JSON.stringify({}), { status: 200 });
    });
    const kv = makeKvStub();

    const res = await onRequestPost({ request: req(), env: { ...ENV, PUSH_SUBSCRIPTIONS: kv } });
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(body.authDeleted).toBe(true);

    // Email 'ivan@mail.com' → doc id 'ivan@mail_com' (only . # $ / [ ] replaced).
    const urls = calls.map((c) => `${c.method} ${c.url}`);
    expect(urls.some((u) => u.startsWith('DELETE') && u.endsWith('/users/ivan@mail_com'))).toBe(
      true,
    );
    expect(urls.some((u) => u.startsWith('DELETE') && u.endsWith('/profiles/ivan@mail_com'))).toBe(
      true,
    );
    expect(urls.some((u) => u.startsWith('DELETE') && u.endsWith('/srs/ivan@mail_com'))).toBe(true);
    // Auth account removed via Identity Toolkit batchDelete on the UID.
    expect(urls.some((u) => u.includes('accounts:batchDelete'))).toBe(true);
    fetchSpy.mockRestore();
  });

  it('reports ok:false (500) when a PII document delete fails — honest failure', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(async (url) => {
      if (String(url).includes('/xpAudit') || String(url).includes('/conversationMemory')) {
        return new Response(JSON.stringify({ documents: [] }), { status: 200 });
      }
      if (String(url).includes('/users/')) return new Response('nope', { status: 500 });
      return new Response(JSON.stringify({}), { status: 200 });
    });
    const res = await onRequestPost({
      request: req(),
      env: { ...ENV, PUSH_SUBSCRIPTIONS: makeKvStub() },
    });
    const body = await res.json();
    expect(res.status).toBe(500);
    expect(body.ok).toBe(false);
    fetchSpy.mockRestore();
  });
});
