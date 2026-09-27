import React from 'react';
import ModeDrill from './ModeDrill';

// C1 time-expressions drill (C1 tranche 7, 2026-08-15): the case system
// of time (genitive prosle godine, accusative cijelu noc, instrumental
// nedjeljom), time adverbs (zimi, jutros, netom, preksutra) and fixed
// expressions (uoci + G, tijekom, do daljnjega, s vremena na vrijeme).
const MODE_LABEL: Record<string, string> = {
  padezi: '📐 Padeži vremena',
  prilozi: '⏱️ Prilozi',
  izrazi: '🧭 Izrazi',
};

const DATA = [
  {
    mode: 'padezi',
    q: '„____ godine bili smo na moru.” (prošla)',
    opts: ['Prošle', 'Prošlu', 'Prošloj', 'Prošlom'],
    answer: 'Prošle',
    en: 'last year we were at the seaside',
    tip: 'Vremenski GENITIV: prošle godine, ovog tjedna.',
  },
  {
    mode: 'padezi',
    q: '„Radio je ____ noć.” (cijela)',
    opts: ['cijelu', 'cijele', 'cijeloj', 'cijelom'],
    answer: 'cijelu',
    en: 'he worked the whole night',
    tip: 'Trajanje → AKUZATIV: cijelu noć, cijeli dan.',
  },
  {
    mode: 'padezi',
    q: '„____ idemo na plivanje.” (nedjelja, redovito)',
    opts: ['Nedjeljom', 'Nedjelje', 'U nedjelje', 'Nedjelji'],
    answer: 'Nedjeljom',
    en: 'on Sundays we go swimming',
    tip: 'Ponavljanje → INSTRUMENTAL: nedjeljom, jutrom.',
  },
  {
    mode: 'padezi',
    q: '„Vidimo se ____ ponedjeljak.”',
    opts: ['u', 'na', 'za u', 'pri'],
    answer: 'u',
    en: 'see you on Monday',
    tip: 'Dan u tjednu: u + akuzativ.',
  },
  {
    mode: 'padezi',
    q: '„Rođen je ____ svibnju.”',
    opts: ['u', 'na', 'za', 'pri'],
    answer: 'u',
    en: 'he was born in May',
    tip: 'Mjesec: u + lokativ (u svibnju).',
  },
  {
    mode: 'padezi',
    q: '„Vraćamo se ____ dva sata.” (nakon toliko)',
    opts: ['za', 'u', 'na', 'po'],
    answer: 'za',
    en: 'we are back in two hours',
    tip: 'Za + A = nakon isteka: za dva sata.',
  },
  {
    mode: 'padezi',
    q: '„Ostajemo ____ dva tjedna.” (toliko dugo)',
    opts: ['na', 'za', 'u', 'po'],
    answer: 'na',
    en: 'we are staying for two weeks',
    tip: 'Na + A = planirano trajanje boravka.',
  },
  {
    mode: 'padezi',
    q: '„____ ručka ne razgovaramo o poslu.” (dok traje)',
    opts: ['Za vrijeme', 'U vrijeme na', 'Kroz', 'Nakon'],
    answer: 'Za vrijeme',
    en: 'during lunch we do not talk shop',
    tip: 'Za vrijeme + G = tijekom.',
  },
  {
    mode: 'prilozi',
    q: 'Prilog za „svake zime” glasi:',
    opts: ['zimi', 'zimom', 'u zimu', 'zimski'],
    answer: 'zimi',
    en: 'in winter (adverb)',
    tip: 'Stari lokativi: zimi, ljeti.',
  },
  {
    mode: 'prilozi',
    q: 'Prilog za „svakoga jutra” glasi:',
    opts: ['ujutro', 'jutrom samo', 'na jutro', 'jutros'],
    answer: 'ujutro',
    en: 'in the morning',
    tip: 'Ujutro, popodne, navečer.',
  },
  {
    mode: 'prilozi',
    q: '„Jutros” znači:',
    opts: ['ovoga jutra', 'svakog jutra', 'sutra ujutro', 'jučer ujutro'],
    answer: 'ovoga jutra',
    en: 'this morning',
    tip: 'Jutros, večeras, noćas, danas — ovaj + doba.',
  },
  {
    mode: 'prilozi',
    q: '„Preksutra” znači:',
    opts: ['za dva dana', 'jučer', 'prije dva dana', 'sutra navečer'],
    answer: 'za dva dana',
    en: 'the day after tomorrow',
    tip: 'Sutra → preksutra; jučer → prekjučer.',
  },
  {
    mode: 'prilozi',
    q: '„Odavno” znači:',
    opts: ['već dugo vremena', 'nedavno', 'uskoro', 'nikad'],
    answer: 'već dugo vremena',
    en: 'for a long time now',
    tip: 'Odavno te nisam vidio.',
  },
  {
    mode: 'prilozi',
    q: '„Netom” znači:',
    opts: ['upravo, maloprije', 'davno', 'možda', 'kasno'],
    answer: 'upravo, maloprije',
    en: 'just now (formal)',
    tip: 'Netom završeni radovi — birani prilog.',
  },
  {
    mode: 'prilozi',
    q: '„Uoči” u „uoči praznika” znači:',
    opts: ['neposredno prije', 'poslije', 'tijekom', 'umjesto'],
    answer: 'neposredno prije',
    en: 'on the eve of',
    tip: 'Uoči + G: uoči Božića, uoči ispita.',
  },
  {
    mode: 'prilozi',
    q: '„Potkraj” u „potkraj godine” znači:',
    opts: ['pri kraju', 'na početku', 'sredinom', 'poslije'],
    answer: 'pri kraju',
    en: 'towards the end of',
    tip: 'Potkraj + G: potkraj stoljeća.',
  },
  {
    mode: 'izrazi',
    q: '„____ mjeseca stiže isplata.” (puni oblik, ne „u tijeku”)',
    opts: ['Tijekom', 'U tijeku od', 'Kroz za', 'Preko na'],
    answer: 'Tijekom',
    en: 'during the month the payment arrives',
    tip: 'Tijekom + G — birani izraz protezanja.',
  },
  {
    mode: 'izrazi',
    q: '„Sastanak je odgođen ____ daljnjega.”',
    opts: ['do', 'od', 'za', 'iz'],
    answer: 'do',
    en: 'postponed until further notice',
    tip: 'Do daljnjega — ustaljeni izraz.',
  },
  {
    mode: 'izrazi',
    q: '„____ deset godina grad se udvostručio.” (unatrag)',
    opts: ['U posljednjih', 'Za posljednje u', 'Od posljednjih na', 'Kroz posljednja'],
    answer: 'U posljednjih',
    en: 'in the last ten years',
    tip: 'U posljednjih + G: u posljednjih deset godina.',
  },
  {
    mode: 'izrazi',
    q: '„Svako ____ netko pokuca.” (kratki razmaci)',
    opts: ['malo', 'vrijeme', 'čas na', 'tren u'],
    answer: 'malo',
    en: 'every so often someone knocks',
    tip: 'Svako malo = često.',
  },
  {
    mode: 'izrazi',
    q: '„S ____ na vrijeme” znači povremeno.',
    opts: ['vremena', 'vremenom', 'vrijeme', 'vremenu'],
    answer: 'vremena',
    en: 'from time to time',
    tip: 'S vremena na vrijeme — ustaljena sveza.',
  },
  {
    mode: 'izrazi',
    q: '„U zadnji ____ smo stigli.” (krajnji trenutak)',
    opts: ['čas', 'sat', 'dan', 'put'],
    answer: 'čas',
    en: 'we made it at the last moment',
    tip: 'U zadnji čas = u posljednji trenutak.',
  },
  {
    mode: 'izrazi',
    q: '„Dan ____ dan sve je bolje.”',
    opts: ['za', 'po', 'uz', 'na'],
    answer: 'za',
    en: 'day by day it gets better',
    tip: 'Dan za danom / dan za dan — postupnost.',
  },
  {
    mode: 'izrazi',
    q: '„Nekoć” znači:',
    opts: ['nekada davno', 'uskoro', 'nikada', 'upravo sada'],
    answer: 'nekada davno',
    en: 'once, long ago',
    tip: 'Nekoć davno — pripovjedni početak.',
  },
];

export { DATA as VRIJEME_IZRAZ_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VrijemeIzrazDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="vrijemeizraz"
      title={'🕰️ Izricanje vremena'}
      subtitle={'prošle godine, cijelu noć, nedjeljom — time through the cases'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — vrijeme je vaše! 🏆',
        good: 'Vrlo dobro izricanje vremena! 💪',
        more: 'Izricanje vremena traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
