/**
 * lessonLookup.test.tsx — the way back to the teaching.
 *
 * The Learning Center made all 180 lessons findable; it did not put a door
 * where a learner actually gets stuck. Two surfaces now carry one: the
 * wrong-answer panel (all 109 engine-backed drills at once, via `ModeDrill`)
 * and the concept map's "Slipping" rows.
 *
 * THREE THINGS ARE PINNED, and they fail in different ways:
 *
 *   1. THE DERIVATION covers every engine-backed drill. The set of drills is
 *      read from the drills directory, never hand-listed — a hand-listed
 *      census decays at exactly the rate the practice programme grows, which
 *      this repo has now paid for several times.
 *
 *   2. THE UNION RULE IS LOAD-BEARING. `conceptMap` resolves a lesson's drill
 *      primary-first (`CATEGORY_SCREEN_MAP[c] || CATEGORY_EASIER_SCREEN[c]`).
 *      Mirroring that precedence backwards drops exactly the drills reached
 *      through the EASIER route — which is how a lower-level learner arrives at
 *      them. A test asserting only "every drill is covered" would pass under
 *      either rule today for most drills, so the easier-route drills are pinned
 *      by name with their reason.
 *
 *   3. THE WIRING, separately from the components. A test that renders a panel
 *      and hands it props proves the panel works when wired; only reading the
 *      real `ModeDrill` proves it IS wired. That split is why `AlphabetScreen`
 *      shipped its whole life with a dead `award` branch.
 *
 * And the contract the whole Learning Center rests on: LOOKING SOMETHING UP IS
 * NOT CREDIT. Every interaction here is driven and localStorage is asserted
 * byte-identical afterwards.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';

import {
  lessonsTeachingScreen,
  requestLessonLookup,
  consumeLessonLookup,
  LESSON_LOOKUP_KEY,
} from '../lib/lessonLookup';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from '../lib/categoryRoutes';

const DRILLS_DIR = 'src/components/practice/drills';

/** Strip comments — prose naming a thing must never read as the thing. */
function strip(src: string): string {
  return src.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
}

