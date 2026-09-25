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
import {
  emptyClaimSurfaces,
  consultsClassifier,
  numericClaimSurfaces,
  escapeRegExp,
  terminalWriteSurfaces,
  zeroSatisfiableCredits,
} from './helpers/emptyClaimSurfaces';
import { poolLaunchBlock } from '../lib/practiceLaunch';
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

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

/**
 * SWEEP 102 — a COUNT is a claim too.
 *
 * `emptyClaimSurfaces` keys on an emptiness TEST and therefore cannot see this
 * shape: nothing compares anything to zero, the count simply IS zero.
 * `AdvancedVocabScreen` rendered **"0/0 learned" over a 0% progress bar** and
 * `VocabSceneComponents` **"0 / 0 words discovered"** — sweep 99's
 * `0 / 0 milestones` in two more places. On AdvancedVocab it sat directly ABOVE
 * the word list sweep 101 had just taught to name its own state, which is the
 * lesson: **fixing one claim on a screen does not fix the others.**
 */
describe('a content-derived COUNT is not rendered before the payload arrives', () => {
  const surfaces = numericClaimSurfaces();

  it('the derivation has subjects', () => {
    expect(surfaces.length).toBeGreaterThan(2);
    for (const s of surfaces) expect(s.rendered.length).toBeGreaterThan(0);
  });

  it('every screen rendering a content-derived count answers the content question', () => {
    const unguarded = surfaces
      .filter((s) => !s.guarded)
      .map((s) => `${s.file}: renders ${s.rendered.join(', ')}`);
    expect(
      unguarded,
      'these screens put a number derived from content on screen with nothing ' +
        'standing between them and an unarrived payload — "0 / 0" is a claim, not a count',
    ).toEqual([]);
  });

  it('the screen this sweep fixed is IN the derivation', () => {
    const f = 'src/components/learn/AdvancedVocabScreen.tsx';
    const hit = surfaces.find((s) => s.file === f);
    expect(hit, `${f} no longer renders a content-derived count`).toBeTruthy();
    expect(hit!.guarded, `${f} stopped answering the content question`).toBe(true);
  });

  it('VocabSceneComponents left the derivation ENTIRELY — sweep 107 removed the question', () => {
    // Sweep 102 taught it to name the state; sweep 107 took it off the payload,
    // so there is no unarrived content for its count to be a claim about. That is
    // why it is absent here and not merely `guarded: true`.
    expect(surfaces.find((s) => s.file === 'src/components/learn/VocabSceneComponents.tsx')).toBe(
      undefined,
    );
  });
});

import { ScenePicker } from '../components/learn/VocabSceneComponents';
import {
  SCENES as STATIC_SCENES,
  TOTAL_WORDS as STATIC_TOTAL_WORDS,
} from '../components/learn/VocabSceneData.js';

/**
 * SWEEP 107 supersedes sweep 102's fix here, and the stronger answer is to remove
 * the question. The picker read `content.SCENES` while its own PARENT
 * (`VocabScenes`) read the byte-identical STATIC copy — so one feature had two
 * datasets, nothing enforced that they agreed, the picker was the app's only
 * reader of that payload key, and the screen waited on a fetch for data already
 * in the bundle (and died permanently on a failed one). A count that does not
 * depend on a payload cannot be a claim about an unarrived payload.
 */
