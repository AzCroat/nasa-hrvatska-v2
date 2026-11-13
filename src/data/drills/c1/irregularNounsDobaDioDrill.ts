// src/data/drills/c1/irregularNounsDobaDioDrill.ts
//
// C1 POSAO, DIO, ANĐEO, KOTAO, DOBA — the drill for the `irregular-nouns-doba-dio`
// lesson (C1 position 16).
//
// Three modes:
//   oblici   — the singular cases: posla, dijelu, anđela, kotlu, pepela
//   mnozina  — the plurals: poslovi, dijelovi, kotlovi — but anđeli
//   doba     — the neuter doba against dob (age), and dijela against djela
//
// The dative and locative of doba vary in usage (u kamenom dobu / u kameno doba), so
// no item asks for them.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const IRREGULAR_NOUNS_DOBA_DIO_MODE_LABELS: Record<string, string> = {
  oblici: '🧩 Padeži',
  mnozina: '👥 Množina',
  doba: '⏳ Doba, dob, djelo',
};

export const IRREGULAR_NOUNS_DOBA_DIO_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Danas sam ostao duže na ____.',
    en: 'Today I stayed longer at work.',
    opts: ['poslu', 'posaou', 'posalu', 'posao'],
    answer: 'poslu',
    tip: 'Locative: restore the l, drop the fleeting a — poslu.',
  },
  {
    mode: 'oblici',
    q: 'Nakon ____ idemo na večeru.',
    en: 'After work we are going to dinner.',
    opts: ['posaoa', 'posla', 'posala', 'poslu'],
    answer: 'posla',
    tip: 'Nakon + genitive: posla.',
  },
  {
    mode: 'oblici',
    q: 'Zadovoljna je svojim novim ____.',
    en: 'She is satisfied with her new job.',
    opts: ['posaoom', 'posalom', 'poslom', 'poslu'],
    answer: 'poslom',
    tip: 'Instrumental: poslom.',
  },
  {
    mode: 'oblici',
    q: 'Stanujemo u istočnom ____ grada.',
    en: 'We live in the eastern part of the city.',
    opts: ['diou', 'djelu', 'dijelom', 'dijelu'],
    answer: 'dijelu',
    tip: 'Locative of dio, with the long ije restored: dijelu.',
  },
  {
    mode: 'oblici',
    q: 'Bez tog ____ stroj ne radi.',
    en: 'Without that part the machine does not work.',
    opts: ['dijela', 'djela', 'dioa', 'dio'],
    answer: 'dijela',
    tip: 'Genitive of dio: dijela. Djela belongs to djelo, a work.',
  },
  {
    mode: 'oblici',
    q: 'U snu je vidjela ____ sa zlatnim krilima.',
    en: 'In her dream she saw an angel with golden wings.',
    opts: ['anđeo', 'anđela', 'anđelu', 'anđel'],
    answer: 'anđela',
    tip: 'A living masculine object: the accusative equals the genitive, anđela.',
  },
  {
    mode: 'oblici',
    q: 'Juha se kuhala u velikom ____.',
    en: 'The soup was cooking in a big cauldron.',
    opts: ['kotalu', 'kotaou', 'kotlu', 'kotao'],
    answer: 'kotlu',
    tip: 'Locative of kotao: kotlu, without the fleeting a.',
  },
  {
    mode: 'oblici',
    q: 'Na stolu je bilo malo ____ od cigarete.',
    en: 'There was a little cigarette ash on the table.',
    opts: ['pepla', 'pepeo', 'pepelu', 'pepela'],
    answer: 'pepela',
    tip: 'After malo: the genitive, pepela — the e stays.',
  },
  {
    mode: 'oblici',
    q: 'Zahvalio je svom ____ čuvaru.',
    en: 'He thanked his guardian angel.',
    opts: ['anđelu', 'anđeou', 'anđela', 'anđelom'],
    answer: 'anđelu',
    tip: 'Dative: anđelu.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Svi kućanski ____ ostali su meni.',
    en: 'All the household chores were left to me.',
    opts: ['posli', 'poslovi', 'posaoi', 'posalovi'],
    answer: 'poslovi',
    tip: 'Plural of posao: poslovi.',
  },
  {
    mode: 'mnozina',
    q: 'Ovaj tjedan imam puno ____.',
    en: 'This week I have a lot of jobs to do.',
    opts: ['poslova', 'posla', 'poslove', 'poslovima'],
    answer: 'poslova',
    tip: 'After puno: the genitive plural, poslova.',
  },
  {
    mode: 'mnozina',
    q: 'Rezervni ____ stižu iz Njemačke.',
    en: 'The spare parts are arriving from Germany.',
    opts: ['diovi', 'djelovi', 'dijelovi', 'dijeli'],
    answer: 'dijelovi',
    tip: 'Plural of dio: dijelovi.',
  },
  {
    mode: 'mnozina',
    q: 'Knjiga se sastoji od tri ____.',
    en: 'The book consists of three parts.',
    opts: ['dijelova', 'dijela', 'djela', 'dijelovi'],
    answer: 'dijela',
    tip: 'After tri: the form dijela (like the genitive singular).',
  },
  {
    mode: 'mnozina',
    q: 'Na oltaru su dva kamena ____.',
    en: 'On the altar there are two stone angels.',
    opts: ['anđelova', 'anđela', 'anđeli', 'anđelima'],
    answer: 'anđela',
    tip: 'After dva: anđela.',
  },
  {
    mode: 'mnozina',
    q: 'Na nebu su pjevali ____.',
    en: 'Angels were singing in the sky.',
    opts: ['anđelovi', 'anđeoi', 'anđeli', 'anđele'],
    answer: 'anđeli',
    tip: 'The two-syllable stem anđel- takes -i, not -ovi: anđeli.',
  },
  {
    mode: 'mnozina',
    q: 'U podrumu su stajali stari bakreni ____.',
    en: 'Old copper cauldrons stood in the cellar.',
    opts: ['kotali', 'kotlevi', 'kotlovi', 'kotaovi'],
    answer: 'kotlovi',
    tip: 'Plural of kotao: kotlovi.',
  },
  {
    mode: 'mnozina',
    q: 'Majstor je zamijenio sve istrošene ____.',
    en: 'The repairman replaced all the worn-out parts.',
    opts: ['dijelove', 'dijelovi', 'djelove', 'dijele'],
    answer: 'dijelove',
    tip: 'Accusative plural of dio: dijelove.',
  },
  {
    mode: 'mnozina',
    q: 'Govorili smo o novim ____.',
    en: 'We talked about the new jobs.',
    opts: ['poslovi', 'poslovima', 'poslima', 'poslova'],
    answer: 'poslovima',
    tip: 'O + locative plural: poslovima.',
  },

  // ── doba ──────────────────────────────────────────────────────────────────
  {
    mode: 'doba',
    q: 'Jesen je moje omiljeno godišnje ____.',
    en: 'Autumn is my favourite season.',
    opts: ['doba', 'dob', 'dobi', 'dobe'],
    answer: 'doba',
    tip: 'A season is godišnje doba — neuter.',
  },
  {
    mode: 'doba',
    q: 'Djeca predškolske ____ ulaze besplatno.',
    en: 'Pre-school children get in free.',
    opts: ['doba', 'dobi', 'dobe', 'dob'],
    answer: 'dobi',
    tip: 'A person’s age is dob; its genitive is dobi.',
  },
  {
    mode: 'doba',
    q: 'Ovo je bilo ____ doba za cijelu obitelj.',
    en: 'This was a difficult time for the whole family.',
    opts: ['teška', 'težak', 'teško', 'teški'],
    answer: 'teško',
    tip: 'Doba is neuter, so the adjective is neuter: teško doba.',
  },
  {
    mode: 'doba',
    q: 'U ____ doba nije bilo ni struje ni telefona.',
    en: 'At that time there was neither electricity nor a telephone.',
    opts: ['ta', 'taj', 'tu', 'to'],
    answer: 'to',
    tip: 'U to doba — neuter accusative.',
  },
  {
    mode: 'doba',
    q: 'U mojoj ____ više se ne trči maraton.',
    en: 'At my age you no longer run marathons.',
    opts: ['doba', 'dobu', 'dobi', 'dobe'],
    answer: 'dobi',
    tip: 'Mojoj is feminine: this is dob, age — u mojoj dobi.',
  },
  {
    mode: 'doba',
    q: 'Muzej čuva sva ____ tog slikara.',
    en: 'The museum keeps all the works of that painter.',
    opts: ['dijela', 'djela', 'dijelove', 'dijelovi'],
    answer: 'djela',
    tip: 'Works are djela, plural of djelo — not dijela, of a part.',
  },
  {
    mode: 'doba',
    q: 'Najljepši ____ izleta bio je posjet otoku.',
    en: 'The nicest part of the trip was the visit to the island.',
    opts: ['djelo', 'dijel', 'dio', 'djel'],
    answer: 'dio',
    tip: 'A part is dio; djelo is a work or a deed.',
  },
  {
    mode: 'doba',
    q: 'Hrvatska ima četiri godišnja ____.',
    en: 'Croatia has four seasons.',
    opts: ['dobi', 'doba', 'dobe', 'dobova'],
    answer: 'doba',
    tip: 'Doba keeps its form after četiri, with neuter plural godišnja.',
  },
];
