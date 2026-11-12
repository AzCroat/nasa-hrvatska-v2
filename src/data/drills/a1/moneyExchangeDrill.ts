// src/data/drills/a1/moneyExchangeDrill.ts
//
// A1 MONEY AND EXCHANGE — the drill for the `money-exchange` lesson.
//
// Croatia has used the euro since 1 January 2023 (the kuna, 1994–2022, before it).
// After a number the currency takes a fixed shape: jedan euro, dva / pet eura, and a
// number ending in jedan (but not eleven) goes back to euro. The same table for cent
// (cent, centa, centi) and dolar (dolar, dolara). The genitive behind these forms is
// taught later; here they are learnt as counting forms.
//
// Three modes:
//   cijena     — prices: euro / eura, cent / centa / centi
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
    q: 'Kava košta dva ____.',
    en: 'A coffee costs two euros.',
    opts: ['euro', 'eura', 'eure', 'euri'],
    answer: 'eura',
    tip: 'After 2, 3 and 4: eura.',
  },
  {
    mode: 'cijena',
    q: 'Sendvič košta jedan ____.',
    en: 'A sandwich costs €1.',
    opts: ['eura', 'eure', 'euro', 'eurom'],
    answer: 'euro',
    tip: 'After jedan the word does not change.',
  },
  {
    mode: 'cijena',
    q: 'Karta košta deset ____.',
    en: 'The ticket costs ten euros.',
    opts: ['euri', 'euro', 'eure', 'eura'],
    answer: 'eura',
    tip: 'After 5 and up: eura.',
  },
  {
    mode: 'cijena',
    q: 'Karta košta dvadeset i jedan ____.',
    en: 'The ticket costs twenty-one euros.',
    opts: ['euro', 'eura', 'eure', 'eurima'],
    answer: 'euro',
    tip: 'A number ending in jedan takes euro.',
  },
  {
    mode: 'cijena',
    q: 'Kruh košta pedeset ____.',
    en: 'The bread costs fifty cents.',
    opts: ['cent', 'centa', 'centi', 'cente'],
    answer: 'centi',
    tip: 'After 5 and up: centi.',
  },
  {
    mode: 'cijena',
    q: 'Bombon košta tri ____.',
    en: 'A sweet costs three cents.',
    opts: ['centi', 'centa', 'cent', 'cente'],
    answer: 'centa',
    tip: 'After 2, 3 and 4: centa.',
  },
  {
    mode: 'cijena',
    q: 'Which price is correct?',
    en: 'Five euros.',
    opts: ['pet euro', 'pet eure', 'pet eura', 'pet euri'],
    answer: 'pet eura',
    tip: 'After pet: eura.',
  },
  {
    mode: 'cijena',
    q: 'Which form is wrong?',
    en: 'One of these breaks the counting rule.',
    opts: ['jedan euro', 'dva euro', 'pet eura', 'sto eura'],
    answer: 'dva euro',
    tip: 'After dva it is eura.',
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
    q: 'Želim promijeniti sto ____.',
    en: 'I want to change a hundred dollars.',
    opts: ['dolar', 'dolara', 'dolare', 'dolari'],
    answer: 'dolara',
    tip: 'After any number but one: dolara.',
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
