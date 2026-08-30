// src/data/drills/proofreadingDrill.ts
//
// C1 PROOFREADING YOUR OWN CROATIAN — the drill for the `proofreading-editing`
// lesson.
//
// The method is the content. A C1 learner can find almost all of their own
// errors, and does not, because they read the whole text once looking for
// "mistakes" in general. The lesson's answer is PASSES: agreement, then
// government, then spelling, then commas, then register — one thing at a time,
// each pass fast because it ignores everything else.
//
// Two specific checks earn their own drill. The comma rule learners get
// backwards: *Znam da dolaziš* has NO comma, because Croatian does not put one
// before an object clause the way English sometimes does before "that". And
// *s* / *sa*, which is decided by the SOUND THAT FOLLOWS — *sa sestrom*, *s
// bratom* — not by the noun.
//
// The ije/je alternation is not a spelling exception either: it follows the jat
// rule the B2 language-history lesson taught, so *vrijeme → vremena* is
// predictable rather than memorised.
//
// Three modes:
//   prolazi  — checking in passes, in the right order
//   zarezi   — the comma rule, and s against sa
//   pravopis — ije/je, č/ć, and the spacing of ne

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PROOFREADING_MODE_LABELS: Record<string, string> = {
  prolazi: '🔁 Prolazi',
  zarezi: '✂️ Zarezi i s/sa',
  pravopis: '✏️ Pravopis',
};

