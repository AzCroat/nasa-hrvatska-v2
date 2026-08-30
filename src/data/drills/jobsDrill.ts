// src/data/drills/jobsDrill.ts
//
// A2 WORK & JOBS — the drill for the `work-jobs` lesson.
//
// The structural point is one the lesson makes flatly and English speakers
// routinely get wrong out of caution: in Croatian the FEMALE form of a job
// title is the standard form for a woman, not a variant and not a courtesy.
// *Ona je učiteljica*, never *ona je učitelj*. A learner who avoids the -ica
// form to be safe is producing something that sounds wrong to every native
// speaker in the room.
//
// The rest is which frame the answer takes. *Ja sam* takes a bare nominative,
// *radim kao* takes a nominative too, and *bavim se* takes the INSTRUMENTAL —
// three ways to answer one question, each with its own case. Where you work is
// *u* plus the locative.
//
// Three modes:
//   zenski  — the female forms and how they are built
//   pitanje — the three questions and the three answer frames
//   ured    — the workplace itself

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const JOBS_MODE_LABELS: Record<string, string> = {
  zenski: '👩‍⚕️ Ženski oblik',
  pitanje: '💬 Čime se baviš',
  ured: '🏢 Na poslu',
};

export const JOBS_DRILL_DATA: ModeDrillItem[] = [
  // ── zenski ────────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Ona je ____. (učitelj)',
    en: 'She is a teacher.',
    opts: ['učiteljica', 'učitelj', 'učiteljka', 'učiteljina'],
    answer: 'učiteljica',
    tip: 'The female form is the STANDARD form for a woman, not an option.',
  },
  {
    mode: 'zenski',
    q: 'Ona je ____. (liječnik)',
    en: 'She is a doctor.',
    opts: ['liječnica', 'liječnik', 'liječnikinja', 'liječnja'],
    answer: 'liječnica',
    tip: 'liječnik → liječnica.',
  },
  {
    mode: 'zenski',
    q: 'Ona je ____. (konobar)',
    en: 'She is a waitress.',
    opts: ['konobarica', 'konobar', 'konobarka', 'konobarna'],
    answer: 'konobarica',
    tip: 'konobar → konobarica.',
  },
  {
    mode: 'zenski',
    q: 'Koji je najčešći nastavak za ženski oblik?',
    en: 'Which suffix is commonest?',
    opts: ['-ica', '-ina', '-ka', '-nja'],
    answer: '-ica',
    tip: '-ica covers most of them: profesorica, vozačica, prodavačica.',
  },
  {
    mode: 'zenski',
    q: 'Ona je ____. (odvjetnik)',
    en: 'She is a lawyer.',
    opts: ['odvjetnica', 'odvjetnik', 'odvjetnikinja', 'odvjetna'],
    answer: 'odvjetnica',
    tip: 'odvjetnica.',
  },
  {
    mode: 'zenski',
    q: 'Je li "Ona je učitelj" prihvatljivo?',
    en: 'Is that acceptable?',
    opts: ['ne, treba učiteljica', 'da, jednako je dobro', 'da, uljudnije je', 'samo u pismu'],
    answer: 'ne, treba učiteljica',
    tip: 'It reads as an error, not as neutrality.',
  },
  {
    mode: 'zenski',
    q: 'Ona je ____. (kuhar)',
    en: 'She is a cook.',
    opts: ['kuharica', 'kuhar', 'kuharka', 'kuhinja'],
    answer: 'kuharica',
    tip: 'kuharica. Kuhinja is the kitchen.',
  },
  {
    mode: 'zenski',
    q: 'Kako se kaže "a female colleague"?',
    en: 'a female colleague',
    opts: ['kolegica', 'kolega', 'kolegina', 'koleginja'],
    answer: 'kolegica',
    tip: 'kolega / kolegica — and kolega is masculine despite the -a ending.',
  },

  // ── pitanje ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanje',
    q: 'Čime se ____? (ti)',
    en: 'What do you do for a living?',
    opts: ['baviš', 'baviti', 'bavi', 'bavite'],
    answer: 'baviš',
    tip: 'Čime se baviš? — the commonest way to ask.',
  },
  {
    mode: 'pitanje',
    q: 'Koji padež traži "baviti se"?',
    en: 'Which case does baviti se take?',
    opts: ['instrumental', 'akuzativ', 'genitiv', 'lokativ'],
    answer: 'instrumental',
    tip: 'Bavim se sportom, bavim se glazbom — instrumental throughout.',
  },
  {
    mode: 'pitanje',
    q: 'Radim ____ konobar.',
    en: 'I work as a waiter.',
    opts: ['kao', 'kako', 'za', 'na'],
    answer: 'kao',
    tip: 'Radim kao konobar — and kao leaves the noun in the nominative.',
  },
  {
    mode: 'pitanje',
    q: 'Ja sam ____. (profesor)',
    en: 'I am a teacher.',
    opts: ['profesor', 'profesora', 'profesoru', 'profesorom'],
    answer: 'profesor',
    tip: 'After biti the noun stays in the NOMINATIVE.',
  },
  {
    mode: 'pitanje',
    q: 'Bavim se ____. (glazba)',
    en: 'I am involved in music.',
    opts: ['glazbom', 'glazbu', 'glazbe', 'glazba'],
    answer: 'glazbom',
    tip: 'Instrumental: glazbom.',
  },
  {
    mode: 'pitanje',
    q: 'Koje je tvoje ____?',
    en: 'What is your occupation?',
    opts: ['zanimanje', 'zanimanja', 'zanimljivo', 'zanimanju'],
    answer: 'zanimanje',
    tip: 'zanimanje — occupation. Koje je tvoje zanimanje?',
  },
  {
    mode: 'pitanje',
    q: 'Uljudno pitanje strancu glasi ____?',
    en: 'Asking a stranger politely:',
    opts: ['Čime se bavite', 'Čime se baviš', 'Što radiš', 'Koji je posao'],
    answer: 'Čime se bavite',
    tip: 'A stranger gets Vi, so bavite.',
  },
  {
    mode: 'pitanje',
    q: 'Tražim ____. (posao)',
    en: 'I am looking for a job.',
    opts: ['posao', 'posla', 'poslu', 'poslom'],
    answer: 'posao',
    tip: 'Accusative — and posao loses the o in every other case: posla, poslu.',
  },

  // ── ured ──────────────────────────────────────────────────────────────────
  {
    mode: 'ured',
    q: 'Radim u ____. (banka)',
    en: 'I work in a bank.',
    opts: ['banci', 'banku', 'banke', 'bankom'],
    answer: 'banci',
    tip: 'u plus the LOCATIVE for where — and banka → banci.',
  },
  {
    mode: 'ured',
    q: 'Što je "plaća"?',
    en: 'What is plaća?',
    opts: ['salary', 'payment', 'invoice', 'bonus'],
    answer: 'salary',
    tip: 'plaća — from platiti.',
  },
  {
    mode: 'ured',
    q: 'Što je "tvrtka"?',
    en: 'What is tvrtka?',
    opts: ['company', 'office', 'factory', 'shop'],
    answer: 'company',
    tip: 'tvrtka. The office is ured.',
  },
  {
    mode: 'ured',
    q: 'Imam ____ u deset. (sastanak)',
    en: 'I have a meeting at ten.',
    opts: ['sastanak', 'sastanka', 'sastanku', 'sastankom'],
    answer: 'sastanak',
    tip: 'Accusative after imati.',
  },
  {
    mode: 'ured',
    q: 'Što je "godišnji odmor"?',
    en: 'What is godišnji odmor?',
    opts: ['annual leave', 'a day off', 'a bank holiday', 'a lunch break'],
    answer: 'annual leave',
    tip: 'Usually shortened to godišnji: Idem na godišnji.',
  },
  {
    mode: 'ured',
    q: 'Što je "radno vrijeme"?',
    en: 'What is radno vrijeme?',
    opts: ['working hours', 'overtime', 'deadline', 'shift'],
    answer: 'working hours',
    tip: 'It also means opening hours on a shop door.',
  },
  {
    mode: 'ured',
    q: 'Moj ____ je vrlo strog. (boss)',
    en: 'My boss is very strict.',
    opts: ['šef', 'šefa', 'šefu', 'šefom'],
    answer: 'šef',
    tip: 'The subject stays nominative: moj šef.',
  },
  {
    mode: 'ured',
    q: 'Što znači "zaposlen"?',
    en: 'What does zaposlen mean?',
    opts: ['employed', 'busy', 'retired', 'unemployed'],
    answer: 'employed',
    tip: 'Unemployed is nezaposlen. Busy is zauzet.',
  },
];
