// src/data/drills/c1/prefixedVerbsDrill.ts
//
// C1 PREFIXED VERBS — the drill for the `prefixed-verbs` lesson.
//
// One root, many prefixes: the pisati family (potpisati, propisati, raspisati,
// otpisati…) and the ići family (obići, prijeći, prići, zaći…), the spelling of the
// assimilated prefixes (ispisati, otpisati, potpisati, raspisati) and the new
// imperfective (potpisivati, obilaziti, prelaziti). Every distractor is a real
// prefixed verb with the WRONG meaning for the sentence, or a misspelling / a form
// that does not exist — never a correct alternative.
//
// Three modes:
//   pisati   — the pisati family
//   ici      — the ići family
//   pravopis — spelling and the new imperfective

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PREFIXED_VERBS_MODE_LABELS: Record<string, string> = {
  pisati: '✍️ Pisati',
  ici: '🚶 Ići',
  pravopis: '🔤 Pravopis i vid',
};

export const PREFIXED_VERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── pisati ────────────────────────────────────────────────────────────────
  {
    mode: 'pisati',
    q: 'Molim vas da ____ ugovor na dnu stranice.',
    en: 'Please sign the contract at the bottom of the page.',
    opts: ['potpišete', 'opišete', 'propišete', 'otpišete'],
    answer: 'potpišete',
    tip: 'Signing is writing under the text: pod- + pisati.',
  },
  {
    mode: 'pisati',
    q: 'Zakon ____ da se porez plaća do kraja mjeseca.',
    en: 'The law lays down that the tax is paid by the end of the month.',
    opts: ['propisuje', 'prepisuje', 'upisuje', 'opisuje'],
    answer: 'propisuje',
    tip: 'pro- + pisati: to lay down a rule.',
  },
  {
    mode: 'pisati',
    q: 'Vlada je ____ izbore za proljeće.',
    en: 'The government has called the election for spring.',
    opts: ['raspisala', 'prepisala', 'dopisala', 'zapisala'],
    answer: 'raspisala',
    tip: 'raspisati izbore / natječaj — to call an election, announce a tender.',
  },
  {
    mode: 'pisati',
    q: 'Možeš li mi ____ kako izgleda tvoja nova kuća?',
    en: 'Can you describe what your new house looks like?',
    opts: ['opisati', 'upisati', 'otpisati', 'potpisati'],
    answer: 'opisati',
    tip: 'o- around: to write or speak round something — to describe.',
  },
  {
    mode: 'pisati',
    q: 'Kći je ove godine ____ fakultet u Rijeci.',
    en: 'This year my daughter enrolled at university in Rijeka.',
    opts: ['upisala', 'opisala', 'ispisala', 'propisala'],
    answer: 'upisala',
    tip: 'u- into: to write your name into the register.',
  },
  {
    mode: 'pisati',
    q: 'Banka mu je ____ dio duga.',
    en: 'The bank wrote off part of his debt.',
    opts: ['otpisala', 'potpisala', 'pripisala', 'raspisala'],
    answer: 'otpisala',
    tip: 'od- away, off: otpisati dug.',
  },
  {
    mode: 'pisati',
    q: 'Trener je poraz ____ umoru igrača.',
    en: "The coach put the defeat down to the players' tiredness.",
    opts: ['pripisao', 'propisao', 'prepisao', 'dopisao'],
    answer: 'pripisao',
    tip: 'pri- attaching: pripisati nešto nečemu — to attribute.',
  },
  {
    mode: 'pisati',
    q: 'Brzo ____ adresu prije nego što zaboraviš.',
    en: 'Quickly write the address down before you forget.',
    opts: ['zapiši', 'opiši', 'otpiši', 'propiši'],
    answer: 'zapiši',
    tip: 'za- recording: zapisati — to write down.',
  },

  // ── ici ───────────────────────────────────────────────────────────────────
  {
    mode: 'ici',
    q: 'Prošlog smo ljeta ____ cijelu Istru.',
    en: 'Last summer we toured the whole of Istria.',
    opts: ['obišli', 'otišli', 'ušli', 'sišli'],
    answer: 'obišli',
    tip: 'o- around: obići — to go round, to visit.',
  },
  {
    mode: 'ici',
    q: 'Konobar je ____ našem stolu.',
    en: 'The waiter came up to our table.',
    opts: ['prišao', 'prošao', 'sišao', 'zašao'],
    answer: 'prišao',
    tip: 'pri- towards: prići nekome, with the dative.',
  },
  {
    mode: 'ici',
    q: 'Sunce je ____ iza brda.',
    en: 'The sun has set behind the hill.',
    opts: ['zašlo', 'izašlo', 'došlo', 'ušlo'],
    answer: 'zašlo',
    tip: 'za- behind: the sun goes behind the hill.',
  },
  {
    mode: 'ici',
    q: 'Djeca su ____ niz stepenice do plaže.',
    en: 'The children went down the steps to the beach.',
    opts: ['sišla', 'prišla', 'obišla', 'ušla'],
    answer: 'sišla',
    tip: 's- down: sići niz stepenice.',
  },
  {
    mode: 'ici',
    q: 'Nakon koncerta ljudi su se polako ____.',
    en: 'After the concert people slowly dispersed.',
    opts: ['razišli', 'obišli', 'prišli', 'zašli'],
    answer: 'razišli',
    tip: 'raz- apart: razići se — to disperse.',
  },
  {
    mode: 'ici',
    q: 'Kad ____ most, skrenite desno.',
    en: 'Once you have crossed the bridge, turn right.',
    opts: ['prijeđete', 'priđete', 'siđete', 'zađete'],
    answer: 'prijeđete',
    tip: 'pre- across: prijeći most.',
  },
  {
    mode: 'ici',
    q: 'Uspio je ____ sve prepreke i završiti utrku.',
    en: 'He managed to overcome every obstacle and finish the race.',
    opts: ['nadići', 'sići', 'prići', 'zaći'],
    answer: 'nadići',
    tip: 'nad- over, surpassing: nadići prepreke.',
  },
  {
    mode: 'ici',
    q: 'Ključeve sam ____ ispod tepiha.',
    en: 'I found the keys under the rug.',
    opts: ['našao', 'prošao', 'obišao', 'zašao'],
    answer: 'našao',
    tip: 'na- + ići gives naći — to find.',
  },

  // ── pravopis ──────────────────────────────────────────────────────────────
  {
    mode: 'pravopis',
    q: 'Koji je oblik pravopisno točan?',
    en: 'To sign.',
    opts: ['potpisati', 'podpisati', 'potbisati', 'pod pisati'],
    answer: 'potpisati',
    tip: 'd becomes t before p, and Croatian writes it.',
  },
  {
    mode: 'pravopis',
    q: 'Koji je oblik pravopisno točan?',
    en: 'To write off.',
    opts: ['otpisati', 'odpisati', 'otbisati', 'od pisati'],
    answer: 'otpisati',
    tip: 'od + p is written otp-.',
  },
  {
    mode: 'pravopis',
    q: 'Koji je oblik pravopisno točan?',
    en: 'To print out.',
    opts: ['ispisati', 'izpisati', 'isbisati', 'iz pisati'],
    answer: 'ispisati',
    tip: 'z becomes s before p: iz + pisati → isp-.',
  },
  {
    mode: 'pravopis',
    q: 'Koji je oblik pravopisno točan?',
    en: 'To announce a tender.',
    opts: ['raspisati', 'razpisati', 'rasbisati', 'raz pisati'],
    answer: 'raspisati',
    tip: 'raz + p is written rasp-.',
  },
  {
    mode: 'pravopis',
    q: 'Svako ljeto ____ otoke.',
    en: 'Every summer we go round the islands.',
    opts: ['obilazimo', 'obilasimo', 'obišli', 'obići'],
    answer: 'obilazimo',
    tip: 'A habit is expressed with the new imperfective in -laziti.',
  },
  {
    mode: 'pravopis',
    q: 'Svaki dan ____ ulicu na istom mjestu.',
    en: 'Every day she crosses the street at the same place.',
    opts: ['prelazi', 'prešao', 'prijelazi', 'prijeći'],
    answer: 'prelazi',
    tip: 'The imperfective partner of prijeći is prelaziti, with short e.',
  },
  {
    mode: 'pravopis',
    q: 'Direktorica upravo ____ ugovore.',
    en: 'The director is signing the contracts right now.',
    opts: ['potpisuje', 'potpiše', 'potpisala', 'podpisuje'],
    answer: 'potpisuje',
    tip: 'An action in progress needs the new imperfective potpisivati.',
  },
  {
    mode: 'pravopis',
    q: 'Učenici su dugo ____ zadatke s ploče.',
    en: 'The pupils spent a long time copying the tasks from the board.',
    opts: ['prepisivali', 'prepisali', 'propisivali', 'prepisavali'],
    answer: 'prepisivali',
    tip: 'dugo signals duration: the imperfective prepisivati.',
  },
];
