// src/data/drills/diasporaDrill.ts
//
// C1 DIASPORA & HERITAGE — the drill for the `diaspora-identity` lesson.
//
// This is the lesson written for the learner this app was built for, and its
// central word has no English equivalent. *Zavičaj* is not "hometown" and not
// "homeland": it is the place you belong to, which may be a village you have
// visited twice. *Moj zavičaj je Dalmacija* is a sentence about identity that
// English needs a paragraph for.
//
// Two things a heritage speaker needs stated plainly. INHERITED CROATIAN IS
// OFTEN OLDER CROATIAN — the forms that came over with a grandparent sound
// dated rather than wrong, and dated charms rather than embarrasses. And
// *gastarbajter* is historical and loaded: used by an outsider it can sound
// dismissive, whatever was meant.
//
// The rest is the vocabulary for talking about the situation at all —
// *pasivno znanje*, *obnoviti znanje*, *prenijeti jezik na djecu* — and the
// sentences that get a conversation past the apology: *Razumijem više nego što
// govorim*, *Naučio sam od bake*, *Govorim s greškama, ali govorim*.
//
// Three modes:
//   rijeci   — iseljenik, povratnik, zavičaj, korijeni
//   recenice — what to actually say about your own Croatian
//   jezik    — passing it on, and losing it

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const DIASPORA_MODE_LABELS: Record<string, string> = {
  rijeci: '🌍 Riječi',
  recenice: '💬 Rečenice',
  jezik: '🧬 Prijenos jezika',
};

