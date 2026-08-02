/**
 * stt-callsite-migration.test.ts — the blobToBase64 encoder.
 *
 * WHAT THIS FILE USED TO CLAIM, AND WHY IT WAS REMOVED
 * ---------------------------------------------------
 * The old header said it verified "BOTH /api/stt callsites now use _nativePost
 * with base64-JSON", naming LiveTutorScreen.transcribeAudio and
 * useWhisperSTT.sendToWhisper, each with a success and a transport-failure case.
 * Neither function was ever invoked by any test here. What the assertions
 * actually did:
 *
 *   - The test titled 'calls _nativePost("/api/stt", …) — NOT apiFetch'
 *     asserted the OPPOSITE in its body: `expect(sttCalls.length).toBe(0)`. It
 *     rendered LiveTutorScreen, clicked start, and checked that session opening
 *     does not hit /api/stt — true, but not what the title says.
 *   - The useWhisperSTT cases mounted the hook with renderHook and nothing else.
 *     sendToWhisper is driven by the VAD state machine, so it never ran; the
 *     "success" and "fallback" cases both asserted only `isListening === false`,
 *     the hook's initial state, identical in every branch.
 *   - The remaining assertions were `expect(apiFetchSpy).not.toHaveBeenCalledWith(
 *     '/api/stt', …)` — which passes unconditionally when nothing calls
 *     anything. The file conceded this itself: "The hook itself doesn't expose
 *     sendToWhisper, so we verify the mock is wired correctly by confirming
 *     apiFetch is NOT used for /api/stt."
 *
 * Measured, not assumed: reverting useWhisperSTT.js line 220 from _nativePost
 * back to apiFetch — precisely the regression the file existed to prevent, and
 * one that breaks STT on Capacitor native where a relative /api/ URL resolves to
 * the local server — left all 9 of its tests GREEN.
 *
 * WHERE THAT COVERAGE LIVES NOW
 * -----------------------------
 *   LiveTutorScreen.transcribeAudio → live-tutor-screen.test.tsx, which does
 *     assert toHaveBeenCalledWith('/api/stt', …) against a real invocation.
 *   useWhisperSTT.sendToWhisper     → useWhisperSTT-transport.test.ts, added
 *     alongside this edit. It drives the VAD state machine (loud buffer →
 *     MediaRecorder → silence → onstop → sendToWhisper) so the transport really
 *     runs, and leads with a non-vacuity assertion so the harness failing open
 *     is itself a failure. Against the same reverted line it fails 5 of 6.
 *
 * What remains below is the part that was always real: blobToBase64 is imported
 * and called directly.
 */
import { describe, it, expect } from 'vitest';

describe('blobToBase64 (audio.ts)', () => {
  it('encodes a blob to correct base64', async () => {
    // Import directly — no mocks needed, pure function
    const { blobToBase64 } = await import('../lib/audio.js');
    const bytes = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
    const blob = new Blob([bytes]);
    const result = await blobToBase64(blob);
    expect(result).toBe(btoa('Hello'));
  });

  it('handles large blobs without stack overflow (chunked)', async () => {
    const { blobToBase64 } = await import('../lib/audio.js');
    // 100 KiB — would cause stack overflow with non-chunked String.fromCharCode spread
    const bytes = new Uint8Array(100 * 1024).fill(42);
    const blob = new Blob([bytes]);
    const result = await blobToBase64(blob);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
    // Verify round-trip
    const decoded = atob(result);
    expect(decoded.length).toBe(100 * 1024);
  });
});
