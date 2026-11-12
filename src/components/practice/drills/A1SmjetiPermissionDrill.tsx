// src/components/practice/drills/A1SmjetiPermissionDrill.tsx
//
// Engine-backed drill for the A1 lesson `smjeti-permission` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/smjetiPermissionDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  SMJETI_PERMISSION_DRILL_DATA,
  SMJETI_PERMISSION_MODE_LABELS,
} from '../../../data/drills/a1/smjetiPermissionDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1SmjetiPermissionDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1smjetipermission"
      title="Smjeti: May I?"
      subtitle="Practise what the lesson taught"
      modeLabels={SMJETI_PERMISSION_MODE_LABELS}
      data={SMJETI_PERMISSION_DRILL_DATA}
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
