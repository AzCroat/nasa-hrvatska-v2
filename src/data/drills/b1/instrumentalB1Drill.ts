// src/data/drills/b1/instrumentalB1Drill.ts
//
// B1 instrumental — the drill for the `instrumental` lesson (B1-13).
//
// It practises exactly what that lesson teaches, and nothing from later lessons:
// the bare instrumental of a tool or means (pisati olovkom, putovati vlakom), s/sa
// + the instrumental for company (s Anom, sa sestrom), the place prepositions pod,
// nad, pred, za and među for where something is, and the -ao/-eo nouns posao,
// ugao, anđeo (poslom, za uglom). The instrumental after postati or smatrati is a
// B2 topic, and the verbs that take it (baviti se, ponositi se…) come two lessons
// later, so neither appears here.
//
// Four modes:
//   sredstvo — a tool or means, no preposition
//   drustvo  — s / sa + instrumental for company
//   mjesto   — pod, nad, pred, za, među + instrumental
//   posao    — posao, ugao, orao, anđeo

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INSTRUMENTAL_B1_MODE_LABELS: Record<string, string> = {
  sredstvo: '✏️ Čime?',
  drustvo: '👫 S kim?',
  mjesto: '📍 Pod, nad, pred',
  posao: '💼 Posao → poslom',
};

