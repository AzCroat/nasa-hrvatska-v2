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
  // alphabet · greetings-farewells · pronouns-biti · gender · demonstratives
  'A1-1': [
    'I can read any Croatian word aloud and spell a word I hear, including č, ć, š, ž, đ, lj, nj and dž.',
    'I can greet someone and say goodbye at the right level of formality, and ask how they are with kako si or kako ste.',
    'I can say who I am, tell whether a noun is masculine, feminine or neuter, and point at things with ovaj and taj.',
  ],
  // basic-questions · plural-nouns · countries-languages · numbers-time · possessives
  'A1-2': [
    'I can ask who, what, where, when, why and how much, and answer a yes/no question with just the verb.',
    'I can make a noun plural, count, and tell the time.',
    'I can say where I am from and which languages I speak, and say whose something is: moja knjiga.',
  ],
  // family-people · adjectives-basic · present-tense-verbs · negation · cases
  'A1-3': [
    'I can introduce my family and describe a person or thing with an adjective that agrees with the noun.',
    'I can say what I and others do every day, and say what I do not do or have, using ne, nisam and nemam.',
    'I can explain in plain words what a case is and why a Croatian noun changes its ending.',
  ],
  // accusative-intro · imati-nemati · modals-basic · time-calendar · food-drink
  'A1-4': [
    'I can say what I have and do not have, and put the thing I see, want or buy in the accusative.',
    'I can say what I can, must and want to do with moći, morati and htjeti.',
    'I can name the days of the week and order food and drink in a café.',
  ],
  // clothes-appearance · shopping-prices · locative-intro · prepositions-place · past-tense
  'A1-5': [
    'I can name clothes, ask for a size and a colour, and ask how much something costs.',
    'I can say where something is and where I am, using u, na and the locative.',
    'I can say what I did yesterday with the past tense.',
  ],
  // past-questions-negation · weather-seasons · future-tense · dative-intro · object-pronouns
  'A1-6': [
    'I can ask a question about the past and say what I did not do.',
    'I can talk about the weather and the seasons, and say what I will do tomorrow.',
    'I can say who I give, write or tell something to, and use short pronouns like mi, ti and ga.',
  ],
  // reflexive-verbs · likes-preferences · instrumental-intro · genitive-intro · quantity
  'A1-7': [
    'I can use everyday reflexive verbs such as zvati se and sjećati se.',
    'I can say what I like and prefer, and say who I am with using s or sa.',
    'I can use the genitive to say how much of something I want, and whose something is.',
  ],
  // ordinals-dates · body-health · imperative-basic · vocative-intro · directions-town
  'A1-8': [
    'I can say a date and a year, and use ordinal numbers such as prvi and drugi.',
    'I can name parts of the body and say what hurts.',
    'I can give a simple instruction, call someone by name, and ask for and understand directions in town.',
  ],
};
