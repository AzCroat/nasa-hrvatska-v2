// src/data/drills/b1/realConditionsDrill.ts
//
// B1 IF — REAL CONDITIONS — the drill for the `real-conditions` lesson
// (B1 position 11).
//
// Three modes, nine items each:
//   uvjet  — the verb in the ako-half: the present or futur II, never the ordinary future
//   glavna — the main half: the imperative, the ordinary future or the present, its word
//            order, and the comma
//   akokad — ako or kad, a negated condition, osim ako, u slučaju da, and a real condition
//            against an unreal one
//
// Book pages (printed numbers):
//   Razgovarajte s nama! A2–B1 textbook — 33 ("Ako nas slučajno ne nađete, nazovite pa
//   ću doći po vas!"), 34 (the present of doći and verbs like it "u zavisnoj rečenici uz
//   veznike kad, ako, čim"), 72 (VEZNICI DA I KADA: "Da imam novca, kupio bih jahtu",
//   "Kad bih znala pjevati, bila bih pjevačica"; PISANJE ZAREZA: a comma when the
//   dependent clause comes first, none when it comes second), 80 ("Ako odlučimo na posao
//   putovati sa susjedom ili kolegom, jedan dan putovat ćemo svojim automobilom"), 81
//   ("Ako imate vremena, navratite k nama na kavu"), 108–109 ("Ako budem studirala, morat
//   ću i raditi", "Ako budem trenirao, bit ću u dobroj formi", "Ako ne budemo pazili…";
//   kad/ako/dok + futur drugi, futur prvi), 116 ("Ako čovjek radi više od 35 sati tjedno,
//   onda ima pravo na jednomjesečni plaćeni odmor").
//
// Where the book and the lesson differ:
//   - Osim ako and u slučaju da are not in the book; they come from the lesson only.
//     Three items.
//   - The lesson says a svršeni verb may take the plain present after ako and a nesvršeni
//     verb takes futur II. The book prints both the present (Ako imate vremena, Ako nas
//     ne nađete) and futur II (Ako budem studirala) and does not set them apart. Both are
//     standard, so the present and futur II are never offered against each other. The
//     wrong options are the ordinary future, an infinitive and a bare participle.
//   - The book's comma rule is printed for the unreal condition (Da sam medvjed, spavao
//     bih zimski san. / Spavao bih zimski san da sam medvjed.). The lesson on joining
//     sentences gives the same rule in general, and it is applied to ako here.
//   - Osim ako is standard with and without ne (osim ako ne bude problema). The item
//     uses the form without ne, where plain ako would give the opposite meaning.
//   - Grammar-order fence: futur II and time clauses come just before and are used. The
//     unreal condition (da imam, kad bih imao) is A2 material and appears in one item
//     only, to be told apart from a real one. No iako or nego (the next lesson), no
//     relative koji, no purpose clauses, nothing from B2 unreal conditions in the past.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const REAL_CONDITIONS_MODE_LABELS: Record<string, string> = {
  uvjet: '🔀 Iza „ako“',
  glavna: '➡️ Glavna rečenica',
  akokad: '🤔 Ako ili kad',
};

