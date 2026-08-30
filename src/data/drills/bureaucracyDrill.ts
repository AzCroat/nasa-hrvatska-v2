// src/data/drills/bureaucracyDrill.ts
//
// B1 OFFICES & PAPERWORK — the drill for the `bureaucracy` lesson.
//
// The structure is a register, and it is the one register a learner meets in
// writing before they meet it in speech: official Croatian is IMPERSONAL.
// *Potrebno je priložiti presliku.* *Zahtjev se predaje na šalteru 3.* No
// subject, no "you", no one doing anything — which is precisely why a learner
// scanning a form for the word that tells them what to do cannot find it. The
// instruction is in the *se* and in *potrebno je*.
//
// The vocabulary has to be met as well, because none of it is guessable and all
// of it is load-bearing: the *OIB* is required for almost anything official,
// *osobna iskaznica* is the ID card, and *potvrda* covers both a certificate
// and a receipt.
//
// Three modes:
//   dokumenti — the papers you will be asked for
//   salter    — asking for what you need at the counter
//   sluzbeni  — reading the impersonal wording

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const BUREAUCRACY_MODE_LABELS: Record<string, string> = {
  dokumenti: '📄 Dokumenti',
  salter: '🏦 Na šalteru',
  sluzbeni: '🏛️ Službeni jezik',
};

