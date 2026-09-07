// src/components/practice/GuidedSpeakingScreen.tsx
//
// GUIDED SPEAKING — the teaching side of spoken production (2026-09-07), and
// the first REACHABLE entry point to the speaking coach.
//
// See the header of src/data/speakingCurriculum.ts for the finding: the
// coach's only caller was an open-ended branch of `SpeakingScreen` that no
// launch path can ever produce, so rubric-graded speech existed in the app
// only inside the Level Check. This screen is the practice half.
//
//   1. LISTEN   — hear the model (TTS) and read what to steal. The Croatian is
//                 ON SCREEN, so this is a TEXT-FIRST surface: a failed play
//                 names its cause and NEVER blocks the stage (the audio
//                 directive's rule — gating a text-first screen on playback
//                 would strand a learner who can read it).
//   2. REHEARSE — say the load-bearing phrases one at a time. Recognised when
//                 the browser can, self-confirmed when it cannot. This stage
//                 teaches; it can always be advanced.
//   3. SPEAK    — free production against a checklist. The transcript comes
//                 from the browser recognizer (zero AI cost, no STT charge) or
//                 from typing when there is no mic, and ONE
//                 /api/speaking-coach call grades it — the same one-call
//                 profile as Guided Writing's /api/correct.
//
// FAIL-SOFT, NEVER SILENT: a coach failure names its cause, offers a retry and
// offers the way forward. The learner did the speaking; feedback is enrichment,
// never a gate (the 2026-08-19 owner correction, applied to the writing twin).

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { H } from '../../data';
import { AIProgressBar } from '../shared/SkeletonLoader';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { speak, getLastTtsFailure, describeTtsFailure } from '../../lib/audio';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import { recordScreenPractised } from '../../lib/teachPractice';
import { getCurrentContentLevel } from '../../lib/cefrCertification';
import { requestSpeakingCoach, COACH_MIN_WORDS } from '../../lib/speakingCoach';
import type { CoachResult } from '../../lib/speakingCoach';
import type { AiFailure } from '../../lib/aiFailure';
import {
  SPEAKING_CURRICULUM,
  speakingUnitsForLevel,
  type SpeakingUnit,
  type SpeakingChecklistItem,
} from '../../data/speakingCurriculum';
import type { CefrLevel } from '../../lib/cefr.js';

const UNIT_PTR_KEY = 'nh_guided_speaking_idx';

export function countSpokenWords(raw: string): number {
  return raw.trim().split(/\s+/).filter(Boolean).length;
}

/** Accent-and-punctuation-tolerant compare for the rehearsal stage. A recogniser
 *  drops diacritics and punctuation constantly; refusing the learner over that
 *  would punish the microphone, not the speaker. */
