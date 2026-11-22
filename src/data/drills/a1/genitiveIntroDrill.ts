// src/data/drills/a1/genitiveIntroDrill.ts
//
// A1 THE GENITIVE — the drill for the `genitive-intro` lesson.
//
// Follows Hrvatski za početnike 1, pages 108–114 (unit "Zajedno u Hrvatskoj"): the
// students' cards ("Iz Belgije sam… studentica sam prava"), the genitive table (koga?
// čega?: prijatelja · mame · sela / mora), the rows "… je iz ____. (Portugal)" and "… je
// student ____. (informatika)", POSVOJNI GENITIV (Trg bana Jelačića) on page 111 and
// PARTITIVNI GENITIV with "nema + genitiv" on page 114 (malo šećera, puno čokolade, sok
// od jabuke). This is the introduction: the four jobs, with the regular endings.
//
// Three modes:
//   pripadanje — belonging and "of": auto moje sestre, student prava
//   kolicina   — amounts, and what is missing: čaša vode, nema kruha
//   prijedlozi — after iz, bez, od, do, kod, prije, poslije

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GENITIVE_INTRO_MODE_LABELS: Record<string, string> = {
  pripadanje: '🔑 Čiji? Čega?',
  kolicina: '🥛 Koliko?',
  prijedlozi: '📍 Prijedlozi',
};

