// src/data/drills/languageSocietyDrill.ts
//
// C2 LANGUAGE AND SOCIETY — the drill for `jezik-i-drustvo`, the last lesson of
// the last level.
//
// Everything before this asked whether a sentence was correct. This asks what a
// correct sentence SAYS ABOUT THE SPEAKER — because at C2 every remaining
// choice (Vi or ti, a diminutive or none, *računalo* or *kompjuter*, diacritics
// or not) is read by Croatian listeners as information, and the learner is
// sending those signals whether or not they know it.
//
// Three things this bank insists on, because each is a live misreading:
//
//   THE VI/TI LINE HAS MOVED, AND THE METHOD HAS NOT. Under forty, in tech and
//   media, *ti* arrives at the first meeting. That does not make offering it
//   upward correct: *Možemo na ti?* is still the other person's move.
//
//   ANGLICISMS ARE AN AGE AXIS, NOT A CORRECTNESS AXIS. A learner who uses only
//   native coinages sounds like a document. This is the one place in the
//   curriculum where the purist preference taught at C1 gets its counterweight.
//
//   DIACRITICS ARE NOT OPTIONAL TWICE OVER. Absent in a message and obligatory
//   in an email — and the second half is what a learner gets wrong, because the
//   first half taught them the habit.
//
// The diaspora slide is drilled straight: a heritage form that sounds archaic
// in Zagreb is the language of a place and a generation, and calling it an
// error misdescribes it. This app's learners are that audience.
//
// Three modes:
//   signali — what each choice is read as
//   oslovljavanje — where the Vi/ti line sits now
//   medij — writing, diacritics, and the diaspora signal

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const LANGUAGE_SOCIETY_MODE_LABELS: Record<string, string> = {
  signali: '📡 Signali',
  oslovljavanje: '🤝 Vi ili ti',
  medij: '✍️ Medij',
};

