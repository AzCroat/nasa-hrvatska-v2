// croatianMorphology.test.ts — the declension engine (owner recommendation 6,
// 2026-09-07).
//
// This file is where the CROATIAN is checked. Every expected form below is
// written out in full rather than derived from the same rules the code uses,
// because a test that recomputes the paradigm can only tell you the function is
// consistent with itself. A wrong form here is a wrong form put in front of a
// learner, which the app's content rules treat as worse than no form at all.
//
// The paradigms pinned are the ones the app's own A1–B1 content uses, chosen to
// cover each rule that can go wrong: the fleeting a, palatalization in the
// vocative, sibilarization in the plural (and its absence in the genitive and
// accusative plural), soft stems in the instrumental, the -ov-/-ev- long plural
// of monosyllables, the feminine dative/locative, and the genitive-plural
// epenthesis.
import { describe, it, expect } from 'vitest';
import {
  decline,
  analyzeForm,
  describeReading,
  CASE_NAME,
  CASE_QUESTION,
  CASES,
  PREPOSITION_CASE,
} from '../lib/croatianMorphology';
import { IRREGULAR } from '../lib/croatianIrregulars';
import { CLOSED } from '../lib/croatianClosedClass';
import { findSerbism } from '../../functions/api/_serbisms.js';
import { containsCyrillic } from '../../functions/api/_croatianGuard.js';

const forms = (lemma: string, gender?: 'm' | 'f' | 'n') => decline(lemma, gender)!.forms;

describe('masculine nouns', () => {
  it('grad — a hard monosyllable takes the long -ov- plural', () => {
    expect(forms('grad')).toMatchObject({
      Nsg: 'grad',
      Gsg: 'grada',
      Dsg: 'gradu',
      Asg: 'grad',
      Vsg: 'grade',
      Lsg: 'gradu',
      Isg: 'gradom',
      Npl: 'gradovi',
      Gpl: 'gradova',
      Dpl: 'gradovima',
      Apl: 'gradove',
      Lpl: 'gradovima',
      Ipl: 'gradovima',
    });
  });

  it('muž — a SOFT monosyllable takes -ev- and the instrumental -em', () => {
    expect(forms('muž')).toMatchObject({
      Gsg: 'muža',
      Vsg: 'mužu',
      Isg: 'mužem',
      Npl: 'muževi',
      Gpl: 'muževa',
      Apl: 'muževe',
    });
  });

  it('učenik — sibilarization reaches the -i and -ima plurals and NOT the genitive or accusative', () => {
    expect(forms('učenik')).toMatchObject({
      Vsg: 'učeniče', // palatalization, k → č
      Npl: 'učenici', // sibilarization, k → c
      Dpl: 'učenicima',
      Gpl: 'učenika', // NOT učenica — that is a different word
      Apl: 'učenike',
    });
  });

  it('prijatelj — a polysyllabic soft stem: short plural, -em, vocative -u', () => {
    expect(forms('prijatelj')).toMatchObject({
      Gsg: 'prijatelja',
      Vsg: 'prijatelju',
      Isg: 'prijateljem',
      Npl: 'prijatelji',
      Gpl: 'prijatelja',
      Dpl: 'prijateljima',
      Apl: 'prijatelje',
    });
  });

  it('momak — the fleeting a drops before every vowel ending', () => {
    expect(forms('momak')).toMatchObject({ Gsg: 'momka', Dsg: 'momku', Isg: 'momkom' });
  });

  it('borac — and so does -ac', () => {
    expect(forms('borac')).toMatchObject({ Gsg: 'borca', Isg: 'borcem' });
  });

  it('the fleeting-a rule does NOT fire on words that keep their a', () => {
    // The general "a between two consonants" statement destroys all of these.
    expect(forms('sat')!.Gsg).toBe('sata');
    expect(forms('rat')!.Gsg).toBe('rata');
    expect(forms('znak')!.Gsg).toBe('znaka');
    expect(forms('mrak')!.Gsg).toBe('mraka');
    expect(forms('stan')!.Gsg).toBe('stana');
    expect(forms('grad')!.Gsg).toBe('grada');
  });

  it('stric — c is soft for the instrumental and hard for the vocative', () => {
    expect(forms('stric')).toMatchObject({ Isg: 'stricem', Vsg: 'striče' });
  });

  it('states the animacy rule rather than guessing it', () => {
    const d = decline('grad')!;
    expect(d.forms.Asg).toBe('grad');
    expect(d.note).toMatch(/living being/i);
  });
});

