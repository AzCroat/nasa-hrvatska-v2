/**
 * ScreenNotFound — the screen a path that names nothing lands on.
 *
 * Before this, an unknown path rendered the header, the tab bar and 33
 * characters of main content: a blank page with no message, no active tab and
 * no way forward. That is the dead end the next-step directive exists to
 * forbid, reached by the one route nobody tests — a bookmark to a screen that
 * has since been renamed (`/culture` was the Croatia tab until 2026-04-26), a
 * typo, or a capital letter (`/Dashboard` is not `/dashboard`).
 *
 * It names what happened, keeps the path visible so the learner can see what
 * was asked for, and offers the two ways out the app always has.
 */
import React from 'react';

export default function ScreenNotFound({
  path,
  goHome,
  goBack,
}: {
  path: string;
  goHome: () => void;
  goBack?: () => void;
}) {
  return (
    <div className="scr-wrap" data-testid="screen-not-found">
      <div className="c" style={{ padding: 24, textAlign: 'center', marginTop: 24 }}>
        <div style={{ fontSize: 44, marginBottom: 10 }} aria-hidden="true">
          🧭
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--heading)', margin: '0 0 8px' }}>
          That page isn&rsquo;t here
        </h2>
        <p style={{ fontSize: 14, color: 'var(--subtext)', lineHeight: 1.6, margin: '0 0 6px' }}>
          Nothing in the app answers to this address. It may have been renamed, or the link may be
          incomplete.
        </p>
        <p
          style={{
            fontSize: 13,
            color: 'var(--subtext)',
            fontFamily: 'ui-monospace,SFMono-Regular,Menlo,monospace',
            wordBreak: 'break-all',
            margin: '0 0 18px',
          }}
        >
          {path}
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="b bp" onClick={goHome} data-testid="not-found-home">
            Go to Today
          </button>
          {goBack && (
            <button className="b" onClick={goBack} data-testid="not-found-back">
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
