// src/data/drills/b2/bodyPartNounsDrill.ts
//
// B2 BODY-PART NOUNS — the drill for the `body-part-nouns` lesson.
//
// oko and uho are neuter in the singular, but their plurals oči and uši are feminine, so
// the adjective takes -e. After dva / tri / četiri the counting forms are oka and uha.
// The genitive plurals are očiju, ušiju, ruku, nogu. What hurts: boli for one thing,
// bole for several.
//
// Three modes:
//   oblici    — the irregular forms and their cases
//   slaganje  — agreement, and boli / bole
//   izrazi    — expressions with body parts

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const BODY_PART_NOUNS_MODE_LABELS: Record<string, string> = {
  oblici: '👁️ Oblici',
  slaganje: '🔗 Slaganje',
  izrazi: '✋ Izrazi',
};

export const BODY_PART_NOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Množina riječi "oko": ____',
    en: 'The plural of the word for eye.',
    opts: ['oči', 'oka', 'okovi', 'očiju'],
    answer: 'oči',
    tip: 'oči — and it behaves as a feminine plural.',
  },
  {
    mode: 'oblici',
    q: 'Množina riječi "uho": ____',
    en: 'The plural of the word for ear.',
    opts: ['uši', 'uha', 'uhovi', 'ušiju'],
    answer: 'uši',
    tip: 'uši — feminine in the plural.',
  },
  {
    mode: 'oblici',
    q: 'Dijete na crtežu ima dva ____.',
    en: 'The child in the drawing has two eyes.',
    opts: ['oka', 'oči', 'očiju', 'oko'],
    answer: 'oka',
    tip: 'After dva the counting form.',
  },
  {
    mode: 'oblici',
    q: 'Pas ima dva velika ____.',
    en: 'The dog has two big ears.',
    opts: ['uha', 'uši', 'ušiju', 'uho'],
    answer: 'uha',
    tip: 'After dva the counting form, like dva oka.',
  },
  {
    mode: 'oblici',
    q: 'Zaljubljen je do ____.',
    en: 'He is head over heels in love.',
    opts: ['ušiju', 'uši', 'ušima', 'uha'],
    answer: 'ušiju',
    tip: 'do + genitive plural.',
  },
  {
    mode: 'oblici',
    q: 'Djevojka lijepih ____ sjedi do prozora.',
    en: 'A girl with beautiful eyes is sitting by the window.',
    opts: ['očiju', 'oči', 'očima', 'oka'],
    answer: 'očiju',
    tip: 'A quality expressed with the genitive plural.',
  },
  {
    mode: 'oblici',
    q: 'Ne vjerujem svojim ____!',
    en: 'I cannot believe my eyes!',
    opts: ['očima', 'oči', 'očiju', 'oka'],
    answer: 'očima',
    tip: 'vjerovati takes the dative.',
  },
  {
    mode: 'oblici',
    q: 'Padam s ____.',
    en: 'I am dead on my feet.',
    opts: ['nogu', 'noge', 'nogama', 'noga'],
    answer: 'nogu',
    tip: 'Genitive plural of noga: no extra -a.',
  },
  {
    mode: 'oblici',
    q: 'Djeca trče bosih ____ po travi.',
    en: 'The children are running barefoot on the grass.',
    opts: ['nogu', 'noge', 'nogama', 'noga'],
    answer: 'nogu',
    tip: 'A genitive of manner: bosih nogu.',
  },
  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Ana ima ____ oči.',
    en: 'Ana has green eyes.',
    opts: ['zelene', 'zeleni', 'zelena', 'zeleno'],
    answer: 'zelene',
    tip: 'oči is feminine plural.',
  },
  {
    mode: 'slaganje',
    q: 'Oči su mi ____.',
    en: 'My eyes are tired.',
    opts: ['umorne', 'umorni', 'umorna', 'umorno'],
    answer: 'umorne',
    tip: 'Feminine plural agreement.',
  },
  {
    mode: 'slaganje',
    q: 'Boli me ____ oko.',
    en: 'My left eye hurts.',
    opts: ['lijevo', 'lijevi', 'lijeva', 'lijeve'],
    answer: 'lijevo',
    tip: 'In the singular oko is neuter.',
  },
  {
    mode: 'slaganje',
    q: 'Od ekrana me ____ oči.',
    en: 'My eyes hurt from the screen.',
    opts: ['bole', 'boli', 'bolim', 'boliš'],
    answer: 'bole',
    tip: 'Two eyes — plural verb.',
  },
  {
    mode: 'slaganje',
    q: 'Jako me ____ glava.',
    en: 'I have a bad headache.',
    opts: ['boli', 'bole', 'bolim', 'bolite'],
    answer: 'boli',
    tip: 'One head — singular verb.',
  },
  {
    mode: 'slaganje',
    q: 'Poslije maratona ____ me noge.',
    en: 'After the marathon my legs hurt.',
    opts: ['bole', 'boli', 'bolimo', 'bolio'],
    answer: 'bole',
    tip: 'Several legs — plural verb.',
  },
  {
    mode: 'slaganje',
    q: 'Jučer su me ____ uši.',
    en: 'Yesterday my ears hurt.',
    opts: ['boljele', 'boljeli', 'boljelo', 'boljela'],
    answer: 'boljele',
    tip: 'The participle agrees with uši: feminine plural.',
  },
  {
    mode: 'slaganje',
    q: 'Ima ____ uši.',
    en: 'He has big ears.',
    opts: ['velike', 'veliki', 'velika', 'veliko'],
    answer: 'velike',
    tip: 'uši is feminine plural.',
  },
  {
    mode: 'slaganje',
    q: 'Uši su mu ____ od hladnoće.',
    en: 'His ears are red from the cold.',
    opts: ['crvene', 'crveni', 'crveno', 'crvena'],
    answer: 'crvene',
    tip: 'Feminine plural agreement.',
  },
  // ── izrazi ────────────────────────────────────────────────────────────────
  {
    mode: 'izrazi',
    q: 'Razgovarat ćemo u četiri ____.',
    en: 'We will talk in private.',
    opts: ['oka', 'oči', 'uha', 'ruke'],
    answer: 'oka',
    tip: 'u četiri oka — two people, four eyes.',
  },
  {
    mode: 'izrazi',
    q: 'Djed sve popravi sam, ima zlatne ____.',
    en: 'Grandad fixes everything himself; he is very skilful.',
    opts: ['ruke', 'noge', 'oči', 'uši'],
    answer: 'ruke',
    tip: 'Skill lives in the hands.',
  },
  {
    mode: 'izrazi',
    q: 'Što znači "padati s nogu"?',
    en: 'What does the idiom about falling off one’s feet mean?',
    opts: ['biti jako umoran', 'spotaknuti se', 'loše plesati', 'brzo hodati'],
    answer: 'biti jako umoran',
    tip: 'So tired you could fall over.',
  },
  {
    mode: 'izrazi',
    q: 'Što znači "u četiri oka"?',
    en: 'What does the phrase about four eyes mean?',
    opts: ['nasamo, samo nas dvoje', 's naočalama', 'vrlo pažljivo', 'na prvi pogled'],
    answer: 'nasamo, samo nas dvoje',
    tip: 'Two people, four eyes, nobody else.',
  },
  {
    mode: 'izrazi',
    q: '____ na srce, film mi se nije svidio.',
    en: 'Honestly, I did not like the film.',
    opts: ['Ruku', 'Ruka', 'Ruke', 'Rukom'],
    answer: 'Ruku',
    tip: 'A hand put ON the heart: accusative.',
  },
  {
    mode: 'izrazi',
    q: 'Zaljubila se ____ ušiju.',
    en: 'She fell head over heels in love.',
    opts: ['do', 'od', 'na', 'u'],
    answer: 'do',
    tip: 'Up to the ears.',
  },
  {
    mode: 'izrazi',
    q: 'Što znači "imati zlatne ruke"?',
    en: 'What does the idiom about golden hands mean?',
    opts: ['biti vrlo spretan', 'biti bogat', 'nositi puno prstenja', 'imati bolesne ruke'],
    answer: 'biti vrlo spretan',
    tip: 'Said of someone who can make or fix anything.',
  },
  {
    mode: 'izrazi',
    q: 'Ne mogu vjerovati svojim ____!',
    en: 'I cannot believe my ears!',
    opts: ['ušima', 'uši', 'ušiju', 'uha'],
    answer: 'ušima',
    tip: 'vjerovati + dative plural.',
  },
];
