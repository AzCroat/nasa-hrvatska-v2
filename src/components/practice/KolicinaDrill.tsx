import React from 'react';
import ModeDrill from './ModeDrill';

// B2 quantity drill (B2 tranche 6, 2026-08-15): the partitive genitive
// after measures (casa vode, kilogram jabuka), quantity words (malo/dosta/
// previse/nekoliko + G, nema + G) and countability nuances (mnogo vs puno,
// casa vina vs casa za vino, fractions + G pl).
const MODE_LABEL: Record<string, string> = {
  partitiv: '🥛 Partitivni G',
  mjere: '⚖️ Mjere',
  brojivo: '🔢 Brojivo i ne',
};

const DATA = [
  {
    mode: 'partitiv',
    q: 'Popij čašu ____ ! (voda)',
    opts: ['vode', 'vodu', 'vodi', 'vodom'],
    answer: 'vode',
    en: 'drink a glass of water',
    tip: 'Mjera + partitivni genitiv: čaša vode.',
  },
  {
    mode: 'partitiv',
    q: 'Kupi kilogram ____ . (jabuke)',
    opts: ['jabuka', 'jabuke', 'jabukama', 'jabuku'],
    answer: 'jabuka',
    en: 'buy a kilo of apples',
    tip: 'Kilogram + G mn: kilogram jabuka.',
  },
  {
    mode: 'partitiv',
    q: 'Dodaj malo ____ . (sol)',
    opts: ['soli', 'sol', 'solju', 'solima'],
    answer: 'soli',
    en: 'add a little salt',
    tip: 'Malo/mnogo/dosta + genitiv.',
  },
  {
    mode: 'partitiv',
    q: 'Na stolu je komad ____ . (kruh)',
    opts: ['kruha', 'kruh', 'kruhu', 'kruhom'],
    answer: 'kruha',
    en: 'there is a piece of bread on the table',
    tip: 'Komad/kriška/šalica + G.',
  },
  {
    mode: 'partitiv',
    q: 'Imamo dosta ____ . (vrijeme)',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    en: 'we have enough time',
    tip: 'Dosta + G: dosta vremena, dosta posla.',
  },
  {
    mode: 'partitiv',
    q: 'U hladnjaku nema ____ . (mlijeko)',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    en: 'there is no milk in the fridge',
    tip: 'Nema + G (niječno postojanje).',
  },
  {
    mode: 'partitiv',
    q: 'Želite li još ____ ? (juha)',
    opts: ['juhe', 'juhu', 'juhi', 'juhom'],
    answer: 'juhe',
    en: 'would you like more soup?',
    tip: 'Još + partitivni G: još juhe, još kave.',
  },
  {
    mode: 'partitiv',
    q: 'Pojeo je previše ____ . (kolači)',
    opts: ['kolača', 'kolače', 'kolačima', 'kolači'],
    answer: 'kolača',
    en: 'he ate too many cakes',
    tip: 'Previše/premalo + G mn.',
  },
  {
    mode: 'mjere',
    q: 'Litra ____ , molim. (ulje)',
    opts: ['ulja', 'ulje', 'ulju', 'uljem'],
    answer: 'ulja',
    en: 'a litre of oil, please',
    tip: 'Mjerne jedinice + G: litra ulja, metar tkanine.',
  },
  {
    mode: 'mjere',
    q: 'Šalica ____ ujutro je obavezna. (kava)',
    opts: ['kave', 'kavu', 'kavi', 'kavom'],
    answer: 'kave',
    en: 'a cup of coffee in the morning is a must',
    tip: 'Šalica kave, čaša soka.',
  },
  {
    mode: 'mjere',
    q: 'Vrećica ____ , molim. (bomboni)',
    opts: ['bombona', 'bombone', 'bombonima', 'bomboni'],
    answer: 'bombona',
    en: 'a bag of sweets, please',
    tip: 'Vrećica + G mn: vrećica bombona.',
  },
  {
    mode: 'mjere',
    q: 'Buket ____ za rođendan. (ruže)',
    opts: ['ruža', 'ruže', 'ružama', 'ružu'],
    answer: 'ruža',
    en: 'a bouquet of roses for the birthday',
    tip: 'Buket + G mn: buket ruža, buket cvijeća.',
  },
  {
    mode: 'mjere',
    q: 'Nekoliko ____ čekalo je ispred. (putnik)',
    opts: ['putnika', 'putnici', 'putnicima', 'putnike'],
    answer: 'putnika',
    en: 'several passengers waited outside',
    tip: 'Nekoliko + G mn: nekoliko putnika.',
  },
  {
    mode: 'mjere',
    q: 'Većina ____ glasala je za. (zastupnici)',
    opts: ['zastupnika', 'zastupnici', 'zastupnicima', 'zastupnike'],
    answer: 'zastupnika',
    en: 'most representatives voted in favour',
    tip: 'Većina/manjina + G mn.',
  },
  {
    mode: 'mjere',
    q: 'Par ____ i krećemo. (minute)',
    opts: ['minuta', 'minute', 'minutama', 'minutu'],
    answer: 'minuta',
    en: 'a couple of minutes and we are off',
    tip: 'Par + G mn: par minuta.',
  },
  {
    mode: 'mjere',
    q: 'Pola ____ dovoljno je. (sat)',
    opts: ['sata', 'sat', 'satu', 'satom'],
    answer: 'sata',
    en: 'half an hour is enough',
    tip: 'Pola + G jd: pola sata, pola kruha.',
  },
  {
    mode: 'brojivo',
    q: '„Mnogo” ili „puno” u biranom stilu:',
    opts: ['mnogo', 'puno', 'oba nikad', 'hrpa'],
    answer: 'mnogo',
    en: 'many/much — formal choice',
    tip: 'Birano: mnogo ljudi; puno je razgovorno.',
  },
  {
    mode: 'brojivo',
    q: 'Uz brojive imenice „nekoliko” znači:',
    opts: ['neodređen manji broj (3-10)', 'točno tri', 'više od sto', 'ništa'],
    answer: 'neodređen manji broj (3-10)',
    en: 'what nekoliko means with countable nouns',
    tip: 'Nekoliko knjiga = otprilike 3-10.',
  },
  {
    mode: 'brojivo',
    q: '„Malo ljudi” prema „nekoliko ljudi”:',
    opts: [
      'malo naglašava oskudicu',
      'nekoliko naglašava oskudicu',
      'znače isto uvijek',
      'malo znači nula',
    ],
    answer: 'malo naglašava oskudicu',
    en: 'malo ljudi vs nekoliko ljudi',
    tip: 'Malo ljudi je došlo (premalo); nekoliko = neutralno.',
  },
  {
    mode: 'brojivo',
    q: 'Uz brojeve „sto”, „tisuću”, „milijun” imenica stoji u:',
    opts: ['genitivu množine', 'nominativu množine', 'dativu', 'akuzativu jednine'],
    answer: 'genitivu množine',
    en: 'the case after sto, tisuću, milijun',
    tip: 'Sto kuna, tisuću ljudi, milijun razloga.',
  },
  {
    mode: 'brojivo',
    q: '„Čaša vina” prema „čaša za vino”:',
    opts: [
      'prva je sadržaj, druga namjena',
      'prva je namjena, druga sadržaj',
      'znače isto',
      'druga je pogrešna',
    ],
    answer: 'prva je sadržaj, druga namjena',
    en: 'two phrases with čaša',
    tip: 'G = što je unutra; za + A = čemu služi.',
  },
  {
    mode: 'brojivo',
    q: 'Kako pitamo za količinu nebrojivoga?',
    opts: ['Koliko?', 'Koliki?', 'Koji?', 'Čiji?'],
    answer: 'Koliko?',
    en: 'asking about an uncountable quantity',
    tip: 'Koliko vode? Koliko vremena?',
  },
  {
    mode: 'brojivo',
    q: '„Trećina ____ nije glasovala.” (birači)',
    opts: ['birača', 'birači', 'biračima', 'birače'],
    answer: 'birača',
    en: 'a third of the voters did not vote',
    tip: 'Razlomci + G mn: trećina birača, četvrtina prihoda.',
  },
  {
    mode: 'brojivo',
    q: 'Nakon „obilje” dolazi:',
    opts: [
      'genitiv (obilje hrane)',
      'akuzativ (obilje hranu)',
      'dativ (obilje hrani)',
      'instrumental (obilje hranom)',
    ],
    answer: 'genitiv (obilje hrane)',
    en: 'an abundance of food',
    tip: 'Obilje/manjak/višak + G.',
  },
];

export { DATA as KOLICINA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KolicinaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="kolicina"
      title={'🧺 Izricanje količine'}
      subtitle={'čaša vode, kilogram jabuka — the partitive genitive at work'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — količine su vaše! 🏆',
        good: 'Vrlo dobro vladanje količinama! 💪',
        more: 'Izricanje količine traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
