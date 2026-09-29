// src/data/canDo/B1.ts
//
// B1 CAN-DO STATEMENTS (academic recommendation 6, 2026-09-29).
//
// Two or three per unit, keyed by unit id (level + 1-based position in the level,
// the same ids as COURSE_UNIT_TITLES). Each one is drawn from the `objectives` of
// the unit's five lessons in functions/api/content/_data/curriculum.js and states
// something a learner can be OBSERVED doing when the unit is finished — plain
// learner-facing English, beginning "I can …", no grammar term without a gloss.
//
//   B1-1  genitive-deep, dative-locative, instrumental, numbers-nouns, future-tense
//   B1-2  time-duration, aspect, aspect-imperfective, aspect-perfective, verb-prefixes
//   B1-3  motion-verbs, position-placement, infinitive-vs-da, impersonal, time-clauses
//   B1-4  real-conditions, cause-purpose, reported-speech, relative-deep, telling-a-story
//   B1-5  opinions-agreeing, feelings-inner-life, complaints-problems, bureaucracy, renting-flat
//   B1-6  job-interview, media-news, technology-internet, environment-nature, food-cooking

export const CAN_DO_B1: Readonly<Record<string, readonly string[]>> = {
  'B1-1': [
    'I can say whose something is, what there is none of, and how much of it there is, with the right case after nema, a quantity or a number.',
    'I can say who I am giving something to, where something is, and what or who I did something with.',
    'I can talk about what will happen, in both the long and the short future form, with ću in the right place.',
  ],
  'B1-2': [
    'I can say when something happened, how long it lasted, and that it is still going on — Živim ovdje pet godina.',
    'I can choose between the two verbs of an aspect pair, telling a habit or an action in progress from a single finished action.',
    'I can work out an unfamiliar verb by taking off its prefix and finding the root.',
  ],
  'B1-3': [
    'I can say where I am going, coming from or moving around, and tell sitting down from being seated.',
    'I can read a sign or a rule that names nobody, and say what one should do, or what I need, without a subject.',
    'I can link events with when, while, as soon as, before and after, keeping a future time clause in the present.',
  ],
  'B1-4': [
    'I can talk about things that may happen and what I will do if they do, and give a reason or an aim for what I do.',
    'I can pass on what someone said, asked or asked me to do, keeping the tense they used.',
    'I can tell a story from beginning to end, setting the scene and then moving the events along.',
  ],
  'B1-5': [
    'I can say what I think, agree or disagree politely, and say how I feel.',
    'I can explain calmly what has gone wrong and ask for it to be put right.',
    'I can get through an office counter and read a flat advert, asking about documents, rent, utilities and the deposit.',
  ],
  'B1-6': [
    'I can write a short CV and covering letter and answer an interview question with a reason.',
    'I can follow a news report, supply the verb a headline leaves out, and mark a claim as second-hand.',
    'I can talk about everyday technology, the landscape and the environment, and follow a Croatian recipe.',
  ],
};
