import React from 'react';
import ModeDrill from './ModeDrill';

// C2 academic-register drill (C2 tranche 4, 2026-08-15): nominalization
// (glagolske imenice, baviti se + I), the passive and se-passive of research
// prose (podatci su prikupljeni, smatra se da), and hedging (mogli bi
// upućivati, u pravilu, nije isključeno).
const MODE_LABEL: Record<string, string> = {
  nominalizacija: '🏗️ Nominalizacija',
  pasiv: '🧪 Pasiv',
  ograda: '🛡️ Ograde',
};

const DATA = [
  {
    mode: 'nominalizacija',
    q: 'Glagol „istražiti” → imenica:',
    opts: ['istraživanje', 'istražitelj', 'istraženo', 'istražljivost'],
    answer: 'istraživanje',
    en: 'which noun names the activity?',
    tip: 'Glagolske imenice na -nje nose akademski stil.',
  },
  {
    mode: 'nominalizacija',
    q: 'Glagol „zaključiti” → imenica:',
    opts: ['zaključak', 'zaključenje svega', 'zaključivač', 'zaključnost'],
    answer: 'zaključak',
    en: 'which noun names the result?',
    tip: 'Zaključak rada; donijeti zaključak.',
  },
  {
    mode: 'nominalizacija',
    q: 'Glagol „primijeniti” → imenica:',
    opts: ['primjena', 'primjenjivač', 'primijenjenost', 'primjenba'],
    answer: 'primjena',
    en: 'which noun names the activity?',
    tip: 'Primjena metode, u primjeni.',
  },
  {
    mode: 'nominalizacija',
    q: 'Glagol „objasniti” → imenica:',
    opts: ['objašnjenje', 'objasnidba', 'objasnitelj', 'objašnjivost'],
    answer: 'objašnjenje',
    en: 'which noun names the result?',
    tip: 'Ponuditi objašnjenje; uz objašnjenje.',
  },
  {
    mode: 'nominalizacija',
    q: '„Rad se bavi time što se ljudi iseljavaju” akademski: „Rad se bavi ____ stanovništva.”',
    opts: ['iseljavanjem', 'iseliti', 'iseljeni', 'iseljenicima'],
    answer: 'iseljavanjem',
    en: 'the paper deals with the emigration of the population',
    tip: 'Nominalizacija: baviti se + instrumental glagolske imenice.',
  },
  {
    mode: 'nominalizacija',
    q: '„Cijene rastu” nominalizirano: „____ cijena”',
    opts: ['rast', 'rastenje', 'rastućost', 'porastlost'],
    answer: 'rast',
    en: 'turn the clause into a noun phrase',
    tip: 'Rast cijena, pad potražnje — imenički stil.',
  },
  {
    mode: 'nominalizacija',
    q: '„Uvesti novu metodu” → „____ nove metode”',
    opts: ['uvođenje', 'uvedba', 'uvoz', 'uvedenost'],
    answer: 'uvođenje',
    en: 'turn the verb phrase into a noun phrase',
    tip: 'Uvođenje + genitiv objekta.',
  },
  {
    mode: 'nominalizacija',
    q: 'Nominalizacija u akademskom stilu služi:',
    opts: [
      'sažimanju i neosobnosti',
      'zabavi čitatelja',
      'izražavanju osjećaja',
      'oponašanju govora',
    ],
    answer: 'sažimanju i neosobnosti',
    en: 'why academic prose nominalizes',
    tip: 'Zbija informaciju i skriva vršitelja.',
  },
  {
    mode: 'pasiv',
    q: 'Podatci ____ prikupljeni anketom.',
    opts: ['su', 'se', 'je', 'bi'],
    answer: 'su',
    en: 'the data were collected by survey',
    tip: 'Pasiv perfekta: su + trpni pridjev.',
  },
  {
    mode: 'pasiv',
    q: '„Analizirali smo uzorke” pasivno: „Uzorci ____ .”',
    opts: ['su analizirani', 'se analizirali', 'smo analizirali', 'su analizirali'],
    answer: 'su analizirani',
    en: 'the samples were analysed',
    tip: 'Trpni pridjev: analiziran, -a, -o (uzorci su analizirani).',
  },
  {
    mode: 'pasiv',
    q: 'Rezultati se ____ u tablici 2. (prikazati, se-pasiv)',
    opts: ['prikazuju', 'prikazani', 'prikazale', 'prikaže'],
    answer: 'prikazuju',
    en: 'the results are presented in Table 2',
    tip: 'Se-pasiv prezenta: rezultati se prikazuju.',
  },
  {
    mode: 'pasiv',
    q: 'Smatra se ____ je metoda pouzdana.',
    opts: ['da', 'kako bi', 'jer', 'što'],
    answer: 'da',
    en: 'it is considered that the method is reliable',
    tip: 'Bezlično: smatra se / drži se DA…',
  },
  {
    mode: 'pasiv',
    q: 'Ovdje ____ novi most. (graditi, se-pasiv)',
    opts: ['se gradi', 'gradi', 'je gradio', 'se izgrađen'],
    answer: 'se gradi',
    en: 'a new bridge is being built here',
    tip: 'Se-pasiv: gradi se, planira se, očekuje se.',
  },
  {
    mode: 'pasiv',
    q: 'Ispitanici su ____ u dvije skupine. (podijeliti)',
    opts: ['podijeljeni', 'podijelili', 'podjelu', 'podijelivši'],
    answer: 'podijeljeni',
    en: 'the participants were divided into two groups',
    tip: 'Trpni pridjev muškoga roda množine.',
  },
  {
    mode: 'pasiv',
    q: 'Pasiv u znanstvenom tekstu ističe:',
    opts: [
      'radnju i rezultat, a ne vršitelja',
      'ime autora',
      'osjećaje autora',
      'čitateljevu ulogu',
    ],
    answer: 'radnju i rezultat, a ne vršitelja',
    en: 'what does the passive put in the foreground?',
    tip: 'Tko je mjerio, nevažno — važno je ŠTO je izmjereno.',
  },
  {
    mode: 'pasiv',
    q: 'Utvrđeno ____ da postoji povezanost.',
    opts: ['je', 'se', 'su', 'bi'],
    answer: 'je',
    en: 'it has been established that a correlation exists',
    tip: 'Bezlični pasiv: utvrđeno je, pokazano je, dokazano je.',
  },
  {
    mode: 'ograda',
    q: 'Oprezna tvrdnja: „Rezultati ____ upućivati na vezu.”',
    opts: ['mogli bi', 'moraju', 'hoće', 'jesu'],
    answer: 'mogli bi',
    en: 'hedged: the results ___ point to a link',
    tip: 'Kondicional ublažava: mogli bi upućivati.',
  },
  {
    mode: 'ograda',
    q: 'Oprezna tvrdnja: „____ se pretpostaviti da je uzorak reprezentativan.”',
    opts: ['Može', 'Mora', 'Hoće', 'Mogu'],
    answer: 'Može',
    en: 'hedged: it ___ be assumed that the sample is representative',
    tip: 'Može se pretpostaviti / čini se — akademske ograde.',
  },
  {
    mode: 'ograda',
    q: '„Čini ____ da postoji obrazac.”',
    opts: ['se', 'mi', 'nam se to', 'je'],
    answer: 'se',
    en: 'it appears that a pattern exists',
    tip: 'Bezlično čini se — ograda bez vršitelja.',
  },
  {
    mode: 'ograda',
    q: 'Koji izraz UBLAŽAVA tvrdnju?',
    opts: ['u pravilu', 'bez sumnje', 'zasigurno', 'nepobitno'],
    answer: 'u pravilu',
    en: 'which expression hedges?',
    tip: 'U pravilu, uglavnom, donekle — ograde; zasigurno pojačava.',
  },
  {
    mode: 'ograda',
    q: 'Glagol „sugerirati” u odnosu na „dokazivati” je:',
    opts: ['oprezniji', 'snažniji', 'jednak', 'netočan'],
    answer: 'oprezniji',
    en: '"sugerirati" compared with "dokazivati"',
    tip: 'Rezultati sugeriraju < pokazuju < dokazuju.',
  },
  {
    mode: 'ograda',
    q: '„Prema dosadašnjim spoznajama…” izriče:',
    opts: [
      'ogradu prema budućim dokazima',
      'apsolutnu sigurnost',
      'osobno mišljenje',
      'sumnju u čitatelja',
    ],
    answer: 'ogradu prema budućim dokazima',
    en: 'to the best of current knowledge',
    tip: 'Ostavlja prostor da nova istraživanja promijene sliku.',
  },
  {
    mode: 'ograda',
    q: 'Umjesto „Ovo dokazuje…” opreznije je:',
    opts: [
      '„Ovo upućuje na…”',
      '„Ovo jamči…”',
      '„Ovo potvrđuje zauvijek…”',
      '„Ovo isključuje sve…”',
    ],
    answer: '„Ovo upućuje na…”',
    en: 'a more cautious alternative to "this proves…"',
    tip: 'Upućivati na, sugerirati, govoriti u prilog.',
  },
  {
    mode: 'ograda',
    q: '„Nije isključeno da…” znači:',
    opts: ['moguće je da', 'sigurno je da', 'nemoguće je da', 'zabranjeno je da'],
    answer: 'moguće je da',
    en: 'what does "nije isključeno da" amount to?',
    tip: 'Dvostruka negacija kao blaga mogućnost.',
  },
];

export { DATA as AKADEMSKI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AkademskiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="akademski"
      title={'🎓 Akademski stil'}
      subtitle={'istraživanje pokazuje, može se pretpostaviti — writing like a scholar'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — spremni za znanstveni rad! 🏆',
        good: 'Vrlo dobro vladanje akademskim stilom! 💪',
        more: 'Akademski stil traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
