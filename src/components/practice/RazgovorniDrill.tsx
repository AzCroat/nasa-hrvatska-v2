import React from 'react';
import ModeDrill from './ModeDrill';

// C2 colloquial-register drill (C2 tranche 3, 2026-08-15): decoding
// pan-Croatian colloquialisms into standard, recognizing natural colloquial
// equivalents, and choosing the register a situation demands (job
// application vs text to a friend vs official minutes).
const MODE_LABEL: Record<string, string> = {
  dekod: '🔍 Dekodiranje',
  obrnuto: '🔁 Obrnuto',
  situacija: '🎭 Situacija',
};

const DATA = [
  {
    mode: 'dekod',
    q: 'Razgovorno „fakat” u standardu znači:',
    opts: ['zaista', 'možda', 'nikako', 'otprilike'],
    answer: 'zaista',
    en: 'colloquial fakat = really',
    tip: 'Fakat je stvarno/zaista: „Fakat je dobar film.”',
  },
  {
    mode: 'dekod',
    q: 'Razgovorno „komp” u standardu je:',
    opts: ['računalo', 'ormar', 'automobil', 'telefon'],
    answer: 'računalo',
    en: 'colloquial komp = computer',
    tip: 'Skraćeno od kompjutor; standardno: računalo.',
  },
  {
    mode: 'dekod',
    q: '„Frka je!” znači:',
    opts: ['panika je, gužva je', 'tišina je', 'dosadno je', 'hladno je'],
    answer: 'panika je, gužva je',
    en: 'frka = panic, rush',
    tip: 'Frka = žurba, panika, napeta situacija.',
  },
  {
    mode: 'dekod',
    q: 'Razgovorno „murja” znači:',
    opts: ['policija', 'vojska', 'vatrogasci', 'pošta'],
    answer: 'policija',
    en: 'murja = the police (slang)',
    tip: 'Žargonski naziv za policiju.',
  },
  {
    mode: 'dekod',
    q: 'Razgovorno „lova” znači:',
    opts: ['novac', 'hrana', 'sreća', 'ljubav'],
    answer: 'novac',
    en: 'lova = money (slang)',
    tip: 'Ima love = ima novca.',
  },
  {
    mode: 'dekod',
    q: '„Kužiš?” u standardu glasi:',
    opts: ['Razumiješ?', 'Čuješ?', 'Vidiš?', 'Trčiš?'],
    answer: 'Razumiješ?',
    en: 'kužiš = do you get it?',
    tip: 'Kužiti = razumjeti, shvaćati.',
  },
  {
    mode: 'dekod',
    q: 'Razgovorno „faca” znači:',
    opts: ['dojmljiva ili važna osoba', 'vrsta kolača', 'dio automobila', 'loš učenik'],
    answer: 'dojmljiva ili važna osoba',
    en: 'faca = a cool/important person',
    tip: 'On je prava faca = dojmljiv čovjek.',
  },
  {
    mode: 'dekod',
    q: '„Štreber” je razgovorni naziv za:',
    opts: ['pretjerano marljiva učenika', 'lijenog radnika', 'dobrog kuhara', 'starog susjeda'],
    answer: 'pretjerano marljiva učenika',
    en: 'štreber = an overzealous student',
    tip: 'Blago podrugljivo: uči više nego što itko traži.',
  },
  {
    mode: 'obrnuto',
    q: '„Razumiješ li?” najprirodnije razgovorno glasi:',
    opts: ['Kužiš?', 'Izvolite?', 'Molim?', 'Dakako?'],
    answer: 'Kužiš?',
    en: 'standard do you understand → colloquial kužiš',
    tip: 'Najčešći razgovorni ekvivalent.',
  },
  {
    mode: 'obrnuto',
    q: '„Novac” u žargonu je:',
    opts: ['lova', 'roba', 'blagajna', 'marka'],
    answer: 'lova',
    en: 'money',
    tip: 'Lova, kinta, pare — žargonski nazivi za novac.',
  },
  {
    mode: 'obrnuto',
    q: '„Računalo” razgovorno zovemo:',
    opts: ['komp', 'stroj', 'kutija', 'ekran'],
    answer: 'komp',
    en: 'computer',
    tip: 'Komp — univerzalna razgovorna pokrata.',
  },
  {
    mode: 'obrnuto',
    q: '„Izvrsno!” mladi razgovorno kažu:',
    opts: ['mrak', 'mračno', 'svjetlo', 'sjena'],
    answer: 'mrak',
    en: 'excellent',
    tip: 'Mrak = super, odlično (žargon pohvale).',
  },
  {
    mode: 'obrnuto',
    q: '„Prijatelj” razgovorno je:',
    opts: ['frend', 'kolega s posla', 'znanac', 'sugovornik'],
    answer: 'frend',
    en: 'friend',
    tip: 'Anglizam frend u opuštenom govoru.',
  },
  {
    mode: 'obrnuto',
    q: '„Dosadno mi je zbog njega” razgovorno:',
    opts: ['smara me', 'veseli me', 'čudi me', 'krijepi me'],
    answer: 'smara me',
    en: 'he bores me',
    tip: 'Smarati = gnjaviti, dosađivati.',
  },
  {
    mode: 'obrnuto',
    q: '„Brzo je otišao” pojačano razgovorno:',
    opts: ['zbrisao je', 'došetao je', 'pristigao je', 'svratio je'],
    answer: 'zbrisao je',
    en: 'he took off',
    tip: 'Zbrisati = naglo otići, pobjeći.',
  },
  {
    mode: 'obrnuto',
    q: '„Mnogo posla” razgovorno:',
    opts: ['hrpa posla', 'svežanj posla', 'niska posla', 'šaka posla'],
    answer: 'hrpa posla',
    en: 'a lot of work → a heap of work',
    tip: 'Hrpa = razgovorna mjera za mnogo.',
  },
  {
    mode: 'situacija',
    q: 'Prikladan početak molbe za posao:',
    opts: ['Poštovani gospodine Horvat,', 'Bog svima!', 'Ej, ljudi!', 'Dragi moji!'],
    answer: 'Poštovani gospodine Horvat,',
    en: 'the proper salutation in a job application',
    tip: 'Formalni dopis traži Poštovani + prezime i V-oblik.',
  },
  {
    mode: 'situacija',
    q: 'U poruci bliskom prijatelju najprirodnije zvuči:',
    opts: [
      'Ej, jesi za kavu?',
      'Poštovani, biste li imali vremena za kavu?',
      'Ovim putem Vas pozivam na kavu.',
      'Uljudno molim odgovor glede kave.',
    ],
    answer: 'Ej, jesi za kavu?',
    en: 'texting a close friend about coffee',
    tip: 'Razgovorni stil za bliske ljude; formalno bi zvučalo hladno.',
  },
  {
    mode: 'situacija',
    q: 'U eseju umjesto „hrpa problema” pišemo:',
    opts: ['mnoštvo problema', 'brdo problema', 'more frke', 'tona bedova'],
    answer: 'mnoštvo problema',
    en: 'a heap of problems → a multitude of problems',
    tip: 'Formalni stil traži neutralnu mjeru: mnoštvo, niz, brojni.',
  },
  {
    mode: 'situacija',
    q: 'U službenom e-mailu izbjegavamo:',
    opts: ['žargon i pretjerane emotikone', 'uljudne formule', 'punktuaciju', 'svoj potpis'],
    answer: 'žargon i pretjerane emotikone',
    en: 'what to avoid in a formal e-mail',
    tip: 'Standardni jezik, V-oblik, bez „frke” i 😂.',
  },
  {
    mode: 'situacija',
    q: 'Profesoru se na fakultetu obraćamo:',
    opts: [
      'Poštovani profesore, biste li…',
      'Ej profo, daj…',
      'Kužiš profesore…',
      'Bog stari, imaš minutu?',
    ],
    answer: 'Poštovani profesore, biste li…',
    en: 'addressing a professor',
    tip: 'V-oblik + uljudni kondicional (biste li).',
  },
  {
    mode: 'situacija',
    q: '„Šef je skužio grešku” u zapisniku postaje:',
    opts: [
      'Voditelj je uočio pogrešku.',
      'Šef je skužio propust.',
      'Gazda je provalio grešku.',
      'Šef je ukapirao problem.',
    ],
    answer: 'Voditelj je uočio pogrešku.',
    en: 'the boss spotted the mistake — minutes version',
    tip: 'Zapisnik traži neutralan leksik: voditelj, uočiti, pogreška.',
  },
  {
    mode: 'situacija',
    q: 'Koja rečenica pripada razgovornomu stilu?',
    opts: [
      'Daj mi pet minuta, frka mi je.',
      'Molim Vas, pričekajte pet minuta.',
      'Ljubazno molim za kratku odgodu.',
      'Zamolio bih Vas za strpljenje.',
    ],
    answer: 'Daj mi pet minuta, frka mi je.',
    en: 'which sentence is colloquial?',
    tip: 'Imperativ „daj” + žargon „frka” = razgovorni registar.',
  },
  {
    mode: 'situacija',
    q: '„Nema frke” u formalnom odgovoru glasi:',
    opts: ['U redu je, riješit ćemo.', 'Frka otpada.', 'Sve pet, šefe.', 'Ma opušteno.'],
    answer: 'U redu je, riješit ćemo.',
    en: 'no worries → formal equivalent',
    tip: 'Formalno: u redu je / nema poteškoća / dogovoreno.',
  },
];

export { DATA as RAZGOVORNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function RazgovorniDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="razgovorni"
      title={'🗣️ Razgovorni jezik'}
      subtitle={'frka, lova, kužiš — decoding how people actually talk'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — kužite sve! 🏆',
        good: 'Vrlo dobro snalaženje u registrima! 💪',
        more: 'Razgovorni registar traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
