// ─── CaseChartVisual ──────────────────────────────────────────────────────────
// The owner's case chart as a lesson slide (2026-10-29): seven cases down the
// side, Feminine / Neuter / Masculine across, the question words in Croatian and
// English, and example sentences with the noun's ending marked. It is a real
// <table> (row and column headers), because the thing a learner does with it is
// read ACROSS a row and DOWN a column, which is what a table is for.
//
// What carries meaning is text and underline, never colour alone: the changed
// ending is bold, underlined AND tinted, and a picked-out row says "this lesson"
// in words as well as a tint. Colours are theme tokens only (defined in both
// themes). The table scrolls sideways inside its own box on a narrow screen with
// the case column pinned, so the page itself never overflows.

import React from 'react';

export interface ChartMark {
  /** The word as it stands in this case (a noun or an adjective). */
  word: string;
  /** Noun: its nominative singular. Adjective: its stem. The ending is what differs. */
  base: string;
  kind: 'n' | 'a';
  /** Optional: the ending when it is longer than what follows the shared stem (more → morem: -em). */
  end?: string;
}
export interface ChartLine {
  /** The whole sentence. */
  hr: string;
  /** Every word whose ending is marked, in reading order. */
  marks: ChartMark[];
}
export interface ChartRow {
  key: string;
  name: string;
  nameEn: string;
  asks: Array<{ hr: string; en: string }>;
  cells: ChartLine[][];
}
export interface CaseChartSlide {
  kind: 'case-chart';
  title?: string;
  alt: string;
  caption?: string;
  /** Row key(s) this lesson is about: 'Lsg', or ['Dsg', 'Lsg'] for a lesson on two cases. */
  highlight?: string | string[] | null;
  columns: Array<{ key: string; hr: string; en: string }>;
  rows: ChartRow[];
}

/** Letters of `word` after the stem it shares with `base`: the ending that changed. */
export function endingOf(word: string, base: string): string {
  let i = 0;
  while (i < word.length && i < base.length && word[i] === base[i]) i++;
  return word.slice(i);
}

function Sentence({ line }: { line: ChartLine }) {
  const out: React.ReactNode[] = [];
  let from = 0;
  line.marks.forEach((m, i) => {
    const at = line.hr.indexOf(m.word, from);
    if (at < 0) return;
    const end = m.end ?? endingOf(m.word, m.base);
    const stem = m.word.slice(0, m.word.length - end.length);
    out.push(line.hr.slice(from, at));
    out.push(
      <strong key={i} data-testid="chart-word">
        {stem}
        {end && (
          <span
            data-testid="chart-ending"
            style={{
              color: 'var(--ink-accent)',
              textDecoration: 'underline',
              textUnderlineOffset: 2,
            }}
          >
            {end}
          </span>
        )}
      </strong>,
    );
    from = at + m.word.length;
  });
  out.push(line.hr.slice(from));
  return <>{out}</>;
}

const CELL: React.CSSProperties = {
  padding: '8px 9px',
  verticalAlign: 'top',
  borderTop: '1px solid var(--card-b)',
  fontSize: 13,
  lineHeight: 1.45,
  color: 'var(--text)',
  textAlign: 'left',
};
const HEAD: React.CSSProperties = {
  ...CELL,
  borderTop: 'none',
  background: 'var(--surface-mute)',
  fontSize: 12,
};

export default function CaseChartVisual({ slide }: { slide: CaseChartSlide }) {
  return (
    <div data-testid="visual-case-chart">
      <div
        role="region"
        aria-label={slide.alt}
        tabIndex={0}
        style={{
          overflowX: 'auto',
          border: '1px solid var(--card-b)',
          borderRadius: 12,
          background: 'var(--card)',
        }}
      >
        <table style={{ borderCollapse: 'collapse', minWidth: 600, width: '100%' }}>
          <thead>
            <tr>
              <th
                scope="col"
                style={{
                  ...HEAD,
                  position: 'sticky',
                  left: 0,
                  zIndex: 1,
                  width: 138,
                  minWidth: 138,
                  maxWidth: 138,
                }}
              >
                Padeži <span style={{ fontWeight: 400, color: 'var(--subtext)' }}>· Cases</span>
              </th>
              {slide.columns.map((c) => (
                <th key={c.key} scope="col" style={HEAD}>
                  {c.hr} <span style={{ fontWeight: 400, color: 'var(--subtext)' }}>· {c.en}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slide.rows.map((row, i) => {
              const picked = Array.isArray(slide.highlight)
                ? slide.highlight.includes(row.key)
                : slide.highlight === row.key;
              const tint = picked ? 'var(--info-bg)' : 'var(--card)';
              return (
                <tr
                  key={row.key}
                  data-testid={`chart-row-${row.key}`}
                  aria-current={picked ? 'true' : undefined}
                  style={{ background: tint }}
                >
                  <th
                    scope="row"
                    style={{
                      ...CELL,
                      background: tint,
                      position: 'sticky',
                      left: 0,
                      zIndex: 1,
                      width: 138,
                      minWidth: 138,
                      maxWidth: 138,
                      fontWeight: 400,
                      boxShadow: picked ? 'inset 4px 0 0 var(--ink-accent)' : undefined,
                    }}
                  >
                    <div style={{ fontWeight: 800 }}>
                      {i + 1}. {row.name}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--subtext)' }}>{row.nameEn}</div>
                    {row.asks.map((a) => (
                      <div key={a.hr} style={{ marginTop: 4, fontSize: 12 }}>
                        <div style={{ fontWeight: 700 }}>{a.hr}</div>
                        <div style={{ fontStyle: 'italic', color: 'var(--subtext)' }}>{a.en}</div>
                      </div>
                    ))}
                    {picked && (
                      <div
                        data-testid="chart-this-lesson"
                        style={{
                          marginTop: 6,
                          fontSize: 11,
                          fontWeight: 800,
                          color: 'var(--ink-accent)',
                        }}
                      >
                        ◄ This lesson
                      </div>
                    )}
                  </th>
                  {row.cells.map((lines, ci) => (
                    <td key={ci} style={CELL}>
                      {lines.map((ln) => (
                        <div key={ln.hr} style={{ marginBottom: 3 }}>
                          <Sentence line={ln} />
                        </div>
                      ))}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 12, color: 'var(--subtext)', margin: '6px 2px 0' }}>
        On a small screen, swipe sideways to see every column.
      </p>
      {slide.caption && (
        <p style={{ fontSize: 14, color: 'var(--text)', margin: '8px 2px 0', lineHeight: 1.5 }}>
          {slide.caption}
        </p>
      )}
    </div>
  );
}
