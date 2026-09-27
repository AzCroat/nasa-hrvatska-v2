import React from 'react';
import ModeDrill from './ModeDrill';

// C2 politeness drill (C2 tranche 8, 2026-08-15): softened requests
// (biste li mogli, ako nije problem), hedged criticism (cini mi se,
// prostora za napredak, the agentless passive) and address (V-form rules,
// salutations, closing formulas).
const MODE_LABEL: Record<string, string> = {
  molbe: '🙏 Molbe',
  kritika: '🪶 Blaga kritika',
  oslovljavanje: '🤝 Oslovljavanje',
};

const DATA = [
  {
    mode: 'molbe',
    q: 'Najuljudnija molba:',
    opts: [
      'Biste li mogli pogledati ovaj dopis?',
      'Pogledajte ovaj dopis.',
      'Možeš pogledati ovo?',
      'Gledaj ovo!',
    ],
    answer: 'Biste li mogli pogledati ovaj dopis?',
    en: 'the politest request',
    tip: 'Kondicional + moći + V-oblik.',
  },
  {
    mode: 'molbe',
    q: 'Uljudni uvod u molbu:',
    opts: ['Ako nije problem, …', 'Odmah mi…', 'Ti ćeš sad…', 'Slušaj…'],
    answer: 'Ako nije problem, …',
    en: 'if it is no trouble…',
    tip: 'Uvodna ograda smanjuje pritisak.',
  },
  {
    mode: 'molbe',
    q: '„Da vas ne ____ , samo jedno pitanje.” (uljudno)',
    opts: ['smetam', 'smetaš', 'ometam silom', 'gnjavim baš'],
    answer: 'smetam',
    en: 'not to disturb you — just one question',
    tip: 'Da vas ne smetam — formula obzira.',
  },
  {
    mode: 'molbe',
    q: '„Biste li imali ____ da pogledate nacrt?” (vrijeme)',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    en: 'would you have time to look at the draft?',
    tip: 'Imati vremena (G) — uljudno pitanje raspoloživosti.',
  },
  {
    mode: 'molbe',
    q: 'Ublažena zapovijed šefa suradniku:',
    opts: [
      'Molim vas da izvješće pošaljete do petka.',
      'Izvješće do petka!',
      'Pošalji to!',
      'Odmah šalji izvješće.',
    ],
    answer: 'Molim vas da izvješće pošaljete do petka.',
    en: 'softened workplace directive',
    tip: 'Molim vas da + prezent.',
  },
  {
    mode: 'molbe',
    q: '„Ljubazno molimo ____ strpljenje.” (dopis)',
    opts: ['za', 'na', 'o', 'uz'],
    answer: 'za',
    en: 'we kindly ask for your patience',
    tip: 'Moliti za + A u dopisima (ili moliti + A).',
  },
  {
    mode: 'molbe',
    q: 'Umjesto „Ne!” uljudno odbijamo:',
    opts: ['Bojim se da to neće ići.', 'Nikako!', 'Ma daj!', 'Ne pada mi na pamet.'],
    answer: 'Bojim se da to neće ići.',
    en: 'I am afraid that will not work',
    tip: 'Bojim se da… — ublaženo odbijanje.',
  },
  {
    mode: 'molbe',
    q: '„Nažalost, moram vas ____ .” (odbiti)',
    opts: ['razočarati', 'odbiti grubo', 'otjerati', 'prekinuti odmah'],
    answer: 'razočarati',
    en: 'unfortunately I must disappoint you',
    tip: 'Razočarati < odbiti — biranje blaže riječi.',
  },
  {
    mode: 'kritika',
    q: 'Ublažena kritika teksta:',
    opts: [
      'Čini mi se da bi uvod mogao biti jasniji.',
      'Uvod je loš.',
      'Ovo ništa ne valja.',
      'Tko je ovo pisao?!',
    ],
    answer: 'Čini mi se da bi uvod mogao biti jasniji.',
    en: 'the introduction could be clearer',
    tip: 'Čini mi se + kondicional — kritika bez uboda.',
  },
  {
    mode: 'kritika',
    q: '„Možda bismo ____ razmotriti i drugu opciju.”',
    opts: ['mogli', 'morali sad', 'trebali odmah', 'htjeli svi'],
    answer: 'mogli',
    en: 'perhaps we might consider another option',
    tip: 'Možda + kondicional množine uključuje govornika.',
  },
  {
    mode: 'kritika',
    q: 'Umjesto „Griješiš” uljudnije je:',
    opts: ['Nisam siguran da je to točno.', 'Apsolutno griješiš.', 'Nemaš pojma.', 'Krivo!'],
    answer: 'Nisam siguran da je to točno.',
    en: 'I am not sure that is right',
    tip: 'Negacija vlastite sigurnosti umjesto tuđe točnosti.',
  },
  {
    mode: 'kritika',
    q: '„S dužnim poštovanjem, ____ se ne bih složio.”',
    opts: ['ipak', 'nikad', 'baš', 'jedva'],
    answer: 'ipak',
    en: 'with due respect, I would beg to differ',
    tip: 'Formulaično neslaganje + kondicional.',
  },
  {
    mode: 'kritika',
    q: 'Povratna informacija sendvičem znači:',
    opts: ['pohvala — prijedlog — pohvala', 'tri kritike', 'šutnja', 'samo pohvale'],
    answer: 'pohvala — prijedlog — pohvala',
    en: 'the feedback sandwich',
    tip: 'Ublažavanje kritike okvirom pohvale.',
  },
  {
    mode: 'kritika',
    q: '„Ima ____ za napredak.” (diplomatski)',
    opts: ['prostora', 'mane', 'krivnje', 'izlike'],
    answer: 'prostora',
    en: 'there is room for improvement',
    tip: 'Prostor za napredak — eufemizam za nedostatke.',
  },
  {
    mode: 'kritika',
    q: '„To je ____ rečeno, nespretno.” (ublažavanje)',
    opts: ['blago', 'oštro', 'glasno', 'točno'],
    answer: 'blago',
    en: 'to put it mildly',
    tip: 'Blago rečeno — signal ublažavanja.',
  },
  {
    mode: 'kritika',
    q: 'Pasiv u „Pogreška je učinjena” služi:',
    opts: ['izbjegavanju prozivanja krivca', 'isticanju krivca', 'brzini', 'šali'],
    answer: 'izbjegavanju prozivanja krivca',
    en: 'mistakes were made',
    tip: 'Bezlični pasiv štiti sugovornika.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Nepoznatoj odrasloj osobi obraćamo se:',
    opts: ['V-oblikom (Vi)', 'ti-oblikom', 'nadimkom', 'trećim licem'],
    answer: 'V-oblikom (Vi)',
    en: 'strangers get the V-form',
    tip: 'Vi dok se ne ponudi ti.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Prelazak na „ti” predlaže:',
    opts: ['starija ili nadređena osoba', 'mlađa osoba', 'stranac', 'nitko nikad'],
    answer: 'starija ili nadređena osoba',
    en: 'the senior party offers the ti',
    tip: 'Ponuditi ti = gesta bliskosti.',
  },
  {
    mode: 'oslovljavanje',
    q: 'U e-poruci nepoznatoj osobi počinjemo:',
    opts: ['Poštovani / Poštovana', 'Bog!', 'Ej!', 'Hej ti'],
    answer: 'Poštovani / Poštovana',
    en: 'Dear Sir or Madam',
    tip: 'Poštovani + prezime ako ga znamo.',
  },
  {
    mode: 'oslovljavanje',
    q: '„Gospođo profesorice” pokazuje:',
    opts: ['titulu uz uljudno oslovljavanje', 'pogrešan red', 'prisnost', 'ironiju uvijek'],
    answer: 'titulu uz uljudno oslovljavanje',
    en: 'Madam Professor',
    tip: 'Titula + V-oblik u akademskom ophođenju.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Vokativ u pismu („Draga Ivana,”) prati:',
    opts: ['zarez i novi red', 'točka', 'uskličnik obavezno', 'ništa'],
    answer: 'zarez i novi red',
    en: 'the salutation comma',
    tip: 'Draga Ivana, / Poštovani g. Horvat,',
  },
  {
    mode: 'oslovljavanje',
    q: '„Kolegice, biste li…” u struci je:',
    opts: ['uljudno kolegijalno oslovljavanje', 'prisno', 'uvredljivo', 'zastarjelo'],
    answer: 'uljudno kolegijalno oslovljavanje',
    en: 'collegial address',
    tip: 'Kolega/kolegice + V-oblik.',
  },
  {
    mode: 'oslovljavanje',
    q: 'Završna formula formalne poruke:',
    opts: ['S poštovanjem,', 'Vidimo se!', 'Pusa!', 'Aj bok'],
    answer: 'S poštovanjem,',
    en: 'Yours faithfully',
    tip: 'S poštovanjem / Srdačan pozdrav.',
  },
  {
    mode: 'oslovljavanje',
    q: '„Unaprijed zahvaljujem” u dopisu:',
    opts: ['uljudno najavljuje zahvalu za uslugu', 'zahtijeva plaćanje', 'prijeti', 'ispričava se'],
    answer: 'uljudno najavljuje zahvalu za uslugu',
    en: 'thanking in advance',
    tip: 'Unaprijed zahvaljujem na odgovoru.',
  },
];

export { DATA as ULJUDNOST_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function UljudnostDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="uljudnost"
      title={'🎩 Umijeće uljudnosti'}
      subtitle={'biste li mogli, da vas ne smetam — politeness as grammar'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — uljudnost je vaša! 🏆',
        good: 'Vrlo dobro vladanje uljudnošću! 💪',
        more: 'Uljudnost traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
