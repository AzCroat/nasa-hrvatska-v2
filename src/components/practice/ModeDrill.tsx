// src/components/practice/ModeDrill.tsx
//
// THE MODE-BANK DRILL ENGINE (2026-08-29).
//
// 75 drill screens in this directory are the same ~400-line component. Diffing
// any two of them ignoring their DATA block yields six lines: a header comment,
// the three MODE_LABEL entries, the exported bank name, the component name and
// the completion key. Everything else — the run draw, the option shuffle, the
// answer state, the scoring, the pass gate, the retry, the result card and the
// whole render — is byte-identical, roughly 30,000 lines of it.
//
// That was tolerable while drills were added a tranche at a time. It is not
// tolerable for the next 180: the practice programme exists because 117 of the
// 180 curriculum lessons teach something the app never drills, and paying 400
// lines of duplicated React per drill would make the content the small part of
// the work.
//
// So this is the shape, extracted once. A new drill is now a DATA BANK and a
// row in the pool — content, which is the part that carries the value.
//
// SCOPE, DELIBERATELY LIMITED: the existing 75 screens are NOT converted here.
// Each is live, each has its own registry entry, router route, difficulty score
// and tests, and rewriting them is a behaviour-risk change to production
// screens that deserves its own decision and its own mutation pass. This engine
// serves NEW drills; converting the old ones can follow, one tranche at a time,
// against a diff that proves the render is unchanged.
//
// The extraction is faithful on purpose — same class names, same inline styles,
// same copy, same `drill-retry` testid, same 75% pass gate via completeExercise
// — so a learner cannot tell an engine-backed drill from a hand-written one,
// and neither can the E2E suite.

import React, { useState, useRef } from 'react';
import { H, Bar } from '../../data';
import { completeExercise } from '../../hooks/useExerciseCompletion';
import { useStats } from '../../context/StatsContext';
import { rnd } from '../../lib/random.js';
import { drawDrillRun } from '../../lib/drillRun';

/** One question in a mode-tagged bank. */
export interface ModeDrillItem {
  /** Which of the drill's modes this item belongs to; the run draws evenly across them. */
  mode: string;
  /** The Croatian prompt. */
  q: string;
  /** English gloss shown under the prompt. */
  en: string;
  /** Options as authored; the engine shuffles them per run. */
  opts: string[];
  /** Must be one of `opts`. */
  answer: string;
  /** Shown after answering. This is the teaching, not decoration. */
  tip: string;
}

export interface ModeDrillProps {
  /**
   * The COMPLETION KEY passed to completeExercise — not necessarily the screen
   * id. Several existing drills differ between the two (GenderDrillScreen
   * completes as 'gender'), and the teach → practice coupling clears on this
   * key, so it is named explicitly rather than inferred from anything.
   */
  id: string;
  title: string;
  subtitle: string;
  /** mode key → the label shown above the question. */
  modeLabels: Record<string, string>;
  data: readonly ModeDrillItem[];
  /** Copy for the result card, in Croatian, matching the hand-written drills. */
  praise?: { perfect: string; good: string; more: string };
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}

const DEFAULT_PRAISE = {
  perfect: 'Savršeno! 🏆',
  good: 'Vrlo dobro! 💪',
  more: 'Treba još vježbe.',
};

export default function ModeDrill({
  id,
  title,
  subtitle,
  modeLabels,
  data,
  praise = DEFAULT_PRAISE,
  goBack,
  award,
}: ModeDrillProps) {
  const { stats, setStats, writeDelta } = useStats();
  const finishFired = useRef(false);
  const [q] = useState(() =>
    drawDrillRun(data as ModeDrillItem[]).map((item) => ({
      ...item,
      opts: shuffle([...item.opts]),
    })),
  );
  const total = q.length;
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [passed, setPassed] = useState(false);

  const cur = q[idx]!;
  const answered = chosen !== null;

  function pick(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === cur.answer) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= total) {
      if (!finishFired.current) {
        finishFired.current = true;
        const res = completeExercise({
          key: id,
          score,
          total,
          xp: score * 5,
          stats,
          setStats,
          writeDelta,
          award,
        });
        setPassed(res.passed);
      }
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setChosen(null);
    }
  }

  if (done) {
    return (
      <div className="scr-wrap">
        {H(title, subtitle, goBack)}
        <div className="c" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
            {score} / {total}
          </div>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 16 }}>
            {score === total ? praise.perfect : score >= total * 0.8 ? praise.good : praise.more}
          </div>
          {!passed && (
            <button
              className="b bp"
              data-testid="drill-retry"
              style={{ width: '100%', marginBottom: 10 }}
              onClick={() => {
                finishFired.current = false;
                setIdx(0);
                setChosen(null);
                setScore(0);
                setPassed(false);
                setDone(false);
              }}
            >
              🔁 Try again (need 75%)
            </button>
          )}
          <button className="b bp" style={{ width: '100%' }} onClick={goBack}>
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="scr-wrap">
      {H(title, subtitle, goBack)}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
        <span style={{ fontSize: 13, color: '#64748b', whiteSpace: 'nowrap' }}>
          {idx + 1} / {total}
        </span>
        <Bar v={idx + 1} mx={total} />
      </div>
      <div className="c" style={{ marginTop: 16 }}>
        <div style={{ fontSize: 13, color: '#7c3aed', fontWeight: 700, marginBottom: 8 }}>
          {modeLabels[cur.mode]}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{cur.q}</div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 14 }}>{cur.en}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {cur.opts.map((opt) => {
            const isCorrect = opt === cur.answer;
            const showState = answered && (isCorrect || opt === chosen);
            return (
              <button
                key={opt}
                onClick={() => pick(opt)}
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: answered ? 'default' : 'pointer',
                  border: showState
                    ? isCorrect
                      ? '2px solid #16a34a'
                      : '2px solid #dc2626'
                    : '1.5px solid var(--card-b)',
                  background: showState ? (isCorrect ? '#f0fdf4' : '#fef2f2') : 'var(--card)',
                  color: 'var(--text)',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {answered && (
          <div
            style={{
              marginTop: 14,
              padding: '10px 12px',
              borderRadius: 10,
              background: 'var(--bar-bg)',
              fontSize: 13,
              color: 'var(--subtext)',
            }}
          >
            💡 {cur.tip}
          </div>
        )}
        {answered && (
          <button className="b bp" style={{ width: '100%', marginTop: 14 }} onClick={next}>
            {idx + 1 >= total ? 'Rezultat →' : 'Dalje →'}
          </button>
        )}
      </div>
    </div>
  );
}
