import React from 'react';
import ModeDrill from './ModeDrill';

// C1 quantifier-pronouns drill (C1 tranche 6, 2026-08-15): sav (totality;
// svega/svemu), svaki (distributive, singular; svatko standalone), and sam
// (alone / in person / the very; vs samo) with their fixed phrases.
const MODE_LABEL: Record<string, string> = {
  sav: '🌍 Sav',
  svaki: '🔂 Svaki',
  sam: '🧍 Sam',
};

const DATA = [
  {
    mode: 'sav',
    q: '„____ svijet to zna.” (cijeli)',
    opts: ['Sav', 'Svaki', 'Sam', 'Svi'],
    answer: 'Sav',
    en: 'the whole world knows it',
    tip: 'Sav = cijeli: sav svijet, sva zemlja, sve selo.',
  },
  {
    mode: 'sav',
    q: 'Genitiv od „sav” (m. jd.) glasi:',
    opts: ['svega', 'svog', 'sveg svata', 'savog'],
    answer: 'svega',
    en: 'of all/everything',
    tip: 'Sav → svega, svemu, svim(e).',
  },
  {
    mode: 'sav',
    q: '„Pojeo je ____ juhu.” (sva)',
    opts: ['svu', 'savu', 'svaku', 'samu'],
    answer: 'svu',
    en: 'he ate all the soup',
    tip: 'Ž. r. A: svu juhu.',
  },
  {
    mode: 'sav',
    q: 'Množina „svi” u „____ su došli” znači:',
    opts: ['svi ljudi bez iznimke', 'poneki', 'nitko', 'samo neki'],
    answer: 'svi ljudi bez iznimke',
    en: 'everyone came',
    tip: 'Svi = totalitet skupine.',
  },
  {
    mode: 'sav',
    q: '„Radio je ____ dan.”',
    opts: ['cijeli', 'sav', 'svaki', 'sam'],
    answer: 'cijeli',
    en: 'he worked the whole day',
    tip: 'Uz vremenske jedinice birano: cijeli dan (sav dan je razgovorno).',
  },
  {
    mode: 'sav',
    q: 'Dativ od „svi” glasi:',
    opts: ['svima', 'svim ljudi', 'svakima', 'samima svih'],
    answer: 'svima',
    en: 'to everyone',
    tip: 'Svi → svih, svima.',
  },
  {
    mode: 'sav',
    q: '„Uza ____ trud, nije uspjelo.”',
    opts: ['sav', 'svega', 'svem', 'svime'],
    answer: 'sav',
    en: 'despite all the effort',
    tip: 'Uza + A: uza sav trud.',
  },
  {
    mode: 'sav',
    q: '„Sve u svemu” znači:',
    opts: ['ukupno gledano', 'ništa posebno', 'svugdje', 'zauvijek'],
    answer: 'ukupno gledano',
    en: 'all in all',
    tip: 'Ustaljeni izraz sa sav u dva padeža.',
  },
  {
    mode: 'svaki',
    q: '„____ učenik dobiva knjigu.” (pojedinačno)',
    opts: ['Svaki', 'Sav', 'Svi', 'Sam'],
    answer: 'Svaki',
    en: 'each pupil gets a book',
    tip: 'Svaki = pojedinačno, jedan po jedan.',
  },
  {
    mode: 'svaki',
    q: '„Svaki” dolazi uz imenicu u:',
    opts: ['jednini', 'množini', 'dvojini', 'genitivu množine'],
    answer: 'jednini',
    en: 'svaki takes the singular',
    tip: 'Svaki dan, svaka žena, svako dijete.',
  },
  {
    mode: 'svaki',
    q: '„Vidimo se ____ ponedjeljak.”',
    opts: ['svaki', 'svakog', 'svakom', 'svih'],
    answer: 'svaki',
    en: 'see you every Monday',
    tip: 'Vremenski akuzativ: svaki ponedjeljak.',
  },
  {
    mode: 'svaki',
    q: '„Svatko” prema „svaki”:',
    opts: [
      'svatko je samostalan (imenički), svaki uz imenicu',
      'isti su',
      'svatko ide uz imenicu',
      'svaki je prilog',
    ],
    answer: 'svatko je samostalan (imenički), svaki uz imenicu',
    en: 'svatko stands alone; svaki modifies',
    tip: 'Svatko zna; svaki čovjek zna.',
  },
  {
    mode: 'svaki',
    q: 'Genitiv od „svatko” glasi:',
    opts: ['svakoga', 'svatka', 'svačega', 'svakih'],
    answer: 'svakoga',
    en: 'of everyone',
    tip: 'Svatko → svakoga, svakomu.',
  },
  {
    mode: 'svaki',
    q: '„Svako malo” znači:',
    opts: ['često, u kratkim razmacima', 'nikad', 'jedanput', 'pomalo'],
    answer: 'često, u kratkim razmacima',
    en: 'every so often',
    tip: 'Ustaljeni prilog: svako malo netko pokuca.',
  },
  {
    mode: 'svaki',
    q: '„U ____ slučaju, javite se.” (svaki)',
    opts: ['svakom', 'svakome jednino', 'svakih', 'sve'],
    answer: 'svakom',
    en: 'in any case, get in touch',
    tip: 'U svakom slučaju — ustaljena formula.',
  },
  {
    mode: 'svaki',
    q: '„Sa svakim danom sve bolje” pokazuje „svaki” u:',
    opts: ['instrumentalu', 'genitivu', 'nominativu', 'vokativu'],
    answer: 'instrumentalu',
    en: 'with every day, better and better',
    tip: 'Sa svakim danom, sa svakom godinom.',
  },
  {
    mode: 'sam',
    q: '„Došao je ____ .” (bez ikoga)',
    opts: ['sam', 'sav', 'svaki', 'samo'],
    answer: 'sam',
    en: 'he came alone',
    tip: 'Sam = bez pratnje ili osobno.',
  },
  {
    mode: 'sam',
    q: '„____ direktor nas je primio.” (osobno, glavom)',
    opts: ['Sam', 'Sav', 'Svaki', 'Samo'],
    answer: 'Sam',
    en: 'the director himself received us',
    tip: 'Sam = baš on, glavom i bradom.',
  },
  {
    mode: 'sam',
    q: '„Sama” u „Ona to zna sama” znači:',
    opts: ['bez tuđe pomoći', 'jedina žena', 'uvijek', 'odmah'],
    answer: 'bez tuđe pomoći',
    en: 'she knows it by herself',
    tip: 'Sam/sama = samostalno.',
  },
  {
    mode: 'sam',
    q: '„Sam” prema „samo”:',
    opts: ['sam je pridjev, samo je čestica/prilog', 'isti su', 'samo je pridjev', 'sam je veznik'],
    answer: 'sam je pridjev, samo je čestica/prilog',
    en: 'sam (alone) vs samo (only)',
    tip: 'Došao je sam. / Došao je samo on.',
  },
  {
    mode: 'sam',
    q: '„Samoga sebe” pojačava:',
    opts: ['povratnu zamjenicu (sebe)', 'imenicu', 'glagol', 'prilog'],
    answer: 'povratnu zamjenicu (sebe)',
    en: 'his very self',
    tip: 'Krivi samoga sebe — pojačano sebe.',
  },
  {
    mode: 'sam',
    q: '„Sam po sebi” znači:',
    opts: ['po vlastitoj naravi, bez dodatka', 'uz pomoć', 'slučajno', 'na silu'],
    answer: 'po vlastitoj naravi, bez dodatka',
    en: 'in and of itself',
    tip: 'Problem se sam po sebi neće riješiti.',
  },
  {
    mode: 'sam',
    q: '„Ostati sam” i „ostati sam samcat”:',
    opts: [
      'samcat pojačava potpunu samoću',
      'samcat znači sretan',
      'isti su bez razlike',
      'samcat je pogrešno',
    ],
    answer: 'samcat pojačava potpunu samoću',
    en: 'all alone (intensified)',
    tip: 'Sam samcat = potpuno sam.',
  },
  {
    mode: 'sam',
    q: 'U „na samom početku” „sami” znači:',
    opts: ['baš, upravo (na početku)', 'usamljen', 'jedini', 'cijeli'],
    answer: 'baš, upravo (na početku)',
    en: 'at the very beginning',
    tip: 'Sam = točka isticanja: na samom kraju, u samom centru.',
  },
];

export { DATA as SAV_SVAKI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SavSvakiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="savsvaki"
      title={'🧩 Sav, svaki, sam'}
      subtitle={'sav svijet, svaki dan, sam samcat — three little words, three systems'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — razlike su vaše! 🏆',
        good: 'Vrlo dobro vladanje zamjeničkim pridjevima! 💪',
        more: 'Sav, svaki i sam traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