describe('neuter nouns', () => {
  it('selo — a hard -o stem', () => {
    expect(forms('selo')).toMatchObject({
      Nsg: 'selo',
      Gsg: 'sela',
      Dsg: 'selu',
      Asg: 'selo',
      Isg: 'selom',
      Npl: 'sela',
      Gpl: 'sela',
      Dpl: 'selima',
    });
  });

  it('more — an -e nominative makes the stem soft, so the instrumental is morem', () => {
    // Reading softness off the final consonant gives "morom": r is not soft.
    expect(forms('more')).toMatchObject({ Gsg: 'mora', Isg: 'morem', Npl: 'mora' });
    expect(forms('polje')!.Isg).toBe('poljem');
    expect(forms('sunce')!.Isg).toBe('suncem');
  });
});

describe('feminine nouns', () => {
  it('žena — the e-declension', () => {
    expect(forms('žena')).toMatchObject({
      Nsg: 'žena',
      Gsg: 'žene',
      Dsg: 'ženi',
      Asg: 'ženu',
      Vsg: 'ženo',
      Lsg: 'ženi',
      Isg: 'ženom',
      Npl: 'žene',
      Gpl: 'žena',
      Dpl: 'ženama',
      Apl: 'žene',
    });
  });

  it('knjiga — k, g and h become c, z and s before the dative/locative -i', () => {
    expect(forms('knjiga')).toMatchObject({ Dsg: 'knjizi', Lsg: 'knjizi', Gsg: 'knjige' });
    expect(forms('majka')!.Dsg).toBe('majci');
    expect(forms('svrha')!.Dsg).toBe('svrsi');
  });

  it('-ica takes the vocative -e, not -o', () => {
    expect(forms('učiteljica')!.Vsg).toBe('učiteljice');
    expect(forms('žena')!.Vsg).toBe('ženo');
  });

  it('sestra — the genitive plural breaks the cluster with an a', () => {
    // Without the epenthesis this is "sestra", which is the nominative SINGULAR.
    expect(forms('sestra')!.Gpl).toBe('sestara');
    expect(forms('djevojka')!.Gpl).toBe('djevojaka');
    // A single final consonant needs nothing inserted.
    expect(forms('knjiga')!.Gpl).toBe('knjiga');
  });

  it('stvar — the i-declension, where five singular cases look identical', () => {
    expect(forms('stvar', 'f')).toMatchObject({
      Nsg: 'stvar',
      Gsg: 'stvari',
      Dsg: 'stvari',
      Asg: 'stvar',
      Lsg: 'stvari',
      Npl: 'stvari',
      Gpl: 'stvari',
      Dpl: 'stvarima',
    });
    expect(decline('stvar', 'f')!.paradigm).toBe('i-feminine');
  });

  it('a consonant-final noun is masculine unless the caller says otherwise', () => {
    expect(decline('stvar')!.gender).toBe('m');
    expect(decline('stvar', 'f')!.gender).toBe('f');
  });
});

describe('irregulars are attested, regulars are marked computed', () => {
  it('čovjek / ljudi', () => {
    const d = decline('čovjek')!;
    expect(d.attested).toBe(true);
    expect(d.forms).toMatchObject({ Vsg: 'čovječe', Npl: 'ljudi', Apl: 'ljude' });
  });

  it('dijete / djeca', () => {
    expect(decline('dijete')!.forms).toMatchObject({ Gsg: 'djeteta', Npl: 'djeca', Apl: 'djecu' });
  });

  it('vrijeme — the ije shortens to e, which is standard Croatian and not ekavica', () => {
    expect(decline('vrijeme')!.forms).toMatchObject({ Gsg: 'vremena', Lsg: 'vremenu' });
  });

  it('otac and pas — the two that the productive rule deliberately does not cover', () => {
    expect(decline('otac')!.forms).toMatchObject({ Gsg: 'oca', Vsg: 'oče', Isg: 'ocem' });
    expect(decline('pas')!.forms).toMatchObject({ Gsg: 'psa', Npl: 'psi', Gpl: 'pasa' });
  });

  it('a computed table never claims to be attested', () => {
    expect(decline('grad')!.attested).toBe(false);
    expect(decline('čovjek')!.attested).toBe(true);
  });

  it('every irregular table is complete — all seven cases, both numbers', () => {
    for (const lemma of [
      'čovjek',
      'dijete',
      'brat',
      'ime',
      'vrijeme',
      'oko',
      'uho',
      'ruka',
      'noga',
      'kći',
      'mati',
      'otac',
      'pas',
    ]) {
      const f = decline(lemma)!.forms;
      for (const c of CASES) {
        expect(f[`${c}sg`], `${lemma} ${c}sg`).toBeTruthy();
        expect(f[`${c}pl`], `${lemma} ${c}pl`).toBeTruthy();
      }
    }
  });

  it('rejects a phrase or an empty string rather than inventing a paradigm', () => {
    expect(decline('')).toBeNull();
    expect(decline('dobar dan')).toBeNull();
  });
});

