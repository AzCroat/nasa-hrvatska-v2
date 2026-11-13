// src/data/drills/b1/tellingStoryDrill.ts
//
// B1 telling a story — the drill for the `telling-a-story` lesson.
//
// Until 2026-11-13 this lesson was drilled by the mixed-case cloze bank, which has one
// past-tense item in 67 and nothing about narration (book-order audit, B1 report
// section 2). Everything here is what the lesson teaches, using grammar met before it:
// the past tense (A1/A2), aspect in the past (B1-6, B1-7), time clauses with kad, dok and
// čim (B1-10), and the lesson's own sequencing words and listener reactions.
//
// Three modes:
//   pozadina  — background (imperfective) against the event (perfective)
//   slijed    — the words that order and turn a story
//   slusatelj — opening a story and reacting to one

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TELLING_STORY_MODE_LABELS: Record<string, string> = {
  pozadina: '🎬 Pozadina i događaj',
  slijed: '➡️ Prvo, onda, odjednom',
  slusatelj: '👂 Početak i reakcije',
};

export const TELLING_STORY_DRILL_DATA: ModeDrillItem[] = [
  // ── pozadina ──────────────────────────────────────────────────────────────
  {
    mode: 'pozadina',
    q: 'Bilo je kasno i ____ je kiša.',
    en: 'It was late and it was raining.',
    opts: ['padala', 'pala', 'počela', 'prestala'],
    answer: 'padala',
    tip: 'The scene is background: the imperfective past.',
  },
  {
    mode: 'pozadina',
    q: 'Dok smo čekali trajekt, ____ je kiša.',
    en: 'While we were waiting for the ferry, it started to rain.',
    opts: ['počela', 'počinjala', 'počinje', 'počet će'],
    answer: 'počela',
    tip: 'dok sets the background; the event that cuts in is perfective.',
  },
  {
    mode: 'pozadina',
    q: 'Odjednom je ____ autobus i svi smo ušli.',
    en: 'Suddenly the bus arrived and we all got on.',
    opts: ['došao', 'dolazio', 'dolazi', 'doći'],
    answer: 'došao',
    tip: 'odjednom marks one event: perfective.',
  },
  {
    mode: 'pozadina',
    q: 'Sunce je ____, a djeca su se igrala na plaži.',
    en: 'The sun was shining and the children were playing on the beach.',
    opts: ['sjalo', 'zasjalo', 'sja', 'sjati'],
    answer: 'sjalo',
    tip: 'Setting the scene: imperfective throughout.',
  },
  {
    mode: 'pozadina',
    q: 'Dok sam ____ ulicom, netko je viknuo moje ime.',
    en: 'While I was walking down the street, somebody shouted my name.',
    opts: ['hodao', 'prohodao', 'hodam', 'hoda'],
    answer: 'hodao',
    tip: 'The ongoing background after dok: the imperfective past.',
  },
  {
    mode: 'pozadina',
    q: 'Čim smo ____ u hotel, otišli smo na plažu.',
    en: 'As soon as we arrived at the hotel, we went to the beach.',
    opts: ['stigli', 'stizali', 'stižemo', 'stići'],
    answer: 'stigli',
    tip: 'čim joins two events in a row, so both are perfective.',
  },
  {
    mode: 'pozadina',
    q: 'Kad smo došli na stanicu, autobus je već ____.',
    en: 'When we got to the station, the bus had already left.',
    opts: ['otišao', 'odlazio', 'ide', 'otići'],
    answer: 'otišao',
    tip: 'A completed departure: perfective past.',
  },
  {
    mode: 'pozadina',
    q: 'Which sentence sets the scene rather than telling an event?',
    en: 'Choose the background sentence.',
    opts: [
      'Magla je prekrivala cijelu dolinu.',
      'Odjednom je pao snijeg.',
      'U tom trenutku je zazvonio telefon.',
      'Na kraju smo se vratili kući.',
    ],
    answer: 'Magla je prekrivala cijelu dolinu.',
    tip: 'Background is something that was going on: the imperfective.',
  },

  // ── slijed ────────────────────────────────────────────────────────────────
  {
    mode: 'slijed',
    q: 'Prvo smo spakirali stvari, ____ smo krenuli na obalu.',
    en: 'First we packed our things, then we set off for the coast.',
    opts: ['onda', 'odjednom', 'međutim', 'na kraju'],
    answer: 'onda',
    tip: 'prvo… onda: the plain sequence.',
  },
  {
    mode: 'slijed',
    q: 'Hodali smo satima, a onda smo ____ čuli grmljavinu.',
    en: 'We walked for hours, and then all of a sudden we heard thunder.',
    opts: ['odjednom', 'prvo', 'zatim', 'nikad'],
    answer: 'odjednom',
    tip: 'The word that marks the turn in a story.',
  },
  {
    mode: 'slijed',
    q: 'Trajekt je trebao krenuti u osam. ____, nije došao.',
    en: 'The ferry was supposed to leave at eight. However, it did not come.',
    opts: ['Međutim', 'Prvo', 'Odjednom', 'Zatim'],
    answer: 'Međutim',
    tip: 'međutim introduces a contrast.',
  },
  {
    mode: 'slijed',
    q: '____ smo se ipak svi smijali.',
    en: 'In the end we all laughed after all.',
    opts: ['Na kraju', 'Prvo', 'Međutim', 'U tom trenutku'],
    answer: 'Na kraju',
    tip: 'na kraju closes a story.',
  },
  {
    mode: 'slijed',
    q: '____ trenutku je zazvonio telefon.',
    en: 'At that moment the phone rang.',
    opts: ['U tom', 'Na tom', 'Za taj', 'U taj'],
    answer: 'U tom',
    tip: 'u + the locative: u tom trenutku.',
  },
  {
    mode: 'slijed',
    q: 'Ručali smo u konobi. Nakon ____ smo otišli na kupanje.',
    en: 'We had lunch in a tavern. After that we went swimming.',
    opts: ['toga', 'to', 'tome', 'tim'],
    answer: 'toga',
    tip: 'nakon takes the genitive: nakon toga.',
  },
  {
    mode: 'slijed',
    q: 'Nikad ____ zaboraviti taj dan.',
    en: 'I will never forget that day.',
    opts: ['neću', 'ću', 'nisam', 'ne'],
    answer: 'neću',
    tip: 'After nikad the verb is negated too.',
  },
  {
    mode: 'slijed',
    q: 'Which word does NOT move a story forward in time?',
    en: 'Choose the odd one out.',
    opts: ['međutim', 'onda', 'zatim', 'nakon toga'],
    answer: 'međutim',
    tip: 'međutim is a contrast; the others are steps in a sequence.',
  },

  // ── slusatelj ─────────────────────────────────────────────────────────────
  {
    mode: 'slusatelj',
    q: 'Which phrase opens a story?',
    en: 'Choose the opener.',
    opts: ['Sjećam se kad…', 'Na kraju…', 'Međutim…', 'Nakon toga…'],
    answer: 'Sjećam se kad…',
    tip: 'Sjećam se kad… — I remember when…',
  },
  {
    mode: 'slusatelj',
    q: '____ godine smo bili na moru.',
    en: 'Last year we were at the seaside.',
    opts: ['Prošle', 'Prošla', 'Prošlog', 'Prošloj'],
    answer: 'Prošle',
    tip: 'A time phrase in the genitive, and godina is feminine.',
  },
  {
    mode: 'slusatelj',
    q: 'Which reaction asks the storyteller to go on?',
    en: 'Choose the reaction.',
    opts: ['I što onda?', 'Dobar tek!', 'Laku noć.', 'Nema na čemu.'],
    answer: 'I što onda?',
    tip: 'I što onda? — and then what?',
  },
  {
    mode: 'slusatelj',
    q: 'Your friend tells you something hard to believe. You say:',
    en: 'Choose the reaction.',
    opts: ['Ma daj!', 'Živjeli!', 'Sretan put!', 'Izvolite.'],
    answer: 'Ma daj!',
    tip: 'Ma daj! — no way!',
  },
  {
    mode: 'slusatelj',
    q: '____ davno živio je jedan kralj.',
    en: 'Once upon a time there lived a king.',
    opts: ['Jednom', 'Jedan', 'Jednog', 'Jedna'],
    answer: 'Jednom',
    tip: 'Jednom davno… — the fairy-tale opening.',
  },
  {
    mode: 'slusatelj',
    q: '____ jutra odlučili smo ići na otok.',
    en: 'One morning we decided to go to the island.',
    opts: ['Jednog', 'Jedno', 'Jednom', 'Jedan'],
    answer: 'Jednog',
    tip: 'jutro is neuter: jednog jutra, in the genitive.',
  },
  {
    mode: 'slusatelj',
    q: 'A narrator says "Stojim ja tako, kad odjednom dolazi neki tip…". Which tense is that?',
    en: 'Choose the tense.',
    opts: ['the present', 'the past', 'the future', 'the conditional'],
    answer: 'the present',
    tip: 'Narrators switch to the present to make a story vivid, as in English.',
  },
  {
    mode: 'slusatelj',
    q: 'Which opener means "You will not believe it…"?',
    en: 'Choose the opener.',
    opts: ['Nećeš vjerovati…', 'Ne vjeruješ…', 'Nisi vjerovao…', 'Ne vjeruj…'],
    answer: 'Nećeš vjerovati…',
    tip: 'The negated future of vjerovati.',
  },
];
