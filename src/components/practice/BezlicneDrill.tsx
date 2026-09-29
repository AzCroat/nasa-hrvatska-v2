import React from 'react';
import ModeDrill from './ModeDrill';

// B2 impersonal-constructions drill (B2 tranche 2, 2026-08-15): subjectless
// sentences — treba/valja/ima + G, dative experiencers (boli me, žao mi je,
// stalo mi je), and the neuter singular agreement impersonal past requires.
const MODE_LABEL: Record<string, string> = {
  izrazi: '🫥 Bez subjekta',
  dozivljaj: '💓 Dativ doživljavača',
  slaganje: '⚙️ Slaganje u prošlosti',
};

const DATA = [
  {
    mode: 'izrazi',
    q: '____ kupiti kruha prije nego što se trgovina zatvori.',
    opts: ['Treba', 'Trebaju', 'Trebamo se', 'Potrebuje'],
    answer: 'Treba',
    en: 'one should buy bread before the shop closes',
    tip: 'Bezlično: treba + infinitiv (bez subjekta).',
  },
  {
    mode: 'izrazi',
    q: 'Ovdje se ____ parkirati bez naplate.',
    opts: ['može', 'možemo se', 'mogu', 'može biti'],
    answer: 'može',
    en: 'one can park here free of charge',
    tip: 'Može se + infinitiv — bezlična mogućnost.',
  },
  {
    mode: 'izrazi',
    q: '____ imati na umu da rok istječe sutra.',
    opts: ['Valja', 'Valjaju', 'Vrijedi se', 'Važi se'],
    answer: 'Valja',
    en: 'one should bear in mind that the deadline expires tomorrow',
    tip: 'Valja + infinitiv — knjiški bezlični savjet.',
  },
  {
    mode: 'izrazi',
    q: 'U dvorani ____ mjesta za sve.',
    opts: ['ima', 'imaju', 'jest', 'su'],
    answer: 'ima',
    en: 'there is room for everyone in the hall',
    tip: 'Bezlično ima + genitiv = postoji: ima mjesta.',
  },
  {
    mode: 'izrazi',
    q: 'Sinoć ____ struje puna dva sata.',
    opts: ['nije bilo', 'nisu bili', 'nije bila', 'nema'],
    answer: 'nije bilo',
    en: 'there was no electricity for two full hours last night',
    tip: 'Niječno bezlično u prošlosti: nije bilo + genitiv.',
  },
  {
    mode: 'izrazi',
    q: 'Do sukoba ____ zbog nesporazuma.',
    opts: ['je došlo', 'su došli', 'došli su', 'je došla'],
    answer: 'je došlo',
    en: 'the conflict arose because of a misunderstanding',
    tip: 'Doći do + G — bezlično, srednji rod: došlo je.',
  },
  {
    mode: 'izrazi',
    q: 'Na sjednici ____ o novom proračunu.',
    opts: ['se raspravljalo', 'raspravljali se', 'se raspravljala', 'raspravljano'],
    answer: 'se raspravljalo',
    en: 'the new budget was discussed at the session',
    tip: 'Bezlični se-oblik u prošlosti (sr. rod jd.); se stoji na drugome mjestu: na sjednici se raspravljalo.',
  },
  {
    mode: 'izrazi',
    q: 'U studenome se rano ____.',
    opts: ['smrkava', 'smrkavaju', 'smrkavamo', 'smrknu'],
    answer: 'smrkava',
    en: 'in November it gets dark early',
    tip: 'Prirodne pojave su bezlične: smrkava se, sviće, grmi.',
  },
  {
    mode: 'dozivljaj',
    q: '____ me grlo već tri dana.',
    opts: ['Boli', 'Bolim', 'Boli se', 'Bole'],
    answer: 'Boli',
    en: 'my throat has hurt for three days',
    tip: 'Boli + koga (akuzativ): boli me, boli ga.',
  },
  {
    mode: 'dozivljaj',
    q: '____ li ti se novi film?',
    opts: ['Sviđa', 'Sviđaš', 'Sviđam', 'Svidi'],
    answer: 'Sviđa',
    en: 'do you like the new film?',
    tip: 'Sviđati se + dativ: sviđa mi se, sviđa li ti se.',
  },
  {
    mode: 'dozivljaj',
    q: 'Djeci ____ hladno na izletu.',
    opts: ['je bilo', 'su bili', 'je bila', 'bilo su'],
    answer: 'je bilo',
    en: 'the children were cold on the trip',
    tip: 'Hladno mi/im JE — doživljavač u dativu, glagol bezličan.',
  },
  {
    mode: 'dozivljaj',
    q: '____ mi se od te vožnje trajektom.',
    opts: ['Vrti', 'Vrtim', 'Zavrtio', 'Vrte'],
    answer: 'Vrti',
    en: 'that ferry ride makes me dizzy',
    tip: 'Vrti mi se — bezlično stanje s dativom.',
  },
  {
    mode: 'dozivljaj',
    q: 'Žao ____ je što ne možete doći.',
    opts: ['nam', 'nas', 'mi smo', 'nama smo'],
    answer: 'nam',
    en: 'we are sorry you cannot come',
    tip: 'Žao mi/nam je + što — dativ doživljavača.',
  },
  {
    mode: 'dozivljaj',
    q: 'Stalo joj ____ do tog posla.',
    opts: ['je', 'se', 'ju je', 'joj'],
    answer: 'je',
    en: 'she cares about that job',
    tip: 'Stalo mi je do + G — ustaljena bezlična sveza.',
  },
  {
    mode: 'dozivljaj',
    q: 'Nedostaje ____ obitelj otkako živi u Berlinu.',
    opts: ['mu', 'ga', 'on', 'njemu je'],
    answer: 'mu',
    en: 'he has missed his family since moving to Berlin',
    tip: 'Nedostajati + dativ: nedostaje mi, nedostaje mu.',
  },
  {
    mode: 'dozivljaj',
    q: 'Dosadilo ____ je čekati u redu.',
    opts: ['im', 'ih', 'oni', 'njima su'],
    answer: 'im',
    en: 'they got tired of waiting in line',
    tip: 'Dosaditi + dativ: dosadilo im je.',
  },
  {
    mode: 'slaganje',
    q: '____ je pet minuta do ponoći.',
    opts: ['Bilo', 'Bili', 'Bila', 'Bile'],
    answer: 'Bilo',
    en: 'it was five minutes to midnight',
    tip: 'Bezlična prošlost uvijek u srednjem rodu jednine: bilo je.',
  },
  {
    mode: 'slaganje',
    q: 'Na trgu ____ mnogo ljudi.',
    opts: ['je bilo', 'su bili', 'je bila', 'jesu bili'],
    answer: 'je bilo',
    en: 'there were many people in the square',
    tip: 'Mnogo/malo/pet + G → bezlično: bilo je mnogo ljudi.',
  },
  {
    mode: 'slaganje',
    q: '____ je hladno cijeli tjedan.',
    opts: ['Bilo', 'Bio', 'Bila', 'Bit'],
    answer: 'Bilo',
    en: 'it was cold all week',
    tip: 'Vremenske i osjetilne rečenice: bilo je hladno/vruće/kasno.',
  },
  {
    mode: 'slaganje',
    q: 'Prošlo ____ deset godina od mature.',
    opts: ['je', 'su', 'ju', 'se'],
    answer: 'je',
    en: 'ten years have passed since graduation',
    tip: 'Broj 5+ + G → jednina sr. roda: prošlo je deset godina.',
  },
  {
    mode: 'slaganje',
    q: 'U izvješću ____ da su prihodi pali.',
    opts: ['stoji', 'stoje', 'stojimo', 'stajalo'],
    answer: 'stoji',
    en: 'the report states that revenues fell',
    tip: 'Bezlično „stoji da…” = piše, navodi se.',
  },
  {
    mode: 'slaganje',
    q: 'Čini se da ____ negdje pogriješili u računu.',
    opts: ['smo', 'se', 'je', 'sam se'],
    answer: 'smo',
    en: 'it seems we made a mistake somewhere in the calculation',
    tip: 'Bezlično „čini se” + da-rečenica s vlastitim subjektom.',
  },
  {
    mode: 'slaganje',
    q: 'Nema ____ za brigu — sve je pod nadzorom.',
    opts: ['razloga', 'razlog', 'razlogom', 'razlozi'],
    answer: 'razloga',
    en: 'there is no cause for concern — everything is under control',
    tip: 'Nema + GENITIV: nema razloga, nema vremena.',
  },
  {
    mode: 'slaganje',
    q: 'Ostalo ____ još sasvim malo vremena.',
    opts: ['je', 'su', 'ju', 'si'],
    answer: 'je',
    en: 'there is very little time left',
    tip: 'Malo + G → bezlično sr. roda: ostalo je malo vremena.',
  },
];

export { DATA as BEZLICNE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function BezlicneDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="bezlicne"
      title={'👻 Bezlične konstrukcije'}
      subtitle={'treba, valja, boli me — sentences without a subject'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — bezlične rečenice su vaše! 🏆',
        good: 'Vrlo dobro vladanje bezličnim izrazima! 💪',
        more: 'Bezlične konstrukcije traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
