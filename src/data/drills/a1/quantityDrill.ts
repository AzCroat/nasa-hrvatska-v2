// src/data/drills/a1/quantityDrill.ts
//
// A1 HOW MUCH, HOW MANY — the drill for the `quantity` lesson (A1, 83).
//
// Follows Hrvatski za početnike 1, pages 113–114: the dialogue "Za stolom u gostima"
// ("Može li malo soka od naranče?" · "želiš još malo torte… ima još puno!" · "Ne smijem
// jesti tako puno slatke hrane." · "Čokolada ima toliko kalorija…") and the grammar box
// PARTITIVNI GENITIV ("malo, puno, više, manje, još, premalo, previše, nekoliko, toliko… +
// genitiv") with its rows (nekoliko stranica · previše piva · nekoliko kilograma mesa ·
// premalo kruha). The book treats this as one rule about food and drink; the lesson adds
// the choice between genitive singular and plural (puno vremena · puno ljudi), the
// genitive plural patterns (studenata, sestara, gradova), the singular verb (Puno ljudi
// dolazi.), dosta and koliko, and the measures litra and šalica. Numbers with the genitive
// are a separate lesson and are not used.
//
// Three modes:
//   jednina     — things you cannot count: genitive singular
//   mnozina     — things you can count: genitive plural
//   glagolMjera — the singular verb, measures, and the quantity words themselves

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const QUANTITY_MODE_LABELS: Record<string, string> = {
  jednina: '🥛 Malo soka',
  mnozina: '👥 Puno studenata',
  glagolMjera: '⚖️ Kilogram mesa',
};

