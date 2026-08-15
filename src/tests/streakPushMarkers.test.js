/**
 * streakPushMarkers.test.js — delivery observability for the streak reminder
 * sender (added alongside the 2026-08-14 VAPID re-provisioning).
 *
 * Runs onRequestPost through the REAL VAPID signing path: a valid P-256 pair
 * is generated in-test (private half exported as base64url PKCS8, exactly the
 * format the provisioning workflow stores), and only the outbound push-service
 * fetch is stubbed. Pins:
 *   - a 201 from the push service writes push:lastDeliveredAt + lastStatus
 *   - a 403 (e.g. an old-key subscription before rotation) writes the attempt
 *     markers but NOT lastDeliveredAt
 *   - /api/health exposes the three markers and never counts
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { webcrypto } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { onRequestPost } from '../../functions/api/streak-push.js';

const b64u = (buf) =>
  Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function makeVapidEnv(kv) {
  const kp = await webcrypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, [
    'sign',
    'verify',
  ]);
  return {
    CRON_SECRET: 'test-cron-secret',
    VAPID_PRIVATE_KEY: b64u(await webcrypto.subtle.exportKey('pkcs8', kp.privateKey)),
    VAPID_PUBLIC_KEY: b64u(await webcrypto.subtle.exportKey('raw', kp.publicKey)),
    PUSH_SUBSCRIPTIONS: kv,
  };
}

function fakeKV() {
  const store = new Map();
  return {
    store,
    async get(k) {
      return store.get(k) ?? null;
    },
    async put(k, v) {
      store.set(k, v);
    },
  };
}

function req(body) {
  return new Request('https://x/api/streak-push', {
    method: 'POST',
    headers: { 'x-cron-secret': 'test-cron-secret', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

// Keyless subscription → the sender takes the unencrypted path, so the only
// crypto exercised is the real VAPID ES256 signature.
const SUB = { endpoint: 'https://push.example.com/reg/abc123' };

let realFetch;
beforeEach(() => {
  realFetch = globalThis.fetch;
});
afterEach(() => {
  globalThis.fetch = realFetch;
  vi.restoreAllMocks();
});

describe('streak-push delivery markers', () => {
  it('a push-service 201 writes attempt + delivered markers', async () => {
    const kv = fakeKV();
    const env = await makeVapidEnv(kv);
    globalThis.fetch = vi.fn(async (url, init) => {
      // The real signing path must have produced a VAPID Authorization header.
      expect(init.headers.Authorization).toMatch(/^vapid t=.+,k=.+/);
      expect(String(url)).toBe(SUB.endpoint);
      return new Response(null, { status: 201 });
    });

    const res = await onRequestPost({ request: req({ subscription: SUB, streak: 3 }), env });
    const out = await res.json();
    expect(out.ok).toBe(true);
    expect(out.status).toBe(201);
    expect(kv.store.get('push:lastAttemptAt')).toBeTruthy();
    expect(kv.store.get('push:lastDeliveredAt')).toBeTruthy();
    expect(kv.store.get('push:lastStatus')).toBe('201');
  });

  it('a push-service 403 (old-key subscription) records the attempt but NOT delivery', async () => {
    const kv = fakeKV();
    const env = await makeVapidEnv(kv);
    globalThis.fetch = vi.fn(async () => new Response(null, { status: 403 }));

    const res = await onRequestPost({ request: req({ subscription: SUB, streak: 1 }), env });
    const out = await res.json();
    expect(out.status).toBe(403);
    expect(kv.store.get('push:lastAttemptAt')).toBeTruthy();
    expect(kv.store.get('push:lastStatus')).toBe('403');
    expect(kv.store.get('push:lastDeliveredAt')).toBeUndefined();
  });

  it('health exposes the three markers, timestamps/status only — no counts', () => {
    const src = readFileSync('functions/api/health.js', 'utf8');
    for (const k of ['push:lastAttemptAt', 'push:lastDeliveredAt', 'push:lastStatus']) {
      expect(src).toContain(k);
    }
    expect(src).toContain('pushDelivery');
    // The never-counts posture, same as the backup block.
    expect(src.includes('push:count') || src.includes('deliveredCount')).toBe(false);
  });
});

describe('scheduled worker subrequest hygiene (2026-08-15)', () => {
  it('skips colon-prefixed infra keys BY NAME, before any get()', () => {
    const src = readFileSync('functions/scheduled.js', 'utf8');
    expect(src).toContain("if (key.name.includes(':')) continue;");
    // The skip must come BEFORE the per-key get() so it costs no subrequest.
    const skipIdx = src.indexOf("key.name.includes(':')");
    const getIdx = src.indexOf('PUSH_SUBSCRIPTIONS.get(key.name');
    expect(skipIdx).toBeGreaterThan(0);
    expect(skipIdx).toBeLessThan(getIdx);
  });

  it('subscription keys can never contain a colon (the sanitizer strips it)', () => {
    const src = readFileSync('functions/api/push-subscribe.js', 'utf8');
    expect(src).toMatch(/replace\(\/\[\^a-zA-Z0-9_-\]\/g, '_'\)/);
  });
});
