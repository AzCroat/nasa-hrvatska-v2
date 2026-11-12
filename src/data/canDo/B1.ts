// src/data/canDo/B1.ts
//
// B1 CAN-DO STATEMENTS (academic recommendation 6, 2026-09-29).
//
// Two or three per unit, keyed by unit id (level + 1-based position in the level,
// the same ids as COURSE_UNIT_TITLES). Each one is drawn from the `objectives` of
// the unit's five lessons in functions/api/content/_data/curriculum.js and states
// something a learner can be OBSERVED doing when the unit is finished — plain
// learner-facing English, beginning "I can …", no grammar term without a gloss.

export const CAN_DO_B1: Readonly<Record<string, readonly string[]>> = {
  // comparatives-a2 · superlatives-irregular · comparative-adverbs · character-traits · appearance-compliments
  'B1-1': [
    'I can compare two things and name the best of many, including bolji, gori, veći and manji.',
    'I can describe what someone is like and compare two people’s characters.',
    'I can pay a compliment and accept one modestly.',
  ],
  // aspect-imperfective · aspect-perfective · verb-prefixes · future-ii · time-clauses
  'B1-2': [
    'I can choose between an imperfective and a perfective verb when telling what happened.',
    'I can work out an unfamiliar verb from its prefix and root.',
    'I can link events with kad, čim, dok and nakon što, using the present or budem for the future.',
  ],
  // real-conditions · conjunctions · instrumental · instrumental-adjectives · verbs-with-instrumental
  'B1-3': [
    'I can talk about conditions that may come true and join sentences with a, ali and nego.',
    'I can say with whom and with what I did something, as in s mojim starim prijateljem.',
    'I can answer Čime se baviš? and say what I am proud of or pleased with.',
  ],
  // job-interview · job-application · satisfaction-disappointment · motion-verbs · position-placement
  'B1-4': [
    'I can write a job application and answer interview questions about my experience.',
    'I can say I am zadovoljan, oduševljen or razočaran with something.',
    'I can choose between ići, doći and otići, and between sjesti and sjediti.',
  ],
  // genitive-deep · genitive-adjectives · genitive-plural-special · numbers-nouns · time-genitive
  'B1-5': [
    'I can use the genitive for possession and absence, with adjectives, as in iz mojeg starog grada.',
    'I can put the right form after a number, as in pet djevojaka.',
    'I can say when something happened with phrases such as prošle godine and petog ožujka.',
  ],
  // time-duration · verbs-with-genitive · telling-a-story · media-news · feelings-inner-life
  'B1-6': [
    'I can say how long ago and for how long, as in Živim ovdje pet godina.',
    'I can tell a story from beginning to end and say what I fear and remember.',
    'I can follow a news report and talk about how I feel.',
  ],
  // nouns-en-et · verbs-peci-sti · names-and-meanings · love-and-marriage · relative-koji
  'B1-7': [
    'I can use ime, vrijeme and dijete in every case, as in nemam vremena.',
    'I can tell a love story and say who married whom: oženio se Anom, udala se za Marka.',
    'I can describe someone or something with a koji clause.',
  ],
  // relative-deep · indefinites · opinions-agreeing · foreign-nouns-declension · verbs-vati-jem
  'B1-8': [
    'I can use čiji, gdje and ono što in relative clauses.',
    'I can say someone, no one and everyone, and give and defend my opinion.',
    'I can decline foreign names and loanwords, as in na radiju or Tonyja.',
  ],
  // croats-abroad · infinitive-vs-da · cause-purpose · reported-speech · complaints-problems
  'B1-9': [
    'I can talk about emigration and return and weigh up life abroad.',
    'I can give a reason with jer or zbog and a purpose with da or radi.',
    'I can report what someone said and complain politely about a problem.',
  ],
  // bureaucracy · renting-flat · technology-internet · environment-nature · food-cooking
  'B1-10': [
    'I can deal with a bank, a post office or a council and read a rental advert.',
    'I can talk about technology and the environment using Croatian words.',
    'I can follow a Croatian recipe and name regional dishes.',
  ],
};
