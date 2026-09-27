/**
 * levelReviewScreen — the end-of-level review, driven end to end over the REAL A1
 * lesson bodies and the REAL spine.
 *
 * What only a driven test can say: that a missed item really comes BACK (the practice
 * contract — the learner leaves having got every item right once), that the result
 * reports FIRST-TRY accuracy rather than the corrected pass, that the review is
 * recorded and paid once on REACHING the result (not from a button that leaves it),
 * that it frees its session slot, and that each dead end names itself.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const getLessons = vi.fn(async () => LESSONS as unknown[]);
vi.mock('../lib/contentClient', () => ({
  getLessons: (...a: unknown[]) => getLessons(...a),
  getCurriculumSpine: vi.fn(async () => []),
  getContent: vi.fn(async () => ({ V: {} })),
  getGrammar: vi.fn(async () => ({})),
}));
vi.mock('../lib/errorReporter', () => ({
  reportError: vi.fn(),
  reportBoundaryError: vi.fn(),
}));

import LevelReviewScreen, { LEVEL_REVIEW_XP } from '../components/learn/LevelReviewScreen';
import { buildCourseUnits } from '../lib/courseUnits';
import { buildLevelReview, type ReviewLessonBody } from '../lib/levelReview';
import { readCourseUnits } from '../lib/courseUnitProgress';
import type { CurriculumEntry } from '../lib/curriculum';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);
const BY_ID = new Map((LESSONS as ReviewLessonBody[]).map((l) => [l.id, l]));

function paper(level = 'A1', attempt = 0) {
  return buildLevelReview(
    UNITS.filter((u) => u.level === level).map((u) => ({
      unitId: u.id,
      lessons: u.lessons.map((l) => BY_ID.get(l.id)!).filter(Boolean),
    })),
    attempt,
  );
}

function seed(level: string | null = 'A1'): void {
  localStorage.setItem('nh_curriculum_spine', JSON.stringify(SPINE));
  if (level) sessionStorage.setItem('nh_level_review', level);
}

function mount(award = vi.fn(), setScr = vi.fn(), onOpenLesson = vi.fn(async () => true)) {
  render(
    <LevelReviewScreen
      goBack={vi.fn()}
      award={award}
      onOpenLesson={onOpenLesson}
      setScr={setScr}
    />,
  );
  return { award, setScr, onOpenLesson };
}

/**
 * Answer the round. `missFirst` lists the ITEM indices to get wrong on their first
 * showing; every repeat is answered right. Returns how many screens were shown.
 */
async function drive(missFirst: Set<number>, attempt = 0): Promise<number> {
  const items = paper('A1', attempt);
  const queue = items.map((_, i) => i);
  const seen = new Set<number>();
  for (let pos = 0; pos < queue.length; pos++) {
    const idx = queue[pos]!;
    const it = items[idx]!;
    await screen.findByTestId('level-review');
    expect(screen.getByTestId('level-review').textContent, `question at ${pos}`).toContain(it.q);
    const repeat = seen.has(idx);
    expect(screen.getByTestId('level-review').getAttribute('data-repeat')).toBe(repeat ? '1' : '0');
    const wrong = !repeat && missFirst.has(idx);
    const want = wrong
      ? it.options[(it.correct + 1) % it.options.length]!
      : it.options[it.correct]!;
    const btn = screen.getAllByTestId('level-review-option').find((b) => b.textContent === want);
    if (!btn) throw new Error(`option "${want}" not on screen at ${pos}`);
    fireEvent.click(btn);
    seen.add(idx);
    if (wrong) queue.push(idx);
    expect(screen.getByTestId('level-review-feedback').textContent).toMatch(
      wrong ? /come back at the end/ : /Correct/,
    );
    fireEvent.click(screen.getByTestId('level-review-next'));
  }
  return queue.length;
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  getLessons.mockImplementation(async () => LESSONS as unknown[]);
});

