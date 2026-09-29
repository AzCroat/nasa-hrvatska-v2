import React from 'react';
import ModeDrill from './ModeDrill';

// B2 n/t-stem-nouns drill (B2 tranche 7, 2026-08-15): the n-stems (ime/
// imena, vrijeme/vremena, rame) and t-stems (tele/teleta, young-animal
// nouns with collective plurals in -ad) through their paradigms and in
// sentences.
const MODE_LABEL: Record<string, string> = {
  sklonidba: '📐 Sklonidba',
  mnozina: '👥 Množina',
  recenica: '✍️ U rečenici',
};

const DATA = [
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „ime” glasi:',
    opts: ['imena', 'ima', 'imeta', 'imenu'],
    answer: 'imena',
    en: 'of the name',
    tip: 'N-proširak: ime → imena, imenu, imenom.',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „vrijeme” glasi:',
    opts: ['vremena', 'vrijemena', 'vremeta', 'vremenu'],
    answer: 'vremena',
    en: 'of the time',
    tip: 'Vrijeme → vremena (i kraćenje ije → e).',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „rame” glasi:',
    opts: ['ramena', 'rama', 'rameta', 'ramenu'],
    answer: 'ramena',
    en: 'of the shoulder',
    tip: 'Rame → ramena, ramenu.',
  },
  {
    mode: 'sklonidba',
    q: 'Dativ jednine imenice „ime” glasi:',
    opts: ['imenu', 'imeni', 'imu', 'imenom'],
    answer: 'imenu',
    en: 'to the name',
    tip: 'Ime → imenu (proširena osnova imen-).',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „tele” glasi:',
    opts: ['teleta', 'tela', 'telena', 'teletu'],
    answer: 'teleta',
    en: 'of the calf',
    tip: 'T-proširak: tele → teleta (kao dijete → djeteta).',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „ždrijebe” glasi:',
    opts: ['ždrebeta', 'ždrijeba', 'ždrebena', 'ždrijebeta bez kraćenja'],
    answer: 'ždrebeta',
    en: 'of the foal',
    tip: 'Ždrijebe → ždrebeta (t-proširak + kraćenje).',
  },
  {
    mode: 'sklonidba',
    q: 'Instrumental jednine imenice „vrijeme” glasi:',
    opts: ['vremenom', 'vrijemenom', 'vremenima', 'vremenu'],
    answer: 'vremenom',
    en: 'with time',
    tip: 'S vremenom sve dolazi na svoje.',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv jednine imenice „prezime” glasi:',
    opts: ['prezimena', 'prezima', 'prezimeta', 'prezimenu'],
    answer: 'prezimena',
    en: 'of the surname',
    tip: 'Prezime → prezimena (kao ime).',
  },
  {
    mode: 'mnozina',
    q: 'Nominativ množine imenice „ime” glasi:',
    opts: ['imena', 'imeni', 'imevi', 'imenovi'],
    answer: 'imena',
    en: 'names',
    tip: 'Srednji rod: imena, vremena, ramena.',
  },
  {
    mode: 'mnozina',
    q: 'Genitiv množine imenice „ime” glasi:',
    opts: ['imena', 'imenā bez duljine', 'imenova', 'imeni'],
    answer: 'imena',
    en: 'of the names',
    tip: 'G mn. = N mn. oblikom: imena (s duljinom u izgovoru).',
  },
  {
    mode: 'mnozina',
    q: 'Množina imenice „tele” glasi:',
    opts: ['telad (zbirno)', 'teleta', 'telovi', 'teleti'],
    answer: 'telad (zbirno)',
    en: 'the plural of tele (calf)',
    tip: 'T-proširak u množini bira zbirnu: telad.',
  },
  {
    mode: 'mnozina',
    q: 'Zbirna množina imenice „unuče” glasi:',
    opts: ['unučad (zbirno)', 'unučeta', 'unučevi', 'unuči'],
    answer: 'unučad (zbirno)',
    en: 'grandchildren (collective)',
    tip: 'Unuče → unučad (kao telad, momčad).',
  },
  {
    mode: 'mnozina',
    q: '„Vremena se mijenjaju” — oblik „vremena” je:',
    opts: [
      'nominativ množine',
      'genitiv jednine u množinskoj službi',
      'akuzativ jednine',
      'vokativ',
    ],
    answer: 'nominativ množine',
    en: 'times are changing',
    tip: 'N mn.: vremena se mijenjaju.',
  },
  {
    mode: 'mnozina',
    q: 'Dativ množine od „rame” glasi:',
    opts: ['ramenima', 'ramenama', 'ramenu', 'ramama'],
    answer: 'ramenima',
    en: 'to the shoulders',
    tip: 'DLI mn.: ramenima, imenima, vremenima.',
  },
  {
    mode: 'mnozina',
    q: 'Zbirna množina od „momče” (mladić) je:',
    opts: ['momčad', 'momci', 'momčeta', 'momčevi'],
    answer: 'momčad',
    en: 'the lads / the team',
    tip: 'Momče → momčad — otuda i sportska momčad!',
  },
  {
    mode: 'mnozina',
    q: 'Imenice s t-proširkom najčešće znače:',
    opts: ['mladunčad i maleno', 'strojeve', 'apstraktno', 'zanimanja'],
    answer: 'mladunčad i maleno',
    en: 'what t-stem nouns usually denote',
    tip: 'Tele, pile, štene, dijete, janje — mladunčad.',
  },
  {
    mode: 'recenica',
    q: 'Nema ga već dosta ____ . (vrijeme)',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    en: 'he has been gone quite a while',
    tip: 'Dosta + G: dosta vremena.',
  },
  {
    mode: 'recenica',
    q: 'Zovem te u ____ svih nas.',
    opts: ['ime', 'imenu', 'imena', 'imenom'],
    answer: 'ime',
    en: 'I call you on behalf of us all',
    tip: 'U ime + G — ustaljeni izraz (A oblika ime).',
  },
  {
    mode: 'recenica',
    q: 'Ptica mi je sletjela na ____.',
    opts: ['rame', 'ramenu', 'ramena', 'ramenom'],
    answer: 'rame',
    en: 'a bird landed on my shoulder',
    tip: 'Na + A (smjer): na rame.',
  },
  {
    mode: 'recenica',
    q: 'Nosio je dijete na ____ . (ramena, mn.)',
    opts: ['ramenima', 'ramena', 'ramenama', 'rame'],
    answer: 'ramenima',
    en: 'he carried the child on his shoulders',
    tip: 'Na + L (mjesto): na ramenima.',
  },
  {
    mode: 'recenica',
    q: 'Po lijepom ____ šetali smo uz more. (vrijeme)',
    opts: ['vremenu', 'vremena', 'vrijeme', 'vremenom'],
    answer: 'vremenu',
    en: 'in the fine weather we walked along the sea',
    tip: 'Po + L: po lijepom vremenu.',
  },
  {
    mode: 'recenica',
    q: 'Krava se brine o svojem ____ . (tele)',
    opts: ['teletu', 'teleta', 'tele', 'teletom'],
    answer: 'teletu',
    en: 'the cow looks after its calf',
    tip: 'O + L: o teletu.',
  },
  {
    mode: 'recenica',
    q: 'Oslovili su ga punim ____ . (ime i prezime)',
    opts: ['imenom i prezimenom', 'imena i prezimena', 'ime i prezime', 'imenu i prezimenu'],
    answer: 'imenom i prezimenom',
    en: 'they addressed him by full name',
    tip: 'Instrumental sredstva: imenom i prezimenom.',
  },
  {
    mode: 'recenica',
    q: 'S ____ dolazi i mudrost. (vrijeme)',
    opts: ['vremenom', 'vremena', 'vrijeme', 'vremenu'],
    answer: 'vremenom',
    en: 'with time comes wisdom',
    tip: 'S + I: s vremenom.',
  },
];

export { DATA as IMENICE_ME_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ImeniceMeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="imenicame"
      title={'🐣 Imenice tipa ime'}
      subtitle={'ime/imena, tele/teleta — the nouns that grow a stem'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — proširci su vaši! 🏆',
        good: 'Vrlo dobro vladanje imenicama tipa ime! 💪',
        more: 'Imenice tipa ime traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
