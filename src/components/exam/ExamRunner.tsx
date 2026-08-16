// src/components/exam/ExamRunner.tsx
import { useRef, useState } from 'react';
import type { CefrLevel } from '../../lib/cefr.js';
import type { SkillScores, SkillKey } from '../../lib/cefrCertification.js';
import type { SpeakingScorer, SpeakingAssessment } from '../../lib/speaking/SpeakingScorer.js';
import type { SpeakingTask } from '../../data/speakingTasks.js';
import type { RunnerQuestion } from '../../lib/checkpointExam.js';
import type { SpeakingEvidence } from '../../lib/attemptEvidence.js';
import { speak } from '../../lib/audio.js';
import SpeakingTaskScreen from './SpeakingTaskScreen.js';

export interface ExamRunnerProps {
  questions: RunnerQuestion[];
  speaking?: { level: CefrLevel; tasks: SpeakingTask[]; scorer: SpeakingScorer };
  /** `evidence` (audit trail, 2026-08-16) carries what each speaking score
   *  was based on — transcript + rubric — when the scorer provided it. */
  onComplete: (scores: SkillScores, evidence?: { speaking?: SpeakingEvidence[] }) => void;
  /** Eyebrow label shown above the progress count. */
  title?: string;
  /** When provided, renders a close (✕) button in the top bar. */
  onExit?: () => void;
  /** Resume support (2026-08-16): start mid-MCQ with prior progress. */
  initialIdx?: number;
  initialAcc?: McqAcc;
  /** Fired after every MCQ advance so the caller can persist progress. */
  onMcqProgress?: (idx: number, acc: McqAcc) => void;
}

export type McqAcc = Partial<Record<SkillKey, { total: number; correct: number }>>;
type Acc = McqAcc;

// Human label + emoji per skill, for the skill pill.
const SKILL_META: Record<string, { label: string; icon: string }> = {
  reading: { label: 'Reading', icon: '📖' },
  grammar: { label: 'Grammar', icon: '🔤' },
  vocab: { label: 'Vocabulary', icon: '💬' },
  vocabulary: { label: 'Vocabulary', icon: '💬' },
  listening: { label: 'Listening', icon: '🎧' },
  speaking: { label: 'Speaking', icon: '🎙️' },
};

function finalize(acc: Acc, speakingScores: number[]): SkillScores {
  const out: Record<string, number> = {};
  for (const k of Object.keys(acc) as SkillKey[]) {
    const a = acc[k]!;
    if (a.total > 0) out[k] = a.correct / a.total;
  }
  if (speakingScores.length > 0) {
    out.speaking = speakingScores.reduce((s, n) => s + n, 0) / speakingScores.length;
  }
  return out as unknown as SkillScores;
}

