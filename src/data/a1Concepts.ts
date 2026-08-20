// src/data/a1Concepts.ts
//
// Teaching content for the two A1 drills added by the 2026-08-20 recommender
// audit (PresentTenseDrill, WordOrderDrill).
//
// WHY THESE EXIST
// The audit found A1 teaches verbs — `present-tense-verbs` and `pronouns-biti`
// are both A1 lessons — while the lowest verb DRILL of any kind in
// CEFR_EXERCISE_POOL was A2 (imperative/modal/conjdrill/verbdrill). A1 is the
// one level that cannot inherit downward (the fill pool serves entries
// at-or-below the learner's level), so an A1 learner was taught "govorim" and
// then never asked to produce it. Syntax was the same story: unjumble,
// sentbuild and sentencetiles are all A2, so A1 got no word-order practice.
//
// Same authoring rules as caseConcepts.ts (concept-teaching directive,
// 2026-08-18): plain English, NO formal grammar background assumed. A heritage
// learner who has never heard the word "conjugation" has to be able to read
// these cold. Every concept leads with the English bridge — the thing the
// learner already does in their own language without knowing its name.

export interface A1Concept {
  id: string;
  /** Plain-English name — never the linguistic term alone. */
  title: string;
  /** The question this concept answers, in the learner's words. */
  question: string;
  /** The English bridge: the same thing, already happening in English. */
  bridge: string;
  /** Worked example: Croatian + what it means. */
  example: { hr: string; en: string };
  /** The mistake this concept prevents, shown as wrong → right. */
  counter: { wrong: string; right: string; why: string };
  /** 2–4 short takeaway lines shown as a list. */
  points: string[];
}

export const A1_CONCEPTS: A1Concept[] = [
  {
    id: 'present-tense',
    title: 'Verb endings — the ending says who',
    question: 'How does Croatian say who is doing something?',
    bridge:
      'You already do this in English, just barely: you say "I speak" but "she speakS". That -s is the only ending English has left. Croatian kept the whole set — every person gets its own ending.',
    example: {
      hr: 'govorim · govoriš · govori · govorimo · govorite · govore',
      en: 'I speak · you speak · he/she speaks · we speak · you (all) speak · they speak',
    },
    counter: {
      wrong: 'Ja govori hrvatski.',
      right: 'Ja govorim hrvatski.',
      why: '"govori" is the he/she ending. For "I" the ending is -m: govorim.',
    },
    points: [
      'The ending changes, the front of the word stays: govor-im, govor-iš, govor-i.',
      '"I" almost always ends in -m: imam, čitam, radim, govorim.',
      'Because the ending already says who, Croatian usually drops "ja" and "ti". "Govorim hrvatski" is a complete sentence.',
      'Learn "biti" (to be) separately — sam, si, je, smo, ste, su. It is irregular in every language.',
    ],
  },
  {
    id: 'word-order',
    title: 'Word order — what can move and what cannot',
    question: 'Croatian word order looks free. Is it?',
    bridge:
      'Mostly yes — and that is the trap. You can say "Ana čita knjigu" or "Knjigu čita Ana" and both are Croatian. But a small set of little words have a fixed seat, and those are the ones learners get wrong.',
    example: {
      hr: 'Ja sam iz Amerike. · Iz Amerike sam.',
      en: 'I am from America. (both correct — "sam" just stays in second place)',
    },
    counter: {
      wrong: 'Sam ja iz Amerike.',
      right: 'Ja sam iz Amerike.',
      why: '"sam" can never open a sentence. It takes the second seat, whatever comes first.',
    },
    points: [
      'The little words — sam, si, je, smo, ste, su, se, li — take the SECOND seat in the sentence. Never the first.',
      '"ne" is the exception that is easy: it sits directly in front of its verb. Ne govorim. Ne znam.',
      '"li" makes a yes/no question and follows the verb straight away: Govoriš li hrvatski?',
      'Describing words come before the noun, like English: velika kuća, not kuća velika.',
    ],
  },
];

export function a1ConceptById(id: string): A1Concept | undefined {
  return A1_CONCEPTS.find((c) => c.id === id);
}
