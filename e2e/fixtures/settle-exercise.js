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

const enabled = (prefix) => `[data-testid^="${prefix}"]:not([disabled])`;

async function shown(page, selector) {
  const l = page.locator(selector).first();
  return (await l.count()) && (await l.isVisible()) ? l : null;
}

/**
 * ONE round trip that says whether any exercise-player or text-step control is on screen.
 * The walkers call settleExerciseStep on every loop iteration of every lesson; without
 * this, a lesson with none of the new kinds paid a dozen locator round trips per step and
 * the whole-course walk ran past its time limit (2026-11-15).
 */
async function anyExerciseControl(page) {
  return page.evaluate(
    () =>
      !!document.querySelector(
        '[data-testid^="ex-"], [data-testid="lesson-text-show"], [data-testid="lesson-text-questions"]',
      ),
  );
}

export async function settleExerciseStep(page) {
  if (!(await anyExerciseControl(page))) return false;
  let l;
  // The text step: past LISTEN and READ to its questions.
  if ((l = await shown(page, '[data-testid="lesson-text-show"]'))) {
    await l.click();
    return true;
  }
  if ((l = await shown(page, '[data-testid="lesson-text-questions"]'))) {
    await l.click();
    return true;
  }
  // A settled item inside the text step: move to its next question.
  if ((l = await shown(page, '[data-testid="ex-next-item"]:not([disabled])'))) {
    await l.click();
    return true;
  }
  // Settled, nothing more to do here — the walker presses the lesson's Next.
  if (await shown(page, '[data-testid="ex-explanation"]')) return false;

  if ((l = await shown(page, '[data-testid="ex-audio-skip"]'))) {
    await l.click();
    return true;
  }
  if ((l = await shown(page, enabled('ex-tf-')))) {
    await l.click();
    return true;
  }
  if ((l = await shown(page, enabled('ex-fix-word-')))) {
    await l.click();
    return true;
  }
  if ((l = await shown(page, enabled('ex-match-left-')))) {
    await l.click();
    const r = await shown(page, enabled('ex-match-right-'));
    if (r) await r.click();
    return true;
  }
  if ((l = await shown(page, enabled('ex-sort-item-')))) {
    await l.click();
    const g = await shown(page, enabled('ex-sort-group-'));
    if (g) await g.click();
    return true;
  }
  if ((l = await shown(page, enabled('ex-order-tile-')))) {
    await l.click();
    return true;
  }
  if ((l = await shown(page, '[data-testid="ex-transform-input"]:not([disabled])'))) {
    await l.fill('x');
    await page.getByTestId('ex-check').click();
    return true;
  }
  if (await shown(page, '[data-testid="ex-dictate-input"]')) {
    const input = await shown(page, '[data-testid="ex-dictate-input"]:not([disabled])');
    if (input) {
      await input.fill('x');
      await page.getByTestId('ex-check').click();
      return true;
    }
    const play = await shown(page, '[data-testid="ex-dictate-play"]:not([disabled])');
    if (play) await play.click();
    await page.waitForTimeout(300);
    return true;
  }
  if (await shown(page, '[data-testid^="ex-listen-option-"]')) {
    const option = await shown(page, enabled('ex-listen-option-'));
    if (option) {
      await option.click();
      return true;
    }
    const play = await shown(page, '[data-testid="ex-listen-play"]:not([disabled])');
    if (play) await play.click();
    await page.waitForTimeout(300);
    return true;
  }
  // Word order with every tile placed: check it.
  if ((l = await shown(page, '[data-testid="ex-check"]:not([disabled])'))) {
    await l.click();
    return true;
  }
  return false;
}
