// src/lib/croatianMorphology.ts
//
// RULE-BASED CROATIAN MORPHOLOGY (owner recommendation 6, 2026-09-07).
//
// The gap: the app already let a learner tap a word — GrammarReader — but every
// tap was one Claude call. That means it costs the AI budget, it needs a
// network, it is subject to the daily quota and the monthly governor, it takes
// a second, and it works on exactly one screen. Meanwhile "which case is this,
// and why" is THE hard problem for English speakers, and the app's own Concept
// Teaching directive says so.
//
// Croatian inflection is regular enough to compute. This module does it with
// rules and a small irregular table: zero AI, zero network, synchronous.
//
// ── THE HONESTY RULE, and it is the whole design ────────────────────────────
// Croatian endings are genuinely AMBIGUOUS. `knjige` is the genitive singular
// AND the nominative plural AND the accusative plural of `knjiga`, and no
// amount of cleverness decides between them without the sentence. So this
// module returns CANDIDATES — the readings the ending permits — and never one
// confident answer it cannot support. That ambiguity is not a defect in the
// output: it is the fact the learner has to internalise, and stating it is the
// teaching. Claiming "genitive singular" on a form that is equally a nominative
// plural is the fabrication rule (NEVER DO 13) applied to grammar.
//
// What it does NOT do, stated so nobody assumes otherwise:
//   - It does not disambiguate from context. That is what the AI path is for,
//     and it stays available as a deliberate second step.
//   - It does not recognise every Croatian word. An unknown consonant-final
//     word could be a masculine nominative or a feminine i-declension
//     nominative; both are offered.
//   - `decline()` produces the REGULAR paradigm. Irregulars are listed by
//     lemma; a lemma outside that list gets the regular table, flagged as
//     computed, never asserted as attested.

export type { Case, Gender, Number_, FormAnalysis, WordReading } from './croatianMorphologyTypes';
export { CASES, CASE_NAME, CASE_QUESTION } from './croatianMorphologyTypes';
export { PREPOSITION_CASE } from './croatianClosedClass';

import {
  CASES as _CASES,
  CASE_NAME as _CASE_NAME,
  CASE_QUESTION as _CASE_QUESTION,
  type FormAnalysis,
  type Gender,
  type Number_,
  type WordReading,
} from './croatianMorphologyTypes';
import { IRREGULAR, type Table } from './croatianIrregulars';
import { CLOSED, PREPOSITION_CASE } from './croatianClosedClass';

// ── Sound classes ───────────────────────────────────────────────────────────

const PALATALS = new Set(['č', 'ć', 'dž', 'đ', 'j', 'lj', 'nj', 'š', 'ž']);
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

/** The last consonant as Croatian counts it — digraphs are one letter. */
function finalConsonant(stem: string): string {
  const two = stem.slice(-2);
  if (two === 'lj' || two === 'nj' || two === 'dž') return two;
  return stem.slice(-1);
}

function endsPalatal(stem: string): boolean {
  return PALATALS.has(finalConsonant(stem));
}

/** The instrumental -em also follows `c` (stricem), while the vocative does
 *  NOT treat c as soft (striče) — so the two sets are deliberately separate. */
function softForInstrumental(stem: string): boolean {
  return endsPalatal(stem) || finalConsonant(stem) === 'c';
}

/** Palatalization (k/g/h → č/ž/š) — before the masculine vocative -e and in
 *  verb/derivation morphology. `junak → junače`, `bog → bože`, `duh → duše`. */
function palatalize(stem: string): string {
  const c = stem.slice(-1);
  const to: Record<string, string> = { k: 'č', g: 'ž', h: 'š', c: 'č' };
  return to[c] ? stem.slice(0, -1) + to[c] : stem;
}

/** Sibilarization (k/g/h → c/z/s) — masculine nominative plural and the
 *  feminine dative/locative singular. `junak → junaci`, `knjiga → knjizi`. */
function sibilarize(stem: string): string {
  const c = stem.slice(-1);
  const to: Record<string, string> = { k: 'c', g: 'z', h: 's' };
  return to[c] ? stem.slice(0, -1) + to[c] : stem;
}

