// src/data/drills/declensionExceptionsDrill.ts
//
// C2 SKLONIDBA — IZNIMKE — the drill for the `sklonidba-iznimke` lesson.
//
// FOREIGN NAMES DECLINE, and leaving them uninflected is an error rather than a
// style: *knjiga o Shakespeareu*, not *o Shakespeare*. The written form is kept
// and the ending is added after it, with a linking *-j-* where the name ends in
// *-y* (*Kennedyja*). The one systematic exception is a WOMAN'S surname ending
// in a consonant, which does not decline — *o Angeli Merkel*, first name only.
//
// The suppletive and collective plurals are the other half: *čovjek/ljudi*,
// *dijete/djeca*, *brat/braća* — and *djeca* and *braća* take FEMININE SINGULAR
// agreement, so *djeca je došla*.
//
// And two nouns carry two plurals with two meanings. *Sati* are hours,
// *satovi* are clocks and lessons; *godine* are years and *godišta* are
// year-groups. Choosing the wrong one is not a case error, it is a different
// word.
//
// Three modes:
//   imena     — declining foreign names
//   supletivi — čovjek/ljudi, dijete/djeca and their agreement
//   dvamnozine — two plurals, two meanings

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const DECLENSION_EXCEPTIONS_MODE_LABELS: Record<string, string> = {
  imena: '🌐 Strana imena',
  supletivi: '👥 Supletivne množine',
  dvamnozine: '🔀 Dvije množine',
};

