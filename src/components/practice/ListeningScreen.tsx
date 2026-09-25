import React, { useState, useRef, useEffect } from 'react';
import { Bar, sh } from '../../data';
import { useHeardGate } from '../../hooks/useHeardGate';
import AudioFailureNotice from '../shared/AudioFailureNotice';
import PassGateNotice from '../shared/PassGateNotice';
import { passedLesson } from '../../lib/lessonGate';
import ScreenHeader from '../shared/ScreenHeader';
import { markQuest } from '../../lib/quests.js';
import { recordExerciseOutcome } from '../../lib/masteryLedger';
import { knightSpeak } from '../../lib/knightSpeak.js';
import { useStats } from '../../context/StatsContext.tsx';
import { recordTopicResult } from '../../lib/adaptive.js';

const LISTENING_TIPS = [
  {
    mood: 'thinking',
    text: 'Close your eyes and let the Croatian sounds wash over you. Meaning before words. 🎧',
  },
  {
    mood: 'encouraging',
    text: "Real listening means catching the meaning, not every syllable. Don't panic — focus on what you know. 🌊",
  },
  {
    mood: 'happy',
    text: "Croatian is perfectly phonetic — once you know the sounds, every sentence you've ever heard clicks. 🔑",
  },
  {
    mood: 'ready',
    text: 'Listen twice if you need to. The slow button is your friend, not a cheat. ⚔️',
  },
];

