// src/lib/checkpointExam.ts
import type { CefrLevel } from './cefr.js';
import { CEFR_ORDER, cefrRank } from './cefr.js';
import type { SkillKey, CertificationState } from './cefrCertification.js';
import { buildCheckpointBlueprint } from './examBlueprint.js';
import { composeExam, pick, type ComposerBanks, type ExamItem, type Rng } from './examComposer.js';
// Item banks are imported DYNAMICALLY inside buildCheckpointExam, not here.
// These two are the only static edges the first-paint graph had into chunk-data
// once the saved-phrases one was cut, and they exist for code that runs when a
// learner starts a checkpoint — never at startup. A static import here put the
// whole 212 kB chunk-data on the blocking path, because AppModals (rendered by
// App) calls useCheckpoint, which imports this module. Type-only imports are
// erased by the compiler and cost nothing, so they stay static.
import type * as EquivalencyItems from '../data/cefrEquivalencyItems.js';
import type * as SpeakingTasks from '../data/speakingTasks.js';
import type { SpeakingTask } from '../data/speakingTasks.js';
import { CHECKPOINT_CORE_COUNT } from './checkpointConfig.js';

export interface RunnerQuestion {
  id: string;
  skill: SkillKey;
  prompt: string;
  options: string[];
  correctIndex: number;
  passage?: string;
  /** Listening items: Croatian text spoken via TTS, never displayed. */
  audioText?: string;
  level: CefrLevel;
}

export interface CheckpointExam {
  level: CefrLevel;
  questions: RunnerQuestion[];
  speaking: { level: CefrLevel; tasks: SpeakingTask[] };
}

// Signatures are taken from the real modules (type-only, so still erased) rather
// than hand-written, so a change to either bank's API is a compile error here
// instead of a runtime surprise inside a checkpoint.
type Banks = {
  getCheckpointSetFor: typeof EquivalencyItems.getCheckpointSetFor;
  getSpeakingTasks: typeof SpeakingTasks.getSpeakingTasks;
};

/**
 * Fetch the item banks, warming the chunk on first call.
 *
 * The promise is cached, so calling this early (see useCheckpoint's `prefetch`,
 * fired when the checkpoint invite appears) costs a click-to-exam delay of
 * nothing while still keeping the banks off the startup path. Concurrent callers
 * share one download.
 */
let banksPromise: Promise<Banks> | null = null;
export function loadCheckpointBanks(): Promise<Banks> {
  banksPromise ??= Promise.all([
    import('../data/cefrEquivalencyItems.js'),
    import('../data/speakingTasks.js'),
  ]).then(([items, speaking]) => ({
    getCheckpointSetFor: items.getCheckpointSetFor,
    getSpeakingTasks: speaking.getSpeakingTasks,
  }));
  return banksPromise;
}

/**
 * Map the equivalency item bank for `level` into renderable questions.
 * NOTE: EquivalencyItem stores answers in field `o` (not `options`).
 */
function questionsForLevel(
  level: CefrLevel,
  getCheckpointSetFor: Banks['getCheckpointSetFor'],
): RunnerQuestion[] {
  const set = getCheckpointSetFor(level); // set.levelFrom === level tests `level` competency
  if (!set) return [];
  return set.items.map((it, i) => ({
    id: `${level}#${i}`,
    skill: it.skill as SkillKey,
    prompt: it.q,
    options: [...it.o], // EquivalencyItem uses `o`, not `options`
    correctIndex: it.c,
    passage: it.passage,
    audioText: it.audioText,
    level,
  }));
}

/**
 * Builds a concrete checkpoint exam: CHECKPOINT_CORE_COUNT current-level
 * questions, 2 retention questions from below (weak-skill-weighted, via the
 * Plan 1 composer), and the speaking section (2 tasks if speaking was flagged,
 * else 1). Retention questions keep their lower level so the runner folds them
 * into the right skill bucket — retention counts toward the gate.
 *
 * ASYNC because the item banks are code-split (see loadCheckpointBanks). Nothing
 * about the exam itself is asynchronous; the await is the chunk fetch, and it is
 * already resolved whenever the caller prefetched.
 */
export async function buildCheckpointExam(
  level: CefrLevel,
  certState: CertificationState,
  weakSkills: SkillKey[],
  rng: Rng,
): Promise<CheckpointExam> {
  const { getCheckpointSetFor, getSpeakingTasks } = await loadCheckpointBanks();

  // Build lookup of every below-level + current-level question by composer id.
  const levels = CEFR_ORDER.filter((l) => cefrRank(l) <= cefrRank(level));
  const lookup = new Map<string, RunnerQuestion>();
  const itemsByLevel: ComposerBanks['itemsByLevel'] = {};
  for (const lvl of levels) {
    const qs = questionsForLevel(lvl, getCheckpointSetFor);
    qs.forEach((q) => lookup.set(q.id, q));
    itemsByLevel[lvl] = qs.map<ExamItem>((q) => ({ id: q.id, skill: q.skill, level: q.level }));
  }

  const tasks = getSpeakingTasks(level);
  const speakingFlagged = (certState.checkpoints.focusSkills[level] ?? []).includes(
    'speaking' as SkillKey,
  );
  const bp = buildCheckpointBlueprint(level, { speakingFlagged });
  const banks: ComposerBanks = {
    itemsByLevel,
    speakingTasksByLevel: { [level]: tasks.map((t) => ({ id: t.id })) },
  };
  const composed = composeExam(bp, banks, { weakTopics: weakSkills }, rng);

  // Core: composer returns ALL current-level items → sample CHECKPOINT_CORE_COUNT.
  const core = pick(composed.coreItems, CHECKPOINT_CORE_COUNT, rng)
    .map((it) => lookup.get(it.id)!)
    .filter(Boolean);
  const retention = composed.retentionItems.map((it) => lookup.get(it.id)!).filter(Boolean);

  const tasksById = new Map(tasks.map((t) => [t.id, t]));
  const speakingTasks = composed.speakingTasks.map((s) => tasksById.get(s.id)!).filter(Boolean);

  return { level, questions: [...core, ...retention], speaking: { level, tasks: speakingTasks } };
}
