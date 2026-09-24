/**
 * heritageLearner — the consumer that had no producer (2026-09-23)
 *
 * `/api/conversation`'s system prompt carries a HERITAGE SPEAKER CONTEXT
 * section — frozen emigration-era vocabulary, a simplified case system,
 * dialect mixing, "do NOT treat them as a complete beginner". It is gated on
 * a request field `isHeritage`, whose only producer was `!!stats?.heritage`.
 * Nothing in the app has ever written `stats.heritage`: not the snapshot, not
 * the remote apply, not the reducer, not sign-in merge, and nothing in the
 * whole git history. So the field was false for every learner and the section
 * never fired, for about six months, in a product whose own first line is
 * "for the diaspora and heritage learners".
 *
 * This is the mirror of the dead-WRITE class (a value stored and never read):
 * a dead READ, a consumer with no producer. Both are silent — a boolean that
 * is always false is exactly what "this learner is not one" looks like.
 *
 * WHAT IS PINNED, AND IN WHICH DIRECTION:
 *   1. the predicate itself, both inputs, at the boundaries;
 *   2. that AIConversation no longer asks `stats` for the answer. The EFFECT —
 *      the `isHeritage` value in the body actually handed to `_aiPost` — is
 *      asserted in `ai-conversation.test.tsx`, which already has the harness to
 *      drive a real conversation turn; a source pin alone would survive the
 *      value being computed correctly and then dropped before the request;
 *   3. that `stats.heritage` is gone from the Stats type AND unwritten, so it
 *      cannot quietly come back as a second answer to the same question;
 *   4. that OnboardingTour resolves through the same function — the two
 *      surfaces that classify a diaspora learner must not drift, which is the
 *      three-copies-of-the-CEFR-formula failure in miniature.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { render, screen, act } from '@testing-library/react';
import React from 'react';
import { isHeritageLearner, DIASPORA_GOALS } from '../lib/heritageLearner';
import OnboardingTour from '../components/shared/OnboardingTour';

const ROOT = path.resolve(__dirname, '../..');
const read = (p: string) => fs.readFileSync(path.join(ROOT, p), 'utf8');

beforeEach(() => {
  localStorage.clear();
});

describe('isHeritageLearner — the predicate', () => {
  it('is false for a learner who has said nothing', () => {
    expect(isHeritageLearner()).toBe(false);
  });

  it('is true for every goal the app already treats as diaspora', () => {
    for (const goal of DIASPORA_GOALS) {
      localStorage.clear();
      localStorage.setItem('nh_goal', goal);
      expect(isHeritageLearner(), `goal ${goal}`).toBe(true);
    }
  });

  it('is false for a non-diaspora goal', () => {
    localStorage.setItem('nh_goal', 'travel');
    expect(isHeritageLearner()).toBe(false);
  });

  it('is true when a family region was named, whatever the goal', () => {
    localStorage.setItem('nh_goal', 'travel');
    localStorage.setItem('nh_heritage_region', 'Dalmacija');
    expect(isHeritageLearner()).toBe(true);
  });

  it('treats an empty or whitespace region as unsaid, not as a yes', () => {
    // The onboarding writes this key; a blank submission must not classify.
    for (const blank of ['', '   ']) {
      localStorage.clear();
      localStorage.setItem('nh_heritage_region', blank);
      expect(isHeritageLearner(), JSON.stringify(blank)).toBe(false);
    }
  });

  it('reads only keys that already sync, so no fourth store is introduced', () => {
    // Both inputs are in buildProgressSnapshot. If one ever leaves, this
    // predicate silently becomes device-local and the two devices disagree.
    const snap = read('src/lib/progressSnapshot.ts');
    expect(snap).toMatch(/nh_goal/);
    expect(snap).toMatch(/nh_heritage_region/);
  });
});

describe('stats.heritage is gone and stays gone', () => {
  it('is absent from the Stats type', () => {
    const types = read('src/types/index.ts');
    expect(types).not.toMatch(/^\s*heritage\?\s*:/m);
  });

  it('no source reads a `heritage` field off a stats object', () => {
    // NARROW ON PURPOSE. `heritage` is a common word here — a media category,
    // an XP bucket, a screen tab, a Croatian gloss — so a bare `heritage:` scan
    // reports ten files and means nothing. The thing that was dead is
    // specifically the property on the STATS object, so that is what is pinned:
    // its type field (above) and any reader of it. If someone adds a writer,
    // they have created a SECOND answer to the question isHeritageLearner
    // already answers; decide which one wins before relaxing this.
    const offenders: string[] = [];
    const walk = (dir: string) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
          if (e.name === 'tests' || e.name === '__tests__' || e.name === 'node_modules') continue;
          walk(p);
        } else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) {
          const src = fs
            .readFileSync(p, 'utf8')
            .replace(/(^|[^:'"`\\])\/\/[^\n]*/g, '$1')
            .replace(/\/\*[\s\S]*?\*\//g, '');
          if (/\b(?:stats|st|appSt|s)\s*\??\.\s*heritage\b/.test(src))
            offenders.push(path.relative(ROOT, p));
        }
      }
    };
    walk(path.join(ROOT, 'src'));
    expect(offenders).toEqual([]);
  });

  it('POSITIVE CONTROL — that scan does see the expression it was written for', () => {
    // The removed line, verbatim. A scan this narrow is worthless unless it is
    // shown to match the thing it is narrow about.
    const probe = '      isHeritage: !!stats?.heritage,';
    expect(/\b(?:stats|st|appSt|s)\s*\??\.\s*heritage\b/.test(probe)).toBe(true);
    // ...and not the unrelated uses that made the broad version useless.
    for (const innocent of [
      "  heritage: ['music', 'culture'],",
      '  heritage: 250,',
      "  heritage: 'croatia',",
      "  { hr: 'baština', en: 'heritage' },",
      '  speak(item.heritage)',
    ])
      expect(/\b(?:stats|st|appSt|s)\s*\??\.\s*heritage\b/.test(innocent), innocent).toBe(false);
  });
});

