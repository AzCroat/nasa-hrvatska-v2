/**
 * debugOverlay.test.tsx — the on-device reader for audio.ts's trace.
 *
 * `audio.ts` writes a detailed [Audio]/[TTS] trace through `debugLog` on every
 * play. Its only consumer was DebugOverlay, which had been reduced to
 * `return null` with the comment "DISABLED. Tablet TTS/mascot issues resolved
 * as of v2.2.0" — so the log has been write-only, and when the owner reported
 * (2026-09-06, again 2026-09-09) that audio never plays, nothing on the device
 * could say why. CLAUDE.md states that limit outright: "What was NOT
 * established: which of the refusal paths fired for the owner that day.
 * Nothing recorded it."
 *
 * Two halves, and the second is the one the stub would have passed: the
 * component must RENDER the log, and App.tsx must MOUNT it. A component test
 * that renders DebugOverlay itself says nothing about whether the app does —
 * the `award` prop and the speaking coach are both cases in this repo where a
 * correct component sat behind wiring that never called it.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import DebugOverlay from '../components/shared/DebugOverlay';
import { dbgInfo, dbgError, clearEntries } from '../lib/debugLog';

beforeEach(() => {
  clearEntries();
  localStorage.removeItem('nh_debug');
});
afterEach(() => {
  localStorage.removeItem('nh_debug');
  vi.restoreAllMocks();
});

describe('DebugOverlay renders the trace it exists to surface', () => {
  it('renders NOTHING for an ordinary learner', () => {
    dbgInfo('[TTS] something happened');
    const { container } = render(<DebugOverlay />);
    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByTestId('debug-overlay')).toBeNull();
  });

  it('renders when nh_debug is set, and shows the audio trace', async () => {
    localStorage.setItem('nh_debug', '1');
    dbgError('[TTS] HTTP 503 azure-failed,gtranslate-failed');
    render(<DebugOverlay />);
    expect(screen.getByTestId('debug-overlay')).toBeTruthy();
    // Open the panel — the toggle carries the count so a failure is visible
    // without opening it at all.
    expect(screen.getByTestId('debug-overlay-toggle').textContent).toContain('1 err');
    await act(async () => {
      screen.getByTestId('debug-overlay-toggle').click();
    });
    expect(screen.getByText(/azure-failed,gtranslate-failed/)).toBeTruthy();
  });

  it('updates live as audio.ts logs — the trace arrives AFTER the tap', async () => {
    localStorage.setItem('nh_debug', '1');
    render(<DebugOverlay />);
    await act(async () => {
      screen.getByTestId('debug-overlay-toggle').click();
    });
    expect(screen.queryByText(/persistent element unlocked/)).toBeNull();
    await act(async () => {
      dbgInfo('[Audio] HTMLAudio persistent element unlocked');
    });
    expect(screen.getByText(/persistent element unlocked/)).toBeTruthy();
  });

  it('survives blocked localStorage instead of crashing the app', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const { container } = render(<DebugOverlay />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe('it is actually mounted — the half a component test cannot see', () => {
  const APP = readFileSync('src/App.tsx', 'utf8')
    // Comments stripped: App.tsx explains the mount in prose naming
    // DebugOverlay, and a raw text match is satisfied by the explanation.
    // Same trap as the launchFailure and PopCultureScreen pins.
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');

  it('App.tsx imports and renders it', () => {
    expect(APP).toMatch(/import DebugOverlay from '\.\/components\/shared\/DebugOverlay'/);
    expect(APP, 'DebugOverlay is imported but never rendered').toMatch(/<DebugOverlay\s*\/>/);
  });

  it('the component is not a stub again', () => {
    // The exact regression this file exists for: the previous version was
    // `export default function DebugOverlay() { return null; }`, which would
    // satisfy every "renders nothing by default" assertion above.
    const src = readFileSync('src/components/shared/DebugOverlay.tsx', 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '');
    expect(src).toMatch(/getEntries/);
    expect(src).toMatch(/nh:debuglog/);
  });
});
