// src/data/drills/a1/instrumentalPlaceDrill.ts
//
// A1 PLACE WORDS + INSTRUMENTAL — the drill for the `instrumental-place` lesson.
//
// pod, nad, pred and za take the instrumental when they say where something IS:
// pod stolom, pred kućom, za stolom. Moving something to that spot takes the
// accusative instead (pod stol). Distractors are wrong by case — mostly the
// locative and the accusative a learner reaches for — never by being Serbian.
//
// Three modes:
//   oblik   — the instrumental ending after a place word
//   rijec   — which place word means what
//   kretanje — a place (instrumental) against a movement (accusative)

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INSTRUMENTAL_PLACE_MODE_LABELS: Record<string, string> = {
  oblik: '📦 Oblik',
  rijec: '🧭 Riječ',
  kretanje: '➡️ Gdje ili kamo',
};

export const INSTRUMENTAL_PLACE_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Mačka spava pod ____. (stol)',
    en: 'The cat is sleeping under the table.',
    opts: ['stolom', 'stolu', 'stol', 'stola'],
    answer: 'stolom',
    tip: 'The cat is already there: instrumental, masculine -om.',
  },
  {
    mode: 'oblik',
    q: 'Auto je pred ____. (kuća)',
    en: 'The car is in front of the house.',
    opts: ['kući', 'kuću', 'kućom', 'kuća'],
    answer: 'kućom',
    tip: 'Feminine -a becomes -om in the instrumental.',
  },
  {
    mode: 'oblik',
    q: 'Galebovi lete nad ____. (more)',
    en: 'Seagulls are flying over the sea.',
    opts: ['moru', 'morem', 'morom', 'mora'],
    answer: 'morem',
    tip: 'A neuter noun in -e takes the soft ending -em.',
  },
  {
    mode: 'oblik',
    q: 'Čekam te pred ____. (muzej)',
    en: 'I will wait for you in front of the museum.',
    opts: ['muzejom', 'muzeju', 'muzejem', 'muzej'],
    answer: 'muzejem',
    tip: 'j is a soft sound, so -em, not -om.',
  },
  {
    mode: 'oblik',
    q: 'Moj brat sjedi za ____. (računalo)',
    en: 'My brother is sitting at the computer.',
    opts: ['računalu', 'računala', 'računalo', 'računalom'],
    answer: 'računalom',
    tip: 'Neuter -o becomes -om.',
  },
  {
    mode: 'oblik',
    q: 'Vrt je za ____. (škola)',
    en: 'The garden is behind the school.',
    opts: ['školom', 'školi', 'školu', 'škole'],
    answer: 'školom',
    tip: 'za meaning "behind" takes the instrumental: -om.',
  },
  {
    mode: 'oblik',
    q: 'Ključ je pod ____. (tepih)',
    en: 'The key is under the rug.',
    opts: ['tepihu', 'tepihom', 'tepih', 'tepiha'],
    answer: 'tepihom',
    tip: 'A place: masculine -om.',
  },
  {
    mode: 'oblik',
    q: 'Avion leti nad ____. (grad)',
    en: 'The plane is flying over the city.',
    opts: ['gradu', 'grada', 'gradom', 'grad'],
    answer: 'gradom',
    tip: 'nad + instrumental: masculine -om.',
  },
  {
    mode: 'oblik',
    q: 'Sastanak je pred ____. (kino)',
    en: 'The meeting is in front of the cinema.',
    opts: ['kinu', 'kinom', 'kina', 'kino'],
    answer: 'kinom',
    tip: 'Neuter -o becomes -om.',
  },
  {
    mode: 'oblik',
    q: 'Lampa visi nad ____. (krevet)',
    en: 'The lamp hangs above the bed.',
    opts: ['krevetom', 'krevetu', 'kreveta', 'krevet'],
    answer: 'krevetom',
    tip: 'A place: the instrumental.',
  },
  // ── rijec ─────────────────────────────────────────────────────────────────
  {
    mode: 'rijec',
    q: 'Lopta je ____ stolom. (under)',
    en: 'The ball is under the table.',
    opts: ['pod', 'nad', 'pred', 'za'],
    answer: 'pod',
    tip: 'pod = under.',
  },
  {
    mode: 'rijec',
    q: 'Lampa visi ____ stolom. (above)',
    en: 'The lamp hangs above the table.',
    opts: ['pod', 'pred', 'nad', 'za'],
    answer: 'nad',
    tip: 'nad = over, above.',
  },
  {
    mode: 'rijec',
    q: 'Taksi čeka ____ hotelom. (in front of)',
    en: 'The taxi is waiting in front of the hotel.',
    opts: ['za', 'pred', 'pod', 'nad'],
    answer: 'pred',
    tip: 'pred = in front of.',
  },
  {
    mode: 'rijec',
    q: 'Vrt je ____ kućom. (behind)',
    en: 'The garden is behind the house.',
    opts: ['pred', 'nad', 'pod', 'za'],
    answer: 'za',
    tip: 'za + instrumental = behind.',
  },
  {
    mode: 'rijec',
    q: 'Cijela obitelj sjedi ____ stolom. (at)',
    en: 'The whole family is sitting at the table.',
    opts: ['za', 'pod', 'nad', 'pred'],
    answer: 'za',
    tip: 'You sit za stolom — "at" a table is za.',
  },
  {
    mode: 'rijec',
    q: 'Što znači "Sjedim za stolom"?',
    opts: [
      'I am sitting at the table.',
      'I am sitting for the table.',
      'I am sitting on the table.',
      'I am under the table.',
    ],
    answer: 'I am sitting at the table.',
    tip: 'With the -om ending, za is a place, not "for".',
  },
  {
    mode: 'rijec',
    q: 'Što znači "pred kućom"?',
    opts: ['in front of the house', 'behind the house', 'above the house', 'under the house'],
    answer: 'in front of the house',
    tip: 'pred = in front of; with a place it takes the instrumental: pred kućom.',
  },
  // ── kretanje ──────────────────────────────────────────────────────────────
  {
    mode: 'kretanje',
    q: 'Stavljam ključ pod ____. (the rug)',
    en: 'I am putting the key under the rug.',
    opts: ['tepihom', 'tepih', 'tepihu', 'tepiha'],
    answer: 'tepih',
    tip: 'A movement to the spot takes the accusative, which for tepih looks like the dictionary form.',
  },
  {
    mode: 'kretanje',
    q: 'Knjiga je pod ____. (krevet)',
    en: 'The book is under the bed.',
    opts: ['krevet', 'krevetom', 'krevetu', 'kreveta'],
    answer: 'krevetom',
    tip: 'The book is already there: instrumental.',
  },
  {
    mode: 'kretanje',
    q: 'Mačka ide pod ____. (the table)',
    en: 'The cat is going under the table.',
    opts: ['stolom', 'stolu', 'stol', 'stola'],
    answer: 'stol',
    tip: 'ide — it is moving there: accusative.',
  },
  {
    mode: 'kretanje',
    q: 'Mačka je pod ____. (stol)',
    en: 'The cat is under the table.',
    opts: ['stol', 'stolu', 'stola', 'stolom'],
    answer: 'stolom',
    tip: 'je — it is already there: instrumental.',
  },
  {
    mode: 'kretanje',
    q: 'Koja rečenica kaže GDJE nešto jest?',
    en: 'Which sentence says where something IS?',
    opts: [
      'Torba je pod krevetom.',
      'Stavljam torbu pod krevet.',
      'Mačka ide pod stol.',
      'Stavljam ključ pod tepih.',
    ],
    answer: 'Torba je pod krevetom.',
    tip: 'Only the instrumental ending says "already there".',
  },
  {
    mode: 'kretanje',
    q: 'Koja rečenica opisuje KRETANJE?',
    en: 'Which sentence describes a movement?',
    opts: [
      'Ključ je pod tepihom.',
      'Vrt je za kućom.',
      'Stavljam knjigu pod krevet.',
      'Lampa visi nad stolom.',
    ],
    answer: 'Stavljam knjigu pod krevet.',
    tip: 'Movement to a place takes the accusative: pod krevet.',
  },
  {
    mode: 'kretanje',
    q: 'Psi spavaju pod ____. (most)',
    en: 'The dogs are sleeping under the bridge.',
    opts: ['most', 'mostu', 'mostom', 'mosta'],
    answer: 'mostom',
    tip: 'Sleeping there — no movement — so the instrumental.',
  },
];
