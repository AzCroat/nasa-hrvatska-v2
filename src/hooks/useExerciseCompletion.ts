// src/hooks/useExerciseCompletion.ts
// The single completion authority. Every score-bearing/productive/reference screen
// routes its completion write through completeExercise, which reads EXERCISE_COMPLETION
// to decide the policy:
//   gated   — credited only when passedLesson(score,total) (>= 75%)
//   effort  — credited on genuine finish (no MCQ correctness)
//   passive — credited on read/dwell
// It owns the idempotent vs write, the counter increment, the XP award and the quest mark,
// so no component hand-rolls completion logic. completeLesson is a thin wrapper (below).
import { passedLesson } from '../lib/lessonGate';
import { markQuest } from '../lib/quests';
import { EXERCISE_COMPLETION, type StatKind } from '../lib/completion/exerciseRegistry';
import { consumeSessionCategoryOutcome } from '../lib/sessionCategory';
import { signalSessionCompleteIfActive, EXERCISE_COMPLETE_EVENT } from '../lib/sessionSignal';
import { recordExerciseOutcome } from '../lib/masteryLedger';
import { recordLessonTaught, recordScreenPractised } from '../lib/teachPractice';

interface MinStats {
  vs?: string[];
  lc?: number;
  gc?: number;
  sp?: number;
  rc?: number;
}

interface CompleteExerciseArgs<S extends MinStats> {
  /** Registry key (also the vs flag string, unless the registry overrides vsKey). */
  key: string;
  /** Required for `gated` policy; omitted for effort/passive. */
  score?: number;
  total?: number;
  xp: number;
  stats: S;
  setStats: (fn: (prev: S) => S) => void;
  writeDelta?: (delta: Record<string, unknown>) => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
  // Optional overrides — used by completeLesson to preserve exact legacy behavior.
  statKind?: StatKind;
  questKind?: string;
  activityType?: string;
  /** Pass-through to award()'s celebrate flag (e.g. SentenceTile fires confetti). */
  celebrate?: boolean;
  /**
   * Pay `xp` again on a passing finish the screen has ALREADY been credited for.
   *
   * Default false — the gc/vs credit is always once-only, and for most screens the
   * completion bonus is part of that one-time credit. But a handful of drills are
   * built for repeat play (Match Pairs, Cloze's own "Play Again" button, Numbers &
   * Time, the gender drill, the reflexive quiz) and have always paid their finish
   * XP on EVERY run; useAward's per-day `xpCooldown` is what limits farming there,
   * not the vs flag. Those screens opt in so routing them through this authority
   * doesn't quietly demote a per-run bonus to a once-ever one.
   */
  awardOnReplay?: boolean;
}

export function completeExercise<S extends MinStats>(
  args: CompleteExerciseArgs<S>,
): {
  passed: boolean;
} {
  const { key, score, total, xp, stats, setStats, writeDelta, award } = args;
  // Advance the adaptive category schedule with REAL accuracy when this finish
  // corresponds to a Today's Session adaptive activity. Runs on every attempt
  // (pass or fail) so a struggled category reschedules instead of repeating
  // forever; no-op outside the daily session. This is the write that was missing
  // and caused the session to serve the same grammar category every day.
  consumeSessionCategoryOutcome(score, total);
  // Advance Today's Session on genuine FINISH — pass or fail. Forcing a 75% pass
  // to advance stranded learners on hard drills (e.g. genitive) and blocked the
  // rest of their daily session. Credit/XP below is still gated on a pass; only
  // the session's progress is unblocked. No-op outside the daily session, and —
  // because setTab clears nh_session_started on tab-away — it cannot complete an
  // activity the user abandoned by switching tabs and then finishing another drill.
  signalSessionCompleteIfActive();
  const entry = EXERCISE_COMPLETION[key];
  const policyKind = entry?.policy.kind ?? 'gated';
  const statKind: StatKind = args.statKind ?? entry?.policy.statKind ?? 'gc';
  const vsKey = entry?.vsKey ?? key;
  const questKind = args.questKind ?? entry?.questKind;
  const activityType = args.activityType ?? entry?.activityType ?? 'lesson';

  // Phase 2 mastery ledger: every scored finish is EVIDENCE, pass or fail —
  // the ledger measures ability, credit below still gates on a pass. Types
  // without an honest skill signal ('lesson') are skipped inside the adapter.
  recordExerciseOutcome({ activityType, score, total });

  // gated screens require a pass; effort/passive complete on the call itself.
  const passed = policyKind === 'gated' ? passedLesson(score ?? 0, total ?? 0) : true;

  // Constant next-step prompt (owner directive, 2026-08-16): every graded
  // finish — pass or fail — announces itself so the App-mounted
  // NextStepPrompt can offer the single best next action. Fire-and-forget;
  // UI concerns stay out of this accounting chokepoint.
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(EXERCISE_COMPLETE_EVENT, { detail: { key, passed } }));
    }
  } catch {
    /* a UI event must never break completion accounting */
  }

  if (!passed) return { passed: false };
  // Teach → practice coupling (2026-08-20). A lesson queues the category it
  // taught so the next session claims a slot for its drill; any other finish
  // clears the queue entry for the category it just practised.
  //
  // Placed BEFORE the already-credited early return on purpose: a learner
  // repeating a drill they were credited for months ago has still practised the
  // concept, and the coupling must clear for them too. Putting this after that
  // return would leave the queue stuck for exactly the learners who practise
  // most. Both calls are best-effort — the storage helpers swallow their own
  // errors so nothing here can throw into a completion path.
  if (activityType === 'lesson') {
    recordLessonTaught(key);
  } else {
    // Clears on the ROUTE as well as the pool tag — see recordScreenPractised.
    // Tag-only clearing left 18 of 62 mappings stuck for their full TTL,
    // because several categories share one screen (cloze, aspectdrill) and
    // writing_guided has no pool entry at all.
    recordScreenPractised(key);
  }
  if (stats.vs?.includes(vsKey)) {
    // Already credited — never a second gc/vs write. See awardOnReplay above for
    // why a few repeat-play drills still pay their finish XP here.
    if (args.awardOnReplay && award) award(xp, args.celebrate ?? false, activityType);
    return { passed: true };
  }

  setStats((prev) => {
    if (prev.vs?.includes(vsKey)) return prev;
    const next = { ...prev, vs: [...(prev.vs || []), vsKey] };
    next[statKind] = ((prev[statKind] as number) || 0) + 1;
    return next;
  });
  if (writeDelta) writeDelta({ [statKind]: 1, vs: [vsKey] });
  if (award) award(xp, args.celebrate ?? false, activityType);
  if (questKind) markQuest(questKind);
  return { passed: true };
}
