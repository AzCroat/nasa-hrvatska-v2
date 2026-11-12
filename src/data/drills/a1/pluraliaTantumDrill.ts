// src/data/drills/a1/pluraliaTantumDrill.ts
//
// A1 WORDS THAT ARE ONLY PLURAL — the drill for the `pluralia-tantum` lesson
// (new A1, 90).
//
// hlače, traperice, naočale, škare, novine take feminine plural agreement; vrata,
// leđa, usta take neuter plural. The verb is always plural (Hlače su nove, Vrata su
// bila zatvorena), "one" is jedne / jedna, and pairs of clothes are counted with par
// (dva para hlača). As an object they do not change; in the genitive the -e words
// drop it (bez naočala, nema novina).
//
// Three modes:
//   glagol    — the verb agrees in the plural
//   pridjev   — the describing word agrees in the plural
//   brojenje  — one, pairs and the genitive

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PLURALIA_TANTUM_MODE_LABELS: Record<string, string> = {
  glagol: '🔁 Glagol',
  pridjev: '🎨 Pridjev',
  brojenje: '🔢 Jedne, par, bez',
};

export const PLURALIA_TANTUM_DRILL_DATA: ModeDrillItem[] = [
  // ── glagol ────────────────────────────────────────────────────────────────
  {
    mode: 'glagol',
    q: 'Moje hlače ____ nove.',
    en: 'My trousers are new.',
    opts: ['su', 'je', 'si', 'sam'],
    answer: 'su',
    tip: 'hlače is plural, so the verb is plural.',
  },
  {
    mode: 'glagol',
    q: 'Vrata ____ otvorena.',
    en: 'The door is open.',
    opts: ['su', 'je', 'smo', 'ste'],
    answer: 'su',
    tip: 'vrata is a neuter plural: su.',
  },
  {
    mode: 'glagol',
    q: 'Gdje ____ moje naočale?',
    en: 'Where are my glasses?',
    opts: ['su', 'je', 'si', 'smo'],
    answer: 'su',
    tip: 'naočale is plural.',
  },
  {
    mode: 'glagol',
    q: 'Novine su ____ na stolu.',
    en: 'The newspaper was on the table.',
    opts: ['bile', 'bila', 'bio', 'bilo'],
    answer: 'bile',
    tip: 'novine is a feminine plural: su bile.',
  },
  {
    mode: 'glagol',
    q: 'Vrata su ____ zatvorena.',
    en: 'The door was closed.',
    opts: ['bila', 'bile', 'bio', 'bili'],
    answer: 'bila',
    tip: 'vrata is a neuter plural: su bila.',
  },
  {
    mode: 'glagol',
    q: 'Leđa me ____.',
    en: 'My back hurts.',
    opts: ['bole', 'boli', 'bolim', 'boliš'],
    answer: 'bole',
    tip: 'leđa is plural: bole.',
  },
  {
    mode: 'glagol',
    q: 'Škare ____ u ladici.',
    en: 'The scissors are in the drawer.',
    opts: ['su', 'je', 'smo', 'ste'],
    answer: 'su',
    tip: 'škare is plural.',
  },
  {
    mode: 'glagol',
    q: 'Ove ____ su skupe.',
    en: 'These trousers are expensive.',
    opts: ['hlače', 'hlača', 'hlaču', 'hlačom'],
    answer: 'hlače',
    tip: 'The word exists only in the plural.',
  },

  // ── pridjev ───────────────────────────────────────────────────────────────
  {
    mode: 'pridjev',
    q: 'Moje hlače su ____.',
    en: 'My trousers are black.',
    opts: ['crne', 'crna', 'crni', 'crno'],
    answer: 'crne',
    tip: 'Feminine plural: -e.',
  },
  {
    mode: 'pridjev',
    q: 'Vrata su ____.',
    en: 'The door is big.',
    opts: ['velika', 'velike', 'veliki', 'veliko'],
    answer: 'velika',
    tip: 'Neuter plural: -a.',
  },
  {
    mode: 'pridjev',
    q: '____ naočale su na stolu.',
    en: 'Your glasses are on the table.',
    opts: ['Tvoje', 'Tvoja', 'Tvoj', 'Tvoju'],
    answer: 'Tvoje',
    tip: 'Feminine plural: -e.',
  },
  {
    mode: 'pridjev',
    q: '____ leđa su jaka.',
    en: 'His back is strong.',
    opts: ['Njegova', 'Njegove', 'Njegov', 'Njegovo'],
    answer: 'Njegova',
    tip: 'leđa is a neuter plural: -a.',
  },
  {
    mode: 'pridjev',
    q: 'Kupujem ____ traperice.',
    en: 'I am buying blue jeans.',
    opts: ['plave', 'plava', 'plavu', 'plavi'],
    answer: 'plave',
    tip: 'Feminine plural object: -e, the same as the subject form.',
  },
  {
    mode: 'pridjev',
    q: '____ vrata su zatvorena.',
    en: 'This door is closed.',
    opts: ['Ova', 'Ove', 'Ovo', 'Ovaj'],
    answer: 'Ova',
    tip: 'Neuter plural: ova.',
  },
  {
    mode: 'pridjev',
    q: 'Ove novine su ____.',
    en: 'This newspaper is old.',
    opts: ['stare', 'stara', 'star', 'staro'],
    answer: 'stare',
    tip: 'Feminine plural: -e.',
  },
  {
    mode: 'pridjev',
    q: 'Ove škare nisu ____.',
    en: 'These scissors are not sharp.',
    opts: ['oštre', 'oštra', 'oštar', 'oštro'],
    answer: 'oštre',
    tip: 'Feminine plural: -e.',
  },

  // ── brojenje ──────────────────────────────────────────────────────────────
  {
    mode: 'brojenje',
    q: 'Kupila sam ____ hlače.',
    en: 'I bought one pair of trousers.',
    opts: ['jedne', 'jednu', 'jedna', 'jedan'],
    answer: 'jedne',
    tip: 'jedan has a plural form for plural-only words.',
  },
  {
    mode: 'brojenje',
    q: 'U sobi su ____ vrata.',
    en: 'There is one door in the room.',
    opts: ['jedna', 'jedne', 'jedno', 'jedan'],
    answer: 'jedna',
    tip: 'The neuter plural form of jedan: jedna vrata.',
  },
  {
    mode: 'brojenje',
    q: 'Ne vidim bez ____.',
    en: 'I cannot see without glasses.',
    opts: ['naočala', 'naočale', 'naočalu', 'naočalama'],
    answer: 'naočala',
    tip: 'bez takes the genitive: the -e drops off.',
  },
  {
    mode: 'brojenje',
    q: 'Danas nema ____.',
    en: 'There is no newspaper today.',
    opts: ['novina', 'novine', 'novinu', 'novinama'],
    answer: 'novina',
    tip: 'nema takes the genitive: the -e drops off.',
  },
  {
    mode: 'brojenje',
    q: 'Imam dva ____ traperica.',
    en: 'I have two pairs of jeans.',
    opts: ['para', 'par', 'pari', 'parova'],
    answer: 'para',
    tip: 'After dva, the genitive singular: dva para.',
  },
  {
    mode: 'brojenje',
    q: 'U ormaru su tri para ____.',
    en: 'There are three pairs of trousers in the wardrobe.',
    opts: ['hlača', 'hlače', 'hlačama', 'hlaču'],
    answer: 'hlača',
    tip: 'After par, the genitive plural: the -e drops off.',
  },
  {
    mode: 'brojenje',
    q: 'Trebam ____ novine.',
    en: 'I need one newspaper.',
    opts: ['jedne', 'jednu', 'jedna', 'jedno'],
    answer: 'jedne',
    tip: 'novine is plural, so one is jedne.',
  },
  {
    mode: 'brojenje',
    q: 'Koja riječ postoji samo u množini?',
    en: 'Which word exists only in the plural?',
    opts: ['škare', 'knjiga', 'stol', 'olovka'],
    answer: 'škare',
    tip: 'Scissors — like trousers and glasses — are plural-only.',
  },
];
