import React from 'react';
import ModeDrill from './ModeDrill';
import CaseConceptIntro from './CaseConceptIntro';

const DATA = [
  {
    q: 'Ovo je knjiga moga ___.',
    opts: ['brata', 'brat', 'bratu', 'brate'],
    answer: 'brata',
    en: "This is my brother's book.",
    tip: "Possession after 'knjiga' takes genitive. Masc 'brat' -> 'brata' (add -a).",
  },
  {
    q: 'Auto moje ___.',
    opts: ['sestre', 'sestra', 'sestri', 'sestrom'],
    answer: 'sestre',
    en: "My sister's car.",
    tip: 'Fem nouns in -a drop -a and add -e: sestra -> sestre.',
  },
  {
    q: 'Ime moga ___.',
    opts: ['oca', 'otac', 'ocu', 'ocem'],
    answer: 'oca',
    en: "My father's name.",
    tip: "'otac' has fleeting -a in oblique cases: otac -> oca (drop -a-, add -a).",
  },
  {
    q: 'Boja njezine ___.',
    opts: ['haljine', 'haljina', 'haljinu', 'haljinom'],
    answer: 'haljine',
    en: 'The color of her dress.',
    tip: "Fem 'haljina' -> 'haljine' in genitive singular.",
  },
  {
    q: 'Vrata moje ___.',
    opts: ['kuće', 'kuća', 'kuću', 'kućom'],
    answer: 'kuće',
    en: 'The door of my house.',
    tip: "Fem 'kuća' -> 'kuće' in genitive singular.",
  },
  {
    q: 'Selo mog ___.',
    opts: ['djeda', 'djed', 'djedu', 'djedom'],
    answer: 'djeda',
    en: "My grandfather's village.",
    tip: "Masc 'djed' -> 'djeda' in genitive (add -a).",
  },
  {
    q: 'Pijem čašu ___.',
    opts: ['vode', 'voda', 'vodi', 'vodom'],
    answer: 'vode',
    en: 'I drink a glass of water.',
    tip: "Partitive after a measure noun ('čaša') takes genitive: voda -> vode.",
  },
  {
    q: 'Jedem komad ___.',
    opts: ['kruha', 'kruh', 'kruhu', 'kruhom'],
    answer: 'kruha',
    en: 'I eat a piece of bread.',
    tip: "Partitive after 'komad' — masc 'kruh' -> 'kruha'.",
  },
  {
    q: 'Kupujem kilogram ___.',
    opts: ['jabuka', 'jabuke', 'jabukama', 'jabuku'],
    answer: 'jabuka',
    en: 'I buy a kilo of apples.',
    tip: "Measure + genitive plural: 'jabuke' (nom pl) -> 'jabuka' (gen pl, zero ending).",
  },
  {
    q: 'Daj mi malo ___.',
    opts: ['šećera', 'šećer', 'šećeru', 'šećerom'],
    answer: 'šećera',
    en: 'Give me a little sugar.',
    tip: "Partitive after 'malo' — masc 'šećer' -> 'šećera'.",
  },
  {
    q: 'Nemam ___.',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    en: "I don't have time.",
    tip: "Negation takes genitive — neut 'vrijeme' has irregular genitive 'vremena' (ije->e + add -na).",
  },
  {
    q: 'Nemam ___.',
    opts: ['novca', 'novac', 'novcu', 'novcem'],
    answer: 'novca',
    en: "I don't have money.",
    tip: "Masc 'novac' has fleeting -a — genitive 'novca'.",
  },
  {
    q: 'Ne pijem ___.',
    opts: ['kave', 'kava', 'kavu', 'kavom'],
    answer: 'kave',
    en: "I don't drink coffee.",
    tip: "Negation takes genitive — fem 'kava' -> 'kave'.",
  },
  {
    q: 'Nema ___ u kuhinji.',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    en: "There's no milk in the kitchen.",
    tip: "'nema' (impersonal negation) takes genitive — neut 'mlijeko' -> 'mlijeka'.",
  },
  {
    q: 'Idem iz ___.',
    opts: ['kuće', 'kuća', 'kući', 'kućom'],
    answer: 'kuće',
    en: "I'm coming from the house.",
    tip: "'iz' (from, out of) takes genitive — fem 'kuća' -> 'kuće'.",
  },
  {
    q: 'Hodam od ___ do mora.',
    opts: ['parka', 'park', 'parku', 'parkom'],
    answer: 'parka',
    en: 'I walk from the park to the sea.',
    tip: "'od' (from) takes genitive — masc 'park' -> 'parka'. Note: 'do' also takes genitive (mora).",
  },
  {
    q: 'Kupit ću kavu bez ___.',
    opts: ['šećera', 'šećer', 'šećeru', 'šećerom'],
    answer: 'šećera',
    en: "I'll get coffee without sugar.",
    tip: "'bez' (without) takes genitive — masc 'šećer' -> 'šećera'.",
  },
  {
    q: 'Stojim kod ___.',
    opts: ['prozora', 'prozor', 'prozoru', 'prozorom'],
    answer: 'prozora',
    en: "I'm standing by the window.",
    tip: "'kod' (at, near, by) takes genitive — masc 'prozor' -> 'prozora'.",
  },
  {
    q: 'U gradu je puno ___.',
    opts: ['ljudi', 'ljudima', 'čovjek', 'ljude'],
    answer: 'ljudi',
    en: 'There are many people in the city.',
    tip: "'puno' takes genitive plural. 'ljudi' is the suppletive genitive plural of 'čovjek'.",
  },
  {
    q: 'Imam malo ___.',
    opts: ['prijatelja', 'prijatelji', 'prijateljima', 'prijatelje'],
    answer: 'prijatelja',
    en: 'I have few friends.',
    tip: "'malo' + genitive plural — masc 'prijatelji' (nom pl) -> 'prijatelja' (gen pl).",
  },
  {
    q: 'Idem do ___.',
    opts: ['trgovine', 'trgovina', 'trgovini', 'trgovinom'],
    answer: 'trgovine',
    en: "I'm going to the shop.",
    tip: "'do' (to/until) takes genitive — fem 'trgovina' -> 'trgovine'.",
  },
  {
    q: 'Stanujem blizu ___.',
    opts: ['škole', 'škola', 'školi', 'školom'],
    answer: 'škole',
    en: 'I live near the school.',
    tip: "'blizu' (near) takes genitive — 'škola' -> 'škole'.",
  },
  {
    q: 'Poslije ___ idemo van.',
    opts: ['ručka', 'ručak', 'ručku', 'ručkom'],
    answer: 'ručka',
    en: 'After lunch we go out.',
    tip: "'poslije' (after) + genitive — 'ručak' has fleeting -a-: 'ručka'.",
  },
  {
    q: 'Operi ruke prije ___.',
    opts: ['jela', 'jelo', 'jelu', 'jelom'],
    answer: 'jela',
    en: 'Wash your hands before the meal.',
    tip: "'prije' (before) + genitive — neut 'jelo' -> 'jela'.",
  },
  {
    q: 'Kasnim zbog ___.',
    opts: ['prometa', 'promet', 'prometu', 'prometom'],
    answer: 'prometa',
    en: "I'm late because of traffic.",
    tip: "'zbog' (because of) + genitive — 'promet' -> 'prometa'.",
  },
  {
    q: 'Šetamo oko ___.',
    opts: ['jezera', 'jezero', 'jezeru', 'jezerom'],
    answer: 'jezera',
    en: 'We walk around the lake.',
    tip: "'oko' (around) + genitive — neut 'jezero' -> 'jezera'.",
  },
  {
    q: 'Mnogi su protiv ___.',
    opts: ['zakona', 'zakon', 'zakonu', 'zakonom'],
    answer: 'zakona',
    en: 'Many are against the law.',
    tip: "'protiv' (against) + genitive — 'zakon' -> 'zakona'.",
  },
  {
    q: 'Pijem čaj umjesto ___.',
    opts: ['kave', 'kava', 'kavu', 'kavom'],
    answer: 'kave',
    en: 'I drink tea instead of coffee.',
    tip: "'umjesto' (instead of) + genitive — 'kava' -> 'kave'.",
  },
  {
    q: 'Auto stoji ispred ___.',
    opts: ['kuće', 'kuća', 'kući', 'kućom'],
    answer: 'kuće',
    en: 'The car is in front of the house.',
    tip: "'ispred' (in front of) + genitive — 'kuća' -> 'kuće'.",
  },
  {
    q: 'Parkiralište je iza ___.',
    opts: ['zgrade', 'zgrada', 'zgradi', 'zgradom'],
    answer: 'zgrade',
    en: 'The parking lot is behind the building.',
    tip: "'iza' (behind) + genitive — 'zgrada' -> 'zgrade'.",
  },
  {
    q: 'Sjedim pored ___.',
    opts: ['prozora', 'prozor', 'prozoru', 'prozorom'],
    answer: 'prozora',
    en: 'I sit by the window.',
    tip: "'pored' (beside) + genitive — 'prozor' -> 'prozora'.",
  },
  {
    q: 'Most ide preko ___.',
    opts: ['rijeke', 'rijeka', 'rijeci', 'rijekom'],
    answer: 'rijeke',
    en: 'The bridge goes over the river.',
    tip: "'preko' (over/across) + genitive — 'rijeka' -> 'rijeke'.",
  },
  {
    q: 'Pas spava ispod ___.',
    opts: ['stola', 'stol', 'stolu', 'stolom'],
    answer: 'stola',
    en: 'The dog sleeps under the table.',
    tip: "'ispod' (under) + genitive — 'stol' -> 'stola'.",
  },
  {
    q: 'Slika visi iznad ___.',
    opts: ['kreveta', 'krevet', 'krevetu', 'krevetom'],
    answer: 'kreveta',
    en: 'The picture hangs above the bed.',
    tip: "'iznad' (above) + genitive — 'krevet' -> 'kreveta'.",
  },
  {
    q: 'Nakon ___ idem spavati.',
    opts: ['filma', 'film', 'filmu', 'filmom'],
    answer: 'filma',
    en: 'After the film I go to sleep.',
    tip: "'nakon' (after) + genitive — 'film' -> 'filma'.",
  },
  {
    q: 'Tijekom ___ puno radim.',
    opts: ['tjedna', 'tjedan', 'tjednu', 'tjednom'],
    answer: 'tjedna',
    en: 'During the week I work a lot.',
    tip: "'tijekom' (during) + genitive — 'tjedan' has fleeting -a-: 'tjedna'.",
  },
  {
    q: 'Danas imam mnogo ___.',
    opts: ['posla', 'posao', 'poslu', 'poslom'],
    answer: 'posla',
    en: 'Today I have a lot of work.',
    tip: "'mnogo' + genitive — 'posao' -> 'posla' (fleeting vowel).",
  },
  {
    q: 'Pročitao sam nekoliko ___.',
    opts: ['knjiga', 'knjige', 'knjigama', 'knjigu'],
    answer: 'knjiga',
    en: 'I read several books.',
    tip: "'nekoliko' + genitive plural — 'knjige' -> 'knjiga' (gen pl, zero ending).",
  },
  {
    q: 'Imamo dosta ___.',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    en: 'We have enough time.',
    tip: "'dosta' + genitive — neut 'vrijeme' -> 'vremena' (irregular).",
  },
  {
    q: 'Popila sam šalicu ___.',
    opts: ['čaja', 'čaj', 'čaju', 'čajem'],
    answer: 'čaja',
    en: 'I drank a cup of tea.',
    tip: "Measure 'šalica' + genitive — 'čaj' -> 'čaja'.",
  },
  {
    q: 'Kupili smo bocu ___.',
    opts: ['vina', 'vino', 'vinu', 'vinom'],
    answer: 'vina',
    en: 'We bought a bottle of wine.',
    tip: "Measure 'boca' + genitive — neut 'vino' -> 'vina'.",
  },
  {
    q: 'Treba mi litra ___.',
    opts: ['ulja', 'ulje', 'ulju', 'uljem'],
    answer: 'ulja',
    en: 'I need a litre of oil.',
    tip: "Measure 'litra' + genitive — neut 'ulje' -> 'ulja'.",
  },
  {
    q: 'Ne vidim ___.',
    opts: ['problema', 'problem', 'problemu', 'problemom'],
    answer: 'problema',
    en: "I don't see a problem.",
    tip: "Negation takes genitive — 'problem' -> 'problema'.",
  },
  {
    q: 'Nemamo ___.',
    opts: ['struje', 'struja', 'struji', 'strujom'],
    answer: 'struje',
    en: 'We have no electricity.',
    tip: "Negation takes genitive — fem 'struja' -> 'struje'.",
  },
  {
    q: 'Ne razumijem ___.',
    opts: ['pitanja', 'pitanje', 'pitanju', 'pitanjem'],
    answer: 'pitanja',
    en: "I don't understand the question.",
    tip: "Negation takes genitive — neut 'pitanje' -> 'pitanja'.",
  },
  {
    q: 'To je torba moje ___.',
    opts: ['majke', 'majka', 'majci', 'majkom'],
    answer: 'majke',
    en: "That's my mother's bag.",
    tip: "Possession takes genitive — 'majka' -> 'majke'.",
  },
  {
    q: 'Vrh ___ je snježan.',
    opts: ['planine', 'planina', 'planini', 'planinom'],
    answer: 'planine',
    en: 'The mountain top is snowy.',
    tip: "Possession ('vrh' of) takes genitive — 'planina' -> 'planine'.",
  },
  {
    q: 'Ovo je ured mog ___.',
    opts: ['šefa', 'šef', 'šefu', 'šefom'],
    answer: 'šefa',
    en: "This is my boss's office.",
    tip: "Possession takes genitive — 'šef' -> 'šefa'.",
  },
  {
    q: 'Sin ima pet ___.',
    opts: ['godina', 'godine', 'godinama', 'godinu'],
    answer: 'godina',
    en: 'My son is five years old.',
    tip: "Numbers 5+ take genitive plural — 'godine' -> 'godina'.",
  },
  {
    q: 'U razredu je dvadeset ___.',
    opts: ['učenika', 'učenici', 'učenicima', 'učenike'],
    answer: 'učenika',
    en: 'There are twenty pupils in the class.',
    tip: "Numbers 5+ take genitive plural — 'učenici' -> 'učenika'.",
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Fill the blank' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function GenitiveDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="genitive"
      title={'📖 Genitive Case'}
      subtitle={'Possession, partitive, negation, prepositions'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Genitive mastered! 🏆',
        good: 'Great work! Genitive is essential!',
        more: 'Try again — genitive shapes possession, partitive, and negation!',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <CaseConceptIntro conceptId="genitive" onStart={start} />}
      explainType="case_drill"
    />
  );
}
