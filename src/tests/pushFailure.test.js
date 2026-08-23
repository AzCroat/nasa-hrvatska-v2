/**
 * pushFailure.test.js — why a push failed, as a bounded code (2026-08-23).
 *
 * Context: the push heartbeat went red on 2026-08-23 with `all_failing` and
 * could not say why. Three candidate causes — a secret mismatch, a malformed
 * call, and unconfigured VAPID keys — all produced the identical recorded
 * evidence, because the only account of a failure was a console.warn into the
 * Cloudflare tail.
 *
 * Two things are pinned here, and the second matters as much as the first:
 *   1. Each distinguishable failure maps to the code that names ITS fix.
 *   2. The classifier NEVER returns anything outside the closed vocabulary —
 *      in particular it never echoes the error message it was given. Push
 *      endpoints are per-subscriber identifiers and fetch rejections embed
 *      them, so a raw message in a 14-day KV history read by an ops endpoint
 *      would be a subscriber leak wearing a debugging hat.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  PUSH_FAIL_CODES,
  PUSH_FAIL_REASONS,
  classifyPushFailure,
  countPushFailure,
  summarizePushFailures,
} from '../../functions/_pushFailure.js';

const R = PUSH_FAIL_REASONS;

describe('classifyPushFailure — each cause gets the code that names its fix', () => {
  const cases = [
    // The relay refused us. Different refusals, genuinely different fixes.
    ['relay 401 — CRON_SECRET mismatch', { httpStatus: 401 }, R.UNAUTHORIZED],
    [
      'relay 403 — something in front of the route, not the route',
      { httpStatus: 403 },
      R.RELAY_FORBIDDEN,
    ],
    ['relay 400 — malformed call', { httpStatus: 400 }, R.BAD_REQUEST],
    ['relay 429 — some other 4xx', { httpStatus: 429 }, R.RELAY_REJECTED],
    ['relay 502 — relay unreachable', { httpStatus: 502 }, R.RELAY_UNAVAILABLE],

    // The relay threw. The message decides which fix, and is not stored.
    [
      'VAPID keys absent — a config fix',
      { httpStatus: 500, errorMessage: 'VAPID keys not configured in env' },
      R.VAPID_UNCONFIGURED,
    ],
    [
      'endpoint unparseable — a bad stored record',
      { httpStatus: 500, errorMessage: 'Invalid push subscription endpoint URL' },
      R.BAD_ENDPOINT,
    ],
    [
      'key import failed — a key-format fix',
      { httpStatus: 500, errorMessage: 'Unable to import pkcs8 key data' },
      R.SIGNING_FAILED,
    ],
    [
      'anything else thrown stays a last resort, not a bucket',
      { httpStatus: 500, errorMessage: 'something nobody predicted' },
      R.RELAY_ERROR,
    ],

    // No answer at all.
    ['worker fetch never completed', { httpStatus: null }, R.TRANSPORT_ERROR],
    ['worker fetch reported status 0', { httpStatus: 0 }, R.TRANSPORT_ERROR],
    ['no argument at all', undefined, R.TRANSPORT_ERROR],
  ];

  for (const [label, input, expected] of cases) {
    it(label, () => {
      expect(classifyPushFailure(input)).toBe(expected);
    });
  }

  it('a push-service status outranks the relay 200 that carried it', () => {
    // This is the case the worker used to score as a SEND: streak-push answers
    // 200 with ok:true because `ok` only means "not expired", while the push
    // service actually rejected the message.
    expect(classifyPushFailure({ httpStatus: 200, pushStatus: 400 })).toBe(R.PUSH_SERVICE_4XX);
    expect(classifyPushFailure({ httpStatus: 200, pushStatus: 502 })).toBe(R.PUSH_SERVICE_5XX);
  });

  it('a 2xx push status is not a failure code — it never reaches the classifier as one', () => {
    // Defensive: if a 2xx ever arrives here it must not be reported as a push
    // service rejection. It falls through to the relay status, which is 200 and
    // therefore unclassifiable — `unknown` is the honest answer, not 4xx.
    expect(classifyPushFailure({ httpStatus: 200, pushStatus: 201 })).toBe(R.UNKNOWN);
  });

  it('never returns anything outside the closed vocabulary', () => {
    const hostile = [
      { httpStatus: 500, errorMessage: 'fetch failed: https://fcm.googleapis.com/fcm/send/SECRET' },
      { httpStatus: 418, errorMessage: 'uid-123' },
      { httpStatus: 'nonsense', errorMessage: { toString: () => 'obj' } },
      { httpStatus: 500, errorMessage: null },
      { pushStatus: 'NaN' },
    ];
    for (const input of hostile) {
      const code = classifyPushFailure(input);
      expect(PUSH_FAIL_CODES).toContain(code);
    }
  });

  it('does not echo the message it was handed', () => {
    const secret = 'https://fcm.googleapis.com/fcm/send/cJ8xample-endpoint-token';
    const code = classifyPushFailure({ httpStatus: 500, errorMessage: `fetch failed ${secret}` });
    expect(code).not.toContain('fcm');
    expect(code).not.toContain('http');
    expect(PUSH_FAIL_CODES).toContain(code);
  });
});

describe('the throw sites the classifier keys on still say what it thinks', () => {
  // The message patterns are a coupling to streak-push.js. If a throw there is
  // reworded, classification silently degrades to relay_error — correct, but
  // less useful. This test makes the drift visible at the moment it happens
  // rather than the next time someone reads an unhelpful alert.
  const src = readFileSync('functions/api/streak-push.js', 'utf8');

  it('still throws the VAPID-unconfigured message verbatim', () => {
    expect(src).toContain("throw new Error('VAPID keys not configured in env')");
    expect(
      classifyPushFailure({ httpStatus: 500, errorMessage: 'VAPID keys not configured in env' }),
    ).toBe(R.VAPID_UNCONFIGURED);
  });

  it('still throws the invalid-endpoint message verbatim', () => {
    expect(src).toContain("throw new Error('Invalid push subscription endpoint URL')");
    expect(
      classifyPushFailure({
        httpStatus: 500,
        errorMessage: 'Invalid push subscription endpoint URL',
      }),
    ).toBe(R.BAD_ENDPOINT);
  });
});

describe('countPushFailure', () => {
  it('accumulates per code', () => {
    const counts = {};
    countPushFailure(counts, R.UNAUTHORIZED);
    countPushFailure(counts, R.UNAUTHORIZED);
    countPushFailure(counts, R.PUSH_SERVICE_5XX);
    expect(counts).toEqual({ unauthorized: 2, push_service_5xx: 1 });
  });

  it('coerces anything outside the vocabulary to unknown', () => {
    // The stored record is the thing being protected: a caller passing a raw
    // message straight through must not be able to write it into KV.
    const counts = {};
    countPushFailure(counts, 'https://fcm.googleapis.com/fcm/send/abc');
    countPushFailure(counts, undefined);
    expect(counts).toEqual({ unknown: 2 });
  });
});

describe('summarizePushFailures', () => {
  it('orders by frequency, then alphabetically for stability', () => {
    expect(summarizePushFailures({ push_service_5xx: 1, unauthorized: 3, bad_request: 1 })).toBe(
      'unauthorized x3, bad_request x1, push_service_5xx x1',
    );
  });

  it('is empty for nothing to report, so callers can say nothing at all', () => {
    expect(summarizePushFailures({})).toBe('');
    expect(summarizePushFailures(null)).toBe('');
    expect(summarizePushFailures({ unauthorized: 0 })).toBe('');
  });
});
