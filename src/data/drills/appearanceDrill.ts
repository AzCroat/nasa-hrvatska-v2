// src/data/drills/appearanceDrill.ts
//
// A2 DESCRIBING PEOPLE — the drill for the `describing-people` lesson.
//
// The lesson's own framing is two kinds of description, and the grammar follows
// it exactly: *Kakav je?* asks what someone is LIKE and expects an adjective;
// *Koji je?* asks WHICH ONE out of several and expects identification. English
// collapses both into "what is he like" and "which one is he", and learners
// reach for *koji* when they want character every time.
//
// Under that sit two traps worth drilling on their own. Hair and eyes belong to
// their owner through a DATIVE clitic — *Oči su joj plave*, not *njezine oči su
// plave*, which is grammatical but reads as translated English. And *plav*
// means blue AND blond, so *plava kosa* and *plave oči* are the same word doing
// two jobs; grey hair, meanwhile, is *sijeda* and never *siva*.
//
// Three modes:
//   kakavkoji — the two questions, and what each one asks for
//   kosaoci   — hair and eyes, and who they belong to
//   karakter  — character adjectives, agreeing with the person

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const APPEARANCE_MODE_LABELS: Record<string, string> = {
  kakavkoji: '❓ Kakav ili koji',
  kosaoci: '💇 Kosa i oči',
  karakter: '🙂 Karakter',
};

