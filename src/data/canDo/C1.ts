// src/data/canDo/C1.ts
//
// CAN-DO STATEMENTS for the six C1 units (academic recommendation 6, 2026-09-29).
// Each unit (C1-1 … C1-6, five consecutive lessons of the spine — see
// src/lib/courseUnits.ts) carries two or three plain-English statements a learner
// can check themselves against. They are drawn from the spine `objectives` of the
// unit's five lessons (functions/api/content/_data/curriculum.js) and claim only
// what those lessons teach and test: concrete, observable, beginning "I can …".
//
//   C1-1  clitics-advanced · word-order-emphasis · verb-government · aspect-nuance ·
//         aorist-imperfekt
//   C1-2  verbal-nouns · condensation · tvorba-rijeci · diminutives-augmentatives ·
//         collective-numbers
//   C1-3  clause-types · comparison-advanced · passive-choices · collocations ·
//         discourse-particles
//   C1-4  idioms-register · accent-prosody · summarising-paraphrase ·
//         academic-writing · debate-persuasion
//   C1-5  formal-speech · translation-pitfalls · proofreading-editing ·
//         media-analysis · law-administration
//   C1-6  science-technology · arts-culture · regional-varieties ·
//         language-identity · diaspora-identity

export const CAN_DO_C1: Readonly<Record<string, readonly string[]>> = {
  'C1-1': [
    'I can put a full cluster of clitics in the right order, even when the first unit is a whole phrase.',
    'I can move the emphasis of a sentence by changing its word order, and use the case each common verb demands.',
    'I can choose between two correct aspects to say exactly what I mean, and recognise the aorist and imperfect when I read them.',
  ],
  'C1-2': [
    'I can compress a clause into a verbal noun or a participle phrase, the way formal Croatian writing does.',
    'I can work out an unfamiliar word from its prefix and suffix, and hear the attitude in a diminutive or augmentative.',
    'I can count mixed groups of people correctly with dvoje, troje and the other collective numbers.',
  ],
  'C1-3': [
    'I can build every type of subordinate clause and pick the conjunction that expresses the relation I mean.',
    'I can compare things precisely with od, nego, poput and za razliku od, and choose the passive a Croatian writer would use.',
    'I can pair verbs with nouns the way Croatian does, and hear the attitude carried by particles such as pa, valjda and baš.',
  ],
  'C1-4': [
    'I can use idioms that native speakers actually say, and judge whether an expression is too colloquial for the situation.',
    'I can summarise a Croatian text in my own words and write in the impersonal, hedged register of academic prose.',
    'I can concede a point, rebut it and disagree strongly without being rude.',
  ],
  'C1-5': [
    'I can give a short toast, thank a host or offer condolences with the formulas Croatian occasions expect.',
    'I can avoid false friends and calques, and proofread my own writing for agreement, case, spelling and commas.',
    'I can read a news article or an official document for who acted, what is doubted and which deadline applies.',
  ],
  'C1-6': [
    'I can read technical Croatian by splitting coined words, and explain in Croatian why a book, film or exhibition moved me.',
    'I can recognise Kajkavian, Čakavian and ikavian speech and give the standard form of what I hear.',
    'I can talk about my family’s roots and my own Croatian, and explain what makes standard Croatian distinct.',
  ],
};
