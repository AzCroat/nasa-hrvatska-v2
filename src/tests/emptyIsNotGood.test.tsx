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
import CroatianErrorInsights from '../components/profile/CroatianErrorInsights';

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
