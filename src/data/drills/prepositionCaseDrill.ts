// src/data/drills/prepositionCaseDrill.ts
//
// A2 PREPOSITIONS IN ACTION — the drill for the `prepositions-action` lesson.
//
// Not the same thing as the A1 place-preposition drill, which teaches WHICH
// preposition (u, na, ispod, iznad). This teaches WHICH CASE the same
// preposition takes, and that is a different skill with a single governing
// idea:
//
//   MOVEMENT TAKES THE ACCUSATIVE, POSITION TAKES THE LOCATIVE.
//   *Idem u grad* — I am going to the city. *U gradu sam* — I am in the city.
//   One preposition, two cases, and the case is carrying the whole meaning.
//   English uses two different words (to / in) and so gives the learner no
//   help at all here.
//
//   IZ IS NOT OD. *Iz* comes out of an enclosed space (*iz grada*, *iz kuće*);
//   *od* comes from a person or a point in time (*od mame*, *od ponedjeljka*).
//   Both take the genitive, so the case cannot tell them apart — only the
//   meaning can.
//
//   S TAKES THE INSTRUMENTAL, AND SA IS PHONOLOGICAL — *sa* before *s, š, z, ž*
//   and before *mnom*, *s* everywhere else. It is not a formality choice.
//
// The `prepdrill` entry already at A2 is tagged `genitive` and drills the
// genitive prepositions only; `prostorni` (B2) is the spatial set, gated two
// levels up and tagged `accusative`. Both categories are real ALL_CATEGORIES
// members claimed elsewhere, so neither could serve this lesson.
//
// Three modes:
//   kamoigdje — accusative for motion, locative for position
//   genitiv   — od / do / iz / bez / kod, and iz against od
//   sasa      — the instrumental, and when s becomes sa

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PREPOSITION_CASE_MODE_LABELS: Record<string, string> = {
  kamoigdje: '🧭 Kamo ili gdje',
  genitiv: '📤 Genitivni prijedlozi',
  sasa: '🤝 S ili sa',
};

