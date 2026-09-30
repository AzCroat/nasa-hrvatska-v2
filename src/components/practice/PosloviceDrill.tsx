import React from 'react';
import ModeDrill from './ModeDrill';

// C2 proverbs drill (C2 tranche 9, 2026-08-15): completing the canonical
// proverbs, reading their meanings, and choosing the right proverb for a
// situation.
const MODE_LABEL: Record<string, string> = {
  dopuna: '🧩 Dopuna',
  znacenje: '💡 Značenje',
  uporaba: '🎯 Uporaba',
};

const DATA = [
  {
    mode: 'dopuna',
    q: '„Tko rano rani, dvije sreće ____ .”',
    opts: ['grabi', 'spava', 'gubi', 'čeka'],
    answer: 'grabi',
    en: 'a proverb about rising early',
    tip: 'Najpoznatija poslovica o marljivosti.',
  },
  {
    mode: 'dopuna',
    q: '„Ispeci pa ____ .”',
    opts: ['reci', 'jedi', 'plati', 'baci'],
    answer: 'reci',
    en: 'a proverb about thinking before speaking',
    tip: 'Promisli prije nego što kažeš.',
  },
  {
    mode: 'dopuna',
    q: '„Bez muke nema ____ .”',
    opts: ['nauke', 'ruke', 'struke', 'buke'],
    answer: 'nauke',
    en: 'a proverb about effort',
    tip: 'Trud je uvjet znanja.',
  },
  {
    mode: 'dopuna',
    q: '„Željezo se kuje dok je ____ .”',
    opts: ['vruće', 'hladno', 'tvrdo', 'sjajno'],
    answer: 'vruće',
    en: 'a proverb about seizing the moment',
    tip: 'Prilika se koristi odmah.',
  },
  {
    mode: 'dopuna',
    q: '„Vrana vrani oči ne ____ .”',
    opts: ['vadi', 'pere', 'sklapa', 'boji'],
    answer: 'vadi',
    en: 'a proverb about insiders covering for each other',
    tip: 'Svoji svoje ne odaju.',
  },
  {
    mode: 'dopuna',
    q: '„U laži su kratke ____ .”',
    opts: ['noge', 'ruke', 'riječi', 'sjene'],
    answer: 'noge',
    en: 'a proverb about lies',
    tip: 'Laž se brzo otkrije.',
  },
  {
    mode: 'dopuna',
    q: '„Tko drugome jamu kopa, sam u nju ____ .”',
    opts: ['pada', 'gleda', 'skače', 'baca'],
    answer: 'pada',
    en: 'a proverb about malice backfiring',
    tip: 'Zloba se obije o glavu.',
  },
  {
    mode: 'dopuna',
    q: '„Čovjek snuje, Bog ____ .”',
    opts: ['određuje', 'kuha', 'putuje', 'spava'],
    answer: 'određuje',
    en: 'a proverb about plans',
    tip: 'Planovi su krhki.',
  },
  {
    mode: 'znacenje',
    q: '„Tiha voda brege dere” znači:',
    opts: [
      'mirni ljudi kriju neočekivanu snagu',
      'voda uništava',
      'šutnja je zlato',
      'planine su opasne',
    ],
    answer: 'mirni ljudi kriju neočekivanu snagu',
    en: 'quiet water wears away the banks',
    tip: 'Od tihih, povučenih ljudi može se očekivati i ono što nitko ne bi rekao.',
  },
  {
    mode: 'znacenje',
    q: '„Nije zlato sve što sja” znači:',
    opts: ['izgled vara', 'zlato je bezvrijedno', 'sjaj je važan', 'kupuj zlato'],
    answer: 'izgled vara',
    en: 'all that glitters is not gold',
    tip: 'Vanjština nije mjerilo.',
  },
  {
    mode: 'znacenje',
    q: '„Papir trpi sve” znači:',
    opts: [
      'napisati se može bilo što — istina je drugo',
      'papir je izdržljiv',
      'pisma su duga',
      'tiskara griješi',
    ],
    answer: 'napisati se može bilo što — istina je drugo',
    en: 'paper endures anything',
    tip: 'Zapisano nije nužno istinito.',
  },
  {
    mode: 'znacenje',
    q: '„Odijelo ne čini čovjeka” znači:',
    opts: ['vrijednost nije u vanjštini', 'odjeća je skupa', 'krojači griješe', 'moda prolazi'],
    answer: 'vrijednost nije u vanjštini',
    en: 'clothes do not make the man',
    tip: 'Karakter iznad izgleda.',
  },
  {
    mode: 'znacenje',
    q: '„Krv nije voda” znači:',
    opts: [
      'obiteljske veze su snažne',
      'krv je gušća tekućina',
      'voda je zdravija',
      'rodbina se svađa',
    ],
    answer: 'obiteljske veze su snažne',
    en: 'blood is thicker than water',
    tip: 'Obitelj se osjeti.',
  },
  {
    mode: 'znacenje',
    q: '„Daleko od očiju, daleko od srca” znači:',
    opts: [
      'odsutni se brzo zaboravljaju',
      'ljubav je slijepa',
      'oči su ogledalo',
      'srce je daleko',
    ],
    answer: 'odsutni se brzo zaboravljaju',
    en: 'out of sight, out of mind',
    tip: 'Udaljenost hladi osjećaje.',
  },
  {
    mode: 'znacenje',
    q: '„Jabuka ne pada daleko od stabla” znači:',
    opts: ['djeca nalikuju roditeljima', 'voće brzo trune', 'stabla su niska', 'berba je blizu'],
    answer: 'djeca nalikuju roditeljima',
    en: 'the apple does not fall far from the tree',
    tip: 'Nasljeđe se vidi.',
  },
  {
    mode: 'znacenje',
    q: '„Prvo skoči pa reci hop” upozorava:',
    opts: ['ne hvali se prije učinka', 'skači više', 'budi brz', 'govori glasno'],
    answer: 'ne hvali se prije učinka',
    en: 'do not say hop before you jump',
    tip: 'Obrnuta pouka: učini pa objavi.',
  },
  {
    mode: 'uporaba',
    q: 'Kolega stalno odgađa posao. Prikladna poslovica:',
    opts: [
      'Što možeš danas, ne ostavljaj za sutra.',
      'Tiha voda brege dere.',
      'Krv nije voda.',
      'Vrana vrani oči ne vadi.',
    ],
    answer: 'Što možeš danas, ne ostavljaj za sutra.',
    en: 'a colleague keeps putting off work',
    tip: 'Poslovica protiv odgađanja.',
  },
  {
    mode: 'uporaba',
    q: 'Netko sudi ljude po odjeći. Prikladna poslovica:',
    opts: [
      'Odijelo ne čini čovjeka.',
      'Ispeci pa reci.',
      'U laži su kratke noge.',
      'Željezo se kuje dok je vruće.',
    ],
    answer: 'Odijelo ne čini čovjeka.',
    en: 'judging by appearance',
    tip: 'Protiv površnosti.',
  },
  {
    mode: 'uporaba',
    q: 'Prijatelj je izlanuo neprovjerenu vijest. Prikladna poslovica:',
    opts: ['Ispeci pa reci.', 'Bez muke nema nauke.', 'Krv nije voda.', 'Tko rano rani…'],
    answer: 'Ispeci pa reci.',
    en: 'a friend blurted out unverified news',
    tip: 'Za brzoplete jezike.',
  },
  {
    mode: 'uporaba',
    q: 'Prilika je savršena — treba djelovati ODMAH:',
    opts: [
      'Željezo se kuje dok je vruće.',
      'Papir trpi sve.',
      'Daleko od očiju…',
      'Odijelo ne čini čovjeka.',
    ],
    answer: 'Željezo se kuje dok je vruće.',
    en: 'the moment is perfect',
    tip: 'Poslovica trenutka.',
  },
  {
    mode: 'uporaba',
    q: 'Lijenom studentu pred ispit poručujemo:',
    opts: ['Bez muke nema nauke.', 'Krv nije voda.', 'Nije zlato sve što sja.', 'Vrana vrani…'],
    answer: 'Bez muke nema nauke.',
    en: 'to a lazy student before an exam',
    tip: 'Trud prije znanja.',
  },
  {
    mode: 'uporaba',
    q: 'Sin je izrastao u očevu sliku. Kažemo:',
    opts: [
      'Jabuka ne pada daleko od stabla.',
      'U laži su kratke noge.',
      'Tiha voda brege dere.',
      'Papir trpi sve.',
    ],
    answer: 'Jabuka ne pada daleko od stabla.',
    en: 'the son grew up just like his father',
    tip: 'Nasljednost osobina.',
  },
  {
    mode: 'uporaba',
    q: 'Spletkar je stradao od vlastite spletke:',
    opts: [
      'Tko drugome jamu kopa, sam u nju pada.',
      'Ispeci pa reci.',
      'Krv nije voda.',
      'Tko rano rani…',
    ],
    answer: 'Tko drugome jamu kopa, sam u nju pada.',
    en: 'the schemer was caught in his own scheme',
    tip: 'Poetska pravda.',
  },
  {
    mode: 'uporaba',
    q: 'Poslovice u eseju rabimo:',
    opts: [
      'štedljivo, kao začin argumenta',
      'u svakoj rečenici',
      'umjesto dokaza',
      'samo u naslovu',
    ],
    answer: 'štedljivo, kao začin argumenta',
    en: 'proverbs in an essay',
    tip: 'Mjera je stil.',
  },
];

export { DATA as POSLOVICE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PosloviceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="poslovice"
      title={'🌾 Poslovice'}
      subtitle={'tko rano rani, ispeci pa reci — the wisdom in the language'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — narodna mudrost je vaša! 🏆',
        good: 'Vrlo dobro poznavanje poslovica! 💪',
        more: 'Poslovice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
