// src/data/drills/weatherDrill.ts
//
// A1 WEATHER & SEASONS — the drill for the `weather-seasons` lesson.
//
// The structure here is one of the most useful things an A1 learner can be
// given, and the weather is only where it happens to be introduced: Croatian
// drops the dummy subject entirely. *Hladno je.* There is no "it". The same
// pattern runs far past the weather — *kasno je*, *teško je*, *jasno je* — so a
// learner who acquires it from the weather gets a whole sentence type for free.
//
// Two other things have to be met rather than derived: rain and snow FALL
// (*pada kiša*), and two of the four seasons take a bare adverb (*ljeti*,
// *zimi*) while the other two take *u* (*u proljeće*, *u jesen*).
//
// Three modes:
//   bezlicno  — the subjectless sentence, and how far it reaches
//   padakisa  — what the weather actually does
//   godisnja  — the seasons and their time expressions

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const WEATHER_MODE_LABELS: Record<string, string> = {
  bezlicno: '🌡️ Bez subjekta',
  padakisa: '🌧️ Pada kiša',
  godisnja: '🍂 Godišnja doba',
};

export const WEATHER_DRILL_DATA: ModeDrillItem[] = [
  // ── bezlicno ──────────────────────────────────────────────────────────────
  {
    mode: 'bezlicno',
    q: 'Kako se kaže "It is cold"?',
    en: 'It is cold.',
    opts: ['Hladno je.', 'Ono je hladno.', 'To je hladno.', 'Je hladno.'],
    answer: 'Hladno je.',
    tip: 'No dummy subject at all — Croatian simply does not need an "it".',
  },
  {
    mode: 'bezlicno',
    q: '____ je. (warm)',
    en: 'It is warm.',
    opts: ['Toplo', 'Topao', 'Topla', 'Topli'],
    answer: 'Toplo',
    tip: 'The NEUTER form carries every subjectless sentence: toplo je.',
  },
  {
    mode: 'bezlicno',
    q: '____ je. (sunny)',
    en: 'It is sunny.',
    opts: ['Sunčano', 'Sunčan', 'Sunčana', 'Sunce'],
    answer: 'Sunčano',
    tip: 'sunčano je, oblačno je, vjetrovito je — all neuter.',
  },
  {
    mode: 'bezlicno',
    q: 'Koji oblik pridjeva nosi bezličnu rečenicu?',
    en: 'Which form carries it?',
    opts: ['srednji rod', 'muški rod', 'ženski rod', 'množina'],
    answer: 'srednji rod',
    tip: 'Neuter singular, because there is no subject for it to agree with.',
  },
  {
    mode: 'bezlicno',
    q: 'Ide li ovaj obrazac dalje od vremena?',
    en: 'Does the pattern go beyond weather?',
    opts: ['da, mnogo dalje', 'ne', 'samo za osjećaje', 'samo u prošlosti'],
    answer: 'da, mnogo dalje',
    tip: 'Kasno je. Teško je. Jasno je. The weather is just where you meet it first.',
  },
  {
    mode: 'bezlicno',
    q: '____ je. (late)',
    en: 'It is late.',
    opts: ['Kasno', 'Kasan', 'Kasna', 'Kasni'],
    answer: 'Kasno',
    tip: 'Kasno je — the same shape as hladno je, and nothing to do with weather.',
  },
  {
    mode: 'bezlicno',
    q: 'Kako se pita za vrijeme?',
    en: 'How do you ask about the weather?',
    opts: ['Kakvo je vrijeme?', 'Koje je vrijeme?', 'Kako je vrijeme?', 'Što je vrijeme?'],
    answer: 'Kakvo je vrijeme?',
    tip: 'Kakvo — "what sort of". Koliko je sati asks the clock instead.',
  },
  {
    mode: 'bezlicno',
    q: 'Hladno ____ je. (meni)',
    en: 'I am cold.',
    opts: ['mi', 'me', 'ja', 'mene'],
    answer: 'mi',
    tip: 'Add a dative and the subjectless sentence gains a person: hladno mi je.',
  },

  // ── padakisa ──────────────────────────────────────────────────────────────
  {
    mode: 'padakisa',
    q: '____ kiša.',
    en: 'It is raining.',
    opts: ['Pada', 'Padaju', 'Padam', 'Padati'],
    answer: 'Pada',
    tip: 'Rain FALLS in Croatian: pada kiša. Kiša is the subject here.',
  },
  {
    mode: 'padakisa',
    q: '____ snijeg.',
    en: 'It is snowing.',
    opts: ['Pada', 'Padaju', 'Snijegi', 'Sniježi'],
    answer: 'Pada',
    tip: 'pada snijeg — the same verb does both.',
  },
  {
    mode: 'padakisa',
    q: 'Koji je subjekt u "Pada kiša"?',
    en: 'What is the subject?',
    opts: ['kiša', 'nema ga', 'ono', 'pada'],
    answer: 'kiša',
    tip: 'Unlike hladno je, this sentence DOES have a subject — the rain itself.',
  },
  {
    mode: 'padakisa',
    q: 'Jučer ____ kiša.',
    en: 'It rained yesterday.',
    opts: ['je padala', 'je padao', 'su padale', 'pada'],
    answer: 'je padala',
    tip: 'The participle agrees with kiša, which is feminine: padala.',
  },
  {
    mode: 'padakisa',
    q: '____ vjetar.',
    en: 'The wind is blowing.',
    opts: ['Puše', 'Pada', 'Ide', 'Teče'],
    answer: 'Puše',
    tip: 'Puše vjetar — the wind blows, it does not fall.',
  },
  {
    mode: 'padakisa',
    q: 'Danas je ____. (cloudy)',
    en: 'It is cloudy today.',
    opts: ['oblačno', 'oblak', 'oblačan', 'oblaci'],
    answer: 'oblačno',
    tip: 'Back to the neuter: oblačno je.',
  },
  {
    mode: 'padakisa',
    q: 'Sutra ____ padati kiša.',
    en: 'It will rain tomorrow.',
    opts: ['će', 'je', 'bi', 'da'],
    answer: 'će',
    tip: 'Future: sutra će padati kiša.',
  },
  {
    mode: 'padakisa',
    q: 'Što je "bura"?',
    en: 'What is bura?',
    opts: ['jak sjeverni vjetar', 'kiša', 'magla', 'snijeg'],
    answer: 'jak sjeverni vjetar',
    tip: 'The cold north-easterly off the Adriatic. Every coastal forecast names it.',
  },

  // ── godisnja ──────────────────────────────────────────────────────────────
  {
    mode: 'godisnja',
    q: 'Koliko ima godišnjih doba?',
    en: 'How many seasons?',
    opts: ['četiri', 'tri', 'dva', 'pet'],
    answer: 'četiri',
    tip: 'proljeće, ljeto, jesen, zima.',
  },
  {
    mode: 'godisnja',
    q: 'Kojeg je roda "jesen"?',
    en: 'What gender is jesen?',
    opts: ['ženskoga', 'muškoga', 'srednjega', 'nema rod'],
    answer: 'ženskoga',
    tip: 'Feminine and i-declension — consonant-final, like noć and stvar.',
  },
  {
    mode: 'godisnja',
    q: 'Kako se kaže "in summer"?',
    en: 'in summer',
    opts: ['ljeti', 'u ljeto', 'na ljeto', 'ljetom'],
    answer: 'ljeti',
    tip: 'Ljeti is one word — no preposition at all.',
  },
  {
    mode: 'godisnja',
    q: 'Kako se kaže "in winter"?',
    en: 'in winter',
    opts: ['zimi', 'u zimu', 'na zimu', 'zimom'],
    answer: 'zimi',
    tip: 'Zimi — the same bare adverb as ljeti.',
  },
  {
    mode: 'godisnja',
    q: 'Kako se kaže "in spring"?',
    en: 'in spring',
    opts: ['u proljeće', 'proljeti', 'proljećem', 'na proljeće'],
    answer: 'u proljeće',
    tip: 'Spring and autumn DO take u: u proljeće, u jesen. Only two of the four are bare.',
  },
  {
    mode: 'godisnja',
    q: 'Koja dva doba imaju vlastiti prilog?',
    en: 'Which two have their own adverb?',
    opts: ['ljeto i zima', 'proljeće i jesen', 'sva četiri', 'nijedno'],
    answer: 'ljeto i zima',
    tip: 'ljeti and zimi. The other two need u — and there is no reason, only usage.',
  },
  {
    mode: 'godisnja',
    q: 'Koje doba dolazi poslije ljeta?',
    en: 'Which season follows summer?',
    opts: ['jesen', 'zima', 'proljeće', 'ljeto'],
    answer: 'jesen',
    tip: 'proljeće → ljeto → jesen → zima.',
  },
  {
    mode: 'godisnja',
    q: 'Kojeg je roda "proljeće"?',
    en: 'What gender is proljeće?',
    opts: ['srednjega', 'muškoga', 'ženskoga', 'množina'],
    answer: 'srednjega',
    tip: 'Neuter, like ljeto. Jesen and zima are feminine.',
  },
];
