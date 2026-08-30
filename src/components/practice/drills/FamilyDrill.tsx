// src/components/practice/drills/FamilyDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/familyDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { FAMILY_DRILL_DATA, FAMILY_MODE_LABELS } from '../../../data/drills/familyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function FamilyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="obitelj"
      title="👨‍👩‍👧 Obitelj"
      subtitle="stric or ujak, braća su došla — family words and the plurals that misbehave"
      modeLabels={FAMILY_MODE_LABELS}
      data={FAMILY_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — obitelj je vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Obitelj traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
