// src/data/drills/c1/adversativeClausesDrill.ts
//
// C1 ADVERSATIVE CLAUSES — the drill for the `adversative-clauses` lesson.
//
// Three modes, eight items each:
//   veznik   — a, ali, no, dok, međutim, ipak, pak: the relation decides the connector
//   negacija — nego / već after a negation that is corrected, and ali where nothing is
//   zarez    — the comma before the connector, pak after the first stressed word, and no
//              comma before nego in a comparison
//
// nego and već are both standard after a negation, so no item offers one as wrong when
// the other is the answer. Commas around međutim vary between writers and are not tested.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ADVERSATIVE_CLAUSES_MODE_LABELS: Record<string, string> = {
  veznik: '🔗 Veznik',
  negacija: '🚫 Nego i već',
  zarez: '✏️ Zarez i red riječi',
};

export const ADVERSATIVE_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── veznik ────────────────────────────────────────────────────────────────
  {
    mode: 'veznik',
    q: 'Ivan pije čaj, ____ Marija pije kavu.',
    en: 'Ivan drinks tea, and Maria drinks coffee.',
    opts: ['a', 'nego', 'već', 'ipak'],
    answer: 'a',
    tip: 'Two facts side by side, with a new subject.',
  },
  {
    mode: 'veznik',
    q: 'Bio je bolestan, ____ je došao na posao.',
    en: 'He was ill, but he came to work.',
    opts: ['ali', 'nego', 'već', 'dok'],
    answer: 'ali',
    tip: 'The second fact breaks the expectation set by the first.',
  },
  {
    mode: 'veznik',
    q: 'Htjeli smo krenuti rano, ____ kiša nas je zadržala.',
    en: 'We wanted to set off early, but the rain held us up.',
    opts: ['no', 'nego', 'već', 'dok'],
    answer: 'no',
    tip: 'no is a bookish twin of ali. No clitic can follow it directly, so kiša comes first.',
  },
  {
    mode: 'veznik',
    q: 'Sjever zemlje je ravan, ____ je jug planinski.',
    en: 'The north of the country is flat, whereas the south is mountainous.',
    opts: ['dok', 'nego', 'već', 'ipak'],
    answer: 'dok',
    tip: 'Two parallel facts compared: contrastive dok.',
  },
  {
    mode: 'veznik',
    q: 'Bilo je hladno, ali smo se ____ kupali.',
    en: 'It was cold, but we swam nevertheless.',
    opts: ['ipak', 'nego', 'dok', 'pak'],
    answer: 'ipak',
    tip: 'The outcome held despite the cold.',
  },
  {
    mode: 'veznik',
    q: 'Plan je bio dobar. ____, nije bilo novca.',
    en: 'The plan was good. However, there was no money.',
    opts: ['Međutim', 'Nego', 'Već', 'Dok'],
    answer: 'Međutim',
    tip: 'A sentence adverb that can open a new sentence.',
  },
  {
    mode: 'veznik',
    q: 'Moja sestra voli more, ____ ja volim planine.',
    en: 'My sister loves the sea, and I love the mountains.',
    opts: ['a', 'nego', 'već', 'pak'],
    answer: 'a',
    tip: 'Two facts side by side; pak could not open the clause.',
  },
  {
    mode: 'veznik',
    q: 'Trudio se, ____ nije uspio.',
    en: 'He tried hard, but did not succeed.',
    opts: ['ali', 'nego', 'dok', 'već'],
    answer: 'ali',
    tip: 'Effort leads you to expect success; ali marks that it did not come.',
  },

  // ── negacija ──────────────────────────────────────────────────────────────
  {
    mode: 'negacija',
    q: 'Nije Talijan, ____ Hrvat.',
    en: 'He is not Italian but Croatian.',
    opts: ['nego', 'ali', 'dok', 'ipak'],
    answer: 'nego',
    tip: 'A denial corrected: nego or već, never ali.',
  },
  {
    mode: 'negacija',
    q: 'Ne radi u banci, ____ u školi.',
    en: 'She does not work at a bank but at a school.',
    opts: ['već', 'ali', 'dok', 'pak'],
    answer: 'već',
    tip: 'već, like nego, replaces what was denied.',
  },
  {
    mode: 'negacija',
    q: 'Nismo išli vlakom, ____ autobusom.',
    en: 'We did not go by train but by bus.',
    opts: ['nego', 'ali', 'ipak', 'dok'],
    answer: 'nego',
    tip: 'The train is denied and the bus put in its place.',
  },
  {
    mode: 'negacija',
    q: 'Nije riječ o novcu, ____ o poštenju.',
    en: 'It is not about money but about honesty.',
    opts: ['već', 'ali', 'dok', 'ipak'],
    answer: 'već',
    tip: 'već in a slightly formal register.',
  },
  {
    mode: 'negacija',
    q: 'Ne treba ti novi auto, ____ bolji mehaničar.',
    en: 'You do not need a new car but a better mechanic.',
    opts: ['nego', 'ali', 'dok', 'pak'],
    answer: 'nego',
    tip: 'A correction after a negation.',
  },
  {
    mode: 'negacija',
    q: 'Nije skupo, ____ nije ni jeftino.',
    en: 'It is not expensive, but it is not cheap either.',
    opts: ['ali', 'nego', 'već', 'pak'],
    answer: 'ali',
    tip: 'Nothing is replaced here — both clauses deny — so nego and već do not fit.',
  },
  {
    mode: 'negacija',
    q: 'Ne zove se Ana, ____ Anja.',
    en: 'Her name is not Ana but Anja.',
    opts: ['nego', 'ali', 'dok', 'pak'],
    answer: 'nego',
    tip: 'The wrong name is denied and the right one put in its place.',
  },
  {
    mode: 'negacija',
    q: 'Ne pišem roman, ____ zbirku priča.',
    en: 'I am not writing a novel but a collection of stories.',
    opts: ['već', 'ali', 'ipak', 'dok'],
    answer: 'već',
    tip: 'A correction: već or nego.',
  },

  // ── zarez ─────────────────────────────────────────────────────────────────
  {
    mode: 'zarez',
    q: 'Koja je rečenica točna?',
    en: 'I am tired, but I am coming.',
    opts: [
      'Umoran sam, ali dolazim.',
      'Umoran sam ali dolazim.',
      'Umoran sam ali, dolazim.',
      'Umoran, sam ali dolazim.',
    ],
    answer: 'Umoran sam, ali dolazim.',
    tip: 'A comma goes before ali.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica točna?',
    en: 'I am going, and you stay.',
    opts: [
      'Ja idem, a ti ostani.',
      'Ja idem a ti ostani.',
      'Ja idem a, ti ostani.',
      'Ja, idem a ti ostani.',
    ],
    answer: 'Ja idem, a ti ostani.',
    tip: 'A comma goes before a.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica točna?',
    en: 'She, on the other hand, does not like coffee.',
    opts: [
      'Ona pak ne voli kavu.',
      'Pak ona ne voli kavu.',
      'Ona ne pak voli kavu.',
      'Ona ne voli kavu, pak.',
    ],
    answer: 'Ona pak ne voli kavu.',
    tip: 'pak follows the first stressed word of its clause.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica točna?',
    en: 'Ivan is tall, whereas Marko is short.',
    opts: [
      'Ivan je visok, dok je Marko nizak.',
      'Ivan je visok dok, je Marko nizak.',
      'Ivan, je visok dok je Marko nizak.',
      'Ivan je, visok dok je Marko nizak.',
    ],
    answer: 'Ivan je visok, dok je Marko nizak.',
    tip: 'Contrastive dok is preceded by a comma.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica točna?',
    en: 'He is not at home but at work.',
    opts: [
      'Nije kod kuće, nego na poslu.',
      'Nije kod kuće nego, na poslu.',
      'Nije, kod kuće nego na poslu.',
      'Nije kod, kuće nego na poslu.',
    ],
    answer: 'Nije kod kuće, nego na poslu.',
    tip: 'The comma stands before nego, not after it.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica točna?',
    en: 'He is older than me.',
    opts: [
      'Stariji je nego ja.',
      'Stariji je, nego ja.',
      'Stariji, je nego ja.',
      'Stariji je nego, ja.',
    ],
    answer: 'Stariji je nego ja.',
    tip: 'nego in a comparison is not adversative and takes no comma.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica točna?',
    en: 'The weather was bad. However, we went out.',
    opts: [
      'Vrijeme je bilo loše. Međutim, izašli smo.',
      'Vrijeme je bilo loše. Međutim izašli, smo.',
      'Vrijeme je bilo loše, međutim. Izašli smo.',
      'Vrijeme je, bilo loše. Međutim izašli smo.',
    ],
    answer: 'Vrijeme je bilo loše. Međutim, izašli smo.',
    tip: 'međutim opens the second sentence; the clitic smo stays with its verb.',
  },
  {
    mode: 'zarez',
    q: 'Koja je rečenica točna?',
    en: 'I will book the hotel, and you, for your part, buy the tickets.',
    opts: [
      'Ja ću rezervirati hotel, a ti pak kupi karte.',
      'Ja ću rezervirati hotel, a pak ti kupi karte.',
      'Ja ću rezervirati hotel a ti pak, kupi karte.',
      'Ja ću rezervirati hotel, pak a ti kupi karte.',
    ],
    answer: 'Ja ću rezervirati hotel, a ti pak kupi karte.',
    tip: 'A comma before a, and pak after the first stressed word, ti.',
  },
];
