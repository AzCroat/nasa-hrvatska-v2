// src/data/drills/c1/textConnectorsDrill.ts
//
// C1 TEXT CONNECTORS — the drill for the `text-connectors` lesson (book-vs-app fix,
// 2026-11-13; workbook block VII, Razgovarajte s nama! B2–C1). Four modes, six items each:
//   uzrok   — explanatory and cause–effect: naime, drugim riječima, uslijed toga, zbog toga
//   namjera — purpose and condition: u tu svrhu, s tom namjerom, radi toga, u tome slučaju, inače
//   mjesto  — place and time: onamo / ondje / ovamo, na tome mjestu, prije toga, zatim
//   nacin   — manner and addition: na taj način, time, uz to, osim toga, pored toga
//
// Every item has exactly one connector that fits the meaning; the other options are real
// connectors from another group, or the right connector in the wrong case.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TEXT_CONNECTORS_MODE_LABELS: Record<string, string> = {
  uzrok: '💡 Objašnjenje i uzrok',
  namjera: '🎯 Namjera i uvjet',
  mjesto: '📍 Mjesto i vrijeme',
  nacin: '➕ Način i dodavanje',
};

export const TEXT_CONNECTORS_DRILL_DATA: ModeDrillItem[] = [
  // ── uzrok ─────────────────────────────────────────────────────────────────
  {
    mode: 'uzrok',
    q: 'Ivan i Petar su polubraća. ____ imaju istu majku, a različite očeve.',
    en: 'Ivan and Petar are half-brothers: they have the same mother but different fathers.',
    opts: ['Naime', 'Osim toga', 'U tu svrhu', 'Ondje'],
    answer: 'Naime',
    tip: 'naime explains the sentence before it.',
  },
  {
    mode: 'uzrok',
    q: 'Danas sam dobio otkaz. ____ ostao sam bez prihoda.',
    en: 'Today I was fired. Put another way, I have no income.',
    opts: ['Drugim riječima', 'U tu svrhu', 'Onamo', 'Inače'],
    answer: 'Drugim riječima',
    tip: 'The second sentence restates the first.',
  },
  {
    mode: 'uzrok',
    q: 'Cijelu je noć padala kiša. ____ je rijeka izašla iz korita.',
    en: 'It rained all night. As a result, the river burst its banks.',
    opts: ['Uslijed toga', 'Naime', 'Onamo', 'U tu svrhu'],
    answer: 'Uslijed toga',
    tip: 'A consequence, in a formal register.',
  },
  {
    mode: 'uzrok',
    q: 'Pao je visok snijeg. S obzirom na ____ bolje je da ostanemo kod kuće.',
    en: 'Heavy snow has fallen. Given that, we had better stay at home.',
    opts: ['to', 'tome', 'toga', 'tu'],
    answer: 'to',
    tip: 's obzirom na takes the accusative.',
  },
  {
    mode: 'uzrok',
    q: 'Saznali smo što se traži u natječaju. Na osnovi ____ pripremili smo prijavu.',
    en: 'We found out what the call for applications requires. On that basis, we prepared our application.',
    opts: ['toga', 'to', 'tome', 'tom'],
    answer: 'toga',
    tip: 'na osnovi takes the genitive.',
  },
  {
    mode: 'uzrok',
    q: 'Marko je pao ispit. ____ mora ponovno upisati predmet.',
    en: 'Marko failed the exam. Because of that, he has to enrol in the course again.',
    opts: ['Zbog toga', 'Radi toga', 'Naime', 'Onamo'],
    answer: 'Zbog toga',
    tip: 'zbog gives a cause; radi gives a purpose.',
  },
  // ── namjera ───────────────────────────────────────────────────────────────
  {
    mode: 'namjera',
    q: 'Želimo naučiti talijanski. ____ smo se upisali na tečaj.',
    en: 'We want to learn Italian. With that aim we have signed up for a course.',
    opts: ['U tu svrhu', 'Uslijed toga', 'Naime', 'Ondje'],
    answer: 'U tu svrhu',
    tip: 'A purpose connector.',
  },
  {
    mode: 'namjera',
    q: 'Htjeli smo otputovati u Rim. S tom smo ____ kupili kartu.',
    en: 'We wanted to travel to Rome. With that aim we bought a ticket.',
    opts: ['namjerom', 'namjera', 'namjeru', 'namjeri'],
    answer: 'namjerom',
    tip: 's + instrumental, with the clitic after the first word.',
  },
  {
    mode: 'namjera',
    q: 'Treba mi rječnik. ____ ću svratiti u knjižaru.',
    en: 'I need a dictionary. For that purpose I will drop into the bookshop.',
    opts: ['Radi toga', 'Naime', 'Inače', 'Ondje'],
    answer: 'Radi toga',
    tip: 'radi expresses purpose.',
  },
  {
    mode: 'namjera',
    q: 'Lijek morate uzimati redovito. U tome ____ sve će biti u redu.',
    en: 'You must take the medicine regularly. If you do, everything will be fine.',
    opts: ['slučaju', 'slučaj', 'slučaja', 'slučajem'],
    answer: 'slučaju',
    tip: 'u + locative.',
  },
  {
    mode: 'namjera',
    q: 'Ponesi kišobran. ____ ćeš pokisnuti.',
    en: 'Take an umbrella, or you will get wet.',
    opts: ['Inače', 'Osim toga', 'Naime', 'Time'],
    answer: 'Inače',
    tip: 'As a connector it means "or else".',
  },
  {
    mode: 'namjera',
    q: 'Neki pacijenti dobiju alergijsku reakciju na lijek. U ____ slučaju trebaju se javiti liječniku.',
    en: 'Some patients have an allergic reaction to the medicine. If so, they should contact a doctor.',
    opts: ['takvom', 'takav', 'takvog', 'takvim'],
    answer: 'takvom',
    tip: 'u + locative.',
  },
  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Bili smo u Indiji prošle godine. ____ uvijek rado putujemo.',
    en: 'We were in India last year. We always enjoy travelling there.',
    opts: ['Onamo', 'Ondje', 'Odande', 'Ovdje'],
    answer: 'Onamo',
    tip: 'Direction, where to: the dynamic adverb.',
  },
  {
    mode: 'mjesto',
    q: 'Matija je ljetovao na Visu. ____ je upoznao zanimljive ljude.',
    en: 'Matija spent the summer on Vis. That is where he met interesting people.',
    opts: ['Ondje', 'Onamo', 'Odande', 'Ovamo'],
    answer: 'Ondje',
    tip: 'Location, where: the static adverb.',
  },
  {
    mode: 'mjesto',
    q: 'Dođite sutra opet ____. Tu ćemo vas čekati.',
    en: 'Come back here tomorrow. We will be waiting for you.',
    opts: ['ovamo', 'ovdje', 'odavde', 'onuda'],
    answer: 'ovamo',
    tip: 'Direction toward the speaker.',
  },
  {
    mode: 'mjesto',
    q: 'U toj se dolini vodila velika bitka. Na tome ____ danas stoji spomenik.',
    en: 'A great battle was fought in that valley. Today a monument stands on the site.',
    opts: ['mjestu', 'mjesto', 'mjesta', 'mjestom'],
    answer: 'mjestu',
    tip: 'na + locative for a location.',
  },
  {
    mode: 'mjesto',
    q: 'Sada radim u knjižnici. ____ sam radio u školi.',
    en: 'Now I work in a library. Before that I worked at a school.',
    opts: ['Prije toga', 'Naime', 'Ondje', 'Uz to'],
    answer: 'Prije toga',
    tip: 'A time connector pointing to an earlier time.',
  },
  {
    mode: 'mjesto',
    q: 'Prvo ću se malo odmoriti. ____ ću pogledati film.',
    en: 'First I will rest a little. Then I will watch a film.',
    opts: ['Zatim', 'Naime', 'Uslijed toga', 'Odande'],
    answer: 'Zatim',
    tip: 'Next in time.',
  },
  // ── nacin ─────────────────────────────────────────────────────────────────
  {
    mode: 'nacin',
    q: 'Obilazio je sve radnike. Na taj ____ imao je uvid u sve što se događa.',
    en: 'He went round all the workers. That way he knew everything that was going on.',
    opts: ['način', 'načinom', 'načina', 'načinu'],
    answer: 'način',
    tip: 'na + accusative.',
  },
  {
    mode: 'nacin',
    q: 'Sve je ispite položila u roku. ____ je pokazala da zaslužuje stipendiju.',
    en: 'She passed all her exams on time. By doing so she showed that she deserves the scholarship.',
    opts: ['Time', 'Ondje', 'Inače', 'Naime'],
    answer: 'Time',
    tip: 'The instrumental of to: by this means.',
  },
  {
    mode: 'nacin',
    q: 'On je star. Uz ____ je i bolestan.',
    en: 'He is old. On top of that he is ill.',
    opts: ['to', 'toga', 'tome', 'tim'],
    answer: 'to',
    tip: 'uz + accusative.',
  },
  {
    mode: 'nacin',
    q: 'Martin navečer radi. Osim ____ ne voli jesti u restoranu.',
    en: 'Martin works in the evenings. Besides, he does not like eating out.',
    opts: ['toga', 'to', 'tome', 'tim'],
    answer: 'toga',
    tip: 'osim + genitive.',
  },
  {
    mode: 'nacin',
    q: 'Stan je velik i svijetao. Pored ____ ima lijep pogled na more.',
    en: 'The flat is large and bright. It also has a lovely sea view.',
    opts: ['toga', 'to', 'tome', 'tim'],
    answer: 'toga',
    tip: 'pored + genitive.',
  },
  {
    mode: 'nacin',
    q: 'Restoran je jeftin. ____ ima izvrsnu hranu.',
    en: 'The restaurant is cheap, and the food is excellent as well.',
    opts: ['Uz to', 'Inače', 'Naime', 'Odande'],
    answer: 'Uz to',
    tip: 'An additive connector.',
  },
];
