import { describe, it, expect, beforeEach } from 'vitest';
import {
  shouldEnableSentryReplay,
  isReplayConsentGranted,
  isBenignAbortRejection,
  isBenignSwLoadRejection,
  chunkHealDisposition,
} from '../sentryHelpers';

describe('shouldEnableSentryReplay', () => {
  // UA samples below are real strings observed in production (DDG) or
  // representative samples (others). Update when DDG ships a new major.
  const DDG_MOBILE_IOS =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 ' +
    '(KHTML, like Gecko) Version/18.6 Mobile/15E148 DuckDuckGo/26 Safari/605.1.15';

  const SAFARI_IOS =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 ' +
    '(KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1';

  const CHROME_ANDROID =
    'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36';

  const FIREFOX_DESKTOP =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.0; rv:130.0) Gecko/20100101 Firefox/130.0';

  it('disables Replay on DuckDuckGo Mobile (iOS)', () => {
    expect(shouldEnableSentryReplay(DDG_MOBILE_IOS)).toBe(false);
  });

  it('enables Replay on stock iOS Safari', () => {
    expect(shouldEnableSentryReplay(SAFARI_IOS)).toBe(true);
  });

  it('enables Replay on Chrome Android', () => {
    expect(shouldEnableSentryReplay(CHROME_ANDROID)).toBe(true);
  });

  it('enables Replay on desktop Firefox', () => {
    expect(shouldEnableSentryReplay(FIREFOX_DESKTOP)).toBe(true);
  });

  it('enables Replay when UA is empty (SSR safety — should not crash)', () => {
    expect(shouldEnableSentryReplay('')).toBe(true);
  });

  it('reads navigator.userAgent when no argument passed', () => {
    // In vitest jsdom, navigator.userAgent is a non-DDG string by default.
    // The function should fall back to it and return true.
    expect(shouldEnableSentryReplay()).toBe(true);
  });
});

describe('isReplayConsentGranted', () => {
  it('permits Replay only when consent is exactly "accepted"', () => {
    expect(isReplayConsentGranted('accepted')).toBe(true);
  });

  it('blocks Replay when consent is absent (never set)', () => {
    expect(isReplayConsentGranted(null)).toBe(false);
    expect(isReplayConsentGranted(undefined)).toBe(false);
    expect(isReplayConsentGranted('')).toBe(false);
  });

  it('blocks Replay when the user declined or the value is anything else', () => {
    expect(isReplayConsentGranted('declined')).toBe(false);
    expect(isReplayConsentGranted('rejected')).toBe(false);
    expect(isReplayConsentGranted('true')).toBe(false);
    expect(isReplayConsentGranted('Accepted')).toBe(false); // case-sensitive by design
  });
});

describe('isBenignAbortRejection', () => {
  const unhandled = (over: Record<string, unknown>) => ({
    exception: { values: [{ mechanism: { type: 'onunhandledrejection' }, ...over }] },
  });

  it('is true for an AbortError-typed unhandled rejection (the DDG Mobile issue)', () => {
    expect(isBenignAbortRejection(unhandled({ type: 'AbortError', value: 'AbortError' }))).toBe(
      true,
    );
  });

  it('matches AbortError named in the value even when type differs', () => {
    expect(
      isBenignAbortRejection(unhandled({ type: 'Error', value: 'AbortError: AbortError' })),
    ).toBe(true);
  });

  it('does NOT drop an AbortError captured any other way (e.g. explicit capture)', () => {
    expect(
      isBenignAbortRejection({
        exception: { values: [{ type: 'AbortError', mechanism: { type: 'generic' } }] },
      }),
    ).toBe(false);
    // no mechanism at all → not the unhandledrejection path → keep it
    expect(isBenignAbortRejection({ exception: { values: [{ type: 'AbortError' }] } })).toBe(false);
  });

  it('does NOT drop a real (non-abort) unhandled rejection', () => {
    expect(
      isBenignAbortRejection(unhandled({ type: 'TypeError', value: 'x is not a function' })),
    ).toBe(false);
  });

  it('is false for empty / missing event shapes (never throws)', () => {
    expect(isBenignAbortRejection(null)).toBe(false);
    expect(isBenignAbortRejection(undefined)).toBe(false);
    expect(isBenignAbortRejection({})).toBe(false);
    expect(isBenignAbortRejection({ exception: { values: [] } })).toBe(false);
  });
});

