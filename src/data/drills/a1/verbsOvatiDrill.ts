// src/data/drills/a1/verbsOvatiDrill.ts
//
// A1 VERBS IN -OVATI — the drill for the `verbs-ovati` lesson (new A1, 52).
//
// -ovati → -ujem (putovati → putujem), and many -ivati verbs do the same
// (pokazivati → pokazujem) — but not all (uživati → uživam). The two errors are
// keeping -ov- (putovam) and over-applying the pattern to a verb with no -ov-
// (crtujem), so the second mode asks only which pattern a verb belongs to.
//
// Three modes:
//   oblici    — the -ujem forms in every person
//   razlika   — -ujem or -am?
//   recenice  — the verbs in everyday sentences

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_OVATI_MODE_LABELS: Record<string, string> = {
  oblici: '🧳 Oblici',
  razlika: '⚖️ -ujem ili -am',
  recenice: '💬 Rečenice',
};

export const VERBS_OVATI_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja ____ u Split.',
    en: 'I am travelling to Split.',
    opts: ['putujem', 'putovam', 'putuvam', 'putovem'],
    answer: 'putujem',
    tip: '-ova- becomes -uj-: putujem.',
  },
  {
    mode: 'oblici',
    q: 'Ti ____ kruh?',
    en: 'Are you buying bread?',
    opts: ['kupuješ', 'kupovaš', 'kupuje', 'kupujem'],
    answer: 'kupuješ',
    tip: 'kupuj- + -eš.',
  },
  {
    mode: 'oblici',
    q: 'On ____ u Zagrebu.',
    en: 'He lives in Zagreb.',
    opts: ['stanuje', 'stanova', 'stanovuje', 'stanuju'],
    answer: 'stanuje',
    tip: 'stanuj- + -e.',
  },
  {
    mode: 'oblici',
    q: 'Mi ____ u sedam.',
    en: 'We have breakfast at seven.',
    opts: ['doručkujemo', 'doručkovamo', 'doručkuvamo', 'doručkujete'],
    answer: 'doručkujemo',
    tip: 'doručkuj- + -emo.',
  },
  {
    mode: 'oblici',
    q: 'Vi ____ na moru?',
    en: 'Do you spend the summer at the seaside?',
    opts: ['ljetujete', 'ljetovate', 'ljetujemo', 'ljetovete'],
    answer: 'ljetujete',
    tip: 'ljetuj- + -ete.',
  },
  {
    mode: 'oblici',
    q: 'Oni puno ____.',
    en: 'They travel a lot.',
    opts: ['putuju', 'putovaju', 'putuje', 'putujeju'],
    answer: 'putuju',
    tip: '"They" ends in a single -u.',
  },
  {
    mode: 'oblici',
    q: 'Djeca ____ u igri.',
    en: 'The children are taking part in the game.',
    opts: ['sudjeluju', 'sudjelovaju', 'sudjeluje', 'sudjelujeju'],
    answer: 'sudjeluju',
    tip: 'sudjelovati → sudjeluju.',
  },
  {
    mode: 'oblici',
    q: 'Vodič ____ grad.',
    en: 'The guide shows the town.',
    opts: ['pokazuje', 'pokaziva', 'pokazivuje', 'pokazuju'],
    answer: 'pokazuje',
    tip: 'pokazivati follows the -ujem pattern.',
  },
  {
    mode: 'oblici',
    q: 'Često ____ baku.',
    en: 'I often visit grandma.',
    opts: ['posjećujem', 'posjećivam', 'posjećim', 'posjećivujem'],
    answer: 'posjećujem',
    tip: 'posjećivati → posjećujem.',
  },
  {
    mode: 'oblici',
    q: 'Mama ____ voće na tržnici.',
    en: 'Mum buys fruit at the market.',
    opts: ['kupuje', 'kupova', 'kupuju', 'kupovaje'],
    answer: 'kupuje',
    tip: 'kupuj- + -e.',
  },

  // ── razlika ───────────────────────────────────────────────────────────────
  {
    mode: 'razlika',
    q: 'Ja ____ sliku.',
    en: 'I am drawing a picture.',
    opts: ['crtam', 'crtujem', 'crtim', 'crtovam'],
    answer: 'crtam',
    tip: 'No -ov- in crtati, so it stays -am.',
  },
  {
    mode: 'razlika',
    q: 'Ja ____ film.',
    en: 'I am watching a film.',
    opts: ['gledam', 'gledujem', 'gledim', 'gledovam'],
    answer: 'gledam',
    tip: 'gledati is an ordinary -ati verb.',
  },
  {
    mode: 'razlika',
    q: 'Ja ____ u Zagrebu.',
    en: 'I am a student in Zagreb.',
    opts: ['studiram', 'studujem', 'studirem', 'studovam'],
    answer: 'studiram',
    tip: '-irati verbs keep -ir-: studiram.',
  },
  {
    mode: 'razlika',
    q: 'Ja ____ na moru.',
    en: 'I am enjoying myself at the seaside.',
    opts: ['uživam', 'užujem', 'uživujem', 'uživim'],
    answer: 'uživam',
    tip: 'In uživati the -iv- is part of the root.',
  },
  {
    mode: 'razlika',
    q: 'Koji glagol daje oblik "kupujem"?',
    en: 'Which verb gives this form?',
    opts: ['kupovati', 'kupiti', 'kupuvati', 'kupati'],
    answer: 'kupovati',
    tip: 'kupovati → kupujem. (kupati → kupam is to bathe.)',
  },
  {
    mode: 'razlika',
    q: 'Koji glagol daje oblik "putujem"?',
    en: 'Which verb gives this form?',
    opts: ['putovati', 'putiti', 'putati', 'putujati'],
    answer: 'putovati',
    tip: '-ovati → -ujem.',
  },
  {
    mode: 'razlika',
    q: 'Koji glagol NE ide u -ujem?',
    en: 'Which verb does NOT take -ujem?',
    opts: ['crtati', 'kupovati', 'putovati', 'stanovati'],
    answer: 'crtati',
    tip: 'Only the verb without -ov- keeps -am.',
  },
  {
    mode: 'razlika',
    q: 'Koji glagol ide u -ujem?',
    en: 'Which verb takes -ujem?',
    opts: ['darovati', 'gledati', 'čitati', 'pitati'],
    answer: 'darovati',
    tip: 'darovati → darujem.',
  },
  {
    mode: 'razlika',
    q: 'Ja ____ ručak.',
    en: 'I am cooking lunch.',
    opts: ['kuham', 'kuhujem', 'kuhim', 'kuhovam'],
    answer: 'kuham',
    tip: 'kuhati has no -ov-: kuham.',
  },

  // ── recenice ──────────────────────────────────────────────────────────────
  {
    mode: 'recenice',
    q: 'Gdje ____?',
    en: 'Where do you live? (polite)',
    opts: ['stanujete', 'stanovate', 'stanujemo', 'stanuju'],
    answer: 'stanujete',
    tip: 'The polite "you" ends in -ete.',
  },
  {
    mode: 'recenice',
    q: 'Kamo ____?',
    en: 'Where are you travelling to? (one friend)',
    opts: ['putuješ', 'putovaš', 'putuje', 'putujem'],
    answer: 'putuješ',
    tip: 'putuj- + -eš.',
  },
  {
    mode: 'recenice',
    q: 'Svako jutro ____ u sedam.',
    en: 'Every morning I have breakfast at seven.',
    opts: ['doručkujem', 'doručkovam', 'doručkuje', 'doručkuju'],
    answer: 'doručkujem',
    tip: 'doručkuj- + -em.',
  },
  {
    mode: 'recenice',
    q: 'Sestra ____ u Splitu.',
    en: 'My sister lives in Split.',
    opts: ['stanuje', 'stanova', 'stanuju', 'stanujem'],
    answer: 'stanuje',
    tip: 'She: stanuje.',
  },
  {
    mode: 'recenice',
    q: 'Mi ____ na moru.',
    en: 'We spend the summer at the seaside.',
    opts: ['ljetujemo', 'ljetovamo', 'ljetuju', 'ljetujete'],
    answer: 'ljetujemo',
    tip: 'ljetuj- + -emo.',
  },
  {
    mode: 'recenice',
    q: 'Karta ____ put.',
    en: 'The map shows the way.',
    opts: ['pokazuje', 'pokaziva', 'pokazuju', 'pokazivuje'],
    answer: 'pokazuje',
    tip: 'pokazivati → pokazuje.',
  },
];
