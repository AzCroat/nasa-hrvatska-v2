/**
 * The onboarding CTAs must still navigate when localStorage rejects writes.
 *
 * Every placement CTA had the same shape: write a marker, THEN call the thing
 * that actually leaves the screen. Because the write was bare, a storage that
 * rejects writes (Safari Private Browsing, a quota-exhausted profile, a
 * policy-restricted profile) threw before the navigation and the button did
 * nothing at all — no error, no movement. For a brand-new user this is a dead
 * end: placement is the first thing they see and there is no way past it.
 *
 *   auth/PlacementTest   the "Skip — I'll start at A1" CTA wrote
 *                        nh_placement_done + nh_level before onComplete(1),
 *                        and the finish CTA wrote nh_level before
 *                        onComplete(placedLevel).
 *   home/PlacementTest   the finish and skip CTAs wrote nh_placement_done
 *                        before setSt / setScr / setTab. Its per-skill score
 *                        writes are worse still — they run DURING RENDER of
 *                        the results screen, so a throw took the whole screen
 *                        to the ErrorBoundary.
 *
 * This covers the auth skip CTA, which is reachable on first render and so can
 * be driven end-to-end. The home screen needs eleven quiz-state props to reach
 * its results view; its writes are the same one-line change and are verified by
 * reading them.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import PlacementTest from '../components/auth/PlacementTest';

describe('placement CTAs survive an unwritable localStorage', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('"Skip — I\'ll start at A1" still calls onComplete when every write throws', () => {
    const onComplete = vi.fn();
    render(<PlacementTest onComplete={onComplete} onCancel={vi.fn()} />);

    // Break storage only AFTER mount, so this isolates the click handler rather
    // than any render-time read.
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('QuotaExceededError');
    });

    const skip = screen.getByText(/Skip — I'll start at A1/);
    expect(() => fireEvent.click(skip)).not.toThrow();
    // The navigation is the point: without the guard the throw happened first
    // and onComplete was never reached.
    expect(onComplete).toHaveBeenCalledWith(1);
  });

  it('the same CTA works normally and persists when storage is healthy', () => {
    const onComplete = vi.fn();
    render(<PlacementTest onComplete={onComplete} onCancel={vi.fn()} />);
    fireEvent.click(screen.getByText(/Skip — I'll start at A1/));
    expect(onComplete).toHaveBeenCalledWith(1);
    expect(localStorage.getItem('nh_placement_done')).toBe('true');
    expect(localStorage.getItem('nh_level')).toBe('A1');
  });
});

// ── Screens whose first render reads localStorage ─────────────────────────────
//
// Reads THROW (SecurityError), not return null, when site data is blocked. Three
// screens read bare on the render path, so on such a profile they did not
// degrade — they crashed to the ErrorBoundary the moment they opened:
//
//   SlangScreen        two useState initialisers, one of which also called
//                      removeItem to consume a one-shot deep-link section.
//   BakaSummer         the resume-chapter and bonus-awarded initialisers.
//   ProgressTabContent the activity-heatmap helper and the daily-goal nudge
//                      IIFE, both evaluated inline during render.
//
// SlangScreen is covered end-to-end here because it renders standalone; the
// other two need app context, and their reads are the same one-line change.
describe('SlangScreen opens on a profile that blocks site data', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('renders instead of throwing when every localStorage read throws', async () => {
    const SlangScreen = (await import('../components/practice/SlangScreen')).default;
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('SecurityError');
    });
    vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
      throw new DOMException('SecurityError');
    });
    // Before the fix the useState initialisers threw during the first render,
    // which React surfaces as a throw out of render().
    expect(() => render(<SlangScreen goBack={vi.fn()} award={vi.fn()} />)).not.toThrow();
  });
});
