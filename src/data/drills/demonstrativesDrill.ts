// src/data/drills/demonstrativesDrill.ts
//
// A1 DEMONSTRATIVES — the drill for the `demonstratives` lesson.
//
// Croatian has a THREE-way distance system where English has two, and that is
// the whole difficulty: ovaj is here-by-me, taj is there-by-you, onaj is over
// there away from both. An English speaker maps this/that onto two of the three
// and never reaches for taj, which is the one Croatians use most.
//
// Three modes:
//   blizina — choosing between ovaj / taj / onaj
//   rod     — agreeing the demonstrative with its noun
//   prilozi — the matching adverbs (ovdje / tu / ondje, ovako / tako / onako)

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const DEMONSTRATIVES_MODE_LABELS: Record<string, string> = {
  blizina: '📍 Ovaj, taj, onaj',
  rod: '⚥ Slaganje',
  prilozi: '🧭 Prilozi mjesta',
};

export const DEMONSTRATIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── blizina ───────────────────────────────────────────────────────────────
  {
    mode: 'blizina',
    q: '____ knjiga u mojoj ruci je dobra.',
    en: 'This book in my hand is good.',
    opts: ['Ova', 'Ta', 'Ona', 'Ovo'],
    answer: 'Ova',
    tip: 'In my hand = by the speaker → ovaj/ova/ovo.',
  },
  {
    mode: 'blizina',
    q: 'Daj mi ____ knjigu koju držiš.',
    en: 'Give me that book you are holding.',
    opts: ['tu', 'ovu', 'onu', 'ta'],
    answer: 'tu',
    tip: 'By the LISTENER → taj/ta/to. This is the one English speakers forget exists.',
  },
  {
    mode: 'blizina',
    q: '____ kuća na kraju ulice je stara.',
    en: 'That house at the end of the street is old.',
    opts: ['Ona', 'Ova', 'Ta', 'Ono'],
    answer: 'Ona',
    tip: 'Far from both of us → onaj/ona/ono.',
  },
  {
    mode: 'blizina',
    q: 'Koji oblik znači "by you, near the listener"?',
    en: 'Which one means near the listener?',
    opts: ['taj', 'ovaj', 'onaj', 'koji'],
    answer: 'taj',
    tip: 'The middle term of the three-way system, and the commonest in speech.',
  },
  {
    mode: 'blizina',
    q: '____ je moj brat. (predstavljam ga)',
    en: 'This is my brother. (introducing him)',
    opts: ['Ovo', 'To', 'Ono', 'Ovaj'],
    answer: 'Ovo',
    tip: 'For presenting someone the neuter ovo is used regardless of their gender.',
  },
  {
    mode: 'blizina',
    q: '____ je bilo davno.',
    en: 'That was long ago.',
    opts: ['To', 'Ovo', 'Ono', 'Ta'],
    answer: 'To',
    tip: 'To is the neutral referring form for something already mentioned.',
  },
  {
    mode: 'blizina',
    q: 'Vidiš li ____ planinu na horizontu?',
    en: 'Do you see that mountain on the horizon?',
    opts: ['onu', 'ovu', 'tu', 'ona'],
    answer: 'onu',
    tip: 'On the horizon = far from both → onu (accusative of ona).',
  },
  {
    mode: 'blizina',
    q: 'Koliko stupnjeva udaljenosti ima hrvatski?',
    en: 'How many degrees of distance does Croatian mark?',
    opts: ['tri', 'dva', 'jedan', 'četiri'],
    answer: 'tri',
    tip: 'Three: ovaj, taj, onaj. English has two, which is why taj gets skipped.',
  },

  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: '____ stol (ovaj)',
    en: 'this table',
    opts: ['ovaj', 'ova', 'ovo', 'ovi'],
    answer: 'ovaj',
    tip: 'Stol is masculine → ovaj.',
  },
  {
    mode: 'rod',
    q: '____ žena (taj)',
    en: 'that woman',
    opts: ['ta', 'taj', 'to', 'ti'],
    answer: 'ta',
    tip: 'Žena is feminine → ta.',
  },
  {
    mode: 'rod',
    q: '____ dijete (onaj)',
    en: 'that child',
    opts: ['ono', 'onaj', 'ona', 'oni'],
    answer: 'ono',
    tip: 'Dijete is neuter → ono.',
  },
  {
    mode: 'rod',
    q: '____ ljudi (ovaj)',
    en: 'these people',
    opts: ['ovi', 'ove', 'ova', 'ovaj'],
    answer: 'ovi',
    tip: 'Masculine plural → ovi.',
  },
  {
    mode: 'rod',
    q: '____ knjige (taj)',
    en: 'those books',
    opts: ['te', 'ti', 'ta', 'to'],
    answer: 'te',
    tip: 'Feminine plural → te.',
  },
  {
    mode: 'rod',
    q: '____ pitanja (onaj)',
    en: 'those questions',
    opts: ['ona', 'oni', 'one', 'ono'],
    answer: 'ona',
    tip: 'Neuter plural → ona. Same form as the feminine singular; context separates them.',
  },
  {
    mode: 'rod',
    q: 'Poznajem ____ čovjeka. (taj)',
    en: 'I know that man.',
    opts: ['tog', 'taj', 'ta', 'to'],
    answer: 'tog',
    tip: 'Animate masculine accusative = genitive: tog čovjeka.',
  },
  {
    mode: 'rod',
    q: 'U ____ kući. (ovaj)',
    en: 'In this house.',
    opts: ['ovoj', 'ova', 'ovu', 'ovim'],
    answer: 'ovoj',
    tip: 'Locative feminine: u ovoj kući.',
  },

  // ── prilozi ───────────────────────────────────────────────────────────────
  {
    mode: 'prilozi',
    q: 'Dođi ____! (k meni)',
    en: 'Come here! (to me)',
    opts: ['ovamo', 'tamo', 'ondje', 'onamo'],
    answer: 'ovamo',
    tip: 'Motion towards the speaker: ovamo. Ovdje is position, not motion.',
  },
  {
    mode: 'prilozi',
    q: 'Knjiga je ____. (kod mene)',
    en: 'The book is here. (by me)',
    opts: ['ovdje', 'tu', 'ondje', 'ovamo'],
    answer: 'ovdje',
    tip: 'Position by the speaker: ovdje.',
  },
  {
    mode: 'prilozi',
    q: 'Sjedni ____. (kraj tebe)',
    en: 'Sit there. (by you)',
    opts: ['tu', 'ovdje', 'ondje', 'onamo'],
    answer: 'tu',
    tip: 'Tu matches taj — the listener’s space.',
  },
  {
    mode: 'prilozi',
    q: 'Oni žive ____. (daleko)',
    en: 'They live over there. (far)',
    opts: ['ondje', 'ovdje', 'tu', 'ovamo'],
    answer: 'ondje',
    tip: 'Ondje matches onaj — away from both.',
  },
  {
    mode: 'prilozi',
    q: 'Radi to ____! (kao ja)',
    en: 'Do it this way! (like me)',
    opts: ['ovako', 'tako', 'onako', 'ovamo'],
    answer: 'ovako',
    tip: 'Manner follows the same three-way split: ovako, tako, onako.',
  },
  {
    mode: 'prilozi',
    q: '____ se to ne radi.',
    en: 'That is not how it is done.',
    opts: ['Tako', 'Ovako', 'Onako', 'Ovamo'],
    answer: 'Tako',
    tip: 'Tako refers to the way the listener just did it.',
  },
  {
    mode: 'prilozi',
    q: 'Koji prilog ide uz "onaj"?',
    en: 'Which adverb pairs with "onaj"?',
    opts: ['ondje', 'ovdje', 'tu', 'ovamo'],
    answer: 'ondje',
    tip: 'ovaj–ovdje, taj–tu, onaj–ondje. The system is regular all the way through.',
  },
  {
    mode: 'prilozi',
    q: 'Idemo ____! (u onom smjeru)',
    en: 'Let us go over there!',
    opts: ['onamo', 'ondje', 'ovamo', 'tu'],
    answer: 'onamo',
    tip: 'Motion away from both: onamo. Ondje would be position.',
  },
];