export const INSTRUMENTAL_B1_DRILL_DATA: ModeDrillItem[] = [
  // ── sredstvo ──────────────────────────────────────────────────────────────
  {
    mode: 'sredstvo',
    q: 'Pišem pismo ____. (olovka)',
    en: 'I am writing a letter with a pencil.',
    opts: ['olovkom', 's olovkom', 'olovku', 'olovki'],
    answer: 'olovkom',
    tip: 'A tool takes the bare instrumental — no s.',
  },
  {
    mode: 'sredstvo',
    q: 'Na posao putujem ____. (vlak)',
    en: 'I travel to work by train.',
    opts: ['vlakom', 'vlak', 'vlaku', 's vlakom'],
    answer: 'vlakom',
    tip: 'A means of transport: bare instrumental, -om.',
  },
  {
    mode: 'sredstvo',
    q: 'Mogu li platiti ____? (kartica)',
    en: 'Can I pay by card?',
    opts: ['karticom', 'karticu', 'kartici', 's karticom'],
    answer: 'karticom',
    tip: 'How you pay is the means: karticom.',
  },
  {
    mode: 'sredstvo',
    q: 'Reži kruh ____, ne rukama. (nož)',
    en: 'Cut the bread with a knife, not with your hands.',
    opts: ['nožem', 'nožom', 'nož', 's nožom'],
    answer: 'nožem',
    tip: 'nož ends in the soft ž, so the ending is -em.',
  },
  {
    mode: 'sredstvo',
    q: 'Svaki dan idem u grad ____. (tramvaj)',
    en: 'Every day I go into town by tram.',
    opts: ['tramvajem', 'tramvajom', 'tramvaju', 'tramvaj'],
    answer: 'tramvajem',
    tip: 'After the soft j the masculine ending is -em.',
  },
  {
    mode: 'sredstvo',
    q: 'Juhu jedemo ____. (žlica)',
    en: 'We eat soup with a spoon.',
    opts: ['žlicom', 'žlicu', 'žlice', 'sa žlicom'],
    answer: 'žlicom',
    tip: 'The spoon is the tool — no preposition.',
  },
  {
    mode: 'sredstvo',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct?',
    opts: [
      'Platit ću gotovinom.',
      'Platit ću s gotovinom.',
      'Platit ću gotovinu.',
      'Platit ću gotovina.',
    ],
    answer: 'Platit ću gotovinom.',
    tip: 'Cash is the means: gotovinom, with no s.',
  },

  // ── drustvo ───────────────────────────────────────────────────────────────
  {
    mode: 'drustvo',
    q: 'Idem u kino ____. (Ana)',
    en: 'I am going to the cinema with Ana.',
    opts: ['s Anom', 'sa Anom', 's Ana', 'Anom'],
    answer: 's Anom',
    tip: 'Company needs s; sa only before s, š, z, ž.',
  },
  {
    mode: 'drustvo',
    q: 'Živim ____. (sestra)',
    en: 'I live with my sister.',
    opts: ['sa sestrom', 's sestrom', 'sa sestru', 'sestrom'],
    answer: 'sa sestrom',
    tip: 'sestra begins with s, so the preposition is sa.',
  },
  {
    mode: 'drustvo',
    q: 'Razgovaram ____. (prijatelj)',
    en: 'I am talking with a friend.',
    opts: ['s prijateljem', 's prijateljom', 's prijatelja', 'prijateljem'],
    answer: 's prijateljem',
    tip: 'prijatelj ends in a soft consonant: -em.',
  },
  {
    mode: 'drustvo',
    q: 'Pijem kavu s ____. (mlijeko)',
    en: 'I drink coffee with milk.',
    opts: ['mlijekom', 'mlijekem', 'mlijeko', 'mlijeka'],
    answer: 'mlijekom',
    tip: 'Neuter nouns in -o take -om.',
  },
  {
    mode: 'drustvo',
    q: 'Ljeto provodimo s ____. (prijatelji)',
    en: 'We spend the summer with friends.',
    opts: ['prijateljima', 'prijateljem', 'prijatelja', 'prijatelji'],
    answer: 'prijateljima',
    tip: 'The instrumental plural ends in -ima.',
  },
  {
    mode: 'drustvo',
    q: 'Idemo na koncert sa ____. (Zoran)',
    en: 'We are going to the concert with Zoran.',
    opts: ['Zoranom', 'Zoranem', 'Zoran', 'Zorana'],
    answer: 'Zoranom',
    tip: 'sa before z; a masculine name takes -om.',
  },
  {
    mode: 'drustvo',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct?',
    opts: ['Idem s bratom.', 'Idem sa bratom.', 'Idem s brat.', 'Idem bratom.'],
    answer: 'Idem s bratom.',
    tip: 'Company needs s, and brat starts with b, so not sa.',
  },

  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Mačka spava pod ____. (krevet)',
    en: 'The cat is sleeping under the bed.',
    opts: ['krevetom', 'krevet', 'krevetu', 'kreveta'],
    answer: 'krevetom',
    tip: 'pod for where something is takes the instrumental.',
  },
  {
    mode: 'mjesto',
    q: 'Ptice lete nad ____. (more)',
    en: 'Birds are flying over the sea.',
    opts: ['morem', 'morom', 'moru', 'more'],
    answer: 'morem',
    tip: 'nad + instrumental; neuter -e becomes -em.',
  },
  {
    mode: 'mjesto',
    q: 'Čekam te pred ____. (kino)',
    en: 'I will wait for you in front of the cinema.',
    opts: ['kinom', 'kino', 'kinu', 'kina'],
    answer: 'kinom',
    tip: 'pred (in front of) + instrumental.',
  },
  {
    mode: 'mjesto',
    q: 'Među ____ se osjećam dobro. (prijatelji)',
    en: 'Among friends I feel good.',
    opts: ['prijateljima', 'prijatelji', 'prijatelja', 'prijateljem'],
    answer: 'prijateljima',
    tip: 'među (among) + instrumental plural.',
  },
  {
    mode: 'mjesto',
    q: 'Nad ____ su tamni oblaci. (grad)',
    en: 'There are dark clouds over the city.',
    opts: ['gradom', 'grad', 'gradu', 'grada'],
    answer: 'gradom',
    tip: 'nad + instrumental: gradom.',
  },
  {
    mode: 'mjesto',
    q: 'Auto stoji pred ____. (kuća)',
    en: 'The car is in front of the house.',
    opts: ['kućom', 'kuću', 'kući', 'kuće'],
    answer: 'kućom',
    tip: 'pred for a position: instrumental, -om.',
  },
  {
    mode: 'mjesto',
    q: 'Koji prijedlog znači "among"?',
    en: 'Which preposition means "among"?',
    opts: ['među', 'pod', 'nad', 'pred'],
    answer: 'među',
    tip: 'pod is under, nad over, pred in front of.',
  },

  // ── posao ─────────────────────────────────────────────────────────────────
  {
    mode: 'posao',
    q: 'Danas imam puno ____. (posao)',
    en: 'Today I have a lot of work.',
    opts: ['posla', 'posao', 'posaa', 'poslom'],
    answer: 'posla',
    tip: 'puno takes the genitive; posao drops its a and gets an l back.',
  },
  {
    mode: 'posao',
    q: 'Pekara je za ____. (ugao)',
    en: 'The bakery is round the corner.',
    opts: ['uglom', 'ugaom', 'ugao', 'uglu'],
    answer: 'uglom',
    tip: 'za + instrumental; ugao → ugla, uglom.',
  },
  {
    mode: 'posao',
    q: 'Koji je instrumental od "posao"?',
    en: 'What is the instrumental of posao?',
    opts: ['poslom', 'posaom', 'posalom', 'posaoom'],
    answer: 'poslom',
    tip: 'Every form but the nominative has posl-.',
  },
  {
    mode: 'posao',
    q: 'Nad selom leti ____. (eagle)',
    en: 'An eagle is flying over the village.',
    opts: ['orao', 'orla', 'oralo', 'orlom'],
    answer: 'orao',
    tip: 'The eagle is the subject here, so it stays in the nominative: orao.',
  },
  {
    mode: 'posao',
    q: 'Moja sestra je pravi ____. (angel)',
    en: 'My sister is a real angel.',
    opts: ['anđeo', 'anđel', 'anđela', 'anđelom'],
    answer: 'anđeo',
    tip: 'After biti the nominative: anđeo. The other forms keep the e: anđela, anđelom.',
  },
  {
    mode: 'posao',
    q: 'Koji je genitiv od "anđeo"?',
    en: 'What is the genitive of anđeo?',
    opts: ['anđela', 'anđla', 'anđea', 'anđeoa'],
    answer: 'anđela',
    tip: 'In -eo nouns the e stays and the l comes back: anđela, pepela.',
  },
  {
    mode: 'posao',
    q: 'Kako vam idu ____? (posao, plural)',
    en: 'How is business going for you?',
    opts: ['poslovi', 'posaovi', 'posli', 'posla'],
    answer: 'poslovi',
    tip: 'The plural is poslovi, built on posl-.',
  },
];