/**
 * The FLEETING A, restricted to the two suffixes where it is genuinely
 * PRODUCTIVE: polysyllabic `-ac` and `-ak`. `momak → momka`, `borac → borca`,
 * `početak → početka`.
 *
 * The first draft of this applied "an `a` between two consonants in the last
 * syllable", which is how the rule is usually stated in a grammar — and it
 * turned `grad` into `grd`, `sat` into `st` and `znak` into `znk`. The general
 * statement describes which words CAN have a fleeting a, not which ones DO;
 * that is lexical. Monosyllables are excluded because `znak → znaka` and
 * `mrak → mraka` keep theirs, and the ones that do not (`pas → psa`,
 * `otac → oca`, which also loses its t) are listed as irregular instead.
 */
function dropFleetingA(stem: string): string {
  if (!/(ac|ak)$/.test(stem)) return stem;
  if (syllables(stem) < 2) return stem;
  return stem.slice(0, -2) + stem.slice(-1);
}

/**
 * The feminine genitive plural inserts an `a` into a final consonant cluster:
 * `sestra → sestara`, `djevojka → djevojaka`. Without it the rules emit
 * "sestra", which is the NOMINATIVE singular — a wrong form put in front of a
 * learner, which is worse than no form. Clusters Croatian permits word-finally
 * (st, št, zd, žd, šć) are left alone.
 */
function epenthesize(stem: string): string {
  if (stem.length < 2) return stem;
  const last2 = stem.slice(-2);
  if (['st', 'št', 'zd', 'žd', 'šć', 'lj', 'nj', 'dž'].includes(last2)) return stem;
  const a = stem[stem.length - 2]!;
  const b = stem[stem.length - 1]!;
  if (VOWELS.has(a) || VOWELS.has(b)) return stem;
  return stem.slice(0, -1) + 'a' + b;
}

const isVowel = (ch: string | undefined) => !!ch && VOWELS.has(ch);
const syllables = (w: string) => [...w].filter((c) => VOWELS.has(c)).length;

// ── Declension ──────────────────────────────────────────────────────────────

export interface Declension {
  lemma: string;
  gender: Gender;
  /** 'a' = the masculine/neuter a-declension, 'e' = feminine -a, 'i' = feminine
   *  consonant-final. Named the way Croatian grammars name them. */
  paradigm: 'a-masculine' | 'a-neuter' | 'e-feminine' | 'i-feminine';
  forms: Table;
  /** True when the table came from the irregular list rather than the rules. */
  attested: boolean;
  note?: string;
}

function guessGender(lemma: string): Gender {
  const last = lemma.slice(-1);
  if (last === 'a') return 'f';
  if (last === 'o' || last === 'e') return 'n';
  return 'm';
}

/**
 * The regular paradigm for a noun. `gender` may be supplied because a
 * consonant-final noun is masculine (`grad`) or feminine i-declension (`stvar`)
 * and the spelling cannot tell them apart — the caller knows, the rules do not.
 */
export function decline(lemma: string, gender?: Gender): Declension | null {
  const word = lemma.trim().toLowerCase();
  if (!word || /\s/.test(word)) return null;

  const irr = IRREGULAR[word];
  if (irr && (!gender || gender === irr.gender)) {
    return {
      lemma: word,
      gender: irr.gender,
      paradigm:
        irr.gender === 'f'
          ? word.endsWith('a')
            ? 'e-feminine'
            : 'i-feminine'
          : irr.gender === 'n'
            ? 'a-neuter'
            : 'a-masculine',
      forms: { ...irr.table },
      attested: true,
      note: irr.note,
    };
  }

  const g = gender ?? guessGender(word);
  if (g === 'f' && word.endsWith('a')) return declineFeminineA(word);
  if (g === 'f') return declineFeminineI(word);
  if (g === 'n') return declineNeuter(word);
  if (word.endsWith('a')) return declineFeminineA(word); // a masculine name in -a still declines this way
  return declineMasculine(word);
}

