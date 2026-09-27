import React, { useState, useRef, useEffect, useMemo } from 'react';
import { H } from '../../data';
import { AIProgressBar } from '../shared/SkeletonLoader';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { rnd } from '../../lib/random.js';
import { useStats } from '../../context/StatsContext';
import { levelledBank } from '../../lib/levelledBank';
import { getGenerationCefr } from '../../lib/cefrCertification';
import { logError } from '../../lib/learnerErrors.js';
import { applyWritingErrorsToAdaptive } from '../../lib/adaptiveFeedback.js';
import { _aiPost } from '../../lib/aiPost';
import { ttsFetch, blobToDataUrl, reportTtsPlaybackFailure } from '../../lib/audio.js';
import { getVoicePreference } from '../../lib/soundSettings.js';
import { markQuest } from '../../lib/quests.js';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import { addWordToSRS } from '../../lib/srs.js';
import { recordMasteryEvent } from '../../lib/masteryLedger';
import { getCurrentContentLevel } from '../../lib/cefrCertification';
import { classifyAiLimit, formatAiResetTime, BUDGET_PAUSE_EN } from '../../lib/aiLimit';
import { CorrectionDiff } from './CorrectionDiff';
import type { CorrectionChange } from './CorrectionDiff';
import { PROMPTS } from '../../data/writingPrompts';

interface WritingResult {
  score?: number;
  level_demonstrated?: string;
  corrected_text?: string;
  strengths?: string[];
  changes?: CorrectionChange[];
  encouragement?: string;
}

interface WritingScreenProps {
  goBack: () => void;
  award: (n: number, celebrate?: boolean, activityType?: string) => void;
}

// ── Word-count gate ───────────────────────────────────────────────────────────
export const MIN_WORDS = 30;
/**
 * The floor for a prompt at `level`. A1 is 20, the Guided Writing curriculum's own A1
 * floor; A2 and above keep 30, which already sits inside that curriculum's A2 range
 * (30–35). One flat 30 asked an A1 learner told to "name three things in your room",
 * in subject forms only, for more words than the GUIDED A1 units ask — so the only way
 * to finish was to pad (found walking a learner's day, 2026-09-27).
 */
export function minWordsFor(level: string | undefined): number {
  return level === 'A1' ? 20 : MIN_WORDS;
}

export function countWords(raw: string): number {
  return raw.trim().split(/\s+/).filter(Boolean).length;
}

