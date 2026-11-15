// A reviewed fixture for the exercise player: one text step and one of each new
// exercise kind. Used by the unit tests (validator, components) and by
// e2e/exercise-kinds.spec.js, which patches it into lesson `alphabet`.
// prettier-ignore
export const TEXT_FIXTURE = {
  kind: 'dialogue',
  title: 'Upoznavanje',
  lines: [
    { who: 'Ana', hr: 'Bog! Ja sam Ana.', en: 'Hi! I am Ana.' },
    { who: 'Marko', hr: 'Bog, Ana! Ja sam Marko.', en: 'Hi, Ana! I am Marko.' },
    { who: 'Ana', hr: 'Drago mi je.', en: 'Nice to meet you.' },
  ],
  questions: [
    { type: 'tf', q: 'Marko kaže: „Ja sam Ana.”', answer: false, explanation: 'Marko says "Ja sam Marko."' },
    { q: 'Who says "Drago mi je"?', options: ['Ana', 'Marko', 'Nobody', 'Both'], correct: 0, hint: 'Look at the last line.', explanation: 'Ana says it after Marko gives his name.' },
  ],
};
// prettier-ignore
export const PRACTICE_FIXTURE = [
  { type: 'tf', q: 'Hrvatska abeceda ima 30 slova.', answer: true, explanation: 'Thirty letters: lj, nj and dž each count as one.' },
  { type: 'match', q: 'Match each letter to a word that starts with it.', pairs: [['č', 'čaj'], ['š', 'škola'], ['ž', 'život'], ['đ', 'đak']], explanation: 'Each of these letters has its own sound.' },
  { type: 'sort', q: 'One written sign or two?', groups: ['One sign', 'Two signs, one letter'], items: [{ hr: 'č', group: 0 }, { hr: 'lj', group: 1 }, { hr: 'š', group: 0 }, { hr: 'nj', group: 1 }, { hr: 'dž', group: 1 }, { hr: 'ž', group: 0 }], explanation: 'lj, nj and dž are written with two signs but count as one letter each.' },
  { type: 'order', q: 'I am Ana.', words: ['Ja', 'sam', 'Ana.'], explanation: 'Ja sam Ana.' },
  { type: 'transform', q: 'Make the sentence negative.', from: 'Ja sam Ana.', answer: 'Ja nisam Ana.', hint: 'The negative of sam is one word.', explanation: 'sam → nisam.' },
  { type: 'fix', words: ['Ja', 'si', 'Marko.'], wrong: 1, answer: 'sam', hint: 'Which form of "to be" goes with ja?', explanation: 'ja sam, ti si.' },
  { type: 'listen', audio: 'Drago mi je.', q: 'What does it mean?', options: ['Nice to meet you.', 'Good morning.', 'Thank you.', 'See you.'], correct: 0, explanation: 'Drago mi je. — Nice to meet you.' },
  { type: 'dictate', audio: 'Ja sam Ana.', answer: 'Ja sam Ana.', hint: 'Three words.', explanation: 'Ja sam Ana.' },
];
