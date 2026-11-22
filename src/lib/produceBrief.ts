// What a learner may SEE before they produce the language: never the answer.
//
// A spine objective is written for the course ("Make the female form of a job:
// učitelj → učiteljica, liječnik → liječnica"), and its examples ARE the answers to the
// "Say it" / "Write it" task built from it (owner, 2026-11-20: the jobs exercise gave
// every answer). The grader still receives the full objectives; the learner sees only
// the part before an example, and a line that is nothing but an example is dropped.
// `lessonProduceContract.test.ts` walks every lesson through this, so no lesson can ever
// put its own answers on the screen.

/** The part of one objective that is safe to show: before any `:` example, no `→` pairs. */
export function learnerSafeObjective(line: string): string {
  let s = (line || '')
    .replace(/\([^)]*→[^)]*\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const colon = s.indexOf(':');
  if (colon > 0) s = s.slice(0, colon).trim();
  return s.includes('→') ? '' : s;
}

/** Up to `max` safe lines, as one short brief ("" when every line gave itself away). */
export function learnerSafeBrief(lines: readonly string[], max = 2): string {
  const safe = lines.map(learnerSafeObjective).filter(Boolean).slice(0, max);
  return safe.length ? safe.join('. ') + '.' : '';
}
