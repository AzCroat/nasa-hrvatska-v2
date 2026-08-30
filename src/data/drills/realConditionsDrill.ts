// src/data/drills/realConditionsDrill.ts
//
// B1 IF — REAL CONDITIONS — the drill for the `real-conditions` lesson.
//
// The pool has three conditional drills — `conditional` (B1),
// `conditionaldrill` (B2), `pogodbene` (C1) — and every one of them carries the
// category `conditional`, which routes to `cloze` and is claimed by the C2
// `kondicional-drugi` lesson. They also all teach the UNREAL conditional
// (bih / bi plus participle), which is the other half of the subject. This
// lesson is about conditions that may genuinely happen, and it needs its own
// category and its own bank.
//
// The good news, and the drill leads with it:
//
//   THE IF-CLAUSE STAYS IN THE PRESENT, exactly as in English. *Ako imaš
//   vremena, javi mi.* No special mood, nothing to learn — which is worth
//   saying out loud to a learner who has just been warned about the conditional.
//
//   THE MAIN CLAUSE CARRIES THE FUTURE OR THE IMPERATIVE. That is where the
//   time actually lives.
//
//   BUDEM IS THE FORM CROATIAN ADDS. *Ako budeš imao vremena, dođi* — a
//   dedicated future condition English has no equivalent for, and one learners
//   never produce because nothing prompts them to.
//
//   AKO IS NOT KAD. *Ako pada kiša* leaves it open; *kad pada kiša* means
//   whenever, or when it certainly will. English "if" and "when" split the same
//   way, but learners import *kad* for both because it came first.
//
// Three modes:
//   oblik   — the shapes: present in the if-clause, future or imperative outside
//   budem   — the dedicated future condition
//   akokad  — ako against kad, plus osim ako and u slučaju da

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const REAL_CONDITIONS_MODE_LABELS: Record<string, string> = {
  oblik: '🧱 Oblik rečenice',
  budem: '⏭️ Budem-oblik',
  akokad: '🔀 Ako ili kad',
};

