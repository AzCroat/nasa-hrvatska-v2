// src/tests/placementDeclined.test.tsx
//
// "EXIT PLACEMENT TEST" WAS AN INESCAPABLE LOOP (found 2026-09-22).
//
// App.tsx offers the placement test 1200 ms after a brand-new learner lands,
// gated on `lc === 0 && xp === 0` and the absence of `placement_done`,
// `nh_placement_done` and `onboarded`. The effect's dependency list includes
// `currentScreen`, so it RE-RUNS on every navigation — and the screen's own
// cancel handler navigates (`setScr('dashboard')`).
//
// Cancel deliberately writes none of those three flags, because the learner did
// NOT take the test and claiming otherwise would be NEVER-DO 13 on the app's
// first interaction. So every condition was satisfied again the instant Exit
// navigated, a fresh 1200 ms timer armed, and the learner was thrown back into
// the placement test — for as long as they had zero XP, which is exactly the
// learner the offer exists for. The only ways out were to finish it, to press
// "Skip — I'll start at A1", or to earn XP somewhere the app was no longer
// letting them reach.
//
// HOW IT STAYED INVISIBLE: the two halves are in different files and neither is
// wrong on its own. The guard correctly refuses to re-offer once a flag is set;
// the cancel handler correctly refuses to write a flag it has not earned. The
// defect is only visible when you ask what happens on the SECOND pass, and
// nothing rendered App.tsx to find out.
//
// THE FIX records the DECLINE as its own fact — `nh_placement_declined`, a new
// key, never one of the completion flags. The Me tab's "retake placement"
// (LearningPreferencesSection) sets the screen directly and does not consult
// this guard, so the way back in survives.
//
// WHAT THIS FILE CAN AND CANNOT DRIVE: PlacementTest renders, so the Exit
// button and its contract with storage are tested for real. App.tsx's effect
// is inside a ~2000-line root component with no test harness in this repo, so
// the guard and the two cancel handlers are pinned BY SOURCE — the technique
// `feedbackSurfaces.test.ts` uses for the same reason. Comments are stripped
// first, and that is load-bearing here: the comments written alongside this fix
// NAME both keys, so an unstripped match would pass on prose alone.

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import React from 'react';
import PlacementTest from '../components/auth/PlacementTest';
import { StorageKeys } from '../lib/constants/storage.js';

const DECLINED = 'nh_placement_declined';
/** The three flags the guard reads as "placement has been dealt with". */
const COMPLETION_FLAGS = ['placement_done', 'nh_placement_done', 'onboarded'];

const strip = (s: string) =>
  s
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\/.*$/gm, '');

const APP = strip(readFileSync('src/App.tsx', 'utf8'));

/**
 * The auto-offer's OWN predicate, not the whole file.
 *
 * The first draft of the anti-vacuity test below matched `stats.xp === 0`
 * anywhere in App.tsx — and that string occurs more than once, so deleting the
 * clause FROM THIS GUARD left the assertion green. Mutation caught it. Slice
 * the effect body out and assert inside it, or "the guard still checks X" means
 * only "some line somewhere checks X".
 */
const OFFER_GUARD = (() => {
  const end = APP.indexOf("setScr('new-placement')");
  if (end < 0) return '';
  const open = APP.lastIndexOf('if (', end);
  return open < 0 ? '' : APP.slice(open, end);
})();
const ROUTER = strip(readFileSync('src/components/AppRouter.tsx', 'utf8'));

describe('declining the placement test is recorded, and is not a completion', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('the Exit button reaches onCancel from the question view', () => {
    const onCancel = vi.fn();
    render(<PlacementTest onComplete={vi.fn()} onCancel={onCancel} />);
    // Exit lives in the question view, not on the intro slide.
    fireEvent.click(screen.getByText(/Start the test/));
    fireEvent.click(screen.getByLabelText('Exit placement test'));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('exiting claims NO placement — the screen writes no completion flag', () => {
    render(<PlacementTest onComplete={vi.fn()} onCancel={vi.fn()} />);
    fireEvent.click(screen.getByText(/Start the test/));
    fireEvent.click(screen.getByLabelText('Exit placement test'));
    for (const k of COMPLETION_FLAGS) expect(localStorage.getItem(k)).toBeNull();
    // nh_level is the placed level; exiting places nobody.
    expect(localStorage.getItem('nh_level')).toBeNull();
  });

  it('SKIP is a different act and DOES record one (the contrast that makes the above mean something)', () => {
    // Without this, "exit writes nothing" would also pass on a screen whose
    // buttons were all inert.
    render(<PlacementTest onComplete={vi.fn()} onCancel={vi.fn()} />);
    fireEvent.click(screen.getByText(/Skip — I'll start at A1/));
    expect(localStorage.getItem('nh_placement_done')).toBe('true');
    expect(localStorage.getItem('nh_level')).toBe('A1');
  });

  it('BOTH cancel handlers in the router record the decline', () => {
    // Two live mounts — `placement` (from WelcomeScreen) and `new-placement`
    // (the App auto-offer and the Me tab retake). The second is where the loop
    // was; the first is protected today only because WelcomeScreen happens to
    // set `onboarded` before routing, which is incidental coupling, so it
    // records the decline too.
    const cancels = [...ROUTER.matchAll(/onCancel=\{function \(\) \{([\s\S]*?)\}\}/g)].map(
      (m) => m[1],
    );
    expect(cancels.length, 'expected two PlacementTest cancel handlers in AppRouter').toBe(2);
    for (const body of cancels) {
      expect(body, `a cancel handler does not record the decline:\n${body}`).toMatch(
        new RegExp(`lsSet\\(\\s*['"]${DECLINED}['"]`),
      );
      // And it must not quietly promote itself to a completion.
      for (const k of COMPLETION_FLAGS)
        expect(body, `a cancel handler writes the completion flag ${k}`).not.toMatch(
          new RegExp(`lsSet\\(\\s*['"]${k}['"]`),
        );
    }
  });

  it("App.tsx's auto-offer consults the decline flag", () => {
    expect(OFFER_GUARD, 'the auto-offer guard does not consult the decline flag').toMatch(
      new RegExp(`!lsGet\\(\\s*['"]${DECLINED}['"]\\s*\\)`),
    );
  });

  it('...and still consults everything it consulted before (anti-vacuity)', () => {
    // A guard rewritten to drop `xp === 0` would let the offer fire at a
    // learner with progress, and the assertion above would not notice. The
    // whole predicate is the subject, not the one clause this change added.
    expect(OFFER_GUARD, 'could not locate the auto-offer guard in App.tsx').not.toBe('');
    for (const k of COMPLETION_FLAGS)
      expect(OFFER_GUARD, `the guard stopped reading ${k}`).toMatch(
        new RegExp(`!lsGet\\(\\s*['"]${k}['"]\\s*\\)`),
      );
    expect(OFFER_GUARD, 'the guard stopped requiring zero lessons').toMatch(/stats\.lc === 0/);
    expect(OFFER_GUARD, 'the guard stopped requiring zero XP').toMatch(/stats\.xp === 0/);
    // The timer this whole file is about must still exist, or there is nothing
    // to loop and every assertion here is trivially satisfied.
    expect(APP).toMatch(/setScr\('new-placement'\)/);
  });

  it('the decline key is registered and is distinct from every completion flag', () => {
    expect(StorageKeys.PLACEMENT_DECLINED).toBe(DECLINED);
    expect(COMPLETION_FLAGS).not.toContain(StorageKeys.PLACEMENT_DECLINED);
  });
});
