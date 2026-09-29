import React from 'react';
import ModeDrill from './ModeDrill';

// B2 questions drill (B2 tranche 7, 2026-08-15): interrogative words
// (koji/kakav/ciji, kamo/gdje/kuda/odakle), particles (verb + li, je li,
// zar, tag zar ne) and indirect questions (dolazis li, no question mark).
const MODE_LABEL: Record<string, string> = {
  rijeci: '🔤 Upitne riječi',
  cestice: '✨ Čestice',
  neizravna: '🔁 Neizravna',
};

const DATA = [
  {
    mode: 'rijeci',
    q: '„____ film gledaš?” (izbor između poznatih)',
    opts: ['Koji', 'Kakav', 'Čiji', 'Što'],
    answer: 'Koji',
    en: 'which film are you watching?',
    tip: 'Koji = izbor iz skupa.',
  },
  {
    mode: 'rijeci',
    q: '„____ je bio film?” (kvaliteta, opis)',
    opts: ['Kakav', 'Koji', 'Čiji', 'Koliko'],
    answer: 'Kakav',
    en: 'what was the film like?',
    tip: 'Kakav = svojstvo/opis.',
  },
  {
    mode: 'rijeci',
    q: '„____ je ovo kaput?” (pripadnost)',
    opts: ['Čiji', 'Koji', 'Kakav', 'Kome'],
    answer: 'Čiji',
    en: 'whose coat is this?',
    tip: 'Čiji = posvojnost.',
  },
  {
    mode: 'rijeci',
    q: '„____ ideš?” (cilj kretanja)',
    opts: ['Kamo', 'Kome', 'Kakav', 'Čime'],
    answer: 'Kamo',
    en: 'where are you going (to)?',
    tip: 'Kamo = cilj; gdje = mjesto; kuda = put.',
  },
  {
    mode: 'rijeci',
    q: '„____ si tako dugo?” (mjesto)',
    opts: ['Gdje', 'Kamo', 'Kuda', 'Dokle'],
    answer: 'Gdje',
    en: 'where have you been?',
    tip: 'Gdje pita za mjesto bez kretanja.',
  },
  {
    mode: 'rijeci',
    q: '„____ ste putovali — preko Like ili autocestom?” (put)',
    opts: ['Kuda', 'Kamo', 'Gdje', 'Otkad'],
    answer: 'Kuda',
    en: 'which way did you travel?',
    tip: 'Kuda = kojim putem.',
  },
  {
    mode: 'rijeci',
    q: '„____ dolaziš?” (polazište)',
    opts: ['Odakle', 'Kamo', 'Gdje', 'Dokad'],
    answer: 'Odakle',
    en: 'where do you come from?',
    tip: 'Odakle = iz kojeg mjesta.',
  },
  {
    mode: 'rijeci',
    q: '„____ košta kilogram jabuka?”',
    opts: ['Koliko', 'Kako', 'Što', 'Čime'],
    answer: 'Koliko',
    en: 'how much does a kilo of apples cost?',
    tip: 'Koliko = količina/cijena.',
  },
  {
    mode: 'cestice',
    q: 'Neutralno pitanje s glagolom: „____ sutra?” (raditi, ti)',
    opts: ['Radiš li', 'Li radiš', 'Radi li', 'Radiš da li'],
    answer: 'Radiš li',
    en: 'are you working tomorrow?',
    tip: 'Birano: glagol + li.',
  },
  {
    mode: 'cestice',
    q: 'Pitanje s „je”: „____ to istina?”',
    opts: ['Je li', 'Jeli', 'Jesi li', 'Li je'],
    answer: 'Je li',
    en: 'is that true?',
    tip: 'Je li + rečenica — standardni upitni okvir.',
  },
  {
    mode: 'cestice',
    q: '„____ me nisi nazvao?!” (čuđenje s prijekorom)',
    opts: ['Zar', 'Je li', 'Li', 'Da'],
    answer: 'Zar',
    en: 'you mean you did not call me?!',
    tip: 'Zar unosi čuđenje/nevjericu.',
  },
  {
    mode: 'cestice',
    q: '„Zar ne?” na kraju rečenice traži:',
    opts: ['potvrdu sugovornika', 'odgovor ne', 'šutnju', 'ispriku'],
    answer: 'potvrdu sugovornika',
    en: '…isn\u2019t it? (tag question)',
    tip: 'Lijepo je, zar ne?',
  },
  {
    mode: 'cestice',
    q: 'Čestica „li” stoji:',
    opts: ['odmah iza glagola', 'na početku', 'na kraju', 'iza subjekta'],
    answer: 'odmah iza glagola',
    en: 'where the particle li stands',
    tip: 'Dolaziš li? Znate li? Hoćemo li?',
  },
  {
    mode: 'cestice',
    q: '„Da li” u biranom standardu:',
    opts: ['zamjenjuje se s glagol + li', 'obvezno je', 'stoji na kraju', 'ne postoji'],
    answer: 'zamjenjuje se s glagol + li',
    en: 'da li in the formal standard',
    tip: 'Da li dolaziš → Dolaziš li.',
  },
  {
    mode: 'cestice',
    q: 'Niječno pitanje „Nisi li se umorio?” izriče:',
    opts: ['blagu pretpostavku da jest', 'zabranu', 'zapovijed', 'odgovor'],
    answer: 'blagu pretpostavku da jest',
    en: 'have you not grown tired?',
    tip: 'Niječno pitanje očekuje potvrdu.',
  },
  {
    mode: 'cestice',
    q: '„Ma nemoj?!” kao odgovor izriče:',
    opts: ['ironično čuđenje', 'molbu', 'zahvalu', 'pozdrav'],
    answer: 'ironično čuđenje',
    en: 'you don\u2019t say?!',
    tip: 'Razgovorna ironija na očito.',
  },
  {
    mode: 'neizravna',
    q: '„Pitam se ____ će doći.” (vrijeme)',
    opts: ['kada', 'da li kada', 'li kad', 'zar kada'],
    answer: 'kada',
    en: 'I wonder when he will come',
    tip: 'Neizravno pitanje: upitna riječ bez li.',
  },
  {
    mode: 'neizravna',
    q: '„Ne znam ____ je to učinio.” (razlog)',
    opts: ['zašto', 'jer', 'da', 'pa'],
    answer: 'zašto',
    en: 'I do not know why he did it',
    tip: 'Zašto uvodi neizravno pitanje razloga.',
  },
  {
    mode: 'neizravna',
    q: '„Reci mi ____.” (dolaziti, ti — da/ne pitanje)',
    opts: ['dolaziš li', 'li dolaziš', 'dolaziš da', 'zar dolaziš'],
    answer: 'dolaziš li',
    en: 'tell me whether you are coming',
    tip: 'Neizravno da/ne pitanje: glagol + li.',
  },
  {
    mode: 'neizravna',
    q: '„Zanima me ____ o tome misliš.”',
    opts: ['što', 'šta samo', 'koje', 'čiji'],
    answer: 'što',
    en: 'I wonder what you think about it',
    tip: 'Standard: što (šta je razgovorno).',
  },
  {
    mode: 'neizravna',
    q: '„Provjeri ____ su vrata zaključana.”',
    opts: ['jesu li', 'je li', 'zar', 'li jesu'],
    answer: 'jesu li',
    en: 'check whether the door is locked',
    tip: 'Jesu li + subjekt u neizravnom pitanju.',
  },
  {
    mode: 'neizravna',
    q: 'U neizravnom pitanju upitnik:',
    opts: [
      'se ne piše (Pitam se tko je došao.)',
      'ostaje uvijek',
      'postaje uskličnik',
      'ide u zagrade',
    ],
    answer: 'se ne piše (Pitam se tko je došao.)',
    en: 'the question mark in an indirect question',
    tip: 'Rečenica je izjavna, upitnost je unutra.',
  },
  {
    mode: 'neizravna',
    q: '„Kako se zove i ____ dolazi, nitko ne zna.”',
    opts: ['odakle', 'otkud li zar', 'gdje da', 'kamo li'],
    answer: 'odakle',
    en: 'no one knows his name or where he is from',
    tip: 'Nizanje neizravnih pitanja upitnim riječima.',
  },
  {
    mode: 'neizravna',
    q: '„Pitao me imam li vremena” prenosi pitanje:',
    opts: ['Imaš li vremena?', 'Kada imaš vremena?', 'Zašto imaš vremena?', 'Čije je vrijeme?'],
    answer: 'Imaš li vremena?',
    en: 'he asked me if I had time',
    tip: 'Neizravno li-pitanje ← izravno li-pitanje.',
  },
];

export { DATA as PITANJA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PitanjaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="pitanja"
      title={'❓ Umijeće pitanja'}
      subtitle={'koji ili kakav, je li ili zar — asking like a native'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — pitanja su vaša! 🏆',
        good: 'Vrlo dobro vladanje pitanjima! 💪',
        more: 'Pitanja traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
