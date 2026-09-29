import React from 'react';
import ModeDrill from './ModeDrill';

// B2 temporal-clauses drill (B2 tranche 4, 2026-08-15): choosing the
// conjunction (cim/dok/otkako/nakon sto/prije nego sto), aspect inside
// temporal clauses (cim + perfective present, dok + imperfective, dok ne +
// perfective) and paraphrase (tek sto, samo sto nije, dok god).
const MODE_LABEL: Record<string, string> = {
  veznici: '🔀 Veznici',
  vid: '🎬 Vid',
  prijenos: '🔄 Preoblike',
};

const DATA = [
  {
    mode: 'veznici',
    q: '____ sam došao kući, počela je kiša. (odmah po dolasku)',
    opts: ['Čim', 'Dok', 'Otkako', 'Prije nego što'],
    answer: 'Čim',
    en: 'as soon as I got home, it started to rain',
    tip: 'Čim = odmah nakon (as soon as).',
  },
  {
    mode: 'veznici',
    q: '____ je čitao, slušao je glazbu. (istodobnost)',
    opts: ['Dok', 'Čim', 'Nakon što', 'Otkako'],
    answer: 'Dok',
    en: 'while he read, he listened to music',
    tip: 'Dok = istodobnost dviju radnji.',
  },
  {
    mode: 'veznici',
    q: 'Ostat ću ovdje ____ se ne vratiš.',
    opts: ['dok', 'čim', 'otkako', 'nakon što'],
    answer: 'dok',
    en: 'I will stay here until you come back',
    tip: 'Dok + ne = until: dok se ne vratiš.',
  },
  {
    mode: 'veznici',
    q: '____ god dođeš, bit ćeš dobrodošao.',
    opts: ['Kad', 'Čim', 'Dok', 'Što'],
    answer: 'Kad',
    en: 'whenever you come, you will be welcome',
    tip: 'Kad god = whenever.',
  },
  {
    mode: 'veznici',
    q: 'Nazvao me ____ što je otišao.',
    opts: ['prije nego', 'poslije nego', 'ranije nego', 'čim nego'],
    answer: 'prije nego',
    en: 'he called me before he left',
    tip: 'Prije nego što + rečenica.',
  },
  {
    mode: 'veznici',
    q: '____ smo večerali, gledali smo film.',
    opts: ['Nakon što', 'Prije nego što', 'Dok ne', 'Čim ne'],
    answer: 'Nakon što',
    en: 'after we had dinner, we watched a film',
    tip: 'Nakon što = poslije te radnje.',
  },
  {
    mode: 'veznici',
    q: '____ živim u Zagrebu, naučio sam puno. (od tog trenutka)',
    opts: ['Otkako', 'Dok', 'Čim', 'Nakon što'],
    answer: 'Otkako',
    en: 'since I have lived in Zagreb, I have learned a lot',
    tip: 'Otkako = od trenutka kad.',
  },
  {
    mode: 'veznici',
    q: 'Pričekaj ____ završim!',
    opts: ['da', 'dok da', 'čim', 'što'],
    answer: 'da',
    en: 'wait for me to finish!',
    tip: 'Pričekati/čekati DA + prezent.',
  },
  {
    mode: 'vid',
    q: 'Čim ____ , javit ću ti. (stići)',
    opts: ['stignem', 'stižem', 'stigao', 'stizat ću'],
    answer: 'stignem',
    en: 'as soon as I arrive, I will let you know',
    tip: 'Čim + SVRŠENI prezent (nikad futur I).',
  },
  {
    mode: 'vid',
    q: 'Dok ____ , ne ometaj me. (raditi)',
    opts: ['radim', 'uradim', 'radio', 'uradit ću'],
    answer: 'radim',
    en: 'while I am working, do not disturb me',
    tip: 'Dok (istodobnost) + nesvršeni prezent.',
  },
  {
    mode: 'vid',
    q: 'Dok ne ____ zadaću, ne izlaziš. (napisati)',
    opts: ['napišeš', 'pišeš', 'napisao', 'pisat ćeš'],
    answer: 'napišeš',
    en: 'no going out until you finish your homework',
    tip: 'Dok ne + svršeni prezent.',
  },
  {
    mode: 'vid',
    q: 'Veznik „čim” traži prezent kojega vida?',
    opts: ['svršenoga', 'nesvršenoga', 'obaju podjednako', 'nijednoga'],
    answer: 'svršenoga',
    en: 'cim takes the perfective present',
    tip: 'Čim stignem, čim završim, čim čuješ.',
  },
  {
    mode: 'vid',
    q: 'Kad ____ velik, bit ću pilot. (narasti)',
    opts: ['narastem', 'rastem', 'narastao', 'rast ću'],
    answer: 'narastem',
    en: 'when I grow up, I will be a pilot',
    tip: 'Budućnost u vremenskoj: svršeni prezent.',
  },
  {
    mode: 'vid',
    q: 'Svaki put kad ga ____ , nasmijem se. (vidjeti)',
    opts: ['vidim', 'ugledam jednom', 'vidio', 'vidjet ću'],
    answer: 'vidim',
    en: 'every time I see him, I smile',
    tip: 'Ponavljanje → nesvršeni prezent.',
  },
  {
    mode: 'vid',
    q: '„Dok” za istodobnost traži:',
    opts: ['nesvršeni vid', 'svršeni vid', 'pluskvamperfekt', 'kondicional'],
    answer: 'nesvršeni vid',
    en: 'simultaneous dok takes imperfective',
    tip: 'Dok čitam, dok radiš, dok spavaju.',
  },
  {
    mode: 'vid',
    q: 'Prije nego što ____ , provjeri adresu. (krenuti)',
    opts: ['kreneš', 'krećeš', 'krenuo', 'krenut ćeš'],
    answer: 'kreneš',
    en: 'before you set off, check the address',
    tip: 'Prije nego što + svršeni prezent.',
  },
  {
    mode: 'prijenos',
    q: '„Prvo je večerao, onda je izašao.” = „____ je večerao, izašao je.”',
    opts: ['Nakon što', 'Prije nego što', 'Dok', 'Otkako'],
    answer: 'Nakon što',
    en: 'after he had dinner, he went out',
    tip: 'Redoslijed radnji → nakon što.',
  },
  {
    mode: 'prijenos',
    q: '„Živim ovdje od 2015.” = „____ 2015. živim ovdje.”',
    opts: ['Od', 'Otkako', 'Do', 'Za'],
    answer: 'Od',
    en: 'I have lived here since 2015',
    tip: 'Od + godina; otkako + rečenica.',
  },
  {
    mode: 'prijenos',
    q: '„Izašao je, a prije toga je platio.” = „Platio je ____ je izašao.”',
    opts: ['prije nego što', 'nakon što', 'otkako', 'dok ne'],
    answer: 'prije nego što',
    en: 'he paid before he left',
    tip: 'Obratni redoslijed → prije nego što.',
  },
  {
    mode: 'prijenos',
    q: '„Otkako” znači:',
    opts: ['od trenutka kad', 'do trenutka kad', 'umjesto toga da', 'svaki put kad'],
    answer: 'od trenutka kad',
    en: 'otkako = ever since',
    tip: 'Otkako te znam, sve je ljepše.',
  },
  {
    mode: 'prijenos',
    q: '„Samo što nije stigao” znači:',
    opts: ['stići će svaki čas', 'nikad neće stići', 'odavno je stigao', 'ne želi stići'],
    answer: 'stići će svaki čas',
    en: 'he is about to arrive any moment',
    tip: 'Samo što nije + perfekt = neposredna budućnost.',
  },
  {
    mode: 'prijenos',
    q: '„Tek što je sjeo, zazvonio je telefon.” — „tek što” izriče:',
    opts: [
      'radnju odmah nakon druge',
      'radnju koja traje',
      'radnju koja se ponavlja',
      'buduću želju',
    ],
    answer: 'radnju odmah nakon druge',
    en: 'no sooner had he sat down…',
    tip: 'Tek što / samo što = čim, s nijansom iznenadnosti.',
  },
  {
    mode: 'prijenos',
    q: '„U trenutku kad” možemo kraće reći:',
    opts: ['kad', 'otkako', 'dok ne', 'pošto ne'],
    answer: 'kad',
    en: 'a shorter way to say "at the moment when"',
    tip: 'Kad je ušao, svi su ustali.',
  },
  {
    mode: 'prijenos',
    q: '„Dok god budeš učio, ići će ti dobro.” — „dok god” znači:',
    opts: ['sve vrijeme dok', 'odmah nakon što', 'prije nego što', 'jedanput kad'],
    answer: 'sve vrijeme dok',
    en: 'as long as you keep studying',
    tip: 'Dok god + futur II = trajni uvjet.',
  },
];

export { DATA as VREMENSKE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function VremenskeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="vremenske"
      title={'⏳ Vremenske rečenice'}
      subtitle={'čim stignem, dok ne završiš — putting events in order'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — vrijeme je vaše! 🏆',
        good: 'Vrlo dobro vladanje vremenskim rečenicama! 💪',
        more: 'Vremenske rečenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
