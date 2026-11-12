// src/data/drills/b1/verbsVatiJemDrill.ts
//
// B1 davati → dajem, stati → stanem — the drill for the `verbs-vati-jem` lesson.
//
// Two verb groups whose present hides the infinitive. -vati verbs drop -va- and take
// -jem (dajem, prodajem, poznajem); stati, ostati, postati and ustati take -nem
// (stanem, ostanem). The past is built on the infinitive (davao, ostao) and never on the
// present (*ostanuo).
//
// Three modes:
//   jem — the present of -vati and -ajati verbs
//   nem — the present and imperative of the -nem verbs
//   par — the past, and the aspect partners dati / davati, prodati / prodavati

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_VATI_JEM_MODE_LABELS: Record<string, string> = {
  jem: '🎁 dajem',
  nem: '✋ stanem',
  par: '🔁 Prošlost i parovi',
};

export const VERBS_VATI_JEM_DRILL_DATA: ModeDrillItem[] = [
  // ── jem ───────────────────────────────────────────────────────────────────
  {
    mode: 'jem',
    q: 'Na tržnici ____ povrće iz svog vrta.',
    en: 'At the market I sell vegetables from my garden.',
    opts: ['prodajem', 'prodavam', 'prodavajem', 'prodaješ'],
    answer: 'prodajem',
    tip: 'Drop -vati, add -jem.',
  },
  {
    mode: 'jem',
    q: '____ li moju sestru?',
    en: 'Do you know my sister?',
    opts: ['Poznaješ', 'Poznavaš', 'Poznavaješ', 'Poznajem'],
    answer: 'Poznaješ',
    tip: 'The ti form of poznavati: the -va- disappears.',
  },
  {
    mode: 'jem',
    q: 'Baka mi uvijek ____ previše kolača.',
    en: 'Grandma always gives me too many cakes.',
    opts: ['daje', 'dava', 'davaje', 'dajem'],
    answer: 'daje',
    tip: 'davati becomes daje in the third person.',
  },
  {
    mode: 'jem',
    q: 'Oni ____ kuću na moru.',
    en: 'They are selling a house by the sea.',
    opts: ['prodaju', 'prodavaju', 'prodavu', 'prodaje'],
    answer: 'prodaju',
    tip: 'The oni form of prodavati.',
  },
  {
    mode: 'jem',
    q: '____, pogriješio sam.',
    en: 'I admit it, I made a mistake.',
    opts: ['Priznajem', 'Priznavam', 'Priznavajem', 'Priznaješ'],
    answer: 'Priznajem',
    tip: 'priznavati follows the same pattern as davati.',
  },
  {
    mode: 'jem',
    q: 'Radnim danom ____ u šest sati.',
    en: 'On working days I get up at six.',
    opts: ['ustajem', 'ustajam', 'ustajavam', 'ustaje'],
    answer: 'ustajem',
    tip: 'ustajati keeps its j and takes -em.',
  },
  {
    mode: 'jem',
    q: 'Mi vam ____ najbolju cijenu.',
    en: 'We are giving you the best price.',
    opts: ['dajemo', 'davamo', 'dajete', 'davajemo'],
    answer: 'dajemo',
    tip: 'The mi form of davati.',
  },
  {
    mode: 'jem',
    q: 'Dobro se ____ s našim susjedima.',
    en: 'We know our neighbours well.',
    opts: ['poznajemo', 'poznavamo', 'poznaju', 'poznavajemo'],
    answer: 'poznajemo',
    tip: 'The mi form of poznavati.',
  },
  {
    mode: 'jem',
    q: 'Kuhar ____ juhi malo soli.',
    en: 'The cook adds a little salt to the soup.',
    opts: ['dodaje', 'dodava', 'dodavaje', 'dodajem'],
    answer: 'dodaje',
    tip: 'dodavati works like davati.',
  },

  // ── nem ───────────────────────────────────────────────────────────────────
  {
    mode: 'nem',
    q: 'Ako ____ u Zagrebu, javit ću ti se.',
    en: 'If I stay in Zagreb, I will get in touch.',
    opts: ['ostanem', 'ostam', 'ostanim', 'ostaem'],
    answer: 'ostanem',
    tip: 'ostati takes an n in the present.',
  },
  {
    mode: 'nem',
    q: 'Autobus ____ ispred škole.',
    en: 'The bus stops in front of the school.',
    opts: ['stane', 'stanu', 'stani', 'stanem'],
    answer: 'stane',
    tip: 'The third person singular of stati.',
  },
  {
    mode: 'nem',
    q: '____! Na semaforu je crveno.',
    en: 'Stop! The light is red.',
    opts: ['Stani', 'Stane', 'Stanem', 'Stanu'],
    answer: 'Stani',
    tip: 'The imperative is built on the present stem stan-.',
  },
  {
    mode: 'nem',
    q: 'Kad ____ liječnica, radit ću u bolnici.',
    en: 'When I become a doctor, I will work in a hospital.',
    opts: ['postanem', 'postam', 'postanim', 'postaem'],
    answer: 'postanem',
    tip: 'postati takes an n in the present.',
  },
  {
    mode: 'nem',
    q: 'Ako sutra ____ rano, idem trčati.',
    en: 'If I get up early tomorrow, I am going running.',
    opts: ['ustanem', 'ustam', 'ustanim', 'ustaem'],
    answer: 'ustanem',
    tip: 'ustati (once) takes an n in the present.',
  },
  {
    mode: 'nem',
    q: 'Sve stvari ne ____ u kofer.',
    en: 'Not everything fits in the suitcase.',
    opts: ['stanu', 'stane', 'stanem', 'stani'],
    answer: 'stanu',
    tip: 'stati also means to fit; the subject is plural.',
  },
  {
    mode: 'nem',
    q: 'Ako ____ kod kuće, gledat ćemo film.',
    en: 'If we stay at home, we will watch a film.',
    opts: ['ostanemo', 'ostamo', 'ostanimo', 'ostanete'],
    answer: 'ostanemo',
    tip: 'The mi form of ostati.',
  },

  // ── par ───────────────────────────────────────────────────────────────────
  {
    mode: 'par',
    q: 'Ona je otišla, a on je ____ u gradu.',
    en: 'She left, and he stayed in town.',
    opts: ['ostao', 'ostanuo', 'ostanio', 'ostanao'],
    answer: 'ostao',
    tip: 'The past is built on the infinitive, without n.',
  },
  {
    mode: 'par',
    q: 'Auto je ____ nasred ceste.',
    en: 'The car stopped in the middle of the road.',
    opts: ['stao', 'stanuo', 'stanio', 'stanao'],
    answer: 'stao',
    tip: 'The past of stati: stao.',
  },
  {
    mode: 'par',
    q: 'Brzo je ____ najbolji igrač u momčadi.',
    en: 'He quickly became the best player in the team.',
    opts: ['postao', 'postanuo', 'postanio', 'postanao'],
    answer: 'postao',
    tip: 'The past of postati: postao.',
  },
  {
    mode: 'par',
    q: 'Godinama je ____ voće na tržnici.',
    en: 'For years he sold fruit at the market.',
    opts: ['prodavao', 'prodajao', 'prodajevao', 'prodavo'],
    answer: 'prodavao',
    tip: 'The past keeps the infinitive stem prodava-.',
  },
  {
    mode: 'par',
    q: 'Tada sam ga ____ samo površno.',
    en: 'At that time I knew him only superficially.',
    opts: ['poznavao', 'poznajao', 'poznajevao', 'poznavo'],
    answer: 'poznavao',
    tip: 'The past keeps the infinitive stem pozna-va-.',
  },
  {
    mode: 'par',
    q: 'Moram ____ auto do petka.',
    en: 'I have to sell the car by Friday.',
    opts: ['prodati', 'prodajati', 'prodavam', 'prodajem'],
    answer: 'prodati',
    tip: 'One completed sale: the perfective infinitive.',
  },
  {
    mode: 'par',
    q: 'Koji je glagol svršeni par glagolu "davati"?',
    en: 'Which verb is the perfective partner of this verb?',
    opts: ['dati', 'dajati', 'davnuti', 'podavati'],
    answer: 'dati',
    tip: 'dati (perfective) / davati (imperfective).',
  },
  {
    mode: 'par',
    q: 'Prezent svršenog glagola "dati" (ja) glasi ____.',
    en: 'The first person present of the perfective partner.',
    opts: ['dam', 'dajem', 'davam', 'dajam'],
    answer: 'dam',
    tip: 'dati → dam; dajem belongs to davati.',
  },
  {
    mode: 'par',
    q: 'Svaki dan mi ____ isti savjet.',
    en: 'Every day he gives me the same advice.',
    opts: ['daje', 'dava', 'davaje', 'dajemo'],
    answer: 'daje',
    tip: 'A repeated action: the imperfective davati.',
  },
];
