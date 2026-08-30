// src/components/practice/drills/HobbiesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/hobbiesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { HOBBIES_DRILL_DATA, HOBBIES_MODE_LABELS } from '../../../data/drills/hobbiesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function HobbiesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="hobiji"
      title="🎸 Slobodno vrijeme"
      subtitle="igram nogomet, sviram gitaru, bavim se sportom, subotom"
      modeLabels={HOBBIES_MODE_LABELS}
      data={HOBBIES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — pravi hobist! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Slobodno vrijeme traži još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
