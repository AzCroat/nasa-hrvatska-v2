/**
 * pooledLaunchNeverSilent — a tap on a vocabulary exercise either opens it or
 * says why not.
 *
 * THE FINDING (sweep 97, 2026-09-24). `LearningCenter.openScreen` carries a
 * comment written when CI caught this exact race: **"NOT LOADED YET" and
 * "EMPTY" are different facts**, the vocabulary arrives from
 * `/api/content/core` after first paint, and a learner who taps straight away
 * has a null `content` for a reason that has nothing to do with their deck.
 *
 * That fix reached ONE of the surfaces that build these payloads. The Grad tab
 * — the app's primary route to the same five screens — was never touched.
 * Measured against the real build, during the window before content lands:
 *
 *   Govori        NOTHING AT ALL. `launchSpeaking` opens with
 *                 `if (!items || items.length === 0) return;`
 *   Kviz          NOTHING AT ALL. `launchMcGame` does the same.
 *   Kartice       the ScreenGuard: "This flashcard session needs to be started
 *                 from the Practice tab — your previous session data couldn't
 *                 be restored", said to a learner standing on the Practice tab
 *                 about a session that never existed.
 *   Spoji parove  the same false message.
 *   Slušanje      works — its bank is a static import, not content.
 *
 * Measured in a real browser (CI-equivalent build, mocked content): the fetch
 * went out at 9.2 s, because `fetchAuthed` awaits `getFirebaseBearer()` and
 * that has a 6 s failsafe when no Firebase user ever arrives. A tap at 5 s did
 * nothing; the same tap at 17 s opened the screen. On a real device the bearer
 * resolves as soon as auth restores, so the window is shorter — but a content
 * fetch that FAILS leaves it open for ever, which is when it matters most.
 *
 * WHY A COMPONENT TEST AND A SOURCE PIN. Rendering proves the three sentences
 * reach the learner; the source pin proves a SIXTH pooled start cannot be added
 * bare, which no amount of rendering the five existing ones can show.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import fs from 'node:fs';
import { poolLaunchBlock, POOL_LAUNCH_COPY } from '../lib/practiceLaunch';

const contentMock = vi.fn();

vi.mock('../context/AppContext', async () => {
  const React = await import('react');
  const Ctx = React.createContext(null);
  return { default: Ctx, useApp: () => ({ setScr: vi.fn(), setTab: vi.fn() }) };
});
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 9000, lc: 40, gc: 12 } }),
}));
vi.mock('../hooks/useContent', () => ({ useContent: () => contentMock() }));
vi.mock('../hooks/useAdaptivePractice', () => ({
  useAdaptivePractice: () => ({ practiceQueue: [] }),
}));

import GradTab from '../components/grad/GradTab';

const LAUNCHERS = ['onLaunchQuiz', 'onLaunchFlash', 'onLaunchMatch', 'onLaunchSpeaking'] as const;

function props() {
  return {
    allCats: ['greetings'],
    sh: <T,>(a: T[]) => a,
    sCurEx: vi.fn(),
    onLaunchQuiz: vi.fn(),
    onLaunchFlash: vi.fn(),
    onLaunchListen: vi.fn(),
    onLaunchMatch: vi.fn(),
    onLaunchSpeaking: vi.fn(),
    award: vi.fn(),
    launchPathItem: vi.fn(),
  };
}

const LOADED = {
  V: {
    greetings: [
      ['Bog', 'Hi', 'bog'],
      ['Hvala', 'Thanks', 'hvala'],
    ],
  },
};

/** Open Anina kavana and tap Govori — the taps a learner actually performs. */
function tapGovori(p: ReturnType<typeof props>) {
  render(<GradTab {...p} />);
  fireEvent.click(screen.getByText('Anina kavana'));
  fireEvent.click(screen.getByText(/Govori/));
}

