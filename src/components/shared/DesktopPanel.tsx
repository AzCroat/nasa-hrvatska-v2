import React from 'react';
import { useStats } from '../../context/StatsContext';
import { getUserCefr, type CefrLevel } from '../../lib/cefr';
import { getEffectiveLevelForUnlock } from '../../lib/cefrCertification';

const CEFR_LABELS: Record<CefrLevel, string> = {
  A1: 'Beginner',
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper-Intermediate',
  C1: 'Advanced',
  C2: 'Proficient',
};

// The badge is a PROFICIENCY CLAIM, so it shows the CERTIFIED level — the same
// resolver the Me tab's CEFR card uses (StatsTab getCEFR). Until 2026-09-06 this
// panel ran its own copy of the XP formula and showed the ELIGIBLE band, so a
// learner whose failed B2 check had honestly rolled their standing down to B1
// still saw "C1 · Advanced" in the corner while the Me tab said B1. XP does not
// advance a level here; a passed Level Check does. See the convention block at
// the top of src/lib/cefr.ts.
function getCEFR(xp: number, lc: number, gc: number): CefrLevel {
  return getEffectiveLevelForUnlock(getUserCefr(xp || 0, lc || 0, gc || 0));
}

export default function DesktopPanel() {
  const { stats } = useStats();
  const xp = stats?.xp ?? 0;
  const lc = stats?.lc ?? 0;
  const gc = stats?.gc ?? 0;
  const cefrLevel = getCEFR(xp, lc, gc);

  return (
    <aside className="desktop-panel" aria-label="Progress sidebar">
      {/* CEFR level badge — the certified level, same resolver as the Me tab */}
      <div
        data-testid="desktop-cefr-badge"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '16px',
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            flexShrink: 0,
            background: 'linear-gradient(135deg,#d4002d,#e63946)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            fontWeight: 900,
            color: '#fff',
          }}
        >
          {cefrLevel}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>
            {CEFR_LABELS[cefrLevel] ?? cefrLevel}
          </div>
          <div style={{ fontSize: 11, color: 'var(--subtext)', marginTop: 2 }}>
            {xp.toLocaleString()} XP · {lc} lessons
          </div>
        </div>
      </div>

      {/* Right rail intentionally minimal: the level chip above is the only
          progress signal here. The 'Your Progress' stats block, the AI Voice
          Conversation shortcut, and the Practice Now CTA were removed —
          stats live on the Me tab, AI lives exclusively on the AI Tutor tab,
          Practice is one tap on the bottom nav. Keeps the home screen
          uncluttered. */}
    </aside>
  );
}
