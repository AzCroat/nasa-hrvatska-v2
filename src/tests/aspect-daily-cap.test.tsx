/**
 * aspect-daily-cap.test.tsx — the Verb Aspect drill is capped inside the daily
 * session (Dnevna Vježba) so it's finishable in one sitting and reaches its
 * completion trigger, while standalone practice keeps the full pool.
 *
 * The cap is keyed on sessionStorage 'nh_session_started' === 'aspectdrill'
 * (written only by HomeTab's daily-session launcher). rnd() → 0.99 makes sh()
 * an identity shuffle, so slice(0, 3) deterministically takes the first 3 pairs.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

vi.mock('firebase/app', () => ({ initializeApp: vi.fn(() => ({})), getApps: vi.fn(() => []) }));
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  setPersistence: vi.fn(() => Promise.resolve()),
  browserLocalPersistence: {},
  onAuthStateChanged: vi.fn(() => () => {}),
  initializeAuth: vi.fn(() => ({})),
  indexedDBLocalPersistence: {},
  browserSessionPersistence: {},
  inMemoryPersistence: {},
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

vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../lib/adaptive.js', () => ({ recordTopicResult: vi.fn() }));
vi.mock('../lib/random.js', () => ({ rnd: vi.fn(() => 0.99) })); // sh() = identity

vi.mock('../context/StatsContext', () => ({
  useStats: vi.fn(() => ({
    stats: { vs: [] as string[], gc: 0 },
    setStats: vi.fn(),
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
    writeDelta: vi.fn(),
  })),
  StatsProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));

vi.mock('../data', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...(actual as object), srMark: vi.fn() };
});

// 5 pairs — enough to prove the 3-pair cap (3 < 5).
const FIVE_PAIRS = Array.from({ length: 5 }, (_, i) => ({
  impf: `impf${i}`,
  pf: `pf${i}`,
  en: `verb ${i}`,
  rule: 'na- prefix marks completion',
  ctx: `Svaki dan ${i}. / Napravio sam ${i}.`,
}));

vi.mock('../hooks/useGrammar', () => ({
  useGrammar: () => ({
    grammar: { ASPECT_PAIRS: FIVE_PAIRS },
    loading: false,
    error: null,
    reload: () => {},
  }),
}));

import AspectDrillScreen from '../components/practice/AspectDrillScreen';

describe('AspectDrillScreen — daily-session pair cap', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('caps to 3 pairs when launched from the daily session', () => {
    sessionStorage.setItem('nh_session_started', 'aspectdrill');
    render(<AspectDrillScreen goBack={vi.fn()} award={vi.fn()} />);
    // Progress counter is "Pair {idx+1}/{total}" — total must be the cap (3), not 5.
    expect(screen.getByText(/Pair 1\/3/)).toBeTruthy();
  });

  it('serves the full pool when opened standalone (no active daily session)', () => {
    // nh_session_started unset → standalone practice → full 5 pairs.
    render(<AspectDrillScreen goBack={vi.fn()} award={vi.fn()} />);
    expect(screen.getByText(/Pair 1\/5/)).toBeTruthy();
  });

  it('does not treat a different session activity as the aspect drill', () => {
    sessionStorage.setItem('nh_session_started', 'flashcards');
    render(<AspectDrillScreen goBack={vi.fn()} award={vi.fn()} />);
    // A different launched activity must not trigger the aspect cap.
    expect(screen.getByText(/Pair 1\/5/)).toBeTruthy();
  });
});
