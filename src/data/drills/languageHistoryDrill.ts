// src/data/drills/languageHistoryDrill.ts
//
// B2 THE HISTORY OF THE LANGUAGE — the drill for the `language-history` lesson.
//
// This is the lesson that turns a pile of irregularities into a system. The
// *ije* / *je* alternation a learner has been memorising word by word —
// *mlijeko* but *mliječni*, *vrijeme* but *vremena* — is the JAT REFLEX, one
// old vowel resolving long or short. Once that is known it stops being a list
// and becomes a rule.
//
// The three dialect groups are named for one word each: *štokavski*,
// *čakavski*, *kajkavski*, after *što*, *ča* and *kaj*. The standard is
// štokavski and ijekavian, which is why the app teaches *mlijeko* and
// *vrijeme*; a learner in Zagreb will hear *kaj* daily and needs to know it is
// a dialect word rather than a mistake.
//
// And the habit of BUILDING rather than borrowing — *zrakoplov*, *računalo*,
// *tipkovnica* — is a deliberate tradition, not a quirk, which is why the
// technology lesson had two layers in the first place.
//
// ONE DELIBERATE OMISSION. The `jat` mode drills the ijekavian and ikavian
// reflexes (*lijep*, *lip*) and never shows the EKAVIAN one, though the
// three-way contrast is the single best diagnostic a learner has for placing a
// speaker. The ekavian form is homographic with Serbian and the distractor rule
// is absolute — a wrong answer is still rendered on screen as a clickable
// option. The app does teach the three-way reflex, in the C2
// `dijalekti-dubinski` lesson, which holds the one sanctioned CONTRASTIVE_LESSONS
// carve-out precisely because naming the form IS the teaching there. A B2
// drill distractor is not that place, and the lint caught this on the first
// run of this file.
//
// Three modes:
//   narjecja — the three dialect groups
//   jat      — the ije/je/e reflex
//   pismo    — glagoljica, gajica, and the building habit

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const LANGUAGE_HISTORY_MODE_LABELS: Record<string, string> = {
  narjecja: '🗺️ Narječja',
  jat: '🔁 Jat',
  pismo: '✍️ Pismo i tvorba',
};