export const DECLENSION_EXCEPTIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── imena ─────────────────────────────────────────────────────────────────
  {
    mode: 'imena',
    q: 'Knjiga o ____. (Shakespeare)',
    en: 'a book about Shakespeare',
    opts: ['Shakespeareu', 'Shakespeare', 'Shakespearu', 'Shakespeareju'],
    answer: 'Shakespeareu',
    tip: 'The written form is kept whole and the ending added after it.',
  },
  {
    mode: 'imena',
    q: 'Govorimo o ____. (Kennedy)',
    en: 'We are talking about Kennedy.',
    opts: ['Kennedyju', 'Kennedyu', 'Kennedy', 'Kennediju'],
    answer: 'Kennedyju',
    tip: 'A final -y takes a linking -j- before the ending.',
  },
  {
    mode: 'imena',
    q: 'Vidio sam ____. (Macron)',
    en: 'I saw Macron.',
    opts: ['Macrona', 'Macron', 'Macronu', 'Macronom'],
    answer: 'Macrona',
    tip: 'A consonant-final name declines like any masculine.',
  },
  {
    mode: 'imena',
    q: 'Roman ____. (Zola)',
    en: 'a novel by Zola',
    opts: ['Zole', 'Zola', 'Zolu', 'Zolaa'],
    answer: 'Zole',
    tip: 'A final -a declines like a feminine, whoever bears the name.',
  },
  {
    mode: 'imena',
    q: 'Razgovarali smo o Angeli ____. (Merkel)',
    en: 'We talked about Angela Merkel.',
    opts: ['Merkel', 'Merkelovoj', 'Merkeli', 'Merkelu'],
    answer: 'Merkel',
    tip: 'A woman consonant-final surname does not decline. Only the first name does.',
  },
  {
    mode: 'imena',
    q: 'Je li ostavljanje stranog imena nesklonjivim stilski izbor?',
    en: 'Is leaving it uninflected a style choice?',
    opts: ['ne, pogreška je', 'da', 'ovisi o jeziku', 'samo u novinama'],
    answer: 'ne, pogreška je',
    tip: 'The lesson is explicit: it is an error, not a preference.',
  },
  {
    mode: 'imena',
    q: 'Djela ____. (Hugo)',
    en: 'the works of Hugo',
    opts: ['Hugoa', 'Huga', 'Hugo', 'Hugua'],
    answer: 'Hugoa',
    tip: 'A final -o after a vowel keeps the o and adds the ending.',
  },
  {
    mode: 'imena',
    q: 'Putujem u ____. (London)',
    en: 'I am travelling to London.',
    opts: ['London', 'Londonu', 'Londona', 'Londonom'],
    answer: 'London',
    tip: 'Accusative for motion; u Londonu once you are there.',
  },

  // ── supletivi ─────────────────────────────────────────────────────────────
  {
    mode: 'supletivi',
    q: 'Množina od "čovjek" je ____.',
    en: 'plural of čovjek',
    opts: ['ljudi', 'čovjeci', 'čovjekovi', 'čovječi'],
    answer: 'ljudi',
    tip: 'Suppletive — a different root entirely.',
  },
  {
    mode: 'supletivi',
    q: 'Djeca ____ došla.',
    en: 'The children came.',
    opts: ['su', 'je', 'jesu', 'će'],
    answer: 'su',
    tip: 'Djeca takes plural agreement in the perfect: djeca su došla.',
  },
  {
    mode: 'supletivi',
    q: 'Kojeg je roda "djeca" u slaganju?',
    en: 'What gender does djeca agree as?',
    opts: ['ženskog jednine', 'srednjeg množine', 'muškog množine', 'srednjeg jednine'],
    answer: 'ženskog jednine',
    tip: 'A collective: ova djeca, and the participle follows the collective pattern.',
  },
  {
    mode: 'supletivi',
    q: 'Množina od "brat" je ____.',
    en: 'plural of brat',
    opts: ['braća', 'brati', 'bratovi', 'bratja'],
    answer: 'braća',
    tip: 'Another collective, with the same agreement behaviour as djeca.',
  },
  {
    mode: 'supletivi',
    q: 'Genitiv od "pas" je ____.',
    en: 'genitive of pas',
    opts: ['psa', 'pasa', 'pasu', 'pas'],
    answer: 'psa',
    tip: 'The fleeting a disappears: pas → psa, psu, psom.',
  },
  {
    mode: 'supletivi',
    q: 'Množina od "oko" (dio tijela) je ____.',
    en: 'plural of oko',
    opts: ['oči', 'oka', 'okovi', 'okna'],
    answer: 'oči',
    tip: 'The body-part pairs kept the old dual, and they became feminine.',
  },
  {
    mode: 'supletivi',
    q: 'Kojeg su roda "oči" i "uši"?',
    en: 'What gender are they?',
    opts: ['ženskog', 'srednjeg', 'muškog', 'nemaju rod'],
    answer: 'ženskog',
    tip: 'Lijepe oči, ne lijepa oka — the dual carried the gender with it.',
  },
  {
    mode: 'supletivi',
    q: 'Množina od "dijete" je ____.',
    en: 'plural of dijete',
    opts: ['djeca', 'djeteta', 'dijeteta', 'djetići'],
    answer: 'djeca',
    tip: 'And the jat shortens on the way: dijete → djeca.',
  },

  // ── dvamnozine ────────────────────────────────────────────────────────────
  {
    mode: 'dvamnozine',
    q: 'Čekao sam dva ____. (hours)',
    en: 'I waited two hours.',
    opts: ['sata', 'satova', 'sati', 'satove'],
    answer: 'sata',
    tip: 'Two, three and four take the genitive singular: dva sata.',
  },
  {
    mode: 'dvamnozine',
    q: 'Čekao sam pet ____. (hours)',
    en: 'I waited five hours.',
    opts: ['sati', 'sata', 'satova', 'satove'],
    answer: 'sati',
    tip: 'Five and above take the genitive plural — and for hours that is sati.',
  },
  {
    mode: 'dvamnozine',
    q: 'Na zidu su dva ____. (clocks)',
    en: 'There are two clocks on the wall.',
    opts: ['sata', 'sati', 'satovi', 'satove'],
    answer: 'sata',
    tip: 'Same paucal form — but the plural for clocks and lessons is satovi.',
  },
  {
    mode: 'dvamnozine',
    q: 'Koja je množina za "clocks, lessons"?',
    en: 'Which plural means clocks or lessons?',
    opts: ['satovi', 'sati', 'sate', 'satima'],
    answer: 'satovi',
    tip: 'sati are hours; satovi are the objects and the school periods.',
  },
  {
    mode: 'dvamnozine',
    q: 'Imam tri ____ hrvatskoga tjedno. (lessons)',
    en: 'I have three Croatian lessons a week.',
    opts: ['sata', 'sati', 'satove', 'satovi'],
    answer: 'sata',
    tip: 'The paucal is shared; the difference shows from five upwards.',
  },
  {
    mode: 'dvamnozine',
    q: 'Zašto je izbor množine ovdje ozbiljan?',
    en: 'Why does the choice matter?',
    opts: [
      'nije padežna pogreška nego druga riječ',
      'zvuči nespretno',
      'mijenja registar',
      'nije važno',
    ],
    answer: 'nije padežna pogreška nego druga riječ',
    tip: 'You have not declined it wrongly; you have said something else.',
  },
  {
    mode: 'dvamnozine',
    q: 'Što znači "godišta" naspram "godine"?',
    en: 'godišta against godine:',
    opts: ['naraštaji ili berbe', 'razdoblja', 'stoljeća', 'isto je'],
    answer: 'naraštaji ili berbe',
    tip: 'Year-groups and vintages. Godine are the years themselves.',
  },
  {
    mode: 'dvamnozine',
    q: 'Kako se provjerava sklonidba mjesnog imena?',
    en: 'How do you handle a place name?',
    opts: ['provjeriti, ne pogađati', 'uvijek kao muški rod', 'ne sklanjati', 'po završetku'],
    answer: 'provjeriti, ne pogađati',
    tip: 'Place-name declension is a lookup problem, and the lesson says so.',
  },
];
