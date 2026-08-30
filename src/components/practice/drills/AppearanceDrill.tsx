// src/components/practice/drills/AppearanceDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/appearanceDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  APPEARANCE_DRILL_DATA,
  APPEARANCE_MODE_LABELS,
} from '../../../data/drills/appearanceDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function AppearanceDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="izgled"
      title="🧑 Opis osobe"
      subtitle="Kakav je? ili Koji je? — i komu pripadaju oči"
      modeLabels={APPEARANCE_MODE_LABELS}
      data={APPEARANCE_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — vidite svaku razliku! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Opis osobe traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
