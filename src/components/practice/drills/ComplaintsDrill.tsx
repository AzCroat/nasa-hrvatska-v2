// src/components/practice/drills/ComplaintsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/complaintsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  COMPLAINTS_DRILL_DATA,
  COMPLAINTS_MODE_LABELS,
} from '../../../data/drills/complaintsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ComplaintsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="zalbe"
      title="🔧 Kad nešto ne radi"
      subtitle="Ne radi klima — kvar se prijavljuje, krivac ne"
      modeLabels={COMPLAINTS_MODE_LABELS}
      data={COMPLAINTS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — riješeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Žalbe traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
