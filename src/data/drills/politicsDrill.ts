// src/data/drills/politicsDrill.ts
//
// B2 POLITICS & SOCIETY — the drill for the `politics-society` lesson.
//
// Two things stop a learner following Croatian political reporting, and only
// one of them is vocabulary.
//
// The institution is the *Sabor*. Not *parlament* — the word exists but is not
// what anyone says or writes, so a reader looking for "parliament" in a
// headline will not find it. Same for *Vlada* (the Government, capitalised) and
// *predsjednik Vlade* for the prime minister, which is a different person from
// the *predsjednik*.
//
// The grammatical trap is *izbori*, which has NO SINGULAR. *Izbori su
// održani* — plural noun, plural verb, plural participle, always. A learner
// producing *izbor je* has said "the choice is", which is a different word doing
// a different job.
//
// Three modes:
//   institucije — Sabor, Vlada, and who is who
//   izbori      — elections, and the plural that has no singular
//   drustvo     — parties, laws and the EU

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const POLITICS_MODE_LABELS: Record<string, string> = {
  institucije: '🏛️ Institucije',
  izbori: '🗳️ Izbori',
  drustvo: '⚖️ Zakoni i EU',
};

export const POLITICS_DRILL_DATA: ModeDrillItem[] = [
  // ── institucije ───────────────────────────────────────────────────────────
  {
    mode: 'institucije',
    q: 'Kako se zove hrvatski parlament?',
    en: 'The Croatian parliament is:',
    opts: ['Sabor', 'Parlament', 'Skupština', 'Vijeće'],
    answer: 'Sabor',
    tip: 'The word parlament exists but is not what anyone writes.',
  },
  {
    mode: 'institucije',
    q: 'Tko vodi Vladu?',
    en: 'Who leads the Government?',
    opts: ['predsjednik Vlade', 'predsjednik', 'ministar', 'župan'],
    answer: 'predsjednik Vlade',
    tip: 'Also premijer. The predsjednik alone is the President of the Republic.',
  },
  {
    mode: 'institucije',
    q: 'Sabor je ____ zakon.',
    en: 'Parliament passed the law.',
    opts: ['izglasao', 'izglasala', 'izglasalo', 'izglasali'],
    answer: 'izglasao',
    tip: 'Sabor is masculine singular.',
  },
  {
    mode: 'institucije',
    q: 'Vlada je ____ prijedlog.',
    en: 'The Government submitted the proposal.',
    opts: ['podnijela', 'podnio', 'podnijelo', 'podnijeli'],
    answer: 'podnijela',
    tip: 'Vlada is feminine singular — the agreement is the giveaway in headlines.',
  },
  {
    mode: 'institucije',
    q: 'Što je "Ustavni sud"?',
    en: 'What is the Ustavni sud?',
    opts: ['Constitutional Court', 'Supreme Court', 'High Court', 'Court of Audit'],
    answer: 'Constitutional Court',
    tip: 'From ustav, the constitution.',
  },
  {
    mode: 'institucije',
    q: 'Tko vodi županiju?',
    en: 'Who heads a county?',
    opts: ['župan', 'gradonačelnik', 'ministar', 'zastupnik'],
    answer: 'župan',
    tip: 'A gradonačelnik heads a city. Croatia has twenty županije plus Zagreb.',
  },
  {
    mode: 'institucije',
    q: 'Što je "ministarstvo"?',
    en: 'What is a ministarstvo?',
    opts: ['a ministry', 'a minister', 'a mandate', 'a cabinet meeting'],
    answer: 'a ministry',
    tip: 'The person is a ministar; the department a ministarstvo.',
  },
  {
    mode: 'institucije',
    q: 'Zastupnik sjedi u ____. (Sabor)',
    en: 'An MP sits in parliament.',
    opts: ['Saboru', 'Sabor', 'Sabora', 'Saborom'],
    answer: 'Saboru',
    tip: 'u plus the locative.',
  },

  // ── izbori ────────────────────────────────────────────────────────────────
  {
    mode: 'izbori',
    q: '____ su održani u nedjelju.',
    en: 'The elections were held on Sunday.',
    opts: ['Izbori', 'Izbor', 'Izbora', 'Izborima'],
    answer: 'Izbori',
    tip: 'Izbori has NO singular in this meaning — plural throughout.',
  },
  {
    mode: 'izbori',
    q: 'Izbori ____ održani.',
    en: 'The elections were held.',
    opts: ['su', 'je', 'će', 'bi'],
    answer: 'su',
    tip: 'Plural noun, plural auxiliary. Izbor je would be "the choice is".',
  },
  {
    mode: 'izbori',
    q: 'Što znači "izbor" u jednini?',
    en: 'What does the singular izbor mean?',
    opts: ['a choice, a selection', 'one election', 'a candidate', 'a ballot'],
    answer: 'a choice, a selection',
    tip: 'A different word doing a different job — which is why the plural matters.',
  },
  {
    mode: 'izbori',
    q: 'Idem ____ izbore.',
    en: 'I am going to vote.',
    opts: ['na', 'u', 'za', 'po'],
    answer: 'na',
    tip: 'ići na izbore — na plus the accusative plural.',
  },
  {
    mode: 'izbori',
    q: 'Što je "birač"?',
    en: 'What is a birač?',
    opts: ['voter', 'candidate', 'polling clerk', 'ballot paper'],
    answer: 'voter',
    tip: 'From birati, to choose.',
  },
  {
    mode: 'izbori',
    q: 'Što je "zastupnik"?',
    en: 'What is a zastupnik?',
    opts: ['MP, representative', 'party leader', 'spokesperson', 'delegate abroad'],
    answer: 'MP, representative',
    tip: 'From zastupati, to represent.',
  },
  {
    mode: 'izbori',
    q: 'Glasao sam ____ tu stranku.',
    en: 'I voted for that party.',
    opts: ['za', 'na', 'o', 'po'],
    answer: 'za',
    tip: 'glasati ZA plus the accusative.',
  },
  {
    mode: 'izbori',
    q: 'Što je "stranka"?',
    en: 'What is a stranka?',
    opts: ['political party', 'a foreign woman', 'a page', 'a side in a dispute'],
    answer: 'political party',
    tip: 'It also means a party to a legal case. Strankinja is a foreign woman.',
  },

  // ── drustvo ───────────────────────────────────────────────────────────────
  {
    mode: 'drustvo',
    q: 'Sabor je ____ novi zakon.',
    en: 'Parliament passed the new law.',
    opts: ['izglasao', 'glasao', 'birao', 'donosio'],
    answer: 'izglasao',
    tip: 'izglasati — to pass by vote. Donijeti zakon also works.',
  },
  {
    mode: 'drustvo',
    q: 'Zakon stupa ____ snagu u siječnju.',
    en: 'The law comes into force in January.',
    opts: ['na', 'u', 'za', 'po'],
    answer: 'na',
    tip: 'stupiti NA snagu — and na snazi is "in force".',
  },
  {
    mode: 'drustvo',
    q: 'Hrvatska je ____ Europske unije. (member)',
    en: 'Croatia is a member of the European Union.',
    opts: ['članica', 'član', 'članak', 'članstvo'],
    answer: 'članica',
    tip: 'A member STATE is a članica — feminine, agreeing with država.',
  },
  {
    mode: 'drustvo',
    q: 'Kada je Hrvatska ušla u Europsku uniju?',
    en: 'When did Croatia join the EU?',
    opts: ['2013.', '2004.', '2009.', '2023.'],
    answer: '2013.',
    tip: '2013 for the EU; 2023 for the euro and Schengen.',
  },
  {
    mode: 'drustvo',
    q: 'Što je "ustav"?',
    en: 'What is the ustav?',
    opts: ['the constitution', 'a statute', 'an institution', 'a decree'],
    answer: 'the constitution',
    tip: 'And ustavni is its adjective — Ustavni sud.',
  },
  {
    mode: 'drustvo',
    q: 'Što je "referendum"?',
    en: 'What is a referendum?',
    opts: ['referendum', 'a report', 'a recommendation', 'a review'],
    answer: 'referendum',
    tip: 'Kept whole from Latin, like inflacija.',
  },
  {
    mode: 'drustvo',
    q: 'Što je "oporba"?',
    en: 'What is the oporba?',
    opts: ['the opposition', 'the coalition', 'a resistance movement', 'a protest'],
    answer: 'the opposition',
    tip: 'From oprijeti se, to resist. The governing side is vladajuća većina.',
  },
  {
    mode: 'drustvo',
    q: 'Prijedlog ____ upućen Saboru. (biti)',
    en: 'The proposal was sent to parliament.',
    opts: ['je', 'su', 'se', 'će'],
    answer: 'je',
    tip: 'A participle passive — and Saboru is the dative of the recipient.',
  },
];
