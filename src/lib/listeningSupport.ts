// listeningSupport.ts — pure helpers for AIListeningScreen, extracted to keep
// the screen under the 800-line cap.
import { classifyAiLimit, formatAiResetTime, BUDGET_PAUSE_EN } from './aiLimit';

/**
 * Interleave dialogue lines turn-by-turn across speakers, so the rendered
 * transcript (and the TTS audio built from the same string) plays as a
 * real back-and-forth conversation instead of "all speaker A's lines,
 * then all speaker B's lines". Backend returns each speaker with a
 * `lines` array in time order; turn N for everyone goes before turn N+1.
 */
export interface DialogueSpeaker {
  name?: string;
  lines?: unknown[];
}

export function interleaveDialogue(speakers: DialogueSpeaker[] | undefined | null): string {
  if (!Array.isArray(speakers) || speakers.length === 0) return '';
  const maxTurns = speakers.reduce(
    (max, s) => Math.max(max, Array.isArray(s.lines) ? s.lines.length : 0),
    0,
  );
  const out: string[] = [];
  for (let i = 0; i < maxTurns; i++) {
    for (const spk of speakers) {
      const line = Array.isArray(spk.lines) ? spk.lines[i] : undefined;
      if (line == null) continue;
      out.push(`${spk.name || 'Speaker'}: ${String(line)}`);
    }
  }
  return out.join('\n\n');
}

/**
 * Turn a failed /api/listening response into an Error carrying a
 * user-readable message. Before this, quota/rate-limit/server failures all
 * collapsed into a generic "Something went wrong" — indistinguishable from an
 * outage (owner report 2026-07-21). Mirrors AIConversation/LiveTutor handling.
 */
export async function listeningFailureFromResponse(
  res: Response,
): Promise<Error & { userMessage?: string }> {
  let errBody: { error?: string; resetAt?: string } = {};
  try {
    errBody = await res.json();
  } catch {}
  const failure = new Error(`listening API error: ${res.status}`) as Error & {
    userMessage?: string;
  };
  // Classification lives in lib/aiLimit so the two server codes are declared in
  // exactly one place — four other call sites had drifted from them.
  const limit = classifyAiLimit({ status: res.status, code: errBody.error });
  if (limit === 'budget') {
    failure.userMessage = BUDGET_PAUSE_EN;
  } else if (limit === 'daily') {
    const resetTime = formatAiResetTime(errBody.resetAt);
    failure.userMessage = `Daily AI limit reached${resetTime ? ` — resets at ${resetTime}` : ''}. Dictation and stories still work today.`;
  } else if (limit === 'burst') {
    failure.userMessage = 'A little too fast — wait a minute and try again.';
  } else if (res.status >= 500) {
    failure.userMessage = 'The generator hiccuped — tap to try again.';
  }
  return failure;
}
