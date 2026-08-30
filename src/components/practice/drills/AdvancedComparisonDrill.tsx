// src/components/practice/drills/AdvancedComparisonDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/advancedComparisonDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  ADVANCED_COMPARISON_DRILL_DATA,
  ADVANCED_COMPARISON_MODE_LABELS,
} from '../../../data/drills/advancedComparisonDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AdvancedComparisonDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="usporedbec1"
      title="🪞 Napredna usporedba"
      subtitle="kao or poput, od or nego — the constructions, not the forms"
      modeLabels={ADVANCED_COMPARISON_MODE_LABELS}
      data={ADVANCED_COMPARISON_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — usporedba je vaša! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Usporedba traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
