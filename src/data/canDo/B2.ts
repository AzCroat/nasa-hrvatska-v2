// src/data/canDo/B2.ts
//
// CAN-DO STATEMENTS for the six B2 units (academic recommendation 6, 2026-09-29).
//
// Each unit is five consecutive B2 lessons in spine order (src/lib/courseUnits.ts
// derives the units; this file only names what a learner who has mastered one can
// DO). Every statement is drawn from the `objectives` of that unit's five lessons in
// functions/api/content/_data/curriculum.js — plain learner-facing English, concrete
// and observable, beginning "I can …". A statement is a claim about five lessons, so
// if a spine reorder moves a lesson between units, these must be re-read.

export const CAN_DO_B2: Readonly<Record<string, readonly string[]>> = {
  // noun-peculiarities-a · present-ati-tricky · aspect-suffixes · false-friends · literacy-and-language
  'B2-1': [
    'I can form tricky plurals such as gradovi, dani, ljudi and oči.',
    'I can conjugate pisati, slati and zvati and make a perfective verb imperfective again.',
    'I can avoid false friends such as aktualan and eventualno.',
  ],
  // noun-peculiarities-e · present-ivati-nuti · aspect-with-verbs · internet-society · language-history
  'B2-2': [
    'I can form sestara and djevojaka, ruci and knjizi, and address women in the vocative.',
    'I can conjugate kupovati and potpisivati and pick the right aspect after a modal or phase verb.',
    'I can discuss the pros and cons of the internet and name the three dialect groups.',
  ],
  // internationalisms · aspect-negation · human-rights · clitics · politics-society
  'B2-3': [
    'I can decline international words such as organizacija and turizam.',
    'I can place a whole cluster of clitics in second position.',
    'I can discuss human rights and follow Croatian political reporting.',
  ],
  // relative-pronouns-cases · predicate-instrumental · comparative-idioms · reading-culture · literature-canon
  'B2-4': [
    'I can use koji in every case, as in knjiga koju sam ti dao.',
    'I can say what someone became or is considered with the instrumental: postao je ravnateljem.',
    'I can use idioms such as gladan kao vuk and talk about a Croatian novel.',
  ],
  // indefinite-pronouns-cases · body-part-nouns · degrees-intensity · colloquialisms · health-prevention
  'B2-5': [
    'I can use nitko and ništa in every case, as in ni s kim.',
    'I can say what hurts and talk about staying healthy: Bole me oči.',
    'I can understand common slang such as lova and klopa and give the standard word.',
  ],
  // agreement-special-nouns · quantity-agreement · i-declension · family-changes · small-talk-fluency
  'B2-6': [
    'I can make adjectives and verbs agree after numbers: dva prijatelja su došla, pet ljudi je došlo.',
    'I can decline nouns such as stvar, noć and ljubav correctly.',
    'I can discuss how the family has changed and keep a conversation going.',
  ],
  // reflexive-sebe · passive-voice · participial-adjectives · verbal-nouns-intro · higher-education
  'B2-7': [
    'I can use sebe, sebi and sobom in every case.',
    'I can form the passive both ways and nouns such as čitanje and učenje.',
    'I can describe the Croatian university system and student life.',
  ],
  // conditional · iterative-conditional · word-formation-agents · perfective-present · business-economy
  'B2-8': [
    'I can describe past habits with the conditional: Ljeti bismo išli na more.',
    'I can build nouns such as vozač, učiteljica and mladost.',
    'I can use the perfective present after ako and čim, and discuss business news.',
  ],
  // coordinate-clauses · complex-sentences · concession-contrast · consumerism-advertising · prepositions-advanced
  'B2-9': [
    'I can join clauses with a, ali, nego and već and place the comma correctly.',
    'I can concede a point with iako and use unatoč with the dative.',
    'I can tell za stolom from za stol and talk about advertising.',
  ],
  // dependent-clauses-b2 · unreal-conditions · wishes-regrets · film-and-music · modal-nuance
  'B2-10': [
    'I can give reasons with budući da and purposes with kako bi.',
    'I can say what would have happened and express a regret: Da barem…, Trebao sam…',
    'I can tell advice from obligation and talk about Croatian film and music.',
  ],
  // genitive-of-negation · negation-advanced · verbal-adverbs · climate-environment · hedging-precision
  'B2-11': [
    'I can say what is missing: Nema vode, Nije bilo struje.',
    'I can read verbal adverbs such as čitajući and došavši.',
    'I can hedge a claim with navodno and discuss climate change.',
  ],
  // reported-speech-b2 · interjections · travel-and-sport · humour-irony · argument-structure
  'B2-12': [
    'I can report what someone said without changing the tense: Rekao je da me voli.',
    'I can react with interjections such as joj, uf and bravo, and hear irony.',
    'I can weigh pros and cons, opening with Što se tiče… and closing with Sve u svemu…',
  ],
  // abstract-topics · writing-registers · formal-email · presentations · meetings-negotiation
  'B2-13': [
    'I can write a formal email that opens with Poštovani and keeps the capitalised Vi.',
    'I can give a structured presentation and close with Hvala na pažnji.',
    'I can propose in a meeting with Predlažem da… and disagree by conceding first.',
  ],
};
