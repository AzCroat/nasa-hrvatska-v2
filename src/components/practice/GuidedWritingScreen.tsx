// src/components/practice/GuidedWritingScreen.tsx
//
// GUIDED WRITING — the teaching side of written production (2026-08-18).
// WritingScreen grades; this screen TEACHES, then grades with the same
// evaluator. Three stages per curriculum unit (src/data/writingCurriculum.ts):
//
//   1. STUDY  — read a native-standard model text; its load-bearing structures
//               are called out with the reason they matter.
//   2. FRAMES — complete key forms inside guided sentences. Checked locally
//               (accent-tolerant), zero AI cost. Two misses unlock "show
//               answer" — this stage teaches, it never punishes.
//   3. WRITE  — free production against a visible checklist, graded by
//               /api/correct (mode 'writeeval') — the same rubric the exam
//               uses — then fed into the SAME feedback loop as WritingScreen:
//               mastery ledger (writing, weight 2), nh_writing_mistakes,
//               single-word corrections → SRS, error-types → adaptive.
//
// A1 units exist here — this is the first writing content A1 learners get.

import React, { useEffect, useRef, useState } from 'react';
import { H } from '../../data';
import { AIProgressBar } from '../shared/SkeletonLoader';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { applyWritingErrorsToAdaptive } from '../../lib/adaptiveFeedback.js';
import { _aiPost } from '../../lib/aiPost';
import { logError } from '../../lib/learnerErrors.js';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import { recordScreenPractised } from '../../lib/teachPractice';
import { addWordToSRS } from '../../lib/srs.js';
import { recordMasteryEvent } from '../../lib/masteryLedger';
import { getCurrentContentLevel } from '../../lib/cefrCertification';
import { classifyAiLimit, formatAiResetTime, BUDGET_PAUSE_EN } from '../../lib/aiLimit';
import { CorrectionDiff } from './CorrectionDiff';
import type { CorrectionChange } from './CorrectionDiff';
import { WRITING_CURRICULUM, unitsForLevel } from '../../data/writingCurriculum';
import type { WritingUnit } from '../../data/writingCurriculum';
import type { CefrLevel } from '../../lib/cefr.js';

const UNIT_PTR_KEY = 'nh_guided_writing_idx';

interface GuidedWritingResult {
  score?: number;
  level_demonstrated?: string;
  corrected_text?: string;
  strengths?: string[];
  improvements?: string[];
  changes?: CorrectionChange[];
  encouragement?: string;
}

interface GuidedWritingScreenProps {
  goBack: () => void;
  award: (n: number, celebrate?: boolean, activityType?: string) => void;
}

export function countWords(raw: string): number {
  return raw.trim().split(/\s+/).filter(Boolean).length;
}

/** Accent-and-punctuation-tolerant answer compare for the frames stage. */
export function frameMatches(input: string, answer: string, accept?: string[]): boolean {
  const norm = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:'"„“”]/g, '')
      .replace(/\s+/g, ' ');
  const got = norm(input);
  if (!got) return false;
  if (got === norm(answer)) return true;
  return (accept ?? []).some((a) => got === norm(a));
}

