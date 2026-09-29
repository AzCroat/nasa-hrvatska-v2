// src/lib/heardCroatian.ts
//
// WHAT THE RECOGNISER HEARD, IN THIS APP'S CROATIAN (owner report, 2026-09-29).
//
// Owner: "Guided speaking I said Bog and it wrote bok. We don't use communist
// greetings in this application." The greeting here is `bog` (owner decision,
// 2026-07; CLAUDE.md "Croatian Content Authoring"). Every speech recogniser the app
// uses — the browser's hr-HR model, Deepgram, Whisper — writes the greeting as `bok`,
// because that is the spelling in the text they were trained on, and the two are
// homophones in running speech (final devoicing: /bog/ is pronounced [bok]). So a
// learner who says the app's greeting correctly was shown a transcript that
// contradicted the app, and on the rehearse and build stages was graded against
// `Bog` with `bok` — told to try again for saying it right.
//
// The rule is ONE substitution, applied at the single point each transcript is
// born (every onresult, and the server's transcribeCroatian): the whole word `bok`
// becomes `bog`, keeping its capitalisation. The idiom `bok uz bok` ("side by side",
// the one deliberate exception in the owner's decision) is kept, and inflected
// `boka`/`boku`/`bokom` (the noun "side") are untouched because only the bare word
// is matched. Server twin: functions/api/_heardCroatian.js — held equal by
// heardCroatian.test.ts, which runs both over the same cases.

const L = 'A-Za-zčćđšžČĆĐŠŽ';
const WORD = new RegExp(`(?<![${L}])(bok)(?![${L}])`, 'giu');
const IDIOM = new RegExp(`(?<![${L}])bok\\s+uz\\s+bok(?![${L}])`, 'giu');

function matchCase(src: string): string {
  if (src === src.toUpperCase()) return 'BOG';
  if (src[0] === src[0]!.toUpperCase()) return 'Bog';
  return 'bog';
}

/** The transcript with the app's greeting spelled the app's way. */
export function heardCroatian(text: string): string {
  if (!text || !/bok/i.test(text)) return text;
  // Offsets covered by the idiom `bok uz bok`, which keeps its spelling.
  const idiom: Array<[number, number]> = [];
  for (const m of text.matchAll(IDIOM)) idiom.push([m.index!, m.index! + m[0].length]);
  return text.replace(WORD, (m: string, _w: string, at: number) =>
    idiom.some(([a, b]) => at >= a && at < b) ? m : matchCase(m),
  );
}