/** Every ModeDrill-backed drill, by the screen id it registers. DERIVED. */
function engineDrillIds(): string[] {
  const ids: string[] = [];
  for (const f of readdirSync(DRILLS_DIR)) {
    if (!f.endsWith('.tsx')) continue;
    const src = strip(readFileSync(`${DRILLS_DIR}/${f}`, 'utf8'));
    if (!/\bModeDrill\b/.test(src)) continue;
    const m = src.match(/\bid=["']([\w-]+)["']/);
    if (m) ids.push(m[1]!);
  }
  return ids;
}

beforeEach(() => {
  sessionStorage.clear();
  localStorage.clear();
});
afterEach(() => cleanup());

// ───────────────────────────────────────────────────────────────────────────
// 1. THE DERIVATION
// ───────────────────────────────────────────────────────────────────────────
describe('a drill can name the lesson that taught it', () => {
  it('finds the drill set from the directory, not from a list here', () => {
    // If this ever collapses the coverage assertion below becomes vacuous —
    // `expect([]).toEqual([])` passes cheerfully.
    expect(engineDrillIds().length).toBeGreaterThan(100);
  });

  it('covers EVERY engine-backed drill', () => {
    const uncovered = engineDrillIds().filter((id) => lessonsTeachingScreen(id).length === 0);
    expect(uncovered).toEqual([]);
  });

  it('returns lessons sorted, so the learner sees a stable order', () => {
    for (const id of engineDrillIds()) {
      const got = lessonsTeachingScreen(id);
      expect(got).toEqual([...got].sort());
    }
  });

  it('names nothing for a screen no category routes to', () => {
    expect(lessonsTeachingScreen('no-such-screen-at-all')).toEqual([]);
    expect(lessonsTeachingScreen('')).toEqual([]);
  });

  it('every lesson it names genuinely teaches a category routed to that screen', () => {
    for (const id of engineDrillIds()) {
      for (const lesson of lessonsTeachingScreen(id)) {
        const cat = LESSON_TAUGHT_CATEGORY[lesson]!;
        expect(cat).toBeTruthy();
        expect([CATEGORY_SCREEN_MAP[cat], CATEGORY_EASIER_SCREEN[cat]]).toContain(id);
      }
    }
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 2. THE UNION RULE, pinned with its reason
// ───────────────────────────────────────────────────────────────────────────
describe('both routes are taken, not just the primary one', () => {
  /** What the primary-first rule (`conceptMap`'s forward precedence) would give. */
  function mirrorOnly(screen: string): string[] {
    const out: string[] = [];
    for (const [lesson, cat] of Object.entries(LESSON_TAUGHT_CATEGORY)) {
      if ((CATEGORY_SCREEN_MAP[cat] || CATEGORY_EASIER_SCREEN[cat]) === screen) out.push(lesson);
    }
    return out;
  }

  it('drills reachable ONLY through the easier route still name their lesson', () => {
    // Measured: these are exactly the drills the primary-first rule drops. A
    // learner below the primary route's CEFR gate is sent HERE by the session
    // builder, so these are the two that most need a way back to the teaching.
    const easierOnly = engineDrillIds().filter(
      (id) => mirrorOnly(id).length === 0 && lessonsTeachingScreen(id).length > 0,
    );
    expect(easierOnly.sort()).toEqual(['isklonidbab2', 'objekt']);
  });

  it('reports several lessons rather than picking one', () => {
    // `objekt` is the documented CATEGORY_EASIER_SCREEN.clitics case. Naming one
    // of three would be a claim the maps do not support.
    expect(lessonsTeachingScreen('objekt')).toEqual([
      'clitics',
      'clitics-advanced',
      'object-pronouns',
    ]);
  });

  it('is unambiguous everywhere else', () => {
    const plural = engineDrillIds().filter((id) => lessonsTeachingScreen(id).length > 1);
    expect(plural).toEqual(['objekt']);
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 3. THE HANDOFF
// ───────────────────────────────────────────────────────────────────────────
describe('the one-shot handoff', () => {
  it('round-trips, once', () => {
    requestLessonLookup(['genitive-intro']);
    expect(consumeLessonLookup()).toEqual(['genitive-intro']);
    // Atomic: a remount must not re-open a lesson the learner backed out of.
    expect(consumeLessonLookup()).toBeNull();
  });

  it('writes nothing for an empty request', () => {
    requestLessonLookup([]);
    expect(sessionStorage.getItem(LESSON_LOOKUP_KEY)).toBeNull();
  });

  it('clears a malformed value instead of wedging every future visit', () => {
    sessionStorage.setItem(LESSON_LOOKUP_KEY, '{not json');
    expect(consumeLessonLookup()).toBeNull();
    expect(sessionStorage.getItem(LESSON_LOOKUP_KEY)).toBeNull();
  });

  it('rejects a value of the wrong shape', () => {
    sessionStorage.setItem(LESSON_LOOKUP_KEY, '"a string"');
    expect(consumeLessonLookup()).toBeNull();
    sessionStorage.setItem(LESSON_LOOKUP_KEY, '[]');
    expect(consumeLessonLookup()).toBeNull();
    sessionStorage.setItem(LESSON_LOOKUP_KEY, '[1,2,null]');
    expect(consumeLessonLookup()).toBeNull();
  });

  it('never throws when sessionStorage is unavailable', () => {
    // Patch the PROTOTYPE: jsdom's Storage methods live there, so assigning to
    // the instance leaves the real ones in play and the test passes vacuously.
    // It did exactly that on the first run — the call succeeded and the value
    // came back.
    const deny = () => {
      throw new Error('denied');
    };
    const set = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(deny);
    const get = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(deny);
    const rm = vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(deny);
    expect(() => requestLessonLookup(['x'])).not.toThrow();
    expect(() => consumeLessonLookup()).not.toThrow();
    expect(consumeLessonLookup()).toBeNull();
    set.mockRestore();
    get.mockRestore();
    rm.mockRestore();
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 4. THE WIRING — read from the real sources, not restated
// ───────────────────────────────────────────────────────────────────────────
describe('the surfaces are wired', () => {
  it('ModeDrill hands the panel its own screen id', () => {
    const src = strip(readFileSync('src/components/practice/ModeDrill.tsx', 'utf8'));
    const at = src.indexOf('<WrongAnswerHelp');
    expect(at).toBeGreaterThan(-1);
    const block = src.slice(at, src.indexOf('/>', at));
    // Without this every one of the 109 drills renders the panel with no screen
    // and the link is silently absent — a dead branch that looks like a design.
    expect(block).toMatch(/screen=\{id\}/);
  });

  it('the concept card sends its row to the Center', () => {
    const src = strip(readFileSync('src/components/profile/ConceptMapCard.tsx', 'utf8'));
    expect(src).toMatch(/requestLessonLookup\(\[entry\.lessonId\]\)/);
    expect(src).toMatch(/setScr\('learning_center'\)/);
  });

  it('the Center consumes the handoff', () => {
    const src = strip(readFileSync('src/components/learn/LearningCenter.tsx', 'utf8'));
    expect(src).toMatch(/consumeLessonLookup\(\)/);
    expect(src).toMatch(/launchAnimLesson\(only\)/);
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 5. THE BEHAVIOUR — the real components, driven
// ───────────────────────────────────────────────────────────────────────────
const AppContext = (await import('../context/AppContext')).default;
const WrongAnswerHelp = (await import('../components/shared/WrongAnswerHelp')).default;

vi.mock('../lib/aiPost', () => ({ _aiPost: vi.fn() }));

/** A real engine-backed drill with exactly one teaching lesson. */
const SINGLE = engineDrillIds().find((id) => lessonsTeachingScreen(id).length === 1)!;

function renderPanel(props: Record<string, unknown>) {
  const setScr = vi.fn();
  render(
    <AppContext.Provider value={{ setScr, currentScreen: SINGLE } as never}>
      <WrongAnswerHelp chosen="gradu" answer="gradom" context="Idem s ____." {...props} />
    </AppContext.Provider>,
  );
  return setScr;
}

describe('the wrong-answer panel offers the lesson', () => {
  it('links to the teaching when the maps can name it', () => {
    renderPanel({ screen: SINGLE });
    const link = screen.getByTestId('wrong-answer-learn');
    expect(link.getAttribute('data-lessons')).toBe(lessonsTeachingScreen(SINGLE).join(','));
    expect(link.textContent).toBe('Learn this properly');
  });

  it('hands the lesson over and navigates — and writes no progress', () => {
    const before = JSON.stringify(localStorage);
    const setScr = renderPanel({ screen: SINGLE });
    fireEvent.click(screen.getByTestId('wrong-answer-learn'));
    expect(consumeLessonLookup()).toEqual(lessonsTeachingScreen(SINGLE));
    expect(setScr).toHaveBeenCalledWith('learning_center');
    // LOOKING SOMETHING UP IS NOT CREDIT.
    expect(JSON.stringify(localStorage)).toBe(before);
  });

  it('says several when the maps name several, and never picks one', () => {
    renderPanel({ screen: 'objekt' });
    expect(screen.getByTestId('wrong-answer-learn').textContent).toBe('Lessons that teach this');
  });

  it('offers nothing when no lesson can be named', () => {
    renderPanel({ screen: 'no-such-screen-at-all' });
    expect(screen.queryByTestId('wrong-answer-learn')).toBeNull();
  });

  it('offers nothing when the drill passes no screen at all', () => {
    renderPanel({});
    expect(screen.queryByTestId('wrong-answer-learn')).toBeNull();
  });
});
