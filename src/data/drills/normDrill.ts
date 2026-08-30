// src/data/drills/normDrill.ts
//
// C2 NORMA I UZUS — the drill for the `norma-i-uzus` lesson.
//
// The level opens by moving the question. Up to here a form has been right or
// wrong; from here it is PRESCRIBED (*norma*) or OBSERVED (*uzus*), and the
// interesting cases are where the two part company. *Trebam da radim* is heard
// constantly and is marked in writing; *di si* is spoken Croatian and never
// written outside dialogue. Neither is a mistake in the sense a learner has
// been trained to hear.
//
// HYPERCORRECTION IS ITS OWN CLASS OF ERROR, and the most conspicuous one: a
// speaker who has learned that *sa* is over-used starts writing *s sestrom*,
// which is harder to say and more obviously wrong than what it replaced. The
// rule is phonological — *sa* before *s, š, z, ž* and before *mnom*.
//
// And the C2 skill is consistency: pick a register for the reader and stay
// inside it. Mixing registers reads as a mistake even when every form in the
// text is defensible on its own.
//
// Three modes:
//   razlika   — norma against uzus
//   hiperkor  — hypercorrection, and the s/sa rule it breaks
//   dosljedno — choosing a register and staying in it

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const NORM_MODE_LABELS: Record<string, string> = {
  razlika: '⚖️ Norma i uzus',
  hiperkor: '🔁 Hiperkorekcija',
  dosljedno: '🎯 Dosljednost',
};

