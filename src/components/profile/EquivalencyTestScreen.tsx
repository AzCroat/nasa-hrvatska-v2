/**
 * src/components/profile/EquivalencyTestScreen.tsx
 *
 * CEFR Level Check runner. Renders a multi-section check — MCQ (vocab /
 * grammar / reading), then speaking, then writing — records the attempt and
 * shows pass/fail with targeted feedback.
 *
 * (Internal identifiers — the 'equivalency' screen key, recordEquivalencyAttempt,
 * the nh_cefr_certifications store — keep their historical names so existing
 * users' saved progress is preserved; only the user-facing copy says "Level
 * Check".)
 *
 * PHASE 1 MASTERY GATE (2026-08-16) — two coupled repairs live here:
 *
 * 1. STATUS-KEY RECORDING. passes[L] throughout cefrCertification means "the
 *    user holds level-L status", and the grandfather migration wrote keys that
 *    way — but this screen used to record a passed check at the set's
 *    levelFrom (the competency measured), not the levelTo status it grants,
 *    while the retake gate blocked on the same key. Passing never advanced
 *    anyone and the next visit said "already passed": every user was frozen.
 *    The screen now records at levelTo, and canTakeEquivalencyTest ignores
 *    provisional passes.
 *
 * 2. VERIFICATION MODE. When getVerificationGate().required, the check runs
 *    against the user's provisional (grandfathered, never demonstrated) level:
 *    the set that GRANTS that status (keyed levelBelow(target)). Sections are
 *    resumable — MCQ answers and completed section scores persist locally so a
 *    missing microphone or an unavailable AI evaluator delays completion by
 *    hours, never causes a false failure. There is no snooze: the gate stays
 *    until a real pass.
 *
 * UI states:
 *   - intro:  level being tested, sections, time estimate, "Begin"
 *   - cooldown: why retake is blocked + cooldown timer / lessons remaining
 *   - question: ExamRunner (MCQ + speaking)
 *   - writing: WritingTaskScreen (B1+ status checks)
 *   - pending: some section incomplete — progress saved, finish later
 *   - result: pass/fail with per-skill bars
 *
 * @see src/lib/cefrCertification.ts — recording + cooldown + gate logic
 * @see src/data/cefrEquivalencyItems.ts — item bank
 * @see src/components/exam/ExamRunner.tsx — shared MCQ+speaking runner
 * @see src/components/exam/WritingTaskScreen.tsx — writing section
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { cefrRank, levelBelow, type CefrLevel } from '../../lib/cefr.js';
import {
  canTakeEquivalencyTest,
  recordEquivalencyAttempt,
  getCertifiedLevel,
  getVerificationGate,
  isSpeakingGateEnforced,
  type SkillScores,
} from '../../lib/cefrCertification.js';
import { getNextTestFor, type EquivalencyTestSet } from '../../data/cefrEquivalencyItems.js';
import { getSpeakingTasks } from '../../data/speakingTasks.js';
import { pickWritingTask, type WritingTask } from '../../data/writingTasks.js';
import { whisperClaudeScorer } from '../../lib/speaking/whisperClaudeScorer.js';
import { applyExamScoresToAdaptive } from '../../lib/adaptiveFeedback.js';
import { recordExamSkillScores } from '../../lib/masteryLedger.js';
import ExamRunner, { type McqAcc } from '../exam/ExamRunner.js';
import WritingTaskScreen from '../exam/WritingTaskScreen.js';
import type { RunnerQuestion } from '../../lib/checkpointExam.js';

// Production sections (speaking + writing) run on every check that GRANTS B1
// status or higher — i.e. levelTo >= B1 (A1→A2 samples are too short to score
// fairly). Task difficulty is the set's levelFrom, like the MCQ items.
const PRODUCTION_FLOOR: CefrLevel = 'B1';

/** Saved section scores for a check interrupted before completion. */
const PARTIAL_KEY = 'nh_cefr_verification_partial';
const PARTIAL_TTL_MS = 48 * 60 * 60 * 1000;

