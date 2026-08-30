// src/data/drills/cookingDrill.ts
//
// B1 FOOD & COOKING — the drill for the `food-cooking` lesson.
//
// A recipe is grammar you can eat, and it is made of exactly two things a
// learner has already been taught separately and never seen working together.
//
// It is written in POLITE IMPERATIVES throughout — *narežite*, *dodajte*,
// *promiješajte*, *pecite* — the -ite form, addressing the reader as Vi. Not the
// infinitive an English recipe uses ("add the salt"), and not the ti-form.
//
// And every quantity takes the GENITIVE: *dvjesto grama brašna*, *pola litre
// mlijeka*, *žlica ulja*. The measure word governs the ingredient, exactly as
// *šalica kave* did at A1 — which means a learner who cooks from a Croatian
// recipe is drilling the partitive genitive twenty times an evening without
// noticing.
//
// The third piece is cultural and worth knowing: the country splits in two at
// the table. Mediterranean on the coast, Central European inland.
//
// Three modes:
//   recept   — the imperative a recipe is written in
//   kolicine — the genitive after every quantity
//   jela     — the dishes, and which half of the country they come from

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const COOKING_MODE_LABELS: Record<string, string> = {
  recept: '👨‍🍳 Recept',
  kolicine: '⚖️ Količine',
  jela: '🍲 Jela',
};

