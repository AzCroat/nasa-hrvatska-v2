import React from 'react';
import ModeDrill from './ModeDrill';

// C1 comparisons drill (C1 tranche 8, 2026-08-15): kao sto (real) vs kao
// da (hypothetical) vs poput + G, the stock similes (spava kao top, lije
// kao iz kabla) and comparison syntax (kao case agreement, za razliku od,
// u usporedbi s, toliko...koliko).
const MODE_LABEL: Record<string, string> = {
  kaosto: '🔀 Kao što / kao da',
  ustaljene: '🐺 Ustaljene poredbe',
  sintaksa: '📐 Sintaksa',
};

const DATA = [
  {
    mode: 'kaosto',
    q: '„Sve je prošlo ____ smo planirali.” (stvarno)',
    opts: ['kao što', 'kao da', 'nego što', 'kao kad bi'],
    answer: 'kao što',
    en: 'everything went as we planned',
    tip: 'Kao što + stvarna radnja.',
  },
  {
    mode: 'kaosto',
    q: '„Ponaša se ____ je sve u redu.” (a nije)',
    opts: ['kao da', 'kao što', 'nego što', 'jer'],
    answer: 'kao da',
    en: 'he acts as if everything were fine',
    tip: 'Kao da + prividna/nestvarna usporedba.',
  },
  {
    mode: 'kaosto',
    q: '„Umoran sam ____ pas.” (ustaljena poredba)',
    opts: ['kao', 'kao da', 'nego', 'poput da'],
    answer: 'kao',
    en: 'dog-tired',
    tip: 'Kao + imenica u ustaljenim poredbama.',
  },
  {
    mode: 'kaosto',
    q: '„Pjeva ____ slavuja.” (formalno, + G)',
    opts: ['poput', 'kao', 'nego', 'kao što'],
    answer: 'poput',
    en: 'she sings like a nightingale',
    tip: 'Poput + GENITIV — birana poredba.',
  },
  {
    mode: 'kaosto',
    q: '„Kao da” najčešće prati:',
    opts: ['prezent ili perfekt (kao da spava)', 'imperativ', 'aorist', 'optativ'],
    answer: 'prezent ili perfekt (kao da spava)',
    en: 'kao da takes present or perfect',
    tip: 'Kao da ništa nije bilo.',
  },
  {
    mode: 'kaosto',
    q: '„Grad je ljepši ____ sam pamtio.”',
    opts: ['nego što', 'kao što', 'kao da', 'poput'],
    answer: 'nego što',
    en: 'the city is lovelier than I remembered',
    tip: 'Komparativ + nego što + rečenica.',
  },
  {
    mode: 'kaosto',
    q: '„Bolje išta ____ ništa.” (poslovica)',
    opts: ['nego', 'kao', 'poput', 'već'],
    answer: 'nego',
    en: 'better something than nothing',
    tip: 'Nego u poslovičnim usporedbama.',
  },
  {
    mode: 'kaosto',
    q: '„Radi ____ mrav.” — poredba ističe:',
    opts: ['marljivost', 'veličinu', 'brzinu', 'umor'],
    answer: 'marljivost',
    en: 'works like an ant = industrious',
    tip: 'Ustaljene poredbe nose kulturno značenje.',
  },
  {
    mode: 'ustaljene',
    q: '„Spava kao ____ .” (čvrsto)',
    opts: ['top', 'ptica', 'miš', 'vjetar'],
    answer: 'top',
    en: 'sleeps like a log (lit. cannon)',
    tip: 'Spavati kao top/klada.',
  },
  {
    mode: 'ustaljene',
    q: '„Zdrav kao ____ .”',
    opts: ['dren', 'snijeg', 'duga', 'magla'],
    answer: 'dren',
    en: 'fit as a fiddle (lit. cornel tree)',
    tip: 'Zdrav kao dren — narodna poredba.',
  },
  {
    mode: 'ustaljene',
    q: '„Gladan kao ____ .”',
    opts: ['vuk', 'zec', 'golub', 'list'],
    answer: 'vuk',
    en: 'hungry as a wolf',
    tip: 'Gladan kao vuk.',
  },
  {
    mode: 'ustaljene',
    q: '„Tvrdoglav kao ____ .”',
    opts: ['magarac', 'labud', 'oblak', 'jastuk'],
    answer: 'magarac',
    en: 'stubborn as a mule (donkey)',
    tip: 'Tvrdoglav kao magarac/mazga.',
  },
  {
    mode: 'ustaljene',
    q: '„Crven kao ____ .” (od srama)',
    opts: ['rak', 'ugljen', 'vuk', 'dren'],
    answer: 'rak',
    en: 'red as a lobster (crab)',
    tip: 'Pocrvenjeti kao rak.',
  },
  {
    mode: 'ustaljene',
    q: '„Šuti kao ____ .”',
    opts: ['zaliven', 'izliven', 'naliven', 'proliven'],
    answer: 'zaliven',
    en: 'silent as the grave (lit. as if sealed)',
    tip: 'Šutjeti kao zaliven.',
  },
  {
    mode: 'ustaljene',
    q: '„Lije kao iz ____ .” (jaka kiša)',
    opts: ['kabla', 'čaše', 'rijeke', 'žlice'],
    answer: 'kabla',
    en: 'it is pouring (from a bucket)',
    tip: 'Lije kao iz kabla.',
  },
  {
    mode: 'ustaljene',
    q: '„Sličan ____ jaje jajetu.” (potpuno)',
    opts: ['kao', 'poput', 'nego', 'što'],
    answer: 'kao',
    en: 'as alike as two eggs',
    tip: 'Sličan kao jaje jajetu.',
  },
  {
    mode: 'sintaksa',
    q: '„Poput” traži:',
    opts: ['genitiv', 'akuzativ', 'dativ', 'nominativ'],
    answer: 'genitiv',
    en: 'poput takes the genitive',
    tip: 'Poput oca, poput ptice, poput sna.',
  },
  {
    mode: 'sintaksa',
    q: '„Kao” u „radi kao učitelj” izriče:',
    opts: ['svojstvo/ulogu, ne poredbu', 'poredbu', 'želju', 'uzrok'],
    answer: 'svojstvo/ulogu, ne poredbu',
    en: 'kao = in the capacity of',
    tip: 'Radi kao učitelj = on JE učitelj.',
  },
  {
    mode: 'sintaksa',
    q: '„Kao učitelj” prema „kao učitelju” u „Njemu kao učitelju vjeruju”:',
    opts: [
      'kao se slaže s padežom imenice uz koju stoji',
      'kao uvijek traži nominativ',
      'kao traži genitiv',
      'razlike nema',
    ],
    answer: 'kao se slaže s padežom imenice uz koju stoji',
    en: 'kao agrees in case',
    tip: 'Njemu (D) kao učitelju (D).',
  },
  {
    mode: 'sintaksa',
    q: '„Što se tiče brzine, nitko mu nije ____ .”',
    opts: ['ravan', 'kao', 'poput', 'sličniji nego'],
    answer: 'ravan',
    en: 'no one is his equal in speed',
    tip: 'Biti komu ravan + D.',
  },
  {
    mode: 'sintaksa',
    q: '„Za razliku ____ brata, on je tih.”',
    opts: ['od', 'prema', 's', 'nego'],
    answer: 'od',
    en: 'unlike his brother, he is quiet',
    tip: 'Za razliku od + G.',
  },
  {
    mode: 'sintaksa',
    q: '„U usporedbi ____ prošlom godinom, rast je velik.”',
    opts: ['s', 'od', 'na', 'za'],
    answer: 's',
    en: 'compared with last year',
    tip: 'U usporedbi s + I.',
  },
  {
    mode: 'sintaksa',
    q: '„Naspram” u „naspram njega” znači:',
    opts: ['u odnosu na njega / nasuprot njemu', 'zajedno s njim', 'zbog njega', 'poslije njega'],
    answer: 'u odnosu na njega / nasuprot njemu',
    en: 'naspram = as against',
    tip: 'Naspram + G/D — usporedni odnos.',
  },
  {
    mode: 'sintaksa',
    q: '„Nije toliko pametan ____ je uporan.”',
    opts: ['koliko', 'kao', 'nego da', 'što'],
    answer: 'koliko',
    en: 'not so much smart as persistent',
    tip: 'Toliko…koliko — razmjerna usporedba.',
  },
];

export { DATA as USPOREDBE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function UsporedbeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="usporedbe"
      title={'🪞 Usporedbe'}
      subtitle={'kao da, kao što, poput sna — the art of comparison'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — usporedbe su vaše! 🏆',
        good: 'Vrlo dobro vladanje usporedbama! 💪',
        more: 'Usporedbe traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
