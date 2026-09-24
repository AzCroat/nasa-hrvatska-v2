/**
 * contentStateSpeaks.test.tsx — five content-dependent screens rendered an
 * EMPTY PAGE, for both causes, and said nothing about either (2026-09-24).
 *
 * THE DEFECT. `BodyDescScreen`, `ClothesScreen`, `CountriesScreen`,
 * `ProfessionsScreen` and `WeatherScreen` each returned
 * `<WRAP><BACK_BTN/></WRAP>` — a back arrow on a blank page — from BOTH their
 * `if (error)` and their `if (loading || !content)` branch. The two returns were
 * byte-identical, so "still loading" and "the fetch failed" were
 * indistinguishable, and neither told the learner anything at all. Twenty
 * sibling screens already say both, inline, via their own header helper.
 * `WeatherScreen` had no `error` branch whatsoever: a failed fetch leaves
 * `content` null, so that page was blank for ever with nothing to retry.
 *
 * It is LIVE, not theoretical. All five are reachable from the Learn Path and
 * from search, and the content payload lands ~9.2 s after first paint in the
 * CI-equivalent E2E harness, so an early tap meets this window every time.
 *
 * TWO LAYERS, because they answer different questions. The rendering tests are
 * the EFFECT — a source pin on the import would survive the notice being
 * rendered with an undefined prop. The census is the RATCHET: it derives every
 * screen that early-returns on the content state and requires the returned tree
 * to SAY something, so a sixth silent screen cannot land.
 *
 * Mutation-verified (see the commit message).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import React from 'react';

vi.mock('../data', () => ({ speak: vi.fn() }));

const state = vi.fn<[], { content: unknown; loading: boolean; error: unknown }>(() => ({
  content: null,
  loading: true,
  error: null,
}));
vi.mock('../hooks/useContent', () => ({
  useContent: () => state(),
  peekContent: () => state().content,
}));

import WeatherScreen from '../components/learn/WeatherScreen';
import ClothesScreen from '../components/learn/ClothesScreen';
import CountriesScreen from '../components/learn/CountriesScreen';
import ProfessionsScreen from '../components/learn/ProfessionsScreen';
import BodyDescScreen from '../components/learn/BodyDescScreen';
import { CONTENT_STATE_COPY } from '../components/shared/ContentStateNotice';

const SCREENS: Array<[string, React.ComponentType<{ goBack: () => void }>]> = [
  ['weather', WeatherScreen],
  ['clothes', ClothesScreen],
  ['countries', CountriesScreen],
  ['professions', ProfessionsScreen],
  ['bodydesc', BodyDescScreen],
];

beforeEach(() => {
  state.mockReturnValue({ content: null, loading: true, error: null });
});

describe('a content-dependent screen says which state it is in', () => {
  it.each(SCREENS)('%s says it is loading, and not that it failed', (_name, Screen) => {
    state.mockReturnValue({ content: null, loading: true, error: null });
    render(<Screen goBack={() => {}} />);
    const notice = screen.getByTestId('content-state');
    expect(notice.getAttribute('data-content-state')).toBe('loading');
    expect(notice.textContent).toBe(CONTENT_STATE_COPY.loading);
    expect(notice.textContent).not.toBe(CONTENT_STATE_COPY.error);
  });

  it.each(SCREENS)('%s names the failure, and does not claim to be loading', (_name, Screen) => {
    state.mockReturnValue({ content: null, loading: false, error: new Error('offline') });
    render(<Screen goBack={() => {}} />);
    const notice = screen.getByTestId('content-state');
    expect(notice.getAttribute('data-content-state')).toBe('error');
    expect(notice.textContent).toBe(CONTENT_STATE_COPY.error);
  });

  it.each(SCREENS)('%s renders the two causes DIFFERENTLY', (_name, Screen) => {
    state.mockReturnValue({ content: null, loading: true, error: null });
    const a = render(<Screen goBack={() => {}} />);
    const loadingHtml = a.container.innerHTML;
    a.unmount();
    state.mockReturnValue({ content: null, loading: false, error: new Error('offline') });
    const b = render(<Screen goBack={() => {}} />);
    expect(
      b.container.innerHTML,
      'loading and failed render identically — the learner cannot tell which happened',
    ).not.toBe(loadingHtml);
  });

  it.each(SCREENS)('%s keeps the back button in every state', (_name, Screen) => {
    render(<Screen goBack={() => {}} />);
    expect(screen.getByText('← Back')).toBeTruthy();
  });

  it('the two sentences are actually different text', () => {
    expect(CONTENT_STATE_COPY.loading).not.toBe(CONTENT_STATE_COPY.error);
    for (const s of Object.values(CONTENT_STATE_COPY)) expect(s.length).toBeGreaterThan(15);
  });
});

/**
 * The census. A screen that early-returns on the content state must render
 * something a learner can read. Derived from source, because the five above were
 * found by reading 48 files by hand and the next one will not be.
 */
const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (!['node_modules', 'tests', '__tests__'].includes(e)) walk(p, out);
    } else if (/\.tsx$/.test(e) && !/\.test\./.test(e)) out.push(p);
  }
  return out;
}

/**
 * Read the brace-balanced body that follows `if (<content state>)`, up to the
 * end of its returned expression. A fixed character window would run past the
 * end of the block and read the neighbouring code — the harness defect
 * registryMatchesScreen records.
 */
