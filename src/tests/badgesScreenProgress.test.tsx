/**
 * badgesScreenProgress — the number beside a badge must be the number the badge
 * is judged on (2026-09-23)
 *
 * `read3`'s progress row read `stats.readingDone`, which nothing in the app has
 * ever written, while the PREDICATE was fixed by #678 to fall back on the
 * `reading_*` markers `ReadingScreen` writes into `stats.vs`. So a learner who
 * had genuinely finished one or two passages saw a frozen `🔒 0 / 3` and then a
 * jump straight to earned. The bar and the badge disagreed because they read
 * different fields.
 *
 * This asserts the RENDERED text rather than pinning the source line: a source
 * pin survives the right value being computed and then dropped on the way to
 * the screen, which is the miss this repo keeps rediscovering.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { BADGES } from '../lib/appUtils';

vi.mock('../data', () => ({
  H: (title: string) => React.createElement('h1', null, title),
  // The REAL badge list — a stubbed one would let the progress map and the
  // predicate drift apart without this test noticing.
  get BADGES() {
    return BADGES;
  },
  getStreak: () => ({ count: 0, last: '' }),
  getSR: () => ({}),
}));
vi.mock('../components/shared/BadgeArtwork', () => ({
  default: () => React.createElement('div', { 'data-testid': 'badge-art' }),
}));

import BadgesScreen from '../components/profile/BadgesScreen';

function renderBadges(stats: Record<string, unknown>, earned: string[] = []) {
  return render(
    React.createElement(BadgesScreen, {
      badges: earned,
      stats: stats as never,
      goBack: () => {},
    }),
  );
}

beforeEach(() => cleanup());

/**
 * Scope to the read3 CARD. `🔒 0 / 3` is not unique on this screen — the 3-day
 * streak badge renders the same string — so a page-wide query matches several
 * elements and throws. Find the badge by its own name, then read the progress
 * line inside its card.
 */
function readingProProgress(): string | null {
  const name = screen.getByText('Reading Pro');
  const card = name.closest('.c');
  const line = [...(card?.querySelectorAll('div') ?? [])].find((d) =>
    /^🔒 [\d,]+ \/ [\d,]+$/.test(d.textContent?.trim() ?? ''),
  );
  return line ? line.textContent!.trim() : null;
}

describe('BadgesScreen read3 progress', () => {
  it('counts the passages the learner has actually finished', () => {
    renderBadges({ xp: 100, vs: ['reading_Prvi', 'reading_Drugi'] });
    expect(readingProProgress()).toBe('🔒 2 / 3');
  });

  it('shows 0 / 3 only when nothing has been read', () => {
    // Non-vacuity: the assertion above must be able to tell 2 from 0. Before
    // the fix BOTH of these rendered 0 / 3.
    renderBadges({ xp: 100, vs: ['alphabet'] });
    expect(readingProProgress()).toBe('🔒 0 / 3');
  });

  it('keeps a legacy synced readingDone as a floor', () => {
    renderBadges({ xp: 100, readingDone: 2, vs: [] });
    expect(readingProProgress()).toBe('🔒 2 / 3');
  });

  it('agrees with the predicate at the boundary — 3 passages earns it', () => {
    // The row and the badge must flip together. With three markers the badge is
    // earnable, so the card shows Earned and no locked progress line remains.
    const stats = { xp: 100, vs: ['reading_A', 'reading_B', 'reading_C'] };
    const read3 = BADGES.find((b) => b.id === 'read3')!;
    expect(read3.r(stats)).toBe(true);
    renderBadges(stats, ['read3']);
    expect(readingProProgress()).toBeNull();
    expect(screen.getByText('Reading Pro').closest('.c')!.textContent).toMatch(/Earned/);
  });
});
