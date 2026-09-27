import React from 'react';
import ModeDrill from './ModeDrill';

// C2 verbs-of-speaking drill (C2 tranche 8, 2026-08-15): manner nuances
// (promrmljati, dobaciti, izlanuti, natuknuti), register (izjaviti,
// priopciti, ocitovati se vs reci) and reporting-verb choice in narrative
// (odbrusio, sapnula, zagrmio).
const MODE_LABEL: Record<string, string> = {
  nijanse: '🌗 Nijanse',
  registar: '🏛️ Registar',
  citiranje: '💬 Uz navod',
};

const DATA = [
  {
    mode: 'nijanse',
    q: '„Promrmljati” znači reći:',
    opts: ['tiho i nerazgovijetno', 'glasno', 'veselo', 'službeno'],
    answer: 'tiho i nerazgovijetno',
    en: 'to mutter',
    tip: 'Promrmljao je nešto sebi u bradu.',
  },
  {
    mode: 'nijanse',
    q: '„Dobaciti” znači:',
    opts: ['usput kratko reći', 'baciti predmet daleko', 'dugo objašnjavati', 'šutjeti'],
    answer: 'usput kratko reći',
    en: 'to toss off a remark',
    tip: 'Dobacio je šalu s vrata.',
  },
  {
    mode: 'nijanse',
    q: '„Procijediti kroz zube” znači reći:',
    opts: ['suzdržano i ljutito', 'veselo', 'glasno pjevajući', 'nježno'],
    answer: 'suzdržano i ljutito',
    en: 'to say through gritted teeth',
    tip: 'Bijes pod kontrolom.',
  },
  {
    mode: 'nijanse',
    q: '„Izlanuti” znači:',
    opts: ['reći nepromišljeno što nije trebalo', 'izgovoriti svečano', 'prešutjeti', 'ponoviti'],
    answer: 'reći nepromišljeno što nije trebalo',
    en: 'to blurt out',
    tip: 'Izlanuo je tajnu.',
  },
  {
    mode: 'nijanse',
    q: '„Natuknuti” znači:',
    opts: ['dati naslutiti, spomenuti neizravno', 'izreći izravno', 'narediti', 'otpjevati'],
    answer: 'dati naslutiti, spomenuti neizravno',
    en: 'to hint',
    tip: 'Natuknuo je da odlazi.',
  },
  {
    mode: 'nijanse',
    q: '„Prasnuti” u govoru znači:',
    opts: ['naglo planuti riječima', 'tiho šapnuti', 'svečano objaviti', 'polako čitati'],
    answer: 'naglo planuti riječima',
    en: 'to snap / burst out',
    tip: 'Prasnuo je: Dosta!',
  },
  {
    mode: 'nijanse',
    q: '„Zamucati” znači:',
    opts: ['zapeti u govoru', 'govoriti tečno', 'vikati', 'lagati'],
    answer: 'zapeti u govoru',
    en: 'to stammer',
    tip: 'Zamucao je od treme.',
  },
  {
    mode: 'nijanse',
    q: '„Otpovrnuti” (knjiški) znači:',
    opts: ['odgovoriti, uzvratiti', 'otići', 'otvoriti', 'odbiti pozdrav'],
    answer: 'odgovoriti, uzvratiti',
    en: 'to retort (literary)',
    tip: 'Star glagol iz pripovjedne proze.',
  },
  {
    mode: 'registar',
    q: 'U zapisniku umjesto „rekao je” stoji:',
    opts: ['izjavio je', 'dobacio je', 'promrmljao je', 'lanuo je'],
    answer: 'izjavio je',
    en: 'stated (official register)',
    tip: 'Izjaviti, istaknuti, navesti — službeni glagoli.',
  },
  {
    mode: 'registar',
    q: 'Novinski: „Ministar je ____ da ostavke neće biti.”',
    opts: ['poručio', 'šapnuo', 'promucao', 'zajecao'],
    answer: 'poručio',
    en: 'the minister conveyed',
    tip: 'Poručiti — javna poruka.',
  },
  {
    mode: 'registar',
    q: 'U znanstvenom radu autor:',
    opts: ['ističe, navodi, zaključuje', 'viče, šapće', 'dobacuje', 'mrmlja'],
    answer: 'ističe, navodi, zaključuje',
    en: 'the author notes, states, concludes',
    tip: 'Akademski repertoar glagola govorenja.',
  },
  {
    mode: 'registar',
    q: '„Napomenuti” rabimo za:',
    opts: ['usputnu, ali važnu dodatnu obavijest', 'glavnu tezu', 'svađu', 'pjesmu'],
    answer: 'usputnu, ali važnu dodatnu obavijest',
    en: 'to note in passing',
    tip: 'Valja napomenuti da…',
  },
  {
    mode: 'registar',
    q: '„Priopćiti” pripada:',
    opts: ['službenomu registru', 'žargonu', 'dječjem govoru', 'poeziji'],
    answer: 'službenomu registru',
    en: 'to officially communicate',
    tip: 'Priopćiti javnosti; priopćenje.',
  },
  {
    mode: 'registar',
    q: 'Odvjetnik u sudnici:',
    opts: ['iznosi, osporava, tvrdi', 'dobacuje i mrmlja', 'pjevuši', 'šuti obavezno'],
    answer: 'iznosi, osporava, tvrdi',
    en: 'counsel submits, contests, asserts',
    tip: 'Pravni glagoli govorenja.',
  },
  {
    mode: 'registar',
    q: '„Očitovati se” znači:',
    opts: ['službeno se izjasniti', 'razljutiti se', 'očistiti', 'pojaviti se'],
    answer: 'službeno se izjasniti',
    en: 'to make a formal statement',
    tip: 'Stranka se očitovala o navodima.',
  },
  {
    mode: 'registar',
    q: 'Razgovorna zamjena za „izjaviti”:',
    opts: ['reći', 'priopćiti', 'deklarirati', 'obznaniti'],
    answer: 'reći',
    en: 'the everyday verb is just reci',
    tip: 'Registri se biraju prema prigodi.',
  },
  {
    mode: 'citiranje',
    q: '„Doći ću”, ____ je i spustio slušalicu. (kratko, odlučno)',
    opts: ['odbrusio', 'zapjevao', 'promucao', 'zijevnuo'],
    answer: 'odbrusio',
    en: 'he snapped and hung up',
    tip: 'Odbrusiti = kratko i oštro odgovoriti.',
  },
  {
    mode: 'citiranje',
    q: '„Možda imaš pravo”, ____ je nakon stanke. (tiho priznanje)',
    opts: ['priznao', 'viknuo', 'naredio', 'izlanuo'],
    answer: 'priznao',
    en: 'he admitted after a pause',
    tip: 'Priznati — glagol popuštanja.',
  },
  {
    mode: 'citiranje',
    q: '„Svi van!”, ____ je zapovjednik.',
    opts: ['zagrmio', 'šapnuo', 'natuknuo', 'promrmljao'],
    answer: 'zagrmio',
    en: 'the commander thundered',
    tip: 'Zagrmjeti = viknuti gromko.',
  },
  {
    mode: 'citiranje',
    q: '„Nemoj nikome…”, ____ je urotnički.',
    opts: ['šapnula', 'izjavila', 'objavila', 'deklamirala'],
    answer: 'šapnula',
    en: 'she whispered conspiratorially',
    tip: 'Šapnuti — tiho i povjerljivo.',
  },
  {
    mode: 'citiranje',
    q: '„A što ako odbiju?”, ____ se ona. (pitanje sebi/skupini)',
    opts: ['zapitala', 'odgovorila', 'naredila', 'otpjevala'],
    answer: 'zapitala',
    en: 'she wondered',
    tip: 'Zapitati se — glagol unutarnjeg pitanja.',
  },
  {
    mode: 'citiranje',
    q: '„To je sve vaša krivnja!”, ____ je bijesno.',
    opts: ['optužila', 'pohvalila', 'zamolila', 'čestitala'],
    answer: 'optužila',
    en: 'she accused furiously',
    tip: 'Glagol nosi govorni čin: optužiti.',
  },
  {
    mode: 'citiranje',
    q: '„Bit će sve u redu”, ____ ju je.',
    opts: ['utješio', 'optužio', 'prekorio', 'izazvao'],
    answer: 'utješio',
    en: 'he comforted her',
    tip: 'Tješiti — govorni čin potpore.',
  },
  {
    mode: 'citiranje',
    q: 'Birano izvješćivanje izbjegava:',
    opts: [
      'stalno „rekao je” — bira precizniji glagol',
      'svaku promjenu glagola',
      'navodnike',
      'imena',
    ],
    answer: 'stalno „rekao je” — bira precizniji glagol',
    en: 'vary the reporting verb',
    tip: 'Odbrusio, priznao, natuknuo — nijansa nosi priču.',
  },
];

export { DATA as GLAGOLI_GOVORENJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GlagoliGovorenjaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="glagoligovorenja"
      title={'🗣️ Glagoli govorenja'}
      subtitle={'promrmljati, odbrusiti, natuknuti — a hundred ways to say said'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — svi glasovi su vaši! 🏆',
        good: 'Vrlo dobro vladanje glagolima govorenja! 💪',
        more: 'Glagoli govorenja traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
