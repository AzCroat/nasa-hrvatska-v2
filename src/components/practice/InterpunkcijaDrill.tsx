import React from 'react';
import ModeDrill from './ModeDrill';

// C2 punctuation drill (C2 tranche 4, 2026-08-15): hyphen vs dash
// (polusloženice, relations, ranges), Croatian quotation marks and direct
// speech, and colon/semicolon/ellipsis conventions.
const MODE_LABEL: Record<string, string> = {
  crtica: '➖ Crtica i spojnica',
  navodnici: '🗨️ Navodnici',
  dvotocje: '🔣 Dvotočje i ostalo',
};

const DATA = [
  {
    mode: 'crtica',
    q: 'Spojnica (-) piše se u:',
    opts: ['polusloženicama (spomen-ploča)', 'umetnutim mislima', 'nabrajanju', 'upravnom govoru'],
    answer: 'polusloženicama (spomen-ploča)',
    en: 'where is the hyphen used?',
    tip: 'Spomen-ploča, remek-djelo, hrvatsko-engleski.',
  },
  {
    mode: 'crtica',
    q: 'Crtica (–) služi za:',
    opts: [
      'umetanje i naglašen prekid misli',
      'spajanje polusloženica',
      'kraćenje riječi',
      'označavanje genitiva',
    ],
    answer: 'umetanje i naglašen prekid misli',
    en: 'what is the dash used for?',
    tip: 'On je – kako svi znamo – uvijek točan.',
  },
  {
    mode: 'crtica',
    q: 'Relacija „Zagreb ____ Split” piše se:',
    opts: [
      'crticom (Zagreb – Split)',
      'spojnicom (Zagreb-Split)',
      'zarezom (Zagreb, Split)',
      'kosom crtom (Zagreb/Split)',
    ],
    answer: 'crticom (Zagreb – Split)',
    en: 'writing a route between two places',
    tip: 'Relacije i rasponi idu crticom, ne spojnicom.',
  },
  {
    mode: 'crtica',
    q: '„Spomen-ploča” sadrži:',
    opts: ['spojnicu', 'crticu', 'trotočje', 'apostrof'],
    answer: 'spojnicu',
    en: 'which mark is in spomen-ploča?',
    tip: 'Polusloženica: obje sastavnice zadržavaju naglasak.',
  },
  {
    mode: 'crtica',
    q: 'Raspon godina 2010.____2020. piše se:',
    opts: ['crticom bez bjelina (2010.–2020.)', 'spojnicom s bjelinama', 'zarezom', 'dvotočjem'],
    answer: 'crticom bez bjelina (2010.–2020.)',
    en: 'writing a range of years',
    tip: 'Rasponi brojeva: crtica bez razmaka.',
  },
  {
    mode: 'crtica',
    q: '„hrvatsko____engleski rječnik” piše se:',
    opts: [
      'spojnicom (hrvatsko-engleski)',
      'crticom (hrvatsko – engleski)',
      'odvojeno',
      'sastavljeno',
    ],
    answer: 'spojnicom (hrvatsko-engleski)',
    en: 'writing Croatian-English',
    tip: 'Ravnopravne sastavnice pridjeva veže spojnica.',
  },
  {
    mode: 'crtica',
    q: 'Umetnutu misao možemo odvojiti:',
    opts: ['crticama ili zarezima', 'samo točkama', 'dvotočjem', 'uskličnicima'],
    answer: 'crticama ili zarezima',
    en: 'setting off an inserted thought',
    tip: 'Crtice ističu jače od zareza.',
  },
  {
    mode: 'crtica',
    q: 'U „50-ak ljudi” spojnica veže:',
    opts: ['broj i nastavak', 'dvije riječi', 'rečenice', 'ime i prezime'],
    answer: 'broj i nastavak',
    en: 'the hyphen in 50-ak',
    tip: 'Brojka + nastavak: 50-ak, 90-ih godina.',
  },
  {
    mode: 'navodnici',
    q: 'Hrvatski navodnici izgledaju:',
    opts: ['„ovako”', '"ovako"', '«ovako»', "'ovako'"],
    answer: '„ovako”',
    en: 'Croatian quotation marks',
    tip: 'Donji-gornji: „ … ” (dolje „ i gore ”, oba u obliku 99).',
  },
  {
    mode: 'navodnici',
    q: '„Doći ću”, ____ . (tko govori)',
    opts: ['rekla je Ana', 'je rekla Ana', 'Ana je bila rekavši', 'rekla Ana je'],
    answer: 'rekla je Ana',
    en: 'said Ana — after the closing quote',
    tip: 'Iza navodnika i zareza: rekla je Ana (inverzija).',
  },
  {
    mode: 'navodnici',
    q: 'Naslove knjiga u tekstu pišemo:',
    opts: ['u navodnicima ili kurzivu', 'velikim slovima', 'podcrtano crvenim', 'u zagradama'],
    answer: 'u navodnicima ili kurzivu',
    en: 'writing book titles in running text',
    tip: 'Roman „Zlatarovo zlato” / Zlatarovo zlato (kurziv).',
  },
  {
    mode: 'navodnici',
    q: 'Zarez uz upravni govor stoji:',
    opts: [
      'iza zatvorenoga navodnika („Doći ću”, rekla je.)',
      'ispred navodnika',
      'unutar navodnika uvijek',
      'nigdje',
    ],
    answer: 'iza zatvorenoga navodnika („Doći ću”, rekla je.)',
    en: 'where the comma goes with direct speech',
    tip: '„Doći ću”, rekla je. — zarez izvan navodnika.',
  },
  {
    mode: 'navodnici',
    q: 'Navod unutar navoda označavamo:',
    opts: ['polunavodnicima (‚ovako’)', 'dvostrukim navodnicima', 'zagradama', 'crticom'],
    answer: 'polunavodnicima (‚ovako’)',
    en: 'a quote within a quote',
    tip: '„Rekao mi je ‚doći ću’ i nestao.”',
  },
  {
    mode: 'navodnici',
    q: 'Ironiju u tekstu možemo označiti:',
    opts: ['navodnicima („genijalno” rješenje)', 'uskličnikom', 'trotočjem', 'dvotočjem'],
    answer: 'navodnicima („genijalno” rješenje)',
    en: 'marking irony in writing',
    tip: 'Navodnici signaliziraju odmak od doslovnoga značenja.',
  },
  {
    mode: 'navodnici',
    q: 'Upitnik u upravnome govoru stoji:',
    opts: [
      'unutar navodnika („Dolaziš li?”)',
      'izvan navodnika',
      'umjesto navodnika',
      'iza autorove rečenice',
    ],
    answer: 'unutar navodnika („Dolaziš li?”)',
    en: 'where the question mark goes in direct speech',
    tip: 'Interpunkcija navoda ostaje unutar navodnika.',
  },
  {
    mode: 'navodnici',
    q: 'Iza uvodne rečenice prije upravnoga govora piše se:',
    opts: ['dvotočje (Ana reče: „Doći ću.”)', 'zarez uvijek', 'točka', 'ništa'],
    answer: 'dvotočje (Ana reče: „Doći ću.”)',
    en: 'the mark before direct speech',
    tip: 'Najava navoda: dvotočje + navodnici.',
  },
  {
    mode: 'dvotocje',
    q: 'Dvotočje najavljuje:',
    opts: ['nabrajanje ili objašnjenje', 'kraj rečenice', 'novi odlomak', 'upitnu rečenicu'],
    answer: 'nabrajanje ili objašnjenje',
    en: 'what the colon announces',
    tip: 'Kupite sljedeće: kruh, mlijeko, sir.',
  },
  {
    mode: 'dvotocje',
    q: 'Točka sa zarezom (;) razdvaja:',
    opts: [
      'duže surečenice srodna sadržaja',
      'riječi u nabrajanju uvijek',
      'naslov i podnaslov',
      'brojke i slova',
    ],
    answer: 'duže surečenice srodna sadržaja',
    en: 'what the semicolon separates',
    tip: 'Jače od zareza, slabije od točke.',
  },
  {
    mode: 'dvotocje',
    q: 'Trotočje (…) označava:',
    opts: [
      'nedovršenu misao ili izostavljen tekst',
      'kraj svakoga odlomka',
      'množinu',
      'posvojnost',
    ],
    answer: 'nedovršenu misao ili izostavljen tekst',
    en: 'what the ellipsis marks',
    tip: 'Htio sam reći… ali ne vrijedi.',
  },
  {
    mode: 'dvotocje',
    q: '„Kupite sljedeće ____ kruh, mlijeko, sir.”',
    opts: ['dvotočje (:)', 'zarez (,)', 'crticu (–)', 'točku (.)'],
    answer: 'dvotočje (:)',
    en: 'which mark introduces the list',
    tip: 'Najava nabrajanja: dvotočje.',
  },
  {
    mode: 'dvotocje',
    q: 'Iza dvotočja nabrajanje počinje:',
    opts: ['malim slovom', 'velikim slovom uvijek', 'brojkom', 'novim retkom obavezno'],
    answer: 'malim slovom',
    en: 'how a list after a colon begins',
    tip: 'Veliko slovo samo ako slijedi potpuna rečenica-navod.',
  },
  {
    mode: 'dvotocje',
    q: 'Znak „?!” izriče:',
    opts: ['čuđenje spojeno s pitanjem', 'dvije rečenice', 'navod', 'stanku'],
    answer: 'čuđenje spojeno s pitanjem',
    en: 'what ?! expresses',
    tip: 'Zar opet?! — pitanje + emocija.',
  },
  {
    mode: 'dvotocje',
    q: 'Zagrade služe za:',
    opts: ['dodatna objašnjenja', 'isticanje glavne misli', 'upravni govor', 'naslove knjiga'],
    answer: 'dodatna objašnjenja',
    en: 'what parentheses are for',
    tip: 'Rijeka (najveća hrvatska luka) raste.',
  },
  {
    mode: 'dvotocje',
    q: 'Kraticu „itd.” završava:',
    opts: ['točka', 'zarez', 'dvotočje', 'trotočje'],
    answer: 'točka',
    en: 'how the abbreviation itd. ends',
    tip: 'Kratice itd., npr., tzv. nose točku.',
  },
];

export { DATA as INTERPUNKCIJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function InterpunkcijaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="interpunkcija"
      title={'✏️ Interpunkcija'}
      subtitle={'crtica, navodnici, dvotočje — everything beyond the comma'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — interpunkcija je vaša! 🏆',
        good: 'Vrlo dobro vladanje interpunkcijom! 💪',
        more: 'Interpunkcija traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