function declineMasculine(lemma: string): Declension {
  // The oblique stem loses a fleeting a: otac → oc-, momak → momk-.
  const stem = dropFleetingA(lemma);
  const pal = endsPalatal(stem);
  const om = softForInstrumental(stem) ? 'em' : 'om';
  // Monosyllables take the long plural: grad → gradovi, muž → muževi.
  const long = syllables(lemma) === 1;
  const infix = pal ? 'ev' : 'ov';
  // SIBILARIZATION reaches the nominative/vocative plural and the -ima cases,
  // and NOT the genitive or accusative plural: junaci, junacima, but junaka and
  // junake. Using one plural stem for all of them produces "junaca", which is a
  // different word's genitive.
  const plNom = long ? stem + infix : sibilarize(stem);
  const plPlain = long ? stem + infix : stem;
  // Vocative: -u after a palatal, otherwise -e with k/g/h/c palatalized.
  const voc = pal ? stem + 'u' : palatalize(stem) + 'e';
  return {
    lemma,
    gender: 'm',
    paradigm: 'a-masculine',
    attested: false,
    forms: {
      Nsg: lemma,
      Gsg: stem + 'a',
      Dsg: stem + 'u',
      Asg: lemma,
      Vsg: voc,
      Lsg: stem + 'u',
      Isg: stem + om,
      Npl: plNom + 'i',
      Gpl: plPlain + 'a',
      Dpl: plNom + 'ima',
      Apl: plPlain + 'e',
      Vpl: plNom + 'i',
      Lpl: plNom + 'ima',
      Ipl: plNom + 'ima',
    },
    note:
      'The accusative singular equals the nominative for a thing and the genitive for a living being — ' +
      `vidim ${lemma} for an object, vidim ${stem}a for a person or animal.`,
  };
}

function declineNeuter(lemma: string): Declension {
  const stem = lemma.slice(0, -1);
  // A neuter noun's own nominative ending declares its stem class: -o is hard
  // (selom), -e is soft (morem, poljem, suncem). Reading softness off the final
  // CONSONANT instead gives "morom", because r is not a soft consonant.
  const pal = lemma.endsWith('e');
  return {
    lemma,
    gender: 'n',
    paradigm: 'a-neuter',
    attested: false,
    forms: {
      Nsg: lemma,
      Gsg: stem + 'a',
      Dsg: stem + 'u',
      Asg: lemma,
      Vsg: lemma,
      Lsg: stem + 'u',
      Isg: stem + (pal ? 'em' : 'om'),
      Npl: stem + 'a',
      Gpl: stem + 'a',
      Dpl: stem + 'ima',
      Apl: stem + 'a',
      Vpl: stem + 'a',
      Lpl: stem + 'ima',
      Ipl: stem + 'ima',
    },
    note: 'Neuter nouns have the same form in the nominative, accusative and vocative.',
  };
}

function declineFeminineA(lemma: string): Declension {
  const stem = lemma.slice(0, -1);
  const dl = sibilarize(stem) + 'i'; // knjiga → knjizi, ruka → ruci
  // -ica takes the vocative -e (Marice), other -a nouns take -o (ženo).
  const voc = lemma.endsWith('ica') ? stem + 'e' : stem + 'o';
  return {
    lemma,
    gender: 'f',
    paradigm: 'e-feminine',
    attested: false,
    forms: {
      Nsg: lemma,
      Gsg: stem + 'e',
      Dsg: dl,
      Asg: stem + 'u',
      Vsg: voc,
      Lsg: dl,
      Isg: stem + 'om',
      Npl: stem + 'e',
      Gpl: epenthesize(stem) + 'a',
      Dpl: stem + 'ama',
      Apl: stem + 'e',
      Vpl: stem + 'e',
      Lpl: stem + 'ama',
      Ipl: stem + 'ama',
    },
    note: 'The dative and locative singular are the same form, and k, g and h change to c, z and s before it.',
  };
}

function declineFeminineI(lemma: string): Declension {
  return {
    lemma,
    gender: 'f',
    paradigm: 'i-feminine',
    attested: false,
    forms: {
      Nsg: lemma,
      Gsg: lemma + 'i',
      Dsg: lemma + 'i',
      Asg: lemma,
      Vsg: lemma + 'i',
      Lsg: lemma + 'i',
      Isg: lemma + 'i',
      Npl: lemma + 'i',
      Gpl: lemma + 'i',
      Dpl: lemma + 'ima',
      Apl: lemma + 'i',
      Vpl: lemma + 'i',
      Lpl: lemma + 'ima',
      Ipl: lemma + 'ima',
    },
    note: 'This declension is nearly all -i: five of the seven singular cases look identical, and only the sentence tells them apart.',
  };
}

