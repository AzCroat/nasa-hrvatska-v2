import React from 'react';
import ModeDrill from './ModeDrill';

// B2 numeral-agreement drill (B2 tranche 2, 2026-08-15): the three regimes —
// 2-4 + paucal, 5+ + genitive plural with singular predicate, and the
// collective numerals (dvoje/troje, dvojica, oboje) heritage speakers avoid.
const MODE_LABEL: Record<string, string> = {
  mali: '✌️ Dva, tri, četiri',
  veliki: '🖐️ Pet i više',
  zbirni: '👨‍👩‍👧 Zbirni brojevi',
};

const DATA = [
  {
    mode: 'mali',
    q: 'Na stolu su ____ jabuke.',
    opts: ['dvije', 'dva', 'dvoje', 'dvije komada'],
    answer: 'dvije',
    en: 'there are two apples on the table',
    tip: 'Ženski rod: DVIJE jabuke (dva uz muški i srednji).',
  },
  {
    mode: 'mali',
    q: 'U gradu postoje ____ kazališta.',
    opts: ['dva', 'dvije', 'dvoje', 'dvaju'],
    answer: 'dva',
    en: 'there are two theatres in the city',
    tip: 'Srednji rod: DVA kazališta.',
  },
  {
    mode: 'mali',
    q: 'Vidio sam ____ čovjeka kako ulaze u zgradu.',
    opts: ['dva', 'dvojicu', 'dvoje', 'dvaju'],
    answer: 'dva',
    en: 'I saw two men entering the building',
    tip: 'Uz imenicu: dva čovjeka (dvojica stoji samostalno).',
  },
  {
    mode: 'mali',
    q: 'Tri ____ čekaju pred vratima.',
    opts: ['studenta', 'studenti', 'studenata', 'studentima'],
    answer: 'studenta',
    en: 'three students are waiting at the door',
    tip: '2-4 + paukal (oblik jednak G jd.): tri studenta.',
  },
  {
    mode: 'mali',
    q: 'Četiri ____ stigle su jutros.',
    opts: ['pošiljke', 'pošiljaka', 'pošiljki', 'pošiljkama'],
    answer: 'pošiljke',
    en: 'four parcels arrived this morning',
    tip: 'Ž. rod uz 2-4: oblik množine nominativa — četiri pošiljke.',
  },
  {
    mode: 'mali',
    q: 'Kupili smo ____ nova stola.',
    opts: ['dva', 'dvije', 'dvoje', 'dvama'],
    answer: 'dva',
    en: 'we bought two new tables',
    tip: 'M. rod + paukal: dva (nova) stola.',
  },
  {
    mode: 'mali',
    q: 'Obje ____ danas su zatvorene.',
    opts: ['trgovine', 'trgovina', 'trgovinama', 'trgovinu'],
    answer: 'trgovine',
    en: 'both shops are closed today',
    tip: 'Obje + ž. rod u paukalnom obliku: obje trgovine.',
  },
  {
    mode: 'mali',
    q: 'Sva ____ prozora bila su otvorena.',
    opts: ['tri', 'trojica', 'troje', 'trima'],
    answer: 'tri',
    en: 'all three windows were open',
    tip: 'Sva tri prozora — sva + glavni broj uz imenicu.',
  },
  {
    mode: 'veliki',
    q: 'Pet ____ čeka pred uredom.',
    opts: ['studenata', 'studenti', 'studenta', 'studentima'],
    answer: 'studenata',
    en: 'five students are waiting outside the office',
    tip: '5+ traži genitiv množine: pet studenata.',
  },
  {
    mode: 'veliki',
    q: 'Na koncert je došlo ____ ljudi.',
    opts: ['tisuću', 'tisuća', 'tisućama', 'tisućom'],
    answer: 'tisuću',
    en: 'a thousand people came to the concert',
    tip: 'Došlo je tisuću ljudi — bezlični predikat + broj.',
  },
  {
    mode: 'veliki',
    q: 'Prošlo je već šest ____ od selidbe.',
    opts: ['mjeseci', 'mjeseca', 'mjesece', 'mjesecima'],
    answer: 'mjeseci',
    en: 'six months have already passed since the move',
    tip: 'Šest + G mn.: šest mjeseci.',
  },
  {
    mode: 'veliki',
    q: 'U dvorani ____ sto stolica.',
    opts: ['je bilo', 'su bile', 'bile su', 'jesu'],
    answer: 'je bilo',
    en: 'there were a hundred chairs in the hall',
    tip: '5+ u prošlosti → bezlično sr. jd.: bilo je sto stolica.',
  },
  {
    mode: 'veliki',
    q: 'Jedanaest igrača ____ na teren.',
    opts: ['izlazi', 'izlaze', 'izlazimo', 'izašli'],
    answer: 'izlazi',
    en: 'eleven players walk onto the pitch',
    tip: 'Brojevi 5+ (i 11-19) slažu se s JEDNINOM: jedanaest igrača izlazi.',
  },
  {
    mode: 'veliki',
    q: 'Dvadeset i jedna godina ____ prošla.',
    opts: ['je', 'su', 'ju je', 'smo'],
    answer: 'je',
    en: 'twenty-one years have passed',
    tip: 'Složeni broj na JEDAN → jednina: dvadeset i jedna godina JE prošla.',
  },
  {
    mode: 'veliki',
    q: 'Dvadeset dva studenta ____ ispit ovog tjedna.',
    opts: ['polažu', 'polaže', 'polažemo', 'položio je'],
    answer: 'polažu',
    en: 'twenty-two students are taking the exam this week',
    tip: 'Složeni broj na DVA-ČETIRI → paukal + množina: dvadeset dva studenta polažu.',
  },
  {
    mode: 'veliki',
    q: 'Milijun ____ nije mala svota.',
    opts: ['eura', 'eur', 'euri', 'eurima'],
    answer: 'eura',
    en: 'a million euros is not a small sum',
    tip: 'Milijun/milijarda + G mn.: milijun eura.',
  },
  {
    mode: 'zbirni',
    q: 'U parku se igralo ____ djece.',
    opts: ['petero', 'pet', 'petorica', 'peterima'],
    answer: 'petero',
    en: 'five children were playing in the park',
    tip: 'Za djecu i mješovite skupine: zbirni broj — petero djece.',
  },
  {
    mode: 'zbirni',
    q: '____ prijatelja otišla su na utakmicu. (dva muškarca)',
    opts: ['Dvojica', 'Dvoje', 'Dvije', 'Obadva'],
    answer: 'Dvojica',
    en: 'two (male) friends went to the match',
    tip: 'Brojevne imenice na -ica samo za muškarce: dvojica, trojica.',
  },
  {
    mode: 'zbirni',
    q: 'Putovali smo ____ — ja, žena i dijete.',
    opts: ['utroje', 'trojica', 'tri', 'utrostručeno'],
    answer: 'utroje',
    en: 'the three of us travelled together — me, my wife and the child',
    tip: 'Prilozi udvoje/utroje za zajedničko djelovanje.',
  },
  {
    mode: 'zbirni',
    q: '____ smo se složili — i ona i ja.',
    opts: ['Oboje', 'Obojica', 'Oba', 'Obje'],
    answer: 'Oboje',
    en: 'we both agreed — she and I',
    tip: 'Mješoviti par (m + ž) → OBOJE; obojica = dva muškarca.',
  },
  {
    mode: 'zbirni',
    q: 'Imaju ____ djece i psa.',
    opts: ['troje', 'tri', 'trojicu', 'trima'],
    answer: 'troje',
    en: 'they have three children and a dog',
    tip: 'Djeca uvijek sa zbirnim brojem: troje djece.',
  },
  {
    mode: 'zbirni',
    q: 'Nas ____ idemo zajedno na put. (mi — muškarci)',
    opts: ['dvojica', 'dvoje', 'dvije', 'obadva'],
    answer: 'dvojica',
    en: 'the two of us (men) are travelling together',
    tip: 'Nas dvojica (muška skupina) / nas dvoje (mješovita).',
  },
  {
    mode: 'zbirni',
    q: 'Njih ____ čekaju vani. (muškarac i žena)',
    opts: ['dvoje', 'dvojica', 'dvije', 'dva'],
    answer: 'dvoje',
    en: 'the two of them (a man and a woman) are waiting outside',
    tip: 'Mješoviti par: njih dvoje.',
  },
  {
    mode: 'zbirni',
    q: 'Svih ____ učenika položilo je ispit.',
    opts: ['petero', 'pet', 'petorica', 'peterima'],
    answer: 'petero',
    en: 'all five pupils passed the exam',
    tip: 'Svih petero + G mn. — zbirni broj s bezličnim predikatom.',
  },
];

export { DATA as SLAGANJEBROJEVA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SlaganjeBrojevaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="slaganjebrojeva"
      title={'🔢 Slaganje brojeva'}
      subtitle={'dva grada, pet gradova, dvoje djece — numbers rule the noun'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — brojevi vas slušaju! 🏆',
        good: 'Vrlo dobro slaganje s brojevima! 💪',
        more: 'Slaganje brojeva traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
