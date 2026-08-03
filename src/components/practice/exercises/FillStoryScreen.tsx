import React, { useRef, useState } from 'react';
import { H, sh } from '../../../data';
import { FILL_STORIES } from '../../../data';
import { completeExercise } from '../../../hooks/useExerciseCompletion';
import { useStats } from '../../../context/StatsContext';

interface Props {
  goBack: () => void;
  award: (n: number, celebrate?: boolean, activityType?: string) => void;
}

function FillStoryScreen({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const total = FILL_STORIES.reduce(function (sum, story) {
    return sum + story.story.length;
  }, 0);
  const handledRef = useRef(new Set<number>());
  const correctCountRef = useRef(0);
  const finishFired = useRef(false);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);
  const [choices, setChoices] = useState<Record<number, string>>({});
  const storyOffsets = React.useMemo(() => {
    const offsets: number[] = [];
    let offset = 0;
    FILL_STORIES.forEach((story) => {
      offsets.push(offset);
      offset += (story.story as unknown[]).length;
    });
    return offsets;
  }, []);
  const shuffledOpts = React.useMemo(() => {
    const result: string[][] = [];
    FILL_STORIES.forEach((story) => {
      (story.story as { opts: string[] }[]).forEach((s) => result.push(sh([...s.opts])));
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

  function handleAnswer(flatIdx: number, chosenOption: string, correctAnswer: string) {
    if (handledRef.current.has(flatIdx)) return;
    handledRef.current.add(flatIdx);
    setChoices((prev) => ({ ...prev, [flatIdx]: chosenOption }));
    const isCorrect = chosenOption === correctAnswer;
    if (isCorrect) {
      correctCountRef.current++;
    }
    if (handledRef.current.size >= total && !finishFired.current) {
      finishFired.current = true;
      // `fill-story` is registered `gated`, but this screen credited gc — and paid the
      // whole score-scaled award — as soon as every question was ANSWERED.
      // correctCountRef only ever reached the results panel. The single completion
      // authority applies the declared 75% gate to both, and adds the daily-session
      // signals this screen never sent.
      const res = completeExercise({
        key: 'fill-story',
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
      {H('📝 Story Builder', 'Read and fill the blanks', goBack)}
      {FILL_STORIES.map(function (story, si) {
        return (
          <div key={si} className="c" style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#164e63', marginBottom: 10 }}>
              {'📖 '}
              {story.title}
            </div>
            {story.story.map(function (s, qi) {
              const flatIdx = (storyOffsets[si] ?? 0) + qi;
              const chosen = choices[flatIdx];
              return (
                <div key={qi} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 13, color: '#44403c', marginBottom: 4 }}>
                    {s.text.replace('_____', '______')}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 6,
                      flexWrap: 'wrap',
                      pointerEvents: chosen !== undefined ? 'none' : 'auto',
                    }}
                  >
                    {(shuffledOpts[flatIdx] ?? []).map(function (o, oi) {
                      return (
                        <button
                          key={oi}
                          style={{
                            padding: '6px 12px',
                            border: `2px solid ${chosen === undefined ? '#d6d3d1' : chosen === o ? (o === s.blank ? '#16a34a' : '#dc2626') : '#d6d3d1'}`,
                            borderRadius: 10,
                            background:
                              chosen === undefined
                                ? 'white'
                                : chosen === o
                                  ? o === s.blank
                                    ? '#dcfce7'
                                    : '#fee2e2'
                                  : 'white',
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: chosen !== undefined ? 'default' : 'pointer',
                            pointerEvents: chosen !== undefined ? 'none' : 'auto',
                          }}
                          onClick={function () {
                            handleAnswer(flatIdx, o, s.blank);
                          }}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                  <div style={{ fontSize: 11, color: '#a8a29e', marginTop: 2 }}>{s.en}</div>
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

export default FillStoryScreen;
