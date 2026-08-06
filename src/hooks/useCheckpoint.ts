// src/hooks/useCheckpoint.ts
import { useState, useCallback, useRef } from 'react';
import type { CefrLevel } from '../lib/cefr.js';
import type { SkillScores, SkillKey } from '../lib/cefrCertification.js';
import { getCertificationState, writeCertificationState } from '../lib/cefrCertification.js';
import { recordCheckpointResult } from '../lib/checkpointStore.js';
import {
  buildCheckpointExam,
  loadCheckpointBanks,
  type CheckpointExam,
} from '../lib/checkpointExam.js';
import type { CheckpointOutcome } from '../lib/checkpointPolicy.js';
import { whisperClaudeScorer } from '../lib/speaking/whisperClaudeScorer.js';

type Phase = 'idle' | 'running' | 'result';

export interface UseCheckpointArgs {
  certifiedLevel: CefrLevel;
  weakSkills: SkillKey[];
  activeDayCount: number;
}

/** Seeded-free RNG is fine at runtime (determinism only matters in tests). */
function rng() {
  return Math.random();
}

export function useCheckpoint({ certifiedLevel, weakSkills, activeDayCount }: UseCheckpointArgs) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [exam, setExam] = useState<CheckpointExam | null>(null);
  const [outcome, setOutcome] = useState<CheckpointOutcome | null>(null);

  // Bumped by every state transition the learner can trigger. `start` is async
  // now (the item banks are code-split), so between the click and the banks
  // arriving the learner can snooze or exit — and without this guard the exam
  // would then open on top of the screen they moved to. A stale build is
  // discarded rather than applied.
  const generation = useRef(0);

  /**
   * Warm the item-bank chunk. Safe to call repeatedly — the promise is cached.
   * Fired when the checkpoint invite is shown, so the fetch overlaps the time
   * the learner spends reading it and `start` finds it already resolved.
   */
  const prefetch = useCallback(() => {
    void loadCheckpointBanks().catch(() => {});
  }, []);

  const start = useCallback(async () => {
    const mine = ++generation.current;
    let built: CheckpointExam;
    try {
      built = await buildCheckpointExam(certifiedLevel, getCertificationState(), weakSkills, rng);
    } catch {
      // Chunk fetch failed (offline, or a deploy rolled the asset). Stay idle so
      // the invite remains and the learner can try again, rather than stranding
      // them in a 'running' phase with no exam.
      return;
    }
    if (mine !== generation.current) return; // snoozed/exited while loading
    setExam(built);
    setPhase('running');
  }, [certifiedLevel, weakSkills]);

  const complete = useCallback(
    (scores: SkillScores) => {
      const o = recordCheckpointResult({ level: certifiedLevel, scores, activeDayCount });
      setOutcome(o);
      setPhase('result');
    },
    [certifiedLevel, activeDayCount],
  );

  const snooze = useCallback((until: number) => {
    generation.current++; // cancels an in-flight start()
    const s = getCertificationState();
    s.checkpoints.snoozedUntil = until;
    writeCertificationState(s);
    setPhase('idle');
  }, []);

  const reset = useCallback(() => {
    generation.current++; // cancels an in-flight start()
    setPhase('idle');
    setExam(null);
    setOutcome(null);
  }, []);

  return {
    phase,
    exam,
    outcome,
    scorer: whisperClaudeScorer,
    prefetch,
    start,
    complete,
    snooze,
    reset,
  };
}
