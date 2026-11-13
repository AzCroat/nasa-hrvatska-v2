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
//   parovi   — the workbook's twenty prefixes and their aspect pairs, and the d that
//              is NOT changed in writing before s, š, c, č, ć (odseliti, predsjednik)

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PREFIXED_VERBS_MODE_LABELS: Record<string, string> = {
  pisati: '✍️ Pisati',
  ici: '🚶 Ići',
  pravopis: '🔤 Pravopis i vid',
  parovi: '🔁 Prefiksi i parovi',
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
    q: 'Kad ____ do vrha brda, vidjet ćeš more.',
    en: 'When you reach the top of the hill, you will see the sea.',
    opts: ['dođeš', 'siđeš', 'zađeš', 'nađeš'],
    answer: 'dođeš',
    tip: 'do- reaching a point: doći do vrha.',
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

  // ── parovi ────────────────────────────────────────────────────────────────
  {
    mode: 'parovi',
    q: 'Kredit za stan ____ već deset godina.',
    en: 'We have been paying off the mortgage for ten years.',
    opts: ['otplaćujemo', 'otplatimo', 'otplatjujemo', 'odplaćujemo'],
    answer: 'otplaćujemo',
    tip: 'An ongoing process: the imperfective otplaćivati, with t → ć and od- → ot-.',
  },
  {
    mode: 'parovi',
    q: 'Stručnjaci još ____ štetu nakon poplave.',
    en: 'The experts are still assessing the damage after the flood.',
    opts: ['procjenjuju', 'procijene', 'procijenjuju', 'prociješe'],
    answer: 'procjenjuju',
    tip: 'procijeniti → procjenjivati: ije becomes je in the imperfective.',
  },
  {
    mode: 'parovi',
    q: 'Ova me vrućina potpuno ____.',
    en: 'This heat is wearing me out completely.',
    opts: ['iscrpljuje', 'izcrpljuje', 'iscrpuje', 'iscrpi se'],
    answer: 'iscrpljuje',
    tip: 'iz- becomes is- before c, and p becomes plj in iscrpljivati.',
  },
  {
    mode: 'parovi',
    q: 'Nemoj se ____ ako prvi put ne uspiješ.',
    en: 'Do not lose heart if you do not succeed the first time.',
    opts: ['obeshrabriti', 'obezhrabriti', 'oshrabriti', 'ohrabriti'],
    answer: 'obeshrabriti',
    tip: 'obez- becomes obes- before h: obeshrabriti — to take the courage away.',
  },
  {
    mode: 'parovi',
    q: 'Prošle godine su se ____ u Osijek.',
    en: 'Last year they moved away to Osijek.',
    opts: ['odselili', 'otselili', 'oselili', 'odsselili'],
    answer: 'odselili',
    tip: 'd is not changed in writing before s, š, c, č or ć: odseliti.',
  },
  {
    mode: 'parovi',
    q: 'Novi ____ države položio je prisegu.',
    en: 'The new president of the country took the oath.',
    opts: ['predsjednik', 'pretsjednik', 'predjednik', 'presjednik'],
    answer: 'predsjednik',
    tip: 'd stays d before s: pred- + sjednik.',
  },
  {
    mode: 'parovi',
    q: 'Na sastanku moramo se ____ s problemom.',
    en: 'At the meeting we have to face the problem.',
    opts: ['suočiti', 'uočiti', 'uzočiti', 'očiti'],
    answer: 'suočiti',
    tip: 'su- together, face to face: suočiti se s nečim.',
  },
  {
    mode: 'parovi',
    q: 'Na sunčanju joj je koža brzo ____.',
    en: 'While sunbathing her skin went dark quickly.',
    opts: ['potamnjela', 'potamnila', 'potamnjivala', 'potamljela'],
    answer: 'potamnjela',
    tip: 'potamnjeti — to become dark by itself; potamniti takes an object (potamnila je kosu).',
  },
];
