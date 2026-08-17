/**
 * croatianGuard.test.js — the Croatian script guard (owner directive,
 * 2026-08-17: no Cyrillic, no Serbisms, anywhere).
 *
 * Pins:
 *  - the azbuka→gajica transliteration (both cases, digraphs, mixed words)
 *  - latinizeResponseBody: textual bodies cleaned (JSON + SSE), binary and
 *    bodiless responses untouched, guard never throws
 *  - the middleware chokepoint wiring and the prompt-rule adoption across
 *    every Croatian-generating endpoint (source pins — removing either
 *    silently reopens the leak)
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  containsCyrillic,
  latinizeCyrillic,
  latinizeResponseBody,
  CROATIAN_SCRIPT_RULE,
} from '../../functions/api/_croatianGuard.js';

describe('latinizeCyrillic', () => {
  it('transliterates the full Serbian azbuka to gajica, both cases', () => {
    expect(latinizeCyrillic('абвгдђежзијклљмнњопрстћуфхцчџш')).toBe(
      'abvgdđežzijklljmnnjoprstćufhcčdžš',
    );
    expect(latinizeCyrillic('АБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ')).toBe(
      'ABVGDĐEŽZIJKLLjMNNjOPRSTĆUFHCČDžŠ',
    );
  });

  it('repairs the mixed-script class from the field report', () => {
    expect(latinizeCyrillic('украшavamo')).toBe('ukrašavamo');
    expect(latinizeCyrillic('Свјеже pecivo, molim.')).toBe('Svježe pecivo, molim.');
  });

  it('leaves clean Croatian untouched', () => {
    const clean = 'Htio bih se naručiti — svježe pecivo, molim. Hvala na pomoći!';
    expect(latinizeCyrillic(clean)).toBe(clean);
    expect(containsCyrillic(clean)).toBe(false);
  });

  it('detects any Cyrillic codepoint', () => {
    expect(containsCyrillic('pecivo и kruh')).toBe(true);
    expect(containsCyrillic('')).toBe(false);
    expect(containsCyrillic(null)).toBe(false);
  });
});

describe('latinizeResponseBody', () => {
  it('cleans a JSON response body and keeps status/headers', async () => {
    const res = new Response(JSON.stringify({ reply: 'Добар dan! Izvolite хлеб.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    const out = latinizeResponseBody(res);
    expect(out.status).toBe(200);
    const body = await out.json();
    expect(body.reply).toBe('Dobar dan! Izvolite hleb.');
    expect(containsCyrillic(JSON.stringify(body))).toBe(false);
  });

  it('cleans an SSE stream chunk-by-chunk', async () => {
    const res = new Response('data: {"t":"Пекара"}\n\ndata: {"t":"kruh"}\n\n', {
      headers: { 'Content-Type': 'text/event-stream' },
    });
    const out = latinizeResponseBody(res);
    const text = await out.text();
    expect(text).toContain('Pekara');
    expect(containsCyrillic(text)).toBe(false);
  });

  it('passes binary (TTS audio) responses through untouched', () => {
    const res = new Response(new Uint8Array([1, 2, 3]), {
      headers: { 'Content-Type': 'audio/mpeg' },
    });
    expect(latinizeResponseBody(res)).toBe(res);
  });

  it('passes bodiless responses through untouched', () => {
    const res = new Response(null, { status: 204 });
    expect(latinizeResponseBody(res)).toBe(res);
  });
});

describe('wiring pins (source-level)', () => {
  it('the middleware chokepoint applies the guard to every /api response', () => {
    const mw = readFileSync('functions/_middleware.js', 'utf8');
    expect(mw).toContain("from './api/_croatianGuard.js'");
    expect(mw).toContain('latinizeResponseBody(response)');
  });

  it('every Croatian-generating endpoint carries the language rule', () => {
    for (const f of [
      'ai-chat',
      'maja',
      'conversation',
      'conversational-tutor',
      'dialogue',
      'listening',
      'micro-lesson',
    ]) {
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources from a fixed list
      const src = readFileSync(`functions/api/${f}.js`, 'utf8');
      expect(src, `${f}.js must import the script rule`).toContain('CROATIAN_SCRIPT_RULE');
    }
  });

  it('the rule itself bans Cyrillic and names the Croatian forms', () => {
    expect(CROATIAN_SCRIPT_RULE).toContain('LATIN script only');
    expect(CROATIAN_SCRIPT_RULE).toContain('kruh');
    expect(containsCyrillic(CROATIAN_SCRIPT_RULE)).toBe(false);
  });
});
