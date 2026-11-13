// src/data/drills/a1/sibilarizationDrill.ts
//
// A1 K → C, G → Z, H → S — the drill for the `sibilarization` lesson (A1 position 20).
//
// Three modes, eight items each:
//   k     — k before the plural -i becomes c: vojnik → vojnici
//   gh    — g → z and h → s: bubreg → bubrezi, orah → orasi
//   ne    — where nothing changes: -ov- in between (vlak → vlakovi) or a feminine
//           -e plural (majka → majke)
//
// Nominative plural only. Distractors are the unchanged consonant, the change applied
// where nothing touches the -i, or the growth on a long noun.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SIBILARIZATION_MODE_LABELS: Record<string, string> = {
  k: '🔀 k → c',
  gh: '🔀 g → z, h → s',
  ne: '✋ Bez promjene',
};

export const SIBILARIZATION_DRILL_DATA: ModeDrillItem[] = [
  // ── k ─────────────────────────────────────────────────────────────────────
  {
    mode: 'k',
    q: 'Plural of "vojnik":',
    en: 'Plural of soldier.',
    opts: ['vojniki', 'vojnici', 'vojnikovi', 'vojnika'],
    answer: 'vojnici',
    tip: 'k before -i becomes c.',
  },
  {
    mode: 'k',
    q: 'Plural of "učenik":',
    en: 'Plural of pupil.',
    opts: ['učenici', 'učeniki', 'učenikovi', 'učenika'],
    answer: 'učenici',
    tip: 'k before -i becomes c.',
  },
  {
    mode: 'k',
    q: 'Plural of "jezik":',
    en: 'Plural of language.',
    opts: ['jeziki', 'jezikovi', 'jezici', 'jezika'],
    answer: 'jezici',
    tip: 'k before -i becomes c.',
  },
  {
    mode: 'k',
    q: 'Plural of "liječnik":',
    en: 'Plural of doctor.',
    opts: ['liječnikovi', 'liječniki', 'liječnika', 'liječnici'],
    answer: 'liječnici',
    tip: 'k before -i becomes c.',
  },
  {
    mode: 'k',
    q: 'Plural of "đak":',
    en: 'Plural of pupil (school pupil).',
    opts: ['đaci', 'đaki', 'đakovi', 'đaka'],
    answer: 'đaci',
    tip: 'đak is short but takes a plain -i, so the k changes.',
  },
  {
    mode: 'k',
    q: 'Which sentence is correct?',
    en: 'The workers are here.',
    opts: ['Radniki su ovdje.', 'Radnici je ovdje.', 'Radnikovi su ovdje.', 'Radnici su ovdje.'],
    answer: 'Radnici su ovdje.',
    tip: 'radnik → radnici, with the plural verb su.',
  },
  {
    mode: 'k',
    q: 'Plural of "putnik":',
    en: 'Plural of passenger.',
    opts: ['putniki', 'putnici', 'putnikovi', 'putnika'],
    answer: 'putnici',
    tip: 'k before -i becomes c.',
  },
  {
    mode: 'k',
    q: 'Plural of "lješnjak":',
    en: 'Plural of hazelnut.',
    opts: ['lješnjaki', 'lješnjakovi', 'lješnjaci', 'lješnjaka'],
    answer: 'lješnjaci',
    tip: 'k before -i becomes c.',
  },

  // ── gh ────────────────────────────────────────────────────────────────────
  {
    mode: 'gh',
    q: 'Plural of "bubreg":',
    en: 'Plural of kidney.',
    opts: ['bubregi', 'bubrezi', 'bubregovi', 'bubrega'],
    answer: 'bubrezi',
    tip: 'g before -i becomes z.',
  },
  {
    mode: 'gh',
    q: 'Plural of "dijalog":',
    en: 'Plural of dialogue.',
    opts: ['dijalogi', 'dijalogovi', 'dijaloga', 'dijalozi'],
    answer: 'dijalozi',
    tip: 'g before -i becomes z.',
  },
  {
    mode: 'gh',
    q: 'Plural of "psiholog":',
    en: 'Plural of psychologist.',
    opts: ['psiholozi', 'psihologi', 'psihologovi', 'psihologa'],
    answer: 'psiholozi',
    tip: 'g before -i becomes z.',
  },
  {
    mode: 'gh',
    q: 'Plural of "kovčeg":',
    en: 'Plural of suitcase.',
    opts: ['kovčegi', 'kovčezi', 'kovčegovi', 'kovčega'],
    answer: 'kovčezi',
    tip: 'g before -i becomes z.',
  },
  {
    mode: 'gh',
    q: 'Plural of "orah":',
    en: 'Plural of walnut.',
    opts: ['orahi', 'orahovi', 'orasi', 'oraha'],
    answer: 'orasi',
    tip: 'h before -i becomes s.',
  },
  {
    mode: 'gh',
    q: 'Plural of "trbuh":',
    en: 'Plural of belly.',
    opts: ['trbuhi', 'trbuhovi', 'trbuha', 'trbusi'],
    answer: 'trbusi',
    tip: 'h before -i becomes s.',
  },
  {
    mode: 'gh',
    q: 'Plural of "Čeh":',
    en: 'Plural of Czech man.',
    opts: ['Česi', 'Čehi', 'Čehovi', 'Čeha'],
    answer: 'Česi',
    tip: 'h before -i becomes s.',
  },
  {
    mode: 'gh',
    q: 'Što postaje "g" ispred množinskog -i?',
    en: 'What does g become before the plural -i?',
    opts: ['c', 's', 'z', 'ž'],
    answer: 'z',
    tip: 'k → c, g → z, h → s.',
  },

  // ── ne ────────────────────────────────────────────────────────────────────
  {
    mode: 'ne',
    q: 'Plural of "vlak":',
    en: 'Plural of train.',
    opts: ['vlaci', 'vlakovi', 'vlaki', 'vlacovi'],
    answer: 'vlakovi',
    tip: 'The -ov- keeps the k away from the -i, so nothing changes.',
  },
  {
    mode: 'ne',
    q: 'Plural of "vrh":',
    en: 'Plural of peak.',
    opts: ['vrsi', 'vrhi', 'vrsovi', 'vrhovi'],
    answer: 'vrhovi',
    tip: 'A short noun grows -ov-, so the h stays.',
  },
  {
    mode: 'ne',
    q: 'Plural of "rog":',
    en: 'Plural of horn.',
    opts: ['rogovi', 'rozi', 'rogi', 'rozovi'],
    answer: 'rogovi',
    tip: 'A short noun grows -ov-, so the g stays.',
  },
  {
    mode: 'ne',
    q: 'Plural of "majka":',
    en: 'Plural of mother.',
    opts: ['majce', 'majke', 'majkovi', 'majci'],
    answer: 'majke',
    tip: 'Feminine plurals end in -e, so the k never meets an -i.',
  },
  {
    mode: 'ne',
    q: 'Plural of "knjiga":',
    en: 'Plural of book.',
    opts: ['knjize', 'knjigi', 'knjige', 'knjizi'],
    answer: 'knjige',
    tip: 'Feminine -a → -e. No -i, so no change.',
  },
  {
    mode: 'ne',
    q: 'Which noun does NOT change its consonant in the plural?',
    en: 'Which noun does not change its consonant in the plural?',
    opts: ['vojnik', 'vlak', 'orah', 'bubreg'],
    answer: 'vlak',
    tip: 'vlak → vlakovi: the -ov- stands between the k and the -i.',
  },
  {
    mode: 'ne',
    q: 'Which sentence is correct?',
    en: 'These are trains.',
    opts: ['Ovo su vlaci.', 'Ovo su vlakovi.', 'Ovo je vlakovi.', 'Ovo su vlacovi.'],
    answer: 'Ovo su vlakovi.',
    tip: 'vlak → vlakovi, with su.',
  },
  {
    mode: 'ne',
    q: 'Plural of "rijeka":',
    en: 'Plural of river.',
    opts: ['rijece', 'rijeki', 'rijeke', 'rijekovi'],
    answer: 'rijeke',
    tip: 'Feminine -a → -e, and the k stays.',
  },
];
