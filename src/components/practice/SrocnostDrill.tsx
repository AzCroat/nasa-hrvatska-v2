import React from 'react';
import ModeDrill from './ModeDrill';

// C1 agreement drill (C1 tranche 4, 2026-08-15): collective nouns (braca
// su dosla, telad je, momcad je), quantifier phrases (vecina je, pet kuca je
// sruseno, 21 igrac JE dosao) and coordinated subjects (mixed genders take
// masculine plural, first person wins).
const MODE_LABEL: Record<string, string> = {
  zbirne: '🌳 Zbirne imenice',
  vecina: '📊 Količina',
  mjesovito: '🤝 Više subjekata',
};

const DATA = [
  {
    mode: 'zbirne',
    q: 'Braća ____ stigla.',
    opts: ['su', 'je', 'smo', 'bi'],
    answer: 'su',
    en: 'the brothers have arrived',
    tip: 'Braća: oblik jednine, sročnost množine — braća su stigla.',
  },
  {
    mode: 'zbirne',
    q: 'Djeca su se ____ u dvorištu. (igrati)',
    opts: ['igrala', 'igrali', 'igralo', 'igrale'],
    answer: 'igrala',
    en: 'the children were playing in the yard',
    tip: 'Djeca su se igrala — pridjev radni na -a.',
  },
  {
    mode: 'zbirne',
    q: 'Telad ____ na paši. (biti)',
    opts: ['je', 'su', 'smo', 'bi'],
    answer: 'je',
    en: 'the calves are at pasture',
    tip: 'Zbirne na -ad: ženski rod jednine — telad je.',
  },
  {
    mode: 'zbirne',
    q: 'Gospoda ____ zadovoljna.',
    opts: ['su', 'je', 'ste', 'bi'],
    answer: 'su',
    en: 'the gentlemen are satisfied',
    tip: 'Gospoda su zadovoljna — kao braća.',
  },
  {
    mode: 'zbirne',
    q: 'Lišće ____ požutjelo.',
    opts: ['je', 'su', 'smo', 'bi'],
    answer: 'je',
    en: 'the leaves have turned yellow',
    tip: 'Zbirna imenica srednjega roda jednine: lišće je.',
  },
  {
    mode: 'zbirne',
    q: 'Momčad ____ pobijedila.',
    opts: ['je', 'su', 'smo', 'ste'],
    answer: 'je',
    en: 'the team has won',
    tip: 'Momčad je ž. r. jednine: momčad je pobijedila.',
  },
  {
    mode: 'zbirne',
    q: 'Uz „braća” pridjev radni završava na:',
    opts: [
      '-a (braća su došla)',
      '-i (braća su došli)',
      '-o (braća je došlo)',
      '-e (braća su došle)',
    ],
    answer: '-a (braća su došla)',
    en: 'the participle after braća ends in -a',
    tip: 'Braća, djeca, gospoda: su + -a.',
  },
  {
    mode: 'zbirne',
    q: 'Dvoja vrata ____ otvorena.',
    opts: ['su', 'je', 'ste', 'bi'],
    answer: 'su',
    en: 'two doors are open',
    tip: 'Pluralia tantum: vrata su; brojimo dvoja/troja vrata.',
  },
  {
    mode: 'vecina',
    q: 'Većina studenata ____ položila ispit.',
    opts: ['je', 'su', 'ste', 'bi'],
    answer: 'je',
    en: 'most students passed the exam',
    tip: 'Većina + G mn: glagol u jednini (većina je položila).',
  },
  {
    mode: 'vecina',
    q: 'Mnogo ljudi ____ došlo.',
    opts: ['je', 'su', 'smo', 'bi'],
    answer: 'je',
    en: 'many people came',
    tip: 'Mnogo/malo/nekoliko + G: jednina srednjega roda.',
  },
  {
    mode: 'vecina',
    q: 'Pet kuća ____ srušeno.',
    opts: ['je', 'su', 'ste', 'bi'],
    answer: 'je',
    en: 'five houses were demolished',
    tip: 'Brojevi 5+ : predikat u jednini sr. roda.',
  },
  {
    mode: 'vecina',
    q: 'Nekoliko putnika ____ na peronu. (čekati)',
    opts: ['čeka', 'čekaju', 'čekamo', 'čekali'],
    answer: 'čeka',
    en: 'several passengers are waiting on the platform',
    tip: 'Nekoliko + G mn → glagol u jednini.',
  },
  {
    mode: 'vecina',
    q: 'Dio gostiju ____ otišao.',
    opts: ['je', 'su', 'ste', 'bi'],
    answer: 'je',
    en: 'some of the guests have left',
    tip: 'Dio (jednina) upravlja sročnošću: dio je otišao.',
  },
  {
    mode: 'vecina',
    q: 'Tisuću navijača ____ stadion. (napustiti, perfekt)',
    opts: ['je napustilo', 'su napustili', 'je napustio', 'su napustile'],
    answer: 'je napustilo',
    en: 'a thousand fans left the stadium',
    tip: 'Tisuću + G mn: jednina sr. roda — je napustilo.',
  },
  {
    mode: 'vecina',
    q: 'Uz brojeve pet i više predikat stoji u:',
    opts: ['jednini srednjega roda', 'množini muškoga roda', 'množini ženskoga roda', 'dvojini'],
    answer: 'jednini srednjega roda',
    en: 'with numbers 5+ the predicate is neuter singular',
    tip: 'Pet igrača je došlo; dvadeset kuća je prodano.',
  },
  {
    mode: 'vecina',
    q: 'Dvadeset i jedan igrač ____ došao.',
    opts: ['je', 'su', 'ste', 'smo'],
    answer: 'je',
    en: 'twenty-one players came (sg!)',
    tip: 'Složeni brojevi na JEDAN: jednina — 21 igrač je došao.',
  },
  {
    mode: 'mjesovito',
    q: 'Ivan i Ana ____ stigli.',
    opts: ['su', 'je', 'ste', 'bi'],
    answer: 'su',
    en: 'Ivan and Ana have arrived',
    tip: 'Više subjekata → množina.',
  },
  {
    mode: 'mjesovito',
    q: 'Marija i Petra su ____ . (doći)',
    opts: ['došle', 'došli', 'došla', 'došlo'],
    answer: 'došle',
    en: 'Marija and Petra came',
    tip: 'Dvije ženske osobe → ženski rod množine.',
  },
  {
    mode: 'mjesovito',
    q: 'Selo i grad su ____ . (povezati)',
    opts: ['povezani', 'povezane', 'povezana', 'povezano'],
    answer: 'povezani',
    en: 'the village and the town are connected',
    tip: 'Različiti rodovi (s+m) → muški rod množine.',
  },
  {
    mode: 'mjesovito',
    q: 'More i nebo bila su ____ . (plav)',
    opts: ['plava', 'plavi', 'plave', 'plavo'],
    answer: 'plava',
    en: 'the sea and the sky were blue',
    tip: 'Dva srednja roda → srednji rod množine.',
  },
  {
    mode: 'mjesovito',
    q: 'Kad su subjekti različita roda, pridjev ide u:',
    opts: [
      'muški rod množine',
      'ženski rod množine',
      'srednji rod množine',
      'rod bližega subjekta uvijek',
    ],
    answer: 'muški rod množine',
    en: 'mixed genders take masculine plural',
    tip: 'Ivan i Ana su stigli; knjiga i pismo su stigli.',
  },
  {
    mode: 'mjesovito',
    q: 'Ti i ja ____ dogovorili.',
    opts: ['smo se', 'ste se', 'su se', 'bi se'],
    answer: 'smo se',
    en: 'you and I have agreed',
    tip: 'Prvo lice pobjeđuje: ti i ja = mi.',
  },
  {
    mode: 'mjesovito',
    q: 'Vi i vaše kolege ____ pozvani.',
    opts: ['ste', 'su', 'smo', 'je'],
    answer: 'ste',
    en: 'you and your colleagues are invited',
    tip: 'Drugo lice pobjeđuje treće: vi i oni = vi.',
  },
  {
    mode: 'mjesovito',
    q: 'Ni Ivan ni Marko ____ na sastanak. (doći, niječno)',
    opts: ['nisu došli', 'nismo došli', 'nisu došle', 'nije došlo'],
    answer: 'nisu došli',
    en: 'neither Ivan nor Marko came to the meeting',
    tip: 'Ni…ni obično s množinom: nisu došli.',
  },
];

export { DATA as SROCNOST_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SrocnostDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="srocnost"
      title={'🤝 Sročnost'}
      subtitle={'braća su došla, pet kuća je srušeno — making the sentence agree'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — sve se slaže! 🏆',
        good: 'Vrlo dobro vladanje sročnošću! 💪',
        more: 'Sročnost traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
