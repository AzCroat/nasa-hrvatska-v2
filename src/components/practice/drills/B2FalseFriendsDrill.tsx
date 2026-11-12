// src/components/practice/drills/B2FalseFriendsDrill.tsx
//
// Engine-backed drill for the B2 lesson `false-friends` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/falseFriendsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FALSE_FRIENDS_DRILL_DATA,
  FALSE_FRIENDS_MODE_LABELS,
} from '../../../data/drills/b2/falseFriendsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2FalseFriendsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2falsefriends"
      title="Aktualan Is Not Actual"
      subtitle="Practise what the lesson taught"
      modeLabels={FALSE_FRIENDS_MODE_LABELS}
      data={FALSE_FRIENDS_DRILL_DATA}
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