export default function ListeningScreen({
  questions,
  goBack,
  award,
}: {
  questions: any[];
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}) {
  const { stats, setStats, writeDelta } = useStats();
  const finishFired = useRef(false);
  const [idx, setIdx] = useState(0);

  // Knight coaching — entry tip on mount
  useEffect(() => {
    const tip = LISTENING_TIPS[Math.floor(Math.random() * LISTENING_TIPS.length)];
    if (tip) knightSpeak(tip.mood, tip.text, 900);
  }, []);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [options, setOptions] = useState(() => (questions.length > 0 ? sh(questions[0].opts) : []));
  const [replayed, setReplayed] = useState(false);
  // Heard gate (2026-09-06): the audio IS the question here — nothing is
  // answerable, skippable or scored until the sentence has actually played.
  // An unplayable item is skipped WITHOUT scoring (it never counted).
  const gate = useHeardGate();
  const [skipped, setSkipped] = useState(0);

  const total = questions.length;
  const answeredTotal = total - skipped;

  // Credit on REACHING the passed results view, not on acknowledging it. The TabBar is
  // mounted on every screen, so "Finish!" was one exit of two and the ONLY one that
  // paid — while the view prints "+N XP" it had not yet credited. A learner who
  // answered every sentence and tapped a tab got no XP, no `lc`, no `vs`, no quest
  // mark and no ledger write.
  //
  // Both extra conditions are load-bearing, not defensive: `answeredTotal > 0` keeps
  // the all-skipped case (its own screen below) crediting nothing — "never credit work
  // the learner could not do", NEVER-DO 14 — and it stops 0 >= 0 firing on mount; and
  // the pass gate keeps the failed round crediting nothing, which is what the
  // PassGateNotice branch below exists to render.
  useEffect(() => {
    if (idx < total || answeredTotal === 0 || finishFired.current) return;
    if (!passedLesson(score, answeredTotal)) return;
    finishFired.current = true;
    // `listening`, not `speak` — this screen awards activityType 'listening' and
    // credits vs:['listening']. It was the last pair of screens left behind by the
    // 2026-08-14 move off the speak mislabel.
    markQuest('listening');
    if (typeof award === 'function') award(score * 4 + 10, false, 'listening');
    // THE MASTERY LEDGER SAW NONE OF THIS UNTIL 2026-09-23. `award` reaches the XP and
    // quest path only, so the app's only dedicated Listening Quiz — one of its two
    // AUDIO-FIRST screens — recorded its result to the ADAPTIVE store (handleAnswer's
    // per-answer recordTopicResult) and not to the ledger the recommender reads.
    recordExerciseOutcome({ activityType: 'listening', score, total: answeredTotal });
    if (!stats.vs?.includes('listening')) {
      setStats((prev) => {
        if (prev.vs?.includes('listening')) return prev;
        return { ...prev, lc: (prev.lc || 0) + 1, vs: [...(prev.vs || []), 'listening'] };
      });
      if (writeDelta) writeDelta({ lc: 1, vs: ['listening'] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, total, answeredTotal, score]);

  if (idx >= total && answeredTotal === 0)
    return (
      <div className="scr-wrap">
        <div style={{ textAlign: 'center', paddingTop: 40 }} data-testid="listening-no-audio">
          <div style={{ fontSize: 64, marginBottom: 8 }}>🔇</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: '#164e63', marginBottom: 4 }}>
            No audio today
          </h2>
          <div style={{ fontSize: 13, color: '#78716c', marginBottom: 16 }}>
            None of the sentences could be played, so nothing was scored and nothing was credited.
            Come back when audio is working.
          </div>
          <button className="b bp" style={{ width: '100%' }} onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    );

  // Gate credit on the SHARED threshold (owner decision, 2026-09-16). This
  // screen wrote vs:['listening'] — the ckRule key for its LEARN_PATH node —
  // plus lc + 1 and XP on the Finish button, with no reference to the score, so
  // 0 of 8 still completed the node and still paid 10 XP. `listening` is NOT in
  // BLACK_HOLE_SCREENS, so unlike the dwell-credited screens there was no design
  // intent behind that; the score was display-only. The rule is
  // `completeExercise`'s, not a new one: on a fail NOTHING is recorded.
  // `answeredTotal` is the denominator on purpose — a skipped-unheard item
  // leaves it (the audio directive), so a learner is never judged on a sentence
  // that would not play.
  const passed = passedLesson(score, answeredTotal);

  if (idx >= total && !passed)
    return (
      <div className="scr-wrap">
        <div style={{ paddingTop: 40 }}>
          <PassGateNotice
            score={score}
            total={answeredTotal}
            hint="Focus on the first word of each sentence."
            onRetry={() => {
              setIdx(0);
              setScore(0);
              setSkipped(0);
              setAnswered(false);
              setSelected(-1);
              setReplayed(false);
              gate.reset();
              setOptions(questions[0] ? sh(questions[0].opts) : []);
            }}
            onLeave={goBack}
          />
        </div>
      </div>
    );

  if (idx >= total)
    return (
      <div className="scr-wrap">
        <div style={{ textAlign: 'center', paddingTop: 40 }}>
          <div style={{ fontSize: 64, marginBottom: 8 }}>
            {passed ? '🏆' : score >= answeredTotal * 0.6 ? '⭐' : '💪'}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: '#164e63', marginBottom: 4 }}>
            Listening Complete!
          </h2>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#0e7490', marginBottom: 4 }}>
            {score} / {answeredTotal}
          </div>
          <div style={{ fontSize: 13, color: '#78716c', marginBottom: 16 }}>
            {score === answeredTotal
              ? 'Perfect ear! You caught every sentence.'
              : score >= Math.ceil(answeredTotal * 0.7)
                ? 'Great listening! Keep it up.'
                : 'Try again — focus on the first word of each sentence.'}
          </div>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#d97706', marginBottom: 20 }}>
            +{score * 4 + 10} XP
          </div>
          <button className="b bp" style={{ width: '100%' }} onClick={goBack}>
            Finish!
          </button>
        </div>
      </div>
    );

  const q = questions[idx];
  if (!q) return null;
  const correct = q.en;
  const isCorrect = options[selected] === correct;

  function handleAnswer(oi: number) {
    if (answered || !gate.heard) return;
    setSelected(oi);
    setAnswered(true);
    const _correct = options[oi] === correct;
    if (_correct) setScore((s) => s + 1);
    recordTopicResult('listening', _correct);
    // NOTE: auto-play removed — iOS Safari blocks speechSynthesis outside direct user gesture.
    // The "🔊 Listen again" button below lets users replay with a direct tap.
  }

  function next() {
    if (idx < total - 1) {
      const n = questions[idx + 1];
      setOptions(n && Array.isArray(n.opts) ? sh(n.opts) : []);
      setIdx((i) => i + 1);
      setAnswered(false);
      setSelected(-1);
      setReplayed(false);
    } else {
      setIdx(total);
    }
    gate.reset();
  }

  // The recording could not be played: move on without scoring the item.
  function skipUnheard() {
    setSkipped((n) => n + 1);
    next();
  }

  return (
    <div className={answered ? 'scr-wrap has-cta' : 'scr-wrap'}>
      <ScreenHeader title="🎧 Listening" goBack={goBack} pill={`${idx + 1}/${total}`} />
      <Bar v={idx + 1} mx={total} h={6} />

      {/* Audio controls */}
      <div className="c" style={{ marginTop: 16, textAlign: 'center', padding: '20px 16px' }}>
        <div style={{ fontSize: 13, color: '#78716c', marginBottom: 12 }}>
          Listen carefully, then choose what the sentence means:
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button
            aria-label="Play sentence audio"
            data-testid="listening-play"
            data-audio-status={gate.status}
            className="b bp"
            style={{ fontSize: 16, padding: '14px 24px' }}
            onClick={() => {
              void gate.play(q.hr);
            }}
          >
            <span aria-hidden="true">🔊</span>{' '}
            {gate.status === 'playing' ? 'Playing…' : gate.heard ? 'Play again' : 'Play'}
          </button>
          <button
            aria-label="Play sentence slowly"
            data-testid="listening-play-slow"
            className="b bg"
            style={{ fontSize: 13, padding: '14px 16px' }}
            onClick={() => {
              void gate.playSlow(q.hr);
            }}
          >
            <span aria-hidden="true">🐢</span> Slow
          </button>
        </div>
        {gate.status === 'idle' && (
          <div
            data-testid="listening-hint"
            style={{ fontSize: 12, color: '#78716c', marginTop: 10 }}
          >
            Play the sentence to unlock the answers.
          </div>
        )}
        {gate.status === 'failed' && (
          <AudioFailureNotice
            testId="listening-audio-failed"
            failure={gate.failure}
            onRetry={() => {
              void gate.play(q.hr);
            }}
            onSkip={skipUnheard}
          />
        )}
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
        {options.map((o, oi) => (
          <button
            key={oi}
            className={
              'ob ' + (answered ? (o === correct ? 'ok' : selected === oi ? 'no' : '') : '')
            }
            disabled={!gate.heard}
            aria-disabled={!gate.heard}
            onClick={() => handleAnswer(oi)}
          >
            {o}
          </button>
        ))}
      </div>

      {/* Post-answer: show the Croatian + explanation */}
      {answered && (
        <div
          style={{
            marginTop: 12,
            padding: '12px 16px',
            borderRadius: 12,
            background: isCorrect ? 'rgba(22,163,74,.07)' : 'rgba(220,38,38,.06)',
            border: `1px solid ${isCorrect ? 'rgba(22,163,74,.2)' : 'rgba(220,38,38,.15)'}`,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: isCorrect ? '#15803d' : '#b91c1c',
              marginBottom: 6,
            }}
          >
            {isCorrect ? '✓ Correct!' : '✗ The answer was: ' + correct}
          </div>
          {/* Show the Croatian sentence so brain connects sound → meaning */}
          <div style={{ fontSize: 13, color: '#44403c', marginBottom: 4 }}>
            <span style={{ fontWeight: 700, color: '#0e7490' }}>🇭🇷 </span>
            {q.hr}
          </div>
          <div style={{ fontSize: 12, color: '#78716c' }}>
            <span style={{ fontWeight: 700 }}>🇬🇧 </span>
            {correct}
          </div>
          {q.tip && (
            <div
              style={{
                fontSize: 11,
                color: '#b45309',
                marginTop: 6,
                padding: '6px 10px',
                background: 'rgba(245,158,11,.08)',
                borderRadius: 8,
              }}
            >
              💡 {q.tip}
            </div>
          )}
          <button
            aria-label="Listen to sentence again"
            onClick={() => {
              void gate.play(q.hr);
              setReplayed(true);
            }}
            style={{
              marginTop: 8,
              padding: '8px 14px',
              fontSize: 12,
              fontWeight: 700,
              background: 'rgba(14,116,144,.1)',
              border: '1px solid rgba(14,116,144,.25)',
              borderRadius: 8,
              color: '#0e7490',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            🔊 Listen again
          </button>
          {replayed && !isCorrect && (
            <div style={{ fontSize: 11, color: '#0e7490', marginTop: 4 }}>
              Focus on the sound — then tap Next when ready
            </div>
          )}
        </div>
      )}

      {answered && (
        <div className="cta-bar">
          <button className="b bp" onClick={next}>
            {idx < total - 1 ? 'Next →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}