describe('isBenignSwLoadRejection', () => {
  const unhandled = (ex: { type?: string; value?: string }) => ({
    exception: { values: [{ ...ex, mechanism: { type: 'onunhandledrejection' } }] },
  });

  it('drops the Safari signature: SecurityError + sw.js load failed via unhandledrejection', () => {
    expect(
      isBenignSwLoadRejection(
        unhandled({
          type: 'SecurityError',
          value: 'Script https://nasahrvatska.com/sw.js load failed',
        }),
      ),
    ).toBe(true);
  });

  it('matches SecurityError named in the value when the type is generic', () => {
    expect(
      isBenignSwLoadRejection(
        unhandled({ type: 'Error', value: 'SecurityError: Script https://x/sw.js load failed' }),
      ),
    ).toBe(true);
  });

  it('does NOT drop a SecurityError unrelated to sw.js', () => {
    expect(
      isBenignSwLoadRejection(
        unhandled({ type: 'SecurityError', value: 'Blocked a frame with origin' }),
      ),
    ).toBe(false);
  });

  // This assertion previously read "does NOT drop an sw.js failure that is not a
  // SecurityError" and expected false — it encoded the gap as correct behaviour.
  // Safari reports the SAME environmental registration failure as a TypeError, so
  // requiring SecurityError is why these kept paging despite this filter existing.
  it('drops Safari TypeError variant of the same environmental failure', () => {
    expect(
      isBenignSwLoadRejection(
        unhandled({ type: 'TypeError', value: 'Script https://x/sw.js load failed' }),
      ),
    ).toBe(true);
    // Trailing period + the real production URL.
    expect(
      isBenignSwLoadRejection(
        unhandled({
          type: 'TypeError',
          value: 'Script https://nasahrvatska.com/sw.js load failed.',
        }),
      ),
    ).toBe(true);
  });

  it('KEEPS reporting a MIME-type failure — sw.js served as text/html is actionable', () => {
    // Production Incident 1: sw.js served with the wrong Content-Type silently
    // breaks the SW update flow for every user on that deploy. Widening the type
    // check must never swallow this.
    expect(
      isBenignSwLoadRejection(
        unhandled({
          type: 'TypeError',
          value:
            'Script https://nasahrvatska.com/sw.js load failed: unsupported MIME type (text/html)',
        }),
      ),
    ).toBe(false);
    expect(
      isBenignSwLoadRejection(
        unhandled({
          type: 'SecurityError',
          value: 'Failed to register a ServiceWorker: the script has an unsupported MIME type',
        }),
      ),
    ).toBe(false);
  });

  it('does NOT drop a TypeError whose message is more than the bare load failure', () => {
    // The TypeError branch is anchored to the whole message, so a richer error
    // that merely mentions sw.js cannot match by accident.
    expect(
      isBenignSwLoadRejection(
        unhandled({
          type: 'TypeError',
          value: "Script https://x/sw.js load failed because scope '/' is already claimed",
        }),
      ),
    ).toBe(false);
  });

  it('does NOT drop a TypeError unrelated to sw.js', () => {
    expect(
      isBenignSwLoadRejection(
        unhandled({ type: 'TypeError', value: 'Script https://x/vendor.js load failed' }),
      ),
    ).toBe(false);
  });

  it('does NOT drop the same error captured outside unhandledrejection', () => {
    expect(
      isBenignSwLoadRejection({
        exception: {
          values: [
            {
              type: 'SecurityError',
              value: 'Script https://x/sw.js load failed',
              mechanism: { type: 'generic' },
            },
          ],
        },
      }),
    ).toBe(false);
  });

  it('is false for empty / missing shapes (never throws)', () => {
    expect(isBenignSwLoadRejection(null)).toBe(false);
    expect(isBenignSwLoadRejection({})).toBe(false);
  });
});

describe('chunkHealDisposition', () => {
  // The peek reads the same sessionStorage budget the healer consumes.
  const KEY = 'nh_reload_attempt';
  const BINDING_KEY = 'nh_binding_reload';
  const spend = (key: string, n: number) =>
    sessionStorage.setItem(key, JSON.stringify({ n, ts: Date.now() }));

  const chunkEvent = (value: string, type = 'TypeError') => ({
    exception: { values: [{ type, value }] },
  });

  beforeEach(() => {
    sessionStorage.clear();
  });

  it('drops a chunk event while the heal budget is available (working heal residue)', () => {
    expect(chunkHealDisposition(chunkEvent('Importing a module script failed.'))).toBe('drop');
  });

  it('drops the Chrome dynamic-import variant too', () => {
    expect(
      chunkHealDisposition(
        chunkEvent('Failed to fetch dynamically imported module: https://x/chunk-abc.js'),
      ),
    ).toBe('drop');
  });

  it('keeps a chunk event once the reload budget is exhausted (genuinely stuck user)', () => {
    spend(KEY, 2);
    expect(chunkHealDisposition(chunkEvent('Importing a module script failed.'))).toBe(
      'keep-exhausted',
    );
  });

  it('uses the binding-reload budget for stale named-import errors', () => {
    spend(KEY, 2); // main budget spent — must NOT affect the binding path
    expect(chunkHealDisposition(chunkEvent("Importing binding name 'X' is not found."))).toBe(
      'drop',
    );
    spend(BINDING_KEY, 2);
    expect(chunkHealDisposition(chunkEvent("Importing binding name 'X' is not found."))).toBe(
      'keep-exhausted',
    );
  });

  it('ignores non-chunk errors entirely', () => {
    expect(chunkHealDisposition(chunkEvent('Cannot read properties of undefined'))).toBe(
      'not-chunk',
    );
    expect(chunkHealDisposition({})).toBe('not-chunk');
  });

  it('reads message-only events (no exception envelope)', () => {
    expect(chunkHealDisposition({ message: 'Importing a module script failed.' })).toBe('drop');
  });

  it('is read-only: peeking never charges the budget', () => {
    for (let i = 0; i < 5; i++) {
      chunkHealDisposition(chunkEvent('Importing a module script failed.'));
    }
    expect(sessionStorage.getItem(KEY)).toBeNull();
  });
});
