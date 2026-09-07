// src/components/learn/RetentionCheckScreen.tsx
//
// LESSON REVIEW — the one screen that serves everything lib/lessonRetention
// schedules: due re-checks of passed lessons, the item cards a learner has
// missed before, and the weekly cumulative mix (owner directive, 2026-09-07).
//
// One screen for all three deliberately: the session slot, the next-step
// engine and the Practice card need ONE thing to point at, and a learner
// should meet "what did I forget?" as a single habit rather than three.
//
// The results are reported PER LESSON AND PART, because the parts mean
// different things to the scheduler: a re-check's score advances or resets
// that lesson's ladder, a cumulative's score never touches a ladder (it can
// only pull one forward on two misses), and a card is one loose item. Getting
// that grouping wrong would let a mixed sitting reset a ladder on two
// unrelated questions.
//
// Completion goes through `completeExercise` under the key 'lessonreview' so
// the daily-session flow, the mastery ledger and the next-step prompt all see
// it exactly like any other graded finish.

import React, { useEffect, useMemo, useState } from 'react';
import { H } from '../../data';
import { useStats } from '../../context/StatsContext';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import { shuffledOrder } from '../../lib/lessonCheck';
import {
  buildRetentionQueue,
  readRetention,
  recordRetentionResult,
  recordCumulativeServed,
  type RetentionQueueItem,
  type ItemResult,
  type ResultKind,
} from '../../lib/lessonRetention';
import { getLessons } from '../../lib/contentClient';
import type { Lesson } from '../../types/content';

