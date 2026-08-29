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
  // Tranche 3: the four remaining A1 lessons whose subject is a RULE rather
  // than a topic. `vrijemea1` is deliberately separate from the existing
  // `datumi` drill, which is C1 (ordinal declension, dates in the genitive) and
  // so is neither reachable nor useful to a learner who has just met the days
  // of the week.
  { id: 'upitne', label: 'Questions', screen: 'upitne', cefr: 'A1', category: 'questions' },
  {
    id: 'mjesto',
    label: 'Place prepositions',
    screen: 'mjesto',
    cefr: 'A1',
    category: 'place-prepositions',
  },
  {
    id: 'vrijemea1',
    label: 'Time & calendar',
    screen: 'vrijemea1',
    cefr: 'A1',
    category: 'time',
  },
  { id: 'pozdravi', label: 'Greetings', screen: 'pozdravi', cefr: 'A1', category: 'greetings' },
  // ── A2 ────────────────────────────────────────────────────────────────────
  // Tranche 1. Four of the five sit above an existing drill that was gated one
  // or two levels too high for the lesson that needed it (`svojmoj` B1,
  // `clitic` B2, `kolicina` B2, `stupnjevanje` B2) — the same hole as the A1
  // verb gap, one level up. `objekt` carries no new category: it is wired as
  // CATEGORY_EASIER_SCREEN.clitics, which also gives every learner below B2 a
  // clitics drill for the first time.
  {
    id: 'svojdrill',
    label: 'Svoj',
    screen: 'svojdrill',
    cefr: 'A2',
    category: 'reflexive-possessive',
  },
  { id: 'objekt', label: 'Object pronouns', screen: 'objekt', cefr: 'A2', category: 'clitics' },
  {
    id: 'mnozinapadezi',
    label: 'Plural cases',
    screen: 'mnozinapadezi',
    cefr: 'A2',
    category: 'plural-cases',
  },
  { id: 'kolicinaa2', label: 'Quantity', screen: 'kolicinaa2', cefr: 'A2', category: 'quantity' },
  {
    id: 'komparacija',
    label: 'Comparison',
    screen: 'komparacija',
    cefr: 'A2',
    category: 'comparison',
  },
  // ── B1 ────────────────────────────────────────────────────────────────────
  // Tranche 1, and the same finding as A2 with a twist. Every one of these five
  // lessons had a drill already — `infinitivda` (C1), `neizravni` (B2),
  // `bezlicne` (B2), `vremenske` (B2), `uzrocne` (B2) — but here the CEFR gate
  // is only half the problem: four of those five are tagged with a category that
  // is ALREADY routed somewhere else, and three share `subordination`, whose
  // easier route is `relpron`. Reusing the tags would have sent three different
  // lessons to one drill and `reported-speech` to relative pronouns. Each gets
  // its own pool-only category instead; the B2/C1 drills are untouched.
  {
    id: 'infda',
    label: 'Infinitive or da',
    screen: 'infda',
    cefr: 'B1',
    category: 'infinitive-da',
  },
  {
    id: 'prepricavanje',
    label: 'Reported speech',
    screen: 'prepricavanje',
    cefr: 'B1',
    category: 'reported-speech',
  },
  {
    id: 'bezlicnob1',
    label: 'Impersonal',
    screen: 'bezlicnob1',
    cefr: 'B1',
    category: 'impersonal',
  },
  {
    id: 'vrijemeklauze',
    label: 'Time clauses',
    screen: 'vrijemeklauze',
    cefr: 'B1',
    category: 'time-clauses',
  },
  {
    id: 'uzrokb1',
    label: 'Cause & purpose',
    screen: 'uzrokb1',
    cefr: 'B1',
    category: 'cause-purpose',
  },
];
