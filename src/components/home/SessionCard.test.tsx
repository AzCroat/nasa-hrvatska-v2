import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SessionCard from './SessionCard';
import type { DailySession } from '../../hooks/useDailySession';

const baseSession: DailySession = {
  date: '2026-06-21',
  activities: [
    { id: 'flashcards', label: 'Flashcards', screen: 'flashcards', category: 'vocab-a2' },
  ],
  completedIds: [],
  estimatedMinutes: 10,
};

function renderCard(overrides: Partial<React.ComponentProps<typeof SessionCard>> = {}) {
  const props: React.ComponentProps<typeof SessionCard> = {
    session: baseSession,
    isComplete: false,
    progress: 0,
    nextActivity: baseSession.activities[0]!,
    tomorrowLabel: 'Come back tomorrow',
    onStart: vi.fn(),
    onKeepPracticing: vi.fn(),
    streak: 0,
    xpThisWeek: 0,
    wordsdue: 0,
    ...overrides,
  };
  return render(<SessionCard {...props} />);
}

describe('SessionCard — Reviews Due pill', () => {
  it('is a clickable button that opens review when reviews are due', () => {
    const onReviewClick = vi.fn();
    renderCard({ wordsdue: 98, onReviewClick });
    const pill = screen.getByTestId('reviews-due-pill');
    expect(pill.tagName).toBe('BUTTON');
    expect(pill).toHaveTextContent('98');
    expect(pill).toHaveTextContent('Reviews Due →'); // affordance arrow
    fireEvent.click(pill);
    expect(onReviewClick).toHaveBeenCalledTimes(1);
  });

  it('is NOT interactive when nothing is due (no dead button)', () => {
    const onReviewClick = vi.fn();
    renderCard({ wordsdue: 0, onReviewClick });
    const pill = screen.getByTestId('reviews-due-pill');
    expect(pill.tagName).not.toBe('BUTTON');
    expect(pill).toHaveTextContent('Reviews Due');
    expect(pill).not.toHaveTextContent('→');
  });

  it('does not render a "phrases waiting for review" nag line', () => {
    renderCard({ wordsdue: 98 });
    expect(screen.queryByText(/phrases waiting for review/i)).toBeNull();
    expect(screen.queryByText(/čeka ponavljanje/i)).toBeNull();
  });
});

describe('SessionCard — complete-state constant prompt (owner directive 2026-08-17)', () => {
  const completeProps = {
    session: { ...baseSession, completedIds: ['flashcards'] },
    isComplete: true,
    progress: 1,
    nextActivity: null,
  };

  it('leads with ONE commanding next exercise when the engine supplies it — HERO ONLY', () => {
    const onNextStart = vi.fn();
    renderCard({
      ...completeProps,
      nextStep: { label: 'Review 12 phrases with prof. Kovač', reason: 'Reviews are due now.' },
      onNextStart,
      // Even when the parallel options exist, the guided path shows NONE of
      // them (owner directive 2026-08-17: hero only — guided learning path).
      bonusActivities: [{ id: 'b1', label: 'Bonus drill', screen: 'cloze', category: 'general' }],
      onBonusStart: vi.fn(),
      onStartFresh: vi.fn(),
    });
    const primary = screen.getByTestId('next-up-primary');
    expect(primary.textContent).toContain('Review 12 phrases');
    expect(screen.getByText('Reviews are due now.')).toBeTruthy();
    expect(screen.queryByText('Practice more →')).toBeNull();
    expect(screen.queryByTestId('bonus-activities')).toBeNull();
    expect(screen.queryByTestId('start-fresh-session')).toBeNull();
    fireEvent.click(primary);
    expect(onNextStart).toHaveBeenCalledTimes(1);
  });

  it('falls back to the legacy Practice-more CTA when no recommendation is supplied', () => {
    renderCard({ ...completeProps });
    expect(screen.queryByTestId('next-up-primary')).toBeNull();
    expect(screen.getByText('Practice more →')).toBeTruthy();
  });
});