export const REAL_CONDITIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── uvjet ─────────────────────────────────────────────────────────────────
  {
    mode: 'uvjet',
    q: 'Ako ____ vremena, navratite k nama na kavu.',
    en: 'If you have time, drop by for coffee.',
    opts: ['imate', 'ćete imati', 'imati', 'imali'],
    answer: 'imate',
    tip: 'The ako-half stays in the present even though it points forward: Ako imate vremena. Ćete imati is the ordinary future, which does not go after ako. Imati is an infinitive, and imali is a participle with no helping verb.',
  },
  {
    mode: 'uvjet',
    q: 'Ako ____ studirala, morat ću i raditi.',
    en: 'If I go on studying, I will also have to work.',
    opts: ['budem', 'ću', 'bih', 'sam'],
    answer: 'budem',
    tip: 'A condition in the future takes futur II: budem + the participle, Ako budem studirala. Ću cannot stand with a participle. Bih is the conditional, for an unreal wish, and sam studirala is the past.',
  },
  {
    mode: 'uvjet',
    q: 'Ako nas slučajno ne ____, nazovite.',
    en: 'If by chance you do not find us, call.',
    opts: ['nađete', 'ćete naći', 'naći', 'našli'],
    answer: 'nađete',
    tip: 'Naći is a verb like doći, and after ako it takes the present: Ako nas ne nađete. Ćete naći is the ordinary future. Naći is an infinitive, and našli has no helping verb.',
  },
  {
    mode: 'uvjet',
    q: 'Ako sutra ____ padala kiša, ostat ćemo kod kuće.',
    en: 'If it rains tomorrow, we will stay home.',
    opts: ['bude', 'će', 'budu', 'biti'],
    answer: 'bude',
    tip: 'Futur II of the third person singular: Ako bude padala kiša. Će is the ordinary future and cannot stand with the participle padala. Budu is plural, and biti is the infinitive.',
  },
  {
    mode: 'uvjet',
    q: 'Ako ne ____ pazili, zakasnit ćemo na vlak.',
    en: 'If we are not careful, we will miss the train.',
    opts: ['budemo', 'ćemo', 'smo', 'bismo'],
    answer: 'budemo',
    tip: 'A negated condition simply puts ne in front of the verb: Ako ne budemo pazili. Ćemo does not go with a participle. Ne smo is not a form (the negative is nismo, and it would be the past), and bismo is the conditional.',
  },
  {
    mode: 'uvjet',
    q: 'Ako ____ trenirao, bit ćeš u dobroj formi.',
    en: 'If you train, you will be in good shape.',
    opts: ['budeš', 'ćeš', 'biti', 'bi'],
    answer: 'budeš',
    tip: 'Futur II after ako, the ordinary future in the main half: Ako budeš trenirao, bit ćeš. Ćeš does not combine with the participle trenirao. Biti is an infinitive, and bi trenirao is the conditional.',
  },
  {
    mode: 'uvjet',
    q: 'U kojoj je rečenici uvjet pravilno izrečen?',
    en: 'In which sentence is the condition formed correctly?',
    opts: [
      'Ako dođeš rano, idemo na kavu.',
      'Ako ćeš doći rano, idemo na kavu.',
      'Ako doći rano, idemo na kavu.',
      'Ako budeš doći rano, idemo na kavu.',
    ],
    answer: 'Ako dođeš rano, idemo na kavu.',
    tip: 'Ako + the present: Ako dođeš. Ako ćeš doći puts the ordinary future in the condition. Ako doći has only an infinitive, and budeš takes a participle (budeš došao), never an infinitive.',
  },
  {
    mode: 'uvjet',
    q: 'Ako Tom ____ ranije s posla, kuhat ćemo zajedno.',
    en: 'If Tom gets home from work earlier, we will cook together.',
    opts: ['dođe', 'će doći', 'doći', 'došao'],
    answer: 'dođe',
    tip: 'The present of doći after ako: Ako Tom dođe. Će doći is the ordinary future, which belongs in the main half (kuhat ćemo). Doći is an infinitive, and došao has no helping verb.',
  },
  {
    mode: 'uvjet',
    q: 'Koji oblik ne može stajati iza „ako“ kad je uvjet stvaran i u budućnosti?',
    en: 'Which form cannot follow ako for a real condition in the future?',
    opts: [
      'futur prvi: ako će padati',
      'prezent: ako pada',
      'futur drugi: ako bude padalo',
      'niječni prezent: ako ne pada',
    ],
    answer: 'futur prvi: ako će padati',
    tip: 'The ordinary future (futur prvi) stays out of the ako-half; it belongs in the main half. The present, the negated present and futur II are all correct after ako.',
  },

  // ── glavna ────────────────────────────────────────────────────────────────
  {
    mode: 'glavna',
    q: 'Ako odlučimo putovati s kolegom, ____ novac i automobil.',
    en: 'If we decide to ride with a colleague, we will save money and the car.',
    opts: ['štedjet ćemo', 'budemo štedjeli', 'štedjeti', 'štedjeli'],
    answer: 'štedjet ćemo',
    tip: 'The main half takes the ordinary future: štedjet ćemo. Futur II (budemo štedjeli) is only for the half with ako, kad or dok. Štedjeti is a bare infinitive, and štedjeli has no helping verb.',
  },
  {
    mode: 'glavna',
    q: 'Ako ne nađeš ključ, ____ susjedu.',
    en: 'If you do not find the key, call the neighbor.',
    opts: ['nazovi', 'nazvati', 'nazvao', 'budeš nazvao'],
    answer: 'nazovi',
    tip: 'After a condition the main half can be an order: nazovi. Nazvati is an infinitive and nazvao a bare participle, so neither is a full verb here. Budeš nazvao is futur II, which stands only in the ako-half.',
  },
  {
    mode: 'glavna',
    q: 'Ako budem trenirao, ____ u dobroj formi.',
    en: 'If I train, I will be in good shape.',
    opts: ['bit ću', 'budem bio', 'bio sam', 'biti'],
    answer: 'bit ću',
    tip: 'Futur II in the condition, the ordinary future in the result: bit ću. Budem bio is futur II again, and it cannot stand in a main clause. Bio sam is the past, and biti is a bare infinitive.',
  },
  {
    mode: 'glavna',
    q: 'Ako čovjek radi više od 35 sati tjedno, ____ pravo na plaćeni odmor.',
    en: 'If a person works more than 35 hours a week, he has the right to paid vacation.',
    opts: ['ima', 'imati', 'bude imao', 'imao'],
    answer: 'ima',
    tip: 'A general rule takes the present in both halves: ako radi… ima. Imati is a bare infinitive. Bude imao is futur II, which never stands in the main half, and imao has no helping verb.',
  },
  {
    mode: 'glavna',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: [
      'Ako pada kiša, ostajemo kod kuće.',
      'Ako pada kiša ostajemo, kod kuće.',
      'Ako, pada kiša ostajemo kod kuće.',
      'Ako pada, kiša ostajemo kod kuće.',
    ],
    answer: 'Ako pada kiša, ostajemo kod kuće.',
    tip: 'When the ako-half comes first, a comma closes it off, right before the main half. The other three put the comma inside one of the halves, where nothing is being separated.',
  },
  {
    mode: 'glavna',
    q: 'Koja rečenica s „ako“ na drugom mjestu ima pravilnu interpunkciju?',
    en: 'The ako-half comes second. Which sentence is punctuated correctly?',
    opts: [
      'Ostajemo kod kuće ako pada kiša.',
      'Ostajemo kod kuće, ako, pada kiša.',
      'Ostajemo, kod kuće ako pada kiša.',
      'Ostajemo kod kuće ako, pada kiša.',
    ],
    answer: 'Ostajemo kod kuće ako pada kiša.',
    tip: 'When the dependent half follows the main half, no comma is written. Commas around ako, after ostajemo or after ako all cut the sentence where there is no break.',
  },
  {
    mode: 'glavna',
    q: 'Ako Lorena upiše još jedan fakultet, ____ i raditi.',
    en: 'If Lorena enrolls in another college, she will also have to work.',
    opts: ['morat će', 'bude morala', 'morala je', 'morati'],
    answer: 'morat će',
    tip: 'The result is in the ordinary future: morat će. Bude morala is futur II and stays in the ako-half. Morala je is the past, and morati is a bare infinitive.',
  },
  {
    mode: 'glavna',
    q: 'Ako ne znate put, ____ nas.',
    en: 'If you do not know the way, call us.',
    opts: ['nazovite', 'nazovi', 'nazvati', 'nazovu'],
    answer: 'nazovite',
    tip: 'Znate is the vi form, so the order matches it: nazovite. Nazovi speaks to one person addressed as ti. Nazvati is an infinitive, and nazovu is "they call".',
  },
  {
    mode: 'glavna',
    q: 'Ako budem imala vremena, ____',
    en: 'If I have time, I will come for coffee.',
    opts: ['doći ću na kavu.', 'ću doći na kavu.', 'budem došla na kavu.', 'doći na kavu.'],
    answer: 'doći ću na kavu.',
    tip: 'After the comma the main half starts fresh, and the short form ću cannot stand first, so the verb leads: doći ću. Budem došla is futur II, which stays in the ako-half, and doći alone is an infinitive with no helping verb.',
  },

  // ── akokad ────────────────────────────────────────────────────────────────
  {
    mode: 'akokad',
    lead: 'Kad dođeš, vidimo se.',
    q: 'Što govornik misli o tvojem dolasku?',
    opts: [
      'He is sure you will come.',
      'He doubts you will come.',
      'He knows you will not come.',
      'He wishes you had come.',
    ],
    answer: 'He is sure you will come.',
    tip: 'Kad treats the event as certain: when you come. Doubt is the job of ako. Nothing in the sentence is negated, and a wish about the past would need the conditional.',
  },
  {
    mode: 'akokad',
    q: 'Nisam siguran hoću li stići. ____ stignem, javit ću ti.',
    en: 'I am not sure I will make it. If I do, I will let you know.',
    opts: ['Ako', 'Kad', 'Čim', 'Dok'],
    answer: 'Ako',
    tip: 'The speaker is not sure, so the word is ako: it leaves the outcome open. Kad and čim treat the arrival as certain. Dok means "while" and does not go with the svršeni stignem.',
  },
  {
    mode: 'akokad',
    q: '____ pada kiša, ceste su skliske. To je uvijek tako.',
    en: 'Whenever it rains, the roads are slippery. That is always the case.',
    opts: ['Kad', 'Osim ako', 'Dok ne', 'Prije nego što'],
    answer: 'Kad',
    tip: 'With a general truth kad means "whenever". Osim ako means "unless" and would deny the link. Dok ne means "until", and prije nego što would put the slippery roads before the rain.',
  },
  {
    mode: 'akokad',
    q: 'Doći ću na izlet, ____ budem morala raditi.',
    en: 'I will come on the trip unless I have to work.',
    opts: ['osim ako', 'ako', 'kad', 'čim'],
    answer: 'osim ako',
    tip: 'Osim ako means "unless": the one case in which the plan fails. Plain ako would say she comes only if she has to work. Kad and čim would make the work certain and tie the trip to it.',
  },
  {
    mode: 'akokad',
    q: 'Ponesi kišobran u slučaju ____ pada kiša.',
    en: 'Take an umbrella in case it rains.',
    opts: ['da', 'ako', 'što', 'kad'],
    answer: 'da',
    tip: 'Before a clause the phrase is u slučaju da. Ako, što and kad do not combine with u slučaju; ako and kad would stand on their own, without it.',
  },
  {
    mode: 'akokad',
    q: 'U slučaju ____ ostajemo kod kuće.',
    en: 'In case of rain we stay home.',
    opts: ['kiše', 'kiša', 'kišu', 'da kiše'],
    answer: 'kiše',
    tip: 'Before a noun, u slučaju takes the genitive: u slučaju kiše. Kiša is the nominative and kišu the accusative. Da kiše mixes the two shapes: da needs a clause with a verb (u slučaju da pada kiša).',
  },
  {
    mode: 'akokad',
    q: 'Ako ____ stigneš na vrijeme, nazovi me.',
    en: 'If you do not make it on time, call me.',
    opts: ['ne', 'ni', 'nije', 'nemoj'],
    answer: 'ne',
    tip: 'To state a condition negatively, put ne before the verb: Ako ne stigneš. Ni is for listing ("neither… nor"). Nije is a verb of its own and cannot stand before stigneš, and nemoj is the negative order, which takes an infinitive.',
  },
  {
    mode: 'akokad',
    q: 'Koja rečenica govori o uvjetu koji se stvarno može ispuniti?',
    en: 'Which sentence is about a condition that may really be met?',
    opts: [
      'Ako budem imao novca, kupit ću auto.',
      'Da imam novca, kupio bih jahtu.',
      'Kad bih imao novca, kupio bih jahtu.',
      'Kad bih bio bogat, kupio bih jahtu.',
    ],
    answer: 'Ako budem imao novca, kupit ću auto.',
    tip: 'Ako + futur II and the ordinary future: it may well happen. Da imam and kad bih imao with kupio bih are the unreal pattern: the speaker has no money and is only imagining.',
  },
  {
    mode: 'akokad',
    lead: 'Ako budem pobijedio na izborima, smanjit ću poreze.',
    q: 'Što govornik kaže o pobjedi?',
    opts: [
      'It may or may not happen.',
      'It has already happened.',
      'It is impossible.',
      'It happens every year.',
    ],
    answer: 'It may or may not happen.',
    tip: 'Ako leaves the outcome open, and futur II places it in the future. A finished win would be in the past tense, an impossible one would use the conditional (Da pobijedim, smanjio bih…), and a repeated one would take kad and the present.',
  },
];