describe('a pooled launch never fails silently', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('says the words are still loading — not that there is nothing to practise', () => {
    contentMock.mockReturnValue({ content: null, loading: true });
    const p = props();
    tapGovori(p);
    expect(p.onLaunchSpeaking).not.toHaveBeenCalled();
    expect(screen.getByTestId('grad-launch-error')).toHaveTextContent(POOL_LAUNCH_COPY.loading);
    // The distinction this whole change is about: "try a lesson first" is
    // false advice while the request is still in flight.
    expect(screen.getByTestId('grad-launch-error')).not.toHaveTextContent(POOL_LAUNCH_COPY.empty);
  });

  it('says the word list could not be loaded when the fetch is done and gave nothing', () => {
    contentMock.mockReturnValue({ content: null, loading: false });
    const p = props();
    tapGovori(p);
    expect(p.onLaunchSpeaking).not.toHaveBeenCalled();
    expect(screen.getByTestId('grad-launch-error')).toHaveTextContent(POOL_LAUNCH_COPY.unavailable);
  });

  it('says there is nothing ready only when content really did load empty', () => {
    contentMock.mockReturnValue({ content: { V: {} }, loading: false });
    const p = props();
    tapGovori(p);
    expect(p.onLaunchSpeaking).not.toHaveBeenCalled();
    expect(screen.getByTestId('grad-launch-error')).toHaveTextContent(POOL_LAUNCH_COPY.empty);
  });

  it('opens the exercise, and shows nothing, once the words are there', () => {
    contentMock.mockReturnValue({ content: LOADED, loading: false });
    const p = props();
    tapGovori(p);
    expect(p.onLaunchSpeaking).toHaveBeenCalledTimes(1);
    expect(p.onLaunchSpeaking.mock.calls[0][0].length).toBeGreaterThan(0);
    expect(screen.queryByTestId('grad-launch-error')).toBeNull();
  });

  it('no pooled tap in Markova tržnica is silent while content is loading', () => {
    // Kviz / Kartice / Spoji parove — the three that shared the defect with
    // Govori, two silently and one through the false ScreenGuard.
    for (const label of [/Kviz/, /Kartice/, /Spoji parove/]) {
      contentMock.mockReturnValue({ content: null, loading: true });
      const p = props();
      const view = render(<GradTab {...p} />);
      fireEvent.click(screen.getByText('Markova tržnica'));
      fireEvent.click(screen.getByText(label));
      for (const k of LAUNCHERS) expect(p[k], `${label} launched anyway`).not.toHaveBeenCalled();
      expect(screen.getByTestId('grad-launch-error')).toHaveTextContent(POOL_LAUNCH_COPY.loading);
      view.unmount();
    }
  });

  it('decides content before emptiness — the order is the whole point', () => {
    // A pure check of the rule both surfaces now share, so a caller reading it
    // the other way round cannot claim "nothing to practise" about a deck the
    // app has never seen.
    expect(poolLaunchBlock(null, true, [])).toBe('loading');
    expect(poolLaunchBlock(null, false, [])).toBe('unavailable');
    expect(poolLaunchBlock({ V: {} }, false, [])).toBe('empty');
    expect(poolLaunchBlock({ V: {} }, false, [1])).toBeNull();
    // Loading is about CONTENT, not about the payload: content present and a
    // genuinely empty deck is 'empty' even mid-refetch.
    expect(poolLaunchBlock({ V: {} }, true, [])).toBe('empty');
  });

  it('every surface that builds a pooled payload asks this question', () => {
    // THE SOURCE PIN. Rendering the five existing starts says nothing about a
    // sixth. A surface that imports a payload builder is by definition about to
    // hand a launcher a list that can be empty, so it must also import the
    // decision — the `speakingCoachReachable` shape, comments stripped so a
    // file that merely NAMES the helper in prose cannot satisfy it.
    const files = ['src/components/grad/GradTab.tsx', 'src/components/learn/LearningCenter.tsx'];
    const builders = /\b(flashcardPool|quizItems|matchPool|speakingItems)\s*\(/;
    let checked = 0;
    for (const f of files) {
      const src = fs
        .readFileSync(f, 'utf8')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/^\s*\/\/.*$/gm, '');
      expect(builders.test(src), `${f} no longer builds a pooled payload`).toBe(true);
      expect(src, `${f} builds a pooled payload without asking poolLaunchBlock`).toMatch(
        /poolLaunchBlock\s*\(/,
      );
      checked++;
    }
    expect(checked).toBe(files.length);
  });

  it('the Me tab shortcut that had no fallback left now names its cause', () => {
    // GoalFocusSection's speaking shortcut lost its speaking_sprint fallback and
    // was left with `if (pool.length > 0 && launchSpeaking) launchSpeaking(pool)`
    // — nothing on the else. Same silence, a third surface.
    const src = fs
      .readFileSync('src/components/profile/sections/GoalFocusSection.tsx', 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/.*$/gm, '');
    expect(src).toMatch(/poolLaunchBlock\s*\(/);
    expect(src).toMatch(/goal-launch-error/);
  });
});
