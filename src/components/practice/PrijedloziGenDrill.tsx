import React from 'react';
import ModeDrill from './ModeDrill';

// B2 genitive-prepositions drill (B2 tranche 7, 2026-08-15): the iz-
// series (ispred/iza/iznad/ispod + G), pokraj/izmedju/blizu/oko/izvan/
// unutar/duz, the nasuprot-takes-dative trap, and the pred+I / ispred+G
// pairs.
const MODE_LABEL: Record<string, string> = {
  mjesto: '📍 Mjesto',
  padez: '📐 Padež',
  kontrast: '⚖️ Kontrasti',
};

const DATA = [
  {
    mode: 'mjesto',
    q: 'Automobil je parkiran ____ kuće. (sprijeda)',
    opts: ['ispred', 'pred', 'pri', 'o'],
    answer: 'ispred',
    en: 'the car is parked in front of the house',
    tip: 'Ispred + genitiv (pred + I je par bez kretanja).',
  },
  {
    mode: 'mjesto',
    q: 'Vrt se nalazi ____ zgrade. (straga)',
    opts: ['iza', 'za', 'od', 'po'],
    answer: 'iza',
    en: 'the garden is behind the building',
    tip: 'Iza + genitiv: iza zgrade.',
  },
  {
    mode: 'mjesto',
    q: 'Lampa visi ____ stola.',
    opts: ['iznad', 'nad', 'na', 'uz'],
    answer: 'iznad',
    en: 'the lamp hangs above the table',
    tip: 'Iznad + genitiv (nad + I je par).',
  },
  {
    mode: 'mjesto',
    q: 'Papuče su ____ kreveta.',
    opts: ['ispod', 'pod', 'po', 'niz'],
    answer: 'ispod',
    en: 'the slippers are under the bed',
    tip: 'Ispod + genitiv.',
  },
  {
    mode: 'mjesto',
    q: 'Sjedi ____ prozora. (uz sam prozor)',
    opts: ['pokraj', 'preko', 'kroz', 'na'],
    answer: 'pokraj',
    en: 'she sits by the window',
    tip: 'Pokraj/pored + genitiv.',
  },
  {
    mode: 'mjesto',
    q: 'Kafić je ____ pošte i banke.',
    opts: ['između', 'među', 'izvan', 'oko'],
    answer: 'između',
    en: 'the cafe is between the post office and the bank',
    tip: 'Između + genitiv (među + I za mnoštvo).',
  },
  {
    mode: 'mjesto',
    q: 'Živimo ____ centra. (nedaleko)',
    opts: ['blizu', 'kod bliskog', 'uz', 'k'],
    answer: 'blizu',
    en: 'we live near the centre',
    tip: 'Blizu + genitiv: blizu centra.',
  },
  {
    mode: 'mjesto',
    q: 'Okupili su se ____ vatre.',
    opts: ['oko', 'okolo uz', 'o', 'uza'],
    answer: 'oko',
    en: 'they gathered around the fire',
    tip: 'Oko + genitiv: oko vatre, oko stola.',
  },
  {
    mode: 'padez',
    q: '„Nasuprot” je iznimka jer traži:',
    opts: ['dativ (nasuprot kolodvoru)', 'genitiv', 'akuzativ', 'instrumental'],
    answer: 'dativ (nasuprot kolodvoru)',
    en: 'nasuprot takes the dative',
    tip: 'Nasuprot, usprkos, unatoč — dativna trojka.',
  },
  {
    mode: 'padez',
    q: 'Ispred, iza, iznad, ispod traže:',
    opts: ['genitiv', 'dativ', 'akuzativ', 'lokativ'],
    answer: 'genitiv',
    en: 'the iz- series takes the genitive',
    tip: 'Svi složeni s iz-: genitiv.',
  },
  {
    mode: 'padez',
    q: '„Sjedimo ____ stolom” prema „sjedimo pokraj stola”:',
    opts: [
      'za (instrumental) / pokraj (genitiv)',
      'za (genitiv) / pokraj (dativ)',
      'oba genitiv',
      'oba instrumental',
    ],
    answer: 'za (instrumental) / pokraj (genitiv)',
    en: 'two ways to sit by a table',
    tip: 'Za stolom (I) = uz stol radno; pokraj stola (G) = kraj njega.',
  },
  {
    mode: 'padez',
    q: 'Prošli smo ____ mosta. (donja strana)',
    opts: ['ispod', 'pod', 'po', 'niz'],
    answer: 'ispod',
    en: 'we passed under the bridge',
    tip: 'I kretanje: ispod + G (pod + A/I također može).',
  },
  {
    mode: 'padez',
    q: '„Preko” u „preko puta škole” znači:',
    opts: ['nasuprot školi', 'iznad škole', 'kroz školu', 'oko škole'],
    answer: 'nasuprot školi',
    en: 'preko puta = across from',
    tip: 'Preko puta + G = nasuprot.',
  },
  {
    mode: 'padez',
    q: 'Izašli su ____ grada. (napustili područje)',
    opts: ['izvan', 'van iz u', 'od', 'među'],
    answer: 'izvan',
    en: 'they went outside the city',
    tip: 'Izvan + G: izvan grada, izvan zgrade.',
  },
  {
    mode: 'padez',
    q: '„Unutar” traži:',
    opts: ['genitiv (unutar zgrade)', 'akuzativ', 'dativ', 'lokativ'],
    answer: 'genitiv (unutar zgrade)',
    en: 'unutar takes the genitive',
    tip: 'Unutar granica, unutar tvrtke.',
  },
  {
    mode: 'padez',
    q: '„Duž” u „duž obale” traži:',
    opts: ['genitiv', 'akuzativ', 'instrumental', 'dativ'],
    answer: 'genitiv',
    en: 'duž (along) takes the genitive',
    tip: 'Duž obale, duž rijeke, uzduž ceste.',
  },
  {
    mode: 'kontrast',
    q: '„Pred kućom” i „ispred kuće” —',
    opts: ['znače isto, drugi padež', 'suprotna značenja', 'pred je pogrešno', 'ispred znači iza'],
    answer: 'znače isto, drugi padež',
    en: 'pred + I equals ispred + G',
    tip: 'Parovi: pred/ispred, nad/iznad, pod/ispod, za/iza.',
  },
  {
    mode: 'kontrast',
    q: '„Među prijateljima” prema „između dva prijatelja”:',
    opts: ['među za mnoštvo, između za dvoje', 'obrnuto', 'isti padež', 'među je zastarjelo'],
    answer: 'među za mnoštvo, između za dvoje',
    en: 'među (among) vs između (between)',
    tip: 'Među + I (mnoštvo); između + G (obično dvoje).',
  },
  {
    mode: 'kontrast',
    q: 'Sakrio se ____ vrata. (kretanje, smjer)',
    opts: ['iza', 'za s akuzativom samo', 'od', 'izvan'],
    answer: 'iza',
    en: 'he hid behind the door',
    tip: 'Iza + G pokriva i cilj kretanja: stao je iza vrata.',
  },
  {
    mode: 'kontrast',
    q: 'Stanujemo ____ škole, a radim ____ centru.',
    opts: ['blizu … u', 'u … blizu', 'kod … na', 'među … o'],
    answer: 'blizu … u',
    en: 'we live near the school; I work in the centre',
    tip: 'Blizu + G; u + L.',
  },
  {
    mode: 'kontrast',
    q: '„Oko podneva” pokazuje da „oko” može značiti:',
    opts: ['približno vrijeme', 'samo prostor', 'organ vida', 'okvir'],
    answer: 'približno vrijeme',
    en: 'around noon (approximation)',
    tip: 'Oko + G i za približnost: oko pet sati.',
  },
  {
    mode: 'kontrast',
    q: 'Sve je propalo ____ tebe! (krivnja)',
    opts: ['zbog', 'iza', 'ispred', 'blizu'],
    answer: 'zbog',
    en: 'it all failed because of you',
    tip: 'Zbog + G — uzrok, ne mjesto.',
  },
  {
    mode: 'kontrast',
    q: '„Povrh svega” znači:',
    opts: ['uz sve to, dodatno', 'ispod svega', 'umjesto svega', 'protiv svega'],
    answer: 'uz sve to, dodatno',
    en: 'on top of everything',
    tip: 'Povrh + G: povrh svega, povrh plaće.',
  },
  {
    mode: 'kontrast',
    q: 'Došao je ____ mene. (zamijenio me)',
    opts: ['umjesto', 'izvan', 'povrh', 'iznad'],
    answer: 'umjesto',
    en: 'he came instead of me',
    tip: 'Umjesto + G: umjesto mene, umjesto odgovora.',
  },
];

export { DATA as PRIJEDLOZI_GEN_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PrijedloziGenDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prijedlozigen"
      title={'🗺️ Prijedlozi s genitivom'}
      subtitle={'ispred kuće, između dva svijeta — the genitive map of space'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — prostor genitiva je vaš! 🏆',
        good: 'Vrlo dobro vladanje genitivnim prijedlozima! 💪',
        more: 'Prijedlozi s genitivom traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
