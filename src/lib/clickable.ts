/**
 * clickable.ts — the keyboard half of an `onClick` on something that is not a button.
 *
 * A `<div onClick={…}>` is invisible to a keyboard: it is not in the tab order,
 * it has no role, and Enter/Space do nothing on it. The action is simply not
 * available — which is a harder failure than the invisible focus ring sweep 93
 * fixed, because there the control could at least be reached.
 *
 * The repo already had the right pattern (`IdiomsScreen`: role + tabIndex +
 * an Enter/Space handler); it was applied on some screens and not others, which
 * is how a convention decays. This is that pattern as one function, so the next
 * one is a spread rather than eight lines to get right again.
 *
 *   <div {...clickable(() => setScr('my_words'))} style={…}>
 *
 * WHEN NOT TO USE IT:
 *   - a modal BACKDROP whose click closes the sheet. The keyboard equivalent is
 *     Escape plus the sheet's own Close button, and putting the backdrop in the
 *     tab order adds a focus stop that announces itself as a button and covers
 *     the whole screen. (Measured: all four backdrops in this app sit over a
 *     real close control.)
 *   - a per-WORD tap inside running text (tap a word to hear or translate it).
 *     Making every word focusable puts hundreds of stops in the tab order of a
 *     single paragraph, which is worse for the keyboard user than the missing
 *     affordance; the word's text is on screen either way.
 *   - anything that is genuinely a native control. Use the native control.
 */
import type { KeyboardEvent } from 'react';

export function clickable(onActivate: () => void, label?: string) {
  return {
    role: 'button' as const,
    tabIndex: 0,
    onClick: onActivate,
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onActivate();
      }
    },
    ...(label ? { 'aria-label': label } : {}),
  };
}
