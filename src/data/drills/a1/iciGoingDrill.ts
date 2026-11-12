// src/data/drills/a1/iciGoingDrill.ts
//
// A1 IĆI — the drill for the `ici-going` lesson.
//
// Three modes:
//   oblici — the six present forms on the stem id-, the negative ne idem, and ići after a modal
//   kamo   — Kamo? (where to) against Gdje? (where), and the direction words kući, van, ovamo
//   zivot  — ići in everyday sentences: Idemo!, idem spavati, djeca idu
//
// Distractors give the wrong person, build on the infinitive (ićem), fuse the negative, or
// answer a direction question with a place. "Gdje" is never offered as a wrong answer to a
// where-to question: it is heard in relaxed speech, and a distractor must be wrong, not marked.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ICI_GOING_MODE_LABELS: Record<string, string> = {
  oblici: '🚶 Oblici',
  kamo: '🧭 Kamo ili gdje',
  zivot: '☕ U životu',
};

export const ICI_GOING_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ──────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja ____ kući.',
    en: 'I am going home.',
    opts: ['idem', 'ide', 'idu', 'idemo'],
    answer: 'idem',
    tip: 'The stem is id-, and ja takes -em.',
  },
  {
    mode: 'oblici',
    q: 'Ti ____ u grad?',
    en: 'Are you going into town?',
    opts: ['ideš', 'idete', 'ide', 'idem'],
    answer: 'ideš',
    tip: 'ti takes -eš.',
  },
  {
    mode: 'oblici',
    q: 'Ona ____ van.',
    en: 'She is going out.',
    opts: ['ide', 'idu', 'idem', 'ideš'],
    answer: 'ide',
    tip: 'on, ona and ono share one form: id- + e.',
  },
  {
    mode: 'oblici',
    q: 'Mi ____ na kavu.',
    en: 'We are going for a coffee.',
    opts: ['idemo', 'idete', 'idu', 'idem'],
    answer: 'idemo',
    tip: 'mi takes -emo.',
  },
  {
    mode: 'oblici',
    q: 'Vi ____ kući?',
    en: 'Are you (all) going home?',
    opts: ['idete', 'idemo', 'ide', 'idu'],
    answer: 'idete',
    tip: 'vi takes -ete.',
  },
  {
    mode: 'oblici',
    q: 'Oni ____ u kino.',
    en: 'They are going to the cinema.',
    opts: ['idu', 'ide', 'idemo', 'idete'],
    answer: 'idu',
    tip: 'oni takes -u, not -e.',
  },
  {
    mode: 'oblici',
    q: 'Moram ____.',
    en: 'I have to go.',
    opts: ['ići', 'idem', 'ide', 'idu'],
    answer: 'ići',
    tip: 'After a modal only the modal changes; the second verb stays in its dictionary form.',
  },
  {
    mode: 'oblici',
    q: 'Danas ____ van.',
    en: 'I am not going out today.',
    opts: ['ne idem', 'neidem', 'ne ićem', 'nije idem'],
    answer: 'ne idem',
    tip: 'The negative is two words. Only a few verbs fuse ne, like nisam and nemam.',
  },
  // ── kamo ────────────────────────────────────────────────────────────────
  {
    mode: 'kamo',
    q: '____ ideš? — Kući.',
    en: 'Where are you going? — Home.',
    opts: ['Kamo', 'Kada', 'Tko', 'Što'],
    answer: 'Kamo',
    tip: 'Kamo? asks about direction — where TO.',
  },
  {
    mode: 'kamo',
    q: '____ je Ana? — Tamo je.',
    en: 'Where is Ana? — She is there.',
    opts: ['Gdje', 'Kamo', 'Kada', 'Tko'],
    answer: 'Gdje',
    tip: 'Gdje? asks where someone IS. Kamo? would ask where she is going.',
  },
  {
    mode: 'kamo',
    q: 'Idem ____.',
    en: 'I am going home.',
    opts: ['kući', 'kuća', 'u kući', 'na kuću'],
    answer: 'kući',
    tip: 'Going home needs no preposition.',
  },
  {
    mode: 'kamo',
    q: 'Gdje je Marko? — ____.',
    en: 'Where is Marko? — There.',
    opts: ['Tamo', 'Van', 'Ovamo', 'Na kavu'],
    answer: 'Tamo',
    tip: 'Gdje? needs a place. Van, ovamo and na kavu are all directions.',
  },
  {
    mode: 'kamo',
    q: 'Kamo idete? — ____',
    en: 'Where are you going? — Into town.',
    opts: ['U grad.', 'Tamo smo.', 'Ovdje.', 'Gdje.'],
    answer: 'U grad.',
    tip: 'Kamo? needs a direction. Tamo smo and ovdje say where you are.',
  },
  {
    mode: 'kamo',
    q: 'Kamo idu djeca? — Idu ____.',
    en: 'Where are the children going? — They are going out.',
    opts: ['van', 'tamo su', 'ovdje', 'gdje'],
    answer: 'van',
    tip: 'van — out, a direction.',
  },
  {
    mode: 'kamo',
    q: 'Idemo ____ more!',
    en: "Let's go to the seaside!",
    opts: ['na', 'kod', 'iz', 'od'],
    answer: 'na',
    tip: 'na more — to the seaside, a phrase you know from the accusative lesson.',
  },
  {
    mode: 'kamo',
    q: 'Ana i Petar idu ____.',
    en: 'Ana and Petar are coming this way.',
    opts: ['ovamo', 'ovdje', 'tamo su', 'gdje'],
    answer: 'ovamo',
    tip: 'ovamo is a direction towards the speaker; ovdje says where something is.',
  },
  // ── zivot ───────────────────────────────────────────────────────────────
  {
    mode: 'zivot',
    q: '____ li u grad?',
    en: 'Are you going into town? (one person)',
    opts: ['Ideš', 'Idem', 'Ide', 'Idu'],
    answer: 'Ideš',
    tip: 'ti → ideš, and li comes straight after the verb.',
  },
  {
    mode: 'zivot',
    q: 'Želim ____ kući.',
    en: 'I want to go home.',
    opts: ['ići', 'idem', 'ide', 'ideš'],
    answer: 'ići',
    tip: 'After želim the second verb stays in its dictionary form.',
  },
  {
    mode: 'zivot',
    q: 'Laku noć, idem ____.',
    en: 'Good night, I am going to bed.',
    opts: ['spavati', 'spavam', 'spava', 'spavaju'],
    answer: 'spavati',
    tip: 'After idem, a second verb stays in its dictionary form.',
  },
  {
    mode: 'zivot',
    q: '____! Kasnimo.',
    en: "Let's go! We are late.",
    opts: ['Idemo', 'Ide', 'Idu', 'Idete'],
    answer: 'Idemo',
    tip: 'Idemo! on its own means "Let\'s go!"',
  },
  {
    mode: 'zivot',
    q: 'Djeca ____ kući u dva.',
    en: 'The children go home at two.',
    opts: ['idu', 'ide', 'idemo', 'ideš'],
    answer: 'idu',
    tip: 'djeca takes the plural verb, like oni.',
  },
  {
    mode: 'zivot',
    q: 'Petar i Ana ____ na kavu.',
    en: 'Petar and Ana are going for a coffee.',
    opts: ['idu', 'ide', 'idemo', 'idete'],
    answer: 'idu',
    tip: 'Two people are "they": idu.',
  },
  {
    mode: 'zivot',
    q: 'Ne ____ van, bolestan sam.',
    en: 'I am not going out, I am ill.',
    opts: ['idem', 'ide', 'ići', 'idu'],
    answer: 'idem',
    tip: 'ja → idem, with ne as a separate word in front.',
  },
  {
    mode: 'zivot',
    q: 'Idete li u subotu ____ more?',
    en: 'Are you going to the seaside on Saturday?',
    opts: ['na', 'kod', 'iz', 'od'],
    answer: 'na',
    tip: 'Going to the seaside: na more.',
  },
];
