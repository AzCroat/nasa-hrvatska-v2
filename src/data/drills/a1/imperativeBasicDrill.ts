// src/data/drills/a1/imperativeBasicDrill.ts
//
// A1 GIVING INSTRUCTIONS — the drill for the `imperative-basic` lesson (A1, 94).
//
// Follows Hrvatski za početnike 1, pages 134–135: the IMPERATIV tables, built from the
// "oni" form of the present (čekaju → čekaj, čekajmo, čekajte; rade → radi, radimo, radite),
// the note that k, g, h change before -i (tuku → tuci), biti → budi, the rows "Upišite
// imperativ" with the verb and the person in brackets, and the softer negative "Nemoj
// raditi! Nemojmo raditi! Nemojte raditi!". The book's "neka" forms for a third person and
// the direct negative "Ne radi!" are not used: the lesson does not teach them.
//
// Three modes:
//   ti    — one person you know: čitaj, piši, dođi
//   viMi  — a group or a formal "you" (-te), and "let us" (-mo)
//   nemoj — nemoj + infinitive, and the words that soften a request

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const IMPERATIVE_BASIC_MODE_LABELS: Record<string, string> = {
  ti: '👉 Ti: čitaj, piši',
  viMi: '👥 Vi i mi: -te, -mo',
  nemoj: '🙏 Nemoj i molim',
};

