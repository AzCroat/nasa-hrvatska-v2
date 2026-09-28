// src/components/learn/LessonProduceScreen.tsx
//
// THE DAY'S PRODUCTION SLOT, standing on its own (Daily Session redesign,
// increment 2a, owner decision 4). The step itself is `LessonProduceStep` — the
// same component the lesson summary renders after a passed check. This screen
// exists for the learner who left the summary without writing: the session
// keeps the slot, and this is where it is done.
//
// Four states, each honest about why (no blank page — CLAUDE.md, "An Empty Page
// Is Not An Answer"):
//   * no handoff        → "no lesson to write about", Back
//   * lesson not read   → "finish today's lesson first", with the lesson one tap
//                         away — production before the teaching is the untaught
//                         test the redesign exists to remove (P-TAUGHT)
//   * already written   → the score, and the session slot is freed (the work is
//                         done; it was done on the lesson page)
//   * otherwise         → the step
//
// It NEVER strands the session: a graded submission and an evaluator refusal
// both free the slot (inside the step — the learner wrote; whether the grader
// answered is not their fault), and "already written" frees it on open.

import React, { useEffect, useMemo } from 'react';
import { H } from '../../data';
import LessonProduceStep from './LessonProduceStep';
import {
  readLessonProduceRequest,
  clearLessonProduceRequest,
  lessonProduced,
} from '../../lib/lessonProduceRequest';
import { readCurriculumSpine, readCompletedLessons } from '../../lib/curriculumProgress';
import { readRetention } from '../../lib/lessonRetention';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import type { CurriculumEntry } from '../../lib/curriculum';

interface Props {
  goBack: () => void;
  award: (xp: number, celebrate?: boolean, activityType?: string) => void;
  onOpenLesson?: (lessonId: string) => void | Promise<boolean>;
}

const card: React.CSSProperties = {
  background: 'var(--card)',
  border: '1px solid var(--card-b)',
  borderRadius: 14,
  padding: 16,
  marginTop: 12,
};

export default function LessonProduceScreen({ goBack, award, onOpenLesson }: Props) {
  const lessonId = useMemo(() => readLessonProduceRequest(), []);
  const entry = useMemo<CurriculumEntry | null>(() => {
    if (!lessonId) return null;
    try {
      return readCurriculumSpine().find((e) => e.id === lessonId) ?? null;
    } catch {
      return null;
    }
  }, [lessonId]);
  const read = useMemo(() => !!lessonId && readCompletedLessons().has(lessonId), [lessonId]);
  const produced = useMemo(() => !!lessonId && lessonProduced(lessonId), [lessonId]);
  const producedScore = useMemo(() => {
    if (!lessonId || !produced) return null;
    try {
      return readRetention().lessons[lessonId]?.produced?.score ?? null;
    } catch {
      return null;
    }
  }, [lessonId, produced]);

  useEffect(() => clearLessonProduceRequest, []);

  // Already written on the lesson page: the slot's work is done, so free it.
  useEffect(() => {
    if (produced) signalSessionCompleteIfActive('lessonproduce');
  }, [produced]);

  const title = entry?.title || 'Today’s lesson';

  if (!lessonId || !entry) {
    return (
      <div className="scr-wrap">
        {H('✍️ Write it', 'Use what today’s lesson taught', goBack)}
        <div style={card} data-testid="lesson-produce-none">
          <div style={{ fontWeight: 700, marginBottom: 6 }}>No lesson to write about</div>
          <div style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
            This step belongs to today’s lesson. Open it from Today’s Session on Home.
          </div>
          <button className="b bp" style={{ width: '100%', marginTop: 12 }} onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    );
  }

  if (!read) {
    return (
      <div className="scr-wrap">
        {H('✍️ Write it', title, goBack)}
        <div style={card} data-testid="lesson-produce-unread">
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Finish today’s lesson first</div>
          <div style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
            This asks you to use what “{title}” teaches — so the lesson comes first.
          </div>
          {onOpenLesson && (
            <button
              className="b bp"
              style={{ width: '100%', marginTop: 12 }}
              data-testid="lesson-produce-open-lesson"
              onClick={() => void onOpenLesson(lessonId)}
            >
              Open the lesson
            </button>
          )}
          <button className="b" style={{ width: '100%', marginTop: 8 }} onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    );
  }

  if (produced) {
    return (
      <div className="scr-wrap">
        {H('✍️ Write it', title, goBack)}
        <div style={card} data-testid="lesson-produce-done">
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Already written ✓</div>
          <div style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
            You wrote this one on the lesson page
            {typeof producedScore === 'number' ? ` — ${Math.round(producedScore)}/100.` : '.'}
          </div>
          <button className="b bp" style={{ width: '100%', marginTop: 12 }} onClick={goBack}>
            Back to Today’s Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="scr-wrap">
      {H('✍️ Write it', title, goBack)}
      <div style={card}>
        <LessonProduceStep
          lessonId={lessonId}
          lessonTitle={entry.title || lessonId}
          level={entry.level}
          objectives={entry.objectives ?? []}
          award={award}
          onDone={goBack}
        />
      </div>
    </div>
  );
}
