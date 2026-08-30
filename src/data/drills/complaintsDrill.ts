// src/data/drills/complaintsDrill.ts
//
// B1 WHEN SOMETHING GOES WRONG — the drill for the `complaints-problems` lesson.
//
// The structure is a habit of mind with grammar attached: Croatian reports the
// FAULT, not the culprit. *Ne radi klima* — the air conditioning does not work.
// *Pokvario se* — it has broken, by itself. English reaches for "you sent me
// the wrong thing" and Croatian for *došlo je do greške*, a mistake has
// occurred. The learner who translates directly is not merely being blunt; they
// are naming a person where the language names a state.
//
// The second half is the conditional, which is what keeps a complaint firm
// without making it rude: *htio bih*, *mogli biste li*. A bare *hoću* or
// *dajte* turns a request into an order at exactly the wrong moment.
//
// Three modes:
//   kvar      — reporting the fault rather than the person
//   uljudnost — the conditional, and the V-form throughout
//   rjesenje  — asking for it to be fixed, and closing

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const COMPLAINTS_MODE_LABELS: Record<string, string> = {
  kvar: '🔧 Što ne radi',
  uljudnost: '🎩 Uljudan ton',
  rjesenje: '✅ Rješenje',
};

export const COMPLAINTS_DRILL_DATA: ModeDrillItem[] = [
  // ── kvar ──────────────────────────────────────────────────────────────────
  {
    mode: 'kvar',
    q: 'Klima ne radi. Kako to Hrvat kaže?',
    en: 'The air conditioning is not working.',
    opts: [
      'Ne radi klima.',
      'Vi ste pokvarili klimu.',
      'Klima je vaša krivnja.',
      'Krivi ste za klimu.',
    ],
    answer: 'Ne radi klima.',
    tip: 'The fault is reported; nobody is named. That is the whole move.',
  },
  {
    mode: 'kvar',
    q: 'Što znači "Pokvario se"?',
    en: 'What does it mean?',
    opts: ['It has broken.', 'You broke it.', 'I broke it.', 'It is old.'],
    answer: 'It has broken.',
    tip: 'The reflexive lets the thing break by itself — no agent anywhere.',
  },
  {
    mode: 'kvar',
    q: 'Nema ____ vode. (topao)',
    en: 'There is no hot water.',
    opts: ['tople', 'topla', 'toplu', 'toplom'],
    answer: 'tople',
    tip: 'Nema takes the GENITIVE, and the adjective follows: nema tople vode.',
  },
  {
    mode: 'kvar',
    q: 'Mislim da je došlo do ____. (greška)',
    en: 'I think there has been a mistake.',
    opts: ['greške', 'grešku', 'greška', 'greškom'],
    answer: 'greške',
    tip: 'doći do plus the genitive — and it names no one at all.',
  },
  {
    mode: 'kvar',
    q: 'Zašto se bira "došlo je do greške", a ne "pogriješili ste"?',
    en: 'Why prefer the impersonal?',
    opts: ['ne optužuje osobu', 'kraće je', 'formalnije je', 'gramatika to traži'],
    answer: 'ne optužuje osobu',
    tip: 'It leaves the other person room to fix it without losing face.',
  },
  {
    mode: 'kvar',
    q: 'Ovo nije ____ što sam naručio.',
    en: 'This is not what I ordered.',
    opts: ['ono', 'to', 'onaj', 'koje'],
    answer: 'ono',
    tip: 'ono što — "the thing that". A B1 staple well beyond complaints.',
  },
  {
    mode: 'kvar',
    q: 'Račun nije ____.',
    en: 'The bill is not correct.',
    opts: ['točan', 'točno', 'točna', 'točni'],
    answer: 'točan',
    tip: 'Račun is masculine, and the short form follows nije.',
  },
  {
    mode: 'kvar',
    q: 'Grijanje ____ radi.',
    en: 'The heating is not working.',
    opts: ['ne', 'nije', 'niti', 'nema'],
    answer: 'ne',
    tip: 'ne is a separate word before the verb: ne radi.',
  },

  // ── uljudnost ─────────────────────────────────────────────────────────────
  {
    mode: 'uljudnost',
    q: '____ bih razgovarati s voditeljem.',
    en: 'I would like to speak to the manager.',
    opts: ['Htio', 'Hoću', 'Htjeti', 'Htjela bih ja'],
    answer: 'Htio',
    tip: 'The conditional htio bih is firm and polite at once.',
  },
  {
    mode: 'uljudnost',
    q: 'Kako žena kaže "I would like"?',
    en: 'A woman says:',
    opts: ['Htjela bih', 'Htio bih', 'Htjeli bismo', 'Htio bi'],
    answer: 'Htjela bih',
    tip: 'The participle agrees with the speaker.',
  },
  {
    mode: 'uljudnost',
    q: 'Zašto ne "Hoću razgovarati s voditeljem"?',
    en: 'Why not the plain present?',
    opts: ['zvuči kao zapovijed', 'nije hrvatski', 'predugo je', 'nije razlika'],
    answer: 'zvuči kao zapovijed',
    tip: 'Hoću states a demand. The conditional makes it a request.',
  },
  {
    mode: 'uljudnost',
    q: '____ li mi pomoći s ovim?',
    en: 'Could you help me with this?',
    opts: ['Možete', 'Možeš', 'Mogu', 'Može'],
    answer: 'Možete',
    tip: 'A stranger behind a counter gets Vi throughout.',
  },
  {
    mode: 'uljudnost',
    q: 'Kako se otvara pritužba?',
    en: 'Opening a complaint:',
    opts: ['Oprostite, imam problem…', 'Slušajte…', 'Ovo je katastrofa.', 'Zovite šefa.'],
    answer: 'Oprostite, imam problem…',
    tip: 'Oprostite first, every time.',
  },
  {
    mode: 'uljudnost',
    q: 'Najmekši oblik molbe je ____.',
    en: 'The softest request:',
    opts: ['Mogli biste li…?', 'Možete li…?', 'Možete…', 'Morate…'],
    answer: 'Mogli biste li…?',
    tip: 'Conditional plus question — as indirect as Croatian gets.',
  },
  {
    mode: 'uljudnost',
    q: 'Pomoći ____ s ovim. (meni)',
    en: 'help me with this',
    opts: ['mi', 'me', 'mene', 'moj'],
    answer: 'mi',
    tip: 'Pomoći takes the DATIVE — pomoći mi, not pomoći me.',
  },
  {
    mode: 'uljudnost',
    q: 'Kako se pritužba zatvara?',
    en: 'Closing:',
    opts: ['Hvala vam na razumijevanju.', 'Nadam se da hoćete.', 'To je sve.', 'Vidimo se.'],
    answer: 'Hvala vam na razumijevanju.',
    tip: 'Hvala NA plus the locative — the same government as čestitam na.',
  },

  // ── rjesenje ──────────────────────────────────────────────────────────────
  {
    mode: 'rjesenje',
    q: 'Možete li to ____?',
    en: 'Could you check that?',
    opts: ['provjeriti', 'provjerite', 'provjeravam', 'provjera'],
    answer: 'provjeriti',
    tip: 'The infinitive follows a modal directly.',
  },
  {
    mode: 'rjesenje',
    q: 'Mogu li dobiti drugu ____? (soba)',
    en: 'Could I have a different room?',
    opts: ['sobu', 'soba', 'sobe', 'sobom'],
    answer: 'sobu',
    tip: 'Accusative after dobiti.',
  },
  {
    mode: 'rjesenje',
    q: 'Kada će to biti ____?',
    en: 'When will it be sorted out?',
    opts: ['riješeno', 'riješen', 'riješena', 'rješenje'],
    answer: 'riješeno',
    tip: 'A neuter passive participle, because "to" is neuter.',
  },
  {
    mode: 'rjesenje',
    q: 'Htio bih uložiti ____. (žalba)',
    en: 'I would like to make a complaint.',
    opts: ['žalbu', 'žalba', 'žalbe', 'žalbom'],
    answer: 'žalbu',
    tip: 'uložiti žalbu — the fixed formal phrase.',
  },
  {
    mode: 'rjesenje',
    q: 'Što znači "reklamacija"?',
    en: 'What is a reklamacija?',
    opts: ['službena pritužba na robu', 'reklama', 'račun', 'jamstvo'],
    answer: 'službena pritužba na robu',
    tip: 'A formal complaint about goods — a false friend for "advertisement".',
  },
  {
    mode: 'rjesenje',
    q: 'Tražim ____ novca.',
    en: 'I am asking for a refund.',
    opts: ['povrat', 'povratak', 'povratnu', 'vraćanje'],
    answer: 'povrat',
    tip: 'povrat novca. Povratak is a return journey.',
  },
  {
    mode: 'rjesenje',
    q: 'Imam ____ na ovaj proizvod.',
    en: 'I have a warranty on this product.',
    opts: ['jamstvo', 'jamstva', 'jamstvu', 'jamstvom'],
    answer: 'jamstvo',
    tip: 'jamstvo — accusative after imati, and neuter so it looks unchanged.',
  },
  {
    mode: 'rjesenje',
    q: 'Kako se pita koliko će trajati?',
    en: 'How long will it take?',
    opts: ['Koliko će to trajati?', 'Koliko traje to?', 'Kada traje?', 'Koliko dugo je?'],
    answer: 'Koliko će to trajati?',
    tip: 'The future clitic će sits in second position.',
  },
];
