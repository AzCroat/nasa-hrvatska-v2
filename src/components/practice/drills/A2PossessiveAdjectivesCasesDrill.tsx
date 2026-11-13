// src/components/practice/drills/A2PossessiveAdjectivesCasesDrill.tsx
//
// Engine-backed drill for the A2 lesson `possessive-adjectives-cases` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a2/possessiveAdjectivesCasesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  POSSESSIVE_ADJECTIVES_CASES_DRILL_DATA,
  POSSESSIVE_ADJECTIVES_CASES_MODE_LABELS,
} from '../../../data/drills/a2/possessiveAdjectivesCasesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A2PossessiveAdjectivesCasesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a2possessiveadjectivescases"
      title="In Ana's House, With Marko's Brother"
      subtitle="Practise what the lesson taught"
      modeLabels={POSSESSIVE_ADJECTIVES_CASES_MODE_LABELS}
      data={POSSESSIVE_ADJECTIVES_CASES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
