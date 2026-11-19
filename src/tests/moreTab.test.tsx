/**
 * The More tab: three doors into the screens that stopped being tabs, and the nav that
 * says so. Practice, AI Tutor and Croatia stay valid tabs (routes, URLs) but the bar
 * holds exactly Today, Course and More.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { readFileSync } from 'node:fs';

vi.mock('../context/AppContext', () => ({ useApp: () => ({ setScr: vi.fn() }) }));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 0, lc: 0, gc: 0, vs: [], badges: [] } }),
}));
vi.mock('../components/home/DailyInputCard', () => ({ default: () => null }));
vi.mock('../components/home/WeakWordsPanel', () => ({ default: () => null }));
vi.mock('../components/home/TodaysDiscoveries', () => ({ default: () => null }));

import MoreTab from '../components/more/MoreTab';

describe('MoreTab doors', () => {
  it.each([
    ['more-open-practice', 'practice'],
    ['more-open-talk', 'ai'],
    ['more-open-croatia', 'croatia'],
  ])('%s opens the %s tab', (testId, tab) => {
    const setTab = vi.fn();
    render(<MoreTab setTab={setTab} />);
    fireEvent.click(screen.getByTestId(testId));
    expect(setTab).toHaveBeenCalledWith(tab);
  });
});

describe('nav lists', () => {
  const idsOf = (file: string) => {
    const src = readFileSync(file, 'utf8');
    const at = src.indexOf('const TABS = [');
    const block = src.slice(at, src.indexOf('];', at));
    return [...block.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]);
  };
  it('TabBar is exactly home, learn, more', () => {
    expect(idsOf('src/components/shared/TabBar.tsx')).toEqual(['home', 'learn', 'more']);
  });
  it('Sidebar is exactly home, learn, more — the header avatar is the way to the profile', () => {
    expect(idsOf('src/components/shared/Sidebar.tsx')).toEqual(['home', 'learn', 'more']);
  });
});
