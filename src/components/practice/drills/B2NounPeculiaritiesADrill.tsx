// src/components/practice/drills/B2NounPeculiaritiesADrill.tsx
//
// Engine-backed drill for the B2 lesson `noun-peculiarities-a` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/nounPeculiaritiesADrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  NOUN_PECULIARITIES_A_DRILL_DATA,
  NOUN_PECULIARITIES_A_MODE_LABELS,
} from '../../../data/drills/b2/nounPeculiaritiesADrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2NounPeculiaritiesADrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2nounpeculiaritiesa"
      title="Gradovi, Ljudi, Oči"
      subtitle="Practise what the lesson taught"
      modeLabels={NOUN_PECULIARITIES_A_MODE_LABELS}
      data={NOUN_PECULIARITIES_A_DRILL_DATA}
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
