import React from 'react';
import ModeDrill from './ModeDrill';

// C2 correlative-conjunctions drill (C2 tranche 7, 2026-08-15): the pairs
// (ne samo...nego i, i...i, ni...ni, ili...ili, bilo...bilo, cas...cas,
// sto...to), agreement and negation rules (ni vs niti, plural with i...i,
// kamoli) and paired formulas (htio-ne htio, kad-tad, manje-vise).
const MODE_LABEL: Record<string, string> = {
  parovi: '👯 Parovi',
  slaganje: '⚖️ Slaganje',
  uporaba: '🧩 Sklopovi',
};

const DATA = [
  {
    mode: 'parovi',
    q: '„____ samo pametan, ____ i vrijedan.”',
    opts: ['Ne … nego', 'I … i', 'Ni … ni', 'Ili … ili'],
    answer: 'Ne … nego',
    en: 'not only smart but also hardworking',
    tip: 'Ne samo…nego (već) i — stupnjevana tvrdnja.',
  },
  {
    mode: 'parovi',
    q: '„____ danas, ____ sutra — svejedno mi je.”',
    opts: ['Bilo … bilo', 'Ne … nego', 'Kako … tako', 'Što … to'],
    answer: 'Bilo … bilo',
    en: 'whether today or tomorrow',
    tip: 'Bilo…bilo = ravnodušan izbor.',
  },
  {
    mode: 'parovi',
    q: '„____ jedni ____ drugi nisu došli.”',
    opts: ['Ni … ni', 'Što … to', 'Ili … ili', 'Čas … čas'],
    answer: 'Ni … ni',
    en: 'neither the ones nor the others came',
    tip: 'Ni…ni uz niječni glagol.',
  },
  {
    mode: 'parovi',
    q: '„____ se smije, ____ plače.” (izmjena)',
    opts: ['Čas … čas', 'Bilo … bilo', 'Ni … ni', 'Ne … nego'],
    answer: 'Čas … čas',
    en: 'now she laughs, now she cries',
    tip: 'Čas…čas = brza izmjena stanja.',
  },
  {
    mode: 'parovi',
    q: '„____ učiš, ____ ćeš i znati.”',
    opts: ['Kako … tako', 'Čas … čas', 'Bilo … bilo', 'Ili … ili'],
    answer: 'Kako … tako',
    en: 'as you study, so shall you know',
    tip: 'Kako…tako = razmjernost načina.',
  },
  {
    mode: 'parovi',
    q: '„____ položiš, ____ ponavljaš — odluči se!”',
    opts: ['Ili … ili', 'Ni … ni', 'I … i', 'Kako … tako'],
    answer: 'Ili … ili',
    en: 'either you pass or you repeat',
    tip: 'Ili…ili = isključiv izbor.',
  },
  {
    mode: 'parovi',
    q: '„____ roditelji ____ učitelji podupiru projekt.”',
    opts: ['I … i', 'Ni … ni', 'Što … to', 'Čas … čas'],
    answer: 'I … i',
    en: 'both parents and teachers support it',
    tip: 'I…i = zbrajanje obiju strana.',
  },
  {
    mode: 'parovi',
    q: '„____ više radiš, ____ više griješiš od umora.”',
    opts: ['Što … to', 'Kako … tako', 'Čas … čas', 'Bilo … bilo'],
    answer: 'Što … to',
    en: 'the more you work, the more you err',
    tip: 'Što + komparativ, to + komparativ.',
  },
  {
    mode: 'slaganje',
    q: 'Uz „ni…ni” glagol je:',
    opts: ['niječan (ni on ni ona NISU došli)', 'potvrdan', 'u infinitivu', 'u imperativu'],
    answer: 'niječan (ni on ni ona NISU došli)',
    en: 'the verb with ni…ni',
    tip: 'Dvostruka negacija je u hrvatskome obvezna.',
  },
  {
    mode: 'slaganje',
    q: '„Niti” prema „ni”:',
    opts: [
      'niti stoji uz glagol bez ne',
      'ni stoji uz glagol bez ne',
      'isti su uvijek',
      'niti je zastarjelo',
    ],
    answer: 'niti stoji uz glagol bez ne',
    en: 'niti vs ni',
    tip: 'Niti jede niti spava (bez ne); ni on NE jede.',
  },
  {
    mode: 'slaganje',
    q: 'Pravilno je:',
    opts: [
      'Niti pije niti puši.',
      'Niti ne pije niti ne puši.',
      'Ni pije ni puši.',
      'Niti pije ni ne puši.',
    ],
    answer: 'Niti pije niti puši.',
    en: 'he neither drinks nor smokes',
    tip: 'Niti + potvrdan glagolski oblik.',
  },
  {
    mode: 'slaganje',
    q: '„I…i” s jedninama slaže glagol u:',
    opts: ['množini (i Ivan i Marko dolaze)', 'jednini uvijek', 'srednjem rodu', 'infinitivu'],
    answer: 'množini (i Ivan i Marko dolaze)',
    en: 'the verb with i…i',
    tip: 'Zbrojeni subjekti → množina.',
  },
  {
    mode: 'slaganje',
    q: '„Ili Ivan ili Marko ____ prvi.” (doći, futur I.)',
    opts: ['će doći', 'će doći njih dvojica', 'dolaze obojica', 'došli su'],
    answer: 'će doći',
    en: 'either Ivan or Marko will come first',
    tip: 'Ili…ili: glagol prema bližem subjektu (jednina).',
  },
  {
    mode: 'slaganje',
    q: '„Ne samo da kasni, nego ____ ni ispričao.”',
    opts: ['se nije', 'je se ne', 'nije se bio bi', 'se je'],
    answer: 'se nije',
    en: 'not only late — he did not even apologize',
    tip: 'Ne samo da…, nego se nije ni ispričao.',
  },
  {
    mode: 'slaganje',
    q: '„Kamoli” u „ne zna hodati, a kamoli trčati” znači:',
    opts: ['a još manje', 'a još više', 'ali ipak', 'baš zato'],
    answer: 'a još manje',
    en: 'what kamoli means here',
    tip: 'Negacija + kamoli = a još manje.',
  },
  {
    mode: 'slaganje',
    q: '„Nekmoli” je knjiška inačica od:',
    opts: ['kamoli', 'nego', 'nikako', 'makar'],
    answer: 'kamoli',
    en: 'what nekmoli is a bookish variant of',
    tip: 'Stariji tekstovi: ne zna čitati, nekmoli pisati.',
  },
  {
    mode: 'uporaba',
    q: 'Spoji: „Uspjeh ovisi ____ o radu ____ o sreći.”',
    opts: ['i … i', 'ni … ni', 'čas … čas', 'što … to'],
    answer: 'i … i',
    en: 'success depends both on work and on luck',
    tip: 'I…i uz ponovljeni prijedlog.',
  },
  {
    mode: 'uporaba',
    q: '„Bilo kamo krenuo, prati ga sreća.” — „bilo” + upitna riječ daje:',
    opts: ['opću dopusnost (kamo god)', 'mjesto', 'vrijeme', 'uzrok'],
    answer: 'opću dopusnost (kamo god)',
    en: 'bilo + a question word',
    tip: 'Bilo tko/što/kamo = tko god/što god/kamo god.',
  },
  {
    mode: 'uporaba',
    q: '„Kako-tako” (spojeno crticom) znači:',
    opts: ['osrednje, s mukom prihvatljivo', 'izvrsno', 'nikako', 'brzo'],
    answer: 'osrednje, s mukom prihvatljivo',
    en: 'what kako-tako means',
    tip: 'Prošao je kako-tako.',
  },
  {
    mode: 'uporaba',
    q: '„Prije ____ poslije, istina izlazi na vidjelo.”',
    opts: ['ili', 'i', 'ni', 'nego'],
    answer: 'ili',
    en: 'sooner or later the truth comes out',
    tip: 'Prije ili poslije = kad-tad.',
  },
  {
    mode: 'uporaba',
    q: '„Htio-ne htio, morat ćeš.” — sklop izriče:',
    opts: ['neizbježnost bez obzira na volju', 'želju', 'zabranu', 'pitanje'],
    answer: 'neizbježnost bez obzira na volju',
    en: 'what htio-ne htio expresses',
    tip: 'Parni sklop suprotnosti: htio-ne htio.',
  },
  {
    mode: 'uporaba',
    q: '„Manje-više” znači:',
    opts: ['otprilike, uglavnom', 'nikako', 'sve', 'ništa'],
    answer: 'otprilike, uglavnom',
    en: 'what manje-više means',
    tip: 'Parna priložna sveza.',
  },
  {
    mode: 'uporaba',
    q: '„Kad-tad” znači:',
    opts: ['jednom sigurno, prije ili poslije', 'nikad', 'odmah', 'rijetko'],
    answer: 'jednom sigurno, prije ili poslije',
    en: 'what kad-tad means',
    tip: 'Kad-tad će se saznati.',
  },
  {
    mode: 'uporaba',
    q: '„Ovako ili onako, odluka pada danas.”',
    opts: ['na ovaj ili onaj način', 'nikako', 'polako', 'netočno'],
    answer: 'na ovaj ili onaj način',
    en: 'what ovako ili onako means',
    tip: 'Parna formula neizbježnosti.',
  },
];

export { DATA as PARNI_VEZNICI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ParniVezniciDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="parniveznici"
      title={'🔗 Parni veznici'}
      subtitle={'ne samo…nego i, ni…ni, čas…čas — conjunctions that hunt in pairs'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — parovi su vaši! 🏆',
        good: 'Vrlo dobro vladanje parnim veznicima! 💪',
        more: 'Parni veznici traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
