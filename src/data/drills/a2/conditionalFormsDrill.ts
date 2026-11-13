// src/data/drills/a2/conditionalFormsDrill.ts
//
// A2 CONDITIONAL I — the drill for the `conditional-forms` lesson.
//
// would = bih / bi / bi / bismo / biste / bi + the l-participle, which agrees with the
// subject exactly as in the past. The auxiliary is a clitic, so it stands second:
// Ja bih išao or Išao bih, never Bih išao. Negative: ne bih (two words). Question:
// Bi li…? Biste li…?
//
// Three modes:
//   oblici  — the auxiliary for each person, and the participle
//   red     — word order and the clitic group
//   pitanje — the negative and the question

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CONDITIONAL_FORMS_MODE_LABELS: Record<string, string> = {
  oblici: '🧩 Oblici',
  red: '↔️ Red riječi',
  pitanje: '❓ Ne i pitanje',
};

export const CONDITIONAL_FORMS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja ____ išao u kino.',
    en: 'I would go to the cinema.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'ja → bih.',
  },
  {
    mode: 'oblici',
    q: 'Ona ____ to kupila.',
    en: 'She would buy that.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'ti, on, ona and oni share the short form bi.',
  },
  {
    mode: 'oblici',
    q: 'Mi ____ došli u subotu.',
    en: 'We would come on Saturday.',
    opts: ['bismo', 'bi', 'bih', 'biste'],
    answer: 'bismo',
    tip: 'mi → bismo.',
  },
  {
    mode: 'oblici',
    q: 'Vi ____ to brzo naučili.',
    en: 'You (plural) would learn that quickly.',
    opts: ['biste', 'bismo', 'bih', 'bi'],
    answer: 'biste',
    tip: 'vi → biste.',
  },
  {
    mode: 'oblici',
    q: 'Oni ____ radili vikendom.',
    en: 'They would work at weekends.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'oni → bi, with the plural participle radili.',
  },
  {
    mode: 'oblici',
    q: 'Ja bih ____ na more.',
    en: 'I would go to the seaside. (a woman speaking)',
    opts: ['išla', 'išao', 'išli', 'ići'],
    answer: 'išla',
    tip: 'The participle agrees with the speaker, a woman.',
  },
  {
    mode: 'oblici',
    q: 'Mi bismo ____ autom.',
    en: 'We would travel by car.',
    opts: ['putovali', 'putovao', 'putovala', 'putovati'],
    answer: 'putovali',
    tip: 'For mi the participle is plural: putovali.',
  },
  {
    mode: 'oblici',
    q: 'Ti bi to ____.',
    en: 'You would understand that. (to a man)',
    opts: ['razumio', 'razumjela', 'razumjeli', 'razumjeti'],
    answer: 'razumio',
    tip: 'A man: razumio.',
  },
  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Koji je red riječi točan?',
    en: 'Which word order says: I would go to the cinema?',
    opts: ['Išao bih u kino.', 'Bih išao u kino.', 'Išao u kino bih.', 'Bih u kino išao.'],
    answer: 'Išao bih u kino.',
    tip: 'bih is a clitic and stands second: participle first, then bih.',
  },
  {
    mode: 'red',
    q: 'Koji je red riječi točan?',
    en: 'Which word order says: I would buy that car?',
    opts: [
      'Ja bih kupio taj auto.',
      'Ja kupio bih taj auto.',
      'Bih ja kupio taj auto.',
      'Kupio ja bih taj auto.',
    ],
    answer: 'Ja bih kupio taj auto.',
    tip: 'With the pronoun first, bih comes straight after it.',
  },
  {
    mode: 'red',
    q: 'Koji je red riječi točan?',
    en: 'Which word order says: I would gladly rest?',
    opts: [
      'Rado bih se odmorio.',
      'Rado se bih odmorio.',
      'Bih se rado odmorio.',
      'Rado bih odmorio se.',
    ],
    answer: 'Rado bih se odmorio.',
    tip: 'The clitic group goes second, and bih comes before se.',
  },
  {
    mode: 'red',
    q: 'Koji je red riječi točan?',
    en: 'Which word order says: I would help you?',
    opts: ['Ja bih ti pomogao.', 'Ja ti bih pomogao.', 'Bih ti ja pomogao.', 'Ja pomogao ti bih.'],
    answer: 'Ja bih ti pomogao.',
    tip: 'bih comes before the pronoun clitic ti.',
  },
  {
    mode: 'red',
    q: 'Sutra ____ išla na izlet.',
    en: 'Tomorrow I would go on a trip. (a woman speaking)',
    opts: ['bih', 'sam bih', 'bi sam', 'ću bih'],
    answer: 'bih',
    tip: 'Only one auxiliary: bih, in second place after sutra.',
  },
  {
    mode: 'red',
    q: 'Koji je red riječi točan?',
    en: 'Which word order says: I would tell him the truth? (a woman speaking)',
    opts: [
      'Rekla bih mu istinu.',
      'Rekla mu bih istinu.',
      'Bih mu rekla istinu.',
      'Mu bih rekla istinu.',
    ],
    answer: 'Rekla bih mu istinu.',
    tip: 'bih before mu, and the clitic group in second place.',
  },
  {
    mode: 'red',
    q: 'Koja rečenica znači "would", a ne prošlo vrijeme?',
    en: 'Which sentence is the conditional, not the past?',
    opts: ['Radila bih.', 'Radila sam.', 'Radit ću.', 'Radim.'],
    answer: 'Radila bih.',
    tip: 'bih makes it the conditional; sam is the past, ću the future.',
  },
  {
    mode: 'red',
    q: 'Kupio ____ taj stan.',
    en: 'I would buy that flat. (a man speaking)',
    opts: ['bih', 'sam', 'ću', 'bi'],
    answer: 'bih',
    tip: 'I would: bih. bi would mean he would.',
  },
  // ── pitanje ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanje',
    q: 'Kako se kaže "I wouldn\'t go"?',
    opts: ['Ne bih išao.', 'Bih ne išao.', 'Nebih išao.', 'Ne išao bih.'],
    answer: 'Ne bih išao.',
    tip: 'ne comes right before bih and is written separately.',
  },
  {
    mode: 'pitanje',
    q: '____ li došli sutra?',
    en: 'Would you come tomorrow? (formal)',
    opts: ['Biste', 'Bi', 'Bih', 'Bismo'],
    answer: 'Biste',
    tip: 'Formal vi → biste, with the plural participle došli.',
  },
  {
    mode: 'pitanje',
    q: '____ li išao sa mnom?',
    en: 'Would you go with me? (to a friend)',
    opts: ['Bi', 'Biste', 'Bih', 'Bismo'],
    answer: 'Bi',
    tip: 'ti → bi, with the singular participle išao.',
  },
  {
    mode: 'pitanje',
    q: '____ li mogli sjesti ovdje?',
    en: 'Could we sit here?',
    opts: ['Bismo', 'Bi', 'Biste', 'Bih'],
    answer: 'Bismo',
    tip: 'mi → bismo.',
  },
  {
    mode: 'pitanje',
    q: 'Koje je pitanje točno?',
    en: 'Which question correctly says: would you help me? (to a friend, a man)',
    opts: ['Bi li mi pomogao?', 'Li bi mi pomogao?', 'Bi mi li pomogao?', 'Bi li pomogao mi?'],
    answer: 'Bi li mi pomogao?',
    tip: 'The auxiliary first, then li, then the other clitics.',
  },
  {
    mode: 'pitanje',
    q: 'Oni ____ kupili taj stan.',
    en: "They wouldn't buy that flat.",
    opts: ['ne bi', 'bi ne', 'nebi', 'ne bih'],
    answer: 'ne bi',
    tip: 'oni → bi, and ne stands before it as a separate word.',
  },
  {
    mode: 'pitanje',
    q: 'Ja ____ to radila.',
    en: "I wouldn't do that. (a woman speaking)",
    opts: ['ne bih', 'bih ne', 'nebih', 'ne sam'],
    answer: 'ne bih',
    tip: 'ne + bih, two words.',
  },
  {
    mode: 'pitanje',
    q: 'Koja je rečenica točna?',
    en: "Which sentence correctly says: we wouldn't come?",
    opts: ['Mi ne bismo došli.', 'Mi bismo ne došli.', 'Ne mi bismo došli.', 'Mi nebismo došli.'],
    answer: 'Mi ne bismo došli.',
    tip: 'ne goes right before bismo, as a separate word.',
  },
];
