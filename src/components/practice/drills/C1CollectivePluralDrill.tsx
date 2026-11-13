// src/components/practice/drills/C1CollectivePluralDrill.tsx
//
// Engine-backed drill for the C1 lesson `collective-plural` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/collectivePluralDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COLLECTIVE_PLURAL_DRILL_DATA,
  COLLECTIVE_PLURAL_MODE_LABELS,
} from '../../../data/drills/c1/collectivePluralDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1CollectivePluralDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1collectiveplural"
      title="Collective Nouns in -je"
      subtitle="Practise what the lesson taught"
      modeLabels={COLLECTIVE_PLURAL_MODE_LABELS}
      data={COLLECTIVE_PLURAL_DRILL_DATA}
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
