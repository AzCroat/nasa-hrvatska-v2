/**
 * emptyIsNotGood — a measurement that found nothing is not a good result
 * (sweep 36, 2026-09-23).
 *
 * The Me tab's two verdict surfaces each collapsed "we have not measured you"
 * into "we measured you and you are fine". Both are NEVER-DO 13 reached from a
 * direction the rule's usual statement does not cover: nothing here fabricates
 * a NUMBER. They fabricate a VERDICT out of an empty set.
 *
 *   * `CroatianErrorInsights` → "🏆 No weak topics — great work!" whenever
 *     `getWeakTopics()` returned `[]`. That function returns `[]` for FOUR
 *     states: no data at all, data below `MIN_TOPIC_ATTEMPTS`, data gone stale
 *     past `STALE_MS`, and a learner who is genuinely strong. A learner who
 *     had practised nothing was congratulated on having no weaknesses — with
 *     the line directly underneath simultaneously saying "Complete more
 *     exercises ... to see where you need improvement". Two sentences on one
 *     card, saying opposite things, the celebratory one in bold on top.
 *
 *   * `LessonAcquisitionCard` → "Every lesson you have taken passed first
 *     time." `report.measured` counts lessons with a taught attempt in a store
 *     that began recording on 2026-09-07, so every existing learner started at
 *     zero. Pass one lesson and the card announced a perfect record over a
 *     history it cannot see. The summary line one row above states its own
 *     denominator and was always honest; this line named none and inherited
 *     none.
 *
 * The rule both fixes follow: a verdict may not be wider than the evidence
 * named on the same surface.
 */
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { recordTopicResult, getWeakTopics, weakTopicEvidence } from '../lib/adaptive';
import { recordCheckAttempt } from '../lib/lessonAttempts';
import { logError } from '../lib/learnerErrors';
import LessonAcquisitionCard from '../components/profile/LessonAcquisitionCard';
import CroatianErrorInsights, {
  practiceScreenForTopic,
} from '../components/profile/CroatianErrorInsights';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

vi.mock('../context/AppContext', () => ({ useApp: () => ({ setScr: vi.fn() }) }));

vi.mock('../lib/curriculumProgress', async (orig) => ({
  ...(await orig<Record<string, unknown>>()),
  readCurriculumSpine: () => [],
}));

/** Answer a topic `n` times, `right` of them correctly. */
function practise(topic: string, n: number, right: number) {
  for (let i = 0; i < n; i++) recordTopicResult(topic, i < right);
}

describe('weakTopicEvidence separates the four states getWeakTopics flattens', () => {
  beforeEach(() => localStorage.clear());

  it('no data at all: nothing measured, and no weak topics either', () => {
    expect(getWeakTopics(65)).toEqual([]);
    expect(weakTopicEvidence()).toEqual({ measured: 0, thin: 0, stale: 0 });
  });

  it('too few attempts is THIN, not measured — and not a clean bill of health', () => {
    practise('genitive', 2, 0); // 0% accurate, but only twice
    expect(getWeakTopics(65)).toEqual([]); // the weak list cannot speak yet
    expect(weakTopicEvidence()).toEqual({ measured: 0, thin: 1, stale: 0 });
  });

  it('measured and strong is the ONLY state that earns the good verdict', () => {
    practise('genitive', 4, 4);
    expect(getWeakTopics(65)).toEqual([]);
    expect(weakTopicEvidence().measured).toBe(1);
  });

  it('measured and weak is reported as weak', () => {
    practise('genitive', 4, 1);
    expect(getWeakTopics(65).map((t) => t.id)).toEqual(['genitive']);
    expect(weakTopicEvidence().measured).toBe(1);
  });

  it('stale data is neither measured nor weak — the fourth state', () => {
    const old = Date.now() - 31 * 24 * 60 * 60 * 1000;
    localStorage.setItem(
      'topic_accuracy',
      JSON.stringify({ genitive: { attempts: 9, correct: 1, lastAttempt: old } }),
    );
    expect(getWeakTopics(65)).toEqual([]);
    expect(weakTopicEvidence()).toEqual({ measured: 0, thin: 0, stale: 1 });
  });

  it('the denominator uses the SAME bar as the weak list', () => {
    // A `measured` computed off raw storage rows would count the thin topic and
    // claim evidence the threshold rejected — the defect this function exists
    // to make impossible.
    practise('genitive', 4, 4);
    practise('dative', 2, 2);
    expect(weakTopicEvidence()).toEqual({ measured: 1, thin: 1, stale: 0 });
  });
});

