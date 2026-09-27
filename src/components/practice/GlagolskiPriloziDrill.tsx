import React from 'react';
import ModeDrill from './ModeDrill';

// B2 verbal-adverbs drill (B2 tranche 3, 2026-08-15): formation (3rd-pl
// present + -ci for the present adverb, infinitive stem + -vsi for the past
// adverb), the same-subject rule, simultaneity vs anteriority, and
// clause-to-adverb paraphrase.
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  uporaba: '🎯 Uporaba',
  zamjena: '🔄 Zamjena',
};

const DATA = [
  {
    mode: 'tvorba',
    q: 'Glagolski prilog sadašnji od „pjevati” glasi:',
    opts: ['pjevajući', 'pjevaći', 'pjevavši', 'pjevajuće'],
    answer: 'pjevajući',
    en: 'singing (while doing so)',
    tip: '3. l. mn. prezenta + -ći: pjevaju → pjevajući.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolski prilog sadašnji od „držati” glasi:',
    opts: ['držeći', 'držajući', 'državši', 'držući'],
    answer: 'držeći',
    en: 'holding',
    tip: 'Drže → držeći; osnova je 3. lice množine, ne infinitiv.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolski prilog prošli od „doći” glasi:',
    opts: ['došavši', 'dolazivši', 'doćivši', 'došaći'],
    answer: 'došavši',
    en: 'having arrived',
    tip: 'Infinitivna osnova + -vši: došao → došavši.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolski prilog prošli od „vidjeti” glasi:',
    opts: ['vidjevši', 'videći', 'vidjeći', 'vidjavši'],
    answer: 'vidjevši',
    en: 'having seen',
    tip: 'Vidje- + -vši; „videći” bio bi (nestandardni) prilog sadašnji.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolski prilog sadašnji od „smijati se” glasi:',
    opts: ['smijući se', 'smijajući se', 'smijavši se', 'smijeći se'],
    answer: 'smijući se',
    en: 'laughing',
    tip: 'Smiju se → smijući se; povratna zamjenica ostaje.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolski prilog prošli od „reći” glasi:',
    opts: ['rekavši', 'rečevši', 'rekući', 'rečivši'],
    answer: 'rekavši',
    en: 'having said',
    tip: 'Rekao → rekavši; osnova reka- + -vši.',
  },
  {
    mode: 'tvorba',
    q: 'Od kojih se glagola tvori glagolski prilog sadašnji?',
    opts: ['samo od nesvršenih', 'samo od svršenih', 'od svih glagola', 'samo od povratnih'],
    answer: 'samo od nesvršenih',
    en: 'only from imperfective verbs',
    tip: 'Prilog sadašnji traži nesvršeni vid: čitajući, ali ne *pročitajući.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolski prilog sadašnji od „ići” glasi:',
    opts: ['idući', 'išavši', 'ićući', 'ideći'],
    answer: 'idući',
    en: 'going / while going',
    tip: 'Idu → idući; „išavši” je prilog PROŠLI.',
  },
  {
    mode: 'uporaba',
    q: '____ novine, doručkovao je. (istodobno)',
    opts: ['Čitajući', 'Pročitavši', 'Čitavši', 'Pročitajući'],
    answer: 'Čitajući',
    en: 'reading the paper, he was having breakfast',
    tip: 'Istodobnost → prilog sadašnji (čitajući).',
  },
  {
    mode: 'uporaba',
    q: '____ posao, otišla je kući. (najprije jedno, pa drugo)',
    opts: ['Završivši', 'Završavajući', 'Završujući', 'Završaviši'],
    answer: 'Završivši',
    en: 'having finished work, she went home',
    tip: 'Prethodnost → prilog prošli (završivši).',
  },
  {
    mode: 'uporaba',
    q: 'Koja je rečenica pravilna?',
    opts: [
      'Šetajući parkom, vidio sam psa.',
      'Šetajući parkom, pas me ugrizao.',
      'Šetajući parkom, kiša je padala.',
      'Šetajući parkom, zvonio je mobitel.',
    ],
    answer: 'Šetajući parkom, vidio sam psa.',
    en: 'walking in the park, I saw a dog',
    tip: 'Prilog se odnosi na SUBJEKT rečenice — šetao sam ja, a ne pas.',
  },
  {
    mode: 'uporaba',
    q: '____ da je kasno, požurili smo.',
    opts: ['Vidjevši', 'Videći', 'Gledavši', 'Vidjeći'],
    answer: 'Vidjevši',
    en: 'having seen it was late, we hurried',
    tip: 'Uvid prethodi žurbi → prilog prošli: vidjevši.',
  },
  {
    mode: 'uporaba',
    q: 'Glagolski prilog sadašnji izriče radnju koja se događa:',
    opts: [
      'istodobno s glavnom radnjom',
      'prije glavne radnje',
      'poslije glavne radnje',
      'samo u budućnosti',
    ],
    answer: 'istodobno s glavnom radnjom',
    en: 'simultaneously with the main action',
    tip: 'Sadašnji = istodobnost; prošli = prethodnost.',
  },
  {
    mode: 'uporaba',
    q: 'Odgovorio je ne ____ ni trenutka.',
    opts: ['oklijevajući', 'oklijevavši', 'oklijevati', 'oklijevao'],
    answer: 'oklijevajući',
    en: 'he answered without hesitating a moment',
    tip: 'Ne + prilog sadašnji: ne oklijevajući.',
  },
  {
    mode: 'uporaba',
    q: '____ sve troškove, odustali smo od puta.',
    opts: ['Izračunavši', 'Izračunavajući', 'Računavši', 'Izračunaviši'],
    answer: 'Izračunavši',
    en: 'having calculated all the costs, we gave up on the trip',
    tip: 'Svršena prethodna radnja → izračunavši.',
  },
  {
    mode: 'uporaba',
    q: 'Glagolski prilog prošli izriče radnju koja se dogodila:',
    opts: [
      'prije glavne radnje',
      'istodobno s glavnom radnjom',
      'poslije glavne radnje',
      'samo u sadašnjosti',
    ],
    answer: 'prije glavne radnje',
    en: 'before the main action',
    tip: 'Prošli prilog = prethodnost: pročitavši pismo, spalio ga je.',
  },
  {
    mode: 'zamjena',
    q: '„Dok je hodala kući, srela je susjedu.” = „____ kući, srela je susjedu.”',
    opts: ['Hodajući', 'Hodavši', 'Došavši', 'Hodaći'],
    answer: 'Hodajući',
    en: 'while walking home, she met her neighbour',
    tip: 'Dok + istodobnost → prilog sadašnji.',
  },
  {
    mode: 'zamjena',
    q: '„Nakon što je pročitao pismo, spalio ga je.” = „____ pismo, spalio ga je.”',
    opts: ['Pročitavši', 'Čitajući', 'Pročitajući', 'Čitavši'],
    answer: 'Pročitavši',
    en: 'having read the letter, he burned it',
    tip: 'Nakon što + svršena radnja → prilog prošli.',
  },
  {
    mode: 'zamjena',
    q: '„Budući da nije znao odgovor, šutio je.” = „Ne ____ odgovor, šutio je.”',
    opts: ['znajući', 'znavši', 'znati', 'znadući'],
    answer: 'znajući',
    en: 'not knowing the answer, he stayed silent',
    tip: 'Uzročna nijansa: ne znajući (istodobno stanje).',
  },
  {
    mode: 'zamjena',
    q: '„Kad je čula vijest, briznula je u plač.” = „____ vijest, briznula je u plač.”',
    opts: ['Čuvši', 'Čujući', 'Slušajući', 'Čuvavši'],
    answer: 'Čuvši',
    en: 'on hearing the news, she burst into tears',
    tip: 'Čuti je svršen: čuvši (prilog prošli).',
  },
  {
    mode: 'zamjena',
    q: '„Dok se vraćao s posla, kupio je kruh.” = „____ s posla, kupio je kruh.”',
    opts: ['Vraćajući se', 'Vrativši se', 'Vraćavši se', 'Vratijući se'],
    answer: 'Vraćajući se',
    en: 'on his way back from work, he bought bread',
    tip: 'Istodobnost i nesvršeni vid → vraćajući se.',
  },
  {
    mode: 'zamjena',
    q: '„Nakon što se oprostio, izašao je.” = „____, izašao je.”',
    opts: ['Oprostivši se', 'Opraštajući se', 'Oprostijući se', 'Oprostavši se'],
    answer: 'Oprostivši se',
    en: 'having said goodbye, he left',
    tip: 'Svršeni oproštaj prethodi izlasku → oprostivši se.',
  },
  {
    mode: 'zamjena',
    q: '„Dok radi, sluša glazbu.” = „Sluša glazbu ____.”',
    opts: ['radeći', 'radivši', 'raditi', 'radijući'],
    answer: 'radeći',
    en: 'he listens to music while working',
    tip: 'Rade → radeći; prilog može stajati i iza glagola.',
  },
  {
    mode: 'zamjena',
    q: '„Nakon što su potpisali ugovor, nazdravili su.” = „____ ugovor, nazdravili su.”',
    opts: ['Potpisavši', 'Potpisujući', 'Potpisivajući', 'Potpisaviši'],
    answer: 'Potpisavši',
    en: 'having signed the contract, they raised a toast',
    tip: 'Potpisati (svršeni) → potpisavši.',
  },
];

export { DATA as GLAGOLSKI_PRILOZI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GlagolskiPriloziDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="glagolskiprilozi"
      title={'🌿 Glagolski prilozi'}
      subtitle={'čitajući i pročitavši — doing and having done'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — prilozi su vaši! 🏆',
        good: 'Vrlo dobro vladanje glagolskim prilozima! 💪',
        more: 'Glagolski prilozi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
