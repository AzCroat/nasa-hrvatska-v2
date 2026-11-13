// src/data/drills/c1/multiSubjectAgreementDrill.ts
//
// C1 AGREEMENT WITH SEVERAL SUBJECTS — the drill for the `multi-subject-agreement` lesson
// (C1 position 22).
//
// Three modes, eight items each:
//   rod     — gender: one masculine subject gives the masculine plural; feminine only
//             when every subject is feminine; two neuter subjects take the neuter plural
//   lice    — person: ja outranks ti, ti outranks a third person
//   poredak — s + instrumental is company, not a subject; a verb placed first
//
// Where the standard grammar allows two forms (a verb placed first agreeing with the
// nearest subject; feminine + neuter with the nearer noun; all-neuter in the masculine)
// the accepted alternative is never offered as a wrong option.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const MULTI_SUBJECT_AGREEMENT_MODE_LABELS: Record<string, string> = {
  rod: '👫 Rod',
  lice: '🧑‍🤝‍🧑 Lice',
  poredak: '🔀 Poredak i s',
};

export const MULTI_SUBJECT_AGREEMENT_DRILL_DATA: ModeDrillItem[] = [
  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: 'Brat i sestra su ____ jučer iz Zagreba.',
    en: 'My brother and sister arrived from Zagreb yesterday.',
    opts: ['došli', 'došle', 'došla', 'došao'],
    answer: 'došli',
    tip: 'One masculine subject is enough for the masculine plural.',
  },
  {
    mode: 'rod',
    q: 'Majka i kći su ____ na tržnicu.',
    en: 'Mother and daughter went to the market.',
    opts: ['otišle', 'otišli', 'otišla', 'otišao'],
    answer: 'otišle',
    tip: 'Every subject is feminine, so the feminine plural.',
  },
  {
    mode: 'rod',
    q: 'Otac i kći bili su jako ____.',
    en: 'Father and daughter were very happy.',
    opts: ['sretni', 'sretne', 'sretna', 'sretan'],
    answer: 'sretni',
    tip: 'otac is masculine, so the adjective is masculine plural.',
  },
  {
    mode: 'rod',
    q: 'Baka i unuka ____ su kolače za Božić.',
    en: 'Grandmother and granddaughter baked cakes for Christmas.',
    opts: ['pekle', 'pekli', 'peklo', 'pekao'],
    answer: 'pekle',
    tip: 'Both subjects are feminine.',
  },
  {
    mode: 'rod',
    q: 'Dijete i štene bila su ____.',
    en: 'The child and the puppy were hungry.',
    opts: ['gladna', 'gladne', 'gladan', 'gladno'],
    answer: 'gladna',
    tip: 'Two neuter subjects usually take the neuter plural, and bila already shows it.',
  },
  {
    mode: 'rod',
    q: 'Ana, Marija i Ivan ____ su na koncert.',
    en: 'Ana, Marija and Ivan went to the concert.',
    opts: ['išli', 'išle', 'išla', 'išao'],
    answer: 'išli',
    tip: 'Two women and one man: the masculine plural.',
  },
  {
    mode: 'rod',
    q: 'Selo i grad ____ su novom cestom.',
    en: 'The village and the town have been connected by a new road.',
    opts: ['povezani', 'povezane', 'povezan', 'povezano'],
    answer: 'povezani',
    tip: 'grad is masculine, so the masculine plural.',
  },
  {
    mode: 'rod',
    q: 'Teta i sestrična ____ su nas na kolodvoru.',
    en: 'My aunt and my cousin waited for us at the station.',
    opts: ['čekale', 'čekali', 'čekala', 'čekao'],
    answer: 'čekale',
    tip: 'teta and sestrična are both feminine.',
  },
  // ── lice ──────────────────────────────────────────────────────────────────
  {
    mode: 'lice',
    q: 'Ti i ja ____ zakasnili na vlak.',
    en: 'You and I missed the train.',
    opts: ['smo', 'ste', 'su', 'si'],
    answer: 'smo',
    tip: 'ja outranks ti: together they are mi.',
  },
  {
    mode: 'lice',
    q: 'Ti i Marko ____ najbolji prijatelji.',
    en: 'You and Marko are best friends.',
    opts: ['ste', 'smo', 'su', 'si'],
    answer: 'ste',
    tip: 'ti outranks a third person: together they are vi.',
  },
  {
    mode: 'lice',
    q: 'On i ona ____ se vjenčali u svibnju.',
    en: 'He and she got married in May.',
    opts: ['su', 'smo', 'ste', 'je'],
    answer: 'su',
    tip: 'Two third persons: oni.',
  },
  {
    mode: 'lice',
    q: 'Moj brat i ja ____ blizanci.',
    en: 'My brother and I are twins.',
    opts: ['smo', 'su', 'ste', 'je'],
    answer: 'smo',
    tip: 'ja is among the subjects, so the first person plural.',
  },
  {
    mode: 'lice',
    q: 'Ti i tvoja sestra ____ uvijek dobrodošle.',
    en: 'You and your sister are always welcome.',
    opts: ['ste', 'smo', 'su', 'si'],
    answer: 'ste',
    tip: 'ti outranks tvoja sestra: vi.',
  },
  {
    mode: 'lice',
    q: 'Maja kaže: „Ana i ja smo ____ cijelo ljeto.“',
    en: 'Maja says: “Ana and I travelled all summer.”',
    opts: ['putovale', 'putovali', 'putovala', 'putovao'],
    answer: 'putovale',
    tip: 'Both speakers are women, so the feminine plural.',
  },
  {
    mode: 'lice',
    q: 'Vi i mi ____ susjedi već dvadeset godina.',
    en: 'You and we have been neighbours for twenty years.',
    opts: ['smo', 'ste', 'su', 'je'],
    answer: 'smo',
    tip: 'mi outranks vi.',
  },
  {
    mode: 'lice',
    q: 'Ti i Ivan ____ zadnji stigli.',
    en: 'You and Ivan arrived last.',
    opts: ['ste', 'smo', 'su', 'si'],
    answer: 'ste',
    tip: 'ti and a third person make vi.',
  },
  // ── poredak ───────────────────────────────────────────────────────────────
  {
    mode: 'poredak',
    q: 'Petar je s prijateljima ____ na Velebit.',
    en: 'Petar went to Velebit with his friends.',
    opts: ['otišao', 'otišli', 'otišla', 'otišle'],
    answer: 'otišao',
    tip: 's prijateljima is company; the verb agrees with Petar.',
  },
  {
    mode: 'poredak',
    q: 'Ana je sa sestrom ____ u Split.',
    en: 'Ana travelled to Split with her sister.',
    opts: ['otputovala', 'otputovao', 'otputovali', 'otputovalo'],
    answer: 'otputovala',
    tip: 'sa sestrom is company; the verb agrees with Ana.',
  },
  {
    mode: 'poredak',
    q: 'Marko je s bratom ____ utakmicu.',
    en: 'Marko watched the match with his brother.',
    opts: ['gledao', 'gledali', 'gledala', 'gledale'],
    answer: 'gledao',
    tip: 'The subject is Marko alone.',
  },
  {
    mode: 'poredak',
    q: 'Na vjenčanje ____ kumovi i rodbina.',
    en: 'The godparents and relatives came to the wedding.',
    opts: ['su došli', 'su došle', 'je došao', 'su došlo'],
    answer: 'su došli',
    tip: 'A plural predicate is always correct when it comes first.',
  },
  {
    mode: 'poredak',
    q: 'U sobu ____ majka i otac.',
    en: 'Mother and father came into the room.',
    opts: ['su ušli', 'su ušle', 'je ušlo', 'su ušla'],
    answer: 'su ušli',
    tip: 'With the verb first, the plural is always correct; otac makes it masculine.',
  },
  {
    mode: 'poredak',
    q: 'Moja je baka s djedom ____ cijeli život na otoku.',
    en: 'My grandmother lived her whole life on the island with my grandfather.',
    opts: ['živjela', 'živio', 'živjeli', 'živjele'],
    answer: 'živjela',
    tip: 's djedom is company; the subject is baka.',
  },
  {
    mode: 'poredak',
    q: 'Iz Kanade ____ ujak i ujna.',
    en: 'My uncle and aunt arrived from Canada.',
    opts: ['su stigli', 'su stigle', 'je stiglo', 'su stigla'],
    answer: 'su stigli',
    tip: 'Verb first, plural: ujak makes it masculine.',
  },
  {
    mode: 'poredak',
    q: 'Učiteljica je s učenicima ____ muzej.',
    en: 'The teacher visited the museum with her pupils.',
    opts: ['posjetila', 'posjetili', 'posjetile', 'posjetio'],
    answer: 'posjetila',
    tip: 's učenicima is company; the verb agrees with učiteljica.',
  },
];
