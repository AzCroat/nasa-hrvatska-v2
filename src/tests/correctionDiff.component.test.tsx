// src/tests/correctionDiff.component.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { DiffSpan } from '../components/practice/DiffSpan';
import { CorrectionDiff } from '../components/practice/CorrectionDiff';

describe('DiffSpan', () => {
  it('renders strikethrough original + insert corrected', () => {
    render(<DiffSpan original="mama" corrected="majku" note="accusative ending" index={0} />);
    const del = screen.getByText('mama');
    const ins = screen.getByText('majku');
    expect(del.tagName).toBe('DEL');
    expect(ins.tagName).toBe('INS');
  });

  it('tap on DiffSpan reveals the note popover', () => {
    render(<DiffSpan original="mama" corrected="majku" note="accusative ending" index={0} />);
    expect(screen.queryByText('accusative ending')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('accusative ending')).toBeInTheDocument();
  });

  it('Escape key dismisses an open popover', () => {
    render(<DiffSpan original="mama" corrected="majku" note="accusative ending" index={0} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('accusative ending')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByText('accusative ending')).not.toBeInTheDocument();
  });

  it('change without a note renders no role=button (non-interactive marker)', () => {
    render(<DiffSpan original="mama" corrected="majku" index={0} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByText('mama').tagName).toBe('DEL');
  });

  // SP6b: error-type color coding
  it('SP6b: renders a colored dot when errorType is provided', () => {
    render(<DiffSpan original="mama" corrected="majku" errorType="case" index={0} />);
    expect(screen.getByTestId('diff-dot-0')).toBeInTheDocument();
  });

  it('SP6b: no dot when errorType is omitted (backward compat)', () => {
    render(<DiffSpan original="mama" corrected="majku" index={0} />);
    expect(screen.queryByTestId('diff-dot-0')).not.toBeInTheDocument();
  });

  it('SP6b: popover shows an error-type tag when both note and errorType are present', () => {
    render(
      <DiffSpan
        original="mama"
        corrected="majku"
        note="accusative ending"
        errorType="case"
        index={0}
      />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('diff-tag-0')).toBeInTheDocument();
    expect(screen.getByTestId('diff-tag-0')).toHaveTextContent(/case/i);
  });

  it('SP6b: errorType is reflected in data-diff-error-type for analytics', () => {
    const { container } = render(
      <DiffSpan original="mama" corrected="majku" errorType="aspect" index={0} />,
    );
    expect(container.querySelector('[data-diff-error-type="aspect"]')).toBeInTheDocument();
  });

  it('SP6b: data-diff-error-type is "unspecified" when errorType is absent', () => {
    const { container } = render(<DiffSpan original="mama" corrected="majku" index={0} />);
    expect(container.querySelector('[data-diff-error-type="unspecified"]')).toBeInTheDocument();
  });
});

describe('CorrectionDiff', () => {
  it('renders one DiffSpan for one change', () => {
    render(
      <CorrectionDiff
        originalText="Imam mama danas."
        correctedText="Imam majku danas."
        changes={[{ original: 'mama', corrected: 'majku', note: 'acc' }]}
      />,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('mama').tagName).toBe('DEL');
    expect(screen.getByText('majku').tagName).toBe('INS');
  });

  it('no changes renders correctedText as plain prose with no diff markup', () => {
    render(<CorrectionDiff originalText="Imam mama." correctedText="Imam majku." changes={[]} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByText('mama')).not.toBeInTheDocument();
    expect(screen.getByText('Imam majku.')).toBeInTheDocument();
  });

  it('two non-overlapping changes renders two DiffSpans interleaved with plain text', () => {
    render(
      <CorrectionDiff
        originalText="Imam mama i tata."
        correctedText="Imam majku i tatu."
        changes={[
          { original: 'mama', corrected: 'majku', note: 'A' },
          { original: 'tata', corrected: 'tatu', note: 'B' },
        ]}
      />,
    );
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByText(/Imam/)).toBeInTheDocument();
  });
});

// ── WCAG contrast (regression guard, 2026-08-22) ─────────────────────────────
//
// The <del> carried `opacity: 0.85` on #c0392b. axe-core 4.13 flagged it as a
// serious WCAG 2.1 AA failure and was right: axe blends the foreground against
// the background by element opacity, so the learner actually saw #c9574b —
// 4.24:1, under the 4.5:1 minimum. axe 4.12 scored the UNBLENDED colour and
// missed it, so it shipped for a while.
//
// The E2E axe scan only catches this while the installed axe-core keeps
// modelling opacity, and only on the one screen it scans. This computes the
// blended ratio directly from what the component renders, so the rule holds
// regardless of scanner version.
describe('DiffSpan contrast (WCAG 2.1 AA)', () => {
  const srgbToLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const luminance = ([r, g, b]: number[]) =>
    0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
  /** Composite a foreground over a background at `alpha`, as a browser paints it. */
  const blend = (fg: number[], alpha: number, bg: number[]) =>
    fg.map((f, i) => Math.round(alpha * f + (1 - alpha) * bg[i]));
  const contrast = (fg: number[], bg: number[]) => {
    const [hi, lo] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
    return (hi + 0.05) / (lo + 0.05);
  };
  const parseRgb = (css: string): number[] => {
    const m = css.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
    const hex = css.replace('#', '');
    return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  };
  const WHITE = [255, 255, 255];

  /** Effective ratio against white, honouring any inline opacity — the number
   *  a real viewer experiences, and the one axe computes. */
  function effectiveContrast(el: HTMLElement) {
    const alpha = el.style.opacity === '' ? 1 : Number(el.style.opacity);
    return contrast(blend(parseRgb(el.style.color), alpha, WHITE), WHITE);
  }

  it('the struck-through original clears 4.5:1 as actually painted', () => {
    render(<DiffSpan original="tata" corrected="tatu" note="accusative" index={0} />);
    const del = screen.getByText('tata');
    // Guard the cause, not just the symptom: a fractional opacity here is what
    // silently drags a passing colour under the threshold.
    expect(del.style.opacity === '' || Number(del.style.opacity) === 1).toBe(true);
    expect(effectiveContrast(del)).toBeGreaterThanOrEqual(4.5);
  });

  it('the corrected insertion clears 4.5:1 as actually painted', () => {
    render(<DiffSpan original="tata" corrected="tatu" note="accusative" index={0} />);
    expect(effectiveContrast(screen.getByText('tatu'))).toBeGreaterThanOrEqual(4.5);
  });

  it('the helper reproduces the exact ratio axe reported for the old style', () => {
    // Pins the maths itself: axe said 4.24 for #c0392b at 0.85 over white.
    // If this drifts, the two assertions above are measuring the wrong thing.
    const old = contrast(blend([0xc0, 0x39, 0x2b], 0.85, WHITE), WHITE);
    expect(old).toBeCloseTo(4.24, 2);
    expect(old).toBeLessThan(4.5);
  });
});
