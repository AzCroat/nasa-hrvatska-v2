// src/hooks/useExplainError.ts
//
// Shared wrong-answer explanation hook (concept-teaching directive,
// 2026-08-18). /api/explain-error existed but reached only 4 of ~170
// practice screens — and NOT the case drills, where an English speaker most
// needs a plain-English explanation. This hook is the 6-line way to wire any
// drill into it: call request() in the wrong-answer branch, render
// <DrillExplainCard state={...} /> under the feedback panel.
//
// Fail-soft: quota/network/auth failures resolve to a quiet fallback line —
// an explanation is enrichment, never a blocker.

import { useCallback, useEffect, useRef, useState } from 'react';
import { _aiPost } from '../lib/aiPost';
import { coerceAiText } from '../lib/aiText';

export interface ExplainErrorResult {
  explanation: string;
  rule: string;
  tip: string;
  example: string;
}

export type ExplainState = ExplainErrorResult | 'loading' | null;

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
        if (!res.ok) throw new Error('API error');
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
      } catch {
        if (mountedRef.current) setExplain(null); // quiet — the static tip remains
      }
    },
    [type, level],
  );

  return { explain, request, reset };
}
