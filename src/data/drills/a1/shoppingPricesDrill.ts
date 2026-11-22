// src/data/drills/a1/shoppingPricesDrill.ts
//
// A1 SHOPPING AND PRICES — the drill for the `shopping-prices` lesson.
//
// Follows Hrvatski za početnike 1, page 61: the shoe-store dialogue ("Trebam nove
// cipele." — "Koji broj trebate?" — "Koliko koštaju?" — "Izvolite račun!") and its
// statements ("Tenisice koštaju 400…"), together with the big numbers the book builds on
// page 26 (sto, dvjesto, tisuća…). As in the lesson, prices are read as bare figures:
// the form of the currency word after a number needs a case that comes later.
//
// Three modes:
//   brojevi  — the hundreds, the thousands and compound numbers
//   cijena   — Koliko košta / koštaju, skup and jeftin, the price tag
//   trgovina — the shops, and what you say in them

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SHOPPING_PRICES_MODE_LABELS: Record<string, string> = {
  brojevi: '🔢 Brojevi',
  cijena: '💶 Cijena',
  trgovina: '🛍️ Trgovina',
};

export const SHOPPING_PRICES_DRILL_DATA: ModeDrillItem[] = [
  // ── brojevi ───────────────────────────────────────────────────────────────
  {
    mode: 'brojevi',
    q: '100 = ____',
    opts: ['sto', 'deset', 'tisuća', 'dvjesto'],
    answer: 'sto',
    tip: 'A hundred is sto. deset is 10, dvjesto is 200, and tisuća is 1000.',
  },
  {
    mode: 'brojevi',
    q: '200 = ____',
    opts: ['dvjesto', 'dvasto', 'dvadeset', 'dvanaest'],
    answer: 'dvjesto',
    tip: '200 is dvjesto: dva changes shape in front of sto. "dvasto" glues the plain dva on, dvadeset is 20, and dvanaest is 12.',
  },
  {
    mode: 'brojevi',
    q: '300 = ____',
    opts: ['tristo', 'trideset', 'trinaest', 'tri'],
    answer: 'tristo',
    tip: '300 is tri + sto written as one word: tristo. trideset is 30 and trinaest is 13.',
  },
  {
    mode: 'brojevi',
    q: '500 = ____',
    opts: ['petsto', 'pedeset', 'petnaest', 'petdeset'],
    answer: 'petsto',
    tip: '500 is pet + sto: petsto. pedeset is 50 (with no t), petnaest is 15, and "petdeset" is a misspelling of pedeset.',
  },
  {
    mode: 'brojevi',
    q: '45 = ____',
    opts: ['četrdeset pet', 'četrnaest pet', 'pedeset četiri', 'četiri pet'],
    answer: 'četrdeset pet',
    tip: 'Tens first, then ones: četrdeset (40) + pet (5). četrnaest is 14, pedeset četiri is 54, and "četiri pet" just reads the digits.',
  },
  {
    mode: 'brojevi',
    q: '148 = ____',
    opts: [
      'sto četrdeset osam',
      'sto četrnaest osam',
      'sto osamdeset četiri',
      'četrdeset osam sto',
    ],
    answer: 'sto četrdeset osam',
    tip: 'The parts go in order with nothing between them: sto (100) + četrdeset (40) + osam (8). četrnaest is 14, and sto osamdeset četiri is 184.',
  },
  {
    mode: 'brojevi',
    q: '2000 = ____',
    opts: ['dvije tisuće', 'dva tisuće', 'dvije tisuća', 'dva tisuća'],
    answer: 'dvije tisuće',
    tip: 'tisuća is a feminine word, so it takes dvije, not dva, and its form after dvije is tisuće.',
  },
  {
    mode: 'brojevi',
    q: '"tristo šezdeset pet" is the number ____.',
    opts: ['365', '356', '635', '3065'],
    answer: '365',
    tip: 'tristo = 300, šezdeset = 60, pet = 5. šezdeset (60) is easy to confuse with pedeset (50), and tristo is three hundred, not three thousand.',
  },
  {
    mode: 'brojevi',
    q: '"sto dvadeset" is the number ____.',
    opts: ['120', '112', '220', '1020'],
    answer: '120',
    tip: 'sto = 100, dvadeset = 20. 112 would be sto dvanaest, 220 dvjesto dvadeset, and 1020 tisuću dvadeset.',
  },

  // ── cijena ────────────────────────────────────────────────────────────────
  {
    mode: 'cijena',
    q: 'Koliko ____ ova torba?',
    en: 'How much does this bag cost?',
    opts: ['košta', 'koštaju', 'koštam', 'koštaš'],
    answer: 'košta',
    tip: 'One thing, torba, takes the on / ona form: košta. koštaju is for several things; koštam and koštaš would mean "I cost" and "you cost".',
  },
  {
    mode: 'cijena',
    q: 'Koliko ____ ove tenisice?',
    en: 'How much do these sneakers cost?',
    opts: ['koštaju', 'košta', 'koštate', 'koštamo'],
    answer: 'koštaju',
    tip: 'tenisice is plural, so the verb is plural too: koštaju. košta is for one thing; koštate and koštamo are the vi and mi forms.',
  },
  {
    mode: 'cijena',
    q: '____ košta ova majica?',
    en: 'How much does this T-shirt cost?',
    opts: ['Koliko', 'Kako', 'Što', 'Gdje'],
    answer: 'Koliko',
    tip: 'A price is an amount, so Koliko? Kako asks "in what way", which is how English "how" misleads you. Što is "what" and Gdje is "where".',
  },
  {
    mode: 'cijena',
    q: 'Ova torba je ____. (skup)',
    en: 'This bag is expensive.',
    opts: ['skupa', 'skup', 'skupo', 'skupi'],
    answer: 'skupa',
    tip: 'torba is feminine, so the adjective takes -a: skupa. skup is the masculine form, skupo the neuter one, and skupi a masculine plural.',
  },
  {
    mode: 'cijena',
    q: 'Majice nisu skupe. Majice su ____. (jeftin)',
    en: 'The T-shirts are not expensive. They are cheap.',
    opts: ['jeftine', 'jeftini', 'jeftina', 'jeftin'],
    answer: 'jeftine',
    tip: 'majice is a feminine plural, so -e, matching skupe: jeftine. jeftini is for a masculine plural, jeftina for one feminine thing, and jeftin for one masculine thing.',
  },
  {
    mode: 'cijena',
    q: 'Sto dvadeset? Kaput je ____!',
    en: '120? The coat is too expensive!',
    opts: ['preskup', 'preskupa', 'preskupo', 'preskupi'],
    answer: 'preskup',
    tip: 'kaput is masculine, so no ending: preskup. preskupa is for a feminine noun such as torba, and preskupo for a neuter one.',
  },
  {
    mode: 'cijena',
    q: 'To je preskupo! Imate li ____ torbu? (jeftin)',
    en: 'That is too expensive! Do you have a cheap bag?',
    opts: ['jeftinu', 'jeftina', 'jeftin', 'jeftino'],
    answer: 'jeftinu',
    tip: 'torbu is a feminine object, so the adjective takes -u with it: jeftinu torbu. jeftina is the subject form, and jeftin and jeftino go with masculine and neuter nouns.',
  },
  {
    mode: 'cijena',
    q: 'How is a price written on a Croatian price tag?',
    opts: ['5,20 €', '5.20 €', '5:20 €', '5-20 €'],
    answer: '5,20 €',
    tip: 'Croatian uses a decimal comma: 5,20 €. The decimal point is the American way; a colon is for clock times, and a hyphen is not used in prices.',
  },
  {
    mode: 'cijena',
    q: 'Jedna majica košta ____.',
    en: 'One T-shirt costs 15.',
    opts: ['petnaest', 'pedeset', 'pet', 'petsto'],
    answer: 'petnaest',
    tip: '15 is petnaest. pedeset is 50, the pair that is easiest to mix up at the register. pet is 5 and petsto is 500.',
  },

  // ── trgovina ──────────────────────────────────────────────────────────────
  {
    mode: 'trgovina',
    q: 'Where do you buy fresh bread?',
    opts: ['pekarnica', 'ljekarna', 'kiosk', 'mjenjačnica'],
    answer: 'pekarnica',
    tip: 'A pekarnica is a bakery. A ljekarna is a pharmacy, a kiosk sells newspapers and tickets, and a mjenjačnica changes money.',
  },
  {
    mode: 'trgovina',
    q: 'Where do you buy medicine?',
    opts: ['ljekarna', 'pekarnica', 'tržnica', 'kiosk'],
    answer: 'ljekarna',
    tip: 'A ljekarna is a pharmacy. A pekarnica is a bakery, a tržnica is the open-air market, and a kiosk sells newspapers and tickets.',
  },
  {
    mode: 'trgovina',
    q: 'Where do most Croatians buy fruit and vegetables, in the open air?',
    opts: ['tržnica', 'ljekarna', 'kiosk', 'pekarnica'],
    answer: 'tržnica',
    tip: 'The tržnica is the open-air market. A ljekarna is a pharmacy, a kiosk a newsstand, and a pekarnica a bakery.',
  },
  {
    mode: 'trgovina',
    q: 'Where do you buy a newspaper and a streetcar ticket?',
    opts: ['kiosk', 'pekarnica', 'tržnica', 'ljekarna'],
    answer: 'kiosk',
    tip: 'The kiosk is the small stand that sells newspapers and tickets. A pekarnica sells bread, a tržnica fruit and vegetables, and a ljekarna medicine.',
  },
  {
    mode: 'trgovina',
    q: '____ li crne cipele?',
    en: 'Do you have black shoes? (to a salesperson)',
    opts: ['Imate', 'Imam', 'Ima', 'Imaju'],
    answer: 'Imate',
    tip: 'You speak to a salesperson with Vi, so Imate li…? Imam is "I have", ima is "he or she has", and imaju is "they have".',
  },
  {
    mode: 'trgovina',
    q: 'Dobra večer! ____ nove cipele.',
    en: 'Good evening! I need new shoes.',
    opts: ['Trebam', 'Trebaš', 'Treba', 'Trebaju'],
    answer: 'Trebam',
    tip: 'The customer speaks about himself: ja trebam. trebaš is "you need", treba "he or she needs", and trebaju "they need".',
  },
  {
    mode: 'trgovina',
    q: '— Izvolite ____! — Hvala, doviđenja!',
    en: 'Here is your receipt! — Thank you, goodbye!',
    opts: ['račun', 'broj', 'ključ', 'kruh'],
    answer: 'račun',
    tip: 'The slip you get after paying is a račun. A broj is a number or a shoe size, a ključ is a key, and kruh is bread.',
  },
  {
    mode: 'trgovina',
    q: 'Dobro, ____ crnu torbu.',
    en: 'OK, I will take the black bag.',
    opts: ['uzimam', 'uzima', 'uzimaju', 'uzimate'],
    answer: 'uzimam',
    tip: 'To say you will take something, use the ja form: uzimam. uzima is "he or she takes", uzimaju "they take", and uzimate "you take".',
  },
  {
    mode: 'trgovina',
    q: 'Trebam ____. (vrećica)',
    en: 'I need a bag (a shopping bag).',
    opts: ['vrećicu', 'vrećica', 'vrećice', 'vrećici'],
    answer: 'vrećicu',
    tip: 'What you need is the object, and a feminine noun in -a takes -u: vrećicu. vrećica is the subject form, and vrećice would be several bags.',
  },
];
