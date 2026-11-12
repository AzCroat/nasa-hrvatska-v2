// src/data/drills/c1/disjunctiveGradationalClausesDrill.ts
//
// C1 DISJUNCTIVE, EXCLUSIVE AND GRADATIONAL CLAUSES — the drill for the
// `disjunctive-gradational-clauses` lesson (C1 position 13).
//
// Three modes, eight items each:
//   veznik  — choose the connector: ili, bilo… bilo, samo, osim što, nego, a kamoli, čak
//   zarez   — the comma in independent compound sentences (Hrvatski pravopis)
//   pravopis — štoviše / što više, a kamoli as two words
//
// The comma before a repeated ili… ili / bilo da… bilo da is written both ways in
// practice, so no item ever offers that comma as wrong or as the only right answer.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DISJUNCTIVE_GRADATIONAL_CLAUSES_MODE_LABELS: Record<string, string> = {
  veznik: '🔗 Veznik',
  zarez: '✒️ Zarez',
  pravopis: '🔤 Pravopis',
};

export const DISJUNCTIVE_GRADATIONAL_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── veznik ────────────────────────────────────────────────────────────────
  {
    mode: 'veznik',
    q: 'Jedva je ustao iz kreveta, ____ otišao na posao.',
    en: 'He barely got out of bed, let alone went to work.',
    opts: ['a kamoli', 'štoviše', 'ili', 'bilo'],
    answer: 'a kamoli',
    tip: 'A kamoli climbs down from a negative or near-negative first clause.',
  },
  {
    mode: 'veznik',
    q: 'Ne samo da je kuhao, ____ je i pospremio kuhinju.',
    en: 'Not only did he cook, he also tidied the kitchen.',
    opts: ['ili', 'nego', 'a kamoli', 'jedino'],
    answer: 'nego',
    tip: 'Ne samo… nego i: the i stands before what is added.',
  },
  {
    mode: 'veznik',
    q: 'Apartman je udoban, ____ je parking daleko.',
    en: 'The apartment is comfortable, only the parking is far away.',
    opts: ['samo', 'ili', 'a kamoli', 'čak'],
    answer: 'samo',
    tip: 'Samo takes one exception out of a positive statement.',
  },
  {
    mode: 'veznik',
    q: 'Putovanje je prošlo bez problema, ____ je let kasnio pola sata.',
    en: 'The journey went smoothly, except that the flight was half an hour late.',
    opts: ['a kamoli', 'osim što', 'ne samo', 'ili'],
    answer: 'osim što',
    tip: 'Osim što — except that.',
  },
  {
    mode: 'veznik',
    q: '____ ćeš mi vratiti novac, ____ ću se obratiti odvjetniku.',
    en: 'Either you give me back the money, or I will turn to a lawyer.',
    opts: ['Ne samo … nego', 'Ili … ili', 'Samo … jedino', 'A kamoli … čak'],
    answer: 'Ili … ili',
    tip: 'Ili… ili turns a choice into a demand.',
  },
  {
    mode: 'veznik',
    q: '____ zimi ____ ljeti, on se kupa u moru.',
    en: 'Whether in winter or in summer, he swims in the sea.',
    opts: ['Bilo … bilo', 'Ne samo … a kamoli', 'Samo … osim', 'Čak … nego'],
    answer: 'Bilo … bilo',
    tip: 'Bilo… bilo: it makes no difference which.',
  },
  {
    mode: 'veznik',
    q: 'Na sastanak su došli svi, ____ i ravnatelj koji je bio na godišnjem.',
    en: 'Everyone came to the meeting, even the director who was on holiday.',
    opts: ['a kamoli', 'ili', 'čak', 'samo'],
    answer: 'čak',
    tip: 'Čak i marks the most surprising item at the top of the scale.',
  },
  {
    mode: 'veznik',
    q: 'Zna čitati stare rukopise, ____ i glagoljicu.',
    en: 'She can read old manuscripts, even Glagolitic script.',
    opts: ['a kamoli', 'pa čak', 'ili', 'osim što'],
    answer: 'pa čak',
    tip: 'After a positive clause climb up with pa čak i — a kamoli needs a negative.',
  },

  // ── zarez ─────────────────────────────────────────────────────────────────
  {
    mode: 'zarez',
    q: 'Which sentence is punctuated correctly?',
    en: 'Call me tomorrow or send me an email.',
    opts: [
      'Nazovi me sutra ili mi pošalji mail.',
      'Nazovi me sutra, ili mi pošalji mail.',
      'Nazovi, me sutra ili mi pošalji mail.',
      'Nazovi me sutra ili, mi pošalji mail.',
    ],
    answer: 'Nazovi me sutra ili mi pošalji mail.',
    tip: 'No comma before a single ili joining two clauses.',
  },
  {
    mode: 'zarez',
    q: 'Which sentence is punctuated correctly?',
    en: 'He came home and lay down.',
    opts: [
      'Došao je kući, i legao.',
      'Došao je kući i legao.',
      'Došao je, kući i legao.',
      'Došao je kući i, legao.',
    ],
    answer: 'Došao je kući i legao.',
    tip: 'No comma before i joining two clauses.',
  },
  {
    mode: 'zarez',
    q: 'Which sentence is punctuated correctly?',
    en: 'The film is good, only it is too long.',
    opts: [
      'Film je dobar samo je predug.',
      'Film je dobar samo, je predug.',
      'Film je dobar, samo je predug.',
      'Film, je dobar samo je predug.',
    ],
    answer: 'Film je dobar, samo je predug.',
    tip: 'A comma goes before samo in an exclusive clause.',
  },
  {
    mode: 'zarez',
    q: 'Which sentence is punctuated correctly?',
    en: 'She cannot even boil water, let alone bake a cake.',
    opts: [
      'Ne zna ni prokuhati vodu a kamoli ispeći tortu.',
      'Ne zna ni prokuhati vodu a, kamoli ispeći tortu.',
      'Ne zna ni prokuhati vodu a kamoli, ispeći tortu.',
      'Ne zna ni prokuhati vodu, a kamoli ispeći tortu.',
    ],
    answer: 'Ne zna ni prokuhati vodu, a kamoli ispeći tortu.',
    tip: 'A kamoli contains the contrasting a, so a comma goes before it.',
  },
  {
    mode: 'zarez',
    q: 'Which sentence is punctuated correctly?',
    en: 'Not only is he talented, he is also hard-working.',
    opts: [
      'Ne samo da je talentiran, nego je i marljiv.',
      'Ne samo da je talentiran nego je i marljiv.',
      'Ne samo, da je talentiran nego je i marljiv.',
      'Ne samo da je talentiran nego, je i marljiv.',
    ],
    answer: 'Ne samo da je talentiran, nego je i marljiv.',
    tip: 'Nego is a contrasting connector: a comma before it.',
  },
  {
    mode: 'zarez',
    q: 'Which sentence is punctuated correctly?',
    en: 'We wanted to go out, but it started to rain.',
    opts: [
      'Htjeli smo izaći ali je počela kiša.',
      'Htjeli smo izaći, ali je počela kiša.',
      'Htjeli smo, izaći ali je počela kiša.',
      'Htjeli smo izaći ali, je počela kiša.',
    ],
    answer: 'Htjeli smo izaći, ali je počela kiša.',
    tip: 'A comma before ali, as before a, nego, no and već.',
  },
  {
    mode: 'zarez',
    q: 'Which sentence is punctuated correctly?',
    en: 'We neither called nor wrote.',
    opts: [
      'Nismo nazvali, niti smo pisali.',
      'Nismo, nazvali niti smo pisali.',
      'Nismo nazvali niti smo pisali.',
      'Nismo nazvali niti, smo pisali.',
    ],
    answer: 'Nismo nazvali niti smo pisali.',
    tip: 'Niti, like i and ni, takes no comma before it.',
  },
  {
    mode: 'zarez',
    q: 'Which sentence is punctuated correctly?',
    en: 'The room is bright, except that the window does not open.',
    opts: [
      'Soba je svijetla, osim što se prozor ne otvara.',
      'Soba je svijetla osim što, se prozor ne otvara.',
      'Soba je svijetla osim, što se prozor ne otvara.',
      'Soba, je svijetla osim što se prozor ne otvara.',
    ],
    answer: 'Soba je svijetla, osim što se prozor ne otvara.',
    tip: 'A comma goes before osim što.',
  },

  // ── pravopis ──────────────────────────────────────────────────────────────
  {
    mode: 'pravopis',
    q: 'Nije mi pomogao, ____, odmogao mi je.',
    en: 'He did not help me; moreover, he got in my way.',
    opts: ['štoviše', 'što više', 'što, više', 'štovise'],
    answer: 'štoviše',
    tip: 'Moreover is one word, with š at both ends.',
  },
  {
    mode: 'pravopis',
    q: '____ radiš, to si umorniji.',
    en: 'The more you work, the more tired you are.',
    opts: ['Štoviše', 'Što više', 'Štovise', 'Što-više'],
    answer: 'Što više',
    tip: 'The more… the more is two words: što više… to.',
  },
  {
    mode: 'pravopis',
    q: 'Ne zna ni plivati, ____ roniti.',
    en: 'He cannot even swim, let alone dive.',
    opts: ['akamoli', 'a kamoli', 'a-kamoli', 'a kamo li'],
    answer: 'a kamoli',
    tip: 'Let alone is written as two words: a kamoli.',
  },
  {
    mode: 'pravopis',
    q: 'Ugovor je povoljan, ____, potpisan je bez ijedne izmjene.',
    en: 'The contract is favourable; what is more, it was signed without a single change.',
    opts: ['što više', 'štoviše', 'što više,', 'štovišće'],
    answer: 'štoviše',
    tip: 'Štoviše comments on the whole clause and is set off by commas.',
  },
  {
    mode: 'pravopis',
    q: '____ ljudi dođe, to bolje.',
    en: 'The more people come, the better.',
    opts: ['Štoviše', 'Što više', 'Štoviše,', 'Što više,'],
    answer: 'Što više',
    tip: 'Što više + genitive: the more people.',
  },
  {
    mode: 'pravopis',
    q: 'Jedva razumije pisani tekst, ____ govor na radiju.',
    en: 'He barely understands written text, let alone speech on the radio.',
    opts: ['akamoli', 'a kamoli', 'akamo li', 'a, kamoli'],
    answer: 'a kamoli',
    tip: 'A kamoli — two words, after a near-negative such as jedva.',
  },
  {
    mode: 'pravopis',
    q: 'Which sentence is spelled correctly?',
    en: 'The prices did not go down; moreover, they went up.',
    opts: [
      'Cijene nisu pale, što više, porasle su.',
      'Cijene nisu pale, štoviše, porasle su.',
      'Cijene nisu pale štoviše porasle, su.',
      'Cijene nisu pale, što, više porasle su.',
    ],
    answer: 'Cijene nisu pale, štoviše, porasle su.',
    tip: 'Štoviše is one word and is set off by commas.',
  },
  {
    mode: 'pravopis',
    q: 'Which sentence is spelled correctly?',
    en: 'The longer you wait, the harder it is.',
    opts: [
      'Štoviše čekaš, to je teže.',
      'Što više čekaš to, je teže.',
      'Što više čekaš, to je teže.',
      'Štoviše, čekaš to je teže.',
    ],
    answer: 'Što više čekaš, to je teže.',
    tip: 'Što više… to: two words, with a comma closing the što clause.',
  },
];
