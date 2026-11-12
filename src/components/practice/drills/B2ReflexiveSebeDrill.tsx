// src/components/practice/drills/B2ReflexiveSebeDrill.tsx
//
// Engine-backed drill for the B2 lesson `reflexive-sebe` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/reflexiveSebeDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  REFLEXIVE_SEBE_DRILL_DATA,
  REFLEXIVE_SEBE_MODE_LABELS,
} from '../../../data/drills/b2/reflexiveSebeDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2ReflexiveSebeDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2reflexivesebe"
      title="Myself, Yourself, Ourselves: sebe"
      subtitle="Practise what the lesson taught"
      modeLabels={REFLEXIVE_SEBE_MODE_LABELS}
      data={REFLEXIVE_SEBE_DRILL_DATA}
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
