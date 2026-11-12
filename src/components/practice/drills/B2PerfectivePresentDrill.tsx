// src/components/practice/drills/B2PerfectivePresentDrill.tsx
//
// Engine-backed drill for the B2 lesson `perfective-present` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/perfectivePresentDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PERFECTIVE_PRESENT_DRILL_DATA,
  PERFECTIVE_PRESENT_MODE_LABELS,
} from '../../../data/drills/b2/perfectivePresentDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2PerfectivePresentDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2perfectivepresent"
      title="When I Finish: the Perfective Present"
      subtitle="Practise what the lesson taught"
      modeLabels={PERFECTIVE_PRESENT_MODE_LABELS}
      data={PERFECTIVE_PRESENT_DRILL_DATA}
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