export const QUANTITY_DRILL_DATA: ModeDrillItem[] = [
  // ── jednina ───────────────────────────────────────────────────────────────
  {
    mode: 'jednina',
    q: 'Može li malo ____ od naranče?',
    cue: '(sok)',
    en: 'Could I have a little orange juice?',
    opts: ['soka', 'sok', 'soku', 'sokova'],
    answer: 'soka',
    tip: 'malo takes the genitive, and juice cannot be counted, so the singular: malo soka. sok is the dictionary form, soku is another form, and sokova is the plural, "of juices".',
  },
  {
    mode: 'jednina',
    q: 'Želiš li još malo ____?',
    cue: '(juha)',
    en: 'Would you like a little more soup?',
    opts: ['juhe', 'juha', 'juhu', 'juhi'],
    answer: 'juhe',
    tip: 'After malo a feminine noun takes the genitive ending -e: malo juhe. juha is the dictionary form, juhu is the object form you use without a quantity word, and juhi is another form.',
  },
  {
    mode: 'jednina',
    q: 'Ne smijem jesti tako puno slatke ____.',
    cue: '(hrana)',
    en: 'I must not eat so much sweet food.',
    opts: ['hrane', 'hrana', 'hranu', 'hrani'],
    answer: 'hrane',
    tip: 'puno takes the genitive, and food is not counted: puno slatke hrane. hrana is the dictionary form, hranu is the plain object form, and hrani is another form.',
  },
  {
    mode: 'jednina',
    q: 'U kavi je previše ____.',
    cue: '(šećer)',
    en: 'There is too much sugar in the coffee.',
    opts: ['šećera', 'šećer', 'šećeru', 'šećerom'],
    answer: 'šećera',
    tip: 'previše takes the genitive, and a masculine noun adds -a: previše šećera. šećer is the dictionary form, and šećeru and šećerom are other forms.',
  },
  {
    mode: 'jednina',
    q: 'Za sendviče imamo premalo ____.',
    cue: '(sir)',
    en: 'We have too little cheese for the sandwiches.',
    opts: ['sira', 'sir', 'siru', 'sirevi'],
    answer: 'sira',
    tip: 'premalo takes the genitive, and cheese is a substance, so the singular: premalo sira. sir is the dictionary form, siru is another form, and sirevi is the plural, "cheeses", as a subject.',
  },
  {
    mode: 'jednina',
    q: 'Studenti imaju malo ____ za hobi.',
    cue: '(vrijeme)',
    en: 'Students have little time for a hobby.',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    tip: 'malo takes the genitive, and vrijeme changes its stem: malo vremena. vrijeme is the dictionary form, and vremenu and vremenom are other forms.',
  },
  {
    mode: 'jednina',
    q: 'Koliko ____ trebamo za palačinke?',
    cue: '(brašno)',
    en: 'How much flour do we need for the pancakes?',
    opts: ['brašna', 'brašno', 'brašnu', 'brašnom'],
    answer: 'brašna',
    tip: 'koliko is a quantity word too, so the genitive, and a neuter noun takes -a: koliko brašna. brašno is the dictionary form, and brašnu and brašnom are other forms.',
  },
  {
    mode: 'jednina',
    q: 'Ljeti pijemo više ____.',
    cue: '(voda)',
    en: 'In summer we drink more water.',
    opts: ['vode', 'voda', 'vodu', 'vodi'],
    answer: 'vode',
    tip: 'više ("more") takes the genitive: više vode. voda is the dictionary form, vodu is the plain object form you use without a quantity word, and vodi is another form.',
  },
  {
    mode: 'jednina',
    q: 'Imam manje ____ nego ti.',
    cue: '(novac)',
    en: 'I have less money than you.',
    opts: ['novca', 'novac', 'novcu', 'novaca'],
    answer: 'novca',
    tip: 'manje ("less") takes the genitive, and money is not counted, so the singular: manje novca (novac loses its a). novac is the dictionary form, novcu is another form, and novaca is the plural.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Na polici je nekoliko ____.',
    cue: '(rječnici)',
    en: 'There are several dictionaries on the shelf.',
    opts: ['rječnika', 'rječnici', 'rječnike', 'rječnicima'],
    answer: 'rječnika',
    tip: 'nekoliko takes the genitive plural, which ends in -a: nekoliko rječnika. rječnici is the plural as a subject, rječnike is the plural as an object, and rječnicima is another form.',
  },
  {
    mode: 'mnozina',
    q: 'U Zagrebu ima puno ____.',
    cue: '(tramvaji)',
    en: 'There are a lot of trams in Zagreb.',
    opts: ['tramvaja', 'tramvaji', 'tramvaje', 'tramvajima'],
    answer: 'tramvaja',
    tip: 'Trams can be counted, so puno takes the genitive plural in -a: puno tramvaja. tramvaji is the plural as a subject, tramvaje is the plural as an object, and tramvajima is another form.',
  },
  {
    mode: 'mnozina',
    q: 'Na Croaticumu je puno ____ iz cijelog svijeta.',
    cue: '(studenti)',
    en: 'There are a lot of students from all over the world at Croaticum.',
    opts: ['studenata', 'studenti', 'studente', 'studenta'],
    answer: 'studenata',
    tip: 'In the genitive plural an extra a slips between the two last consonants: studenata. studenti is the plural as a subject, studente is the plural as an object, and studenta is the genitive of one student only.',
  },
  {
    mode: 'mnozina',
    q: 'Laura ima nekoliko ____.',
    cue: '(sestre)',
    en: 'Laura has several sisters.',
    opts: ['sestara', 'sestre', 'sestru', 'sestrama'],
    answer: 'sestara',
    tip: 'nekoliko takes the genitive plural, and sestra gets an extra a between s-t-r: sestara. sestre is the plain plural, sestru is one sister as an object, and sestrama is another form.',
  },
  {
    mode: 'mnozina',
    q: 'Koliko ____ ima Zagreb?',
    cue: '(stanovnici)',
    en: 'How many inhabitants does Zagreb have?',
    opts: ['stanovnika', 'stanovnici', 'stanovnike', 'stanovnicima'],
    answer: 'stanovnika',
    tip: 'koliko with people you can count takes the genitive plural: koliko stanovnika. stanovnici is the plural as a subject, stanovnike is the plural as an object, and stanovnicima is another form.',
  },
  {
    mode: 'mnozina',
    q: 'Hrvatska ima puno ____.',
    cue: '(otoci)',
    en: 'Croatia has a lot of islands.',
    opts: ['otoka', 'otoci', 'otoke', 'otocima'],
    answer: 'otoka',
    tip: 'Islands can be counted, so the genitive plural: puno otoka. otoci is the plural as a subject, otoke is the plural as an object, which you would use without puno, and otocima is another form.',
  },
  {
    mode: 'mnozina',
    q: 'Zagreb ima puno ____.',
    cue: '(parkovi)',
    en: 'Zagreb has a lot of parks.',
    opts: ['parkova', 'parkovi', 'parkove', 'parka'],
    answer: 'parkova',
    tip: 'A short masculine noun keeps its -ov- in the genitive plural: parkova. parkovi is the plural as a subject, parkove is the plural as an object, and parka is the genitive of one park.',
  },
  {
    mode: 'mnozina',
    q: 'U gradu je previše ____.',
    cue: '(auti)',
    en: 'There are too many cars in the city.',
    opts: ['auta', 'auti', 'aute', 'autima'],
    answer: 'auta',
    tip: 'previše takes the genitive plural for things you can count: previše auta. auti is the plural as a subject, aute is the plural as an object, and autima is another form.',
  },
  {
    mode: 'mnozina',
    q: 'Za salatu trebamo nekoliko ____.',
    cue: '(rajčice)',
    en: 'For the salad we need several tomatoes.',
    opts: ['rajčica', 'rajčice', 'rajčicu', 'rajčicama'],
    answer: 'rajčica',
    tip: 'nekoliko takes the genitive plural, which for a feminine noun ends in -a: nekoliko rajčica. rajčice is the plain plural, rajčicu is one tomato as an object, and rajčicama is another form.',
  },

  // ── glagolMjera ───────────────────────────────────────────────────────────
  {
    mode: 'glagolMjera',
    q: 'Puno studenata ____ hrvatski.',
    cue: '(učiti)',
    en: 'A lot of students are learning Croatian.',
    opts: ['uči', 'uče', 'učimo', 'učite'],
    answer: 'uči',
    tip: 'A quantity phrase counts as one unit, so the verb stays in the singular: Puno studenata uči. uče agrees with the students, as English does, which is not the standard form; učimo is "we" and učite is "you".',
  },
  {
    mode: 'glagolMjera',
    q: 'Nekoliko prijatelja ____ u Splitu.',
    cue: '(živjeti)',
    en: 'Several friends live in Split.',
    opts: ['živi', 'žive', 'živimo', 'živite'],
    answer: 'živi',
    tip: 'After nekoliko + genitive the verb is singular: Nekoliko prijatelja živi. žive follows the English habit of agreeing with the noun, živimo is "we live", and živite is "you live".',
  },
  {
    mode: 'glagolMjera',
    q: 'Ovdje ____ puno turista.',
    en: 'There are a lot of tourists here.',
    opts: ['ima', 'imaju', 'su', 'jesu'],
    answer: 'ima',
    tip: '"There is / there are" with a quantity is the singular ima: Ovdje ima puno turista. imaju, su and jesu are all plural forms, which a quantity phrase does not take.',
  },
  {
    mode: 'glagolMjera',
    q: 'Na plaži je ____ ljudi. Nema mjesta!',
    en: 'There are … people on the beach. There is no room!',
    opts: ['previše', 'malo', 'premalo', 'manje'],
    answer: 'previše',
    tip: 'If there is no room, there are too many people: previše. malo is "few", premalo is "too few", and manje is "fewer"; none of them explains a full beach.',
  },
  {
    mode: 'glagolMjera',
    q: 'Za večeru trebamo kilogram ____.',
    cue: '(meso)',
    en: 'For dinner we need a kilogram of meat.',
    opts: ['mesa', 'meso', 'mesu', 'mesom'],
    answer: 'mesa',
    tip: 'A measure takes the genitive just as a quantity word does: kilogram mesa. meso is the dictionary form, and mesu and mesom are other forms.',
  },
  {
    mode: 'glagolMjera',
    q: 'Molim litru ____.',
    cue: '(mlijeko)',
    en: 'A liter of milk, please.',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    tip: 'After the measure litra the substance is in the genitive: litru mlijeka. mlijeko is the dictionary form, and mlijeku and mlijekom are other forms.',
  },
  {
    mode: 'glagolMjera',
    q: 'Poslijepodne pijem ____ kave.',
    cue: '(šalica)',
    en: 'In the afternoon I drink a cup of coffee.',
    opts: ['šalicu', 'šalica', 'šalici', 'šalicom'],
    answer: 'šalicu',
    tip: 'The measure itself is the object of pijem, so it takes -u: šalicu, and only the coffee after it is in the genitive (kave). šalica is the dictionary form, and šalici and šalicom are other forms.',
  },
  {
    mode: 'glagolMjera',
    q: '____ studenata uči hrvatski? — Puno.',
    opts: ['Koliko', 'Koji', 'Tko', 'Što'],
    answer: 'Koliko',
    tip: 'The answer is an amount (Puno), so the question word is Koliko, and it takes the genitive studenata as well. Koji would need studenti, and Tko and Što cannot stand in front of a noun like this.',
  },
  {
    mode: 'glagolMjera',
    q: 'Što znači "Imam premalo vremena"?',
    opts: [
      'I have too little time.',
      'I have too much time.',
      'I have a little time.',
      'I have enough time.',
    ],
    answer: 'I have too little time.',
    tip: 'premalo is "too little". "Too much" is previše, "a little" is malo, and "enough" is dosta.',
  },
];
