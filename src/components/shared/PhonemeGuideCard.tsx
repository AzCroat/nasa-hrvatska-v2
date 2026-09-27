import React from 'react';
import { PHONEME_GUIDES } from './pronunciationUtils.js';

// ── Full phoneme guide card (shown for Croatian-specific sounds) ──────────────
export default function PhonemeGuideCard({ phoneme }: { phoneme: string }) {
  const [open, setOpen] = React.useState(false);
  const guides = PHONEME_GUIDES as Record<
    string,
    | {
        ipa: string;
        approx: string;
        articulate: string;
        example: string;
        contrast?: string;
        lips?: string;
        tongue?: string;
      }
    | undefined
  >;
  const guide = guides[phoneme] || guides[phoneme?.toLowerCase()];
  if (!guide) return null;
  return (
    <div style={{ marginTop: 8 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '3px 0',
          fontSize: 11,
          color: 'var(--ink-accent)',
          fontWeight: 700,
          fontFamily: "'Outfit',sans-serif",
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <span>{open ? '▲' : '▼'}</span>
        {open ? 'Hide articulation guide' : `How to pronounce "${phoneme}"`}
      </button>
      {open && (
        <div
          style={{
            marginTop: 6,
            padding: '12px 14px',
            borderRadius: 10,
            background: 'var(--grad-sky)',
            border: '1.5px solid #bae6fd',
            fontSize: 12,
            lineHeight: 1.55,
          }}
        >
          {/* IPA + approximation */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              marginBottom: 8,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: 15,
                fontWeight: 900,
                color: '#0c4a6e',
                background: '#e0f2fe',
                borderRadius: 6,
                padding: '2px 8px',
                border: '1px solid #7dd3fc',
              }}
            >
              {guide.ipa}
            </span>
            <span style={{ color: 'var(--ink-info)', fontWeight: 700 }}>{guide.approx}</span>
          </div>
          {/* Articulation */}
          <div style={{ marginBottom: 6 }}>
            <span style={{ fontWeight: 800, color: 'var(--ink-info)' }}>Articulation: </span>
            <span style={{ color: 'var(--text)' }}>{guide.articulate}</span>
          </div>
          {/* Contrast note */}
          {guide.contrast && (
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 800, color: 'var(--ink-mode)' }}>
                vs. similar sounds:{' '}
              </span>
              <span style={{ color: 'var(--ink-mode)' }}>{guide.contrast}</span>
            </div>
          )}
          {/* Example words */}
          <div style={{ marginTop: 4 }}>
            <span style={{ fontWeight: 800, color: 'var(--ink-green)' }}>Examples: </span>
            <span
              style={{
                fontFamily: 'serif',
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--ink-green)',
                fontStyle: 'italic',
              }}
            >
              {guide.example}
            </span>
          </div>
          {/* Lip/tongue position indicator */}
          <div
            style={{
              marginTop: 8,
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'Lips', value: guide.lips },
              { label: 'Tongue', value: guide.tongue },
            ].map(
              ({ label, value }) =>
                value && (
                  <span
                    key={label}
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 20,
                      background: 'var(--success-bg)',
                      border: '1px solid #86efac',
                      color: 'var(--ink-green)',
                    }}
                  >
                    {label}: {value}
                  </span>
                ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
