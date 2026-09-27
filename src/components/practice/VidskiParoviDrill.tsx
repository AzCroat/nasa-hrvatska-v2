import React from 'react';
import ModeDrill from './ModeDrill';

// C1 aspect-pairs drill (C1 tranche 5, 2026-08-15): prefix pairs
// (pisati/napisati), suppletive pairs (kupiti/kupovati, reci/govoriti),
// secondary imperfectivization (-avati/-ivati: zapisivati, objasnjavati)
// and meaning nuances (semelfactive -nuti, habituals, prefix semantics).
const MODE_LABEL: Record<string, string> = {
  parovi: '👯 Parovi',
  sekundarna: '🔁 Sekundarna tvorba',
  nijansa: '🌗 Nijansa',
};

const DATA = [
  {
    mode: 'parovi',
    q: 'Svršeni par glagola „pisati” glasi:',
    opts: ['napisati', 'pisnuti', 'popisati', 'upisati'],
    answer: 'napisati',
    en: 'to write → to write down (pf)',
    tip: 'Prefiks na- daje čisti svršeni par: pisati/napisati.',
  },
  {
    mode: 'parovi',
    q: 'Svršeni par glagola „čitati” glasi:',
    opts: ['pročitati', 'očitati', 'načitati', 'iščitati'],
    answer: 'pročitati',
    en: 'to read (pf)',
    tip: 'Pro- je čisti par: čitati/pročitati.',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni par glagola „kupiti” glasi:',
    opts: ['kupovati', 'kupljivati', 'kupivati', 'skupljati'],
    answer: 'kupovati',
    en: 'to buy (impf)',
    tip: 'Kupiti (pf) / kupovati (impf) — supletivna tvorba.',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni par glagola „dati” glasi:',
    opts: ['davati', 'dadavati', 'dajati', 'dodavati'],
    answer: 'davati',
    en: 'to give (impf)',
    tip: 'Dati/davati.',
  },
  {
    mode: 'parovi',
    q: 'Svršeni par glagola „piti” glasi:',
    opts: ['popiti', 'napiti', 'ispiti sve', 'zapiti'],
    answer: 'popiti',
    en: 'to drink up',
    tip: 'Piti/popiti (ispiti = do kraja, s nijansom).',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni par glagola „reći” glasi:',
    opts: ['govoriti', 'rečivati', 'rekati', 'kazivati samo'],
    answer: 'govoriti',
    en: 'to say (impf)',
    tip: 'Supletivni par: reći/govoriti (i kazati/kazivati).',
  },
  {
    mode: 'parovi',
    q: 'Svršeni par glagola „jesti” glasi:',
    opts: ['pojesti', 'najesti', 'izjesti', 'sjesti'],
    answer: 'pojesti',
    en: 'to eat up',
    tip: 'Jesti/pojesti.',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni par glagola „baciti” glasi:',
    opts: ['bacati', 'bacivati', 'izbacati', 'bacnuti'],
    answer: 'bacati',
    en: 'to throw (impf)',
    tip: 'Baciti (jednom) / bacati (više puta).',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „zapisati” glasi:',
    opts: ['zapisivati', 'zapisavati', 'pisati', 'zapisovati'],
    answer: 'zapisivati',
    en: 'to note down (impf)',
    tip: 'Sekundarna imperfektivizacija: -ivati (zapisivati).',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „potpisati” glasi:',
    opts: ['potpisivati', 'potpisavati', 'pisati', 'potpisovati'],
    answer: 'potpisivati',
    en: 'to sign (impf)',
    tip: 'Potpisati → potpisivati.',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „otvoriti” glasi:',
    opts: ['otvarati', 'otvorivati', 'otvoravati', 'tvoriti'],
    answer: 'otvarati',
    en: 'to open (impf)',
    tip: 'Otvoriti → otvarati (-ati s prijevojem).',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „kupiti” (ubrati) — „pokupiti” glasi:',
    opts: ['pokupljati', 'pokupivati', 'kupljati', 'pokupavati'],
    answer: 'pokupljati',
    en: 'to pick up (impf)',
    tip: 'Pokupiti → pokupljati.',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „objasniti” glasi:',
    opts: ['objašnjavati', 'objasnivati', 'objašnjivati', 'jasniti'],
    answer: 'objašnjavati',
    en: 'to explain (impf)',
    tip: 'Objasniti → objašnjavati (sn + j → šnj).',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „odgovoriti” glasi:',
    opts: ['odgovarati', 'odgovorivati', 'govoriti', 'odgovoravati'],
    answer: 'odgovarati',
    en: 'to answer (impf)',
    tip: 'Odgovoriti → odgovarati.',
  },
  {
    mode: 'sekundarna',
    q: 'Nesvršeni par glagola „primiti” glasi:',
    opts: ['primati', 'primivati', 'prijemati', 'primavati'],
    answer: 'primati',
    en: 'to receive (impf)',
    tip: 'Primiti → primati.',
  },
  {
    mode: 'sekundarna',
    q: 'Sekundarni nesvršeni glagoli najčešće se tvore sufiksima:',
    opts: ['-avati i -ivati', '-nuti i -snuti', '-irati i -ovati', '-jeti i -ljeti'],
    answer: '-avati i -ivati',
    en: 'secondary imperfectives use -avati/-ivati',
    tip: 'Zapisivati, objašnjavati, dogovarati.',
  },
  {
    mode: 'nijansa',
    q: '„Pisao sam pismo cijelo jutro” naglašava:',
    opts: ['trajanje radnje', 'dovršenost radnje', 'buduću radnju', 'tuđu radnju'],
    answer: 'trajanje radnje',
    en: 'the writing lasted all morning',
    tip: 'Nesvršeni vid = proces bez svršetka.',
  },
  {
    mode: 'nijansa',
    q: '„Napisao sam pismo” naglašava:',
    opts: ['dovršenost radnje', 'trajanje radnje', 'ponavljanje radnje', 'nemogućnost radnje'],
    answer: 'dovršenost radnje',
    en: 'the letter is finished',
    tip: 'Svršeni vid = rezultat.',
  },
  {
    mode: 'nijansa',
    q: '„Glagol -nuti (viknuti, skoknuti)” izriče:',
    opts: ['jednokratnu trenutnu radnju', 'trajnu radnju', 'ponavljanje', 'stanje'],
    answer: 'jednokratnu trenutnu radnju',
    en: 'semelfactive -nuti = one quick action',
    tip: 'Viknuti = viknuti jednom; vikati = vikati dulje.',
  },
  {
    mode: 'nijansa',
    q: 'Uz „svaki dan” prirodno dolazi:',
    opts: ['nesvršeni vid', 'svršeni vid', 'pluskvamperfekt', 'aorist'],
    answer: 'nesvršeni vid',
    en: 'habituals take the imperfective',
    tip: 'Svaki dan pišem/čitam/vježbam.',
  },
  {
    mode: 'nijansa',
    q: '„Upravo sam ____ zadaću.” (rezultat, maloprije)',
    opts: ['završio', 'završavao', 'završavam', 'završavajući'],
    answer: 'završio',
    en: 'I have just finished my homework',
    tip: 'Rezultat maloprije → svršeni perfekt.',
  },
  {
    mode: 'nijansa',
    q: '„Dok sam ____ , netko je pokucao.” (kuhati)',
    opts: ['kuhao', 'skuhao', 'skuham', 'kuhajući sam'],
    answer: 'kuhao',
    en: 'while I was cooking, someone knocked',
    tip: 'Pozadinska radnja → nesvršeni vid.',
  },
  {
    mode: 'nijansa',
    q: 'Prefiks mijenja i ZNAČENJE: „prepisati” znači:',
    opts: ['pisati ponovno ili tuđe preuzeti', 'početi pisati', 'pisati ispod', 'prestati pisati'],
    answer: 'pisati ponovno ili tuđe preuzeti',
    en: 'prepisati = copy/rewrite',
    tip: 'Prefiksi nose značenje: pre- (ponovno), do- (do kraja), iz- (van).',
  },
  {
    mode: 'nijansa',
    q: '„Čitao sam tu knjigu” (bez „pro-”) može značiti:',
    opts: [
      'čitao sam je, ali možda ne do kraja',
      'sigurno sam je dovršio',
      'nikad je nisam vidio',
      'tek ću je čitati',
    ],
    answer: 'čitao sam je, ali možda ne do kraja',
    en: 'impf past leaves completion open',
    tip: 'Nesvršeni perfekt ne jamči dovršenost.',
  },
];

export { DATA as VIDSKI_PAROVI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VidskiParoviDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="vidskiparovi"
      title={'♻️ Vidski parovi'}
      subtitle={'pisati/napisati, kupiti/kupovati — building the aspect pairs'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — parovi su vaši! 🏆',
        good: 'Vrlo dobro vladanje vidskim parovima! 💪',
        more: 'Vidski parovi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
