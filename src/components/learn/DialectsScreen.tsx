import React from 'react';
import { H } from '../../data';
import { useContent } from '../../hooks/useContent';
import { accentInk } from '../../lib/accentInk';

interface Props {
  goBack: () => void;
}
function DialectsScreen({ goBack }: Props) {
  const { content, loading, error } = useContent();
  if (error)
    return (
      <div className="scr-wrap">
        {H('🗺️ Regional Dialects', "Couldn't load — please retry.", goBack)}
      </div>
    );
  if (loading || !content)
    return <div className="scr-wrap">{H('🗺️ Regional Dialects', 'Loading…', goBack)}</div>;
  const DIALECTS = content.DIALECTS as {
    intro: string;
    types: any[];
    examples: any[];
    chakavianNote: string;
    heritageNote: string;
    mutualIntelligibility: string;
  };
  return (
    <div className="scr-wrap">
      {H('🗺️ Regional Dialects', 'Štokavski, Kajkavski, Čakavski', goBack)}

      {/* Intro */}
      <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 20 }}>
        {DIALECTS.intro}
      </p>

      {/* Dialect cards — DIALECTS.types (was incorrectly DIALECTS.info) */}
      {DIALECTS.types.map(function (d, i) {
        return (
          <div
            key={i}
            className="c"
            style={{ marginBottom: 12, borderLeft: '4px solid ' + d.color }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <div style={{ fontSize: 16, fontWeight: 800 }}>{d.name}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: accentInk(d.color) }}>
                "{d.what}"
              </div>
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-muted-warm)', marginTop: 4 }}>
              {d.region}
            </div>
            <div style={{ fontSize: 13, marginTop: 4, lineHeight: 1.6 }}>{d.desc}</div>
          </div>
        );
      })}

      {/* Comparison table — DIALECTS.examples (was incorrectly DIALECTS.compare) */}
      <h3 className="sh" style={{ marginTop: 20 }}>
        Comparison Table
      </h3>
      <div style={{ overflowX: 'auto', marginBottom: 20 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              {['English', 'Standard (Što)', 'Zagreb (Kaj)', 'Coast (Ča)'].map(function (h, i) {
                return (
                  <th
                    key={i}
                    style={{
                      padding: '8px 10px',
                      borderBottom: '2px solid #e7e5e4',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {/* Fields are .en, .std, .kaj, .cak — was incorrectly .sto and .ca */}
            {DIALECTS.examples.map(function (r, i) {
              return (
                <tr
                  key={i}
                  style={{
                    borderBottom: '1px solid #f3f4f6',
                    background: i % 2 === 0 ? 'transparent' : 'var(--surface-mute)',
                  }}
                >
                  <td style={{ padding: '8px 10px', color: 'var(--ink-muted-warm)' }}>{r.en}</td>
                  <td style={{ padding: '8px 10px', fontWeight: 600 }}>{r.std}</td>
                  <td style={{ padding: '8px 10px', fontWeight: 600 }}>{r.kaj}</td>
                  <td style={{ padding: '8px 10px', fontWeight: 600 }}>{r.cak}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Čakavian note */}
      <div
        className="c"
        style={{
          marginBottom: 12,
          borderLeft: '4px solid #b45309',
          background: 'var(--warning-bg)',
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-warn)', marginBottom: 6 }}>
          🏝️ Čakavian — The Coastal Dialect
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-body)', lineHeight: 1.7 }}>
          {DIALECTS.chakavianNote}
        </div>
      </div>

      {/* Heritage speaker note */}
      <div
        className="c"
        style={{ marginBottom: 12, borderLeft: '4px solid #7c3aed', background: 'var(--mode-bg)' }}
      >
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-mode)', marginBottom: 6 }}>
          🌍 Heritage Speakers (Diaspora)
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-body)', lineHeight: 1.7 }}>
          {DIALECTS.heritageNote}
        </div>
      </div>

      {/* Mutual intelligibility note */}
      <div
        className="c"
        style={{ marginBottom: 20, borderLeft: '4px solid #0e7490', background: 'var(--info-bg)' }}
      >
        <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-accent)', marginBottom: 6 }}>
          🤝 Mutual Intelligibility
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-body)', lineHeight: 1.7 }}>
          {DIALECTS.mutualIntelligibility}
        </div>
      </div>
    </div>
  );
}

export default DialectsScreen;
