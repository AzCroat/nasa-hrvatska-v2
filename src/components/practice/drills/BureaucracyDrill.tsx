// src/components/practice/drills/BureaucracyDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/bureaucracyDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  BUREAUCRACY_DRILL_DATA,
  BUREAUCRACY_MODE_LABELS,
} from '../../../data/drills/bureaucracyDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function BureaucracyDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="salter"
      title="🏛️ Uredi i papiri"
      subtitle="OIB, obrazac, i bezlični jezik svakog šaltera"
      modeLabels={BUREAUCRACY_MODE_LABELS}
      data={BUREAUCRACY_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — sve ovjereno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Papirologija traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
