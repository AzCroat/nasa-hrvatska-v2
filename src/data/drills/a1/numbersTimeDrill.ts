// src/data/drills/a1/numbersTimeDrill.ts
//
// A1 NUMBERS 0–10, PHONE NUMBERS AND ADDRESSES — the drill for the `numbers-time` lesson.
//
// Follows Hrvatski za početnike 1, page 8: the numbers nula–deset with jedan (jedna,
// jedno), the emergency numbers (policija, vatrogasci, hitna pomoć), and the
// "Upoznajmo se!" cards — "Moja adresa je Kolarova 8. Moj telefon je 01/234-56-00."
// The verb biti is not taught yet, so "Moja adresa je…" and "Moj telefon je…" are used
// only as the whole phrases the lesson gives.
//
// Three modes:
//   brojevi — the eleven number words
//   telefon — reading phone and emergency numbers digit by digit
//   adresa  — street + number, and jedan / jedna / jedno in front of a word

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NUMBERS_TIME_MODE_LABELS: Record<string, string> = {
  brojevi: '🔢 Brojevi',
  telefon: '📞 Telefon',
  adresa: '🏠 Adresa',
};

export const NUMBERS_TIME_DRILL_DATA: ModeDrillItem[] = [
  // ── brojevi ───────────────────────────────────────────────────────────────
  {
    mode: 'brojevi',
    q: '7 = ____',
    opts: ['sedam', 'šest', 'osam', 'devet'],
    answer: 'sedam',
    tip: '7 is sedam. Its neighbors are šest (6) and osam (8); devet is 9.',
  },
  {
    mode: 'brojevi',
    q: '9 = ____',
    opts: ['devet', 'deset', 'dva', 'sedam'],
    answer: 'devet',
    tip: '9 is devet, with a v. deset, with an s, is 10: the two differ by one letter. dva is 2 and sedam is 7.',
  },
  {
    mode: 'brojevi',
    q: '10 = ____',
    opts: ['deset', 'devet', 'dva', 'pet'],
    answer: 'deset',
    tip: '10 is deset, with an s. devet, with a v, is 9. dva is 2 and pet is 5.',
  },
  {
    mode: 'brojevi',
    q: '0 = ____',
    opts: ['nula', 'jedan', 'deset', 'dva'],
    answer: 'nula',
    tip: 'Zero is nula. jedan is 1, dva is 2, and deset is 10, which is written with a zero but is its own word.',
  },
  {
    mode: 'brojevi',
    q: 'jedan, dva, ____, četiri',
    opts: ['tri', 'pet', 'šest', 'nula'],
    answer: 'tri',
    tip: 'Counting up: jedan (1), dva (2), tri (3), četiri (4). pet is 5, šest is 6 and nula is 0.',
  },
  {
    mode: 'brojevi',
    q: 'šest, sedam, osam, ____',
    opts: ['devet', 'deset', 'pet', 'četiri'],
    answer: 'devet',
    tip: 'After osam (8) comes devet (9). deset (10) is one step further; pet (5) and četiri (4) come before šest.',
  },
  {
    mode: 'brojevi',
    q: 'pet + tri = ____',
    opts: ['osam', 'sedam', 'devet', 'šest'],
    answer: 'osam',
    tip: '5 + 3 = 8, and 8 is osam. sedam is 7, devet is 9 and šest is 6.',
  },
  {
    mode: 'brojevi',
    q: 'dva + dva = ____',
    opts: ['četiri', 'četri', 'tri', 'pet'],
    answer: 'četiri',
    tip: '2 + 2 = 4, written četiri with an i in the middle. "četri" is how it is often said fast, but it is a spelling mistake. tri is 3 and pet is 5.',
  },
  {
    mode: 'brojevi',
    q: 'deset − četiri = ____',
    opts: ['šest', 'sedam', 'pet', 'osam'],
    answer: 'šest',
    tip: '10 − 4 = 6, and 6 is šest. pet is 5, sedam is 7 and osam is 8.',
  },

  // ── telefon ───────────────────────────────────────────────────────────────
  {
    mode: 'telefon',
    q: 'Hitna pomoć: ____',
    en: 'The number of the ambulance service.',
    opts: ['jedan devet četiri', 'jedan devet dva', 'jedan devet tri', 'jedan jedan dva'],
    answer: 'jedan devet četiri',
    tip: 'The ambulance is 194: jedan devet četiri. 192 is the police, 193 the fire department, and 112 is the general emergency number.',
  },
  {
    mode: 'telefon',
    q: 'Policija: ____',
    en: 'The number of the police.',
    opts: ['jedan devet dva', 'jedan devet tri', 'jedan devet četiri', 'jedan dva devet'],
    answer: 'jedan devet dva',
    tip: 'The police are 192: jedan devet dva. 193 is the fire department and 194 the ambulance. "jedan dva devet" has the last two digits swapped.',
  },
  {
    mode: 'telefon',
    q: 'Vatrogasci: ____',
    en: 'The number of the fire department.',
    opts: ['jedan devet tri', 'jedan devet dva', 'jedan devet četiri', 'jedan tri devet'],
    answer: 'jedan devet tri',
    tip: 'The fire department is 193: jedan devet tri. 192 is the police and 194 the ambulance. "jedan tri devet" has the digits in the wrong order.',
  },
  {
    mode: 'telefon',
    q: 'The European number for any emergency is ____.',
    opts: ['jedan jedan dva', 'jedan dva dva', 'jedan devet dva', 'dva jedan jedan'],
    answer: 'jedan jedan dva',
    tip: '112 works for every emergency: jedan jedan dva. 192 (jedan devet dva) reaches only the police, and the other two are not emergency numbers.',
  },
  {
    mode: 'telefon',
    q: 'The Zagreb area code 01 is read ____.',
    opts: ['nula jedan', 'jedan nula', 'nula jedna', 'deset'],
    answer: 'nula jedan',
    tip: 'A phone number is read digit by digit, in order: nula jedan. "jedan nula" reverses it, deset is the number 10, and a digit read aloud is always jedan, never jedna.',
  },
  {
    mode: 'telefon',
    q: 'A cell phone number starts 098. You read it ____.',
    opts: ['nula devet osam', 'nula deset osam', 'devet osam', 'nula devet sedam'],
    answer: 'nula devet osam',
    tip: '0-9-8 is nula devet osam. deset is 10, not 9; the zero must be said too; and sedam is 7, not 8.',
  },
  {
    mode: 'telefon',
    q: '"pet pet tri, nula dva šest" is the number ____.',
    opts: ['553-026', '553-206', '533-026', '553-029'],
    answer: '553-026',
    tip: 'pet pet tri = 5 5 3, nula dva šest = 0 2 6. Read every digit in order; šest is 6, not 9, and nula comes before dva.',
  },
  {
    mode: 'telefon',
    q: '____ telefon je nula devet jedan, pet tri sedam.',
    en: 'My phone number is 091 537.',
    opts: ['Moj', 'Moja', 'Moje', 'Moji'],
    answer: 'Moj',
    tip: 'The whole phrase is Moj telefon je… Moja belongs to the other phrase, Moja adresa je…; moje and moji go with other kinds of words you will meet later.',
  },
  {
    mode: 'telefon',
    q: 'Reading the digits of 112 aloud, the digit 1 is always ____.',
    opts: ['jedan', 'jedna', 'jedno', 'jedni'],
    answer: 'jedan',
    tip: 'Counting and reading digits, 1 is always jedan. jedna and jedno appear only in front of a word (jedna kuća, jedno more), and jedni is not used for a digit at all.',
  },

  // ── adresa ────────────────────────────────────────────────────────────────
  {
    mode: 'adresa',
    q: 'Which sentence gives the address correctly for "My address is 2 Radićeva Street"?',
    opts: [
      'Moja adresa je Radićeva dva.',
      'Moja adresa je dva Radićeva.',
      'Moj adresa je Radićeva dva.',
      'Moja adresa dva je Radićeva.',
    ],
    answer: 'Moja adresa je Radićeva dva.',
    tip: 'Street first, number after it: Radićeva dva. "dva Radićeva" is English order, the phrase is Moja adresa (not Moj), and the number cannot jump in front of je.',
  },
  {
    mode: 'adresa',
    q: 'Which sentence gives the address correctly for "My address is 3 Vlaška Street, Zagreb"?',
    opts: [
      'Moja adresa je Vlaška tri, Zagreb.',
      'Moja adresa je Zagreb, tri Vlaška.',
      'Moja adresa je tri Vlaška, Zagreb.',
      'Moja adresa je Vlaška Zagreb, tri.',
    ],
    answer: 'Moja adresa je Vlaška tri, Zagreb.',
    tip: 'The order is street, number, then the city after a comma. The city does not go first, and the number never comes before the street or after the city.',
  },
  {
    mode: 'adresa',
    q: '____ adresa je Savska osam.',
    en: 'My address is 8 Savska Street.',
    opts: ['Moja', 'Moj', 'Moje', 'Moji'],
    answer: 'Moja',
    tip: 'The whole phrase is Moja adresa je… Moj belongs to Moj telefon je…; moje and moji go with other kinds of words.',
  },
  {
    mode: 'adresa',
    q: 'Moja adresa je Ilica 10. → Ilica ____',
    opts: ['deset', 'devet', 'dva', 'nula'],
    answer: 'deset',
    tip: '10 is deset. devet (9) is one letter away, so watch the s; dva is 2 and nula is 0.',
  },
  {
    mode: 'adresa',
    q: '"Moja adresa je Tkalčićeva sedam." The house number is ____.',
    opts: ['7', '6', '8', '10'],
    answer: '7',
    tip: 'sedam is 7. The number after the street name is the house number. šest is 6, osam is 8 and deset is 10.',
  },
  {
    mode: 'adresa',
    q: '____ grad',
    en: 'one city',
    opts: ['jedan', 'jedna', 'jedno', 'jedni'],
    answer: 'jedan',
    tip: 'Learn the pair: jedan grad. jedna goes with words like kuća and knjiga, jedno with more, and jedni is not used for one thing.',
  },
  {
    mode: 'adresa',
    q: '____ kuća',
    en: 'one house',
    opts: ['jedna', 'jedan', 'jedno', 'jedni'],
    answer: 'jedna',
    tip: 'Learn the pair: jedna kuća. jedan goes with words like grad and ključ, jedno with more, and jedni is not used for one thing.',
  },
  {
    mode: 'adresa',
    q: '____ more',
    en: 'one sea',
    opts: ['jedno', 'jedan', 'jedna', 'jedni'],
    answer: 'jedno',
    tip: 'Learn the pair: jedno more. jedan goes with grad, jedna with kuća. In front of a word, jedan changes with the word.',
  },
  {
    mode: 'adresa',
    q: 'Jedna knjiga i ____ ključ, molim.',
    en: 'One book and one key, please.',
    opts: ['jedan', 'jedna', 'jedno', 'jedni'],
    answer: 'jedan',
    tip: 'It is jedan ključ, like jedan grad. jedna already went with knjiga; jedno is for words like more.',
  },
];
