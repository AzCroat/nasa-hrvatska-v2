// src/data/drills/a1/instrumentalMeansDrill.ts
//
// A1 INSTRUMENTAL OF MEANS — the drill for the `instrumental-means` lesson.
//
// The instrumental with NO preposition says what you use: idem vlakom, pišem
// olovkom, plaćam karticom. With s it says who you are with: s bratom. The ending
// is -om, except after a soft consonant (j, č, ć, š, ž, lj, nj, c, đ, dž), where it
// is -em: tramvajem, nožem, ključem.
//
// No item offers "s autom" or "s olovkom" as a wrong answer: it is heard in casual
// speech, and a distractor must be wrong, not merely informal. The lesson says the
// standard form in prose; the drill tests the case form.
//
// Three modes:
//   prijevoz — how you travel
//   alat     — what you use: writing, eating, paying, opening
//   nastavak — -om or -em, and means against company

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INSTRUMENTAL_MEANS_MODE_LABELS: Record<string, string> = {
  prijevoz: '🚆 Prijevoz',
  alat: '✏️ Čime?',
  nastavak: '🔤 -om ili -em',
};

export const INSTRUMENTAL_MEANS_DRILL_DATA: ModeDrillItem[] = [
  // ── prijevoz ──────────────────────────────────────────────────────────────
  {
    mode: 'prijevoz',
    q: 'Putujem u Split ____.',
    en: 'I am travelling to Split by train.',
    opts: ['vlak', 'vlakom', 'vlaku', 'vlakem'],
    answer: 'vlakom',
    tip: 'The means of travel: instrumental. K is not soft, so -om.',
  },
  {
    mode: 'prijevoz',
    q: 'Idem na posao ____.',
    en: 'I go to work by tram.',
    opts: ['tramvajom', 'tramvaj', 'tramvajem', 'tramvaju'],
    answer: 'tramvajem',
    tip: 'J is soft, so the ending is -em.',
  },
  {
    mode: 'prijevoz',
    q: 'Ana ide u školu ____.',
    en: 'Ana goes to school by bike.',
    opts: ['bicikl', 'biciklu', 'biciklem', 'biciklom'],
    answer: 'biciklom',
    tip: 'L is not soft: -om.',
  },
  {
    mode: 'prijevoz',
    q: 'Na Hvar idemo ____.',
    en: 'We are going to Hvar by boat.',
    opts: ['brodom', 'brod', 'brodu', 'brodem'],
    answer: 'brodom',
    tip: 'Brod is masculine, d is not soft: brodom.',
  },
  {
    mode: 'prijevoz',
    q: 'U London putujem ____.',
    en: 'I travel to London by plane.',
    opts: ['avion', 'avionu', 'avionom', 'avionem'],
    answer: 'avionom',
    tip: 'N on its own is not soft (only nj is): avionom.',
  },
  {
    mode: 'prijevoz',
    q: 'Kako ideš na fakultet? — ____.',
    en: 'How do you get to the faculty? — By bus.',
    opts: ['Autobus', 'Autobusom', 'Autobusu', 'Autobusem'],
    answer: 'Autobusom',
    tip: 'The answer to "how" is the instrumental on its own.',
  },
  {
    mode: 'prijevoz',
    q: 'Idemo na aerodrom ____.',
    en: 'We are going to the airport by taxi.',
    opts: ['taksiom', 'taksijem', 'taksi', 'taksiju'],
    answer: 'taksijem',
    tip: 'Taksi adds j, and after j the ending is -em.',
  },
  {
    mode: 'prijevoz',
    q: 'Ne idem autom, idem ____.',
    en: 'I am not going by car, I am going on foot.',
    opts: ['nogom', 'pješice', 'nogama', 'pješicom'],
    answer: 'pješice',
    tip: 'On foot has its own word, with no instrumental.',
  },

  // ── alat ──────────────────────────────────────────────────────────────────
  {
    mode: 'alat',
    q: 'Pišem pismo ____.',
    en: 'I am writing a letter with a pencil.',
    opts: ['olovku', 'olovka', 'olovkom', 'olovki'],
    answer: 'olovkom',
    tip: 'Feminine -a → -om in the instrumental.',
  },
  {
    mode: 'alat',
    q: 'Jedem juhu ____.',
    en: 'I eat soup with a spoon.',
    opts: ['žlicom', 'žlicu', 'žlica', 'žlici'],
    answer: 'žlicom',
    tip: 'The tool: instrumental, -a → -om.',
  },
  {
    mode: 'alat',
    q: 'Režem kruh ____.',
    en: 'I cut bread with a knife.',
    opts: ['nožom', 'nož', 'nožem', 'nožu'],
    answer: 'nožem',
    tip: 'Ž is soft, so -em.',
  },
  {
    mode: 'alat',
    q: 'Mogu li platiti ____?',
    en: 'Can I pay by card?',
    opts: ['karticu', 'kartica', 'kartici', 'karticom'],
    answer: 'karticom',
    tip: 'How you pay: the bare instrumental.',
  },
  {
    mode: 'alat',
    q: 'Plaćam ____.',
    en: 'I am paying in cash.',
    opts: ['gotovinom', 'gotovinu', 'gotovina', 'gotovini'],
    answer: 'gotovinom',
    tip: 'gotovina → gotovinom.',
  },
  {
    mode: 'alat',
    q: 'Otvaram vrata ____.',
    en: 'I open the door with a key.',
    opts: ['ključom', 'ključem', 'ključ', 'ključu'],
    answer: 'ključem',
    tip: 'Č is soft, so -em.',
  },
  {
    mode: 'alat',
    q: 'Jedem salatu ____.',
    en: 'I eat salad with a fork.',
    opts: ['vilicu', 'vilica', 'vilicom', 'vilici'],
    answer: 'vilicom',
    tip: 'vilica — fork: -a → -om.',
  },
  {
    mode: 'alat',
    q: '____ pišeš? — Olovkom.',
    en: 'What are you writing with? — With a pencil.',
    opts: ['Što', 'Čime', 'Kome', 'Gdje'],
    answer: 'Čime',
    tip: 'Čime asks for the instrument.',
  },

  // ── nastavak ──────────────────────────────────────────────────────────────
  {
    mode: 'nastavak',
    q: 'Koji je instrumental od "tramvaj"?',
    en: 'What is the instrumental of the word for tram?',
    opts: ['tramvajom', 'tramvajem', 'tramvajim', 'tramvaju'],
    answer: 'tramvajem',
    tip: 'After the soft j: -em.',
  },
  {
    mode: 'nastavak',
    q: 'Koji je instrumental od "autobus"?',
    en: 'What is the instrumental of the word for bus?',
    opts: ['autobusem', 'autobusu', 'autobusom', 'autobusa'],
    answer: 'autobusom',
    tip: 'S is not soft (š is): -om.',
  },
  {
    mode: 'nastavak',
    q: 'Koji je instrumental od "auto"?',
    en: 'What is the instrumental of the word for car?',
    opts: ['autem', 'autom', 'autu', 'autima'],
    answer: 'autom',
    tip: 'auto → autom.',
  },
  {
    mode: 'nastavak',
    q: 'Koji je instrumental od "nož"?',
    en: 'What is the instrumental of the word for knife?',
    opts: ['nožom', 'nožu', 'noža', 'nožem'],
    answer: 'nožem',
    tip: 'Ž is soft: -em.',
  },
  {
    mode: 'nastavak',
    q: 'Idem u kino ____.',
    en: 'I am going to the cinema with my brother.',
    opts: ['bratom', 's bratom', 'brata', 'bratu'],
    answer: 's bratom',
    tip: 'Company needs s; the bare instrumental would make your brother a vehicle.',
  },
  {
    mode: 'nastavak',
    q: 'Idem u kino ____.',
    en: 'I am going to the cinema by car.',
    opts: ['auto', 'autu', 'autom', 'auta'],
    answer: 'autom',
    tip: 'The means: bare instrumental.',
  },
  {
    mode: 'nastavak',
    q: 'Which sentence is about COMPANY?',
    en: 'Which one says who you are with?',
    opts: ['Idem vlakom.', 'Pišem olovkom.', 'Plaćam karticom.', 'Idem s prijateljem.'],
    answer: 'Idem s prijateljem.',
    tip: 's + instrumental = together with someone.',
  },
  {
    mode: 'nastavak',
    q: 'Koji je instrumental od "olovka"?',
    en: 'What is the instrumental of the word for pencil?',
    opts: ['olovkem', 'olovkom', 'olovku', 'olovki'],
    answer: 'olovkom',
    tip: 'Feminine -a → -om, always.',
  },
];
