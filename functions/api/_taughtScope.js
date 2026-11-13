// functions/api/_taughtScope.js
//
// FEEDBACK STAYS INSIDE WHAT THE COURSE HAS TAUGHT (owner reports, 2026-11-13: "AI feedback,
// but you shouldn't be working with material that would require padeži knowledge if it hasn't
// been taught" — "Words shouldn't be changing if padeži isn't taught yet").
//
// The client sends `taught`: the grammar words the learner's open lessons have introduced
// (src/lib/taughtTerms.ts). The writing evaluator and the speaking coach are told to correct,
// change, mark down or mention NOTHING outside that list. Above all, an ending is never changed
// for a case the learner has not been taught. An absent list (no course loaded, or the Level
// Check, which tests a whole level on purpose) adds no rule.

const CASES = [
  'nominative',
  'genitive',
  'dative',
  'accusative',
  'vocative',
  'locative',
  'instrumental',
];

/** The client's list, cleaned to bounded lowercase words; null when none was sent. */
export function sanitizeTaught(taught) {
  if (!Array.isArray(taught)) return null;
  return [
    ...new Set(
      taught
        .filter((t) => typeof t === 'string')
        .map((t) =>
          t
            .toLowerCase()
            .replace(/[^a-z ]/g, '')
            .trim()
            .slice(0, 24),
        )
        .filter(Boolean),
    ),
  ].slice(0, 40);
}

/** The instruction appended to a feedback prompt, or '' when no list was sent. */
export function taughtScopeRule(list) {
  if (list === null) return '';
  const taughtCases = CASES.filter((c) => list.includes(c));
  const untaughtCases = CASES.filter((c) => !list.includes(c));
  const known =
    list.length === 0
      ? 'The learner has been taught NO grammar yet.'
      : `The learner has been taught only this grammar: ${list.join(', ')}.`;
  const endings =
    taughtCases.length === 0
      ? 'They have NOT been taught any case. Do not change, correct or comment on any word ending: keep every word in exactly the form the learner wrote it, except a misspelling or a missing diacritic inside the word itself.'
      : `Of the cases they know only: ${taughtCases.join(', ')}. Correct an ending ONLY where one of those is required. Never change an ending for ${untaughtCases.join(', ')} — keep the learner's form.`;
  return (
    `COURSE SCOPE — THIS OVERRIDES EVERYTHING ABOVE. ${known} ` +
    'Do not correct, change, mark wrong, mention or lower the score for anything they have not been taught. ' +
    `${endings} ` +
    'Never use a grammar word they have not been taught. Judge only what they were taught, their spelling and diacritics, and whether the meaning comes across.'
  );
}
