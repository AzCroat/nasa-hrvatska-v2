// src/data/drills/b2/presentIvatiNutiDrill.ts
//
// B2 PRESENTS THE INFINITIVE HIDES — the drill for the `present-ivati-nuti` lesson.
//
//   ujem — -ovati and -ivati verbs: kupovati → kupujem, potpisivati → potpisujem
//   keep — the look-alikes that stay regular: pjevam, uživam, dobivam, zahtijevam
//   nem  — -nuti → -nem, and the hidden n or m: stanem, postanem, počnem, uzmem
//
// Distractors are the forms learners build by analogy: the infinitive vowel kept
// (kupovam), -uj- forced onto a regular verb (pjevuje), the hidden consonant dropped.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PRESENT_IVATI_NUTI_MODE_LABELS: Record<string, string> = {
  ujem: '🛒 -ovati, -ivati → -ujem',
  keep: '🎵 -am or -ujem?',
  nem: '🛑 -nem: krenem, stanem',
};

export const PRESENT_IVATI_NUTI_DRILL_DATA: ModeDrillItem[] = [
  // ── ujem ─────────────────────────────────────────────────────────────────
  {
    mode: 'ujem',
    q: 'Svaki tjedan ____ voće na tržnici.',
    en: 'Every week I buy fruit at the market.',
    opts: ['kupujem', 'kupovam', 'kupovem', 'kupuvam'],
    answer: 'kupujem',
    tip: 'kupovati: -ova- becomes -uj-, then -em.',
  },
  {
    mode: 'ujem',
    q: 'Oni često ____ autobusom.',
    en: 'They often travel by bus.',
    opts: ['putovaju', 'putuju', 'putuvaju', 'putuje'],
    answer: 'putuju',
    tip: 'putovati → putujem; the oni ending is -u.',
  },
  {
    mode: 'ujem',
    q: 'Tko ovdje ____ račune?',
    en: 'Who signs the bills here?',
    opts: ['potpisiva', 'potpisava', 'potpisuje', 'potpisivuje'],
    answer: 'potpisuje',
    tip: 'potpisivati: -iva- becomes -uj-.',
  },
  {
    mode: 'ujem',
    q: 'Na sastanku uvijek ____ sve važno.',
    en: 'At meetings I always write down everything important.',
    opts: ['zapisivam', 'zapisavam', 'zapisem', 'zapisujem'],
    answer: 'zapisujem',
    tip: 'zapisivati → zapisujem, like every -ivati verb of this kind.',
  },
  {
    mode: 'ujem',
    q: 'Što nam ____ za večeru?',
    en: 'What do you recommend for dinner? (to a waiter, politely)',
    opts: ['preporučivate', 'preporučujete', 'preporučavate', 'preporučujemo'],
    answer: 'preporučujete',
    tip: 'preporučivati → preporučujem; the polite vi ending is -ete.',
  },
  {
    mode: 'ujem',
    q: 'Ona redovito ____ članke na blogu.',
    en: 'She regularly publishes articles on her blog.',
    opts: ['objavljuje', 'objavljiva', 'objavljava', 'objavljuju'],
    answer: 'objavljuje',
    tip: 'objavljivati → objavljujem; ona takes -e.',
  },
  {
    mode: 'ujem',
    q: 'Djed nam uvijek ____ stare fotografije.',
    en: 'Grandpa always shows us old photos.',
    opts: ['pokaziva', 'pokazivuje', 'pokazuje', 'pokazava'],
    answer: 'pokazuje',
    tip: 'pokazivati → pokazujem, pokazuje.',
  },
  {
    mode: 'ujem',
    q: 'Profesori ____ studente na kraju semestra.',
    en: 'Professors examine the students at the end of the semester.',
    opts: ['ispitivaju', 'ispitavaju', 'ispituje', 'ispituju'],
    answer: 'ispituju',
    tip: 'ispitivati → ispitujem; oni takes -u.',
  },
  // ── keep ─────────────────────────────────────────────────────────────────
  {
    mode: 'keep',
    q: 'Moja kći lijepo ____.',
    en: 'My daughter sings beautifully.',
    opts: ['pjeva', 'pjevuje', 'pjeve', 'pjevi'],
    answer: 'pjeva',
    tip: 'In pjevati the v belongs to the root: pjevam, pjeva.',
  },
  {
    mode: 'keep',
    q: 'Ljeti ____ u moru i suncu.',
    en: 'In summer we enjoy the sea and the sun.',
    opts: ['uživujemo', 'uživamo', 'uživemo', 'uživimo'],
    answer: 'uživamo',
    tip: 'uživati is regular: uživam, uživamo.',
  },
  {
    mode: 'keep',
    q: 'Svaki mjesec ____ plaću na račun.',
    en: 'Every month I receive my salary into my account.',
    opts: ['dobujem', 'dobivujem', 'dobivam', 'dobivem'],
    answer: 'dobivam',
    tip: 'dobivati is dobiti + -vati, so it stays regular: dobivam.',
  },
  {
    mode: 'keep',
    q: 'Šef ____ da dolazimo na vrijeme.',
    en: 'The boss demands that we arrive on time.',
    opts: ['zahtijevuje', 'zahtijuje', 'zahtijeve', 'zahtijeva'],
    answer: 'zahtijeva',
    tip: 'zahtijevati keeps -a-: zahtijevam, zahtijeva.',
  },
  {
    mode: 'keep',
    q: 'Gdje ____ karte za koncert?',
    en: 'Where do you buy the concert tickets? (to a friend)',
    opts: ['kupuješ', 'kupovaš', 'kupuvaš', 'kupoveš'],
    answer: 'kupuješ',
    tip: 'kupovati really is an -ovati verb: kupujem, kupuješ.',
  },
  {
    mode: 'keep',
    q: 'Zašto ne ____ s nama?',
    en: 'Why don’t you sing with us? (to a group)',
    opts: ['pjevujete', 'pjevate', 'pjevete', 'pjevite'],
    answer: 'pjevate',
    tip: 'pjevati is regular: pjevamo, pjevate.',
  },
  {
    mode: 'keep',
    q: 'On ____ puno poruka svaki dan.',
    en: 'He receives lots of messages every day.',
    opts: ['dobuje', 'dobivuje', 'dobive', 'dobiva'],
    answer: 'dobiva',
    tip: 'dobivati: dobivam, dobiva — no -uj-.',
  },
  {
    mode: 'keep',
    q: 'Vidi se da ____ u svom poslu.',
    en: 'You can see that she enjoys her work.',
    opts: ['uživa', 'uživuje', 'uživava', 'uživje'],
    answer: 'uživa',
    tip: 'uživati: uživam, uživa.',
  },
  // ── nem ──────────────────────────────────────────────────────────────────
  {
    mode: 'nem',
    q: 'Ako sada ____, stići ćemo na vrijeme.',
    en: 'If we set off now, we will arrive on time.',
    opts: ['krenujemo', 'krenemo', 'krenimo', 'krenamo'],
    answer: 'krenemo',
    tip: 'krenuti drops the u: krenem, krenemo. Krenimo is a command.',
  },
  {
    mode: 'nem',
    q: '____ auto, molim te.',
    en: 'Move the car, please. (to a friend)',
    opts: ['Maknuj', 'Makneš', 'Makni', 'Maknuo'],
    answer: 'Makni',
    tip: 'The command is built on the present stem makn-: makni.',
  },
  {
    mode: 'nem',
    q: 'Ako ____ ovdje, kupit ću kruh.',
    en: 'If you stop here, I’ll buy some bread. (to a friend)',
    opts: ['stateš', 'stanješ', 'staš', 'staneš'],
    answer: 'staneš',
    tip: 'stati hides an n: stanem, staneš.',
  },
  {
    mode: 'nem',
    q: 'Želim da ____ dobar čovjek.',
    en: 'I want him to become a good man.',
    opts: ['postane', 'posta', 'postati', 'postanu'],
    answer: 'postane',
    tip: 'postati → postanem, postane.',
  },
  {
    mode: 'nem',
    q: 'Ako ____ kod nas, bit će nam drago.',
    en: 'If you stay with us, we will be glad. (politely)',
    opts: ['ostate', 'ostanite', 'ostanete', 'ostatete'],
    answer: 'ostanete',
    tip: 'ostati → ostanem, ostanete. Ostanite is the command.',
  },
  {
    mode: 'nem',
    q: 'Kad ____ kuhati, uvijek uključim radio.',
    en: 'When I start cooking, I always turn on the radio.',
    opts: ['počem', 'počinim', 'početem', 'počnem'],
    answer: 'počnem',
    tip: 'početi shows an n in the present: počnem.',
  },
  {
    mode: 'nem',
    q: '____ još jedan kolač!',
    en: 'Take one more cake! (to a friend)',
    opts: ['Uzmi', 'Uzi', 'Uzeti', 'Uzmeš'],
    answer: 'Uzmi',
    tip: 'uzeti hides an m: uzmem, so the command is uzmi.',
  },
  {
    mode: 'nem',
    q: 'Ako ti ____ ključevi, nazovi me.',
    en: 'If your keys go missing, call me.',
    opts: ['nestu', 'nestanu', 'nestanuju', 'nestatu'],
    answer: 'nestanu',
    tip: 'nestati → nestanem; oni takes -u: nestanu.',
  },
];
