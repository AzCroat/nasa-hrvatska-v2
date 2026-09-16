import { useEffect } from 'react';
import { initPostHog, stopPostHog } from '../../lib/analytics';
import { lsGet, lsSet } from '../../lib/safeStorage';

const COOKIE_KEY = 'cookie_consent_v1';

/**
 * Write both consent keys together.
 *
 * COOKIE_KEY is the canonical one — every gate in the app reads it
 * (main.tsx's initPostHog call, isAnalyticsConsented, isReplayConsentGranted,
 * the weekly digest). `cookieConsent` is a legacy mirror that nothing reads
 * today; it is written here only so the accept and withdraw paths can never
 * leave the two disagreeing. One writer, so a future reader of either key sees
 * the same answer.
 */
function writeConsent(value: 'accepted' | 'essential'): void {
  lsSet(COOKIE_KEY, value);
  lsSet('cookieConsent', value);
}

// Auto-accepts essential cookies silently on first load.
// No banner, no user action required.
// Analytics (PostHog) stays off by default — user can enable in Settings.
export default function CookieConsent() {
  useEffect(() => {
    // Guarded: this effect runs on every load, and a profile with site data
    // blocked throws on BOTH the read and the writes — which is precisely the
    // population a cookie-consent component serves. An unguarded throw here
    // escaped the effect and the ErrorBoundary blanked the app for them.
    if (!lsGet(COOKIE_KEY)) {
      writeConsent('essential');
    }
  }, []);

  return null;
}

/**
 * Grant analytics consent. Called by the Settings consent control
 * (DataAccountSection). Until that control existed this function had no caller
 * at all, so 'accepted' was unreachable and every consumer gated on it —
 * PostHog, Firebase Analytics events, Sentry Session Replay and the weekly
 * digest email — was permanently off for every user.
 */
export function acceptAllCookies() {
  writeConsent('accepted');
  initPostHog();
}

/**
 * Withdraw analytics consent. PrivacyScreen tells the learner, on the GDPR
 * Art. 6(1)(a) basis, that they may withdraw "at any time", so this has to bite
 * in the CURRENT session rather than only after a reload: safeLog() re-reads
 * the key on every event, and stopPostHog() opts the loaded SDK out.
 */
export function withdrawAnalyticsConsent() {
  writeConsent('essential');
  stopPostHog();
}
