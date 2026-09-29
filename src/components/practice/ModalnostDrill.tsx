import React from 'react';
import ModeDrill from './ModeDrill';

// C2 epistemic-modality drill (C2 tranche 6, 2026-08-15): supposition
// (bit ce da, zacijelo, po svoj prilici; standard alternatives to mora da),
// obligation shades (trebao je, ima se, valja, smjeti) and hedging
// (cini se, koliko znam, navodno, u nacelu).
const MODE_LABEL: Record<string, string> = {
  pretpostavka: '🔮 Pretpostavka',
  obveza: '📜 Obveza',
  ograda: '🛡️ Ograde',
};

const DATA = [
  {
    mode: 'pretpostavka',
    q: '„____ da je već stigao.” (zaključujem po svemu)',
    opts: ['Bit će', 'Hoće', 'Neka', 'Trebat će'],
    answer: 'Bit će',
    en: 'he must have arrived by now',
    tip: 'Bit će da + perfekt = zacijelo (epistemički futur).',
  },
  {
    mode: 'pretpostavka',
    q: '„Netko kuca. ____ je poštar.”',
    opts: ['Bit će da', 'Neka', 'Čim', 'Makar'],
    answer: 'Bit će da',
    en: 'that will be the postman',
    tip: 'Pretpostavka o sadašnjem: bit će da je.',
  },
  {
    mode: 'pretpostavka',
    q: 'Birana zamjena za razgovorno „mora da je zaboravio”:',
    opts: [
      'zacijelo je zaboravio',
      'morao je zaboraviti sve',
      'zaboravio je jer mora',
      'mora zaboraviti',
    ],
    answer: 'zacijelo je zaboravio',
    en: 'he must have forgotten (standard)',
    tip: 'Standard: zacijelo/vjerojatno/bit će da (mora da je razgovorno).',
  },
  {
    mode: 'pretpostavka',
    q: '„Zacijelo” znači:',
    opts: ['gotovo sigurno', 'nikako', 'djelomično', 'glasno'],
    answer: 'gotovo sigurno',
    en: 'what zacijelo means',
    tip: 'Visok stupanj uvjerenosti.',
  },
  {
    mode: 'pretpostavka',
    q: '„Po svoj prilici” znači:',
    opts: ['najvjerojatnije', 'u svakom odijelu', 'izvana', 'službeno'],
    answer: 'najvjerojatnije',
    en: 'what po svoj prilici means',
    tip: 'Ustaljena modalna formula.',
  },
  {
    mode: 'pretpostavka',
    q: '„Mogao bi biti u pravu” izriče:',
    opts: ['opreznu mogućnost', 'sigurnost', 'zabranu', 'prošlost'],
    answer: 'opreznu mogućnost',
    en: 'he might be right',
    tip: 'Kondicional od moći = oslabljena tvrdnja.',
  },
  {
    mode: 'pretpostavka',
    q: '„Vjerojatno neće doći” — govornik:',
    opts: ['procjenjuje na temelju znanja', 'zna sigurno', 'zapovijeda', 'pita'],
    answer: 'procjenjuje na temelju znanja',
    en: 'probably will not come',
    tip: 'Vjerojatno = procjena, ne činjenica.',
  },
  {
    mode: 'pretpostavka',
    q: 'Ljestvica sigurnosti od najslabije: „možda < ____ < zacijelo”.',
    opts: ['vjerojatno', 'sigurno', 'nipošto', 'jedva'],
    answer: 'vjerojatno',
    en: 'a scale of certainty',
    tip: 'Stupnjevanje epistemičke sigurnosti.',
  },
  {
    mode: 'obveza',
    q: '„Trebao je doći u osam” (a nije) izriče:',
    opts: ['neispunjeno očekivanje', 'sreću', 'uspjeh', 'zabranu'],
    answer: 'neispunjeno očekivanje',
    en: 'he was supposed to come at eight',
    tip: 'Trebati u perfektu = propušteno očekivanje.',
  },
  {
    mode: 'obveza',
    q: '„Imaš se javiti sutra” izriče:',
    opts: ['obvezu (moraš se javiti)', 'mogućnost', 'želju', 'prošlost'],
    answer: 'obvezu (moraš se javiti)',
    en: 'you are to report tomorrow',
    tip: 'Imati se + infinitiv = službena obveza.',
  },
  {
    mode: 'obveza',
    q: '„Valja požuriti” znači:',
    opts: ['treba požuriti', 'zabranjeno je žuriti', 'žurba ne pomaže', 'netko žuri'],
    answer: 'treba požuriti',
    en: 'one ought to hurry',
    tip: 'Valja + infinitiv = bezlična preporuka.',
  },
  {
    mode: 'obveza',
    q: '„Nije trebao to reći” izriče:',
    opts: ['prijekor za učinjeno', 'pohvalu', 'molbu', 'plan'],
    answer: 'prijekor za učinjeno',
    en: 'he should not have said that',
    tip: 'Niječno trebati u perfektu = prijekor.',
  },
  {
    mode: 'obveza',
    q: 'Razlika „morati” i „trebati”:',
    opts: ['morati je jača obveza', 'trebati je jača', 'iste su snage', 'trebati znači htjeti'],
    answer: 'morati je jača obveza',
    en: 'morati vs trebati',
    tip: 'Moram (nema izbora) vs trebam (očekuje se).',
  },
  {
    mode: 'obveza',
    q: '„Smjeti” izriče:',
    opts: ['dopuštenje', 'sposobnost', 'želju', 'naviku'],
    answer: 'dopuštenje',
    en: 'what smjeti expresses',
    tip: 'Smijem li? = je li mi dopušteno?',
  },
  {
    mode: 'obveza',
    q: '„Ne smiješ to učiniti” izriče:',
    opts: ['zabranu', 'nemogućnost', 'savjet da požuriš', 'prošlost'],
    answer: 'zabranu',
    en: 'you must not do that',
    tip: 'Niječno smjeti = zabrana.',
  },
  {
    mode: 'obveza',
    q: '„Morao bih krenuti” (kondicional) ublažava:',
    opts: ['obvezu u pristojnu najavu', 'zabranu', 'pitanje', 'prošlost'],
    answer: 'obvezu u pristojnu najavu',
    en: 'I ought to get going',
    tip: 'Kondicional omekšava moranje.',
  },
  {
    mode: 'ograda',
    q: '„Čini se da su u pravu” izriče:',
    opts: ['dojam s ogradom', 'sigurnost', 'njihovu tvrdnju', 'laž'],
    answer: 'dojam s ogradom',
    en: 'it seems they are right',
    tip: 'Čini se da = ograđeni dojam.',
  },
  {
    mode: 'ograda',
    q: '„Koliko znam, trgovina je zatvorena” — govornik:',
    opts: ['ograđuje se dosegom svoga znanja', 'jamči', 'naređuje', 'citira zakon'],
    answer: 'ograđuje se dosegom svoga znanja',
    en: 'as far as I know',
    tip: 'Koliko znam/koliko mi je poznato = ograda.',
  },
  {
    mode: 'ograda',
    q: '„Navodno su se dogovorili” prenosi:',
    opts: ['tuđu nepotvrđenu tvrdnju', 'vlastito jamstvo', 'zapovijed', 'želju'],
    answer: 'tuđu nepotvrđenu tvrdnju',
    en: 'allegedly they agreed',
    tip: 'Navodno = prenosim, ne jamčim.',
  },
  {
    mode: 'ograda',
    q: '„Rekao bih da je tako” u raspravi je:',
    opts: ['uljudno ublažena tvrdnja', 'oštra tvrdnja', 'pitanje', 'isprika'],
    answer: 'uljudno ublažena tvrdnja',
    en: 'I would say so',
    tip: 'Kondicional govorenja = uljudna ograda.',
  },
  {
    mode: 'ograda',
    q: '„Ako se ne varam, sastanak je u tri.”',
    opts: ['ograda vlastite pouzdanosti', 'matematička tvrdnja', 'prijetnja', 'molba'],
    answer: 'ograda vlastite pouzdanosti',
    en: 'if I am not mistaken',
    tip: 'Formulaična ograda.',
  },
  {
    mode: 'ograda',
    q: '„Tobože” znači:',
    opts: ['kao da, navodno (s nevjericom)', 'stvarno', 'odmah', 'tajno'],
    answer: 'kao da, navodno (s nevjericom)',
    en: 'what tobože means',
    tip: 'Tobože uči — a spava.',
  },
  {
    mode: 'ograda',
    q: '„U načelu se slažem” signalizira:',
    opts: ['slaganje s mogućim iznimkama', 'potpuno slaganje', 'odbijanje', 'ravnodušnost'],
    answer: 'slaganje s mogućim iznimkama',
    en: 'I agree in principle',
    tip: 'U načelu = načelno da, ali…',
  },
  {
    mode: 'ograda',
    q: 'Najjača tvrdnja među ponuđenima:',
    opts: [
      'Nedvojbeno je pobijedio.',
      'Navodno je pobijedio.',
      'Čini se da je pobijedio.',
      'Možda je pobijedio.',
    ],
    answer: 'Nedvojbeno je pobijedio.',
    en: 'the strongest claim',
    tip: 'Nedvojbeno > zacijelo > vjerojatno > možda > navodno.',
  },
];

export { DATA as MODALNOST_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ModalnostDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="modalnost"
      title={'🎚️ Izricanje sigurnosti'}
      subtitle={'bit će da je, zacijelo, navodno — how sure are you, really?'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — modalnost je vaša! 🏆',
        good: 'Vrlo dobro vladanje modalnošću! 💪',
        more: 'Izricanje sigurnosti traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
