// src/components/practice/drills/C1CommaBasicsDrill.tsx
//
// Engine-backed drill for the C1 lesson `comma-basics` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/commaBasicsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMMA_BASICS_DRILL_DATA,
  COMMA_BASICS_MODE_LABELS,
} from '../../../data/drills/c1/commaBasicsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CommaBasicsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1commabasics"
      title="The Comma: Basic Rules"
      subtitle="Practise what the lesson taught"
      modeLabels={COMMA_BASICS_MODE_LABELS}
      data={COMMA_BASICS_DRILL_DATA}
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
