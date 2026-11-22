// src/lib/keepLearning.ts
//
// KEEP LEARNING (owner decision, 2026-09-29 — replaces the Stretch, AUDIT-STATE
// sweep 216).
//
// The owner, on the Stretch: "I don't like stretch design, its not guiding the
// learner to keep learning. We need to keep users engaged do we not?" — and then,
// deciding what the extra time is FOR: "I think we need to not try to teach new
// concepts but review those that the learner has not proven mastery."
//
// So a finished core session is followed by a continuous REVIEW flow, not by more
// lessons and not by an end screen. One new lesson a day stays where it was (P0 in
// the core session). After the core, Home shows KEEP LEARNING and a block of about
// KEEP_BLOCK_LENGTH items; finishing the block appends the next one at once, for
// as long as the learner keeps going. There is no terminal state.
//
// WHAT A BLOCK MAY HOLD: only taught material the learner has not proven, ranked
// from the stores the app already measures, in the owner's order —
//   1. a lesson whose latest real check failed (concept map `notpassed`): its
//      coupled drill, or its missed items in Lesson Review. The check itself is
//      never offered (`checkLock` closes it until tomorrow, and the corrective day
//      serves it then);
//   2. open missed items and due re-checks (Lesson Review);
//   3. `shaky` and `due` concepts, as their coupled drill (the easier route when
//      the primary is locked above the course level), then adaptive categories
//      MEASURED below the pass mark among categories the course has taught;
//   4. (none — passed lessons and units come back only when their check-up is due,
//      tier 2; owner 2026-11-19);
//   5. SRS words due;
//   6. the weakest MEASURED production or receptive skill, done at the course level;
//   7. only when nothing above remains: the fluency round over mastered lessons,
//      then guided speaking and writing at the course level. These repeat, which is
//      what makes the flow endless without ever inventing a weakness.
// 3.5 (owner, 2026-11-19, reversing 2026-09-29): between 3 and 4, the course's own
// next step — lesson, unit test, owed production, level review — so a learner who
// knows the material moves forward. Never a check (checkLock closes it).
//
// ONLY MEASURED EVIDENCE IS CALLED EVIDENCE (NEVER-DO 13). Every item carries the
// reason its store supports; tier 7 says what it is ("everything taught so far is
// proven") and never a number it does not hold.
//
// ONE ITEM A DAY, OR RECURRING — AND WHY IDS, NOT SCREENS. A concept's drill is
// served once a day (its id, `keep_drill_<lesson>`, stays in the plan), because
// doing the drill does not move the concept map — serving it again every block
// would be the same prompt for ever. Lesson Review, SRS review, the fluency round
// and guided production RECUR while they have something to serve, so their ids
// carry the block number. That means one screen can appear several times in a
// day, which the Stretch forbade because `markDone` matched the FIRST activity
// with a screen; `markDone` now matches the first UNFINISHED activity, by id and
// then by screen (useDailySession), and Home only ever launches the first
// unfinished activity, so the launched one and the credited one are the same.
//
// `selectProduction` is INJECTED because it lives in `hooks/useDailySession`,
// which imports this module — importing it back would be a cycle.

import { fluencyAvailable } from './fluencyRound';
import { readTaughtTerms } from './taughtTerms';
import type { DailySession, SessionActivity } from './dailySessionStore';
import { MINUTES_PER_ACTIVITY } from './dailySessionStore';
import { selectRetentionSlot } from './retentionSlot';
import { buildConceptMap, type ConceptEntry, type ConceptMap } from './conceptMap';
import { readRetention } from './lessonRetention';
import { drilledSince } from './drillStamps';
import { bookQuizFor } from './bookQuizzes';
import { latestLessonAttempt } from './correctiveDay';
import { readCurriculumSpine } from './curriculumProgress';
import {
  readCourseState,
  nextCourseStep,
  recommendedCourseSteps,
  type CourseStep,
  unitTestActivityId,
  unitProductionActivityId,
  levelReviewActivityId,
} from './courseStep';
import { getMasteryLedger, weakestProductionKind, weakestReceptiveKind } from './masteryLedger';
import { getDueCategoryQueue, getCategoryStatus, type SkillCategory } from './adaptive';
import { readCourseAhead } from './courseGate';
import { checkLockedToday } from './checkLock';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from './categoryRoutes';
import { CEFR_ORDER, isUnlocked, type CefrLevel } from './cefr';
import { LESSON_PASS_THRESHOLD } from './lessonCheck';
import { LESSON_TAUGHT_CATEGORY } from './teachPractice';
import { selectGuaranteedInput } from './inputSlot';
import {
  adaptiveReason,
  inputSlotReason,
  productionReason,
  reviewReason,
  withReason,
  fluencyReason,
} from './activityReason';

