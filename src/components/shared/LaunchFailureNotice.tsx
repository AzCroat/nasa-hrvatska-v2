/**
 * LaunchFailureNotice — the one strip every launch surface shows.
 *
 * TWO CAUSES, TWO SENTENCES, and that is the point. The original strip said
 * "check your connection and tap again" for BOTH reasons, but `empty-pool`
 * means the launcher found nothing to serve — a content or classification gap
 * — and sending that learner to check their router is the same mistake as
 * ClozeEngine's explain-error copy (CLAUDE.md: never imply learner fault for a
 * server condition). `load-error` genuinely is a failed fetch of a lazy chunk,
 * so it keeps the original wording verbatim.
 */
import React from 'react';
import { type LaunchFailureReason } from '../../lib/launchFailure';

export const LAUNCH_FAILURE_COPY: Record<LaunchFailureReason, string> = {
  'load-error':
    "Couldn't start the lesson — check your connection and tap again. If it keeps happening, close and reopen the app to get the latest version.",
  'empty-pool':
    "There's nothing to practise here yet. Pick another activity — this one opens up as you learn more words.",
};

export default function LaunchFailureNotice({
  reason,
  testId = 'launch-error',
  style,
}: {
  reason: LaunchFailureReason | null;
  testId?: string;
  style?: React.CSSProperties;
}) {
  if (!reason) return null;
  return (
    <div
      data-testid={testId}
      data-launch-failure={reason}
      role="status"
      style={{
        marginBottom: 10,
        padding: '10px 12px',
        borderRadius: 10,
        background: 'rgba(204,0,0,.08)',
        border: '1px solid rgba(204,0,0,.35)',
        color: 'var(--error, #c00)',
        fontSize: 12.5,
        fontWeight: 700,
        lineHeight: 1.45,
        ...style,
      }}
    >
      {LAUNCH_FAILURE_COPY[reason]}
    </div>
  );
}
