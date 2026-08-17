/**
 * NextUpCard.test.tsx — the recommended action pinned atop the Practice tab
 * (owner directive, 2026-08-16: a menu is never just a menu).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

const getNextStep = vi.fn();
vi.mock('../lib/nextStep', () => ({
  getNextStep: (...a: unknown[]) => getNextStep(...a),
}));
vi.mock('../hooks/useContent', () => ({
  useContent: () => ({ content: null, loading: false, error: null, reload: () => {} }),
}));

import AppContext from '../context/AppContext.jsx';
import NextUpCard from '../components/shared/NextUpCard';

const launchSessionActivity = vi.fn();
const setScr = vi.fn();
const setTab = vi.fn();

function renderWith() {
  const value = {
    st: { xp: 100, lc: 2, gc: 1 },
    currentScreen: 'dashboard',
    tab: 'practice',
    setScr,
    setTab,
    launchSessionActivity,
  };
  return render(
    <AppContext.Provider value={value as never}>
      <NextUpCard />
    </AppContext.Provider>,
  );
}

beforeEach(() => {
  sessionStorage.clear();
  localStorage.clear();
  launchSessionActivity.mockReset();
  setScr.mockReset();
  setTab.mockReset();
  getNextStep.mockReturnValue({
    kind: 'discovery',
    screen: 'caseconstellation',
    category: 'grammar',
    label: 'Case Constellation',
    reason: 'Least-recently practiced.',
  });
});

describe('NextUpCard', () => {
  it('renders the single recommendation on mount', () => {
    renderWith();
    const card = screen.getByTestId('next-up-card');
    expect(card.textContent).toContain('Case Constellation');
    expect(card.textContent).toContain('Least-recently practiced.');
  });

  it('Start launches the recommendation through the safe launcher', () => {
    renderWith();
    fireEvent.click(screen.getByTestId('next-up-card-start'));
    expect(launchSessionActivity).toHaveBeenCalledWith('caseconstellation', 'grammar');
  });

  it('a verification recommendation routes to the Level Check', () => {
    getNextStep.mockReturnValue({
      kind: 'verification',
      screen: 'equivalency',
      label: 'Verify B1 — make it real',
      reason: 'Provisional until checked.',
    });
    renderWith();
    fireEvent.click(screen.getByTestId('next-up-card-start'));
    expect(setScr).toHaveBeenCalledWith('equivalency');
    expect(launchSessionActivity).not.toHaveBeenCalled();
  });

  it('renders nothing when the engine cannot compute (never a broken card)', () => {
    getNextStep.mockImplementation(() => {
      throw new Error('storage dead');
    });
    renderWith();
    expect(screen.queryByTestId('next-up-card')).toBeNull();
  });
});
