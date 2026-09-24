/**
 * clickableKeyboard.test.ts — an action a keyboard cannot reach at all (2026-09-24).
 *
 * Sweep 93 fixed controls whose focus ring was invisible. This is the harder
 * half of the same question: a `<div onClick={…}>` is not in the tab order, has
 * no role, and does nothing on Enter or Space — the action is simply not
 * available without a mouse. Census: **1,901 `onClick` handlers, 60 of them on
 * an element a keyboard cannot reach**, including the only path to picking an AI
 * conversation scenario, opening a news article, choosing a writing prompt,
 * starting a story, and the Learn Path chip on Home.
 *
 * The repo already had the right pattern — `IdiomsScreen` has carried
 * `role="button"` + `tabIndex={0}` + an Enter/Space handler for months. It was
 * applied on some screens and not others, which is how a convention decays with
 * nothing to notice. `src/lib/clickable.ts` is that pattern as one function.
 *
 * WHAT IS DELIBERATELY NOT FIXED, and why each is a category rather than a
 * shrug — the two reasons are the ones stated in `clickable.ts`:
 *
 *   MODAL BACKDROP    a click-outside-to-close layer. Every one of the four sits
 *                     over a real Close control (checked by hand, one also
 *                     handles Escape), so the action HAS a keyboard path; making
 *                     the backdrop itself focusable adds a full-screen tab stop
 *                     that announces itself as a button.
 *   WORD IN RUNNING   tap-a-word-to-hear-or-translate. Making every word
 *   TEXT              focusable puts hundreds of stops in one paragraph, which
 *                     costs the keyboard user more than the affordance is worth,
 *                     and the word's text is on screen either way.
 *
 * Both are checked in BOTH staleness directions: an exemption whose site has
 * since gained keyboard support fails, and so does one whose site no longer
 * exists. (The `couplingClearingPath` lesson: a staleness test that only asks
 * one of those guards nothing.)
 *
 * WHAT IT DOES NOT COVER: a handler attached through a variable or a component
 * prop rather than a literal JSX attribute, and `onClick` on a custom component
 * (`<Card onClick=…>`), which may or may not forward it to a button. The owner
 * of a hit is the nearest preceding JSX tag, which is exact for an attribute and
 * nothing else.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { clickable } from '../lib/clickable';

// Line comments FIRST (sweep 72).
const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

/** Tags that are not focusable and not operable without a mouse. */
const NON_FOCUSABLE =
  /^(div|span|li|img|p|section|article|td|tr|h[1-6]|label|svg|g|circle|rect|path|ul|ol|nav|header|footer|main|aside|figure|form|table|tbody|thead|strong|em|b|i|small|pre|code)$/;

const FILES = globSync('src/**/*.{tsx,jsx}').filter((f) => !/[\\/]tests[\\/]/.test(f));

type Hit = { file: string; line: number; owner: string; keyboard: boolean };

