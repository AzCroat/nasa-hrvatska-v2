// src/components/practice/drills/B2FilmAndMusicDrill.tsx
//
// Engine-backed drill for the B2 lesson `film-and-music` (Croaticum restructure, 2026-11-12).
// The content is in ../../../data/drills/b2/filmAndMusicDrill. Lazy-loaded so the bank stays off
// the first-paint path (firstPaintGraph).

import React from 'react';
import ModeDrill from '../ModeDrill';
import {
  FILM_AND_MUSIC_DRILL_DATA,
  FILM_AND_MUSIC_MODE_LABELS,
} from '../../../data/drills/b2/filmAndMusicDrill';

interface Props {
  goBack: () => void;
  award?: (xp: number, celebrate?: boolean, activityType?: string) => void;
}

export default function B2FilmAndMusicDrill({ goBack, award }: Props) {
  return (
    <ModeDrill
      id="b2filmandmusic"
      title="Like in the Movies: Film and Music"
      subtitle="Practise what the lesson taught"
      modeLabels={FILM_AND_MUSIC_MODE_LABELS}
      data={FILM_AND_MUSIC_DRILL_DATA}
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
