/**
 * SessionCard.test.tsx — Unit tests for the LearnPath chip added in Phase 3 Task 1.
 *
 * SessionCard is a pure presentational component: all behavior is driven by props.
 * No context providers, firebase mocks, or data layer needed.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SessionCard from '../components/home/SessionCard';
import type { DailySession, SessionActivity } from '../hooks/useDailySession';

// ── Minimal fixtures ──────────────────────────────────────────────────────────

const ACT_A: SessionActivity = {
  id: 'a1',
  label: 'Flashcards',
  screen: 'lesson',
  category: 'vocab',
};
const ACT_B: SessionActivity = {
  id: 'a2',
  label: 'Grammar',
  screen: 'grammar',
  category: 'grammar',
};

function makeSession(completedIds: string[] = []): DailySession {
  return {
    date: '2026-05-13',
    activities: [ACT_A, ACT_B],
    completedIds,
    estimatedMinutes: 10,
  };
}

const BASE_PROPS = {
  isComplete: false,
  progress: 0,
  nextActivity: ACT_A,
  tomorrowLabel: 'Come back tomorrow',
  onStart: vi.fn(),
  onKeepPracticing: vi.fn(),
  streak: 3,
  xpThisWeek: 120,
  wordsdue: 5,
};

const LP_ITEM = { id: 'lp1', name: 'Basic Greetings', go: 'lesson', topic: 'greetings' };

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('SessionCard — LearnPath chip', () => {
  it('renders the LearnPath chip when nextLearnPathItem is provided', () => {
    render(<SessionCard {...BASE_PROPS} session={makeSession()} nextLearnPathItem={LP_ITEM} />);
    const chip = screen.getByTestId('learnpath-chip');
    expect(chip).toBeTruthy();
    // chip label contains the item name (possibly truncated)
    expect(chip.textContent).toContain('Basic Greetings');
  });

  it('does NOT render the LearnPath chip when nextLearnPathItem is null', () => {
    render(<SessionCard {...BASE_PROPS} session={makeSession()} nextLearnPathItem={null} />);
    expect(screen.queryByTestId('learnpath-chip')).toBeNull();
  });

  it('does NOT render the LearnPath chip when nextLearnPathItem is undefined (default)', () => {
    render(<SessionCard {...BASE_PROPS} session={makeSession()} />);
    expect(screen.queryByTestId('learnpath-chip')).toBeNull();
  });

  it('calls onLearnPathStart with the item when chip is clicked (not done)', () => {
    const onLearnPathStart = vi.fn();
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession()}
        nextLearnPathItem={LP_ITEM}
        learnPathItemDone={false}
        onLearnPathStart={onLearnPathStart}
      />,
    );
    fireEvent.click(screen.getByTestId('learnpath-chip'));
    expect(onLearnPathStart).toHaveBeenCalledOnce();
    expect(onLearnPathStart).toHaveBeenCalledWith(LP_ITEM);
  });

  it('does NOT call onLearnPathStart when chip is already done', () => {
    const onLearnPathStart = vi.fn();
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession()}
        nextLearnPathItem={LP_ITEM}
        learnPathItemDone={true}
        onLearnPathStart={onLearnPathStart}
      />,
    );
    fireEvent.click(screen.getByTestId('learnpath-chip'));
    expect(onLearnPathStart).not.toHaveBeenCalled();
  });

  it('shows a checkmark prefix when learnPathItemDone is true', () => {
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession()}
        nextLearnPathItem={LP_ITEM}
        learnPathItemDone={true}
      />,
    );
    const chip = screen.getByTestId('learnpath-chip');
    expect(chip.textContent).toMatch(/^✓/);
  });

  it('shows a star prefix when learnPathItemDone is false', () => {
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession()}
        nextLearnPathItem={LP_ITEM}
        learnPathItemDone={false}
      />,
    );
    const chip = screen.getByTestId('learnpath-chip');
    expect(chip.textContent).toMatch(/^★/);
  });

  it('truncates a long item name to 20 chars in the label', () => {
    const longItem = { id: 'lpX', name: 'This Is A Very Long Lesson Name Indeed', go: 'lesson' };
    render(<SessionCard {...BASE_PROPS} session={makeSession()} nextLearnPathItem={longItem} />);
    const chip = screen.getByTestId('learnpath-chip');
    // name is sliced to 20 chars, prefix takes 2 chars (star + space) = 22 total max
    const labelPart = chip.textContent?.replace(/^[★✓] /, '') ?? '';
    expect(labelPart.length).toBeLessThanOrEqual(20);
  });

  it('existing activity chips are not affected when LearnPath chip is added', () => {
    render(<SessionCard {...BASE_PROPS} session={makeSession()} nextLearnPathItem={LP_ITEM} />);
    // Both activity chips still render
    expect(screen.getByText(/Flashcards/)).toBeTruthy();
    expect(screen.getByText(/Grammar/)).toBeTruthy();
    // LearnPath chip also renders
    expect(screen.getByTestId('learnpath-chip')).toBeTruthy();
  });

  it('LearnPath chip hidden in complete state (whole session done)', () => {
    // When isComplete=true the card renders the "Session Complete!" state,
    // not the chip area. The chip div is inside the non-complete branch.
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession(['a1', 'a2'])}
        isComplete={true}
        nextLearnPathItem={LP_ITEM}
      />,
    );
    expect(screen.queryByTestId('learnpath-chip')).toBeNull();
  });
});

describe('SessionCard — fresh-session off-ramp (bug #1)', () => {
  it('renders the "Start a fresh session" button in the complete state when onStartFresh is provided', () => {
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession(['a1', 'a2'])}
        isComplete={true}
        onStartFresh={vi.fn()}
      />,
    );
    expect(screen.getByTestId('start-fresh-session')).toBeTruthy();
  });

  it('does NOT render the fresh-session button when not complete', () => {
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession()}
        isComplete={false}
        onStartFresh={vi.fn()}
      />,
    );
    expect(screen.queryByTestId('start-fresh-session')).toBeNull();
  });

  it('invokes onStartFresh when the button is clicked', () => {
    const onStartFresh = vi.fn();
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession(['a1', 'a2'])}
        isComplete={true}
        onStartFresh={onStartFresh}
      />,
    );
    fireEvent.click(screen.getByTestId('start-fresh-session'));
    expect(onStartFresh).toHaveBeenCalledTimes(1);
  });
});

// (Removed "relational progress voice" tests — the host-voiced progress line was
// deleted from SessionCard entirely on 2026-06-21 per user request.)

// ── KEEP LEARNING (owner decision, 2026-09-29 — sweep 216) ───────────────────
//
// After the core session the card is the open review block's hero — the same shape
// as Begin Session, one Continue button — and there is no "Day Complete" card.
// Without the `keep` prop the card behaves exactly as before (every test above is
// that contract).
describe('SessionCard — the Keep Learning hero', () => {
  const K1: SessionActivity = {
    id: 'keep_srs_1',
    label: 'Word Review',
    screen: 'review',
    category: 'vocab-a2',
    reason: '6 words are due for review today.',
    keep: 1,
  };
  const K2: SessionActivity = {
    id: 'keep_drill_accusative-intro',
    label: 'Accusative',
    screen: 'accdrill',
    category: 'accusative',
    keep: 1,
  };
  const kept = (completed: string[]): DailySession => ({
    date: '2026-05-13',
    activities: [ACT_A, ACT_B, K1, K2],
    completedIds: completed,
    estimatedMinutes: 20,
  });
  const KEEP = {
    coreComplete: true,
    index: 1,
    unitIndex: 2,
    progressLine: '3 concepts still to prove in Unit 2',
  };

  it('with the core done and a block open it is the Keep Learning hero, never a complete state', () => {
    render(
      <SessionCard {...BASE_PROPS} session={kept(['a1', 'a2'])} nextActivity={K1} keep={KEEP} />,
    );
    expect(screen.getByTestId('keep-learning-hero')).toHaveAttribute('data-keep', '1');
    expect(screen.getByText('KEEP LEARNING · UNIT 2')).toBeTruthy();
    expect(screen.getByTestId('session-begin-cta').textContent).toContain('Continue');
    // The core collapses to one done chip; only the block's items are listed.
    expect(screen.getByTestId('keep-core-chip').textContent).toContain("Today's session done");
    expect(screen.queryByText(/Flashcards/)).toBeNull();
    expect(screen.getByText(/Word Review/)).toBeTruthy();
    expect(screen.getByTestId('keep-progress').textContent).toBe(
      '3 concepts still to prove in Unit 2',
    );
    // The first item's honest reason sits with the button.
    expect(screen.getByTestId('next-activity-reason').textContent).toBe(
      '6 words are due for review today.',
    );
    expect(screen.queryByText(/Complete!/)).toBeNull();
    expect(screen.queryByText(/Stretch/)).toBeNull();
  });

  it('a started block still says Continue', () => {
    render(
      <SessionCard
        {...BASE_PROPS}
        session={kept(['a1', 'a2', 'keep_srs_1'])}
        nextActivity={K2}
        keep={KEEP}
      />,
    );
    expect(screen.getByTestId('session-begin-cta').textContent).toContain('Continue');
  });

  it('without the prop the card is unchanged: the complete state still says Session Complete!', () => {
    render(
      <SessionCard
        {...BASE_PROPS}
        session={makeSession(['a1', 'a2'])}
        isComplete
        nextActivity={null}
      />,
    );
    expect(screen.getByTestId('session-complete-title').textContent).toBe('Session Complete!');
  });
});