export default function ExamRunner({
  questions,
  speaking,
  onComplete,
  title = 'Comprehension Check',
  onExit,
  initialIdx,
  initialAcc,
  onMcqProgress,
}: ExamRunnerProps) {
  const total = questions.length + (speaking?.tasks.length ?? 0);
  const [idx, setIdx] = useState(() =>
    Math.min(Math.max(initialIdx ?? 0, 0), Math.max(questions.length, 0)),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [acc, setAcc] = useState<Acc>(initialAcc ?? {});
  const [speakIdx, setSpeakIdx] = useState(0);
  const speakScores = useRef<number[]>([]); // accumulated across speaking tasks
  const speakEvidence = useRef<SpeakingEvidence[]>([]); // audit trail per scored task

  const inMcq = idx < questions.length;
  const q = inMcq ? questions[idx]! : null;
  const step = Math.min(idx + 1, total);
  const pct = total > 0 ? Math.round((step / total) * 100) : 0;
  const meta = q ? (SKILL_META[q.skill] ?? { label: q.skill, icon: '' }) : null;

  function advanceMcq(correct: 0 | 1) {
    if (!q) return;
    const prev = acc[q.skill] ?? { total: 0, correct: 0 };
    const nextAcc: Acc = {
      ...acc,
      [q.skill]: { total: prev.total + 1, correct: prev.correct + correct },
    };
    setAcc(nextAcc);
    setSelected(null);
    onMcqProgress?.(idx + 1, nextAcc);
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
    } else if (speaking && speaking.tasks.length > 0) {
      setIdx(questions.length); // enter speaking phase
    } else {
      onComplete(finalize(nextAcc, speakScores.current), collectEvidence());
    }
  }

  function next() {
    if (selected === null || !q) return;
    advanceMcq(selected === q.correctIndex ? 1 : 0);
  }

  // Skip = a MISSED question (owner decision, 2026-08-16): a learner sitting
  // above their real level must be able to move through the check instead of
  // being trapped on material they don't know. The item counts against its
  // skill exactly like a wrong answer — the check completes, the result is
  // honest, and the step-down path takes over.
  function skipMcq() {
    if (!q) return;
    advanceMcq(0);
  }

  function collectEvidence(): { speaking?: SpeakingEvidence[] } | undefined {
    return speakEvidence.current.length > 0 ? { speaking: speakEvidence.current } : undefined;
  }

  function advanceSpeaking() {
    if (speakIdx + 1 < (speaking?.tasks.length ?? 0)) {
      setSpeakIdx(speakIdx + 1);
      setIdx(idx + 1);
    } else {
      onComplete(finalize(acc, speakScores.current), collectEvidence());
    }
  }

  function onSpeakingScore(score: number, assessment?: SpeakingAssessment) {
    speakScores.current.push(score);
    if (assessment) {
      // Audit trail: keep what the score was based on. A typed fallback answer
      // still yields an assessment; its "transcript" is the typed text.
      speakEvidence.current.push({
        prompt: speaking?.tasks[speakIdx]?.prompt ?? '',
        transcript: assessment.transcript,
        scores: assessment.scores,
        overall: assessment.overall,
      });
    }
    advanceSpeaking();
  }

  // Advance WITHOUT recording a score — for learners who can't use a mic, so the
  // speaking phase can never trap them. Skipped tasks contribute no speaking
  // score (scores.speaking stays absent if all are skipped), which during shadow
  // mode never affects the result.
  function skipSpeaking() {
    advanceSpeaking();
  }

  return (
    <>
      <div className="exam-top">
        {onExit && (
          <button
            className="exam-close"
            data-testid="exam-exit"
            aria-label="Close"
            onClick={onExit}
          >
            ✕
          </button>
        )}
        <div className="exam-progress-wrap">
          <div className="exam-progress-meta">
            <span className="eyebrow">{title}</span>
            <span className="count" data-testid="exam-progress">
              {step} / {total}
            </span>
          </div>
          <div className="exam-bar">
            <i style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="exam-body" data-testid="exam-runner">
        {inMcq && q && (
          <div className="exam-col">
            <span className="q-skill">
              {meta?.icon} {meta?.label}
            </span>
            {q.passage && (
              <div className="q-passage" lang="hr">
                {q.passage}
              </div>
            )}
            {q.audioText && (
              // Listening item (Phase 4): the Croatian audio is PLAYED, never
              // shown — the item tests the ear. Replays are unlimited, matching
              // standard CEFR listening-test practice for self-paced formats.
              <button
                data-testid="exam-audio-play"
                onClick={() => {
                  void speak(q.audioText!);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '14px 16px',
                  marginBottom: 12,
                  background: 'var(--card)',
                  border: '1.5px solid var(--card-b)',
                  borderRadius: 12,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--heading)',
                }}
              >
                <span style={{ fontSize: 22 }}>🔊</span> Play the recording
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--subtext)' }}>
                  (tap again to replay)
                </span>
              </button>
            )}
            <div className="q-stem" lang={q.audioText ? 'en' : 'hr'}>
              {q.prompt}
            </div>
            {q.options.map((opt, i) => (
              <button
                key={i}
                data-testid={`answer-${i}`}
                className={`ob ob-exam${selected === i ? ' sel' : ''}`}
                onClick={() => setSelected(i)}
              >
                <span className="k">{String.fromCharCode(65 + i)}</span> {opt}
              </button>
            ))}
          </div>
        )}

        {!inMcq && speaking && (
          <div className="exam-col">
            <SpeakingTaskScreen
              key={speakIdx}
              task={speaking.tasks[speakIdx]!}
              level={speaking.level}
              scorer={speaking.scorer}
              onScore={onSpeakingScore}
            />
            <button
              className="exam-skip-speaking"
              data-testid="speak-skip"
              onClick={skipSpeaking}
              style={{
                marginTop: 14,
                background: 'none',
                border: 'none',
                color: 'var(--subtext)',
                fontSize: 12,
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              No microphone right now? Continue — finish this section later
            </button>
            <button
              data-testid="speak-skip-zero"
              onClick={() => onSpeakingScore(0)}
              style={{
                marginTop: 6,
                background: 'none',
                border: 'none',
                color: 'var(--subtext)',
                fontSize: 12,
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Skip this task — it scores 0, and the check completes honestly
            </button>
          </div>
        )}
      </div>

      {inMcq && q && (
        <div className="exam-cta">
          <div className="exam-col">
            <button
              className="b bp"
              data-testid="exam-next"
              disabled={selected === null}
              onClick={next}
            >
              Continue →
            </button>
            <button
              data-testid="exam-skip"
              onClick={skipMcq}
              style={{
                display: 'block',
                width: '100%',
                marginTop: 8,
                padding: '8px',
                background: 'none',
                border: 'none',
                color: 'var(--subtext)',
                fontSize: 12,
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              I don&apos;t know this — skip (counts as incorrect)
            </button>
          </div>
        </div>
      )}
    </>
  );
}
