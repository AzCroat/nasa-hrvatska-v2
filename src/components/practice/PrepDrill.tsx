import React from 'react';
import ModeDrill from './ModeDrill';
import { PREPDRILL } from '../../data';

// Preposition drill: which preposition a sentence needs, and — since 2026-09-27 —
// WHY, through a tip on every item naming the case the preposition governs. The
// bank had no tips at all until then, so a wrong answer said nothing.
const MODE_LABEL: Record<string, string> = { fill: 'Fill in the correct preposition' };
const BANK = PREPDRILL.map(({ sentence, ...rest }) => ({ ...rest, q: sentence, mode: 'fill' }));

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function PrepDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="preposition"
      title={'📍 Preposition Drills'}
      subtitle={'Fill in the correct preposition'}
      modeLabels={MODE_LABEL}
      data={BANK}
      praise={{
        perfect: 'Savršeno! 🏆',
        good: 'Vrlo dobro! 💪',
        more: 'Treba još vježbe.',
      }}
      goBack={goBack}
      award={award}
    />
  );
}
