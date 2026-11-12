// src/data/drills/b1/superlativesIrregularDrill.ts
//
// B1 IRREGULAR COMPARISON — the drill for the `superlatives-irregular` lesson.
//
// The adjectives used most often compare irregularly (dobar → bolji, loš → gori,
// velik → veći, malen → manji, dug → duži). The superlative is naj- + the comparative,
// and both decline with soft endings in the cases already taught (u većem stanu,
// mlađeg brata, u boljoj školi). dulji and lošiji are standard too, so they are never
// offered as wrong answers.
//
// Three modes:
//   komparativ — the irregular comparative itself
//   superlativ — naj- + the comparative, agreeing with its noun
//   padez      — comparatives and superlatives in N, A, D and L

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SUPERLATIVES_IRREGULAR_MODE_LABELS: Record<string, string> = {
  komparativ: '📈 Komparativ',
  superlativ: '🏆 Superlativ',
  padez: '🔤 Padeži',
};

export const SUPERLATIVES_IRREGULAR_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'komparativ',
    q: 'Ova kava je ____ nego jučerašnja.',
    en: 'This coffee is better than yesterday’s.',
    opts: ['bolja', 'dobrija', 'najbolja', 'dobra'],
    answer: 'bolja',
    tip: 'dobar compares irregularly; feminine for kava.',
  },
  {
    mode: 'komparativ',
    q: 'Danas je promet ____ nego inače.',
    en: 'The traffic is worse today than usual.',
    opts: ['gori', 'loši', 'najgori', 'gora'],
    answer: 'gori',
    tip: 'loš → gori, masculine for promet.',
  },
  {
    mode: 'komparativ',
    q: 'Naš stan je ____ nego vaš.',
    en: 'Our flat is bigger than yours.',
    opts: ['velikiji', 'veći', 'veća', 'najveći'],
    answer: 'veći',
    tip: 'velik → veći; there is no velikiji.',
  },
  {
    mode: 'komparativ',
    q: 'Treba mi ____ torba.',
    en: 'I need a smaller bag.',
    opts: ['malija', 'manji', 'manja', 'manjoj'],
    answer: 'manja',
    tip: 'malen → manji; feminine for torba.',
  },
  {
    mode: 'komparativ',
    q: 'Ljeti su dani ____.',
    en: 'In summer the days are longer.',
    opts: ['dugiji', 'duži', 'duža', 'dužim'],
    answer: 'duži',
    tip: 'dug → duži (dulji is also standard); masculine plural for dani.',
  },
  {
    mode: 'komparativ',
    q: 'Brat je ____ od mene.',
    en: 'My brother is taller than me.',
    opts: ['visokiji', 'viši', 'visi', 'najviši'],
    answer: 'viši',
    tip: 'visok drops -ok and s melts into š.',
  },
  {
    mode: 'komparativ',
    q: 'Ovaj put je ____.',
    en: 'This way is shorter.',
    opts: ['kratkiji', 'kraći', 'kraća', 'kratši'],
    answer: 'kraći',
    tip: 'kratak drops -ak and t melts into ć.',
  },
  {
    mode: 'komparativ',
    q: 'Ovaj stan je ____ nego onaj.',
    en: 'This flat is more expensive than that one.',
    opts: ['skupiji', 'skuplji', 'skupši', 'skuplja'],
    answer: 'skuplji',
    tip: 'After p an l appears: skup → skuplji.',
  },
  {
    mode: 'superlativ',
    q: 'Zagreb je ____ grad u Hrvatskoj.',
    en: 'Zagreb is the biggest city in Croatia.',
    opts: ['veći', 'najveći', 'najvelikiji', 'najveća'],
    answer: 'najveći',
    tip: 'naj- + the comparative, masculine for grad.',
  },
  {
    mode: 'superlativ',
    q: 'Dinara je ____ vrh u Hrvatskoj.',
    en: 'Dinara is the highest peak in Croatia.',
    opts: ['viši', 'najviši', 'najvisokiji', 'najviša'],
    answer: 'najviši',
    tip: 'naj- + viši, masculine for vrh.',
  },
  {
    mode: 'superlativ',
    q: 'Ovo je ____ pizza u gradu.',
    en: 'This is the best pizza in town.',
    opts: ['najbolja', 'bolja', 'najdobrija', 'najbolji'],
    answer: 'najbolja',
    tip: 'naj- + bolja, feminine for pizza.',
  },
  {
    mode: 'superlativ',
    q: 'Ponedjeljak mi je ____ dan u tjednu.',
    en: 'Monday is my worst day of the week.',
    opts: ['gori', 'najgori', 'najgora', 'najgore'],
    answer: 'najgori',
    tip: 'naj- + gori, masculine for dan.',
  },
  {
    mode: 'superlativ',
    q: 'To je ____ trgovina u ulici.',
    en: 'That is the cheapest shop in the street.',
    opts: ['najjeftinija', 'najeftinija', 'jeftinija', 'najjeftiniji'],
    answer: 'najjeftinija',
    tip: 'naj- + jeftinija: the j doubles.',
  },
  {
    mode: 'superlativ',
    q: 'Velebit je ____ planina u Hrvatskoj.',
    en: 'Velebit is the longest mountain range in Croatia.',
    opts: ['duža', 'najduža', 'najdugija', 'najduži'],
    answer: 'najduža',
    tip: 'naj- + duža, feminine for planina.',
  },
  {
    mode: 'superlativ',
    q: 'Krk i Cres su ____ otoci na Jadranu.',
    en: 'Krk and Cres are the biggest islands in the Adriatic.',
    opts: ['najveći', 'najveće', 'veći', 'najvećim'],
    answer: 'najveći',
    tip: 'Masculine plural nominative for otoci.',
  },
  {
    mode: 'superlativ',
    q: 'Ana je ____ učenica u razredu.',
    en: 'Ana is the best pupil in the class.',
    opts: ['najbolji', 'najbolja', 'bolja', 'najboljoj'],
    answer: 'najbolja',
    tip: 'Feminine nominative for učenica.',
  },
  {
    mode: 'padez',
    q: 'Živimo u ____ stanu nego prije.',
    en: 'We live in a bigger flat than before.',
    opts: ['veći', 'većem', 'većoj', 'veća'],
    answer: 'većem',
    tip: 'u + locative, masculine: the soft ending -em.',
  },
  {
    mode: 'padez',
    q: 'Imam ____ brata.',
    en: 'I have a younger brother.',
    opts: ['mlađi', 'mlađem', 'mlađeg', 'mlađa'],
    answer: 'mlađeg',
    tip: 'A living masculine noun in the accusative takes -eg.',
  },
  {
    mode: 'padez',
    q: 'Imam ____ sestru.',
    en: 'I have an older sister.',
    opts: ['starija', 'stariju', 'starijoj', 'starijem'],
    answer: 'stariju',
    tip: 'Feminine accusative ends in -u.',
  },
  {
    mode: 'padez',
    q: 'Daj veći komad ____ djetetu.',
    en: 'Give the bigger piece to the younger child.',
    opts: ['mlađe', 'mlađem', 'mlađoj', 'mlađi'],
    answer: 'mlađem',
    tip: 'Dative, neuter dijete: -em.',
  },
  {
    mode: 'padez',
    q: 'Radim u ____ firmi.',
    en: 'I work in a bigger company.',
    opts: ['veća', 'većoj', 'veću', 'većem'],
    answer: 'većoj',
    tip: 'u + locative, feminine: -oj.',
  },
  {
    mode: 'padez',
    q: 'Kupio sam ____ auto.',
    en: 'I bought a more expensive car.',
    opts: ['skuplji', 'skupljem', 'skupljeg', 'skuplju'],
    answer: 'skuplji',
    tip: 'An inanimate masculine accusative looks like the nominative.',
  },
  {
    mode: 'padez',
    q: 'U ____ slastičarnici u gradu uvijek je gužva.',
    en: 'There is always a crowd in the best cake shop in town.',
    opts: ['najbolja', 'najboljoj', 'najbolju', 'najboljem'],
    answer: 'najboljoj',
    tip: 'u + locative, feminine: -oj.',
  },
  {
    mode: 'padez',
    q: 'Mladi ljudi žive u ____ gradovima.',
    en: 'Young people live in bigger cities.',
    opts: ['većim', 'veći', 'većem', 'veće'],
    answer: 'većim',
    tip: 'Plural locative ends in -im.',
  },
];
