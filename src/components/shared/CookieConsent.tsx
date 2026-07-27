import { useEffect } from 'react';
import { initPostHog } from '../../lib/analytics';
import { lsGet, lsSet } from '../../lib/safeStorage';

const COOKIE_KEY = 'cookie_consent_v1';

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
      lsSet(COOKIE_KEY, 'essential');
      lsSet('cookieConsent', 'essential');
    }
  }, []);

  return null;
}

// Keep acceptAll exported so Settings can call it if user opts into analytics
export function acceptAllCookies() {
  lsSet(COOKIE_KEY, 'accepted');
  lsSet('cookieConsent', 'accepted');
  initPostHog();
}