describe('LessonAcquisitionCard claims nothing wider than its own denominator', () => {
  beforeEach(() => localStorage.clear());

  it('one lesson passed first time does not become a claim about every lesson', () => {
    // The exact shipping-day state: a learner with a long history the store
    // never saw, who has now taken one check.
    recordCheckAttempt('a1-cases', {
      score: 6,
      total: 6,
      passed: true,
      kind: 'lesson',
      missed: [],
    });
    render(<LessonAcquisitionCard />);
    const all = screen.getByTestId('acquisition-all-clear').textContent ?? '';
    expect(all).not.toMatch(/every lesson/i);
    expect(all).not.toMatch(/you have taken/i);
    // ...and the denominator it defers to is on screen, one line up.
    expect(screen.getByTestId('acquisition-summary').textContent).toMatch(/1 of 1 lesson/);
  });

  it('a lesson that needed a second go is listed, and the all-clear is absent', () => {
    recordCheckAttempt('a1-cases', {
      score: 3,
      total: 6,
      passed: false,
      kind: 'lesson',
      missed: [0, 2],
    });
    recordCheckAttempt('a1-cases', {
      score: 6,
      total: 6,
      passed: true,
      kind: 'lesson',
      missed: [],
    });
    render(<LessonAcquisitionCard />);
    expect(screen.queryByTestId('acquisition-all-clear')).toBeNull();
    expect(screen.getAllByTestId('acquisition-row')).toHaveLength(1);
  });
});

describe('the weak-topics verdict says what it measured', () => {
  beforeEach(() => localStorage.clear());

  // The tab is only offered when there is SOMETHING to show — tracked error
  // patterns or weak topics — so the reachable zero-evidence learner is one who
  // has produced writing or speech (which fills `learnerErrors`) but never done
  // a drill (which is what fills `topic_accuracy`), or one whose drill data has
  // all gone stale. Both used to be shown a trophy.
  function seedTrackedErrors() {
    // Through the real ledger, so the seed cannot drift from its shape.
    logError('locative after u', 'case', { wrong: 'u grad', correct: 'u gradu' });
  }

  function openTopicsTab() {
    render(<CroatianErrorInsights />);
    const tab = screen.getAllByRole('button').find((b) => b.textContent?.includes('Weak Topics'));
    if (tab) fireEvent.click(tab);
  }

  it('no drill data: it says nothing was measured, and does NOT congratulate', () => {
    seedTrackedErrors();
    openTopicsTab();
    const line = screen.queryByTestId('weak-topics-empty')?.textContent ?? '';
    expect(line, 'the topics tab did not open').not.toBe('');
    expect(line).not.toMatch(/great work/i);
    expect(line).toMatch(/nothing measured/i);
  });

  it('data below the attempt bar still does not earn the verdict', () => {
    seedTrackedErrors();
    practise('genitive', 2, 0); // two wrong answers: plainly not "no weak topics"
    openTopicsTab();
    expect(screen.queryByTestId('weak-topics-empty')?.textContent ?? '').not.toMatch(/great work/i);
  });

  it('stale data does not earn it either — the state that looks most like evidence', () => {
    seedTrackedErrors();
    localStorage.setItem(
      'topic_accuracy',
      JSON.stringify({
        genitive: { attempts: 9, correct: 1, lastAttempt: Date.now() - 31 * 864e5 },
      }),
    );
    expect(getWeakTopics(65)).toEqual([]); // the list is empty...
    openTopicsTab();
    expect(screen.queryByTestId('weak-topics-empty')?.textContent ?? '').not.toMatch(/great work/i);
  });

  it('measured and strong DOES earn it, and names how much it measured', () => {
    seedTrackedErrors();
    practise('genitive', 4, 4);
    practise('dative', 4, 4);
    openTopicsTab();
    const line = screen.getByTestId('weak-topics-empty').textContent ?? '';
    expect(line).toMatch(/great work/i);
    expect(line).toMatch(/\b2\b/); // the denominator, on the same line as the verdict
  });
});

