// src/data/drills/a1/atTheRestaurantDrill.ts
//
// A1 AT THE RESTAURANT — the drill for the `at-the-restaurant` lesson (new A1, position 45).
//
// Everything ordered is an accusative object of dobiti: juha → juhu, while masculine
// and neuter dishes (čaj, kolač, pivo) stay as they are. Ordering for someone else is
// za + the accusative pronoun. The lesson sits before the genitive, so no distractor
// is a genitive form of a mass noun — "Mogu li dobiti kave?" is a real partitive
// request and must never be marked wrong.
//
// Three modes:
//   narudzba — the dish in the accusative, and the Mogu li dobiti frame
//   za       — za + the accusative pronoun
//   fraze    — the waiter's phrases, the table and the bill

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const AT_THE_RESTAURANT_MODE_LABELS: Record<string, string> = {
  narudzba: '🍲 Narudžba',
  za: '👥 Za koga',
  fraze: '🧾 Fraze',
};

export const AT_THE_RESTAURANT_DRILL_DATA: ModeDrillItem[] = [
  // ── narudzba ──────────────────────────────────────────────────────────────
  {
    mode: 'narudzba',
    q: 'Mogu li dobiti ____?',
    en: 'Can I have the soup?',
    opts: ['juhu', 'juha', 'juhi', 'juhom'],
    answer: 'juhu',
    tip: 'A feminine dish in -a changes -a to -u when you order it.',
  },
  {
    mode: 'narudzba',
    q: 'Molim vas ____.',
    en: 'A coffee, please.',
    opts: ['kavu', 'kava', 'kavi', 'kavom'],
    answer: 'kavu',
    tip: 'The thing you ask for is the object: kava → kavu.',
  },
  {
    mode: 'narudzba',
    q: 'Mogu li dobiti ____?',
    en: 'Can I have the menu?',
    opts: ['jelovnik', 'jelovniku', 'jelovnikom', 'jelovnici'],
    answer: 'jelovnik',
    tip: 'jelovnik is masculine and a thing, so it does not change.',
  },
  {
    mode: 'narudzba',
    q: 'Mogu li dobiti ____?',
    en: 'Can I have a salad?',
    opts: ['salatu', 'salata', 'salati', 'salatom'],
    answer: 'salatu',
    tip: 'salata → salatu, like every feminine noun in -a.',
  },
  {
    mode: 'narudzba',
    q: '____ li dobiti račun?',
    en: 'Can I have the bill?',
    opts: ['Mogu', 'Moći', 'Mogući', 'Moguće'],
    answer: 'Mogu',
    tip: 'The "I" form of moći opens the polite question.',
  },
  {
    mode: 'narudzba',
    q: 'Mogu li dobiti ____?',
    en: 'Can I have a beer?',
    opts: ['pivo', 'pivu', 'pivom', 'pivi'],
    answer: 'pivo',
    tip: 'pivo is neuter: its accusative looks like the menu form.',
  },
  {
    mode: 'narudzba',
    q: 'Molim vas ____ i kolač.',
    en: 'Water and a cake, please.',
    opts: ['vodu', 'voda', 'vodi', 'vodom'],
    answer: 'vodu',
    tip: 'voda → vodu; kolač stays the same.',
  },
  {
    mode: 'narudzba',
    q: 'Mogu li dobiti ____?',
    en: 'Can I have the chicken?',
    opts: ['piletinu', 'piletina', 'piletini', 'piletinom'],
    answer: 'piletinu',
    tip: 'piletina is feminine in -a: piletinu.',
  },
  {
    mode: 'narudzba',
    q: 'Molim vas ____.',
    en: 'A tea, please.',
    opts: ['čaj', 'čaju', 'čajem', 'čajevi'],
    answer: 'čaj',
    tip: 'A masculine thing does not change in the accusative.',
  },
  {
    mode: 'narudzba',
    q: 'Mogu li dobiti ____?',
    en: 'Can I have the fish?',
    opts: ['ribu', 'riba', 'ribi', 'ribom'],
    answer: 'ribu',
    tip: 'riba → ribu.',
  },
  {
    mode: 'narudzba',
    q: 'Mogu li ____ jelovnik?',
    en: 'Can I have the menu?',
    opts: ['dobiti', 'dobim', 'dobije', 'dobijem'],
    answer: 'dobiti',
    tip: 'After mogu the verb stays in its dictionary form.',
  },

  // ── za ────────────────────────────────────────────────────────────────────
  {
    mode: 'za',
    q: 'Za ____ juhu, molim.',
    en: 'Soup for me, please.',
    opts: ['mene', 'ja', 'meni', 'mnom'],
    answer: 'mene',
    tip: 'za takes the accusative: za mene.',
  },
  {
    mode: 'za',
    q: 'Za ____ ribu.',
    en: 'Fish for her.',
    opts: ['nju', 'ona', 'njoj', 'njom'],
    answer: 'nju',
    tip: 'After za the accusative of ona is nju.',
  },
  {
    mode: 'za',
    q: 'Za ____ pivo.',
    en: 'A beer for him.',
    opts: ['njega', 'on', 'njemu', 'njim'],
    answer: 'njega',
    tip: 'After za the accusative of on is njega.',
  },
  {
    mode: 'za',
    q: 'Za ____ vodu, molim.',
    en: 'Water for us, please.',
    opts: ['nas', 'mi', 'nama', 'nami'],
    answer: 'nas',
    tip: 'za nas — the accusative of mi.',
  },
  {
    mode: 'za',
    q: 'Za ____ kavu?',
    en: 'A coffee for you? (one friend)',
    opts: ['tebe', 'ti', 'tebi', 'tobom'],
    answer: 'tebe',
    tip: 'za tebe — the accusative of ti.',
  },
  {
    mode: 'za',
    q: 'Za ____ sok.',
    en: 'Juice for them.',
    opts: ['njih', 'oni', 'njima', 'njim'],
    answer: 'njih',
    tip: 'za njih — the accusative of oni.',
  },
  {
    mode: 'za',
    q: 'Za mene juhu, a za njega ____.',
    en: 'Soup for me, and a salad for him.',
    opts: ['salatu', 'salata', 'salati', 'salatom'],
    answer: 'salatu',
    tip: 'The dish is in the accusative too.',
  },
  {
    mode: 'za',
    q: '____ mene kavu, molim.',
    en: 'A coffee for me, please.',
    opts: ['Za', 'S', 'U', 'Od'],
    answer: 'Za',
    tip: 'za means "for".',
  },

  // ── fraze ─────────────────────────────────────────────────────────────────
  {
    mode: 'fraze',
    q: 'Što znači "Dobar tek!"?',
    opts: ['Enjoy your meal!', 'Cheers!', 'Goodbye!', 'The bill, please!'],
    answer: 'Enjoy your meal!',
    tip: 'Said when the food arrives.',
  },
  {
    mode: 'fraze',
    q: 'Zajedno ili ____?',
    en: 'Together or separately?',
    opts: ['odvojeno', 'slobodno', 'dobro', 'skupo'],
    answer: 'odvojeno',
    tip: 'The waiter is asking how you will pay.',
  },
  {
    mode: 'fraze',
    q: 'Imate li ____ stol?',
    en: 'Do you have a free table?',
    opts: ['slobodan', 'slobodna', 'slobodno', 'slobodnu'],
    answer: 'slobodan',
    tip: 'stol is masculine, so the adjective is too.',
  },
  {
    mode: 'fraze',
    q: 'Što znači "Želite li još nešto?"',
    opts: [
      'Would you like anything else?',
      'Are you ready to pay?',
      'Do you like the food?',
      'Do you have a table?',
    ],
    answer: 'Would you like anything else?',
    tip: 'još nešto = something more.',
  },
  {
    mode: 'fraze',
    q: '____, molim.',
    en: 'The bill, please.',
    opts: ['Račun', 'Računa', 'Računu', 'Računom'],
    answer: 'Račun',
    tip: 'The shortest way to ask for the bill.',
  },
  {
    mode: 'fraze',
    q: 'Što želite ____?',
    en: 'What would you like to drink?',
    opts: ['piti', 'pijem', 'pije', 'pijete'],
    answer: 'piti',
    tip: 'After želite the second verb stays in its dictionary form.',
  },
  {
    mode: 'fraze',
    q: '____, molim. Ja plaćam.',
    en: 'Together, please. I am paying.',
    opts: ['Zajedno', 'Odvojeno', 'Slobodno', 'Jelovnik'],
    answer: 'Zajedno',
    tip: 'One person pays for everyone: zajedno.',
  },
  {
    mode: 'fraze',
    q: 'Što znači "jelovnik"?',
    opts: ['menu', 'bill', 'waiter', 'table'],
    answer: 'menu',
    tip: 'From jelo, a dish.',
  },
];
