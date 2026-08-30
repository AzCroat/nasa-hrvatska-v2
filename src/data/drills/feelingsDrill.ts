// src/data/drills/feelingsDrill.ts
//
// B1 FEELINGS & INNER LIFE — the drill for the `feelings-inner-life` lesson.
//
// This is the lesson with the most case government per square inch in the whole
// curriculum, and the government is arbitrary: *bojati se* and *sramiti se*
// take the GENITIVE, *nadati se*, *veseliti se* and *čuditi se* take the
// DATIVE, and *brinuti se* takes *za* plus the accusative. Nothing about the
// meanings predicts which. They are all reflexive and they all look alike, so a
// learner who has met one assumes the rest behave the same way.
//
// Beside them sits the dative of experience — *žao mi je*, *drago mi je*,
// *dosadno mi je* — where the feeling happens TO you and there is no subject at
// all. English makes the person the subject of every one of these ("I am
// sorry", "I am bored"), which is exactly the habit that has to be broken.
//
// Three modes:
//   povratni — the reflexive emotion verbs and the case each demands
//   dativ    — the dative of experience
//   pojmovi  — čežnja, inat, snalaziti se

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const FEELINGS_MODE_LABELS: Record<string, string> = {
  povratni: '😰 Glagoli sa "se"',
  dativ: '💙 Žao mi je',
  pojmovi: '🇭🇷 Čežnja i inat',
};

