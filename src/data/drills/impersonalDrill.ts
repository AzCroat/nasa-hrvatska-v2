// src/data/drills/impersonalDrill.ts
//
// B1 IMPERSONAL — the drill for the `impersonal` lesson.
//
// `bezlicne` exists but is B2 and tagged `passive`, which is a different
// category with its own route. The B1 lesson is not about the passive: it is
// about the everyday constructions that have no subject at all — the language of
// every sign in Croatia (*ovdje se ne puši*), of every instruction
// (*treba pričekati*), and of how you say you are cold (*hladno mi je*, not
// *ja sam hladan*, which says you are a cold person).
//
// Three modes:
//   treba — treba + infinitive, and what happens when a person is added
//   se    — modal + se, and the kaže se / zna se family
//   dativ — the subjectless sentence with a dative experiencer

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const IMPERSONAL_MODE_LABELS: Record<string, string> = {
  treba: '📋 Treba',
  se: '🚭 Konstrukcije sa se',
  dativ: '🥶 Hladno mi je',
};

export const IMPERSONAL_DRILL_DATA: ModeDrillItem[] = [
  // ── treba ─────────────────────────────────────────────────────────────────
  {
    mode: 'treba',
    q: '____ pričekati.',
    en: 'One should wait.',
    opts: ['Treba', 'Trebam', 'Trebaju', 'Trebamo'],
    answer: 'Treba',
    tip: 'Impersonal treba never changes for person: treba pričekati.',
  },
  {
    mode: 'treba',
    q: 'Treba ____ odmor. (ja)',
    en: 'I need a rest.',
    opts: ['mi', 'me', 'ja', 'mene'],
    answer: 'mi',
    tip: 'Adding a person puts them in the DATIVE: treba mi odmor.',
  },
  {
    mode: 'treba',
    q: 'Treba ____ pomoć. (ti)',
    en: 'You need help.',
    opts: ['ti', 'te', 'tebe', 'tvoj'],
    answer: 'ti',
    tip: 'Dative again: treba ti pomoć.',
  },
  {
    mode: 'treba',
    q: '____ je rezervirati stol.',
    en: 'It is necessary to book a table.',
    opts: ['Potrebno', 'Potreban', 'Potrebna', 'Potrebni'],
    answer: 'Potrebno',
    tip: 'The neuter form carries every impersonal adjective: potrebno je, moguće je.',
  },
  {
    mode: 'treba',
    q: 'Mijenja li se "treba" po licu u bezličnoj uporabi?',
    en: 'Does impersonal treba change for person?',
    opts: ['ne', 'da', 'samo u množini', 'samo u prošlosti'],
    answer: 'ne',
    tip: 'It stays treba, whoever is involved. The person moves into the dative instead.',
  },
  {
    mode: 'treba',
    q: 'Treba ____ karte unaprijed.',
    en: 'One should buy tickets in advance.',
    opts: ['kupiti', 'kupim', 'kupujemo', 'kupuju'],
    answer: 'kupiti',
    tip: 'treba + infinitive.',
  },
  {
    mode: 'treba',
    q: '____ je da dođeš ranije.',
    en: 'It is possible that you will come earlier.',
    opts: ['Moguće', 'Moguć', 'Moguća', 'Mogući'],
    answer: 'Moguće',
    tip: 'Neuter again: moguće je da…',
  },
  {
    mode: 'treba',
    q: 'Trebaju ____ nove cipele. (mi)',
    en: 'We need new shoes.',
    opts: ['nam', 'nas', 'mi', 'naše'],
    answer: 'nam',
    tip: 'With a plural thing needed, trebati agrees with IT — but the person stays dative.',
  },

  // ── se ────────────────────────────────────────────────────────────────────
  {
    mode: 'se',
    q: 'Ovdje se ne ____.',
    en: 'No smoking here.',
    opts: ['puši', 'pušim', 'puše', 'pušiti'],
    answer: 'puši',
    tip: 'Third person singular + se — the language of every sign in the country.',
  },
  {
    mode: 'se',
    q: 'Može ____ platiti karticom.',
    en: 'You can pay by card.',
    opts: ['se', 'ga', 'mu', 'je'],
    answer: 'se',
    tip: 'Modal + se: može se platiti.',
  },
  {
    mode: 'se',
    q: 'Ne ____ se pušiti.',
    en: 'Smoking is not allowed.',
    opts: ['smije', 'smijem', 'smiju', 'smjeti'],
    answer: 'smije',
    tip: 'Ne smije se — the standard prohibition.',
  },
  {
    mode: 'se',
    q: '____ se da je dobar liječnik.',
    en: 'It is said he is a good doctor.',
    opts: ['Kaže', 'Kažem', 'Kažu', 'Reći'],
    answer: 'Kaže',
    tip: 'kaže se, zna se, vidi se — it is said, it is known, it shows.',
  },
  {
    mode: 'se',
    q: 'Koje lice nosi bezličnu konstrukciju sa se?',
    en: 'Which person carries the se-construction?',
    opts: ['treće jednine', 'prvo jednine', 'treće množine', 'drugo množine'],
    answer: 'treće jednine',
    tip: 'Always third person singular, whoever is actually doing it.',
  },
  {
    mode: 'se',
    q: 'Kako se ____ do kolodvora?',
    en: 'How does one get to the station?',
    opts: ['ide', 'idem', 'idu', 'ići'],
    answer: 'ide',
    tip: 'Kako se ide — the way you ask directions without naming yourself.',
  },
  {
    mode: 'se',
    q: 'Ovdje se ____ hrvatski.',
    en: 'Croatian is spoken here.',
    opts: ['govori', 'govorim', 'govore', 'govoriti'],
    answer: 'govori',
    tip: 'Same shape again: ovdje se govori hrvatski.',
  },
  {
    mode: 'se',
    q: 'Zašto je "se" korisno?',
    en: 'Why is the se-construction useful?',
    opts: ['ne mora se reći tko', 'skraćuje rečenicu', 'zvuči uljudnije', 'izbjegava padeže'],
    answer: 'ne mora se reći tko',
    tip: 'It lets you say what happens without naming who does it — which is the whole point.',
  },

  // ── dativ ─────────────────────────────────────────────────────────────────
  {
    mode: 'dativ',
    q: 'Hladno ____ je.',
    en: 'I am cold.',
    opts: ['mi', 'me', 'ja', 'sam'],
    answer: 'mi',
    tip: 'Not "ja sam hladan" — that says you are a cold PERSON. Hladno mi je.',
  },
  {
    mode: 'dativ',
    q: 'Žao ____ je. (ja)',
    en: 'I am sorry.',
    opts: ['mi', 'me', 'mene', 'moj'],
    answer: 'mi',
    tip: 'Žao mi je — one of the first fixed phrases worth knowing whole.',
  },
  {
    mode: 'dativ',
    q: 'Drago ____ je. (ja)',
    en: 'I am pleased.',
    opts: ['mi', 'me', 'sam', 'mene'],
    answer: 'mi',
    tip: 'Drago mi je — literally "it is dear to me".',
  },
  {
    mode: 'dativ',
    q: 'Vruće ____ je. (ti)',
    en: 'You are hot.',
    opts: ['ti', 'te', 'tebe', 'si'],
    answer: 'ti',
    tip: 'Same pattern for every sensation: vruće ti je.',
  },
  {
    mode: 'dativ',
    q: 'Koji padež nosi osobu u ovim rečenicama?',
    en: 'Which case carries the person?',
    opts: ['dativ', 'nominativ', 'akuzativ', 'genitiv'],
    answer: 'dativ',
    tip: 'The sentence has no subject at all; the person sits in the dative.',
  },
  {
    mode: 'dativ',
    q: 'Zašto "ja sam hladan" nije isto?',
    en: 'Why is that not the same?',
    opts: ['znači da ste hladna osoba', 'negramatično je', 'preformalno je', 'nema razlike'],
    answer: 'znači da ste hladna osoba',
    tip: 'It is perfectly grammatical and says something about your character.',
  },
  {
    mode: 'dativ',
    q: 'Muka ____ je. (on)',
    en: 'He feels sick.',
    opts: ['mu', 'ga', 'on', 'njega'],
    answer: 'mu',
    tip: 'Dative again: muka mu je.',
  },
  {
    mode: 'dativ',
    q: 'Kiša ____. (bezlično)',
    en: 'It is raining.',
    opts: ['pada', 'padam', 'padaju', 'padati'],
    answer: 'pada',
    tip: 'Weather takes the third person singular with no subject to name.',
  },
];