export default function WritingScreen({ goBack, award }: WritingScreenProps) {
  const finishFired = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mountedRef = useRef(true);
  const { isOnline } = useOnlineStatus();
  const { stats, setStats, writeDelta, level: userLevel } = useStats();
  // The prompts carry a CEFR `level` (A1 4 · A2 5 · B1 6 · B2 5 · C1 4) that was
  // read ONLY to colour the badge beside them: the pick was a random index over
  // the whole bank, so an A2 learner drew a prompt above their level 15 times
  // in 20. This screen is the keyboard-only production fallback, so it is what
  // a mic-blocked learner gets at every level.
  // The A1 tier was authored 2026-09-23. Before it the bank had nothing at A1,
  // so `levelledBank`'s floor served the WHOLE bank there — the filter standing
  // down at the one level it protects. That was reachable: the pool gates this
  // screen at A2, but search reaches it ungated. `levelledBankFloor.test.ts`
  // now measures the floor for every bank at every level it can be reached at,
  // so a bank cannot silently lose its low tier again.
  const prompts = useMemo(() => levelledBank(PROMPTS, getGenerationCefr(stats)), [stats]);
  const [promptIdx, setPromptIdx] = useState(() => Math.floor(rnd() * prompts.length));
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [result, setResult] = useState<WritingResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState('guided'); // "guided" | "free"
  const [customTopic, setCustomTopic] = useState('');
  const [ttsLoading, setTtsLoading] = useState(false);

  const prompt = prompts[promptIdx] ?? prompts[0]!;
  const effectivePrompt =
    mode === 'free'
      ? {
          en: customTopic || 'Write freely in Croatian',
          hr: '',
          level: userLevel,
          focus: 'Free expression',
        }
      : prompt;

  const wordCount = countWords(text);
  const minWords = minWordsFor(
    mode === 'free' ? getGenerationCefr(stats) : (prompt.level as string | undefined),
  );

  async function checkWithAI() {
    if (!text.trim() || text.trim().length < 10) {
      setError('Please write at least a sentence or two in Croatian.');
      return;
    }
    if (text.length > 3000) {
      setError('Text too long. Please keep your writing under 3000 characters.');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);
    setSubmittedText(text);
    try {
      const res = await _aiPost('/api/correct', {
        mode: 'writeeval',
        prompt: effectivePrompt.en,
        text: text.trim(),
        params: { level: userLevel, writingPrompt: effectivePrompt.en },
      });
      if (!res.ok) {
        // Distinguish real server states from a dead connection. A 429 (daily AI
        // quota) or 5xx (AI service down) is NOT a connection problem, but the
        // catch below used to tell every failure "check your connection" — the
        // same misleading-error class fixed in DialogueSim. Throw a descriptive
        // message per status; the catch shows it verbatim for non-network errors.
        let errBody: Record<string, unknown> = {};
        try {
          errBody = await res.json();
        } catch {
          /* body not JSON — leave empty */
        }
        if (res.status === 401)
          throw new Error(
            'Sign in to get AI writing feedback. Tap the Profile tab to create a free account.',
          );
        // A 429 is either the per-minute burst limiter or the daily ceiling.
        // Treating both as the daily one sent learners away for the day after
        // submitting two pieces of writing in quick succession.
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
      const data = await res.json();
      if (!mountedRef.current) return;
      setResult(data);
      // A graded submission IS the finish for the daily session. Before this,
      // the ONLY completion signal was the award() behind the "✨ New Prompt"
      // button (result-gated + ≥30-words gated) — the natural gesture (read
      // feedback → Back) never fired it, permanently pinning the session at
      // N-1/N (reported 2026-07-16, B2 user, twice). That fix unblocked the
      // session and deliberately left XP/vs on the button — the same defect for
      // the credit, closed 2026-09-27: the effect on `result` below pays it.
      signalSessionCompleteIfActive('writing');
      // Phase 2 mastery ledger: a graded writing evaluation is strong written-
      // production evidence at the user's practice level (weight 2).
      if (typeof data.score === 'number') {
        recordMasteryEvent({
          level: getCurrentContentLevel(),
          skill: 'writing',
          score: Math.max(0, Math.min(1, data.score / 100)),
          weight: 2,
        });
      }
      // Log mistakes and add single-word corrections to SRS queue
      type ApiCorrection = CorrectionChange & { type?: string; errorType?: string };
      const corrections: ApiCorrection[] = data.changes || data.mistakes || [];
      // Grammar Diagnosis reads nh_writing_mistakes for its writing-error
      // analysis — nothing wrote it before, so that branch was always empty.
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
        } catch {}
      }
      corrections.forEach((ch: ApiCorrection) => {
        const orig = ch.original || '';
        const corr = (ch.corrected || '').trim();
        logError(
          ch.type || ch.note || 'writing_error',
          (ch.type || '').includes('grammar') ? 'grammar' : 'vocabulary',
          { wrong: orig, correct: corr, source: 'writing' },
        );
        // Single-word corrections → queue for spaced repetition
        if (corr && !corr.includes(' ') && corr.length >= 2 && corr.length <= 30) {
          addWordToSRS(corr);
        }
      });
      // Feedback loop 3b: map this submission's grammar error-types to adaptive
      // categories so the daily session targets them next.
      applyWritingErrorsToAdaptive(corrections.map((ch) => ch.errorType));
    } catch (e) {
      if (!mountedRef.current) return;
      // A genuine network failure rejects fetch with a TypeError (or we're
      // offline); anything else is a descriptive Error we threw above, so show
      // its message rather than a wrong "check your connection".
      const isNetwork = !isOnline || e instanceof TypeError;
      const msg = e instanceof Error ? e.message : '';
      setError(
        isNetwork
          ? !isOnline
            ? 'No connection — please reconnect to use AI feedback.'
            : 'Could not reach the AI correction service. Check your connection.'
          : msg || 'Something went wrong grading your writing. Please try again.',
      );
      // AI-failure self-heal: the user DID the writing; a dead /api/correct
      // must not strand the session (mirrors DictationScreen's empty-set signal).
      signalSessionCompleteIfActive('writing');
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }

  function newPrompt() {
    finishFired.current = false;
    setText('');
    setResult(null);
    setError('');
    setCustomTopic('');
    setPromptIdx(function (cur) {
      if (prompts.length < 2) return cur;
      const next = Math.floor(rnd() * (prompts.length - 1));
      return next >= cur ? next + 1 : next;
    });
  }

  // CREDIT ON REACHING THE GRADED RESULT, not on a button in it (2026-09-27). The
  // whole payment — XP, the write quest, the `writing` path key and, through award(),
  // the daily-session slot — used to sit in the results view's "✨ New Prompt" onClick.
  // A learner who wrote the piece, got it graded, read the feedback and tapped Back
  // (what "done" looks like) was paid nothing and left the session at N-1/N. The
  // creditFollowsWork guard could not see it because that button RESETS the screen
  // rather than navigating away; the effect on the learner is identical. Paid once per
  // graded piece that met its floor; `newPrompt()` re-arms it for a fresh prompt.
  const submittedWords = countWords(submittedText);
  useEffect(() => {
    if (!result || finishFired.current) return;
    if (minWords <= 0 || submittedWords < minWords) return;
    finishFired.current = true;
    markQuest('write');
    if (typeof award === 'function') {
      const sc = result.score ?? 0;
      award(sc > 0 ? Math.round(sc / 10) + 5 : 5, false, 'writing');
    }
    if (!stats.vs?.includes('writing')) {
      setStats((prev) => {
        if (prev.vs?.includes('writing')) return prev;
        return { ...prev, vs: [...(prev.vs || []), 'writing'] };
      });
      if (writeDelta) writeDelta({ vs: ['writing'] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  async function playTTS(ttsText: string) {
    setTtsLoading(true);
    try {
      const res = await ttsFetch({
        text: ttsText.slice(0, 400),
        slow: false,
        voice: getVoicePreference(),
      });
      if (!res || !res.ok) return;
      const blob = await res.blob();
      // Use base64 data URL — blob: URLs fail silently on some Android OEM WebViews
      const url = await blobToDataUrl(blob);
      if (!url) {
        reportTtsPlaybackFailure('filereader');
        return;
      }
      if (audioRef.current) audioRef.current.pause();
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.play().catch(() => {});
    } finally {
      if (mountedRef.current) setTtsLoading(false);
    }
  }

  return (
    <div className="scr-wrap">
      {H('✍️ Free Writing', 'Write in Croatian — get AI feedback', goBack)}

      {!isOnline && (
        <div
          style={{
            background: '#fef3c7',
            border: '1px solid #f59e0b',
            borderRadius: 10,
            padding: '12px 16px',
            marginBottom: 16,
            fontSize: 13,
            fontWeight: 600,
            color: '#92400e',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span>📡</span>
          <span>
            You're offline. AI features need an internet connection. Your progress is saved locally.
          </span>
        </div>
      )}

      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, padding: '0 2px' }}>
        <button
          onClick={() => setMode('guided')}
          style={{
            flex: 1,
            padding: '9px 0',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all .15s',
            background: mode === 'guided' ? '#7c3aed' : 'var(--card)',
            color: mode === 'guided' ? '#fff' : 'var(--subtext)',
            border: mode === 'guided' ? 'none' : '1.5px solid var(--card-b)',
          }}
        >
          📚 Guided Prompt
        </button>
        <button
          onClick={() => setMode('free')}
          style={{
            flex: 1,
            padding: '9px 0',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all .15s',
            background: mode === 'free' ? '#7c3aed' : 'var(--card)',
            color: mode === 'free' ? '#fff' : 'var(--subtext)',
            border: mode === 'free' ? 'none' : '1.5px solid var(--card-b)',
          }}
        >
          ✏️ Free Topic
        </button>
      </div>

      {/* Prompt card — guided mode only */}
      {mode === 'guided' && (
        <div className="c" style={{ padding: '20px', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 4 }}>
            <span style={{ fontSize: 20 }}>📝</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 6, flexWrap: 'wrap' }}>
                {prompt.level && (
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 20,
                      // The final arm is C1's violet, so a level with no arm of
                      // its own renders as C1 rather than as nothing — which is
                      // why A1 needed one the moment the A1 tier was authored.
                      background:
                        prompt.level === 'A1'
                          ? '#dbeafe'
                          : prompt.level === 'A2'
                            ? '#dcfce7'
                            : prompt.level === 'B1'
                              ? '#fef9c3'
                              : prompt.level === 'B2'
                                ? '#fef3c7'
                                : '#ede9fe',
                      color:
                        prompt.level === 'A1'
                          ? '#1e40af' // blue-800 on #dbeafe, 7.15:1 — measured, not estimated. The
                          : // arms below were re-measured with it: A2 6.49, B1 4.58,
                            // B2 4.51, C1 7.57. All clear AA; the two 4.5s clear it
                            // by a hair, so neither is a template for a new arm.
                            prompt.level === 'A2'
                            ? '#166534' // green-800 on #dcfce7 (~7.0:1); green-600 was 3.0:1, failed WCAG AA
                            : prompt.level === 'B1'
                              ? '#a16207'
                              : prompt.level === 'B2'
                                ? '#b45309'
                                : '#5b21b6', // violet-800 on #ede9fe (~7.6:1); violet-600 was ~4.5:1 borderline
                    }}
                  >
                    {prompt.level}
                  </span>
                )}
                {prompt.focus && (
                  <span
                    style={{
                      fontSize: 11,
                      color: 'var(--subtext)',
                      fontStyle: 'italic',
                      padding: '2px 0',
                    }}
                  >
                    📌 {prompt.focus}
                  </span>
                )}
              </div>
              <p style={{ fontWeight: 800, fontSize: 15, color: 'var(--heading)', margin: 0 }}>
                {prompt.en}
              </p>
              <p
                style={{ fontSize: 13, color: 'var(--subtext)', marginTop: 2, fontStyle: 'italic' }}
              >
                {prompt.hr}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom topic input — free mode only */}
      {mode === 'free' && (
        <div className="c" style={{ padding: '16px', marginBottom: 16 }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 13,
              color: 'var(--heading)',
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            What would you like to write about?
          </p>
          <input
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            placeholder="e.g. My last holiday, My job, My favourite food..."
            style={{
              width: '100%',
              padding: '10px 12px',
              fontSize: 14,
              border: '1.5px solid var(--card-b)',
              borderRadius: 10,
              fontFamily: "'Outfit',sans-serif",
              background: 'var(--card)',
              color: 'var(--heading)',
              boxSizing: 'border-box',
            }}
          />
          {customTopic && (
            <p
              style={{
                fontSize: 12,
                color: 'var(--subtext)',
                marginTop: 6,
                marginBottom: 0,
                fontStyle: 'italic',
              }}
            >
              You'll write in Croatian about:{' '}
              <strong style={{ color: 'var(--heading)' }}>{customTopic}</strong>
            </p>
          )}
        </div>
      )}

      <div className="c" style={{ padding: '16px' }}>
        <textarea
          data-testid="writing-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write in Croatian here... (Piši na hrvatskom...)"
          maxLength={3000}
          style={{
            width: '100%',
            minHeight: 140,
            padding: '12px',
            fontSize: 15,
            border: '1.5px solid var(--card-b)',
            borderRadius: 10,
            fontFamily: "'Outfit',sans-serif",
            resize: 'vertical',
            background: 'var(--card)',
            color: 'var(--heading)',
            boxSizing: 'border-box',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 4,
          }}
        >
          <span data-testid="word-count-label" style={{ fontSize: 12, color: 'var(--subtext)' }}>
            Word count: {wordCount} / {minWords}
            {wordCount > 0 && wordCount < minWords && (
              <span style={{ color: 'var(--ink-error)' }}> (aim for {minWords}+)</span>
            )}
            {wordCount >= minWords && wordCount < 80 && (
              <span style={{ color: 'var(--info)' }}> ✓ good start</span>
            )}
            {wordCount >= 80 && <span style={{ color: 'var(--ink-green)' }}> ✓ great length</span>}
          </span>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 12,
              color: 'var(--ink-mode)',
              fontWeight: 600,
            }}
            onClick={newPrompt}
          >
            🔄 New Prompt
          </button>
        </div>
        {error && <p style={{ color: 'var(--ink-error)', fontSize: 13, marginTop: 8 }}>{error}</p>}
        <div style={{ fontSize: 11, color: 'var(--subtext)', marginTop: 10, lineHeight: 1.5 }}>
          🔒 Your text is sent to an AI for grammar feedback. It is not stored or used for training.
        </div>
        <button
          data-testid="writing-submit"
          className="b bp"
          style={{
            width: '100%',
            marginTop: 8,
            transition: 'transform .15s ease,box-shadow .15s ease',
          }}
          onClick={checkWithAI}
          disabled={loading || !isOnline}
        >
          {!isOnline ? (
            '📶 Offline — AI check unavailable'
          ) : loading ? (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                fontSize: 'var(--text-sm)',
                color: 'inherit',
              }}
            >
              <span
                style={{
                  animation: 'spin .8s linear infinite',
                  display: 'inline-block',
                  lineHeight: 1,
                }}
              >
                ⟳
              </span>{' '}
              Checking your Croatian...
            </span>
          ) : (
            '🤖 Check with AI'
          )}
        </button>
      </div>

      {loading && !result && (
        <AIProgressBar
          phase="processing"
          messages={[
            'Reading your Croatian…',
            'Checking grammar…',
            'Finding improvements…',
            'Almost done…',
          ]}
        />
      )}

      {result && (
        <div className="c" style={{ padding: '20px', marginTop: 0, animation: 'fadeIn .3s ease' }}>
          {/* Score header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ fontSize: 40 }}>
              {(result.score ?? 0) >= 80 ? '🌟' : (result.score ?? 0) >= 60 ? '🎉' : '💪'}
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: 18, color: 'var(--heading)', margin: 0 }}>
                Score: {result.score}/100
              </p>
              <p style={{ fontSize: 13, color: 'var(--subtext)', margin: '2px 0 0' }}>
                {result.level_demonstrated}
              </p>
            </div>
          </div>

          {/* Corrected text with TTS button */}
          {result.corrected_text && (
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--info)', marginBottom: 8 }}>
                ✅ Suggested version:
              </p>
              <div
                style={{
                  background: 'var(--info-bg)',
                  border: '1.5px solid var(--info-b)',
                  borderRadius: 10,
                  padding: '12px 14px',
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--heading)',
                }}
              >
                {result.corrected_text}
              </div>
              <button
                style={{
                  background: 'none',
                  border: '1.5px solid var(--info)',
                  borderRadius: 20,
                  padding: '6px 14px',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 700,
                  color: 'var(--info)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 8,
                }}
                onClick={() => playTTS(result.corrected_text ?? '')}
                disabled={ttsLoading}
              >
                <span aria-hidden="true">{ttsLoading ? '⟳' : '🔊'}</span>{' '}
                {ttsLoading ? 'Loading...' : 'Hear corrected version'}
              </button>
            </div>
          )}

          {/* Strengths */}
          {result.strengths && result.strengths.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: 'var(--ink-green)',
                  marginBottom: 8,
                }}
              >
                ✅ What you did well:
              </p>
              {result.strengths.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 8,
                    padding: '8px 10px',
                    background: 'var(--success-bg)',
                    borderRadius: 8,
                    marginBottom: 6,
                    fontSize: 13,
                  }}
                >
                  <span>⭐</span>
                  <span style={{ color: 'var(--heading)' }}>{s}</span>
                </div>
              ))}
            </div>
          )}

          {result.corrected_text && (
            <CorrectionDiff
              originalText={submittedText}
              correctedText={result.corrected_text}
              changes={result.changes ?? []}
            />
          )}

          {/* Encouragement */}
          {result.encouragement && (
            <div
              style={{
                background: 'var(--success-bg)',
                border: '1.5px solid var(--success-b)',
                borderRadius: 10,
                padding: '12px 14px',
                fontSize: 13,
                color: 'var(--ink-green)',
                fontWeight: 600,
              }}
            >
              💬 {result.encouragement}
            </div>
          )}

          {submittedWords < minWords && (
            <p
              data-testid="word-count-warning"
              style={{
                color: 'var(--ink-error)',
                fontSize: 13,
                marginTop: 12,
                marginBottom: 0,
                textAlign: 'center',
              }}
            >
              This piece had {submittedWords} words — write at least {minWords} to have it count.
            </p>
          )}
          <button
            data-testid="new-prompt-btn"
            className="b bp"
            style={{ width: '100%', marginTop: 16 }}
            onClick={newPrompt}
          >
            ✨ New Prompt
          </button>
        </div>
      )}
    </div>
  );
}
