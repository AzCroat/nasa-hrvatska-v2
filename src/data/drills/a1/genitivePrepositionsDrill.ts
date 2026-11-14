// src/data/drills/a1/genitivePrepositionsDrill.ts
//
// A1 FROM, TO, AT, WITHOUT — the drill for the `genitive-prepositions` lesson.
//
// iz, s, od, do, kod, bez, blizu, pokraj and između all take the genitive. iz and s
// follow u and na (iz škole, s posla); od is for people (od mame); kod + a person
// is their place, and kod kuće is "at home". Distractors are wrong by case or by
// choosing the preposition for the wrong kind of "from" — never real Croatian with
// the asked-for meaning.
//
// Three modes:
//   oblik — the genitive ending after a preposition
//   odakle — iz, s or od
//   kod   — kod, do, blizu, pokraj, između

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GENITIVE_PREPOSITIONS_MODE_LABELS: Record<string, string> = {
  oblik: '🔗 Oblik',
  odakle: '🧭 Odakle?',
  kod: '🏠 Kod, do, blizu',
};

export const GENITIVE_PREPOSITIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Moji roditelji su iz ____. (Zagreb)',
    en: 'My parents are from Zagreb.',
    opts: ['Zagrebu', 'Zagreba', 'Zagrebom', 'Zagreb'],
    answer: 'Zagreba',
    tip: 'iz + genitive: masculine -a.',
  },
  {
    mode: 'oblik',
    q: 'Moja žena je iz ____. (Zadar)',
    en: 'My wife is from Zadar.',
    opts: ['Zadara', 'Zadru', 'Zadra', 'Zadar'],
    answer: 'Zadra',
    tip: 'Genitive -a, and the a in the last syllable drops out.',
  },
  {
    mode: 'oblik',
    q: 'Dolazimo iz ____. (Rijeka)',
    en: 'We come from Rijeka.',
    opts: ['Rijeku', 'Rijeci', 'Rijeka', 'Rijeke'],
    answer: 'Rijeke',
    tip: 'Feminine -a becomes -e.',
  },
  {
    mode: 'oblik',
    q: 'Pijem kavu bez ____. (mlijeko)',
    en: 'I drink coffee without milk.',
    opts: ['mlijeka', 'mlijeko', 'mlijekom', 'mlijeku'],
    answer: 'mlijeka',
    tip: 'bez + genitive.',
  },
  {
    mode: 'oblik',
    q: 'Naš stan je blizu ____. (more)',
    en: 'Our flat is near the sea.',
    opts: ['moru', 'more', 'mora', 'morem'],
    answer: 'mora',
    tip: 'blizu + genitive: neuter -a.',
  },
  {
    mode: 'oblik',
    q: 'Hotel je pokraj ____. (rijeka)',
    en: 'The hotel is beside the river.',
    opts: ['rijeke', 'rijeku', 'rijeci', 'rijeka'],
    answer: 'rijeke',
    tip: 'pokraj + genitive.',
  },
  {
    mode: 'oblik',
    q: 'Autobus ide do ____. (centar)',
    en: 'The bus goes to the centre.',
    opts: ['centru', 'centar', 'centra', 'centara'],
    answer: 'centra',
    tip: 'do + genitive; centar loses its a: centra.',
  },
  {
    mode: 'oblik',
    q: 'Pošta je između banke i ____. (škola)',
    en: 'The post office is between the bank and the school.',
    opts: ['škola', 'škole', 'školu', 'školom'],
    answer: 'škole',
    tip: 'Both nouns after između take the genitive.',
  },
  // ── odakle ────────────────────────────────────────────────────────────────
  {
    mode: 'odakle',
    q: 'Dolazim ____ Splita.',
    en: 'I come from Split.',
    opts: ['iz', 'na', 'u', 'kod'],
    answer: 'iz',
    tip: 'You live u Splitu, so you come iz Splita.',
  },
  {
    mode: 'odakle',
    q: 'Vraćam se ____ posla u šest.',
    en: 'I come back from work at six.',
    opts: ['iz', 'od', 's', 'kod'],
    answer: 's',
    tip: 'You are na poslu, so you come s posla.',
  },
  {
    mode: 'odakle',
    q: 'Ovo pismo je ____ moje bake.',
    en: 'This letter is from my grandmother.',
    opts: ['iz', 'od', 'kod', 'do'],
    answer: 'od',
    tip: 'From a person: od.',
  },
  {
    mode: 'odakle',
    q: 'Djeca se vraćaju ____ škole.',
    en: 'The children are coming back from school.',
    opts: ['iz', 's', 'na', 'kod'],
    answer: 'iz',
    tip: 'u školi → iz škole.',
  },
  {
    mode: 'odakle',
    q: 'Upravo smo stigli ____ mora.',
    en: 'We have just arrived from the seaside.',
    opts: ['iz', 'u', 's', 'kod'],
    answer: 's',
    tip: 'na moru → s mora.',
  },
  {
    mode: 'odakle',
    q: 'Dobio sam poklon ____ prijatelja.',
    en: 'I got a present from a friend.',
    opts: ['od', 'iz', 'kod', 'do'],
    answer: 'od',
    tip: 'From a person: od.',
  },
  {
    mode: 'odakle',
    q: 'Radim od ponedjeljka ____ petka.',
    en: 'I work from Monday to Friday.',
    opts: ['iz', 'do', 'kod', 'od'],
    answer: 'do',
    tip: 'od … do = from … to.',
  },
  {
    mode: 'odakle',
    q: 'Upravo dolazim ____ plaže.',
    en: 'I am just coming from the beach.',
    opts: ['u', 's', 'kod', 'iz'],
    answer: 's',
    tip: 'na plaži → s plaže.',
  },
  // ── kod ───────────────────────────────────────────────────────────────────
  {
    mode: 'kod',
    q: 'Večeras smo ____ bake.',
    en: 'Tonight we are at Grandma’s.',
    opts: ['u', 'kod', 'na', 'iz'],
    answer: 'kod',
    tip: 'At someone’s place: kod.',
  },
  {
    mode: 'kod',
    q: 'Danas radim ____ kuće.',
    en: 'Today I am working at home.',
    opts: ['kod', 'u', 'na', 'do'],
    answer: 'kod',
    tip: 'At home = kod kuće.',
  },
  {
    mode: 'kod',
    q: 'Sutra sam kod ____. (liječnik)',
    en: 'Tomorrow I am at the doctor’s.',
    opts: ['liječnik', 'liječniku', 'liječnika', 'liječnikom'],
    answer: 'liječnika',
    tip: 'kod + genitive.',
  },
  {
    mode: 'kod',
    q: 'Večeras spavam kod ____. (Ana)',
    en: 'Tonight I am sleeping at Ana’s.',
    opts: ['Ani', 'Anu', 'Ana', 'Ane'],
    answer: 'Ane',
    tip: 'kod + genitive: Ana → Ane.',
  },
  {
    mode: 'kod',
    q: 'Idem do ____. (trgovina)',
    en: 'I am popping over to the shop.',
    opts: ['trgovine', 'trgovinu', 'trgovini', 'trgovina'],
    answer: 'trgovine',
    tip: 'do + genitive.',
  },
  {
    mode: 'kod',
    q: 'Škola je ____ crkve. (near)',
    en: 'The school is near the church.',
    opts: ['blizu', 'iz', 'od', 'bez'],
    answer: 'blizu',
    tip: 'blizu = near.',
  },
  {
    mode: 'kod',
    q: 'Što znači "kod kuće"?',
    opts: ['at home', 'inside the house', 'from home', 'without a house'],
    answer: 'at home',
    tip: 'u kući is inside the house; kod kuće is at home.',
  },
  {
    mode: 'kod',
    q: 'Što nije u redu: "Moji roditelji su iz Zagrebu."?',
    en: 'What is wrong with this sentence?',
    opts: ['Zagrebu should be Zagreba', 'iz should be u', 'su should be je', 'Nothing'],
    answer: 'Zagrebu should be Zagreba',
    tip: 'iz always takes the genitive.',
  },
];
