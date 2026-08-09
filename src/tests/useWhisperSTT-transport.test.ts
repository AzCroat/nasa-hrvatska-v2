/**
 * useWhisperSTT-transport.test.ts — real coverage for sendToWhisper's transport.
 *
 * WHY THIS EXISTS
 * ---------------
 * stt-callsite-migration.test.ts claims to verify "BOTH /api/stt callsites",
 * naming useWhisperSTT.sendToWhisper as the second. It never invokes it. Its
 * assertions are negatives on a mock that is never reached —
 * `expect(apiFetchSpy).not.toHaveBeenCalledWith('/api/stt', …)` passes
 * unconditionally when nothing calls anything — and the file says so itself:
 * "The hook itself doesn't expose sendToWhisper, so we verify the mock is wired
 * correctly by confirming apiFetch is NOT used for /api/stt."
 *
 * So the regression it was written to prevent — switching line 220 back from
 * _nativePost to apiFetch, which breaks STT on Capacitor native where a
 * relative /api/ URL resolves to the local server — could be reintroduced with
 * that file still green. Callsite 1 (LiveTutorScreen) is genuinely covered in
 * live-tutor-screen.test.tsx; callsite 2 had nothing anywhere.
 *
 * sendToWhisper is not exported, and it should not be: it is driven by the VAD
 * state machine. So this drives the machine. The hook polls an AnalyserNode
 * every POLL_INTERVAL_MS; feeding it a loud buffer past MIN_SPEECH_MS starts a
 * MediaRecorder, and a silent buffer past SILENCE_DURATION_MS stops it, whose
 * onstop calls sendToWhisper. That is the same path a real utterance takes.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

const nativePost = vi.fn();
const apiFetch = vi.fn();

vi.mock('../lib/audio.ts', () => ({
  stopAudio: vi.fn(),
  getAudioContext: () => null,
  unlockAudio: vi.fn(),
  blobToBase64: vi.fn(async () => 'BASE64AUDIO'),
}));
vi.mock('../lib/nativePost.js', () => ({ _nativePost: (...a: unknown[]) => nativePost(...a) }));
vi.mock('../lib/apiFetch.js', () => ({ apiFetch: (...a: unknown[]) => apiFetch(...a) }));
vi.mock('../lib/platform.js', () => ({ isNative: () => false }));

// VAD constants IMPORTED from the hook — mirroring them by hand is how this
// file silently broke when the endpointing was retuned (1800 -> 2600 for the
// 2026-08 speech-cutoff fix). POLL_INTERVAL stays local (not exported; the
// simulation just needs any value >= the hook's real cadence).
import { VAD_TUNING } from '../hooks/useWhisperSTT.js';
const POLL_INTERVAL_MS = 80;
const MIN_SPEECH_MS = VAD_TUNING.MIN_SPEECH_MS;
const SILENCE_DURATION_MS = VAD_TUNING.SILENCE_DURATION_MS;

/** Amplitude that computeRms turns into a value above SPEECH_THRESHOLD (0.015). */
const LOUD = 148;
/** 128 is the zero point of an 8-bit time-domain buffer → rms 0. */
const SILENT = 128;

let amplitude = SILENT;
let recorders: MockMediaRecorder[] = [];

class MockMediaRecorder {
  state = 'inactive';
  ondataavailable: ((e: { data: Blob }) => void) | null = null;
  onstop: (() => void) | null = null;
  static isTypeSupported() {
    return true;
  }
  constructor() {
    recorders.push(this);
  }
  start() {
    this.state = 'recording';
    // Emit one chunk big enough to clear the hook's >500-byte "real speech" gate.
    this.ondataavailable?.({ data: new Blob(['x'.repeat(2000)]) });
  }
  stop() {
    this.state = 'inactive';
    this.onstop?.();
  }
}

