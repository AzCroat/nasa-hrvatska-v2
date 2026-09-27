import React from 'react';
import ModeDrill from './ModeDrill';

// B2 cause-and-consequence drill (B2 tranche 6, 2026-08-15): causal
// conjunctions (jer, zato sto, buduci da sentence-initially), causal
// prepositions (zbog/od/iz, zahvaljujuci + D), consequence (tako da, pa,
// stoga, toliko...da, a da + conditional) and the cause/consequence split.
const MODE_LABEL: Record<string, string> = {
  uzrok: '❓ Uzrok',
  posljedica: '➡️ Posljedica',
  razlika: '⚖️ Razlike',
};

const DATA = [
  {
    mode: 'uzrok',
    q: 'Nisam došao ____ sam bio bolestan.',
    opts: ['jer', 'tako da', 'iako', 'čim'],
    answer: 'jer',
    en: 'I did not come because I was ill',
    tip: 'Uzrok: jer + rečenica.',
  },
  {
    mode: 'uzrok',
    q: '____ je padala kiša, utakmica je odgođena.',
    opts: ['Budući da', 'Jer', 'Tako da', 'Toliko da'],
    answer: 'Budući da',
    en: 'since it was raining, the match was postponed',
    tip: 'Na početku rečenice: budući da (ne jer).',
  },
  {
    mode: 'uzrok',
    q: 'Zakasnio je ____ gužve u prometu.',
    opts: ['zbog', 'radi', 'od', 'uz'],
    answer: 'zbog',
    en: 'he was late because of the traffic',
    tip: 'Uzrok imenicom: zbog + genitiv.',
  },
  {
    mode: 'uzrok',
    q: 'Pocrvenjela je ____ srama.',
    opts: ['od', 'zbog', 'iz', 'za'],
    answer: 'od',
    en: 'she blushed with shame',
    tip: 'Neposredni fiziološki uzrok: od + G (od srama, od hladnoće).',
  },
  {
    mode: 'uzrok',
    q: 'Učinio je to ____ ljubavi.',
    opts: ['iz', 'od', 'zbog', 'po'],
    answer: 'iz',
    en: 'he did it out of love',
    tip: 'Unutarnja pobuda: iz + G (iz ljubavi, iz znatiželje).',
  },
  {
    mode: 'uzrok',
    q: '„Zato što” najčešće dolazi:',
    opts: ['iza glavne surečenice', 'na početku rečenice', 'umjesto posljedice', 'uz imperativ'],
    answer: 'iza glavne surečenice',
    en: 'zato sto follows the main clause',
    tip: 'Ostao sam kod kuće zato što pada kiša.',
  },
  {
    mode: 'uzrok',
    q: '„Zahvaljujući ____ , sve je uspjelo.” (vaša pomoć)',
    opts: ['vašoj pomoći', 'vaše pomoći', 'vašu pomoć', 'vašom pomoći'],
    answer: 'vašoj pomoći',
    en: 'thanks to your help',
    tip: 'Zahvaljujući + DATIV (samo za pozitivno!).',
  },
  {
    mode: 'uzrok',
    q: 'Za negativan uzrok umjesto „zahvaljujući” kažemo:',
    opts: ['zbog', 'radi', 'pomoću', 'unatoč'],
    answer: 'zbog',
    en: 'negative causes take zbog',
    tip: 'Zahvaljujući pobjedi, ali ZBOG ozljede.',
  },
  {
    mode: 'posljedica',
    q: 'Bio je umoran, ____ je rano legao.',
    opts: ['tako da', 'jer', 'budući da', 'iako'],
    answer: 'tako da',
    en: 'he was tired, so he went to bed early',
    tip: 'Posljedica: tako da.',
  },
  {
    mode: 'posljedica',
    q: 'Vikao je ____ glasno da su ga svi čuli.',
    opts: ['toliko', 'tako da', 'jer', 'čim'],
    answer: 'toliko',
    en: 'he shouted so loudly that everyone heard him',
    tip: 'Toliko/tako + da: mjera s posljedicom.',
  },
  {
    mode: 'posljedica',
    q: 'Snijeg je padao cijelu noć, ____ su ceste zatvorene.',
    opts: ['pa', 'jer', 'budući da', 'iako'],
    answer: 'pa',
    en: 'it snowed all night, so the roads are closed',
    tip: 'Pa uvodi posljedicu/nastavak.',
  },
  {
    mode: 'posljedica',
    q: '„Stoga” izriče:',
    opts: ['posljedicu', 'uzrok', 'dopusnost', 'vrijeme'],
    answer: 'posljedicu',
    en: 'stoga marks consequence',
    tip: 'Kasnio je; stoga je propustio početak.',
  },
  {
    mode: 'posljedica',
    q: 'Bila je ____ sretna da je zaplakala.',
    opts: ['toliko', 'tako da', 'zbog toga', 'onoliko'],
    answer: 'toliko',
    en: 'she was so happy she cried',
    tip: 'Toliko + pridjev + da.',
  },
  {
    mode: 'posljedica',
    q: 'Radi ____ da mu nitko ništa ne može prigovoriti.',
    opts: ['tako', 'toliko', 'onako', 'ovako da'],
    answer: 'tako',
    en: 'he works in such a way that no one can fault him',
    tip: 'Tako + da: način s posljedicom.',
  },
  {
    mode: 'posljedica',
    q: 'Nema smisla čekati, ____ krenimo odmah.',
    opts: ['stoga', 'jer', 'budući da', 'premda'],
    answer: 'stoga',
    en: 'no point waiting, therefore let us go now',
    tip: 'Stoga/dakle + zaključna posljedica.',
  },
  {
    mode: 'posljedica',
    q: '„Previše je skupo ____ bismo to kupili.”',
    opts: ['a da', 'tako da', 'jer', 'čim'],
    answer: 'a da',
    en: 'too expensive for us to buy',
    tip: 'Previše/pre- + a da + kondicional: posljedica nemogućnosti.',
  },
  {
    mode: 'razlika',
    q: '„Jer” i „zato što” izriču ____, a „tako da” ____ .',
    opts: ['uzrok / posljedicu', 'posljedicu / uzrok', 'vrijeme / mjesto', 'način / cilj'],
    answer: 'uzrok / posljedicu',
    en: 'cause vs consequence',
    tip: 'Uzrok objašnjava zašto; posljedica što je iz toga proizašlo.',
  },
  {
    mode: 'razlika',
    q: 'Koja rečenica izriče UZROK?',
    opts: [
      'Ostali smo doma jer je oluja.',
      'Oluja je, tako da smo ostali doma.',
      'Oluja je, pa smo ostali doma.',
      'Oluja je, stoga smo ostali doma.',
    ],
    answer: 'Ostali smo doma jer je oluja.',
    en: 'which sentence states a cause?',
    tip: 'Jer/zato što/budući da = uzrok; pa/tako da/stoga = posljedica.',
  },
  {
    mode: 'razlika',
    q: '„Zbog” i „iz” razlikuju se:',
    opts: [
      'zbog = vanjski uzrok, iz = unutarnja pobuda',
      'iz = mjesto, zbog = vrijeme',
      'značenja su ista',
      'zbog ide s dativom',
    ],
    answer: 'zbog = vanjski uzrok, iz = unutarnja pobuda',
    en: 'zbog vs iz',
    tip: 'Zbog kiše (okolnost), iz ljubavi (motiv).',
  },
  {
    mode: 'razlika',
    q: '„Od” kao uzrok tipičan je za:',
    opts: ['tjelesne i osjetilne reakcije', 'planirane radnje', 'buduće događaje', 'tuđe odluke'],
    answer: 'tjelesne i osjetilne reakcije',
    en: 'od for physical reactions',
    tip: 'Drhtati od straha, plakati od sreće, umoran od posla.',
  },
  {
    mode: 'razlika',
    q: 'Pitanje za uzrok glasi:',
    opts: ['Zašto?', 'Kamo?', 'Otkad?', 'Čime?'],
    answer: 'Zašto?',
    en: 'the question for cause is why',
    tip: 'Zašto? → jer/zato što/zbog.',
  },
  {
    mode: 'razlika',
    q: '„Kako je učio, ____ je i prošao.”',
    opts: ['tako', 'toliko', 'stoga', 'zbog toga što'],
    answer: 'tako',
    en: 'as he studied, so he passed',
    tip: 'Kako…tako: razmjerna posljedica.',
  },
  {
    mode: 'razlika',
    q: 'Birani veznik uzroka za formalne tekstove:',
    opts: ['budući da', 'pošto', 'jerbo', 'kako'],
    answer: 'budući da',
    en: 'the formal causal conjunction',
    tip: 'Pošto je vremensko; jerbo arhaično; budući da birano.',
  },
  {
    mode: 'razlika',
    q: '„Nije došao, a razlog je bolest.” — jednom rečenicom:',
    opts: [
      'Nije došao zbog bolesti.',
      'Nije došao radi bolesti.',
      'Nije došao od bolesti.',
      'Nije došao uz bolest.',
    ],
    answer: 'Nije došao zbog bolesti.',
    en: 'he did not come due to illness',
    tip: 'Uzrok imenicom: zbog + G.',
  },
];

export { DATA as UZROCNE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function UzrocneDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="uzrocne"
      title={'⚙️ Uzrok i posljedica'}
      subtitle={'jer, zbog, iz, tako da — why it happened and what followed'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — uzroci su vaši! 🏆',
        good: 'Vrlo dobro vladanje uzrokom i posljedicom! 💪',
        more: 'Uzročne i posljedične rečenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
