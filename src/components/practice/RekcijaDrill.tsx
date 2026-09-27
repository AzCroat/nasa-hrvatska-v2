import React from 'react';
import ModeDrill from './ModeDrill';

// B2 verb-government drill (B2 tranche 3, 2026-08-15): verbs taking a bare
// genitive (bojati se, sjetiti se, rijesiti se), a bare dative (vjerovati,
// radovati se, pomoci) and fixed prepositional government (ovisiti o + L,
// misliti na + A, sumnjati u + A, slagati se s + I).
const MODE_LABEL: Record<string, string> = {
  genitiv: '🧲 Genitiv',
  dativ: '🎁 Dativ',
  prijedlozna: '🌉 S prijedlogom',
};

const DATA = [
  {
    mode: 'genitiv',
    q: 'Bojim se ____. (mrak)',
    opts: ['mraka', 'mrak', 'mraku', 'mrakom'],
    answer: 'mraka',
    en: 'I am afraid of the dark',
    tip: 'Bojati se + genitiv: bojim se mraka.',
  },
  {
    mode: 'genitiv',
    q: 'Sjetio sam se ____. (tvoje ime)',
    opts: ['tvog imena', 'tvoje ime', 'tvom imenu', 'tvojim imenom'],
    answer: 'tvog imena',
    en: 'I remembered your name',
    tip: 'Sjetiti se + genitiv: sjetiti se imena.',
  },
  {
    mode: 'genitiv',
    q: 'Riješili smo se ____. (stari namještaj)',
    opts: ['starog namještaja', 'stari namještaj', 'starom namještaju', 'starim namještajem'],
    answer: 'starog namještaja',
    en: 'we got rid of the old furniture',
    tip: 'Riješiti se + genitiv.',
  },
  {
    mode: 'genitiv',
    q: 'Klonite se ____! (loše društvo)',
    opts: ['lošeg društva', 'loše društvo', 'lošem društvu', 'lošim društvom'],
    answer: 'lošeg društva',
    en: 'stay away from bad company',
    tip: 'Kloniti se + genitiv.',
  },
  {
    mode: 'genitiv',
    q: 'Nema ____ bez rada. (uspjeh)',
    opts: ['uspjeha', 'uspjeh', 'uspjehu', 'uspjehom'],
    answer: 'uspjeha',
    en: 'no success without work',
    tip: 'Nema + genitiv (niječno postojanje).',
  },
  {
    mode: 'genitiv',
    q: 'Domogli su se ____. (vrh)',
    opts: ['vrha', 'vrh', 'vrhu', 'vrhom'],
    answer: 'vrha',
    en: 'they made it to the top',
    tip: 'Domoći se + genitiv.',
  },
  {
    mode: 'genitiv',
    q: 'Odrekao se ____. (nasljedstvo)',
    opts: ['nasljedstva', 'nasljedstvo', 'nasljedstvu', 'nasljedstvom'],
    answer: 'nasljedstva',
    en: 'he renounced the inheritance',
    tip: 'Odreći se + genitiv.',
  },
  {
    mode: 'genitiv',
    q: 'Najeo sam se ____. (kolači)',
    opts: ['kolača', 'kolače', 'kolačima', 'kolači'],
    answer: 'kolača',
    en: 'I ate my fill of cakes',
    tip: 'Najesti se + genitiv (partitivni genitiv).',
  },
  {
    mode: 'dativ',
    q: 'Vjerujem ____ na riječ. (vi)',
    opts: ['vam', 'vas', 'vama s', 'o vama'],
    answer: 'vam',
    en: 'I take you at your word',
    tip: 'Vjerovati + dativ: vjerujem vam.',
  },
  {
    mode: 'dativ',
    q: 'Radujemo se ____. (tvoj dolazak)',
    opts: ['tvom dolasku', 'tvog dolaska', 'tvoj dolazak', 'tvojim dolaskom'],
    answer: 'tvom dolasku',
    en: 'we look forward to your arrival',
    tip: 'Radovati se + dativ — nikad *radovati se za.',
  },
  {
    mode: 'dativ',
    q: 'Pomogao je ____. (starija gospođa)',
    opts: ['starijoj gospođi', 'stariju gospođu', 'starije gospođe', 'starijom gospođom'],
    answer: 'starijoj gospođi',
    en: 'he helped the elderly lady',
    tip: 'Pomoći + dativ: pomoći komu.',
  },
  {
    mode: 'dativ',
    q: 'Divim se ____. (njezina upornost)',
    opts: ['njezinoj upornosti', 'njezinu upornost', 'njezine upornosti', 'njezinom upornošću'],
    answer: 'njezinoj upornosti',
    en: 'I admire her persistence',
    tip: 'Diviti se + dativ.',
  },
  {
    mode: 'dativ',
    q: 'Nadam se ____. (bolji rezultat)',
    opts: ['boljem rezultatu', 'boljeg rezultata', 'bolji rezultat', 'boljim rezultatom'],
    answer: 'boljem rezultatu',
    en: 'I hope for a better result',
    tip: 'Nadati se + dativ: nadati se čemu.',
  },
  {
    mode: 'dativ',
    q: 'Čudim se ____. (njegova strpljivost)',
    opts: [
      'njegovoj strpljivosti',
      'njegovu strpljivost',
      'njegove strpljivosti',
      'njegovom strpljivošću',
    ],
    answer: 'njegovoj strpljivosti',
    en: 'I marvel at his patience',
    tip: 'Čuditi se + dativ.',
  },
  {
    mode: 'dativ',
    q: 'To ne smeta ____. (nitko)',
    opts: ['nikomu', 'nikoga', 'ni od koga', 'nikim'],
    answer: 'nikomu',
    en: 'that bothers no one',
    tip: 'Smetati + dativ: smeta komu (nikomu).',
  },
  {
    mode: 'dativ',
    q: 'Zahvalite ____ na pomoći. (susjedi, mn.)',
    opts: ['susjedima', 'susjede', 'susjeda', 'o susjedima'],
    answer: 'susjedima',
    en: 'thank the neighbours for their help',
    tip: 'Zahvaliti + dativ (+ na + lokativ).',
  },
  {
    mode: 'prijedlozna',
    q: 'Sve ovisi ____ vremenu.',
    opts: ['o', 'od', 'na', 'u'],
    answer: 'o',
    en: 'everything depends on the weather',
    tip: 'Ovisiti O + lokativ (ne *od).',
  },
  {
    mode: 'prijedlozna',
    q: 'Često mislim ____ tebe.',
    opts: ['na', 'o', 'za', 'u'],
    answer: 'na',
    en: 'I often think of you',
    tip: 'Misliti NA + akuzativ (osobu); misliti o = razmatrati temu.',
  },
  {
    mode: 'prijedlozna',
    q: 'Ona se brine ____ djeci.',
    opts: ['o', 'za', 'na', 'oko'],
    answer: 'o',
    en: 'she takes care of the children',
    tip: 'Brinuti se O + lokativ (skrbiti); brinuti se za = strahovati.',
  },
  {
    mode: 'prijedlozna',
    q: 'Ljutim se ____ brata.',
    opts: ['na', 'o', 'za', 'protiv'],
    answer: 'na',
    en: 'I am angry with my brother',
    tip: 'Ljutiti se NA + akuzativ.',
  },
  {
    mode: 'prijedlozna',
    q: 'Navikao sam se ____ rano ustajanje.',
    opts: ['na', 'o', 'za', 'uz'],
    answer: 'na',
    en: 'I got used to getting up early',
    tip: 'Naviknuti se NA + akuzativ.',
  },
  {
    mode: 'prijedlozna',
    q: 'Sumnjam ____ njegove namjere.',
    opts: ['u', 'na', 'o', 'od'],
    answer: 'u',
    en: 'I doubt his intentions',
    tip: 'Sumnjati U + akuzativ.',
  },
  {
    mode: 'prijedlozna',
    q: 'Slažem se ____ vama.',
    opts: ['s', 'sa', 'na', 'o'],
    answer: 's',
    en: 'I agree with you',
    tip: 'Slagati se S + instrumental; „sa” samo ispred s/š/z/ž.',
  },
  {
    mode: 'prijedlozna',
    q: 'Zaljubio se ____ kolegicu.',
    opts: ['u', 'na', 'za', 's'],
    answer: 'u',
    en: 'he fell in love with a colleague',
    tip: 'Zaljubiti se U + akuzativ.',
  },
];

export { DATA as REKCIJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RekcijaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="rekcija"
      title={'🧭 Glagolska rekcija'}
      subtitle={'bojati se mraka, radovati se dolasku — which case does the verb demand?'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — rekcija je vaša! 🏆',
        good: 'Vrlo dobro vladanje rekcijom! 💪',
        more: 'Glagolska rekcija traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
