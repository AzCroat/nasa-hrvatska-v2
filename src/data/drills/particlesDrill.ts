// src/data/drills/particlesDrill.ts
//
// C1 DISCOURSE PARTICLES — the drill for the `discourse-particles` lesson.
//
// This one closes a gap the codebase has had on record for a while. The C1
// `discourse` drill covers CONNECTORS — *stoga*, *međutim*, *unatoč tome* —
// while this lesson teaches ATTITUDE particles: *pa*, *ma*, *baš*, *valjda*,
// *eto*. Adjacent, and not the same thing, so the lesson could never honestly
// be coupled to that drill and was left unmapped instead.
//
// The particles are what make an otherwise correct sentence sound like a person
// said it. Two are worth the drill on their own:
//
//   *VALJDA IS NOT VJEROJATNO.* *Vjerojatno će doći* is an estimate — the
//   speaker has weighed it. *Valjda će doći* is a shrug. A learner who treats
//   them as synonyms sounds either falsely confident or oddly indifferent.
//
//   *PA DOES THREE JOBS.* It buys a moment (*Pa, ovisi…*), it registers mild
//   objection (*Pa rekao sam ti!*), and it links (*Pa što onda?*). Position and
//   tone decide, and nothing else marks which.
//
// Three modes:
//   znacenja — what each particle actually does
//   valjda   — the attitude particles against the estimate words
//   pa       — pa, baš and the jobs they do by position

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PARTICLES_MODE_LABELS: Record<string, string> = {
  znacenja: '🎚️ Što koja čestica radi',
  valjda: '🤷 Valjda ili vjerojatno',
  pa: '💬 Pa i baš',
};

