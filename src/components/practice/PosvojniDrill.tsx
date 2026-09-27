import React from 'react';
import ModeDrill from './ModeDrill';

// B2 possessive-adjectives drill (B2 tranche 4, 2026-08-15): formation
// (-ov/-ev/-in with c→č and fleeting a), adjective-vs-genitive choice
// (bratov auto but stan nase bake), and the indefinite declension of
// possessives (u Ivanovu autu, iz bakina vrta).
const MODE_LABEL: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  uporaba: '⚖️ Pridjev ili genitiv',
  sklonidba: '📐 Sklonidba',
};

const DATA = [
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „Ivan” glasi:',
    opts: ['Ivanov', 'Ivanev', 'Ivanin', 'Ivanski'],
    answer: 'Ivanov',
    en: 'Ivan\u2019s',
    tip: 'Muška imena na suglasnik: -ov (Ivanov).',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „Marija” glasi:',
    opts: ['Marijin', 'Marijev', 'Marijov', 'Marijski'],
    answer: 'Marijin',
    en: 'Marija\u2019s',
    tip: 'Imenice na -a: -in (Marijin, mamin).',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „prijatelj” glasi:',
    opts: ['prijateljev', 'prijateljov', 'prijateljin', 'prijateljski'],
    answer: 'prijateljev',
    en: 'the friend\u2019s',
    tip: 'Iza nepčanika (lj, nj, č, ž, š, j): -EV.',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „sestra” glasi:',
    opts: ['sestrin', 'sestrov', 'sestrev', 'sestrinski'],
    answer: 'sestrin',
    en: 'the sister\u2019s',
    tip: 'Sestra → sestrin (-a → -in).',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „Marko” glasi:',
    opts: ['Markov', 'Markev', 'Markin', 'Markovski'],
    answer: 'Markov',
    en: 'Marko\u2019s',
    tip: 'Muška imena na -o: osnova + -ov (Markov).',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „učiteljica” glasi:',
    opts: ['učiteljičin', 'učiteljicin', 'učiteljičev', 'učiteljicov'],
    answer: 'učiteljičin',
    en: 'the teacher\u2019s (f)',
    tip: 'Ispred -in c prelazi u č: učiteljičin, kraljičin.',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „stric” glasi:',
    opts: ['stričev', 'stricov', 'stricev', 'stričin'],
    answer: 'stričev',
    en: 'the uncle\u2019s',
    tip: 'C → č + -ev: stričev.',
  },
  {
    mode: 'tvorba',
    q: 'Posvojni pridjev od „Petar” glasi:',
    opts: ['Petrov', 'Petarov', 'Petrin', 'Petrev'],
    answer: 'Petrov',
    en: 'Petar\u2019s',
    tip: 'Nepostojano a ispada: Petar → Petrov.',
  },
  {
    mode: 'uporaba',
    q: '„Auto moga brata” uz samo ime kraće kažemo:',
    opts: ['bratov auto', 'brata auto', 'bratski auto', 'auto od brat'],
    answer: 'bratov auto',
    en: 'my brother\u2019s car — possessive adjective',
    tip: 'Jednorječni posjednik → posvojni pridjev.',
  },
  {
    mode: 'uporaba',
    q: 'Posvojni pridjev NE možemo upotrijebiti kad:',
    opts: [
      'je posjednik proširen (moga starijeg brata)',
      'je posjednik osoba',
      'je posjednik jedna riječ',
      'imenica počinje samoglasnikom',
    ],
    answer: 'je posjednik proširen (moga starijeg brata)',
    en: 'possessive adjectives fail with expanded possessors',
    tip: 'Auto moga starijeg brata — mora genitiv.',
  },
  {
    mode: 'uporaba',
    q: 'Birani standard preferira:',
    opts: ['Ivanov auto', 'auto Ivana', 'auto od Ivana', 'Ivana auto'],
    answer: 'Ivanov auto',
    en: 'the possessive adjective beats the genitive',
    tip: 'Uz neprošireno ime: pridjev, ne genitiv.',
  },
  {
    mode: 'uporaba',
    q: '„Kuća ____ ” (djed) s posvojnim pridjevom:',
    opts: ['djedova kuća', 'djeda kuća', 'kuća od djeda', 'djedovska kuća'],
    answer: 'djedova kuća',
    en: 'grandfather\u2019s house',
    tip: 'Djed → djedov, djedova, djedovo.',
  },
  {
    mode: 'uporaba',
    q: '„____ torba” (Ana):',
    opts: ['Anina', 'Anova', 'Anijina', 'Anska'],
    answer: 'Anina',
    en: 'Ana\u2019s bag',
    tip: 'Ana → Anin, Anina, Anino.',
  },
  {
    mode: 'uporaba',
    q: '„Stan ____ ” (naša baka — prošireni posjednik):',
    opts: ['naše bake', 'naš bakin', 'naše bakin', 'našin bake'],
    answer: 'naše bake',
    en: 'our grandmother\u2019s flat — genitive',
    tip: 'Prošireni posjednik → genitiv: stan naše bake.',
  },
  {
    mode: 'uporaba',
    q: '„Shakespeareova drama” pokazuje da strana imena:',
    opts: [
      'normalno tvore posvojni pridjev',
      'ne mogu tvoriti pridjev',
      'traže samo genitiv',
      'gube završni samoglasnik',
    ],
    answer: 'normalno tvore posvojni pridjev',
    en: 'foreign names form possessives too',
    tip: 'Shakespeareov, Goetheov, Camusov.',
  },
  {
    mode: 'uporaba',
    q: 'Od imenica na -a posvojni je nastavak:',
    opts: ['-in (mamin)', '-ov (mamov)', '-ev (mamev)', '-ji (mamji)'],
    answer: '-in (mamin)',
    en: 'a-stem nouns take -in',
    tip: 'Mama → mamin, tata → tatin, Luka → Lukin.',
  },
  {
    mode: 'sklonidba',
    q: 'U ____ autu ima mjesta. (Ivanov, birano)',
    opts: ['Ivanovu', 'Ivanovom', 'Ivanovome', 'Ivanova'],
    answer: 'Ivanovu',
    en: 'in Ivan\u2019s car (formal locative)',
    tip: 'Posvojni na -ov/-in: neodređena sklonidba — u Ivanovu autu.',
  },
  {
    mode: 'sklonidba',
    q: 'Posvojni pridjevi na -ov/-in sklanjaju se po:',
    opts: [
      'neodređenoj (imeničkoj) sklonidbi',
      'određenoj sklonidbi',
      'pridjevsko-zamjeničkoj uvijek',
      'ne sklanjaju se',
    ],
    answer: 'neodređenoj (imeničkoj) sklonidbi',
    en: 'possessives decline like nouns (indefinite)',
    tip: 'Ivanova, Ivanovu, s Ivanovim — bez -oga/-omu.',
  },
  {
    mode: 'sklonidba',
    q: 'Vidio sam ____ brata. (Markov)',
    opts: ['Markova', 'Markovog', 'Markovoga', 'Markovu'],
    answer: 'Markova',
    en: 'I saw Marko\u2019s brother',
    tip: 'A za živo = G neodređene sklonidbe: Markova brata.',
  },
  {
    mode: 'sklonidba',
    q: 'Razgovarao sam s ____ sestrom. (Petrov)',
    opts: ['Petrovom', 'Petrovoj', 'Petrove', 'Petrovim'],
    answer: 'Petrovom',
    en: 'I talked with Petar\u2019s sister',
    tip: 'I jd. ž. r.: s Petrovom sestrom.',
  },
  {
    mode: 'sklonidba',
    q: '„U Ivanovom autu” u biranom stilu glasi:',
    opts: ['u Ivanovu autu', 'u Ivanovome autu', 'u Ivanova auta', 'u Ivanov autu'],
    answer: 'u Ivanovu autu',
    en: 'formal register drops -om',
    tip: 'Neodređeni L jd.: Ivanovu (bez -om/-ome).',
  },
  {
    mode: 'sklonidba',
    q: 'Genitiv od „Anin stan” glasi:',
    opts: ['Anina stana', 'Aninog stana', 'Aninoga stana', 'Anine stane'],
    answer: 'Anina stana',
    en: 'of Ana\u2019s flat (formal)',
    tip: 'Neodređena sklonidba: Anina stana, Aninu stanu.',
  },
  {
    mode: 'sklonidba',
    q: 'Dali smo ____ psu hranu. (susjedov)',
    opts: ['susjedovu', 'susjedovom', 'susjedovome', 'susjedova'],
    answer: 'susjedovu',
    en: 'we fed the neighbour\u2019s dog',
    tip: 'D jd. neodređeno: susjedovu psu.',
  },
  {
    mode: 'sklonidba',
    q: 'Birano „iz bakina vrta” ima genitivni nastavak:',
    opts: ['-a (bakina)', '-og (bakinog)', '-oga (bakinoga)', '-e (bakine)'],
    answer: '-a (bakina)',
    en: 'from grandma\u2019s garden',
    tip: 'G jd. neodređene sklonidbe: bakina vrta.',
  },
];

export { DATA as POSVOJNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PosvojniDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="posvojni"
      title={'🔑 Posvojni pridjevi'}
      subtitle={'Ivanov, Marijin, stričev — whose is it, in one word'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — posvojni su vaši! 🏆',
        good: 'Vrlo dobro vladanje posvojnim pridjevima! 💪',
        more: 'Posvojni pridjevi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
