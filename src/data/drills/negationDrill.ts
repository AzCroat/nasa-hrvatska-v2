// src/data/drills/negationDrill.ts
//
// A1 NEGATION — the drill for the `negation` lesson (practice programme, A1
// tranche 2, 2026-08-29).
//
// NOT the same thing as the existing `negation` screen, which is A2 and drills
// the GENITIVE OF NEGATION (nemam vremena). This is the A1 lesson's ground: how
// you say "not" at all.
//
// Three modes:
//   ne        — ne is a separate word before the verb, and the four fused verbs
//   fuzija    — nisam / neću / nemam / nemoj, the only four that join
//   dvostruka — Croatian REQUIRES the double negative, which is the rule an
//               English speaker breaks first and most often

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const NEGATION_MODE_LABELS: Record<string, string> = {
  ne: '🚫 Ne + glagol',
  fuzija: '🔗 Spojeni oblici',
  dvostruka: '➖➖ Dvostruka negacija',
};

export const NEGATION_DRILL_DATA: ModeDrillItem[] = [
  // ── ne: the particle stands apart ─────────────────────────────────────────
  {
    mode: 'ne',
    q: '____ razumijem.',
    en: 'I do not understand.',
    opts: ['Ne', 'Ni', 'Nije', 'Nema'],
    answer: 'Ne',
    tip: 'Ne is a separate word standing before the verb: ne razumijem.',
  },
  {
    mode: 'ne',
    q: 'Ona ____ govori engleski.',
    en: 'She does not speak English.',
    opts: ['ne', 'nije', 'nema', 'ni'],
    answer: 'ne',
    tip: 'For a full verb you always use ne. Nije is the negated form of je (is).',
  },
  {
    mode: 'ne',
    q: 'Kako se piše "I do not know"?',
    en: 'How is "I do not know" written?',
    opts: ['ne znam', 'neznam', 'ne-znam', 'nezn am'],
    answer: 'ne znam',
    tip: 'Written APART. Only nisam, neću, nemam and nemoj are joined.',
  },
  {
    mode: 'ne',
    q: 'Mi ____ radimo subotom.',
    en: 'We do not work on Saturdays.',
    opts: ['ne', 'nismo', 'nemamo', 'nije'],
    answer: 'ne',
    tip: 'Radimo is a full verb in the present, so it takes ne.',
  },
  {
    mode: 'ne',
    q: 'To ____ istina.',
    en: 'That is not true.',
    opts: ['nije', 'ne', 'nema', 'nisu'],
    answer: 'nije',
    tip: 'Biti negates as a fused form: je → nije.',
  },
  {
    mode: 'ne',
    q: 'Oni ____ kod kuće.',
    en: 'They are not at home.',
    opts: ['nisu', 'ne su', 'nije', 'nemaju'],
    answer: 'nisu',
    tip: 'Su → nisu. "Ne su" does not exist — biti always fuses.',
  },
  {
    mode: 'ne',
    q: 'Zašto ____ dolaziš?',
    en: 'Why are you not coming?',
    opts: ['ne', 'nisi', 'nemaš', 'nije'],
    answer: 'ne',
    tip: 'Dolaziš is a full verb: ne dolaziš.',
  },
  {
    mode: 'ne',
    q: 'Ja ____ student.',
    en: 'I am not a student.',
    opts: ['nisam', 'ne sam', 'nemam', 'ne'],
    answer: 'nisam',
    tip: 'Sam → nisam, one word.',
  },

  // ── fuzija: the four that join ────────────────────────────────────────────
  {
    mode: 'fuzija',
    q: '____ vremena. (imati)',
    en: 'I do not have time.',
    opts: ['Nemam', 'Ne imam', 'Nisam', 'Neću'],
    answer: 'Nemam',
    tip: 'Imati fuses: imam → nemam. And note the genitive, vremena.',
  },
  {
    mode: 'fuzija',
    q: '____ doći sutra. (htjeti)',
    en: 'I will not come tomorrow.',
    opts: ['Neću', 'Ne ću', 'Nisam', 'Nemam'],
    answer: 'Neću',
    tip: 'Htjeti fuses: hoću → neću. Written together in the modern standard.',
  },
  {
    mode: 'fuzija',
    q: '____ zaboraviti ključeve!',
    en: 'Do not forget the keys!',
    opts: ['Nemoj', 'Ne moj', 'Ne', 'Nemam'],
    answer: 'Nemoj',
    tip: 'Nemoj + infinitive is the softest way to tell someone not to do something.',
  },
  {
    mode: 'fuzija',
    q: 'Ona ____ auto.',
    en: 'She does not have a car.',
    opts: ['nema', 'ne ima', 'nije', 'neće'],
    answer: 'nema',
    tip: 'Ima → nema.',
  },
  {
    mode: 'fuzija',
    q: 'Mi ____ ići u kino.',
    en: 'We will not go to the cinema.',
    opts: ['nećemo', 'ne ćemo', 'nemamo', 'nismo'],
    answer: 'nećemo',
    tip: 'Hoćemo → nećemo.',
  },
  {
    mode: 'fuzija',
    q: 'Vi ____ u pravu.',
    en: 'You are not right.',
    opts: ['niste', 'ne ste', 'nemate', 'nećete'],
    answer: 'niste',
    tip: 'Ste → niste.',
  },
  {
    mode: 'fuzija',
    q: 'Koji oblik NE postoji?',
    en: 'Which form does NOT exist?',
    opts: ['ne znam', 'nisam', 'nemam', 'neću'],
    answer: 'ne znam',
    tip: 'Trick: ne znam is correct — but written APART, so it is not one of the fused forms.',
  },
  {
    mode: 'fuzija',
    q: 'On ____ brata.',
    en: 'He does not have a brother.',
    opts: ['nema', 'ne ima', 'nije', 'ne'],
    answer: 'nema',
    tip: 'Imati fuses, and the object goes to the genitive: nema brata.',
  },

  // ── dvostruka: Croatian requires the double negative ──────────────────────
  {
    mode: 'dvostruka',
    q: 'Nitko ____ došao.',
    en: 'Nobody came.',
    opts: ['nije', 'je', 'ne', 'nema'],
    answer: 'nije',
    tip: 'Nitko ALREADY means nobody, and Croatian still requires nije. Both negatives stay.',
  },
  {
    mode: 'dvostruka',
    q: 'Ništa ____ razumijem.',
    en: 'I understand nothing.',
    opts: ['ne', 'nije', 'nemam', '—'],
    answer: 'ne',
    tip: 'Ništa + ne razumijem. English drops the second negative; Croatian never does.',
  },
  {
    mode: 'dvostruka',
    q: 'Nikad ____ bio u Splitu.',
    en: 'I have never been to Split.',
    opts: ['nisam', 'sam', 'ne', 'nemam'],
    answer: 'nisam',
    tip: 'Nikad nisam bio — two negatives, both obligatory.',
  },
  {
    mode: 'dvostruka',
    q: 'Nigdje ga ____ vidjela.',
    en: 'She did not see him anywhere.',
    opts: ['nije', 'je', 'ne', 'nema'],
    answer: 'nije',
    tip: 'Nigdje + nije. The pattern holds for every ni- word.',
  },
  {
    mode: 'dvostruka',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct?',
    opts: [
      'Nitko nije ništa rekao.',
      'Nitko je ništa rekao.',
      'Nitko nije nešto rekao.',
      'Netko nije ništa rekao.',
    ],
    answer: 'Nitko nije ništa rekao.',
    tip: 'Three negatives in one clause is normal Croatian: nitko, nije, ništa.',
  },
  {
    mode: 'dvostruka',
    q: 'Nikoga ____ poznajem ovdje.',
    en: 'I do not know anyone here.',
    opts: ['ne', 'nije', 'nemam', 'ni'],
    answer: 'ne',
    tip: 'Nikoga is the accusative of nitko, and ne still has to be there.',
  },
  {
    mode: 'dvostruka',
    q: 'On ____ ništa ne radi.',
    en: 'He does nothing at all. (emphatic)',
    opts: ['baš', 'nije', 'nema', 'neće'],
    answer: 'baš',
    tip: 'Baš intensifies. The negation itself is already carried by ništa + ne radi.',
  },
  {
    mode: 'dvostruka',
    q: 'Nikada ____ kasnimo.',
    en: 'We are never late.',
    opts: ['ne', 'nismo', 'nemamo', 'nije'],
    answer: 'ne',
    tip: 'Kasnimo is a full verb, so ne — nikada ne kasnimo.',
  },
];