export const IMPERATIVE_BASIC_DRILL_DATA: ModeDrillItem[] = [
  // ── ti ────────────────────────────────────────────────────────────────────
  {
    mode: 'ti',
    q: '____ polako, molim te. (čitati)',
    en: 'Read slowly, please.',
    opts: ['Čitaj', 'Čitaš', 'Čitati', 'Čitaju'],
    answer: 'Čitaj',
    tip: 'Take the oni form čitaju and drop the -u: Čitaj! Čitaš is a statement ("you are reading"), Čitati is the dictionary form, and Čitaju is "they read".',
  },
  {
    mode: 'ti',
    q: '____ mi razglednicu! (pisati)',
    en: 'Write me a postcard!',
    opts: ['Piši', 'Pisaj', 'Pišeš', 'Pisati'],
    answer: 'Piši',
    tip: 'The oni form is pišu; drop -u and add -i: Piši! Pisaj builds on the dictionary form instead, Pišeš is a statement, and Pisati is the infinitive.',
  },
  {
    mode: 'ti',
    q: '____ nove riječi svaki dan! (učiti)',
    en: 'Learn new words every day!',
    opts: ['Uči', 'Učiš', 'Učij', 'Učiti'],
    answer: 'Uči',
    tip: 'From oni uče, drop -e and add -i: Uči! Učiš is the present tense, Učij adds the -j that belongs to verbs like čitati, and Učiti is the infinitive.',
  },
  {
    mode: 'ti',
    q: '____ ovamo! (doći)',
    en: 'Come here!',
    opts: ['Dođi', 'Dođeš', 'Doći', 'Dođu'],
    answer: 'Dođi',
    tip: 'From oni dođu: drop -u, add -i: Dođi! Dođeš is the present tense, Doći is the infinitive, and Dođu is "they come".',
  },
  {
    mode: 'ti',
    q: '____ k liječniku, imaš temperaturu. (ići)',
    en: 'Go to the doctor, you have a temperature.',
    opts: ['Idi', 'Ideš', 'Iđi', 'Ići'],
    answer: 'Idi',
    tip: 'From oni idu comes Idi! Ideš is a statement ("you are going"), Iđi borrows the đ of dođi, and Ići is the infinitive.',
  },
  {
    mode: 'ti',
    q: '____ dobra, Ana! (biti)',
    en: 'Be good, Ana!',
    opts: ['Budi', 'Jesi', 'Biti', 'Budeš'],
    answer: 'Budi',
    tip: 'biti has its own command form: budi, budimo, budite. Jesi is the present ("you are"), Biti is the infinitive, and Budeš is not a command.',
  },
  {
    mode: 'ti',
    q: '____ mi gdje je pošta. (reći)',
    en: 'Tell me where the post office is.',
    opts: ['Reci', 'Reki', 'Reći', 'Rekao'],
    answer: 'Reci',
    tip: 'Before the -i of a command k changes to c: Reci! Reki keeps the k, Reći is the infinitive, and Rekao is a past form.',
  },
  {
    mode: 'ti',
    q: '____ me ovdje! (čekati)',
    en: 'Wait for me here!',
    opts: ['Čekaj', 'Čekaš', 'Čeki', 'Čekati'],
    answer: 'Čekaj',
    tip: 'The oni form čekaju ends in a vowel plus -ju, so the command ends in -j: Čekaj! Čekaš is the present tense, Čeki uses the wrong ending, and Čekati is the infinitive.',
  },
  {
    mode: 'ti',
    q: '____ puno vode! (piti)',
    en: 'Drink a lot of water!',
    opts: ['Pij', 'Piješ', 'Piji', 'Piti'],
    answer: 'Pij',
    tip: 'From oni piju, drop -u: Pij! Piješ is a statement, Piji adds an -i that is not needed after j, and Piti is the infinitive.',
  },

  // ── viMi ──────────────────────────────────────────────────────────────────
  {
    mode: 'viMi',
    q: 'Izvolite, ____! (sjesti)',
    en: 'Here you are, have a seat!',
    opts: ['Sjednite', 'Sjedni', 'Sjednete', 'Sjesti'],
    answer: 'Sjednite',
    tip: 'Izvolite is the formal word, so the command is formal too: Sjednite. Sjedni is for a friend, Sjednete is a present-tense form, and Sjesti is the infinitive.',
  },
  {
    mode: 'viMi',
    q: 'Molim Vas, ____ sutra u devet. (doći)',
    en: 'Please come tomorrow at nine.',
    opts: ['Dođite', 'Dođi', 'Dođete', 'Doći'],
    answer: 'Dođite',
    tip: 'Molim Vas shows a formal "you", so the command takes -te: Dođite. Dođi is for one friend, Dođete is the present tense, and Doći is the infinitive.',
  },
  {
    mode: 'viMi',
    q: 'Molim Vas, ____ polako. (govoriti)',
    en: 'Please speak slowly.',
    opts: ['Govorite', 'Govori', 'Govorate', 'Govoriti'],
    answer: 'Govorite',
    tip: 'From oni govore: drop -e and add -ite for a formal request: Govorite. Govori is the ti form, Govorate uses a wrong vowel, and Govoriti is the infinitive.',
  },
  {
    mode: 'viMi',
    q: 'Ana i Marko, ____ me kod kina! (čekati)',
    en: 'Ana and Marko, wait for me at the movie theater!',
    opts: ['Čekajte', 'Čekaj', 'Čekate', 'Čekati'],
    answer: 'Čekajte',
    tip: 'Two people are a group, so the command takes -te: Čekajte. Čekaj speaks to one person, Čekate is a statement ("you are waiting"), and Čekati is the infinitive.',
  },
  {
    mode: 'viMi',
    q: '____ mi kartu, molim Vas. (dati)',
    en: 'Give me a ticket, please.',
    opts: ['Dajte', 'Daj', 'Date', 'Dati'],
    answer: 'Dajte',
    tip: 'molim Vas makes it formal: Dajte. Daj is what you say to a friend (with molim te), Date is the present tense, and Dati is the infinitive.',
  },
  {
    mode: 'viMi',
    q: '____ ime ovdje, molim Vas. (napisati)',
    en: 'Write your name here, please.',
    opts: ['Napišite', 'Napiši', 'Napisajte', 'Napisati'],
    answer: 'Napišite',
    tip: 'The oni form is napišu, so the formal command is Napišite. Napiši is the ti form, Napisajte builds on the dictionary form, and Napisati is the infinitive.',
  },
  {
    mode: 'viMi',
    q: '____ pjesmu za baku! (pjevati)',
    en: "Let's sing a song for Grandma!",
    opts: ['Pjevajmo', 'Pjevamo', 'Pjevajte', 'Pjevaj'],
    answer: 'Pjevajmo',
    tip: '"Let us" adds -mo to the command stem pjevaj-: Pjevajmo! Pjevamo only states that we are singing, Pjevajte tells other people to sing, and Pjevaj speaks to one person.',
  },
  {
    mode: 'viMi',
    q: '____ kolače za goste! (peći)',
    en: "Let's bake cakes for the guests!",
    opts: ['Pecimo', 'Pečemo', 'Pekimo', 'Pecite'],
    answer: 'Pecimo',
    tip: 'From oni peku: k becomes c before -i, and "let us" adds -mo: Pecimo! Pečemo is the present tense, Pekimo keeps the k, and Pecite tells other people to bake.',
  },
  {
    mode: 'viMi',
    q: '____, kasno je! (krenuti)',
    en: "Let's get going, it is late!",
    opts: ['Krenimo', 'Krenemo', 'Krenite', 'Kreni'],
    answer: 'Krenimo',
    tip: 'From oni krenu: drop -u and add -imo for "let us": Krenimo! Krenemo is the present tense, and Krenite and Kreni send other people off without you.',
  },
  {
    mode: 'viMi',
    q: 'Djeca su glasna. Mama kaže: "____ dobri!" (biti)',
    en: 'The children are loud. Mom says: "Be good!"',
    opts: ['Budite', 'Budi', 'Budimo', 'Biti'],
    answer: 'Budite',
    tip: 'She is speaking to several children, so it is Budite, which matches the plural dobri. Budi is for one child, Budimo would include herself, and Biti is the infinitive.',
  },

  // ── nemoj ─────────────────────────────────────────────────────────────────
  {
    mode: 'nemoj',
    q: 'Nemoj ____ kišobran.',
    en: 'Do not forget the umbrella.',
    opts: ['zaboraviti', 'zaboraviš', 'zaboravi', 'zaboravite'],
    answer: 'zaboraviti',
    tip: 'nemoj is followed by the infinitive: Nemoj zaboraviti. zaboraviš is a present-tense form, and zaboravi and zaboravite are commands, which cannot follow nemoj.',
  },
  {
    mode: 'nemoj',
    q: 'Nemojte ____ na sastanak.',
    en: 'Do not be late for the meeting.',
    opts: ['kasniti', 'kasnite', 'kasni', 'kasnili'],
    answer: 'kasniti',
    tip: 'After nemojte the verb stays in the infinitive too: Nemojte kasniti. kasnite and kasni are conjugated forms, and kasnili is a past form.',
  },
  {
    mode: 'nemoj',
    q: 'Molim Vas, ____ pušiti ovdje.',
    en: 'Please do not smoke here.',
    opts: ['nemojte', 'nemoj', 'nemojmo', 'nemate'],
    answer: 'nemojte',
    tip: 'Molim Vas is formal, so the form is nemojte. nemoj is for one friend, nemojmo means "let us not", and nemate means "you do not have".',
  },
  {
    mode: 'nemoj',
    q: 'Ana, ____ piti hladnu vodu. Boli te grlo.',
    en: 'Ana, do not drink cold water. Your throat hurts.',
    opts: ['nemoj', 'nemojte', 'nemojmo', 'nemaš'],
    answer: 'nemoj',
    tip: 'One person you call by her first name, and te in the next sentence, call for nemoj. nemojte is plural or formal, nemojmo is "let us not", and nemaš means "you do not have".',
  },
  {
    mode: 'nemoj',
    q: '____ ići autom. Idemo tramvajem!',
    en: "Let's not go by car. We are going by tram!",
    opts: ['Nemojmo', 'Nemoj', 'Nemojte', 'Nemamo'],
    answer: 'Nemojmo',
    tip: '"Let us not" is Nemojmo, the mi form, and it matches idemo. Nemoj and Nemojte tell other people not to go, and Nemamo means "we do not have".',
  },
  {
    mode: 'nemoj',
    q: '____, gdje je kolodvor?',
    cue: 'You stop a stranger in the street.',
    opts: ['Oprostite', 'Oprosti', 'Izvolite', 'Hvala'],
    answer: 'Oprostite',
    tip: 'Oprostite ("excuse me") opens a request to a stranger. Oprosti is for a friend, Izvolite means "here you are", and Hvala is "thank you".',
  },
  {
    mode: 'nemoj',
    q: '____, ovo je Vaša kava.',
    en: 'Here you are, this is your coffee.',
    opts: ['Izvolite', 'Izvoli', 'Oprostite', 'Nemojte'],
    answer: 'Izvolite',
    tip: 'Handing something over politely is Izvolite, and Vaša shows the formal "you". Izvoli is for a friend, Oprostite is "excuse me", and Nemojte is "do not".',
  },
  {
    mode: 'nemoj',
    q: 'Daj mi sol, molim ____.',
    en: 'Pass me the salt, please.',
    opts: ['te', 'Vas', 'ti', 'se'],
    answer: 'te',
    tip: 'Daj is the ti form, so "please" is molim te. Molim Vas goes with Dajte, ti is a subject form that cannot follow molim, and se does not belong here.',
  },
  {
    mode: 'nemoj',
    q: 'Koja je rečenica pristojna za nepoznatu osobu?',
    en: 'Which sentence is polite to a stranger?',
    opts: ['Sjednite, molim Vas.', 'Sjedni!', 'Sjedni, molim Vas.', 'Sjedneš.'],
    answer: 'Sjednite, molim Vas.',
    tip: 'A stranger gets the -ite form and molim Vas. "Sjedni!" is for a friend, "Sjedni, molim Vas" mixes the informal verb with the formal please, and "Sjedneš" is not a request at all.',
  },
];
