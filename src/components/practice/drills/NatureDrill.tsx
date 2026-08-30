// src/components/practice/drills/NatureDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/natureDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { NATURE_DRILL_DATA, NATURE_MODE_LABELS } from '../../../data/drills/natureDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function NatureDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="priroda"
      title="🏔️ Priroda i okoliš"
      subtitle="bura, jugo, maestral — vjetrovi s imenom i posljedicama"
      modeLabels={NATURE_MODE_LABELS}
      data={NATURE_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — poznajete teren! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Priroda traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
