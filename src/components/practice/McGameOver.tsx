import React from 'react';

// `challengeMode` and `onBack` were removed 2026-09-24: NOTHING ever passed
// McGame's optional `challengeMode`, so it was always false here, and the two
// branches keyed on it — the "1 per hour" refill line and the "Back to
// Practice" button `onBack` existed solely to serve — could not render. The
// text that survives is the arm that always ran. (The dead line also
// contradicted `lives.ts`, which regenerates 1 heart per FOUR hours; harmless
// while unreachable, and a trap for whoever wired challenge mode up.)
interface Props {
  onTryAgain: () => void;
  onContinueAnyway: () => void;
}
export default function McGameOver({ onTryAgain, onContinueAnyway }: Props) {
  return (
    <div className="scr-wrap" style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontSize: 52 }}>💔</div>
      <h3
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 22,
          color: 'var(--heading)',
          marginTop: 12,
        }}
      >
        No hearts left!
      </h3>
      <p style={{ color: 'var(--subtext)', marginTop: 8, fontSize: 14, lineHeight: 1.6 }}>
        Take a break and come back fresh, or keep going anyway.
      </p>
      <button className="b bp" style={{ marginTop: 24, width: '100%' }} onClick={onTryAgain}>
        🔄 Try Again
      </button>
      <button className="b bg" style={{ marginTop: 10, width: '100%' }} onClick={onContinueAnyway}>
        Continue Anyway →
      </button>
    </div>
  );
}
