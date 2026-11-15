// e2e/fixtures/more-nav.js
//
// Practice, AI Tutor (Talk) and Croatia are no longer tabs in the bar: the bar is
// Today | Course | More, and those three are reached through the More tab's doors.
// (Their URLs — /practice, /ai, /croatia — still work on direct entry.)

const DOOR = {
  practice: 'more-open-practice',
  ai: 'more-open-talk',
  croatia: 'more-open-croatia',
};

/** Click More in the main nav, then the door for `tab` ('practice' | 'ai' | 'croatia'). */
export async function openViaMore(page, tab) {
  const nav = page.getByRole('navigation', { name: 'Main navigation' });
  const more = nav.getByRole('button', { name: 'More', exact: true });
  await more.waitFor({ state: 'visible', timeout: 10_000 });
  await more.click();
  const door = page.getByTestId(DOOR[tab]);
  await door.waitFor({ state: 'visible', timeout: 20_000 });
  await door.click();
}
