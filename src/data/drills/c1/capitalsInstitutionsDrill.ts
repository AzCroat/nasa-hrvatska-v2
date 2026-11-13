// src/data/drills/c1/capitalsInstitutionsDrill.ts
//
// C1 CAPITALS IN NAMES — the drill for the `capitals-institutions` lesson.
//
// Per the current Hrvatski pravopis (Institut za hrvatski jezik i jezikoslovlje): in a name
// of several words only the first word takes a capital, plus any word that is a name in its
// own right. Titles (kralja, bana) and common nouns (grada, ulica, rat) are lower case. The
// name keeps its capital in every case form. With no particular thing named, no capital.
//
// Every distractor is a spelling no current handbook gives for the name in question.
//
// Three modes:
//   ulice     — streets and squares
//   ustanove  — buildings, institutions, organisations
//   dogadaji  — historical events, and why a word is lower case

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CAPITALS_INSTITUTIONS_MODE_LABELS: Record<string, string> = {
  ulice: '🛣️ Ulice i trgovi',
  ustanove: '🏛️ Ustanove',
  dogadaji: '📜 Događaji',
};

const Q = 'Kako se pravilno piše?';
const EN = 'Which spelling is correct?';

export const CAPITALS_INSTITUTIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── ulice ─────────────────────────────────────────────────────────────────
  {
    mode: 'ulice',
    q: Q,
    en: EN,
    opts: [
      'Ulica kralja Zvonimira',
      'Ulica Kralja Zvonimira',
      'ulica kralja zvonimira',
      'Ulica kralja zvonimira',
    ],
    answer: 'Ulica kralja Zvonimira',
    tip: 'First word capital; kralja is a title; Zvonimira a name.',
  },
  {
    mode: 'ulice',
    q: Q,
    en: EN,
    opts: [
      'Trg bana Josipa Jelačića',
      'Trg Bana Josipa Jelačića',
      'trg bana Josipa Jelačića',
      'Trg bana josipa Jelačića',
    ],
    answer: 'Trg bana Josipa Jelačića',
    tip: 'bana is a title: lower case. The personal name keeps its capitals.',
  },
  {
    mode: 'ulice',
    q: Q,
    en: EN,
    opts: [
      'Ulica Ivana Gundulića',
      'Ulica ivana Gundulića',
      'ulica Ivana gundulića',
      'Ulica Ivana gundulića',
    ],
    answer: 'Ulica Ivana Gundulića',
    tip: 'First word, then a personal name.',
  },
  {
    mode: 'ulice',
    q: Q,
    en: EN,
    opts: [
      'Ulica grada Vukovara',
      'Ulica Grada Vukovara',
      'Ulica grada vukovara',
      'ulica Grada Vukovara',
    ],
    answer: 'Ulica grada Vukovara',
    tip: 'grada is a common noun: lower case. Vukovara is a place name.',
  },
  {
    mode: 'ulice',
    q: Q,
    en: EN,
    opts: ['Gundulićeva ulica', 'Gundulićeva Ulica', 'gundulićeva ulica', 'Gundulićeva ULICA'],
    answer: 'Gundulićeva ulica',
    tip: 'The possessive adjective is the first word; ulica is lower case.',
  },
  {
    mode: 'ulice',
    q: Q,
    en: EN,
    opts: [
      'Trg kralja Tomislava',
      'Trg Kralja Tomislava',
      'trg kralja Tomislava',
      'Trg kralja tomislava',
    ],
    answer: 'Trg kralja Tomislava',
    tip: 'First word capital, title lower case, name capital.',
  },
  {
    mode: 'ulice',
    q: Q,
    en: EN,
    opts: ['Markov trg', 'Markov Trg', 'markov trg', 'MARKOV trg'],
    answer: 'Markov trg',
    tip: 'Markov opens the name; trg is lower case.',
  },
  {
    mode: 'ulice',
    q: 'Stanujem u ____ Ivana Gundulića.',
    en: 'I live in Ivan Gundulić Street.',
    opts: ['Ulici', 'ulici', 'Ulica', 'Ulicu'],
    answer: 'Ulici',
    tip: 'Locative after u, and the first word of the name keeps its capital in every case.',
  },

  // ── ustanove ──────────────────────────────────────────────────────────────
  {
    mode: 'ustanove',
    q: Q,
    en: EN,
    opts: [
      'Hrvatsko narodno kazalište',
      'Hrvatsko Narodno Kazalište',
      'hrvatsko narodno kazalište',
      'Hrvatsko narodno Kazalište',
    ],
    answer: 'Hrvatsko narodno kazalište',
    tip: 'Only the first word of the name.',
  },
  {
    mode: 'ustanove',
    q: Q,
    en: EN,
    opts: [
      'Sveučilište u Zagrebu',
      'Sveučilište U Zagrebu',
      'sveučilište u Zagrebu',
      'Sveučilište u zagrebu',
    ],
    answer: 'Sveučilište u Zagrebu',
    tip: 'First word, then the place name; u is lower case.',
  },
  {
    mode: 'ustanove',
    q: Q,
    en: EN,
    opts: ['Hrvatski sabor', 'Hrvatski Sabor', 'hrvatski Sabor', 'HRVATSKI sabor'],
    answer: 'Hrvatski sabor',
    tip: 'Only the first word: Hrvatski sabor.',
  },
  {
    mode: 'ustanove',
    q: Q,
    en: EN,
    opts: [
      'Vlada Republike Hrvatske',
      'Vlada republike Hrvatske',
      'Vlada Republike hrvatske',
      'vlada Republike Hrvatske',
    ],
    answer: 'Vlada Republike Hrvatske',
    tip: 'Republika Hrvatska is itself a name, so it keeps both capitals.',
  },
  {
    mode: 'ustanove',
    q: Q,
    en: EN,
    opts: ['Matica hrvatska', 'Matica Hrvatska', 'matica hrvatska', 'matica Hrvatska'],
    answer: 'Matica hrvatska',
    tip: 'hrvatska is the second word and not a name: lower case.',
  },
  {
    mode: 'ustanove',
    q: Q,
    en: EN,
    opts: [
      'Hrvatska akademija znanosti i umjetnosti',
      'Hrvatska Akademija Znanosti i Umjetnosti',
      'hrvatska akademija znanosti i umjetnosti',
      'Hrvatska akademija Znanosti i umjetnosti',
    ],
    answer: 'Hrvatska akademija znanosti i umjetnosti',
    tip: 'Nothing after the first word is a name.',
  },
  {
    mode: 'ustanove',
    q: Q,
    en: EN,
    opts: [
      'Filozofski fakultet Sveučilišta u Zagrebu',
      'Filozofski Fakultet Sveučilišta u Zagrebu',
      'Filozofski fakultet sveučilišta u zagrebu',
      'filozofski fakultet Sveučilišta u Zagrebu',
    ],
    answer: 'Filozofski fakultet Sveučilišta u Zagrebu',
    tip: 'A name nested inside a name keeps its first capital: Sveučilišta u Zagrebu.',
  },
  {
    mode: 'ustanove',
    q: 'Večeras idemo u ____.',
    en: 'Tonight we are going to the theatre.',
    opts: ['kazalište', 'Kazalište', 'KAZALIŠTE', 'Kazaliste'],
    answer: 'kazalište',
    tip: 'No particular theatre is named: lower case.',
  },

  // ── dogadaji ──────────────────────────────────────────────────────────────
  {
    mode: 'dogadaji',
    q: Q,
    en: EN,
    opts: ['Domovinski rat', 'Domovinski Rat', 'domovinski Rat', 'DOMOVINSKI rat'],
    answer: 'Domovinski rat',
    tip: 'An event: only the first word.',
  },
  {
    mode: 'dogadaji',
    q: Q,
    en: EN,
    opts: ['Drugi svjetski rat', 'Drugi Svjetski Rat', 'Drugi Svjetski rat', 'drugi Svjetski rat'],
    answer: 'Drugi svjetski rat',
    tip: 'Only the first word of the event.',
  },
  {
    mode: 'dogadaji',
    q: Q,
    en: EN,
    opts: ['Prvi svjetski rat', 'Prvi Svjetski Rat', 'prvi Svjetski Rat', 'Prvi svjetski Rat'],
    answer: 'Prvi svjetski rat',
    tip: 'Only the first word of the event.',
  },
  {
    mode: 'dogadaji',
    q: Q,
    en: EN,
    opts: ['Hrvatsko proljeće', 'Hrvatsko Proljeće', 'hrvatsko Proljeće', 'HRVATSKO proljeće'],
    answer: 'Hrvatsko proljeće',
    tip: 'The events of 1971: only the first word.',
  },
  {
    mode: 'dogadaji',
    q: Q,
    en: EN,
    opts: [
      'Francuska revolucija',
      'Francuska Revolucija',
      'francuska Revolucija',
      'FRANCUSKA revolucija',
    ],
    answer: 'Francuska revolucija',
    tip: 'Only the first word of the event.',
  },
  {
    mode: 'dogadaji',
    q: 'Djed je sudjelovao u ____ ratu.',
    en: 'Grandfather took part in the Homeland War.',
    opts: ['Domovinskom', 'domovinskom', 'Domovinski', 'Domovinskog'],
    answer: 'Domovinskom',
    tip: 'Locative after u, and the first word of the name keeps its capital.',
  },
  {
    mode: 'dogadaji',
    q: 'Zašto se "svjetski" u imenu "Drugi svjetski rat" piše malim slovom?',
    opts: ['nije prva riječ i nije ime', 'to je pridjev', 'to je strana riječ', 'zbog navike'],
    answer: 'nije prva riječ i nije ime',
    tip: 'Only the first word and real names take capitals. (Drugi is an adjective too.)',
  },
  {
    mode: 'dogadaji',
    q: 'Zašto se "kralja" u imenu "Ulica kralja Zvonimira" piše malim slovom?',
    opts: ['to je titula, a ne ime', 'to je glagol', 'to je kratica', 'to je prva riječ'],
    answer: 'to je titula, a ne ime',
    tip: 'Titles inside a name are lower case.',
  },
];
