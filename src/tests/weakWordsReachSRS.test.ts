/**
 * weakWordsReachSRS.test.ts — "Add to flashcard review" must actually add.
 *
 * THE BUG. `useListeningQuiz.handleAddToFlashcards` dispatched
 * `nh:add-weak-words` to an "app-level handler if available" that has never
 * existed — no listener for that event anywhere in src/, at any point in the
 * repo's history. `WeakWordsPanel` meanwhile disables its button and swaps the
 * label to "✓ Added to flashcard review" unconditionally on click.
 *
 * So the learner pressed it, was TOLD their weak words were queued, and nothing
 * was written. The one action in the quiz that turns a mistake into future
 * practice was the one action that did not work — and it reported success, which
 * is worse than failing, because it is the app stating something that did not
 * happen.
 *
 * FOUND BY SWEEPING A CLASS, not by reading this screen: custom events
 * dispatched with no listener, which is the same shape as the speaking coach
 * wired to a state no launcher produces.
 *
 * THIS DRIVES THE REAL STORE. Asserting the function "was called" would pass
 * against the broken version too — it was always called; it just did nothing.
 * The only assertion that distinguishes them is whether SRS gained the card.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { getSR, getSRScore } from '../lib/srs';

// The hook's collaborators, stubbed to the minimum it needs to mount. None of
// them participate in the write under test.
vi.mock('../lib/contentClient', () => ({ getStoryCatalog: () => Promise.resolve([]) }));
vi.mock('../lib/audio.ts', () => ({ stopAudio: () => {} }));
vi.mock('../hooks/useExerciseCompletion', () => ({ completeExercise: () => {} }));
vi.mock('../lib/adaptive', () => ({ recordTopicResult: () => {} }));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ stats: { xp: 0 }, setStats: () => {}, writeDelta: () => {} }),
}));

import { useListeningQuiz } from '../components/practice/listening/useListeningQuiz';

/**
 * THE REAL FUNCTION, off the REAL hook.
 *
 * The first version of this file defined its own copy of the loop and asserted
 * against that — so mutation-testing the production call (`false` → `true`)
 * left all seven tests green, because they were exercising the copy. That is
 * this repo's "a test that restates production data cannot check production
 * data", committed while writing a test about a different instance of the same
 * class. Caught by mutation; fixed by driving the hook.
 */
function addWeakWords(words: unknown[]): void {
  const { result } = renderHook(() => useListeningQuiz());
  type Arg = Parameters<typeof result.current.handleAddToFlashcards>[0];
  result.current.handleAddToFlashcards(words as Arg);
}

beforeEach(() => {
  localStorage.clear();
});

describe('missed words reach spaced repetition', () => {
  it('writes a card for every missed word', () => {
    expect(Object.keys(getSR())).toHaveLength(0);
    addWeakWords([
      { hr: 'zrakoplov', en: 'aeroplane' },
      { hr: 'kolodvor', en: 'station' },
    ]);
    const sr = getSR();
    expect(Object.keys(sr).sort()).toEqual(['kolodvor', 'zrakoplov']);
  });

  it('records them as MISSED, not as fresh cards', () => {
    // `correct: false` is the whole point — a word just got wrong should come
    // back sooner, and `addWordToSRS` would no-op on one already in the deck.
    addWeakWords([{ hr: 'zrakoplov', en: 'aeroplane' }]);
    const card = getSR()['zrakoplov'] as { w?: number; r?: number };
    expect(card.w, 'the miss was not recorded as a wrong answer').toBeGreaterThan(0);
    expect(card.r ?? 0).toBe(0);
  });

  it('pulls an ALREADY-TRACKED word forward instead of no-opping', () => {
    getSRScore('zrakoplov', true, 4000); // learner had it right before
    const before = (getSR()['zrakoplov'] as { due: number }).due;
    addWeakWords([{ hr: 'zrakoplov', en: 'aeroplane' }]);
    const after = (getSR()['zrakoplov'] as { due: number }).due;
    expect(after, 'a repeat mistake left the schedule untouched').toBeLessThan(before);
  });

  it('survives a malformed entry without losing the rest of the batch', () => {
    addWeakWords([null, { en: 'no croatian side' }, { hr: '   ' }, { hr: 'kolodvor' }]);
    expect(Object.keys(getSR())).toEqual(['kolodvor']);
  });

  it('accepts bare strings as well as question objects', () => {
    addWeakWords(['kolodvor']);
    expect(Object.keys(getSR())).toEqual(['kolodvor']);
  });
});