describe('a round of practice across the whole level', () => {
  it('serves 18 items, and a missed item comes back until it is right', async () => {
    seed();
    mount();
    expect(paper()).toHaveLength(18);
    const shown = await drive(new Set([0, 4, 9]));
    expect(shown, '18 items plus the three that came back').toBe(21);
    await screen.findByTestId('level-review-result');
  });

  it('reports FIRST-try accuracy, per unit, not the corrected score', async () => {
    seed();
    mount();
    const items = paper();
    const miss = new Set([0, 1, 2]);
    await drive(miss);
    await screen.findByTestId('level-review-result');
    expect(screen.getByTestId('level-review-first-try').textContent).toContain('15 of 18');
    for (const i of miss) {
      expect(
        screen.getByTestId(`level-review-unit-${items[i]!.unitId}`).getAttribute('data-shaky'),
      ).toBe('1');
    }
    const clean = UNITS.filter(
      (u) => u.level === 'A1' && ![...miss].some((i) => items[i]!.unitId === u.id),
    );
    for (const u of clean)
      expect(screen.getByTestId(`level-review-unit-${u.id}`).getAttribute('data-shaky')).toBe('0');
  });

  it('records the review and pays once, on REACHING the result — a second review pays nothing', async () => {
    seed();
    sessionStorage.setItem('nh_session_started', 'levelreview');
    const { award } = mount();
    await drive(new Set([3]));
    await screen.findByTestId('level-review-result');
    // Credited BEFORE any button on the result is pressed.
    expect(award).toHaveBeenCalledTimes(1);
    expect(award).toHaveBeenCalledWith(LEVEL_REVIEW_XP, 'grammar');
    expect(readCourseUnits().reviews?.A1).toMatchObject({ firstTryCorrect: 17, total: 18 });
    // The session is a flow: reaching the result frees its slot.
    expect(sessionStorage.getItem('nh_session_completed')).toBe('levelreview');

    fireEvent.click(screen.getByTestId('level-review-again'));
    await drive(new Set(), 1);
    await screen.findByTestId('level-review-result');
    expect(award, 'a second review is practice, not a second payment').toHaveBeenCalledTimes(1);
    // …and the better first-try score is kept.
    expect(readCourseUnits().reviews?.A1).toMatchObject({ firstTryCorrect: 18, total: 18 });
  });

  it('sends the learner on to the Level Check, and back to a shaky unit', async () => {
    seed();
    const { setScr, onOpenLesson } = mount();
    const items = paper();
    await drive(new Set([0]));
    await screen.findByTestId('level-review-result');
    fireEvent.click(screen.getByTestId(`level-review-unit-${items[0]!.unitId}`));
    await waitFor(() => expect(onOpenLesson).toHaveBeenCalledWith(items[0]!.lessonId));
    fireEvent.click(screen.getByTestId('level-review-level-check'));
    expect(setScr).toHaveBeenCalledWith('equivalency');
  });

  it('shows the options in a shuffled order, not source order every time', async () => {
    seed();
    mount();
    const items = paper();
    await screen.findByTestId('level-review');
    let moved = 0;
    // Look at the first few items only; answer each right.
    for (let i = 0; i < 6; i++) {
      const it = items[i]!;
      const shown = screen.getAllByTestId('level-review-option').map((b) => b.textContent);
      if (shown.join('|') !== it.options.join('|')) moved++;
      fireEvent.click(
        screen
          .getAllByTestId('level-review-option')
          .find((b) => b.textContent === it.options[it.correct])!,
      );
      fireEvent.click(screen.getByTestId('level-review-next'));
    }
    expect(moved).toBeGreaterThan(0);
  });
});

describe('every dead end names itself', () => {
  it('no level named → says so and offers the course map', async () => {
    seed(null);
    const { setScr } = mount();
    await screen.findByTestId('level-review-missing');
    fireEvent.click(screen.getByTestId('level-review-open-map'));
    expect(setScr).toHaveBeenCalledWith('coursemap');
  });

  it('the fetch fails → says so, and records nothing', async () => {
    seed();
    getLessons.mockImplementation(async () => {
      throw new Error('offline');
    });
    mount();
    await screen.findByTestId('level-review-failed');
    expect(readCourseUnits().reviews).toBeUndefined();
  });

  it('too few questions → says so and records the attempt, so the course moves on', async () => {
    seed();
    getLessons.mockImplementation(async () => []);
    const { award } = mount();
    await screen.findByTestId('level-review-insufficient');
    expect(readCourseUnits().reviews?.A1?.unavailable).toBe(true);
    expect(award).not.toHaveBeenCalled();
  });

  it('the result never pays for an empty round', async () => {
    seed();
    getLessons.mockImplementation(async () => []);
    const { award } = mount();
    await screen.findByTestId('level-review-insufficient');
    expect(within(document.body).queryByTestId('level-review-result')).toBeNull();
    expect(award).not.toHaveBeenCalled();
  });
});
