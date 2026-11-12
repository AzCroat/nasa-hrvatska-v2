// src/components/practice/drills/A1FlatRoomsDrill.tsx
//
// Engine-backed drill for the A1 lesson `flat-rooms` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/flatRoomsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FLAT_ROOMS_DRILL_DATA,
  FLAT_ROOMS_MODE_LABELS,
} from '../../../data/drills/a1/flatRoomsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1FlatRoomsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1flatrooms"
      title="My Flat"
      subtitle="Practise what the lesson taught"
      modeLabels={FLAT_ROOMS_MODE_LABELS}
      data={FLAT_ROOMS_DRILL_DATA}
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
