// ── Past-tense lesson data ────────────────────────────────────────────────────
//
// Extracted from PastTenseLessonScreen.tsx when the ink-token sweep took that file to
// 804 countable lines against the hard 800-line `max-lines` cap (`var(--ink-accent)` is
// ten characters longer than `#0e7490`, so Prettier wrapped attributes). THE CAP WAS NOT
// RAISED and no override was added — the same move that produced `writingPrompts.ts` and
// `blackHoleScreens.ts`.
//
// IT IS IN `lintCroatianText.mjs` TARGETS, and that is the load-bearing part of moving it:
// the parent was in TARGETS, so every Croatian string here was scanned. A data file that
// leaves a linted parent and does not join the list is a file everybody believes is linted
// and is not — the trap CLAUDE.md records for `lessons.js` and the writing curriculum.

// ── Paradigm data ─────────────────────────────────────────────────────────────
export const RADITI_PARADIGM = [
  { person: 'Ja', aux: 'sam', mForm: 'radio', fForm: 'radila', en: 'I worked' },
  { person: 'Ti', aux: 'si', mForm: 'radio', fForm: 'radila', en: 'you worked' },
  {
    person: 'On/Ona/Ono',
    aux: 'je',
    mForm: 'radio',
    fForm: 'radila',
    en: 'he/she worked',
    nForm: 'radilo',
  },
  { person: 'Mi', aux: 'smo', mForm: 'radili', fForm: 'radile', en: 'we worked' },
  { person: 'Vi', aux: 'ste', mForm: 'radili', fForm: 'radile', en: 'you (pl) worked' },
  {
    person: 'Oni/One/Ona',
    aux: 'su',
    mForm: 'radili',
    fForm: 'radile',
    en: 'they worked',
    nForm: 'radila',
  },
];

export const IRREGULAR_VERBS = [
  { inf: 'ići', en: 'to go', m: 'išao', f: 'išla', n: 'išlo', pl: 'išli' },
  { inf: 'doći', en: 'to come', m: 'došao', f: 'došla', n: 'došlo', pl: 'došli' },
  { inf: 'biti', en: 'to be', m: 'bio', f: 'bila', n: 'bilo', pl: 'bili' },
  { inf: 'htjeti', en: 'to want', m: 'htio', f: 'htjela', n: 'htjelo', pl: 'htjeli' },
  { inf: 'moći', en: 'to be able', m: 'mogao', f: 'mogla', n: 'moglo', pl: 'mogli' },
  { inf: 'reći', en: 'to say', m: 'rekao', f: 'rekla', n: 'reklo', pl: 'rekli' },
  { inf: 'vidjeti', en: 'to see', m: 'vidio', f: 'vidjela', n: 'vidjelo', pl: 'vidjeli' },
  { inf: 'naći', en: 'to find', m: 'našao', f: 'našla', n: 'našlo', pl: 'našli' },
];

export const EXAMPLES = [
  { hr: 'Juče sam bio u Splitu.', en: 'Yesterday I was in Split. (m)' },
  {
    hr: 'Ana je studirala na Filozofskom fakultetu.',
    en: 'Ana studied at the Faculty of Philosophy.',
  },
  { hr: 'Nismo razumjeli što je rekao.', en: "We didn't understand what he said." },
  { hr: 'Jesi li vidio utakmicu sinoć?', en: 'Did you watch the match last night? (m)' },
  { hr: 'Mama je skuhala ručak.', en: 'Mum cooked lunch.' },
  { hr: 'Nisu mogli doći na vjenčanje.', en: 'They could not come to the wedding.' },
  { hr: 'Svaki dan sam učio po sat vremena.', en: 'I studied an hour every day. (habitual, impf)' },
  {
    hr: 'Naučio sam sve riječi za ispit.',
    en: 'I learned all the words for the exam. (completed, perf)',
  },
  { hr: 'Vratio sam se kući kasno.', en: 'I returned home late. (reflexive: vratio sam se)' },
  { hr: 'Gdje ste bili na ljetovanju?', en: 'Where did you go on holiday?' },
];

// ── Quiz data ─────────────────────────────────────────────────────────────────
export const QUIZ_QS = [
  {
    type: 'participle',
    prompt: 'Ja (f) + pisati → ?',
    hint: 'pisati → pis- → pis-ala',
    answer: 'pisala',
    opts: ['pisala', 'pisao', 'pisali', 'pisalo'],
  },
  {
    type: 'aux',
    prompt: 'Which auxiliary goes with "Vi"?',
    hint: 'Auxiliary for 2nd person plural',
    answer: 'ste',
    opts: ['smo', 'ste', 'su', 'si'],
  },
  {
    type: 'participle',
    prompt: 'On + ići → ?',
    hint: 'ići is irregular: išao (m)',
    answer: 'išao',
    opts: ['išao', 'išla', 'išli', 'otišao'],
  },
  {
    type: 'negative',
    prompt: '"I (m) didn\'t work" — negative past of ja + raditi',
    hint: 'Negative auxiliary: nisam',
    answer: 'Nisam radio.',
    opts: ['Nisam radio.', 'Ne sam radio.', 'Sam ne radio.', 'Nismo radio.'],
  },
  {
    type: 'participle',
    prompt: 'One (f pl) + doći → ?',
    hint: 'doći is irregular; feminine plural → došle',
    answer: 'došle',
    opts: ['došle', 'došla', 'došli', 'doći'],
  },
  {
    type: 'aux',
    prompt: 'Which auxiliary goes with "Ona"?',
    hint: '3rd person singular auxiliary',
    answer: 'je',
    opts: ['je', 'si', 'su', 'smo'],
  },
  {
    type: 'aspect',
    prompt: 'Which sentence describes a COMPLETED action?',
    hint: 'Perfective = completed. Imperfective = habitual/ongoing.',
    answer: 'Naučio sam lekciju.',
    opts: [
      'Svaki dan sam učio.',
      'Naučio sam lekciju.',
      'Učio sam dok je spavao.',
      'Uvijek sam učio kasno.',
    ],
  },
  {
    type: 'participle',
    prompt: 'Ja (m) + moći → ?',
    hint: 'moći irregular: mogao (m)',
    answer: 'mogao',
    opts: ['mogao', 'mogla', 'moći', 'možao'],
  },
  {
    type: 'negative',
    prompt: '"She didn\'t come" — negative past of ona + doći',
    hint: 'Negative auxiliary for 3rd sg: nije',
    answer: 'Nije došla.',
    opts: ['Nije došla.', 'Nisam došla.', 'Ne je došla.', 'Nije doći.'],
  },
  {
    type: 'participle',
    prompt: 'Mi (mixed group) + vidjeti → ?',
    hint: 'Mixed group uses masculine plural: vidjeli',
    answer: 'vidjeli',
    opts: ['vidjeli', 'vidjele', 'vidjela', 'vidio'],
  },
  {
    type: 'aspect',
    prompt: 'Which sentence describes a HABITUAL past action?',
    hint: 'Imperfective verb used habitually',
    answer: 'Svaki dan smo pili kavu.',
    opts: [
      'Popili smo kavu.',
      'Kava je bila dobra.',
      'Svaki dan smo pili kavu.',
      'Popio sam kavu odmah.',
    ],
  },
  {
    type: 'aux',
    prompt: '"Oni su išli" — what is the correct auxiliary?',
    hint: '3rd person plural auxiliary',
    answer: 'su',
    opts: ['su', 'smo', 'ste', 'je'],
  },
];

export interface QuizQuestion {
  type: string;
  prompt: string;
  hint: string;
  answer: string;
  opts: string[];
}
