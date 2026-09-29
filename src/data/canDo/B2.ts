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
//
//   B2-1 clitics, i-declension, aspect-suffixes, aspect-with-verbs, aspect-negation
//   B2-2 participial-adjectives, passive-voice, verbal-adverbs, conditional, unreal-conditions
//   B2-3 wishes-regrets, modal-nuance, complex-sentences, concession-contrast, prepositions-advanced
//   B2-4 degrees-intensity, negation-advanced, argument-structure, hedging-precision, abstract-topics
//   B2-5 writing-registers, formal-email, presentations, meetings-negotiation, business-economy
//   B2-6 politics-society, small-talk-fluency, humour-irony, language-history, literature-canon

export const CAN_DO_B2: Readonly<Record<string, readonly string[]>> = {
  'B2-1': [
    'I can put short pronouns and auxiliaries in second position and order a cluster of them correctly (Dao sam mu ga).',
    'I can decline feminine nouns that end in a consonant, such as stvar, noć and every -ost noun.',
    'I can choose the aspect a phase verb, a modal or a negative command demands, and turn a perfective back into an imperfective (zapisati → zapisivati).',
  ],
  'B2-2': [
    'I can build a passive participle (napisan, otvoren, plaćen), decline it like an adjective, and form the passive both ways Croatian allows.',
    'I can read the -ći and -vši verbal adverbs in written Croatian and use dok when the subjects differ.',
    'I can say what I would do, and what would have happened if things had been different, choosing da for an unreal condition and ako for a real one.',
  ],
  'B2-3': [
    'I can express a wish or a regret (Da barem…, Trebao sam…) and tell should from should have.',
    'I can calibrate advice, obligation and permission with morati, trebati, moći and smjeti.',
    'I can join clauses with da, koji, jer and iako, concede a point before disagreeing, and read prepositions that take more than one case (za stolom, po kruh).',
  ],
  'B2-4': [
    'I can say how much and how precisely, from jedva to krajnje, including sve više and Što prije, to bolje.',
    'I can give the advantages and disadvantages of an option, opening with Što se tiče… and closing with Sve u svemu….',
    'I can hedge or attribute a claim (Rekao bih da…, navodno) and deny precisely with ni… ni… and ne samo… nego i….',
  ],
  'B2-5': [
    'I can write a formal email that opens with Poštovani, keeps the V-form throughout and closes with the right sign-off.',
    'I can give a short presentation, signposting each part and closing with Hvala na pažnji.',
    'I can take a turn in a meeting, propose with Predlažem da…, and read the business pages with words like dobit, gubitak and gospodarstvo.',
  ],
  'B2-6': [
    'I can follow Croatian political news and name the institutions, starting with the Sabor.',
    'I can keep a conversation going with pa, zapravo and Kako se ono kaže…, and hear irony and understatement (Ma daj!, Nije loše).',
    'I can explain where the three dialect groups are spoken and choose a first Croatian book to read, talking about its radnja and likovi.',
  ],
};
