// src/data/drills/a2/accusativeAdjectivesDrill.ts
//
// A2 ACCUSATIVE ADJECTIVES — the drill for the `accusative-adjectives` lesson
// (A2 position 8).
//
// Three modes, eight items each:
//   stvari     — a masculine thing (no change), feminine -u, neuter and the plural
//   zivo       — a living masculine object: -og / -eg
//   zamjenice  — taj, ovaj, moj, naš, vaš, njegov in the accusative
//
// The short indefinite masculine (nov, topao) and the long -oga forms are correct
// Croatian, so neither is ever offered as a distractor.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ACCUSATIVE_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  stvari: '📦 Stvari',
  zivo: '🐕 Živo',
  zamjenice: '👉 Taj, moj, naš',
};

export const ACCUSATIVE_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── stvari ────────────────────────────────────────────────────────────────
  {
    mode: 'stvari',
    q: 'Kupujem ____ stol.',
    en: 'I am buying a new table.',
    opts: ['novi', 'novog', 'novu', 'novim'],
    answer: 'novi',
    tip: 'A masculine thing does not change.',
  },
  {
    mode: 'stvari',
    q: 'Nosim ____ haljinu.',
    en: 'I am wearing a red dress.',
    opts: ['crvena', 'crvenu', 'crvenog', 'crvenoj'],
    answer: 'crvenu',
    tip: 'Feminine accusative: -u.',
  },
  {
    mode: 'stvari',
    q: 'Čitam ____ pismo.',
    en: 'I am reading a long letter.',
    opts: ['dugo', 'dugog', 'dugu', 'dugom'],
    answer: 'dugo',
    tip: 'A neuter object does not change.',
  },
  {
    mode: 'stvari',
    q: 'Trebam ____ kaput.',
    en: 'I need a warm coat.',
    opts: ['topli', 'toplog', 'toplu', 'toplim'],
    answer: 'topli',
    tip: 'A coat is a masculine thing.',
  },
  {
    mode: 'stvari',
    q: 'Imamo ____ kuću.',
    en: 'We have a big house.',
    opts: ['velika', 'veliku', 'velikog', 'velikoj'],
    answer: 'veliku',
    tip: 'Feminine accusative: -u.',
  },
  {
    mode: 'stvari',
    q: 'Kupujem ____ cipele.',
    en: 'I am buying black shoes.',
    opts: ['crni', 'crne', 'crnih', 'crnu'],
    answer: 'crne',
    tip: 'Feminine plural object: -e.',
  },
  {
    mode: 'stvari',
    q: 'Volim ____ more.',
    en: 'I love the blue sea.',
    opts: ['plavo', 'plavog', 'plavu', 'plavim'],
    answer: 'plavo',
    tip: 'Neuter does not change.',
  },
  {
    mode: 'stvari',
    q: 'Gledamo ____ filmove.',
    en: 'We watch old films.',
    opts: ['stari', 'stare', 'starih', 'starima'],
    answer: 'stare',
    tip: 'Masculine plural object: -e.',
  },
  // ── zivo ──────────────────────────────────────────────────────────────────
  {
    mode: 'zivo',
    q: 'Upoznala sam ____ prijatelja.',
    en: 'I met a new friend.',
    opts: ['novi', 'novog', 'novom', 'novim'],
    answer: 'novog',
    tip: 'A living masculine object: -og.',
  },
  {
    mode: 'zivo',
    q: 'Zovem ____ liječnika.',
    en: 'I am calling a good doctor.',
    opts: ['dobar', 'dobri', 'dobrog', 'dobrom'],
    answer: 'dobrog',
    tip: 'A doctor is alive: -og.',
  },
  {
    mode: 'zivo',
    q: 'Imamo ____ psa.',
    en: 'We have a small dog.',
    opts: ['mali', 'malog', 'malom', 'malim'],
    answer: 'malog',
    tip: 'A dog is alive: -og.',
  },
  {
    mode: 'zivo',
    q: 'Čekamo ____ goste.',
    en: 'We are waiting for dear guests.',
    opts: ['dragi', 'drage', 'dragih', 'dragim'],
    answer: 'drage',
    tip: 'In the plural, living or not, the ending is -e.',
  },
  {
    mode: 'zivo',
    q: 'Vidim ____ mačku.',
    en: 'I see a black cat.',
    opts: ['crna', 'crnu', 'crnog', 'crnoj'],
    answer: 'crnu',
    tip: 'Mačka is feminine: -u, living or not.',
  },
  {
    mode: 'zivo',
    q: 'Poznaješ li ____ učitelja?',
    en: 'Do you know the young teacher?',
    opts: ['mladi', 'mladog', 'mladom', 'mladim'],
    answer: 'mladog',
    tip: 'A living masculine object: -og.',
  },
  {
    mode: 'zivo',
    q: 'Volim ____ dijete.',
    en: 'I love the little child.',
    opts: ['malo', 'malog', 'malu', 'malim'],
    answer: 'malo',
    tip: 'Dijete is neuter — neuter never changes, even when alive.',
  },
  {
    mode: 'zivo',
    q: 'Pozdravljam ____ susjeda.',
    en: 'I greet the old neighbour.',
    opts: ['stari', 'starog', 'starom', 'starim'],
    answer: 'starog',
    tip: 'A living masculine object: -og.',
  },
  // ── zamjenice ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenice',
    q: 'Poznaješ li ____ čovjeka?',
    en: 'Do you know that man?',
    opts: ['taj', 'tog', 'tom', 'tim'],
    answer: 'tog',
    tip: 'Taj before a living masculine object.',
  },
  {
    mode: 'zamjenice',
    q: 'Gledam ____ kuću.',
    en: 'I am looking at that house.',
    opts: ['ta', 'tu', 'toj', 'te'],
    answer: 'tu',
    tip: 'Feminine accusative: -u.',
  },
  {
    mode: 'zamjenice',
    q: 'Volim ____ grad.',
    en: 'I love this city.',
    opts: ['ovaj', 'ovog', 'ovu', 'ovom'],
    answer: 'ovaj',
    tip: 'A city is a masculine thing.',
  },
  {
    mode: 'zamjenice',
    q: 'Gdje je ____ torba?',
    en: 'Where is my bag?',
    opts: ['moja', 'moju', 'mojoj', 'mojom'],
    answer: 'moja',
    tip: 'Careful — here the bag is the subject, not the object.',
  },
  {
    mode: 'zamjenice',
    q: 'Čekam ____ susjeda.',
    en: 'I am waiting for our neighbour.',
    opts: ['naš', 'našeg', 'našog', 'našem'],
    answer: 'našeg',
    tip: 'After the soft š: -eg.',
  },
  {
    mode: 'zamjenice',
    q: 'Vidiš li ____ dijete?',
    en: 'Do you see that child?',
    opts: ['to', 'tog', 'tu', 'tom'],
    answer: 'to',
    tip: 'Neuter does not change.',
  },
  {
    mode: 'zamjenice',
    q: 'Imate li ____ broj?',
    en: 'Do you have his number?',
    opts: ['njegov', 'njegovog', 'njegovu', 'njegovom'],
    answer: 'njegov',
    tip: 'A number is a masculine thing.',
  },
  {
    mode: 'zamjenice',
    q: 'Pozvali smo ____ prijatelje.',
    en: 'We invited your friends. (Vi)',
    opts: ['vaši', 'vaše', 'vaših', 'vašim'],
    answer: 'vaše',
    tip: 'Masculine plural object: -e.',
  },
];
