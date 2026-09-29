import React from 'react';
import ModeDrill from './ModeDrill';
import CaseConceptIntro from './CaseConceptIntro';

const DATA = [
  {
    q: 'Vidim ___.',
    opts: ['brata', 'brat', 'bratu', 'bratom'],
    answer: 'brata',
    en: 'I see my brother.',
    tip: 'Animate masc accusative = genitive form: brat → brata.',
  },
  {
    q: 'Gledam ___.',
    opts: ['stol', 'stola', 'stolu', 'stolom'],
    answer: 'stol',
    en: 'I look at the table.',
    tip: 'Inanimate masc accusative = nominative form: stol stays stol.',
  },
  {
    q: 'Volim ___.',
    opts: ['psa', 'pas', 'psu', 'psom'],
    answer: 'psa',
    en: 'I love the dog.',
    tip: "Animate masc 'pas' has a fleeting -a-; accusative = genitive: psa.",
  },
  {
    q: 'Kupujem ___.',
    opts: ['auto', 'autom', 'auta', 'autu'],
    answer: 'auto',
    en: "I'm buying a car.",
    tip: "'auto' is indeclinable in standard Croatian — accusative = nominative.",
  },
  {
    q: 'Pozivam ___.',
    opts: ['prijatelja', 'prijatelj', 'prijatelju', 'prijateljem'],
    answer: 'prijatelja',
    en: "I'm inviting my friend.",
    tip: 'Animate masc accusative = genitive: prijatelj → prijatelja.',
  },
  {
    q: 'Jedem ___.',
    opts: ['juhu', 'juha', 'juhi', 'juhom'],
    answer: 'juhu',
    en: "I'm eating soup.",
    tip: 'Fem nouns in -a take -u in the accusative: juha → juhu.',
  },
  {
    q: 'Pijem ___.',
    opts: ['kavu', 'kava', 'kavi', 'kavom'],
    answer: 'kavu',
    en: "I'm drinking coffee.",
    tip: 'Fem -a → -u: kava → kavu.',
  },
  {
    q: 'Čitam ___.',
    opts: ['knjigu', 'knjiga', 'knjizi', 'knjigom'],
    answer: 'knjigu',
    en: "I'm reading a book.",
    tip: 'Fem -a → -u: knjiga → knjigu.',
  },
  {
    q: 'Vidim ___ na ulici.',
    opts: ['Anu', 'Ana', 'Ani', 'Anom'],
    answer: 'Anu',
    en: 'I see Ana on the street.',
    tip: 'Fem names ending in -a take -u: Ana → Anu.',
  },
  {
    q: 'Kuham ___.',
    opts: ['večeru', 'večera', 'večeri', 'večerom'],
    answer: 'večeru',
    en: "I'm cooking dinner.",
    tip: 'Fem -a → -u: večera → večeru.',
  },
  {
    q: 'Imam ___.',
    opts: ['sestru', 'sestra', 'sestre', 'sestrom'],
    answer: 'sestru',
    en: 'I have a sister.',
    tip: "'imati' takes the accusative — fem sestra → sestru.",
  },
  {
    q: 'Volim ___ ljeti.',
    opts: ['more', 'mora', 'moru', 'morem'],
    answer: 'more',
    en: 'I love the sea in summer.',
    tip: 'Neut nouns in -e: accusative = nominative: more stays more.',
  },
  {
    q: 'Gradimo ___.',
    opts: ['kuću', 'kuća', 'kuće', 'kućom'],
    answer: 'kuću',
    en: "We're building a house.",
    tip: 'Fem -a → -u: kuća → kuću.',
  },
  {
    q: 'Gledam ___ navečer.',
    opts: ['film', 'filma', 'filmu', 'filmom'],
    answer: 'film',
    en: "I'm watching a movie in the evening.",
    tip: 'Inanimate masc accusative = nominative: film stays film.',
  },
  {
    q: 'Kupujem ___ u pekari.',
    opts: ['kruh', 'kruha', 'kruhu', 'kruhom'],
    answer: 'kruh',
    en: "I'm buying bread at the bakery.",
    tip: 'Inanimate masc accusative = nominative: kruh stays kruh.',
  },
  {
    q: 'Gledamo ___ zajedno.',
    opts: ['televiziju', 'televizija', 'televiziji', 'televizijom'],
    answer: 'televiziju',
    en: "We're watching TV together.",
    tip: 'Fem -a → -u: televizija → televiziju.',
  },
  {
    q: 'Idem u ___.',
    opts: ['školu', 'škola', 'školi', 'školom'],
    answer: 'školu',
    en: "I'm going to school.",
    tip: "'u' with a motion verb takes the accusative — fem škola → školu. Compare 'u školi' (locative, location).",
  },
  {
    q: 'Idem na ___.',
    opts: ['posao', 'posla', 'poslu', 'poslom'],
    answer: 'posao',
    en: "I'm going to work.",
    tip: "'na' with motion takes the accusative — masc 'posao' = nominative in the accusative.",
  },
  {
    q: 'Šetam kroz ___.',
    opts: ['park', 'parka', 'parku', 'parkom'],
    answer: 'park',
    en: 'I walk through the gardens.',
    tip: "'kroz' (through) takes the accusative — masc park = nominative.",
  },
  {
    q: 'Voli ___.',
    opts: ['mene', 'ja', 'mi', 'mnom'],
    answer: 'mene',
    en: 'She loves me.',
    tip: "1st person singular accusative long form: 'mene'. Short clitic form: 'me'.",
  },
  {
    q: 'Čekam ___.',
    opts: ['sina', 'sin', 'sinu', 'sinom'],
    answer: 'sina',
    en: "I'm waiting for my son.",
    tip: 'Animate masc accusative = genitive: sin → sina.',
  },
  {
    q: 'Pozdravljam ___.',
    opts: ['oca', 'otac', 'ocu', 'ocem'],
    answer: 'oca',
    en: 'I greet my father.',
    tip: "Animate masc 'otac' has a fleeting -a-; accusative = genitive: oca.",
  },
  {
    q: 'Slušam ___.',
    opts: ['glazbu', 'glazba', 'glazbi', 'glazbom'],
    answer: 'glazbu',
    en: "I'm listening to music.",
    tip: 'Fem -a → -u: glazba → glazbu.',
  },
  {
    q: 'Pišem ___.',
    opts: ['pismo', 'pisma', 'pismu', 'pismom'],
    answer: 'pismo',
    en: "I'm writing a letter.",
    tip: 'Neut nouns in -o: accusative = nominative: pismo stays pismo.',
  },
  {
    q: 'Pijem ___ ujutro.',
    opts: ['mlijeko', 'mlijeka', 'mlijeku', 'mlijekom'],
    answer: 'mlijeko',
    en: 'I drink milk in the morning.',
    tip: 'Neut accusative = nominative: mlijeko stays mlijeko.',
  },
  {
    q: 'Tražim ___.',
    opts: ['ključ', 'ključa', 'ključu', 'ključem'],
    answer: 'ključ',
    en: "I'm looking for the key.",
    tip: 'Inanimate masc accusative = nominative: ključ stays ključ.',
  },
  {
    q: 'Nosim ___.',
    opts: ['kaput', 'kaputa', 'kaputu', 'kaputom'],
    answer: 'kaput',
    en: "I'm wearing a coat.",
    tip: 'Inanimate masc accusative = nominative: kaput stays kaput.',
  },
  {
    q: 'Hranim ___.',
    opts: ['konja', 'konj', 'konju', 'konjem'],
    answer: 'konja',
    en: "I'm feeding the horse.",
    tip: 'Animate masc accusative = genitive: konj → konja.',
  },
  {
    q: 'Pozivam ___ na zabavu.',
    opts: ['susjeda', 'susjed', 'susjedu', 'susjedom'],
    answer: 'susjeda',
    en: "I'm inviting the neighbour to the party.",
    tip: 'Animate masc accusative = genitive: susjed → susjeda.',
  },
  {
    q: 'Učim ___.',
    opts: ['pjesmu', 'pjesma', 'pjesmi', 'pjesmom'],
    answer: 'pjesmu',
    en: "I'm learning a song.",
    tip: 'Fem -a → -u: pjesma → pjesmu.',
  },
  {
    q: 'Pijem ___ s limunom.',
    opts: ['vodu', 'voda', 'vodi', 'vodom'],
    answer: 'vodu',
    en: 'I drink water with lemon.',
    tip: 'Fem -a → -u: voda → vodu.',
  },
  {
    q: 'Grlim ___.',
    opts: ['majku', 'majka', 'majci', 'majkom'],
    answer: 'majku',
    en: 'I hug my mother.',
    tip: 'Fem -a → -u: majka → majku.',
  },
  {
    q: 'Zovem ___.',
    opts: ['liječnika', 'liječnik', 'liječniku', 'liječnikom'],
    answer: 'liječnika',
    en: "I'm calling the doctor.",
    tip: 'Animate masc accusative = genitive: liječnik → liječnika.',
  },
  {
    q: 'Vozim ___.',
    opts: ['automobil', 'automobila', 'automobilu', 'automobilom'],
    answer: 'automobil',
    en: "I'm driving a car.",
    tip: 'Inanimate masc accusative = nominative: automobil stays automobil.',
  },
  {
    q: 'Čekam ___ na kolodvoru.',
    opts: ['vlak', 'vlaka', 'vlaku', 'vlakom'],
    answer: 'vlak',
    en: "I'm waiting for the train at the station.",
    tip: 'Inanimate masc accusative = nominative: vlak stays vlak.',
  },
  {
    q: 'Jedem ___ za užinu.',
    opts: ['jabuku', 'jabuka', 'jabuci', 'jabukom'],
    answer: 'jabuku',
    en: 'I eat an apple for a snack.',
    tip: 'Fem -a → -u: jabuka → jabuku.',
  },
  {
    q: 'Spremam ___.',
    opts: ['salatu', 'salata', 'salati', 'salatom'],
    answer: 'salatu',
    en: "I'm making a salad.",
    tip: 'Fem -a → -u: salata → salatu.',
  },
  {
    q: 'Šaljem ___.',
    opts: ['poruku', 'poruka', 'poruci', 'porukom'],
    answer: 'poruku',
    en: "I'm sending a message.",
    tip: 'Fem -a → -u: poruka → poruku.',
  },
  {
    q: 'Pričam ___.',
    opts: ['priču', 'priča', 'priči', 'pričom'],
    answer: 'priču',
    en: "I'm telling a story.",
    tip: 'Fem -a → -u: priča → priču.',
  },
  {
    q: 'Pozivam ___ na večeru.',
    opts: ['ženu', 'žena', 'ženi', 'ženom'],
    answer: 'ženu',
    en: "I'm inviting the woman to dinner.",
    tip: 'Fem -a → -u: žena → ženu.',
  },
  {
    q: 'Trebam ___.',
    opts: ['tebe', 'ti', 'tebi', 'tobom'],
    answer: 'tebe',
    en: 'I need you.',
    tip: "2nd person singular accusative long form: 'tebe'. Short clitic form: 'te'.",
  },
  {
    q: 'Poznajem ___.',
    opts: ['njega', 'on', 'njemu', 'njime'],
    answer: 'njega',
    en: 'I know him.',
    tip: "3rd person masc accusative long form: 'njega'. Short clitic form: 'ga'.",
  },
  {
    q: 'Vidim ___ često.',
    opts: ['nju', 'ona', 'njoj', 'njom'],
    answer: 'nju',
    en: 'I see her often.',
    tip: "3rd person fem accusative long form: 'nju'. Short clitic form: 'je/ju'.",
  },
  {
    q: 'Čuvam ___.',
    opts: ['dijete', 'djeteta', 'djetetu', 'djetetom'],
    answer: 'dijete',
    en: "I'm looking after the child.",
    tip: 'Neut accusative = nominative: dijete stays dijete (genitive djeteta).',
  },
  {
    q: 'Pijem ___ uz ribu.',
    opts: ['vino', 'vina', 'vinu', 'vinom'],
    answer: 'vino',
    en: 'I drink wine with fish.',
    tip: 'Neut accusative = nominative: vino stays vino.',
  },
  {
    q: 'Naručujem ___.',
    opts: ['pizzu', 'pizza', 'pizzi', 'pizzom'],
    answer: 'pizzu',
    en: "I'm ordering a pizza.",
    tip: 'Fem -a → -u: pizza → pizzu.',
  },
  {
    q: 'Kupujem ___ za vlak.',
    opts: ['kartu', 'karta', 'karti', 'kartom'],
    answer: 'kartu',
    en: "I'm buying a ticket for the train.",
    tip: 'Fem -a → -u: karta → kartu.',
  },
  {
    q: 'Trčim niz ___.',
    opts: ['ulicu', 'ulica', 'ulici', 'ulicom'],
    answer: 'ulicu',
    en: 'I run down the street.',
    tip: "'niz' (down) takes the accusative — fem ulica → ulicu.",
  },
  {
    q: 'Ovo je za ___.',
    opts: ['nas', 'mi', 'nama', 'nami'],
    answer: 'nas',
    en: 'This is for us.',
    tip: "'za' (for) takes the accusative — 1st person plural accusative 'nas'; short clitic also 'nas'.",
  },
  {
    q: 'Čekamo ___.',
    opts: ['goste', 'gosti', 'gostiju', 'gostima'],
    answer: 'goste',
    en: "We're waiting for the guests.",
    tip: 'Masc animate plural accusative: gosti → goste (accusative plural -e).',
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Fill the blank' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AccusativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="accusative"
      title={'Accusative Case'}
      subtitle={'Direct objects, animate/inanimate, motion prepositions'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Accusative mastered!',
        good: 'Great work! Accusative is essential for direct objects!',
        more: 'Keep practising — accusative marks the direct object of most verbs.',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <CaseConceptIntro conceptId="accusative" onStart={start} />}
      explainType="case_drill"
    />
  );
}
