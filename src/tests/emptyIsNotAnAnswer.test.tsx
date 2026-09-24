/**
 * emptyIsNotAnAnswer.test.tsx — "empty" and "the payload has not arrived" are
 * the same expression, and four surfaces read it as the first (2026-09-24).
 *
 * THE DEFECTS. Every one is a sentence about the learner's own deck, said
 * before the app had seen it — and said for ever after a failed fetch, since
 * `content` then stays null:
 *
 *   ReviewScreen         a green tick and "All caught up! No reviews due right
 *                        now." — on the app's highest-volume daily action, to a
 *                        learner whose Home pill had just said words were due.
 *                        The pill counts against the SAME `vocabPool` derivation,
 *                        which is exactly the disagreement the vocab-deck work
 *                        exists to make impossible; this window was the one place
 *                        it could still happen.
 *   SpeedChallenge       "Complete a few vocabulary lessons first to unlock Speed
 *                        Challenge!" — on HOME, the first screen, verbatim the lie
 *                        `LearningCenter.openScreen`'s own comment records.
 *   AdvancedVocabScreen  "No words match your search." — a search that ran
 *                        against nothing found nothing.
 *   WordSprint           "Start Sprint ⚡" did NOTHING (`if (pool.length < 4)
 *                        return;`). Sweep 97's own "what this does not cover"
 *                        names this shape: a screen that builds its own list from
 *                        content instead of importing a payload builder.
 *
 * Two more screens (`TypingScreen`, `ShadowingScreen`) already split loading from
 * empty and are the convention the fix follows; their one residue was
 * `content ? … : 'Loading…'`, which says "Loading…" for ever after a failure.
 * All six now route through `poolLaunchBlock` — the classifier sweep 97 already
 * built, which decides CONTENT before EMPTINESS.
 *
 * Mutation-verified (see the commit message).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { emptyClaimSurfaces, consultsClassifier } from './helpers/emptyClaimSurfaces';
import { poolLaunchBlock } from '../lib/practiceLaunch';

/**
 * The ratchet. Any surface that branches on content-derived emptiness must ask
 * the shared classifier, so it cannot claim the learner's deck is empty while
 * the request is still in flight.
 *
 * Exemptions carry a reason and are checked in BOTH staleness directions — the
 * `couplingClearingPath` rule.
 */
const EXEMPT: Record<string, string> = {
  'src/components/croatia/CultureDeepDiveScreen.tsx':
    'guards `loading || !content` ABOVE its !essays.length branch, so that branch ' +
    'can only mean a stale cached payload without the CULTURE_DEEP_DIVES key — ' +
    'which is what its message says.',
  'src/components/home/HeroSection.tsx':
    'its fallback is the neutral LABEL "Learning", not a claim about the learner — ' +
    'before the payload lands the hero is less specific ("Learning" rather than ' +
    '"Naš Čovjek"), which states nothing false; the classifier copy would be wrong ' +
    'here because there is no pool and nothing to retry.',
  'src/components/profile/LearnPath.tsx':
    'fixed in sweep 99 with its own `contentLoading` split (learnpath-unavailable); ' +
    'its claim is about the PATH, not a word pool, so the pool copy would be wrong.',
};

describe('no surface reads an unarrived payload as an empty deck', () => {
  const surfaces = emptyClaimSurfaces();

  it('the derivation has subjects — otherwise every assertion here is vacuous', () => {
    expect(surfaces.length).toBeGreaterThan(4);
    for (const s of surfaces) expect(s.conditions.length).toBeGreaterThan(0);
  });

  it('every empty-claim surface consults poolLaunchBlock', () => {
    const silent = surfaces
      .filter((s) => !EXEMPT[s.file] && !consultsClassifier(s.file))
      .map((s) => `${s.file}: ${s.conditions.join(' | ')}`);
    expect(
      silent,
      'these surfaces decide "the learner has nothing" from a collection that is ' +
        'also empty while the content request is in flight',
    ).toEqual([]);
  });

  it('each exemption still names a real surface, and still needs exempting', () => {
    for (const [file, reason] of Object.entries(EXEMPT)) {
      expect(reason.length, `${file} has no stated reason`).toBeGreaterThan(40);
      const hit = surfaces.find((s) => s.file === file);
      expect(hit, `${file} no longer branches on content-derived emptiness — drop it`).toBeTruthy();
      expect(
        consultsClassifier(file),
        `${file} now consults poolLaunchBlock — the exemption guards nothing`,
      ).toBe(false);
    }
  });

  it('the four screens this sweep fixed are IN the derivation and DO consult it', () => {
    for (const f of [
      'src/components/practice/ReviewScreen.tsx',
      'src/components/home/SpeedChallenge.tsx',
      'src/components/learn/AdvancedVocabScreen.tsx',
      'src/components/practice/WordSprint.tsx',
    ]) {
      expect(consultsClassifier(f), `${f} stopped consulting the classifier`).toBe(true);
    }
  });
});

