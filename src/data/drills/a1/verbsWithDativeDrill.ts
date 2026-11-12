// src/data/drills/a1/verbsWithDativeDrill.ts
//
// A1 VERBS WITH THE DATIVE — the drill for the `verbs-with-dative` lesson.
//
// English "help him", "believe her", "answer the teacher" look like plain objects,
// so the learner reaches for the accusative. In Croatian the person RECEIVES the
// help, the trust, the answer: pomagati, vjerovati and odgovarati take the dative.
// Then sviđati se turns the sentence round: the thing liked is the subject, the
// person is in the dative, and the dative clitic comes before se.
//
// Three modes:
//   osoba   — the person in the dative after pomagati, vjerovati, odgovarati
//   svida   — sviđati se: agreement with the thing, and the order mi se
//   oblici  — the present forms (pomažem, vjerujem, odgovaram)

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_WITH_DATIVE_MODE_LABELS: Record<string, string> = {
  osoba: '🤝 Kome?',
  svida: '❤️ Sviđa mi se',
  oblici: '🔤 Oblici',
};

export const VERBS_WITH_DATIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── osoba ─────────────────────────────────────────────────────────────────
  {
    mode: 'osoba',
    q: 'Pomažem ____.',
    en: 'I help my mum.',
    opts: ['mamu', 'mami', 'mama', 'mamom'],
    answer: 'mami',
    tip: 'The person helped receives the help: dative. Feminine -a → -i.',
  },
  {
    mode: 'osoba',
    q: 'Vjerujem ____.',
    en: 'I trust my brother.',
    opts: ['brata', 'brat', 'bratu', 'bratom'],
    answer: 'bratu',
    tip: 'vjerovati takes the dative: masculine nouns add -u.',
  },
  {
    mode: 'osoba',
    q: 'Učenici odgovaraju ____.',
    en: 'The pupils answer the teacher (a woman).',
    opts: ['profesoricu', 'profesorica', 'profesoricom', 'profesorici'],
    answer: 'profesorici',
    tip: 'odgovarati takes the dative for the person answered.',
  },
  {
    mode: 'osoba',
    q: 'Zašto ____ ne vjeruješ?',
    en: 'Why do you not believe me?',
    opts: ['me', 'mi', 'mene', 'ja'],
    answer: 'mi',
    tip: 'The short dative for "to me" is mi. Me is the accusative.',
  },
  {
    mode: 'osoba',
    q: 'Ana ____ pomaže svaki dan.',
    en: 'Ana helps him every day.',
    opts: ['ga', 'mu', 'njega', 'on'],
    answer: 'mu',
    tip: 'The dative "to him" is mu; ga is the accusative.',
  },
  {
    mode: 'osoba',
    q: 'Ne odgovara ____.',
    en: 'She is not answering us.',
    opts: ['nas', 'mi', 'nam', 'naš'],
    answer: 'nam',
    tip: 'The short dative for "to us" is nam. Nas is the accusative.',
  },
  {
    mode: 'osoba',
    q: 'Pomažemo ____ u vrtu.',
    en: 'We help the neighbour in the garden.',
    opts: ['susjeda', 'susjedu', 'susjed', 'susjedom'],
    answer: 'susjedu',
    tip: 'Dative masculine -u. Susjeda is the accusative, the form after vidim.',
  },
  {
    mode: 'osoba',
    q: 'Možete li ____ pomoći?',
    en: 'Can you help me?',
    opts: ['me', 'mi', 'mene', 'moj'],
    answer: 'mi',
    tip: 'pomoći takes the dative too: Možete li mi pomoći?',
  },

  // ── svida ─────────────────────────────────────────────────────────────────
  {
    mode: 'svida',
    q: '____ mi se ovaj grad.',
    en: 'I like this city.',
    opts: ['Sviđam', 'Sviđaju', 'Sviđa', 'Sviđaš'],
    answer: 'Sviđa',
    tip: 'One city is the subject, so the verb is third person singular.',
  },
  {
    mode: 'svida',
    q: '____ mi se ove cipele.',
    en: 'I like these shoes.',
    opts: ['Sviđa', 'Sviđaju', 'Sviđam', 'Sviđamo'],
    answer: 'Sviđaju',
    tip: 'Several shoes are the subject, so the verb is plural.',
  },
  {
    mode: 'svida',
    q: 'Sviđa ____ Zagreb.',
    en: 'I like Zagreb.',
    opts: ['se mi', 'mi se', 'me se', 'se me'],
    answer: 'mi se',
    tip: 'The dative comes first, se right after it.',
  },
  {
    mode: 'svida',
    q: 'Sviđa ____ se ova kuća.',
    en: 'She likes this house.',
    opts: ['je', 'nju', 'joj', 'ona'],
    answer: 'joj',
    tip: 'The person who likes is in the dative: joj.',
  },
  {
    mode: 'svida',
    q: 'Sviđa ____ se Split?',
    en: 'Do you like Split?',
    opts: ['ti li', 'li ti', 'se li', 'li se'],
    answer: 'li ti',
    tip: 'li comes first, then the dative, then se.',
  },
  {
    mode: 'svida',
    q: 'Ivanu ____ ne sviđa kava.',
    en: 'Ivan does not like coffee.',
    opts: ['je', 'mu', 'se', 'ga'],
    answer: 'se',
    tip: 'Ivanu already says "to Ivan"; the verb still needs its se.',
  },
  {
    mode: 'svida',
    q: 'Sviđaju ____ se ovi filmovi.',
    en: 'We like these films.',
    opts: ['nas', 'nam', 'mi', 'naši'],
    answer: 'nam',
    tip: 'To us is the dative nam.',
  },
  {
    mode: 'svida',
    q: 'Kako vam se ____ Hrvatska?',
    en: 'How do you like Croatia?',
    opts: ['sviđate', 'sviđaju', 'sviđamo', 'sviđa'],
    answer: 'sviđa',
    tip: 'Croatia is the subject — one country, so third person singular.',
  },

  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja ____ mami.',
    en: 'I help my mum.',
    opts: ['pomagam', 'pomažem', 'pomaže', 'pomažu'],
    answer: 'pomažem',
    tip: 'pomagati turns g into ž in the present: pomažem.',
  },
  {
    mode: 'oblici',
    q: 'Djeca ____ baki.',
    en: 'The children help their grandmother.',
    opts: ['pomažu', 'pomagaju', 'pomaže', 'pomažemo'],
    answer: 'pomažu',
    tip: 'Third person plural: pomažu.',
  },
  {
    mode: 'oblici',
    q: 'Ja ti ____.',
    en: 'I believe you.',
    opts: ['vjerovam', 'vjeruje', 'vjerujem', 'vjeruju'],
    answer: 'vjerujem',
    tip: 'An -ovati verb: -ova- becomes -uj-.',
  },
  {
    mode: 'oblici',
    q: 'Vi mi ne ____.',
    en: 'You (plural) do not trust me.',
    opts: ['vjerujete', 'vjerujemo', 'vjerovate', 'vjeruju'],
    answer: 'vjerujete',
    tip: 'vi → vjerujete.',
  },
  {
    mode: 'oblici',
    q: 'Zašto mi ne ____?',
    en: 'Why are you not answering me (to a friend)?',
    opts: ['odgovaram', 'odgovara', 'odgovarate', 'odgovaraš'],
    answer: 'odgovaraš',
    tip: 'A friend is ti: odgovaraš.',
  },
  {
    mode: 'oblici',
    q: 'Mi ____ susjedi.',
    en: 'We help the neighbour (a woman).',
    opts: ['pomažemo', 'pomagamo', 'pomažete', 'pomažu'],
    answer: 'pomažemo',
    tip: 'mi → pomažemo, with ž.',
  },
  {
    mode: 'oblici',
    q: 'Koji glagol znači "to trust"?',
    en: 'Which verb means to trust?',
    opts: ['vjerovati', 'pomagati', 'odgovarati', 'sviđati se'],
    answer: 'vjerovati',
    tip: 'vjerovati — to believe, to trust. It takes the dative.',
  },
  {
    mode: 'oblici',
    q: 'Odgovara li ____ u pet?',
    en: 'Does five o’clock suit you (formal)?',
    opts: ['vas', 'vam', 'vi', 'vaš'],
    answer: 'vam',
    tip: 'odgovarati also means to suit — and it still takes the dative.',
  },
];
