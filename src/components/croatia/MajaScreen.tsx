import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { useStats } from '../../context/StatsContext';
import { markQuest } from '../../lib/quests.js';
import { applyConversationCategoriesToAdaptive } from '../../lib/adaptiveFeedback.js';
import { apiFetch } from '../../lib/apiFetch.js';
import { getVoicePreference } from '../../lib/soundSettings.js';
import { unlockAudio, ttsFetch } from '../../lib/audio.js';
import MajaOrb from './MajaOrb';
import ConversationBubble from './ConversationBubble';
import DebriefScreen from './MajaDebrief';
import MajaIdleCard from './MajaIdleCard';
import MicPermissionDeniedExplainer from '../shared/MicPermissionDeniedExplainer';
import useWhisperSTT from '../../hooks/useWhisperSTT.js';
import { isVoiceAvailable } from './majaVoice';
import {
  majaErrorMessage,
  isAbortFailure,
  MAJA_START_FALLBACK,
  MAJA_TURN_FALLBACK,
} from './majaErrors';
import { reportError } from '../../lib/errorReporter';
import {
  MAJA_STYLES,
  PERSONA_CONFIG,
  getPersona,
  SR_SUPPORTED,
  computeSilenceDelay,
  extractStreamingReply,
  extractSentences,
  loadMemory,
  saveMemory,
  fmtElapsed,
  computeRelationshipLevel,
} from './MajaScreenUtils.js';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface ConversationMessage {
  role: string;
  content: string;
  streaming?: boolean;
  correction?: unknown;
  emotion?: string;
}
interface DebriefData {
  majaNotes: string;
  didWell: string;
  focusNext: string;
  newVocab?: { hr: string; en: string; used_in?: string }[];
  nextTopicSuggestion?: string;
  xpEarned?: number;
  durationSecs: number;
  updatedFacts?: Record<string, unknown>;
  mistakePatternsUpdate?: unknown[];
  suggestLevelUp?: boolean;
  suggestLevelUpTo?: string;
  levelUpMessage?: string;
}
interface SessionState {
  count: number;
  relationshipLevel: number;
  knownFacts: Record<string, unknown>;
  mistakePatterns: unknown[];
  lastSummary: string;
  nextTopic: string;
}
interface ApiError extends Error {
  _status?: number;
  _code?: string;
}

/**
 * Best-effort read of the server's error code from a failed response.
 *
 * Returns undefined rather than throwing: both call sites are already handling
 * a failure, and an unreadable or non-JSON body must not replace the real HTTP
 * status with a parse error. majaErrorMessage treats a missing code as the
 * burst limiter, which is the safe assumption.
 */
