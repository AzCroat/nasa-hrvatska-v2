// src/data/drills/advancedComparisonDrill.ts
//
// C1 ADVANCED COMPARISON — the drill for the `comparison-advanced` lesson.
//
// `stupnjevanje` (B2) is reachable from C1 and was the obvious candidate, and it
// is the wrong drill: two of its three modes build comparatives — tvorba,
// nepravilni — which the A2 `comparatives-a2` lesson already owns via
// `komparacija`. This lesson is not about FORMING a comparative at all. It is
// about the constructions that frame a comparison and the case each one
// governs, which is where a C1 writer actually goes wrong.
//
// The distinction that costs the most marks: *kao* does not change the case of
// what follows it, while *poput* takes the genitive. They translate identically
// into English, so nothing in the learner's first language flags the choice.
//
// Three modes:
//   kaopoput — kao vs poput, and the case each governs
//   odnego   — od + genitive against nego, at C1 scale
//   pisanje  — za razliku od, kao da, and the superlative frames

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const ADVANCED_COMPARISON_MODE_LABELS: Record<string, string> = {
  kaopoput: '🪞 Kao ili poput',
  odnego: '⚖️ Od ili nego',
  pisanje: '✍️ U pisanju',
};

export const ADVANCED_COMPARISON_DRILL_DATA: ModeDrillItem[] = [
  // ── kaopoput ──────────────────────────────────────────────────────────────
  {
    mode: 'kaopoput',
    q: 'Visok je kao ____. (ti)',
    en: 'He is as tall as you.',
    opts: ['ti', 'tebe', 'tebi', 'tobom'],
    answer: 'ti',
    tip: 'Kao does NOT change the case — it copies whatever the compared item had.',
  },
  {
    mode: 'kaopoput',
    q: 'Visok je poput ____. (ti)',
    en: 'He is tall like you.',
    opts: ['tebe', 'ti', 'tebi', 'tobom'],
    answer: 'tebe',
    tip: 'Poput ALWAYS takes the genitive: poput tebe.',
  },
  {
    mode: 'kaopoput',
    q: 'Koji padež traži "poput"?',
    en: 'Which case does poput take?',
    opts: ['genitiv', 'nominativ', 'akuzativ', 'isti kao prije'],
    answer: 'genitiv',
    tip: 'Genitive, always. That single fact is the whole difference from kao.',
  },
  {
    mode: 'kaopoput',
    q: 'Pjeva poput ____. (ptica)',
    en: 'She sings like a bird.',
    opts: ['ptice', 'ptica', 'pticu', 'pticom'],
    answer: 'ptice',
    tip: 'poput ptice.',
  },
  {
    mode: 'kaopoput',
    q: 'Radi kao ____. (liječnik)',
    en: 'He works as a doctor.',
    opts: ['liječnik', 'liječnika', 'liječniku', 'liječnikom'],
    answer: 'liječnik',
    tip: 'Kao keeps the nominative here because the subject is nominative.',
  },
  {
    mode: 'kaopoput',
    q: 'Zašto je ovaj izbor težak govornicima engleskoga?',
    en: 'Why is this hard for English speakers?',
    opts: ['engleski ima samo "like"', 'hrvatski nema "kao"', 'padeži su isti', 'nije težak'],
    answer: 'engleski ima samo "like"',
    tip: 'One English word covers both, so nothing signals that a choice exists.',
  },
  {
    mode: 'kaopoput',
    q: 'Smatram ga ____ prijateljem. (kao)',
    en: 'I consider him a friend.',
    opts: ['svojim', 'svoj', 'svojega', 'svome'],
    answer: 'svojim',
    tip: 'After smatrati the complement is instrumental, and kao would copy that case too.',
  },
  {
    mode: 'kaopoput',
    q: 'Ponaša se poput ____. (dijete)',
    en: 'He behaves like a child.',
    opts: ['djeteta', 'dijete', 'djetetu', 'djetetom'],
    answer: 'djeteta',
    tip: 'poput djeteta.',
  },

  // ── odnego ────────────────────────────────────────────────────────────────
  {
    mode: 'odnego',
    q: 'Stariji je ____ mene.',
    en: 'He is older than me.',
    opts: ['od', 'nego', 'kao', 'poput'],
    answer: 'od',
    tip: 'A bare noun or pronoun → od + genitive.',
  },
  {
    mode: 'odnego',
    q: 'Lakše je pitati ____ tražiti sam.',
    en: 'It is easier to ask than to look yourself.',
    opts: ['nego', 'od', 'kao', 'poput'],
    answer: 'nego',
    tip: 'Two infinitives compared → nego. Od cannot govern a verb.',
  },
  {
    mode: 'odnego',
    q: 'Više voli čaj ____ kavu.',
    en: 'He prefers tea to coffee.',
    opts: ['nego', 'od', 'poput', 'kao'],
    answer: 'nego',
    tip: 'Both are objects of the same verb, so nego — and the case matches: kavu.',
  },
  {
    mode: 'odnego',
    q: 'Kada "od" ne radi?',
    en: 'When does od fail?',
    opts: ['kad se uspoređuje bilo što osim imenske skupine', 'u pisanju', 'u množini', 'nikada'],
    answer: 'kad se uspoređuje bilo što osim imenske skupine',
    tip: 'Od needs a single noun phrase. Everything longer takes nego.',
  },
  {
    mode: 'odnego',
    q: 'Ovaj je članak bolji ____ prethodni.',
    en: 'This article is better than the previous one.',
    opts: ['nego', 'od', 'poput', 'kao'],
    answer: 'nego',
    tip: 'Nego keeps prethodni in the nominative, matching ovaj članak.',
  },
  {
    mode: 'odnego',
    q: 'Rezultat je bolji ____ očekivanja.',
    en: 'The result is better than expected.',
    opts: ['od', 'nego', 'kao', 'poput'],
    answer: 'od',
    tip: 'A noun phrase follows → od + genitive: od očekivanja.',
  },
  {
    mode: 'odnego',
    q: 'Koji padež traži "od" u usporedbi?',
    en: 'Which case after od?',
    opts: ['genitiv', 'akuzativ', 'dativ', 'instrumental'],
    answer: 'genitiv',
    tip: 'Genitive — the same as poput, which is why the case is not what separates them.',
  },
  {
    mode: 'odnego',
    q: 'Radije bih šutio ____ lagao.',
    en: 'I would rather stay silent than lie.',
    opts: ['nego', 'od', 'kao', 'poput'],
    answer: 'nego',
    tip: 'Two verbs again: nego.',
  },

  // ── pisanje ───────────────────────────────────────────────────────────────
  {
    mode: 'pisanje',
    q: '____ prošle godine, prihodi su porasli.',
    en: 'Unlike last year, revenues rose.',
    opts: ['Za razliku od', 'Kao', 'Poput', 'Nego'],
    answer: 'Za razliku od',
    tip: 'za razliku od + genitive — the workhorse of contrastive writing.',
  },
  {
    mode: 'pisanje',
    q: 'Za razliku od ____, ovaj pristup djeluje. (prijašnji)',
    en: 'Unlike the previous one, this approach works.',
    opts: ['prijašnjega', 'prijašnji', 'prijašnjem', 'prijašnjim'],
    answer: 'prijašnjega',
    tip: 'Genitive after za razliku od.',
  },
  {
    mode: 'pisanje',
    q: 'Izgleda ____ ništa nije čuo.',
    en: 'He looks as if he heard nothing.',
    opts: ['kao da', 'kao', 'poput', 'nego'],
    answer: 'kao da',
    tip: 'kao da takes a full clause, and the verb stays in the present.',
  },
  {
    mode: 'pisanje',
    q: 'Ovo je ____ najbolje rješenje.',
    en: 'This is by far the best solution.',
    opts: ['daleko', 'vrlo', 'jako', 'previše'],
    answer: 'daleko',
    tip: 'daleko najbolji — the standard way to strengthen a superlative.',
  },
  {
    mode: 'pisanje',
    q: 'Jedan od ____ romana. (najbolji)',
    en: 'One of the best novels.',
    opts: ['najboljih', 'najbolji', 'najboljem', 'najboljima'],
    answer: 'najboljih',
    tip: 'jedan od + GENITIVE PLURAL: jedan od najboljih romana.',
  },
  {
    mode: 'pisanje',
    q: 'Koje vrijeme ide iza "kao da"?',
    en: 'Which tense follows kao da?',
    opts: ['prezent', 'futur', 'kondicional', 'aorist'],
    answer: 'prezent',
    tip: 'Present, even where English would reach for a past or a subjunctive.',
  },
  {
    mode: 'pisanje',
    q: 'Što traži "za razliku od"?',
    en: 'What does za razliku od take?',
    opts: ['genitiv', 'nominativ', 'akuzativ', 'surečenicu'],
    answer: 'genitiv',
    tip: 'Genitive. It is a compound preposition, and od is what governs.',
  },
  {
    mode: 'pisanje',
    q: 'Slično ____, i ovdje vrijedi isto. (prethodni slučaj)',
    en: 'Similar to the previous case, the same applies here.',
    opts: ['prethodnom slučaju', 'prethodnog slučaja', 'prethodni slučaj', 'prethodnim slučajem'],
    answer: 'prethodnom slučaju',
    tip: 'Slično takes the DATIVE — a third government pattern in the same family.',
  },
];
