// ─── MotionRestVisual ─────────────────────────────────────────────────────────
// One picture for the single most common case mix-up: a preposition of place
// takes the ACCUSATIVE when something moves INTO the place (kamo? — where to?)
// and the LOCATIVE when it stays there (gdje? — where?). Left panel: a figure
// with an arrow going into a building. Right panel: the figure already inside.
//
// Everything that carries meaning is TEXT as well as colour or shape: each panel
// states its question, its case and "movement"/"no movement" in words, and the
// ending is underlined as well as coloured, so a learner who cannot tell the two
// colours apart (or reads in dark mode) loses nothing. The drawing is hidden from
// assistive technology and the slide's `alt` is the one description it reads.
//
// Colours are the app's own ink tokens (defined in both themes) — no literals.

import React from 'react';

export interface MotionRestPanel {
  /** The question this panel answers, in Croatian ("Kamo?"). */
  q: string;
  /** English gloss of the question. */
  qEn: string;
  /** "accusative" | "locative" — shown in words. */
  caseName: string;
  /** "movement" | "no movement" — shown in words. */
  motion: string;
  /** The Croatian sentence. */
  hr: string;
  /** The word inside `hr` whose ending the picture is about. */
  focus: string;
  /** English translation of the sentence. */
  en: string;
}

export interface MotionRestSlide {
  kind: 'motion-rest';
  title?: string;
  /** One sentence for a screen reader describing the whole picture. */
  alt: string;
  /** What to take away, shown under the picture. */
  caption?: string;
  /** Exactly two panels: movement first, rest second. */
  panels: MotionRestPanel[];
}

const MOVE = 'var(--ink-flag)';
const REST = 'var(--ink-green)';

/** Split a sentence around the focus word so the ending can be underlined. */
function highlight(hr: string, focus: string, color: string) {
  const at = hr.indexOf(focus);
  if (!focus || at < 0) return <>{hr}</>;
  return (
    <>
      {hr.slice(0, at)}
      <span
        data-testid="visual-focus"
        style={{ color, fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: 3 }}
      >
        {focus}
      </span>
      {hr.slice(at + focus.length)}
    </>
  );
}

function House({ ink }: { ink: string }) {
  return (
    <g stroke={ink} strokeWidth="2.5" fill="none" strokeLinejoin="round">
      <path d="M70 36 L108 8 L146 36 V84 H70 Z" />
      <path d="M97 84 V58 H119 V84" />
    </g>
  );
}

function Person({ x, ink }: { x: number; ink: string }) {
  return (
    <g stroke={ink} strokeWidth="2.5" fill="none" strokeLinecap="round">
      <circle cx={x} cy="52" r="6" fill={ink} />
      <path
        d={`M${x} 58 V74 M${x} 64 L${x - 7} 70 M${x} 64 L${x + 7} 70 M${x} 74 L${x - 6} 84 M${x} 74 L${x + 6} 84`}
      />
    </g>
  );
}

export default function MotionRestVisual({ slide }: { slide: MotionRestSlide }) {
  const [move, rest] = slide.panels;
  if (!move || !rest) return null;
  return (
    <div data-testid="visual-motion-rest" role="group" aria-label={slide.alt}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { p: move, ink: MOVE, moving: true },
          { p: rest, ink: REST, moving: false },
        ].map(({ p, ink, moving }) => (
          <div
            key={p.q}
            data-testid={moving ? 'visual-panel-move' : 'visual-panel-rest'}
            style={{
              border: `2px solid ${ink}`,
              borderRadius: 14,
              padding: '10px 8px 12px',
              background: 'var(--card)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: 18, color: ink }}>{p.q}</div>
            <div style={{ fontSize: 12, color: 'var(--subtext)' }}>{p.qEn}</div>
            <svg
              viewBox="0 0 160 96"
              aria-hidden="true"
              focusable="false"
              style={{ width: '100%', maxWidth: 190, height: 'auto', margin: '6px 0' }}
            >
              <House ink={ink} />
              {moving ? (
                <>
                  <Person x={20} ink={ink} />
                  <path d="M36 66 H84" stroke={ink} strokeWidth="2.5" strokeDasharray="5 4" />
                  <path
                    d="M78 59 L87 66 L78 73"
                    stroke={ink}
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              ) : (
                <Person x={108} ink={ink} />
              )}
            </svg>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: ink,
                textTransform: 'uppercase',
                letterSpacing: 0.4,
              }}
            >
              {p.motion} · {p.caseName}
            </div>
            <div style={{ fontSize: 17, marginTop: 6, color: 'var(--text)', fontWeight: 600 }}>
              {highlight(p.hr, p.focus, ink)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--subtext)', marginTop: 2 }}>{p.en}</div>
          </div>
        ))}
      </div>
      {slide.caption && (
        <p style={{ fontSize: 14, color: 'var(--text)', margin: '12px 2px 0', lineHeight: 1.5 }}>
          {slide.caption}
        </p>
      )}
    </div>
  );
}
