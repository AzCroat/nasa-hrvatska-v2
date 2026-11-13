// src/data/drills/b2/reflexiveSebeDrill.ts
//
// B2 THE REFLEXIVE PRONOUN — the drill for the `reflexive-sebe` lesson.
//
// sebe in every case (sebe, sebi, sobom), the long form after a preposition, the
// reflexive against the personal pronoun, and the place of the clitics se and si.
// The dative has two correct forms (sebi and si), so no item offers both; and a
// distractor is never real Croatian that would also fit the English gloss.
//
// Three modes:
//   oblik  — the right case form after a preposition
//   izbor  — reflexive or not; the se that is part of a verb
//   kratko — where the short forms se and si go

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const REFLEXIVE_SEBE_MODE_LABELS: Record<string, string> = {
  oblik: '🧩 Oblik',
  izbor: '🪞 Izbor',
  kratko: '📍 Kratki oblici',
};

export const REFLEXIVE_SEBE_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Uvijek nosim kišobran sa ____.',
    en: 'I always carry an umbrella with me.',
    opts: ['sobom', 'sebe', 'sebi', 'se'],
    answer: 'sobom',
    tip: 's takes the instrumental, and the instrumental of sebe is sobom.',
  },
  {
    mode: 'oblik',
    q: 'Ona voli pričati o ____.',
    en: 'She likes talking about herself.',
    opts: ['sebi', 'sebe', 'se', 'si'],
    answer: 'sebi',
    tip: 'o takes the locative; after a preposition only the long form.',
  },
  {
    mode: 'oblik',
    q: 'Imaš li novca kod ____?',
    en: 'Do you have any money on you?',
    opts: ['sebe', 'sebi', 'sobom', 'se'],
    answer: 'sebe',
    tip: 'kod takes the genitive: kod sebe.',
  },
  {
    mode: 'oblik',
    q: 'Previše misliš na ____.',
    en: 'You think about yourself too much.',
    opts: ['sebe', 'sebi', 'sobom', 'si'],
    answer: 'sebe',
    tip: 'misliti na + the accusative, long form after the preposition.',
  },
  {
    mode: 'oblik',
    q: 'Nakon nesreće dugo nije došao k ____.',
    en: 'After the accident he took a long time to come round.',
    opts: ['sebi', 'sebe', 'sobom', 'se'],
    answer: 'sebi',
    tip: 'k takes the dative: doći k sebi, to come round.',
  },
  {
    mode: 'oblik',
    q: 'Kad je čula vijest, bila je izvan ____ od sreće.',
    en: 'When she heard the news, she was beside herself with joy.',
    opts: ['sebe', 'sebi', 'sobom', 'se'],
    answer: 'sebe',
    tip: 'izvan takes the genitive: biti izvan sebe.',
  },
  {
    mode: 'oblik',
    q: 'Studenti su podijelili zadatke među ____.',
    en: 'The students divided the tasks among themselves.',
    opts: ['sobom', 'sebe', 'sebi', 'se'],
    answer: 'sobom',
    tip: 'među here takes the instrumental: među sobom.',
  },
  {
    mode: 'oblik',
    q: 'Kupio je poklon za ____, a ne za nju.',
    en: 'He bought the present for himself, not for her.',
    opts: ['sebe', 'sebi', 'sobom', 'se'],
    answer: 'sebe',
    tip: 'za takes the accusative, long form: za sebe.',
  },

  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: 'Marko je kupio ____ novi bicikl.',
    en: 'Marko bought himself a new bike.',
    opts: ['sebi', 'njemu', 'meni', 'tebi'],
    answer: 'sebi',
    tip: 'The bike is for the subject himself, so the pronoun is reflexive.',
  },
  {
    mode: 'izbor',
    q: 'Marko je kupio ____ novi bicikl jer je brat imao rođendan.',
    en: 'Marko bought him a new bike because his brother had a birthday.',
    opts: ['njemu', 'sebi', 'sebe', 'njega'],
    answer: 'njemu',
    tip: 'The bike is for another person, the brother: the personal dative njemu.',
  },
  {
    mode: 'izbor',
    q: 'Ja sam napravio ____ sendvič.',
    en: 'I made myself a sandwich.',
    opts: ['sebi', 'meni', 'mene', 'sebe'],
    answer: 'sebi',
    tip: 'Even with ja as the subject, "myself" is reflexive: sebi, never meni.',
  },
  {
    mode: 'izbor',
    q: 'Ti uvijek misliš samo na ____.',
    en: 'You always think only about yourself.',
    opts: ['sebe', 'tebe', 'tebi', 'sebi'],
    answer: 'sebe',
    tip: 'The subject is ti and the object is the same person: na sebe.',
  },
  {
    mode: 'izbor',
    q: 'Ivana nikad ne priča o ____, uvijek samo o drugima.',
    en: 'Ivana never talks about herself, always only about others.',
    opts: ['sebi', 'njoj', 'nju', 'sebe'],
    answer: 'sebi',
    tip: 'About Ivana herself: the reflexive locative sebi.',
  },
  {
    mode: 'izbor',
    q: 'Pazi na ____ na putu!',
    en: 'Take care of yourself on the road!',
    opts: ['sebe', 'tebe', 'sebi', 'se'],
    answer: 'sebe',
    tip: 'paziti na + the accusative; the subject of the imperative is ti.',
  },
  {
    mode: 'izbor',
    q: 'Kad sam čuo tu pjesmu, sjetio sam ____ mladosti.',
    en: 'When I heard that song, I remembered my youth.',
    opts: ['se', 'sebe', 'sebi', 'si'],
    answer: 'se',
    tip: 'In sjetiti se the se is part of the verb; it cannot become sebe.',
  },
  {
    mode: 'izbor',
    q: 'Ne bojim ____ visine.',
    en: 'I am not afraid of heights.',
    opts: ['se', 'sebe', 'sebi', 'si'],
    answer: 'se',
    tip: 'bojati se: the se belongs to the verb.',
  },

  // ── kratko ────────────────────────────────────────────────────────────────
  {
    mode: 'kratko',
    q: 'Koja je rečenica točna?',
    en: 'He bought himself a car.',
    opts: ['Kupio si je auto.', 'Kupio je si auto.', 'Si je kupio auto.', 'Kupio je auto si.'],
    answer: 'Kupio si je auto.',
    tip: 'Pronoun clitics come before je, and a clitic never opens the sentence.',
  },
  {
    mode: 'kratko',
    q: 'Koja je rečenica točna?',
    en: 'Make yourself a coffee!',
    opts: ['Napravi si kavu!', 'Si napravi kavu!', 'Napravi kavu si!', 'Napravi se kavu!'],
    answer: 'Napravi si kavu!',
    tip: 'si, the short dative, follows the verb in second position.',
  },
  {
    mode: 'kratko',
    q: 'Koja je rečenica točna?',
    en: 'I saw myself in the photo.',
    opts: [
      'Vidio sam se na fotografiji.',
      'Vidio se sam na fotografiji.',
      'Se sam vidio na fotografiji.',
      'Vidio sam si na fotografiji.',
    ],
    answer: 'Vidio sam se na fotografiji.',
    tip: 'The auxiliary sam comes before the pronoun se in the cluster; the object is accusative.',
  },
  {
    mode: 'kratko',
    q: 'Koja je rečenica točna?',
    en: 'Yesterday she bought herself new shoes.',
    opts: [
      'Jučer si je kupila nove cipele.',
      'Jučer je si kupila nove cipele.',
      'Jučer kupila je si nove cipele.',
      'Si je jučer kupila nove cipele.',
    ],
    answer: 'Jučer si je kupila nove cipele.',
    tip: 'The cluster si je follows the first word, jučer.',
  },
  {
    mode: 'kratko',
    q: 'Koja je rečenica točna?',
    en: 'Take your passport with you.',
    opts: [
      'Uzmi putovnicu sa sobom.',
      'Uzmi putovnicu sa se.',
      'Uzmi putovnicu s sebi.',
      'Uzmi putovnicu sobom.',
    ],
    answer: 'Uzmi putovnicu sa sobom.',
    tip: 'A preposition needs the long instrumental: sa sobom.',
  },
  {
    mode: 'kratko',
    q: 'Koja je rečenica točna?',
    en: 'We gave ourselves a day off.',
    opts: [
      'Dali smo si slobodan dan.',
      'Dali si smo slobodan dan.',
      'Si smo dali slobodan dan.',
      'Dali smo se slobodan dan.',
    ],
    answer: 'Dali smo si slobodan dan.',
    tip: 'smo comes before si, and the dative is si, not se.',
  },
  {
    mode: 'kratko',
    q: 'Koja je rečenica točna?',
    en: 'Do you wash your face with cold water?',
    opts: [
      'Umivaš li se hladnom vodom?',
      'Umivaš se li hladnom vodom?',
      'Li se umivaš hladnom vodom?',
      'Umivaš li sebi hladnom vodom?',
    ],
    answer: 'Umivaš li se hladnom vodom?',
    tip: 'li comes first in the cluster, then se.',
  },
  {
    mode: 'kratko',
    q: 'Koja je rečenica točna?',
    en: 'She talks only about herself.',
    opts: ['Priča samo o sebi.', 'Priča samo o si.', 'Priča samo o se.', 'Priča samo sebi o.'],
    answer: 'Priča samo o sebi.',
    tip: 'Only the long form can follow a preposition.',
  },
];
