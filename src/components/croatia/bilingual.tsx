/**
 * bilingual — HR-first rendering for culture prose (7c).
 *
 * The Krajevi/Povijest content was English-only, which taught history but no
 * Croatian. The data now carries additive *Hr fields (server + mirrored client
 * copy); these helpers render Croatian as the primary text with the English
 * below, behind a per-user toggle. Fields are OPTIONAL by design — content
 * cached before the deploy has no *Hr fields and falls back to English-only,
 * so stale caches never render blank.
 */
import React, { useState } from 'react';

const TOGGLE_KEY = 'nh_culture_show_en';

export function useEnglishToggle(): { showEn: boolean; toggle: () => void } {
  const [showEn, setShowEn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(TOGGLE_KEY) !== '0';
    } catch {
      return true;
    }
  });
  const toggle = () =>
    setShowEn((v) => {
      try {
        localStorage.setItem(TOGGLE_KEY, v ? '0' : '1');
      } catch {
        /* localStorage unavailable — toggle stays session-local */
      }
      return !v;
    });
  return { showEn, toggle };
}

export function EnglishToggleButton({ showEn, toggle }: { showEn: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      data-testid="culture-en-toggle"
      aria-pressed={showEn}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        border: '1.5px solid var(--card-b)',
        background: 'var(--card)',
        borderRadius: 100,
        padding: '5px 14px',
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--subtext)',
        cursor: 'pointer',
        fontFamily: "'Outfit',sans-serif",
        marginBottom: 14,
      }}
    >
      {showEn ? 'Hide English' : 'Show English'}
    </button>
  );
}

interface BiTextProps {
  /** Croatian text — optional: absent on stale cached content → EN-only fallback. */
  hr?: string;
  en: string;
  showEn: boolean;
  /** Style for the primary paragraph (matches the host screen's typography). */
  style?: React.CSSProperties;
  /** Style override for the English translation line. */
  enStyle?: React.CSSProperties;
}

/**
 * HR-first prose block. Croatian is the primary text; English renders below it
 * (dimmed) while the toggle is on. Without an hr value the English keeps its
 * original styling, exactly as before 7c.
 */
export function BiText({ hr, en, showEn, style, enStyle }: BiTextProps) {
  if (!hr) return <span style={style}>{en}</span>;
  return (
    <>
      <span lang="hr" style={style}>
        {hr}
      </span>
      {showEn && (
        <span
          lang="en"
          style={{
            display: 'block',
            marginTop: 6,
            fontSize: 12.5,
            lineHeight: 1.6,
            color: 'var(--subtext)',
            fontStyle: 'italic',
            ...enStyle,
          }}
        >
          {en}
        </span>
      )}
    </>
  );
}