export const PREPOSITION_CASE_DRILL_DATA: ModeDrillItem[] = [
  // ── kamoigdje ─────────────────────────────────────────────────────────────
  {
    mode: 'kamoigdje',
    q: 'Idem u ____. (grad)',
    en: 'I am going to the city.',
    opts: ['grad', 'gradu', 'grada', 'gradom'],
    answer: 'grad',
    tip: 'Movement TO → accusative. The verb idem is what decides it.',
  },
  {
    mode: 'kamoigdje',
    q: 'U ____ sam. (grad)',
    en: 'I am in the city.',
    opts: ['gradu', 'grad', 'grada', 'gradom'],
    answer: 'gradu',
    tip: 'Being IN → locative. Same preposition, different case, different meaning.',
  },
  {
    mode: 'kamoigdje',
    q: 'Idem na ____. (plaža)',
    en: 'I am going to the beach.',
    opts: ['plažu', 'plaži', 'plaže', 'plažom'],
    answer: 'plažu',
    tip: 'na plus the accusative — movement onto or to.',
  },
  {
    mode: 'kamoigdje',
    q: 'Odmaram se na ____. (plaža)',
    en: 'I am resting on the beach.',
    opts: ['plaži', 'plažu', 'plaže', 'plažom'],
    answer: 'plaži',
    tip: 'Nothing is moving, so the locative.',
  },
  {
    mode: 'kamoigdje',
    q: 'Koje pitanje traži akuzativ?',
    en: 'Which question takes the accusative?',
    opts: ['kamo?', 'gdje?', 'kada?', 'kako?'],
    answer: 'kamo?',
    tip: 'kamo = where TO. gdje = where AT, and it takes the locative.',
  },
  {
    mode: 'kamoigdje',
    q: 'Radim u ____. (ured)',
    en: 'I work in an office.',
    opts: ['uredu', 'ured', 'ureda', 'uredom'],
    answer: 'uredu',
    tip: 'Working somewhere is a position, not a journey.',
  },
  {
    mode: 'kamoigdje',
    q: 'Stavi to u ____. (ladica)',
    en: 'Put that in the drawer.',
    opts: ['ladicu', 'ladici', 'ladice', 'ladicom'],
    answer: 'ladicu',
    tip: 'Something arrives in the drawer, so the accusative — even though it ends up inside.',
  },
  {
    mode: 'kamoigdje',
    q: 'Zašto engleski ovdje ne pomaže?',
    en: 'Why is English no help?',
    opts: [
      'rabi dvije riječi, hrvatski dva padeža',
      'nema prijedloge',
      'red riječi je isti',
      'pomaže',
    ],
    answer: 'rabi dvije riječi, hrvatski dva padeža',
    tip: 'English swaps to for in; Croatian keeps the word and swaps the ending.',
  },

  // ── genitiv ───────────────────────────────────────────────────────────────
  {
    mode: 'genitiv',
    q: 'Dolazim iz ____. (Zagreb)',
    en: 'I am coming from Zagreb.',
    opts: ['Zagreba', 'Zagreb', 'Zagrebu', 'Zagrebom'],
    answer: 'Zagreba',
    tip: 'iz plus the genitive — out of an enclosed space, a city included.',
  },
  {
    mode: 'genitiv',
    q: 'Dobio sam pismo od ____. (mama)',
    en: 'I got a letter from mum.',
    opts: ['mame', 'mamu', 'mami', 'mamom'],
    answer: 'mame',
    tip: 'od plus the genitive — from a PERSON.',
  },
  {
    mode: 'genitiv',
    q: 'Kada se rabi "iz", a kada "od"?',
    en: 'iz or od?',
    opts: [
      'iz iz zatvorenog prostora, od od osobe ili vremena',
      'iz za ljude, od za mjesta',
      'jednako su',
      'ovisi o padežu',
    ],
    answer: 'iz iz zatvorenog prostora, od od osobe ili vremena',
    tip: 'Both take the genitive, so only the meaning separates them.',
  },
  {
    mode: 'genitiv',
    q: 'Radim od ____. (ponedjeljak)',
    en: 'I work from Monday.',
    opts: ['ponedjeljka', 'ponedjeljak', 'ponedjeljku', 'ponedjeljkom'],
    answer: 'ponedjeljka',
    tip: 'A point in time takes od, not iz.',
  },
  {
    mode: 'genitiv',
    q: 'Kava bez ____. (šećer)',
    en: 'Coffee without sugar.',
    opts: ['šećera', 'šećer', 'šećeru', 'šećerom'],
    answer: 'šećera',
    tip: 'bez plus the genitive, every time.',
  },
  {
    mode: 'genitiv',
    q: 'Bio sam kod ____. (liječnik)',
    en: 'I was at the doctor’s.',
    opts: ['liječnika', 'liječnik', 'liječniku', 'liječnikom'],
    answer: 'liječnika',
    tip: 'kod plus the genitive — at somebody’s place.',
  },
  {
    mode: 'genitiv',
    q: 'Koji prijedlog NE traži genitiv?',
    en: 'Which one is not genitive?',
    opts: ['s', 'od', 'do', 'bez'],
    answer: 's',
    tip: 'od, do, iz, bez and kod are the genitive set; s takes the instrumental.',
  },
  {
    mode: 'genitiv',
    q: 'Vlak ide do ____. (Split)',
    en: 'The train goes as far as Split.',
    opts: ['Splita', 'Split', 'Splitu', 'Splitom'],
    answer: 'Splita',
    tip: 'do plus the genitive, and it pairs naturally with od.',
  },

  // ── sasa ──────────────────────────────────────────────────────────────────
  {
    mode: 'sasa',
    q: 'Idem s ____. (brat)',
    en: 'I am going with my brother.',
    opts: ['bratom', 'brata', 'bratu', 'brat'],
    answer: 'bratom',
    tip: 's plus the INSTRUMENTAL for company.',
  },
  {
    mode: 'sasa',
    q: 'Razgovarala je ____ sestrom.',
    en: 'She talked with her sister.',
    opts: ['sa', 's', 'iz', 'od'],
    answer: 'sa',
    tip: 'sa before s, š, z and ž — sestrom starts with s.',
  },
  {
    mode: 'sasa',
    q: 'Kava ____ mlijekom.',
    en: 'Coffee with milk.',
    opts: ['s', 'sa', 'iz', 'od'],
    answer: 's',
    tip: 'm is not in the list, so plain s.',
  },
  {
    mode: 'sasa',
    q: 'Pred kojim se glasovima piše "sa"?',
    en: 'Before which sounds?',
    opts: ['s, š, z, ž', 'svim suglasnicima', 'samoglasnicima', 'nikad'],
    answer: 's, š, z, ž',
    tip: 'Plus sa mnom — the one word that gets it for ease of saying.',
  },
  {
    mode: 'sasa',
    q: 'Dođi ____ mnom.',
    en: 'Come with me.',
    opts: ['sa', 's', 'od', 'kod'],
    answer: 'sa',
    tip: 'sa mnom is fixed. S mnom is hard to say and nobody says it.',
  },
  {
    mode: 'sasa',
    q: 'Je li izbor između "s" i "sa" stvar uljudnosti?',
    en: 'Is the choice a matter of formality?',
    opts: ['ne, glasovna je', 'da, sa je formalnije', 'da, s je formalnije', 'slobodan je'],
    answer: 'ne, glasovna je',
    tip: 'Purely phonological — it is about what the mouth can manage.',
  },
  {
    mode: 'sasa',
    q: 'Putujem ____ prijateljima.',
    en: 'I travel with friends.',
    opts: ['s', 'sa', 'iz', 'do'],
    answer: 's',
    tip: 'p is not in the set.',
  },
  {
    mode: 'sasa',
    q: 'Koji padež traži "s" u značenju društva?',
    en: 'Which case for accompaniment?',
    opts: ['instrumental', 'genitiv', 'akuzativ', 'lokativ'],
    answer: 'instrumental',
    tip: 'And without s, the bare instrumental means BY MEANS OF instead.',
  },
];
