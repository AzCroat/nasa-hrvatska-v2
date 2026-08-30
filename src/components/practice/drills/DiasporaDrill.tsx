// src/components/practice/drills/DiasporaDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/diasporaDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { DIASPORA_DRILL_DATA, DIASPORA_MODE_LABELS } from '../../../data/drills/diasporaDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function DiasporaDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="dijaspora"
      title="🌍 Dijaspora i baština"
      subtitle="zavičaj, korijeni, i kako govoriti o vlastitu hrvatskom"
      modeLabels={DIASPORA_MODE_LABELS}
      data={DIASPORA_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — jezik je vaš! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Ova tema traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
