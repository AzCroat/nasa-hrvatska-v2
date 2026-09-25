/**
 * playbackNoEcho.test.tsx — one recording, one playback (owner report, 2026-09-25).
 *
 * _"Why does my playback have an echo in Shadowing Practice?"_ — because
 * `useRecorder.playback()` did `new Audio(audioUrl)` on every call and kept no
 * reference to it. A second tap of ▶ therefore started a SECOND copy of the same
 * recording while the first was still running, offset by the gap between the taps.
 * That offset duplicate IS the echo; it is not a microphone or a room, and no
 * amount of echo cancellation would have touched it.
 *
 * Two consequences, one fix:
 *   - stacked playback (the echo)
 *   - nothing could STOP a playback, because nothing held the element: leaving the
 *     screen mid-playback left the recording audible, and "Try again" started the
 *     next attempt over the top of the previous one.
 *
 * `useRecorder` is shared, so this covers Shadowing, the exam speaking task,
 * Roleplay, the graded reader and the pronunciation scorer at once.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { useRecorder } from '../hooks/useRecorder';

/** Every Audio the component constructs, with its play/pause calls recorded. */
interface FakeAudio {
  src: string;
  played: number;
  paused: number;
  volume: number;
  currentTime: number;
  onended: (() => void) | null;
  play: () => Promise<void>;
  pause: () => void;
}
let built: FakeAudio[] = [];

function playing(): FakeAudio[] {
  return built.filter((a) => a.played > 0 && a.paused === 0);
}

beforeEach(() => {
  built = [];
  vi.stubGlobal(
    'Audio',
    class {
      constructor(src: string) {
        const self = this as unknown as FakeAudio;
        self.src = src;
        self.played = 0;
        self.paused = 0;
        self.volume = 0;
        self.currentTime = 0;
        self.onended = null;
        self.play = () => {
          self.played++;
          return Promise.resolve();
        };
        self.pause = () => {
          self.paused++;
        };
        built.push(self);
      }
    },
  );
});
afterEach(() => vi.unstubAllGlobals());

/** Drives the real hook and exposes it. */
function harness() {
  const api: { current: ReturnType<typeof useRecorder> | null } = { current: null };
  function Probe() {
    api.current = useRecorder();
    return null;
  }
  const utils = render(<Probe />);
  return { api, utils };
}

/**
 * The hook only plays when it has an `audioUrl`, which arrives from a real
 * MediaRecorder. Rather than fake the whole recorder, drive `playback()` and
 * assert on what it constructs — but PROVE the scenario ran first, or a hook that
 * silently never plays would satisfy every "not stacked" assertion (the
 * `not.toHaveBeenCalled()` trap).
 */
async function playTwice(api: { current: ReturnType<typeof useRecorder> | null }) {
  await act(async () => {
    await api.current!.playback();
  });
  await act(async () => {
    await api.current!.playback();
  });
}

describe('useRecorder playback does not stack', () => {
  it('the harness records constructed Audio elements (non-vacuity)', () => {
    const a = new (globalThis.Audio as unknown as new (s: string) => FakeAudio)('blob:x');
    void a.play();
    expect(built).toHaveLength(1);
    expect(playing()).toHaveLength(1);
  });

  it('at most one element is ever playing, and no recording plays without one', async () => {
    const { api } = harness();
    // No audioUrl yet: playback must be a no-op rather than throwing.
    await playTwice(api);
    // `unlockAudio()` constructs its OWN silent element to satisfy the WebView
    // activation rule, so "nothing was constructed" is the wrong invariant — that
    // artifact is why the first draft of this assertion failed. The invariant that
    // matters is that two copies are never audible together.
    expect(playing().length, 'two playbacks must never overlap').toBeLessThanOrEqual(1);
    expect(
      built.some((a) => a.src.startsWith('blob:')),
      'with no recording, no recording should be played',
    ).toBe(false);
  });

  it('the implementation holds the element and stops it before replaying', () => {
    // A SOURCE assertion, because the stacking only happens with a real audioUrl,
    // which needs a MediaRecorder jsdom does not have. The behaviour above covers
    // the no-recording path; this covers the path the owner actually hit.
    const src = readFileSync('src/hooks/useRecorder.ts', 'utf8');
    const body = src.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

    // The element is retained…
    expect(body, 'playback must keep a reference or nothing can stop it').toMatch(
      /playbackElRef\.current = audio/,
    );
    // …the previous one is stopped before a new one starts…
    const pb = body.slice(body.indexOf('const playback = useCallback'));
    const stopAt = pb.indexOf('stopPlayback()');
    const newAt = pb.indexOf('new Audio(');
    expect(stopAt, 'playback must call stopPlayback').toBeGreaterThan(-1);
    expect(
      stopAt,
      'the stop must come BEFORE the new Audio, or the old one keeps playing under it',
    ).toBeLessThan(newAt);
    // …reset stops it (Try again must not layer attempts)…
    const rs = body.slice(body.indexOf('const reset = useCallback'));
    expect(rs.slice(0, 400), 'reset must stop playback').toMatch(/stopPlayback\(\)/);
    // …and unmount stops it.
    const unmount = body.slice(body.indexOf('return () => {'));
    expect(unmount.slice(0, 1400)).toMatch(/playbackElRef\.current/);
  });
});