export const GENITIVE_INTRO_DRILL_DATA: ModeDrillItem[] = [
  // ── pripadanje ────────────────────────────────────────────────────────────
  {
    mode: 'pripadanje',
    q: 'Ganesh je student ____. (informatika)',
    en: 'Ganesh is a student of computer science.',
    opts: ['informatike', 'informatiku', 'informatici', 'informatika'],
    answer: 'informatike',
    tip: '"Of" something is the genitive, and feminine -a becomes -e: student informatike. informatiku is the accusative, as in Studiram informatiku.',
  },
  {
    mode: 'pripadanje',
    q: 'Elena je studentica ____. (pravo)',
    en: 'Elena is a law student.',
    opts: ['prava', 'pravo', 'pravu', 'pravom'],
    answer: 'prava',
    tip: 'A neuter noun takes -a in the genitive: studentica prava. The plain form pravo cannot follow another noun like this.',
  },
  {
    mode: 'pripadanje',
    q: 'Ovo je auto moje ____. (sestra)',
    en: "This is my sister's car.",
    opts: ['sestre', 'sestru', 'sestri', 'sestra'],
    answer: 'sestre',
    tip: 'The owner goes second and takes the genitive: auto moje sestre. sestru and sestri are the accusative and the dative.',
  },
  {
    mode: 'pripadanje',
    q: 'To je torba moga ____. (brat)',
    en: "That is my brother's bag.",
    opts: ['brata', 'bratu', 'brat', 'bratom'],
    answer: 'brata',
    tip: 'A masculine owner takes -a: torba moga brata. bratu is the dative, and brat is the subject form.',
  },
  {
    mode: 'pripadanje',
    q: 'Kefeng je ljubitelj ____. (nogomet)',
    en: 'Kefeng is a soccer fan.',
    opts: ['nogometa', 'nogomet', 'nogometu', 'nogometom'],
    answer: 'nogometa',
    tip: 'A "lover of" something takes the genitive: ljubitelj nogometa. Masculine nouns add -a.',
  },
  {
    mode: 'pripadanje',
    q: 'Hotel je u centru ____. (grad)',
    en: 'The hotel is in the center of town.',
    opts: ['grada', 'gradu', 'grad', 'gradom'],
    answer: 'grada',
    tip: '"The center of town" is centar grada: masculine + -a. gradu looks tempting after u, but u belongs to centru, not to grad.',
  },
  {
    mode: 'pripadanje',
    q: 'Volim boju ____. (more)',
    en: 'I love the color of the sea.',
    opts: ['mora', 'moru', 'more', 'morem'],
    answer: 'mora',
    tip: 'A neuter noun takes -a too: boja mora. more is the subject form, and moru is the locative (na moru).',
  },
  {
    mode: 'pripadanje',
    q: 'Sastanak je na Trgu bana ____. (Jelačić)',
    en: 'The meeting is on Ban Jelačić Square.',
    opts: ['Jelačića', 'Jelačiću', 'Jelačić', 'Jelačićem'],
    answer: 'Jelačića',
    tip: 'A square or street "of" a person puts the name in the genitive: Trg bana Jelačića. Both bana and Jelačića take -a.',
  },
  {
    mode: 'pripadanje',
    q: 'Which is the correct way to say "my sister\'s car"?',
    opts: ['auto moje sestre', 'moje sestre auto', 'auto moja sestra', 'auto moju sestru'],
    answer: 'auto moje sestre',
    tip: 'Croatian puts the owner SECOND and in the genitive. English order ("moje sestre auto") is wrong, and the owner cannot stay in the subject form or take the accusative.',
  },

  // ── kolicina ──────────────────────────────────────────────────────────────
  {
    mode: 'kolicina',
    q: 'Molim čašu ____. (voda)',
    en: 'A glass of water, please.',
    opts: ['vode', 'vodu', 'vodi', 'voda'],
    answer: 'vode',
    tip: 'After a measure, the thing measured takes the genitive: čaša vode. "čašu vodu" is the common slip: only the glass is the object.',
  },
  {
    mode: 'kolicina',
    q: 'Pijem šalicu ____. (kava)',
    en: 'I am drinking a cup of coffee.',
    opts: ['kave', 'kavu', 'kavi', 'kava'],
    answer: 'kave',
    tip: 'šalica kave: the cup is the object (šalicu), and what is in it is "of coffee": kave. kavu would be right only without the cup: Pijem kavu.',
  },
  {
    mode: 'kolicina',
    q: 'Djeca jedu puno ____. (čokolada)',
    en: 'The children eat a lot of chocolate.',
    opts: ['čokolade', 'čokoladu', 'čokoladi', 'čokolada'],
    answer: 'čokolade',
    tip: 'puno, malo and the other amount words take the genitive: puno čokolade. čokoladu is right only with no amount word: Jedu čokoladu.',
  },
  {
    mode: 'kolicina',
    q: 'U kavi imam malo ____. (šećer)',
    en: 'I have a little sugar in my coffee.',
    opts: ['šećera', 'šećer', 'šećeru', 'šećerom'],
    answer: 'šećera',
    tip: 'malo + genitive: malo šećera. A masculine noun adds -a.',
  },
  {
    mode: 'kolicina',
    q: 'Hoćeš li još malo ____? (juha)',
    en: 'Would you like a little more soup?',
    opts: ['juhe', 'juhu', 'juhi', 'juha'],
    answer: 'juhe',
    tip: 'još malo + genitive: juhe. juhu would be right without malo.',
  },
  {
    mode: 'kolicina',
    q: 'Moram u trgovinu. Nema ____. (kruh)',
    en: 'I have to go to the store. There is no bread.',
    opts: ['kruha', 'kruh', 'kruhu', 'kruhom'],
    answer: 'kruha',
    tip: 'What is missing takes the genitive: nema kruha. "Nema kruh" keeps the dictionary form, the usual mistake.',
  },
  {
    mode: 'kolicina',
    q: 'U hladnjaku nema ____. (mlijeko)',
    en: 'There is no milk in the fridge.',
    opts: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
    answer: 'mlijeka',
    tip: 'nema + genitive, and a neuter noun takes -a: nema mlijeka.',
  },
  {
    mode: 'kolicina',
    q: 'Ne mogu u kino. Nemam ____. (novac)',
    en: 'I cannot go to the movies. I have no money.',
    opts: ['novca', 'novaca', 'novac', 'novcu'],
    answer: 'novca',
    tip: 'novac loses its a before an ending: novca. "novaca" keeps it, and novac is the dictionary form.',
  },
  {
    mode: 'kolicina',
    q: 'Na Croaticumu ima puno ____. (student, plural)',
    en: 'There are a lot of students at Croaticum.',
    opts: ['studenata', 'studenti', 'studente', 'studentima'],
    answer: 'studenata',
    tip: 'Many countable things take the genitive PLURAL, which ends in -a, and an extra a slips between the two last consonants: studenata. studenti is the subject form.',
  },

  // ── prijedlozi ────────────────────────────────────────────────────────────
  {
    mode: 'prijedlozi',
    q: 'Paulo je iz ____. (Portugal)',
    en: 'Paulo is from Portugal.',
    opts: ['Portugala', 'Portugalu', 'Portugal', 'Portugalom'],
    answer: 'Portugala',
    tip: 'iz always takes the genitive: iz Portugala. Portugalu is the locative, for u Portugalu.',
  },
  {
    mode: 'prijedlozi',
    q: 'Sophie je iz ____. (Francuska)',
    en: 'Sophie is from France.',
    opts: ['Francuske', 'Francuskoj', 'Francusku', 'Francuska'],
    answer: 'Francuske',
    tip: 'iz + genitive: iz Francuske. Francuskoj is where you live (u Francuskoj), and Francusku is where you go.',
  },
  {
    mode: 'prijedlozi',
    q: 'Ja sam iz ____, ali živim u Zagrebu. (Amerika)',
    en: 'I am from America, but I live in Zagreb.',
    opts: ['Amerike', 'Americi', 'Ameriku', 'Amerika'],
    answer: 'Amerike',
    tip: 'Where you are from: iz + genitive, Amerike. Americi is the locative (u Americi), which is where you ARE.',
  },
  {
    mode: 'prijedlozi',
    q: 'Pijem čaj bez ____. (limun)',
    en: 'I drink tea without lemon.',
    opts: ['limuna', 'limunom', 'limun', 'limunu'],
    answer: 'limuna',
    tip: 'bez takes the genitive: bez limuna. limunom goes with s (čaj s limunom), the opposite meaning.',
  },
  {
    mode: 'prijedlozi',
    q: 'Dobila sam poruku od ____. (prijatelj)',
    en: 'I got a message from a friend.',
    opts: ['prijatelja', 'prijatelju', 'prijateljem', 'prijatelj'],
    answer: 'prijatelja',
    tip: 'od ("from" a person) takes the genitive: od prijatelja. prijatelju is the dative, the person you send a message TO.',
  },
  {
    mode: 'prijedlozi',
    q: 'Vidimo se poslije ____. (posao)',
    en: 'See you after work.',
    opts: ['posla', 'poslu', 'posao', 'poslom'],
    answer: 'posla',
    tip: 'poslije takes the genitive: poslije posla. poslu is the locative (na poslu).',
  },
  {
    mode: 'prijedlozi',
    q: 'Molim sok od ____. (jabuka)',
    en: 'Apple juice, please.',
    opts: ['jabuke', 'jabuku', 'jabuci', 'jabukom'],
    answer: 'jabuke',
    tip: 'What something is made of: od + genitive, sok od jabuke. jabuku is the accusative and jabuci the dative.',
  },
  {
    mode: 'prijedlozi',
    q: 'Večeras sam kod ____. (baka)',
    en: "Tonight I am at Grandma's.",
    opts: ['bake', 'baki', 'baku', 'bakom'],
    answer: 'bake',
    tip: 'kod ("at someone\'s place") takes the genitive: kod bake. baki is the dative, and bakom goes with s.',
  },
  {
    mode: 'prijedlozi',
    q: 'Tramvaj vozi do ____. (centar)',
    en: 'The streetcar goes as far as the center.',
    opts: ['centra', 'centru', 'centar', 'centara'],
    answer: 'centra',
    tip: 'do takes the genitive, and centar loses its a before the ending: do centra. centru is the locative (u centru).',
  },
];