export const REAL_CONDITIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Ako ____ vremena, javi mi. (imati)',
    en: 'If you have time, let me know.',
    opts: ['imaš', 'imao bi', 'budeš imati', 'imat ćeš'],
    answer: 'imaš',
    tip: 'THE IF-CLAUSE STAYS IN THE PRESENT — exactly as in English.',
  },
  {
    mode: 'oblik',
    q: 'U kojem je vremenu "ako"-rečenica?',
    en: 'Which tense in the if-clause?',
    opts: ['prezent', 'futur', 'perfekt', 'kondicional'],
    answer: 'prezent',
    tip: 'Present, and nothing about it is special.',
  },
  {
    mode: 'oblik',
    q: 'Ako pada kiša, ____ doma. (ostati, mi)',
    en: 'If it rains, we stay home.',
    opts: ['ostajemo', 'ostali bismo', 'ostat ćemo bili', 'ostanemo bi'],
    answer: 'ostajemo',
    tip: 'A general rule, so the present in both halves.',
  },
  {
    mode: 'oblik',
    q: 'Ako završim na vrijeme, ____ ti.',
    en: 'If I finish on time, I will call you.',
    opts: ['javit ću se', 'javio bih se', 'javljam se bi', 'javit će se'],
    answer: 'javit ću se',
    tip: 'The main clause carries the future. That is where the time lives.',
  },
  {
    mode: 'oblik',
    q: 'Što nosi glavna rečenica?',
    en: 'What does the main clause carry?',
    opts: ['futur ili imperativ', 'prezent', 'kondicional', 'perfekt'],
    answer: 'futur ili imperativ',
    tip: 'Ako imaš vremena, JAVI MI — the imperative is very common here.',
  },
  {
    mode: 'oblik',
    q: 'Ako vidiš Marka, ____ mu. (reći)',
    en: 'If you see Marko, tell him.',
    opts: ['reci', 'rekao bi', 'rekneš', 'govori'],
    answer: 'reci',
    tip: 'Imperative in the main clause, present in the condition.',
  },
  {
    mode: 'oblik',
    q: 'Je li ovdje potreban kondicional?',
    en: 'Is the conditional needed?',
    opts: ['ne, uvjet je stvaran', 'da, uvijek', 'samo u pismu', 'samo uz "ako"'],
    answer: 'ne, uvjet je stvaran',
    tip: 'The conditional is for things that will not happen. This may.',
  },
  {
    mode: 'oblik',
    q: 'Gdje ide zarez?',
    en: 'Where does the comma go?',
    opts: ['iza "ako"-rečenice kad je prva', 'nikad', 'uvijek prije "ako"', 'na kraju rečenice'],
    answer: 'iza "ako"-rečenice kad je prva',
    tip: 'Ako imaš vremena, javi mi. The comma marks where the condition ends.',
  },

  // ── budem ─────────────────────────────────────────────────────────────────
  {
    mode: 'budem',
    q: 'Ako ____ mogao, dođi. (ti)',
    en: 'If you can, come.',
    opts: ['budeš', 'ćeš', 'bi', 'si'],
    answer: 'budeš',
    tip: 'The budem-form plus the participle — a dedicated FUTURE condition.',
  },
  {
    mode: 'budem',
    q: 'Kako glasi taj oblik za "ja"?',
    en: 'The form for ja:',
    opts: ['budem', 'budeš', 'bude', 'bih'],
    answer: 'budem',
    tip: 'budem, budeš, bude, budemo, budete, budu.',
  },
  {
    mode: 'budem',
    q: 'Ako ____ imao vremena, nazvat ću te. (ja)',
    en: 'If I have time, I will call you.',
    opts: ['budem', 'bih', 'ću', 'sam'],
    answer: 'budem',
    tip: 'And note that English still uses a present here — Croatian is more explicit.',
  },
  {
    mode: 'budem',
    q: 'Što slijedi iza "budem"?',
    en: 'What follows budem?',
    opts: ['glagolski pridjev radni', 'infinitiv', 'prezent', 'imperativ'],
    answer: 'glagolski pridjev radni',
    tip: 'budem imao, budeš mogao — the same participle the perfect uses.',
  },
  {
    mode: 'budem',
    q: 'Ima li engleski svoj oblik za ovo?',
    en: 'Does English have an equivalent?',
    opts: ['nema', 'ima, "will have"', 'ima, "would"', 'ima, "shall"'],
    answer: 'nema',
    tip: 'Which is why learners never produce it — nothing in English prompts it.',
  },
  {
    mode: 'budem',
    q: 'Ako ____ padala kiša, ostat ćemo doma.',
    en: 'If it rains, we will stay home.',
    opts: ['bude', 'budeš', 'budem', 'budu'],
    answer: 'bude',
    tip: 'Third person singular — the rain is the subject.',
  },
  {
    mode: 'budem',
    q: 'Je li "budem" isto što i "bih"?',
    en: 'Is budem the same as bih?',
    opts: [
      'ne, bih je kondicional za nestvarno',
      'da',
      'razlikuju se samo po registru',
      'bih je starije',
    ],
    answer: 'ne, bih je kondicional za nestvarno',
    tip: 'budem = it may happen. bih = it would have, but did not.',
  },
  {
    mode: 'budem',
    q: 'Kada se bira "budem" umjesto prezenta?',
    en: 'When would you use budem over the present?',
    opts: [
      'kad se naglašava budućnost uvjeta',
      'kad je rečenica duga',
      'u formalnom pismu',
      'nikad',
    ],
    answer: 'kad se naglašava budućnost uvjeta',
    tip: 'Both are correct; budem makes the future explicit.',
  },

  // ── akokad ────────────────────────────────────────────────────────────────
  {
    mode: 'akokad',
    q: 'Što izriče "ako"?',
    en: 'What does ako express?',
    opts: ['možda se dogodi', 'sigurno se dogodi', 'dogodilo se', 'ne dogodi se'],
    answer: 'možda se dogodi',
    tip: 'It leaves the question open.',
  },
  {
    mode: 'akokad',
    q: 'Što izriče "kad" u ovakvoj rečenici?',
    en: 'And kad?',
    opts: ['sigurno ili kad god', 'možda', 'nikad', 'jednom davno'],
    answer: 'sigurno ili kad god',
    tip: 'Kad pada kiša, ostajem doma — whenever it rains.',
  },
  {
    mode: 'akokad',
    q: '____ padne snijeg, idemo na skijanje. (it may)',
    en: 'If it snows, we will go skiing.',
    opts: ['Ako', 'Kad', 'Dok', 'Iako'],
    answer: 'Ako',
    tip: 'Snow is not guaranteed, so ako.',
  },
  {
    mode: 'akokad',
    q: '____ dođe ljeto, idemo na more. (it will)',
    en: 'When summer comes, we go to the coast.',
    opts: ['Kad', 'Ako', 'Osim ako', 'U slučaju da'],
    answer: 'Kad',
    tip: 'Summer will certainly come. Ako here would be a joke.',
  },
  {
    mode: 'akokad',
    q: 'Što znači "osim ako"?',
    en: 'osim ako',
    opts: ['unless', 'in case', 'although', 'as soon as'],
    answer: 'unless',
    tip: 'Doći ću osim ako ne padne kiša.',
  },
  {
    mode: 'akokad',
    q: 'Što znači "u slučaju da"?',
    en: 'u slučaju da',
    opts: ['in case', 'unless', 'because', 'whenever'],
    answer: 'in case',
    tip: 'Ponesi kišobran u slučaju da padne kiša.',
  },
  {
    mode: 'akokad',
    q: 'Koja riječ NE uvodi uvjet?',
    en: 'Which does not introduce a condition?',
    opts: ['iako', 'ako', 'osim ako', 'u slučaju da'],
    answer: 'iako',
    tip: 'iako concedes — although. One letter from ako and the opposite job.',
  },
  {
    mode: 'akokad',
    q: 'Zašto učenici ovdje rabe "kad" prečesto?',
    en: 'Why do learners overuse kad?',
    opts: ['nauče ga prije "ako"', 'kraće je', 'lakše se izgovara', 'ne rabe ga prečesto'],
    answer: 'nauče ga prije "ako"',
    tip: 'It arrives first and gets used for both — but it claims the thing is certain.',
  },
];
