// src/data/drills/b2/reportedSpeechB2Drill.ts
//
// B2 REPORTED SPEECH — the drill for the `reported-speech-b2` lesson (B2 position 56).
//
// Three modes, eight items each:
//   izjave    — statements with da: no change of tense, only of person
//   pitanja   — yes/no questions (verb + li, je li, jesam li) and wh-questions
//   enklitike — commands (da / neka + present) and the clitic cluster inside the
//               reported clause: li – sam/ću – dative – accusative – se – je
//
// Reported yes/no questions use the verb + li pattern only.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const REPORTED_SPEECH_B2_MODE_LABELS: Record<string, string> = {
  izjave: '💬 Izjave',
  pitanja: '❓ Pitanja',
  enklitike: '🧩 Naredbe i enklitike',
};

export const REPORTED_SPEECH_B2_DRILL_DATA: ModeDrillItem[] = [
  // ── izjave ────────────────────────────────────────────────────────────────
  {
    mode: 'izjave',
    q: '"Umorna sam." → Rekla je da ____ umorna.',
    en: 'She said she was tired.',
    opts: ['je', 'sam', 'je bila', 'bi bila'],
    answer: 'je',
    tip: 'Croatian keeps the tense; only the person changes.',
  },
  {
    mode: 'izjave',
    q: '"Doći ću sutra." → Rekao je da ____ doći sutra.',
    en: 'He said he would come tomorrow.',
    opts: ['ću', 'će', 'bi', 'je'],
    answer: 'će',
    tip: 'The future stays the future, in the third person.',
  },
  {
    mode: 'izjave',
    q: '"Volim te." → Rekao je da me ____.',
    en: 'He said he loved me.',
    opts: ['volim', 'voli', 'volio', 'voliš'],
    answer: 'voli',
    tip: 'Present tense, third person — he is the one who loves.',
  },
  {
    mode: 'izjave',
    q: '"Bili smo u Puli." → Rekli su da su ____ u Puli.',
    en: 'They said they had been in Pula.',
    opts: ['bili', 'bile', 'bio', 'bila'],
    answer: 'bili',
    tip: 'The past stays the past; the participle agrees with the masculine plural subject.',
  },
  {
    mode: 'izjave',
    q: '"Ne razumijem vas." → Rekla je da nas ne ____.',
    en: 'She said she did not understand us.',
    opts: ['razumijem', 'razumije', 'razumijemo', 'razumiju'],
    answer: 'razumije',
    tip: 'Present tense, third person singular.',
  },
  {
    mode: 'izjave',
    q: '"Moj brat živi u Zadru." → Rekao je da ____ brat živi u Zadru.',
    en: 'He said his brother lived in Zadar.',
    opts: ['moj', 'svoj', 'njegov', 'tvoj'],
    answer: 'njegov',
    tip: 'The brother is the subject of the new clause, so the possessive is his, not svoj.',
  },
  {
    mode: 'izjave',
    q: '"Kasnim." → Marko kaže da ____.',
    en: 'Marko says he is running late.',
    opts: ['kasnim', 'kasni', 'kasniš', 'kasnio'],
    answer: 'kasni',
    tip: 'Third person present.',
  },
  {
    mode: 'izjave',
    q: '"Gladni smo." → Djeca su rekla da ____ gladna.',
    en: 'The children said they were hungry.',
    opts: ['smo', 'su', 'je', 'ste'],
    answer: 'su',
    tip: 'Third person plural of biti.',
  },

  // ── pitanja ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: '"Dolaziš li?" → Pitala me je ____.',
    en: 'She asked me whether I was coming.',
    opts: ['dolazim li', 'da dolazim', 'li dolazim', 'dolaziš li'],
    answer: 'dolazim li',
    tip: 'The verb, then li — and the person changes to I.',
  },
  {
    mode: 'pitanja',
    q: '"Je li Ivan doma?" → Pitali smo ____ Ivan doma.',
    en: 'We asked whether Ivan was at home.',
    opts: ['je li', 'da je', 'li je', 'jesi li'],
    answer: 'je li',
    tip: 'With biti the verb carries li: je li.',
  },
  {
    mode: 'pitanja',
    q: '"Jesi li vidio film?" → Pitao me je ____ vidio film.',
    en: 'He asked me whether I had seen the film.',
    opts: ['jesi li', 'jesam li', 'sam li', 'da sam'],
    answer: 'jesam li',
    tip: 'The long form of biti carries li, and the person becomes I.',
  },
  {
    mode: 'pitanja',
    q: '"Gdje živiš?" → Pitala me je ____.',
    en: 'She asked me where I lived.',
    opts: ['gdje živim', 'da gdje živim', 'živim li gdje', 'gdje živiš'],
    answer: 'gdje živim',
    tip: 'Keep the question word; add no da and no li.',
  },
  {
    mode: 'pitanja',
    q: '"Kada polazi vlak?" → Pitali smo ____.',
    en: 'We asked when the train was leaving.',
    opts: ['da kada polazi vlak', 'kada polazi vlak', 'polazi li kada vlak', 'kada polaziš vlak'],
    answer: 'kada polazi vlak',
    tip: 'A wh-question keeps its shape in reported speech.',
  },
  {
    mode: 'pitanja',
    q: '"Zašto kasniš?" → Šef me je pitao zašto ____.',
    en: 'The boss asked me why I was late.',
    opts: ['kasniš', 'kasnim', 'kasni', 'kasnili'],
    answer: 'kasnim',
    tip: 'The question was to you; reported, it is about I.',
  },
  {
    mode: 'pitanja',
    q: '"Imate li slobodnu sobu?" → Pitali smo ih ____ slobodnu sobu.',
    en: 'We asked them whether they had a free room.',
    opts: ['imate li', 'imaju li', 'da imaju', 'li imaju'],
    answer: 'imaju li',
    tip: 'Third person plural, then li.',
  },
  {
    mode: 'pitanja',
    q: '"Tko je to rekao?" → Pitala je ____ to rekao.',
    en: 'She asked who had said that.',
    opts: ['tko je', 'da tko je', 'je li tko', 'tko li'],
    answer: 'tko je',
    tip: 'The question word, then the short word je.',
  },

  // ── enklitike ─────────────────────────────────────────────────────────────
  {
    mode: 'enklitike',
    q: '"Dao sam mu ga." → Rekao je da ____ dao.',
    en: 'He said he had given it to him.',
    opts: ['mu ga je', 'ga mu je', 'je mu ga', 'mu je ga'],
    answer: 'mu ga je',
    tip: 'Dative, then accusative, then je last.',
  },
  {
    mode: 'enklitike',
    q: '"Poslat ću ti ga." → Rekla je da ____ poslati.',
    en: 'She said she would send it to me.',
    opts: ['će mi ga', 'mi ga će', 'će ga mi', 'ću ti ga'],
    answer: 'će mi ga',
    tip: 'The auxiliary first, then the dative, then the accusative.',
  },
  {
    mode: 'enklitike',
    q: '"Sviđa mi se." → Rekla je da ____ sviđa.',
    en: 'She said she liked it.',
    opts: ['joj se', 'se joj', 'mi se', 'je se'],
    answer: 'joj se',
    tip: 'The dative comes before se, and the person changes.',
  },
  {
    mode: 'enklitike',
    q: '"Zatvori prozor!" → Rekla mi je ____ prozor.',
    en: 'She told me to close the window.',
    opts: ['da zatvori', 'da zatvorim', 'zatvoriti da', 'zatvori da'],
    answer: 'da zatvorim',
    tip: 'An imperative becomes da + the present.',
  },
  {
    mode: 'enklitike',
    q: 'Reci Ivi ____ me nazove.',
    en: 'Tell Iva to call me.',
    opts: ['neka', 'li', 'što', 'je li'],
    answer: 'neka',
    tip: 'Neka + present passes a request on to a third person.',
  },
  {
    mode: 'enklitike',
    q: '"Pomozi mi, molim te." → Zamolila me je da ____ pomognem.',
    en: 'She asked me to help her.',
    opts: ['joj', 'mi', 'je', 'ju'],
    answer: 'joj',
    tip: 'Pomoći takes the dative, and the person is now her.',
  },
  {
    mode: 'enklitike',
    q: '"Je li ti ga vratio?" → Pitali su me je li ____ vratio.',
    en: 'They asked me whether he had given it back to me.',
    opts: ['mi ga', 'ga mi', 'ti ga', 'me ga'],
    answer: 'mi ga',
    tip: 'The dative before the accusative, and the person changes.',
  },
  {
    mode: 'enklitike',
    q: '"Ne sviđa mi se." → Rekao je da ____.',
    en: 'He said he did not like it.',
    opts: ['mu se ne sviđa', 'ne mu se sviđa', 'mu ne se sviđa', 'se mu ne sviđa'],
    answer: 'mu se ne sviđa',
    tip: 'The short words go straight after da; ne stays by the verb.',
  },
];
