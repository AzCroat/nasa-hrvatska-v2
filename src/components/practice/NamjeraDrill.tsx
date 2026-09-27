import React from 'react';
import ModeDrill from './ModeDrill';

// C1 purpose-clauses drill (C1 tranche 4, 2026-08-15): da + perfective
// present (same subject), kako bi + conditional (different subjects, formal
// register, ne bi li), and radi vs zbog — the purpose/cause preposition trap.
const MODE_LABEL: Record<string, string> = {
  daprezent: '🎯 Da + prezent',
  kakobi: '🏛️ Kako bi',
  radi: '⚖️ Radi ili zbog',
};

const DATA = [
  {
    mode: 'daprezent',
    q: 'Došao sam ____ ti pomognem.',
    opts: ['da', 'kako', 'jer', 'čim'],
    answer: 'da',
    en: 'I came to help you',
    tip: 'Namjera uz isti subjekt: da + prezent.',
  },
  {
    mode: 'daprezent',
    q: 'Učim hrvatski ____ razgovaram s bakom.',
    opts: ['da', 'jer', 'iako', 'dok'],
    answer: 'da',
    en: 'I am learning Croatian to talk with my grandmother',
    tip: 'Namjerna rečenica: da + prezent.',
  },
  {
    mode: 'daprezent',
    q: 'Idem u trgovinu ____ kupim kruh.',
    opts: ['da', 'zbog', 'radi', 'pa'],
    answer: 'da',
    en: 'I am going to the shop to buy bread',
    tip: 'Uz glagole kretanja: da + svršeni prezent.',
  },
  {
    mode: 'daprezent',
    q: 'Svratio je da ____ novine. (kupiti/kupovati — jednokratno)',
    opts: ['kupi', 'kupuje', 'kupovao', 'kupit'],
    answer: 'kupi',
    en: 'he dropped in to buy a paper',
    tip: 'Jednokratni cilj traži SVRŠENI prezent: da kupi.',
  },
  {
    mode: 'daprezent',
    q: 'Požuri da ne ____ vlak.',
    opts: ['propustiš', 'propuštaš', 'propustio', 'propustit ćeš'],
    answer: 'propustiš',
    en: 'hurry so you do not miss the train',
    tip: 'Niječna namjera: da ne + svršeni prezent.',
  },
  {
    mode: 'daprezent',
    q: 'Uz glagole kretanja namjeru može izreći i:',
    opts: ['infinitiv (došao sam pomoći)', 'perfekt', 'imperativ', 'aorist'],
    answer: 'infinitiv (došao sam pomoći)',
    en: 'the infinitive can express purpose after motion verbs',
    tip: 'Došao sam pomoći ti = došao sam da ti pomognem.',
  },
  {
    mode: 'daprezent',
    q: 'Zovem te da ti ____ novost.',
    opts: ['javim', 'javljam', 'javio', 'javit'],
    answer: 'javim',
    en: 'I am calling to tell you the news',
    tip: 'Svršeni prezent za jednokratnu namjeru.',
  },
  {
    mode: 'daprezent',
    q: 'Za jednokratni cilj „da + prezent” traži koji vid?',
    opts: ['svršeni', 'nesvršeni', 'oba podjednako', 'nijedan'],
    answer: 'svršeni',
    en: 'perfective aspect for a single goal',
    tip: 'Da kupim, da javim, da pomognem — svršeno.',
  },
  {
    mode: 'kakobi',
    q: 'Štedi ____ kupio stan.',
    opts: ['kako bi', 'da će', 'jer bi', 'čim bi'],
    answer: 'kako bi',
    en: 'he is saving in order to buy a flat',
    tip: 'Birani stil: kako bi + pridjev radni.',
  },
  {
    mode: 'kakobi',
    q: 'Govorio je tiho kako ga nitko ne ____ čuo.',
    opts: ['bi', 'će', 'je', 'bude'],
    answer: 'bi',
    en: 'he spoke softly so that no one would hear him',
    tip: 'Kako ne bi čuo — kondicional u namjernoj.',
  },
  {
    mode: 'kakobi',
    q: '„Kako bi + kondicional” najčešće biramo kad:',
    opts: [
      'su subjekti različiti ili je stil biran',
      'je rečenica upitna',
      'želimo izreći uzrok',
      'je radnja u prošlosti',
    ],
    answer: 'su subjekti različiti ili je stil biran',
    en: 'when subjects differ or in formal style',
    tip: 'Da + prezent (isti subjekt) vs kako bi (različiti/formalno).',
  },
  {
    mode: 'kakobi',
    q: 'Sve smo pripremili ____ sastanak prošao glatko.',
    opts: ['kako bi', 'da će', 'jer je', 'iako bi'],
    answer: 'kako bi',
    en: 'we prepared everything so the meeting would go smoothly',
    tip: 'Različiti subjekti → kako bi.',
  },
  {
    mode: 'kakobi',
    q: 'Kako bi se izbjegle gužve, ____ ranije. (poći, vi)',
    opts: ['pođite', 'pođete', 'pošli', 'poći'],
    answer: 'pođite',
    en: 'to avoid crowds, leave earlier',
    tip: 'Glavna surečenica može biti imperativ.',
  },
  {
    mode: 'kakobi',
    q: 'Zatvorio je prozor ____ buka ne bi smetala.',
    opts: ['kako', 'da bi', 'jer', 'čim'],
    answer: 'kako',
    en: 'he closed the window so the noise would not disturb',
    tip: 'Kako + ne bi: kako buka ne bi smetala.',
  },
  {
    mode: 'kakobi',
    q: 'Trudili su se ____ uspjeli. (birano, s nadom)',
    opts: ['ne bi li', 'kako će', 'da su', 'jer bi'],
    answer: 'ne bi li',
    en: 'they strove in hopes of succeeding',
    tip: 'Ne bi li + pridjev radni — birana namjera s nadom.',
  },
  {
    mode: 'kakobi',
    q: 'Koji veznik izriče NAMJERU?',
    opts: ['kako bi', 'jer', 'iako', 'čim'],
    answer: 'kako bi',
    en: 'which conjunction expresses purpose?',
    tip: 'Jer = uzrok, iako = dopusnost, čim = vrijeme; namjera = kako bi/da.',
  },
  {
    mode: 'radi',
    q: 'Prijedlog koji izriče NAMJERU (a ne uzrok) jest:',
    opts: ['radi', 'zbog', 'od', 'iz'],
    answer: 'radi',
    en: 'the preposition of purpose is radi',
    tip: 'Radi = namjera, zbog = uzrok.',
  },
  {
    mode: 'radi',
    q: 'Došao je ____ dogovora.',
    opts: ['radi', 'zbog', 'od', 'uz'],
    answer: 'radi',
    en: 'he came for the purpose of an agreement',
    tip: 'Cilj dolaska → radi + genitiv.',
  },
  {
    mode: 'radi',
    q: 'Zakasnio je ____ gužve.',
    opts: ['zbog', 'radi', 'od', 'iz'],
    answer: 'zbog',
    en: 'he was late because of the traffic',
    tip: 'Gužva je UZROK → zbog.',
  },
  {
    mode: 'radi',
    q: 'Prijedlog „zbog” izriče:',
    opts: ['uzrok', 'namjeru', 'vrijeme', 'mjesto'],
    answer: 'uzrok',
    en: 'zbog expresses cause',
    tip: 'Zbog kiše (uzrok) vs radi dogovora (cilj).',
  },
  {
    mode: 'radi',
    q: 'Otputovala je u Zagreb ____ studija.',
    opts: ['radi', 'zbog', 'od', 'kroz'],
    answer: 'radi',
    en: 'she moved to Zagreb for her studies',
    tip: 'Svrha puta → radi studija.',
  },
  {
    mode: 'radi',
    q: '____ zdravlja prestao je pušiti.',
    opts: ['Radi', 'Zbog', 'Od', 'Iz'],
    answer: 'Radi',
    en: 'he quit smoking for the sake of his health',
    tip: 'Cilj (očuvati zdravlje) → radi.',
  },
  {
    mode: 'radi',
    q: '„Radi kiše nismo išli van” pogrešno je jer:',
    opts: [
      'kiša je uzrok, pa ide zbog',
      'kiša je namjera',
      'radi ne ide s genitivom',
      'rečenica je upitna',
    ],
    answer: 'kiša je uzrok, pa ide zbog',
    en: 'why radi kise is wrong',
    tip: 'Najčešća zamjena: uzrok traži zbog, ne radi.',
  },
  {
    mode: 'radi',
    q: 'Namjeru u administrativnom stilu izriče i:',
    opts: ['s ciljem + genitiv', 's obzirom + dativ', 'unatoč + genitiv', 'pomoću + akuzativ'],
    answer: 's ciljem + genitiv',
    en: 'with the aim of + genitive',
    tip: 'S ciljem poboljšanja usluge… — formalna namjera.',
  },
];

export { DATA as NAMJERA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NamjeraDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="namjera"
      title={'🎯 Izricanje namjere'}
      subtitle={'da kupim, kako bih stigao, radi dogovora — saying why you do it'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — cilj pogođen! 🏆',
        good: 'Vrlo dobro izricanje namjere! 💪',
        more: 'Izricanje namjere traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
