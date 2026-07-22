// src/tests/digest-recipient.test.js
// The weekly-digest endpoint must only ever email the VERIFIED caller's own
// address — never a body-supplied one — and must fail closed when it cannot
// verify the caller. Before this, an authenticated account could make Resend
// send a branded email to any address (spam/phishing relay), and a missing
// project id disabled auth entirely (fail-open).
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../functions/api/_verifyToken.js', () => ({ getFirebaseClaims: vi.fn() }));
vi.mock('../../functions/api/_rateLimit.js', () => ({ checkRateLimit: vi.fn(async () => true) }));
vi.mock('../../functions/api/_helpers.js', () => ({
  isAllowedOrigin: () => true,
  corsHeaders: () => ({}),
}));

import { onRequestPost } from '../../functions/api/digest.js';
import { getFirebaseClaims } from '../../functions/api/_verifyToken.js';

const ENV = {
  ENVIRONMENT: 'production',
  VITE_FIREBASE_PROJECT_ID: 'proj',
  RESEND_API_KEY: 'resend-key',
};

function req(body) {
  return new Request('https://nasahrvatska.com/api/digest', {
    method: 'POST',
    headers: { origin: 'https://nasahrvatska.com', authorization: 'Bearer good' },
    body: JSON.stringify(body),
  });
}

describe('/api/digest recipient safety', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getFirebaseClaims.mockResolvedValue({ uid: 'u1', email: 'owner@mail.com' });
  });

  it('fails CLOSED (503) when the project id is unset — never an open relay', async () => {
    const res = await onRequestPost({
      request: req({ name: 'X' }),
      env: { ...ENV, VITE_FIREBASE_PROJECT_ID: '' },
    });
    expect(res.status).toBe(503);
  });

  it('rejects an unauthenticated caller (401)', async () => {
    getFirebaseClaims.mockResolvedValueOnce(null);
    const res = await onRequestPost({ request: req({ name: 'X' }), env: { ...ENV } });
    expect(res.status).toBe(401);
  });

  it('emails ONLY the verified caller, ignoring a body-supplied recipient', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(JSON.stringify({ id: 'sent' }), { status: 200 }));
    // Attacker tries to redirect the email via the body.
    const res = await onRequestPost({
      request: req({ email: 'victim@evil.com', name: 'Ivan', xp: 100 }),
      env: { ...ENV },
    });
    expect(res.status).toBe(200);
    // Host-anchored match (not a bare substring) — the endpoint POSTs to this exact URL.
    const resendCall = fetchSpy.mock.calls.find(([u]) =>
      String(u).startsWith('https://api.resend.com/'),
    );
    expect(resendCall).toBeTruthy();
    const sentBody = JSON.parse(resendCall[1].body);
    expect(sentBody.to).toEqual(['owner@mail.com']); // token email, NOT victim@evil.com
    fetchSpy.mockRestore();
  });
});
