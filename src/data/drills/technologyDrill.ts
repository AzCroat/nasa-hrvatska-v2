// src/data/drills/technologyDrill.ts
//
// B1 TECHNOLOGY & THE INTERNET — the drill for the `technology-internet` lesson.
//
// The structure is a REGISTER SPLIT, and it is the clearest example of one in
// the language. Croatian built native words for the whole digital vocabulary —
// *računalo*, *zaslon*, *tipkovnica*, *preglednik*, *poveznica* — and they are
// genuinely used, in writing, in software, in official text. Alongside them the
// international words live in speech: nobody says *računalo* to a friend in a
// café. Neither layer is wrong; using the wrong one in the wrong place is what
// marks a learner out.
//
// The native words are also transparent in a way the borrowings are not:
// *tipkovnica* is built from *tipka*, a key; *preglednik* from *pregledati*, to
// look through; *poveznica* from *povezati*, to connect. Learning the root
// gives the word away and half a dozen others with it.
//
// Three modes:
//   nazivi  — the native words and the roots they are built on
//   radnje  — the verbs, including the reflexive pair prijaviti se / odjaviti se
//   uredaji — phones, connection and what goes wrong

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const TECHNOLOGY_MODE_LABELS: Record<string, string> = {
  nazivi: '💻 Domaće riječi',
  radnje: '🖱️ Radnje',
  uredaji: '📱 Uređaji',
};