describe('form analysis states EVERY reading the ending permits', () => {
  it('knjige is the genitive singular AND the nominative and accusative plural', () => {
    const r = analyzeForm('knjige');
    const fem = r.candidates.filter((c) => c.gender === 'f');
    expect(fem.map((c) => `${c.case}${c.number}`)).toEqual(
      expect.arrayContaining(['Gsg', 'Npl', 'Apl']),
    );
    // The whole point: it must NOT present one of them as the answer.
    expect(r.unambiguous).toBe(false);
    expect(r.candidates.length).toBeGreaterThan(2);
  });

  it('-ima is dative, locative and instrumental plural, and says all three', () => {
    const cases = analyzeForm('gradovima').candidates.map((c) => c.case);
    expect(cases).toEqual(expect.arrayContaining(['D', 'L', 'I']));
    expect(analyzeForm('gradovima').candidates.every((c) => c.number === 'pl')).toBe(true);
  });

  it('-ama is the feminine plural specifically', () => {
    expect(analyzeForm('ženama').candidates.every((c) => c.gender === 'f')).toBe(true);
  });

  it('an unknown consonant-final word offers BOTH nominatives it could be', () => {
    const g = analyzeForm('stvar').candidates.map((c) => c.gender);
    expect(g).toContain('m');
    expect(g).toContain('f');
  });

  it('an infinitive is recognised as one', () => {
    expect(analyzeForm('raditi').candidates[0]).toMatchObject({
      pos: 'verb',
      tense: 'infinitive',
    });
    expect(analyzeForm('reći').candidates[0]!.tense).toBe('infinitive');
  });

  it('a past participle names the agreement rule learners get wrong', () => {
    const r = analyzeForm('radila').candidates.find((c) => c.tense === 'past participle')!;
    expect(r.gender).toBe('f');
    expect(r.note).toMatch(/SUBJECT/);
  });

  it('present-tense person endings', () => {
    expect(analyzeForm('radim').candidates.find((c) => c.tense === 'present')).toMatchObject({
      person: 1,
      number: 'sg',
    });
    expect(analyzeForm('radiš').candidates.find((c) => c.tense === 'present')).toMatchObject({
      person: 2,
      number: 'sg',
    });
    expect(analyzeForm('radimo').candidates.find((c) => c.tense === 'present')).toMatchObject({
      person: 1,
      number: 'pl',
    });
  });

  it('strips punctuation and is case-insensitive', () => {
    expect(analyzeForm('  Knjige,  ').candidates.length).toBe(
      analyzeForm('knjige').candidates.length,
    );
  });

  it('an empty tap returns nothing rather than a guess', () => {
    expect(analyzeForm('   ').candidates).toEqual([]);
    expect(analyzeForm('!!').candidates).toEqual([]);
  });
});

