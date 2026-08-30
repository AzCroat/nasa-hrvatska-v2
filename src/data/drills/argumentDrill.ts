// src/data/drills/argumentDrill.ts
//
// B2 BUILDING AN ARGUMENT — the drill for the `argument-structure` lesson.
//
// The CEFR descriptor for B2 says a learner can "give the advantages and
// disadvantages of an option", and this lesson is that descriptor made
// concrete. The structure is four moves — open, for, against, conclude — and
// each move has a fixed frame that has to be learned whole.
//
// The workhorse is *u tome što*, and it is the reason this needs a drill rather
// than a word list: *Problem je u tome što nemamo vremena*. Nothing in its
// parts predicts it — *u* plus the locative of *to* plus *što* — and a learner
// reasoning from English produces *Problem je da…*, which is not how the
// sentence is built. The same shape carries *Prednost je u tome što…* and
// *Razlika je u tome što…*.
//
// The other trap is *Što se tiče*, which takes the GENITIVE: *što se tiče
// cijene*, not *cijenu*.
//
// Three modes:
//   otvaranje  — opening on a topic
//   utomesto   — the fixed frame, and the nouns it hangs on
//   zakljucak  — concluding without repeating yourself

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const ARGUMENT_MODE_LABELS: Record<string, string> = {
  otvaranje: '🎬 Otvaranje',
  utomesto: '⚖️ U tome što',
  zakljucak: '🏁 Zaključak',
};

