// src/data/drills/positionDrill.ts
//
// B1 SITTING, STANDING, PUTTING — the drill for the `position-placement` lesson.
//
// This is the A1 motion-versus-position rule again, one level up and applied to
// a set of verb pairs where Croatian splits what English keeps together.
//
//   THE PAIRS: *sjesti / sjediti*, *leći / ležati*, *stati / stajati*,
//   *staviti / stajati*. One member is a CHANGE — the body or the object
//   arrives somewhere. The other is a STATE — nothing is moving. English uses
//   "sit down" against "be sitting" and mostly leaves the learner to notice.
//
//   THE CHANGE TAKES THE ACCUSATIVE. *Sjedni na stolicu* — sit down onto the
//   chair. THE STATE TAKES THE LOCATIVE. *Sjedim na stolici* — I am sitting on
//   it. Same preposition, and the case is doing all the work, exactly as with
//   *u grad* against *u gradu*.
//
//   STAVITI AND STAJATI ARE NOT THE SAME WORD, though the second looks like the
//   imperfective of the first. *Stavljam knjigu na stol* takes an object;
//   *Knjiga stoji na stolu* does not. Reaching for *stavljati* to say a thing
//   is placed somewhere is the predictable error.
//
// `kretanje` (B2) is motion VERBS — ići, hodati, trčati — tagged
// `aspect-perfective` and claimed. It is a neighbour, not this.
//
// Three modes:
//   parovi  — which member of the pair the sentence needs
//   padez   — accusative for the change, locative for the state
//   stavljanje — putting things, and the staviti / stajati split

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const POSITION_MODE_LABELS: Record<string, string> = {
  parovi: '👥 Parovi glagola',
  padez: '🎯 Akuzativ ili lokativ',
  stavljanje: '📦 Stavljanje',
};

