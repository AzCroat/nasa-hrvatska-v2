// src/data/drills/b1/timeClausesDrill.ts
//
// B1 WHEN, WHILE, AS SOON AS — the drill for the `time-clauses` lesson
// (B1 position 10).
//
// Three modes, nine items each:
//   veznik  — choosing the connector: kad, dok, čim, dok ne, prije nego što, nakon što,
//             otkako, and nakon + a noun
//   vrijeme — the tense when the clause points at the future: the present of a svršeni
//             verb or futur II, never the ordinary future
//   vid     — aspect does the sequencing: a nesvršeni background, a svršeni event, and
//             the svršeni verb after dok ne
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — 33 (Marin's e-mail: "Kad prođete Ogulin,
//   skrenete s glavne ceste desno", "Čim dođete, zapalit ćemo vatru za roštilj"), 34 (the
//   box on doći: "Prezent tih glagola upotrebljava se u složenim rečenicama (to jest u
//   zavisnoj rečenici uz veznike kad, ako, čim)"), 46 ("Kad idemo u goste…", "Kad krenu
//   kući…"), 53 ("Nakon kave idemo u šetnju"), 67 ("Unajmljuju stanove samo dok ne kupe
//   svoj stan"), 90 ("Dok sam pila kavu, dogodilo se još nešto fantastično", "Dok sam se
//   vraćala kući, razmišljala sam…"), 108–109 ("Kad budem radila, dignut ću kredit",
//   "Tražit ću posao u inozemstvu dok budem putovao", "Kada avion bude sletio, nazvat ću
//   te"; kad/ako/dok + futur drugi, futur prvi in the main clause), 133 ("Kad sam bio
//   dječak, pokušavao sam pisati"), 149 ("čim su se vjenčali").
//
// Where the book and the lesson differ:
//   - Prije nego što, nakon što and otkako are not in the book at all; it only has nakon
//     with a noun (nakon kave, nakon rata). Those three come from the lesson. Four items
//     use them, and one item sets the book's nakon + genitive against nakon što.
//   - The lesson says a svršeni verb takes the present in a future time clause and a
//     nesvršeni verb takes futur II. The book also prints futur II of a svršeni verb
//     ("Kada avion bude sletio"). Both are standard, so Kad dođem and Kad budem došao are
//     never offered against each other; the wrong options are the ordinary future, a
//     bare infinitive and a participle with no helping verb.
//   - Kad and dok can both stand in several of the book's sentences (Kad / Dok sam bio
//     dječak), so the two are never offered in the same item.
//   - "Until" is dok ne in the book and in the lesson; plain dok is never offered as a
//     right answer for "until".
//   - Grammar-order fence: futur II is taught one lesson earlier and is used. No ako
//     (the next lesson), no iako or zato što (conjunctions), no relative koji, no
//     reported speech.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TIME_CLAUSES_MODE_LABELS: Record<string, string> = {
  veznik: '⛓️ Kad, dok, čim',
  vrijeme: '⏳ Vrijeme u rečenici',
  vid: '🎬 Pozadina i događaj',
};

