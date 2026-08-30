// src/data/drills/specialistTranslationDrill.ts
//
// C2 PREVOĐENJE — STRUČNO — the drill for the `prevodjenje-strucno` lesson.
//
// The C1 translation lesson was about the calques that mark a text as
// translated. This one is about the decisions made BEFORE the first sentence.
//
// DECIDE THE BRIEF. Equivalence, effect, voice or instruction — a contract, an
// advertisement, a novel and a manual want different things, and a translator
// who has not chosen produces a text that is trying to do all four.
//
// THE STRUCTURAL MISMATCHES ARE KNOWN AND FINITE: English has no case, Croatian
// has no articles, the English present perfect needs a Croatian perfect plus an
// adverb, and Croatian aspect needs an English adverb or a different verb.
// Croatian also runs about 15 % LONGER, which is a layout and subtitle problem
// rather than a linguistic one.
//
// LEGAL "shall" is *dužan je* or the plain present — never *hoće*, which turns
// an obligation into a prediction.
//
// And the test at the end: READ THE RESULT WITHOUT THE ORIGINAL. If it needs
// the original to make sense, it is not finished.
//
// Three modes:
//   nalog     — deciding what the translation is for
//   nepodudarnosti — the structural mismatches
//   provjera  — terms with no equivalent, and the final test

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const SPECIALIST_TRANSLATION_MODE_LABELS: Record<string, string> = {
  nalog: '🎯 Prevoditeljski nalog',
  nepodudarnosti: '🔀 Nepodudarnosti',
  provjera: '✅ Provjera',
};

