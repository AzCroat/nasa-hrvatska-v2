// src/data/drills/a1/dailyRoutineDrill.ts
//
// A1 DAILY ROUTINE — the drill for the `daily-routine` lesson.
//
// Two decisions carry this topic. Does this verb carry se at all? Budim se,
// tuširam se, oblačim se — but ustajem, doručkujem, večeram have none. And when
// the action lands on something you NAME, that thing is the object and se goes:
// perem se, but perem zube; oblačim se, but oblačim dijete. Then the old rule:
// se takes second position after onda, zatim or a time.
//
// Three modes:
//   se      — se or no se
//   mjesto  — where se goes when a time word or a linker opens the sentence
//   oblici  — the present forms of the routine verbs

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DAILY_ROUTINE_MODE_LABELS: Record<string, string> = {
  se: '🔁 Se ili ne?',
  mjesto: '📍 Gdje je se?',
  oblici: '⏰ Oblici',
};

export const DAILY_ROUTINE_DRILL_DATA: ModeDrillItem[] = [
  // ── se ────────────────────────────────────────────────────────────────────
  {
    mode: 'se',
    q: 'Ujutro ____ zube.',
    en: 'In the morning I brush my teeth.',
    opts: ['se perem', 'perem se', 'perem', 'me perem'],
    answer: 'perem',
    tip: 'The teeth are the object, so there is no se.',
  },
  {
    mode: 'se',
    q: 'U sedam ____.',
    en: 'At seven I get up.',
    opts: ['se ustajem', 'ustajem se', 'ustajem', 'me ustajem'],
    answer: 'ustajem',
    tip: 'ustajati has no se in Croatian.',
  },
  {
    mode: 'se',
    q: 'Majka ____ dijete.',
    en: 'The mother dresses the child.',
    opts: ['se oblači', 'oblači se', 'oblači', 'oblačim'],
    answer: 'oblači',
    tip: 'The child is the object, so no se.',
  },
  {
    mode: 'se',
    q: 'Brzo ____ i idem na posao.',
    en: 'I get dressed quickly and go to work.',
    opts: ['se oblačim', 'oblačim se', 'oblačim', 'me oblačim'],
    answer: 'se oblačim',
    tip: 'Getting dressed lands on you: oblačiti se, and se goes second after brzo.',
  },
  {
    mode: 'se',
    q: 'Otac ____ djecu u sedam.',
    en: 'The father wakes the children at seven.',
    opts: ['se budi', 'budi se', 'budi', 'budim'],
    answer: 'budi',
    tip: 'The children are the object: no se.',
  },
  {
    mode: 'se',
    q: 'Koji glagol NEMA se?',
    en: 'Which verb has NO se?',
    opts: ['tuširati se', 'buditi se', 'doručkovati', 'odmarati se'],
    answer: 'doručkovati',
    tip: 'doručkovati — to have breakfast — has no se.',
  },
  {
    mode: 'se',
    q: 'Navečer ____ kosu.',
    en: 'In the evening I wash my hair.',
    opts: ['se perem', 'perem se', 'perem', 'peru'],
    answer: 'perem',
    tip: 'Kosu is the object, so there is no se.',
  },
  {
    mode: 'se',
    q: 'Popodne ____ kući.',
    en: 'In the afternoon I come back home.',
    opts: ['vraćam', 'se vraćam', 'vraćam se', 'me vraćam'],
    answer: 'se vraćam',
    tip: 'vraćati se carries se, and popodne opens the sentence.',
  },

  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Onda ____.',
    en: 'Then I shower.',
    opts: ['tuširam se', 'se tuširam', 'tuširam', 'tuširam sebe'],
    answer: 'se tuširam',
    tip: 'Onda opens the sentence; se comes second.',
  },
  {
    mode: 'mjesto',
    q: 'Zatim ____.',
    en: 'After that I get dressed.',
    opts: ['oblačim se', 'oblačim sebe', 'se oblačim', 'oblačim'],
    answer: 'se oblačim',
    tip: 'Zatim opens; se follows it.',
  },
  {
    mode: 'mjesto',
    q: 'Moja sestra ____ navečer.',
    en: 'My sister showers in the evening.',
    opts: ['tušira se', 'se tušira', 'tušira', 'se tuširam'],
    answer: 'se tušira',
    tip: 'Moja sestra is the first element; se comes right after it.',
  },
  {
    mode: 'mjesto',
    q: 'Prvo ____, onda perem zube.',
    en: 'First I wash my face, then I brush my teeth.',
    opts: ['umivam se', 'se umivam', 'umivam', 'se umiva'],
    answer: 'se umivam',
    tip: 'Prvo opens the sentence; se is second.',
  },
  {
    mode: 'mjesto',
    q: 'Kasnije ____.',
    en: 'Later I rest.',
    opts: ['odmaram', 'odmaram se', 'se odmaram', 'me odmaram'],
    answer: 'se odmaram',
    tip: 'odmarati se carries se, and it goes second.',
  },
  {
    mode: 'mjesto',
    q: 'Kad ____ budiš?',
    en: 'When do you wake up?',
    opts: ['te', 'si', 'ti', 'se'],
    answer: 'se',
    tip: 'Kad opens; se comes straight after it and never changes for ti.',
  },
  {
    mode: 'mjesto',
    q: 'Which sentence is correct?',
    en: 'I wake up at seven.',
    opts: ['Se budim u sedam.', 'Budim u sedam se.', 'Budim se u sedam.', 'Budim sebe u sedam.'],
    answer: 'Budim se u sedam.',
    tip: 'Se can never open the sentence; it comes second.',
  },
  {
    mode: 'mjesto',
    q: 'Which sentence is correct?',
    en: 'In the evening I go to bed at eleven.',
    opts: [
      'Navečer se idem spavati u jedanaest.',
      'Navečer idem spavati u jedanaest.',
      'Navečer idem se spavati u jedanaest.',
      'Navečer idem spavam u jedanaest.',
    ],
    answer: 'Navečer idem spavati u jedanaest.',
    tip: 'ići spavati has no se: idem plus the infinitive.',
  },

  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja ____ u pola osam.',
    en: 'I have breakfast at half past seven.',
    opts: ['doručkovam', 'doručkujem', 'doručkam', 'doručkuje'],
    answer: 'doručkujem',
    tip: 'An -ovati verb: -ova- becomes -uj-.',
  },
  {
    mode: 'oblici',
    q: 'Mi ____ u sedam.',
    en: 'We get up at seven.',
    opts: ['ustajemo', 'ustajete', 'ustaju', 'ustajamo'],
    answer: 'ustajemo',
    tip: 'ustajati: ustajem, ustaješ… — mi ustajemo.',
  },
  {
    mode: 'oblici',
    q: 'Kad ____ u subotu?',
    en: 'When do you get up on Saturday (to a friend)?',
    opts: ['ustajem', 'ustaje', 'ustaješ', 'ustajete'],
    answer: 'ustaješ',
    tip: 'A friend is ti: ustaješ.',
  },
  {
    mode: 'oblici',
    q: 'Djeca ____ zube.',
    en: 'The children brush their teeth.',
    opts: ['peru', 'pere', 'peremo', 'praju'],
    answer: 'peru',
    tip: 'prati: perem, pereš, pere, peremo, perete, peru.',
  },
  {
    mode: 'oblici',
    q: 'Navečer ____ i gledam televiziju.',
    en: 'In the evening I have dinner and watch TV.',
    opts: ['večeram', 'večera', 'večeramo', 'večeraš'],
    answer: 'večeram',
    tip: 'večerati — the ja form ends in -am.',
  },
  {
    mode: 'oblici',
    q: 'Oni se ____ kući oko šest.',
    en: 'They come back home around six.',
    opts: ['vraćam', 'vraća', 'vraćaju', 'vraćamo'],
    answer: 'vraćaju',
    tip: 'oni + an -am verb → -aju.',
  },
  {
    mode: 'oblici',
    q: 'Idem ____ u jedanaest.',
    en: 'I go to bed at eleven.',
    opts: ['spavam', 'spavati', 'spava', 'spavanje'],
    answer: 'spavati',
    tip: 'ići spavati: idem plus the infinitive.',
  },
  {
    mode: 'oblici',
    q: 'Ti se ____ u sedam?',
    en: 'Do you wake up at seven?',
    opts: ['budim', 'budi', 'budiš', 'budite'],
    answer: 'budiš',
    tip: 'buditi se: ti budiš.',
  },
];
