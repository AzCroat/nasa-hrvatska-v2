import React from 'react';
import ModeDrill from './ModeDrill';

// C2 loanword-vs-standard drill (C2 tranche 2, 2026-08-15): the choices that
// mark standard Croatian — non-standard pairs heritage speakers mix
// (hiljada/tisuća, pasoš/putovnica), formal preference for domestic words,
// and semantic traps (eventualan, aktualan).
const MODE_LABEL: Record<string, string> = {
  parovi: '⚖️ Standard ili ne?',
  domace: '🏠 Domaća riječ',
  lazni: '🪤 Značenjske zamke',
};

const DATA = [
  {
    mode: 'parovi',
    q: 'U službenom tekstu prednost ima: „Karta za ____ do Zagreba.”',
    opts: ['zrakoplov', 'avion', 'aeroplan', 'letjelicu'],
    answer: 'zrakoplov',
    en: 'a plane ticket to Zagreb (formal register)',
    tip: 'U administrativnom stilu: zrakoplov (avion je općeuporabno).',
  },
  {
    mode: 'parovi',
    q: 'Došlo je pet ____ ljudi.',
    opts: ['tisuća', 'hiljada', 'tisuću', 'hiljadu'],
    answer: 'tisuća',
    en: 'five thousand people came',
    tip: 'Hrvatski standard: tisuća (hiljada je nestandardna).',
  },
  {
    mode: 'parovi',
    q: 'Na granici pokažite ____.',
    opts: ['putovnicu', 'pasoš', 'putnicu', 'provoznicu'],
    answer: 'putovnicu',
    en: 'show your passport at the border',
    tip: 'Standard: putovnica (pasoš je nestandardno).',
  },
  {
    mode: 'parovi',
    q: 'U ____ počinje novi semestar.',
    opts: ['siječnju', 'januaru', 'sječnju', 'prvom mjesecu godine'],
    answer: 'siječnju',
    en: 'the new semester starts in January',
    tip: 'Hrvatska imena mjeseci: siječanj, veljača, ožujak…',
  },
  {
    mode: 'parovi',
    q: 'Kupi štrucu ____ za večeru.',
    opts: ['kruha', 'hljeba', 'kruva', 'hleba'],
    answer: 'kruha',
    en: 'buy a loaf of bread for dinner',
    tip: 'Standard: kruh (hljeb je nestandardno).',
  },
  {
    mode: 'parovi',
    q: 'Vraćamo se za dva ____.',
    opts: ['tjedna', 'sedmice', 'nedjelje', 'tjedana'],
    answer: 'tjedna',
    en: 'we are coming back in two weeks',
    tip: 'Standard: tjedan; paukal uz dva: dva tjedna.',
  },
  {
    mode: 'parovi',
    q: 'Za ručak smo jeli domaću ____.',
    opts: ['juhu', 'supu', 'čorbu', 'zupu'],
    answer: 'juhu',
    en: 'we had homemade soup for lunch',
    tip: 'Standard: juha (supa je regionalno/nestandardno).',
  },
  {
    mode: 'parovi',
    q: 'Putujemo ____ jer je brže od autobusa.',
    opts: ['vlakom', 'vozom', 'trenom', 'željeznicom vozom'],
    answer: 'vlakom',
    en: 'we travel by train because it is faster',
    tip: 'Standard: vlak (voz je nestandardno).',
  },
  {
    mode: 'domace',
    q: 'Upisala se na ____ u Zadru.',
    opts: ['sveučilište', 'univerzitet', 'univerzu', 'visoku univerziju'],
    answer: 'sveučilište',
    en: 'she enrolled at the university in Zadar',
    tip: 'Standard: sveučilište (univerzitet zastarjelo/regionalno).',
  },
  {
    mode: 'domace',
    q: 'U formalnom dopisu: „Podaci se unose u ____.”',
    opts: ['računalo', 'kompjutor', 'kompjuter', 'mašinu'],
    answer: 'računalo',
    en: 'the data are entered into the computer',
    tip: 'Standard daje prednost domaćoj riječi: računalo.',
  },
  {
    mode: 'domace',
    q: 'Posudila sam roman u gradskoj ____.',
    opts: ['knjižnici', 'biblioteci', 'čitaonici knjiga', 'libreriji'],
    answer: 'knjižnici',
    en: 'I borrowed a novel from the city library',
    tip: 'Knjižnica = ustanova; biblioteka danas ponajprije = edicija/zbirka.',
  },
  {
    mode: 'domace',
    q: 'Festival klasične ____ održava se u kolovozu.',
    opts: ['glazbe', 'muzike', 'muzike umjetničke', 'glazbenosti'],
    answer: 'glazbe',
    en: 'the classical music festival is held in August',
    tip: 'Standard preferira: glazba.',
  },
  {
    mode: 'domace',
    q: 'Profesor ____ na gimnaziji.',
    opts: ['povijesti', 'historije', 'istorije', 'povjesnice'],
    answer: 'povijesti',
    en: 'a history teacher at the grammar school',
    tip: 'Standard: povijest (historija/istorija nestandardno).',
  },
  {
    mode: 'domace',
    q: 'Trener ____ kluba dao je ostavku.',
    opts: ['nogometnog', 'fudbalskog', 'futbalskog', 'nogometaškoga'],
    answer: 'nogometnog',
    en: 'the football club coach resigned',
    tip: 'Standard: nogomet (fudbal je nestandardno).',
  },
  {
    mode: 'domace',
    q: 'U uredu vlada radno ____.',
    opts: ['ozračje', 'atmosfera radna', 'vazduh', 'klima zraka'],
    answer: 'ozračje',
    en: 'a working atmosphere reigns in the office',
    tip: 'U prenesenom značenju birani izraz: ozračje.',
  },
  {
    mode: 'domace',
    q: '____ uprave vodi zapisnik.',
    opts: ['Tajnik', 'Sekretar', 'Sekretarijat', 'Pisar glavni'],
    answer: 'Tajnik',
    en: 'the secretary of the board keeps the minutes',
    tip: 'Standard: tajnik/tajnica (sekretar zastarjelo).',
  },
  {
    mode: 'lazni',
    q: '____ pitanja pošaljite e-poštom. (moguća, ako ih bude)',
    opts: ['Eventualna', 'Konačna', 'Vremenska', 'Prigodna'],
    answer: 'Eventualna',
    en: 'send any (possible) questions by e-mail',
    tip: 'Eventualan = MOGUĆ (ne „konačan”, engl. eventual!).',
  },
  {
    mode: 'lazni',
    q: 'Rasprava o ____ proračunu traje.',
    opts: ['aktualnom', 'aktuelnom', 'akutnom', 'aktivnome'],
    answer: 'aktualnom',
    en: 'the debate about the current budget continues',
    tip: 'Standard: aktualan (aktuelan nestandardno; akutan = hitan/oštar).',
  },
  {
    mode: 'lazni',
    q: 'U dopisu je biranije: „____ prednost domaćim rješenjima.”',
    opts: ['Dajemo', 'Preferiramo', 'Imamo', 'Vodimo'],
    answer: 'Dajemo',
    en: 'we give priority to domestic solutions',
    tip: 'Davati prednost — domaća zamjena za „preferirati”.',
  },
  {
    mode: 'lazni',
    q: 'Projekt je uspješno ____. (birani izraz)',
    opts: ['ostvaren', 'realiziran', 'izveden van', 'učinjen gotovim'],
    answer: 'ostvaren',
    en: 'the project was successfully realized',
    tip: 'Ostvariti — birana zamjena za „realizirati”.',
  },
  {
    mode: 'lazni',
    q: 'On će ____ doći, ne brini. (birani izraz)',
    opts: ['sigurno', 'definitivno', 'finalno', 'apsolutno možda'],
    answer: 'sigurno',
    en: 'he will certainly come, do not worry',
    tip: 'Sigurno/zacijelo umjesto razgovornoga „definitivno”.',
  },
  {
    mode: 'lazni',
    q: 'Kakvi su ____ za uspjeh? (birani izraz)',
    opts: ['izgledi', 'šanse', 'opcije', 'prilike dobre'],
    answer: 'izgledi',
    en: 'what are the prospects of success?',
    tip: 'Izgledi — birana zamjena za „šanse”.',
  },
  {
    mode: 'lazni',
    q: 'Ona i dalje ____ na svom prijedlogu. (birani izraz)',
    opts: ['ustraje', 'insistira', 'ustrajava', 'nastojava'],
    answer: 'ustraje',
    en: 'she still insists on her proposal',
    tip: 'Ustrajati na čemu — zamjena za „insistirati”.',
  },
  {
    mode: 'lazni',
    q: 'Popis kandidata sada je ____. (birani izraz)',
    opts: ['potpun', 'kompletan', 'ispunjen', 'svršen'],
    answer: 'potpun',
    en: 'the list of candidates is now complete',
    tip: 'Potpun — birana zamjena za „kompletan”.',
  },
];

export { DATA as POSUDJENICE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PosudjeniceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="posudjenice"
      title={'🇭🇷 Posuđenice i standard'}
      subtitle={'tisuća, ne hiljada — choosing the Croatian word'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — standard vam je materinski! 🏆',
        good: 'Vrlo dobro razlikovanje standarda! 💪',
        more: 'Standardni izbori traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