interface PartialAttempt {
  toLevel: CefrLevel;
  startedAt: number;
  /** Completed-section scores — present once the MCQ section has finished. */
  scores?: SkillScores;
  /** Mid-MCQ progress (2026-08-16 "save & come back" directive): the next
   *  question index plus the per-skill tallies so far. Mutually exclusive with
   *  `scores` — once MCQ completes, the partial is rewritten in scores shape. */
  mcq?: { idx: number; acc: McqAcc };
}

function readPartial(toLevel: CefrLevel): PartialAttempt | null {
  try {
    const raw = localStorage.getItem(PARTIAL_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as PartialAttempt;
    if (!p || p.toLevel !== toLevel || typeof p.startedAt !== 'number') return null;
    if (Date.now() - p.startedAt > PARTIAL_TTL_MS) {
      localStorage.removeItem(PARTIAL_KEY);
      return null;
    }
    const hasScores = !!p.scores && typeof p.scores.vocab === 'number';
    const hasMcq = !!p.mcq && typeof p.mcq.idx === 'number' && !!p.mcq.acc;
    if (!hasScores && !hasMcq) return null;
    return p;
  } catch {
    return null;
  }
}

function writePartial(p: PartialAttempt): void {
  try {
    localStorage.setItem(PARTIAL_KEY, JSON.stringify(p));
  } catch {
    /* storage unavailable — the check simply isn't resumable on this profile */
  }
}

function clearPartial(): void {
  try {
    localStorage.removeItem(PARTIAL_KEY);
  } catch {
    /* ignore */
  }
}

interface EquivalencyTestScreenProps {
  /** User's eligible (activity-derived) level. Used to show context only. */
  userEligible: CefrLevel;
  /** User's lesson-completion count, for cooldown calc. */
  userLessonCount: number;
  /** Return to the Profile (Me) tab. */
  onBackToProfile: () => void;
  /** Optional: which specific status level to attempt. Defaults per gate/advance. */
  overrideLevel?: CefrLevel;
}

type Phase = 'intro' | 'cooldown' | 'question' | 'writing' | 'pending' | 'result';

function SkillBar({ icon, label, score }: { icon: string; label: string; score: number }) {
  const pct = Math.round(score * 100);
  const filled = Math.round(score * 10);
  const passed = score >= 0.8;
  const colour = passed ? '#16a34a' : score >= 0.5 ? '#f59e0b' : '#dc2626';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <span style={{ fontSize: 16, width: 22, flexShrink: 0 }}>{icon}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: '#374151', width: 76, flexShrink: 0 }}>
        {label}
      </span>
      <div style={{ flex: 1, display: 'flex', gap: 2 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 8,
              borderRadius: 4,
              background: i < filled ? colour : '#e5e7eb',
              transition: 'background .25s',
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 13, fontWeight: 700, color: colour, width: 56, textAlign: 'right' }}>
        {pct}%
      </span>
    </div>
  );
}

function formatCooldownEnd(at: number): string {
  const ms = at - Date.now();
  if (ms <= 0) return 'now';
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  if (days > 0) return `in ${days}d ${hours}h`;
  if (hours > 0) return `in ${hours}h`;
  return `in <1h`;
}

