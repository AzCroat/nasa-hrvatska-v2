// functions/api/_serbisms.js
//
// THE Serbism blocklist — single source of truth (output-observation
// directive, 2026-08-18). Two consumers run the SAME rules:
//   - scripts/lintCroatianText.mjs — CI guard over the static content files
//   - functions/api/output-observatory.js — the sweep over sampled LIVE
//     AI responses (what the models actually served users)
// One list, so a rule added for content automatically screens production
// output and vice versa. Never fork these back into a consumer.
//
// Precision rules (learned the hard way — v1 had 123 false positives):
//   - JS ASCII \b mis-fires around č/ć/đ/š/ž → Unicode lookarounds only.
//   - Morphology: oblique forms of vrijeme are vremena/vremenu IN STANDARD
//     CROATIAN (the ije→e alternation is regular), so only the bare
//     nominative "vreme" marks ekavica; same care applies throughout.
//   - Extend conservatively — false alarms train people to ignore the guard.

const sb = (core) => new RegExp(`(?<![\\p{L}])(?:${core})(?![\\p{L}])`, 'iu');

export const SERBISM_RULES = [
  { re: sb('hleb(a|u|om|e)?'), use: 'kruh' },
  { re: sb('vazduh(a|u|om)?'), use: 'zrak' },
  { re: sb('hiljad(a|e|u|ama)?'), use: 'tisuća' },
  { re: sb('pozorišt(e|a|u|em)'), use: 'kazalište' },
  { re: sb('takođe'), use: 'također' },
  // Condolences (2026-08-26). Croatian is `sućut`; `saučešće` is the Serbian
  // form. The -ešć- stem is what marks it — `saučesnik` (accomplice) is
  // perfectly good Croatian and has -esn-, so it cannot collide.
  { re: sb('saučešć(e|a|u|em)?'), use: 'sućut' },
  { re: sb('uslov(a|u|e|i|ima)?'), use: 'uvjet' },
  // Train (2026-08-30). Found by mutation-testing the A2 travel drill: the app's
  // first content about trains, and `vozom` — the likeliest Serbism anywhere in
  // that topic — passed the lint clean.
  //
  // The enumeration IS the precision, and two absences are deliberate:
  //
  //   `voze` — the standard Croatian 3rd-person plural of `voziti` (`oni voze`).
  //   Flagging it would mark correct Croatian wrong.
  //
  //   the BARE `voz` — which is the form a learner is likeliest to write, and is
  //   still left uncaught. Adding it produced three findings against existing
  //   content and all three were mentions rather than uses: two in the C1
  //   `language-identity` quiz, which teaches the vlak/voz contrast by name, and
  //   one in the `time-calendar` etymology of `kolovoz` (kolo + voz, the month
  //   the carts roll) — where `voz` is a live Croatian root, not a Serbism. The
  //   corpus is the argument: a rule that flags correct Croatian is worse than
  //   the gap it closes.
  //
  // The `language-identity` half of that is a carve-out gap worth knowing about:
  // CONTRASTIVE_LESSONS suspends the Serbism check for a lesson's structural
  // fields (rows, points, highlight) but NOT for its quiz `q`/`options`, which
  // the flat regex pass scans without knowing which lesson it is inside. A
  // lesson whose subject is Croatian-against-Serbian is exactly where a named
  // Serbian form belongs, so the next rule addition will hit this too.
  //
  // `voziti`, `vozač`, `vozilo`, `vozni red`, `vožnja`, `prijevoz` and `izvoz`
  // are all safe by construction — a letter follows, so the lookaround rejects.
  { re: sb('voz(a|u|om|ovi|ova|ove|ovima)'), use: 'vlak' },
  { re: sb('saobraćaj(a|u|em)?'), use: 'promet' },
  { re: sb('bezbedn\\p{L}*'), use: 'siguran/sigurnost' },
  { re: sb('obavešt\\p{L}*'), use: 'obavijest/obavještenje' },
  // Ekavica — bare forms only; oblique cases coincide with standard Croatian:
  { re: sb('lep|lepa|lepo|lepi'), use: 'lijep/lijepo' },
  { re: sb('vreme'), use: 'vrijeme' },
  { re: sb('mlek(o|a|u)'), use: 'mlijeko' },
  { re: sb('dete'), use: 'dijete' },
  { re: sb('čovek(a|u|om)?'), use: 'čovjek' },
  { re: sb('reč|reči'), use: 'riječ' },
  { re: sb('gde|ovde|negde|nigde'), use: 'gdje/ovdje/negdje/nigdje' },
  { re: sb('uvek'), use: 'uvijek' },
];

/** First Serbism found in `text`, or null. Returns {match, use}. */
export function findSerbism(text) {
  const s = String(text ?? '');
  for (const rule of SERBISM_RULES) {
    const m = s.match(rule.re);
    if (m) return { match: m[0], use: rule.use };
  }
  return null;
}
