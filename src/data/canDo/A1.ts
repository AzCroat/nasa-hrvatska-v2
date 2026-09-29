// src/data/canDo/A1.ts
//
// CAN-DO STATEMENTS FOR THE SIX A1 UNITS (academic programme, 2026-09-29).
//
// What a learner who has finished the unit can be WATCHED doing — the CEFR's own
// "can do" voice, in plain learner-facing English. Each statement is drawn from the
// spine `objectives` of the unit's five lessons
// (functions/api/content/_data/curriculum.js), narrowed to something observable:
// "I can ask someone's name and give mine", never "I understand questions".
//
// Keyed by unit id — level + 1-based position in the level, the same ids as
// courseUnitTitles.ts. A unit is five consecutive spine lessons, so a reorder that
// moves a lesson across a unit boundary makes these statements describe the wrong
// unit; courseUnitTitles.test.ts pins the boundaries, and a statement here must be
// re-read whenever that pin moves.

/** Keyed by unit id, e.g. 'A1-4'. Two or three statements per unit. */
export const CAN_DO_A1: Readonly<Record<string, readonly string[]>> = {
  // alphabet · greetings-farewells · pronouns-biti · gender · plural-nouns
  'A1-1': [
    'I can read any Croatian word aloud and spell a word I hear, including č, ć, š, ž, đ, lj, nj and dž.',
    'I can greet someone and say goodbye at the right level of formality, and ask how they are with kako si or kako ste.',
    'I can say who I am and where I am from, and tell whether a noun is masculine, feminine or neuter and make it plural.',
  ],
  // basic-questions · present-tense-verbs · negation · adjectives-basic · possessives
  'A1-2': [
    'I can ask who, what, where, when, why and how much, and answer a yes/no question with just the verb.',
    'I can say what I and others do every day, and say what I do not do or have, using ne, nisam, nemam and neću.',
    'I can describe a thing and say whose it is, with the adjective and the possessive agreeing: moja nova kuća.',
  ],
  // demonstratives · family-people · countries-languages · numbers-time · time-calendar
  'A1-3': [
    'I can point things out with ovaj, taj and onaj, and introduce the members of my family, including which uncle is which.',
    'I can say which country and region my family is from, where I live and which languages I speak.',
    'I can give my age and phone number, tell the time, and say on which day or date something happens.',
  ],
  // cases · accusative-intro · imati-nemati · locative-intro · prepositions-place
  'A1-4': [
    'I can say what I drink, buy, read or see, changing the noun correctly: Pijem kavu, Vidim brata.',
    'I can say what I have and what I do not have, and ask whether there is something: Ima li mjesta?',
    'I can say where I am and where I am going, and place things next to, in front of, behind or under something.',
  ],
  // genitive-intro · vocative-intro · modals-basic · imperative-basic · reflexive-verbs
  'A1-5': [
    'I can say whose something is, ask for a glass or a cup of something, and say where I am from: iz Hrvatske.',
    'I can call people by name the Croatian way and address a stranger politely as gospodine or gospođo.',
    'I can say what I can, must and want to do, ask someone to do or not to do something, and describe my daily routine.',
  ],
  // likes-preferences · food-drink · shopping-prices · directions-town · weather-seasons
  'A1-6': [
    'I can say what I like and prefer, and order food and drink politely in a café.',
    'I can ask what something costs, understand a price in euros, and say how I will pay.',
    'I can ask for the way and follow simple directions, and talk about the weather and the seasons.',
  ],
};
