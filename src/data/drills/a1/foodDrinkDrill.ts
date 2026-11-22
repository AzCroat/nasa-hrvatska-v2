// src/data/drills/a1/foodDrinkDrill.ts
//
// A1 FOOD, DRINK AND ORDERING — the drill for the `food-drink` lesson (A1, 44).
//
// Follows Hrvatski za početnike 1, pages 53–58 ("Dobar tek!"): the café dialogue
// ("Izvolite! Što želite?" – "Molim Vas kavu i vodu!"), the row "Molim Vas ____. (kava)",
// the jesti and piti sentences with their objects ("Elizabeta i Mislav jedu povrće"), the
// tastes (ljut, sladak, gorak, kiseo, slan), the food pages and "Što oni jedu" (za doručak,
// za ručak, za večeru). The restaurant menu on page 58 (predjelo, glavno jelo, desert)
// belongs to the next lesson and is not used here.
//
// Three modes:
//   kafic     — ordering in a café: the thing you order, molim Vas / molim te
//   stoJedemo — what we eat and drink is an object
//   okusi     — tastes and meals: the adjective agrees with the food

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FOOD_DRINK_MODE_LABELS: Record<string, string> = {
  kafic: '☕ U kafiću',
  stoJedemo: '🍽️ Što jedemo i pijemo?',
  okusi: '🍋 Okusi i obroci',
};

