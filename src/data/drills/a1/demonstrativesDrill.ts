// src/data/drills/a1/demonstrativesDrill.ts
//
// A1 THIS, THAT, OVER THERE — the drill for the `demonstratives` lesson (A1, 8).
//
// Follows Hrvatski za početnike 1, pages 14–16: "Što je ovo/to/ono?", the three rows
// "Ovo je telefon." · "To je pismo." · "Ono je kuća.", the picture rows (Ovo je avion. ·
// To je kofer. · Ono je sladoled.) and the introductions "Ovo je Marko. On je kuhar." The
// nouns are the book's own (telefon, olovka, kofer, bilježnica, stablo, pismo, hotel). The
// book uses only the neuter pointers ovo/to/ono on these pages, and drills them with the
// plural (Ovo su telefoni); the lesson leaves the plural for later and adds the forms in
// front of a noun (ovaj/ova/ovo, taj/ta/to, onaj/ona/ono) and the place words ovdje, tu,
// ondje, which is where the second and third modes come from. Only biti is used.
//
// Three modes:
//   ovoJe  — Ovo je… / To je… / Ono je…: the neuter opener, by distance
//   rod    — ovaj, ova, ovo in front of a noun: matching the gender
//   mjesto — ovdje, tu, ondje: the place word for each distance

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DEMONSTRATIVES_MODE_LABELS: Record<string, string> = {
  ovoJe: '👉 Ovo je…',
  rod: '📘 Ovaj, ova, ovo',
  mjesto: '📍 Ovdje, tu, ondje',
};

