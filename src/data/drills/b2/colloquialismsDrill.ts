// src/data/drills/b2/colloquialismsDrill.ts
//
// B2 COLLOQUIALISMS — the drill for the `colloquialisms` lesson.
//
// Every colloquial word here is Croatian everyday speech (lova, faca, frajer, cura, klopa,
// kužiti, fora, gušt, frka, klinac, zezati se, brijati). None is presented as standard:
// each item either asks for the standard counterpart, puts the colloquial word into its
// case, or asks which register fits a situation. A distractor in the register mode is a
// real sentence in the WRONG room (slang in a letter to an office), never a wrong form.
//
// Three modes:
//   znacenje — the standard word for a colloquial one
//   oblik    — colloquial nouns and verbs decline and conjugate like any word
//   registar — which sentence fits the situation

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COLLOQUIALISMS_MODE_LABELS: Record<string, string> = {
  znacenje: '📖 Značenje',
  oblik: '🧩 Oblik',
  registar: '🎭 Registar',
};

export const COLLOQUIALISMS_DRILL_DATA: ModeDrillItem[] = [
  // ── znacenje ─────────────────────────────────────────────────────────────
  {
    mode: 'znacenje',
    q: 'Standardna riječ za kolokvijalno "lova": ____',
    en: 'The standard word for this colloquial one (money).',
    opts: ['novac', 'hrana', 'posao', 'šala'],
    answer: 'novac',
    tip: 'Lova is colloquial for money; in a letter or an office say novac.',
  },
  {
    mode: 'znacenje',
    q: 'Standardna riječ za kolokvijalno "klopa": ____',
    en: 'The standard word for this colloquial one (food).',
    opts: ['odjeća', 'hrana', 'glazba', 'žurba'],
    answer: 'hrana',
    tip: 'Klopa is grub; the standard word is hrana (or jelo, a dish).',
  },
  {
    mode: 'znacenje',
    q: 'Standardna riječ za kolokvijalno "cura": ____',
    en: 'The standard word for this colloquial one (girl, girlfriend).',
    opts: ['majka', 'sestra', 'djevojka', 'susjeda'],
    answer: 'djevojka',
    tip: 'Cura means girl or girlfriend; standard djevojka.',
  },
  {
    mode: 'znacenje',
    q: 'Standardni glagol za kolokvijalno "kužiti": ____',
    en: 'The standard verb for this colloquial one (to get it).',
    opts: ['kuhati', 'žuriti', 'razumjeti', 'čekati'],
    answer: 'razumjeti',
    tip: 'Kužiti is colloquial for razumjeti, to understand.',
  },
  {
    mode: 'znacenje',
    q: 'Standardna riječ za kolokvijalno "fora": ____',
    en: 'The standard word for this colloquial one (a gag).',
    opts: ['šala', 'svađa', 'novac', 'gužva'],
    answer: 'šala',
    tip: 'A fora makes people laugh: standard šala or dosjetka.',
  },
  {
    mode: 'znacenje',
    q: 'Standardna riječ za kolokvijalno "gušt": ____',
    en: 'The standard word for this colloquial one (enjoyment).',
    opts: ['bol', 'užitak', 'umor', 'strah'],
    answer: 'užitak',
    tip: 'Gušt comes from Italian gusto; standard užitak.',
  },
  {
    mode: 'znacenje',
    q: 'Standardna riječ za kolokvijalno "klinac": ____',
    en: 'The standard word for this colloquial one (a kid).',
    opts: ['djed', 'dijete', 'učitelj', 'pas'],
    answer: 'dijete',
    tip: 'Klinac is a kid; standard dijete.',
  },
  {
    mode: 'znacenje',
    q: 'Standardni glagol za kolokvijalno "zezati se": ____',
    en: 'The standard verb for this colloquial one (to kid around).',
    opts: ['svađati se', 'brinuti se', 'šaliti se', 'žaliti se'],
    answer: 'šaliti se',
    tip: 'Zezati se means to kid around; standard šaliti se.',
  },
  {
    mode: 'znacenje',
    q: 'U rečenici "Brijem da će kiša" glagol znači: ____',
    en: 'What the verb means in this colloquial sentence about rain.',
    opts: ['brijem se', 'mislim', 'bojim se', 'želim'],
    answer: 'mislim',
    tip: 'Colloquial brijati can mean to reckon, to think.',
  },
  // ── oblik ────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Nemam ____ do kraja mjeseca.',
    en: 'I am out of cash until the end of the month.',
    opts: ['lova', 'lovu', 'love', 'lovom'],
    answer: 'love',
    tip: 'Lova is feminine; nemam takes the genitive: love.',
  },
  {
    mode: 'oblik',
    q: 'On je velika ____ u svom gradu.',
    en: 'He is a big shot in his town.',
    opts: ['faca', 'facu', 'face', 'facom'],
    answer: 'faca',
    tip: 'After je the nominative; faca stays feminine even for a man.',
  },
  {
    mode: 'oblik',
    q: 'On je ____ faca.',
    en: 'He is a big shot.',
    opts: ['veliki', 'velika', 'veliko', 'velikog'],
    answer: 'velika',
    tip: 'Faca is a feminine noun, so the adjective is feminine.',
  },
  {
    mode: 'oblik',
    q: 'Idem u kino sa svojom ____.',
    en: 'I am going to the cinema with my girlfriend.',
    opts: ['cura', 'curu', 'cure', 'curom'],
    answer: 'curom',
    tip: 'With s, the instrumental: curom, like ženom.',
  },
  {
    mode: 'oblik',
    q: 'Vidiš li onog ____ s gitarom?',
    en: 'Do you see that guy with the guitar?',
    opts: ['frajer', 'frajera', 'frajeru', 'frajerom'],
    answer: 'frajera',
    tip: 'A living masculine object: the accusative looks like the genitive.',
  },
  {
    mode: 'oblik',
    q: '____ li što ti govorim?',
    en: 'Do you get what I am telling you?',
    opts: ['Kužiš', 'Kužim', 'Kuži', 'Kužimo'],
    answer: 'Kužiš',
    tip: 'Ti-form of kužiti: kužiš.',
  },
  {
    mode: 'oblik',
    q: 'Ne ljuti se, samo se ____.',
    en: 'Do not be angry, I am only kidding.',
    opts: ['zezaš', 'zeza', 'zezam', 'zezaju'],
    answer: 'zezam',
    tip: 'First person singular: zezam se.',
  },
  {
    mode: 'oblik',
    q: 'Klopa u toj konobi ____ odlična.',
    en: 'The grub in that tavern is excellent.',
    opts: ['je', 'su', 'smo', 'ste'],
    answer: 'je',
    tip: 'Klopa is a singular noun: je.',
  },
  {
    mode: 'oblik',
    q: 'Nisam shvatio tvoju ____.',
    en: 'I did not get your joke.',
    opts: ['fora', 'foru', 'fore', 'forom'],
    answer: 'foru',
    tip: 'A direct object, feminine: foru.',
  },
  // ── registar ─────────────────────────────────────────────────────────────
  {
    mode: 'registar',
    q: 'Pišeš banci. Koja rečenica odgovara?',
    en: 'You are writing to a bank. Which sentence fits?',
    opts: [
      'Molim vas da mi vratite lovu.',
      'Molim vas da mi vratite novac.',
      'Vratite mi lovu, kužite?',
      'Lova mi treba, brijem.',
    ],
    answer: 'Molim vas da mi vratite novac.',
    tip: 'A bank is formal: the standard word novac.',
  },
  {
    mode: 'registar',
    q: 'Na razgovoru za posao. Koja rečenica odgovara?',
    en: 'At a job interview. Which sentence fits?',
    opts: [
      'Brijem da sam dobar za to.',
      'Taj mi je posao gušt.',
      'Mislim da sam dobar za taj posao.',
      'Kužim taj posao.',
    ],
    answer: 'Mislim da sam dobar za taj posao.',
    tip: 'An interview needs standard words: mislim, not brijem.',
  },
  {
    mode: 'registar',
    q: 'Pitaš profesora. Koja rečenica odgovara?',
    en: 'You are asking a professor. Which sentence fits?',
    opts: [
      'Ne razumijem zadatak, možete li ga objasniti?',
      'Ne kužim zadatak, objasnite.',
      'Zadatak je frka.',
      'Brijem da ne kužim.',
    ],
    answer: 'Ne razumijem zadatak, možete li ga objasniti?',
    tip: 'A professor is a formal situation; the Vi-form takes standard verbs.',
  },
  {
    mode: 'registar',
    q: 'Poruka prijatelju. Koja rečenica zvuči prirodno?',
    en: 'A text to a friend. Which one sounds natural?',
    opts: [
      'Poštovani, javljam Vam da kasnim.',
      'Stari, kasnim, frka je u gradu.',
      'Obavještavam Vas o kašnjenju.',
      'Ispričavam se zbog kašnjenja, s poštovanjem.',
    ],
    answer: 'Stari, kasnim, frka je u gradu.',
    tip: 'Among friends the relaxed register is natural; the others belong to an office.',
  },
  {
    mode: 'registar',
    q: 'Žalba hotelu. Koja rečenica odgovara?',
    en: 'A complaint to a hotel. Which sentence fits?',
    opts: [
      'Klopa je bila bezveze.',
      'Hrana nije bila dobra.',
      'Klopa je bila frka.',
      'Fora s klopom nije uspjela.',
    ],
    answer: 'Hrana nije bila dobra.',
    tip: 'A written complaint takes the standard word hrana.',
  },
  {
    mode: 'registar',
    q: 'Koja kombinacija ZVUČI NEPRISTOJNO?',
    en: 'Which combination sounds rude?',
    opts: [
      'Gospodine, razumijete li?',
      'Gospodine, kužite?',
      'Razumiješ li, stari?',
      'Kužiš li, stari?',
    ],
    answer: 'Gospodine, kužite?',
    tip: 'A colloquial verb with the polite Vi-form is a clash.',
  },
  {
    mode: 'registar',
    q: 'U kojoj rečenici "brijati" ima standardno značenje?',
    en: 'In which sentence does the verb have its standard meaning?',
    opts: [
      'Brijem da je zatvoreno.',
      'Sinoć smo dobro brijali.',
      'Svako jutro se brije pred ogledalom.',
      'Brijem da ćemo zakasniti.',
    ],
    answer: 'Svako jutro se brije pred ogledalom.',
    tip: 'Standard brijati se means to shave.',
  },
];
