// src/components/practice/drills/ArgumentDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/argumentDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { ARGUMENT_DRILL_DATA, ARGUMENT_MODE_LABELS } from '../../../data/drills/argumentDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ArgumentDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="argumentacija"
      title="🧩 Građenje argumenta"
      subtitle="Što se tiče… i u tome što — oblici koji se uče cijeli"
      modeLabels={ARGUMENT_MODE_LABELS}
      data={ARGUMENT_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — uvjerljivo do kraja! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Argumentacija traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
