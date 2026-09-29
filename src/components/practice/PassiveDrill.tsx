import React from 'react';
import ModeDrill from './ModeDrill';

const DATA = [
  {
    q: 'Croatian is spoken here. = Ovdje ___ hrvatski.',
    opts: ['se govori', 'se govoriti', 'govori se ti', 'govoriti'],
    answer: 'se govori',
    en: 'Croatian is spoken here.',
    tip: "se-passive: 3rd sg (impersonal). Clitic 'se' precedes the verb: 'se govori'",
  },
  {
    q: 'The house is being built. = Kuća ___.',
    opts: ['se gradi', 'se grade', 'se graditi', 'gradi ti'],
    answer: 'se gradi',
    en: 'The house is being built.',
    tip: "se-passive: kuća (fem sg) → verb in 3rd sg: 'se gradi'",
  },
  {
    q: 'The books are being sold. = Knjige ___.',
    opts: ['se prodaju', 'se prodaje', 'prodati se', 'se prodati'],
    answer: 'se prodaju',
    en: 'The books are being sold.',
    tip: "se-passive: knjige (fem pl) → verb in 3rd pl: 'se prodaju'",
  },
  {
    q: 'The window is opened. = Prozor ___.',
    opts: ['se otvara', 'se otvaraju', 'otvoriti se', 'se otvoriti'],
    answer: 'se otvara',
    en: 'The window is opened.',
    tip: "se-passive: prozor (masc sg) → verb in 3rd sg: 'se otvara'",
  },
  {
    q: 'The meeting is held every week. = Sastanak ___ svaki tjedan.',
    opts: ['se održava', 'se održavaju', 'se je održan', 'je se'],
    answer: 'se održava',
    en: 'The meeting is held every week.',
    tip: "se-passive, habitual → imperfective: 'se održava' (3rd sg)",
  },
  {
    q: 'Movies are watched in the evening. = Filmovi ___ navečer.',
    opts: ['se gledaju', 'se gleda', 'gledati se', 'je gledano'],
    answer: 'se gledaju',
    en: 'Movies are watched in the evening.',
    tip: "se-passive: filmovi (masc pl) → 3rd pl: 'se gledaju'",
  },
  {
    q: 'The letter has been written. = Pismo je ___.',
    opts: ['napisano', 'napisan', 'napisana', 'napisani'],
    answer: 'napisano',
    en: 'The letter has been written.',
    tip: "Passive participle: pismo (neuter sg) → -o ending: 'napisano'",
  },
  {
    q: 'The door was opened. = Vrata su bila ___.',
    opts: ['otvorena', 'otvoren', 'otvoreno', 'otvoreni'],
    answer: 'otvorena',
    en: 'The door was opened.',
    tip: "Passive participle: vrata (neuter pl) → -a ending: 'otvorena'",
  },
  {
    q: 'The city was built in the 15th century. = Grad je bio ___ u 15. stoljeću.',
    opts: ['izgrađen', 'izgrađena', 'izgrađeno', 'izgrađeni'],
    answer: 'izgrađen',
    en: 'The city was built in the 15th century.',
    tip: "Passive participle: grad (masculine sg) → no suffix: 'izgrađen'",
  },
  {
    q: 'The song was sung. = Pjesma je bila ___.',
    opts: ['pjevana', 'pjevan', 'pjevano', 'pjevani'],
    answer: 'pjevana',
    en: 'The song was sung.',
    tip: "Passive participle: pjesma (feminine sg) → -a ending: 'pjevana'",
  },
  {
    q: 'The guests were welcomed. = Gosti su bili ___.',
    opts: ['dočekani', 'dočekan', 'dočekana', 'dočekano'],
    answer: 'dočekani',
    en: 'The guests were welcomed.',
    tip: "Passive participle: gosti (masc pl) → -i ending: 'dočekani'",
  },
  {
    q: 'The problem was solved. = Problem je ___.',
    opts: ['riješen', 'se riješiti', 'riješena', 'riješeno'],
    answer: 'riješen',
    en: 'The problem was solved.',
    tip: "biti + participle: problem (masc sg) → 'je riješen'. riješiti → riješen",
  },
  {
    q: 'The exam is taken every June. = Ispit ___ svakog lipnja.',
    opts: ['se polaže', 'je položen', 'se položiti', 'se polažu'],
    answer: 'se polaže',
    en: 'The exam is taken every June.',
    tip: "Habitual/repeated → se-passive with imperfective: 'se polaže' (polagati)",
  },
  {
    q: 'The house was sold last year. = Kuća je bila ___ prošle godine.',
    opts: ['prodana', 'prodan', 'prodano', 'prodani'],
    answer: 'prodana',
    en: 'The house was sold last year.',
    tip: "Passive participle: kuća (fem sg) → -a ending: 'prodana'. prodati → prodan- → prodana",
  },
  {
    q: 'Three languages are spoken here. = Ovdje ___ tri jezika.',
    opts: ['se govore', 'se govori', 'govori se', 'je govoreno'],
    answer: 'se govore',
    en: 'Three languages are spoken here.',
    tip: "se-passive: tri jezika → verb in 3rd pl: 'se govore'",
  },
  {
    q: 'The novel was written by Šenoa. = Roman je bio napisan ___ Šenoe.',
    opts: ['od', 's', 'za', 'iz'],
    answer: 'od',
    en: 'The novel was written by Šenoa.',
    tip: "Agent in biti+participle passive: 'od + genitive'. od Šenoe = by Šenoa",
  },
  {
    q: 'The letter was sent. = Pismo ___ poslano.',
    opts: ['je', 'se je', 'je se', 'bilo'],
    answer: 'je',
    en: 'The letter was sent.',
    tip: "biti + participle: 'je' (3rd sg present) + 'poslano' (neut sg). No 'se' in this construction.",
  },
  {
    q: 'Tickets are sold at the entrance. = Karte ___ na ulazu.',
    opts: ['se prodaju', 'su prodane', 'se prodati', 'prodaju se ne'],
    answer: 'se prodaju',
    en: 'Tickets are sold at the entrance.',
    tip: "se-passive, habitual: karte (fem pl) → 'se prodaju' (3rd pl imperfective)",
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Choose the correct passive construction' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PassiveDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="passive"
      title={'🔄 Passive Voice'}
      subtitle={'Se-passive and biti+participle constructions'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Passive voice mastered! 🏆',
        good: 'Great work! 💪',
        more: 'Keep practising — passive takes time!',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
