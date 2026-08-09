/**
 * useWhisperSTT — Voice Activity Detection + Whisper transcription hook.
 *
 * Primary path:  RMS-based VAD (Web Audio API) → MediaRecorder → /api/stt (Whisper)
 * Fallback path: Web Speech API push-to-talk (used when /api/stt returns 503 or offline)
 *
 * VAD state machine:
 *   idle → waiting (mic open) → recording (speech detected) → waiting
 * Whisper transcription runs CONCURRENTLY with the state machine: ending an
 * utterance returns the VAD to 'waiting' immediately, so words spoken while
 * the previous utterance is being transcribed are captured as the next turn
 * instead of being silently discarded (the pre-2026-08 'processing' state
 * dropped 1-3s of speech after every endpoint). Results are delivered in
 * speech order via a promise chain.
 *
 * The interrupt feature: if the user speaks while Maja's TTS is playing, the hook
 * calls stopAudio() to cancel the TTS, then calls onInterrupt() so the component
 * can clear the isSpeaking animation.
 *
 * @param {object} opts
 *   onResult(text)    — called with transcribed text; component should auto-send
 *   onInterrupt()     — called when user speaks over TTS (clear isSpeaking state)
 *   onError(msg)      — called on non-recoverable error (optional)
 *   isSpeaking        — whether Maja is currently playing TTS
 */

import { useRef, useState, useCallback, useEffect } from 'react';
import { stopAudio, getAudioContext, unlockAudio, blobToBase64 } from '../lib/audio.ts';
import { _nativePost } from '../lib/nativePost.js';
import { isNative } from '../lib/platform.js';

// ── VAD tuning constants ──────────────────────────────────────────────────────
// 2026-08 speech-cutoff fix. Three of these were cutting users off mid-speech:
//  - SILENCE_DURATION_MS was 1800: a language learner's mid-sentence thinking
//    pause is routinely ≥2s, so the turn ended while they were composing the
//    next clause. 2600 matches Maja's EXTENDED endpointing window.
//  - SILENCE_THRESHOLD was 0.008: soft trailing speech (learners trail off)
//    sat under it and was counted as silence — cut off while STILL SPEAKING.
//    0.005 widens the exit hysteresis (enter speech at 0.015, leave at 0.005).
//  - The recorder used to start only after MIN_SPEECH_MS of confirmed speech,
//    clipping the first ~250-330ms of every utterance. It now starts
//    speculatively at the FIRST threshold crossing and is discarded if the
//    burst proves to be noise (see startRecorder/discardRecorder).
// MAX_UTTERANCE_MS is the new hard backstop: with the lower exit threshold, a
// noisy room could otherwise hold a recording open forever.
const SPEECH_THRESHOLD = 0.015; // RMS above this triggers speech detection
const SILENCE_THRESHOLD = 0.005; // RMS below this starts the silence timer
const MIN_SPEECH_MS = 250; // Ignore bursts shorter than this (noise guard)
const SILENCE_DURATION_MS = 2600; // Silence this long → end recording, send to Whisper
const MAX_UTTERANCE_MS = 60_000; // Hard cap per utterance — backstop, not endpointing
const POLL_INTERVAL_MS = 80; // How often to sample the AnalyserNode
const FFT_SIZE = 2048;

/** Exported for tests: the endpointing invariants are pinned in speechEndpointing.test.js. */
export const VAD_TUNING = {
  SPEECH_THRESHOLD,
  SILENCE_THRESHOLD,
  MIN_SPEECH_MS,
  SILENCE_DURATION_MS,
  MAX_UTTERANCE_MS,
};

// Feature-detect once at module load — no point re-checking on every render
const SUPPORTS_VAD =
  typeof window !== 'undefined' &&
  typeof MediaRecorder !== 'undefined' &&
  typeof AudioContext !== 'undefined' &&
  !!navigator.mediaDevices?.getUserMedia;

function getSupportedMimeType() {
  const candidates = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg;codecs=opus',
    'audio/ogg',
    'audio/mp4',
  ];
  for (const t of candidates) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(t)) return t;
  }
  return '';
}

function computeRms(analyser, buf) {
  analyser.getByteTimeDomainData(buf);
  let sum = 0;
  for (let i = 0; i < buf.length; i++) {
    const v = (buf[i] - 128) / 128;
    sum += v * v;
  }
  return Math.sqrt(sum / buf.length);
}

