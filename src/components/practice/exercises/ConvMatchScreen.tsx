import React, { useRef, useState } from 'react';
import { H, speak, sh } from '../../../data';
import { CONVMATCH } from '../../../data';
import { completeExercise } from '../../../hooks/useExerciseCompletion';
import { useStats } from '../../../context/StatsContext';

interface Props {
  goBack: () => void;
  award: (n: number, celebrate?: boolean, activityType?: string) => void;
}

function ConvMatchScreen({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const total = CONVMATCH.reduce(function (sum, conv) {
    return sum + conv.pairs.length;
  }, 0);
  const handledRef = useRef(new Set<number>());
  const correctCountRef = useRef(0);
  const finishFired = useRef(false);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);
  const [choices, setChoices] = useState<Record<number, string>>({});
  const pairOffsets = React.useMemo(() => {
    const offsets: number[] = [];
    let offset = 0;
    CONVMATCH.forEach((conv) => {
      offsets.push(offset);
      offset += (conv.pairs as unknown[]).length;
    });
    return offsets;
  }, []);
  const shuffledOpts = React.useMemo(() => {
    const result: string[][] = [];
    CONVMATCH.forEach((conv) => {
      (conv.pairs as { q: string; a: string; wrong: string }[]).forEach((p) =>
        result.push(sh([p.a, p.wrong])),
      );
    });
    return result;
  }, []);

  function retry() {
    handledRef.current = new Set<number>();
    correctCountRef.current = 0;
    finishFired.current = false;
    setChoices({});
    setPassed(false);
    setDone(false);
  }

  function handleAnswer(
    flatIdx: number,
    chosenOption: string,
    correctAnswer: string,
    spoken: string,
  ) {
    if (handledRef.current.has(flatIdx)) return;
    handledRef.current.add(flatIdx);
    setChoices((prev) => ({ ...prev, [flatIdx]: chosenOption }));
    const isCorrect = chosenOption === correctAnswer;
    if (isCorrect) {
      correctCountRef.current++;
      speak(spoken);
    }
    if (handledRef.current.size >= total && !finishFired.current) {
      finishFired.current = true;
      // `conv-match` is registered `gated`, but this screen credited gc — and paid the
      // whole score-scaled award — as soon as every question was ANSWERED.
      // correctCountRef only ever reached the results panel. The single completion
      // authority applies the declared 75% gate to both, and adds the daily-session
      // signals this screen never sent.
      const res = completeExercise({
        key: 'conv-match',
        score: correctCountRef.current,
        total: total,
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
      {H('💬 Conversation Match', 'Pick the right response', goBack)}
      {CONVMATCH.map(function (conv, ci) {
        return (
          <div key={ci} className="c" style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#164e63', marginBottom: 10 }}>
              {'🗣️ '}
              {conv.title}
            </div>
            {conv.pairs.map(function (p, pi) {
              const flatIdx = (pairOffsets[ci] ?? 0) + pi;
              const chosen = choices[flatIdx];
              return (
                <div
                  key={pi}
                  style={{
                    marginBottom: 12,
                    paddingBottom: 12,
                    borderBottom: pi < conv.pairs.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#164e63',
                      marginBottom: 6,
                      cursor: 'pointer',
                    }}
                    onClick={function () {
                      speak(p.q);
                    }}
                  >
                    {'🗣️ '}
                    {p.q}
                  </div>
                  <div style={{ pointerEvents: chosen !== undefined ? 'none' : 'auto' }}>
                    {(shuffledOpts[flatIdx] ?? []).map(function (o, oi) {
                      return (
                        <button
                          key={oi}
                          style={{
                            display: 'block',
                            width: '100%',
                            padding: '8px 12px',
                            marginBottom: 4,
                            border: `2px solid ${chosen === undefined ? '#e7e5e4' : chosen === o ? (o === p.a ? '#16a34a' : '#dc2626') : '#e7e5e4'}`,
                            borderRadius: 10,
                            background:
                              chosen === undefined
                                ? 'white'
                                : chosen === o
                                  ? o === p.a
                                    ? '#dcfce7'
                                    : '#fee2e2'
                                  : 'white',
                            fontSize: 12,
                            textAlign: 'left',
                            cursor: chosen !== undefined ? 'default' : 'pointer',
                            pointerEvents: chosen !== undefined ? 'none' : 'auto',
                          }}
                          onClick={function () {
                            handleAnswer(flatIdx, o, p.a, p.a);
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
          </div>
        );
      })}
      {done && (
        <div className="c" style={{ marginTop: 16, padding: '20px 16px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>
            {correctCountRef.current / total >= 0.8
              ? '🏆'
              : correctCountRef.current / total >= 0.6
                ? '⭐'
                : '💪'}
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#164e63', marginBottom: 4 }}>
            {correctCountRef.current}/{total} correct
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

export default ConvMatchScreen;
