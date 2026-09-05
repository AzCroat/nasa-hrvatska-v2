import React from 'react';
import { H } from '../../data';
import { useContent } from '../../hooks/useContent';
import { useEnglishToggle, EnglishToggleButton, BiText } from './bilingual';
import { useApp } from '../../context/AppContext';

// B2–C2 culture deep dives (fluency initiative, 2026-08). Before this screen,
// every CROATIA_POOL entry gated at B1 or below, so an advanced learner's daily
// culture slot recycled B1 bilingual prose forever. One screen per tier
// (kultura_b2 / kultura_c1 / kultura_c2 routes), essays written AT register —
// B2 feature journalism, C1 cultural criticism, C2 essayistic. Data ships
// Bearer-gated from /api/content/core (CULTURE_DEEP_DIVES); completion is the
// Croatia slot's auto-complete-on-return contract, like RegionScreen.

const TIER_META: Record<string, { icon: string; title: string; sub: string }> = {
  B2: {
    icon: '🇭🇷',
    title: 'Kultura: Mentalitet',
    sub: 'kava · fjaka · kockice — how Croatia thinks',
  },
  C1: {
    icon: '🎻',
    title: 'Kultura: Baština',
    sub: 'klapa · knjige · dijaspora — the heritage layer',
  },
  C2: {
    icon: '🖋️',
    title: 'Kultura: Identitet',
    sub: 'pravopis · pisma · humor — the identity debates',
  },
};

interface Essay {
  key: string;
  emoji: string;
  title: string;
  titleEn: string;
  paragraphs: { hr: string; en: string }[];
  vocab: [string, string][];
}

interface Props {
  tier: 'B2' | 'C1' | 'C2';
  /**
   * One essay (2026-09-05): the daily session's culture slot now serves ONE
   * essay per entry (kultura_<tier>_<key> routes) so a culture day is a bounded
   * 3–5 minute read, not the whole tier. Absent → the tier catalog (kultura_<tier>).
   */
  essayKey?: string;
  goBack: () => void;
}

export default function CultureDeepDiveScreen({ tier, essayKey, goBack }: Props) {
  const { content, loading, error } = useContent();
  const { setScr } = useApp();
  const { showEn, toggle } = useEnglishToggle();
  const meta = TIER_META[tier]!;

  // Optional-chained: stale cached content from before this deploy has no
  // CULTURE_DEEP_DIVES key.
  const allEssays: Essay[] = (content?.CULTURE_DEEP_DIVES?.[tier] as Essay[] | undefined) ?? [];
  // An unknown key (a cached payload older than the essay) falls back to the
  // whole tier rather than an empty screen — the slot must never strand.
  const one = essayKey ? allEssays.find((e) => e.key === essayKey) : undefined;
  const essays: Essay[] = one ? [one] : allEssays;

  if (error)
    return (
      <div className="scr-wrap" style={{ padding: 24 }}>
        Couldn&apos;t load — please retry.
      </div>
    );
  if (loading || !content)
    return (
      <div className="scr-wrap" style={{ padding: 24 }}>
        Loading…
      </div>
    );
  // Stale cached content from before this deploy has no CULTURE_DEEP_DIVES key —
  // show a calm refresh hint rather than a blank screen.
  if (!essays.length)
    return (
      <div className="scr-wrap" style={{ padding: 24 }}>
        {H(`${meta.icon} ${meta.title}`, meta.sub, goBack)}
        <div className="c" style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6 }}>
          New culture essays are on their way — reopen this screen in a moment to load them.
        </div>
      </div>
    );

  return (
    <div className="scr-wrap">
      {H(`${meta.icon} ${meta.title}`, meta.sub, goBack)}
      <EnglishToggleButton showEn={showEn} toggle={toggle} />
      {essays.map((essay) => (
        <div key={essay.key} className="c" style={{ marginTop: 14, padding: '16px 16px 14px' }}>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 2 }}>
            {essay.emoji} {essay.title}
          </div>
          {showEn && (
            <div
              style={{
                fontSize: 12.5,
                color: 'var(--subtext)',
                fontStyle: 'italic',
                marginBottom: 8,
              }}
            >
              {essay.titleEn}
            </div>
          )}
          {essay.paragraphs.map((p, i) => (
            <p key={i} style={{ margin: '10px 0 0' }}>
              <BiText
                hr={p.hr}
                en={p.en}
                showEn={showEn}
                style={{ fontSize: 14.5, lineHeight: 1.7 }}
              />
            </p>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
            {essay.vocab.map(([hr, en]) => (
              <span
                key={hr}
                style={{
                  fontSize: 12,
                  padding: '4px 10px',
                  borderRadius: 100,
                  background: 'rgba(14,116,144,.08)',
                  border: '1px solid rgba(14,116,144,.25)',
                }}
              >
                <strong lang="hr">{hr}</strong>
                <span style={{ color: 'var(--subtext)' }}> — {en}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
      {one && allEssays.length > 1 && (
        <button
          className="b"
          style={{ marginTop: 14, width: '100%' }}
          onClick={() => setScr(`kultura_${tier.toLowerCase()}`)}
        >
          📚 Svi eseji · All {tier} essays ({allEssays.length})
        </button>
      )}
    </div>
  );
}