export const TECHNOLOGY_DRILL_DATA: ModeDrillItem[] = [
  // ── nazivi ────────────────────────────────────────────────────────────────
  {
    mode: 'nazivi',
    q: 'Koja je domaća riječ za "computer"?',
    en: 'computer',
    opts: ['računalo', 'kompjuter', 'stroj', 'uređaj'],
    answer: 'računalo',
    tip: 'From računati, to calculate. Kompjuter is the spoken form.',
  },
  {
    mode: 'nazivi',
    q: 'Od koje je riječi izvedena "tipkovnica"?',
    en: 'What is tipkovnica built from?',
    opts: ['tipka', 'tip', 'tipično', 'tiskati'],
    answer: 'tipka',
    tip: 'tipka is a key, so tipkovnica is the thing full of keys.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "preglednik"?',
    en: 'What is a preglednik?',
    opts: ['browser', 'monitor', 'previewer', 'inspector'],
    answer: 'browser',
    tip: 'From pregledati, to look through.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "poveznica"?',
    en: 'What is a poveznica?',
    opts: ['link', 'connection speed', 'cable', 'network'],
    answer: 'link',
    tip: 'From povezati, to connect.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "zaslon"?',
    en: 'What is a zaslon?',
    opts: ['screen', 'shutter', 'cover', 'window'],
    answer: 'screen',
    tip: 'Originally a shield — something you put in front of a thing.',
  },
  {
    mode: 'nazivi',
    q: 'Gdje pripada "računalo", a gdje "kompjuter"?',
    en: 'Where does each belong?',
    opts: [
      'računalo u pismu, kompjuter u govoru',
      'obrnuto',
      'oboje samo u pismu',
      'kompjuter je pogrešan',
    ],
    answer: 'računalo u pismu, kompjuter u govoru',
    tip: 'Both are real. Using the wrong one in the wrong place is what shows.',
  },
  {
    mode: 'nazivi',
    q: 'Što je "pretraživač"?',
    en: 'What is a pretraživač?',
    opts: ['search engine', 'browser', 'file manager', 'index'],
    answer: 'search engine',
    tip: 'From pretraživati. Not the same as preglednik — one letter of thought apart.',
  },
  {
    mode: 'nazivi',
    q: 'Koja riječ za "mouse" NIJE prevedena?',
    en: 'Which word was not translated?',
    opts: ['miš', 'zaslon', 'tipkovnica', 'poveznica'],
    answer: 'miš',
    tip: 'The animal did the job — the same metaphor as in English.',
  },

  // ── radnje ────────────────────────────────────────────────────────────────
  {
    mode: 'radnje',
    q: 'Kako se kaže "to download"?',
    en: 'to download',
    opts: ['preuzeti', 'spustiti', 'skinuti dolje', 'dohvatiti'],
    answer: 'preuzeti',
    tip: 'preuzeti — literally "to take over". Skinuti is heard in speech.',
  },
  {
    mode: 'radnje',
    q: 'Kako se kaže "to log in"?',
    en: 'to log in',
    opts: ['prijaviti se', 'prijaviti', 'ulaziti', 'upisati se'],
    answer: 'prijaviti se',
    tip: 'The se is not optional. Prijaviti without it means to report something.',
  },
  {
    mode: 'radnje',
    q: 'Kako se kaže "to log out"?',
    en: 'to log out',
    opts: ['odjaviti se', 'odjaviti', 'izaći', 'ugasiti'],
    answer: 'odjaviti se',
    tip: 'The pair prijaviti se / odjaviti se, both reflexive.',
  },
  {
    mode: 'radnje',
    q: 'Što znači "prijaviti" bez "se"?',
    en: 'What does it mean without se?',
    opts: ['prijaviti nekoga ili nešto', 'isto je', 'odjaviti se', 'registrirati se'],
    answer: 'prijaviti nekoga ili nešto',
    tip: 'To report someone or something. One small word, a very different sentence.',
  },
  {
    mode: 'radnje',
    q: 'Kako se kaže "to save"?',
    en: 'to save (a file)',
    opts: ['spremiti', 'sačuvati', 'štedjeti', 'držati'],
    answer: 'spremiti',
    tip: 'Štedjeti is to save money — a trap for anyone reasoning from English.',
  },
  {
    mode: 'radnje',
    q: 'Kako se kaže "to delete"?',
    en: 'to delete',
    opts: ['obrisati', 'ukloniti', 'poništiti', 'zatvoriti'],
    answer: 'obrisati',
    tip: 'From brisati, to wipe.',
  },
  {
    mode: 'radnje',
    q: 'Kako se kaže "to share"?',
    en: 'to share',
    opts: ['podijeliti', 'razdijeliti', 'davati', 'poslati svima'],
    answer: 'podijeliti',
    tip: 'The same verb as sharing a cake.',
  },
  {
    mode: 'radnje',
    q: 'Preuzeo sam ____. (datoteka)',
    en: 'I downloaded the file.',
    opts: ['datoteku', 'datoteka', 'datoteke', 'datotekom'],
    answer: 'datoteku',
    tip: 'Accusative — and datoteka is the word for a file.',
  },

  // ── uredaji ───────────────────────────────────────────────────────────────
  {
    mode: 'uredaji',
    q: 'Kako se kaže "mobile phone"?',
    en: 'mobile phone',
    opts: ['mobitel', 'mobilni', 'telefon ručni', 'prijenosnik'],
    answer: 'mobitel',
    tip: 'mobitel — universal, spoken and written alike.',
  },
  {
    mode: 'uredaji',
    q: 'Što je "punjač"?',
    en: 'What is a punjač?',
    opts: ['charger', 'battery', 'adapter plug', 'power bank'],
    answer: 'charger',
    tip: 'From puniti, to fill or charge.',
  },
  {
    mode: 'uredaji',
    q: 'Što je "lozinka"?',
    en: 'What is a lozinka?',
    opts: ['password', 'username', 'PIN only', 'security question'],
    answer: 'password',
    tip: 'Originally a watchword. Korisničko ime is the username.',
  },
  {
    mode: 'uredaji',
    q: 'Nema ____ . (signal)',
    en: 'There is no signal.',
    opts: ['signala', 'signal', 'signalu', 'signalom'],
    answer: 'signala',
    tip: 'Nema takes the GENITIVE — nema signala, nema interneta.',
  },
  {
    mode: 'uredaji',
    q: 'Što je "aplikacija"?',
    en: 'What is an aplikacija?',
    opts: ['app', 'application form', 'update', 'setting'],
    answer: 'app',
    tip: 'Shortened to apka in speech.',
  },
  {
    mode: 'uredaji',
    q: 'Baterija je ____.',
    en: 'The battery is flat.',
    opts: ['prazna', 'prazan', 'prazno', 'prazne'],
    answer: 'prazna',
    tip: 'Baterija is feminine.',
  },
  {
    mode: 'uredaji',
    q: 'Što je "korisničko ime"?',
    en: 'What is it?',
    opts: ['username', 'display name', 'real name', 'nickname'],
    answer: 'username',
    tip: 'From korisnik, a user.',
  },
  {
    mode: 'uredaji',
    q: 'Spojen sam na ____. (internet)',
    en: 'I am connected to the internet.',
    opts: ['internet', 'interneta', 'internetu', 'internetom'],
    answer: 'internet',
    tip: 'na plus the accusative for connecting TO something.',
  },
];
