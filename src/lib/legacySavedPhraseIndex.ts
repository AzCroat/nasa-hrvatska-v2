/**
 * LEGACY_SAVED_PHRASE_INDEX — the Heritage Mode phrase order as it stood while
 * `nh_saved_phrases` still stored POSITIONAL INDICES.
 *
 * WHY THIS IS A COPY AND NOT AN IMPORT
 * ------------------------------------
 * Two separate reasons, and both matter.
 *
 * 1. CORRECTNESS. A stored index means "whatever was in slot 4 when I tapped
 *    it". Resolving it through TODAY'S `BAKA_PHRASES` was only right for as long
 *    as that array never changed — the exact assumption whose failure was the
 *    original bug (see lib/savedPhrases.ts). Insert one phrase near the top and
 *    every legacy index resolves to its neighbour, silently rewriting bookmarks
 *    a second time by the very code meant to rescue them. A migration table is
 *    historical data: it is a record of what the order WAS, so it must not
 *    follow the content forward.
 *
 * 2. FIRST PAINT. `applyRemoteProgress` runs on the critical path (App.tsx
 *    imports it directly), and `src/data/bakaPhrases.ts` lives in `chunk-data`.
 *    That single import — for a 12-entry list used only by a legacy migration —
 *    was one of the two static edges keeping the whole 212 kB `chunk-data` on
 *    the blocking path. See scripts/whyEager.mjs.
 *
 * DO NOT "SYNC" THIS WITH BAKA_PHRASES
 * ------------------------------------
 * If you add, remove or reorder a phrase in `src/data/bakaPhrases.ts`, this file
 * must NOT change. Editing it to match would re-point every learner's legacy
 * bookmark, which is the bug. This table is frozen as of 2026-08-06, the last
 * date on which any client could still have been writing indices.
 *
 * Entries that are later deleted from BAKA_PHRASES simply migrate to a key the
 * screen no longer renders — an inert leftover in localStorage, not a wrong
 * bookmark. That is the correct failure mode.
 *
 * Shape is `{ hr }` rather than a bare string only so it plugs straight into
 * `parseSavedPhrases`, which takes the same phrase-ish array the screen passes.
 */
export const LEGACY_SAVED_PHRASE_INDEX: ReadonlyArray<{ hr: string }> = [
  { hr: 'Nedostajete mi.' },
  { hr: 'Jako sam sretan što sam ovdje.' },
  { hr: 'Jako sam sretna što sam ovdje.' },
  { hr: 'Pričajte mi o staroj domovini.' },
  { hr: 'Naučio sam malo hrvatskog.' },
  { hr: 'Naučila sam malo hrvatskog.' },
  { hr: 'Još uvijek učim.' },
  { hr: 'Možete li ponoviti, molim?' },
  { hr: 'Sporije, molim.' },
  { hr: 'Kako se to kaže na hrvatskom?' },
  { hr: 'Hrana je bila izvrsna.' },
  { hr: 'Ponosim se svojim korijenima.' },
];
