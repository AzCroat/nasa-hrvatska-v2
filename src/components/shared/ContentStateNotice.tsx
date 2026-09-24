/**
 * ContentStateNotice — what a content-dependent SCREEN shows before it has
 * content, and when the fetch failed.
 *
 * TWO STATES, TWO SENTENCES, for the reason `LaunchFailureNotice` and
 * `poolLaunchBlock` already record: "not here yet" and "it failed" are
 * different facts, and telling a learner the second while the first is true is
 * the same lie one layer up (NEVER-DO 13).
 *
 * Twenty content-dependent screens already say both, inline, via their own
 * `H(title, 'Loading…' | "Couldn't load — please retry.", goBack)` header.
 * FIVE said neither — BodyDesc, Clothes, Countries, Professions and Weather
 * each returned a bare back button for BOTH branches, so a learner who tapped
 * in during the content window (measured at ~9 s in the E2E harness) or after a
 * failed fetch met an EMPTY PAGE with an arrow, with the two causes rendered
 * byte-identically. Weather had no error branch at all, so a failed fetch left
 * that page blank for ever.
 *
 * This is a component rather than five more inline copies because a sixth
 * screen is what the census keeps finding; `contentStateSpeaks.test.ts` derives
 * the rule from source so the sixth cannot land silently.
 */
import React from 'react';

export type ContentState = 'loading' | 'error';

export const CONTENT_STATE_COPY: Record<ContentState, string> = {
  loading: 'Loading this page — one moment.',
  error: "This page couldn't be loaded. Check your connection and try again.",
};

export default function ContentStateNotice({
  state,
  testId = 'content-state',
}: {
  state: ContentState;
  testId?: string;
}) {
  return (
    <div
      data-testid={testId}
      data-content-state={state}
      role="status"
      style={{
        padding: '14px 16px',
        borderRadius: 12,
        background: state === 'error' ? 'rgba(204,0,0,.08)' : 'rgba(0,0,0,.05)',
        border: state === 'error' ? '1px solid rgba(204,0,0,.35)' : '1px solid rgba(0,0,0,.08)',
        color: state === 'error' ? 'var(--error, #c00)' : 'inherit',
        fontSize: 13.5,
        fontWeight: 700,
        lineHeight: 1.5,
      }}
    >
      {CONTENT_STATE_COPY[state]}
    </div>
  );
}