export const PARTICLES_DRILL_DATA: ModeDrillItem[] = [
  // ── znacenja ──────────────────────────────────────────────────────────────
  {
    mode: 'znacenja',
    q: 'Što izriče "valjda"?',
    en: 'What does valjda express?',
    opts: ['nesigurnost, sliježe se ramenima', 'sigurnost', 'procjenu', 'ljutnju'],
    answer: 'nesigurnost, sliježe se ramenima',
    tip: 'A shrug. The speaker has not weighed it and is not pretending to.',
  },
  {
    mode: 'znacenja',
    q: 'Što izriče "eto"?',
    en: 'What does eto express?',
    opts: ['pomirenost ili predstavljanje', 'sumnju', 'naglasak', 'objašnjenje'],
    answer: 'pomirenost ili predstavljanje',
    tip: 'There you go — resignation, or handing something over.',
  },
  {
    mode: 'znacenja',
    q: 'Što najavljuje "naime"?',
    en: 'What does naime signal?',
    opts: ['objašnjenje onoga prije', 'suprotnost', 'zaključak', 'dodatak'],
    answer: 'objašnjenje onoga prije',
    tip: 'Namely — it unpacks the sentence before it.',
  },
  {
    mode: 'znacenja',
    q: 'Što radi "uostalom"?',
    en: 'What does uostalom do?',
    opts: ['donosi presudan argument', 'ograđuje se', 'pita', 'mijenja temu'],
    answer: 'donosi presudan argument',
    tip: 'Besides, after all — it clinches rather than adds.',
  },
  {
    mode: 'znacenja',
    q: 'Što radi "zapravo"?',
    en: 'What does zapravo do?',
    opts: ['ispravlja ono rečeno', 'pojačava', 'zaključuje', 'oklijeva'],
    answer: 'ispravlja ono rečeno',
    tip: 'Actually — a correction, gently made.',
  },
  {
    mode: 'znacenja',
    q: 'Što radi "ma" na početku?',
    en: 'What does sentence-initial ma do?',
    opts: ['odbacuje prethodno', 'pojačava', 'objašnjava', 'pita'],
    answer: 'odbacuje prethodno',
    tip: 'Dismissal, usually affectionate: Ma daj!',
  },
  {
    mode: 'znacenja',
    q: 'Zašto čestice nisu ukras?',
    en: 'Why are particles not decoration?',
    opts: [
      'nose stav govornika',
      'popunjavaju stanku',
      'produljuju rečenicu',
      'traži ih gramatika',
    ],
    answer: 'nose stav govornika',
    tip: 'They carry the attitude. Strip them and the sentence is correct and flat.',
  },
  {
    mode: 'znacenja',
    q: 'Koja čestica NE izriče stav nego vezu?',
    en: 'Which links rather than colours?',
    opts: ['naime', 'ma', 'valjda', 'eto'],
    answer: 'naime',
    tip: 'naime and uostalom structure the argument; the rest colour it.',
  },

  // ── valjda ────────────────────────────────────────────────────────────────
  {
    mode: 'valjda',
    q: 'Procijenili ste izglede i mislite da hoće. Kažete: ____ će doći.',
    en: 'You have weighed it and think so.',
    opts: ['Vjerojatno', 'Valjda', 'Možda', 'Eto'],
    answer: 'Vjerojatno',
    tip: 'Vjerojatno is a real estimate; valjda is a shrug.',
  },
  {
    mode: 'valjda',
    q: 'Nemate pojma, ali pretpostavljate. Kažete: ____ će doći.',
    en: 'You have no idea but assume so.',
    opts: ['Valjda', 'Vjerojatno', 'Sigurno', 'Nedvojbeno'],
    answer: 'Valjda',
    tip: 'Valjda — and it tells the listener you have not thought about it.',
  },
  {
    mode: 'valjda',
    q: 'Koja je razlika između njih?',
    en: 'What is the difference?',
    opts: ['je li govornik procijenio', 'stupanj uljudnosti', 'vrijeme radnje', 'registar'],
    answer: 'je li govornik procijenio',
    tip: 'One reports a judgement; the other reports the absence of one.',
  },
  {
    mode: 'valjda',
    q: 'Što zvuči kad se "valjda" rabi za pravu procjenu?',
    en: 'Using valjda for a real estimate sounds:',
    opts: ['ravnodušno', 'samouvjereno', 'uljudno', 'formalno'],
    answer: 'ravnodušno',
    tip: 'Indifferent — which is rarely what the speaker meant.',
  },
  {
    mode: 'valjda',
    q: '"Valjda znaš da…" — kakav je ton?',
    en: 'What tone is that?',
    opts: ['blagi prijekor', 'iskrena sumnja', 'uljudnost', 'iznenađenje'],
    answer: 'blagi prijekor',
    tip: 'Surely you know — mild reproach rather than a question.',
  },
  {
    mode: 'valjda',
    q: 'Koja riječ izriče najveću sigurnost?',
    en: 'Which is most certain?',
    opts: ['nedvojbeno', 'vjerojatno', 'valjda', 'možda'],
    answer: 'nedvojbeno',
    tip: 'nedvojbeno > sigurno > vjerojatno > valjda ≈ možda.',
  },
  {
    mode: 'valjda',
    q: 'Kako se "valjda" ponaša u pisanom formalnom tekstu?',
    en: 'In formal writing, valjda is:',
    opts: ['neprikladno', 'obavezno', 'neutralno', 'formalnije'],
    answer: 'neprikladno',
    tip: 'It is a spoken shrug. Formal prose wants vjerojatno or an explicit hedge.',
  },
  {
    mode: 'valjda',
    q: '____ je tako, ali nisam provjerio.',
    en: 'I suppose so, but I have not checked.',
    opts: ['Valjda', 'Sigurno', 'Nedvojbeno', 'Naravno'],
    answer: 'Valjda',
    tip: 'And the second clause says exactly why valjda was the right word.',
  },

  // ── pa ────────────────────────────────────────────────────────────────────
  {
    mode: 'pa',
    q: '"Pa rekao sam ti!" — što izriče "pa"?',
    en: 'What does pa express here?',
    opts: ['blagi prigovor', 'oklijevanje', 'objašnjenje', 'ništa'],
    answer: 'blagi prigovor',
    tip: 'Objection: but I TOLD you. A different job from the hesitating pa.',
  },
  {
    mode: 'pa',
    q: '"Pa, ovisi…" — što izriče "pa"?',
    en: 'And here?',
    opts: ['kupuje trenutak', 'prigovara', 'zaključuje', 'pita'],
    answer: 'kupuje trenutak',
    tip: 'The same word, buying a beat before an answer.',
  },
  {
    mode: 'pa',
    q: 'Koliko poslova "pa" obavlja?',
    en: 'How many jobs does pa do?',
    opts: ['tri', 'jedan', 'dva', 'pet'],
    answer: 'tri',
    tip: 'Hesitating, objecting, and linking — position and tone decide.',
  },
  {
    mode: 'pa',
    q: 'Što razlikuje ta značenja?',
    en: 'What distinguishes them?',
    opts: ['položaj i ton', 'padež', 'vrijeme', 'rod'],
    answer: 'položaj i ton',
    tip: 'Nothing in the grammar marks which — which is why it needs hearing.',
  },
  {
    mode: 'pa',
    q: '"____ to sam mislio." (exactly)',
    en: 'That is exactly what I meant.',
    opts: ['Baš', 'Pa', 'Ma', 'Eto'],
    answer: 'Baš',
    tip: 'Baš intensifies — precisely, exactly.',
  },
  {
    mode: 'pa',
    q: '"Baš ti hvala." — s pravim tonom to znači ____.',
    en: 'With the right tone it means:',
    opts: ['suprotno od zahvale', 'iskrenu zahvalu', 'pitanje', 'ispriku'],
    answer: 'suprotno od zahvale',
    tip: 'The same intensifier turns sardonic. Baš cuts both ways.',
  },
  {
    mode: 'pa',
    q: '"Pa što onda?" — koji je posao "pa" ovdje?',
    en: 'Which job is it here?',
    opts: ['povezuje', 'oklijeva', 'prigovara', 'pojačava'],
    answer: 'povezuje',
    tip: 'The linking pa: so what then?',
  },
  {
    mode: 'pa',
    q: 'Zašto je "baš" korisniji od "vrlo"?',
    en: 'Why reach for baš?',
    opts: ['pojačava i nosi ton', 'kraće je', 'formalnije je', 'nije korisnije'],
    answer: 'pojačava i nosi ton',
    tip: 'Vrlo only measures; baš measures and takes an attitude.',
  },
];
