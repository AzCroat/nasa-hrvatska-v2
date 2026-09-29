// src/components/practice/FluencyRoundScreen.tsx
//
// The fluency round (lib/fluencyRound, academic recommendation 4): 90 seconds of
// questions from lessons the learner has already passed, answered as fast as they can.
// Not a test — the course does not move on it. It shows the rate and a personal best,
// and a miss on mastered material goes back into Lesson Review.
//
// Credit follows the work: the small award and the session signal fire from an effect
// on REACHING the result, never from a button that leaves it; a round in which nothing
// was answered pays nothing.

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { H } from '../../data';
import { getLessons } from '../../lib/contentClient';
import { shuffledOrder } from '../../lib/lessonCheck';
import { recordRetentionResult } from '../../lib/lessonRetention';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import {
  buildFluencyRound,
  fluencyAvailable,
  fluencyRate,
  readFluencyBest,
  recordFluencyRate,
  FLUENCY_SECONDS,
  FLUENCY_MIN_LESSONS,
  type FluencyItem,
} from '../../lib/fluencyRound';
import type { AwardActivityType } from '../../types/index.js';

interface Props {
  goBack: () => void;
  award: (xp: number, celebrate?: boolean, activityType?: AwardActivityType) => void;
  /** Test seam: a fixed clock tick instead of real seconds. */
  tickMs?: number;
}

type Phase = 'loading' | 'unavailable' | 'failed' | 'ready' | 'running' | 'done';

export default function FluencyRoundScreen({ goBack, award, tickMs = 1000 }: Props) {
  const [phase, setPhase] = useState<Phase>(() => (fluencyAvailable() ? 'loading' : 'unavailable'));
  const [items, setItems] = useState<FluencyItem[]>([]);
  const [pos, setPos] = useState(0);
  const [left, setLeft] = useState(FLUENCY_SECONDS);
  const [flash, setFlash] = useState<'right' | 'wrong' | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [bestBefore] = useState(() => readFluencyBest());
  const [newBest, setNewBest] = useState(false);
  const paid = useRef(false);
  const seed = useMemo(() => Math.floor(Date.now() / 86_400_000), []);

  useEffect(() => {
    if (phase !== 'loading') return undefined;
    let live = true;
    getLessons()
      .then((all) => {
        if (!live) return;
        const built = buildFluencyRound(all as never, seed);
        if (built.length === 0) setPhase('unavailable');
        else {
          setItems(built);
          setPhase('ready');
        }
      })
      .catch(() => {
        if (live) setPhase('failed');
      });
    return () => {
      live = false;
    };
  }, [phase, seed]);

  // The clock runs only while the round runs.
  useEffect(() => {
    if (phase !== 'running') return undefined;
    if (left <= 0) {
      setPhase('done');
      return undefined;
    }
    const t = setTimeout(() => setLeft((s) => s - 1), tickMs);
    return () => clearTimeout(t);
  }, [phase, left, tickMs]);

  // Credit on REACHING the result — both exits are then equivalent.
  const answered = results.length;
  const correct = results.filter(Boolean).length;
  const used = FLUENCY_SECONDS - Math.max(0, left);
  const rate = fluencyRate(correct, Math.max(1, used));
  useEffect(() => {
    if (phase !== 'done' || paid.current || answered === 0) return;
    paid.current = true;
    setNewBest(recordFluencyRate(rate));
    award(Math.min(20, correct), false, 'default');
    signalSessionCompleteIfActive('fluency');
  }, [phase, answered, correct, rate, award]);

  const entry = items[pos];
  const order = useMemo(
    () => (entry ? shuffledOrder(entry.item.options.length, seed, pos) : []),
    [entry, seed, pos],
  );

  function answer(source: number) {
    if (!entry || flash) return;
    const ok = source === entry.item.correct;
    setFlash(ok ? 'right' : 'wrong');
    setResults((r) => [...r, ok]);
    // A slip on mastered material is what review is for: a card, never a ladder move.
    if (!ok)
      recordRetentionResult(entry.lessonId, {
        kind: 'card',
        results: [{ idx: entry.idx, correct: false }],
      });
    setTimeout(() => {
      setFlash(null);
      if (pos + 1 >= items.length) setPhase('done');
      else setPos(pos + 1);
    }, 350);
  }

  const header = H('⚡ Quick Recall', 'Fast answers on what you have mastered', goBack);

  if (phase === 'unavailable' || phase === 'failed' || phase === 'loading') {
    return (
      <div className="scr-wrap" data-testid={`fluency-${phase}`}>
        {header}
        <p style={{ textAlign: 'center', padding: 32, color: 'var(--subtext)', lineHeight: 1.6 }}>
          {phase === 'loading'
            ? 'Getting your round ready…'
            : phase === 'failed'
              ? 'Your lessons could not be loaded — check your connection and try again.'
              : `Quick Recall opens once you have passed ${FLUENCY_MIN_LESSONS} lessons — it only asks about what you have already mastered.`}
        </p>
      </div>
    );
  }

  if (phase === 'ready') {
    return (
      <div className="scr-wrap" data-testid="fluency-ready">
        {header}
        <div style={{ textAlign: 'center', padding: '24px 12px' }}>
          <p style={{ lineHeight: 1.6, color: 'var(--text)' }}>
            {FLUENCY_SECONDS} seconds. Questions from lessons you have passed — answer as many as
            you can. Speed is the point: this is not a test, and nothing counts against you.
          </p>
          {bestBefore > 0 && (
            <p data-testid="fluency-best" style={{ color: 'var(--subtext)' }}>
              Your best: {bestBefore} correct a minute
            </p>
          )}
          <button
            className="b bp"
            data-testid="fluency-start"
            style={{ width: '100%', marginTop: 12 }}
            onClick={() => setPhase('running')}
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'done') {
    return (
      <div className="scr-wrap" data-testid="fluency-result">
        {header}
        <div style={{ textAlign: 'center', padding: '24px 12px' }}>
          <div style={{ fontSize: 44, fontWeight: 900 }} data-testid="fluency-rate">
            {rate}
          </div>
          <div style={{ color: 'var(--subtext)', marginBottom: 12 }}>correct answers a minute</div>
          <p data-testid="fluency-score" style={{ lineHeight: 1.6 }}>
            {correct} of {answered} right.
            {newBest
              ? ' A new personal best.'
              : bestBefore > 0
                ? ` Your best is ${bestBefore}.`
                : ''}
            {answered > correct ? ' The ones you missed are back in your Lesson Review.' : ''}
          </p>
          <button
            className="b bp"
            data-testid="fluency-done"
            style={{ width: '100%' }}
            onClick={goBack}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="scr-wrap" data-testid="fluency-running">
      {header}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <span data-testid="fluency-clock" style={{ fontWeight: 800 }}>
          {left}s
        </span>
        <span style={{ color: 'var(--subtext)' }}>
          {correct} right · {answered} answered
        </span>
      </div>
      {entry && (
        <>
          <p
            lang="hr"
            data-testid="fluency-question"
            style={{ fontSize: 'var(--text-md)', fontWeight: 800 }}
          >
            {entry.item.q}
          </p>
          {order.map((source) => (
            <button
              key={source}
              lang="hr"
              className={`ob${flash && source === entry.item.correct ? ' ok' : ''}`}
              data-testid="fluency-option"
              data-source={source}
              disabled={!!flash}
              onClick={() => answer(source)}
              style={{ width: '100%', display: 'block', marginBottom: 8 }}
            >
              {entry.item.options[source]}
            </button>
          ))}
        </>
      )}
    </div>
  );
}
