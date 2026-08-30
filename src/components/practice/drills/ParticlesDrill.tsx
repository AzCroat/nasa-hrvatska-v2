// src/components/practice/drills/ParticlesDrill.tsx
//
// Engine-backed drill: the content is in ../../../data/drills/particlesDrill.
// Lazy-loaded so the bank stays off the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import { PARTICLES_DRILL_DATA, PARTICLES_MODE_LABELS } from '../../../data/drills/particlesDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function ParticlesDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="cestice"
      title="🔤 Čestice"
      subtitle="pa, ma, baš, valjda — mala riječ koja mijenja rečenicu"
      modeLabels={PARTICLES_MODE_LABELS}
      data={PARTICLES_DRILL_DATA}
      praise={{
        perfect: 'Savršeno — zvučite kao domaći! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Čestice traže još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
