import React from 'react';
import ModeDrill from './ModeDrill';

// C1 approximate-quantities drill (C1 tranche 8, 2026-08-15): the -ak
// approximatives (desetak, stotinjak + G pl), paired numerals (dva-tri,
// tjedan-dva), fractions (pola/polovica, trecina + G, sat i pol) and
// approximation expressions (oko, gotovo, na desetke, saka ljudi).
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  razlomci: '🍕 Razlomci',
  izrazi: '🧭 Izrazi',
};

const DATA = [
  {
    mode: 'tvorba',
    q: '„Desetak” znači:',
    opts: ['otprilike deset', 'točno deset', 'najviše deset', 'deseti po redu'],
    answer: 'otprilike deset',
    en: 'about ten',
    tip: 'Sufiks -ak daje približnost: desetak, dvadesetak.',
  },
  {
    mode: 'tvorba',
    q: 'Približno sto kažemo:',
    opts: ['stotinjak', 'stotina točno', 'stoti', 'postotak'],
    answer: 'stotinjak',
    en: 'about a hundred',
    tip: 'Stotinjak ljudi = oko sto.',
  },
  {
    mode: 'tvorba',
    q: 'Približno petnaest kažemo:',
    opts: ['petnaestak', 'petnaesti', 'petnaestina', 'petnaest ravno'],
    answer: 'petnaestak',
    en: 'about fifteen',
    tip: 'Petnaestak minuta.',
  },
  {
    mode: 'tvorba',
    q: '„Tridesetak godina” znači:',
    opts: ['oko trideset godina', 'točno trideset', 'trideseta godina', 'trećina godine'],
    answer: 'oko trideset godina',
    en: 'around thirty years',
    tip: 'Brojevi na -ak: uvijek približno.',
  },
  {
    mode: 'tvorba',
    q: 'Približnost izričemo i udvajanjem: „dva-____ dana”.',
    opts: ['tri', 'dva', 'četiri-pet uz dva', 'deset'],
    answer: 'tri',
    en: 'two or three days',
    tip: 'Susjedni brojevi sa spojnicom: dva-tri, pet-šest.',
  },
  {
    mode: 'tvorba',
    q: '„Tjedan-dva” znači:',
    opts: ['tjedan ili dva', 'točno dva tjedna', 'pola tjedna', 'svaki drugi tjedan'],
    answer: 'tjedan ili dva',
    en: 'a week or two',
    tip: 'Imenica + broj: tjedan-dva, mjesec-dva.',
  },
  {
    mode: 'tvorba',
    q: 'Iza „desetak” imenica stoji u:',
    opts: ['genitivu množine', 'nominativu množine', 'dativu', 'akuzativu jednine'],
    answer: 'genitivu množine',
    en: 'desetak + G pl',
    tip: 'Desetak studenata, stotinjak kuna.',
  },
  {
    mode: 'tvorba',
    q: '„Šezdesetak” može značiti i dob:',
    opts: [
      'ima šezdesetak godina',
      'šezdeseti rođendan',
      'šesnaest godina',
      'šest desetljeća točno',
    ],
    answer: 'ima šezdesetak godina',
    en: 'he is about sixty',
    tip: 'U šezdesetima / ima šezdesetak godina.',
  },
  {
    mode: 'razlomci',
    q: '„Pola” i „polovica”:',
    opts: [
      'pola je nesklonjivo, polovica se sklanja',
      'isto se sklanjaju',
      'pola je imenica',
      'polovica je prilog',
    ],
    answer: 'pola je nesklonjivo, polovica se sklanja',
    en: 'pola vs polovica',
    tip: 'Pola sata; ali: u prvoj polovici godine.',
  },
  {
    mode: 'razlomci',
    q: '„Trećina glasova” — trećina traži:',
    opts: ['genitiv množine', 'nominativ', 'dativ', 'instrumental'],
    answer: 'genitiv množine',
    en: 'a third of the votes',
    tip: 'Razlomci + G: trećina birača, četvrtina prihoda.',
  },
  {
    mode: 'razlomci',
    q: 'Razlomak 3/4 čitamo:',
    opts: ['tri četvrtine', 'tri četvrta', 'trećina i četvrtina', 'tri kroz četiri jedino'],
    answer: 'tri četvrtine',
    en: 'three quarters',
    tip: 'Brojnik + G mn. razlomka: tri četvrtine.',
  },
  {
    mode: 'razlomci',
    q: '„Poldrug” (star izraz) značio je:',
    opts: ['jedan i pol', 'pola', 'dva', 'četvrt'],
    answer: 'jedan i pol',
    en: 'poldrug = one and a half (archaic)',
    tip: 'Danas: jedan i pol / sat i pol.',
  },
  {
    mode: 'razlomci',
    q: '„Sat i ____ ” (90 minuta)',
    opts: ['pol', 'pola', 'polak', 'polu'],
    answer: 'pol',
    en: 'an hour and a half',
    tip: 'Sat i pol (uz sat: pol, ne pola).',
  },
  {
    mode: 'razlomci',
    q: '„Četvrt” u „četvrt sata” znači:',
    opts: ['15 minuta', '25 minuta', 'pola sata', '5 minuta'],
    answer: '15 minuta',
    en: 'a quarter of an hour',
    tip: 'Četvrt sata, tri četvrt sata.',
  },
  {
    mode: 'razlomci',
    q: '„Napola” u „prerezati napola” znači:',
    opts: ['na dva jednaka dijela', 'djelomično loše', 'odjednom', 'ukoso'],
    answer: 'na dva jednaka dijela',
    en: 'to cut in half',
    tip: 'Napola = na dvije polovice.',
  },
  {
    mode: 'razlomci',
    q: '„Upola jeftinije” znači:',
    opts: ['50 % jeftinije', 'malo jeftinije', 'dvostruko skuplje', 'besplatno'],
    answer: '50 % jeftinije',
    en: 'half the price',
    tip: 'Upola = za polovicu.',
  },
  {
    mode: 'izrazi',
    q: '„Oko” u „oko dvjesto ljudi” izriče:',
    opts: ['približnost', 'krug', 'vid', 'vrijeme jedino'],
    answer: 'približnost',
    en: 'around two hundred people',
    tip: 'Oko + G = otprilike.',
  },
  {
    mode: 'izrazi',
    q: '„Otprilike”, „približno” i „cirka”:',
    opts: [
      'sve znače oko, cirka je razgovorno',
      'cirka je najbiranije',
      'otprilike je pogrešno',
      'približno znači točno',
    ],
    answer: 'sve znače oko, cirka je razgovorno',
    en: 'approximately — register differences',
    tip: 'Birano: približno/otprilike; cirka (ca.) razgovorno-stručno.',
  },
  {
    mode: 'izrazi',
    q: '„Jedva ____ ljudi je došlo.” (vrlo malo)',
    opts: ['nekoliko', 'mnogo', 'stotinjak baš', 'svi'],
    answer: 'nekoliko',
    en: 'barely a few people came',
    tip: 'Jedva nekoliko = razočaravajuće malo.',
  },
  {
    mode: 'izrazi',
    q: '„Preko sto ljudi” u biranom stilu glasi:',
    opts: ['više od sto ljudi', 'preko više sto', 'iznad sto glava', 'sto i kusur'],
    answer: 'više od sto ljudi',
    en: 'more than a hundred (formal)',
    tip: 'Birano: više od (preko je razgovorno).',
  },
  {
    mode: 'izrazi',
    q: '„Gotovo tisuću” znači:',
    opts: ['malo manje od tisuću', 'točno tisuću', 'više od tisuću', 'oko sto'],
    answer: 'malo manje od tisuću',
    en: 'almost a thousand',
    tip: 'Gotovo/skoro = nedostaje malo.',
  },
  {
    mode: 'izrazi',
    q: '„Svaki drugi” znači:',
    opts: ['50 % njih', 'svi', 'rijetki', 'drugi po redu'],
    answer: '50 % njih',
    en: 'every other one',
    tip: 'Svaki drugi student = polovica.',
  },
  {
    mode: 'izrazi',
    q: '„Na desetke prijava” znači:',
    opts: ['deseci prijava (mnogo)', 'točno deset', 'manje od deset', 'deseta prijava'],
    answer: 'deseci prijava (mnogo)',
    en: 'dozens of applications',
    tip: 'Na desetke/na stotine = mnoštvo.',
  },
  {
    mode: 'izrazi',
    q: '„Šaka ljudi” znači:',
    opts: ['vrlo malo ljudi', 'naoružani ljudi', 'velika skupina', 'djeca'],
    answer: 'vrlo malo ljudi',
    en: 'a handful of people',
    tip: 'Šaka = slikovita mala količina.',
  },
];

export { DATA as PRIBLIZNO_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PribliznoDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="priblizno"
      title={'🎯 Približne količine'}
      subtitle={'desetak, dva-tri, pola — the grammar of roughly'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — približnost je vaša! 🏆',
        good: 'Vrlo dobro vladanje približnim količinama! 💪',
        more: 'Približne količine traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