// ── Form analysis ───────────────────────────────────────────────────────────
//
// Endings, longest first, each mapped to every reading it permits. This table
// is the honesty rule made concrete: `-e` has six readings and all six are
// listed, because a learner told only one of them has been told something that
// is wrong five times out of six.

interface EndingRule {
  end: string;
  readings: Omit<FormAnalysis, 'pos' | 'lemma'>[];
}

const NOUN_ENDINGS: EndingRule[] = [
  {
    end: 'ovima',
    readings: [
      { case: 'D', number: 'pl', gender: 'm' },
      { case: 'L', number: 'pl', gender: 'm' },
      { case: 'I', number: 'pl', gender: 'm' },
    ],
  },
  {
    end: 'ama',
    readings: [
      { case: 'D', number: 'pl', gender: 'f' },
      { case: 'L', number: 'pl', gender: 'f' },
      { case: 'I', number: 'pl', gender: 'f' },
    ],
  },
  {
    end: 'ima',
    readings: [
      { case: 'D', number: 'pl' },
      { case: 'L', number: 'pl' },
      { case: 'I', number: 'pl' },
    ],
  },
  { end: 'om', readings: [{ case: 'I', number: 'sg' }] },
  {
    end: 'em',
    readings: [{ case: 'I', number: 'sg', note: 'the -em ending appears after a soft consonant' }],
  },
  {
    end: 'ju',
    readings: [
      {
        case: 'I',
        number: 'sg',
        gender: 'f',
        note: 'the alternative instrumental of a feminine i-noun: noću, ljubavlju',
      },
    ],
  },
  {
    end: 'a',
    readings: [
      { case: 'G', number: 'sg', gender: 'm' },
      {
        case: 'A',
        number: 'sg',
        gender: 'm',
        note: 'for a living being, whose accusative copies the genitive',
      },
      { case: 'G', number: 'sg', gender: 'n' },
      { case: 'N', number: 'sg', gender: 'f' },
      { case: 'N', number: 'pl', gender: 'n' },
      { case: 'G', number: 'pl' },
    ],
  },
  {
    end: 'e',
    readings: [
      { case: 'G', number: 'sg', gender: 'f' },
      { case: 'N', number: 'pl', gender: 'f' },
      { case: 'A', number: 'pl', gender: 'f' },
      { case: 'A', number: 'pl', gender: 'm' },
      { case: 'V', number: 'sg', gender: 'm' },
    ],
  },
  {
    end: 'i',
    readings: [
      { case: 'N', number: 'pl', gender: 'm' },
      { case: 'D', number: 'sg', gender: 'f' },
      { case: 'L', number: 'sg', gender: 'f' },
      {
        case: 'G',
        number: 'sg',
        gender: 'f',
        note: 'if it is an i-declension noun such as stvar or noć',
      },
      { case: 'N', number: 'pl', gender: 'f' },
    ],
  },
  {
    end: 'u',
    readings: [
      { case: 'A', number: 'sg', gender: 'f' },
      { case: 'D', number: 'sg', gender: 'm' },
      { case: 'L', number: 'sg', gender: 'm' },
      { case: 'D', number: 'sg', gender: 'n' },
      { case: 'L', number: 'sg', gender: 'n' },
      { case: 'V', number: 'sg', gender: 'm', note: 'after a soft consonant: prijatelju' },
    ],
  },
  {
    end: 'o',
    readings: [
      { case: 'N', number: 'sg', gender: 'n' },
      { case: 'A', number: 'sg', gender: 'n' },
      { case: 'V', number: 'sg', gender: 'f' },
    ],
  },
];

const VERB_PRESENT: { end: string; person: 1 | 2 | 3; number: Number_ }[] = [
  { end: 'mo', person: 1, number: 'pl' },
  { end: 'te', person: 2, number: 'pl' },
  { end: 'm', person: 1, number: 'sg' },
  { end: 'š', person: 2, number: 'sg' },
];

