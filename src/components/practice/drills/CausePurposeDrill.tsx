// src/components/practice/drills/CausePurposeDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/causePurposeDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  CAUSE_PURPOSE_DRILL_DATA,
  CAUSE_PURPOSE_MODE_LABELS,
} from '../../../data/drills/causePurposeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function CausePurposeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="uzrokb1"
      title="🎯 Uzrok i namjera"
      subtitle="jer pada kiša or zbog kiše — clause or noun"
      modeLabels={CAUSE_PURPOSE_MODE_LABELS}
      data={CAUSE_PURPOSE_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — uzrok i namjera su vaši! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Uzrok i namjera traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
