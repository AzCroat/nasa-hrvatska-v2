// src/data/drills/a1/zaAccusativeDrill.ts
//
// A1 ZA + ACCUSATIVE — the drill for the `za-accusative` lesson.
//
// Three modes:
//   osobe   — for someone: za mamu, za brata, za dobrog prijatelja, Za koga?
//   mjesta  — a ticket, train, bus or ferry named by its destination: karta za Split
//   vrijeme — for a day, a meal or an occasion: za subotu, za doručak; zašto
//
// Distractors are the dictionary form, the dative/locative -i/-u, or the instrumental -om.
// No accusative-plural form is offered (za sestre would be real Croatian: for the sisters).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ZA_ACCUSATIVE_MODE_LABELS: Record<string, string> = {
  osobe: '🎁 Za koga',
  mjesta: '🎫 Karta za',
  vrijeme: '📅 Za kada',
};

export const ZA_ACCUSATIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── osobe ──────────────────────────────────────────────────────────────
  {
    mode: 'osobe',
    q: 'Ovo je poklon za ____.',
    en: 'This is a present for Mum.',
    opts: ['mamu', 'mama', 'mami', 'mamom'],
    answer: 'mamu',
    tip: 'za + accusative: feminine -a becomes -u.',
  },
  {
    mode: 'osobe',
    q: 'Kupujem cvijeće za ____.',
    en: 'I am buying flowers for my sister.',
    opts: ['sestru', 'sestra', 'sestri', 'sestrom'],
    answer: 'sestru',
    tip: 'za + accusative: feminine -a becomes -u.',
  },
  {
    mode: 'osobe',
    q: 'Kolač je za ____.',
    en: 'The cake is for my brother.',
    opts: ['brata', 'brat', 'bratu', 'bratom'],
    answer: 'brata',
    tip: 'A brother is alive, so the masculine noun adds -a.',
  },
  {
    mode: 'osobe',
    q: 'Ovo pismo je za ____.',
    en: 'This letter is for Marko.',
    opts: ['Marka', 'Marko', 'Marku', 'Markom'],
    answer: 'Marka',
    tip: 'A living masculine noun adds -a: Marko → Marka.',
  },
  {
    mode: 'osobe',
    q: 'Kupujem knjigu za ____.',
    en: 'I am buying a book for a good friend.',
    opts: ['dobrog prijatelja', 'dobar prijatelj', 'dobrom prijatelju', 'dobrim prijateljem'],
    answer: 'dobrog prijatelja',
    tip: 'A friend is alive: prijatelja, and the adjective follows: dobrog.',
  },
  {
    mode: 'osobe',
    q: 'Ovo je krevet za ____.',
    en: 'This is a bed for the child.',
    opts: ['dijete', 'djeteta', 'djetetu', 'djetetom'],
    answer: 'dijete',
    tip: 'dijete is neuter, and neuter nouns do not change in the accusative.',
  },
  {
    mode: 'osobe',
    q: 'Za ____ je ovaj čaj?',
    en: 'Who is this tea for?',
    opts: ['koga', 'tko', 'kome', 'kim'],
    answer: 'koga',
    tip: 'After za you need the object form of tko.',
  },
  {
    mode: 'osobe',
    q: 'Radim za ____.',
    en: 'I work for a small company.',
    opts: ['malu tvrtku', 'mala tvrtka', 'maloj tvrtki', 'malom tvrtkom'],
    answer: 'malu tvrtku',
    tip: 'Both words take -u: mala tvrtka → malu tvrtku.',
  },
  // ── mjesta ─────────────────────────────────────────────────────────────
  {
    mode: 'mjesta',
    q: 'Imate li kartu ____ Split?',
    en: 'Do you have a ticket to Split?',
    opts: ['za', 'kod', 'iz', 'od'],
    answer: 'za',
    tip: 'A ticket is FOR a place: za.',
  },
  {
    mode: 'mjesta',
    q: 'Vlak ____ Zagreb ide u osam.',
    en: 'The train to Zagreb goes at eight.',
    opts: ['za', 'kod', 'iz', 'od'],
    answer: 'za',
    tip: 'A train is named by where it goes: vlak za Zagreb.',
  },
  {
    mode: 'mjesta',
    q: 'Trebam kartu za ____.',
    en: 'I need a ticket to Rijeka.',
    opts: ['Rijeku', 'Rijeka', 'Rijeci', 'Rijekom'],
    answer: 'Rijeku',
    tip: 'za + accusative: Rijeka → Rijeku.',
  },
  {
    mode: 'mjesta',
    q: 'Kada ide autobus ____ Zadar?',
    en: 'When does the bus to Zadar go?',
    opts: ['za', 'kod', 'iz', 'od'],
    answer: 'za',
    tip: 'A bus is named by where it goes.',
  },
  {
    mode: 'mjesta',
    q: 'Imate li kartu za ____?',
    en: 'Do you have a ticket for the ferry?',
    opts: ['trajekt', 'trajekta', 'trajektu', 'trajektom'],
    answer: 'trajekt',
    tip: 'A ferry is masculine and not alive: no change.',
  },
  {
    mode: 'mjesta',
    q: 'Ovo je karta za ____.',
    en: 'This is a ticket for the train.',
    opts: ['vlak', 'vlaka', 'vlaku', 'vlakom'],
    answer: 'vlak',
    tip: 'A train is masculine and not alive: no change.',
  },
  {
    mode: 'mjesta',
    q: 'Trajekt ____ Hvar ide u devet.',
    en: 'The ferry to Hvar goes at nine.',
    opts: ['za', 'kod', 'iz', 'od'],
    answer: 'za',
    tip: 'A ferry is named by where it goes.',
  },
  {
    mode: 'mjesta',
    q: 'Kupujem kartu za ____.',
    en: 'I am buying a ticket for the bus.',
    opts: ['autobus', 'autobusa', 'autobusu', 'autobusom'],
    answer: 'autobus',
    tip: 'A bus is masculine and not alive: no change.',
  },
  // ── vrijeme ────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: 'Rezerviram stol za ____.',
    en: 'I am booking a table for Saturday.',
    opts: ['subotu', 'subota', 'suboti', 'subotom'],
    answer: 'subotu',
    tip: 'za + accusative: subota → subotu.',
  },
  {
    mode: 'vrijeme',
    q: 'Za ____ imam kruh i sir.',
    en: 'For breakfast I have bread and cheese.',
    opts: ['doručak', 'doručka', 'doručku', 'doručci'],
    answer: 'doručak',
    tip: 'A masculine thing does not change after za.',
  },
  {
    mode: 'vrijeme',
    q: 'Za ____ želim novi bicikl.',
    en: 'For my birthday I want a new bike.',
    opts: ['rođendan', 'rođendana', 'rođendanu', 'rođendanom'],
    answer: 'rođendan',
    tip: 'A masculine thing does not change after za.',
  },
  {
    mode: 'vrijeme',
    q: 'Imate li sobu za ____?',
    en: 'Do you have a room for Friday?',
    opts: ['petak', 'petka', 'petku', 'petkom'],
    answer: 'petak',
    tip: 'petak is masculine and not alive: no change.',
  },
  {
    mode: 'vrijeme',
    q: '____ učiš hrvatski?',
    en: 'Why are you learning Croatian?',
    opts: ['Zašto', 'Za koga', 'Kamo', 'Gdje'],
    answer: 'Zašto',
    tip: 'zašto — one word — means why.',
  },
  {
    mode: 'vrijeme',
    q: 'Za ____ imam juhu.',
    en: 'For dinner I have soup.',
    opts: ['večeru', 'večera', 'večeri', 'večero'],
    answer: 'večeru',
    tip: 'za + accusative: večera → večeru.',
  },
  {
    mode: 'vrijeme',
    q: 'Ovo je poklon za ____.',
    en: 'This is a present for Christmas.',
    opts: ['Božić', 'Božića', 'Božiću', 'Božićem'],
    answer: 'Božić',
    tip: 'A masculine thing does not change after za.',
  },
  {
    mode: 'vrijeme',
    q: 'Rezerviram sobu za ____.',
    en: 'I am booking a room for Wednesday.',
    opts: ['srijedu', 'srijeda', 'srijedi', 'srijedom'],
    answer: 'srijedu',
    tip: 'za + accusative: srijeda → srijedu.',
  },
];