export const DIASPORA_DRILL_DATA: ModeDrillItem[] = [
  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Što znači "zavičaj"?',
    en: 'What does zavičaj mean?',
    opts: [
      'kraj kojemu pripadate',
      'grad u kojemu ste rođeni',
      'država podrijetla',
      'mjesto stanovanja',
    ],
    answer: 'kraj kojemu pripadate',
    tip: 'The place you belong to — English has no single word for it.',
  },
  {
    mode: 'rijeci',
    q: 'Moj zavičaj ____ Dalmacija.',
    en: 'My zavičaj is Dalmatia.',
    opts: ['je', 'su', 'ima', 'bude'],
    answer: 'je',
    tip: 'And it can be a region, not only a town.',
  },
  {
    mode: 'rijeci',
    q: 'Tko je "iseljenik"?',
    en: 'Who is an iseljenik?',
    opts: ['onaj tko je otišao', 'onaj tko je došao', 'onaj tko se vratio', 'potomak'],
    answer: 'onaj tko je otišao',
    tip: 'iseljenik out, doseljenik in — the prefixes carry it.',
  },
  {
    mode: 'rijeci',
    q: 'Tko je "povratnik"?',
    en: 'Who is a povratnik?',
    opts: ['onaj tko se vratio', 'onaj tko odlazi', 'druga generacija', 'gost'],
    answer: 'onaj tko se vratio',
    tip: 'A returnee — and a whole administrative category.',
  },
  {
    mode: 'rijeci',
    q: 'Što su "korijeni"?',
    en: 'What are korijeni?',
    opts: ['roots', 'relatives', 'origins of a word', 'foundations'],
    answer: 'roots',
    tip: 'Tražim svoje korijene — a sentence a great many people say.',
  },
  {
    mode: 'rijeci',
    q: 'Kakva je riječ "gastarbajter"?',
    en: 'What kind of word is gastarbajter?',
    opts: ['povijesna i osjetljiva', 'neutralna', 'službena', 'šaljiva'],
    answer: 'povijesna i osjetljiva',
    tip: 'Historical, and from an outsider it can land as dismissive.',
  },
  {
    mode: 'rijeci',
    q: 'Što je "druga generacija"?',
    en: 'What is druga generacija?',
    opts: ['djeca iseljenika', 'unuci iseljenika', 'drugi val iseljavanja', 'povratnici'],
    answer: 'djeca iseljenika',
    tip: 'And treća generacija is where the language is usually lost.',
  },
  {
    mode: 'rijeci',
    q: 'Koja je razlika između "dijaspora" i "iseljeništvo"?',
    en: 'The difference?',
    opts: [
      'gotovo nikakva, iseljeništvo je domaća riječ',
      'jedno je službeno',
      'jedno je starije stanje',
      'jedno je za Europu',
    ],
    answer: 'gotovo nikakva, iseljeništvo je domaća riječ',
    tip: 'The same building-not-borrowing preference the identity lesson described.',
  },

  // ── recenice ──────────────────────────────────────────────────────────────
  {
    mode: 'recenice',
    q: 'Razumijem više ____ što govorim.',
    en: 'I understand more than I speak.',
    opts: ['nego', 'od', 'kao', 'da'],
    answer: 'nego',
    tip: 'nego što before a clause; od before a noun.',
  },
  {
    mode: 'recenice',
    q: 'Naučio sam ____ bake.',
    en: 'I learned from my grandmother.',
    opts: ['od', 'iz', 'sa', 'kod'],
    answer: 'od',
    tip: 'učiti OD nekoga plus the genitive.',
  },
  {
    mode: 'recenice',
    q: 'Govorim ____ greškama, ali govorim.',
    en: 'I speak with mistakes, but I speak.',
    opts: ['s', 'sa', 'u', 'po'],
    answer: 's',
    tip: 'greškama begins with g, so plain s.',
  },
  {
    mode: 'recenice',
    q: 'Kod kuće ____ govorili hrvatski.',
    en: 'We spoke Croatian at home.',
    opts: ['smo', 'su', 'sam', 'ste'],
    answer: 'smo',
    tip: 'And kod kuće takes the genitive.',
  },
  {
    mode: 'recenice',
    q: 'Ispričavam se ____ naglasku.',
    en: 'Apologies for my accent.',
    opts: ['na', 'za', 'o', 'zbog'],
    answer: 'na',
    tip: 'ispričavam se NA plus the locative.',
  },
  {
    mode: 'recenice',
    q: 'Trudim se ____ jezik.',
    en: 'I am trying to keep the language up.',
    opts: ['održati', 'održavam', 'održavanje', 'održan'],
    answer: 'održati',
    tip: 'The infinitive after truditi se.',
  },
  {
    mode: 'recenice',
    q: 'Kako se odgovara na "Odakle si?" kad je pitanje o podrijetlu?',
    en: 'Answering the origin question:',
    opts: ['Obitelj mi je iz…', 'Ja sam iz Amerike.', 'Rođen sam ovdje.', 'Ne znam točno.'],
    answer: 'Obitelj mi je iz…',
    tip: 'It answers what was actually being asked, without a biography.',
  },
  {
    mode: 'recenice',
    q: 'Zašto se isplati reći "Govorim s greškama, ali govorim"?',
    en: 'Why say that?',
    opts: ['razgovor se nastavlja na hrvatskom', 'zvuči skromno', 'kratko je', 'nema razloga'],
    answer: 'razgovor se nastavlja na hrvatskom',
    tip: 'The alternative is that everybody politely switches to English.',
  },

  // ── jezik ─────────────────────────────────────────────────────────────────
  {
    mode: 'jezik',
    q: 'Što je "pasivno znanje"?',
    en: 'What is pasivno znanje?',
    opts: [
      'razumije se, ali se ne govori',
      'zaboravljeno znanje',
      'znanje bez gramatike',
      'znanje iz škole',
    ],
    answer: 'razumije se, ali se ne govori',
    tip: 'The commonest heritage profile, and the easiest one to reactivate.',
  },
  {
    mode: 'jezik',
    q: 'Što znači "obnoviti znanje"?',
    en: 'What does obnoviti znanje mean?',
    opts: ['to revive it', 'to renew a certificate', 'to relearn from scratch', 'to test it'],
    answer: 'to revive it',
    tip: 'Obnoviti — the same verb as restoring a building.',
  },
  {
    mode: 'jezik',
    q: 'Prenijeti jezik ____ djecu.',
    en: 'to pass the language on to the children',
    opts: ['na', 'do', 'za', 'k'],
    answer: 'na',
    tip: 'prenijeti NA plus the accusative.',
  },
  {
    mode: 'jezik',
    q: 'Zašto naslijeđeni hrvatski zvuči starinski?',
    en: 'Why does inherited Croatian sound dated?',
    opts: [
      'čuva oblike iz vremena odlaska',
      'pun je pogrešaka',
      'miješa narječja',
      'prevodi s engleskoga',
    ],
    answer: 'čuva oblike iz vremena odlaska',
    tip: 'It stopped where the family left. Dated is not the same as wrong.',
  },
  {
    mode: 'jezik',
    q: 'Kako to obično djeluje na sugovornika?',
    en: 'How do speakers react to it?',
    opts: ['sa simpatijom', 's nerazumijevanjem', 's ispravljanjem', 'ravnodušno'],
    answer: 'sa simpatijom',
    tip: 'It charms. Nobody hears an older form and thinks less of the speaker.',
  },
  {
    mode: 'jezik',
    q: 'Što je "materinski jezik"?',
    en: 'What is materinski jezik?',
    opts: [
      'mother tongue',
      'the official language',
      'the home dialect',
      'the first language learned at school',
    ],
    answer: 'mother tongue',
    tip: 'And for a heritage speaker the honest answer is often "both".',
  },
  {
    mode: 'jezik',
    q: 'Što je najveći razlog gubitka jezika u trećoj generaciji?',
    en: 'Why is it usually lost by the third generation?',
    opts: [
      'prestane se govoriti kod kuće',
      'gramatika je teška',
      'nema udžbenika',
      'nema kontakta',
    ],
    answer: 'prestane se govoriti kod kuće',
    tip: 'Which is why prenijeti jezik na djecu is the phrase this lesson ends on.',
  },
  {
    mode: 'jezik',
    q: 'Koji je prvi korak u obnovi jezika?',
    en: 'First step in reviving it:',
    opts: [
      'govoriti, i s greškama',
      'naučiti svu gramatiku',
      'čitati književnost',
      'čekati priliku',
    ],
    answer: 'govoriti, i s greškama',
    tip: 'Passive knowledge becomes active only by being used badly first.',
  },
];
