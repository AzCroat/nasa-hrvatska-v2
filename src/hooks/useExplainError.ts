// src/hooks/useExplainError.ts
//
// Shared wrong-answer explanation hook (concept-teaching directive,
// 2026-08-18). /api/explain-error existed but reached only 4 of ~170
// practice screens — and NOT the case drills, where an English speaker most
// needs a plain-English explanation. This hook is the 6-line way to wire any
// drill into it: call request() in the wrong-answer branch, render
// <DrillExplainCard state={...} /> under the feedback panel.
//
// FAIL-SOFT IS NOT FAIL-SILENT, and for a long time this said one and did the
// other (owner report, 2026-09-17, on the Objektne zamjenice drill: "Didn't
// load explanation of answer I got incorrect when selected").
//
// The header used to claim failures "resolve to a quiet fallback line". There
// was no line. The catch set `null`, `DrillExplainCard` returns null on null,
// and `WrongAnswerHelp` had already hidden the button (spent once) — so the
// learner pressed "Explain this one to me", the control vanished, and nothing
// ever arrived. That is the feedback directive's NEVER twice over: a bare null
// from a feedback path with no named cause, and nothing rendered on failure.
//
// `lib/aiFailure` is the classifier the 2026-09-07 census built for exactly
// this and wired into the speaking coach, the exam scorer, the graded reader
// and the rest. It never reached the DRILL explainer, which since rec #7 sits
// under all 109 engine-backed drills — the widest feedback surface in the app.
//
// An explanation is still enrichment and never a blocker: the static tip and
// the free contrast stay put, and the failure is a card beside them, not
// instead of them.

import { useCallback, useEffect, useRef, useState } from 'react';
import { _aiPost } from '../lib/aiPost';
import { coerceAiText } from '../lib/aiText';
import {
  failureFromError,
  failureFromResponse,
  reportAiFailure,
  type AiFailure,
} from '../lib/aiFailure';

export interface ExplainErrorResult {
  explanation: string;
  rule: string;
  tip: string;
  example: string;
}

/** A failure the learner is told about, rather than silence. */
export interface ExplainFailed {
  failed: AiFailure;
}

export type ExplainState = ExplainErrorResult | 'loading' | ExplainFailed | null;

export function isExplainFailed(s: ExplainState): s is ExplainFailed {
  return !!s && typeof s === 'object' && 'failed' in s;
}

export function useExplainError(type: string, level: string) {
  const [explain, setExplain] = useState<ExplainState>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const reset = useCallback(() => setExplain(null), []);

  const request = useCallback(
    async (wrong: string, correct: string, context: string) => {
      setExplain('loading');
      try {
        const res = await _aiPost('/api/explain-error', {
          wrong,
          correct,
          context,
          type,
          level: level || 'B1',
        });
        if (!mountedRef.current) return;
        if (!res || !res.ok) {
          // Classified from the RESPONSE, so a daily-quota refusal and a paused
          // budget read as themselves rather than as one "unavailable".
          const failure = await failureFromResponse(res);
          reportAiFailure('drill-explain-error', failure);
          if (mountedRef.current) setExplain({ failed: failure });
          return;
        }
        const raw = (await res.json()) as Record<string, unknown>;
        // Coerce EVERY field before it reaches JSX. The ExplainErrorResult type
        // declares four strings, but that is a compile-time claim about data
        // this code did not produce: the model can return {hr, en} for a field
        // the prompt asked for as a sentence, and DrillExplainCard renders
        // these raw. React then throws "Objects are not valid as a React child
        // (found: object with keys {hr, en})" and takes the drill down — for an
        // explanation that is meant to be pure enrichment. See lib/aiText.ts.
        const data: ExplainErrorResult = {
          explanation: coerceAiText(raw.explanation),
          rule: coerceAiText(raw.rule),
          tip: coerceAiText(raw.tip),
          example: coerceAiText(raw.example),
        };
        if (mountedRef.current) setExplain(data);
      } catch (e) {
        if (!mountedRef.current) return;
        const failure = failureFromError(e);
        reportAiFailure('drill-explain-error', failure);
        setExplain({ failed: failure });
      }
    },
    [type, level],
  );

  return { explain, request, reset };
}
