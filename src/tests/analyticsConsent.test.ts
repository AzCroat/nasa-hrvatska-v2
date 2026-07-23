/**
 * analyticsConsent.test.ts — pins the canonical consent gate.
 *
 * The weekly digest email (App.tsx) previously gated on 'nh_analytics_consent',
 * a key written nowhere in the app — so it could never send. It now gates on
 * isAnalyticsConsented(), the same helper the rest of analytics uses, which
 * reads the unified 'cookie_consent_v1' === 'accepted' key. These tests lock
 * that contract so a future rename can't silently re-break the digest.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';

// analytics.ts imports firebase (heavy SDK) — stub it so the unit stays isolated.
vi.mock('../lib/firebase', () => ({ fbLogEvent: vi.fn() }));

import { isAnalyticsConsented } from '../lib/analytics';

describe('isAnalyticsConsented', () => {
  beforeEach(() => localStorage.clear());

  it('is true only when cookie_consent_v1 === "accepted"', () => {
    localStorage.setItem('cookie_consent_v1', 'accepted');
    expect(isAnalyticsConsented()).toBe(true);
  });

  it('is false for the essential-only value', () => {
    localStorage.setItem('cookie_consent_v1', 'essential');
    expect(isAnalyticsConsented()).toBe(false);
  });

  it('is false when consent is unset', () => {
    expect(isAnalyticsConsented()).toBe(false);
  });

  it('ignores the dead legacy key nh_analytics_consent', () => {
    // The digest bug: this key was checked but never written. Setting it must
    // NOT grant consent — only the canonical key counts.
    localStorage.setItem('nh_analytics_consent', 'true');
    expect(isAnalyticsConsented()).toBe(false);
  });
});