export const TIME_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── veznik ────────────────────────────────────────────────────────────────
  {
    mode: 'veznik',
    q: '____ sam pila kavu, prišao mi je zgodan muškarac.',
    en: 'While I was drinking coffee, a handsome man came up to me.',
    opts: ['Dok', 'Čim', 'Otkako', 'Prije nego što'],
    answer: 'Dok',
    tip: 'Dok + a nesvršeni verb means "while": the coffee is the background. Čim means "as soon as" and needs a finished action. Otkako means "ever since", and prije nego što would put his arrival before the coffee.',
  },
  {
    mode: 'veznik',
    q: '____ dođete, zapalit ćemo vatru za roštilj.',
    en: 'As soon as you arrive, we will light the fire for the barbecue.',
    opts: ['Čim', 'Dok', 'Otkako', 'Nakon'],
    answer: 'Čim',
    tip: 'Čim means "as soon as": one thing follows the other at once. Dok with the svršeni dođete would need ne and would mean "until". Otkako looks back at a start in the past, and nakon is a preposition that needs a noun in the genitive.',
  },
  {
    mode: 'veznik',
    q: 'Unajmljuju stanove samo ____ kupe svoj stan.',
    en: 'They rent apartments only until they buy a place of their own.',
    opts: ['dok ne', 'dok', 'čim', 'otkako'],
    answer: 'dok ne',
    tip: '"Until" is dok ne + a svršeni verb; the ne is part of the phrase and is not translated. Plain dok means "while". Čim would say they rent as soon as they buy, and otkako means "ever since".',
  },
  {
    mode: 'veznik',
    q: '____ sam bio dječak, pokušavao sam pisati.',
    en: 'When I was a boy, I used to try to write.',
    opts: ['Kad', 'Čim', 'Prije nego što', 'Dok ne'],
    answer: 'Kad',
    tip: 'Kad opens a period in the past: when I was a boy. Čim needs a single finished moment, not a whole childhood. Prije nego što would mean before he was a boy, and dok ne means "until".',
  },
  {
    mode: 'veznik',
    q: 'Pročitaj ugovor ____ ga potpišeš.',
    en: 'Read the contract before you sign it.',
    opts: ['prije nego što', 'nakon što', 'otkako', 'dok'],
    answer: 'prije nego što',
    tip: '"Before" + a clause is prije nego što. Nakon što means "after", the opposite order. Otkako means "ever since", and dok with the svršeni potpišeš would need ne.',
  },
  {
    mode: 'veznik',
    q: '____ smo večerali, izašli smo u šetnju.',
    en: 'After we had dinner, we went out for a walk.',
    opts: ['Nakon što', 'Prije nego što', 'Otkako', 'Dok ne'],
    answer: 'Nakon što',
    tip: '"After" + a clause is nakon što. Prije nego što reverses the order. Otkako means "ever since" and needs a main clause about a lasting state, and dok ne means "until".',
  },
  {
    mode: 'veznik',
    q: '____ živim u Zagrebu, puno učim hrvatski.',
    en: 'Ever since I have been living in Zagreb, I have been studying Croatian a lot.',
    opts: ['Otkako', 'Čim', 'Nakon što', 'Dok ne'],
    answer: 'Otkako',
    tip: 'Otkako means "ever since": it names the starting point of something that still goes on. Čim and nakon što need a finished action, not živim. Dok ne means "until".',
  },
  {
    mode: 'veznik',
    q: 'Koja rečenica znači „Wait here until I come back“?',
    opts: [
      'Čekaj ovdje dok se ne vratim.',
      'Čekaj ovdje dok se vraćam.',
      'Čekaj ovdje čim se vratim.',
      'Čekaj ovdje otkako se vratim.',
    ],
    answer: 'Čekaj ovdje dok se ne vratim.',
    tip: '"Until" is dok ne + a svršeni verb: dok se ne vratim. Dok se vraćam means "while I am on my way back". Čim means "as soon as" and otkako "ever since", and neither can follow čekaj here.',
  },
  {
    mode: 'veznik',
    q: '____ kave idemo u šetnju uz more.',
    en: 'After coffee we are going for a walk by the sea.',
    opts: ['Nakon', 'Nakon što', 'Čim', 'Dok'],
    answer: 'Nakon',
    tip: 'Kave is a noun in the genitive, and before a noun the word is the preposition nakon. Nakon što, čim and dok are conjunctions: each needs a whole clause with a verb after it.',
  },

  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: 'Kad ____ Ogulin, skrenite desno.',
    en: 'When you pass Ogulin, turn right.',
    opts: ['prođete', 'ćete proći', 'proći', 'prošli'],
    answer: 'prođete',
    tip: 'A time clause about the future never takes the ordinary future. A svršeni verb goes in the present: Kad prođete. Ćete proći is the ordinary future. Proći is a bare infinitive, and prošli is a participle with no helping verb.',
  },
  {
    mode: 'vrijeme',
    q: 'Čim ____ na posao, nazvat ću te.',
    en: 'As soon as I get to work, I will call you.',
    opts: ['stignem', 'ću stići', 'stići', 'stigao'],
    answer: 'stignem',
    tip: 'After čim the svršeni verb is in the present even though it points forward: Čim stignem. Ću stići is the ordinary future, which a time clause does not take. Stići is an infinitive, and stigao has no helping verb.',
  },
  {
    mode: 'vrijeme',
    q: 'Kad ____ radila, dignut ću kredit i kupiti stan.',
    en: 'When I am working, I will take out a loan and buy an apartment.',
    opts: ['budem', 'ću', 'sam', 'bih'],
    answer: 'budem',
    tip: 'A nesvršeni verb in a future time clause takes futur II: budem + the participle, Kad budem radila. Ću does not combine with a participle. Sam radila is the past, and bih radila is the conditional.',
  },
  {
    mode: 'vrijeme',
    q: 'Josip će tražiti posao dok ____ putovao svijetom.',
    en: 'Josip will look for a job while he is traveling the world.',
    opts: ['bude', 'će', 'budu', 'biti'],
    answer: 'bude',
    tip: 'Dok + futur II for two things going on together in the future: dok bude putovao. Će is the ordinary future and cannot stand with the participle putovao. Budu is plural, and biti is the infinitive.',
  },
  {
    mode: 'vrijeme',
    q: 'Kada avion ____, nazvat ću te.',
    en: 'When the plane has landed, I will call you.',
    opts: ['bude sletio', 'će sletjeti', 'sletjeti', 'bi sletio'],
    answer: 'bude sletio',
    tip: 'Futur II shows an action that comes before the one in the ordinary future: Kada avion bude sletio, nazvat ću te. Će sletjeti is the ordinary future, which never stands after kada here. Sletjeti is an infinitive, and bi sletio is the conditional.',
  },
  {
    mode: 'vrijeme',
    q: 'U kojoj je rečenici vrijeme pravilno?',
    en: 'In which sentence is the tense correct?',
    opts: [
      'Kad dođem kući, javit ću ti se.',
      'Kad ću doći kući, javit ću ti se.',
      'Kad doći kući, javit ću ti se.',
      'Kad došao kući, javit ću ti se.',
    ],
    answer: 'Kad dođem kući, javit ću ti se.',
    tip: 'Kad + the present of a svršeni verb, and the ordinary future only in the main clause. Kad ću doći puts the future inside the time clause. Kad doći has an infinitive, and kad došao has a participle with no helping verb.',
  },
  {
    mode: 'vrijeme',
    q: 'Čim ____ ispit, idem na more.',
    en: 'As soon as I pass the exam, I am going to the seaside.',
    opts: ['položim', 'ću položiti', 'polagati', 'položio'],
    answer: 'položim',
    tip: 'Čim + the present of the svršeni verb: Čim položim. Ću položiti is the ordinary future. Polagati is an infinitive, and of the nesvršeni verb, which only means sitting the exam. Položio has no helping verb.',
  },
  {
    mode: 'vrijeme',
    q: 'Dok ____ plovili po Jadranu, fotografirat ćemo otoke.',
    en: 'While we are sailing the Adriatic, we will photograph the islands.',
    opts: ['budemo', 'ćemo', 'smo', 'bismo'],
    answer: 'budemo',
    tip: 'Dok + futur II: Dok budemo plovili. Ćemo cannot stand with the participle plovili. Smo plovili is the past, which does not go with fotografirat ćemo, and bismo plovili is the conditional.',
  },
  {
    mode: 'vrijeme',
    q: 'Kad završim fakultet, ____ posao.',
    en: 'When I finish college, I will look for a job.',
    opts: ['tražit ću', 'budem tražio', 'tražio sam', 'tražiti'],
    answer: 'tražit ću',
    tip: 'The ordinary future belongs in the main clause: tražit ću. Futur II (budem tražio) is only for the clause after kad, ako or dok. Tražio sam is the past, and tražiti is an infinitive with no helping verb.',
  },

  // ── vid ───────────────────────────────────────────────────────────────────
  {
    mode: 'vid',
    q: 'Dok sam ____ kavu, dogodilo se nešto fantastično.',
    en: 'While I was drinking coffee, something fantastic happened.',
    opts: ['pila', 'pijem', 'piti', 'popiti'],
    answer: 'pila',
    tip: 'Dok ("while") sets a background that is still going on, so the nesvršeni verb: pila. Pijem is the present tense, but the story is told in the past (sam). Piti and popiti are infinitives and cannot follow sam.',
  },
  {
    mode: 'vid',
    q: 'Dok sam se ____ kući, razmišljala sam o koferu.',
    en: 'While I was on my way home, I was thinking about the suitcase.',
    opts: ['vraćala', 'vraćam', 'vraćati', 'vratiti'],
    answer: 'vraćala',
    tip: 'Two things going on at the same time: both verbs are nesvršeni, vraćala and razmišljala. Vraćam is the present tense, but the story is told in the past (sam se, razmišljala sam). Vraćati and vratiti are infinitives.',
  },
  {
    mode: 'vid',
    q: 'Dok smo čekali tramvaj, ____ je padati kiša.',
    en: 'While we were waiting for the streetcar, it started to rain.',
    opts: ['počela', 'počinjala', 'početi', 'počne'],
    answer: 'počela',
    tip: 'The waiting is the background (nesvršeni čekali); the rain starting is one event that breaks into it, so the svršeni verb: počela. Počinjala would be a start repeated over and over. Početi is an infinitive, and počne is a present that cannot follow je.',
  },
  {
    mode: 'vid',
    q: 'Čekat ću te dok ne ____ posao.',
    en: 'I will wait for you until you finish work.',
    opts: ['završiš', 'završavaš', 'završiti', 'završio'],
    answer: 'završiš',
    tip: 'Dok ne ("until") points at the moment something is done, so the svršeni verb in the present: dok ne završiš. Završavaš is the process, with no end point. Završiti is an infinitive, and završio has no helping verb.',
  },
  {
    mode: 'vid',
    q: 'Čim smo ____ na more, otišli smo na plažu.',
    en: 'As soon as we got to the seaside, we went to the beach.',
    opts: ['stigli', 'stizali', 'stići', 'stignemo'],
    answer: 'stigli',
    tip: 'Čim joins two finished events, one right after the other: stigli, otišli. Stizali would be an arrival still in progress. Stići is an infinitive, and stignemo is a present that cannot follow smo.',
  },
  {
    mode: 'vid',
    q: 'Nakon što je ____ pismo, odnijela ga je na poštu.',
    en: 'After she wrote the letter, she took it to the post office.',
    opts: ['napisala', 'pisala', 'napisati', 'piše'],
    answer: 'napisala',
    tip: 'Nakon što means the first action is over before the second starts, so the svršeni verb: napisala. Pisala would leave the letter unfinished. Napisati is an infinitive, and piše is a present that cannot follow je.',
  },
  {
    mode: 'vid',
    lead: 'Dok je Ana učila, Marko je gledao film.',
    q: 'Što govori ova rečenica?',
    opts: [
      'Two things were going on at the same time.',
      'Ana studied first, and then Marko watched the movie.',
      'Ana studied until Marko finished the movie.',
      'Marko watched the movie before Ana studied.',
    ],
    answer: 'Two things were going on at the same time.',
    tip: 'Dok + two nesvršeni verbs (učila, gledao) puts two actions side by side in time. A sequence would need svršeni verbs and nakon što or prije nego što, and "until" would be dok ne + a svršeni verb.',
  },
  {
    mode: 'vid',
    q: 'Kad sam došla kući, mama je još ____ ručak.',
    en: 'When I got home, Mom was still cooking lunch.',
    opts: ['kuhala', 'skuhala', 'kuhati', 'skuhati'],
    answer: 'kuhala',
    tip: 'Još ("still") shows the cooking was in progress when the svršeni event došla happened, so the nesvršeni verb: kuhala. Skuhala would mean lunch was finished. Kuhati and skuhati are infinitives and cannot follow je.',
  },
  {
    mode: 'vid',
    q: 'Nećemo početi dok svi ne ____.',
    en: 'We will not start until everyone arrives.',
    opts: ['dođu', 'dolaze', 'doći', 'došli'],
    answer: 'dođu',
    tip: 'Dok ne + the present of a svršeni verb: dok svi ne dođu. Dolaze is the nesvršeni verb, an arrival still in progress, and gives no end point. Doći is an infinitive, and došli has no helping verb.',
  },
];
