// src/data/drills/b1/verbPrefixesDrill.ts
//
// B1 VERB PREFIXES — the drill for the `verb-prefixes` lesson.
//
// The lesson was linked to the shared aspect drill, which has no prefix items at all,
// so in effect it had no drill. This bank practises exactly what the lesson teaches and
// nothing later:
//   - a prefix echoes a preposition: u- into, iz- out of, do- up to, od- away,
//     pre- across, pod- under, na- onto/completion
//   - po- a little/briefly, pre- too much, raz- apart, za- a beginning
//   - a prefixed verb is perfective, so it has no "in progress" present
//
// Three modes:
//   smjer   — the prefix that matches the direction (pisati, ići, nositi families)
//   znacenje — po-, pre-, raz-, za- and the pisati family's meanings
//   vid     — the prefix makes the verb perfective

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERB_PREFIXES_MODE_LABELS: Record<string, string> = {
  smjer: '➡️ Smjer',
  znacenje: '🧩 Značenje',
  vid: '✅ Vid',
};

export const VERB_PREFIXES_DRILL_DATA: ModeDrillItem[] = [
  // ── smjer ─────────────────────────────────────────────────────────────────
  {
    mode: 'smjer',
    q: 'Molim vas, ____ u sobu.',
    en: 'Please come into the room.',
    opts: ['uđite', 'izađite', 'prijeđite', 'otiđite'],
    answer: 'uđite',
    tip: 'u- matches the preposition u (into): ući.',
  },
  {
    mode: 'smjer',
    q: 'Djeca su ____ iz škole u dva sata.',
    en: 'The children came out of school at two.',
    opts: ['izašla', 'ušla', 'došla', 'prešla'],
    answer: 'izašla',
    tip: 'iz- matches iz (out of): izaći, and djeca takes a participle in -a.',
  },
  {
    mode: 'smjer',
    q: 'Moramo ____ ulicu na zelenom svjetlu.',
    en: 'We have to cross the street at the green light.',
    opts: ['prijeći', 'ući', 'otići', 'doći'],
    answer: 'prijeći',
    tip: 'pre- / prije- means across: prijeći ulicu.',
  },
  {
    mode: 'smjer',
    q: 'Gosti su ____ u osam.',
    en: 'The guests arrived at eight.',
    opts: ['došli', 'otišli', 'izašli', 'prošli'],
    answer: 'došli',
    tip: 'do- matches do (up to, as far as): doći — to arrive.',
  },
  {
    mode: 'smjer',
    q: 'Već je kasno, moram ____.',
    en: 'It is already late, I have to leave.',
    opts: ['otići', 'doći', 'ući', 'prijeći'],
    answer: 'otići',
    tip: 'od- (away from) becomes ot- before ići: otići.',
  },
  {
    mode: 'smjer',
    q: 'Možeš li mi ____ čašu vode?',
    en: 'Can you bring me a glass of water?',
    opts: ['donijeti', 'odnijeti', 'prenijeti', 'iznijeti'],
    answer: 'donijeti',
    tip: 'do- brings the thing up to the speaker: donijeti.',
  },
  {
    mode: 'smjer',
    q: 'Molim te, ____ smeće.',
    en: 'Please take the rubbish out.',
    opts: ['iznesi', 'unesi', 'donesi', 'prenesi'],
    answer: 'iznesi',
    tip: 'iz- out of: iznijeti, imperative iznesi.',
  },
  {
    mode: 'smjer',
    q: 'Moraš ____ ugovor ovdje, na dnu.',
    en: 'You have to sign the contract here, at the bottom.',
    opts: ['potpisati', 'opisati', 'upisati', 'prepisati'],
    answer: 'potpisati',
    tip: 'pod- (under) + pisati, spelled pot- before p: you write underneath.',
  },
  {
    mode: 'smjer',
    q: 'Koji prefiks znači "out of"?',
    en: 'Which prefix means "out of"?',
    opts: ['iz-', 'u-', 'do-', 'na-'],
    answer: 'iz-',
    tip: 'The prefixes echo the prepositions: iz = out of.',
  },

  // ── znacenje ──────────────────────────────────────────────────────────────
  {
    mode: 'znacenje',
    q: 'Dođi, moramo malo ____.',
    en: 'Come on, we need to have a quick chat.',
    opts: ['popričati', 'ispričati', 'pričao', 'prepričati'],
    answer: 'popričati',
    tip: 'po- a little, briefly: popričati.',
  },
  {
    mode: 'znacenje',
    q: 'Samo ću ____ tko je na vratima.',
    en: 'I will just take a quick look at who is at the door.',
    opts: ['pogledati', 'razgledati', 'izgledati', 'ugledati'],
    answer: 'pogledati',
    tip: 'po- briefly + gledati. Razgledati is to look around a place.',
  },
  {
    mode: 'znacenje',
    q: 'Na svadbi sam se ____ i sad mi nije dobro.',
    en: 'I overate at the wedding and now I feel unwell.',
    opts: ['prejeo', 'pojeo', 'jeo', 'ujeo'],
    answer: 'prejeo',
    tip: 'pre- can mean too much: prejesti se.',
  },
  {
    mode: 'znacenje',
    q: 'Čaša je pala i ____ se.',
    en: 'The glass fell and smashed.',
    opts: ['razbila', 'dobila', 'zabila', 'pobila'],
    answer: 'razbila',
    tip: 'raz- apart, to pieces: razbiti.',
  },
  {
    mode: 'znacenje',
    q: 'Beba je ____ za pet minuta.',
    en: 'The baby fell asleep in five minutes.',
    opts: ['zaspala', 'prespavala', 'spavala', 'ispavala'],
    answer: 'zaspala',
    tip: 'za- often marks a beginning: zaspati, to fall asleep.',
  },
  {
    mode: 'znacenje',
    q: 'Kad je čula vijest, odjednom je ____.',
    en: 'When she heard the news, she suddenly burst into song.',
    opts: ['zapjevala', 'pjevala', 'otpjevala', 'ispjevala'],
    answer: 'zapjevala',
    tip: 'za- marks the start of the singing.',
  },
  {
    mode: 'znacenje',
    q: '____ mi svoj novi stan.',
    en: 'Describe your new flat to me.',
    opts: ['Opiši', 'Potpiši', 'Upiši', 'Prepiši'],
    answer: 'Opiši',
    tip: 'o- around + pisati: to write round something — describe.',
  },
  {
    mode: 'znacenje',
    q: 'Kći se ove godine ____ na fakultet.',
    en: 'My daughter enrolled at university this year.',
    opts: ['upisala', 'ispisala', 'opisala', 'zapisala'],
    answer: 'upisala',
    tip: 'u- into: your name goes into the register. Ispisati se is to withdraw.',
  },
  {
    mode: 'znacenje',
    q: '____ sam tvoj broj u mobitel.',
    en: 'I noted your number down in my phone.',
    opts: ['Zapisao', 'Opisao', 'Potpisao', 'Prepisao'],
    answer: 'Zapisao',
    tip: 'za- + pisati: to fix something in writing.',
  },
  {
    mode: 'znacenje',
    q: 'Možeš li mi ovaj tekst ____ na engleski?',
    en: 'Can you translate this text into English for me?',
    opts: ['prevesti', 'prevoziti', 'uvesti', 'provesti'],
    answer: 'prevesti',
    tip: 'pre- (across) + vesti (to lead): to carry a text across into another language.',
  },

  // ── vid ───────────────────────────────────────────────────────────────────
  {
    mode: 'vid',
    q: 'Sada ____ pismo, ne mogu razgovarati.',
    en: 'I am writing a letter right now, I cannot talk.',
    opts: ['pišem', 'napišem', 'napisujem', 'potpišem'],
    answer: 'pišem',
    tip: 'An action in progress needs the unprefixed imperfective. napisati has no ongoing present.',
  },
  {
    mode: 'vid',
    q: 'Jučer sam ____ pismo i poslao ga.',
    en: 'Yesterday I wrote the letter and sent it.',
    opts: ['napisao', 'pisao', 'pišem', 'pisat ću'],
    answer: 'napisao',
    tip: 'The prefix makes the verb perfective — a finished letter.',
  },
  {
    mode: 'vid',
    q: 'Koji je glagol svršen?',
    en: 'Which verb is perfective?',
    opts: ['pogledati', 'gledati', 'pisati', 'čitati'],
    answer: 'pogledati',
    tip: 'A prefix almost always makes the verb perfective.',
  },
  {
    mode: 'vid',
    q: 'Što prefiks dodaje glagolu?',
    en: 'What does a prefix add to a verb?',
    opts: ['značenje i svršeni vid', 'samo značenje', 'samo prošlo vrijeme', 'ništa'],
    answer: 'značenje i svršeni vid',
    tip: 'A prefix adds a meaning and, almost always, makes the verb perfective.',
  },
  {
    mode: 'vid',
    q: 'Cijelo popodne sam ____ zadaću, ali je nisam završio.',
    en: 'I was writing my homework all afternoon, but I did not finish it.',
    opts: ['pisao', 'napisao', 'opisao', 'potpisao'],
    answer: 'pisao',
    tip: 'The work was not finished, so the unprefixed imperfective.',
  },
  {
    mode: 'vid',
    q: 'Ušao je u sobu i ____ prozor.',
    en: 'He came into the room and opened the window.',
    opts: ['otvorio', 'otvarao', 'otvara', 'otvarat će'],
    answer: 'otvorio',
    tip: 'Two finished steps in a chain: both perfective.',
  },
];