async function readErrorCode(res: Response): Promise<string | undefined> {
  try {
    const body = (await res.clone().json()) as { error?: unknown };
    return typeof body?.error === 'string' ? body.error : undefined;
  } catch {
    return undefined;
  }
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function MajaScreen() {
  const { name, goBack } = useApp();
  const { level, award } = useStats();

  // ── persona ────────────────────────────────
  const [personaKey] = useState(() => getPersona());
  const personaCfg =
    (personaKey
      ? (PERSONA_CONFIG as Record<string, typeof PERSONA_CONFIG.teacher>)[personaKey]
      : null) || PERSONA_CONFIG.teacher;

  // ── state ──────────────────────────────────
  const [memory, setMemory] = useState(loadMemory);
  const [phase, setPhase] = useState('idle');
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [session, setSession] = useState<SessionState>({
    count: 0,
    relationshipLevel: 0,
    knownFacts: {},
    mistakePatterns: [],
    lastSummary: '',
    nextTopic: '',
  });
  const [waveform, setWaveform] = useState(Array(30).fill(4));
  const [liveTranscript, setLiveTranscript] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [debrief, setDebrief] = useState<DebriefData | null>(null);
  const [elapsedSecs, setElapsedSecs] = useState(0);
  const [sessionActive, setSessionActive] = useState(false);
  const [fallbackText, setFallbackText] = useState('');
  const [micDenied, setMicDenied] = useState(false);
  // Runtime guard: some browsers (DuckDuckGo and other in-app WebKit) advertise
  // SpeechRecognition but its service is dead — it errors with network /
  // service-not-allowed instead of returning results. When that happens we flip
  // srFailed and re-route voice through the MediaRecorder→Whisper path, exactly
  // like iOS Safari. srFailedRef mirrors it for reads inside stable callbacks.
  const [srFailed, setSrFailed] = useState(false);
  const srFailedRef = useRef(false);

  // ── refs ───────────────────────────────────
  const debriefXpFired = useRef<boolean>(false);
  const phaseRef = useRef<string>('idle');
  // Guards the async getUserMedia/TTS paths. phaseRef alone is not enough: it
  // stops updating at unmount and stays frozen at its last value, so a loop
  // keyed only on phaseRef never self-terminates once the screen is gone.
  const mountedRef = useRef(true);
  const recRef = useRef<InstanceType<typeof window.SpeechRecognition> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transcriptRef = useRef<string>('');
  const sessionStartRef = useRef<number | null>(null);
  const elapsedTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const streamAbortRef = useRef<AbortController | null>(null);

  // keep phaseRef in sync
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  // auto-scroll conversation
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation]);

  // elapsed timer
  useEffect(() => {
    if (sessionActive) {
      sessionStartRef.current = Date.now() - elapsedSecs * 1000;
      elapsedTimerRef.current = setInterval(() => {
        setElapsedSecs(Math.floor((Date.now() - (sessionStartRef.current ?? Date.now())) / 1000));
      }, 1000);
    } else {
      clearInterval(elapsedTimerRef.current ?? undefined);
    }
    return () => clearInterval(elapsedTimerRef.current ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionActive]);

  // cleanup on unmount
  useEffect(() => {
    // Re-arm on mount (React 18 StrictMode double-invokes effects in dev).
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (streamAbortRef.current) {
        streamAbortRef.current.abort();
        streamAbortRef.current = null;
      }
      stopMicImmediate();
      stopWaveform();
      cancelTTSTurn(); // invalidate any running streaming-TTS pump
      clearTimeout(silenceTimerRef.current ?? undefined);
      clearInterval(elapsedTimerRef.current ?? undefined);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── waveform helpers ───────────────────────
  const stopWaveform = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }
    analyserRef.current = null;
    setWaveform(Array(30).fill(4));
  }, []);

  const startWaveform = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Leaving the screen while the permission prompt / stream promise is
      // pending means the unmount cleanup already ran and found mediaStreamRef
      // null, so it stopped nothing. Assigning here would hold the mic open
      // (indicator lit) for the lifetime of the tab.
      if (!mountedRef.current) {
        stream.getTracks().forEach((t) => t.stop());
        return;
      }
      mediaStreamRef.current = stream;
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioCtxRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      analyserRef.current = analyser;

      const tick = () => {
        if (!mountedRef.current || !analyserRef.current || phaseRef.current !== 'listening') {
          stopWaveform();
          return;
        }
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(data);
        const bars = Array.from({ length: 30 }, (_, i) => {
          const idx = Math.floor((i / 30) * data.length);
          return Math.max(2, Math.min(60, ((data[idx] ?? 0) / 255) * 60));
        });
        setWaveform(bars);
        animFrameRef.current = requestAnimationFrame(tick);
      };
      animFrameRef.current = requestAnimationFrame(tick);
    } catch (err: unknown) {
      if ((err as Error).name === 'NotAllowedError') {
        setMicDenied(true);
      }
      // waveform not critical — continue without it
    }
  }, [stopWaveform]);

  // ── TTS helper ─────────────────────────────
  const playTTS = useCallback(async (text: string): Promise<void> => {
    unlockAudio(); // must be synchronous before any await — iOS activation
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioUrlRef.current) {
        audioUrlRef.current = null;
      }

      const res = await ttsFetch({ text, slow: false, voice: getVoicePreference() });

      if (!res || !res.ok) throw new Error(`TTS ${res?.status ?? 'failed'}`);

      const blob = await res.blob();
      // Use base64 data URL — blob: URLs fail silently on some Android OEM WebViews
      const url = await new Promise<string>((resolve) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result as string);
        r.readAsDataURL(blob);
      });
      // The TTS fetch + FileReader above are suspension points. If the screen
      // was left in the meantime, the unmount cleanup already paused whatever
      // audio existed then — constructing and playing a NEW Audio here made
      // Maja's voice play over the next screen with nothing able to stop it.
      if (!mountedRef.current) return;
      audioUrlRef.current = url;
      const audio = new Audio(url);
      audio.volume = 1.0; // required: low volume blocks activation on some WebViews
      audioRef.current = audio;

      return new Promise((resolve) => {
        audio.onended = () => {
          audioUrlRef.current = null;
          audioRef.current = null;
          resolve();
        };
        audio.onerror = () => {
          audioUrlRef.current = null;
          audioRef.current = null;
          resolve(); // continue even on error
        };
        audio.play().catch(() => resolve());
      });
    } catch {
      // TTS failure is non-fatal — text is already shown in conversation
    }
  }, []);

  // ── mic helpers ────────────────────────────
  function stopMicImmediate() {
    clearTimeout(silenceTimerRef.current ?? undefined);
    if (recRef.current) {
      try {
        recRef.current.onresult = null;
        recRef.current.onerror = null;
        recRef.current.onend = null;
        recRef.current.abort();
      } catch (_) {}
      recRef.current = null;
    }
  }

  const stopMic = useCallback(() => {
    stopMicImmediate();
    stopWaveform();
  }, [stopWaveform]);

  // ── Streaming TTS queue (voice phase 2) ────────────────────────────────────
  // Speak Maja's reply sentence-by-sentence as it streams instead of waiting for
  // the whole reply + one big TTS request. The first sentence plays while the
  // model is still writing the rest, collapsing multi-second dead air to ~1s.
  // Clips play in order; the next clip is prefetched during the current one so
  // there is no gap. A per-turn generation token invalidates a running pump when
  // a new turn starts (or the screen tears down), so stale audio never leaks.
  const ttsQueueRef = useRef<string[]>([]);
  const ttsActiveRef = useRef(false);
  const ttsStreamDoneRef = useRef(false);
  const ttsGenRef = useRef(0);
  const startListeningRef = useRef<() => void>(() => {});

  // Fetch (but do not play) one sentence's TTS as a ready-to-play audio element.
  const fetchClip = useCallback(async (text: string): Promise<HTMLAudioElement | null> => {
    try {
      const res = await ttsFetch({ text, slow: false, voice: getVoicePreference() });
      if (!res || !res.ok) return null;
      const blob = await res.blob();
      // base64 data URL — blob: URLs fail silently on some Android OEM WebViews.
      const url = await new Promise<string>((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result as string);
        r.onerror = () => reject(new Error('read failed'));
        r.readAsDataURL(blob);
      });
      const audio = new Audio(url);
      audio.volume = 1.0; // low volume blocks activation on some WebViews
      return audio;
    } catch {
      return null;
    }
  }, []);

  // When the reply is fully streamed AND every clip has played, resume listening.
  const finishTTSIfDone = useCallback((gen: number) => {
    if (gen !== ttsGenRef.current) return;
    if (ttsActiveRef.current || ttsQueueRef.current.length || !ttsStreamDoneRef.current) return;
    if (phaseRef.current === 'debrief' || phaseRef.current === 'error') return;
    startListeningRef.current();
  }, []);

  const pumpTTS = useCallback(
    async (gen: number) => {
      if (ttsActiveRef.current) return;
      ttsActiveRef.current = true;
      let prefetch: Promise<HTMLAudioElement | null> | null = null;
      try {
        while (gen === ttsGenRef.current) {
          const next = ttsQueueRef.current.shift();
          if (next === undefined) break; // drained — re-kicked when more arrives
          const clip = await (prefetch ?? fetchClip(next));
          prefetch = null;
          if (gen !== ttsGenRef.current) break; // superseded by a newer turn
          // Prefetch the following sentence's audio while this one plays (no gap).
          const following = ttsQueueRef.current[0];
          if (following) prefetch = fetchClip(following);
          if (!clip) continue; // TTS failed for this sentence — skip, keep going
          if (phaseRef.current === 'debrief' || phaseRef.current === 'error') break;
          if (phaseRef.current !== 'maja-speaking') setPhase('maja-speaking');
          unlockAudio();
          audioRef.current = clip;
          await new Promise<void>((resolve) => {
            clip.onended = () => resolve();
            clip.onerror = () => resolve();
            clip.play().catch(() => resolve());
          });
          if (audioRef.current === clip) audioRef.current = null;
        }
      } finally {
        ttsActiveRef.current = false;
      }
      finishTTSIfDone(gen);
    },
    [fetchClip, finishTTSIfDone],
  );

  const enqueueSentences = useCallback(
    (gen: number, list: string[]) => {
      if (gen !== ttsGenRef.current || !list.length) return;
      ttsQueueRef.current.push(...list);
      void pumpTTS(gen);
    },
    [pumpTTS],
  );

  // Start a fresh TTS turn: bump the generation (invalidating any running pump),
  // clear the queue, stop any playing clip. Returns the new generation token.
  const beginTTSTurn = useCallback((): number => {
    const gen = ++ttsGenRef.current;
    ttsQueueRef.current = [];
    ttsStreamDoneRef.current = false;
    if (audioRef.current) {
      try {
        audioRef.current.pause();
      } catch {
        /* ignore */
      }
      audioRef.current = null;
    }
    return gen;
  }, []);

  // Hard-stop the queue (new turn cancelled, screen teardown, session end).
  const cancelTTSTurn = useCallback(() => {
    ttsGenRef.current++; // invalidate any running pump
    ttsQueueRef.current = [];
    ttsStreamDoneRef.current = false;
    if (audioRef.current) {
      try {
        audioRef.current.pause();
      } catch {
        /* ignore */
      }
      audioRef.current = null;
    }
  }, []);

  // ── send message ───────────────────────────
  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) {
        setPhase('listening');
        startListening();
        return;
      }

      setPhase('thinking');
      setLiveTranscript('');

      // Start a streaming-TTS turn; sentences are enqueued as they complete.
      const ttsGen = beginTTSTurn();
      let sentCursor = 0;

      const userMsg = { role: 'user', content: text };
      setConversation((prev) => [...prev, userMsg]);

      const updatedHistory = [...conversation, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const payload = {
        message: text,
        history: updatedHistory,
        session,
        userLevel: level || 'A1',
        userName: name || 'Student',
        isSessionStart: false,
        persona: personaKey,
      };

      try {
        // ── Streaming path ──────────────────────────────────────────────────
        const abortCtrl = new AbortController();
        streamAbortRef.current = abortCtrl;
        const streamTimeout = setTimeout(() => abortCtrl.abort(), 30000); // 30s max
        const res = await apiFetch('/api/maja', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, stream: true }),
          signal: abortCtrl.signal,
        });
        clearTimeout(streamTimeout);

        if (!res.ok) {
          // Carry the status so the catch below can tell the learner WHICH
          // failure this was. Previously this threw a bare Error and the status
          // was lost, so a mid-conversation 429 (daily AI limit) or 401 (expired
          // session) both surfaced as "Nešto je pošlo po krivu."
          //
          // The status alone is not enough for a 429: requireAuthedAI returns
          // one for the per-minute burst limiter AND for the daily ceiling, so
          // the body's error code is what separates "wait a moment" from "come
          // back tomorrow". Reading it is best-effort — this is the streaming
          // path, and an unreadable body must not replace the real failure with
          // a parse error.
          throw Object.assign(new Error(`API ${res.status}`), {
            _status: res.status,
            _code: await readErrorCode(res),
          });
        }
        if (!res.body) throw new Error('Server returned no response body.');

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let streamedText = '';

        // Add a placeholder streaming message
        setConversation((prev) => [...prev, { role: 'maja', content: '', streaming: true }]);
        setPhase('thinking'); // keep thinking indicator while streaming starts

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() ?? ''; // keep incomplete line in buffer
            for (const line of lines) {
              if (!line.startsWith('data: ')) continue;
              const data = line.slice(6).trim();
              if (data === '[DONE]') break;
              try {
                const parsed = JSON.parse(data);
                if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
                  streamedText += parsed.delta.text;
                  // Show Maja's words as they stream — never the raw JSON envelope.
                  const visible = extractStreamingReply(streamedText);
                  setConversation((prev) =>
                    prev.map((m, i) =>
                      i === prev.length - 1 && m.streaming ? { ...m, content: visible } : m,
                    ),
                  );
                  // Speak each sentence the moment it's complete (before the rest
                  // of the reply has even finished generating).
                  const seg = extractSentences(visible, sentCursor, false);
                  if (seg.sentences.length) {
                    sentCursor = seg.cursor;
                    enqueueSentences(ttsGen, seg.sentences);
                  }
                }
              } catch {
                continue;
              }
            }
          }
        } finally {
          // cancel() RETURNS A PROMISE, so the synchronous try/catch this used to
          // sit in could never catch its rejection. Cancelling the reader of a
          // stream that was already aborted rejects with that stream's stored
          // error (Streams spec), so a learner leaving Razgovor while Maja was
          // still replying — the teardown effect calls streamAbortRef.abort() —
          // raised an unhandled AbortError. That is exactly the event the
          // isAbortFailure guard in the catch below exists to keep out of Sentry;
          // it just never saw it, because this rejection bypassed the catch
          // entirely and surfaced as an unhandled promise rejection.
          // The .catch() is the actual guard; the try only covers a sync throw.
          try {
            void reader.cancel().catch(() => {});
          } catch {
            /* ignore */
          }
        }

        // Mark streaming complete — parse accumulated JSON reply from Maja
        // Maja streams a JSON object; extract the "reply" field from it
        let replyText = streamedText;
        let correction = null;
        let newFacts = {};
        let emotion = 'warm';
        try {
          const cleaned = streamedText
            .replace(/^```(?:json)?\s*/i, '')
            .replace(/\s*```$/, '')
            .trim();
          const parsed = JSON.parse(cleaned);
          replyText = parsed.reply || streamedText;
          correction = parsed.correction || null;
          newFacts = parsed.newFacts || {};
          emotion = parsed.emotion || 'warm';
        } catch {
          // Invalid/truncated JSON (e.g. a reply longer than max_tokens). Salvage
          // the reply text so the learner never sees — or hears TTS speak — the raw
          // JSON envelope. Matches a complete "reply" value, or one cut off mid-string.
          const full = streamedText.match(/"reply"\s*:\s*"((?:[^"\\]|\\.)*)"/);
          const partial = streamedText.match(/"reply"\s*:\s*"((?:[^"\\]|\\.)*)$/);
          const salvaged = full?.[1] ?? partial?.[1];
          if (salvaged != null) {
            replyText = salvaged
              .replace(/\\n/g, ' ')
              .replace(/\\"/g, '"')
              .replace(/\\\\/g, '\\')
              .trim();
          }
          // else: model returned plain text (not an envelope) → streamedText is fine.
        }

        setConversation((prev) =>
          prev.map((m, i) =>
            i === prev.length - 1 && m.streaming
              ? { ...m, content: replyText, streaming: false, correction, emotion }
              : m,
          ),
        );

        if (newFacts && Object.keys(newFacts).length) {
          setSession((prev) => ({
            ...prev,
            knownFacts: { ...prev.knownFacts, ...newFacts },
          }));
        }

        if (phaseRef.current !== 'debrief') {
          // Flush any final sentence (the last one may have no trailing space),
          // then mark the reply complete. The TTS queue keeps playing in the
          // background and resumes listening once the last clip finishes; if no
          // audio was produced at all, finishTTSIfDone falls straight through.
          const finalVisible = extractStreamingReply(streamedText) || replyText;
          const flush = extractSentences(finalVisible, sentCursor, true);
          enqueueSentences(ttsGen, flush.sentences);
          ttsStreamDoneRef.current = true;
          finishTTSIfDone(ttsGen);
        }
      } catch (err: unknown) {
        cancelTTSTurn();
        // Finalize any in-progress streaming bubble so it doesn't remain stuck
        setConversation((prev) =>
          prev.map((m, i) =>
            i === prev.length - 1 && m.streaming ? { ...m, streaming: false } : m,
          ),
        );
        // Razgovor had NO error reporting at all, which is why "it never worked
        // properly" never produced a single Sentry event to work from. Aborts are
        // excluded: the stream is deliberately aborted on teardown and on the
        // 30s time-to-first-byte timeout.
        if (!isAbortFailure(err)) {
          reportError(err instanceof Error ? err : new Error('maja turn failed'), 'maja-turn');
        }
        if (phaseRef.current !== 'debrief') {
          setErrorMsg(
            majaErrorMessage(
              (err as ApiError)?._status,
              MAJA_TURN_FALLBACK,
              (err as ApiError)?._code,
            ),
          );
          setPhase('error');
        }
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      conversation,
      session,
      level,
      name,
      beginTTSTurn,
      enqueueSentences,
      finishTTSIfDone,
      cancelTTSTurn,
    ],
  );

  // Voice availability: Web Speech (desktop) OR MediaRecorder→Whisper (iOS Safari,
  // which has no SpeechRecognition). Drives the banner + the iOS capture path.
  // Can this device capture voice via MediaRecorder→Whisper (the SR-independent
  // path)? This is what the DuckDuckGo/in-app-WebKit fallback needs.
  const WHISPER_CAPABLE =
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof MediaRecorder !== 'undefined';

  const VOICE_AVAILABLE = isVoiceAvailable(
    SR_SUPPORTED,
    typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia,
    typeof MediaRecorder !== 'undefined',
  );

  // Effective voice mode: use the Whisper path whenever Web Speech is absent
  // (iOS Safari) OR proved dead at runtime (DuckDuckGo stub). Keep the ref in
  // sync so the stable startListening/effect callbacks read the latest value.
  useEffect(() => {
    srFailedRef.current = srFailed;
  }, [srFailed]);

  // iOS / no-Web-Speech voice path: record → Whisper STT → feed the transcript to
  // Maja, exactly like AIConversation. VAD auto-stops on silence and fires onResult.
  // Inert on desktop (never toggled there — Web Speech handles it).
  const iosVoice = useWhisperSTT({
    onResult: (text: string) => {
      const t = (text || '').trim();
      if (t.length > 1 && phaseRef.current === 'listening') {
        stopMic();
        sendMessage(t);
      }
    },
    onInterrupt: () => {},
    onError: () => {},
    isSpeaking: phase === 'maja-speaking',
    // Lessons use an explicit tap to interrupt (see handleBargeIn / the orb),
    // so the mic never auto-cuts Maja off on halting learner speech or noise.
    allowBargeIn: false,
  });
  // Read iosVoice through a ref so startListening's useCallback identity stays
  // stable (it feeds the auto-listen effect) instead of churning every render.
  const iosVoiceRef = useRef(iosVoice);
  iosVoiceRef.current = iosVoice;

  // Barge-in: the user taps while Maja is speaking → stop her immediately, drop
  // the rest of the queued reply, and start capturing. Tapping is the single,
  // universal interrupt model across every platform (the Whisper/VAD path runs
  // with allowBargeIn:false so the mic never auto-cuts Maja off on halting
  // learner speech or noise during a lesson).
  const handleBargeIn = useCallback(() => {
    if (phaseRef.current !== 'maja-speaking') return;
    cancelTTSTurn(); // stop the current clip + clear the streaming-TTS queue
    startListeningRef.current(); // → phase 'listening', opens/keeps the mic
  }, [cancelTTSTurn]);

  // Surface a Whisper-path mic denial through the same banner as Web Speech.
  useEffect(() => {
    if (iosVoice.permissionDenied) setMicDenied(true);
  }, [iosVoice.permissionDenied]);

  // Release the iOS Whisper mic once the conversation is no longer listening or
  // speaking (debrief / idle / error), so it never lingers open in the background.
  // Mid-conversation it stays on across turns; isSpeaking suppresses self-capture.
  useEffect(() => {
    if (
      (!SR_SUPPORTED || srFailedRef.current) &&
      phase !== 'listening' &&
      phase !== 'maja-speaking' &&
      iosVoiceRef.current.isListening
    ) {
      iosVoiceRef.current.stop();
    }
  }, [phase]);

  // ── start listening ────────────────────────
  const startListening = useCallback(() => {
    if (phaseRef.current === 'debrief') return;

    setPhase('listening');
    transcriptRef.current = '';
    setLiveTranscript('');

    startWaveform();

    if (!SR_SUPPORTED || srFailedRef.current) {
      // iOS Safari (no Web Speech) OR a browser whose SpeechRecognition proved
      // dead at runtime (DuckDuckGo stub): capture via MediaRecorder → Whisper.
      // VAD auto-stops on silence and fires iosVoice.onResult → sendMessage.
      // A text input remains as a manual backup (showFallbackInput).
      if (WHISPER_CAPABLE && !iosVoiceRef.current.isListening) iosVoiceRef.current.toggle();
      return;
    }

    const SpeechRec = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    const rec = new SpeechRec();
    rec.lang = 'hr-HR';
    rec.interimResults = true;
    rec.continuous = true;
    recRef.current = rec;

    const resetSilenceTimer = () => {
      clearTimeout(silenceTimerRef.current ?? undefined);
      // Adaptive: end the turn quickly when the utterance looks complete, but
      // wait longer if the speaker seems mid-thought (see computeSilenceDelay).
      silenceTimerRef.current = setTimeout(() => {
        const captured = transcriptRef.current.trim();
        if (captured.length > 1 && phaseRef.current === 'listening') {
          // GRACEFUL end — rec.stop(), NOT stopMic(). stopMic() aborts, and
          // abort() DISCARDS whatever the recognizer heard but hadn't emitted
          // yet: if this timer fires during a recognizer interim stall (it
          // re-arms on interims, not on audio), abort threw away the words the
          // user was actually saying. stop() flushes them — they arrive as a
          // final onresult, then onend sends the COMPLETE transcript.
          try {
            recRef.current?.stop();
          } catch {
            /* fall through to the backstop below */
          }
          // Backstop: some WebViews never fire onend after stop(). If we're
          // still 'listening' after 1.2s, send what we have the old way.
          silenceTimerRef.current = setTimeout(() => {
            const t = transcriptRef.current.trim();
            if (phaseRef.current === 'listening' && t.length > 1) {
              stopMic();
              sendMessage(t);
            }
          }, 1200);
        }
      }, computeSilenceDelay(transcriptRef.current));
    };

    rec.onresult = (e: Event) => {
      const se = e as unknown as { results: SpeechRecognitionResultList };
      let full = '';
      for (let i = 0; i < se.results.length; i++) {
        if (se.results[i]?.[0]) full += se.results[i]![0]!.transcript;
      }
      transcriptRef.current = full;
      setLiveTranscript(full);
      resetSilenceTimer();
    };

    rec.onerror = (e: Event) => {
      const re = e as unknown as { error: string };
      if (re.error === 'not-allowed') {
        setMicDenied(true);
        setPhase('listening'); // fallback will show
        return;
      }
      // A browser that advertises SpeechRecognition but whose service is dead
      // (DuckDuckGo & other in-app WebKit) errors here with network /
      // service-not-allowed / audio-capture / language-not-supported instead of
      // ever returning a result. Don't die silently — flip to the Whisper path
      // (proven to work in these WebViews) and keep listening.
      if (
        re.error === 'network' ||
        re.error === 'service-not-allowed' ||
        re.error === 'audio-capture' ||
        re.error === 'language-not-supported'
      ) {
        stopMicImmediate();
        setSrFailed(true);
        srFailedRef.current = true;
        if (
          WHISPER_CAPABLE &&
          phaseRef.current === 'listening' &&
          !iosVoiceRef.current.isListening
        ) {
          iosVoiceRef.current.toggle();
        }
      }
    };

    rec.onend = () => {
      // If still supposed to be listening and we have transcript, send it
      if (phaseRef.current === 'listening' && transcriptRef.current.trim().length > 1) {
        stopMic();
        sendMessage(transcriptRef.current.trim());
      }
    };

    try {
      rec.start();
    } catch {
      // rec already started — ignore
    }
  }, [startWaveform, stopMic, sendMessage, WHISPER_CAPABLE]);

  // The TTS queue resumes listening via a ref (it's created before startListening
  // is defined), so keep the ref pointed at the latest startListening.
  useEffect(() => {
    startListeningRef.current = startListening;
  }, [startListening]);

  // ── start session ──────────────────────────
  const startSession = useCallback(async () => {
    setPhase('thinking');
    setErrorMsg('');
    setConversation([]);
    setElapsedSecs(0);
    setSessionActive(true);

    const mem = loadMemory();
    const newCount = mem.sessionCount + 1;
    const relLevel = computeRelationshipLevel(newCount);

    const sess = {
      count: newCount,
      relationshipLevel: relLevel,
      knownFacts: { ...mem.knownFacts },
      mistakePatterns: [...(mem.mistakePatterns || [])],
      lastSummary: mem.lastSessionSummary || '',
      nextTopic: mem.nextTopicSuggestion || '',
    };
    setSession(sess);

    try {
      const res = await apiFetch('/api/maja', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: '',
          history: [],
          session: sess,
          userLevel: level || 'A1',
          userName: name || 'Student',
          isSessionStart: true,
          persona: personaKey,
        }),
      });

      if (!res.ok) {
        const apiErr: ApiError = Object.assign(new Error(`API ${res.status}`), {
          _status: res.status,
          _code: await readErrorCode(res),
        });
        throw apiErr;
      }
      const data = await res.json();

      const majaMsg = {
        role: 'maja',
        content: data.reply,
        correction: null,
        emotion: data.emotion,
      };
      setConversation([majaMsg]);

      if (data.newFacts && Object.keys(data.newFacts).length) {
        setSession((prev) => ({
          ...prev,
          knownFacts: { ...prev.knownFacts, ...data.newFacts },
        }));
      }

      setPhase('maja-speaking');
      await playTTS(data.reply);
      if (phaseRef.current === 'maja-speaking') {
        startListening();
      }
    } catch (err: unknown) {
      const e = err as ApiError;
      if (!isAbortFailure(err)) {
        reportError(err instanceof Error ? err : new Error('maja start failed'), 'maja-start');
      }
      setErrorMsg(majaErrorMessage(e?._status, MAJA_START_FALLBACK, e?._code));
      setPhase('error');
      setSessionActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, name, playTTS, startListening]);

  // ── end session ────────────────────────────
  const endSession = useCallback(async () => {
    stopMic();
    cancelTTSTurn(); // stop any in-flight streaming-TTS playback
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setSessionActive(false);
    setPhase('thinking');

    const durationSecs = elapsedSecs;

    try {
      const res = await apiFetch('/api/maja-debrief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: conversation.map((m) => ({ role: m.role, content: m.content })),
          session: {
            count: session.count,
            userName: name || 'Student',
            userLevel: level || 'A1',
            knownFacts: session.knownFacts,
            mistakePatterns: session.mistakePatterns,
          },
          durationSeconds: durationSecs,
        }),
      });

      if (!res.ok) throw new Error(`Debrief API ${res.status}`);
      const data = await res.json();

      // Feedback loop 3b: feed the conversation's grammar errors into the
      // adaptive scheduler so the daily session targets them next (validated
      // against the real category taxonomy inside the helper).
      applyConversationCategoriesToAdaptive(data.practiceCategories);

      // update localStorage memory
      const mem = loadMemory();
      const newSessionCount = mem.sessionCount + 1;
      const mergedFacts = { ...mem.knownFacts, ...(data.updatedFacts || {}) };
      const mergedVocab = [...(data.newVocab || []), ...(mem.recentVocab || [])].slice(0, 30);

      const updatedMem = {
        ...mem,
        sessionCount: newSessionCount,
        relationshipLevel: computeRelationshipLevel(newSessionCount),
        totalMinutes: mem.totalMinutes + Math.round(durationSecs / 60),
        knownFacts: mergedFacts,
        mistakePatterns: data.mistakePatternsUpdate || mem.mistakePatterns,
        lastSessionSummary: data.majaNotes || mem.lastSessionSummary,
        nextTopicSuggestion: data.nextTopicSuggestion || '',
        recentVocab: mergedVocab,
        sessions: [
          {
            date: new Date().toISOString(),
            durationSecs,
            messages: conversation.length,
            xpEarned: data.xpEarned ?? 30,
          },
          ...(mem.sessions || []),
        ].slice(0, 50),
      };
      saveMemory(updatedMem);
      setMemory(updatedMem);

      setDebrief({ ...data, durationSecs });
      setPhase('debrief');
    } catch {
      // debrief failed — show a minimal one
      setDebrief({
        majaNotes: 'Hvala na razgovoru! Vidimo se uskoro.',
        didWell: 'Završili ste razgovor — to je uvijek pobjednički korak!',
        focusNext: 'Nastavi vježbati svaki dan.',
        newVocab: [],
        nextTopicSuggestion: '',
        xpEarned: 20,
        durationSecs: elapsedSecs,
      });
      setPhase('debrief');
    }
  }, [conversation, elapsedSecs, level, name, session, stopMic, cancelTTSTurn]);

  // ── continue conversation ──────────────────
  const handleContinue = useCallback(() => {
    setDebrief(null);
    setConversation([]);
    setElapsedSecs(0);
    setPhase('idle');
    setSessionActive(false);
  }, []);

  // ── debrief back (award XP) ────────────────
  const handleDebriefBack = useCallback(() => {
    if (debrief && !debriefXpFired.current) {
      debriefXpFired.current = true;
      if (typeof award === 'function') award(debrief.xpEarned ?? 30, false, 'speaking');
      markQuest('culture');
    }
    goBack();
  }, [debrief, award, goBack]);

  // ── fallback send ──────────────────────────
  const handleFallbackSend = useCallback(() => {
    const text = fallbackText.trim();
    if (!text) return;
    setFallbackText('');
    sendMessage(text);
  }, [fallbackText, sendMessage]);

  // ── retry after error ──────────────────────
  const handleRetry = useCallback(() => {
    setErrorMsg('');
    if (sessionActive) {
      startListening();
    } else {
      setPhase('idle');
    }
  }, [sessionActive, startListening]);

  // ── derived values ─────────────────────────
  const isFirstTime = memory.sessionCount === 0;
  const showFallbackInput =
    (!SR_SUPPORTED || srFailed || micDenied) && (phase === 'listening' || sessionActive);

  // ─────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────
  return (
    <>
      <style>{MAJA_STYLES}</style>
      <div
        style={{
          maxWidth: 480,
          margin: '0 auto',
          padding: '0 16px 120px',
        }}
      >
        {/* ── Back / header bar ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 0 12px',
            position: 'sticky',
            top: 0,
            background: 'transparent',
            zIndex: 10,
          }}
        >
          <button
            onClick={goBack}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--heading)',
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              padding: '4px 0',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            ← {personaCfg.name.split(' ')[0]}
          </button>

          {sessionActive && phase !== 'debrief' && (
            <button
              onClick={endSession}
              style={{
                background: 'transparent',
                border: '1px solid var(--card-b)',
                borderRadius: 8,
                color: 'var(--subtext)',
                fontSize: 13,
                padding: '6px 12px',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              ⏹ Završi
            </button>
          )}
        </div>

        {/* ── DEBRIEF SCREEN ── */}
        {phase === 'debrief' && debrief && (
          <DebriefScreen
            debrief={debrief}
            conversation={conversation}
            durationSecs={debrief.durationSecs ?? elapsedSecs}
            onContinue={handleContinue}
            onBack={handleDebriefBack}
            award={award}
          />
        )}

        {phase !== 'debrief' && (
          <>
            {/* ── Persona avatar card + welcome ── */}
            <MajaIdleCard
              personaKey={personaKey ?? 'teacher'}
              personaCfg={personaCfg}
              memory={memory}
              name={name ?? ''}
              isFirstTime={isFirstTime}
              showWelcome={!sessionActive}
            />

            {/* ── No-voice banner (only when neither Web Speech nor Whisper works) ── */}
            {!VOICE_AVAILABLE && (
              <div
                style={{
                  background: 'rgba(245,158,11,0.1)',
                  border: '1px solid rgba(245,158,11,0.35)',
                  borderRadius: 10,
                  padding: '12px 14px',
                  marginBottom: 14,
                  fontSize: 13,
                  color: '#92400e',
                  lineHeight: 1.5,
                }}
              >
                <strong>Prepoznavanje govora nije dostupno u ovom pregledniku.</strong>
                <br />
                Za glasovni razgovor koristite Chrome ili Edge. Možete i dalje razgovarati s Majom
                upisivanjem teksta u polje ispod.
              </div>
            )}

            {/* ── Mic denied explainer (Web Speech or Whisper path) ── */}
            {micDenied && (
              <div style={{ marginBottom: 14 }}>
                <MicPermissionDeniedExplainer onRetry={() => setMicDenied(false)} />
              </div>
            )}

            {/* ── THE ORB (tap to interrupt while Maja is speaking) ── */}
            <div
              onClick={phase === 'maja-speaking' ? handleBargeIn : undefined}
              role={phase === 'maja-speaking' ? 'button' : undefined}
              aria-label={phase === 'maja-speaking' ? 'Prekini i govori' : undefined}
              style={phase === 'maja-speaking' ? { cursor: 'pointer' } : undefined}
            >
              <MajaOrb
                phase={phase}
                waveform={waveform}
                liveTranscript={liveTranscript}
                personaCfg={personaCfg}
              />
            </div>

            {/* ── Error message ── */}
            {phase === 'error' && (
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: 12,
                }}
              >
                <p style={{ fontSize: 13, color: '#dc2626', margin: '0 0 8px' }}>
                  {errorMsg || 'Nepoznata greška.'}
                </p>
                <button
                  onClick={handleRetry}
                  style={{
                    background: '#dc2626',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 20px',
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  Pokušaj ponovo
                </button>
              </div>
            )}

            {/* ── Conversation transcript ── */}
            {conversation.length > 0 && (
              <div
                ref={scrollRef}
                style={{
                  maxHeight: '35vh',
                  overflowY: 'auto',
                  padding: '8px 4px',
                  marginBottom: 8,
                  scrollbarWidth: 'thin',
                }}
              >
                {conversation.map((msg, i) => (
                  <ConversationBubble
                    key={i}
                    msg={msg as Parameters<typeof ConversationBubble>[0]['msg']}
                    personaCfg={personaCfg}
                  />
                ))}
              </div>
            )}

            {/* ── Fallback text input ── */}
            {showFallbackInput && (
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <textarea
                  value={fallbackText}
                  onChange={(e) => setFallbackText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleFallbackSend();
                    }
                  }}
                  placeholder={`Upiši svoju poruku ${personaCfg.name.split(' ')[0]}...`}
                  rows={2}
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    border: '1px solid var(--card-b)',
                    background: 'var(--card)',
                    color: 'var(--heading)',
                    padding: '10px 12px',
                    fontSize: 14,
                    resize: 'none',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                />
                <button
                  onClick={handleFallbackSend}
                  disabled={!fallbackText.trim() || phase === 'thinking'}
                  style={{
                    borderRadius: 10,
                    background: fallbackText.trim() && phase !== 'thinking' ? '#D4002D' : '#ccc',
                    color: '#fff',
                    border: 'none',
                    padding: '0 16px',
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: fallbackText.trim() && phase !== 'thinking' ? 'pointer' : 'default',
                    transition: 'background 0.2s',
                  }}
                >
                  Pošalji
                </button>
              </div>
            )}

            {/* ── Action bar ── */}
            <div style={{ marginTop: 8 }}>
              {phase === 'idle' && (
                <button
                  onClick={startSession}
                  style={{
                    width: '100%',
                    height: 52,
                    borderRadius: 12,
                    background: personaCfg.accentColor,
                    color: '#fff',
                    border: 'none',
                    fontSize: 17,
                    fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: 0.3,
                    boxShadow: `0 4px 16px ${personaCfg.accentColor}40`,
                  }}
                >
                  Počni razgovor →
                </button>
              )}

              {sessionActive && phase !== 'idle' && phase !== 'debrief' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 0',
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      color: 'var(--subtext)',
                    }}
                  >
                    {phase === 'listening' ? (
                      <span style={{ color: personaCfg.listenColor, fontWeight: 600 }}>
                        Govoriš…
                      </span>
                    ) : phase === 'thinking' ? (
                      <span style={{ color: '#d97706', fontWeight: 600 }}>Obrađujem…</span>
                    ) : phase === 'maja-speaking' ? (
                      <span style={{ color: personaCfg.speakingColor, fontWeight: 600 }}>
                        {personaCfg.name.split(' ')[0]} govori…{' '}
                        <span style={{ opacity: 0.65, fontWeight: 500 }}>· dodirni za prekid</span>
                      </span>
                    ) : null}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: 'var(--subtext)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {fmtElapsed(elapsedSecs)} elapsed
                  </span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
