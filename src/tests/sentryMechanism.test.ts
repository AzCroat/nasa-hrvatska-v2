/**
 * sentryMechanism.test.ts — the benign-event filters, checked against the SDK
 * that is actually installed.
 *
 * THE BUG
 * -------
 * Both Sentry filters gated on `mechanism.type === 'onunhandledrejection'`. The
 * browser SDK emits `'auto.browser.global_handlers.onunhandledrejection'`
 * (@sentry/browser 10.x, integrations/globalhandlers.js), so every one of those
 * comparisons was false in production and BOTH filters were dead:
 *
 *   isBenignAbortRejection   → benign aborted fetches reached Sentry
 *   isBenignSwLoadRejection  → benign Safari sw.js load failures reached Sentry
 *
 * Both were meant to be silent, and both paged on the high-priority channel
 * instead — which buries the errors that do matter. What finally exposed it was
 * an `AbortError: Fetch is aborted` from a learner leaving Razgovor mid-reply
 * (see streamCancelRejection.test.ts for the source of that rejection).
 *
 * WHY THE EXISTING UNIT TESTS COULD NOT CATCH IT
 * ---------------------------------------------
 * src/lib/__tests__/sentryHelpers.test.ts passes with the broken equality check,
 * because its fixtures hand-write the bare `'onunhandledrejection'`. A fixture
 * proves the matcher parses a shape; it says nothing about whether the SDK ever
 * sends that shape. Same failure mode deadKeyReaders.test.tsx documents for
 * localStorage keys — a value supplied by the test is not evidence about
 * production.
 *
 * So this file reads the strings out of node_modules rather than restating them.
 * It lives in src/tests/ because tsconfig excludes that directory: everything
 * here can use node:fs, whereas src/lib/__tests__/ is type-checked with only
 * vite/client types and cannot.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { isBenignAbortRejection, isBenignSwLoadRejection } from '../lib/sentryHelpers';

const REAL_MECHANISM = 'auto.browser.global_handlers.onunhandledrejection';

/** Build the event shape Sentry's global handler actually produces. */
function event(
  ex: { type?: string; value?: string },
  mechanismType: string = REAL_MECHANISM,
): { exception: { values: Array<Record<string, unknown>> } } {
  return { exception: { values: [{ ...ex, mechanism: { handled: false, type: mechanismType } }] } };
}

/** Every `type: '…onunhandledrejection'` literal the installed SDK can emit. */
function sdkMechanismTypes(): string[] {
  const files = globSync('node_modules/@sentry/browser/**/*.js').filter(
    (f: string) => !f.endsWith('.map'),
  );
  const found = new Set<string>();
  for (const f of files) {
    for (const m of readFileSync(f, 'utf8').matchAll(
      /type:\s*['"]([^'"]*onunhandledrejection)['"]/g,
    )) {
      found.add(m[1]!);
    }
  }
  return [...found];
}

describe('the mechanism gate matches the installed SDK', () => {
  const types = sdkMechanismTypes();

  it('the probe finds the SDK strings at all', () => {
    // Non-vacuity. If the SDK reorganises its build output and this finds
    // nothing, the per-type loop below would iterate an empty list and pass —
    // the filters could then rot again undetected. So empty must fail loudly.
    expect(types.length).toBeGreaterThan(0);
    // Pinned so a rename shows up in a diff rather than being silently absorbed
    // by the suffix match.
    expect(types).toContain(REAL_MECHANISM);
  });

  it('every mechanism type the SDK emits counts as an unhandled rejection', () => {
    // Note there are two as of 10.62 — global_handlers and web_worker. The old
    // exact-equality check missed both; enumerating them by hand would have
    // missed the second. Asserted through the public filter, because what
    // matters is that a real event gets dropped.
    for (const type of types) {
      expect(
        isBenignAbortRejection(event({ type: 'AbortError', value: 'Fetch is aborted' }, type)),
        `SDK emits ${type} but the filter does not recognise it`,
      ).toBe(true);
    }
  });

  it('drops the exact event that paged', () => {
    // Verbatim from the production issue. "Fetch is aborted" is Safari's
    // wording for a fetch AbortError; Chrome words it differently.
    expect(isBenignAbortRejection(event({ type: 'AbortError', value: 'Fetch is aborted' }))).toBe(
      true,
    );
  });

  it('drops the Safari sw.js load failure under the real mechanism too', () => {
    // Broken by the same equality check, which is why widening this filter for
    // the TypeError variant in July 2026 could not have had any effect.
    expect(
      isBenignSwLoadRejection(
        event({ type: 'TypeError', value: 'Script https://nasahrvatska.com/sw.js load failed' }),
      ),
    ).toBe(true);
  });

  it('does not widen to a different hook in the same namespace', () => {
    // The suffix is anchored on the dot, so onerror stays reported: an uncaught
    // synchronous AbortError is not the benign teardown case.
    expect(
      isBenignAbortRejection(event({ type: 'AbortError' }, 'auto.browser.global_handlers.onerror')),
    ).toBe(false);
    // And a name merely ending in the word, without the namespace dot, must not
    // match — the gate is a namespace suffix, not a substring.
    expect(
      isBenignAbortRejection(event({ type: 'AbortError' }, 'notreallyonunhandledrejection')),
    ).toBe(false);
  });

  it('still reports an AbortError captured any other way', () => {
    // An explicit captureException or a real synchronous throw is not benign.
    expect(isBenignAbortRejection(event({ type: 'AbortError' }, 'generic'))).toBe(false);
  });

  it('still keeps a MIME-type sw.js failure — production Incident 1', () => {
    // The mechanism fix must not have made the actionable case droppable.
    expect(
      isBenignSwLoadRejection(
        event({
          type: 'SecurityError',
          value: "Script sw.js load failed: unsupported MIME type 'text/html'",
        }),
      ),
    ).toBe(false);
  });
});
