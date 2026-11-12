// src/data/drills/a1/futurePlansDrill.ts
//
// A1 MAKING PLANS — the drill for the `future-plans` lesson (masterOrder 62).
//
// The future is ću + infinitive, and the whole difficulty is where ću stands. It
// wants second place: with the verb first, a -ti infinitive drops its -i (radit ću);
// with anything else first, the infinitive is written in full (sutra ću raditi). A
// -ći verb never shortens (ići ću), and the negative neću is a full word that may
// open a sentence.
//
// Three modes:
//   kratko  — short form or full form
//   mjesto  — the right ću, in the right place
//   planovi — plans, fixed plans in the present, and neću

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FUTURE_PLANS_MODE_LABELS: Record<string, string> = {
  kratko: '✂️ Radit ću',
  mjesto: '📍 Gdje je ću?',
  planovi: '🗓️ Planovi',
};

export const FUTURE_PLANS_DRILL_DATA: ModeDrillItem[] = [
  // ── kratko ────────────────────────────────────────────────────────────────
  {
    mode: 'kratko',
    q: 'Which sentence is correct?',
    en: 'I will work tomorrow.',
    opts: ['Radit ću sutra.', 'Raditi ću sutra.', 'Radim ću sutra.', 'Ću raditi sutra.'],
    answer: 'Radit ću sutra.',
    tip: 'Verb first: the -i drops, and ću is written as a separate word.',
  },
  {
    mode: 'kratko',
    q: '____ ćemo film.',
    en: 'We will watch a film.',
    opts: ['Gledat', 'Gledati', 'Gleda', 'Gledamo'],
    answer: 'Gledat',
    tip: 'gledati drops its -i when ćemo follows it.',
  },
  {
    mode: 'kratko',
    q: '____ ću na more.',
    en: 'I will go to the seaside.',
    opts: ['Ići', 'Ić', 'Ićit', 'Idem'],
    answer: 'Ići',
    tip: 'A -ći verb never shortens.',
  },
  {
    mode: 'kratko',
    q: '____ ćemo u subotu.',
    en: 'We will come on Saturday.',
    opts: ['Doći', 'Doć', 'Doćit', 'Dođemo'],
    answer: 'Doći',
    tip: 'doći is a -ći verb: it keeps its whole form.',
  },
  {
    mode: 'kratko',
    q: '____ ću hrvatski.',
    en: 'I will learn Croatian.',
    opts: ['Učit', 'Učiti', 'Uči', 'Učim'],
    answer: 'Učit',
    tip: 'učiti → učit ću with the verb first.',
  },
  {
    mode: 'kratko',
    q: 'Sutra ću ____.',
    en: 'Tomorrow I will work.',
    opts: ['raditi', 'radit', 'radim', 'radio'],
    answer: 'raditi',
    tip: 'Ću already stands second after sutra, so the verb is written in full.',
  },
  {
    mode: 'kratko',
    q: '____ će u Split.',
    en: 'They will travel to Split.',
    opts: ['Putovat', 'Putovati', 'Putuju', 'Putovali'],
    answer: 'Putovat',
    tip: 'putovati → putovat će with the verb first.',
  },
  {
    mode: 'kratko',
    q: 'Ja ću ____ večeru.',
    en: 'I will cook dinner.',
    opts: ['kuhati', 'kuhat', 'kuham', 'kuhao'],
    answer: 'kuhati',
    tip: 'After ja ću the infinitive is written in full.',
  },

  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Što ____ raditi sutra?',
    en: 'What will you do tomorrow? (to a friend)',
    opts: ['ćeš', 'ću', 'ćemo', 'će'],
    answer: 'ćeš',
    tip: 'ti → ćeš, after the question word.',
  },
  {
    mode: 'mjesto',
    q: 'Sutra ____ ići u kino.',
    en: 'Tomorrow we will go to the cinema.',
    opts: ['ćemo', 'ćete', 'će', 'ću'],
    answer: 'ćemo',
    tip: 'mi → ćemo.',
  },
  {
    mode: 'mjesto',
    q: 'Moja sestra ____ doći u kolovozu.',
    en: 'My sister will come in August.',
    opts: ['će', 'ću', 'ćeš', 'ćemo'],
    answer: 'će',
    tip: 'one other person → će.',
  },
  {
    mode: 'mjesto',
    q: 'Što ____ raditi za vikend?',
    en: 'What will you all do at the weekend?',
    opts: ['ćete', 'ćeš', 'ćemo', 'ću'],
    answer: 'ćete',
    tip: 'you, more than one → ćete.',
  },
  {
    mode: 'mjesto',
    q: 'Which sentence is correct?',
    en: 'Tomorrow I will work.',
    opts: ['Sutra ću raditi.', 'Ću sutra raditi.', 'Sutra raditi ću.', 'Sutra ću radit ću.'],
    answer: 'Sutra ću raditi.',
    tip: 'Ću in second place, then the full infinitive.',
  },
  {
    mode: 'mjesto',
    q: 'Which sentence is correct?',
    en: 'I will cook.',
    opts: ['Ja ću kuhati.', 'Ću ja kuhati.', 'Ja ću kuhat.', 'Ja kuhati ću.'],
    answer: 'Ja ću kuhati.',
    tip: 'Ja first, ću second, the full verb after it.',
  },
  {
    mode: 'mjesto',
    q: 'Onda ____ ići na Hvar.',
    en: 'Then we will go to Hvar.',
    opts: ['ćemo', 'smo', 'ćete', 'će'],
    answer: 'ćemo',
    tip: 'The future needs ćemo; smo belongs to the past.',
  },
  {
    mode: 'mjesto',
    q: 'Svaki dan ____ plivati u moru.',
    en: 'Every day I will swim in the sea.',
    opts: ['ću', 'sam', 'ćeš', 'će'],
    answer: 'ću',
    tip: 'ja → ću, after svaki dan.',
  },

  // ── planovi ───────────────────────────────────────────────────────────────
  {
    mode: 'planovi',
    q: '____ raditi sutra.',
    en: 'I will not work tomorrow.',
    opts: ['Neću', 'Ne ću', 'Nisam', 'Ne'],
    answer: 'Neću',
    tip: 'One word, neću — and it may open the sentence.',
  },
  {
    mode: 'planovi',
    q: '____ ići na more.',
    en: 'We will not go to the seaside.',
    opts: ['Nećemo', 'Ne ćemo', 'Nismo', 'Nemamo'],
    answer: 'Nećemo',
    tip: 'nećemo is one word.',
  },
  {
    mode: 'planovi',
    q: 'Sutra ____ na more.',
    en: 'Tomorrow I am going to the seaside. (a fixed plan)',
    opts: ['idem', 'išao', 'ići', 'idu'],
    answer: 'idem',
    tip: 'A fixed plan can use the present, like English "I am going".',
  },
  {
    mode: 'planovi',
    q: 'Što ćeš raditi za ____?',
    en: 'What will you do at the weekend?',
    opts: ['vikend', 'vikendu', 'vikenda', 'vikendom'],
    answer: 'vikend',
    tip: 'za + accusative; vikend does not change.',
  },
  {
    mode: 'planovi',
    q: 'U subotu ____ tenis.',
    en: 'On Saturday we are playing tennis.',
    opts: ['igramo', 'igrali', 'igrati', 'igra'],
    answer: 'igramo',
    tip: 'A fixed plan in the present: igramo.',
  },
  {
    mode: 'planovi',
    q: '____ putovati u Dalmaciju.',
    en: 'I am planning to travel to Dalmatia.',
    opts: ['Planiram', 'Planirati', 'Planirao', 'Planiraju'],
    answer: 'Planiram',
    tip: 'planirati + infinitive, like želim or mogu.',
  },
  {
    mode: 'planovi',
    q: 'Ovo ljeto ____ putovati.',
    en: 'This summer we will travel.',
    opts: ['ćemo', 'smo', 'nemamo', 'ste'],
    answer: 'ćemo',
    tip: 'Future, we: ćemo in second place.',
  },
  {
    mode: 'planovi',
    q: 'Hoćeš li i ti ____ na more?',
    en: 'Will you go to the seaside too?',
    opts: ['ići', 'ić', 'ideš', 'išao'],
    answer: 'ići',
    tip: 'After hoćeš li comes the full infinitive.',
  },
];
