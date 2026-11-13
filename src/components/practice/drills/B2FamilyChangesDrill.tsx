// src/components/practice/drills/B2FamilyChangesDrill.tsx
//
// Engine-backed drill for the B2 lesson `family-changes` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/familyChangesDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FAMILY_CHANGES_DRILL_DATA,
  FAMILY_CHANGES_MODE_LABELS,
} from '../../../data/drills/b2/familyChangesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2FamilyChangesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2familychanges"
      title="Obitelj nekad i danas"
      subtitle="Practise what the lesson taught"
      modeLabels={FAMILY_CHANGES_MODE_LABELS}
      data={FAMILY_CHANGES_DRILL_DATA}
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
