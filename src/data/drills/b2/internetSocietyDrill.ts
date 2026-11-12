// src/data/drills/b2/internetSocietyDrill.ts
//
// B2 LIVING ONLINE — the drill for the `internet-society` lesson.
//
//   words — the digital vocabulary: lozinka, objava, pratitelj, prednost, nedostatak
//   prep  — na internetu, pred zaslonom, ovisan o + locative, za dvadeset godina
//   argue — S jedne strane…, Međutim, Osim toga, Zbog toga, Mislim da će…
//
// Distractors are wrong by case, gender or preposition — never by being Serbian.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INTERNET_SOCIETY_MODE_LABELS: Record<string, string> = {
  words: '📱 Digital words',
  prep: '🌐 Na internetu, pred zaslonom',
  argue: '⚖️ For and against',
};

export const INTERNET_SOCIETY_DRILL_DATA: ModeDrillItem[] = [
  // ── words ────────────────────────────────────────────────────────────────
  {
    mode: 'words',
    q: 'Nikome ne govori svoju ____.',
    en: 'Don’t tell anyone your password.',
    opts: ['objavu', 'lozinku', 'pratitelja', 'aplikaciju'],
    answer: 'lozinku',
    tip: 'lozinka — the password; accusative lozinku.',
  },
  {
    mode: 'words',
    q: 'Ova ____ ima više od sto komentara.',
    en: 'This post has more than a hundred comments.',
    opts: ['lozinka', 'mreža', 'objava', 'tipkovnica'],
    answer: 'objava',
    tip: 'objava — a post on a social network.',
  },
  {
    mode: 'words',
    q: 'Pjevačica ima milijun ____ na društvenim mrežama.',
    en: 'The singer has a million followers on social networks.',
    opts: ['pratitelja', 'lozinki', 'zaslona', 'računala'],
    answer: 'pratitelja',
    tip: 'pratitelj — a follower; genitive plural after milijun.',
  },
  {
    mode: 'words',
    q: 'Na putovanja uvijek nosim prijenosno ____.',
    en: 'I always take my laptop on trips.',
    opts: ['zaslon', 'mobitel', 'punjač', 'računalo'],
    answer: 'računalo',
    tip: 'prijenosno računalo — a laptop; the neuter adjective fits only računalo.',
  },
  {
    mode: 'words',
    q: 'Ne vjeruj svemu, ima puno ____ vijesti.',
    en: 'Don’t believe everything — there is a lot of fake news.',
    opts: ['lažne', 'lažnih', 'lažnim', 'lažna'],
    answer: 'lažnih',
    tip: 'After puno: the genitive plural, lažnih vijesti.',
  },
  {
    mode: 'words',
    q: 'Moj brat je ____ o računalnim igrama.',
    en: 'My brother is addicted to computer games.',
    opts: ['ovisnost', 'ovisna', 'ovisni', 'ovisan'],
    answer: 'ovisan',
    tip: 'A man: ovisan. Ovisnost is the noun, addiction.',
  },
  {
    mode: 'words',
    q: 'Moraš ____ novu aplikaciju banke.',
    en: 'You have to download the bank’s new app.',
    opts: ['preuzmeš', 'preuzmi', 'preuzeti', 'preuzimam'],
    answer: 'preuzeti',
    tip: 'After moraš: the infinitive, preuzeti.',
  },
  {
    mode: 'words',
    q: 'Najveća ____ interneta je to što je sve dostupno.',
    en: 'The biggest advantage of the internet is that everything is available.',
    opts: ['nedostatak', 'ovisnost', 'prednost', 'lozinka'],
    answer: 'prednost',
    tip: 'prednost — an advantage. Nedostatak is masculine and means the opposite.',
  },
  // ── prep ─────────────────────────────────────────────────────────────────
  {
    mode: 'prep',
    q: 'Pročitala sam to ____.',
    en: 'I read it on the internet.',
    opts: ['na internetu', 'u internetu', 'na internet', 'iz interneta'],
    answer: 'na internetu',
    tip: 'Croatian is ON the internet: na + locative.',
  },
  {
    mode: 'prep',
    q: 'Provodi sate ____.',
    en: 'He spends hours on social networks.',
    opts: [
      'u društvenim mrežama',
      'na društvene mreže',
      'na društvenim mrežama',
      'za društvenim mrežama',
    ],
    answer: 'na društvenim mrežama',
    tip: 'na + locative plural.',
  },
  {
    mode: 'prep',
    q: 'Djeca sjede pred ____.',
    en: 'The children are sitting in front of the screen.',
    opts: ['zaslon', 'zaslonu', 'zaslona', 'zaslonom'],
    answer: 'zaslonom',
    tip: 'pred, saying where, takes the instrumental.',
  },
  {
    mode: 'prep',
    q: 'Ne mogu se spojiti ____.',
    en: 'I can’t connect to the internet.',
    opts: ['na internet', 'na internetu', 'u internet', 'za internet'],
    answer: 'na internet',
    tip: 'Movement onto it: na + accusative.',
  },
  {
    mode: 'prep',
    q: 'Ovisna je ____.',
    en: 'She is addicted to her phone.',
    opts: ['o mobitel', 'za mobitel', 'o mobitelu', 'na mobitelu'],
    answer: 'o mobitelu',
    tip: 'ovisan / ovisna always takes o + locative.',
  },
  {
    mode: 'prep',
    q: 'Ta se opcija nalazi ____.',
    en: 'That option is in the app.',
    opts: ['na aplikaciju', 'u aplikaciju', 'aplikacijom', 'u aplikaciji'],
    answer: 'u aplikaciji',
    tip: 'Inside a program: u + locative.',
  },
  {
    mode: 'prep',
    q: '____ svijet će izgledati potpuno drukčije.',
    en: 'In twenty years the world will look completely different.',
    opts: ['Za dvadeset godina', 'Prije dvadeset godina', 'Za dvadeset godine', 'Dvadeset godina'],
    answer: 'Za dvadeset godina',
    tip: 'za + a stretch of time from now; after dvadeset, godina.',
  },
  {
    mode: 'prep',
    q: 'Ovisnost ____ je ozbiljan problem.',
    en: 'Gambling addiction is a serious problem.',
    opts: ['o kockanje', 'o kockanju', 'za kockanje', 'na kockanje'],
    answer: 'o kockanju',
    tip: 'ovisnost o + locative: o kockanju.',
  },
  // ── argue ────────────────────────────────────────────────────────────────
  {
    mode: 'argue',
    q: '____ strane, internet je koristan, s druge strane opasan.',
    en: 'On the one hand the internet is useful, on the other it is dangerous.',
    opts: ['S druge', 'S jedne', 'Od jedne', 'Na jednoj'],
    answer: 'S jedne',
    tip: 'S jedne strane… s druge strane…',
  },
  {
    mode: 'argue',
    q: 'Internet je brz. ____, nije uvijek pouzdan.',
    en: 'The internet is fast. However, it isn’t always reliable.',
    opts: ['Osim toga', 'Zbog toga', 'Međutim', 'Na primjer'],
    answer: 'Međutim',
    tip: 'Međutim turns against the sentence before it.',
  },
  {
    mode: 'argue',
    q: 'Mobitel je praktičan. ____, možeš ga nositi svugdje.',
    en: 'A phone is practical. Besides, you can take it everywhere.',
    opts: ['Osim toga', 'Međutim', 'S druge strane', 'Ipak'],
    answer: 'Osim toga',
    tip: 'Osim toga adds one more point on the same side.',
  },
  {
    mode: 'argue',
    q: 'Djeca premalo spavaju. ____ su umorna u školi.',
    en: 'Children sleep too little. Because of that they are tired at school.',
    opts: ['Osim toga', 'Međutim', 'Ipak', 'Zbog toga'],
    answer: 'Zbog toga',
    tip: 'Zbog toga gives a consequence.',
  },
  {
    mode: 'argue',
    q: 'Glavni je nedostatak ____ gubimo privatnost.',
    en: 'The main disadvantage is that we lose privacy.',
    opts: ['to koji', 'ono tko', 'to što', 'zato da'],
    answer: 'to što',
    tip: 'to što introduces what the disadvantage actually is.',
  },
  {
    mode: 'argue',
    q: '____ da će roboti raditi umjesto nas.',
    en: 'I think robots will work instead of us.',
    opts: ['Mislio', 'Mislim', 'Misliti', 'Misleći'],
    answer: 'Mislim',
    tip: 'Mislim da će… — a careful prediction.',
  },
  {
    mode: 'argue',
    q: 'Ne vjerujem da će knjige ____.',
    en: 'I don’t believe books will disappear.',
    opts: ['nestanu', 'nestane', 'nestaju', 'nestati'],
    answer: 'nestati',
    tip: 'The future: će + infinitive.',
  },
  {
    mode: 'argue',
    q: 'Bilo bi dobro ____ djeca manje koriste mobitele.',
    en: 'It would be good if children used their phones less.',
    opts: ['da', 'ako', 'jer', 'kad'],
    answer: 'da',
    tip: 'Bilo bi dobro da… + present.',
  },
];