export default function EquivalencyTestScreen({
  userEligible,
  userLessonCount,
  onBackToProfile,
  overrideLevel,
}: EquivalencyTestScreenProps) {
  // Gate read once on mount (same reasoning as the retake gate below).
  const gate = useMemo(() => getVerificationGate(), []);
  const verificationMode = gate.required;

  // Which STATUS level this attempt would grant. Verification targets the
  // provisional level; advancement targets certified + 1 (the set keyed at
  // certified grants the next status).
  const defaultTarget: CefrLevel | null = useMemo(() => {
    if (overrideLevel) return overrideLevel;
    if (verificationMode && gate.target) return gate.target;
    const certified = getCertifiedLevel();
    const next = getNextTestFor(certified);
    return next ? next.levelTo : null;
  }, [overrideLevel, verificationMode, gate.target]);

  // Step-down: a learner verifying B1 may honestly verify A2 instead.
  const [chosenTarget, setChosenTarget] = useState<CefrLevel | null>(null);
  const target = chosenTarget ?? defaultTarget;

  // The set that GRANTS `target` status is keyed one level below it.
  const testSet: EquivalencyTestSet | null = useMemo(() => {
    if (!target) return null;
    const from = levelBelow(target);
    if (!from) return null;
    return getNextTestFor(from);
  }, [target]);

  // Retake gate read ONCE per target — re-reading mid-test would let a user
  // cycle the cooldown via UI navigation. Keyed by the STATUS the attempt
  // grants (levelTo) — the same key recordEquivalencyAttempt writes.
  const retake = useMemo(
    () => (testSet ? canTakeEquivalencyTest(testSet.levelTo, userLessonCount) : null),
    [testSet, userLessonCount],
  );

  // Resume state: sections already completed in an interrupted attempt.
  const partial = useMemo(() => (testSet ? readPartial(testSet.levelTo) : null), [testSet]);

  // Stable start-of-attempt timestamp: a resumed attempt keeps its original
  // 48h window; a fresh one starts it now (captured once, not per keystroke).
  const startedAtRef = useRef(partial?.startedAt ?? Date.now());

  const initialPhase: Phase = !testSet
    ? 'result'
    : retake && !retake.canTake
      ? 'cooldown'
      : 'intro';
  const [phase, setPhase] = useState<Phase>(initialPhase);
  const [resultPassed, setResultPassed] = useState<boolean | null>(null);
  const [resultScores, setResultScores] = useState<SkillScores | null>(null);
  const [sectionScores, setSectionScores] = useState<SkillScores | null>(partial?.scores ?? null);

  const needsProduction = !!testSet && cefrRank(testSet.levelTo) >= cefrRank(PRODUCTION_FLOOR);

  // Map the test set's items to ExamRunner's RunnerQuestion shape — skipped
  // entirely when resuming an attempt whose MCQ section is already done. A
  // mid-MCQ partial keeps the FULL list: the runner fast-forwards to the
  // saved index via initialIdx/initialAcc.
  const runnerQuestions: RunnerQuestion[] = useMemo(() => {
    if (partial && !partial.mcq) return [];
    return (testSet?.items ?? []).map((it, i) => ({
      id: `${testSet!.levelFrom}#${i}`,
      skill: it.skill,
      prompt: it.q,
      options: [...it.o], // it.o is the 4-option tuple on EquivalencyItem
      correctIndex: it.c,
      passage: it.passage,
      audioText: it.audioText,
      level: testSet!.levelFrom,
    }));
  }, [testSet, partial]);

  // Speaking section for checks granting B1+ status. Skipped on resume when a
  // speaking score is already banked.
  const speaking = useMemo(() => {
    if (!testSet || !needsProduction) return undefined;
    if (partial?.scores?.speaking !== undefined) return undefined;
    const tasks = getSpeakingTasks(testSet.levelFrom);
    if (tasks.length === 0) return undefined;
    return { level: testSet.levelFrom, tasks, scorer: whisperClaudeScorer };
  }, [testSet, needsProduction, partial]);

  const writingTask: WritingTask | null = useMemo(() => {
    if (!testSet || !needsProduction) return null;
    if (partial?.scores?.writing !== undefined) return null;
    return pickWritingTask(testSet.levelFrom);
  }, [testSet, needsProduction, partial]);

  /** Record the attempt (all required sections present) and show the result. */
  const finalizeAttempt = useCallback(
    (scores: SkillScores) => {
      const { passed } = recordEquivalencyAttempt({
        level: testSet!.levelTo,
        scores,
        currentLessonCount: userLessonCount,
      });
      clearPartial();
      // Feedback loop: a tested weakness reschedules its adaptive categories so
      // the daily session targets it next.
      applyExamScoresToAdaptive(scores);
      // Phase 2 mastery ledger: exam sections are the strongest evidence there
      // is — fold every scored skill in at high weight, attributed to the
      // status level this attempt targets.
      recordExamSkillScores(testSet!.levelTo, scores);
      setResultPassed(passed);
      setResultScores(scores);
      setPhase('result');
    },
    [testSet, userLessonCount],
  );

  /** After a section completes, either continue to the next one, park the
   *  attempt (required section unfinishable right now), or finalize. */
  const advanceFrom = useCallback(
    (merged: SkillScores) => {
      setSectionScores(merged);
      const speakingMissing = needsProduction && merged.speaking === undefined;
      const writingMissing = needsProduction && merged.writing === undefined;
      if (writingMissing && writingTask) {
        setPhase('writing');
        return;
      }
      if (speakingMissing || writingMissing) {
        // A required production section has no score (mic skipped / evaluator
        // unavailable). Never record this as a failure — park it.
        writePartial({
          toLevel: testSet!.levelTo,
          startedAt: partial?.startedAt ?? Date.now(),
          scores: merged,
        });
        setPhase('pending');
        return;
      }
      finalizeAttempt(merged);
    },
    [needsProduction, writingTask, testSet, partial, finalizeAttempt],
  );

  // Called by ExamRunner when MCQ + speaking sections finish.
  const onExamComplete = useCallback(
    (scores: SkillScores) => {
      const base = sectionScores ?? ({} as Partial<SkillScores>);
      const merged = { ...base, ...scores } as SkillScores;
      advanceFrom(merged);
    },
    [sectionScores, advanceFrom],
  );

  const onWritingScore = useCallback(
    (score: number) => {
      const merged = { ...(sectionScores ?? ({} as SkillScores)), writing: score } as SkillScores;
      advanceFrom(merged);
    },
    [sectionScores, advanceFrom],
  );

  const onWritingDefer = useCallback(() => {
    if (!sectionScores) return;
    writePartial({
      toLevel: testSet!.levelTo,
      startedAt: partial?.startedAt ?? Date.now(),
      scores: sectionScores,
    });
    setPhase('pending');
  }, [sectionScores, testSet, partial]);

  // Persist mid-MCQ progress after every answered/skipped question so "save &
  // come back later" works from any point in the check, not just at section
  // boundaries. Once the MCQ section completes, advanceFrom/onWritingDefer
  // rewrite the partial in scores shape (or finalizeAttempt clears it).
  const onMcqProgress = useCallback(
    (idx: number, acc: McqAcc) => {
      writePartial({
        toLevel: testSet!.levelTo,
        startedAt: startedAtRef.current,
        mcq: { idx, acc },
      });
    },
    [testSet],
  );

  /** Begin/resume: route straight to whichever section is actually missing —
   *  an ExamRunner with no questions AND no speaking section renders nothing.
   *  A mid-MCQ partial (no scores yet) falls through to 'question'; the
   *  runner fast-forwards via initialIdx/initialAcc. */
  const startCheck = useCallback(() => {
    if (partial?.scores) {
      const s = partial.scores;
      const speakingMissing = needsProduction && s.speaking === undefined;
      const writingMissing = needsProduction && s.writing === undefined;
      if (!speakingMissing && !writingMissing) {
        finalizeAttempt(s);
        return;
      }
      if (!speakingMissing && writingMissing) {
        setPhase('writing');
        return;
      }
    }
    setPhase('question');
  }, [partial, needsProduction, finalizeAttempt]);

  // No-test edge case: user is already C2 (no further test exists).
  if (!testSet) {
    return (
      <div className="scr-wrap">
        <div style={{ padding: 20, textAlign: 'center' }}>
          <div style={{ fontSize: 56 }}>🎓</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", margin: '12px 0 6px' }}>
            You're at the top
          </h2>
          <p style={{ color: 'var(--subtext)', fontSize: 14, marginBottom: 18 }}>
            You've confirmed the most advanced Level Check in this app. Beyond it lies
            native-equivalent fluency, measured by formal external providers.
          </p>
          <button
            onClick={onBackToProfile}
            style={{
              padding: '12px 22px',
              background: 'linear-gradient(135deg,#0e7490,#0a5c73)',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  // ── Intro ────────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="scr-wrap">
        <div style={{ padding: '18px 16px' }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: '#cc0000', letterSpacing: '.22em' }}>
            {verificationMode ? 'CEFR LEVEL VERIFICATION' : 'CEFR LEVEL CHECK'}
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 26,
              margin: '6px 0 12px',
              color: 'var(--heading)',
            }}
          >
            {verificationMode ? `Verify ${target}` : `${testSet.levelFrom} → ${testSet.levelTo}`}
          </h2>
          <p style={{ fontSize: 14, color: 'var(--subtext)', lineHeight: 1.6, marginBottom: 18 }}>
            {verificationMode
              ? `Your ${target} level was carried over from your activity — this check makes it real. Pass it and everything continues exactly where you left off, now on demonstrated ground.`
              : testSet.description}
          </p>
          {partial && (
            <div
              style={{
                background: 'rgba(22,163,74,0.07)',
                border: '1.5px solid rgba(22,163,74,0.25)',
                borderRadius: 12,
                padding: '10px 14px',
                marginBottom: 14,
                fontSize: 13,
                color: '#15803d',
                fontWeight: 600,
              }}
            >
              {partial.mcq
                ? `✓ Your earlier answers are saved — you'll continue from question ${partial.mcq.idx + 1}.`
                : `✓ Your earlier answers are saved — only the remaining section${
                    partial.scores?.speaking === undefined && partial.scores?.writing === undefined
                      ? 's'
                      : ''
                  } will run.`}
            </div>
          )}
          <div
            style={{
              background: 'var(--card)',
              border: '1.5px solid var(--card-b)',
              borderRadius: 12,
              padding: '14px 16px',
              marginBottom: 14,
            }}
          >
            <p style={{ fontWeight: 800, marginBottom: 8, color: 'var(--heading)' }}>
              What to expect
            </p>
            <ul style={{ paddingLeft: 18, fontSize: 13, color: 'var(--subtext)', lineHeight: 1.6 }}>
              {(!partial || partial.mcq) && <li>{testSet.items.length} multiple-choice items</li>}
              {!partial && <li>~{testSet.minutes} minutes</li>}
              {(!partial || partial.mcq) && (
                <li>
                  Mix of vocabulary, grammar, reading and listening comprehension (🎧 audio plays
                  aloud)
                </li>
              )}
              {needsProduction && (
                <li>A short speaking task (🎙️ required) — you'll need a microphone</li>
              )}
              {needsProduction && <li>A short writing task (✍️ required)</li>}
              <li>
                Pass = <b>80%+</b> overall AND on every skill
              </li>
              <li>
                Stuck on something? Every question and task can be skipped — a skip counts as
                incorrect, so the result stays honest.
              </li>
              <li>
                Need to stop mid-check? Your progress saves after every question — close with ✕ and
                come back within 48 hours to continue where you were.
              </li>
              <li>
                No mic right now, or evaluation unavailable? Your progress saves — finish the
                remaining section within 48 hours.
              </li>
              <li>Fail = 7-day cooldown OR 5 more lessons before retry</li>
            </ul>
          </div>
          <div
            style={{
              background: 'rgba(204,0,0,0.06)',
              border: '1.5px solid rgba(204,0,0,0.2)',
              borderRadius: 12,
              padding: '12px 14px',
              marginBottom: 18,
              fontSize: 13,
              color: '#a30000',
              lineHeight: 1.5,
            }}
          >
            <b>Real fluency only.</b> Your eligible level (<b>{userEligible}</b>) reflects activity.
            Passing this check demonstrates the competency that <b>{target}</b> stands on. It's an
            in-app proficiency check, not an accredited external certificate.
          </div>
          <button
            data-testid="equivalency-begin"
            onClick={startCheck}
            style={{
              display: 'block',
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg,#16a34a,#15803d)',
              color: '#fff',
              border: 'none',
              borderRadius: 14,
              fontSize: 16,
              fontWeight: 800,
              cursor: 'pointer',
              marginBottom: 10,
            }}
          >
            {partial ? 'Finish the check →' : 'Begin Check →'}
          </button>
          {verificationMode && gate.options.length > 1 && !chosenTarget && (
            <button
              data-testid="equivalency-stepdown"
              onClick={() => {
                const lower = gate.options.find((l) => cefrRank(l) < cefrRank(target!));
                if (lower) setChosenTarget(lower);
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                background: 'transparent',
                color: 'var(--subtext)',
                border: '1.5px solid var(--card-b)',
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: 10,
              }}
            >
              Not ready for {target}? Verify{' '}
              {gate.options.find((l) => cefrRank(l) < cefrRank(target!))} instead
            </button>
          )}
          <button
            onClick={onBackToProfile}
            style={{
              display: 'block',
              width: '100%',
              padding: '12px',
              background: 'transparent',
              color: 'var(--subtext)',
              border: '1.5px solid var(--card-b)',
              borderRadius: 12,
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {verificationMode ? 'Back (practice below your gate stays open)' : 'Cancel'}
          </button>
        </div>
      </div>
    );
  }

  // ── Cooldown ────────────────────────────────────────────────────────────
  if (phase === 'cooldown') {
    if (!retake) return null;
    return (
      <div className="scr-wrap">
        <div style={{ padding: '24px 18px', textAlign: 'center' }}>
          <div style={{ fontSize: 56 }}>⏳</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", margin: '10px 0 4px' }}>
            Retake on cooldown
          </h2>
          <p style={{ color: 'var(--subtext)', fontSize: 14, lineHeight: 1.6, marginBottom: 18 }}>
            {retake.reason === 'already_passed'
              ? `You've already demonstrated ${testSet.levelTo}. No need to retake.`
              : retake.cooldownUntil
                ? `You can retake the ${testSet.levelTo} check ${formatCooldownEnd(retake.cooldownUntil)} — or sooner if you complete ${retake.lessonsRemaining} more lesson${retake.lessonsRemaining === 1 ? '' : 's'}. That practice is the preparation, not a punishment.`
                : 'Retake unavailable for now.'}
          </p>
          <button
            onClick={onBackToProfile}
            style={{
              padding: '12px 22px',
              background: 'linear-gradient(135deg,#0e7490,#0a5c73)',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  // ── Question (MCQ + speaking, via shared runner) ────────────────────────
  if (phase === 'question') {
    return (
      <div className="scr-wrap">
        <ExamRunner
          questions={runnerQuestions}
          speaking={speaking}
          onComplete={onExamComplete}
          title={verificationMode ? 'Level Verification' : 'Level Check'}
          initialIdx={partial?.mcq?.idx}
          initialAcc={partial?.mcq?.acc}
          onMcqProgress={onMcqProgress}
          onExit={onBackToProfile}
        />
      </div>
    );
  }

  // ── Writing section ─────────────────────────────────────────────────────
  if (phase === 'writing' && writingTask) {
    return (
      <div className="scr-wrap">
        <div style={{ padding: '18px 16px' }}>
          <WritingTaskScreen
            task={writingTask}
            level={testSet.levelFrom}
            onScore={onWritingScore}
            onDefer={onWritingDefer}
          />
        </div>
      </div>
    );
  }

  // ── Pending (a required section couldn't be completed right now) ────────
  if (phase === 'pending') {
    const missingSpeaking = sectionScores?.speaking === undefined;
    return (
      <div className="scr-wrap">
        <div style={{ padding: '24px 18px', textAlign: 'center' }}>
          <div style={{ fontSize: 56 }}>{missingSpeaking ? '🎙️' : '✍️'}</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", margin: '10px 0 4px' }}>
            Almost there — one section left
          </h2>
          <p style={{ color: 'var(--subtext)', fontSize: 14, lineHeight: 1.6, marginBottom: 18 }}>
            Your answers so far are saved.{' '}
            {missingSpeaking
              ? 'Come back within 48 hours with a working microphone to finish the speaking section — only that section will run.'
              : 'Come back within 48 hours to finish the writing section — only that section will run.'}{' '}
            Nothing is marked as failed.
          </p>
          <button
            data-testid="verification-pending-back"
            onClick={onBackToProfile}
            style={{
              padding: '14px 22px',
              background: 'linear-gradient(135deg,#0e7490,#0a5c73)',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontWeight: 800,
              fontSize: 14,
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  // ── Result ──────────────────────────────────────────────────────────────
  if (phase === 'result' && resultScores) {
    const passed = resultPassed === true;
    return (
      <div className="scr-wrap">
        <div style={{ padding: '20px 18px', textAlign: 'center' }}>
          <div style={{ fontSize: 64 }}>{passed ? '🎉' : '💪'}</div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 28,
              margin: '8px 0 4px',
              color: passed ? '#16a34a' : '#dc2626',
            }}
          >
            {passed
              ? verificationMode
                ? `${testSet.levelTo} verified`
                : `Confirmed ${testSet.levelTo}`
              : 'Not yet'}
          </h2>
          <p style={{ color: 'var(--subtext)', fontSize: 14, marginBottom: 18 }}>
            {passed
              ? verificationMode
                ? `Your ${testSet.levelTo} now stands on demonstrated skill. Everything unlocks again — onward.`
                : `You've demonstrated the competency ${testSet.levelTo} stands on. ${testSet.levelTo} content is unlocked.`
              : `You need 80% on every skill. Keep practicing — the lessons below your level are the preparation. Retest after 5 more lessons or 7 days.`}
          </p>
          <div
            style={{
              background: 'var(--card)',
              border: '1.5px solid var(--card-b)',
              borderRadius: 12,
              padding: '16px 14px',
              marginBottom: 18,
              textAlign: 'left',
            }}
          >
            <p style={{ fontWeight: 800, color: 'var(--heading)', marginBottom: 12 }}>
              Your skill breakdown
            </p>
            <SkillBar icon="📚" label="Vocabulary" score={resultScores.vocab} />
            <SkillBar icon="📝" label="Grammar" score={resultScores.grammar} />
            {resultScores.reading !== undefined && (
              <SkillBar icon="📖" label="Reading" score={resultScores.reading} />
            )}
            {resultScores.listening !== undefined && (
              <SkillBar icon="🎧" label="Listening" score={resultScores.listening} />
            )}
            {resultScores.speaking !== undefined && (
              <SkillBar icon="🎙️" label="Speaking" score={resultScores.speaking} />
            )}
            {resultScores.writing !== undefined && (
              <SkillBar icon="✍️" label="Writing" score={resultScores.writing} />
            )}
          </div>
          {resultScores.speaking !== undefined && !isSpeakingGateEnforced() && (
            <p style={{ fontSize: 12, color: 'var(--subtext)', marginTop: -8, marginBottom: 16 }}>
              🎙️ Speaking is shown for now and isn&apos;t required to confirm your level yet — but
              fluency means speaking, so it will become part of the Level Check soon.
            </p>
          )}
          <button
            onClick={onBackToProfile}
            style={{
              padding: '14px 22px',
              background: 'linear-gradient(135deg,#0e7490,#0a5c73)',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontWeight: 800,
              fontSize: 14,
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  return null;
}
