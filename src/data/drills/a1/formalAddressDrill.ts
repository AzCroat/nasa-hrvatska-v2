// src/data/drills/a1/formalAddressDrill.ts
//
// A1 FORMAL ADDRESS — the drill for the `formal-address` lesson.
//
// ti for family and friends, Vi for everyone you treat with respect. Vi takes the plural
// verb; people are addressed in the vocative (gospodine, gospođo); letters open with
// Poštovani / Poštovana and close with S poštovanjem, with the courtesy capital Vi.
//
// Three modes:
//   tiVi    — choosing ti or Vi and the forms that follow
//   vokativ — addressing people
//   pismo   — the polite letter

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FORMAL_ADDRESS_MODE_LABELS: Record<string, string> = {
  tiVi: '🤝 Ti ili Vi',
  vokativ: '📣 Oslovljavanje',
  pismo: '✉️ Pismo',
};

export const FORMAL_ADDRESS_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'tiVi',
    q: 'Kako ____?',
    en: 'How are you? (to your boss)',
    opts: ['ste', 'si', 'je', 'smo'],
    answer: 'ste',
    tip: 'Vi takes the plural verb.',
  },
  {
    mode: 'tiVi',
    q: 'Odakle ____?',
    en: 'Where are you from? (to a friend)',
    opts: ['si', 'ste', 'je', 'su'],
    answer: 'si',
    tip: 'A friend gets ti.',
  },
  {
    mode: 'tiVi',
    q: '____ li engleski?',
    en: 'Do you speak English? (to a stranger)',
    opts: ['Govorite', 'Govoriš', 'Govori', 'Govorimo'],
    answer: 'Govorite',
    tip: 'A stranger gets the vi form.',
  },
  {
    mode: 'tiVi',
    q: 'Hvala ____ na pomoći.',
    en: 'Thank you for your help. (to a stranger)',
    opts: ['vam', 'ti', 'vas', 'te'],
    answer: 'vam',
    tip: 'The polite dative.',
  },
  {
    mode: 'tiVi',
    q: '____, sjednite.',
    en: 'Here you are, sit down. (polite)',
    opts: ['Izvolite', 'Izvoli', 'Izvolim', 'Izvolio'],
    answer: 'Izvolite',
    tip: 'The polite -te form.',
  },
  {
    mode: 'tiVi',
    q: 'Je li ovo ____ torba?',
    en: 'Is this your bag? (to an older lady)',
    opts: ['vaša', 'tvoja', 'vaš', 'tvoj'],
    answer: 'vaša',
    tip: 'Polite, and feminine to match torba.',
  },
  {
    mode: 'tiVi',
    q: 'Možete li mi ____?',
    en: 'Could you help me?',
    opts: ['pomoći', 'pomogneš', 'pomozi', 'pomažeš'],
    answer: 'pomoći',
    tip: 'After možete, the infinitive.',
  },
  {
    mode: 'tiVi',
    q: 'Koga obično oslovljavamo s "ti"?',
    en: 'Whom do we usually address informally?',
    opts: ['rođaka', 'liječnika', 'policajca', 'konobara'],
    answer: 'rođaka',
    tip: 'Family and friends get ti.',
  },
  {
    mode: 'vokativ',
    q: 'Dobar dan, ____ Kovač.',
    en: 'Good afternoon, Mrs Kovač.',
    opts: ['gospođo', 'gospođa', 'gospođu', 'gospođi'],
    answer: 'gospođo',
    tip: 'The vocative; the surname stays.',
  },
  {
    mode: 'vokativ',
    q: 'Oprostite, ____, gdje je kolodvor?',
    en: 'Excuse me, sir, where is the station?',
    opts: ['gospodine', 'gospodin', 'gospodina', 'gospodinu'],
    answer: 'gospodine',
    tip: 'The vocative of gospodin.',
  },
  {
    mode: 'vokativ',
    q: '____, je li ovo vaše?',
    en: 'Miss, is this yours?',
    opts: ['Gospođice', 'Gospođica', 'Gospođicu', 'Gospođici'],
    answer: 'Gospođice',
    tip: 'The vocative of gospođica.',
  },
  {
    mode: 'vokativ',
    q: 'Hvala, ____.',
    en: 'Thank you, professor.',
    opts: ['profesore', 'profesor', 'profesora', 'profesoru'],
    answer: 'profesore',
    tip: 'The vocative adds -e.',
  },
  {
    mode: 'vokativ',
    q: 'Izvolite, ____.',
    en: 'Here you are, madam.',
    opts: ['gospođo', 'gospođa', 'gospođe', 'gospođom'],
    answer: 'gospođo',
    tip: 'The vocative of gospođa.',
  },
  {
    mode: 'vokativ',
    q: 'Ženska prezimena se u vokativu ____.',
    en: "Women's surnames in the vocative…",
    opts: ['ne mijenjaju', 'mijenjaju u -e', 'mijenjaju u -o', 'mijenjaju u -u'],
    answer: 'ne mijenjaju',
    tip: 'Gospođo Kovač — the surname stays.',
  },
  {
    mode: 'vokativ',
    q: 'Ne poznajete ovog čovjeka. Kako ćete ga osloviti?',
    en: 'You do not know this man. How do you address him?',
    opts: ['gospodine', 'dečko', 'stari', 'mali'],
    answer: 'gospodine',
    tip: 'The respectful form for a stranger.',
  },
  {
    mode: 'vokativ',
    q: 'Doviđenja, ____ Babić!',
    en: 'Goodbye, Mrs Babić!',
    opts: ['gospođo', 'gospođa', 'gospođe', 'gospođi'],
    answer: 'gospođo',
    tip: "The vocative; a woman's surname does not change.",
  },
  {
    mode: 'pismo',
    q: '____ gospođo Kovač,',
    en: 'Dear Mrs Kovač, (a formal letter)',
    opts: ['Poštovana', 'Poštovani', 'Poštovano', 'Poštovanu'],
    answer: 'Poštovana',
    tip: 'Poštovana agrees with a woman.',
  },
  {
    mode: 'pismo',
    q: '____ gospodine,',
    en: 'Dear Sir, (a formal letter)',
    opts: ['Poštovani', 'Poštovana', 'Poštovano', 'Poštovane'],
    answer: 'Poštovani',
    tip: 'Poštovani agrees with a man.',
  },
  {
    mode: 'pismo',
    q: 'Zahvaljujem ____ na odgovoru.',
    en: 'Thank you for your reply. (in a letter)',
    opts: ['Vam', 'Vas', 'Ti', 'Te'],
    answer: 'Vam',
    tip: 'The dative, with the courtesy capital.',
  },
  {
    mode: 'pismo',
    q: '____ poštovanjem,',
    en: 'Yours sincerely,',
    opts: ['S', 'Sa', 'Z', 'U'],
    answer: 'S',
    tip: 'S before most consonants; sa only before s, š, z, ž.',
  },
  {
    mode: 'pismo',
    q: 'Molim ____ za pomoć.',
    en: 'I am asking you for help. (in a letter)',
    opts: ['Vas', 'Vam', 'Vaš', 'Ti'],
    answer: 'Vas',
    tip: 'Moliti takes the accusative: Vas.',
  },
  {
    mode: 'pismo',
    q: 'Šaljem ____ dokumente u prilogu.',
    en: 'I am sending you the documents attached.',
    opts: ['Vam', 'Vas', 'Ti', 'Te'],
    answer: 'Vam',
    tip: '"To you" is the dative.',
  },
  {
    mode: 'pismo',
    q: 'Koji je završetak službenog pisma?',
    en: 'Which is the closing of a formal letter?',
    opts: ['S poštovanjem', 'Pusa', 'Vidimo se', 'Bog'],
    answer: 'S poštovanjem',
    tip: 'S poštovanjem, then your name.',
  },
  {
    mode: 'pismo',
    q: 'U pismu se "Vi" često piše velikim slovom iz ____.',
    en: 'In letters the polite you is often capitalised out of…',
    opts: ['poštovanja', 'navike', 'pogreške', 'žurbe'],
    answer: 'poštovanja',
    tip: 'The capital is a courtesy, a mark of respect.',
  },
];
