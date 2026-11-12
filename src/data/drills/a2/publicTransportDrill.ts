// src/data/drills/a2/publicTransportDrill.ts
//
// A2 PUBLIC TRANSPORT — the drill for the `public-transport` lesson.
//
// The ticket in the accusative (jednu kartu), the destination after do (genitive) or za
// (accusative), the stop in the locative (na sljedećoj stanici), and the means of
// transport in the bare instrumental (tramvajem, never "s tramvajem").
//
// Three modes:
//   karta  — buying the ticket and reading the timetable
//   voznja — on board: getting off, changing, which line
//   kako   — how you travel

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PUBLIC_TRANSPORT_MODE_LABELS: Record<string, string> = {
  karta: '🎫 Karta',
  voznja: '🚋 U vožnji',
  kako: '🚆 Kako putuješ',
};

export const PUBLIC_TRANSPORT_DRILL_DATA: ModeDrillItem[] = [
  // ── karta ─────────────────────────────────────────────────────────────────
  {
    mode: 'karta',
    q: 'Jednu ____ do Splita, molim.',
    en: 'One ticket to Split, please.',
    opts: ['karta', 'kartu', 'karte', 'kartom'],
    answer: 'kartu',
    tip: 'What you ask for is in the accusative.',
  },
  {
    mode: 'karta',
    q: 'Jednu kartu do ____, molim.',
    en: 'One ticket to Zadar, please.',
    opts: ['Zadar', 'Zadru', 'Zadra', 'Zadrom'],
    answer: 'Zadra',
    tip: 'do + genitive; Zadar loses its a: Zadra.',
  },
  {
    mode: 'karta',
    q: 'Kad polazi sljedeći autobus za ____?',
    en: 'When does the next bus to Rijeka leave?',
    opts: ['Rijeka', 'Rijeci', 'Rijeke', 'Rijeku'],
    answer: 'Rijeku',
    tip: 'za + accusative for the destination.',
  },
  {
    mode: 'karta',
    q: 'Vlak polazi s drugog ____.',
    en: 'The train leaves from platform two.',
    opts: ['peron', 'perona', 'peronu', 'peronom'],
    answer: 'perona',
    tip: 's meaning "from" takes the genitive.',
  },
  {
    mode: 'karta',
    q: 'Koliko košta ____ karta do Osijeka?',
    en: 'How much is a return ticket to Osijek?',
    opts: ['povratnu', 'povratna', 'povratne', 'povratnoj'],
    answer: 'povratna',
    tip: 'karta is the subject of košta, so nominative.',
  },
  {
    mode: 'karta',
    q: 'Vlak ____ dvadeset minuta.',
    en: 'The train is twenty minutes late.',
    opts: ['kasnim', 'kasni', 'kasnimo', 'kasniš'],
    answer: 'kasni',
    tip: 'The train, third person singular.',
  },
  {
    mode: 'karta',
    q: 'What is the phrase below in English?',
    lead: 'vozni red',
    en: 'Choose the English word.',
    opts: ['the timetable', 'a platform', 'a queue', 'a return ticket'],
    answer: 'the timetable',
    tip: 'It tells you when things leave and arrive.',
  },
  {
    mode: 'karta',
    q: 'Gdje se kupuju ____ za tramvaj?',
    en: 'Where do you buy tram tickets?',
    opts: ['karte', 'kartu', 'kartama', 'karti'],
    answer: 'karte',
    tip: 'In a se-sentence the tickets are the subject: nominative plural.',
  },

  // ── voznja ────────────────────────────────────────────────────────────────
  {
    mode: 'voznja',
    q: 'Gdje moram ____?',
    en: 'Where do I have to get off?',
    opts: ['siđem', 'sići', 'silazim', 'sišao'],
    answer: 'sići',
    tip: 'After moram comes the infinitive.',
  },
  {
    mode: 'voznja',
    q: 'Morate sići na ____ stanici.',
    en: 'You have to get off at the next stop.',
    opts: ['sljedeću', 'sljedeća', 'sljedećoj', 'sljedećom'],
    answer: 'sljedećoj',
    tip: 'na + locative, and sljedeći agrees.',
  },
  {
    mode: 'voznja',
    q: 'Morate ____ na tramvaj broj šest.',
    en: 'You have to change to tram number six.',
    opts: ['sjesti', 'presjesti', 'presjeli', 'presjednete'],
    answer: 'presjesti',
    tip: 'To change lines is presjesti; sjesti is to sit down.',
  },
  {
    mode: 'voznja',
    q: 'Ide li ovaj tramvaj do ____ kolodvora?',
    en: 'Does this tram go to the main station?',
    opts: ['Glavni', 'Glavnog', 'Glavnom', 'Glavnim'],
    answer: 'Glavnog',
    tip: 'do + genitive, and the adjective agrees.',
  },
  {
    mode: 'voznja',
    q: 'Siđite na ____ stanici.',
    en: 'Get off at the third stop.',
    opts: ['trećoj', 'treću', 'treća', 'trećom'],
    answer: 'trećoj',
    tip: 'na + locative for where you get off.',
  },
  {
    mode: 'voznja',
    q: 'Kartu treba ____.',
    en: 'You have to validate the ticket.',
    opts: ['poništila', 'poništim', 'poništiti', 'poništen'],
    answer: 'poništiti',
    tip: 'After treba comes the infinitive.',
  },
  {
    mode: 'voznja',
    q: 'Which sentence asks where to get off for the museum?',
    en: 'Where do I get off for the museum?',
    opts: [
      'Gdje moram sići za muzej?',
      'Gdje moram sići za muzeju?',
      'Gdje moram siđem za muzej?',
      'Gdje moram sići na muzej?',
    ],
    answer: 'Gdje moram sići za muzej?',
    tip: 'za + accusative: for the museum.',
  },
  {
    mode: 'voznja',
    q: 'Kontrolor je tražio ____.',
    en: 'The inspector asked for my ticket.',
    opts: ['karta', 'kartom', 'karti', 'kartu'],
    answer: 'kartu',
    tip: 'tražiti + accusative.',
  },

  // ── kako ──────────────────────────────────────────────────────────────────
  {
    mode: 'kako',
    q: 'Idem na posao ____.',
    en: 'I go to work by tram.',
    opts: ['s tramvajem', 'tramvajem', 'tramvaj', 'tramvaju'],
    answer: 'tramvajem',
    tip: 'The means of transport: instrumental with no preposition.',
  },
  {
    mode: 'kako',
    q: 'Putujemo u Zagreb ____.',
    en: 'We are travelling to Zagreb by train.',
    opts: ['vlak', 'vlakom', 's vlakom', 'vlaku'],
    answer: 'vlakom',
    tip: 'Instrumental, no s.',
  },
  {
    mode: 'kako',
    q: 'Dolazim ____.',
    en: 'I am coming by bus.',
    opts: ['autobusom', 'autobus', 's autobusom', 'autobusu'],
    answer: 'autobusom',
    tip: 'Instrumental, no s.',
  },
  {
    mode: 'kako',
    q: 'Na Hvar idemo ____.',
    en: 'We are going to Hvar by ferry.',
    opts: ['trajekt', 's trajektom', 'trajektu', 'trajektom'],
    answer: 'trajektom',
    tip: 'Instrumental, no s.',
  },
  {
    mode: 'kako',
    q: 'Sjedim u ____ i čitam.',
    en: 'I am sitting in the tram, reading.',
    opts: ['tramvaj', 'tramvaju', 'tramvajem', 'tramvaja'],
    answer: 'tramvaju',
    tip: 'Being inside it: u + locative.',
  },
  {
    mode: 'kako',
    q: 'Svaki dan se vozim ____.',
    en: 'I ride the bus every day.',
    opts: ['autobusu', 'autobus', 'autobusa', 'autobusom'],
    answer: 'autobusom',
    tip: 'voziti se + instrumental.',
  },
  {
    mode: 'kako',
    q: 'Which sentence says how you travel?',
    en: 'I travel by train.',
    opts: ['Putujem s vlakom.', 'Putujem vlakom.', 'Putujem vlak.', 'Putujem vlaka.'],
    answer: 'Putujem vlakom.',
    tip: 'Instrumental, no s.',
  },
  {
    mode: 'kako',
    q: 'Ide li ovaj autobus ____ Zadra?',
    en: 'Does this bus go as far as Zadar?',
    opts: ['do', 'u', 'na', 'za'],
    answer: 'do',
    tip: 'Zadra is a genitive, and do is the preposition that takes it.',
  },
];
