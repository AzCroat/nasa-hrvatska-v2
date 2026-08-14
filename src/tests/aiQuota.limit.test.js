// src/tests/aiQuota.limit.test.js
import { describe, it, expect } from 'vitest';
import { getQuotaStatus } from '../../functions/api/_aiQuota.js';

describe('authed daily AI quota is budget-sized (300/day against the $10/month cap)', () => {
  it('limit for a signed-in user is 300/day — sized against the $10/month budget (owner raise, 2026-08-14)', async () => {
    // No D1/KV bound in test env → getQuotaStatus returns the limit for the uid path.
    const status = await getQuotaStatus({}, 'uid-123');
    expect(status.limit).toBe(300);
  });
});
