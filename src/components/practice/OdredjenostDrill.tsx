import React from 'react';
import ModeDrill from './ModeDrill';

// C1 adjective-definiteness drill (C1 tranche 3, 2026-08-15): the
// indefinite/definite opposition (nov/novi) — where each form is required,
// the definite declension with navesci, and the kakav?/koji? meaning split.
const MODE_LABEL: Record<string, string> = {
  oblik: '🎭 Koji vid?',
  padez: '🧩 Sklonidba i navesci',
  znacenje: '💡 Značenje',
};

const DATA = [
  {
    mode: 'oblik',
    q: 'Uz pokaznu zamjenicu dolazi određeni vid: „ovaj ____ kaput”.',
    opts: ['novi', 'nov', 'novoga', 'novim'],
    answer: 'novi',
    en: 'this new coat',
    tip: 'Uz ovaj/taj/onaj uvijek određeni oblik: ovaj novi.',
  },
  {
    mode: 'oblik',
    q: 'Predikatni pridjev stoji u neodređenom vidu: „Kaput je ____.”',
    opts: ['nov', 'novi', 'novoga', 'novome'],
    answer: 'nov',
    en: 'the coat is new',
    tip: 'U predikatu neodređeni vid: kaput je nov.',
  },
  {
    mode: 'oblik',
    q: 'Prvi spomen, birani standard: „Kupio sam ____ auto.”',
    opts: ['nov', 'novi', 'novoga', 'novome'],
    answer: 'nov',
    en: 'I bought a new car',
    tip: 'Nova, prvi put spomenuta stvar → neodređeni vid: nov auto.',
  },
  {
    mode: 'oblik',
    q: 'Naslov bajke: „____ kraljević”.',
    opts: ['Mali', 'Malen', 'Maloga', 'Malom'],
    answer: 'Mali',
    en: 'The Little Prince',
    tip: 'Stalni epitet i naslovi: određeni vid — Mali kraljević.',
  },
  {
    mode: 'oblik',
    q: 'Samo određeni vid imaju pridjevi na:',
    opts: ['-ski (hrvatski)', '-an (dobar)', '-ov (bratov)', '-in (mamin)'],
    answer: '-ski (hrvatski)',
    en: 'which adjectives have only the definite form?',
    tip: 'Odnosni pridjevi na -ski/-nji/-ji: samo određeni vid.',
  },
  {
    mode: 'oblik',
    q: 'Samo NEODREĐENI oblik u N jd. imaju pridjevi:',
    opts: ['posvojni na -ov/-in', 'opisni', 'na -ski', 'redni brojevi'],
    answer: 'posvojni na -ov/-in',
    en: 'which adjectives have only the indefinite nominative?',
    tip: 'Bratov, mamin, sestrin — bez određenoga N oblika.',
  },
  {
    mode: 'oblik',
    q: 'U rječniku se opisni pridjev navodi u ____ vidu.',
    opts: ['neodređenom', 'određenom', 'srednjem', 'množinskom'],
    answer: 'neodređenom',
    en: 'the form dictionaries cite',
    tip: 'Natuknica: dobar, star, nov (neodređeni vid).',
  },
  {
    mode: 'oblik',
    q: 'Redni brojevi imaju ____ vid: „na trećem katu”.',
    opts: ['samo određeni', 'samo neodređeni', 'oba', 'nijedan'],
    answer: 'samo određeni',
    en: 'the form of ordinal numbers',
    tip: 'Treći, peti, stoti — uvijek određena sklonidba.',
  },
  {
    mode: 'padez',
    q: 'Akuzativ za NEŽIVO jednak je nominativu: „Gledam ____ film.”',
    opts: ['novi', 'novoga', 'novom', 'nova'],
    answer: 'novi',
    en: 'I am watching the new film',
    tip: 'Neživo: A = N (gledam novi film).',
  },
  {
    mode: 'padez',
    q: 'Akuzativ za ŽIVO jednak je genitivu: „Vidim ____ psa.”',
    opts: ['crnoga', 'crni', 'crnome', 'crnim'],
    answer: 'crnoga',
    en: 'I see the black dog',
    tip: 'Živo: A = G (vidim crnoga psa).',
  },
  {
    mode: 'padez',
    q: 'Instrumental jednine: „ponosim se ____ uspjehom”.',
    opts: ['velikim', 'velikom', 'velikoga', 'veliki'],
    answer: 'velikim',
    en: 'I take pride in the great success',
    tip: 'I jd. m./sr.: -im (velikim).',
  },
  {
    mode: 'padez',
    q: 'Lokativ jednine ž. roda: „u ____ kući”.',
    opts: ['staroj', 'staroji', 'stare', 'starojoj'],
    answer: 'staroj',
    en: 'in the old house',
    tip: 'DL jd. ž.: -oj (staroj).',
  },
  {
    mode: 'padez',
    q: 'Genitiv množine svih rodova: „bez ____ problema”.',
    opts: ['velikih', 'velikima', 'velikoga', 'velika'],
    answer: 'velikih',
    en: 'without big problems',
    tip: 'G mn.: -ih (velikih).',
  },
  {
    mode: 'padez',
    q: 'Genitiv jednine s naveskom: „iz ____ grada”.',
    opts: ['staroga', 'stara', 'staru', 'starome'],
    answer: 'staroga',
    en: 'from the old town',
    tip: 'G jd. odr. vida: starog(a) — navezak -a je biran.',
  },
  {
    mode: 'padez',
    q: 'Dativ jednine s naveskom: „____ prijatelju”.',
    opts: ['dobrome', 'dobroga', 'dobru', 'dobrih'],
    answer: 'dobrome',
    en: 'to the good friend',
    tip: 'D jd.: dobrom(u/e) — navezak -e/-u.',
  },
  {
    mode: 'padez',
    q: 'Komparativ se sklanja ODREĐENO: „od ____ brata”.',
    opts: ['starijega', 'stariji', 'starijemu', 'starije'],
    answer: 'starijega',
    en: 'than the older brother',
    tip: 'Komparativi i superlativi: uvijek određena sklonidba.',
  },
  {
    mode: 'znacenje',
    q: '„Dobri čovjek” (odr. vid u N) najčešće označuje:',
    opts: [
      'točno određenog, poznatog čovjeka',
      'bilo kojeg dobrog čovjeka',
      'vrlo dobrog čovjeka',
      'ironiju bez iznimke',
    ],
    answer: 'točno određenog, poznatog čovjeka',
    en: 'dobri čovjek (definite form)',
    tip: 'Određeni vid = poznat, već spomenut, jedini takav.',
  },
  {
    mode: 'znacenje',
    q: 'Neodređeni vid odgovara na pitanje:',
    opts: ['kakav?', 'koji?', 'čiji?', 'koliki?'],
    answer: 'kakav?',
    en: 'the question the indefinite form answers',
    tip: 'Kakav je? — nov, star, dobar.',
  },
  {
    mode: 'znacenje',
    q: 'Određeni vid odgovara na pitanje:',
    opts: ['koji?', 'kakav?', 'čiji?', 'što?'],
    answer: 'koji?',
    en: 'the question the definite form answers',
    tip: 'Koji? — novi, stari, dobri.',
  },
  {
    mode: 'znacenje',
    q: '„Stari grad” kao naziv gradske jezgre nosi ____ vid.',
    opts: ['određeni', 'neodređeni', 'oba ravnopravno', 'nijedan'],
    answer: 'određeni',
    en: 'the Old Town (as a proper name)',
    tip: 'Nazivi i imena: određeni vid (Stari grad, Novi Zagreb).',
  },
  {
    mode: 'znacenje',
    q: '„Željan znanja stigao je na studij.” — „željan” je:',
    opts: [
      'neodređeni vid u predikatnom proširku',
      'određeni vid',
      'prilog',
      'glagolski pridjev trpni',
    ],
    answer: 'neodređeni vid u predikatnom proširku',
    en: 'eager for knowledge, he began his studies',
    tip: 'Predikatni proširak traži neodređeni vid: željan, svjestan, pun.',
  },
  {
    mode: 'znacenje',
    q: '„Zdrav čovjek ima tisuću želja, ____ samo jednu.”',
    opts: ['bolestan', 'bolesni', 'bolesnog', 'boleštan'],
    answer: 'bolestan',
    en: 'a healthy man has a thousand wishes, a sick one only one',
    tip: 'Paralelizam neodređenih vidova: zdrav — bolestan.',
  },
  {
    mode: 'znacenje',
    q: 'Uz broj „jedan” dolazi neodređeni vid: „jedan ____ dan”.',
    opts: ['običan', 'obični', 'običnoga', 'običnome'],
    answer: 'običan',
    en: 'one ordinary day',
    tip: 'Jedan (= neki) + neodređeni vid: jedan običan dan.',
  },
  {
    mode: 'znacenje',
    q: '„Pas je gladan” vs „taj ____ pas” — dopuni određenim vidom.',
    opts: ['gladni', 'gladan', 'gladnoga', 'gladnim'],
    answer: 'gladni',
    en: 'the dog is hungry vs that hungry dog',
    tip: 'Uz taj: određeni oblik pridjeva — taj gladni pas (u predikatu: pas je gladan).',
  },
];

export { DATA as ODREDJENOST_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function OdredjenostDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="odredjenost"
      title={'🎭 Nov ili novi?'}
      subtitle={'kakav vs koji — the two faces of every adjective'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — vid pridjeva vam je jasan! 🏆',
        good: 'Vrlo dobro razlikovanje vidova! 💪',
        more: 'Određenost pridjeva traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
