// src/data/drills/a1/dativePrepositionsDrill.ts
//
// A1 DATIVE AFTER PREPOSITIONS — the drill for the `dative-prepositions` lesson
// (masterOrder 64).
//
// The dative almost never has a preposition; four exceptions take it. k / ka goes to
// a PERSON (k liječniku), where a place takes u / na + accusative (u bolnicu). prema
// is towards, or according to. nasuprot is opposite, unatoč is despite. Endings are
// the dative-intro ones: -u for masculine and neuter, -i for feminine (rijeka →
// rijeci). Nouns only — the dative pronouns arrive at lesson 65.
//
// Three modes:
//   k        — going to a person, against going into a place
//   prema    — towards, according to
//   nasuprot — opposite and despite

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DATIVE_PREPOSITIONS_MODE_LABELS: Record<string, string> = {
  k: '🚶 k / ka',
  prema: '🧭 prema',
  nasuprot: '↔️ nasuprot, unatoč',
};

export const DATIVE_PREPOSITIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── k ─────────────────────────────────────────────────────────────────────
  {
    mode: 'k',
    q: 'Idem k ____.',
    en: 'I am going to the doctor.',
    opts: ['liječniku', 'liječnik', 'liječnika', 'liječnikom'],
    answer: 'liječniku',
    tip: 'k takes the dative: masculine -u.',
  },
  {
    mode: 'k',
    q: 'Idemo k ____.',
    en: 'We are going to grandma’s.',
    opts: ['baki', 'baku', 'baka', 'bake'],
    answer: 'baki',
    tip: 'Feminine -i; family words like baka keep their k.',
  },
  {
    mode: 'k',
    q: 'Ana ide k ____.',
    en: 'Ana is going to the hairdresser.',
    opts: ['frizeru', 'frizer', 'frizera', 'frizerom'],
    answer: 'frizeru',
    tip: 'A person you go to: k + dative.',
  },
  {
    mode: 'k',
    q: 'Djeca trče k ____.',
    en: 'The children are running to mum.',
    opts: ['mami', 'mamu', 'mama', 'mame'],
    answer: 'mami',
    tip: 'k + dative: mama → mami.',
  },
  {
    mode: 'k',
    q: 'Idem ____ kolegi.',
    en: 'I am going to my colleague’s.',
    opts: ['ka', 'k', 'u', 'na'],
    answer: 'ka',
    tip: 'Before a word starting with k or g, k becomes ka.',
  },
  {
    mode: 'k',
    q: 'Sutra idem k ____.',
    en: 'Tomorrow I am going to the dentist.',
    opts: ['zubaru', 'zubar', 'zubara', 'zubarom'],
    answer: 'zubaru',
    tip: 'k + dative: zubar → zubaru.',
  },
  {
    mode: 'k',
    q: 'Idem u ____.',
    en: 'I am going to the hospital.',
    opts: ['bolnicu', 'bolnici', 'bolnica', 'bolnicom'],
    answer: 'bolnicu',
    tip: 'A building is a place: u + accusative. k is for people.',
  },
  {
    mode: 'k',
    q: 'Idemo k ____.',
    en: 'We are going to our friend’s place.',
    opts: ['prijatelju', 'prijatelja', 'prijatelj', 'prijateljem'],
    answer: 'prijatelju',
    tip: 'k + dative: masculine -u.',
  },

  // ── prema ─────────────────────────────────────────────────────────────────
  {
    mode: 'prema',
    q: 'Hodamo prema ____.',
    en: 'We are walking towards the sea.',
    opts: ['moru', 'more', 'mora', 'morem'],
    answer: 'moru',
    tip: 'prema takes the dative: neuter -u.',
  },
  {
    mode: 'prema',
    q: 'Vlak ide prema ____.',
    en: 'The train is going towards Zagreb.',
    opts: ['Zagrebu', 'Zagreb', 'Zagreba', 'Zagrebom'],
    answer: 'Zagrebu',
    tip: 'prema + dative: masculine -u.',
  },
  {
    mode: 'prema',
    q: 'Turisti šeću prema ____.',
    en: 'The tourists are walking towards the river.',
    opts: ['rijeci', 'rijeki', 'rijeku', 'rijeka'],
    answer: 'rijeci',
    tip: 'Feminine -i, and k before i becomes c: rijeci.',
  },
  {
    mode: 'prema',
    q: 'Prema ____, sutra će biti sunčano.',
    en: 'According to the forecast, it will be sunny tomorrow.',
    opts: ['prognozi', 'prognozu', 'prognoza', 'prognoze'],
    answer: 'prognozi',
    tip: 'prema also means "according to", still with the dative.',
  },
  {
    mode: 'prema',
    q: 'Idemo prema ____.',
    en: 'We are going towards the centre.',
    opts: ['centru', 'centar', 'centra', 'centaru'],
    answer: 'centru',
    tip: 'centar loses its a when an ending is added: centru.',
  },
  {
    mode: 'prema',
    q: 'Prozor gleda prema ____.',
    en: 'The window faces the park.',
    opts: ['parku', 'park', 'parka', 'parkom'],
    answer: 'parku',
    tip: 'prema + dative: park → parku.',
  },
  {
    mode: 'prema',
    q: 'Sve ide prema ____.',
    en: 'Everything is going according to plan.',
    opts: ['planu', 'plan', 'plana', 'planom'],
    answer: 'planu',
    tip: 'prema planu — according to the plan.',
  },
  {
    mode: 'prema',
    q: 'Autobus vozi prema ____.',
    en: 'The bus is driving towards Split.',
    opts: ['Splitu', 'Splita', 'Splitom', 'Splite'],
    answer: 'Splitu',
    tip: 'prema + dative: masculine -u.',
  },

  // ── nasuprot ──────────────────────────────────────────────────────────────
  {
    mode: 'nasuprot',
    q: 'Banka je nasuprot ____.',
    en: 'The bank is opposite the post office.',
    opts: ['pošti', 'poštu', 'pošta', 'pošte'],
    answer: 'pošti',
    tip: 'nasuprot takes the dative: feminine -i.',
  },
  {
    mode: 'nasuprot',
    q: 'Kafić je nasuprot ____.',
    en: 'The café is opposite the church.',
    opts: ['crkvi', 'crkvu', 'crkva', 'crkve'],
    answer: 'crkvi',
    tip: 'nasuprot + dative: crkva → crkvi.',
  },
  {
    mode: 'nasuprot',
    q: 'Naš stan je nasuprot ____.',
    en: 'Our flat is opposite the park.',
    opts: ['parku', 'park', 'parka', 'parkom'],
    answer: 'parku',
    tip: 'nasuprot + dative: masculine -u.',
  },
  {
    mode: 'nasuprot',
    q: 'Škola je nasuprot ____.',
    en: 'The school is opposite the hospital.',
    opts: ['bolnici', 'bolnicu', 'bolnica', 'bolnice'],
    answer: 'bolnici',
    tip: 'nasuprot + dative: feminine -i.',
  },
  {
    mode: 'nasuprot',
    q: 'Idemo na plažu unatoč ____.',
    en: 'We are going to the beach despite the rain.',
    opts: ['kiši', 'kišu', 'kiša', 'kiše'],
    answer: 'kiši',
    tip: 'unatoč takes the dative: kiša → kiši.',
  },
  {
    mode: 'nasuprot',
    q: 'Radimo unatoč ____.',
    en: 'We are working despite the heat.',
    opts: ['vrućini', 'vrućinu', 'vrućina', 'vrućine'],
    answer: 'vrućini',
    tip: 'unatoč + dative: feminine -i.',
  },
  {
    mode: 'nasuprot',
    q: 'Što znači "nasuprot"?',
    opts: ['opposite', 'despite', 'towards', 'behind'],
    answer: 'opposite',
    tip: 'Banka je nasuprot pošti — the bank is opposite the post office.',
  },
  {
    mode: 'nasuprot',
    q: 'Što znači "unatoč"?',
    opts: ['despite', 'opposite', 'towards', 'to a person'],
    answer: 'despite',
    tip: 'Idemo van unatoč kiši — we are going out despite the rain.',
  },
];
