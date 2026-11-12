// src/data/drills/a1/feelingsDrill.ts
//
// A1 FEELINGS — the drill for the `feelings` lesson.
//
// Three patterns: biti + an adjective that agrees with the speaker (sretan / sretna sam),
// osjećati se + an adverb, and the dative "to me" pattern (dosadno mi je). Plus bojati se
// + genitive and veseliti se + dative.
//
// Three modes:
//   pridjevi — the adjective agreeing with the person
//   osjecati — osjećati se and the "mi je" pattern
//   bojati   — what you fear and what you look forward to

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FEELINGS_MODE_LABELS: Record<string, string> = {
  pridjevi: '😊 Pridjevi',
  osjecati: '💭 Osjećati se',
  bojati: '😨 Bojati se',
};

export const FEELINGS_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'pridjevi',
    q: 'Ana je danas ____.',
    en: 'Ana is sad today.',
    opts: ['tužna', 'tužan', 'tužno', 'tužni'],
    answer: 'tužna',
    tip: 'Ana is feminine; tužan drops its fleeting a.',
  },
  {
    mode: 'pridjevi',
    q: 'Marko je ____.',
    en: 'Marko is tired.',
    opts: ['umoran', 'umorna', 'umorno', 'umorni'],
    answer: 'umoran',
    tip: 'Marko takes the masculine form.',
  },
  {
    mode: 'pridjevi',
    q: 'Mi smo jako ____.',
    en: 'We are very happy.',
    opts: ['sretni', 'sretan', 'sretna', 'sretno'],
    answer: 'sretni',
    tip: 'A group takes the plural: sretni.',
  },
  {
    mode: 'pridjevi',
    q: 'Mama je ____ na mene.',
    en: 'Mum is angry with me.',
    opts: ['ljuta', 'ljut', 'ljuto', 'ljuti'],
    answer: 'ljuta',
    tip: 'Mama is feminine.',
  },
  {
    mode: 'pridjevi',
    q: 'Ivana je ____ prije ispita.',
    en: 'Ivana is nervous before the exam.',
    opts: ['nervozna', 'nervozan', 'nervozno', 'nervozni'],
    answer: 'nervozna',
    tip: 'Ivana is feminine; the fleeting a drops.',
  },
  {
    mode: 'pridjevi',
    q: 'Moji roditelji su ____.',
    en: 'My parents are worried.',
    opts: ['zabrinuti', 'zabrinut', 'zabrinuta', 'zabrinuto'],
    answer: 'zabrinuti',
    tip: 'Roditelji is masculine plural.',
  },
  {
    mode: 'pridjevi',
    q: 'Jučer sam bila ____.',
    en: 'I was tired yesterday (a woman speaking).',
    opts: ['umorna', 'umoran', 'umorno', 'umorni'],
    answer: 'umorna',
    tip: 'Bila tells you the speaker is a woman.',
  },
  {
    mode: 'pridjevi',
    q: 'Petar je ____ jer ide na more.',
    en: 'Petar is excited because he is going to the seaside.',
    opts: ['uzbuđen', 'uzbuđena', 'uzbuđeno', 'uzbuđeni'],
    answer: 'uzbuđen',
    tip: 'Petar takes the masculine form.',
  },
  {
    mode: 'osjecati',
    q: 'Osjećam ____ dobro.',
    en: 'I feel good.',
    opts: ['se', 'si', 'me', 'sebe'],
    answer: 'se',
    tip: 'Osjećati se always carries se.',
  },
  {
    mode: 'osjecati',
    q: 'Kako se ____?',
    en: 'How do you feel?',
    opts: ['osjećaš', 'osjećam', 'osjeća', 'osjećati'],
    answer: 'osjećaš',
    tip: 'The ti form.',
  },
  {
    mode: 'osjecati',
    q: 'Osjećam se puno ____.',
    en: 'I feel much better.',
    opts: ['bolje', 'dobro', 'bolji', 'dobar'],
    answer: 'bolje',
    tip: 'The comparative adverb of dobro.',
  },
  {
    mode: 'osjecati',
    q: '____ mi je, nemam što raditi.',
    en: 'I am bored, I have nothing to do.',
    opts: ['Dosadno', 'Dosadan', 'Dosadna', 'Dosada'],
    answer: 'Dosadno',
    tip: '"It is boring to me" — the neuter form with mi je.',
  },
  {
    mode: 'osjecati',
    q: '____ mi je, ne mogu doći.',
    en: 'I am sorry, I cannot come.',
    opts: ['Žao', 'Drago', 'Dosadno', 'Toplo'],
    answer: 'Žao',
    tip: 'The everyday apology.',
  },
  {
    mode: 'osjecati',
    q: 'Drago ____ je.',
    en: 'Nice to meet you.',
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'mi',
    tip: 'The dative pronoun mi.',
  },
  {
    mode: 'osjecati',
    q: 'Hladno mi ____.',
    en: 'I am cold.',
    opts: ['je', 'sam', 'si', 'su'],
    answer: 'je',
    tip: '"It is cold to me": je, not sam.',
  },
  {
    mode: 'osjecati',
    q: 'Ona se osjeća ____.',
    en: 'She feels bad.',
    opts: ['loše', 'loš', 'loša', 'lošu'],
    answer: 'loše',
    tip: 'Osjećati se takes the adverb.',
  },
  {
    mode: 'bojati',
    q: 'Bojim se ____.',
    en: 'I am afraid of the dark.',
    opts: ['mraka', 'mrak', 'mraku', 'mrakom'],
    answer: 'mraka',
    tip: 'Bojati se takes the genitive.',
  },
  {
    mode: 'bojati',
    q: 'Ne bojim se ____.',
    en: 'I am not afraid of the doctor.',
    opts: ['liječnika', 'liječnik', 'liječniku', 'liječnikom'],
    answer: 'liječnika',
    tip: 'Genitive after bojati se.',
  },
  {
    mode: 'bojati',
    q: 'Veselim se ____.',
    en: 'I am looking forward to the summer.',
    opts: ['ljetu', 'ljeto', 'ljeta', 'ljetom'],
    answer: 'ljetu',
    tip: 'Veseliti se takes the dative.',
  },
  {
    mode: 'bojati',
    q: 'Veselimo se ____.',
    en: 'We are looking forward to the trip.',
    opts: ['putovanju', 'putovanje', 'putovanja', 'putovanjem'],
    answer: 'putovanju',
    tip: 'Dative after veseliti se.',
  },
  {
    mode: 'bojati',
    q: '____ se mraka.',
    en: 'I am afraid of the dark.',
    opts: ['Bojim', 'Bojiš', 'Boji', 'Bojimo'],
    answer: 'Bojim',
    tip: 'The ja form of bojati se.',
  },
  {
    mode: 'bojati',
    q: 'Zašto se ____?',
    en: 'Why are you afraid?',
    opts: ['bojiš', 'bojim', 'boji', 'bojati'],
    answer: 'bojiš',
    tip: 'The ti form.',
  },
  {
    mode: 'bojati',
    q: 'Malo sam nervozna prije ____.',
    en: 'I am a little nervous before the exam.',
    opts: ['ispita', 'ispit', 'ispitu', 'ispitom'],
    answer: 'ispita',
    tip: 'Prije takes the genitive.',
  },
  {
    mode: 'bojati',
    q: 'Ona se boji ____.',
    en: 'She is afraid of the sea.',
    opts: ['mora', 'more', 'moru', 'morem'],
    answer: 'mora',
    tip: 'Genitive of more: mora.',
  },
];
