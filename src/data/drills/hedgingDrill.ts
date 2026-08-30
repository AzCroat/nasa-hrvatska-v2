// src/data/drills/hedgingDrill.ts
//
// B2 HEDGING & PRECISION — the drill for the `hedging-precision` lesson.
//
// The lesson's own line is the whole point: stating everything with equal
// certainty is what makes a speaker sound naive. A B2 learner has the grammar
// to say anything and no way yet to say how far they mean it, so every claim
// comes out at maximum confidence.
//
// Croatian hedges along two independent axes, and they are worth keeping apart.
// HOW SURE you are — *sigurno*, *vjerojatno*, *čini se da*, *možda* — and HOW
// MUCH you are claiming — *uglavnom*, *u pravilu*, *donekle*, *u načelu*. The
// second is the one learners never reach for, and it is what turns a
// contradictable absolute into a defensible statement.
//
// The third move is that the CONDITIONAL hedges by itself, with no hedge word
// at all: *rekao bih da* is *mislim da* with the confidence turned down, and it
// costs one verb form rather than an extra clause.
//
// Three modes:
//   sigurnost — the confidence scale
//   opseg     — limiting the claim rather than the confidence
//   pripisati — attributing it to somebody else

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const HEDGING_MODE_LABELS: Record<string, string> = {
  sigurnost: '📊 Koliko ste sigurni',
  opseg: '📐 Koliko tvrdite',
  pripisati: '🔗 Čija je tvrdnja',
};