export const FEELINGS_DRILL_DATA: ModeDrillItem[] = [
  // ── povratni ──────────────────────────────────────────────────────────────
  {
    mode: 'povratni',
    q: 'Bojim se ____. (pas)',
    en: 'I am afraid of the dog.',
    opts: ['psa', 'pas', 'psu', 'psom'],
    answer: 'psa',
    tip: 'Bojati se takes the GENITIVE.',
  },
  {
    mode: 'povratni',
    q: 'Nadam se ____. (bolje)',
    en: 'I hope for better.',
    opts: ['boljem', 'bolje', 'boljeg', 'boljim'],
    answer: 'boljem',
    tip: 'Nadati se takes the DATIVE — the opposite of bojati se.',
  },
  {
    mode: 'povratni',
    q: 'Veselim se ____. (odmor)',
    en: 'I am looking forward to the holiday.',
    opts: ['odmoru', 'odmor', 'odmora', 'odmorom'],
    answer: 'odmoru',
    tip: 'Dative: veselim se odmoru.',
  },
  {
    mode: 'povratni',
    q: 'Sramim se ____. (to)',
    en: 'I am ashamed of that.',
    opts: ['toga', 'to', 'tome', 'tim'],
    answer: 'toga',
    tip: 'Genitive, like bojati se.',
  },
  {
    mode: 'povratni',
    q: 'Koja dva glagola traže genitiv?',
    en: 'Which two take the genitive?',
    opts: ['bojati se i sramiti se', 'nadati se i veseliti se', 'čuditi se i brinuti se', 'svi'],
    answer: 'bojati se i sramiti se',
    tip: 'Fear and shame take the genitive. Hope and anticipation take the dative.',
  },
  {
    mode: 'povratni',
    q: 'Čudim se ____. (ti)',
    en: 'I am surprised at you.',
    opts: ['tebi', 'tebe', 'ti', 'tobom'],
    answer: 'tebi',
    tip: 'Dative — and the stressed form tebi, because it stands alone.',
  },
  {
    mode: 'povratni',
    q: 'Brinem se ____ tebe.',
    en: 'I worry about you.',
    opts: ['za', 'o', 'na', 'do'],
    answer: 'za',
    tip: 'Brinuti se ZA plus the accusative — a third pattern again.',
  },
  {
    mode: 'povratni',
    q: 'Predviđa li značenje koji padež glagol traži?',
    en: 'Does the meaning predict the case?',
    opts: ['ne, treba naučiti napamet', 'da, uvijek', 'da, po rodu', 'da, po vidu'],
    answer: 'ne, treba naučiti napamet',
    tip: 'Nothing about fear says "genitive". Learn each verb with its case.',
  },

  // ── dativ ─────────────────────────────────────────────────────────────────
  {
    mode: 'dativ',
    q: 'Žao ____ je.',
    en: 'I am sorry.',
    opts: ['mi', 'me', 'ja', 'mene'],
    answer: 'mi',
    tip: 'Dative: the sorrow is TO me. There is no subject in this sentence.',
  },
  {
    mode: 'dativ',
    q: 'Doslovno, "Dosadno mi je" znači ____.',
    en: 'Literally:',
    opts: ['boring is to me', 'I am boring', 'I bore', 'it bores me'],
    answer: 'boring is to me',
    tip: 'Which is why the adjective is neuter and never agrees with you.',
  },
  {
    mode: 'dativ',
    q: 'Koji oblik pridjeva nosi ove rečenice?',
    en: 'Which form does the adjective take?',
    opts: ['srednji rod', 'muški rod', 'ženski rod', 'množina'],
    answer: 'srednji rod',
    tip: 'Neuter singular throughout: hladno, dosadno, drago, žao.',
  },
  {
    mode: 'dativ',
    q: 'Drago ____ je što ste došli. (nama)',
    en: 'We are glad you came.',
    opts: ['nam', 'nas', 'mi', 'naše'],
    answer: 'nam',
    tip: 'nam — the dative clitic.',
  },
  {
    mode: 'dativ',
    q: 'Kako žena kaže "I am bored"?',
    en: 'A woman says:',
    opts: ['Dosadno mi je.', 'Dosadna mi je.', 'Dosadna sam.', 'Dosadno sam.'],
    answer: 'Dosadno mi je.',
    tip: 'Identical for everyone — nothing agrees with the speaker. Dosadna sam says YOU are boring.',
  },
  {
    mode: 'dativ',
    q: 'Stalo mi je ____ tebe.',
    en: 'I care about you.',
    opts: ['do', 'za', 'o', 'na'],
    answer: 'do',
    tip: 'Stalo mi je DO plus the genitive.',
  },
  {
    mode: 'dativ',
    q: 'Kako se kaže "he is cold"?',
    en: 'He is cold.',
    opts: ['Hladno mu je.', 'Hladan je.', 'Hladno ga je.', 'On je hladno.'],
    answer: 'Hladno mu je.',
    tip: 'Hladan je would describe his personality, not his temperature.',
  },
  {
    mode: 'dativ',
    q: 'Što znači "Drago mi je" pri upoznavanju?',
    en: 'On being introduced:',
    opts: ['Nice to meet you', 'I am sorry', 'I am pleased with it', 'Good luck'],
    answer: 'Nice to meet you',
    tip: 'The same phrase does both jobs — pleasure in general, and this greeting.',
  },

  // ── pojmovi ───────────────────────────────────────────────────────────────
  {
    mode: 'pojmovi',
    q: 'Što znači "čežnja"?',
    en: 'What is čežnja?',
    opts: ['gorko-slatka duboka čežnja', 'obična tuga', 'ljutnja', 'dosada'],
    answer: 'gorko-slatka duboka čežnja',
    tip: 'A deep bittersweet longing. English has no single word for it.',
  },
  {
    mode: 'pojmovi',
    q: 'Što znači "inat"?',
    en: 'What is inat?',
    opts: ['prkosna tvrdoglavost', 'strpljenje', 'radost', 'sram'],
    answer: 'prkosna tvrdoglavost',
    tip: 'Defiant stubbornness — sometimes admired, sometimes exhausting.',
  },
  {
    mode: 'pojmovi',
    q: 'Što znači "snalaziti se"?',
    en: 'What does snalaziti se mean?',
    opts: ['prilagoditi se i izaći na kraj', 'izgubiti se', 'odustati', 'žaliti se'],
    answer: 'prilagoditi se i izaći na kraj',
    tip: 'To manage, to find your way — the essential life skill, and a compliment.',
  },
  {
    mode: 'pojmovi',
    q: 'Napravio je to iz ____.',
    en: 'He did it out of spite.',
    opts: ['inata', 'inat', 'inatu', 'inatom'],
    answer: 'inata',
    tip: 'iz plus the genitive: iz inata.',
  },
  {
    mode: 'pojmovi',
    q: 'Koji glagol pripada uz "čežnja"?',
    en: 'Which verb goes with it?',
    opts: ['čeznuti', 'čekati', 'čuvati', 'čuditi se'],
    answer: 'čeznuti',
    tip: 'Čeznuti za nekim — to long for someone, with the instrumental.',
  },
  {
    mode: 'pojmovi',
    q: 'Čeznem ____ domom.',
    en: 'I long for home.',
    opts: ['za', 'do', 'o', 'na'],
    answer: 'za',
    tip: 'Čeznuti ZA plus the instrumental.',
  },
  {
    mode: 'pojmovi',
    q: 'Kako se pita nekoga kako se snalazi?',
    en: 'Asking how someone is coping:',
    opts: ['Kako se snalaziš?', 'Kako se snalaziti?', 'Kako snalaziš?', 'Kako te snalazi?'],
    answer: 'Kako se snalaziš?',
    tip: 'Asked of anyone newly arrived, and it is a real question.',
  },
  {
    mode: 'pojmovi',
    q: 'Zašto se "inat" teško prevodi?',
    en: 'Why is it hard to translate?',
    opts: ['nosi i prkos i ponos', 'staro je', 'nije hrvatska riječ', 'ima više oblika'],
    answer: 'nosi i prkos i ponos',
    tip: 'It carries defiance and pride at once — "spite" catches only half of it.',
  },
];
