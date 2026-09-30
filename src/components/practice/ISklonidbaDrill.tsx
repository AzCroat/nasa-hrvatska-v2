import React from 'react';
import ModeDrill from './ModeDrill';

// C1 i-declension drill (C1 tranche 7, 2026-08-15): the feminine
// consonant-final nouns (noc, stvar, ljubav, -ost abstracts), their
// instrumental jotations (ljubavlju, koscu, rijecju, radoscu) and usage.
const MODE_LABEL: Record<string, string> = {
  padezi: '📐 Padeži',
  rod: '🚺 Rod i vrsta',
  recenice: '✍️ U rečenici',
};

const DATA = [
  {
    mode: 'padezi',
    q: 'Genitiv jednine imenice „noć” glasi:',
    opts: ['noći', 'noća', 'noće', 'noćju'],
    answer: 'noći',
    en: 'of the night',
    tip: 'I-sklonidba: G/D/L/V jd. = -i.',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „ljubav” glasi:',
    opts: ['ljubavlju', 'ljubavu', 'ljubavom', 'ljubavju'],
    answer: 'ljubavlju',
    en: 'with love',
    tip: 'V + j → vlj: ljubavlju (ili ljubavi).',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „riječ” glasi:',
    opts: ['riječju', 'riječem', 'riječom', 'rječju'],
    answer: 'riječju',
    en: 'with a word',
    tip: 'Č + ju: riječju.',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „kost” glasi:',
    opts: ['košću', 'kosću', 'kostom', 'kostju'],
    answer: 'košću',
    en: 'with a bone',
    tip: 'St + j → šć: košću.',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „sol” glasi:',
    opts: ['solju', 'solem', 'solom', 'soljom'],
    answer: 'solju',
    en: 'with salt',
    tip: 'L + j → lj: solju.',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „misao” glasi:',
    opts: ['mišlju', 'misalju', 'misaom', 'mislijom'],
    answer: 'mišlju',
    en: 'with a thought',
    tip: 'Misao, misli → mišlju (sl + j → šlj).',
  },
  {
    mode: 'padezi',
    q: 'Genitiv množine imenice „stvar” glasi:',
    opts: ['stvari', 'stvara', 'stvariju', 'stvarova'],
    answer: 'stvari',
    en: 'of the things',
    tip: 'G mn. i-sklonidbe: -i (stvari, noći, riječi).',
  },
  {
    mode: 'padezi',
    q: 'Instrumental jednine imenice „smrt” glasi:',
    opts: ['smrću', 'smrtu', 'smrtom', 'smrtju'],
    answer: 'smrću',
    en: 'with death',
    tip: 'T + j → ć: smrću.',
  },
  {
    mode: 'rod',
    q: 'Imenice i-sklonidbe (noć, stvar, ljubav) su roda:',
    opts: ['ženskoga', 'muškoga', 'srednjega', 'dvorodne'],
    answer: 'ženskoga',
    en: 'the gender of i-stem nouns',
    tip: 'Ž. rod na suglasnik: ta noć, ta ljubav.',
  },
  {
    mode: 'rod',
    q: '„Glad” u standardu je:',
    opts: ['ženskoga roda (velika glad)', 'muškoga roda samo', 'srednjega roda', 'nesklonjiva'],
    answer: 'ženskoga roda (velika glad)',
    en: 'the gender of glad (hunger)',
    tip: 'Velika glad; G: gladi.',
  },
  {
    mode: 'rod',
    q: 'Pridjev uz „noć”: „____ noć”',
    opts: ['duga', 'dugi', 'dugo', 'dug'],
    answer: 'duga',
    en: 'a long night',
    tip: 'Ž. rod: duga noć, tiha noć.',
  },
  {
    mode: 'rod',
    q: '„Bol” (osjećaj) u biranom standardu je:',
    opts: ['ženskoga roda (duševna bol)', 'samo muškoga', 'srednjega', 'množinska'],
    answer: 'ženskoga roda (duševna bol)',
    en: 'the gender of bol (emotional pain)',
    tip: 'Tjelesni bol (m) / duševna bol (ž) — tradicionalna podjela.',
  },
  {
    mode: 'rod',
    q: 'Uz „mladost”: „____ mladost”',
    opts: ['bezbrižna', 'bezbrižni', 'bezbrižno', 'bezbrižan'],
    answer: 'bezbrižna',
    en: 'carefree youth',
    tip: 'Apstraktne na -ost: ž. rod, i-sklonidba.',
  },
  {
    mode: 'rod',
    q: 'Imenice na „-ost” (radost, mogućnost) sklanjaju se:',
    opts: ['po i-sklonidbi', 'po a-sklonidbi', 'po e-sklonidbi', 'nepravilno'],
    answer: 'po i-sklonidbi',
    en: 'how -ost nouns decline',
    tip: 'Radosti, radošću; mogućnosti, mogućnošću.',
  },
  {
    mode: 'rod',
    q: 'Instrumental od „radost” glasi:',
    opts: ['radošću', 'radostu', 'radostom', 'radostju'],
    answer: 'radošću',
    en: 'with joy',
    tip: 'St + j → šć: radošću.',
  },
  {
    mode: 'rod',
    q: '„Kokoš” je:',
    opts: ['ž. roda, i-sklonidba (kokoši)', 'm. roda', 'sr. roda', 'nesklonjiva'],
    answer: 'ž. roda, i-sklonidba (kokoši)',
    en: 'kokoš (hen): gender and declension',
    tip: 'Kokoš, kokoši, s kokošju.',
  },
  {
    mode: 'recenice',
    q: 'Cijelu ____ nisam spavao.',
    opts: ['noć', 'noći', 'noću', 'noćju'],
    answer: 'noć',
    en: 'I did not sleep all night',
    tip: 'A jd. = N: cijelu noć.',
  },
  {
    mode: 'recenice',
    q: '____ se sve postiže. (ljubav, čime)',
    opts: ['Ljubavlju', 'Ljubavu', 'Ljubav', 'Ljubavom'],
    answer: 'Ljubavlju',
    en: 'with love everything is achieved',
    tip: 'Instrumental sredstva: ljubavlju.',
  },
  {
    mode: 'recenice',
    q: 'Opisao je to lijepim ____ . (riječ, mn.)',
    opts: ['riječima', 'riječi', 'riječju', 'rječima'],
    answer: 'riječima',
    en: 'he described it in beautiful words',
    tip: 'DLI mn.: riječima.',
  },
  {
    mode: 'recenice',
    q: 'Došao je na ____.',
    opts: ['vlast', 'vlasti', 'vlašću', 'vlastu'],
    answer: 'vlast',
    en: 'he came to power',
    tip: 'Na + A: na vlast (i-sklonidba, A = N).',
  },
  {
    mode: 'recenice',
    q: 'Vladao je čvrstom ____ . (vlast)',
    opts: ['vlašću', 'vlastju', 'vlast', 'vlastom'],
    answer: 'vlašću',
    en: 'he ruled with a firm hand (power)',
    tip: 'Instrumental: vlašću.',
  },
  {
    mode: 'recenice',
    q: 'Nema ____ bez slobode. (radost)',
    opts: ['radosti', 'radost', 'radošću', 'radosta'],
    answer: 'radosti',
    en: 'no joy without freedom',
    tip: 'Nema + G: radosti.',
  },
  {
    mode: 'recenice',
    q: 'Suočio se sa ____ . (stvarnost)',
    opts: ['stvarnošću', 'stvarnostju', 'stvarnošćom', 'stvarnost'],
    answer: 'stvarnošću',
    en: 'he faced reality',
    tip: 'Sa + I: sa stvarnošću (sa ispred s-/š-).',
  },
  {
    mode: 'recenice',
    q: 'U ____ smo stigli kući.',
    opts: ['ponoć', 'ponoću', 'ponoćju', 'ponoćom'],
    answer: 'ponoć',
    en: 'we got home at midnight',
    tip: 'U + A za sat: u ponoć, u podne.',
  },
];

export { DATA as I_SKLONIDBA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ISklonidbaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="isklonidba"
      title={'🌙 I-sklonidba'}
      subtitle={'noć, ljubav, riječ — feminine nouns in consonant clothing'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — i-sklonidba je vaša! 🏆',
        good: 'Vrlo dobro vladanje i-sklonidbom! 💪',
        more: 'I-sklonidba traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
