// src/data/drills/b2/comparativeIdiomsDrill.ts
//
// B2 COMPARATIVE IDIOMS — the drill for the `comparative-idioms` lesson.
//
// Each idiom has ONE fixed image, so a distractor is an image that belongs to another
// adjective (never a second real idiom for the same adjective — kao beba, kao bik,
// kao medvjed, kao paprika are deliberately not used). The adjective agrees with the
// person; the noun after kao stays in the nominative.
//
// Three modes:
//   slika     — which noun completes the idiom
//   znacenje  — what the idiom means
//   slaganje  — the adjective agrees, the noun does not move

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COMPARATIVE_IDIOMS_MODE_LABELS: Record<string, string> = {
  slika: '🦊 Slika',
  znacenje: '💡 Značenje',
  slaganje: '🔗 Slaganje',
};

export const COMPARATIVE_IDIOMS_DRILL_DATA: ModeDrillItem[] = [
  // ── slika ─────────────────────────────────────────────────────────────────
  {
    mode: 'slika',
    q: 'zdrav kao ____',
    en: 'in excellent health',
    opts: ['dren', 'vuk', 'top', 'rak'],
    answer: 'dren',
    tip: 'The cornel tree, whose wood is very hard.',
  },
  {
    mode: 'slika',
    q: 'gladan kao ____',
    en: 'very hungry',
    opts: ['vuk', 'dren', 'led', 'puž'],
    answer: 'vuk',
    tip: 'Hungry as a wolf.',
  },
  {
    mode: 'slika',
    q: 'spava kao ____',
    en: 'sleeps very deeply',
    opts: ['top', 'riba', 'lisica', 'munja'],
    answer: 'top',
    tip: 'Literally like a cannon.',
  },
  {
    mode: 'slika',
    q: 'šuti kao ____',
    en: 'says nothing at all',
    opts: ['riba', 'vuk', 'top', 'rak'],
    answer: 'riba',
    tip: 'Fish make no sound.',
  },
  {
    mode: 'slika',
    q: 'crven kao ____',
    en: 'very red, from the sun or from shame',
    opts: ['rak', 'led', 'dren', 'vuk'],
    answer: 'rak',
    tip: 'A crab or crayfish turns red when cooked.',
  },
  {
    mode: 'slika',
    q: 'hladan kao ____',
    en: 'cold and unfriendly',
    opts: ['led', 'rak', 'vuk', 'munja'],
    answer: 'led',
    tip: 'Cold as ice.',
  },
  {
    mode: 'slika',
    q: 'mokar kao ____',
    en: 'soaked through',
    opts: ['miš', 'dren', 'top', 'led'],
    answer: 'miš',
    tip: 'Croatian says a mouse where English says a drowned rat.',
  },
  {
    mode: 'slika',
    q: 'lukav kao ____',
    en: 'very cunning',
    opts: ['lisica', 'mazga', 'puž', 'krpa'],
    answer: 'lisica',
    tip: 'Cunning as a fox.',
  },
  {
    mode: 'slika',
    q: 'spor kao ____',
    en: 'very slow',
    opts: ['puž', 'munja', 'vuk', 'top'],
    answer: 'puž',
    tip: 'Slow as a snail.',
  },
  {
    mode: 'slika',
    q: 'brz kao ____',
    en: 'very fast',
    opts: ['munja', 'puž', 'krpa', 'dren'],
    answer: 'munja',
    tip: 'Fast as lightning.',
  },
  {
    mode: 'slika',
    q: 'tvrdoglav kao ____',
    en: 'very stubborn',
    opts: ['mazga', 'lisica', 'riba', 'dren'],
    answer: 'mazga',
    tip: 'Stubborn as a mule.',
  },
  {
    mode: 'slika',
    q: 'sam kao ____',
    en: 'completely alone',
    opts: ['prst', 'top', 'rak', 'led'],
    answer: 'prst',
    tip: 'Alone as a single finger.',
  },
  {
    mode: 'slika',
    q: 'blijed kao ____',
    en: 'very pale',
    opts: ['krpa', 'rak', 'vuk', 'top'],
    answer: 'krpa',
    tip: 'Pale as a rag.',
  },
  // ── znacenje ──────────────────────────────────────────────────────────────
  {
    mode: 'znacenje',
    q: 'Što znači "šuti kao riba"?',
    en: 'What does the idiom about the fish mean?',
    opts: ['ne govori ništa', 'dobro pliva', 'jede puno ribe', 'govori tiho'],
    answer: 'ne govori ništa',
    tip: 'Fish make no sound.',
  },
  {
    mode: 'znacenje',
    q: 'Što znači "sam kao prst"?',
    en: 'What does the idiom about the finger mean?',
    opts: ['potpuno sam', 'vrlo mršav', 'vrlo malen', 'jako ljut'],
    answer: 'potpuno sam',
    tip: 'One finger, on its own.',
  },
  {
    mode: 'znacenje',
    q: 'Što znači "zdrav kao dren"?',
    en: 'What does the idiom about the cornel tree mean?',
    opts: ['vrlo zdrav', 'vrlo star', 'vrlo visok', 'vrlo spor'],
    answer: 'vrlo zdrav',
    tip: 'Cornel wood is hard and lasts.',
  },
  {
    mode: 'znacenje',
    q: 'Što znači "hladan kao led"?',
    en: 'What does the idiom about ice mean?',
    opts: ['neljubazan prema ljudima', 'bolestan od gripe', 'spor u poslu', 'gladan cijeli dan'],
    answer: 'neljubazan prema ljudima',
    tip: 'Said of a person, it describes their manner.',
  },
  {
    mode: 'znacenje',
    q: 'Što znači "spava kao top"?',
    en: 'What does the idiom about the cannon mean?',
    opts: ['spava duboko', 'hrče glasno', 'spava loše', 'kasno liježe'],
    answer: 'spava duboko',
    tip: 'Nothing wakes a cannon.',
  },
  {
    mode: 'znacenje',
    q: 'Što znači "mokar kao miš"?',
    en: 'What does the idiom about the mouse mean?',
    opts: ['potpuno mokar', 'malo mokar', 'vrlo prljav', 'vrlo plašljiv'],
    answer: 'potpuno mokar',
    tip: 'Wet through and through.',
  },
  {
    mode: 'znacenje',
    q: 'Što znači "lukav kao lisica"?',
    en: 'What does the idiom about the fox mean?',
    opts: ['vrlo prepreden', 'vrlo brz', 'vrlo crven', 'vrlo gladan'],
    answer: 'vrlo prepreden',
    tip: 'The fox of fairy tales outwits everyone.',
  },
  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Ana je ____ kao dren.',
    en: 'Ana is in excellent health.',
    opts: ['zdrava', 'zdrav', 'zdravo', 'zdravi'],
    answer: 'zdrava',
    tip: 'The adjective agrees with Ana.',
  },
  {
    mode: 'slaganje',
    q: 'Bila sam ____ kao miš.',
    en: 'I (a woman) was soaked through.',
    opts: ['mokra', 'mokar', 'mokro', 'mokri'],
    answer: 'mokra',
    tip: 'Feminine singular, agreeing with the speaker.',
  },
  {
    mode: 'slaganje',
    q: 'Nova šefica je ____ kao led.',
    en: 'The new boss is as cold as ice.',
    opts: ['hladna', 'hladan', 'hladno', 'hladni'],
    answer: 'hladna',
    tip: 'šefica is feminine.',
  },
  {
    mode: 'slaganje',
    q: 'Marko je gladan kao ____.',
    en: 'Marko is as hungry as a wolf.',
    opts: ['vuk', 'vuka', 'vukom', 'vuku'],
    answer: 'vuk',
    tip: 'The noun after kao stays in the nominative.',
  },
  {
    mode: 'slaganje',
    q: 'Kad je čula vijest, bila je blijeda kao ____.',
    en: 'When she heard the news, she was as pale as a rag.',
    opts: ['krpa', 'krpu', 'krpom', 'krpe'],
    answer: 'krpa',
    tip: 'The image does not change its case.',
  },
  {
    mode: 'slaganje',
    q: 'Moja sestra je tvrdoglava kao ____.',
    en: 'My sister is as stubborn as a mule.',
    opts: ['mazga', 'mazgu', 'mazgom', 'mazgi'],
    answer: 'mazga',
    tip: 'Only the adjective agrees; the noun stays nominative.',
  },
  {
    mode: 'slaganje',
    q: 'Djeca su cijelu noć ____ kao top.',
    en: 'The children slept soundly all night.',
    opts: ['spavala', 'spavao', 'spavale', 'spavalo'],
    answer: 'spavala',
    tip: 'djeca takes the -la participle in the plural: djeca su spavala.',
  },
];
