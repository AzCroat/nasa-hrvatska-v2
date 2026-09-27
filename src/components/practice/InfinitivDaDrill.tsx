import React from 'react';
import ModeDrill from './ModeDrill';

// C1 infinitive-vs-da drill (C1 tranche 5, 2026-08-15): standard Croatian
// prefers the infinitive with same-subject verbs (zelim raditi, moram doci,
// futur I) and REQUIRES da + present with different subjects (zelim da
// budes sretan, molim Vas da pricekate).
const MODE_LABEL: Record<string, string> = {
  standard: '📏 Standard',
  daprezent: '🔀 Da + prezent',
  izbor: '⚖️ Izbor',
};

const DATA = [
  {
    mode: 'standard',
    q: 'Birani standard: „Želim ____ .”',
    opts: ['otputovati', 'da otputujem', 'da ću otputovati', 'otputovanje da'],
    answer: 'otputovati',
    en: 'I want to travel (infinitive!)',
    tip: 'Uz isti subjekt hrvatski standard voli INFINITIV.',
  },
  {
    mode: 'standard',
    q: 'Birani standard: „Moram ____ .”',
    opts: ['raditi', 'da radim', 'da ću raditi', 'rad da'],
    answer: 'raditi',
    en: 'I must work',
    tip: 'Modalni glagoli + infinitiv: moram raditi.',
  },
  {
    mode: 'standard',
    q: 'Birani standard: „Počinjem ____ .”',
    opts: ['shvaćati', 'da shvaćam', 'da shvatim', 'shvaćanje'],
    answer: 'shvaćati',
    en: 'I am beginning to understand',
    tip: 'Fazni glagoli + infinitiv: počinjem shvaćati.',
  },
  {
    mode: 'standard',
    q: 'Futur I. u standardu: „Sutra ću ____ .”',
    opts: ['doći', 'da dođem', 'dolazak', 'da ću doći'],
    answer: 'doći',
    en: 'tomorrow I will come',
    tip: 'Futur I. = ću + INFINITIV, nikad ću + da.',
  },
  {
    mode: 'standard',
    q: '„Idem ____.”',
    opts: ['kupovati', 'da kupujem', 'na da kupujem', 'kupovina'],
    answer: 'kupovati',
    en: 'I am going shopping',
    tip: 'Glagoli kretanja + infinitiv namjere.',
  },
  {
    mode: 'standard',
    q: 'Konstrukcija „da + prezent” umjesto infinitiva uz isti subjekt:',
    opts: [
      'obilježje je razgovornoga stila i istočnih idioma',
      'jedina je pravilna',
      'obvezna je u futuru',
      'ne postoji',
    ],
    answer: 'obilježje je razgovornoga stila i istočnih idioma',
    en: 'da-construction is colloquial/eastern',
    tip: 'Standard: želim raditi (ne „želim da radim”).',
  },
  {
    mode: 'standard',
    q: 'Birani standard: „Znam ____ .” (vještina)',
    opts: ['plivati', 'da plivam', 'plivanje', 'za plivati'],
    answer: 'plivati',
    en: 'I can swim',
    tip: 'Znati + infinitiv za vještinu.',
  },
  {
    mode: 'standard',
    q: '„Nemoj ____ !”',
    opts: ['zaboraviti', 'da zaboraviš', 'zaborav', 'da ćeš zaboraviti'],
    answer: 'zaboraviti',
    en: 'do not forget!',
    tip: 'Nemoj + infinitiv (nemoj da zaboraviš = razgovorno).',
  },
  {
    mode: 'daprezent',
    q: '„Želim da ____ sretan.” (ti)',
    opts: ['budeš', 'biti', 'bude ti', 'si bio'],
    answer: 'budeš',
    en: 'I want YOU to be happy',
    tip: 'RAZLIČITI subjekti → obvezno da + prezent.',
  },
  {
    mode: 'daprezent',
    q: 'Kad su subjekti različiti, koristi se:',
    opts: ['da + prezent', 'infinitiv', 'glagolski prilog', 'trpni pridjev'],
    answer: 'da + prezent',
    en: 'different subjects require da + present',
    tip: 'Molim te da dođeš; želim da uspijete.',
  },
  {
    mode: 'daprezent',
    q: '„Rekao mi je ____ dođem.”',
    opts: ['da', 'kako bih', 'za', 'čim'],
    answer: 'da',
    en: 'he told me to come',
    tip: 'Zapovijed u neupravnom govoru: da + prezent.',
  },
  {
    mode: 'daprezent',
    q: '„Molim Vas ____ pričekate.”',
    opts: ['da', 'kako', 'što', 'te'],
    answer: 'da',
    en: 'please wait (lit. I ask that you wait)',
    tip: 'Molba: molim Vas da + prezent.',
  },
  {
    mode: 'daprezent',
    q: '„Predlažem ____ krenemo ranije.”',
    opts: ['da', 'kako bi', 'što', 'jer'],
    answer: 'da',
    en: 'I suggest we leave earlier',
    tip: 'Prijedlog: predlažem da + prezent.',
  },
  {
    mode: 'daprezent',
    q: '„Bolje je ____ ostaneš kod kuće.”',
    opts: ['da', 'nego', 'kako', 'što'],
    answer: 'da',
    en: 'it is better that you stay home',
    tip: 'Bezlični izrazi + da: bolje je da, važno je da.',
  },
  {
    mode: 'daprezent',
    q: '„Bojim se ____ ne zakasnimo.”',
    opts: ['da', 'kako', 'jer', 'što'],
    answer: 'da',
    en: 'I fear we might be late',
    tip: 'Bojati se da (+ ne): strah od mogućnosti.',
  },
  {
    mode: 'daprezent',
    q: '„Dopustite mi ____ se predstavim.”',
    opts: ['da', 'kako', 'što', 'te'],
    answer: 'da',
    en: 'allow me to introduce myself',
    tip: 'Dopustiti da + prezent (uljudna formula).',
  },
  {
    mode: 'izbor',
    q: '„Pokušat ću ____ .” (isti subjekt)',
    opts: ['doći', 'da dođem', 'dolazak', 'da ću doći'],
    answer: 'doći',
    en: 'I will try to come',
    tip: 'Isti subjekt → infinitiv.',
  },
  {
    mode: 'izbor',
    q: '„Tražim od tebe ____ istinu.” (govoriti)',
    opts: ['da govoriš', 'govoriti', 'govorenje', 'da ćeš govoriti'],
    answer: 'da govoriš',
    en: 'I demand that you tell the truth',
    tip: 'Različiti subjekti → da + prezent.',
  },
  {
    mode: 'izbor',
    q: '„Planiramo ____ novu školu.”',
    opts: ['graditi', 'da gradimo', 'gradnja', 'da bismo gradili'],
    answer: 'graditi',
    en: 'we plan to build a new school',
    tip: 'Isti subjekt → infinitiv: planiramo graditi.',
  },
  {
    mode: 'izbor',
    q: '„Očekujem ____ na vrijeme.” (oni — stići)',
    opts: ['da stignu', 'stići', 'stizanje', 'da će stići birano'],
    answer: 'da stignu',
    en: 'I expect them to arrive on time',
    tip: 'Različiti subjekti → da + prezent: očekujem da stignu.',
  },
  {
    mode: 'izbor',
    q: '„Volim ____ ujutro.”',
    opts: ['trčati', 'da trčim', 'trčanje samo', 'da ću trčati'],
    answer: 'trčati',
    en: 'I love running in the morning',
    tip: 'Isti subjekt → infinitiv: volim trčati.',
  },
  {
    mode: 'izbor',
    q: '„Zabranjeno je ____ po travi.”',
    opts: ['hodati', 'da se hoda', 'hodanje da', 'da hodaš'],
    answer: 'hodati',
    en: 'walking on the grass is forbidden',
    tip: 'Bezlične zabrane + infinitiv: zabranjeno je hodati.',
  },
  {
    mode: 'izbor',
    q: '„Savjetujem ti ____ više.” (spavati)',
    opts: ['da spavaš', 'spavati', 'spavanje', 'da ćeš spavati'],
    answer: 'da spavaš',
    en: 'I advise you to sleep more',
    tip: 'Savjet drugoj osobi → da + prezent.',
  },
  {
    mode: 'izbor',
    q: '„Uspio sam ____ ulaznice.”',
    opts: ['nabaviti', 'da nabavim', 'nabava', 'da sam nabavio'],
    answer: 'nabaviti',
    en: 'I managed to get tickets',
    tip: 'Isti subjekt → infinitiv: uspio sam nabaviti.',
  },
];

export { DATA as INFINITIV_DA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function InfinitivDaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="infinitivda"
      title={'🎭 Infinitiv ili da?'}
      subtitle={'želim raditi vs želim da radiš — the same-subject rule'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — izbor je vaš! 🏆',
        good: 'Vrlo dobro vladanje infinitivom i da-rečenicom! 💪',
        more: 'Infinitiv i da-rečenica traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