describe('the weak-topic drill button goes to a real screen (sweep 39)', () => {
  // THE DEFECT. The card carried its own nine-entry substring map with
  // `|| 'quiz'` as the fallback — and `'quiz'` is not a router branch at all
  // (the multiple-choice game is `mcgame`). There is no catch-all in AppRouter,
  // so the tap set `currentScreen` to a string nothing matches and the content
  // area rendered EMPTY. Measured against the topic ids `recordTopicResult` is
  // actually called with in production, NINE OF TWELVE weak topics landed there.
  const ROUTED = new Set(
    [
      ...readFileSync(resolve(__dirname, '../components/AppRouter.tsx'), 'utf8').matchAll(
        /currentScreen === '([^']+)'/g,
      ),
    ].map((m) => m[1]!),
  );

  /** Every id production code actually passes to `recordTopicResult`. */
  const REAL_TOPIC_IDS = [
    'aspect',
    'cases',
    'future_tense',
    'grammar',
    'listening',
    'past_tense',
    'phonology',
    'production',
    'speaking',
    'vocab',
    'vocabulary',
    'food',
  ];

  it('never resolves to a screen the router cannot render', () => {
    const dead = REAL_TOPIC_IDS.map((id) => [id, practiceScreenForTopic(id)] as const).filter(
      ([, s]) => s !== null && !ROUTED.has(s!),
    );
    expect(dead, 'a weak topic whose Drill button renders a blank page').toEqual([]);
  });

  it('resolves the majority of real topics, and null for the rest', () => {
    const resolved = REAL_TOPIC_IDS.filter((id) => practiceScreenForTopic(id) !== null);
    // Before the fix this was 3 of 12 working and 9 dead. The floor is set
    // below today's 10 so an honest re-classification does not fail the build,
    // while the regression this guards against — the fallback coming back — is
    // nowhere near it.
    expect(resolved.length).toBeGreaterThanOrEqual(7);
  });

  it('prefers the COUPLING maps over the card’s own table', () => {
    // `past_tense` is not in the legacy substring table at all; it resolves only
    // because the id is normalised to the category spelling and looked up in
    // CATEGORY_SCREEN_MAP. If that lookup is dropped, this topic goes dark.
    expect(practiceScreenForTopic('past_tense')).toBe('cloze');
    expect(practiceScreenForTopic('listening')).toBe('listening_comprehension');
  });

  it('an unknown topic gets NULL, not a guess', () => {
    // The whole defect was a default. A topic with no honest drill must produce
    // no button — the coupling's own rule, that a wrong drill is worse than no
    // drill.
    expect(practiceScreenForTopic('completely-unknown-topic')).toBeNull();
    expect(practiceScreenForTopic('production')).toBeNull();
  });

  it('renders no Drill button for a topic that resolves to nothing', () => {
    localStorage.clear();
    logError('x', 'case', { wrong: 'a', correct: 'b' });
    localStorage.setItem(
      'topic_accuracy',
      JSON.stringify({ production: { attempts: 6, correct: 1, lastAttempt: Date.now() } }),
    );
    render(<CroatianErrorInsights />);
    const tab = screen.getAllByRole('button').find((b) => b.textContent?.includes('Weak Topics'));
    fireEvent.click(tab!);
    expect(screen.queryByTestId('weak-topic-drill')).toBeNull();
  });

  it('renders one for a topic that does', () => {
    localStorage.clear();
    logError('x', 'case', { wrong: 'a', correct: 'b' });
    localStorage.setItem(
      'topic_accuracy',
      JSON.stringify({ past_tense: { attempts: 6, correct: 1, lastAttempt: Date.now() } }),
    );
    render(<CroatianErrorInsights />);
    const tab = screen.getAllByRole('button').find((b) => b.textContent?.includes('Weak Topics'));
    fireEvent.click(tab!);
    expect(screen.getByTestId('weak-topic-drill')).toBeTruthy();
  });
});
