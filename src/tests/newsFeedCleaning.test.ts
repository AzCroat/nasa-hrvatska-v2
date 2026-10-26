// A feed description is HTML in several encodings. Dnevnik sends it
// entity-escaped (`&lt;![CDATA[ &lt;img src=…&gt; text`); the old cleaner
// stripped tags first and turned named entities into spaces, so the pieces
// survived as text: "![CDATA[ img src= https://image.dnevnik.hr/…" (seen in the
// 2026-10-20 observatory incident). Decode first, then strip.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { cleanFeedText, fetchFeed } from '../../functions/api/news.js';

describe('cleanFeedText', () => {
  it('removes an entity-escaped CDATA + img wrapper (Dnevnik)', () => {
    const raw =
      '&lt;![CDATA[ &lt;img src="https://image.dnevnik.hr/media/image/a.jpg" /&gt; Odbjegli republikanci prijete Trumpu ]]&gt;';
    expect(cleanFeedText(raw)).toBe('Odbjegli republikanci prijete Trumpu');
  });
  it('handles double-encoded markup', () => {
    expect(cleanFeedText('&amp;lt;p&amp;gt;Tekst&amp;lt;/p&amp;gt;')).toBe('Tekst');
  });
  it('decodes numeric entities instead of leaving them raw', () => {
    expect(cleanFeedText('&#269;ak &#x161;kola')).toBe('čak škola');
  });
  it('drops an invalid code point instead of throwing', () => {
    expect(cleanFeedText('a&#99999999;b&#xD800;c')).toBe('abc');
  });
  it('leaves clean text alone and collapses whitespace', () => {
    expect(cleanFeedText('  Dobar   dan\n svima ')).toBe('Dobar dan svima');
  });
});

describe('the cleaner is what the parser uses', () => {
  it('a Dnevnik-shaped item comes out clean through the real fetchFeed', async () => {
    const xml =
      '<rss><channel><item><title>Naslov</title><description>' +
      '&lt;![CDATA[ &lt;img src="https://x.hr/a.jpg" /&gt; Pravi tekst ]]&gt;' +
      '</description><link>https://x.hr/1</link></item></channel></rss>';
    const res = await fetchFeed({ name: 'X', urls: ['https://x.hr/feed'] }, (async () => ({
      ok: true,
      status: 200,
      text: async () => xml,
    })) as never);
    expect(res.items[0].description).toBe('Pravi tekst');
  });
});

describe('Cyrillic never reaches the simplifier', () => {
  it('the user message is transliterated before the model call', () => {
    const src = readFileSync('functions/api/news.js', 'utf8')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    expect(src).toMatch(/const userContent = latinizeCyrillic\(/);
    expect(src).toMatch(/import \{ CROATIAN_SCRIPT_RULE, latinizeCyrillic \}/);
  });
});
