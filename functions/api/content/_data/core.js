// SP11d + SP11e: aggregator for 27 high-IP-density "core" content exports.
// 8 vocab + 9 cultural + 5 situational + 1 scenes + 1 misc (LEVEL_NARRATIVE)
// + 1 LEARN_PATH (SP11e) + 1 SEASONAL_CAMPAIGNS (SP11e) + 2 composed names = 27.
//
// SP11e composition: V is mutated at module load with TOP100 spread + B2
// aliases + LEARN_PATH topic aliases. Composition runs once at function cold
// start. Result: a single bulk payload, same ETag, same Bearer gate.

import {
  V as V_RAW,
  V_LEVELS as V_LEVELS_RAW,
  COUNTRIES,
  PROFESSIONS,
  WEATHER,
  CLOTHES,
  BODYDESC,
  TECH_VOC,
  BUREAUCRATIC,
  TOP100,
  V_B2,
  V_C1,
  V_C2,
  ALPHA,
} from './vocabulary.js';
import { PROVERBS } from './cultural/proverbs.js';
import { HISTORY, KINGS } from './cultural/history.js';
import { EVENTS } from './cultural/events.js';
import { REGIONS } from './cultural/regions.js';
import { DIALECTS, SHADOWING } from './cultural/language.js';
import { CULTURE_DEEP_DIVES } from './cultural/deepdives.js';
import { CROATIAN_CITIES } from './cultural/geography.js';
import { IDIOMS, BRZALICE } from './exercises.js';
import {
  FOODORDER,
  TRANSPORT,
  GROCERY,
  RECIPES,
  PRACTICAL,
  SCHOOL,
  FRIENDS,
  EMERGENCY,
} from './scenarios.js';
import { SCENES } from './vocabScenes.js';
import { LEARN_PATH } from './learnPath.js';
import { SEASONAL_CAMPAIGNS } from './seasonalCampaigns.js';

// SP11e: V composition. Mutates V_RAW in place at module load — runs once at
// cold start. Composition logic moved verbatim from src/data/content.tsx
// (lines 169-179 + 962-979).

const V = { ...V_RAW };

// TOP 100 WORDS BY SITUATION — quizzable
Object.keys(TOP100).forEach((k) => {
  V[k] = TOP100[k];
});

// LEARN_PATH vocabulary aliases — B2 topics + civic→politics
V['journalism'] = (V_B2 && V_B2['media & journalism']) || []; // lp68
V['philosophy'] = (V_B2 && V_B2['philosophy & ethics']) || []; // lp67
V['literature'] = (V_B2 && V_B2['academic language']) || []; // lp64
V['politics'] = V['civic'] || []; // lp58

// LEARN_PATH topic aliases — wire scenarios into V for lesson+quiz support
V['Order Food'] = [].concat(
  FOODORDER.bakery.items,
  FOODORDER.fastfood.items,
  FOODORDER.icecream.items,
  FOODORDER.restaurant.phrases,
);
V['Getting Around'] = TRANSPORT.map((t) => [t.hr, t.en]);
V['School Kit'] = [].concat(SCHOOL.classroom, SCHOOL.phrases);
V['Making Friends'] = FRIENDS.map((f) => [f.hr, f.en]);
V['Grocery Shopping'] = [].concat(GROCERY.vocab, GROCERY.phrases);
V['Alphabet'] = ALPHA.map((a) => [a[0], a[1] + ' — ' + a[2] + ' (' + a[3] + ')']);
V['Emergency'] = [].concat(EMERGENCY.phrases, EMERGENCY.bodyParts);

// CEFR tag for EVERY category the client pool can draw from (2026-09-04).
// vocabulary.js tags the 89 raw categories; the composed aliases above were
// unlevelled, and the client's review/flashcard deck was built from a
// hardcoded 56-name list in App.tsx instead — which left 1,030 of the 2,357 V
// words (the entire B1 band among them) unreachable by any drill. The client
// now derives the deck from THIS map gated by the learner's level
// (src/lib/vocabPool.ts), so every key here must be honest about its level.
//   - the seven TOP100 situational sets and the five LEARN_PATH scenario
//     aliases are survival phrases from path levels 1–2 → A1;
//   - politics aliases civic (B1); journalism/philosophy/literature alias
//     V_B2 categories (B2) — the pool dedupes by lemma, so an alias never
//     doubles a word.
// 'Alphabet' is deliberately NOT levelled: its "gloss" is a letter name plus
// an example ("ah — auto (car)"), which is a lesson slide, not a flashcard
// back. An unlevelled key is excluded from the pool by construction;
// V_POOL_EXCLUDED pins that this is the only one, so a new alias cannot fall
// out of the deck silently.
const V_LEVELS = {
  ...V_LEVELS_RAW,
  'At the Airport': 'A1',
  'At the Restaurant': 'A1',
  'At the Doctor': 'A1',
  'At the Beach': 'A1',
  'At the Market': 'A1',
  'Meeting People': 'A1',
  Emergency: 'A1',
  'Order Food': 'A1',
  'Getting Around': 'A1',
  'School Kit': 'A1',
  'Making Friends': 'A1',
  'Grocery Shopping': 'A1',
  politics: 'B1',
  journalism: 'B2',
  philosophy: 'B2',
  literature: 'B2',
};
export const V_POOL_EXCLUDED = ['Alphabet'];

// === The 29 exports (SP11f: +V_B2 +V_C1 advanced-vocab tiers) ===
export {
  V,
  V_LEVELS,
  COUNTRIES,
  PROFESSIONS,
  WEATHER,
  CLOTHES,
  BODYDESC,
  TECH_VOC,
  BUREAUCRATIC,
  PROVERBS,
  HISTORY,
  KINGS,
  EVENTS,
  REGIONS,
  DIALECTS,
  SHADOWING,
  CROATIAN_CITIES,
  IDIOMS,
  BRZALICE,
  FOODORDER,
  TRANSPORT,
  GROCERY,
  RECIPES,
  PRACTICAL,
  SCENES,
  LEARN_PATH,
  SEASONAL_CAMPAIGNS,
  V_B2,
  V_C1,
  V_C2,
  // B2-C2 culture deep dives (fluency initiative) — consumed by CultureDeepDiveScreen.
  CULTURE_DEEP_DIVES,
};

export const LEVEL_NARRATIVE = {
  heritage: [
    'First Words',
    'Finding Your Voice',
    'Reconnecting',
    'Bridging Worlds',
    'Coming Home',
    'Naš Čovjek',
  ],
  family: [
    'Hello Family',
    'Family Stories',
    'Conversations',
    'Deep Talks',
    'Native Flow',
    'Naš Čovjek',
  ],
  travel: [
    'Survival Mode',
    'Getting Around',
    "Local's Path",
    'Off the Map',
    'Croatian Soul',
    'Naš Čovjek',
  ],
  culture: [
    'First Steps',
    'Culture Seeker',
    'Insider',
    'Deep Diver',
    'Living Croatia',
    'Naš Čovjek',
  ],
  fluent: ['Beginner', 'Elementary', 'Intermediate', 'Upper-Int', 'Advanced', 'Fluent'],
  partner: [
    'Curious Spouse',
    'Family Observer',
    'Dinner Table Survivor',
    'Welcome Addition',
    'Part of the Family',
  ],
};
