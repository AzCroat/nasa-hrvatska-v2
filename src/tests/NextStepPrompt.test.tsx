/**
 * NextStepPrompt.test.tsx — the constant prompt bar (owner directive,
 * 2026-08-16). Contract: appears after any exercise-complete event with ONE
 * recommendation, launches it through the safe launcher, and dismisses on any
 * navigation so it never stacks with a landing surface's own prompting.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';

const getNextStep = vi.fn();
vi.mock('../lib/nextStep', () => ({
  getNextStep: (...a: unknown[]) => getNextStep(...a),
}));
vi.mock('../hooks/useContent', () => ({
  useContent: () => ({ content: null, loading: false, error: null, reload: () => {} }),
}));

import AppContext from '../context/AppContext.jsx';
import NextStepPrompt from '../components/shared/NextStepPrompt';
import { EXERCISE_COMPLETE_EVENT } from '../lib/sessionSignal';

const launchSessionActivity = vi.fn();
const setScr = vi.fn();
const setTab = vi.fn();

function renderWith(ctx: Record<string, unknown> = {}) {
  const value = {
    st: { xp: 100, lc: 2, gc: 1 },
    currentScreen: 'genitive',
    tab: 'practice',
    setScr,
    setTab,
    launchSessionActivity,
    ...ctx,
  };
  return render(
    <AppContext.Provider value={value as never}>
      <NextStepPrompt />
    </AppContext.Provider>,
  );
}

function fireComplete() {
  act(() => {
    window.dispatchEvent(
      new CustomEvent(EXERCISE_COMPLETE_EVENT, { detail: { key: 'genitive', passed: true } }),
    );
    vi.advanceTimersByTime(800);
  });
}

beforeEach(() => {
  vi.useFakeTimers();
  sessionStorage.clear();
  getNextStep.mockReturnValue({
    kind: 'discovery',
    screen: 'caseconstellation',
    category: 'grammar',
    label: 'Case Constellation',
    reason: 'Least-recently practiced.',
  });
  launchSessionActivity.mockReset();
  setScr.mockReset();
  setTab.mockReset();
});
afterEach(() => vi.useRealTimers());

describe('NextStepPrompt', () => {
  it('is invisible until a completion event fires, then shows ONE recommendation', () => {
    renderWith();
    expect(screen.queryByTestId('next-up-bar')).toBeNull();
    fireComplete();
    const bar = screen.getByTestId('next-up-bar');
    expect(bar.textContent).toContain('Next up: Case Constellation');
    expect(bar.textContent).toContain('Least-recently practiced.');
  });

  it('tapping the bar launches via launchSessionActivity and hides', () => {
    renderWith();
    fireComplete();
    fireEvent.click(screen.getByTestId('next-up-bar'));
    expect(launchSessionActivity).toHaveBeenCalledWith('caseconstellation', 'grammar');
    expect(screen.queryByTestId('next-up-bar')).toBeNull();
  });

  it('a session-kind step sets the session credit markers before launching', () => {
    getNextStep.mockReturnValue({
      kind: 'session',
      screen: 'dialogue',
      category: 'conversation',
      activityId: 'a2',
      label: "Continue today's session — Dialogue practice",
      reason: '1 of 2 done.',
    });
    renderWith();
    fireComplete();
    fireEvent.click(screen.getByTestId('next-up-bar'));
    expect(sessionStorage.getItem('nh_session_started')).toBe('dialogue');
    expect(launchSessionActivity).toHaveBeenCalledWith('dialogue', 'conversation');
  });

  it('a verification step routes straight to the Level Check', () => {
    getNextStep.mockReturnValue({
      kind: 'verification',
      screen: 'equivalency',
      label: 'Verify B1 — make it real',
      reason: 'Provisional until checked.',
    });
    renderWith();
    fireComplete();
    fireEvent.click(screen.getByTestId('next-up-bar'));
    expect(setScr).toHaveBeenCalledWith('equivalency');
    expect(launchSessionActivity).not.toHaveBeenCalled();
  });

  it('a browse step hands off to the Learn tab library', () => {
    getNextStep.mockReturnValue({
      kind: 'browse',
      screen: '',
      label: 'Explore the library',
      reason: 'Pick anything.',
    });
    renderWith();
    fireComplete();
    fireEvent.click(screen.getByTestId('next-up-bar'));
    expect(sessionStorage.getItem('nh_open_browse')).toBe('1');
    expect(setTab).toHaveBeenCalledWith('learn');
  });

  it('any navigation dismisses the prompt (the landing surface takes over)', () => {
    const { rerender } = renderWith();
    fireComplete();
    expect(screen.getByTestId('next-up-bar')).toBeTruthy();
    rerender(
      <AppContext.Provider
        value={
          {
            st: { xp: 100, lc: 2, gc: 1 },
            currentScreen: 'dashboard', // user navigated away
            tab: 'home',
            setScr,
            setTab,
            launchSessionActivity,
          } as never
        }
      >
        <NextStepPrompt />
      </AppContext.Provider>,
    );
    expect(screen.queryByTestId('next-up-bar')).toBeNull();
  });
});
