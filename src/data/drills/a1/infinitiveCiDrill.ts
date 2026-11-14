// src/data/drills/a1/infinitiveCiDrill.ts
//
// A1 VERBS IN -ĆI — the drill for the `infinitive-ci` lesson.
//
// ići, doći, otići, moći, pomoći, reći, peći: the infinitive hides the present stem
// (mogu, pečem, pomognem), the past shows it again (mogao, pekla), and the future keeps
// the whole infinitive (Doći ću). Everyday "I say" is kažem, from kazati.
//
// Three modes:
//   prezent — the present forms
//   proslo  — the past participles
//   buduce  — the future, written whole

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INFINITIVE_CI_MODE_LABELS: Record<string, string> = {
  prezent: '⏺️ Prezent',
  proslo: '⏪ Prošlo',
  buduce: '⏩ Buduće',
};

export const INFINITIVE_CI_DRILL_DATA: ModeDrillItem[] = [
  {
    mode: 'prezent',
    q: 'Ja ne ____ doći.',
    en: 'I cannot come.',
    opts: ['mogu', 'možem', 'moći', 'može'],
    answer: 'mogu',
    tip: 'The ja form of moći is mogu.',
  },
  {
    mode: 'prezent',
    q: '____ li mi pomoći?',
    en: 'Can you help me?',
    opts: ['Možeš', 'Mogeš', 'Mogu', 'Moći'],
    answer: 'Možeš',
    tip: 'In the ti form the g softens to ž.',
  },
  {
    mode: 'prezent',
    q: 'Nazovi me kada ____ kući.',
    en: 'Call me when you get home.',
    opts: ['dođeš', 'doćeš', 'dođem', 'doći'],
    answer: 'dođeš',
    tip: 'The ti form of doći.',
  },
  {
    mode: 'prezent',
    q: 'Oni ____ na posao vlakom.',
    en: 'They go to work by train.',
    opts: ['idu', 'ide', 'idemo', 'iđu'],
    answer: 'idu',
    tip: 'The oni form of ići.',
  },
  {
    mode: 'prezent',
    q: 'Baka ____ kruh svake subote.',
    en: 'Grandma bakes bread every Saturday.',
    opts: ['peče', 'peće', 'peka', 'peći'],
    answer: 'peče',
    tip: 'peći → peče.',
  },
  {
    mode: 'prezent',
    q: 'Što ____ na kino večeras?',
    en: 'How about the cinema tonight?',
    opts: ['kažeš', 'kazaš', 'kažem', 'kazati'],
    answer: 'kažeš',
    tip: 'The everyday present of "say": kažem, kažeš.',
  },
  {
    mode: 'prezent',
    q: 'Ako ____ sada, stići ćemo.',
    en: 'If we leave now, we will make it.',
    opts: ['odemo', 'odem', 'otići', 'odete'],
    answer: 'odemo',
    tip: 'The mi form of otići.',
  },
  {
    mode: 'prezent',
    q: 'Ako mi ____, bit ću sretna.',
    en: 'If you help me, I will be happy.',
    opts: ['pomogneš', 'pomoćeš', 'pomogne', 'pomoći'],
    answer: 'pomogneš',
    tip: 'pomoći → pomognem, pomogneš.',
  },
  {
    mode: 'proslo',
    q: 'Jučer smo ____ na izlet.',
    en: 'Yesterday we went on a trip.',
    opts: ['išli', 'išao', 'išla', 'idili'],
    answer: 'išli',
    tip: 'Past of ići, plural.',
  },
  {
    mode: 'proslo',
    q: 'Ana je ____ kasno.',
    en: 'Ana came late.',
    opts: ['došla', 'došao', 'doćla', 'došli'],
    answer: 'došla',
    tip: 'Past of doći, feminine.',
  },
  {
    mode: 'proslo',
    q: 'Marko je ____ ranije.',
    en: 'Marko left early.',
    opts: ['otišao', 'otišla', 'otićao', 'otišli'],
    answer: 'otišao',
    tip: 'Past of otići, masculine.',
  },
  {
    mode: 'proslo',
    q: '____ sam ti istinu.',
    en: 'I told you the truth (a man speaking).',
    opts: ['Rekao', 'Rekla', 'Rečao', 'Rekli'],
    answer: 'Rekao',
    tip: 'The k returns in the past: rekao.',
  },
  {
    mode: 'proslo',
    q: 'Nisam ____ spavati.',
    en: 'I could not sleep (a woman speaking).',
    opts: ['mogla', 'mogao', 'možla', 'mogli'],
    answer: 'mogla',
    tip: 'The g returns in the past: mogla.',
  },
  {
    mode: 'proslo',
    q: 'Baka je ____ kolače.',
    en: 'Grandma baked cakes.',
    opts: ['pekla', 'pekao', 'pečla', 'pekli'],
    answer: 'pekla',
    tip: 'The k returns in the past: pekla.',
  },
  {
    mode: 'proslo',
    q: 'Tko ti je ____?',
    en: 'Who helped you?',
    opts: ['pomogao', 'pomoćao', 'pomogli', 'pomognuo'],
    answer: 'pomogao',
    tip: 'Past of pomoći, masculine with tko.',
  },
  {
    mode: 'proslo',
    q: 'Jeste li ____ na vrijeme?',
    en: 'Did you all come on time?',
    opts: ['došli', 'doćli', 'došao', 'dođli'],
    answer: 'došli',
    tip: 'Past of doći, plural for a group: došao, došla … došli.',
  },
  {
    mode: 'buduce',
    q: '____ ću sutra.',
    en: 'I will come tomorrow.',
    opts: ['Doći', 'Doć', 'Dođem', 'Došao'],
    answer: 'Doći',
    tip: '-ći verbs keep the whole infinitive before ću.',
  },
  {
    mode: 'buduce',
    q: '____ ćemo na more u srpnju.',
    en: 'We will go to the seaside in July.',
    opts: ['Ići', 'Ić', 'Idemo', 'Išli'],
    answer: 'Ići',
    tip: 'The whole infinitive, then ćemo.',
  },
  {
    mode: 'buduce',
    q: 'Sutra ću ti ____.',
    en: 'I will help you tomorrow.',
    opts: ['pomoći', 'pomognem', 'pomoć', 'pomogao'],
    answer: 'pomoći',
    tip: 'After ću, the infinitive.',
  },
  {
    mode: 'buduce',
    q: 'Hoćeš li ____ doći?',
    en: 'Will you be able to come?',
    opts: ['moći', 'možeš', 'moć', 'mogao'],
    answer: 'moći',
    tip: 'The infinitive of moći after hoćeš li.',
  },
  {
    mode: 'buduce',
    q: '____ ću ti sve večeras.',
    en: 'I will tell you everything tonight.',
    opts: ['Reći', 'Reć', 'Rečem', 'Rekao'],
    answer: 'Reći',
    tip: 'The whole infinitive, then ću.',
  },
  {
    mode: 'buduce',
    q: 'Kada ćeš ____?',
    en: 'When will you leave?',
    opts: ['otići', 'odeš', 'otić', 'otišao'],
    answer: 'otići',
    tip: 'After ćeš, the infinitive.',
  },
  {
    mode: 'buduce',
    q: 'Koja je rečenica točno napisana?',
    en: 'Which sentence is written correctly?',
    opts: ['Doći ćemo u osam.', 'Doć ćemo u osam.', 'Dođi ćemo u osam.', 'Dođemo ćemo u osam.'],
    answer: 'Doći ćemo u osam.',
    tip: 'The whole infinitive, written apart from ćemo.',
  },
  {
    mode: 'buduce',
    q: 'Mama će ____ tortu.',
    en: 'Mum will bake a cake.',
    opts: ['peći', 'peče', 'peć', 'pekla'],
    answer: 'peći',
    tip: 'After će, the infinitive.',
  },
];
