// src/data/drills/a1/givingAndSendingDrill.ts
//
// A1 GIVING, SENDING, TELLING — the drill for the `giving-and-sending` lesson
// (masterOrder 66).
//
// Two objects in one sentence: WHAT is given is the accusative, WHO gets it is the
// dative (Dajem mami cvijeće). The receiver is usually a short pronoun (mi, ti, mu,
// joj, nam, vam, im) in second place, and when two short words meet they line up in
// a fixed order — auxiliary or ću, then dative, then accusative, with je always last:
// Dao sam mu ga. Pokazao mi ga je.
//
// Three modes:
//   komu       — the receiver as a noun
//   zamjenice  — the receiver as a short pronoun
//   redanje    — the order of two or three short words

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GIVING_AND_SENDING_MODE_LABELS: Record<string, string> = {
  komu: '🎁 Komu?',
  zamjenice: '👤 Mu, joj, im',
  redanje: '🔗 Dao sam mu ga',
};

export const GIVING_AND_SENDING_DRILL_DATA: ModeDrillItem[] = [
  // ── komu ──────────────────────────────────────────────────────────────────
  {
    mode: 'komu',
    q: 'Dajem ____ cvijeće.',
    en: 'I give mum flowers.',
    opts: ['mami', 'mamu', 'mama', 'mame'],
    answer: 'mami',
    tip: 'Mum receives, so she is the dative. Mamu would make her the thing given.',
  },
  {
    mode: 'komu',
    q: 'Šaljem ____ poruku.',
    en: 'I am sending my brother a message.',
    opts: ['bratu', 'brata', 'brat', 'bratom'],
    answer: 'bratu',
    tip: 'The receiver is the dative: masculine -u.',
  },
  {
    mode: 'komu',
    q: 'Pokazujem ____ grad.',
    en: 'I am showing my friend the town.',
    opts: ['prijatelju', 'prijatelja', 'prijatelj', 'prijateljem'],
    answer: 'prijatelju',
    tip: 'The one who is shown: dative -u.',
  },
  {
    mode: 'komu',
    q: 'Kupila sam ____ torbu.',
    en: 'I bought my sister a bag.',
    opts: ['sestri', 'sestru', 'sestra', 'sestre'],
    answer: 'sestri',
    tip: 'The one it is bought for: dative, feminine -i.',
  },
  {
    mode: 'komu',
    q: 'Poslao sam ____ razglednicu.',
    en: 'I sent grandma a postcard.',
    opts: ['baki', 'baku', 'baka', 'bake'],
    answer: 'baki',
    tip: 'Grandma receives: baki.',
  },
  {
    mode: 'komu',
    q: 'Dajem Ani ____.',
    en: 'I give Ana a book.',
    opts: ['knjigu', 'knjiga', 'knjizi', 'knjige'],
    answer: 'knjigu',
    tip: 'The thing given is the accusative: knjiga → knjigu.',
  },
  {
    mode: 'komu',
    q: '____ šalješ poruku?',
    en: 'Who are you sending a message to?',
    opts: ['Komu', 'Tko', 'Što', 'Gdje'],
    answer: 'Komu',
    tip: 'Komu asks for the receiver.',
  },
  {
    mode: 'komu',
    q: 'Rekao sam ____ istinu.',
    en: 'I told Marko the truth.',
    opts: ['Marku', 'Marka', 'Marko', 'Markom'],
    answer: 'Marku',
    tip: 'The one who is told: dative -u.',
  },

  // ── zamjenice ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenice',
    q: 'Šaljem ____ poruku.',
    en: 'I am sending him a message.',
    opts: ['mu', 'ga', 'joj', 'ih'],
    answer: 'mu',
    tip: 'to him → mu. Ga would be "him" as the thing sent.',
  },
  {
    mode: 'zamjenice',
    q: 'Dajem ____ knjigu.',
    en: 'I give her a book.',
    opts: ['joj', 'je', 'mu', 'ju'],
    answer: 'joj',
    tip: 'to her → joj. Je and ju are "her" as an object.',
  },
  {
    mode: 'zamjenice',
    q: 'Kažem ____ istinu.',
    en: 'I am telling you the truth. (a friend)',
    opts: ['ti', 'te', 'tebe', 'vi'],
    answer: 'ti',
    tip: 'to you (ti) → ti.',
  },
  {
    mode: 'zamjenice',
    q: 'Mama ____ daje novac.',
    en: 'Mum gives me money.',
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'mi',
    tip: 'to me → mi, in second place.',
  },
  {
    mode: 'zamjenice',
    q: 'Pokazat ću ____ grad.',
    en: 'I will show you the town. (more than one person)',
    opts: ['vam', 'vas', 'vi', 'vaš'],
    answer: 'vam',
    tip: 'to you all → vam.',
  },
  {
    mode: 'zamjenice',
    q: 'Rekao sam ____ istinu.',
    en: 'I told them the truth.',
    opts: ['im', 'ih', 'oni', 'njih'],
    answer: 'im',
    tip: 'to them → im. Ih is "them" as the thing.',
  },
  {
    mode: 'zamjenice',
    q: 'Poslat ćemo ____ razglednicu.',
    en: 'We will send her a postcard.',
    opts: ['joj', 'je', 'nju', 'mu'],
    answer: 'joj',
    tip: 'to her → joj.',
  },
  {
    mode: 'zamjenice',
    q: 'Hoćeš li ____ dati broj?',
    en: 'Will you give us your number?',
    opts: ['nam', 'nas', 'mi', 'naš'],
    answer: 'nam',
    tip: 'to us → nam.',
  },

  // ── redanje ───────────────────────────────────────────────────────────────
  {
    mode: 'redanje',
    q: 'Dao sam ____.',
    en: 'I gave it to him. (a masculine thing)',
    opts: ['mu ga', 'ga mu', 'sam mu ga', 'ga sam mu'],
    answer: 'mu ga',
    tip: 'The dative comes before the accusative.',
  },
  {
    mode: 'redanje',
    q: 'Dat ću ____ sutra.',
    en: 'I will give it to you tomorrow. (a masculine thing, to a friend)',
    opts: ['ti ga', 'ga ti', 'ti ću ga', 'ga ću ti'],
    answer: 'ti ga',
    tip: 'ću, then the dative, then the accusative.',
  },
  {
    mode: 'redanje',
    q: 'Pokazao ____.',
    en: 'He showed it to me. (a masculine thing)',
    opts: ['mi ga je', 'je mi ga', 'mi je ga', 'ga mi je'],
    answer: 'mi ga je',
    tip: 'Dative, accusative — and je always last.',
  },
  {
    mode: 'redanje',
    q: 'Poslala ____.',
    en: 'I sent it to her. (a woman speaking; a masculine thing)',
    opts: ['sam joj ga', 'sam ga joj', 'joj sam ga', 'joj ga sam'],
    answer: 'sam joj ga',
    tip: 'sam first, then the dative, then the accusative.',
  },
  {
    mode: 'redanje',
    q: 'Dali ____.',
    en: 'We gave it to them. (a masculine thing)',
    opts: ['smo im ga', 'smo ga im', 'im smo ga', 'ga im smo'],
    answer: 'smo im ga',
    tip: 'smo, then im, then ga.',
  },
  {
    mode: 'redanje',
    q: 'Dala ____.',
    en: 'She gave it to me. (a masculine thing)',
    opts: ['mi ga je', 'je mi ga', 'ga mi je', 'mi je ga'],
    answer: 'mi ga je',
    tip: 'The auxiliary je goes last in the cluster.',
  },
  {
    mode: 'redanje',
    q: 'Which sentence is correct?',
    en: 'I am sending him a message.',
    opts: ['Šaljem mu poruku.', 'Mu šaljem poruku.', 'Šaljem poruku mu.', 'Šaljem ga poruku.'],
    answer: 'Šaljem mu poruku.',
    tip: 'A short word never stands first; it goes second.',
  },
  {
    mode: 'redanje',
    q: 'Which sentence is correct?',
    en: 'I told her the truth. (a woman speaking)',
    opts: [
      'Rekla sam joj istinu.',
      'Rekla joj sam istinu.',
      'Joj sam rekla istinu.',
      'Rekla sam je istinu.',
    ],
    answer: 'Rekla sam joj istinu.',
    tip: 'sam before joj, and the receiver is joj, not je.',
  },
];
