// e2e/fixtures/settle-exercise.js
//
// The course walkers (course-full-walk, course-walkthrough, course-failure-and-time) do
// not SOLVE guided practice — it is unscored — they only need every item SETTLED so the
// lesson's Next unlocks. This performs ONE action on whichever of the exercise-player
// kinds is on screen (true/false, match, sort, word order, rewrite, fix, listen, dictate)
// and reports whether it did anything, so a walker's loop can `continue`.
//
// Any answer will do: a first miss shows the hint, a second settles the item with the
// answer shown. Audio-first kinds play the (mocked, silent) recording first; if the play
// fails the item's own skip settles it.
//
// ONE ROUND TRIP DECIDES THE STEP. The walkers call this on every loop iteration of every
// lesson. Asking the page one question at a time (a dozen locator round trips per step)
// made the whole-course walk run to its time limit on CI once every A1 lesson carried
// these exercises (2026-11-15); the page is now asked once what is on screen and what to
// press, and the presses themselves stay real Playwright clicks.

async function plan(page) {
  return page.evaluate(() => {
    const visible = (e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    const first = (sel) => [...document.querySelectorAll(sel)].find(visible);
    const id = (e) => e.getAttribute('data-testid');
    const enabled = (prefix) => `[data-testid^="${prefix}"]:not([disabled])`;
    if (!document.querySelector('[data-testid^="ex-"]')) return null;
    let e;
    // A settled item inside the text step: move to its next question.
    if ((e = first('[data-testid="ex-next-item"]:not([disabled])'))) return { click: [id(e)] };
    // Settled, nothing more to do here — the walker presses the lesson's Next.
    if (first('[data-testid="ex-explanation"]')) return null;
    if ((e = first('[data-testid="ex-audio-skip"]'))) return { click: [id(e)] };
    if ((e = first(enabled('ex-tf-')))) return { click: [id(e)] };
    if ((e = first(enabled('ex-fix-word-')))) return { click: [id(e)] };
    if ((e = first(enabled('ex-match-left-')))) {
      const r = first(enabled('ex-match-right-'));
      return { click: r ? [id(e), id(r)] : [id(e)] };
    }
    if ((e = first(enabled('ex-sort-item-')))) {
      const g = first(enabled('ex-sort-group-'));
      return { click: g ? [id(e), id(g)] : [id(e)] };
    }
    if ((e = first(enabled('ex-order-tile-')))) return { click: [id(e)] };
    if (first('[data-testid="ex-transform-input"]:not([disabled])'))
      return { fill: 'ex-transform-input', click: ['ex-check'] };
    if (first('[data-testid="ex-dictate-input"]')) {
      if (first('[data-testid="ex-dictate-input"]:not([disabled])'))
        return { fill: 'ex-dictate-input', click: ['ex-check'] };
      return first('[data-testid="ex-dictate-play"]:not([disabled])')
        ? { click: ['ex-dictate-play'], wait: 150 }
        : { wait: 150 };
    }
    if (first('[data-testid^="ex-listen-option-"]')) {
      if ((e = first(enabled('ex-listen-option-')))) return { click: [id(e)] };
      return first('[data-testid="ex-listen-play"]:not([disabled])')
        ? { click: ['ex-listen-play'], wait: 150 }
        : { wait: 150 };
    }
    // Word order with every tile placed: check it.
    if (first('[data-testid="ex-check"]:not([disabled])')) return { click: ['ex-check'] };
    return null;
  });
}

export async function settleExerciseStep(page) {
  const step = await plan(page);
  if (!step) return false;
  if (step.fill) await page.getByTestId(step.fill).fill('x');
  for (const testId of step.click ?? []) await page.getByTestId(testId).click();
  if (step.wait) await page.waitForTimeout(step.wait);
  return true;
}