export function phraseMatches(heard: string, target: string): boolean {
  const norm = (s: string) =>
    s
      .toLowerCase()
      .replace(/[.,!?;:„“”"'—–-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  const a = norm(heard);
  const b = norm(target);
  if (!a) return false;
  if (a === b) return true;
  // Partial credit: most of the target's words present, in any order. The point
  // of this stage is to get the phrase out of the mouth, not to win a dictation.
  const want = b.split(' ').filter((w) => w.length > 2);
  if (want.length === 0) return a.includes(b);
  const got = new Set(a.split(' '));
  const hits = want.filter((w) => got.has(w)).length;
  return hits / want.length >= 0.6;
}

/** Rotate through the level's units across visits so content does not repeat. */
export function pickSpeakingUnit(level: string): SpeakingUnit {
  const pool = speakingUnitsForLevel(level as CefrLevel);
  const units = pool.length > 0 ? pool : SPEAKING_CURRICULUM.filter((u) => u.level === 'A1');
  let idx = 0;
  try {
    idx = parseInt(localStorage.getItem(`${UNIT_PTR_KEY}:${level}`) || '0', 10) || 0;
  } catch {
    /* storage unavailable — first unit */
  }
  const unit = units[((idx % units.length) + units.length) % units.length]!;
  try {
    localStorage.setItem(`${UNIT_PTR_KEY}:${level}`, String((idx + 1) % units.length));
  } catch {
    /* storage unavailable — same unit next time */
  }
  return unit;
}

export function checklistSatisfied(item: SpeakingChecklistItem, transcript: string): boolean {
  if (typeof item.minWords === 'number') return countSpokenWords(transcript) >= item.minWords;
  if (item.words && item.words.length > 0) {
    const low = transcript.toLowerCase();
    return item.words.some((w) => low.includes(w.toLowerCase()));
  }
  return false;
}

interface Recognizer {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
}

type SpeechRecognitionCtor = new () => Recognizer;

function recognizerCtor(): SpeechRecognitionCtor | null {
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

type Stage = 'listen' | 'rehearse' | 'speak';

interface GuidedSpeakingScreenProps {
  goBack: () => void;
  award: (n: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GuidedSpeakingScreen({ goBack, award }: GuidedSpeakingScreenProps) {
  const mountedRef = useRef(true);
  const finishFired = useRef(false);
  const recRef = useRef<Recognizer | null>(null);
  const { isOnline } = useOnlineStatus();

  const [unit] = useState<SpeakingUnit>(() => pickSpeakingUnit(getCurrentContentLevel()));
  const [stage, setStage] = useState<Stage>('listen');
  const [showEn, setShowEn] = useState(false);
  const [openStructure, setOpenStructure] = useState<number | null>(null);
  const [ttsError, setTtsError] = useState('');

  // Rehearse stage
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [phraseState, setPhraseState] = useState<'idle' | 'right' | 'again'>('idle');
  const [heardPhrase, setHeardPhrase] = useState('');

  // Speak stage
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false);
  const [micError, setMicError] = useState('');
  const [coach, setCoach] = useState<CoachResult | null>(null);
  const [coachFailure, setCoachFailure] = useState<AiFailure | null>(null);
  const [loading, setLoading] = useState(false);
  const [failCount, setFailCount] = useState(0);

  const srSupported = typeof window !== 'undefined' && recognizerCtor() !== null;
  const wordCount = countSpokenWords(transcript);
  const phrase = unit.rehearse[phraseIdx];

  const stopRecognizer = useCallback(() => {
    const rec = recRef.current;
    if (!rec) return;
    recRef.current = null;
    try {
      rec.onresult = null;
      rec.onerror = null;
      rec.onend = null;
      rec.stop();
    } catch {
      /* already stopped */
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      stopRecognizer();
    };
  }, [stopRecognizer]);

  /** Play a Croatian line. Text-first screen: a failure is NAMED and never blocks. */
  async function play(text: string) {
    setTtsError('');
    const res = await speak(text);
    if (!mountedRef.current) return;
    if (res === 'azure' || res === 'synth' || res === 'superseded') return;
    setTtsError(describeTtsFailure(getLastTtsFailure()));
  }

  /** Listen once and hand the transcript to `onText`. Zero AI cost. */
  function listenOnce(onText: (t: string) => void) {
    const Ctor = recognizerCtor();
    if (!Ctor) return;
    stopRecognizer();
    setMicError('');
    let full = '';
    const rec = new Ctor();
    recRef.current = rec;
    rec.lang = 'hr-HR';
    rec.continuous = true;
    rec.interimResults = true;
    rec.onresult = (e) => {
      let out = '';
      for (let i = 0; i < e.results.length; i++) {
        const alt = e.results[i]?.[0];
        if (alt) out += alt.transcript;
      }
      full = out;
      if (mountedRef.current) onText(out);
    };
    rec.onerror = (e) => {
      if (!mountedRef.current) return;
      setRecording(false);
      setMicError(
        e.error === 'not-allowed' || e.error === 'permission-denied'
          ? 'No microphone access — you can type your answer instead, it counts the same.'
          : e.error === 'no-speech'
            ? 'I did not hear anything. Try again, a little closer to the mic.'
            : 'The recogniser stopped. Try again, or type your answer instead.',
      );
    };
    rec.onend = () => {
      if (!mountedRef.current) return;
      setRecording(false);
      onText(full);
    };
    try {
      rec.start();
      setRecording(true);
    } catch {
      setRecording(false);
      setMicError('Could not start the microphone — you can type your answer instead.');
    }
  }

  function checkPhrase(heard: string) {
    setHeardPhrase(heard);
    if (!phrase) return;
    setPhraseState(phraseMatches(heard, phrase.hr) ? 'right' : 'again');
  }

  function nextPhrase() {
    stopRecognizer();
    setPhraseState('idle');
    setHeardPhrase('');
    setRecording(false);
    if (phraseIdx + 1 >= unit.rehearse.length) setStage('speak');
    else setPhraseIdx((i) => i + 1);
  }

  async function submit() {
    if (wordCount < unit.minWords) return;
    stopRecognizer();
    setLoading(true);
    setCoachFailure(null);
    const res = await requestSpeakingCoach({
      prompt: unit.promptEn,
      transcript,
      level: unit.level,
    });
    if (!mountedRef.current) return;
    setLoading(false);
    // Below the coach's own participation floor — cannot happen behind the
    // minWords gate, but the contract allows null and we must not read it as a
    // failure the learner caused.
    if (!res) {
      setFailCount((c) => c + 1);
      signalSessionCompleteIfActive('speaking_guided');
      return;
    }
    if (!res.ok) {
      setCoachFailure(res.failure);
      setFailCount((c) => c + 1);
      // Self-heal: the learner DID the speaking; a dead coach must not strand
      // the daily session at N-1/N.
      signalSessionCompleteIfActive('speaking_guided');
      return;
    }
    setCoach(res.data);
    signalSessionCompleteIfActive('speaking_guided');
    // Clear the teach → practice coupling. This screen grades against the coach
    // rubric and awards from the score, so it never reaches completeExercise —
    // the same reason writing_guided and relpron each need this call (see
    // couplingClearingPath.test.ts). Only on the GRADED finish.
    recordScreenPractised('speaking_guided');
    if (!finishFired.current) {
      finishFired.current = true;
      award(Math.round(res.data.overall * 10) + 5, false, 'speaking');
    }
  }

  function continueAnyway() {
    stopRecognizer();
    if (!finishFired.current) {
      finishFired.current = true;
      award(5, false, 'speaking');
    }
    signalSessionCompleteIfActive('speaking_guided');
    goBack();
  }

  const card: React.CSSProperties = {
    background: 'var(--card, #fff)',
    border: '1px solid var(--line, #e5e7eb)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  };
  const kicker: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 800,
    color: '#6b7280',
    marginBottom: 8,
  };

  return (
    <div className="scr-wrap">
      {H('🎙️ Guided Speaking', `${unit.level} · ${unit.title}`, goBack)}

      <div
        style={{ display: 'flex', gap: 6, justifyContent: 'center', margin: '2px 0 14px' }}
        data-testid="gs-stages"
      >
        {(['listen', 'rehearse', 'speak'] as Stage[]).map((s) => (
          <span
            key={s}
            style={{
              width: 26,
              height: 6,
              borderRadius: 3,
              background: s === stage ? '#dc2626' : '#d1d5db',
            }}
          />
        ))}
      </div>

      {ttsError && (
        <div
          data-testid="gs-tts-failed"
          style={{
            background: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: 10,
            padding: '8px 12px',
            fontSize: 13,
            color: '#92400e',
            marginBottom: 12,
          }}
        >
          {ttsError} You can still read the Croatian below.
        </div>
      )}

      {stage === 'listen' && (
        <>
          <div style={card} data-testid="gs-task">
            <div style={kicker}>THE TASK</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{unit.prompt}</div>
            <div style={{ fontSize: 13, color: '#6b7280' }}>{unit.promptEn}</div>
          </div>

          <div style={card} data-testid="gs-model">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={kicker}>LISTEN TO THE MODEL</div>
              <button
                onClick={() => setShowEn((v) => !v)}
                data-testid="gs-toggle-en"
                style={{
                  border: '1px solid #d1d5db',
                  background: 'transparent',
                  borderRadius: 12,
                  padding: '3px 10px',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {showEn ? 'HR' : 'EN'}
              </button>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: '0 0 10px' }}>
              {showEn ? unit.modelEn : unit.model}
            </p>
            <button
              className="b bs"
              onClick={() => void play(unit.model)}
              data-testid="gs-play-model"
              style={{ padding: '8px 14px', fontWeight: 700 }}
            >
              ▶︎ Hear it
            </button>
          </div>

          <div style={card}>
            <div style={kicker}>WHAT TO STEAL FROM IT</div>
            {unit.structures.map((st, i) => (
              <button
                key={i}
                onClick={() => setOpenStructure(openStructure === i ? null : i)}
                data-testid={`gs-structure-${i}`}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: openStructure === i ? '#fef2f2' : '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: 10,
                  padding: '10px 12px',
                  marginBottom: 8,
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700 }}>„{st.hr}“</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>{st.en}</div>
                {openStructure === i && (
                  <div style={{ fontSize: 13, color: '#991b1b', marginTop: 6 }}>{st.why}</div>
                )}
              </button>
            ))}
          </div>

          <button
            className="b bp"
            onClick={() => setStage('rehearse')}
            data-testid="gs-to-rehearse"
            style={{ width: '100%', padding: '13px 0', fontSize: 15, fontWeight: 800 }}
          >
            Say the patterns →
          </button>
        </>
      )}

      {stage === 'rehearse' && phrase && (
        <div style={card} data-testid="gs-rehearse">
          <div style={kicker}>
            SAY IT ALOUD ({phraseIdx + 1}/{unit.rehearse.length})
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.5, marginBottom: 4 }}>
            {phrase.hr}
          </div>
          <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>{phrase.en}</div>
          <div style={{ fontSize: 13, color: '#991b1b', marginBottom: 12 }}>💡 {phrase.why}</div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
            <button
              className="b bs"
              onClick={() => void play(phrase.hr)}
              data-testid="gs-play-phrase"
              style={{ flex: 1, padding: '10px 0', fontWeight: 700 }}
            >
              ▶︎ Hear it
            </button>
            {srSupported && (
              <button
                className="b bp"
                onClick={() => (recording ? stopRecognizer() : listenOnce(checkPhrase))}
                data-testid="gs-record-phrase"
                style={{ flex: 1, padding: '10px 0', fontWeight: 800 }}
              >
                {recording ? '■ Stop' : '🎙️ Say it'}
              </button>
            )}
          </div>

          {heardPhrase && (
            <div data-testid="gs-heard" style={{ fontSize: 13, color: '#374151', marginBottom: 8 }}>
              Heard: „{heardPhrase}“
            </div>
          )}
          {phraseState === 'right' && (
            <div style={{ fontSize: 13, color: '#16a34a', marginBottom: 8 }}>Točno! ✓</div>
          )}
          {phraseState === 'again' && (
            <div style={{ fontSize: 13, color: '#b45309', marginBottom: 8 }}>
              Not quite what I heard — but the recogniser is not the judge here. Say it once more if
              you like, then move on.
            </div>
          )}
          {micError && (
            <div style={{ fontSize: 13, color: '#b45309', marginBottom: 8 }}>{micError}</div>
          )}

          {/* This stage TEACHES — it can always be advanced. */}
          <button
            className="b bp"
            onClick={nextPhrase}
            data-testid="gs-phrase-next"
            style={{ width: '100%', padding: '11px 0', fontWeight: 800 }}
          >
            {phraseIdx + 1 >= unit.rehearse.length ? 'Now speak your own →' : 'Next →'}
          </button>
        </div>
      )}

      {stage === 'speak' && !coach && (
        <>
          <div style={card} data-testid="gs-your-turn">
            <div style={kicker}>YOUR TURN</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{unit.prompt}</div>
            <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 10 }}>{unit.promptEn}</div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
              {unit.usefulPhrases.map((p) => (
                <span
                  key={p}
                  data-testid="gs-phrase-chip"
                  style={{
                    border: '1px solid #d1d5db',
                    background: '#f9fafb',
                    borderRadius: 12,
                    padding: '3px 10px',
                    fontSize: 13,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            {srSupported && (
              <button
                className="b bp"
                onClick={() => (recording ? stopRecognizer() : listenOnce(setTranscript))}
                data-testid="gs-record"
                style={{ width: '100%', padding: '13px 0', fontWeight: 800, marginBottom: 10 }}
              >
                {recording ? '■ Stop and check' : '🎙️ Start speaking'}
              </button>
            )}

            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder={
                srSupported
                  ? 'What you say appears here — you can fix anything the recogniser got wrong.'
                  : 'No microphone here — type what you would say. It counts the same.'
              }
              data-testid="gs-transcript"
              rows={6}
              style={{
                width: '100%',
                border: '1px solid #d1d5db',
                borderRadius: 10,
                padding: 12,
                fontSize: 15,
                lineHeight: 1.6,
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
              {wordCount} / {unit.minWords} words
            </div>
            {micError && (
              <div style={{ fontSize: 13, color: '#b45309', marginTop: 6 }}>{micError}</div>
            )}
          </div>

          <div style={card} data-testid="gs-checklist">
            <div style={kicker}>CHECKLIST</div>
            {unit.checklist.map((item) => {
              const done = checklistSatisfied(item, transcript);
              return (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    fontSize: 14,
                    marginBottom: 6,
                    color: done ? '#16a34a' : '#374151',
                    fontWeight: done ? 700 : 500,
                  }}
                >
                  <span>{done ? '✅' : '⬜'}</span>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          {coachFailure && (
            <div
              data-testid="gs-coach-failed"
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: 10,
                padding: '10px 14px',
                fontSize: 13,
                color: '#991b1b',
                marginBottom: 12,
              }}
            >
              {coachFailure.message}
            </div>
          )}

          {loading ? (
            <AIProgressBar phase="Your coach is listening…" />
          ) : (
            <>
              {(failCount > 0 || (!isOnline && wordCount >= unit.minWords)) && (
                <button
                  className="b bp"
                  onClick={continueAnyway}
                  data-testid="gs-continue-anyway"
                  style={{
                    width: '100%',
                    padding: '13px 0',
                    fontSize: 15,
                    fontWeight: 800,
                    marginBottom: 8,
                  }}
                >
                  Continue — your speaking counts ✓
                </button>
              )}
              <button
                className={failCount > 0 ? 'b bs' : 'b bp'}
                onClick={() => void submit()}
                disabled={wordCount < unit.minWords || !isOnline}
                data-testid="gs-submit"
                style={{
                  width: '100%',
                  padding: '13px 0',
                  fontSize: 15,
                  fontWeight: failCount > 0 ? 700 : 800,
                  opacity: wordCount < unit.minWords || !isOnline ? 0.5 : 1,
                }}
              >
                {!isOnline
                  ? 'Reconnect to get feedback'
                  : wordCount < unit.minWords
                    ? `Say ${unit.minWords - wordCount} more word${
                        unit.minWords - wordCount === 1 ? '' : 's'
                      }`
                    : failCount > 0
                      ? 'Try feedback again'
                      : 'Get feedback ✨'}
              </button>
            </>
          )}
        </>
      )}

      {stage === 'speak' && coach && (
        <div data-testid="gs-result">
          <div style={card}>
            <div style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
              {Math.round(coach.overall * 100)}/100
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {(
                [
                  ['Range', coach.scores.range],
                  ['Accuracy', coach.scores.accuracy],
                  ['Fluency', coach.scores.fluency],
                  ['Task', coach.scores.task],
                ] as Array<[string, number]>
              ).map(([label, v]) => (
                <div key={label} style={{ fontSize: 13, color: '#374151' }}>
                  {label} <strong>{Math.round(v * 100)}%</strong>
                </div>
              ))}
            </div>
            {coach.encouragement && (
              <div style={{ fontSize: 14, color: '#374151', marginTop: 10 }}>
                {coach.encouragement}
              </div>
            )}
          </div>

          {coach.advice && (
            <div style={card} data-testid="gs-advice">
              <div style={kicker}>WORK ON THIS NEXT</div>
              <div style={{ fontSize: 14 }}>🎯 {coach.advice}</div>
            </div>
          )}

          {coach.errors?.length > 0 && (
            <div style={card} data-testid="gs-errors">
              <div style={kicker}>WHAT TO FIX</div>
              {coach.errors.map((e, i) => (
                <div key={i} style={{ fontSize: 14, marginBottom: 8 }}>
                  <span style={{ textDecoration: 'line-through', color: '#991b1b' }}>
                    {e.original}
                  </span>{' '}
                  → <strong>{e.corrected}</strong>
                  <div style={{ fontSize: 12, color: '#6b7280' }}>{e.note}</div>
                </div>
              ))}
            </div>
          )}

          <button
            className="b bp"
            onClick={goBack}
            data-testid="gs-done"
            style={{ width: '100%', padding: '13px 0', fontSize: 15, fontWeight: 800 }}
          >
            Done ✓
          </button>
        </div>
      )}
    </div>
  );
}

/** Re-exported so tests and the curriculum guard share one floor. */
export { COACH_MIN_WORDS };
