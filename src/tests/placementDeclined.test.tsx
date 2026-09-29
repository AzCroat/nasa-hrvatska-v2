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

//
// THE LOOP'S MECHANISM IS GONE (sweep 194, 2026-09-29). Onboarding no longer routes
// to a placement test at all — name → goal → (heritage region) → Unit 1 — and the
// App.tsx auto-offer effect, the onboarding-only `placement` route, and the decline
// key it consulted are DELETED. What survives is the Me tab's retake
// (`new-placement`), reached by a deliberate tap and never by a timer, so a cancel
// there cannot loop: it navigates and writes nothing. This file keeps the two
// contracts that are still true — Exit claims no placement, Skip records one — and
// pins the ABSENCE of the auto-offer, because restoring it is what would re-open
// the loop, now with no decline flag to stop it.
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import React from 'react';
import PlacementTest from '../components/auth/PlacementTest';
import { StorageKeys } from '../lib/constants/storage.js';

/** The three flags the guard reads as "placement has been dealt with". */
const COMPLETION_FLAGS = ['placement_done', 'nh_placement_done', 'onboarded'];

const strip = (s: string) =>
  s
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

const APP = strip(readFileSync('src/App.tsx', 'utf8'));

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

  it('the router has exactly ONE PlacementTest mount — the Me tab retake — and its cancel writes no flag', () => {
    // Before sweep 194 there were two mounts (`placement` from WelcomeScreen and
    // `new-placement` from the App.tsx auto-offer). The onboarding one is gone;
    // a second mount reappearing here means a test has been put back in front of
    // a learner before their first lesson, which the owner ruled out.
    const cancels = [...ROUTER.matchAll(/onCancel=\{function \(\) \{([\s\S]*?)\}\}/g)].map(
      (m) => m[1],
    );
    expect(cancels.length, 'expected exactly one PlacementTest cancel handler in AppRouter').toBe(
      1,
    );
    for (const k of COMPLETION_FLAGS)
      expect(cancels[0], `the cancel handler writes the completion flag ${k}`).not.toMatch(
        new RegExp(`lsSet\\(\\s*['"]${k}['"]`),
      );
    // And it does not record a decline either — there is nothing left to consult it.
    expect(cancels[0]).not.toMatch(/nh_placement_declined/);
  });

  it('App.tsx no longer offers the placement test on a timer (the loop cannot recur)', () => {
    expect(APP).not.toMatch(/setScr\('new-placement'\)/);
    expect(APP).not.toMatch(/nh_placement_declined/);
  });

  it('the decline key is gone from the storage constants — nothing reads or writes it', () => {
    expect((StorageKeys as Record<string, string>).PLACEMENT_DECLINED).toBeUndefined();
    expect(COMPLETION_FLAGS).toEqual(['placement_done', 'nh_placement_done', 'onboarded']);
  });
});
