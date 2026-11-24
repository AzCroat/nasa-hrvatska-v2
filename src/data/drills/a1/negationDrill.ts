// src/data/drills/a1/negationDrill.ts
//
// A1 SAYING NO — the drill for the `negation` lesson (A1, 26).
//
// Follows Hrvatski za početnike 1, pages 13, 36, 43–44 and 47. The book has no single page
// on negation; it builds it up verb by verb: the "niječni oblik" of biti (ja nisam … oni
// nisu · "Ja nisam student."), nemati beside imati ("Martin nema auto." · "Ima li Zagreb
// metro?" — "Ne! Nažalost, nema."), "ja neću" and "Ja ne mogu." with the modal verbs, and
// ne + verb in the dialogue "Kamo idemo?" ("Znaš da ne volim balet."). The lesson puts all
// of this in one place and adds the double negative (Nitko ne zna. · Ništa ne razumijem. ·
// Nikad ne kasnim.), which the book only uses in passing in later units. Present tense
// only; objects are limited to the fixed phrases Nemam vremena and Nema problema, a
// language (ne govorim njemački) and nouns that do not change (auto, metro, čaj).
//
// Three modes:
//   neGlagol  — ne + verb, written as two words
//   stopljeni — the three that fuse: nisam, nemam, neću
//   dvostruka — nitko, ništa, nikad and the negated verb

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NEGATION_MODE_LABELS: Record<string, string> = {
  neGlagol: '🚫 Ne znam',
  stopljeni: '🔗 Nisam, nemam, neću',
  dvostruka: '✌️ Nitko ne zna',
};

