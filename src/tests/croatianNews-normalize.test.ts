import { describe, it, expect } from 'vitest';
import { normalizeArticle } from '../components/croatia/CroatianNewsScreen';

/**
 * Guards the /api/news server↔client contract. The server emits key_vocabulary
 * as [{hr,en}] and summary_one_sentence as {hr,en}; the client render uses
 * v.word / v.meaning and <em>{summary_one_sentence}</em>. Without normalization
 * an object summary crashes React ("Objects are not valid as a React child")
 * and vocab chips render blank. normalizeArticle coerces to the internal shape.
 */
describe('normalizeArticle', () => {
  it('coerces the server {hr,en} shape to {word,meaning} + string summary', () => {
    const server = {
      source: 'RSS',
      simplified_title: 'Naslov',
      simplified_title_en: 'Title',
      simplified_text: 'Tekst.',
      simplified_text_en: 'Text.',
      key_vocabulary: [
        { hr: 'vlada', en: 'government' },
        { hr: 'izbori', en: 'elections' },
      ],
      summary_one_sentence: { hr: 'Sažetak.', en: 'Summary.' },
      link: null,
    } as never;

    const out = normalizeArticle(server);

    expect(out.key_vocabulary).toEqual([
      { word: 'vlada', meaning: 'government' },
      { word: 'izbori', meaning: 'elections' },
    ]);
    // Object summary flattened to a string so <em>{...}</em> never gets an object.
    expect(typeof out.summary_one_sentence).toBe('string');
    expect(out.summary_one_sentence).toBe('Sažetak. / Summary.');
  });

  it('passes through the legacy {word,meaning} + string shape unchanged', () => {
    const legacy = {
      source: 'sample',
      simplified_title: 'A',
      simplified_title_en: 'A',
      simplified_text: 'B',
      simplified_text_en: 'B',
      key_vocabulary: [{ word: 'pas', meaning: 'dog' }],
      summary_one_sentence: 'Pas laje. / The dog barks.',
      link: null,
    } as never;

    const out = normalizeArticle(legacy);

    expect(out.key_vocabulary).toEqual([{ word: 'pas', meaning: 'dog' }]);
    expect(out.summary_one_sentence).toBe('Pas laje. / The dog barks.');
  });

  it('tolerates missing/partial fields without throwing', () => {
    const partial = {
      source: 'RSS',
      simplified_title: 'X',
      key_vocabulary: [{ hr: 'samo-hr' }],
    } as never;

    const out = normalizeArticle(partial);
    expect(out.key_vocabulary).toEqual([{ word: 'samo-hr', meaning: '' }]);
    expect(out.summary_one_sentence).toBe('');
  });
});
