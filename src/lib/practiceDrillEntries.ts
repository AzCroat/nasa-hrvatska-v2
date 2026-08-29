/**
 * practiceDrillEntries — pool entries for the PRACTICE PROGRAMME drills
 * (2026-08-29), split out of sessionPools.ts for max-lines.
 *
 * Same reason and same shape as `drillPoolEntries` (the C-level tranches) and
 * `categoryRoutes` (the routing maps): sessionPools.ts sits at its 800-line lint
 * cap, and this programme has 111 drills still to add. Adding them inline would
 * breach the cap immediately and repeatedly.
 *
 * Every entry here was authored for a specific curriculum lesson that taught
 * something the app never drilled. `practiceProgrammeDrills.test.ts` holds each
 * one to its lesson, its route, its pool tag and its skill group.
 */
import type { CefrPoolEntry } from './drillPoolEntries';

export const PRACTICE_PROGRAMME_ENTRIES: CefrPoolEntry[] = [
  // ── A1 ────────────────────────────────────────────────────────────────────
  // Wave 1: the plural — the commonest noun operation in the language, taught
  // at A1 and drilled at no level.
  { id: 'pluraldrill', label: 'Plural', screen: 'pluraldrill', cefr: 'A1', category: 'plural' },
  // Tranche 2: one drill per A1 lesson that led nowhere.
  { id: 'negacija', label: 'Negation', screen: 'negacija', cefr: 'A1', category: 'negation' },
  { id: 'pridjevi', label: 'Adjectives', screen: 'pridjevi', cefr: 'A1', category: 'adjectives' },
  {
    id: 'pokazne',
    label: 'Demonstratives',
    screen: 'pokazne',
    cefr: 'A1',
    category: 'demonstratives',
  },
  {
    id: 'imatidrill',
    label: 'Imati / nemati',
    screen: 'imatidrill',
    cefr: 'A1',
    category: 'having',
  },
  { id: 'imperativ', label: 'Imperative', screen: 'imperativ', cefr: 'A1', category: 'imperative' },
];
