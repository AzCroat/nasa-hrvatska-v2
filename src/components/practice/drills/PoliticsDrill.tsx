// src/components/practice/drills/PoliticsDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/politicsDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { POLITICS_DRILL_DATA, POLITICS_MODE_LABELS } from '../../../data/drills/politicsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PoliticsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="politika"
      title="🏛️ Politika i društvo"
      subtitle="Sabor, a ne parlament — i izbori koji nemaju jedninu"
      modeLabels={POLITICS_MODE_LABELS}
      data={POLITICS_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — izglasano! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Politika traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
