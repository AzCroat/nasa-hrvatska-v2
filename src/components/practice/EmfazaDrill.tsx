import React from 'react';
import ModeDrill from './ModeDrill';

// C1 word-order & emphasis drill (C1 tranche, 2026-08-14): information
// structure — the neutral SVO-with-second-position-clitics baseline, fronting
// for topic/contrast, focus-to-the-end in answers, emphatic constructions,
// and clitic-cluster ordering in complex sentences.
const MODE_LABEL: Record<string, string> = {
  tema: '📌 Tema i red',
  fokus: '💥 Isticanje',
  stil: '🧩 Zanaglasnice',
};

const DATA = [
  {
    mode: 'tema',
    q: 'Neutralni (neobilježeni) red riječi:',
    opts: [
      'Marko je jučer kupio auto.',
      'Jučer je Marko kupio auto.',
      'Auto je Marko kupio jučer.',
      'Kupio je Marko jučer auto.',
    ],
    answer: 'Marko je jučer kupio auto.',
    en: 'the neutral word order',
    tip: 'Neutralno: subjekt na početku, zanaglasnica (je) na drugom mjestu.',
  },
  {
    mode: 'tema',
    q: 'Želimo istaknuti VRIJEME: „____ je Marko kupio auto.”',
    opts: ['Jučer', 'Auto', 'Marko', 'Kupio'],
    answer: 'Jučer',
    en: 'fronting the time expression for emphasis',
    tip: 'Ono što ističemo dolazi na početak rečenice.',
  },
  {
    mode: 'tema',
    q: '„Knjigu sam ti već vratila.” — na početku je istaknut:',
    opts: ['objekt', 'subjekt', 'prilog', 'glagol'],
    answer: 'objekt',
    en: 'what is fronted in this sentence',
    tip: 'Objekt (knjigu) na prvome mjestu — tematizacija.',
  },
  {
    mode: 'tema',
    q: 'Odgovor na „Tko je razbio prozor?” najprirodnije glasi:',
    opts: [
      'Prozor je razbio Ivan.',
      'Ivan je razbio prozor.',
      'Razbio je Ivan prozor.',
      'Prozor je Ivan razbio.',
    ],
    answer: 'Prozor je razbio Ivan.',
    en: 'the natural answer puts the NEW information last',
    tip: 'Fokus (nova obavijest — IVAN) dolazi na kraj rečenice.',
  },
  {
    mode: 'tema',
    q: 'Odgovor na „Što je Ivan razbio?” najprirodnije glasi:',
    opts: [
      'Ivan je razbio prozor.',
      'Prozor je razbio Ivan.',
      'Razbio je prozor Ivan.',
      'Prozor je Ivan razbio.',
    ],
    answer: 'Ivan je razbio prozor.',
    en: 'again — new information (the window) goes last',
    tip: 'Poznato (Ivan) naprijed, novo (prozor) na kraj.',
  },
  {
    mode: 'tema',
    q: '„Vina više nemamo, piva ima.” — na početcima surečenica istaknuti su:',
    opts: ['objekti u genitivu', 'subjekti', 'prilozi', 'glagoli'],
    answer: 'objekti u genitivu',
    en: 'contrastive fronting of partitive genitives',
    tip: 'Partitivni genitivi (vina, piva) sprijeda — kontrastna tema.',
  },
  {
    mode: 'tema',
    q: 'Kontrast radnji: „____ ću ja, a ti operi suđe.”',
    opts: ['Kuhati', 'Ja', 'Suđe', 'Operi'],
    answer: 'Kuhati',
    en: 'fronting the verb for contrast',
    tip: 'Infinitiv na početku suprotstavlja radnje: kuhati ↔ oprati.',
  },
  {
    mode: 'tema',
    q: 'Najneutralnije zvuči:',
    opts: [
      'Sutra idemo na more.',
      'Na more sutra idemo.',
      'Idemo sutra na more.',
      'Na more idemo sutra.',
    ],
    answer: 'Sutra idemo na more.',
    en: 'the most neutral variant',
    tip: 'Vremenski prilog prirodno otvara neutralnu rečenicu; odredište na kraju.',
  },
  {
    mode: 'fokus',
    q: 'Emfatično: „____ je taj koji je sve organizirao.”',
    opts: ['On', 'Njega', 'Njemu', 'Njim'],
    answer: 'On',
    en: 'HE is the one who organized everything',
    tip: 'Rascijepljena konstrukcija: On je taj koji… (nominativ).',
  },
  {
    mode: 'fokus',
    q: '„Upravo ____ tražim!”',
    opts: ['tebe', 'te', 'ti', 'tobom'],
    answer: 'tebe',
    en: 'it is precisely YOU I am looking for',
    tip: 'Uz „upravo” dolazi puni (naglašeni) oblik zamjenice, ne zanaglasnica.',
  },
  {
    mode: 'fokus',
    q: '„Ni ____ to ne bih rekao.”',
    opts: ['njemu', 'mu', 'njega', 'on'],
    answer: 'njemu',
    en: 'I would not tell even HIM that',
    tip: 'Iza „ni” obvezno puni oblik: ni njemu (zanaglasnica ne može).',
  },
  {
    mode: 'fokus',
    q: '„____ sam ja kriv?!” — čestica za nevjericu:',
    opts: ['Zar', 'Li', 'Da', 'Je'],
    answer: 'Zar',
    en: 'am I really the one to blame?!',
    tip: '„Zar” uvodi pitanje s čuđenjem ili nevjericom.',
  },
  {
    mode: 'fokus',
    q: '„To je ____ što me najviše ljuti.”',
    opts: ['ono', 'to', 'ovo', 'nešto'],
    answer: 'ono',
    en: 'that is THE thing that annoys me most',
    tip: 'Rascijepljena rečenica: To je ono što…',
  },
  {
    mode: 'fokus',
    q: 'Tematizator: „A ____ se tiče cijene, o njoj ćemo poslije.”',
    opts: ['što', 'koliko', 'kako', 'čega'],
    answer: 'što',
    en: 'as far as the price is concerned…',
    tip: 'Što se tiče + genitiv — izdvaja temu na početak.',
  },
  {
    mode: 'fokus',
    q: '„Istinu govoreći, ____ mi se ne ide.”',
    opts: ['nikamo', 'nigdje', 'nikuda', 'nikad'],
    answer: 'nikamo',
    en: 'to be honest, I do not feel like going anywhere',
    tip: 'NIKAMO = ni prema kojem odredištu (smjer); nigdje = mjesto.',
  },
  {
    mode: 'fokus',
    q: 'Ironično čuđenje: „Ma ____!”',
    opts: ['nemoj', 'neću', 'šuti', 'daj'],
    answer: 'nemoj',
    en: 'you do not say!',
    tip: '„Ma nemoj” — ustaljena ironična reakcija na očito.',
  },
  {
    mode: 'stil',
    q: '„Dao ____ za rođendan.” (njega, njemu)',
    opts: ['mu ga je', 'mu je ga', 'ga mu je', 'je mu ga'],
    answer: 'mu ga je',
    en: 'he gave it to him for his birthday',
    tip: 'Redoslijed zanaglasnica: dativ > akuzativ > je: mu ga je.',
  },
  {
    mode: 'stil',
    q: 'Pitanje s „li”: „____ li se sjećaš onog ljeta?”',
    opts: ['Sjećaš', 'Da', 'Jesi', 'Što'],
    answer: 'Sjećaš',
    en: 'do you remember that summer?',
    tip: 'Naglašeni glagol + li: Sjećaš li se…',
  },
  {
    mode: 'stil',
    q: 'Iza veznika „da”: „…da ____ vidjeli.”',
    opts: ['smo ga', 'ga smo', 'smo njega', 'njega smo'],
    answer: 'smo ga',
    en: '…that we saw him',
    tip: 'U klasteru pomoćni glagol (smo) prije zamjenice (ga).',
  },
  {
    mode: 'stil',
    q: '„Htio ____ predstaviti.” (sebe, vama)',
    opts: ['bih vam se', 'bih se vam', 'vam bih se', 'se bih vam'],
    answer: 'bih vam se',
    en: 'I would like to introduce myself to you',
    tip: 'bih (pomoćni) > vam (dativ) > se: htio bih vam se predstaviti.',
  },
  {
    mode: 'stil',
    q: 'Prirodnije u poruci:',
    opts: [
      'Javit ću vam se sutra.',
      'Ja ću se vama javiti sutra.',
      'Sutra ja ću vam se javiti.',
      'Javit ću se vama sutra.',
    ],
    answer: 'Javit ću vam se sutra.',
    en: 'I will get back to you tomorrow',
    tip: 'Zanaglasnice u klasteru (ću vam se); puni oblici samo za isticanje.',
  },
  {
    mode: 'stil',
    q: '„Kad ____ vratio, nazovi me.”',
    opts: ['se budeš', 'budeš se', 'se bude', 'budeš'],
    answer: 'se budeš',
    en: 'when you get back, call me',
    tip: 'Zanaglasnica se odmah iza veznika; budeš je naglašeni oblik.',
  },
  {
    mode: 'stil',
    q: '„Čini ____ da smo se već sreli.”',
    opts: ['mi se', 'se mi', 'me se', 'mi'],
    answer: 'mi se',
    en: 'it seems to me we have already met',
    tip: 'Dativ prije se: čini mi se.',
  },
  {
    mode: 'stil',
    q: 'Neutralan red s dvije zanaglasnice: „Ana ____ pokazala fotografije.”',
    opts: ['nam je', 'je nam', 'nama je', 'je nama'],
    answer: 'nam je',
    en: 'Ana showed us the photographs',
    tip: 'Dativna zanaglasnica (nam) prije je: Ana nam je pokazala…',
  },
];

export { DATA as EMFAZA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function EmfazaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="emfaza"
      title={'🎯 Red riječi'}
      subtitle={'novo na kraj, poznato na početak — information structure'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — red riječi vam je prirodan! 🏆',
        good: 'Vrlo dobro vladanje isticanjem! 💪',
        more: 'Red riječi i zanaglasnice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
