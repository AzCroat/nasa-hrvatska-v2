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
  /**
   * The screen levels its own content to the learner (croatianews asks
   * /api/news?level=…), so it belongs to EVERY learner's own tier at or above
   * its gate. The level-aware culture rotation (useDailySession P4) counts
   * such an entry as at-level; a fixed `cefr` alone would pin it to B1.
   */
  adaptive?: boolean;
  /**
   * The screen serves the learner's OWN level exactly at these levels and a
   * lower band elsewhere — the shape of City of the Day, which carries graded
   * Croatian in three bands (A1 / B1 / C1): a B1 learner reads B1 (own tier),
   * a B2 learner reads B1 (lower tier, and the slot must not say "at your
   * level"). `adaptive` cannot express that — it means own tier at EVERY
   * unlocked level — so this names the levels precisely. Derived from the
   * data by cityOfDayGraded.test.tsx: a level is listed iff every city has a
   * band for it.
   */
  ownAtLevels?: readonly string[];
}
/**
 * OWNER DECISION (2026-09-05): City of the Day holds the culture slot's FIRST
 * CLAIM for A1–A2 only. The daily plan is built once a day, before anyone has
 * opened City of the Day, so the "first claim until visited" rule had made the
 * slot `cityofday` on every daily build at every level and the level-aware
 * rotation ran only on same-day rebuilds. From B1 up the slot is that rotation
 * on every build; A1–A2 keep the ritual. It stays on Home (`CityOfDayCard`)
 * for everyone. B1 is the first level with a substantial own tier (15 B1
 * entries plus the self-levelling news and history).
 *
 * OWNER DECISION (2026-09-06): now that every city carries graded Croatian,
 * City of the Day is BACK IN the B1+ rotation — as one rotation entry served
 * least-recently like the rest, never as a daily first claim. It sits in the
 * own-tier cycle at the levels that have their own band (`ownAtLevels`) and in
 * the lower cycle elsewhere, so the "Culture at your level." reason stays true.
 */
export const CITY_OF_DAY_SLOT_MAX_CEFR = 'A2';

export const CROATIA_POOL: CroatiaPoolEntry[] = [
  // NOT `adaptive` (2026-09-06): the screen grades its Croatian intro by the
  // learner's level, but with THREE bands (A1 / B1 / C1) an A2 learner reads
  // the A1 text and a B2 learner reads B1, so "own tier at every level" would
  // be false. `ownAtLevels` names the levels where it IS true; the test derives
  // the list from the data (a level is listed iff every city has that band).
  {
    id: 'cityofday',
    label: 'City of the Day',
    screen: 'cityofday',
    category: 'culture',
    ownAtLevels: ['A1', 'B1', 'C1'],
  },
  { id: 'top100', label: 'Top 100 Phrases', screen: 'top100', category: 'vocab-a2' },
  { id: 'grocery', label: 'Grocery Scenario', screen: 'grocery', category: 'practical' },
  { id: 'transport', label: 'Transport Scenario', screen: 'transport', category: 'practical' },
  { id: 'recipes', label: 'Croatian Recipes', screen: 'recipes', category: 'culture' },
  {
    id: 'history',
    label: 'Croatian History',
    screen: 'history',
    category: 'culture',
    // The Homeland War timeline carries graded Croatian at every level
    // (introHr/textHr + *HrA1/A2/B2/C1/C2, read through lib/gradedHr by the
    // same CEFR the session builder uses), so it is own-tier for everyone.
    adaptive: true,
  },
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
    adaptive: true, // /api/news?level=<learner> — at-level from B1 up
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
  // ── B2–C2 culture deep dives — ONE ENTRY PER ESSAY (2026-09-05) ──────────
  // Before: one entry per tier (kultura_b2/c1/c2) rendering the whole tier's
  // essays, and 3 essays per tier. Measured over 40 culture days a C1 learner
  // saw content at their own level on 1 of 40 (C2: 1 of 40) — the slot's
  // least-recently-served rotation treated an A1 survival card and a C1 essay
  // identically, and the tier had one card to give. Now 8 essays per tier, each
  // its own bounded entry (the region_* shape: one shared screen, one route per
  // key), so the own-tier cycle at B2+ is 8–9 entries long instead of 1–2. The
  // keys are hand-listed here because this file sits on the first-paint path
  // and cannot import src/data; cultureDeepDives.test.ts derives the list from
  // the data and fails on any drift in either direction. The tier catalog
  // routes (kultura_b2 …) still exist for browsing and are no longer pool
  // entries.
  {
    id: 'kultura_b2_kava',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2_kava',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_b2_fjaka',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2_fjaka',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_b2_nogomet',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2_nogomet',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_b2_nedjeljni_objed',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2_nedjeljni_objed',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_b2_sjever_jug',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2_sjever_jug',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_b2_veza',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2_veza',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_b2_advent',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2_advent',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_b2_gostoprimstvo',
    label: 'Kultura: Mentalitet',
    screen: 'kultura_b2_gostoprimstvo',
    category: 'culture',
    cefr: 'B2',
  },
  {
    id: 'kultura_c1_klapa',
    label: 'Kultura: Baština',
    screen: 'kultura_c1_klapa',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c1_kanon',
    label: 'Kultura: Baština',
    screen: 'kultura_c1_kanon',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c1_iseljenistvo',
    label: 'Kultura: Baština',
    screen: 'kultura_c1_iseljenistvo',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c1_glagoljica',
    label: 'Kultura: Baština',
    screen: 'kultura_c1_glagoljica',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c1_dubrovacka_republika',
    label: 'Kultura: Baština',
    screen: 'kultura_c1_dubrovacka_republika',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c1_zagrebacka_skola',
    label: 'Kultura: Baština',
    screen: 'kultura_c1_zagrebacka_skola',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c1_becarac',
    label: 'Kultura: Baština',
    screen: 'kultura_c1_becarac',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c1_licitar',
    label: 'Kultura: Baština',
    screen: 'kultura_c1_licitar',
    category: 'culture',
    cefr: 'C1',
  },
  {
    id: 'kultura_c2_pravopis',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2_pravopis',
    category: 'culture',
    cefr: 'C2',
  },
  {
    id: 'kultura_c2_tri_pisma',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2_tri_pisma',
    category: 'culture',
    cefr: 'C2',
  },
  {
    id: 'kultura_c2_humor',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2_humor',
    category: 'culture',
    cefr: 'C2',
  },
  {
    id: 'kultura_c2_purizam',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2_purizam',
    category: 'culture',
    cefr: 'C2',
  },
  {
    id: 'kultura_c2_regionalni_identiteti',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2_regionalni_identiteti',
    category: 'culture',
    cefr: 'C2',
  },
  {
    id: 'kultura_c2_mit_o_moru',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2_mit_o_moru',
    category: 'culture',
    cefr: 'C2',
  },
  {
    id: 'kultura_c2_spomenici_i_sjecanje',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2_spomenici_i_sjecanje',
    category: 'culture',
    cefr: 'C2',
  },
  {
    id: 'kultura_c2_deklaracija',
    label: 'Kultura: Identitet',
    screen: 'kultura_c2_deklaracija',
    category: 'culture',
    cefr: 'C2',
  },
];
