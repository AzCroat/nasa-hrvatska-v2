// src/data/drills/infinitiveDaDrill.ts
//
// B1 INFINITIVE OR DA — the drill for the `infinitive-vs-da` lesson.
//
// `infinitivda` already exists, but it is C1 and tagged `register`, because at
// C1 the question is stylistic — which of two grammatical options sounds better
// in which register. At B1 it is not stylistic at all: it is a rule, and getting
// it wrong changes who is doing the action. *Želim doći* is I want to come;
// *želim da dođeš* is I want YOU to come. The C1 drill cannot teach that, and a
// B1 learner cannot open it anyway.
//
// Three modes:
//   sto      — da as "that", which English drops and Croatian never does
//   subjekt  — the test: same subject → infinitive, different subject → da
//   izbor    — the two jobs mixed, which is how they arrive in real sentences

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const INFINITIVE_DA_MODE_LABELS: Record<string, string> = {
  sto: '💬 Da = "that"',
  subjekt: '👥 Isti ili drugi subjekt',
  izbor: '🔀 Infinitiv ili da',
};

export const INFINITIVE_DA_DRILL_DATA: ModeDrillItem[] = [
  // ── sto ───────────────────────────────────────────────────────────────────
  {
    mode: 'sto',
    q: 'Mislim ____ je dobro.',
    en: 'I think (that) it is good.',
    opts: ['da', 'što', 'kako', 'ako'],
    answer: 'da',
    tip: 'English can drop "that"; Croatian never drops da.',
  },
  {
    mode: 'sto',
    q: 'Znam ____ dolaziš.',
    en: 'I know you are coming.',
    opts: ['da', 'što', 'ako', 'kad'],
    answer: 'da',
    tip: 'Znati takes a da-clause: znam da dolaziš.',
  },
  {
    mode: 'sto',
    q: 'Nadam se ____ ćeš doći.',
    en: 'I hope you will come.',
    opts: ['da', 'što', 'ako', 'kako'],
    answer: 'da',
    tip: 'Nadati se + da. The reflexive se does not change the pattern.',
  },
  {
    mode: 'sto',
    q: 'Rekao je ____ nema vremena.',
    en: 'He said he had no time.',
    opts: ['da', 'što', 'kako', 'ako'],
    answer: 'da',
    tip: 'Reći + da — and note the tense does not shift.',
  },
  {
    mode: 'sto',
    q: 'Koja je pogreška engleskih govornika?',
    en: 'What do English speakers get wrong?',
    opts: ['izostavljaju "da"', 'dodaju "da"', 'rabe infinitiv', 'mijenjaju vrijeme'],
    answer: 'izostavljaju "da"',
    tip: '"I think it is good" has no "that", so learners drop da. Croatian requires it.',
  },
  {
    mode: 'sto',
    q: 'Vidim ____ si umoran.',
    en: 'I can see you are tired.',
    opts: ['da', 'što', 'kako', 'ako'],
    answer: 'da',
    tip: 'Verbs of perception take da just like verbs of thinking.',
  },
  {
    mode: 'sto',
    q: 'Nije rekao ____ dolazi.',
    en: 'He did not say he was coming.',
    opts: ['da', 'što', 'ako', 'nego'],
    answer: 'da',
    tip: 'Negation does not change it: the clause still opens with da.',
  },
  {
    mode: 'sto',
    q: 'Poslije kojih glagola "da" je obavezno?',
    en: 'After which verbs is da compulsory?',
    opts: [
      'misliti, znati, reći, nadati se',
      'morati, htjeti, moći',
      'ići, doći, otići',
      'nakon svih glagola',
    ],
    answer: 'misliti, znati, reći, nadati se',
    tip: 'Verbs of thinking, knowing and saying. Modals take the infinitive instead.',
  },

  // ── subjekt ───────────────────────────────────────────────────────────────
  {
    mode: 'subjekt',
    q: 'Želim ____. (ja dolazim)',
    en: 'I want to come.',
    opts: ['doći', 'da dođem', 'da dođeš', 'dolazim'],
    answer: 'doći',
    tip: 'Same subject — I want, I come — so the plain infinitive.',
  },
  {
    mode: 'subjekt',
    q: 'Želim ____. (ti dolaziš)',
    en: 'I want you to come.',
    opts: ['da dođeš', 'doći', 'da dođem', 'dolaziš'],
    answer: 'da dođeš',
    tip: 'Different subject — I want, YOU come — so a da-clause. English uses "you to come".',
  },
  {
    mode: 'subjekt',
    q: 'Koji je test?',
    en: 'What is the test?',
    opts: [
      'isti subjekt → infinitiv',
      'prošlo vrijeme → infinitiv',
      'množina → da',
      'nema pravila',
    ],
    answer: 'isti subjekt → infinitiv',
    tip: 'Same subject → infinitive. Different subject → da + present. One test settles both.',
  },
  {
    mode: 'subjekt',
    q: 'Moram ____.',
    en: 'I have to work.',
    opts: ['raditi', 'da radim', 'radim', 'da radiš'],
    answer: 'raditi',
    tip: 'After a modal the subject cannot change, so the infinitive is the only option.',
  },
  {
    mode: 'subjekt',
    q: 'Tražim od tebe ____ mi pomogneš.',
    en: 'I am asking you to help me.',
    opts: ['da', 'što', 'kako', 'ako'],
    answer: 'da',
    tip: 'The helper is you, not me — different subject, so da.',
  },
  {
    mode: 'subjekt',
    q: 'Volim ____ knjige.',
    en: 'I like reading books.',
    opts: ['čitati', 'da čitam knjige', 'čitam', 'da čitaš'],
    answer: 'čitati',
    tip: 'Same subject: volim čitati.',
  },
  {
    mode: 'subjekt',
    q: 'Rekao mi je ____ dođem.',
    en: 'He told me to come.',
    opts: ['da', 'doći', 'kako', 'ako'],
    answer: 'da',
    tip: 'He said it, I come — different subjects, so da + present.',
  },
  {
    mode: 'subjekt',
    q: 'Koja rečenica znači "I want YOU to come"?',
    en: 'Which one is it?',
    opts: ['Želim da dođeš.', 'Želim doći.', 'Želim da dođem.', 'Želiš doći.'],
    answer: 'Želim da dođeš.',
    tip: 'The whole difference is one ending: dođeš, not dođem.',
  },

  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: 'Idem ____ kruh.',
    en: 'I am going to buy bread.',
    opts: ['kupiti', 'da kupim kruh', 'kupujem', 'da kupiš'],
    answer: 'kupiti',
    tip: 'Purpose after a verb of motion takes the bare infinitive: idem kupiti kruh.',
  },
  {
    mode: 'izbor',
    q: 'Mislim ____ ćemo stići na vrijeme.',
    en: 'I think we will arrive on time.',
    opts: ['da', 'stići', 'kako', 'ako'],
    answer: 'da',
    tip: 'Misliti always takes a clause, never an infinitive.',
  },
  {
    mode: 'izbor',
    q: 'Možeš li mi ____?',
    en: 'Can you help me?',
    opts: ['pomoći', 'da pomogneš', 'pomažeš', 'da pomognem'],
    answer: 'pomoći',
    tip: 'Modal + infinitive: možeš pomoći.',
  },
  {
    mode: 'izbor',
    q: 'Bojim se ____ neće doći.',
    en: 'I am afraid he will not come.',
    opts: ['da', 'doći', 'kako', 'ako'],
    answer: 'da',
    tip: 'Different subject — I fear, he comes — so a clause.',
  },
  {
    mode: 'izbor',
    q: 'Počeo je ____.',
    en: 'It started raining.',
    opts: ['padati', 'da pada', 'pada', 'da padne'],
    answer: 'padati',
    tip: 'Phase verbs (početi, prestati, nastaviti) take the infinitive.',
  },
  {
    mode: 'izbor',
    q: 'Nadam se ____ ćeš uspjeti.',
    en: 'I hope you will succeed.',
    opts: ['da', 'uspjeti', 'kako', 'ako'],
    answer: 'da',
    tip: 'You are the one succeeding, so the clause — and nadati se needs da anyway.',
  },
  {
    mode: 'izbor',
    q: 'Trebam ____ s njim.',
    en: 'I need to talk to him.',
    opts: ['razgovarati', 'da razgovaram', 'razgovaram', 'da razgovaraš'],
    answer: 'razgovarati',
    tip: 'Same subject: trebam razgovarati.',
  },
  {
    mode: 'izbor',
    q: 'Što odlučuje izbor?',
    en: 'What decides which one?',
    opts: [
      'mijenja li se subjekt',
      'je li rečenica duga',
      'koje je vrijeme',
      'je li glagol svršen',
    ],
    answer: 'mijenja li se subjekt',
    tip: 'Whether the subject changes. Everything else follows from that one question.',
  },
];