export const POSITION_DRILL_DATA: ModeDrillItem[] = [
  // ── parovi ────────────────────────────────────────────────────────────────
  {
    mode: 'parovi',
    q: '____, molim vas! (sit down)',
    en: 'Sit down, please!',
    opts: ['Sjednite', 'Sjedite', 'Sjedali', 'Sjedni ste'],
    answer: 'Sjednite',
    tip: 'sjesti is the CHANGE — the act of sitting down.',
  },
  {
    mode: 'parovi',
    q: 'Ona ____ na stolici i čita.',
    en: 'She is sitting on the chair reading.',
    opts: ['sjedi', 'sjedne', 'sjedne se', 'sjela'],
    answer: 'sjedi',
    tip: 'sjediti is the STATE — nothing is moving.',
  },
  {
    mode: 'parovi',
    q: 'Koji glagol znači "be lying"?',
    en: 'be lying',
    opts: ['ležati', 'leći', 'legnuti', 'položiti'],
    answer: 'ležati',
    tip: 'And leći is to lie DOWN.',
  },
  {
    mode: 'parovi',
    q: 'Umoran sam, idem ____.',
    en: 'I am tired, I am going to lie down.',
    opts: ['leći', 'ležati', 'legao', 'ležim'],
    answer: 'leći',
    tip: 'A change of position, so the change verb.',
  },
  {
    mode: 'parovi',
    q: 'Pas ____ na podu cijeli dan.',
    en: 'The dog lies on the floor all day.',
    opts: ['leži', 'legne', 'liježe se', 'lego'],
    answer: 'leži',
    tip: 'An ongoing state.',
  },
  {
    mode: 'parovi',
    q: 'Što razlikuje članove para?',
    en: 'What splits the pair?',
    opts: ['promjena ili stanje', 'vrijeme', 'uljudnost', 'rod'],
    answer: 'promjena ili stanje',
    tip: 'Something arrives, or nothing is moving. That is the entire distinction.',
  },
  {
    mode: 'parovi',
    q: 'Autobus ____ na stanici. (is standing)',
    en: 'The bus is standing at the stop.',
    opts: ['stoji', 'stane', 'stane se', 'stajao'],
    answer: 'stoji',
    tip: 'stajati, the state. Stati would be the moment it stopped.',
  },
  {
    mode: 'parovi',
    q: 'Vlak je ____ na stanici. (stopped, past)',
    en: 'The train stopped at the station.',
    opts: ['stao', 'stajao', 'stojio', 'stanuo'],
    answer: 'stao',
    tip: 'stati — the change. Stajao je would mean it stood there for a while.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Sjedni na ____. (stolica)',
    en: 'Sit down on the chair.',
    opts: ['stolicu', 'stolici', 'stolice', 'stolicom'],
    answer: 'stolicu',
    tip: 'A change of position takes the ACCUSATIVE.',
  },
  {
    mode: 'padez',
    q: 'Sjedim na ____. (stolica)',
    en: 'I am sitting on the chair.',
    opts: ['stolici', 'stolicu', 'stolice', 'stolicom'],
    answer: 'stolici',
    tip: 'A state takes the LOCATIVE.',
  },
  {
    mode: 'padez',
    q: 'Lezi na ____. (krevet)',
    en: 'Lie down on the bed.',
    opts: ['krevet', 'krevetu', 'kreveta', 'krevetom'],
    answer: 'krevet',
    tip: 'Change → accusative, and for masculine inanimate that looks like the nominative.',
  },
  {
    mode: 'padez',
    q: 'Ležim na ____. (krevet)',
    en: 'I am lying on the bed.',
    opts: ['krevetu', 'krevet', 'kreveta', 'krevetom'],
    answer: 'krevetu',
    tip: 'State → locative, and now the ending shows.',
  },
  {
    mode: 'padez',
    q: 'Koje pravilo je ovo, samo drugim riječima?',
    en: 'Which earlier rule is this?',
    opts: ['idem u grad / u gradu sam', 'red riječi', 'slaganje pridjeva', 'nijedno'],
    answer: 'idem u grad / u gradu sam',
    tip: 'The same motion-versus-position rule from A1, applied to bodies and objects.',
  },
  {
    mode: 'padez',
    q: 'Objesi kaput u ____. (ormar)',
    en: 'Hang the coat in the wardrobe.',
    opts: ['ormar', 'ormaru', 'ormara', 'ormarom'],
    answer: 'ormar',
    tip: 'The coat arrives there, so accusative.',
  },
  {
    mode: 'padez',
    q: 'Kaput visi u ____. (ormar)',
    en: 'The coat hangs in the wardrobe.',
    opts: ['ormaru', 'ormar', 'ormara', 'ormarom'],
    answer: 'ormaru',
    tip: 'It is already there and staying, so locative.',
  },
  {
    mode: 'padez',
    q: 'Što odlučuje padež — prijedlog ili glagol?',
    en: 'What decides the case?',
    opts: ['glagol', 'prijedlog', 'imenica', 'red riječi'],
    answer: 'glagol',
    tip: 'The preposition stays the same. Whether the verb moves something is what changes.',
  },

  // ── stavljanje ────────────────────────────────────────────────────────────
  {
    mode: 'stavljanje',
    q: 'Stavi to u ____. (ladica)',
    en: 'Put that in the drawer.',
    opts: ['ladicu', 'ladici', 'ladice', 'ladicom'],
    answer: 'ladicu',
    tip: 'staviti moves something, so accusative.',
  },
  {
    mode: 'stavljanje',
    q: 'To je u ____. (ladica)',
    en: 'That is in the drawer.',
    opts: ['ladici', 'ladicu', 'ladice', 'ladicom'],
    answer: 'ladici',
    tip: 'Nothing moves, so locative.',
  },
  {
    mode: 'stavljanje',
    q: 'Koji glagol traži objekt?',
    en: 'Which one takes an object?',
    opts: ['staviti', 'stajati', 'oba', 'nijedan'],
    answer: 'staviti',
    tip: 'You put SOMETHING somewhere. Nothing stands something.',
  },
  {
    mode: 'stavljanje',
    q: 'Knjiga ____ na stolu.',
    en: 'The book is on the table.',
    opts: ['stoji', 'stavlja', 'stavi', 'staviti'],
    answer: 'stoji',
    tip: 'Stajati for a thing that is placed. Reaching for stavljati here is the classic slip.',
  },
  {
    mode: 'stavljanje',
    q: 'Zašto je "Knjiga stavlja na stolu" pogrešno?',
    en: 'Why is that wrong?',
    opts: [
      'stavljati traži objekt, a knjiga ništa ne stavlja',
      'kriv padež',
      'kriv red riječi',
      'nije pogrešno',
    ],
    answer: 'stavljati traži objekt, a knjiga ništa ne stavlja',
    tip: 'The book is not doing any putting. It is simply there.',
  },
  {
    mode: 'stavljanje',
    q: '____ knjigu na stol. (I am putting)',
    en: 'I am putting the book on the table.',
    opts: ['Stavljam', 'Stojim', 'Stavim se', 'Stajem'],
    answer: 'Stavljam',
    tip: 'stavljati is the imperfective of staviti — and it takes an object.',
  },
  {
    mode: 'stavljanje',
    q: 'Gdje ____ ključevi?',
    en: 'Where are the keys?',
    opts: ['stoje', 'stavljaju', 'stave', 'staviti'],
    answer: 'stoje',
    tip: 'Croatian will often say a thing STANDS somewhere where English says it is.',
  },
  {
    mode: 'stavljanje',
    q: 'Koji od ovih glagola opisuje stanje?',
    en: 'Which describes a state?',
    opts: ['stajati', 'staviti', 'sjesti', 'leći'],
    answer: 'stajati',
    tip: 'The other three are all changes.',
  },
];
