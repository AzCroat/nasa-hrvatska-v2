import React from 'react';
import ModeDrill from './ModeDrill';

// B2 irregular-plurals drill (B2 tranche 5, 2026-08-15): suppletive and
// collective plurals (ljudi, oci, djeca, braca), long vs short masculine
// plurals (gradovi/kljucevi but konji, dani), and the special genitive
// plurals (gostiju, noktiju, ruku, sestara).
const MODE_LABEL: Record<string, string> = {
  oblici: '🔀 Posebni oblici',
  dugamn: '📏 Duga i kratka',
  genmn: '🧮 Genitiv množine',
};

const DATA = [
  {
    mode: 'oblici',
    q: 'Množina imenice „čovjek” glasi:',
    opts: ['ljudi', 'čovjeci', 'čovjekovi', 'čovječi'],
    answer: 'ljudi',
    en: 'person → people',
    tip: 'Supletivna množina: čovjek → ljudi.',
  },
  {
    mode: 'oblici',
    q: 'Množina imenice „oko” glasi:',
    opts: ['oči', 'oka', 'okovi', 'očevi'],
    answer: 'oči',
    en: 'eye → eyes',
    tip: 'Oko → oči (ž. r. u množini!).',
  },
  {
    mode: 'oblici',
    q: 'Množina imenice „uho” glasi:',
    opts: ['uši', 'uha', 'uhovi', 'ušesa'],
    answer: 'uši',
    en: 'ear → ears',
    tip: 'Uho → uši — kao oko/oči.',
  },
  {
    mode: 'oblici',
    q: 'Množina imenice „dijete” glasi:',
    opts: ['djeca', 'dijeta', 'djetetovi', 'djetići'],
    answer: 'djeca',
    en: 'child → children',
    tip: 'Zbirno djeca preuzima ulogu množine.',
  },
  {
    mode: 'oblici',
    q: 'Množina imenice „brat” glasi:',
    opts: ['braća', 'brati', 'bratovi', 'braćani'],
    answer: 'braća',
    en: 'brother → brothers',
    tip: 'Zbirno braća; sročnost: braća su.',
  },
  {
    mode: 'oblici',
    q: 'Množina imenice „gospodin” glasi:',
    opts: ['gospoda', 'gospodini', 'gospodinovi', 'gospodari'],
    answer: 'gospoda',
    en: 'gentleman → gentlemen',
    tip: 'Gospodin → gospoda (zbirna množina).',
  },
  {
    mode: 'oblici',
    q: 'Množina imenice „tele” glasi:',
    opts: ['telad', 'teleta', 'telovi', 'teloci'],
    answer: 'telad',
    en: 'calf → calves',
    tip: 'Mlado: tele → telad (ili teoci).',
  },
  {
    mode: 'oblici',
    q: 'Množina imenice „gost” glasi:',
    opts: ['gosti', 'gostovi', 'goste', 'gošće'],
    answer: 'gosti',
    en: 'guest → guests',
    tip: 'Kratka množina: gosti (ne gostovi).',
  },
  {
    mode: 'dugamn',
    q: 'Množina imenice „grad” glasi:',
    opts: ['gradovi', 'gradi', 'građani', 'grade'],
    answer: 'gradovi',
    en: 'city → cities',
    tip: 'Jednosložne m. imenice: duga množina -ovi.',
  },
  {
    mode: 'dugamn',
    q: 'Množina imenice „ključ” glasi:',
    opts: ['ključevi', 'ključovi', 'ključi', 'ključe'],
    answer: 'ključevi',
    en: 'key → keys',
    tip: 'Iza nepčanika -EVI: ključevi, miševi.',
  },
  {
    mode: 'dugamn',
    q: 'Množina imenice „nož” glasi:',
    opts: ['noževi', 'nožovi', 'noži', 'nožice'],
    answer: 'noževi',
    en: 'knife → knives',
    tip: 'Ž je nepčanik → -evi: noževi.',
  },
  {
    mode: 'dugamn',
    q: 'Množina imenice „konj” glasi:',
    opts: ['konji', 'konjevi', 'konjovi', 'konjići'],
    answer: 'konji',
    en: 'horse → horses',
    tip: 'Iznimka: konj ima KRATKU množinu (konji).',
  },
  {
    mode: 'dugamn',
    q: 'Množina imenice „dan” glasi:',
    opts: ['dani', 'danovi', 'dnevi', 'dnovi'],
    answer: 'dani',
    en: 'day → days',
    tip: 'Kratka množina: dani.',
  },
  {
    mode: 'dugamn',
    q: 'Množina imenice „put” (cesta) glasi:',
    opts: ['putovi', 'puti', 'putevi svi', 'putnici'],
    answer: 'putovi',
    en: 'road → roads',
    tip: 'Standard: putovi (putevi je razgovorno).',
  },
  {
    mode: 'dugamn',
    q: 'Duga množina (-ovi/-evi) tipična je za:',
    opts: [
      'jednosložne imenice muškoga roda',
      'sve imenice ženskoga roda',
      'imenice srednjega roda',
      'posuđenice',
    ],
    answer: 'jednosložne imenice muškoga roda',
    en: 'long plurals mark short masculine nouns',
    tip: 'Grad → gradovi, ali prozor → prozori (višesložna).',
  },
  {
    mode: 'dugamn',
    q: 'Množina imenice „sin” glasi:',
    opts: ['sinovi', 'sini', 'sinci', 'sinovci'],
    answer: 'sinovi',
    en: 'son → sons',
    tip: 'Sin → sinovi (duga množina).',
  },
  {
    mode: 'genmn',
    q: 'Genitiv množine imenice „gost” glasi:',
    opts: ['gostiju', 'gosta', 'gostova', 'gosti'],
    answer: 'gostiju',
    en: 'of the guests',
    tip: 'Posebni G mn.: gostiju (kao noktiju, kostiju).',
  },
  {
    mode: 'genmn',
    q: 'Genitiv množine imenice „nokat” glasi:',
    opts: ['noktiju', 'nokata', 'noktova', 'nokta'],
    answer: 'noktiju',
    en: 'of the nails',
    tip: 'Nokat → noktiju; i „nokata” se dopušta, -iju je birano.',
  },
  {
    mode: 'genmn',
    q: 'Genitiv množine imenice „ruka” glasi:',
    opts: ['ruku', 'ruka', 'rukiju', 'rukova'],
    answer: 'ruku',
    en: 'of the hands',
    tip: 'Ruka → ruku (bez nastavka -a).',
  },
  {
    mode: 'genmn',
    q: 'Genitiv množine imenice „noga” glasi:',
    opts: ['nogu', 'noga', 'nogiju', 'nogova'],
    answer: 'nogu',
    en: 'of the legs',
    tip: 'Noga → nogu (kao ruka → ruku).',
  },
  {
    mode: 'genmn',
    q: 'Genitiv množine imenice „oko” (oči) glasi:',
    opts: ['očiju', 'oči', 'okova', 'oka'],
    answer: 'očiju',
    en: 'of the eyes',
    tip: 'Oči → očiju; uši → ušiju.',
  },
  {
    mode: 'genmn',
    q: 'Genitiv množine imenice „sestra” glasi:',
    opts: ['sestara', 'sestri', 'sestrova', 'sester'],
    answer: 'sestara',
    en: 'of the sisters',
    tip: 'Nepostojano a razbija skup: sestara.',
  },
  {
    mode: 'genmn',
    q: 'Genitiv množine imenice „pismo” glasi:',
    opts: ['pisama', 'pisma', 'pismova', 'pisem'],
    answer: 'pisama',
    en: 'of the letters',
    tip: 'Umetnuto a: pisama (kao sestara, dobara).',
  },
  {
    mode: 'genmn',
    q: 'Genitiv množine imenice „stvar” glasi:',
    opts: ['stvari', 'stvariju', 'stvara', 'stvarova'],
    answer: 'stvari',
    en: 'of the things',
    tip: 'I-sklonidba: G mn. = stvari (kao riječi, noći).',
  },
];

export { DATA as MNOZINA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function MnozinaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="mnozina"
      title={'👥 Nepravilna množina'}
      subtitle={'ljudi, oči, gostiju — plurals that refuse the pattern'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — množina je vaša! 🏆',
        good: 'Vrlo dobro vladanje množinom! 💪',
        more: 'Nepravilna množina traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
