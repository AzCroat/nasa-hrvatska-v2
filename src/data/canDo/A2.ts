// src/data/canDo/A2.ts
//
// CAN-DO STATEMENTS FOR THE A2 UNITS (academic recommendation 6, 2026-09-29).
//
// Two or three per unit, in plain learner-facing English, each beginning "I can …"
// and each something a learner can check against themselves: an action, not a topic.
// Drawn from the spine `objectives` of the unit's five lessons
// (functions/api/content/_data/curriculum.js), so a statement never promises more
// than the unit teaches.
//
// Keyed by unit id — level + 1-based position in level, e.g. 'A2-4' — the same keys
// as COURSE_UNIT_TITLES. A unit whose five lessons change must have its statements
// re-read, exactly as its title must.

export const CAN_DO_A2: Readonly<Record<string, readonly string[]>> = {
  // present · vi-vs-ti · object-pronouns · accusative-deep · dative-intro
  'A2-1': [
    'I can use everyday irregular verbs such as ići, moći and htjeti in the present tense.',
    'I can choose between ti and Vi, and switch to ti when someone invites me to.',
    'I can say who I gave, wrote or told something to, using short pronouns like mu, joj and ga.',
  ],
  // instrumental-intro · prepositions-action · adjective-agreement · svoj · plural-cases
  'A2-2': [
    'I can say who I am with and how I am travelling: s bratom, vlakom.',
    'I can say where something is and where it is going, choosing the right case after u and na.',
    'I can make adjectives and svoj agree with their nouns, in the singular and the plural.',
  ],
  // quantity · ordinals-dates · past-tense · past-questions-negation · adverbs
  'A2-3': [
    'I can say how much or how many of something there is, and give a date.',
    'I can say what I did yesterday, ask someone whether they did something, and say that I did not.',
    'I can say how often and how well I do things: uvijek, rijetko, dobro, brzo.',
  ],
  // comparatives-a2 · modal-verbs-a2 · conjunctions · relative-koji · indefinites
  'A2-4': [
    'I can compare two people or things and name the best of several.',
    'I can say what I can, must, want and am allowed to do, and make a polite request.',
    'I can join my sentences with words like ali, jer, iako and koji, and talk about someone, no one and everyone.',
  ],
  // house-home · body-health · clothes-appearance · describing-people · work-jobs
  'A2-5': [
    'I can describe my home, room by room, and say where things are in it.',
    'I can tell a doctor or a pharmacist what hurts.',
    'I can describe what someone looks like, what they are wearing and what they do for a living.',
  ],
  // school-studies · hobbies-free-time · travel-transport · plans-invitations · celebrations-holidays
  'A2-6': [
    'I can talk about what I study and what I do in my free time.',
    'I can buy a ticket and ask when a train or bus leaves and arrives.',
    'I can invite someone out, accept or decline politely, and use the right greeting for a holiday.',
  ],
};
