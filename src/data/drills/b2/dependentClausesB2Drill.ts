// src/data/drills/b2/dependentClausesB2Drill.ts
//
// B2 DEPENDENT CLAUSES — the drill for the `dependent-clauses-b2` lesson
// (B2 position 46).
//
// Three modes, eight items each:
//   uzrok   — jer, zato što, budući da (and pošto in its careful meaning, "after")
//   namjera — da + present, kako bi with bih / bi / bismo / biste agreeing
//   nacin   — kao što for manner; ako, kad bi and da for conditions
//
// Synonym sets are never offered together: jer / zato što after the main clause,
// kao što / kako for manner, ako / kad for a real future condition. Causal pošto
// is heard in speech, so it is explained and never offered as a wrong option.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DEPENDENT_CLAUSES_B2_MODE_LABELS: Record<string, string> = {
  uzrok: '❓ Zašto?',
  namjera: '🎯 Zbog čega?',
  nacin: '🧭 Kako? Pod kojim uvjetom?',
};

export const DEPENDENT_CLAUSES_B2_DRILL_DATA: ModeDrillItem[] = [
  // ── uzrok ─────────────────────────────────────────────────────────────────
  {
    mode: 'uzrok',
    q: 'Ostali smo kod kuće ____ je padala kiša.',
    en: 'We stayed at home because it was raining.',
    opts: ['jer', 'kako bi', 'kao što', 'da'],
    answer: 'jer',
    tip: 'A reason after the main clause.',
  },
  {
    mode: 'uzrok',
    q: '____ je film na engleskom, gledat ćemo ga s titlovima.',
    en: 'Since the film is in English, we will watch it with subtitles.',
    opts: ['Jer', 'Budući da', 'Kako bi', 'Kao što'],
    answer: 'Budući da',
    tip: 'The reason opens the sentence: budući da.',
  },
  {
    mode: 'uzrok',
    q: 'Nije došao na posao ____ je bio bolestan.',
    en: 'He did not come to work because he was ill.',
    opts: ['zato što', 'kako bi', 'kao što', 'ako'],
    answer: 'zato što',
    tip: 'zato što follows the main clause and stresses the reason.',
  },
  {
    mode: 'uzrok',
    q: 'Ostali smo unutra ____ hladnoće.',
    en: 'We stayed inside because of the cold.',
    opts: ['jer', 'zbog', 'budući da', 'zato što'],
    answer: 'zbog',
    tip: 'Before a noun, not a clause: zbog + genitive.',
  },
  {
    mode: 'uzrok',
    q: 'In careful Croatian, "Pošto je ručao, legao je" means:',
    opts: [
      'Because he had lunch, he lay down.',
      'After he had lunch, he lay down.',
      'If he has lunch, he will lie down.',
      'Although he had lunch, he lay down.',
    ],
    answer: 'After he had lunch, he lay down.',
    tip: 'pošto is temporal in careful Croatian; "since" is budući da.',
  },
  {
    mode: 'uzrok',
    q: 'Which sentence is correct?',
    opts: [
      'Jer sam bio umoran, otišao sam kući.',
      'Zbog sam bio umoran, otišao sam kući.',
      'Budući da sam bio umoran, otišao sam kući.',
      'Kako bih bio umoran, otišao sam kući.',
    ],
    answer: 'Budući da sam bio umoran, otišao sam kući.',
    tip: 'Budući da may open a sentence; jer may not.',
  },
  {
    mode: 'uzrok',
    q: 'Redatelj je snimao noću ____ je trebao praznu ulicu.',
    en: 'The director filmed at night because he needed an empty street.',
    opts: ['jer', 'kako bi', 'kao što', 'ako'],
    answer: 'jer',
    tip: 'The reason follows the main clause.',
  },
  {
    mode: 'uzrok',
    q: '____ nemam auto, uzet ću taksi.',
    en: 'Since I do not have a car, I will take a taxi.',
    opts: ['Kao što', 'Kako bih', 'Budući da', 'Jer'],
    answer: 'Budući da',
    tip: 'Only budući da can open the sentence with a reason.',
  },

  // ── namjera ───────────────────────────────────────────────────────────────
  {
    mode: 'namjera',
    q: 'Štedim kako ____ kupio stan.',
    en: 'I am saving so that I can buy a flat. (a man speaking)',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'The subject is ja.',
  },
  {
    mode: 'namjera',
    q: 'Štedimo kako ____ kupili stan.',
    en: 'We are saving so that we can buy a flat.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bismo',
    tip: 'The subject is mi.',
  },
  {
    mode: 'namjera',
    q: 'Došli ste ranije kako ____ dobili dobra mjesta.',
    en: 'You (all) came early to get good seats.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'biste',
    tip: 'The subject is vi.',
  },
  {
    mode: 'namjera',
    q: 'Glumica govori tiho kako ____ publika pažljivo slušala.',
    en: 'The actress speaks quietly so that the audience listens carefully.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'publika is third person singular.',
  },
  {
    mode: 'namjera',
    q: 'Došla sam ____ ti pomognem.',
    en: 'I came to help you.',
    opts: ['da', 'jer', 'kao što', 'budući da'],
    answer: 'da',
    tip: 'Purpose with the present tense: da.',
  },
  {
    mode: 'namjera',
    q: 'Učimo hrvatski kako bismo ____ filmove bez titlova.',
    en: 'We are learning Croatian so that we can understand films without subtitles.',
    opts: ['razumjeli', 'razumjeti', 'razumijemo', 'razumjet ćemo'],
    answer: 'razumjeli',
    tip: 'kako bismo + the plural participle.',
  },
  {
    mode: 'namjera',
    q: 'Nazvao sam te da ti ____ rođendan.',
    en: 'I called you to wish you a happy birthday.',
    opts: ['čestitam', 'čestitao', 'čestitati', 'čestitat ću'],
    answer: 'čestitam',
    tip: 'da + the present tense.',
  },
  {
    mode: 'namjera',
    q: 'Oni rade vikendom kako ____ zaradili više.',
    en: 'They work at weekends to earn more.',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bi',
    tip: 'For oni the conditional auxiliary is bi.',
  },

  // ── nacin ─────────────────────────────────────────────────────────────────
  {
    mode: 'nacin',
    q: 'Sve je prošlo ____ smo planirali.',
    en: 'Everything went just as we had planned.',
    opts: ['kao što', 'jer', 'budući da', 'kako bismo'],
    answer: 'kao što',
    tip: 'Manner — just as.',
  },
  {
    mode: 'nacin',
    q: 'Kraj filma bio je upravo ____ sam očekivao.',
    en: 'The end of the film was exactly as I had expected.',
    opts: ['zato što', 'kao što', 'kako bih', 'ako'],
    answer: 'kao što',
    tip: 'kao što describes how something was.',
  },
  {
    mode: 'nacin',
    q: '____ budeš imao vremena, javi se.',
    en: 'If you have time, get in touch.',
    opts: ['Ako', 'Da', 'Jer', 'Kao što'],
    answer: 'Ako',
    tip: 'A real future condition: ako.',
  },
  {
    mode: 'nacin',
    q: '____ imam vremena, išao bih u kino.',
    en: 'If I had time, I would go to the cinema. (but I do not)',
    opts: ['Jer', 'Da', 'Čim', 'Kao što'],
    answer: 'Da',
    tip: 'An unreal condition: da + present, conditional main clause.',
  },
  {
    mode: 'nacin',
    q: 'Kad bih imala više vremena, ____ na svaki festival.',
    en: 'If I had more time, I would go to every festival. (a woman speaking)',
    opts: ['išla bih', 'idem', 'išla sam', 'ići ću'],
    answer: 'išla bih',
    tip: 'After kad bih, the main clause is conditional too.',
  },
  {
    mode: 'nacin',
    q: 'Ako karte ____ rasprodane, gledat ćemo film kod kuće.',
    en: 'If the tickets are sold out, we will watch a film at home.',
    opts: ['budu', 'bi', 'bili', 'će'],
    answer: 'budu',
    tip: 'Future II after ako: budu + the participle.',
  },
  {
    mode: 'nacin',
    q: 'Which sentence states a condition that is NOT true now?',
    opts: [
      'Ako imam vremena, doći ću.',
      'Kad budem imao vremena, doći ću.',
      'Da imam vremena, došao bih.',
      'Kad imam vremena, dolazim.',
    ],
    answer: 'Da imam vremena, došao bih.',
    tip: 'da + present with a conditional main clause: unreal.',
  },
  {
    mode: 'nacin',
    q: 'Budući da nemam auto, uzet ću taksi kako ____ stigao na premijeru.',
    en: 'Since I have no car, I will take a taxi so that I get to the premiere. (a man speaking)',
    opts: ['bi', 'bih', 'bismo', 'biste'],
    answer: 'bih',
    tip: 'Two dependent clauses: the purpose agrees with ja.',
  },
];
