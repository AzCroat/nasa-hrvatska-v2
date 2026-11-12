// src/data/drills/a1/genitivePartitiveDrill.ts
//
// A1 AMOUNTS — the drill for the `genitive-partitive` lesson.
//
// An amount of a substance puts the substance into the genitive: čaša vode, malo
// kruha, Hoćeš li kave? The amount word takes its own ending (Pijem čašu vode).
// The partitive genitive (kruha, some bread) and the accusative (kruh, a loaf) are
// BOTH correct and mean different things, so no item offers one as wrong where the
// English allows the other.
//
// Three modes:
//   kolicina — container / piece + genitive
//   malo     — malo, puno, dosta, previše, and the genitive alone meaning "some"
//   cijela   — the amount word's own case, and some vs the

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GENITIVE_PARTITIVE_MODE_LABELS: Record<string, string> = {
  kolicina: '🥛 Količina',
  malo: '🤏 Malo, puno',
  cijela: '🍞 Nešto ili cijelo',
};

export const GENITIVE_PARTITIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── kolicina ──────────────────────────────────────────────────────────────
  {
    mode: 'kolicina',
    q: 'Molim vas, čašu ____. (voda)',
    en: 'A glass of water, please.',
    opts: ['vodu', 'vode', 'voda', 'vodi'],
    answer: 'vode',
    tip: 'The substance takes the genitive: feminine -a becomes -e.',
  },
  {
    mode: 'kolicina',
    q: 'Šalicu ____, molim. (čaj)',
    en: 'A cup of tea, please.',
    opts: ['čaj', 'čaju', 'čaja', 'čajem'],
    answer: 'čaja',
    tip: 'Masculine nouns add -a in the genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Kupio sam bocu ____. (vino)',
    en: 'I bought a bottle of wine.',
    opts: ['vino', 'vinu', 'vinom', 'vina'],
    answer: 'vina',
    tip: 'Neuter -o becomes -a in the genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Treba mi litra ____. (mlijeko)',
    en: 'I need a litre of milk.',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    tip: 'litra + genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Za doručak jedem krišku ____. (kruh)',
    en: 'For breakfast I eat a slice of bread.',
    opts: ['kruh', 'kruha', 'kruhu', 'kruhom'],
    answer: 'kruha',
    tip: 'kriška + genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Želim komad ____. (torta)',
    en: 'I would like a piece of cake.',
    opts: ['tortu', 'torti', 'torte', 'torta'],
    answer: 'torte',
    tip: 'Feminine -a becomes -e in the genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Kupujem kilogram ____. (meso)',
    en: 'I am buying a kilo of meat.',
    opts: ['meso', 'mesu', 'mesa', 'mesom'],
    answer: 'mesa',
    tip: 'kilogram + genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Dobili smo tanjur ____. (juha)',
    en: 'We got a plate of soup.',
    opts: ['juhu', 'juhe', 'juhi', 'juha'],
    answer: 'juhe',
    tip: 'tanjur + genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Na stolu je boca ____. (ulje)',
    en: 'There is a bottle of oil on the table.',
    opts: ['ulje', 'ulju', 'ulja', 'uljem'],
    answer: 'ulja',
    tip: 'Neuter nouns in -e also take -a in the genitive.',
  },
  // ── malo ──────────────────────────────────────────────────────────────────
  {
    mode: 'malo',
    q: 'Mama stavlja malo ____ u čaj. (šećer)',
    en: 'Mum puts a little sugar in the tea.',
    opts: ['šećer', 'šećera', 'šećeru', 'šećerom'],
    answer: 'šećera',
    tip: 'malo + genitive.',
  },
  {
    mode: 'malo',
    q: 'Na tanjuru je puno ____. (riža)',
    en: 'There is a lot of rice on the plate.',
    opts: ['riža', 'rižu', 'riže', 'riži'],
    answer: 'riže',
    tip: 'puno + genitive.',
  },
  {
    mode: 'malo',
    q: 'Imamo dosta ____. (kruh)',
    en: 'We have enough bread.',
    opts: ['kruh', 'kruhu', 'kruhom', 'kruha'],
    answer: 'kruha',
    tip: 'dosta + genitive.',
  },
  {
    mode: 'malo',
    q: 'Piješ previše ____. (kava)',
    en: 'You drink too much coffee.',
    opts: ['kave', 'kavu', 'kava', 'kavom'],
    answer: 'kave',
    tip: 'previše + genitive.',
  },
  {
    mode: 'malo',
    q: 'Hoćeš li ____? (some coffee — kava)',
    en: 'Would you like some coffee?',
    opts: ['kave', 'kavi', 'kavom', 'kava'],
    answer: 'kave',
    tip: 'The genitive on its own means "some".',
  },
  {
    mode: 'malo',
    q: 'U hladnjaku ima ____. (some cheese — sir)',
    en: 'There is some cheese in the fridge.',
    opts: ['sir', 'sira', 'siru', 'sirom'],
    answer: 'sira',
    tip: 'ima + genitive = there is some.',
  },
  {
    mode: 'malo',
    q: 'Koja riječ NE traži genitiv iza sebe?',
    en: 'Which word is not followed by the genitive?',
    opts: ['malo', 'puno', 'dosta', 'dobar'],
    answer: 'dobar',
    tip: 'The other three measure an amount.',
  },
  {
    mode: 'malo',
    q: 'Što znači "Hoćeš li soka?"',
    opts: [
      'Would you like some juice?',
      'Is the juice cold?',
      'Where is the juice?',
      'Do you drink juice every day?',
    ],
    answer: 'Would you like some juice?',
    tip: 'The genitive alone: some.',
  },
  // ── cijela ────────────────────────────────────────────────────────────────
  {
    mode: 'cijela',
    q: 'Svako jutro pijem ____ vode. (čaša)',
    en: 'Every morning I drink a glass of water.',
    opts: ['čaša', 'čašu', 'čaše', 'čaši'],
    answer: 'čašu',
    tip: 'The glass is the object of pijem, so it takes the accusative.',
  },
  {
    mode: 'cijela',
    q: 'Kupio sam ____ vina. (boca)',
    en: 'I bought a bottle of wine.',
    opts: ['boca', 'boce', 'bocu', 'boci'],
    answer: 'bocu',
    tip: 'The bottle is the object: accusative.',
  },
  {
    mode: 'cijela',
    q: 'Na stolu je ____ soka. (a glass)',
    en: 'There is a glass of juice on the table.',
    opts: ['čašu', 'čaša', 'čaše', 'čaši'],
    answer: 'čaša',
    tip: 'Here the glass is the subject, so its dictionary form.',
  },
  {
    mode: 'cijela',
    q: 'Što znači "Kupio sam kruha"?',
    opts: ['I bought some bread.', 'I did not buy bread.', 'I am buying bread.', 'I like bread.'],
    answer: 'I bought some bread.',
    tip: 'The genitive alone: an amount. Kupio sam kruh would be a whole loaf.',
  },
  {
    mode: 'cijela',
    q: 'Što znači "Popio sam vodu iz tvoje čaše"?',
    opts: [
      'I drank the water from your glass.',
      'I drank some water.',
      'I did not drink your water.',
      'I bought a glass of water.',
    ],
    answer: 'I drank the water from your glass.',
    tip: 'The accusative: that particular water.',
  },
  {
    mode: 'cijela',
    q: 'Koja rečenica je točna?',
    en: 'Which sentence is correct? (I am drinking a cup of tea.)',
    opts: ['Pijem šalica čaja.', 'Pijem šalicu čaj.', 'Pijem šalicu čaja.', 'Pijem šalici čaja.'],
    answer: 'Pijem šalicu čaja.',
    tip: 'Cup in the accusative, tea in the genitive.',
  },
  {
    mode: 'cijela',
    q: 'Kupujem kilogram ____. (sir)',
    en: 'I am buying a kilo of cheese.',
    opts: ['sir', 'siru', 'sirom', 'sira'],
    answer: 'sira',
    tip: 'kilogram + genitive.',
  },
];
