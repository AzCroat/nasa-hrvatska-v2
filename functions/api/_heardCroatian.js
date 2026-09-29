// functions/api/_heardCroatian.js
//
// Server twin of src/lib/heardCroatian.ts — read that file's header for the why
// (owner report, 2026-09-29: "I said Bog and it wrote bok"). Applied to every
// transcript transcribeCroatian returns (Deepgram, Whisper, Workers AI), so the exam's
// speaking tasks, Maja's Whisper path and the live tutor get the same spelling the
// browser recogniser now does. heardCroatian.test.ts runs both copies over the same
// cases, so they cannot drift.

const L = 'A-Za-zčćđšžČĆĐŠŽ';
const WORD = new RegExp(`(?<![${L}])(bok)(?![${L}])`, 'giu');
const IDIOM = new RegExp(`(?<![${L}])bok\\s+uz\\s+bok(?![${L}])`, 'giu');

function matchCase(src) {
  if (src === src.toUpperCase()) return 'BOG';
  if (src[0] === src[0].toUpperCase()) return 'Bog';
  return 'bog';
}

/** The transcript with the app's greeting spelled the app's way. */
export function heardCroatian(text) {
  if (!text || !/bok/i.test(text)) return text;
  // Offsets covered by the idiom `bok uz bok`, which keeps its spelling.
  const idiom = [];
  for (const m of text.matchAll(IDIOM)) idiom.push([m.index, m.index + m[0].length]);
  return text.replace(WORD, (m, _w, at) =>
    idiom.some(([a, b]) => at >= a && at < b) ? m : matchCase(m),
  );
}
