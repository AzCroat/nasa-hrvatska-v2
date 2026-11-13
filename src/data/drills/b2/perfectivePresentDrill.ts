// src/data/drills/b2/perfectivePresentDrill.ts
//
// B2 THE PERFECTIVE PRESENT — the drill for the `perfective-present` lesson
// (B2 position 39).
//
// Three modes, eight items each:
//   prezent — the perfective present after ako, kad, čim and dok ne
//   futur2  — future II: budem / budeš / bude … + the participle
//   glavna  — the main clause: future I or an imperative, never a bare perfective present
//
// Future II and the perfective present mean the same in these clauses, so an item
// never offers both as options: one of them would be a correct alternative.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PERFECTIVE_PRESENT_MODE_LABELS: Record<string, string> = {
  prezent: '⏭️ Kad završim',
  futur2: '🔮 Futur II',
  glavna: '🧱 Glavna rečenica',
};

export const PERFECTIVE_PRESENT_DRILL_DATA: ModeDrillItem[] = [
  // ── prezent ───────────────────────────────────────────────────────────────
  {
    mode: 'prezent',
    q: 'Kad ____ plaću, platit ću račune.',
    en: 'When I get my salary, I will pay the bills.',
    opts: ['dobijem', 'dobivam', 'dobit ću', 'dobiti'],
    answer: 'dobijem',
    tip: 'One future event after kad: the perfective verb in the present.',
  },
  {
    mode: 'prezent',
    q: 'Ako ____ dovoljno, ljeti idemo na Hvar.',
    en: 'If we save enough, we are going to Hvar in summer.',
    opts: ['uštedimo', 'uštedjet ćemo', 'uštedjeti', 'uštedjeli'],
    answer: 'uštedimo',
    tip: 'After ako, the perfective present points to the future.',
  },
  {
    mode: 'prezent',
    q: 'Čim ____ u hotel, javit ću ti se.',
    en: 'As soon as I arrive at the hotel, I will get in touch.',
    opts: ['stići', 'stignem', 'stići ću', 'stigao'],
    answer: 'stignem',
    tip: 'Čim takes the same form as kad.',
  },
  {
    mode: 'prezent',
    q: 'Neću otići dok ne ____ sve račune.',
    en: 'I will not leave until I pay all the bills.',
    opts: ['platiti', 'platit ću', 'platim', 'platio'],
    answer: 'platim',
    tip: 'Dok ne (until) takes a perfective verb in the present.',
  },
  {
    mode: 'prezent',
    q: 'Kad ____ stan, kupit ćemo kuću na selu.',
    en: 'When we sell the flat, we will buy a house in the country.',
    opts: ['prodat ćemo', 'prodamo', 'prodati', 'prodali'],
    answer: 'prodamo',
    tip: 'prodati is perfective; its present after kad points forward.',
  },
  {
    mode: 'prezent',
    q: 'Ako mi ____ deset eura, vratit ću ti ih sutra.',
    en: 'If you lend me ten euros, I will give them back tomorrow.',
    opts: ['posudit ćeš', 'posuditi', 'posudio', 'posudiš'],
    answer: 'posudiš',
    tip: 'One future act after ako: the perfective present, ti form.',
  },
  {
    mode: 'prezent',
    q: 'Ako cijene opet ____, kupovat ćemo manje.',
    en: 'If prices go up again, we will buy less.',
    opts: ['porastu', 'porasti', 'porast će', 'porasle'],
    answer: 'porastu',
    tip: 'porasti is perfective; oni form of its present.',
  },
  {
    mode: 'prezent',
    q: 'Kad ____ izvještaj, poslat ću ti ga.',
    en: 'When I finish the report, I will send it to you.',
    opts: ['završit ću', 'završiti', 'završim', 'završio'],
    answer: 'završim',
    tip: 'Future I belongs in the main clause; after kad use the present.',
  },

  // ── futur2 ────────────────────────────────────────────────────────────────
  {
    mode: 'futur2',
    q: 'Kad ____ završio fakultet, tražit ću posao.',
    en: 'When I finish university, I will look for a job.',
    opts: ['budem', 'sam', 'bih', 'ću'],
    answer: 'budem',
    tip: 'Future II uses the budem forms of biti.',
  },
  {
    mode: 'futur2',
    q: 'Ako ____ imao vremena, nazovi me.',
    en: 'If you have time, call me.',
    opts: ['bude', 'budeš', 'biste', 'ćeš'],
    answer: 'budeš',
    tip: 'Future II, ti form.',
  },
  {
    mode: 'futur2',
    q: 'Čim ____ stigli, javit ćemo se.',
    en: 'As soon as we arrive, we will get in touch.',
    opts: ['budemo', 'smo', 'bismo', 'ćemo'],
    answer: 'budemo',
    tip: 'Future II, mi form.',
  },
  {
    mode: 'futur2',
    q: 'Kad Ana bude ____ plaću, kupit će nove cipele.',
    en: 'When Ana gets her salary, she will buy new shoes.',
    opts: ['dobiti', 'dobila', 'dobije', 'dobit će'],
    answer: 'dobila',
    tip: 'Future II takes the past participle, agreeing with Ana.',
  },
  {
    mode: 'futur2',
    q: 'Ako ____ uštedjeli dovoljno, idete na more.',
    en: 'If you (all) have saved enough, you are going to the seaside.',
    opts: ['bude', 'biste', 'budete', 'ćete'],
    answer: 'budete',
    tip: 'Future II, vi form.',
  },
  {
    mode: 'futur2',
    q: 'Kad djeca ____ zaspala, gledat ćemo film.',
    en: 'When the children have fallen asleep, we will watch a film.',
    opts: ['budu', 'su', 'bi', 'će'],
    answer: 'budu',
    tip: 'Future II, oni form; djeca takes a plural verb.',
  },
  {
    mode: 'futur2',
    q: 'Which is future II of "doći" for "on"?',
    opts: ['bit će došao', 'bude došao', 'je došao', 'bude doći'],
    answer: 'bude došao',
    tip: 'bude + the past participle.',
  },
  {
    mode: 'futur2',
    q: 'Which sentence is NOT standard Croatian?',
    opts: [
      'Kad budem završio, javit ću ti.',
      'Kad završim, javit ću ti.',
      'Kad budem završim, javit ću ti.',
      'Čim završim, javit ću ti.',
    ],
    answer: 'Kad budem završim, javit ću ti.',
    tip: 'Budem needs the participle, not the present.',
  },

  // ── glavna ────────────────────────────────────────────────────────────────
  {
    mode: 'glavna',
    q: 'Kad dobijem kredit, ____ graditi kuću.',
    en: 'When I get the loan, I will start building the house.',
    opts: ['počela', 'počet ću', 'počeo', 'počinjati'],
    answer: 'počet ću',
    tip: 'The main clause carries the future: future I.',
  },
  {
    mode: 'glavna',
    q: 'Ako dođeš ranije, ____ me.',
    en: 'If you come earlier, call me.',
    opts: ['nazovite', 'nazvati', 'nazovi', 'nazvao'],
    answer: 'nazovi',
    tip: 'An instruction to ti in the main clause: the ti imperative.',
  },
  {
    mode: 'glavna',
    q: 'Čim stignem kući, ____ ti.',
    en: 'As soon as I get home, I will write to you.',
    opts: ['napisati', 'napisao', 'napisat ću', 'napisala bi'],
    answer: 'napisat ću',
    tip: 'Future I in the main clause; -ti loses its i before ću.',
  },
  {
    mode: 'glavna',
    q: 'How do you say "I will come tomorrow" in standard Croatian?',
    opts: ['Sutra dođem.', 'Sutra bude došao.', 'Doći ću sutra.', 'Sutra budem došao.'],
    answer: 'Doći ću sutra.',
    tip: 'A perfective present or future II cannot stand alone as a main clause.',
  },
  {
    mode: 'glavna',
    q: 'Ako uštediš, ____ na more.',
    en: 'If you save, we will go to the seaside.',
    opts: ['otići ćemo', 'otišao', 'otišli', 'otići'],
    answer: 'otići ćemo',
    tip: 'Future I in the main clause; a verb in -ći keeps every letter.',
  },
  {
    mode: 'glavna',
    q: 'Which word is the imperfective partner, for an action happening right now?',
    en: 'I am coming now.',
    opts: ['dođem', 'dolazim', 'doći', 'dođi'],
    answer: 'dolazim',
    tip: 'A perfective present has no "now"; the imperfective does.',
  },
  {
    mode: 'glavna',
    q: 'Kad budem imao vremena, ____ ti pomoći.',
    en: 'When I have time, I will help you.',
    opts: ['budem', 'ću', 'sam', 'bih'],
    answer: 'ću',
    tip: 'The main clause is future I; budem belongs only in the kad clause.',
  },
  {
    mode: 'glavna',
    q: 'Dok ne vratiš dug, ____ ti više ništa posuditi.',
    en: 'Until you pay back the debt, I will not lend you anything more.',
    opts: ['ne budem', 'neću', 'nisam', 'nemoj'],
    answer: 'neću',
    tip: 'The negative of future I: neću + the infinitive.',
  },
];