export const LANGUAGE_HISTORY_DRILL_DATA: ModeDrillItem[] = [
  // ── narjecja ──────────────────────────────────────────────────────────────
  {
    mode: 'narjecja',
    q: 'Po čemu su narječja dobila imena?',
    en: 'How are the dialect groups named?',
    opts: ['po riječi za "što"', 'po području', 'po piscima', 'po naglasku'],
    answer: 'po riječi za "što"',
    tip: 'što, ča, kaj — one word each.',
  },
  {
    mode: 'narjecja',
    q: 'Koje je narječje osnova standarda?',
    en: 'Which is the basis of the standard?',
    opts: ['štokavsko', 'čakavsko', 'kajkavsko', 'sva tri jednako'],
    answer: 'štokavsko',
    tip: 'Štokavian and ijekavian — hence mlijeko and vrijeme.',
  },
  {
    mode: 'narjecja',
    q: 'Gdje se govori kajkavski?',
    en: 'Where is kajkavian spoken?',
    opts: ['na sjeverozapadu, oko Zagreba', 'na obali', 'u Slavoniji', 'u Dalmatinskoj zagori'],
    answer: 'na sjeverozapadu, oko Zagreba',
    tip: 'So kaj is heard daily in Zagreb — a dialect word, not an error.',
  },
  {
    mode: 'narjecja',
    q: 'Gdje se govori čakavski?',
    en: 'Where is čakavian spoken?',
    opts: ['na obali, u Istri i na otocima', 'na sjeveru', 'u Zagrebu', 'u Slavoniji'],
    answer: 'na obali, u Istri i na otocima',
    tip: 'And it is the oldest-attested of the three in writing.',
  },
  {
    mode: 'narjecja',
    q: 'Koliko ima narječja?',
    en: 'How many dialect groups?',
    opts: ['tri', 'dva', 'četiri', 'pet'],
    answer: 'tri',
    tip: 'štokavsko, čakavsko, kajkavsko.',
  },
  {
    mode: 'narjecja',
    q: 'Je li "kaj" pogreška?',
    en: 'Is kaj an error?',
    opts: ['ne, dijalektalni je oblik', 'da, treba što', 'da, strana je riječ', 'samo u pisanju'],
    answer: 'ne, dijalektalni je oblik',
    tip: 'It is a dialect form of a Croatian word, and it is everywhere in the north-west.',
  },
  {
    mode: 'narjecja',
    q: 'Koja riječ imenuje čakavsko narječje?',
    en: 'Which word names čakavian?',
    opts: ['ča', 'kaj', 'što', 'ča i kaj'],
    answer: 'ča',
    tip: 'ča — the coastal and island form.',
  },
  {
    mode: 'narjecja',
    q: 'Zašto standard nije jedno od druga dva narječja?',
    en: 'Why štokavian for the standard?',
    opts: [
      'govori se u najvećem dijelu zemlje',
      'najstarije je',
      'najlakše je',
      'odlučeno je nasumce',
    ],
    answer: 'govori se u najvećem dijelu zemlje',
    tip: 'It covers most of the country, which is what the standardisers went on.',
  },

  // ── jat ───────────────────────────────────────────────────────────────────
  {
    mode: 'jat',
    q: 'Što je "jat"?',
    en: 'What is jat?',
    opts: [
      'stari samoglasnik s tri odraza',
      'suglasnička promjena',
      'naglasak',
      'slovo iz glagoljice',
    ],
    answer: 'stari samoglasnik s tri odraza',
    tip: 'One old vowel that resolved differently in different areas.',
  },
  {
    mode: 'jat',
    q: 'Zašto "mlijeko", a "mliječni"?',
    en: 'Why the change?',
    opts: ['dugi jat daje ije, kratki je', 'nepravilnost je', 'pravopisna promjena', 'dijalekt'],
    answer: 'dugi jat daje ije, kratki je',
    tip: 'Long jat gives ije, short gives je. It stops being a list once you know that.',
  },
  {
    mode: 'jat',
    q: 'Genitiv od "vrijeme" je ____.',
    en: 'genitive of vrijeme',
    opts: ['vremena', 'vrijemena', 'vremene', 'vrijemena su'],
    answer: 'vremena',
    tip: 'The vowel shortens in the oblique cases, so ije becomes e. Standard Croatian.',
  },
  {
    mode: 'jat',
    q: 'Koji je odraz jata u standardnom hrvatskom?',
    en: 'Which reflex is standard Croatian?',
    opts: ['ijekavski', 'ekavski', 'ikavski', 'svi jednako'],
    answer: 'ijekavski',
    tip: 'ijekavian — mlijeko, vrijeme, lijep.',
  },
  {
    mode: 'jat',
    q: 'Koji je ikavski oblik od "lijep"?',
    en: 'The ikavian form of lijep:',
    opts: ['lip', 'ljep', 'lijep', 'lipa'],
    answer: 'lip',
    tip: 'Heard in parts of Dalmatia and Slavonia — a Croatian dialect form.',
  },
  {
    mode: 'jat',
    q: 'Zašto je poznavanje jata korisno?',
    en: 'Why is knowing the reflex useful?',
    opts: ['nepravilnosti postaju pravilo', 'skraćuje riječi', 'mijenja naglasak', 'nije korisno'],
    answer: 'nepravilnosti postaju pravilo',
    tip: 'A list of exceptions becomes one alternation.',
  },
  {
    mode: 'jat',
    q: 'Dijete, ali ____. (množina)',
    en: 'child, but children',
    opts: ['djeca', 'dijeca', 'djece', 'dijeci'],
    answer: 'djeca',
    tip: 'The same shortening: dijete → djeca.',
  },
  {
    mode: 'jat',
    q: 'Koji je pridjev od "vrijeme"?',
    en: 'The adjective from vrijeme:',
    opts: ['vremenski', 'vrijemenski', 'vremeni', 'vrijemeni'],
    answer: 'vremenski',
    tip: 'Short again — vremenska prognoza.',
  },

  // ── pismo ─────────────────────────────────────────────────────────────────
  {
    mode: 'pismo',
    q: 'Što je "glagoljica"?',
    en: 'What is glagoljica?',
    opts: ['staro hrvatsko pismo', 'narječje', 'rječnik', 'pravopis'],
    answer: 'staro hrvatsko pismo',
    tip: 'Used on the coast for around a thousand years.',
  },
  {
    mode: 'pismo',
    q: 'Što je "Bašćanska ploča"?',
    en: 'What is the Bašćanska ploča?',
    opts: ['kameni natpis na glagoljici', 'prva tiskana knjiga', 'zakonik', 'crkva'],
    answer: 'kameni natpis na glagoljici',
    tip: 'Around 1100, from the island of Krk — the best-known glagolitic monument.',
  },
  {
    mode: 'pismo',
    q: 'Što je "gajica"?',
    en: 'What is gajica?',
    opts: ['latinica s dijakriticima', 'glagoljica', 'ćirilica', 'narječje'],
    answer: 'latinica s dijakriticima',
    tip: 'Gaj gave the alphabet č, ć, š, ž and đ in the 1830s — hence the name.',
  },
  {
    mode: 'pismo',
    q: 'Što je bio "ilirski pokret"?',
    en: 'What was the Illyrian movement?',
    opts: [
      'pokret za standardizaciju jezika',
      'politička stranka danas',
      'književni žanr',
      'arheološko razdoblje',
    ],
    answer: 'pokret za standardizaciju jezika',
    tip: 'The 19th-century movement that produced the standard and the alphabet.',
  },
  {
    mode: 'pismo',
    q: 'Od čega je složeno "zrakoplov"?',
    en: 'What is zrakoplov built from?',
    opts: ['zrak + ploviti', 'zrak + plov', 'zra + koplje', 'zora + plov'],
    answer: 'zrak + ploviti',
    tip: 'Air plus sail — built rather than borrowed, and deliberately so.',
  },
  {
    mode: 'pismo',
    q: 'Zašto se radije tvori nego posuđuje?',
    en: 'Why build rather than borrow?',
    opts: [
      'to je svjesna tradicija',
      'posuđenice su zabranjene',
      'nema drugog načina',
      'slučajno je',
    ],
    answer: 'to je svjesna tradicija',
    tip: 'It goes back to the Illyrian movement and explains računalo and tipkovnica.',
  },
  {
    mode: 'pismo',
    q: 'Koliko je otprilike stoljeća glagoljica bila u uporabi?',
    en: 'Roughly how long was it used?',
    opts: ['oko tisuću godina', 'oko dvjesto godina', 'oko petsto godina', 'kratko'],
    answer: 'oko tisuću godina',
    tip: 'On the coast, in liturgy and in law.',
  },
  {
    mode: 'pismo',
    q: 'Koja slova je gajica dodala?',
    en: 'Which letters did gajica add?',
    opts: ['č ć š ž đ', 'q w x y', 'ć đ samo', 'ph th ch'],
    answer: 'č ć š ž đ',
    tip: 'The diacritics that make Croatian spelling one sound to one letter.',
  },
];
