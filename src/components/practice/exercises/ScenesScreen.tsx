import React from 'react';
import { H, speak, DESCRIBE_SCENES } from '../../../data';

interface Props {
  goBack: () => void;
}

interface SceneQuestion {
  q: string;
  hint?: string;
  a?: string;
  en: string;
}
interface DescribeScene {
  title: string;
  desc: string;
  qs: SceneQuestion[];
}

// The "Describe the Scene" catalog. Its data is DESCRIBE_SCENES, a client-local
// export — NOT `content.SCENES`, which is the illustrated tap-a-word set from
// /api/content/core and has no `qs`. The screen read the latter from the day it
// was created and crashed on every open (Sentry 0d68c47c, 2026-09-05); the
// payload key and the local export merely shared a name. See the note beside
// DESCRIBE_SCENES in data/content.tsx.
function ScenesScreen({ goBack }: Props) {
  const scenes = DESCRIBE_SCENES as DescribeScene[];
  return (
    <div className="scr-wrap">
      {H('🖼️ Describe the Scene', 'Answer questions about everyday situations', goBack)}
      {scenes.map(function (scene, si) {
        return (
          <div key={si} className="c" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#164e63', marginBottom: 4 }}>
              {scene.title}
            </div>
            <div style={{ fontSize: 12, color: '#78716c', marginBottom: 10 }}>{scene.desc}</div>
            {scene.qs.map(function (q, qi) {
              return (
                <div key={qi} style={{ marginBottom: 10 }}>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`Play audio for ${q.q}`}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#164e63',
                      cursor: 'pointer',
                      marginBottom: 4,
                    }}
                    onClick={function () {
                      speak(q.q);
                    }}
                    onKeyDown={function (e) {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        speak(q.q);
                      }
                    }}
                  >
                    <span aria-hidden="true">🔊</span> {q.q}
                    {q.hint ? ' (' + q.hint + ' ...):' : ''}
                  </div>
                  <div style={{ fontSize: 12, color: '#78716c' }}>
                    {'🇬🇧 '}
                    {q.en}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ScenesScreen;
