// src/data/drills/causePurposeDrill.ts
//
// B1 CAUSE AND PURPOSE — the drill for the `cause-purpose` lesson.
//
// `uzrocne` exists but is B2 and tagged `subordination`, whose route is already
// taken — the same crowding that left `time-clauses` and `reported-speech`
// uncoupled. Its own category and its own B1 drill.
//
// The distinction the drill is built around is the one learners get wrong most:
// **jer takes a CLAUSE, zbog takes a NOUN.** If there is a verb after it you
// need jer; if there is a noun in the genitive you need zbog. And *zato* is not
// *zato što* — one is "that is why", the other is "because", so swapping them
// reverses cause and effect while leaving a perfectly grammatical sentence.
//
// Three modes:
//   uzrok   — jer / zato što / budući da vs zbog + genitive
//   namjera — purpose: da bi / kako bi, and the bare infinitive after motion
//   razlika — zbog vs radi, zato vs zato što

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const CAUSE_PURPOSE_MODE_LABELS: Record<string, string> = {
  uzrok: '❓ Uzrok',
  namjera: '🎯 Namjera',
  razlika: '⚖️ Slične riječi',
};

export const CAUSE_PURPOSE_DRILL_DATA: ModeDrillItem[] = [
  // ── uzrok ─────────────────────────────────────────────────────────────────
  {
    mode: 'uzrok',
    q: 'Ne idem van ____ pada kiša.',
    en: 'I am not going out because it is raining.',
    opts: ['jer', 'zbog', 'radi', 'stoga'],
    answer: 'jer',
    tip: 'There is a VERB after it (pada), so you need a clause connector: jer.',
  },
  {
    mode: 'uzrok',
    q: 'Ne idem van ____ kiše.',
    en: 'I am not going out because of the rain.',
    opts: ['zbog', 'jer', 'zato što', 'budući da'],
    answer: 'zbog',
    tip: 'A NOUN in the genitive follows, so zbog: zbog kiše.',
  },
  {
    mode: 'uzrok',
    q: 'Koji padež traži "zbog"?',
    en: 'Which case does zbog take?',
    opts: ['genitiv', 'akuzativ', 'dativ', 'lokativ'],
    answer: 'genitiv',
    tip: 'Always the genitive: zbog kiše, zbog tebe, zbog posla.',
  },
  {
    mode: 'uzrok',
    q: '____ nemam vremena, neću doći.',
    en: 'Since I have no time, I will not come.',
    opts: ['Budući da', 'Jer', 'Zbog', 'Stoga'],
    answer: 'Budući da',
    tip: 'Budući da is the formal one, and unlike jer it CAN open a sentence.',
  },
  {
    mode: 'uzrok',
    q: 'Može li "jer" biti prva riječ u rečenici?',
    en: 'Can jer open a sentence?',
    opts: ['ne', 'da', 'samo u pitanju', 'samo u pismu'],
    answer: 'ne',
    tip: 'Jer never opens one. Zato što and budući da can.',
  },
  {
    mode: 'uzrok',
    q: 'Kasnim ____ je bila gužva.',
    en: 'I am late because there was traffic.',
    opts: ['jer', 'zbog', 'radi', 'zato'],
    answer: 'jer',
    tip: 'A verb follows (bila je), so jer.',
  },
  {
    mode: 'uzrok',
    q: 'Zatvoreno je ____ praznika.',
    en: 'It is closed because of the holiday.',
    opts: ['zbog', 'jer', 'budući da', 'zato što'],
    answer: 'zbog',
    tip: 'A noun follows, so zbog + genitive: zbog praznika.',
  },
  {
    mode: 'uzrok',
    q: 'Kako znate treba li "jer" ili "zbog"?',
    en: 'How do you choose?',
    opts: ['ima li glagola poslije', 'je li rečenica duga', 'je li formalno', 'koje je vrijeme'],
    answer: 'ima li glagola poslije',
    tip: 'Verb → jer. Noun → zbog. That one question settles every case.',
  },

  // ── namjera ───────────────────────────────────────────────────────────────
  {
    mode: 'namjera',
    q: 'Učim ____ bih položio ispit.',
    en: 'I am studying so that I can pass the exam.',
    opts: ['da', 'jer', 'zbog', 'kad'],
    answer: 'da',
    tip: 'Purpose: da + the conditional — da bih, da bi, da bismo.',
  },
  {
    mode: 'namjera',
    q: 'Štedim ____ bih kupio auto.',
    en: 'I am saving to buy a car.',
    opts: ['da', 'jer', 'zbog', 'nakon što'],
    answer: 'da',
    tip: 'Same construction: da bih kupio.',
  },
  {
    mode: 'namjera',
    q: 'Idem u dućan ____ kruh.',
    en: 'I am going to the shop to buy bread.',
    opts: ['kupiti', 'da kupim kruha', 'jer kupujem', 'zbog kupnje'],
    answer: 'kupiti',
    tip: 'After a verb of MOTION, purpose takes the bare infinitive: idem kupiti kruh.',
  },
  {
    mode: 'namjera',
    q: 'Koji oblik ide uz "da bi"?',
    en: 'Which form follows da bi?',
    opts: ['glagolski pridjev radni', 'infinitiv', 'prezent', 'imperativ'],
    answer: 'glagolski pridjev radni',
    tip: 'The conditional is bih/bi + the -o/-la participle: da bih došao.',
  },
  {
    mode: 'namjera',
    q: 'Požurili smo ____ bismo stigli na vrijeme.',
    en: 'We hurried so that we would arrive on time.',
    opts: ['kako', 'jer', 'zbog', 'dok'],
    answer: 'kako',
    tip: 'Kako bi is interchangeable with da bi for purpose.',
  },
  {
    mode: 'namjera',
    q: 'Došao sam ____ te vidim.',
    en: 'I came to see you.',
    opts: ['da', 'jer', 'zbog', 'čim'],
    answer: 'da',
    tip: 'Da + present also works for purpose when the subject stays the same.',
  },
  {
    mode: 'namjera',
    q: 'Što izriče "da bi"?',
    en: 'What does da bi express?',
    opts: ['namjeru', 'uzrok', 'vrijeme', 'uvjet'],
    answer: 'namjeru',
    tip: 'Purpose — what you are aiming at, not what caused it.',
  },
  {
    mode: 'namjera',
    q: 'Trenira ____ bi bio jači.',
    en: 'He trains in order to be stronger.',
    opts: ['kako', 'jer', 'zbog', 'otkako'],
    answer: 'kako',
    tip: 'kako bi bio — the aim, looking forward.',
  },

  // ── razlika ───────────────────────────────────────────────────────────────
  {
    mode: 'razlika',
    q: 'Što znači "zbog"?',
    en: 'What does zbog mean?',
    opts: ['uzrok, unatrag', 'namjeru, unaprijed', 'vrijeme', 'mjesto'],
    answer: 'uzrok, unatrag',
    tip: 'Zbog looks BACK at what caused something. Radi looks FORWARD at the aim.',
  },
  {
    mode: 'razlika',
    q: 'Došao je ____ posla. (da bi radio)',
    en: 'He came for work. (in order to work)',
    opts: ['radi', 'zbog', 'jer', 'stoga'],
    answer: 'radi',
    tip: 'Purpose → radi. Zbog posla would mean work was the cause.',
  },
  {
    mode: 'razlika',
    q: 'Zakasnio je ____ prometa.',
    en: 'He was late because of the traffic.',
    opts: ['zbog', 'radi', 'jer', 'kako bi'],
    answer: 'zbog',
    tip: 'Traffic caused it, so zbog.',
  },
  {
    mode: 'razlika',
    q: 'Pada kiša, ____ ostajemo doma.',
    en: 'It is raining, so we are staying home.',
    opts: ['zato', 'zato što', 'jer', 'budući da'],
    answer: 'zato',
    tip: 'Zato = that is why — it introduces the CONSEQUENCE, not the cause.',
  },
  {
    mode: 'razlika',
    q: 'Ostajemo doma ____ pada kiša.',
    en: 'We are staying home because it is raining.',
    opts: ['zato što', 'zato', 'stoga', 'radi'],
    answer: 'zato što',
    tip: 'Zato što = because. One word apart from zato, and the opposite direction.',
  },
  {
    mode: 'razlika',
    q: 'Koja je razlika: "zato" i "zato što"?',
    en: 'What is the difference?',
    opts: ['posljedica / uzrok', 'formalno / neformalno', 'prošlost / sadašnjost', 'nema razlike'],
    answer: 'posljedica / uzrok',
    tip: 'Swap them and the sentence stays grammatical but says the reverse.',
  },
  {
    mode: 'razlika',
    q: 'Nije bilo karata, ____ smo se vratili.',
    en: 'There were no tickets, therefore we went back.',
    opts: ['stoga', 'jer', 'zbog', 'zato što'],
    answer: 'stoga',
    tip: 'Stoga is the formal "therefore" — the consequence side, like zato.',
  },
  {
    mode: 'razlika',
    q: 'Koji padež traži "radi"?',
    en: 'Which case does radi take?',
    opts: ['genitiv', 'dativ', 'akuzativ', 'lokativ'],
    answer: 'genitiv',
    tip: 'Genitive, same as zbog — the case is not what tells them apart.',
  },
];
