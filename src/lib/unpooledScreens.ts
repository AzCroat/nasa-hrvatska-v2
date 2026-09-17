// src/lib/unpooledScreens.ts
//
// SCREENS THE LEARNING CENTER MUST CARRY BECAUSE NOTHING ELSE DOES.
//
// The Center builds its rows from the session pools, the curriculum spine and
// the reference desk. That covers 566 rows and every drill the scheduler can
// serve — but a handful of screens are ROUTED and reachable and sit in no pool
// at all, because nothing about them is schedulable. Before this module their
// only door in the entire app was `BrowseContentModal`, so retiring that modal
// would have made them unreachable: not deleted, not deprecated, just gone,
// with the router still carrying them.
//
// MEASURED, NOT ASSUMED. The modal opened 33 screens; 24 are pooled and the
// Center already had them. Of the remaining 9, two have another door
// (`grammar` via useScreenLauncher, `heritage_mode` via the Me tab's heritage
// section) and SEVEN had none. An earlier note in this repo said the problem
// was "9 uncatalogued screens, one of which cannot become a plain row" — that
// was wrong in both directions, and only the diff showed it.
//
// WHY NOT JUST ADD THEM TO A POOL. A pool entry is not a label, it is a
// SCHEDULING claim: `CEFR_EXERCISE_POOL` feeds the daily session, so adding
// seven rows there would change what the recommender serves every learner,
// which is a composition change needing its own measurement. These screens are
// browsable, not schedulable. A separate catalogue says exactly that.
//
// THE LIST IS DATA; ITS CORRECTNESS IS DERIVED. `unpooledScreens.test.ts`
// walks the REAL router for routed screens, subtracts everything the pools
// cover and everything with another `setScr` entry point, and requires the
// remainder to match this file exactly — in BOTH directions. A newly orphaned
// screen fails the build instead of quietly having no door, and an entry that
// gains a pool row or another door fails as a stale exemption would. That is
// the only thing standing between this and the hand-listed tiles it replaces,
// which decayed to 26 of 180 lessons precisely because nothing checked them.

export interface UnpooledScreen {
  /** Route key, as `setScr` takes it. */
  screen: string;
  /** What the learner sees. Taken from the modal's own tiles, not reinvented. */
  label: string;
  /** One line of context, as the modal showed. Empty when it had none. */
  subtitle?: string;
  icon?: string;
}

export const UNPOOLED_SCREENS: readonly UnpooledScreen[] = [
  {
    screen: 'grammar_track',
    label: 'Grammar Track A1→C2',
    subtitle: 'The whole grammar syllabus, level by level',
    icon: '⚙️',
  },
  {
    screen: 'grammarmap',
    label: 'Grammar Map',
    subtitle: 'Navigate how all the grammar connects',
    icon: '🗺️',
  },
  {
    screen: 'grammarvideos',
    label: 'Watch Grammar Lessons',
    subtitle: 'Video explanations and AI-generated lessons',
    icon: '🎬',
  },
  {
    screen: 'readlist',
    label: 'Reading Passages',
    subtitle: '30 stories · A1 to C1',
    icon: '📖',
  },
  {
    screen: 'advanced_vocab',
    label: 'B2+ Vocabulary',
    subtitle: 'The upper-level word lists',
    icon: '🎓',
  },
  {
    screen: 'pitch_accent',
    label: 'Pitch Accent',
    subtitle: '4 accents — what no other app teaches',
    icon: '🎵',
  },
  {
    screen: 'heritage_path',
    label: 'Heritage Path',
    subtitle: 'Grew up hearing Croatian? Start here.',
    icon: '🏡',
  },
] as const;