export const APPEARANCE_DRILL_DATA: ModeDrillItem[] = [
  // ── kakavkoji ─────────────────────────────────────────────────────────────
  {
    mode: 'kakavkoji',
    q: 'Pitate kakva je osoba po naravi: ____ je on?',
    en: 'What is he like?',
    opts: ['Kakav', 'Koji', 'Čiji', 'Tko'],
    answer: 'Kakav',
    tip: 'Kakav? asks what KIND — and expects an adjective back.',
  },
  {
    mode: 'kakavkoji',
    q: 'Troje ljudi stoji ondje. ____ je tvoj brat?',
    en: 'Which one is your brother?',
    opts: ['Koji', 'Kakav', 'Čiji', 'Kako'],
    answer: 'Koji',
    tip: 'Koji? picks one out of several.',
  },
  {
    mode: 'kakavkoji',
    q: 'Što traži "Kakav je?"',
    en: 'What does Kakav je? ask for?',
    opts: ['pridjev', 'ime', 'broj', 'mjesto'],
    answer: 'pridjev',
    tip: 'An adjective: drag, vrijedan, sramežljiv.',
  },
  {
    mode: 'kakavkoji',
    q: '____ je tvoja sestra? — Vrlo je draga.',
    en: 'What is your sister like?',
    opts: ['Kakva', 'Koja', 'Čija', 'Kako'],
    answer: 'Kakva',
    tip: 'Kakva agrees with sestra, and the answer is an adjective.',
  },
  {
    mode: 'kakavkoji',
    q: '____ je to auto? — Onaj crveni.',
    en: 'Which car is it?',
    opts: ['Koji', 'Kakav', 'Čiji', 'Kakvo'],
    answer: 'Koji',
    tip: 'The answer identifies one, so the question is koji.',
  },
  {
    mode: 'kakavkoji',
    q: 'Što pita "Čiji je?"',
    en: 'What does Čiji je? ask?',
    opts: ['vlasništvo', 'narav', 'izbor', 'mjesto'],
    answer: 'vlasništvo',
    tip: 'Whose. Three different questions, three different words.',
  },
  {
    mode: 'kakavkoji',
    q: 'Kakvo je ____? (dijete)',
    en: 'What is the child like?',
    opts: ['dijete', 'djeteta', 'djetetu', 'djetetom'],
    answer: 'dijete',
    tip: 'Kakvo agrees with the neuter dijete.',
  },
  {
    mode: 'kakavkoji',
    q: 'Kako pitate za izgled, a ne za narav?',
    en: 'How do you ask about looks?',
    opts: ['Kako izgleda?', 'Kakav je?', 'Koji je?', 'Tko je?'],
    answer: 'Kako izgleda?',
    tip: 'Kako izgleda? is about appearance; kakav je? leans towards character.',
  },

  // ── kosaoci ───────────────────────────────────────────────────────────────
  {
    mode: 'kosaoci',
    q: 'Oči su ____ plave. (njoj)',
    en: 'Her eyes are blue.',
    opts: ['joj', 'je', 'nju', 'njezina'],
    answer: 'joj',
    tip: 'A DATIVE clitic owns the eyes: oči su joj plave.',
  },
  {
    mode: 'kosaoci',
    q: 'Ima ____ kosu. (smeđ)',
    en: 'She has brown hair.',
    opts: ['smeđu', 'smeđa', 'smeđe', 'smeđom'],
    answer: 'smeđu',
    tip: 'Imati takes the accusative, and the colour follows the noun.',
  },
  {
    mode: 'kosaoci',
    q: 'Što znači "plav" uz kosu?',
    en: 'What does plav mean with hair?',
    opts: ['blond', 'blue', 'grey', 'dark'],
    answer: 'blond',
    tip: 'One word, two jobs: plava kosa is blond, plave oči are blue.',
  },
  {
    mode: 'kosaoci',
    q: 'Kako se kaže "grey hair"?',
    en: 'grey hair',
    opts: ['sijeda kosa', 'siva kosa', 'bijela kosa', 'plava kosa'],
    answer: 'sijeda kosa',
    tip: 'Sijeda is its own word. Siva describes a coat, not hair.',
  },
  {
    mode: 'kosaoci',
    q: 'Ima ____ kosu. (kovrčav)',
    en: 'He has curly hair.',
    opts: ['kovrčavu', 'kovrčava', 'kovrčave', 'kovrčavom'],
    answer: 'kovrčavu',
    tip: 'kovrčava / ravna — curly / straight.',
  },
  {
    mode: 'kosaoci',
    q: 'Kosa mu je ____. (dug)',
    en: 'His hair is long.',
    opts: ['duga', 'dug', 'dugo', 'duge'],
    answer: 'duga',
    tip: 'Kosa is feminine singular, so duga — even though English says "hair" is uncountable.',
  },
  {
    mode: 'kosaoci',
    q: 'Nosi ____. (naočale)',
    en: 'He wears glasses.',
    opts: ['naočale', 'naočalu', 'naočala', 'naočalama'],
    answer: 'naočale',
    tip: 'Naočale is plural-only, and the accusative plural looks the same.',
  },
  {
    mode: 'kosaoci',
    q: 'Kako se kaže "he has a beard"?',
    en: 'He has a beard.',
    opts: ['Ima bradu.', 'Ima brada.', 'Ima brade.', 'Ima bradom.'],
    answer: 'Ima bradu.',
    tip: 'Accusative again: ima bradu, ima brkove.',
  },

  // ── karakter ──────────────────────────────────────────────────────────────
  {
    mode: 'karakter',
    q: 'Ona je vrlo ____. (drag)',
    en: 'She is very kind.',
    opts: ['draga', 'drag', 'drago', 'drage'],
    answer: 'draga',
    tip: 'The adjective agrees with the person described.',
  },
  {
    mode: 'karakter',
    q: 'Što znači "vrijedan" o osobi?',
    en: 'What does vrijedan mean of a person?',
    opts: ['hard-working', 'valuable', 'worried', 'wealthy'],
    answer: 'hard-working',
    tip: 'Of a thing it means valuable; of a person, hard-working.',
  },
  {
    mode: 'karakter',
    q: 'Suprotno od "strpljiv" je ____.',
    en: 'The opposite of patient is…',
    opts: ['nestrpljiv', 'nespretan', 'nemiran', 'neuredan'],
    answer: 'nestrpljiv',
    tip: 'The ne- prefix builds a good half of these pairs.',
  },
  {
    mode: 'karakter',
    q: 'Što znači "sramežljiv"?',
    en: 'What does sramežljiv mean?',
    opts: ['shy', 'serious', 'stubborn', 'cheerful'],
    answer: 'shy',
    tip: 'sramežljiv — shy. Ozbiljan is serious.',
  },
  {
    mode: 'karakter',
    q: 'Moji roditelji su ____. (ljubazan)',
    en: 'My parents are friendly.',
    opts: ['ljubazni', 'ljubazan', 'ljubazna', 'ljubazno'],
    answer: 'ljubazni',
    tip: 'Plural subject → plural adjective.',
  },
  {
    mode: 'karakter',
    q: 'Što znači "tvrdoglav"?',
    en: 'What does tvrdoglav mean?',
    opts: ['stubborn', 'clever', 'lazy', 'brave'],
    answer: 'stubborn',
    tip: 'Literally "hard-headed" — tvrd plus glava.',
  },
  {
    mode: 'karakter',
    q: 'Dijete je ____. (veseo)',
    en: 'The child is cheerful.',
    opts: ['veselo', 'veseo', 'vesela', 'veseli'],
    answer: 'veselo',
    tip: 'Dijete is neuter, so veselo.',
  },
  {
    mode: 'karakter',
    q: 'Suprotno od "vrijedan" je ____.',
    en: 'The opposite of hard-working is…',
    opts: ['lijen', 'ljut', 'lud', 'lak'],
    answer: 'lijen',
    tip: 'lijen — lazy.',
  },
];