describe('closed classes are answered exactly, because rules could never guess them', () => {
  it('the enclitics name their case and their second-position rule', () => {
    const ga = analyzeForm('ga').candidates[0]!;
    expect(ga.pos).toBe('clitic');
    expect(ga.case).toBe('A');
    expect(ga.note).toMatch(/second position/);
  });

  it('je is genuinely two words and both are offered', () => {
    const r = analyzeForm('je');
    expect(r.unambiguous).toBe(false);
    expect(r.candidates.map((c) => c.lemma)).toEqual(expect.arrayContaining(['biti', 'ona']));
  });

  it('sam names the stressed homograph rather than letting it pass silently', () => {
    expect(analyzeForm('sam').candidates[0]!.note).toMatch(/alone/);
  });

  it('mi and ti are each a pronoun and a clitic', () => {
    expect(analyzeForm('mi').candidates.map((c) => c.pos)).toEqual(['pronoun', 'clitic']);
    expect(analyzeForm('ti').candidates.map((c) => c.pos)).toEqual(['pronoun', 'clitic']);
  });

  it('ne and li carry their word-order rules — the fixed facts of Croatian order', () => {
    expect(analyzeForm('ne').candidates[0]!.note).toMatch(/before its verb/);
    expect(analyzeForm('li').candidates[0]!.note).toMatch(/follows the verb/);
  });
});

describe('prepositions state the case they govern', () => {
  it('u and na are the two-case prepositions and say why', () => {
    const u = analyzeForm('u').candidates[0]!;
    expect(u.pos).toBe('preposition');
    expect(u.note).toMatch(/accusative/);
    expect(u.note).toMatch(/locative/);
    expect(analyzeForm('u').unambiguous).toBe(false);
  });

  it('a one-case preposition is stated flatly', () => {
    expect(analyzeForm('iz').unambiguous).toBe(true);
    expect(analyzeForm('iz').candidates[0]!.note).toMatch(/genitive/);
  });

  it('unatoč takes the DATIVE — the error the app’s own content rules call out', () => {
    expect(PREPOSITION_CASE['unatoč']!.cases).toEqual(['D']);
  });

  it('every entry names at least one real case', () => {
    for (const [word, v] of Object.entries(PREPOSITION_CASE)) {
      expect(v.cases.length, word).toBeGreaterThan(0);
      for (const c of v.cases) expect(CASE_NAME[c], word).toBeTruthy();
      expect(v.note.length, word).toBeGreaterThan(2);
    }
  });
});

describe('the English bridge is present on every case', () => {
  it('each case has a plain-English question, never an unglossed term', () => {
    for (const c of CASES) {
      expect(CASE_QUESTION[c]).toBeTruthy();
      expect(CASE_QUESTION[c]).not.toMatch(/genitive|dative|locative|instrumental/i);
    }
  });

  it('describeReading names the case and the question it answers', () => {
    expect(describeReading({ pos: 'noun', case: 'G', number: 'sg' })).toBe(
      'genitive singular — whose, of what, or after a quantity',
    );
  });
});

// ── The Croatian in these modules is guarded ────────────────────────────────
//
// `scripts/lintCroatianText.mjs` cannot see these files: its field regex matches
// names like `hr`, `q` and `title`, and every Croatian string here sits under a
// case key (`Nsg`, `Gpl`) or is generated at call time from a lemma the caller
// supplies. Adding the files to TARGETS would produce exactly the trap CLAUDE.md
// warns about — a file everybody believes is linted and is not. So the same two
// checks run here instead, against the SHARED rules the lint and the live-output
// sweep both use, over the strings the modules actually produce.
describe('no Cyrillic and no Serbian variants reach a learner from here', () => {
  const strings: string[] = [];
  for (const lemma of Object.keys(IRREGULAR)) {
    const d = decline(lemma)!;
    strings.push(lemma, ...Object.values(d.forms), d.note || '');
  }
  for (const [w, v] of Object.entries(PREPOSITION_CASE)) strings.push(w, v.note);
  for (const list of Object.values(CLOSED))
    for (const c of list) strings.push(c.note, c.lemma || '');
  // And the computed paradigms of a spread of real lemmas, since those forms are
  // built by the rules rather than typed.
  for (const l of [
    'grad',
    'muž',
    'učenik',
    'prijatelj',
    'žena',
    'knjiga',
    'selo',
    'more',
    'stvar',
  ]) {
    strings.push(...Object.values(decline(l)!.forms));
  }

  it('is a real corpus, not an empty loop', () => {
    expect(strings.length).toBeGreaterThan(400);
  });

  it('contains no Cyrillic anywhere, including the English notes', () => {
    for (const s of strings) expect(containsCyrillic(s), s).toBe(false);
  });

  it('contains no Serbism', () => {
    for (const s of strings) {
      const hit = findSerbism(s);
      expect(hit, `${s} → ${hit && hit.use}`).toBeFalsy();
    }
  });
});
