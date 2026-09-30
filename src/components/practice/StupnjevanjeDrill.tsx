import React from 'react';
import ModeDrill from './ModeDrill';

// B2 comparison drill (B2 tranche 5, 2026-08-15): comparative formation
// (-iji, -ji with jotation, epenthetic l, najj- spelling), suppletives
// (bolji, gori, veci, manji; adverbs vise/manje) and comparison syntax
// (od + G vs nego sto, sto...to, sve + comparative).
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  nepravilni: '🃏 Nepravilni',
  usporedba: '⚖️ Usporedba',
};

const DATA = [
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „star” glasi:',
    opts: ['stariji', 'starši', 'starejši', 'više star'],
    answer: 'stariji',
    en: 'older',
    tip: 'Većina pridjeva: -iji (stariji, noviji).',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „mlad” glasi:',
    opts: ['mlađi', 'mladiji', 'mladši', 'više mlad'],
    answer: 'mlađi',
    en: 'younger',
    tip: 'Jednosložni s dugim slogom: -ji s jotacijom (d+j → đ).',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „jak” glasi:',
    opts: ['jači', 'jakiji', 'jakši', 'više jak'],
    answer: 'jači',
    en: 'stronger',
    tip: 'K + j → č: jak → jači.',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „drag” glasi:',
    opts: ['draži', 'dragiji', 'dragši', 'više drag'],
    answer: 'draži',
    en: 'dearer',
    tip: 'G + j → ž: drag → draži.',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „tih” glasi:',
    opts: ['tiši', 'tihiji', 'tihši', 'više tih'],
    answer: 'tiši',
    en: 'quieter',
    tip: 'H + j → š: tih → tiši.',
  },
  {
    mode: 'tvorba',
    q: 'Komparativ pridjeva „skup” glasi:',
    opts: ['skuplji', 'skupiji', 'skupši', 'više skup'],
    answer: 'skuplji',
    en: 'more expensive',
    tip: 'P + j → plj (epentetsko l): skuplji.',
  },
  {
    mode: 'tvorba',
    q: 'Superlativ pridjeva „brz” glasi:',
    opts: ['najbrži', 'najbrzniji', 'najviše brz', 'brži naj'],
    answer: 'najbrži',
    en: 'fastest',
    tip: 'Naj- + komparativ: najbrži.',
  },
  {
    mode: 'tvorba',
    q: 'Superlativ od „jednostavan” glasi:',
    opts: ['najjednostavniji', 'najednostavniji', 'naj jednostavniji', 'najjednostavan'],
    answer: 'najjednostavniji',
    en: 'simplest',
    tip: 'Naj + j… piše se s DVA j: najjednostavniji, najjači.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „dobar” glasi:',
    opts: ['bolji', 'dobriji', 'dobrši', 'više dobar'],
    answer: 'bolji',
    en: 'better',
    tip: 'Supletivno: dobar → bolji → najbolji.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „zao/loš” glasi:',
    opts: ['gori', 'zliji', 'lošši', 'najzao'],
    answer: 'gori',
    en: 'worse',
    tip: 'Supletivno: zao/loš → gori (lošiji je dopušteno, gori birano).',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „velik” glasi:',
    opts: ['veći', 'velikiji', 'večji', 'više velik'],
    answer: 'veći',
    en: 'bigger',
    tip: 'Supletivno: velik → veći → najveći.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „malen/mali” glasi:',
    opts: ['manji', 'maleniji', 'malji', 'više mali'],
    answer: 'manji',
    en: 'smaller',
    tip: 'Supletivno: malen → manji → najmanji.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ priloga „dobro” glasi:',
    opts: ['bolje', 'dobrije', 'boljije', 'više dobro'],
    answer: 'bolje',
    en: 'better (adverb)',
    tip: 'Dobro → bolje: Danas pjeva bolje.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ priloga „mnogo” glasi:',
    opts: ['više', 'mnogije', 'množe', 'najmnogo'],
    answer: 'više',
    en: 'more',
    tip: 'Mnogo → više → najviše.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ priloga „malo” glasi:',
    opts: ['manje', 'malije', 'majne', 'najmalo'],
    answer: 'manje',
    en: 'less',
    tip: 'Malo → manje → najmanje.',
  },
  {
    mode: 'nepravilni',
    q: 'Komparativ pridjeva „dug” glasi:',
    opts: ['dulji', 'dugiji', 'dugši', 'duži i dulji nikad'],
    answer: 'dulji',
    en: 'longer',
    tip: 'Dug → dulji (i duži); birani standard voli dulji.',
  },
  {
    mode: 'usporedba',
    q: 'Ivan je viši ____ mene.',
    opts: ['od', 'nego', 'kao', 'za'],
    answer: 'od',
    en: 'Ivan is taller than me',
    tip: 'Od + genitiv: viši od mene.',
  },
  {
    mode: 'usporedba',
    q: 'Ivan je viši ____ što sam mislio.',
    opts: ['nego', 'od', 'kao', 'čim'],
    answer: 'nego',
    en: 'Ivan is taller than I thought',
    tip: 'Ispred rečenice: nego što (ne od).',
  },
  {
    mode: 'usporedba',
    q: 'Ona pjeva ____ kao slavuj.',
    opts: ['lijepo', 'ljepše', 'najljepše', 'više lijepa'],
    answer: 'lijepo',
    en: 'she sings as beautifully as a nightingale',
    tip: 'Jednakost: pozitiv + kao (lijepo kao slavuj).',
  },
  {
    mode: 'usporedba',
    q: 'Što više vježbaš, ____ govoriš.',
    opts: ['to bolje', 'tim bolji', 'to najbolje', 'tako bolje'],
    answer: 'to bolje',
    en: 'the more you practise, the better you speak',
    tip: 'Što + komparativ, TO + komparativ.',
  },
  {
    mode: 'usporedba',
    q: 'Ovaj je film ____ od svih.',
    opts: ['najbolji', 'bolji', 'dobar', 'najbolje'],
    answer: 'najbolji',
    en: 'this film is the best of all',
    tip: 'Superlativ + od svih.',
  },
  {
    mode: 'usporedba',
    q: 'Postaje ____ hladnije. (postupno)',
    opts: ['sve', 'što', 'to', 'naj'],
    answer: 'sve',
    en: 'it is getting colder and colder',
    tip: 'Sve + komparativ = postupno pojačavanje.',
  },
  {
    mode: 'usporedba',
    q: 'Kupio je auto ____ nego što je planirao.',
    opts: ['skuplji', 'skupljeg', 'najskuplji', 'skupo'],
    answer: 'skuplji',
    en: 'he bought a more expensive car than planned',
    tip: 'Komparativ pridjeva uz imenicu: auto skuplji nego što…',
  },
  {
    mode: 'usporedba',
    q: '„Ona je najpametnija ____ razredu.”',
    opts: ['u', 'od', 'iz', 'na'],
    answer: 'u',
    en: 'she is the smartest in the class',
    tip: 'Superlativ + u + lokativ (u razredu).',
  },
];

export { DATA as STUPNJEVANJE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function StupnjevanjeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="stupnjevanje"
      title={'📈 Stupnjevanje'}
      subtitle={'stariji, bolji, najjači — climbing the comparison ladder'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — usporedbe su vaše! 🏆',
        good: 'Vrlo dobro vladanje stupnjevanjem! 💪',
        more: 'Stupnjevanje traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
