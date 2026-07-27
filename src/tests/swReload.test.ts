import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { shouldReloadOnControllerChange, shouldReloadOnSwUpdatedMessage } from '../lib/swReload';

// Regression cover for the first-install reload bug.
//
// src/sw.js does: install → skipWaiting() → activate → clients.claim(). On a page
// with no controller, claim() moves it to controlled, and the browser fires
// `controllerchange` as a direct result. Treating that as "an update landed" made
// every brand-new visitor reload a moment after first paint — and, in Playwright,
// aborted the in-flight navigation (net::ERR_ABORTED on page.goto('/croatia')).
//
// The SW_UPDATED path always had the hadControllerAtLoad guard; the
// controllerchange path had lost it. These tests pin BOTH so they can't drift
// apart again.

describe('shouldReloadOnControllerChange', () => {
  it('does NOT reload a first install (no controller at load)', () => {
    // The regression. clients.claim() fires controllerchange here every time.
    expect(
      shouldReloadOnControllerChange({
        hadControllerAtLoad: false,
        controllerScriptURL: 'https://nasahrvatska.com/sw.js',
      }),
    ).toBe(false);
  });

  it('DOES reload when a new worker replaced one that was already controlling', () => {
    expect(
      shouldReloadOnControllerChange({
        hadControllerAtLoad: true,
        controllerScriptURL: 'https://nasahrvatska.com/sw.js',
      }),
    ).toBe(true);
  });

  it('never reloads for the Firebase messaging worker, even on a genuine update', () => {
    expect(
      shouldReloadOnControllerChange({
        hadControllerAtLoad: true,
        controllerScriptURL: 'https://nasahrvatska.com/firebase-messaging-sw.js',
      }),
    ).toBe(false);
  });

  it('treats a missing controller URL as non-FCM and defers to the load-time guard', () => {
    expect(
      shouldReloadOnControllerChange({ hadControllerAtLoad: false, controllerScriptURL: null }),
    ).toBe(false);
    expect(
      shouldReloadOnControllerChange({ hadControllerAtLoad: true, controllerScriptURL: undefined }),
    ).toBe(true);
  });
});

describe('shouldReloadOnSwUpdatedMessage', () => {
  it('does NOT reload a first install', () => {
    expect(shouldReloadOnSwUpdatedMessage({ hadControllerAtLoad: false })).toBe(false);
  });

  it('DOES reload an already-controlled page', () => {
    expect(shouldReloadOnSwUpdatedMessage({ hadControllerAtLoad: true })).toBe(true);
  });
});

describe('main.tsx wiring', () => {
  const mainSrc = readFileSync(resolve(__dirname, '../main.tsx'), 'utf8');

  // The predicates above are only worth anything if main.tsx actually routes both
  // listeners through them. A future edit that inlines the condition again — and
  // drops the guard again, which is exactly what happened — must fail here.
  it('routes the controllerchange listener through the predicate', () => {
    expect(mainSrc).toContain('shouldReloadOnControllerChange({');
  });

  it('routes the SW_UPDATED listener through the predicate', () => {
    expect(mainSrc).toContain('shouldReloadOnSwUpdatedMessage({');
  });

  it('has no bare doReload() left in a controllerchange handler', () => {
    // Grab the controllerchange listener body and assert it delegates rather than
    // deciding inline.
    const start = mainSrc.indexOf("addEventListener('controllerchange'");
    expect(start).toBeGreaterThan(-1);
    const body = mainSrc.slice(start, start + 500);
    expect(body).toContain('shouldReloadOnControllerChange');
  });
});
