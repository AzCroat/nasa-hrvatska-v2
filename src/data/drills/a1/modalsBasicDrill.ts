// src/data/drills/a1/modalsBasicDrill.ts
//
// A1 CAN, MUST, WANT, NEED — the drill for the `modals-basic` lesson.
//
// Follows Hrvatski za početnike 1, pages 41–44 (unit "Znam, hoću, mogu"): the airport
// dialogue ("Trebaš li pomoć? — Ne, ne trebam, hvala."), then MODALNI GLAGOL morati +
// infinitiv, trebati, moći + infinitiv and htjeti + infinitiv ili imenica, with the
// book's rows "Ti ____ učiti", "Ja ____ voziti bicikl", "Mi ____ vitamine". The note
// "ja mogu — oni mogu" and "ja hoću (kao: ja mogu)" is tested directly. smjeti, which the
// book teaches on the same pages, has its own later lesson and is left out.
//
// Three modes:
//   oblici    — the forms of moći, morati, htjeti, trebati and željeti
//   infinitiv — the second verb stays in its dictionary form
//   izbor     — choosing the right modal: znati or moći, morati or trebati

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const MODALS_BASIC_MODE_LABELS: Record<string, string> = {
  oblici: '🔤 Oblici',
  infinitiv: '🔗 Infinitiv',
  izbor: '🎯 Izbor',
};