export default function useWhisperSTT({
  onResult,
  onInterrupt,
  onError,
  isSpeaking,
  // When false, the user's voice does NOT auto-interrupt Maja while she's
  // speaking — the mic is ignored until she finishes (or the user interrupts
  // explicitly, e.g. by tapping). Used for lessons, where halting learner speech
  // and background noise would otherwise cause false cut-offs. Defaults to true
  // to preserve the hands-free barge-in behaviour for other callers.
  allowBargeIn = true,
}) {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [vadLevel, setVadLevel] = useState(0); // 0–1 for UI visualisation
  // SP4a — exposed so consumers (AIConversation, LiveTutorScreen, MajaScreen)
  // can render the shared MicPermissionDeniedExplainer instead of just relying
  // on the onError callback with a plain string. Reset on cleanup.
  const [permissionDenied, setPermissionDenied] = useState(false);

  // Whether Whisper is available: null=untested, true=confirmed, false=503→use Web Speech
  const whisperAvailRef = useRef(null);

  // Guards the async getUserMedia path in startListening. Without it, unmounting
  // while the mic permission / stream promise is pending left a live stream and
  // an 80ms VAD interval installed on a dead hook — the mic indicator stayed lit
  // and /api/stt kept receiving uploads. Mirrors useRecorder.ts's guard.
  const mountedRef = useRef(true);

  // Web Audio / MediaRecorder infrastructure
  const streamRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const recorderRef = useRef(null);
  const pollRef = useRef(null);

  // VAD state machine
  const vadStateRef = useRef('idle'); // 'idle'|'waiting'|'recording'
  const speechStartRef = useRef(null);
  const silenceStartRef = useRef(null);
  const recordStartRef = useRef(null); // when the current recorder began (MAX_UTTERANCE_MS backstop)

  // Ordered STT delivery: utterances may transcribe concurrently with new
  // recording, but results must reach onResult in the order they were spoken.
  const sttChainRef = useRef(Promise.resolve());
  const inFlightRef = useRef(0);

  // Web Speech API fallback
  const webSpeechRef = useRef(null);
  const pendingVoiceRef = useRef('');

  // Ref-based guard against double-tap race: React state (isListening) is async and
  // may still read false on a second tap that arrives before the first render cycle.
  // This ref is set synchronously before any await, so the guard is always current.
  const isActivatingRef = useRef(false);

  // AudioContext ownership: true = we created a private ctx and must close it in cleanup;
  // false = we borrowed the shared ctx from audio.ts — TTS still needs it, never close it.
  const ctxIsOwnedRef = useRef(false);
  // MediaStreamSource node — must be explicitly disconnected on cleanup even when ctx is borrowed.
  const sourceRef = useRef(null);

  // Stable refs for callbacks/state used inside intervals and async fns
  const onResultRef = useRef(onResult);
  const onInterruptRef = useRef(onInterrupt);
  const onErrorRef = useRef(onError);
  const isSpeakingRef = useRef(isSpeaking);
  const allowBargeInRef = useRef(allowBargeIn);
  useEffect(() => {
    allowBargeInRef.current = allowBargeIn;
  }, [allowBargeIn]);
  useEffect(() => {
    onResultRef.current = onResult;
  }, [onResult]);
  useEffect(() => {
    onInterruptRef.current = onInterrupt;
  }, [onInterrupt]);
  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);
  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

  // ── Full cleanup ────────────────────────────────────────────────────────────
  const cleanup = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
    if (recorderRef.current && recorderRef.current.state !== 'inactive') {
      try {
        recorderRef.current.stop();
      } catch {
        /* ignore */
      }
    }
    recorderRef.current = null;
    recordStartRef.current = null;
    // Disconnect the MediaStreamSource from the graph — always required to release the mic
    // back to the OS and stop audio flowing through the analyser.
    if (sourceRef.current) {
      try {
        sourceRef.current.disconnect();
      } catch {
        /* ignore */
      }
      sourceRef.current = null;
    }
    if (audioCtxRef.current) {
      if (ctxIsOwnedRef.current) {
        // We created this context — close it to free OS resources.
        try {
          audioCtxRef.current.close();
        } catch {
          /* ignore */
        }
      }
      // Never close the shared context from audio.ts — TTS depends on it surviving.
      audioCtxRef.current = null;
      ctxIsOwnedRef.current = false;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    analyserRef.current = null;
    dataArrayRef.current = null;
    vadStateRef.current = 'idle';
    speechStartRef.current = null;
    silenceStartRef.current = null;
    setIsListening(false);
    setIsProcessing(false);
    setVadLevel(0);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    // Re-arm on mount: React 18 StrictMode double-invokes effects in dev, so a
    // ref only ever set false in cleanup would stay false and permanently
    // disable the mic path locally.
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      cleanup();
      webSpeechRef.current?.abort?.();
      webSpeechRef.current = null;
    };
  }, [cleanup]);

  // ── Send audio to Whisper ───────────────────────────────────────────────────
  // No longer owns the VAD state: the machine returned to 'waiting' the moment
  // the recorder stopped, so the user can keep talking while this runs.
  const sendToWhisper = useCallback(
    async (blob) => {
      try {
        if (!navigator.onLine) throw new Error('offline');

        const audioBase64 = await blobToBase64(blob);
        const res = await _nativePost('/api/stt', {
          audioBase64,
          mimeType: blob.type || 'audio/webm',
        });

        // 503 = Whisper genuinely not configured on the server → disable for the
        // session and fall back to Web Speech (permanent, correct).
        if (res && res.status === 503) {
          whisperAvailRef.current = false;
          cleanup();
          return;
        }
        // null = a TRANSIENT transport failure (native unreachable, a 5xx, or a
        // brief network drop while navigator.onLine is still true). Previously this
        // was conflated with the 503 case, so one hiccup silently dropped the
        // utterance AND disabled Whisper for the rest of the session. Surface it via
        // onError instead and keep Whisper available — the next utterance may succeed.
        if (!res) throw new Error('Voice transcription failed — please try again.');
        if (!res.ok) throw new Error('STT error ' + res.status);

        whisperAvailRef.current = true;
        const data = await res.json();
        const text = (data.text || '').trim();
        if (text) onResultRef.current?.(text);
      } catch (e) {
        // 'offline' is expected when device loses connection mid-speech; don't surface it
        if (e.message !== 'offline') {
          onErrorRef.current?.(e.message || 'Voice transcription failed — please try again.');
        }
      }
    },
    [cleanup],
  );

  /**
   * Enqueue a finished utterance for transcription. The chain keeps onResult
   * delivery in speech order even when a short second utterance transcribes
   * faster than a long first one; the in-flight counter drives the UI's
   * isProcessing without gating the VAD.
   */
  const queueWhisper = useCallback(
    (blob) => {
      if (!mountedRef.current) return; // unmounted mid-flush — nothing to deliver to
      inFlightRef.current += 1;
      setIsProcessing(true);
      sttChainRef.current = sttChainRef.current
        .then(() => sendToWhisper(blob))
        .finally(() => {
          inFlightRef.current -= 1;
          if (inFlightRef.current <= 0) {
            inFlightRef.current = 0;
            setIsProcessing(false);
          }
        });
    },
    [sendToWhisper],
  );

  // ── Recorder lifecycle ──────────────────────────────────────────────────────
  // Chunks live in the recorder's own closure, never in a shared ref: a new
  // speculative recorder can start while the previous one's onstop is still
  // flushing, and neither can clobber the other's audio.

  /** Start capturing NOW — called at the first threshold crossing, so the
   *  first word is on tape before the noise-guard confirms it was speech. */
  const startRecorder = useCallback(
    (now) => {
      if (!streamRef.current) return;
      const chunks = [];
      const mimeType = getSupportedMimeType();
      const recorder = new MediaRecorder(streamRef.current, mimeType ? { mimeType } : {});
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };
      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: mimeType || 'audio/webm' });
        if (audioBlob.size > 500) queueWhisper(audioBlob);
      };
      recorder.start(100); // emit data every 100 ms
      recorderRef.current = recorder;
      recordStartRef.current = now;
    },
    [queueWhisper],
  );

  /** The burst was noise (or barge-in is disallowed): throw the tape away. */
  const discardRecorder = useCallback(() => {
    const r = recorderRef.current;
    recorderRef.current = null;
    recordStartRef.current = null;
    if (r) {
      r.ondataavailable = null;
      r.onstop = null;
      try {
        if (r.state !== 'inactive') r.stop();
      } catch {
        /* ignore */
      }
    }
  }, []);

  /** Real end of utterance: stop → onstop assembles the blob and queues Whisper. */
  const finishRecorder = useCallback(() => {
    const r = recorderRef.current;
    recorderRef.current = null;
    recordStartRef.current = null;
    if (r && r.state === 'recording') {
      try {
        r.stop();
      } catch {
        /* ignore */
      }
    }
  }, []);

  // ── VAD polling tick (runs every POLL_INTERVAL_MS) ─────────────────────────
  const vadTick = useCallback(() => {
    const analyser = analyserRef.current;
    const buf = dataArrayRef.current;
    if (!analyser || !buf) return;

    const rms = computeRms(analyser, buf);
    const now = Date.now();
    setVadLevel(Math.min(rms * 8, 1)); // scale to 0–1 for waveform UI

    const state = vadStateRef.current;

    if (state === 'waiting') {
      if (rms > SPEECH_THRESHOLD) {
        if (!speechStartRef.current) {
          speechStartRef.current = now;
          // Speculative capture from the FIRST crossing — if the burst proves
          // to be noise it is discarded below; if it proves to be speech, the
          // first word was never clipped.
          startRecorder(now);
        } else if (now - speechStartRef.current > MIN_SPEECH_MS) {
          // Confirmed real speech.
          if (isSpeakingRef.current && !allowBargeInRef.current) {
            // Tap-only mode (lessons): do NOT let the user's voice interrupt Maja
            // — halting learner speech / background noise would cause false
            // cut-offs. Ignore the mic until she stops (or the user taps).
            speechStartRef.current = null;
            discardRecorder();
            return;
          }
          if (isSpeakingRef.current) {
            // User is speaking while Maja talks → interrupt TTS immediately
            stopAudio();
            onInterruptRef.current?.();
          }
          vadStateRef.current = 'recording';
          silenceStartRef.current = null;
        }
      } else if (speechStartRef.current && now - speechStartRef.current < MIN_SPEECH_MS) {
        // Just a noise spike, not sustained speech — throw the tape away.
        speechStartRef.current = null;
        discardRecorder();
      }
    } else if (state === 'recording') {
      const startedAt = recordStartRef.current ?? now;
      const overCap = now - startedAt > MAX_UTTERANCE_MS;
      if (rms < SILENCE_THRESHOLD || overCap) {
        if (!silenceStartRef.current) silenceStartRef.current = now;
        if (overCap || now - silenceStartRef.current > SILENCE_DURATION_MS) {
          // End of utterance. Queue it for Whisper and return to 'waiting'
          // IMMEDIATELY — anything said while transcription runs is captured
          // as the next turn instead of being dropped.
          finishRecorder();
          vadStateRef.current = 'waiting';
          speechStartRef.current = null;
          silenceStartRef.current = null;
        }
      } else {
        // Still speaking (anything above the exit threshold) — reset silence timer
        silenceStartRef.current = null;
      }
    }
  }, [startRecorder, discardRecorder, finishRecorder]);

  // ── Web Speech API fallback (used when Whisper unavailable) ────────────────
  const startWebSpeech = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      onErrorRef.current?.('Voice input is not supported in this browser. Try Chrome on desktop.');
      return;
    }
    pendingVoiceRef.current = '';
    const r = new SR();
    r.lang = 'hr-HR';
    r.continuous = true;
    r.interimResults = true;
    r.onstart = () => setIsListening(true);
    r.onresult = (e) => {
      let finalChunk = '',
        interimChunk = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalChunk += t;
        else interimChunk += t;
      }
      if (finalChunk) {
        pendingVoiceRef.current = (pendingVoiceRef.current + ' ' + finalChunk).trim();
      } else if (interimChunk) {
        // Show interim in a way the component can optionally pick up
        // (component will only act on onResult, not on interim)
      }
    };
    r.onerror = (e) => {
      setIsListening(false);
      if (e.error && e.error !== 'no-speech') {
        onErrorRef.current?.('Voice input error — please try again or type your message.');
      }
    };
    r.onend = () => {
      setIsListening(false);
      const text = pendingVoiceRef.current.trim();
      pendingVoiceRef.current = '';
      webSpeechRef.current = null;
      if (text) onResultRef.current?.(text);
    };
    r.start();
    webSpeechRef.current = r;
  }, []);

  const stopWebSpeech = useCallback(() => {
    if (webSpeechRef.current) {
      webSpeechRef.current.stop(); // triggers onend → onResult
      // webSpeechRef is cleared inside onend
    }
  }, []);

  // ── Public API ───────────────────────────────────────────────────────────────
  const stop = useCallback(() => {
    if (webSpeechRef.current) {
      stopWebSpeech();
    } else {
      cleanup();
    }
  }, [cleanup, stopWebSpeech]);

  /**
   * toggle() — starts or stops the microphone.
   * - If already listening (Whisper+VAD or Web Speech): stops.
   * - If processing (waiting for Whisper): no-op (don't interrupt the pending request).
   * - Otherwise: opens microphone and starts the appropriate path.
   */
  const toggle = useCallback(async () => {
    // Already listening → stop
    if (isListening || webSpeechRef.current) {
      stop();
      return;
    }
    // Mid-request or mid-setup → ignore tap (isActivatingRef guards the async setup
    // window before setIsListening(true) is committed to React state)
    if (isProcessing || isActivatingRef.current) return;

    // Whisper known unavailable, or browser lacks MediaRecorder → Web Speech
    if (!SUPPORTS_VAD || whisperAvailRef.current === false) {
      startWebSpeech();
      return;
    }

    // ── Whisper + VAD path ────────────────────────────────────────────────
    // Unlock the shared audio pipeline synchronously — BEFORE any await.
    // This ensures the shared AudioContext (_ctx) from audio.ts exists and is resumed
    // within the user-gesture call stack. iOS/Android close the gesture window after
    // the first await, so any context created afterwards is immediately suspended.
    unlockAudio();

    // Set the activating guard synchronously — before any await — so a second tap
    // that arrives before the first render cycle sees isListening=true is rejected.
    isActivatingRef.current = true;

    // Prefer the shared AudioContext that audio.ts already created and unlocked.
    // This avoids creating a second context (iOS allows only one active context per page),
    // and ensures TTS playback continues to work after the VAD session ends (we never
    // close a context we don't own).
    // Fall back to a private context only if the shared one is unavailable or closed.
    const sharedCtx = getAudioContext();
    let ctx;
    if (sharedCtx && sharedCtx.state !== 'closed') {
      ctx = sharedCtx;
      ctxIsOwnedRef.current = false;
    } else {
      const AudioCtxCtor = window.AudioContext || window.webkitAudioContext;
      ctx = new AudioCtxCtor();
      ctxIsOwnedRef.current = true;
    }
    audioCtxRef.current = ctx;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16000, // hint: lower SR → smaller audio files
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      // The screen can be left while the permission prompt / stream promise is
      // pending. cleanup() already ran and found streamRef/pollRef null, so it
      // released nothing — installing them now would leave the mic open and the
      // VAD poll running for the lifetime of the tab.
      if (!mountedRef.current) {
        stream.getTracks().forEach((t) => t.stop());
        if (audioCtxRef.current && ctxIsOwnedRef.current) {
          try {
            audioCtxRef.current.close();
          } catch {
            /* already closed */
          }
          audioCtxRef.current = null;
        }
        return;
      }
      streamRef.current = stream;

      if (ctx.state === 'suspended') await ctx.resume();

      const source = ctx.createMediaStreamSource(stream);
      sourceRef.current = source; // tracked for disconnect in cleanup
      const analyser = ctx.createAnalyser();
      analyser.fftSize = FFT_SIZE;
      analyser.smoothingTimeConstant = 0.4;
      source.connect(analyser);
      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

      vadStateRef.current = 'waiting';
      speechStartRef.current = null;
      silenceStartRef.current = null;
      setIsListening(true);
      setVadLevel(0);

      // Re-check: `await ctx.resume()` above is a second suspension point where
      // the caller can unmount. Never install the poll on a dead hook.
      if (!mountedRef.current) {
        cleanup();
        return;
      }
      // Poll the analyser at POLL_INTERVAL_MS — drives the entire VAD state machine
      pollRef.current = setInterval(vadTick, POLL_INTERVAL_MS);
    } catch (e) {
      // Setup failed — only close the AudioContext if we own it (not the shared one from audio.ts)
      if (audioCtxRef.current && ctxIsOwnedRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {
          /* ignore */
        }
      }
      audioCtxRef.current = null;
      ctxIsOwnedRef.current = false;
      if (e.name === 'NotAllowedError' || e.name === 'PermissionDeniedError') {
        setPermissionDenied(true);
        onErrorRef.current?.(
          isNative()
            ? 'Microphone access denied. Go to Settings → Apps → Naša Hrvatska → Permissions, enable Microphone, then force-close and reopen the app.'
            : 'Microphone access was denied. Please allow microphone access in your browser settings and try again.',
        );
      } else {
        // MediaDevices not available (e.g. older iOS) — fall through to Web Speech
        startWebSpeech();
      }
    } finally {
      isActivatingRef.current = false;
    }
    // `cleanup` is a useCallback with [] deps, so its identity is stable — listing
    // it here (for the post-await unmount guard) does not re-create this callback.
  }, [isListening, isProcessing, vadTick, startWebSpeech, stop, cleanup]);

  /** Manually clear permission-denied state (e.g., after user re-grants and taps Try Again). */
  const clearPermissionDenied = useCallback(() => {
    setPermissionDenied(false);
  }, []);

  return {
    isListening,
    isProcessing,
    vadLevel,
    toggle,
    stop,
    /** True when Whisper path is active (false → Web Speech fallback is in use) */
    usingWhisper: SUPPORTS_VAD && whisperAvailRef.current !== false,
    /** SP4a — set true when getUserMedia rejected with NotAllowed/PermissionDenied. */
    permissionDenied,
    clearPermissionDenied,
  };
}