export const SPECIALIST_TRANSLATION_DRILL_DATA: ModeDrillItem[] = [
  // ── nalog ─────────────────────────────────────────────────────────────────
  {
    mode: 'nalog',
    q: 'Što se odlučuje prije prve rečenice?',
    en: 'What is decided first?',
    opts: ['čemu prijevod služi', 'koji rječnik rabiti', 'koliko će trajati', 'tko je autor'],
    answer: 'čemu prijevod služi',
    tip: 'Equivalence, effect, voice or instruction — pick one.',
  },
  {
    mode: 'nalog',
    q: 'Što traži ugovor?',
    en: 'What does a contract want?',
    opts: ['istovrijednost', 'učinak', 'glas autora', 'uputu'],
    answer: 'istovrijednost',
    tip: 'Every clause must mean exactly what it meant. Style is irrelevant.',
  },
  {
    mode: 'nalog',
    q: 'Što traži oglas?',
    en: 'What does an advertisement want?',
    opts: ['učinak', 'istovrijednost', 'glas autora', 'doslovnost'],
    answer: 'učinak',
    tip: 'The same effect on a different audience, by whatever words achieve it.',
  },
  {
    mode: 'nalog',
    q: 'Što traži roman?',
    en: 'What does a novel want?',
    opts: ['glas', 'uputu', 'istovrijednost', 'kratkoću'],
    answer: 'glas',
    tip: 'The voice, which is why literary translators are named on the cover.',
  },
  {
    mode: 'nalog',
    q: 'Što traži priručnik?',
    en: 'What does a manual want?',
    opts: ['izvedivu uputu', 'glas', 'učinak', 'ljepotu'],
    answer: 'izvedivu uputu',
    tip: 'The reader has to be able to do the thing.',
  },
  {
    mode: 'nalog',
    q: 'Što se dogodi bez odabranog naloga?',
    en: 'Without a chosen brief?',
    opts: [
      'tekst pokušava sve i ne uspijeva ništa',
      'ništa loše',
      'prijevod je dulji',
      'gubi se rok',
    ],
    answer: 'tekst pokušava sve i ne uspijeva ništa',
    tip: 'The decisions conflict, and the text records the indecision.',
  },
  {
    mode: 'nalog',
    q: 'Kako se prevodi pravno "shall"?',
    en: 'Legal "shall" becomes:',
    opts: ['dužan je ili prezent', 'hoće', 'treba', 'bi trebao'],
    answer: 'dužan je ili prezent',
    tip: 'Hoće turns an obligation into a prediction — a real change of meaning.',
  },
  {
    mode: 'nalog',
    q: 'Zašto je "hoće" ovdje ozbiljna pogreška?',
    en: 'Why is hoće serious?',
    opts: ['obveza postaje predviđanje', 'zvuči neformalno', 'predugo je', 'nije pogreška'],
    answer: 'obveza postaje predviđanje',
    tip: 'A clause that binds becomes a clause that forecasts.',
  },

  // ── nepodudarnosti ────────────────────────────────────────────────────────
  {
    mode: 'nepodudarnosti',
    q: 'Što u engleskom nosi ono što hrvatski nosi nastavcima?',
    en: 'What carries in English what endings carry in Croatian?',
    opts: ['red riječi', 'prijedlozi', 'članovi', 'naglasak'],
    answer: 'red riječi',
    tip: 'Which is why word order is negotiable in one language and not the other.',
  },
  {
    mode: 'nepodudarnosti',
    q: 'Odakle u hrvatskom dolazi određenost?',
    en: 'Where does definiteness come from?',
    opts: ['iz konteksta, oblika pridjeva i reda riječi', 'iz člana', 'iz padeža', 'nema je'],
    answer: 'iz konteksta, oblika pridjeva i reda riječi',
    tip: 'novi auto against nov auto is one of the few places it is visible.',
  },
  {
    mode: 'nepodudarnosti',
    q: 'Kako se prevodi engleski present perfect?',
    en: 'The English present perfect becomes:',
    opts: ['perfekt plus prilog', 'prezent', 'aorist', 'pluskvamperfekt'],
    answer: 'perfekt plus prilog',
    tip: 'već, dosad — the adverb carries what the English tense carried.',
  },
  {
    mode: 'nepodudarnosti',
    q: 'Kako se hrvatski vid prenosi u engleski?',
    en: 'How does Croatian aspect cross over?',
    opts: ['prilogom ili drugim glagolom', 'vremenom', 'redom riječi', 'ne prenosi se'],
    answer: 'prilogom ili drugim glagolom',
    tip: 'English has no aspect pair, so the distinction has to be relocated.',
  },
  {
    mode: 'nepodudarnosti',
    q: 'Koliko je hrvatski tekst dulji od engleskoga?',
    en: 'How much longer does Croatian run?',
    opts: ['oko 15 %', 'oko 5 %', 'oko 30 %', 'jednako je'],
    answer: 'oko 15 %',
    tip: 'A layout and subtitle-timing problem, and it has to be planned for.',
  },
  {
    mode: 'nepodudarnosti',
    q: 'Kako se prenosi hrvatsko Vi u engleski?',
    en: 'How does the V-form cross over?',
    opts: ['registrom', 'zamjenicom', 'glagolskim oblikom', 'ne prenosi se'],
    answer: 'registrom',
    tip: 'English has no grammatical equivalent, so the politeness moves into the diction.',
  },
  {
    mode: 'nepodudarnosti',
    q: 'Što se gubi doslovnim prijevodom "boli me glava"?',
    en: 'What does a literal rendering lose?',
    opts: ['prirodnost engleske rečenice', 'značenje', 'vrijeme', 'ništa'],
    answer: 'prirodnost engleske rečenice',
    tip: 'Translate the meaning; the construction does not travel.',
  },
  {
    mode: 'nepodudarnosti',
    q: 'Zašto je popis nepodudarnosti koristan?',
    en: 'Why is the list useful?',
    opts: ['konačan je i može se naučiti', 'kratak je', 'stalno se mijenja', 'nije koristan'],
    answer: 'konačan je i može se naučiti',
    tip: 'A handful of known mismatches accounts for most of the difficulty.',
  },

  // ── provjera ──────────────────────────────────────────────────────────────
  {
    mode: 'provjera',
    q: 'Što se radi s pojmom bez istovrijednice?',
    en: 'A term with no equivalent:',
    opts: [
      'posuditi i objasniti, ili opisati i označiti',
      'izostaviti',
      'izmisliti riječ',
      'ostaviti na engleskom',
    ],
    answer: 'posuditi i objasniti, ili opisati i označiti',
    tip: 'Borrow and gloss, or describe and flag the difference. Both are honest.',
  },
  {
    mode: 'provjera',
    q: 'Zašto se razlika označava, a ne prešućuje?',
    en: 'Why flag it?',
    opts: ['čitatelj inače misli da je pojam isti', 'radi duljine', 'iz opreza', 'ne označava se'],
    answer: 'čitatelj inače misli da je pojam isti',
    tip: 'An unflagged approximation is a claim the translator did not mean to make.',
  },
  {
    mode: 'provjera',
    q: 'Koji je završni test prijevoda?',
    en: 'The final test:',
    opts: [
      'čitati ga bez izvornika',
      'usporediti rečenicu po rečenicu',
      'provjeriti nazivlje',
      'izbrojiti riječi',
    ],
    answer: 'čitati ga bez izvornika',
    tip: 'If it needs the original to make sense, it is not finished.',
  },
  {
    mode: 'provjera',
    q: 'Što otkriva čitanje bez izvornika?',
    en: 'What does that reveal?',
    opts: ['mjesta koja se oslanjaju na original', 'pogreške u nazivlju', 'duljinu', 'ništa novo'],
    answer: 'mjesta koja se oslanjaju na original',
    tip: 'Sentences that made sense only because you knew what they used to say.',
  },
  {
    mode: 'provjera',
    q: 'Što je "kalk"?',
    en: 'What is a calque?',
    opts: ['doslovno preslikana strana struktura', 'posuđenica', 'pogrešan pojam', 'skraćenica'],
    answer: 'doslovno preslikana strana struktura',
    tip: 'od strane, na dnevnoj bazi — grammatical, and unmistakably imported.',
  },
  {
    mode: 'provjera',
    q: 'Prevodi li se registar?',
    en: 'Is register translated?',
    opts: ['da, jednako kao riječi', 'ne', 'samo u književnosti', 'samo u pravu'],
    answer: 'da, jednako kao riječi',
    tip: 'A formal source rendered casually has been mistranslated, word by correct word.',
  },
  {
    mode: 'provjera',
    q: 'Što znači "prilagodba" u prevođenju?',
    en: 'What is adaptation?',
    opts: [
      'promjena radi učinka na novoj publici',
      'skraćivanje',
      'pojednostavljenje',
      'ispravljanje izvornika',
    ],
    answer: 'promjena radi učinka na novoj publici',
    tip: 'Legitimate when the brief is effect, and dishonest when it is equivalence.',
  },
  {
    mode: 'provjera',
    q: 'Tko odlučuje koliko slobode prevoditelj ima?',
    en: 'What decides the translator freedom?',
    opts: ['nalog', 'izvornik', 'naručitelj uvijek', 'prevoditelj uvijek'],
    answer: 'nalog',
    tip: 'Which is why choosing it first is the whole lesson.',
  },
];
