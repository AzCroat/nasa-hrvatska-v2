import React from 'react';
import ModeDrill from './ModeDrill';

// C2 word-formation drill (C2 tranche, 2026-08-15): productive morphology —
// deverbal nouns, prefix semantics, and the expressive layer (diminutives,
// augmentatives, agentives) that separates textbook Croatian from native.
const MODE_LABEL: Record<string, string> = {
  imenice: '🏗️ Glagol → imenica',
  prefiksi: '🧲 Prefiksi',
  izrazajno: '🎨 Izražajna tvorba',
};

const DATA = [
  {
    mode: 'imenice',
    q: 'Imenica od „odlučiti” (čin, postupak):',
    opts: ['odlučivanje', 'odluka', 'odlučnost', 'odlučitelj'],
    answer: 'odlučivanje',
    en: 'the PROCESS of deciding',
    tip: 'Glagolska imenica na -nje = proces; odluka = rezultat; odlučnost = osobina.',
  },
  {
    mode: 'imenice',
    q: 'Imenica od „odlučiti” (rezultat):',
    opts: ['odluka', 'odlučivanje', 'odlučnost', 'odlučenje'],
    answer: 'odluka',
    en: 'the RESULT — the decision made',
    tip: 'Odluka je gotov rezultat; odlučivanje je proces.',
  },
  {
    mode: 'imenice',
    q: 'Osobina onoga tko je hrabar:',
    opts: ['hrabrost', 'hrabrenje', 'hrabrina', 'hrabroća'],
    answer: 'hrabrost',
    en: 'the quality of being brave — bravery',
    tip: 'Sufiks -ost tvori imenice osobina: hrabrost, mudrost, radost.',
  },
  {
    mode: 'imenice',
    q: 'Onaj koji čita:',
    opts: ['čitatelj', 'čitaonica', 'čitač', 'čitar'],
    answer: 'čitatelj',
    en: 'a reader (standard Croatian agentive)',
    tip: 'Hrvatski standard daje prednost -telj: čitatelj, slušatelj, gledatelj.',
  },
  {
    mode: 'imenice',
    q: 'Mjesto gdje se kuha:',
    opts: ['kuhinja', 'kuhaona', 'kuhalište', 'kuharija'],
    answer: 'kuhinja',
    en: 'the place where one cooks — kitchen',
    tip: 'Ustaljen lik: kuhinja (usp. čekaonica, kupaonica na -onica).',
  },
  {
    mode: 'imenice',
    q: 'Prostorija u kojoj se čeka:',
    opts: ['čekaonica', 'čekalište', 'čekarnica', 'čekavnica'],
    answer: 'čekaonica',
    en: 'a waiting room',
    tip: 'Sufiks -onica za prostorije: čekaonica, predavaonica, kupaonica.',
  },
  {
    mode: 'imenice',
    q: 'Imenica od „kretati se” u administrativnom stilu:',
    opts: ['kretanje', 'kret', 'kretnja', 'pokret'],
    answer: 'kretanje',
    en: 'movement (as a process, in formal style)',
    tip: 'Kretanje = proces; kretnja = pojedinačan pokret tijela; pokret = organizirana skupina ili gib.',
  },
  {
    mode: 'imenice',
    q: 'Stanje onoga tko je umoran:',
    opts: ['umor', 'umorac', 'umaranje', 'umorstvo'],
    answer: 'umor',
    en: 'tiredness — fatigue',
    tip: 'Umor = stanje; umaranje = proces; UMORSTVO = ubojstvo (lažni prijatelj!).',
  },
  {
    mode: 'prefiksi',
    q: '„Molim vas da ____ ugovor prije potpisa.” (pažljivo, do kraja)',
    opts: ['pročitate', 'čitate', 'načitate', 'očitate'],
    answer: 'pročitate',
    en: 'read the contract THROUGH before signing',
    tip: 'Pro- = radnja provedena do kraja: pročitati.',
  },
  {
    mode: 'prefiksi',
    q: 'Student je morao ____ zadaću jer je bila puna pogrešaka.',
    opts: ['prepisati', 'popisati', 'zapisati', 'ispisati'],
    answer: 'prepisati',
    en: 'rewrite the homework (do it again)',
    tip: 'Pre- = ponoviti radnju iznova: prepisati, preraditi, presložiti.',
  },
  {
    mode: 'prefiksi',
    q: 'Povjerenstvo će ____ sve kandidate. (jednoga po jednoga, redom)',
    opts: ['popisati', 'prepisati', 'napisati', 'upisati'],
    answer: 'popisati',
    en: 'list all the candidates one by one',
    tip: 'Po- distributivno: popisati (sve redom), pozatvarati, pogasiti.',
  },
  {
    mode: 'prefiksi',
    q: '„____ je čašu.” (napunio ju je previše, preko ruba)',
    opts: ['Prelio', 'Ulio', 'Izlio', 'Zalio'],
    answer: 'Prelio',
    en: 'he overfilled the glass',
    tip: 'Pre- uz glagole i pridjeve = prekomjerno: preliti, presoliti, preskup.',
  },
  {
    mode: 'prefiksi',
    q: 'Suprotno od „zaključati”:',
    opts: ['otključati', 'isključati', 'razključati', 'nadključati'],
    answer: 'otključati',
    en: 'to unlock',
    tip: 'Ot- (od-) poništava radnju: otključati, otkopčati, otkriti.',
  },
  {
    mode: 'prefiksi',
    q: '„Sastanak se ____ zbog štrajka.” (nije održan, pomaknut je)',
    opts: ['odgodio', 'razgodio', 'ugodio', 'pogodio'],
    answer: 'odgodio',
    en: 'the meeting was postponed because of the strike',
    tip: 'Od- + goditi: odgoditi = pomaknuti na poslije.',
  },
  {
    mode: 'prefiksi',
    q: '„Vlak je upravo ____ s trećeg perona.” (počeo kretanje)',
    opts: ['krenuo', 'skrenuo', 'okrenuo', 'prikrenuo'],
    answer: 'krenuo',
    en: 'the train just departed from platform three',
    tip: 'Krenuti = početi se kretati; skrenuti = promijeniti smjer.',
  },
  {
    mode: 'prefiksi',
    q: 'Radnja „raspakirati” prema „pakirati” izriče:',
    opts: ['poništavanje radnje', 'ponavljanje radnje', 'početak radnje', 'pretjeranost radnje'],
    answer: 'poništavanje radnje',
    en: 'raz- undoes the action — unpacking',
    tip: 'Raz- često poništava ili širi: raspakirati, razmontirati, razdijeliti.',
  },
  {
    mode: 'izrazajno',
    q: 'Umanjenica od „grad” (mali, dražestan grad):',
    opts: ['gradić', 'gradak', 'gradičak', 'gradeljak'],
    answer: 'gradić',
    en: 'a charming little town',
    tip: 'Sufiks -ić: gradić, brodić, stolić.',
  },
  {
    mode: 'izrazajno',
    q: 'Uvećanica od „kuća” (golema, često ružna kuća):',
    opts: ['kućerina', 'kućica', 'kućara', 'kućište'],
    answer: 'kućerina',
    en: 'a hulking great house',
    tip: 'Augmentativ -erina: kućerina (kućište je tehnički pojam!).',
  },
  {
    mode: 'izrazajno',
    q: 'Umanjenica od „knjiga”:',
    opts: ['knjižica', 'knjižurina', 'knjižić', 'knjigara'],
    answer: 'knjižica',
    en: 'a little book, booklet',
    tip: 'Palatalizacija g→ž + -ica: knjižica (knjižara = trgovina).',
  },
  {
    mode: 'izrazajno',
    q: 'Pogrdno za „nos” (velik, ružan):',
    opts: ['nosina', 'nosić', 'nosnica', 'nosač'],
    answer: 'nosina',
    en: 'a great ugly nose',
    tip: '-ina augmentativno: nosina, ručetina; nosnica = dio nosa, nosač = onaj koji nosi.',
  },
  {
    mode: 'izrazajno',
    q: 'Žena koja vodi ustanovu:',
    opts: ['ravnateljica', 'ravnatelja', 'ravnateljka', 'ravnica'],
    answer: 'ravnateljica',
    en: 'a (female) director',
    tip: 'Mocijska tvorba -ica: ravnateljica, učiteljica, čitateljica.',
  },
  {
    mode: 'izrazajno',
    q: 'Prisno, od milja za „brat”:',
    opts: ['braco', 'bratić', 'bratski', 'bratovština'],
    answer: 'braco',
    en: 'an affectionate word for brother',
    tip: 'Hipokoristik: braco (bratić = rođak, sin strica/ujaka!).',
  },
  {
    mode: 'izrazajno',
    q: 'Pridjev za nešto „poput svile”:',
    opts: ['svilenkast', 'svilov', 'svilarski', 'posvilen'],
    answer: 'svilenkast',
    en: 'silky, silk-like',
    tip: '-kast izriče sličnost/ublaženost: svilenkast, plavkast, slatkast.',
  },
  {
    mode: 'izrazajno',
    q: 'Glagol od „noć” (provesti negdje noć):',
    opts: ['prenoćiti', 'unoćiti', 'zanoćiti se', 'noćariti'],
    answer: 'prenoćiti',
    en: 'to spend the night somewhere',
    tip: 'Prenoćiti u hotelu; zanoćiti (bez se) = zateći se u noći.',
  },
];

export { DATA as TVORBA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function TvorbaRijeciDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="tvorbarijeci"
      title={'🧬 Tvorba riječi'}
      subtitle={'pisati → prepisivati — building words like a native'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — tvorba vam je prirodna! 🏆',
        good: 'Vrlo dobro vladanje tvorbom! 💪',
        more: 'Tvorbeni obrasci traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