export const DEMONSTRATIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── ovoJe ─────────────────────────────────────────────────────────────────
  {
    mode: 'ovoJe',
    q: '____ je knjiga.',
    cue: 'The book is in your own hand. Say what it is.',
    opts: ['Ovo', 'Ova', 'Ovaj', 'Ono'],
    answer: 'Ovo',
    tip: 'A "this is…" sentence always opens with the neuter Ovo, whatever the gender of the noun: Ovo je knjiga. Ova and Ovaj only stand directly in front of a noun (ova knjiga), and Ono points at something far from both of you.',
  },
  {
    mode: 'ovoJe',
    q: '____ je Marko. On je kuhar.',
    cue: 'Marko is standing next to you and you introduce him.',
    opts: ['Ovo', 'Ovaj', 'Ova', 'Ono'],
    answer: 'Ovo',
    tip: 'People are introduced with the neuter Ovo too: Ovo je Marko. Ovaj and Ova need a noun right after them, and Ono is for someone far away from both speakers.',
  },
  {
    mode: 'ovoJe',
    q: 'Što je ____? — Poklon.',
    cue: 'You point at the box your friend is holding.',
    opts: ['to', 'ta', 'taj', 'tu'],
    answer: 'to',
    tip: 'A thing near the listener is asked about with the neuter to: Što je to? ta and taj need a noun after them (ta knjiga, taj poklon), and tu is a place word, "here / there by you".',
  },
  {
    mode: 'ovoJe',
    q: 'Što je ____?',
    cue: 'You hold up a strange object in your own hand and ask.',
    opts: ['ovo', 'ono', 'ovaj', 'ondje'],
    answer: 'ovo',
    tip: 'Something in your own hand is ovo: Što je ovo? ono is for things far from both of you, ovaj needs a masculine noun after it, and ondje is a place word, "over there".',
  },
  {
    mode: 'ovoJe',
    q: '____ je kuća.',
    cue: 'The house is far away on the hill, away from both of you.',
    opts: ['Ono', 'Ovo', 'Ona', 'Onaj'],
    answer: 'Ono',
    tip: 'Far from both speakers is ono, and the opener stays neuter: Ono je kuća. Ovo is for something near you, and Ona and Onaj only stand directly in front of a noun (ona kuća, onaj hotel).',
  },
  {
    mode: 'ovoJe',
    q: '____ je auto, a ono je autobus.',
    en: 'This is a car, and that over there is a bus.',
    opts: ['Ovo', 'Ovaj', 'Ova', 'Ovdje'],
    answer: 'Ovo',
    tip: 'The opener is the neuter Ovo: Ovo je auto. Ovaj and Ova need a noun right after them, and Ovdje means "here", a place, not "this".',
  },
  {
    mode: 'ovoJe',
    q: 'Je li ____ more? — Da, Jadransko more.',
    cue: 'You both look at something blue far away.',
    opts: ['ono', 'ona', 'onaj', 'ondje'],
    answer: 'ono',
    tip: 'Something far from both of you is asked about with the neuter ono: Je li ono more? ona and onaj are the feminine and masculine forms for in front of a noun, and ondje is the place word "over there".',
  },
  {
    mode: 'ovoJe',
    q: 'To je profesor, a ____ je studentica.',
    cue: 'The student is standing right next to you.',
    opts: ['ovo', 'ovaj', 'ondje', 'onaj'],
    answer: 'ovo',
    tip: 'Next to the speaker is ovo, and the opener is neuter even for a woman: ovo je studentica. ovaj and onaj are masculine forms for in front of a noun, and ondje is a place word.',
  },
  {
    mode: 'ovoJe',
    q: 'Što znači "Ono je fakultet"?',
    opts: [
      'That over there is the university.',
      'This here is the university.',
      'He is at the university.',
      'The university is not here.',
    ],
    answer: 'That over there is the university.',
    tip: 'Ono points at something away from both speakers: "that over there". "This here" would be Ovo je fakultet; "he" is on, not ono; and there is no nije in the sentence, so nothing is denied.',
  },

  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: '____ telefon je ovdje.',
    opts: ['Ovaj', 'Ova', 'Ovo', 'Ona'],
    answer: 'Ovaj',
    tip: 'telefon ends in a consonant, so it is masculine: Ovaj telefon. Ova is for feminine nouns in -a, Ovo is for neuter nouns in -o or -e, and Ona is feminine and points far away.',
  },
  {
    mode: 'rod',
    q: '____ olovka je tu.',
    cue: 'The pencil is by the person you are talking to.',
    opts: ['Ta', 'Taj', 'To', 'Ovaj'],
    answer: 'Ta',
    tip: 'olovka ends in -a, so it is feminine, and near the listener is ta: Ta olovka. Taj is masculine, To is neuter, and Ovaj is masculine and near the speaker.',
  },
  {
    mode: 'rod',
    q: '____ pismo je ovdje.',
    opts: ['Ovo', 'Ovaj', 'Ova', 'Taj'],
    answer: 'Ovo',
    tip: 'pismo ends in -o, so it is neuter: Ovo pismo. Ovaj is masculine, Ova is feminine, and Taj is masculine and points at something by the listener.',
  },
  {
    mode: 'rod',
    q: '____ hotel ondje je Dubrovnik.',
    opts: ['Onaj', 'Ona', 'Ono', 'Ovaj'],
    answer: 'Onaj',
    tip: 'hotel is masculine, and ondje shows it is far away: Onaj hotel. Ona is feminine, Ono is neuter, and Ovaj is for something near the speaker.',
  },
  {
    mode: 'rod',
    q: '____ žena ondje je profesorica.',
    opts: ['Ona', 'Onaj', 'Ono', 'Ova'],
    answer: 'Ona',
    tip: 'žena is feminine, and ondje shows she is far away: Ona žena. Onaj is masculine, Ono is neuter, and Ova is for a woman right next to the speaker.',
  },
  {
    mode: 'rod',
    q: '____ student je Ivan.',
    cue: 'The student is standing next to the person you are talking to.',
    opts: ['Taj', 'Ta', 'To', 'Onaj'],
    answer: 'Taj',
    tip: 'student is masculine, and near the listener is taj: Taj student. Ta is feminine, To is neuter, and Onaj would put him far from both of you.',
  },
  {
    mode: 'rod',
    q: '____ selo je ondje.',
    opts: ['Ono', 'Onaj', 'Ona', 'Ovo'],
    answer: 'Ono',
    tip: 'selo ends in -o, so it is neuter, and ondje is far away: Ono selo. Onaj is masculine, Ona is feminine, and Ovo would mean the village right here.',
  },
  {
    mode: 'rod',
    q: 'Ova ____ je ovdje.',
    opts: ['bilježnica', 'kofer', 'pismo', 'auto'],
    answer: 'bilježnica',
    tip: 'Ova is the feminine form, so it needs a feminine noun in -a: Ova bilježnica. kofer and auto are masculine (ovaj kofer, ovaj auto), and pismo is neuter (ovo pismo).',
  },
  {
    mode: 'rod',
    q: 'Ono ____ je ondje.',
    opts: ['stablo', 'poklon', 'kuća', 'avion'],
    answer: 'stablo',
    tip: 'Ono is the neuter form, so it needs a neuter noun in -o: Ono stablo. poklon and avion are masculine (onaj poklon, onaj avion), and kuća is feminine (ona kuća).',
  },

  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Ovaj kofer je ____.',
    cue: 'Match the place word to the pointing word.',
    opts: ['ovdje', 'ondje', 'tamo', 'onaj'],
    answer: 'ovdje',
    tip: 'ovaj points at something near the speaker, and its place word is ovdje, "here". ondje and tamo mean "over there", and onaj is a pointing word, not a place.',
  },
  {
    mode: 'mjesto',
    q: 'Onaj autobus je ____.',
    cue: 'Match the place word to the pointing word.',
    opts: ['ondje', 'ovdje', 'ovo', 'ova'],
    answer: 'ondje',
    tip: 'onaj points far from both speakers, and its place word is ondje, "over there". ovdje means "here", and ovo and ova are pointing words, not places.',
  },
  {
    mode: 'mjesto',
    q: 'Ta bilježnica je ____.',
    cue: 'It is by the person you are talking to.',
    opts: ['tu', 'ondje', 'tamo', 'ta'],
    answer: 'tu',
    tip: 'ta points at something by the listener, and its place word is tu. ondje and tamo mean "over there", away from both of you, and ta is the pointing word again, not a place.',
  },
  {
    mode: 'mjesto',
    q: 'Hotel je ____, jako blizu.',
    en: 'The hotel is right here, very near.',
    opts: ['tu', 'taj', 'to', 'ta'],
    answer: 'tu',
    tip: 'A place needs the place word tu: Hotel je tu. taj, to and ta are pointing words for in front of a noun or for opening a sentence; they do not say where something is.',
  },
  {
    mode: 'mjesto',
    q: 'Marko nije ovdje. Marko je ____.',
    opts: ['ondje', 'ovaj', 'ovo', 'onaj'],
    answer: 'ondje',
    tip: 'If he is not here (ovdje), he is over there: ondje. ovaj, ovo and onaj are pointing words ("this", "that"), and the sentence needs a place.',
  },
  {
    mode: 'mjesto',
    q: 'Tamo je planina, a ____ je hotel.',
    cue: 'You are standing in front of the hotel.',
    opts: ['ovdje', 'ondje', 'ovaj', 'ono'],
    answer: 'ovdje',
    tip: 'Where the speaker is standing is ovdje, "here". ondje means "over there", like tamo, and ovaj and ono are pointing words, not places.',
  },
  {
    mode: 'mjesto',
    q: 'ovdje → ovaj, tu → taj, ondje → ____',
    opts: ['onaj', 'ovo', 'ta', 'tamo'],
    answer: 'onaj',
    tip: 'Each place word has its pointing word: ovdje and ovaj, tu and taj, ondje and onaj. ovo belongs with ovdje, ta belongs with tu, and tamo is another place word, not a pointing word.',
  },
  {
    mode: 'mjesto',
    q: 'Što znači "ondje"?',
    opts: ['over there', 'here', 'this', 'that one'],
    answer: 'over there',
    tip: 'ondje is the place away from both speakers: "over there". "Here" is ovdje, "this" is ovaj / ova / ovo, and "that one" is onaj / ona / ono.',
  },
  {
    mode: 'mjesto',
    q: 'Što znači "Knjiga je tu"?',
    opts: [
      'The book is here.',
      'This is a book.',
      'The book is far away.',
      'The book is not here.',
    ],
    answer: 'The book is here.',
    tip: 'tu is a place word, and in everyday speech it simply means "here". "This is a book" would be Ovo je knjiga, far away would be ondje, and there is no nije in the sentence.',
  },
];
