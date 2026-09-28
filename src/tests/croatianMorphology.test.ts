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
  knownGender,
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

  it('an UNKNOWN consonant-final noun is masculine unless the caller says otherwise', () => {
    // `zob` is feminine and deliberately in no list: the spelling alone cannot say.
    expect(decline('zob')!.gender).toBe('m');
    expect(decline('zob', 'f')!.gender).toBe('f');
    expect(knownGender('zob')).toBeNull();
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

describe('the fleeting -a in -ar nouns (2026-09-23)', () => {
  // FOUND BY VERIFYING BEFORE AUTHORING, not by a failing test: the engine
  // produced `u centaru`, which is not Croatian — the oblique singular drops the
  // a (centar, centra, centru) and it returns only in the genitive plural
  // (centara). `decline()` also backs the tap-a-word sheet, so that paradigm was
  // being shown to learners.
  it('centar drops the a in every oblique singular, and gets it back in the genitive plural', () => {
    const f = decline('centar')!.forms as unknown as Record<string, string>;
    expect(f.Nsg).toBe('centar');
    expect(f.Gsg).toBe('centra');
    expect(f.Dsg).toBe('centru');
    expect(f.Lsg).toBe('centru');
    expect(f.Isg).toBe('centrom');
    expect(f.Npl).toBe('centri');
    expect(f.Gpl).toBe('centara');
  });

  it('metar, litar and vjetar behave the same, and vjetar takes the long plural', () => {
    const m = decline('metar')!.forms as unknown as Record<string, string>;
    expect(m.Gsg).toBe('metra');
    expect(m.Lsg).toBe('metru');
    const l = decline('litar')!.forms as unknown as Record<string, string>;
    expect(l.Gsg).toBe('litra');
    const v = decline('vjetar')!.forms as unknown as Record<string, string>;
    expect(v.Gsg).toBe('vjetra');
    expect(v.Npl).toBe('vjetrovi');
  });

  it('ministar is ANIMATE, so its accusative singular copies the genitive', () => {
    const f = decline('ministar')!.forms as unknown as Record<string, string>;
    expect(f.Gsg).toBe('ministra');
    expect(f.Asg).toBe('ministra');
  });

  it('IT IS A LIST, NOT A RULE — mornar and zidar KEEP their a', () => {
    // The whole reason this cannot be generalised to -ar. Stated as a rule it
    // would produce `mornra`, the same class of damage as the general fleeting-a
    // rule turning `grad` into `grd`.
    const m = decline('mornar')!.forms as unknown as Record<string, string>;
    expect(m.Gsg).toBe('mornara');
    expect(m.Lsg).toBe('mornaru');
    const z = decline('zidar')!.forms as unknown as Record<string, string>;
    expect(z.Gsg).toBe('zidara');
  });

  it('and the regular consonant stems are untouched', () => {
    const g = decline('grad')!.forms as unknown as Record<string, string>;
    expect(g.Gsg).toBe('grada');
    expect(g.Lsg).toBe('gradu');
    expect(g.Npl).toBe('gradovi');
  });
});

describe('the fleeting -a in -ak is LEXICAL in BOTH directions (2026-09-23)', () => {
  // Found by printing every form before authoring the B2–C2 speaking sentences.
  // The rule drops the a for polysyllabic -ac/-ak, which is right for početak,
  // zaključak, naglasak and podatak — and WRONG for korak and stručnjak. It also
  // cannot know dolazak devoices its z, that tjedan has a fleeting a outside the
  // -ac/-ak scope, or that podatak sibilarizes in the plural. `decline()` backs
  // the tap-a-word sheet, so all five were being shown to learners.
  const f = (l: string) => decline(l)!.forms as unknown as Record<string, string>;

  it('korak and stručnjak KEEP their a — the rule over-applied', () => {
    expect(f('korak').Gsg).toBe('koraka');
    expect(f('korak').Lsg).toBe('koraku');
    expect(f('stručnjak').Gsg).toBe('stručnjaka');
    // Animate, so the accusative copies the genitive.
    expect(f('stručnjak').Asg).toBe('stručnjaka');
  });

  it('but sibilarization still reaches their -i and -ima plurals', () => {
    // Keeping the a must not also suppress the softening — two separate rules.
    expect(f('korak').Npl).toBe('koraci');
    expect(f('korak').Lpl).toBe('koracima');
    // …and NOT the genitive or accusative plural.
    expect(f('korak').Gpl).toBe('koraka');
    expect(f('korak').Apl).toBe('korake');
  });

  it('dolazak devoices its z before the k', () => {
    expect(f('dolazak').Gsg).toBe('dolaska');
    expect(f('dolazak').Lsg).toBe('dolasku'); // never dolazku
    expect(f('dolazak').Isg).toBe('dolaskom');
  });

  it('tjedan has a fleeting a outside the -ac/-ak scope', () => {
    expect(f('tjedan').Gsg).toBe('tjedna');
    expect(f('tjedan').Lsg).toBe('tjednu');
    expect(f('tjedan').Gpl).toBe('tjedana'); // the a returns
  });

  it('podatak sibilarizes to podaci/podacima, not podatcima', () => {
    expect(f('podatak').Gsg).toBe('podatka');
    expect(f('podatak').Npl).toBe('podaci');
    expect(f('podatak').Lpl).toBe('podacima');
    expect(f('podatak').Gpl).toBe('podataka');
  });

  it('and the words the RULE gets right are untouched', () => {
    // The list must not have quietly replaced the rule.
    expect(f('početak').Dsg).toBe('početku');
    expect(f('naglasak').Gsg).toBe('naglaska');
    expect(f('zaključak').Isg).toBe('zaključkom');
    expect(f('grad').Gsg).toBe('grada');
  });
});

// ── Wrong forms found by the speaking-curriculum authors (2026-09-28) ─────────
//
// Each was reported while verifying build sentences against decline(), then
// probed. The tap-a-word sheet and the Reference Desk had been showing every one
// of these to learners. Forms are written out in full, never recomputed.
describe('the lexical classes and the rules that read them (2026-09-28)', () => {
  const f = (w: string, g?: 'm' | 'f' | 'n') => decline(w, g)!.forms;

  it('a person or animal takes the genitive-shaped accusative; a thing does not', () => {
    expect(f('prijatelj').Asg).toBe('prijatelja');
    expect(f('djed').Asg).toBe('djeda');
    expect(f('gost').Asg).toBe('gosta');
    expect(f('borac').Asg).toBe('borca');
    expect(f('orao').Asg).toBe('orla');
    expect(f('grad').Asg).toBe('grad');
    expect(f('sponzor').Asg).toBe('sponzora');
    expect(f('stol').Asg).toBe('stol');
    expect(decline('prijatelj')!.note).toMatch(/person or an animal/);
  });

  it('family words, -čk/-tk/-šk stems and h after a vowel keep their consonant', () => {
    expect(f('baka')).toMatchObject({ Dsg: 'baki', Lsg: 'baki' });
    expect(f('seka').Dsg).toBe('seki');
    expect(f('mačka').Dsg).toBe('mački');
    expect(f('točka').Lsg).toBe('točki');
    expect(f('patka').Dsg).toBe('patki');
    expect(f('kruška').Lsg).toBe('kruški');
    expect(f('juha').Lsg).toBe('juhi');
    expect(f('snaha').Dsg).toBe('snahi');
    // …and the rule still fires where it belongs.
    expect(f('knjiga').Dsg).toBe('knjizi');
    expect(f('djevojka').Dsg).toBe('djevojci');
    expect(f('majka').Dsg).toBe('majci');
    expect(f('svrha').Dsg).toBe('svrsi');
  });

  it('a polysyllabic noun ending in a cluster inserts an a in the genitive plural', () => {
    // Without it the cell read "studenta" — the genitive SINGULAR.
    expect(f('student').Gpl).toBe('studenata');
    expect(f('projekt').Gpl).toBe('projekata');
    expect(f('klijent').Gpl).toBe('klijenata');
    expect(f('koncert').Gpl).toBe('koncerata');
    expect(f('dokument').Gpl).toBe('dokumenata');
    expect(f('bicikl').Gpl).toBe('bicikala');
    // …and it stays out of the clusters Croatian keeps, and of single consonants.
    expect(f('turist').Gpl).toBe('turista');
    expect(f('kontrast').Gpl).toBe('kontrasta');
    expect(f('prijatelj').Gpl).toBe('prijatelja');
    expect(f('problem').Gpl).toBe('problema');
    expect(f('stručnjak').Gpl).toBe('stručnjaka');
    // …and it does not touch the other cells.
    expect(f('student')).toMatchObject({ Gsg: 'studenta', Apl: 'studente', Npl: 'studenti' });
  });

  it('feminine genitive plurals the epenthetic a gets wrong', () => {
    expect(f('šetnja').Gpl).toBe('šetnji');
    expect(f('vožnja').Gpl).toBe('vožnji');
    expect(f('zemlja').Gpl).toBe('zemalja');
    expect(f('jakna').Gpl).toBe('jakni');
    expect(f('lopta').Gpl).toBe('lopti');
    // …and the epenthesis still fires where it belongs.
    expect(f('sestra').Gpl).toBe('sestara');
    expect(f('daska').Gpl).toBe('dasaka');
    expect(f('karta').Gpl).toBe('karata');
    expect(f('nedjelja').Gpl).toBe('nedjelja');
  });

  it('-ao is a masculine l-stem: posao → posla, poslovi', () => {
    expect(f('posao')).toMatchObject({
      Gsg: 'posla',
      Dsg: 'poslu',
      Isg: 'poslom',
      Npl: 'poslovi',
      Gpl: 'poslova',
      Lpl: 'poslovima',
    });
    expect(decline('posao')!.gender).toBe('m');
  });

  it('known feminine i-nouns decline as feminine without being told', () => {
    expect(f('pomoć')).toMatchObject({ Gsg: 'pomoći', Isg: 'pomoću', Dpl: 'pomoćima' });
    expect(f('noć').Gsg).toBe('noći');
    expect(f('radost').Gsg).toBe('radosti'); // the -ost rule
    expect(f('gost').Gsg).toBe('gosta'); // a monosyllabic -ost is not the suffix
    expect(knownGender('pomoć')).toBe('f');
    expect(knownGender('radost')).toBe('f');
  });

  it('plural exceptions both ways, and c softens before -evi', () => {
    expect(f('dan')).toMatchObject({ Npl: 'dani', Gpl: 'dana', Dpl: 'danima' });
    expect(f('gost').Npl).toBe('gosti');
    expect(f('tečaj')).toMatchObject({ Npl: 'tečajevi', Gpl: 'tečajeva' });
    expect(f('stric')).toMatchObject({ Npl: 'stričevi', Gpl: 'stričeva' });
    expect(f('zec').Npl).toBe('zečevi');
    expect(f('hrvat').Npl).toBe('hrvati'); // syllabic r: two syllables, short plural
    expect(f('vrt').Npl).toBe('vrtovi'); // one syllable, long plural
  });

  it('the a stays in rođak and ujak, and returns in every genitive plural', () => {
    expect(f('rođak')).toMatchObject({ Gsg: 'rođaka', Npl: 'rođaci', Gpl: 'rođaka' });
    expect(f('ujak').Gsg).toBe('ujaka');
    expect(f('momak').Gpl).toBe('momaka');
    expect(f('borac').Gpl).toBe('boraca');
    expect(f('početak').Gpl).toBe('početaka');
    expect(f('sudac')).toMatchObject({ Gsg: 'suca', Gpl: 'sudaca' });
  });

  it('feminine genitive plurals: consonant + b takes -i, syllabic r takes nothing', () => {
    expect(f('glazba').Gpl).toBe('glazbi');
    expect(f('molba').Gpl).toBe('molbi');
    expect(f('majka').Gpl).toBe('majki');
    expect(f('svrha').Gpl).toBe('svrha');
    expect(f('sestra').Gpl).toBe('sestara'); // the epenthesis still fires
    expect(f('djevojka').Gpl).toBe('djevojaka');
  });

  it('the i-declension instrumental fuses its j: radošću, noću, ljubavlju, riječju', () => {
    expect(f('radost').Isg).toBe('radošću');
    expect(f('noć').Isg).toBe('noću');
    expect(f('ljubav').Isg).toBe('ljubavlju');
    expect(f('riječ').Isg).toBe('riječju');
    expect(f('stvar').Isg).toBe('stvari'); // no certain fusion: keeps -i
    expect(f('sućut').Gsg).toBe('sućuti');
    expect(f('gost').Gpl).toBe('gostiju');
  });

  it('adjectival country names decline like adjectives', () => {
    expect(f('hrvatska')).toMatchObject({
      Gsg: 'hrvatske',
      Dsg: 'hrvatskoj',
      Asg: 'hrvatsku',
      Lsg: 'hrvatskoj',
      Isg: 'hrvatskom',
    });
    expect(f('njemačka').Lsg).toBe('njemačkoj');
    expect(decline('hrvatska')!.paradigm).toBe('adjectival');
  });

  it('every new form is clean Croatian', () => {
    const words = [
      'prijatelj',
      'baka',
      'mačka',
      'juha',
      'posao',
      'pomoć',
      'dan',
      'tečaj',
      'stric',
      'rođak',
      'borac',
      'sudac',
      'glazba',
      'majka',
      'hrvatska',
      'njemačka',
    ];
    for (const w of words)
      for (const form of Object.values(decline(w)!.forms)) {
        expect(findSerbism(form), `${w}: ${form}`).toBeFalsy();
        expect(containsCyrillic(form), `${w}: ${form}`).toBe(false);
      }
  });
});