export const COOKING_DRILL_DATA: ModeDrillItem[] = [
  // ── recept ────────────────────────────────────────────────────────────────
  {
    mode: 'recept',
    q: '____ luk. (narezati, recept)',
    en: 'Chop the onion.',
    opts: ['Narežite', 'Nareži', 'Narezati', 'Režem'],
    answer: 'Narežite',
    tip: 'A recipe uses the POLITE imperative throughout — the -ite form.',
  },
  {
    mode: 'recept',
    q: '____ sol. (dodati, recept)',
    en: 'Add the salt.',
    opts: ['Dodajte', 'Dodaj', 'Dodati', 'Dodajem'],
    answer: 'Dodajte',
    tip: 'Dodajte sol.',
  },
  {
    mode: 'recept',
    q: 'U kojem je licu pisan hrvatski recept?',
    en: 'Which form does a recipe use?',
    opts: ['Vi, zapovjedni', 'ti, zapovjedni', 'infinitiv', 'sadašnje vrijeme'],
    answer: 'Vi, zapovjedni',
    tip: 'Unlike an English recipe, which uses the bare infinitive.',
  },
  {
    mode: 'recept',
    q: '____ 20 minuta. (peći, recept)',
    en: 'Bake for 20 minutes.',
    opts: ['Pecite', 'Peci', 'Peći', 'Pečem'],
    answer: 'Pecite',
    tip: 'peći → pecite. The c is a regular alternation.',
  },
  {
    mode: 'recept',
    q: 'Koja je razlika između "kuhati" i "peći"?',
    en: 'kuhati against peći',
    opts: [
      'kuhati u vodi, peći u pećnici',
      'nema razlike',
      'kuhati je brže',
      'peći je samo za kruh',
    ],
    answer: 'kuhati u vodi, peći u pećnici',
    tip: 'And pržiti is to fry in a pan.',
  },
  {
    mode: 'recept',
    q: '____ dok ne zavri. (miješati)',
    en: 'Stir until it boils.',
    opts: ['Miješajte', 'Miješaj', 'Miješati', 'Miješam'],
    answer: 'Miješajte',
    tip: 'And dok ne… means "until", with the negative that English does not use.',
  },
  {
    mode: 'recept',
    q: 'Zašto "dok NE zavri" nosi "ne"?',
    en: 'Why the negative?',
    opts: [
      'tako hrvatski izriče "until"',
      'to je greška',
      'znači "dok ne prestane"',
      'radi uljudnosti',
    ],
    answer: 'tako hrvatski izriče "until"',
    tip: 'Dok ne is simply how "until" is built. Nothing is being negated.',
  },
  {
    mode: 'recept',
    q: 'Što je "tava"?',
    en: 'What is a tava?',
    opts: ['frying pan', 'pot', 'baking tray', 'bowl'],
    answer: 'frying pan',
    tip: 'lonac is a pot, zdjela a bowl, pećnica the oven.',
  },

  // ── kolicine ──────────────────────────────────────────────────────────────
  {
    mode: 'kolicine',
    q: 'Dvjesto grama ____. (brašno)',
    en: 'two hundred grams of flour',
    opts: ['brašna', 'brašno', 'brašnu', 'brašnom'],
    answer: 'brašna',
    tip: 'Every quantity takes the GENITIVE.',
  },
  {
    mode: 'kolicine',
    q: 'Pola litre ____. (mlijeko)',
    en: 'half a litre of milk',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    tip: 'pola litre mlijeka — two genitives in a row.',
  },
  {
    mode: 'kolicine',
    q: 'Žlica ____. (ulje)',
    en: 'a spoonful of oil',
    opts: ['ulja', 'ulje', 'ulju', 'uljem'],
    answer: 'ulja',
    tip: 'žlica ulja.',
  },
  {
    mode: 'kolicine',
    q: 'Što upravlja padežem sastojka?',
    en: 'What governs the ingredient?',
    opts: ['riječ za količinu', 'glagol', 'rod imenice', 'broj'],
    answer: 'riječ za količinu',
    tip: 'The measure word — the same rule as šalica kave at A1.',
  },
  {
    mode: 'kolicine',
    q: 'Pet ____. (jaje)',
    en: 'five eggs',
    opts: ['jaja', 'jaje', 'jajeta', 'jajima'],
    answer: 'jaja',
    tip: 'Genitive plural after five and above.',
  },
  {
    mode: 'kolicine',
    q: 'Dvije ____. (jabuka)',
    en: 'two apples',
    opts: ['jabuke', 'jabuka', 'jabuku', 'jabukama'],
    answer: 'jabuke',
    tip: 'Two, three and four take the genitive SINGULAR: dvije jabuke. Five takes pet jabuka.',
  },
  {
    mode: 'kolicine',
    q: 'Malo ____. (sol)',
    en: 'a little salt',
    opts: ['soli', 'sol', 'solju', 'solu'],
    answer: 'soli',
    tip: 'malo soli. Sol is i-declension, so the genitive is soli.',
  },
  {
    mode: 'kolicine',
    q: 'Kilogram ____. (krumpir)',
    en: 'a kilo of potatoes',
    opts: ['krumpira', 'krumpir', 'krumpiru', 'krumpirom'],
    answer: 'krumpira',
    tip: 'kilogram krumpira.',
  },

  // ── jela ──────────────────────────────────────────────────────────────────
  {
    mode: 'jela',
    q: 'Što je "peka"?',
    en: 'What is peka?',
    opts: ['meso i povrće pod željeznim zvonom', 'pečeni kruh', 'riblja juha', 'kolač s orasima'],
    answer: 'meso i povrće pod željeznim zvonom',
    tip: 'Cooked under an iron bell with embers on top. A coastal institution.',
  },
  {
    mode: 'jela',
    q: 'Odakle je "štrukli"?',
    en: 'Where are štrukli from?',
    opts: ['iz Zagorja', 's obale', 'iz Slavonije', 'iz Istre'],
    answer: 'iz Zagorja',
    tip: 'Cheese pastry, baked or boiled — inland, and firmly so.',
  },
  {
    mode: 'jela',
    q: 'Odakle je "pašticada"?',
    en: 'Where is pašticada from?',
    opts: ['iz Dalmacije', 'iz Zagorja', 'iz Slavonije', 'iz Podravine'],
    answer: 'iz Dalmacije',
    tip: 'Slow-braised beef in a sweet-sour sauce, usually with njoki.',
  },
  {
    mode: 'jela',
    q: 'Što je "kulen"?',
    en: 'What is kulen?',
    opts: ['začinjena slavonska kobasica', 'sir', 'juha', 'kruh s kvascem'],
    answer: 'začinjena slavonska kobasica',
    tip: 'Paprika-spiced, from Slavonia, and taken very seriously there.',
  },
  {
    mode: 'jela',
    q: 'Što je "crni rižot"?',
    en: 'What is crni rižot?',
    opts: [
      'rižot s crnilom sipe',
      'rižot s gljivama',
      'rižot s tintom od maslina',
      'rižot s lećom',
    ],
    answer: 'rižot s crnilom sipe',
    tip: 'Cuttlefish ink. It stains everything, and that is part of the deal.',
  },
  {
    mode: 'jela',
    q: 'Kako se dijeli hrvatska kuhinja?',
    en: 'How does the cuisine split?',
    opts: [
      'obala mediteranska, unutrašnjost srednjoeuropska',
      'sjever i jug jednako',
      'po gradovima',
      'ne dijeli se',
    ],
    answer: 'obala mediteranska, unutrašnjost srednjoeuropska',
    tip: 'Olive oil and fish on one side, paprika and pork on the other.',
  },
  {
    mode: 'jela',
    q: 'Što su "fritule"?',
    en: 'What are fritule?',
    opts: ['male slatke pržene kuglice', 'palačinke', 'slani keksi', 'kolač od jabuka'],
    answer: 'male slatke pržene kuglice',
    tip: 'Small fried doughnuts, everywhere on the coast at Christmas.',
  },
  {
    mode: 'jela',
    q: 'Što se kaže prije jela?',
    en: 'What is said before eating?',
    opts: ['Dobar tek!', 'Živjeli!', 'Izvolite!', 'Hvala!'],
    answer: 'Dobar tek!',
    tip: 'Expected, not optional — at every table, not only a special one.',
  },
];
