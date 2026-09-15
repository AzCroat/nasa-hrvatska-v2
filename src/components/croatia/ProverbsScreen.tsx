import React, { useEffect } from 'react';
import { H, speak } from '../../data';
import { useContent } from '../../hooks/useContent';
import { signalSessionCompleteIfActive } from '../../lib/sessionSignal';
import { recordCultureItem } from '../../lib/appUtils';

interface Props {
  goBack: () => void;
}

interface Proverb {
  hr: string;
  en: string;
  meaning?: string;
}

export default function ProverbsScreen({ goBack }: Props) {
  const { content, loading, error } = useContent();
  // Don't strand a Today's Session activity on content-load failure.
  useEffect(() => {
    if (error) signalSessionCompleteIfActive('proverbs');
  }, [error]);
  if (error)
    return (
      <div className="scr-wrap">
        {H('🌟 Hrvatske Poslovice', "Couldn't load — please retry.", goBack)}
      </div>
    );
  if (loading || !content)
    return <div className="scr-wrap">{H('🌟 Hrvatske Poslovice', 'Loading…', goBack)}</div>;
  const PROVERBS = content.PROVERBS as unknown as Proverb[];
  // The `proverb` badge — "Read 3 Croatian proverbs" — reads
  // `nh_culture.proverbCnt`, which NOTHING HAS EVER WRITTEN: the counter existed
  // only in that predicate and in a test that set it by hand, so the badge was
  // unearnable. This screen is a browse list whose one interaction is tapping a
  // proverb to hear it, so that tap is the read. Recorded by the Croatian text,
  // which is the proverb's natural id, so three taps on ONE proverb stay one.
  const hear = (p: Proverb) => {
    speak(p.hr);
    recordCultureItem('proverb', p.hr);
  };
  return (
    <div className="scr-wrap">
      {H('🌟 Hrvatske Poslovice', 'Croatian Proverbs — Tap to hear', goBack)}
      {PROVERBS.map((p, i) => (
        <div
          key={i}
          className="c"
          role="button"
          tabIndex={0}
          style={{ marginBottom: 10, cursor: 'pointer' }}
          onClick={() => hear(p)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              hear(p);
            }
          }}
          aria-label={'Hear proverb: ' + p.hr}
        >
          <div style={{ fontSize: 15, fontWeight: 700, color: '#92400e', fontStyle: 'italic' }}>
            {p.hr} <span aria-hidden="true">🔊</span>
          </div>
          <div style={{ fontSize: 14, color: '#0e7490', fontWeight: 600, marginTop: 4 }}>
            {p.en}
          </div>
        </div>
      ))}
    </div>
  );
}
