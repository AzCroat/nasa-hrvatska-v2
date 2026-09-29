import React from 'react';
import ModeDrill from './ModeDrill';

// B2 spatial-prepositions drill (B2 tranche 5, 2026-08-15): direction vs
// location — u/na + A (kamo) vs + L (gdje), pod/nad/pred/za + A vs + I,
// and the paired systems (u/iz, na/s, k/kod).
const MODE_LABEL: Record<string, string> = {
  kamo: '➡️ Kamo?',
  gdje: '📍 Gdje?',
  parovi: '🔁 Parovi',
};

const DATA = [
  {
    mode: 'kamo',
    q: 'Idem ____ školu. (smjer)',
    opts: ['u', 'na', 'k', 'iz'],
    answer: 'u',
    en: 'I am going to school',
    tip: 'Smjer (kamo?) → u + AKUZATIV: u školu.',
  },
  {
    mode: 'kamo',
    q: 'Stavio sam knjigu ____ stol.',
    opts: ['na', 'u', 'o', 'k'],
    answer: 'na',
    en: 'I put the book on the table',
    tip: 'Smjer → na + akuzativ: na stol.',
  },
  {
    mode: 'kamo',
    q: 'Mačka se zavukla ____ krevet. (smjer)',
    opts: ['pod', 'po', 'na', 'pri'],
    answer: 'pod',
    en: 'the cat crawled under the bed',
    tip: 'Smjer → pod + akuzativ: pod krevet.',
  },
  {
    mode: 'kamo',
    q: 'Nadvili su se oblaci ____ grad.',
    opts: ['nad', 'na', 'o', 'u'],
    answer: 'nad',
    en: 'clouds gathered over the city',
    tip: 'Smjer → nad + akuzativ: nad grad.',
  },
  {
    mode: 'kamo',
    q: 'Stao je ____ ploču. (smjer)',
    opts: ['pred', 'prije', 'pored', 'po'],
    answer: 'pred',
    en: 'he stepped in front of the board',
    tip: 'Smjer → pred + akuzativ: pred ploču.',
  },
  {
    mode: 'kamo',
    q: 'Idemo ____ more ovog ljeta.',
    opts: ['na', 'u', 'k', 'o'],
    answer: 'na',
    en: 'we are going to the seaside this summer',
    tip: 'Na more, na Hvar, na fakultet — ustaljeno NA + A.',
  },
  {
    mode: 'kamo',
    q: 'Sakrio se ____ zavjesu. (smjer)',
    opts: ['za', 'iza', 'od', 'po'],
    answer: 'za',
    en: 'he hid behind the curtain (motion)',
    tip: 'Smjer → za + akuzativ (iza bi tražio genitiv).',
  },
  {
    mode: 'kamo',
    q: 'Na pitanje „kamo?” prijedlozi u/na traže:',
    opts: ['akuzativ', 'lokativ', 'genitiv', 'instrumental'],
    answer: 'akuzativ',
    en: 'kamo? takes the accusative',
    tip: 'Kamo ideš? U grad, na trg — akuzativ smjera.',
  },
  {
    mode: 'gdje',
    q: 'Učim ____ školi. (mjesto)',
    opts: ['u', 'na', 'o', 'pri'],
    answer: 'u',
    en: 'I study at school',
    tip: 'Mjesto (gdje?) → u + LOKATIV: u školi.',
  },
  {
    mode: 'gdje',
    q: 'Knjiga je ____ stolu.',
    opts: ['na', 'u', 'o', 'za'],
    answer: 'na',
    en: 'the book is on the table',
    tip: 'Mjesto → na + lokativ: na stolu.',
  },
  {
    mode: 'gdje',
    q: 'Mačka spava ____ krevetom.',
    opts: ['pod', 'po', 'nad', 'u'],
    answer: 'pod',
    en: 'the cat sleeps under the bed',
    tip: 'Mjesto → pod + INSTRUMENTAL: pod krevetom.',
  },
  {
    mode: 'gdje',
    q: 'Zrakoplov kruži ____ gradom.',
    opts: ['nad', 'na', 'po', 'o'],
    answer: 'nad',
    en: 'the plane circles above the city',
    tip: 'Mjesto → nad + instrumental: nad gradom.',
  },
  {
    mode: 'gdje',
    q: 'Stoji ____ pločom.',
    opts: ['pred', 'prije', 'pri', 'po'],
    answer: 'pred',
    en: 'he stands in front of the board',
    tip: 'Mjesto → pred + instrumental: pred pločom.',
  },
  {
    mode: 'gdje',
    q: 'Ljetujemo ____ moru.',
    opts: ['na', 'u', 'o', 'k'],
    answer: 'na',
    en: 'we spend summers at the seaside',
    tip: 'Ljetovati NA moru (u moru = u vodi!).',
  },
  {
    mode: 'gdje',
    q: 'Ključ je ____ vratima. (iza njih, mirovanje)',
    opts: ['za', 'iza', 'kod', 'o'],
    answer: 'za',
    en: 'the key is behind the door',
    tip: 'Mirovanje → za + instrumental (iza bi tražio genitiv).',
  },
  {
    mode: 'gdje',
    q: 'Na pitanje „gdje?” prijedlozi pod/nad/pred/za traže:',
    opts: ['instrumental', 'akuzativ', 'lokativ', 'genitiv'],
    answer: 'instrumental',
    en: 'for "where?" (location), which case do pod/nad/pred/za govern?',
    tip: 'Pod krevetom, nad gradom, pred kućom, za stolom.',
  },
  {
    mode: 'parovi',
    q: '„Idem u grad” prema „živim u gradu” pokazuje razliku:',
    opts: ['smjer (A) i mjesto (L)', 'vremena i mjesta', 'uzroka i cilja', 'roda i broja'],
    answer: 'smjer (A) i mjesto (L)',
    en: 'direction vs location',
    tip: 'Isti prijedlog, drugi padež — kamo/gdje.',
  },
  {
    mode: 'parovi',
    q: 'Sjedimo ____ stolom i razgovaramo.',
    opts: ['za', 'na', 'u', 'o'],
    answer: 'za',
    en: 'we sit at the table talking',
    tip: 'Za stolom (mjesto, I); sjesti ZA STOL (smjer, A).',
  },
  {
    mode: 'parovi',
    q: 'Sjeo je ____ stol.',
    opts: ['za', 'u', 'o', 'k'],
    answer: 'za',
    en: 'he sat down at the table',
    tip: 'Smjer → za + akuzativ: sjesti za stol.',
  },
  {
    mode: 'parovi',
    q: 'Prolazimo ____ mostom. (ispod njega)',
    opts: ['pod', 'po', 'preko', 'na'],
    answer: 'pod',
    en: 'we pass under the bridge',
    tip: 'Kretanje ispod = pod + instrumental.',
  },
  {
    mode: 'parovi',
    q: 'Izašao je ____ kuće.',
    opts: ['iz', 'od', 's', 'u'],
    answer: 'iz',
    en: 'he came out of the house',
    tip: 'Iz + genitiv — par prijedloga u (u kuću/iz kuće).',
  },
  {
    mode: 'parovi',
    q: 'Vraćam se ____ posla.',
    opts: ['s', 'sa', 'iz', 'od'],
    answer: 's',
    en: 'I am coming back from work',
    tip: 'Na posao → s posla; „sa” samo ispred s/š/z/ž.',
  },
  {
    mode: 'parovi',
    q: 'Idem ____ liječniku.',
    opts: ['k', 'kod', 'u', 'na'],
    answer: 'k',
    en: 'I am going to the doctor',
    tip: 'Smjer prema osobi: k + dativ (k liječniku).',
  },
  {
    mode: 'parovi',
    q: 'Bio sam ____ liječnika.',
    opts: ['kod', 'k', 'u', 'od'],
    answer: 'kod',
    en: 'I was at the doctor',
    tip: 'Mjesto kod osobe: kod + genitiv.',
  },
];

export { DATA as PROSTORNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ProstorniDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prostorni"
      title={'🧭 Prostorni prijedlozi'}
      subtitle={'u školu / u školi, pod krevet / pod krevetom — direction or location?'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — prostor je vaš! 🏆',
        good: 'Vrlo dobro vladanje prostornim prijedlozima! 💪',
        more: 'Prostorni prijedlozi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
