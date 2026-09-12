/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

/**
 * Injected by Vite's `define` (vite.config.js) at build time — a per-deploy
 * timestamp.
 *
 * IT MUST BE READ AS A BARE IDENTIFIER. `define` performs a textual
 * substitution of the IDENTIFIER `__BUILD_ID__`; a member expression
 * (`globalThis.__BUILD_ID__`) is NOT substituted, stays a runtime property
 * lookup on an object nothing assigns, and is therefore permanently
 * `undefined`. That silently disabled two things for the life of the code —
 * the Sentry release (so every session envelope was discarded client-side by
 * `sendSession`'s missing-release guard) and the stale-build auto-update (so
 * `isStaleBuild` always saw a null running build and never reloaded). Both
 * failed closed and neither said anything.
 *
 * Declared here so TypeScript accepts the bare read; `typeof __BUILD_ID__` is
 * safe under test, where no substitution happens.
 */
declare const __BUILD_ID__: string | undefined;

// Vendor browser APIs not in the standard TypeScript DOM lib
interface Window {
  webkitAudioContext: typeof AudioContext;
  SpeechRecognition: typeof SpeechRecognition;
  webkitSpeechRecognition: typeof SpeechRecognition;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  __nhReportError?: (error: Error, info: import('react').ErrorInfo) => void;
}

// canvas-confetti has no bundled types
declare module 'canvas-confetti' {
  interface Options {
    particleCount?: number;
    angle?: number;
    spread?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    ticks?: number;
    gravity?: number;
    scalar?: number;
  }
  function confetti(options?: Options): Promise<null> | null;
  export = confetti;
}
