// src/data/drills/a1/weatherSeasonsDrill.ts
//
// A1 WEATHER AND SEASONS — the drill for the `weather-seasons` lesson (A1, 60).
//
// Follows Hrvatski za početnike 1, pages 82–83: the text "Godišnja doba" (each season, the
// months it covers and its weather: "Toplo je… Sunčano je… pada kiša… Vjetrovito je i
// maglovito… Često pada snijeg") and the questions "Kakvo vrijeme volite?". The weather
// is said the way the book says it: a neuter word plus je with no subject, and rain and
// snow that "fall". The authentic forecast on page 83 is above this level and is not used.
//
// Three modes:
//   kakvoJe      — Hladno je: the neuter word with no subject
//   pada         — Pada kiša, Pada snijeg
//   godisnjaDoba — the seasons: ljeti, zimi, u proljeće, u jesen

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const WEATHER_SEASONS_MODE_LABELS: Record<string, string> = {
  kakvoJe: '🌤️ Kakvo je vrijeme?',
  pada: '🌧️ Pada kiša',
  godisnjaDoba: '🍂 Godišnja doba',
};

export const WEATHER_SEASONS_DRILL_DATA: ModeDrillItem[] = [
  // ── kakvoJe ───────────────────────────────────────────────────────────────
  {
    mode: 'kakvoJe',
    q: '____ je vrijeme danas?',
    en: 'What is the weather like today?',
    opts: ['Kakvo', 'Kakav', 'Kakva', 'Kako'],
    answer: 'Kakvo',
    tip: 'vrijeme is neuter, so the question word is Kakvo. Kakav and Kakva are the masculine and feminine forms, and Kako ("how") copies the English question.',
  },
  {
    mode: 'kakvoJe',
    q: 'Danas je ____.',
    en: 'It is cold today.',
    opts: ['hladno', 'hladan', 'hladna', 'hladni'],
    answer: 'hladno',
    tip: 'Weather sentences have no subject, and the describing word is neuter: hladno. hladan and hladna would need a masculine or feminine noun, and hladni is plural.',
  },
  {
    mode: 'kakvoJe',
    q: 'U kolovozu je ____.',
    en: 'It is hot in August.',
    opts: ['vruće', 'vruć', 'vruća', 'vrućo'],
    answer: 'vruće',
    tip: 'The neuter form of vruć ends in -e, because ć is a soft consonant: vruće. vrućo uses the wrong vowel, and vruć and vruća are masculine and feminine.',
  },
  {
    mode: 'kakvoJe',
    q: 'Vrijeme je ____.',
    en: 'The weather is nice.',
    opts: ['lijepo', 'lijep', 'lijepa', 'lijepi'],
    answer: 'lijepo',
    tip: 'vrijeme is a neuter noun, so the adjective is lijepo. lijep treats it as masculine, lijepa as feminine, and lijepi is a plural form.',
  },
  {
    mode: 'kakvoJe',
    q: 'Kako se kaže "It is sunny"?',
    opts: ['Sunčano je.', 'Ono je sunčano.', 'To je sunce.', 'Sunčan je.'],
    answer: 'Sunčano je.',
    tip: 'Croatian has no word for the English "it" here: the neuter word plus je is the whole sentence. "Ono je sunčano" adds a subject, "To je sunce" means "That is the sun", and sunčan is masculine.',
  },
  {
    mode: 'kakvoJe',
    q: 'Nebo je ____.',
    en: 'The sky is blue.',
    opts: ['plavo', 'plav', 'plava', 'plavi'],
    answer: 'plavo',
    tip: 'nebo is neuter, so the color is plavo. plav goes with a masculine noun, plava with a feminine one, and plavi with a masculine plural.',
  },
  {
    mode: 'kakvoJe',
    q: 'Je li danas hladno? — Ne, ____ hladno.',
    en: 'Is it cold today? — No, it is not cold.',
    opts: ['nije', 'nisu', 'nisam', 'ne'],
    answer: 'nije',
    tip: 'The opposite of "Hladno je" is "Nije hladno": ne and je join into nije. nisu is plural, nisam means "I am not", and ne alone leaves the sentence without a verb.',
  },
  {
    mode: 'kakvoJe',
    q: 'U studenom je često ____.',
    en: 'In November it is often foggy.',
    opts: ['maglovito', 'maglovit', 'maglovita', 'magloviti'],
    answer: 'maglovito',
    tip: 'With no subject the weather word is neuter: maglovito. maglovit and maglovita need a masculine or feminine noun to describe, and magloviti is plural.',
  },
  {
    mode: 'kakvoJe',
    q: 'Danas je oblačno i ____.',
    en: 'Today it is cloudy and windy.',
    opts: ['vjetrovito', 'vjetrovit', 'vjetrovita', 'vjetar'],
    answer: 'vjetrovito',
    tip: 'Both weather words are neuter: oblačno i vjetrovito. vjetrovit and vjetrovita are the masculine and feminine forms, and vjetar is the noun "wind", not a describing word.',
  },
  {
    mode: 'kakvoJe',
    q: 'Jučer je ____ hladno.',
    en: 'It was cold yesterday.',
    opts: ['bilo', 'bio', 'bila', 'bili'],
    answer: 'bilo',
    tip: 'The subjectless weather sentence is neuter in the past too: Bilo je hladno. bio is masculine, bila feminine, and bili plural, and there is no such subject here.',
  },

  // ── pada ──────────────────────────────────────────────────────────────────
  {
    mode: 'pada',
    q: 'Danas ____ kiša.',
    en: 'It is raining today.',
    opts: ['pada', 'je', 'padam', 'padaju'],
    answer: 'pada',
    tip: 'Rain "falls" in Croatian: Pada kiša. "Danas je kiša" translates the English "it is", padam means "I am falling", and padaju is plural while kiša is one thing.',
  },
  {
    mode: 'pada',
    q: 'Zimi često pada ____.',
    en: 'In winter it often snows.',
    opts: ['snijeg', 'snijega', 'snijegu', 'snjegovi'],
    answer: 'snijeg',
    tip: 'The snow is the subject of pada, so it stays in its dictionary form: snijeg. snijega and snijegu are other forms, and snjegovi is a plural that does not fit the singular verb.',
  },
  {
    mode: 'pada',
    q: 'Kako se kaže "It is snowing"?',
    opts: ['Pada snijeg.', 'Snijeg je.', 'To je snijeg.', 'Ono pada snijeg.'],
    answer: 'Pada snijeg.',
    tip: 'Snow is the subject and pada is the verb: Pada snijeg. "Snijeg je" uses biti, "To je snijeg" means "That is snow", and "Ono pada snijeg" adds a subject Croatian does not use.',
  },
  {
    mode: 'pada',
    q: 'Jučer je ____ kiša.',
    en: 'It rained yesterday.',
    opts: ['padala', 'padao', 'padalo', 'padali'],
    answer: 'padala',
    tip: 'In the past the verb agrees with its subject, and kiša is feminine: padala. padao is masculine (snijeg), padalo neuter, and padali plural.',
  },
  {
    mode: 'pada',
    q: 'Jučer je ____ snijeg.',
    en: 'It snowed yesterday.',
    opts: ['padao', 'padala', 'padalo', 'padali'],
    answer: 'padao',
    tip: 'snijeg is masculine, so the past form is padao. padala goes with kiša, padalo would need a neuter subject, and padali a plural one.',
  },
  {
    mode: 'pada',
    q: 'Pada li ____?',
    en: 'Is it raining?',
    opts: ['kiša', 'kišu', 'kiši', 'kišom'],
    answer: 'kiša',
    tip: 'The rain is doing the falling, so it is the subject and keeps its dictionary form: kiša. kišu is the object form, and kiši and kišom are other forms of the word.',
  },
  {
    mode: 'pada',
    q: '____ li snijeg?',
    en: 'Is it snowing?',
    opts: ['Pada', 'Padaju', 'Je', 'Padaš'],
    answer: 'Pada',
    tip: 'The question keeps the same verb and puts li after it: Pada li snijeg? Padaju is plural, Je uses biti instead of padati, and Padaš means "you are falling".',
  },
  {
    mode: 'pada',
    q: 'Što znači "Često pada snijeg"?',
    opts: ['It often snows.', 'It is often cold.', 'The snow is melting.', 'It rarely snows.'],
    answer: 'It often snows.',
    tip: 'često is "often" and pada snijeg is "snow falls", that is, it snows. Cold would be hladno, nothing here says the snow is melting, and "rarely" is rijetko.',
  },
  {
    mode: 'pada',
    q: 'Što znači "Ljeti kiša ne pada često"?',
    opts: [
      'In summer it does not rain often.',
      'In summer it rains often.',
      'In winter it does not rain often.',
      'In summer it does not snow often.',
    ],
    answer: 'In summer it does not rain often.',
    tip: 'ljeti is "in summer", kiša is rain, and "ne pada često" is "does not fall often". Winter would be zimi, snow would be snijeg, and without ne the sentence would say it rains often.',
  },

  // ── godisnjaDoba ──────────────────────────────────────────────────────────
  {
    mode: 'godisnjaDoba',
    q: '____ je na moru vruće.',
    en: 'In summer it is hot at the seaside.',
    opts: ['Ljeti', 'Ljeto', 'U ljeti', 'Na ljeti'],
    answer: 'Ljeti',
    tip: '"In summer" is the single word ljeti, with no preposition. Ljeto is the season itself, and "u ljeti" and "na ljeti" add a preposition the word does not take.',
  },
  {
    mode: 'godisnjaDoba',
    q: '____ nosim topli kaput i šal.',
    en: 'In winter I wear a warm coat and a scarf.',
    opts: ['Zimi', 'Zima', 'U zimi', 'Na zimi'],
    answer: 'Zimi',
    tip: '"In winter" is zimi, one word and no preposition. Zima is the name of the season, and "u zimi" and "na zimi" add a preposition that zimi never takes.',
  },
  {
    mode: 'godisnjaDoba',
    q: 'U ____ je toplo i sunčano.',
    en: 'In spring it is warm and sunny.',
    opts: ['proljeće', 'proljeći', 'proljeti', 'proljećem'],
    answer: 'proljeće',
    tip: 'Spring has no one-word form like ljeti: it is u proljeće, with the name of the season unchanged. proljeći, proljeti and proljećem add endings that do not belong after u here.',
  },
  {
    mode: 'godisnjaDoba',
    q: 'U ____ često pada kiša.',
    en: 'In the fall it often rains.',
    opts: ['jesen', 'jesenu', 'jesena', 'jesenom'],
    answer: 'jesen',
    tip: 'Like spring, fall uses u plus the unchanged name of the season: u jesen. jesenu, jesena and jesenom add endings this word does not have.',
  },
  {
    mode: 'godisnjaDoba',
    q: 'Zima, proljeće, ljeto, ____.',
    en: 'Winter, spring, summer, …',
    opts: ['jesen', 'ljeti', 'zimi', 'mjesec'],
    answer: 'jesen',
    tip: 'The fourth season is jesen (fall). ljeti and zimi mean "in summer" and "in winter" and are not names of seasons, and mjesec is a month.',
  },
  {
    mode: 'godisnjaDoba',
    q: 'Lipanj, srpanj i kolovoz: to je ____.',
    en: 'June, July and August: that is …',
    opts: ['ljeto', 'zima', 'jesen', 'proljeće'],
    answer: 'ljeto',
    tip: 'June, July and August are the summer months: ljeto. zima is winter, jesen is fall (rujan, listopad, studeni), and proljeće is spring.',
  },
  {
    mode: 'godisnjaDoba',
    q: 'Rujan, listopad i studeni: to je ____.',
    en: 'September, October and November: that is …',
    opts: ['jesen', 'proljeće', 'zima', 'ljeto'],
    answer: 'jesen',
    tip: 'September, October and November are the fall months: jesen. proljeće is spring (ožujak, travanj, svibanj), zima is winter, and ljeto is summer.',
  },
  {
    mode: 'godisnjaDoba',
    q: 'Ljeti su dani ____.',
    en: 'In summer the days are warm.',
    opts: ['topli', 'tople', 'topla', 'topao'],
    answer: 'topli',
    tip: 'Here there is a subject, dani, and it is a masculine plural, so the adjective agrees: topli. tople is the feminine plural, topla the feminine singular, and topao describes one day.',
  },
  {
    mode: 'godisnjaDoba',
    q: 'Zima je ____.',
    en: 'The winter is cold.',
    opts: ['hladna', 'hladno', 'hladan', 'hladni'],
    answer: 'hladna',
    tip: 'With a subject the adjective agrees with it, and zima is feminine: Zima je hladna. hladno is only for the subjectless "Hladno je", hladan is masculine, and hladni is plural.',
  },
];