/**
 * Every reading a surface form permits. Closed-class words are answered from
 * the table; everything else is read off its ending, and every reading the
 * ending allows is returned.
 */
export function analyzeForm(raw: string): WordReading {
  const surface = raw.trim();
  const w = surface.toLowerCase().replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '');
  if (!w) return { surface, candidates: [], unambiguous: false };

  const closed = CLOSED[w];
  if (closed) {
    return {
      surface,
      candidates: closed.map((c) => ({ ...c })),
      unambiguous: closed.length === 1,
    };
  }

  const prep = PREPOSITION_CASE[w];
  if (prep) {
    return {
      surface,
      candidates: [
        {
          pos: 'preposition',
          lemma: w,
          note: `takes the ${prep.cases.map((c) => _CASE_NAME[c]).join(' or the ')} — ${prep.note}`,
        },
      ],
      unambiguous: prep.cases.length === 1,
    };
  }

  const candidates: FormAnalysis[] = [];

  // Infinitive and l-participle are unmistakable, so they go first.
  if (/(ti|ći)$/.test(w) && w.length > 3) {
    candidates.push({ pos: 'verb', tense: 'infinitive', lemma: w, note: 'the dictionary form' });
  }
  const lp = /^(.*)(o|la|lo|li|le)$/.exec(w);
  if (lp && /l$|la$|lo$|li$|le$/.test(w) && w.length > 3) {
    const g: Gender | undefined = w.endsWith('la')
      ? 'f'
      : w.endsWith('lo')
        ? 'n'
        : w.endsWith('o')
          ? 'm'
          : undefined;
    if (/l(a|o|i|e)$|[^l]o$/.test(w)) {
      candidates.push({
        pos: 'verb',
        tense: 'past participle',
        ...(g ? { gender: g } : {}),
        number: /l[ie]$/.test(w) ? 'pl' : 'sg',
        note: 'the past participle — it agrees with the SUBJECT in gender and number, and needs sam/si/je beside it',
      });
    }
  }

  for (const v of VERB_PRESENT) {
    if (w.endsWith(v.end) && w.length > v.end.length + 1) {
      candidates.push({
        pos: 'verb',
        tense: 'present',
        person: v.person,
        number: v.number,
        note: `the ${v.person}${v.person === 1 ? 'st' : v.person === 2 ? 'nd' : 'rd'} person ${v.number === 'sg' ? 'singular' : 'plural'} present ending`,
      });
      break;
    }
  }

  for (const rule of NOUN_ENDINGS) {
    if (!w.endsWith(rule.end)) continue;
    if (w.length <= rule.end.length + 1) continue;
    for (const r of rule.readings) candidates.push({ pos: 'noun', ...r });
    break;
  }

  if (candidates.length === 0) {
    // Consonant-final: the nominative of a masculine noun, or of a feminine
    // i-noun. Both, because the spelling genuinely does not decide.
    if (!isVowel(w.slice(-1))) {
      candidates.push(
        {
          pos: 'noun',
          case: 'N',
          number: 'sg',
          gender: 'm',
          lemma: w,
          note: 'the dictionary form of a masculine noun',
        },
        {
          pos: 'noun',
          case: 'A',
          number: 'sg',
          gender: 'm',
          note: 'for a thing, whose accusative copies the nominative',
        },
        {
          pos: 'noun',
          case: 'N',
          number: 'sg',
          gender: 'f',
          lemma: w,
          note: 'if it is a feminine i-declension noun such as stvar or noć',
        },
      );
    }
  }

  return { surface, candidates, unambiguous: candidates.length === 1 };
}

/** One plain-English line for a reading, in the app's voice. */
export function describeReading(a: FormAnalysis): string {
  if (a.case && a.number) {
    const n = a.number === 'sg' ? 'singular' : 'plural';
    return `${_CASE_NAME[a.case]} ${n} — ${_CASE_QUESTION[a.case]}`;
  }
  if (a.tense) return `${a.tense}${a.note ? '' : ''}`;
  return a.note || a.pos;
}
