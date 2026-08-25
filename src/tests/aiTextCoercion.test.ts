/**
 * aiTextCoercion.test.ts — model JSON must not reach JSX unvalidated
 * (Sentry triage, 2026-08-25).
 *
 * THE CRASH: "Objects are not valid as a React child (found: object with keys
 * {hr, en})". /api/explain-error's schema asks for `example` as "one short
 * example sentence in Croatian" — a scalar — while neighbouring prompts in the
 * same app return {hr, en} pairs. A model returning the bilingual shape for the
 * scalar field produces valid JSON that satisfies the TypeScript type (which is
 * a compile-time claim about data this code did not produce) and then kills the
 * drill in React's renderer, for an explanation that is meant to be pure
 * enrichment.
 *
 * useExplainError feeds seven case drills plus cloze, dictation, McGame and
 * review, so the coercion belongs at that ONE boundary rather than in each
 * consumer's JSX.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { coerceAiText } from '../lib/aiText';

describe('coerceAiText', () => {
  it('passes a plain string through untouched', () => {
    expect(coerceAiText('Idem u trgovinu.')).toBe('Idem u trgovinu.');
    expect(coerceAiText('')).toBe('');
  });

  it('joins a bilingual pair rather than dropping half of it', () => {
    // The learner loses nothing: both halves were useful content.
    expect(coerceAiText({ hr: 'Idem u trgovinu.', en: 'I am going to the shop.' })).toBe(
      'Idem u trgovinu. / I am going to the shop.',
    );
  });

  it('keeps whichever half is present', () => {
    expect(coerceAiText({ hr: 'Dobar dan.' })).toBe('Dobar dan.');
    expect(coerceAiText({ en: 'Good day.' })).toBe('Good day.');
  });

  it('renders nothing for an object with neither half', () => {
    // '' is honest. "[object Object]" is what React would have shown had it not
    // thrown, and is worse than an absent line.
    expect(coerceAiText({ foo: 'bar' })).toBe('');
    expect(coerceAiText({})).toBe('');
  });

  it('stringifies scalars a model might return unquoted', () => {
    expect(coerceAiText(42)).toBe('42');
    expect(coerceAiText(true)).toBe('true');
  });

  it('returns empty for absent or unrenderable values', () => {
    for (const v of [null, undefined, ['a'], () => {}]) {
      expect(coerceAiText(v), String(v)).toBe('');
    }
  });

  it('never returns a non-string — the property React actually needs', () => {
    const hostile = [
      { hr: { nested: 'x' }, en: 'ok' },
      { hr: 1, en: 2 },
      Object.create(null),
      new Date(),
      Symbol('x'),
    ];
    for (const v of hostile) {
      expect(typeof coerceAiText(v)).toBe('string');
    }
  });
});

describe('useExplainError coerces before state', () => {
  afterEach(() => vi.restoreAllMocks());

  it('turns a bilingual `example` into a renderable string', async () => {
    // The exact shape that crashed: a scalar field returned as {hr, en}.
    vi.resetModules();
    vi.doMock('../lib/aiPost', () => ({
      _aiPost: async () => ({
        ok: true,
        json: async () => ({
          explanation: 'The genitive marks possession.',
          rule: 'The of-form (genitive)',
          tip: 'Think "of the".',
          example: { hr: 'Knjiga mog brata.', en: "My brother's book." },
        }),
      }),
    }));
    const { useExplainError } = await import('../hooks/useExplainError');
    const { renderHook, act, waitFor } = await import('@testing-library/react');

    const { result } = renderHook(() => useExplainError('case_drill', 'A1'));
    await act(async () => {
      await result.current.request('wrong', 'right', 'ctx');
    });
    await waitFor(() => expect(result.current.explain).not.toBe('loading'));

    const state = result.current.explain as Record<string, unknown>;
    expect(typeof state.example).toBe('string');
    expect(state.example).toBe("Knjiga mog brata. / My brother's book.");
    // Every field, not just the one that happened to crash.
    for (const k of ['explanation', 'rule', 'tip', 'example']) {
      expect(typeof state[k], k).toBe('string');
    }
  });

  it('leaves a well-formed response unchanged', async () => {
    vi.resetModules();
    vi.doMock('../lib/aiPost', () => ({
      _aiPost: async () => ({
        ok: true,
        json: async () => ({
          explanation: 'E',
          rule: 'R',
          tip: 'T',
          example: 'X',
        }),
      }),
    }));
    const { useExplainError } = await import('../hooks/useExplainError');
    const { renderHook, act, waitFor } = await import('@testing-library/react');

    const { result } = renderHook(() => useExplainError('cloze', 'B1'));
    await act(async () => {
      await result.current.request('a', 'b', 'c');
    });
    await waitFor(() => expect(result.current.explain).not.toBe('loading'));
    expect(result.current.explain).toEqual({
      explanation: 'E',
      rule: 'R',
      tip: 'T',
      example: 'X',
    });
  });
});
