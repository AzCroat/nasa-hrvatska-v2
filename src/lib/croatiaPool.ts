/**
 * croatiaPool — data for the daily session's Priority-4 Croatia immersion slot
 * (Wave-6 extraction from useDailySession for max-lines; logic stays in the
 * hook). Entries complete via the auto-complete-on-return contract derived in
 * useDailySession (SESSION_AUTOCOMPLETE_SCREENS).
 */
import type { SkillCategory } from './adaptive';

/**
 * Croatia rotation pool — Priority 4 always adds one of these. `cefr` (optional,
 * default A1) gates register-heavy entries so an A1 user is never handed press
 * prose or literary narrative; the slot filters by isUnlocked before rotating.
 *
 * Wave 2 (session catchment): the culture/immersion screens from the Wave-1
 * OUTSIDE_SESSION list that passed the eligibility audit now rotate here —
 * bounded, launchable with plain goBack/award props, no premium/seasonal gates.
 * They complete via the auto-complete-on-return contract below (derived set),
 * exactly like the original eight. Deliberately NOT rotated in (see
 * session-coverage.test.ts for reasons): crmap, croatiaathletes, easter,
 * heritage, immersion, maja.
 */
export interface CroatiaPoolEntry {
  id: string;
  label: string;
  screen: string;
  // Structural copy of SessionCategory (defined in useDailySession) — kept
  // inline here to avoid a hook→data→hook import cycle.
  category: SkillCategory | 'culture' | 'practical' | 'general';
  cefr?: string; // minimum CEFR to be served this entry (default A1)
}
export const CROATIA_POOL: CroatiaPoolEntry[] = [
  { id: 'cityofday', label: 'City of the Day', screen: 'cityofday', category: 'culture' },
  { id: 'top100', label: 'Top 100 Phrases', screen: 'top100', category: 'vocab-a2' },
  { id: 'grocery', label: 'Grocery Scenario', screen: 'grocery', category: 'practical' },
  { id: 'transport', label: 'Transport Scenario', screen: 'transport', category: 'practical' },
  { id: 'recipes', label: 'Croatian Recipes', screen: 'recipes', category: 'culture' },
  { id: 'history', label: 'Croatian History', screen: 'history', category: 'culture' },
  { id: 'proverbs', label: 'Croatian Proverbs', screen: 'proverbs', category: 'culture' },
  { id: 'popculture', label: 'Pop Culture', screen: 'popculture', category: 'culture' },
  // ── Wave 2 — A1: survival/practical + bounded bilingual culture ──
  { id: 'emergency', label: 'Emergency Phrases', screen: 'emergency', category: 'practical' },
  { id: 'foodorder', label: 'Food Ordering', screen: 'foodorder', category: 'practical' },
  { id: 'kafic', label: 'Kafić Culture', screen: 'kafic', category: 'culture' },
  { id: 'restaurant', label: 'Restaurant Dialogue', screen: 'restaurant', category: 'practical' },
  { id: 'school', label: 'School Vocab', screen: 'school', category: 'culture' },
  {
    id: 'survival_dinner',
    label: 'Survival Dinner',
    screen: 'survival_dinner',
    category: 'practical',
  },
  {
    id: 'practical_croatian',
    label: 'Practical Croatian',
    screen: 'practical_croatian',
    category: 'practical',
  },
  { id: 'diaspora', label: 'Diaspora Note', screen: 'diaspora', category: 'culture' },
  { id: 'events', label: 'Events Calendar', screen: 'events', category: 'culture' },
  // ── Wave 2 — A2: sport/culture vocab catalogs + light production ──
  {
    id: 'football',
    label: 'Croatian Football',
    screen: 'football',
    category: 'culture',
    cefr: 'A2',
  },
  {
    id: 'basketball',
    label: 'Croatian Basketball',
    screen: 'basketball',
    category: 'culture',
    cefr: 'A2',
  },
  { id: 'gym', label: 'Gym Croatian', screen: 'gym', category: 'practical', cefr: 'A2' },
  { id: 'kings', label: 'Kings & Dukes', screen: 'kings', category: 'culture', cefr: 'A2' },
  { id: 'postcard', label: 'Postcard Writer', screen: 'postcard', category: 'culture', cefr: 'A2' },
  // ── Wave 2 — B1: press / literary / official register ──
  { id: 'civic', label: 'Civic Croatia', screen: 'civic', category: 'culture', cefr: 'B1' },
  {
    id: 'croatia_today',
    label: 'Croatia Today',
    screen: 'croatia_today',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'croatianews',
    label: 'Croatian News',
    screen: 'croatianews',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'baka_summer',
    label: "Baka's Summer",
    screen: 'baka_summer',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'bureaucratic',
    label: 'Official Croatian',
    screen: 'bureaucratic',
    category: 'practical',
    cefr: 'B1',
  },
  // ── Wave 4: culture screens from the reference-group audit ──
  // dialect_awareness was REMOVED from this pool (owner decision 2026-08-14):
  // its quiz award fires once ever and the dialect content is text-only, so
  // repeat session serves were hollow. The screen stays reachable from the
  // Culture tab as an on-demand activity.
  // phraseofday awards on first listen and has an offline seed fallback.
  { id: 'phraseofday', label: 'Phrase of the Day', screen: 'phraseofday', category: 'practical' },
  // ── Wave 6: Krajevi region pages ──
  // One shared RegionScreen per regionKey — bilingual (EN toggle), bounded by
  // the slot's auto-complete contract. Dense history/culture prose → B1 gate,
  // like the other press/literary entries above.
  {
    id: 'region_zagreb',
    label: 'Zagreb Region',
    screen: 'region_zagreb',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_split',
    label: 'Split Region',
    screen: 'region_split',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_knin',
    label: 'Knin Region',
    screen: 'region_knin',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_labin',
    label: 'Labin Region',
    screen: 'region_labin',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_mostar',
    label: 'Mostar Region',
    screen: 'region_mostar',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_hercegovina',
    label: 'Hercegovina Region',
    screen: 'region_hercegovina',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_tomislavgrad',
    label: 'Tomislavgrad Region',
    screen: 'region_tomislavgrad',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_vinkovci',
    label: 'Vinkovci Region',
    screen: 'region_vinkovci',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_vukovar',
    label: 'Vukovar Region',
    screen: 'region_vukovar',
    category: 'culture',
    cefr: 'B1',
  },
  {
    id: 'region_bibinje',
    label: 'Bibinje Region',
    screen: 'region_bibinje',
    category: 'culture',
    cefr: 'B1',
  },
  // ── Fluency initiative (2026-08): B2–C2 culture deep dives ──
  // Before these, every entry above gated at B1 — an advanced learner's culture
  // slot recycled B1 prose forever. Essays authored AT register (B2 feature
  // journalism, C1 cultural criticism, C2 essayistic), HR-first with EN toggle;
  // data ships Bearer-gated via /api/content/core (CULTURE_DEEP_DIVES).
  {
    id: 'kultura_b2',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_c1',
    label: 'Kultura: Baština',
    screen: 'kultura_c1',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c2',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2',
    category: 'culture',
    cefr: 'C2',
  },
];
