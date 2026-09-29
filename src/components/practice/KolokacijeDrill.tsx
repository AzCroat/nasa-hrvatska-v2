import React from 'react';
import ModeDrill from './ModeDrill';

// C1 collocations drill (C1 tranche, 2026-08-14): the fixed verb-noun pairings
// and case government that separate "correct" Croatian from NATIVE Croatian.
// Three modes: formal verb-noun collocations, the case each collocation
// governs, and register-appropriate choice between near-synonyms.
const MODE_LABEL: Record<string, string> = {
  glagolske: '🤝 Glagol + imenica',
  padezi: '🎯 Rekcija',
  registar: '🎩 Pravi izbor',
};

const DATA = [
  {
    mode: 'glagolske',
    q: 'Na sastanku smo napokon ____ odluku o proračunu.',
    opts: ['donijeli', 'napravili', 'uzeli', 'dali'],
    answer: 'donijeli',
    en: 'we finally made a decision about the budget',
    tip: 'Odluka se DONOSI: donijeti odluku. „Napraviti odluku” je anglizam.',
  },
  {
    mode: 'glagolske',
    q: 'Ministarstvo je ____ mjere za zaštitu potrošača.',
    opts: ['poduzelo', 'uzelo', 'učinilo', 'izvelo'],
    answer: 'poduzelo',
    en: 'the ministry took measures to protect consumers',
    tip: 'Mjere se PODUZIMAJU: poduzeti mjere.',
  },
  {
    mode: 'glagolske',
    q: 'Molim vas da ____ računa o roku prijave.',
    opts: ['vodite', 'držite', 'imate', 'pazite'],
    answer: 'vodite',
    en: 'please keep the application deadline in mind',
    tip: 'Voditi računa o čemu — ustaljena sveza; „paziti” traži „na”.',
  },
  {
    mode: 'glagolske',
    q: 'Novi zakon ____ na snagu prvoga siječnja.',
    opts: ['stupa', 'ulazi', 'dolazi', 'kreće'],
    answer: 'stupa',
    en: 'the new law comes into force on January 1st',
    tip: 'Zakon STUPA na snagu — pravna kolokacija.',
  },
  {
    mode: 'glagolske',
    q: 'Uprava je ____ ostavku nakon afere.',
    opts: ['podnijela', 'uložila', 'donijela', 'izrekla'],
    answer: 'podnijela',
    en: 'the management submitted its resignation after the scandal',
    tip: 'Ostavka se PODNOSI: podnijeti ostavku (i zahtjev, prijavu, žalbu).',
  },
  {
    mode: 'glagolske',
    q: 'Grad je raspisao natječaj i ____ ugovor s najboljim ponuditeljem.',
    opts: ['sklopio', 'napravio', 'spojio', 'potpisao se'],
    answer: 'sklopio',
    en: 'the city concluded a contract with the best bidder',
    tip: 'Ugovor se SKLAPA: sklopiti ugovor (potpisati je fizički čin).',
  },
  {
    mode: 'glagolske',
    q: 'Istraživanje je ____ svjetlo na uzroke iseljavanja.',
    opts: ['bacilo', 'stavilo', 'donijelo', 'pustilo'],
    answer: 'bacilo',
    en: 'the research shed light on the causes of emigration',
    tip: 'Baciti svjetlo na što — prenesena, ali ustaljena sveza.',
  },
  {
    mode: 'glagolske',
    q: 'Sud je ____ presudu u korist tužitelja.',
    opts: ['izrekao', 'rekao', 'izdao', 'napravio'],
    answer: 'izrekao',
    en: 'the court pronounced a verdict in favour of the plaintiff',
    tip: 'Presuda se IZRIČE: izreći presudu (kaznu također).',
  },
  {
    mode: 'padezi',
    q: 'Zahvaljujemo vam ____ povjerenju.',
    opts: ['na', 'za', 'o', 'u'],
    answer: 'na',
    en: 'we thank you for your trust',
    tip: 'Zahvaliti/hvala NA + lokativ: hvala na povjerenju.',
  },
  {
    mode: 'padezi',
    q: 'Uspjeh projekta ovisi ____ suradnji svih odjela.',
    opts: ['o', 'od', 'na', 'iz'],
    answer: 'o',
    en: 'the success of the project depends on all departments cooperating',
    tip: 'Ovisiti O + lokativ (ne „od” — to je regionalno/razgovorno).',
  },
  {
    mode: 'padezi',
    q: 'Odbor raspolaže ____ za obnovu škole.',
    opts: ['sredstvima', 'sredstva', 'sredstava', 'o sredstvima'],
    answer: 'sredstvima',
    en: 'the committee has funds at its disposal for the school renovation',
    tip: 'Raspolagati + instrumental: raspolagati sredstvima.',
  },
  {
    mode: 'padezi',
    q: 'Radujemo se ____ u rujnu.',
    opts: ['vašem dolasku', 'vaš dolazak', 'vašeg dolaska', 'o vašem dolasku'],
    answer: 'vašem dolasku',
    en: 'we look forward to your arrival in September',
    tip: 'Radovati se + dativ: radovati se dolasku.',
  },
  {
    mode: 'padezi',
    q: 'Unatoč ____, sjednica je održana.',
    opts: ['prosvjedima', 'prosvjeda', 'prosvjede', 's prosvjedima'],
    answer: 'prosvjedima',
    en: 'despite the protests, the session was held',
    tip: 'Unatoč + DATIV: unatoč prosvjedima (ne genitiv).',
  },
  {
    mode: 'padezi',
    q: 'Tvrtka se odrekla ____ na žalbu.',
    opts: ['prava', 'pravo', 'pravu', 'pravom'],
    answer: 'prava',
    en: 'the company waived its right to appeal',
    tip: 'Odreći se + GENITIV: odreći se prava.',
  },
  {
    mode: 'padezi',
    q: 'Ravnateljica upravlja ____ već deset godina.',
    opts: ['ustanovom', 'ustanovu', 'ustanove', 'nad ustanovom'],
    answer: 'ustanovom',
    en: 'the director has been managing the institution for ten years',
    tip: 'Upravljati + instrumental: upravljati ustanovom.',
  },
  {
    mode: 'padezi',
    q: 'Pristupili smo ____ problema vrlo ozbiljno.',
    opts: ['rješavanju', 'rješavanje', 'rješavanja', 'na rješavanje'],
    answer: 'rješavanju',
    en: 'we approached solving the problem very seriously',
    tip: 'Pristupiti + dativ: pristupiti rješavanju.',
  },
  {
    mode: 'registar',
    q: 'U službenom dopisu najprikladnije je: „____ vas da dostavite dokumentaciju.”',
    opts: ['Molimo', 'Trebamo', 'Hoćemo', 'Tražimo od'],
    answer: 'Molimo',
    en: 'formal request wording in an official letter',
    tip: 'Službeni registar: Molimo vas da… (uljudni performativ).',
  },
  {
    mode: 'registar',
    q: 'Formalno se ispričavamo: „Ispričavamo se ____ neugodnosti.”',
    opts: ['zbog', 'radi', 'od', 'o'],
    answer: 'zbog',
    en: 'we apologize for the inconvenience',
    tip: 'Ispričati se ZBOG + genitiv (uzrok), standardno u dopisima.',
  },
  {
    mode: 'registar',
    q: 'U molbi zvuči najprofesionalnije: „____ bih se za mjesto lektora.”',
    opts: ['Prijavio', 'Javio', 'Upisao', 'Zapisao'],
    answer: 'Prijavio',
    en: 'I would like to apply for the position of language editor',
    tip: 'Prijaviti se ZA radno mjesto; „javiti se” je manje formalno.',
  },
  {
    mode: 'registar',
    q: 'Neutralno-formalna zamjena za razgovorno „šef”:',
    opts: ['nadređeni', 'gazda', 'glavni', 'poslodavac'],
    answer: 'nadređeni',
    en: 'the neutral-formal word for one’s boss',
    tip: 'Nadređeni (osoba iznad vas); poslodavac je pravni pojam, gazda razgovorno.',
  },
  {
    mode: 'registar',
    q: 'U izvješću: „Rezultati ____ da je potražnja porasla.”',
    opts: ['upućuju na to', 'kažu', 'pričaju', 'govore o tome'],
    answer: 'upućuju na to',
    en: 'the results indicate that demand has grown',
    tip: 'Upućivati na to da… — precizna akademska sveza.',
  },
  {
    mode: 'registar',
    q: 'Formalna isprika kad nekoga prekidate: „Oprostite ____.”',
    opts: ['na smetnji', 'u smetnji', 'od smetnje', 'na smetnju'],
    answer: 'na smetnji',
    en: 'excuse the interruption',
    tip: 'Oprostite na smetnji — ustaljena uljudna formula (na + lokativ).',
  },
  {
    mode: 'registar',
    q: 'U akademskom tekstu: „Autorica ____ tezu trima argumentima.”',
    opts: ['potkrepljuje', 'podupire se', 'pokazuje', 'dokaže'],
    answer: 'potkrepljuje',
    en: 'the author supports her thesis with three arguments',
    tip: 'Potkrijepiti tezu/tvrdnju argumentima — akademska kolokacija.',
  },
  {
    mode: 'registar',
    q: 'Službena obavijest: „Ured ne radi ____ blagdana.”',
    opts: ['zbog', 'radi', 'na', 'kroz'],
    answer: 'zbog',
    en: 'the office is closed because of the holiday',
    tip: 'ZBOG = uzrok; RADI = namjera. Blagdan je uzrok zatvaranja.',
  },
];

export { DATA as KOLOKACIJE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function KolokacijeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="kolokacije"
      title={'🤝 Kolokacije'}
      subtitle={'donijeti odluku — the pairings natives never break'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — govorite kao izvorni govornik! 🏆',
        good: 'Vrlo dobro vladanje ustaljenim svezama! 💪',
        more: 'Kolokacije i rekcija traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