function guardBodies(src: string): string[] {
  const out: string[] = [];
  for (const m of src.matchAll(
    /if\s*\(([^)]*(?:\bloading\b|!\s*content\b|\berror\b)[^)]*)\)\s*/g,
  )) {
    let i = m.index! + m[0].length;
    if (!src.startsWith('return', i)) continue; // not an early return — handled inline
    i += 'return'.length;
    while (i < src.length && /\s/.test(src[i]!)) i++;
    if (src[i] !== '(') {
      out.push(src.slice(i, src.indexOf(';', i)));
      continue;
    }
    let depth = 0,
      j = i;
    for (; j < src.length; j++) {
      if (src[j] === '(') depth++;
      else if (src[j] === ')') {
        depth--;
        if (depth === 0) break;
      }
    }
    out.push(src.slice(i, j + 1));
  }
  return out;
}

const WORD = '[A-Za-zČĆĐŠŽčćđšž]';

/**
 * Drop everything that is styling rather than words. A CSS value is a quoted
 * string of letters — `textAlign: 'center'` — so without this the quoted-string
 * rule below passes on any styled empty div. That is exactly how the FIRST
 * version of the delegation hop came out decorative: it read 800 characters past
 * `function LoadingState()`, ran into a sibling's `'center'`, and a gutted
 * LoadingState still passed. Bound the body AND ignore the styling.
 */
const deStyle = (body: string) =>
  body
    .replace(/style\s*=\s*\{\{[\s\S]*?\}\}/g, '')
    .replace(
      /(?:className|data-[\w-]+|role|key|aria-\w+)\s*=\s*(?:"[^"]*"|'[^']*'|\{[^{}]*\})/g,
      '',
    );

/** Does this fragment of JSX put readable words on the screen itself? */
function saysSomethingHere(body: string): boolean {
  const b = deStyle(body);
  // A quoted string of real words passed to a helper (the 20 siblings' `H(...)`).
  if (new RegExp(`['"\`][^'"\`]*${WORD}{4,}[^'"\`]*['"\`]`).test(b)) return true;
  // A bare JSX text node between tags.
  return new RegExp(`>\\s*${WORD}[^<>{}]{3,}<`).test(b);
}

/** The brace-balanced body of `function Name(...)` / `const Name = ...`. */
function declBody(src: string, name: string): string | null {
  const m = src.match(new RegExp(`(?:function\\s+${name}\\s*\\(|const\\s+${name}\\s*=)`));
  if (!m) return null;
  let i = m.index! + m[0].length;
  const open = src.indexOf('{', i);
  const arrowReturn = src.slice(i, open === -1 ? undefined : open);
  // `const Foo = () => <div>…</div>;` has no brace body.
  if (open === -1 || /=>\s*[(<]/.test(arrowReturn)) return src.slice(i, src.indexOf(';', i) + 1);
  let depth = 0;
  for (let j = open; j < src.length; j++) {
    if (src[j] === '{') depth++;
    else if (src[j] === '}') {
      depth--;
      if (depth === 0) return src.slice(open, j + 1);
    }
  }
  return null;
}

/**
 * Text a learner can read — DIRECTLY, or through a component the branch
 * delegates to. The direct case alone reported six screens that render
 * `<LoadingState />`, a local component whose whole body is the word "Loading…".
 * Following one hop is what makes the census about the learner's experience
 * rather than about where the string is written.
 */
function speaks(body: string, src: string, depth = 0): boolean {
  if (/ContentStateNotice|LaunchFailureNotice|SkeletonLoader/.test(body)) return true;
  if (saysSomethingHere(body)) return true;
  if (depth > 1) return false;
  for (const m of deStyle(body).matchAll(/<([A-Z]\w*)\b/g)) {
    const inner = declBody(src, m[1]!);
    if (inner && speaks(inner, src, depth + 1)) return true;
  }
  return false;
}

describe('no content-dependent screen early-returns in silence', () => {
  const files = walk('src/components').filter((f) =>
    /useContent\s*\(\s*\)/.test(readFileSync(f, 'utf8')),
  );

  it('the census has subjects — otherwise every assertion below is vacuous', () => {
    expect(files.length).toBeGreaterThan(20);
    const withGuards = files.filter((f) => guardBodies(strip(readFileSync(f, 'utf8'))).length > 0);
    expect(
      withGuards.length,
      'no early-returning content guard found — the reader is broken',
    ).toBeGreaterThan(15);
  });

  it('every early return on the content state renders readable text', () => {
    const silent: string[] = [];
    for (const f of files) {
      for (const body of guardBodies(strip(readFileSync(f, 'utf8')))) {
        if (!speaks(body, strip(readFileSync(f, 'utf8'))))
          silent.push(`${f}: ${body.replace(/\s+/g, ' ').slice(0, 90)}`);
      }
    }
    expect(silent, 'these screens render a blank page and say nothing about why').toEqual([]);
  });

  it('the five screens this sweep fixed all delegate to the shared notice', () => {
    for (const [name] of SCREENS) {
      const f = `src/components/learn/${name === 'weather' ? 'Weather' : name === 'clothes' ? 'Clothes' : name === 'countries' ? 'Countries' : name === 'professions' ? 'Professions' : 'BodyDesc'}Screen.tsx`;
      const src = strip(readFileSync(f, 'utf8'));
      const bodies = guardBodies(src);
      expect(bodies.length, `${f} lost a content-state branch`).toBeGreaterThanOrEqual(2);
      expect(
        bodies.every((b) => /ContentStateNotice/.test(b)),
        `${f} has a branch with no notice`,
      ).toBe(true);
    }
  });
});
