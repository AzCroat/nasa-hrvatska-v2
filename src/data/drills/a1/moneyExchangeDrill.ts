// src/data/drills/a1/moneyExchangeDrill.ts
//
// A1 MONEY AND EXCHANGE — the drill for the `money-exchange` lesson.
//
// Croatia has used the euro since 1 January 2023 (the kuna, 1994–2022, before it).
// The shape of a currency word after a number (dva eura, pet centi) needs the genitive
// and numbers + genitive, taught at lessons 78 and 84, so nothing here asks for it:
// prices are written in figures (2,50 €) for the learner to read, as the book's
// Lesson 6 does.
//
// Three modes:
//   cijena     — asking the price, reading a price in figures, paying
//   mjenjacnica — the exchange-office conversation
//   rijeci     — money words, spelling and facts

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const MONEY_EXCHANGE_MODE_LABELS: Record<string, string> = {
  cijena: '💶 Cijena',
  mjenjacnica: '💱 Mjenjačnica',
  rijeci: '🪙 Riječi',
};

export const MONEY_EXCHANGE_DRILL_DATA: ModeDrillItem[] = [
  // ── cijena ───────────────────────────────────────────────────────────────
  {
    mode: 'cijena',
    q: 'Koliko ____ kava?',
    en: 'How much is a coffee?',
    opts: ['koštam', 'košta', 'koštaju', 'koštaš'],
    answer: 'košta',
    tip: 'One thing costs: the "it" form of koštati.',
  },
  {
    mode: 'cijena',
    q: 'Koliko je ____? (at the till, for everything)',
    en: 'How much is that?',
    opts: ['taj', 'ta', 'to', 'tu'],
    answer: 'to',
    tip: 'to — "that", pointing at no particular noun.',
  },
  {
    mode: 'cijena',
    q: 'A price tag says 2,50 €. What is the price?',
    en: 'Read the figures.',
    opts: [
      'two euros fifty',
      'twenty-five euros',
      'two hundred and fifty euros',
      'two thousand five hundred euros',
    ],
    answer: 'two euros fifty',
    tip: 'The comma separates the cents.',
  },
  {
    mode: 'cijena',
    q: 'The screen shows 0,80 €. What do you pay?',
    en: 'Read the figures.',
    opts: ['eight euros', 'eighty cents', 'eighty euros', 'eight hundred euros'],
    answer: 'eighty cents',
    tip: '0 euros, 80 cents — the comma separates the cents.',
  },
  {
    mode: 'cijena',
    q: 'Which question asks how much one thing costs?',
    en: 'At a market stall.',
    opts: ['Kakav je tečaj?', 'Kolika je provizija?', 'Koliko košta?', 'Gdje je bankomat?'],
    answer: 'Koliko košta?',
    tip: 'Koliko košta? — How much does it cost?',
  },
  {
    mode: 'cijena',
    q: 'In 3,20 € what separates the euros from the cents?',
    en: 'Croatian price writing.',
    opts: ['a point', 'a space', 'a dash', 'a comma'],
    answer: 'a comma',
    tip: 'Croatian writes a comma where English writes a point.',
  },
  {
    mode: 'cijena',
    q: 'Trebam ____. (cash)',
    en: 'I need cash.',
    opts: ['gotovina', 'gotovinu', 'gotovine', 'gotovini'],
    answer: 'gotovinu',
    tip: 'Cash is what you need: gotovina → gotovinu.',
  },
  {
    mode: 'cijena',
    q: 'Imam samo ____. (a banknote)',
    en: 'I only have a banknote.',
    opts: ['novčanica', 'novčanice', 'novčanicu', 'novčanici'],
    answer: 'novčanicu',
    tip: 'The banknote is what you have: novčanica → novčanicu.',
  },

  // ── mjenjacnica ──────────────────────────────────────────────────────────
  {
    mode: 'mjenjacnica',
    q: 'Trebam ____ novac.',
    en: 'I need to change money.',
    opts: ['promijenim', 'promijeniti', 'promijeni', 'promijene'],
    answer: 'promijeniti',
    tip: 'trebam + the dictionary form.',
  },
  {
    mode: 'mjenjacnica',
    q: 'Želim promijeniti ____.',
    en: 'I want to change dollars.',
    opts: ['dolarom', 'dolara', 'dolare', 'dolari'],
    answer: 'dolare',
    tip: 'A masculine plural object ends in -e: dolari → dolare.',
  },
  {
    mode: 'mjenjacnica',
    q: 'Kakav je ____ danas?',
    en: 'What is the exchange rate today?',
    opts: ['tečaj', 'račun', 'novac', 'bankomat'],
    answer: 'tečaj',
    tip: 'tečaj — the exchange rate.',
  },
  {
    mode: 'mjenjacnica',
    q: 'Kolika je ____?',
    en: 'How much is the fee?',
    opts: ['gotovina', 'provizija', 'kartica', 'kovanica'],
    answer: 'provizija',
    tip: 'provizija — the fee.',
  },
  {
    mode: 'mjenjacnica',
    q: 'Imate li ____?',
    en: 'Do you have small change?',
    opts: ['tečaj', 'sitno', 'račun', 'proviziju'],
    answer: 'sitno',
    tip: 'sitno — small change.',
  },
  {
    mode: 'mjenjacnica',
    q: 'Kartica ili ____?',
    en: 'Card or cash?',
    opts: ['gotovina', 'novčanica', 'mjenjačnica', 'tečaj'],
    answer: 'gotovina',
    tip: 'gotovina — cash.',
  },
  {
    mode: 'mjenjacnica',
    q: 'Trebam ____, molim.',
    en: 'I need a receipt, please.',
    opts: ['računa', 'račun', 'računu', 'računom'],
    answer: 'račun',
    tip: 'A receipt is a masculine thing: no change.',
  },
  {
    mode: 'mjenjacnica',
    q: 'Bankomat je tamo, ali ne ____.',
    en: 'The cash machine is over there, but it does not work.',
    opts: ['radim', 'radi', 'rade', 'radiš'],
    answer: 'radi',
    tip: 'A machine is "it": ne radi.',
  },

  // ── rijeci ───────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Which word is spelled correctly?',
    en: 'Exchange office.',
    opts: ['mijenjačnica', 'mjenjačnica', 'mjenjacnica', 'mijenjacnica'],
    answer: 'mjenjačnica',
    tip: 'The ije of mijenjati shortens to je in the longer word.',
  },
  {
    mode: 'rijeci',
    q: 'Which verb means "to change" (money)?',
    en: 'Choose the verb, spelled correctly.',
    opts: ['mjenjati', 'mijenjati', 'mijenati', 'promjenjati'],
    answer: 'mijenjati',
    tip: 'mijenjati, with ije.',
  },
  {
    mode: 'rijeci',
    q: 'Which word means a coin?',
    en: 'Metal money.',
    opts: ['novčanica', 'kartica', 'kovanica', 'gotovina'],
    answer: 'kovanica',
    tip: 'kovanica — coin; novčanica — banknote.',
  },
  {
    mode: 'rijeci',
    q: 'Which word means a banknote?',
    en: 'Paper money.',
    opts: ['novčanica', 'kovanica', 'račun', 'tečaj'],
    answer: 'novčanica',
    tip: 'novčanica, from novac — money.',
  },
  {
    mode: 'rijeci',
    q: 'Which word means a cash machine?',
    en: 'Where you take out cash with a card.',
    opts: ['mjenjačnica', 'blagajna', 'bankomat', 'banka'],
    answer: 'bankomat',
    tip: 'bankomat — cash machine.',
  },
  {
    mode: 'rijeci',
    q: 'What is the currency of Croatia today?',
    en: 'Since 1 January 2023.',
    opts: ['kuna', 'euro', 'dinar', 'marka'],
    answer: 'euro',
    tip: 'The euro replaced the kuna on 1 January 2023.',
  },
  {
    mode: 'rijeci',
    q: 'Which currency did Croatia use from 1994 to 2022?',
    en: 'The currency before the euro.',
    opts: ['euro', 'dinar', 'kuna', 'lira'],
    answer: 'kuna',
    tip: 'The kuna, named after the marten.',
  },
  {
    mode: 'rijeci',
    q: 'Hrvatska danas ____ euro.',
    en: 'Croatia uses the euro today.',
    opts: ['koristim', 'koristi', 'koriste', 'koristiš'],
    answer: 'koristi',
    tip: 'Hrvatska is "she / it": koristi.',
  },
];
