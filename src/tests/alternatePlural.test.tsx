// `sat` has two plurals by meaning: sati (hours: pet sati) and satovi (watches and
// clocks: skupi satovi). The engine knew only sati, so the owner's case chart — which
// correctly says "skupi satovi" — disagreed with the engine on exactly one noun
// (2026-10-29). Both are standard; the declension now shows both.
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, within } from '@testing-library/react';
import React from 'react';
import { findSerbism } from '../../functions/api/_serbisms.js';
import { containsCyrillic } from '../../functions/api/_croatianGuard.js';
import { decline, CASES } from '../lib/croatianMorphology';
import { ALTERNATE_PLURALS } from '../lib/croatianLexicalClasses';
import { DECLENSION_ID } from '../lib/referenceDesk';
import ReferenceDesk from '../components/learn/ReferenceDesk';
import LocalMorphology from '../components/learn/LocalMorphology';

afterEach(cleanup);

describe('sat declines with both plurals', () => {
  const d = decline('sat', 'm')!;
  it('the main table is unchanged: the hours plural, and the singular', () => {
    expect(d.forms.Nsg).toBe('sat');
    expect(d.forms.Gsg).toBe('sata');
    expect(d.forms.Npl).toBe('sati');
    expect(d.forms.Gpl).toBe('sati'); // pet sati
    expect(d.forms.Ipl).toBe('satima');
  });
  it('the second plural — watches and clocks — is attached, in full', () => {
    expect(d.alternatePlural?.meaning).toBe('watches and clocks');
    expect(d.alternatePlural?.forms).toEqual({
      Npl: 'satovi',
      Gpl: 'satova',
      Dpl: 'satovima',
      Apl: 'satove',
      Vpl: 'satovi',
      Lpl: 'satovima',
      Ipl: 'satovima',
    });
  });
  it('the note says both plurals and what each means', () => {
    expect(d.note).toMatch(/sati for hours/);
    expect(d.note).toMatch(/satovi for watches and clocks/);
  });
  it('a copy: mutating a returned table cannot change the data', () => {
    d.alternatePlural!.forms.Npl = 'x';
    expect(decline('sat', 'm')!.alternatePlural!.forms.Npl).toBe('satovi');
    expect(ALTERNATE_PLURALS.sat!.forms.Npl).toBe('satovi');
  });
  it('every form is clean Croatian: no Cyrillic, no Serbism', () => {
    for (const f of Object.values(ALTERNATE_PLURALS.sat!.forms)) {
      expect(containsCyrillic(f), f).toBe(false);
      expect(findSerbism(f), f).toBeFalsy();
    }
  });
  it('an ordinary noun has no alternate, and its note is untouched', () => {
    expect(decline('grad', 'm')!.alternatePlural).toBeUndefined();
    expect(decline('škola', 'f')!.alternatePlural).toBeUndefined();
  });
});

describe('both surfaces that show a declension show the second plural', () => {
  const caseNames = () => CASES.length;
  it('the reference desk declension panel', () => {
    render(<ReferenceDesk initialOpenId={DECLENSION_ID} />);
    const input = screen.getByTestId('rd-declension-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'sat' } });
    // sat is in the engine's gender lists, so no gender question is asked
    const alt = screen.getByTestId('alternate-plural');
    expect(alt.textContent).toContain('watches and clocks');
    expect(alt.textContent).toContain('satovi');
    expect(alt.textContent).toContain('satovima');
    expect(caseNames()).toBe(7);
    // the main table still shows the hours plural
    expect(
      within(screen.getByTestId('rd-declension-table')).getAllByTestId('rd-case-row')[0]!
        .textContent,
    ).toContain('sati');
  });
  it('the tap sheet’s full declension', () => {
    render(<LocalMorphology word="sat" />);
    const alt = screen.getByTestId('alternate-plural');
    expect(alt.textContent).toContain('satovi');
  });
  it('no other noun shows one', () => {
    render(<LocalMorphology word="grad" />);
    expect(screen.queryByTestId('alternate-plural')).toBeNull();
  });
});