class MockAudioContext {
  state = 'running';
  resume() {
    return Promise.resolve();
  }
  createMediaStreamSource() {
    return { connect: vi.fn(), disconnect: vi.fn() };
  }
  createAnalyser() {
    return {
      fftSize: 0,
      smoothingTimeConstant: 0,
      frequencyBinCount: 32,
      getByteTimeDomainData: (buf: Uint8Array) => buf.fill(amplitude),
      disconnect: vi.fn(),
    };
  }
  close() {
    return Promise.resolve();
  }
}

async function mountListening(onResult = vi.fn(), onError = vi.fn()) {
  const useWhisperSTT = (await import('../hooks/useWhisperSTT')).default;
  const hook = renderHook(() =>
    useWhisperSTT({ onResult, onInterrupt: vi.fn(), onError, isSpeaking: false }),
  );
  await act(async () => {
    hook.result.current.toggle();
    await Promise.resolve();
  });
  return { hook, onResult, onError };
}

/** Speak, then fall silent — the sequence that ends with sendToWhisper. */
async function speakThenPause() {
  amplitude = LOUD;
  await act(async () => {
    await vi.advanceTimersByTimeAsync(POLL_INTERVAL_MS * 2 + MIN_SPEECH_MS);
  });
  amplitude = SILENT;
  await act(async () => {
    await vi.advanceTimersByTimeAsync(POLL_INTERVAL_MS * 2 + SILENCE_DURATION_MS);
    // Let sendToWhisper's awaits settle.
    await Promise.resolve();
    await Promise.resolve();
  });
}

beforeEach(() => {
  vi.useFakeTimers();
  amplitude = SILENT;
  recorders = [];
  nativePost.mockReset();
  apiFetch.mockReset();
  nativePost.mockResolvedValue({ ok: true, status: 200, json: async () => ({ text: 'bog' }) });
  (globalThis as unknown as { MediaRecorder: unknown }).MediaRecorder = MockMediaRecorder;
  (globalThis as unknown as { AudioContext: unknown }).AudioContext = MockAudioContext;
  Object.defineProperty(navigator, 'mediaDevices', {
    configurable: true,
    value: {
      getUserMedia: () => Promise.resolve({ getTracks: () => [] } as unknown as MediaStream),
    },
  });
  Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
  vi.resetModules();
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('useWhisperSTT.sendToWhisper — the transport nothing covered', () => {
  it('actually reaches the transport (non-vacuity guard for every test below)', async () => {
    await mountListening();
    await speakThenPause();
    // If the VAD harness ever stops driving a real utterance, this fails loudly
    // instead of every assertion below silently passing on an unused mock —
    // which is exactly how stt-callsite-migration.test.ts went green.
    expect(recorders.length).toBeGreaterThan(0);
    expect(nativePost).toHaveBeenCalled();
  });

  it('posts to /api/stt through _nativePost with base64 JSON', async () => {
    await mountListening();
    await speakThenPause();
    expect(nativePost).toHaveBeenCalledWith(
      '/api/stt',
      expect.objectContaining({ audioBase64: 'BASE64AUDIO' }),
    );
  });

  it('does NOT use apiFetch — a relative /api/ URL is dead on native', async () => {
    await mountListening();
    await speakThenPause();
    expect(apiFetch).not.toHaveBeenCalled();
  });

  it('delivers the transcript to onResult', async () => {
    const { onResult } = await mountListening();
    await speakThenPause();
    expect(onResult).toHaveBeenCalledWith('bog');
  });

  it('surfaces a transient transport failure instead of dropping the utterance', async () => {
    // null = native unreachable / 5xx / brief drop. The hook must report it and
    // keep Whisper available for the next utterance.
    nativePost.mockResolvedValue(null);
    const { onError } = await mountListening();
    await speakThenPause();
    expect(onError).toHaveBeenCalled();
  });

  it('stays silent on a 503 — Whisper is genuinely unconfigured, not broken', async () => {
    nativePost.mockResolvedValue({ ok: false, status: 503, json: async () => ({}) });
    const { onError, onResult } = await mountListening();
    await speakThenPause();
    expect(onError).not.toHaveBeenCalled();
    expect(onResult).not.toHaveBeenCalled();
  });
});
