/**
 * SWEEP 118 — "💾 SAVE STORY" SAVED NOWHERE.
 *
 * `HeritageStoryScreen` has written the learner's AI-generated heritage story to
 * `heritageStory` since it shipped, answered "✅ Saved!", and **nothing read the
 * key back** — not this screen on its next mount, not the profile, nothing on any
 * device. Navigating away discarded the story; coming back showed the empty form
 * and cost another Claude call to regenerate what the learner had just asked the
 * app to keep. `progressSnapshot` and `applyRemoteProgress` faithfully carried the
 * key to the learner's other devices, where it was equally unreadable.
 *
 * These tests render the REAL screen, because the defect was never in the write —
 * the write worked perfectly — but in what happens on the NEXT mount.
 */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeritageStoryScreen from '../components/croatia/HeritageStoryScreen';

vi.mock('../hooks/useOnlineStatus', () => ({ useOnlineStatus: () => ({ isOnline: true }) }));

/**
 * jsdom has no IntersectionObserver, and the screen marks a narrative part READ
 * when one reports it on screen — which is what pays the 20 XP. The stub reports
 * every observed part as fully visible, so the award path runs for real; `observed`
 * is the FLOOR that keeps the `not.toHaveBeenCalled()` below from passing because
 * nothing happened at all.
 */
let observed = 0;
class IOStub {
  cb: (e: { isIntersecting: boolean; intersectionRatio: number }[]) => void;
  constructor(cb: (e: { isIntersecting: boolean; intersectionRatio: number }[]) => void) {
    this.cb = cb;
  }
  observe() {
    observed += 1;
    this.cb([{ isIntersecting: true, intersectionRatio: 1 }]);
  }
  disconnect() {}
  unobserve() {}
}

const entry = {
  savedAt: '2026-09-25T06:00:00.000Z',
  region: 'Slavonia',
  era: 'Early 1900s',
  userName: 'Ivan',
  title: 'The Long Road From Osijek',
  parts: [
    { heading: 'The village', text: 'Your family kept bees on the plain.' },
    { heading: 'The crossing', text: 'They sailed in the spring of 1904.' },
    { heading: 'The name', text: 'The name survived the harbour clerk.' },
  ],
};

beforeEach(() => {
  localStorage.clear();
  observed = 0;
  vi.restoreAllMocks();
  vi.stubGlobal('IntersectionObserver', IOStub);
});
afterEach(() => {
  vi.unstubAllGlobals();
});

describe('a saved heritage story comes back', () => {
  it('opens ON the saved story, not on the empty form', () => {
    localStorage.setItem('heritageStory', JSON.stringify(entry));
    render(<HeritageStoryScreen />);
    expect(screen.getByText('The Long Road From Osijek')).toBeTruthy();
    expect(screen.getByText('Your family kept bees on the plain.')).toBeTruthy();
    // The button that made the promise now reflects that it was kept.
    expect(screen.getByText('✅ Saved!')).toBeTruthy();
  });

  it('restores it without asking the AI for it again', () => {
    const fetchSpy = vi.fn(() => Promise.reject(new Error('no network in this test')));
    vi.stubGlobal('fetch', fetchSpy);
    localStorage.setItem('heritageStory', JSON.stringify(entry));
    render(<HeritageStoryScreen />);
    expect(screen.getByText('The Long Road From Osijek')).toBeTruthy();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('restores the region it was generated for, not the default', () => {
    // The story phase paints the region's own image and colour; restoring the
    // story without its region would frame a Slavonian story in Dalmatia.
    localStorage.setItem('heritageStory', JSON.stringify(entry));
    const { container } = render(<HeritageStoryScreen />);
    const img = container.querySelector('img');
    expect(img?.getAttribute('alt')).toBe('Slavonia');
  });

  it('with nothing saved it still opens on the form', () => {
    render(<HeritageStoryScreen />);
    expect(screen.getByText(/Your Croatian Heritage/)).toBeTruthy();
    expect(screen.queryByText('✅ Saved!')).toBeNull();
  });

  it('a malformed or part-less entry opens the form rather than an empty story frame', () => {
    localStorage.setItem('heritageStory', JSON.stringify({ region: 'Slavonia', parts: [] }));
    const { unmount } = render(<HeritageStoryScreen />);
    expect(screen.getByText(/Your Croatian Heritage/)).toBeTruthy();
    unmount();

    localStorage.setItem('heritageStory', '{not json');
    render(<HeritageStoryScreen />);
    expect(screen.getByText(/Your Croatian Heritage/)).toBeTruthy();
  });

  it('a restored story cannot be read for the award a second time', () => {
    // The 20 XP + culture quest fire once three parts have been read, and the
    // guard is a per-mount ref. Restoring without seeding it would make "open the
    // screen, tap three parts, leave" pay on every visit for ever, with no AI call
    // in the way — the throttle that used to make that impossible.
    const award = vi.fn();
    localStorage.setItem('heritageStory', JSON.stringify(entry));
    render(<HeritageStoryScreen award={award} />);
    expect(observed, 'the three parts were never observed — the award path never ran').toBe(3);
    expect(award).not.toHaveBeenCalled();
  });
});
