// src/components/practice/drills/B1TellingStoryDrill.tsx
//
// Engine-backed drill for the B1 lesson `telling-a-story` (book-order audit, 2026-11-13).
// The content is in ../../../data/drills/b1/tellingStoryDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  TELLING_STORY_DRILL_DATA,
  TELLING_STORY_MODE_LABELS,
} from '../../../data/drills/b1/tellingStoryDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B1TellingStoryDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b1tellingstory"
      title="Pričanje priče"
      subtitle="Practise what the lesson taught"
      modeLabels={TELLING_STORY_MODE_LABELS}
      data={TELLING_STORY_DRILL_DATA}
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
