// src/data/drills/a1/pastStoryDrill.ts
//
// A1 TELLING A STORY — the drill for the `past-story` lesson (masterOrder 59).
//
// A story is a row of past sentences joined by sequence words (prvo, onda, poslije
// toga, na kraju). Two things go wrong when learners string them together: the
// auxiliary drifts out of second place once a sequence word takes first place, and
// the participle stops agreeing with the teller halfway through.
//
// Three modes:
//   redoslijed — the sequence and time words
//   red        — sam / smo / su in second place
//   prica      — one teller, one set of endings

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PAST_STORY_MODE_LABELS: Record<string, string> = {
  redoslijed: '🔢 Prvo, onda…',
  red: '📍 Drugo mjesto',
  prica: '📖 Priča',
};

export const PAST_STORY_DRILL_DATA: ModeDrillItem[] = [
  // ── redoslijed ────────────────────────────────────────────────────────────
  {
    mode: 'redoslijed',
    q: '____ sam pila kavu, onda sam išla na posao.',
    en: 'First I drank coffee, then I went to work.',
    opts: ['Prvo', 'Na kraju', 'Kasnije', 'Poslije toga'],
    answer: 'Prvo',
    tip: 'prvo opens a sequence.',
  },
  {
    mode: 'redoslijed',
    q: '____ smo bili umorni.',
    en: 'In the end we were tired.',
    opts: ['Na kraju', 'Prvo', 'Ujutro', 'Onda'],
    answer: 'Na kraju',
    tip: 'na kraju closes a story.',
  },
  {
    mode: 'redoslijed',
    q: 'Prvo sam doručkovao, ____ sam išao na posao.',
    en: 'First I had breakfast, then I went to work.',
    opts: ['onda', 'prvo', 'jučer', 'na kraju'],
    answer: 'onda',
    tip: 'onda — then, the next step.',
  },
  {
    mode: 'redoslijed',
    q: 'Poslije ____ smo gledali film.',
    en: 'After that we watched a film.',
    opts: ['toga', 'to', 'tome', 'tim'],
    answer: 'toga',
    tip: 'Learn poslije toga as one block.',
  },
  {
    mode: 'redoslijed',
    q: '____ je došao Marko.',
    en: 'Later Marko came.',
    opts: ['Kasnije', 'Prvo', 'Sutra', 'Ujutro'],
    answer: 'Kasnije',
    tip: 'kasnije — later.',
  },
  {
    mode: 'redoslijed',
    q: 'Jučer ____ sam pio kavu.',
    en: 'Yesterday morning I drank coffee.',
    opts: ['ujutro', 'navečer', 'popodne', 'sutra'],
    answer: 'ujutro',
    tip: 'ujutro — in the morning. Jučer ujutro counts as one place.',
  },
  {
    mode: 'redoslijed',
    q: '____ smo gledali film.',
    en: 'In the evening we watched a film.',
    opts: ['Navečer', 'Ujutro', 'Prvo', 'Sutra'],
    answer: 'Navečer',
    tip: 'navečer — in the evening.',
  },
  {
    mode: 'redoslijed',
    q: 'Što si radio ____?',
    en: 'What did you do yesterday?',
    opts: ['jučer', 'sutra', 'danas', 'navečer'],
    answer: 'jučer',
    tip: 'jučer — yesterday; sutra is tomorrow.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Prvo ____ pila kavu.',
    en: 'First I drank coffee. (a woman speaking)',
    opts: ['sam', 'je', 'smo', 'su'],
    answer: 'sam',
    tip: 'I → sam, straight after the first word.',
  },
  {
    mode: 'red',
    q: 'Onda ____ išli u park.',
    en: 'Then we went to the park.',
    opts: ['smo', 'sam', 'ste', 'su'],
    answer: 'smo',
    tip: 'we → smo.',
  },
  {
    mode: 'red',
    q: 'Poslije toga ____ gledali film.',
    en: 'After that they watched a film.',
    opts: ['su', 'smo', 'je', 'sam'],
    answer: 'su',
    tip: 'they → su, after the whole block poslije toga.',
  },
  {
    mode: 'red',
    q: 'Kasnije ____ došla Ana.',
    en: 'Later Ana came.',
    opts: ['je', 'su', 'sam', 'si'],
    answer: 'je',
    tip: 'Ana is one person: je.',
  },
  {
    mode: 'red',
    q: 'Što ____ radio jučer?',
    en: 'What did you do yesterday? (to a man)',
    opts: ['si', 'sam', 'je', 'ste'],
    answer: 'si',
    tip: 'you (a friend) → si, after the question word.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'Then I went to the park. (a man speaking)',
    opts: [
      'Onda sam išao u park.',
      'Sam onda išao u park.',
      'Onda išao u park sam.',
      'Onda išao sam park u.',
    ],
    answer: 'Onda sam išao u park.',
    tip: 'The auxiliary sits in second place, right after onda.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'In the end we were tired.',
    opts: [
      'Na kraju smo bili umorni.',
      'Smo na kraju bili umorni.',
      'Na smo kraju bili umorni.',
      'Na kraju bili umorni smo.',
    ],
    answer: 'Na kraju smo bili umorni.',
    tip: 'Na kraju is one block; smo comes after both words.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'After that I read. (a man speaking)',
    opts: [
      'Poslije toga sam čitao.',
      'Poslije sam toga čitao.',
      'Sam poslije toga čitao.',
      'Toga poslije sam čitao.',
    ],
    answer: 'Poslije toga sam čitao.',
    tip: 'Do not split poslije toga; sam follows the whole block.',
  },

  // ── prica ─────────────────────────────────────────────────────────────────
  {
    mode: 'prica',
    q: 'Ana: "U subotu sam ____ rano."',
    en: 'On Saturday I got up early.',
    opts: ['ustala', 'ustao', 'ustali', 'ustale'],
    answer: 'ustala',
    tip: 'Ana is one woman: -la.',
  },
  {
    mode: 'prica',
    q: 'Marko: "Navečer sam bio ____."',
    en: 'In the evening I was tired.',
    opts: ['umoran', 'umorna', 'umorni', 'umorno'],
    answer: 'umoran',
    tip: 'The adjective agrees with Marko, too.',
  },
  {
    mode: 'prica',
    q: 'Ana: "Na kraju sam bila ____."',
    en: 'In the end I was tired.',
    opts: ['umorna', 'umoran', 'umorni', 'umorne'],
    answer: 'umorna',
    tip: 'Ana: bila … umorna.',
  },
  {
    mode: 'prica',
    q: 'Marko i ja smo ____ pizzu.',
    en: 'Marko and I ate pizza.',
    opts: ['jeli', 'jele', 'jela', 'jeo'],
    answer: 'jeli',
    tip: 'A mixed group: -li.',
  },
  {
    mode: 'prica',
    q: 'Ana i Maja su ____ u park.',
    en: 'Ana and Maja went to the park.',
    opts: ['išle', 'išli', 'išla', 'išao'],
    answer: 'išle',
    tip: 'Only women: -le.',
  },
  {
    mode: 'prica',
    q: 'Ustao sam i ____.',
    en: 'I got up and had breakfast. (a man speaking)',
    opts: ['doručkovao', 'doručkovala', 'doručkovali', 'doručkujem'],
    answer: 'doručkovao',
    tip: 'The same man and the same auxiliary — said once, after ustao.',
  },
  {
    mode: 'prica',
    q: 'Kupila je kruh i ____ kući.',
    en: 'She bought bread and went home.',
    opts: ['išla', 'išao', 'išli', 'ide'],
    answer: 'išla',
    tip: 'The same woman all the way through: kupila … išla.',
  },
  {
    mode: 'prica',
    q: 'Jesi li bio na moru? — Nisam, ____ sam u Zagrebu.',
    en: 'Were you at the seaside? — No, I was in Zagreb. (a man)',
    opts: ['bio', 'bila', 'bili', 'biti'],
    answer: 'bio',
    tip: 'A man answering: bio.',
  },
];
