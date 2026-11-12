// src/data/drills/b2/interjectionsDrill.ts
//
// B2 INTERJECTIONS — the drill for the `interjections` lesson (B2 position 57).
//
// Three modes, eight items each:
//   osjecaji     — which interjection fits the feeling: joj, jao, ajme, uf, oho, aha, ups, pst, bravo
//   vokativ      — the person called after an interjection, and jao / joj + a dative pronoun
//   interpunkcija — the comma and the exclamation mark, register, and reporting
//
// Some interjections overlap (joj and jao both cover pain), so every item gives a
// context that only one option fits.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INTERJECTIONS_MODE_LABELS: Record<string, string> = {
  osjecaji: '😮 Osjećaji',
  vokativ: '📣 Vokativ',
  interpunkcija: '✍️ Zarez i stil',
};

export const INTERJECTIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── osjecaji ──────────────────────────────────────────────────────────────
  {
    mode: 'osjecaji',
    q: '____, udario sam glavu!',
    en: 'Ouch, I hit my head!',
    opts: ['Joj', 'Bravo', 'Aha', 'Pst'],
    answer: 'Joj',
    tip: 'Sudden pain.',
  },
  {
    mode: 'osjecaji',
    q: '____, napokon smo stigli!',
    en: 'Phew, we have finally arrived!',
    opts: ['Uf', 'Pst', 'Ups', 'Hej'],
    answer: 'Uf',
    tip: 'Relief after something tiring.',
  },
  {
    mode: 'osjecaji',
    q: '____, sad mi je jasno.',
    en: 'I see, now it is clear to me.',
    opts: ['Jao', 'Aha', 'Pst', 'Ups'],
    answer: 'Aha',
    tip: 'Understanding.',
  },
  {
    mode: 'osjecaji',
    q: '____, beba spava!',
    en: 'Shh, the baby is asleep!',
    opts: ['Bravo', 'Oho', 'Pst', 'Uf'],
    answer: 'Pst',
    tip: 'A request for silence.',
  },
  {
    mode: 'osjecaji',
    q: '____, prolio sam kavu.',
    en: 'Oops, I spilled the coffee.',
    opts: ['Bravo', 'Ups', 'Aha', 'Hej'],
    answer: 'Ups',
    tip: 'A small accident.',
  },
  {
    mode: 'osjecaji',
    q: '____, odlično si to napravila!',
    en: 'Well done, you did that brilliantly!',
    opts: ['Ajme', 'Ups', 'Bravo', 'Jao'],
    answer: 'Bravo',
    tip: 'Praise.',
  },
  {
    mode: 'osjecaji',
    q: '____, pa ti si narastao!',
    en: 'Wow, look how you have grown!',
    opts: ['Oho', 'Pst', 'Jao', 'Ups'],
    answer: 'Oho',
    tip: 'Pleasant surprise.',
  },
  {
    mode: 'osjecaji',
    q: '____, zaboravio sam ključeve!',
    en: 'Oh no, I forgot my keys!',
    opts: ['Bravo', 'Aha', 'Ajme', 'Pst'],
    answer: 'Ajme',
    tip: 'Dismay — "oh no".',
  },

  // ── vokativ ───────────────────────────────────────────────────────────────
  {
    mode: 'vokativ',
    q: 'Hej, ____, čekaj me!',
    en: 'Hey, Ivan, wait for me!',
    opts: ['Ivan', 'Ivane', 'Ivanu', 'Ivana'],
    answer: 'Ivane',
    tip: 'The person called is in the vocative.',
  },
  {
    mode: 'vokativ',
    q: 'Bravo, ____!',
    en: 'Well done, Petar!',
    opts: ['Petar', 'Petre', 'Petra', 'Petru'],
    answer: 'Petre',
    tip: 'The vocative of Petar loses its a.',
  },
  {
    mode: 'vokativ',
    q: 'Joj, ____, pazi na stepenice!',
    en: 'Oh, Grandma, mind the stairs!',
    opts: ['baka', 'bako', 'baki', 'baku'],
    answer: 'bako',
    tip: 'A feminine noun in -a: the vocative ends in -o.',
  },
  {
    mode: 'vokativ',
    q: 'Pst, ____, malo tiše!',
    en: 'Shh, children, a bit quieter!',
    opts: ['djeca', 'djeco', 'djeci', 'djecu'],
    answer: 'djeco',
    tip: 'The vocative of the collective noun ends in -o.',
  },
  {
    mode: 'vokativ',
    q: 'Jao ____, opet kasnim!',
    en: 'Woe is me, I am late again!',
    opts: ['ja', 'mene', 'meni', 'mnom'],
    answer: 'meni',
    tip: 'Jao takes the dative.',
  },
  {
    mode: 'vokativ',
    q: 'Jao ____ ako zakasniš!',
    en: 'Woe betide you if you are late!',
    opts: ['ti', 'tebe', 'tebi', 'tobom'],
    answer: 'tebi',
    tip: 'A warning: jao + dative.',
  },
  {
    mode: 'vokativ',
    q: 'Ajme, ____, gdje si bio?',
    en: 'Oh my, Josip, where have you been?',
    opts: ['Josip', 'Josipe', 'Josipa', 'Josipu'],
    answer: 'Josipe',
    tip: 'A masculine name ending in a consonant takes -e.',
  },
  {
    mode: 'vokativ',
    q: 'Hej, ____! Dobro jutro!',
    en: 'Hey, neighbour! Good morning!',
    opts: ['susjed', 'susjeda', 'susjede', 'susjedu'],
    answer: 'susjede',
    tip: 'The vocative of a masculine noun: -e.',
  },

  // ── interpunkcija ─────────────────────────────────────────────────────────
  {
    mode: 'interpunkcija',
    q: 'Koja je rečenica točno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: ['Joj kako boli!', 'Joj, kako boli!', 'Joj kako, boli!', 'Joj, kako, boli'],
    answer: 'Joj, kako boli!',
    tip: 'A comma after the interjection, an exclamation mark at the end.',
  },
  {
    mode: 'interpunkcija',
    q: 'Koja je rečenica točno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: ['Hej Ivane, čekaj!', 'Hej, Ivane čekaj!', 'Hej, Ivane, čekaj!', 'Hej Ivane čekaj'],
    answer: 'Hej, Ivane, čekaj!',
    tip: 'A vocative in the middle takes a comma on both sides.',
  },
  {
    mode: 'interpunkcija',
    q: 'Koja je rečenica točno napisana?',
    en: 'Which sentence is punctuated correctly?',
    opts: ['Uf kako je vruće!', 'Uf, kako je vruće!', 'Uf, kako je, vruće!', 'Uf kako, je vruće'],
    answer: 'Uf, kako je vruće!',
    tip: 'One comma, straight after the interjection.',
  },
  {
    mode: 'interpunkcija',
    q: 'Koji je uzvik u redu gotovo svugdje, i u službenoj situaciji?',
    en: 'Which interjection is fine almost anywhere, even formally?',
    opts: ['ajme', 'ups', 'bravo', 'hej'],
    answer: 'bravo',
    tip: 'The others belong to casual speech.',
  },
  {
    mode: 'interpunkcija',
    q: 'Koja riječ zvuči previše opušteno u službenom e-mailu?',
    en: 'Which word sounds too casual in a formal email?',
    opts: ['ajme', 'poštovani', 'srdačno', 'hvala'],
    answer: 'ajme',
    tip: 'A colloquial interjection of dismay.',
  },
  {
    mode: 'interpunkcija',
    q: 'Uzvik stoji sam. Kako ga pišemo?',
    en: 'The interjection stands alone. How is it written?',
    opts: ['Bravo!', 'Bravo,', 'Bravo;', 'Bravo:'],
    answer: 'Bravo!',
    tip: 'Alone, it takes the exclamation mark itself.',
  },
  {
    mode: 'interpunkcija',
    q: '"Joj, kako je lijepo!" — Ana je rekla ____.',
    en: 'Ana said it was beautiful.',
    opts: ['da je lijepo', 'joj da je lijepo', 'da je joj lijepo', 'da lijepo je'],
    answer: 'da je lijepo',
    tip: 'Reported, the interjection drops out.',
  },
  {
    mode: 'interpunkcija',
    q: 'Koji uzvik traži tišinu?',
    en: 'Which interjection asks for silence?',
    opts: ['oho', 'uf', 'pst', 'aha'],
    answer: 'pst',
    tip: 'The Croatian "shh".',
  },
];
