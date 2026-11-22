// Back must go where the learner came from, not to the place stored for an exercise they left.
//
// Reproduced in the real app (2026-11-22): start a lesson, leave it with the bottom bar, open
// Profile > My Analytics, press Back -> landed on /learn, not Profile. useScreenLauncher stores a
// return place when an exercise starts and only goBack() cleared it.
import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScreenLauncher } from '../hooks/useScreenLauncher';

type Params = Parameters<typeof useScreenLauncher>[0];

function setup(tab: string) {
  const fns = {
    setScr: vi.fn(),
    navigate: vi.fn(),
    sCurEx: vi.fn(),
    setTab: vi.fn(),
    setFcInitPool: vi.fn(),
  };
  const make = (t: string, screen: string) =>
    ({ ...fns, curEx: '', currentScreen: screen, tab: t }) as unknown as Params;
  const hook = renderHook((p: Params) => useScreenLauncher(p), {
    initialProps: make(tab, 'dashboard'),
  });
  return { fns, hook, make };
}

describe('the stored return place', () => {
  it('Back after an exercise is left by the tab bar does not use the old place', () => {
    const { fns, hook, make } = setup('practice');
    act(() => hook.result.current.launchFlashcards([]));
    expect(fns.setScr).toHaveBeenCalledWith('flashcards');
    // Leave by the tab bar (not Back), then open an unrelated screen under Profile.
    hook.rerender(make('profile', 'analytics'));
    fns.setTab.mockClear();
    fns.setScr.mockClear();
    act(() => hook.result.current.goBack());
    // Never the practice tab the flashcards were started from.
    expect(fns.setTab).not.toHaveBeenCalledWith('practice');
    expect(fns.setScr).not.toHaveBeenCalled();
  });

  it('Back from inside the exercise still returns to where it was started', () => {
    const { fns, hook, make } = setup('practice');
    act(() => hook.result.current.launchFlashcards([]));
    hook.rerender(make('practice', 'flashcards')); // same tab: still inside the exercise
    fns.setTab.mockClear();
    act(() => hook.result.current.goBack());
    expect(fns.setTab).toHaveBeenCalledWith('practice');
  });
});
