// src/data/drills/a2/volunteeringDrill.ts
//
// A2 VOLUNTEERING — the drill for the `volunteering` lesson.
//
// Three modes:
//   rijeci   — the vocabulary in its sentences: udruga (u udruzi), pučka kuhinja, krv…
//   glagoli  — volontirati, pomagati + dative, prijaviti se, and the past of a finished job
//   zelje    — wishes and imagined conditions: Volio bih volontirati.
//
// Distractors are a wrong case, a wrong person (fixed by the English), the infinitive where a
// finite verb is needed, or the reverse. No item turns on aspect alone.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VOLUNTEERING_MODE_LABELS: Record<string, string> = {
  rijeci: '📝 Riječi',
  glagoli: '🤝 Glagoli',
  zelje: '💭 Želje',
};

export const VOLUNTEERING_DRILL_DATA: ModeDrillItem[] = [
  // ── rijeci ─────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Moja sestra je ____ u skloništu za životinje.',
    en: 'My sister is a volunteer at the animal shelter.',
    opts: ['volonterka', 'volontiranje', 'volontira', 'volontirka'],
    answer: 'volonterka',
    tip: 'A woman volunteer is a volonterka.',
  },
  {
    mode: 'rijeci',
    q: 'Radim u ____ za zaštitu životinja.',
    en: 'I work at an animal-protection association.',
    opts: ['udruzi', 'udrugi', 'udruga', 'udrugu'],
    answer: 'udruzi',
    tip: 'u + locative, and g becomes z before -i.',
  },
  {
    mode: 'rijeci',
    q: 'Skupljamo hranu za ____ kuhinju.',
    en: 'We are collecting food for the soup kitchen.',
    opts: ['pučku', 'pučka', 'pučkoj', 'pučke'],
    answer: 'pučku',
    tip: 'za + accusative: pučku kuhinju.',
  },
  {
    mode: 'rijeci',
    q: 'Dvaput godišnje darujem ____.',
    en: 'I give blood twice a year.',
    opts: ['krv', 'krvi', 'krvlju', 'krvima'],
    answer: 'krv',
    tip: 'krv is feminine and its accusative looks like the nominative.',
  },
  {
    mode: 'rijeci',
    q: 'Prijavio sam se na akciju ____ plaže.',
    en: 'I signed up for a beach clean-up.',
    opts: ['čišćenja', 'čišćenje', 'čišćenju', 'čistiti'],
    answer: 'čišćenja',
    tip: 'A drive OF cleaning: the genitive čišćenja.',
  },
  {
    mode: 'rijeci',
    q: 'Skupljamo novac za ____ akciju.',
    en: 'We are collecting money for a charity drive.',
    opts: ['humanitarnu', 'humanitarna', 'humanitarnoj', 'humanitarne'],
    answer: 'humanitarnu',
    tip: 'za + accusative, feminine: humanitarnu akciju.',
  },
  {
    mode: 'rijeci',
    q: 'Dobio sam ____ o volontiranju.',
    en: 'I got a certificate of volunteering.',
    opts: ['potvrdu', 'potvrda', 'potvrdi', 'potvrde'],
    answer: 'potvrdu',
    tip: 'The object of dobiti: accusative potvrdu.',
  },
  {
    mode: 'rijeci',
    q: 'Volontiranje mi daje puno ____.',
    en: 'Volunteering gives me a lot of satisfaction.',
    opts: ['zadovoljstva', 'zadovoljstvo', 'zadovoljstvu', 'zadovoljstvom'],
    answer: 'zadovoljstva',
    tip: 'After puno comes the genitive.',
  },

  // ── glagoli ────────────────────────────────────────────────────────────
  {
    mode: 'glagoli',
    q: 'Svake subote ____ u pučkoj kuhinji.',
    en: 'Every Saturday I volunteer at the soup kitchen.',
    opts: ['volontiram', 'volontiraj', 'volontirati', 'volontiran'],
    answer: 'volontiram',
    tip: 'An -irati verb in the ja form.',
  },
  {
    mode: 'glagoli',
    q: 'Pomažemo ____ u potrebi.',
    en: 'We help people in need.',
    opts: ['ljudima', 'ljude', 'ljudi', 'ljudma'],
    answer: 'ljudima',
    tip: 'pomagati takes the dative: ljudima.',
  },
  {
    mode: 'glagoli',
    q: 'Ana pomaže ____.',
    en: 'Ana helps her neighbour. (a woman)',
    opts: ['susjedi', 'susjede', 'susjeda', 'susjedom'],
    answer: 'susjedi',
    tip: 'pomagati + dative: susjeda → susjedi.',
  },
  {
    mode: 'glagoli',
    q: 'Prošle godine smo ____ tonu hrane.',
    en: 'Last year we collected a tonne of food.',
    opts: ['skupili', 'skupio', 'skupiti', 'skupljamo'],
    answer: 'skupili',
    tip: 'smo + the plural participle: skupili.',
  },
  {
    mode: 'glagoli',
    q: 'Prijavila sam ____ kao volonterka.',
    en: 'I signed up as a volunteer.',
    opts: ['se', 'si', 'je', 'me'],
    answer: 'se',
    tip: 'To sign up is prijaviti se.',
  },
  {
    mode: 'glagoli',
    q: 'Volonteri ____ plažu svakog proljeća.',
    en: 'The volunteers clean the beach every spring.',
    opts: ['čiste', 'čisti', 'čistimo', 'čistiti'],
    answer: 'čiste',
    tip: 'volonteri is oni: čiste.',
  },
  {
    mode: 'glagoli',
    q: 'U skloništu ____ pse.',
    en: 'At the shelter I walk the dogs.',
    opts: ['šetam', 'šeta', 'šetaju', 'šetati'],
    answer: 'šetam',
    tip: 'The ja form of šetati.',
  },
  {
    mode: 'glagoli',
    q: 'Djeca ____ igračke za humanitarnu akciju.',
    en: 'The children are collecting toys for the charity drive.',
    opts: ['skupljaju', 'skuplja', 'skupljamo', 'skupljati'],
    answer: 'skupljaju',
    tip: 'djeca takes a plural verb: skupljaju.',
  },

  // ── zelje ──────────────────────────────────────────────────────────────
  {
    mode: 'zelje',
    q: 'Volio bih ____ u inozemstvu.',
    en: 'I would like to volunteer abroad.',
    opts: ['volontirati', 'volontiram', 'volontirao', 'volontiraj'],
    answer: 'volontirati',
    tip: 'After a wish comes the infinitive.',
  },
  {
    mode: 'zelje',
    q: 'Kad bih imala vremena, ____ bih svaki tjedan.',
    en: 'If I had time, I would volunteer every week. (a woman speaking)',
    opts: ['volontirala', 'volontirao', 'volontiram', 'volontirati'],
    answer: 'volontirala',
    tip: 'The participle agrees with the woman speaking.',
  },
  {
    mode: 'zelje',
    q: 'Voljela bih ____ djeci.',
    en: 'I would like to help children.',
    opts: ['pomagati', 'pomažem', 'pomagala', 'pomagaj'],
    answer: 'pomagati',
    tip: 'voljela bih + the infinitive.',
  },
  {
    mode: 'zelje',
    q: 'Hoćeš li ____ u subotu? Čistimo park.',
    en: 'Will you come on Saturday? We are cleaning the park.',
    opts: ['doći', 'dođeš', 'dođi', 'došao'],
    answer: 'doći',
    tip: 'hoćeš li + the infinitive.',
  },
  {
    mode: 'zelje',
    q: '____ bismo skupljati odjeću.',
    en: 'We would like to collect clothes.',
    opts: ['Voljeli', 'Volimo', 'Voljela', 'Voljeti'],
    answer: 'Voljeli',
    tip: 'bismo takes the plural participle: voljeli.',
  },
  {
    mode: 'zelje',
    q: 'Kad bismo imali auto, ____ bismo hranu u sklonište.',
    en: 'If we had a car, we would take food to the shelter.',
    opts: ['odvezli', 'odvezemo', 'odvesti', 'odvezao'],
    answer: 'odvezli',
    tip: 'bismo + the plural participle of odvesti.',
  },
  {
    mode: 'zelje',
    q: 'Biste li ____ darivati krv?',
    en: 'Would you like to give blood? (polite)',
    opts: ['htjeli', 'htjeti', 'hoćete', 'htio'],
    answer: 'htjeli',
    tip: 'biste takes the plural participle: htjeli.',
  },
  {
    mode: 'zelje',
    q: 'Rado bih ____ u udruzi.',
    en: 'I would gladly help at the association. (a man speaking)',
    opts: ['pomogao', 'pomoći', 'pomažem', 'pomogla'],
    answer: 'pomogao',
    tip: 'bih + the participle; a man says pomogao.',
  },
];
