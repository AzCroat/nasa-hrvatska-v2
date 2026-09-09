import React from 'react';
import { H } from '../../data';
import { POPCULTURE } from '../../data';

interface Props {
  goBack: () => void;
}

function PopCultureScreen({ goBack }: Props) {
  return (
    <div className="scr-wrap">
      {H('🎵 Croatian Pop Culture', 'Music, TV & artists your friends know', goBack)}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {/*
          These were buttons that opened YouTube — six of them a search results
          page (2026-09-09, owner directive: no YouTube links anywhere). They
          are reference cards now: who these artists are is the thing a
          diaspora learner comes here for, and it does not need an outbound
          link to be useful.

          NOT a <button>: with `web` gone the old handler would have called
          window.open(undefined) and opened a blank tab on every tap. A card
          that does nothing must not look like a control that does something.
          Four entries still carry a vetted `ytId`; if this screen ever gains
          the in-app player MediaTab already has, that is what it plays.
        */}
        {POPCULTURE.map(function (p, i) {
          return (
            <div
              key={i}
              className="tc"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 14px',
                cursor: 'default',
              }}
            >
              <div style={{ fontSize: 24 }} aria-hidden="true">
                {p.icon}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--heading)' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 11, color: 'var(--subtext)' }}>{p.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopCultureScreen;