export const HEDGING_DRILL_DATA: ModeDrillItem[] = [
  // ── sigurnost ─────────────────────────────────────────────────────────────
  {
    mode: 'sigurnost',
    q: 'Poredajte po sigurnosti: koji je NAJsigurniji?',
    en: 'Which is most certain?',
    opts: ['Sigurno je…', 'Vjerojatno…', 'Čini se da…', 'Možda…'],
    answer: 'Sigurno je…',
    tip: 'sigurno > vjerojatno > čini se > možda.',
  },
  {
    mode: 'sigurnost',
    q: 'Koji je NAJmanje siguran?',
    en: 'Which is least certain?',
    opts: ['Možda…', 'Sigurno…', 'Vjerojatno…', 'Bez sumnje…'],
    answer: 'Možda…',
    tip: 'Možda leaves the question genuinely open.',
  },
  {
    mode: 'sigurnost',
    q: '____ bih da je to točno. (kondicional)',
    en: 'I would say that is right.',
    opts: ['Rekao', 'Rekavši', 'Reći', 'Rekli'],
    answer: 'Rekao',
    tip: 'Rekao bih da… — the conditional hedges with no hedge word at all.',
  },
  {
    mode: 'sigurnost',
    q: 'Kako kondicional ublažava tvrdnju?',
    en: 'How does the conditional hedge?',
    opts: [
      'nudi stav umjesto činjenice',
      'skraćuje rečenicu',
      'mijenja vrijeme',
      'dodaje uljudnost',
    ],
    answer: 'nudi stav umjesto činjenice',
    tip: 'It offers the claim rather than asserting it — and costs one verb form.',
  },
  {
    mode: 'sigurnost',
    q: 'Čini ____ se da griješimo.',
    en: 'It seems to me that we are wrong.',
    opts: ['mi', 'me', 'mene', 'moj'],
    answer: 'mi',
    tip: 'Dative — another dative-of-experience frame.',
  },
  {
    mode: 'sigurnost',
    q: 'Kako žena kaže "I would say"?',
    en: 'A woman says:',
    opts: ['Rekla bih', 'Rekao bih', 'Rekli bismo', 'Rekao bi'],
    answer: 'Rekla bih',
    tip: 'The participle agrees with the speaker, as always.',
  },
  {
    mode: 'sigurnost',
    q: 'Zašto sve izrečeno s istom sigurnošću zvuči naivno?',
    en: 'Why does uniform certainty sound naive?',
    opts: [
      'govornik ne razlikuje čvrsto od pretpostavke',
      'predugo je',
      'prekratko je',
      'nije naivno',
    ],
    answer: 'govornik ne razlikuje čvrsto od pretpostavke',
    tip: 'And once one over-claim is caught, the rest stop being believed.',
  },
  {
    mode: 'sigurnost',
    q: 'Nisam siguran, ____ mislim da je tako.',
    en: 'I am not sure, but I think so.',
    opts: ['ali', 'nego', 'već', 'da'],
    answer: 'ali',
    tip: 'ali — nego would need a negative claim before it.',
  },

  // ── opseg ─────────────────────────────────────────────────────────────────
  {
    mode: 'opseg',
    q: '____ se slažem s tim. (mostly)',
    en: 'I mostly agree with that.',
    opts: ['Uglavnom', 'Sigurno', 'Potpuno', 'Nikako'],
    answer: 'Uglavnom',
    tip: 'Uglavnom is the one you will use most — it limits the CLAIM, not the confidence.',
  },
  {
    mode: 'opseg',
    q: 'Što ograničava "u pravilu"?',
    en: 'What does u pravilu limit?',
    opts: ['opseg tvrdnje', 'sigurnost', 'vrijeme', 'osobu'],
    answer: 'opseg tvrdnje',
    tip: 'As a rule — it allows exceptions without admitting doubt.',
  },
  {
    mode: 'opseg',
    q: 'Što znači "donekle"?',
    en: 'What does donekle mean?',
    opts: ['to some extent', 'until now', 'nearby', 'apparently'],
    answer: 'to some extent',
    tip: 'donekle se slažem — I agree up to a point.',
  },
  {
    mode: 'opseg',
    q: 'Što znači "u načelu"?',
    en: 'What does u načelu mean?',
    opts: ['in principle', 'in general terms', 'at the beginning', 'in practice'],
    answer: 'in principle',
    tip: 'And it usually announces a "but" — slažem se u načelu, ali…',
  },
  {
    mode: 'opseg',
    q: 'Koje su DVIJE osi ograđivanja?',
    en: 'What are the two axes?',
    opts: ['sigurnost i opseg', 'vrijeme i mjesto', 'osoba i broj', 'stil i registar'],
    answer: 'sigurnost i opseg',
    tip: 'How sure you are, and how much you are claiming. They move independently.',
  },
  {
    mode: 'opseg',
    q: 'U ____ slučajeva to vrijedi. (most)',
    en: 'In most cases that holds.',
    opts: ['većini', 'više', 'veći', 'velikom'],
    answer: 'većini',
    tip: 'u većini slučajeva — locative plus the genitive plural.',
  },
  {
    mode: 'opseg',
    q: 'Barem ____ je to točno. (partly)',
    en: 'That is at least partly right.',
    opts: ['djelomično', 'djelomičan', 'dio', 'dijelom je'],
    answer: 'djelomično',
    tip: 'An adverb: barem djelomično.',
  },
  {
    mode: 'opseg',
    q: 'Koji izraz NE ograničava opseg?',
    en: 'Which does not limit the claim?',
    opts: ['vjerojatno', 'uglavnom', 'donekle', 'u pravilu'],
    answer: 'vjerojatno',
    tip: 'Vjerojatno is on the confidence axis. The other three limit the claim.',
  },

  // ── pripisati ─────────────────────────────────────────────────────────────
  {
    mode: 'pripisati',
    q: '____ ja znam, rok je u petak.',
    en: 'As far as I know, the deadline is Friday.',
    opts: ['Koliko', 'Kako', 'Što', 'Kada'],
    answer: 'Koliko',
    tip: 'Koliko ja znam… — it limits the claim to your own knowledge.',
  },
  {
    mode: 'pripisati',
    q: 'Što radi "navodno"?',
    en: 'What does navodno do?',
    opts: ['pripisuje tvrdnju drugome', 'pojačava tvrdnju', 'niječe tvrdnju', 'postavlja pitanje'],
    answer: 'pripisuje tvrdnju drugome',
    tip: 'It reports without endorsing — and that is a different move from hedging.',
  },
  {
    mode: 'pripisati',
    q: '____ da će cijene rasti.',
    en: 'They say prices will rise.',
    opts: ['Kažu', 'Kaže', 'Rečeno', 'Govori'],
    answer: 'Kažu',
    tip: 'An unnamed third-person plural — the vaguest attribution there is.',
  },
  {
    mode: 'pripisati',
    q: 'Prema ____ , stanje se popravlja. (izvor)',
    en: 'According to the source, things are improving.',
    opts: ['izvoru', 'izvora', 'izvor', 'izvorom'],
    answer: 'izvoru',
    tip: 'prema takes the DATIVE.',
  },
  {
    mode: 'pripisati',
    q: 'Koja je razlika između ograđivanja i pripisivanja?',
    en: 'Hedging against attributing?',
    opts: [
      'ograda smanjuje tvrdnju, pripisivanje je premješta',
      'isto su',
      'jedno je formalno',
      'jedno je pisano',
    ],
    answer: 'ograda smanjuje tvrdnju, pripisivanje je premješta',
    tip: 'One weakens what you claim; the other makes it somebody else who claims it.',
  },
  {
    mode: 'pripisati',
    q: 'Ako ____ dobro razumio, tvrdite da je skupo.',
    en: 'If I have understood correctly, you are saying it is expensive.',
    opts: ['sam', 'bih', 'ću', 'je'],
    answer: 'sam',
    tip: 'Ako sam dobro razumio… — checks the claim before answering it.',
  },
  {
    mode: 'pripisati',
    q: 'Koji glagol znači "to claim, assert"?',
    en: 'to claim',
    opts: ['tvrditi', 'smatrati', 'pretpostaviti', 'zaključiti'],
    answer: 'tvrditi',
    tip: 'Tvrditi is stronger than smatrati and commits the speaker.',
  },
  {
    mode: 'pripisati',
    q: 'Zašto se tvrdnja ponekad radije pripisuje?',
    en: 'Why attribute rather than assert?',
    opts: ['da se ne jamči za nju', 'da bude dulja', 'radi uljudnosti', 'nema razloga'],
    answer: 'da se ne jamči za nju',
    tip: 'You pass the claim on without standing behind it.',
  },
];