export const NEGATION_DRILL_DATA: ModeDrillItem[] = [
  // ── neGlagol ──────────────────────────────────────────────────────────────
  {
    mode: 'neGlagol',
    q: 'Govoriš li njemački? — Nažalost, ____ govorim.',
    en: 'Do you speak German? — Unfortunately, I do not.',
    opts: ['ne', 'ni', 'nije', 'nisam'],
    answer: 'ne',
    tip: 'An ordinary verb is negated with the separate word ne in front of it: ne govorim. ni means "neither / nor", and nije and nisam are negative forms of biti, which cannot stand in front of another present-tense verb.',
  },
  {
    mode: 'neGlagol',
    lead: 'Radite li danas?',
    q: 'Danas ____. Nedjelja je.',
    cue: 'Two colleagues answer for both of them: no.',
    opts: ['ne radimo', 'ne radim', 'ne rade', 'ne radiš'],
    answer: 'ne radimo',
    tip: 'Two people answer with the mi form, and ne goes in front of it as a separate word: ne radimo. ne radim is "I do not work", ne rade is "they do not work", and ne radiš is "you do not work".',
  },
  {
    mode: 'neGlagol',
    q: 'Gdje stoji "ne"?',
    en: 'Where does "ne" go?',
    opts: [
      'Ana ne razumije hrvatski.',
      'Ana razumije ne hrvatski.',
      'Ne Ana razumije hrvatski.',
      'Ana razumije hrvatski ne.',
    ],
    answer: 'Ana ne razumije hrvatski.',
    tip: 'ne stands immediately before the verb: ne razumije. It cannot come after the verb, before the name, or at the end of the sentence; nothing else in the sentence moves.',
  },
  {
    mode: 'neGlagol',
    q: 'Marko i Ana ne ____ engleski.',
    en: 'Marko and Ana do not speak English.',
    opts: ['govore', 'govori', 'govorim', 'govorimo'],
    answer: 'govore',
    tip: 'Marko and Ana are oni, and the verb keeps its oni form after ne: ne govore. govori is for one person, govorim is "I speak", and govorimo is "we speak".',
  },
  {
    mode: 'neGlagol',
    q: 'Znaš li gdje je Ana? — ____.',
    en: 'Do you know where Ana is? — I do not know.',
    opts: ['Ne znam', 'Ne znaš', 'Ne zna', 'Nisam'],
    answer: 'Ne znam',
    tip: 'You answer about yourself with the ja form: Ne znam. Ne znaš is "you do not know", Ne zna is "he or she does not know", and Nisam answers only a question with biti (Jesi li…?).',
  },
  {
    mode: 'neGlagol',
    q: 'Kako se kaže "I do not work today"?',
    opts: ['Danas ne radim.', 'Danas nisam radim.', 'Danas nemam radim.', 'Danas neću radim.'],
    answer: 'Danas ne radim.',
    tip: 'Croatian has no word for "do": it is just ne + verb, Danas ne radim. nisam, nemam and neću are the negatives of biti, imati and htjeti, and none of them can stand in front of radim.',
  },
  {
    mode: 'neGlagol',
    q: 'Vi ne ____ hrvatski?',
    cue: '(razumjeti)',
    en: 'You do not understand Croatian?',
    opts: ['razumijete', 'razumijem', 'razumije', 'razumiju'],
    answer: 'razumijete',
    tip: 'Vi takes the ending -ete, and ne changes nothing in the verb: ne razumijete. razumijem is the ja form, razumije is for on or ona, and razumiju is for oni.',
  },
  {
    mode: 'neGlagol',
    lead: 'Učiš talijanski?',
    q: '____ talijanski, nego hrvatski.',
    cue: 'Answer about yourself.',
    opts: ['Ne učim', 'Ne učiš', 'Ne uči', 'Ne uče'],
    answer: 'Ne učim',
    tip: 'The question was to ti, so you answer with ja: Ne učim. Ne učiš repeats the form of the question, Ne uči is about him or her, and Ne uče is about them.',
  },
  {
    mode: 'neGlagol',
    q: 'Što znači "Ne razumijem"?',
    opts: ['I do not understand.', 'I do not know.', 'I do not speak.', 'You do not understand.'],
    answer: 'I do not understand.',
    tip: 'razumijem is "I understand", so ne razumijem is "I do not understand". "I do not know" is Ne znam, "I do not speak" is Ne govorim, and "you do not understand" would be Ne razumiješ.',
  },

  // ── stopljeni ─────────────────────────────────────────────────────────────
  {
    mode: 'stopljeni',
    q: 'Mi ____ profesori, mi smo studenti.',
    opts: ['nismo', 'niste', 'nisu', 'nemamo'],
    answer: 'nismo',
    tip: 'biti fuses with the negation, and the mi form is nismo. niste is for vi, nisu is for oni, and nemamo means "we do not have", from imati.',
  },
  {
    mode: 'stopljeni',
    q: 'Pablo ____ Hrvat. On je Čileanac.',
    opts: ['nije', 'nisam', 'nema', 'neće'],
    answer: 'nije',
    tip: 'The negative of je is the single word nije: Pablo nije Hrvat. nisam is "I am not", nema is "does not have", and neće is "does not want".',
  },
  {
    mode: 'stopljeni',
    q: 'Vi ____ studenti? — Ne, mi smo turisti.',
    opts: ['niste', 'nismo', 'nemate', 'nećete'],
    answer: 'niste',
    tip: 'The vi form of the negative of biti is niste. nismo is the mi form, nemate is "you do not have", and nećete is "you do not want".',
  },
  {
    mode: 'stopljeni',
    q: 'Imaš li auto? — ____.',
    opts: ['Nemam', 'Nisam', 'Neću', 'Nemaš'],
    answer: 'Nemam',
    tip: 'A question with imati is answered with nemam, "I do not have". Nisam answers a question with biti, Neću means "I do not want to", and Nemaš is "you do not have".',
  },
  {
    mode: 'stopljeni',
    q: 'Zagreb ____ metro.',
    en: 'Zagreb does not have a subway.',
    opts: ['nema', 'nije', 'neće', 'nemaju'],
    answer: 'nema',
    tip: 'Zagreb is one city (on), and "does not have" is nema. nije would say Zagreb is not a subway, neće means "does not want", and nemaju is for oni.',
  },
  {
    mode: 'stopljeni',
    q: 'Danas ____ vremena, radimo.',
    en: 'We have no time today, we are working.',
    opts: ['nemamo', 'nismo', 'nećemo', 'nemaju'],
    answer: 'nemamo',
    tip: 'radimo shows that the speaker means mi, and "we do not have" is nemamo, as in the phrase Nemam vremena. nismo is "we are not", nećemo is "we do not want", and nemaju is "they do not have".',
  },
  {
    mode: 'stopljeni',
    q: 'Hoćeš li čaj? — ____, hvala.',
    opts: ['Neću', 'Nisam', 'Nemam', 'Nećeš'],
    answer: 'Neću',
    tip: 'A question with hoćeš is refused with neću, "I do not want": Neću, hvala. Nisam belongs to biti, Nemam means "I do not have", and Nećeš is "you do not want".',
  },
  {
    mode: 'stopljeni',
    q: 'Ja hoću, ali oni ____.',
    en: 'I want to, but they do not.',
    opts: ['neće', 'nećemo', 'nisu', 'nemaju'],
    answer: 'neće',
    tip: 'The oni form of the negative of htjeti is neće (the same as for on and ona). nećemo is "we do not want", nisu is "they are not", and nemaju is "they do not have".',
  },
  {
    mode: 'stopljeni',
    q: 'Što znači "Nema problema"?',
    opts: ['No problem.', 'I have a problem.', 'It is not my problem.', 'He is the problem.'],
    answer: 'No problem.',
    tip: 'Nema problema is a fixed phrase: "there is no problem". "I have a problem" would be Imam problem, and the other two would need nije or je, forms of biti, not nema.',
  },

  // ── dvostruka ─────────────────────────────────────────────────────────────
  {
    mode: 'dvostruka',
    q: 'Nitko ____ govori njemački.',
    en: 'Nobody speaks German.',
    opts: ['ne', 'ni', 'nije', 'nema'],
    answer: 'ne',
    tip: 'After nitko the verb must be negated as well: Nitko ne govori. ni means "neither / nor", and nije and nema are the negatives of biti and imati, which do not fit in front of govori.',
  },
  {
    mode: 'dvostruka',
    q: 'Što znaš? — Ništa ____.',
    opts: ['ne znam', 'znam', 'ne zna', 'nisam'],
    answer: 'ne znam',
    tip: 'ništa needs a negated verb, in the ja form: Ništa ne znam. A bare znam leaves the verb positive, which Croatian does not allow, ne zna is about him or her, and nisam is biti.',
  },
  {
    mode: 'dvostruka',
    q: 'Profesor nikad ____.',
    cue: '(kasniti)',
    en: 'The professor is never late.',
    opts: ['ne kasni', 'kasni', 'ne kasnim', 'ne kasne'],
    answer: 'ne kasni',
    tip: 'nikad needs a negated verb, and profesor is on: nikad ne kasni. A bare kasni leaves the verb positive, ne kasnim is the ja form, and ne kasne is for oni.',
  },
  {
    mode: 'dvostruka',
    q: '____ nije ovdje.',
    en: 'Nobody is here.',
    opts: ['Nitko', 'Ništa', 'Nikad', 'Tko'],
    answer: 'Nitko',
    tip: '"Nobody" is Nitko, and the verb is negative too: Nitko nije ovdje. Ništa means "nothing", Nikad means "never", and Tko is the question word "who".',
  },
  {
    mode: 'dvostruka',
    q: 'Točna rečenica je:',
    en: 'The correct sentence is:',
    opts: [
      'Nikad ne radim navečer.',
      'Nikad radim navečer.',
      'Ne nikad radim navečer.',
      'Nikad nisam radim navečer.',
    ],
    answer: 'Nikad ne radim navečer.',
    tip: 'nikad and ne go together, with ne right before the verb: Nikad ne radim. Leaving out ne is not Croatian, ne cannot stand before nikad, and nisam cannot stand in front of radim.',
  },
  {
    mode: 'dvostruka',
    q: '____ ne razumijem. Sve je novo.',
    en: 'I do not understand anything. Everything is new.',
    opts: ['Ništa', 'Nitko', 'Što', 'Tko'],
    answer: 'Ništa',
    tip: '"Nothing" is Ništa, with the negated verb: Ništa ne razumijem. Nitko means "nobody" and would need razumije, and Što and Tko are the question words "what" and "who".',
  },
  {
    mode: 'dvostruka',
    q: 'Ana nikad ____ umorna.',
    en: 'Ana is never tired.',
    opts: ['nije', 'je', 'nisam', 'ne'],
    answer: 'nije',
    tip: 'With nikad the verb biti must be negative as well: nikad nije umorna. A bare je leaves it positive, nisam is the ja form, and ne on its own is not a verb; with biti it fuses into nije.',
  },
  {
    mode: 'dvostruka',
    q: 'Nitko ____ vremena.',
    en: 'Nobody has time.',
    opts: ['nema', 'ima', 'nemam', 'nije'],
    answer: 'nema',
    tip: 'Nitko needs a negative verb, and "has no time" is nema vremena. ima leaves the verb positive, nemam is the ja form, and nije is the negative of biti, not of imati.',
  },
  {
    mode: 'dvostruka',
    q: 'Što znači "Nitko ne zna"?',
    opts: ['Nobody knows.', 'Somebody knows.', 'Nobody is here.', 'I know nobody.'],
    answer: 'Nobody knows.',
    tip: 'Nitko is "nobody" and ne zna is "does not know"; together they mean simply "Nobody knows", one negative in English. "Somebody" is netko, "is here" would need nije ovdje, and "I know" would need znam.',
  },
];
