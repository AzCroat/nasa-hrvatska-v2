// src/data/drills/a1/jestiPitiDrill.ts
//
// A1 JESTI AND PITI — the drill for the `jesti-piti` lesson.
//
// Three modes:
//   jesti  — the present on the stem jed-: jedem, jedeš, jede, jedemo, jedete, jedu
//   piti   — the present on the stem pij-: pijem, piješ, pije, pijemo, pijete, piju
//   objekt — what you eat or drink takes the accusative: Jedem juhu, Pijem vodu
//
// Distractors give the wrong person, the infinitive, an invented form (pijeju), or a
// non-accusative case. The genitive is never offered as a wrong object after jesti or piti:
// "Pijem vode" (some water) is real Croatian, and a distractor must be wrong, not marked.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const JESTI_PITI_MODE_LABELS: Record<string, string> = {
  jesti: '🍞 Jesti',
  piti: '🥤 Piti',
  objekt: '🍽️ Što jedeš?',
};

export const JESTI_PITI_DRILL_DATA: ModeDrillItem[] = [
  // ── jesti ──────────────────────────────────────────────────────────────
  {
    mode: 'jesti',
    q: 'Ja ____ ribu.',
    en: 'I eat fish.',
    opts: ['jedem', 'jede', 'jedu', 'jesti'],
    answer: 'jedem',
    tip: 'The stem is jed-, and ja takes -em.',
  },
  {
    mode: 'jesti',
    q: 'Što ____ za doručak?',
    en: 'What do you eat for breakfast? (one person)',
    opts: ['jedeš', 'jedem', 'jedete', 'jedu'],
    answer: 'jedeš',
    tip: 'ti takes -eš.',
  },
  {
    mode: 'jesti',
    q: 'Marko ____ jabuku.',
    en: 'Marko is eating an apple.',
    opts: ['jede', 'jedem', 'jedu', 'jedeš'],
    answer: 'jede',
    tip: 'One person: jed- + e.',
  },
  {
    mode: 'jesti',
    q: 'Mi ____ juhu.',
    en: 'We are eating soup.',
    opts: ['jedemo', 'jedete', 'jedu', 'jede'],
    answer: 'jedemo',
    tip: 'mi takes -emo.',
  },
  {
    mode: 'jesti',
    q: 'Vi ____ meso?',
    en: 'Do you (all) eat meat?',
    opts: ['jedete', 'jedemo', 'jede', 'jedu'],
    answer: 'jedete',
    tip: 'vi takes -ete.',
  },
  {
    mode: 'jesti',
    q: 'Djeca ____ sladoled.',
    en: 'The children are eating ice cream.',
    opts: ['jedu', 'jede', 'jedemo', 'jedeš'],
    answer: 'jedu',
    tip: 'djeca takes the plural verb, like oni.',
  },
  {
    mode: 'jesti',
    q: 'Ne ____ meso.',
    en: 'I do not eat meat.',
    opts: ['jedem', 'jede', 'jedu', 'jesti'],
    answer: 'jedem',
    tip: 'ja → jedem, with ne as a separate word.',
  },
  {
    mode: 'jesti',
    q: 'Želim ____ ribu.',
    en: 'I want to eat fish.',
    opts: ['jesti', 'jedem', 'jede', 'jedu'],
    answer: 'jesti',
    tip: 'After želim the second verb stays in its dictionary form.',
  },
  // ── piti ───────────────────────────────────────────────────────────────
  {
    mode: 'piti',
    q: 'Ja ____ kavu svako jutro.',
    en: 'I drink coffee every morning.',
    opts: ['pijem', 'pije', 'piju', 'piti'],
    answer: 'pijem',
    tip: 'The stem is pij-, and ja takes -em.',
  },
  {
    mode: 'piti',
    q: 'Ti ____ čaj?',
    en: 'Are you drinking tea?',
    opts: ['piješ', 'pijem', 'pije', 'piju'],
    answer: 'piješ',
    tip: 'ti takes -eš.',
  },
  {
    mode: 'piti',
    q: 'Ana ____ vodu.',
    en: 'Ana is drinking water.',
    opts: ['pije', 'piju', 'pijem', 'piješ'],
    answer: 'pije',
    tip: 'One person: pij- + e.',
  },
  {
    mode: 'piti',
    q: 'Mi ____ sok.',
    en: 'We are drinking juice.',
    opts: ['pijemo', 'pijete', 'piju', 'pije'],
    answer: 'pijemo',
    tip: 'mi takes -emo.',
  },
  {
    mode: 'piti',
    q: 'Vi ____ vino?',
    en: 'Do you (all) drink wine?',
    opts: ['pijete', 'pijemo', 'pije', 'piju'],
    answer: 'pijete',
    tip: 'vi takes -ete.',
  },
  {
    mode: 'piti',
    q: 'Oni ____ mlijeko.',
    en: 'They drink milk.',
    opts: ['piju', 'pije', 'pijeju', 'pijemo'],
    answer: 'piju',
    tip: 'oni takes -u: piju, not pijeju.',
  },
  {
    mode: 'piti',
    q: 'Ne ____ pivo.',
    en: 'I do not drink beer.',
    opts: ['pijem', 'pije', 'piju', 'piti'],
    answer: 'pijem',
    tip: 'ja → pijem, with ne as a separate word.',
  },
  {
    mode: 'piti',
    q: 'Što ____? — Sok, molim.',
    en: 'What are you drinking? (one person) — Juice, please.',
    opts: ['piješ', 'pijem', 'pije', 'pijemo'],
    answer: 'piješ',
    tip: 'ti takes -eš.',
  },
  // ── objekt ─────────────────────────────────────────────────────────────
  {
    mode: 'objekt',
    q: 'Pijem ____.',
    en: 'I drink coffee.',
    opts: ['kavu', 'kava', 'kavi', 'kavom'],
    answer: 'kavu',
    tip: 'What you drink is the object: feminine -a becomes -u.',
  },
  {
    mode: 'objekt',
    q: 'Jedem ____.',
    en: 'I am eating soup.',
    opts: ['juhu', 'juha', 'juhi', 'juhom'],
    answer: 'juhu',
    tip: 'What you eat is the object: feminine -a becomes -u.',
  },
  {
    mode: 'objekt',
    q: 'Jedemo ____.',
    en: 'We are eating fish.',
    opts: ['ribu', 'riba', 'ribi', 'ribom'],
    answer: 'ribu',
    tip: 'Feminine -a becomes -u.',
  },
  {
    mode: 'objekt',
    q: 'Pije ____.',
    en: 'She is drinking water.',
    opts: ['vodu', 'voda', 'vodi', 'vodom'],
    answer: 'vodu',
    tip: 'Feminine -a becomes -u.',
  },
  {
    mode: 'objekt',
    q: 'Jedeš li ____?',
    en: 'Do you eat meat?',
    opts: ['meso', 'mesu', 'mesom', 'mesima'],
    answer: 'meso',
    tip: 'A neuter noun does not change as an object.',
  },
  {
    mode: 'objekt',
    q: 'Djeca piju ____.',
    en: 'The children drink juice.',
    opts: ['sok', 'soku', 'sokom', 'sokovi'],
    answer: 'sok',
    tip: 'A masculine thing does not change as an object.',
  },
  {
    mode: 'objekt',
    q: 'Marko jede ____.',
    en: 'Marko is eating a sandwich.',
    opts: ['sendvič', 'sendviču', 'sendvičem', 'sendviči'],
    answer: 'sendvič',
    tip: 'A masculine thing does not change as an object.',
  },
  {
    mode: 'objekt',
    q: 'Za ručak jedemo ____.',
    en: 'For lunch we eat salad.',
    opts: ['salatu', 'salata', 'salati', 'salatom'],
    answer: 'salatu',
    tip: 'Feminine -a becomes -u.',
  },
];