describe('the scene overview reports a real ratio with no payload at all', () => {
  it('lists the scenes and counts them without content, loading or an error', () => {
    state.mockReturnValue({ content: null, loading: true, error: null });
    render(<ScenePicker onSelect={() => {}} allDiscovered={{}} />);
    const el = screen.getByTestId('scene-total-progress');
    expect(el.textContent).not.toMatch(/0\s*\/\s*0/);
    expect(el.textContent).toMatch(new RegExp(`/\\s*${STATIC_TOTAL_WORDS} words discovered`));
    expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(STATIC_SCENES.length);
  });

  it('a failed fetch does not take the feature away — the data is local', () => {
    state.mockReturnValue({ content: null, loading: false, error: new Error('offline') });
    render(<ScenePicker onSelect={() => {}} allDiscovered={{}} />);
    const el = screen.getByTestId('scene-total-progress');
    expect(el.textContent).not.toMatch(/could not be loaded/i);
    expect(el.textContent).toMatch(new RegExp(`/\\s*${STATIC_TOTAL_WORDS} words discovered`));
  });

  it('counts what the learner has actually discovered', () => {
    state.mockReturnValue({ content: null, loading: false, error: null });
    const first = STATIC_SCENES[0] as { id: string; items: { id: string }[] };
    render(
      <ScenePicker
        onSelect={() => {}}
        allDiscovered={{ [first.id]: new Set([first.items[0]!.id]) }}
      />,
    );
    expect(screen.getByTestId('scene-total-progress').textContent).toMatch(
      new RegExp(`^1\\s*/\\s*${STATIC_TOTAL_WORDS} words discovered`),
    );
  });

  it('ONE dataset for one feature: nothing under learn/ reads the payload key', () => {
    // The drift is unrepresentable rather than checked: the picker, the parent
    // that walks the list in handleNextScene, and the explorer that receives the
    // selected scene all import the same module.
    for (const f of [
      'src/components/learn/VocabSceneComponents.tsx',
      'src/components/learn/VocabScenes.tsx',
      'src/components/learn/SceneExplorer.tsx',
    ]) {
      // Comments STRIPPED: these files now explain in prose what they used to
      // read, and an unstripped match fails on the explanation — the same trap
      // in the opposite direction from the guards that passed on a docstring.
      const src = readFileSync(f, 'utf8')
        .replace(/^\s*\/\/.*$/gm, '')
        .replace(/\/\*[\s\S]*?\*\//g, '');
      expect(src, `${f} must not read content.SCENES`).not.toMatch(/content\??\.SCENES/);
      expect(src, `${f} must read the one static dataset`).toMatch(/from '\.\/VocabSceneData\.js'/);
    }
  });
});

/**
 * SWEEP 107 — the CALLBACK twin of sweep 106.
 *
 * Sweep 106 pinned a terminal index test in a RENDER branch and stated the gap it
 * could not see: a credit reached through an EFFECT, gated on a count that simply
 * happens to be zero. `SceneExplorer` was exactly that — `discCount >= total` is
 * `0 >= 0` on a scene with no items, so opening it credited 15 XP and celebrated
 * a completion nobody earned (NEVER-DO 14).
 */
describe('an effect does not credit on a total of zero', () => {
  const surfaces = zeroSatisfiableCredits();

  it('the derivation has subjects', () => {
    // Two today, and both are real — no false positives to train anyone to
    // ignore it. A floor, so a broken matcher cannot pass by finding nothing.
    expect(surfaces.length).toBeGreaterThanOrEqual(2);
    for (const s of surfaces) expect(s.cmp.length).toBeGreaterThan(0);
  });

  it('SceneExplorer is IN it — the surface this sweep fixed', () => {
    const hit = surfaces.find((s) => s.file === 'src/components/learn/SceneExplorer.tsx');
    expect(hit, 'SceneExplorer no longer credits on a length comparison').toBeTruthy();
    expect(hit!.cmp.join(' ')).toMatch(/discCount\s*>=\s*total/);
    // The ACTUAL text, not merely "something matched": a positivity matcher
    // loosened to always return a value hides the original bug from every other
    // assertion here — measured, it left both of them green.
    expect(hit!.positivity).toContain('total > 0');
  });

  it('POSITIVE CONTROL: the matcher reports a .size total, and clears a guarded one', () => {
    // Both of today's real subjects reach the derivation through `.length`, so
    // mutating the `.size` clause out changed NOTHING — it survived, which by this
    // repo's own standard makes it decoration until something exercises it. A
    // Set/Map size is a legitimate total (`discovered.size` IS one), so the clause
    // stays and this control is what makes it load-bearing.
    const dir = mkdtempSync(join(tmpdir(), 'zsc-'));
    writeFileSync(
      join(dir, 'Bad.tsx'),
      'const picked = new Set<string>();\n' +
        'const seen = picked.size;\n' +
        'export default function Bad() {\n' +
        '  useEffect(() => {\n' +
        '    if (seen >= seen) award(5);\n' +
        '  }, []);\n' +
        '  return null;\n' +
        '}\n',
    );
    writeFileSync(
      join(dir, 'Good.tsx'),
      'const picked = new Set<string>();\n' +
        'const seen = picked.size;\n' +
        'export default function Good() {\n' +
        '  useEffect(() => {\n' +
        '    if (seen > 0 && seen >= seen) award(5);\n' +
        '  }, []);\n' +
        '  return null;\n' +
        '}\n',
    );
    const found = zeroSatisfiableCredits([dir]);
    const bad = found.find((f) => f.file.endsWith('Bad.tsx'));
    const good = found.find((f) => f.file.endsWith('Good.tsx'));
    expect(bad, 'a .size total is not reached by the totals scan').toBeTruthy();
    expect(bad!.positivity).toEqual([]);
    expect(good, 'the guarded twin must still be a subject').toBeTruthy();
    expect(good!.positivity.length).toBeGreaterThan(0);
    rmSync(dir, { recursive: true, force: true });
  });

  it('every effect crediting on a length comparison also requires the total to be positive', () => {
    const unguarded = surfaces
      .filter((s) => s.positivity.length === 0)
      .map((s) => `${s.file}:${s.line} credits on ${s.cmp.join(', ')} with nothing requiring > 0`);
    expect(
      unguarded,
      'these effects fire on an EMPTY collection, because `0 >= 0` is true — a ' +
        'credit for work the learner could not do',
    ).toEqual([]);
  });
});

/**
 * Every derivation above feeds itself names read out of SOURCE, and the patterns
 * it builds from them escaped only `$`. That is a correctness bug before it is a
 * scanner finding: `[A-Za-z_$][\w$.]*` admits a dot, and a dot in a regex matches
 * ANY character — the silent-mis-match class this whole hunt is about, inside the
 * tools doing the hunting. Asserted directly rather than trusted to CodeQL going
 * green, which would only ever be evidence about CodeQL.
 */
describe('escapeRegExp makes a derived name match itself and nothing else', () => {
  it('a dotted name does not match an arbitrary character in its place', () => {
    const pattern = new RegExp(`\\b${escapeRegExp('r.timeline')}\\b`);
    expect(pattern.test('r.timeline')).toBe(true);
    expect(pattern.test('rXtimeline'), 'the dot matched any character').toBe(false);
  });

  it('a name with regex syntax in it builds a valid pattern instead of throwing', () => {
    for (const name of ['a(b', 'x[0]', 'y+z', 'q?r', 'end$', '^start', 'a|b', 'back\\slash']) {
      expect(() => new RegExp(`\\b${escapeRegExp(name)}\\b`), name).not.toThrow();
      expect(new RegExp(escapeRegExp(name)).test(name), name).toBe(true);
    }
  });

  it('an UNESCAPED name genuinely fails both of those — the fix is load-bearing', () => {
    // Stated as the literal patterns the old `$`-only escaping produced, rather
    // than by re-implementing that escaping here. A partial-escape function in a
    // test is still a partial-escape function — CodeQL flagged this very block as
    // `js/incomplete-sanitization` (alert 89) and was right to: the rule is about
    // an escape that misses cases, and "it is deliberately wrong, it is a test"
    // is not a property the rule can see. The assertion is better this way too,
    // because it names the regex fact directly instead of via a copy of the bug.
    expect(new RegExp('\\br.timeline\\b').test('rXtimeline')).toBe(true);
    // Bound to a const because `no-invalid-regexp` statically evaluates a direct
    // literal and would fail the lint on this deliberately broken pattern — which
    // is the assertion, not a mistake.
    const unterminatedGroup = '\\ba(b\\b';
    expect(() => new RegExp(unterminatedGroup)).toThrow();
    // And the fixed escaping must differ from the input on exactly these — a
    // pairing that would still catch a no-op `escapeRegExp`.
    expect(escapeRegExp('r.timeline')).not.toBe('r.timeline');
    expect(escapeRegExp('a(b')).not.toBe('a(b');
  });
});

/**
 * SWEEP 106 — an absent payload must not CREDIT anything.
 *
 * Sweeps 100–102 covered false CLAIMS. A write is worse. A screen whose "past the
 * last item" test compares an index against a content-derived length — `tyI >=
 * tyPool.length` — satisfies it at index 0 when the pool is empty, so the terminal
 * branch IS the completion branch and `tyS >= tyPool.length` beside it reads as a
 * perfect score. Measured: no screen is actually reachable that way, because in
 * every case the emptiness guard comes FIRST. That ORDERING is the whole safety
 * property and nothing pinned it — and this codebase has been bitten by the same
 * shape elsewhere (`stopMic` before `stop()`, the Pages secret before
 * `pages deploy`, the line strip before the block strip).
 */
describe('an absent payload cannot credit a completion', () => {
  const surfaces = terminalWriteSurfaces();

  it('the derivation has subjects', () => {
    expect(surfaces.length).toBeGreaterThan(0);
    for (const s of surfaces) expect(s.terminals.length).toBeGreaterThan(0);
  });

  it('every emptiness guard sits ABOVE the terminal comparison it protects', () => {
    const wrong = surfaces
      .filter((s) => !(s.guardLine < s.terminalLine))
      .map(
        (s) =>
          `${s.file}: guard at ${s.guardLine === Infinity ? 'NONE' : s.guardLine}, ` +
          `terminal at ${s.terminalLine} (${s.terminals.join(', ')})`,
      );
    expect(
      wrong,
      'an empty content-derived list satisfies the terminal test at index 0, so a ' +
        'guard below it means the completion branch renders — and credits — on nothing',
    ).toEqual([]);
  });

  it('TypingScreen is in the derivation — it is the shape this is written about', () => {
    const hit = surfaces.find((s) => s.file === 'src/components/practice/TypingScreen.tsx');
    expect(
      hit,
      'TypingScreen no longer compares an index to a content-derived length',
    ).toBeTruthy();
    expect(hit!.guardLine).toBeLessThan(hit!.terminalLine);
  });
});
