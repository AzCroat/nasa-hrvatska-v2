/**
 * analyticsConsentReachable.test.tsx — the consent GRANT must have a caller.
 *
 * THE DEFECT THIS EXISTS TO KEEP CLOSED. The cookie banner was removed
 * ("No banner, no user action required"), but every consumer gating on the
 * banner's output was left in place. The only production writer of
 * 'accepted' was `acceptAllCookies()`, and it had ZERO call sites — its own
 * comment said "Keep acceptAll exported so Settings can call it", and Settings
 * never did. So `cookie_consent_v1` could never hold 'accepted' for any real
 * user, and four features were permanently off: PostHog, every Firebase
 * Analytics event through safeLog(), Sentry Session Replay, and the weekly
 * digest email.
 *
 * The digest is the part worth remembering: App.tsx had ALREADY been "fixed"
 * once, off a key written nowhere and onto isAnalyticsConsented() — which was
 * equally unreachable. The bug moved one key along and stayed live. Making two
 * gates agree is not the same as making either reachable.
 *
 * TWO DIFFERENT CLAIMS, TWO DIFFERENT TESTS. That a production module calls
 * the grant, and that the control is MOUNTED where a learner can reach it, are
 * separate facts — a component nothing renders would satisfy the first alone.
 * Imports and declarations are stripped before the call test, because
 * importing a function is not calling it (the `alphabet` lesson).
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import type * as AnalyticsModule from '../lib/analytics';
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

const mockInitPostHog = vi.hoisted(() => vi.fn());
const mockStopPostHog = vi.hoisted(() => vi.fn());

vi.mock('../lib/firebase', () => ({ fbLogEvent: vi.fn() }));
vi.mock('../lib/analytics', async (importOriginal) => {
  const actual = await importOriginal<typeof AnalyticsModule>();
  // isAnalyticsConsented stays REAL — the switch's initial state must be read
  // from the same helper production reads, not from a stub that agrees with us.
  return { ...actual, initPostHog: mockInitPostHog, stopPostHog: mockStopPostHog };
});

// ── SettingsTab render harness (same shape as settings-tab.smoke.test.tsx) ──
vi.mock('../context/AppContext', () => ({
  useApp: vi.fn(() => ({
    au: { u: 'test@example.com', d: 'Test' },
    darkMode: false,
    setDarkMode: vi.fn(),
    setScr: vi.fn(),
    doOut: vi.fn(),
    name: 'Test',
    favs: [],
    jWords: [],
    launchFlashcards: vi.fn(),
    launchSpeaking: vi.fn(),
  })),
  AppProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));
vi.mock('../context/StatsContext.tsx', () => ({
  useStats: vi.fn(() => ({ stats: { xp: 500, lc: 0, str: 0 }, setStats: vi.fn() })),
  StatsProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));
vi.mock('../hooks/useContent', () => ({ useContent: vi.fn(() => ({ content: { V: {} } })) }));
vi.mock('../lib/soundSettings.js', () => ({
  isSoundEnabled: vi.fn(() => false),
  setSoundEnabled: vi.fn(),
  isHapticEnabled: vi.fn(() => false),
  setHapticEnabled: vi.fn(),
  getVoicePreference: vi.fn(() => 'female'),
  setVoicePreference: vi.fn(),
  getSpeechRate: vi.fn(() => 'normal'),
  setSpeechRate: vi.fn(),
}));
vi.mock('../lib/streakFreeze.js', () => ({
  getFreezesStored: vi.fn(() => 0),
  purchaseFreeze: vi.fn(() => ({ ok: false, reason: 'Not enough XP' })),
  FREEZE_COST_XP: 200,
}));
vi.mock('../lib/audio.ts', () => ({
  speak: vi.fn(() => Promise.resolve('ok')),
  getAudioDebugState: vi.fn(() => ({})),
}));
vi.mock('../lib/debugLog.ts', () => ({ getEntries: vi.fn(() => []) }));
vi.mock('../lib/platform.ts', () => ({ isNative: vi.fn(() => false) }));
vi.mock('../lib/firebase.js', () => ({ fbExportUserData: vi.fn(() => Promise.resolve({})) }));
vi.mock('../data', () => ({
  fbDeleteAccount: vi.fn(() => Promise.resolve({ ok: true })),
  sh: vi.fn((x: unknown) => x),
}));

import SettingsTab from '../components/profile/SettingsTab';

const CONSENT_KEY = 'cookie_consent_v1';
const GRANT = 'acceptAllCookies';
const WITHDRAW = 'withdrawAnalyticsConsent';
const DEFINING_FILE = 'components/shared/CookieConsent.tsx';

function renderSettings() {
  localStorage.setItem('nh_goal', 'heritage');
  return render(<SettingsTab syncReady={true} onSyncNow={vi.fn()} />);
}

/** Production .ts/.tsx under src/, excluding every test file. */
function productionSources(): { file: string; text: string }[] {
  return execSync("find src -type f \\( -name '*.ts' -o -name '*.tsx' \\)")
    .toString()
    .trim()
    .split('\n')
    .filter((f) => !f.includes('/tests/') && !f.includes('__tests__') && !/\.test\.tsx?$/.test(f))
    .map((file) => ({ file, text: readFileSync(file, 'utf8') }));
}

