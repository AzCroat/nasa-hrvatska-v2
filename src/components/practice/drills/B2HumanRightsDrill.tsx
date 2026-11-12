// src/components/practice/drills/B2HumanRightsDrill.tsx
//
// Engine-backed drill for the B2 lesson `human-rights` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/humanRightsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  HUMAN_RIGHTS_DRILL_DATA,
  HUMAN_RIGHTS_MODE_LABELS,
} from '../../../data/drills/b2/humanRightsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2HumanRightsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2humanrights"
      title="Ljudska prava"
      subtitle="Practise what the lesson taught"
      modeLabels={HUMAN_RIGHTS_MODE_LABELS}
      data={HUMAN_RIGHTS_DRILL_DATA}
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
