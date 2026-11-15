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
  { type: 'match', q: 'Match each phrase to its meaning.', pairs: [['Dobar dan', 'Good day'], ['Hvala', 'Thank you'], ['Doviđenja', 'Goodbye'], ['Laku noć', 'Good night']], explanation: 'Dobar dan and Doviđenja are the polite hello and goodbye; Laku noć is only said at bedtime.' },
  { type: 'sort', q: 'Are you arriving or leaving? Put each phrase where it belongs.', groups: ['Arriving (hello)', 'Leaving (goodbye)'], items: [{ hr: 'Dobar dan', group: 0 }, { hr: 'Doviđenja', group: 1 }, { hr: 'Dobro jutro', group: 0 }, { hr: 'Laku noć', group: 1 }, { hr: 'Dobra večer', group: 0 }, { hr: 'Vidimo se', group: 1 }], explanation: 'Dobro jutro, Dobar dan and Dobra večer greet someone; Doviđenja, Vidimo se and Laku noć are said when parting.' },
  { type: 'order', q: 'I am Ana.', words: ['Ja', 'sam', 'Ana.'], explanation: 'Ja sam Ana.' },
  { type: 'transform', q: 'Make the sentence negative.', from: 'Ja sam Ana.', answer: 'Ja nisam Ana.', hint: 'The negative of sam is one word.', explanation: 'sam → nisam.' },
  { type: 'fix', words: ['Ja', 'si', 'Marko.'], wrong: 1, answer: 'sam', hint: 'Which form of "to be" goes with ja?', explanation: 'ja sam, ti si.' },
  { type: 'listen', audio: 'Drago mi je.', q: 'What does it mean?', options: ['Nice to meet you.', 'Good morning.', 'Thank you.', 'See you.'], correct: 0, explanation: 'Drago mi je. — Nice to meet you.' },
  { type: 'dictate', audio: 'Ja sam Ana.', answer: 'Ja sam Ana.', hint: 'Three words.', explanation: 'Ja sam Ana.' },
];
