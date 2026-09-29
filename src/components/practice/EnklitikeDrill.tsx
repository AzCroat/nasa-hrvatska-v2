import React from 'react';
import ModeDrill from './ModeDrill';

// C2 clitic-cluster drill (C2 tranche 4, 2026-08-15): order inside the
// cluster (li > verbal aux > dative > accusative > se > je; se absorbs je),
// second-position placement (no sentence-initial clitics, no leaning on
// i/a, parenthetical commas block attachment) and clusters after
// subordinators.
const MODE_LABEL: Record<string, string> = {
  poredak: '⛓️ Poredak',
  polozaj: '📍 Položaj',
  slozeni: '🧩 U zavisnima',
};

const DATA = [
  {
    mode: 'poredak',
    q: 'Dao ____ jučer. (je + mi + ga)',
    opts: ['mi ga je', 'je mi ga', 'ga mi je', 'mi je ga'],
    answer: 'mi ga je',
    en: 'he gave it to me yesterday',
    tip: 'Poredak: dativ → akuzativ → JE na kraju (mi ga je).',
  },
  {
    mode: 'poredak',
    q: 'Sjećam ____ često. (se + ga)',
    opts: ['ga se', 'se ga', 'se njega', 'njega se ga'],
    answer: 'ga se',
    en: 'I often remember him',
    tip: 'Zamjenica prije se: sjećam GA SE.',
  },
  {
    mode: 'poredak',
    q: 'Predstavila ____ jučer. (je + mu + ih)',
    opts: ['mu ih je', 'je mu ih', 'ih mu je', 'mu je ih'],
    answer: 'mu ih je',
    en: 'she introduced them to him yesterday',
    tip: 'Dativ (mu) → akuzativ (ih) → je.',
  },
  {
    mode: 'poredak',
    q: 'Bojiš ____ ? (li + se + ga)',
    opts: ['li ga se', 'li se ga', 'se li ga', 'ga li se'],
    answer: 'li ga se',
    en: 'are you afraid of him?',
    tip: 'LI je prva enklitika; zamjenica prije se.',
  },
  {
    mode: 'poredak',
    q: 'Smijali ____ cijelu večer. (smo + se + mu)',
    opts: ['smo mu se', 'smo se mu', 'mu smo se', 'se smo mu'],
    answer: 'smo mu se',
    en: 'we laughed at him all evening',
    tip: 'Glagolska (smo) → dativ (mu) → se.',
  },
  {
    mode: 'poredak',
    q: 'Ona ____ vratila. (povratni glagol, 3. jd. perfekta)',
    opts: ['se', 'sam se', 'je se', 'si se'],
    answer: 'se',
    en: 'she came back',
    tip: 'Uz se se je ispušta: vratila se (oblik „vratila se je” razgovoran je i regionalan).',
  },
  {
    mode: 'poredak',
    q: 'Rekla ____ istinu. (vam + bi)',
    opts: ['bi vam', 'vam bi', 'bi vas', 'vam se bi'],
    answer: 'bi vam',
    en: 'she would tell you the truth',
    tip: 'Glagolska enklitika (bi) prije zamjeničke (vam).',
  },
  {
    mode: 'poredak',
    q: 'Hoćeš ____ pokazati? (mi + ga + li)',
    opts: ['li mi ga', 'li ga mi', 'mi li ga', 'ga mi li'],
    answer: 'li mi ga',
    en: 'will you show it to me?',
    tip: 'Li → dativ → akuzativ: hoćeš li mi ga pokazati.',
  },
  {
    mode: 'polozaj',
    q: 'Enklitike u rečenici stoje:',
    opts: [
      'na drugome mjestu, iza prve naglašene riječi',
      'uvijek na početku',
      'uvijek na kraju',
      'bilo gdje',
    ],
    answer: 'na drugome mjestu, iza prve naglašene riječi',
    en: 'where do clitics stand?',
    tip: 'Wackernagelovo pravilo: enklitika se naslanja na prvu naglašenu riječ.',
  },
  {
    mode: 'polozaj',
    q: 'Birani stil — koja je rečenica najbolja?',
    opts: [
      'Moja je sestra jučer stigla.',
      'Je moja sestra jučer stigla.',
      'Moja sestra jučer stigla je.',
      'Moja sestra jučer je bila stigla.',
    ],
    answer: 'Moja je sestra jučer stigla.',
    en: 'which sentence is best in careful style?',
    tip: 'Birano: enklitika iza PRVE riječi (Moja JE sestra…).',
  },
  {
    mode: 'polozaj',
    q: 'Enklitika ne smije stajati:',
    opts: ['na početku rečenice', 'iza glagola', 'iza veznika da', 'na drugome mjestu'],
    answer: 'na početku rečenice',
    en: 'where can a clitic never stand?',
    tip: '*Mi se čini → Čini mi se.',
  },
  {
    mode: 'polozaj',
    q: 'Jučer ____ ga vidio u gradu.',
    opts: ['sam', 'sam ja', 'je', 'se'],
    answer: 'sam',
    en: 'yesterday I saw him in town',
    tip: 'Prilog otvara rečenicu, enklitike odmah iza: Jučer sam ga…',
  },
  {
    mode: 'polozaj',
    q: 'Umetnuta surečenica — koja je rečenica pravilna?',
    opts: [
      'Moj brat, koji živi u Splitu, došao je jučer.',
      'Moj brat, koji živi u Splitu, je došao jučer.',
      'Moj brat koji živi u Splitu je, došao jučer.',
      'Moj brat, je koji živi u Splitu, došao jučer.',
    ],
    answer: 'Moj brat, koji živi u Splitu, došao je jučer.',
    en: 'which sentence with an inserted clause is correct?',
    tip: 'Iza zareza enklitika ne može: umetak traži došao JE.',
  },
  {
    mode: 'polozaj',
    q: 'U pitanju „li” dolazi:',
    opts: ['odmah iza glagola', 'na početak rečenice', 'na kraj rečenice', 'iza subjekta'],
    answer: 'odmah iza glagola',
    en: 'where does li go in a question?',
    tip: 'Dolaziš li? Znate li? — glagol + li.',
  },
  {
    mode: 'polozaj',
    q: 'Kako pravilno počinje rečenica?',
    opts: [
      'Čini mi se da je kasno.',
      'Mi se čini da je kasno.',
      'Se čini mi da je kasno.',
      'Je mi se čini da kasno.',
    ],
    answer: 'Čini mi se da je kasno.',
    en: 'it seems to me it is late',
    tip: 'Glagol otvara, enklitike druge: Čini mi se…',
  },
  {
    mode: 'polozaj',
    q: 'Iza veznika „i” — koja je rečenica pravilna?',
    opts: [
      'I rekao mu je istinu.',
      'I je mu rekao istinu.',
      'I mu je rekao istinu.',
      'I je rekao mu istinu.',
    ],
    answer: 'I rekao mu je istinu.',
    en: 'and he told him the truth',
    tip: 'Enklitika se ne naslanja na veznik i/a — treba naglašena riječ.',
  },
  {
    mode: 'slozeni',
    q: 'U zavisnoj surečenici enklitike dolaze:',
    opts: ['odmah iza veznika', 'na kraj surečenice', 'ispred veznika', 'bilo gdje'],
    answer: 'odmah iza veznika',
    en: 'where do clitics go in a subordinate clause?',
    tip: '…jer MI JE rekao; …da SAM GA vidio.',
  },
  {
    mode: 'slozeni',
    q: 'Mislim da ____ vidio. (ga + sam)',
    opts: ['sam ga', 'ga sam', 'sam njega ga', 'ga se sam'],
    answer: 'sam ga',
    en: 'I think that I saw him',
    tip: 'Da + glagolska (sam) + zamjenička (ga).',
  },
  {
    mode: 'slozeni',
    q: 'Pitala je hoćemo ____ doći.',
    opts: ['li', 'mi li', 'da', 'se'],
    answer: 'li',
    en: 'she asked whether we would come',
    tip: 'Neizravno pitanje: hoćemo LI doći.',
  },
  {
    mode: 'slozeni',
    q: 'Čovjek koji ____ jučer pomogao zove se Marko. (je + mi)',
    opts: ['mi je', 'je mi', 'mi ga je', 'je'],
    answer: 'mi je',
    en: 'the man who helped me yesterday is called Marko',
    tip: 'Koji + dativ (mi) + je.',
  },
  {
    mode: 'slozeni',
    q: 'Kad ____ vidjeli, pozdravili su nas.',
    opts: ['su nas', 'nas su', 'su se nas', 'nas se su'],
    answer: 'su nas',
    en: 'when they saw us, they greeted us',
    tip: 'Veznik kad + glagolska (su) + akuzativ (nas).',
  },
  {
    mode: 'slozeni',
    q: 'Rekla je da ____ vratiti sutra. (se + će)',
    opts: ['će se', 'se će', 'će je se', 'se hoće'],
    answer: 'će se',
    en: 'she said she would come back tomorrow',
    tip: 'Da + će + se: da će se vratiti.',
  },
  {
    mode: 'slozeni',
    q: 'Ako ____ vidiš, javi mi.',
    opts: ['ga', 'on', 'mu', 'se'],
    answer: 'ga',
    en: 'if you see him, let me know',
    tip: 'Ako + enklitika odmah: ako ga vidiš.',
  },
  {
    mode: 'slozeni',
    q: 'Nadam se da ____ svidjeti. (se + ti + će)',
    opts: ['će ti se', 'ti će se', 'će se ti', 'se će ti'],
    answer: 'će ti se',
    en: 'I hope you will like it',
    tip: 'Će (glagolska) → ti (dativ) → se: da će ti se svidjeti.',
  },
];

export { DATA as ENKLITIKE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function EnklitikeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="enklitike"
      title={'⛓️ Red enklitika'}
      subtitle={'mi ga je, li ga se — the untouchable word chain'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — enklitike su vaše! 🏆',
        good: 'Vrlo dobro vladanje enklitikama! 💪',
        more: 'Red enklitika traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