export const MODALS_BASIC_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja svaki dan ____ raditi. (morati)',
    en: 'I have to work every day.',
    opts: ['moram', 'moraš', 'mora', 'moraju'],
    answer: 'moram',
    tip: 'morati is a regular -am verb: ja moram. moraš is the ti form, mora is on or ona, and moraju is oni.',
  },
  {
    mode: 'oblici',
    q: 'Ti ____ više čitati. (morati)',
    en: 'You have to read more.',
    opts: ['moraš', 'moram', 'mora', 'morate'],
    answer: 'moraš',
    tip: 'ti → moraš. moram is ja, mora is on or ona, and morate is vi.',
  },
  {
    mode: 'oblici',
    q: 'Janica ____ skijati svaki dan. (morati)',
    en: 'Janica has to ski every day.',
    opts: ['mora', 'moram', 'moraju', 'moraš'],
    answer: 'mora',
    tip: 'Janica is "she", so the bare form mora. moram is ja, moraš is ti, and moraju is oni.',
  },
  {
    mode: 'oblici',
    q: 'Ja ____ voziti auto. (moći)',
    en: 'I can drive a car.',
    opts: ['mogu', 'možem', 'možu', 'može'],
    answer: 'mogu',
    tip: 'moći is irregular: ja mogu, with g and -u. "možem" and "možu" copy the ž of možeš onto the ja form, and može is on or ona.',
  },
  {
    mode: 'oblici',
    q: '____ li danas kuhati ručak? (moći, ti)',
    en: 'Can you cook lunch today?',
    opts: ['Možeš', 'Mogu', 'Mogeš', 'Može'],
    answer: 'Možeš',
    tip: 'Between ja and oni the g turns into ž: možeš. "Mogeš" keeps the g by mistake, mogu is ja or oni, and može is on or ona.',
  },
  {
    mode: 'oblici',
    q: 'Tvoji prijatelji ____ pomoći. (moći)',
    en: 'Your friends can help.',
    opts: ['mogu', 'možu', 'mogaju', 'može'],
    answer: 'mogu',
    tip: 'oni has the same form as ja: mogu. "možu" and "mogaju" are invented from other patterns, and može is only one person.',
  },
  {
    mode: 'oblici',
    q: 'Mi ____ odmor. (trebati)',
    en: 'We need a rest.',
    opts: ['trebamo', 'trebate', 'trebaju', 'trebam'],
    answer: 'trebamo',
    tip: 'trebati is a regular -am verb: mi trebamo. trebate is vi, trebaju is oni, and trebam is ja.',
  },
  {
    mode: 'oblici',
    q: 'Ja ____ novi bicikl. (htjeti)',
    en: 'I want a new bike.',
    opts: ['hoću', 'hoćem', 'hoćeš', 'hoće'],
    answer: 'hoću',
    tip: 'htjeti is irregular, and the ja form ends in -u like mogu: hoću. "hoćem" adds the usual -m by mistake; hoćeš is ti and hoće is on, ona or oni.',
  },
  {
    mode: 'oblici',
    q: 'Ana i Marko ____ sladoled. (htjeti)',
    en: 'Ana and Marko want ice cream.',
    opts: ['hoće', 'hoću', 'hoćeju', 'hoćemo'],
    answer: 'hoće',
    tip: 'With htjeti, oni has the same form as on: hoće. "hoćeju" adds an ending that does not exist, hoću is ja, and hoćemo is mi.',
  },
  {
    mode: 'oblici',
    q: '____ li vi čaj ili kavu? (htjeti)',
    en: 'Do you want tea or coffee? (to several people)',
    opts: ['Hoćete', 'Hoćemo', 'Hoćeš', 'Hoće'],
    answer: 'Hoćete',
    tip: 'vi → hoćete. hoćemo is mi, hoćeš is one person (ti), and hoće is on, ona or oni.',
  },

  // ── infinitiv ─────────────────────────────────────────────────────────────
  {
    mode: 'infinitiv',
    q: 'Moram ____.',
    en: 'I have to study.',
    opts: ['učiti', 'učim', 'uči', 'učimo'],
    answer: 'učiti',
    tip: 'After a modal the second verb stays in the infinitive: moram učiti. "Moram učim" conjugates both verbs, which Croatian never does here.',
  },
  {
    mode: 'infinitiv',
    q: 'Mama mora ____ ručak.',
    en: 'Mom has to cook lunch.',
    opts: ['kuhati', 'kuha', 'kuham', 'kuhaju'],
    answer: 'kuhati',
    tip: 'Only mora changes for the person; the second verb stays kuhati. kuha, kuham and kuhaju are present-tense forms, which cannot follow a modal.',
  },
  {
    mode: 'infinitiv',
    q: 'Možeš li ____ kruh?',
    en: 'Can you buy bread?',
    opts: ['kupiti', 'kupiš', 'kupim', 'kupi'],
    answer: 'kupiti',
    tip: 'možeš already shows the person, so the next verb stays in the infinitive: kupiti. "Možeš li kupiš" conjugates twice.',
  },
  {
    mode: 'infinitiv',
    q: 'Želim ____ hrvatski.',
    en: 'I want to speak Croatian.',
    opts: ['govoriti', 'govorim', 'govori', 'govore'],
    answer: 'govoriti',
    tip: 'želim + infinitive: Želim govoriti. "Želim govorim" would be like English "I want I speak".',
  },
  {
    mode: 'infinitiv',
    q: 'Znaš li ____ gitaru?',
    en: 'Do you know how to play the guitar?',
    opts: ['svirati', 'sviraš', 'svira', 'sviram'],
    answer: 'svirati',
    tip: 'znati + infinitive names a skill: znaš svirati. The person is shown once, on znaš, so sviraš is wrong here.',
  },
  {
    mode: 'infinitiv',
    q: 'Hoćemo ____ film.',
    en: 'We want to watch a movie.',
    opts: ['gledati', 'gledamo', 'gleda', 'gledaju'],
    answer: 'gledati',
    tip: 'hoćemo carries the "we", and the second verb stays in its dictionary form: gledati. "Hoćemo gledamo" conjugates both.',
  },
  {
    mode: 'infinitiv',
    q: 'Večeras ne mogu ____, moram raditi.',
    en: 'I cannot come tonight; I have to work.',
    opts: ['doći', 'dođem', 'dođe', 'dođeš'],
    answer: 'doći',
    tip: 'An infinitive ends in -ti or -ći, and after mogu you need it: doći. dođem, dođe and dođeš are present-tense forms.',
  },
  {
    mode: 'infinitiv',
    q: 'Which sentence is correct for "I have to work"?',
    opts: ['Moram raditi.', 'Moram radim.', 'Morati radim.', 'Moram radi.'],
    answer: 'Moram raditi.',
    tip: 'Conjugate the modal, leave the other verb alone: Moram raditi. The wrong versions conjugate the second verb or leave the modal in the infinitive.',
  },
  {
    mode: 'infinitiv',
    q: 'Which sentence is correct for "She wants to learn Croatian"?',
    opts: [
      'Ona želi učiti hrvatski.',
      'Ona želi uči hrvatski.',
      'Ona željeti uči hrvatski.',
      'Ona želi učim hrvatski.',
    ],
    answer: 'Ona želi učiti hrvatski.',
    tip: 'želi is conjugated for ona; učiti stays in the infinitive. The wrong versions conjugate učiti as well, or conjugate the wrong one of the two verbs.',
  },

  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: '____ plivati.',
    en: 'I can swim — I learned how.',
    opts: ['Znam', 'Mogu', 'Moram', 'Trebam'],
    answer: 'Znam',
    tip: 'A skill you have learned is znati: Znam plivati. Mogu plivati means you are able to right now; moram is "have to" and trebam is "need to".',
  },
  {
    mode: 'izbor',
    q: 'Danas ne ____ plivati, umoran sam.',
    en: 'I cannot swim today; I am tired.',
    opts: ['mogu', 'znam', 'moram', 'želim'],
    answer: 'mogu',
    tip: 'Not being able to right now is moći: ne mogu. "Ne znam plivati" would mean you never learned; ne moram is "I do not have to", and ne želim "I do not want to".',
  },
  {
    mode: 'izbor',
    q: 'Ivica ____ pjevati i svirati.',
    en: 'Ivica knows how to sing and play music.',
    opts: ['zna', 'mora', 'treba', 'znam'],
    answer: 'zna',
    tip: 'A learned skill takes znati, and Ivica is "he": zna. mora would mean he has to, treba that he needs to, and znam is the ja form.',
  },
  {
    mode: 'izbor',
    q: 'Which is the polite way to order a coffee?',
    opts: ['Molim Vas kavu.', 'Hoću kavu.', 'Moram kavu.', 'Znam kavu.'],
    answer: 'Molim Vas kavu.',
    tip: 'Molim Vas kavu is the polite order. Hoću kavu is correct Croatian but sounds blunt; morati needs a verb after it, and znati means "to know".',
  },
  {
    mode: 'izbor',
    q: '____ pomoć.',
    en: 'I need help.',
    opts: ['Trebam', 'Moram', 'Mogu', 'Znam'],
    answer: 'Trebam',
    tip: 'trebati can take a thing directly: Trebam pomoć. morati and moći must be followed by a verb, and znam pomoć would be "I know help".',
  },
  {
    mode: 'izbor',
    q: '— Trebaš li auto? — Ne, ne ____, hvala.',
    en: 'Do you need the car? — No, I do not, thanks.',
    opts: ['trebam', 'trebaš', 'moram', 'mogu'],
    answer: 'trebam',
    tip: 'Answer with the same verb in the ja form: ne trebam. trebaš repeats the ti form of the question; moram and mogu are different verbs.',
  },
  {
    mode: 'izbor',
    q: '— Možeš li doći sutra? — ____!',
    en: 'Can you come tomorrow? — Sure!',
    opts: ['Može', 'Mora', 'Treba', 'Zna'],
    answer: 'Može',
    tip: 'Može! on its own means "sure, fine by me". Mora, treba and zna are not used as one-word answers like this.',
  },
  {
    mode: 'izbor',
    q: 'Ona ____ učiti, ne može doći.',
    en: 'She has to study; she cannot come.',
    opts: ['mora', 'zna', 'hoće', 'želi'],
    answer: 'mora',
    tip: 'A duty is morati: mora učiti. zna učiti would mean she knows how to study; hoće and želi both mean she wants to.',
  },
  {
    mode: 'izbor',
    q: 'Umoran sam. ____ spavati.',
    en: 'I am tired. I want to sleep.',
    opts: ['Želim', 'Znam', 'Trebaš', 'Može'],
    answer: 'Želim',
    tip: '"I want" is želim (or hoću). Znam spavati would be "I know how to sleep", trebaš is the ti form, and može is the on / ona form of moći.',
  },
];
