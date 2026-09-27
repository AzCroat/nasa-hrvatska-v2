import React from 'react';
import ModeDrill from './ModeDrill';

// C2 phraseology drill (C2 tranche, 2026-08-15): idioms as natives deploy
// them — meaning in context, completing the fixed form, and register fit.
// Includes the sanctioned "bok uz bok" exception (2026-07 owner decision).
const MODE_LABEL: Record<string, string> = {
  znacenje: '💡 Značenje',
  dopuna: '✍️ Dopuni frazem',
  registar: '🎭 U kontekstu',
};

const DATA = [
  {
    mode: 'znacenje',
    q: '„Obećavao je brda i doline.” — to znači da je obećavao:',
    opts: ['previše i nerealno', 'izlete u prirodu', 'kupnju zemljišta', 'malo, ali sigurno'],
    answer: 'previše i nerealno',
    en: 'he promised the moon (lit. hills and valleys)',
    tip: 'Obećavati brda i doline = davati velika, neostvariva obećanja.',
  },
  {
    mode: 'znacenje',
    q: '„Taj političar samo prodaje maglu.” — on:',
    opts: [
      'vara praznim pričama',
      'trguje na tržnici',
      'skriva istinu o vremenu',
      'govori tiho i nejasno',
    ],
    answer: 'vara praznim pričama',
    en: 'he is selling smoke — empty promises',
    tip: 'Prodavati maglu = obmanjivati bez pokrića.',
  },
  {
    mode: 'znacenje',
    q: '„Napokon smo došli na zelenu granu.” — napokon smo:',
    opts: [
      'financijski stali na noge',
      'otišli u prirodu',
      'postigli dogovor o okolišu',
      'dobili novi posao',
    ],
    answer: 'financijski stali na noge',
    en: 'we finally got back on our feet financially',
    tip: 'Doći na zelenu granu = izaći iz neimaštine, prosperirati.',
  },
  {
    mode: 'znacenje',
    q: '„Cijeli sastanak mlatili smo praznu slamu.” — raspravljali smo:',
    opts: ['bez ikakve koristi', 'o poljoprivredi', 'vrlo žustro', 'o nevažnim ljudima'],
    answer: 'bez ikakve koristi',
    en: 'we were threshing empty straw — talking to no purpose',
    tip: 'Mlatiti praznu slamu = govoriti mnogo, a reći ništa.',
  },
  {
    mode: 'znacenje',
    q: '„Radili su bok uz bok cijelu noć.” — radili su:',
    opts: ['jedan uz drugoga, zajedno', 'jedan protiv drugoga', 'u smjenama', 'bez odmora'],
    answer: 'jedan uz drugoga, zajedno',
    en: 'they worked side by side all night',
    tip: 'Bok uz bok = rame uz rame, u neposrednoj suradnji.',
  },
  {
    mode: 'znacenje',
    q: '„Kvantna fizika za mene je špansko selo.” — to mi je:',
    opts: ['posve nepoznato područje', 'omiljena tema', 'daleko putovanje', 'seoska idila'],
    answer: 'posve nepoznato područje',
    en: 'it is all Greek to me (lit. a Spanish village)',
    tip: 'Špansko selo = nešto o čemu ne znamo ništa.',
  },
  {
    mode: 'znacenje',
    q: '„Projekt nam je visio o koncu.” — projekt je bio:',
    opts: ['pred samom propašću', 'gotovo dovršen', 'obješen na oglasnoj ploči', 'vrlo skup'],
    answer: 'pred samom propašću',
    en: 'the project hung by a thread',
    tip: 'Visjeti o koncu = biti u krajnjoj opasnosti.',
  },
  {
    mode: 'znacenje',
    q: '„On ima putra na glavi.” — on:',
    opts: ['i sam nosi dio krivnje', 'voli dobro jesti', 'lako se uvrijedi', 'bogat je'],
    answer: 'i sam nosi dio krivnje',
    en: 'he has butter on his head — he is not innocent himself',
    tip: 'Imati putra na glavi = ne biti bez grijeha, pa bolje šutjeti.',
  },
  {
    mode: 'dopuna',
    q: 'Tko pod drugim jamu kopa, sam u nju ____.',
    opts: ['pada', 'skače', 'gleda', 'sjedne'],
    answer: 'pada',
    en: 'who digs a pit for another falls into it himself',
    tip: 'Poslovica o zlobi koja se vraća počinitelju.',
  },
  {
    mode: 'dopuna',
    q: 'Bez muke nema ____.',
    opts: ['nauke', 'kruha', 'sreće', 'plaće'],
    answer: 'nauke',
    en: 'no pain, no gain (no learning without effort)',
    tip: 'Rimovana poslovica: muke — nauke.',
  },
  {
    mode: 'dopuna',
    q: 'Vuk dlaku mijenja, ali ____ nikada.',
    opts: ['ćud', 'zube', 'ime', 'šumu'],
    answer: 'ćud',
    en: 'a wolf changes his coat but never his nature',
    tip: 'Ćud = narav; ljudi se u biti ne mijenjaju.',
  },
  {
    mode: 'dopuna',
    q: 'Ispeci pa ____.',
    opts: ['reci', 'jedi', 'šuti', 'kreni'],
    answer: 'reci',
    en: 'bake it, then say it — think before you speak',
    tip: 'Poziv na promišljanje prije izjave.',
  },
  {
    mode: 'dopuna',
    q: 'Krv nije ____.',
    opts: ['voda', 'vino', 'more', 'sok'],
    answer: 'voda',
    en: 'blood is thicker than water',
    tip: 'Obiteljske veze jače su od ostalih.',
  },
  {
    mode: 'dopuna',
    q: 'Željezo se kuje dok je ____.',
    opts: ['vruće', 'novo', 'meko', 'sjajno'],
    answer: 'vruće',
    en: 'strike while the iron is hot',
    tip: 'Priliku valja iskoristiti odmah.',
  },
  {
    mode: 'dopuna',
    q: 'Tiha voda ____ dere.',
    opts: ['brege', 'kamen', 'korito', 'obale'],
    answer: 'brege',
    en: 'still waters run deep (quiet water wears down hills)',
    tip: 'Frazem čuva stariji lik „brege” (brjegove).',
  },
  {
    mode: 'dopuna',
    q: 'Što možeš danas, ne ostavljaj za ____.',
    opts: ['sutra', 'poslije', 'druge', 'starost'],
    answer: 'sutra',
    en: 'do not put off until tomorrow what you can do today',
    tip: 'Ustaljeni oblik završava na „sutra”.',
  },
  {
    mode: 'registar',
    q: 'U svečanom govoru: „Zahvaljujem svima koji su nam ____ ruku u teškim trenucima.”',
    opts: ['pružili', 'dali', 'digli', 'stisnuli'],
    answer: 'pružili',
    en: 'thanks to all who extended a hand in hard times',
    tip: 'Pružiti (komu) ruku = ponuditi pomoć; svečano-neutralan izraz.',
  },
  {
    mode: 'registar',
    q: '„Nakon deset godina uzaludnih pokušaja, ____ je koplje u trnje.”',
    opts: ['bacio', 'stavio', 'zabio', 'spustio'],
    answer: 'bacio',
    en: 'after ten futile years he threw in the towel',
    tip: 'Baciti koplje u trnje = odustati od borbe.',
  },
  {
    mode: 'registar',
    q: 'Njegov uspjeh mnogima je bio ____ u oku.',
    opts: ['trn', 'prst', 'kamen', 'dim'],
    answer: 'trn',
    en: 'his success was a thorn in many an eye',
    tip: 'Biti komu trn u oku = smetati, izazivati zavist.',
  },
  {
    mode: 'registar',
    q: 'Ostavka ministra bila je kap koja je ____ čašu.',
    opts: ['prelila', 'napunila', 'razbila', 'iskapila'],
    answer: 'prelila',
    en: 'the minister’s resignation was the last straw',
    tip: 'Kap koja je prelila čašu = posljednji povod nakon mnogih.',
  },
  {
    mode: 'registar',
    q: 'Kad su svi oklijevali, ona je uzela stvar u svoje ____.',
    opts: ['ruke', 'noge', 'srce', 'okvire'],
    answer: 'ruke',
    en: 'she took matters into her own hands',
    tip: 'Uzeti stvar u svoje ruke = preuzeti inicijativu.',
  },
  {
    mode: 'registar',
    q: 'Obećao je i, kao uvijek, ____ riječ.',
    opts: ['održao', 'izdao', 'primio', 'čuvao'],
    answer: 'održao',
    en: 'he promised and, as always, kept his word',
    tip: 'Održati riječ = ispuniti obećanje (prekršiti = pogaziti riječ).',
  },
  {
    mode: 'registar',
    q: '„Nemam s njima ništa — ni rod ni ____.”',
    opts: ['pomozi bog', 'prijatelj', 'susjed', 'dug'],
    answer: 'pomozi bog',
    en: 'no kin, no connection whatsoever',
    tip: 'Ni rod ni pomozi bog = bez ikakve veze s kim.',
  },
  {
    mode: 'registar',
    q: 'Cijelo je popodne trla baba lan da joj prođe ____.',
    opts: ['dan', 'vijek', 'sat', 'trud'],
    answer: 'dan',
    en: 'busywork to pass the time',
    tip: 'Trla baba lan… = besposleno zanimanje bez svrhe.',
  },
];

export { DATA as FRAZEOLOGIJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function FrazeologijaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="frazeologija"
      title={'🪢 Frazeologija'}
      subtitle={'doći na zelenu granu — idioms the C2 way'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — frazemi su vam u malom prstu! 🏆',
        good: 'Vrlo dobro poznavanje frazema! 💪',
        more: 'Frazemi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