export const PROOFREADING_DRILL_DATA: ModeDrillItem[] = [
  // ── prolazi ───────────────────────────────────────────────────────────────
  {
    mode: 'prolazi',
    q: 'Kojim se redom provjerava tekst?',
    en: 'In what order?',
    opts: [
      'sročnost, rekcija, pravopis, zarezi',
      'zarezi, pravopis, sročnost, rekcija',
      'sve odjednom',
      'od kraja prema početku',
    ],
    answer: 'sročnost, rekcija, pravopis, zarezi',
    tip: 'One thing at a time, and each pass is fast because it ignores the rest.',
  },
  {
    mode: 'prolazi',
    q: 'Zašto ne sve odjednom?',
    en: 'Why not all at once?',
    opts: ['pozornost se rasprši i prelijeće se', 'sporije je', 'nema razlike', 'tako je teže'],
    answer: 'pozornost se rasprši i prelijeće se',
    tip: 'Looking for everything is how you find nothing.',
  },
  {
    mode: 'prolazi',
    q: 'Zašto se tekst čita naglas?',
    en: 'Why read it aloud?',
    opts: ['uho hvata neslaganje', 'sporije je', 'lakše se pamti', 'radi ritma'],
    answer: 'uho hvata neslaganje',
    tip: 'Agreement errors are audible long before they are visible.',
  },
  {
    mode: 'prolazi',
    q: 'Zašto se čita unatrag, rečenicu po rečenicu?',
    en: 'Why read it backwards?',
    opts: ['sprječava prelijetanje po smislu', 'brže je', 'otkriva zareze', 'radi provjere reda'],
    answer: 'sprječava prelijetanje po smislu',
    tip: 'Out of order, the sense cannot carry you past the error.',
  },
  {
    mode: 'prolazi',
    q: 'Što je "lektor"?',
    en: 'What is a lektor?',
    opts: ['jezični urednik teksta', 'sveučilišni predavač', 'čitatelj', 'prevoditelj'],
    answer: 'jezični urednik teksta',
    tip: 'Croatian publishing employs one — which is why the standard is visible.',
  },
  {
    mode: 'prolazi',
    q: 'Koji se prolaz obavlja PRVI?',
    en: 'Which pass comes first?',
    opts: ['sročnost', 'zarezi', 'registar', 'pravopis'],
    answer: 'sročnost',
    tip: 'Agreement is the error a reader notices first, so fix it first.',
  },
  {
    mode: 'prolazi',
    q: 'Što se provjerava u prolazu za rekciju?',
    en: 'What does the government pass check?',
    opts: [
      'traži li glagol ili prijedlog pravi padež',
      'red riječi',
      'duljinu rečenice',
      'ponavljanja',
    ],
    answer: 'traži li glagol ili prijedlog pravi padež',
    tip: 'unatoč kiši, not kiše — the case a word demands.',
  },
  {
    mode: 'prolazi',
    q: 'Unatoč ____ , krenuli smo. (kiša)',
    en: 'Despite the rain, we set off.',
    opts: ['kiši', 'kiše', 'kišu', 'kišom'],
    answer: 'kiši',
    tip: 'unatoč and usprkos take the DATIVE. A very common miss.',
  },

  // ── zarezi ────────────────────────────────────────────────────────────────
  {
    mode: 'zarezi',
    q: 'Znam ____ dolaziš. (zarez?)',
    en: 'I know you are coming.',
    opts: ['da', ', da', 'da,', ' , da,'],
    answer: 'da',
    tip: 'NO comma before da in an object clause. This is the rule learners invert.',
  },
  {
    mode: 'zarezi',
    q: 'Zašto učenici stavljaju zarez ondje?',
    en: 'Why do learners add it?',
    opts: ['prenose engleski osjećaj', 'tako uči škola', 'zvuči bolje', 'nema razloga'],
    answer: 'prenose engleski osjećaj',
    tip: 'And the comma is not merely optional here — it is wrong.',
  },
  {
    mode: 'zarezi',
    q: 'Idem ____ sestrom.',
    en: 'I am going with my sister.',
    opts: ['sa', 's', 'so', 'su'],
    answer: 'sa',
    tip: 'sa before s, š, z, ž — and sestrom starts with s.',
  },
  {
    mode: 'zarezi',
    q: 'Idem ____ bratom.',
    en: 'I am going with my brother.',
    opts: ['s', 'sa', 'so', 'su'],
    answer: 's',
    tip: 'Plain s before anything else. The following SOUND decides.',
  },
  {
    mode: 'zarezi',
    q: 'Što odlučuje između s i sa?',
    en: 'What decides?',
    opts: ['glas koji slijedi', 'rod imenice', 'padež', 'broj'],
    answer: 'glas koji slijedi',
    tip: 'Pronounceability, not grammar.',
  },
  {
    mode: 'zarezi',
    q: 'Idem ____ psom.',
    en: 'I am going with the dog.',
    opts: ['sa', 's', 'so', 'sas'],
    answer: 'sa',
    tip: 'psom begins with a consonant cluster that needs the vowel.',
  },
  {
    mode: 'zarezi',
    q: 'Čovjek ____ je došao jučer bio je moj brat.',
    en: 'The man who came yesterday was my brother.',
    opts: [', koji', 'koji', 'koji,', 'kojeg'],
    answer: ', koji',
    tip: 'A relative clause DOES take a comma — unlike the da-clause.',
  },
  {
    mode: 'zarezi',
    q: 'Koja je razlika između tih dvaju slučajeva?',
    en: 'What separates them?',
    opts: [
      'objektna rečenica nema zarez, odnosna ima',
      'nema razlike',
      'duljina rečenice',
      'red riječi',
    ],
    answer: 'objektna rečenica nema zarez, odnosna ima',
    tip: 'Two rules, and learners apply the English instinct to both.',
  },

  // ── pravopis ──────────────────────────────────────────────────────────────
  {
    mode: 'pravopis',
    q: 'Genitiv od "vrijeme" je ____.',
    en: 'genitive of vrijeme',
    opts: ['vremena', 'vrijemena', 'vremene', 'vrijemenu'],
    answer: 'vremena',
    tip: 'The jat rule: the vowel shortens, so ije becomes e. Predictable.',
  },
  {
    mode: 'pravopis',
    q: 'Pridjev od "mlijeko" je ____.',
    en: 'adjective from mlijeko',
    opts: ['mliječni', 'mlijekni', 'mliekni', 'mlijećni'],
    answer: 'mliječni',
    tip: 'Same shortening: mlijeko → mliječni.',
  },
  {
    mode: 'pravopis',
    q: 'Je li ije/je nepravilnost?',
    en: 'Is it an irregularity?',
    opts: ['ne, slijedi pravilo jata', 'da', 'ovisi o riječi', 'ovisi o narječju'],
    answer: 'ne, slijedi pravilo jata',
    tip: 'Which turns a list to memorise into one alternation to know.',
  },
  {
    mode: 'pravopis',
    q: 'Koje je slovo u "voće"?',
    en: 'Which letter in voće?',
    opts: ['ć', 'č', 'c', 'tj'],
    answer: 'ć',
    tip: 'voće with ć; ručak with č. The pair is worth its own pass.',
  },
  {
    mode: 'pravopis',
    q: 'Kako se piše "I do not know"?',
    en: 'I do not know.',
    opts: ['ne znam', 'neznam', 'ne-znam', 'nezna m'],
    answer: 'ne znam',
    tip: 'ne is separate before a verb — but nemam, neću and nisam are written together.',
  },
  {
    mode: 'pravopis',
    q: 'Kako se piše "I do not have"?',
    en: 'I do not have.',
    opts: ['nemam', 'ne mam', 'ne imam', 'neimam'],
    answer: 'nemam',
    tip: 'The four exceptions: nemam, neću, nisam, nemoj.',
  },
  {
    mode: 'pravopis',
    q: 'Koji je infinitiv od "ručak"?',
    en: 'Which verb goes with ručak?',
    opts: ['ručati', 'rućati', 'ručiti', 'ručevati'],
    answer: 'ručati',
    tip: 'The č is kept throughout the family.',
  },
  {
    mode: 'pravopis',
    q: 'Što je posljednji prolaz?',
    en: 'What is the last pass?',
    opts: ['registar', 'sročnost', 'zarezi', 'rekcija'],
    answer: 'registar',
    tip: 'Once it is correct, ask whether it is correct FOR THIS reader.',
  },
];
