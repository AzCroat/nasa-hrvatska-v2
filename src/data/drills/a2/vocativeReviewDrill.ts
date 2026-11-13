// src/data/drills/a2/vocativeReviewDrill.ts
//
// A2 THE VOCATIVE REVISITED — the drill for the `vocative-review` lesson.
//
// Three modes:
//   muski    — men: -e (Ivane, Petre), -u after a soft consonant and on -ar job words,
//              k → č (čovječe), and names in a vowel unchanged (Marko)
//   zenski   — women: -o (sestro, gospođo), -ica → -ice, and describing words (draga)
//   mnozina  — groups: the ordinary plural, plus djeco, braćo, gospodo
//
// Women's first names in -a are never tested against their -o form: both Ana! and Ano!,
// Marija! and Marijo! are correct, so neither is ever offered as a distractor to the other.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VOCATIVE_REVIEW_MODE_LABELS: Record<string, string> = {
  muski: '👨 Muškarci',
  zenski: '👩 Žene',
  mnozina: '👥 Grupe',
};

export const VOCATIVE_REVIEW_DRILL_DATA: ModeDrillItem[] = [
  // ── muski ──────────────────────────────────────────────────────────────
  {
    mode: 'muski',
    q: '____, dođi ovamo!',
    en: 'Ivan, come here!',
    opts: ['Ivane', 'Ivan', 'Ivanu', 'Ivano'],
    answer: 'Ivane',
    tip: 'A hard consonant at the end takes -e.',
  },
  {
    mode: 'muski',
    q: '____, gdje si?',
    en: 'Petar, where are you?',
    opts: ['Petre', 'Petar', 'Petare', 'Petru'],
    answer: 'Petre',
    tip: 'The fleeting a drops, as in Petra, then -e.',
  },
  {
    mode: 'muski',
    q: 'Hvala, ____!',
    en: 'Thank you, my friend!',
    opts: ['prijatelju', 'prijatelje', 'prijatelj', 'prijatelja'],
    answer: 'prijatelju',
    tip: 'lj is soft, so the ending is -u.',
  },
  {
    mode: 'muski',
    q: '____, račun, molim!',
    en: 'Waiter, the bill, please!',
    opts: ['Konobaru', 'Konobarom', 'Konobaro', 'Konobara'],
    answer: 'Konobaru',
    tip: 'Job words in -ar take -u.',
  },
  {
    mode: 'muski',
    q: 'Dobar dan, ____!',
    en: 'Good afternoon, sir!',
    opts: ['gospodine', 'gospodin', 'gospodinu', 'gospodina'],
    answer: 'gospodine',
    tip: 'gospodin ends in a hard consonant: -e.',
  },
  {
    mode: 'muski',
    q: '____, što radiš?',
    en: 'Man, what are you doing?',
    opts: ['Čovječe', 'Čovjek', 'Čovjeke', 'Čovjeku'],
    answer: 'Čovječe',
    tip: 'k becomes č before -e.',
  },
  {
    mode: 'muski',
    q: 'Prijatelj se zove Marko. Kako ga zoveš?',
    opts: ['Marko!', 'Marke!', 'Marku!', 'Marka!'],
    answer: 'Marko!',
    tip: 'A masculine name that already ends in a vowel stays as it is.',
  },
  {
    mode: 'muski',
    q: 'Dobar dan, gospodine ____!',
    en: 'Good afternoon, Doctor!',
    opts: ['doktore', 'doktor', 'doktoru', 'doktora'],
    answer: 'doktore',
    tip: 'The title takes the vocative too: doktor → doktore.',
  },

  // ── zenski ─────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: '____, hvala na ručku!',
    en: 'Grandma, thank you for lunch!',
    opts: ['Bako', 'Baka', 'Bake', 'Baki'],
    answer: 'Bako',
    tip: 'A feminine noun in -a takes -o.',
  },
  {
    mode: 'zenski',
    q: 'Oprostite, ____ Kovač!',
    en: 'Excuse me, Mrs Kovač!',
    opts: ['gospođo', 'gospođa', 'gospođe', 'gospođu'],
    answer: 'gospođo',
    tip: 'gospođa takes -o; the surname does not change.',
  },
  {
    mode: 'zenski',
    q: 'Dobro jutro, ____!',
    en: 'Good morning, teacher! (a woman)',
    opts: ['učiteljice', 'učiteljico', 'učiteljica', 'učiteljicu'],
    answer: 'učiteljice',
    tip: 'Nouns in -ica take -e.',
  },
  {
    mode: 'zenski',
    q: '____, pomozi mi!',
    en: 'Sister, help me!',
    opts: ['Sestro', 'Sestra', 'Sestre', 'Sestri'],
    answer: 'Sestro',
    tip: 'A feminine noun in -a takes -o.',
  },
  {
    mode: 'zenski',
    q: 'Draga ____, kako si?',
    en: 'Dear aunt, how are you?',
    opts: ['teto', 'teta', 'tete', 'teti'],
    answer: 'teto',
    tip: 'teta → teto; draga keeps its ordinary form.',
  },
  {
    mode: 'zenski',
    q: 'Hvala, ____!',
    en: 'Thank you, colleague! (a woman)',
    opts: ['kolegice', 'kolegico', 'kolegica', 'kolegicu'],
    answer: 'kolegice',
    tip: 'kolegica ends in -ica, so -ice.',
  },
  {
    mode: 'zenski',
    q: 'Koja je rečenica točna?',
    en: 'Dear Ana, thank you for the letter.',
    opts: [
      'Draga Ana, hvala na pismu.',
      'Drago Ana, hvala na pismu.',
      'Dragi Ana, hvala na pismu.',
      'Draga Anu, hvala na pismu.',
    ],
    answer: 'Draga Ana, hvala na pismu.',
    tip: 'The describing word keeps its ordinary feminine form: draga.',
  },
  {
    mode: 'zenski',
    q: '____ majko, sretan rođendan!',
    en: 'Dear mother, happy birthday!',
    opts: ['Draga', 'Drago', 'Dragi', 'Dragu'],
    answer: 'Draga',
    tip: 'Only the noun changes: draga majko.',
  },

  // ── mnozina ────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: '____, vrijeme je za spavanje!',
    en: 'Children, it is time for bed!',
    opts: ['Djeco', 'Djeca', 'Djece', 'Djeci'],
    answer: 'Djeco',
    tip: 'djeca behaves like a feminine noun in -a: djeco.',
  },
  {
    mode: 'mnozina',
    q: '____ i gospodo, dobro došli!',
    en: 'Ladies and gentlemen, welcome!',
    opts: ['Dame', 'Damo', 'Dama', 'Dami'],
    answer: 'Dame',
    tip: 'In the plural the vocative is the ordinary plural.',
  },
  {
    mode: 'mnozina',
    q: 'Dame i ____, dobro došli!',
    en: 'Ladies and gentlemen, welcome!',
    opts: ['gospodo', 'gospoda', 'gospode', 'gospodi'],
    answer: 'gospodo',
    tip: 'gospoda is a group word in -a: gospodo.',
  },
  {
    mode: 'mnozina',
    q: '____, idemo!',
    en: 'Guys, let us go!',
    opts: ['Dečki', 'Dečke', 'Dečkima', 'Dečka'],
    answer: 'Dečki',
    tip: 'The plural dečki is called as it is.',
  },
  {
    mode: 'mnozina',
    q: 'Dragi ____, hvala na pomoći!',
    en: 'Dear friends, thank you for your help!',
    opts: ['prijatelji', 'prijatelje', 'prijateljima', 'prijatelja'],
    answer: 'prijatelji',
    tip: 'The plural vocative is the ordinary plural.',
  },
  {
    mode: 'mnozina',
    q: '____, slušajte!',
    en: 'Brothers, listen!',
    opts: ['Braćo', 'Braća', 'Braće', 'Braći'],
    answer: 'Braćo',
    tip: 'braća behaves like a feminine noun in -a: braćo.',
  },
  {
    mode: 'mnozina',
    q: '____, učite za ispit!',
    en: 'Students, study for the exam!',
    opts: ['Studenti', 'Studentima', 'Studenata', 'Studentu'],
    answer: 'Studenti',
    tip: 'The plural vocative is the ordinary plural: studenti.',
  },
  {
    mode: 'mnozina',
    q: '____, pomozite mi!',
    en: 'People, help me!',
    opts: ['Ljudi', 'Ljude', 'Ljudima', 'Ljudma'],
    answer: 'Ljudi',
    tip: 'ljudi is called as it is.',
  },
];