describe('OnboardingTour resolves through the shared predicate', () => {
  const renderTour = () => render(React.createElement(OnboardingTour, { onDone: () => {} }));

  it('shows the generic welcome to a learner with no diaspora signal', async () => {
    await act(async () => {
      renderTour();
    });
    expect(screen.getByText(/Dobrodošli! Welcome!/)).toBeTruthy();
  });

  it('shows the diaspora welcome when the region alone is set', async () => {
    // The OLD inline predicate read nh_goal ONLY, so this case — a learner who
    // named their family's region but picked no diaspora goal — got the generic
    // tour. Reverting the component to that predicate fails here.
    localStorage.setItem('nh_heritage_region', 'Slavonija');
    await act(async () => {
      renderTour();
    });
    expect(screen.getByText(/Welcome home/)).toBeTruthy();
  });

  it('shows the diaspora welcome for a diaspora goal', async () => {
    localStorage.setItem('nh_goal', 'heritage');
    await act(async () => {
      renderTour();
    });
    expect(screen.getByText(/Welcome home/)).toBeTruthy();
  });
});

describe('AIConversation stops asking a field nobody answers', () => {
  it('no longer derives isHeritage from stats', () => {
    const src = read('src/components/croatia/AIConversation.tsx')
      .replace(/(^|[^:'"`\\])\/\/[^\n]*/g, '$1')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    expect(src).not.toMatch(/isHeritage\s*:\s*!!\s*stats/);
    expect(src).toMatch(/isHeritage\s*:\s*isHeritageLearner\(\)/);
  });

  it('the server prompt still has a section to gate — the reader is real', () => {
    // If the prompt loses its isHeritage branch, this whole predicate is
    // decoration and should be deleted rather than left computing a value
    // nothing reads. That would be the defect again, pointing the other way.
    const conv = read('functions/api/conversation.js');
    expect(conv).toMatch(/isHeritage/);
  });
});