export const LANGUAGE_SOCIETY_DRILL_DATA: ModeDrillItem[] = [
  // ── signali ───────────────────────────────────────────────────────────────
  {
    mode: 'signali',
    q: 'Što signaliziraju dijalektalne crte u govoru?',
    en: 'What do dialect features signal?',
    opts: ['kraj i opuštenost situacije', 'obrazovanje', 'dob', 'zanimanje'],
    answer: 'kraj i opuštenost situacije',
    tip: 'Region, and whether the setting has relaxed.',
  },
  {
    mode: 'signali',
    q: 'Što signaliziraju anglizmi?',
    en: 'What do anglicisms signal?',
    opts: ['dob i struku', 'nepismenost', 'formalnost', 'kraj'],
    answer: 'dob i struku',
    tip: 'Age, profession, and how much of a life happens online.',
  },
  {
    mode: 'signali',
    q: 'Što signaliziraju domaće kovanice poput "sučelje"?',
    en: 'What do native coinages signal?',
    opts: ['pažljiv, standardu okrenut govor', 'starost govornika', 'formalnu ljutnju', 'ništa'],
    answer: 'pažljiv, standardu okrenut govor',
    tip: 'Careful and standard-oriented, and often institutional.',
  },
  {
    mode: 'signali',
    q: 'Što najčešće signaliziraju umanjenice?',
    en: 'What do diminutives usually signal?',
    opts: ['toplinu', 'nesigurnost', 'formalnost', 'ironiju'],
    answer: 'toplinu',
    tip: 'Warmth — and a conversational style that reads as female-coded to many ears.',
  },
  {
    mode: 'signali',
    q: 'Jesu li anglizmi pogreška?',
    en: 'Are anglicisms an error?',
    opts: [
      'ne, riječ je o osi dobi i situacije',
      'da, uvijek',
      'da, u govoru ne, u pismu da',
      'ovisi o jeziku iz kojega su',
    ],
    answer: 'ne, riječ je o osi dobi i situacije',
    tip: 'The axis is age and setting, not right and wrong.',
  },
  {
    mode: 'signali',
    q: 'Kako zvuči govornik koji rabi isključivo domaće kovanice?',
    en: 'Someone who uses only native coinages sounds:',
    opts: ['kao dokument', 'kao dijete', 'kao stranac', 'posve neutralno'],
    answer: 'kao dokument',
    tip: 'And one who uses only anglicisms sounds twenty-two. Both are readings, not errors.',
  },
  {
    mode: 'signali',
    q: 'Što signaliziraju riječi turskoga i njemačkoga podrijetla?',
    en: 'Turkish- and German-origin words signal:',
    opts: ['kraj i naraštaj', 'registar', 'obrazovanje', 'formalnost'],
    answer: 'kraj i naraštaj',
    tip: 'Region and generation, more than register.',
  },
  {
    mode: 'signali',
    q: 'Što je krajnji cilj na razini C2?',
    en: 'What is the C2 endpoint?',
    opts: [
      'imati nekoliko hrvatskih i birati među njima',
      'govoriti jedan savršen hrvatski',
      'nikad ne pogriješiti',
      'izbjegavati posuđenice',
    ],
    answer: 'imati nekoliko hrvatskih i birati među njima',
    tip: 'Standard for the report, relaxed for the coffee — chosen, not stumbled into.',
  },

  // ── oslovljavanje ─────────────────────────────────────────────────────────
  {
    mode: 'oslovljavanje',
    q: 'Čime se počinje s nepoznatom osobom?',
    en: 'With someone you do not know, you start with:',
    opts: ['Vi', 'ti', 'ovisi o dobi', 'bez oslovljavanja'],
    answer: 'Vi',
    tip: 'Start with Vi and let the other person move.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Tko predlaže prijelaz na "ti"?',
    en: 'Who proposes the switch to ti?',
    opts: ['stariji ili nadređeni', 'mlađi', 'onaj tko prvi progovori', 'nitko, dogodi se'],
    answer: 'stariji ili nadređeni',
    tip: 'Offering it upward is still theirs to offer first.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Kako glasi taj prijedlog?',
    en: 'How is it phrased?',
    opts: ['Možemo na ti?', 'Hoćemo ti?', 'Idemo na ti?', 'Smijem ti?'],
    answer: 'Možemo na ti?',
    tip: 'The fixed phrase — and it is the whole ceremony.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Gdje se na "ti" prelazi najbrže?',
    en: 'Where does ti arrive fastest?',
    opts: [
      'u tehnologiji, medijima i kreativnim strukama',
      'u državnoj upravi',
      'u zdravstvu',
      'u školstvu',
    ],
    answer: 'u tehnologiji, medijima i kreativnim strukama',
    tip: 'Under forty, often at the first meeting.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Je li se pravilo promijenilo ili praksa?',
    en: 'Has the rule changed, or the practice?',
    opts: ['praksa', 'pravilo', 'oboje', 'ništa'],
    answer: 'praksa',
    tip: 'The line moved; the safe method did not.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Što ako sugovornik prijeđe na "ti", a vi ostanete na "Vi"?',
    en: 'They switch to ti and you stay on Vi:',
    opts: ['stvara se distanca', 'zvuči uljudno', 'nema učinka', 'zvuči toplo'],
    answer: 'stvara se distanca',
    tip: 'Once offered, holding on to Vi reads as keeping the other person at a distance.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Kako se oslovljava profesor u e-poruci prije prvog susreta?',
    en: 'Emailing a professor you have not met:',
    opts: ['Vi, s punim dijakriticima', 'ti, s dijakriticima', 'Vi, bez dijakritika', 'svejedno'],
    answer: 'Vi, s punim dijakriticima',
    tip: 'Both halves matter, and the second is the one learners drop.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Vrijedi li "Vi" i za jednu osobu?',
    en: 'Does Vi apply to one person?',
    opts: [
      'da, to je uljudni oblik za jedninu',
      'ne, samo za više osoba',
      'samo u pismu',
      'samo prema starijima',
    ],
    answer: 'da, to je uljudni oblik za jedninu',
    tip: 'Plural in form, singular in reference — and capitalised in writing.',
  },

  // ── medij ─────────────────────────────────────────────────────────────────
  {
    mode: 'medij',
    q: 'Gdje je izostavljanje dijakritika prihvatljivo?',
    en: 'Where is dropping diacritics acceptable?',
    opts: ['u poruci', 'u e-poruci', 'u izvještaju', 'nigdje'],
    answer: 'u poruci',
    tip: 'Messaging Croatian, and nowhere else.',
  },
  {
    mode: 'medij',
    q: 'Kako se čita izostanak dijakritika u službenoj e-poruci?',
    en: 'Missing diacritics in a formal email read as:',
    opts: ['nemar', 'brzina', 'neformalnost', 'moderno'],
    answer: 'nemar',
    tip: 'Carelessness, not speed — however normal it is in a text message.',
  },
  {
    mode: 'medij',
    q: 'Što je posebno u pisanom hrvatskom na mrežama?',
    en: 'What is distinctive about written Croatian online?',
    opts: [
      'razgovorni registar se legitimno piše',
      'gramatika je drukčija',
      'rječnik je stariji',
      'ništa',
    ],
    answer: 'razgovorni registar se legitimno piše',
    tip: 'The one place the colloquial register is legitimately written down.',
  },
  {
    mode: 'medij',
    q: 'Koja je poruka prikladna kolegi s kojim ste na "ti"?',
    en: 'To a colleague you are on ti with:',
    opts: [
      'Bok, šaljem ti onaj dokument.',
      'Poštovani, u privitku dostavljam.',
      'evo saljem ti dokument',
      'Dostavljam Vam dokument.',
    ],
    answer: 'Bok, šaljem ti onaj dokument.',
    tip: 'Relaxed but still fully written — the middle of the three registers.',
  },
  {
    mode: 'medij',
    q: 'Kako se čita starinski oblik u govoru nasljednog govornika?',
    en: 'An old-fashioned form from a heritage speaker is:',
    opts: ['baština, ne pogreška', 'pogreška', 'utjecaj engleskoga', 'znak neznanja'],
    answer: 'baština, ne pogreška',
    tip: 'It is the language of the place and generation the family left.',
  },
  {
    mode: 'medij',
    q: 'Kako Hrvati obično reagiraju na dijasporski hrvatski?',
    en: 'How do Croatians usually receive diaspora Croatian?',
    opts: ['prepoznaju ga i najčešće toplo', 'ispravljaju ga', 'ne prepoznaju ga', 'ismijavaju ga'],
    answer: 'prepoznaju ga i najčešće toplo',
    tip: 'Immediately, and generally with warmth.',
  },
  {
    mode: 'medij',
    q: 'Što se otvara službenom e-porukom "Poštovani,"?',
    en: 'Poštovani, opens:',
    opts: ['formalno pismo', 'poruku prijatelju', 'objavu na mrežama', 'zdravicu'],
    answer: 'formalno pismo',
    tip: 'V-form, standard, full diacritics — all three travel together.',
  },
  {
    mode: 'medij',
    q: 'Što znači "u privitku"?',
    en: 'What does u privitku mean?',
    opts: ['attached', 'in brief', 'in person', 'in reply'],
    answer: 'attached',
    tip: 'The standard formula: u privitku dostavljam.',
  },
];
