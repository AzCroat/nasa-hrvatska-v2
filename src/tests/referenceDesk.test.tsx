/**
 * referenceDesk.test.tsx — the reference desk shows what the engines already
 * knew, and never shows Croatian it made up.
 *
 * WHAT PHASE 3 ADDED, AND WHAT COULD GO WRONG WITH IT. Three finished pieces of
 * machinery rendered almost nowhere: the eight concept cards (visible only as a
 * one-second pre-drill intro), `decline()` (reachable only by tapping a word in
 * one reader), and `PREPOSITION_CASE` — 37 entries read by `analyzeForm` and
 * rendered by nothing at all. None of that needed authoring; it needed a door.
 *
 * The risk in opening that door is NOT that a panel fails to render. It is that
 * a panel renders WRONG CROATIAN confidently. `decline()` documents its own
 * limit — a consonant-final noun is masculine (`grad`) or feminine i-declension
 * (`stvar`) and the spelling cannot tell, so "the caller knows, the rules do
 * not". Measured before any UI was written: `decline('stvar')` with no gender
 * returns `stvara` and `stvarovi`, invented forms for a real word. A desk that
 * silently guesses would put those in front of a learner, and nothing else in
 * the app would notice. Hence the ambiguity block below.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import { findSerbism } from '../../functions/api/_serbisms.js';
import { containsCyrillic } from '../../functions/api/_croatianGuard.js';
import {
  referenceSources,
  REFERENCE_TOOLS,
  PRIMER_ID,
  DECLENSION_ID,
  PREPOSITIONS_ID,
} from '../lib/referenceDesk';
import { CASE_CONCEPTS } from '../data/caseConcepts';
import { PREPOSITION_CASE, decline, CASES } from '../lib/croatianMorphology';
import { buildLearningIndex, searchLearningIndex } from '../lib/learningIndex';
import ReferenceDesk from '../components/learn/ReferenceDesk';

afterEach(cleanup);

// ───────────────────────────────────────────────────────────────────────────
// 1. THE PANELS ARE DERIVED, AND EVERY ONE OF THEM OPENS
// ───────────────────────────────────────────────────────────────────────────

describe('the desk holds exactly what the data says it holds', () => {
  it('derives a concept panel from every card, plus the primer and the tools', () => {
    const srcs = referenceSources();
    // Derived, not listed: authoring a ninth card puts it on the desk and in
    // search with no second registration.
    expect(srcs).toHaveLength(CASE_CONCEPTS.length + 1 + REFERENCE_TOOLS.length);
    const ids = srcs.map((s) => s.id);
    for (const c of CASE_CONCEPTS) expect(ids).toContain(c.id);
    expect(ids).toContain(PRIMER_ID);
    expect(ids).toContain(DECLENSION_ID);
    expect(ids).toContain(PREPOSITIONS_ID);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('renders a panel for EVERY source, and no source is left unopenable', () => {
    // Each source is opened the way SEARCH opens it — by initialOpenId — rather
    // than by clicking through one mounted desk. The first draft clicked every
    // header in turn and failed on the primer, which is open by default, so the
    // click closed it: a test artefact, not a defect, but it would have been
    // read as one.
    for (const s of referenceSources()) {
      const { unmount } = render(<ReferenceDesk initialOpenId={s.id} />);
      expect(screen.getByTestId(`rd-panel-${s.id}`), `no header for ${s.id}`).toBeTruthy();
      // Opening must produce a BODY WITH CONTENT IN IT. Asserting the wrapper
      // exists is not enough and was not enough: the wrapper renders whatever
      // its child returns, so a concept whose panel had silently become empty
      // passed this test. Found by mutation. Measured across all eleven panels
      // the smallest real body is 306 characters (the declension tool, mostly
      // controls) and the rest are 469+, so a 150 floor is reachable only by a
      // stub — a header with nothing behind it is the dead-route defect wearing
      // a different hat.
      const body = screen.getByTestId(`rd-open-${s.id}`);
      expect(body, `${s.id} has no body`).toBeTruthy();
      expect((body.textContent ?? '').trim().length, `${s.id} opened empty`).toBeGreaterThan(150);
      unmount();
    }
  });

  it('every reference row the index carries can be opened by the Center', () => {
    const index = buildLearningIndex({ references: referenceSources() });
    const refIds = new Set(referenceSources().map((s) => s.id));
    expect(index).toHaveLength(refIds.size);
    for (const e of index) {
      expect(e.target.kind).toBe('reference');
      if (e.target.kind === 'reference') expect(refIds.has(e.target.refId)).toBe(true);
    }
    // And the Center actually has an arm for that target kind — a source pin,
    // because a component test that never supplies one cannot see this.
    const center = readFileSync('src/components/learn/LearningCenter.tsx', 'utf8');
    expect(center).toContain('setDeskOpenId');
    expect(center).toMatch(/<ReferenceDesk\b/);
  });

  it('search reaches the concept card for a Croatian case name', () => {
    const index = buildLearningIndex({
      references: referenceSources(),
      screens: [
        { id: 'genitivedrill', label: 'Genitive Case', screen: 'genitivedrill', cefr: 'A1' },
      ],
    });
    const hits = searchLearningIndex(index, 'genitiv', { limit: 10 });
    const first = hits[0];
    expect(first, 'genitiv must find something').toBeTruthy();
    // The concept card answers "what IS it", which is the question a learner
    // typing a bare case name is asking. It must not sit below the drill.
    expect(first!.kind).toBe('concept');
    expect(first!.target.kind).toBe('reference');
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 2. THE DECLENSION PANEL NEVER INVENTS CROATIAN
// ───────────────────────────────────────────────────────────────────────────

describe('the declension panel is honest about what it knows', () => {
  function formsFor(): Record<string, string> {
    const out: Record<string, string> = {};
    for (const row of screen.getAllByTestId('rd-case-row')) {
      const c = row.getAttribute('data-case')!;
      const cells = row.querySelectorAll('td');
      out[`${c}sg`] = cells[1]!.textContent!.trim();
      out[`${c}pl`] = cells[2]!.textContent!.trim();
    }
    return out;
  }

  function openDeclension() {
    render(<ReferenceDesk initialOpenId={DECLENSION_ID} />);
    return screen.getByTestId('rd-declension-input') as HTMLInputElement;
  }

  it('declines a vowel-final noun with no ambiguity control at all', () => {
    openDeclension();
    // `knjiga` is unambiguously feminine; asking the learner would be noise.
    expect(screen.queryByTestId('rd-gender-choice')).toBeNull();
    const f = formsFor();
    expect(f.Nsg).toBe('knjiga');
    expect(f.Gsg).toBe('knjige');
    // Sibilarization in the dative/locative singular — the rule that makes this
    // engine worth rendering rather than hand-writing a table.
    expect(f.Dsg).toBe('knjizi');
    expect(f.Lsg).toBe('knjizi');
    expect(f.Ipl).toBe('knjigama');
  });

  it('ASKS for the gender of a consonant-final noun instead of guessing', () => {
    const input = openDeclension();
    fireEvent.change(input, { target: { value: 'stvar' } });
    // The whole point: left to guess, the engine returns `stvara` / `stvarovi`
    // for a real feminine noun. The control must be offered.
    expect(screen.getByTestId('rd-gender-choice')).toBeTruthy();
    expect(screen.getByTestId('rd-gender-m')).toBeTruthy();
    expect(screen.getByTestId('rd-gender-f')).toBeTruthy();
  });

  it('gives the i-declension once the learner says it is feminine', () => {
    const input = openDeclension();
    fireEvent.change(input, { target: { value: 'stvar' } });
    fireEvent.click(screen.getByTestId('rd-gender-f'));
    const f = formsFor();
    expect(f.Nsg).toBe('stvar');
    expect(f.Gsg).toBe('stvari');
    expect(f.Ipl).toBe('stvarima');
    // The masculine invention must be nowhere on screen.
    expect(Object.values(f)).not.toContain('stvara');
    expect(Object.values(f)).not.toContain('stvarovi');
  });

  it('says when a table came from the rules rather than the record', () => {
    openDeclension();
    expect(screen.getByTestId('rd-computed')).toBeTruthy();
    cleanup();
    // `čovjek` is one of the thirteen attested paradigms — its plural is a
    // different word entirely, so it must NOT claim to be regular.
    render(<ReferenceDesk initialOpenId={DECLENSION_ID} />);
    fireEvent.change(screen.getByTestId('rd-declension-input'), {
      target: { value: 'čovjek' },
    });
    expect(screen.queryByTestId('rd-computed')).toBeNull();
    expect(formsFor().Npl).toBe('ljudi');
  });

  it('says so plainly when the input is not a single noun', () => {
    const input = openDeclension();
    fireEvent.change(input, { target: { value: 'dobra knjiga' } });
    expect(screen.getByTestId('rd-declension-none')).toBeTruthy();
    expect(screen.queryByTestId('rd-declension-table')).toBeNull();
  });

  it('renders every table straight from the engine, never from its own copy', () => {
    // A second copy of the paradigm rules in the component would pass every
    // rendering test above at whatever rate its endings still matched.
    const input = openDeclension();
    for (const word of ['grad', 'more', 'sestra']) {
      fireEvent.change(input, { target: { value: word } });
      const engine = decline(word, word === 'grad' ? 'm' : undefined)!;
      const shown = formsFor();
      for (const c of CASES) {
        expect(shown[`${c}sg`]).toBe(engine.forms[`${c}sg`]);
        expect(shown[`${c}pl`]).toBe(engine.forms[`${c}pl`]);
      }
    }
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 3. THE PREPOSITION TABLE — 37 ENTRIES THAT NOTHING RENDERED
// ───────────────────────────────────────────────────────────────────────────

describe('the preposition table', () => {
  it('renders every preposition the engine knows, under every case it governs', () => {
    render(<ReferenceDesk initialOpenId={PREPOSITIONS_ID} />);
    const shown = screen.getAllByTestId('rd-prep');
    const expected = Object.values(PREPOSITION_CASE).reduce((n, i) => n + i.cases.length, 0);
    expect(shown).toHaveLength(expected);
    expect(Object.keys(PREPOSITION_CASE).length).toBeGreaterThanOrEqual(37);
  });

  it('lists a two-case preposition under BOTH of its cases', () => {
    render(<ReferenceDesk initialOpenId={PREPOSITIONS_ID} />);
    // `u` is the one every learner gets wrong: accusative for movement into,
    // locative for being inside. Showing it under one case would teach the error.
    const groups = screen.getAllByTestId('rd-prep-group');
    const withU = groups
      .filter((g) =>
        [...g.querySelectorAll('[data-testid="rd-prep"]')].some((p) =>
          p.textContent?.startsWith('u'),
        ),
      )
      .map((g) => g.getAttribute('data-case'));
    expect(withU).toContain('A');
    expect(withU).toContain('L');
  });
});

// ───────────────────────────────────────────────────────────────────────────
// 4. IT COSTS NOTHING, AND ITS CROATIAN IS CLEAN
// ───────────────────────────────────────────────────────────────────────────

describe('the desk costs nothing to consult', () => {
  beforeEach(() => localStorage.clear());

  it('writes nothing and fetches nothing across a full consultation', () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch' as never);
    const before = JSON.stringify(localStorage);
    render(<ReferenceDesk />);
    for (const s of referenceSources()) fireEvent.click(screen.getByTestId(`rd-panel-${s.id}`));
    fireEvent.click(screen.getByTestId(`rd-panel-${DECLENSION_ID}`));
    fireEvent.change(screen.getByTestId('rd-declension-input'), { target: { value: 'grad' } });
    expect(JSON.stringify(localStorage)).toBe(before);
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('imports no AI, award or progress-writing module', () => {
    for (const f of ['src/components/learn/ReferenceDesk.tsx', 'src/lib/referenceDesk.ts']) {
      const src = readFileSync(f, 'utf8');
      const imports = [...src.matchAll(/^import[^;]+from '([^']+)';/gm)].map((m) => m[1]!);
      for (const spec of imports) {
        expect(spec, `${f} imports ${spec}`).not.toMatch(
          /aiPost|aiFailure|useAward|statsReducer|completeExercise|firebase|contentClient/,
        );
      }
    }
  });

  it('keeps its Croatian match-keys clean, guarded here rather than by TARGETS', () => {
    // These sit in a bare nested record that `CRO_FIELD_RE` cannot match, so
    // adding the file to the lint's TARGETS would be the false-confidence trap.
    // Same answer as croatianMorphology: run the SHARED rules from in here.
    const terms = referenceSources().flatMap((s) => [...(s.keywords ?? []), s.title]);
    expect(terms.length).toBeGreaterThan(30);
    for (const t of terms) {
      expect(containsCyrillic(t), t).toBe(false);
      const hit = findSerbism(t);
      expect(hit, `${t} → ${hit?.use ?? ''}`).toBeNull();
    }
    // Positive controls: the guard can see both defects in this shape.
    expect(containsCyrillic('genиtiv')).toBe(true);
    expect(findSerbism('vreme')).not.toBeNull();
  });
});