export const NORM_DRILL_DATA: ModeDrillItem[] = [
  // ── razlika ───────────────────────────────────────────────────────────────
  {
    mode: 'razlika',
    q: 'Što je "norma"?',
    en: 'What is norma?',
    opts: ['ono što je propisano', 'ono što se govori', 'prosjek uporabe', 'pravopis'],
    answer: 'ono što je propisano',
    tip: 'Prescribed. Uzus is what educated speakers actually do.',
  },
  {
    mode: 'razlika',
    q: 'Što je "uzus"?',
    en: 'What is uzus?',
    opts: ['ono što se doista rabi', 'ono što je propisano', 'starija norma', 'dijalekt'],
    answer: 'ono što se doista rabi',
    tip: 'Observed usage — and the two agree almost everywhere.',
  },
  {
    mode: 'razlika',
    q: 'Koji je oblik normativan?',
    en: 'Which does the norm prescribe?',
    opts: ['trebam raditi', 'trebam da radim', 'oba jednako', 'nijedan'],
    answer: 'trebam raditi',
    tip: 'The da-construction is marked; keep it out of writing.',
  },
  {
    mode: 'razlika',
    q: 'Je li "trebam da radim" pogreška?',
    en: 'Is it an error?',
    opts: ['obilježeno je, ne pogrešno', 'jest, uvijek', 'nije obilježeno', 'samo u govoru'],
    answer: 'obilježeno je, ne pogrešno',
    tip: 'Marked rather than wrong — which is the distinction this level is about.',
  },
  {
    mode: 'razlika',
    q: 'Kada se rabi "dvojica"?',
    en: 'When is dvojica used?',
    opts: ['samo za muškarce', 'za mješovitu skupinu', 'za bilo koga', 'za stvari'],
    answer: 'samo za muškarce',
    tip: 'Men only. A mixed group takes dvoje: dvoje djece, dvoje ljudi.',
  },
  {
    mode: 'razlika',
    q: 'Gdje pripada "di si bio?"',
    en: 'Where does di si belong?',
    opts: ['samo u govoru', 'i u pisanju', 'u formalnom pisanju', 'nigdje'],
    answer: 'samo u govoru',
    tip: 'Spoken Croatian, and never written outside dialogue.',
  },
  {
    mode: 'razlika',
    q: 'Je li norma proizvoljna?',
    en: 'Is the norm arbitrary?',
    opts: ['odabrana je, ali ne proizvoljna', 'posve je proizvoljna', 'prirodna je', 'slučajna je'],
    answer: 'odabrana je, ali ne proizvoljna',
    tip: 'Chosen, and chosen for reasons — which is not the same as inevitable.',
  },
  {
    mode: 'razlika',
    q: 'Što znači da je oblik "manje standardan"?',
    en: 'What does "less standard" mean?',
    opts: ['obilježen ili regionalan', 'pogrešan', 'zastario', 'stran'],
    answer: 'obilježen ili regionalan',
    tip: 'It carries information about the speaker, which is why it is noticed.',
  },

  // ── hiperkor ──────────────────────────────────────────────────────────────
  {
    mode: 'hiperkor',
    q: 'Idem ____ sestrom.',
    en: 'I am going with my sister.',
    opts: ['sa', 's', 'so', 'su'],
    answer: 'sa',
    tip: 'sa before s, š, z, ž. Writing s sestrom is the hypercorrection.',
  },
  {
    mode: 'hiperkor',
    q: 'Idem ____ njim.',
    en: 'I am going with him.',
    opts: ['s', 'sa', 'so', 'su'],
    answer: 's',
    tip: 'njim starts with nj, so plain s.',
  },
  {
    mode: 'hiperkor',
    q: 'Idem ____ mnom.',
    en: 'Come with me.',
    opts: ['sa', 's', 'so', 'su'],
    answer: 'sa',
    tip: 'sa mnom is the one exception outside the s/š/z/ž rule.',
  },
  {
    mode: 'hiperkor',
    q: 'Što je hiperkorekcija?',
    en: 'What is hypercorrection?',
    opts: [
      'pogreška iz pretjerane primjene pravila',
      'obična pogreška',
      'previše ispravljanja teksta',
      'previše formalan stil',
    ],
    answer: 'pogreška iz pretjerane primjene pravila',
    tip: 'The rule is applied where it does not reach.',
  },
  {
    mode: 'hiperkor',
    q: 'Zašto je hiperkorekcija uočljivija od pogreške koju zamjenjuje?',
    en: 'Why is it more conspicuous?',
    opts: ['odaje trud oko pravila', 'rjeđa je', 'dulja je', 'nije uočljivija'],
    answer: 'odaje trud oko pravila',
    tip: 'It shows the speaker reaching, which the original slip did not.',
  },
  {
    mode: 'hiperkor',
    q: 'Što odlučuje o s/sa?',
    en: 'What decides s against sa?',
    opts: ['glas koji slijedi', 'padež', 'rod', 'registar'],
    answer: 'glas koji slijedi',
    tip: 'Pronounceability. It is a phonological rule, not a grammatical one.',
  },
  {
    mode: 'hiperkor',
    q: 'Idem ____ zubaru.',
    en: 'I am going to the dentist.',
    opts: ['k', 'ka', 'kod', 'do'],
    answer: 'k',
    tip: 'k plus the dative. Ka appears only before k and g — the same shape of rule.',
  },
  {
    mode: 'hiperkor',
    q: 'Radim ____ školi.',
    en: 'I work at a school.',
    opts: ['u', 'na', 'kod', 'po'],
    answer: 'u',
    tip: 'u školi — and reaching for na because it sounds more careful is the same error class.',
  },

  // ── dosljedno ─────────────────────────────────────────────────────────────
  {
    mode: 'dosljedno',
    q: 'Što je gore u tekstu?',
    en: 'Which is worse in a text?',
    opts: ['miješanje registara', 'jedan manje standardan oblik', 'duga rečenica', 'ponavljanje'],
    answer: 'miješanje registara',
    tip: 'Consistency inside a register beats correctness across registers.',
  },
  {
    mode: 'dosljedno',
    q: 'Za koga se bira registar?',
    en: 'Who decides the register?',
    opts: ['čitatelj', 'pisac', 'norma', 'tema'],
    answer: 'čitatelj',
    tip: 'Choose for the reader, then stay inside the choice.',
  },
  {
    mode: 'dosljedno',
    q: 'Smije li se u dijalogu pisati "di si"?',
    en: 'May you write di si in dialogue?',
    opts: ['da, to je karakterizacija', 'ne, nikad', 'samo u kurzivu', 'samo u navodnicima'],
    answer: 'da, to je karakterizacija',
    tip: 'In dialogue it places a character — which is a register choice, not a slip.',
  },
  {
    mode: 'dosljedno',
    q: 'Koji je oblik prikladan u službenom dopisu?',
    en: 'In an official letter:',
    opts: [
      'Molim Vas da dostavite…',
      'Molim te da mi pošalješ…',
      'Trebam da dostaviš…',
      'Daj mi to.',
    ],
    answer: 'Molim Vas da dostavite…',
    tip: 'And the capitalised Vi stays capitalised from the first word to the last.',
  },
  {
    mode: 'dosljedno',
    q: 'Što je "kolokvijalizam"?',
    en: 'What is a colloquialism?',
    opts: ['razgovorni oblik', 'pogreška', 'dijalektizam', 'posuđenica'],
    answer: 'razgovorni oblik',
    tip: 'Correct in its register and marked outside it.',
  },
  {
    mode: 'dosljedno',
    q: 'Koliko Hrvatskih jezika C2 govornik ima?',
    en: 'How many Croatians does a C2 speaker have?',
    opts: ['više, i bira među njima', 'jedan ispravan', 'dva', 'ovisi o kraju'],
    answer: 'više, i bira među njima',
    tip: 'Having several and choosing deliberately is the C2 endpoint.',
  },
  {
    mode: 'dosljedno',
    q: 'Što otkriva nedosljedan registar?',
    en: 'What does a drifting register reveal?',
    opts: ['da pisac ne čuje razliku', 'da je tekst dug', 'da je tema složena', 'ništa'],
    answer: 'da pisac ne čuje razliku',
    tip: 'Which is exactly the impression the level is meant to remove.',
  },
  {
    mode: 'dosljedno',
    q: 'Gdje je granica između norme i uzusa najzanimljivija?',
    en: 'Where is the boundary most interesting?',
    opts: ['ondje gdje se razilaze', 'ondje gdje se slažu', 'u pravopisu', 'u rječniku'],
    answer: 'ondje gdje se razilaze',
    tip: 'They agree almost everywhere; the C2 judgement lives in the gap.',
  },
];