interface Props {
  /** The lesson corpus. Production omits it and the screen fetches through the
   *  same cached client `animlesson` uses; tests pass one in. A fetch failure
   *  renders the caught-up state rather than an error: nothing is due that we
   *  can prove, and a review screen must never be a dead end. */
  lessons?: Lesson[];
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

const XP_PER_ITEM = 3;

export default function RetentionCheckScreen({ lessons, goBack, award }: Props) {
  const { stats, setStats, writeDelta } = useStats();
  const [loaded, setLoaded] = useState<Lesson[] | null>(lessons ?? null);
  const [loading, setLoading] = useState(!lessons);

  useEffect(() => {
    if (lessons) return undefined;
    let live = true;
    getLessons()
      .then((ls) => {
        if (live) setLoaded(ls);
      })
      .catch(() => {
        if (live) setLoaded([]);
      })
      .finally(() => {
        if (live) setLoading(false);
      });
    return () => {
      live = false;
    };
  }, [lessons]);

  // Built ONCE the lessons are in: the queue is deterministic for a day, but
  // rebuilding it mid-sitting after a result was recorded would change the
  // questions under the learner.
  const queue = useMemo<RetentionQueueItem[]>(
    () => (loaded && loaded.length > 0 ? buildRetentionQueue(loaded, readRetention()) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loaded === null],
  );
  const [pos, setPos] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [done, setDone] = useState(false);
  const [attempt] = useState(() => Math.floor(Date.now() / 86400000));

  const entry = queue[pos];
  const order = useMemo(
    () => (entry ? shuffledOrder(entry.item.options.length, attempt, pos) : []),
    [entry, attempt, pos],
  );

  if (loading) {
    return (
      <div className="scr-wrap" data-testid="retention-loading">
        {H('🧠 Lesson Review', 'Keeping what you have learned', goBack)}
        <p style={{ textAlign: 'center', padding: 32, color: 'var(--subtext)' }}>
          Loading your review&hellip;
        </p>
      </div>
    );
  }

  if (queue.length === 0 || !entry) {
    return (
      <div className="scr-wrap" data-testid="retention-empty">
        {H('🧠 Lesson Review', 'Keeping what you have learned', goBack)}
        <div style={{ textAlign: 'center', padding: '40px 16px' }}>
          <div style={{ fontSize: 48 }}>✅</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginTop: 8 }}>Nothing to review yet</div>
          <p
            style={{ fontSize: 13, color: 'var(--subtext)', margin: '8px 0 20px', lineHeight: 1.6 }}
          >
            Lessons come back here a few days after you pass them, and anything you missed comes
            back sooner. Finish a lesson and the first review is scheduled automatically.
          </p>
          <button className="b bp" style={{ width: '100%' }} onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    );
  }

  const revealed = chosen !== null;
  const isCorrect = revealed && chosen === entry.item.correct;
  const correctCount = Object.values(answers).filter(Boolean).length;

  /** Group the sitting by lesson AND part, then report each group with the
   *  kind that matches what it measures. */
  function finish(final: Record<number, boolean>) {
    const groups = new Map<string, { lessonId: string; kind: ResultKind; results: ItemResult[] }>();
    queue.forEach((q, i) => {
      if (final[i] === undefined) return;
      const kind: ResultKind =
        q.part === 'recheck' ? 'retention' : q.part === 'cumulative' ? 'cumulative' : 'card';
      const key = `${q.lessonId}|${kind}`;
      const g = groups.get(key) ?? { lessonId: q.lessonId, kind, results: [] };
      g.results.push({ idx: q.idx, correct: final[i]! });
      groups.set(key, g);
    });
    for (const g of groups.values()) {
      recordRetentionResult(g.lessonId, { kind: g.kind, results: g.results });
    }
    if (queue.some((q) => q.part === 'cumulative')) recordCumulativeServed();

    const total = queue.length;
    const score = Object.values(final).filter(Boolean).length;
    completeExercise({
      key: 'lessonreview',
      score,
      total,
      xp: Math.max(XP_PER_ITEM, score * XP_PER_ITEM),
      stats,
      setStats,
      writeDelta,
      award,
      awardOnReplay: true,
    });
    setDone(true);
  }

  function choose(source: number) {
    if (revealed) return;
    setChosen(source);
    setAnswers((prev) => ({ ...prev, [pos]: source === entry!.item.correct }));
  }

  function next() {
    const final = { ...answers, [pos]: chosen === entry!.item.correct };
    if (pos < queue.length - 1) {
      setPos(pos + 1);
      setChosen(null);
      return;
    }
    finish(final);
  }

  if (done) {
    const pct = Math.round((correctCount / queue.length) * 100);
    return (
      <div className="scr-wrap" data-testid="retention-done">
        {H('🧠 Lesson Review', 'Keeping what you have learned', goBack)}
        <div style={{ textAlign: 'center', padding: '32px 16px' }}>
          <div style={{ fontSize: 48 }}>{pct >= 75 ? '🏆' : '💪'}</div>
          <div style={{ fontSize: 22, fontWeight: 800 }} data-testid="retention-score">
            {correctCount}/{queue.length} · {pct}%
          </div>
          <p
            style={{
              fontSize: 13,
              color: 'var(--subtext)',
              margin: '10px 0 20px',
              lineHeight: 1.6,
            }}
          >
            {pct >= 75
              ? 'Held on to it. These come back further apart from here.'
              : 'The ones you missed come back sooner, and their lesson is queued for practice.'}
          </p>
          <button className="b bp" style={{ width: '100%' }} onClick={goBack}>
            Done
          </button>
        </div>
      </div>
    );
  }

  const partLabel =
    entry.part === 'recheck'
      ? 'Retention check'
      : entry.part === 'cumulative'
        ? 'Weekly mix'
        : 'You missed this before';

  return (
    <div className="scr-wrap" data-testid="retention-check" data-part={entry.part}>
      {H('🧠 Lesson Review', 'Keeping what you have learned', goBack)}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginTop: 12,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: 'var(--subtext)',
            textTransform: 'uppercase',
          }}
          data-testid="retention-part"
        >
          {partLabel} · {entry.lessonTitle}
        </span>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--subtext)' }}>
          {pos + 1} / {queue.length}
        </span>
      </div>

      <div className="c" style={{ marginTop: 12, fontSize: 17, fontWeight: 700, lineHeight: 1.4 }}>
        {entry.item.q}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
        {order.map((source) => (
          <button
            key={source}
            data-testid="retention-option"
            data-source={source}
            className={
              'ob ' +
              (revealed
                ? source === entry.item.correct
                  ? 'ok'
                  : source === chosen
                    ? 'no'
                    : ''
                : '')
            }
            disabled={revealed}
            onClick={() => choose(source)}
          >
            {entry.item.options[source]}
          </button>
        ))}
      </div>

      {revealed && (
        <div
          data-testid="retention-feedback"
          data-correct={isCorrect ? '1' : '0'}
          style={{
            marginTop: 14,
            borderRadius: 12,
            padding: '12px 14px',
            background: isCorrect ? '#f0fdf4' : '#fffbeb',
            border: '1.5px solid ' + (isCorrect ? '#86efac' : '#fcd34d'),
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 900,
              color: isCorrect ? '#16a34a' : '#b45309',
              marginBottom: 4,
            }}
          >
            {isCorrect ? '✓ Still there' : '✗ Not quite'}
          </div>
          {entry.item.explanation && (
            <p style={{ fontSize: 13, color: 'var(--subtext)', lineHeight: 1.6, margin: 0 }}>
              {entry.item.explanation}
            </p>
          )}
        </div>
      )}

      {revealed && (
        <button
          className="b bp"
          data-testid="retention-next"
          style={{ width: '100%', marginTop: 16 }}
          onClick={next}
        >
          {pos < queue.length - 1 ? 'Next →' : 'See result'}
        </button>
      )}
    </div>
  );
}
