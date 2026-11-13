// src/data/drills/a2/imperativeReviewDrill.ts
//
// A2 COMMANDS REVISITED — the drill for the `imperative-review` lesson.
//
// Three modes:
//   oblik    — the imperative of every verb class, built from the oni form
//   klitike  — the short pronouns straight after the command: Daj mi ga! Javi mi se!
//   nemoj    — bans: nemoj + infinitive, with the short words after nemoj
//
// Distractors are a present form, an infinitive, a form built from the infinitive (Uzi!),
// or the short words in the wrong order. The register is fixed by the English (to a friend,
// to a group), so a different person is never offered as a hidden correct answer.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const IMPERATIVE_REVIEW_MODE_LABELS: Record<string, string> = {
  oblik: '📣 Oblik',
  klitike: '🔀 Kratke riječi',
  nemoj: '🚫 Nemoj',
};

export const IMPERATIVE_REVIEW_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ──────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: '____ ovu knjigu, odlična je!',
    en: 'Read this book, it is excellent! (to a friend)',
    opts: ['Čitaj', 'Čitaš', 'Čitaji', 'Čitati'],
    answer: 'Čitaj',
    tip: 'The oni form ends in -aju; the stem ends in j, so nothing is added.',
  },
  {
    mode: 'oblik',
    q: '____ mi poruku!',
    en: 'Write me a message! (to a friend)',
    opts: ['Napiši', 'Napisaj', 'Napišeš', 'Napisati'],
    answer: 'Napiši',
    tip: 'The oni form is napišu: drop -u and add -i.',
  },
  {
    mode: 'oblik',
    q: '____ polako, molim Vas.',
    en: 'Please speak slowly.',
    opts: ['Govorite', 'Govorete', 'Govoriti', 'Govorate'],
    answer: 'Govorite',
    tip: 'govore → govor- → govori, and -te for Vi.',
  },
  {
    mode: 'oblik',
    q: '____ ključ, idemo!',
    en: 'Take the key, let us go! (to a friend)',
    opts: ['Uzmi', 'Uzi', 'Uzmeš', 'Uzeti'],
    answer: 'Uzmi',
    tip: 'The oni form is uzmu, so the command is built on uzm-.',
  },
  {
    mode: 'oblik',
    q: '____ ovamo, djeco!',
    en: 'Come here, children!',
    opts: ['Dođite', 'Dođete', 'Doćite', 'Dođi'],
    answer: 'Dođite',
    tip: 'doći → dođu → dođi, and -te for a group.',
  },
  {
    mode: 'oblik',
    q: '____ dobar!',
    en: 'Be good! (to a boy)',
    opts: ['Budi', 'Bi', 'Biti', 'Budeš'],
    answer: 'Budi',
    tip: 'The command of biti is built on bud-.',
  },
  {
    mode: 'oblik',
    q: '____ mi istinu.',
    en: 'Tell me the truth. (to a friend)',
    opts: ['Reci', 'Reći', 'Rekni', 'Rečeš'],
    answer: 'Reci',
    tip: 'Learn it by heart: the command of reći ends in -ci.',
  },
  {
    mode: 'oblik',
    q: '____ više vode!',
    en: 'Drink more water! (to a group)',
    opts: ['Pijte', 'Pite', 'Pijati', 'Piti'],
    answer: 'Pijte',
    tip: 'piju → pij-, which ends in j, so the group form is just -te.',
  },

  // ── klitike ────────────────────────────────────────────────────────────
  {
    mode: 'klitike',
    q: 'Koja je rečenica točna?',
    en: 'Give it to me!',
    opts: ['Daj mi ga!', 'Daj ga mi!', 'Mi ga daj!', 'Ga mi daj!'],
    answer: 'Daj mi ga!',
    tip: 'Command first, then the "to whom" word, then the "what" word.',
  },
  {
    mode: 'klitike',
    q: 'Koja je rečenica točna?',
    en: 'Get in touch with me tomorrow.',
    opts: ['Javi mi se sutra.', 'Javi se mi sutra.', 'Mi se javi sutra.', 'Se mi javi sutra.'],
    answer: 'Javi mi se sutra.',
    tip: 'se always comes after the dative pronoun.',
  },
  {
    mode: 'klitike',
    q: 'Koja je rečenica točna?',
    en: 'Send me that photo.',
    opts: [
      'Pošalji mi tu fotografiju.',
      'Mi pošalji tu fotografiju.',
      'Pošalji tu mi fotografiju.',
      'Pošalji meni mi tu fotografiju.',
    ],
    answer: 'Pošalji mi tu fotografiju.',
    tip: 'The short word follows the command at once.',
  },
  {
    mode: 'klitike',
    q: 'Koja je rečenica točna?',
    en: 'Show it to him. (the book)',
    opts: ['Pokaži mu je.', 'Pokaži je mu.', 'Mu je pokaži.', 'Je mu pokaži.'],
    answer: 'Pokaži mu je.',
    tip: 'mu (to him) before je (it — the book).',
  },
  {
    mode: 'klitike',
    q: 'Koja je rečenica točna?',
    en: 'Help me, please! (to a stranger)',
    opts: [
      'Pomozite mi, molim Vas!',
      'Mi pomozite, molim Vas!',
      'Pomozite me, molim Vas!',
      'Pomozite ja, molim Vas!',
    ],
    answer: 'Pomozite mi, molim Vas!',
    tip: 'pomoći takes the dative: mi, right after the command.',
  },
  {
    mode: 'klitike',
    q: 'Koja je rečenica točna?',
    en: 'Tell us everything. (to a group)',
    opts: ['Recite nam sve.', 'Nam recite sve.', 'Recite nas sve.', 'Recite sve nas.'],
    answer: 'Recite nam sve.',
    tip: 'To whom: the dative nam, after the command.',
  },
  {
    mode: 'klitike',
    q: 'Koja je rečenica točna?',
    en: 'Sit down, please. (to a friend)',
    opts: ['Sjedni, molim te.', 'Sjedni, molim ti.', 'Sjedni, te molim.', 'Sjedni, molim tebi.'],
    answer: 'Sjedni, molim te.',
    tip: 'molim takes the accusative: molim te.',
  },
  {
    mode: 'klitike',
    q: 'Koja je rečenica točna?',
    en: 'Buy it for me. (the bread)',
    opts: ['Kupi mi ga.', 'Kupi ga mi.', 'Mi ga kupi.', 'Kupi meni ga.'],
    answer: 'Kupi mi ga.',
    tip: 'Dative mi before accusative ga.',
  },

  // ── nemoj ──────────────────────────────────────────────────────────────
  {
    mode: 'nemoj',
    q: 'Nemoj ____ brinuti!',
    en: 'Do not worry!',
    opts: ['se', 'si', 'te', 'sebe'],
    answer: 'se',
    tip: 'brinuti se keeps its se, which follows nemoj.',
  },
  {
    mode: 'nemoj',
    q: 'Nemojte ga ____, spava.',
    en: 'Do not call him, he is sleeping.',
    opts: ['zvati', 'zovete', 'zovite', 'zvao'],
    answer: 'zvati',
    tip: 'After nemojte the verb stays in the infinitive.',
  },
  {
    mode: 'nemoj',
    q: 'Koja je rečenica točna?',
    en: 'Do not tell me that!',
    opts: ['Nemoj mi to reći!', 'Nemoj to mi reći!', 'Nemoj mi to rečeš!', 'Mi nemoj to reći!'],
    answer: 'Nemoj mi to reći!',
    tip: 'mi follows nemoj, and the verb stays in the infinitive.',
  },
  {
    mode: 'nemoj',
    q: '____ kasniti, molim Vas.',
    en: 'Please do not be late. (to a stranger)',
    opts: ['Nemojte', 'Nemoj', 'Nemojmo', 'Nemojete'],
    answer: 'Nemojte',
    tip: 'Polite address takes the -te form: nemojte.',
  },
  {
    mode: 'nemoj',
    q: 'Nemoj ____ ključ!',
    en: 'Do not forget the key!',
    opts: ['zaboraviti', 'zaboraviš', 'zaboravi', 'zaboravio'],
    answer: 'zaboraviti',
    tip: 'nemoj + the infinitive.',
  },
  {
    mode: 'nemoj',
    q: 'Koja je rečenica točna?',
    en: 'Do not give it to him!',
    opts: ['Nemoj mu ga dati!', 'Nemoj ga mu dati!', 'Nemoj dati mu ga!', 'Mu ga nemoj dati!'],
    answer: 'Nemoj mu ga dati!',
    tip: 'Both short words follow nemoj: dative mu before accusative ga.',
  },
  {
    mode: 'nemoj',
    q: '____ pušiti ovdje.',
    en: 'Let us not smoke here.',
    opts: ['Nemojmo', 'Nemoj', 'Nemojte', 'Nemojemo'],
    answer: 'Nemojmo',
    tip: '"Let us not" is nemojmo.',
  },
  {
    mode: 'nemoj',
    q: '____ diraj, vruće je!',
    en: 'Do not touch, it is hot!',
    opts: ['Ne', 'Nemoj', 'Ni', 'Nije'],
    answer: 'Ne',
    tip: 'diraj is already a command, so it takes ne. Nemoj would need the infinitive dirati.',
  },
];