export const BUREAUCRACY_DRILL_DATA: ModeDrillItem[] = [
  // ── dokumenti ─────────────────────────────────────────────────────────────
  {
    mode: 'dokumenti',
    q: 'Što je "osobna iskaznica"?',
    en: 'What is it?',
    opts: ['ID card', 'passport', 'driving licence', 'birth certificate'],
    answer: 'ID card',
    tip: 'Usually shortened to just osobna.',
  },
  {
    mode: 'dokumenti',
    q: 'Što je "OIB"?',
    en: 'What is the OIB?',
    opts: [
      'osobni identifikacijski broj',
      'osobna iskaznica',
      'obrazac za boravak',
      'potvrda o prebivalištu',
    ],
    answer: 'osobni identifikacijski broj',
    tip: 'The personal identification number, and almost nothing official happens without it.',
  },
  {
    mode: 'dokumenti',
    q: 'Što je "putovnica"?',
    en: 'What is putovnica?',
    opts: ['passport', 'travel ticket', 'visa', 'boarding pass'],
    answer: 'passport',
    tip: 'From putovati. Not pasoš.',
  },
  {
    mode: 'dokumenti',
    q: 'Što je "boravišna dozvola"?',
    en: 'What is it?',
    opts: ['residence permit', 'work permit', 'parking permit', 'building permit'],
    answer: 'residence permit',
    tip: 'From boraviti, to stay.',
  },
  {
    mode: 'dokumenti',
    q: 'Što je "rodni list"?',
    en: 'What is rodni list?',
    opts: ['birth certificate', 'family record', 'ancestry chart', 'medical record'],
    answer: 'birth certificate',
    tip: 'Issued by the matični ured, the registry office.',
  },
  {
    mode: 'dokumenti',
    q: 'Što znači "potvrda"?',
    en: 'What is a potvrda?',
    opts: ['potvrda ili priznanica', 'zahtjev', 'obrazac', 'ugovor'],
    answer: 'potvrda ili priznanica',
    tip: 'It covers both a certificate and a receipt — context decides.',
  },
  {
    mode: 'dokumenti',
    q: 'Trebam ____ o prebivalištu. (potvrda)',
    en: 'I need a proof of residence.',
    opts: ['potvrdu', 'potvrda', 'potvrde', 'potvrdom'],
    answer: 'potvrdu',
    tip: 'Accusative after trebati.',
  },
  {
    mode: 'dokumenti',
    q: 'Što je "pečat"?',
    en: 'What is a pečat?',
    opts: ['stamp', 'signature', 'seal of an envelope', 'form'],
    answer: 'stamp',
    tip: 'The official stamp, and it still decides whether a document counts.',
  },

  // ── salter ────────────────────────────────────────────────────────────────
  {
    mode: 'salter',
    q: 'Što je "šalter"?',
    en: 'What is a šalter?',
    opts: ['counter, service window', 'switch', 'queue', 'waiting room'],
    answer: 'counter, service window',
    tip: 'And the red is the queue in front of it.',
  },
  {
    mode: 'salter',
    q: 'Trebam podići ____. (novac)',
    en: 'I need to withdraw money.',
    opts: ['novac', 'novca', 'novcu', 'novcem'],
    answer: 'novac',
    tip: 'Accusative after podići.',
  },
  {
    mode: 'salter',
    q: 'Htio bih otvoriti ____. (račun)',
    en: 'I would like to open an account.',
    opts: ['račun', 'računa', 'računu', 'računom'],
    answer: 'račun',
    tip: 'Račun does triple duty: an account, a bill, and a calculation.',
  },
  {
    mode: 'salter',
    q: 'Koje dokumente ____? (I need)',
    en: 'Which documents do I need?',
    opts: ['trebam', 'trebaju', 'treba', 'trebati'],
    answer: 'trebam',
    tip: 'Koje dokumente trebam? — the question to ask before you queue.',
  },
  {
    mode: 'salter',
    q: 'Trebam li ____ obrazac?',
    en: 'Do I need to fill in a form?',
    opts: ['ispuniti', 'ispunim', 'ispunjavati', 'ispunjen'],
    answer: 'ispuniti',
    tip: 'The infinitive after trebati li.',
  },
  {
    mode: 'salter',
    q: 'Gdje se to ____?',
    en: 'Where do I hand this in?',
    opts: ['predaje', 'predajem', 'predati', 'predao'],
    answer: 'predaje',
    tip: 'Gdje se to predaje? — the impersonal se, and you will hear it back.',
  },
  {
    mode: 'salter',
    q: 'Uzmite ____ i pričekajte. (broj)',
    en: 'Take a number and wait.',
    opts: ['broj', 'broja', 'broju', 'brojem'],
    answer: 'broj',
    tip: 'Accusative — and this is what you will be told first.',
  },
  {
    mode: 'salter',
    q: 'Što je "matični ured"?',
    en: 'What is the matični ured?',
    opts: ['registry office', 'tax office', 'town hall', 'head office'],
    answer: 'registry office',
    tip: 'Births, marriages, deaths.',
  },

  // ── sluzbeni ──────────────────────────────────────────────────────────────
  {
    mode: 'sluzbeni',
    q: '____ je priložiti presliku osobne.',
    en: 'It is necessary to attach a copy of the ID.',
    opts: ['Potrebno', 'Potreban', 'Potrebna', 'Potrebni'],
    answer: 'Potrebno',
    tip: 'Neuter — there is no subject for it to agree with.',
  },
  {
    mode: 'sluzbeni',
    q: 'Tko je subjekt u "Potrebno je priložiti presliku"?',
    en: 'Who is the subject?',
    opts: ['nema ga', 'vi', 'ured', 'preslika'],
    answer: 'nema ga',
    tip: 'Nobody. That is the register, and it is why the instruction is hard to spot.',
  },
  {
    mode: 'sluzbeni',
    q: 'Zahtjev ____ predaje na šalteru 3.',
    en: 'The application is handed in at counter 3.',
    opts: ['se', 'je', 'će', 'su'],
    answer: 'se',
    tip: 'The impersonal se does the work of the English passive.',
  },
  {
    mode: 'sluzbeni',
    q: 'Što znači "preslika"?',
    en: 'What is a preslika?',
    opts: ['photocopy', 'original', 'translation', 'summary'],
    answer: 'photocopy',
    tip: 'You will be asked for one of these at every counter.',
  },
  {
    mode: 'sluzbeni',
    q: 'Što znači "podnijeti zahtjev"?',
    en: 'What does it mean?',
    opts: ['to submit an application', 'to withdraw a claim', 'to sign a form', 'to pay a fee'],
    answer: 'to submit an application',
    tip: 'podnijeti zahtjev — the phrase every official notice uses.',
  },
  {
    mode: 'sluzbeni',
    q: 'Molba ____ podnosi u pisanom obliku.',
    en: 'The request is submitted in writing.',
    opts: ['se', 'je', 'ju', 'ih'],
    answer: 'se',
    tip: 'Same construction again — you will meet it on every form.',
  },
  {
    mode: 'sluzbeni',
    q: 'Što znači "rok"?',
    en: 'What is a rok?',
    opts: ['deadline', 'queue', 'fee', 'appointment'],
    answer: 'deadline',
    tip: 'u roku od 30 dana — within 30 days.',
  },
  {
    mode: 'sluzbeni',
    q: 'U roku ____ 30 dana.',
    en: 'within 30 days',
    opts: ['od', 'do', 'za', 'na'],
    answer: 'od',
    tip: 'u roku od plus the genitive — a fixed formula.',
  },
];
