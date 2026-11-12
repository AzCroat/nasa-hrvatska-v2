// src/data/drills/b2/iterativeConditionalDrill.ts
//
// B2 THE HABITUAL CONDITIONAL — the drill for the `iterative-conditional` lesson.
//
// The conditional of repeated past events. Every habit item carries a time word
// (uvijek, svaki put, nedjeljom, kad smo bili djeca) and every hypothesis item carries
// sutra, so no item depends on a reading the learner cannot see. Person is always
// fixed by the sentence or the English gloss. Distractors are wrong by person, by the
// place of the clitic, or by spelling bismo as two words.
//
// Three modes:
//   oblik     — the right form of the auxiliary or participle
//   znacenje  — habit or hypothesis
//   red       — the place of bi in the clause

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ITERATIVE_CONDITIONAL_MODE_LABELS: Record<string, string> = {
  oblik: '🧩 Oblik',
  znacenje: '🕰️ Značenje',
  red: '📍 Red riječi',
};

export const ITERATIVE_CONDITIONAL_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Kad smo bili djeca, ljeti ____ išli na more.',
    en: 'When we were children, we would go to the seaside in summer.',
    opts: ['bismo', 'bi', 'bih', 'biste'],
    answer: 'bismo',
    tip: 'smo shows the subject is mi: bismo.',
  },
  {
    mode: 'oblik',
    q: 'Kad bih došao kući, mama ____ već skuhala ručak.',
    en: 'Whenever I came home, Mum would already have cooked lunch.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'The subject of the second clause is mama: third person.',
  },
  {
    mode: 'oblik',
    q: 'Svaki put kad ____ je nazvao, bila bi sretna.',
    en: 'Every time I called her, she would be happy.',
    opts: ['bih', 'bi', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'First person singular: bih, before je.',
  },
  {
    mode: 'oblik',
    q: 'Nedjeljom ____ cijela obitelj ručala zajedno.',
    en: 'On Sundays the whole family would have lunch together.',
    opts: ['bi', 'bismo', 'biste', 'bih'],
    answer: 'bi',
    tip: 'obitelj is singular, third person.',
  },
  {
    mode: 'oblik',
    q: 'Kad ste živjeli na selu, često ____ išli u šumu.',
    en: 'When you lived in the countryside, you would often go to the woods.',
    opts: ['biste', 'bismo', 'bi', 'bih'],
    answer: 'biste',
    tip: 'ste shows the subject is vi: biste.',
  },
  {
    mode: 'oblik',
    q: 'Kad bi pala kiša, djeca ____ ostala kod kuće.',
    en: 'Whenever it rained, the children would stay at home.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'Third person: bi, singular and plural alike.',
  },
  {
    mode: 'oblik',
    q: 'Navečer bi djed ____ novine.',
    en: 'In the evening Grandpa would read the paper.',
    opts: ['čitao', 'čitala', 'čitali', 'čitam'],
    answer: 'čitao',
    tip: 'A masculine l-participle for djed.',
  },
  {
    mode: 'oblik',
    q: 'Kad bi baka pekla kolače, kuća bi ____ na cimet.',
    en: 'Whenever Grandma baked cakes, the house would smell of cinnamon.',
    opts: ['mirisala', 'mirisao', 'mirisali', 'miriše'],
    answer: 'mirisala',
    tip: 'kuća is feminine: mirisala.',
  },

  // ── znacenje ──────────────────────────────────────────────────────────────
  {
    mode: 'znacenje',
    q: 'Što znači "Ljeti bismo išli na more" u priči o djetinjstvu?',
    en: 'Choose the meaning.',
    opts: [
      'In summer we would go to the seaside.',
      'In summer we will go to the seaside.',
      'We want to go to the seaside.',
      'We went to the seaside once.',
    ],
    answer: 'In summer we would go to the seaside.',
    tip: 'In a story about the past, the conditional tells a habit.',
  },
  {
    mode: 'znacenje',
    q: 'Što znači "Kad bi tata došao s posla, uvijek bi popio kavu"?',
    en: 'Choose the meaning.',
    opts: [
      'Whenever Dad came home from work, he would always have a coffee.',
      'If Dad comes home from work, he will have a coffee.',
      'Dad came home and had a coffee once.',
      'Dad wants a coffee when he comes home.',
    ],
    answer: 'Whenever Dad came home from work, he would always have a coffee.',
    tip: 'uvijek with the conditional in both clauses: a repeated event.',
  },
  {
    mode: 'znacenje',
    q: 'Koja riječ pokazuje da je riječ o navici u prošlosti?',
    en: 'Which word signals a past habit?',
    opts: ['svaki put', 'sutra', 'možda', 'molim'],
    answer: 'svaki put',
    tip: 'Every time = repetition.',
  },
  {
    mode: 'znacenje',
    q: 'Koja rečenica opisuje naviku u prošlosti?',
    en: 'Which sentence describes a past habit?',
    opts: [
      'Nedjeljom bi djed rano ustao i otišao u ribolov.',
      'Kad bih sutra imao vremena, učio bih talijanski.',
      'Htio bih kavu, molim.',
      'Biste li mi pomogli?',
    ],
    answer: 'Nedjeljom bi djed rano ustao i otišao u ribolov.',
    tip: 'nedjeljom marks a habit; the others are a hypothesis and requests.',
  },
  {
    mode: 'znacenje',
    q: 'Koja rečenica opisuje naviku u prošlosti?',
    en: 'Which sentence describes a past habit?',
    opts: [
      'Kad sam bio dijete, svako jutro bih trčao do pekare.',
      'Kad biste sutra došli, bilo bi lijepo.',
      'Mogao bih vam pomoći.',
      'Volio bih živjeti na moru.',
    ],
    answer: 'Kad sam bio dijete, svako jutro bih trčao do pekare.',
    tip: 'kad sam bio dijete and svako jutro place it in a repeated past.',
  },
  {
    mode: 'znacenje',
    q: 'Koji izraz nedvosmisleno znači "whenever"?',
    en: 'Which expression has this meaning beyond doubt?',
    opts: ['kad god', 'sutra', 'ako', 'dok'],
    answer: 'kad god',
    tip: 'kad god makes the habit unmistakable.',
  },
  {
    mode: 'znacenje',
    q: 'Kako se još može reći "Ljeti bismo išli na more"?',
    en: 'The same meaning with a plain past tense.',
    opts: [
      'Ljeti smo išli na more.',
      'Ljeti ćemo ići na more.',
      'Ljeti idemo na more.',
      'Ljeti bismo išli na more sutra.',
    ],
    answer: 'Ljeti smo išli na more.',
    tip: 'The plain past of an imperfective verb tells the same habit.',
  },
  {
    mode: 'znacenje',
    q: 'Što znači "Djed je znao satima sjediti u vrtu"?',
    en: 'Choose the meaning.',
    opts: [
      'Grandpa would often sit in the garden for hours.',
      'Grandpa knew the garden very well.',
      'Grandpa will sit in the garden for hours.',
      'Grandpa wanted to sit in the garden.',
    ],
    answer: 'Grandpa would often sit in the garden for hours.',
    tip: 'znati + infinitive can tell a habit.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Whenever he came, he would bring flowers.',
    opts: [
      'Kad bi došao, donio bi cvijeće.',
      'Kad došao bi, donio bi cvijeće.',
      'Kad bi došao, bi donio cvijeće.',
      'Bi kad došao, donio bi cvijeće.',
    ],
    answer: 'Kad bi došao, donio bi cvijeće.',
    tip: 'bi takes the second place and never opens a clause.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Grandpa would tell us stories.',
    opts: [
      'Djed bi nam pričao priče.',
      'Djed nam bi pričao priče.',
      'Bi nam djed pričao priče.',
      'Djed bi pričao nam priče.',
    ],
    answer: 'Djed bi nam pričao priče.',
    tip: 'In the cluster the auxiliary bi comes before the pronoun nam.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Every time I saw him, I would greet him.',
    opts: [
      'Svaki put kad bih ga vidio, pozdravio bih ga.',
      'Svaki put kad ga bih vidio, pozdravio bih ga.',
      'Svaki put kad bih vidio ga, pozdravio bih ga.',
      'Svaki put kad bih ga vidio, bih ga pozdravio.',
    ],
    answer: 'Svaki put kad bih ga vidio, pozdravio bih ga.',
    tip: 'bih before ga, the cluster right after kad, and never at the start of a clause.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'We would sit in the café until midnight.',
    opts: [
      'Sjedili bismo u kafiću do ponoći.',
      'Bismo sjedili u kafiću do ponoći.',
      'Sjedili bi smo u kafiću do ponoći.',
      'Sjedili smo bi u kafiću do ponoći.',
    ],
    answer: 'Sjedili bismo u kafiću do ponoći.',
    tip: 'bismo is one word and cannot open the sentence.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Whenever it snowed, we would go sledging.',
    opts: [
      'Kad bi padao snijeg, išli bismo se sanjkati.',
      'Kad bi padao snijeg, išli bi smo se sanjkati.',
      'Kad padao bi snijeg, išli bismo se sanjkati.',
      'Kad bi padao snijeg, bismo išli se sanjkati.',
    ],
    answer: 'Kad bi padao snijeg, išli bismo se sanjkati.',
    tip: 'bi right after kad; bismo, one word, after the participle.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Mum would always buy us a bread roll.',
    opts: [
      'Mama bi nam uvijek kupila kiflu.',
      'Mama nam bi uvijek kupila kiflu.',
      'Mama bi uvijek nam kupila kiflu.',
      'Bi nam mama uvijek kupila kiflu.',
    ],
    answer: 'Mama bi nam uvijek kupila kiflu.',
    tip: 'The cluster bi nam stays together, in second place.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'On Saturdays you (plural) would go to the market.',
    opts: [
      'Subotom biste išli na tržnicu.',
      'Subotom bi ste išli na tržnicu.',
      'Biste subotom išli na tržnicu.',
      'Subotom išli ste bi na tržnicu.',
    ],
    answer: 'Subotom biste išli na tržnicu.',
    tip: 'biste is one word, in second place.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Whenever she was tired, she would go to bed early.',
    opts: [
      'Kad bi bila umorna, legla bi rano.',
      'Kad bila bi umorna, legla bi rano.',
      'Kad bi bila umorna, bi legla rano.',
      'Kad bi bila umorna, legao bi rano.',
    ],
    answer: 'Kad bi bila umorna, legla bi rano.',
    tip: 'bi in second place, and the participle agrees with "she".',
  },
];