/** Items per Keep Learning block — about a session's worth, without a lesson. */
export const KEEP_BLOCK_LENGTH = 4;

export interface KeepDeps {
  /** Servable word reviews due right now (the hook already computes it). */
  dueReviews: number;
  micBlocked: boolean;
  recentScreens: string[];
  selectProduction: (opts: {
    cefr: string;
    excludeScreens: string[];
    kindBias?: 'speak' | 'write' | 'converse';
  }) => SessionActivity | null;
}

/** 3.5 is the course's own next step (owner, 2026-11-19), between tiers 3 and 4. */
export type KeepTier = 1 | 2 | 3 | 3.5 | 4 | 5 | 6 | 7;

export interface KeepCandidate {
  activity: SessionActivity;
  tier: KeepTier;
  /** Speaking or listening — the modality a tie inside a tier resolves toward. */
  spoken: boolean;
}

/** True when an open lesson has taught a case, or when the course is unknown. */
function casesTaught(): boolean {
  const t = readTaughtTerms();
  if (!t) return true;
  return [
    'nominative',
    'accusative',
    'genitive',
    'dative',
    'locative',
    'instrumental',
    'vocative',
  ].some((c) => t.has(c));
}

function titleCase(category: string): string {
  return category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** The drill for a category at this level: the mapped route, else the easier one. */
function routeCategory(
  category: SkillCategory,
  level: string,
  used: ReadonlySet<string>,
): string | null {
  for (const screen of [CATEGORY_SCREEN_MAP[category], CATEGORY_EASIER_SCREEN[category]]) {
    if (!screen || used.has(screen)) continue;
    const cefr = SCREEN_CEFR[screen];
    if (cefr && !isUnlocked(cefr, level)) continue;
    return screen;
  }
  return null;
}

/**
 * The levels at which the mastery ledger may hold a verdict, the course level
 * first. A learner the course started at Unit 1 while their history sits at B2
 * has every production and comprehension measurement in B2 cells, so asking only
 * the course level reported NOTHING MEASURED for a learner whose speaking the
 * ledger scored at 45% (measured, sweep 216). The other levels follow in order of
 * how much evidence each holds; a level with no cell for these skills is skipped.
 */
export function ledgerEvidenceLevels(level: string, skills: readonly string[]): CefrLevel[] {
  const cells = getMasteryLedger().cells;
  const samples = (lv: string) => skills.reduce((t, sk) => t + (cells[`${lv}:${sk}`]?.n ?? 0), 0);
  const others = CEFR_ORDER.filter((lv) => lv !== level && samples(lv) > 0).sort(
    (a, b) => samples(b) - samples(a),
  );
  return [level as CefrLevel, ...others];
}

/** The first level (course level first) at which `pick` returns a verdict. */
function measuredAcross<K>(
  level: string,
  skills: readonly string[],
  pick: (lv: CefrLevel) => K | null,
): { kind: K; at: CefrLevel } | null {
  for (const at of ledgerEvidenceLevels(level, skills)) {
    const kind = pick(at);
    if (kind) return { kind, at };
  }
  return null;
}

/** The concept map over the cached spine — the one derivation tiers 1–4 and the
 *  progress line both read, so the line cannot count something the flow skips. */
function readConceptMap(): ConceptMap {
  return buildConceptMap(readCurriculumSpine(), readRetention());
}

function conceptDrillReason(e: ConceptEntry): string {
  const rec = readRetention().lessons[e.lessonId];
  switch (e.state) {
    case 'notpassed':
      return `You have not passed the ${e.title} check yet — practice what it tests.`;
    case 'shaky':
      if (rec && rec.last.total > 0 && rec.last.score / rec.last.total < LESSON_PASS_THRESHOLD) {
        return `Your ${e.title} check: ${rec.last.score} of ${rec.last.total}.`;
      }
      return `${e.openMisses} question${e.openMisses === 1 ? '' : 's'} from ${e.title} ${e.openMisses === 1 ? 'is' : 'are'} due again.`;
    case 'due':
      return `${e.title}: a re-check is due.`;
    default:
      return `You passed ${e.title}; it has not been re-checked yet.`;
  }
}

/**
 * Every item the next block could hold, ranked by tier. `session` is today's plan:
 * a once-a-day item already in it is not offered again, and nothing is offered on
 * a screen already chosen for THIS block. Every source is wrapped so a store that
 * cannot be read costs its own items and nothing else.
 */
export function gatherKeepCandidates(
  level: string,
  session: Pick<DailySession, 'activities'>,
  block: number,
  deps: KeepDeps,
): KeepCandidate[] {
  const out: KeepCandidate[] = [];
  const planIds = new Set(session.activities.map((a) => a.id));
  const blockScreens = new Set<string>();
  const add = (a: SessionActivity | null | undefined, tier: KeepTier, spoken = false) => {
    if (!a || !a.screen || planIds.has(a.id) || blockScreens.has(a.screen)) return;
    if (a.screen === 'animlesson' || a.id.startsWith('curriculum_')) return; // never a lesson
    planIds.add(a.id);
    blockScreens.add(a.screen);
    out.push({ activity: a, tier, spoken });
  };
  const guarded = (fn: () => void) => {
    try {
      fn();
    } catch {
      /* one source unreadable — the others still serve */
    }
  };
  const recurring = (name: string) => `keep_${name}_${block}`;
  // The date of the lesson's last check: a drill passed on or after it counts (drillStamps).
  const lastCheckAt = (e: ConceptEntry): string | undefined =>
    e.state === 'notpassed'
      ? latestLessonAttempt(e.lessonId)?.at
      : readRetention().lessons[e.lessonId]?.last.at;
  // `skipDrilled` (shaky/due tier): a concept whose practice was passed since its last check is
  // not re-served; only its real re-check clears the state. A lesson with a book quiz has two
  // practices (its interactive screen and the quiz): the quiz is offered once the screen has been
  // passed, so the two alternate and neither repeats until the next check.
  const drillFor = (e: ConceptEntry, tier: KeepTier, reason?: string, skipDrilled = false) => {
    let category = (e.practiceCategory ?? LESSON_TAUGHT_CATEGORY[e.lessonId]) as
      SkillCategory | undefined;
    if (!category) return false;
    const since = lastCheckAt(e);
    const done = (c: string) => !!since && drilledSince(c, since);
    if (done(category)) {
      const quiz = bookQuizFor(e.lessonId);
      if (quiz && !done(quiz.category)) category = quiz.category as SkillCategory;
      else if (skipDrilled) return false;
    }
    const screen = routeCategory(category, level, blockScreens);
    if (!screen) return false;
    add(
      {
        id: `keep_drill_${e.lessonId}`,
        label: e.title,
        screen,
        category,
        ...withReason(reason ?? conceptDrillReason(e)),
      },
      tier,
    );
    return true;
  };

  let map: ConceptMap | null = null;
  guarded(() => {
    map = readConceptMap();
  });
  const entries: ConceptEntry[] = (map as ConceptMap | null)?.entries ?? [];

  // ── 1. A lesson whose latest real check failed ─────────────────────────────
  guarded(() => {
    for (const e of entries.filter((x) => x.state === 'notpassed')) {
      if (drillFor(e, 1)) continue;
      if (e.openMisses > 0) {
        add(
          {
            id: recurring('lessonreview'),
            label: 'Lesson Review',
            screen: 'lessonreview',
            category: 'general',
            ...withReason(
              `${e.openMisses} question${e.openMisses === 1 ? '' : 's'} you missed on ${e.title} ${e.openMisses === 1 ? 'is' : 'are'} ready to review.`,
            ),
          },
          1,
        );
      }
    }
  });

  // ── 2. Open missed items and due re-checks ─────────────────────────────────
  guarded(() => {
    const slot = selectRetentionSlot();
    if (slot) add({ ...slot, id: recurring('lessonreview') }, 2);
  });

  // ── 3. Shaky and due concepts; measured weak categories that are taught ────
  guarded(() => {
    // A passed drill counts (owner, 2026-11-19): see drillFor.
    for (const state of ['shaky', 'due'] as const) {
      for (const e of entries.filter((x) => x.state === state)) drillFor(e, 3, undefined, true);
    }
  });
  guarded(() => {
    const ahead = readCourseAhead();
    for (const { category } of getDueCategoryQueue(6)) {
      if (ahead.categories.has(category)) continue; // not taught yet — the gate
      const status = getCategoryStatus(category);
      if (!status.seen || status.accuracy === null || status.accuracy >= LESSON_PASS_THRESHOLD)
        continue;
      const screen = routeCategory(category, level, blockScreens);
      if (!screen) continue;
      add(
        {
          id: `cat_${category}`,
          label: titleCase(category),
          screen,
          category,
          ...withReason(adaptiveReason(category)),
        },
        3,
      );
    }
  });

  // ── 3.5. THE COURSE'S NEXT STEP (owner, 2026-11-19) ────────────────────────
  // "If a user is demonstrating over and over they know the material, why are we
  // giving them the same material?" Once what is genuinely owed (tiers 1-3) is
  // served, the next item is the course's own next step — the same sequencer Home
  // and the map read — so a learner who knows the material moves forward instead of
  // re-drilling it. It never serves a locked step (`nextCourseStep` cannot), is
  // capped by passing alone, and a lesson is never listed twice in a day (its id is
  // in the plan once done). The launcher re-arms the handoff from the id.
  // The next step first, then the RECOMMENDED ones (a unit test for a unit advanced by its
  // lessons, owed production): they never gate, and are offered after the next lesson.
  const courseSteps: CourseStep[] = [];
  guarded(() => {
    const first = nextCourseStep({ skipRechecks: true });
    if (first) courseSteps.push(first);
    courseSteps.push(...recommendedCourseSteps());
  });
  for (const step of courseSteps) {
    let a: SessionActivity | null = null;
    // A lesson whose check failed today is closed until tomorrow (checkLock): the
    // corrective day serves it then, so it is not offered now.
    if (step.kind === 'lesson' && checkLockedToday(step.lesson.id)) continue;
    if (step.kind === 'lesson') {
      a = {
        id: `curriculum_${step.lesson.id}`,
        label: step.lesson.title || 'Next lesson',
        screen: 'animlesson',
        category: 'general',
        ...withReason(`Next in your course: ${step.reason}.`),
      };
    } else if (step.kind === 'unit-test') {
      a = {
        id: unitTestActivityId(step.unit.id),
        label: `Unit ${step.unit.index} test`,
        screen: 'unittest',
        category: 'general',
        ...withReason(step.reason),
      };
    } else if (step.kind === 'production') {
      a = {
        id: unitProductionActivityId(step.unit.id, step.owed),
        label: `Unit ${step.unit.index}: ${step.owed === 'write' ? 'write' : 'speak'}`,
        screen: 'unitproduction',
        category: 'general',
        ...withReason(step.reason),
      };
    } else if (step.kind === 'level-review') {
      a = {
        id: levelReviewActivityId(step.level),
        label: `${step.level} review`,
        screen: 'levelreview',
        category: 'general',
        ...withReason(step.reason),
      };
    }
    // Pushed directly: `add` refuses lesson ids by design for every other tier.
    if (a && !planIds.has(a.id) && !blockScreens.has(a.screen)) {
      planIds.add(a.id);
      blockScreens.add(a.screen);
      out.push({ activity: a, tier: 3.5, spoken: false });
    }
  }

  // ── 4. (removed, owner 2026-11-19) Passed material is NOT re-served early ───
  // A lesson or unit the learner has passed returns only when its check-up is due
  // (tier 2) — never as a drill the same day it was passed. Serving it early was the
  // "same lessons over and over" the owner reported.

  // ── 5. SRS words due ───────────────────────────────────────────────────────
  guarded(() => {
    if (deps.dueReviews > 0) {
      add(
        {
          id: recurring('srs'),
          label: 'Word Review',
          screen: 'review',
          category: 'vocab-a2',
          ...withReason(reviewReason(deps.dueReviews)),
        },
        5,
      );
    }
  });

  // ── 6. The weakest measured production and receptive skills ────────────────
  // The verdict may sit at another level than the course's (ledgerEvidenceLevels):
  // the activity is served at the COURSE level, and its reason is written from
  // the cell that holds the verdict, so it states only what was measured.
  guarded(() => {
    const weak = measuredAcross(level, ['speaking', 'writing'], weakestProductionKind);
    if (!weak) return;
    const a = deps.selectProduction({
      cefr: level,
      excludeScreens: [...blockScreens],
      kindBias: weak.kind,
    });
    // Measured only when the pool served the weak modality itself.
    if (a && a.category === (weak.kind === 'speak' ? 'speaking' : 'writing'))
      add(
        { ...a, id: `keep_weak_${weak.kind}`, ...withReason(productionReason(weak.kind, weak.at)) },
        6,
        weak.kind === 'speak',
      );
  });
  guarded(() => {
    const weak = measuredAcross(level, ['listening', 'reading'], weakestReceptiveKind);
    if (!weak) return;
    const inp = selectGuaranteedInput(level, new Set(blockScreens), deps.recentScreens, {
      micBlocked: deps.micBlocked,
      prefer: weak.kind,
    });
    if (!inp || inp.kind !== weak.kind) return; // the other kind is not the weakness
    const { kind, ...a } = inp;
    add(
      {
        ...a,
        id: `keep_weak_${kind}`,
        ...withReason(inputSlotReason(kind, weak.kind, weak.at)),
      },
      6,
      kind === 'listening',
    );
  });

  // ── 7. Only when nothing above remains: keep what is proven in use ─────────
  // The course's own next step (3.5) is not review, so it does not suppress the floor.
  if (out.every((c) => c.tier === 3.5)) {
    guarded(() => {
      const store = readRetention();
      if (!fluencyAvailable(store)) return;
      add(
        {
          id: recurring('fluency'),
          label: 'Quick Recall',
          screen: 'fluency',
          category: 'general',
          ...withReason(fluencyReason(Object.keys(store.lessons).length)),
        },
        7,
      );
    });
    // NOTHING BEFORE THE CASES (owner, 2026-11-13): guided speaking and writing build sentences
    // whose endings are corrected for case, so a learner whose open lessons have taught no case
    // gets word practice instead — flashcards and the word quiz draw on the course deck. Both
    // always serve, so the tier still never runs dry.
    if (!casesTaught()) {
      add(
        {
          id: recurring('flash'),
          label: 'Flashcards',
          screen: 'flashcards',
          category: 'vocab-a2',
          reason: 'Everything taught so far is proven — keep the words fresh.',
        },
        7,
      );
      add(
        {
          id: recurring('quiz'),
          label: 'Word Quiz',
          screen: 'mcgame',
          category: 'vocab-a2',
          reason: 'Everything taught so far is proven — test the words you know.',
        },
        7,
      );
      return out;
    }
    // Both keyboard-safe (a typed answer counts), both A1+, both rotate their own
    // units — so this tier can always serve, and the flow never ends.
    add(
      {
        id: recurring('speak'),
        label: 'Guided Speaking',
        screen: 'speaking_guided',
        category: 'speaking',
        reason: 'Everything taught so far is proven — say it aloud to keep it in use.',
      },
      7,
      true,
    );
    add(
      {
        id: recurring('write'),
        label: 'Guided Writing',
        screen: 'writing_guided',
        category: 'writing',
        reason: 'Everything taught so far is proven — write it to keep it in use.',
      },
      7,
    );
  }

  // Tier, then the modality a tie resolves toward, then the order gathered.
  return out
    .map((c, i) => ({ c, i }))
    .sort((a, b) => a.c.tier - b.c.tier || Number(b.c.spoken) - Number(a.c.spoken) || a.i - b.i)
    .map(({ c }) => c);
}

/** The next block's activities, tagged. */
export function buildKeepBlock(index: number, candidates: KeepCandidate[]): SessionActivity[] {
  return candidates.slice(0, KEEP_BLOCK_LENGTH).map((c) => ({ ...c.activity, keep: index }));
}

export interface KeepState {
  /** Every core (untagged) activity is done. */
  coreComplete: boolean;
  /** The Keep Learning block the plan currently holds (0 before the first). */
  index: number;
  /** Every activity of the current block is done (the core, before the first). */
  blockComplete: boolean;
}

export function keepState(session: DailySession): KeepState {
  const done = new Set(session.completedIds);
  const core = session.activities.filter((a) => a.keep === undefined);
  const coreComplete = core.length > 0 && core.every((a) => done.has(a.id));
  const index = session.activities.reduce((m, a) => Math.max(m, a.keep ?? 0), 0);
  const current = session.activities.filter((a) => a.keep === index);
  const blockComplete = index === 0 ? coreComplete : current.every((a) => done.has(a.id));
  return { coreComplete, index, blockComplete };
}

/**
 * The plan with the next block appended when the core (or the current block) is
 * done. Returns the SAME object when nothing changed, so a caller can skip
 * persisting. There is no target and no last block.
 */
export function extendWithKeepLearning(
  session: DailySession,
  level: string,
  deps: KeepDeps,
): DailySession {
  const st = keepState(session);
  if (!st.coreComplete || !st.blockComplete) return session;
  const next = buildKeepBlock(
    st.index + 1,
    gatherKeepCandidates(level, session, st.index + 1, deps),
  );
  if (next.length === 0) return session; // unreachable: tier 7 always serves
  const activities = [...session.activities, ...next];
  return { ...session, activities, estimatedMinutes: activities.length * MINUTES_PER_ACTIVITY };
}

/**
 * The hero's progress line, from the same concept map tiers 1–4 read: how many
 * concepts TAUGHT in the current unit are not yet proven (`solid`), and how many
 * from earlier units. Never a count of untaught lessons.
 */
export function keepProgress(): { unitIndex: number | null; line: string | null } {
  try {
    const state = readCourseState();
    const unit = state.units.find((u) => u.index === state.currentIndex) ?? null;
    const map = readConceptMap();
    // Exactly what tiers 1–3 treat as unproven: a lesson the concept map has judged
    // failed, shaky or due. A lesson that is passed and waiting for its check-up is
    // NOT to prove (owner, 2026-11-19): it returns when that check-up is due.
    const unproven = new Set(
      map.entries
        .filter((e) => e.state !== 'solid' && e.state !== 'untaught' && e.state !== 'passed')
        .map((e) => e.lessonId),
    );
    const inUnit = unit ? unit.lessons.filter((l) => unproven.has(l.id)).length : 0;
    const earlier = unproven.size - inUnit;
    const n = (k: number) => `${k} concept${k === 1 ? '' : 's'}`;
    let line: string;
    if (!unit)
      line = unproven.size ? `${n(unproven.size)} still to prove` : 'Everything taught is proven';
    else if (inUnit > 0)
      line = `${n(inUnit)} still to prove in Unit ${unit.index}${earlier > 0 ? ` · ${earlier} from earlier units` : ''}`;
    else if (earlier > 0) line = `${n(earlier)} from earlier units still to prove`;
    else line = `Everything taught so far is proven · Unit ${unit.index}`;
    return { unitIndex: unit?.index ?? null, line };
  } catch {
    return { unitIndex: null, line: null };
  }
}