export const ARGUMENT_DRILL_DATA: ModeDrillItem[] = [
  // ── otvaranje ─────────────────────────────────────────────────────────────
  {
    mode: 'otvaranje',
    q: 'Što se tiče ____, mislim da je previsoka. (cijena)',
    en: 'As for the price, I think it is too high.',
    opts: ['cijene', 'cijenu', 'cijena', 'cijenom'],
    answer: 'cijene',
    tip: 'Što se tiče takes the GENITIVE, every time.',
  },
  {
    mode: 'otvaranje',
    q: 'Kad je riječ ____ novcu, treba biti precizan.',
    en: 'When it comes to money, one must be precise.',
    opts: ['o', 'za', 'do', 'na'],
    answer: 'o',
    tip: 'Kad je riječ O plus the locative — a second opener with a different case.',
  },
  {
    mode: 'otvaranje',
    q: 'Koje su četiri poteza u argumentu?',
    en: 'What are the four moves?',
    opts: [
      'otvoriti, za, protiv, zaključiti',
      'uvod, razrada, primjeri, kraj',
      'pitati, odgovoriti, ponoviti, stati',
      'teza, antiteza, sinteza, dokaz',
    ],
    answer: 'otvoriti, za, protiv, zaključiti',
    tip: 'Open on the topic, one point for, one against, then decide.',
  },
  {
    mode: 'otvaranje',
    q: 'Što se tiče ____, nemam primjedbi. (rok)',
    en: 'As for the deadline, I have no objections.',
    opts: ['roka', 'rok', 'roku', 'rokom'],
    answer: 'roka',
    tip: 'Genitive again: što se tiče roka.',
  },
  {
    mode: 'otvaranje',
    q: 'Koja je razlika između "što se tiče" i "kad je riječ o"?',
    en: 'What is the difference?',
    opts: ['samo padež', 'značenje', 'vrijeme', 'rod'],
    answer: 'samo padež',
    tip: 'They mean the same. One takes the genitive, the other the locative.',
  },
  {
    mode: 'otvaranje',
    q: 'Zašto je bolje otvoriti temu nego odmah iznijeti stav?',
    en: 'Why open on the topic first?',
    opts: [
      'slušatelj zna o čemu je riječ',
      'zvuči učenije',
      'dobiva se na vremenu',
      'nema razloga',
    ],
    answer: 'slušatelj zna o čemu je riječ',
    tip: 'The opener frames what follows; without it the first point lands out of context.',
  },
  {
    mode: 'otvaranje',
    q: 'Što se ____ mene, slažem se.',
    en: 'As far as I am concerned, I agree.',
    opts: ['tiče', 'tiču', 'ticati', 'tiče se'],
    answer: 'tiče',
    tip: 'The se is already in the phrase: što se tiče mene.',
  },
  {
    mode: 'otvaranje',
    q: 'Koji izraz uvodi drugu stranu?',
    en: 'Which introduces the other side?',
    opts: ['S druge strane…', 'Što se tiče…', 'Zaključno…', 'Naime…'],
    answer: 'S druge strane…',
    tip: 'S jedne strane… s druge strane… is the pair.',
  },

  // ── utomesto ──────────────────────────────────────────────────────────────
  {
    mode: 'utomesto',
    q: 'Problem je ____ nemamo vremena.',
    en: 'The problem is that we do not have time.',
    opts: ['u tome što', 'u tome da', 'da', 'što'],
    answer: 'u tome što',
    tip: 'Memorise it whole. The shape is not guessable from its parts.',
  },
  {
    mode: 'utomesto',
    q: 'Prednost je ____ je jeftinije.',
    en: 'The advantage is that it is cheaper.',
    opts: ['u tome što', 'u tome da', 'to da', 'zato što'],
    answer: 'u tome što',
    tip: 'The same frame carries prednost, nedostatak and razlika.',
  },
  {
    mode: 'utomesto',
    q: 'Koji je padež u "u tome"?',
    en: 'Which case is tome?',
    opts: ['lokativ', 'dativ', 'genitiv', 'akuzativ'],
    answer: 'lokativ',
    tip: 'u plus the locative of to. The što then opens the clause.',
  },
  {
    mode: 'utomesto',
    q: 'Što znači "nedostatak"?',
    en: 'What is a nedostatak?',
    opts: ['drawback', 'shortage only', 'defect in goods', 'absence'],
    answer: 'drawback',
    tip: 'The paired opposite of prednost, and the two nouns the structure hangs on.',
  },
  {
    mode: 'utomesto',
    q: 'To ovisi ____ tome koliko imamo vremena.',
    en: 'That depends on how much time we have.',
    opts: ['o', 'od', 'na', 'u'],
    answer: 'o',
    tip: 'Ovisiti O plus the locative. Never ovisiti od.',
  },
  {
    mode: 'utomesto',
    q: 'Glavni ____ je cijena. (argument za)',
    en: 'The main argument is the price.',
    opts: ['argument', 'argumenta', 'argumentu', 'argumentom'],
    answer: 'argument',
    tip: 'The subject stays nominative.',
  },
  {
    mode: 'utomesto',
    q: 'Razlika je u tome ____ jedan traje dulje.',
    en: 'The difference is that one lasts longer.',
    opts: ['što', 'da', 'kako', 'jer'],
    answer: 'što',
    tip: 'The frame always ends in što, never da.',
  },
  {
    mode: 'utomesto',
    q: 'Zašto se "u tome što" uči napamet?',
    en: 'Why learn it whole?',
    opts: ['ne slijedi iz dijelova', 'rijetko je', 'formalno je', 'ima više oblika'],
    answer: 'ne slijedi iz dijelova',
    tip: 'Reasoning from English gives "Problem je da…", which is not the shape.',
  },

  // ── zakljucak ─────────────────────────────────────────────────────────────
  {
    mode: 'zakljucak',
    q: 'Koji izraz zatvara argument?',
    en: 'Which closes an argument?',
    opts: ['Sve u svemu…', 'Što se tiče…', 'Naime…', 'Štoviše…'],
    answer: 'Sve u svemu…',
    tip: 'Sve u svemu, Zaključno, Ukratko, Na kraju krajeva.',
  },
  {
    mode: 'zakljucak',
    q: 'Što znači "ukratko"?',
    en: 'What does ukratko mean?',
    opts: ['in short', 'shortly, soon', 'briefly interrupted', 'in brief detail'],
    answer: 'in short',
    tip: 'From kratak. Uskoro is "soon" — a different word entirely.',
  },
  {
    mode: 'zakljucak',
    q: 'Što znači "na kraju krajeva"?',
    en: 'What does it mean?',
    opts: [
      'after all, when it comes down to it',
      'at the very end',
      'finally, at last',
      'in the end times',
    ],
    answer: 'after all, when it comes down to it',
    tip: 'It concedes and concludes at once.',
  },
  {
    mode: 'zakljucak',
    q: 'Zašto jedan argument za i jedan protiv nadmašuje pet za?',
    en: 'Why is one each side better than five for?',
    opts: [
      'pokazuje da ste razmotrili obje strane',
      'kraće je',
      'lakše je',
      'tako traži gramatika',
    ],
    answer: 'pokazuje da ste razmotrili obje strane',
    tip: 'It reads as judgement rather than advocacy — which is the B2 descriptor.',
  },
  {
    mode: 'zakljucak',
    q: 'Koji izraz NE zaključuje?',
    en: 'Which does not conclude?',
    opts: ['Naime…', 'Zaključno…', 'Ukratko…', 'Sve u svemu…'],
    answer: 'Naime…',
    tip: 'Naime explains — "namely". It opens rather than closes.',
  },
  {
    mode: 'zakljucak',
    q: 'Zaključno, mislim da ____ prihvatiti ponudu.',
    en: 'In conclusion, I think we should accept the offer.',
    opts: ['bismo trebali', 'bi trebali', 'trebamo bi', 'bismo trebalo'],
    answer: 'bismo trebali',
    tip: 'The conditional of trebati, first person plural: bismo trebali.',
  },
  {
    mode: 'zakljucak',
    q: 'Što znači "štoviše"?',
    en: 'What does štoviše mean?',
    opts: ['moreover', 'however', 'therefore', 'nevertheless'],
    answer: 'moreover',
    tip: 'It ADDS to what came before. Međutim contrasts, stoga concludes.',
  },
  {
    mode: 'zakljucak',
    q: 'Koji izraz izriče posljedicu?',
    en: 'Which expresses a result?',
    opts: ['stoga', 'međutim', 'naime', 'naprotiv'],
    answer: 'stoga',
    tip: 'stoga — therefore. Nema proračuna; stoga projekt kasni.',
  },
];
