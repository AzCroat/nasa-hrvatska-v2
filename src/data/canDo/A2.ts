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
  // present · vi-vs-ti · adjective-agreement · svoj · accusative-deep
  'A2-1': [
    'I can use everyday irregular verbs such as ići, moći and htjeti in the present tense.',
    'I can choose between ti and Vi, and switch to ti when someone invites me to.',
    'I can make adjectives agree with their nouns, use svoj for “my own”, and put people and things in the accusative.',
  ],
  // plural-cases · prepositions-action · adverbs · dative-locative · house-home
  'A2-2': [
    'I can use the main cases in the plural.',
    'I can choose between u/na + accusative for movement and u/na + locative for place.',
    'I can describe the home I live in and where each thing is.',
  ],
  // describing-people · work-jobs · school-studies · aspect · modal-verbs-a2
  'A2-3': [
    'I can describe a person’s looks and character.',
    'I can talk about my work or studies and say what I have to, may and can do.',
    'I can tell the two verb aspects apart in a simple sentence, such as čitati and pročitati.',
  ],
  // comparatives-a2 · conjunctions · relative-koji · indefinites · hobbies-free-time
  'A2-4': [
    'I can compare two things and say which is the better or the biggest.',
    'I can join two clauses with jer, ali, iako and da, and say “the one that…” with koji.',
    'I can talk about my hobbies and free time.',
  ],
  // travel-transport · plans-invitations · celebrations-holidays · impersonal
  'A2-5': [
    'I can buy a ticket and ask about times and platforms.',
    'I can make an arrangement and invite someone, and accept or decline an invitation.',
    'I can wish someone well on a Croatian holiday and say what is done without saying who does it.',
  ],
};
