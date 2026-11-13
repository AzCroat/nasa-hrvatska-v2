// src/components/practice/drills/B2WordFormationAgentsDrill.tsx
//
// Engine-backed drill for the B2 lesson `word-formation-agents` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/wordFormationAgentsDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  WORD_FORMATION_AGENTS_DRILL_DATA,
  WORD_FORMATION_AGENTS_MODE_LABELS,
} from '../../../data/drills/b2/wordFormationAgentsDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2WordFormationAgentsDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2wordformationagents"
      title="Who Does It, What It Is Like: Building Nouns"
      subtitle="Practise what the lesson taught"
      modeLabels={WORD_FORMATION_AGENTS_MODE_LABELS}
      data={WORD_FORMATION_AGENTS_DRILL_DATA}
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
