import React, { useRef, useState } from 'react';
import { H, speak } from '../../../data';
import { FUTURE } from '../../../data';
import { completeExercise } from '../../../hooks/useExerciseCompletion';
import { recordTopicResult } from '../../../lib/adaptive.js';
import { rnd } from '../../../lib/random.js';
import { useStats } from '../../../context/StatsContext';

interface Props {
  goBack: () => void;
  award: (n: number, celebrate?: boolean, activityType?: string) => void;
}

// Fresh Fisher-Yates shuffle (crypto-seeded rnd) — a NEW order on every mount.
// Replaces the former shMemo('fq', …), whose module-level cache froze the
// question + option order for the whole app session (the future-tense replay bug).
function shLocal<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}

function FutureTenseScreen({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  // Shuffled fresh per mount; options shuffled once per mount, aligned to questions.
  const [questions] = useState<Array<{ q: string; opts: string[]; a: string }>>(() =>
    shLocal(FUTURE.quiz as Array<{ q: string; opts: string[]; a: string }>),
  );
  const [optsByQ] = useState<string[][]>(() => questions.map((q) => shLocal(q.opts)));
  const handledRef = useRef(new Set<number>());
  const finishFired = useRef(false);
  const correctCountRef = useRef(0);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);
  const [choices, setChoices] = useState<Record<number, string>>({});

  function retry() {
    handledRef.current = new Set<number>();
    correctCountRef.current = 0;
    finishFired.current = false;
    setChoices({});
    setPassed(false);
    setDone(false);
  }

  function handleAnswer(qi: number, chosenOption: string, correctAnswer: string, spoken: string) {
    if (handledRef.current.has(qi)) return;
    handledRef.current.add(qi);

    const isCorrect = chosenOption === correctAnswer;
    setChoices((prev) => ({ ...prev, [qi]: chosenOption }));

    recordTopicResult('future_tense', isCorrect);

    if (isCorrect) {
      correctCountRef.current++;
      if (typeof award === 'function') award(3, false, 'grammar');
      speak(spoken);
    }

    if (handledRef.current.size >= questions.length && !finishFired.current) {
      finishFired.current = true;
      // `future-tense` is registered `gated`, but this screen credited gc — and paid the
      // whole score-scaled award — as soon as every question was ANSWERED.
      // correctCountRef only ever reached the results panel. The single completion
      // authority applies the declared 75% gate to both, and adds the daily-session
      // signals this screen never sent.
      const res = completeExercise({
        key: 'future-tense',
        score: correctCountRef.current,
        total: questions.length,
        xp: correctCountRef.current * 5,
        // The score-scaled bonus has always been paid on every completed run.
        awardOnReplay: true,
        stats,
        setStats,
        writeDelta,
        award,
      });
      setPassed(res.passed);
      setDone(true);
    }
  }

  return (
    <div className="scr-wrap">
      {H('🚀 Future Tense', 'ću, ćeš, će, ćemo, ćete, će + infinitive', goBack)}
      <div
        className="c"
        style={{
          marginBottom: 16,
          padding: '12px',
          background: 'rgba(14,116,144,.06)',
          fontSize: 13,
        }}
      >
        {FUTURE.intro}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 20 }}>
        {['ja ću', 'ti ćeš', 'on/ona će', 'mi ćemo', 'vi ćete', 'oni/one će'].map(function (f, i) {
          return (
            <button
              key={i}
              className="c"
              style={{ textAlign: 'center', padding: '8px' }}
              onClick={function () {
                speak(f);
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 800, color: '#0e7490' }}>{f}</div>
            </button>
          );
        })}
      </div>
      <h3 className="sh">🎯 Fill the Blank</h3>
      {questions.map(function (q: { q: string; opts: string[]; a: string }, qi: number) {
        return (
          <div key={qi} className="c" style={{ marginBottom: 8, padding: '10px 14px' }}>
            <div
              data-testid="ftq-prompt"
              style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}
            >
              {q.q}
            </div>
            <div
              style={{
                display: 'flex',
                gap: 6,
                pointerEvents: choices[qi] !== undefined ? 'none' : 'auto',
              }}
            >
              {(optsByQ[qi] ?? q.opts).map(function (o: string, oi: number) {
                const spoken = q.q.replace('_____', q.a).split('(')[0] ?? q.q;
                return (
                  <button
                    key={oi}
                    style={{
                      padding: '6px 14px',
                      border: `2px solid ${choices[qi] === undefined ? '#d6d3d1' : choices[qi] === o ? (o === q.a ? '#16a34a' : '#dc2626') : '#d6d3d1'}`,
                      borderRadius: 10,
                      background:
                        choices[qi] === undefined
                          ? 'white'
                          : choices[qi] === o
                            ? o === q.a
                              ? '#dcfce7'
                              : '#fee2e2'
                            : 'white',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: choices[qi] !== undefined ? 'default' : 'pointer',
                      pointerEvents: choices[qi] !== undefined ? 'none' : 'auto',
                    }}
                    onClick={function () {
                      handleAnswer(qi, o, q.a, spoken);
                    }}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      {done && (
        <div className="c" style={{ marginTop: 16, padding: '20px 16px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>
            {correctCountRef.current / questions.length >= 0.8
              ? '🏆'
              : correctCountRef.current / questions.length >= 0.6
                ? '⭐'
                : '💪'}
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#164e63', marginBottom: 4 }}>
            {correctCountRef.current}/{questions.length} correct
          </div>
          {!passed && (
            <button
              className="b bp"
              data-testid="drill-retry"
              style={{ width: '100%', marginTop: 12 }}
              onClick={retry}
            >
              🔁 Try again (need 75%)
            </button>
          )}
          <button className="b bp" style={{ marginTop: 12 }} onClick={goBack}>
            ✓ Done
          </button>
        </div>
      )}
    </div>
  );
}

export default FutureTenseScreen;