describe('the wiring the write depends on', () => {
  it('the hook writes to SRS and no longer dispatches into nothing', async () => {
    const raw = await import('node:fs').then((fs) =>
      fs.readFileSync('src/components/practice/listening/useListeningQuiz.ts', 'utf8'),
    );
    // COMMENTS STRIPPED. The first run of this failed on the hook's own
    // explanation of the bug, which names the dead event — prose reading
    // exactly like the code it describes, for the third time in this session.
    const code = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
    expect(code, 'the hook does not write to SRS').toMatch(/getSRScore\(/);
    expect(
      code,
      'the dead `nh:add-weak-words` dispatch is back — nothing has ever listened for it',
    ).not.toMatch(/nh:add-weak-words/);
  });

  it('the button the learner presses still reaches that function', async () => {
    const fs = await import('node:fs');
    const results = fs.readFileSync('src/components/practice/listening/ResultsView.tsx', 'utf8');
    const panel = fs.readFileSync('src/components/practice/listening/WeakWordsPanel.tsx', 'utf8');
    // ResultsView hands the hook's function to the panel...
    expect(results).toMatch(/onAddToFlashcards=\{handleAddToFlashcards\}/);
    // ...and the panel's button calls it. Without this the write is unreachable
    // and every assertion above would still pass — the `award` lesson.
    expect(panel).toMatch(/onClick=\{handleAdd\}/);
    expect(panel).toMatch(/Added to flashcard review/);
  });
});

/**
 * The SAME CLASS in a second place, found by the same sweep: a custom event
 * dispatched with no listener anywhere.
 *
 * `useAward` fell back to `window.dispatchEvent(new CustomEvent('knight:badge'))`
 * whenever a badge had no authored speech in `BADGE_SPEECHES` — at TWO sites,
 * the badge path and the streak-badge path. Only 22 badges have a speech, so the
 * dead branch was the one most badges took: earning them produced total silence
 * from the coach where the code plainly intended a generic celebration.
 *
 * The only listener that ever existed for that event is in a test, which
 * asserted the DISPATCH happened — proving the event fires, not that anything
 * receives it. That is the decorative-guard shape exactly.
 */
describe('a badge with no authored speech still celebrates', () => {
  it('no knight:badge dispatch remains at either site', () => {
    const raw = readFileSync('src/hooks/useAward.ts', 'utf8');
    const code = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
    expect(
      code,
      'the dead knight:badge dispatch is back — nothing has ever listened for it',
    ).not.toMatch(/dispatchEvent\(\s*new CustomEvent\('knight:badge'/);
  });

  it('both fallback branches speak instead', () => {
    const raw = readFileSync('src/hooks/useAward.ts', 'utf8');
    const code = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
    // Two sites: the badge path and the streak-badge path. Counting them is what
    // stops a fix to one being mistaken for a fix to both — which is how the
    // second site nearly shipped untouched.
    const speaks = [...code.matchAll(/knightSpeak\('celebrating', `\$\{\w+\.n\}!/g)];
    expect(speaks, 'a fallback branch went back to silence').toHaveLength(2);
  });

  it('the fallback line is grammatical Croatian', () => {
    // `Svaka čast` (well done) + `nastavi tako` (keep it up, ti-imperative) —
    // the register the authored speeches already use.
    const raw = readFileSync('src/hooks/useAward.ts', 'utf8');
    expect(raw).toMatch(/Svaka čast — nastavi tako/);
  });

  it('x2k agrees in gender: tisuća is feminine, so DVIJE', () => {
    // Shipped as "Dva tisuće XP!", which is ungrammatical — the coach said it
    // to the learner. `dva` is masculine/neuter; `tisuća` is feminine.
    const raw = readFileSync('src/hooks/useAward.ts', 'utf8');
    expect(raw, 'the ungrammatical "Dva tisuće" is back').not.toMatch(/Dva tisuće/);
    expect(raw).toMatch(/Dvije tisuće/);
  });
});
