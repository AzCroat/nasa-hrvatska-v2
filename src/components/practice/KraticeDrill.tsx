import React from 'react';
import ModeDrill from './ModeDrill';

// C2 abbreviations-and-foreign-names drill (C2 tranche 5, 2026-08-15):
// declining initialisms with a hyphen (NATO-a, HNK-u, NATO-ov), declining
// foreign names without one (Shakespearea, Camusa, u New Yorku), phonetized
// relational adjectives (njujorski) and adapted loans (vikend, e-posta).
const MODE_LABEL: Record<string, string> = {
  kratice: '🅰️ Kratice',
  strana: '🌍 Strana imena',
  pisanje: '✍️ Pisanje',
};

const DATA = [
  {
    mode: 'kratice',
    q: 'Genitiv kratice „NATO” glasi:',
    opts: ['NATO-a', 'NATOA', 'NATO-ja', 'NATA'],
    answer: 'NATO-a',
    en: 'of NATO',
    tip: 'Kratice se sklanjaju sa spojnicom: NATO-a, NATO-u.',
  },
  {
    mode: 'kratice',
    q: 'Genitiv kratice „HDZ” glasi:',
    opts: ['HDZ-a', 'HDZA', 'HDZ-ja', 'HDZe'],
    answer: 'HDZ-a',
    en: 'of the HDZ',
    tip: 'Izgovorne kratice: HDZ-a, HNK-a, SAD-a.',
  },
  {
    mode: 'kratice',
    q: '„Radim u ____ .” (HNK)',
    opts: ['HNK-u', 'HNKu', 'HNK', 'HNK-i'],
    answer: 'HNK-u',
    en: 'I work at the Croatian National Theatre',
    tip: 'Lokativ: u HNK-u (spojnica + nastavak).',
  },
  {
    mode: 'kratice',
    q: 'Posvojni pridjev od „NATO” glasi:',
    opts: ['NATO-ov', 'NATOov', 'NATO-in', 'NATO-ski'],
    answer: 'NATO-ov',
    en: 'NATO\u2019s',
    tip: 'Kratica + -ov sa spojnicom: NATO-ov summit.',
  },
  {
    mode: 'kratice',
    q: 'Kratica „dr. sc.” znači:',
    opts: ['doktor znanosti', 'dragi suradnik', 'doktor scene', 'državni savjetnik'],
    answer: 'doktor znanosti',
    en: 'doctor of science (PhD)',
    tip: 'Dr. sc. = doktor znanosti; dr. med. = doktor medicine.',
  },
  {
    mode: 'kratice',
    q: 'Kratice poput „npr.” i „itd.” pišu se:',
    opts: ['malim slovom s točkom', 'velikim slovima', 'bez točke', 'sa spojnicom'],
    answer: 'malim slovom s točkom',
    en: 'npr. and itd. are lowercase with periods',
    tip: 'Opće kratice: npr., itd., tzv., str.',
  },
  {
    mode: 'kratice',
    q: 'Množina od „CD” u rečenici „Kupio sam tri ____ ”:',
    opts: ['CD-a', 'CD-ova', 'CDa', 'CD'],
    answer: 'CD-a',
    en: 'three CDs (gen. sg. after 3)',
    tip: 'Uz brojeve 2-4: genitiv jednine — tri CD-a.',
  },
  {
    mode: 'kratice',
    q: 'Kratica „gđa” (gospođa) piše se:',
    opts: ['bez točke (gđa)', 's točkom (gđa.)', 'velikim (GĐA)', 'sa spojnicom (g-đa)'],
    answer: 'bez točke (gđa)',
    en: 'Mrs — no period (contraction)',
    tip: 'Sažete kratice bez točke: gđa, dr (u dr. je točka jer je odsječena).',
  },
  {
    mode: 'strana',
    q: 'Genitiv imena „Chicago” glasi:',
    opts: ['Chicaga', 'Chicagoa', 'Chicago-a', 'Chicagja'],
    answer: 'Chicaga',
    en: 'of Chicago',
    tip: 'Strana imena na -o: sklanjaju se bez spojnice (Chicaga).',
  },
  {
    mode: 'strana',
    q: 'Genitiv imena „Shakespeare” glasi:',
    opts: ['Shakespearea', 'Shakespeare-a', 'Shakespearja', 'Shakespira'],
    answer: 'Shakespearea',
    en: 'of Shakespeare',
    tip: 'Strana imena: nastavak izravno (Shakespearea, Shakespeareu).',
  },
  {
    mode: 'strana',
    q: 'Posvojni pridjev od „Goethe” glasi:',
    opts: ['Goetheov', 'Goethe-ov', 'Goethin', 'Goethev'],
    answer: 'Goetheov',
    en: 'Goethe\u2019s',
    tip: 'Strana imena + -ov bez spojnice: Goetheov.',
  },
  {
    mode: 'strana',
    q: 'Instrumental imena „George” (izgovor džordž) glasi:',
    opts: ['Georgeom', 'George-om', 'Georgeem', 'Georgom'],
    answer: 'Georgeom',
    en: 'with George',
    tip: 'Nastavci se dodaju na pisani oblik: s Georgeom.',
  },
  {
    mode: 'strana',
    q: 'Genitiv imena „Camus” (izgovor kami) glasi:',
    opts: ['Camusa', 'Camus-a', 'Camuja', 'Camusea'],
    answer: 'Camusa',
    en: 'of Camus',
    tip: 'I nijemi suglasnik dobiva nastavak izravno: Camusa.',
  },
  {
    mode: 'strana',
    q: 'Žensko strano ime „Ines” u genitivu:',
    opts: ['Ines', 'Inese', 'Ines-e', 'Inesi'],
    answer: 'Ines',
    en: 'of Ines — indeclinable',
    tip: 'Ženska imena na suglasnik ne sklanjaju se.',
  },
  {
    mode: 'strana',
    q: 'Ime grada „New York” u lokativu:',
    opts: ['New Yorku', 'New York-u', 'Novom Yorku', 'New Yorkovu'],
    answer: 'New Yorku',
    en: 'in New York',
    tip: 'Sklanja se posljednja sastavnica: u New Yorku.',
  },
  {
    mode: 'strana',
    q: 'Pridjev od „New York” glasi:',
    opts: ['njujorški', 'newyorški', 'new-yorški', 'New Yorški'],
    answer: 'njujorški',
    en: 'New York (adj) — phonetized',
    tip: 'Odnosni pridjevi od stranih imena fonetiziraju se: njujorški, minhenski.',
  },
  {
    mode: 'pisanje',
    q: 'Posuđenica „e-mail” u hrvatskome standardu najbolje:',
    opts: ['e-pošta', 'imejl uvijek', 'E-mail', 'mejl u dopisu'],
    answer: 'e-pošta',
    en: 'e-mail → e-posta (standard)',
    tip: 'Standard voli domaću zamjenu: e-pošta, e-adresa.',
  },
  {
    mode: 'pisanje',
    q: '„weekend” u hrvatskome standardu piše se:',
    opts: ['vikend', 'weekend', 'week-end', 'vikent'],
    answer: 'vikend',
    en: 'weekend',
    tip: 'Prilagođene posuđenice pišu se fonetski: vikend, menadžer.',
  },
  {
    mode: 'pisanje',
    q: 'Strana OSOBNA imena u hrvatskome se pišu:',
    opts: ['izvorno (Shakespeare)', 'fonetski (Šekspir)', 'velikim slovima', 'prevedeno'],
    answer: 'izvorno (Shakespeare)',
    en: 'foreign personal names keep original spelling',
    tip: 'Hrvatski čuva izvorni lik: Shakespeare, New York (za razliku od srpskoga).',
  },
  {
    mode: 'pisanje',
    q: 'Naziv „internet” kao mreža općenito piše se:',
    opts: ['malim slovom', 'velikim slovom uvijek', 'u navodnicima', 'sa spojnicom'],
    answer: 'malim slovom',
    en: 'the internet — lowercase',
    tip: 'Danas opća imenica: internet, na internetu.',
  },
  {
    mode: 'pisanje',
    q: 'Kratica za „takozvani” piše se:',
    opts: ['tzv.', 't.z.v.', 'TZV', 'tzv'],
    answer: 'tzv.',
    en: 'so-called = tzv.',
    tip: 'Tzv. s točkom, malim slovom.',
  },
  {
    mode: 'pisanje',
    q: '„SMS poruka” — bolji je oblik:',
    opts: ['SMS-poruka', 'SMS poruka je jedino', 'esemes', 'S.M.S.'],
    answer: 'SMS-poruka',
    en: 'SMS message with a hyphen',
    tip: 'Kratica + imenica vezuju se spojnicom: SMS-poruka, TV-program.',
  },
  {
    mode: 'pisanje',
    q: 'Genitiv naslova „Romeo i Julija” glasi:',
    opts: ['Romea i Julije', 'Romeo i Julije', 'Romea i Julija', 'Romeo i Julijino'],
    answer: 'Romea i Julije',
    en: 'of Romeo and Juliet',
    tip: 'Sklanjaju se obje sastavnice imena.',
  },
  {
    mode: 'pisanje',
    q: 'Ime „Dubai” u genitivu glasi:',
    opts: ['Dubaija', 'Dubaia', 'Dubai-ja', 'Dubajia'],
    answer: 'Dubaija',
    en: 'of Dubai',
    tip: 'Iza samoglasnika i umeće se j: Dubaija (kao Hawaiija).',
  },
];

export { DATA as KRATICE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KraticeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="kratice"
      title={'🔤 Kratice i strana imena'}
      subtitle={'NATO-a, Shakespearea, njujorški — declining the undeclinable'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — i strano je vaše! 🏆',
        good: 'Vrlo dobro vladanje kraticama i stranim imenima! 💪',
        more: 'Kratice i strana imena traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
