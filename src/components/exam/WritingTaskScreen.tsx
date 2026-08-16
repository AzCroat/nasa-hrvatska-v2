// src/components/exam/WritingTaskScreen.tsx
//
// The written-production section of the CEFR Level Check (Phase 1 mastery
// gate). One levelled task: prompt → textarea → AI evaluation via
// /api/correct mode 'writeeval' (same evaluator as WritingScreen practice) →
// onScore(0..1).
//
// Fairness invariant (mirrors SpeakingScorer): an evaluation FAILURE is never
// a failing score. If the AI can't be reached (offline, quota, budget pause),
// the learner can retry — or bail out via onDefer, which saves the sections
// completed so far and lets them finish the check later. Only a real
// evaluation produces a score.

import React, { useState } from 'react';
import type { CefrLevel } from '../../lib/cefr.js';
import type { WritingTask } from '../../data/writingTasks.js';
import { _aiPost } from '../../lib/aiPost';
import { classifyAiLimit, BUDGET_PAUSE_EN } from '../../lib/aiLimit';

interface Props {
  task: WritingTask;
  level: CefrLevel;
  onScore: (score: number) => void;
  /** Save progress and finish this section later (evaluation unavailable). */
  onDefer?: () => void;
}

function countWords(t: string): number {
  return t.trim().split(/\s+/).filter(Boolean).length;
}

export default function WritingTaskScreen({ task, level, onScore, onDefer }: Props) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const words = countWords(text);
  const ready = words >= task.minWords;

  async function submit() {
    if (!ready || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await _aiPost('/api/correct', {
        mode: 'writeeval',
        prompt: task.promptEn,
        text: text.trim().slice(0, 3000),
        params: { level, writingPrompt: task.promptEn },
      });
      if (!res.ok) {
        let errBody: Record<string, unknown> = {};
        try {
          errBody = await res.json();
        } catch {
          /* body not JSON */
        }
        if (res.status === 401) {
          throw new Error('Sign in to take the Level Check — evaluation needs your account.');
        }
        const limit = classifyAiLimit({
          status: res.status,
          code: typeof errBody['error'] === 'string' ? (errBody['error'] as string) : '',
        });
        if (limit === 'budget') throw new Error(BUDGET_PAUSE_EN);
        if (limit === 'daily') {
          throw new Error(
            "Today's AI evaluations are used up. Your answers are saved — finish this section tomorrow.",
          );
        }
        throw new Error(
          'Evaluation is unavailable right now. Your writing is not lost — retry, or finish later.',
        );
      }
      const data = (await res.json()) as { score?: unknown };
      const raw = typeof data.score === 'number' ? data.score : NaN;
      if (!Number.isFinite(raw)) {
        throw new Error('Evaluation came back malformed. Retry, or finish this section later.');
      }
      onScore(Math.max(0, Math.min(1, raw / 100)));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Evaluation failed. Retry, or finish later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div data-testid="writing-task">
      <span className="q-skill">✍️ Writing</span>
      <div className="q-stem" lang="hr" style={{ marginBottom: 6 }}>
        {task.prompt}
      </div>
      <p style={{ fontSize: 12, color: 'var(--subtext)', marginBottom: 10 }}>{task.promptEn}</p>
      <textarea
        data-testid="writing-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        lang="hr"
        placeholder="Pišite ovdje na hrvatskom…"
        rows={8}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: 12,
          borderRadius: 12,
          border: '1.5px solid var(--card-b)',
          background: 'var(--card)',
          color: 'var(--heading)',
          fontSize: 15,
          lineHeight: 1.6,
          resize: 'vertical',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '8px 0 12px',
          fontSize: 12,
          color: ready ? '#16a34a' : 'var(--subtext)',
          fontWeight: 700,
        }}
      >
        <span data-testid="writing-wordcount">
          {words} / {task.minWords} words
        </span>
        {!ready && <span>Keep going — a few more sentences.</span>}
      </div>
      {error && (
        <div
          role="alert"
          style={{
            background: 'rgba(220,38,38,0.08)',
            border: '1.5px solid rgba(220,38,38,0.25)',
            borderRadius: 10,
            padding: '10px 12px',
            fontSize: 13,
            color: '#b91c1c',
            marginBottom: 12,
            lineHeight: 1.5,
          }}
        >
          {error}
          {onDefer && (
            <>
              {' '}
              <button
                onClick={onDefer}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#b91c1c',
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Save &amp; finish later
              </button>
            </>
          )}
        </div>
      )}
      <button
        className="b bp"
        data-testid="writing-submit"
        disabled={!ready || loading}
        onClick={submit}
      >
        {loading ? 'Evaluating…' : 'Submit writing →'}
      </button>
    </div>
  );
}
