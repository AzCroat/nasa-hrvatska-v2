// src/data/drills/b2/predicateInstrumentalDrill.ts
//
// B2 PREDICATE NOMINATIVE AND INSTRUMENTAL — the drill for the `predicate-instrumental`
// lesson.
//
// After biti the nominative is the everyday choice and is never marked wrong; the
// instrumental there is correct but bookish, so no biti item offers both. After postati
// both cases are standard, so postati items never offer the nominative. smatrati,
// proglasiti and imenovati take the instrumental as the rule; kao and zvati se keep the
// nominative.
//
// Three modes:
//   instrumental — the verbs that want the instrumental
//   nominativ    — where the nominative stays
//   pridjev      — adjective and noun moving into the instrumental together

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PREDICATE_INSTRUMENTAL_MODE_LABELS: Record<string, string> = {
  instrumental: '🎓 Instrumental',
  nominativ: '🙋 Nominativ',
  pridjev: '🏅 S pridjevom',
};

export const PREDICATE_INSTRUMENTAL_DRILL_DATA: ModeDrillItem[] = [
  // ── instrumental ──────────────────────────────────────────────────────────
  {
    mode: 'instrumental',
    q: 'Svi ga smatraju ____.',
    en: 'Everyone considers him a genius.',
    opts: ['genijem', 'genij', 'genija', 'geniju'],
    answer: 'genijem',
    tip: 'smatrati takes the instrumental.',
  },
  {
    mode: 'instrumental',
    q: 'Proglasili su je ____ godine.',
    en: 'They declared her athlete of the year.',
    opts: ['sportašicom', 'sportašica', 'sportašicu', 'sportašici'],
    answer: 'sportašicom',
    tip: 'proglasiti takes the instrumental.',
  },
  {
    mode: 'instrumental',
    q: 'Imenovali su ga ____.',
    en: 'They appointed him ambassador.',
    opts: ['veleposlanikom', 'veleposlanik', 'veleposlanika', 'veleposlaniku'],
    answer: 'veleposlanikom',
    tip: 'imenovati takes the instrumental.',
  },
  {
    mode: 'instrumental',
    q: 'Nakon izbora postao je ____ grada.',
    en: 'After the election he became mayor of the town.',
    opts: ['gradonačelnikom', 'gradonačelnika', 'gradonačelniku', 'gradonačelniče'],
    answer: 'gradonačelnikom',
    tip: 'postati takes the instrumental (the nominative is also possible).',
  },
  {
    mode: 'instrumental',
    q: 'Smatram je ____.',
    en: 'I consider her a friend.',
    opts: ['prijateljicom', 'prijateljicu', 'prijateljici', 'prijateljice'],
    answer: 'prijateljicom',
    tip: 'smatrati + instrumental.',
  },
  {
    mode: 'instrumental',
    q: 'Proglašen je ____.',
    en: 'He was declared the winner.',
    opts: ['pobjednikom', 'pobjednik', 'pobjednika', 'pobjedniku'],
    answer: 'pobjednikom',
    tip: 'proglasiti + instrumental, also in the passive.',
  },
  {
    mode: 'instrumental',
    q: 'Koji glagol traži instrumental?',
    en: 'Which verb takes the instrumental?',
    opts: ['smatrati', 'zvati se', 'raditi kao', 'imati'],
    answer: 'smatrati',
    tip: 'Smatram ga prijateljem.',
  },
  {
    mode: 'instrumental',
    q: 'Kad je postala ____, preselila se u Zagreb.',
    en: 'When she became a mother, she moved to Zagreb.',
    opts: ['majkom', 'majku', 'majci', 'majko'],
    answer: 'majkom',
    tip: 'postati + instrumental.',
  },
  {
    mode: 'instrumental',
    q: 'Zovu ga ____ hrvatske književnosti.',
    en: 'They call him the father of Croatian literature.',
    opts: ['ocem', 'oca', 'ocu', 'oče'],
    answer: 'ocem',
    tip: 'Calling someone a title takes the instrumental; otac drops its a.',
  },
  // ── nominativ ─────────────────────────────────────────────────────────────
  {
    mode: 'nominativ',
    q: 'Moja majka je ____.',
    en: 'My mother is a doctor.',
    opts: ['liječnica', 'liječnicu', 'liječnice', 'liječnici'],
    answer: 'liječnica',
    tip: 'After biti, the everyday form is the nominative.',
  },
  {
    mode: 'nominativ',
    q: 'Ljeti radi kao ____.',
    en: 'In summer he works as a waiter.',
    opts: ['konobar', 'konobarom', 'konobara', 'konobaru'],
    answer: 'konobar',
    tip: 'After kao the noun does not change.',
  },
  {
    mode: 'nominativ',
    q: 'Djed je cijeli život bio ____.',
    en: 'Grandfather was a fisherman all his life.',
    opts: ['ribar', 'ribara', 'ribaru', 'ribare'],
    answer: 'ribar',
    tip: 'After biti, the nominative.',
  },
  {
    mode: 'nominativ',
    q: 'Radila je kao ____ u školi.',
    en: 'She worked as a teacher at the school.',
    opts: ['učiteljica', 'učiteljicom', 'učiteljicu', 'učiteljici'],
    answer: 'učiteljica',
    tip: 'After kao, never the instrumental.',
  },
  {
    mode: 'nominativ',
    q: 'Moj otac je ____.',
    en: 'My father is an engineer.',
    opts: ['inženjer', 'inženjera', 'inženjeru', 'inženjere'],
    answer: 'inženjer',
    tip: 'The predicate nominative after biti.',
  },
  {
    mode: 'nominativ',
    q: 'Iza koje riječi imenica ostaje u nominativu?',
    en: 'After which word does the noun stay in the nominative?',
    opts: ['kao', 'smatrati', 'proglasiti', 'imenovati'],
    answer: 'kao',
    tip: 'Radi kao konobar.',
  },
  {
    mode: 'nominativ',
    q: 'Što vrijedi za rečenicu "Bio je učiteljem"?',
    en: 'What is true of this sentence?',
    opts: [
      'ispravna je, ali knjiška',
      'pogrešna je',
      'jedina je ispravna',
      'znači da je postao učitelj',
    ],
    answer: 'ispravna je, ali knjiška',
    tip: 'The instrumental after biti is correct but sounds written.',
  },
  {
    mode: 'nominativ',
    q: 'Ona je ____.',
    en: 'She is a student.',
    opts: ['studentica', 'studenticu', 'studentice', 'studentici'],
    answer: 'studentica',
    tip: 'After biti, the nominative.',
  },
  {
    mode: 'nominativ',
    q: 'Radi kao ____ u hotelu.',
    en: 'He works as a receptionist in a hotel.',
    opts: ['recepcionar', 'recepcionarom', 'recepcionara', 'recepcionaru'],
    answer: 'recepcionar',
    tip: 'kao + nominative.',
  },
  // ── pridjev ───────────────────────────────────────────────────────────────
  {
    mode: 'pridjev',
    q: 'Smatram ga ____.',
    en: 'I consider him a good man.',
    opts: ['dobrim čovjekom', 'dobar čovjek', 'dobrog čovjeka', 'dobrom čovjeku'],
    answer: 'dobrim čovjekom',
    tip: 'Adjective and noun both in the instrumental.',
  },
  {
    mode: 'pridjev',
    q: 'Proglašena je ____.',
    en: 'She was declared the best actress.',
    opts: ['najboljom glumicom', 'najbolja glumica', 'najbolju glumicu', 'najboljoj glumici'],
    answer: 'najboljom glumicom',
    tip: 'Feminine instrumental: -om on both words.',
  },
  {
    mode: 'pridjev',
    q: 'Smatramo ih ____.',
    en: 'We consider them true friends.',
    opts: ['pravim prijateljima', 'pravi prijatelji', 'prave prijatelje', 'pravih prijatelja'],
    answer: 'pravim prijateljima',
    tip: 'Instrumental plural: -im and -ima.',
  },
  {
    mode: 'pridjev',
    q: 'Postao je ____.',
    en: 'He became a famous writer.',
    opts: ['poznatim piscem', 'poznatog pisca', 'poznatom piscu', 'poznati pisče'],
    answer: 'poznatim piscem',
    tip: 'postati + instrumental; pisac drops its a.',
  },
  {
    mode: 'pridjev',
    q: 'Smatraju je ____ u gradu.',
    en: 'They consider her the best baker in town.',
    opts: ['najboljom pekaricom', 'najbolja pekarica', 'najbolju pekaricu', 'najbolje pekarice'],
    answer: 'najboljom pekaricom',
    tip: 'smatrati + instrumental, adjective included.',
  },
  {
    mode: 'pridjev',
    q: 'Proglasili su ga ____ sezone.',
    en: 'They declared him the best player of the season.',
    opts: ['najboljim igračem', 'najbolji igrač', 'najboljeg igrača', 'najboljem igraču'],
    answer: 'najboljim igračem',
    tip: 'Masculine instrumental: -im, and -em after the soft č.',
  },
  {
    mode: 'pridjev',
    q: 'Smatram to ____.',
    en: 'I consider that a big mistake.',
    opts: ['velikom greškom', 'velika greška', 'veliku grešku', 'velike greške'],
    answer: 'velikom greškom',
    tip: 'smatrati + instrumental works for things too.',
  },
  {
    mode: 'pridjev',
    q: 'Vijeće ju je imenovalo ____.',
    en: 'The council appointed her the new director.',
    opts: ['novom ravnateljicom', 'nova ravnateljica', 'novu ravnateljicu', 'novoj ravnateljici'],
    answer: 'novom ravnateljicom',
    tip: 'imenovati + instrumental.',
  },
];
