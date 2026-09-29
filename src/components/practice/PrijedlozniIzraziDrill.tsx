import React from 'react';
import ModeDrill from './ModeDrill';

// C1 prepositional-expressions drill (C1 tranche 2, 2026-08-15): the complex
// prepositions of formal prose (s obzirom na, u skladu s, glede, putem),
// commonly confused simple pairs, and the cases the bookish prepositions
// govern (nasuprot+D, diljem+G, uoči+G).
const MODE_LABEL: Record<string, string> = {
  slozeni: '🏛️ Složeni prijedlozi',
  razlike: '⚔️ Česte zamjene',
  padez: '🎯 Koji padež?',
};

const DATA = [
  {
    mode: 'slozeni',
    q: '____ na okolnosti, odlučili smo odgoditi izlet.',
    opts: ['S obzirom', 'Obzirom', 'U obziru', 'Po obziru'],
    answer: 'S obzirom',
    en: 'considering the circumstances, we decided to postpone the trip',
    tip: 'Standard: S OBZIROM na; samo „obzirom” je razgovorno.',
  },
  {
    mode: 'slozeni',
    q: 'Postupili smo ____ s propisima.',
    opts: ['u skladu', 'na skladu', 'po skladu', 'u složnosti'],
    answer: 'u skladu',
    en: 'we acted in accordance with the regulations',
    tip: 'U skladu s(a) čim — ustaljeni administrativni izraz.',
  },
  {
    mode: 'slozeni',
    q: 'Svečanost ____ Dana državnosti održat će se sutra.',
    opts: ['u povodu', 'povodom na', 'u povodu na', 'za povod'],
    answer: 'u povodu',
    en: 'the ceremony on the occasion of Statehood Day is tomorrow',
    tip: 'U povodu + genitiv (dopušteno i: povodom + G).',
  },
  {
    mode: 'slozeni',
    q: 'Prijave se šalju ____ elektroničke pošte.',
    opts: ['putem', 'preko puta', 'na putu', 's putem'],
    answer: 'putem',
    en: 'applications are sent by e-mail',
    tip: 'Putem + G = posredstvom, sredstvom (administrativni stil).',
  },
  {
    mode: 'slozeni',
    q: '____ vašeg upita, u privitku dostavljamo ponudu.',
    opts: ['Glede', 'Gledom', 'U gledu', 'Na gled'],
    answer: 'Glede',
    en: 'regarding your inquiry, please find our offer attached',
    tip: 'Glede + genitiv = u vezi s, s obzirom na.',
  },
  {
    mode: 'slozeni',
    q: 'Radovi na cesti trajat će ____ cijele zime.',
    opts: ['tijekom', 'u tijeku od', 'kroz tijekom', 'na tijeku'],
    answer: 'tijekom',
    en: 'the roadworks will last throughout the winter',
    tip: 'Tijekom + G izriče protezanje kroz vrijeme.',
  },
  {
    mode: 'slozeni',
    q: 'Prosvjed je održan ____ zgrade Vlade.',
    opts: ['ispred', 'naspram od', 'sprijeda', 'ispred od'],
    answer: 'ispred',
    en: 'the protest was held in front of the Government building',
    tip: 'Ispred + G, bez suvišnoga „od”.',
  },
  {
    mode: 'slozeni',
    q: '____ svih napora, projekt nije uspio.',
    opts: ['Usprkos', 'Usprkos na', 'Protiv', 'Uz prkos'],
    answer: 'Usprkos',
    en: 'despite all efforts, the project did not succeed',
    tip: 'Usprkos + DATIV: usprkos naporima.',
  },
  {
    mode: 'razlike',
    q: 'Neutralnom standardu bliže je: „____ oluje otkazani su letovi.”',
    opts: ['Zbog', 'Uslijed', 'Kroz', 'Preko'],
    answer: 'Zbog',
    en: 'the flights were cancelled because of the storm',
    tip: '„Uslijed” je birokratizam — neutralno je zbog.',
  },
  {
    mode: 'razlike',
    q: 'Ostavi rezervni ključ ____ susjede.',
    opts: ['kod', 'pri', 'na', 'pored'],
    answer: 'kod',
    en: 'leave the spare key with the neighbour',
    tip: 'Kod + G = u čijem domu/čuvanju.',
  },
  {
    mode: 'razlike',
    q: '„____ ruci imam samo staru kartu grada.”',
    opts: ['Pri', 'Kod', 'Po', 'Na'],
    answer: 'Pri',
    en: 'I only have an old city map at hand',
    tip: 'Pri ruci = nadohvat — ustaljeni izraz s pri + L.',
  },
  {
    mode: 'razlike',
    q: 'Standardno: „Sastanak je ____ ponedjeljak u devet.”',
    opts: ['u', 'na', 'o', 'po'],
    answer: 'u',
    en: 'the meeting is on Monday at nine',
    tip: 'Dani u tjednu: u ponedjeljak, u petak (u + A).',
  },
  {
    mode: 'razlike',
    q: 'Prepoznao sam ga ____ glasu.',
    opts: ['po', 'na', 'o', 'iz'],
    answer: 'po',
    en: 'I recognized him by his voice',
    tip: 'Po + L izriče kriterij: po glasu, po hodu, po rukopisu.',
  },
  {
    mode: 'razlike',
    q: 'Došli su ____ posla ravno na večeru.',
    opts: ['s', 'sa', 'iz', 'od'],
    answer: 's',
    en: 'they came straight from work to dinner',
    tip: 'S posla (sa samo ispred s, š, z, ž); iz ide s unutrašnjosti prostora.',
  },
  {
    mode: 'razlike',
    q: 'Izvadio je novčanik ____ unutarnjeg džepa.',
    opts: ['iz', 's', 'od', 'izvan'],
    answer: 'iz',
    en: 'he took his wallet out of the inside pocket',
    tip: 'Iz + G = iz unutrašnjosti; s + G = s površine.',
  },
  {
    mode: 'razlike',
    q: 'Stan se nalazi ____ samog centra.',
    opts: ['blizu', 'blizu od', 'pokraj od', 'uz do'],
    answer: 'blizu',
    en: 'the flat is close to the very centre',
    tip: 'Blizu + G bez „od”: blizu centra.',
  },
  {
    mode: 'padez',
    q: 'Pomoću ____ riješili smo cijeli zadatak. (rječnik)',
    opts: ['rječnika', 'rječniku', 'rječnikom', 'rječnik'],
    answer: 'rječnika',
    en: 'with the help of a dictionary we solved the whole task',
    tip: 'Pomoću + GENITIV.',
  },
  {
    mode: 'padez',
    q: 'Nasuprot ____ nalazi se park. (zgrada)',
    opts: ['zgradi', 'zgrade', 'zgradom', 'zgradu'],
    answer: 'zgradi',
    en: 'opposite the building there is a park',
    tip: 'Nasuprot + DATIV (kao usprkos, unatoč).',
  },
  {
    mode: 'padez',
    q: 'Unutar ____ vlada potpuna tišina. (samostan)',
    opts: ['samostana', 'samostanu', 'samostanom', 'samostan'],
    answer: 'samostana',
    en: 'complete silence reigns inside the monastery',
    tip: 'Unutar + GENITIV.',
  },
  {
    mode: 'padez',
    q: 'Koncerti se održavaju diljem ____. (Hrvatska)',
    opts: ['Hrvatske', 'Hrvatskoj', 'Hrvatsku', 'Hrvatskom'],
    answer: 'Hrvatske',
    en: 'concerts are held all over Croatia',
    tip: 'Diljem + GENITIV: diljem Hrvatske, diljem svijeta.',
  },
  {
    mode: 'padez',
    q: 'Uoči ____ ulice su prepune. (blagdani)',
    opts: ['blagdana', 'blagdanima', 'blagdane', 'blagdanom'],
    answer: 'blagdana',
    en: 'on the eve of the holidays the streets are packed',
    tip: 'Uoči + GENITIV: uoči blagdana, uoči izbora.',
  },
  {
    mode: 'padez',
    q: 'Pjeva poput ____. (slavuj)',
    opts: ['slavuja', 'slavuju', 'slavujem', 'slavuj'],
    answer: 'slavuja',
    en: 'she sings like a nightingale',
    tip: 'Poput + GENITIV.',
  },
  {
    mode: 'padez',
    q: 'Prigodom ____ otvorena je izložba. (obljetnica)',
    opts: ['obljetnice', 'obljetnici', 'obljetnicom', 'obljetnicu'],
    answer: 'obljetnice',
    en: 'an exhibition was opened on the occasion of the anniversary',
    tip: 'Prigodom + GENITIV.',
  },
  {
    mode: 'padez',
    q: 'Usred ____ zazvonio je telefon. (predavanje)',
    opts: ['predavanja', 'predavanju', 'predavanjem', 'predavanje'],
    answer: 'predavanja',
    en: 'the phone rang in the middle of the lecture',
    tip: 'Usred + GENITIV.',
  },
];

export { DATA as PRIJEDLOZNI_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PrijedlozniIzraziDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="prijedlozni"
      title={'🧭 Prijedložni izrazi'}
      subtitle={'s obzirom na — the connective tissue of formal Croatian'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — prijedlozi su vam saveznici! 🏆',
        good: 'Vrlo dobro vladanje prijedlozima! 💪',
        more: 'Prijedložni izrazi traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
