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
  // genitive-deep · instrumental · numbers-nouns · time-duration · aspect-imperfective
  'B1-1': [
    'I can use the genitive in its main meanings and the instrumental with verbs and adjectives.',
    'I can count nouns correctly after two, five and twenty-one.',
    'I can say how long something lasts and use the imperfective for a repeated or unfinished action.',
  ],
  // aspect-perfective · verb-prefixes · motion-verbs · position-placement · infinitive-vs-da
  'B1-2': [
    'I can choose the perfective for a finished action and the imperfective for a process.',
    'I can read what a prefix does to a verb, such as do-, iz- and pro-.',
    'I can say where I put something and where it is, and choose between an infinitive and da + present.',
  ],
  // time-clauses · real-conditions · cause-purpose · reported-speech · relative-deep
  'B1-3': [
    'I can sequence two events with kad, prije nego and nakon što.',
    'I can say what will happen if something happens, give a reason, and state a purpose.',
    'I can report what someone said and say “the one who…” in different cases.',
  ],
  // telling-a-story · opinions-agreeing · feelings-inner-life · complaints-problems · bureaucracy
  'B1-4': [
    'I can tell a story from start to finish in the past.',
    'I can give an opinion and agree or disagree politely, and say how I feel.',
    'I can make a complaint and handle a visit to an office.',
  ],
  // renting-flat · job-interview · media-news · technology-internet · environment-nature
  'B1-5': [
    'I can ask about renting a flat and understand the terms.',
    'I can answer common job-interview questions.',
    'I can follow a news report and talk about technology and the environment.',
  ],
  // food-cooking
  'B1-6': [
    'I can follow a recipe and explain how I cook a dish.',
    'I can talk about food, taste and restaurant manners.',
  ],
};
