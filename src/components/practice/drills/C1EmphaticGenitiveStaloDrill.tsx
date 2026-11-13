// src/components/practice/drills/C1EmphaticGenitiveStaloDrill.tsx
//
// Engine-backed drill for the C1 lesson `emphatic-genitive-stalo` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/c1/emphaticGenitiveStaloDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  EMPHATIC_GENITIVE_STALO_DRILL_DATA,
  EMPHATIC_GENITIVE_STALO_MODE_LABELS,
} from '../../../data/drills/c1/emphaticGenitiveStaloDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function C1EmphaticGenitiveStaloDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="c1emphaticgenitivestalo"
      title="Ima Ljudi Koji… — Stalo Mi Je Do Tebe"
      subtitle="Practise what the lesson taught"
      modeLabels={EMPHATIC_GENITIVE_STALO_MODE_LABELS}
      data={EMPHATIC_GENITIVE_STALO_DRILL_DATA}
      praise={{
        perfect: 'Savršeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Još malo vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
