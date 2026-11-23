// src/data/drills/a2/workJobsDrill.ts
//
// A2 WORK AND JOBS — the drill for the `work-jobs` lesson.
//
// Follows Razgovarajte s nama! A2–B1, lesson 7 "Tko radi, ne boji se gladi", pages 115,
// 117–119 and 122 (with "Što ste po zanimanju?" from page 18): the dialogue of Tom and
// Sandra coming home from work (tvrtka, sastanak, šef, kolega), "Radni običaji" (radno
// vrijeme od 9 do 5, godišnji odmor), the IMENICA POSAO table (posla, poslu), "Radim kao
// zubar" and the paired job titles (učiteljica, novinarka).
//
// Three modes:
//   zanimanje — asking what someone does and answering: Ja sam… / Radim kao…
//   zenski    — the female form of the job title
//   naPoslu   — the noun posao, the office, the hours, the salary and vacation

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const WORK_JOBS_MODE_LABELS: Record<string, string> = {
  zanimanje: '💼 Čime se baviš?',
  zenski: '👩‍⚕️ On i ona',
  naPoslu: '🏢 Na poslu',
};

export const WORK_JOBS_DRILL_DATA: ModeDrillItem[] = [
  // ── zanimanje ─────────────────────────────────────────────────────────────
  {
    mode: 'zanimanje',
    q: '____ se baviš? — Ja sam kuhar.',
    en: 'What do you do? — I am a cook.',
    opts: ['Čime', 'Što', 'Tko', 'Kako'],
    answer: 'Čime',
    tip: 'baviti se takes the instrumental, so the question word is Čime. Što goes with radiš, not with se baviš; Tko asks who and Kako asks how.',
  },
  {
    mode: 'zanimanje',
    q: 'Što ste po ____? — Ja sam liječnica.',
    en: 'What is your profession? — I am a doctor.',
    opts: ['zanimanju', 'zanimanje', 'zanimanja', 'zanimanjem'],
    answer: 'zanimanju',
    tip: 'The set question is "Što ste po zanimanju?", and po takes the locative: zanimanju. zanimanje is the dictionary form, zanimanja the genitive, zanimanjem the instrumental.',
  },
  {
    mode: 'zanimanje',
    q: 'Moj brat radi kao ____ u hotelu.',
    en: 'My brother works as a waiter at a hotel.',
    opts: ['konobar', 'konobara', 'konobaru', 'konobarom'],
    answer: 'konobar',
    tip: 'After radim kao the job stays in its dictionary form: kao konobar. konobara, konobaru and konobarom add case endings that kao does not ask for.',
  },
  {
    mode: 'zanimanje',
    q: 'Marko radi u školi. On je ____.',
    en: 'Marko works at a school. He is a teacher.',
    opts: ['učitelj', 'učitelja', 'učitelju', 'učiteljica'],
    answer: 'učitelj',
    tip: 'After je the job is in the subject form, and Marko is a man: učitelj. učitelja and učitelju are case forms, and učiteljica is the title for a woman.',
  },
  {
    mode: 'zanimanje',
    q: 'Gospođo Horvat, čime se ____?',
    en: 'Mrs. Horvat, what do you do for a living?',
    opts: ['bavite', 'baviš', 'bavi', 'bavim'],
    answer: 'bavite',
    tip: 'You say Vi to Mrs. Horvat, so the verb ends in -ite: bavite. baviš is the ti form for a friend, bavi is he or she, and bavim is I.',
  },
  {
    mode: 'zanimanje',
    q: 'Ivan radi u restoranu i nosi gostima jelo i vino. On je ____.',
    en: 'Ivan works at a restaurant and brings the guests food and wine. What is he?',
    opts: ['konobar', 'kuhar', 'vozač', 'prodavač'],
    answer: 'konobar',
    tip: 'The person who brings food and wine to the table is a konobar. A kuhar cooks in the kitchen, a vozač drives, and a prodavač sells in a store.',
  },
  {
    mode: 'zanimanje',
    q: 'Tom radi ____ vozač u velikoj tvrtki.',
    en: 'Tom works as a driver at a big company.',
    opts: ['kao', 'za', 'kod', 'od'],
    answer: 'kao',
    tip: "What you work AS is radim kao + the job. za would mean for someone, kod at someone's place, and od from someone — and all three would need a case ending on vozač.",
  },
  {
    mode: 'zanimanje',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (I work as a salesman.)',
    opts: [
      'Radim kao prodavač.',
      'Radim kao prodavača.',
      'Radim kao prodavačem.',
      'Radim prodavač kao.',
    ],
    answer: 'Radim kao prodavač.',
    tip: 'kao comes before the job, and the job keeps its dictionary form: Radim kao prodavač. prodavača and prodavačem add endings kao does not take, and kao cannot stand at the end.',
  },
  {
    mode: 'zanimanje',
    q: 'Jesi li zaposlen? — Da, ____ u banci.',
    en: 'Are you employed? — Yes, I work at a bank.',
    opts: ['radim', 'radiš', 'radi', 'raditi'],
    answer: 'radim',
    tip: 'You are answering about yourself, so the ja form: radim. radiš repeats the question form for you, radi is he or she, and raditi is the infinitive.',
  },

  // ── zenski ────────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Marko je učitelj, a Ana je ____.',
    en: 'Marko is a teacher, and Ana is a teacher too.',
    opts: ['učiteljica', 'učitelj', 'učiteljicu', 'učitelja'],
    answer: 'učiteljica',
    tip: 'A woman takes the female title, and after je it stays in the subject form: učiteljica. učitelj is the title for a man, učiteljicu is an accusative, učitelja a masculine case form.',
  },
  {
    mode: 'zenski',
    q: 'Sandra radi u bolnici. Ona je ____.',
    en: 'Sandra works at a hospital. She is a doctor.',
    opts: ['liječnica', 'liječnik', 'liječnicu', 'liječnika'],
    answer: 'liječnica',
    tip: 'liječnik becomes liječnica for a woman, and it is the standard form, not an option. liječnik reads as an error for Sandra; liječnicu and liječnika are case forms that do not follow je.',
  },
  {
    mode: 'zenski',
    q: 'Ana kaže: „Radim kao ____.“',
    en: 'Ana says: "I work as a waitress."',
    opts: ['konobarica', 'konobaricu', 'konobar', 'konobaricom'],
    answer: 'konobarica',
    tip: 'Ana is a woman, and after kao the title keeps its dictionary form: konobarica. konobaricu and konobaricom add case endings, and konobar is the title for a man.',
  },
  {
    mode: 'zenski',
    q: 'Maja vozi tramvaj. Ona je ____.',
    en: 'Maja drives a tram. She is a driver.',
    opts: ['vozačica', 'vozač', 'vozačicu', 'vozača'],
    answer: 'vozačica',
    tip: 'vozač adds -ica for a woman: vozačica. vozač is the male title, and vozačicu and vozača are accusative forms that cannot follow je.',
  },
  {
    mode: 'zenski',
    q: 'Gospođa Kovač radi u trgovini. Ona je ____.',
    en: 'Mrs. Kovač works in a store. She is a salesperson.',
    opts: ['prodavačica', 'prodavač', 'prodavačicu', 'prodavača'],
    answer: 'prodavačica',
    tip: 'For a woman the title is prodavačica, in the subject form after je. prodavač is the title for a man; prodavačicu and prodavača are object forms.',
  },
  {
    mode: 'zenski',
    q: 'Luka je programer, a njegova sestra je ____.',
    en: 'Luka is a programmer, and his sister is a programmer too.',
    opts: ['programerka', 'programer', 'programerku', 'programera'],
    answer: 'programerka',
    tip: 'Some titles form the female with -ka: programer → programerka. programer is the title for her brother, and programerku and programera are accusative forms.',
  },
  {
    mode: 'zenski',
    q: 'Petrina teta je ____.',
    en: "Petra's aunt is a lawyer.",
    opts: ['odvjetnica', 'odvjetnik', 'odvjetnicu', 'odvjetnika'],
    answer: 'odvjetnica',
    tip: 'An aunt is a woman, so odvjetnik becomes odvjetnica. odvjetnik is the male title; odvjetnicu and odvjetnika are case forms that do not follow je.',
  },
  {
    mode: 'zenski',
    q: 'Gospodin Babić je profesor, a njegova žena je ____.',
    en: 'Mr. Babić is a teacher, and his wife is a teacher too.',
    opts: ['profesorica', 'profesor', 'profesoricu', 'profesora'],
    answer: 'profesorica',
    tip: 'His wife takes the female title in -ica: profesorica. profesor is the form for him, and profesoricu and profesora are accusative forms.',
  },
  {
    mode: 'zenski',
    q: 'To je moja ____ Ana. Radimo zajedno.',
    en: 'This is my colleague Ana. We work together.',
    opts: ['kolegica', 'kolega', 'kolegicu', 'kolegice'],
    answer: 'kolegica',
    tip: 'A female colleague is a kolegica, and after To je it is in the subject form. kolega is a man, kolegicu is the accusative, and kolegice is the genitive or the plural.',
  },

  // ── naPoslu ───────────────────────────────────────────────────────────────
  {
    mode: 'naPoslu',
    q: 'Ujutro idem na ____.',
    en: 'In the morning I go to work.',
    opts: ['posao', 'poslu', 'posla', 'poslom'],
    answer: 'posao',
    tip: 'Going to work is movement, so na + accusative, and for a masculine thing that is the dictionary form: na posao. na poslu means being at work, posla is the genitive, poslom the instrumental.',
  },
  {
    mode: 'naPoslu',
    q: 'Tom je još na ____.',
    en: 'Tom is still at work.',
    opts: ['poslu', 'posao', 'posla', 'poslom'],
    answer: 'poslu',
    tip: 'Being at work is a position, so na + locative, and posao loses its a: na poslu. na posao is for going there, posla is the genitive, poslom the instrumental.',
  },
  {
    mode: 'naPoslu',
    q: 'U pet sati dolazim kući s ____.',
    en: 'At five I come home from work.',
    opts: ['posla', 'poslu', 'posao', 'poslom'],
    answer: 'posla',
    tip: 'You are at work "na poslu", so you come back "s posla": s meaning from takes the genitive. poslu is the locative, posao the dictionary form, and s poslom would mean with work.',
  },
  {
    mode: 'naPoslu',
    q: 'Radim u velikoj ____ u Zagrebu.',
    en: 'I work at a big company in Zagreb.',
    opts: ['tvrtki', 'tvrtka', 'tvrtku', 'tvrtke'],
    answer: 'tvrtki',
    tip: 'Where you work is u + locative, and velikoj already shows it: u velikoj tvrtki. tvrtka is the dictionary form, tvrtku the accusative, tvrtke the genitive.',
  },
  {
    mode: 'naPoslu',
    q: '____ vrijeme je od osam do četiri.',
    en: 'Working hours are from eight to four.',
    opts: ['Radno', 'Radni', 'Radna', 'Radne'],
    answer: 'Radno',
    tip: 'vrijeme is neuter, so the adjective takes -o: radno vrijeme. Radni is masculine, Radna feminine, and Radne a plural form.',
  },
  {
    mode: 'naPoslu',
    q: 'Sandra danas ima tri ____.',
    en: 'Sandra has three meetings today.',
    opts: ['sastanka', 'sastanak', 'sastanci', 'sastanke'],
    answer: 'sastanka',
    tip: 'After dva, tri and četiri a masculine noun takes -a, and sastanak drops its second a: tri sastanka. sastanak is one meeting, sastanci and sastanke are plural forms used without a number.',
  },
  {
    mode: 'naPoslu',
    q: 'U kolovozu idem na godišnji ____.',
    en: 'In August I am going on vacation.',
    opts: ['odmor', 'odmora', 'odmoru', 'odmorom'],
    answer: 'odmor',
    tip: 'Going on vacation is movement: na + accusative, and a masculine thing does not change: na godišnji odmor. odmoru is where you are once you are on it, odmora is the genitive, odmorom the instrumental.',
  },
  {
    mode: 'naPoslu',
    q: 'Kolege su sada na godišnjem ____.',
    en: 'My colleagues are on vacation now.',
    opts: ['odmoru', 'odmor', 'odmora', 'odmorom'],
    answer: 'odmoru',
    tip: 'They are already on vacation, a state and not movement, so the locative, as godišnjem shows: na godišnjem odmoru. odmor is the accusative for going, odmora the genitive, odmorom the instrumental.',
  },
  {
    mode: 'naPoslu',
    q: 'Ručam s ____ iz ureda.',
    en: 'I am having lunch with a colleague (a man) from the office.',
    opts: ['kolegom', 'kolega', 'kolegu', 'kolegi'],
    answer: 'kolegom',
    tip: 's takes the instrumental, and kolega changes like a noun in -a: s kolegom. kolega is the dictionary form, kolegu the accusative, kolegi the dative.',
  },
  {
    mode: 'naPoslu',
    q: 'Ovaj tjedan imam puno ____.',
    en: 'I have a lot of work this week.',
    opts: ['posla', 'posao', 'poslu', 'poslovi'],
    answer: 'posla',
    tip: 'puno takes the genitive, and posao loses its a: puno posla. posao is the dictionary form, poslu the dative or locative, and poslovi means several separate jobs.',
  },
];
