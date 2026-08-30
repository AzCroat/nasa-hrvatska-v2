// src/data/drills/travelDrill.ts
//
// A2 TRAVEL & TRANSPORT — the drill for the `travel-transport` lesson.
//
// Croatia is long and narrow and getting anywhere means naming the means, which
// in Croatian is the INSTRUMENTAL with no preposition at all: *idem vlakom*,
// *autobusom*, *trajektom*. English says "by train" and learners faithfully
// produce *s vlakom*, which turns the train into a travelling companion.
// *Pješice* is the odd one out — an adverb, and the only means that is not an
// instrumental.
//
// The second structure is the pair at the ticket window. A train TO somewhere
// takes *za* plus the accusative (*vlak za Split*); one FROM somewhere takes
// *iz* plus the genitive (*autobus iz Rijeke*). Both appear on the same board,
// one line apart, and the learner has to read both.
//
// Three modes:
//   prijevoz — the means, in the instrumental
//   zaiz     — vlak za Split against autobus iz Rijeke
//   karta    — the counter, the station, and somewhere to stay

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const TRAVEL_MODE_LABELS: Record<string, string> = {
  prijevoz: '🚆 Čime putujete',
  zaiz: '🎯 Za ili iz',
  karta: '🎫 Na šalteru',
};

export const TRAVEL_DRILL_DATA: ModeDrillItem[] = [
  // ── prijevoz ──────────────────────────────────────────────────────────────
  {
    mode: 'prijevoz',
    q: 'Idem ____. (vlak)',
    en: 'I am going by train.',
    opts: ['vlakom', 'vlak', 'vlaka', 's vlakom'],
    answer: 'vlakom',
    tip: 'The means is the bare INSTRUMENTAL — no preposition at all.',
  },
  {
    mode: 'prijevoz',
    q: 'Idem ____. (autobus)',
    en: 'I am going by bus.',
    opts: ['autobusom', 'autobus', 'autobusa', 's autobusom'],
    answer: 'autobusom',
    tip: 'autobusom.',
  },
  {
    mode: 'prijevoz',
    q: 'Zašto "s vlakom" nije točno?',
    en: 'Why is s vlakom wrong?',
    opts: [
      'to bi značilo da vlak putuje s vama',
      'treba dativ',
      'vlak je ženskog roda',
      'nije netočno',
    ],
    answer: 'to bi značilo da vlak putuje s vama',
    tip: 'The s marks company. Without it, the instrumental marks the means.',
  },
  {
    mode: 'prijevoz',
    q: 'Idem ____. (trajekt)',
    en: 'I am going by ferry.',
    opts: ['trajektom', 'trajekt', 'trajekta', 'trajektu'],
    answer: 'trajektom',
    tip: 'trajektom — and on this coast you will need it.',
  },
  {
    mode: 'prijevoz',
    q: 'Kako se kaže "on foot"?',
    en: 'on foot',
    opts: ['pješice', 'nogom', 'nogama', 'pješak'],
    answer: 'pješice',
    tip: 'An adverb — the one means of travel that is not an instrumental.',
  },
  {
    mode: 'prijevoz',
    q: 'Putujem ____. (avion)',
    en: 'I am travelling by plane.',
    opts: ['avionom', 'avion', 'aviona', 'avionu'],
    answer: 'avionom',
    tip: 'avionom.',
  },
  {
    mode: 'prijevoz',
    q: 'Idem ____ u školu. (bicikl)',
    en: 'I cycle to school.',
    opts: ['biciklom', 'bicikl', 'bicikla', 'biciklu'],
    answer: 'biciklom',
    tip: 'biciklom.',
  },
  {
    mode: 'prijevoz',
    q: 'Putujem ____. (brat)',
    en: 'I am travelling with my brother.',
    opts: ['s bratom', 'bratom', 'brata', 'bratu'],
    answer: 's bratom',
    tip: 'Company DOES take s. Means does not. That contrast is the whole rule.',
  },

  // ── zaiz ──────────────────────────────────────────────────────────────────
  {
    mode: 'zaiz',
    q: 'Vlak ____ Split kreće u osam.',
    en: 'The train to Split leaves at eight.',
    opts: ['za', 'iz', 'u', 'na'],
    answer: 'za',
    tip: 'A service TO somewhere takes za plus the accusative.',
  },
  {
    mode: 'zaiz',
    q: 'Autobus ____ Rijeke kasni.',
    en: 'The bus from Rijeka is late.',
    opts: ['iz', 'za', 'od', 'sa'],
    answer: 'iz',
    tip: 'FROM takes iz plus the genitive: iz Rijeke.',
  },
  {
    mode: 'zaiz',
    q: 'Vlak za ____. (Zagreb)',
    en: 'the train to Zagreb',
    opts: ['Zagreb', 'Zagreba', 'Zagrebu', 'Zagrebom'],
    answer: 'Zagreb',
    tip: 'za plus the accusative, which for Zagreb looks like the nominative.',
  },
  {
    mode: 'zaiz',
    q: 'Autobus iz ____. (Osijek)',
    en: 'the bus from Osijek',
    opts: ['Osijeka', 'Osijek', 'Osijeku', 'Osijekom'],
    answer: 'Osijeka',
    tip: 'Genitive: iz Osijeka.',
  },
  {
    mode: 'zaiz',
    q: 'Što znači "polazak"?',
    en: 'What is polazak?',
    opts: ['departure', 'arrival', 'platform', 'delay'],
    answer: 'departure',
    tip: 'polaziti → polazak. Dolaziti → dolazak, arrival.',
  },
  {
    mode: 'zaiz',
    q: 'Kada ____ vlak? (arrive)',
    en: 'When does the train arrive?',
    opts: ['dolazi', 'polazi', 'ide', 'vozi'],
    answer: 'dolazi',
    tip: 'Kada dolazi? / Kada polazi?',
  },
  {
    mode: 'zaiz',
    q: 'Idem ____ Dubrovnik. (destination)',
    en: 'I am going to Dubrovnik.',
    opts: ['u', 'za', 'na', 'iz'],
    answer: 'u',
    tip: 'A person goes u a town; a SERVICE is labelled za it. Both are accusative.',
  },
  {
    mode: 'zaiz',
    q: 'Što znači "kašnjenje"?',
    en: 'What is kašnjenje?',
    opts: ['delay', 'connection', 'timetable', 'reservation'],
    answer: 'delay',
    tip: 'From kasniti, to be late.',
  },

  // ── karta ─────────────────────────────────────────────────────────────────
  {
    mode: 'karta',
    q: 'Molim jednu ____ kartu. (return)',
    en: 'One return ticket, please.',
    opts: ['povratnu', 'povratna', 'povratne', 'povratnom'],
    answer: 'povratnu',
    tip: 'Accusative after molim: jednu povratnu kartu.',
  },
  {
    mode: 'karta',
    q: 'Što je "jednosmjerna karta"?',
    en: 'What is that?',
    opts: ['one-way ticket', 'return ticket', 'day pass', 'season ticket'],
    answer: 'one-way ticket',
    tip: 'From jedan smjer, one direction.',
  },
  {
    mode: 'karta',
    q: 'Što je "kolodvor"?',
    en: 'What is kolodvor?',
    opts: ['station', 'airport', 'harbour', 'terminal building'],
    answer: 'station',
    tip: 'Railway or coach station. The airport is zračna luka.',
  },
  {
    mode: 'karta',
    q: 'Što je "vozni red"?',
    en: 'What is vozni red?',
    opts: ['timetable', 'platform', 'queue', 'route map'],
    answer: 'timetable',
    tip: 'vozni red.',
  },
  {
    mode: 'karta',
    q: 'Vlak polazi s ____. (peron 3)',
    en: 'The train leaves from platform 3.',
    opts: ['perona', 'peron', 'peronu', 'peronom'],
    answer: 'perona',
    tip: 's plus the genitive for movement away: s perona.',
  },
  {
    mode: 'karta',
    q: 'Imam ____. (a reservation)',
    en: 'I have a reservation.',
    opts: ['rezervaciju', 'rezervacija', 'rezervacije', 'rezervacijom'],
    answer: 'rezervaciju',
    tip: 'Accusative after imati.',
  },
  {
    mode: 'karta',
    q: 'Kako pitate je li doručak uključen?',
    en: 'Is breakfast included?',
    opts: [
      'Je li doručak uključen?',
      'Da li doručak uključen?',
      'Ima li doručak uključen?',
      'Je doručak uključen?',
    ],
    answer: 'Je li doručak uključen?',
    tip: 'Je li…? is the question form you will use most.',
  },
  {
    mode: 'karta',
    q: 'Što je "apartman"?',
    en: 'What is an apartman?',
    opts: ['self-catering holiday flat', 'hotel room', 'a block of flats', 'a hostel bed'],
    answer: 'self-catering holiday flat',
    tip: 'Half the coast rents them. Smještaj is accommodation in general.',
  },
];
