// src/components/practice/drills/C1AbbreviationsDrill.tsx
//
// Engine-backed drill for the C1 lesson `abbreviations` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/abbreviationsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ABBREVIATIONS_DRILL_DATA,
  ABBREVIATIONS_MODE_LABELS,
} from '../../../data/drills/c1/abbreviationsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1AbbreviationsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1abbreviations"
      title="npr., HNK-a, 5 km"
      subtitle="Practise what the lesson taught"
      modeLabels={ABBREVIATIONS_MODE_LABELS}
      data={ABBREVIATIONS_DRILL_DATA}
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