/** Rotate through the level's units across visits so content doesn't repeat. */
export function pickUnit(level: string): WritingUnit {
  const pool = unitsForLevel(level as CefrLevel);
  const units = pool.length > 0 ? pool : WRITING_CURRICULUM.filter((u) => u.level === 'A1');
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

type Stage = 'study' | 'frames' | 'write';

export default function GuidedWritingScreen({ goBack, award }: GuidedWritingScreenProps) {
  const mountedRef = useRef(true);
  const finishFired = useRef(false);
  const { isOnline } = useOnlineStatus();
  const [unit] = useState<WritingUnit>(() => pickUnit(getCurrentContentLevel()));
  const [stage, setStage] = useState<Stage>('study');
  const [showEn, setShowEn] = useState(false);
  const [openStructure, setOpenStructure] = useState<number | null>(null);

  // Frames stage
  const [frameIdx, setFrameIdx] = useState(0);
  const [frameInput, setFrameInput] = useState('');
  const [frameState, setFrameState] = useState<'idle' | 'right' | 'wrong'>('idle');
  const [misses, setMisses] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // Write stage
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [result, setResult] = useState<GuidedWritingResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Field bug (owner report, 2026-08-19): a transient /api/correct outage left
  // learners with an error and only a retry button — the flow GATED on AI
  // availability, violating the always-answers doctrine. The session credit
  // already self-heals; failCount makes the way forward visible.
  const [failCount, setFailCount] = useState(0);
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const frame = unit.frames[frameIdx];
  const wordCount = countWords(text);

  function checkFrame() {
    if (!frame) return;
    if (frameMatches(frameInput, frame.answer, frame.accept)) {
      setFrameState('right');
    } else {
      setFrameState('wrong');
      setMisses((m) => m + 1);
    }
  }

  function nextFrame() {
    setFrameInput('');
    setFrameState('idle');
    setMisses(0);
    setRevealed(false);
    if (frameIdx + 1 >= unit.frames.length) {
      setStage('write');
    } else {
      setFrameIdx((i) => i + 1);
    }
  }

  function insertConnective(word: string) {
    setText((t) => (t.length === 0 || /\s$/.test(t) ? t + word + ' ' : t + ' ' + word + ' '));
    textRef.current?.focus();
  }

  function checklistDone(item: { minWords?: number; words?: string[] }): boolean {
    if (typeof item.minWords === 'number') return wordCount >= item.minWords;
    if (item.words && item.words.length > 0) {
      const low = text.toLowerCase();
      return item.words.some((w) => low.includes(w.toLowerCase()));
    }
    return false;
  }

  async function submit() {
    if (wordCount < unit.minWords) return;
    setLoading(true);
    setError('');
    setResult(null);
    setSubmittedText(text);
    try {
      const res = await _aiPost('/api/correct', {
        mode: 'writeeval',
        prompt: unit.promptEn,
        text: text.trim(),
        params: { level: unit.level, writingPrompt: unit.promptEn },
      });
      if (!res.ok) {
        let errBody: Record<string, unknown> = {};
        try {
          errBody = await res.json();
        } catch {
          /* body not JSON */
        }
        if (res.status === 401)
          throw new Error(
            'Sign in to get AI writing feedback. Tap the Profile tab to create a free account.',
          );
        const limit = classifyAiLimit({
          status: res.status,
          code: typeof errBody['error'] === 'string' ? (errBody['error'] as string) : '',
        });
        if (limit === 'budget') throw new Error(BUDGET_PAUSE_EN);
        if (limit === 'burst')
          throw new Error('A little too fast — wait a moment before asking for more feedback.');
        if (limit === 'daily') {
          const resetAt = errBody['resetAt'];
          const t =
            typeof resetAt === 'string' || typeof resetAt === 'number'
              ? formatAiResetTime(resetAt) || 'midnight UTC'
              : 'midnight UTC';
          throw new Error(`Daily AI limit reached. Quota resets at ${t} — come back tomorrow!`);
        }
        if (res.status >= 500)
          throw new Error(
            'AI correction service is temporarily unavailable. Please try again in a moment.',
          );
        throw new Error(
          typeof errBody['error'] === 'string'
            ? (errBody['error'] as string)
            : `Request failed (${res.status})`,
        );
      }
      const data = (await res.json()) as GuidedWritingResult;
      if (!mountedRef.current) return;
      setResult(data);
      signalSessionCompleteIfActive('writing_guided');
      // Clear the teach → practice coupling (2026-08-29). This screen does not
      // go through completeExercise — it grades against the /api/correct rubric
      // and awards from the score — so it was silently missing the ONE call
      // that discharges the queue. The B2 `formal-email` and C1 academic-writing
      // lessons queue `writing`, which routes here; without this the learner did
      // the writing and the entry sat re-claiming a session slot for 14 days.
      // Only on the GRADED finish: the AI-failure and exit paths below are not
      // practice. Found by couplingClearingPath.test.ts.
      recordScreenPractised('writing_guided');
      if (typeof data.score === 'number') {
        // Graded free production at the UNIT's level — strong written evidence,
        // same weight WritingScreen uses.
        recordMasteryEvent({
          level: unit.level,
          skill: 'writing',
          score: Math.max(0, Math.min(1, data.score / 100)),
          weight: 2,
        });
        if (!finishFired.current) {
          finishFired.current = true;
          award(Math.round(data.score / 10) + 5, false, 'writing');
        }
      }
      const corrections: Array<CorrectionChange & { errorType?: string; type?: string }> =
        data.changes || [];
      if (corrections.length > 0) {
        try {
          const wm = JSON.parse(localStorage.getItem('nh_writing_mistakes') || '[]');
          corrections.forEach((ch) => {
            wm.push({
              wrong: ch.original || '',
              correct: ch.corrected || '',
              type: ch.errorType || ch.type || 'other',
            });
          });
          localStorage.setItem('nh_writing_mistakes', JSON.stringify(wm.slice(-50)));
        } catch {
          /* storage unavailable */
        }
      }
      corrections.forEach((ch) => {
        const corr = (ch.corrected || '').trim();
        logError(ch.note || 'writing_error', 'grammar', {
          wrong: ch.original || '',
          correct: corr,
          source: 'writing_guided',
        });
        if (corr && !corr.includes(' ') && corr.length >= 2 && corr.length <= 30) {
          addWordToSRS(corr);
        }
      });
      applyWritingErrorsToAdaptive(corrections.map((ch) => ch.errorType));
    } catch (e) {
      if (!mountedRef.current) return;
      const isNetwork = !isOnline || e instanceof TypeError;
      const msg = e instanceof Error ? e.message : '';
      setError(
        isNetwork
          ? 'No connection — please reconnect to get AI feedback on your writing.'
          : msg || 'Something went wrong grading your writing. Please try again.',
      );
      // Self-heal: the user DID the work; a dead grader must not strand the session.
      signalSessionCompleteIfActive('writing_guided');
      setFailCount((c) => c + 1);
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }

  function continueWithoutFeedback() {
    // The writing is done — feedback is enrichment, never a gate. Award the
    // participation XP once (the score-based bonus needs a real score) and
    // leave; the session credit already fired in the failure path.
    if (!finishFired.current) {
      finishFired.current = true;
      award(5, false, 'writing');
    }
    // Idempotent with the failure path's self-heal; covers the offline route
    // where no submit ever ran.
    signalSessionCompleteIfActive('writing_guided');
    goBack();
  }

  const card: React.CSSProperties = {
    background: 'var(--card, #fff)',
    border: '1px solid var(--line, #e5e7eb)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  };

  return (
    <div className="scr-wrap">
      {H('📝 Guided Writing', `${unit.level} · ${unit.title}`, goBack)}

      {/* Stage dots */}
      <div
        style={{ display: 'flex', gap: 6, justifyContent: 'center', margin: '2px 0 14px' }}
        data-testid="gw-stages"
      >
        {(['study', 'frames', 'write'] as Stage[]).map((s) => (
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

      {stage === 'study' && (
        <>
          <div style={card} data-testid="gw-study">
            <div style={{ fontSize: 12, fontWeight: 800, color: '#6b7280', marginBottom: 6 }}>
              THE TASK
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{unit.prompt}</div>
            <div style={{ fontSize: 13, color: '#6b7280' }}>{unit.promptEn}</div>
          </div>
          <div style={card}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 800, color: '#6b7280' }}>STUDY THE MODEL</div>
              <button
                onClick={() => setShowEn((v) => !v)}
                data-testid="gw-toggle-en"
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
            <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
              {showEn ? unit.modelEn : unit.model}
            </p>
          </div>
          <div style={card}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#6b7280', marginBottom: 8 }}>
              WHAT TO STEAL FROM IT
            </div>
            {unit.structures.map((st, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <button
                  onClick={() => setOpenStructure(openStructure === i ? null : i)}
                  data-testid={`gw-structure-${i}`}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: openStructure === i ? '#fef2f2' : '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: 10,
                    padding: '10px 12px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: 14, fontWeight: 700 }}>„{st.hr}“</div>
                  <div style={{ fontSize: 12, color: '#6b7280' }}>{st.en}</div>
                  {openStructure === i && (
                    <div style={{ fontSize: 13, color: '#991b1b', marginTop: 6 }}>{st.why}</div>
                  )}
                </button>
              </div>
            ))}
          </div>
          <button
            className="b bp"
            onClick={() => setStage('frames')}
            data-testid="gw-to-frames"
            style={{ width: '100%', padding: '13px 0', fontSize: 15, fontWeight: 800 }}
          >
            Practice the patterns →
          </button>
        </>
      )}

      {stage === 'frames' && frame && (
        <>
          <div style={card} data-testid="gw-frame">
            <div style={{ fontSize: 12, fontWeight: 800, color: '#6b7280', marginBottom: 8 }}>
              COMPLETE THE SENTENCE ({frameIdx + 1}/{unit.frames.length})
            </div>
            <div style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 10 }}>
              {frame.before && <span>{frame.before} </span>}
              <input
                value={revealed ? frame.answer : frameInput}
                onChange={(e) => {
                  setFrameInput(e.target.value);
                  setFrameState('idle');
                }}
                disabled={frameState === 'right' || revealed}
                data-testid="gw-frame-input"
                autoCapitalize="none"
                autoCorrect="off"
                style={{
                  display: 'inline-block',
                  width: Math.max(80, frame.answer.length * 12),
                  border: 'none',
                  borderBottom: `2px solid ${
                    frameState === 'right' || revealed
                      ? '#16a34a'
                      : frameState === 'wrong'
                        ? '#dc2626'
                        : '#9ca3af'
                  }`,
                  background: 'transparent',
                  fontSize: 16,
                  textAlign: 'center',
                  outline: 'none',
                }}
              />
              <span> {frame.after}</span>
            </div>
            <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>💡 {frame.hint}</div>
            {frameState === 'right' || revealed ? (
              <button
                className="b bp"
                onClick={nextFrame}
                data-testid="gw-frame-next"
                style={{ width: '100%', padding: '11px 0', fontWeight: 800 }}
              >
                {frameIdx + 1 >= unit.frames.length ? 'Now write your own →' : 'Next →'}
              </button>
            ) : (
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  className="b bp"
                  onClick={checkFrame}
                  disabled={!frameInput.trim()}
                  data-testid="gw-frame-check"
                  style={{ flex: 1, padding: '11px 0', fontWeight: 800 }}
                >
                  Check
                </button>
                {misses >= 2 && (
                  <button
                    onClick={() => setRevealed(true)}
                    data-testid="gw-frame-reveal"
                    style={{
                      flex: 1,
                      border: '1px solid #d1d5db',
                      background: 'transparent',
                      borderRadius: 10,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Show answer
                  </button>
                )}
              </div>
            )}
            {frameState === 'wrong' && !revealed && (
              <div style={{ fontSize: 13, color: '#dc2626', marginTop: 8 }}>
                Not quite — check the hint and try again.
              </div>
            )}
            {(frameState === 'right' || revealed) && (
              <div style={{ fontSize: 13, color: '#16a34a', marginTop: 8 }}>
                {revealed ? `The answer: „${frame.answer}“ — say it once, then move on.` : 'Točno!'}
              </div>
            )}
          </div>
        </>
      )}

      {stage === 'write' && (
        <>
          {!result && (
            <>
              <div style={card}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#6b7280', marginBottom: 6 }}>
                  YOUR TURN
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{unit.prompt}</div>
                <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 10 }}>
                  {unit.promptEn}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {unit.connectives.map((c) => (
                    <button
                      key={c}
                      onClick={() => insertConnective(c)}
                      data-testid="gw-connective"
                      style={{
                        border: '1px solid #d1d5db',
                        background: '#f9fafb',
                        borderRadius: 12,
                        padding: '3px 10px',
                        fontSize: 13,
                        cursor: 'pointer',
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <textarea
                  ref={textRef}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Piši ovdje…"
                  data-testid="gw-text"
                  rows={7}
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
              </div>
              <div style={card} data-testid="gw-checklist">
                <div style={{ fontSize: 12, fontWeight: 800, color: '#6b7280', marginBottom: 8 }}>
                  CHECKLIST
                </div>
                {unit.checklist.map((item) => {
                  const done = checklistDone(item);
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
              {error && (
                <div
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
                  {error}
                </div>
              )}
              {loading ? (
                <AIProgressBar phase="Grading your writing…" />
              ) : (
                <>
                  {/* After a failed grading call — or offline with the writing
                      done — the way FORWARD is primary: feedback is enrichment,
                      never a gate (owner, 2026-08-19). */}
                  {(failCount > 0 || (!isOnline && wordCount >= unit.minWords)) && (
                    <button
                      className="b bp"
                      onClick={continueWithoutFeedback}
                      data-testid="gw-continue-anyway"
                      style={{
                        width: '100%',
                        padding: '13px 0',
                        fontSize: 15,
                        fontWeight: 800,
                        marginBottom: 8,
                      }}
                    >
                      Continue — your writing counts ✓
                    </button>
                  )}
                  <button
                    className={failCount > 0 ? 'b bs' : 'b bp'}
                    onClick={submit}
                    disabled={wordCount < unit.minWords || !isOnline}
                    data-testid="gw-submit"
                    style={{
                      width: '100%',
                      padding: '13px 0',
                      fontSize: 15,
                      fontWeight: failCount > 0 ? 700 : 800,
                      opacity: wordCount < unit.minWords || !isOnline ? 0.5 : 1,
                    }}
                  >
                    {isOnline
                      ? wordCount < unit.minWords
                        ? `Write ${unit.minWords - wordCount} more word${unit.minWords - wordCount === 1 ? '' : 's'}`
                        : failCount > 0
                          ? 'Try feedback again'
                          : 'Get feedback ✨'
                      : 'Reconnect to get feedback'}
                  </button>
                </>
              )}
            </>
          )}
          {result && (
            <div data-testid="gw-result">
              <div style={card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontSize: 26, fontWeight: 900 }}>
                    {typeof result.score === 'number' ? `${result.score}/100` : '—'}
                  </div>
                  <div style={{ fontSize: 13, color: '#6b7280', alignSelf: 'center' }}>
                    {result.level_demonstrated || ''}
                  </div>
                </div>
                {result.encouragement && (
                  <div style={{ fontSize: 14, color: '#374151' }}>{result.encouragement}</div>
                )}
              </div>
              {result.corrected_text && (
                <div style={card}>
                  <CorrectionDiff
                    originalText={submittedText}
                    correctedText={result.corrected_text}
                    changes={result.changes || []}
                  />
                </div>
              )}
              {(result.strengths?.length || result.improvements?.length) && (
                <div style={card}>
                  {(result.strengths || []).map((s, i) => (
                    <div key={`s${i}`} style={{ fontSize: 14, marginBottom: 4 }}>
                      💪 {s}
                    </div>
                  ))}
                  {(result.improvements || []).map((s, i) => (
                    <div key={`i${i}`} style={{ fontSize: 14, marginBottom: 4 }}>
                      🎯 {s}
                    </div>
                  ))}
                </div>
              )}
              <button
                className="b bp"
                onClick={goBack}
                data-testid="gw-done"
                style={{ width: '100%', padding: '13px 0', fontSize: 15, fontWeight: 800 }}
              >
                Done ✓
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
