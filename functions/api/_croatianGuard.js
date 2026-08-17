// functions/api/_croatianGuard.js
//
// CROATIAN SCRIPT GUARD (owner directive, 2026-08-17): Cyrillic must never
// reach a user. A generation model drifting toward Serbian occasionally emits
// Cyrillic script ("At the Bakery" field report) — served verbatim, it lands
// in a Croatian heritage-learning app as exactly the wrong lesson.
//
// Defense in depth:
//   1. latinizeResponseBody — wired into functions/_middleware.js, the ONE
//      chokepoint every /api response passes through: any Cyrillic in a
//      textual response body is transliterated to Croatian Latin (gajica)
//      on the way out, streaming-safe. No endpoint, present or future, can
//      leak Cyrillic to the client.
//   2. CROATIAN_SCRIPT_RULE — a prompt fragment the Croatian-generating
//      endpoints append to their system prompts, steering the model away
//      from Cyrillic AND from Serbian lexicon/ekavica (which transliteration
//      alone cannot fix).
//   3. scripts/lintCroatianText.mjs — CI guard for the static content files
//      (encoding-bleed + Serbism blocklist).
//
// The transliteration is the standard Serbian-Cyrillic → Latin (azbuka →
// gajica) 1:1 mapping, plus best-effort mappings for the handful of wider
// Cyrillic letters a drifting model might emit; anything else in the Cyrillic
// blocks is dropped rather than served.

/** Serbian azbuka → gajica, plus pragmatic extras (Russian-only letters). */
const CYR_MAP = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  ђ: 'đ',
  е: 'e',
  ж: 'ž',
  з: 'z',
  и: 'i',
  ј: 'j',
  к: 'k',
  л: 'l',
  љ: 'lj',
  м: 'm',
  н: 'n',
  њ: 'nj',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  ћ: 'ć',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'c',
  ч: 'č',
  џ: 'dž',
  ш: 'š',
  // Not in the azbuka, but a drifting model can still emit them:
  й: 'j',
  ё: 'e',
  э: 'e',
  ю: 'ju',
  я: 'ja',
  щ: 'šč',
  ы: 'i',
  ъ: '',
  ь: '',
  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'G',
  Д: 'D',
  Ђ: 'Đ',
  Е: 'E',
  Ж: 'Ž',
  З: 'Z',
  И: 'I',
  Ј: 'J',
  К: 'K',
  Л: 'L',
  Љ: 'Lj',
  М: 'M',
  Н: 'N',
  Њ: 'Nj',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  Ћ: 'Ć',
  У: 'U',
  Ф: 'F',
  Х: 'H',
  Ц: 'C',
  Ч: 'Č',
  Џ: 'Dž',
  Ш: 'Š',
  Й: 'J',
  Ё: 'E',
  Э: 'E',
  Ю: 'Ju',
  Я: 'Ja',
  Щ: 'Šč',
  Ы: 'I',
  Ъ: '',
  Ь: '',
};

// The whole Cyrillic range (base + supplement + extended blocks).
const CYRILLIC_RE = /[Ѐ-ӿԀ-ԯꙀ-ꚟᲀ-᲏]/;
const CYRILLIC_RE_G = /[Ѐ-ӿԀ-ԯꙀ-ꚟᲀ-᲏]/g;

/** True when the text contains ANY Cyrillic codepoint. */
export function containsCyrillic(text) {
  return CYRILLIC_RE.test(String(text ?? ''));
}

/** Transliterate Cyrillic to Croatian Latin; unmapped Cyrillic is dropped. */
export function latinizeCyrillic(text) {
  return String(text ?? '').replace(CYRILLIC_RE_G, (ch) => CYR_MAP[ch] ?? '');
}

const TEXTUAL_CT = /application\/json|text\/|event-stream/i;

/**
 * Wrap a Response so any Cyrillic in a TEXTUAL body is transliterated on the
 * way to the client. Binary bodies (audio, images) pass through untouched, as
 * do bodiless responses. Streaming-safe: works chunk-by-chunk on SSE, and
 * TextDecoderStream handles UTF-8 sequences split across chunk boundaries.
 * (Residual gap, accepted: JSON that \u-escapes Cyrillic — our endpoints use
 * JSON.stringify, which does not escape non-ASCII.)
 */
export function latinizeResponseBody(response) {
  try {
    const ct = response?.headers?.get('content-type') || '';
    if (!response || !response.body || !TEXTUAL_CT.test(ct)) return response;
    let found = false;
    const stream = response.body
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(
        new TransformStream({
          transform(chunk, controller) {
            if (CYRILLIC_RE.test(chunk)) {
              found = true;
              controller.enqueue(latinizeCyrillic(chunk));
            } else {
              controller.enqueue(chunk);
            }
          },
          flush() {
            if (found) {
              // Visibility without noise: one structured line per contaminated
              // response, greppable in wrangler tail / log drains.
              console.warn('[CroatianGuard] Cyrillic transliterated in API response');
            }
          },
        }),
      )
      .pipeThrough(new TextEncoderStream());
    const headers = new Headers(response.headers);
    headers.delete('content-length'); // lj/nj/dž expansions change the length
    return new Response(stream, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  } catch {
    // The guard must never take a response down with it.
    return response;
  }
}

/**
 * Prompt fragment for every Croatian-generating endpoint. Appended to system
 * prompts so the model is steered at the source — the middleware guard fixes
 * script, but only the prompt can prevent Serbian LEXICON and ekavica.
 */
export const CROATIAN_SCRIPT_RULE =
  'LANGUAGE RULE (non-negotiable): all Croatian output must be STANDARD CROATIAN ' +
  '(hrvatski standardni jezik) in LATIN script only. Never use Cyrillic script. ' +
  'Never use Serbian variants: no ekavica (write lijepo/vrijeme/mlijeko/dijete, ' +
  'never lepo/vreme/mleko/dete) and no Serbian lexicon (write kruh/zrak/tisuća/' +
  'kazalište/tjedan/također/uvjet, never hleb/vazduh/hiljada/pozorište/sedmica/' +
  'takođe/uslov).';