/**
 * The EFFECT. A source pin says a screen calls the classifier; only rendering it
 * says the learner reads the right sentence — and the dangerous direction here is
 * a call whose result is dropped.
 */
vi.mock('firebase/app', () => ({ initializeApp: vi.fn(() => ({})), getApps: vi.fn(() => []) }));
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn(() => () => {}),
  initializeAuth: vi.fn(() => ({})),
  browserLocalPersistence: {},
  indexedDBLocalPersistence: {},
  browserSessionPersistence: {},
  inMemoryPersistence: {},
  setPersistence: vi.fn(() => Promise.resolve()),
  GoogleAuthProvider: vi.fn(() => ({})),
}));
vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})),
  doc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
  collection: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  limit: vi.fn(),
  orderBy: vi.fn(),
}));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({
    stats: { vs: [], xp: 400, lc: 4, gc: 2 },
    setStats: vi.fn(),
    writeDelta: vi.fn(),
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
  }),
  StatsProvider: ({ children }: { children: React.ReactNode }) => children,
}));
vi.mock('../hooks/useHaptic', () => ({
  useHaptic: () => ({ correct: vi.fn(), wrong: vi.fn(), tap: vi.fn(), success: vi.fn() }),
}));
vi.mock('../data', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>;
  return { ...actual, speak: vi.fn(), speakSlow: vi.fn() };
});

const state = vi.fn<[], { content: unknown; loading: boolean; error: unknown }>(() => ({
  content: null,
  loading: true,
  error: null,
}));
vi.mock('../hooks/useContent', () => ({
  useContent: () => state(),
  peekContent: () => state().content,
}));

import ReviewScreen from '../components/practice/ReviewScreen';

const STATS = { xp: 400, lc: 4, gc: 2, badges: [], vs: [] } as never;

describe('Review Due does not congratulate a learner whose cards have not arrived', () => {
  beforeEach(() => {
    state.mockReturnValue({ content: null, loading: true, error: null });
  });

  it('says it is loading, and never "All caught up!"', () => {
    render(<ReviewScreen stats={STATS} goBack={() => {}} allCats={['basics']} />);
    const notice = screen.getByTestId('review-unavailable');
    expect(notice.getAttribute('data-pool-block')).toBe('loading');
    expect(screen.queryByText(/All caught up/i)).toBeNull();
    expect(screen.queryByText(/No reviews due right now/i)).toBeNull();
  });

  it('names the failure once the request has finished with no content', () => {
    state.mockReturnValue({ content: null, loading: false, error: new Error('offline') });
    render(<ReviewScreen stats={STATS} goBack={() => {}} allCats={['basics']} />);
    const notice = screen.getByTestId('review-unavailable');
    expect(notice.getAttribute('data-pool-block')).toBe('unavailable');
    expect(notice.textContent).toMatch(/could ?n.t be loaded/i);
    expect(screen.queryByText(/All caught up/i)).toBeNull();
  });

  it('the classifier itself decides content before emptiness', () => {
    // The ordering IS the fix; asserted directly so it cannot be inferred only
    // from a rendering that happens to agree.
    expect(poolLaunchBlock(null, true, [])).toBe('loading');
    expect(poolLaunchBlock(null, false, [])).toBe('unavailable');
    expect(poolLaunchBlock({ V: {} }, false, [])).toBe('empty');
    expect(poolLaunchBlock({ V: {} }, false, [1])).toBeNull();
  });
});
