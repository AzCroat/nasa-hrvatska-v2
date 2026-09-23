// src/lib/spokenMatch.ts
//
// Tolerant comparison of what a recogniser HEARD against what the unit asked
// for. Extracted from GuidedSpeakingScreen (2026-09-23) so the sentence-build
// grader can share it: a lib must not import a component, and a second copy of
// this rule is exactly the duplicated-fact hazard this repo keeps finding.

/** Lowercase, strip punctuation, collapse whitespace. */
export function normaliseSpoken(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:„“”"'—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Accent-and-punctuation-tolerant compare for the rehearsal stage. A recogniser
 *  drops diacritics and punctuation constantly; refusing the learner over that
 *  would punish the microphone, not the speaker. */
export function phraseMatches(heard: string, target: string): boolean {
  const a = normaliseSpoken(heard);
  const b = normaliseSpoken(target);
  if (!a) return false;
  if (a === b) return true;
  // Partial credit: most of the target's words present, in any order. The point
  // of this stage is to get the phrase out of the mouth, not to win a dictation.
  const want = b.split(' ').filter((w) => w.length > 2);
  if (want.length === 0) return a.includes(b);
  const got = new Set(a.split(' '));
  const hits = want.filter((w) => got.has(w)).length;
  return hits / want.length >= 0.6;
}