function scan(): Hit[] {
  const out: Hit[] = [];
  for (const file of FILES) {
    const s = strip(readFileSync(file, 'utf8'));
    const tags = [...s.matchAll(/<\s*([A-Za-z][A-Za-z0-9.]*)/g)];
    // `(?!=)` so `typeof x.onClick === 'function'` is not read as an attribute —
    // it reported SessionCard's decorative avatar div on the first run.
    for (const m of s.matchAll(/\bonClick\s*=(?!=)/g)) {
      const i = m.index!;
      let owner = '?';
      let at = -1;
      for (let k = tags.length - 1; k >= 0; k--)
        if (tags[k].index! < i) {
          owner = tags[k][1];
          at = tags[k].index!;
          break;
        }
      if (!NON_FOCUSABLE.test(owner)) continue;
      const win = s.slice(at, i + 300);
      const keyboard =
        /role\s*=\s*["'{]/.test(win) ||
        /tabIndex\s*=/.test(win) ||
        /onKey(Down|Press|Up)/.test(win);
      out.push({ file, line: s.slice(0, at).split('\n').length, owner, keyboard });
    }
  }
  return out;
}

const HITS = scan();
const UNREACHABLE = HITS.filter((h) => !h.keyboard);

const KEYBOARD_EXEMPT: Record<string, string> = {
  'src/components/croatia/MediaDetailDrawer.tsx':
    'modal backdrop — the drawer has a Close button and an Escape handler',
  'src/components/learn/VocabSceneComponents.tsx':
    'modal backdrop — the sheet has a ✕ button with aria-label="Close"',
  'src/components/practice/listening/GradedStoryModal.tsx':
    'two modal backdrops — both sheets carry a real Close button',
  'src/components/croatia/CroatianNewsScreen.tsx':
    'per-word tap inside an article — one stop per word would be hundreds per screen',
  'src/components/croatia/StoryViewPanel.tsx': 'per-word tap inside story text',
  'src/components/croatia/TappableMessage.tsx':
    'per-word tap inside a chat message (the MESSAGE itself is reachable)',
  'src/components/learn/ReadingScreen.tsx': 'per-word tap inside a reading passage',
};

describe('the scan is real', () => {
  it('sees the app’s onClick handlers', () => {
    expect(HITS.length).toBeGreaterThan(20);
  });

  it('sees the GOOD pattern too, not only the bad one', () => {
    // Without this the rule below could pass against a matcher that classifies
    // everything as unreachable, or one that finds nothing at all.
    expect(HITS.filter((h) => h.keyboard).length).toBeGreaterThan(30);
  });

  it('`clickable` is actually used across the app', () => {
    const uses = FILES.map((f) => readFileSync(f, 'utf8'))
      .join('\n')
      .match(/\{\.\.\.clickable\(/g);
    expect(uses?.length ?? 0).toBeGreaterThan(30);
  });
});

describe('clickable() supplies what a keyboard needs', () => {
  it('gives the element a role, a tab stop and Enter/Space', () => {
    let fired = 0;
    const p = clickable(() => fired++, 'Hear this');
    expect(p.role).toBe('button');
    expect(p.tabIndex).toBe(0);
    expect((p as Record<string, unknown>)['aria-label']).toBe('Hear this');

    p.onClick();
    for (const key of ['Enter', ' ']) {
      const e = { key, preventDefault: () => {} } as never;
      p.onKeyDown(e);
    }
    expect(fired).toBe(3);

    // and does NOT fire on an unrelated key, which would swallow typing
    p.onKeyDown({ key: 'a', preventDefault: () => {} } as never);
    expect(fired).toBe(3);
  });

  it('omits aria-label when none is given rather than writing an empty one', () => {
    expect(Object.keys(clickable(() => {}))).not.toContain('aria-label');
  });
});

describe('every click has a keyboard path, or a stated reason', () => {
  it('no element is clickable by mouse only', () => {
    const bad = UNREACHABLE.filter((h) => !(h.file in KEYBOARD_EXEMPT)).map(
      (h) => `${h.file}:${h.line} <${h.owner}>`,
    );
    expect(
      bad,
      'this action cannot be performed without a mouse — spread `clickable(fn)` ' +
        'from src/lib/clickable.ts, or add an entry to KEYBOARD_EXEMPT with the ' +
        'reason it genuinely should not be in the tab order',
    ).toEqual([]);
  });

  it('every exemption still names a live mouse-only click', () => {
    // Both staleness directions: a file that gained keyboard support, and a file
    // that no longer has such a click at all, are the same stale entry.
    const stale = Object.keys(KEYBOARD_EXEMPT).filter(
      (f) => !UNREACHABLE.some((h) => h.file === f),
    );
    expect(stale, 'these exemptions guard nothing — delete them').toEqual([]);
  });

  it('the exempt population is the size it was measured at', () => {
    // 8: four modal backdrops, four per-word taps. It can shrink; a rise means
    // a new mouse-only click landed in an already-exempt FILE, which the rule
    // above cannot see.
    expect(UNREACHABLE.length).toBeLessThanOrEqual(8);
  });
});
