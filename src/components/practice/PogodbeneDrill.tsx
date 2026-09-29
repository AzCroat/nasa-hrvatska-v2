import React from 'react';
import ModeDrill from './ModeDrill';

// C1 conditional-sentences drill (C1 tranche 3, 2026-08-15): the three-way
// system — real (ako + prezent/futur II), potential (kad bi + kondicional I)
// and irreal (da + prezent/perfekt, kondicional II) — plus the cim/dok-ne
// present-tense rule and the politeness conditional.
const MODE_LABEL: Record<string, string> = {
  realne: '🌤️ Realne',
  potencijalne: '🌫️ Potencijalne',
  irealne: '🌑 Irealne',
};

const DATA = [
  {
    mode: 'realne',
    q: 'Ako ____ vremena, doći ću sutra.',
    opts: ['budem imao', 'imam ću', 'bih imao', 'imao'],
    answer: 'budem imao',
    en: 'if I have time, I will come tomorrow',
    tip: 'Realna pogodba: ako + futur II (ili prezent), u glavnoj futur I.',
  },
  {
    mode: 'realne',
    q: 'Ako sutra ____ kiša, izlet otpada.',
    opts: ['padne', 'bi padala', 'pala bude', 'bude padati'],
    answer: 'padne',
    en: 'if it rains tomorrow, the trip is off',
    tip: 'Ako + svršeni prezent: ako padne kiša.',
  },
  {
    mode: 'realne',
    q: 'Ako ne požurimo, ____ vlak.',
    opts: ['propustit ćemo', 'propustimo bismo', 'bismo propustili', 'propuštamo bili'],
    answer: 'propustit ćemo',
    en: 'if we do not hurry, we will miss the train',
    tip: 'Glavna surečenica realne pogodbe: futur I.',
  },
  {
    mode: 'realne',
    q: 'Nazovi me čim ____.',
    opts: ['stigneš', 'ćeš stići', 'bi stigao', 'stići'],
    answer: 'stigneš',
    en: 'call me as soon as you arrive',
    tip: 'Čim + svršeni PREZENT (nikad futur I): čim stigneš.',
  },
  {
    mode: 'realne',
    q: 'Ako ____ pitanja, slobodno ih postavite.',
    opts: ['imate', 'budete imati', 'imat ćete', 'imali'],
    answer: 'imate',
    en: 'if you have questions, feel free to ask them',
    tip: 'Ako + prezent za opću/sadašnju pogodbu.',
  },
  {
    mode: 'realne',
    q: 'Dok ne ____ zadaću, nema igre.',
    opts: ['napišeš', 'ćeš napisati', 'bi napisao', 'pišeš ćeš'],
    answer: 'napišeš',
    en: 'no play until you finish your homework',
    tip: 'Dok ne + svršeni prezent.',
  },
  {
    mode: 'realne',
    q: 'Ako se ____ po planu, sve ćemo stići.',
    opts: ['bude radilo', 'radit će', 'bi radilo', 'radilo je'],
    answer: 'bude radilo',
    en: 'if work proceeds according to plan, we will manage everything',
    tip: 'Bezlična realna pogodba: ako se bude radilo (futur II).',
  },
  {
    mode: 'realne',
    q: 'Uzmi kišobran ako ____ van.',
    opts: ['ideš', 'ćeš ići', 'išao', 'pođeš li ćeš'],
    answer: 'ideš',
    en: 'take an umbrella if you are going out',
    tip: 'Ako + prezent; futur I ne dolazi iza ako.',
  },
  {
    mode: 'potencijalne',
    q: 'Kad ____ više novca, kupio bih stan.',
    opts: ['bih imao', 'budem imao', 'imam', 'bih imati'],
    answer: 'bih imao',
    en: 'if I had more money, I would buy a flat',
    tip: 'Potencijalna: kad bi + kondicional I u objema surečenicama.',
  },
  {
    mode: 'potencijalne',
    q: 'Kad bi me pitali, ____ im istinu.',
    opts: ['rekao bih', 'reći ću', 'kažem', 'bio bih rekao'],
    answer: 'rekao bih',
    en: 'if they asked me, I would tell them the truth',
    tip: 'Kondicional I u glavnoj: rekao bih.',
  },
  {
    mode: 'potencijalne',
    q: 'Što ____ da osvojiš milijun?',
    opts: ['bi učinio', 'bi učiniti', 'učiniš', 'budeš učinio'],
    answer: 'bi učinio',
    en: 'what would you do if you won a million?',
    tip: 'Hipotetsko pitanje: kondicional I.',
  },
  {
    mode: 'potencijalne',
    q: '____ li mi pomogli oko prijevoda? (uljudna zamolba)',
    opts: ['Biste', 'Hoćete', 'Budete', 'Bi'],
    answer: 'Biste',
    en: 'would you help me with the translation?',
    tip: 'Uljudni kondicional: Biste li mi pomogli…',
  },
  {
    mode: 'potencijalne',
    q: 'Kad bi vlakovi ____ na vrijeme, stizali bismo bez brige.',
    opts: ['polazili', 'polaze', 'pošli budu', 'polazit će'],
    answer: 'polazili',
    en: 'if trains left on time, we would arrive without worry',
    tip: 'Kad bi + pridjev radni: kad bi polazili.',
  },
  {
    mode: 'potencijalne',
    q: 'Volio bih da ____ češće viđamo.',
    opts: ['se', 'bismo se', 'ćemo se', 'smo se'],
    answer: 'se',
    en: 'I wish we saw each other more often',
    tip: 'Volio bih DA + prezent: da se viđamo.',
  },
  {
    mode: 'potencijalne',
    q: 'Bilo bi pametnije da ____ ranije.',
    opts: ['počnemo', 'počet ćemo', 'bismo počeli', 'počinjemo bili'],
    answer: 'počnemo',
    en: 'it would be smarter if we started earlier',
    tip: 'Bilo bi + da + prezent.',
  },
  {
    mode: 'potencijalne',
    q: 'Na tvom mjestu ____ to drukčije.',
    opts: ['riješio bih', 'riješit ću', 'riješim', 'bio sam riješio'],
    answer: 'riješio bih',
    en: 'in your place I would solve it differently',
    tip: 'Savjet kondicionalom: na tvom mjestu riješio bih…',
  },
  {
    mode: 'irealne',
    q: 'Da sam znao, ____ ti javio. (ali nisam znao)',
    opts: ['bio bih', 'bit ću', 'budem', 'bio sam'],
    answer: 'bio bih',
    en: 'had I known, I would have let you know',
    tip: 'Irealna prošlost: da + perfekt → kondicional II (bio bih javio).',
  },
  {
    mode: 'irealne',
    q: 'Da ____ vremena, pomogao bih ti sada. (nemam ga)',
    opts: ['imam', 'budem imao', 'bih imao', 'imao budem'],
    answer: 'imam',
    en: 'if I had time, I would help you now',
    tip: 'Irealna sadašnjost: DA + PREZENT (da imam).',
  },
  {
    mode: 'irealne',
    q: 'Da se nisi javio, ____ se zabrinuli.',
    opts: ['bili bismo', 'bit ćemo', 'budemo', 'smo bili'],
    answer: 'bili bismo',
    en: 'had you not called, we would have got worried',
    tip: 'Kondicional II u glavnoj surečenici.',
  },
  {
    mode: 'irealne',
    q: 'Sve bi bilo drukčije da ____ onaj posao.',
    opts: ['sam prihvatio', 'bih prihvatio', 'prihvatim', 'budem prihvatio'],
    answer: 'sam prihvatio',
    en: 'everything would be different had I taken that job',
    tip: 'Irealna prošlost: da + perfekt (da sam prihvatio).',
  },
  {
    mode: 'irealne',
    q: 'Kondicional II. od „doći” (ja, m. rod) glasi:',
    opts: ['bio bih došao', 'bih bio dolazim', 'došao bih bio ću', 'bio sam došao'],
    answer: 'bio bih došao',
    en: 'the past conditional of to come',
    tip: 'Kondicional II. = bio/bila + kondicional I.: bio bih došao.',
  },
  {
    mode: 'irealne',
    q: 'Da nije bilo gužve, ____ na vrijeme.',
    opts: ['stigli bismo', 'stižemo', 'stić ćemo', 'budemo stigli'],
    answer: 'stigli bismo',
    en: 'had there been no traffic, we would have arrived on time',
    tip: 'Bezlična irealna prošlost + kondicional.',
  },
  {
    mode: 'irealne',
    q: '„Ma ja bih to ____ davno riješio!” (pojačano, o prošlosti)',
    opts: ['bio', 'bilo', 'bit', 'budem'],
    answer: 'bio',
    en: 'I would have solved that ages ago!',
    tip: 'Umetnuto „bio” tvori kondicional II.: bih bio riješio.',
  },
  {
    mode: 'irealne',
    q: 'Nesreća se ne bi dogodila da su ____ propisi.',
    opts: ['poštovani', 'poštovali bi', 'se poštuju', 'bili poštivati'],
    answer: 'poštovani',
    en: 'the accident would not have happened had the rules been observed',
    tip: 'Pasivna irealna pogodba: da su poštovani.',
  },
];

export { DATA as POGODBENE_DRILL_DATA };

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PogodbeneDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="pogodbene"
      title={'🔀 Pogodbene rečenice'}
      subtitle={'ako budem, kad bih, da sam — three worlds of if'}
      modeLabels={MODE_LABEL}
      data={DATA}
      praise={{
        perfect: 'Savršeno — sve tri pogodbe su vaše! 🏆',
        good: 'Vrlo dobro vladanje pogodbama! 💪',
        more: 'Pogodbene rečenice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
