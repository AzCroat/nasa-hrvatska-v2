import React from 'react';
import ModeDrill from './ModeDrill';

// C1 proper-name declension drill (C1 tranche 2, 2026-08-15): the cases of
// personal names (incl. foreign), place names (fleeting a, sibilarization,
// adjectival toponyms, pluralia tantum), and titles — where heritage
// speakers most visibly deviate from the standard.
const MODE_LABEL: Record<string, string> = {
  osobna: '🧑 Osobna imena',
  zemljopisna: '🗺️ Zemljopisna imena',
  titule: '🎓 Titule i apozicije',
};

const DATA = [
  {
    mode: 'osobna',
    q: 'Razgovarao sam s ____ o književnosti. (Ivo Andrić)',
    opts: ['Ivom Andrićem', 'Ivo Andrićem', 'Ivom Andrić', 'Ivu Andriću'],
    answer: 'Ivom Andrićem',
    en: 'I talked with Ivo Andrić about literature',
    tip: 'Muškarcu se sklanjaju I ime I prezime: s Ivom Andrićem.',
  },
  {
    mode: 'osobna',
    q: 'Poklonila je knjigu ____. (Ana Horvat)',
    opts: ['Ani Horvat', 'Ani Horvatovoj', 'Ana Horvat', 'Anu Horvat'],
    answer: 'Ani Horvat',
    en: 'she gave the book to Ana Horvat',
    tip: 'Žensko prezime na suglasnik ostaje nesklonjeno: Ani Horvat.',
  },
  {
    mode: 'osobna',
    q: 'Gledali smo film s ____. (George Clooney)',
    opts: ['Georgeom Clooneyjem', 'Georgeom Clooneyem', 'George Clooneyjem', 'Georgom Clooneyjem'],
    answer: 'Georgeom Clooneyjem',
    en: 'we watched a film with George Clooney',
    tip: 'Strana imena dobivaju hrvatske nastavke; iza -y umeće se j: Clooneyjem.',
  },
  {
    mode: 'osobna',
    q: 'Najviše se divim ____. (Luka Modrić)',
    opts: ['Luki Modriću', 'Luku Modriću', 'Luki Modrić', 'Luka Modriću'],
    answer: 'Luki Modriću',
    en: 'I admire Luka Modrić the most',
    tip: 'Imena na -a sklanjaju se po e-vrsti: Luka → Luki (u osobnih imena nema sibilarizacije).',
  },
  {
    mode: 'osobna',
    q: 'Pismo je stiglo od ____. (Ivica)',
    opts: ['Ivice', 'Ivica', 'Ivici', 'Ivicu'],
    answer: 'Ivice',
    en: 'the letter arrived from Ivica',
    tip: 'Genitiv imena na -a: od Ivice (kao od sestre).',
  },
  {
    mode: 'osobna',
    q: 'Sreo sam ____ na tržnici. (Ante)',
    opts: ['Antu', 'Anteta', 'Antea', 'Anta'],
    answer: 'Antu',
    en: 'I met Ante at the market',
    tip: 'Imena na -e (Ante, Mate) sklanjaju se po e-vrsti: A Antu.',
  },
  {
    mode: 'osobna',
    q: 'To je automobil ____. (Karlo)',
    opts: ['Karla', 'Karle', 'Karloa', 'Karlota'],
    answer: 'Karla',
    en: 'that is Karlo’s car',
    tip: 'Imena na -o sklanjaju se po a-vrsti: G Karla.',
  },
  {
    mode: 'osobna',
    q: 'Razgovor s ____ ušao je u povijest. (Nikola Tesla)',
    opts: ['Nikolom Teslom', 'Nikolom Tesla', 'Nikola Teslom', 'Nikoli Tesli'],
    answer: 'Nikolom Teslom',
    en: 'the conversation with Nikola Tesla went down in history',
    tip: 'Oba se člana sklanjaju: s Nikolom Teslom.',
  },
  {
    mode: 'zemljopisna',
    q: 'Ljetujemo u ____. (Poreč)',
    opts: ['Poreču', 'Poreči', 'Porečju', 'Porču'],
    answer: 'Poreču',
    en: 'we spend summers in Poreč',
    tip: 'Lokativ: u Poreču (kao u Zagrebu).',
  },
  {
    mode: 'zemljopisna',
    q: 'Vraćamo se iz ____. (Zadar)',
    opts: ['Zadra', 'Zadara', 'Zadru', 'Zadera'],
    answer: 'Zadra',
    en: 'we are coming back from Zadar',
    tip: 'Nepostojano a: Zadar → iz Zadra.',
  },
  {
    mode: 'zemljopisna',
    q: 'Žive u ____ već deset godina. (Vinkovci)',
    opts: ['Vinkovcima', 'Vinkovci', 'Vinkovcem', 'Vinkovcah'],
    answer: 'Vinkovcima',
    en: 'they have lived in Vinkovci for ten years',
    tip: 'Vinkovci su plurale tantum — ime postoji samo u množini: u Vinkovcima.',
  },
  {
    mode: 'zemljopisna',
    q: 'Most vodi prema ____. (Pelješac)',
    opts: ['Pelješcu', 'Pelješacu', 'Pelješca', 'Pelješću'],
    answer: 'Pelješcu',
    en: 'the bridge leads towards Pelješac',
    tip: 'Nepostojano a: Pelješac → Pelješcu.',
  },
  {
    mode: 'zemljopisna',
    q: 'Stanuje u ____ već godinu dana. (Rijeka)',
    opts: ['Rijeci', 'Rijeki', 'Rijekoj', 'Rieci'],
    answer: 'Rijeci',
    en: 'she has lived in Rijeka for a year',
    tip: 'Sibilarizacija u lokativu: Rijeka → u Rijeci.',
  },
  {
    mode: 'zemljopisna',
    q: 'Plaže u ____ su prekrasne. (Makarska)',
    opts: ['Makarskoj', 'Makarski', 'Makarskama', 'Makarskoji'],
    answer: 'Makarskoj',
    en: 'the beaches in Makarska are beautiful',
    tip: 'Imena na -ska sklanjaju se kao pridjevi: u Makarskoj, u Hrvatskoj.',
  },
  {
    mode: 'zemljopisna',
    q: 'Poznato vino dolazi iz ____. (Međimurje)',
    opts: ['Međimurja', 'Međimurje', 'Međimurjea', 'Međimurji'],
    answer: 'Međimurja',
    en: 'the famous wine comes from Međimurje',
    tip: 'Genitiv srednjega roda: iz Međimurja (kao iz polja).',
  },
  {
    mode: 'zemljopisna',
    q: 'U ____ već pada snijeg. (Gorski kotar)',
    opts: ['Gorskom kotaru', 'Gorskom kotoru', 'Gorski kotaru', 'Gorskomu kotar'],
    answer: 'Gorskom kotaru',
    en: 'it is already snowing in Gorski kotar',
    tip: 'Sklanjaju se oba člana: u Gorskom kotaru.',
  },
  {
    mode: 'titule',
    q: 'Dogovorili smo sastanak s ____ Marijom Novak. (doktorica)',
    opts: ['doktoricom', 'doktoricu', 'doktorica', 'doktorici'],
    answer: 'doktoricom',
    en: 'we arranged a meeting with Dr Marija Novak',
    tip: 'Titula se slaže s imenom u padežu: s doktoricom Marijom.',
  },
  {
    mode: 'titule',
    q: 'Pismo je upućeno predsjedniku ____. (Republika Hrvatska)',
    opts: ['Republike Hrvatske', 'Republike Hrvatska', 'Republici Hrvatskoj', 'Republiku Hrvatsku'],
    answer: 'Republike Hrvatske',
    en: 'the letter is addressed to the President of the Republic of Croatia',
    tip: 'Genitiv pripadnosti: predsjednik Republike Hrvatske.',
  },
  {
    mode: 'titule',
    q: 'Novinari razgovaraju s gospođom ____.',
    opts: ['Kovač', 'Kovačem', 'Kovačicom', 'Kovačevom'],
    answer: 'Kovač',
    en: 'the journalists are talking with Mrs K.',
    tip: 'Žensko prezime na suglasnik ne sklanja se: s gospođom Kovač.',
  },
  {
    mode: 'titule',
    q: 'Nagrada je pripala profesoru ____. (Horvat)',
    opts: ['Horvatu', 'Horvat', 'Horvate', 'Horvata'],
    answer: 'Horvatu',
    en: 'the award went to Professor Horvat',
    tip: 'Muško prezime SE sklanja: profesoru Horvatu.',
  },
  {
    mode: 'titule',
    q: 'Šetali smo ulicom ____. (Marin Držić)',
    opts: ['Marina Držića', 'Marine Držića', 'Marin Držića', 'Marinu Držiću'],
    answer: 'Marina Držića',
    en: 'we walked along Marin Držić Street',
    tip: 'Ulica (koga?) Marina Držića — genitiv obaju članova.',
  },
  {
    mode: 'titule',
    q: 'Slušali smo predavanje akademika ____. (Babić)',
    opts: ['Babića', 'Babiću', 'Babić', 'Babićem'],
    answer: 'Babića',
    en: 'we attended Academician Babić’s lecture',
    tip: 'Predavanje (koga?) akademika Babića — genitiv.',
  },
  {
    mode: 'titule',
    q: 'S kolegicom ____ idem na kongres. (Ivana)',
    opts: ['Ivanom', 'Ivanu', 'Ivani', 'Ivane'],
    answer: 'Ivanom',
    en: 'I am going to the congress with my colleague Ivana',
    tip: 'Instrumental: s kolegicom Ivanom.',
  },
  {
    mode: 'titule',
    q: 'Žalba se podnosi ____ sudu u Zagrebu. (Trgovački)',
    opts: ['Trgovačkom', 'Trgovački', 'Trgovačkoga', 'Trgovačkim'],
    answer: 'Trgovačkom',
    en: 'the appeal is filed with the Commercial Court in Zagreb',
    tip: 'Dativ: Trgovačkom sudu (pridjevna sklonidba).',
  },
];

export { DATA as SKLONIDBA_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function SklonidbaImenaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="sklonidbaimena"
      title={'🗿 Sklonidba imena'}
      subtitle={'s Ivom Andrićem — names bend too'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — nijedno vas ime ne zbunjuje! 🏆',
        good: 'Vrlo dobro sklanjanje imena! 💪',
        more: 'Sklonidba imena traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
