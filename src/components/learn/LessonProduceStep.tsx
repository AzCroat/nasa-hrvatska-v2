// src/components/learn/LessonProduceStep.tsx
//
// USE IT NOW — the production step that follows a PASSED mastery check
// (owner directive, 2026-09-07).
//
// The gap: a lesson tested recognition (four options, one right) and then
// handed the learner to a multiple-choice drill. Nothing ever asked them to
// WRITE the structure they had just been taught, and recognition is precisely
// where learners plateau. This asks for two or three sentences using the
// lesson's own objectives, and grades them with the SAME `/api/correct`
// rubric the Level Check and Guided Writing use — one evaluator, one standard.
//
// FAIL-SOFT BY CONTRACT, like the speaking coach: the lesson is ALREADY
// complete when this renders (the pass recorded XP, the ladder and the
// curriculum), so an evaluator that cannot answer must never take that away.
// A failure names its cause (lib/aiFailure), offers Try again, and lets the
// learner move on with their pass intact — this step can only ever ADD.

import React, { useRef, useState } from 'react';
import { _aiPost } from '../../lib/aiPost';
import {
  failureFromResponse,
  failureFromError,
  failureFromStatus,
  reportAiFailure,
  type AiFailure,
} from '../../lib/aiFailure';
import { recordMasteryEvent } from '../../lib/masteryLedger';
import { applyWritingErrorsToAdaptive } from '../../lib/adaptiveFeedback';
import { markLessonProduced } from '../../lib/lessonRetention';
import type { CefrLevel } from '../../lib/cefr';

/** Minimum words before the grader is worth calling. Below this there is not
 *  enough language to judge, and a rubric score on four words would be noise. */
export const MIN_PRODUCE_WORDS = 12;

interface Change {
  original?: string;
  corrected?: string;
  errorType?: string;
  type?: string;
  note?: string;
}
interface CorrectResult {
  score?: number;
  corrected_text?: string;
  changes?: Change[];
  encouragement?: string;
}

interface Props {
  lessonId: string;
  lessonTitle: string;
  level: string;
  /** The lesson's own "you will be able to…" lines, used as the brief so the
   *  learner produces THIS lesson's structure rather than free writing. */
  objectives: string[];
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
  onDone: () => void;
}

export default function LessonProduceStep({
  lessonId,
  lessonTitle,
  level,
  objectives,
  award,
  onDone,
}: Props) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CorrectResult | null>(null);
  const [failure, setFailure] = useState<AiFailure | null>(null);
  const awarded = useRef(false);

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const enough = words >= MIN_PRODUCE_WORDS;
  const brief = objectives.slice(0, 2).join(' ');

  async function submit() {
    if (!enough || loading) return;
    setLoading(true);
    setFailure(null);
    try {
      const res = await _aiPost('/api/correct', {
        mode: 'writeeval',
        prompt: `Use what "${lessonTitle}" taught: ${brief}`,
        text: text.trim(),
        params: { level, writingPrompt: brief },
      });
      if (!res.ok) {
        const f = await failureFromResponse(res);
        setFailure(f);
        reportAiFailure('lesson-produce', f);
        return;
      }
      const data = (await res.json()) as CorrectResult;
      if (typeof data.score !== 'number') {
        const f = failureFromStatus(200, 'eval_unparseable');
        setFailure(f);
        reportAiFailure('lesson-produce', f);
        return;
      }
      setResult(data);
      markLessonProduced(lessonId, data.score);
      // Written evidence at the lesson's level, same weight and taxonomy the
      // other rubric-graded writing surfaces use — so one loop, not a third.
      recordMasteryEvent({
        level: level as CefrLevel,
        skill: 'writing',
        score: Math.max(0, Math.min(1, data.score / 100)),
        weight: 2,
      });
      applyWritingErrorsToAdaptive((data.changes || []).map((c) => c.errorType || c.type));
      if (!awarded.current && award) {
        awarded.current = true;
        award(Math.round(data.score / 10) + 5, false, 'writing');
      }
    } catch (e) {
      const f = failureFromError(e);
      setFailure(f);
      reportAiFailure('lesson-produce', f);
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <div data-testid="produce-result" style={{ textAlign: 'left' }}>
        <div style={{ fontSize: 22, fontWeight: 900, textAlign: 'center' }}>{result.score}/100</div>
        {result.corrected_text && (
          <blockquote
            lang="hr"
            data-testid="produce-corrected"
            style={{
              margin: '12px 0',
              padding: '10px 14px',
              background: 'var(--card)',
              border: '1.5px solid var(--card-b)',
              borderLeft: '4px solid #0e7490',
              borderRadius: 10,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            {result.corrected_text}
          </blockquote>
        )}
        {result.encouragement && (
          <p style={{ fontSize: 13, color: 'var(--subtext)', lineHeight: 1.6 }}>
            {result.encouragement}
          </p>
        )}
        <button className="b bp" style={{ width: '100%', marginTop: 12 }} onClick={onDone}>
          Done
        </button>
      </div>
    );
  }

  return (
    <div data-testid="produce-step" style={{ textAlign: 'left' }}>
      <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>Now use it</div>
      <p style={{ fontSize: 13, color: 'var(--subtext)', lineHeight: 1.6, margin: '0 0 10px' }}>
        Write two or three sentences in Croatian using what this lesson taught. Recognising a form
        and producing one are different skills — this trains the second.
      </p>
      {brief && (
        <p
          style={{ fontSize: 12, color: 'var(--subtext)', fontStyle: 'italic', margin: '0 0 10px' }}
        >
          {brief}
        </p>
      )}
      <textarea
        data-testid="produce-input"
        className="inp"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Napišite nekoliko rečenica…"
        style={{ width: '100%', resize: 'vertical' }}
      />
      <div style={{ fontSize: 12, color: 'var(--subtext)', margin: '4px 0 10px' }}>
        {words} / {MIN_PRODUCE_WORDS} words
      </div>

      {failure && (
        <div
          data-testid="produce-failed"
          data-failure-kind={failure.kind}
          role="alert"
          style={{
            marginBottom: 10,
            padding: '10px 12px',
            borderRadius: 10,
            background: '#fffbeb',
            border: '1.5px solid #fcd34d',
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          {failure.message} Your lesson is already complete — this step is extra.
        </div>
      )}

      <button
        className="b bp"
        data-testid="produce-submit"
        style={{ width: '100%' }}
        disabled={!enough || loading}
        onClick={submit}
      >
        {loading ? 'Checking…' : failure ? 'Try again' : 'Get feedback'}
      </button>
      <button
        data-testid="produce-skip"
        onClick={onDone}
        style={{
          display: 'block',
          width: '100%',
          marginTop: 8,
          padding: 8,
          background: 'none',
          border: 'none',
          color: 'var(--subtext)',
          fontSize: 12,
          fontWeight: 600,
          textDecoration: 'underline',
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        Skip for now
      </button>
    </div>
  );
}
