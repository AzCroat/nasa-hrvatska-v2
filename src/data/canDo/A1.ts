// src/data/canDo/A1.ts
//
// CAN-DO STATEMENTS FOR THE A1 UNITS (academic programme, 2026-09-29).
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
  // alphabet … biti-questions-negation
  'A1-1': [
    'I can read any Croatian word aloud, including č, ć, dž, đ, lj and nj.',
    'I can greet someone and say goodbye at the right level of formality.',
    'I can say who I am with ja sam, deny it with nisam, and ask a yes/no question with je li or jesi li.',
  ],
  // gender … plural-irregular
  'A1-2': [
    'I can tell whether a noun is masculine, feminine or neuter and point at it with ovaj, taj and onaj.',
    'I can ask who, what, where, when and how much.',
    'I can make a noun plural, including the irregular ones like ljudi and djeca.',
  ],
  // jobs-professions … numbers-11-1000
  'A1-3': [
    'I can name a job in its male and female form, such as učitelj and učiteljica.',
    'I can say where I am from, my nationality and which languages I speak.',
    'I can count up to a million and give my phone number.',
  ],
  // zvati-se … sibilarization
  'A1-4': [
    'I can say what I am called and ask someone their name.',
    'I can introduce my family and say whose someone is with moj, tvoj and naš.',
    'I can make plurals like gradovi and vojnici.',
  ],
  // fleeting-a … present-tense-verbs
  'A1-5': [
    'I can make plurals of words like pas and otac, where an a drops out.',
    'I can describe something with a colour or adjective that agrees with the noun, and say whose it is: Anin, Markov.',
    'I can say what I and others do every day with regular verbs.',
  ],
  // negation … accusative-animate
  'A1-6': [
    'I can say what I do not do with ne before the verb.',
    'I can use verbs like studirati and telefonirati.',
    'I can put a thing or a person in the accusative after verbs like vidjeti and voljeti.',
  ],
  // imati-nemati … smjeti-permission
  'A1-7': [
    'I can say what I have and do not have, and book a room at a hotel.',
    'I can say what I can, must and want to do with moći, morati and htjeti.',
    'I can say what I need with trebati and ask whether something is allowed with smjeti.',
  ],
  // money-exchange … za-accusative
  'A1-8': [
    'I can change money at a mjenjačnica and ask what something costs.',
    'I can name the days of the week and say where I am going with ići.',
    'I can say where I am going with u and na, and who something is for with za.',
  ],
  // accusative-pronouns … at-the-restaurant
  'A1-9': [
    'I can use the short object pronouns me, te, ga and je in second position.',
    'I can book a trip at a travel agency.',
    'I can say what I eat and drink and order a meal in a restaurant.',
  ],
  // verbs-iti-jeti … prepositions-place
  'A1-10': [
    'I can use verbs like govoriti, vidjeti and voljeti in the present.',
    'I can name clothes and ask how much something costs.',
    'I can say where something is with u, na and the locative.',
  ],
  // locative-pronouns … phone-call
  'A1-11': [
    'I can say who I am talking about with o meni, o tebi and o njemu.',
    'I can use verbs like putovati and kupovati, and name the months: u siječnju.',
    'I can describe the rooms of a flat and make a simple phone call.',
  ],
  // past-tense … weather-seasons
  'A1-12': [
    'I can say what I did yesterday with the past tense, including išao, rekao and mogao.',
    'I can ask a question about the past and say what I did not do.',
    'I can tell a short story in order, and talk about the weather and the seasons.',
  ],
  // future-tense … object-pronouns
  'A1-13': [
    'I can say what I will do tomorrow and make plans.',
    'I can use the dative to say who I give or tell something to, and with prema and k.',
    'I can use short pronouns like mi, ti and mu.',
  ],
  // giving-and-sending … daily-routine
  'A1-14': [
    'I can say who I give, send or tell something to.',
    'I can say what I like with sviđa mi se, and write a short postcard or greeting.',
    'I can describe my daily routine with reflexive verbs like budim se.',
  ],
  // reflexive-past-future … instrumental-means
  'A1-15': [
    'I can say probudio sam se and probudit ću se in the right order.',
    'I can talk about school and say what I like and prefer.',
    'I can say who I am with using s or sa, and how I travel: autom, vlakom.',
  ],
  // instrumental-place … nemati-genitive
  'A1-16': [
    'I can say where something is with pred, pod and nad.',
    'I can say who I am with using sa mnom, s tobom and s njim.',
    'I can use the genitive for possession, for an amount, and after nema.',
  ],
  // genitive-prepositions … ordinals-dates
  'A1-17': [
    'I can say where I come from and where I am going to with iz, od, do and kod.',
    'I can count things correctly and tell the time: dva stola, pet knjiga, pet je sati.',
    'I can use ordinal numbers and say a date.',
  ],
  // dates-years … pluralia-tantum
  'A1-18': [
    'I can say a year and the date I was born.',
    'I can name parts of the body and say what hurts: boli me glava.',
    'I can use feminine nouns like stvar and noć, and plural-only nouns like hlače and vrata.',
  ],
  // sports-free-time … imperative-negative
  'A1-19': [
    'I can talk about sport and what I do in my free time.',
    'I can say how I feel and use words like radost and mladost.',
    'I can give an instruction and tell someone not to do something with nemoj.',
  ],
  // infinitive-ci … travel-croatia
  'A1-20': [
    'I can use verbs whose infinitive ends in -ći, such as ići, doći and moći.',
    'I can address someone by name or politely with gospodine and gospođo.',
    'I can find my way in town and plan and describe a trip in Croatia.',
  ],
};
