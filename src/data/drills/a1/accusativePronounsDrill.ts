// src/data/drills/a1/accusativePronounsDrill.ts
//
// A1 ACCUSATIVE PRONOUNS — the drill for the `accusative-pronouns` lesson.
//
// Three modes:
//   kratki — the short forms in ordinary sentences: me, te, ga, je, nas, vas, ih
//   dugi   — the long forms after a preposition, for contrast, and alone as an answer
//   red    — word order: the short form in second place, li before it, never first
//
// Distractors are the subject form (on, ja), another case (tebi, njemu), a short form after
// a preposition, or a short form at the start of a sentence. Where both a long and a short
// form would be correct (Čekam vas / Vas čekam with emphasis, Vidim njega for contrast,
// je / ju for "her"), only one of them is ever offered.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ACCUSATIVE_PRONOUNS_MODE_LABELS: Record<string, string> = {
  kratki: '👉 Kratki oblici',
  dugi: '🔊 Dugi oblici',
  red: '🔀 Red riječi',
};

export const ACCUSATIVE_PRONOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── kratki ─────────────────────────────────────────────────────────────
  {
    mode: 'kratki',
    q: 'Gdje je Marko? Ne vidim ____.',
    en: "Where is Marko? I can't see him.",
    opts: ['ga', 'je', 'ih', 'me'],
    answer: 'ga',
    tip: 'Marko is "he": the short object form is ga.',
  },
  {
    mode: 'kratki',
    q: 'Ana? Vidim ____ svaki dan.',
    en: 'Ana? I see her every day.',
    opts: ['je', 'ga', 'ih', 'nas'],
    answer: 'je',
    tip: 'Ana is "she": the usual short form is je (ju is also correct).',
  },
  {
    mode: 'kratki',
    q: 'Volim ____.',
    en: 'I love you.',
    opts: ['te', 'ti', 'tebi', 'tvoj'],
    answer: 'te',
    tip: 'The short object form of ti is te.',
  },
  {
    mode: 'kratki',
    q: 'Marko ____ zove.',
    en: 'Marko is calling me.',
    opts: ['me', 'ja', 'mi', 'moj'],
    answer: 'me',
    tip: 'The short object form of ja is me, in second place after Marko.',
  },
  {
    mode: 'kratki',
    q: 'Čekamo ____ ovdje.',
    en: 'We are waiting for you (all) here.',
    opts: ['vas', 'vi', 'vama', 'vaš'],
    answer: 'vas',
    tip: 'The object form of vi is vas — long and short are the same.',
  },
  {
    mode: 'kratki',
    q: 'Ključevi? Ne vidim ____.',
    en: "The keys? I can't see them.",
    opts: ['ih', 'ga', 'je', 'nas'],
    answer: 'ih',
    tip: 'Several things are "they": the short object form is ih.',
  },
  {
    mode: 'kratki',
    q: 'Djeca ____ čekaju.',
    en: 'The children are waiting for us.',
    opts: ['nas', 'mi', 'nama', 'naš'],
    answer: 'nas',
    tip: 'The object form of mi is nas.',
  },
  {
    mode: 'kratki',
    q: 'Petar i Ivo? Poznajem ____.',
    en: 'Petar and Ivo? I know them.',
    opts: ['ih', 'ga', 'je', 'me'],
    answer: 'ih',
    tip: 'Two people are "they": ih.',
  },
  // ── dugi ───────────────────────────────────────────────────────────────
  {
    mode: 'dugi',
    q: 'Ovo je za ____.',
    en: 'This is for you. (one person)',
    opts: ['tebe', 'te', 'ti', 'tebi'],
    answer: 'tebe',
    tip: 'After a preposition use the long form.',
  },
  {
    mode: 'dugi',
    q: 'Kava je za ____, a čaj za njega.',
    en: 'The coffee is for her, and the tea for him.',
    opts: ['nju', 'je', 'ona', 'njoj'],
    answer: 'nju',
    tip: 'After za: the long form for "her".',
  },
  {
    mode: 'dugi',
    q: 'Ovaj poklon je za ____.',
    en: 'This present is for me.',
    opts: ['mene', 'ja', 'meni', 'moj'],
    answer: 'mene',
    tip: 'After za: the long form for "me".',
  },
  {
    mode: 'dugi',
    q: 'Koga čekaš? — ____!',
    en: 'Who are you waiting for? — You!',
    opts: ['Tebe', 'Te', 'Ti', 'Tebi'],
    answer: 'Tebe',
    tip: 'Alone, as an answer, a pronoun needs its long form.',
  },
  {
    mode: 'dugi',
    q: 'Volim tebe, a ne ____.',
    en: 'I love you, not him.',
    opts: ['njega', 'ga', 'on', 'njemu'],
    answer: 'njega',
    tip: 'A contrast needs the long form.',
  },
  {
    mode: 'dugi',
    q: 'Soba je za ____.',
    en: 'The room is for them.',
    opts: ['njih', 'ih', 'oni', 'njima'],
    answer: 'njih',
    tip: 'After za: the long form for "them".',
  },
  {
    mode: 'dugi',
    q: 'Za ____ je ovo? — Za nas.',
    en: 'Who is this for? — For us.',
    opts: ['koga', 'tko', 'kome', 'kim'],
    answer: 'koga',
    tip: 'After za you need the object form of tko.',
  },
  {
    mode: 'dugi',
    q: 'Koga zoveš? — ____.',
    en: 'Who are you calling? — Him.',
    opts: ['Njega', 'Ga', 'On', 'Njemu'],
    answer: 'Njega',
    tip: 'Alone, as an answer: the long form.',
  },
  // ── red ────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'I see him.',
    opts: ['Vidim ga.', 'Ga vidim.', 'Vidim on.', 'Ga on vidim.'],
    answer: 'Vidim ga.',
    tip: 'A short form cannot start a sentence; it sits in second place.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'I am not waiting for you.',
    opts: ['Ne čekam te.', 'Ne te čekam.', 'Te ne čekam.', 'Ne čekam ti.'],
    answer: 'Ne čekam te.',
    tip: 'ne and the verb count as one unit; the short form follows them.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Do you see me?',
    opts: ['Vidiš li me?', 'Vidiš me li?', 'Me vidiš li?', 'Li me vidiš?'],
    answer: 'Vidiš li me?',
    tip: 'li comes first, then the pronoun.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Ana is calling us.',
    opts: ['Ana nas zove.', 'Ana mi zove.', 'Ana zove mi.', 'Ana zove naš.'],
    answer: 'Ana nas zove.',
    tip: 'The object form of mi is nas, in second place.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'I have to call him.',
    opts: ['Moram ga zvati.', 'Ga moram zvati.', 'Moram on zvati.', 'Moram zvati on.'],
    answer: 'Moram ga zvati.',
    tip: 'Second place: straight after the modal.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'I want to see you.',
    opts: ['Želim te vidjeti.', 'Te želim vidjeti.', 'Želim ti vidjeti.', 'Želim vidjeti ti.'],
    answer: 'Želim te vidjeti.',
    tip: 'te in second place, after želim.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Do you know them?',
    opts: ['Poznaješ li ih?', 'Poznaješ ih li?', 'Ih poznaješ li?', 'Li ih poznaješ?'],
    answer: 'Poznaješ li ih?',
    tip: 'li comes first, then the pronoun.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Marko loves her.',
    opts: ['Marko je voli.', 'Marko voli ona.', 'Je Marko voli.', 'Marko voli njoj.'],
    answer: 'Marko je voli.',
    tip: 'The short form for "her", in second place after Marko.',
  },
];