export const FOOD_DRINK_DRILL_DATA: ModeDrillItem[] = [
  // ── kafic ─────────────────────────────────────────────────────────────────
  {
    mode: 'kafic',
    q: 'Molim Vas ____ i vodu. (kava)',
    en: 'A coffee and a water, please.',
    opts: ['kavu', 'kava', 'kavi', 'kavom'],
    answer: 'kavu',
    tip: 'What you order is the object, so feminine -a becomes -u: kavu, just like vodu next to it. kava is the menu form, and -i and -om are endings of other forms.',
  },
  {
    mode: 'kafic',
    q: 'Za mene ____, molim. (voda)',
    en: 'A water for me, please.',
    opts: ['vodu', 'voda', 'vodi', 'vodom'],
    answer: 'vodu',
    tip: 'The drink you order takes the object form: voda → vodu. "Za mene voda" leaves it in the dictionary form, and vodi and vodom are other forms of the word.',
  },
  {
    mode: 'kafic',
    q: 'Molim Vas jedan ____.',
    en: 'One tea, please.',
    opts: ['čaj', 'čaju', 'čaje', 'čajevi'],
    answer: 'čaj',
    tip: 'čaj is a masculine thing, so as an object it does not change: Molim Vas čaj. Only feminine nouns in -a change; čaju and čaje add endings that are not needed, and čajevi is the plural.',
  },
  {
    mode: 'kafic',
    q: 'Za gospođu ____, molim. (bijela kava)',
    en: 'A latte for the lady, please.',
    opts: ['bijelu kavu', 'bijela kava', 'bijelu kava', 'bijela kavu'],
    answer: 'bijelu kavu',
    tip: 'Both words change together: bijela kava → bijelu kavu. "bijela kava" changes nothing, and the two mixed versions change only one of the two words.',
  },
  {
    mode: 'kafic',
    q: '____ pivo, molim.',
    en: 'One beer, please.',
    opts: ['Jedno', 'Jedan', 'Jednu', 'Jedna'],
    answer: 'Jedno',
    tip: 'pivo is neuter, so "one" is jedno, and a neuter object does not change. Jedan is for a masculine noun (jedan čaj), and Jednu and Jedna are feminine forms.',
  },
  {
    mode: 'kafic',
    q: '____ kavu, molim.',
    en: 'One coffee, please.',
    opts: ['Jednu', 'Jedna', 'Jedan', 'Jedno'],
    answer: 'Jednu',
    tip: 'kavu is a feminine object, so "one" changes with it: jednu kavu. Jedna is the dictionary form, Jedan is masculine, and Jedno is neuter.',
  },
  {
    mode: 'kafic',
    q: 'Gost: "Molim Vas čaj." Konobar: "____!"',
    en: 'Guest: "A tea, please." Waiter, bringing it: "Here you are!"',
    opts: ['Izvolite', 'Hvala', 'Doviđenja', 'Živjeli'],
    answer: 'Izvolite',
    tip: 'A waiter hands things over (and opens the order) with Izvolite. Hvala is "thank you", which the guest says, Doviđenja is "goodbye", and Živjeli is "cheers".',
  },
  {
    mode: 'kafic',
    q: 'Molim ____ vodu.',
    cue: 'You are speaking to a waiter.',
    en: 'Water, please.',
    opts: ['Vas', 'te', 'Vi', 'ti'],
    answer: 'Vas',
    tip: 'A waiter is addressed formally: Molim Vas. Molim te is for a friend, and Vi and ti are subject forms, which cannot follow molim.',
  },
  {
    mode: 'kafic',
    q: 'Molim ____ sol.',
    cue: 'You are speaking to a friend at the table.',
    en: 'The salt, please.',
    opts: ['te', 'Vas', 'ti', 'Vi'],
    answer: 'te',
    tip: 'To a friend it is Molim te. Molim Vas is the formal version for a waiter or a stranger, and ti and Vi are subject forms, which cannot follow molim.',
  },

  // ── stoJedemo ─────────────────────────────────────────────────────────────
  {
    mode: 'stoJedemo',
    q: 'Za doručak jedem ____ i sir.',
    en: 'For breakfast I eat bread and cheese.',
    opts: ['kruh', 'kruhu', 'kruhe', 'kruhovi'],
    answer: 'kruh',
    tip: 'kruh is a masculine thing, so the object looks like the dictionary form, the same as sir. kruhu and kruhe add endings that are not needed, and kruhovi is a plural.',
  },
  {
    mode: 'stoJedemo',
    q: 'Moja baka često jede ____. (riba)',
    en: 'My grandmother often eats fish.',
    opts: ['ribu', 'riba', 'ribi', 'ribom'],
    answer: 'ribu',
    tip: 'What she eats is the object: riba → ribu. "jede riba" leaves the noun unchanged, the most common slip, and ribi and ribom are other forms.',
  },
  {
    mode: 'stoJedemo',
    q: 'Djeca piju ____.',
    en: 'The children are drinking milk.',
    opts: ['mlijeko', 'mlijeku', 'mlijeke', 'mlijekom'],
    answer: 'mlijeko',
    tip: 'mlijeko is neuter, and a neuter object does not change. mlijeku and mlijekom are other forms, and mlijeke borrows a feminine ending.',
  },
  {
    mode: 'stoJedemo',
    q: 'Za večeru jedemo ____. (juha)',
    en: 'For dinner we eat soup.',
    opts: ['juhu', 'juha', 'juhi', 'juhom'],
    answer: 'juhu',
    tip: 'juha is feminine and it is what we eat, so -a becomes -u: juhu. juha is the dictionary form, and juhi and juhom are other forms.',
  },
  {
    mode: 'stoJedemo',
    q: 'Navečer pijemo ____.',
    en: 'In the evening we drink white wine.',
    opts: ['bijelo vino', 'bijelu vinu', 'bijela vino', 'bijelo vinu'],
    answer: 'bijelo vino',
    tip: 'vino is neuter, so neither word changes: Pijemo bijelo vino. The -u ending is only for feminine nouns in -a, and bijela does not match a neuter noun.',
  },
  {
    mode: 'stoJedemo',
    q: 'Za ručak jedem ____. (zelena salata)',
    en: 'For lunch I eat a green salad.',
    opts: ['zelenu salatu', 'zelena salata', 'zelenu salata', 'zelena salatu'],
    answer: 'zelenu salatu',
    tip: 'The adjective changes together with its feminine noun: zelenu salatu. "zelena salata" is the menu form, and the mixed versions change only one word.',
  },
  {
    mode: 'stoJedemo',
    q: 'Hvala, ne jedem ____.',
    en: 'Thank you, I do not eat meat.',
    opts: ['meso', 'mesu', 'mese', 'mesom'],
    answer: 'meso',
    tip: 'meso is neuter, so it stays as it is: ne jedem meso. mesu and mesom are other forms of the word, and mese borrows a feminine ending.',
  },
  {
    mode: 'stoJedemo',
    q: 'Baka i ja jedemo ____.',
    en: 'Grandma and I are eating cake.',
    opts: ['kolač', 'kolaču', 'kolačom', 'kolači'],
    answer: 'kolač',
    tip: 'kolač is a masculine thing, so the object form is the dictionary form. kolaču and kolačom add endings, and kolači is the plural as a subject.',
  },
  {
    mode: 'stoJedemo',
    q: '____ li vi ribu?',
    en: 'Do you (several people) eat fish?',
    opts: ['Jedete', 'Jedeš', 'Jedu', 'Jedemo'],
    answer: 'Jedete',
    tip: 'With vi the verb is jedete. Jedeš is for ti, Jedu for oni, and Jedemo for mi.',
  },
  {
    mode: 'stoJedemo',
    q: 'Ana i Marko ____ sok.',
    en: 'Ana and Marko are drinking juice.',
    opts: ['piju', 'pije', 'pijemo', 'pijete'],
    answer: 'piju',
    tip: 'Two people are "they": oni piju. pije is for one person, pijemo for mi, and pijete for vi.',
  },

  // ── okusi ─────────────────────────────────────────────────────────────────
  {
    mode: 'okusi',
    q: 'Limun je ____.',
    en: 'A lemon is sour.',
    opts: ['kiseo', 'kisela', 'kiselo', 'kiseli'],
    answer: 'kiseo',
    tip: 'limun is masculine, so the taste word is in its plain form: kiseo. kisela is feminine, kiselo neuter, and kiseli plural.',
  },
  {
    mode: 'okusi',
    q: 'Mlijeko je ____.',
    en: 'The milk is sour.',
    opts: ['kiselo', 'kisela', 'kiseo', 'kiseli'],
    answer: 'kiselo',
    tip: 'mlijeko is neuter: kiseo becomes kiselo. kisela goes with a feminine noun, kiseo with a masculine one, and kiseli with a masculine plural.',
  },
  {
    mode: 'okusi',
    q: 'Kava je ____.',
    en: 'The coffee is bitter.',
    opts: ['gorka', 'gorak', 'gorko', 'goraka'],
    answer: 'gorka',
    tip: 'kava is feminine, and gorak loses its a before the ending: gorka. goraka keeps the vowel, gorak is masculine, and gorko is neuter.',
  },
  {
    mode: 'okusi',
    q: 'Kolači su ____.',
    en: 'The cakes are sweet.',
    opts: ['slatki', 'slatke', 'slatka', 'sladak'],
    answer: 'slatki',
    tip: 'kolači is a masculine plural, so sladak becomes slatki. slatke is the feminine plural, slatka the feminine singular, and sladak describes one cake.',
  },
  {
    mode: 'okusi',
    q: 'Sir je ____.',
    en: 'The cheese is salty.',
    opts: ['slan', 'slana', 'slano', 'slani'],
    answer: 'slan',
    tip: 'sir is masculine: slan. slana would describe juha, slano a neuter noun such as meso, and slani a masculine plural.',
  },
  {
    mode: 'okusi',
    q: 'Juha je ____.',
    en: 'The soup is spicy.',
    opts: ['ljuta', 'ljut', 'ljuto', 'ljuti'],
    answer: 'ljuta',
    tip: 'juha is feminine, so the adjective takes -a: ljuta. ljut is the masculine form, ljuto the neuter one, and ljuti a masculine plural.',
  },
  {
    mode: 'okusi',
    q: 'Voda je ____, a kava je vruća.',
    en: 'The water is cold, and the coffee is hot.',
    opts: ['hladna', 'hladan', 'hladno', 'hladni'],
    answer: 'hladna',
    tip: 'voda is feminine, so hladan becomes hladna, matching vruća in the second half. hladan is masculine, hladno neuter, and hladni plural.',
  },
  {
    mode: 'okusi',
    q: 'Doručak, ručak i ____.',
    en: 'Breakfast, lunch and dinner.',
    opts: ['večera', 'večer', 'jelovnik', 'račun'],
    answer: 'večera',
    tip: 'The three meals are doručak, ručak and večera. večer is the evening itself, jelovnik is the menu, and račun is the check.',
  },
  {
    mode: 'okusi',
    q: 'Što NIJE piće?',
    en: 'Which one is NOT a drink?',
    opts: ['juha', 'čaj', 'sok', 'mlijeko'],
    answer: 'juha',
    tip: 'juha is soup, which you eat (jedem juhu). čaj, sok and mlijeko are tea, juice and milk, all things you drink (pijem).',
  },
];
