import React from 'react';
import ModeDrill from './ModeDrill';

// C2 eponymous-idioms drill (C2 tranche 7, 2026-08-15): meaning (Ahilova
// peta, Sizifov posao, Pandorina kutija), origin (Bible, Greek myth, Roman
// and Russian history) and usage in modern prose.
const MODE_LABEL: Record<string, string> = {
  znacenje: '💡 Značenje',
  podrijetlo: '📜 Podrijetlo',
  uporaba: '✍️ Uporaba',
};

const DATA = [
  {
    mode: 'znacenje',
    q: '„Ahilova peta” znači:',
    opts: ['ranjivo mjesto', 'snažnu nogu', 'brzinu', 'oklop'],
    answer: 'ranjivo mjesto',
    en: 'Achilles heel',
    tip: 'Jedina Ahilova ranjiva točka.',
  },
  {
    mode: 'znacenje',
    q: '„Sizifov posao” znači:',
    opts: ['uzaludan, beskrajan trud', 'lak posao', 'dobro plaćen rad', 'timski rad'],
    answer: 'uzaludan, beskrajan trud',
    en: 'a Sisyphean task',
    tip: 'Kamen se uvijek otkotrlja natrag.',
  },
  {
    mode: 'znacenje',
    q: '„Tantalove muke” znače:',
    opts: ['patnju zbog nedostižne blizine', 'glad općenito', 'tjelovježbu', 'svađu'],
    answer: 'patnju zbog nedostižne blizine',
    en: 'the torments of Tantalus',
    tip: 'Voće i voda izmiču pred rukom.',
  },
  {
    mode: 'znacenje',
    q: '„Pandorina kutija” znači:',
    opts: ['izvor svih nevolja kad se otvori', 'dragocjen dar', 'tajnu ostavu', 'glazbalo'],
    answer: 'izvor svih nevolja kad se otvori',
    en: 'Pandora\u2019s box',
    tip: 'Otvoriti Pandorinu kutiju = pokrenuti lavinu zla.',
  },
  {
    mode: 'znacenje',
    q: '„Damoklov mač” znači:',
    opts: ['stalnu prijetnju nad glavom', 'počasno oružje', 'pobjedu', 'nasljedstvo'],
    answer: 'stalnu prijetnju nad glavom',
    en: 'the sword of Damocles',
    tip: 'Visi o dlaci nad gozbom.',
  },
  {
    mode: 'znacenje',
    q: '„Pirova pobjeda” znači:',
    opts: ['pobjedu skuplju od poraza', 'laku pobjedu', 'varku', 'remi'],
    answer: 'pobjedu skuplju od poraza',
    en: 'a Pyrrhic victory',
    tip: 'Još jedna ovakva i propali smo.',
  },
  {
    mode: 'znacenje',
    q: '„Prokrustova postelja” znači:',
    opts: ['nasilno kalupljenje po mjeri', 'udoban krevet', 'gostoprimstvo', 'odmor'],
    answer: 'nasilno kalupljenje po mjeri',
    en: 'the bed of Procrustes',
    tip: 'Rastezanje ili skraćivanje na silu.',
  },
  {
    mode: 'znacenje',
    q: '„Prijeći Rubikon” znači:',
    opts: ['donijeti nepovratnu odluku', 'preplivati rijeku', 'odustati', 'vratiti se'],
    answer: 'donijeti nepovratnu odluku',
    en: 'to cross the Rubicon',
    tip: 'Kocka je bačena — nema natrag.',
  },
  {
    mode: 'podrijetlo',
    q: '„Judin poljubac” dolazi iz:',
    opts: ['Biblije', 'grčke mitologije', 'rimske povijesti', 'narodne priče'],
    answer: 'Biblije',
    en: 'the kiss of Judas',
    tip: 'Izdaja pod krinkom prisnosti.',
  },
  {
    mode: 'podrijetlo',
    q: '„Salomonsko rješenje” dolazi iz:',
    opts: ['Biblije', 'mitologije', 'prava EU', 'filozofije'],
    answer: 'Biblije',
    en: 'a Solomonic solution',
    tip: 'Mudra presuda koja otkriva istinu.',
  },
  {
    mode: 'podrijetlo',
    q: '„Trojanski konj” dolazi iz:',
    opts: ['grčke predaje o Troji', 'Biblije', 'rimskoga prava', 'srednjega vijeka'],
    answer: 'grčke predaje o Troji',
    en: 'the Trojan horse',
    tip: 'Dar s neprijateljem unutra; danas i virus.',
  },
  {
    mode: 'podrijetlo',
    q: '„Gordijski čvor” presjekao je:',
    opts: ['Aleksandar Veliki', 'Cezar', 'Odisej', 'Herkul'],
    answer: 'Aleksandar Veliki',
    en: 'the Gordian knot',
    tip: 'Presjeći gordijski čvor = riješiti udarcem.',
  },
  {
    mode: 'podrijetlo',
    q: '„Potemkinova sela” dolaze iz:',
    opts: ['ruske povijesti', 'grčke drame', 'Biblije', 'hrvatske predaje'],
    answer: 'ruske povijesti',
    en: 'Potemkin villages',
    tip: 'Lažna pročelja za caricu — privid blagostanja.',
  },
  {
    mode: 'podrijetlo',
    q: '„Kolumbovo jaje” znači:',
    opts: [
      'naizgled nemoguće, a jednostavno rješenje',
      'skup dar',
      'krhku stvar',
      'otkriće Amerike',
    ],
    answer: 'naizgled nemoguće, a jednostavno rješenje',
    en: 'the egg of Columbus',
    tip: 'Lako je — kad ti netko pokaže.',
  },
  {
    mode: 'podrijetlo',
    q: '„Kanosa” u „ići u Kanosu” znači:',
    opts: ['ponižavajuće pokajanje', 'hodočašće', 'odmor', 'pobjedu'],
    answer: 'ponižavajuće pokajanje',
    en: 'the walk to Canossa',
    tip: 'Henrik IV. bos pred papom.',
  },
  {
    mode: 'podrijetlo',
    q: '„Nojeva arka” označava:',
    opts: ['spas od opće propasti', 'trgovački brod', 'zoološki vrt', 'samu poplavu'],
    answer: 'spas od opće propasti',
    en: 'Noah\u2019s ark',
    tip: 'Utočište kad sve tone.',
  },
  {
    mode: 'uporaba',
    q: '„Reforma je postala ____ posao — svake godine ispočetka.”',
    opts: ['Sizifov', 'Ahilov', 'Damoklov', 'Pirov'],
    answer: 'Sizifov',
    en: 'the reform became a ___ task, starting over every year',
    tip: 'Posvojni pridjev od imena piše se velikim slovom i u frazemu: Sizifov posao.',
  },
  {
    mode: 'uporaba',
    q: '„Novi zakon visi nad tvrtkama kao ____ mač.”',
    opts: ['Damoklov', 'Ahilov', 'Sizifov', 'Kolumbov'],
    answer: 'Damoklov',
    en: 'the new law hangs over firms like a ___ sword',
    tip: 'Stalna prijetnja → Damoklov mač.',
  },
  {
    mode: 'uporaba',
    q: '„Obrana im je ____ peta.”',
    opts: ['Ahilova', 'Pirova', 'Judina', 'Tantalova'],
    answer: 'Ahilova',
    en: 'their defence is their ___ heel',
    tip: 'Slabost sustava → Ahilova peta.',
  },
  {
    mode: 'uporaba',
    q: '„Ta je pobjeda bila ____ — ostali su bez momčadi.”',
    opts: ['Pirova', 'salomonska', 'Kolumbova', 'trojanska'],
    answer: 'Pirova',
    en: 'that victory was ___ — they were left without a team',
    tip: 'Preskupa pobjeda → Pirova.',
  },
  {
    mode: 'uporaba',
    q: '„Aplikacija je ušla u sustav kao ____ konj.”',
    opts: ['trojanski', 'gordijski', 'gordij konj', 'potemkinski'],
    answer: 'trojanski',
    en: 'the app entered the system like a ___ horse',
    tip: 'Skriveni neprijatelj u daru.',
  },
  {
    mode: 'uporaba',
    q: '„Sud je izrekao pravo ____ rješenje.”',
    opts: ['salomonsko', 'sizifsko', 'pirovsko', 'tantalsko'],
    answer: 'salomonsko',
    en: 'the court handed down a truly ___ ruling',
    tip: 'Mudra presuda → salomonska.',
  },
  {
    mode: 'uporaba',
    q: '„Ministar je presjekao ____ čvor jednim potezom.”',
    opts: ['gordijski', 'trojanski', 'damoklovski', 'Judin'],
    answer: 'gordijski',
    en: 'the minister cut the ___ knot in one move',
    tip: 'Naizgled nerješivo → jedan potez.',
  },
  {
    mode: 'uporaba',
    q: '„Sve su to ____ sela — iza pročelja ničega nema.”',
    opts: ['Potemkinova', 'salomonska', 'Kolumbova', 'Ahilova'],
    answer: 'Potemkinova',
    en: '___ villages — nothing behind the facades',
    tip: 'Privid bez sadržaja.',
  },
];

export { DATA as EPONIMI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function EponimiDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="eponimi"
      title={'🏛️ Frazemi s imenom'}
      subtitle={'Ahilova peta, Sizifov posao — the classics inside Croatian'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — klasici su vaši! 🏆',
        good: 'Vrlo dobro vladanje kulturnim frazemima! 💪',
        more: 'Frazemi s imenom traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
