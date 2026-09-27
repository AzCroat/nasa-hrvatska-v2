import React from 'react';
import ModeDrill from './ModeDrill';
import CaseConceptIntro from './CaseConceptIntro';

export const DATA = [
  {
    q: 'Idem na posao ___.',
    opts: ['autom', 'auta', 'auto', 'autu'],
    answer: 'autom',
    en: 'I go to work by car.',
    tip: "Instrumental shows means: auto + -m → autom. 'Ići autom' = to go by car",
  },
  {
    q: 'Putujemo ___ u Split.',
    opts: ['vlakom', 'vlak', 'vlaka', 'vlaku'],
    answer: 'vlakom',
    en: 'We are travelling to Split by train.',
    tip: 'Instrumental of means: vlak + -om → vlakom',
  },
  {
    q: 'Piše ___.',
    opts: ['olovkom', 'olovka', 'olovki', 'olovke'],
    answer: 'olovkom',
    en: 'She writes with a pencil.',
    tip: 'Instrumental shows instrument: olovka → drop -a + -om → olovkom',
  },
  {
    q: 'Letim ___ u Amsterdam.',
    opts: ['avionom', 'avion', 'aviona', 'avionu'],
    answer: 'avionom',
    en: 'I fly to Amsterdam by plane.',
    tip: 'Instrumental of means: avion + -om → avionom',
  },
  {
    q: 'Razgovaram s ___.',
    opts: ['prijateljem', 'prijatelja', 'prijatelj', 'prijatelju'],
    answer: 'prijateljem',
    en: 'I am talking with a friend.',
    tip: 's + instrumental: prijatelj (soft -lj) → -em ending: prijateljem',
  },
  {
    q: 'Idem s ___.',
    opts: ['mamom', 'mama', 'mame', 'mami'],
    answer: 'mamom',
    en: 'I am going with my mom.',
    tip: 's + instrumental: mama (fem -a) → drop -a + -om → mamom',
  },
  {
    q: 'Razgovaram s ___.',
    opts: ['bratom', 'brata', 'brat', 'bratu'],
    answer: 'bratom',
    en: 'I am talking with my brother.',
    tip: 's + instrumental: brat + -om → bratom',
  },
  {
    q: 'Igram se sa ___.',
    opts: ['psom', 'pas', 'psa', 'psu'],
    answer: 'psom',
    en: 'I am playing with the dog.',
    tip: "sa + instrumental: pas → psa stem → psom. 'Sa' before consonant clusters",
  },
  {
    q: 'Bavim se ___.',
    opts: ['sportom', 'sport', 'sporta', 'sportu'],
    answer: 'sportom',
    en: 'I do sports. (I am engaged in sport.)',
    tip: "'baviti se' takes instrumental: sport + -om → sportom",
  },
  {
    q: 'Ona se bavi ___.',
    opts: ['glazbom', 'glazba', 'glazbe', 'glazbi'],
    answer: 'glazbom',
    en: 'She is engaged in music.',
    tip: "'baviti se' + instrumental: glazba (fem) → drop -a + -om → glazbom",
  },
  {
    q: 'Bavi se ___.',
    opts: ['glumom', 'gluma', 'glume', 'glumi'],
    answer: 'glumom',
    en: 'She is engaged in acting.',
    tip: "'baviti se' + instrumental: gluma → drop -a + -om → glumom",
  },
  {
    q: 'Želi postati ___.',
    opts: ['liječnikom', 'liječnik', 'liječnika', 'liječniku'],
    answer: 'liječnikom',
    en: 'He wants to become a doctor.',
    tip: "'postati' + instrumental for professions: liječnik + -om → liječnikom",
  },
  {
    q: 'Postala je ___.',
    opts: ['učiteljicom', 'učiteljica', 'učiteljice', 'učiteljici'],
    answer: 'učiteljicom',
    en: 'She became a teacher.',
    tip: "'postati' + instrumental: učiteljica (fem) → drop -a + -om → učiteljicom",
  },
  {
    q: 'Radim ___.',
    opts: ['noću', 'noć', 'noći', 'noćom'],
    answer: 'noću',
    en: 'I work at night.',
    tip: "Temporal instrumental: noć (fem consonant noun) → -u → noću. 'Noću' = at night",
  },
  {
    q: 'Šetamo ___.',
    opts: ['šumom', 'šuma', 'šume', 'šumi'],
    answer: 'šumom',
    en: 'We walk through the forest.',
    tip: "Instrumental for path: šuma + -om → šumom. 'Ići šumom' = to walk through the forest",
  },
  {
    q: 'Smatram ga ___.',
    opts: ['prijateljem', 'prijatelja', 'prijatelj', 'prijatelju'],
    answer: 'prijateljem',
    en: 'I consider him a friend.',
    tip: "'Smatrati' (to consider) takes instrumental for the predicate: prijatelj → prijateljem",
  },
  {
    q: 'Dolaze ___.',
    opts: ['biciklom', 'bicikl', 'bicikla', 'biciklu'],
    answer: 'biciklom',
    en: 'They are coming by bicycle.',
    tip: 'Instrumental of means: bicikl + -om → biciklom',
  },
  {
    q: 'Pijem kavu s ___.',
    opts: ['mlijekom', 'mlijeko', 'mlijeka', 'mlijeku'],
    answer: 'mlijekom',
    en: 'I drink coffee with milk.',
    tip: 's + instrumental: mlijeko (neut) → drop -o + -om → mlijekom',
  },
  {
    q: 'Reže ___.',
    opts: ['nožem', 'nož', 'noža', 'nožu'],
    answer: 'nožem',
    en: 'He cuts with a knife.',
    tip: 'Instrumental of instrument: nož (soft -ž) → -em ending: nožem',
  },
  {
    q: 'Putuje ___ svaki dan.',
    opts: ['autobusom', 'autobus', 'autobusa', 'autobusu'],
    answer: 'autobusom',
    en: 'He travels by bus every day.',
    tip: 'Instrumental of means: autobus + -om → autobusom',
  },
  // ── 2026-07 depth expansion (+30): more patterns + PLURAL forms ──
  {
    q: 'Pišem zadaću ___.',
    opts: ['olovkom', 'olovka', 'olovku', 'olovci'],
    answer: 'olovkom',
    en: 'I write my homework with a pencil.',
    tip: 'Instrument/means: olovka + -om → olovkom.',
  },
  {
    q: 'Režem kruh ___.',
    opts: ['nožem', 'nož', 'noža', 'nožu'],
    answer: 'nožem',
    en: 'I cut bread with a knife.',
    tip: 'Soft-stem masculine takes -em: nož → nožem.',
  },
  {
    q: 'Vraćamo se kući ___.',
    opts: ['tramvajem', 'tramvaj', 'tramvaja', 'tramvaju'],
    answer: 'tramvajem',
    en: 'We return home by tram.',
    tip: 'Means of transport, soft-stem -j takes -em: tramvaj → tramvajem.',
  },
  {
    q: 'Idem u kino s ___.',
    opts: ['prijateljem', 'prijatelja', 'prijatelj', 'prijatelju'],
    answer: 'prijateljem',
    en: 'I am going to the cinema with a friend.',
    tip: 'Accompaniment: s + instrumental. Soft-stem -lj takes -em: prijatelj → prijateljem.',
  },
  {
    q: 'Razgovaram sa ___.',
    opts: ['sestrom', 'sestra', 'sestru', 'sestri'],
    answer: 'sestrom',
    en: 'I am talking with my sister.',
    tip: "Before s/š/z/ž use 'sa': sa sestrom. Feminine -a → -om.",
  },
  {
    q: 'Baka miješa juhu ___.',
    opts: ['žlicom', 'žlica', 'žlicu', 'žlici'],
    answer: 'žlicom',
    en: 'Grandma stirs the soup with a spoon.',
    tip: 'Instrument: žlica → žlicom.',
  },
  {
    q: 'On crta ___.',
    opts: ['kredom', 'kreda', 'kredu', 'kredi'],
    answer: 'kredom',
    en: 'He draws with chalk.',
    tip: 'kreda → kredom (feminine -a → -om).',
  },
  {
    q: 'Ponosim se svojim ___.',
    opts: ['gradom', 'grad', 'grada', 'gradu'],
    answer: 'gradom',
    en: 'I am proud of my city.',
    tip: "'Ponositi se' governs the instrumental: grad → gradom.",
  },
  {
    q: 'Moj brat se bavi ___.',
    opts: ['plivanjem', 'plivanje', 'plivanja', 'plivanju'],
    answer: 'plivanjem',
    en: 'My brother does swimming.',
    tip: "'Baviti se' + instrumental: plivanje → plivanjem.",
  },
  {
    q: 'Vlada upravlja ___.',
    opts: ['državom', 'država', 'državu', 'državi'],
    answer: 'državom',
    en: 'The government governs the state.',
    tip: "'Upravljati' + instrumental: država → državom.",
  },
  {
    q: 'Susjed maše ___.',
    opts: ['rukom', 'ruka', 'ruku', 'ruci'],
    answer: 'rukom',
    en: 'The neighbour waves his hand.',
    tip: "'Mahati' + instrumental: ruka → rukom.",
  },
  {
    q: 'Zimi se grijemo ___.',
    opts: ['drvima', 'drva', 'drvo', 'drvu'],
    answer: 'drvima',
    en: 'In winter we heat with wood (logs).',
    tip: 'PLURAL instrumental: drva (n. pl.) → drvima.',
  },
  {
    q: 'Djeca se igraju ___.',
    opts: ['igračkama', 'igračke', 'igračaka', 'igračkom'],
    answer: 'igračkama',
    en: 'The children play with toys.',
    tip: 'PLURAL feminine: igračke → igračkama (-ama).',
  },
  {
    q: 'Putujemo s ___.',
    opts: ['roditeljima', 'roditelji', 'roditelja', 'roditelje'],
    answer: 'roditeljima',
    en: 'We travel with our parents.',
    tip: 'PLURAL masculine: roditelji → roditeljima (-ima).',
  },
  {
    q: 'Djeca crtaju ___.',
    opts: ['bojicama', 'bojice', 'bojica', 'bojici'],
    answer: 'bojicama',
    en: 'The children draw with crayons.',
    tip: 'PLURAL feminine: bojice → bojicama.',
  },
  {
    q: 'Razgovaramo s ___.',
    opts: ['učiteljima', 'učitelji', 'učitelja', 'učitelje'],
    answer: 'učiteljima',
    en: 'We are talking with the teachers.',
    tip: 'PLURAL: učitelji → učiteljima.',
  },
  {
    q: 'Stol je prekriven ___.',
    opts: ['knjigama', 'knjige', 'knjiga', 'knjizi'],
    answer: 'knjigama',
    en: 'The table is covered with books.',
    tip: 'PLURAL feminine: knjige → knjigama.',
  },
  {
    q: 'Idemo na izlet s ___.',
    opts: ['djecom', 'djeca', 'djece', 'djeci'],
    answer: 'djecom',
    en: 'We are going on a trip with the children.',
    tip: "Collective 'djeca' declines as feminine singular: djeca → djecom.",
  },
  {
    q: 'Jedemo juhu ___.',
    opts: ['žlicama', 'žlice', 'žlica', 'žlici'],
    answer: 'žlicama',
    en: 'We eat soup with spoons.',
    tip: 'PLURAL: žlice → žlicama.',
  },
  {
    q: 'Selo je okruženo ___.',
    opts: ['brdima', 'brda', 'brdo', 'brdu'],
    answer: 'brdima',
    en: 'The village is surrounded by hills.',
    tip: 'PLURAL neuter: brda → brdima.',
  },
  {
    q: 'Mažem kruh ___.',
    opts: ['maslacem', 'maslac', 'maslaca', 'maslacu'],
    answer: 'maslacem',
    en: 'I spread the bread with butter.',
    tip: 'Stems in -c take -em: maslac → maslacem.',
  },
  {
    q: 'Slikarica slika ___.',
    opts: ['kistom', 'kist', 'kista', 'kistu'],
    answer: 'kistom',
    en: 'The painter paints with a brush.',
    tip: 'Instrument: kist → kistom.',
  },
  {
    q: 'Vozimo se ___ po jezeru.',
    opts: ['brodom', 'brod', 'broda', 'brodu'],
    answer: 'brodom',
    en: 'We ride a boat on the lake.',
    tip: 'Transport: brod → brodom.',
  },
  {
    q: 'On je postao ___.',
    opts: ['liječnikom', 'liječnik', 'liječnika', 'liječniku'],
    answer: 'liječnikom',
    en: 'He became a doctor.',
    tip: "'Postati' takes the instrumental for the new role: liječnik → liječnikom.",
  },
  {
    q: 'Smatram ga dobrim ___.',
    opts: ['čovjekom', 'čovjek', 'čovjeka', 'čovjeku'],
    answer: 'čovjekom',
    en: 'I consider him a good man.',
    tip: "'Smatrati koga čime' — the predicate takes instrumental: čovjek → čovjekom.",
  },
  {
    q: 'Prije spavanja perem zube ___.',
    opts: ['četkicom', 'četkica', 'četkicu', 'četkici'],
    answer: 'četkicom',
    en: 'Before sleeping I brush my teeth with a toothbrush.',
    tip: 'četkica → četkicom.',
  },
  {
    q: 'Šetamo ___ uz more.',
    opts: ['stazom', 'staza', 'stazu', 'stazi'],
    answer: 'stazom',
    en: 'We walk along the path by the sea.',
    tip: 'Path traversed: staza → stazom (instrumental of route).',
  },
  {
    q: 'Nedjeljom putujemo ___.',
    opts: ['autobusom', 'autobus', 'autobusa', 'autobusu'],
    answer: 'autobusom',
    en: 'On Sundays we travel by bus.',
    tip: 'autobus → autobusom. (Note: nedjeljom = instrumental of recurring time!)',
  },
  {
    q: 'Zadovoljna sam svojim ___.',
    opts: ['poslom', 'posao', 'posla', 'poslu'],
    answer: 'poslom',
    en: 'I am satisfied with my job.',
    tip: "'Zadovoljan' + instrumental. Fleeting -a-: posao → poslom.",
  },
  {
    q: 'Vikend provodimo s ___.',
    opts: ['bakama i djedovima', 'bake i djedovi', 'baka i djedova', 'bakama i djedovi'],
    answer: 'bakama i djedovima',
    en: 'We spend the weekend with our grandmas and grandpas.',
    tip: 'PLURAL pair: bake → bakama, djedovi → djedovima.',
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Fill the blank' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function InstrumentalDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="instrumental"
      title={'🔧 Instrumental Case'}
      subtitle={'With s/sa, means of transport, baviti se, postati'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Instrumental mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — instrumental will click!',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <CaseConceptIntro conceptId="instrumental" onStart={start} />}
      explainType="case_drill"
    />
  );
}
