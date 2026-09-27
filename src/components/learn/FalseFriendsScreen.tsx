import React, { useEffect, useRef, useState } from 'react';
import { H, speak } from '../../data';
import { FALSEFR } from '../../data';
import { useStats } from '../../context/StatsContext.tsx';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import { DWELL_MS } from '../../lib/dwellCredit';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

// A READING LIST IS FINISHED WHEN IT HAS BEEN READ TO THE END (2026-09-27). Its only
// credit used to be a "Complete Lesson +30 XP" button that ALSO left the screen, so a
// learner who read every entry and tapped Back got nothing — and, launched from Today's
// Session, left the slot stranded at N-1/N. The same button paid 30 XP on every visit,
// because its once-only guard was a per-mount ref. Now reaching the end of the list
// credits, through the completion authority (session signal, the vocab quest once per
// exercise, `lc` + `vs` and the XP once ever), and the button only confirms it.
// Reaching the end also needs DWELL_MS on the screen — the app's own measure of a read
// page — because on a tall display the whole list fits and "the end is visible" would
// otherwise be true the instant the screen opens.
function FalseFriendsScreen({ goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const alreadyRead = !!stats.vs?.includes('falsefr');
  const [finished, setFinished] = useState(false);
  const finishFired = useRef(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  function finish() {
    if (finishFired.current) return;
    finishFired.current = true;
    completeExercise({
      key: 'falsefr',
      xp: 30,
      questKind: 'vocab',
      activityType: 'vocabulary',
      stats,
      setStats,
      writeDelta,
      award,
    });
    setFinished(true);
  }
  const finishRef = useRef(finish);
  finishRef.current = finish;

  useEffect(() => {
    const el = endRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    let reachedEnd = false;
    let dwelled = false;
    const maybeFinish = () => {
      if (reachedEnd && dwelled) finishRef.current();
    };
    const timer = setTimeout(() => {
      dwelled = true;
      maybeFinish();
    }, DWELL_MS);
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        reachedEnd = true;
        maybeFinish();
      }
    });
    io.observe(el);
    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  return (
    <div className="scr-wrap">
      {H('⚠️ False Friends', 'Croatian words that trick English speakers', goBack)}
      {FALSEFR.map(function (f, i) {
        return (
          <button
            key={i}
            aria-label={`Play audio for ${f.hr}`}
            className="c"
            style={{ marginBottom: 10 }}
            onClick={function () {
              speak(f.hr);
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--error)' }}>
                {f.hr} <span aria-hidden="true">🔊</span>
              </span>
              <span style={{ fontSize: 14, color: 'var(--ink-muted-warm)' }}>
                {'Looks like: '}
                {f.looks}
              </span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--success)', marginTop: 4 }}>
              {'Actually means: '}
              {f.means}
            </div>
            {f.ex && (
              <div
                style={{ fontSize: 12, color: 'var(--subtext)', fontStyle: 'italic', marginTop: 2 }}
              >
                {f.ex}
              </div>
            )}
          </button>
        );
      })}

      <div ref={endRef} data-testid="falsefr-end" aria-hidden="true" />
      <button
        data-testid="falsefr-done"
        onClick={finished ? goBack : finish}
        style={{
          width: '100%',
          marginTop: 16,
          padding: '14px 0',
          background: 'linear-gradient(135deg,#0e7490,#164e63)',
          color: 'white',
          border: 'none',
          borderRadius: 14,
          fontSize: 16,
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        {finished ? '✓ Read — back' : alreadyRead ? 'Mark as read' : 'Complete Lesson  +30 XP'}
      </button>
    </div>
  );
}

export default FalseFriendsScreen;
