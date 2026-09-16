/**
 * referenceDesk — what the Learning Center's reference desk holds, as data.
 *
 * THE GAP THIS CLOSES. Three finished pieces of teaching machinery rendered
 * almost nowhere:
 *
 *   * `CASE_CONCEPTS` — eight concept cards, each anchoring a Croatian case to
 *     something the learner already says in English (he/him/his, who/whom).
 *     They appeared ONLY as a one-second intro before a case drill, which a
 *     returning learner taps through in a second and can never get back to.
 *   * `decline()` — a full seven-case paradigm generator, rules-based, offline,
 *     zero AI. Reachable only by tapping a word inside one reader screen.
 *   * `PREPOSITION_CASE` — 37 prepositions and the case each governs, read by
 *     `analyzeForm` and rendered by NOTHING. Written, never shown.
 *
 * This module is the single definition of which panels the desk has, so the
 * INDEX and the SCREEN cannot disagree about it: `referenceSources()` feeds the
 * Learning Center's search, and `ReferenceDesk` renders a panel per id.
 * `referenceDesk.test.tsx` walks both directions — a source with no panel, or a
 * panel with no source, fails the build.
 *
 * The concept rows are DERIVED from `CASE_CONCEPTS`, not listed, so authoring a
 * ninth card puts it in search the same day. Only the two TOOLS are declared,
 * because a tool is a piece of this screen rather than a piece of content.
 */
import { CASE_CONCEPTS, WHY_WORDS_CHANGE } from '../data/caseConcepts';
import type { ReferenceSource } from './learningIndex';

/** The one-time "why do Croatian words change at all" primer. */
export const PRIMER_ID = 'why-words-change';
/** Type a noun, get its seven cases in both numbers. */
export const DECLENSION_ID = 'declension-table';
/** Which case each of the 37 prepositions governs. */
export const PREPOSITIONS_ID = 'preposition-cases';

/**
 * Croatian names for the cases, so a learner who types `genitiv` or `padeži`
 * reaches the card. The index's own thesaurus already maps the bare case names;
 * these are the per-card keywords that make a specific card win over a drill.
 */
const CASE_KEYWORDS: Record<string, string[]> = {
  nominative: ['nominativ', 'subject', 'tko', 'sto'],
  genitive: ['genitiv', 'possession', 'of', 'koga', 'cega'],
  dative: ['dativ', 'indirect object', 'komu', 'cemu'],
  accusative: ['akuzativ', 'direct object', 'koga', 'sto'],
  locative: ['lokativ', 'location', 'where', 'o kome'],
  instrumental: ['instrumental', 'with', 'by', 's kim', 'cime'],
  vocative: ['vokativ', 'address', 'calling'],
  clitics: ['enklitike', 'clitic', 'word order', 'second position'],
};

/** The two instruments. Declared rather than derived — they are screen, not content. */
export const REFERENCE_TOOLS: ReferenceSource[] = [
  {
    id: DECLENSION_ID,
    kind: 'tool',
    title: 'Decline any noun',
    subtitle: 'Type a Croatian noun and see all seven cases, singular and plural',
    icon: '🔤',
    keywords: ['declension', 'deklinacija', 'sklonidba', 'paradigm', 'endings', 'table', 'cases'],
  },
  {
    id: PREPOSITIONS_ID,
    kind: 'tool',
    title: 'Which case does this preposition take?',
    subtitle: 'All 37 prepositions, grouped by the case they govern',
    icon: '🔗',
    keywords: ['preposition', 'prijedlog', 'prijedlozi', 'government', 'rekcija'],
  },
];

/**
 * Every panel on the desk, as index rows.
 *
 * Concept cards are derived from `CASE_CONCEPTS` so a new card needs no second
 * registration. The primer leads, because "why do the words change at all" is
 * the question under every other one.
 */
export function referenceSources(): ReferenceSource[] {
  const primer: ReferenceSource = {
    id: PRIMER_ID,
    kind: 'concept',
    title: WHY_WORDS_CHANGE.title,
    subtitle: 'The one idea the seven cases hang on',
    icon: WHY_WORDS_CHANGE.icon,
    keywords: ['why', 'endings', 'change', 'padez', 'padezi', 'case', 'cases', 'grammar'],
  };
  const concepts: ReferenceSource[] = CASE_CONCEPTS.map((c) => ({
    id: c.id,
    kind: 'concept' as const,
    title: c.title,
    subtitle: c.whatItDoes,
    icon: c.icon,
    keywords: CASE_KEYWORDS[c.id] ?? [c.id],
  }));
  return [primer, ...concepts, ...REFERENCE_TOOLS];
}
