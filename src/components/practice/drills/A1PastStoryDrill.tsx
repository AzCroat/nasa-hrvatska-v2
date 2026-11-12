// src/components/practice/drills/A1PastStoryDrill.tsx
//
// Engine-backed drill for the A1 lesson `past-story` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/a1/pastStoryDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  PAST_STORY_DRILL_DATA,
  PAST_STORY_MODE_LABELS,
} from '../../../data/drills/a1/pastStoryDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function A1PastStoryDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="a1paststory"
      title="Telling a Story"
      subtitle="Practise what the lesson taught"
      modeLabels={PAST_STORY_MODE_LABELS}
      data={PAST_STORY_DRILL_DATA}
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
