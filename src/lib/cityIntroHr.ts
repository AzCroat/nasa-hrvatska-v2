/**
 * cityIntroHr — load City of the Day's Croatian intro at the learner's band.
 *
 * WHY THIS EXISTS. The graded corpus (364 cities) used to be ONE module holding
 * every band, statically imported by `CityOfDayScreen`. A learner therefore
 * downloaded all of it to read one band: 710 KB for ~240 KB of use at three
 * bands, and ~1.6 MB at six. Splitting by band and importing only the resolved
 * one makes the payload SMALLER than it was before the corpus grew, and is what
 * makes six bands affordable at all.
 *
 * WHAT IT PRESERVES. `pickGradedHr` walks DOWN from the learner's level to the
 * nearest text that exists; with the corpus in one object it could do that per
 * record. Split by file, the walk has to happen over the bands that SHIP, which
 * is what `resolveCityHrBand` does — and because the shipped set is the same at
 * every city (the test pins that), the answer is identical. A learner at B2 with
 * only A1/B1/C1 shipped reads B1 and is told "Croatian · B1", exactly as before.
 *
 * `CITY_HR_BANDS` is hand-listed because Vite needs a literal path per dynamic
 * import and cannot enumerate a directory. It is checked against the actual
 * files by `cityOfDayGraded.test.tsx`, so a band authored without being listed
 * — or listed without being authored — fails there rather than silently never
 * loading.
 */
import { CEFR_ORDER, type CefrLevel } from './cefr';
import { gradedField, GRADED_BASE_LEVEL, type GradedPick } from './gradedHr';

/** The bands that have a module under `data/cultural/cityHr/`. */
export const CITY_HR_BANDS: readonly CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** One city's entry: an object carrying the band's `introHr*` field. */
export type CityHrEntries = Record<string, Record<string, unknown>>;

/**
 * The band a learner at `level` actually reads: their own if it ships, else the
 * nearest one below. Never above — the same rule `pickGradedHr` obeys, and the
 * reason the screen can say "at your level" only when it is true.
 */
export function resolveCityHrBand(level: string): CefrLevel {
  const idx = (CEFR_ORDER as readonly string[]).indexOf(level);
  const ladder: readonly CefrLevel[] =
    idx < 0 ? [GRADED_BASE_LEVEL] : [...CEFR_ORDER.slice(0, idx + 1)].reverse();
  for (const l of ladder) if (CITY_HR_BANDS.includes(l)) return l;
  // Below every shipped band (a learner at A1 with no A1 file): the baseline is
  // the only Croatian there is, and it is what the bare field has always held.
  return GRADED_BASE_LEVEL;
}

/**
 * The band module for `level`. Literal paths per band — Vite cannot code-split
 * a computed specifier, and each literal is what earns its own `chunk-geo-hr-*`
 * chunk (which the service worker's `chunk-geo*` precache exclusion covers).
 * Resolves to an empty map if the import fails, so a screen degrades to the
 * English it always had rather than crashing on a chunk that did not arrive.
 */
export async function loadCityHrBand(
  level: string,
): Promise<{ band: CefrLevel; entries: CityHrEntries }> {
  const band = resolveCityHrBand(level);
  try {
    switch (band) {
      case 'A1': {
        const m = await import('../data/cultural/cityHr/A1.js');
        return { band, entries: m.CITY_INTRO_HR_A1 as CityHrEntries };
      }
      case 'A2': {
        const m = await import('../data/cultural/cityHr/A2.js');
        return { band, entries: m.CITY_INTRO_HR_A2 as CityHrEntries };
      }
      case 'B2': {
        const m = await import('../data/cultural/cityHr/B2.js');
        return { band, entries: m.CITY_INTRO_HR_B2 as CityHrEntries };
      }
      case 'C1': {
        const m = await import('../data/cultural/cityHr/C1.js');
        return { band, entries: m.CITY_INTRO_HR_C1 as CityHrEntries };
      }
      case 'C2': {
        const m = await import('../data/cultural/cityHr/C2.js');
        return { band, entries: m.CITY_INTRO_HR_C2 as CityHrEntries };
      }
      default: {
        const m = await import('../data/cultural/cityHr/B1.js');
        return { band, entries: m.CITY_INTRO_HR_B1 as CityHrEntries };
      }
    }
  } catch {
    return { band, entries: {} };
  }
}

/**
 * One city's Croatian from a loaded band, in `pickGradedHr`'s shape so the
 * screen's "at your level" chip is unchanged. Null when the city has no entry
 * — an unknown or renamed name renders exactly as it did before grading.
 */
export function pickCityIntroHr(
  entries: CityHrEntries,
  name: string,
  band: CefrLevel,
  learnerLevel: string,
): GradedPick | null {
  const rec = entries[name];
  const v = rec?.[gradedField('introHr', band)];
  if (typeof v !== 'string' || !v.trim()) return null;
  return { text: v, level: band, atLevel: band === learnerLevel };
}
