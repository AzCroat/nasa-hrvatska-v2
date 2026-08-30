// src/data/drills/businessDrill.ts
//
// B2 WORK & THE ECONOMY — the drill for the `business-economy` lesson.
//
// Croatian built its own words for this field, and the borrowings a learner
// already knows are the wrong register or the wrong word entirely. *Dobit* and
// *gubitak*, not *profit*. *Gospodarstvo* is the economy; *ekonomija* is the
// academic discipline, so "the Croatian economy" is *hrvatsko gospodarstvo* and
// nothing else. *Tvrtka* and *poduzeće* are companies; *firma* is spoken and
// *preduzeće* is not Croatian.
//
// The economics itself is worth knowing because it explains the news: tourism
// is around a fifth of output, so *sezona* — with no qualifier — means the
// tourist season, and *Kako je bila sezona?* is a question about the year's
// income rather than the weather.
//
// Three modes:
//   tvrtka   — the company and the contract
//   brojke   — profit, loss and the words the business pages use
//   sezona   — the economy, and why tourism carries it

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const BUSINESS_MODE_LABELS: Record<string, string> = {
  tvrtka: '🏢 Tvrtka',
  brojke: '📈 Dobit i gubitak',
  sezona: '🏖️ Gospodarstvo',
};

export const BUSINESS_DRILL_DATA: ModeDrillItem[] = [
  // ── tvrtka ────────────────────────────────────────────────────────────────
  {
    mode: 'tvrtka',
    q: 'Koja je hrvatska riječ za "company"?',
    en: 'company',
    opts: ['tvrtka', 'firma', 'kompanija', 'ustanova'],
    answer: 'tvrtka',
    tip: 'tvrtka or poduzeće. Firma is spoken and informal.',
  },
  {
    mode: 'tvrtka',
    q: 'Potpisali smo ____. (ugovor)',
    en: 'We signed a contract.',
    opts: ['ugovor', 'ugovora', 'ugovoru', 'ugovorom'],
    answer: 'ugovor',
    tip: 'Accusative after potpisati.',
  },
  {
    mode: 'tvrtka',
    q: 'Što je "poduzetnik"?',
    en: 'What is a poduzetnik?',
    opts: ['entrepreneur', 'employee', 'contractor', 'shareholder'],
    answer: 'entrepreneur',
    tip: 'From poduzeti, to undertake.',
  },
  {
    mode: 'tvrtka',
    q: 'Što je "ponuda"?',
    en: 'What is a ponuda?',
    opts: ['offer, tender', 'order', 'invoice', 'discount'],
    answer: 'offer, tender',
    tip: 'And in economics it is supply — ponuda i potražnja.',
  },
  {
    mode: 'tvrtka',
    q: 'Što je "potražnja"?',
    en: 'What is potražnja?',
    opts: ['demand', 'search', 'request', 'shortage'],
    answer: 'demand',
    tip: 'From tražiti. Ponuda i potražnja is supply and demand.',
  },
  {
    mode: 'tvrtka',
    q: 'Što je "ulaganje"?',
    en: 'What is ulaganje?',
    opts: ['investment', 'deposit', 'insertion', 'contribution'],
    answer: 'investment',
    tip: 'From ulagati — and it is one of the -anje nominalizations.',
  },
  {
    mode: 'tvrtka',
    q: 'Radim u ____. (tvrtka)',
    en: 'I work at a company.',
    opts: ['tvrtki', 'tvrtku', 'tvrtke', 'tvrtkom'],
    answer: 'tvrtki',
    tip: 'u plus the locative: u tvrtki.',
  },
  {
    mode: 'tvrtka',
    q: 'Što je "tržište"?',
    en: 'What is tržište?',
    opts: ['market (economic)', 'marketplace, square', 'shop', 'trade'],
    answer: 'market (economic)',
    tip: 'The physical market is tržnica — one syllable apart.',
  },

  // ── brojke ────────────────────────────────────────────────────────────────
  {
    mode: 'brojke',
    q: 'Koja je hrvatska riječ za "profit"?',
    en: 'profit',
    opts: ['dobit', 'profit', 'zarada od', 'prihod'],
    answer: 'dobit',
    tip: 'dobit. Prihod is revenue — the money in, before costs.',
  },
  {
    mode: 'brojke',
    q: 'Suprotno od "dobit" je ____.',
    en: 'The opposite of profit:',
    opts: ['gubitak', 'trošak', 'dug', 'pad'],
    answer: 'gubitak',
    tip: 'From gubiti. Trošak is a cost, dug a debt.',
  },
  {
    mode: 'brojke',
    q: 'Kojeg je roda "dobit"?',
    en: 'What gender is dobit?',
    opts: ['ženskog, i-sklonidba', 'muškog', 'srednjeg', 'ženskog, a-sklonidba'],
    answer: 'ženskog, i-sklonidba',
    tip: 'Consonant-final feminine — genitive dobiti, instrumental dobiti.',
  },
  {
    mode: 'brojke',
    q: 'Što je "porez"?',
    en: 'What is porez?',
    opts: ['tax', 'fee', 'fine', 'duty on goods'],
    answer: 'tax',
    tip: 'PDV is the VAT — porez na dodanu vrijednost.',
  },
  {
    mode: 'brojke',
    q: 'Što je "proračun"?',
    en: 'What is a proračun?',
    opts: ['budget', 'calculation', 'forecast', 'estimate'],
    answer: 'budget',
    tip: 'From računati. The state budget is državni proračun.',
  },
  {
    mode: 'brojke',
    q: 'Tvrtka je poslovala ____. (with a loss)',
    en: 'The company operated at a loss.',
    opts: ['s gubitkom', 'gubitak', 'gubitka', 'u gubitak'],
    answer: 's gubitkom',
    tip: 'Instrumental with s — poslovati s dobiti or s gubitkom.',
  },
  {
    mode: 'brojke',
    q: 'Što je "nezaposlenost"?',
    en: 'What is nezaposlenost?',
    opts: ['unemployment', 'redundancy', 'a vacancy', 'inactivity'],
    answer: 'unemployment',
    tip: 'Another -ost noun, and so i-declension: stopa nezaposlenosti.',
  },
  {
    mode: 'brojke',
    q: 'Stopa ____ raste. (nezaposlenost)',
    en: 'The unemployment rate is rising.',
    opts: ['nezaposlenosti', 'nezaposlenost', 'nezaposlenosta', 'nezaposlenošću'],
    answer: 'nezaposlenosti',
    tip: 'Genitive of an i-declension noun: -i.',
  },

  // ── sezona ────────────────────────────────────────────────────────────────
  {
    mode: 'sezona',
    q: 'Koja je hrvatska riječ za "the economy"?',
    en: 'the economy',
    opts: ['gospodarstvo', 'ekonomija', 'privreda', 'financije'],
    answer: 'gospodarstvo',
    tip: 'Ekonomija is the academic discipline; gospodarstvo is the economy itself.',
  },
  {
    mode: 'sezona',
    q: 'Što znači "gospodarski rast"?',
    en: 'What is gospodarski rast?',
    opts: ['economic growth', 'business expansion', 'company growth', 'wage growth'],
    answer: 'economic growth',
    tip: 'The adjective from gospodarstvo is gospodarski.',
  },
  {
    mode: 'sezona',
    q: 'Na što se misli kad se kaže samo "sezona"?',
    en: 'What does a bare "sezona" mean?',
    opts: ['turistička sezona', 'godišnje doba', 'sportska sezona', 'sezona berbe'],
    answer: 'turistička sezona',
    tip: 'With no qualifier it is the tourist season — the year measured in income.',
  },
  {
    mode: 'sezona',
    q: 'Što se pita s "Kako je bila sezona?"',
    en: 'What is being asked?',
    opts: [
      'kako je prošla godina financijski',
      'kakvo je bilo vrijeme',
      'gdje ste ljetovali',
      'je li bilo gužve',
    ],
    answer: 'kako je prošla godina financijski',
    tip: 'On the coast the whole year hangs on three months.',
  },
  {
    mode: 'sezona',
    q: 'Što je "izvoz"?',
    en: 'What is izvoz?',
    opts: ['exports', 'imports', 'transit', 'freight'],
    answer: 'exports',
    tip: 'izvoz out, uvoz in — one prefix apart, and the prefixes tell you which.',
  },
  {
    mode: 'sezona',
    q: 'Otprilike koliki udio gospodarstva čini turizam?',
    en: 'Roughly how large is tourism?',
    opts: ['oko petine', 'oko polovice', 'oko trideset posto', 'manje od pet posto'],
    answer: 'oko petine',
    tip: 'Around a fifth — which is why it dominates the business pages.',
  },
  {
    mode: 'sezona',
    q: 'Što je "inflacija"?',
    en: 'What is inflacija?',
    opts: ['inflation', 'deflation', 'devaluation', 'interest'],
    answer: 'inflation',
    tip: 'One of the few international words that stayed.',
  },
  {
    mode: 'sezona',
    q: 'Hrvatska je uvela ____ 2023. (euro)',
    en: 'Croatia adopted the euro in 2023.',
    opts: ['euro', 'eura', 'euru', 'eurom'],
    answer: 'euro',
    tip: 'Accusative after uvesti — and Schengen came the same year.',
  },
];
