import React from 'react';
import ModeDrill from './ModeDrill';

// C1 passive-participle drill (C1 tranche 5, 2026-08-15): formation
// (-en/-an/-jen), the jotation table (t→ć, d→đ, s→š, z→ž, c→č, p/b/m→plj/
// blj/mlj) and usage in passives and as plain adjectives.
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  jotacija: '🌀 Jotacija',
  uporaba: '🎯 Uporaba',
};

const DATA = [
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „otvoriti” glasi:',
    opts: ['otvoren', 'otvorit', 'otvaran', 'otvorjen'],
    answer: 'otvoren',
    en: 'opened',
    tip: 'I-glagoli: osnova + -en (otvoren, učinjen).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „kupiti” glasi:',
    opts: ['kupljen', 'kupen', 'kupit', 'kupovan'],
    answer: 'kupljen',
    en: 'bought',
    tip: 'P + j → plj: kupljen (epentetsko l).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „donijeti” glasi:',
    opts: ['donesen', 'donijet svuda', 'donešen', 'donosen'],
    answer: 'donesen',
    en: 'brought',
    tip: 'Standard: donesen (donešen je razgovorno).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „napisati” glasi:',
    opts: ['napisan', 'napišen', 'napisat', 'napisani svi'],
    answer: 'napisan',
    en: 'written',
    tip: 'A-glagoli: -an (napisan, pročitan).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „vidjeti” glasi:',
    opts: ['viđen', 'vidjen', 'viden', 'vidjet'],
    answer: 'viđen',
    en: 'seen',
    tip: 'D + j → đ: viđen.',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „pozvati” glasi:',
    opts: ['pozvan', 'pozven', 'pozivan', 'pozvat'],
    answer: 'pozvan',
    en: 'invited',
    tip: 'Pozvati → pozvan; pozivan je od nesvršenoga.',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „prevesti” glasi:',
    opts: ['preveden', 'prevešen', 'prevožen', 'prevedjen'],
    answer: 'preveden',
    en: 'translated',
    tip: 'Prevesti → preveden (kao dovesti → doveden).',
  },
  {
    mode: 'tvorba',
    q: 'Trpni pridjev glagola „zaposliti” glasi:',
    opts: ['zaposlen', 'zapošljen', 'zaposljen', 'zaposlit'],
    answer: 'zaposlen',
    en: 'employed',
    tip: 'Zaposliti → zaposlen (bez jotacije sl).',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „baciti” glasi:',
    opts: ['bačen', 'bacen', 'bacjen', 'bačan'],
    answer: 'bačen',
    en: 'thrown',
    tip: 'C + j → č: bačen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „platiti” glasi:',
    opts: ['plaćen', 'platjen', 'platen', 'plačen'],
    answer: 'plaćen',
    en: 'paid',
    tip: 'T + j → ć: plaćen (NE plačen!).',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „roditi” glasi:',
    opts: ['rođen', 'rodjen', 'roden', 'rođan'],
    answer: 'rođen',
    en: 'born',
    tip: 'D + j → đ: rođen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „nositi” glasi:',
    opts: ['nošen', 'nosjen', 'nosen', 'nošan'],
    answer: 'nošen',
    en: 'carried, worn',
    tip: 'S + j → š: nošen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „paziti” (čuvan) glasi:',
    opts: ['pažen', 'pazjen', 'pazen', 'pažan'],
    answer: 'pažen',
    en: 'looked after',
    tip: 'Z + j → ž: pažen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „ljubiti” glasi:',
    opts: ['ljubljen', 'ljuben', 'ljubjen', 'ljubit'],
    answer: 'ljubljen',
    en: 'kissed, beloved',
    tip: 'B + j → blj: ljubljen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „slomiti” glasi:',
    opts: ['slomljen', 'slomjen', 'slomen', 'slomit'],
    answer: 'slomljen',
    en: 'broken',
    tip: 'M + j → mlj: slomljen.',
  },
  {
    mode: 'jotacija',
    q: 'Trpni pridjev glagola „uhvatiti” glasi:',
    opts: ['uhvaćen', 'uhvatjen', 'uhvačen', 'uhvaten'],
    answer: 'uhvaćen',
    en: 'caught',
    tip: 'T + j → ć: uhvaćen.',
  },
  {
    mode: 'uporaba',
    q: 'Izvještaj je ____ jučer. (predati)',
    opts: ['predan', 'predavši', 'predajen', 'predavan'],
    answer: 'predan',
    en: 'the report was submitted yesterday',
    tip: 'Pasiv perfekta: je + trpni pridjev.',
  },
  {
    mode: 'uporaba',
    q: 'Vrata su bila ____ cijelu noć. (otvoriti)',
    opts: ['otvorena', 'otvorene', 'otvoreni', 'otvoreno'],
    answer: 'otvorena',
    en: 'the door was open all night',
    tip: 'Vrata (sr. mn.): otvorena.',
  },
  {
    mode: 'uporaba',
    q: 'Trpni pridjev može biti i pravi pridjev, npr.:',
    opts: ['poznati glumac (od poznati)', 'trčati brzo', 'pjevajući ptić', 'otišavši gost'],
    answer: 'poznati glumac (od poznati)',
    en: 'participles become plain adjectives',
    tip: 'Poznat, otvoren, zatvoren — pridjevska služba.',
  },
  {
    mode: 'uporaba',
    q: '„Kava je ____ .” (popiti)',
    opts: ['popijena', 'popijela', 'popivena', 'popila'],
    answer: 'popijena',
    en: 'the coffee has been drunk',
    tip: 'Popiti → popijen, -a (piti → pijen).',
  },
  {
    mode: 'uporaba',
    q: 'Pjesma ____ prije sto godina još se pjeva. (napisati)',
    opts: ['napisana', 'napisavši', 'koja je pisala', 'napišena'],
    answer: 'napisana',
    en: 'a song written a hundred years ago',
    tip: 'Trpni pridjev skraćuje odnosnu rečenicu.',
  },
  {
    mode: 'uporaba',
    q: 'Trpni se pridjev tvori u pravilu od:',
    opts: ['prijelaznih glagola', 'neprijelaznih glagola', 'povratnih glagola', 'modalnih glagola'],
    answer: 'prijelaznih glagola',
    en: 'passives come from transitive verbs',
    tip: 'Samo ono što se može „trpjeti”: čitan, viđen, kupljen.',
  },
  {
    mode: 'uporaba',
    q: 'Stan je ____ prošle godine. (prodati)',
    opts: ['prodan', 'prodavši', 'prodavan', 'prodajen'],
    answer: 'prodan',
    en: 'the flat was sold last year',
    tip: 'Prodati → prodan (prodavan = nesvršeno, više puta).',
  },
  {
    mode: 'uporaba',
    q: '„____ smo o promjenama.” (obavijestiti)',
    opts: ['Obaviješteni', 'Obavijestili', 'Obavještavani stalno', 'Obavijestivši'],
    answer: 'Obaviješteni',
    en: 'we have been informed of the changes',
    tip: 'St + j → št: obaviješten.',
  },
];

export { DATA as TRPNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TrpniDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="trpni"
      title={'🛠️ Trpni pridjev'}
      subtitle={'plaćen, rođen, slomljen — the passive participle and its sound changes'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — trpni je vaš! 🏆',
        good: 'Vrlo dobro vladanje trpnim pridjevom! 💪',
        more: 'Trpni pridjev traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
