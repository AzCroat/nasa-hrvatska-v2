import React from 'react';
import ModeDrill from './ModeDrill';
import CaseConceptIntro from './CaseConceptIntro';

const DATA = [
  {
    q: 'Živim u ___.',
    opts: ['Zagrebu', 'Zagreb', 'Zagreba', 'Zagrebom'],
    answer: 'Zagrebu',
    en: 'I live in Zagreb.',
    tip: "'u' (in, with location) takes locative — masc 'Zagreb' -> 'Zagrebu' (add -u).",
  },
  {
    q: 'Knjiga je na ___.',
    opts: ['stolu', 'stol', 'stola', 'stolom'],
    answer: 'stolu',
    en: 'The book is on the table.',
    tip: "'na' (on, location) takes locative — masc 'stol' -> 'stolu'.",
  },
  {
    q: 'Djeca su u ___.',
    opts: ['školi', 'škola', 'školu', 'školom'],
    answer: 'školi',
    en: 'The children are in school.',
    tip: "'u' + locative — fem 'škola' -> 'školi' (drop -a, add -i).",
  },
  {
    q: 'Mačka spava na ___.',
    opts: ['krevetu', 'krevet', 'kreveta', 'krevetom'],
    answer: 'krevetu',
    en: 'The cat sleeps on the bed.',
    tip: "'na' + locative — masc 'krevet' -> 'krevetu'.",
  },
  {
    q: 'Sjedim u ___.',
    opts: ['sobi', 'soba', 'sobu', 'sobom'],
    answer: 'sobi',
    en: 'I sit in the room.',
    tip: "'u' + locative — fem 'soba' -> 'sobi'.",
  },
  {
    q: 'Auto je u ___.',
    opts: ['garaži', 'garaža', 'garažu', 'garažom'],
    answer: 'garaži',
    en: 'The car is in the garage.',
    tip: "'u' + locative — fem 'garaža' -> 'garaži'.",
  },
  {
    q: 'Govorim o ___.',
    opts: ['knjizi', 'knjiga', 'knjigu', 'knjigom'],
    answer: 'knjizi',
    en: "I'm talking about the book.",
    tip: "'o' (about) takes locative — fem 'knjiga' -> 'knjizi' (k->z + -i).",
  },
  {
    q: 'Razmišljam o ___.',
    opts: ['tebi', 'ti', 'tebe', 'tobom'],
    answer: 'tebi',
    en: "I'm thinking about you.",
    tip: "'o' + locative of pronoun — 'ti' (nom) -> 'tebi' (loc).",
  },
  {
    q: 'Pišem o ___.',
    opts: ['pjesmi', 'pjesma', 'pjesmu', 'pjesmom'],
    answer: 'pjesmi',
    en: "I'm writing about a song.",
    tip: "'o' + locative — fem 'pjesma' -> 'pjesmi'.",
  },
  {
    q: 'Razgovaramo o ___.',
    opts: ['filmu', 'film', 'filma', 'filmom'],
    answer: 'filmu',
    en: "We're talking about the film.",
    tip: "'o' + locative — masc 'film' -> 'filmu'.",
  },
  {
    q: 'Praznici su u ___.',
    opts: ['prosincu', 'prosinac', 'prosinca', 'prosincem'],
    answer: 'prosincu',
    en: 'The holidays are in December.',
    tip: "'u' + month (time meaning) takes locative — masc 'prosinac' has fleeting -a-, locative 'prosincu'.",
  },
  {
    q: 'Autobus stoji na ___.',
    opts: ['stanici', 'stanica', 'stanicu', 'stanicom'],
    answer: 'stanici',
    en: 'The bus is standing at the stop.',
    tip: "'na' (location) + locative — fem 'stanica' -> 'stanici' (c stays c).",
  },
  {
    q: 'Praznujemo u ___.',
    opts: ['svibnju', 'svibanj', 'svibnja', 'svibnjem'],
    answer: 'svibnju',
    en: 'We celebrate in May.',
    tip: "'u' + month — masc 'svibanj' has fleeting -a-, locative 'svibnju'.",
  },
  {
    q: 'Šetam po ___.',
    opts: ['parku', 'park', 'parka', 'parkom'],
    answer: 'parku',
    en: 'I walk through the park.',
    tip: "'po' (along, through, around) takes locative — masc 'park' -> 'parku'.",
  },
  {
    q: 'Pri ___ smo se sreli.',
    opts: ['radu', 'rad', 'rada', 'radom'],
    answer: 'radu',
    en: 'We met while working.',
    tip: "'pri' (at, during, near) takes locative — masc 'rad' -> 'radu'.",
  },
  {
    q: 'Slika je na ___.',
    opts: ['zidu', 'zid', 'zida', 'zidom'],
    answer: 'zidu',
    en: 'The picture is on the wall.',
    tip: "'na' (on, location) takes locative — masc 'zid' -> 'zidu'.",
  },
  {
    q: 'Putujem po ___.',
    opts: ['Hrvatskoj', 'Hrvatska', 'Hrvatsku', 'Hrvatskom'],
    answer: 'Hrvatskoj',
    en: 'I travel around Croatia.',
    tip: "'po' + locative — 'Hrvatska' inflects as fem adjective: locative 'Hrvatskoj'.",
  },
  {
    q: 'Razmišljamo o ___.',
    opts: ['problemu', 'problem', 'problema', 'problemom'],
    answer: 'problemu',
    en: "We're thinking about the problem.",
    tip: "'o' (about) + locative — masc 'problem' -> 'problemu'.",
  },
  {
    q: 'Ujutro radim u ___.',
    opts: ['uredu', 'ured', 'ureda', 'uredom'],
    answer: 'uredu',
    en: 'In the morning I work in the office.',
    tip: "'u' (in, location) + locative — masc 'ured' -> 'uredu'.",
  },
  {
    q: 'Pri ___ je važno biti pažljiv.',
    opts: ['vožnji', 'vožnja', 'vožnju', 'vožnjom'],
    answer: 'vožnji',
    en: "When driving it's important to be careful.",
    tip: "'pri' (during, when doing X) + locative — fem 'vožnja' -> 'vožnji'.",
  },
  {
    q: 'Radim u ___.',
    opts: ['bolnici', 'bolnica', 'bolnicu', 'bolnicom'],
    answer: 'bolnici',
    en: 'I work in a hospital.',
    tip: "'u' (location) + locative — fem 'bolnica' → 'bolnici'.",
  },
  {
    q: 'Knjige su u ___.',
    opts: ['torbi', 'torba', 'torbu', 'torbom'],
    answer: 'torbi',
    en: 'The books are in the bag.',
    tip: "'u' + locative — fem 'torba' → 'torbi'.",
  },
  {
    q: 'Odmaram se u ___.',
    opts: ['fotelji', 'fotelja', 'fotelju', 'foteljom'],
    answer: 'fotelji',
    en: "I'm resting in the armchair.",
    tip: "'u' + locative — fem 'fotelja' → 'fotelji'.",
  },
  {
    q: 'Čekam te na ___.',
    opts: ['kolodvoru', 'kolodvor', 'kolodvora', 'kolodvorom'],
    answer: 'kolodvoru',
    en: "I'm waiting for you at the station.",
    tip: "'na' (location) + locative — masc 'kolodvor' → 'kolodvoru'.",
  },
  {
    q: 'Sastajemo se u ___.',
    opts: ['kafiću', 'kafić', 'kafića', 'kafićem'],
    answer: 'kafiću',
    en: 'We meet at the café.',
    tip: "'u' + locative — masc 'kafić' → 'kafiću'.",
  },
  {
    q: 'Razgovor je o ___.',
    opts: ['politici', 'politika', 'politiku', 'politikom'],
    answer: 'politici',
    en: 'The conversation is about politics.',
    tip: "'o' (about) + locative — fem 'politika' → 'politici' (k → c before -i).",
  },
  {
    q: 'Sanjam o ___.',
    opts: ['moru', 'more', 'mora', 'morem'],
    answer: 'moru',
    en: 'I dream about the sea.',
    tip: "'o' + locative — neut 'more' → 'moru'.",
  },
  {
    q: 'Sve ovisi o ___.',
    opts: ['vremenu', 'vrijeme', 'vremena', 'vremenom'],
    answer: 'vremenu',
    en: 'Everything depends on the weather.',
    tip: "'o' + locative — neut 'vrijeme' has irregular stem: 'vremenu'.",
  },
  {
    q: 'Cvijeće je u ___.',
    opts: ['vazi', 'vaza', 'vazu', 'vazom'],
    answer: 'vazi',
    en: 'The flowers are in the vase.',
    tip: "'u' + locative — fem 'vaza' → 'vazi'.",
  },
  {
    q: 'Učimo o ___.',
    opts: ['povijesti', 'povijest', 'poviješću', 'povijestima'],
    answer: 'povijesti',
    en: 'We are learning about history.',
    tip: "'o' + locative — fem i-declension 'povijest' → 'povijesti'.",
  },
  {
    q: 'Stojim na ___.',
    opts: ['mostu', 'most', 'mosta', 'mostom'],
    answer: 'mostu',
    en: "I'm standing on the bridge.",
    tip: "'na' + locative — masc 'most' → 'mostu'.",
  },
  {
    q: 'Vozim se po ___.',
    opts: ['gradu', 'grad', 'grada', 'gradom'],
    answer: 'gradu',
    en: 'I ride around the city.',
    tip: "'po' (around) + locative — masc 'grad' → 'gradu'.",
  },
  {
    q: 'Pričamo o ___.',
    opts: ['ljubavi', 'ljubav', 'ljubavlju', 'ljubave'],
    answer: 'ljubavi',
    en: 'We talk about love.',
    tip: "'o' + locative — fem i-declension 'ljubav' → 'ljubavi'.",
  },
  {
    q: 'Kuham u ___.',
    opts: ['kuhinji', 'kuhinja', 'kuhinju', 'kuhinjom'],
    answer: 'kuhinji',
    en: "I'm cooking in the kitchen.",
    tip: "'u' + locative — fem 'kuhinja' → 'kuhinji'.",
  },
  {
    q: 'Plivam u ___.',
    opts: ['bazenu', 'bazen', 'bazena', 'bazenom'],
    answer: 'bazenu',
    en: "I'm swimming in the pool.",
    tip: "'u' + locative — masc 'bazen' → 'bazenu'.",
  },
  {
    q: 'Sjedimo u ___.',
    opts: ['vrtu', 'vrt', 'vrta', 'vrtom'],
    answer: 'vrtu',
    en: 'We are sitting in the garden.',
    tip: "'u' + locative — masc 'vrt' → 'vrtu'.",
  },
  {
    q: 'Ostavila sam ključeve na ___.',
    opts: ['polici', 'polica', 'policu', 'policom'],
    answer: 'polici',
    en: 'I left the keys on the shelf.',
    tip: "'na' + locative — fem 'polica' → 'polici'.",
  },
  {
    q: 'Mislim o ___.',
    opts: ['budućnosti', 'budućnost', 'budućnošću', 'budućnostom'],
    answer: 'budućnosti',
    en: 'I think about the future.',
    tip: "'o' + locative — fem i-declension 'budućnost' → 'budućnosti'.",
  },
  {
    q: 'Film je o ___.',
    opts: ['ratu', 'rat', 'rata', 'ratom'],
    answer: 'ratu',
    en: 'The film is about the war.',
    tip: "'o' + locative — masc 'rat' → 'ratu'.",
  },
  {
    q: 'On studira na ___.',
    opts: ['fakultetu', 'fakultet', 'fakulteta', 'fakultetom'],
    answer: 'fakultetu',
    en: 'He studies at the faculty.',
    tip: "'na' + locative — masc 'fakultet' → 'fakultetu'.",
  },
  {
    q: 'Ona radi u ___.',
    opts: ['tvornici', 'tvornica', 'tvornicu', 'tvornicom'],
    answer: 'tvornici',
    en: 'She works in a factory.',
    tip: "'u' + locative — fem 'tvornica' → 'tvornici'.",
  },
  {
    q: 'Pas je u ___.',
    opts: ['dvorištu', 'dvorište', 'dvorišta', 'dvorištem'],
    answer: 'dvorištu',
    en: 'The dog is in the yard.',
    tip: "'u' + locative — neut 'dvorište' → 'dvorištu'.",
  },
  {
    q: 'Govorimo o ___.',
    opts: ['glazbi', 'glazba', 'glazbu', 'glazbom'],
    answer: 'glazbi',
    en: 'We talk about music.',
    tip: "'o' + locative — fem 'glazba' → 'glazbi'.",
  },
  {
    q: 'Hodam po ___.',
    opts: ['obali', 'obala', 'obalu', 'obalom'],
    answer: 'obali',
    en: 'I walk along the shore.',
    tip: "'po' (along) + locative — fem 'obala' → 'obali'.",
  },
  {
    q: 'Bili smo na ___.',
    opts: ['koncertu', 'koncert', 'koncerta', 'koncertom'],
    answer: 'koncertu',
    en: 'We were at the concert.',
    tip: "'na' + locative — masc 'koncert' → 'koncertu'.",
  },
  {
    q: 'Razmišljam o ___ cijeli dan.',
    opts: ['poslu', 'posao', 'posla', 'poslom'],
    answer: 'poslu',
    en: 'I think about work all day.',
    tip: "'o' + locative — masc 'posao' has a fleeting -a-: 'poslu'.",
  },
  {
    q: 'Djeca se igraju na ___.',
    opts: ['igralištu', 'igralište', 'igrališta', 'igralištem'],
    answer: 'igralištu',
    en: 'The children play on the playground.',
    tip: "'na' + locative — neut 'igralište' → 'igralištu'.",
  },
  {
    q: 'Ime piše na ___.',
    opts: ['koverti', 'koverta', 'kovertu', 'kovertom'],
    answer: 'koverti',
    en: 'The name is written on the envelope.',
    tip: "'na' + locative — fem 'koverta' → 'koverti'.",
  },
  {
    q: 'Susreli smo se na ___.',
    opts: ['svadbi', 'svadba', 'svadbu', 'svadbom'],
    answer: 'svadbi',
    en: 'We met at the wedding.',
    tip: "'na' + locative — fem 'svadba' → 'svadbi'.",
  },
  {
    q: 'Pri ___ budi oprezan.',
    opts: ['kuhanju', 'kuhanje', 'kuhanja', 'kuhanjem'],
    answer: 'kuhanju',
    en: 'Be careful when cooking.',
    tip: "'pri' (when doing X) + locative — neut 'kuhanje' → 'kuhanju'.",
  },
];

// One question type, so the engine's run is 12 from the whole bank (DRILL_RUN_LENGTH).
const MODE_LABEL: Record<string, string> = { fill: 'Fill the blank' };
const BANK = DATA.map((item) => ({ ...item, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function LocativeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="locative"
      title={'📍 Locative Case'}
      subtitle={'Location, topic, time, prepositions u/na/o/po/pri'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Perfect! Locative mastered! 🏆',
        good: 'Great work! Locative covers location and topic!',
        more: 'Keep practising — locative comes after u/na/o/po/pri.',
      }}
      goBack={goBack}
      award={award}
      intro={(start) => <CaseConceptIntro conceptId="locative" onStart={start} />}
      explainType="case_drill"
    />
  );
}