/**
 * Strip comments, then imports, then normalise whitespace.
 *
 * COMMENT STRIPPING IS LOAD-BEARING AND WAS ADDED AFTER A MUTATION SURVIVED.
 * With the grant call deleted from the control — the original defect, exactly
 * — this guard stayed GREEN, because a doc comment in analytics.ts says
 * "from acceptAllCookies(), which the Settings consent control calls". Prose
 * mentioning a function read as a call to it. A guard can be satisfied by the
 * very defect it was written to forbid.
 *
 * Imports go next, because importing a function is not calling it (the
 * `alphabet` lesson). Whitespace is normalised last so a prettier reflow can
 * neither satisfy nor break the match.
 */
export function strip(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, ' ') // block comments, incl. JSDoc
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1 ') // line comments, but not https://
    .replace(/import[\s\S]*?from\s*['"][^'"]+['"];?/g, ' ')
    .replace(/\s+/g, ' ');
}

/** Files that CALL `fn`, excluding the file that declares it. */
function callSites(fn: string): string[] {
  const call = new RegExp(`\\b${fn}\\s*\\(`);
  return productionSources()
    .filter(({ file }) => !file.endsWith(DEFINING_FILE))
    .filter(({ text }) => call.test(strip(text)))
    .map(({ file }) => file);
}

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});
afterEach(() => localStorage.clear());

describe('analytics consent — the grant is reachable', () => {
  it('a production module CALLS the consent grant (not merely exports it)', () => {
    // The original defect verbatim: this list was empty.
    expect(callSites(GRANT)).not.toHaveLength(0);
  });

  it('a production module CALLS the withdrawal', () => {
    // PrivacyScreen promises withdrawal "at any time"; an unreachable
    // withdrawal is the same defect pointed the other way.
    expect(callSites(WITHDRAW)).not.toHaveLength(0);
  });

  it('prose about the grant does not count as a call (the stripper)', () => {
    // Driven directly, not inferred from the corpus: this is the hole that let
    // M1 survive, so it gets its own assertion in both directions.
    expect(strip('/** calls acceptAllCookies() somewhere */').match(/acceptAllCookies/)).toBe(null);
    expect(strip('// acceptAllCookies() in a line comment').match(/acceptAllCookies/)).toBe(null);
    expect(strip("import { acceptAllCookies } from './x';").match(/acceptAllCookies/)).toBe(null);
    // …and a real call still survives the stripping, or the guard is vacuous.
    expect(strip('function f() { acceptAllCookies(); }')).toContain('acceptAllCookies(');
    // A URL must not be eaten as a line comment.
    expect(strip("const u = 'https://x.dev/a';")).toContain('https://x.dev/a');
  });

  it('the control is MOUNTED in Settings, not only wired somewhere', () => {
    renderSettings();
    expect(screen.getByTestId('analytics-consent-toggle')).toBeInTheDocument();
  });
});

describe('analytics consent — the control', () => {
  it('reads OFF when consent has never been granted', () => {
    renderSettings();
    expect(screen.getByTestId('analytics-consent-toggle')).toHaveAttribute('aria-checked', 'false');
  });

  it('reads ON when consent was granted on a previous visit', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    renderSettings();
    expect(screen.getByTestId('analytics-consent-toggle')).toHaveAttribute('aria-checked', 'true');
  });

  it('switching ON writes the canonical key and starts PostHog', () => {
    renderSettings();
    fireEvent.click(screen.getByTestId('analytics-consent-toggle'));
    expect(localStorage.getItem(CONSENT_KEY)).toBe('accepted');
    expect(mockInitPostHog).toHaveBeenCalled();
  });

  it('switching OFF withdraws in the SAME session, not just on next load', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    renderSettings();
    fireEvent.click(screen.getByTestId('analytics-consent-toggle'));
    expect(localStorage.getItem(CONSENT_KEY)).toBe('essential');
    // safeLog() re-reads the key per event, so Firebase stops immediately; the
    // loaded PostHog SDK has to be told.
    expect(mockStopPostHog).toHaveBeenCalled();
  });

  it('never leaves the canonical key and its legacy mirror disagreeing', () => {
    renderSettings();
    const toggle = screen.getByTestId('analytics-consent-toggle');
    fireEvent.click(toggle);
    expect(localStorage.getItem('cookieConsent')).toBe(localStorage.getItem(CONSENT_KEY));
    fireEvent.click(toggle);
    expect(localStorage.getItem('cookieConsent')).toBe(localStorage.getItem(CONSENT_KEY));
  });
});

describe('stopPostHog', () => {
  it('opts a loaded SDK out and KEEPS the reference, so opting back in is one call', async () => {
    const actual = await vi.importActual<typeof AnalyticsModule>('../lib/analytics');
    const optOut = vi.fn();
    (window as unknown as Record<string, unknown>).__posthog = { opt_out_capturing: optOut };
    actual.stopPostHog();
    expect(optOut).toHaveBeenCalled();
    // Dropping the reference would force a second posthog.init() on re-opt-in,
    // which is not the library's intended API.
    expect((window as unknown as Record<string, unknown>).__posthog).toBeDefined();
    delete (window as unknown as Record<string, unknown>).__posthog;
  });

  it('is a no-op when PostHog never loaded', async () => {
    const actual = await vi.importActual<typeof AnalyticsModule>('../lib/analytics');
    delete (window as unknown as Record<string, unknown>).__posthog;
    expect(() => actual.stopPostHog()).not.toThrow();
  });
});
