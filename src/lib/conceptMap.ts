// src/lib/conceptMap.ts
//
// THE CONCEPT MAP (owner recommendation 5, 2026-09-07).
//
// The gap: the mastery ledger tracks a learner's LEVEL and SKILL — "B1
// writing, 0.72" — and the curriculum tracks which lessons are done. Nothing
// answered the question a learner actually asks: "which of these 180 things do
// I actually know, and which are slipping?" The retention store (2026-09-07)
// made that answerable for the first time, because it records the LAST RESULT
// of every check and where each lesson sits on its re-check ladder.
//
// STATES, and every one is derived from something the app measured:
//   solid    — passed, re-checked at least once, last check clean, ladder past
//              the first rung. The only state that claims durable knowledge.
//   passed   — passed but not yet re-checked. Honest: one pass is evidence, and
//              it is not yet evidence of RETENTION.
//   shaky    — last check was below the pass mark, or the lesson has open item
//              cards (questions missed and not yet re-answered). The state the
//              card exists to surface.
//   due      — passed, nothing wrong, but a re-check is due now.
//   untaught — in the spine, never passed. Counted, never listed as a weakness:
//              not knowing something you have not been taught is not a gap.
//
// NEVER claim a state the data does not support. There is deliberately no
// "mastered" tier above `solid` — the app has no measurement that would
// distinguish it, and inventing one is the fabrication rule (NEVER DO 13).
//
// Pure and synchronous: reads the retention store and a spine passed in by the
// caller, so nothing here drags lesson data onto the first-paint path.

import { readRetention, type RetentionStore } from './lessonRetention';
import { LESSON_PASS_THRESHOLD } from './lessonCheck';
import { LESSON_TAUGHT_CATEGORY } from './teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from './categoryRoutes';
import { localDateStr } from './dateUtils';

export type ConceptState = 'solid' | 'passed' | 'due' | 'shaky' | 'untaught';

export interface ConceptEntry {
  lessonId: string;
  title: string;
  level: string;
  state: ConceptState;
  /** Open item cards: questions missed and not yet answered correctly since. */
  openMisses: number;
  /** The drill that practises what this lesson taught, when one is routed. */
  practiceScreen?: string;
  practiceCategory?: string;
}

export interface ConceptMap {
  entries: ConceptEntry[];
  counts: Record<ConceptState, number>;
  total: number;
  /** Shaky first, then due — what the learner should act on, worst first. */
  needsWork: ConceptEntry[];
}

export interface SpineLike {
  id: string;
  level: string;
  title?: string;
}

/**
 * The drill for what a lesson taught, resolved exactly the way the session's
 * teach→practice coupling resolves it — the same two maps, in the same order,
 * so a concept the map says is one tap away genuinely is. A lesson with no
 * honest mapping gets no button rather than a wrong one (the coupling's own
 * rule: a wrong drill is worse than no drill).
 */
export function practiceFor(lessonId: string): { screen: string; category: string } | null {
  const category = LESSON_TAUGHT_CATEGORY[lessonId];
  if (!category) return null;
  const screen = CATEGORY_SCREEN_MAP[category] || CATEGORY_EASIER_SCREEN[category];
  return screen ? { screen, category } : null;
}

export function buildConceptMap(
  spine: SpineLike[],
  store: RetentionStore = readRetention(),
  today: string = localDateStr(),
  now: number = Date.now(),
): ConceptMap {
  const entries: ConceptEntry[] = [];
  const counts: Record<ConceptState, number> = {
    solid: 0,
    passed: 0,
    due: 0,
    shaky: 0,
    untaught: 0,
  };

  for (const s of spine) {
    const rec = store.lessons[s.id];
    let state: ConceptState;
    let openMisses = 0;

    if (!rec) {
      state = 'untaught';
    } else {
      // An OPEN miss is a missed item the scheduler says is due again. A card
      // only ever exists because the item was missed, and it never disappears,
      // so "has a card" would mean "was ever wrong, once, forever" — which is
      // not slipping. Being DUE is the app's own statement that this item needs
      // re-testing now, and it is the same test `retentionStatus` uses to fill
      // the review queue, so the card and the queue can never disagree.
      openMisses = Object.entries(store.items).filter(
        ([key, card]) => key.startsWith(`${s.id}#`) && card.due <= now,
      ).length;
      const lastRatio = rec.last.total > 0 ? rec.last.score / rec.last.total : 1;
      if (lastRatio < LESSON_PASS_THRESHOLD || openMisses > 0) {
        state = 'shaky';
      } else if (rec.due <= today) {
        state = 'due';
      } else if (rec.stage > 0) {
        state = 'solid';
      } else {
        state = 'passed';
      }
    }

    counts[state]++;
    const practice = practiceFor(s.id);
    entries.push({
      lessonId: s.id,
      title: s.title || s.id,
      level: s.level,
      state,
      openMisses,
      ...(practice ? { practiceScreen: practice.screen, practiceCategory: practice.category } : {}),
    });
  }

  const rank: Record<ConceptState, number> = { shaky: 0, due: 1, passed: 2, solid: 3, untaught: 4 };
  const needsWork = entries
    .filter((e) => e.state === 'shaky' || e.state === 'due')
    .sort((a, b) => rank[a.state] - rank[b.state] || b.openMisses - a.openMisses);

  return { entries, counts, total: entries.length, needsWork };
}

/** One honest sentence for the card's header. Never states a count it does not
 *  hold, and says nothing at all before there is anything to say. */
export function conceptSummaryLine(map: ConceptMap): string | null {
  const learned = map.counts.solid + map.counts.passed + map.counts.due + map.counts.shaky;
  if (learned === 0) return null;
  if (map.counts.shaky > 0) {
    return `${map.counts.shaky} of your ${learned} concept${learned === 1 ? '' : 's'} ${map.counts.shaky === 1 ? 'is' : 'are'} slipping.`;
  }
  if (map.counts.solid > 0) {
    return `${map.counts.solid} concept${map.counts.solid === 1 ? '' : 's'} held through a re-check.`;
  }
  return `${learned} concept${learned === 1 ? '' : 's'} passed — re-checks will show what sticks.`;
}
