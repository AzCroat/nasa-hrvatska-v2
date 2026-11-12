// src/data/drills/a1/nematiGenitiveDrill.ts
//
// A1 WHAT IS MISSING — the drill for the `nemati-genitive` lesson.
//
// nema (there is no) always takes the genitive; nemam takes it for anything
// uncountable (vremena, novca). After nemam with ONE countable thing, Croatians say
// it both ways (Nemam auto / Nemam auta), so no item tests that pair as right or
// wrong. In the past it is always nije bilo, in the future neće biti.
//
// Three modes:
//   nema   — nema / ima + genitive, people included
//   nemam  — nemam + an uncountable thing
//   vrijeme — nije bilo / neće biti, and nema against nije

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NEMATI_GENITIVE_MODE_LABELS: Record<string, string> = {
  nema: '🚫 Nema',
  nemam: '👜 Nemam',
  vrijeme: '⏳ Prije i poslije',
};

export const NEMATI_GENITIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── nema ──────────────────────────────────────────────────────────────────
  {
    mode: 'nema',
    q: 'Nema ____ u hladnjaku. (mlijeko)',
    en: 'There is no milk in the fridge.',
    opts: ['mlijeko', 'mlijeka', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    tip: 'nema always takes the genitive.',
  },
  {
    mode: 'nema',
    q: 'Nema ____. (kruh)',
    en: 'There is no bread.',
    opts: ['kruha', 'kruh', 'kruhu', 'kruhom'],
    answer: 'kruha',
    tip: 'Masculine -a in the genitive.',
  },
  {
    mode: 'nema',
    q: 'U selu nema ____. (škola)',
    en: 'There is no school in the village.',
    opts: ['školu', 'školi', 'škola', 'škole'],
    answer: 'škole',
    tip: 'Feminine -a becomes -e.',
  },
  {
    mode: 'nema',
    q: 'Gdje je Marko? Nema ____. (Marko)',
    en: 'Where is Marko? He is not here.',
    opts: ['Marku', 'Marka', 'Markom', 'Marko'],
    answer: 'Marka',
    tip: 'A person who is not there takes the genitive too.',
  },
  {
    mode: 'nema',
    q: 'Gdje je Ana? Nema ____. (Ana)',
    en: 'Where is Ana? She is not here.',
    opts: ['Anu', 'Ani', 'Ane', 'Anom'],
    answer: 'Ane',
    tip: 'Ana → Ane in the genitive.',
  },
  {
    mode: 'nema',
    q: 'Ima li sira? — ____, ali ima kruha.',
    en: 'Is there any cheese? — No, but there is some bread.',
    opts: ['Nije', 'Nema', 'Nisam', 'Nisu'],
    answer: 'Nema',
    tip: 'The answer repeats the verb, negated: ima → nema.',
  },
  {
    mode: 'nema',
    q: 'U hladnjaku ima ____. (some juice — sok)',
    en: 'There is some juice in the fridge.',
    opts: ['sok', 'soku', 'soka', 'sokom'],
    answer: 'soka',
    tip: 'ima + genitive = there is some.',
  },
  {
    mode: 'nema',
    q: 'Na stanici nema ____. (autobus)',
    en: 'There is no bus at the stop.',
    opts: ['autobus', 'autobusa', 'autobusu', 'autobusom'],
    answer: 'autobusa',
    tip: 'After nema, only the genitive.',
  },
  // ── nemam ─────────────────────────────────────────────────────────────────
  {
    mode: 'nemam',
    q: 'Danas nemam ____. (vrijeme)',
    en: 'I have no time today.',
    opts: ['vremenima', 'vremena', 'vremenu', 'vremenom'],
    answer: 'vremena',
    tip: 'Time cannot be counted: genitive, stem vremen-.',
  },
  {
    mode: 'nemam',
    q: 'Nažalost, nemamo ____. (novac)',
    en: 'Unfortunately we have no money.',
    opts: ['novca', 'novcu', 'novcem', 'novcima'],
    answer: 'novca',
    tip: 'Genitive, and the a before c drops out.',
  },
  {
    mode: 'nemam',
    q: 'Nemam ____ gdje je hotel. (pojam)',
    en: 'I have no idea where the hotel is.',
    opts: ['pojam', 'pojmu', 'pojama', 'pojma'],
    answer: 'pojma',
    tip: 'A fixed phrase: Nemam pojma.',
  },
  {
    mode: 'nemam',
    q: 'Nemam ____ za to. (strpljenje)',
    en: 'I have no patience for that.',
    opts: ['strpljenja', 'strpljenju', 'strpljenjem', 'strpljenjima'],
    answer: 'strpljenja',
    tip: 'Patience cannot be counted: genitive, neuter -a.',
  },
  {
    mode: 'nemam',
    q: 'U zgradi danas nema ____. (voda)',
    en: 'There is no water in the building today.',
    opts: ['vodom', 'vode', 'vodi', 'voda'],
    answer: 'vode',
    tip: 'nema always takes the genitive.',
  },
  {
    mode: 'nemam',
    q: 'Što znači "Nemam pojma"?',
    opts: ['I have no idea.', 'I have no time.', 'I have no money.', 'I am not here.'],
    answer: 'I have no idea.',
    tip: 'pojam means notion.',
  },
  {
    mode: 'nemam',
    q: 'Koji par Hrvati govore OBA?',
    en: 'Which pair do Croatians say both ways?',
    opts: [
      'Nemam auto. / Nemam auta.',
      'Nema kruha. / Nema kruh.',
      'Nemam vremena. / Nemam vremenu.',
      'Nije bilo vode. / Nije bila vode.',
    ],
    answer: 'Nemam auto. / Nemam auta.',
    tip: 'After nemam with one countable thing, both are heard; nowhere else.',
  },
  {
    mode: 'nemam',
    q: 'Danas ne idem van, nemam ____. (novac)',
    en: 'I am not going out today, I have no money.',
    opts: ['novcima', 'novcu', 'novca', 'novcem'],
    answer: 'novca',
    tip: 'Uncountable: genitive.',
  },
  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: 'Jučer nije ____ vode.',
    en: 'Yesterday there was no water.',
    opts: ['bila', 'bio', 'bilo', 'bili'],
    answer: 'bilo',
    tip: 'Always nije bilo, whatever is missing.',
  },
  {
    mode: 'vrijeme',
    q: 'Jučer nije bilo ____. (struja)',
    en: 'Yesterday there was no electricity.',
    opts: ['struja', 'struju', 'struje', 'struji'],
    answer: 'struje',
    tip: 'The past of nema still takes the genitive.',
  },
  {
    mode: 'vrijeme',
    q: 'Sutra neće ____ nastave.',
    en: 'There will be no classes tomorrow.',
    opts: ['bilo', 'biti', 'bila', 'je'],
    answer: 'biti',
    tip: 'The future of nema is neće biti.',
  },
  {
    mode: 'vrijeme',
    q: 'Sutra neće biti ____. (nastava)',
    en: 'There will be no classes tomorrow.',
    opts: ['nastava', 'nastave', 'nastavu', 'nastavi'],
    answer: 'nastave',
    tip: 'The future of nema still takes the genitive.',
  },
  {
    mode: 'vrijeme',
    q: 'Na zabavi nije bilo ____. (Ivan)',
    en: 'Ivan was not at the party.',
    opts: ['Ivan', 'Ivanu', 'Ivanom', 'Ivana'],
    answer: 'Ivana',
    tip: 'A missing person, in the past: nije bilo + genitive.',
  },
  {
    mode: 'vrijeme',
    q: 'Koja rečenica kaže da nečega NEMA?',
    en: 'Which sentence says something is not there at all?',
    opts: ['Kava nije vruća.', 'Kava nije moja.', 'Nema kave.', 'Kava nije skupa.'],
    answer: 'Nema kave.',
    tip: 'nije describes; nema says it is missing.',
  },
  {
    mode: 'vrijeme',
    q: 'Mlijeko ____ hladno.',
    en: 'The milk is not cold.',
    opts: ['nema', 'nije', 'nemam', 'nisu'],
    answer: 'nije',
    tip: 'Describing what something is like: nije.',
  },
  {
    mode: 'vrijeme',
    q: 'Jučer nije bilo ____ u trgovini. (kruh)',
    en: 'Yesterday there was no bread in the shop.',
    opts: ['kruh', 'kruha', 'kruhu', 'kruhom'],
    answer: 'kruha',
    tip: 'nije bilo + genitive.',
  },
];
